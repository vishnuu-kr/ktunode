---
title: "Definition of stability – asymptotic stability, instability;"
subject: "NONLINEAR CONTROL SYSTEMS"
module: "Module 1: Introduction to nonlinear systems:"
branch: "Electrical and Electronics Engineering"
semester: 7
topicId: "68a200872b85456187f3699e"
status: "completed"
scrapedAt: "2026-05-23T16:38:07.836Z"
---
# Nonlinear Control Systems - Module 1: Introduction to Nonlinear Systems

## Topic: Definition of Stability, Asymptotic Stability, and Instability

This module introduces the fundamental concepts of stability for nonlinear control systems, building upon the understanding of equilibrium points. We will explore different definitions of stability and their implications for system behavior.

---

### 1. Equilibrium Points of Nonlinear Systems

Before defining stability, it's crucial to understand equilibrium points. An equilibrium point of a dynamical system is a state where the system's state variables do not change over time.

For a system described by $\dot{x} = f(x, u)$, where $x \in \mathbb{R}^n$ is the state vector and $u \in \mathbb{R}^m$ is the input vector, an equilibrium point $x_e$ for a given constant input $u_0$ satisfies:

$f(x_e, u_0) = 0$

**If we consider autonomous systems (no input, $u=0$):**

$\dot{x} = f(x)$

An equilibrium point $x_e$ satisfies:

$f(x_e) = 0$

**Example (Khalil, Chapter 2.1):**

Consider the system $\dot{x} = -x^3$.
To find equilibrium points, set $\dot{x} = 0$:
$-x^3 = 0 \implies x_e = 0$.
So, $x_e = 0$ is an equilibrium point.

**Key Concept (Khalil):** Equilibrium points represent "rest points" of the system. The behavior of the system in the neighborhood of these points determines the system's stability.

---

### 2. Definition of Stability (Lyapunov Stability)

Stability is defined with respect to an equilibrium point. Informally, a system is stable if, when perturbed slightly from an equilibrium point, its state remains "close" to that equilibrium point.

**Formal Definition (Lyapunov Stability):**
An equilibrium point $x_e$ of an autonomous system $\dot{x} = f(x)$ is said to be **Lyapunov stable** if for every $\epsilon > 0$, there exists a $\delta > 0$ such that if $\|x(0) - x_e\| < \delta$, then $\|x(t) - x_e\| < \epsilon$ for all $t \geq 0$.

**In simpler terms:**
*   If you start the system "close enough" to the equilibrium point (within a $\delta$ neighborhood), it will stay "close" to the equilibrium point (within an $\epsilon$ neighborhood) for all future time.
*   The initial deviation determines the bound on future deviations, but the state doesn't necessarily return to the equilibrium point.

**Visual Analogy (Slotine & Li, Chapter 2.1):**
Imagine a ball in a bowl. If you push the ball slightly, it will oscillate around the bottom but stay within the bowl. The bottom of the bowl is a stable equilibrium point.

**Key Concept (Khalil):** Lyapunov stability is a "boundedness" property. It ensures that the state doesn't diverge uncontrollably from the equilibrium.

---

### 3. Definition of Asymptotic Stability

Asymptotic stability is a stronger form of stability. It not only requires the state to stay close to the equilibrium but also demands that the state eventually returns to the equilibrium point.

**Formal Definition (Asymptotic Stability):**
An equilibrium point $x_e$ of an autonomous system $\dot{x} = f(x)$ is said to be **asymptotically stable** if:
1.  It is Lyapunov stable.
2.  There exists a $\delta' > 0$ such that if $\|x(0) - x_e\| < \delta'$, then $\lim_{t \to \infty} x(t) = x_e$.

**In simpler terms:**
*   If you start the system "sufficiently close" to the equilibrium point, it will not only stay close but will also eventually converge to the equilibrium point as time goes to infinity.

**Example (Khalil, Chapter 2.1):**

Consider the system $\dot{x} = -x$.
The equilibrium point is $x_e = 0$.
The solution is $x(t) = x(0)e^{-t}$.

*   **Lyapunov Stability:** For any $\epsilon > 0$, choose $\delta = \epsilon$. If $|x(0)| < \delta$, then $|x(t)| = |x(0)e^{-t}| \leq |x(0)| < \delta = \epsilon$ for all $t \geq 0$. So, it is Lyapunov stable.
*   **Asymptotic Stability:** $\lim_{t \to \infty} x(t) = \lim_{t \to \infty} x(0)e^{-t} = 0$. Thus, the equilibrium point $x_e = 0$ is asymptotically stable.

**Visual Analogy (Slotine & Li):**
The ball in the bowl analogy: If there's a slight friction, the ball will eventually settle at the bottom of the bowl. The bottom is asymptotically stable.

**Key Concept (Slotine & Li):** Asymptotic stability implies that disturbances are not only contained but also dissipated over time.

---

### 4. Definition of Instability

An equilibrium point is unstable if it is not stable (in the Lyapunov sense). This means that even a small perturbation from the equilibrium can lead to large deviations.

**Formal Definition (Instability):**
An equilibrium point $x_e$ of an autonomous system $\dot{x} = f(x)$ is said to be **unstable** if it is not Lyapunov stable.

This means there exists at least one $\epsilon > 0$ such that for *every* $\delta > 0$, there is an initial condition $x(0)$ with $\|x(0) - x_e\| < \delta$ for which there exists some $t \geq 0$ such that $\|x(t) - x_e\| \geq \epsilon$.

**In simpler terms:**
*   No matter how close you start to the equilibrium point, there will always be some initial condition within that small neighborhood that will cause the system's state to move away from the equilibrium and potentially diverge.

**Example (Khalil, Chapter 2.1):**

Consider the system $\dot{x} = x$.
The equilibrium point is $x_e = 0$.
The solution is $x(t) = x(0)e^{t}$.

*   For $\epsilon = 1$, no matter how small $\delta$ is, if we pick $x(0) = \delta/2$, then $|x(t)| = (\delta/2)e^t$. For any $t > \ln(2/\delta)$, we have $|x(t)| > \epsilon$.
*   Therefore, the equilibrium point $x_e = 0$ is unstable.

**Visual Analogy (Slotine & Li):**
Imagine a ball balanced on top of a hill. Any slight nudge will cause it to roll down the hill and away from the top. The top of the hill is an unstable equilibrium point.

**Key Concept (Khalil):** Instability signifies that the system is sensitive to small disturbances and can exhibit unbounded behavior.

---

### 5. Further Classification of Stability (Uniform Asymptotic Stability, Exponential Stability)

While Lyapunov and asymptotic stability are fundamental, other classifications provide more nuanced descriptions of convergence.

*   **Uniform Stability:** If a system is Lyapunov stable for *all* initial conditions within a certain neighborhood, regardless of where that neighborhood is located. For autonomous systems, Lyapunov stability usually implies uniform stability.

*   **Uniform Asymptotic Stability:** If a system is asymptotically stable for *all* initial conditions within a certain neighborhood, and the rate of convergence is uniform.

*   **Exponential Stability:** This is a strong form of asymptotic stability where the convergence rate is bounded below by an exponential decay.
    **Definition:** An equilibrium point $x_e$ is **exponentially stable** if there exist constants $\alpha > 0$ and $\beta > 0$ such that if $\|x(0) - x_e\| < \beta$, then $\|x(t) - x_e\| \leq \alpha \|x(0) - x_e\| e^{-\lambda t}$ for some $\lambda > 0$.
    This implies that the error decays exponentially at a rate of at least $\lambda$.

**Reference (Khalil, Chapter 2.1):** Khalil discusses these classifications and their interrelationships. Exponential stability is often desired in control system design as it guarantees a minimum rate of convergence.

---

### 6. Stability of Non-Autonomous Systems

The definitions of stability can be extended to non-autonomous systems $\dot{x} = f(x, t)$. An equilibrium trajectory $\bar{x}(t)$ is a solution that satisfies $f(\bar{x}(t), t) = 0$ for all $t$. The stability is then defined with respect to deviations from this trajectory.

*   **Lyapunov Stability (for trajectories):** An equilibrium trajectory $\bar{x}(t)$ is Lyapunov stable if for every $\epsilon > 0$, there exists a $\delta > 0$ such that if $\|x(0) - \bar{x}(0)\| < \delta$, then $\|x(t) - \bar{x}(t)\| < \epsilon$ for all $t \geq 0$.

*   **Asymptotic Stability (for trajectories):** An equilibrium trajectory $\bar{x}(t)$ is asymptotically stable if it is Lyapunov stable and there exists a $\delta' > 0$ such that if $\|x(0) - \bar{x}(0)\| < \delta'$, then $\lim_{t \to \infty} \|x(t) - \bar{x}(t)\| = 0$.

**Key Consideration (Isidori, Chapter 2):** Stability for non-autonomous systems is more complex as it involves deviations from a time-varying trajectory.

---

### 7. Stability of Linear Systems (Recap and Connection to Nonlinear Systems)

For linear time-invariant (LTI) systems $\dot{x} = Ax$, the stability of the origin (the only equilibrium point) is determined by the eigenvalues of the matrix $A$.

*   **Asymptotically Stable:** All eigenvalues of $A$ have negative real parts.
*   **Lyapunov Stable (but not asymptotically stable):** All eigenvalues have non-positive real parts, and eigenvalues with zero real parts correspond to simple (non-repeated) roots of the minimal polynomial.
*   **Unstable:** At least one eigenvalue has a positive real part.

**Connection to Nonlinear Systems (CO1, CO2):**
The concept of *linearization* around an equilibrium point is crucial for analyzing the local stability of nonlinear systems. By linearizing a nonlinear system around an equilibrium point, we obtain a linear system whose stability properties can often (under certain conditions) inform the stability of the nonlinear system in the neighborhood of that equilibrium.

**The Jacobian Matrix:** For a system $\dot{x} = f(x)$, the Jacobian matrix evaluated at the equilibrium point $x_e$ is $J(x_e) = \frac{\partial f}{\partial x}\Big|_{x=x_e}$. The linear approximation of the system near $x_e$ is $\dot{\tilde{x}} = J(x_e) \tilde{x}$, where $\tilde{x} = x - x_e$.

**Theorem (Linearization Theorem - Rough Statement):** If the linearized system at an equilibrium point is strictly Hurwitz stable (all eigenvalues have negative real parts), then the equilibrium point of the nonlinear system is asymptotically stable. If the linearized system has at least one eigenvalue with a positive real part, then the equilibrium point of the nonlinear system is unstable. The case where the linearized system has eigenvalues on the imaginary axis is inconclusive for the nonlinear system.

**Example (Khalil):**
$\dot{x} = -x + x^3$
Equilibrium point: $-x_e + x_e^3 = 0 \implies x_e(1-x_e^2) = 0 \implies x_e \in \{0, 1, -1\}$.
Let's analyze $x_e = 0$.
$f(x) = -x + x^3$.
Jacobian: $J(x) = \frac{d f}{d x} = -1 + 3x^2$.
At $x_e = 0$, $J(0) = -1$.
Since the eigenvalue is $-1$ (negative real part), the linearization theorem suggests $x_e=0$ is asymptotically stable.

**Key Point (CO2):** Linearization is a powerful tool to analyze the *local* stability of nonlinear systems. It provides a first-order approximation.

---

### 8. Lyapunov's Direct Method (Brief Introduction)

While the definitions describe what stability is, Lyapunov's direct method (also known as the second method) provides a way to *prove* stability without explicitly solving the differential equations. It involves finding a scalar function (Lyapunov function) that acts like a generalized "energy" for the system.

*   **Lyapunov Function $V(x)$:** A scalar function that is positive definite ($V(0)=0$ and $V(x)>0$ for $x \neq 0$) and whose time derivative along the system's trajectories, $\dot{V}(x) = \nabla V(x) \cdot f(x)$, is negative semi-definite ($\dot{V}(x) \leq 0$). If $\dot{V}(x)$ is negative definite ($\dot{V}(x) < 0$ for $x \neq 0$), then the equilibrium is asymptotically stable.

**Reference (Slotine & Li, Chapter 2.2):** This method is foundational for nonlinear control and will be explored in more detail in subsequent modules.

---

### Learning Outcomes Addressed:

*   **CO1: Analyse the qualitative behaviour of nonlinear systems about their equilibrium points.** (K3)
    *   Understanding definitions of stability, asymptotic stability, and instability directly relates to how the system behaves near equilibrium points. Linearization also helps predict this behavior.
*   **CO2: Analyse the stability of nonlinear systems.** (K3)
    *   The core of this topic is understanding and applying the definitions of stability. The linearization theorem is a key tool for analysis.
*   **CO3: Analyse the behaviour of nonlinear systems using frequency domain analysis.** (K2)
    *   While frequency domain analysis is not directly covered in this *specific* topic, understanding stability is a prerequisite for many frequency domain techniques (e.g., describing functions for limit cycles, Nyquist criterion for LTI systems which can be related to linearization). This topic lays the groundwork.
*   **CO4: Design feedback controller for nonlinear systems.** (K3)
    *   Knowing whether a system is stable or unstable is critical for controller design. Controllers are often designed to stabilize unstable systems or improve the stability margins of already stable systems.

---

### Important Points to Remember:

*   **Equilibrium points are the reference:** Stability is always defined with respect to an equilibrium point.
*   **Lyapunov stability vs. Asymptotic stability:** Lyapunov stability means staying close; asymptotic stability means returning to the equilibrium.
*   **Instability means sensitive to perturbations:** Even small initial errors can lead to divergence.
*   **Linearization provides local insights:** The Jacobian matrix's eigenvalues are powerful indicators of local stability.
*   **Linearization is not always conclusive:** If the linearized system has eigenvalues on the imaginary axis, the nonlinear system's stability may be different.
*   **Lyapunov's second method:** A powerful tool for proving stability without solving ODEs.

---

### Practice Questions:

1.  **Definition Recall:** Briefly define Lyapunov stability, asymptotic stability, and instability for an autonomous system $\dot{x} = f(x)$ at an equilibrium point $x_e$.
2.  **Linearization Analysis:** Consider the system $\dot{x} = y$, $\dot{y} = -x - y + x^3$.
    a.  Find all equilibrium points.
    b.  For each equilibrium point, linearize the system by finding the Jacobian matrix.
    c.  Analyze the stability of each equilibrium point using the linearized system.
3.  **System Behavior:** For the system $\dot{x} = -x^2$:
    a.  Find the equilibrium point.
    b.  Is the equilibrium point stable or unstable? Justify your answer using the definition of stability.
    c.  Does the equilibrium point exhibit asymptotic stability? Justify.
4.  **Conceptual Question:** Why is asymptotic stability generally preferred over mere Lyapunov stability in control system design?

---

### Answers to Practice Questions:

1.  **Definition Recall:**
    *   **Lyapunov Stability:** For every $\epsilon > 0$, there exists $\delta > 0$ such that if $\|x(0) - x_e\| < \delta$, then $\|x(t) - x_e\| < \epsilon$ for all $t \geq 0$.
    *   **Asymptotic Stability:** Lyapunov stable and there exists $\delta' > 0$ such that if $\|x(0) - x_e\| < \delta'$, then $\lim_{t \to \infty} x(t) = x_e$.
    *   **Instability:** The equilibrium point is not Lyapunov stable.

2.  **Linearization Analysis:**
    a.  Equilibrium points:
        $\dot{x} = y = 0$
        $\dot{y} = -x - y + x^3 = 0$
        Substituting $y=0$ into the second equation: $-x - 0 + x^3 = 0 \implies x(x^2 - 1) = 0 \implies x(x-1)(x+1) = 0$.
        So, equilibrium points are: $(0,0)$, $(1,0)$, and $(-1,0)$.

    b.  Jacobian Matrix:
        $f(x, y) = \begin{bmatrix} y \\ -x - y + x^3 \end{bmatrix}$
        $J(x, y) = \frac{\partial f}{\partial (x, y)} = \begin{bmatrix} \frac{\partial f_1}{\partial x} & \frac{\partial f_1}{\partial y} \\ \frac{\partial f_2}{\partial x} & \frac{\partial f_2}{\partial y} \end{bmatrix} = \begin{bmatrix} 0 & 1 \\ -1 + 3x^2 & -1 \end{bmatrix}$

    c.  Stability Analysis:
        *   **At (0,0):**
            $J(0,0) = \begin{bmatrix} 0 & 1 \\ -1 & -1 \end{bmatrix}$
            Characteristic equation: $\det(J - \lambda I) = \det \begin{bmatrix} -\lambda & 1 \\ -1 & -1-\lambda \end{bmatrix} = (-\lambda)(-1-\lambda) - (1)(-1) = \lambda^2 + \lambda + 1 = 0$.
            Eigenvalues: $\lambda = \frac{-1 \pm \sqrt{1 - 4}}{2} = \frac{-1 \pm i\sqrt{3}}{2}$.
            Both eigenvalues have negative real parts. Thus, $(0,0)$ is **asymptotically stable**.

        *   **At (1,0):**
            $J(1,0) = \begin{bmatrix} 0 & 1 \\ -1 + 3(1)^2 & -1 \end{bmatrix} = \begin{bmatrix} 0 & 1 \\ 2 & -1 \end{bmatrix}$
            Characteristic equation: $\det(J - \lambda I) = \det \begin{bmatrix} -\lambda & 1 \\ 2 & -1-\lambda \end{bmatrix} = (-\lambda)(-1-\lambda) - (1)(2) = \lambda^2 + \lambda - 2 = 0$.
            $(\lambda+2)(\lambda-1) = 0$.
            Eigenvalues: $\lambda_1 = 1$, $\lambda_2 = -2$.
            One eigenvalue has a positive real part. Thus, $(1,0)$ is **unstable**.

        *   **At (-1,0):**
            $J(-1,0) = \begin{bmatrix} 0 & 1 \\ -1 + 3(-1)^2 & -1 \end{bmatrix} = \begin{bmatrix} 0 & 1 \\ 2 & -1 \end{bmatrix}$
            This is the same Jacobian as for (1,0).
            Eigenvalues: $\lambda_1 = 1$, $\lambda_2 = -2$.
            One eigenvalue has a positive real part. Thus, $(-1,0)$ is **unstable**.

3.  **System Behavior:**
    a.  Equilibrium point: $-x_e^2 = 0 \implies x_e = 0$.
    b.  Justification for stability: For $\epsilon > 0$, choose $\delta = \epsilon$. If $|x(0)| < \delta$, then $|x(t)| = |\frac{1}{1/x(0) + t}|$. If $x(0) \neq 0$, then $x(t)$ approaches 0 as $t \to \infty$. If $x(0) = 0$, $x(t)=0$. In either case, $|x(t)| \leq |x(0)| < \delta = \epsilon$ for all $t \geq 0$. So, it is Lyapunov stable.
    c.  The equilibrium point $x_e=0$ is **asymptotically stable** because $\lim_{t \to \infty} x(t) = \lim_{t \to \infty} \frac{1}{1/x(0) + t} = 0$ for $x(0) \neq 0$.

4.  **Conceptual Question:**
    Asymptotic stability is preferred because it guarantees that the system not only stays bounded but also actively rejects disturbances and returns to its desired operating point (equilibrium). Lyapunov stability only guarantees boundedness, meaning the system might oscillate or stay at a distance from the equilibrium indefinitely, which might not be acceptable for many practical control objectives (e.g., tracking a reference, rejecting constant disturbances). Asymptotic stability ensures that the system eventually settles to the equilibrium, which is a more robust and desirable behavior.

---
This concludes the notes for Module 1, Topic: Definition of Stability, Asymptotic Stability, and Instability. These foundational concepts are critical for understanding the behavior and design of nonlinear control systems.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=gI-qXk7XojA) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=Q-tL8_628gE) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=8XG7U5yN668) |
