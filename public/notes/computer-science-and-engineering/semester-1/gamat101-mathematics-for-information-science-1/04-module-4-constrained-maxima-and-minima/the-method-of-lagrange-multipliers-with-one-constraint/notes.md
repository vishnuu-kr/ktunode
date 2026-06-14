# The Method of Lagrange Multipliers with one constraint

<!-- SECTION_1_START -->
# Lagrange Multipliers with One Constraint — Core Technical Definition & Intuitive Overview

## 1.1 Formal Definition (KTU 2024 Scheme Terminology)

> [!NOTE]
> **Constrained Optimization Problem (One Constraint)**
> A *constrained optimization problem in two or three variables* with a **single equality constraint** is defined as the task of finding the local (or global) extremum of a real-valued *objective function* $f: \mathbb{R}^n \to \mathbb{R}$ subject to an *equality constraint* $g(x_1, x_2, \dots, x_n) = c$, where $c \in \mathbb{R}$ is a constant. Mathematically, the problem is stated as:
> $$\begin{aligned} \text{Optimize} \quad & f(x_1, x_2, \dots, x_n) \\ \text{subject to} \quad & g(x_1, x_2, \dots, x_n) = c \end{aligned}$$

> [!IMPORTANT]
> **The Method of Lagrange Multipliers (Joseph-Louis Lagrange, 1788)**
> For a continuously differentiable objective function $f$ and a $\mathcal{C}^1$ constraint function $g$ with $\nabla g \neq \mathbf{0}$ on the constraint set, every local extremum $(a_1, a_2, \dots, a_n)$ of $f$ subject to $g = c$ must admit a real scalar $\lambda$ (called the **Lagrange multiplier**) such that the augmented scalar field, called the **Lagrangian**,
> $$L(x_1, \dots, x_n, \lambda) \;=\; f(x_1, \dots, x_n) \;-\; \lambda\bigl[g(x_1, \dots, x_n) - c\bigr]$$
> satisfies the simultaneous first-order necessary conditions:
> $$\frac{\partial L}{\partial x_i} = 0 \;\; \text{for all } i = 1, \dots, n, \qquad \frac{\partial L}{\partial \lambda} = 0$$
> Equivalently, in vector form: $\nabla f = \lambda \, \nabla g$ and $g = c$.

## 1.2 Conceptual Analogy — Hiking on a Mountain with a Fence

Imagine you are **hiking on a mountain** whose elevation at any point $(x,y)$ is given by the *objective function* $f(x,y)$ (e.g., height in metres). Your task is to find the **highest or lowest point** you can reach — but there is a twist: a **curved fence** has been erected on the mountain, and its equation is given by the *constraint* $g(x,y) = c$. You are **not allowed to leave the fence line**.

Now observe three critical facts:

1. **You are confined to the curve** $g(x,y)=c$. So you cannot walk "anywhere" — only along the fence.
2. At any point on the fence, the **direction you are free to walk** is the *tangent* to the curve $g = c$.
3. The **gradient** $\nabla f$ points in the steepest *uphill* direction. For an extremum on the curve, walking even an infinitesimal step along the tangent should **not change your height**. Therefore, $\nabla f$ must be **perpendicular to the tangent** of the constraint curve.

Since $\nabla g$ is also perpendicular to the curve $g=c$ (gradient is normal to its level set), the two gradients must be **parallel**. This parallel condition is exactly:

$$\nabla f \;=\; \lambda \, \nabla g$$

The scalar $\lambda$ is precisely the *gear ratio* between the two perpendicular vectors — the **Lagrange multiplier**.

> [!TIP]
> **Why a single $\lambda$ is enough:** The condition "two non-zero vectors are parallel" gives **one equation** per dimension (2 equations in 2D, 3 equations in 3D). Adding the constraint $g=c$ yields the correct number of equations to solve for the unknowns.

## 1.3 Physical Constants & Standard Metrics

- The multiplier $\lambda$ has the **units of $\frac{\text{units of } f}{\text{units of } g}$**. For example, if $f$ measures *cost* (dollars) and $g$ measures *energy* (joules), then $\lambda$ has units of **dollars per joule** — economically interpreted as the *shadow price* of relaxing the constraint by one unit.
- The method assumes $\nabla g \neq \mathbf{0}$ at the candidate point (the **regularity condition**). If $\nabla g = \mathbf{0}$, the constraint is *singular* and the theorem does not apply.
- The candidate point need not be a strict extremum — the conditions are **necessary, not sufficient**.

> [!VISUALIZATION CONTROL]
> **Concept:** Level curves of $f$ (dotted) tangent to the constraint curve $g=c$ (solid).
> **GeoGebra / Desmos Input Equations:**
> * `f(x,y) = x^2 + y^2`  *(family of level curves — concentric circles)*
> * `g(x,y) = x*y - 1`    *(constraint — rectangular hyperbola)*
> **Visual Description:** The student should observe the level curves of $f$ (concentric circles centred at the origin). The hyperbola $g=1$ passes through the first and third quadrants. The two curves are **tangent** at the points $(1,1)$ and $(-1,-1)$. At these tangency points, the **normals** to both curves coincide, which is the geometric essence of $\nabla f = \lambda \nabla g$.
