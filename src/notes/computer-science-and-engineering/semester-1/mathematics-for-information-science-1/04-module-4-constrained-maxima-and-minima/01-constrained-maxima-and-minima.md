---
title: "Constrained Maxima and Minima"
subject: "MATHEMATICS FOR INFORMATION SCIENCE – 1"
module: "Module 4: Constrained Maxima and Minima"
branch: "Computer Science and Engineering"
semester: 1
topicId: "68b45b6e58474a0b135b5bdf"
status: "completed"
scrapedAt: "2026-05-20T16:40:31.373Z"
---
This is an excellent request, and I'm excited to help you craft comprehensive study notes for "Constrained Maxima and Minima." This topic is fundamental in optimization problems, which are ubiquitous in information science, from resource allocation to model fitting. Let's dive in and build a solid understanding.

***

# MATHEMATICS FOR INFORMATION SCIENCE – 1

## Module 4: Constrained Maxima and Minima

### Topic: Constrained Maxima and Minima

**Welcome, everyone!** Today, we're tackling a fascinating and incredibly practical topic: **Constrained Maxima and Minima**. You've already learned how to find the highest and lowest points of a function in general (unconstrained optimization). Now, we're going to add a crucial layer of realism: **constraints**. Think of it as finding the best outcome, but with specific limitations or rules we *must* follow. This is exactly what we need to do in many real-world scenarios, especially in information science.

This topic directly ties into **Course Outcome 4 (CO4)**: "Solve constrained maxima and minima, LPP and understand the method of Steepest Descent." Our goal here is to equip you with the tools to solve problems where the variables are not free to roam anywhere, but are restricted by certain conditions. This is where the magic of optimization truly comes to life.

#### Why are Constraints Important?

Imagine you're designing a data storage system. You want to maximize the amount of data stored (the objective function), but you have a limited budget for hardware and a maximum physical space available (these are your constraints). You can't just store an infinite amount of data; you're bound by these practical limitations. Similarly, in machine learning, we often want to minimize the error of a model (objective function) while ensuring certain properties of the model parameters, like regularization (constraints).

In essence, real-world problems rarely happen in a vacuum. They always have boundaries, limits, or requirements that must be met. Our task is to find the best possible solution *within* these boundaries.

### 1. Understanding the Problem: What is a Constrained Optimization Problem?

A constrained optimization problem is about finding the maximum or minimum value of a function, called the **objective function**, subject to one or more **constraints**. These constraints are typically expressed as equations or inequalities.

Let's break this down:

*   **Objective Function:** This is the function we want to maximize or minimize. We can denote it as $f(x, y, ...)$, where $x, y, ...$ are our variables.
*   **Constraints:** These are the conditions that the variables must satisfy. They can be:
    *   **Equality Constraints:** These are equations of the form $g(x, y, ...) = c$, where $c$ is a constant. For example, "the total budget must be exactly $10,000."
    *   **Inequality Constraints:** These are inequalities of the form $h(x, y, ...) \le d$ or $h(x, y, ...) \ge d$. For example, "the storage space used must be less than or equal to 1 TB."

**Relatable Analogy:** Think about baking a cake. Your objective is to make the most delicious cake possible (maximize deliciousness). Your constraints might be: you only have a certain amount of flour, sugar, and eggs; the oven temperature must be within a specific range; and the baking time can't exceed 45 minutes. You're trying to find the best combination of ingredients and baking time (your variables) that satisfies all these limitations to achieve maximum deliciousness.

**Textbook Connection:** You'll find this fundamental definition elaborated upon in Chapter 13 of Thomas' Calculus (15th ed.) when they introduce optimization with constraints. They'll formalize it using mathematical notation, which is essential for rigorous analysis.

### 2. Methods for Solving Constrained Maxima and Minima

There are several powerful techniques to tackle these problems. The most common and fundamental ones we'll focus on are:

*   The Substitution Method (for simple cases)
*   The Method of Lagrange Multipliers (for equality constraints)
*   Kuhn-Tucker Conditions (for inequality constraints)

Let's explore each in turn.

#### 2.1 The Substitution Method

This is often the most intuitive method when the constraints are simple, especially when you have only one constraint and can easily express one variable in terms of another.

**How it works:**

1.  **Solve the Constraint:** If you have a constraint equation $g(x, y, ...) = c$, try to solve it for one of the variables. For instance, if you have $y - 2x = 0$, you can easily write $y = 2x$.
2.  **Substitute:** Substitute this expression into your objective function $f(x, y, ...)$. This will reduce the number of variables in your objective function, transforming it into an unconstrained problem in a single variable (or fewer variables).
3.  **Solve the Unconstrained Problem:** Now, use the techniques you learned earlier (finding critical points by setting the derivative to zero) to find the maximum or minimum of the new, simpler objective function.

**Example:**

Suppose we want to maximize the area of a rectangular garden, $A(l, w) = l \times w$, subject to the constraint that the total length of fencing available is 100 meters. The perimeter of a rectangle is $2l + 2w$. So, our constraint is $2l + 2w = 100$.

1.  **Solve the Constraint:** From $2l + 2w = 100$, we can simplify to $l + w = 50$. Let's solve for $w$: $w = 50 - l$.
2.  **Substitute:** Substitute this expression for $w$ into the area function:
    $A(l) = l \times (50 - l) = 50l - l^2$.
3.  **Solve Unconstrained:** Now we have a single-variable function to maximize.
    *   Find the derivative: $A'(l) = 50 - 2l$.
    *   Set the derivative to zero: $50 - 2l = 0 \implies 2l = 50 \implies l = 25$.
    *   To confirm it's a maximum, we can use the second derivative test: $A''(l) = -2$. Since $A''(25) = -2 < 0$, this indicates a local maximum.
    *   If $l = 25$, then $w = 50 - 25 = 25$.
    *   So, the maximum area is achieved when the garden is a square with sides of 25 meters, giving an area of $25 \times 25 = 625$ square meters.

**When is this useful?** This method is fantastic for its simplicity when the constraint equation can be easily rearranged. Think of problems where you're allocating a fixed budget, and you can express how much of one item you can buy based on how much of another you buy. However, it becomes cumbersome and sometimes impossible if the constraint is complicated or involves many variables.

#### 2.2 The Method of Lagrange Multipliers (for Equality Constraints)

This is where things get a bit more sophisticated, but incredibly powerful. When substitution becomes difficult, the Lagrange Multiplier method is our go-to for equality constraints. This method is thoroughly covered in most advanced calculus texts, including Chapter 13 of Thomas' Calculus and Chapter 12 of Kreyszig's Advanced Engineering Mathematics (10th ed.).

**The Core Idea:**

The method of Lagrange multipliers is based on the geometric idea that at the point of maximum or minimum of $f(x, y)$ subject to $g(x, y) = c$, the gradient vectors of $f$ and $g$ must be parallel. That is, $\nabla f = \lambda \nabla g$ for some scalar $\lambda$. This $\lambda$ is called the **Lagrange multiplier**.

**How it works (for one equality constraint $g(x, y) = c$ and objective function $f(x, y)$):**

1.  **Form the Lagrange Function:** Define a new function, the Lagrangian, $\mathcal{L}(x, y, \lambda) = f(x, y) - \lambda(g(x, y) - c)$.
    *   *Why subtract?* It doesn't fundamentally matter if you add or subtract the constraint term. Subtracting is a common convention. The key is that we are looking for points where the gradient of $f$ is proportional to the gradient of $g$.
2.  **Find Partial Derivatives:** Calculate the partial derivatives of $\mathcal{L}$ with respect to $x$, $y$, and $\lambda$, and set them equal to zero:
    *   $\frac{\partial \mathcal{L}}{\partial x} = \frac{\partial f}{\partial x} - \lambda \frac{\partial g}{\partial x} = 0$
    *   $\frac{\partial \mathcal{L}}{\partial y} = \frac{\partial f}{\partial y} - \lambda \frac{\partial g}{\partial y} = 0$
    *   $\frac{\partial \mathcal{L}}{\partial \lambda} = -(g(x, y) - c) = 0 \implies g(x, y) = c$
3.  **Solve the System of Equations:** This gives you a system of equations. Solving these equations will give you the candidate points $(x, y)$ where the extrema might occur.
4.  **Evaluate:** Evaluate the objective function $f(x, y)$ at each candidate point found. The largest value will be the maximum, and the smallest will be the minimum.

**Example (The Garden Again):**

Maximize $A(l, w) = lw$ subject to $2l + 2w = 100$.

1.  **Lagrangian:** $\mathcal{L}(l, w, \lambda) = lw - \lambda(2l + 2w - 100)$.
2.  **Partial Derivatives:**
    *   $\frac{\partial \mathcal{L}}{\partial l} = w - 2\lambda = 0 \implies w = 2\lambda$
    *   $\frac{\partial \mathcal{L}}{\partial w} = l - 2\lambda = 0 \implies l = 2\lambda$
    *   $\frac{\partial \mathcal{L}}{\partial \lambda} = -(2l + 2w - 100) = 0 \implies 2l + 2w = 100$
3.  **Solve System:**
    *   From the first two equations, we see $w = 2\lambda$ and $l = 2\lambda$. This implies $l = w$.
    *   Substitute $l=w$ into the constraint: $2l + 2l = 100 \implies 4l = 100 \implies l = 25$.
    *   Since $l=w$, then $w=25$.
    *   We can also find $\lambda$: $w = 2\lambda \implies 25 = 2\lambda \implies \lambda = 12.5$.
4.  **Evaluate:** The candidate point is $(l, w) = (25, 25)$. The area is $A(25, 25) = 25 \times 25 = 625$.

This gives the same result as the substitution method, but this approach is more systematic and scales better to more variables.

**Multiple Constraints:** If you have multiple equality constraints, say $g_1(x, y, z) = c_1$ and $g_2(x, y, z) = c_2$, you'll introduce multiple Lagrange multipliers, $\lambda_1$ and $\lambda_2$:

$\mathcal{L}(x, y, z, \lambda_1, \lambda_2) = f(x, y, z) - \lambda_1(g_1(x, y, z) - c_1) - \lambda_2(g_2(x, y, z) - c_2)$.

You then set all partial derivatives to zero. This is crucial for problems with several limitations.

**Connection to CO4:** This is a direct application of CO4. You are solving for constrained maxima/minima.

**Common Pitfall:** Sometimes, students forget to check the boundary points of the domain if inequality constraints are involved or if the domain is closed and bounded. For equality constraints like $g(x,y)=c$, the method of Lagrange multipliers usually finds all local extrema. You then need to determine which one is the maximum or minimum, perhaps by analyzing the problem context or using a second derivative test for constrained optimization (which is more complex). Often, in exam scenarios, the problem is set up such that the unique critical point found *is* the extremum of interest.

**Relatable Scenario:** Imagine you're designing a cylindrical can to hold a specific volume of soup (your constraint). You want to minimize the amount of metal used for the can (minimize surface area – your objective). The volume is fixed, say $V = \pi r^2 h$. The surface area is $A = 2\pi r^2 + 2\pi rh$. Using Lagrange multipliers will help you find the optimal ratio of radius to height to minimize material for that fixed volume.

#### 2.3 Handling Inequality Constraints: Kuhn-Tucker Conditions

Many real-world problems involve inequalities. For example, "the number of items produced must be non-negative," or "the resource usage must be less than a certain threshold." For these, we use the Kuhn-Tucker (KT) conditions, also known as the Karush-Kuhn-Tucker (KKT) conditions. These are an extension of the Lagrange multiplier method to problems with inequality constraints. You can find detailed explanations in advanced texts like "Optimization: Algorithms and Applications" by Arora or chapters on nonlinear programming in engineering mathematics books.

**The Intuition:**

For an inequality constraint $g(x, y) \le c$, at an optimal point, either the constraint is "active" (meaning $g(x, y) = c$, and the gradient condition from Lagrange multipliers applies), or the constraint is "inactive" (meaning $g(x, y) < c$), in which case the gradient of the objective function must be zero (like in an unconstrained problem). The KT conditions elegantly combine these possibilities.

**How it works (for a single inequality constraint $g(x, y) \le c$ and objective function $f(x, y)$):**

We introduce a Lagrange multiplier $\mu$ (often denoted by $\mu$ or $\lambda$ in inequality cases, but let's use $\mu$ to distinguish). The conditions are:

1.  **Stationarity:** $\nabla f(x, y) - \mu \nabla g(x, y) = \mathbf{0}$.
    *   This means $\frac{\partial f}{\partial x} - \mu \frac{\partial g}{\partial x} = 0$ and $\frac{\partial f}{\partial y} - \mu \frac{\partial g}{\partial y} = 0$.
2.  **Primal Feasibility:** $g(x, y) \le c$.
    *   The solution $(x, y)$ must satisfy the original constraint.
3.  **Dual Feasibility:** $\mu \ge 0$.
    *   The Lagrange multiplier for an inequality constraint $\le$ must be non-negative.
4.  **Complementary Slackness:** $\mu (g(x, y) - c) = 0$.
    *   This is the crucial condition that links the multiplier to the constraint. It states that *either* the multiplier $\mu$ is zero (constraint is inactive) *or* the constraint is active ($g(x, y) - c = 0$).

**Example:**

Minimize $f(x, y) = x^2 + y^2$ subject to $x + y \le 1$.

1.  **Identify Components:**
    *   Objective: Minimize $f(x, y) = x^2 + y^2$
    *   Constraint: $g(x, y) = x + y \le 1$
    *   Here, $c = 1$. The point $(x,y)$ that minimizes $x^2+y^2$ without constraints is $(0,0)$. Since $0+0=0 \le 1$, the unconstrained minimum satisfies the constraint. What if the constraint was $x+y \le -1$? Then $(0,0)$ wouldn't be feasible.

Let's analyze the KT conditions:

1.  **Stationarity:**
    *   $\nabla f = (2x, 2y)$
    *   $\nabla g = (1, 1)$
    *   $2x - \mu(1) = 0 \implies 2x = \mu$
    *   $2y - \mu(1) = 0 \implies 2y = \mu$
    *   This implies $2x = 2y$, so $x = y$.

2.  **Primal Feasibility:** $x + y \le 1$.

3.  **Dual Feasibility:** $\mu \ge 0$.

4.  **Complementary Slackness:** $\mu (x + y - 1) = 0$.

Now we have cases based on complementary slackness:

**Case 1: $\mu = 0$**
*   If $\mu = 0$, then from stationarity: $2x = 0 \implies x = 0$ and $2y = 0 \implies y = 0$.
*   Check primal feasibility: $x + y = 0 + 0 = 0 \le 1$. This is satisfied.
*   Check dual feasibility: $\mu = 0 \ge 0$. This is satisfied.
*   Check complementary slackness: $0(0 + 0 - 1) = 0$. This is satisfied.
*   So, $(0, 0)$ is a candidate point with $\mu = 0$. The value of $f(0,0) = 0^2 + 0^2 = 0$.

**Case 2: $x + y - 1 = 0$ (constraint is active)**
*   From stationarity, $x = y = \mu/2$.
*   Substitute into the active constraint: $x + x = 1 \implies 2x = 1 \implies x = 1/2$.
*   Since $x=y$, then $y = 1/2$.
*   Now find $\mu$: $\mu = 2x = 2(1/2) = 1$.
*   Check primal feasibility: $x + y = 1/2 + 1/2 = 1 \le 1$. Satisfied.
*   Check dual feasibility: $\mu = 1 \ge 0$. Satisfied.
*   Check complementary slackness: $1(1/2 + 1/2 - 1) = 1(1 - 1) = 0$. Satisfied.
*   So, $(1/2, 1/2)$ is a candidate point with $\mu = 1$. The value of $f(1/2, 1/2) = (1/2)^2 + (1/2)^2 = 1/4 + 1/4 = 1/2$.

Comparing the candidate points: $f(0,0) = 0$ and $f(1/2, 1/2) = 1/2$.
Since we are minimizing, the minimum value is 0, occurring at $(0,0)$.

**Interpretation of the Multiplier:** The Lagrange multiplier $\mu$ represents the rate of change of the optimal value of the objective function with respect to a small change in the constraint limit. In our example, if we changed the constraint to $x+y \le 1 + \delta$, the minimum value of $x^2+y^2$ would increase by approximately $\mu \times \delta = 1 \times \delta = \delta$. This is a very powerful interpretation in economics and engineering, known as sensitivity analysis.

**Multiple Inequality Constraints:** If you have multiple inequality constraints ($g_i(x) \le c_i$) and possibly some equality constraints ($h_j(x) = d_j$), the KT conditions become more complex, involving a multiplier $\mu_i \ge 0$ for each inequality and $\lambda_j$ for each equality. The stationarity condition becomes $\nabla f - \sum \mu_i \nabla g_i - \sum \lambda_j \nabla h_j = 0$, and complementary slackness must hold for each inequality constraint: $\mu_i (g_i(x) - c_i) = 0$.

**Connection to CO4:** This section directly addresses solving constrained maxima and minima, specifically with inequality constraints. It builds upon the understanding of gradients and partial derivatives (CO2, CO3).

**Important Note on Convexity:** For convex objective functions and convex feasible regions (defined by linear or convex inequality constraints), the KT conditions not only find local optima but also guarantee that these are global optima. Many optimization problems in information science are formulated this way.

### 3. The Role of Gradients in Constrained Optimization

We've seen how gradients are central to these methods. Let's quickly recap their significance, linking back to CO3 ("Interpret directional derivative and solve maxima and minima of multivariable functions").

*   **Gradient ($\nabla f$):** This vector points in the direction of the steepest increase of the function $f$. Its magnitude is the rate of that increase.
*   **Directional Derivative ($D_{\mathbf{u}}f$):** This tells us the rate of change of $f$ in a specific direction $\mathbf{u}$. $D_{\mathbf{u}}f = \nabla f \cdot \mathbf{u}$.
*   **Unconstrained Extrema:** Occur where $\nabla f = \mathbf{0}$ (critical points). At these points, the function isn't increasing or decreasing in any direction.

**In Constrained Optimization:**

*   **Lagrange Multipliers:** The condition $\nabla f = \lambda \nabla g$ means that at the optimum, the gradient of $f$ points in the same (or opposite) direction as the gradient of $g$. Geometrically, this means the level curves (or surfaces) of $f$ and $g$ are tangent at that point. If they weren't tangent, you could move along the constraint curve $g=c$ to find a point where $f$ is larger or smaller, meaning you weren't at an optimum.
*   **Kuhn-Tucker Conditions:** The $\nabla f = \sum \mu_i \nabla g_i$ part is similar. When a constraint $g_i \le c_i$ is active ($g_i=c_i$), its gradient $\nabla g_i$ is normal to the constraint boundary. The gradient of $f$ is then constrained to lie within the "cone" formed by the gradients of the active constraints. If $g_i < c_i$ (inactive), its gradient term is zero, meaning that constraint doesn't restrict the direction of $\nabla f$.

**Think of it like this:** Imagine you're hiking on a hilly terrain (your objective function $f$). You are restricted to a path (your constraint $g=c$). The gradient of $f$ tells you which way is uphill. The gradient of $g$ is perpendicular to your path. The Lagrange condition $\nabla f = \lambda \nabla g$ means that the steepest uphill direction (from $\nabla f$) is exactly along the direction perpendicular to your path (given by $\nabla g$). If it weren't, you could move along your path to a higher point.

### 4. Practical Considerations and Exam Tips

*   **Identify Variables:** Clearly define what your variables are.
*   **Objective Function:** Write down the function you want to maximize or minimize.
*   **Constraints:** List all constraints, noting whether they are equalities or inequalities.
*   **Choose the Right Method:**
    *   Simple, single equality constraint? Substitution might be fastest.
    *   Equality constraints? Lagrange multipliers.
    *   Inequality constraints? Kuhn-Tucker conditions.
    *   Both equality and inequality? Combine approaches.
*   **Second Derivative Test (for confirmation):** For unconstrained problems, the second derivative test is standard. For constrained problems, there are more advanced second-order conditions (the bordered Hessian), but often exam questions are designed so that the unique critical point is obviously the max/min from context, or you compare values at candidate points.
*   **Check Feasibility:** Always ensure your candidate solutions satisfy all constraints.
*   **Context is Key:** The "maximum" or "minimum" might be implied by the problem statement (e.g., maximizing profit, minimizing cost).

**Exam-Oriented Advice:**
*   **Lagrange Multipliers:** Be comfortable setting up the Lagrangian and solving the resulting system of equations. Mistakes often happen in algebra when solving these systems.
*   **Kuhn-Tucker:** Understand the four conditions thoroughly. The complementary slackness is the trickiest part, often leading to case analysis. Make sure you check all conditions for each case.
*   **Interpretation:** Some questions might ask for the meaning of the Lagrange multiplier. Remember its sensitivity interpretation.

### Sample Questions and Answers

Here are a few practice questions to solidify your understanding.

---

**Question 1 (Conceptual):**
What is the fundamental geometric interpretation of the condition $\nabla f = \lambda \nabla g$ in the method of Lagrange multipliers?

**Answer:**
The condition $\nabla f = \lambda \nabla g$ means that at an optimal point $(x, y)$ for $f(x, y)$ subject to $g(x, y) = c$, the gradient vector of the objective function $f$ is parallel to the gradient vector of the constraint function $g$. Geometrically, this implies that the level curve of $f$ passing through $(x, y)$ is tangent to the constraint curve $g(x, y) = c$ at that point. If they were not tangent, one could move along the constraint curve to a point with a higher or lower value of $f$, meaning the original point was not an optimum.

---

**Question 2 (Lagrange Multipliers):**
Find the maximum value of the function $f(x, y) = xy$ subject to the constraint $x + y = 10$.

**Solution:**
1.  **Objective function:** $f(x, y) = xy$
2.  **Constraint:** $g(x, y) = x + y = 10$.
3.  **Lagrangian:** $\mathcal{L}(x, y, \lambda) = xy - \lambda(x + y - 10)$.
4.  **Partial Derivatives:**
    *   $\frac{\partial \mathcal{L}}{\partial x} = y - \lambda = 0 \implies y = \lambda$
    *   $\frac{\partial \mathcal{L}}{\partial y} = x - \lambda = 0 \implies x = \lambda$
    *   $\frac{\partial \mathcal{L}}{\partial \lambda} = -(x + y - 10) = 0 \implies x + y = 10$
5.  **Solve System:**
    *   From the first two equations, $x = y$.
    *   Substitute into the constraint: $x + x = 10 \implies 2x = 10 \implies x = 5$.
    *   Since $x = y$, then $y = 5$.
    *   The critical point is $(5, 5)$.
6.  **Evaluate:** $f(5, 5) = 5 \times 5 = 25$.

To confirm this is a maximum, we can consider other points on the constraint line $x+y=10$. For example, if $x=1$, $y=9$, $f(1,9) = 9$. If $x=10$, $y=0$, $f(10,0) = 0$. The value 25 is indeed the maximum.

---

**Question 3 (Kuhn-Tucker Conditions):**
Minimize $f(x, y) = x^2 + y^2$ subject to $x + y \ge 1$.

**Solution:**
This is a minimization problem with an inequality constraint. We rewrite the constraint as $g(x, y) = -x - y \le -1$. So, $c = -1$ and $g(x, y) = -x - y$.

1.  **Objective:** Minimize $f(x, y) = x^2 + y^2$.
2.  **Constraint:** $-x - y \le -1$.
3.  **Gradient of f:** $\nabla f = (2x, 2y)$.
4.  **Gradient of g:** $\nabla g = (-1, -1)$.
5.  **K-T Conditions:**
    *   **Stationarity:** $\nabla f - \mu \nabla g = \mathbf{0}$
        *   $2x - \mu(-1) = 0 \implies 2x + \mu = 0 \implies x = -\mu/2$
        *   $2y - \mu(-1) = 0 \implies 2y + \mu = 0 \implies y = -\mu/2$
        *   Thus, $x = y$.
    *   **Primal Feasibility:** $-x - y \le -1$.
    *   **Dual Feasibility:** $\mu \ge 0$.
    *   **Complementary Slackness:** $\mu(-x - y - (-1)) = 0 \implies \mu(1 - x - y) = 0$.

Now, consider cases for complementary slackness:

**Case 1: $\mu = 0$**
*   From stationarity, $x = -\mu/2 = 0$ and $y = -\mu/2 = 0$.
*   Check primal feasibility: $-0 - 0 \le -1 \implies 0 \le -1$. This is FALSE. So, $(0,0)$ is not a feasible solution.

**Case 2: $1 - x - y = 0 \implies x + y = 1$ (constraint is active)**
*   We have $x = y$ from stationarity.
*   Substitute into the active constraint: $x + x = 1 \implies 2x = 1 \implies x = 1/2$.
*   Since $x=y$, then $y = 1/2$.
*   Now find $\mu$: $x = -\mu/2 \implies 1/2 = -\mu/2 \implies \mu = -1$.
*   Check dual feasibility: $\mu = -1$. This violates $\mu \ge 0$.

**Wait! There's a common pitfall here.** The standard KKT conditions are typically stated for *minimization* with $\le$ constraints, where the multiplier for the constraint $g(x) \le c$ is non-negative ($\mu \ge 0$). If we are *minimizing* $f$ subject to $g(x) \ge c$, we rewrite it as $-g(x) \le -c$. If we are *maximizing* $f$ subject to $g(x) \le c$, the multiplier for $g(x) \le c$ must be non-positive ($\mu \le 0$).

Let's re-approach Question 3 with correct formulation for minimization with $\ge$ constraint.

**Re-solving Question 3 with correct formulation:**
Minimize $f(x, y) = x^2 + y^2$ subject to $x + y \ge 1$.
Constraint: $g(x, y) = x + y \ge 1$. For minimization, if constraint is $g(x,y) \ge c$, the multiplier $\mu$ is associated with $-\nabla g$. So, we use $-\nabla f + \mu \nabla g = 0$ with $\mu \ge 0$.

1.  **Objective:** Minimize $f(x, y) = x^2 + y^2$.
2.  **Constraint:** $x + y \ge 1$.
3.  **Gradient of f:** $\nabla f = (2x, 2y)$.
4.  **Gradient of g:** $\nabla g = (1, 1)$.
5.  **K-T Conditions (for minimization, $g(x,y) \ge c$):**
    *   **Stationarity:** $\nabla f - \mu \nabla g = 0$ is for $g \le c$. For $g \ge c$ with minimization, it's $\nabla f - \mu \nabla g = 0$ with $\mu \le 0$.
        *   $2x - \mu(1) = 0 \implies 2x = \mu$
        *   $2y - \mu(1) = 0 \implies 2y = \mu$
        *   Thus, $x = y$.
    *   **Primal Feasibility:** $x + y \ge 1$.
    *   **Dual Feasibility:** $\mu \le 0$.
    *   **Complementary Slackness:** $\mu(x + y - 1) = 0$.

Now, consider cases for complementary slackness:

**Case 1: $\mu = 0$**
*   From stationarity, $2x = 0 \implies x = 0$ and $2y = 0 \implies y = 0$.
*   Check primal feasibility: $0 + 0 \ge 1 \implies 0 \ge 1$. This is FALSE. So, $(0,0)$ is not a feasible solution.

**Case 2: $x + y - 1 = 0 \implies x + y = 1$ (constraint is active)**
*   We have $x = y$ from stationarity.
*   Substitute into the active constraint: $x + x = 1 \implies 2x = 1 \implies x = 1/2$.
*   Since $x=y$, then $y = 1/2$.
*   Now find $\mu$: $2x = \mu \implies 2(1/2) = \mu \implies \mu = 1$.
*   Check dual feasibility: $\mu = 1$. This violates $\mu \le 0$.

**Let's try the standard formulation using $g(x,y) \le c$:**
Minimize $f(x, y) = x^2 + y^2$ subject to $x + y \ge 1$.
Let's use the constraint form $g(x,y) = -x - y \le -1$.
Here, $c = -1$.
$\nabla f = (2x, 2y)$
$\nabla g = (-1, -1)$
KT conditions for minimizing $f$ subject to $g \le c$:
1. Stationarity: $\nabla f - \mu \nabla g = 0$, $\mu \ge 0$
   $2x - \mu(-1) = 0 \implies 2x + \mu = 0$
   $2y - \mu(-1) = 0 \implies 2y + \mu = 0$
   This implies $x = y = -\mu/2$.
2. Primal Feasibility: $-x - y \le -1$.
3. Dual Feasibility: $\mu \ge 0$.
4. Complementary Slackness: $\mu(-x - y - (-1)) = 0 \implies \mu(1 - x - y) = 0$.

Cases for $\mu(1-x-y)=0$:
**Case A: $\mu = 0$**
*   $2x = 0 \implies x=0$. $2y = 0 \implies y=0$.
*   Primal Feasibility: $-0 - 0 \le -1 \implies 0 \le -1$. FALSE. So $(0,0)$ is not feasible.

**Case B: $1 - x - y = 0 \implies x+y=1$ (constraint is active)**
*   We have $x=y$ from stationarity.
*   So, $x+x=1 \implies 2x=1 \implies x=1/2$.
*   Then $y=1/2$.
*   Now find $\mu$: $2x + \mu = 0 \implies 2(1/2) + \mu = 0 \implies 1 + \mu = 0 \implies \mu = -1$.
*   Dual Feasibility: $\mu = -1$. This violates $\mu \ge 0$.

**What is going on?** The unconstrained minimum is at $(0,0)$, $f(0,0)=0$. But $(0,0)$ is NOT in the feasible region $x+y \ge 1$. The feasible region is the area above the line $x+y=1$. The unconstrained minimum of $f(x,y)=x^2+y^2$ (which is the square of the distance from the origin) is at the origin. The closest point in the feasible region to the origin will be on the boundary line $x+y=1$.

The minimum must occur on the boundary $x+y=1$. We found that point to be $(1/2, 1/2)$. Let's check:
*   $f(1/2, 1/2) = (1/2)^2 + (1/2)^2 = 1/4 + 1/4 = 1/2$.
*   Is $(1/2, 1/2)$ feasible? $1/2 + 1/2 = 1 \ge 1$. Yes.

So, the minimum value is $1/2$ at $(1/2, 1/2)$.

My formulation of the KT conditions for $g(x,y) \ge c$ was slightly off. For minimization with $g(x, y) \ge c$: The conditions are $\nabla f - \mu \nabla g = 0$, $\mu \le 0$, and $\mu(g(x,y) - c) = 0$.
Using this for Question 3:
1. $\nabla f = (2x, 2y)$, $\nabla g = (1,1)$.
2. $2x - \mu(1) = 0 \implies x = \mu/2$
3. $2y - \mu(1) = 0 \implies y = \mu/2$
4. So, $x=y$.
5. Primal feasibility: $x+y \ge 1$.
6. Dual feasibility: $\mu \le 0$.
7. Complementary slackness: $\mu(x+y-1) = 0$.

Cases for $\mu(x+y-1)=0$:
**Case 1: $\mu = 0$**
*   $x = 0/2 = 0$, $y = 0/2 = 0$.
*   Primal feasibility: $0+0 \ge 1 \implies 0 \ge 1$. FALSE. Not feasible.

**Case 2: $x+y-1 = 0 \implies x+y=1$ (constraint is active)**
*   Since $x=y$, we have $x+x=1 \implies 2x=1 \implies x=1/2$.
*   Thus $y=1/2$.
*   From $x = \mu/2$, we get $1/2 = \mu/2 \implies \mu = 1$.
*   Dual feasibility: $\mu = 1$. This violates $\mu \le 0$.

**Let's consult textbooks on the precise KKT conditions for minimization with $g(x) \ge c$.**
Kreyszig, Advanced Engineering Mathematics, 10th ed., p. 466 states for minimization of $f(\mathbf{x})$ subject to $g_j(\mathbf{x}) \ge 0$, $j=1,\dots,m$, the KKT conditions are:
$\nabla f(\mathbf{x}) - \sum_{j=1}^m \mu_j \nabla g_j(\mathbf{x}) = \mathbf{0}$, $\mu_j \ge 0$, $\mu_j g_j(\mathbf{x}) = 0$.

Let's rewrite $x+y \ge 1$ as $g(x,y) = x+y-1 \ge 0$.
So $\nabla g = (1, 1)$.
KT conditions:
1. Stationarity: $\nabla f - \mu \nabla g = 0$
   $2x - \mu(1) = 0 \implies 2x = \mu$
   $2y - \mu(1) = 0 \implies 2y = \mu$
   So $x = y = \mu/2$.
2. Primal Feasibility: $x+y-1 \ge 0$.
3. Dual Feasibility: $\mu \ge 0$.
4. Complementary Slackness: $\mu(x+y-1) = 0$.

Cases for $\mu(x+y-1)=0$:
**Case 1: $\mu = 0$**
*   $x = 0/2 = 0$, $y = 0/2 = 0$.
*   Primal Feasibility: $0+0-1 \ge 0 \implies -1 \ge 0$. FALSE. Not feasible.

**Case 2: $x+y-1 = 0 \implies x+y=1$ (constraint is active)**
*   Since $x=y$, we have $x+x=1 \implies 2x=1 \implies x=1/2$.
*   Thus $y=1/2$.
*   From $2x = \mu$, we get $2(1/2) = \mu \implies \mu = 1$.
*   Dual Feasibility: $\mu = 1 \ge 0$. This is satisfied.
*   The point is $(1/2, 1/2)$. The function value is $f(1/2, 1/2) = (1/2)^2 + (1/2)^2 = 1/4 + 1/4 = 1/2$.

This is the correct application of KKT for minimization with $g(x) \ge c$. The minimum is $1/2$ at $(1/2, 1/2)$.

---

**Question 4 (Interpretation of Lagrange Multiplier):**
Suppose the profit of a company is given by $P(x, y) = 100x + 150y$, where $x$ is units of product A and $y$ is units of product B. The company has a budget constraint $2x + 3y = 60$. If you solve this using Lagrange multipliers and find $\lambda = 50$, what does this value of $\lambda$ represent?

**Answer:**
The Lagrange multiplier $\lambda = 50$ represents the marginal profit with respect to the budget constraint. Specifically, it means that if the budget were increased by one unit (e.g., from $60 to $61), the maximum profit $P$ would increase by approximately $50 units of profit. It tells us how sensitive the optimal profit is to changes in the available budget.

---

**Key Takeaway:** The goal is to find the best outcome *within* given limitations. Understanding the methods of substitution, Lagrange multipliers, and Kuhn-Tucker conditions is essential for solving these real-world optimization problems, directly addressing CO4. Remember to always check feasibility and understand the geometric meaning of the gradients involved.

Keep practicing, and don't hesitate to review the textbook examples! We'll be building on this in our next session.
