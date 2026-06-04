---
title: "Solution of Initial value problems by Laplace transform (Second order linear ODE with constant coefficients with initial conditions at t=0 only)"
subject: "MATHEMATICS FOR ELECTRICAL SCIENCE AND 
PHYSICAL  SCIENCE - 1"
module: "Module 3: Laplace Transform"
branch: "Mechanical Engineering"
semester: 1
topicId: "68bd1edefeb4799d95e83559"
status: "completed"
scrapedAt: "2026-05-20T17:39:31.653Z"
---
# Mathematics for Electrical Science and Physical Science - 1
## Module 3: Laplace Transform

### Topic: Solution of Initial Value Problems by Laplace Transform

**(Second-Order Linear ODEs with Constant Coefficients and Initial Conditions at t=0 only)**

Welcome, everyone! Today, we're going to dive into a truly powerful tool in our mathematical arsenal: the **Laplace Transform**. We've already seen how it can simplify complex functions, and now, we're going to see how it can solve something that engineers and physicists encounter all the time: **differential equations**. Specifically, we'll focus on solving second-order linear ordinary differential equations (ODEs) with constant coefficients, given initial conditions at $t=0$. This is a cornerstone technique, directly addressing **Course Outcome 3 (CO3)**: "Compute Laplace transform and apply it to solve ODEs arising in engineering." You'll see how this method can make seemingly daunting problems much more manageable.

Think of it like this: imagine you have a complex circuit with resistors, capacitors, and inductors, and you want to know how the voltage or current changes over time. This behavior is often described by a differential equation. Trying to solve it directly can be a tangled mess. The Laplace Transform acts like a "translator," converting that differential equation from the "time domain" (where things change with time, $t$) into the "frequency domain" (a different mathematical space, often denoted by $s$). In this frequency domain, the differential equation magically becomes an algebraic equation, which we know how to solve! Once we have the solution in the frequency domain, we use another powerful tool, the **inverse Laplace Transform**, to translate it back into the time domain, giving us the actual behavior of our system.

#### Why Laplace Transform for ODEs?

The real magic of the Laplace Transform in solving ODEs lies in how it handles derivatives. Recall the fundamental properties of the Laplace Transform that we've studied. The key is its linearity and, more importantly, how it transforms derivatives. Let $y(t)$ be a function of time, and let $L\{y(t)\}$ or $Y(s)$ denote its Laplace Transform.

Remember these crucial transform properties of derivatives?
*   $L\{y'(t)\} = sY(s) - y(0)$
*   $L\{y''(t)\} = s^2Y(s) - sy(0) - y'(0)$

Do you see what's happening here? The transform of a derivative involves the original function's transform $Y(s)$ and the initial values of the function and its derivatives at $t=0$, namely $y(0)$ and $y'(0)$. This is precisely why the Laplace Transform is so effective for initial value problems. It directly incorporates the initial conditions into the transformed equation. This is a direct link to **CO3**, as it shows how the transform method naturally handles the "initial state" of a system.

#### Setting Up the Problem: A Second-Order Linear ODE

We're going to tackle a typical ODE of the form:
$ay''(t) + by'(t) + cy(t) = f(t)$

Here:
*   $y(t)$ is the unknown function we want to find (e.g., voltage, position, etc.).
*   $y'(t)$ and $y''(t)$ are its first and second derivatives with respect to $t$.
*   $a$, $b$, and $c$ are **constant coefficients**. This is a critical simplification. If these were functions of $t$, the Laplace Transform method wouldn't be as straightforward, and we'd often have to resort to other techniques like series solutions.
*   $f(t)$ is the **forcing function** or input to our system. This could be a voltage source, a force applied, etc.

We'll also be given **initial conditions** at $t=0$:
*   $y(0) = y_0$
*   $y'(0) = v_0$

These initial conditions tell us the state of the system at the very beginning, at $t=0$. For instance, in an electrical circuit, $y(0)$ might be the initial voltage across a capacitor, and $y'(0)$ could relate to the initial current or rate of change of current.

#### The Strategy: A Step-by-Step Transformation

Our approach, using the Laplace Transform, is beautifully systematic. Let's break it down:

**Step 1: Transform the entire ODE.**
We apply the Laplace Transform operator, $L\{\cdot\}$, to both sides of the ODE:
$L\{ay''(t) + by'(t) + cy(t)\} = L\{f(t)\}$

Due to the linearity of the Laplace Transform ($L\{Af(t) + Bg(t)\} = AL\{f(t)\} + BL\{g(t)\}$), we can rewrite this as:
$aL\{y''(t)\} + bL\{y'(t)\} + cL\{y(t)\} = L\{f(t)\}$

**Step 2: Substitute the derivative properties.**
Now, we substitute the transforms of the derivatives we recalled earlier:
$a[sY(s) - sy(0) - y'(0)] + b[sY(s) - y(0)] + cY(s) = F(s)$

where $Y(s) = L\{y(t)\}$ and $F(s) = L\{f(t)\}$.

**Step 3: Plug in the initial conditions.**
This is where our specific initial values $y(0) = y_0$ and $y'(0) = v_0$ come into play. We substitute them into the transformed equation:
$a[sY(s) - sy_0 - v_0] + b[sY(s) - y_0] + cY(s) = F(s)$

**Step 4: Solve for $Y(s)$.**
The beauty of this step is that our original differential equation has now become an *algebraic* equation for $Y(s)$. We just need to rearrange it to isolate $Y(s)$. Let's group terms involving $Y(s)$:
$(as^2 + bs + c)Y(s) - asy_0 - av_0 - by_0 = F(s)$

Now, move the terms not containing $Y(s)$ to the right side:
$(as^2 + bs + c)Y(s) = F(s) + asy_0 + av_0 + by_0$

And finally, solve for $Y(s)$:
$Y(s) = \frac{F(s) + asy_0 + av_0 + by_0}{as^2 + bs + c}$

The denominator, $as^2 + bs + c$, is sometimes called the **characteristic polynomial** of the ODE. Notice how the initial conditions ($y_0$ and $v_0$) directly appear in the numerator! This is a huge advantage.

**Step 5: Find the inverse Laplace Transform.**
This is often the trickiest part. We have our solution $Y(s)$ in the frequency domain. Now we need to use our knowledge of inverse Laplace Transforms to convert it back to the time domain, $y(t)$.
$y(t) = L^{-1}\{Y(s)\}$

This step typically involves techniques like:
*   **Partial Fraction Decomposition:** This is essential for breaking down complex rational functions of $s$ into simpler forms whose inverse transforms we know. Kreyszig's "Advanced Engineering Mathematics" (Chapter 6) and Bird's "Higher Engineering Mathematics" (Chapter 12) are excellent resources for mastering partial fraction techniques.
*   **Using Laplace Transform Tables:** We'll refer to standard tables of Laplace Transforms and their inverses. You must become very familiar with these!
*   **Properties of Inverse Laplace Transforms:** Linearity, time shifting, frequency shifting, etc., are all useful here.

#### An Illustrative Example: Spring-Mass System

Let's consider a physical example. Imagine a simple spring-mass system. A mass $m$ is attached to a spring with spring constant $k$. It's displaced from its equilibrium position and released. This system's motion is described by the second-order ODE:
$my''(t) + ky(t) = 0$
where $y(t)$ is the displacement of the mass from equilibrium.

Let's say $m = 1$ kg, $k = 4$ N/m. So the ODE becomes:
$y''(t) + 4y(t) = 0$

And the initial conditions are:
*   $y(0) = 1$ m (initial displacement)
*   $y'(0) = 0$ m/s (released from rest)

This is a classic scenario, perfectly suited for the Laplace Transform method.

**Let's solve it step-by-step:**

**Step 1: Transform the ODE.**
$L\{y''(t) + 4y(t)\} = L\{0\}$
$L\{y''(t)\} + 4L\{y(t)\} = 0$

**Step 2: Substitute derivative properties.**
Let $Y(s) = L\{y(t)\}$.
$[sY(s) - sy(0) - y'(0)] + 4Y(s) = 0$

**Step 3: Plug in initial conditions.**
$y(0) = 1$, $y'(0) = 0$.
$[sY(s) - s(1) - 0] + 4Y(s) = 0$
$sY(s) - s + 4Y(s) = 0$

**Step 4: Solve for $Y(s)$.**
Group terms with $Y(s)$:
$(s + 4)Y(s) - s = 0$
$(s + 4)Y(s) = s$
$Y(s) = \frac{s}{s+4}$

Look at that! We've transformed the differential equation into a simple algebraic expression for $Y(s)$. This is much easier to handle.

**Step 5: Find the inverse Laplace Transform.**
We need to find $y(t) = L^{-1}\{ \frac{s}{s+4} \}$.

This form $\frac{s}{s+4}$ isn't directly in our standard Laplace transform tables. We need to manipulate it. A common trick is to add and subtract 4 in the numerator to match the denominator:
$Y(s) = \frac{s+4 - 4}{s+4} = \frac{s+4}{s+4} - \frac{4}{s+4} = 1 - \frac{4}{s+4}$

Now, we can use our known inverse transforms:
*   $L^{-1}\{1\} = \delta(t)$ (the Dirac delta function - might be an advanced topic depending on your syllabus, but it's the transform of 1)
*   $L^{-1}\{\frac{1}{s+a}\} = e^{-at}$

So, we have:
$y(t) = L^{-1}\{1\} - 4L^{-1}\{\frac{1}{s+4}\}$

Aha! If the input $f(t)$ was a step function or something else, we might get $\delta(t)$ terms. However, in this specific $y''(t) + 4y(t) = 0$ example, with $f(t)=0$ and $y(0)=1, y'(0)=0$, we expect a sinusoidal response. Let's re-evaluate $Y(s)$ carefully.

Ah, I made a slight oversight in the initial setup of $Y(s)$ for this specific ODE. Let's revisit Step 2 carefully for $y''(t) + 4y(t) = 0$.
$L\{y''(t)\} = s^2Y(s) - sy(0) - y'(0)$
$L\{4y(t)\} = 4Y(s)$

So, $L\{y''(t) + 4y(t)\} = [s^2Y(s) - sy(0) - y'(0)] + 4Y(s) = 0$.
Substituting initial conditions $y(0)=1, y'(0)=0$:
$s^2Y(s) - s(1) - 0 + 4Y(s) = 0$
$s^2Y(s) - s + 4Y(s) = 0$

Now, solve for $Y(s)$:
$(s^2 + 4)Y(s) = s$
$Y(s) = \frac{s}{s^2 + 4}$

This is a much better form! Now, let's find the inverse Laplace transform. Do you recognize this from our tables?
Recall that $L\{\cos(at)\} = \frac{s}{s^2 + a^2}$.
In our case, $a^2 = 4$, so $a = 2$.

Therefore, $y(t) = L^{-1}\{\frac{s}{s^2 + 4}\} = \cos(2t)$.

So, the displacement of the mass is $y(t) = \cos(2t)$. This makes physical sense! An undamped spring-mass system with no initial velocity and a unit displacement should oscillate sinusoidally.

**Common Pitfall Alert!** Be very careful when substituting the initial conditions. The terms $sy(0)$ and $y'(0)$ can sometimes be missed or misplaced, leading to an incorrect $Y(s)$. Always double-check this step.

#### Example with a Forcing Function

Let's add a forcing function to our spring-mass system. Suppose we have:
$y''(t) + 4y(t) = \sin(t)$
With initial conditions $y(0) = 0$ and $y'(0) = 0$.

**Step 1: Transform the ODE.**
$L\{y''(t) + 4y(t)\} = L\{\sin(t)\}$
$L\{y''(t)\} + 4L\{y(t)\} = L\{\sin(t)\}$

**Step 2: Substitute derivative properties.**
$[sY(s) - sy(0) - y'(0)] + 4Y(s) = L\{\sin(t)\}$

**Step 3: Plug in initial conditions.**
$y(0) = 0$, $y'(0) = 0$.
$[sY(s) - s(0) - 0] + 4Y(s) = L\{\sin(t)\}$
$sY(s) + 4Y(s) = L\{\sin(t)\}$

**Step 4: Solve for $Y(s)$.**
We know that $L\{\sin(at)\} = \frac{a}{s^2 + a^2}$. So, $L\{\sin(t)\} = \frac{1}{s^2 + 1}$.
$(s^2 + 4)Y(s) = \frac{1}{s^2 + 1}$
$Y(s) = \frac{1}{(s^2 + 1)(s^2 + 4)}$

Now we have $Y(s)$ as a rational function. This is where **partial fraction decomposition** comes in. Since the denominator has quadratic factors that don't factor further over real numbers, we'll use the form:
$\frac{1}{(s^2 + 1)(s^2 + 4)} = \frac{As + B}{s^2 + 1} + \frac{Cs + D}{s^2 + 4}$

Multiplying both sides by $(s^2 + 1)(s^2 + 4)$:
$1 = (As + B)(s^2 + 4) + (Cs + D)(s^2 + 1)$
$1 = As^3 + 4As + Bs^2 + 4B + Cs^3 + Cs + Ds^2 + D$
$1 = (A+C)s^3 + (B+D)s^2 + (4A+C)s + (4B+D)$

Equating coefficients of powers of $s$:
*   $s^3$: $A + C = 0 \implies C = -A$
*   $s^2$: $B + D = 0 \implies D = -B$
*   $s^1$: $4A + C = 0 \implies 4A - A = 0 \implies 3A = 0 \implies A = 0$
*   $s^0$: $4B + D = 1 \implies 4B - B = 1 \implies 3B = 1 \implies B = \frac{1}{3}$

From $A=0$, we get $C = -0 = 0$.
From $B=\frac{1}{3}$, we get $D = -\frac{1}{3}$.

So, our partial fraction decomposition is:
$Y(s) = \frac{0s + \frac{1}{3}}{s^2 + 1} + \frac{0s - \frac{1}{3}}{s^2 + 4} = \frac{1}{3} \frac{1}{s^2 + 1} - \frac{1}{3} \frac{1}{s^2 + 4}$

**Step 5: Find the inverse Laplace Transform.**
We need to use the table entry $L\{\sin(at)\} = \frac{a}{s^2 + a^2}$. To make our terms match this form, we need the 'a' in the numerator.
$Y(s) = \frac{1}{3} \frac{1}{s^2 + 1^2} - \frac{1}{3} \frac{1}{s^2 + 2^2}$

We can rewrite this as:
$Y(s) = \frac{1}{3} \left(\frac{1}{s^2 + 1^2}\right) - \frac{1}{3} \left(\frac{1}{s^2 + 2^2}\right)$

To use the $\sin(at)$ formula, we need 'a' in the numerator.
$Y(s) = \frac{1}{3} \left(\frac{1}{1} \frac{1}{s^2 + 1^2}\right) - \frac{1}{3} \left(\frac{1}{2} \frac{2}{s^2 + 2^2}\right)$
$Y(s) = \frac{1}{3} L\{\sin(1t)\} - \frac{1}{6} L\{\sin(2t)\}$

Now, taking the inverse Laplace transform term by term:
$y(t) = L^{-1}\{Y(s)\} = \frac{1}{3}\sin(t) - \frac{1}{6}\sin(2t)$

And there we have it! The solution to the ODE, $y(t) = \frac{1}{3}\sin(t) - \frac{1}{6}\sin(2t)$, which describes the displacement of the mass under the influence of the sinusoidal forcing function. This solution beautifully shows the system responding to the input $\sin(t)$ with its own natural frequency ($2$ rad/s) and the forcing frequency ($1$ rad/s). This is exactly what we expect from linear systems! This example strongly ties into **CO2** and **CO3**.

#### Connection to Course Outcomes and Learning Levels

*   **CO1: Solve systems of linear equations and diagonalize matrices.** While not directly solving systems of linear equations or performing diagonalization, the process of solving for $Y(s)$ involves algebraic manipulation of linear equations. The partial fraction decomposition itself is a form of solving a system of linear equations (for the coefficients A, B, C, D).
*   **CO2: Solve homogeneous and non-homogeneous linear differential equation with constant coefficients.** This is exactly what we are doing! The Laplace transform method is a direct approach to solving these types of ODEs, whether they are homogeneous ($f(t)=0$) or non-homogeneous ($f(t) \neq 0$). This is a core application.
*   **CO3: Compute Laplace transform and apply it to solve ODEs arising in engineering.** Every step we've taken demonstrates this. We compute $L\{f(t)\}$, we use the properties $L\{y'\}$ and $L\{y''\}$, and we apply $L^{-1}$ to the resulting $Y(s)$. This is the heart of the topic. The knowledge level here is **K3 (Application)**, as we are applying the learned transforms to solve problems.
*   **CO4: Determine the Taylor series and evaluate Fourier series expansion for different periodic functions.** While this topic doesn't directly involve Taylor or Fourier series, understanding the nature of solutions often involves recognizing periodic behavior (like the $\cos(2t)$ solution). Furthermore, some functions $f(t)$ might be represented by Fourier series, which can then be transformed term by term using Laplace transforms.

#### Key Takeaways and Exam Tips

*   **The Power of $s$:** Remember that the Laplace transform converts differential equations into algebraic ones. This is the fundamental advantage.
*   **Initial Conditions are Key:** The terms $y(0)$ and $y'(0)$ are automatically incorporated. Make sure you get them right! The general form of $Y(s)$ for $ay''+by'+cy=f(t)$ is:
    $Y(s) = \frac{F(s) + (as+b)y(0) + ay'(0)}{as^2+bs+c}$
    (Note: I used $asy_0 + av_0 + by_0$ earlier. Rearranging the algebraic equation gives $a(sy(0)+y'(0)) + b y(0) = asy(0) + ay'(0) + by(0)$. Both forms are equivalent after expansion).
*   **Master Partial Fractions:** This is a skill you *must* be comfortable with. Practice, practice, practice! Common forms involve distinct real roots, repeated real roots, complex conjugate roots, and quadratic terms like $(s^2+\omega^2)$. Kreyszig and Bird are excellent for this.
*   **Table Your Transforms:** Keep a good table of Laplace Transforms and Inverse Laplace Transforms handy. Know the common ones by heart: $e^{at}, t^n, \sin(at), \cos(at), \sinh(at), \cosh(at), \delta(t), u(t)$ (unit step).
*   **Systematic Approach:** Follow the 5 steps religiously. Don't skip steps, especially when starting.
*   **Check Your Answer:** If possible, plug your time-domain solution $y(t)$ back into the original differential equation and check if it satisfies the equation and the initial conditions.

Remember, the Laplace Transform is not just an academic exercise; it's a vital tool for analyzing dynamic systems in electrical engineering (circuits, control systems), mechanical engineering (vibrations, control), and physics (quantum mechanics, wave phenomena). Understanding this method will equip you to solve a wide range of real-world problems.

---

### Sample Questions and Answers

**Q1. Conceptual Question:** Explain why the Laplace transform is particularly useful for solving initial value problems for linear ODEs with constant coefficients.

**Answer:** The Laplace transform is useful because it has the property of transforming derivatives with respect to time ($t$) into algebraic operations involving the Laplace variable ($s$) and the initial values of the function and its derivatives. Specifically, $L\{y'(t)\} = sY(s) - y(0)$ and $L\{y''(t)\} = s^2Y(s) - sy(0) - y'(0)$. When we transform an entire ODE, the differential operators become multiplications by powers of $s$, and the initial conditions are directly incorporated into the transformed equation. This converts the ODE into an algebraic equation in $Y(s)$, which is much easier to solve. Once $Y(s)$ is found, the inverse Laplace transform brings us back to the time-domain solution $y(t)$. This process simplifies the problem significantly compared to traditional methods like undetermined coefficients or variation of parameters, especially when dealing with discontinuous forcing functions.

**Q2. Exam-Oriented Question:** Solve the following initial value problem using the Laplace transform:
$y''(t) - 3y'(t) + 2y(t) = e^{3t}$, with $y(0) = 1$ and $y'(0) = 2$.

**Solution:**

**Step 1: Transform the ODE.**
$L\{y''(t) - 3y'(t) + 2y(t)\} = L\{e^{3t}\}$
$L\{y''(t)\} - 3L\{y'(t)\} + 2L\{y(t)\} = L\{e^{3t}\}$

**Step 2: Substitute derivative properties and known transforms.**
We know $L\{y''(t)\} = s^2Y(s) - sy(0) - y'(0)$, $L\{y'(t)\} = sY(s) - y(0)$, and $L\{e^{at}\} = \frac{1}{s-a}$.
So, $L\{e^{3t}\} = \frac{1}{s-3}$.
The transformed equation becomes:
$[s^2Y(s) - sy(0) - y'(0)] - 3[sY(s) - y(0)] + 2Y(s) = \frac{1}{s-3}$

**Step 3: Plug in initial conditions.**
Given $y(0) = 1$ and $y'(0) = 2$:
$[s^2Y(s) - s(1) - 2] - 3[sY(s) - 1] + 2Y(s) = \frac{1}{s-3}$
$s^2Y(s) - s - 2 - 3sY(s) + 3 + 2Y(s) = \frac{1}{s-3}$

**Step 4: Solve for $Y(s)$.**
Group terms with $Y(s)$:
$(s^2 - 3s + 2)Y(s) - s + 1 = \frac{1}{s-3}$
$(s^2 - 3s + 2)Y(s) = \frac{1}{s-3} + s - 1$
$(s^2 - 3s + 2)Y(s) = \frac{1 + (s-1)(s-3)}{s-3}$
$(s^2 - 3s + 2)Y(s) = \frac{1 + s^2 - 4s + 3}{s-3}$
$(s^2 - 3s + 2)Y(s) = \frac{s^2 - 4s + 4}{s-3}$

Factor the quadratic in the denominator: $s^2 - 3s + 2 = (s-1)(s-2)$.
$(s-1)(s-2)Y(s) = \frac{(s-2)^2}{s-3}$
$Y(s) = \frac{(s-2)^2}{(s-1)(s-2)(s-3)}$

We can cancel one $(s-2)$ term, assuming $s \neq 2$:
$Y(s) = \frac{s-2}{(s-1)(s-3)}$

**Step 5: Find the inverse Laplace Transform.**
We need to use partial fraction decomposition for $Y(s)$:
$\frac{s-2}{(s-1)(s-3)} = \frac{A}{s-1} + \frac{B}{s-3}$
Multiply by $(s-1)(s-3)$:
$s-2 = A(s-3) + B(s-1)$

Using the Heaviside cover-up method:
Let $s=1$: $1-2 = A(1-3) + B(0) \implies -1 = -2A \implies A = \frac{1}{2}$.
Let $s=3$: $3-2 = A(0) + B(3-1) \implies 1 = 2B \implies B = \frac{1}{2}$.

So, $Y(s) = \frac{1}{2}\frac{1}{s-1} + \frac{1}{2}\frac{1}{s-3}$.

Now, take the inverse Laplace transform:
$y(t) = L^{-1}\{Y(s)\} = L^{-1}\{\frac{1}{2}\frac{1}{s-1}\} + L^{-1}\{\frac{1}{2}\frac{1}{s-3}\}$
$y(t) = \frac{1}{2}e^{t} + \frac{1}{2}e^{3t}$

**Final Answer:** $y(t) = \frac{1}{2}e^{t} + \frac{1}{2}e^{3t}$.

**Q3. Conceptual Question:** What is the role of partial fraction decomposition when using the Laplace transform to solve ODEs?

**Answer:** Partial fraction decomposition is crucial for the final step of finding the inverse Laplace transform, $y(t) = L^{-1}\{Y(s)\}$. The expression for $Y(s)$ is usually a rational function of $s$, which is often complex and not directly found in standard Laplace transform tables. Partial fraction decomposition breaks down this complex rational function into a sum of simpler fractions. Each of these simpler fractions typically corresponds to a known Laplace transform pair (e.g., $\frac{1}{s-a}$ transforms to $e^{at}$, $\frac{1}{s^2+a^2}$ transforms to $\frac{1}{a}\sin(at)$). By decomposing $Y(s)$ into these basic forms, we can then use the linearity of the inverse Laplace transform to find the solution $y(t)$ by combining the inverse transforms of the individual terms. Without it, finding the inverse transform would be significantly harder, if not impossible, with standard techniques.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=p_di4ateumM) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=Kb3K1Ui4454) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=S0hG_mS9bV4) |
