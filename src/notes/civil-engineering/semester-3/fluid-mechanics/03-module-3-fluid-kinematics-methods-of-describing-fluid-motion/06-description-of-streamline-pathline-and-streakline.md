---
title: "Description of streamline, pathline and streakline"
subject: "FLUID MECHANICS"
module: "Module 3: Fluid Kinematics : Methods of describing fluid motion"
branch: "Civil Engineering"
semester: 3
topicId: "689f15ca56b5e963ba8106f7"
status: "completed"
scrapedAt: "2026-05-20T18:40:34.748Z"
---
# Fluid Mechanics: Module 3 - Fluid Kinematics

## Topic: Description of Streamline, Pathline, and Streakline

---

### **Learning Outcomes**

Upon completion of this topic, you should be able to:

*   Define and differentiate between streamlines, pathlines, and streaklines.
*   Understand the physical significance and mathematical representation of each of these fluid motion descriptions.
*   Recognize the conditions under which streamlines, pathlines, and streaklines are identical.
*   Apply the concepts of streamlines, pathlines, and streaklines to analyze fluid flow.

---

### **1. Introduction: Describing Fluid Motion**

Fluid motion can be described in various ways, each offering a different perspective on how the fluid particles move over time. Understanding these different descriptions is crucial for analyzing and predicting fluid behavior. We will focus on three primary Lagrangian and Eulerian descriptions:

*   **Streamline:** An Eulerian concept representing the instantaneous direction of fluid velocity.
*   **Pathline:** A Lagrangian concept tracing the actual trajectory of a fluid particle over time.
*   **Streakline:** A concept that visually represents the locus of all fluid particles that have passed through a particular point in space at some preceding time.

---

### **2. Streamlines**

**Definition:**
A **streamline** is an imaginary line drawn in a fluid flow such that it is everywhere tangent to the instantaneous velocity vector of the fluid.

**Key Concepts:**

*   **Eulerian Description:** Streamlines are defined based on the velocity field, which is a function of position and time ($V = V(x, y, z, t)$). They represent the "snapshot" of the flow at a particular instant in time.
*   **Tangential to Velocity:** At any point on a streamline, the direction of the streamline is the same as the direction of the fluid velocity at that point.
*   **No Flow Across Streamlines:** In steady flow, there is no flow across a streamline. This means a fluid particle starting on a streamline will always remain on that streamline. In unsteady flow, this is not strictly true, but it still provides a useful instantaneous representation.
*   **Dense Field:** A collection of streamlines representing the entire flow field is called a **streamline field**.

**Mathematical Representation:**
For a two-dimensional velocity field $V = u(x, y, t) \hat{i} + v(x, y, t) \hat{j}$, the differential equation for a streamline is given by:

$$ \frac{dx}{u} = \frac{dy}{v} $$

For a three-dimensional velocity field $V = u(x, y, z, t) \hat{i} + v(x, y, z, t) \hat{j} + w(x, y, z, t) \hat{k}$, the equations are:

$$ \frac{dx}{u} = \frac{dy}{v} = \frac{dz}{w} $$

**Example:**
Consider a steady, two-dimensional flow with velocity components $u = x$ and $v = -y$.

To find the streamlines, we use the equation:
$$ \frac{dx}{x} = \frac{dy}{-y} $$
Integrating both sides:
$$ \int \frac{dx}{x} = \int \frac{dy}{-y} $$
$$ \ln|x| = -\ln|y| + C $$
$$ \ln|x| + \ln|y| = C $$
$$ \ln|xy| = C $$
$$ xy = e^C $$
Let $K = e^C$. Then, the streamlines are given by $xy = K$. This represents a family of hyperbolas. For different values of $K$, we get different streamlines.

**Visualisation:**
Streamlines are often visualized using:
*   **Stream tubes:** Bundles of streamlines.
*   **Fibers or threads:** Placed in the flow, they align with the streamlines.
*   **Color visualization:** Using dyes or smoke injected into the flow.

---

### **3. Pathlines**

**Definition:**
A **pathline** is the locus of a single fluid particle as it moves through the flow field over a period of time. It is the actual trajectory of a fluid particle.

**Key Concepts:**

*   **Lagrangian Description:** Pathlines are described from the perspective of a single fluid particle. To trace a pathline, we need to know the velocity of that specific particle as a function of time.
*   **Trajectory of a Particle:** Imagine releasing a small tracer particle into the flow and tracking its movement. The path it follows is its pathline.
*   **Depends on Initial Position:** The pathline of a particle depends on its initial position and the history of the velocity field it experiences.

**Mathematical Representation:**
To determine a pathline, we need to integrate the velocity components with respect to time for a specific particle. If a particle is at position $(x_0, y_0, z_0)$ at time $t_0$, its position $(x, y, z)$ at a later time $t$ is given by:

$$ x(t) = x_0 + \int_{t_0}^{t} u(x(\tau), y(\tau), z(\tau), \tau) d\tau $$
$$ y(t) = y_0 + \int_{t_0}^{t} v(x(\tau), y(\tau), z(\tau), \tau) d\tau $$
$$ z(t) = z_0 + \int_{t_0}^{t} w(x(\tau), y(\tau), z(\tau), \tau) d\tau $$

These are coupled differential equations that are generally difficult to solve analytically.

**Example:**
Consider a steady flow where the velocity field is given by $u = y$ and $v = 0$.

Let's trace the pathline of a particle that starts at $(x_0, y_0)$ at $t=0$.
We have:
$$ \frac{dx}{dt} = u = y $$
$$ \frac{dy}{dt} = v = 0 $$

From $\frac{dy}{dt} = 0$, we get $y(t) = y_0$ (since $y(0) = y_0$).
Substituting this into $\frac{dx}{dt} = y$:
$$ \frac{dx}{dt} = y_0 $$
Integrating with respect to time:
$$ x(t) = y_0 t + C $$
Since $x(0) = x_0$, we have $x_0 = y_0(0) + C$, so $C = x_0$.
Therefore, the pathline is $x(t) = x_0 + y_0 t$ and $y(t) = y_0$.
This describes a horizontal straight line moving to the right with speed $y_0$.

**Visualisation:**
Pathlines are visualized by releasing small tracer particles and observing their movement over time.

---

### **4. Streaklines**

**Definition:**
A **streakline** is the locus of all fluid particles that have passed through a specific point in space at some preceding time. It represents the history of particles flowing through a fixed point.

**Key Concepts:**

*   **Lagrangian Concept (but viewed Eulerianly):** While it tracks particles, it's observed from a fixed point in space. Imagine injecting dye continuously from a single point.
*   **"Leaky Pen" Analogy:** Imagine a leaky pen always located at the same spot. The ink trail it leaves behind as it moves over time forms a streakline.
*   **Instantaneous Snapshot:** A streakline is an instantaneous picture of the paths of all particles that have ever passed through a given point.

**Mathematical Representation:**
To define a streakline, we consider a fixed point in space $(x_p, y_p, z_p)$ and track all particles that have passed through this point. For each particle that passed through $(x_p, y_p, z_p)$ at a time $\tau$, its position $(x, y, z)$ at the current time $t$ can be determined by integrating the velocity field from $\tau$ to $t$, starting from $(x_p, y_p, z_p)$.

This involves solving:
$$ x = x_p + \int_{\tau}^{t} u(x(\xi), y(\xi), z(\xi), \xi) d\xi $$
$$ y = y_p + \int_{\tau}^{t} v(x(\xi), y(\xi), z(\xi), \xi) d\xi $$
$$ z = z_p + \int_{\tau}^{t} w(x(\xi), y(\xi), z(\xi), \xi) d\xi $$

for $(x, y, z)$ for all possible values of $\tau$ where the particle passed through $(x_p, y_p, z_p)$. This is generally complex.

**Example:**
Consider a steady flow where the velocity field is given by $u = x$ and $v = 0$. Let's find the streakline passing through the origin $(0,0)$ at $t=0$.

For any particle to pass through $(0,0)$ at time $\tau$, its position at that time must have been $(0,0)$.
So, $x_p = 0$, $y_p = 0$.
The position of a particle at time $t$ that was at $(0,0)$ at time $\tau$ is given by:
$$ \frac{dx}{dt} = u = x $$
$$ \frac{dy}{dt} = v = 0 $$

Integrating $\frac{dy}{dt} = 0$, we get $y(t) = C_1$. Since $y(\tau) = 0$, $C_1 = 0$. So $y(t) = 0$.
Integrating $\frac{dx}{dt} = x$:
$$ \frac{dx}{x} = dt $$
$$ \ln|x| = t + C_2 $$
$$ x(t) = e^{t+C_2} = C_3 e^t $$
Since $x(\tau) = 0$, this equation requires $C_3 = 0$, which means $x(t) = 0$. This is incorrect, as it implies no flow.

Let's re-think the streakline definition and application.
Consider the example of smoke being injected from a point in a steady flow.

Let the injection point be $(0,0)$. We inject fluid continuously from $t=0$.
A particle injected at time $\tau$ (where $\tau \le t$) will be at some position $(x,y)$ at time $t$.
The velocity is $u=x$, $v=0$.
For a particle injected at time $\tau$:
$\frac{dx}{dt} = x \implies x(t) = C e^t$. If it's at $(0,0)$ at $\tau$, then $0 = C e^{\tau}$, so $C=0$. This implies $x(t)=0$. Still not working.

The issue is how to use the velocity field correctly for streaklines.
Let's reconsider the definition: locus of all particles that have passed through a point.

Consider a steady flow $V(x,y)$.
A streamline is defined by $\frac{dx}{u} = \frac{dy}{v}$.
Let's assume the velocity field is $u=x, v=-y$.
The streamlines are $xy=K$.

If we inject fluid at $(x_0, y_0)$ at time $\tau$, its position $(x,y)$ at time $t$ is given by solving the ODEs.
$u(x,y) = x \implies \frac{dx}{dt} = x \implies x(t) = C_1 e^t$.
$v(x,y) = -y \implies \frac{dy}{dt} = -y \implies y(t) = C_2 e^{-t}$.
If the particle is at $(x_0, y_0)$ at time $t_0$, then:
$x_0 = C_1 e^{t_0} \implies C_1 = x_0 e^{-t_0}$
$y_0 = C_2 e^{-t_0} \implies C_2 = y_0 e^{t_0}$
So, the pathline is:
$x(t) = x_0 e^{t-t_0}$
$y(t) = y_0 e^{-(t-t_0)}$

Now, consider a streakline from a point $(x_p, y_p)$.
Suppose we inject fluid at $(0,0)$ continuously starting from $t=0$.
A particle injected at time $\tau$ is at $(0,0)$ at time $\tau$.
So, for this particle, $x_0=0$, $y_0=0$, $t_0=\tau$.
Using the pathline equations:
$x(t) = 0 \cdot e^{t-\tau} = 0$
$y(t) = 0 \cdot e^{-(t-\tau)} = 0$
This is still yielding trivial results.

Let's use a different example or approach for streaklines.

**Example Revisit (Streakline):**
Consider a steady flow $u = x$ and $v = 0$. We want the streakline from the origin $(0,0)$.
This means we are looking at all particles that passed through $(0,0)$.

For a particle to pass through $(0,0)$ at time $\tau$:
Its position at time $\tau$ was $(0,0)$.
Its pathline equations are:
$x(t) = x_0 e^{t-t_0}$
$y(t) = y_0 e^{-(t-t_0)}$ (This was for the $u=x, v=-y$ example, not $u=x, v=0$)

Let's use the correct pathline for $u=x, v=0$:
$\frac{dx}{dt} = x \implies x(t) = C_1 e^t$. If $x(\tau) = x_0$, then $C_1 = x_0 e^{-\tau}$. So, $x(t) = x_0 e^{t-\tau}$.
$\frac{dy}{dt} = 0 \implies y(t) = C_2$. If $y(\tau) = y_0$, then $C_2 = y_0$. So, $y(t) = y_0$.

Now, for the streakline from $(0,0)$:
The particle was at $(0,0)$ at time $\tau$. So $x_0=0$ and $y_0=0$.
The path of this particle is:
$x(t) = 0 \cdot e^{t-\tau} = 0$
$y(t) = 0$
This is still giving a point. This implies that for $u=x, v=0$, any particle that reaches the origin must have always been at the origin if the flow is steady.

Let's use a more illustrative example for streaklines.
Consider unsteady flow.
Suppose the velocity field is $u = x$ and $v = 0$, but the flow is *unsteady* and the velocity depends on time.
Let $u(x,y,t) = x$ and $v(x,y,t) = 0$.
Let's inject fluid at $(0,0)$ at $t=0$.
A particle injected at time $\tau$ is at $(0,0)$ at time $\tau$.
$\frac{dx}{dt} = x \implies x(t) = C e^t$. If $x(\tau) = 0$, then $C=0$. So $x(t)=0$.
$\frac{dy}{dt} = 0 \implies y(t) = C'$. If $y(\tau) = 0$, then $C'=0$. So $y(t)=0$.

There must be a misunderstanding in my application of streaklines to steady flows.

**Correct Streakline Understanding:**
Streaklines are most easily understood when the velocity field is *time-varying*.

Consider a steady flow $u=x$, $v=0$.
Streamlines: $\frac{dx}{x} = \frac{dy}{0} \implies dy = 0 \implies y = constant$. Streamlines are horizontal lines.
Pathlines of a particle starting at $(x_0, y_0)$ at $t=0$:
$x(t) = x_0 e^t$
$y(t) = y_0$
The pathlines are horizontal lines that move to the right exponentially.

**Streakline Example (Unsteady Flow):**
Let the velocity field be $u = 2xt$ and $v = 0$.
Let's inject fluid from the origin $(0,0)$ at $t=0$.
So, a particle injected at time $\tau$ is at $(0,0)$ at time $\tau$.
We want to find the position $(x,y)$ of this particle at a later time $t$.

$\frac{dx}{dt} = u = 2xt$
$\frac{dy}{dt} = v = 0$

From $\frac{dy}{dt} = 0$, we get $y(t) = C_1$. Since $y(\tau) = 0$, $C_1 = 0$. So $y(t) = 0$.
From $\frac{dx}{dt} = 2xt$:
$\int_{x_0}^{x(t)} dx' = \int_{\tau}^{t} 2x' \xi d\xi$
This integration is incorrect as the variable $x$ is also integrated over.

Let's be precise. A particle starting at $(x_0, y_0)$ at time $t_0$ will have its position $(x(t), y(t))$ at time $t$ given by:
$x(t) = x_0 + \int_{t_0}^{t} u(x(\xi), y(\xi), \xi) d\xi$
$y(t) = y_0 + \int_{t_0}^{t} v(x(\xi), y(\xi), \xi) d\xi$

For streaklines, the "injection point" is fixed, say $(x_p, y_p)$. We inject continuously.
A particle injected at time $\tau$ is at $(x_p, y_p)$ at time $\tau$.
So, $x(\tau) = x_p$ and $y(\tau) = y_p$.
We want to find the locus of $(x(t), y(t))$ for all $\tau \le t$.

Let's use a simpler unsteady example: $u = kt$, $v=0$. Injection at $(0,0)$ at $t=0$.
$\frac{dx}{dt} = kt$
$\frac{dy}{dt} = 0$

For a particle injected at time $\tau$ (at $(0,0)$):
$y(t) = y(\tau) = 0$.
$x(t) = x(\tau) + \int_{\tau}^{t} k\xi d\xi = 0 + \left[ \frac{1}{2} k \xi^2 \right]_{\tau}^{t} = \frac{1}{2} k (t^2 - \tau^2)$.
So, the pathline of a particle injected at time $\tau$ is $x(\tau) = \frac{1}{2} k (t^2 - \tau^2)$ and $y(\tau) = 0$.

To get the streakline, we fix the current time $t$ and let $\tau$ vary from $0$ to $t$.
From $x = \frac{1}{2} k (t^2 - \tau^2)$, we can express $\tau$ in terms of $x$ and $t$:
$\tau^2 = t^2 - \frac{2x}{k}$
Since $\tau \ge 0$, we have $\tau = \sqrt{t^2 - \frac{2x}{k}}$.
This is valid only when $t^2 - \frac{2x}{k} \ge 0$, i.e., $x \le \frac{1}{2} k t^2$.
Also, $\tau \le t$, so $\sqrt{t^2 - \frac{2x}{k}} \le t$, which means $t^2 - \frac{2x}{k} \le t^2$, so $-\frac{2x}{k} \le 0$. If $k>0$, then $x \ge 0$.

The streakline is the curve formed by $(x, y(x,t))$ for $\tau \in [0, t]$.
Here, $y=0$ for all particles.
The streakline is defined by the relationship between $x$ and $t$ as $\tau$ varies.
The streakline is the set of points $(x,y)$ such that $y=0$ and $x = \frac{1}{2}k(t^2 - \tau^2)$ for some $\tau \in [0, t]$.
For a fixed $t$, as $\tau$ goes from $0$ to $t$, $x$ goes from $\frac{1}{2}kt^2$ (when $\tau=0$) down to $0$ (when $\tau=t$).
So, the streakline at time $t$ is a line segment on the x-axis from $0$ to $\frac{1}{2}kt^2$.
As time progresses, this line segment grows.

**Visualisation:**
Streaklines are visualized by injecting a continuous stream of dye or smoke at a fixed point.

---

### **5. Conditions for Identity**

Streamlines, pathlines, and streaklines are not always the same. They coincide only under specific conditions:

*   **Steady Flow:** In steady flow, the velocity at any given point in space does not change with time ($V = V(x, y, z)$).
    *   **Streamlines and Pathlines:** In steady flow, streamlines and pathlines are identical. This is because the velocity vector at any point is constant, so a particle will follow a path that is always tangent to this constant velocity vector.
    *   **Streamlines/Pathlines and Streaklines:** In steady flow, streaklines are also identical to streamlines and pathlines. If the flow is steady, the history of particles passing through a point is simply the streamline passing through that point.

*   **Unsteady Flow:** In unsteady flow, the velocity at a point can change with time ($V = V(x, y, z, t)$).
    *   **Streamlines vs. Pathlines:** In unsteady flow, streamlines and pathlines are generally different. A streamline represents the instantaneous direction of velocity, while a pathline is the trajectory of a particle over time, influenced by the changing velocity field.
    *   **Streaklines vs. Streamlines/Pathlines:** Streaklines can also be different from streamlines and pathlines in unsteady flow. The streakline represents the history of particles passing through a point, and the changing velocity field over time can cause these histories to deviate from the instantaneous velocity direction (streamlines) or the path of a single particle (pathlines).

**Summary Table:**

| Feature           | Streamline                                    | Pathline                                          | Streakline                                                                   |
| :---------------- | :-------------------------------------------- | :------------------------------------------------ | :--------------------------------------------------------------------------- |
| **Description**   | Instantaneous velocity direction              | Trajectory of a single particle over time         | Locus of all particles that passed through a fixed point at earlier times    |
| **Framework**     | Eulerian (velocity field $V(x,y,z,t)$)        | Lagrangian (tracking a particle)                  | Lagrangian concept viewed from an Eulerian perspective (fixed point)         |
| **When Identical**| Steady flow: Identical to Pathline & Streakline | Steady flow: Identical to Streamline & Streakline | Steady flow: Identical to Streamline & Pathline                              |
| **Unsteady Flow** | Instantaneous direction                       | Actual trajectory                                 | History of particles through a fixed point                                   |
| **Visualisation** | Dye injected along flow direction             | Tracing a particle's movement                     | Continuous dye injection from a fixed point                                  |

---

### **6. Practice Questions**

**Question 1:**
In a steady two-dimensional flow, the velocity field is given by $u = 2x$ and $v = -2y$.
(a) Determine the differential equation for the streamlines.
(b) Find the equation for the streamlines.
(c) Describe the pathline of a particle starting at $(x_0, y_0)$ at $t=0$.
(d) Are the streamlines and pathlines identical in this case? Explain why.

**Question 2:**
Consider an unsteady flow where the velocity field is $u = t$ and $v = 0$. A continuous stream of dye is injected at the origin $(0,0)$ starting from $t=0$.
(a) What is the pathline of a fluid particle that was at the origin at time $\tau$?
(b) Determine the streakline at time $t$.

**Question 3:**
Which of the following statements is **false**?
(a) In steady flow, streamlines and pathlines are identical.
(b) Streaklines represent the instantaneous direction of fluid velocity.
(c) Pathlines describe the actual trajectory of a fluid particle.
(d) In unsteady flow, streamlines and pathlines are generally different.

**Question 4:**
A fluid flows with $u = y$ and $v = -x$ in the xy-plane. This flow is steady.
(a) Sketch some streamlines.
(b) What is the pathline of a particle that starts at $(1,0)$ at $t=0$?

---

### **7. Answers to Practice Questions**

**Answer 1:**
(a) The differential equation for streamlines is $\frac{dx}{u} = \frac{dy}{v}$.
Substituting $u=2x$ and $v=-2y$:
$$ \frac{dx}{2x} = \frac{dy}{-2y} $$

(b) Integrating the equation:
$$ \int \frac{dx}{2x} = \int \frac{dy}{-2y} $$
$$ \frac{1}{2} \ln|x| = -\frac{1}{2} \ln|y| + C $$
$$ \ln|x| + \ln|y| = 2C $$
$$ \ln|xy| = 2C $$
$$ xy = e^{2C} $$
Let $K = e^{2C}$. The streamlines are $xy = K$. This represents a family of hyperbolas.

(c) For the pathline, we need to integrate the velocity with respect to time for a particle starting at $(x_0, y_0)$ at $t=0$.
$$ \frac{dx}{dt} = u = 2x $$
$$ \frac{dy}{dt} = v = -2y $$
Integrating $\frac{dx}{dt} = 2x$:
$$ \int \frac{dx}{x} = \int 2 dt $$
$$ \ln|x| = 2t + C_1 $$
$$ x(t) = e^{2t+C_1} = C_2 e^{2t} $$
Since $x(0) = x_0$, $x_0 = C_2 e^0 \implies C_2 = x_0$. So, $x(t) = x_0 e^{2t}$.

Integrating $\frac{dy}{dt} = -2y$:
$$ \int \frac{dy}{y} = \int -2 dt $$
$$ \ln|y| = -2t + C_3 $$
$$ y(t) = e^{-2t+C_3} = C_4 e^{-2t} $$
Since $y(0) = y_0$, $y_0 = C_4 e^0 \implies C_4 = y_0$. So, $y(t) = y_0 e^{-2t}$.

The pathline is given by $x(t) = x_0 e^{2t}$ and $y(t) = y_0 e^{-2t}$.

(d) Yes, the streamlines and pathlines are identical.
**Explanation:** The flow is steady. In steady flow, the velocity vector at any point in space is constant. Therefore, a fluid particle will follow a path that is always tangent to this constant velocity vector, which is the definition of a streamline.

**Answer 2:**
The velocity field is $u=t$, $v=0$. Dye is injected at $(0,0)$ starting at $t=0$.

(a) Pathline of a particle injected at time $\tau$ (when it's at $(0,0)$):
$$ \frac{dx}{dt} = u = t $$
$$ \frac{dy}{dt} = v = 0 $$
From $\frac{dy}{dt} = 0$, $y(t) = C_1$. Since $y(\tau) = 0$, $C_1 = 0$. So, $y(t) = 0$.
From $\frac{dx}{dt} = t$:
$$ \int_{x(\tau)}^{x(t)} dx' = \int_{\tau}^{t} \xi d\xi $$
$$ x(t) - x(\tau) = \left[ \frac{1}{2} \xi^2 \right]_{\tau}^{t} $$
Since $x(\tau) = 0$:
$$ x(t) = \frac{1}{2} (t^2 - \tau^2) $$
The pathline of a particle injected at time $\tau$ is $x(t) = \frac{1}{2}(t^2 - \tau^2)$ and $y(t) = 0$.

(b) To find the streakline at time $t$, we consider all particles injected from $\tau=0$ up to the current time $t$. The streakline is the locus of these particles.
From the pathline equations:
$y = 0$
$x = \frac{1}{2}(t^2 - \tau^2)$
We need to express the streakline in terms of $(x,y)$ for the given time $t$.
We can eliminate $\tau$. Since $\tau$ ranges from $0$ to $t$, we have:
$0 \le \tau \le t$
Squaring:
$0 \le \tau^2 \le t^2$
From $x = \frac{1}{2}(t^2 - \tau^2)$, we get $\tau^2 = t^2 - 2x$.
Substituting this into the inequality:
$0 \le t^2 - 2x \le t^2$
The right inequality $t^2 - 2x \le t^2$ simplifies to $-2x \le 0$, or $x \ge 0$.
The left inequality $0 \le t^2 - 2x$ simplifies to $2x \le t^2$, or $x \le \frac{1}{2}t^2$.
So, for a given time $t$, the streakline is the line segment $y=0$ from $x=0$ to $x = \frac{1}{2}t^2$.
As time progresses, this line segment grows.

**Answer 3:**
(b) Streaklines represent the instantaneous direction of fluid velocity. **This statement is false.** Streaklines represent the history of particles passing through a fixed point, not the instantaneous velocity direction. Streamlines represent the instantaneous velocity direction.

**Answer 4:**
(a) Flow: $u=y$, $v=-x$. Steady flow.
Streamline equation: $\frac{dx}{y} = \frac{dy}{-x}$
$-x dx = y dy$
Integrate: $\int -x dx = \int y dy$
$-\frac{x^2}{2} = \frac{y^2}{2} + C$
$\frac{x^2}{2} + \frac{y^2}{2} = -C$
Let $R^2 = -2C$. Then $x^2 + y^2 = R^2$.
This represents a family of circles centered at the origin. The velocity vectors are tangential to these circles and have magnitude $\sqrt{u^2+v^2} = \sqrt{y^2+(-x)^2} = \sqrt{x^2+y^2}$.

Sketch: Draw concentric circles centered at the origin. The velocity vector at $(x,y)$ would be in the direction of $(-y,x)$, which is tangent to the circle. For example, at (1,0), velocity is (0,-1). At (0,1), velocity is (-1,0). At (-1,0), velocity is (0,1). At (0,-1), velocity is (1,0). This indicates a counter-clockwise rotation.

(b) Pathline of a particle starting at $(1,0)$ at $t=0$.
$\frac{dx}{dt} = y$
$\frac{dy}{dt} = -x$
From the streamline analysis, we know the solution is circular motion.
$x(t) = A \cos(\omega t) + B \sin(\omega t)$
$y(t) = C \cos(\omega t) + D \sin(\omega t)$
We know $\omega=1$ from the form of the equations.
$x(t) = A \cos(t) + B \sin(t)$
$y(t) = C \cos(t) + D \sin(t)$
Substitute into ODEs:
$y = - \frac{dx}{dt} \implies C \cos(t) + D \sin(t) = -( -A \sin(t) + B \cos(t) ) = A \sin(t) - B \cos(t)$.
Equating coefficients of $\cos(t)$ and $\sin(t)$:
$C = A$, $D = -B$.
So, $x(t) = A \cos(t) + B \sin(t)$
$y(t) = A \sin(t) - B \cos(t)$
Apply initial conditions: $x(0)=1$, $y(0)=0$.
$1 = A \cos(0) + B \sin(0) \implies 1 = A$.
$0 = A \sin(0) - B \cos(0) \implies 0 = -B \implies B=0$.
So, $x(t) = \cos(t)$ and $y(t) = \sin(t)$.
This describes a circular path of radius 1 centered at the origin, traversed counter-clockwise.

---

### **8. Important Points to Remember**

*   **Streamlines:** Instantaneous direction of velocity. Eulerian perspective. Always tangent to velocity vectors. No flow across streamlines in steady flow.
*   **Pathlines:** Actual trajectory of a fluid particle. Lagrangian perspective.
*   **Streaklines:** Locus of all particles that have passed through a fixed point. Combines Lagrangian tracking with an Eulerian observation point.
*   **Steady Flow:** All three (streamlines, pathlines, streaklines) are identical. This is a critical condition.
*   **Unsteady Flow:** Streamlines, pathlines, and streaklines are generally different.
*   **Visualisation Tools:** Understanding these concepts helps in interpreting flow visualization techniques (e.g., smoke tunnels, particle image velocimetry).

---
This concludes the study notes for the description of streamline, pathline, and streakline. Remember to practice problems to solidify your understanding!
