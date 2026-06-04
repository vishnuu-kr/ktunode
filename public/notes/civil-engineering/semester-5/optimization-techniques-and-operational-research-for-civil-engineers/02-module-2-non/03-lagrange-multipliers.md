---
title: "Lagrange multipliers"
subject: "OPTIMIZATION TECHNIQUES AND OPERATIONAL RESEARCH FOR CIVIL ENGINEERS"
module: "Module 2: Non"
branch: "Civil Engineering"
semester: 5
topicId: "689f15cd56b5e963ba810fa3"
status: "completed"
scrapedAt: "2026-05-20T18:50:09.904Z"
---
# Module 2: Non-Linear Optimization - Lagrange Multipliers

## 1. Introduction to Constrained Optimization

In civil engineering, many optimization problems involve finding the best design or plan subject to certain limitations or constraints. For instance, we might want to minimize the cost of a bridge while ensuring it meets strength requirements, or maximize the yield of a construction project within a budget.

*   **Unconstrained Optimization:** Finding the minimum or maximum of a function without any restrictions.
*   **Constrained Optimization:** Finding the minimum or maximum of a function subject to one or more constraints.

### Types of Constraints:

*   **Equality Constraints:** Conditions that must be met exactly. Represented as $g(x_1, x_2, ..., x_n) = c$.
*   **Inequality Constraints:** Conditions that must be satisfied to a certain degree or within a range. Represented as $h(x_1, x_2, ..., x_n) \le d$ or $h(x_1, x_2, ..., x_n) \ge d$.

This module focuses on optimization problems with **equality constraints**.

## 2. The Problem of Constrained Optimization

Consider a general problem of minimizing (or maximizing) an objective function $f(x_1, x_2, ..., x_n)$ subject to one or more equality constraints:

Minimize (or Maximize): $f(x)$
Subject to:
$g_1(x) = c_1$
$g_2(x) = c_2$
...
$g_m(x) = c_m$

where $x = (x_1, x_2, ..., x_n)$ is the vector of decision variables.

## 3. The Method of Lagrange Multipliers: The Core Idea

The Method of Lagrange Multipliers is a powerful technique for finding the local maxima and minima of a differentiable function subject to equality constraints. It transforms a constrained optimization problem into an unconstrained one by introducing new variables called **Lagrange multipliers**.

### Intuition Behind Lagrange Multipliers

Imagine you are walking on a hilly terrain (representing the objective function $f(x)$) and you are restricted to walk along a specific path (representing the constraint $g(x) = c$). The points where you are at the highest or lowest altitude *along that path* are the points of interest.

At these optimal points, the direction of steepest ascent (or descent) of the objective function must be perpendicular to the constraint boundary. This is because if there were a component of the gradient along the constraint, you could move further uphill (or downhill) along the constraint itself.

Mathematically, this means that at an optimal point, the gradient of the objective function ($\nabla f$) is parallel to the gradient of the constraint function ($\nabla g$).

$$ \nabla f(x) = \lambda \nabla g(x) $$

where $\lambda$ is the Lagrange multiplier.

## 4. Formulation of the Lagrangian Function

To implement this idea, we construct a new function called the **Lagrangian function**, denoted by $L$. For a problem with one objective function $f(x)$ and one equality constraint $g(x) = c$, the Lagrangian is defined as:

$$ L(x, \lambda) = f(x) - \lambda(g(x) - c) $$

where:
*   $x = (x_1, x_2, ..., x_n)$ are the decision variables.
*   $\lambda$ is the Lagrange multiplier.

**Note:** The sign of $\lambda$ can be positive or negative. Conventionally, it's often written as $f(x) - \lambda(g(x) - c)$ for minimization and $f(x) + \lambda(g(x) - c)$ for maximization. However, the core principle remains the same as $\lambda$ can absorb any sign changes. The critical point is that $\nabla f$ and $\nabla g$ are parallel.

### Interpretation of the Lagrange Multiplier ($\lambda$)

The Lagrange multiplier $\lambda$ has a significant economic or engineering interpretation. It represents the **rate of change of the optimal value of the objective function with respect to a small change in the constraint value**.

For instance, if $f$ is cost and $g=c$ is the available budget, $\lambda$ would indicate how much the minimum cost would increase if the budget were increased by one unit. This is often referred to as the **shadow price**.

## 5. Steps to Solve Constrained Optimization Problems using Lagrange Multipliers

For a problem with objective function $f(x)$ and $m$ equality constraints $g_i(x) = c_i$ for $i=1, ..., m$:

1.  **Formulate the Lagrangian Function:**
    $$ L(x_1, ..., x_n, \lambda_1, ..., \lambda_m) = f(x) - \sum_{i=1}^{m} \lambda_i (g_i(x) - c_i) $$
    or
    $$ L(x_1, ..., x_n, \lambda_1, ..., \lambda_m) = f(x) + \sum_{i=1}^{m} \lambda_i (c_i - g_i(x)) $$
    (The second form is often preferred for ease of derivation, as it aligns $\nabla f$ and $\nabla g$ directly in the same direction if $\lambda_i > 0$ for minimization). Let's stick with the first form for consistency in our derivation of partial derivatives.

2.  **Calculate Partial Derivatives:** Find the partial derivative of the Lagrangian with respect to each decision variable ($x_j$) and each Lagrange multiplier ($\lambda_i$).

    $$ \frac{\partial L}{\partial x_j} = \frac{\partial f}{\partial x_j} - \sum_{i=1}^{m} \lambda_i \frac{\partial g_i}{\partial x_j} = 0 \quad \text{for } j = 1, ..., n $$

    $$ \frac{\partial L}{\partial \lambda_i} = -(g_i(x) - c_i) = 0 \quad \text{for } i = 1, ..., m $$

3.  **Set Derivatives to Zero and Solve the System of Equations:** The second set of partial derivatives simplifies to the original constraint equations:
    $$ g_i(x) - c_i = 0 \quad \implies \quad g_i(x) = c_i \quad \text{for } i = 1, ..., m $$
    This gives us a system of $n+m$ equations with $n+m$ unknowns ($x_1, ..., x_n, \lambda_1, ..., \lambda_m$).

4.  **Find Candidate Points:** Solve the system of equations to find the values of $x$ and $\lambda$ that satisfy the first-order conditions. These are the candidate points for optima.

5.  **Test Candidate Points:** The method of Lagrange multipliers only finds necessary conditions for optimality. To determine if a candidate point is a local maximum, minimum, or saddle point, we typically need to use other methods, such as the second-order conditions (Hessian matrix of the Lagrangian) or by evaluating the objective function at these points and comparing them. For simple problems, evaluating the objective function is often sufficient.

### Important Point: Number of Equations and Variables

The total number of equations is $n$ (from $\partial L / \partial x_j = 0$) plus $m$ (from $\partial L / \partial \lambda_i = 0$), resulting in $n+m$ equations. The total number of variables is $n$ (the decision variables) plus $m$ (the Lagrange multipliers), also totaling $n+m$. This ensures that the system is usually solvable.

## 6. Examples in Civil Engineering Contexts

### Example 1: Minimizing Cost of a Rectangular Foundation

A civil engineer needs to design a rectangular foundation with a fixed area of 200 $m^2$. The cost of the foundation is proportional to its perimeter. Find the dimensions of the foundation that minimize the cost.

*   **Objective Function:** Minimize cost, which is proportional to the perimeter. Let the dimensions be length $x$ and width $y$.
    Minimize $f(x, y) = 2x + 2y$ (Cost proportional to perimeter)

*   **Constraint:** The area must be 200 $m^2$.
    $g(x, y) = xy = 200$

*   **Lagrangian Function:**
    $L(x, y, \lambda) = (2x + 2y) - \lambda(xy - 200)$

*   **Partial Derivatives:**
    1.  $\frac{\partial L}{\partial x} = 2 - \lambda y = 0 \implies \lambda y = 2$ (1)
    2.  $\frac{\partial L}{\partial y} = 2 - \lambda x = 0 \implies \lambda x = 2$ (2)
    3.  $\frac{\partial L}{\partial \lambda} = -(xy - 200) = 0 \implies xy = 200$ (3)

*   **Solving the System:**
    From (1), $y = 2/\lambda$.
    From (2), $x = 2/\lambda$.
    Substitute these into (3):
    $(2/\lambda)(2/\lambda) = 200$
    $4/\lambda^2 = 200$
    $\lambda^2 = 4/200 = 1/50$
    $\lambda = \pm 1/\sqrt{50} = \pm 1/(5\sqrt{2})$

    If $\lambda = 1/(5\sqrt{2})$:
    $x = 2 / (1/(5\sqrt{2})) = 10\sqrt{2}$
    $y = 2 / (1/(5\sqrt{2})) = 10\sqrt{2}$

    If $\lambda = -1/(5\sqrt{2})$:
    $x = 2 / (-1/(5\sqrt{2})) = -10\sqrt{2}$
    $y = 2 / (-1/(5\sqrt{2})) = -10\sqrt{2}$
    Since dimensions cannot be negative, we disregard the negative $\lambda$ solution.

*   **Candidate Point:** $x = 10\sqrt{2} \approx 14.14$ m, $y = 10\sqrt{2} \approx 14.14$ m.
    The foundation is a square.

*   **Verification:**
    Area = $(10\sqrt{2})(10\sqrt{2}) = 100 \times 2 = 200$ $m^2$ (Constraint satisfied).
    Perimeter = $2(10\sqrt{2}) + 2(10\sqrt{2}) = 40\sqrt{2} \approx 56.57$ m.
    Consider other dimensions with area 200 $m^2$, e.g., $x=20$, $y=10$. Perimeter = $2(20)+2(10) = 40+20=60$ m. This is larger, supporting that the square is minimal.

### Example 2: Maximizing Concrete Volume for a Beam

A civil engineer wants to maximize the volume of concrete used for a rectangular beam of fixed length (say, $L=1$ meter for simplicity in calculation) with a fixed cross-sectional area of 0.5 $m^2$. The beam has a width $w$ and a height $h$. The structural design requires that the sum of the width and height be no more than 1.5 meters.

*   **Objective Function:** Maximize volume. Since length is fixed, we maximize the cross-sectional area.
    Maximize $f(w, h) = wh$

*   **Constraints:**
    1.  Cross-sectional area: $wh = 0.5$
    2.  Sum of dimensions: $w + h \le 1.5$

    **Note:** This problem involves an inequality constraint. For now, let's assume the optimal solution will occur when the inequality is active ($w+h = 1.5$). We will address inequality constraints more formally later. For this example, let's first solve with the equality constraint $w+h=1.5$.

    Constraint 1: $g_1(w, h) = wh = 0.5$
    Constraint 2: $g_2(w, h) = w + h = 1.5$

    **Wait!** This is a problem with *two* equality constraints on *two* variables. This usually means there's a unique solution for $w$ and $h$, and we don't need optimization. Let's rephrase to make it a proper optimization problem.

### Example 2 (Revised): Maximizing Concrete Volume within a Material Constraint

A civil engineer is designing a concrete rectangular beam of fixed length $L=1$ meter. The cost of concrete is $C_c$ per $m^3$, and the cost of reinforcing steel is $C_s$ per $m$ for the perimeter. The total budget for concrete and steel is $B$. The beam has width $w$ and height $h$. Maximize the volume of concrete.

*   **Objective Function:** Maximize volume (for fixed length, maximize cross-sectional area)
    Maximize $f(w, h) = wh$

*   **Constraint:** Total cost must be within budget $B$.
    Cost of concrete = $C_c \times \text{Volume} = C_c \times (wh \times L) = C_c \times wh \times 1$ (assuming $L=1$)
    Cost of steel = $C_s \times \text{Perimeter} = C_s \times 2(w+h)$
    Total Cost Constraint: $C_c wh + 2 C_s (w+h) = B$

    Let's assume $C_c=100$, $C_s=50$, and $B=2000$.
    Constraint: $100wh + 100(w+h) = 2000 \implies wh + w + h = 20$

*   **Lagrangian Function:**
    $L(w, h, \lambda) = wh - \lambda(wh + w + h - 20)$

*   **Partial Derivatives:**
    1.  $\frac{\partial L}{\partial w} = h - \lambda(h + 1) = 0 \implies h = \lambda(h+1)$ (1)
    2.  $\frac{\partial L}{\partial h} = w - \lambda(w + 1) = 0 \implies w = \lambda(w+1)$ (2)
    3.  $\frac{\partial L}{\partial \lambda} = -(wh + w + h - 20) = 0 \implies wh + w + h = 20$ (3)

*   **Solving the System:**
    From (1) and (2), we see that $w=h$ because they are both equal to $\lambda$ times a term that depends on the variable itself.
    If $w=h$, then from (3):
    $w^2 + w + w = 20$
    $w^2 + 2w - 20 = 0$

    Using the quadratic formula: $w = \frac{-b \pm \sqrt{b^2 - 4ac}}{2a}$
    $w = \frac{-2 \pm \sqrt{2^2 - 4(1)(-20)}}{2(1)}$
    $w = \frac{-2 \pm \sqrt{4 + 80}}{2}$
    $w = \frac{-2 \pm \sqrt{84}}{2}$
    $w = \frac{-2 \pm 2\sqrt{21}}{2}$
    $w = -1 \pm \sqrt{21}$

    Since width $w$ must be positive:
    $w = -1 + \sqrt{21} \approx -1 + 4.58 = 3.58$ meters.
    Since $w=h$, $h \approx 3.58$ meters.

*   **Candidate Point:** $w \approx 3.58$ m, $h \approx 3.58$ m.
    Maximum Volume (cross-sectional area) = $w \times h \approx (3.58)^2 \approx 12.82$ $m^2$.

*   **Check $\lambda$:**
    From (1): $h = \lambda(h+1) \implies \lambda = \frac{h}{h+1} = \frac{3.58}{3.58+1} = \frac{3.58}{4.58} \approx 0.78$.
    This $\lambda$ value is positive, which is consistent with maximizing the objective function.

## 7. Lagrange Multipliers with Multiple Constraints

When there are multiple equality constraints, we introduce a Lagrange multiplier for each constraint.

Minimize (or Maximize): $f(x_1, ..., x_n)$
Subject to:
$g_1(x_1, ..., x_n) = c_1$
$g_2(x_1, ..., x_n) = c_2$
...
$g_m(x_1, ..., x_n) = c_m$

The Lagrangian function is:
$$ L(x_1, ..., x_n, \lambda_1, ..., \lambda_m) = f(x) - \sum_{i=1}^{m} \lambda_i (g_i(x) - c_i) $$

The conditions for optimality are:
$$ \frac{\partial L}{\partial x_j} = \frac{\partial f}{\partial x_j} - \sum_{i=1}^{m} \lambda_i \frac{\partial g_i}{\partial x_j} = 0 \quad \text{for } j = 1, ..., n $$
$$ \frac{\partial L}{\partial \lambda_i} = -(g_i(x) - c_i) = 0 \quad \text{for } i = 1, ..., m $$

This results in a system of $n+m$ equations for $n+m$ unknowns.

### Example 3: Optimizing Material Usage for a Cylindrical Tank

A civil engineer needs to design a closed cylindrical tank with a fixed volume of 1000 $m^3$. The cost of the material for the top and bottom is twice the cost of the material for the side. Find the dimensions (radius $r$ and height $h$) that minimize the cost of the material.

*   **Objective Function:** Minimize cost. Let the cost per unit area of the side be $k$. Then the cost per unit area of the top/bottom is $2k$.
    Area of side = $2\pi rh$
    Area of top/bottom = $2\pi r^2$
    Cost $C = k(2\pi rh) + 2k(2\pi r^2) = 2\pi k (rh + 2r^2)$
    We can ignore the constant $2\pi k$ and minimize $f(r, h) = rh + 2r^2$.

*   **Constraint:** Fixed volume of 1000 $m^3$.
    Volume $V = \pi r^2 h = 1000$

*   **Lagrangian Function:**
    $L(r, h, \lambda) = (rh + 2r^2) - \lambda(\pi r^2 h - 1000)$

*   **Partial Derivatives:**
    1.  $\frac{\partial L}{\partial r} = h + 4r - \lambda(2\pi rh) = 0 \implies h + 4r = 2\pi \lambda rh$ (1)
    2.  $\frac{\partial L}{\partial h} = r - \lambda(\pi r^2) = 0 \implies r = \pi \lambda r^2$ (2)
    3.  $\frac{\partial L}{\partial \lambda} = -(\pi r^2 h - 1000) = 0 \implies \pi r^2 h = 1000$ (3)

*   **Solving the System:**
    From (2): Since $r > 0$ (radius cannot be zero), we can divide by $r$:
    $1 = \pi \lambda r \implies \lambda = \frac{1}{\pi r}$

    Substitute $\lambda$ into (1):
    $h + 4r = 2\pi \left(\frac{1}{\pi r}\right) rh$
    $h + 4r = \frac{2}{r} rh$
    $h + 4r = 2h$
    $4r = h$

    Now substitute $h=4r$ into the constraint (3):
    $\pi r^2 (4r) = 1000$
    $4\pi r^3 = 1000$
    $r^3 = \frac{1000}{4\pi} = \frac{250}{\pi}$
    $r = \left(\frac{250}{\pi}\right)^{1/3}$ meters.

    Now find $h$:
    $h = 4r = 4 \left(\frac{250}{\pi}\right)^{1/3}$ meters.

*   **Candidate Point:**
    $r = \left(\frac{250}{\pi}\right)^{1/3} \approx (79.58)^{1/3} \approx 4.30$ m
    $h = 4r \approx 4 \times 4.30 = 17.20$ m

*   **Verification:**
    Volume = $\pi r^2 h = \pi r^2 (4r) = 4\pi r^3 = 4\pi \left(\frac{250}{\pi}\right) = 4 \times 250 = 1000$ $m^3$ (Constraint satisfied).
    The optimal dimensions are $r \approx 4.30$ m and $h \approx 17.20$ m.

## 8. Handling Inequality Constraints (Brief Introduction)

The Method of Lagrange Multipliers is primarily for equality constraints. For inequality constraints ($g(x) \le c$), we often use **Karush-Kuhn-Tucker (KKT) conditions**.

The KKT conditions extend the Lagrange multiplier concept to handle inequality constraints. For a minimization problem:
Minimize $f(x)$
Subject to $g_i(x) \le c_i$ for $i=1, ..., m$.

The Lagrangian is:
$L(x, \mu) = f(x) + \sum_{i=1}^{m} \mu_i (g_i(x) - c_i)$
where $\mu_i \ge 0$ are the KKT multipliers.

The KKT conditions are:
1.  **Stationarity:** $\nabla_x L = \nabla f(x) + \sum_{i=1}^{m} \mu_i \nabla g_i(x) = 0$
2.  **Primal Feasibility:** $g_i(x) \le c_i$ for all $i$.
3.  **Dual Feasibility:** $\mu_i \ge 0$ for all $i$.
4.  **Complementary Slackness:** $\mu_i (g_i(x) - c_i) = 0$ for all $i$.

The complementary slackness condition is crucial: it states that for each inequality constraint, *either* the multiplier $\mu_i$ is zero (meaning the constraint is inactive or "slack") *or* the constraint is active ($g_i(x) - c_i = 0$). This means we often need to consider different cases based on which constraints are active.

**Note:** This topic is more advanced and might be covered in more detail in subsequent modules. The primary focus of this section is equality constraints.

## 9. Limitations and Considerations

*   **Differentiability:** The method requires the objective function and constraint functions to be differentiable.
*   **Local Optima:** Lagrange multipliers identify points where the gradient of the objective function is parallel to the gradient of the constraint(s). These are *candidate points* for local maxima or minima. They do not guarantee a global optimum, nor do they distinguish between a local maximum, local minimum, or saddle point without further analysis (like Hessian matrix testing).
*   **Constraint Qualification:** For the method to be strictly valid, certain conditions on the gradients of the constraints (constraint qualifications) must be met at the optimal point. For instance, the gradients of the active constraints should be linearly independent.
*   **Solving the System:** The system of equations derived from the partial derivatives can be difficult or impossible to solve analytically for complex problems. Numerical methods are often required.

## 10. Practice Questions and Exercises

1.  **Problem:** A contractor wants to minimize the surface area of a rectangular tank with a fixed volume of 32 $m^3$. The tank has no top. Find the dimensions that minimize the surface area.
    *   **Hint:** Let the dimensions be length $l$, width $w$, and height $h$. Volume $V = lwh = 32$. Surface area $A = lw + 2lh + 2wh$.

2.  **Problem:** A bridge designer wants to minimize the amount of steel used for the deck support beams. The total bending moment capacity of the beams must be at least 1000 kNm. The cross-section of each beam is a rectangle with width $w$ and height $h$. The bending moment capacity is proportional to $wh^2$. The amount of steel used is proportional to the perimeter of the cross-section ($2w + 2h$). Minimize the steel used subject to the bending moment capacity.
    *   **Hint:** Minimize $f(w, h) = 2w + 2h$ subject to $g(w, h) = wh^2 = k$ (where $k$ is a constant).

3.  **Problem:** A company manufactures precast concrete barriers. Each barrier has a fixed volume of 2 $m^3$. The cost of the mold for the side faces is $100 per square meter, and the cost of the mold for the top and bottom faces is $50 per square meter. Find the dimensions of the barrier that minimize the mold cost. Assume the barrier is a rectangular prism with length $l$, width $w$, and height $h$.
    *   **Hint:** You'll need to consider the cost structure carefully. Let's assume the length $l$ is fixed for simplicity in this problem. Then the volume is $lwh = 2$. The surface area of the sides is $2lh + 2wh$. The surface area of the top/bottom is $2lw$. The cost $C = 100(2lh + 2wh) + 50(2lw)$. Minimize $C$ subject to $lwh=2$.

## 11. Answers to Practice Questions

**1. Answer:**
*   Objective: Minimize $A = lw + 2lh + 2wh$
*   Constraint: $lwh = 32$
*   Lagrangian: $L(l, w, h, \lambda) = lw + 2lh + 2wh - \lambda(lwh - 32)$

*   Partial Derivatives:
    *   $\frac{\partial L}{\partial l} = w + 2h - \lambda wh = 0 \implies \frac{1}{w} + \frac{2}{l} = \lambda$
    *   $\frac{\partial L}{\partial w} = l + 2h - \lambda lh = 0 \implies \frac{1}{w} + \frac{2}{h} = \lambda$
    *   $\frac{\partial L}{\partial h} = 2l + 2w - \lambda lw = 0 \implies \frac{2}{h} + \frac{2}{w} = \lambda$
    *   $\frac{\partial L}{\partial \lambda} = -(lwh - 32) = 0 \implies lwh = 32$

*   From the first three equations, we can deduce relationships:
    *   From $\frac{1}{w} + \frac{2}{l} = \lambda$ and $\frac{1}{w} + \frac{2}{h} = \lambda \implies \frac{2}{l} = \frac{2}{h} \implies l=h$.
    *   From $\frac{1}{w} + \frac{2}{h} = \lambda$ and $\frac{2}{h} + \frac{2}{w} = \lambda \implies \frac{1}{w} = \frac{2}{w}$, which implies $\frac{1}{w} = 0$, which is not possible. Let's recheck the derivatives.

*   Re-calculating Partial Derivatives for Question 1:
    *   $\frac{\partial L}{\partial l} = w + 2h - \lambda wh = 0 \implies w + 2h = \lambda wh$ (1)
    *   $\frac{\partial L}{\partial w} = l + 2h - \lambda lh = 0 \implies l + 2h = \lambda lh$ (2)
    *   $\frac{\partial L}{\partial h} = 2l + 2w - \lambda lw = 0 \implies 2l + 2w = \lambda lw$ (3)
    *   $\frac{\partial L}{\partial \lambda} = -(lwh - 32) = 0 \implies lwh = 32$ (4)

*   Solving the system:
    From (1) and (2):
    If $\lambda=0$, then $w+2h=0$ and $l+2h=0$, which implies $l=w=-2h$. Since dimensions must be positive, $\lambda \ne 0$.
    Divide (1) by $wh$: $\frac{1}{h} + \frac{2}{w} = \lambda$.
    Divide (2) by $lh$: $\frac{1}{h} + \frac{2}{l} = \lambda$.
    Equating these two: $\frac{1}{h} + \frac{2}{w} = \frac{1}{h} + \frac{2}{l} \implies \frac{2}{w} = \frac{2}{l} \implies w = l$.

    Now substitute $l=w$ into (3):
    $2w + 2w = \lambda w^2 \implies 4w = \lambda w^2$. Since $w \ne 0$, $4 = \lambda w \implies \lambda = 4/w$.

    Substitute $l=w$ and $\lambda=4/w$ into (1):
    $w + 2h = (4/w)wh$
    $w + 2h = 4h$
    $w = 2h$.

    So we have $l=w$ and $w=2h$. This means $l=w=2h$.
    Substitute these into the volume constraint (4):
    $(2h)(2h)(h) = 32$
    $4h^3 = 32$
    $h^3 = 8$
    $h = 2$ meters.

    Therefore, $l = w = 2h = 2(2) = 4$ meters.
    **Dimensions:** length = 4 m, width = 4 m, height = 2 m.

**2. Answer:**
*   Objective: Minimize $S = 2w + 2h$
*   Constraint: $wh^2 = k$ (where $k$ is a constant, e.g., $k=1000$ kNm $m^2$ if capacity is $wh^2$)
*   Lagrangian: $L(w, h, \lambda) = 2w + 2h - \lambda(wh^2 - k)$

*   Partial Derivatives:
    *   $\frac{\partial L}{\partial w} = 2 - \lambda h^2 = 0 \implies 2 = \lambda h^2$ (1)
    *   $\frac{\partial L}{\partial h} = 2 - \lambda (2wh) = 0 \implies 2 = 2\lambda wh$ (2)
    *   $\frac{\partial L}{\partial \lambda} = -(wh^2 - k) = 0 \implies wh^2 = k$ (3)

*   Solving the system:
    From (1), $\lambda = 2/h^2$.
    Substitute this into (2):
    $2 = 2(2/h^2) wh$
    $2 = (4/h^2) wh$
    $2 = 4w/h$
    $2h = 4w \implies h = 2w$.

    Substitute $h=2w$ into (3):
    $w(2w)^2 = k$
    $w(4w^2) = k$
    $4w^3 = k$
    $w^3 = k/4$
    $w = (k/4)^{1/3}$.

    Then $h = 2w = 2(k/4)^{1/3}$.

    **For example, if $k=1000$:**
    $w = (1000/4)^{1/3} = (250)^{1/3} \approx 6.30$ m.
    $h = 2w \approx 12.60$ m.
    The optimal dimensions would be $w \approx 6.30$ m and $h \approx 12.60$ m.

**3. Answer:**
*   Assume fixed length $l$. Minimize cost $C = 200lh + 200wh + 100lw$.
*   Constraint: $lwh = 2 \implies wh = 2/l$ (constant if $l$ is fixed).
*   Objective function (simplified by substituting $wh = 2/l$):
    $C = 200l(2/l) + 200w(2/l) + 100lw$
    $C = 400 + 400w/l + 100lw$
    This still has two variables $w$ and $l$. Let's assume the problem implied minimizing cost for a *specific* volume, and $l$ is also a design variable.

*   Let's re-interpret Question 3 to be a more standard Lagrange multiplier problem without a fixed $l$.
    Minimize Cost $C = 200(lh + wh) + 100(lw)$. (Side areas $2lh+2wh$, top/bottom $2lw$).
    Constraint: Volume $V = lwh = 2$.

*   Lagrangian: $L(l, w, h, \lambda) = 200(lh + wh) + 100lw - \lambda(lwh - 2)$

*   Partial Derivatives:
    *   $\frac{\partial L}{\partial l} = 200h + 100w - \lambda wh = 0$ (1)
    *   $\frac{\partial L}{\partial w} = 200h + 100l - \lambda lh = 0$ (2)
    *   $\frac{\partial L}{\partial h} = 200l + 200w - \lambda lw = 0$ (3)
    *   $\frac{\partial L}{\partial \lambda} = -(lwh - 2) = 0 \implies lwh = 2$ (4)

*   Solving the system:
    From (3), $200(l+w) = \lambda lw$.
    Divide by $lw$: $200(1/w + 1/l) = \lambda$.

    From (1) divide by $wh$: $200/w + 100/h = \lambda$.
    From (2) divide by $lh$: $200/l + 100/h = \lambda$.

    Equating the second and third expressions for $\lambda$:
    $200/w + 100/h = 200/l + 100/h$
    $200/w = 200/l \implies w=l$.

    Now equate the first and second expressions for $\lambda$ (using $l=w$):
    $200(1/w + 1/w) = 200/w + 100/h$
    $200(2/w) = 200/w + 100/h$
    $400/w = 200/w + 100/h$
    $200/w = 100/h$
    $2h = w$.

    So we have $l=w$ and $w=2h$. This means $l=w=2h$.
    Substitute these into the volume constraint (4):
    $(2h)(2h)(h) = 2$
    $4h^3 = 2$
    $h^3 = 1/2$
    $h = (1/2)^{1/3} = 1/\sqrt[3]{2}$ meters.

    Then $l = w = 2h = 2/\sqrt[3]{2} = \sqrt[3]{8}/\sqrt[3]{2} = \sqrt[3]{4}$ meters.

    **Dimensions:** $l = \sqrt[3]{4}$ m, $w = \sqrt[3]{4}$ m, $h = 1/\sqrt[3]{2}$ m.
    ($l \approx 1.587$ m, $w \approx 1.587$ m, $h \approx 0.794$ m)

## 12. Key Points to Remember

*   Lagrange multipliers are used for optimization problems with **equality constraints**.
*   The method introduces **Lagrange multipliers** ($\lambda_i$) as new variables.
*   The **Lagrangian function** ($L$) combines the objective function and constraints.
*   The core idea is that at an optimum, the gradient of the objective function is parallel to the gradient of the constraint(s): $\nabla f = \lambda \nabla g$.
*   The partial derivatives of the Lagrangian with respect to decision variables and multipliers form a system of equations to solve.
*   The Lagrange multiplier ($\lambda$) represents the **shadow price** or the sensitivity of the optimal objective function value to a change in the constraint.
*   The method finds **candidate points** for optima, which require further testing to confirm if they are minima, maxima, or saddle points.
*   For multiple constraints, one Lagrange multiplier is introduced for each constraint.
*   Inequality constraints are handled using KKT conditions, which build upon the Lagrange multiplier concept.
