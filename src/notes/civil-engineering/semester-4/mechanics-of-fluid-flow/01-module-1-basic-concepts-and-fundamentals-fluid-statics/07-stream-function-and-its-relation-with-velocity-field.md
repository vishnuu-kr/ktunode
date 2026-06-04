---
title: "Stream function and its relation with velocity field"
subject: "MECHANICS OF FLUID FLOW"
module: "Module 1: Basic Concepts and Fundamentals: Fluid statics"
branch: "Civil Engineering"
semester: 4
topicId: "689f15cc56b5e963ba810a63"
status: "completed"
scrapedAt: "2026-05-20T18:46:23.004Z"
---
# Mechanics of Fluid Flow: Module 1 - Basic Concepts and Fundamentals: Fluid Statics

## Topic: Stream Function and its Relation with Velocity Field

---

### 1. Introduction to Stream Function

The concept of a stream function is a powerful mathematical tool used to describe the flow of an incompressible fluid. It simplifies the analysis of fluid flow by reducing the number of independent variables required to define the velocity field.

*   **Purpose:** To represent a 2D, incompressible, and irrotational flow field.
*   **Origin:** Developed to simplify the equations of motion for fluid flow.
*   **Key Property:** Directly related to the conservation of mass for incompressible flows.

---

### 2. Definition of Stream Function ($\psi$)

The stream function, denoted by $\psi$, is defined in terms of the velocity components of a fluid flow.

*   **For 2D Flow (in the xy-plane):**
    Let the velocity components in the x and y directions be $u$ and $v$, respectively. The stream function $\psi(x, y)$ is defined such that:
    $$
    u = \frac{\partial \psi}{\partial y} \quad \text{and} \quad v = -\frac{\partial \psi}{\partial x}
    $$

    *   **Explanation:**
        *   The partial derivative of $\psi$ with respect to $y$ gives the velocity component in the x-direction ($u$).
        *   The negative of the partial derivative of $\psi$ with respect to $x$ gives the velocity component in the y-direction ($v$).

*   **In Polar Coordinates (for 2D flow in the r$\theta$-plane):**
    Let the velocity components in the radial and tangential directions be $v_r$ and $v_\theta$, respectively. The stream function $\psi(r, \theta)$ is defined such that:
    $$
    v_r = \frac{1}{r} \frac{\partial \psi}{\partial \theta} \quad \text{and} \quad v_\theta = -\frac{\partial \psi}{\partial r}
    $$

    *   **Explanation:**
        *   The radial velocity ($v_r$) is proportional to the tangential derivative of $\psi$.
        *   The tangential velocity ($v_\theta$) is proportional to the negative of the radial derivative of $\psi$.

---

### 3. Relation to Velocity Field: The Continuity Equation

The definition of the stream function is intrinsically linked to the continuity equation for incompressible flow.

*   **Continuity Equation for 2D Incompressible Flow:**
    $$
    \frac{\partial u}{\partial x} + \frac{\partial v}{\partial y} = 0
    $$

*   **Derivation of Continuity from Stream Function Definition:**
    Substitute the stream function definitions of $u$ and $v$ into the continuity equation:
    $$
    \frac{\partial}{\partial x} \left( \frac{\partial \psi}{\partial y} \right) + \frac{\partial}{\partial y} \left( -\frac{\partial \psi}{\partial x} \right) = 0
    $$
    $$
    \frac{\partial^2 \psi}{\partial x \partial y} - \frac{\partial^2 \psi}{\partial y \partial x} = 0
    $$
    Since the mixed partial derivatives are equal for a continuous and differentiable function $\psi$, the equation is satisfied ($0 = 0$). This confirms that any function $\psi(x, y)$ defined as above will automatically satisfy the continuity equation for incompressible flow.

*   **Important Point:** The stream function is only defined for **2D incompressible flows** (or flows that can be represented in 2D). It automatically satisfies the continuity equation for such flows.

---

### 4. Streamlines and Equipotential Lines

*   **Streamlines:**
    *   **Definition:** A streamline is a curve that is everywhere tangent to the instantaneous velocity vector of the flow.
    *   **Equation of a Streamline:** In 2D flow, a streamline is defined by the differential equation:
        $$
        \frac{dx}{u} = \frac{dy}{v}
        $$
    *   **Relation to Stream Function:**
        From the definition of the stream function: $u = \frac{\partial \psi}{\partial y}$ and $v = -\frac{\partial \psi}{\partial x}$.
        Substituting these into the streamline equation:
        $$
        \frac{dx}{\frac{\partial \psi}{\partial y}} = \frac{dy}{-\frac{\partial \psi}{\partial x}}
        $$
        Rearranging this gives:
        $$
        -\frac{\partial \psi}{\partial x} dx - \frac{\partial \psi}{\partial y} dy = 0
        $$
        This expression is the total differential of the stream function: $d\psi = \frac{\partial \psi}{\partial x} dx + \frac{\partial \psi}{\partial y} dy$.
        Therefore, for a streamline:
        $$
        d\psi = 0 \quad \implies \quad \psi(x, y) = \text{constant}
        $$
    *   **Key Takeaway:** Streamlines are curves of constant stream function.

*   **Volume Flow Rate Between Streamlines:**
    Consider two streamlines, $\psi_1$ and $\psi_2$. The volume flow rate $Q$ between these two streamlines per unit depth (in a 2D flow) is given by the difference in their stream function values:
    $$
    Q = \int_{y_1}^{y_2} u \, dy \quad \text{or} \quad Q = \int_{x_1}^{x_2} v \, dx
    $$
    Using the stream function definition:
    $$
    Q = \int_{y_1}^{y_2} \frac{\partial \psi}{\partial y} \, dy = \psi(x, y_2) - \psi(x, y_1)
    $$
    Assuming $y_2 > y_1$, and considering a fixed $x$, the flow rate from $\psi_1$ to $\psi_2$ is $\psi_2 - \psi_1$.
    *   **Conclusion:** The difference in stream function values between two points represents the volume flow rate per unit width between them. This is why stream function lines are sometimes called "flow rate lines."

---

### 5. Irrotational Flow and the Potential Function ($\phi$)

For an **incompressible and irrotational flow**, we can also define a velocity potential function ($\phi$).

*   **Irrotational Flow Condition (2D):**
    The curl of the velocity vector is zero. In 2D, this simplifies to:
    $$
    \frac{\partial v}{\partial x} - \frac{\partial u}{\partial y} = 0
    $$
    (This is the condition for the flow to be irrotational, meaning the fluid elements do not rotate.)

*   **Definition of Velocity Potential ($\phi$):**
    If a flow is irrotational, the velocity vector can be expressed as the gradient of a scalar potential function, $\phi$:
    $$
    \vec{V} = \nabla \phi
    $$
    In 2D (xy-plane):
    $$
    u = \frac{\partial \phi}{\partial x} \quad \text{and} \quad v = \frac{\partial \phi}{\partial y}
    $$

*   **Orthogonality of Streamlines and Equipotential Lines:**
    Let's examine the relationship between the stream function and the potential function.
    We have:
    $u = \frac{\partial \psi}{\partial y}$ and $v = -\frac{\partial \psi}{\partial x}$ (from stream function)
    $u = \frac{\partial \phi}{\partial x}$ and $v = \frac{\partial \phi}{\partial y}$ (from potential function)

    Equating the expressions for $u$ and $v$:
    $\frac{\partial \psi}{\partial y} = \frac{\partial \phi}{\partial x}$
    $-\frac{\partial \psi}{\partial x} = \frac{\partial \phi}{\partial y} \implies \frac{\partial \psi}{\partial x} = -\frac{\partial \phi}{\partial y}$

    These are the Cauchy-Riemann equations (with a sign difference), which indicate that $\psi$ and $\phi$ are conjugate harmonic functions.

    Now, let's consider the slope of a streamline and an equipotential line.
    *   Slope of a streamline ($m_s$): $\frac{dy}{dx} = \frac{v}{u}$
    *   Slope of an equipotential line ($m_p$): $\frac{dy}{dx} = \frac{\partial \phi / \partial x}{\partial \phi / \partial y} = \frac{u}{v}$

    The product of the slopes is:
    $$
    m_s \cdot m_p = \frac{v}{u} \cdot \frac{u}{v} = 1
    $$
    Wait, there's a sign error in the usual derivation. Let's re-evaluate the slopes properly.

    *   Slope of a streamline (constant $\psi$): $d\psi = \frac{\partial \psi}{\partial x} dx + \frac{\partial \psi}{\partial y} dy = 0 \implies \frac{dy}{dx} = -\frac{\frac{\partial \psi}{\partial x}}{\frac{\partial \psi}{\partial y}} = -\frac{v}{u}$ (if we use the definition $v = -\partial\psi/\partial x$)
    *   Let's stick to the convention $u = \partial\psi/\partial y, v = -\partial\psi/\partial x$.
        Slope of streamline (constant $\psi$): $\frac{dy}{dx} = -\frac{\partial\psi/\partial x}{\partial\psi/\partial y} = -\frac{-v}{u} = \frac{v}{u}$

    *   Slope of an equipotential line (constant $\phi$): $d\phi = \frac{\partial \phi}{\partial x} dx + \frac{\partial \phi}{\partial y} dy = 0 \implies \frac{dy}{dx} = -\frac{\frac{\partial \phi}{\partial x}}{\frac{\partial \phi}{\partial y}} = -\frac{u}{v}$

    The product of the slopes is:
    $$
    m_s \cdot m_p = \frac{v}{u} \cdot \left(-\frac{u}{v}\right) = -1
    $$

    *   **Conclusion:** Streamlines (lines of constant $\psi$) and equipotential lines (lines of constant $\phi$) are **orthogonal** to each other. This is a fundamental characteristic of irrotational flows and forms the basis of the **conformal mapping** techniques used in fluid mechanics.

*   **Laplace's Equation:**
    For an incompressible and irrotational flow, both $\psi$ and $\phi$ satisfy Laplace's equation.
    *   **For $\phi$:**
        Substitute $u = \frac{\partial \phi}{\partial x}$ and $v = \frac{\partial \phi}{\partial y}$ into the continuity equation:
        $$
        \frac{\partial}{\partial x} \left( \frac{\partial \phi}{\partial x} \right) + \frac{\partial}{\partial y} \left( \frac{\partial \phi}{\partial y} \right) = 0
        $$
        $$
        \frac{\partial^2 \phi}{\partial x^2} + \frac{\partial^2 \phi}{\partial y^2} = 0 \quad \text{or} \quad \nabla^2 \phi = 0
        $$
    *   **For $\psi$:**
        Substitute $u = \frac{\partial \psi}{\partial y}$ and $v = -\frac{\partial \psi}{\partial x}$ into the irrotational flow condition:
        $$
        \frac{\partial}{\partial x} \left( -\frac{\partial \psi}{\partial x} \right) - \frac{\partial}{\partial y} \left( \frac{\partial \psi}{\partial y} \right) = 0
        $$
        $$
        -\frac{\partial^2 \psi}{\partial x^2} - \frac{\partial^2 \psi}{\partial y^2} = 0
        $$
        $$
        \frac{\partial^2 \psi}{\partial x^2} + \frac{\partial^2 \psi}{\partial y^2} = 0 \quad \text{or} \quad \nabla^2 \psi = 0
        $$

---

### 6. Applications and Examples

The stream function is a fundamental concept in analyzing 2D potential flows, which are often used as approximations for real flows or as building blocks for more complex flows.

*   **Uniform Flow:**
    *   **Description:** Flow with constant velocity in a single direction.
    *   **Example:** Flow parallel to the x-axis with velocity $U$.
        $u = U, v = 0$.
    *   **Finding $\psi$:**
        $U = \frac{\partial \psi}{\partial y} \implies \psi = Uy + f(x)$
        $0 = -\frac{\partial \psi}{\partial x} \implies \frac{\partial \psi}{\partial x} = 0$
        For this to be true, $f(x)$ must be a constant. So, $f(x) = C$.
        $\psi(x, y) = Uy + C$
        We can set $C=0$ without loss of generality.
        **$\psi(x, y) = Uy$**
    *   **Streamlines:** $Uy = \text{constant}$. These are horizontal lines ($y = \text{constant}$), which is consistent with flow parallel to the x-axis.

*   **Source Flow:**
    *   **Description:** A point where fluid is introduced into the flow and flows radially outwards.
    *   **Example:** A source at the origin $(0,0)$ with a strength $2m$ (meaning $2m$ volume of fluid per unit time exits radially).
    *   **Velocity Components in Polar Coordinates:**
        $v_r = \frac{m}{r}, v_\theta = 0$.
    *   **Finding $\psi$ in Polar Coordinates:**
        $v_r = \frac{1}{r} \frac{\partial \psi}{\partial \theta} \implies \frac{m}{r} = \frac{1}{r} \frac{\partial \psi}{\partial \theta} \implies \frac{\partial \psi}{\partial \theta} = m$
        $v_\theta = -\frac{\partial \psi}{\partial r} \implies 0 = -\frac{\partial \psi}{\partial r} \implies \frac{\partial \psi}{\partial r} = 0$
        From $\frac{\partial \psi}{\partial \theta} = m$, integrating with respect to $\theta$: $\psi = m\theta + f(r)$.
        From $\frac{\partial \psi}{\partial r} = 0$, we have $\frac{\partial}{\partial r}(m\theta + f(r)) = 0 \implies f'(r) = 0$. So, $f(r) = C$.
        **$\psi(r, \theta) = m\theta + C$**
    *   **Streamlines:** $m\theta = \text{constant}$. These are radial lines emanating from the origin ($\theta = \text{constant}$). This is consistent with radial outflow.

*   **Vortex Flow:**
    *   **Description:** A flow rotating around a central point.
    *   **Example:** A free vortex at the origin with strength $\Gamma$ (circulation).
    *   **Velocity Components in Polar Coordinates:**
        $v_r = 0, v_\theta = \frac{\Gamma}{r}$.
    *   **Finding $\psi$ in Polar Coordinates:**
        $v_r = \frac{1}{r} \frac{\partial \psi}{\partial \theta} \implies 0 = \frac{1}{r} \frac{\partial \psi}{\partial \theta} \implies \frac{\partial \psi}{\partial \theta} = 0$
        $v_\theta = -\frac{\partial \psi}{\partial r} \implies \frac{\Gamma}{r} = -\frac{\partial \psi}{\partial r} \implies \frac{\partial \psi}{\partial r} = -\frac{\Gamma}{r}$
        From $\frac{\partial \psi}{\partial \theta} = 0$, integrating with respect to $\theta$: $\psi = f(r)$.
        From $\frac{\partial \psi}{\partial r} = -\frac{\Gamma}{r}$, integrating with respect to $r$: $\psi = -\Gamma \ln(r) + C$.
        So, $f(r) = -\Gamma \ln(r) + C$.
        **$\psi(r, \theta) = -\Gamma \ln(r) + C$**
    *   **Streamlines:** $-\Gamma \ln(r) = \text{constant}$. This implies $\ln(r) = \text{constant}$, so $r = \text{constant}$. These are circles centered at the origin, consistent with vortex flow.

*   **Combining Flows:**
    The stream function is linear, meaning that the stream function for a combination of flows is the sum of the stream functions of individual flows. This is a very powerful tool for building complex flow patterns from simpler ones.
    *   **Example:** Uniform flow + Source (Rankine Body)
        Consider a uniform flow $U$ in the x-direction and a source $2m$ at the origin.
        $\psi_{uniform} = Uy$
        $\psi_{source} = m\theta$
        The combined stream function is $\psi_{combined} = Uy + m\theta$.
        This combination forms a "Rankine body," which approximates the flow around a streamlined object like a fish or an ellipsoid.

---

### 7. Limitations of Stream Function

*   **Two-Dimensional Flows Only:** The stream function as defined is strictly for 2D flows or flows that can be represented in a 2D plane (e.g., axisymmetric flows can be analyzed using a modified stream function). It cannot be directly applied to general 3D flows.
*   **Incompressible Flows Only:** The derivation relies on the continuity equation for incompressible fluids. For compressible fluids, the continuity equation involves density, and a simple stream function definition isn't sufficient.
*   **Definition for Rotational Flows:** While the stream function can be defined for rotational flows, the orthogonality with equipotential lines is lost. The stream function will still satisfy continuity, but $\nabla^2 \psi = 0$ will not hold.

---

### 8. Practice Questions and Exercises

**Question 1:**
For a 2D incompressible flow with velocity components $u = 2xy$ and $v = y^2 - x^2$, determine if the flow is:
a) Steady or Unsteady
b) Compressible or Incompressible
c) Rotational or Irrotational
d) If it is incompressible and irrotational, find the stream function $\psi$ and the velocity potential $\phi$.

**Answer 1:**
a) **Steady/Unsteady:** The velocity components $u$ and $v$ do not explicitly depend on time ($t$). Therefore, the flow is **steady**.
b) **Compressible/Incompressible:** Check the continuity equation: $\frac{\partial u}{\partial x} + \frac{\partial v}{\partial y} = \frac{\partial}{\partial x}(2xy) + \frac{\partial}{\partial y}(y^2 - x^2) = 2y + 2y = 4y$. Since $4y \neq 0$ in general, the flow is **compressible**.
c) **Rotational/Irrotational:** Check the irrotationality condition: $\frac{\partial v}{\partial x} - \frac{\partial u}{\partial y} = \frac{\partial}{\partial x}(y^2 - x^2) - \frac{\partial}{\partial y}(2xy) = -2x - 2x = -4x$. Since $-4x \neq 0$ in general, the flow is **rotational**.
d) Since the flow is compressible and rotational, we cannot find a stream function and velocity potential in the standard way for incompressible and irrotational flows.

**Question 2:**
A 2D incompressible flow is described by the stream function $\psi(x, y) = x^2 - y^2$.
a) Determine the velocity components $u$ and $v$.
b) Is this flow irrotational? Justify your answer.
c) Find the stream function for a uniform flow in the positive x-direction with velocity $U$.
d) What is the volume flow rate between the streamlines $\psi = 0$ and $\psi = 4$ in the first quadrant, where $x$ ranges from $0$ to $2$?

**Answer 2:**
a) Using $u = \frac{\partial \psi}{\partial y}$ and $v = -\frac{\partial \psi}{\partial x}$:
   $u = \frac{\partial}{\partial y}(x^2 - y^2) = -2y$
   $v = -\frac{\partial}{\partial x}(x^2 - y^2) = -(2x) = -2x$
   So, $\vec{V} = (-2y) \hat{i} + (-2x) \hat{j}$.

b) Check the irrotationality condition: $\frac{\partial v}{\partial x} - \frac{\partial u}{\partial y} = \frac{\partial}{\partial x}(-2x) - \frac{\partial}{\partial y}(-2y) = -2 - (-2) = -2 + 2 = 0$.
   Since the condition is met, the flow is **irrotational**.

c) For uniform flow in the positive x-direction with velocity $U$, we have $u = U$ and $v = 0$.
   $U = \frac{\partial \psi_{uniform}}{\partial y} \implies \psi_{uniform} = Uy + C_1$.
   $0 = -\frac{\partial \psi_{uniform}}{\partial x} \implies \frac{\partial \psi_{uniform}}{\partial x} = 0$. This is satisfied if $C_1$ is a constant.
   Setting $C_1 = 0$ for simplicity, the stream function is $\psi_{uniform} = Uy$.

d) The volume flow rate $Q$ between two streamlines $\psi_1$ and $\psi_2$ is given by $Q = \psi_2 - \psi_1$.
   Here, $\psi_1 = 0$ and $\psi_2 = 4$.
   Therefore, the volume flow rate is $Q = 4 - 0 = 4$.
   *Note: The specification of the range of $x$ is to define the path along which the flow rate is calculated. However, for a 2D flow and the definition of stream function, the flow rate between two specific streamlines is independent of the path taken.*

**Question 3:**
Consider a 2D incompressible flow in polar coordinates with velocity components $v_r = \frac{3}{r}$ and $v_\theta = 0$.
a) Is this flow rotational or irrotational?
b) Find the stream function $\psi(r, \theta)$.

**Answer 3:**
a) We need to check the irrotationality condition in polar coordinates: $\frac{\partial}{\partial r}(r v_\theta) - \frac{\partial v_r}{\partial \theta} = 0$.
   $\frac{\partial}{\partial r}(r \cdot 0) - \frac{\partial}{\partial \theta}\left(\frac{3}{r}\right) = \frac{\partial}{\partial r}(0) - 0 = 0$.
   Since the condition is met, the flow is **irrotational**.

b) Using $v_r = \frac{1}{r} \frac{\partial \psi}{\partial \theta}$ and $v_\theta = -\frac{\partial \psi}{\partial r}$:
   $\frac{3}{r} = \frac{1}{r} \frac{\partial \psi}{\partial \theta} \implies \frac{\partial \psi}{\partial \theta} = 3$.
   $0 = -\frac{\partial \psi}{\partial r} \implies \frac{\partial \psi}{\partial r} = 0$.
   From $\frac{\partial \psi}{\partial \theta} = 3$, integrating with respect to $\theta$: $\psi = 3\theta + f(r)$.
   From $\frac{\partial \psi}{\partial r} = 0$, we have $\frac{\partial}{\partial r}(3\theta + f(r)) = 0 \implies f'(r) = 0$. So, $f(r) = C$.
   The stream function is $\psi(r, \theta) = 3\theta + C$.

---

### 9. Important Points to Remember

*   **Stream function $\psi$ is defined for 2D incompressible flows.**
*   **It automatically satisfies the continuity equation for incompressible flow.**
*   **Streamlines are curves of constant stream function ($\psi = \text{constant}$).**
*   **The difference in stream function values between two streamlines represents the volume flow rate per unit width between them.**
*   **For irrotational flows, the velocity potential $\phi$ can also be defined.**
*   **Streamlines and equipotential lines are orthogonal for irrotational flows.**
*   **Both $\psi$ and $\phi$ satisfy Laplace's equation for 2D incompressible irrotational flows.**
*   **The linearity of the stream function allows for superposition of simple flows to create complex flow patterns.**

---
