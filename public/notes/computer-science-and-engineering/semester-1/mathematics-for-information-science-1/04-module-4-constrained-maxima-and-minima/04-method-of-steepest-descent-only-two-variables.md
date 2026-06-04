---
title: "Method of Steepest Descent (only two variables)"
subject: "MATHEMATICS FOR INFORMATION SCIENCE – 1"
module: "Module 4: Constrained Maxima and Minima"
branch: "Computer Science and Engineering"
semester: 1
topicId: "68b45b6e58474a0b135b5be2"
status: "completed"
scrapedAt: "2026-05-20T16:40:37.212Z"
---
Absolutely! Let's dive into the fascinating world of the Method of Steepest Descent for functions of two variables. This is a powerful technique that helps us find the minimum (or maximum) of a function, especially when we can't easily solve it directly.

## Module 4: Constrained Maxima and Minima - Method of Steepest Descent (Two Variables)

Welcome, everyone! Today, we're going to explore a really important topic in our journey through Mathematics for Information Science: the **Method of Steepest Descent**. Think of it as a sophisticated way to find the lowest point in a valley or, conversely, the highest peak on a mountain, when you can't just "see" it directly. This method is particularly relevant when we're dealing with optimization problems, which are everywhere in computer science and data analysis.

Our focus today is specifically on functions of **two variables**, say $f(x, y)$. While the method can be extended to more variables, understanding it for two is crucial. This directly connects to **Course Outcome 4 (CO4)**: "Solve constrained maxima and minima, LPP and understand the method of Steepest Descent." We’ll see how this iterative process helps us navigate towards optimal solutions.

### 1. The Big Picture: Why Steepest Descent?

Imagine you're hiking in a dense fog and you want to reach the lowest point in the valley. You can't see far, but you can feel the ground under your feet. What would you do? You'd probably feel around and take a step in the direction where the ground slopes down the *most* steeply. You'd repeat this process: feel the slope, step downhill, feel the new slope, step downhill again. Eventually, you'd find yourself at the bottom of the valley.

That's essentially what the Method of Steepest Descent does! It's an **iterative optimization algorithm**. Instead of directly calculating where the minimum is (which might be impossible for complex functions), it takes a series of steps, each one guided by the steepest downward slope at the current position.

**What are we trying to achieve?**
Our goal is to find a point $(x^*, y^*)$ such that $f(x^*, y^*) \le f(x, y)$ for all $(x, y)$ in the domain. This is a classic **unconstrained optimization** problem. We are looking for the minimum value of our function.

**Connection to Course Outcomes:**
*   **CO3 (Interpret directional derivative and solve maxima and minima):** The "steepest slope" is directly related to the **gradient vector**, which tells us the direction of the steepest *increase*. The direction of steepest *decrease* is the negative of the gradient. We'll be using the concept of directional derivatives implicitly here.
*   **CO4 (Understand the method of Steepest Descent):** This is our primary focus, understanding how this iterative method works to find minima.

**Textbook Mentions:**
You'll find discussions of gradient-based methods, including steepest descent, in most multivariable calculus texts. For example, **Thomas' Calculus** often introduces the gradient as a tool for finding the direction of maximum increase, a concept we'll reverse here. **Kreyszig's Advanced Engineering Mathematics** goes into more depth on optimization techniques, which is where you'll find a more formal treatment of algorithms like steepest descent.

### 2. The Key Ingredient: The Gradient

Before we take our first step, we need a way to measure "steepness." In multivariable calculus, this is where the **gradient** comes in.

For a function of two variables, $f(x, y)$, the gradient is a vector that points in the direction of the greatest rate of increase of the function at a given point $(x, y)$. It's defined as:

$\nabla f(x, y) = \left( \frac{\partial f}{\partial x}, \frac{\partial f}{\partial y} \right)$

Here, $\frac{\partial f}{\partial x}$ is the partial derivative of $f$ with respect to $x$, and $\frac{\partial f}{\partial y}$ is the partial derivative of $f$ with respect to $y$. These partial derivatives tell us how the function changes as we move along the x-axis and y-axis, respectively.

**Visualizing the Gradient:**
Think of a contour map of a mountain. The gradient vector at any point on the map points perpendicularly to the contour line at that point, and it points "uphill." If you want to go downhill, you simply move in the *opposite* direction of the gradient.

**Important Point:** The direction of **steepest descent** at $(x, y)$ is given by $-\nabla f(x, y)$.

**Connection to Course Outcomes:**
*   **CO2 (Calculate partial derivatives):** The gradient is fundamentally built upon partial derivatives. So, mastering CO2 is essential for understanding the gradient.
*   **CO3 (Interpret directional derivative):** The magnitude of the gradient, $\|\nabla f(x, y)\|$, is the maximum directional derivative. The direction of the gradient is the direction of the maximum directional derivative.

### 3. The Steepest Descent Algorithm (for Two Variables)

Now, let's put it all together into an algorithm. The Method of Steepest Descent is an iterative process. We start at an initial guess, $(x_0, y_0)$, and repeatedly move in the direction of the steepest descent until we get "close enough" to a minimum.

Here's how it works, step-by-step:

**Step 1: Initialization**
Choose an initial guess $(x_0, y_0)$ for the minimum. This is your starting point.

**Step 2: Calculate the Gradient**
At the current point $(x_k, y_k)$, calculate the gradient of $f$:
$\nabla f(x_k, y_k) = \left( \frac{\partial f}{\partial x}(x_k, y_k), \frac{\partial f}{\partial y}(x_k, y_k) \right)$

**Step 3: Determine the Direction of Descent**
The direction of steepest descent is the negative of the gradient:
$d_k = -\nabla f(x_k, y_k)$

**Step 4: Find the Optimal Step Size (Line Search)**
This is a crucial step. We don't want to take too big or too small a step. We want to find a step size, $\alpha_k$, such that moving from $(x_k, y_k)$ by $\alpha_k$ in the direction $d_k$ results in the *largest possible decrease* in the function $f$.

Mathematically, we want to find $\alpha_k > 0$ that minimizes the function $g(\alpha) = f(x_k + \alpha d_{k,x}, y_k + \alpha d_{k,y})$, where $d_k = (d_{k,x}, d_{k,y})$.

This process of finding the optimal step size is called **line search**. For simple functions, we might be able to find this analytically by setting the derivative of $g(\alpha)$ with respect to $\alpha$ to zero. For more complex functions, numerical methods are used for the line search.

**Step 5: Update the Position**
Calculate the next point $(x_{k+1}, y_{k+1})$ using the current point, the direction of descent, and the optimal step size:

$(x_{k+1}, y_{k+1}) = (x_k, y_k) + \alpha_k d_k$

**Step 6: Check for Convergence**
We need to decide when to stop. We stop when the steps are very small or the gradient is close to zero. Common stopping criteria include:
*   $\|\nabla f(x_{k+1}, y_{k+1})\|$ is less than a small tolerance $\epsilon_1$.
*   $\|(x_{k+1}, y_{k+1}) - (x_k, y_k)\|$ is less than a small tolerance $\epsilon_2$.
*   $|f(x_{k+1}, y_{k+1}) - f(x_k, y_k)|$ is less than a small tolerance $\epsilon_3$.

If none of the stopping criteria are met, we go back to Step 2 with $(x_{k+1}, y_{k+1})$ as our new current point and repeat the process.

**Remember this:** Steepest descent is all about following the "downhill trail" as precisely as possible at each stage.

### 4. An Illustrative Example: Finding the Minimum of a Simple Quadratic Function

Let's try this with a concrete example. Suppose we want to find the minimum of the function:

$f(x, y) = x^2 + y^2$

This is a simple parabola opening upwards, with its minimum at $(0, 0)$. But let's pretend we don't know that and use Steepest Descent!

**Connection to Course Outcomes:**
*   This example directly applies the algorithm learned, helping us achieve **CO4**.
*   It also reinforces our understanding of partial derivatives from **CO2** and the concept of minima from **CO3**.

**Initial Guess:**
Let our starting point be $(x_0, y_0) = (3, 2)$.

**Iteration 1:**
*   **Step 2: Calculate Gradient**
    $\frac{\partial f}{\partial x} = 2x$
    $\frac{\partial f}{\partial y} = 2y$
    So, $\nabla f(x, y) = (2x, 2y)$.
    At $(3, 2)$, $\nabla f(3, 2) = (2 \times 3, 2 \times 2) = (6, 4)$.

*   **Step 3: Direction of Descent**
    $d_1 = -\nabla f(3, 2) = -(6, 4) = (-6, -4)$.

*   **Step 4: Find Optimal Step Size**
    We want to minimize $g(\alpha) = f(3 - 6\alpha, 2 - 4\alpha)$.
    $g(\alpha) = (3 - 6\alpha)^2 + (2 - 4\alpha)^2$
    $g(\alpha) = (9 - 36\alpha + 36\alpha^2) + (4 - 16\alpha + 16\alpha^2)$
    $g(\alpha) = 13 - 52\alpha + 52\alpha^2$

    To find the minimum of $g(\alpha)$, we take its derivative with respect to $\alpha$ and set it to zero:
    $g'(\alpha) = -52 + 104\alpha$
    Set $g'(\alpha) = 0 \implies -52 + 104\alpha = 0 \implies \alpha = \frac{52}{104} = 0.5$.
    So, $\alpha_1 = 0.5$.

*   **Step 5: Update Position**
    $(x_1, y_1) = (x_0, y_0) + \alpha_1 d_1$
    $(x_1, y_1) = (3, 2) + 0.5 \times (-6, -4)$
    $(x_1, y_1) = (3, 2) + (-3, -2)$
    $(x_1, y_1) = (0, 0)$

*   **Step 6: Check for Convergence**
    Our new point is $(0, 0)$. Let's calculate the gradient at $(0, 0)$:
    $\nabla f(0, 0) = (2 \times 0, 2 \times 0) = (0, 0)$.
    Since the gradient is $(0, 0)$, we have reached the minimum! The process terminates in just one step for this simple function.

**What if our initial guess was $(3, 4)$?**

**Iteration 1 (from (3, 4)):**
*   $\nabla f(3, 4) = (6, 8)$
*   $d_1 = (-6, -8)$
*   Minimize $g(\alpha) = f(3 - 6\alpha, 4 - 8\alpha) = (3 - 6\alpha)^2 + (4 - 8\alpha)^2$
    $g(\alpha) = (9 - 36\alpha + 36\alpha^2) + (16 - 64\alpha + 64\alpha^2)$
    $g(\alpha) = 25 - 100\alpha + 100\alpha^2$
    $g'(\alpha) = -100 + 200\alpha = 0 \implies \alpha_1 = 0.5$.
*   $(x_1, y_1) = (3, 4) + 0.5 \times (-6, -8) = (3, 4) + (-3, -4) = (0, 0)$.
Again, we reach $(0, 0)$ in one step.

This example shows how the method systematically moves towards the minimum. For more complex functions, it might take many iterations.

### 5. A More Relatable Analogy: Finding the Lowest Point in a Real Landscape

Let's try a less mathematical analogy. Suppose you are blindfolded on a hilly terrain, and you want to find the absolute lowest point.

*   **Your current location** is $(x_k, y_k)$.
*   You can feel the **slope** of the ground around you. The gradient vector points uphill.
*   You take a step in the direction where the ground is **steepest downwards** (the direction of $-\nabla f$). This is your $d_k$.
*   Now, you need to decide **how far** to step. If you take tiny steps, it will take forever. If you take giant leaps, you might overshoot the lowest point and end up on the other side of a valley. You need to choose a step size $\alpha_k$ that takes you as far down as possible along that specific path. This is the line search.
*   After taking the step, you are at a **new location** $(x_{k+1}, y_{k+1})$.
*   You repeat the process: feel the slope, choose a downhill direction, decide how far to step, and move.
*   You stop when the ground is almost flat around you (gradient is near zero) or when your steps become extremely small, indicating you're likely at the bottom.

**Think about the "Line Search" more:**
The step size $\alpha_k$ is crucial. Imagine walking down a steep hill. If you always take a step that's precisely half the distance to the bottom of the hill, you will get closer and closer to the bottom without ever quite reaching it in a finite number of steps. This is a characteristic of some line search methods. However, we often aim to find a step size that *minimizes* the function along the chosen direction.

In practice, finding the exact minimum along the direction $d_k$ can be hard. So, we often use approximations or "good enough" step sizes. However, for the purpose of understanding the core concept and for exam-style questions, we'll focus on cases where we *can* find this optimal $\alpha$.

### 6. Limitations and Considerations

While powerful, the Method of Steepest Descent isn't perfect:

*   **"Zig-zagging":** For some functions, especially those with long, narrow valleys (like quadratic functions with very different eigenvalues in their Hessian), the steepest descent method can exhibit a "zig-zagging" behavior. It might take many steps to reach the minimum because the gradient direction might oscillate back and forth across the valley. This can make convergence slow.
*   **Local vs. Global Minima:** Like most gradient-based methods, steepest descent is guaranteed to converge to a *local* minimum, not necessarily the *global* minimum. If your function has multiple "dips," the algorithm will stop at the first one it finds based on your starting point. This is a critical concept to remember for problem-solving.
*   **Step Size Selection:** The efficiency of the method heavily depends on how well the step size $\alpha_k$ is chosen. A poor choice can lead to very slow convergence or even divergence.

**Connection to Course Outcomes:**
*   Understanding these limitations helps in analyzing the behavior of optimization algorithms, which is part of the broader scope of **CO4**.

### 7. Example with a More Complex Function

Let's try a function where the minimum isn't at the origin, and maybe the steps aren't so straightforward.

Consider $f(x, y) = x^2 + 2y^2 - 4x + 8y + 10$.

**Goal:** Find the minimum.

First, let's see if we can find the minimum analytically using partial derivatives. We set the partial derivatives to zero:
$\frac{\partial f}{\partial x} = 2x - 4 = 0 \implies x = 2$
$\frac{\partial f}{\partial y} = 4y + 8 = 0 \implies y = -2$
So, the minimum is at $(2, -2)$.

Now, let's use Steepest Descent.
Initial Guess: $(x_0, y_0) = (0, 0)$.

**Iteration 1:**
*   **Gradient:** $\nabla f(x, y) = (2x - 4, 4y + 8)$.
    At $(0, 0)$: $\nabla f(0, 0) = (2(0) - 4, 4(0) + 8) = (-4, 8)$.
*   **Direction of Descent:** $d_1 = -\nabla f(0, 0) = -(-4, 8) = (4, -8)$.
*   **Line Search:** Minimize $g(\alpha) = f(0 + 4\alpha, 0 - 8\alpha) = f(4\alpha, -8\alpha)$.
    $g(\alpha) = (4\alpha)^2 + 2(-8\alpha)^2 - 4(4\alpha) + 8(-8\alpha) + 10$
    $g(\alpha) = 16\alpha^2 + 2(64\alpha^2) - 16\alpha - 64\alpha + 10$
    $g(\alpha) = 16\alpha^2 + 128\alpha^2 - 80\alpha + 10$
    $g(\alpha) = 144\alpha^2 - 80\alpha + 10$

    To find the minimum of $g(\alpha)$:
    $g'(\alpha) = 288\alpha - 80 = 0$
    $\alpha = \frac{80}{288} = \frac{10}{36} = \frac{5}{18}$.
    So, $\alpha_1 = \frac{5}{18}$.

*   **Update Position:**
    $(x_1, y_1) = (x_0, y_0) + \alpha_1 d_1$
    $(x_1, y_1) = (0, 0) + \frac{5}{18} (4, -8)$
    $(x_1, y_1) = \left( \frac{20}{18}, -\frac{40}{18} \right) = \left( \frac{10}{9}, -\frac{20}{9} \right)$
    Approximately $(1.11, -2.22)$.

**Iteration 2:**
*   **Gradient at $(x_1, y_1) = (\frac{10}{9}, -\frac{20}{9})$:**
    $\frac{\partial f}{\partial x} = 2x - 4 = 2(\frac{10}{9}) - 4 = \frac{20}{9} - \frac{36}{9} = -\frac{16}{9}$
    $\frac{\partial f}{\partial y} = 4y + 8 = 4(-\frac{20}{9}) + 8 = -\frac{80}{9} + \frac{72}{9} = -\frac{8}{9}$
    $\nabla f(\frac{10}{9}, -\frac{20}{9}) = (-\frac{16}{9}, -\frac{8}{9})$.

*   **Direction of Descent:** $d_2 = -\nabla f(\frac{10}{9}, -\frac{20}{9}) = -(-\frac{16}{9}, -\frac{8}{9}) = (\frac{16}{9}, \frac{8}{9})$.

*   **Line Search:** Minimize $g(\alpha) = f(\frac{10}{9} + \alpha \frac{16}{9}, -\frac{20}{9} + \alpha \frac{8}{9})$.
    This gets a bit algebraically intensive, but you would follow the same procedure: substitute into $f(x, y)$, simplify, find $g'(\alpha)$, set to zero, and solve for $\alpha_2$.

    Alternatively, for a quadratic function $f(\mathbf{x}) = \frac{1}{2}\mathbf{x}^T A \mathbf{x} - \mathbf{b}^T \mathbf{x} + c$, the gradient is $\nabla f(\mathbf{x}) = A\mathbf{x} - \mathbf{b}$. The update rule is $\mathbf{x}_{k+1} = \mathbf{x}_k + \alpha_k d_k$, where $d_k = -(A\mathbf{x}_k - \mathbf{b})$. The optimal $\alpha_k$ is often found to be $\alpha_k = \frac{d_k^T d_k}{d_k^T A d_k}$.
    For $f(x, y) = x^2 + 2y^2 - 4x + 8y + 10$, we can rewrite it.
    Let $\mathbf{x} = \begin{pmatrix} x \\ y \end{pmatrix}$.
    $f(\mathbf{x}) = \begin{pmatrix} x & y \end{pmatrix} \begin{pmatrix} 1 & 0 \\ 0 & 2 \end{pmatrix} \begin{pmatrix} x \\ y \end{pmatrix} - \begin{pmatrix} 4 & -8 \end{pmatrix} \begin{pmatrix} x \\ y \end{pmatrix} + 10$
    No, this isn't quite right. A better form is $f(\mathbf{x}) = \frac{1}{2}\mathbf{x}^T A \mathbf{x} - \mathbf{b}^T \mathbf{x} + c$ where $A$ is symmetric.
    Let's complete the square for $f(x, y) = (x^2 - 4x) + 2(y^2 + 4y) + 10$
    $f(x, y) = (x-2)^2 - 4 + 2((y+2)^2 - 4) + 10$
    $f(x, y) = (x-2)^2 + 2(y+2)^2 - 4 - 8 + 10$
    $f(x, y) = (x-2)^2 + 2(y+2)^2 - 2$.
    The minimum is indeed at $(2, -2)$.

    Let's use the gradient and direction to find $\alpha_2$ more directly in terms of the general form.
    Current point: $\mathbf{x}_1 = (\frac{10}{9}, -\frac{20}{9})$.
    Gradient: $\nabla f(\mathbf{x}_1) = (-\frac{16}{9}, -\frac{8}{9})$.
    Direction: $d_2 = (\frac{16}{9}, \frac{8}{9})$.
    We need to minimize $g(\alpha) = f(\mathbf{x}_1 + \alpha d_2)$.
    $x_{k+1} = x_k + \alpha d_{k,x}$
    $y_{k+1} = y_k + \alpha d_{k,y}$
    Substitute $\mathbf{x}_1$ and $d_2$ into the completed square form:
    $f(\frac{10}{9} + \alpha \frac{16}{9}, -\frac{20}{9} + \alpha \frac{8}{9}) = ((\frac{10}{9} + \alpha \frac{16}{9}) - 2)^2 + 2((-\frac{20}{9} + \alpha \frac{8}{9}) + 2)^2 - 2$
    $= (\frac{10 + 16\alpha - 18}{9})^2 + 2(\frac{-20 + 8\alpha + 18}{9})^2 - 2$
    $= (\frac{16\alpha - 8}{9})^2 + 2(\frac{8\alpha - 2}{9})^2 - 2$
    $= \frac{64\alpha^2 - 128\alpha + 64}{81} + 2 \frac{64\alpha^2 - 32\alpha + 4}{81} - 2$
    $= \frac{64\alpha^2 - 128\alpha + 64 + 128\alpha^2 - 64\alpha + 8}{81} - 2$
    $= \frac{192\alpha^2 - 192\alpha + 72}{81} - 2$
    $= \frac{64\alpha^2 - 64\alpha + 24}{27} - \frac{54}{27}$
    $= \frac{64\alpha^2 - 64\alpha - 30}{27}$

    Let $h(\alpha) = \frac{64\alpha^2 - 64\alpha - 30}{27}$.
    $h'(\alpha) = \frac{128\alpha - 64}{27} = 0$
    $128\alpha = 64 \implies \alpha_2 = \frac{64}{128} = 0.5 = \frac{1}{2}$.

*   **Update Position:**
    $(x_2, y_2) = (x_1, y_1) + \alpha_2 d_2$
    $(x_2, y_2) = (\frac{10}{9}, -\frac{20}{9}) + \frac{1}{2} (\frac{16}{9}, \frac{8}{9})$
    $(x_2, y_2) = (\frac{10}{9}, -\frac{20}{9}) + (\frac{8}{9}, \frac{4}{9})$
    $(x_2, y_2) = (\frac{18}{9}, -\frac{16}{9}) = (2, -\frac{16}{9})$
    Approximately $(2, -1.78)$.

We are getting closer to $(2, -2)$! The next step would involve calculating the gradient at $(2, -\frac{16}{9})$, finding the new direction, performing the line search, and updating. You can see how this iterative process brings us closer to the minimum.

**Exam Tip:** For problems where you need to perform a few iterations, carefully track your calculations. Errors in gradient calculation or step size can propagate.

### 8. Summary and Key Takeaways

Let's recap what we've learned about the Method of Steepest Descent for two variables:

*   **What it is:** An iterative algorithm to find the minimum of a function by repeatedly moving in the direction of the steepest descent.
*   **The core idea:** Follow the "downhill slope" as precisely as possible at each step.
*   **Key component:** The **gradient vector** $\nabla f(x, y) = (\frac{\partial f}{\partial x}, \frac{\partial f}{\partial y})$, which points in the direction of steepest *increase*. The direction of steepest *decrease* is $-\nabla f$.
*   **The process:**
    1.  Start with an initial guess $(x_0, y_0)$.
    2.  Calculate the gradient at the current point.
    3.  Determine the direction of steepest descent ($d_k = -\nabla f$).
    4.  Find an optimal step size $\alpha_k$ to minimize $f$ along $d_k$ (line search).
    5.  Update the point: $(x_{k+1}, y_{k+1}) = (x_k, y_k) + \alpha_k d_k$.
    6.  Check for convergence (gradient close to zero, small step). Repeat if necessary.
*   **Analogy:** Blindfolded person trying to find the lowest point in a landscape.
*   **Limitations:** Can be slow due to zig-zagging, finds local rather than global minima.

**Remember this:** Understanding the gradient and how to perform the line search are the most critical parts of mastering this method. Even if you don't perform complex line searches in exams, you should be able to set up the problem for finding $\alpha$.

This method is fundamental to many optimization techniques used in machine learning and data science, so having a solid grasp of it will serve you well.

---

### Sample Questions and Answers

**Conceptual Questions:**

1.  **Question:** In the Method of Steepest Descent, why do we use the *negative* of the gradient as the direction of movement?
    **Answer:** The gradient vector $\nabla f(x, y)$ points in the direction of the *steepest increase* of the function $f(x, y)$ at point $(x, y)$. To find the minimum (i.e., to go downhill as steeply as possible), we must move in the exact opposite direction of the gradient, which is $-\nabla f(x, y)$. This ensures we are always taking the most direct path downwards.

2.  **Question:** What is the role of the "line search" in the Method of Steepest Descent?
    **Answer:** The line search is the process of finding an optimal step size, $\alpha_k$, for the current iteration. After determining the direction of steepest descent $d_k$, we want to move from the current point $(x_k, y_k)$ by a distance $\alpha_k$ in that direction, such that the function value $f(x_k + \alpha_k d_{k,x}, y_k + \alpha_k d_{k,y})$ is minimized along that specific line (or direction). A good line search ensures efficient progress towards the minimum.

3.  **Question:** Can the Method of Steepest Descent guarantee finding a global minimum for any function? Explain why or why not.
    **Answer:** No, the Method of Steepest Descent cannot guarantee finding a global minimum. It is a local optimization algorithm. It converges to a minimum that is "local" to the starting point. If the function has multiple valleys (local minima), the method will stop at the first one it encounters based on the initial guess and the path taken. To find a global minimum, one might need to run the algorithm from multiple starting points or use different global optimization techniques.

**Exam-Oriented Questions:**

1.  **Question:** Consider the function $f(x, y) = x^2 - 4x + y^2 - 6y + 15$. Use the Method of Steepest Descent to find the minimum, starting from $(x_0, y_0) = (0, 0)$. Perform two iterations.
    **Answer:**
    *   **Analytical Minimum:**
        $\frac{\partial f}{\partial x} = 2x - 4 = 0 \implies x = 2$
        $\frac{\partial f}{\partial y} = 2y - 6 = 0 \implies y = 3$
        Minimum is at $(2, 3)$.

    *   **Iteration 1:**
        *   Current point: $(x_0, y_0) = (0, 0)$.
        *   Gradient: $\nabla f(x, y) = (2x - 4, 2y - 6)$.
        *   $\nabla f(0, 0) = (2(0) - 4, 2(0) - 6) = (-4, -6)$.
        *   Direction of descent: $d_1 = -\nabla f(0, 0) = -(-4, -6) = (4, 6)$.
        *   Line Search: Minimize $g(\alpha) = f(0 + 4\alpha, 0 + 6\alpha) = f(4\alpha, 6\alpha)$.
            $g(\alpha) = (4\alpha)^2 - 4(4\alpha) + (6\alpha)^2 - 6(6\alpha) + 15$
            $g(\alpha) = 16\alpha^2 - 16\alpha + 36\alpha^2 - 36\alpha + 15$
            $g(\alpha) = 52\alpha^2 - 52\alpha + 15$
            To find minimum of $g(\alpha)$, set $g'(\alpha) = 0$:
            $g'(\alpha) = 104\alpha - 52 = 0 \implies \alpha_1 = \frac{52}{104} = 0.5$.
        *   Update: $(x_1, y_1) = (x_0, y_0) + \alpha_1 d_1$
            $(x_1, y_1) = (0, 0) + 0.5(4, 6) = (2, 3)$.

    *   **Iteration 2:**
        *   Current point: $(x_1, y_1) = (2, 3)$.
        *   Gradient: $\nabla f(2, 3) = (2(2) - 4, 2(3) - 6) = (4 - 4, 6 - 6) = (0, 0)$.
        *   Since the gradient is $(0, 0)$, we have reached the minimum in just one iteration. The process stops.

    *   **Result:** The method finds the minimum $(2, 3)$ in one iteration.

2.  **Question:** For the function $f(x, y) = e^{-(x^2+y^2)}$, what is the direction of steepest descent at the point $(1, 1)$?
    **Answer:**
    *   First, find the gradient of $f(x, y) = e^{-(x^2+y^2)}$.
    *   $\frac{\partial f}{\partial x} = e^{-(x^2+y^2)} \cdot (-2x) = -2x e^{-(x^2+y^2)}$
    *   $\frac{\partial f}{\partial y} = e^{-(x^2+y^2)} \cdot (-2y) = -2y e^{-(x^2+y^2)}$
    *   So, $\nabla f(x, y) = (-2x e^{-(x^2+y^2)}, -2y e^{-(x^2+y^2)})$.

    *   Now, evaluate the gradient at $(1, 1)$:
        $x^2 + y^2 = 1^2 + 1^2 = 2$.
        $\nabla f(1, 1) = (-2(1) e^{-2}, -2(1) e^{-2}) = (-2e^{-2}, -2e^{-2})$.

    *   The direction of steepest descent is $-\nabla f(1, 1)$:
        $-\nabla f(1, 1) = -(-2e^{-2}, -2e^{-2}) = (2e^{-2}, 2e^{-2})$.

    *   **Result:** The direction of steepest descent at $(1, 1)$ is $(2e^{-2}, 2e^{-2})$. This direction points towards the origin $(0,0)$, which is indeed the minimum for this function.
