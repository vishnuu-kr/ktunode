---
title: "Periodic orbits - limit cycles."
subject: "NONLINEAR CONTROL SYSTEMS"
module: "Module 1: Introduction to nonlinear systems:"
branch: "Electrical and Electronics Engineering"
semester: 7
topicId: "68a200872b85456187f369a2"
status: "completed"
scrapedAt: "2026-05-23T16:38:13.706Z"
---
# Nonlinear Control Systems: Module 1 - Introduction to Nonlinear Systems: Periodic Orbits - Limit Cycles

## 1. Introduction to Periodic Orbits and Limit Cycles

**What are Periodic Orbits?**

A periodic orbit (or periodic trajectory) is a solution of a dynamical system that repeats itself after a certain time interval. In other words, if $x(t)$ is a solution, then $x(t + T) = x(t)$ for some constant $T > 0$, known as the **period**.

**Why are they important in nonlinear systems?**

Unlike linear systems where solutions are typically exponentials and sinusoids (which can be combined linearly), nonlinear systems can exhibit a much richer variety of behaviors, including sustained oscillations. These oscillations are often represented by periodic orbits. Understanding these orbits is crucial for predicting and controlling the long-term behavior of nonlinear systems.

**Connection to Course Outcomes:**

*   **CO1 (Analyze qualitative behavior about equilibrium points):** Periodic orbits represent a significant qualitative behavior of nonlinear systems, often occurring when the system is not at an equilibrium point.
*   **CO2 (Analyze stability):** The stability of these periodic orbits is a key aspect of understanding the system's overall dynamic.
*   **CO3 (Analyze behavior using frequency domain analysis):** While this module introduces qualitative methods, limit cycles are often analyzed using frequency domain techniques in later modules.

---

## 2. Limit Cycles: A Special Type of Periodic Orbit

**Definition of a Limit Cycle:**

A **limit cycle** is an isolated closed trajectory in the phase space of a dynamical system. "Isolated" means that there are no other closed trajectories in its neighborhood. As time approaches infinity (or negative infinity), trajectories starting from initial conditions "close" to the limit cycle will converge towards it.

**Key Characteristics of Limit Cycles:**

*   **Closed Trajectory:** The state vector of the system traces a closed loop in the phase space.
*   **Isolation:** No other closed trajectories are arbitrarily close to the limit cycle.
*   **Asymptotic Behavior:** Trajectories starting sufficiently close to the limit cycle approach it as $t \to \infty$ or $t \to -\infty$.

**Types of Limit Cycles:**

*   **Stable Limit Cycle:** Trajectories starting in the neighborhood of the limit cycle converge to it. Think of it as an "attractor" in the phase space.
*   **Unstable Limit Cycle:** Trajectories starting in the neighborhood of the limit cycle diverge away from it. Think of it as a "repeller."
*   **Semi-stable Limit Cycle:** Trajectories approach from one side and diverge from the other.

**Visualizing Limit Cycles (Phase Space Diagrams):**

Phase space diagrams are essential for understanding limit cycles. They plot the state variables against each other, revealing the flow of the system's trajectories.

*   **Example:** Consider a second-order system $\dot{x} = f(x, y)$, $\dot{y} = g(x, y)$. A phase space diagram would plot $y$ vs. $x$. A limit cycle would appear as a closed loop in this plot.

**Textbook References:**

*   **Khalil (2002), Chapter 4 (Qualitative Analysis of Nonlinear Systems):** Discusses phase plane analysis and the geometric interpretation of limit cycles.
*   **Slotine & Li (1991), Chapter 2 (Analysis of Nonlinear Systems):** Provides a foundational understanding of phase portraits and equilibrium points, laying the groundwork for limit cycle identification.

---

## 3. Existence and Detection of Limit Cycles

Identifying the existence and location of limit cycles can be challenging. Several analytical and graphical techniques are employed.

### 3.1. Phase Plane Analysis

For second-order autonomous systems:
$$
\begin{aligned}
\dot{x} &= f(x, y) \\
\dot{y} &= g(x, y)
\end{aligned}
$$

**Key Concepts:**

*   **Equilibrium Points:** Points where $\dot{x} = 0$ and $\dot{y} = 0$. These are critical for sketching trajectories.
*   **Isoclines:** Curves where the slope of the trajectories is constant ($\frac{dy}{dx} = \frac{g(x, y)}{f(x, y)}$).
*   **Direction Fields:** Arrows indicating the direction of motion in the phase plane.

**Graphical Method for Detecting Limit Cycles:**

1.  **Find Equilibrium Points:** Solve $f(x, y) = 0$ and $g(x, y) = 0$.
2.  **Determine Isoclines:** Plot curves where $\frac{g(x, y)}{f(x, y)} = m$ for various constant slopes $m$.
3.  **Sketch Direction Field:** Use isoclines or evaluate $\frac{dy}{dx}$ at various points.
4.  **Draw Trajectories:** Connect the direction arrows.
5.  **Identify Closed Trajectories:** Look for trajectories that form closed loops. If a closed trajectory is isolated, it's a limit cycle.

**Example (Van der Pol Oscillator):**

The Van der Pol oscillator is a classic example exhibiting a limit cycle.
$$
\ddot{x} - \mu(1-x^2)\dot{x} + x = 0
$$
This can be written as a system of first-order equations:
$$
\begin{aligned}
\dot{x} &= y \\
\dot{y} &= \mu(1-x^2)y - x
\end{aligned}
$$
For $\mu > 0$, the Van der Pol oscillator exhibits a **stable limit cycle** for almost all initial conditions. Trajectories spiral towards this closed orbit.

**Textbook References:**

*   **Khalil (2002), Chapter 4:** Detailed explanation and examples of phase plane analysis for identifying limit cycles.
*   **Isidori (1985), Chapter 1 (Qualitative Analysis of Dynamical Systems):** Discusses the concept of limit cycles and their geometric interpretation in phase space.

---

### 3.2. Analytical Methods

While phase plane analysis is graphical, analytical methods can provide conditions for the existence of limit cycles.

#### 3.2.1. Poincaré-Bendixson Theorem

This theorem provides sufficient conditions for the existence of a limit cycle in a two-dimensional autonomous system.

**Statement of the Theorem:**

Let $D$ be a closed, bounded region in the phase plane $\mathbb{R}^2$. Let $\phi(t, x_0)$ be the trajectory of the system $\dot{x} = f(x)$ originating at $x_0$. If:

1.  $D$ is positively invariant under $\phi$ (i.e., if $x_0 \in D$, then $\phi(t, x_0) \in D$ for all $t \ge 0$).
2.  There are no equilibrium points inside $D$.
3.  The vector field $f(x)$ is continuously differentiable in $D$.

Then, there exists a limit cycle $\gamma$ inside $D$, and all trajectories starting in $D$ approach $\gamma$ as $t \to \infty$.

**How to Apply:**

*   Identify a suitable annular region (a region between two closed curves) where trajectories are trapped.
*   Ensure there are no equilibrium points within this annulus.
*   Verify that the vector field is smooth in the region.

**Limitations:**

*   Only applies to two-dimensional systems.
*   Can be difficult to find suitable regions $D$.

**Textbook References:**

*   **Khalil (2002), Section 4.3 (Poincaré-Bendixson Theorem):** Provides a formal statement and examples of its application.
*   **Vidyasagar (1991), Chapter 4 (Stability of Nonlinear Systems):** May touch upon theorems related to the existence of periodic solutions.

#### 3.2.2. Floquet Theory (Brief Mention)

Floquet theory is used to analyze the stability of **periodic solutions** in systems with periodic coefficients (or equivalently, for systems with periodic inputs). It extends the concept of linearization to periodic systems. While the focus here is on autonomous systems, it's a relevant theoretical tool for periodic behaviors.

*   **Key Idea:** Any periodic solution of a linear time-varying system with period $T$ can be transformed into a constant solution of a related linear time-invariant system.

**Textbook References:**

*   **Khalil (2002), Chapter 10 (Stability of Nonlinear Systems):** Discusses Floquet theory in the context of periodic systems and stability of periodic orbits.

---

## 4. Stability of Limit Cycles

The stability of a limit cycle determines whether trajectories starting near it will converge or diverge.

**Types of Stability:**

*   **Lyapunov Stability:** Trajectories starting arbitrarily close to the limit cycle remain arbitrarily close to it.
*   **Asymptotic Stability:** Trajectories starting arbitrarily close to the limit cycle not only remain close but also converge to it as $t \to \infty$.
*   **Unstable:** Trajectories starting close to the limit cycle diverge from it.

**How to Analyze Stability:**

1.  **Linearization around the Limit Cycle:**
    *   Consider a perturbed trajectory $x(t) + \delta(t)$, where $x(t)$ is on the limit cycle.
    *   Substitute this into the system dynamics and linearize with respect to the perturbation $\delta(t)$.
    *   This results in a linear time-varying system whose coefficients depend on the limit cycle trajectory.

2.  **Floquet Multipliers (for Linearized System):**
    *   The system's solution over one period $T$ of the limit cycle can be expressed using a matrix $\Phi(T)$, where $\Phi(t)$ is the fundamental matrix solution of the linearized system.
    *   The eigenvalues of $\Phi(T)$ are called **Floquet multipliers**.
    *   For a **stable limit cycle**, the Floquet multipliers must have magnitudes less than or equal to 1, with at least one multiplier equal to 1 (corresponding to motion along the limit cycle). All other multipliers must have magnitudes strictly less than 1.
    *   If any multiplier has a magnitude greater than 1, the limit cycle is **unstable**.

**Important Note:** Analyzing the stability of limit cycles often involves studying a linear time-varying system, which can be complex. Simpler methods like phase plane analysis (observing trajectory behavior) are often used for initial assessment.

**Textbook References:**

*   **Khalil (2002), Section 4.4 (Stability of Limit Cycles):** Provides a detailed discussion on linearization around limit cycles and the use of Floquet theory.
*   **Slotine & Li (1991), Chapter 2:** Briefly touches upon stability of equilibrium points, which is foundational to understanding stability of other invariant sets like limit cycles.

---

## 5. Applications and Examples

Limit cycles are observed in various real-world systems.

*   **Biological Oscillations:** Heartbeat, nerve impulses, circadian rhythms.
*   **Mechanical Systems:** Oscillations in poorly damped systems, phenomena like flutter in aerospace.
*   **Electrical Circuits:** Oscillators (e.g., relaxation oscillators), switching circuits.
*   **Chemical Reactions:** Autocatalytic reactions exhibiting oscillatory behavior.
*   **Control Systems:** Limit cycles can arise in feedback systems with nonlinearities like saturation or hysteresis, sometimes leading to undesirable sustained oscillations.

**Example: Relaxation Oscillators**

Relaxation oscillators are systems that exhibit a limit cycle characterized by slow and fast transitions between different operating states.

*   **Example:** A neon lamp oscillator. The voltage across the lamp increases slowly until it reaches a breakdown voltage, causing the lamp to conduct and discharge rapidly. The voltage then drops below a holding voltage, the lamp extinguishes, and the charging process begins again. This repetitive cycle is a limit cycle.

**Textbook References:**

*   **Khalil (2002), Chapter 4:** Provides examples of systems exhibiting limit cycles, including mechanical and electrical oscillators.
*   **Slotine & Li (1991):** While focusing on control design, the understanding of nonlinear system behavior is crucial for identifying when limit cycles might occur in controlled systems.

---

## 6. Practical Considerations and Limitations

*   **Existence is not guaranteed:** Not all nonlinear systems have limit cycles.
*   **Uniqueness:** A system can have multiple limit cycles.
*   **Complexity:** Analytical determination of limit cycles and their stability is often difficult, especially for systems of order higher than two.
*   **Simulation:** Numerical simulation is frequently used to observe and analyze limit cycles.

---

## 7. Practice Questions and Exercises

**Question 1:**
Consider the system:
$$
\begin{aligned}
\dot{x} &= x - y + x(x^2 + y^2) \\
\dot{y} &= x + y + y(x^2 + y^2)
\end{aligned}
$$
Use polar coordinates to analyze the system and determine if a limit cycle exists.

**Answer 1:**
Let $x = r \cos \theta$ and $y = r \sin \theta$.
Then $r^2 = x^2 + y^2$, so $2r\dot{r} = 2x\dot{x} + 2y\dot{y}$.
$$
\dot{r} = \frac{1}{r}(x\dot{x} + y\dot{y})
$$
Substitute the system equations:
$$
\dot{r} = \frac{1}{r}[x(x - y + x(x^2 + y^2)) + y(x + y + y(x^2 + y^2))]
$$
$$
\dot{r} = \frac{1}{r}[x^2 - xy + x^2(x^2 + y^2) + xy + y^2 + y^2(x^2 + y^2)]
$$
$$
\dot{r} = \frac{1}{r}[x^2 + y^2 + (x^2 + y^2)(x^2 + y^2)]
$$
$$
\dot{r} = \frac{1}{r}[r^2 + r^2(r^2)] = \frac{1}{r}[r^2(1 + r^2)] = r(1 + r^2)
$$
So, $\dot{r} = r(1 + r^2)$.
For $\dot{r} = 0$, we must have $r=0$ (the origin is an equilibrium point).
For $r > 0$, $\dot{r} > 0$, meaning $r$ always increases. This implies that trajectories starting at any $r > 0$ will move away from the origin and $r \to \infty$. There is no closed trajectory, hence no limit cycle.

*Self-Correction/Refinement:* Let's check the original problem statement and the textbook for similar examples. The signs might have been intended differently.
Consider the standard form of the example from Khalil:
$$
\begin{aligned}
\dot{x} &= \mu x - y + x(x^2 + y^2) \\
\dot{y} &= x + \mu y + y(x^2 + y^2)
\end{aligned}
$$
In polar coordinates:
$$
\dot{r} = \mu r + r(r^2) = r(\mu + r^2)
$$
If $\mu < 0$, then $\dot{r} = r(\mu + r^2)$.
If $\mu < 0$, then $\dot{r} = 0$ when $r^2 = -\mu$, so $r = \sqrt{-\mu}$.
If $r < \sqrt{-\mu}$, $\dot{r} < 0$, so $r$ decreases.
If $r > \sqrt{-\mu}$, $\dot{r} > 0$, so $r$ increases.
This indicates that $r = \sqrt{-\mu}$ is an **unstable limit cycle**.

If the problem statement was indeed:
$$
\begin{aligned}
\dot{x} &= x - y + x(x^2 + y^2) \\
\dot{y} &= x + y + y(x^2 + y^2)
\end{aligned}
$$
Then $\mu=1$ (which is positive in the standard form), leading to $\dot{r} = r(1+r^2)$, as analyzed initially.

**Let's re-frame Question 1 to demonstrate a limit cycle:**

**Question 1 (Revised):**
Consider the system:
$$
\begin{aligned}
\dot{x} &= x - y - x(x^2 + y^2) \\
\dot{y} &= x + y - y(x^2 + y^2)
\end{aligned}
$$
Use polar coordinates to analyze the system and determine if a limit cycle exists.

**Answer 1 (Revised):**
Let $x = r \cos \theta$ and $y = r \sin \theta$.
$$
\dot{r} = \frac{1}{r}(x\dot{x} + y\dot{y})
$$
Substitute the system equations:
$$
\dot{r} = \frac{1}{r}[x(x - y - x(x^2 + y^2)) + y(x + y - y(x^2 + y^2))]
$$
$$
\dot{r} = \frac{1}{r}[x^2 - xy - x^2(x^2 + y^2) + xy + y^2 - y^2(x^2 + y^2)]
$$
$$
\dot{r} = \frac{1}{r}[x^2 + y^2 - (x^2 + y^2)(x^2 + y^2)]
$$
$$
\dot{r} = \frac{1}{r}[r^2 - r^2(r^2)] = \frac{1}{r}[r^2(1 - r^2)] = r(1 - r^2)
$$
So, $\dot{r} = r(1 - r^2)$.
For $\dot{r} = 0$, we have $r=0$ (origin) or $1-r^2=0$, which gives $r=1$.
*   **At $r=0$:** The origin is an equilibrium point.
*   **At $r=1$:** This is a circle of radius 1.
    *   If $0 < r < 1$, then $1-r^2 > 0$, so $\dot{r} > 0$. Trajectories move away from the origin towards $r=1$.
    *   If $r > 1$, then $1-r^2 < 0$, so $\dot{r} < 0$. Trajectories move towards $r=1$.
This indicates that the circle $r=1$ is a **stable limit cycle**. All trajectories (except those starting exactly at the origin) will eventually approach this circle.

**Question 2:**
Describe the conditions under which the Poincaré-Bendixson theorem guarantees the existence of a limit cycle.

**Answer 2:**
The Poincaré-Bendixson theorem guarantees the existence of a limit cycle for a two-dimensional autonomous system $\dot{x} = f(x)$ if there exists a closed, bounded region $D$ such that:
1.  $D$ is positively invariant (trajectories starting in $D$ stay in $D$ for $t \ge 0$).
2.  There are no equilibrium points inside $D$.
3.  The vector field $f(x)$ is continuously differentiable in $D$.
If these conditions are met, there must be a limit cycle within $D$ that attracts all trajectories in $D$.

**Question 3:**
What is the primary method used to analyze the stability of a limit cycle for a general nonlinear system?

**Answer 3:**
The primary method is to linearize the nonlinear system around the limit cycle. This results in a linear time-varying system. The stability is then determined by the eigenvalues (Floquet multipliers) of the matrix describing the system's behavior over one period of the limit cycle. If all Floquet multipliers except one (corresponding to motion along the cycle) have magnitudes less than 1, the limit cycle is stable.

---

## 8. Important Points to Remember

*   **Limit cycles are isolated closed trajectories.** This isolation is a key defining characteristic.
*   **Phase space analysis is crucial for visualization and initial detection** of limit cycles, especially for 2D systems.
*   **The Poincaré-Bendixson theorem is a powerful tool for proving the existence of limit cycles** in 2D systems, but it requires finding a suitable invariant region.
*   **Stability analysis of limit cycles is more complex** than for equilibrium points, often involving linearization and Floquet multipliers.
*   **Limit cycles represent sustained oscillations** in nonlinear systems, which can be desirable (e.g., in oscillators) or undesirable (e.g., in control systems causing instability).
*   **Relaxation oscillators** are characterized by distinct slow and fast phases leading to a limit cycle.

---

This concludes the notes for Module 1, Topic: Periodic Orbits - Limit Cycles. Remember to refer to the provided textbooks for more in-depth explanations and examples.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=gI-qXk7XojA) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=Q-tL8_628gE) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=p6Q9_e7_L1w) |
