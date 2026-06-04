---
title: "Lyapunov Stability Theory:"
subject: "NONLINEAR CONTROL SYSTEMS"
module: "Module 2: Lyapunov Stability Theory:"
branch: "Electrical and Electronics Engineering"
semester: 7
topicId: "68a200872b85456187f369a4"
status: "completed"
scrapedAt: "2026-05-23T16:38:15.225Z"
---
# NONLINEAR CONTROL SYSTEMS - Module 2: Lyapunov Stability Theory

---

## Topic: Lyapunov Stability Theory

**Module Goal:** To equip students with the fundamental principles and tools of Lyapunov stability theory for analyzing the behavior of nonlinear systems around their equilibrium points.

**Learning Outcomes:** Upon completion of this topic, students will be able to:

*   Understand the concepts of stability for nonlinear systems.
*   Define and apply Lyapunov's direct and indirect methods.
*   Construct Lyapunov functions to prove stability properties.
*   Analyze the stability of equilibrium points of nonlinear systems using Lyapunov functions.
*   Relate Lyapunov stability to qualitative behavior of nonlinear systems.

---

### 1. Introduction to Stability of Nonlinear Systems

**Core Idea:** In nonlinear systems, the behavior around equilibrium points is often more complex than in linear systems. Stability is not solely determined by eigenvalues (as in linear systems). Lyapunov's methods provide a way to assess stability without explicitly solving the differential equations.

**Key Concepts:**

*   **Equilibrium Point (or Critical Point):** A state $\mathbf{x}_e$ where the system's dynamics are zero, i.e., $f(\mathbf{x}_e) = 0$ for a system $\dot{\mathbf{x}} = f(\mathbf{x})$. We often analyze stability around the origin ($\mathbf{x}_e = \mathbf{0}$) by transforming the system.

*   **Stability (in the sense of Lyapunov):**
    *   An equilibrium point $\mathbf{x}_e$ is **stable** if for every $\epsilon > 0$, there exists a $\delta > 0$ such that if $||\mathbf{x}(t_0) - \mathbf{x}_e|| < \delta$, then $||\mathbf{x}(t) - \mathbf{x}_e|| < \epsilon$ for all $t \ge t_0$.
    *   **Intuition:** If the system starts close enough to the equilibrium point, it will stay arbitrarily close to it for all future time.

*   **Asymptotic Stability:**
    *   An equilibrium point $\mathbf{x}_e$ is **asymptotically stable** if it is stable, AND there exists a $\delta_0 > 0$ such that if $||\mathbf{x}(t_0) - \mathbf{x}_e|| < \delta_0$, then $\lim_{t \to \infty} \mathbf{x}(t) = \mathbf{x}_e$.
    *   **Intuition:** If the system starts close enough to the equilibrium point, not only will it stay close, but it will eventually converge to the equilibrium point.

*   **Exponential Stability:**
    *   An equilibrium point $\mathbf{x}_e$ is **exponentially stable** if it is asymptotically stable and there exist constants $\alpha, \beta > 0$ and $\delta > 0$ such that if $||\mathbf{x}(t_0) - \mathbf{x}_e|| < \delta$, then $||\mathbf{x}(t) - \mathbf{x}_e|| \le \beta e^{-\alpha (t-t_0)} ||\mathbf{x}(t_0) - \mathbf{x}_e||$ for all $t \ge t_0$.
    *   **Intuition:** Convergence to the equilibrium point is guaranteed to be at least exponentially fast. This is a stronger form of asymptotic stability.

*   **Instability:**
    *   An equilibrium point $\mathbf{x}_e$ is **unstable** if it is not stable.
    *   **Intuition:** If the system starts even slightly away from the equilibrium point, it will move away from it.

**Course Outcome Alignment:**
*   **CO1:** Understanding these definitions allows for the qualitative analysis of system behavior around equilibrium points (Knowledge Level: K3).
*   **CO2:** These definitions are foundational to analyzing the stability of nonlinear systems (Knowledge Level: K3).

**Textbook References:**
*   Khalil, Chapter 3: "Lyapunov Stability Theory" - Introduces the fundamental definitions of stability.
*   Slotine & Li, Chapter 2: "Lyapunov Stability Analysis" - Provides a thorough treatment of these definitions.

---

### 2. Lyapunov's Direct Method (Second Method)

**Core Idea:** Instead of solving the differential equations, we try to find a scalar function, called a Lyapunov function, whose properties (sign-definite) can reveal the stability of an equilibrium point. This method is powerful because it does not require explicit knowledge of the system's trajectories.

**Definitions:**

*   **Lyapunov Function (for a system $\dot{\mathbf{x}} = f(\mathbf{x})$ with equilibrium at $\mathbf{x}_e = \mathbf{0}$):** A scalar function $V(\mathbf{x})$ defined in a neighborhood $\mathcal{D}$ of the origin is a Lyapunov function if:
    1.  $V(\mathbf{0}) = 0$.
    2.  $V(\mathbf{x}) > 0$ for all $\mathbf{x} \in \mathcal{D}$, $\mathbf{x} \ne \mathbf{0}$ (Positive Definite).
    3.  $\dot{V}(\mathbf{x}) \le 0$ for all $\mathbf{x} \in \mathcal{D}$ (Negative Semi-definite).

*   **Properties of $\dot{V}(\mathbf{x})$:** The time derivative of $V(\mathbf{x})$ along the system trajectories is given by:
    $$ \dot{V}(\mathbf{x}) = \nabla V(\mathbf{x}) \cdot \dot{\mathbf{x}} = \nabla V(\mathbf{x}) \cdot f(\mathbf{x}) $$
    where $\nabla V(\mathbf{x})$ is the gradient of $V$.

**Lyapunov Stability Theorems (Direct Method):**

Let $\mathbf{x}_e = \mathbf{0}$ be an equilibrium point of $\dot{\mathbf{x}} = f(\mathbf{x})$. Consider a continuously differentiable scalar function $V(\mathbf{x})$ defined in a neighborhood $\mathcal{D}$ of the origin.

1.  **Stability Theorem:** If $V(\mathbf{x})$ is a Lyapunov function (satisfies conditions 1, 2, and $\dot{V}(\mathbf{x}) \le 0$), then the origin is **stable**.
    *   **Intuition:** If $V(\mathbf{x})$ is positive and its rate of change is non-positive, the "energy" stored in $V$ does not increase, and the system remains bounded.

2.  **Asymptotic Stability Theorem:** If $V(\mathbf{x})$ is a Lyapunov function and $\dot{V}(\mathbf{x}) < 0$ for all $\mathbf{x} \in \mathcal{D}$, $\mathbf{x} \ne \mathbf{0}$ (Negative Definite), then the origin is **asymptotically stable**.
    *   **Intuition:** If the "energy" is strictly decreasing, the system must eventually settle at the minimum energy state, which is the origin.

3.  **Instability Theorem (Chetaev's Theorem):** If there exists a function $V(\mathbf{x})$ such that $V(\mathbf{0}) = 0$, and there is a region $\mathcal{R} \subset \mathcal{D}$ containing $\mathbf{0}$ where $V(\mathbf{x}) > 0$ for $\mathbf{x} \in \mathcal{R}$, $\mathbf{x} \ne \mathbf{0}$, and $\dot{V}(\mathbf{x}) > 0$ for $\mathbf{x} \in \mathcal{R}$, $\mathbf{x} \ne \mathbf{0}$, then the origin is **unstable**.
    *   **Intuition:** If we can find a function that increases in a region around the origin, the system must be moving away from the origin in that region.

4.  **Exponential Stability Theorem:** The origin is **exponentially stable** if there exist constants $c_1, c_2, c_3 > 0$ and a function $V(\mathbf{x})$ such that for all $\mathbf{x}$ in a neighborhood of the origin:
    *   $c_1 ||\mathbf{x}||^2 \le V(\mathbf{x}) \le c_2 ||\mathbf{x}||^2$ (Quadratic bounds, implying positive definiteness)
    *   $\dot{V}(\mathbf{x}) \le -c_3 ||\mathbf{x}||^2$ (Strictly negative definite, with a specific bound)
    *   **Intuition:** The "energy" not only decreases but does so at a rate proportional to the square of the distance from the origin.

**Important Notes on Constructing Lyapunov Functions:**

*   There is no universal method for finding Lyapunov functions. It often requires intuition, experience, and understanding of the system's physics.
*   For many systems, quadratic forms of the state variables are good candidates, especially near the origin.
*   The choice of the norm $||\cdot||$ matters for defining positive definiteness and the bounds.

**Examples (Khalil, Chapter 3):**

**Example 1: Simple Linear System**
Consider the system $\dot{\mathbf{x}} = Ax$. Let $A = \begin{bmatrix} -1 & -2 \\ 2 & -4 \end{bmatrix}$.
We want to check if the origin is asymptotically stable.
Let's try a quadratic Lyapunov function: $V(\mathbf{x}) = \mathbf{x}^T P \mathbf{x}$, where $P$ is a symmetric positive definite matrix.
Then $\dot{V}(\mathbf{x}) = \dot{\mathbf{x}}^T P \mathbf{x} + \mathbf{x}^T P \dot{\mathbf{x}} = (A\mathbf{x})^T P \mathbf{x} + \mathbf{x}^T P (A\mathbf{x})$
$\dot{V}(\mathbf{x}) = \mathbf{x}^T A^T P \mathbf{x} + \mathbf{x}^T P A \mathbf{x} = \mathbf{x}^T (A^T P + PA) \mathbf{x}$.
For $V$ to be a Lyapunov function, we need $A^T P + PA = -Q$ for some positive definite matrix $Q$. This is known as the **Lyapunov equation**.

Let's choose $P = I$ (identity matrix).
Then $A^T P + PA = A^T I + IA = A^T + A$.
$A^T + A = \begin{bmatrix} -1 & 2 \\ -2 & -4 \end{bmatrix} + \begin{bmatrix} -1 & -2 \\ 2 & -4 \end{bmatrix} = \begin{bmatrix} -2 & 0 \\ 0 & -8 \end{bmatrix}$.
Since $A^T + A$ is negative definite (diagonal entries are negative), $V(\mathbf{x}) = \mathbf{x}^T I \mathbf{x} = ||\mathbf{x}||^2$ is a Lyapunov function.
$V(\mathbf{x}) = x_1^2 + x_2^2 > 0$ for $\mathbf{x} \ne \mathbf{0}$, and $V(\mathbf{0}) = 0$.
$\dot{V}(\mathbf{x}) = \mathbf{x}^T (-2I) \mathbf{x} = -2(x_1^2 + x_2^2) < 0$ for $\mathbf{x} \ne \mathbf{0}$.
Thus, $V(\mathbf{x}) = ||\mathbf{x}||^2$ is a Lyapunov function, and the origin is asymptotically stable.

**Example 2: Nonlinear System**
Consider the system:
$\dot{x}_1 = -x_1 + x_1 x_2$
$\dot{x}_2 = -x_2$
The equilibrium point is $(\mathbf{0}, \mathbf{0})$.
Let's try $V(x_1, x_2) = \frac{1}{2}x_1^2 + \frac{1}{2}x_2^2$.
This is positive definite and $V(\mathbf{0}) = 0$.
Let's compute $\dot{V}$:
$\dot{V} = x_1 \dot{x}_1 + x_2 \dot{x}_2$
$\dot{V} = x_1 (-x_1 + x_1 x_2) + x_2 (-x_2)$
$\dot{V} = -x_1^2 + x_1^2 x_2 - x_2^2$

Now, we need to analyze the sign of $\dot{V}$.
$\dot{V} = -(x_1^2 + x_2^2) + x_1^2 x_2$.
If $|x_2|$ is small (e.g., $|x_2| < 1$), then $x_1^2 x_2$ is small compared to $-(x_1^2 + x_2^2)$.
In a neighborhood where $|x_2| < 1$:
$\dot{V} = -(x_1^2 + x_2^2) + x_1^2 x_2 \le -(x_1^2 + x_2^2) + x_1^2 = -x_2^2$.
Since $-x_2^2 \le 0$, $\dot{V} \le 0$.
Also, $\dot{V} = 0$ only if $x_2 = 0$ and $x_1 = 0$. This means $\dot{V}$ is negative definite in the region where $|x_2| < 1$.
Therefore, $V(x_1, x_2) = \frac{1}{2}x_1^2 + \frac{1}{2}x_2^2$ is a Lyapunov function, and the origin is **asymptotically stable**.

**Course Outcome Alignment:**
*   **CO1:** This method allows for detailed analysis of qualitative behavior (e.g., convergence) without solving. (Knowledge Level: K3)
*   **CO2:** The core of the method is stability analysis. (Knowledge Level: K3)

**Textbook References:**
*   Khalil, Chapter 3: "Lyapunov's Direct Method" - Focuses on the theorems and their application.
*   Slotine & Li, Chapter 2: "Lyapunov Stability Analysis" - Provides comprehensive coverage of the direct method, including constructions.
*   Isidori, Chapter 4: "Lyapunov Stability Analysis" - Offers a more abstract and rigorous perspective.

---

### 3. Lyapunov's Indirect Method (Linearization Method)

**Core Idea:** This method relates the stability of a nonlinear system at an equilibrium point to the stability of its linearization around that point. It's simpler than the direct method when it works, but it has limitations.

**Assumptions:**
*   The system $\dot{\mathbf{x}} = f(\mathbf{x})$ is autonomous (no explicit time dependence).
*   $f(\mathbf{x})$ is continuously differentiable in a neighborhood of the equilibrium point $\mathbf{x}_e$.
*   The Jacobian matrix $\frac{\partial f}{\partial \mathbf{x}}$ evaluated at $\mathbf{x}_e$ has no eigenvalues with zero real part.

**The Method:**

1.  **Find Equilibrium Points:** Solve $f(\mathbf{x}_e) = \mathbf{0}$.
2.  **Linearize the System:** Perform a Taylor series expansion of $f(\mathbf{x})$ around an equilibrium point $\mathbf{x}_e$:
    $$ f(\mathbf{x}) \approx f(\mathbf{x}_e) + \left. \frac{\partial f}{\partial \mathbf{x}} \right|_{\mathbf{x}_e} (\mathbf{x} - \mathbf{x}_e) $$
    Since $f(\mathbf{x}_e) = \mathbf{0}$, and letting $\Delta\mathbf{x} = \mathbf{x} - \mathbf{x}_e$, we get the linearized system:
    $$ \Delta\dot{\mathbf{x}} = A \Delta\mathbf{x} $$
    where $A = \left. \frac{\partial f}{\partial \mathbf{x}} \right|_{\mathbf{x}_e}$.

3.  **Analyze the Linearized System:** Determine the stability of the origin of the linearized system by examining the eigenvalues of the Jacobian matrix $A$.
    *   If all eigenvalues of $A$ have **negative real parts**, the equilibrium point $\mathbf{x}_e$ of the nonlinear system is **asymptotically stable**.
    *   If at least one eigenvalue of $A$ has a **positive real part**, the equilibrium point $\mathbf{x}_e$ of the nonlinear system is **unstable**.
    *   **If $A$ has eigenvalues with zero real parts** (i.e., purely imaginary eigenvalues or zero eigenvalues), the linearization provides **no conclusive information** about the stability of the nonlinear system. Higher-order terms in the Taylor expansion become dominant, and Lyapunov's direct method might be needed.

**Key Theorems (Chetaev):**

*   **Theorem 1 (Asymptotic Stability):** If all eigenvalues of $A$ have negative real parts, then the equilibrium point $\mathbf{x}_e$ is asymptotically stable.

*   **Theorem 2 (Instability):** If at least one eigenvalue of $A$ has a positive real part, then the equilibrium point $\mathbf{x}_e$ is unstable.

**Limitations:**

*   The indirect method is inconclusive when the linearized system has eigenvalues on the imaginary axis or at the origin. This is a significant limitation for nonlinear systems, as these cases are common.
*   It only provides information about the stability of the equilibrium point itself, not about the size of the region of attraction.

**Examples (Slotine & Li, Chapter 2):**

**Example 1: Pendulum without Damping**
Consider the simple pendulum: $\ddot{\theta} + \frac{g}{l}\sin(\theta) = 0$.
Let $x_1 = \theta$, $x_2 = \dot{\theta}$. The state-space form is:
$\dot{x}_1 = x_2$
$\dot{x}_2 = -\frac{g}{l}\sin(x_1)$

Equilibrium points are where $\dot{x}_1 = 0$ and $\dot{x}_2 = 0$.
$x_2 = 0$
$-\frac{g}{l}\sin(x_1) = 0 \implies x_1 = n\pi$, for integer $n$.
Let's consider the equilibrium point $(x_1, x_2) = (0, 0)$.

Jacobian matrix:
$f(x_1, x_2) = \begin{bmatrix} x_2 \\ -\frac{g}{l}\sin(x_1) \end{bmatrix}$
$A = \left. \frac{\partial f}{\partial \mathbf{x}} \right|_{(0,0)} = \begin{bmatrix} \frac{\partial x_2}{\partial x_1} & \frac{\partial x_2}{\partial x_2} \\ \frac{\partial (-\frac{g}{l}\sin(x_1))}{\partial x_1} & \frac{\partial (-\frac{g}{l}\sin(x_1))}{\partial x_2} \end{bmatrix}_{(0,0)}$
$A = \begin{bmatrix} 0 & 1 \\ -\frac{g}{l}\cos(x_1) & 0 \end{bmatrix}_{(0,0)} = \begin{bmatrix} 0 & 1 \\ -\frac{g}{l} & 0 \end{bmatrix}$

Eigenvalues of $A$:
$\det(A - \lambda I) = \det \begin{bmatrix} -\lambda & 1 \\ -\frac{g}{l} & -\lambda \end{bmatrix} = (-\lambda)(-\lambda) - (1)(-\frac{g}{l}) = \lambda^2 + \frac{g}{l} = 0$
$\lambda^2 = -\frac{g}{l} \implies \lambda = \pm j \sqrt{\frac{g}{l}}$.

The eigenvalues are purely imaginary. According to the indirect method, this case is **inconclusive**.
For the simple pendulum, we know from physics that the upright position $(\pi, 0)$ is unstable, and the hanging position $(0, 0)$ is stable (but not asymptotically stable without damping, due to oscillations). This example highlights the limitations of the indirect method.

**Example 2: System where Indirect Method Works**
$\dot{x}_1 = -x_1 + x_1 x_2$
$\dot{x}_2 = -x_2$
Equilibrium point: $(0, 0)$.
Jacobian matrix:
$A = \begin{bmatrix} \frac{\partial (-x_1 + x_1 x_2)}{\partial x_1} & \frac{\partial (-x_1 + x_1 x_2)}{\partial x_2} \\ \frac{\partial (-x_2)}{\partial x_1} & \frac{\partial (-x_2)}{\partial x_2} \end{bmatrix}_{(0,0)}$
$A = \begin{bmatrix} -1 + x_2 & x_1 \\ 0 & -1 \end{bmatrix}_{(0,0)} = \begin{bmatrix} -1 & 0 \\ 0 & -1 \end{bmatrix}$

Eigenvalues of $A$: $\lambda_1 = -1$, $\lambda_2 = -1$.
Both eigenvalues have negative real parts. Therefore, the origin $(0, 0)$ is asymptotically stable for the nonlinear system. (This matches our earlier result with the direct method).

**Course Outcome Alignment:**
*   **CO1:** Helps understand qualitative behavior by relating it to a simpler linear model. (Knowledge Level: K3)
*   **CO2:** Provides a direct method for stability analysis when applicable. (Knowledge Level: K3)

**Textbook References:**
*   Khalil, Chapter 2: "Linearization of Nonlinear Systems" - Focuses on the conditions and application of the indirect method.
*   Slotine & Li, Chapter 2: "Lyapunov Stability Analysis" - Discusses the indirect method and its limitations.
*   Vidyasagar, Chapter 3: "Linearization and Local Stability" - Provides a detailed analysis of the indirect method.

---

### 4. Stability Analysis for General Nonlinear Systems

**Key Concepts:**

*   **Region of Attraction (Domain of Attraction):** The set of all initial states $\mathbf{x}(t_0)$ for which the system state $\mathbf{x}(t)$ converges to the equilibrium point $\mathbf{x}_e$ as $t \to \infty$.
*   **Lyapunov's Second Method for Instability:** If there exists a continuously differentiable function $V(\mathbf{x})$ in a neighborhood $\mathcal{D}$ of $\mathbf{x}_e$ such that:
    1.  $V(\mathbf{x}_e) = 0$.
    2.  $V(\mathbf{x})$ is positive definite in $\mathcal{D}$.
    3.  $\dot{V}(\mathbf{x})$ is positive definite in $\mathcal{D}$.
    Then, $\mathbf{x}_e$ is **unstable**. (This is Chetaev's theorem mentioned earlier).

*   **Global Asymptotic Stability:** If an equilibrium point is asymptotically stable, and its region of attraction is the entire state space, it is called globally asymptotically stable. A quadratic Lyapunov function $V(\mathbf{x}) = \mathbf{x}^T P \mathbf{x}$ with $\dot{V}(\mathbf{x}) = \mathbf{x}^T Q \mathbf{x}$ ($Q$ positive definite) is often sufficient to prove global asymptotic stability if $V(\mathbf{x}) \to \infty$ as $||\mathbf{x}|| \to \infty$.

*   **Barbalat's Lemma:** A crucial lemma for establishing convergence of trajectories when $\dot{V}(t) \le 0$ and $V(t) \to 0$.
    *   **Statement:** If $V(t)$ is a uniformly continuous function such that $V(t) \ge 0$ for all $t \ge 0$ and $\dot{V}(t) \le 0$ for all $t \ge 0$, and $\lim_{t \to \infty} \dot{V}(t) = 0$, then $\lim_{t \to \infty} V(t) = 0$.
    *   **Application:** If $V(\mathbf{x})$ is a Lyapunov function for $\dot{\mathbf{x}} = f(\mathbf{x})$ with $\mathbf{x}_e=\mathbf{0}$, and $f(\mathbf{x})$ is uniformly continuous, and $\dot{V}(\mathbf{x}) \le 0$, then $V(\mathbf{x}(t))$ converges to a limit. If the limit of $\dot{V}(\mathbf{x}(t))$ is also zero, then $V(\mathbf{x}(t))$ must go to zero. For asymptotic stability, we need $\dot{V}(\mathbf{x})$ to be negative definite (or at least negative semi-definite in a way that leads to convergence). Barbalat's Lemma helps show that if $\dot{V}$ is negative semi-definite and "slows down" to zero, $V$ must also go to zero.

**Course Outcome Alignment:**
*   **CO1:** Helps understand the ultimate fate of trajectories and the extent of the region of attraction. (Knowledge Level: K3)
*   **CO2:** Provides tools to prove asymptotic stability and instability. (Knowledge Level: K3)

**Textbook References:**
*   Khalil, Chapter 3: "Stability of Autonomous Systems" - Covers global stability, instability, and the role of Lyapunov functions in defining regions of attraction.
*   Slotine & Li, Chapter 2: "Lyapunov Stability Analysis" - Discusses global stability, LaSalle's Invariance Principle (which is closely related to Barbalat's Lemma and helps analyze systems with $\dot{V} \le 0$), and practical stability.
*   Isidori, Chapter 4: "Lyapunov Stability Analysis" - Provides a more in-depth theoretical treatment.

---

### 5. Practical Aspects and Challenges

*   **Finding Lyapunov Functions:** This remains the most significant challenge. Methods include:
    *   **Quadratic Forms:** $V(\mathbf{x}) = \mathbf{x}^T P \mathbf{x}$. Solve the Lyapunov equation $A^T P + PA = -Q$.
    *   **Energy-like Functions:** Based on the physical interpretation of the system (e.g., kinetic + potential energy).
    *   **Sum of Squares (SOS) Programming:** For higher-order polynomials, numerical optimization techniques can be used to search for Lyapunov functions.
    *   **Variable Gradient Method:** A systematic approach for constructing Lyapunov functions for certain classes of systems.

*   **Numerical Stability Analysis:** For complex systems, numerical methods are often employed to approximate eigenvalues or simulate trajectories with Lyapunov functions.

*   **Non-autonomous Systems:** Lyapunov's direct method can be extended to non-autonomous systems ($\dot{\mathbf{x}} = f(\mathbf{x}, t)$), but the theorems become more complex and require properties like $V(\mathbf{x}, t)$ being positive definite uniformly in $t$ and $\dot{V}(\mathbf{x}, t)$ being negative definite uniformly in $t$.

**Course Outcome Alignment:**
*   **CO2:** Understanding these challenges relates to the practical difficulty of analyzing stability. (Knowledge Level: K3)

**Textbook References:**
*   Khalil, Chapter 3: Mentions challenges and extensions.
*   Slotine & Li, Chapter 2: Discusses practical aspects of Lyapunov function construction.

---

### 6. Practice Questions and Exercises

**Question 1:**
Consider the nonlinear system:
$\dot{x}_1 = -x_1 + x_1 x_2$
$\dot{x}_2 = -2x_2$

(a) Find all equilibrium points of the system.
(b) For the equilibrium point at the origin, linearize the system and find the eigenvalues of the Jacobian matrix.
(c) Based on the linearization, what can you say about the stability of the origin?
(d) Try to find a quadratic Lyapunov function $V(x_1, x_2) = x_1^2 + ax_2^2$ to confirm the stability of the origin. Find the value of $a$ and show that $\dot{V}$ is negative definite.

**Answer 1:**
(a) Equilibrium points:
Set $\dot{x}_1 = 0 \implies -x_1(1-x_2) = 0 \implies x_1=0$ or $x_2=1$.
Set $\dot{x}_2 = 0 \implies -2x_2 = 0 \implies x_2=0$.
If $x_2=0$, then from $\dot{x}_1=0$, we get $-x_1(1-0)=0 \implies x_1=0$. So $(0,0)$ is an equilibrium point.
If $x_1=0$, then from $\dot{x}_2=0$, we get $x_2=0$. So $(0,0)$ is the only equilibrium point.

(b) Jacobian matrix $A = \begin{bmatrix} -1 + x_2 & x_1 \\ 0 & -2 \end{bmatrix}$.
At the origin $(0,0)$, $A = \begin{bmatrix} -1 & 0 \\ 0 & -2 \end{bmatrix}$.
The eigenvalues are $\lambda_1 = -1$ and $\lambda_2 = -2$.

(c) Since both eigenvalues have negative real parts, the origin is **asymptotically stable** according to the indirect method.

(d) Let $V(x_1, x_2) = x_1^2 + ax_2^2$. $V$ is positive definite and $V(0,0)=0$ if $a>0$.
$\dot{V} = 2x_1 \dot{x}_1 + 2ax_2 \dot{x}_2$
$\dot{V} = 2x_1 (-x_1 + x_1 x_2) + 2ax_2 (-2x_2)$
$\dot{V} = -2x_1^2 + 2x_1^2 x_2 - 4ax_2^2$

We want $\dot{V}$ to be negative definite.
$\dot{V} = -2x_1^2(1-x_2) - 4ax_2^2$.
For $\dot{V}$ to be negative definite, we need the coefficient of $x_1^2$ to be negative and the coefficient of $x_2^2$ to be negative.
If we choose $a=1$, then $\dot{V} = -2x_1^2 + 2x_1^2 x_2 - 4x_2^2$.
$\dot{V} = -2x_1^2(1-x_2) - 4x_2^2$.
This is not necessarily negative definite for all $x_1, x_2$. For instance, if $x_2 > 1$, the $(1-x_2)$ term makes it positive.

Let's re-examine $\dot{V} = -2x_1^2 + 2x_1^2 x_2 - 4ax_2^2$.
To make it negative definite, let's try to eliminate the $x_1^2 x_2$ term by choosing a different form or re-evaluating.
The term $2x_1^2 x_2$ is problematic if $x_2>0$.
Let's reconsider $\dot{V} = -2x_1^2 + 2x_1^2 x_2 - 4ax_2^2$.
For this to be negative definite, we need it to be less than or equal to $-c_1 x_1^2 - c_2 x_2^2$ for some $c_1, c_2 > 0$.
We can write $\dot{V} = -2x_1^2(1-x_2) - 4ax_2^2$.
If we restrict our attention to a small neighborhood where $|x_2| < 1$, then $1-x_2 > 0$.
In this neighborhood, $\dot{V} = -2x_1^2(1-x_2) - 4ax_2^2$.
For this to be negative definite, we need $a>0$. Let's pick $a=1$.
$\dot{V} = -2x_1^2(1-x_2) - 4x_2^2$.
This is negative definite for all $x_1, x_2$ such that $x_2 < 1$. The origin is a stable equilibrium point.

To show asymptotic stability, we need $\dot{V}$ to be strictly negative definite in a neighborhood.
Let's try $V(x_1, x_2) = x_1^2 + x_2^2$.
$\dot{V} = 2x_1(-x_1 + x_1 x_2) + 2x_2(-2x_2) = -2x_1^2 + 2x_1^2 x_2 - 4x_2^2$.
This is negative definite in the region $|x_2| < 1$ because $-2x_1^2(1-x_2) - 4x_2^2 \le -4x_2^2 < 0$ for $x_2 \neq 0$ and $-2x_1^2 < 0$ for $x_1 \neq 0$. If $x_2=0$, $\dot{V} = -2x_1^2 < 0$ for $x_1 \neq 0$.
So $V(x_1, x_2) = x_1^2 + x_2^2$ is a Lyapunov function and the origin is asymptotically stable.

**Question 2:**
Consider the system:
$\dot{x}_1 = -x_1^3 - x_1 x_2^2$
$\dot{x}_2 = -x_2$

(a) Find the equilibrium point.
(b) Attempt to use Lyapunov's direct method to prove asymptotic stability of the equilibrium point. Try a quadratic Lyapunov function $V(x_1, x_2) = c_1 x_1^2 + c_2 x_2^2$.
(c) If your Lyapunov function works, determine the range of $c_1, c_2 > 0$ that makes $\dot{V}$ negative definite.

**Answer 2:**
(a) Equilibrium point:
$\dot{x}_1 = -x_1^3 - x_1 x_2^2 = -x_1(x_1^2 + x_2^2) = 0 \implies x_1 = 0$ or $x_1^2+x_2^2=0 \implies x_1=0, x_2=0$.
$\dot{x}_2 = -x_2 = 0 \implies x_2 = 0$.
The only equilibrium point is the origin $(0,0)$.

(b) Try $V(x_1, x_2) = c_1 x_1^2 + c_2 x_2^2$ with $c_1, c_2 > 0$.
$\dot{V} = 2c_1 x_1 \dot{x}_1 + 2c_2 x_2 \dot{x}_2$
$\dot{V} = 2c_1 x_1 (-x_1^3 - x_1 x_2^2) + 2c_2 x_2 (-x_2)$
$\dot{V} = -2c_1 x_1^4 - 2c_1 x_1^2 x_2^2 - 2c_2 x_2^2$

(c) For $\dot{V}$ to be negative definite, all terms must be negative.
The term $-2c_1 x_1^4$ is negative for $c_1 > 0$.
The term $-2c_2 x_2^2$ is negative for $c_2 > 0$.
The term $-2c_1 x_1^2 x_2^2$ is also negative for $c_1 > 0$.
Therefore, $\dot{V} = -2c_1 x_1^4 - 2c_1 x_1^2 x_2^2 - 2c_2 x_2^2$ is negative definite for any $c_1 > 0$ and $c_2 > 0$.
So, $V(x_1, x_2) = c_1 x_1^2 + c_2 x_2^2$ is a Lyapunov function for any positive $c_1, c_2$. The origin is asymptotically stable.

**Question 3:**
Consider the system:
$\dot{x}_1 = x_1^3$
$\dot{x}_2 = -x_2$
(a) Find the equilibrium point.
(b) Linearize the system around the equilibrium point. What are the eigenvalues? What does the indirect method suggest about stability?
(c) Use Lyapunov's direct method to determine the stability of the equilibrium point.

**Answer 3:**
(a) Equilibrium point: $x_1^3 = 0 \implies x_1 = 0$, and $-x_2 = 0 \implies x_2 = 0$. The origin $(0,0)$ is the equilibrium point.

(b) Jacobian matrix $A = \begin{bmatrix} 3x_1^2 & 0 \\ 0 & -1 \end{bmatrix}$.
At the origin $(0,0)$, $A = \begin{bmatrix} 0 & 0 \\ 0 & -1 \end{bmatrix}$.
The eigenvalues are $\lambda_1 = 0$ and $\lambda_2 = -1$.
The indirect method is **inconclusive** because one eigenvalue is zero.

(c) Use Lyapunov's direct method. Try $V(x_1, x_2) = \frac{1}{2} x_1^2 + \frac{1}{2} x_2^2$.
$V$ is positive definite and $V(0,0)=0$.
$\dot{V} = x_1 \dot{x}_1 + x_2 \dot{x}_2$
$\dot{V} = x_1 (x_1^3) + x_2 (-x_2)$
$\dot{V} = x_1^4 - x_2^2$

$\dot{V}$ is not negative semi-definite everywhere. For example, if $x_1 \neq 0$ and $x_2=0$, then $\dot{V} = x_1^4 > 0$.
This suggests instability. However, our Lyapunov function $V$ did not prove instability. Let's try to prove instability using Chetaev's theorem.

We need a function $W(\mathbf{x})$ that is positive definite in a region, $W(\mathbf{0})=0$, and $\dot{W}$ is positive definite in that region.
Consider $W(x_1, x_2) = \frac{1}{4}x_1^4 - \frac{1}{2}x_2^2$. This doesn't work because $W(\mathbf{0})=0$ and it's not positive definite around the origin (it's zero on the $x_1$ axis).

Let's reconsider the system and its behavior.
If we start at $(0, \epsilon)$ where $\epsilon > 0$, then $\dot{x}_1 = 0$ and $\dot{x}_2 = -\epsilon$. So $x_2(t) = \epsilon e^{-t}$, which goes to 0. $x_1(t) = 0$. The origin is stable in this direction.
If we start at $(\epsilon, 0)$ where $\epsilon > 0$, then $\dot{x}_1 = \epsilon^3$ and $\dot{x}_2 = 0$.
$x_1(t) = \epsilon + \epsilon^3 t$. This grows unbounded. The origin is unstable.

To prove instability, let's try a different Lyapunov function candidate for instability.
Let $W(x_1, x_2) = x_2^2$. $W(0,0)=0$. $W$ is positive definite.
$\dot{W} = 2x_2 \dot{x}_2 = 2x_2 (-x_2) = -2x_2^2$.
This is negative semi-definite, so it doesn't prove instability.

Let's analyze $\dot{V} = x_1^4 - x_2^2$.
Consider the region $x_2^2 > x_1^4$. In this region, $\dot{V} < 0$. The system tends towards this region.
Consider the region $x_2^2 < x_1^4$. In this region, $\dot{V} > 0$.
If we choose an initial state $(x_1(0), x_2(0))$ such that $x_2(0)^2 < x_1(0)^4$, then $V$ increases, which means the state moves away from the origin.
Example: Start at $(1, 0.5)$. $x_1^4 = 1$, $x_2^2 = 0.25$. $0.25 < 1$, so we are in the $\dot{V}>0$ region.
$V(1, 0.5) = 0.5 + 0.25 = 0.75$.
$\dot{V}(1, 0.5) = 1^4 - 0.5^2 = 1 - 0.25 = 0.75 > 0$.
This suggests instability.

To formally prove instability using Lyapunov's Direct Method (Chetaev's theorem):
We need $V(\mathbf{x}) > 0$ in $\mathcal{R}$ and $\dot{V}(\mathbf{x}) > 0$ in $\mathcal{R}$ where $\mathcal{R}$ is a region containing the origin.
Let's try $V(x_1, x_2) = x_2^2$. $\dot{V} = -2x_2^2$. Not positive.
Let's try $V(x_1, x_2) = -x_1^4$. $\dot{V} = -4x_1^3 (\dot{x}_1) = -4x_1^3 (x_1^3) = -4x_1^6 < 0$.

Consider the region $\mathcal{R} = \{ (x_1, x_2) : |x_2| < |x_1|^2 \}$. This region contains the origin.
Let's define $V(x_1, x_2) = x_2^2 - x_1^4$.
For $\mathbf{x} \in \mathcal{R}$, $x_2^2 < x_1^4$, so $V(x_1, x_2) < 0$. This is not a Lyapunov function for instability.

The standard approach for instability is to find a function $W$ where $W>0$ and $\dot{W}>0$.
Let's use the fact that $\dot{V} = x_1^4 - x_2^2$.
If we consider states where $x_2^2 < x_1^4$, then $\dot{V} > 0$.
Let's define a region $R_\delta = \{ (x_1, x_2) : |x_1| < \delta, |x_2| < |x_1|^2 \}$. This region contains the origin.
Consider $W(x_1, x_2) = x_1^4 - x_2^2$.
$W(\mathbf{0}) = 0$.
For $(x_1, x_2) \in R_\delta$, $x_2^2 < x_1^4$, so $W(x_1, x_2) = x_1^4 - x_2^2 > 0$.
$\dot{W} = \frac{d}{dt}(x_1^4 - x_2^2) = 4x_1^3 \dot{x}_1 - 2x_2 \dot{x}_2$
$\dot{W} = 4x_1^3 (x_1^3) - 2x_2 (-x_2) = 4x_1^6 + 2x_2^2$.
For $(x_1, x_2) \in R_\delta$ and $(x_1, x_2) \neq (0,0)$, $4x_1^6 + 2x_2^2 > 0$.
So, $W(x_1, x_2) = x_1^4 - x_2^2$ satisfies the conditions of Chetaev's instability theorem in the region $R_\delta$.
Thus, the origin is **unstable**.

---

### 7. Summary and Key Takeaways

*   **Stability Definitions:** Understand the nuances between Lyapunov stability, asymptotic stability, and exponential stability.
*   **Lyapunov's Direct Method:**
    *   Find a scalar function $V(\mathbf{x})$ such that $V(\mathbf{0}) = 0$ and $V(\mathbf{x}) > 0$ for $\mathbf{x} \ne \mathbf{0}$.
    *   Compute $\dot{V}(\mathbf{x}) = \nabla V(\mathbf{x}) \cdot f(\mathbf{x})$.
    *   If $\dot{V}(\mathbf{x}) \le 0$, the origin is stable.
    *   If $\dot{V}(\mathbf{x}) < 0$, the origin is asymptotically stable.
    *   If $\dot{V}(\mathbf{x}) > 0$ in a region, the origin is unstable (Chetaev's Theorem).
    *   The main challenge is finding a suitable $V(\mathbf{x})$.
*   **Lyapunov's Indirect Method (Linearization):**
    *   Linearize the system around an equilibrium point.
    *   Analyze the eigenvalues of the Jacobian matrix.
    *   Negative real parts $\implies$ Asymptotic Stability.
    *   Positive real parts $\implies$ Instability.
    *   Zero real parts $\implies$ Inconclusive.
*   **Limitations:** The indirect method is often inconclusive. The direct method is powerful but finding $V(\mathbf{x})$ is difficult.
*   **Barbalat's Lemma:** Useful for proving convergence when $\dot{V}$ is only negative semi-definite.

**Important Points to Remember:**
*   Lyapunov methods analyze stability without solving the ODEs.
*   A Lyapunov function is like an "energy-like" function for the system.
*   The indirect method is a good first step but can fail.
*   Proving instability is often harder than proving stability.
*   The choice of Lyapunov function and the region of analysis are crucial.

---

This module provides the foundational tools for analyzing the behavior of nonlinear systems around their equilibrium points, directly contributing to Course Outcomes CO1 and CO2. The understanding of these methods is essential for the design of controllers in CO4.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=33vbFFFn04k) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=F_4HkL5r4n0) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=p6Q9_e7_L1w) |
