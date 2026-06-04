---
title: "Non homogenous ODEs (with constant coefficients) - General solution"
subject: "MATHEMATICS FOR ELECTRICAL SCIENCE AND PHYSICAL 
SCIENCE - 1"
module: "Module 2: Homogeneous linear ODEs of second order"
branch: "Electrical and Electronics Engineering"
semester: 1
topicId: "68bd213e9ece2bdd875f94fc"
status: "completed"
scrapedAt: "2026-05-23T16:03:11.533Z"
---
# Mathematics for Electrical Science and Physical Science - 1

## Module 2: Homogeneous Linear ODEs of Second Order

### Topic: Non-Homogeneous ODEs (with Constant Coefficients) - General Solution

Welcome, everyone! In our journey through differential equations, we've already explored the fascinating world of **homogeneous linear ODEs with constant coefficients**. We learned how to find solutions for systems that, when equal to zero, describe inherent behaviors – like the natural oscillations of a pendulum or the decay of a radioactive substance without any external influence.

But what happens when there *is* an external force or an input to the system? Think about that pendulum again. What if we're pushing it? Or consider an electrical circuit with a battery providing a voltage. These external influences introduce a non-zero term on the right-hand side of our differential equation. This brings us to the topic of **non-homogeneous linear ODEs with constant coefficients**.

This topic is absolutely crucial for understanding how systems respond to external stimuli, which is at the heart of many electrical and physical science applications. We're talking about circuit analysis with external voltage sources, mechanical vibrations with driving forces, and so much more. This directly ties into **Course Outcome CO2: Solve homogeneous and non-homogeneous linear differential equation with constant coefficients**. We’ll be building on our understanding of homogeneous solutions to tackle these more complex, and perhaps more realistic, scenarios.

Let's start by setting the stage.

### Understanding Non-Homogeneous ODEs

A second-order linear differential equation with constant coefficients has the general form:

$a y'' + b y' + c y = f(x)$

where $a$, $b$, and $c$ are constants, and importantly, $f(x)$ is a **non-zero function** of $x$. This $f(x)$ is what makes the equation "non-homogeneous" or "inhomogeneous." It represents the external input, the driving force, or the source term.

Contrast this with the homogeneous case: $a y'' + b y' + c y = 0$.

The fundamental principle when dealing with non-homogeneous ODEs is that the **general solution** to the non-homogeneous equation is the sum of two parts:

**General Solution ($y(x)$) = Homogeneous Solution ($y_h(x)$) + Particular Solution ($y_p(x)$)**

Think of it like this: Imagine you're trying to find your way through a familiar city (the homogeneous part – the inherent structure). Suddenly, there's a parade blocking your usual route (the non-homogeneous part – the external disturbance). Your total journey will involve the path you *would have taken* if there were no parade, *plus* the detour you have to take because of the parade.

*   **Homogeneous Solution ($y_h(x)$):** This is the solution to the corresponding homogeneous equation, $a y'' + b y' + c y = 0$. We already know how to find this! It's based on the roots of the characteristic equation $ar^2 + br + c = 0$. We’ll call this the **complementary function**.

*   **Particular Solution ($y_p(x)$):** This is *any* function that satisfies the *original* non-homogeneous equation, $a y'' + b y' + c y = f(x)$. It's the specific "detour" or "response" to the $f(x)$ term. It doesn't need to satisfy the homogeneous part, just the full equation.

Why this sum? Let's test it. Suppose $y = y_h + y_p$.
Then $y' = y_h' + y_p'$ and $y'' = y_h'' + y_p''$.
Substitute this into the non-homogeneous equation:
$a(y_h'' + y_p'') + b(y_h' + y_p') + c(y_h + y_p)$
$= (a y_h'' + b y_h' + c y_h) + (a y_p'' + b y_p' + c y_p)$

We know that $a y_h'' + b y_h' + c y_h = 0$ (because $y_h$ is the homogeneous solution).
And we defined $y_p$ such that $a y_p'' + b y_p' + c y_p = f(x)$.
So, the sum is $0 + f(x) = f(x)$.
This confirms that $y = y_h + y_p$ is indeed a solution to the non-homogeneous equation.

The goal now is to figure out how to find this $y_p$. This is where the specific form of $f(x)$ becomes critical.

### Methods for Finding a Particular Solution ($y_p$)

There are two primary methods we’ll use to find $y_p$:

1.  **Method of Undetermined Coefficients:** This is a very powerful method, but it has a key limitation: it only works when $f(x)$ is of a specific form – polynomial, exponential, sine, cosine, or combinations of these. This is often the case in many introductory engineering problems.

2.  **Method of Variation of Parameters:** This method is more general. It can be used for *any* $f(x)$, provided we can perform certain integrations. It's a bit more mathematically involved but offers broader applicability.

We’ll focus on the **Method of Undetermined Coefficients** first, as it’s often the most direct approach when applicable. This is where **Course Outcome CO2** really comes into play for application.

#### Method of Undetermined Coefficients

The core idea here is to make an educated guess about the form of $y_p$ based on the form of $f(x)$. We then substitute this guess into the ODE and solve for the unknown coefficients in our guess.

Let's illustrate with some common forms of $f(x)$:

**Case 1: $f(x)$ is a polynomial of degree $n$.**

If $f(x) = A_n x^n + A_{n-1} x^{n-1} + \dots + A_0$, then our guess for $y_p$ should be a general polynomial of the same degree:

$y_p = C_n x^n + C_{n-1} x^{n-2} + \dots + C_0$

**Example:**
Suppose our ODE is $y'' - 3y' + 2y = 4x^2$.
Here, $f(x) = 4x^2$, a polynomial of degree 2.
Our guess for $y_p$ would be a general polynomial of degree 2:
$y_p = Ax^2 + Bx + C$
We'd then calculate $y_p'$ and $y_p''$:
$y_p' = 2Ax + B$
$y_p'' = 2A$
Substitute these into the ODE:
$(2A) - 3(2Ax + B) + 2(Ax^2 + Bx + C) = 4x^2$
$2A - 6Ax - 3B + 2Ax^2 + 2Bx + 2C = 4x^2$
Rearrange by powers of $x$:
$2Ax^2 + (-6A + 2B)x + (2A - 3B + 2C) = 4x^2$

Now, we equate coefficients of like powers of $x$ on both sides:
For $x^2$: $2A = 4 \implies A = 2$
For $x$: $-6A + 2B = 0 \implies -6(2) + 2B = 0 \implies -12 + 2B = 0 \implies B = 6$
For constant term: $2A - 3B + 2C = 0 \implies 2(2) - 3(6) + 2C = 0 \implies 4 - 18 + 2C = 0 \implies -14 + 2C = 0 \implies C = 7$

So, our particular solution is $y_p = 2x^2 + 6x + 7$.

Remember, this guess works well *unless* some terms in our guess for $y_p$ are already solutions to the *homogeneous* equation. We'll discuss this "modification rule" shortly.

**Case 2: $f(x)$ is an exponential function.**

If $f(x) = K e^{\alpha x}$, then our guess for $y_p$ is $y_p = C e^{\alpha x}$.

**Example:**
Consider $y'' - y = e^{2x}$.
The homogeneous equation is $y'' - y = 0$. The characteristic equation is $r^2 - 1 = 0$, with roots $r = \pm 1$. So, $y_h = c_1 e^x + c_2 e^{-x}$.
Now, for $y_p$, since $f(x) = e^{2x}$, our initial guess is $y_p = C e^{2x}$.
$y_p' = 2C e^{2x}$
$y_p'' = 4C e^{2x}$
Substitute into the ODE:
$(4C e^{2x}) - (C e^{2x}) = e^{2x}$
$3C e^{2x} = e^{2x}$
Equating coefficients of $e^{2x}$: $3C = 1 \implies C = 1/3$.
So, $y_p = \frac{1}{3} e^{2x}$.

**Case 3: $f(x)$ is a sine or cosine function.**

If $f(x) = K \sin(\beta x)$ or $f(x) = K \cos(\beta x)$, our guess for $y_p$ must include *both* sine and cosine terms of the same frequency, because their derivatives also involve sine and cosine:

$y_p = C_1 \cos(\beta x) + C_2 \sin(\beta x)$

**Example:**
Consider $y'' + y = \cos(3x)$.
Homogeneous equation: $y'' + y = 0$. Characteristic equation: $r^2 + 1 = 0$, roots $r = \pm i$.
So, $y_h = c_1 \cos(x) + c_2 \sin(x)$.
Now, for $y_p$, since $f(x) = \cos(3x)$, our guess is $y_p = A \cos(3x) + B \sin(3x)$.
$y_p' = -3A \sin(3x) + 3B \cos(3x)$
$y_p'' = -9A \cos(3x) - 9B \sin(3x)$
Substitute into the ODE:
$(-9A \cos(3x) - 9B \sin(3x)) + (A \cos(3x) + B \sin(3x)) = \cos(3x)$
$(-9A + A) \cos(3x) + (-9B + B) \sin(3x) = \cos(3x)$
$(-8A) \cos(3x) + (-8B) \sin(3x) = 1 \cos(3x) + 0 \sin(3x)$

Equating coefficients:
For $\cos(3x)$: $-8A = 1 \implies A = -1/8$
For $\sin(3x)$: $-8B = 0 \implies B = 0$

So, $y_p = -\frac{1}{8} \cos(3x)$.

**Combining Forms of $f(x)$:**

If $f(x)$ is a sum of different types of functions, we use the **Principle of Superposition**. We find a particular solution for each component of $f(x)$ and add them up.

**Example:**
If $f(x) = 3x + e^{-x}$:
We find $y_{p1}$ for $3x$ and $y_{p2}$ for $e^{-x}$, and then $y_p = y_{p1} + y_{p2}$.
For $3x$, guess $y_{p1} = Ax + B$.
For $e^{-x}$, guess $y_{p2} = C e^{-x}$.
The total guess for $y_p$ would be $Ax + B + C e^{-x}$. (We'll refine this with the modification rule next!)

#### The Modification Rule: When Your Guess is Wrong (Because it's Already Part of $y_h$)

This is a crucial point, often a source of error if not handled carefully. What happens if your initial guess for $y_p$ contains terms that are already part of the homogeneous solution $y_h$?

**The Rule:** If any term in your proposed $y_p$ is a solution to the homogeneous equation ($a y'' + b y' + c y = 0$), then that term in $y_p$ will vanish when substituted into the ODE, making your guess incorrect. To fix this, you must multiply your entire proposed $y_p$ by $x$ until no term in the modified guess is a solution to the homogeneous equation.

**Let's revisit the example $y'' - y = e^{-x}$:**
Homogeneous solution: $y_h = c_1 e^x + c_2 e^{-x}$.
The $f(x)$ term is $e^{-x}$. Our initial guess for $y_p$ would be $C e^{-x}$.
However, observe that $e^{-x}$ is already part of $y_h$ (when $c_2 = 1$).
So, if we substitute $y_p = C e^{-x}$ into $y'' - y = 0$, it will yield zero.

**Modification:** Since $Ce^{-x}$ is a solution to the homogeneous equation, we must multiply our guess by $x$.
Our modified guess becomes $y_p = Cx e^{-x}$.

Let's find $y_p'$ and $y_p''$ for $y_p = Cx e^{-x}$:
Using the product rule:
$y_p' = C(1 \cdot e^{-x} + x \cdot (-e^{-x})) = C e^{-x} - C x e^{-x}$
$y_p'' = C(-e^{-x}) - C(1 \cdot e^{-x} + x \cdot (-e^{-x})) = -C e^{-x} - C e^{-x} + C x e^{-x} = -2C e^{-x} + C x e^{-x}$

Now substitute into $y'' - y = e^{-x}$:
$(-2C e^{-x} + C x e^{-x}) - (Cx e^{-x}) = e^{-x}$
$-2C e^{-x} = e^{-x}$

Equating coefficients of $e^{-x}$:
$-2C = 1 \implies C = -1/2$.

So, the particular solution is $y_p = -\frac{1}{2} x e^{-x}$.

The general solution would then be $y(x) = y_h + y_p = c_1 e^x + c_2 e^{-x} - \frac{1}{2} x e^{-x}$.

**When does this modification happen?**

It happens when $f(x)$ contains terms that are solutions to the homogeneous equation. This typically occurs when:

*   $f(x) = P_n(x)$ (a polynomial) and the characteristic equation has $r=0$ as a root. (e.g., $y''+y'=x$).
*   $f(x) = K e^{\alpha x}$ and $\alpha$ is a root of the characteristic equation. (e.g., $y'' - y = e^x$).
*   $f(x) = K \sin(\beta x)$ or $K \cos(\beta x)$ and $\pm i\beta$ are roots of the characteristic equation (i.e., $\beta$ is the natural frequency of the homogeneous system). (e.g., $y''+y = \sin(x)$).

Let's summarise the modification rule in a structured way for clarity, even though we're trying to avoid too many lists. This is one of those essential tabular summaries that is hard to beat.

**Summary of Undetermined Coefficients and Modification Rule:**

| Form of $f(x)$                                     | Initial Guess for $y_p$                                   | Characteristic Equation Roots ($r$) | Modification Needed if...                                              | Modified Guess for $y_p$                                      |
| :------------------------------------------------- | :-------------------------------------------------------- | :---------------------------------- | :--------------------------------------------------------------------- | :------------------------------------------------------------ |
| $P_n(x)$ (Polynomial of degree $n$)                | $C_n x^n + \dots + C_0$                                   | $r=0$ is a root                     | Term $C_k x^k$ is in $y_h$ (happens if $r=0$ is a root)               | Multiply by $x^k$ where $k$ is the multiplicity of $r=0$.   |
| $K e^{\alpha x}$                                   | $C e^{\alpha x}$                                          | $r = \alpha$ is a root              | $e^{\alpha x}$ is in $y_h$ (happens if $\alpha$ is a root)            | Multiply by $x^k$ where $k$ is the multiplicity of $\alpha$.  |
| $K \sin(\beta x)$ or $K \cos(\beta x)$             | $C_1 \cos(\beta x) + C_2 \sin(\beta x)$                   | $r = \pm i\beta$ are roots          | $\cos(\beta x)$ or $\sin(\beta x)$ are in $y_h$ (happens if $\pm i\beta$ are roots) | Multiply by $x^k$ where $k$ is the multiplicity of $\pm i\beta$. |
| $P_n(x)e^{\alpha x}$                               | $P_n(x)e^{\alpha x}$                                      | $r = \alpha$ is a root              | $P_n(x)e^{\alpha x}$ is in $y_h$ (happens if $\alpha$ is a root)       | Multiply by $x^k$ where $k$ is the multiplicity of $\alpha$.  |
| $(P_n(x)\cos(\beta x) + Q_m(x)\sin(\beta x))e^{\alpha x}$ | $(P_n(x)\cos(\beta x) + Q_m(x)\sin(\beta x))e^{\alpha x}$ | $r = \alpha \pm i\beta$ are roots   | Terms are in $y_h$ (happens if $\alpha \pm i\beta$ are roots)        | Multiply by $x^k$ where $k$ is the multiplicity of $\alpha \pm i\beta$. |

**Important Note:** If $f(x)$ is a sum of terms (e.g., $f(x) = f_1(x) + f_2(x)$), you apply the superposition principle. You determine the appropriate $y_p$ for *each* $f_i(x)$ separately, taking into account potential modifications with the homogeneous solution. *Then* you add them up to get the total $y_p$. **Crucially, if the same term appears in multiple $y_{pi}$ due to modification, you only keep the highest power of $x$ multiplying that term.**

**Example involving superposition and modification:**
Consider $y'' - 2y' + y = x + e^x$.
Homogeneous equation: $y'' - 2y' + y = 0$. Characteristic equation: $r^2 - 2r + 1 = 0 \implies (r-1)^2 = 0$.
So, the roots are $r_1 = r_2 = 1$ (a double root).
The homogeneous solution is $y_h = c_1 e^x + c_2 x e^x$.

Now, let's find $y_p$. We split $f(x)$ into $f_1(x) = x$ and $f_2(x) = e^x$.

*   **For $f_1(x) = x$**: This is a polynomial of degree 1. Our initial guess for $y_{p1}$ is $Ax + B$.
    Are any terms in $Ax+B$ part of $y_h$? No, $y_h$ only has $e^x$ and $xe^x$. So, no modification needed for $f_1(x)$.
    $y_{p1} = Ax + B$
    $y_{p1}' = A$
    $y_{p1}'' = 0$
    Substitute into $y'' - 2y' + y = x$:
    $0 - 2(A) + (Ax + B) = x$
    $Ax + (B - 2A) = x$
    Equating coefficients:
    For $x$: $A = 1$
    For constant: $B - 2A = 0 \implies B - 2(1) = 0 \implies B = 2$.
    So, $y_{p1} = x + 2$.

*   **For $f_2(x) = e^x$**: This is of the form $K e^{\alpha x}$ with $\alpha = 1$. Our initial guess for $y_{p2}$ is $C e^x$.
    Is $e^x$ part of $y_h = c_1 e^x + c_2 x e^x$? Yes, it is. In fact, $e^x$ corresponds to a root $r=1$.
    Since $r=1$ is a double root of the characteristic equation, we need to multiply our guess by $x^2$.
    Modified guess for $y_{p2}$ is $C x^2 e^x$.

    Let's find derivatives for $y_{p2} = C x^2 e^x$:
    $y_{p2}' = C(2x e^x + x^2 e^x) = C(2x + x^2)e^x$
    $y_{p2}'' = C( (2 + 2x)e^x + (2x + x^2)e^x ) = C(2 + 4x + x^2)e^x$

    Substitute into $y'' - 2y' + y = e^x$:
    $C(2 + 4x + x^2)e^x - 2 C(2x + x^2)e^x + C x^2 e^x = e^x$
    Divide by $e^x$:
    $C(2 + 4x + x^2) - 2C(2x + x^2) + C x^2 = 1$
    $C(2 + 4x + x^2 - 4x - 2x^2 + x^2) = 1$
    $C(2 + (4x - 4x) + (x^2 - 2x^2 + x^2)) = 1$
    $C(2 + 0 + 0) = 1$
    $2C = 1 \implies C = 1/2$.
    So, $y_{p2} = \frac{1}{2} x^2 e^x$.

Now, we combine the particular solutions:
$y_p = y_{p1} + y_{p2} = (x + 2) + \frac{1}{2} x^2 e^x$.

The general solution is:
$y(x) = y_h + y_p = c_1 e^x + c_2 x e^x + x + 2 + \frac{1}{2} x^2 e^x$.

**Connection to Course Outcomes:**
This entire process of finding $y_p$ using undetermined coefficients is a direct application of **CO2**. We are actively *solving* non-homogeneous linear differential equations with constant coefficients. The success here is dependent on understanding the structure of the solutions and how to postulate them.

#### Method of Variation of Parameters

While undetermined coefficients is neat, it's limited. What if $f(x)$ is something like $\tan(x)$ or $1/x$? That's where **Variation of Parameters** comes in handy. This method is more general.

Recall the homogeneous solution $y_h(x) = c_1 y_1(x) + c_2 y_2(x)$, where $y_1(x)$ and $y_2(x)$ are two linearly independent solutions to the homogeneous equation.

The idea of Variation of Parameters is to "vary" these constant coefficients $c_1$ and $c_2$ to become functions of $x$, say $u_1(x)$ and $u_2(x)$, to form a particular solution:

$y_p(x) = u_1(x) y_1(x) + u_2(x) y_2(x)$

The task is to find $u_1'(x)$ and $u_2'(x)$. By differentiating $y_p$ and substituting into the original non-homogeneous ODE, we can derive a system of equations for $u_1'$ and $u_2'$.

For an ODE $y'' + P(x) y' + Q(x) y = f(x)$ (note: the coefficient of $y''$ must be 1 for this formulation, so you might need to divide the original ODE), the formulas for $u_1'$ and $u_2'$ are:

$u_1'(x) = -\frac{y_2(x) f(x)}{W(y_1, y_2)}$
$u_2'(x) = \frac{y_1(x) f(x)}{W(y_1, y_2)}$

where $W(y_1, y_2)$ is the **Wronskian** of $y_1$ and $y_2$. The Wronskian is a determinant:

$W(y_1, y_2) = \begin{vmatrix} y_1 & y_2 \\ y_1' & y_2' \end{vmatrix} = y_1 y_2' - y_2 y_1'$

**Why these formulas work (briefly):**
When you substitute $y_p = u_1 y_1 + u_2 y_2$ into $y'' + P y' + Q y = f$, and make certain simplifying assumptions (specifically, setting $u_1'' y_1 + u_2'' y_2 = 0$ and $u_1' y_1' + u_2' y_2' = 0$ as intermediate steps), you arrive at the system:

$u_1' y_1 + u_2' y_2 = 0$
$u_1' y_1' + u_2' y_2' = f(x)$ (This $f(x)$ is after dividing the original ODE by $a$, so the $y''$ coefficient is 1)

This is a linear system for $u_1'$ and $u_2'$, which can be solved using Cramer's rule (or by substitution). The denominator in Cramer's rule for both $u_1'$ and $u_2'$ turns out to be exactly the Wronskian $W(y_1, y_2)$.

Once we have $u_1'$ and $u_2'$, we integrate them to find $u_1(x)$ and $u_2(x)$:
$u_1(x) = \int u_1'(x) dx$
$u_2(x) = \int u_2'(x) dx$

(We can omit the constants of integration when finding $u_1$ and $u_2$ because we only need *any* particular solution, and those constants would be absorbed into the homogeneous solution $y_h$.)

Then, substitute these back into $y_p(x) = u_1(x) y_1(x) + u_2(x) y_2(x)$.

**Example:**
Let's solve $y'' + y = \sec(x)$ using Variation of Parameters.
The coefficient of $y''$ is already 1, so we use $f(x) = \sec(x)$.
Homogeneous equation: $y'' + y = 0$. Characteristic equation $r^2 + 1 = 0 \implies r = \pm i$.
The homogeneous solution is $y_h = c_1 \cos(x) + c_2 \sin(x)$.
So, we identify $y_1(x) = \cos(x)$ and $y_2(x) = \sin(x)$.

Now, calculate the Wronskian:
$W(y_1, y_2) = \begin{vmatrix} \cos(x) & \sin(x) \\ -\sin(x) & \cos(x) \end{vmatrix} = \cos(x) \cdot \cos(x) - \sin(x) \cdot (-\sin(x))$
$W(y_1, y_2) = \cos^2(x) + \sin^2(x) = 1$.

Now, find $u_1'$ and $u_2'$ using $f(x) = \sec(x)$:
$u_1'(x) = -\frac{y_2(x) f(x)}{W} = -\frac{\sin(x) \sec(x)}{1} = -\sin(x) \frac{1}{\cos(x)} = -\tan(x)$
$u_2'(x) = \frac{y_1(x) f(x)}{W} = \frac{\cos(x) \sec(x)}{1} = \cos(x) \frac{1}{\cos(x)} = 1$

Next, integrate $u_1'$ and $u_2'$ to find $u_1$ and $u_2$:
$u_1(x) = \int -\tan(x) dx = \int \frac{\sin(x)}{\cos(x)} dx$. Let $u = \cos(x)$, then $du = -\sin(x) dx$.
$u_1(x) = \int \frac{-du}{u} = -\ln|u| = -\ln|\cos(x)|$. We can write this as $\ln|\sec(x)|$.

$u_2(x) = \int 1 dx = x$.

Now, construct the particular solution:
$y_p(x) = u_1(x) y_1(x) + u_2(x) y_2(x)$
$y_p(x) = (-\ln|\cos(x)|) \cos(x) + (x) \sin(x)$
$y_p(x) = x \sin(x) - \cos(x) \ln|\cos(x)|$

The general solution is $y(x) = y_h + y_p = c_1 \cos(x) + c_2 \sin(x) + x \sin(x) - \cos(x) \ln|\cos(x)|$.

**Connection to Course Outcomes:**
Again, this directly addresses **CO2**. The ability to derive and apply these formulas for $u_1'$ and $u_2'$, and then perform the integration, is key to solving non-homogeneous ODEs when Undetermined Coefficients might fail. The calculation of the Wronskian also touches upon concepts of linear independence, which are fundamental.

### Initial Conditions and Boundary Value Problems

Often, we're not just asked to find the general solution, but a *specific* solution that satisfies given initial conditions (ICs) or boundary conditions (BCs).

*   **Initial Conditions (ICs):** These specify the value of the solution and its derivative at a single point, usually $x=0$. For a second-order ODE, we need two ICs, e.g., $y(x_0) = y_0$ and $y'(x_0) = y_1$.
*   **Boundary Value Problems (BVPs):** These specify the solution at two different points, e.g., $y(a) = y_a$ and $y(b) = y_b$.

Once you have the general solution $y(x) = y_h(x) + y_p(x)$, you substitute the ICs or BCs into this general solution to solve for the unknown constants $c_1$ and $c_2$ (or whatever constants appear in $y_h$).

**Example revisited:**
For $y'' - 2y' + y = x + e^x$, we found the general solution:
$y(x) = c_1 e^x + c_2 x e^x + x + 2 + \frac{1}{2} x^2 e^x$.

Suppose we are given initial conditions $y(0) = 1$ and $y'(0) = 0$.

First, apply $y(0) = 1$:
$y(0) = c_1 e^0 + c_2 (0) e^0 + 0 + 2 + \frac{1}{2} (0)^2 e^0$
$1 = c_1(1) + 0 + 0 + 2 + 0$
$1 = c_1 + 2 \implies c_1 = -1$.

Now, we need $y'(x)$. Let's differentiate our general solution:
$y'(x) = c_1 e^x + c_2 (1 \cdot e^x + x e^x) + 1 + \frac{1}{2} (2x e^x + x^2 e^x)$
$y'(x) = c_1 e^x + c_2 e^x + c_2 x e^x + 1 + x e^x + \frac{1}{2} x^2 e^x$

Now, apply $y'(0) = 0$:
$y'(0) = c_1 e^0 + c_2 e^0 + c_2 (0) e^0 + 1 + (0) e^0 + \frac{1}{2} (0)^2 e^0$
$0 = c_1(1) + c_2(1) + 0 + 1 + 0 + 0$
$0 = c_1 + c_2 + 1$

We already found $c_1 = -1$. Substitute that in:
$0 = -1 + c_2 + 1 \implies c_2 = 0$.

So, the specific solution satisfying the ICs is:
$y(x) = -e^x + 0 \cdot x e^x + x + 2 + \frac{1}{2} x^2 e^x$
$y(x) = -e^x + x + 2 + \frac{1}{2} x^2 e^x$.

This step of finding specific constants is where many exam problems will test your understanding after you've derived the general solution.

### Practical Examples and Analogies

Let's tie these concepts to some physical situations.

**1. Forced Harmonic Oscillator (Mechanical Spring-Mass System):**
Consider a mass $m$ attached to a spring with spring constant $k$, subject to damping coefficient $b$, and an external driving force $F(t)$. The equation of motion is:
$m y'' + b y' + k y = F(t)$
where $y(t)$ is the displacement from equilibrium.

*   **Homogeneous part ($m y'' + b y' + k y = 0$):** Describes the system's behavior without the external force – free vibrations, which could be damped or undamped, leading to oscillatory or exponential decay.
*   **Non-homogeneous part ($F(t)$):** The external driving force. This could be a constant force (like gravity pulling down on a vertical spring), a sinusoidal force (like an engine vibration), or a more complex waveform.
*   **Particular Solution ($y_p$):** Represents the *steady-state* response of the system to the driving force. After initial transients die out, the system will oscillate at the frequency of the driving force (if it's sinusoidal).
*   **General Solution ($y_h + y_p$):** Represents the *total* motion, which is the sum of the transient response ($y_h$) and the steady-state response ($y_p$).

**Example:** A damped mass-spring system with $m=1$, $b=2$, $k=1$. The driving force is $F(t) = e^{-t}$.
The ODE is $y'' + 2y' + y = e^{-t}$.
Homogeneous equation: $y'' + 2y' + y = 0$. Characteristic equation: $r^2 + 2r + 1 = 0 \implies (r+1)^2 = 0$. Roots $r=-1$ (repeated).
$y_h = c_1 e^{-t} + c_2 t e^{-t}$.

For $y_p$, $f(t) = e^{-t}$. Initial guess $y_p = C e^{-t}$.
But $e^{-t}$ is part of $y_h$ (from $c_1 e^{-t}$).
Since $r=-1$ is a double root, we modify the guess to $y_p = C t^2 e^{-t}$.
$y_p' = C(2t e^{-t} - t^2 e^{-t}) = C(2t - t^2)e^{-t}$
$y_p'' = C((2 - 2t)e^{-t} - (2t - t^2)e^{-t}) = C(2 - 4t + t^2)e^{-t}$

Substitute into $y'' + 2y' + y = e^{-t}$:
$C(2 - 4t + t^2)e^{-t} + 2C(2t - t^2)e^{-t} + C t^2 e^{-t} = e^{-t}$
Divide by $e^{-t}$:
$C(2 - 4t + t^2 + 4t - 2t^2 + t^2) = 1$
$C(2) = 1 \implies C = 1/2$.
So, $y_p = \frac{1}{2} t^2 e^{-t}$.

General solution: $y(t) = c_1 e^{-t} + c_2 t e^{-t} + \frac{1}{2} t^2 e^{-t}$.

**2. Electrical Circuits (RLC Circuits):**
Consider an RLC series circuit with a voltage source $V(t)$. The equation for the charge $q(t)$ on the capacitor is:
$L q'' + R q' + \frac{1}{C} q = V(t)$
where $L$ is inductance, $R$ is resistance, and $C$ is capacitance.

*   **Homogeneous part ($L q'' + R q' + \frac{1}{C} q = 0$):** Describes the circuit's response when the voltage source is disconnected (free oscillations, possibly damped or oscillatory).
*   **Non-homogeneous part ($V(t)$):** The input voltage from the source. This could be a DC voltage ($V_0$), an AC voltage ($V_0 \sin(\omega t)$), or a step voltage.
*   **Particular Solution ($q_p$):** Represents the steady-state charge on the capacitor when the voltage source is applied continuously. For an AC source, this will be an AC charge at the same frequency.
*   **General Solution ($q_h + q_p$):** The total charge on the capacitor, including transient and steady-state components.

If we're interested in the current $i(t) = q'(t)$, we can differentiate the entire equation. If we're interested in the current directly, we can derive an equation for $i(t)$: $L i'' + R i' + \frac{1}{C} i = V'(t)$.

**Example:** An RL circuit with $R=10\Omega$, $L=1H$. The voltage source is a step voltage $V(t) = 5$V for $t \ge 0$.
The ODE for current $i(t)$ is $L i' + R i = V(t)$:
$i' + 10i = 5$.
This is a first-order non-homogeneous ODE. For our course, we're focused on second-order, but the principle is the same.
Homogeneous part: $i' + 10i = 0$. Characteristic equation: $r+10=0 \implies r=-10$.
$i_h = c_1 e^{-10t}$.
For $i_p$, $f(t) = 5$ (a constant polynomial). Guess $i_p = A$.
$i_p' = 0$. Substitute: $0 + 10A = 5 \implies A = 1/2$.
$i_p = 1/2$.
General solution: $i(t) = c_1 e^{-10t} + 1/2$.
If $i(0)=0$ (circuit is initially off), then $0 = c_1 e^0 + 1/2 \implies c_1 = -1/2$.
Specific solution: $i(t) = -\frac{1}{2} e^{-10t} + \frac{1}{2}$.

For a second-order example: RLC circuit with $R=0$, $L=1$, $C=1$. $V(t) = \sin(2t)$.
$q'' + q = \sin(2t)$.
$y_h = c_1 \cos(t) + c_2 \sin(t)$.
For $y_p$, $f(t) = \sin(2t)$. Guess $y_p = A \cos(2t) + B \sin(2t)$.
$y_p' = -2A \sin(2t) + 2B \cos(2t)$
$y_p'' = -4A \cos(2t) - 4B \sin(2t)$
Substitute into $q'' + q = \sin(2t)$:
$(-4A \cos(2t) - 4B \sin(2t)) + (A \cos(2t) + B \sin(2t)) = \sin(2t)$
$(-3A) \cos(2t) + (-3B) \sin(2t) = 0 \cos(2t) + 1 \sin(2t)$
$-3A = 0 \implies A = 0$.
$-3B = 1 \implies B = -1/3$.
$y_p = -\frac{1}{3} \sin(2t)$.
General solution: $q(t) = c_1 \cos(t) + c_2 \sin(t) - \frac{1}{3} \sin(2t)$.

These examples highlight the practical significance of solving non-homogeneous ODEs. The ability to predict the system's response to external inputs is fundamental in engineering design and analysis.

**Key Takeaways for Exams:**

1.  **Identify the form of $f(x)$:** This dictates the method (Undetermined Coefficients vs. Variation of Parameters) and the initial guess for $y_p$.
2.  **Know the Modification Rule:** This is *critical* for Undetermined Coefficients. Always check if your guess for $y_p$ contains terms from $y_h$. Common mistake here!
3.  **Practice both methods:** While Undetermined Coefficients is often faster, Variation of Parameters is essential for general cases.
4.  **Wronskian calculation:** Be comfortable calculating the Wronskian.
5.  **Integration is key:** Both methods require solid integration skills.
6.  **Initial/Boundary Conditions:** Don't forget to use them to find the specific constants for the final answer.

Remember, mastering non-homogeneous ODEs is a significant step in your mathematical toolkit for electrical and physical sciences. It bridges the gap between theoretical understanding of system behavior and predicting real-world responses.

---

### Sample Questions and Answers

**Question 1 (Conceptual - CO2):**
The general solution of a non-homogeneous linear ODE is given by $y(x) = y_h(x) + y_p(x)$. Explain what $y_h(x)$ and $y_p(x)$ represent in terms of the system's behavior.

**Answer:**
*   $y_h(x)$ (the homogeneous solution or complementary function) represents the **natural response** or **transient response** of the system. It describes how the system would behave based solely on its inherent properties (e.g., mass, spring constant, damping) if there were no external input or forcing function. It often decays over time or represents undamped oscillations.
*   $y_p(x)$ (the particular solution) represents the **forced response** or **steady-state response** of the system. It describes how the system settles down and responds directly to the specific non-homogeneous term or forcing function $f(x)$. It persists as long as the forcing function is present.

**Question 2 (Exam-Oriented - Method of Undetermined Coefficients - CO2):**
Find the general solution to the differential equation $y'' - 4y = e^{2x}$.

**Answer:**
1.  **Homogeneous Solution ($y_h$):**
    The characteristic equation is $r^2 - 4 = 0$, which gives $r^2 = 4$, so $r = \pm 2$.
    The homogeneous solution is $y_h(x) = c_1 e^{2x} + c_2 e^{-2x}$.

2.  **Particular Solution ($y_p$):**
    The non-homogeneous term is $f(x) = e^{2x}$.
    Our initial guess for $y_p$ would be $C e^{2x}$.
    However, we see that $e^{2x}$ is already a term in $y_h$ (corresponding to the root $r=2$). Since $r=2$ is a simple root of the characteristic equation, we must multiply our guess by $x$.
    Modified guess: $y_p(x) = C x e^{2x}$.

    Now, find the derivatives:
    $y_p' = C(1 \cdot e^{2x} + x \cdot 2e^{2x}) = C(1 + 2x)e^{2x}$
    $y_p'' = C(2e^{2x} + (1+2x)2e^{2x}) = C(2 + 2 + 4x)e^{2x} = C(4 + 4x)e^{2x}$

    Substitute into the ODE: $y'' - 4y = e^{2x}$
    $C(4 + 4x)e^{2x} - 4(C x e^{2x}) = e^{2x}$
    $C(4 + 4x - 4x)e^{2x} = e^{2x}$
    $C(4)e^{2x} = e^{2x}$

    Equating coefficients of $e^{2x}$: $4C = 1 \implies C = 1/4$.
    So, $y_p(x) = \frac{1}{4} x e^{2x}$.

3.  **General Solution:**
    The general solution is $y(x) = y_h(x) + y_p(x)$.
    $y(x) = c_1 e^{2x} + c_2 e^{-2x} + \frac{1}{4} x e^{2x}$.

**Question 3 (Exam-Oriented - Method of Variation of Parameters - CO2):**
Find the general solution to the differential equation $y'' + 4y = \tan(2x)$.

**Answer:**
1.  **Homogeneous Solution ($y_h$):**
    The characteristic equation is $r^2 + 4 = 0$, which gives $r^2 = -4$, so $r = \pm 2i$.
    The homogeneous solution is $y_h(x) = c_1 \cos(2x) + c_2 \sin(2x)$.
    So, $y_1(x) = \cos(2x)$ and $y_2(x) = \sin(2x)$.

2.  **Wronskian:**
    $W(y_1, y_2) = \begin{vmatrix} \cos(2x) & \sin(2x) \\ -2\sin(2x) & 2\cos(2x) \end{vmatrix}$
    $W = \cos(2x)(2\cos(2x)) - \sin(2x)(-2\sin(2x))$
    $W = 2\cos^2(2x) + 2\sin^2(2x) = 2(\cos^2(2x) + \sin^2(2x)) = 2(1) = 2$.

3.  **Particular Solution ($y_p$) using Variation of Parameters:**
    Here, $f(x) = \tan(2x)$.
    $u_1'(x) = -\frac{y_2(x) f(x)}{W} = -\frac{\sin(2x) \tan(2x)}{2} = -\frac{\sin(2x)}{2} \frac{\sin(2x)}{\cos(2x)} = -\frac{\sin^2(2x)}{2\cos(2x)}$
    $u_2'(x) = \frac{y_1(x) f(x)}{W} = \frac{\cos(2x) \tan(2x)}{2} = \frac{\cos(2x)}{2} \frac{\sin(2x)}{\cos(2x)} = \frac{\sin(2x)}{2}$

    Integrate $u_2'$:
    $u_2(x) = \int \frac{\sin(2x)}{2} dx = \frac{1}{2} \int \sin(2x) dx = \frac{1}{2} (-\frac{1}{2}\cos(2x)) = -\frac{1}{4}\cos(2x)$.

    Integrate $u_1'$:
    $u_1(x) = -\frac{1}{2} \int \frac{\sin^2(2x)}{\cos(2x)} dx$.
    Use $\sin^2(\theta) = 1 - \cos^2(\theta)$:
    $u_1(x) = -\frac{1}{2} \int \frac{1 - \cos^2(2x)}{\cos(2x)} dx = -\frac{1}{2} \int (\frac{1}{\cos(2x)} - \cos(2x)) dx$
    $u_1(x) = -\frac{1}{2} \int (\sec(2x) - \cos(2x)) dx$
    $u_1(x) = -\frac{1}{2} [\frac{1}{2}\ln|\sec(2x) + \tan(2x)| - \frac{1}{2}\sin(2x)]$
    $u_1(x) = -\frac{1}{4}\ln|\sec(2x) + \tan(2x)| + \frac{1}{4}\sin(2x)$.

    Construct $y_p$:
    $y_p(x) = u_1(x) y_1(x) + u_2(x) y_2(x)$
    $y_p(x) = (-\frac{1}{4}\ln|\sec(2x) + \tan(2x)| + \frac{1}{4}\sin(2x)) \cos(2x) + (-\frac{1}{4}\cos(2x)) \sin(2x)$
    $y_p(x) = -\frac{1}{4}\cos(2x)\ln|\sec(2x) + \tan(2x)| + \frac{1}{4}\sin(2x)\cos(2x) - \frac{1}{4}\cos(2x)\sin(2x)$
    $y_p(x) = -\frac{1}{4}\cos(2x)\ln|\sec(2x) + \tan(2x)|$.

4.  **General Solution:**
    $y(x) = y_h(x) + y_p(x)$
    $y(x) = c_1 \cos(2x) + c_2 \sin(2x) - \frac{1}{4}\cos(2x)\ln|\sec(2x) + \tan(2x)|$.

**Question 4 (Conceptual/Application - CO2):**
Consider a mechanical system modeled by $y'' + y = \cos(\omega t)$. Explain how the behavior of the particular solution $y_p$ changes as $\omega$ approaches 1 (the natural frequency of the homogeneous system). What is this phenomenon called?

**Answer:**
The natural frequency of the homogeneous system $y''+y=0$ is $\omega_0 = 1$.
When $\omega \neq 1$, $f(t) = \cos(\omega t)$. The guess for $y_p$ is $A \cos(\omega t) + B \sin(\omega t)$.
Substituting this leads to a particular solution where the amplitude of oscillation is constant and depends on $\omega$.

However, as $\omega \to 1$, we have a situation where the driving frequency approaches the natural frequency. This is **resonance**.
If $\omega = 1$, the ODE is $y'' + y = \cos(t)$.
The homogeneous solution is $y_h = c_1 \cos(t) + c_2 \sin(t)$.
Since $\cos(t)$ is part of $y_h$, our guess for $y_p$ must be modified: $y_p = t(A \cos(t) + B \sin(t))$.
After differentiation and substitution, it can be shown that $y_p = \frac{1}{2} t \sin(t)$.

The general solution becomes $y(t) = c_1 \cos(t) + c_2 \sin(t) + \frac{1}{2} t \sin(t)$.
Notice the term $\frac{1}{2} t \sin(t)$. As $t$ increases, the amplitude of this term grows linearly with $t$. This means the oscillations become uncontrollably large. Resonance causes a significant amplification of the system's response.

**Question 5 (Application with ICs - CO2):**
Solve the initial value problem: $y'' - 2y' + y = 2e^x$, with $y(0) = 1$ and $y'(0) = 2$.

**Answer:**
1.  **Homogeneous Solution ($y_h$):**
    Characteristic equation: $r^2 - 2r + 1 = 0 \implies (r-1)^2 = 0$. Roots $r=1$ (repeated).
    $y_h(x) = c_1 e^x + c_2 x e^x$.

2.  **Particular Solution ($y_p$):**
    $f(x) = 2e^x$.
    Our initial guess is $C e^x$. But $e^x$ and $xe^x$ are in $y_h$. Since $r=1$ is a double root, we modify our guess by multiplying by $x^2$.
    Guess: $y_p(x) = C x^2 e^x$.
    $y_p' = C(2x e^x + x^2 e^x) = C(2x + x^2)e^x$
    $y_p'' = C((2+2x)e^x + (2x+x^2)e^x) = C(2+4x+x^2)e^x$

    Substitute into $y'' - 2y' + y = 2e^x$:
    $C(2+4x+x^2)e^x - 2C(2x+x^2)e^x + C x^2 e^x = 2e^x$
    Divide by $e^x$:
    $C(2+4x+x^2 - 4x - 2x^2 + x^2) = 2$
    $C(2) = 2 \implies C = 1$.
    So, $y_p(x) = x^2 e^x$.

3.  **General Solution:**
    $y(x) = y_h(x) + y_p(x) = c_1 e^x + c_2 x e^x + x^2 e^x$.

4.  **Apply Initial Conditions:**
    $y(0) = 1$:
    $y(0) = c_1 e^0 + c_2 (0) e^0 + (0)^2 e^0 = c_1$.
    So, $c_1 = 1$.

    Now, find $y'(x)$:
    $y'(x) = c_1 e^x + c_2(1 \cdot e^x + x e^x) + (2x e^x + x^2 e^x)$
    $y'(x) = c_1 e^x + c_2 e^x + c_2 x e^x + 2x e^x + x^2 e^x$.

    $y'(0) = 2$:
    $y'(0) = c_1 e^0 + c_2 e^0 + c_2 (0) e^0 + 2(0) e^0 + (0)^2 e^0 = c_1 + c_2$.
    So, $c_1 + c_2 = 2$.
    Since $c_1 = 1$, we get $1 + c_2 = 2 \implies c_2 = 1$.

5.  **Specific Solution:**
    Substitute $c_1=1$ and $c_2=1$ into the general solution:
    $y(x) = 1 e^x + 1 x e^x + x^2 e^x$
    $y(x) = (1 + x + x^2)e^x$.
