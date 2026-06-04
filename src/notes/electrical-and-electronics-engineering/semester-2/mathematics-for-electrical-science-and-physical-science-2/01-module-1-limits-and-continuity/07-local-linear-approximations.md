---
title: "Local Linear approximations"
subject: "MATHEMATICS FOR ELECTRICAL SCIENCE AND PHYSICAL SCIENCE - 2"
module: "Module 1: Limits and continuity"
branch: "Electrical and Electronics Engineering"
semester: 2
topicId: "68bd213f9ece2bdd875f982a"
status: "completed"
scrapedAt: "2026-05-23T16:08:02.330Z"
---
# Module 1: Limits and Continuity - Local Linear Approximations

Welcome, everyone! In this session, we're going to dive into a powerful concept that bridges the gap between limits, continuity, and the practical world of engineering and science: **Local Linear Approximations**. You've already explored the fundamental ideas of limits and continuity, understanding how functions behave near a point. Now, we're going to leverage that understanding to approximate the behavior of complex functions using something much simpler: straight lines.

Think about it – in many scientific and engineering scenarios, we often encounter functions that are too complicated to work with directly. Maybe it's a complex physical process described by a transcendental equation, or a sensor reading that's highly nonlinear. What if we could get a really good *estimate* of what the function is doing right around a specific point of interest? That's precisely where local linear approximations come in. They are our way of "zooming in" on a function and seeing it as if it were a straight line, at least in a small neighborhood. This ability to simplify, to approximate, is absolutely crucial for many of the applications we'll see in this course, particularly when dealing with rates of change and how small changes in input affect output, which directly ties into **Course Outcome CO1** concerning derivatives and their applications.

### The Intuition: What is a Local Linear Approximation?

Imagine you're driving a car on a winding road. If you're looking just a few feet ahead, the road seems relatively straight, right? Even though the road curves over miles, in your immediate vicinity, you can treat it as a straight path for the purpose of steering. That's the core idea!

Mathematically, a function $f(x)$ near a point $x = a$ can often be approximated by its **tangent line** at $x = a$. Why the tangent line? Because the tangent line, by definition, "kisses" the curve at that point and has the *same instantaneous slope* as the function at that point. This shared slope is the essence of the derivative.

Let's recall what we know about lines. The equation of a line passing through a point $(a, f(a))$ with a slope $m$ is given by the point-slope form:

$y - f(a) = m(x - a)$

If we want this line to be the "best possible fit" for the function $f(x)$ *near* $x = a$, what should that slope $m$ be? It should be the instantaneous rate of change of $f(x)$ at $x=a$. And what is the instantaneous rate of change of a function at a point? It's the **derivative**!

So, the slope $m$ we're looking for is $f'(a)$. Substituting this into our point-slope equation, we get:

$y - f(a) = f'(a)(x - a)$

Rearranging this to solve for $y$, we get the equation for our local linear approximation:

$y = f(a) + f'(a)(x - a)$

This equation gives us a linear function, let's call it $L(x)$, that approximates $f(x)$ near $x=a$:

$L(x) = f(a) + f'(a)(x - a)$

This $L(x)$ is our **local linear approximation** or **tangent line approximation** of $f(x)$ at $x=a$. It's "local" because it's only guaranteed to be a good approximation in a small region around $x=a$. As you move further away from $a$, the curvature of $f(x)$ becomes more significant, and the linear approximation will start to deviate.

This concept is beautifully explained in **Anton, Biven, Davis's "Calculus" (12th ed.)**, where they introduce the tangent line as the best linear approximation of a curve at a point. The idea is that the tangent line locally mimics the function's behavior.

### Connecting to Course Outcomes:

This entire concept is foundational for **CO1: Compute the partial and total derivatives and maxima and minima of multivariable functions and to apply in engineering problems.**

*   **Derivatives:** The core of the local linear approximation is $f'(a)$. This directly reinforces the understanding of what a derivative *represents* – the instantaneous rate of change, which is precisely the slope of the tangent line.
*   **Applications:** Where do we use this?
    *   **Estimating Function Values:** Instead of calculating a complex function like $\sin(0.01)$, we can approximate it using its tangent line at $x=0$.
    *   **Error Analysis:** If a measurement has a small error, how does that error propagate through a complex calculation? Linear approximations help us understand this by showing how small changes in input affect output. For instance, if you're calculating the area of a circle and there's a small error in measuring the radius, how much does the area change? That's a perfect application of local linear approximations.
    *   **Numerical Methods:** Many iterative methods used in engineering to solve equations rely on linear approximations to refine estimates.

### Example 1: Approximating $\sqrt{4.1}$

Let's say we want to approximate the value of $\sqrt{4.1}$. Calculating this directly might require a calculator, but what if we want a quick estimate?

1.  **Choose the function:** We're dealing with a square root, so let $f(x) = \sqrt{x}$.
2.  **Choose the point of approximation ($a$):** We need to pick a value of $x$ near $4.1$ where we *know* the square root easily. The obvious choice is $a=4$, because $\sqrt{4} = 2$.
3.  **Find the derivative:** $f'(x) = \frac{d}{dx}(\sqrt{x}) = \frac{d}{dx}(x^{1/2}) = \frac{1}{2}x^{-1/2} = \frac{1}{2\sqrt{x}}$.
4.  **Evaluate $f(a)$ and $f'(a)$:**
    *   $f(4) = \sqrt{4} = 2$. This is the $y$-coordinate of our point.
    *   $f'(4) = \frac{1}{2\sqrt{4}} = \frac{1}{2 \times 2} = \frac{1}{4}$. This is our slope.
5.  **Construct the local linear approximation $L(x)$:**
    $L(x) = f(a) + f'(a)(x - a)$
    $L(x) = 2 + \frac{1}{4}(x - 4)$
6.  **Use the approximation:** We want to approximate $\sqrt{4.1}$, which means we evaluate $L(4.1)$:
    $L(4.1) = 2 + \frac{1}{4}(4.1 - 4)$
    $L(4.1) = 2 + \frac{1}{4}(0.1)$
    $L(4.1) = 2 + 0.025$
    $L(4.1) = 2.025$

So, our approximation for $\sqrt{4.1}$ is $2.025$.
Let's check with a calculator: $\sqrt{4.1} \approx 2.0248456...$
Quite close, isn't it? The approximation $2.025$ is excellent for a quick mental calculation or a rough estimate.

### Example 2: Approximating $\sin(0.01)$

This is a classic example often found in textbooks like **Thomas' Calculus (15th ed.)**.

1.  **Function:** $f(x) = \sin(x)$.
2.  **Point of approximation ($a$):** We want to approximate $\sin(0.01)$. The closest point where we know the sine value easily is $a=0$. Remember, we need to be working in radians for calculus formulas involving trigonometric functions. $0.01$ radians is a very small angle.
3.  **Derivative:** $f'(x) = \cos(x)$.
4.  **Evaluate $f(a)$ and $f'(a)$:**
    *   $f(0) = \sin(0) = 0$.
    *   $f'(0) = \cos(0) = 1$.
5.  **Construct $L(x)$:**
    $L(x) = f(a) + f'(a)(x - a)$
    $L(x) = 0 + 1(x - 0)$
    $L(x) = x$

6.  **Use the approximation:**
    $L(0.01) = 0.01$

So, for small values of $x$ (in radians), $\sin(x) \approx x$. This is a very important result in many physics and engineering applications, especially when dealing with oscillations or small-angle approximations.
A calculator gives $\sin(0.01) \approx 0.00999983...$. Again, remarkably close!

### The Remainder Term: How Good is the Approximation?

We've seen that $L(x)$ is a good approximation *near* $a$. But how do we quantify how good it is? The difference between the actual function value $f(x)$ and our approximation $L(x)$ is called the **remainder** or **error**, denoted by $R(x)$:

$R(x) = f(x) - L(x)$
$R(x) = f(x) - [f(a) + f'(a)(x - a)]$

This remainder is zero at $x=a$, which is why the approximation is perfect at the point of tangency.

While we're not delving into Taylor series in this specific topic, it's worth mentioning that **Erwin Kreyszig's "Advanced Engineering Mathematics" (10th ed.)** and **J. Stewart's "Essential Calculus" (2nd ed.)** both discuss how the remainder can be estimated. For functions with a continuous second derivative, there's a formula for the remainder:

$R(x) = \frac{f''(c)}{2}(x-a)^2$

for some number $c$ between $a$ and $x$. This tells us that the error is proportional to $(x-a)^2$, meaning the error shrinks very quickly as $x$ gets closer to $a$. This quadratic dependence on the distance from $a$ is why the approximation is so good locally.

### For Multiple Variables (A Glimpse towards CO1):

The concept extends beautifully to multivariable functions, which is directly relevant to **CO1**. For a function $f(x, y)$ of two variables, the tangent line becomes a **tangent plane**.

If a function $f(x, y)$ is differentiable at $(a, b)$, then its local linear approximation near $(a, b)$ is given by the tangent plane:

$L(x, y) = f(a, b) + f_x(a, b)(x - a) + f_y(a, b)(y - b)$

where $f_x(a, b)$ and $f_y(a, b)$ are the partial derivatives of $f$ with respect to $x$ and $y$, evaluated at $(a, b)$.

This tangent plane provides the best linear approximation to the surface $z = f(x, y)$ in the neighborhood of the point $(a, b, f(a, b))$. This is incredibly useful in engineering for understanding how small changes in multiple input variables affect the output. For example, if $f(x, y)$ represents the temperature of a component based on its position $(x, y)$, the tangent plane can help predict the temperature change if the component moves slightly.

### Practical Considerations and Exam Tips:

*   **Radians:** Always ensure your angles are in radians when dealing with trigonometric functions in calculus. This is a common pitfall.
*   **Choosing 'a':** The key to a good approximation is choosing an 'a' that is close to the value you want to approximate *and* for which you can easily calculate $f(a)$ and $f'(a)$.
*   **Understanding 'Local':** Remember that the approximation is only valid for $x$ values close to $a$. The further you get from $a$, the less accurate $L(x)$ will be.
*   **Connection to Derivatives:** The question might not explicitly ask for a "local linear approximation," but rather to "estimate the value of $f(x)$ near $x=a$." If you're given a function and asked to estimate its value at a point near a known point, the tangent line approximation is likely the intended method.
*   **Verification:** When possible, it's good practice to check how close your approximation is to the actual value (if you can calculate it) to build intuition about the accuracy.

### Analogy: A Balloon and a Flat Surface

Imagine a very large, slightly curved balloon. If you are a tiny ant standing on the surface of this balloon, and you look down at your immediate surroundings, the surface would appear almost perfectly flat, wouldn't it? That "flat" surface you perceive is analogous to the tangent plane (or tangent line in 1D). It's the best flat representation of the curved surface in your local vicinity. As you crawl further away from your starting point, the curvature of the balloon becomes more apparent, and the flat representation becomes less accurate. This visualization helps understand why the approximation is "local."

### Summary of Key Formulas:

For a function $f(x)$ differentiable at $x=a$, the local linear approximation of $f(x)$ at $a$ is:

$L(x) = f(a) + f'(a)(x - a)$

This $L(x)$ approximates $f(x)$ for $x$ near $a$.

---

### Sample Questions with Answers

**Question 1 (Conceptual):**
What is the fundamental principle behind the local linear approximation of a function?

**Answer:**
The fundamental principle is that a differentiable function behaves approximately like its tangent line in a small neighborhood around the point of tangency. The tangent line captures the instantaneous rate of change (the derivative) of the function at that specific point, providing the "best" linear fit locally.

**Question 2 (Application):**
Use a local linear approximation to estimate the value of $\tan(0.05)$.

**Answer:**
1.  **Function:** Let $f(x) = \tan(x)$.
2.  **Point of Approximation:** We want to estimate $\tan(0.05)$, so we choose $a = 0$ because $\tan(0)$ is easy to find.
3.  **Derivative:** $f'(x) = \sec^2(x)$.
4.  **Evaluate at $a=0$:**
    *   $f(0) = \tan(0) = 0$.
    *   $f'(0) = \sec^2(0) = (\frac{1}{\cos(0)})^2 = (\frac{1}{1})^2 = 1$.
5.  **Local Linear Approximation Formula:** $L(x) = f(a) + f'(a)(x - a)$
    $L(x) = 0 + 1(x - 0) = x$.
6.  **Estimate $\tan(0.05)$:**
    $L(0.05) = 0.05$.

Therefore, $\tan(0.05) \approx 0.05$.

**Question 3 (Exam-Oriented):**
Find the linear approximation of $f(x) = e^x$ at $a=0$ and use it to approximate $e^{0.1}$.

**Answer:**
1.  **Function:** $f(x) = e^x$.
2.  **Point of Approximation:** $a=0$.
3.  **Derivative:** $f'(x) = e^x$.
4.  **Evaluate at $a=0$:**
    *   $f(0) = e^0 = 1$.
    *   $f'(0) = e^0 = 1$.
5.  **Linear Approximation:**
    $L(x) = f(a) + f'(a)(x - a)$
    $L(x) = 1 + 1(x - 0)$
    $L(x) = 1 + x$.
6.  **Approximate $e^{0.1}$:**
    $L(0.1) = 1 + 0.1 = 1.1$.

So, the linear approximation of $f(x) = e^x$ at $a=0$ is $L(x) = 1+x$, and it approximates $e^{0.1}$ as $1.1$.

**Question 4 (Conceptual/Pitfall):**
If you are asked to approximate $\sqrt{9.2}$ using a local linear approximation, which value would you choose for 'a' and why? What is a potential pitfall if you chose $a=0$?

**Answer:**
You should choose $a=9$.
**Reasoning:** The function is $f(x) = \sqrt{x}$. We need to pick a value for 'a' near $9.2$ where we can easily calculate $f(a)$ and $f'(a)$. Since $\sqrt{9}=3$ is easily calculated, $a=9$ is the appropriate choice. The derivative is $f'(x) = \frac{1}{2\sqrt{x}}$, and $f'(9) = \frac{1}{2\sqrt{9}} = \frac{1}{6}$. The approximation would be $L(x) = 3 + \frac{1}{6}(x-9)$. Evaluating at $x=9.2$: $L(9.2) = 3 + \frac{1}{6}(9.2-9) = 3 + \frac{0.2}{6} = 3 + \frac{1}{30} \approx 3.033$.

**Potential Pitfall if $a=0$ was chosen:**
If you chose $a=0$, the function $f(x) = \sqrt{x}$ is continuous at $x=0$, but its derivative $f'(x) = \frac{1}{2\sqrt{x}}$ is *undefined* at $x=0$ (it approaches infinity). This means you cannot form a tangent line with a finite slope at $x=0$. Thus, a local linear approximation centered at $a=0$ for $\sqrt{x}$ is not possible. Furthermore, even if you somehow tried to use a value very close to 0, say $a=0.01$, the approximation would be quite poor for a value like $9.2$ because $0.01$ is not "local" to $9.2$. The approximation is only good near the center of the approximation, $a$.
