---
title: "Nonlinear Control Design:"
subject: "NONLINEAR CONTROL SYSTEMS"
module: "Module 4: Nonlinear Control Design:"
branch: "Electrical and Electronics Engineering"
semester: 7
topicId: "68a200872b85456187f369b0"
status: "completed"
scrapedAt: "2026-05-23T16:38:32.405Z"
---
# Module 4: Nonlinear Control Design

## Introduction to Nonlinear Control Design

This module delves into the design of controllers for nonlinear systems, building upon the analysis techniques learned in previous modules. We will explore various methodologies that address the unique challenges posed by nonlinearities, such as nonlinearity cancellation, feedback linearization, and sliding mode control. The aim is to equip students with the ability to design controllers that achieve desired performance objectives like stability, regulation, and tracking for a wide range of nonlinear systems.

**Relevant Course Outcomes:**
*   **CO4: Design feedback controller for nonlinear systems.** (Knowledge Level: K3)
*   **CO1: Analyse the qualitative behaviour of nonlinear systems about their equilibrium points.** (Knowledge Level: K3)
*   **CO2: Analyse the stability of nonlinear systems.** (Knowledge Level: K3)

**Textbook References:**
*   Khalil, Hassan K. *Nonlinear Systems*. Prentice-Hall International (UK), 2002. (Chapters on Control Design, Feedback Linearization, Sliding Mode Control)
*   Slotine, Jean-Jacques E., and Weiping Li. *Applied Nonlinear Control*. Prentice-Hall, NJ, 1991. (Chapters on Feedback Linearization, Sliding Mode Control)

**Reference Book References:**
*   Isidori, Alberto. *Nonlinear Control Systems: An Introduction*. Springer-Verlag, 1985. (Chapters on Feedback Linearization, Sliding Mode Control)
*   Vidyasagar, M. *Nonlinear System Analysis, Stability and Control*. Prentice-Hall, India, 1991. (Chapters on Feedback Control of Nonlinear Systems)

---

## 1. Feedback Linearization

Feedback linearization is a powerful technique that transforms a nonlinear system into an equivalent linear system through the use of a nonlinear state feedback control law and a (possibly nonlinear) change of coordinates. This allows us to apply the well-established tools of linear control theory to design controllers for the linearized system.

### 1.1 Concept of Feedback Linearization

The core idea is to find a control law $u = \alpha(x) + \beta(x)v$, where $v$ is the new input, such that the closed-loop system becomes linear in $v$. This is achieved by exploiting the structure of the nonlinear system, often by differentiating the output until the control input appears.

**Key Concept:** **Relative Degree**

The relative degree of an output $y = h(x)$ of a system $\dot{x} = f(x) + g(x)u$ is the smallest integer $r$ such that the $r$-th derivative of $y$ depends on $u$. Mathematically, this means:

$y^{(r)}(x) = L_f^r h(x) + L_g L_f^{r-1} h(x) u$

where $L_f$ and $L_g$ are Lie derivatives. The relative degree is $r$ if $L_g L_f^{i} h(x) = 0$ for $i = 0, 1, \dots, r-2$ and $L_g L_f^{r-1} h(x) \neq 0$.

**Types of Feedback Linearization:**

*   **Input-Output Linearization:** Aims to linearize the input-output relationship of the system.
*   **Full State Linearization:** Aims to linearize the entire system dynamics, transforming it into a linear system in a new set of state variables.

### 1.2 Input-Output Linearization

For a system with a single input $u$ and a single output $y = h(x)$, consider the nonlinear system:

$\dot{x} = f(x) + g(x)u$
$y = h(x)$

where $x \in \mathbb{R}^n$, $f(x)$ and $g(x)$ are smooth vector fields, and $h(x)$ is a smooth scalar function.

If the relative degree $r$ of the output $y$ exists and is equal to $n$ (the order of the system), then we can achieve input-output linearization. The $n$-th derivative of the output is given by:

$y^{(n)} = L_f^n h(x) + L_g L_f^{n-1} h(x) u$

To make this resemble a linear system of the form $y^{(n)} = v$, we set:

$L_f^n h(x) + L_g L_f^{n-1} h(x) u = v$

This implies the feedback control law:

$u = -\frac{L_f^n h(x) - v}{L_g L_f^{n-1} h(x)}$

**Important Considerations for Input-Output Linearization:**

*   **Relative Degree:** The relative degree must be constant and equal to the system order $n$.
*   **Non-triviality:** $L_g L_f^{n-1} h(x) \neq 0$ to ensure the control law is well-defined.
*   **Minimum Phase:** The internal dynamics (the dynamics of the unobservable part of the system) must be stable.

**Example (Khalil, Chapter 6):**

Consider the system:
$\dot{x}_1 = x_2$
$\dot{x}_2 = -x_1^3 + u$
$y = x_1$

Here, $f(x) = \begin{bmatrix} x_2 \\ -x_1^3 \end{bmatrix}$, $g(x) = \begin{bmatrix} 0 \\ 1 \end{bmatrix}$, $h(x) = x_1$.

1.  Calculate derivatives of $y$:
    $y = x_1$
    $\dot{y} = x_2$
    $\ddot{y} = -x_1^3 + u$

2.  The relative degree is $r = 2$, which is equal to the system order ($n=2$).
3.  $L_g L_f^{r-1} h(x) = L_g L_f^1 h(x) = L_g(x_2) = g(x_1, x_2)^T \frac{\partial x_2}{\partial x} = \begin{bmatrix} 0 & 1 \end{bmatrix} \begin{bmatrix} 0 \\ 1 \end{bmatrix} = 1 \neq 0$.

4.  To linearize the input-output behavior to $y^{(2)} = v$, we set:
    $-x_1^3 + u = v$
    $u = v + x_1^3$

The closed-loop system is:
$\dot{x}_1 = x_2$
$\dot{x}_2 = -x_1^3 + (v + x_1^3) = v$

Thus, $y^{(2)} = v$, which is a linear system.

### 1.3 Full State Linearization

Full state linearization transforms the entire system into a linear system. This requires a change of coordinates $z = T(x)$ such that in the new coordinates, the system is linear:

$\dot{z} = Az + Bv$

**Conditions for Full State Linearization:**

For a system with relative degree $r_i$ for each output $y_i$, where $\sum_{i=1}^m r_i = n$, and assuming no drift terms, full state linearization is possible. For a single-output system with relative degree $n$, the transformation involves the output and its derivatives:

$z_1 = y = h(x)$
$z_2 = \dot{y} = L_f h(x)$
...
$z_n = y^{(n-1)} = L_f^{n-1} h(x)$

The transformed system is:
$\dot{z}_1 = z_2$
$\dot{z}_2 = z_3$
...
$\dot{z}_{n-1} = z_n$
$\dot{z}_n = L_f^n h(x) + L_g L_f^{n-1} h(x) u$

With the control law $u = -\frac{L_f^n h(x) - v}{L_g L_f^{n-1} h(x)}$, the $\dot{z}_n$ equation becomes $\dot{z}_n = v$.
This results in the linear system in canonical form:
$\dot{z} = \begin{bmatrix} 0 & 1 & 0 & \dots & 0 \\ 0 & 0 & 1 & \dots & 0 \\ \vdots & \vdots & \vdots & \ddots & \vdots \\ 0 & 0 & 0 & \dots & 1 \\ 0 & 0 & 0 & \dots & 0 \end{bmatrix} z + \begin{bmatrix} 0 \\ 0 \\ \vdots \\ 0 \\ 1 \end{bmatrix} v$

This is the Brunovsky canonical form for a controllable linear system.

**Example (Slotine & Li, Chapter 3):**

Consider the rigid-rotor system:
$\dot{\theta} = \omega$
$J\dot{\omega} = -k\sin(\theta) + u$
$y = \theta$

Here, $x = \begin{bmatrix} \theta \\ \omega \end{bmatrix}$, $f(x) = \begin{bmatrix} \omega \\ -\frac{k}{J}\sin(\theta) \end{bmatrix}$, $g(x) = \begin{bmatrix} 0 \\ \frac{1}{J} \end{bmatrix}$, $h(x) = \theta$.

1.  Calculate derivatives of $y$:
    $y = \theta$
    $\dot{y} = \omega$
    $\ddot{y} = -\frac{k}{J}\sin(\theta) + \frac{1}{J}u$

2.  Relative degree $r = 2$, which is the system order $n=2$.
3.  $L_g L_f^{r-1} h(x) = L_g L_f^1 h(x) = \frac{1}{J} \neq 0$.

4.  To achieve $\ddot{y} = v$:
    $-\frac{k}{J}\sin(\theta) + \frac{1}{J}u = v$
    $u = Jv + k\sin(\theta)$

The transformed state vector is $z = \begin{bmatrix} y \\ \dot{y} \end{bmatrix} = \begin{bmatrix} \theta \\ \omega \end{bmatrix}$.
The linearized system is:
$\dot{z}_1 = z_2$
$\dot{z}_2 = v$

This matches the Brunovsky canonical form.

### 1.4 Design of Feedback Linearizing Controllers

Once the system is linearized, standard linear control design techniques can be applied to the equivalent linear system. For example, pole placement can be used to define the desired closed-loop dynamics for the linearized system $\dot{z} = Az + Bv$.

If we want the linear system to have a characteristic polynomial $(s + p_1)(s + p_2)\dots(s + p_n) = s^n + c_{n-1}s^{n-1} + \dots + c_0$, then $v$ can be expressed as:

$v = -c_{n-1}z_n - c_{n-2}z_{n-1} - \dots - c_0 z_1$
$v = -c_{n-1}y^{(n-1)} - c_{n-2}y^{(n-2)} - \dots - c_0 y$

Substituting the expressions for $z_i$ in terms of $y$ and its derivatives, and then substituting the feedback linearization control law for $u$, we obtain the nonlinear controller.

**Example (Continuation of Rigid-Rotor):**

We have $\dot{z}_1 = z_2$, $\dot{z}_2 = v$. Let's place the poles at $-p_1$ and $-p_2$. The desired characteristic polynomial is $(s+p_1)(s+p_2) = s^2 + (p_1+p_2)s + p_1p_2$.
So, we choose $v = -(p_1+p_2)z_2 - p_1p_2 z_1 = -(p_1+p_2)\dot{y} - p_1p_2 y$.

The feedback linearization control law was $u = Jv + k\sin(\theta)$.
Substituting $v$:
$u = J(-(p_1+p_2)\dot{y} - p_1p_2 y) + k\sin(\theta)$
Since $y = \theta$ and $\dot{y} = \omega$:
$u = -J(p_1+p_2)\omega - Jp_1p_2 \theta + k\sin(\theta)$

This is a nonlinear feedback controller.

### 1.5 Limitations of Feedback Linearization

*   **Relative Degree:** The relative degree must be constant and equal to the system order. If it varies or is less than the system order, input-output linearization is not directly possible.
*   **Minimum Phase:** The internal dynamics must be stable for the overall system to be stable. If the internal dynamics are unstable, stabilization of these dynamics needs to be considered, which can be complex.
*   **State Availability:** Requires full state information or a state observer.
*   **Nonlinearities in $\beta(x)$:** If $\beta(x)$ is identically zero in some region, control is lost.
*   **Complexity:** The control law can be complex and might require precise knowledge of system parameters.

**Highlight to Remember:** Feedback linearization transforms nonlinear systems into linear ones by canceling out nonlinearities, allowing the use of linear control techniques. The relative degree is a crucial concept for its applicability.

---

## 2. Sliding Mode Control (SMC)

Sliding Mode Control (SMC) is a robust nonlinear control strategy that forces the system's state trajectory onto a user-defined switching surface in the state space and maintains it there. Once on the surface, the system exhibits a "sliding mode" behavior, which is insensitive to matched uncertainties and disturbances.

### 2.1 Concept of Sliding Mode Control

The core idea of SMC is to design a discontinuous control law that switches based on the state of the system relative to a predefined sliding surface.

**Key Concepts:**

*   **Sliding Surface (or Manifold) $S(x)$:** A surface in the state space defined by $S(x) = 0$. The goal is to drive the system's state trajectory onto this surface and keep it there.
*   **Sliding Mode:** The behavior of the system when its state trajectory is confined to the sliding surface $S(x) = 0$.
*   **Discontinuous Control Law:** The control signal typically involves a sign function (or other discontinuous terms) that switches the control action based on the sign of $S(x)$.

**System Representation for SMC:**

Consider a controllable nonlinear system in the form:

$\dot{x} = f(x) + g(x)u$

where $x \in \mathbb{R}^n$, $f(x)$ and $g(x)$ are smooth vector fields, and $u \in \mathbb{R}^m$. For simplicity, we often consider the single-input case ($m=1$).

**Reachability:**

The first step in SMC design is to ensure that the sliding surface is reachable from any initial state. This means that the control law should be able to drive the system towards the surface $S(x) = 0$.

**Stability on the Sliding Surface:**

Once the system reaches the surface, it must remain there. This requires the control law to ensure that the time derivative of the sliding surface function $S(x)$ has a negative definite sign, at least when considered in a sliding mode. A common condition for stability on the sliding surface is $\dot{S}(x) = L_f S(x) + L_g S(x) u < 0$ for $S(x) > 0$ and $\dot{S}(x) > 0$ for $S(x) < 0$.

### 2.2 Design of Sliding Surfaces

The choice of the sliding surface is critical as it determines the desired closed-loop behavior of the system when it is in the sliding mode.

**For Input-Output Linearization:**
If we have a system with relative degree $r=n$, we can design a sliding surface based on the desired linear behavior of the $n$-th derivative of the output. For example, if we want $y^{(n)} = -k_{n-1}y^{(n-1)} - \dots - k_0 y + v$, where $v$ is a new, potentially simpler, input (e.g., $v=0$ for regulation), we can define a sliding surface that corresponds to this desired behavior.

Consider the error $e = y_{ref} - y$. For tracking, we want to drive $e$ and its derivatives to zero. A common sliding surface for tracking is a generalization of the linear case:

$S(e, \dot{e}, \dots, e^{(n-1)}) = c_{n-1}e + c_{n-2}\dot{e} + \dots + e^{(n-1)} = 0$

where $y_{ref}$ is the reference signal and $y$ is the system output.
If the relative degree is $n$, then $e^{(n)} = y_{ref}^{(n)} - y^{(n)}$.
We want to achieve $e^{(n)} = 0$ by choosing $u$.
The SMC controller aims to drive $S(e, \dot{e}, \dots, e^{(n-1)}) = 0$.

**For State Regulation:**
If we want to regulate the state vector $x$ to a desired equilibrium $x_d$, we can define an error vector $e = x - x_d$. Then we can design a sliding surface based on these errors. A simple linear sliding surface is:

$S(x) = s^T e = s^T (x - x_d) = 0$

where $s$ is a constant vector chosen to achieve desired dynamics. The derivative of $S(x)$ is $\dot{S}(x) = s^T \dot{x} = s^T (f(x) + g(x)u)$.

### 2.3 Sliding Mode Control Law

A common SMC control law to ensure stability and reachability to $S(x) = 0$ is of the form:

$u = u_{eq} + u_{sw}$

where:
*   $u_{eq}$ is the equivalent control that keeps the system on the surface $S(x) = 0$ in the absence of switching. It is obtained by setting $\dot{S}(x) = 0$ and solving for $u$.
    $L_f S(x) + L_g S(x) u_{eq} = 0 \implies u_{eq} = -\frac{L_f S(x)}{L_g S(x)}$
*   $u_{sw}$ is the switching control that drives the state to the surface. A common choice is a proportional-plus-sign control:
    $u_{sw} = -k \cdot \text{sgn}(S(x))$
    where $k > 0$ and $\text{sgn}(S(x))$ is the sign function (e.g., $\text{sgn}(S) = 1$ if $S>0$, $-1$ if $S<0$, and can be defined to be 0 at $S=0$).

The full control law becomes:
$u = -\frac{L_f S(x)}{L_g S(x)} - k \cdot \text{sgn}(S(x))$

**Robustness:**
This control law ensures that $\dot{S}(x) = L_f S(x) + L_g S(x) (-\frac{L_f S(x)}{L_g S(x)} - k \cdot \text{sgn}(S(x))) = -k L_g S(x) \text{sgn}(S(x))$.
If $L_g S(x) > 0$, then $\dot{S}(x) = -k L_g S(x) \text{sgn}(S(x))$. If $S(x) > 0$, $\text{sgn}(S(x))=1$, $\dot{S}(x) < 0$. If $S(x) < 0$, $\text{sgn}(S(x))=-1$, $\dot{S}(x) = -k L_g S(x) (-1) > 0$.
In both cases, $S(x)\dot{S}(x) < 0$, which guarantees convergence to the sliding surface. The term $k$ needs to be chosen large enough to overcome uncertainties and disturbances.

**Chattering:**
A major drawback of this discontinuous control is **chattering**, which is the rapid switching of the control signal. This can excite unmodeled dynamics, wear out actuators, and is undesirable in practice.

**Mitigation of Chattering:**
*   **Boundary Layer Control:** Replace the sign function with a saturation function within a boundary layer around the sliding surface. For $|S(x)| \le \epsilon$, use $u_{sw} = -k \frac{S(x)}{\epsilon}$. This makes the control continuous and reduces chattering, but introduces some sensitivity to uncertainties outside the boundary layer.
*   **Higher-Order Sliding Modes:** More advanced techniques to achieve sliding modes with continuous control signals.

**Example (Slotine & Li, Chapter 5):**

Consider a system with uncertainty:
$\dot{x}_1 = x_2$
$\dot{x}_2 = -a x_1 + b u + d(x_1, x_2)$
where $a > 0$ and $d(x_1, x_2)$ is an unknown bounded disturbance, $|d(x_1, x_2)| \le D$.
We want to regulate $x_1$ and $x_2$ to zero.

1.  **Choose a Sliding Surface:** Let's aim for a linear sliding surface. A common choice for second-order systems is $S(x) = c x_1 + x_2$, with $c > 0$. We want $S(x) = 0$.

2.  **Calculate $\dot{S}(x)$:**
    $\dot{S}(x) = c \dot{x}_1 + \dot{x}_2 = c x_2 + (-a x_1 + b u + d(x_1, x_2))$
    $\dot{S}(x) = -a x_1 + c x_2 + b u + d(x_1, x_2)$

3.  **Design Control Law:**
    We want $\dot{S}(x)$ to be negative definite for $S(x) > 0$ and positive definite for $S(x) < 0$.
    Set $\dot{S}(x) = -\eta \cdot \text{sgn}(S(x))$, where $\eta > 0$.
    $-a x_1 + c x_2 + b u + d(x_1, x_2) = -\eta \cdot \text{sgn}(S(x))$
    $b u = a x_1 - c x_2 - d(x_1, x_2) - \eta \cdot \text{sgn}(S(x))$
    $u = \frac{1}{b} (a x_1 - c x_2 - d(x_1, x_2) - \eta \cdot \text{sgn}(S(x)))$

    Since $d(x_1, x_2)$ is unknown, we need to bound it. The control law requires an estimate of the bounds of terms contributing to $\dot{S}(x)$.
    Let's rewrite the equation as:
    $\dot{S}(x) = (\text{nominal part}) + (\text{uncertainty part})$
    $\dot{S}(x) = (-a x_1 + c x_2 + b u) + d(x_1, x_2)$

    We choose the control $u$ to cancel the nominal part and provide the switching term.
    To ensure $S(x)\dot{S}(x) < 0$, we want:
    $S(x) [-a x_1 + c x_2 + b u + d(x_1, x_2)] < 0$

    Let's choose the control law as:
    $u = u_{eq} + u_{sw}$
    where $u_{eq}$ aims to make the nominal part zero, and $u_{sw}$ handles the uncertainty.
    The equivalent control (assuming $d=0$) would be:
    $-a x_1 + c x_2 + b u_{eq} = 0 \implies u_{eq} = \frac{a x_1 - c x_2}{b}$

    Now, consider the uncertainty $d(x_1, x_2)$.
    $\dot{S}(x) = -a x_1 + c x_2 + b (u_{eq} + u_{sw}) + d(x_1, x_2)$
    $\dot{S}(x) = -a x_1 + c x_2 + b (\frac{a x_1 - c x_2}{b} + u_{sw}) + d(x_1, x_2)$
    $\dot{S}(x) = -a x_1 + c x_2 + a x_1 - c x_2 + b u_{sw} + d(x_1, x_2)$
    $\dot{S}(x) = b u_{sw} + d(x_1, x_2)$

    We want $S(x) (b u_{sw} + d(x_1, x_2)) < 0$.
    Choose $u_{sw} = -k \cdot \text{sgn}(S(x))$.
    $S(x) (b (-k \cdot \text{sgn}(S(x))) + d(x_1, x_2)) < 0$
    $S(x) (-b k \cdot \text{sgn}(S(x)) + d(x_1, x_2)) < 0$

    If $S(x) > 0$, we need $-b k + d(x_1, x_2) < 0$, so $d(x_1, x_2) < b k$.
    If $S(x) < 0$, we need $b k + d(x_1, x_2) > 0$, so $d(x_1, x_2) > -b k$.
    These conditions mean we need $b k > |d(x_1, x_2)|$. Thus, we choose $k > \frac{D}{|b|}$.

    The control law is:
    $u = \frac{a x_1 - c x_2}{b} - \frac{D + \rho}{|b|} \text{sgn}(S(x))$
    where $\rho > 0$ is a margin to ensure robustness and $D$ is an upper bound on $|d(x_1, x_2)|$.

**Highlight to Remember:** SMC offers robustness to matched uncertainties by forcing the system onto a sliding surface. The discontinuous control law leads to chattering, which can be mitigated by using a boundary layer.

---

## 3. Backstepping

Backstepping is a recursive method for designing Lyapunov functions and stabilizing controllers for nonlinear systems, particularly those in a specific "strict-feedback" form. It starts by stabilizing the outermost subsystem and then uses the designed control to transform the remaining system into a new one that can be stabilized by stabilizing its outermost subsystem.

### 3.1 Concept of Backstepping

Consider a system in a standard $n$-dimensional strict-feedback form:

$\dot{x}_1 = f_1(x_1) + g_1(x_1)x_2$
$\dot{x}_2 = f_2(x_1, x_2) + g_2(x_1, x_2)x_3$
...
$\dot{x}_{n-1} = f_{n-1}(x_1, \dots, x_{n-1}) + g_{n-1}(x_1, \dots, x_{n-1})x_n$
$\dot{x}_n = f_n(x_1, \dots, x_n) + g_n(x_1, \dots, x_n)u$

where $x_i$ are states, $f_i$ and $g_i$ are known smooth functions, and $g_i > 0$. The goal is to stabilize the system at the origin ($x_1=\dots=x_n=0$).

**The Backstepping Procedure:**

The procedure is inductive. Assume we have stabilized the first $k$ states ($x_1, \dots, x_k$) using a control signal $\alpha_k$ for $x_{k+1}$.

**Step 1: Stabilize $x_1$**

*   **Subsystem:** $\dot{x}_1 = f_1(x_1) + g_1(x_1)x_2$
*   **Goal:** Stabilize $x_1$ to 0.
*   **Virtual Control:** Define a virtual control $\alpha_1(x_1)$ for $x_2$. If $x_2 = \alpha_1(x_1)$, the first subsystem becomes $\dot{x}_1 = f_1(x_1) + g_1(x_1)\alpha_1(x_1)$. We want this to be stable.
*   **Lyapunov Function:** Choose a Lyapunov function $V_1(x_1)$ for the first subsystem such that $V_1(0) = 0$ and $V_1(x_1) > 0$ for $x_1 \neq 0$. Then $\dot{V}_1(x_1) = \frac{\partial V_1}{\partial x_1} \dot{x}_1 = \frac{\partial V_1}{\partial x_1} [f_1(x_1) + g_1(x_1)x_2]$.
*   **Design $\alpha_1(x_1)$:** We want to make $\dot{V}_1(x_1)$ negative. Let's aim for $\dot{V}_1(x_1) = -c_1 V_1(x_1)$ for some $c_1 > 0$.
    $\frac{\partial V_1}{\partial x_1} [f_1(x_1) + g_1(x_1)x_2] = -c_1 V_1(x_1)$
    $\frac{\partial V_1}{\partial x_1} g_1(x_1) x_2 = -c_1 V_1(x_1) - \frac{\partial V_1}{\partial x_1} f_1(x_1)$
    $x_2 = -\frac{c_1 V_1(x_1) + \frac{\partial V_1}{\partial x_1} f_1(x_1)}{\frac{\partial V_1}{\partial x_1} g_1(x_1)}$
    So, the virtual control is $\alpha_1(x_1) = -\frac{c_1 V_1(x_1) + \frac{\partial V_1}{\partial x_1} f_1(x_1)}{\frac{\partial V_1}{\partial x_1} g_1(x_1)}$.
*   **Define New State:** Let $z_2 = x_2 - \alpha_1(x_1)$. Then $x_2 = z_2 + \alpha_1(x_1)$.
    The $\dot{V}_1$ becomes:
    $\dot{V}_1(x_1) = \frac{\partial V_1}{\partial x_1} [f_1(x_1) + g_1(x_1)(z_2 + \alpha_1(x_1))] = \frac{\partial V_1}{\partial x_1} f_1(x_1) + \frac{\partial V_1}{\partial x_1} g_1(x_1) \alpha_1(x_1) + \frac{\partial V_1}{\partial x_1} g_1(x_1) z_2$
    $\dot{V}_1(x_1) = -c_1 V_1(x_1) + \frac{\partial V_1}{\partial x_1} g_1(x_1) z_2$.
    This shows that if $z_2=0$ (i.e., $x_2 = \alpha_1(x_1)$), $V_1$ decreases exponentially.

**Step k: Stabilize $x_1, \dots, x_k$**

*   **Current System:** We have a Lyapunov function $V_k(x_1, \dots, x_k)$ for the first $k$ states, with $\dot{V}_k = -c_k V_k + \frac{\partial V_k}{\partial x_k} g_k(x_1, \dots, x_k) z_{k+1}$.
    Here, $z_{k+1} = x_{k+1} - \alpha_k(x_1, \dots, x_k)$, where $\alpha_k$ is the virtual control designed in the previous step.
*   **Subsystem:** $\dot{x}_{k+1} = f_{k+1}(x_1, \dots, x_{k+1}) + g_{k+1}(x_1, \dots, x_{k+1})x_{k+2}$
*   **Lyapunov Function for the new system:** $V_{k+1}(x_1, \dots, x_{k+1}) = V_k(x_1, \dots, x_k) + \frac{1}{2} z_{k+1}^2$.
*   **$\dot{V}_{k+1}$:** $\dot{V}_{k+1} = \dot{V}_k + z_{k+1} \dot{z}_{k+1}$.
    $\dot{z}_{k+1} = \dot{x}_{k+1} - \dot{\alpha}_k = f_{k+1}(x_1, \dots, x_{k+1}) + g_{k+1}(x_1, \dots, x_{k+1})x_{k+2} - \dot{\alpha}_k$.
    We need to find $\alpha_{k+1}$ for $x_{k+2}$ to make $\dot{V}_{k+1}$ negative.
    Substitute $x_{k+2} = z_{k+2} + \alpha_{k+1}$:
    $\dot{V}_{k+1} = -c_k V_k + \frac{\partial V_k}{\partial x_k} g_k z_{k+1} + z_{k+1} [f_{k+1} + g_{k+1}(z_{k+2} + \alpha_{k+1}) - \dot{\alpha}_k]$
    $\dot{V}_{k+1} = -c_k V_k + z_{k+1} \frac{\partial V_k}{\partial x_k} g_k + z_{k+1} (f_{k+1} - \dot{\alpha}_k) + z_{k+1} g_{k+1} z_{k+2} + z_{k+1} g_{k+1} \alpha_{k+1}$

    We want $\dot{V}_{k+1} = -c_{k+1} V_{k+1} = -c_{k+1}(V_k + \frac{1}{2} z_{k+1}^2)$.
    This leads to designing $\alpha_{k+1}$ as:
    $\alpha_{k+1} = -\frac{c_{k+1}z_{k+1} + (\frac{\partial V_k}{\partial x_k} g_k + f_{k+1} - \dot{\alpha}_k)}{g_{k+1}}$

**Final Step (Step $n$): Stabilize $x_n$**

*   The last control signal $u$ is designed using the same procedure.
    $\alpha_n = -\frac{c_n z_n + (\frac{\partial V_{n-1}}{\partial x_{n-1}} g_{n-1} + f_n - \dot{\alpha}_{n-1})}{g_n}$
    This $\alpha_n$ is the actual control input $u$.

**Example (Khalil, Chapter 7):**

Consider the system:
$\dot{x}_1 = -x_1 + x_1^2 + x_2$
$\dot{x}_2 = -x_2 + u$

1.  **Step 1: Stabilize $x_1$.**
    *   Subsystem: $\dot{x}_1 = -x_1 + x_1^2 + x_2$.
    *   Lyapunov function: $V_1(x_1) = \frac{1}{2}x_1^2$.
    *   $\dot{V}_1(x_1) = x_1 \dot{x}_1 = x_1 (-x_1 + x_1^2 + x_2) = -x_1^2 + x_1^3 + x_1 x_2$.
    *   Desired $\dot{V}_1 = -c_1 V_1 = -c_1 \frac{1}{2}x_1^2$.
    *   We need $-x_1^2 + x_1^3 + x_1 x_2 = -c_1 \frac{1}{2}x_1^2$.
    *   $x_1 x_2 = -x_1^2 + \frac{1}{2}x_1^2 - c_1 \frac{1}{2}x_1^2 = -\frac{1}{2}x_1^2 - c_1 \frac{1}{2}x_1^2 = -(1 + \frac{c_1}{2})x_1^2$.
    *   Virtual control $\alpha_1(x_1)$: If $x_1 \neq 0$, $x_2 = -(1 + \frac{c_1}{2})x_1$.
        So, $\alpha_1(x_1) = -(1 + \frac{c_1}{2})x_1$.
    *   New state: $z_2 = x_2 - \alpha_1(x_1) = x_2 + (1 + \frac{c_1}{2})x_1$.

2.  **Step 2: Stabilize $x_1, x_2$.**
    *   System in terms of $z_2$: $\dot{x}_1 = -x_1 + x_1^2 + z_2 + \alpha_1(x_1)$.
    *   We designed $\alpha_1$ such that if $z_2=0$, then $\dot{x}_1 = -c_1 \frac{1}{2}x_1$. This means the first term in $\dot{V}_1$ is $-c_1 V_1$.
    *   $\dot{V}_1(x_1) = -c_1 V_1(x_1) + x_1 x_2 = -c_1 \frac{1}{2}x_1^2 + x_1 (z_2 + \alpha_1(x_1))$.
    *   $\dot{V}_1(x_1) = -c_1 \frac{1}{2}x_1^2 + x_1 (z_2 - (1 + \frac{c_1}{2})x_1) = -c_1 \frac{1}{2}x_1^2 + x_1 z_2 - (1 + \frac{c_1}{2})x_1^2$.
    *   $\dot{V}_1(x_1) = -(\frac{c_1}{2} + 1 + \frac{c_1}{2})x_1^2 + x_1 z_2 = -(c_1+1)x_1^2 + x_1 z_2$.
    *   Lyapunov function for the whole system: $V_2(x_1, x_2) = V_1(x_1) + \frac{1}{2}z_2^2 = \frac{1}{2}x_1^2 + \frac{1}{2}z_2^2$.
    *   $\dot{V}_2 = \dot{V}_1 + z_2 \dot{z}_2$.
    *   $\dot{x}_2 = -x_2 + u$. $\dot{z}_2 = \dot{x}_2 - \dot{\alpha}_1 = (-x_2 + u) - \frac{d\alpha_1}{dx_1}\dot{x}_1$.
    *   $\dot{\alpha}_1 = \frac{d}{dx_1} [-(1 + \frac{c_1}{2})x_1] \dot{x}_1 = -(1 + \frac{c_1}{2})(-x_1 + x_1^2 + x_2)$.
    *   $\dot{z}_2 = (-z_2 - (1 + \frac{c_1}{2})x_1 + u) + (1 + \frac{c_1}{2})(-x_1 + x_1^2 + x_2)$.
    *   We want $\dot{V}_2 = -c_2 V_2 = -c_2(\frac{1}{2}x_1^2 + \frac{1}{2}z_2^2)$.
    *   $\dot{V}_2 = -(c_1+1)x_1^2 + x_1 z_2 + z_2 \dot{z}_2$.
    *   We need $z_2 \dot{z}_2$ to cancel the $x_1 z_2$ term and contribute to the negative quadratic form.
    *   Let's set the desired behavior for $z_2$: $\dot{z}_2 = -c_2 z_2 - (c_1+1)x_1$. (This is inspired by the $k=1$ step where we aimed for $\dot{V}_1 = -c_1 V_1 + (\dots)z_2$).
    *   So, $-x_2 + u - \dot{\alpha}_1 = -c_2 z_2 - (c_1+1)x_1$.
    *   $u = x_2 - \dot{\alpha}_1 - c_2 z_2 - (c_1+1)x_1$.
    *   Substitute $x_2 = z_2 + \alpha_1(x_1)$:
    *   $u = (z_2 + \alpha_1(x_1)) - \dot{\alpha}_1 - c_2 z_2 - (c_1+1)x_1$.
    *   $u = -(c_1+1)x_1 + (1-c_2)z_2 + \alpha_1(x_1) - \dot{\alpha}_1$.
    *   Substitute $\alpha_1(x_1) = -(1 + \frac{c_1}{2})x_1$ and $\dot{\alpha}_1 = -(1 + \frac{c_1}{2})(-x_1 + x_1^2 + x_2)$:
    *   $u = -(c_1+1)x_1 + (1-c_2)z_2 - (1 + \frac{c_1}{2})x_1 + (1 + \frac{c_1}{2})(-x_1 + x_1^2 + x_2)$.
    *   $u = -(c_1+1 + 1 + \frac{c_1}{2})x_1 + (1-c_2)z_2 + (1 + \frac{c_1}{2})(-x_1 + x_1^2 + z_2 + \alpha_1(x_1))$.
    *   $u = -(2 + \frac{3}{2}c_1)x_1 + (1-c_2)z_2 - (1 + \frac{c_1}{2})x_1 + (1 + \frac{c_1}{2})(-x_1 + x_1^2 - (1 + \frac{c_1}{2})x_1)$.
    *   $u = -(2 + \frac{3}{2}c_1 + 1 + \frac{c_1}{2})x_1 + (1-c_2)z_2 + (1 + \frac{c_1}{2})(-x_1 + x_1^2 - (1 + \frac{c_1}{2})x_1)$.
    *   $u = -(3 + 2c_1)x_1 + (1-c_2)z_2 + (\dots)$. This is getting complicated with the calculation of $\dot{\alpha}_1$.

    A more direct way to obtain the final control law for step $n$:
    The $n$-th subsystem is $\dot{x}_n = f_n(x_1, \dots, x_n) + g_n(x_1, \dots, x_n)u$.
    The Lyapunov function for the previous $n-1$ states is $V_{n-1}$.
    $\dot{V}_{n-1} = -c_{n-1}V_{n-1} + \frac{\partial V_{n-1}}{\partial x_{n-1}} g_{n-1} z_n$.
    The new Lyapunov function is $V_n = V_{n-1} + \frac{1}{2}z_n^2$.
    $\dot{V}_n = \dot{V}_{n-1} + z_n \dot{z}_n$.
    $\dot{z}_n = \dot{x}_n - \dot{\alpha}_{n-1} = f_n + g_n u - \dot{\alpha}_{n-1}$.
    We want $\dot{V}_n = -c_n V_n = -c_n (V_{n-1} + \frac{1}{2}z_n^2)$.
    $\dot{V}_n = -c_{n-1}V_{n-1} + \frac{\partial V_{n-1}}{\partial x_{n-1}} g_{n-1} z_n + z_n (f_n + g_n u - \dot{\alpha}_{n-1})$.
    We need $z_n (-c_n z_n - c_{n-1}\frac{V_{n-1}}{z_n} + \frac{\partial V_{n-1}}{\partial x_{n-1}} g_{n-1} + f_n + g_n u - \dot{\alpha}_{n-1}) = 0$.

    The desired $\dot{V}_n$ implies:
    $z_n \dot{z}_n = -c_n z_n^2/2 - c_{n-1} V_{n-1} - z_n \frac{\partial V_{n-1}}{\partial x_{n-1}} g_{n-1}$.
    $z_n (f_n + g_n u - \dot{\alpha}_{n-1}) = -c_n z_n^2/2 - c_{n-1} V_{n-1} - z_n \frac{\partial V_{n-1}}{\partial x_{n-1}} g_{n-1}$.
    $g_n u = -f_n + \dot{\alpha}_{n-1} - \frac{c_n}{2} z_n - \frac{c_{n-1} V_{n-1}}{z_n} - \frac{\partial V_{n-1}}{\partial x_{n-1}} g_{n-1}$.

    This is the general form. The actual calculation of $\dot{\alpha}$ terms can be tedious.

    For the example:
    $V_1 = \frac{1}{2}x_1^2$, $\alpha_1 = -(1 + c_1/2)x_1$. $\dot{\alpha}_1 = -(1+c_1/2)\dot{x}_1 = -(1+c_1/2)(-x_1+x_1^2+x_2)$.
    $z_2 = x_2 - \alpha_1 = x_2 + (1+c_1/2)x_1$.
    $\dot{V}_1 = -(c_1+1)x_1^2 + x_1 z_2$.
    $\dot{x}_2 = -x_2 + u$.
    $V_2 = V_1 + \frac{1}{2}z_2^2$.
    $\dot{V}_2 = \dot{V}_1 + z_2\dot{z}_2 = -(c_1+1)x_1^2 + x_1 z_2 + z_2(\dot{x}_2 - \dot{\alpha}_1)$.
    $\dot{V}_2 = -(c_1+1)x_1^2 + x_1 z_2 + z_2(-x_2+u - \dot{\alpha}_1)$.
    We want $\dot{V}_2 = -c_2 V_2 = -c_2(\frac{1}{2}x_1^2 + \frac{1}{2}z_2^2)$.
    $= -\frac{c_2}{2}x_1^2 - \frac{c_2}{2}z_2^2$.

    We need $z_2(-x_2+u - \dot{\alpha}_1) = -c_2\frac{1}{2}z_2^2 - (c_1+1)x_1^2 - x_1 z_2$.
    $z_2(-z_2-\alpha_1+u - \dot{\alpha}_1) = -c_2\frac{1}{2}z_2^2 - (c_1+1)x_1^2 - x_1 z_2$.
    $z_2(-z_2 - (1+c_1/2)x_1 + u - (1+c_1/2)(-x_1+x_1^2+x_2)) = -c_2\frac{1}{2}z_2^2 - (c_1+1)x_1^2 - x_1 z_2$.
    $z_2(-z_2 - (1+c_1/2)x_1 + u - (1+c_1/2)(-x_1+x_1^2+z_2+(1+c_1/2)x_1)) = -c_2\frac{1}{2}z_2^2 - (c_1+1)x_1^2 - x_1 z_2$.

    This is becoming extremely complex. Let's use a simpler approach for the control law derivation.
    From $\dot{V}_1 = -(c_1+1)x_1^2 + x_1 z_2$.
    We want to choose $u$ to make $z_2$ stable. Consider the dynamics of $z_2$:
    $\dot{z}_2 = -x_2 + u - \dot{\alpha}_1 = -(z_2+\alpha_1) + u - \dot{\alpha}_1$.
    Let the control $u$ be:
    $u = \alpha_2(x_1, x_2) = -\frac{c_2}{2}z_2 - (c_1+1)x_1 + \dot{\alpha}_1 + z_2 + \alpha_1$.
    This does not seem right.

    **Correct derivation for $u$ in step $n$:**
    We have $V_n = V_{n-1} + \frac{1}{2}z_n^2$, $\dot{V}_{n-1} = -c_{n-1}V_{n-1} + (\dots)z_n$.
    $\dot{V}_n = \dot{V}_{n-1} + z_n \dot{z}_n$.
    $\dot{z}_n = f_n + g_n u - \dot{\alpha}_{n-1}$.
    We want $\dot{V}_n = -c_n V_n = -c_n V_{n-1} - c_n \frac{1}{2}z_n^2$.
    So, $\dot{V}_{n-1} + z_n (f_n + g_n u - \dot{\alpha}_{n-1}) = -c_n V_{n-1} - c_n \frac{1}{2}z_n^2$.
    $z_n (f_n + g_n u - \dot{\alpha}_{n-1}) = -c_n V_{n-1} - c_n \frac{1}{2}z_n^2 - \dot{V}_{n-1}$.
    Substitute $\dot{V}_{n-1} = -c_{n-1}V_{n-1} + \frac{\partial V_{n-1}}{\partial x_{n-1}} g_{n-1} z_n$.
    $z_n (f_n + g_n u - \dot{\alpha}_{n-1}) = -c_n V_{n-1} - c_n \frac{1}{2}z_n^2 - (-c_{n-1}V_{n-1} + \frac{\partial V_{n-1}}{\partial x_{n-1}} g_{n-1} z_n)$.
    $z_n (f_n + g_n u - \dot{\alpha}_{n-1}) = -(c_n-c_{n-1}) V_{n-1} - c_n \frac{1}{2}z_n^2 - \frac{\partial V_{n-1}}{\partial x_{n-1}} g_{n-1} z_n$.
    Divide by $z_n$ (for $z_n \neq 0$):
    $f_n + g_n u - \dot{\alpha}_{n-1} = -(c_n-c_{n-1}) \frac{V_{n-1}}{z_n} - c_n \frac{1}{2}z_n - \frac{\partial V_{n-1}}{\partial x_{n-1}} g_{n-1}$.
    $g_n u = -f_n + \dot{\alpha}_{n-1} - \frac{c_n}{2} z_n - \frac{\partial V_{n-1}}{\partial x_{n-1}} g_{n-1} - (c_n-c_{n-1}) \frac{V_{n-1}}{z_n}$.

    For our example: $n=2$. $f_2 = -x_2$, $g_2 = 1$. $V_1 = \frac{1}{2}x_1^2$. $\frac{\partial V_1}{\partial x_1} = x_1$. $g_1 = 1$.
    $\dot{\alpha}_1 = -(1+c_1/2)(-x_1+x_1^2+x_2)$.
    $z_2 = x_2 + (1+c_1/2)x_1$.
    $u = -f_2 + \dot{\alpha}_1 - \frac{c_2}{2} z_2 - \frac{\partial V_1}{\partial x_1} g_1 - (c_2-c_1) \frac{V_1}{z_2}$.
    $u = -(-x_2) + \dot{\alpha}_1 - \frac{c_2}{2} z_2 - x_1(1) - (c_2-c_1) \frac{\frac{1}{2}x_1^2}{z_2}$.
    $u = x_2 + \dot{\alpha}_1 - \frac{c_2}{2} z_2 - x_1 - \frac{c_2-c_1}{2} \frac{x_1^2}{z_2}$.
    Substitute $x_2 = z_2 - (1+c_1/2)x_1$:
    $u = z_2 - (1+c_1/2)x_1 + \dot{\alpha}_1 - \frac{c_2}{2} z_2 - x_1 - \frac{c_2-c_1}{2} \frac{x_1^2}{z_2}$.
    $u = (1-\frac{c_2}{2})z_2 - (1+c_1/2+1)x_1 + \dot{\alpha}_1 - \frac{c_2-c_1}{2} \frac{x_1^2}{z_2}$.
    $u = (1-\frac{c_2}{2})z_2 - (2+c_1/2)x_1 + \dot{\alpha}_1 - \frac{c_2-c_1}{2} \frac{x_1^2}{z_2}$.

    If we choose $c_2 = c_1$, then $u = (1-\frac{c_1}{2})z_2 - (2+c_1/2)x_1 + \dot{\alpha}_1$.
    This is the control law. The term $\frac{V_{n-1}}{z_n}$ is problematic if $z_n=0$. To avoid this, we can replace $\frac{1}{z_n}$ with $\frac{z_n}{z_n^2 + \delta}$ or use a boundary layer approach.

**Highlight to Remember:** Backstepping is a recursive technique suitable for strict-feedback systems. It progressively stabilizes the system by designing virtual controls for each subsystem, ensuring that the overall system is stabilized by a Lyapunov function.

---

## 4. Other Nonlinear Control Design Techniques

While feedback linearization and sliding mode control are prominent, other techniques exist for designing controllers for nonlinear systems.

### 4.1 Gain Scheduling

**Concept:** Gain scheduling involves designing a set of linear controllers and then scheduling their gains based on the operating point of the system. The operating point can be represented by a measurable variable or a set of variables.

**Procedure:**
1.  Identify key operating conditions or parameters that significantly affect the system dynamics.
2.  Design linear controllers (e.g., PID controllers) for each of these operating conditions.
3.  Develop a scheduling function that maps the operating condition to the parameters of the appropriate controller.

**Example:**
*   An aircraft autopilot where controller gains are scheduled with altitude and airspeed.
*   A robot arm where controller gains are scheduled with joint positions to account for gravity and Coriolis forces.

**Advantages:**
*   Relatively simple to implement if linear controllers are well-tuned for different operating points.
*   Can provide good performance over a wide range of operating conditions.

**Disadvantages:**
*   Requires extensive analysis and tuning for each operating point.
*   Performance can degrade if the scheduling function is not accurate or if the system transitions rapidly between operating points.
*   Does not inherently provide robustness to unmodeled dynamics or disturbances.

### 4.2 Adaptive Control

**Concept:** Adaptive control systems are designed to automatically adjust their parameters in real-time to compensate for variations in the plant dynamics, unknown parameters, or disturbances.

**Types:**
*   **Model Reference Adaptive Control (MRAC):** The controller's parameters are adjusted to make the plant's output track the output of a reference model.
*   **Self-Tuning Regulators (STR):** The controller parameters are estimated on-line using system identification techniques, and these estimates are used to update the controller.

**Example:**
*   Controlling a robot with unknown payload mass. The adaptive controller adjusts joint torques to maintain performance as the payload changes.
*   Controlling a chemical reactor where reaction rates might vary over time.

**Advantages:**
*   Can handle systems with unknown or time-varying parameters.
*   Provides robustness to parameter uncertainties.

**Disadvantages:**
*   Can be complex to design and analyze.
*   Convergence of parameter adaptation can be slow or may not occur under certain conditions.
*   Requires careful consideration of stability during the adaptation process.

### 4.3 Optimal Control

**Concept:** Optimal control aims to find a control law that minimizes (or maximizes) a given performance index (cost function) over a specified time horizon.

**Example:**
*   **Linear Quadratic Regulator (LQR):** For linear systems, LQR finds the control law that minimizes a quadratic cost function of the state and control input.
*   **Model Predictive Control (MPC):** MPC predicts the future behavior of the system using a model and optimizes the control inputs over a finite horizon, typically subject to constraints. MPC is well-suited for nonlinear systems and constraints.

**Advantages:**
*   Provides a systematic way to achieve performance objectives.
*   Can handle constraints on states and control inputs (especially MPC).

**Disadvantages:**
*   Requires an accurate model of the system.
*   Optimization can be computationally intensive, especially for nonlinear systems and long horizons.
*   Tuning the cost function can be challenging.

### 4.4 Feedback Linearization (Revisited for Controller Design)

As discussed earlier, feedback linearization can be used to convert a nonlinear system into a linear one. Once linearized, standard linear control design techniques can be applied. This includes pole placement, optimal control (like LQR for the linearized system), and robust control methods for linear systems.

**Example:**
Designing a linear controller for a robotic manipulator by first applying feedback linearization to account for its nonlinear dynamics (gravity, Coriolis forces).

### 4.5 Passivity-Based Control

**Concept:** Passivity-based control leverages the passivity properties of a system to design stabilizing controllers. A system is passive if it does not inject energy into the environment. By augmenting the system with a passive controller, the closed-loop system can be made globally stable.

**Example:**
*   Controlling mechanical systems like robotic manipulators, where energy dissipation (damping) can be introduced via the controller to achieve stability.

**Advantages:**
*   Can provide global stability guarantees.
*   Often intuitive for mechanical and electrical systems.

**Disadvantages:**
*   Requires the system to be representable in a passive form.
*   Controller design can be challenging for complex nonlinearities.

---

## Practice Questions and Exercises

**Question 1:**
Consider the system:
$\dot{x}_1 = x_1 - x_1^3 + x_2$
$\dot{x}_2 = u$
and the output $y = x_1$.
a) Determine the relative degree of the output $y$.
b) Design an input-output feedback linearization control law $u = \alpha(x) + \beta(x)v$ to make the closed-loop system $y^{(2)} = v$.
c) If we choose $v = -k_1 y - k_2 \dot{y}$ with $k_1, k_2 > 0$, what is the resulting nonlinear controller $u$?

**Answer 1:**
a) $y = x_1$
$\dot{y} = x_1 - x_1^3 + x_2$
$\ddot{y} = \frac{d}{dt}(x_1 - x_1^3 + x_2) = (1 - 3x_1^2)\dot{x}_1 + \dot{x}_2 = (1 - 3x_1^2)(x_1 - x_1^3 + x_2) + u$.
The relative degree is $r=2$, as the second derivative of $y$ depends on $u$, and the first derivative does not.

b) To achieve $\ddot{y} = v$, we set:
$(1 - 3x_1^2)(x_1 - x_1^3 + x_2) + u = v$
$u = v - (1 - 3x_1^2)(x_1 - x_1^3 + x_2)$
Here, $\alpha(x) = - (1 - 3x_1^2)(x_1 - x_1^3 + x_2)$ and $\beta(x) = 1$.

c) If $v = -k_1 y - k_2 \dot{y}$:
$u = -k_1 x_1 - k_2 (x_1 - x_1^3 + x_2) - (1 - 3x_1^2)(x_1 - x_1^3 + x_2)$
$u = -k_1 x_1 - (k_2 + 1 - 3x_1^2)(x_1 - x_1^3 + x_2)$

---

**Question 2:**
Consider the system:
$\dot{x}_1 = -x_1 + u$
$\dot{x}_2 = -x_2 + x_1^2$
a) Can this system be stabilized using backstepping? If yes, design the controller.
b) Design a sliding mode controller for the system to drive $x_1$ to 0, using the sliding surface $S(x_1) = x_1$.

**Answer 2:**
a) The system is not in the strict-feedback form $\dot{x}_1 = f_1(x_1) + g_1(x_1)x_2$, $\dot{x}_2 = f_2(x_1) + g_2(x_1)u$. The states are coupled in reverse. However, let's re-examine the structure.
Let's consider $x_2$ as the "output" and $x_1$ as the first state.
The system is:
$\dot{x}_1 = -x_1 + u$
$\dot{x}_2 = -x_2 + x_1^2$
This is not in the standard strict-feedback form for backstepping as the input $u$ affects $x_1$, and $x_1$ affects $x_2$.

Let's try backstepping by considering $x_2$ as the state to be stabilized first, and $x_1$ as the "control" for $x_2$. This is not the typical application.

**Alternative interpretation:** If we want to control $x_1$, and $x_2$ is some internal dynamics:
$\dot{x}_1 = -x_1 + u$
$\dot{x}_2 = -x_2 + x_1^2$
This is not a strict-feedback form where the input enters at the last stage.

Let's assume the intention was a strict-feedback system for backstepping. Suppose the system was:
$\dot{x}_1 = -x_1 + x_2$
$\dot{x}_2 = -x_2 + u$
To stabilize $x_1$:
Lyapunov function $V_1 = \frac{1}{2}x_1^2$.
$\dot{V}_1 = x_1 \dot{x}_1 = x_1(-x_1 + x_2) = -x_1^2 + x_1 x_2$.
We want $\dot{V}_1 = -c_1 V_1 = -\frac{c_1}{2}x_1^2$.
$x_1 x_2 = -\frac{c_1}{2}x_1^2 + \frac{1}{2}x_1^2 = -\frac{c_1-1}{2}x_1^2$.
Virtual control $\alpha_1(x_1) = -\frac{c_1-1}{2}x_1$.
$z_2 = x_2 - \alpha_1(x_1) = x_2 + \frac{c_1-1}{2}x_1$.

Now, stabilize $x_2$.
$\dot{V}_1 = -x_1^2 - x_1 \alpha_1(x_1) + x_1 z_2 = -\frac{c_1}{2}x_1^2 + x_1 z_2$.
$\dot{x}_2 = -x_2 + u$.
$V_2 = V_1 + \frac{1}{2}z_2^2 = \frac{1}{2}x_1^2 + \frac{1}{2}z_2^2$.
$\dot{V}_2 = \dot{V}_1 + z_2 \dot{z}_2 = -\frac{c_1}{2}x_1^2 + x_1 z_2 + z_2(\dot{x}_2 - \dot{\alpha}_1)$.
$\dot{\alpha}_1 = -\frac{c_1-1}{2}\dot{x}_1 = -\frac{c_1-1}{2}(-x_1 + x_2)$.
We want $\dot{V}_2 = -c_2 V_2 = -\frac{c_2}{2}x_1^2 - \frac{c_2}{2}z_2^2$.
$z_2(\dot{x}_2 - \dot{\alpha}_1) = -\frac{c_2}{2}x_1^2 - \frac{c_2}{2}z_2^2 - x_1 z_2 + \frac{c_1}{2}x_1^2$.
$z_2(-x_2+u - \dot{\alpha}_1) = \frac{c_1-c_2}{2}x_1^2 - \frac{c_2}{2}z_2^2 - x_1 z_2$.
$z_2(-(z_2+\alpha_1)+u - \dot{\alpha}_1) = \frac{c_1-c_2}{2}x_1^2 - \frac{c_2}{2}z_2^2 - x_1 z_2$.
$z_2(-z_2 - \alpha_1 + u - \dot{\alpha}_1) = \frac{c_1-c_2}{2}x_1^2 - \frac{c_2}{2}z_2^2 - x_1 z_2$.

The control law for $u$ can be derived to satisfy this.
$u = \alpha_2(x_1, x_2) = \dot{\alpha}_1 + z_2 + \frac{\frac{c_1-c_2}{2}x_1^2 - \frac{c_2}{2}z_2^2 - x_1 z_2}{z_2}$
$u = \dot{\alpha}_1 + z_2 + \frac{c_1-c_2}{2} \frac{x_1^2}{z_2} - \frac{c_2}{2}z_2 - x_1$.

b) Sliding mode control for $S(x_1) = x_1$ to drive $x_1$ to 0.
System: $\dot{x}_1 = -x_1 + u$, $\dot{x}_2 = -x_2 + x_1^2$.
For $S(x_1) = x_1$, we need $\dot{S}(x_1) = \dot{x}_1$ to be negative for $x_1 > 0$ and positive for $x_1 < 0$.
$\dot{x}_1 = -x_1 + u$.
To ensure $x_1 \dot{x}_1 < 0$, we can choose $u$ such that $-x_1 + u = -k x_1$, where $k > 0$.
$u = k x_1 - x_1 = (k-1)x_1$.
If $k > 1$, this controls $x_1$ to 0.
However, for SMC, we typically use a discontinuous control:
$u = -k \cdot \text{sgn}(x_1)$.
$\dot{x}_1 = -x_1 - k \cdot \text{sgn}(x_1)$.
If $x_1 > 0$: $\dot{x}_1 = -x_1 - k$. This is not guaranteed to converge to 0 if $k$ is not large enough relative to $-x_1$.

A better choice for SMC on $S(x_1)=x_1$ for $\dot{x}_1 = -x_1+u$ is to make $\dot{x}_1 = -\text{sgn}(x_1)$.
$-x_1 + u = -\text{sgn}(x_1)$
$u = x_1 - \text{sgn}(x_1)$.
This ensures $x_1 \dot{x}_1 = x_1 (-x_1 - \text{sgn}(x_1)) = -x_1^2 - x_1 \text{sgn}(x_1) = -x_1^2 - |x_1| < 0$.
This controller drives $x_1$ to 0. The dynamics of $x_2$ are then $\dot{x}_2 = -x_2 + (x_1 - \text{sgn}(x_1))^2$, which is stabilized by the action on $x_1$.

---

## Important Points to Remember

*   **Feedback Linearization:** Transforms nonlinear systems into linear ones, enabling linear control design. Requires the system to have a constant relative degree equal to the system order and, ideally, stable internal dynamics.
*   **Sliding Mode Control (SMC):** Robust to matched uncertainties and disturbances by driving the system to a sliding surface. Characterized by discontinuous control, leading to chattering.
*   **Backstepping:** A recursive design methodology for strict-feedback systems, systematically stabilizing subsystems using Lyapunov functions and virtual controls.
*   **Gain Scheduling:** Uses a set of linear controllers tuned for different operating points, with gains scheduled based on a measurable variable.
*   **Adaptive Control:** Adjusts controller parameters online to handle unknown or time-varying system parameters.
*   **Optimal Control:** Seeks control laws that minimize a performance index. MPC is a powerful tool for constrained nonlinear optimal control.
*   **Passivity-Based Control:** Leverages system passivity properties for guaranteed global stability, especially useful for mechanical systems.
*   The choice of control design technique depends heavily on the system's structure, the presence of uncertainties, and the desired performance objectives.

---
This concludes the study notes for Module 4, focusing on Nonlinear Control Design. Remember to refer to Khalil and Slotine & Li for a deeper understanding and more detailed examples.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=mc979OhitAg) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=F_4HkL5r4n0) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=p6Q9_e7_L1w) |
