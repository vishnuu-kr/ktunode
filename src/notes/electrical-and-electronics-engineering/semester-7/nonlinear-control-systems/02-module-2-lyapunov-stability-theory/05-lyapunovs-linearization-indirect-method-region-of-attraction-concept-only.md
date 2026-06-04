---
title: "- Lyapunov’s linearization (indirect) method - Region of attraction (concept only)."
subject: "NONLINEAR CONTROL SYSTEMS"
module: "Module 2: Lyapunov Stability Theory:"
branch: "Electrical and Electronics Engineering"
semester: 7
topicId: "68a200872b85456187f369a8"
status: "completed"
scrapedAt: "2026-05-23T16:38:21.515Z"
---
# Module 2: Lyapunov Stability Theory

## Topic: Lyapunov's Linearization (Indirect) Method & Region of Attraction (Concept Only)

---

### Introduction to Stability Analysis in Nonlinear Systems

Nonlinear systems often exhibit complex behaviors that cannot be fully understood by linear approximations alone. However, near an equilibrium point, a nonlinear system can often be approximated by a linear system. Lyapunov's linearization method provides a powerful tool to analyze the stability of these equilibrium points by examining the stability of the linearized system. This module also introduces the fundamental concept of the Region of Attraction, which describes the set of initial conditions from which the system converges to a stable equilibrium.

---

### Lyapunov's Linearization (Indirect) Method

#### 1. Motivation and Concept

*   **Problem:** Analyzing the stability of a nonlinear system directly using Lyapunov's direct method can be challenging. Finding a suitable Lyapunov function is often difficult.
*   **Idea:** If an equilibrium point of a nonlinear system is hyperbolic (i.e., all eigenvalues of the Jacobian matrix at the equilibrium have non-zero real parts), then the stability of the nonlinear system near that equilibrium is the *same* as the stability of the linearized system at that equilibrium. This is the essence of the **Lyapunov linearization theorem**.
*   **"Indirect" Method:** It's called indirect because we are not directly proving stability using a Lyapunov function for the nonlinear system itself. Instead, we are inferring stability from the linearized system.

#### 2. Formal Definition and Procedure

Consider a nonlinear autonomous system:
$$\dot{x} = f(x)$$
where $x \in \mathbb{R}^n$ is the state vector and $f(0) = 0$, implying $x=0$ is an equilibrium point.

**Steps:**

1.  **Identify Equilibrium Points:** Find all points $x_e$ such that $f(x_e) = 0$. We are particularly interested in the stability around these points.
2.  **Linearize the System:** Linearize the nonlinear system around an equilibrium point $x_e$. This is done by computing the Jacobian matrix of $f(x)$ evaluated at $x_e$.
    *   Let $A_e = \frac{\partial f}{\partial x} \Big|_{x=x_e}$.
    *   The linearized system around $x_e$ is given by:
        $$\dot{\delta x} = A_e \delta x$$
        where $\delta x = x - x_e$ is the deviation from the equilibrium.
3.  **Analyze the Stability of the Linearized System:** Determine the stability of the linearized system $\dot{\delta x} = A_e \delta x$ by examining the eigenvalues of the matrix $A_e$.
    *   **Asymptotic Stability:** If all eigenvalues of $A_e$ have strictly negative real parts, the linearized system is asymptotically stable.
    *   **Instability:** If at least one eigenvalue of $A_e$ has a strictly positive real part, the linearized system is unstable.
    *   **Inconclusive Case (Marginal Stability/Center):** If some eigenvalues have zero real parts and the rest have negative real parts, the linearization method is **inconclusive**. The stability of the nonlinear system in this case needs to be determined using other methods (like Lyapunov's direct method or by higher-order terms). This is the condition for a *non-hyperbolic* equilibrium.

#### 3. The Lyapunov Linearization Theorem

**Statement:** Let $x_e$ be an equilibrium point of $\dot{x} = f(x)$. Assume that $f$ is continuously differentiable in a neighborhood of $x_e$.
*   If all eigenvalues of the Jacobian matrix $A_e = \frac{\partial f}{\partial x} \Big|_{x=x_e}$ have negative real parts, then $x_e$ is **asymptotically stable**.
*   If at least one eigenvalue of $A_e$ has a positive real part, then $x_e$ is **unstable**.

**Important Note:** The theorem does **not** provide conclusions when some eigenvalues have zero real parts. These are called **non-hyperbolic equilibrium points**.

#### 4. Examples

**Example 1: A Simple Nonlinear System**

Consider the system:
$$\dot{x}_1 = -x_1 + x_1 x_2$$
$$\dot{x}_2 = -x_2 - x_1 x_2$$

*   **Equilibrium Points:**
    Set $\dot{x}_1 = 0$ and $\dot{x}_2 = 0$:
    $-x_1 + x_1 x_2 = x_1(1-x_2) = 0 \implies x_1=0$ or $x_2=1$.
    $-x_2 - x_1 x_2 = -x_2(1+x_1) = 0 \implies x_2=0$ or $x_1=-1$.

    Possible combinations:
    *   If $x_1 = 0$: $-x_2(1+0) = 0 \implies x_2 = 0$. So, $(0,0)$ is an equilibrium.
    *   If $x_2 = 1$: $-1(1+x_1) = 0 \implies x_1 = -1$. So, $(-1,1)$ is an equilibrium.
    *   If $x_1 = -1$: $-x_2(1-1) = 0 \implies 0=0$. This means any point on the line $x_1 = -1$ satisfies the second equation.
        However, for the first equation, $-(-1)(1-x_2) = 0 \implies 1-x_2 = 0 \implies x_2 = 1$. This leads back to $(-1,1)$.

    So, the equilibrium points are $(0,0)$ and $(-1,1)$.

*   **Analyze Stability at (0,0):**
    *   Compute the Jacobian matrix:
        $$f(x_1, x_2) = \begin{pmatrix} -x_1 + x_1 x_2 \\ -x_2 - x_1 x_2 \end{pmatrix}$$
        $$J(x_1, x_2) = \frac{\partial f}{\partial x} = \begin{pmatrix} \frac{\partial f_1}{\partial x_1} & \frac{\partial f_1}{\partial x_2} \\ \frac{\partial f_2}{\partial x_1} & \frac{\partial f_2}{\partial x_2} \end{pmatrix} = \begin{pmatrix} -1 + x_2 & x_1 \\ -x_2 & -1 - x_1 \end{pmatrix}$$
    *   Evaluate the Jacobian at $(0,0)$:
        $$A_{(0,0)} = \begin{pmatrix} -1 + 0 & 0 \\ -0 & -1 - 0 \end{pmatrix} = \begin{pmatrix} -1 & 0 \\ 0 & -1 \end{pmatrix}$$
    *   Find eigenvalues of $A_{(0,0)}$:
        The eigenvalues are $\lambda_1 = -1$ and $\lambda_2 = -1$.
    *   **Conclusion:** Since both eigenvalues are negative real numbers, the equilibrium point $(0,0)$ is **asymptotically stable** according to Lyapunov's linearization theorem.

*   **Analyze Stability at (-1,1):**
    *   Evaluate the Jacobian at $(-1,1)$:
        $$A_{(-1,1)} = \begin{pmatrix} -1 + 1 & -1 \\ -1 & -1 - (-1) \end{pmatrix} = \begin{pmatrix} 0 & -1 \\ -1 & 0 \end{pmatrix}$$
    *   Find eigenvalues of $A_{(-1,1)}$:
        The characteristic equation is $\det(A - \lambda I) = 0$:
        $$\det \begin{pmatrix} -\lambda & -1 \\ -1 & -\lambda \end{pmatrix} = (-\lambda)(-\lambda) - (-1)(-1) = \lambda^2 - 1 = 0$$
        So, $\lambda^2 = 1$, which gives $\lambda_1 = 1$ and $\lambda_2 = -1$.
    *   **Conclusion:** Since one eigenvalue is positive ($\lambda_1 = 1$) and one is negative ($\lambda_2 = -1$), the equilibrium point $(-1,1)$ is **unstable** according to Lyapunov's linearization theorem.

**Example 2: Pendulum System (Referencing Khalil, Chapter 2)**

Consider a damped pendulum:
$$J\ddot{\theta} + b\dot{\theta} + mgL\sin(\theta) = 0$$
Let $x_1 = \theta$ and $x_2 = \dot{\theta}$. Then the state-space representation is:
$$\dot{x}_1 = x_2$$
$$\dot{x}_2 = -\frac{b}{J}x_2 - \frac{mgL}{J}\sin(x_1)$$

*   **Equilibrium Points:**
    Set $\dot{x}_1 = 0$ and $\dot{x}_2 = 0$:
    $x_2 = 0$
    $-\frac{b}{J}x_2 - \frac{mgL}{J}\sin(x_1) = 0$
    Substituting $x_2=0$: $-\frac{mgL}{J}\sin(x_1) = 0$.
    This implies $\sin(x_1) = 0$, so $x_1 = n\pi$ for integer $n$.
    The equilibrium points are $(n\pi, 0)$.

*   **Analyze Stability at the Upright Equilibrium (0, $\pi$):**
    Let's consider the equilibrium points $(0, 0)$ (pendulum hanging down) and $(\pi, 0)$ (pendulum balanced upright). We'll analyze $(\pi, 0)$.
    Let $x_e = (\pi, 0)$.
    *   Compute the Jacobian matrix:
        $$f(x_1, x_2) = \begin{pmatrix} x_2 \\ -\frac{b}{J}x_2 - \frac{mgL}{J}\sin(x_1) \end{pmatrix}$$
        $$J(x_1, x_2) = \begin{pmatrix} 0 & 1 \\ -\frac{mgL}{J}\cos(x_1) & -\frac{b}{J} \end{pmatrix}$$
    *   Evaluate the Jacobian at $(\pi, 0)$:
        $$A_{(\pi, 0)} = \begin{pmatrix} 0 & 1 \\ -\frac{mgL}{J}\cos(\pi) & -\frac{b}{J} \end{pmatrix} = \begin{pmatrix} 0 & 1 \\ \frac{mgL}{J} & -\frac{b}{J} \end{pmatrix}$$
    *   Find eigenvalues of $A_{(\pi, 0)}$:
        Characteristic equation: $\det \begin{pmatrix} -\lambda & 1 \\ \frac{mgL}{J} & -\frac{b}{J} - \lambda \end{pmatrix} = 0$
        $(-\lambda)(-\frac{b}{J} - \lambda) - 1 \cdot \frac{mgL}{J} = 0$
        $\lambda^2 + \frac{b}{J}\lambda - \frac{mgL}{J} = 0$
    *   **Conclusion:** The product of the eigenvalues is $-\frac{mgL}{J}$, which is negative (assuming $m, g, L, J > 0$). This implies one eigenvalue is positive and one is negative. Therefore, the upright equilibrium point $(\pi, 0)$ is **unstable**.

*   **Analyze Stability at the Hanging Equilibrium (0, 0):**
    *   Evaluate the Jacobian at $(0, 0)$:
        $$A_{(0, 0)} = \begin{pmatrix} 0 & 1 \\ -\frac{mgL}{J}\cos(0) & -\frac{b}{J} \end{pmatrix} = \begin{pmatrix} 0 & 1 \\ -\frac{mgL}{J} & -\frac{b}{J} \end{pmatrix}$$
    *   Find eigenvalues of $A_{(0, 0)}$:
        Characteristic equation: $\det \begin{pmatrix} -\lambda & 1 \\ -\frac{mgL}{J} & -\frac{b}{J} - \lambda \end{pmatrix} = 0$
        $(-\lambda)(-\frac{b}{J} - \lambda) - 1 \cdot (-\frac{mgL}{J}) = 0$
        $\lambda^2 + \frac{b}{J}\lambda + \frac{mgL}{J} = 0$
    *   **Conclusion:** For the pendulum to be stable when hanging, we need the eigenvalues to have negative real parts. The roots of this quadratic equation are:
        $$\lambda = \frac{-\frac{b}{J} \pm \sqrt{(\frac{b}{J})^2 - 4\frac{mgL}{J}}}{2}$$
        *   If the discriminant $(\frac{b}{J})^2 - 4\frac{mgL}{J} \ge 0$, the eigenvalues are real and negative (since $b>0, J>0, mgL>0$).
        *   If the discriminant $(\frac{b}{J})^2 - 4\frac{mgL}{J} < 0$, the eigenvalues are complex with a negative real part, $-\frac{b}{2J}$.
        In both cases, the eigenvalues have negative real parts. Therefore, the hanging equilibrium point $(0, 0)$ is **asymptotically stable** (provided $b>0$). This matches our physical intuition.

#### 5. Limitations and When It's Inconclusive

*   **Non-hyperbolic Equilibria:** The method fails when the Jacobian matrix at the equilibrium has eigenvalues with zero real parts (e.g., purely imaginary eigenvalues or zero eigenvalues). In such cases, the linearized system might be stable (e.g., centers), unstable, or marginally stable, and the nonlinear system's behavior could be significantly different.
    *   *Example:* A linear system $\dot{x}_1 = x_2$, $\dot{x}_2 = -x_1$ has eigenvalues $\pm i$. This system is neutrally stable (a center). The nonlinear system might exhibit oscillations or exhibit asymptotic stability/instability due to higher-order terms.
*   **Global Stability:** The linearization method only provides local stability information around an equilibrium point. It doesn't tell us about the behavior of the system for initial conditions far away from the equilibrium.

#### 6. Connection to Course Outcomes

*   **CO1: Analyse the qualitative behaviour of nonlinear systems about their equilibrium points.** (Knowledge Level: K3) - This method directly addresses this by relating the nonlinear behavior to the linear approximation.
*   **CO2: Analyse the stability of nonlinear systems.** (Knowledge Level: K3) - This is the primary purpose of the linearization method.

---

### Region of Attraction (Concept Only)

#### 1. Definition and Intuition

*   **Concept:** The Region of Attraction (ROA) of a stable equilibrium point $x_e$ is the set of all initial conditions $x(0)$ such that the system's trajectory $x(t)$ converges to $x_e$ as $t \to \infty$.
*   **Intuition:** Imagine dropping a ball into a bowl. The ROA is the area on the rim of the bowl from which, if you drop the ball, it will eventually settle at the bottom. If you drop it outside this area, it might roll away or settle somewhere else.

#### 2. Importance of the ROA

*   **Robustness:** A larger ROA implies that the system is more robust to disturbances or variations in initial conditions. If the system can tolerate a wider range of starting points and still return to equilibrium, it's considered more robust.
*   **Performance:** For control systems, designing for a desired ROA is crucial. For example, in attitude control of an aircraft, the ROA should encompass all plausible initial states.
*   **Design:** Control design aims to shape the ROA to ensure desired performance and stability.

#### 3. Visualizing the ROA

*   **2D Systems:** For systems in $\mathbb{R}^2$, the ROA can sometimes be visualized as a region in the $x_1-x_2$ plane.
*   **Higher Dimensions:** In higher dimensions, visualizing the ROA becomes more difficult.

#### 4. Relation to Lyapunov Stability

*   **Lyapunov's Second (Direct) Method:** The concept of the ROA is intimately linked to Lyapunov's direct method. If we can find a Lyapunov function $V(x)$ such that:
    1.  $V(x_e) = 0$
    2.  $V(x) > 0$ for $x \neq x_e$ in some neighborhood of $x_e$ (Positive Definite)
    3.  $\dot{V}(x) \le 0$ for $x \neq x_e$ in that neighborhood (Negative Semidefinite) - for stability
    4.  $\dot{V}(x) < 0$ for $x \neq x_e$ in that neighborhood (Negative Definite) - for asymptotic stability

    Then, the set of points $x$ where $V(x) < c$ for some constant $c > 0$ (such that $\dot{V}(x) < 0$ holds in this region) is contained within the ROA.
    The largest such sublevel set $\{x | V(x) < c\}$ for which $\dot{V}(x) < 0$ is a **hypothetical** region of attraction. The *actual* ROA is the union of all such regions.

*   **From Textbooks:**
    *   **Khalil (Chapter 4):** Discusses ROA and its relationship to Lyapunov functions. He defines the ROA as the set of initial states from which the solution converges to the equilibrium. He also mentions that sublevel sets of a Lyapunov function provide a subset of the ROA.
    *   **Slotine & Li (Chapter 2):** Introduces stability and concepts like attraction. They emphasize that if a Lyapunov function $V(x)$ is found such that $V(x) \to \infty$ as $||x|| \to \infty$, and $\dot{V}(x) < 0$ globally, then the system is globally asymptotically stable and the ROA is the entire state space.

#### 5. Example Illustration (Conceptual)

Consider the system:
$$\dot{x}_1 = -x_1^3$$
$$\dot{x}_2 = -x_2^3$$

*   **Equilibrium Point:** $(0,0)$ is the only equilibrium.
*   **Linearization:**
    $$J(x_1, x_2) = \begin{pmatrix} -3x_1^2 & 0 \\ 0 & -3x_2^2 \end{pmatrix}$$
    $$A_{(0,0)} = \begin{pmatrix} 0 & 0 \\ 0 & 0 \end{pmatrix}$$
    The eigenvalues are both zero. The linearization method is inconclusive.

*   **Lyapunov's Direct Method for ROA:**
    Let's try $V(x_1, x_2) = \frac{1}{2}x_1^2 + \frac{1}{2}x_2^2$.
    *   $V(0,0) = 0$.
    *   $V(x_1, x_2) > 0$ for $(x_1, x_2) \neq (0,0)$. (Positive definite)
    *   $\dot{V}(x_1, x_2) = \frac{\partial V}{\partial x_1}\dot{x}_1 + \frac{\partial V}{\partial x_2}\dot{x}_2$
        $\dot{V}(x_1, x_2) = x_1(-x_1^3) + x_2(-x_2^3) = -x_1^4 - x_2^4$.
    *   $\dot{V}(x_1, x_2) < 0$ for $(x_1, x_2) \neq (0,0)$. (Negative definite)

*   **Conclusion about ROA:** Since we found a Lyapunov function that is positive definite and its time derivative is negative definite everywhere in the state space, the equilibrium point $(0,0)$ is **globally asymptotically stable**. This means the Region of Attraction for this system is the entire state space $\mathbb{R}^2$.

#### 6. Challenges in Determining the ROA

*   **Finding the "Largest" ROA:** While sublevel sets of a Lyapunov function provide a *subset* of the ROA, finding the actual, largest ROA can be very difficult.
*   **Non-Hyperbolic Cases:** In cases where linearization is inconclusive, finding the ROA often relies heavily on Lyapunov's direct method or other advanced techniques.

#### 7. Connection to Course Outcomes

*   **CO2: Analyse the stability of nonlinear systems.** (Knowledge Level: K3) - The concept of ROA is fundamental to understanding the extent of stability.

---

### Practice Questions and Exercises

**Question 1 (Lyapunov's Linearization):**
Consider the system:
$$\dot{x}_1 = -x_1 + x_1^2$$
$$\dot{x}_2 = -x_2 + x_1 x_2$$
a) Find all equilibrium points.
b) Linearize the system around each equilibrium point.
c) Determine the stability of each equilibrium point using Lyapunov's linearization method.

**Answer 1:**
a) Equilibrium points:
   $x_1(-1+x_1) = 0 \implies x_1 = 0$ or $x_1 = 1$.
   $-x_2(1-x_1) = 0 \implies x_2 = 0$ or $x_1 = 1$.

   *   If $x_1 = 0$: $-x_2(1-0) = 0 \implies x_2 = 0$. Equilibrium: $(0,0)$.
   *   If $x_1 = 1$: $-x_2(1-1) = 0 \implies 0 = 0$. This means any point on the line $x_1=1$ satisfies the second equation.
       For the first equation, $1(-1+1) = 0$, which is also satisfied.
       So, any point $(1, x_2)$ is an equilibrium. This is a line of equilibria.

b) Jacobian matrix:
   $$J(x_1, x_2) = \begin{pmatrix} -1 + 2x_1 & 0 \\ x_2 & -1 + x_1 \end{pmatrix}$$

   *   At $(0,0)$: $A_{(0,0)} = \begin{pmatrix} -1 & 0 \\ 0 & -1 \end{pmatrix}$. Eigenvalues are $\lambda_1 = -1, \lambda_2 = -1$.
   *   At any point $(1, x_2)$: $A_{(1, x_2)} = \begin{pmatrix} -1 + 2(1) & 0 \\ x_2 & -1 + 1 \end{pmatrix} = \begin{pmatrix} 1 & 0 \\ x_2 & 0 \end{pmatrix}$.

c) Stability:
   *   At $(0,0)$: Both eigenvalues are negative, so $(0,0)$ is **asymptotically stable**.
   *   At $(1, x_2)$: The eigenvalues are $\lambda_1 = 1$ and $\lambda_2 = 0$. Since there is a positive eigenvalue ($\lambda_1=1$), the equilibrium points $(1, x_2)$ are **unstable**.

**Question 2 (Conceptual ROA):**
What is the fundamental difference in the information provided by the Lyapunov linearization method and the concept of the Region of Attraction?

**Answer 2:**
The Lyapunov linearization method provides *local* stability information about an equilibrium point by examining the eigenvalues of the Jacobian matrix. It tells us whether the system will return to the equilibrium if started *sufficiently close* to it. The Region of Attraction, on the other hand, defines the *complete set* of initial conditions from which the system will converge to a stable equilibrium. It provides a measure of the "size" or "basin" of attraction, indicating how far the system can be from equilibrium and still recover.

**Question 3 (ROA and Lyapunov Functions):**
If you find a Lyapunov function $V(x)$ for a system $\dot{x}=f(x)$ such that $V(0)=0$, $V(x)>0$ for $x\neq 0$, and $\dot{V}(x) = -x_1^2 - x_2^2$, what can you say about the ROA of the equilibrium at the origin?

**Answer 3:**
Since $\dot{V}(x) = -x_1^2 - x_2^2 < 0$ for all $x \neq 0$, the origin is **globally asymptotically stable**. This means the Region of Attraction is the **entire state space** $\mathbb{R}^n$. The sublevel sets of $V(x)$ would provide subsets of this ROA.

---

### Important Points to Remember

*   **Hyperbolic Equilibria:** Lyapunov's linearization theorem is guaranteed to work for hyperbolic equilibrium points (all eigenvalues have non-zero real parts).
*   **Non-Hyperbolic Cases are Tricky:** If eigenvalues lie on the imaginary axis or are zero, the linearization method is inconclusive. Higher-order terms or other methods are required.
*   **Local vs. Global:** Linearization provides local information. ROA is about the global set of initial conditions leading to a stable equilibrium.
*   **ROA is a Set:** The ROA is a set of states, not a single point. Its size is a crucial indicator of system robustness.
*   **Lyapunov Functions and ROA:** Sublevel sets of Lyapunov functions can provide bounds for the ROA, but finding the *exact* ROA is often a difficult problem.

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=33vbFFFn04k) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=Q-tL8_628gE) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=APPIZ2S8YmY) |


### References and Further Reading

*   **Khalil, H. K. (2002). *Nonlinear Systems*. Prentice-Hall International (UK).**
    *   Chapter 2: Discusses linearization and stability of linear systems.
    *   Chapter 4: Introduces Lyapunov stability theory, including the relationship between Lyapunov functions and the region of attraction.
*   **Slotine, J. J. E., & Li, W. (1991). *Applied Nonlinear Control*. Prentice-Hall, NJ.**
    *   Chapter 2: Covers concepts of stability, equilibrium points, and introduces Lyapunov's direct method. It also touches upon the practical aspects of stability analysis.
*   **Isidori, A. (1985). *Nonlinear Control Systems: An Introduction*. Springer-Verlag.**
    *   Provides a rigorous treatment of stability theory and related concepts.
*   **Vidyasagar, M. (1991). *Nonlinear System Analysis, Stability and Control*. Prentice-Hall, India.**
    *   Offers comprehensive coverage of stability concepts, including detailed discussions on Lyapunov methods and regions of attraction.

---