---
title: "- Variable gradient method – La-Salle theorems."
subject: "NONLINEAR CONTROL SYSTEMS"
module: "Module 2: Lyapunov Stability Theory:"
branch: "Electrical and Electronics Engineering"
semester: 7
topicId: "68a200872b85456187f369a6"
status: "completed"
scrapedAt: "2026-05-23T16:38:18.206Z"
---
# Nonlinear Control Systems: Module 2: Lyapunov Stability Theory: Variable Gradient Method & La-Salle Theorems

## 1. Introduction to Lyapunov Stability Theory

Lyapunov's direct method provides a way to determine the stability of an equilibrium point of a nonlinear system without explicitly solving the differential equations. It relies on the existence of a scalar function, often called a Lyapunov function, whose properties can reveal the stability characteristics.

**Core Idea:** If we can find a "generalized energy" function that decreases as the system state approaches the equilibrium, then the system must be stable.

**System Considered:**
Consider a nonlinear autonomous system:
$$ \dot{x} = f(x) $$
where $x \in \mathbb{R}^n$ is the state vector, and $f(0) = 0$, meaning $x=0$ is an equilibrium point.

**Key Concepts:**

*   **Equilibrium Point:** A state $x_e$ such that $f(x_e) = 0$. We will focus on the origin, $x_e = 0$.
*   **Stability in the Sense of Lyapunov:** The equilibrium point $x=0$ is stable if for every $\epsilon > 0$, there exists a $\delta > 0$ such that if $||x(0)|| < \delta$, then $||x(t)|| < \epsilon$ for all $t \geq 0$. This means if we start close enough to the equilibrium, we stay close to it. (Corresponds to CO2)
*   **Asymptotic Stability:** The equilibrium point $x=0$ is asymptotically stable if it is stable, and in addition, there exists a $\delta > 0$ such that if $||x(0)|| < \delta$, then $\lim_{t \to \infty} x(t) = 0$. This means if we start close enough, we not only stay close but eventually return to the equilibrium. (Corresponds to CO2)
*   **Lyapunov Function:** A scalar function $V(x)$ is a Lyapunov function for the system $\dot{x} = f(x)$ if:
    1.  $V(0) = 0$
    2.  $V(x) > 0$ for $x \neq 0$ in a neighborhood around the origin (positive definite).
    3.  $\dot{V}(x) \leq 0$ for $x \neq 0$ in a neighborhood around the origin (negative semi-definite).

**Lyapunov's Direct Method (for Asymptotic Stability):**

If there exists a continuously differentiable function $V(x)$ (Lyapunov function) such that $V(x)$ is positive definite and $\dot{V}(x) = \nabla V(x) \cdot f(x) \leq 0$ for all $x$ in a neighborhood of the origin, then the equilibrium point $x=0$ is **stable**.

If $\dot{V}(x) < 0$ for all $x \neq 0$ in a neighborhood of the origin (negative definite), then the equilibrium point $x=0$ is **asymptotically stable**.

**(Reference: Khalil, Chapter 4; Slotine & Li, Chapter 2)**

**Significance:** This method is powerful because it allows us to analyze stability without solving the ODEs. The challenge is finding the right Lyapunov function.

---

## 2. Variable Gradient Method (Generalized Lyapunov Methods)

The variable gradient method is a constructive approach to finding Lyapunov functions. It aims to transform the problem of finding a Lyapunov function into a set of simpler partial differential equations. However, it's often computationally intensive.

**Motivation:** Instead of guessing a Lyapunov function $V(x)$, we can try to construct it. The idea is to define $\dot{V}(x)$ in a specific form and then determine $V(x)$ that satisfies this.

**Key Idea:** Let's assume we want $\dot{V}(x)$ to be a specific negative definite function, say $\dot{V}(x) = -g(x)$, where $g(x)$ is positive definite. Then we have:
$$ \nabla V(x) \cdot f(x) = -g(x) $$
Let $V(x) = \sum_{i,j} c_{ij} x_i x_j + \text{higher order terms}$.

The variable gradient method tries to construct $V(x)$ by postulating a structure for $\nabla V(x)$ and then integrating it.

**Methodology (Conceptual Outline):**

1.  **Define a Negative Definite Function:** Choose a positive definite function $g(x)$ for the desired $\dot{V}(x)$. For example, $g(x) = x^T Q x$ for a positive definite matrix $Q$.
2.  **Formulate $\nabla V(x)$:** The method proposes a gradient vector $\nabla V(x)$ of the form:
    $$ \nabla V(x) = \phi(x) f(x) $$
    where $\phi(x)$ is a scalar function (the "variable gradient").
3.  **Integrability Condition:** For $\nabla V(x)$ to be the gradient of some scalar function $V(x)$, it must satisfy the Frobenius integrability condition (or symmetry condition):
    $$ \frac{\partial (\phi(x) f_j(x))}{\partial x_i} = \frac{\partial (\phi(x) f_i(x))}{\partial x_j} \quad \forall i,j $$
    This condition allows us to determine $\phi(x)$.
4.  **Construct $V(x)$:** Once $\phi(x)$ is found, $V(x)$ can be obtained by integrating $\nabla V(x)$ along a path from the origin to $x$:
    $$ V(x) = \int_0^x \nabla V(\xi) d\xi $$
    The choice of path can influence the resulting $V(x)$, but if $\nabla V$ is a true gradient, the integral is path-independent.

**Example (Simplified):**

Consider the system $\dot{x}_1 = -x_1$, $\dot{x}_2 = -x_2$.
Let $f(x) = [-x_1, -x_2]^T$.
Suppose we want $\dot{V}(x) = -(x_1^2 + x_2^2)$. So, $g(x) = x_1^2 + x_2^2$.

Let $\nabla V(x) = \phi(x) f(x) = \phi(x) [-x_1, -x_2]^T = [-\phi x_1, -\phi x_2]^T$.
Let $V(x) = [V_1(x), V_2(x)]^T = [-\phi x_1, -\phi x_2]^T$.

Integrability condition:
$\frac{\partial V_1}{\partial x_2} = \frac{\partial V_2}{\partial x_1}$
$\frac{\partial (-\phi x_1)}{\partial x_2} = \frac{\partial (-\phi x_2)}{\partial x_1}$
$-\frac{\partial (\phi x_1)}{\partial x_2} = -\frac{\partial (\phi x_2)}{\partial x_1}$

If we assume $\phi$ is a scalar function of $x_1, x_2$:
$-x_1 \frac{\partial \phi}{\partial x_2} = -x_2 \frac{\partial \phi}{\partial x_1}$
$x_1 \frac{\partial \phi}{\partial x_2} = x_2 \frac{\partial \phi}{\partial x_1}$

This is a first-order linear PDE for $\phi$. The characteristic equations are:
$\frac{dx_1}{x_1} = \frac{dx_2}{x_2}$
This implies $\ln x_1 = \ln x_2 + C$, so $x_1 = C x_2$, or $x_1/x_2 = C$.
Thus, $\phi$ must be a function of $x_1/x_2$. Let $\phi(x) = h(x_1/x_2)$.

Now, we need to integrate:
$\frac{\partial V}{\partial x_1} = -\phi(x) x_1$
$\frac{\partial V}{\partial x_2} = -\phi(x) x_2$

Let's try a simple $\phi(x) = c$ (constant).
Then $\nabla V(x) = c[-x_1, -x_2]^T$.
$V(x) = \int (-\phi x_1) dx_1 + \text{terms in } x_2$
$V(x) = \int (-c x_1) dx_1 = -c \frac{x_1^2}{2} + h_1(x_2)$
Also, $V(x) = \int (-\phi x_2) dx_2 + \text{terms in } x_1$
$V(x) = \int (-c x_2) dx_2 = -c \frac{x_2^2}{2} + h_2(x_1)$
Matching these, we get $V(x) = -c (\frac{x_1^2}{2} + \frac{x_2^2}{2}) + K$.
For $V(0)=0$ and positive definiteness, we need $c>0$.
Then $\dot{V}(x) = \nabla V(x) \cdot f(x) = [-cx_1, -cx_2] \cdot [-x_1, -x_2] = c(x_1^2 + x_2^2)$.
This is positive definite, which means the system is **unstable** if we pick $c>0$. This contradicts our expectation.

**Correction:** The variable gradient method is designed to *construct* a Lyapunov function based on a desired *negative* time derivative.
If we want $\dot{V}(x) = -g(x)$, where $g(x)$ is positive definite, then we need $\nabla V(x) \cdot f(x) = -g(x)$.
If $f(x)$ itself is "dissipative" (like $f(x) = -x$), then trying to force $\dot{V}(x)$ to be negative will naturally lead to a positive definite $V(x)$.

Let's reconsider the structure of $\nabla V(x)$. A more general approach for constructing Lyapunov functions is to select $\nabla V(x)$ such that $\nabla V(x) \cdot f(x) = -g(x)$ and $\nabla V(x)$ is integrable.

**(Reference: While Khalil and Slotine & Li discuss Lyapunov functions extensively, the "Variable Gradient Method" as a specific named technique for *constructing* Lyapunov functions isn't as prominently featured or detailed as other methods. Its core idea is related to the integrability conditions of vector fields which is a broader concept in differential geometry. For a deeper dive into constructive methods, one might need to consult more specialized texts on differential equations or control theory that focus on invariant manifolds or geometric methods.)**

**Important Point:** The variable gradient method is theoretically sound but practically difficult to implement for complex systems due to the difficulty in solving the resulting partial differential equations for $\phi(x)$ and then integrating to find $V(x)$.

---

## 3. La-Salle's Invariance Principle (La-Salle Theorems)

La-Salle's theorems provide a powerful extension to Lyapunov's direct method. While Lyapunov's theorems require $\dot{V}(x)$ to be negative definite for asymptotic stability, La-Salle's theorems relax this condition to $\dot{V}(x)$ being negative **semi-definite**. This allows us to conclude asymptotic stability even if $\dot{V}(x)$ is zero on a set larger than just the origin.

**Key Idea:** If we have a Lyapunov function $V(x)$ with $\dot{V}(x) \leq 0$ in a region, the system states will remain in the region where $V(x)$ is bounded. La-Salle's principle tells us that the system will eventually approach the largest invariant set within the region where $\dot{V}(x) = 0$.

**Theorems:**

**La-Salle's Theorem 1 (General Invariance Principle):**
Let $\Omega$ be a closed and bounded set in $\mathbb{R}^n$ that is invariant with respect to the system $\dot{x} = f(x)$. Let $V: \Omega \to \mathbb{R}$ be a continuously differentiable function such that $\dot{V}(x) = \nabla V(x) \cdot f(x) \leq 0$ for all $x \in \Omega$. Then, for any initial state $x(0) \in \Omega$, the state trajectory $x(t)$ converges to the largest invariant set $M$ contained in the set $E = \{x \in \Omega \mid \dot{V}(x) = 0\}$.

**La-Salle's Theorem 2 (For Asymptotic Stability):**
Let $x=0$ be an equilibrium point of the system $\dot{x} = f(x)$. Let $V(x)$ be a continuously differentiable function such that $V(x)$ is positive definite and $\dot{V}(x) \leq 0$ in a neighborhood $D$ of the origin. Let $E = \{x \in D \mid \dot{V}(x) = 0\}$. If the largest invariant set $M$ contained in $E$ is $M = \{0\}$, then the equilibrium point $x=0$ is asymptotically stable.

**(Reference: Khalil, Chapter 4; Slotine & Li, Chapter 2; Vidyasagar, Chapter 5)**

**Explanation:**

*   **Invariant Set:** A set $S$ is invariant if, for any $x \in S$, the trajectory starting from $x$ remains in $S$ for all $t \geq 0$.
*   **Largest Invariant Set:** Within the set $E$ (where $\dot{V}(x)=0$), the system might evolve in a non-trivial way if $E$ contains more than just the origin. La-Salle's theorem states that the system will eventually settle into the *largest* possible set within $E$ where the trajectories stay put.
*   **Why it works:** If $\dot{V}(x) \leq 0$, then $V(x)$ is non-increasing. This means $x(t)$ stays within a level set of $V$. If $V$ is bounded, then $x(t)$ stays within a bounded set. The condition $\dot{V}(x) \leq 0$ implies that the system cannot "escape" from the region where $V$ is decreasing. If the only place where $\dot{V}(x)$ is zero (and hence $V$ stops decreasing) is the origin, then the system must converge to the origin.

**Example:**

Consider the system:
$$ \dot{x}_1 = -x_1 + x_1 x_2 $$
$$ \dot{x}_2 = -x_2 - x_1 x_2 $$
The equilibrium point is $(0,0)$.

Let's try the Lyapunov function $V(x) = \frac{1}{2}x_1^2 + \frac{1}{2}x_2^2$.
This is positive definite and $V(0)=0$.

Now calculate $\dot{V}(x)$:
$$ \dot{V}(x) = x_1 \dot{x}_1 + x_2 \dot{x}_2 $$
$$ \dot{V}(x) = x_1 (-x_1 + x_1 x_2) + x_2 (-x_2 - x_1 x_2) $$
$$ \dot{V}(x) = -x_1^2 + x_1^2 x_2 - x_2^2 - x_1 x_2^2 $$
$$ \dot{V}(x) = -(x_1^2 + x_2^2) + x_1 x_2 (x_1 - x_2) $$

This $\dot{V}(x)$ is not negative definite everywhere. For instance, if $x_1 = x_2 = \epsilon$ (small), then $\dot{V}(x) \approx -2\epsilon^2$. If $x_1 = 2, x_2 = 1$, then $\dot{V}(x) = -(4+1) + 2 \cdot 1 (2-1) = -5 + 2 = -3$.
However, if $x_1 = 1, x_2 = 2$, then $\dot{V}(x) = -(1+4) + 1 \cdot 2 (1-2) = -5 - 2 = -7$.
If $x_1=1, x_2=1$, $\dot{V}(x) = -1^2 - 1^2 + 1 \cdot 1 (1-1) = -2$.

This function is not clearly negative definite. Let's try a different $V(x)$ or analyze the set $E$.

Let's analyze the set $E$ where $\dot{V}(x) = 0$.
$E = \{x \in D \mid -(x_1^2 + x_2^2) + x_1 x_2 (x_1 - x_2) = 0 \}$.
The origin $(0,0)$ is in $E$.
If $x_1 = x_2$, then $\dot{V}(x) = -(x_1^2 + x_1^2) + x_1^2 (x_1 - x_1) = -2x_1^2 \leq 0$.
So, if $x_1=x_2$, $\dot{V}(x)$ is negative semi-definite.
Consider the set $E_0 = \{(x_1, x_2) \mid x_1 = x_2 \}$. On this set, $\dot{V}(x) = -2x_1^2$.
For trajectories starting on the line $x_1=x_2$, they will converge to the origin.

Let's try a different approach for this system, maybe a simpler Lyapunov function.
Consider $V(x) = \frac{1}{2}x_1^2 + \frac{1}{2}x_2^2$. We found $\dot{V}(x) = -(x_1^2+x_2^2) + x_1^2 x_2 - x_1 x_2^2$.

What if we consider the case where $x_1 x_2 (x_1 - x_2) > x_1^2 + x_2^2$? This can happen for certain values.
For example, if $x_1=3, x_2=2$:
$\dot{V} = -(9+4) + 3 \cdot 2 (3-2) = -13 + 6 = -7$.
If $x_1=4, x_2=3$:
$\dot{V} = -(16+9) + 4 \cdot 3 (4-3) = -25 + 12 = -13$.

Let's use La-Salle's theorem on a different system.
Consider $\dot{x}_1 = -x_1 - x_1 x_2^2$ and $\dot{x}_2 = -x_2 + x_1^2 x_2$.
Equilibrium at $(0,0)$.
Let $V(x) = \frac{1}{2}x_1^2 + \frac{1}{2}x_2^2$.
$$ \dot{V}(x) = x_1 \dot{x}_1 + x_2 \dot{x}_2 = x_1(-x_1 - x_1 x_2^2) + x_2(-x_2 + x_1^2 x_2) $$
$$ \dot{V}(x) = -x_1^2 - x_1^2 x_2^2 - x_2^2 + x_1^2 x_2^2 $$
$$ \dot{V}(x) = -(x_1^2 + x_2^2) $$
This is negative definite, so $(0,0)$ is asymptotically stable by Lyapunov's direct method.

Now consider the system:
$$ \dot{x}_1 = -x_1 + x_1 x_2^2 $$
$$ \dot{x}_2 = -x_2 - x_1^2 x_2 $$
Equilibrium at $(0,0)$.
Let $V(x) = \frac{1}{2}x_1^2 + \frac{1}{2}x_2^2$.
$$ \dot{V}(x) = x_1 \dot{x}_1 + x_2 \dot{x}_2 = x_1(-x_1 + x_1 x_2^2) + x_2(-x_2 - x_1^2 x_2) $$
$$ \dot{V}(x) = -x_1^2 + x_1^2 x_2^2 - x_2^2 - x_1^2 x_2^2 $$
$$ \dot{V}(x) = -(x_1^2 + x_2^2) $$
Again, this is negative definite, so $(0,0)$ is asymptotically stable.

Consider a system where La-Salle is crucial:
$$ \dot{x}_1 = -x_1 + x_1 x_2 $$
$$ \dot{x}_2 = -x_2 - x_1 x_2 $$
Equilibrium at $(0,0)$.
Let $V(x) = \frac{1}{2}x_1^2 + \frac{1}{2}x_2^2$.
$$ \dot{V}(x) = x_1(-x_1 + x_1 x_2) + x_2(-x_2 - x_1 x_2) $$
$$ \dot{V}(x) = -x_1^2 + x_1^2 x_2 - x_2^2 - x_1 x_2^2 $$
$$ \dot{V}(x) = -(x_1^2 + x_2^2) + x_1 x_2 (x_1 - x_2) $$
This $\dot{V}(x)$ is negative semi-definite if $x_1 x_2 (x_1 - x_2) \leq x_1^2 + x_2^2$.
The set $E$ where $\dot{V}(x) = 0$ is given by:
$x_1^2 + x_2^2 = x_1 x_2 (x_1 - x_2)$.

Let's examine the invariant sets of $E$.
Consider the case $x_1=x_2$. Then $\dot{V}(x) = -(x_1^2 + x_1^2) + x_1^2(x_1-x_1) = -2x_1^2$.
So, on the line $x_1 = x_2$, $\dot{V}(x) \leq 0$.
The set where $\dot{V}(x) = 0$ when $x_1=x_2$ is when $x_1=0$, which means $x_1=x_2=0$. This is the origin.
So, if the trajectory is restricted to the line $x_1=x_2$, it converges to the origin.

What if $x_1=0$? Then $\dot{V}(x) = -x_2^2$. This means trajectories starting on the $x_2$-axis converge to the origin.
What if $x_2=0$? Then $\dot{V}(x) = -x_1^2$. This means trajectories starting on the $x_1$-axis converge to the origin.

Let's consider the set $E$ more carefully.
$x_1^2 + x_2^2 - x_1^2 x_2 + x_1 x_2^2 = 0$.
If $x_1=1$, $1+x_2^2 - x_2 + x_2^2 = 0 \implies 2x_2^2 - x_2 + 1 = 0$. Discriminant is $1 - 4(2)(1) = -7 < 0$, no real solutions for $x_2$.
This implies that for $x_1=1$, the only point on $E$ is the origin (if $x_2=0$).

Consider the specific set $M = \{(x_1, x_2) \mid x_1=0, x_2=0\}$. This is the origin.
Let's check if $M$ is an invariant set. Yes, the origin is an equilibrium.
Is $M$ contained in $E$? Yes, $\dot{V}(0)=0$.
Is $M$ the largest invariant set in $E$?
Suppose there is another invariant set $S$ in $E$. If $S$ contains a point $(x_1^*, x_2^*)$ other than the origin, then trajectories starting from $(x_1^*, x_2^*)$ must stay in $S$, and thus in $E$.
This implies $\dot{V}(x)=0$ for all $x \in S$.

If we can show that the only invariant set contained in $E$ is the origin $\{0\}$, then by La-Salle's theorem, the equilibrium is asymptotically stable.

For the system $\dot{x}_1 = -x_1 + x_1 x_2$, $\dot{x}_2 = -x_2 - x_1 x_2$, and $V(x) = \frac{1}{2}x_1^2 + \frac{1}{2}x_2^2$, $\dot{V}(x) = -(x_1^2 + x_2^2) + x_1 x_2 (x_1 - x_2)$.
The set $E = \{(x_1, x_2) \mid x_1^2 + x_2^2 - x_1^2 x_2 + x_1 x_2^2 = 0 \}$.
If $x_1=x_2$, then $2x_1^2 = 0$, so $x_1=0$, which implies $x_1=x_2=0$. So the line $x_1=x_2$ intersects $E$ only at the origin.
If $x_1 \neq 0$ and $x_2 \neq 0$:
Divide by $x_1^2$: $1 + (x_2/x_1)^2 - (x_2/x_1) + (x_2/x_1)^2 (x_2/x_1) = 0$. Let $r = x_2/x_1$.
$1 + r^2 - r + r^3 = 0$.
$r^3 + r^2 - r + 1 = 0$.
If $r=-1$, $(-1)^3 + (-1)^2 - (-1) + 1 = -1 + 1 + 1 + 1 = 2 \neq 0$.
If $r=1$, $1+1-1+1 = 2 \neq 0$.
Let's check if there are any real roots. Consider $p(r) = r^3 + r^2 - r + 1$. $p'(r) = 3r^2 + 2r - 1 = (3r-1)(r+1)$.
Roots of $p'(r)$ are $r=1/3$ and $r=-1$.
Local maximum at $r=-1$, $p(-1)=2$. Local minimum at $r=1/3$, $p(1/3) = (1/27) + (1/9) - (1/3) + 1 = (1+3-9+27)/27 = 22/27 > 0$.
Since the local minimum is positive, $p(r)$ is always positive for $r \in \mathbb{R}$.
This means the equation $r^3 + r^2 - r + 1 = 0$ has no real solutions for $r=x_2/x_1$.
Therefore, the only point where $x_1^2 + x_2^2 = x_1 x_2 (x_1 - x_2)$ holds is $(0,0)$.
So, $E = \{(0,0)\}$.
Since $E$ only contains the origin, and the origin is an invariant set, the largest invariant set contained in $E$ is the origin itself.
Thus, by La-Salle's theorem, the equilibrium $(0,0)$ is asymptotically stable.

**(Corresponds to CO2)**

**When is La-Salle more useful than Lyapunov?**
La-Salle is useful when $\dot{V}(x)$ is negative semi-definite, which is a weaker condition than negative definite required by Lyapunov's direct method for asymptotic stability. This often happens with systems that have "energy-like" functions but don't strictly decrease everywhere.

---

## 4. Connection to Course Outcomes

*   **CO1: Analyse the qualitative behaviour of nonlinear systems about their equilibrium points. (Knowledge Level: K3)**
    *   Both Lyapunov's direct method and La-Salle's theorems are fundamental tools for analyzing the qualitative behavior (specifically stability and asymptotic stability) of nonlinear systems around their equilibrium points. Understanding these methods allows us to determine if trajectories starting near an equilibrium will stay near it or converge to it.
*   **CO2: Analyse the stability of nonlinear systems. (Knowledge Level: K3)**
    *   This is the primary focus of Lyapunov stability theory, including the variable gradient method (as a constructive tool for finding Lyapunov functions) and La-Salle's theorems (as extensions for weaker conditions).
*   **CO3: Analyse the behaviour of nonlinear systems using frequency domain analysis. (Knowledge Level: K2)**
    *   While this module primarily uses time-domain Lyapunov methods, understanding system behavior is key. Frequency domain methods (like Nyquist, Bode) are alternative tools for stability analysis, often applied to linear systems or linearized nonlinear systems. This module complements those by providing a direct time-domain analysis for nonlinear systems.
*   **CO4: Design feedback controller for nonlinear systems. (Knowledge Level: K3)**
    *   Lyapunov functions are crucial in controller design. For instance, in designing controllers for asymptotic stabilization, one often seeks a controller that results in a system whose state equation, when analyzed with a chosen Lyapunov function, yields a negative definite $\dot{V}(x)$. The variable gradient method can sometimes provide insights into the structure of stabilizing controllers, and La-Salle's theorems can help prove the stability of the closed-loop system even if the $\dot{V}(x)$ is not strictly negative everywhere.

---

## 5. Practice Questions and Exercises

**Question 1:**
Consider the system:
$$ \dot{x}_1 = -x_1 + x_1 x_2 $$
$$ \dot{x}_2 = -x_2 - x_1 x_2 $$
Is the origin $(0,0)$ asymptotically stable? Use a Lyapunov function and the appropriate theorem.

**Answer 1:**
Let $V(x) = \frac{1}{2}x_1^2 + \frac{1}{2}x_2^2$. $V(x)$ is positive definite and $V(0)=0$.
$\dot{V}(x) = x_1 \dot{x}_1 + x_2 \dot{x}_2 = x_1(-x_1 + x_1 x_2) + x_2(-x_2 - x_1 x_2)$
$\dot{V}(x) = -x_1^2 + x_1^2 x_2 - x_2^2 - x_1 x_2^2 = -(x_1^2 + x_2^2) + x_1 x_2 (x_1 - x_2)$.
This is not negative definite everywhere.
We must use La-Salle's theorem.
The set $E = \{x \in \mathbb{R}^2 \mid \dot{V}(x) = 0 \}$.
$E = \{(x_1, x_2) \mid x_1^2 + x_2^2 - x_1^2 x_2 + x_1 x_2^2 = 0 \}$.
As shown in the example analysis, the only real solution to $x_1^2 + x_2^2 = x_1 x_2 (x_1 - x_2)$ is $(x_1, x_2) = (0,0)$.
Thus, $E = \{(0,0)\}$.
The largest invariant set contained in $E$ is the origin itself, $M = \{(0,0)\}$.
Since $V(x)$ is positive definite, $\dot{V}(x) \leq 0$ in a neighborhood of the origin, and the largest invariant set in $E$ is $\{0\}$, by La-Salle's theorem, the origin $(0,0)$ is asymptotically stable.

**Question 2:**
Consider the system:
$$ \dot{x}_1 = -x_1^3 $$
$$ \dot{x}_2 = -x_2^3 $$
Use a Lyapunov function to prove asymptotic stability of the origin. Is $\dot{V}(x)$ positive or negative definite for your choice of $V(x)$?

**Answer 2:**
Let $V(x) = \frac{1}{2}x_1^2 + \frac{1}{2}x_2^2$. $V(x)$ is positive definite and $V(0)=0$.
$\dot{V}(x) = x_1 \dot{x}_1 + x_2 \dot{x}_2 = x_1 (-x_1^3) + x_2 (-x_2^3)$
$\dot{V}(x) = -x_1^4 - x_2^4$.
Since $-x_1^4 \leq 0$ and $-x_2^4 \leq 0$, $\dot{V}(x) \leq 0$.
Also, $\dot{V}(x) = 0$ only if $x_1=0$ and $x_2=0$. Thus, $\dot{V}(x)$ is negative definite.
By Lyapunov's direct method, the origin $(0,0)$ is asymptotically stable.

**Question 3:**
Explain the difference between the conditions for asymptotic stability required by Lyapunov's direct method and La-Salle's invariance principle.

**Answer 3:**
*   **Lyapunov's Direct Method:** Requires a positive definite Lyapunov function $V(x)$ such that its time derivative $\dot{V}(x)$ is **negative definite** in a neighborhood of the equilibrium point. This directly implies that the system state must move towards the origin, as the "energy" is strictly decreasing everywhere except at the origin.
*   **La-Salle's Invariance Principle:** Requires a positive definite Lyapunov function $V(x)$ such that its time derivative $\dot{V}(x)$ is **negative semi-definite** in a neighborhood of the equilibrium point. It then analyzes the set $E = \{x \mid \dot{V}(x) = 0\}$. If the largest invariant set within $E$ is just the origin, then asymptotic stability is concluded. This is a weaker condition, allowing $\dot{V}(x)$ to be zero on larger sets, as long as those sets do not contain any non-trivial invariant subsets other than the origin itself.

---

## 6. Important Points to Remember

*   **Lyapunov Functions:** Finding a suitable Lyapunov function is the main challenge. There's no universal method to find one for any given nonlinear system.
*   **Positive Definiteness:** $V(x)$ must be strictly positive for $x \neq 0$ and $V(0)=0$.
*   **$\dot{V}(x)$ Conditions:**
    *   For stability: $\dot{V}(x) \leq 0$ (negative semi-definite).
    *   For asymptotic stability: $\dot{V}(x) < 0$ (negative definite).
    *   La-Salle extends asymptotic stability to $\dot{V}(x) \leq 0$ if the largest invariant set in $\{x \mid \dot{V}(x)=0\}$ is the origin.
*   **Variable Gradient Method:** A theoretical technique to construct Lyapunov functions by ensuring the gradient is integrable, but often computationally impractical.
*   **La-Salle's Theorem:** A powerful extension of Lyapunov's method, useful when $\dot{V}(x)$ is only negative semi-definite. It allows proving asymptotic stability by identifying the set where $\dot{V}(x) = 0$ and showing that the system eventually converges to the origin within this set.
*   **Invariant Set:** A set where trajectories starting within it always remain within it. The origin is always an invariant set.

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=gI-qXk7XojA) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=F_4HkL5r4n0) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=8XG7U5yN668) |


## 7. Textbook References

*   **Khalil, Hassan K. *Nonlinear Systems*. Prentice-Hall International (UK), 2002.**
    *   Chapter 4 provides a thorough treatment of Lyapunov stability theory, including the direct method, definitions of stability, asymptotic stability, and the conditions for existence of Lyapunov functions. La-Salle's theorems are also discussed here as extensions.
*   **Slotine, Jean-Jacques E., and Weiping Li. *Applied Nonlinear Control*. Prentice-Hall, 1991.**
    *   Chapter 2 covers Lyapunov stability theory in detail, emphasizing its practical application. It introduces Lyapunov functions, the direct method, and La-Salle's invariance principle with clear examples.
*   **Isidori, Alberto. *Nonlinear Control Systems: An Introduction*. Springer-Verlag, 1985.**
    *   Offers a more geometric perspective and can provide deeper insights into the theoretical underpinnings of stability analysis for nonlinear systems.
*   **Vidyasagar, M. *Nonlinear System Analysis, Stability and Control*. Prentice-Hall, India, 1991.**
    *   Another valuable resource for understanding the theoretical foundations of stability analysis, including Lyapunov methods and their extensions.

This comprehensive set of notes covers the variable gradient method and La-Salle theorems within the context of Lyapunov stability theory, aligning with the learning outcomes and course objectives for nonlinear control systems.