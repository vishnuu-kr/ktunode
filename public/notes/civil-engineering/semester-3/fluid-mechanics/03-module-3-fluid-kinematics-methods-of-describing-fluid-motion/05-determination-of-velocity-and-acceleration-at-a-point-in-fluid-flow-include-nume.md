---
title: "Determination of velocity and acceleration at a point in fluid flow (include numerical problems)"
subject: "FLUID MECHANICS"
module: "Module 3: Fluid Kinematics : Methods of describing fluid motion"
branch: "Civil Engineering"
semester: 3
topicId: "689f15ca56b5e963ba8106f6"
status: "completed"
scrapedAt: "2026-05-20T18:40:34.057Z"
---
# Fluid Mechanics: Module 3 - Fluid Kinematics

## Topic: Determination of Velocity and Acceleration at a Point in Fluid Flow

This module delves into the fundamental principles of fluid kinematics, focusing on how to describe and quantify fluid motion. Specifically, this topic aims to equip you with the tools to determine the velocity and acceleration of a fluid at any given point within a flow field.

---

### Learning Outcomes

By the end of this topic, you should be able to:

*   **Understand and apply different methods to describe fluid motion.**
*   **Differentiate between Eulerian and Lagrangian descriptions of fluid flow.**
*   **Define and calculate the velocity vector of a fluid at a specific point.**
*   **Define and calculate the acceleration vector of a fluid particle.**
*   **Distinguish between convective and local acceleration.**
*   **Apply the material derivative (substantial derivative) to determine acceleration.**
*   **Solve numerical problems related to determining velocity and acceleration in various flow scenarios.**

---

### 1. Methods of Describing Fluid Motion

Fluid motion can be described using two primary approaches:

*   **Lagrangian Description:**
    *   **Concept:** This method tracks the motion of individual fluid particles as they move through space and time. Imagine following a single "parcelt" of fluid as it flows.
    *   **Key Idea:** We describe the position, velocity, and acceleration of a specific fluid particle as a function of its initial position and time.
    *   **Notation:**
        *   Position of a particle: $\mathbf{r}(t) = x(t) \hat{\mathbf{i}} + y(t) \hat{\mathbf{j}} + z(t) \hat{\mathbf{k}}$
        *   Velocity of a particle: $\mathbf{v}(t) = \frac{d\mathbf{r}}{dt}$
        *   Acceleration of a particle: $\mathbf{a}(t) = \frac{d\mathbf{v}}{dt} = \frac{d^2\mathbf{r}}{dt^2}$
    *   **Advantages:** Provides a detailed history of each particle.
    *   **Disadvantages:** Can be complex for turbulent flows with many particles. Not practical for analyzing the flow field in general.

*   **Eulerian Description:**
    *   **Concept:** This method focuses on observing the fluid as it passes through fixed points in space. Instead of tracking individual particles, we look at the properties of the fluid at specific locations in the flow field.
    *   **Key Idea:** We describe the velocity, pressure, and other fluid properties as functions of space coordinates and time.
    *   **Notation:**
        *   Velocity field: $\mathbf{v}(x, y, z, t) = u(x, y, z, t) \hat{\mathbf{i}} + v(x, y, z, t) \hat{\mathbf{j}} + w(x, y, z, t) \hat{\mathbf{k}}$
        *   Where $u, v, w$ are the velocity components in the x, y, and z directions, respectively.
        *   The coordinates $(x, y, z)$ represent a fixed point in space.
        *   $t$ represents time.
    *   **Advantages:** More convenient for analyzing the overall flow field, especially in engineering applications.
    *   **Disadvantages:** Doesn't directly track the history of individual fluid particles.

**Important Point:** For most fluid mechanics problems, the **Eulerian description is preferred and used**.

---

### 2. Determination of Velocity at a Point

In the Eulerian description, the velocity of the fluid at a point $(x, y, z)$ at time $t$ is given by the velocity vector:

$\mathbf{v}(x, y, z, t) = u(x, y, z, t) \hat{\mathbf{i}} + v(x, y, z, t) \hat{\mathbf{j}} + w(x, y, z, t) \hat{\mathbf{k}}$

where:
*   $u$ is the velocity component in the x-direction.
*   $v$ is the velocity component in the y-direction.
*   $w$ is the velocity component in the z-direction.

**Example:**
If the velocity field is given by $\mathbf{v}(x, y, z, t) = (3xy) \hat{\mathbf{i}} + (2y^2 - x^2z) \hat{\mathbf{j}} + (4tz) \hat{\mathbf{k}}$, then at the point $(1, 2, 3)$ and time $t=1$:

*   $u(1, 2, 3, 1) = 3(1)(2) = 6$
*   $v(1, 2, 3, 1) = 2(2^2) - (1^2)(3) = 2(4) - 3 = 8 - 3 = 5$
*   $w(1, 2, 3, 1) = 4(1)(3) = 12$

So, the velocity vector at $(1, 2, 3)$ and $t=1$ is $\mathbf{v} = 6 \hat{\mathbf{i}} + 5 \hat{\mathbf{j}} + 12 \hat{\mathbf{k}}$.

---

### 3. Determination of Acceleration at a Point

The acceleration of a fluid particle is the rate of change of its velocity. In the Eulerian framework, this requires considering how the velocity changes not only with time at a fixed point (local acceleration) but also how the velocity changes as the particle moves to different points in space where the velocity might be different (convective acceleration).

This combined change is captured by the **Material Derivative** (also known as the Substantial Derivative or Total Derivative), denoted by $D/Dt$.

**The Material Derivative:**

For any scalar or vector property $\phi$ of a fluid particle, its rate of change following the particle is given by:

$\frac{D\phi}{Dt} = \frac{\partial\phi}{\partial t} + (\mathbf{v} \cdot \nabla) \phi$

Where:
*   $\frac{\partial\phi}{\partial t}$ is the **local rate of change** (or unsteady term). This is the rate of change of $\phi$ at a fixed point in space.
*   $(\mathbf{v} \cdot \nabla) \phi$ is the **convective rate of change**. This represents the rate of change of $\phi$ due to the particle moving to a new location with a different value of $\phi$.
*   $\nabla$ is the del operator: $\nabla = \frac{\partial}{\partial x} \hat{\mathbf{i}} + \frac{\partial}{\partial y} \hat{\mathbf{j}} + \frac{\partial}{\partial z} \hat{\mathbf{k}}$

**Acceleration of a Fluid Particle:**

The acceleration of a fluid particle is the material derivative of its velocity:

$\mathbf{a} = \frac{D\mathbf{v}}{Dt} = \frac{\partial\mathbf{v}}{\partial t} + (\mathbf{v} \cdot \nabla) \mathbf{v}$

Expanding this for the velocity components $u, v, w$:

$\mathbf{a} = \left( \frac{\partial u}{\partial t} + u \frac{\partial u}{\partial x} + v \frac{\partial u}{\partial y} + w \frac{\partial u}{\partial z} \right) \hat{\mathbf{i}} + \left( \frac{\partial v}{\partial t} + u \frac{\partial v}{\partial x} + v \frac{\partial v}{\partial y} + w \frac{\partial v}{\partial z} \right) \hat{\mathbf{j}} + \left( \frac{\partial w}{\partial t} + u \frac{\partial w}{\partial x} + v \frac{\partial w}{\partial y} + w \frac{\partial w}{\partial z} \right) \hat{\mathbf{k}}$

**Components of Acceleration:**

*   **Local Acceleration (Unsteady Acceleration):** $\frac{\partial \mathbf{v}}{\partial t}$
    *   This is the rate of change of velocity at a fixed point in space.
    *   It exists only in **unsteady flows** (where velocity at a point changes with time).
    *   For steady flow, $\frac{\partial u}{\partial t} = \frac{\partial v}{\partial t} = \frac{\partial w}{\partial t} = 0$.

*   **Convective Acceleration:** $(\mathbf{v} \cdot \nabla) \mathbf{v}$
    *   This is the rate of change of velocity due to the fluid particle moving from one point to another within the flow field.
    *   It exists in **non-uniform flows**, where velocity varies with position, even in steady flows.
    *   The convective acceleration components are:
        *   $u \frac{\partial u}{\partial x} + v \frac{\partial u}{\partial y} + w \frac{\partial u}{\partial z}$ (x-component)
        *   $u \frac{\partial v}{\partial x} + v \frac{\partial v}{\partial y} + w \frac{\partial v}{\partial z}$ (y-component)
        *   $u \frac{\partial w}{\partial x} + v \frac{\partial w}{\partial y} + w \frac{\partial w}{\partial z}$ (z-component)

**Summary of Acceleration Components:**

*   **Total Acceleration (Eulerian):**
    *   $a_x = \frac{\partial u}{\partial t} + u \frac{\partial u}{\partial x} + v \frac{\partial u}{\partial y} + w \frac{\partial u}{\partial z}$
    *   $a_y = \frac{\partial v}{\partial t} + u \frac{\partial v}{\partial x} + v \frac{\partial v}{\partial y} + w \frac{\partial v}{\partial z}$
    *   $a_z = \frac{\partial w}{\partial t} + u \frac{\partial w}{\partial x} + v \frac{\partial w}{\partial y} + w \frac{\partial w}{\partial z}$

**Important Point:** The acceleration of a fluid particle is the material derivative of its velocity. Both local and convective accelerations must be considered.

---

### 4. Numerical Problems and Examples

Let's work through some examples to solidify our understanding.

**Example 1: Calculating Velocity and Acceleration in a Simple Flow**

**Problem:** The velocity field of a two-dimensional flow is given by $\mathbf{v}(x, y, t) = (3x + 2y) \hat{\mathbf{i}} + (4x - 5y) \hat{\mathbf{j}}$. Determine the velocity and acceleration of a fluid particle at the point $(2, 1)$ at time $t=1$ s.

**Solution:**

**Velocity at (2, 1) at t=1s:**
The velocity field is:
$u(x, y, t) = 3x + 2y$
$v(x, y, t) = 4x - 5y$

At $(x, y) = (2, 1)$:
$u(2, 1) = 3(2) + 2(1) = 6 + 2 = 8$
$v(2, 1) = 4(2) - 5(1) = 8 - 5 = 3$

The velocity vector is $\mathbf{v} = 8 \hat{\mathbf{i}} + 3 \hat{\mathbf{j}}$.

**Acceleration at (2, 1) at t=1s:**

First, we need to determine the partial derivatives of the velocity components. Since the velocity field does not depend on time ($t$), the local acceleration terms will be zero.

$\frac{\partial u}{\partial t} = 0$
$\frac{\partial v}{\partial t} = 0$

Now, let's calculate the spatial derivatives:
$\frac{\partial u}{\partial x} = \frac{\partial}{\partial x}(3x + 2y) = 3$
$\frac{\partial u}{\partial y} = \frac{\partial}{\partial y}(3x + 2y) = 2$
$\frac{\partial v}{\partial x} = \frac{\partial}{\partial x}(4x - 5y) = 4$
$\frac{\partial v}{\partial y} = \frac{\partial}{\partial y}(4x - 5y) = -5$

Now, calculate the acceleration components using the Eulerian formula:
$a_x = \frac{\partial u}{\partial t} + u \frac{\partial u}{\partial x} + v \frac{\partial u}{\partial y}$
$a_y = \frac{\partial v}{\partial t} + u \frac{\partial v}{\partial x} + v \frac{\partial v}{\partial y}$

At the point $(2, 1)$, we have $u=8$ and $v=3$. The spatial derivatives are constants:
$a_x = 0 + (8)(3) + (3)(2) = 24 + 6 = 30$
$a_y = 0 + (8)(4) + (3)(-5) = 32 - 15 = 17$

The acceleration vector is $\mathbf{a} = 30 \hat{\mathbf{i}} + 17 \hat{\mathbf{j}}$.

**Answer:** The velocity at $(2, 1)$ is $8 \hat{\mathbf{i}} + 3 \hat{\mathbf{j}}$, and the acceleration at $(2, 1)$ is $30 \hat{\mathbf{i}} + 17 \hat{\mathbf{j}}$.

---

**Example 2: Unsteady Flow Acceleration**

**Problem:** The velocity field for a one-dimensional unsteady flow along the x-axis is given by $u(x, t) = 3x + 2t^2$. Determine the acceleration of a fluid particle at $x=2$ m at $t=3$ s.

**Solution:**

This is a one-dimensional flow, so $\mathbf{v} = u(x, t) \hat{\mathbf{i}}$. The velocity component is $u(x, t) = 3x + 2t^2$.

**Velocity at x=2, t=3:**
$u(2, 3) = 3(2) + 2(3^2) = 6 + 2(9) = 6 + 18 = 24$ m/s.

**Acceleration:**
The acceleration in one-dimensional flow is $a_x = \frac{Du}{Dt} = \frac{\partial u}{\partial t} + u \frac{\partial u}{\partial x}$.

First, calculate the partial derivatives:
$\frac{\partial u}{\partial t} = \frac{\partial}{\partial t}(3x + 2t^2) = 4t$
$\frac{\partial u}{\partial x} = \frac{\partial}{\partial x}(3x + 2t^2) = 3$

Now, evaluate these at $x=2$ and $t=3$:
$\frac{\partial u}{\partial t}\Big|_{x=2, t=3} = 4(3) = 12$ s$^{-1}$ (This is the local acceleration)
$\frac{\partial u}{\partial x}\Big|_{x=2, t=3} = 3$ (This is constant)

And we already found $u$ at this point: $u(2, 3) = 24$ m/s.

Now, calculate the acceleration:
$a_x = \frac{\partial u}{\partial t} + u \frac{\partial u}{\partial x}$
$a_x = 12 + (24)(3)$
$a_x = 12 + 72 = 84$ m/s$^2$.

**Answer:** The acceleration of the fluid particle at $x=2$ m at $t=3$ s is 84 m/s$^2$.

---

**Example 3: Acceleration in a Polar Coordinate System (Introduction)**

While we primarily use Cartesian coordinates, fluid flow can also be described in polar coordinates. This is common for radial or circular flows.

In polar coordinates $(r, \theta)$, the velocity vector can be written as $\mathbf{v} = v_r \hat{\mathbf{e}}_r + v_\theta \hat{\mathbf{e}}_\theta$. The acceleration components are more complex and involve terms related to radial and tangential motion.

For a steady flow in polar coordinates, the acceleration components are:
$a_r = \frac{\partial v_r}{\partial t} + v_r \frac{\partial v_r}{\partial r} + \frac{v_\theta}{r} \frac{\partial v_r}{\partial \theta} - \frac{v_\theta^2}{r}$
$a_\theta = \frac{\partial v_\theta}{\partial t} + v_r \frac{\partial v_\theta}{\partial r} + \frac{v_\theta}{r} \frac{\partial v_\theta}{\partial \theta} + \frac{v_r v_\theta}{r}$

The $\frac{\partial}{\partial t}$ terms are zero for steady flow. The $\frac{v_\theta^2}{r}$ term in $a_r$ is the centripetal acceleration, and the $\frac{v_r v_\theta}{r}$ term in $a_\theta$ is due to the changing direction of the radial velocity component.

*(Note: This is a brief introduction. Detailed problems in polar coordinates are usually covered in more advanced fluid mechanics courses.)*

---

### 5. Practice Questions

1.  **Problem:** A two-dimensional velocity field is given by $\mathbf{v}(x, y, t) = (2x^2 y) \hat{\mathbf{i}} + (3xy^2 - t) \hat{\mathbf{j}}$. Calculate the velocity and acceleration of a fluid particle at the point $(1, 2)$ at time $t = 3$ s.

2.  **Problem:** Consider a steady, one-dimensional flow in the x-direction where the velocity is given by $u(x) = 5x^2$. Determine the acceleration of a fluid particle at $x = 2$ m.

3.  **Problem:** The velocity field in a fluid is described by $\mathbf{v}(x, y, z, t) = (2t) \hat{\mathbf{i}} + (3x) \hat{\mathbf{j}} + (4y - 5z) \hat{\mathbf{k}}$. Find the acceleration vector at the point $(1, 2, 3)$ at $t = 2$ s.

4.  **Problem:** A fluid flows along a straight pipe with velocity $u(x, t) = \frac{x}{1+t}$. Determine the local acceleration and convective acceleration of a fluid particle at $x=5$ m at $t=2$ s. What is the total acceleration?

---

### 6. Answers to Practice Questions

1.  **Velocity:**
    $u(1, 2) = 2(1^2)(2) = 4$
    $v(1, 2, 3) = 3(1)(2^2) - 3 = 3(1)(4) - 3 = 12 - 3 = 9$
    $\mathbf{v} = 4 \hat{\mathbf{i}} + 9 \hat{\mathbf{j}}$

    **Acceleration:**
    $\frac{\partial u}{\partial t} = 0$
    $\frac{\partial v}{\partial t} = -1$
    $\frac{\partial u}{\partial x} = 4xy = 4(1)(2) = 8$
    $\frac{\partial u}{\partial y} = 2x^2 = 2(1^2) = 2$
    $\frac{\partial v}{\partial x} = 3y^2 = 3(2^2) = 12$
    $\frac{\partial v}{\partial y} = 6xy = 6(1)(2) = 12$

    $a_x = \frac{\partial u}{\partial t} + u \frac{\partial u}{\partial x} + v \frac{\partial u}{\partial y} = 0 + (4)(8) + (9)(2) = 32 + 18 = 50$
    $a_y = \frac{\partial v}{\partial t} + u \frac{\partial v}{\partial x} + v \frac{\partial v}{\partial y} = -1 + (4)(12) + (9)(12) = -1 + 48 + 108 = 155$
    $\mathbf{a} = 50 \hat{\mathbf{i}} + 155 \hat{\mathbf{j}}$

2.  **Acceleration:**
    Since the flow is steady, $\frac{\partial u}{\partial t} = 0$.
    $u(x) = 5x^2$
    $\frac{\partial u}{\partial x} = 10x$
    At $x = 2$ m:
    $u(2) = 5(2^2) = 20$ m/s
    $\frac{\partial u}{\partial x}\Big|_{x=2} = 10(2) = 20$ s$^{-1}$
    $a_x = \frac{\partial u}{\partial t} + u \frac{\partial u}{\partial x} = 0 + (20)(20) = 400$ m/s$^2$.
    The acceleration is 400 m/s$^2$.

3.  **Acceleration:**
    $\mathbf{v}(1, 2, 3, 2) = (2 \times 2) \hat{\mathbf{i}} + (3 \times 1) \hat{\mathbf{j}} + (4 \times 2 - 5 \times 3) \hat{\mathbf{k}}$
    $\mathbf{v} = 4 \hat{\mathbf{i}} + 3 \hat{\mathbf{j}} + (8 - 15) \hat{\mathbf{k}} = 4 \hat{\mathbf{i}} + 3 \hat{\mathbf{j}} - 7 \hat{\mathbf{k}}$
    $u = 4, v = 3, w = -7$

    Partial derivatives:
    $\frac{\partial u}{\partial t} = 2$
    $\frac{\partial u}{\partial x} = 0$, $\frac{\partial u}{\partial y} = 0$, $\frac{\partial u}{\partial z} = 0$
    $\frac{\partial v}{\partial t} = 0$
    $\frac{\partial v}{\partial x} = 3$, $\frac{\partial v}{\partial y} = 0$, $\frac{\partial v}{\partial z} = 0$
    $\frac{\partial w}{\partial t} = 0$
    $\frac{\partial w}{\partial x} = 0$, $\frac{\partial w}{\partial y} = 4$, $\frac{\partial w}{\partial z} = -5$

    $a_x = \frac{\partial u}{\partial t} + u \frac{\partial u}{\partial x} + v \frac{\partial u}{\partial y} + w \frac{\partial u}{\partial z} = 2 + (4)(0) + (3)(0) + (-7)(0) = 2$
    $a_y = \frac{\partial v}{\partial t} + u \frac{\partial v}{\partial x} + v \frac{\partial v}{\partial y} + w \frac{\partial v}{\partial z} = 0 + (4)(3) + (3)(0) + (-7)(0) = 12$
    $a_z = \frac{\partial w}{\partial t} + u \frac{\partial w}{\partial x} + v \frac{\partial w}{\partial y} + w \frac{\partial w}{\partial z} = 0 + (4)(0) + (3)(4) + (-7)(-5) = 12 + 35 = 47$

    $\mathbf{a} = 2 \hat{\mathbf{i}} + 12 \hat{\mathbf{j}} + 47 \hat{\mathbf{k}}$

4.  **Local and Convective Acceleration:**
    $u(x, t) = \frac{x}{1+t}$

    **Local Acceleration:**
    $\frac{\partial u}{\partial t} = \frac{\partial}{\partial t} \left( \frac{x}{1+t} \right) = x \cdot \frac{-1}{(1+t)^2} = \frac{-x}{(1+t)^2}$
    At $x=5, t=2$:
    $\frac{\partial u}{\partial t}\Big|_{x=5, t=2} = \frac{-5}{(1+2)^2} = \frac{-5}{9}$ m/s$^2$.

    **Convective Acceleration:**
    $\frac{\partial u}{\partial x} = \frac{\partial}{\partial x} \left( \frac{x}{1+t} \right) = \frac{1}{1+t}$
    At $x=5, t=2$:
    $\frac{\partial u}{\partial x}\Big|_{x=5, t=2} = \frac{1}{1+2} = \frac{1}{3}$ s$^{-1}$.

    Velocity at $x=5, t=2$:
    $u(5, 2) = \frac{5}{1+2} = \frac{5}{3}$ m/s.

    Convective Acceleration component: $u \frac{\partial u}{\partial x} = \left(\frac{5}{3}\right) \left(\frac{1}{3}\right) = \frac{5}{9}$ m/s$^2$.

    **Total Acceleration:**
    $a_x = \frac{\partial u}{\partial t} + u \frac{\partial u}{\partial x} = \frac{-5}{9} + \frac{5}{9} = 0$ m/s$^2$.

    **Answer:** Local acceleration is $-5/9$ m/s$^2$. Convective acceleration is $5/9$ m/s$^2$. Total acceleration is $0$ m/s$^2$.

---

### 7. Important Points to Remember

*   **Eulerian vs. Lagrangian:** Understand the fundamental difference between tracking fluid particles (Lagrangian) and observing fixed points in space (Eulerian). The Eulerian approach is generally preferred in Fluid Mechanics.
*   **Velocity Field:** Velocity is a vector quantity and is a function of position and time: $\mathbf{v}(x, y, z, t)$.
*   **Acceleration:** Acceleration of a fluid particle is the **material derivative** of its velocity: $\mathbf{a} = \frac{D\mathbf{v}}{Dt}$.
*   **Components of Acceleration:** Remember that acceleration has two components:
    *   **Local (Unsteady):** $\frac{\partial \mathbf{v}}{\partial t}$ - change of velocity at a fixed point.
    *   **Convective:** $(\mathbf{v} \cdot \nabla) \mathbf{v}$ - change of velocity due to movement within the flow field.
*   **Steady Flow:** In steady flow, the velocity at any point does not change with time, meaning $\frac{\partial \mathbf{v}}{\partial t} = 0$. However, convective acceleration can still be present if the flow is non-uniform.
*   **Material Derivative Formula:** Memorize the expanded form of the material derivative for acceleration components in Cartesian coordinates.
*   **Coordinate Systems:** Be aware that fluid motion can be described in different coordinate systems (Cartesian, polar, etc.), and the acceleration formulas will vary accordingly.

---

This detailed set of notes should provide you with a solid foundation for understanding and calculating fluid velocity and acceleration. Practice the problems diligently to master these concepts.
