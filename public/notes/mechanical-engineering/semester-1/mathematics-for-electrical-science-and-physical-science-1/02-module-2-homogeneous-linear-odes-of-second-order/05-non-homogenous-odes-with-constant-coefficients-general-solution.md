---
title: "Non homogenous ODEs (with constant coefficients) - General solution"
subject: "MATHEMATICS FOR ELECTRICAL SCIENCE AND 
PHYSICAL  SCIENCE - 1"
module: "Module 2: Homogeneous linear ODEs of second order"
branch: "Mechanical Engineering"
semester: 1
topicId: "68bd1edefeb4799d95e8354b"
status: "completed"
scrapedAt: "2026-05-20T17:39:20.979Z"
---
# Mathematics for Electrical Science and Physical Science - 1
## Module 2: Homogeneous Linear ODEs of Second Order
### Topic: Non-Homogeneous ODEs with Constant Coefficients - General Solution

Welcome back, everyone! In our previous sessions, we delved into the world of homogeneous linear differential equations with constant coefficients. We learned how to find the complementary function, or $y_c$, which represents the general solution to the associated homogeneous equation. This is a crucial foundation because, as we'll see today, the solution to a non-homogeneous ODE is built upon this very same complementary function.

Today, we're tackling **Non-Homogeneous Linear ODEs with Constant Coefficients**. These are the equations that often model real-world phenomena more accurately because, unlike their homogeneous counterparts, they include forcing functions or external influences that drive the system. Think of applying a voltage to a circuit, or a force to a mechanical system – these are the "non-homogeneous" parts. Our goal is to understand how to find the **General Solution** for these types of equations.

This topic is absolutely central to achieving **Course Outcome 2 (CO2): Solve homogeneous and non-homogeneous linear differential equations with constant coefficients.** We're moving from the "homogeneous" part to the "non-homogeneous" part, and understanding the general solution is key here. The knowledge level we're aiming for is K3, which means we need to be able to *apply* these methods to solve problems.

### Understanding the Structure of Non-Homogeneous ODEs

First, let's remind ourselves what a second-order linear differential equation with constant coefficients looks like. It's generally expressed as:

$a y'' + b y' + c y = f(x)$

where $a$, $b$, and $c$ are constants, and importantly, $f(x)$ is *not* identically zero. If $f(x)$ were zero, it would be a homogeneous equation, which we've already mastered. The function $f(x)$ is often called the **forcing function** or the **non-homogeneous term**.

Now, the beauty of linear differential equations, as emphasized in texts like Kreyszig's *Advanced Engineering Mathematics*, lies in the **superposition principle**. This principle tells us that the general solution to a non-homogeneous linear ODE is the sum of two parts:

$y(x) = y_c(x) + y_p(x)$

Let's break down these two components:

*   **$y_c(x)$: The Complementary Function (or Homogeneous Solution)**
    This is the general solution to the *associated homogeneous equation*: $a y'' + b y' + c y = 0$. We've already covered this extensively. You'll find the characteristic equation $ar^2 + br + c = 0$, and based on the roots (real distinct, real repeated, or complex conjugate), you'll write $y_c$ in its standard forms. This part captures the intrinsic behavior of the system itself, without any external influence.

*   **$y_p(x)$: The Particular Solution**
    This is *any* function that satisfies the original non-homogeneous equation $a y'' + b y' + c y = f(x)$. It represents the system's response to the specific forcing function $f(x)$. This is the new piece of the puzzle we need to learn how to find today!

So, the general solution $y(x)$ is simply the sum of the system's natural response ($y_c$) and its forced response ($y_p$). This is a fundamental concept, so **remember this: General Solution = Complementary Function + Particular Solution**.

### Methods for Finding the Particular Solution ($y_p$)

The challenge, then, is to find a suitable $y_p$. There are a couple of primary methods for doing this, and their suitability often depends on the form of the forcing function $f(x)$.

#### Method 1: The Method of Undetermined Coefficients

This is a very powerful and often the most straightforward method when the forcing function $f(x)$ is of a specific, well-behaved form. These forms are typically:

*   Polynomials in $x$ (e.g., $3x^2 + 5$)
*   Exponential functions (e.g., $e^{kx}$)
*   Sine or Cosine functions (e.g., $\sin(3x)$, $\cos(2x)$)
*   Sums and products of these types.

The core idea here is to **guess** the form of the particular solution $y_p$ based on the form of $f(x)$, and then use the differential equation to determine the coefficients in our guess. We'll use "undetermined coefficients" because we don't know their values yet.

Let's walk through the strategy with some examples, just like we're building the solution step-by-step on a blackboard.

**The Strategy:**

1.  **Identify the form of $f(x)$.**
2.  **Make an educated guess for $y_p(x)$**. The guess should be a function of the same form as $f(x)$, but with unknown coefficients. For example:
    *   If $f(x)$ is a polynomial of degree $n$, guess $y_p(x)$ to be a general polynomial of degree $n$.
    *   If $f(x) = Ae^{kx}$, guess $y_p(x) = Ce^{kx}$.
    *   If $f(x) = A\sin(\omega x) + B\cos(\omega x)$, guess $y_p(x) = C\sin(\omega x) + D\cos(\omega x)$.
    *   If $f(x)$ is a sum, guess $y_p(x)$ to be the sum of the guesses for each term.
    *   If $f(x)$ is a product, guess $y_p(x)$ to be the product of the guesses for each factor.

3.  **Crucial Modification Rule:** **If any term in your initial guess for $y_p(x)$ is already a solution to the *homogeneous* equation (i.e., it's part of $y_c(x)$), you must multiply your guess by $x$ (or $x^2$ if necessary) until no term in the modified guess is a solution to the homogeneous equation.** This is a critical step to avoid getting a trivial solution for $y_p$.

4.  **Substitute the guess** $y_p(x)$ and its derivatives ($y_p'(x)$, $y_p''(x)$) into the original non-homogeneous ODE.

5.  **Equate coefficients** of like terms on both sides of the equation. This will give you a system of algebraic equations for the unknown coefficients.

6.  **Solve the system of equations** to find the values of the coefficients.

7.  **Substitute these coefficients back into your guess** to get the particular solution $y_p(x)$.

8.  **Form the general solution:** $y(x) = y_c(x) + y_p(x)$.

Let's try an example to solidify this.

**Example 1: Polynomial Forcing Function**

Consider the ODE: $y'' - 3y' + 2y = 4x$

1.  **$f(x) = 4x$**. This is a polynomial of degree 1.
2.  **Initial Guess for $y_p$**: Since $f(x)$ is a linear polynomial ($Ax+B$), we guess $y_p(x) = Ax + B$.
3.  **Check against $y_c$**: First, we need $y_c$. The characteristic equation is $r^2 - 3r + 2 = 0$, which factors as $(r-1)(r-2) = 0$. The roots are $r_1=1$ and $r_2=2$. So, $y_c(x) = c_1e^x + c_2e^{2x}$.
    Now, compare our guess $y_p(x) = Ax + B$ with $y_c(x) = c_1e^x + c_2e^{2x}$. Are any terms in $Ax+B$ of the form $e^x$ or $e^{2x}$? No. So, our initial guess is fine.
4.  **Substitute and find derivatives**:
    $y_p(x) = Ax + B$
    $y_p'(x) = A$
    $y_p''(x) = 0$

    Substitute into $y'' - 3y' + 2y = 4x$:
    $(0) - 3(A) + 2(Ax + B) = 4x$
    $-3A + 2Ax + 2B = 4x$
    $2Ax + (2B - 3A) = 4x$

5.  **Equate Coefficients**:
    *   Coefficient of $x$: $2A = 4$
    *   Constant term: $2B - 3A = 0$

6.  **Solve for Coefficients**:
    From $2A = 4$, we get $A = 2$.
    Substitute $A=2$ into $2B - 3A = 0$: $2B - 3(2) = 0 \implies 2B - 6 = 0 \implies 2B = 6 \implies B = 3$.

7.  **Particular Solution**: Substitute $A=2$ and $B=3$ back into our guess:
    $y_p(x) = 2x + 3$

8.  **General Solution**: $y(x) = y_c(x) + y_p(x)$
    $y(x) = c_1e^x + c_2e^{2x} + 2x + 3$

And there we have it! The general solution for this ODE. Notice how $y_p$ is a simple linear function, mirroring the $4x$ on the right side.

**Example 2: Exponential Forcing Function with a Twist**

Consider: $y'' + y = e^{-x}$

1.  **$f(x) = e^{-x}$**. This is an exponential function.
2.  **Initial Guess for $y_p$**: We guess $y_p(x) = Ce^{-x}$.
3.  **Check against $y_c$**: Characteristic equation: $r^2 + 1 = 0$. Roots are $r = \pm i$. So, $y_c(x) = c_1\cos(x) + c_2\sin(x)$.
    Our guess is $Ce^{-x}$. Is $e^{-x}$ a term in $y_c$? No. So, the guess is fine.
4.  **Substitute and find derivatives**:
    $y_p(x) = Ce^{-x}$
    $y_p'(x) = -Ce^{-x}$
    $y_p''(x) = Ce^{-x}$

    Substitute into $y'' + y = e^{-x}$:
    $(Ce^{-x}) + (Ce^{-x}) = e^{-x}$
    $2Ce^{-x} = e^{-x}$

5.  **Equate Coefficients**: $2C = 1$
6.  **Solve for Coefficients**: $C = 1/2$.
7.  **Particular Solution**: $y_p(x) = \frac{1}{2}e^{-x}$
8.  **General Solution**: $y(x) = c_1\cos(x) + c_2\sin(x) + \frac{1}{2}e^{-x}$

**Example 3: Trigonometric Forcing Function**

Consider: $y'' + 4y = \sin(2x)$

1.  **$f(x) = \sin(2x)$**. This is a sine function.
2.  **Initial Guess for $y_p$**: A general guess for $\sin(2x)$ would be $A\cos(2x) + B\sin(2x)$.
3.  **Check against $y_c$**: Characteristic equation: $r^2 + 4 = 0$. Roots are $r = \pm 2i$. So, $y_c(x) = c_1\cos(2x) + c_2\sin(2x)$.
    Now, look at our guess: $A\cos(2x) + B\sin(2x)$. Both $\cos(2x)$ and $\sin(2x)$ are present in $y_c(x)$! This is where the modification rule comes in. We must multiply our guess by $x$.
    *Modified Guess for $y_p$*: $y_p(x) = x(A\cos(2x) + B\sin(2x)) = Ax\cos(2x) + Bx\sin(2x)$.

4.  **Substitute and find derivatives**: This gets a bit more tedious, so let's be careful.
    $y_p = Ax\cos(2x) + Bx\sin(2x)$
    $y_p' = A(\cos(2x) - 2x\sin(2x)) + B(\sin(2x) + 2x\cos(2x))$
    $y_p' = (A+2Bx)\cos(2x) + (B-2Ax)\sin(2x)$

    $y_p'' = A(-2\sin(2x) - 2\sin(2x) - 4x\cos(2x)) + B(2\cos(2x) + 2\cos(2x) - 4x\sin(2x))$
    $y_p'' = A(-4\sin(2x) - 4x\cos(2x)) + B(4\cos(2x) - 4x\sin(2x))$
    $y_p'' = (-4A - 4Bx)\sin(2x) + (4B - 4Ax)\cos(2x)$
    $y_p'' = -4(Ax+B)\sin(2x) + 4(B-Ax)\cos(2x)$ --- let me recheck that sign for the Ax term. Ah, yes, it should be $y_p'' = (-4\sin(2x) - 4x\cos(2x))A + (4\cos(2x) - 4x\sin(2x))B$.
    $y_p'' = -4\sin(2x)A - 4x\cos(2x)A + 4\cos(2x)B - 4x\sin(2x)B$
    $y_p'' = (-4A - 4Bx)\sin(2x) + (4B - 4Ax)\cos(2x)$ --- This looks correct.

    Now substitute into $y'' + 4y = \sin(2x)$:
    $[-4A\sin(2x) - 4x\cos(2x)A - 4Bx\sin(2x) + 4B\cos(2x) - 4Ax\sin(2x)] + 4[Ax\cos(2x) + Bx\sin(2x)] = \sin(2x)$

    Let's group terms:
    Terms with $\sin(2x)$: $-4A\sin(2x) - 4Bx\sin(2x) + 4Bx\sin(2x) = -4A\sin(2x)$
    Terms with $\cos(2x)$: $-4x\cos(2x)A + 4B\cos(2x) + 4Ax\cos(2x) = 4B\cos(2x)$

    So, the equation becomes:
    $-4A\sin(2x) + 4B\cos(2x) = \sin(2x)$

5.  **Equate Coefficients**:
    *   Coefficient of $\sin(2x)$: $-4A = 1$
    *   Coefficient of $\cos(2x)$: $4B = 0$

6.  **Solve for Coefficients**:
    From $-4A = 1$, we get $A = -1/4$.
    From $4B = 0$, we get $B = 0$.

7.  **Particular Solution**: Substitute $A=-1/4$ and $B=0$ back into our modified guess $y_p(x) = x(A\cos(2x) + B\sin(2x))$:
    $y_p(x) = x(-\frac{1}{4}\cos(2x) + 0\sin(2x))$
    $y_p(x) = -\frac{1}{4}x\cos(2x)$

8.  **General Solution**: $y(x) = y_c(x) + y_p(x)$
    $y(x) = c_1\cos(2x) + c_2\sin(2x) - \frac{1}{4}x\cos(2x)$

This example highlights the importance of the modification rule. Without it, we would have arrived at a contradiction ($0 = \sin(2x)$), indicating an error in our approach. This is a common pitfall, so **always check your $y_p$ guess against $y_c$!**

**Example 4: Sum of Forcing Functions**

Consider: $y'' - y' = e^{2x} + x$

Here, $f(x)$ is a sum of two types of functions: $f_1(x) = e^{2x}$ and $f_2(x) = x$.
The strategy is to find a particular solution for each part separately and then add them.

1.  **$y_c$**: Characteristic equation: $r^2 - r = 0 \implies r(r-1) = 0$. Roots are $r_1=0$ and $r_2=1$.
    $y_c(x) = c_1e^{0x} + c_2e^{1x} = c_1 + c_2e^x$.

2.  **For $f_1(x) = e^{2x}$**:
    *   Guess $y_{p1}(x) = Ae^{2x}$.
    *   Check $y_c$: $e^{2x}$ is not in $y_c$. So, guess is fine.
    *   Derivatives: $y_{p1}' = 2Ae^{2x}$, $y_{p1}'' = 4Ae^{2x}$.
    *   Substitute: $4Ae^{2x} - 2Ae^{2x} = e^{2x} \implies 2Ae^{2x} = e^{2x}$.
    *   Equate coefficients: $2A = 1 \implies A = 1/2$.
    *   $y_{p1}(x) = \frac{1}{2}e^{2x}$.

3.  **For $f_2(x) = x$**:
    *   Guess $y_{p2}(x) = Bx + C$.
    *   Check $y_c$: $y_c$ contains a constant term ($c_1$). So, $Bx+C$ has a constant term $C$, which is part of $y_c$. We need to modify the guess.
    *   *Modified Guess for $y_{p2}$*: Multiply by $x$. $y_{p2}(x) = x(Bx+C) = Bx^2 + Cx$.
    *   Check again: $Bx^2 + Cx$. Are $Bx^2$ or $Cx$ in $y_c = c_1 + c_2e^x$? No. This is our correct guess.
    *   Derivatives: $y_{p2}' = 2Bx + C$, $y_{p2}'' = 2B$.
    *   Substitute into $y'' - y' = x$:
        $(2B) - (2Bx + C) = x$
        $2B - 2Bx - C = x$
        $-2Bx + (2B - C) = x$
    *   Equate coefficients:
        *   Coefficient of $x$: $-2B = 1 \implies B = -1/2$.
        *   Constant term: $2B - C = 0 \implies 2(-1/2) - C = 0 \implies -1 - C = 0 \implies C = -1$.
    *   $y_{p2}(x) = -\frac{1}{2}x^2 - x$.

4.  **Total Particular Solution**: $y_p(x) = y_{p1}(x) + y_{p2}(x) = \frac{1}{2}e^{2x} - \frac{1}{2}x^2 - x$.

5.  **General Solution**: $y(x) = y_c(x) + y_p(x)$
    $y(x) = c_1 + c_2e^x + \frac{1}{2}e^{2x} - \frac{1}{2}x^2 - x$.

This method of breaking down the forcing function is very common and efficient, as seen in Bird's *Higher Engineering Mathematics*.

#### Method 2: Variation of Parameters

The Method of Undetermined Coefficients is great, but it has limitations. What if $f(x)$ is something like $\tan(x)$ or $\ln(x)$? For these cases, and as a more general method, we turn to the **Variation of Parameters**. This method is discussed in detail in Anton's *Calculus* and Kreyszig's *Advanced Engineering Mathematics*.

This method is more systematic and less reliant on guessing, but often involves more complex integration.

Let's start with the non-homogeneous ODE:
$a y'' + b y' + c y = f(x)$

First, convert it to the standard form where the coefficient of $y''$ is 1:
$y'' + P(x)y' + Q(x)y = R(x)$
(In our case with constant coefficients, $P(x) = b/a$ and $Q(x) = c/a$, and $R(x) = f(x)/a$. For simplicity, let's assume $a=1$ from the start, so $y'' + by' + cy = f(x)$.)

We know the homogeneous solution is $y_c(x) = c_1y_1(x) + c_2y_2(x)$, where $y_1(x)$ and $y_2(x)$ are two linearly independent solutions.

The idea of Variation of Parameters is to replace the constants $c_1$ and $c_2$ in $y_c$ with functions, say $u_1(x)$ and $u_2(x)$:
$y_p(x) = u_1(x)y_1(x) + u_2(x)y_2(x)$

Now, we need to find $u_1'(x)$ and $u_2'(x)$ by substituting this form of $y_p$ into the ODE and applying some clever constraints to simplify the algebra. The derivation leads to the following formulas for $u_1'$ and $u_2'$:

$u_1'(x) = -\frac{y_2(x)R(x)}{W(y_1, y_2)}$
$u_2'(x) = \frac{y_1(x)R(x)}{W(y_1, y_2)}$

where $W(y_1, y_2)$ is the **Wronskian** of $y_1$ and $y_2$, defined as:
$W(y_1, y_2) = \begin{vmatrix} y_1 & y_2 \\ y_1' & y_2' \end{vmatrix} = y_1y_2' - y_2y_1'$

Once we have $u_1'(x)$ and $u_2'(x)$, we integrate them to find $u_1(x)$ and $u_2(x)$:
$u_1(x) = \int u_1'(x) dx$
$u_2(x) = \int u_2'(x) dx$

Then, we substitute these back into $y_p(x) = u_1(x)y_1(x) + u_2(x)y_2(x)$. The constants of integration from these indefinite integrals can be absorbed into the $y_c$ constants, so we typically omit them here for simplicity.

**Example 5: Using Variation of Parameters**

Consider: $y'' + y = \tan(x)$

1.  **$y_c$**: Characteristic equation: $r^2 + 1 = 0$. Roots are $r = \pm i$.
    So, $y_c(x) = c_1\cos(x) + c_2\sin(x)$.
    This means we can identify $y_1(x) = \cos(x)$ and $y_2(x) = \sin(x)$.
    And $R(x) = \tan(x)$.

2.  **Calculate the Wronskian**:
    $y_1 = \cos(x)$, $y_1' = -\sin(x)$
    $y_2 = \sin(x)$, $y_2' = \cos(x)$
    $W(y_1, y_2) = y_1y_2' - y_2y_1' = (\cos(x))(\cos(x)) - (\sin(x))(-\sin(x))$
    $W(y_1, y_2) = \cos^2(x) + \sin^2(x) = 1$.

3.  **Find $u_1'(x)$ and $u_2'(x)$**:
    $u_1'(x) = -\frac{y_2(x)R(x)}{W(y_1, y_2)} = -\frac{\sin(x)\tan(x)}{1} = -\sin(x) \cdot \frac{\sin(x)}{\cos(x)} = -\frac{\sin^2(x)}{\cos(x)}$
    $u_2'(x) = \frac{y_1(x)R(x)}{W(y_1, y_2)} = \frac{\cos(x)\tan(x)}{1} = \cos(x) \cdot \frac{\sin(x)}{\cos(x)} = \sin(x)$

4.  **Integrate to find $u_1(x)$ and $u_2(x)$**:
    *   For $u_2'(x) = \sin(x)$:
        $u_2(x) = \int \sin(x) dx = -\cos(x)$.

    *   For $u_1'(x) = -\frac{\sin^2(x)}{\cos(x)}$: This is a bit trickier. We can use $\sin^2(x) = 1 - \cos^2(x)$.
        $u_1'(x) = -\frac{1 - \cos^2(x)}{\cos(x)} = -\left(\frac{1}{\cos(x)} - \frac{\cos^2(x)}{\cos(x)}\right) = -(\sec(x) - \cos(x)) = \cos(x) - \sec(x)$.
        Now integrate:
        $u_1(x) = \int (\cos(x) - \sec(x)) dx = \int \cos(x) dx - \int \sec(x) dx$
        $u_1(x) = \sin(x) - \ln|\sec(x) + \tan(x)|$.

5.  **Form the Particular Solution**:
    $y_p(x) = u_1(x)y_1(x) + u_2(x)y_2(x)$
    $y_p(x) = (\sin(x) - \ln|\sec(x) + \tan(x)|)(\cos(x)) + (-\cos(x))(\sin(x))$
    $y_p(x) = \sin(x)\cos(x) - \cos(x)\ln|\sec(x) + \tan(x)| - \cos(x)\sin(x)$
    $y_p(x) = -\cos(x)\ln|\sec(x) + \tan(x)|$.

6.  **General Solution**: $y(x) = y_c(x) + y_p(x)$
    $y(x) = c_1\cos(x) + c_2\sin(x) - \cos(x)\ln|\sec(x) + \tan(x)|$.

This example shows how Variation of Parameters can handle functions that are not amenable to Undetermined Coefficients. The key is mastering the integration, which might require recalling various integration techniques, a skill honed in courses like those by Anton, Biven, and Davis.

### Connection to Course Outcomes

Let's revisit our Course Outcomes and see how today's topic directly contributes.

*   **CO2: Solve homogeneous and non-homogeneous linear differential equations with constant coefficients.**
    This entire session is dedicated to the "non-homogeneous" part of CO2. By learning to find both $y_c$ (from previous lessons) and $y_p$ (today), we are now equipped to find the *general solution* for non-homogeneous ODEs with constant coefficients, fulfilling CO2. For instance, if an electrical system has a natural oscillating behavior ($y_c$) and is driven by a constant voltage source ($f(x)$), this topic allows us to model the total current or voltage.

The skills we've discussed, like solving characteristic equations, determining the form of $y_p$, and integration techniques, are all applied in this context.

### Key Takeaways and Exam Tips

*   **The general solution is always $y = y_c + y_p$.** Never forget this structure.
*   **Method of Undetermined Coefficients:** Excellent for polynomial, exponential, and trigonometric $f(x)$.
    *   **Most common pitfall:** Forgetting to check the guess against $y_c$ and multiply by $x$ (or $x^2$). Be vigilant!
    *   **For $f(x) = P_n(x)e^{\alpha x}$**: Guess $y_p = x^s P_n(x)e^{\alpha x}$, where $s$ is the smallest non-negative integer such that no term in $y_p$ is a solution to the homogeneous equation.
    *   **For $f(x) = e^{\alpha x}(P_n(x)\cos(\beta x) + Q_m(x)\sin(\beta x))$**: Guess $y_p = x^s e^{\alpha x}( \text{polynomial of degree max(n,m)} \cos(\beta x) + \text{polynomial of degree max(n,m)} \sin(\beta x) )$.
*   **Variation of Parameters:** Works for any $f(x)$, but involves integration.
    *   **Wronskian** is your friend. Make sure you can compute it.
    *   The integration steps can be challenging. Practice your integration skills!
*   When in doubt about the form of $y_p$ for Undetermined Coefficients, assume the most general form and see if coefficients cancel out. If they lead to contradictions, you likely missed the modification rule.

Understanding these methods is crucial for analyzing systems in electrical science (like RLC circuits with external drivers) and physical science (like damped oscillators with periodic forces). The constant coefficients simplify the characteristic equation, making the $y_c$ part manageable, and our focus today has been on systematically handling the $f(x)$ term to find $y_p$.

### Sample Questions and Answers

**Question 1 (Conceptual):**
Why is the general solution of a non-homogeneous linear ODE with constant coefficients expressed as the sum of the complementary function and a particular solution? Explain the physical significance of each part.

**Answer 1:**
The general solution is the sum $y(x) = y_c(x) + y_p(x)$ due to the linearity of the differential equation and the superposition principle.
*   **$y_c(x)$ (Complementary Function):** This part represents the system's **natural or unforced response**. It describes how the system would behave on its own, governed solely by its internal dynamics (represented by the coefficients $a, b, c$). For example, in an electrical circuit, $y_c$ would describe the transient behavior due to initial conditions without any external power source.
*   **$y_p(x)$ (Particular Solution):** This part represents the system's **forced or steady-state response** to the external input or forcing function $f(x)$. It shows how the system reacts to the specific driving force applied to it. In the electrical circuit analogy, $y_p$ would represent the part of the current or voltage that persists as long as the external source is active.

The total response of the system is the combination of its natural tendency to respond and its specific reaction to external stimuli.

**Question 2 (Exam-Oriented - Undetermined Coefficients):**
Solve the differential equation: $y'' + 2y' + y = 3e^{-x}$

**Solution 2:**
The ODE is $y'' + 2y' + y = 3e^{-x}$.

1.  **Find $y_c$**:
    Characteristic equation: $r^2 + 2r + 1 = 0 \implies (r+1)^2 = 0$.
    The root is $r = -1$ (repeated).
    So, $y_c(x) = c_1e^{-x} + c_2xe^{-x}$.

2.  **Find $y_p$ using Undetermined Coefficients**:
    The forcing function is $f(x) = 3e^{-x}$.
    *   Initial guess: $y_p = Ae^{-x}$.
    *   Check against $y_c$: The term $e^{-x}$ is present in $y_c$. So, we must multiply by $x$.
    *   Second guess: $y_p = Axe^{-x}$.
    *   Check against $y_c$: The term $xe^{-x}$ is also present in $y_c$. So, we must multiply by $x$ again.
    *   Correct guess: $y_p = Ax^2e^{-x}$.

3.  **Calculate derivatives for $y_p = Ax^2e^{-x}$**:
    $y_p' = A(2xe^{-x} - x^2e^{-x}) = Ae^{-x}(2x - x^2)$
    $y_p'' = A[-e^{-x}(2x - x^2) + e^{-x}(2 - 2x)]$
    $y_p'' = Ae^{-x}[-2x + x^2 + 2 - 2x] = Ae^{-x}(x^2 - 4x + 2)$

4.  **Substitute into the ODE**:
    $Ae^{-x}(x^2 - 4x + 2) + 2[Ae^{-x}(2x - x^2)] + [Ax^2e^{-x}] = 3e^{-x}$

5.  **Simplify and equate coefficients**:
    Divide by $Ae^{-x}$ (assuming $A \neq 0$):
    $(x^2 - 4x + 2) + 2(2x - x^2) + x^2 = 3/A$
    $x^2 - 4x + 2 + 4x - 2x^2 + x^2 = 3/A$
    $(1 - 2 + 1)x^2 + (-4 + 4)x + 2 = 3/A$
    $0x^2 + 0x + 2 = 3/A$
    $2 = 3/A \implies A = 3/2$.

6.  **Particular Solution**:
    $y_p(x) = \frac{3}{2}x^2e^{-x}$.

7.  **General Solution**:
    $y(x) = y_c(x) + y_p(x) = c_1e^{-x} + c_2xe^{-x} + \frac{3}{2}x^2e^{-x}$.

**Question 3 (Conceptual/Exam-Oriented):**
When using the Method of Undetermined Coefficients, how do you determine the form of the particular solution $y_p(x)$ when the non-homogeneous term $f(x)$ is a product of a polynomial and a trigonometric function?

**Answer 3:**
When $f(x)$ is of the form $P_n(x)\cos(\omega x)$ or $P_n(x)\sin(\omega x)$, or a sum of such terms, the initial guess for $y_p(x)$ involves a polynomial of the same degree as $P_n(x)$ multiplied by both $\cos(\omega x)$ and $\sin(\omega x)$.

Specifically, if $f(x) = P_n(x)\cos(\omega x)$ or $f(x) = P_n(x)\sin(\omega x)$, the initial guess for $y_p(x)$ is:
$y_p(x) = (\text{General polynomial of degree } n)\cos(\omega x) + (\text{General polynomial of degree } n)\sin(\omega x)$

For example, if $f(x) = 3x^2\cos(2x)$:
*   $P_n(x)$ is $3x^2$ (degree $n=2$).
*   $\omega = 2$.
*   The initial guess for $y_p(x)$ is:
    $y_p(x) = (Ax^2 + Bx + C)\cos(2x) + (Dx^2 + Ex + F)\sin(2x)$.

**Crucially**, you must then check if any term in this guess is part of $y_c$. If it is, multiply the entire guess by $x$ (or $x^2$ if necessary). For example, if $y_c$ contains terms like $\cos(2x)$, $\sin(2x)$, or $x\cos(2x)$, you'd need to adjust the guess accordingly.

**Question 4 (Exam-Oriented - Variation of Parameters):**
Solve the differential equation: $y'' - y = \frac{e^x}{e^x + 1}$ using Variation of Parameters.

**Solution 4:**
The ODE is $y'' - y = \frac{e^x}{e^x + 1}$.

1.  **Find $y_c$**:
    Characteristic equation: $r^2 - 1 = 0 \implies r = \pm 1$.
    So, $y_c(x) = c_1e^x + c_2e^{-x}$.
    We can identify $y_1(x) = e^x$ and $y_2(x) = e^{-x}$.
    The forcing term is $R(x) = \frac{e^x}{e^x + 1}$.

2.  **Calculate the Wronskian**:
    $y_1 = e^x$, $y_1' = e^x$
    $y_2 = e^{-x}$, $y_2' = -e^{-x}$
    $W(y_1, y_2) = y_1y_2' - y_2y_1' = (e^x)(-e^{-x}) - (e^{-x})(e^x) = -1 - 1 = -2$.

3.  **Find $u_1'(x)$ and $u_2'(x)$**:
    $u_1'(x) = -\frac{y_2(x)R(x)}{W(y_1, y_2)} = -\frac{e^{-x} \cdot \frac{e^x}{e^x + 1}}{-2} = \frac{1}{2} \frac{e^{-x}e^x}{e^x + 1} = \frac{1}{2(e^x + 1)}$.
    $u_2'(x) = \frac{y_1(x)R(x)}{W(y_1, y_2)} = \frac{e^x \cdot \frac{e^x}{e^x + 1}}{-2} = -\frac{1}{2} \frac{e^{2x}}{e^x + 1}$.

4.  **Integrate to find $u_1(x)$ and $u_2(x)$**:
    *   For $u_1'(x) = \frac{1}{2(e^x + 1)}$:
        Let $u = e^x$, then $du = e^x dx = u dx$, so $dx = du/u$.
        $\int \frac{1}{2(u+1)} \frac{du}{u} = \frac{1}{2} \int \frac{1}{u(u+1)} du$.
        Using partial fractions: $\frac{1}{u(u+1)} = \frac{A}{u} + \frac{B}{u+1}$. $1 = A(u+1) + Bu$. If $u=0$, $A=1$. If $u=-1$, $1 = -B \implies B=-1$.
        So, $\frac{1}{2} \int (\frac{1}{u} - \frac{1}{u+1}) du = \frac{1}{2} (\ln|u| - \ln|u+1|) = \frac{1}{2} \ln\left|\frac{u}{u+1}\right|$.
        Substituting back $u=e^x$: $u_1(x) = \frac{1}{2} \ln\left(\frac{e^x}{e^x + 1}\right)$. (Since $e^x > 0$).

    *   For $u_2'(x) = -\frac{1}{2} \frac{e^{2x}}{e^x + 1}$:
        Let $u = e^x$, $du = e^x dx$. $e^{2x} = u^2$. $dx = du/u$.
        $\int -\frac{1}{2} \frac{u^2}{u+1} \frac{du}{u} = -\frac{1}{2} \int \frac{u}{u+1} du$.
        Perform algebraic division or rewrite: $\frac{u}{u+1} = \frac{u+1-1}{u+1} = 1 - \frac{1}{u+1}$.
        $-\frac{1}{2} \int (1 - \frac{1}{u+1}) du = -\frac{1}{2} (u - \ln|u+1|)$.
        Substituting back $u=e^x$: $u_2(x) = -\frac{1}{2} (e^x - \ln(e^x + 1))$.

5.  **Form the Particular Solution**:
    $y_p(x) = u_1(x)y_1(x) + u_2(x)y_2(x)$
    $y_p(x) = \left(\frac{1}{2} \ln\left(\frac{e^x}{e^x + 1}\right)\right) e^x + \left(-\frac{1}{2} (e^x - \ln(e^x + 1))\right) e^{-x}$
    $y_p(x) = \frac{1}{2}e^x \ln\left(\frac{e^x}{e^x + 1}\right) - \frac{1}{2}e^x e^{-x} + \frac{1}{2}e^{-x} \ln(e^x + 1)$
    $y_p(x) = \frac{1}{2}e^x \ln\left(\frac{e^x}{e^x + 1}\right) - \frac{1}{2} + \frac{1}{2}e^{-x} \ln(e^x + 1)$.

6.  **General Solution**:
    $y(x) = c_1e^x + c_2e^{-x} + \frac{1}{2}e^x \ln\left(\frac{e^x}{e^x + 1}\right) - \frac{1}{2} + \frac{1}{2}e^{-x} \ln(e^x + 1)$.
    Note: The $-\frac{1}{2}$ is a constant and can be absorbed into $c_2$ if desired, so $y(x) = c_1e^x + c'_2e^{-x} + \frac{1}{2}e^x \ln\left(\frac{e^x}{e^x + 1}\right) + \frac{1}{2}e^{-x} \ln(e^x + 1)$.

This question is a good test of integration and algebraic manipulation skills.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=XZo4xyJXC2k) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=Kb3K1Ui4454) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=IYdiKeQ9xME) |
