---
title: "Particular solution by the method of undetermined coefficients (Particular solutions for the functions  
𝑘𝑒γx"
subject: "MATHEMATICS FOR ELECTRICAL SCIENCE AND 
PHYSICAL  SCIENCE - 1"
module: "Module 2: Homogeneous linear ODEs of second order"
branch: "Civil Engineering"
semester: 1
topicId: "68b54565d74ec52cc09129d7"
status: "completed"
scrapedAt: "2026-05-20T18:30:55.194Z"
---
# Module 2: Homogeneous Linear ODEs of Second Order
## Topic: Particular Solution by the Method of Undetermined Coefficients (Specific Case: $ke^{\gamma x}$)

Welcome, everyone! Today, we're diving deeper into the fascinating world of second-order linear differential equations. In our previous sessions, we focused on *homogeneous* equations and how to find their *complementary solutions* (the general solution to the homogeneous part). Now, we're going to tackle the other half: the *particular solution* ($y_p$) for *non-homogeneous* equations. Think of it as adding a specific, desired response to our system, which we'll represent with the function $f(x)$ on the right-hand side of our equation.

Our focus today is a very specific, yet incredibly important, type of non-homogeneous term: $f(x) = ke^{\gamma x}$, where $k$ and $\gamma$ are constants. This form is extremely common in electrical and physical sciences. For instance, in electrical circuits, $ke^{\gamma x}$ could represent a DC voltage source ($k$ is the voltage, $\gamma=0$) or a voltage source that decays or grows exponentially over time. In mechanical systems, it might represent an external force acting on an object that behaves similarly.

### The Big Picture: The General Solution of a Non-Homogeneous ODE

Let's remind ourselves of the structure of the general solution for a non-homogeneous linear ODE:

$y(x) = y_c(x) + y_p(x)$

Here:
*   $y_c(x)$ is the **complementary solution**, which we find by solving the associated homogeneous equation. It represents the system's natural behavior or response without any external forcing.
*   $y_p(x)$ is the **particular solution**, which is any *one* function that satisfies the *non-homogeneous* equation. It represents the system's response to the specific forcing function $f(x)$.

**Connection to Course Outcomes:** This directly relates to **CO2: Solve homogeneous and non-homogeneous linear differential equation with constant coefficients.** We're building the skills to solve the non-homogeneous part, which is crucial for understanding and predicting the behavior of various physical systems, aligning perfectly with the knowledge level K3 (Application).

### The Method of Undetermined Coefficients: Our Tool for Finding $y_p$

The "Method of Undetermined Coefficients" is our systematic way of guessing the form of the particular solution $y_p$. The key idea is that if the non-homogeneous term $f(x)$ is made up of certain types of functions (like polynomials, exponentials, sines, and cosines), then the particular solution $y_p$ will often have a similar form, perhaps with different coefficients. We then plug this guessed form into the ODE and solve for the unknown coefficients.

#### Case 1: $f(x) = ke^{\gamma x}$ - The Simplest Case

Let's consider our non-homogeneous ODE in the standard form:

$ay''(x) + by'(x) + cy(x) = f(x)$

where $a, b, c$ are constants, and our $f(x) = ke^{\gamma x}$.

**The Guess:** Based on the form of $f(x)$, our initial guess for $y_p(x)$ is:

$y_p(x) = A e^{\gamma x}$

Here, $A$ is the "undetermined coefficient" we need to find.

**The Process:**
1.  **Guess the form:** $y_p(x) = A e^{\gamma x}$.
2.  **Calculate derivatives:**
    $y_p'(x) = A \gamma e^{\gamma x}$
    $y_p''(x) = A \gamma^2 e^{\gamma x}$
3.  **Substitute into the ODE:** Plug $y_p$, $y_p'$, and $y_p''$ into $ay''(x) + by'(x) + cy(x) = ke^{\gamma x}$.
    $a(A \gamma^2 e^{\gamma x}) + b(A \gamma e^{\gamma x}) + c(A e^{\gamma x}) = ke^{\gamma x}$
4.  **Equate coefficients:** Factor out $e^{\gamma x}$ from the left side:
    $A(a\gamma^2 + b\gamma + c) e^{\gamma x} = ke^{\gamma x}$
    For this equation to hold true for all $x$, the coefficients of $e^{\gamma x}$ on both sides must be equal:
    $A(a\gamma^2 + b\gamma + c) = k$
5.  **Solve for A:**
    $A = \frac{k}{a\gamma^2 + b\gamma + c}$

**When does this work?** This works beautifully as long as the denominator, $a\gamma^2 + b\gamma + c$, is **not zero**.

**What if the denominator is zero?** Ah, this is where things get interesting, and we'll address this crucial modification in our next section. But for now, let's celebrate this straightforward case!

**Example 1: A Simple Case**

Suppose we want to find a particular solution to:

$y'' - 3y' + 2y = 4e^{3x}$

Here, $a=1$, $b=-3$, $c=2$, and $f(x) = 4e^{3x}$, so $k=4$ and $\gamma=3$.

1.  **Guess:** $y_p(x) = A e^{3x}$
2.  **Derivatives:** $y_p'(x) = 3A e^{3x}$, $y_p''(x) = 9A e^{3x}$
3.  **Substitute:**
    $(9A e^{3x}) - 3(3A e^{3x}) + 2(A e^{3x}) = 4e^{3x}$
    $9A e^{3x} - 9A e^{3x} + 2A e^{3x} = 4e^{3x}$
4.  **Equate coefficients:**
    $2A e^{3x} = 4e^{3x}$
    $2A = 4$
5.  **Solve for A:** $A = 2$.

So, the particular solution is $y_p(x) = 2e^{3x}$.

**How do we check this?** Let's plug $y_p = 2e^{3x}$ back into the original equation:
$y_p'' - 3y_p' + 2y_p = (18e^{3x}) - 3(6e^{3x}) + 2(2e^{3x}) = 18e^{3x} - 18e^{3x} + 4e^{3x} = 4e^{3x}$. It works!

**Analogy:** Imagine you're trying to cook a specific dish (the $f(x)$ term). The ingredients (the form of $y_p$) are similar to the desired outcome (exponential). You adjust the amounts of each ingredient (the coefficients, like $A$) until the final taste matches your expectation. If the recipe calls for $4e^{3x}$, and our system's natural tendency (when we put $Ae^{3x}$ in) is to produce $2Ae^{3x}$, we need $A=2$ to match the required $4e^{3x}$.

**Exam Tip:** Always check if the denominator $a\gamma^2 + b\gamma + c$ is zero *before* you proceed. This is a common pitfall!

### Case 2: The "Collision" or "Repeated Root" Problem

Now, what happens if our guess $y_p(x) = Ae^{\gamma x}$ *is already part of the complementary solution* $y_c(x)$? This occurs when $\gamma$ is a root of the characteristic equation of the homogeneous ODE, $ar^2 + br + c = 0$.

Why is this a problem? If $e^{\gamma x}$ is already a solution to the homogeneous equation, then plugging $Ae^{\gamma x}$ into the non-homogeneous equation $ay'' + by' + cy = ke^{\gamma x}$ will result in $0 = ke^{\gamma x}$, which is impossible (unless $k=0$, but then $f(x)$ would be zero, and we wouldn't need a particular solution).

**The Rule:** If the assumed form of $y_p$ is a solution to the homogeneous equation, we must modify our guess.

**Subcase 2a: $\gamma$ is a single root of the characteristic equation.**
If $a\gamma^2 + b\gamma + c = 0$, but $\gamma$ is not a repeated root, our original guess $Ae^{\gamma x}$ won't work. The correct modified guess for $y_p(x)$ becomes:

$y_p(x) = Ax e^{\gamma x}$

Let's see why. If $\gamma$ is a single root, the characteristic equation is $(r-\gamma)(r-\beta) = 0$ for some $\beta \neq \gamma$. The complementary solution $y_c$ will be of the form $c_1e^{\gamma x} + c_2e^{\beta x}$. Our initial guess $Ae^{\gamma x}$ is already covered by $c_1e^{\gamma x}$. By multiplying by $x$, we get $Axe^{\gamma x}$, which is a new, linearly independent solution that doesn't conflict with $y_c$.

**Let's derive the derivatives for this new guess:**
$y_p(x) = Axe^{\gamma x}$
$y_p'(x) = A(1 \cdot e^{\gamma x} + x \cdot \gamma e^{\gamma x}) = A(1 + \gamma x)e^{\gamma x}$
$y_p''(x) = A[\gamma e^{\gamma x} + \gamma(1 + \gamma x)e^{\gamma x}] = A[\gamma + \gamma + \gamma^2 x]e^{\gamma x} = A(2\gamma + \gamma^2 x)e^{\gamma x}$

Now, substitute these into $ay'' + by' + cy = ke^{\gamma x}$:
$a A(2\gamma + \gamma^2 x)e^{\gamma x} + b A(1 + \gamma x)e^{\gamma x} + c A x e^{\gamma x} = ke^{\gamma x}$

Factor out $e^{\gamma x}$ and collect terms involving $x$ and constant terms:
$e^{\gamma x} [ A(2a\gamma + b) + A(a\gamma^2 + b\gamma + c)x + cAx ] = ke^{\gamma x}$

Since $\gamma$ is a root of $ar^2 + br + c = 0$, we know that $a\gamma^2 + b\gamma + c = 0$. Also, if $\gamma$ is a *single* root, then the derivative of the characteristic polynomial evaluated at $r=\gamma$ is non-zero, meaning $2a\gamma + b \neq 0$.

So, the equation simplifies to:
$e^{\gamma x} [ A(2a\gamma + b) + A(0)x + cAx ] = ke^{\gamma x}$
$A(2a\gamma + b) e^{\gamma x} = ke^{\gamma x}$

Equating coefficients:
$A(2a\gamma + b) = k$
$A = \frac{k}{2a\gamma + b}$

**Crucial point:** This formula for $A$ requires $2a\gamma + b \neq 0$. If $2a\gamma + b$ is also zero, it means $\gamma$ is a *repeated root* of the characteristic equation, which we'll cover next.

**Example 2: A Collision Case**

Consider the ODE:
$y'' - 4y' + 4y = 3e^{2x}$

First, let's find the complementary solution. The characteristic equation is $r^2 - 4r + 4 = 0$, which factors as $(r-2)^2 = 0$. This has a repeated root $r=2$.
So, $y_c(x) = c_1e^{2x} + c_2xe^{2x}$.

Now, for the particular solution, $f(x) = 3e^{2x}$. Here, $k=3$ and $\gamma=2$.
Our initial guess would be $y_p = Ae^{2x}$.
However, $e^{2x}$ is already part of $y_c$. So, our initial guess collides!

We are in the situation where $\gamma=2$ is a root of $r^2 - 4r + 4 = 0$. Let's check the denominator $a\gamma^2 + b\gamma + c$:
$a=1, b=-4, c=4, \gamma=2$.
$1(2^2) + (-4)(2) + 4 = 4 - 8 + 4 = 0$. Indeed, it's zero.

Since $\gamma=2$ is a *single* root (it appears twice, but it's still just the value $r=2$), we modify our guess to:
$y_p(x) = Axe^{2x}$

Now we need to find $A$. Let's use the derived formula $A = \frac{k}{2a\gamma + b}$:
$a=1, b=-4, \gamma=2, k=3$.
$2a\gamma + b = 2(1)(2) + (-4) = 4 - 4 = 0$.

Uh oh! The denominator in *that* formula is also zero. This tells us we are actually in Subcase 2b.

**Subcase 2b: $\gamma$ is a repeated root of the characteristic equation.**
If $\gamma$ is a repeated root, then the characteristic equation is of the form $a(r-\gamma)^2 = 0$, which means $b = -2a\gamma$ and $c = a\gamma^2$.
In this scenario, both $e^{\gamma x}$ and $xe^{\gamma x}$ are part of the complementary solution $y_c(x)$.
So, our guess $Axe^{\gamma x}$ will also collide!

The correct modified guess for $y_p(x)$ becomes:

$y_p(x) = Ax^2 e^{\gamma x}$

**Let's derive for this guess:**
$y_p(x) = Ax^2 e^{\gamma x}$
$y_p'(x) = A(2x e^{\gamma x} + x^2 \gamma e^{\gamma x}) = A(2x + \gamma x^2)e^{\gamma x}$
$y_p''(x) = A[(2 + 2\gamma x)e^{\gamma x} + (2x + \gamma x^2)\gamma e^{\gamma x}]$
$y_p''(x) = A[2 + 2\gamma x + 2\gamma x + \gamma^2 x^2]e^{\gamma x} = A(2 + 4\gamma x + \gamma^2 x^2)e^{\gamma x}$

Substitute into $ay'' + by' + cy = ke^{\gamma x}$:
$aA(2 + 4\gamma x + \gamma^2 x^2)e^{\gamma x} + bA(2x + \gamma x^2)e^{\gamma x} + cA x^2 e^{\gamma x} = ke^{\gamma x}$

Recall that if $\gamma$ is a repeated root, then $ar^2 + br + c = a(r-\gamma)^2 = ar^2 - 2a\gamma r + a\gamma^2$.
Comparing coefficients with $ar^2 + br + c$: $b = -2a\gamma$ and $c = a\gamma^2$.

Substitute these into the equation:
$aA(2 + 4\gamma x + \gamma^2 x^2)e^{\gamma x} + (-2a\gamma)A(2x + \gamma x^2)e^{\gamma x} + (a\gamma^2)A x^2 e^{\gamma x} = ke^{\gamma x}$

Let's expand and collect terms inside the brackets (coefficient of $e^{\gamma x}$):
$A [ a(2 + 4\gamma x + \gamma^2 x^2) - 2a\gamma(2x + \gamma x^2) + a\gamma^2 x^2 ]$
$A [ 2a + 4a\gamma x + a\gamma^2 x^2 - 4a\gamma x - 2a\gamma^2 x^2 + a\gamma^2 x^2 ]$
$A [ 2a + (4a\gamma - 4a\gamma)x + (a\gamma^2 - 2a\gamma^2 + a\gamma^2)x^2 ]$
$A [ 2a ]$

So, the equation simplifies to:
$2aA e^{\gamma x} = ke^{\gamma x}$

Equating coefficients:
$2aA = k$
$A = \frac{k}{2a}$

**This is the formula for the repeated root case!**

**Revisiting Example 2:** $y'' - 4y' + 4y = 3e^{2x}$
Here, $a=1, b=-4, c=4, k=3, \gamma=2$. We found $r=2$ is a repeated root.
So, we use $y_p(x) = Ax^2 e^{2x}$.
Using the formula $A = \frac{k}{2a}$:
$A = \frac{3}{2(1)} = \frac{3}{2}$.

Thus, $y_p(x) = \frac{3}{2} x^2 e^{2x}$.

**Let's check this:**
$y_p = \frac{3}{2} x^2 e^{2x}$
$y_p' = \frac{3}{2} (2x e^{2x} + x^2 \cdot 2 e^{2x}) = 3x e^{2x} + 3x^2 e^{2x} = (3x + 3x^2)e^{2x}$
$y_p'' = (3 + 6x)e^{2x} + (3x + 3x^2)2e^{2x} = (3 + 6x + 6x + 6x^2)e^{2x} = (3 + 12x + 6x^2)e^{2x}$

Substitute into $y'' - 4y' + 4y$:
$(3 + 12x + 6x^2)e^{2x} - 4(3x + 3x^2)e^{2x} + 4(\frac{3}{2} x^2)e^{2x}$
$= (3 + 12x + 6x^2)e^{2x} - (12x + 12x^2)e^{2x} + (6x^2)e^{2x}$
$= e^{2x} [3 + 12x + 6x^2 - 12x - 12x^2 + 6x^2]$
$= e^{2x} [3 + (12-12)x + (6-12+6)x^2]$
$= 3e^{2x}$. It works!

**Summary of Rules for $f(x) = ke^{\gamma x}$:**

Given $ay'' + by' + cy = ke^{\gamma x}$:
1.  **Characteristic Equation:** Find roots of $ar^2 + br + c = 0$. Let them be $r_1, r_2$.
2.  **Initial Guess:** $y_p(x) = Ae^{\gamma x}$.
3.  **Check for Collision:**
    *   **No Collision:** If $\gamma$ is *not* a root of $ar^2 + br + c = 0$ (i.e., $a\gamma^2 + b\gamma + c \neq 0$), use $y_p(x) = Ae^{\gamma x}$ and solve for $A = \frac{k}{a\gamma^2 + b\gamma + c}$.
    *   **Single Collision:** If $\gamma$ is a single root of $ar^2 + br + c = 0$ (i.e., $a\gamma^2 + b\gamma + c = 0$, but $2a\gamma + b \neq 0$), use the modified guess $y_p(x) = Axe^{\gamma x}$. Solve for $A = \frac{k}{2a\gamma + b}$.
    *   **Double Collision:** If $\gamma$ is a repeated root of $ar^2 + br + c = 0$ (i.e., $a\gamma^2 + b\gamma + c = 0$ AND $2a\gamma + b = 0$, which means $b = -2a\gamma$ and $c=a\gamma^2$), use the double modified guess $y_p(x) = Ax^2 e^{\gamma x}$. Solve for $A = \frac{k}{2a}$.

**Visualizing the Collision:**
Think of the homogeneous solution $y_c$ as the "natural modes" or "free vibrations" of a system. If $f(x)$ is of the same form as one of these natural modes, the system will respond much more dramatically.
*   No collision: $f(x)$ is a new input, the system responds with a forced vibration of the same type.
*   Single collision: $f(x)$ is like one of the natural modes, but it's applied in a way that it "excites" that mode. The response grows linearly with time ($xe^{\gamma x}$).
*   Double collision: $f(x)$ is like a resonance, where the forcing frequency exactly matches a natural frequency, and the natural mode itself is already excited by another factor ($x$). The response grows quadratically ($x^2e^{\gamma x}$). This is the most extreme resonance.

**Connection to Course Outcomes:** This entire section is a direct application of **CO2: Solve homogeneous and non-homogeneous linear differential equation with constant coefficients.** We are learning to handle cases where the forcing function aligns with the system's natural behavior, a critical skill for analyzing physical phenomena like resonance. The knowledge level is K3 (Application).
