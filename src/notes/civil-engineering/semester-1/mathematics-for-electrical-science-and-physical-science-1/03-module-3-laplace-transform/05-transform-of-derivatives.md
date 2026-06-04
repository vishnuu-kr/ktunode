---
title: "Transform of derivatives"
subject: "MATHEMATICS FOR ELECTRICAL SCIENCE AND 
PHYSICAL  SCIENCE - 1"
module: "Module 3: Laplace Transform"
branch: "Civil Engineering"
semester: 1
topicId: "68b54565d74ec52cc09129e4"
status: "completed"
scrapedAt: "2026-05-20T18:31:03.774Z"
---
# MATHEMATICS FOR ELECTRICAL SCIENCE AND PHYSICAL SCIENCE - 1
## Module 3: Laplace Transform
### Topic: Transform of Derivatives

Welcome back, everyone! Today, we're diving into a really powerful aspect of the Laplace transform: how it handles derivatives. This is where the magic happens, especially when we want to solve differential equations, which are the backbone of so many physical and electrical systems. Remember our course outcome CO3? It specifically states: "Compute Laplace transform and apply it to solve ODEs arising in engineering." Well, understanding the transform of derivatives is *crucial* for achieving that. This is your direct ticket to solving those complex circuit behaviors and system dynamics.

Think about it: in electrical science, we're constantly dealing with rates of change – how voltage changes, how current changes, how charge accumulates. These are all represented by derivatives. In physics, we see derivatives in everything from velocity and acceleration to the rate of radioactive decay. The Laplace transform provides a way to convert these "rate of change" problems into algebraic problems, which are often much easier to solve.

So, let's get straight to it.

### The Core Idea: Derivatives Become Algebra

The fundamental principle behind the Laplace transform of derivatives is that it transforms differentiation in the time domain into multiplication by 's' in the frequency (or 's') domain. This is a game-changer!

Let's start with the definition of the Laplace transform of a function $f(t)$, denoted by $\mathcal{L}\{f(t)\}$ or $F(s)$:

$$
F(s) = \mathcal{L}\{f(t)\} = \int_0^\infty e^{-st} f(t) \, dt
$$

This integral is our gateway. Now, what happens if we take the Laplace transform of the *derivative* of a function, $f'(t)$?

### Laplace Transform of the First Derivative

Let's apply the definition directly to $f'(t)$:

$$
\mathcal{L}\{f'(t)\} = \int_0^\infty e^{-st} f'(t) \, dt
$$

This integral looks like it might be a good candidate for **integration by parts**. Do you remember integration by parts? It's that handy rule: $\int u \, dv = uv - \int v \, du$.

Let's choose:
*   $u = e^{-st}$  (because its derivative is simple)
*   $dv = f'(t) \, dt$ (because its integral is $f(t)$)

From these choices, we get:
*   $du = -se^{-st} \, dt$
*   $v = f(t)$

Now, applying the integration by parts formula:

$$
\mathcal{L}\{f'(t)\} = \left[ e^{-st} f(t) \right]_0^\infty - \int_0^\infty f(t) (-se^{-st}) \, dt
$$

Let's evaluate the first term, the part in the square brackets:

$$
\left[ e^{-st} f(t) \right]_0^\infty = \lim_{t \to \infty} (e^{-st} f(t)) - e^{-s \cdot 0} f(0)
$$

For the Laplace transform to exist, we typically assume that $f(t)$ does not grow faster than some exponential $e^{at}$. This ensures that $e^{-st} f(t)$ goes to zero as $t \to \infty$ when $s > a$. So, the limit term is usually zero. (This is a key condition, often assumed implicitly when we talk about transforms).

The second part is $e^0 f(0) = 1 \cdot f(0) = f(0)$.

So, the bracketed term simplifies to $0 - f(0) = -f(0)$.

Now, let's look at the integral part:

$$
- \int_0^\infty f(t) (-se^{-st}) \, dt = s \int_0^\infty e^{-st} f(t) \, dt
$$

And what is that integral? It's simply the Laplace transform of $f(t)$, which we've called $F(s)$!

So, putting it all together:

$$
\mathcal{L}\{f'(t)\} = -f(0) + s F(s)
$$

Or, more commonly written:

$$
\mathcal{L}\{f'(t)\} = s F(s) - f(0)
$$

**This is a fundamental result, and you absolutely need to remember this!**

**Key Takeaway 1:** The Laplace transform of the first derivative of a function is $s$ times the transform of the function, minus the initial value of the function at $t=0$.

Let's think about this with an analogy. Imagine you're tracking the distance a car has traveled, $d(t)$. Its velocity is $v(t) = d'(t)$, and its acceleration is $a(t) = v'(t) = d''(t)$.
If we know the velocity $v(t)$ and its transform $V(s)$, and we want to know something about the acceleration $a(t)$, this rule tells us that $\mathcal{L}\{a(t)\} = \mathcal{L}\{v'(t)\} = sV(s) - v(0)$. This is how we can relate the "rate of change of velocity" to the "rate of change of the transform of velocity."

### Laplace Transform of the Second Derivative

What if we have a second derivative, $f''(t)$? We can use the same rule we just derived, but apply it to the function $f'(t)$.

We know that $f''(t) = (f'(t))'$.
So, using the rule $\mathcal{L}\{g'(t)\} = s G(s) - g(0)$ where $g(t) = f'(t)$:

$$
\mathcal{L}\{f''(t)\} = \mathcal{L}\{(f'(t))'\} = s \mathcal{L}\{f'(t)\} - f'(0)
$$

Now, substitute what we found for $\mathcal{L}\{f'(t)\}$: $\mathcal{L}\{f'(t)\} = s F(s) - f(0)$.

$$
\mathcal{L}\{f''(t)\} = s [s F(s) - f(0)] - f'(0)
$$

$$
\mathcal{L}\{f''(t)\} = s^2 F(s) - s f(0) - f'(0)
$$

And there you have it!

**Key Takeaway 2:** The Laplace transform of the second derivative of a function is $s^2$ times the transform of the function, minus $s$ times the initial value of the function, minus the initial value of the first derivative.

This pattern is going to continue. If we were to do the third derivative, we'd take the transform of $f''(t)$ and apply the rule again.

### Laplace Transform of Higher-Order Derivatives (Generalization)

We can generalize this for any $n$-th derivative. The rule is:

$$
\mathcal{L}\{f^{(n)}(t)\} = s^n F(s) - s^{n-1} f(0) - s^{n-2} f'(0) - \dots - s f^{(n-2)}(0) - f^{(n-1)}(0)
$$

Notice the pattern in the terms:
*   The transform of the $n$-th derivative involves $s^n$ times the function's transform, $F(s)$.
*   Then, there's a series of terms where $s$ is successively decreased by one ($s^{n-1}, s^{n-2}, \dots, s^1, s^0$), each multiplied by an initial condition.
*   The initial conditions start with $f(0)$, then $f'(0)$, $f''(0)$, and so on, up to $f^{(n-1)}(0)$.

It's like we're "undoing" the derivatives by multiplying by $s$ and then subtracting out the initial "state" of the function and its derivatives at time $t=0$. This is precisely why the Laplace transform is so effective for solving differential equations, especially those with initial conditions. Problems like this are frequently tested in exams, and a solid grasp of this general formula is essential for CO3.

### Why is this so important for ODEs? (Connecting to CO2 & CO3)

Let's look at a typical second-order linear ordinary differential equation (ODE) with constant coefficients:

$$
a y''(t) + b y'(t) + c y(t) = r(t)
$$

where $a, b, c$ are constants and $r(t)$ is some forcing function. We also usually have initial conditions, say $y(0) = y_0$ and $y'(0) = y'_0$.

Now, let's apply the Laplace transform to both sides of the equation. We'll use the linearity property of the Laplace transform ($\mathcal{L}\{Af(t) + Bg(t)\} = A \mathcal{L}\{f(t)\} + B \mathcal{L}\{g(t)\}$):

$$
\mathcal{L}\{a y''(t) + b y'(t) + c y(t)\} = \mathcal{L}\{r(t)\}
$$

$$
a \mathcal{L}\{y''(t)\} + b \mathcal{L}\{y'(t)\} + c \mathcal{L}\{y(t)\} = R(s)
$$

where $R(s) = \mathcal{L}\{r(t)\}$.

Now, we use our rules for derivatives:
*   $\mathcal{L}\{y''(t)\} = s^2 Y(s) - s y(0) - y'(0)$
*   $\mathcal{L}\{y'(t)\} = s Y(s) - y(0)$
*   $\mathcal{L}\{y(t)\} = Y(s)$ (This is what we're trying to find!)

Substituting these into the transformed equation:

$$
a [s^2 Y(s) - s y(0) - y'(0)] + b [s Y(s) - y(0)] + c Y(s) = R(s)
$$

Let's plug in the initial conditions $y(0) = y_0$ and $y'(0) = y'_0$:

$$
a [s^2 Y(s) - s y_0 - y'_0] + b [s Y(s) - y_0] + c Y(s) = R(s)
$$

Now, notice what happened: the original differential equation in $y(t)$ has been transformed into an *algebraic equation* in $Y(s)$. This is the core benefit!

Let's rearrange to solve for $Y(s)$:

$$
(as^2 + bs + c) Y(s) - a s y_0 - a y'_0 - b y_0 = R(s)
$$

$$
(as^2 + bs + c) Y(s) = R(s) + a s y_0 + a y'_0 + b y_0
$$

$$
Y(s) = \frac{R(s) + a s y_0 + a y'_0 + b y_0}{as^2 + bs + c}
$$

This expression for $Y(s)$ is an algebraic expression. To find the solution $y(t)$, we just need to find the inverse Laplace transform of $Y(s)$. This usually involves partial fraction decomposition and looking up standard transform pairs in tables (like those found in Kreyszig or Bird's).

This entire process directly addresses CO3. We've computed the Laplace transform of the derivatives and used it to transform an ODE into an algebraic form, which we then solved for $Y(s)$. This is precisely how we handle problems like analyzing RLC circuits or mass-spring systems.

### Example: A Simple RC Circuit

Let's consider a simple series RC circuit with a voltage source $V(t)$. The governing equation is:

$$
R i(t) + \frac{1}{C} \int_0^t i(\tau) d\tau = V(t)
$$

This is an integro-differential equation. To make it a pure differential equation, we can differentiate both sides with respect to $t$:

$$
R i'(t) + \frac{1}{C} i(t) = V'(t)
$$

Assume $R=1$, $C=1$, and $V(t) = u(t)$ (a unit step function, where $u(t)=0$ for $t<0$ and $u(t)=1$ for $t \ge 0$). Also, assume initial current $i(0)=0$.

The equation becomes:
$$
i'(t) + i(t) = v'(t)
$$
where $v(t)=u(t)$.
What is $v'(t)$? The derivative of a unit step function is the Dirac delta function, $\delta(t)$. So, $v'(t) = \delta(t)$.

Our ODE is:
$$
i'(t) + i(t) = \delta(t)
$$
with $i(0) = 0$.

Let's apply the Laplace transform:
$\mathcal{L}\{i'(t)\} + \mathcal{L}\{i(t)\} = \mathcal{L}\{\delta(t)\}$

Using our rules:
$\mathcal{L}\{i'(t)\} = s I(s) - i(0)$
$\mathcal{L}\{i(t)\} = I(s)$
$\mathcal{L}\{\delta(t)\} = 1$ (This is a standard transform pair, usually provided in tables.)

Substituting the initial condition $i(0)=0$:
$(s I(s) - 0) + I(s) = 1$
$s I(s) + I(s) = 1$
$(s+1) I(s) = 1$
$I(s) = \frac{1}{s+1}$

Now, we need the inverse Laplace transform of $I(s)$. This is a common form: $\mathcal{L}^{-1}\left\{\frac{1}{s-a}\right\} = e^{at}$.
Here, $a = -1$. So,
$i(t) = \mathcal{L}^{-1}\left\{\frac{1}{s+1}\right\} = e^{-t}$ for $t \ge 0$.

This is the current in an RC circuit when a step voltage is applied. We transformed a differential equation involving a derivative and a delta function into an algebraic equation, solved for $I(s)$, and then found the time-domain solution. This is a direct application of CO3.

### Common Pitfalls and Exam Tips

*   **Initial Conditions:** Don't forget the initial conditions! They are multiplied by powers of $s$ and are crucial for getting the correct solution, especially for higher-order derivatives.
*   **Order of Derivatives:** Be meticulous when applying the general formula for $n$-th derivatives. Ensure the powers of $s$ and the order of the derivatives in the initial conditions match up correctly. A common mistake is getting the signs wrong or mixing up the order of $f(0), f'(0), \dots$.
*   **Table Lookup:** Having a good table of Laplace transforms and their inverse transforms is essential. Know the common ones like $e^{at}$, $t^n$, $\sin(\omega t)$, $\cos(\omega t)$, and $\delta(t)$. Kreyszig and Bird's books usually have excellent tables.
*   **Partial Fractions:** For ODEs, the solution $Y(s)$ is often a rational function of $s$. Mastering partial fraction decomposition is key to breaking $Y(s)$ down into simpler terms that you can invert. This links back to CO3 and even CO2, as solving ODEs often requires these algebraic manipulations.
*   **Relating to Physical Systems:** When you see a problem about circuits, springs, or any system involving rates of change, think: "This is likely an ODE, and Laplace transforms are my best bet!" For CO2, understanding how to solve ODEs is fundamental, and CO3 shows you *how* to use Laplace transforms as a tool for that.

### Connecting to Other Course Outcomes

*   **CO1 (Linear Equations & Matrices):** While this topic primarily focuses on ODEs, the algebraic manipulation of $Y(s)$ sometimes leads to solving systems of linear equations if we were to use matrix methods for ODEs. However, the direct Laplace transform method bypasses explicit matrix operations for solving the ODE itself, transforming it into a single algebraic equation.
*   **CO2 (Solving ODEs):** This topic is the *engine* for CO2 when using the Laplace transform method. It provides the direct translation mechanism from the differential domain to the algebraic domain.
*   **CO4 (Taylor & Fourier Series):** Taylor series are about local approximations using derivatives, while Fourier series represent functions as sums of sinusoids. The Laplace transform works with functions defined for $t \ge 0$ and transforms them into the frequency domain. While they are different tools, understanding derivatives (from CO4's Taylor series context) helps build the intuition for the transform of derivatives.

Remember, the Laplace transform method provides an alternative, often more systematic, way to solve ODEs compared to traditional methods like undetermined coefficients or variation of parameters, especially when dealing with piecewise forcing functions or impulses (like the Dirac delta function).

### Summary of Key Formulas

For a function $f(t)$ with Laplace transform $F(s)$:

*   $\mathcal{L}\{f'(t)\} = s F(s) - f(0)$
*   $\mathcal{L}\{f''(t)\} = s^2 F(s) - s f(0) - f'(0)$
*   $\mathcal{L}\{f^{(n)}(t)\} = s^n F(s) - s^{n-1} f(0) - s^{n-2} f'(0) - \dots - f^{(n-1)}(0)$

These are your workhorses for tackling ODEs with initial conditions. Keep them handy!

---

## Sample Questions and Answers

Here are a few questions to test your understanding, ranging from conceptual to application-oriented.

**Question 1 (Conceptual):**
If $\mathcal{L}\{f(t)\} = F(s)$, what is $\mathcal{L}\{f'(t)\}$ in terms of $F(s)$ and the initial condition of $f(t)$? Explain why this transformation is useful for solving differential equations.

**Answer 1:**
The Laplace transform of the first derivative of a function $f(t)$ is given by:
$\mathcal{L}\{f'(t)\} = s F(s) - f(0)$
where $F(s) = \mathcal{L}\{f(t)\}$ and $f(0)$ is the initial value of the function at $t=0$.

This transformation is immensely useful for solving differential equations because it converts differentiation in the time domain ($t$) into multiplication by $s$ in the frequency domain ($s$). A differential equation, which involves derivatives of the unknown function, is transformed into an algebraic equation in terms of $s$ and the Laplace transform of the unknown function. Algebraic equations are generally much easier to solve than differential equations. After finding the transform of the solution, inverse Laplace transform techniques are used to return to the time domain. This process effectively "replaces" derivatives with algebraic terms, simplifying the problem significantly.

**Question 2 (Application):**
Find the Laplace transform of the function $f(t) = t e^{2t}$.

**Answer 2:**
We can use the property that $\mathcal{L}\{t^n f(t)\} = (-1)^n \frac{d^n}{ds^n} F(s)$, where $F(s) = \mathcal{L}\{f(t)\}$.
In this case, $n=1$ and $f(t) = e^{2t}$.
First, find the Laplace transform of $e^{2t}$:
$\mathcal{L}\{e^{2t}\} = F(s) = \frac{1}{s-2}$ (This is a standard transform pair).

Now, apply the property:
$\mathcal{L}\{t e^{2t}\} = (-1)^1 \frac{d}{ds} \left(\frac{1}{s-2}\right)$
$\mathcal{L}\{t e^{2t}\} = - \frac{d}{ds} (s-2)^{-1}$

Differentiating $(s-2)^{-1}$ with respect to $s$:
$\frac{d}{ds} (s-2)^{-1} = -1 (s-2)^{-2} \cdot 1 = -\frac{1}{(s-2)^2}$

So, $\mathcal{L}\{t e^{2t}\} = - \left(-\frac{1}{(s-2)^2}\right) = \frac{1}{(s-2)^2}$.

**Question 3 (ODE Solution):**
Solve the following initial value problem using Laplace transforms:
$y''(t) - 3y'(t) + 2y(t) = e^{3t}$, with $y(0) = 1$ and $y'(0) = 2$.

**Answer 3:**
First, take the Laplace transform of both sides of the equation. Let $Y(s) = \mathcal{L}\{y(t)\}$.
$\mathcal{L}\{y''(t)\} = s^2 Y(s) - s y(0) - y'(0)$
$\mathcal{L}\{y'(t)\} = s Y(s) - y(0)$
$\mathcal{L}\{y(t)\} = Y(s)$
$\mathcal{L}\{e^{3t}\} = \frac{1}{s-3}$

Substitute the initial conditions $y(0)=1$ and $y'(0)=2$:
$\mathcal{L}\{y''(t)\} = s^2 Y(s) - s(1) - 2 = s^2 Y(s) - s - 2$
$\mathcal{L}\{y'(t)\} = s Y(s) - 1$

Now, transform the entire ODE:
$[s^2 Y(s) - s - 2] - 3[s Y(s) - 1] + 2[Y(s)] = \frac{1}{s-3}$

Group terms with $Y(s)$:
$(s^2 - 3s + 2) Y(s) - s - 2 + 3 = \frac{1}{s-3}$
$(s^2 - 3s + 2) Y(s) - s + 1 = \frac{1}{s-3}$

Now, isolate $Y(s)$:
$(s^2 - 3s + 2) Y(s) = \frac{1}{s-3} + s - 1$
Factor the quadratic: $(s-1)(s-2) Y(s) = \frac{1 + (s-1)(s-3)}{s-3}$
$(s-1)(s-2) Y(s) = \frac{1 + s^2 - 4s + 3}{s-3}$
$(s-1)(s-2) Y(s) = \frac{s^2 - 4s + 4}{s-3}$
$(s-1)(s-2) Y(s) = \frac{(s-2)^2}{s-3}$

Solve for $Y(s)$:
$Y(s) = \frac{(s-2)^2}{(s-1)(s-2)(s-3)}$
$Y(s) = \frac{s-2}{(s-1)(s-3)}$ (We can cancel one $(s-2)$ term, assuming $s \ne 2$)

Now, perform a partial fraction decomposition for $Y(s)$:
$\frac{s-2}{(s-1)(s-3)} = \frac{A}{s-1} + \frac{B}{s-3}$

Multiply by $(s-1)(s-3)$:
$s-2 = A(s-3) + B(s-1)$

To find A, set $s=1$:
$1-2 = A(1-3) + B(1-1)$
$-1 = A(-2) + 0 \implies A = \frac{1}{2}$

To find B, set $s=3$:
$3-2 = A(3-3) + B(3-1)$
$1 = 0 + B(2) \implies B = \frac{1}{2}$

So, $Y(s) = \frac{1/2}{s-1} + \frac{1/2}{s-3}$.

Finally, find the inverse Laplace transform:
$y(t) = \mathcal{L}^{-1}\left\{\frac{1/2}{s-1}\right\} + \mathcal{L}^{-1}\left\{\frac{1/2}{s-3}\right\}$
$y(t) = \frac{1}{2} \mathcal{L}^{-1}\left\{\frac{1}{s-1}\right\} + \frac{1}{2} \mathcal{L}^{-1}\left\{\frac{1}{s-3}\right\}$
$y(t) = \frac{1}{2} e^t + \frac{1}{2} e^{3t}$

This is the solution to the given initial value problem.
