---
title: "Phase plane analysis: Concept of phase plane, singular points."
subject: "NONLINEAR CONTROL SYSTEMS"
module: "Module 1: Introduction to nonlinear systems:"
branch: "Electrical and Electronics Engineering"
semester: 7
topicId: "68a200872b85456187f3699d"
status: "completed"
scrapedAt: "2026-05-23T16:38:06.054Z"
---
# Nonlinear Control Systems: Module 1 - Introduction to Nonlinear Systems

## Topic: Phase Plane Analysis: Concept of Phase Plane, Singular Points

### Learning Outcomes Covered:
*   **LO1:** Understand the concept of the phase plane and its role in analyzing nonlinear systems.
*   **LO2:** Identify and classify different types of singular points (equilibrium points) in a 2D nonlinear system.
*   **LO3:** Determine the nature of singular points by analyzing the linearized system around them.
*   **LO4:** Sketch phase trajectories in the phase plane to understand the qualitative behavior of nonlinear systems.

---

### 1. Introduction to Phase Plane Analysis

**1.1 What is a Nonlinear System?**

A nonlinear system is a dynamical system whose governing differential equations are not linear. This means the principle of superposition does not hold. Nonlinear systems exhibit richer and more complex behaviors than linear systems, such as:
*   Limit cycles
*   Bifurcations
*   Chaos
*   Saturation, dead zones, hysteresis, backlash (common nonlinearities)

**(Reference: Khalil, Chapter 1)**

**1.2 Why Phase Plane Analysis?**

For systems of order higher than two, analytical and graphical solutions become extremely difficult. However, for **second-order autonomous nonlinear systems**, phase plane analysis provides a powerful graphical tool to understand the qualitative behavior of solutions (trajectories) in the state space.

**Autonomous System:** A system whose dynamics do not explicitly depend on time. For a second-order system, this can be represented as:
$$
\dot{x}_1 = f_1(x_1, x_2)
$$
$$
\dot{x}_2 = f_2(x_1, x_2)
$$
where $(x_1, x_2)$ are the state variables.

**(Reference: Slotine & Li, Chapter 3)**

**1.3 The Phase Plane**

The phase plane is a 2D space where the horizontal axis represents one state variable (e.g., $x_1$ or position $x$) and the vertical axis represents its time derivative (e.g., $\dot{x}_1$ or velocity $\dot{x}$). A point $(x_1, x_2)$ in this plane represents a unique state of the system at a given instant. As the system evolves in time, its state changes, tracing a path called a **phase trajectory** in the phase plane.

*   **State Variables:** The minimum set of variables required to describe the system's state. For a second-order system, we typically have two state variables, say $x_1$ and $x_2$.
*   **Phase Trajectory:** The curve traced by the state vector $(x_1(t), x_2(t))$ in the phase plane as time $t$ varies. Each trajectory represents a unique solution of the system's differential equations for a given initial condition.
*   **Direction Field:** At each point $(x_1, x_2)$ in the phase plane, the vector $(\dot{x}_1, \dot{x}_2)$ represents the velocity of the state vector at that point. Plotting these vectors forms a **direction field**, which indicates the direction of movement of the state trajectory.

**(Reference: Khalil, Chapter 4)**

**1.4 The Phase Portrait**

A collection of representative phase trajectories in the phase plane for various initial conditions is called the **phase portrait**. The phase portrait provides a complete qualitative picture of the system's behavior, including:
*   Locations of equilibrium points.
*   Stability of equilibrium points.
*   Presence of limit cycles (closed trajectories).
*   The overall flow of trajectories towards or away from equilibrium points.

**(Reference: Slotine & Li, Chapter 3)**

---

### 2. Singular Points (Equilibrium Points)

**2.1 Definition**

A **singular point** or **equilibrium point** $(x_{1e}, x_{2e})$ of an autonomous system is a state where the time derivatives of all state variables are zero. At these points, the system remains at rest unless disturbed.

$$
\dot{x}_1 = f_1(x_1, x_2) = 0
$$
$$
\dot{x}_2 = f_2(x_1, x_2) = 0
$$

Solving these two algebraic equations simultaneously yields the coordinates of the equilibrium points.

**(Reference: Khalil, Chapter 4)**

**2.2 Importance of Singular Points**

Equilibrium points are critical to understanding the qualitative behavior of nonlinear systems because:
*   They represent steady-state conditions.
*   The behavior of trajectories in the neighborhood of equilibrium points often dictates the overall system behavior.
*   Stability analysis focuses on the behavior of trajectories around these points.

**(Reference: Slotine & Li, Chapter 3)**

---

### 3. Linearization Around Singular Points

To analyze the behavior of a nonlinear system near an equilibrium point $(x_{1e}, x_{2e})$, we can **linearize** the system around that point. This involves approximating the nonlinear functions $f_1$ and $f_2$ using their first-order Taylor series expansion.

Let $x_1 = x_{1e} + \delta x_1$ and $x_2 = x_{2e} + \delta x_2$, where $\delta x_1$ and $\delta x_2$ are small deviations from the equilibrium point.

$$
\dot{x}_1 = f_1(x_{1e} + \delta x_1, x_{2e} + \delta x_2) \approx f_1(x_{1e}, x_{2e}) + \frac{\partial f_1}{\partial x_1}\bigg|_{(x_{1e}, x_{2e})} \delta x_1 + \frac{\partial f_1}{\partial x_2}\bigg|_{(x_{1e}, x_{2e})} \delta x_2
$$
$$
\dot{x}_2 = f_2(x_{1e} + \delta x_1, x_{2e} + \delta x_2) \approx f_2(x_{1e}, x_{2e}) + \frac{\partial f_2}{\partial x_1}\bigg|_{(x_{1e}, x_{2e})} \delta x_1 + \frac{\partial f_2}{\partial x_2}\bigg|_{(x_{1e}, x_{2e})} \delta x_2
$$

Since $(x_{1e}, x_{2e})$ is an equilibrium point, $f_1(x_{1e}, x_{2e}) = 0$ and $f_2(x_{1e}, x_{2e}) = 0$. Let $\dot{\delta x}_1 = \dot{x}_1$ and $\dot{\delta x}_2 = \dot{x}_2$ since the deviations are small.

The linearized system is:
$$
\begin{bmatrix} \dot{\delta x}_1 \\ \dot{\delta x}_2 \end{bmatrix} = \begin{bmatrix} \frac{\partial f_1}{\partial x_1} & \frac{\partial f_1}{\partial x_2} \\ \frac{\partial f_2}{\partial x_1} & \frac{\partial f_2}{\partial x_2} \end{bmatrix}\bigg|_{(x_{1e}, x_{2e})} \begin{bmatrix} \delta x_1 \\ \delta x_2 \end{bmatrix}
$$

This can be written in matrix form as:
$$
\dot{\mathbf{\delta x}} = J \mathbf{\delta x}
$$
where $\mathbf{\delta x} = \begin{bmatrix} \delta x_1 \\ \delta x_2 \end{bmatrix}$ and $J$ is the **Jacobian matrix** evaluated at the equilibrium point.

**(Reference: Khalil, Chapter 4; Slotine & Li, Chapter 3)**

**3.1 The Jacobian Matrix (J)**

The Jacobian matrix contains the partial derivatives of the system's vector field at the equilibrium point. Its eigenvalues determine the stability and type of the singular point.

$$
J = \begin{bmatrix} a & b \\ c & d \end{bmatrix} = \begin{bmatrix} \frac{\partial f_1}{\partial x_1} & \frac{\partial f_1}{\partial x_2} \\ \frac{\partial f_2}{\partial x_1} & \frac{\partial f_2}{\partial x_2} \end{bmatrix}\bigg|_{(x_{1e}, x_{2e})}
$$

The behavior of the linearized system $\dot{\mathbf{\delta x}} = J \mathbf{\delta x}$ is determined by the eigenvalues of $J$. The eigenvalues $\lambda_1, \lambda_2$ are the roots of the characteristic equation:
$$
\det(J - \lambda I) = 0
$$
$$
(a - \lambda)(d - \lambda) - bc = 0
$$
$$
\lambda^2 - (a+d)\lambda + (ad-bc) = 0
$$
$$
\lambda^2 - \text{tr}(J)\lambda + \det(J) = 0
$$
where $\text{tr}(J) = a+d$ is the trace and $\det(J) = ad-bc$ is the determinant of the Jacobian matrix.

**(Reference: Khalil, Chapter 4)**

---

### 4. Classification of Singular Points

The classification of singular points is based on the eigenvalues of the Jacobian matrix at that point. The eigenvalues can be real or complex, positive or negative.

Let $p = \text{tr}(J)$ and $q = \det(J)$. The eigenvalues are given by:
$$
\lambda_{1,2} = \frac{p \pm \sqrt{p^2 - 4q}}{2}
$$

**Important Cases Based on Eigenvalues $\lambda_1, \lambda_2$:**

| Type of Singular Point | Eigenvalues ($\lambda_1, \lambda_2$)                                    | Behavior of Trajectories                                                                 | Stability        |
| :----------------------- | :----------------------------------------------------------------------- | :--------------------------------------------------------------------------------------- | :--------------- |
| **Node (or Nodal Point)** | Real, same sign                                                          | Trajectories approach or recede from the origin along straight lines.                   | Stable if neg. <br> Unstable if pos. |
|   - **Stable Node**      | Real, negative, $\lambda_1 \ne \lambda_2$                                | Trajectories approach the origin.                                                       | Asymptotically Stable |
|   - **Unstable Node**    | Real, positive, $\lambda_1 \ne \lambda_2$                                | Trajectories move away from the origin.                                                 | Unstable         |
|   - **Star Node**        | Real, negative, $\lambda_1 = \lambda_2$                                  | Trajectories approach the origin along straight lines, all originating from the same line. | Asymptotically Stable |
|   - **Degenerate Node**  | Real, negative, $\lambda_1 \ne \lambda_2$, one eigenvalue is much smaller. | Trajectories approach the origin, initially along lines of the dominant eigenvector, then bending. | Asymptotically Stable |
| **Saddle Point**         | Real, opposite signs ($\lambda_1 < 0 < \lambda_2$)                       | Trajectories approach along one line (stable manifold) and recede along another (unstable manifold). | Unstable         |
| **Focus (or Spiral Point)** | Complex conjugate, real part negative                                    | Trajectories spiral towards the origin.                                                 | Asymptotically Stable |
|   - **Stable Focus**     | $\lambda_{1,2} = \alpha \pm j\beta$, $\alpha < 0$                         | Trajectories spiral inwards towards the origin.                                         | Asymptotically Stable |
|   - **Unstable Focus**   | $\lambda_{1,2} = \alpha \pm j\beta$, $\alpha > 0$                         | Trajectories spiral outwards from the origin.                                           | Unstable         |
| **Center**               | Purely imaginary ($\lambda_{1,2} = \pm j\beta$)                           | Trajectories are closed ellipses around the origin. The linearized system is neutrally stable. | Neutrally Stable |
| **Degenerate Case**      | One or both eigenvalues are zero.                                       | Behavior is more complex and requires higher-order analysis.                          | Varies           |

**(Reference: Khalil, Chapter 4; Slotine & Li, Chapter 3; Isidori, Chapter 2)**

**4.1 Graphical Classification using Trace-Determinant Plane**

The nature of the eigenvalues, and thus the type of singular point, can be determined by the values of $p = \text{tr}(J)$ and $q = \det(J)$. The discriminant of the characteristic equation is $\Delta = p^2 - 4q$.

*   **Real Eigenvalues ($p^2 - 4q \ge 0$):**
    *   $p < 0$: Node (Stable if $q > 0$, Saddle if $q < 0$)
    *   $p > 0$: Node (Unstable if $q > 0$, Saddle if $q < 0$)
    *   $p = 0, q > 0$: Star Node (Stable)
    *   $p = 0, q < 0$: Saddle
    *   $p^2 = 4q, p \ne 0$: Degenerate Node (Stable if $p < 0$, Unstable if $p > 0$)
    *   $p = 0, q = 0$: Origin (requires higher-order analysis)

*   **Complex Eigenvalues ($p^2 - 4q < 0$):**
    *   $p < 0$: Focus (Stable)
    *   $p > 0$: Focus (Unstable)
    *   $p = 0$: Center (Neutrally Stable)

The trace-determinant plane is a powerful tool to visualize these regions.

**(Reference: Khalil, Chapter 4)**

---

### 5. Sketching Phase Trajectories

While phase plane analysis is graphical, sketching accurate trajectories can be challenging without computational tools. However, we can sketch qualitative behavior by:

1.  **Locating Singular Points:** Find all points where $\dot{x}_1 = 0$ and $\dot{x}_2 = 0$.
2.  **Determining the Nature of Singular Points:** Linearize the system around each singular point and analyze the eigenvalues of the Jacobian. Classify each point (node, saddle, focus, center).
3.  **Finding Isoclines:**
    *   **$\dot{x}_1 = 0$ isoclines:** These are points where the vertical component of the velocity is zero. Trajectories cross these lines horizontally.
    *   **$\dot{x}_2 = 0$ isoclines:** These are points where the horizontal component of the velocity is zero. Trajectories cross these lines vertically.
    *   **Slope isoclines ($\frac{\dot{x}_2}{\dot{x}_1} = m$):** Lines where the slope of the trajectory is constant. $\frac{f_2(x_1, x_2)}{f_1(x_1, x_2)} = m$. For example, $\frac{\dot{x}_2}{\dot{x}_1} = 0$ are the $\dot{x}_2=0$ isoclines, and $\frac{\dot{x}_2}{\dot{x}_1} \to \infty$ are the $\dot{x}_1=0$ isoclines.

4.  **Determining Trajectory Directions:** Use the sign of $\dot{x}_1$ and $\dot{x}_2$ in different regions of the phase plane to determine the direction of flow.
    *   $\dot{x}_1 > 0$: Moving right
    *   $\dot{x}_1 < 0$: Moving left
    *   $\dot{x}_2 > 0$: Moving up
    *   $\dot{x}_2 < 0$: Moving down

5.  **Drawing Trajectories:** Sketch smooth curves that follow the direction field and pass through the analyzed singular points and isoclines. Trajectories cannot cross each other for a unique solution system.

**(Reference: Slotine & Li, Chapter 3)**

---

### 6. Examples

**Example 1: Simple Linear System**

Consider the system:
$$
\dot{x}_1 = -x_1
$$
$$
\dot{x}_2 = -2x_2
$$

*   **Singular Point:** $(0, 0)$ since $\dot{x}_1 = 0 \implies x_1 = 0$ and $\dot{x}_2 = 0 \implies x_2 = 0$.
*   **Jacobian:** This system is already linear. The Jacobian is:
    $$
    J = \begin{bmatrix} -1 & 0 \\ 0 & -2 \end{bmatrix}
    $$
*   **Eigenvalues:** The eigenvalues are $\lambda_1 = -1$ and $\lambda_2 = -2$.
*   **Classification:** Both eigenvalues are real and negative. Since $\lambda_1 \ne \lambda_2$, this is a **stable node**. Trajectories approach the origin.
*   **Phase Portrait:** Trajectories are straight lines of the form $x_2 = C x_1^k$. Specifically, $x_1(t) = x_1(0)e^{-t}$, $x_2(t) = x_2(0)e^{-2t}$. Thus, $x_2(t) = x_2(0) (e^{-t})^2 = x_2(0) (x_1(t)/x_1(0))^2$. The trajectories are parabolas of the form $x_2 = K x_1^2$. Trajectories are steeper along the $x_2$ axis.

**Example 2: A Nonlinear System (Pendulum without damping)**

Consider a simple pendulum described by:
$$
\ddot{\theta} + \frac{g}{L}\sin(\theta) = 0
$$
Let $x_1 = \theta$ and $x_2 = \dot{\theta}$. The system becomes:
$$
\dot{x}_1 = x_2
$$
$$
\dot{x}_2 = -\frac{g}{L}\sin(x_1)
$$
Let $\omega_0^2 = g/L$.
$$
\dot{x}_1 = x_2
$$
$$
\dot{x}_2 = -\omega_0^2 \sin(x_1)
$$

*   **Singular Points:**
    *   $\dot{x}_1 = x_2 = 0$
    *   $\dot{x}_2 = -\omega_0^2 \sin(x_1) = 0 \implies \sin(x_1) = 0 \implies x_1 = n\pi$, where $n$ is an integer.
    The singular points are $(n\pi, 0)$ for $n \in \mathbb{Z}$.

*   **Analyzing Singular Points:**
    *   **Case $n$ is even (e.g., $0, 2\pi$):** Equilibrium at $(2k\pi, 0)$.
        *   $f_1(x_1, x_2) = x_2$
        *   $f_2(x_1, x_2) = -\omega_0^2 \sin(x_1)$
        *   Jacobian:
            $$
            J = \begin{bmatrix} \frac{\partial f_1}{\partial x_1} & \frac{\partial f_1}{\partial x_2} \\ \frac{\partial f_2}{\partial x_1} & \frac{\partial f_2}{\partial x_2} \end{bmatrix} = \begin{bmatrix} 0 & 1 \\ -\omega_0^2 \cos(x_1) & 0 \end{bmatrix}
            $$
        *   At $(2k\pi, 0)$: $\cos(2k\pi) = 1$.
            $$
            J = \begin{bmatrix} 0 & 1 \\ -\omega_0^2 & 0 \end{bmatrix}
            $$
        *   Characteristic equation: $\lambda^2 - (0)\lambda + (0 - (-\omega_0^2)) = 0 \implies \lambda^2 + \omega_0^2 = 0$.
        *   Eigenvalues: $\lambda = \pm j\omega_0$. These are purely imaginary.
        *   **Classification:** For the linearized system, these are **centers**. In the nonlinear system, these correspond to the stable equilibrium points at the bottom of the pendulum swing, where trajectories are closed orbits (oscillations). However, it's important to note that the linearization only guarantees behavior *near* the equilibrium. For centers, the nonlinear behavior is indeed oscillatory, but they are not asymptotically stable.

    *   **Case $n$ is odd (e.g., $\pi, 3\pi$):** Equilibrium at $((2k+1)\pi, 0)$.
        *   At $((2k+1)\pi, 0)$: $\cos((2k+1)\pi) = -1$.
            $$
            J = \begin{bmatrix} 0 & 1 \\ -(-\omega_0^2) & 0 \end{bmatrix} = \begin{bmatrix} 0 & 1 \\ \omega_0^2 & 0 \end{bmatrix}
            $$
        *   Characteristic equation: $\lambda^2 - (0)\lambda + (0 - \omega_0^2) = 0 \implies \lambda^2 - \omega_0^2 = 0$.
        *   Eigenvalues: $\lambda = \pm \omega_0$. These are real and opposite in sign.
        *   **Classification:** These are **saddle points**. In the nonlinear system, these correspond to the unstable equilibrium points at the top of the pendulum swing. Trajectories approach along a stable manifold and move away along an unstable manifold.

**(Reference: Slotine & Li, Chapter 3; Khalil, Chapter 4)**

---

### 7. Relation to Course Outcomes

*   **CO1: Analyse the qualitative behaviour of nonlinear systems about their equilibrium points. (Knowledge Level: K3)**
    *   Phase plane analysis directly addresses this by visualizing trajectories and identifying the nature of equilibrium points. Understanding singular points and their linearization is key.
*   **CO2: Analyse the stability of nonlinear systems. (Knowledge Level: K3)**
    *   The classification of singular points based on eigenvalues directly relates to local stability analysis. The concepts of stable nodes, stable foci, and saddle points are crucial for this.
*   **CO3: Analyse the behaviour of nonlinear systems using frequency domain analysis. (Knowledge Level: K2)**
    *   While this topic is primarily time-domain/state-space, understanding the behavior around equilibrium points (e.g., oscillations around centers) can inform frequency-domain intuition about system responses. However, the direct application of frequency domain methods (like Nyquist) is not the focus here.
*   **CO4: Design feedback controller for nonlinear systems. (Knowledge Level: K3)**
    *   Understanding the inherent behavior of a nonlinear system via phase plane analysis is a prerequisite for designing effective controllers. For instance, knowing the system has unstable equilibrium points would guide the controller design to stabilize it.

---

### 8. Important Points to Remember

*   Phase plane analysis is applicable to **second-order autonomous nonlinear systems**.
*   **Singular points** are states where the system's velocity is zero.
*   The behavior of a nonlinear system near an equilibrium point is determined by the **eigenvalues of the Jacobian matrix** evaluated at that point.
*   The trace-determinant plane is a useful tool for classifying singular points.
*   A **stable node** or **stable focus** implies local asymptotic stability.
*   A **saddle point** is always unstable.
*   A **center** represents neutrally stable oscillations in the linearized system. In nonlinear systems, these can be actual limit cycles or oscillations.
*   Phase trajectories for autonomous systems cannot cross.
*   The stability of singular points is **local**. Global behavior might be different.

---

### 9. Practice Questions

**Question 1:**
Consider the system:
$$
\dot{x}_1 = x_1 - x_1 x_2
$$
$$
\dot{x}_2 = x_2 - x_1 x_2
$$
(a) Find all singular points of the system.
(b) Linearize the system around each singular point.
(c) Classify each singular point (node, saddle, focus, center) and determine its stability.

**Answer 1:**
(a) Singular points:
$\dot{x}_1 = x_1(1-x_2) = 0 \implies x_1=0$ or $x_2=1$.
$\dot{x}_2 = x_2(1-x_1) = 0 \implies x_2=0$ or $x_1=1$.

Combining these conditions:
1. If $x_1=0$, then $x_2(1-0)=0 \implies x_2=0$. So $(0,0)$ is a singular point.
2. If $x_2=1$, then $1(1-x_1)=0 \implies x_1=1$. So $(1,1)$ is a singular point.
3. If $x_2=0$, then $x_1(1-0)=0 \implies x_1=0$. This gives $(0,0)$ again.
4. If $x_1=1$, then $x_2(1-1)=0 \implies x_2=0$. This gives $(1,1)$ again.

The singular points are $(0,0)$ and $(1,1)$.

(b) Jacobian matrix:
$$
J = \begin{bmatrix} \frac{\partial f_1}{\partial x_1} & \frac{\partial f_1}{\partial x_2} \\ \frac{\partial f_2}{\partial x_1} & \frac{\partial f_2}{\partial x_2} \end{bmatrix} = \begin{bmatrix} 1-x_2 & -x_1 \\ -x_2 & 1-x_1 \end{bmatrix}
$$

*   **At (0,0):**
    $$
    J(0,0) = \begin{bmatrix} 1-0 & -0 \\ -0 & 1-0 \end{bmatrix} = \begin{bmatrix} 1 & 0 \\ 0 & 1 \end{bmatrix}
    $$
    Eigenvalues: $\lambda_1=1, \lambda_2=1$.
*   **At (1,1):**
    $$
    J(1,1) = \begin{bmatrix} 1-1 & -1 \\ -1 & 1-1 \end{bmatrix} = \begin{bmatrix} 0 & -1 \\ -1 & 0 \end{bmatrix}
    $$
    Characteristic equation: $(0-\lambda)(0-\lambda) - (-1)(-1) = 0 \implies \lambda^2 - 1 = 0$.
    Eigenvalues: $\lambda_1=1, \lambda_2=-1$.

(c) Classification:
*   **At (0,0):** Eigenvalues are $\lambda_1=1, \lambda_2=1$. Both are real and positive, and equal. This is a **star node** (or a degenerate node). It is **unstable**.
*   **At (1,1):** Eigenvalues are $\lambda_1=1, \lambda_2=-1$. Both are real and opposite in sign. This is a **saddle point**. It is **unstable**.

---

**Question 2:**
For the system $\dot{x}_1 = x_2$, $\dot{x}_2 = -x_1 - x_1^3$:
(a) Find the singular points.
(b) Linearize the system around the origin $(0,0)$.
(c) Classify the singular point $(0,0)$ based on the linearized system. What can you say about the stability of the original nonlinear system at $(0,0)$?

**Answer 2:**
(a) Singular points:
$\dot{x}_1 = x_2 = 0$.
$\dot{x}_2 = -x_1 - x_1^3 = -x_1(1+x_1^2) = 0 \implies x_1=0$.
The only singular point is $(0,0)$.

(b) Jacobian matrix:
$$
J = \begin{bmatrix} \frac{\partial f_1}{\partial x_1} & \frac{\partial f_1}{\partial x_2} \\ \frac{\partial f_2}{\partial x_1} & \frac{\partial f_2}{\partial x_2} \end{bmatrix} = \begin{bmatrix} 0 & 1 \\ -1 - 3x_1^2 & 0 \end{bmatrix}
$$
At $(0,0)$:
$$
J(0,0) = \begin{bmatrix} 0 & 1 \\ -1 - 3(0)^2 & 0 \end{bmatrix} = \begin{bmatrix} 0 & 1 \\ -1 & 0 \end{bmatrix}
$$

(c) Classification of $(0,0)$ based on the linearized system:
Characteristic equation: $(0-\lambda)(0-\lambda) - (1)(-1) = 0 \implies \lambda^2 + 1 = 0$.
Eigenvalues: $\lambda = \pm j$. These are purely imaginary.
The linearized system has a **center** at the origin, indicating neutral stability for the linearized system.

For the original nonlinear system, the linearization suggests that the origin *might* be a center. However, it's crucial to remember that linearization only describes the behavior *near* the equilibrium point. When the eigenvalues are purely imaginary, higher-order terms can significantly alter the behavior. In this specific case (related to the Duffing oscillator), the origin $(0,0)$ for the nonlinear system is indeed a **center**, meaning trajectories are closed orbits around the origin, and the system is neutrally stable (not asymptotically stable).

---

This concludes Module 1, Topic: Phase Plane Analysis. Understanding these fundamental concepts is crucial for analyzing and controlling nonlinear systems.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=33vbFFFn04k) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=Q-tL8_628gE) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=APPIZ2S8YmY) |
