---
title: "Second shifting theorem"
subject: "MATHEMATICS FOR ELECTRICAL SCIENCE AND 
PHYSICAL  SCIENCE - 1"
module: "Module 3: Laplace Transform"
branch: "Civil Engineering"
semester: 1
topicId: "68b54565d74ec52cc09129e7"
status: "completed"
scrapedAt: "2026-05-20T18:31:05.876Z"
---
# Module 3: Laplace Transform - The Second Shifting Theorem

Welcome, everyone! Today, we're diving deeper into the powerful world of the Laplace transform, specifically focusing on a theorem that's incredibly useful when dealing with functions that "switch on" at a particular time. We're talking about the **Second Shifting Theorem**, also known as the **Delayed Unit Step Function Theorem**.

You know, in electrical engineering and physics, we often encounter situations where a signal or a phenomenon doesn't start immediately. Think about switching on a light at a specific moment, or a force being applied to a system after a certain delay. These scenarios are naturally represented by functions that are zero for a while and then become non-zero. The Laplace transform is our tool to analyze these systems, and this theorem is a key to unlocking their behavior.

This topic directly ties into **Course Outcome 3 (CO3)**: "Compute Laplace transform and apply it to solve ODEs arising in engineering." The second shifting theorem is a fundamental technique for transforming these delayed functions, which are ubiquitous in ODEs describing physical systems. By mastering this theorem, you'll be better equipped to model and solve real-world engineering problems.

### Understanding the Building Block: The Unit Step Function

Before we tackle the second shifting theorem, let's quickly revisit its core component: the **unit step function**, often denoted as $u(t)$ or $U(t)$. You might know it as the Heaviside step function.

$ u(t) = \begin{cases} 0 & \text{if } t < 0 \\ 1 & \text{if } t \ge 0 \end{cases} $

Think of it as a simple on/off switch. Before time $t=0$, it's off (value 0). At time $t=0$ and onwards, it's on (value 1).

Now, what if we want that switch to happen not at $t=0$, but at some later time, say $t=a$? We can create a *delayed* unit step function. This is simply our basic $u(t)$ shifted to the right by $a$ units. We denote this as $u(t-a)$ or $U(t-a)$.

$ u(t-a) = \begin{cases} 0 & \text{if } t < a \\ 1 & \text{if } t \ge a \end{cases} $

Imagine you're setting up a light that only turns on at 3 PM. The function describing when that light is on would be $u(t-3)$, where $t$ is measured in hours from midnight. It's zero until 3 PM, and then it's one. This delayed unit step function is the hero of our story today.

### The "Shifting" in Action: The Second Shifting Theorem

So, what happens when we take the Laplace transform of a function that's multiplied by a delayed unit step function? This is precisely what the second shifting theorem addresses.

Let's say we have a function $f(t)$, and we're interested in its behavior when it's active only for $t \ge a$. We can represent this as $f(t) u(t-a)$.

The Second Shifting Theorem states:

If $\mathcal{L}\{f(t)\} = F(s)$, then $\mathcal{L}\{f(t-a)u(t-a)\} = e^{-as}F(s)$ for $a > 0$.

Let's break this down.

*   **$f(t)$**: This is our original function, like the voltage across a resistor or the input force to a system.
*   **$F(s) = \mathcal{L}\{f(t)\}$**: This is the Laplace transform of our original function $f(t)$. We often look these up in tables or calculate them.
*   **$u(t-a)$**: This is our delayed unit step function, "switching on" the function $f(t)$ at time $a$.
*   **$f(t-a)$**: This is the original function $f(t)$ "shifted" to the right by $a$ units. Think of it as a time-delayed version of $f(t)$.
*   **$e^{-as}F(s)$**: This is the Laplace transform of the delayed function. The crucial part here is the $e^{-as}$ factor. This exponential term accounts for the *delay* by $a$ units in the time domain.

**Why is this important?** This theorem tells us that delaying a function in the time domain ($f(t)$ becomes $f(t-a)u(t-a)$) corresponds to multiplying its Laplace transform by an exponential term $e^{-as}$. This is a very clean and direct relationship, making it a powerful tool for solving differential equations.

Kreyszig, in his "Advanced Engineering Mathematics," presents this theorem as a fundamental property for dealing with discontinuous functions, which often arise from real-world switching phenomena. It provides a systematic way to handle these delays.

#### The Intuition Behind the Theorem

Let's try to get a feel for *why* this $e^{-as}$ factor appears. Remember the definition of the Laplace transform:
$F(s) = \mathcal{L}\{f(t)\} = \int_0^\infty e^{-st} f(t) dt$

Now, let's look at the transform of $f(t-a)u(t-a)$:
$\mathcal{L}\{f(t-a)u(t-a)\} = \int_0^\infty e^{-st} f(t-a)u(t-a) dt$

Since $u(t-a)$ is zero for $t < a$ and one for $t \ge a$, the integral effectively starts at $a$:
$= \int_a^\infty e^{-st} f(t-a) dt$

Now, let's make a substitution. Let $\tau = t-a$. This means $t = \tau + a$, and importantly, $dt = d\tau$. When $t=a$, $\tau=0$. When $t \to \infty$, $\tau \to \infty$. Substituting these into the integral:

$= \int_0^\infty e^{-s(\tau+a)} f(\tau) d\tau$
$= \int_0^\infty e^{-s\tau} e^{-sa} f(\tau) d\tau$

Since $e^{-sa}$ is a constant with respect to $\tau$, we can pull it out of the integral:
$= e^{-sa} \int_0^\infty e^{-s\tau} f(\tau) d\tau$

And what is that integral $\int_0^\infty e^{-s\tau} f(\tau) d\tau$? It's just the Laplace transform of $f(\tau)$, which is $F(s)$. So, we get:

$\mathcal{L}\{f(t-a)u(t-a)\} = e^{-sa}F(s)$

See? The math aligns perfectly with the theorem's statement. The $e^{-sa}$ term is a direct consequence of the time shift.

### Applying the Second Shifting Theorem: Examples

Let's solidify this with some examples. This is where the learning really happens, connecting the abstract theorem to practical problems.

**Example 1: Transforming a Simple Delayed Pulse**

Suppose we want to find the Laplace transform of the function:
$g(t) = \begin{cases} 5 & \text{if } 2 \le t < 4 \\ 0 & \text{otherwise} \end{cases}$

This function represents a "pulse" of height 5 that lasts from $t=2$ to $t=4$. How can we express this using unit step functions?

A pulse from $a$ to $b$ can be thought of as a step up at $a$ and a step down at $b$.
So, $g(t)$ is like:
1.  A step up of 5 at $t=2$: $5 u(t-2)$
2.  A step down of 5 at $t=4$: $-5 u(t-4)$

Adding these together gives us the desired function:
$g(t) = 5 u(t-2) - 5 u(t-4)$

Now, let's find its Laplace transform using the second shifting theorem.

We know $\mathcal{L}\{c\} = c/s$ for a constant $c$.
So, $\mathcal{L}\{5\} = 5/s$.

Using the theorem $\mathcal{L}\{f(t-a)u(t-a)\} = e^{-as}F(s)$:

*   For the term $5 u(t-2)$:
    Here, $f(t) = 5$, so $F(s) = \mathcal{L}\{5\} = 5/s$.
    The delay is $a=2$.
    Therefore, $\mathcal{L}\{5 u(t-2)\} = e^{-2s} \left(\frac{5}{s}\right) = \frac{5e^{-2s}}{s}$.

*   For the term $-5 u(t-4)$:
    Here, $f(t) = -5$, so $F(s) = \mathcal{L}\{-5\} = -5/s$.
    The delay is $a=4$.
    Therefore, $\mathcal{L}\{-5 u(t-4)\} = e^{-4s} \left(\frac{-5}{s}\right) = \frac{-5e^{-4s}}{s}$.

The Laplace transform of $g(t)$ is the sum of these:
$\mathcal{L}\{g(t)\} = \mathcal{L}\{5 u(t-2) - 5 u(t-4)\} = \frac{5e^{-2s}}{s} - \frac{5e^{-4s}}{s}$
$\mathcal{L}\{g(t)\} = \frac{5}{s}(e^{-2s} - e^{-4s})$

This is a common type of question in exams – translating a piecewise function into unit step functions and then finding its Laplace transform. The key is recognizing the delayed shifts.

**Example 2: Transforming a Shifted Sine Wave**

Let's find the Laplace transform of $h(t) = \sin(t-\pi/3)u(t-\pi/3)$.

Here, our original function is $f(t) = \sin(t)$.
We know its Laplace transform is $F(s) = \mathcal{L}\{\sin(t)\} = \frac{1}{s^2+1}$.

The function $h(t)$ is $\sin(t)$ shifted by $\pi/3$ units to the right and switched on at $t=\pi/3$.
So, $f(t-a) = \sin(t - \pi/3)$ and $a = \pi/3$.

Applying the second shifting theorem:
$\mathcal{L}\{\sin(t-\pi/3)u(t-\pi/3)\} = e^{-(\pi/3)s} F(s)$
$= e^{-\frac{\pi s}{3}} \left(\frac{1}{s^2+1}\right)$
$= \frac{e^{-\pi s/3}}{s^2+1}$

This is straightforward if you know the transform of $\sin(t)$. It's like saying, "the pattern of the sine wave starts, but it starts later, specifically $\pi/3$ seconds later."

**Wait a minute!** What if the function wasn't exactly $f(t-a)$ but something like $f(t)$ multiplied by $u(t-a)$ where the argument of $f$ is still $t$? For example, $\mathcal{L}\{f(t)u(t-a)\}$. This is a slightly different scenario and requires the **First** Shifting Theorem (if $f(t)$ is multiplied by $e^{-at}$) or a modification of our thinking for the second theorem. The second theorem specifically deals with $f(t-a)u(t-a)$.

However, if we have $f(t)u(t-a)$, we can *make* it fit the second theorem. How? We need to express $f(t)$ in terms of $(t-a)$.
Let $t = \tau + a$. Then $f(t) = f(\tau+a)$.
So, $f(t)u(t-a)$ is equivalent to $f(\tau+a)u(\tau)$, where $t = \tau+a$.
Therefore, $\mathcal{L}\{f(t)u(t-a)\} = \mathcal{L}\{f(\tau+a)u(\tau)\}$.
Now, applying the second shifting theorem with $g(\tau) = f(\tau+a)$, we have:
$\mathcal{L}\{g(\tau)u(\tau)\} = e^{-as}G(s)$, where $G(s) = \mathcal{L}\{g(\tau)\}$.
So, $\mathcal{L}\{f(t)u(t-a)\} = e^{-as} \mathcal{L}\{f(t+a)\}$.

This is a very important distinction and a common point of confusion. Let's illustrate this with an example.

**Example 3: The $f(t)u(t-a)$ Case**

Find the Laplace transform of $k(t) = t^2 u(t-3)$.

Here, $f(t) = t^2$ and $a=3$. We want $\mathcal{L}\{t^2 u(t-3)\}$.
We can't directly apply $\mathcal{L}\{f(t-a)u(t-a)\} = e^{-as}F(s)$ because the argument of $t^2$ is $t$, not $(t-3)$.

We use the modified form: $\mathcal{L}\{f(t)u(t-a)\} = e^{-as} \mathcal{L}\{f(t+a)\}$.

1.  Find $f(t+a)$:
    $f(t) = t^2$.
    $a = 3$.
    $f(t+a) = f(t+3) = (t+3)^2 = t^2 + 6t + 9$.

2.  Find the Laplace transform of $f(t+a)$:
    $\mathcal{L}\{f(t+a)\} = \mathcal{L}\{t^2 + 6t + 9\}$
    $= \mathcal{L}\{t^2\} + 6\mathcal{L}\{t\} + 9\mathcal{L}\{1\}$
    $= \frac{2!}{s^3} + 6\left(\frac{1}{s^2}\right) + 9\left(\frac{1}{s}\right)$
    $= \frac{2}{s^3} + \frac{6}{s^2} + \frac{9}{s}$.

3.  Multiply by $e^{-as}$:
    $\mathcal{L}\{t^2 u(t-3)\} = e^{-3s} \left(\frac{2}{s^3} + \frac{6}{s^2} + \frac{9}{s}\right)$.

This formula $\mathcal{L}\{f(t)u(t-a)\} = e^{-as} \mathcal{L}\{f(t+a)\}$ is crucial for handling functions where the "base" function $f(t)$ is not already expressed in terms of $(t-a)$. Think of it as preparing the function $f(t)$ for the shift by rewriting it in terms of $(t-a)$ before taking the transform.

**Relatable Analogy: The Concert Ticket**

Imagine you bought a concert ticket for an artist you love, but the concert is scheduled for $t=5$ days from now. The actual artist's performance pattern is $f(t)$.
If you bought a ticket that only allows you in from day 5 onwards, and the artist's performance is delayed by 5 days, then the signal you receive is $f(t-5)u(t-5)$. Its Laplace transform will have that $e^{-5s}$ factor, indicating the delay.

Now, what if the artist's *entire setlist* is shifted by 5 days? If their usual performance is $f(t)$, and now it starts 5 days later, their new performance is effectively $f(t+5)$, but it only starts from $t=5$. So, the function would be $f(t+5)u(t-5)$. This is where the second form comes in. You need to know $f(t+5)$, not just $f(t)$, to find its transform.

### Inverse Laplace Transform Using the Second Shifting Theorem

Just as the theorem helps us go from the time domain to the Laplace domain, it also works in reverse for the inverse Laplace transform.

If $G(s) = e^{-as}F(s)$, then $\mathcal{L}^{-1}\{G(s)\} = f(t-a)u(t-a)$, where $F(s) = \mathcal{L}^{-1}\{G(s)\}$.

Essentially, if you see an $e^{-as}$ term multiplying a Laplace transform $F(s)$, it means the original time-domain function was shifted by $a$ and started at $t=a$.

**Example 4: Inverse Transform**

Find the inverse Laplace transform of $G(s) = \frac{e^{-3s}}{s^2-4}$.

1.  Identify the $e^{-as}$ term. Here, $a=3$.
2.  Identify $F(s)$. $F(s) = \frac{1}{s^2-4}$.
3.  Find the inverse Laplace transform of $F(s)$.
    We know that $\mathcal{L}\{\sinh(bt)\} = \frac{b}{s^2-b^2}$.
    So, $\mathcal{L}\{\sinh(2t)\} = \frac{2}{s^2-4}$.
    Therefore, $\mathcal{L}^{-1}\left\{\frac{1}{s^2-4}\right\} = \mathcal{L}^{-1}\left\{\frac{1}{2} \cdot \frac{2}{s^2-4}\right\} = \frac{1}{2}\sinh(2t)$.
    So, $f(t) = \frac{1}{2}\sinh(2t)$.

4.  Apply the inverse second shifting theorem:
    $\mathcal{L}^{-1}\{G(s)\} = f(t-a)u(t-a)$.
    Here $a=3$ and $f(t) = \frac{1}{2}\sinh(2t)$.
    So, $\mathcal{L}^{-1}\left\{\frac{e^{-3s}}{s^2-4}\right\} = \frac{1}{2}\sinh(2(t-3))u(t-3)$.

Remember this: the $e^{-as}$ in the Laplace domain is the "switch" that tells you to introduce the $u(t-a)$ and shift the argument of your time-domain function.

### Connection to Course Outcomes and Common Pitfalls

This theorem directly supports **CO3**, allowing us to handle initial conditions and input functions that are not continuous from $t=0$. Many practical ODEs in circuits (like RLC circuits with switches) or mechanics involve these delayed or switched inputs.

**Common Pitfalls to Watch Out For:**

1.  **Confusing $f(t-a)u(t-a)$ with $f(t)u(t-a)$:** This is the most frequent mistake. Always ensure the function itself is also shifted in time. If it's $f(t)u(t-a)$, you *must* calculate $\mathcal{L}\{f(t+a)\}$.
2.  **Incorrectly identifying $a$:** Make sure $a$ is always positive and correctly identified from $u(t-a)$.
3.  **Forgetting the $e^{-as}$ factor:** This is the essence of the theorem, don't miss it!
4.  **Errors in finding $F(s)$ or $f(t)$:** Basic Laplace transform pairs and properties must be solid.
5.  **Mistakes in the inverse transform:** Especially when $F(s)$ involves more complex expressions.

**Exam Tip:** Be prepared for problems that combine the second shifting theorem with other Laplace transform properties like linearity, differentiation, and integration. Also, problems might require you to first represent a piecewise function using unit steps, and *then* apply the theorem.

### Summary of Key Takeaways

*   The **Second Shifting Theorem** relates the Laplace transform of a time-shifted function multiplied by a delayed unit step function.
*   The core theorem: If $\mathcal{L}\{f(t)\} = F(s)$, then $\mathcal{L}\{f(t-a)u(t-a)\} = e^{-as}F(s)$. This means a time shift of $a$ in $f(t)$ (when switched on at $a$) results in multiplying $F(s)$ by $e^{-as}$.
*   For functions of the form $f(t)u(t-a)$, use the derived form: $\mathcal{L}\{f(t)u(t-a)\} = e^{-as} \mathcal{L}\{f(t+a)\}$. This requires finding the transform of the "shifted" function $f(t+a)$.
*   In the inverse transform, an $e^{-as}$ factor in $G(s)$ signals a time shift by $a$ and the introduction of $u(t-a)$. If $G(s) = e^{-as}F(s)$, then $\mathcal{L}^{-1}\{G(s)\} = f(t-a)u(t-a)$, where $f(t) = \mathcal{L}^{-1}\{F(s)\}$.

Mastering this theorem will significantly enhance your ability to model and solve dynamic systems in engineering and physics, directly contributing to your success in this course. Keep practicing these examples, and don't hesitate to refer back to the definitions and derivations!

---

### Sample Questions and Answers

**Q1. Conceptual Question:**
Explain why the second shifting theorem is called a "shifting" theorem and how the exponential term $e^{-as}$ relates to the time domain.

**Answer:**
It's called a "shifting" theorem because it describes how shifting a function $f(t)$ in the time domain by $a$ units to the right (represented as $f(t-a)u(t-a)$) affects its Laplace transform. The exponential term $e^{-as}$ in the Laplace domain directly corresponds to this time delay of $a$ in the time domain. Mathematically, the integral definition of the Laplace transform, when applied to a shifted function, introduces the $e^{-sa}$ factor due to a change of variables, directly linking the time shift to the multiplication by $e^{-as}$.

**Q2. Transform Question:**
Find the Laplace transform of the function:
$x(t) = \begin{cases} \cos(2t) & \text{if } t < \pi/2 \\ -\cos(2t) & \text{if } t \ge \pi/2 \end{cases}$

**Answer:**
First, express $x(t)$ using unit step functions.
The function changes its behavior at $t=\pi/2$.
For $t < \pi/2$, $x(t) = \cos(2t)$.
For $t \ge \pi/2$, $x(t) = -\cos(2t)$.

We can write this as:
$x(t) = \cos(2t) u(t) - \cos(2t) u(t) + (-\cos(2t)) u(t - \pi/2)$
$x(t) = \cos(2t) u(t) - 2\cos(2t) u(t - \pi/2)$

Let $f(t) = \cos(2t)$. We know $\mathcal{L}\{\cos(2t)\} = \frac{s}{s^2+4}$.

For the term $\cos(2t) u(t)$:
$\mathcal{L}\{\cos(2t) u(t)\} = \mathcal{L}\{\cos(2t)\} = \frac{s}{s^2+4}$. (Here $a=0$ for $u(t)$ or can be seen as a direct transform).

For the term $-2\cos(2t) u(t - \pi/2)$:
This is of the form $-2 \times f(t) u(t-a)$, where $f(t) = \cos(2t)$ and $a = \pi/2$.
We use the rule: $\mathcal{L}\{f(t)u(t-a)\} = e^{-as} \mathcal{L}\{f(t+a)\}$.

1.  Find $f(t+a)$:
    $f(t) = \cos(2t)$
    $a = \pi/2$
    $f(t+a) = f(t+\pi/2) = \cos(2(t+\pi/2)) = \cos(2t + \pi) = -\cos(2t)$.

2.  Find $\mathcal{L}\{f(t+a)\}$:
    $\mathcal{L}\{-\cos(2t)\} = - \mathcal{L}\{\cos(2t)\} = -\frac{s}{s^2+4}$.

3.  Multiply by $e^{-as}$:
    $\mathcal{L}\{-2\cos(2t)u(t-\pi/2)\} = -2 \times e^{-\frac{\pi s}{2}} \left(-\frac{s}{s^2+4}\right) = \frac{2se^{-\pi s/2}}{s^2+4}$.

Now, combine the transforms:
$\mathcal{L}\{x(t)\} = \frac{s}{s^2+4} + \frac{2se^{-\pi s/2}}{s^2+4} = \frac{s(1 + 2e^{-\pi s/2})}{s^2+4}$.

*Self-Correction/Alternative Approach Check:*
Could we have written $x(t)$ differently?
$x(t) = \cos(2t)$ for $t < \pi/2$.
$x(t) = -\cos(2t)$ for $t \ge \pi/2$.
This means $x(t)$ starts as $\cos(2t)$, and at $t=\pi/2$, it "flips" its sign.
So, $x(t) = \cos(2t) - 2\cos(2t) u(t-\pi/2)$. This confirms the initial expression.
The transform calculation seems correct.

**Q3. Inverse Transform Question:**
Find the inverse Laplace transform of $G(s) = \frac{2e^{-4s}}{s^2+9}$.

**Answer:**
This transform has the form $e^{-as}F(s)$, where $a=4$ and $F(s) = \frac{2}{s^2+9}$.

1.  Find the inverse Laplace transform of $F(s)$:
    $F(s) = \frac{2}{s^2+9}$.
    We know $\mathcal{L}\{\sin(bt)\} = \frac{b}{s^2+b^2}$.
    For $b=3$, $\mathcal{L}\{\sin(3t)\} = \frac{3}{s^2+9}$.
    So, $\mathcal{L}^{-1}\left\{\frac{3}{s^2+9}\right\} = \sin(3t)$.
    We have $\frac{2}{s^2+9} = \frac{2}{3} \cdot \frac{3}{s^2+9}$.
    Therefore, $f(t) = \mathcal{L}^{-1}\{F(s)\} = \mathcal{L}^{-1}\left\{\frac{2}{3} \cdot \frac{3}{s^2+9}\right\} = \frac{2}{3}\sin(3t)$.

2.  Apply the inverse second shifting theorem:
    $\mathcal{L}^{-1}\{e^{-as}F(s)\} = f(t-a)u(t-a)$.
    With $a=4$ and $f(t) = \frac{2}{3}\sin(3t)$:
    $\mathcal{L}^{-1}\{G(s)\} = \frac{2}{3}\sin(3(t-4))u(t-4)$.

**Q4. Application/Problem Solving:**
Consider a mass-spring system with damping, described by the ODE:
$y'' + 4y' + 13y = f(t)$
where $y(0)=0$, $y'(0)=0$, and the input force is $f(t) = u(t-2)$.
Solve this ODE using Laplace transforms.

**Answer:**
1.  Take the Laplace transform of the ODE:
    $\mathcal{L}\{y''\} + 4\mathcal{L}\{y'\} + 13\mathcal{L}\{y\} = \mathcal{L}\{u(t-2)\}$

    Using the properties:
    $\mathcal{L}\{y\} = Y(s)$
    $\mathcal{L}\{y'\} = sY(s) - y(0) = sY(s)$ (since $y(0)=0$)
    $\mathcal{L}\{y''\} = s^2Y(s) - sy(0) - y'(0) = s^2Y(s)$ (since $y(0)=0, y'(0)=0$)
    $\mathcal{L}\{u(t-2)\} = \frac{e^{-2s}}{s}$ (from the second shifting theorem with $f(t)=1$, $F(s)=1/s$, $a=2$).

    Substituting these into the ODE:
    $s^2Y(s) + 4sY(s) + 13Y(s) = \frac{e^{-2s}}{s}$

2.  Solve for $Y(s)$:
    $Y(s)(s^2 + 4s + 13) = \frac{e^{-2s}}{s}$
    $Y(s) = \frac{e^{-2s}}{s(s^2 + 4s + 13)}$

3.  Perform partial fraction decomposition for $\frac{1}{s(s^2 + 4s + 13)}$:
    The quadratic $s^2 + 4s + 13$ has discriminant $\Delta = 4^2 - 4(1)(13) = 16 - 52 = -36$. Since $\Delta < 0$, it has complex roots. We can complete the square: $s^2 + 4s + 13 = (s^2 + 4s + 4) + 9 = (s+2)^2 + 9$.

    So, we need to decompose:
    $\frac{1}{s((s+2)^2 + 9)} = \frac{A}{s} + \frac{Bs+C}{(s+2)^2 + 9}$

    Multiply by $s((s+2)^2 + 9)$:
    $1 = A((s+2)^2 + 9) + (Bs+C)s$
    $1 = A(s^2 + 4s + 4 + 9) + Bs^2 + Cs$
    $1 = A(s^2 + 4s + 13) + Bs^2 + Cs$
    $1 = As^2 + 4As + 13A + Bs^2 + Cs$
    $1 = (A+B)s^2 + (4A+C)s + 13A$

    Equating coefficients:
    *   $s^2$: $A+B = 0 \implies B = -A$
    *   $s$: $4A+C = 0 \implies C = -4A$
    *   Constant: $13A = 1 \implies A = \frac{1}{13}$

    Now find B and C:
    $B = -\frac{1}{13}$
    $C = -\frac{4}{13}$

    So, $\frac{1}{s(s^2 + 4s + 13)} = \frac{1}{13s} - \frac{\frac{1}{13}s + \frac{4}{13}}{(s+2)^2 + 9}$

4.  Rewrite the fraction to match Laplace transform pairs:
    $\frac{1}{13s} - \frac{1}{13} \frac{s+4}{(s+2)^2 + 9}$
    We need to split $\frac{s+4}{(s+2)^2 + 9}$ into the form $\frac{s+2}{(s+2)^2+9}$ and $\frac{k}{(s+2)^2+9}$.
    $\frac{s+4}{(s+2)^2 + 9} = \frac{s+2}{(s+2)^2 + 9} + \frac{2}{(s+2)^2 + 9}$

    So, $\frac{1}{13s} - \frac{1}{13} \left(\frac{s+2}{(s+2)^2 + 9} + \frac{2}{(s+2)^2 + 9}\right)$
    $= \frac{1}{13s} - \frac{1}{13} \frac{s+2}{(s+2)^2 + 9} - \frac{2}{13} \frac{1}{(s+2)^2 + 9}$

    We need $\frac{3}{(s+2)^2+9}$ for $\sinh$. Multiply and divide by 3:
    $= \frac{1}{13s} - \frac{1}{13} \frac{s+2}{(s+2)^2 + 9} - \frac{2}{13 \cdot 3} \frac{3}{(s+2)^2 + 9}$
    $= \frac{1}{13s} - \frac{1}{13} \frac{s+2}{(s+2)^2 + 9} - \frac{2}{39} \frac{3}{(s+2)^2 + 9}$

5.  Find the inverse transform of each term:
    $\mathcal{L}^{-1}\left\{\frac{1}{13s}\right\} = \frac{1}{13}$
    $\mathcal{L}^{-1}\left\{\frac{s+2}{(s+2)^2 + 9}\right\} = e^{-2t}\cos(3t)$
    $\mathcal{L}^{-1}\left\{\frac{3}{(s+2)^2 + 9}\right\} = e^{-2t}\sin(3t)$

    So, $\mathcal{L}^{-1}\left\{\frac{1}{s(s^2 + 4s + 13)}\right\} = \frac{1}{13} - \frac{1}{13}e^{-2t}\cos(3t) - \frac{2}{39}e^{-2t}\sin(3t)$.
    Let this be $g(t)$.

6.  Apply the second shifting theorem for $Y(s) = e^{-2s} \left(\frac{1}{s(s^2 + 4s + 13)}\right)$:
    $y(t) = g(t-2) u(t-2)$
    $y(t) = \left(\frac{1}{13} - \frac{1}{13}e^{-2(t-2)}\cos(3(t-2)) - \frac{2}{39}e^{-2(t-2)}\sin(3(t-2))\right) u(t-2)$.

This is the solution for $y(t)$. It shows that the system remains at rest until $t=2$, when the force $f(t)=1$ is applied, and then it responds according to the derived $g(t)$ but starting from $t=2$.
