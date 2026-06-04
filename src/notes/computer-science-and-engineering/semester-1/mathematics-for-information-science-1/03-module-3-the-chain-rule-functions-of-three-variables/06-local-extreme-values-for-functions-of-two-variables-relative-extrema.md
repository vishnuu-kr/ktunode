---
title: "Local Extreme Values for Functions of Two Variables: Relative extrema"
subject: "MATHEMATICS FOR INFORMATION SCIENCE – 1"
module: "Module 3: The Chain Rule: Functions of three Variables"
branch: "Computer Science and Engineering"
semester: 1
topicId: "68b45b6e58474a0b135b5bd8"
status: "completed"
scrapedAt: "2026-05-20T16:40:22.123Z"
---
Absolutely! Let's dive into the fascinating world of local extreme values for functions of two variables. Think of this as our quest to find the "peaks" and "valleys" on a 3D landscape, but instead of mountains, we're dealing with mathematical functions. This is a core concept in multivariable calculus, and understanding it is crucial for many applications in information science, from optimizing algorithms to analyzing data trends.

## Module 3: The Chain Rule and Beyond – Exploring Local Extrema for Functions of Two Variables

We've already built a strong foundation in partial derivatives. Now, we're going to leverage that knowledge to find where our functions reach their highest and lowest points in a local neighborhood. This connects directly to **Course Outcome 3: Interpret directional derivative and solve maxima and minima of multivariable functions.** We're essentially solving the "minima" part here.

### 1. What are Local Extreme Values?

Imagine you're hiking on a mountain trail. At any point, you can look around your immediate surroundings. A **local maximum** would be a point on the trail where you are higher than all the points immediately around you. Similarly, a **local minimum** is a point where you are lower than all the points immediately around you.

For a function of two variables, $f(x, y)$, we say that:

*   $f(x, y)$ has a **local maximum** at a point $(a, b)$ if $f(x, y) \leq f(a, b)$ for all $(x, y)$ in some open disk centered at $(a, b)$.
*   $f(x, y)$ has a **local minimum** at a point $(a, b)$ if $f(x, y) \geq f(a, b)$ for all $(x, y)$ in some open disk centered at $(a, b)$.

These points are also often called **relative maxima** and **relative minima**, and the points $(a, b)$ themselves are called **critical points** where these extrema might occur.

### 2. Finding Candidate Points: The First Derivative Test

Just like in single-variable calculus, where the derivative is zero at a local maximum or minimum, in multivariable calculus, the situation is a bit more nuanced. For a function $f(x, y)$ to have a local extremum at a point $(a, b)$, what do you think must be true about its partial derivatives at that point?

If $f$ has a local maximum or minimum at $(a, b)$, and both partial derivatives $f_x(a, b)$ and $f_y(a, b)$ exist, then both of them must be zero!

Think about our mountain analogy again. If you're standing at the very top of a peak, and you take a step in any direction (forward, backward, left, or right), you will either go downhill or stay level for that infinitesimally small step. This means the "slope" in any direction must be zero. For functions of two variables, these "slopes" in the x and y directions are precisely the partial derivatives $f_x$ and $f_y$.

So, our first step in finding local extrema is to find the points $(a, b)$ where:

*   $f_x(a, b) = 0$ **and** $f_y(a, b) = 0$, **or**
*   At least one of $f_x(a, b)$ or $f_y(a, b)$ does not exist.

These points are called **critical points** of $f$. **Remember this: Critical points are our *candidates* for local extrema.** They are the only places where local extrema *can* occur, provided the partial derivatives exist. However, not all critical points are local extrema! Some might be saddle points, which we'll touch upon later.

**Example 1: Finding Critical Points**

Let's find the critical points for the function $f(x, y) = x^2 + y^2$. This is a simple parabolic "bowl" shape, and we expect the minimum to be at the very bottom.

1.  **Find the partial derivatives:**
    *   $f_x(x, y) = \frac{\partial}{\partial x}(x^2 + y^2) = 2x$
    *   $f_y(x, y) = \frac{\partial}{\partial y}(x^2 + y^2) = 2y$

2.  **Set the partial derivatives to zero and solve:**
    *   $2x = 0 \implies x = 0$
    *   $2y = 0 \implies y = 0$

The only critical point is $(0, 0)$. It seems reasonable that the minimum of this "bowl" is at its bottom, which is $(0, 0)$.

**Example 2: Critical Points where derivatives don't exist**

Consider $f(x, y) = \sqrt{x^2 + y^2}$. This function represents a cone.

1.  **Find the partial derivatives:**
    *   $f_x(x, y) = \frac{2x}{2\sqrt{x^2 + y^2}} = \frac{x}{\sqrt{x^2 + y^2}}$
    *   $f_y(x, y) = \frac{y}{\sqrt{x^2 + y^2}}$

2.  **Set to zero:**
    *   $\frac{x}{\sqrt{x^2 + y^2}} = 0 \implies x = 0$
    *   $\frac{y}{\sqrt{x^2 + y^2}} = 0 \implies y = 0$

If we try to plug in $(0, 0)$, we get division by zero. This means $f_x$ and $f_y$ do not exist at $(0, 0)$. Therefore, $(0, 0)$ is a critical point. Looking at the cone shape, we know this is indeed a minimum.

*(This relates to **Course Outcome 2**, where we're calculating partial derivatives. Here we're using them to identify candidate points.)*

### 3. Classifying Critical Points: The Second Derivative Test

Now that we know how to find our candidate points, the big question is: how do we tell if a critical point is a local maximum, a local minimum, or neither? For this, we turn to the **Second Derivative Test**, which is a powerful tool in our arsenal. This test utilizes the **second-order partial derivatives**.

Let $f(x, y)$ be a function and $(a, b)$ be a critical point where $f_x(a, b) = 0$ and $f_y(a, b) = 0$. We need to examine the behavior of the function around this point. The Second Derivative Test uses a quantity called the **discriminant**, or Hessian determinant, defined as:

$D(x, y) = f_{xx}(x, y) f_{yy}(x, y) - [f_{xy}(x, y)]^2$

where:
*   $f_{xx} = \frac{\partial^2 f}{\partial x^2}$
*   $f_{yy} = \frac{\partial^2 f}{\partial y^2}$
*   $f_{xy} = \frac{\partial^2 f}{\partial x \partial y}$ (and $f_{yx} = \frac{\partial^2 f}{\partial y \partial x}$)

For functions that are "smooth enough" (specifically, if the second partial derivatives are continuous in an open region around $(a, b)$), Clairaut's Theorem tells us that $f_{xy} = f_{yx}$. This simplifies our calculation for $D$.

**The Second Derivative Test states:**

Let $(a, b)$ be a critical point of $f$ where $f_x(a, b) = 0$ and $f_y(a, b) = 0$. Let $D$ be the discriminant defined above.

*   **If $D(a, b) > 0$ and $f_{xx}(a, b) > 0$, then $f$ has a local minimum at $(a, b)$.** (Think: the curvature is "upward" in all directions, like a bowl).
*   **If $D(a, b) > 0$ and $f_{xx}(a, b) < 0$, then $f$ has a local maximum at $(a, b)$.** (Think: the curvature is "downward" in all directions, like an upside-down bowl).
*   **If $D(a, b) < 0$, then $f$ has a saddle point at $(a, b)$.** (This is a point that's a local maximum in one direction and a local minimum in another, like a horse's saddle).
*   **If $D(a, b) = 0$, the test is inconclusive.** We need to use other methods to determine the nature of the critical point.

*(This is where we really connect to **Course Outcome 3**. We're using second partial derivatives to analyze the *nature* of the extreme values.)*

**Analogy for the Second Derivative Test:**

Imagine you're testing a spring mattress.
*   If you press down at a point and it immediately springs back up strongly, and it feels like that in all directions around you, you're probably at a local minimum (like the bottom of a "U" shape). This corresponds to $D > 0$ and $f_{xx} > 0$.
*   If you press down and it stays down, or feels like it's being pulled down more strongly in all directions, you're at a local maximum (like the top of an "n" shape). This corresponds to $D > 0$ and $f_{xx} < 0$.
*   If you press down and it feels like it's easier to push it in one direction than another, or it sinks in one way and rises in another, you're at a saddle point (like the middle of a saddle). This corresponds to $D < 0$.
*   If you press down and it feels the same in all directions, or you can't tell if it's going up or down, the test is inconclusive ($D=0$).

**Example 3: Using the Second Derivative Test**

Let's analyze the critical point $(0, 0)$ for $f(x, y) = x^2 + y^2$.

1.  **We already found:**
    *   $f_x = 2x$, $f_y = 2y$.
    *   Critical point: $(0, 0)$.

2.  **Find the second partial derivatives:**
    *   $f_{xx} = \frac{\partial}{\partial x}(2x) = 2$
    *   $f_{yy} = \frac{\partial}{\partial y}(2y) = 2$
    *   $f_{xy} = \frac{\partial}{\partial y}(2x) = 0$

3.  **Calculate the discriminant $D$ at $(0, 0)$:**
    *   $D(x, y) = f_{xx}(x, y) f_{yy}(x, y) - [f_{xy}(x, y)]^2$
    *   $D(0, 0) = (2)(2) - (0)^2 = 4$

4.  **Apply the test:**
    *   $D(0, 0) = 4 > 0$.
    *   $f_{xx}(0, 0) = 2 > 0$.

Since $D > 0$ and $f_{xx} > 0$, the function $f(x, y) = x^2 + y^2$ has a **local minimum** at $(0, 0)$. The value of this minimum is $f(0, 0) = 0^2 + 0^2 = 0$.

**Example 4: Saddle Point**

Let's analyze $f(x, y) = x^2 - y^2$. This looks like a saddle shape.

1.  **Find partial derivatives:**
    *   $f_x = 2x$
    *   $f_y = -2y$

2.  **Set to zero:**
    *   $2x = 0 \implies x = 0$
    *   $-2y = 0 \implies y = 0$
    *   Critical point: $(0, 0)$.

3.  **Find second partial derivatives:**
    *   $f_{xx} = 2$
    *   $f_{yy} = -2$
    *   $f_{xy} = 0$

4.  **Calculate $D$ at $(0, 0)$:**
    *   $D(0, 0) = f_{xx}(0, 0) f_{yy}(0, 0) - [f_{xy}(0, 0)]^2$
    *   $D(0, 0) = (2)(-2) - (0)^2 = -4$

5.  **Apply the test:**
    *   $D(0, 0) = -4 < 0$.

Since $D < 0$, the function $f(x, y) = x^2 - y^2$ has a **saddle point** at $(0, 0)$.

**Example 5: Inconclusive Test**

Consider $f(x, y) = x^4 + y^4$.

1.  **Partial derivatives:**
    *   $f_x = 4x^3$, $f_y = 4y^3$.
    *   Critical point: $(0, 0)$.

2.  **Second partial derivatives:**
    *   $f_{xx} = 12x^2$
    *   $f_{yy} = 12y^2$
    *   $f_{xy} = 0$

3.  **Calculate $D$ at $(0, 0)$:**
    *   $D(0, 0) = (12 \cdot 0^2)(12 \cdot 0^2) - (0)^2 = 0$

4.  **Apply the test:**
    *   $D(0, 0) = 0$. The test is inconclusive.

**What do we do when the test is inconclusive?** We need to go back to the definition or examine the function's behavior directly. For $f(x, y) = x^4 + y^4$:
*   $f(0, 0) = 0$.
*   For any $(x, y) \neq (0, 0)$, $x^4 > 0$ and $y^4 > 0$, so $f(x, y) = x^4 + y^4 > 0$.
*   This means $f(x, y) > f(0, 0)$ for all points near $(0, 0)$.
*   Therefore, $(0, 0)$ is a **local minimum**.

This highlights why the Second Derivative Test is a *test* – it provides conditions to classify, but if those conditions aren't met, we haven't lost anything, we just need to think a bit more!

### 4. Where Does This Fit in Information Science?

You might be wondering, "How is finding mountain peaks and valleys relevant to information science?" Well, think about optimization problems:

*   **Algorithm Design:** You might have a cost function for an algorithm that depends on certain parameters (say, the number of iterations and the learning rate in a machine learning model). Finding the minimum of this cost function would mean finding the optimal parameters that make your algorithm most efficient or accurate. This directly ties into **Course Outcome 3** and even **Course Outcome 4** when dealing with constrained optimization.
*   **Data Analysis:** When analyzing data, you might be trying to fit a model to the data. The "goodness-of-fit" can often be represented by a function, and minimizing errors (like the sum of squared errors) is a common task. The points where these error functions have local minima are crucial for finding the best-fitting model.
*   **Resource Allocation:** Imagine you're managing server load or network bandwidth. You might have a function representing the cost or inefficiency based on how resources are allocated. Finding the local minima of this function could reveal strategies for more efficient resource management.
*   **Machine Learning:** In training neural networks, we often use gradient descent to minimize a loss function. The "steps" we take in gradient descent are guided by the negative of the gradient, and the goal is to reach a minimum (local or global) of the loss function.

In essence, wherever you have a quantity you want to minimize (cost, error, risk) or maximize (profit, efficiency, accuracy) that depends on multiple factors, you're likely dealing with finding local extrema of a multivariable function.

### 5. Putting It All Together: The Process

To summarize the process for finding local extrema for a function $f(x, y)$:

1.  **Find the critical points:** Calculate $f_x$ and $f_y$. Find all points $(a, b)$ where $f_x(a, b) = 0$ and $f_y(a, b) = 0$, or where one or both partial derivatives do not exist.
2.  **Calculate the second partial derivatives:** Find $f_{xx}$, $f_{yy}$, and $f_{xy}$.
3.  **Form the discriminant:** Compute $D(x, y) = f_{xx}(x, y) f_{yy}(x, y) - [f_{xy}(x, y)]^2$.
4.  **Apply the Second Derivative Test:** Evaluate $D(a, b)$ and $f_{xx}(a, b)$ at each critical point $(a, b)$:
    *   If $D > 0$ and $f_{xx} > 0$: Local minimum at $(a, b)$.
    *   If $D > 0$ and $f_{xx} < 0$: Local maximum at $(a, b)$.
    *   If $D < 0$: Saddle point at $(a, b)$.
    *   If $D = 0$: The test is inconclusive; further analysis is needed.

**A Note on Global Extrema:**

What we've discussed are *local* extrema. A function can have many local maxima and minima. A **global maximum** (or absolute maximum) is the highest value the function takes over its *entire* domain, and a **global minimum** is the lowest. Often, global extrema occur at local extrema, but they can also occur at the boundaries of the domain, which is a topic for later when we discuss optimization over closed, bounded regions. For now, focus on identifying these local "peaks" and "valleys."

*(This understanding of classifying points is key for **Course Outcome 3**'s objective of solving maxima and minima.)*

---

### Sample Questions and Answers

Here are a few questions to test your understanding, combining conceptual and exam-style problems:

**Question 1 (Conceptual):**
What are the necessary conditions for a function $f(x, y)$ to have a local maximum or minimum at a point $(a, b)$ where its partial derivatives exist?

**Answer:**
For a function $f(x, y)$ to have a local maximum or minimum at a point $(a, b)$ where $f_x(a, b)$ and $f_y(a, b)$ exist, it is *necessary* that both partial derivatives are zero at that point: $f_x(a, b) = 0$ and $f_y(a, b) = 0$. Such points are called critical points.

**Question 2 (Application of Second Derivative Test):**
Find and classify the local extrema of the function $f(x, y) = x^3 + y^3 - 3xy$.

**Solution:**
1.  **Find critical points:**
    *   $f_x(x, y) = 3x^2 - 3y$
    *   $f_y(x, y) = 3y^2 - 3x$
    Set them to zero:
    *   $3x^2 - 3y = 0 \implies y = x^2$ (Equation 1)
    *   $3y^2 - 3x = 0 \implies y^2 = x$ (Equation 2)
    Substitute Equation 1 into Equation 2:
    *   $(x^2)^2 = x$
    *   $x^4 = x$
    *   $x^4 - x = 0$
    *   $x(x^3 - 1) = 0$
    This gives $x = 0$ or $x^3 = 1 \implies x = 1$.

    If $x = 0$, from Equation 1, $y = 0^2 = 0$. So, $(0, 0)$ is a critical point.
    If $x = 1$, from Equation 1, $y = 1^2 = 1$. So, $(1, 1)$ is a critical point.

2.  **Find second partial derivatives:**
    *   $f_{xx} = \frac{\partial}{\partial x}(3x^2 - 3y) = 6x$
    *   $f_{yy} = \frac{\partial}{\partial y}(3y^2 - 3x) = 6y$
    *   $f_{xy} = \frac{\partial}{\partial y}(3x^2 - 3y) = -3$

3.  **Form the discriminant $D(x, y)$:**
    *   $D(x, y) = f_{xx} f_{yy} - (f_{xy})^2 = (6x)(6y) - (-3)^2 = 36xy - 9$.

4.  **Apply the Second Derivative Test:**

    *   **At $(0, 0)$:**
        *   $D(0, 0) = 36(0)(0) - 9 = -9$.
        *   Since $D(0, 0) < 0$, there is a **saddle point** at $(0, 0)$.

    *   **At $(1, 1)$:**
        *   $D(1, 1) = 36(1)(1) - 9 = 36 - 9 = 27$.
        *   $f_{xx}(1, 1) = 6(1) = 6$.
        *   Since $D(1, 1) > 0$ and $f_{xx}(1, 1) > 0$, there is a **local minimum** at $(1, 1)$.
        *   The value of this local minimum is $f(1, 1) = 1^3 + 1^3 - 3(1)(1) = 1 + 1 - 3 = -1$.

**Question 3 (Identifying a critical point type):**
If for a critical point $(a, b)$ of a function $f(x, y)$, we find that $f_{xx}(a, b) = 5$, $f_{yy}(a, b) = 20$, and $f_{xy}(a, b) = 10$, what type of point is $(a, b)$?

**Solution:**
First, calculate the discriminant $D(a, b)$:
$D(a, b) = f_{xx}(a, b) f_{yy}(a, b) - [f_{xy}(a, b)]^2$
$D(a, b) = (5)(20) - (10)^2$
$D(a, b) = 100 - 100$
$D(a, b) = 0$

When $D=0$, the Second Derivative Test is inconclusive. We cannot determine the nature of the critical point solely from this information.

**Question 4 (Relating to Information Science):**
A company is developing a new recommendation system. The expected "error" (a measure of how poorly the system recommends) is modeled by the function $E(x, y) = (x-5)^2 + (y-10)^2 + 50$, where $x$ is the number of users surveyed and $y$ is the time spent analyzing data. Find the combination of survey users and analysis time that minimizes the expected error, and state what that minimum error is.

**Solution:**
We want to find the local minimum of $E(x, y)$.

1.  **Find critical points:**
    *   $E_x(x, y) = 2(x-5)$
    *   $E_y(x, y) = 2(y-10)$
    Set them to zero:
    *   $2(x-5) = 0 \implies x - 5 = 0 \implies x = 5$
    *   $2(y-10) = 0 \implies y - 10 = 0 \implies y = 10$
    The only critical point is $(5, 10)$.

2.  **Find second partial derivatives:**
    *   $E_{xx} = \frac{\partial}{\partial x}(2(x-5)) = 2$
    *   $E_{yy} = \frac{\partial}{\partial y}(2(y-10)) = 2$
    *   $E_{xy} = \frac{\partial}{\partial y}(2(x-5)) = 0$

3.  **Form the discriminant $D(x, y)$:**
    *   $D(x, y) = E_{xx} E_{yy} - (E_{xy})^2 = (2)(2) - (0)^2 = 4$.

4.  **Apply the Second Derivative Test at $(5, 10)$:**
    *   $D(5, 10) = 4$.
    *   $E_{xx}(5, 10) = 2$.
    *   Since $D > 0$ and $E_{xx} > 0$, the function has a local minimum at $(5, 10)$.

The minimum expected error occurs when $x = 5$ users are surveyed and $y = 10$ units of time are spent analyzing data.
The minimum error is $E(5, 10) = (5-5)^2 + (10-10)^2 + 50 = 0^2 + 0^2 + 50 = 50$.

---

This concludes our exploration of local extreme values. Remember, the key is to find those critical points and then use the Second Derivative Test to classify them. Keep practicing, and you'll master finding these crucial turning points in your functions!
