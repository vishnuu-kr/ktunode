---
title: "Hookes and Jeeves"
subject: "OPTIMIZATION TECHNIQUES"
module: "Module 2: Optimization algorithms for solving unconstrained nonlinear optimization problems – Search based techniques"
branch: "Electronics and Communication Engineering"
semester: 6
topicId: "68a5c460b09ce205780fef33"
status: "completed"
scrapedAt: "2026-05-23T18:02:34.198Z"
---
# OPTIMIZATION TECHNIQUES - Module 2: Optimization algorithms for solving unconstrained nonlinear optimization problems – Search based techniques

## Topic: Hooke and Jeeves Algorithm

### 1. Introduction to Hooke and Jeeves Algorithm

The Hooke and Jeeves algorithm is a direct search method for solving unconstrained nonlinear optimization problems. It is an **iterative** method that does not require the gradient of the objective function. Instead, it relies on function evaluations to explore the search space and locate the minimum. This makes it particularly useful when the gradient is difficult or impossible to compute, or when the objective function is noisy.

**Key Concepts:**

*   **Direct Search Method:** A class of optimization algorithms that do not use gradient information. They rely solely on comparing function values at different points in the search space.
*   **Unconstrained Nonlinear Optimization:** Finding the minimum or maximum of a function where there are no restrictions on the values of the decision variables, and the function is not linear.
*   **Iterative Method:** An algorithm that repeatedly applies a set of steps to converge towards a solution.

**Learning Outcome Addressed:**

*   While Hooke and Jeeves doesn't directly fall under gradient-based methods (CO3), it serves as a crucial alternative for scenarios where gradients are unavailable, demonstrating an understanding of different algorithmic approaches to unconstrained optimization (implicitly related to CO3 by understanding what *not* to do or what alternatives exist). It also aligns with the broader goal of applying optimization techniques (CO4, CO5) by providing a method for solving unconstrained problems.

**Reference Integration:**

*   **S.S Rao (4th Ed., 2012), Chapter 7 (Direct Search Methods):** This textbook provides a foundational understanding of direct search methods, including their principles and applications. Hooke and Jeeves would be a prominent example discussed here.
*   **Xin-She Yang (2018), Chapter 3 (Basic Optimization Algorithms):** Yang's book likely categorizes Hooke and Jeeves under search-based or direct search methods, explaining its mechanics and advantages.

### 2. Algorithm Description and Steps

The Hooke and Jeeves algorithm combines two types of moves: **exploratory moves** and **pattern moves**.

#### 2.1 Exploratory Moves

The goal of exploratory moves is to find a direction of improvement from a starting point. This is done by making small steps along each coordinate direction and checking if the function value improves.

**Steps for Exploratory Move:**

1.  **Start with an initial point (base point), $\mathbf{x}_0$.**
2.  **Establish an initial step size, $\Delta$.**
3.  **For each coordinate direction $i$ (from 1 to $n$):**
    *   Evaluate the objective function at $\mathbf{x}_i = \mathbf{x}_{i-1} + \Delta \mathbf{e}_i$, where $\mathbf{e}_i$ is a unit vector in the $i$-th direction.
    *   If $f(\mathbf{x}_i) < f(\mathbf{x}_{i-1})$, move to $\mathbf{x}_i$. Otherwise, evaluate $f(\mathbf{x}_{i+1}) = f(\mathbf{x}_{i-1}) - \Delta \mathbf{e}_i$. If $f(\mathbf{x}_{i+1}) < f(\mathbf{x}_{i-1})$, move to $\mathbf{x}_{i+1}$.
    *   If neither step improves the function value, stay at $\mathbf{x}_{i-1}$.
4.  **After checking all coordinate directions, the current point is the result of the exploratory move.** Let this new point be $\mathbf{x}_{new}$.

**Important Point:** The exploratory move effectively searches for a better point along the axes.

#### 2.2 Pattern Moves

Once an exploratory move has found an improved point, a pattern move is made to accelerate the search in a promising direction. This move is based on the direction of the previous successful exploratory move.

**Steps for Pattern Move:**

1.  **From the current best point $\mathbf{x}_{new}$ (obtained from exploratory moves), establish a pattern direction $\mathbf{p}$.** This direction is typically the vector from the previous base point to the current best point: $\mathbf{p} = \mathbf{x}_{new} - \mathbf{x}_{base}$.
2.  **Make a tentative move along the pattern direction:** $\mathbf{x}_{pattern} = \mathbf{x}_{new} + \beta \mathbf{p}$, where $\beta$ is a step size multiplier (often $\beta=1$).
3.  **Perform an exploratory move from $\mathbf{x}_{pattern}$.** Let the resulting point be $\mathbf{x}_{exploratory\_from\_pattern}$.
4.  **Compare function values:**
    *   If $f(\mathbf{x}_{exploratory\_from\_pattern}) < f(\mathbf{x}_{new})$, then the pattern move was successful. Update $\mathbf{x}_{base} = \mathbf{x}_{exploratory\_from\_pattern}$ and repeat the process (go back to step 1 for the next iteration).
    *   If $f(\mathbf{x}_{exploratory\_from\_pattern}) \ge f(\mathbf{x}_{new})$, then the pattern move was unsuccessful. The new base point becomes $\mathbf{x}_{new}$, and the step size $\Delta$ is reduced (e.g., halved). The algorithm then restarts with an exploratory move from this new base point.

**Important Point:** Pattern moves leverage the progress made to jump in a generally improving direction.

#### 2.3 Convergence Criteria

The algorithm terminates when a predefined convergence criterion is met. Common criteria include:

*   **Small step size:** The step size $\Delta$ becomes smaller than a specified tolerance ($\epsilon_1$).
*   **Small change in function value:** The difference between the function values at consecutive iterations is smaller than a specified tolerance ($\epsilon_2$).
*   **Maximum number of iterations:** The algorithm reaches a predefined maximum number of iterations.

**Important Point:** Convergence ensures that the algorithm has found a sufficiently good solution.

### 3. Algorithm Walkthrough and Example

Let's illustrate the Hooke and Jeeves algorithm with a simple example.

**Problem:** Minimize $f(x_1, x_2) = (x_1 - 2)^2 + (x_2 - 3)^2$

**Initial Conditions:**
*   Starting point: $\mathbf{x}_0 = (0, 0)$
*   Initial step size: $\Delta = 1.0$
*   Tolerance: $\epsilon_1 = 0.01$

**Iteration 1:**

*   **Base Point:** $\mathbf{x}_{base} = (0, 0)$, $f(\mathbf{x}_{base}) = (0-2)^2 + (0-3)^2 = 4 + 9 = 13$.
*   **Exploratory Move:**
    *   **Direction 1 (x1):**
        *   Test point 1: $(0 + 1, 0) = (1, 0)$. $f(1, 0) = (1-2)^2 + (0-3)^2 = 1 + 9 = 10$. Since $10 < 13$, move to $(1, 0)$.
        *   Current point: $(1, 0)$.
    *   **Direction 2 (x2):**
        *   Test point 2: $(1, 0 + 1) = (1, 1)$. $f(1, 1) = (1-2)^2 + (1-3)^2 = 1 + 4 = 5$. Since $5 < 10$, move to $(1, 1)$.
        *   Current point: $(1, 1)$.
    *   **Result of Exploratory Move:** $\mathbf{x}_{new} = (1, 1)$. $f(\mathbf{x}_{new}) = 5$.

*   **Pattern Move:**
    *   Pattern direction: $\mathbf{p} = \mathbf{x}_{new} - \mathbf{x}_{base} = (1, 1) - (0, 0) = (1, 1)$.
    *   Tentative pattern point: $\mathbf{x}_{pattern} = \mathbf{x}_{new} + \mathbf{p} = (1, 1) + (1, 1) = (2, 2)$.
    *   **Exploratory Move from $\mathbf{x}_{pattern} = (2, 2)$:**
        *   Current point: $(2, 2)$, $f(2, 2) = (2-2)^2 + (2-3)^2 = 0 + 1 = 1$.
        *   **Direction 1 (x1):**
            *   Test point 1: $(2 + 1, 2) = (3, 2)$. $f(3, 2) = (3-2)^2 + (2-3)^2 = 1 + 1 = 2$. Since $2 \not< 1$, stay at $(2, 2)$.
            *   Test point 2: $(2 - 1, 2) = (1, 2)$. $f(1, 2) = (1-2)^2 + (2-3)^2 = 1 + 1 = 2$. Since $2 \not< 1$, stay at $(2, 2)$.
            *   Current point after x1 exploration: $(2, 2)$.
        *   **Direction 2 (x2):**
            *   Test point 1: $(2, 2 + 1) = (2, 3)$. $f(2, 3) = (2-2)^2 + (3-3)^2 = 0 + 0 = 0$. Since $0 < 1$, move to $(2, 3)$.
            *   Current point after x2 exploration: $(2, 3)$.
        *   **Result of Exploratory Move from Pattern:** $\mathbf{x}_{exploratory\_from\_pattern} = (2, 3)$. $f(\mathbf{x}_{exploratory\_from\_pattern}) = 0$.

    *   **Compare:** $f(\mathbf{x}_{exploratory\_from\_pattern}) = 0 < f(\mathbf{x}_{new}) = 5$. Pattern move is successful.
    *   Update $\mathbf{x}_{base} = (2, 3)$.
    *   Since the pattern move was successful, we repeat the process with the new $\mathbf{x}_{base} = (2, 3)$ and the same step size $\Delta = 1.0$.

**Iteration 2:**

*   **Base Point:** $\mathbf{x}_{base} = (2, 3)$, $f(\mathbf{x}_{base}) = (2-2)^2 + (3-3)^2 = 0$.
*   **Exploratory Move:**
    *   **Direction 1 (x1):**
        *   Test point 1: $(2 + 1, 3) = (3, 3)$. $f(3, 3) = (3-2)^2 + (3-3)^2 = 1 + 0 = 1$. Since $1 \not< 0$, stay at $(2, 3)$.
        *   Test point 2: $(2 - 1, 3) = (1, 3)$. $f(1, 3) = (1-2)^2 + (3-3)^2 = 1 + 0 = 1$. Since $1 \not< 0$, stay at $(2, 3)$.
        *   Current point: $(2, 3)$.
    *   **Direction 2 (x2):**
        *   Test point 1: $(2, 3 + 1) = (2, 4)$. $f(2, 4) = (2-2)^2 + (4-3)^2 = 0 + 1 = 1$. Since $1 \not< 0$, stay at $(2, 3)$.
        *   Test point 2: $(2, 3 - 1) = (2, 2)$. $f(2, 2) = (2-2)^2 + (2-3)^2 = 0 + 1 = 1$. Since $1 \not< 0$, stay at $(2, 3)$.
        *   Current point: $(2, 3)$.
    *   **Result of Exploratory Move:** $\mathbf{x}_{new} = (2, 3)$. $f(\mathbf{x}_{new}) = 0$.

*   **Pattern Move:**
    *   Pattern direction: $\mathbf{p} = \mathbf{x}_{new} - \mathbf{x}_{base} = (2, 3) - (2, 3) = (0, 0)$.
    *   Tentative pattern point: $\mathbf{x}_{pattern} = \mathbf{x}_{new} + \mathbf{p} = (2, 3) + (0, 0) = (2, 3)$.
    *   **Exploratory Move from $\mathbf{x}_{pattern} = (2, 3)$:**
        *   The exploratory move from $(2, 3)$ results in $(2, 3)$ itself, as no improvement is found with the current step size.
        *   **Result of Exploratory Move from Pattern:** $\mathbf{x}_{exploratory\_from\_pattern} = (2, 3)$. $f(\mathbf{x}_{exploratory\_from\_pattern}) = 0$.

    *   **Compare:** $f(\mathbf{x}_{exploratory\_from\_pattern}) = 0 \ge f(\mathbf{x}_{new}) = 0$. Pattern move is unsuccessful.
    *   The step size $\Delta$ is reduced, e.g., $\Delta = \Delta / 2 = 1.0 / 2 = 0.5$.
    *   The new base point becomes $\mathbf{x}_{base} = \mathbf{x}_{new} = (2, 3)$.
    *   Restart with an exploratory move from $\mathbf{x}_{base} = (2, 3)$ with $\Delta = 0.5$.

**Iteration 3:**

*   **Base Point:** $\mathbf{x}_{base} = (2, 3)$, $f(\mathbf{x}_{base}) = 0$.
*   **Exploratory Move:** Since we are already at the optimum, any step will likely increase the function value.
    *   Exploring with $\Delta = 0.5$ will also result in no improvement from $(2, 3)$.
    *   **Result of Exploratory Move:** $\mathbf{x}_{new} = (2, 3)$. $f(\mathbf{x}_{new}) = 0$.
*   **Pattern Move:** Similar to Iteration 2, the pattern move will be unsuccessful, and $\Delta$ will be reduced further.

The algorithm will continue to reduce $\Delta$ until it is less than the tolerance $\epsilon_1 = 0.01$. At this point, the algorithm will terminate, and the minimum will be found at or near $(2, 3)$.

**Reference Integration:**

*   **Deb K (2000), Chapter 4 (Unconstrained Optimization Techniques):** Deb's book likely provides numerical examples of direct search methods like Hooke and Jeeves, detailing the step-by-step execution.

### 4. Advantages and Disadvantages

**Advantages:**

*   **No Gradient Information Required:** This is its primary advantage, making it suitable for problems where gradients are unavailable, undefined, or noisy.
*   **Simple to Implement:** The logic of exploratory and pattern moves is relatively straightforward.
*   **Can Escape Local Minima (to some extent):** The pattern moves can sometimes help the algorithm jump out of shallow local minima.
*   **Robust for Certain Problem Types:** Can perform well on problems with unimodal functions.

**Disadvantages:**

*   **Slow Convergence:** Compared to gradient-based methods, Hooke and Jeeves can converge much slower, especially near the optimum.
*   **Sensitivity to Step Size:** The initial step size and the reduction factor can significantly impact the performance and convergence.
*   **Can Get Stuck in Ravines:** The axis-by-axis exploration can be inefficient in narrow ravines where the function changes rapidly perpendicular to the ravine's direction.
*   **Does not guarantee global optimality:** Like most unconstrained optimization methods, it can converge to a local minimum.

**Reference Integration:**

*   **Arora J (2004), Chapter 3 (Basic Concepts of Optimization):** Arora's text would likely discuss the general trade-offs between different optimization methods, including the characteristics of direct search methods like Hooke and Jeeves.

### 5. Relation to Other Optimization Techniques

*   **Gradient Descent:** Hooke and Jeeves is a stark contrast to gradient descent, which uses derivative information to move towards the minimum. While gradient descent is typically faster when gradients are available, Hooke and Jeeves is a valuable alternative when they are not.
*   **Nelder-Mead (Simplex) Method:** Both are direct search methods. Nelder-Mead uses a simplex (a geometric figure with n+1 vertices in n-dimensional space) and manipulates it (reflection, expansion, contraction, shrinkage) to find the minimum. Hooke and Jeeves focuses on axis-wise exploration and pattern acceleration.
*   **Coordinate Search:** Hooke and Jeeves incorporates elements of coordinate search (exploratory moves) but adds the pattern move to accelerate convergence.

**Learning Outcome Addressed:**

*   This section implicitly supports **CO1** by demonstrating how different optimization problem formulations (requiring gradient vs. no gradient) lead to different algorithmic choices. It also provides context for **CO3** by highlighting the differences from gradient-based methods.

### 6. Practice Questions and Exercises

**Question 1:**
Explain the two main types of moves used in the Hooke and Jeeves algorithm. What is the purpose of each?

**Answer 1:**
The two main types of moves are:
1.  **Exploratory Moves:** These moves aim to find an improved point from a current point by searching along each coordinate direction. They involve taking steps along the positive and negative directions of each axis to see if the objective function value decreases.
2.  **Pattern Moves:** These moves are used to accelerate the search process. Once an improvement is found via an exploratory move, a pattern move is made in the direction of the successful exploration. This is followed by another exploratory move from the new point to confirm improvement.

**Question 2:**
Consider the function $f(x_1, x_2) = x_1^2 + x_2^2$. If the current base point is $(1, 1)$ and the step size $\Delta = 0.5$, perform one full iteration of the Hooke and Jeeves algorithm. Assume the pattern move is successful.

**Answer 2:**

*   **Initial Base Point:** $\mathbf{x}_{base} = (1, 1)$, $f(1, 1) = 1^2 + 1^2 = 2$. $\Delta = 0.5$.

*   **Exploratory Move:**
    *   **Direction 1 (x1):**
        *   Test point 1: $(1 + 0.5, 1) = (1.5, 1)$. $f(1.5, 1) = 1.5^2 + 1^2 = 2.25 + 1 = 3.25$. Not better.
        *   Test point 2: $(1 - 0.5, 1) = (0.5, 1)$. $f(0.5, 1) = 0.5^2 + 1^2 = 0.25 + 1 = 1.25$. Better.
        *   Current point after x1: $(0.5, 1)$.
    *   **Direction 2 (x2):**
        *   Test point 1: $(0.5, 1 + 0.5) = (0.5, 1.5)$. $f(0.5, 1.5) = 0.5^2 + 1.5^2 = 0.25 + 2.25 = 2.5$. Not better.
        *   Test point 2: $(0.5, 1 - 0.5) = (0.5, 0.5)$. $f(0.5, 0.5) = 0.5^2 + 0.5^2 = 0.25 + 0.25 = 0.5$. Better.
        *   Current point after x2: $(0.5, 0.5)$.
    *   **Result of Exploratory Move:** $\mathbf{x}_{new} = (0.5, 0.5)$. $f(\mathbf{x}_{new}) = 0.5$.

*   **Pattern Move:**
    *   Pattern direction: $\mathbf{p} = \mathbf{x}_{new} - \mathbf{x}_{base} = (0.5, 0.5) - (1, 1) = (-0.5, -0.5)$.
    *   Tentative pattern point: $\mathbf{x}_{pattern} = \mathbf{x}_{new} + \mathbf{p} = (0.5, 0.5) + (-0.5, -0.5) = (0, 0)$.
    *   **Exploratory Move from $\mathbf{x}_{pattern} = (0, 0)$:**
        *   Current point: $(0, 0)$, $f(0, 0) = 0$.
        *   Direction 1 (x1): No improvement.
        *   Direction 2 (x2): No improvement.
        *   **Result of Exploratory Move from Pattern:** $\mathbf{x}_{exploratory\_from\_pattern} = (0, 0)$. $f(\mathbf{x}_{exploratory\_from\_pattern}) = 0$.
    *   **Compare:** $f(\mathbf{x}_{exploratory\_from\_pattern}) = 0 < f(\mathbf{x}_{new}) = 0.5$. Pattern move is successful.
    *   **New Base Point:** $\mathbf{x}_{base} = (0, 0)$. The algorithm would continue from here with the same $\Delta$.

**Question 3:**
Under what circumstances would you prefer the Hooke and Jeeves algorithm over a gradient-based method?

**Answer 3:**
You would prefer the Hooke and Jeeves algorithm when:
*   The objective function is non-differentiable or its gradient is difficult/expensive to compute.
*   The objective function is noisy, making gradient estimation unreliable.
*   Simplicity of implementation is a priority, and computational speed is less critical.
*   The problem structure is not well-suited for gradient methods (e.g., presence of many flat regions where gradients are zero).

### 7. Important Points to Remember

*   **Direct Search:** Hooke and Jeeves is a direct search method, meaning it only uses function evaluations, not gradient information.
*   **Two Move Types:** The algorithm is characterized by its **exploratory moves** (axis-wise search) and **pattern moves** (accelerated search along promising directions).
*   **Step Size Reduction:** A crucial aspect is the reduction of the step size when pattern moves fail, ensuring convergence.
*   **Convergence:** Termination typically occurs when the step size becomes sufficiently small.
*   **Limitations:** Can be slow and struggle in ravines compared to gradient-based methods.

### 8. Conclusion

The Hooke and Jeeves algorithm is a valuable direct search technique for unconstrained nonlinear optimization, particularly when gradient information is unavailable. Its combination of exploratory and pattern moves provides a systematic way to explore the search space and converge towards a minimum. While it has limitations in terms of speed and performance in certain problem structures, its simplicity and robustness make it a useful tool in the optimization practitioner's arsenal.

---
This concludes the study notes on the Hooke and Jeeves algorithm for Module 2. Ensure you practice applying the algorithm to different functions to solidify your understanding.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=gI-qXk7XojA) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=F_4HkL5r4n0) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=p6Q9_e7_L1w) |
