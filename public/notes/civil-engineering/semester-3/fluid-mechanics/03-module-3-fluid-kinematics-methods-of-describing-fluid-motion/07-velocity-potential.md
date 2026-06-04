---
title: "velocity potential"
subject: "FLUID MECHANICS"
module: "Module 3: Fluid Kinematics : Methods of describing fluid motion"
branch: "Civil Engineering"
semester: 3
topicId: "689f15ca56b5e963ba8106f8"
status: "completed"
scrapedAt: "2026-05-20T18:40:35.438Z"
---
# Fluid Mechanics: Module 3 - Fluid Kinematics

## Topic: Velocity Potential

---

### 1. Learning Outcomes

Upon successful completion of this topic, you will be able to:

*   Understand the concept of velocity potential and its relationship to fluid velocity.
*   Identify the conditions under which a velocity potential exists.
*   Apply the Laplace equation to problems involving velocity potential.
*   Determine the velocity field from a given velocity potential function.
*   Understand the concept of irrotational flow and its relation to velocity potential.
*   Calculate stream function and velocity potential for simple 2D flows.

---

### 2. Key Concepts and Definitions

#### 2.1 What is Velocity Potential?

*   **Definition:** Velocity potential, denoted by $\phi$ (phi), is a scalar function of space and time such that its gradient represents the fluid velocity vector.
*   **Mathematical Representation:**
    $\vec{V} = \nabla \phi$
    In Cartesian coordinates $(x, y, z)$:
    $u = \frac{\partial \phi}{\partial x}$
    $v = \frac{\partial \phi}{\partial y}$
    $w = \frac{\partial \phi}{\partial z}$
    where $\vec{V} = (u, v, w)$ is the velocity vector.

#### 2.2 Conditions for Existence of Velocity Potential

A velocity potential can exist **only for irrotational flows**.

*   **Irrotational Flow:** A flow is irrotational if the curl of the velocity vector is zero everywhere in the flow field.
    $\nabla \times \vec{V} = \vec{0}$
    This means that fluid particles in an irrotational flow do not experience any net angular velocity.

*   **Relationship between Irrotationality and Velocity Potential:**
    If a flow is irrotational, then the velocity vector can be expressed as the gradient of a scalar potential function (the velocity potential).
    Let's verify this:
    If $\vec{V} = \nabla \phi$, then
    $\nabla \times \vec{V} = \nabla \times (\nabla \phi)$
    It is a fundamental vector identity that the curl of a gradient of any scalar function is always zero.
    $\nabla \times (\nabla \phi) = \vec{0}$
    Therefore, any flow that can be described by a velocity potential is by definition irrotational.

*   **Conversely:** If a flow is irrotational and the flow domain is simply connected (no holes or cavities), then a velocity potential function can always be found.

#### 2.3 Laplace Equation for Velocity Potential

*   **Incompressibility Condition:** For an incompressible flow, the divergence of the velocity vector is zero.
    $\nabla \cdot \vec{V} = 0$
    In Cartesian coordinates:
    $\frac{\partial u}{\partial x} + \frac{\partial v}{\partial y} + \frac{\partial w}{\partial z} = 0$

*   **Deriving the Laplace Equation:** Substitute the relationship $\vec{V} = \nabla \phi$ into the incompressibility condition:
    $\nabla \cdot (\nabla \phi) = 0$
    This simplifies to:
    $\nabla^2 \phi = 0$
    where $\nabla^2$ is the Laplacian operator.

*   **Laplace Equation in Cartesian Coordinates:**
    $\frac{\partial^2 \phi}{\partial x^2} + \frac{\partial^2 \phi}{\partial y^2} + \frac{\partial^2 \phi}{\partial z^2} = 0$

*   **Significance:** The velocity potential function for an incompressible, irrotational flow must satisfy the Laplace equation. This means that many problems in fluid kinematics can be solved by solving Laplace's equation with appropriate boundary conditions.

#### 2.4 Properties of Velocity Potential

*   **Scalar Quantity:** $\phi$ is a scalar, making it easier to work with than vector quantities.
*   **Gradient gives Velocity:** The velocity vector is always normal to the surfaces of constant velocity potential (equipotential lines/surfaces).
*   **Satisfies Laplace Equation:** For incompressible, irrotational flows, $\phi$ satisfies Laplace's equation.
*   **Useful for Potential Flow Theory:** Velocity potential is a cornerstone of potential flow theory, which simplifies the analysis of many fluid flow problems (e.g., inviscid, irrotational flows around objects).

#### 2.5 Relationship with Stream Function (for 2D Flow)

*   **Stream Function ($\psi$):** For 2D incompressible flows, the stream function $\psi$ is defined such that the velocity components are:
    $u = \frac{\partial \psi}{\partial y}$
    $v = -\frac{\partial \psi}{\partial x}$
    The curves of constant $\psi$ are called streamlines.

*   **Conditions for Compatibility:** For a 2D incompressible and irrotational flow, both the stream function $\psi$ and the velocity potential $\phi$ exist. Their relationships are:
    $u = \frac{\partial \phi}{\partial x} = \frac{\partial \psi}{\partial y}$
    $v = \frac{\partial \phi}{\partial y} = -\frac{\partial \psi}{\partial x}$

*   **Orthogonality:** The streamlines (curves of constant $\psi$) are orthogonal to the equipotential lines (curves of constant $\phi$). This can be shown by considering the slopes of these curves.

    *   Slope of equipotential line ($d\phi = 0$): $dy/dx = (\partial\phi/\partial x) / (\partial\phi/\partial y) = u/v$
    *   Slope of streamline ($d\psi = 0$): $dy/dx = -(\partial\psi/\partial x) / (\partial\psi/\partial y) = -(-\frac{v}{u}) = v/u$
    The product of the slopes is $(u/v) \times (v/u) = 1$. This isn't quite orthogonality in the usual sense ($m_1 m_2 = -1$). Let's re-examine the definitions:
    For $\phi = C_1$, $d\phi = \frac{\partial \phi}{\partial x} dx + \frac{\partial \phi}{\partial y} dy = 0$. So, $\frac{dy}{dx} = -\frac{\partial \phi/\partial x}{\partial \phi/\partial y} = -\frac{u}{v}$.
    For $\psi = C_2$, $d\psi = \frac{\partial \psi}{\partial x} dx + \frac{\partial \psi}{\partial y} dy = 0$. So, $\frac{dy}{dx} = -\frac{\partial \psi/\partial x}{\partial \psi/\partial y} = -\frac{-v}{u} = \frac{v}{u}$.
    The product of the slopes is $(-u/v) \times (v/u) = -1$. Thus, streamlines and equipotential lines are indeed orthogonal.

*   **Cauchy-Riemann Equations:** The relationships between $\phi$ and $\psi$ in 2D flow are analogous to the Cauchy-Riemann equations in complex analysis. If we consider a complex function $F(z) = \phi(x,y) + i\psi(x,y)$ where $z = x + iy$, then for $F(z)$ to be analytic, the Cauchy-Riemann equations must hold:
    $\frac{\partial \phi}{\partial x} = \frac{\partial \psi}{\partial y}$ and $\frac{\partial \phi}{\partial y} = -\frac{\partial \psi}{\partial x}$.
    These are exactly the relationships we found for 2D incompressible, irrotational flow. This connection highlights the power of complex analysis in solving fluid mechanics problems.

---

### 3. Examples

#### Example 3.1: Velocity from Velocity Potential

Given a velocity potential function $\phi(x, y) = 3x^2 - 2y^2$. Determine the velocity vector $\vec{V}(x, y)$ and check if the flow is irrotational and incompressible.

**Solution:**
The velocity components are found by taking the gradient of $\phi$:
$u = \frac{\partial \phi}{\partial x} = \frac{\partial}{\partial x}(3x^2 - 2y^2) = 6x$
$v = \frac{\partial \phi}{\partial y} = \frac{\partial}{\partial y}(3x^2 - 2y^2) = -4y$

So, the velocity vector is $\vec{V}(x, y) = 6x\mathbf{i} - 4y\mathbf{j}$.

**Check for Irrotationality:**
$\nabla \times \vec{V} = \left(\frac{\partial w}{\partial y} - \frac{\partial v}{\partial z}\right)\mathbf{i} + \left(\frac{\partial u}{\partial z} - \frac{\partial w}{\partial x}\right)\mathbf{j} + \left(\frac{\partial v}{\partial x} - \frac{\partial u}{\partial y}\right)\mathbf{k}$
Since this is a 2D flow, $w=0$ and the partial derivatives with respect to $z$ are zero.
$\nabla \times \vec{V} = \left(0 - 0\right)\mathbf{i} + \left(0 - 0\right)\mathbf{j} + \left(\frac{\partial (-4y)}{\partial x} - \frac{\partial (6x)}{\partial y}\right)\mathbf{k}$
$\nabla \times \vec{V} = (0 - 0)\mathbf{k} = \vec{0}$
The curl is zero, so the flow is irrotational.

**Check for Incompressibility:**
$\nabla \cdot \vec{V} = \frac{\partial u}{\partial x} + \frac{\partial v}{\partial y} + \frac{\partial w}{\partial z}$
$\nabla \cdot \vec{V} = \frac{\partial (6x)}{\partial x} + \frac{\partial (-4y)}{\partial y} + \frac{\partial (0)}{\partial z}$
$\nabla \cdot \vec{V} = 6 + (-4) + 0 = 2$
The divergence is not zero. This means the flow is **compressible**, or the velocity potential provided is not valid for an incompressible flow.

**Important Note:** If a flow is described by a velocity potential, it is *always* irrotational. However, if the divergence is non-zero, it implies compressibility. If the problem statement implies an incompressible flow, then the velocity potential *must* satisfy Laplace's equation. Let's try an example that satisfies Laplace's equation.

#### Example 3.2: Velocity Potential for an Incompressible, Irrotational Flow

Given a velocity potential function $\phi(x, y) = 2x^2 - 2y^2$. Determine the velocity vector $\vec{V}(x, y)$ and check if the flow is incompressible and irrotational.

**Solution:**
$u = \frac{\partial \phi}{\partial x} = \frac{\partial}{\partial x}(2x^2 - 2y^2) = 4x$
$v = \frac{\partial \phi}{\partial y} = \frac{\partial}{\partial y}(2x^2 - 2y^2) = -4y$

So, the velocity vector is $\vec{V}(x, y) = 4x\mathbf{i} - 4y\mathbf{j}$.

**Check for Irrotationality:**
$\nabla \times \vec{V} = \left(\frac{\partial v}{\partial x} - \frac{\partial u}{\partial y}\right)\mathbf{k} = \left(\frac{\partial (-4y)}{\partial x} - \frac{\partial (4x)}{\partial y}\right)\mathbf{k} = (0 - 0)\mathbf{k} = \vec{0}$
The flow is irrotational.

**Check for Incompressibility:**
$\nabla \cdot \vec{V} = \frac{\partial u}{\partial x} + \frac{\partial v}{\partial y} = \frac{\partial (4x)}{\partial x} + \frac{\partial (-4y)}{\partial y} = 4 + (-4) = 0$
The divergence is zero, so the flow is incompressible.

Since the flow is incompressible and irrotational, the velocity potential must satisfy Laplace's equation:
$\frac{\partial^2 \phi}{\partial x^2} + \frac{\partial^2 \phi}{\partial y^2} = \frac{\partial^2 (2x^2 - 2y^2)}{\partial x^2} + \frac{\partial^2 (2x^2 - 2y^2)}{\partial y^2}$
$= \frac{\partial (4x)}{\partial x} + \frac{\partial (-4y)}{\partial y} = 4 + (-4) = 0$
Laplace's equation is satisfied.

#### Example 3.3: Finding Velocity Potential from Stream Function

For a 2D flow described by the stream function $\psi(x, y) = x^2 - y^2$. Assume the flow is incompressible and irrotational. Find the velocity potential $\phi(x, y)$.

**Solution:**
The relationships between velocity components from $\psi$ and $\phi$ are:
$u = \frac{\partial \psi}{\partial y} = \frac{\partial \phi}{\partial x}$
$v = -\frac{\partial \psi}{\partial x} = \frac{\partial \phi}{\partial y}$

First, find $u$ and $v$ from $\psi$:
$u = \frac{\partial}{\partial y}(x^2 - y^2) = -2y$
$v = -\frac{\partial}{\partial x}(x^2 - y^2) = -2x$

Now, equate these with the derivatives of $\phi$:
1. $\frac{\partial \phi}{\partial x} = u = -2y$
2. $\frac{\partial \phi}{\partial y} = v = -2x$

Integrate equation (1) with respect to $x$:
$\phi(x, y) = \int (-2y) dx = -2yx + f(y)$
where $f(y)$ is an arbitrary function of $y$.

Now, differentiate this expression for $\phi$ with respect to $y$ and equate it to equation (2):
$\frac{\partial \phi}{\partial y} = \frac{\partial}{\partial y}(-2yx + f(y)) = -2x + f'(y)$

Equating this to $v$:
$-2x + f'(y) = -2x$
$f'(y) = 0$

Integrate $f'(y)$ with respect to $y$:
$f(y) = \int 0 dy = C$
where $C$ is an arbitrary constant.

Therefore, the velocity potential is:
$\phi(x, y) = -2xy + C$

**Check:**
Let's check if this $\phi$ and the given $\psi$ are consistent and satisfy Laplace's equation.
$\phi(x, y) = -2xy$ (assuming $C=0$ for simplicity)
$\psi(x, y) = x^2 - y^2$

Check if $\frac{\partial \phi}{\partial x} = \frac{\partial \psi}{\partial y}$:
$\frac{\partial \phi}{\partial x} = \frac{\partial}{\partial x}(-2xy) = -2y$
$\frac{\partial \psi}{\partial y} = \frac{\partial}{\partial y}(x^2 - y^2) = -2y$
They are equal.

Check if $\frac{\partial \phi}{\partial y} = -\frac{\partial \psi}{\partial x}$:
$\frac{\partial \phi}{\partial y} = \frac{\partial}{\partial y}(-2xy) = -2x$
$-\frac{\partial \psi}{\partial x} = -\frac{\partial}{\partial x}(x^2 - y^2) = -(2x) = -2x$
They are equal.

The velocity potential $\phi(x, y) = -2xy$ is consistent with the stream function $\psi(x, y) = x^2 - y^2$.

**Laplace's Equation Check for $\phi$:**
$\frac{\partial^2 \phi}{\partial x^2} + \frac{\partial^2 \phi}{\partial y^2} = \frac{\partial^2 (-2xy)}{\partial x^2} + \frac{\partial^2 (-2xy)}{\partial y^2}$
$= \frac{\partial (-2y)}{\partial x} + \frac{\partial (-2x)}{\partial y} = 0 + 0 = 0$
Laplace's equation is satisfied.

**Laplace's Equation Check for $\psi$:**
The stream function for an incompressible, irrotational flow must also satisfy Laplace's equation.
$\frac{\partial^2 \psi}{\partial x^2} + \frac{\partial^2 \psi}{\partial y^2} = \frac{\partial^2 (x^2 - y^2)}{\partial x^2} + \frac{\partial^2 (x^2 - y^2)}{\partial y^2}$
$= \frac{\partial (2x)}{\partial x} + \frac{\partial (-2y)}{\partial y} = 2 + (-2) = 0$
Laplace's equation is satisfied for $\psi$ as well.

---

### 4. Practice Questions

1.  Given a velocity potential $\phi = x^3 - 3xy^2$.
    a.  Find the velocity components $u$ and $v$.
    b.  Determine if the flow is irrotational.
    c.  Check if the flow is incompressible.
    d.  Find the stream function $\psi(x,y)$ corresponding to this velocity potential.

2.  A 2D incompressible flow is described by the stream function $\psi = \frac{A}{2}(x^2 - y^2)$, where $A$ is a constant.
    a.  Find the velocity components $u$ and $v$.
    b.  Is the flow irrotational and incompressible?
    c.  Find the velocity potential $\phi(x,y)$.

3.  Consider a flow with velocity potential $\phi(x, y, z) = Ax^2 + By^2 + Cz^2$. For the flow to be incompressible and irrotational, what are the relationships between A, B, and C?

4.  If the velocity potential for a flow is $\phi(x, y) = \sin(x)\cosh(y)$.
    a.  Find the velocity components $u$ and $v$.
    b.  Show that this velocity potential satisfies Laplace's equation, indicating that the flow is incompressible and irrotational.

---

### 5. Answers to Practice Questions

1.  Given $\phi = x^3 - 3xy^2$:
    a.  $u = \frac{\partial \phi}{\partial x} = \frac{\partial}{\partial x}(x^3 - 3xy^2) = 3x^2 - 3y^2$
        $v = \frac{\partial \phi}{\partial y} = \frac{\partial}{\partial y}(x^3 - 3xy^2) = -6xy$
    b.  $\nabla \times \vec{V} = \left(\frac{\partial v}{\partial x} - \frac{\partial u}{\partial y}\right)\mathbf{k} = \left(\frac{\partial (-6xy)}{\partial x} - \frac{\partial (3x^2 - 3y^2)}{\partial y}\right)\mathbf{k}$
        $= (-6y - (-6y))\mathbf{k} = (0)\mathbf{k} = \vec{0}$. The flow is irrotational.
    c.  $\nabla \cdot \vec{V} = \frac{\partial u}{\partial x} + \frac{\partial v}{\partial y} = \frac{\partial (3x^2 - 3y^2)}{\partial x} + \frac{\partial (-6xy)}{\partial y}$
        $= (6x) + (-6x) = 0$. The flow is incompressible.
    d.  From $u = \frac{\partial \phi}{\partial x} = 3x^2 - 3y^2$ and $v = \frac{\partial \phi}{\partial y} = -6xy$.
        We need $\frac{\partial \psi}{\partial y} = u = 3x^2 - 3y^2$ and $\frac{\partial \psi}{\partial x} = -v = 6xy$.
        Integrate $\frac{\partial \psi}{\partial x} = 6xy$ with respect to $x$:
        $\psi(x, y) = \int (6xy) dx = 3x^2y + g(y)$
        Differentiate with respect to $y$:
        $\frac{\partial \psi}{\partial y} = \frac{\partial}{\partial y}(3x^2y + g(y)) = 3x^2 + g'(y)$
        Equate to $u$:
        $3x^2 + g'(y) = 3x^2 - 3y^2$
        $g'(y) = -3y^2$
        Integrate $g'(y)$ with respect to $y$:
        $g(y) = \int (-3y^2) dy = -y^3 + C$
        So, $\psi(x, y) = 3x^2y - y^3 + C$.

2.  Given $\psi = \frac{A}{2}(x^2 - y^2)$:
    a.  $u = \frac{\partial \psi}{\partial y} = \frac{\partial}{\partial y}\left(\frac{A}{2}(x^2 - y^2)\right) = \frac{A}{2}(-2y) = -Ay$
        $v = -\frac{\partial \psi}{\partial x} = -\frac{\partial}{\partial x}\left(\frac{A}{2}(x^2 - y^2)\right) = -\frac{A}{2}(2x) = -Ax$
    b.  Irrotationality: $\nabla \times \vec{V} = \left(\frac{\partial v}{\partial x} - \frac{\partial u}{\partial y}\right)\mathbf{k} = \left(\frac{\partial (-Ax)}{\partial x} - \frac{\partial (-Ay)}{\partial y}\right)\mathbf{k} = (-A - (-A))\mathbf{k} = 0$. Irrotational.
        Incompressibility: $\nabla \cdot \vec{V} = \frac{\partial u}{\partial x} + \frac{\partial v}{\partial y} = \frac{\partial (-Ay)}{\partial x} + \frac{\partial (-Ax)}{\partial y} = 0 + 0 = 0$. Incompressible.
    c.  We need $\frac{\partial \phi}{\partial x} = u = -Ay$ and $\frac{\partial \phi}{\partial y} = v = -Ax$.
        Integrate $\frac{\partial \phi}{\partial x} = -Ay$ with respect to $x$:
        $\phi(x, y) = \int (-Ay) dx = -Axy + f(y)$
        Differentiate with respect to $y$:
        $\frac{\partial \phi}{\partial y} = \frac{\partial}{\partial y}(-Axy + f(y)) = -Ax + f'(y)$
        Equate to $v$:
        $-Ax + f'(y) = -Ax$
        $f'(y) = 0 \implies f(y) = C$
        So, $\phi(x, y) = -Axy + C$.

3.  For incompressible and irrotational flow, $\phi$ must satisfy Laplace's equation:
    $\nabla^2 \phi = \frac{\partial^2 \phi}{\partial x^2} + \frac{\partial^2 \phi}{\partial y^2} + \frac{\partial^2 \phi}{\partial z^2} = 0$
    $\phi = Ax^2 + By^2 + Cz^2$
    $\frac{\partial \phi}{\partial x} = 2Ax$, $\frac{\partial^2 \phi}{\partial x^2} = 2A$
    $\frac{\partial \phi}{\partial y} = 2By$, $\frac{\partial^2 \phi}{\partial y^2} = 2B$
    $\frac{\partial \phi}{\partial z} = 2Cz$, $\frac{\partial^2 \phi}{\partial z^2} = 2C$
    Substituting into Laplace's equation:
    $2A + 2B + 2C = 0$
    $A + B + C = 0$
    The relationship is $A + B + C = 0$.

4.  Given $\phi(x, y) = \sin(x)\cosh(y)$:
    a.  $u = \frac{\partial \phi}{\partial x} = \frac{\partial}{\partial x}(\sin(x)\cosh(y)) = \cos(x)\cosh(y)$
        $v = \frac{\partial \phi}{\partial y} = \frac{\partial}{\partial y}(\sin(x)\cosh(y)) = \sin(x)\sinh(y)$
    b.  Check Laplace's equation:
        $\frac{\partial^2 \phi}{\partial x^2} = \frac{\partial}{\partial x}(\cos(x)\cosh(y)) = -\sin(x)\cosh(y)$
        $\frac{\partial^2 \phi}{\partial y^2} = \frac{\partial}{\partial y}(\sin(x)\sinh(y)) = \sin(x)\cosh(y)$
        $\frac{\partial^2 \phi}{\partial x^2} + \frac{\partial^2 \phi}{\partial y^2} = -\sin(x)\cosh(y) + \sin(x)\cosh(y) = 0$.
        Laplace's equation is satisfied, so the flow is incompressible and irrotational.

---

### 6. Important Points to Remember

*   **Velocity potential ($\phi$) is a scalar function.**
*   **Velocity vector is the gradient of velocity potential:** $\vec{V} = \nabla \phi$.
*   **Velocity potential exists ONLY for irrotational flows.** If you are given a $\phi$, the flow is automatically irrotational.
*   **For incompressible and irrotational flows, $\phi$ satisfies Laplace's equation:** $\nabla^2 \phi = 0$.
*   In 2D, for incompressible and irrotational flows, both $\phi$ and the stream function $\psi$ satisfy Laplace's equation.
*   Streamlines ($\psi=$ constant) are orthogonal to equipotential lines ($\phi=$ constant).
*   The existence of a velocity potential is a powerful tool for analyzing fluid flow, especially inviscid and irrotational flows.

---
