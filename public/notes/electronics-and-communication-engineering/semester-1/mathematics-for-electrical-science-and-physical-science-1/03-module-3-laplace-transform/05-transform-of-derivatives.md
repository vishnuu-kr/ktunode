---
title: "Transform of derivatives"
subject: "MATHEMATICS FOR ELECTRICAL SCIENCE AND PHYSICAL 
SCIENCE - 1"
module: "Module 3: Laplace Transform"
branch: "Electronics and Communication Engineering"
semester: 1
topicId: "68b7dc8f20463779487d9fc8"
status: "completed"
scrapedAt: "2026-05-23T17:35:03.217Z"
---
# Mathematics for Electrical Science and Physical Science - 1

## Module 3: Laplace Transform

### Topic: Transform of Derivatives

Welcome, everyone! Today, we're diving into a really crucial aspect of the Laplace transform: how it helps us deal with derivatives. This is where the true power of Laplace transforms for solving differential equations starts to shine. We've learned what the Laplace transform is and how to find transforms of basic functions. Now, we'll see how this tool simplifies the process of solving differential equations, especially those that pop up all the time in electrical circuits and physical systems.

Our main goal here is to understand how the Laplace transform of a derivative of a function relates to the Laplace transform of the function itself. This connection is what allows us to transform a differential equation (which involves derivatives) into an algebraic equation, which is much, much easier to solve.

This directly ties into our **Course Outcome CO3: Compute Laplace transform and apply it to solve ODEs arising in engineering.** By understanding the transform of derivatives, we are building the foundation to actually *apply* the Laplace transform to solve those ordinary differential equations (ODEs) that are so common in our fields. It also complements **CO2: Solve homogeneous and non-homogeneous linear differential equations with constant coefficients**, as the transform of derivatives is the primary mechanism we use to tackle these.

Let's start by recalling the definition of the Laplace transform of a function $f(t)$:

$$ \mathcal{L}\{f(t)\} = F(s) = \int_{0}^{\infty} e^{-st} f(t) dt $$

This integral transforms our function $f(t)$ from the time domain ($t$) to the frequency domain ($s$).

### The Laplace Transform of the First Derivative: $\mathcal{L}\{f'(t)\}$

So, how do we find the Laplace transform of the derivative of $f(t)$, which we denote as $f'(t)$? We'll use the definition of the Laplace transform and a little bit of integration by parts. Remember integration by parts from your calculus days? It's the formula: $\int u \, dv = uv - \int v \, du$.

Let's apply this to our integral:

$$ \mathcal{L}\{f'(t)\} = \int_{0}^{\infty} e^{-st} f'(t) dt $$

Here, a natural choice for $u$ is $e^{-st}$ and for $dv$ is $f'(t) dt$.
So, let $u = e^{-st}$ and $dv = f'(t) dt$.
Then, $du = -se^{-st} dt$ and $v = f(t)$.

Applying the integration by parts formula:

$$ \mathcal{L}\{f'(t)\} = \left[ e^{-st} f(t) \right]_{0}^{\infty} - \int_{0}^{\infty} f(t) (-se^{-st}) dt $$

Let's break down that first term, the boundary term: $\left[ e^{-st} f(t) \right]_{0}^{\infty}$.
This means we evaluate $e^{-st} f(t)$ at the upper limit ($t \to \infty$) and subtract its value at the lower limit ($t=0$).

For the upper limit, as $t \to \infty$, if $s > 0$ (which is usually the case for the Laplace transform to converge), $e^{-st}$ approaches 0. If $f(t)$ doesn't grow too quickly, this term will go to zero. We typically assume that $f(t)$ is of exponential order, meaning $|f(t)| \le Me^{at}$ for some constants $M$ and $a$. For the transform to exist, we need $s > a$. So, for $s$ large enough, $e^{-st}f(t) \to 0$.

For the lower limit, at $t=0$, the term is $e^{-s \cdot 0} f(0) = e^0 f(0) = 1 \cdot f(0) = f(0)$.

So, the boundary term simplifies to $0 - f(0) = -f(0)$.

Now, let's look at the integral part of the formula: $- \int_{0}^{\infty} f(t) (-se^{-st}) dt$.
This simplifies to $+ \int_{0}^{\infty} se^{-st} f(t) dt$.

We can pull the constant $s$ out of the integral: $s \int_{0}^{\infty} e^{-st} f(t) dt$.

And what is $\int_{0}^{\infty} e^{-st} f(t) dt$? That's the definition of $F(s)$, the Laplace transform of $f(t)$!

Putting it all together, we get our first key formula:

$$ \mathcal{L}\{f'(t)\} = sF(s) - f(0) $$

This is a beautiful result! Notice how the derivative operation in the time domain has been transformed into a multiplication by $s$ and a subtraction of an initial condition in the $s$-domain. This is the essence of why Laplace transforms are so powerful for ODEs. Instead of dealing with differential operators, we're dealing with algebraic operations.

**Key Takeaway:** The Laplace transform of $f'(t)$ is $s$ times the transform of $f(t)$, minus the initial value of $f(t)$ at $t=0$. This is really important, so remember it!

### The Laplace Transform of Higher Derivatives

Now, what about the second derivative, $f''(t)$? We can use the same trick. We can think of $f''(t)$ as the derivative of $f'(t)$. So, let $g(t) = f'(t)$. Then $g'(t) = f''(t)$.
We already know the formula for the transform of a first derivative: $\mathcal{L}\{g'(t)\} = s\mathcal{L}\{g(t)\} - g(0)$.

Substituting back $g(t) = f'(t)$ and $g(0) = f'(0)$:

$$ \mathcal{L}\{f''(t)\} = s\mathcal{L}\{f'(t)\} - f'(0) $$

And we already found $\mathcal{L}\{f'(t)\} = sF(s) - f(0)$. Let's substitute that in:

$$ \mathcal{L}\{f''(t)\} = s[sF(s) - f(0)] - f'(0) $$

Expanding this, we get:

$$ \mathcal{L}\{f''(t)\} = s^2F(s) - sf(0) - f'(0) $$

Isn't that neat? For the second derivative, we get $s^2F(s)$ and terms involving the initial values $f(0)$ and $f'(0)$.

Let's generalize this for the $n$-th derivative. If we have a function $f(t)$ and its derivatives $f'(t), f''(t), \dots, f^{(n)}(t)$, their Laplace transforms are given by:

*   $\mathcal{L}\{f'(t)\} = sF(s) - f(0)$
*   $\mathcal{L}\{f''(t)\} = s^2F(s) - sf(0) - f'(0)$
*   $\mathcal{L}\{f'''(t)\} = s^3F(s) - s^2f(0) - sf'(0) - f''(0)$

And in general, for the $n$-th derivative:

$$ \mathcal{L}\{f^{(n)}(t)\} = s^nF(s) - s^{n-1}f(0) - s^{n-2}f'(0) - \dots - sf^{(n-2)}(0) - f^{(n-1)}(0) $$

This formula is often written more compactly as:

$$ \mathcal{L}\{f^{(n)}(t)\} = s^nF(s) - \sum_{k=0}^{n-1} s^{n-1-k} f^{(k)}(0) $$

Where $f^{(k)}(0)$ represents the $k$-th derivative of $f(t)$ evaluated at $t=0$. And remember, $f^{(0)}(0)$ is just $f(0)$.

**Important Point:** The coefficients $f(0), f'(0), f''(0), \dots$ are the initial conditions of the differential equation. The Laplace transform effectively incorporates these initial conditions directly into the transformed equation, which is why it's so effective for initial value problems.

### How This Helps Solve ODEs

Let's quickly illustrate with an example, connecting this to **CO2** and **CO3**.

Consider a simple second-order linear ODE with constant coefficients:
$ay'' + by' + cy = r(t)$, with initial conditions $y(0) = y_0$ and $y'(0) = y_1$.

If we take the Laplace transform of both sides:

$$ \mathcal{L}\{ay'' + by' + cy\} = \mathcal{L}\{r(t)\} $$

Using the linearity property of the Laplace transform ($\mathcal{L}\{af(t) + bg(t)\} = a\mathcal{L}\{f(t)\} + b\mathcal{L}\{g(t)\}$), we can transform each term separately:

$$ a\mathcal{L}\{y''\} + b\mathcal{L}\{y'\} + c\mathcal{L}\{y\} = R(s) $$

where $Y(s) = \mathcal{L}\{y(t)\}$ and $R(s) = \mathcal{L}\{r(t)\}$.

Now, we apply the derivative transform formulas:

$$ a[s^2Y(s) - sy(0) - y'(0)] + b[sY(s) - y(0)] + cY(s) = R(s) $$

Substituting the initial conditions $y(0) = y_0$ and $y'(0) = y_1$:

$$ a[s^2Y(s) - sy_0 - y_1] + b[sY(s) - y_0] + cY(s) = R(s) $$

Notice that all the $y''$ and $y'$ terms are gone, replaced by multiplications by $s$ and constants involving $y_0$ and $y_1$. This is now an algebraic equation in terms of $Y(s)$ and $s$.

Let's rearrange to solve for $Y(s)$:

$$ Y(s) [as^2 + bs + c] - asy_0 - ay_1 - by_0 = R(s) $$

$$ Y(s) [as^2 + bs + c] = R(s) + asy_0 + ay_1 + by_0 $$

$$ Y(s) = \frac{R(s) + asy_0 + ay_1 + by_0}{as^2 + bs + c} $$

Once we have $Y(s)$ in this form, our next step in solving the ODE is to find the inverse Laplace transform of $Y(s)$ to get back to $y(t)$. This process, of finding the inverse transform, often involves partial fraction decomposition and using our known transform pairs.

This is the core of how Laplace transforms simplify solving ODEs. It converts the problem from one of calculus (differentiation and integration) to one of algebra (solving for $Y(s)$) and then back to calculus for the inverse transform.

### Example: A Simple Harmonic Oscillator

Let's consider a physical example, like a mass-spring system or an RLC circuit. Suppose we have a system described by the differential equation:

$y'' + 4y = \sin(3t)$

with initial conditions $y(0) = 1$ and $y'(0) = 0$.

This is a second-order, non-homogeneous linear ODE with constant coefficients.
Let $y(t)$ be the displacement, and $y''(t)$ be the acceleration.

We need the following transforms:
*   $\mathcal{L}\{y''(t)\} = s^2Y(s) - sy(0) - y'(0)$
*   $\mathcal{L}\{y(t)\} = Y(s)$
*   $\mathcal{L}\{\sin(at)\} = \frac{a}{s^2 + a^2}$

For our case, $a=3$, so $\mathcal{L}\{\sin(3t)\} = \frac{3}{s^2 + 3^2} = \frac{3}{s^2 + 9}$.

Now, apply the Laplace transform to the ODE:

$$ \mathcal{L}\{y'' + 4y\} = \mathcal{L}\{\sin(3t)\} $$

$$ \mathcal{L}\{y''\} + 4\mathcal{L}\{y\} = \frac{3}{s^2 + 9} $$

Substitute the derivative transform and initial conditions ($y(0)=1, y'(0)=0$):

$$ [s^2Y(s) - s(1) - 0] + 4[Y(s)] = \frac{3}{s^2 + 9} $$

$$ s^2Y(s) - s + 4Y(s) = \frac{3}{s^2 + 9} $$

Now, group terms with $Y(s)$:

$$ Y(s)(s^2 + 4) - s = \frac{3}{s^2 + 9} $$

Isolate $Y(s)$:

$$ Y(s)(s^2 + 4) = \frac{3}{s^2 + 9} + s $$

$$ Y(s) = \frac{3}{(s^2 + 9)(s^2 + 4)} + \frac{s}{s^2 + 4} $$

Here's where we'd typically use partial fraction decomposition for the first term. The goal for this topic is understanding how we *got* this $Y(s)$. We transformed the derivatives, plugged in initial conditions, and ended up with an algebraic expression for $Y(s)$. This is a direct application of the transform of derivatives, fulfilling **CO3**.

The term $\frac{s}{s^2+4}$ is the transform of $\cos(2t)$.
The term $\frac{3}{(s^2+9)(s^2+4)}$ can be decomposed. We'd use partial fractions to split this into simpler terms whose inverse transforms we know. For example, it would decompose into terms like $\frac{A}{s^2+9}$ and $\frac{B}{s^2+4}$.

Let's do the partial fraction for $\frac{3}{(s^2+9)(s^2+4)}$:
Let $u=s^2$. Then $\frac{3}{(u+9)(u+4)} = \frac{A}{u+9} + \frac{B}{u+4}$.
$3 = A(u+4) + B(u+9)$.
If $u=-4$: $3 = A(0) + B(-4+9) \implies 3 = 5B \implies B = 3/5$.
If $u=-9$: $3 = A(-9+4) + B(0) \implies 3 = -5A \implies A = -3/5$.

So, $\frac{3}{(s^2+9)(s^2+4)} = \frac{-3/5}{s^2+9} + \frac{3/5}{s^2+4}$.
We know $\mathcal{L}^{-1}\left\{\frac{a}{s^2+a^2}\right\} = \sin(at)$ and $\mathcal{L}^{-1}\left\{\frac{s}{s^2+a^2}\right\} = \cos(at)$.
So, $\mathcal{L}^{-1}\left\{\frac{1}{s^2+9}\right\} = \frac{1}{3}\sin(3t)$ and $\mathcal{L}^{-1}\left\{\frac{1}{s^2+4}\right\} = \frac{1}{2}\sin(2t)$.

Therefore,
$\mathcal{L}^{-1}\left\{\frac{-3/5}{s^2+9}\right\} = -\frac{3}{5} \cdot \frac{1}{3}\sin(3t) = -\frac{1}{5}\sin(3t)$.
$\mathcal{L}^{-1}\left\{\frac{3/5}{s^2+4}\right\} = \frac{3}{5} \cdot \frac{1}{2}\sin(2t) = \frac{3}{10}\sin(2t)$.

And $\mathcal{L}^{-1}\left\{\frac{s}{s^2+4}\right\} = \cos(2t)$.

Combining all parts for $y(t)$:

$y(t) = \mathcal{L}^{-1}\{Y(s)\} = \mathcal{L}^{-1}\left\{\frac{-3/5}{s^2+9} + \frac{3/5}{s^2+4} + \frac{s}{s^2+4}\right\}$
$y(t) = -\frac{1}{5}\sin(3t) + \frac{3}{10}\sin(2t) + \cos(2t)$.

This is the solution to our ODE. The key step, driven by the transform of derivatives, was getting to the algebraic expression for $Y(s)$.

### Connecting to Textbook Concepts

This material is fundamental and extensively covered in standard texts.
**Kreyszig's Advanced Engineering Mathematics** (10th ed.) in Chapter 6, "Laplace Transforms," specifically section 6.2, "Laplace Transforms of Functions. First Shifting Theorem," and section 6.3, "Laplace Transform of Derivatives and Integrals," will detail these formulas and their derivations. Kreyszig often emphasizes the transformation of ODEs into algebraic equations as a primary application.

**Bird's Higher Engineering Mathematics** (9th ed.) and **Ramana's Higher Engineering Mathematics** (39th ed.) also provide excellent coverage, often with many practical examples from electrical engineering, like circuit analysis. They will reinforce these derivative transform rules and show their direct application in solving circuit transients.

When you're studying, pay close attention to how the initial conditions $f(0), f'(0), \dots$ are incorporated. This is a common point of error if not handled carefully.

### Common Pitfalls and Exam Tips

1.  **Forgetting the Initial Conditions:** This is the most common mistake. Always remember that $\mathcal{L}\{f'(t)\} = sF(s) - f(0)$, not just $sF(s)$. For higher derivatives, ensure all the initial condition terms are included with the correct powers of $s$ and signs.
2.  **Incorrectly Applying Integration by Parts:** Double-check your $u$, $dv$, $du$, and $v$ when you derive these formulas yourself or when you need to derive a new one.
3.  **Confusion with Differentiation in the s-domain:** Sometimes, the transform of $t f(t)$ is confused with the transform of derivatives. Remember that $\mathcal{L}\{tf(t)\} = -\frac{d}{ds}F(s)$.
4.  **Applying to Non-Constant Coefficients:** The formulas derived here are specifically for ODEs with *constant* coefficients. If your ODE has coefficients that depend on $t$ (e.g., $ty'(t)$), these simple derivative transform rules won't directly apply, and you'll need to use the $tf(t)$ transform property.

**Exam Focus:** Be prepared to state the formulas for the Laplace transform of first and second derivatives. More importantly, be ready to *use* them to transform an ODE into the $s$-domain and set up the algebraic equation for $Y(s)$. The actual inverse transform is often a separate, but related, skill.

### Summary of Key Formulas

*   $\mathcal{L}\{f'(t)\} = sF(s) - f(0)$
*   $\mathcal{L}\{f''(t)\} = s^2F(s) - sf(0) - f'(0)$
*   $\mathcal{L}\{f^{(n)}(t)\} = s^nF(s) - \sum_{k=0}^{n-1} s^{n-1-k} f^{(k)}(0)$

These formulas are your passport to solving differential equations using the Laplace transform. They are the bridge between the time domain and the $s$-domain for differential operators.

### Sample Questions and Answers

**Question 1 (Conceptual):**
Explain why the Laplace transform is a useful tool for solving linear ordinary differential equations with constant coefficients.

**Answer:**
The Laplace transform is useful because it converts linear ordinary differential equations (ODEs) in the time domain ($t$) into algebraic equations in the frequency domain ($s$). Specifically, the Laplace transform of derivatives ($f'(t)$, $f''(t)$, etc.) transforms differentiation operations into multiplications by $s$ and subtractions of initial conditions. This process simplifies the ODE into an algebraic equation for the transformed function, $Y(s)$. Solving this algebraic equation for $Y(s)$ is generally much simpler than solving the original ODE. Once $Y(s)$ is found, the inverse Laplace transform is applied to recover the solution $y(t)$ in the time domain. The initial conditions of the ODE are naturally incorporated into the algebraic equation, making it particularly effective for solving initial value problems.

**Question 2 (Application):**
Find the Laplace transform of $y''(t)$ given that $y(0) = 2$ and $y'(0) = -1$. Let $Y(s)$ be the Laplace transform of $y(t)$.

**Answer:**
We use the formula for the Laplace transform of the second derivative:
$\mathcal{L}\{y''(t)\} = s^2Y(s) - sy(0) - y'(0)$

Substitute the given initial conditions: $y(0) = 2$ and $y'(0) = -1$.

$\mathcal{L}\{y''(t)\} = s^2Y(s) - s(2) - (-1)$
$\mathcal{L}\{y''(t)\} = s^2Y(s) - 2s + 1$

**Question 3 (Exam-Oriented):**
Transform the following ODE into the $s$-domain, given the initial conditions:
$2y''(t) + 3y'(t) - y(t) = e^{-t}$, with $y(0) = 0$ and $y'(0) = 1$.

**Answer:**
First, we identify the Laplace transforms of each term:
*   $\mathcal{L}\{y''(t)\} = s^2Y(s) - sy(0) - y'(0)$
*   $\mathcal{L}\{y'(t)\} = sY(s) - y(0)$
*   $\mathcal{L}\{y(t)\} = Y(s)$
*   $\mathcal{L}\{e^{-t}\} = \frac{1}{s - (-1)} = \frac{1}{s+1}$ (using the standard transform pair $\mathcal{L}\{e^{at}\} = \frac{1}{s-a}$)

Now substitute the initial conditions $y(0) = 0$ and $y'(0) = 1$:
*   $\mathcal{L}\{y''(t)\} = s^2Y(s) - s(0) - 1 = s^2Y(s) - 1$
*   $\mathcal{L}\{y'(t)\} = sY(s) - 0 = sY(s)$

Now substitute these into the ODE:
$2\mathcal{L}\{y''(t)\} + 3\mathcal{L}\{y'(t)\} - \mathcal{L}\{y(t)\} = \mathcal{L}\{e^{-t}\}$
$2(s^2Y(s) - 1) + 3(sY(s)) - Y(s) = \frac{1}{s+1}$

Distribute and group terms involving $Y(s)$:
$2s^2Y(s) - 2 + 3sY(s) - Y(s) = \frac{1}{s+1}$

$Y(s)(2s^2 + 3s - 1) - 2 = \frac{1}{s+1}$

This is the transformed equation in the $s$-domain. If we were asked to solve for $Y(s)$, we would proceed as follows:
$Y(s)(2s^2 + 3s - 1) = \frac{1}{s+1} + 2$
$Y(s)(2s^2 + 3s - 1) = \frac{1 + 2(s+1)}{s+1}$
$Y(s)(2s^2 + 3s - 1) = \frac{1 + 2s + 2}{s+1}$
$Y(s)(2s^2 + 3s - 1) = \frac{2s + 3}{s+1}$
$Y(s) = \frac{2s + 3}{(s+1)(2s^2 + 3s - 1)}$

The question only asked to transform it, which is the step leading to $Y(s)(2s^2 + 3s - 1) - 2 = \frac{1}{s+1}$.

This concludes our discussion on the transform of derivatives. Master these formulas, and you'll find solving ODEs a much more manageable task!

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=p_di4ateumM) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=7UJ4CFR1894) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=S0hG_mS9bV4) |
