---
title: "Solution of Initial value problems by Laplace transform (Second order linear ODE with constant coefficients with initial conditions at t=0 only)"
subject: "MATHEMATICS FOR ELECTRICAL SCIENCE AND PHYSICAL 
SCIENCE - 1"
module: "Module 3: Laplace Transform"
branch: "Electronics and Communication Engineering"
semester: 1
topicId: "68b7dc8f20463779487d9fc9"
status: "completed"
scrapedAt: "2026-05-23T17:35:04.067Z"
---
# Module 3: Laplace Transform

## Topic: Solution of Initial Value Problems by Laplace Transform (Second Order Linear ODE with Constant Coefficients with Initial Conditions at t=0 Only)

Welcome, everyone! Today, we're diving into a really powerful application of the Laplace transform – solving ordinary differential equations (ODEs). Specifically, we'll focus on second-order linear ODEs with constant coefficients, and we'll be dealing with initial conditions given at $t=0$. This is a cornerstone technique in electrical science and physical science, as many systems in these fields are modeled by such equations. Think about circuits with inductors and capacitors, or mechanical systems like mass-spring-damper systems. The Laplace transform provides an elegant way to bypass the more tedious methods of solving these equations directly.

Our journey today is guided by the learning outcomes for this topic. By the end of our session, you should be comfortable using the Laplace transform to tackle these ODEs. This directly ties into **Course Outcome 3 (CO3): Compute Laplace transform and apply it to solve ODEs arising in engineering.** We'll see how the transform converts a differential equation into an algebraic equation, which is significantly easier to solve.

### 1. Revisiting the Laplace Transform and its Properties

Before we jump into solving ODEs, let's quickly refresh our understanding of the Laplace transform itself. Remember, the Laplace transform of a function $f(t)$, denoted by $\mathcal{L}\{f(t)\}$ or $F(s)$, is defined as:

$$
\mathcal{L}\{f(t)\} = F(s) = \int_0^\infty e^{-st} f(t) dt
$$

where $s$ is a complex variable. The key idea is that this integral, if it converges, transforms a function of time, $f(t)$, into a function of a complex frequency, $F(s)$. This transformation is incredibly useful because it often simplifies operations.

What operations do we mean? Well, differentiation in the time domain becomes multiplication by $s$ in the frequency domain. This is the magic that makes solving ODEs so much easier. Let's look at the transforms of derivatives:

*   **First Derivative:** $\mathcal{L}\{f'(t)\} = sF(s) - f(0)$
*   **Second Derivative:** $\mathcal{L}\{f''(t)\} = s^2F(s) - sf(0) - f'(0)$

Notice the initial conditions, $f(0)$ and $f'(0)$, appearing directly in these formulas. This is precisely why the Laplace transform is so adept at handling initial value problems. It builds the initial state of the system right into the transformed equation. These formulas, crucial for our task, are thoroughly discussed in standard texts like Kreyszig's "Advanced Engineering Mathematics" and are fundamental to understanding this method.

### 2. The Strategy: Transforming the ODE

Our goal is to solve a second-order linear ODE with constant coefficients, which typically looks like this:

$$
ay''(t) + by'(t) + cy(t) = r(t)
$$

where $a, b, c$ are constants, and $r(t)$ is a known forcing function. We are given initial conditions at $t=0$, say $y(0) = y_0$ and $y'(0) = y'_0$.

Here's the game plan:

1.  **Take the Laplace Transform of the entire ODE:** We apply the Laplace transform operator $\mathcal{L}\{\cdot\}$ to both sides of the equation.
2.  **Use linearity and derivative properties:** We use the linearity property ($\mathcal{L}\{af(t) + bg(t)\} = a\mathcal{L}\{f(t)\} + b\mathcal{L}\{g(t)\}$) and the derivative transform properties to convert the differential equation in $y(t)$ into an algebraic equation in $Y(s) = \mathcal{L}\{y(t)\}$.
3.  **Substitute initial conditions:** The initial conditions $y(0)$ and $y'(0)$ are directly plugged into the transformed equation.
4.  **Solve for Y(s):** This algebraic equation can now be rearranged to solve for $Y(s)$.
5.  **Find the Inverse Laplace Transform:** Once we have $Y(s)$, we use inverse Laplace transform techniques to find $y(t)$, which is our solution.

This process essentially shifts the problem from the time domain to the $s$-domain, solves it algebraically, and then shifts back to find the time-domain solution. It’s like translating a difficult problem into an easier language, solving it, and then translating the answer back!

### 3. Step-by-Step Application with an Example

Let's walk through an example. Imagine a simple RLC circuit. The voltage across a capacitor might be modeled by an ODE like this:

$$
y''(t) + 5y'(t) + 6y(t) = 10e^{-t}
$$

with initial conditions $y(0) = 1$ and $y'(0) = 0$. Here, $y(t)$ could represent the voltage across the capacitor, and $r(t) = 10e^{-t}$ is the input voltage.

**Step 1: Take the Laplace Transform of the ODE**

Applying the Laplace transform to each term:

$$
\mathcal{L}\{y''(t) + 5y'(t) + 6y(t)\} = \mathcal{L}\{10e^{-t}\}
$$

Using the linearity property:

$$
\mathcal{L}\{y''(t)\} + 5\mathcal{L}\{y'(t)\} + 6\mathcal{L}\{y(t)\} = 10\mathcal{L}\{e^{-t}\}
$$

**Step 2: Use Derivative and Function Transform Properties**

Now, we use our key formulas:
*   $\mathcal{L}\{y''(t)\} = s^2Y(s) - sy(0) - y'(0)$
*   $\mathcal{L}\{y'(t)\} = sY(s) - y(0)$
*   $\mathcal{L}\{y(t)\} = Y(s)$
*   $\mathcal{L}\{e^{-at}\} = \frac{1}{s+a}$, so $\mathcal{L}\{e^{-t}\} = \frac{1}{s+1}$

Substituting these into the transformed equation:

$$
[s^2Y(s) - sy(0) - y'(0)] + 5[sY(s) - y(0)] + 6Y(s) = 10 \left(\frac{1}{s+1}\right)
$$

**Step 3: Substitute Initial Conditions**

We are given $y(0) = 1$ and $y'(0) = 0$. Let's plug these in:

$$
[s^2Y(s) - s(1) - 0] + 5[sY(s) - 1] + 6Y(s) = \frac{10}{s+1}
$$

This simplifies to:

$$
s^2Y(s) - s + 5sY(s) - 5 + 6Y(s) = \frac{10}{s+1}
$$

**Step 4: Solve for Y(s)**

Now, we gather all the $Y(s)$ terms on one side and everything else on the other:

$$
Y(s)(s^2 + 5s + 6) - s - 5 = \frac{10}{s+1}
$$

$$
Y(s)(s^2 + 5s + 6) = s + 5 + \frac{10}{s+1}
$$

To combine the terms on the right side, we find a common denominator:

$$
Y(s)(s^2 + 5s + 6) = \frac{(s+5)(s+1) + 10}{s+1}
$$

$$
Y(s)(s^2 + 5s + 6) = \frac{s^2 + 6s + 5 + 10}{s+1}
$$

$$
Y(s)(s^2 + 5s + 6) = \frac{s^2 + 6s + 15}{s+1}
$$

Now, we isolate $Y(s)$:

$$
Y(s) = \frac{s^2 + 6s + 15}{(s+1)(s^2 + 5s + 6)}
$$

We can factor the quadratic term in the denominator: $s^2 + 5s + 6 = (s+2)(s+3)$. So,

$$
Y(s) = \frac{s^2 + 6s + 15}{(s+1)(s+2)(s+3)}
$$

Ah, this is where the algebra comes in, and a common technique here is **partial fraction decomposition**. This is a skill we'll rely on heavily.

**Step 5: Find the Inverse Laplace Transform (using Partial Fractions)**

We want to express $Y(s)$ in a form where we can readily find the inverse Laplace transform of each term. We assume:

$$
\frac{s^2 + 6s + 15}{(s+1)(s+2)(s+3)} = \frac{A}{s+1} + \frac{B}{s+2} + \frac{C}{s+3}
$$

To find $A$, $B$, and $C$, we can use the cover-up method (or other methods like equating coefficients).

*   **For A (cover-up s+1):**
    $A = \left. \frac{s^2 + 6s + 15}{(s+2)(s+3)} \right|_{s=-1} = \frac{(-1)^2 + 6(-1) + 15}{(-1+2)(-1+3)} = \frac{1 - 6 + 15}{(1)(2)} = \frac{10}{2} = 5$

*   **For B (cover-up s+2):**
    $B = \left. \frac{s^2 + 6s + 15}{(s+1)(s+3)} \right|_{s=-2} = \frac{(-2)^2 + 6(-2) + 15}{(-2+1)(-2+3)} = \frac{4 - 12 + 15}{(-1)(1)} = \frac{7}{-1} = -7$

*   **For C (cover-up s+3):**
    $C = \left. \frac{s^2 + 6s + 15}{(s+1)(s+2)} \right|_{s=-3} = \frac{(-3)^2 + 6(-3) + 15}{(-3+1)(-3+2)} = \frac{9 - 18 + 15}{(-2)(-1)} = \frac{6}{2} = 3$

So, we have:

$$
Y(s) = \frac{5}{s+1} - \frac{7}{s+2} + \frac{3}{s+3}
$$

Now, we take the inverse Laplace transform of each term using the property $\mathcal{L}^{-1}\left\{\frac{1}{s-a}\right\} = e^{at}$:

*   $\mathcal{L}^{-1}\left\{\frac{5}{s+1}\right\} = 5e^{-t}$
*   $\mathcal{L}^{-1}\left\{\frac{-7}{s+2}\right\} = -7e^{-2t}$
*   $\mathcal{L}^{-1}\left\{\frac{3}{s+3}\right\} = 3e^{-3t}$

Therefore, the solution is:

$$
y(t) = 5e^{-t} - 7e^{-2t} + 3e^{-3t}
$$

And there we have it! We've transformed the differential equation into an algebraic problem, solved for $Y(s)$, and then transformed back to find the solution $y(t)$. This is a beautiful illustration of how the Laplace transform simplifies differential equation solving. This method is extensively covered with various techniques in Kreyszig's Chapter 6, focusing on integral transforms.

### 4. Handling Repeated Roots and More Complex Forms

What if the denominator of $Y(s)$ has repeated roots? For example, if we had $(s+a)^2$ in the denominator. The partial fraction decomposition would then involve terms like $\frac{D}{s+a}$ and $\frac{E}{(s+a)^2}$.

*   We know $\mathcal{L}^{-1}\left\{\frac{1}{s+a}\right\} = e^{-at}$.
*   For $\frac{1}{(s+a)^2}$, we use the property $\mathcal{L}\{t e^{at}\} = \frac{1}{(s-a)^2}$. So, $\mathcal{L}^{-1}\left\{\frac{1}{(s+a)^2}\right\} = t e^{-at}$.

These are standard forms you'll find in Laplace transform tables, like those provided in Bird's "Higher Engineering Mathematics" or Ramana's "Higher Engineering Mathematics." Knowing these standard pairs is absolutely crucial for exam success.

What about terms that don't directly match our basic forms, like $\frac{s}{s^2 + \omega^2}$ or $\frac{\omega}{s^2 + \omega^2}$? These correspond to sine and cosine functions:

*   $\mathcal{L}\{\cos(\omega t)\} = \frac{s}{s^2 + \omega^2}$
*   $\mathcal{L}\{\sin(\omega t)\} = \frac{\omega}{s^2 + \omega^2}$

So, $\mathcal{L}^{-1}\left\{\frac{s}{s^2 + \omega^2}\right\} = \cos(\omega t)$ and $\mathcal{L}^{-1}\left\{\frac{\omega}{s^2 + \omega^2}\right\} = \sin(\omega t)$.

Sometimes, the denominator might be an irreducible quadratic, like $s^2 + 2s + 5$. To handle this, we complete the square: $s^2 + 2s + 5 = (s^2 + 2s + 1) + 4 = (s+1)^2 + 2^2$. This form is related to the shifted sine and cosine transforms:

*   $\mathcal{L}\{e^{at}\cos(\omega t)\} = \frac{s-a}{(s-a)^2 + \omega^2}$
*   $\mathcal{L}\{e^{at}\sin(\omega t)\} = \frac{\omega}{(s-a)^2 + \omega^2}$

For our example $(s+1)^2 + 2^2$:
*   If we have $\frac{s+1}{(s+1)^2 + 2^2}$, its inverse transform is $e^{-t}\cos(2t)$.
*   If we have $\frac{2}{(s+1)^2 + 2^2}$, its inverse transform is $e^{-t}\sin(2t)$.

If the numerator doesn't match perfectly, we can often adjust it by multiplying and dividing by the required constant (like the $\omega$ for the sine transform).

### 5. Connection to Course Outcomes

Let's briefly tie this back to our course objectives:

*   **CO2: Solve homogeneous and non-homogeneous linear differential equation with constant coefficients.** Our entire discussion today is about solving these types of equations. The Laplace transform is a direct method for achieving this.
*   **CO3: Compute Laplace transform and apply it to solve ODEs arising in engineering.** We've seen the computation of transforms for derivatives and basic functions, and then their application to solve the ODE. This is precisely what CO3 demands.

This method is also a gateway to understanding system responses in engineering. The $Y(s)$ we derive often represents the system's output in the frequency domain, and its poles (the roots of the denominator) tell us a lot about the system's stability and behavior. This is a crucial concept in "Signals and Systems" by Haykin and Van Veen.

### 6. Common Pitfalls and Exam Tips

*   **Algebraic Errors:** Partial fraction decomposition and solving for $Y(s)$ can be prone to algebraic mistakes. Double-check your calculations, especially when finding the coefficients $A, B, C$.
*   **Incorrect Transform Formulas:** Ensure you have the correct Laplace transforms for derivatives and common functions. A small error here can derail the entire solution.
*   **Forgetting Initial Conditions:** The initial conditions are integrated into the derivative transforms. If you miss them, your solution will be incorrect.
*   **Inverse Transform Matching:** Be careful when matching the terms in $Y(s)$ to inverse transform pairs. Completing the square or adjusting numerators is often necessary.

**Quick Recall Tip:** For a second-order ODE $ay'' + by' + cy = r(t)$ with $y(0)=y_0, y'(0)=y'_0$:
The transformed equation will look something like $a[s^2Y(s) - sy_0 - y'_0] + b[sY(s) - y_0] + cY(s) = R(s)$.
Then, $Y(s) = \frac{R(s) + a(sy_0 + y'_0) + by_0}{as^2 + bs + c}$. The denominator $as^2 + bs + c$ is the characteristic polynomial of the homogeneous equation, which is a key link to our previous methods of solving ODEs.

### Sample Questions and Answers

Here are a few practice questions to solidify your understanding:

**Question 1 (Conceptual):** Why is the Laplace transform particularly well-suited for solving linear ODEs with constant coefficients and initial conditions at $t=0$?

**Answer:** The Laplace transform converts differentiation with respect to $t$ into multiplication by $s$ in the $s$-domain. Crucially, the transforms of the derivatives ($\mathcal{L}\{y'(t)\} = sY(s) - y(0)$ and $\mathcal{L}\{y''(t)\} = s^2Y(s) - sy(0) - y'(0)$) explicitly incorporate the initial conditions ($y(0)$ and $y'(0)$). This transforms the ODE into an algebraic equation in $Y(s)$, which is much simpler to solve. Once $Y(s)$ is found, the inverse Laplace transform yields the solution $y(t)$ that satisfies these initial conditions. This aligns with CO3.

**Question 2 (Exam-Oriented):** Solve the following initial value problem using the Laplace transform:
$y''(t) - y'(t) - 2y(t) = \sin(t)$, with $y(0) = 1$ and $y'(0) = 0$.

**Answer:**
The ODE is $y''(t) - y'(t) - 2y(t) = \sin(t)$.
Initial conditions: $y(0) = 1$, $y'(0) = 0$.

1.  **Transform the ODE:**
    $\mathcal{L}\{y''(t)\} - \mathcal{L}\{y'(t)\} - 2\mathcal{L}\{y(t)\} = \mathcal{L}\{\sin(t)\}$
    Using the derivative properties and $\mathcal{L}\{\sin(t)\} = \frac{1}{s^2+1}$:
    $[s^2Y(s) - sy(0) - y'(0)] - [sY(s) - y(0)] - 2Y(s) = \frac{1}{s^2+1}$

2.  **Substitute initial conditions:**
    $[s^2Y(s) - s(1) - 0] - [sY(s) - 1] - 2Y(s) = \frac{1}{s^2+1}$
    $s^2Y(s) - s - sY(s) + 1 - 2Y(s) = \frac{1}{s^2+1}$

3.  **Solve for Y(s):**
    $Y(s)(s^2 - s - 2) - s + 1 = \frac{1}{s^2+1}$
    $Y(s)(s-2)(s+1) = s - 1 + \frac{1}{s^2+1}$
    $Y(s)(s-2)(s+1) = \frac{(s-1)(s^2+1) + 1}{s^2+1}$
    $Y(s)(s-2)(s+1) = \frac{s^3 - s^2 + s - 1 + 1}{s^2+1}$
    $Y(s)(s-2)(s+1) = \frac{s^3 - s^2 + s}{s^2+1}$
    $Y(s) = \frac{s(s^2 - s + 1)}{(s^2+1)(s-2)(s+1)}$

4.  **Partial Fraction Decomposition:**
    $\frac{s(s^2 - s + 1)}{(s^2+1)(s-2)(s+1)} = \frac{A}{s-2} + \frac{B}{s+1} + \frac{Cs + D}{s^2+1}$

    Using the cover-up method for A and B:
    $A = \left. \frac{s(s^2 - s + 1)}{(s^2+1)(s+1)} \right|_{s=2} = \frac{2(4-2+1)}{(4+1)(2+1)} = \frac{2(3)}{(5)(3)} = \frac{6}{15} = \frac{2}{5}$
    $B = \left. \frac{s(s^2 - s + 1)}{(s^2+1)(s-2)} \right|_{s=-1} = \frac{-1(1 - (-1) + 1)}{(1+1)(-1-2)} = \frac{-1(3)}{(2)(-3)} = \frac{-3}{-6} = \frac{1}{2}$

    Now, substitute A and B back and find Cs + D:
    $\frac{s^3 - s^2 + s}{(s^2+1)(s-2)(s+1)} = \frac{2/5}{s-2} + \frac{1/2}{s+1} + \frac{Cs + D}{s^2+1}$
    $\frac{s^3 - s^2 + s}{(s^2+1)(s^2-s-2)} = \frac{2}{5(s-2)} + \frac{1}{2(s+1)} + \frac{Cs + D}{s^2+1}$
    $\frac{s^3 - s^2 + s}{(s^2+1)(s^2-s-2)} = \frac{\frac{1}{10}(2s+1) + \frac{1}{2(s+1)} + \frac{Cs+D}{s^2+1} \text{ wait, this is not the right way to combine.} }{ (s^2+1)(s-2)(s+1)}$
    Let's use a common denominator on the right side:
    $\frac{2}{5}(s+1)(s^2+1) + \frac{1}{2}(s-2)(s^2+1) + (Cs+D)(s-2)(s+1)$
    $=(s^2+1)(s^2-s-2) \times Y(s)$
    The numerator of Y(s) is $s(s^2 - s + 1) = s^3 - s^2 + s$.
    So, $s^3 - s^2 + s = \frac{2}{5}(s+1)(s^2+1) + \frac{1}{2}(s-2)(s^2+1) + (Cs+D)(s^2-s-2)$
    $s^3 - s^2 + s = \frac{2}{5}(s^3+s+s^2+1) + \frac{1}{2}(s^3+s-2s^2-2) + (Cs+D)(s^2-s-2)$
    $s^3 - s^2 + s = \frac{2}{5}s^3 + \frac{2}{5}s^2 + \frac{2}{5}s + \frac{2}{5} + \frac{1}{2}s^3 - s^2 + \frac{1}{2}s - 1 + C s^3 - Cs^2 - 2Cs + Ds^2 - Ds - 2D$

    Group coefficients of powers of s:
    $s^3: 1 = \frac{2}{5} + \frac{1}{2} + C \implies 1 = \frac{4+5}{10} + C \implies 1 = \frac{9}{10} + C \implies C = 1 - \frac{9}{10} = \frac{1}{10}$

    $s^2: -1 = \frac{2}{5} - 1 + (-C+D) \implies -1 = -\frac{3}{5} - \frac{1}{10} + D \implies -1 = -\frac{6}{10} - \frac{1}{10} + D \implies -1 = -\frac{7}{10} + D \implies D = -1 + \frac{7}{10} = -\frac{3}{10}$

    So, $Y(s) = \frac{2/5}{s-2} + \frac{1/2}{s+1} + \frac{\frac{1}{10}s - \frac{3}{10}}{s^2+1}$

5.  **Inverse Laplace Transform:**
    $y(t) = \frac{2}{5}e^{2t} + \frac{1}{2}e^{-t} + \mathcal{L}^{-1}\left\{\frac{1}{10}\frac{s}{s^2+1}\right\} - \mathcal{L}^{-1}\left\{\frac{3}{10}\frac{1}{s^2+1}\right\}$
    $y(t) = \frac{2}{5}e^{2t} + \frac{1}{2}e^{-t} + \frac{1}{10}\cos(t) - \frac{3}{10}\sin(t)$

This problem showcases the need for careful algebraic manipulation and handling of different types of terms in partial fraction decomposition, directly addressing CO3.

This concludes our overview of solving second-order linear ODEs with constant coefficients using the Laplace transform. Keep practicing, and you'll find this a remarkably efficient tool in your mathematical arsenal!

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=p_di4ateumM) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=Kb3K1Ui4454) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=S0hG_mS9bV4) |
