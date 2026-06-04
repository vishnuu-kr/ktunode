---
title: "Classification of equilibrium points;"
subject: "NONLINEAR CONTROL SYSTEMS"
module: "Module 1: Introduction to nonlinear systems:"
branch: "Electrical and Electronics Engineering"
semester: 7
topicId: "68a200872b85456187f369a0"
status: "completed"
scrapedAt: "2026-05-23T16:38:10.273Z"
---
# Nonlinear Control Systems: Module 1 - Introduction to Nonlinear Systems

## Topic: Classification of Equilibrium Points

---

### **1. Introduction to Nonlinear Systems**

Nonlinear control systems are ubiquitous in engineering and science, exhibiting behaviors that cannot be described by linear differential equations. Understanding the qualitative behavior of these systems, particularly around their **equilibrium points**, is fundamental to their analysis and control.

---

### **2. Equilibrium Points (or Critical Points/Fixed Points)**

An **equilibrium point** of a dynamical system described by $\dot{x} = f(x)$ is a state $x_e$ where the system remains stationary. This means that if the system starts at $x_e$, it will stay at $x_e$ for all future times. Mathematically, an equilibrium point $x_e$ satisfies:

$f(x_e) = 0$

**Key Concept:** Equilibrium points represent states of the system where there is no net change in the state variables. They are the "rest points" of the system.

**Example:**
Consider the simple pendulum system with damping. The state variables are the angle $\theta$ and angular velocity $\dot{\theta}$. The equations of motion are:

$\dot{\theta} = \omega$
$J\ddot{\theta} + c\dot{\theta} + mgL\sin(\theta) = 0$

where $J$ is the moment of inertia, $c$ is the damping coefficient, $m$ is the mass, $g$ is gravity, and $L$ is the length of the pendulum.

In state-space form, let $x_1 = \theta$ and $x_2 = \dot{\theta}$:

$\dot{x}_1 = x_2$
$\dot{x}_2 = -\frac{c}{J}x_2 - \frac{mgL}{J}\sin(x_1)$

To find the equilibrium points, we set $\dot{x}_1 = 0$ and $\dot{x}_2 = 0$:

$x_2 = 0$
$-\frac{c}{J}x_2 - \frac{mgL}{J}\sin(x_1) = 0$

Substituting $x_2 = 0$ into the second equation:

$-\frac{mgL}{J}\sin(x_1) = 0$
$\sin(x_1) = 0$
$x_1 = n\pi$, where $n$ is an integer.

Therefore, the equilibrium points are $(n\pi, 0)$.
*   When $n$ is even (e.g., $0, 2\pi, -2\pi, \dots$), the pendulum is hanging down (stable equilibrium).
*   When $n$ is odd (e.g., $\pi, 3\pi, -\pi, \dots$), the pendulum is balanced upright (unstable equilibrium).

**(Ref: Khalil, Chapter 2.1)**

---

### **3. Linearization Around Equilibrium Points**

To classify the behavior of a nonlinear system near an equilibrium point, we often **linearize** the system around that point. This involves approximating the nonlinear function $f(x)$ by its first-order Taylor expansion around the equilibrium point $x_e$.

Let $x = x_e + \delta x$, where $\delta x$ is a small deviation from the equilibrium.
Then, $f(x) = f(x_e + \delta x) \approx f(x_e) + \frac{\partial f}{\partial x}(x_e) \delta x$.

Since $f(x_e) = 0$, the linearized system is:

$\frac{d}{dt}(x_e + \delta x) = f(x_e + \delta x)$
$\frac{d}{dt}(\delta x) = f(x_e) + \frac{\partial f}{\partial x}(x_e) \delta x$
$\delta \dot{x} = \frac{\partial f}{\partial x}(x_e) \delta x$

The matrix $A = \frac{\partial f}{\partial x}(x_e)$ is called the **Jacobian matrix** of $f$ evaluated at the equilibrium point $x_e$. The behavior of the nonlinear system near $x_e$ is largely determined by the eigenvalues of the Jacobian matrix $A$.

**Key Concept:** Linearization transforms the analysis of a nonlinear system near an equilibrium point into the analysis of a linear system (defined by the Jacobian matrix) around the origin.

**(Ref: Khalil, Chapter 2.2; Slotine & Li, Chapter 2.2)**

---

### **4. Classification of Equilibrium Points based on Eigenvalues**

The stability and nature of an equilibrium point $x_e$ are determined by the eigenvalues of the Jacobian matrix $A = \frac{\partial f}{\partial x}(x_e)$ associated with the linearized system $\delta \dot{x} = A \delta x$.

**Case 1: All eigenvalues have negative real parts.**
*   **Classification:** Asymptotically Stable Node (if all eigenvalues are real and negative) or Stable Spiral (if eigenvalues are complex with negative real parts).
*   **Behavior:** Trajectories starting near $x_e$ converge to $x_e$ as $t \to \infty$.
*   **Outcome:** Corresponds to **CO1** and **CO2**.

**Case 2: At least one eigenvalue has a positive real part.**
*   **Classification:** Unstable Node (if all eigenvalues are real and positive) or Unstable Spiral (if eigenvalues are complex with positive real parts) or Saddle Point (if there are eigenvalues with both positive and negative real parts).
*   **Behavior:** Trajectories starting near $x_e$ diverge from $x_e$ as $t \to \infty$.
*   **Outcome:** Corresponds to **CO1** and **CO2**.

**Case 3: Some eigenvalues have zero real parts, and all others have negative real parts.**
*   **Classification:** Center (if eigenvalues are purely imaginary and distinct) or Marginally Stable (if eigenvalues are repeated on the imaginary axis or if there are eigenvalues with zero real part and others with negative real part).
*   **Behavior:** Trajectories near $x_e$ may oscillate around $x_e$ without converging or diverging. The behavior can be complex and might not be fully captured by linearization alone. For purely imaginary eigenvalues, the linearized system is stable but not asymptotically stable.
*   **Outcome:** Corresponds to **CO1** and **CO2**.

**Important Distinction:**
*   **Stable:** Trajectories starting close to $x_e$ remain close to $x_e$.
*   **Asymptotically Stable:** Trajectories starting close to $x_e$ not only remain close but also converge to $x_e$ as $t \to \infty$.
*   **Unstable:** Trajectories starting close to $x_e$ diverge from $x_e$.

**(Ref: Khalil, Chapter 2.3; Slotine & Li, Chapter 2.2; Vidyasagar, Chapter 3)**

---

### **5. Types of Equilibrium Points (Summary)**

Let $\lambda_i$ be the eigenvalues of the Jacobian matrix $A$ at the equilibrium point $x_e$.

| Eigenvalue Properties                                   | Type of Equilibrium Point

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=gI-qXk7XojA) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=Q-tL8_628gE) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=APPIZ2S8YmY) |
