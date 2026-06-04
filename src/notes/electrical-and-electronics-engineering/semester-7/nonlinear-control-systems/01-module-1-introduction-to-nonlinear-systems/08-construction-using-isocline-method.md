---
title: "Construction using isocline method."
subject: "NONLINEAR CONTROL SYSTEMS"
module: "Module 1: Introduction to nonlinear systems:"
branch: "Electrical and Electronics Engineering"
semester: 7
topicId: "68a200872b85456187f3699f"
status: "completed"
scrapedAt: "2026-05-23T16:38:09.256Z"
---
# Nonlinear Control Systems - Module 1: Introduction to Nonlinear Systems

## Topic: Construction using Isocline Method

---

### 1. Introduction to Nonlinear Systems

Nonlinear systems are ubiquitous in engineering and science. Unlike linear systems, their behavior cannot be characterized by the principle of superposition. This means that the response to a sum of inputs is not necessarily the sum of the responses to individual inputs. Understanding the qualitative behavior of nonlinear systems is crucial for their analysis and control design.

**Key Concept:** The behavior of a nonlinear system is often studied by examining its **phase portrait**. The phase portrait is a graphical representation of the system's trajectories in the state space.

**Reference:** Khalil, Chapter 1; Slotine & Li, Chapter 1

---

### 2. The Isocline Method

The isocline method is a graphical technique used to sketch the phase portrait of a **first-order autonomous nonlinear system**. It provides a qualitative understanding of the system's dynamics without requiring explicit integration of the differential equations.

**Definition:** An **isocline** is a curve in the phase plane along which the slope of the system's trajectories is constant.

Consider a first-order autonomous nonlinear system described by:

$\frac{dx}{dt} = f(x)$

where $x$ is the state variable and $f(x)$ is a nonlinear function.

**The Core Idea:**
The rate of change of the state variable, $\frac{dx}{dt}$, represents the slope of the trajectory in the phase plane (with $x$ as the vertical axis and $t$ as the horizontal axis, though typically for a single state variable, we consider the phase plane of $x$ vs. $x'$ or $x$ vs. some other variable if it's part of a coupled system). However, for a system with multiple states, say $\dot{x}_1 = f_1(x_1, x_2)$ and $\dot{x}_2 = f_2(x_1, x_2)$, the phase plane is defined by $(x_1, x_2)$. In this case, the slope of the trajectory is given by:

$\frac{dx_2}{dx_1} = \frac{\dot{x}_2}{\dot{x}_1} = \frac{f_2(x_1, x_2)}{f_1(x_1, x_1)}$

The isocline method focuses on finding curves where this ratio is constant.

**Steps for Constructing the Phase Portrait using the Isocline Method:**

1.  **Define the System Equations:** Start with the system's differential equations. For a 2D autonomous system:
    $\dot{x}_1 = f_1(x_1, x_2)$
    $\dot{x}_2 = f_2(x_1, x_2)$

2.  **Determine the Slope Equation:** Calculate the slope of the trajectories in the phase plane $(x_1, x_2)$:
    $m = \frac{dx_2}{dx_1} = \frac{f_2(x_1, x_2)}{f_1(x_1, x_2)}$

3.  **Choose Constant Slopes:** Select a set of convenient constant slope values, denoted as $k$. Common choices are $k = 0, \pm 0.5, \pm 1, \pm 2, \pm \infty$.

4.  **Construct Isoclines:** For each chosen slope $k$, set the slope equation equal to $k$:
    $\frac{f_2(x_1, x_2)}{f_1(x_1, x_2)} = k$
    This equation defines the **isoclines** for the slope $k$. These are curves in the $(x_1, x_2)$ plane.

5.  **Draw the Isoclines:** Sketch the isoclines on the phase plane. These are lines or curves along which the trajectories will have the constant slope $k$.

6.  **Draw Directional Segments:** Along each isocline, draw short line segments with the corresponding slope $k$. These segments indicate the direction of motion of the system's state.

7.  **Draw Trajectories (Phase Curves):** Connect the directional segments smoothly to form the system's trajectories. Start from various initial conditions in the phase plane and follow the directional segments. The trajectories should not cross each other (due to the uniqueness of solutions for autonomous systems).

**Special Cases for Slopes:**

*   **$k = 0$ (Horizontal Isoclines):** These occur when $\frac{f_2(x_1, x_2)}{f_1(x_1, x_2)} = 0$, which means $f_2(x_1, x_2) = 0$ (and $f_1(x_1, x_2) \neq 0$). Along these isoclines, the trajectories are horizontal.
*   **$k = \infty$ (Vertical Isoclines):** These occur when $\frac{f_2(x_1, x_2)}{f_1(x_1, x_2)} = \infty$, which means $f_1(x_1, x_2) = 0$ (and $f_2(x_1, x_2) \neq 0$). Along these isoclines, the trajectories are vertical.
*   **Equilibrium Points:** Equilibrium points are the points $(x_1, x_2)$ where $\dot{x}_1 = 0$ and $\dot{x}_2 = 0$. At these points, the slope is indeterminate ($0/0$), and trajectories will either converge to, diverge from, or orbit these points.

---

### 3. Examples of Isocline Method Construction

Let's illustrate with an example.

**Example 1: A Simple Nonlinear System**

Consider the system:
$\dot{x}_1 = x_2$
$\dot{x}_2 = -x_1 - x_1^3$

This system is related to the Van der Pol oscillator (without damping).

1.  **System Equations:**
    $f_1(x_1, x_2) = x_2$
    $f_2(x_1, x_2) = -x_1 - x_1^3$

2.  **Slope Equation:**
    $m = \frac{dx_2}{dx_1} = \frac{-x_1 - x_1^3}{x_2}$

3.  **Choose Constant Slopes:** Let's choose $k = 0, \pm 1, \pm \infty$.

4.  **Construct Isoclines:**

    *   **$k = 0$ (Horizontal Isoclines):**
        $\frac{-x_1 - x_1^3}{x_2} = 0 \implies -x_1(1+x_1^2) = 0 \implies x_1 = 0$.
        This is the $x_2$-axis. Trajectories are horizontal here.

    *   **$k = \infty$ (Vertical Isoclines):**
        $\frac{-x_1 - x_1^3}{x_2} = \infty \implies x_2 = 0$ (assuming $-x_1 - x_1^3 \neq 0$).
        This is the $x_1$-axis (excluding $x_1=0$). Trajectories are vertical here.

    *   **$k = 1$:**
        $\frac{-x_1 - x_1^3}{x_2} = 1 \implies x_2 = -x_1 - x_1^3$.
        This is a cubic curve.

    *   **$k = -1$:**
        $\frac{-x_1 - x_1^3}{x_2} = -1 \implies x_2 = x_1 + x_1^3$.
        This is also a cubic curve.

5.  **Draw the Isoclines:** Sketch these curves on the $(x_1, x_2)$ phase plane.

6.  **Draw Directional Segments:**
    *   On $x_1 = 0$ (the $x_2$-axis), draw short horizontal segments.
    *   On $x_2 = 0$ (the $x_1$-axis), draw short vertical segments.
    *   On $x_2 = -x_1 - x_1^3$, draw short segments with slope 1.
    *   On $x_2 = x_1 + x_1^3$, draw short segments with slope -1.

7.  **Draw Trajectories:** Connect the segments.
    *   **Equilibrium Points:** Where do we have $\dot{x}_1 = 0$ and $\dot{x}_2 = 0$?
        $\dot{x}_1 = x_2 = 0$
        $\dot{x}_2 = -x_1 - x_1^3 = -x_1(1+x_1^2) = 0 \implies x_1 = 0$.
        So, the only equilibrium point is at the origin $(0, 0)$.

    *   **Behavior:**
        *   When $x_2 > 0$, $\dot{x}_1 > 0$, so $x_1$ increases.
        *   When $x_2 < 0$, $\dot{x}_1 < 0$, so $x_1$ decreases.
        *   When $x_1 = 0$, $\dot{x}_2 = 0$.
        *   When $x_1 > 0$, $\dot{x}_2 < 0$ (since $1+x_1^2 > 0$).
        *   When $x_1 < 0$, $\dot{x}_2 > 0$.

    The origin $(0,0)$ is an unstable equilibrium point (specifically, a center for the linearized system, but the cubic term makes it more complex). The phase portrait will show closed trajectories or spirals around the origin, suggesting oscillatory behavior. For this specific system, the origin is a center.

**Reference:** Khalil, Chapter 1 (for general phase plane analysis); Slotine & Li, Chapter 1.

---

**Example 2: System with Multiple Equilibrium Points**

Consider the system:
$\dot{x}_1 = x_1(1 - x_1^2 - x_2^2)$
$\dot{x}_2 = x_2(1 - x_1^2 - x_2^2)$

1.  **System Equations:**
    $f_1(x_1, x_2) = x_1(1 - x_1^2 - x_2^2)$
    $f_2(x_1, x_2) = x_2(1 - x_1^2 - x_2^2)$

2.  **Slope Equation:**
    $m = \frac{dx_2}{dx_1} = \frac{x_2(1 - x_1^2 - x_2^2)}{x_1(1 - x_1^2 - x_2^2)}$

3.  **Choose Constant Slopes:** $k = 0, \pm 1, \pm \infty$.

4.  **Construct Isoclines:**

    *   **$k = 0$ (Horizontal Isoclines):**
        $x_2(1 - x_1^2 - x_2^2) = 0$ (assuming $x_1(1 - x_1^2 - x_2^2) \neq 0$).
        This implies $x_2 = 0$ or $1 - x_1^2 - x_2^2 = 0$.
        So, the $x_1$-axis ($x_2=0$) and the circle $x_1^2 + x_2^2 = 1$.

    *   **$k = \infty$ (Vertical Isoclines):**
        $x_1(1 - x_1^2 - x_2^2) = 0$ (assuming $x_2(1 - x_1^2 - x_2^2) \neq 0$).
        This implies $x_1 = 0$ or $1 - x_1^2 - x_2^2 = 0$.
        So, the $x_2$-axis ($x_1=0$) and the circle $x_1^2 + x_2^2 = 1$.

    *   **$k = 1$:**
        $\frac{x_2}{x_1} = 1 \implies x_2 = x_1$. This is a line through the origin.
        However, we must consider the term $(1 - x_1^2 - x_2^2)$. If $1 - x_1^2 - x_2^2 = 0$, then the slope is indeterminate. This happens on the circle $x_1^2 + x_2^2 = 1$.
        So, if $x_2 = x_1$, the slope equation becomes $\frac{x_1(1 - 2x_1^2)}{x_1(1 - 2x_1^2)} = 1$, as long as $x_1 \neq 0$ and $1-2x_1^2 \neq 0$.
        The isocline $x_2=x_1$ holds for any slope $k=1$ as long as $x_1 \neq 0$ and $x_1^2+x_2^2 \neq 1$.

    *   **$k = -1$:**
        $\frac{x_2}{x_1} = -1 \implies x_2 = -x_1$. This is a line through the origin.
        Similarly, this isocline holds for any slope $k=-1$ as long as $x_1 \neq 0$ and $x_1^2+x_2^2 \neq 1$.

5.  **Draw the Isoclines:** Sketch these curves. You'll see the $x_1$-axis, $x_2$-axis, and the circle $x_1^2 + x_2^2 = 1$. The lines $x_2 = x_1$ and $x_2 = -x_1$ will also be important.

6.  **Draw Directional Segments:**
    *   On $x_2 = 0$ (except at $x_1=\pm 1$), segments are horizontal.
    *   On $x_1 = 0$ (except at $x_2=\pm 1$), segments are vertical.
    *   On $x_1^2 + x_2^2 = 1$ (except at origin and where axes intersect), the slope is indeterminate. Let's analyze the behavior:
        *   On the circle $x_1^2 + x_2^2 = 1$, $1 - x_1^2 - x_2^2 = 0$.
        *   $\dot{x}_1 = x_1 \cdot 0 = 0$
        *   $\dot{x}_2 = x_2 \cdot 0 = 0$
        *   This means the entire circle $x_1^2 + x_2^2 = 1$ is a **singular manifold** where the system's velocity is zero. Any point on this circle is an equilibrium point.

7.  **Draw Trajectories:**
    *   **Equilibrium Points:**
        *   $\dot{x}_1 = 0 \implies x_1=0$ or $1 - x_1^2 - x_2^2 = 0$
        *   $\dot{x}_2 = 0 \implies x_2=0$ or $1 - x_1^2 - x_2^2 = 0$
        The equilibrium points are:
        *   $(0,0)$ (where both $x_1=0$ and $x_2=0$)
        *   All points on the circle $x_1^2 + x_2^2 = 1$.

    *   **Behavior:**
        *   The term $(1 - x_1^2 - x_2^2)$ determines the sign of both $\dot{x}_1$ and $\dot{x}_2$.
        *   If $x_1^2 + x_2^2 < 1$ (inside the circle), then $1 - x_1^2 - x_2^2 > 0$.
            *   $\dot{x}_1 > 0$ if $x_1 > 0$.
            *   $\dot{x}_1 < 0$ if $x_1 < 0$.
            *   $\dot{x}_2 > 0$ if $x_2 > 0$.
            *   $\dot{x}_2 < 0$ if $x_2 < 0$.
            This means that for points inside the circle, the trajectories tend to move outwards, towards the circle.
        *   If $x_1^2 + x_2^2 > 1$ (outside the circle), then $1 - x_1^2 - x_2^2 < 0$.
            *   $\dot{x}_1 < 0$ if $x_1 > 0$.
            *   $\dot{x}_1 > 0$ if $x_1 < 0$.
            *   $\dot{x}_2 < 0$ if $x_2 > 0$.
            *   $\dot{x}_2 < 0$ if $x_2 < 0$.
            This means that for points outside the circle, the trajectories tend to move inwards, towards the circle.

    The circle $x_1^2 + x_2^2 = 1$ is a **limit cycle**. The origin $(0,0)$ is a **stable node** or **spiral sink** if the system is perturbed slightly, but in this specific form, it's a saddle point combined with the circle as a repelling manifold. However, with the common form of such systems, the origin can be a stable equilibrium. For this exact system, the origin is a saddle.

**Reference:** Slotine & Li, Chapter 1 (for qualitative analysis); Isidori, Chapter 2 (for equilibrium points and stability).

---

### 4. Qualitative Behavior and Equilibrium Points (CO1, CO2)

The isocline method is a fundamental tool for understanding the qualitative behavior of nonlinear systems around their equilibrium points.

**Key Concepts:**

*   **Equilibrium Point:** A point $(x_1^*, x_2^*)$ in the state space where $\dot{x}_1 = 0$ and $\dot{x}_2 = 0$. At these points, the system's state remains constant if started there.
*   **Phase Trajectory:** The path traced by the system's state in the phase plane over time.
*   **Stability:**
    *   **Lyapunov Stability:** A system is Lyapunov stable if trajectories starting near an equilibrium point stay near it.
    *   **Asymptotic Stability:** A system is asymptotically stable if it is Lyapunov stable and trajectories starting near the equilibrium point converge to it.
    *   **Unstable:** If a system is not stable.
*   **Types of Equilibrium Points (Linearized System):** Analyzing the eigenvalues of the Jacobian matrix at an equilibrium point helps classify its stability. For a 2D system:
    *   **Node (Stable/Unstable):** Both eigenvalues are real and have the same sign.
    *   **Saddle Point:** Eigenvalues are real and have opposite signs (unstable).
    *   **Focus/Spiral Point (Stable/Unstable):** Eigenvalues are complex conjugates with negative (stable) or positive (unstable) real parts.
    *   **Center:** Eigenvalues are purely imaginary (stable, but not asymptotically stable).
*   **Limit Cycle:** An isolated closed trajectory in the phase plane. Systems can exhibit oscillations around a limit cycle, even if they are not started exactly on it.

**How Isocline Method Addresses CO1 & CO2:**

*   **CO1 (Qualitative Behavior about Equilibrium Points):** By drawing the isoclines and direction segments, we can visually infer how trajectories behave in the vicinity of equilibrium points. We can see if trajectories are attracted to, repelled from, or orbit these points.
*   **CO2 (Stability Analysis):** While the isocline method doesn't provide rigorous stability proofs like Lyapunov's direct method, it offers crucial qualitative insights.
    *   If all trajectories starting near an equilibrium point move towards it, it suggests asymptotic stability.
    *   If trajectories move away from it, it suggests instability.
    *   If trajectories circle it, it suggests stability (but not asymptotic stability) or a center.

**Important Note:** The isocline method is most effective for autonomous systems and provides *qualitative* information. For rigorous stability analysis, especially for more complex systems or to determine the nature of equilibrium points precisely, linearization and Lyapunov's methods are necessary.

**Reference:** Khalil, Chapter 3 (for stability analysis); Vidyasagar, Chapter 2 (for qualitative analysis and stability).

---

### 5. Limitations of the Isocline Method

*   **Manual Method:** It's a manual, graphical procedure, which can be time-consuming and less precise for complex systems.
*   **First-Order Autonomous Systems:** Primarily suited for first-order systems or can be extended to 2D autonomous systems. For higher-order systems, phase plane analysis becomes challenging.
*   **Qualitative Only:** It doesn't provide exact analytical solutions or quantitative measures of stability (like decay rates).
*   **Accuracy:** The accuracy of the constructed phase portrait depends on the number of isoclines chosen and the smoothness of the trajectory connections.

---

### 6. Practice Questions and Exercises

**Question 1:**
Consider the nonlinear system:
$\dot{x}_1 = x_2$
$\dot{x}_2 = -x_1 - x_2$

Sketch the phase portrait of this system using the isocline method. Identify the type of equilibrium point at the origin.

**Answer:**
1.  **System Equations:**
    $f_1(x_1, x_2) = x_2$
    $f_2(x_1, x_2) = -x_1 - x_2$
2.  **Slope Equation:**
    $m = \frac{dx_2}{dx_1} = \frac{-x_1 - x_2}{x_2}$
3.  **Isoclines:**
    *   $k = 0$: $\frac{-x_1 - x_2}{x_2} = 0 \implies -x_1 - x_2 = 0 \implies x_2 = -x_1$ (a line through the origin). Trajectories are horizontal.
    *   $k = \infty$: $x_2 = 0$ (the $x_1$-axis, excluding $x_1=0$). Trajectories are vertical.
    *   $k = 1$: $\frac{-x_1 - x_2}{x_2} = 1 \implies -x_1 - x_2 = x_2 \implies x_2 = -\frac{1}{2}x_1$ (a line through the origin). Trajectories have slope 1.
    *   $k = -1$: $\frac{-x_1 - x_2}{x_2} = -1 \implies -x_1 - x_2 = -x_2 \implies -x_1 = 0 \implies x_1 = 0$ (the $x_2$-axis, excluding $x_2=0$). Trajectories have slope -1.
4.  **Equilibrium Point:** At $(0,0)$, $\dot{x}_1=0$ and $\dot{x}_2=0$.
5.  **Phase Portrait Sketch:** Draw the isoclines $x_2 = -x_1$, $x_2 = 0$, $x_2 = -\frac{1}{2}x_1$, and $x_1 = 0$. Draw short line segments on these isoclines with the corresponding slopes. Connect the segments to form trajectories.
6.  **Equilibrium Type:** Linearizing the system around $(0,0)$:
    $A = \begin{bmatrix} \frac{\partial \dot{x}_1}{\partial x_1} & \frac{\partial \dot{x}_1}{\partial x_2} \\ \frac{\partial \dot{x}_2}{\partial x_1} & \frac{\partial \dot{x}_2}{\partial x_2} \end{bmatrix} = \begin{bmatrix} 0 & 1 \\ -1 & -1 \end{bmatrix}$
    The characteristic equation is $\det(A - \lambda I) = (0-\lambda)(-1-\lambda) - (1)(-1) = \lambda(1+\lambda) + 1 = \lambda^2 + \lambda + 1 = 0$.
    The eigenvalues are $\lambda = \frac{-1 \pm \sqrt{1^2 - 4(1)(1)}}{2} = \frac{-1 \pm \sqrt{-3}}{2} = -\frac{1}{2} \pm j\frac{\sqrt{3}}{2}$.
    Since the eigenvalues are complex conjugates with a negative real part, the origin is a **stable spiral point (focus)**. The phase portrait will show trajectories spiraling into the origin.

**Question 2:**
For the system $\dot{x} = -x^3$, construct the isocline diagram (in the $x$-$\dot{x}$ plane). What is the nature of the equilibrium point at $x=0$?

**Answer:**
1.  **System Equation:** $\dot{x} = -x^3$. This is a single state variable system. We consider the phase line, or the $x$-$\dot{x}$ plane.
2.  **Equilibrium Point:** $\dot{x} = -x^3 = 0 \implies x = 0$. The origin is the only equilibrium point.
3.  **Isocline (for $\dot{x}$ vs $x$):** The "isocline" here is simply the function $\dot{x} = f(x) = -x^3$ plotted in the $(x, \dot{x})$ plane.
4.  **Nature of Equilibrium:**
    *   If $x > 0$, then $\dot{x} = -x^3 < 0$. The state decreases.
    *   If $x < 0$, then $\dot{x} = -x^3 > 0$. The state increases.
    Trajectories always move towards the origin. Thus, $x=0$ is an **asymptotically stable equilibrium point** (a stable node on the phase line).

---

### 7. Important Points to Remember

*   The isocline method is a **graphical technique** for visualizing the phase portrait of nonlinear systems.
*   It involves plotting curves where the **slope of trajectories is constant**.
*   It helps understand the **qualitative behavior**, including the nature and stability of **equilibrium points**.
*   Key isoclines are for slopes $k=0$, $k=\pm \infty$, and often $k=\pm 1$.
*   For a 2D autonomous system $\dot{x}_1 = f_1(x_1, x_2)$, $\dot{x}_2 = f_2(x_1, x_2)$, the slope is $\frac{dx_2}{dx_1} = \frac{f_2(x_1, x_2)}{f_1(x_1, x_2)}$.
*   The method provides **qualitative insights** but is not a substitute for rigorous stability analysis methods like linearization or Lyapunov's direct method.
*   Understand the distinction between Lyapunov stability and asymptotic stability, and how phase portraits can suggest these properties.

---

### 8. Alignment with Course Outcomes

*   **CO1: Analyse the qualitative behaviour of nonlinear systems about their equilibrium points. (Knowledge Level: K3)**
    The isocline method directly supports this outcome by allowing the visualization and understanding of how trajectories approach, recede from, or orbit equilibrium points. This involves interpreting the direction of flow in the phase plane.

*   **CO2: Analyse the stability of nonlinear systems. (Knowledge Level: K3)**
    By observing the convergence or divergence of trajectories from equilibrium points, one can infer stability properties. While not providing formal proofs, the graphical insight is crucial for understanding stability concepts.

*   **CO3: Analyse the behaviour of nonlinear systems using frequency domain analysis. (Knowledge Level: K2)**
    While this topic primarily focuses on the time-domain (phase plane) analysis, understanding the qualitative behavior in the time domain is a prerequisite for connecting it to frequency domain concepts later in the course. The oscillations observed in phase portraits can be related to frequency responses.

*   **CO4: Design feedback controller for nonlinear systems. (Knowledge Level: K3)**
    A thorough understanding of the open-loop system's behavior through phase plane analysis (using methods like isoclines) is fundamental before designing controllers. Knowing where equilibrium points are, their stability, and the general flow of trajectories helps in choosing appropriate control strategies (e.g., feedback linearization, sliding mode control) to modify this behavior.

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=mc979OhitAg) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=M0mx8S05v60) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=APPIZ2S8YmY) |
