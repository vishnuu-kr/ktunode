---
title: "Solution by variation of parameters (Second Order)."
subject: "MATHEMATICS FOR ELECTRICAL SCIENCE AND 
PHYSICAL  SCIENCE - 1"
module: "Module 2: Homogeneous linear ODEs of second order"
branch: "Mechanical Engineering"
semester: 1
topicId: "68bd1edefeb4799d95e83553"
status: "completed"
scrapedAt: "2026-05-20T17:39:27.109Z"
---
## Module 2: Homogeneous Linear ODEs of Second Order - Solution by Variation of Parameters

Welcome, everyone! Today, we embark on a crucial technique for solving second-order homogeneous linear ordinary differential equations (ODEs): the **Method of Variation of Parameters**. We've already explored some methods, like finding solutions when we can guess the form of the particular solution. But what happens when that's not so straightforward, especially for non-constant coefficients or complex forcing functions? That's where variation of parameters shines!

This method is a powerful tool that will directly help us achieve **Course Outcome 2 (CO2)**: "Solve homogeneous and non-homogeneous linear differential equations with constant coefficients." While our focus today is on homogeneous equations initially to build the foundation, the beauty of this method is its extension to non-homogeneous cases, which we'll touch upon. Understanding this is vital for applications in electrical circuits, mechanical vibrations, and many other physical systems where these ODEs model the behavior of the systems.

### 1. The Foundation: Complementary Function and the Need for Variation

Recall from our previous discussions that a general second-order linear ODE can be written as:

$a(x)y'' + b(x)y' + c(x)y = f(x)$

For the *homogeneous* case, $f(x) = 0$. And importantly, for the variation of parameters method to be most effective, we often start by assuming we *already know* the solutions to the associated *homogeneous* equation, or at least two linearly independent solutions. Let's say we have a homogeneous equation $y'' + P(x)y' + Q(x)y = 0$. If we've found two linearly independent solutions, $y_1(x)$ and $y_2(x)$, then the general solution to the homogeneous equation (often called the **complementary function**, $y_c$) is given by:

$y_c(x) = c_1 y_1(x) + c_2 y_2(x)$

Here, $c_1$ and $c_2$ are arbitrary constants. This is our starting point.

Now, let's consider the **non-homogeneous** equation:

$y'' + P(x)y' + Q(x)y = f(x)$

If we want to find the **general solution** to this non-homogeneous equation, we know it's of the form:

$y(x) = y_c(x) + y_p(x)$

where $y_p(x)$ is a **particular solution** to the non-homogeneous equation. The challenge is finding this $y_p(x)$. The method of variation of parameters provides a systematic way to construct $y_p(x)$ *without* needing to guess its form, relying only on the known complementary solutions $y_1$ and $y_2$.

### 2. The Core Idea: "Varying" the Constants

The name "variation of parameters" is quite descriptive. We start with the form of the complementary function: $y_c(x) = c_1 y_1(x) + c_2 y_2(x)$. The "variation" comes from the idea of replacing these *constants* ($c_1$ and $c_2$) with *functions* of $x$. Let's call these functions $u_1(x)$ and $u_2(x)$.

So, we *propose* a particular solution of the form:

$y_p(x) = u_1(x) y_1(x) + u_2(x) y_2(x)$

The key insight here, pioneered by mathematicians like Lagrange, is that if we can find suitable functions $u_1(x)$ and $u_2(x)$, then this proposed solution will indeed be a particular solution to our non-homogeneous ODE.

This is like trying to repair a broken machine. You know the basic design (the complementary solution), but you need to find specific, adjustable parts (the functions $u_1$ and $u_2$) that make the whole system work correctly, even with an external force or disturbance ($f(x)$).

### 3. Deriving the Equations for $u_1'$ and $u_2'$

Now, how do we find these functions $u_1(x)$ and $u_2(x)$? We need to substitute our proposed $y_p(x)$ into the non-homogeneous ODE: $y'' + P(x)y' + Q(x)y = f(x)$. This means we'll need $y_p'$ and $y_p''$.

Let's compute $y_p'$:

$y_p'(x) = u_1'(x) y_1(x) + u_1(x) y_1'(x) + u_2'(x) y_2(x) + u_2(x) y_2'(x)$

This looks a bit messy. To simplify the process of finding $y_p''$, we introduce a strategic condition. We *choose* to impose the following condition on $u_1'$ and $u_2'$:

**Condition 1:** $u_1'(x) y_1(x) + u_2'(x) y_2(x) = 0$

Why do we do this? Let's see what happens to $y_p'$ if this condition is met:

$y_p'(x) = u_1(x) y_1'(x) + u_2(x) y_2'(x)$

Much cleaner, right? This condition essentially eliminates terms involving the derivatives of $u_1$ and $u_2$ in the expression for $y_p'$, which will simplify the calculation of $y_p''$.

Now, let's find $y_p''$ using this simplified $y_p'$:

$y_p''(x) = u_1'(x) y_1'(x) + u_1(x) y_1''(x) + u_2'(x) y_2'(x) + u_2(x) y_2''(x)$

Now, we substitute $y_p$, $y_p'$, and $y_p''$ into the ODE: $y'' + P(x)y' + Q(x)y = f(x)$.

$(u_1' y_1' + u_1 y_1'' + u_2' y_2' + u_2 y_2'') + P(x)(u_1 y_1' + u_2 y_2') + Q(x)(u_1 y_1 + u_2 y_2) = f(x)$

Let's rearrange this by grouping terms with $u_1$, $u_2$, $u_1'$, and $u_2'$:

$u_1(y_1'' + P(x)y_1' + Q(x)y_1) + u_2(y_2'' + P(x)y_2' + Q(x)y_2) + u_1' y_1' + u_2' y_2' = f(x)$

Here's the magic! Since $y_1$ and $y_2$ are solutions to the *homogeneous* equation $y'' + P(x)y' + Q(x)y = 0$, the terms in the parentheses are zero:

$y_1'' + P(x)y_1' + Q(x)y_1 = 0$
$y_2'' + P(x)y_2' + Q(x)y_2 = 0$

So, our equation simplifies beautifully to:

$u_1'(x) y_1'(x) + u_2'(x) y_2'(x) = f(x)$

This is our **second condition**.

Now we have a system of two linear equations for the unknown derivatives $u_1'(x)$ and $u_2'(x)$:

1.  $y_1 u_1' + y_2 u_2' = 0$
2.  $y_1' u_1' + y_2' u_2' = f(x)$

This is a system of linear equations in matrix form:

$\begin{pmatrix} y_1 & y_2 \\ y_1' & y_2' \end{pmatrix} \begin{pmatrix} u_1' \\ u_2' \end{pmatrix} = \begin{pmatrix} 0 \\ f(x) \end{pmatrix}$

This is a direct connection to **Course Outcome 1 (CO1)**, where we learned to solve systems of linear equations. The determinant of the coefficient matrix is $W(x) = y_1 y_2' - y_2 y_1'$. This is precisely the **Wronskian** of $y_1$ and $y_2$, denoted by $W(y_1, y_2)$.

Recall that for $y_1$ and $y_2$ to be linearly independent, their Wronskian $W(x)$ must be non-zero for all $x$ in the interval of interest. If $W(x) \neq 0$, we can solve for $u_1'$ and $u_2'$ using Cramer's Rule or by direct elimination.

Using Cramer's Rule:

$u_1'(x) = \frac{\begin{vmatrix} 0 & y_2 \\ f(x) & y_2' \end{vmatrix}}{W(x)} = \frac{-y_2 f(x)}{W(x)}$

$u_2'(x) = \frac{\begin{vmatrix} y_1 & 0 \\ y_1' & f(x) \end{vmatrix}}{W(x)} = \frac{y_1 f(x)}{W(x)}$

Remember this: the Wronskian $W(x)$ appears in the denominator. This is why linear independence is crucial!

### 4. Finding $u_1(x)$ and $u_2(x)$, and the Particular Solution $y_p(x)$

Once we have $u_1'(x)$ and $u_2'(x)$, we can find $u_1(x)$ and $u_2(x)$ by integrating:

$u_1(x) = \int \frac{-y_2(x) f(x)}{W(x)} dx$
$u_2(x) = \int \frac{y_1(x) f(x)}{W(x)} dx$

When we integrate, we technically get constants of integration ($+C_1$, $+C_2$). However, since we only need *one* particular solution $y_p$, we can choose these constants to be zero for simplicity. Any choice of constants will still yield a valid particular solution, and these constants will ultimately be absorbed into the $c_1$ and $c_2$ of the complementary function.

So, our particular solution is:

$y_p(x) = u_1(x) y_1(x) + u_2(x) y_2(x)$

$y_p(x) = y_1(x) \int \frac{-y_2(x) f(x)}{W(x)} dx + y_2(x) \int \frac{y_1(x) f(x)}{W(x)} dx$

And the **general solution** is then:

$y(x) = y_c(x) + y_p(x) = c_1 y_1(x) + c_2 y_2(x) + y_1(x) \int \frac{-y_2(x) f(x)}{W(x)} dx + y_2(x) \int \frac{y_1(x) f(x)}{W(x)} dx$

This formula, though looking complex, is a direct application of our derivations. It’s like a recipe: know your $y_1$, $y_2$, and $f(x)$, calculate the Wronskian, plug them into the integrals, and you’ve got your $y_p$.

### 5. Example: A Classic Scenario

Let's work through an example. Suppose we need to solve the non-homogeneous ODE:

$y'' + y = \sec(x)$

This is a second-order linear ODE with constant coefficients for the homogeneous part, but with a non-constant forcing function $f(x) = \sec(x)$.

**Step 1: Find the Complementary Solution ($y_c$)**

First, we solve the associated homogeneous equation: $y'' + y = 0$.
The characteristic equation is $r^2 + 1 = 0$, which gives $r = \pm i$.
The roots are complex, so the complementary solution is:
$y_c(x) = c_1 \cos(x) + c_2 \sin(x)$
From this, we identify our two linearly independent solutions:
$y_1(x) = \cos(x)$
$y_2(x) = \sin(x)$

**Step 2: Calculate the Wronskian ($W(x)$)**

We need the derivatives:
$y_1'(x) = -\sin(x)$
$y_2'(x) = \cos(x)$

Now, calculate the Wronskian:
$W(x) = y_1 y_2' - y_2 y_1' = (\cos(x))(\cos(x)) - (\sin(x))(-\sin(x))$
$W(x) = \cos^2(x) + \sin^2(x) = 1$
Aha! The Wronskian is a constant, $1$. This makes our calculations easier and confirms linear independence.

**Step 3: Find $u_1'(x)$ and $u_2'(x)$**

Our forcing function is $f(x) = \sec(x)$.
Using the formulas derived:

$u_1'(x) = \frac{-y_2(x) f(x)}{W(x)} = \frac{-\sin(x) \sec(x)}{1} = \frac{-\sin(x)}{\cos(x)} = -\tan(x)$

$u_2'(x) = \frac{y_1(x) f(x)}{W(x)} = \frac{\cos(x) \sec(x)}{1} = \frac{\cos(x)}{\cos(x)} = 1$

**Step 4: Integrate to Find $u_1(x)$ and $u_2(x)$**

Integrate $u_1'(x)$:
$u_1(x) = \int -\tan(x) dx = \int \frac{-\sin(x)}{\cos(x)} dx$
Let $v = \cos(x)$, then $dv = -\sin(x) dx$.
$u_1(x) = \int \frac{1}{v} dv = \ln|v| = \ln|\cos(x)|$
We can drop the absolute value if we consider intervals where $\cos(x) > 0$, or keep it. For simplicity in construction, let's write $u_1(x) = \ln(\cos(x))$ (assuming we are in an interval where $\cos(x) > 0$, e.g., $(-\pi/2, \pi/2)$).

Integrate $u_2'(x)$:
$u_2(x) = \int 1 dx = x$

**Step 5: Construct the Particular Solution ($y_p$)**

Now, plug $u_1(x)$ and $u_2(x)$ back into our proposed form for $y_p(x)$:
$y_p(x) = u_1(x) y_1(x) + u_2(x) y_2(x)$
$y_p(x) = (\ln|\cos(x)|) (\cos(x)) + (x) (\sin(x))$
$y_p(x) = \cos(x) \ln|\cos(x)| + x \sin(x)$

**Step 6: Write the General Solution**

The general solution is $y(x) = y_c(x) + y_p(x)$:
$y(x) = c_1 \cos(x) + c_2 \sin(x) + \cos(x) \ln|\cos(x)| + x \sin(x)$

This is our final answer! Notice how the $y_1$ and $y_2$ terms appear again in the particular solution, but this time multiplied by the integrated functions. This is characteristic of the method.

### 6. Important Considerations and Potential Pitfalls

*   **Linear Independence is Key:** If $y_1$ and $y_2$ are not linearly independent, their Wronskian $W(x)$ will be zero, and the method breaks down. You'll get division by zero, which is a clear sign something is wrong. Make sure you've correctly identified linearly independent solutions for the homogeneous part.
*   **Standard Form:** Ensure your ODE is in the standard form $y'' + P(x)y' + Q(x)y = f(x)$ before identifying $P(x)$, $Q(x)$, and $f(x)$. If you have a coefficient like $x^2 y'' + xy' + y = \sin(x)$, you must divide the entire equation by $x^2$ to get $y'' + \frac{1}{x}y' + \frac{1}{x^2}y = \frac{\sin(x)}{x^2}$ before applying the method.
*   **Integration:** The success of this method often hinges on your ability to perform the integrations for $u_1(x)$ and $u_2(x)$. Sometimes, these integrals can be quite challenging, and might require substitution, integration by parts, or even special functions. As seen in our example, integrating $\tan(x)$ is a standard calculus problem.
*   **The Forcing Function $f(x)$:** The nature of $f(x)$ will greatly influence the difficulty of the integration. Functions like $e^{ax}$, $\sin(bx)$, $\cos(bx)$, and polynomials often lead to manageable integrals.
*   **Textbook References:** Kreyszig's "Advanced Engineering Mathematics" (10th ed.) covers this topic thoroughly, often presenting the derivation and examples in a clear, structured manner. You'll find sections dedicated to variation of parameters which can serve as excellent supplementary reading. Bird's "Higher Engineering Mathematics" is also a great resource for step-by-step examples.

### 7. Connection to Course Outcomes

Let's explicitly link this back to our Course Outcomes:

*   **CO1: Solve systems of linear equations and diagonalize matrices.**
    As we saw, finding $u_1'$ and $u_2'$ involves solving a $2 \times 2$ system of linear equations. If the ODE was of a higher order, say third order, the system would be $3 \times 3$, and the concept of linear systems becomes even more prominent. While we haven't diagonalized matrices *in this section*, the underlying principle of solving linear systems is fundamental.

*   **CO2: Solve homogeneous and non-homogeneous linear differential equations with constant coefficients.**
    This entire module is dedicated to this! Variation of parameters is a primary method for the *non-homogeneous* part, building upon our knowledge of solving the *homogeneous* part. This is directly addressed here.

*   **CO3: Compute Laplace transform and apply it to solve ODEs arising in engineering.**
    While variation of parameters is an algebraic/calculus-based method, Laplace transforms offer an alternative approach to solving ODEs, particularly initial value problems. Both methods are powerful, and understanding when to use which is key. Variation of parameters might be preferred when the forcing function $f(x)$ is complicated or not easily handled by Laplace transforms (e.g., piecewise functions that aren't simple combinations of step functions).

*   **CO4: Determine the Taylor series and evaluate Fourier series expansion for different periodic functions.**
    This might seem disconnected, but think about the nature of $f(x)$. If $f(x)$ is periodic, we might express it using a Fourier series. The resulting ODE would then have terms like $\sin(nx)$ and $\cos(nx)$ as forcing functions, which are precisely the kinds of functions we can integrate using variation of parameters. So, understanding Fourier series helps us in formulating the ODEs that variation of parameters can solve.

### 8. Summary - Key Takeaways

*   **Goal:** To find a particular solution ($y_p$) for a non-homogeneous linear ODE, given the complementary solution ($y_c$).
*   **Method:** Replace constants $c_1, c_2$ in $y_c = c_1 y_1 + c_2 y_2$ with functions $u_1(x), u_2(x)$ to form $y_p = u_1 y_1 + u_2 y_2$.
*   **Key Step:** Derive and solve the system of equations for $u_1'$ and $u_2'$:
    *   $y_1 u_1' + y_2 u_2' = 0$
    *   $y_1' u_1' + y_2' u_2' = f(x)$ (after dividing ODE by leading coefficient)
*   **Wronskian:** The determinant of the coefficient matrix, $W(x) = y_1 y_2' - y_2 y_1'$, is crucial. It must be non-zero for linear independence.
*   **Integration:** $u_1(x) = \int \frac{-y_2 f}{W} dx$ and $u_2(x) = \int \frac{y_1 f}{W} dx$. Constants of integration can be set to zero for $y_p$.
*   **General Solution:** $y(x) = y_c(x) + y_p(x)$.

This method is a cornerstone in solving many ODEs encountered in science and engineering. Practice is key to mastering the integration steps and applying it efficiently!

---

### Sample Questions and Answers

**Q1. Conceptual Understanding:**
What is the fundamental idea behind the method of variation of parameters for solving second-order linear ODEs?

**Answer:**
The core idea is to start with the known general solution to the homogeneous equation, $y_c(x) = c_1 y_1(x) + c_2 y_2(x)$, and then "vary" the constants $c_1$ and $c_2$ by replacing them with unknown functions, $u_1(x)$ and $u_2(x)$. This modified form, $y_p(x) = u_1(x) y_1(x) + u_2(x) y_2(x)$, is then substituted back into the original non-homogeneous ODE. By imposing a condition to simplify the derivative calculations and using the fact that $y_1$ and $y_2$ satisfy the homogeneous equation, we derive a system of equations that allows us to solve for the derivatives of $u_1$ and $u_2$. Integrating these derivatives gives us $u_1(x)$ and $u_2(x)$, which then allow us to construct the particular solution $y_p(x)$.

**Q2. Application - Finding $y_p$**:
Consider the ODE $y'' - y = e^{2x}$.
(a) Find the complementary solution $y_c$.
(b) Calculate the Wronskian of the fundamental solutions found in (a).
(c) Use the method of variation of parameters to find a particular solution $y_p$.

**Solution:**
(a) The associated homogeneous equation is $y'' - y = 0$. The characteristic equation is $r^2 - 1 = 0$, which has roots $r = \pm 1$. Thus, the complementary solution is $y_c(x) = c_1 e^x + c_2 e^{-x}$.
Our fundamental solutions are $y_1(x) = e^x$ and $y_2(x) = e^{-x}$.

(b) We need the derivatives: $y_1'(x) = e^x$ and $y_2'(x) = -e^{-x}$.
The Wronskian is:
$W(x) = y_1 y_2' - y_2 y_1' = (e^x)(-e^{-x}) - (e^{-x})(e^x)$
$W(x) = -e^{x-x} - e^{-x+x} = -e^0 - e^0 = -1 - 1 = -2$.

(c) The ODE is already in standard form, so $f(x) = e^{2x}$.
We need to find $u_1'(x)$ and $u_2'(x)$:
$u_1'(x) = \frac{-y_2 f}{W} = \frac{-(e^{-x})(e^{2x})}{-2} = \frac{-e^x}{-2} = \frac{1}{2} e^x$
$u_2'(x) = \frac{y_1 f}{W} = \frac{(e^x)(e^{2x})}{-2} = \frac{e^{3x}}{-2} = -\frac{1}{2} e^{3x}$

Now, integrate to find $u_1(x)$ and $u_2(x)$ (setting constants of integration to zero):
$u_1(x) = \int \frac{1}{2} e^x dx = \frac{1}{2} e^x$
$u_2(x) = \int -\frac{1}{2} e^{3x} dx = -\frac{1}{2} \cdot \frac{1}{3} e^{3x} = -\frac{1}{6} e^{3x}$

Construct the particular solution:
$y_p(x) = u_1(x) y_1(x) + u_2(x) y_2(x)$
$y_p(x) = \left(\frac{1}{2} e^x\right)(e^x) + \left(-\frac{1}{6} e^{3x}\right)(e^{-x})$
$y_p(x) = \frac{1}{2} e^{2x} - \frac{1}{6} e^{2x}$
$y_p(x) = \left(\frac{1}{2} - \frac{1}{6}\right) e^{2x} = \left(\frac{3}{6} - \frac{1}{6}\right) e^{2x} = \frac{2}{6} e^{2x} = \frac{1}{3} e^{2x}$

So, a particular solution is $y_p(x) = \frac{1}{3} e^{2x}$.

**Q3. Pitfall Identification:**
For the ODE $2y'' + y' - y = \sin(x)$, if you were to directly apply the variation of parameters formulas derived for $y'' + P(x)y' + Q(x)y = f(x)$, what would be the incorrect $f(x)$ and why? How should it be corrected?

**Answer:**
The formulas derived for $u_1'$ and $u_2'$ assume the ODE is in the standard form $y'' + P(x)y' + Q(x)y = f(x)$, where the coefficient of $y''$ is 1. In the given ODE, $2y'' + y' - y = \sin(x)$, the coefficient of $y''$ is 2. If we directly use $f(x) = \sin(x)$ without modification, our derived formulas for $u_1'$ and $u_2'$ will be incorrect.

**Correction:**
To correct this, we must first divide the entire ODE by the leading coefficient (2) to bring it into standard form:
$\frac{2y''}{2} + \frac{y'}{2} - \frac{y}{2} = \frac{\sin(x)}{2}$
$y'' + \frac{1}{2}y' - \frac{1}{2}y = \frac{1}{2}\sin(x)$
Now, the correct forcing function to use in the variation of parameters formulas is $f(x) = \frac{1}{2}\sin(x)$. This ensures that the derivation based on $y_1'' + P y_1' + Q y_1 = 0$ and the resulting system for $u_1'$ and $u_2'$ are consistent with the actual ODE.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=XZo4xyJXC2k) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=7UJ4CFR1894) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=S0hG_mS9bV4) |
