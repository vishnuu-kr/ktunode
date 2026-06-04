---
title: "Transforms of Derivative."
subject: "MATHEMATICS FOR ELECTRICAL SCIENCE AND PHYSICAL SCIENCE – 3"
module: "Module 1: Fourier Integral"
branch: "Electronics and Communication Engineering"
semester: 3
topicId: "68a5c45db09ce205780fe257"
status: "completed"
scrapedAt: "2026-05-23T17:46:58.843Z"
---
# Module 1: Fourier Integral - Transforms of Derivatives

This module focuses on understanding how Fourier Transforms behave when applied to derivatives of functions. This is a crucial concept for solving differential equations using the Fourier Transform, a common task in electrical and physical science.

## Learning Outcomes:

By the end of this topic, you will be able to:

*   Understand the relationship between the Fourier Transform of a function and the Fourier Transform of its derivative.
*   Apply the derivative property of Fourier Transforms to solve differential equations.
*   Relate these concepts to the Course Outcomes, particularly CO1: Determine the Fourier transforms of functions and apply them to solve problems arising in engineering.

## Key Concepts and Definitions:

### 1. Fourier Transform of a Function

Recall the definition of the Fourier Transform of a function $f(x)$:

$$
F(\omega) = \mathcal{F}\{f(x)\} = \frac{1}{\sqrt{2\pi}} \int_{-\infty}^{\infty} f(x) e^{-i\omega x} dx
$$

The inverse Fourier Transform is given by:

$$
f(x) = \mathcal{F}^{-1}\{F(\omega)\} = \frac{1}{\sqrt{2\pi}} \int_{-\infty}^{\infty} F(\omega) e^{i\omega x} d\omega
$$

**(Refer to Kreyszig, 10th ed., Chapter 9, Section 9.3 - Fourier Transforms for basic definitions and properties.)**

### 2. Fourier Transform of the First Derivative

Let $f(x)$ be a function and $f'(x)$ be its first derivative. We want to find the Fourier Transform of $f'(x)$.

$$
\mathcal{F}\{f'(x)\} = \frac{1}{\sqrt{2\pi}} \int_{-\infty}^{\infty} f'(x) e^{-i\omega x} dx
$$

We can use integration by parts: $\int u dv = uv - \int v du$.
Let $u = e^{-i\omega x}$ and $dv = f'(x) dx$.
Then $du = -i\omega e^{-i\omega x} dx$ and $v = f(x)$.

$$
\mathcal{F}\{f'(x)\} = \frac{1}{\sqrt{2\pi}} \left[ f(x) e^{-i\omega x} \right]_{-\infty}^{\infty} - \frac{1}{\sqrt{2\pi}} \int_{-\infty}^{\infty} f(x) (-i\omega e^{-i\omega x}) dx
$$

**Important Assumption:** For the Fourier Transform to exist and for this property to hold, we typically assume that $f(x) \to 0$ as $|x| \to \infty$. This is often the case for physical signals and functions encountered in engineering.

With this assumption, the boundary term $\left[ f(x) e^{-i\omega x} \right]_{-\infty}^{\infty} = 0$ because $f(x) \to 0$.

Therefore,

$$
\mathcal{F}\{f'(x)\} = \frac{1}{\sqrt{2\pi}} \int_{-\infty}^{\infty} f(x) (i\omega e^{-i\omega x}) dx
$$

$$
\mathcal{F}\{f'(x)\} = i\omega \left( \frac{1}{\sqrt{2\pi}} \int_{-\infty}^{\infty} f(x) e^{-i\omega x} dx \right)
$$

Recognizing the term in the parenthesis as the Fourier Transform of $f(x)$, we get:

$$
\boxed{\mathcal{F}\{f'(x)\} = i\omega F(\omega)}
$$

**This is a fundamental property:** The Fourier Transform of the derivative of a function is the Fourier Transform of the function multiplied by $i\omega$.

**(Refer to Kreyszig, 10th ed., Chapter 9, Section 9.5 - Fourier Cosine and Sine Transforms, which discusses properties of Fourier Transforms, including derivative properties.)**

**(Refer to B.S. Grewal, 44th ed., Chapter 32 - Fourier Transforms, for similar properties.)**

### 3. Fourier Transform of Higher-Order Derivatives

We can extend this property to higher-order derivatives by repeatedly applying the rule.

**Second Derivative:**

$$
\mathcal{F}\{f''(x)\} = \mathcal{F}\{(f'(x))'\}
$$

Let $g(x) = f'(x)$. Then $\mathcal{F}\{g'(x)\} = i\omega G(\omega)$, where $G(\omega) = \mathcal{F}\{g(x)\}$.
So, $\mathcal{F}\{f''(x)\} = i\omega \mathcal{F}\{f'(x)\}$.
Since $\mathcal{F}\{f'(x)\} = i\omega F(\omega)$, we have:

$$
\mathcal{F}\{f''(x)\} = i\omega (i\omega F(\omega)) = (i\omega)^2 F(\omega) = -\omega^2 F(\omega)
$$

$$
\boxed{\mathcal{F}\{f''(x)\} = (i\omega)^2 F(\omega) = -\omega^2 F(\omega)}
$$

**Generalizing for the n-th Derivative:**

For the $n$-th derivative of $f(x)$, assuming $f^{(k)}(x) \to 0$ as $|x| \to \infty$ for $k = 0, 1, \ldots, n-1$:

$$
\mathcal{F}\{f^{(n)}(x)\} = (i\omega)^n F(\omega)
$$

$$
\boxed{\mathcal{F}\{f^{(n)}(x)\} = (i\omega)^n F(\omega)}
$$

**Important Note:** The constant factor $\frac{1}{\sqrt{2\pi}}$ in the definition of the Fourier Transform affects the derivative property. Some texts use different definitions of the Fourier Transform (e.g., without the $\frac{1}{\sqrt{2\pi}}$ or with it on the inverse transform). Always be consistent with the definition being used. The property $\mathcal{F}\{f'(x)\} = i\omega F(\omega)$ is consistent with the definition used here.

**(Kreyszig's "Advanced Engineering Mathematics" uses the $\frac{1}{\sqrt{2\pi}}$ factor for both the transform and inverse transform, which yields this derivative property.)**

## Application to Solving Differential Equations

The derivative property of Fourier Transforms is extremely useful for solving linear ordinary and partial differential equations with constant coefficients. The strategy is:

1.  **Take the Fourier Transform of both sides of the differential equation.**
2.  **Use the derivative property to convert derivatives of $f(x)$ into algebraic expressions involving $F(\omega)$ and $i\omega$.**
3.  **Solve the resulting algebraic equation for $F(\omega)$.**
4.  **Take the inverse Fourier Transform of $F(\omega)$ to find the solution $f(x)$.**

**Example 1: Solving a First-Order ODE**

Consider the differential equation:
$f'(x) + af(x) = g(x)$, with $f(x) \to 0$ as $|x| \to \infty$.

Let $F(\omega) = \mathcal{F}\{f(x)\}$ and $G(\omega) = \mathcal{F}\{g(x)\}$.

Taking the Fourier Transform of the equation:
$\mathcal{F}\{f'(x)\} + \mathcal{F}\{af(x)\} = \mathcal{F}\{g(x)\}$

Using the linearity property ($\mathcal{F}\{af(x)\} = aF(\omega)$) and the derivative property:
$i\omega F(\omega) + aF(\omega) = G(\omega)$

Factor out $F(\omega)$:
$(i\omega + a)F(\omega) = G(\omega)$

Solve for $F(\omega)$:
$F(\omega) = \frac{G(\omega)}{i\omega + a}$

To find $f(x)$, we need to compute the inverse Fourier Transform of $F(\omega)$:
$f(x) = \mathcal{F}^{-1}\left\{\frac{G(\omega)}{i\omega + a}\right\}$

**To proceed further, we would need the specific form of $g(x)$ and its Fourier Transform $G(\omega)$.**

**(This directly addresses CO1: Determine the Fourier transforms of functions and apply them to solve problems arising in engineering.)**

**Example 2: Solving a Second-Order ODE**

Consider the differential equation:
$f''(x) + k^2 f(x) = h(x)$, with $f(x) \to 0$ and $f'(x) \to 0$ as $|x| \to \infty$.

Let $F(\omega) = \mathcal{F}\{f(x)\}$ and $H(\omega) = \mathcal{F}\{h(x)\}$.

Taking the Fourier Transform of the equation:
$\mathcal{F}\{f''(x)\} + \mathcal{F}\{k^2 f(x)\} = \mathcal{F}\{h(x)\}$

Using the derivative property for the second derivative and linearity:
$(i\omega)^2 F(\omega) + k^2 F(\omega) = H(\omega)$
$-\omega^2 F(\omega) + k^2 F(\omega) = H(\omega)$

Factor out $F(\omega)$:
$(k^2 - \omega^2)F(\omega) = H(\omega)$

Solve for $F(\omega)$:
$F(\omega) = \frac{H(\omega)}{k^2 - \omega^2}$

The solution is:
$f(x) = \mathcal{F}^{-1}\left\{\frac{H(\omega)}{k^2 - \omega^2}\right\}$

**(This also supports CO1, demonstrating the application to a more complex ODE.)**

## Practice Questions and Exercises

**Question 1:**
If $f(x) = e^{-ax^2}$, find the Fourier Transform of $f'(x)$.
*(Hint: You may need the Fourier Transform of $e^{-ax^2}$, which is $\sqrt{\frac{\pi}{2a}} e^{-\omega^2/(4a)}$ with the given definition of Fourier Transform.)*

**Solution 1:**
Given $f(x) = e^{-ax^2}$, its Fourier Transform is $F(\omega) = \mathcal{F}\{e^{-ax^2}\} = \sqrt{\frac{\pi}{2a}} e^{-\omega^2/(4a)}$.
Using the derivative property:
$\mathcal{F}\{f'(x)\} = i\omega F(\omega)$
$\mathcal{F}\{f'(x)\} = i\omega \sqrt{\frac{\pi}{2a}} e^{-\omega^2/(4a)}$

**Question 2:**
Consider the differential equation $f'(x) - 2f(x) = e^{-x}$ for $x \in (-\infty, \infty)$, with the condition that $f(x) \to 0$ as $|x| \to \infty$. Find the Fourier Transform of the solution $f(x)$.

**Solution 2:**
Let $F(\omega) = \mathcal{F}\{f(x)\}$ and $G(\omega) = \mathcal{F}\{e^{-x}\}$.
First, find $G(\omega)$:
$G(\omega) = \frac{1}{\sqrt{2\pi}} \int_{-\infty}^{\infty} e^{-x} e^{-i\omega x} dx = \frac{1}{\sqrt{2\pi}} \int_{-\infty}^{\infty} e^{-(1+i\omega)x} dx$
For this integral to converge, the real part of $(1+i\omega)$ must be positive, which it is (1).
$G(\omega) = \frac{1}{\sqrt{2\pi}} \left[ \frac{e^{-(1+i\omega)x}}{-(1+i\omega)} \right]_{-\infty}^{\infty}$
Since $e^{-x} \to 0$ as $x \to \infty$ and $e^{-x} \to \infty$ as $x \to -\infty$, this integral does not converge in the usual sense for $e^{-x}$ over $(-\infty, \infty)$.
**Correction:** The standard Fourier Transform definition requires the function to be absolutely integrable. $e^{-x}$ is not absolutely integrable over $(-\infty, \infty)$. However, for illustration purposes of the derivative property, let's assume we are dealing with a function like $g(x) = e^{-|x|}$.

Let's modify the problem to be more tractable for direct inverse transform.
Consider the ODE: $f'(x) - 2f(x) = \delta(x)$, where $\delta(x)$ is the Dirac delta function.
We know $\mathcal{F}\{\delta(x)\} = \frac{1}{\sqrt{2\pi}}$.

Taking Fourier Transform:
$i\omega F(\omega) - 2F(\omega) = \frac{1}{\sqrt{2\pi}}$
$(i\omega - 2)F(\omega) = \frac{1}{\sqrt{2\pi}}$
$F(\omega) = \frac{1}{\sqrt{2\pi}(i\omega - 2)}$

This is the Fourier Transform of the solution. To find $f(x)$, we would take the inverse transform. This often involves recognizing known transform pairs or using partial fraction decomposition with complex roots.
The function whose Fourier Transform is $\frac{1}{a+i\omega}$ is $\sqrt{2\pi} e^{-ax}$ for $a>0$.
So, $F(\omega) = \frac{1}{-2+i\omega} \frac{1}{\sqrt{2\pi}}$.
$f(x) = \mathcal{F}^{-1}\left\{\frac{1}{\sqrt{2\pi}(i\omega - 2)}\right\} = \mathcal{F}^{-1}\left\{\frac{1}{-2+i\omega}\right\} \frac{1}{\sqrt{2\pi}}$
We know $\mathcal{F}\{e^{-ax}\} = \sqrt{\frac{\pi}{2}} \frac{1}{a+i\omega}$.
So, $\mathcal{F}\left\{\frac{1}{\sqrt{2\pi}} e^{-ax}\right\} = \frac{1}{a+i\omega}$.
Thus, for $a=2$, $f(x) = \frac{1}{\sqrt{2\pi}} e^{-2x}$.
**However, this is for $x > 0$.** The solution for $f'(x) - 2f(x) = \delta(x)$ with $f(x) \to 0$ as $|x| \to \infty$ is $f(x) = e^{2x} u(-x)$, where $u(-x)$ is the unit step function for negative values.
Let's verify the transform of $e^{2x} u(-x)$.
$\mathcal{F}\{e^{2x} u(-x)\} = \frac{1}{\sqrt{2\pi}} \int_{-\infty}^{0} e^{2x} e^{-i\omega x} dx = \frac{1}{\sqrt{2\pi}} \int_{-\infty}^{0} e^{(2-i\omega)x} dx$
$= \frac{1}{\sqrt{2\pi}} \left[ \frac{e^{(2-i\omega)x}}{2-i\omega} \right]_{-\infty}^{0} = \frac{1}{\sqrt{2\pi}} \left( \frac{e^0}{2-i\omega} - 0 \right) = \frac{1}{\sqrt{2\pi}(2-i\omega)} = \frac{1}{\sqrt{2\pi}(-(-2+i\omega))}$
This is not matching our $F(\omega)$. Let's recheck the definition of Fourier transform for $e^{ax}u(-x)$.
$\mathcal{F}\{e^{ax} u(-x)\} = \frac{1}{\sqrt{2\pi}} \int_{-\infty}^{0} e^{ax} e^{-i\omega x} dx = \frac{1}{\sqrt{2\pi}} \int_{-\infty}^{0} e^{(a-i\omega)x} dx = \frac{1}{\sqrt{2\pi}} \left[\frac{e^{(a-i\omega)x}}{a-i\omega}\right]_{-\infty}^0 = \frac{1}{\sqrt{2\pi}} \frac{1}{a-i\omega}$.
So for $a=2$, $\mathcal{F}\{e^{2x} u(-x)\} = \frac{1}{\sqrt{2\pi}(2-i\omega)}$.
Our $F(\omega)$ was $\frac{1}{\sqrt{2\pi}(i\omega-2)} = \frac{-1}{\sqrt{2\pi}(2-i\omega)}$.
This implies the solution is $f(x) = -e^{2x}u(-x)$. Let's check the ODE for this:
$f'(x) = -2e^{2x}u(-x) + e^{2x} \delta(-x) = -2e^{2x}u(-x) + e^{2x} \delta(x)$.
$f'(x) - 2f(x) = (-2e^{2x}u(-x) + e^{2x} \delta(x)) - 2(-e^{2x}u(-x)) = e^{2x} \delta(x)$.
This is still not $\delta(x)$.

The issue lies in the exact form of the solution when using the Dirac delta function. The transform of $\delta(x)$ is $\frac{1}{\sqrt{2\pi}}$.
The equation is $(i\omega - 2) F(\omega) = \frac{1}{\sqrt{2\pi}}$.
$F(\omega) = \frac{1}{\sqrt{2\pi}(i\omega - 2)}$.
We need the inverse transform of $\frac{1}{i\omega - a}$.
Recall $\mathcal{F}\{e^{-ax} u(x)\} = \frac{1}{\sqrt{2\pi}(a+i\omega)}$ for $a>0$.
And $\mathcal{F}\{e^{ax} u(-x)\} = \frac{1}{\sqrt{2\pi}(a-i\omega)}$ for $a>0$.
Our $F(\omega)$ is $\frac{1}{\sqrt{2\pi}(i\omega - 2)} = \frac{1}{\sqrt{2\pi}(-(2-i\omega))} = \frac{-1}{\sqrt{2\pi}(2-i\omega)}$.
Comparing with $\mathcal{F}\{e^{ax} u(-x)\} = \frac{1}{\sqrt{2\pi}(a-i\omega)}$, we have $a=2$.
So, $F(\omega) = - \mathcal{F}\{e^{2x} u(-x)\}$.
Therefore, $f(x) = -e^{2x} u(-x)$.

**Question 3:**
Show that $\mathcal{F}\{f^{(n)}(x)\} = (i\omega)^n F(\omega)$, given that $f^{(k)}(x) \to 0$ as $|x| \to \infty$ for $k=0, 1, \ldots, n-1$.

**Solution 3:**
This can be proven by induction.
Base case: $n=1$. We have shown $\mathcal{F}\{f'(x)\} = i\omega F(\omega)$.
Inductive step: Assume the property holds for $n=k$, i.e., $\mathcal{F}\{f^{(k)}(x)\} = (i\omega)^k F(\omega)$.
Now consider $n=k+1$:
$\mathcal{F}\{f^{(k+1)}(x)\} = \mathcal{F}\{(f^{(k)}(x))'\}$
Let $g(x) = f^{(k)}(x)$. Then $\mathcal{F}\{g'(x)\} = i\omega G(\omega)$, where $G(\omega) = \mathcal{F}\{g(x)\} = \mathcal{F}\{f^{(k)}(x)\}$.
By the inductive hypothesis, $G(\omega) = (i\omega)^k F(\omega)$.
Therefore, $\mathcal{F}\{f^{(k+1)}(x)\} = i\omega \left( (i\omega)^k F(\omega) \right) = (i\omega)^{k+1} F(\omega)$.
The property holds for $n=k+1$. By induction, it holds for all positive integers $n$.

## Important Points to Remember:

*   The derivative property: $\mathcal{F}\{f'(x)\} = i\omega F(\omega)$.
*   For higher-order derivatives: $\mathcal{F}\{f^{(n)}(x)\} = (i\omega)^n F(\omega)$.
*   These properties are contingent on the function and its derivatives decaying to zero as $|x| \to \infty$. This ensures the boundary terms in integration by parts vanish.
*   The derivative property transforms differentiation in the time/spatial domain into multiplication by $i\omega$ in the frequency domain. This is the core reason Fourier Transforms are powerful for solving differential equations.
*   Always be mindful of the specific definition of the Fourier Transform used in your course or textbook, as the constant factors ($\frac{1}{\sqrt{2\pi}}$, $2\pi$, etc.) can shift between definitions.

## Connection to Course Outcomes:

*   **CO1: Determine the Fourier transforms of functions and apply them to solve problems arising in engineering.**
    This topic directly enables CO1 by providing the tools to transform differential equations into algebraic ones. Solving these algebraic equations and transforming back allows engineers to find solutions to physical systems described by differential equations (e.g., circuits, systems with damping, wave propagation). The derivative property is a cornerstone of this application.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=p_di4ateumM) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=Kb3K1Ui4454) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=S0hG_mS9bV4) |


## References:

*   **Kreyszig, Erwin. *Advanced Engineering Mathematics*. 10th ed., John Wiley & Sons, 2016.** (Essential for definitions, properties, and examples of Fourier Transforms, including derivative properties.)
*   **Grewal, B.S. *Higher Engineering Mathematics*. 44th ed., Khanna Publishers, 2018.** (Provides a comprehensive treatment of Fourier Transforms and their applications, including derivative rules.)

This concludes the notes on the Transforms of Derivatives within the Fourier Integral module. Understanding this property is fundamental for the successful application of Fourier Transforms in solving real-world engineering problems.