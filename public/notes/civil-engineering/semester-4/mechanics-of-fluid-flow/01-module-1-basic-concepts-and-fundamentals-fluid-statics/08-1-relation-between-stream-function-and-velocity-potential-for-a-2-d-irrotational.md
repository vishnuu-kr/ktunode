---
title: "`1 – Relation between stream function and velocity potential for a 2-D irrotational and incompressible flow"
subject: "MECHANICS OF FLUID FLOW"
module: "Module 1: Basic Concepts and Fundamentals: Fluid statics"
branch: "Civil Engineering"
semester: 4
topicId: "689f15cc56b5e963ba810a64"
status: "completed"
scrapedAt: "2026-05-20T18:46:23.699Z"
---
# Mechanics of Fluid Flow: Module 1 - Basic Concepts and Fundamentals: Fluid Statics

## Topic 1: Relation between Stream Function and Velocity Potential for a 2-D Irrotational and Incompressible Flow

This module introduces fundamental concepts in fluid mechanics, focusing on the behavior of fluids at rest and in motion. This specific topic explores the relationship between two important mathematical tools used to describe fluid flow: the stream function ($\psi$) and the velocity potential ($\phi$). This relationship is crucial for analyzing **2-D irrotational and incompressible flows**.

---

### Learning Outcomes:

By the end of this topic, you should be able to:

*   Define and explain the concepts of stream function ($\psi$) and velocity potential ($\phi$).
*   Understand the conditions under which both stream function and velocity potential exist for a fluid flow.
*   Derive and understand the mathematical relationships between stream function and velocity potential for a 2-D irrotational and incompressible flow.
*   Apply these relationships to solve problems involving such flows.
*   Recognize the significance of the Cauchy-Riemann equations in this context.

---

### Key Concepts and Definitions:

#### 1. Stream Function ($\psi$)

*   **Definition:** The stream function is a scalar function of space and time, denoted by $\psi(x, y, t)$, whose partial derivatives with respect to coordinates define the velocity components of a fluid.
*   **Existence Condition:** The stream function is defined for **2-D incompressible flows**.
*   **Mathematical Definition (Cartesian Coordinates):** For a 2-D flow in the x-y plane, with velocity components $u$ (in x-direction) and $v$ (in y-direction):
    *   $u = \frac{\partial \psi}{\partial y}$
    *   $v = -\frac{\partial \psi}{\partial x}$
*   **Physical Interpretation:**
    *   **Constant $\psi$ lines:** Lines of constant stream function are called **streamlines**.
    *   **Mass flow rate:** The difference in the stream function between two streamlines represents the mass flow rate per unit depth between those streamlines. For an incompressible fluid with density $\rho$, the volume flow rate per unit depth is $\frac{\psi_2 - \psi_1}{\rho}$.
    *   **Fluid confinement:** Fluid cannot flow across streamlines. Streamlines act as impermeable boundaries.

#### 2. Velocity Potential ($\phi$)

*   **Definition:** The velocity potential is a scalar function of space and time, denoted by $\phi(x, y, t)$, whose negative gradient gives the velocity vector of a fluid.
*   **Existence Condition:** The velocity potential exists for **irrotational flows**.
*   **Mathematical Definition (Cartesian Coordinates):** For a 2-D flow in the x-y plane, with velocity components $u$ and $v$:
    *   $u = \frac{\partial \phi}{\partial x}$
    *   $v = \frac{\partial \phi}{\partial y}$
*   **Physical Interpretation:**
    *   **Constant $\phi$ lines:** Lines of constant velocity potential are called **equipotential lines**.
    *   **Orthogonality:** Streamlines and equipotential lines are **orthogonal** to each other in a 2-D irrotational flow. This means they intersect at right angles.
    *   **Conservative forces:** The existence of a velocity potential implies that the flow is **conservative**, meaning there is no vorticity (or circulation) in the flow.

#### 3. Irrotational Flow

*   **Definition:** A flow is irrotational if there is no net angular velocity of fluid particles. Mathematically, the vorticity vector is zero.
*   **2-D Irrotationality Condition (Cartesian Coordinates):** For a 2-D flow, the condition for irrotationality is:
    *   $\frac{\partial v}{\partial x} - \frac{\partial u}{\partial y} = 0$

#### 4. Incompressible Flow

*   **Definition:** A flow is incompressible if the density of the fluid remains constant. For a 2-D flow, this is expressed by the continuity equation.
*   **2-D Incompressibility Condition (Cartesian Coordinates):** The continuity equation for a 2-D incompressible flow is:
    *   $\frac{\partial u}{\partial x} + \frac{\partial v}{\partial y} = 0$

---

### Relation between Stream Function and Velocity Potential

We are considering a **2-D irrotational and incompressible flow**. This is a very important type of flow in fluid mechanics, as it simplifies analysis significantly.

Let's assume:
*   The flow is in the x-y plane.
*   Velocity components are $u$ and $v$.

From the definitions, we have:

*   **Stream Function ($\psi$):**
    *   $u = \frac{\partial \psi}{\partial y}$  (Equation 1)
    *   $v = -\frac{\partial \psi}{\partial x}$ (Equation 2)

*   **Velocity Potential ($\phi$):**
    *   $u = \frac{\partial \phi}{\partial x}$  (Equation 3)
    *   $v = \frac{\partial \phi}{\partial y}$  (Equation 4)

Now, let's relate them using the conditions of irrotationality and incompressibility.

**Step 1: Using the Irrotationality Condition**

For an irrotational flow, we have:
$\frac{\partial v}{\partial x} - \frac{\partial u}{\partial y} = 0$

Substitute the expressions for $u$ and $v$ in terms of $\psi$ (Equations 1 and 2):
$\frac{\partial}{\partial x}\left(-\frac{\partial \psi}{\partial x}\right) - \frac{\partial}{\partial y}\left(\frac{\partial \psi}{\partial y}\right) = 0$
$-\frac{\partial^2 \psi}{\partial x^2} - \frac{\partial^2 \psi}{\partial y^2} = 0$
$\frac{\partial^2 \psi}{\partial x^2} + \frac{\partial^2 \psi}{\partial y^2} = 0$

This is the **Laplace equation** for the stream function. It tells us that for an irrotational flow, the stream function satisfies Laplace's equation.

Now, substitute the expressions for $u$ and $v$ in terms of $\phi$ (Equations 3 and 4) into the irrotationality condition:
$\frac{\partial}{\partial x}\left(\frac{\partial \phi}{\partial y}\right) - \frac{\partial}{\partial y}\left(\frac{\partial \phi}{\partial x}\right) = 0$
$\frac{\partial^2 \phi}{\partial x \partial y} - \frac{\partial^2 \phi}{\partial y \partial x} = 0$

This equation is always true due to the equality of mixed partial derivatives (assuming the flow is smooth enough), confirming that the velocity potential exists for irrotational flows.

**Step 2: Using the Incompressibility Condition**

For an incompressible flow, we have:
$\frac{\partial u}{\partial x} + \frac{\partial v}{\partial y} = 0$

Substitute the expressions for $u$ and $v$ in terms of $\phi$ (Equations 3 and 4):
$\frac{\partial}{\partial x}\left(\frac{\partial \phi}{\partial x}\right) + \frac{\partial}{\partial y}\left(\frac{\partial \phi}{\partial y}\right) = 0$
$\frac{\partial^2 \phi}{\partial x^2} + \frac{\partial^2 \phi}{\partial y^2} = 0$

This is also the **Laplace equation**, but this time for the velocity potential. It tells us that for an incompressible flow, the velocity potential satisfies Laplace's equation.

Now, substitute the expressions for $u$ and $v$ in terms of $\psi$ (Equations 1 and 2) into the incompressibility condition:
$\frac{\partial}{\partial x}\left(\frac{\partial \psi}{\partial y}\right) + \frac{\partial}{\partial y}\left(-\frac{\partial \psi}{\partial x}\right) = 0$
$\frac{\partial^2 \psi}{\partial x \partial y} - \frac{\partial^2 \psi}{\partial y \partial x} = 0$

Again, this equation is always true, confirming that the stream function exists for incompressible flows.

**Step 3: Deriving the Direct Relationship**

Let's equate the velocity components from the stream function and velocity potential definitions.

Equating $u$:
$\frac{\partial \psi}{\partial y} = \frac{\partial \phi}{\partial x}$  (Equation 5)

Equating $v$:
$-\frac{\partial \psi}{\partial x} = \frac{\partial \phi}{\partial y}$ (Equation 6)

These are the **Cauchy-Riemann equations** adapted for fluid mechanics.

**Crucial Observation:**

Compare Equation 5 and Equation 6:
*   Equation 5: $\frac{\partial \psi}{\partial y} = \frac{\partial \phi}{\partial x}$
*   Equation 6: $\frac{\partial \psi}{\partial x} = -\frac{\partial \phi}{\partial y}$ (Rearranging Equation 6)

These relationships imply that $\psi$ and $\phi$ are related in a manner similar to the relationship between the real and imaginary parts of a complex analytic function.

**Mathematical Relationship:**

Consider a complex number $z = x + iy$. Let $f(z) = \phi(x, y) + i\psi(x, y)$.
For $f(z)$ to be an analytic function, it must satisfy the Cauchy-Riemann equations:

1.  $\frac{\partial \phi}{\partial x} = \frac{\partial \psi}{\partial y}$
2.  $\frac{\partial \phi}{\partial y} = -\frac{\partial \psi}{\partial x}$

These are precisely the relationships we derived in Equations 5 and 6!

Therefore, for a 2-D irrotational and incompressible flow, the stream function $\psi$ and the velocity potential $\phi$ are the real and imaginary parts of a **complex potential function** $W(z) = \phi + i\psi$.

**Consequences of this Relationship:**

1.  **Orthogonality:**
    *   The gradient of $\phi$ is the velocity vector: $\nabla \phi = \frac{\partial \phi}{\partial x} \mathbf{i} + \frac{\partial \phi}{\partial y} \mathbf{j} = u\mathbf{i} + v\mathbf{j}$.
    *   The gradient of $\psi$ is related to the velocity vector: $\nabla \psi = \frac{\partial \psi}{\partial x} \mathbf{i} + \frac{\partial \psi}{\partial y} \mathbf{j} = -v\mathbf{i} + u\mathbf{j}$.
    *   The dot product of these gradients is: $\nabla \phi \cdot \nabla \psi = (u)(-v) + (v)(u) = -uv + uv = 0$.
    *   This confirms that the curves of constant $\phi$ (equipotential lines) are orthogonal to the curves of constant $\psi$ (streamlines).

2.  **Conformal Mapping:** Complex potential theory can be used to transform complex flow fields into simpler ones, which is a powerful tool for solving problems.

3.  **Harmonic Functions:** Both $\phi$ and $\psi$ are harmonic functions because they satisfy Laplace's equation.

---

### Examples:

#### Example 1: Uniform Flow

Consider a uniform flow in the positive x-direction with velocity $U$.
Here, $u = U$ and $v = 0$.

**Using Stream Function:**
*   $u = \frac{\partial \psi}{\partial y} \implies U = \frac{\partial \psi}{\partial y} \implies \psi = Uy + C_1$
*   $v = -\frac{\partial \psi}{\partial x} \implies 0 = -\frac{\partial \psi}{\partial x} \implies \psi = C_2$ (constant with respect to x)

Combining these, we get $\psi = Uy$. (Let $C_1=0$ without loss of generality for a specific streamline).
The streamlines are horizontal lines ($y = \text{constant}$).

**Using Velocity Potential:**
*   $u = \frac{\partial \phi}{\partial x} \implies U = \frac{\partial \phi}{\partial x} \implies \phi = Ux + C_3$
*   $v = \frac{\partial \phi}{\partial y} \implies 0 = \frac{\partial \phi}{\partial y} \implies \phi = C_4$ (constant with respect to y)

Combining these, we get $\phi = Ux$. (Let $C_3=0$ without loss of generality for a specific equipotential line).
The equipotential lines are vertical lines ($x = \text{constant}$).

**Checking the Relationship:**
*   $\frac{\partial \psi}{\partial y} = \frac{\partial}{\partial y}(Uy) = U$
*   $\frac{\partial \phi}{\partial x} = \frac{\partial}{\partial x}(Ux) = U$
    *   So, $\frac{\partial \psi}{\partial y} = \frac{\partial \phi}{\partial x}$ (satisfied)

*   $-\frac{\partial \psi}{\partial x} = -\frac{\partial}{\partial x}(Uy) = 0$
*   $\frac{\partial \phi}{\partial y} = \frac{\partial}{\partial y}(Ux) = 0$
    *   So, $-\frac{\partial \psi}{\partial x} = \frac{\partial \phi}{\partial y}$ (satisfied)

The complex potential is $W(z) = Ux + iUy = U(x+iy) = Uz$.

#### Example 2: Source Flow

Consider a 2-D source at the origin with strength $m$.
The velocity components are:
*   $u = \frac{mx}{r^2}$
*   $v = \frac{my}{r^2}$
where $r^2 = x^2 + y^2$.

**Using Stream Function:**
*   $u = \frac{\partial \psi}{\partial y} \implies \frac{mx}{x^2 + y^2} = \frac{\partial \psi}{\partial y}$
    Integrate with respect to $y$: $\psi = \frac{1}{2} m \ln(x^2 + y^2) + f(x)$
*   $v = -\frac{\partial \psi}{\partial x} \implies \frac{my}{x^2 + y^2} = -\frac{\partial}{\partial x} \left( \frac{1}{2} m \ln(x^2 + y^2) + f(x) \right)$
    $\frac{my}{x^2 + y^2} = -\left( \frac{1}{2} m \frac{2x}{x^2 + y^2} + f'(x) \right)$
    $\frac{my}{x^2 + y^2} = -\frac{mx}{x^2 + y^2} - f'(x)$
    This doesn't directly work to find a simple $\psi$.

**Let's re-evaluate how stream function is typically derived for a source.**
For a 2D source, the radial velocity $u_r$ is $\frac{m}{2\pi r}$ and the tangential velocity $u_\theta$ is 0.
In polar coordinates:
*   $u_r = \frac{1}{r} \frac{\partial \psi}{\partial \theta}$
*   $u_\theta = -\frac{\partial \psi}{\partial r}$

For a source, $u_r = \frac{m}{2\pi r}$ and $u_\theta = 0$.
*   $u_\theta = 0 \implies -\frac{\partial \psi}{\partial r} = 0 \implies \psi = f(\theta)$ (constant with respect to $r$)
*   $u_r = \frac{m}{2\pi r} \implies \frac{1}{r} \frac{\partial \psi}{\partial \theta} = \frac{m}{2\pi r}$
    $\frac{\partial \psi}{\partial \theta} = \frac{m}{2\pi}$
    Integrate with respect to $\theta$: $\psi = \frac{m}{2\pi} \theta + C$
    So, $\psi = \frac{m}{2\pi} \theta$. Streamlines are lines of constant $\theta$ (rays from the origin).

**Using Velocity Potential:**
In polar coordinates:
*   $u_r = \frac{\partial \phi}{\partial r}$
*   $u_\theta = \frac{1}{r} \frac{\partial \phi}{\partial \theta}$

For a source, $u_r = \frac{m}{2\pi r}$ and $u_\theta = 0$.
*   $u_\theta = 0 \implies \frac{1}{r} \frac{\partial \phi}{\partial \theta} = 0 \implies \phi = f(r)$ (constant with respect to $\theta$)
*   $u_r = \frac{m}{2\pi r} \implies \frac{\partial \phi}{\partial r} = \frac{m}{2\pi r}$
    Integrate with respect to $r$: $\phi = \frac{m}{2\pi} \ln(r) + C$
    So, $\phi = \frac{m}{2\pi} \ln(r)$. Equipotential lines are circles of constant $r$.

**Checking the Relationship (Polar Coordinates):**
*   $\frac{\partial \psi}{\partial \theta} = \frac{m}{2\pi}$
*   $r \frac{\partial \phi}{\partial r} = r \frac{m}{2\pi r} = \frac{m}{2\pi}$
    So, $\frac{\partial \psi}{\partial \theta} = r \frac{\partial \phi}{\partial r}$ (this is the polar coordinate equivalent).

*   $-\frac{\partial \psi}{\partial r} = 0$
*   $\frac{\partial \phi}{\partial \theta} = 0$
    So, $-\frac{\partial \psi}{\partial r} = \frac{\partial \phi}{\partial \theta}$ (satisfied).

The complex potential is $W(z) = \phi + i\psi = \frac{m}{2\pi} \ln(r) + i \frac{m}{2\pi} \theta = \frac{m}{2\pi} (\ln(r) + i \theta) = \frac{m}{2\pi} \ln(re^{i\theta}) = \frac{m}{2\pi} \ln(z)$.

---

### Important Points to Remember:

*   **Stream Function ($\psi$)** exists for **2-D incompressible flows**. Lines of constant $\psi$ are **streamlines**.
*   **Velocity Potential ($\phi$)** exists for **2-D irrotational flows**. Lines of constant $\phi$ are **equipotential lines**.
*   For a **2-D irrotational and incompressible flow**, **both** $\psi$ and $\phi$ exist.
*   The relationships are:
    *   $u = \frac{\partial \psi}{\partial y} = \frac{\partial \phi}{\partial x}$
    *   $v = -\frac{\partial \psi}{\partial x} = \frac{\partial \phi}{\partial y}$
*   These are the **Cauchy-Riemann equations** in fluid mechanics context.
*   The stream function and velocity potential are the real and imaginary parts of a **complex potential function** $W(z) = \phi + i\psi$.
*   Streamlines and equipotential lines are **orthogonal** to each other.
*   Both $\psi$ and $\phi$ satisfy **Laplace's equation** for such flows.
    *   $\nabla^2 \psi = \frac{\partial^2 \psi}{\partial x^2} + \frac{\partial^2 \psi}{\partial y^2} = 0$
    *   $\nabla^2 \phi = \frac{\partial^2 \phi}{\partial x^2} + \frac{\partial^2 \phi}{\partial y^2} = 0$

---

### Practice Questions:

**Question 1:**
For a 2-D incompressible flow, the velocity components are given by $u = 2xy$ and $v = x^2 - y^2$.
(a) Is this flow irrotational?
(b) Does a velocity potential exist for this flow?
(c) Does a stream function exist for this flow?
(d) If a stream function exists, find it.
(e) If a velocity potential exists, find it.
(f) If both exist, verify the Cauchy-Riemann relations.

**Question 2:**
Given the velocity potential $\phi = x^2 - y^2$.
(a) Determine the velocity components $u$ and $v$.
(b) Is this flow incompressible? Is it irrotational?
(c) Find the stream function $\psi$.
(d) What type of flow does this represent?

**Question 3:**
Given the stream function $\psi = x^2 + y^2$.
(a) Determine the velocity components $u$ and $v$.
(b) Is this flow incompressible? Is it irrotational?
(c) Find the velocity potential $\phi$.
(d) What type of flow does this represent?

---

### Answers to Practice Questions:

**Answer 1:**
Given: $u = 2xy$, $v = x^2 - y^2$.

(a) **Irrotationality Check:**
    $\frac{\partial v}{\partial x} = \frac{\partial}{\partial x}(x^2 - y^2) = 2x$
    $\frac{\partial u}{\partial y} = \frac{\partial}{\partial y}(2xy) = 2x$
    $\frac{\partial v}{\partial x} - \frac{\partial u}{\partial y} = 2x - 2x = 0$.
    Yes, the flow is irrotational.

(b) **Velocity Potential:** Since the flow is irrotational, a velocity potential exists.

(c) **Stream Function:**
    Continuity equation check: $\frac{\partial u}{\partial x} + \frac{\partial v}{\partial y} = \frac{\partial}{\partial x}(2xy) + \frac{\partial}{\partial y}(x^2 - y^2) = 2y + (-2y) = 0$.
    Yes, the flow is incompressible, so a stream function exists.

(d) **Finding Stream Function ($\psi$):**
    $u = \frac{\partial \psi}{\partial y} \implies 2xy = \frac{\partial \psi}{\partial y}$
    Integrate with respect to $y$: $\psi = xy^2 + f(x)$
    $v = -\frac{\partial \psi}{\partial x} \implies x^2 - y^2 = -\frac{\partial}{\partial x}(xy^2 + f(x))$
    $x^2 - y^2 = -(y^2 + f'(x))$
    $x^2 - y^2 = -y^2 - f'(x)$
    $x^2 = -f'(x) \implies f'(x) = -x^2$
    Integrate $f'(x)$ with respect to $x$: $f(x) = -\frac{x^3}{3} + C$
    So, $\psi = xy^2 - \frac{x^3}{3}$.

(e) **Finding Velocity Potential ($\phi$):**
    $u = \frac{\partial \phi}{\partial x} \implies 2xy = \frac{\partial \phi}{\partial x}$
    Integrate with respect to $x$: $\phi = x^2y + g(y)$
    $v = \frac{\partial \phi}{\partial y} \implies x^2 - y^2 = \frac{\partial}{\partial y}(x^2y + g(y))$
    $x^2 - y^2 = x^2 + g'(y)$
    $-y^2 = g'(y)$
    Integrate $g'(y)$ with respect to $y$: $g(y) = -\frac{y^3}{3} + C$
    So, $\phi = x^2y - \frac{y^3}{3}$.

(f) **Verifying Cauchy-Riemann Relations:**
    $\frac{\partial \psi}{\partial y} = \frac{\partial}{\partial y}(xy^2 - \frac{x^3}{3}) = 2xy$
    $\frac{\partial \phi}{\partial x} = \frac{\partial}{\partial x}(x^2y - \frac{y^3}{3}) = 2xy$
    $(\frac{\partial \psi}{\partial y} = \frac{\partial \phi}{\partial x})$ - Satisfied.

    $-\frac{\partial \psi}{\partial x} = -\frac{\partial}{\partial x}(xy^2 - \frac{x^3}{3}) = -(y^2 - x^2) = x^2 - y^2$
    $\frac{\partial \phi}{\partial y} = \frac{\partial}{\partial y}(x^2y - \frac{y^3}{3}) = x^2 - y^2$
    $(-\frac{\partial \psi}{\partial x} = \frac{\partial \phi}{\partial y})$ - Satisfied.

**Answer 2:**
Given: $\phi = x^2 - y^2$.

(a) **Velocity Components:**
    $u = \frac{\partial \phi}{\partial x} = \frac{\partial}{\partial x}(x^2 - y^2) = 2x$
    $v = \frac{\partial \phi}{\partial y} = \frac{\partial}{\partial y}(x^2 - y^2) = -2y$
    So, $u = 2x$, $v = -2y$.

(b) **Flow Properties:**
    **Incompressibility:** $\frac{\partial u}{\partial x} + \frac{\partial v}{\partial y} = \frac{\partial}{\partial x}(2x) + \frac{\partial}{\partial y}(-2y) = 2 + (-2) = 0$. Yes, it is incompressible.
    **Irrotationality:** $\frac{\partial v}{\partial x} - \frac{\partial u}{\partial y} = \frac{\partial}{\partial x}(-2y) - \frac{\partial}{\partial y}(2x) = 0 - 0 = 0$. Yes, it is irrotational.

(c) **Finding Stream Function ($\psi$):**
    $u = \frac{\partial \psi}{\partial y} \implies 2x = \frac{\partial \psi}{\partial y}$
    Integrate with respect to $y$: $\psi = 2xy + f(x)$
    $v = -\frac{\partial \psi}{\partial x} \implies -2y = -\frac{\partial}{\partial x}(2xy + f(x))$
    $-2y = -(2y + f'(x))$
    $-2y = -2y - f'(x)$
    $0 = -f'(x) \implies f'(x) = 0$
    Integrate $f'(x)$ with respect to $x$: $f(x) = C$
    So, $\psi = 2xy$.

(d) **Type of Flow:** This is a **combination of a source/sink and a vortex**. Specifically, $u=2x, v=-2y$ corresponds to a flow that is expanding radially outwards in the x-direction and contracting inwards in the y-direction (or vice-versa, depending on perspective). The fact that $\phi = x^2 - y^2$ means $\nabla^2 \phi = 0$, and $\psi = 2xy$ means $\nabla^2 \psi = 0$. This flow could represent the flow around a corner or a specific type of strain.

**Answer 3:**
Given: $\psi = x^2 + y^2$.

(a) **Velocity Components:**
    $u = \frac{\partial \psi}{\partial y} = \frac{\partial}{\partial y}(x^2 + y^2) = 2y$
    $v = -\frac{\partial \psi}{\partial x} = -\frac{\partial}{\partial x}(x^2 + y^2) = -2x$
    So, $u = 2y$, $v = -2x$.

(b) **Flow Properties:**
    **Incompressibility:** $\frac{\partial u}{\partial x} + \frac{\partial v}{\partial y} = \frac{\partial}{\partial x}(2y) + \frac{\partial}{\partial y}(-2x) = 0 + 0 = 0$. Yes, it is incompressible.
    **Irrotationality:** $\frac{\partial v}{\partial x} - \frac{\partial u}{\partial y} = \frac{\partial}{\partial x}(-2x) - \frac{\partial}{\partial y}(2y) = -2 - 2 = -4$.
    Since the vorticity is not zero, this flow is **rotational**.

(c) **Finding Velocity Potential ($\phi$):**
    Since the flow is rotational ($\frac{\partial v}{\partial x} - \frac{\partial u}{\partial y} \neq 0$), a velocity potential **does not exist** for this flow.

(d) **Type of Flow:** This is a **purely rotational flow** with no radial velocity component but a significant tangential velocity component. It represents a **free vortex** with a circulation strength. The stream function $\psi = x^2 + y^2$ represents streamlines that are parabolas.
