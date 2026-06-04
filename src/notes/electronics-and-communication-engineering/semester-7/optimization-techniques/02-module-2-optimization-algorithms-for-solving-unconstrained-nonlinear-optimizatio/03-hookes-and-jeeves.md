---
title: "Hookes and Jeeves"
subject: "OPTIMIZATION TECHNIQUES"
module: "Module 2: Optimization algorithms for solving unconstrained nonlinear optimization problems"
branch: "Electronics and Communication Engineering"
semester: 7
topicId: "68a5c462b09ce205780ff560"
status: "completed"
scrapedAt: "2026-05-23T18:08:42.089Z"
---
# OPTIMIZATION TECHNIQUES - Module 2: Optimization Algorithms for Unconstrained Nonlinear Optimization Problems

## Topic: Hooke and Jeeves Method

### 1. Introduction

The Hooke and Jeeves method, also known as the **pattern search method**, is a direct search method for finding the minimum of a function. It is particularly useful for problems where the gradient of the objective function is difficult or impossible to compute, or when the function is not differentiable. This method belongs to the class of **non-gradient-based optimization techniques**.

**Key Concepts:**

*   **Direct Search Method:** These methods do not use gradient information. Instead, they evaluate the objective function at several points and use the results to guide the search for the optimum.
*   **Unconstrained Nonlinear Optimization:** We are seeking to minimize a function $f(\mathbf{x})$ where $\mathbf{x}$ is a vector of decision variables, and there are no constraints on the values of $\mathbf{x}$. The function $f(\mathbf{x})$ can be nonlinear.

**Learning Outcomes Covered:**

*   This topic directly addresses the solving of unconstrained nonlinear optimization problems using a specific algorithm, contributing to the broader understanding of optimization techniques. While not directly applying calculus (CO1) or Simplex (CO2), it builds foundational knowledge for handling optimization problems. It also aligns with CO5 by being a metaheuristic-like approach (though simpler and more structured than typical metaheuristics).

**Course Outcomes Alignment:**

*   **CO5: Use metaheuristic algorithms to solve constrained and unconstrained (Knowledge Level: K2)** - While Hooke and Jeeves is not a typical metaheuristic like Genetic Algorithms or Particle Swarm Optimization, it shares the spirit of exploratory search and iterative improvement without relying on gradients. It's a foundational direct search method that helps understand the broader landscape of non-gradient optimization.

### 2. The Hooke and Jeeves Algorithm: Two Phases

The Hooke and Jeeves method consists of two main phases:

1.  **Exploratory Move:** This phase investigates the neighborhood of the current point to find a better point. It moves along coordinate axes.
2.  **Pattern Move:** If an exploratory move is successful (i.e., a better point is found), the algorithm makes a move in the direction of the improvement, accelerating the search.

#### 2.1 Exploratory Move

The exploratory move starts from a base point $\mathbf{x}_b$. It iterates through each coordinate (dimension) of the search space. For each coordinate $i$:

*   **Try a positive step:** Evaluate $f(\mathbf{x}_b + \delta \mathbf{e}_i)$, where $\mathbf{e}_i$ is a unit vector in the $i$-th direction, and $\delta$ is the step size.
    *   If $f(\mathbf{x}_b + \delta \mathbf{e}_i) < f(\mathbf{x}_b)$, the new point becomes $\mathbf{x}_b + \delta \mathbf{e}_i$.
*   **Try a negative step:** If the positive step did not yield improvement, evaluate $f(\mathbf{x}_b - \delta \mathbf{e}_i)$.
    *   If $f(\mathbf{x}_b - \delta \mathbf{e}_i) < f(\mathbf{x}_b)$, the new point becomes $\mathbf{x}_b - \delta \mathbf{e}_i$.
*   If neither step improves the function value, the point remains unchanged for that coordinate.

The exploratory move is completed after trying all coordinates. The final point after the exploratory move is denoted by $\mathbf{x}_{new}$. If $\mathbf{x}_{new}$ is better than the starting base point $\mathbf{x}_b$ (i.e., $f(\mathbf{x}_{new}) < f(\mathbf{x}_b)$), then the exploratory move is considered successful.

**Important Note on Exploratory Move:** The order of trying coordinates and the step size $\delta$ are crucial. Typically, $\delta$ is halved when no improvement is found in any direction.

#### 2.2 Pattern Move

The pattern move is an acceleration step. If the exploratory move starting from $\mathbf{x}_b$ resulted in a new point $\mathbf{x}_{new}$ such that $f(\mathbf{x}_{new}) < f(\mathbf{x}_b)$, then the algorithm performs a pattern move.

*   **Calculate the pattern direction:** The pattern direction is determined by the vector connecting the previous base point to the new best point: $\mathbf{p} = \mathbf{x}_{new} - \mathbf{x}_b$.
*   **Predict the next point:** The predicted point along the pattern direction is $\mathbf{x}_{predict} = \mathbf{x}_{new} + \mathbf{p}$.
*   **Perform exploratory move from the predicted point:** An exploratory move is performed starting from $\mathbf{x}_{predict}$. Let the result of this exploratory move be $\mathbf{x}_{next\_base}$.
*   **Update the base point:** If the exploratory move from $\mathbf{x}_{predict}$ yields a point $\mathbf{x}_{next\_base}$ that is better than $\mathbf{x}_{new}$ (i.e., $f(\mathbf{x}_{next\_base}) < f(\mathbf{x}_{new})$), then $\mathbf{x}_{next\_base}$ becomes the new base point $\mathbf{x}_b$ for the next iteration. The pattern move is considered successful.
*   **If pattern move is unsuccessful:** If the exploratory move from $\mathbf{x}_{predict}$ does not improve the function value over $\mathbf{x}_{new}$, then the base point remains $\mathbf{x}_{new}$ (from the successful exploratory move), and the pattern direction $\mathbf{p}$ is reset to zero (effectively discarding the pattern move).

#### 2.3 Algorithm Summary

1.  **Initialization:**
    *   Choose an initial point $\mathbf{x}_0$.
    *   Choose an initial step size $\delta_0 > 0$.
    *   Choose a stopping criterion (e.g., tolerance for step size or function value change).
    *   Set the current base point $\mathbf{x}_b = \mathbf{x}_0$.

2.  **Iteration:**
    *   **Exploratory Move:** Starting from $\mathbf{x}_b$, perform an exploratory move. Let the resulting point be $\mathbf{x}_{new}$.
    *   **Check for Improvement:** If $f(\mathbf{x}_{new}) < f(\mathbf{x}_b)$:
        *   **Pattern Move:**
            *   Calculate the pattern direction $\mathbf{p} = \mathbf{x}_{new} - \mathbf{x}_b$.
            *   Predict $\mathbf{x}_{predict} = \mathbf{x}_{new} + \mathbf{p}$.
            *   Perform an exploratory move starting from $\mathbf{x}_{predict}$ to get $\mathbf{x}_{next\_base}$.
            *   If $f(\mathbf{x}_{next\_base}) < f(\mathbf{x}_{new})$:
                *   Set $\mathbf{x}_b = \mathbf{x}_{next\_base}$.
                *   Continue to the next iteration.
            *   Else (pattern move unsuccessful):
                *   Set $\mathbf{x}_b = \mathbf{x}_{new}$.
                *   Reduce $\delta$ (e.g., $\delta = \delta / 2$).
                *   Continue to the next iteration.
        *   Else (exploratory move did not improve):
            *   Reduce $\delta$ (e.g., $\delta = \delta / 2$).
            *   If $\delta$ is smaller than the tolerance, stop.
            *   Continue to the next iteration (starting exploratory move from the same $\mathbf{x}_b$).

3.  **Termination:** Stop when the step size $\delta$ becomes smaller than a predefined tolerance. The last successful base point $\mathbf{x}_b$ is the approximate minimum.

### 3. Example: Minimizing $f(x_1, x_2) = (x_1 - 2)^2 + (x_2 - 3)^2$

Let's minimize the given function using the Hooke and Jeeves method.

**Initialization:**

*   Initial point $\mathbf{x}_0 = (0, 0)$. So, $\mathbf{x}_b = (0, 0)$.
*   Initial step size $\delta_0 = 1$.
*   Tolerance $\epsilon = 0.001$.

**Iteration 1:**

*   **Base Point:** $\mathbf{x}_b = (0, 0)$, $f(\mathbf{x}_b) = (0-2)^2 + (0-3)^2 = 4 + 9 = 13$.
*   **Exploratory Move (from $\mathbf{x}_b = (0, 0)$, $\delta = 1$):**
    *   **Coordinate 1 ($x_1$):**
        *   Try positive step: $\mathbf{x} = (0+1, 0) = (1, 0)$. $f(1, 0) = (1-2)^2 + (0-3)^2 = 1 + 9 = 10$. Since $10 < 13$, update $\mathbf{x}_b$ for this step to $(1, 0)$.
    *   **Coordinate 2 ($x_2$):**
        *   Current point is $(1, 0)$. Try positive step: $\mathbf{x} = (1, 0+1) = (1, 1)$. $f(1, 1) = (1-2)^2 + (1-3)^2 = 1 + 4 = 5$. Since $5 < 10$, update $\mathbf{x}_b$ for this step to $(1, 1)$.
*   **Result of Exploratory Move:** $\mathbf{x}_{new} = (1, 1)$. $f(\mathbf{x}_{new}) = 5$.
*   **Check for Improvement:** $f(\mathbf{x}_{new}) = 5 < f(\mathbf{x}_b) = 13$. Yes, improvement.
*   **Pattern Move:**
    *   Pattern direction: $\mathbf{p} = \mathbf{x}_{new} - \mathbf{x}_b^{\text{original}} = (1, 1) - (0, 0) = (1, 1)$.
    *   Predicted point: $\mathbf{x}_{predict} = \mathbf{x}_{new} + \mathbf{p} = (1, 1) + (1, 1) = (2, 2)$.
    *   **Exploratory Move from $\mathbf{x}_{predict} = (2, 2)$, $\delta = 1$:**
        *   **Coordinate 1 ($x_1$):**
            *   Try positive step: $\mathbf{x} = (2+1, 2) = (3, 2)$. $f(3, 2) = (3-2)^2 + (2-3)^2 = 1 + 1 = 2$. Since $2 < f(\mathbf{x}_{new})=5$, update $\mathbf{x}_{next\_base}$ to $(3, 2)$.
        *   **Coordinate 2 ($x_2$):**
            *   Current point is $(3, 2)$. Try positive step: $\mathbf{x} = (3, 2+1) = (3, 3)$. $f(3, 3) = (3-2)^2 + (3-3)^2 = 1 + 0 = 1$. Since $1 < f(\mathbf{x}_{new})=2$, update $\mathbf{x}_{next\_base}$ to $(3, 3)$.
    *   **Result of Exploratory Move from $\mathbf{x}_{predict}$:** $\mathbf{x}_{next\_base} = (3, 3)$. $f(\mathbf{x}_{next\_base}) = 1$.
    *   **Update Base Point:** $f(\mathbf{x}_{next\_base}) = 1 < f(\mathbf{x}_{new}) = 5$. Yes, pattern move successful.
    *   New base point $\mathbf{x}_b = (3, 3)$.

**Iteration 2:**

*   **Base Point:** $\mathbf{x}_b = (3, 3)$, $f(\mathbf{x}_b) = (3-2)^2 + (3-3)^2 = 1 + 0 = 1$.
*   **Exploratory Move (from $\mathbf{x}_b = (3, 3)$, $\delta = 1$):**
    *   **Coordinate 1 ($x_1$):**
        *   Try positive step: $\mathbf{x} = (3+1, 3) = (4, 3)$. $f(4, 3) = (4-2)^2 + (3-3)^2 = 4 + 0 = 4$. $4 > 1$, no improvement.
        *   Try negative step: $\mathbf{x} = (3-1, 3) = (2, 3)$. $f(2, 3) = (2-2)^2 + (3-3)^2 = 0 + 0 = 0$. Since $0 < 1$, update $\mathbf{x}_b$ for this step to $(2, 3)$.
    *   **Coordinate 2 ($x_2$):**
        *   Current point is $(2, 3)$. Try positive step: $\mathbf{x} = (2, 3+1) = (2, 4)$. $f(2, 4) = (2-2)^2 + (4-3)^2 = 0 + 1 = 1$. $1 > 0$, no improvement.
        *   Try negative step: $\mathbf{x} = (2, 3-1) = (2, 2)$. $f(2, 2) = (2-2)^2 + (2-3)^2 = 0 + 1 = 1$. $1 > 0$, no improvement.
*   **Result of Exploratory Move:** $\mathbf{x}_{new} = (2, 3)$. $f(\mathbf{x}_{new}) = 0$.
*   **Check for Improvement:** $f(\mathbf{x}_{new}) = 0 < f(\mathbf{x}_b) = 1$. Yes, improvement.
*   **Pattern Move:**
    *   Pattern direction: $\mathbf{p} = \mathbf{x}_{new} - \mathbf{x}_b^{\text{original}} = (2, 3) - (3, 3) = (-1, 0)$.
    *   Predicted point: $\mathbf{x}_{predict} = \mathbf{x}_{new} + \mathbf{p} = (2, 3) + (-1, 0) = (1, 3)$.
    *   **Exploratory Move from $\mathbf{x}_{predict} = (1, 3)$, $\delta = 1$:**
        *   **Coordinate 1 ($x_1$):**
            *   Try positive step: $\mathbf{x} = (1+1, 3) = (2, 3)$. $f(2, 3) = (2-2)^2 + (3-3)^2 = 0$. $0 < f(\mathbf{x}_{new})=0$ is not true.
            *   Try negative step: $\mathbf{x} = (1-1, 3) = (0, 3)$. $f(0, 3) = (0-2)^2 + (3-3)^2 = 4$. $4 > 0$, no improvement.
        *   **Coordinate 2 ($x_2$):**
            *   Current point is $(1, 3)$. Try positive step: $\mathbf{x} = (1, 3+1) = (1, 4)$. $f(1, 4) = (1-2)^2 + (4-3)^2 = 1 + 1 = 2$. $2 > 0$, no improvement.
            *   Try negative step: $\mathbf{x} = (1, 3-1) = (1, 2)$. $f(1, 2) = (1-2)^2 + (2-3)^2 = 1 + 1 = 2$. $2 > 0$, no improvement.
    *   **Result of Exploratory Move from $\mathbf{x}_{predict}$:** $\mathbf{x}_{next\_base} = (1, 3)$. $f(\mathbf{x}_{next\_base}) = 2$. (Note: The exploratory move from (1,3) would result in (1,3) itself if the step size is not reduced or if it only checks adjacent points. If it can take larger steps, it might find better points. For simplicity in this manual trace, assume it performs a standard coordinate search.) *Correction*: In the exploratory move, if the starting point itself is better than tested points, the starting point remains. So, the exploratory move from (1,3) would yield (1,3).
    *   **Update Base Point:** $f(\mathbf{x}_{next\_base}) = 2 \not< f(\mathbf{x}_{new}) = 0$. Pattern move unsuccessful.
    *   New base point $\mathbf{x}_b = \mathbf{x}_{new} = (2, 3)$.
    *   Reduce $\delta$: $\delta = 1 / 2 = 0.5$.

**Iteration 3:**

*   **Base Point:** $\mathbf{x}_b = (2, 3)$, $f(\mathbf{x}_b) = 0$.
*   **Exploratory Move (from $\mathbf{x}_b = (2, 3)$, $\delta = 0.5$):**
    *   **Coordinate 1 ($x_1$):**
        *   Try positive step: $\mathbf{x} = (2+0.5, 3) = (2.5, 3)$. $f(2.5, 3) = (2.5-2)^2 + (3-3)^2 = 0.25$. $0.25 > 0$, no improvement.
        *   Try negative step: $\mathbf{x} = (2-0.5, 3) = (1.5, 3)$. $f(1.5, 3) = (1.5-2)^2 + (3-3)^2 = 0.25$. $0.25 > 0$, no improvement.
    *   **Coordinate 2 ($x_2$):**
        *   Current point is $(2, 3)$. Try positive step: $\mathbf{x} = (2, 3+0.5) = (2, 3.5)$. $f(2, 3.5) = (2-2)^2 + (3.5-3)^2 = 0.25$. $0.25 > 0$, no improvement.
        *   Try negative step: $\mathbf{x} = (2, 3-0.5) = (2, 2.5)$. $f(2, 2.5) = (2-2)^2 + (2.5-3)^2 = 0.25$. $0.25 > 0$, no improvement.
*   **Result of Exploratory Move:** $\mathbf{x}_{new} = (2, 3)$. $f(\mathbf{x}_{new}) = 0$.
*   **Check for Improvement:** $f(\mathbf{x}_{new}) = 0 \not< f(\mathbf{x}_b) = 0$. No improvement.
*   **Reduce $\delta$:** $\delta = 0.5 / 2 = 0.25$.

The algorithm will continue reducing $\delta$ until it is below the tolerance. Since the minimum is found exactly at $(2, 3)$ with $f(2,3)=0$, the algorithm will likely converge quickly to this point.

**The actual minimum is at (2, 3).**

### 4. Advantages and Disadvantages

**Advantages:**

*   **Simple to understand and implement:** The logic is straightforward, making it easy to program.
*   **Does not require gradient information:** Suitable for problems where derivatives are complex or unavailable.
*   **Can work well for many problems:** Especially when the objective function is unimodal.
*   **Exploratory and pattern moves accelerate convergence:** The pattern move helps to make larger strides towards the optimum.

**Disadvantages:**

*   **Can be slow to converge:** Especially if the step size reduction is too aggressive or the function has a very flat valley.
*   **Susceptible to getting stuck in local optima:** Like many direct search methods, it might not find the global minimum if multiple local minima exist.
*   **Sensitive to the initial step size:** A poorly chosen initial step size can affect performance.
*   **Not as efficient as gradient-based methods:** When gradients are available and the function is well-behaved, gradient methods usually converge faster.
*   **The choice of $\delta$ reduction strategy is important.**

### 5. Stopping Criteria

The most common stopping criterion for the Hooke and Jeeves method is when the step size $\delta$ becomes smaller than a specified tolerance $\epsilon$.

$$ \delta < \epsilon $$

Other potential stopping criteria include:

*   The change in the function value between iterations is very small.
*   The magnitude of the step taken in the pattern move is very small.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=gI-qXk7XojA) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=F_4HkL5r4n0) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=p6Q9_e7_L1w) |


### 6. Textbooks and References

This method is a classic direct search technique and is covered in most standard optimization textbooks.

*   **S.S Rao, "Engineering Optimization, Theory and Practice" (4th Edition, 2012):** Rao's book is a comprehensive resource for optimization techniques. Chapter 6, "Direct Search Methods," or a similar chapter will likely cover Hooke and Jeeves, detailing its steps, variations, and applications. It would provide theoretical underpinnings and practical examples of its use in engineering design.
*   **Xin-She Yang, "Optimization Techniques and Applications with Examples" (2018):** Yang's book, with its focus on applications and examples, would be excellent for understanding how Hooke and Jeeves is applied to real-world problems. It might discuss its suitability for specific types of engineering challenges.
*   **Deb K, "Optimization for Engineering Design Algorithms and Examples" (2000):** Deb's book is also a strong candidate for covering heuristic and direct search methods, providing algorithms and illustrative examples relevant to engineering design.
*   **Arora J, "Introduction to Optimization Design" (2004):** Arora's text would likely present Hooke and Jeeves as a fundamental direct search algorithm, emphasizing its role in optimization design processes.
*   **Chong, Edwin KP, Hak, Stanislaw H, "An introduction to optimization" (Fourth Edition, 2013):** This book, as a general introduction, would cover the core concepts of direct search methods, including Hooke and Jeeves, providing a solid theoretical foundation.

### 7. Practice Questions and Exercises

**Question 1:**
Explain the two main phases of the Hooke and Jeeves method. What is the purpose of each phase?

**Answer:**
The two main phases are the **Exploratory Move** and the **Pattern Move**.
*   **Exploratory Move:** Its purpose is to search the neighborhood of the current point along the coordinate axes to find a direction of improvement. It systematically tries to move in the positive and negative directions of each variable.
*   **Pattern Move:** Its purpose is to accelerate convergence. If an exploratory move yields an improvement, the pattern move takes a step in the direction of the recent improvement. This allows the algorithm to make larger jumps towards the optimum.

**Question 2:**
Consider the function $f(x_1, x_2) = x_1^2 + x_2^2$. Starting with $\mathbf{x}_0 = (3, 4)$ and $\delta = 1$, perform one iteration of the Hooke and Jeeves method.

**Answer:**
*   **Initialization:** $\mathbf{x}_b = (3, 4)$, $f(\mathbf{x}_b) = 3^2 + 4^2 = 9 + 16 = 25$. $\delta = 1$.
*   **Exploratory Move (from $\mathbf{x}_b = (3, 4)$, $\delta = 1$):**
    *   **Coordinate 1 ($x_1$):**
        *   Positive step: $\mathbf{x} = (3+1, 4) = (4, 4)$. $f(4, 4) = 4^2 + 4^2 = 16 + 16 = 32$. No improvement ($32 > 25$).
        *   Negative step: $\mathbf{x} = (3-1, 4) = (2, 4)$. $f(2, 4) = 2^2 + 4^2 = 4 + 16 = 20$. Improvement ($20 < 25$). Update current point to $(2, 4)$.
    *   **Coordinate 2 ($x_2$):**
        *   Current point is $(2, 4)$. Positive step: $\mathbf{x} = (2, 4+1) = (2, 5)$. $f(2, 5) = 2^2 + 5^2 = 4 + 25 = 29$. No improvement ($29 > 20$).
        *   Negative step: $\mathbf{x} = (2, 4-1) = (2, 3)$. $f(2, 3) = 2^2 + 3^2 = 4 + 9 = 13$. Improvement ($13 < 20$). Update current point to $(2, 3)$.
*   **Result of Exploratory Move:** $\mathbf{x}_{new} = (2, 3)$, $f(\mathbf{x}_{new}) = 13$.
*   **Check for Improvement:** $f(\mathbf{x}_{new}) = 13 < f(\mathbf{x}_b) = 25$. Yes, improvement.
*   **Pattern Move:**
    *   Pattern direction: $\mathbf{p} = \mathbf{x}_{new} - \mathbf{x}_b^{\text{original}} = (2, 3) - (3, 4) = (-1, -1)$.
    *   Predicted point: $\mathbf{x}_{predict} = \mathbf{x}_{new} + \mathbf{p} = (2, 3) + (-1, -1) = (1, 2)$.
    *   **Exploratory Move from $\mathbf{x}_{predict} = (1, 2)$, $\delta = 1$:**
        *   **Coordinate 1 ($x_1$):**
            *   Positive step: $\mathbf{x} = (1+1, 2) = (2, 2)$. $f(2, 2) = 2^2 + 2^2 = 8$. Improvement ($8 < f(\mathbf{x}_{new})=13$). Update $\mathbf{x}_{next\_base}$ to $(2, 2)$.
        *   **Coordinate 2 ($x_2$):**
            *   Current point is $(2, 2)$. Positive step: $\mathbf{x} = (2, 2+1) = (2, 3)$. $f(2, 3) = 2^2 + 3^2 = 13$. No improvement ($13 > 8$).
            *   Negative step: $\mathbf{x} = (2, 2-1) = (2, 1)$. $f(2, 1) = 2^2 + 1^2 = 4 + 1 = 5$. Improvement ($5 < 8$). Update $\mathbf{x}_{next\_base}$ to $(2, 1)$.
    *   **Result of Exploratory Move from $\mathbf{x}_{predict}$:** $\mathbf{x}_{next\_base} = (2, 1)$, $f(\mathbf{x}_{next\_base}) = 5$.
    *   **Update Base Point:** $f(\mathbf{x}_{next\_base}) = 5 < f(\mathbf{x}_{new}) = 13$. Yes, pattern move successful.
    *   New base point $\mathbf{x}_b = (2, 1)$.

After one iteration, the new base point is $(2, 1)$.

**Question 3:**
When would you choose the Hooke and Jeeves method over a gradient-based method like Steepest Descent?

**Answer:**
You would choose the Hooke and Jeeves method over a gradient-based method when:
1.  **The gradient of the objective function is difficult or impossible to compute:** This occurs for functions that are not differentiable or have complex derivative expressions.
2.  **Numerical differentiation is unreliable:** For functions with noisy evaluations or that are highly sensitive to small perturbations, numerical approximation of gradients can be inaccurate.
3.  **The problem structure is inherently suitable for direct search:** Sometimes, the nature of the search space or the function evaluation process makes direct search more efficient or practical.

### 8. Important Points to Remember

*   **Direct Search:** Hooke and Jeeves is a direct search method, meaning it doesn't use gradient information.
*   **Two Phases:** The core of the algorithm lies in its two phases: exploratory and pattern moves.
*   **Coordinate-wise Search:** The exploratory move typically progresses by searching along each coordinate axis.
*   **Acceleration:** The pattern move is designed to accelerate convergence by exploiting the direction of successful exploratory moves.
*   **Step Size Reduction:** A crucial part of the algorithm is reducing the step size $\delta$ when no improvement is found, to refine the search near the optimum.
*   **Convergence:** It typically converges to a local minimum.
*   **Robustness:** It's robust to functions with discontinuous derivatives or even non-differentiable points, as long as function evaluations are possible.

This concludes the study notes for the Hooke and Jeeves method within Module 2 of Optimization Techniques.