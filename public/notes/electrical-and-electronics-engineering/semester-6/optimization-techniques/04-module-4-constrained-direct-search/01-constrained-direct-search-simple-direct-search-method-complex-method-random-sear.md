---
title: "Constrained direct search - simple direct search method - Complex method - Random search methods"
subject: "OPTIMIZATION TECHNIQUES"
module: "Module 4: Constrained direct search "
branch: "Electrical and Electronics Engineering"
semester: 6
topicId: "68a200862b85456187f36699"
status: "completed"
scrapedAt: "2026-05-23T16:30:31.141Z"
---
# OPTIMIZATION TECHNIQUES - Module 4: Constrained Direct Search

## Introduction to Constrained Direct Search

This module explores **direct search methods** for optimization problems where the decision variables are subject to **constraints**. Unlike gradient-based methods that require derivative information, direct search methods operate by evaluating the objective function at various points in the search space and systematically moving towards a better solution. This makes them suitable for problems where derivatives are difficult or impossible to compute, or when the objective function is noisy or non-differentiable.

**Key Concepts:**

*   **Constrained Optimization Problem:** An optimization problem where the decision variables must satisfy certain inequality or equality constraints.
    *   Minimize $f(\mathbf{x})$
    *   Subject to:
        *   $g_i(\mathbf{x}) \le 0$, for $i = 1, \dots, m$ (inequality constraints)
        *   $h_j(\mathbf{x}) = 0$, for $j = 1, \dots, p$ (equality constraints)
        *   $\mathbf{x} \in \mathbb{R}^n$ is the vector of decision variables.
*   **Direct Search Methods:** Optimization algorithms that do not use gradient information. They rely on evaluating the objective function at trial points and comparing these values to decide the next search direction and step size.
*   **Feasible Region:** The set of all points $\mathbf{x}$ that satisfy all the constraints.

**Relevance to Course Outcomes:**

*   **CO4 (K3):** This module directly addresses exploring optimization techniques for constrained problems, which is the core focus.
*   **CO5 (K3):** The methods discussed are search techniques used in optimization.

**Reference:**
*   Ravindran, Ragsdell, & Reklaitis (2006), Chapter 7: Direct Search Methods.

## 1. Simple Direct Search Method (Pattern Search)

The **Simple Direct Search Method**, often referred to as **Pattern Search** or **Nelder-Mead Simplex Method** (though the latter is more specific and advanced), is a fundamental direct search technique. It operates by evaluating the objective function at a set of points and then moving towards the direction that yields the best improvement.

**Key Concepts:**

*   **Exploratory Moves:** Evaluating the objective function at points around the current best point.
*   **Pattern Move:** Moving from the current best point in the direction of the best point found during exploratory moves.
*   **Step Size (or Scale):** The distance between trial points. This is usually reduced over iterations to refine the search.
*   **Reflection, Expansion, Contraction, Shrinkage (for Nelder-Mead):** These are specific operations used to adjust the simplex (a geometric figure with $n+1$ vertices in an $n$-dimensional space) during the search.

**How it Works (General Idea):**

1.  **Initialization:** Start with a feasible point $\mathbf{x}_0$.
2.  **Exploration:** Generate a set of trial points in the neighborhood of the current best point.
3.  **Evaluation:** Evaluate the objective function at these trial points.
4.  **Selection:** Identify the point that yields the best objective function value.
5.  **Movement:**
    *   If a better point is found, move to that point.
    *   If no better point is found in the exploration, shrink the search space (reduce the step size) and repeat the exploration.

**Constraints Handling (Simple Direct Search):**

Handling constraints with simple direct search methods can be challenging. Common approaches include:

*   **Penalty Functions:** Augmenting the objective function with a penalty term that increases significantly as the point approaches or violates the constraints. The problem is then transformed into an unconstrained (or less constrained) optimization problem.
    *   **External Penalty Function:** $P(\mathbf{x}, r) = f(\mathbf{x}) + r \sum_{i=1}^m \max(0, g_i(\mathbf{x}))^2 + r \sum_{j=1}^p (h_j(\mathbf{x}))^2$
    *   **Internal (Barrier) Penalty Function:** Used for inequality constraints $g_i(\mathbf{x}) \le 0$, where the penalty becomes infinite as $\mathbf{x}$ approaches the boundary of the feasible region.
        *   $P(\mathbf{x}, r) = f(\mathbf{x}) - \frac{1}{r} \sum_{i=1}^m \frac{1}{g_i(\mathbf{x})}$ (for $g_i(\mathbf{x}) < 0$)
*   **Feasibility Rules:** If an exploratory move lands in an infeasible region, it is rejected, and the algorithm continues searching within the feasible region.

**Example (Conceptual):**

Consider minimizing $f(x, y) = x^2 + y^2$ subject to $x + y \le 1$.

1.  Start at a feasible point, say $(0, 0)$.
2.  Explore points like $(0.1, 0)$, $(0, 0.1)$, $(-0.1, 0)$, $(0, -0.1)$.
3.  Evaluate $f$ at these points. If $(0.1, 0)$ gives the best value, move there.
4.  If a move leads to a point like $(1, 1)$ (infeasible), reject it and try another point.
5.  Gradually reduce the step size to converge.

**Important Points to Remember:**

*   Requires no gradient information, making it suitable for complex or non-differentiable functions.
*   Can be slow to converge, especially in higher dimensions.
*   Handling constraints often requires augmentation with penalty methods.

**Reference:**
*   Ravindran, Ragsdell, & Reklaitis (2006), Section 7.1: Direct Search Methods.

## 2. Complex Method

The **Complex Method**, developed by M.J. Box, is a direct search method designed specifically for handling constrained nonlinear programming problems. It is particularly effective when the feasible region is complex or when analytical derivatives are not available.

**Key Concepts:**

*   **Simplex:** The method uses a simplex (a geometric figure with $n+1$ vertices in $n$-dimensional space) as its search mechanism. However, unlike the Nelder-Mead simplex method which aims to maintain a regular simplex, the Complex method's simplex can distort to follow the boundaries of the feasible region.
*   **Feasible Vertices:** The method maintains a set of $N$ points (vertices) that are all within the feasible region. The number of vertices $N$ is typically greater than $n+1$ (e.g., $N = 2n$).
*   **Centroid:** The average of all points in the simplex.
*   **Worst Point:** The vertex with the highest objective function value (for minimization).
*   **Trial Point:** A new point generated by attempting to move the worst point away from the optimum.
*   **Reflection:** The worst point is reflected through the centroid of the remaining points.

**How it Works:**

1.  **Initialization:**
    *   Generate $N$ random points within the feasible region. These points form the initial simplex. If initial points cannot be found, the method cannot proceed.
    *   Evaluate the objective function at each vertex.
2.  **Identify Worst Point:** Find the vertex $\mathbf{x}_{worst}$ with the highest objective function value.
3.  **Calculate Centroid:** Compute the centroid $\mathbf{c}$ of all vertices except $\mathbf{x}_{worst}$.
4.  **Generate Trial Point:** Calculate a new trial point $\mathbf{x}_{trial}$ by reflecting $\mathbf{x}_{worst}$ through the centroid:
    $\mathbf{x}_{trial} = \mathbf{c} + \alpha (\mathbf{c} - \mathbf{x}_{worst})$, where $\alpha > 1$ is a reflection coefficient (commonly $\alpha = 1.3$).
5.  **Check Feasibility of Trial Point:**
    *   If $\mathbf{x}_{trial}$ is feasible: Evaluate $f(\mathbf{x}_{trial})$. If $f(\mathbf{x}_{trial}) < f(\mathbf{x}_{worst})$, replace $\mathbf{x}_{worst}$ with $\mathbf{x}_{trial}$.
    *   If $\mathbf{x}_{trial}$ is infeasible:
        *   **Shrinkage:** If the trial point is infeasible, try to move it slightly towards the centroid. This can be done by reducing the step size of the reflection. A common approach is to repeatedly move the point halfway between its current position and the centroid until it becomes feasible. If this fails after a certain number of attempts, the worst point might be replaced by a point that is slightly shrunk towards the centroid.
        *   If even the shrunk point is infeasible, the algorithm might declare failure or attempt a "worst vertex replacement" with a point slightly perturbed from the centroid.
6.  **Termination:** The process continues until a stopping criterion is met (e.g., the simplex becomes very small, or the objective function values at the vertices are very close).

**Constraints Handling (Complex Method):**

The Complex method inherently handles constraints by ensuring that all vertices are always within the feasible region. If a generated point is infeasible, it is modified until it becomes feasible or the algorithm attempts a fallback.

**Example:**

Minimize $f(x, y) = -(x+y)$ subject to:
$x \ge 0, y \ge 0$
$x + 2y \le 2$
$2x + y \le 2$

1.  Choose $N=4$ vertices (since $n=2$, $n+1=3$, so $N > n+1$).
2.  Generate 4 random points in the feasible region (e.g., $(0.1, 0.1), (0.5, 0.2), (0.2, 0.5), (0.7, 0.3)$).
3.  Evaluate $f$ at these points. Suppose $(0.7, 0.3)$ has the highest value (least negative). This is $\mathbf{x}_{worst}$.
4.  Calculate the centroid of the other three points.
5.  Reflect $\mathbf{x}_{worst}$ through the centroid.
6.  If the new point is feasible, evaluate $f$. If it's better than the original $\mathbf{x}_{worst}$, replace it.
7.  If the new point is infeasible, adjust it (e.g., move halfway towards the centroid) until it's feasible.

**Important Points to Remember:**

*   Specifically designed for constrained optimization.
*   Does not require derivatives.
*   Can handle non-convex feasible regions.
*   The number of vertices ($N$) is a parameter that affects performance. A larger $N$ can explore the feasible region more broadly but increases computation per iteration.

**Reference:**
*   Ravindran, Ragsdell, & Reklaitis (2006), Section 7.2: The Complex Method.

## 3. Random Search Methods

Random search methods are a class of direct search algorithms that rely on randomly sampling points from the search space to find an optimal solution. They are often used as a baseline or when the objective function is highly complex, multimodal, or non-differentiable.

**Key Concepts:**

*   **Random Sampling:** Generating trial points randomly within a defined search space.
*   **Deterministic vs. Stochastic:** Random search methods are stochastic, meaning they involve randomness.
*   **Global vs. Local Search:** Depending on the sampling strategy, random search can be geared towards global exploration or local refinement.
*   **No Constraints (Basic Random Search):** In its simplest form, random search is applied to unconstrained problems.
*   **Constraints Handling (Modified Random Search):** To handle constraints, modifications are needed.

**Types of Random Search Methods:**

*   **Pure Random Search (PRS):**
    *   **How it works:** Randomly samples points from a specified region. Keeps track of the best point found so far.
    *   **Constraints:** If the problem is constrained, sampled points must be checked for feasibility. Infeasible points are rejected. This can be inefficient if the feasible region is small.
    *   **Stopping:** Usually based on a fixed number of iterations or when the search region becomes sufficiently small.

*   **Random Search with Neighborhood Sampling (RSNS) / Random Walk:**
    *   **How it works:** Starts at a feasible point. Generates a random point in its neighborhood. If the new point is better (and feasible for constrained problems), it moves to the new point. Otherwise, it stays at the current point or tries another random step.
    *   **Constraints:** Similar to PRS, infeasible points are rejected.
    *   **Comparison to Simple Direct Search:** More exploratory than systematic pattern search.

**How to Handle Constraints with Random Search:**

1.  **Rejection Sampling:** The most straightforward approach. Generate random points, and if a point violates any constraint, discard it and generate another. This is only practical if the feasible region has a significant volume compared to the search space.
2.  **Constraint-Guided Sampling:** Develop sampling strategies that are more likely to produce feasible points. For example, if a constraint is linear, you might bias the sampling towards satisfying it.
3.  **Penalty Methods:** Similar to simple direct search, combine random search with penalty functions. The random search then operates on the augmented objective function.

**Example (Conceptual - Unconstrained):**

Minimize $f(x, y) = x^2 + y^2$ for $x, y \in [-10, 10]$.

1.  Generate 1000 random points $(x_i, y_i)$ where $x_i \sim U[-10, 10]$ and $y_i \sim U[-10, 10]$.
2.  Evaluate $f(x_i, y_i)$ for each point.
3.  The point $(x_k, y_k)$ with the minimum $f$ value is the best found.

**Example (Conceptual - Constrained):**

Minimize $f(x, y) = -(x+y)$ subject to $x \ge 0, y \ge 0, x+y \le 1$.
Search space: $x \in [0, 1], y \in [0, 1]$.

1.  Generate a random point $(x_i, y_i)$ within $[0, 1] \times [0, 1]$.
2.  Check if $x_i \ge 0$, $y_i \ge 0$, and $x_i + y_i \le 1$.
3.  If feasible, evaluate $f(x_i, y_i)$. Keep track of the feasible point with the best $f$ value.
4.  Repeat until convergence or a stopping criterion is met. Many generated points will be rejected because $x_i + y_i > 1$.

**Important Points to Remember:**

*   Simple to implement.
*   Can be effective for global optimization, especially for multimodal functions where gradient-based methods can get stuck in local optima.
*   Convergence can be slow, especially for high-dimensional problems or when the optimal solution is in a narrow region.
*   Efficiency heavily depends on the search space and the density of feasible points.
*   Often used as a baseline for comparison with more sophisticated global optimization methods.

**Reference:**
*   While not explicitly detailed in the provided textbook snippets for this specific section, the general concept of random search is a fundamental part of optimization literature. For further understanding, one might refer to broader texts on stochastic optimization or global optimization techniques.

---

## Practice Questions and Exercises

**Instructions:** Attempt these questions to test your understanding of the module.

**Question 1 (Simple Direct Search & Constraints):**
Consider the problem: Minimize $f(x_1, x_2) = (x_1 - 2)^2 + (x_2 - 3)^2$ subject to $x_1 + x_2 \le 4$ and $x_1 \ge 0, x_2 \ge 0$.
Suppose you are at the feasible point $(1, 1)$.
a) Describe how you would perform an exploratory move for a simple direct search method. What points might you evaluate?
b) If one of your exploratory moves leads to $(1.5, 1.5)$, is this point feasible? Explain.
c) How would you handle an exploratory move that leads to $(3, 3)$?

**Answer 1:**
a) From $(1, 1)$, you would evaluate points in its neighborhood. For example, you could try points by moving in the positive and negative x and y directions with a small step size (e.g., 0.1):
    *   $(1.1, 1)$
    *   $(0.9, 1)$
    *   $(1, 1.1)$
    *   $(1, 0.9)$
    *   And potentially diagonal moves like $(1.1, 1.1)$.
b) To check feasibility for $(1.5, 1.5)$:
    *   $x_1 = 1.5 \ge 0$ (Satisfied)
    *   $x_2 = 1.5 \ge 0$ (Satisfied)
    *   $x_1 + x_2 = 1.5 + 1.5 = 3$. Since $3 \le 4$, this constraint is also satisfied.
    Therefore, $(1.5, 1.5)$ is a feasible point.
c) If an exploratory move leads to $(3, 3)$:
    *   $x_1 = 3 \ge 0$ (Satisfied)
    *   $x_2 = 3 \ge 0$ (Satisfied)
    *   $x_1 + x_2 = 3 + 3 = 6$. Since $6 > 4$, this constraint is violated.
    To handle this, you would reject this point and not consider it for moving. If using a penalty function approach, the penalty term would be activated at this point. If using feasibility rules, you would simply not select this point as the new best point.

**Question 2 (Complex Method):**
Consider the problem: Minimize $f(x_1, x_2) = x_1^2 + x_2^2$ subject to $x_1 + x_2 \ge 2$.
Suppose your Complex method has $N=4$ vertices and the current simplex vertices are $A=(1,1)$, $B=(2,0.5)$, $C=(0.5,2)$, $D=(1.5, 1.5)$.
The objective function values are $f(A)=2$, $f(B)=4.25$, $f(C)=4.25$, $f(D)=4.5$.
a) Identify the worst point and calculate the centroid of the other points.
b) Calculate the reflected point if the reflection coefficient $\alpha = 1.3$. Assume the reflected point is feasible.
c) What would happen if the reflected point was $(3, 3)$?

**Answer 2:**
a)
*   **Worst Point:** The vertex with the highest objective function value is $D=(1.5, 1.5)$ with $f(D)=4.5$.
*   **Centroid of other points:** The other points are $A=(1,1)$, $B=(2,0.5)$, $C=(0.5,2)$.
    Centroid $\mathbf{c} = \frac{A+B+C}{3} = \frac{(1+2+0.5, 1+0.5+2)}{3} = \frac{(3.5, 3.5)}{3} = (1.167, 1.167)$ (approx.).

b) **Reflected Point:**
    $\mathbf{x}_{trial} = \mathbf{c} + \alpha (\mathbf{c} - \mathbf{x}_{worst})$
    $\mathbf{x}_{trial} = (1.167, 1.167) + 1.3 \times ((1.167, 1.167) - (1.5, 1.5))$
    $\mathbf{x}_{trial} = (1.167, 1.167) + 1.3 \times (-0.333, -0.333)$
    $\mathbf{x}_{trial} = (1.167, 1.167) + (-0.433, -0.433)$
    $\mathbf{x}_{trial} = (0.734, 0.734)$ (approx.)
    Since we assume the reflected point is feasible, we would evaluate $f(0.734, 0.734) = (0.734)^2 + (0.734)^2 \approx 1.07$. This value is less than $f(D)=4.5$, so we would replace $D$ with $(0.734, 0.734)$.

c) If the reflected point was $(3, 3)$:
    *   Check feasibility: $x_1 = 3, x_2 = 3$. The constraint is $x_1 + x_2 \ge 2$.
    *   $3 + 3 = 6$. Since $6 \ge 2$, the point $(3, 3)$ is feasible.
    *   If the reflected point were $(3, 3)$, and assuming it has a lower objective function value than $(1.5, 1.5)$, it would replace $(1.5, 1.5)$ as the new worst point.

**Question 3 (Random Search):**
You are tasked with finding the maximum of $f(x) = \sin(x) + 0.5\sin(2x)$ in the interval $[0, 2\pi]$ using a random search method.
a) Describe how you would apply Pure Random Search (PRS) to this problem.
b) What is a potential disadvantage of PRS for this specific function?
c) How might you adapt random search to find the minimum of a function $g(x)$ subject to $x^2 \le 4$?

**Answer 3:**
a)
*   Define the search interval: $[0, 2\pi]$.
*   Choose a number of random samples, say $K=1000$.
*   For $i = 1$ to $K$:
    *   Generate a random number $x_i$ uniformly distributed in $[0, 2\pi]$.
    *   Evaluate $f(x_i) = \sin(x_i) + 0.5\sin(2x_i)$.
*   Keep track of the maximum value of $f(x_i)$ found and the corresponding $x_i$.

b) The function $f(x) = \sin(x) + 0.5\sin(2x)$ is likely to have multiple local maxima. Pure Random Search might spend a significant number of samples in regions that are far from any of the global maxima or even local maxima, leading to slow convergence or failure to find the true maximum if the number of samples is insufficient. It doesn't exploit any information about the function's behavior.

c) To find the minimum of $g(x)$ subject to $x^2 \le 4$ using random search:
    *   The constraint $x^2 \le 4$ implies $-2 \le x \le 2$. This defines the feasible search interval.
    *   Choose a number of random samples, say $K$.
    *   For $i = 1$ to $K$:
        *   Generate a random number $x_i$ uniformly distributed in the feasible interval $[-2, 2]$.
        *   Evaluate $g(x_i)$.
    *   Keep track of the minimum value of $g(x_i)$ found and the corresponding $x_i$. Since the sampling is done within the feasible region, all generated points are inherently feasible, and rejection sampling is not needed.

---

## Important Points to Remember for Module 4

*   **Constrained optimization:** The core challenge is to stay within the feasible region while improving the objective function.
*   **Direct Search Methods:** Operate without derivative information, making them suitable for black-box functions or when derivatives are hard to obtain.
*   **Simple Direct Search (Pattern Search):** Explores the neighborhood and moves towards better points. Handling constraints often requires auxiliary methods like penalty functions.
*   **Complex Method:** A simplex-based direct search method specifically designed for constrained problems. It maintains a set of feasible points and iteratively improves them by reflecting the worst point. It is robust to non-convex feasible regions.
*   **Random Search:** Samples points randomly. Simple to implement but can be inefficient. Effective for global exploration. Constraint handling requires specific strategies like rejection sampling or guided sampling.
*   **Penalty Functions:** A common technique to transform constrained problems into unconstrained (or less constrained) ones by adding a penalty for violating constraints.
*   **Feasibility:** Ensuring that any proposed move or new point satisfies all constraints is paramount in constrained direct search.

This concludes Module 4. You should now have a foundational understanding of how direct search methods can be applied to problems with constraints.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=gI-qXk7XojA) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=F_4HkL5r4n0) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=8XG7U5yN668) |
