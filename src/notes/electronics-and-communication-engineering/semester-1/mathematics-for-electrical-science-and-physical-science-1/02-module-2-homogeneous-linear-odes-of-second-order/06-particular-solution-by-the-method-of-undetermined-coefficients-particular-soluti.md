---
title: "Particular solution by the method of undetermined coefficients (Particular solutions for the functions 𝑘𝑒 γx"
subject: "MATHEMATICS FOR ELECTRICAL SCIENCE AND PHYSICAL 
SCIENCE - 1"
module: "Module 2: Homogeneous linear ODEs of second order"
branch: "Electronics and Communication Engineering"
semester: 1
topicId: "68b7dc8f20463779487d9fbb"
status: "completed"
scrapedAt: "2026-05-23T17:34:51.995Z"
---
# Module 2: Homogeneous Linear ODEs of Second Order
## Topic: Particular Solution by the Method of Undetermined Coefficients (for functions $ke^{\gamma x}$)

Welcome, everyone! In this session, we're diving deeper into solving non-homogeneous second-order linear differential equations. We've already mastered the art of finding the complementary solution (the solution to the homogeneous part, $y_c$), which is fantastic! Now, the real challenge is to find the particular solution, $y_p$, which is the solution that specifically addresses the forcing function or the non-homogeneous term on the right-hand side of our ODE.

Today, our focus is on a very common and powerful technique: the **Method of Undetermined Coefficients**. This method is our go-to when the non-homogeneous term, $f(x)$, has a specific structure. We're going to start with one of the simplest, yet most fundamental, forms of $f(x)$: functions of the type $ke^{\gamma x}$, where $k$ and $\gamma$ are constants. This is a crucial building block, and understanding it will pave the way for more complex scenarios.

Remember, our general goal when solving a non-homogeneous linear ODE of the form $ay'' + by' + cy = f(x)$ is that the **general solution** is given by $y = y_c + y_p$. We're focusing on finding that $y_p$ today.

### The Core Idea: Making an Educated Guess

The Method of Undetermined Coefficients is all about making an **educated guess** for the form of the particular solution, $y_p$. This guess is based directly on the form of the non-homogeneous term $f(x)$. The "undetermined coefficients" are the constants within our guess that we will later solve for.

Think of it like this: if you're trying to find a specific tool to fix a specific problem, you wouldn't randomly grab anything. You'd look at the problem (say, a loose screw) and think, "Ah, I need a screwdriver." Similarly, when $f(x)$ is an exponential function like $ke^{\gamma x}$, we suspect that our particular solution $y_p$ will also involve an exponential function.

#### Case 1: $f(x) = ke^{\gamma x}$, where $\gamma$ is NOT a root of the characteristic equation.

Let's say we have an ODE like $ay'' + by' + cy = ke^{\gamma x}$, and the characteristic equation $ar^2 + br + c = 0$ has roots that are *not* equal to $\gamma$.

Since our $f(x)$ is $ke^{\gamma x}$, our initial educated guess for $y_p$ is of the same exponential form. We hypothesize that $y_p$ will be of the form:

$y_p = Ae^{\gamma x}$

Here, 'A' is our *undetermined coefficient*. Our task now is to find the value of A.

How do we do that? We substitute our guess back into the original ODE. For that, we need the first and second derivatives of $y_p$:

*   $y_p' = \frac{d}{dx}(Ae^{\gamma x}) = A\gamma e^{\gamma x}$
*   $y_p'' = \frac{d}{dx}(A\gamma e^{\gamma x}) = A\gamma^2 e^{\gamma x}$

Now, plug these into the ODE $ay'' + by' + cy = ke^{\gamma x}$:

$a(A\gamma^2 e^{\gamma x}) + b(A\gamma e^{\gamma x}) + c(Ae^{\gamma x}) = ke^{\gamma x}$

We can factor out $Ae^{\gamma x}$ from the left side:

$A(a\gamma^2 + b\gamma + c)e^{\gamma x} = ke^{\gamma x}$

For this equation to hold true for all $x$, the coefficients of $e^{\gamma x}$ on both sides must be equal. So, we equate them:

$A(a\gamma^2 + b\gamma + c) = k$

Now, we can solve for A:

$A = \frac{k}{a\gamma^2 + b\gamma + c}$

Crucially, we assumed that $\gamma$ is *not* a root of the characteristic equation $ar^2 + br + c = 0$. This means that the denominator $(a\gamma^2 + b\gamma + c)$ is not zero, and we can indeed find a unique value for A.

**So, if $\gamma$ is not a root, the particular solution is $y_p = \left(\frac{k}{a\gamma^2 + b\gamma + c}\right) e^{\gamma x}$.**

Let's illustrate with an example, perhaps something relatable to circuits or simple mechanical systems.

**Example 1:** Solve the ODE $y'' - 5y' + 6y = 4e^{2x}$.

First, let's find the complementary solution $y_c$. The characteristic equation is $r^2 - 5r + 6 = 0$.
Factoring this, we get $(r-2)(r-3) = 0$. The roots are $r_1 = 2$ and $r_2 = 3$.
So, the complementary solution is $y_c = c_1e^{2x} + c_2e^{3x}$.

Now, for the particular solution, $y_p$. Our non-homogeneous term is $f(x) = 4e^{2x}$.
Here, $k=4$ and $\gamma=2$.
We check if $\gamma=2$ is a root of the characteristic equation. Yes, it is! $r_1=2$.

**Uh oh! What happens when $\gamma$ IS a root?** This is where our initial guess needs adjustment.

#### Case 2: $f(x) = ke^{\gamma x}$, where $\gamma$ IS a root of the characteristic equation.

If our guess $y_p = Ae^{\gamma x}$ is already part of the complementary solution $y_c$, substituting it into the ODE will result in $0 = ke^{\gamma x}$, which is impossible (unless $k=0$, but then $f(x)=0$). This tells us our initial guess is "too simple" and doesn't capture the specific behavior needed to satisfy the equation.

When $\gamma$ is a single root of the characteristic equation (i.e., a real root that appears only once), we need to "promote" our guess by multiplying it by $x$.

Our modified guess for $y_p$ becomes:

$y_p = Axe^{\gamma x}$

Now, we need to find the derivatives of this new guess:

*   $y_p' = \frac{d}{dx}(Axe^{\gamma x})$
    Using the product rule: $u = Ax$, $v = e^{\gamma x}$. $u' = A$, $v' = \gamma e^{\gamma x}$.
    $y_p' = A e^{\gamma x} + Ax(\gamma e^{\gamma x}) = A(1 + \gamma x)e^{\gamma x}$
*   $y_p'' = \frac{d}{dx}(A(1 + \gamma x)e^{\gamma x})$
    Let's use the product rule again: $u = A(1+\gamma x)$, $v = e^{\gamma x}$. $u' = A\gamma$, $v' = \gamma e^{\gamma x}$.
    $y_p'' = A\gamma e^{\gamma x} + A(1 + \gamma x)(\gamma e^{\gamma x})$
    $y_p'' = A\gamma e^{\gamma x} + A\gamma(1 + \gamma x)e^{\gamma x}$
    $y_p'' = A\gamma e^{\gamma x} (1 + 1 + \gamma x) = A\gamma (2 + \gamma x)e^{\gamma x}$

Now, substitute $y_p$, $y_p'$, and $y_p''$ into the ODE $ay'' + by' + cy = ke^{\gamma x}$:

$a[A\gamma (2 + \gamma x)e^{\gamma x}] + b[A(1 + \gamma x)e^{\gamma x}] + c[Axe^{\gamma x}] = ke^{\gamma x}$

Let's expand and collect terms based on $e^{\gamma x}$ and $xe^{\gamma x}$:

$A\gamma (2 + \gamma x)ae^{\gamma x} + Ab(1 + \gamma x)e^{\gamma x} + Acxe^{\gamma x} = ke^{\gamma x}$

$A\gamma (2a + a\gamma x)e^{\gamma x} + Ab(1 + \gamma x)e^{\gamma x} + Acxe^{\gamma x} = ke^{\gamma x}$

$(2aA\gamma + aA\gamma^2 x)e^{\gamma x} + (Ab + Ab\gamma x)e^{\gamma x} + Acxe^{\gamma x} = ke^{\gamma x}$

Now, group terms:
Terms with $xe^{\gamma x}$: $(aA\gamma^2 + Ab\gamma + Ac)xe^{\gamma x}$
Terms with $e^{\gamma x}$: $(2aA\gamma + Ab)e^{\gamma x}$

$(a\gamma^2 + b\gamma + c)Axe^{\gamma x} + (2a\gamma + b)Ae^{\gamma x} = ke^{\gamma x}$

We know that $\gamma$ is a root of $ar^2 + br + c = 0$, so $(a\gamma^2 + b\gamma + c) = 0$. This means the coefficient of $xe^{\gamma x}$ on the left side becomes zero! This is exactly what we want, as there's no $xe^{\gamma x}$ term on the right side.

So, the equation simplifies to:

$(2a\gamma + b)Ae^{\gamma x} = ke^{\gamma x}$

Now, we equate the coefficients of $e^{\gamma x}$:

$(2a\gamma + b)A = k$

And we can solve for A:

$A = \frac{k}{2a\gamma + b}$

**Important Note:** This works as long as $(2a\gamma + b) \neq 0$. What if $(2a\gamma + b) = 0$? This happens when the characteristic equation has a **repeated root** at $r = \gamma$.

Let's go back to Example 1 to see this in action.

**Example 1 (Revisited):** Solve $y'' - 5y' + 6y = 4e^{2x}$.
Characteristic equation roots: $r_1 = 2, r_2 = 3$.
Non-homogeneous term $f(x) = 4e^{2x}$, so $k=4, \gamma=2$.
Since $\gamma=2$ IS a root (and it's a single root, not repeated), our guess must be modified.

Our first guess was $y_p = Ae^{2x}$.
Since $e^{2x}$ is in $y_c$, we try $y_p = Axe^{2x}$.

We need $y_p'$ and $y_p''$:
$y_p' = A(1 + 2x)e^{2x}$
$y_p'' = A(2 + 2x)e^{2x} + A(2)(1 + 2x)e^{2x} = A(2 + 2x + 2 + 4x)e^{2x} = A(4 + 6x)e^{2x}$

Substitute into $y'' - 5y' + 6y = 4e^{2x}$:
$A(4 + 6x)e^{2x} - 5[A(1 + 2x)e^{2x}] + 6[Axe^{2x}] = 4e^{2x}$

$A(4 + 6x)e^{2x} - 5A(1 + 2x)e^{2x} + 6Axe^{2x} = 4e^{2x}$

Distribute the constants:
$(4A + 6Ax)e^{2x} - (5A + 10Ax)e^{2x} + 6Axe^{2x} = 4e^{2x}$

Combine coefficients of $xe^{2x}$ and $e^{2x}$:
Terms with $xe^{2x}$: $(6A - 10A + 6A)xe^{2x} = 2Axe^{2x}$
Terms with $e^{2x}$: $(4A - 5A)e^{2x} = -Ae^{2x}$

So, the left side is $(2Axe^{2x} - Ae^{2x})$.
Equating this to the right side $4e^{2x}$:
$2Axe^{2x} - Ae^{2x} = 4e^{2x}$

Wait a minute! This equation has an $xe^{2x}$ term on the left and not on the right. What did I miss?

Let's re-check the calculation for $y_p''$.
$y_p = Axe^{\gamma x}$
$y_p' = A e^{\gamma x} + Ax \gamma e^{\gamma x} = A(1+\gamma x)e^{\gamma x}$
$y_p'' = A\gamma e^{\gamma x} + A\gamma(1+\gamma x)e^{\gamma x} = A\gamma e^{\gamma x} + A\gamma e^{\gamma x} + A\gamma^2 x e^{\gamma x} = (2A\gamma + A\gamma^2 x)e^{\gamma x}$

Ah, I made a slight algebraic error in my $y_p''$ calculation for the general case earlier. Let's use the specific $\gamma=2, a=1, b=-5, c=6$.
$y_p'' = (2A(2) + A(2)^2 x)e^{2x} = (4A + 4Ax)e^{2x}$

Now substitute these corrected derivatives into $y'' - 5y' + 6y = 4e^{2x}$:
$(4A + 4Ax)e^{2x} - 5[A(1+2x)e^{2x}] + 6[Axe^{2x}] = 4e^{2x}$
$(4A + 4Ax)e^{2x} - (5A + 10Ax)e^{2x} + 6Axe^{2x} = 4e^{2x}$

Combine terms:
$xe^{2x}: (4A - 10A + 6A)xe^{2x} = 0 \cdot xe^{2x}$ (This is correct, it cancels out!)
$e^{2x}: (4A - 5A)e^{2x} = -Ae^{2x}$

So the equation becomes:
$-Ae^{2x} = 4e^{2x}$

Equating coefficients of $e^{2x}$:
$-A = 4 \implies A = -4$.

So, our particular solution is $y_p = -4xe^{2x}$.
The general solution is $y = y_c + y_p = c_1e^{2x} + c_2e^{3x} - 4xe^{2x}$.

This highlights the importance of careful differentiation and algebra. It's a common place for students to make errors, so always double-check your derivatives and substitutions!

#### Case 3: $f(x) = ke^{\gamma x}$, where $\gamma$ IS a repeated root of the characteristic equation.

This is the most "difficult" scenario for this specific form of $f(x)$. If the characteristic equation $ar^2 + br + c = 0$ has a repeated root at $r = \gamma$, our first guess $y_p = Ae^{\gamma x}$ will be in $y_c$, and our second guess $y_p = Axe^{\gamma x}$ will also be in $y_c$.

Why is $Axe^{\gamma x}$ in $y_c$ when $r=\gamma$ is a repeated root? Because if $r_1 = r_2 = \gamma$, the complementary solution is $y_c = c_1e^{\gamma x} + c_2xe^{\gamma x}$. So, anything of the form $Axe^{\gamma x}$ is already covered by $y_c$.

In this situation, we need to multiply our guess by $x$ an additional time. Our new guess for $y_p$ becomes:

$y_p = Ax^2e^{\gamma x}$

Now, we'd need to find the first and second derivatives of $y_p = Ax^2e^{\gamma x}$ and substitute them into the ODE. This process gets a bit algebraically intensive, but the principle remains the same: we match coefficients to solve for A.

Let's derive the necessary derivatives for $y_p = Ax^2e^{\gamma x}$:
*   $y_p' = A(2xe^{\gamma x} + x^2\gamma e^{\gamma x}) = Ae^{\gamma x}(2x + \gamma x^2)$
*   $y_p'' = A\gamma e^{\gamma x}(2x + \gamma x^2) + Ae^{\gamma x}(2 + 2\gamma x)$
    $y_p'' = Ae^{\gamma x}[\gamma(2x + \gamma x^2) + (2 + 2\gamma x)]$
    $y_p'' = Ae^{\gamma x}[2\gamma x + \gamma^2 x^2 + 2 + 2\gamma x]$
    $y_p'' = Ae^{\gamma x}[2 + 4\gamma x + \gamma^2 x^2]$

Substituting into $ay'' + by' + cy = ke^{\gamma x}$:

$a[Ae^{\gamma x}(2 + 4\gamma x + \gamma^2 x^2)] + b[Ae^{\gamma x}(2x + \gamma x^2)] + c[Ax^2e^{\gamma x}] = ke^{\gamma x}$

Factor out $Ae^{\gamma x}$:
$Ae^{\gamma x}[a(2 + 4\gamma x + \gamma^2 x^2) + b(2x + \gamma x^2) + c(x^2)] = ke^{\gamma x}$

Expand the terms inside the bracket:
$Ae^{\gamma x}[2a + 4a\gamma x + a\gamma^2 x^2 + 2bx + b\gamma x^2 + cx^2] = ke^{\gamma x}$

Now, group terms by powers of $x$:
$x^2$ terms: $(a\gamma^2 + b\gamma + c)Ax^2$
$x$ terms: $(4a\gamma + 2b)Ax$
constant terms: $2aA$

$(a\gamma^2 + b\gamma + c)Ax^2 + (4a\gamma + 2b)Ax + 2aA = k$ (all multiplied by $e^{\gamma x}$)

Since $\gamma$ is a repeated root of $ar^2 + br + c = 0$, we know that $a\gamma^2 + b\gamma + c = 0$. This is fantastic! It means the $x^2$ term vanishes, as expected.

The equation simplifies to:
$(4a\gamma + 2b)Ax + 2aA = k$ (all multiplied by $e^{\gamma x}$)

Now, we need to equate coefficients. If the right-hand side is just $ke^{\gamma x}$, it means there are no $xe^{\gamma x}$ terms. So, the coefficient of $xe^{\gamma x}$ on the left must be zero.
$(4a\gamma + 2b)A = 0$

For this to be true, either $A=0$ (which would mean $y_p=0$, not a solution) or $(4a\gamma + 2b)=0$.
Let's recall the condition for repeated roots of $ar^2 + br + c = 0$. The discriminant is $b^2 - 4ac = 0$. The repeated root is $r = -b/(2a)$. So, $\gamma = -b/(2a)$.

Let's check $4a\gamma + 2b$:
$4a\left(-\frac{b}{2a}\right) + 2b = -2b + 2b = 0$.
Yes, $(4a\gamma + 2b)$ is indeed zero when $\gamma$ is a repeated root.

So, our equation becomes:
$0 \cdot Ax + 2aA = k$ (all multiplied by $e^{\gamma x}$)
$2aA = k$

And we can solve for A:
$A = \frac{k}{2a}$

**So, if $\gamma$ is a repeated root, the particular solution is $y_p = \frac{k}{2a}x^2e^{\gamma x}$.**

**Example 2:** Solve $y'' - 4y' + 4y = 5e^{2x}$.

Characteristic equation: $r^2 - 4r + 4 = 0$.
This factors as $(r-2)^2 = 0$.
So, we have a repeated root: $r_1 = r_2 = 2$.
The complementary solution is $y_c = c_1e^{2x} + c_2xe^{2x}$.

Now, for the particular solution. $f(x) = 5e^{2x}$, so $k=5$ and $\gamma=2$.
Since $\gamma=2$ is a repeated root of the characteristic equation, our guess is $y_p = Ax^2e^{2x}$.

From our derivation above, for $a=1, b=-4, c=4$, and $\gamma=2$:
The coefficient of $x^2$ in the bracket was $(a\gamma^2 + b\gamma + c) = (1)(2^2) + (-4)(2) + 4 = 4 - 8 + 4 = 0$. This confirms our guess structure.
The coefficient of $x$ in the bracket was $(4a\gamma + 2b) = 4(1)(2) + 2(-4) = 8 - 8 = 0$. This also confirms our guess structure.
The constant term in the bracket was $2a = 2(1) = 2$.

So, substituting $y_p = Ax^2e^{2x}$ into the ODE gives:
$Ae^{\gamma x}[2a] = ke^{\gamma x}$
$A(2a)e^{2x} = 5e^{2x}$
$2aA = 5$

Since $a=1$:
$2(1)A = 5 \implies 2A = 5 \implies A = \frac{5}{2}$.

Therefore, the particular solution is $y_p = \frac{5}{2}x^2e^{2x}$.
The general solution is $y = y_c + y_p = c_1e^{2x} + c_2xe^{2x} + \frac{5}{2}x^2e^{2x}$.

### Summary of the Method for $ke^{\gamma x}$

Let's consolidate these rules, as they are fundamental for your exams and understanding.

Consider the non-homogeneous ODE: $ay'' + by' + cy = ke^{\gamma x}$.

1.  **Find the complementary solution $y_c$** by solving the characteristic equation $ar^2 + br + c = 0$.
    *   Case 1: Distinct real roots $r_1, r_2$. $y_c = c_1e^{r_1x} + c_2e^{r_2x}$.
    *   Case 2: Repeated real root $r_1=r_2=r$. $y_c = c_1e^{rx} + c_2xe^{rx}$.
    *   Case 3: Complex conjugate roots $\alpha \pm i\beta$. $y_c = e^{\alpha x}(c_1\cos(\beta x) + c_2\sin(\beta x))$. (This case isn't directly for $ke^{\gamma x}$ forcing functions, but it's good to remember the $y_c$ forms).

2.  **Determine the form of the particular solution $y_p$ based on $f(x) = ke^{\gamma x}$ and the roots of the characteristic equation:**

    *   **If $\gamma$ is NOT a root of $ar^2 + br + c = 0$:**
        Guess: $y_p = Ae^{\gamma x}$
        Solve for $A$ by substituting into the ODE. You'll find $A = \frac{k}{a\gamma^2 + b\gamma + c}$.

    *   **If $\gamma$ IS a single (non-repeated) root of $ar^2 + br + c = 0$:**
        Guess: $y_p = Axe^{\gamma x}$
        Solve for $A$ by substituting into the ODE. You'll find $A = \frac{k}{2a\gamma + b}$. (Remember, if $2a\gamma + b = 0$, this means $\gamma$ is actually a repeated root, which falls into the next case).

    *   **If $\gamma$ IS a repeated root of $ar^2 + br + c = 0$:**
        Guess: $y_p = Ax^2e^{\gamma x}$
        Solve for $A$ by substituting into the ODE. You'll find $A = \frac{k}{2a}$.

3.  **Substitute your determined $y_p$ into the ODE** and solve for the undetermined coefficient(s) (in this case, just 'A').

4.  **Form the general solution:** $y = y_c + y_p$.

This method of undetermined coefficients is a direct application of the superposition principle and the idea that the derivatives of exponential functions are still exponential functions. It’s a powerful tool, and mastering these basic forms will make tackling more complex $f(x)$ functions much easier.

Remember what Kreyszig states in Chapter 2.5: "The method of coefficients is a straightforward way to find a particular solution $y_p$ of a nonhomogeneous linear ODE with constant coefficients, provided that the left side $L[y]$ and the nonhomogeneous term $q(x)$ are such that $L[y_p]$ has the same form as $q(x)$." For $q(x)=ke^{\gamma x}$, our guesses are designed precisely to ensure this.

### Real-World Connection: Forced Oscillations in Mechanical Systems or Electrical Circuits

Imagine a mass-spring system with some damping, and you're applying an external driving force. The equation of motion might look like $m x'' + c x' + k x = F_0 e^{\omega t}$, where $m$ is mass, $c$ is damping, $k$ is spring stiffness, $F_0$ is force amplitude, and $\omega$ is the driving frequency. This is exactly a second-order linear ODE with constant coefficients.

If the driving force is a constant force ($F_0$ with $\omega=0$, so $F_0e^{0x} = F_0$), the method of undetermined coefficients can be used ($ke^{\gamma x}$ with $\gamma=0$). If the driving force is an oscillating exponential, like $F_0e^{i\omega t}$ (which we can decompose into real and imaginary parts to handle sine and cosine forcing functions later), the method is directly applicable. The form of the response ($y_p$) will depend on how the driving frequency $\omega$ relates to the natural frequencies of the system (the roots of the characteristic equation). If the driving frequency matches a natural frequency, you can get resonance, analogous to the case of repeated roots.

Similarly, in an RLC circuit, the voltage or current might satisfy a similar differential equation when subjected to a voltage or current source. For example, $L \frac{d^2q}{dt^2} + R \frac{dq}{dt} + \frac{1}{C}q = V(t)$, where $q$ is charge. If $V(t)$ is a source that can be represented as $V_0e^{\alpha t}$, the same method applies.

This is why these ODEs and methods are so critical in engineering – they model the fundamental behavior of many physical systems.

### Common Pitfalls and Exam Tips

1.  **Forgetting to check if $\gamma$ is a root:** This is the most frequent mistake. Always, always, always compare $\gamma$ to the roots of your characteristic equation.
2.  **Incorrect derivatives for the $y_p$ guess:** Especially for the $Axe^{\gamma x}$ and $Ax^2e^{\gamma x}$ guesses. Double-check using product and chain rules.
3.  **Algebraic errors during substitution:** Carefully collect terms and simplify.
4.  **Confusing roots:** Make sure you're using the correct form of $y_p$ based on whether $\gamma$ is a single root or a repeated root.
5.  **Combining $y_c$ and $y_p$ forms incorrectly:** If your initial guess for $y_p$ (e.g., $Ae^{\gamma x}$) has terms that are identical to terms in $y_c$ (e.g., $c_1e^{\gamma x}$), you *must* modify your guess. You cannot have overlapping terms that would be absorbed into the constants of $y_c$.

Remember, the goal is to find a $y_p$ that, when plugged into the ODE, *exactly* cancels out the $ke^{\gamma x}$ term and leaves you with an equation to solve for $A$.

Let's try a few more quick examples to solidify.

**Quick Example 1:** $y'' + 4y = e^{-x}$.
Characteristic equation: $r^2+4=0 \implies r = \pm 2i$.
$y_c = c_1\cos(2x) + c_2\sin(2x)$.
$f(x) = e^{-x}$, so $\gamma = -1$.
Is $\gamma = -1$ a root of $r^2+4=0$? No.
Guess: $y_p = Ae^{-x}$.
$y_p' = -Ae^{-x}$, $y_p'' = Ae^{-x}$.
Substitute: $(Ae^{-x}) + 4(Ae^{-x}) = e^{-x}$
$5Ae^{-x} = e^{-x}$
$5A = 1 \implies A = 1/5$.
$y_p = \frac{1}{5}e^{-x}$.
General solution: $y = c_1\cos(2x) + c_2\sin(2x) + \frac{1}{5}e^{-x}$.

**Quick Example 2:** $y'' - y' = 3e^x$.
Characteristic equation: $r^2-r=0 \implies r(r-1)=0 \implies r_1=0, r_2=1$.
$y_c = c_1e^{0x} + c_2e^{1x} = c_1 + c_2e^x$.
$f(x) = 3e^x$, so $\gamma=1$.
Is $\gamma=1$ a root? Yes, it's a single root.
Guess: $y_p = Axe^x$.
$y_p' = A(1+x)e^x$.
$y_p'' = A(1+x)e^x + Ae^x = A(2+x)e^x$.
Substitute: $A(2+x)e^x - A(1+x)e^x = 3e^x$.
$A(2+x - (1+x))e^x = 3e^x$.
$A(2+x-1-x)e^x = 3e^x$.
$A(1)e^x = 3e^x$.
$A = 3$.
$y_p = 3xe^x$.
General solution: $y = c_1 + c_2e^x + 3xe^x$.

**Quick Example 3:** $y'' + 2y' + y = 2e^{-x}$.
Characteristic equation: $r^2+2r+1=0 \implies (r+1)^2=0 \implies r_1=r_2=-1$.
$y_c = c_1e^{-x} + c_2xe^{-x}$.
$f(x) = 2e^{-x}$, so $\gamma=-1$.
Is $\gamma=-1$ a root? Yes, it's a repeated root.
Guess: $y_p = Ax^2e^{-x}$.
Here $a=1, b=2, c=1, \gamma=-1, k=2$.
Using the formula $A = k/(2a)$:
$A = 2 / (2 \cdot 1) = 2/2 = 1$.
$y_p = x^2e^{-x}$.
General solution: $y = c_1e^{-x} + c_2xe^{-x} + x^2e^{-x}$.

This covers the core cases for $ke^{\gamma x}$. The key is to be systematic and ready to adapt your guess based on the roots of the characteristic equation.

***

### Sample Questions and Answers

**Question 1 (Conceptual):**
When using the method of undetermined coefficients to find a particular solution for an ODE of the form $ay'' + by' + cy = ke^{\gamma x}$, why do we need to modify our initial guess $y_p = Ae^{\gamma x}$ if $\gamma$ is a root of the characteristic equation?

**Answer:**
We modify our guess because if $\gamma$ is a root of the characteristic equation $ar^2 + br + c = 0$, then $e^{\gamma x}$ (or $xe^{\gamma x}$ in the case of a repeated root) is already a solution to the homogeneous equation $ay'' + by' + cy = 0$. If we substitute our original guess $y_p = Ae^{\gamma x}$ into the non-homogeneous ODE $ay'' + by' + cy = ke^{\gamma x}$, the left-hand side will become zero due to the homogeneous nature of $e^{\gamma x}$. This would lead to an impossible equation like $0 = ke^{\gamma x}$ (assuming $k \neq 0$), indicating that our guess does not contribute to satisfying the non-homogeneous part of the equation. By multiplying by $x$ (or $x^2$), we ensure that our guess for $y_p$ is linearly independent of the complementary solutions $y_c$ and is of a form that, when substituted, will result in a non-zero term on the left-hand side that can be equated to $ke^{\gamma x}$.

**Question 2 (Exam-Oriented):**
Find the general solution to the differential equation $y'' + 3y' + 2y = 5e^{-2x}$.

**Answer:**
1.  **Find the complementary solution ($y_c$):**
    The characteristic equation is $r^2 + 3r + 2 = 0$.
    Factoring, we get $(r+1)(r+2) = 0$.
    The roots are $r_1 = -1$ and $r_2 = -2$.
    So, the complementary solution is $y_c = c_1e^{-x} + c_2e^{-2x}$.

2.  **Determine the form of the particular solution ($y_p$):**
    The non-homogeneous term is $f(x) = 5e^{-2x}$. Here, $k=5$ and $\gamma=-2$.
    We check if $\gamma=-2$ is a root of the characteristic equation. Yes, $r_2 = -2$ is a single (non-repeated) root.
    Therefore, our initial guess $y_p = Ae^{-2x}$ is not valid. We must modify it.
    Our modified guess is $y_p = Axe^{-2x}$.

3.  **Find the derivatives of $y_p$:**
    $y_p' = A(e^{-2x} - 2xe^{-2x}) = Ae^{-2x}(1 - 2x)$
    $y_p'' = A(-2e^{-2x})(1 - 2x) + Ae^{-2x}(-2) = Ae^{-2x}(-2 + 4x - 2) = Ae^{-2x}(4x - 4)$

4.  **Substitute $y_p$, $y_p'$, and $y_p''$ into the ODE:**
    $y'' + 3y' + 2y = 5e^{-2x}$
    $Ae^{-2x}(4x - 4) + 3[Ae^{-2x}(1 - 2x)] + 2[Axe^{-2x}] = 5e^{-2x}$

5.  **Solve for A:**
    Divide by $e^{-2x}$ on both sides:
    $A(4x - 4) + 3A(1 - 2x) + 2Ax = 5$
    $4Ax - 4A + 3A - 6Ax + 2Ax = 5$
    Combine terms:
    $(4A - 6A + 2A)x + (-4A + 3A) = 5$
    $0x - A = 5$
    $-A = 5 \implies A = -5$.

    So, the particular solution is $y_p = -5xe^{-2x}$.

6.  **Form the general solution:**
    The general solution is $y = y_c + y_p$.
    $y = c_1e^{-x} + c_2e^{-2x} - 5xe^{-2x}$.

**Question 3 (Conceptual/Application):**
Consider the ODE $y'' - 6y' + 9y = 3e^{3x}$. Which of the following is the correct form for the particular solution $y_p$?
(a) $Ae^{3x}$
(b) $Axe^{3x}$
(c) $Ax^2e^{3x}$
(d) $Axe^{-3x}$

**Answer:**
The correct answer is (c) $Ax^2e^{3x}$.

**Reasoning:**
First, find the characteristic equation: $r^2 - 6r + 9 = 0$.
This factors as $(r-3)^2 = 0$.
The roots are $r_1 = r_2 = 3$. This is a repeated root.
The non-homogeneous term is $f(x) = 3e^{3x}$, so $\gamma = 3$.
Since $\gamma=3$ is a repeated root of the characteristic equation, our initial guess $Ae^{3x}$ is part of $y_c$, and our next guess $Axe^{3x}$ is also part of $y_c$ (as $y_c = c_1e^{3x} + c_2xe^{3x}$).
Therefore, we must use the form $y_p = Ax^2e^{\gamma x}$, which in this case is $y_p = Ax^2e^{3x}$.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=fNk_zzaMoEs) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=Kb3K1Ui4454) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=IYdiKeQ9xME) |
