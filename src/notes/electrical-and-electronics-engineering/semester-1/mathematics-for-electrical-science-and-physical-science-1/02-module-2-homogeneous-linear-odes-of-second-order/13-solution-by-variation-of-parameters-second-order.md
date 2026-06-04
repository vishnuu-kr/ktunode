---
title: "Solution by variation of parameters (Second Order)."
subject: "MATHEMATICS FOR ELECTRICAL SCIENCE AND PHYSICAL 
SCIENCE - 1"
module: "Module 2: Homogeneous linear ODEs of second order"
branch: "Electrical and Electronics Engineering"
semester: 1
topicId: "68bd213e9ece2bdd875f9504"
status: "completed"
scrapedAt: "2026-05-23T16:03:18.313Z"
---
# Mathematics for Electrical Science and Physical Science - 1

## Module 2: Homogeneous Linear ODEs of Second Order

### Topic: Solution by Variation of Parameters (Second Order)

Welcome, everyone! Today, we’re diving into a powerful technique for solving a specific type of second-order homogeneous linear ordinary differential equation (ODE): the **Method of Variation of Parameters**. This method is incredibly versatile because it doesn’t require us to know the form of the non-homogeneous term beforehand. In fact, it’s most commonly used to find particular solutions for *non-homogeneous* ODEs, but understanding it within the context of homogeneous equations is a crucial stepping stone.

Remember our earlier work with homogeneous linear ODEs of second order with *constant* coefficients? We found the general solution by looking at the characteristic equation and its roots. That's a fantastic shortcut, but it only works when the coefficients are constants. What happens when those coefficients are functions of $x$? That's where methods like variation of parameters become indispensable.

This topic directly supports **CO2: Solve homogeneous and non-homogeneous linear differential equations with constant coefficients.** While we're focusing on the *homogeneous* case here as a foundation, the variation of parameters method is the *primary* tool you'll use to tackle the *non-homogeneous* problems, which is a core skill for electrical and physical sciences. Think of solving a circuit with a time-varying voltage source – that’s a non-homogeneous ODE, and variation of parameters can be your key!

Let’s start by setting the stage.

### The Foundation: The Homogeneous Equation and Its Complementary Solution

We’re considering a second-order homogeneous linear ODE of the form:

$$ y'' + p(x)y' + q(x)y = 0 $$

where $p(x)$ and $q(x)$ are continuous functions on some interval $I$.

Now, recall from our previous discussions that if we know two linearly independent solutions, $y_1(x)$ and $y_2(x)$, to this homogeneous equation, then the **general solution** to the homogeneous equation (often called the **complementary solution**, $y_c(x)$) is given by:

$$ y_c(x) = c_1 y_1(x) + c_2 y_2(x) $$

where $c_1$ and $c_2$ are arbitrary constants. This general solution forms the bedrock upon which we build our particular solution.

### The Leap to Non-Homogeneous ODEs: The Goal of Variation of Parameters

The real power of variation of parameters shines when we tackle a **non-homogeneous** ODE of the form:

$$ y'' + p(x)y' + q(x)y = r(x) $$

where $r(x)$ is a non-zero function. The **general solution** to such an equation is the sum of the complementary solution ($y_c$) and a particular solution ($y_p$):

$$ y(x) = y_c(x) + y_p(x) = c_1 y_1(x) + c_2 y_2(x) + y_p(x) $$

Our task with variation of parameters is to find this $y_p(x)$.

### The Core Idea: Varying the Parameters

The name "variation of parameters" is quite descriptive. We start with the form of the complementary solution:

$$ y_c(x) = c_1 y_1(x) + c_2 y_2(x) $$

The method proposes that if we can find a particular solution $y_p(x)$, it will look very similar, but instead of constants $c_1$ and $c_2$, we’ll have *functions* of $x$, let's call them $u_1(x)$ and $u_2(x)$:

$$ y_p(x) = u_1(x) y_1(x) + u_2(x) y_2(x) $$

So, the "parameters" $c_1$ and $c_2$ have been "varied" into functions $u_1(x)$ and $u_2(x)$. Our mission now is to find these functions $u_1(x)$ and $u_2(x)$.

How do we find them? We need to plug this proposed $y_p(x)$ back into the original non-homogeneous ODE. This will involve finding its first and second derivatives.

Let's compute them:

$y_p'(x) = u_1'(x)y_1(x) + u_1(x)y_1'(x) + u_2'(x)y_2(x) + u_2(x)y_2'(x)$

This looks a bit messy. To simplify things, a clever trick is introduced: we impose a condition on $u_1'$ and $u_2'$. We require that:

$$ u_1'(x)y_1(x) + u_2'(x)y_2(x) = 0 \quad (*) $$

This condition is key! It’s not pulled out of thin air; it’s chosen precisely to simplify the second derivative calculation and lead us to the solution. With this condition, $y_p'(x)$ becomes much cleaner:

$$ y_p'(x) = u_1(x)y_1'(x) + u_2(x)y_2'(x) $$

Now, let’s find the second derivative, $y_p''(x)$:

$y_p''(x) = u_1'(x)y_1'(x) + u_1(x)y_1''(x) + u_2'(x)y_2'(x) + u_2(x)y_2''(x)$

Now we substitute $y_p$, $y_p'$, and $y_p''$ into the original non-homogeneous ODE:
$y_p'' + p(x)y_p' + q(x)y_p = r(x)$

$(u_1'y_1' + u_1y_1'' + u_2'y_2' + u_2y_2'') + p(x)(u_1y_1' + u_2y_2') + q(x)(u_1y_1 + u_2y_2) = r(x)$

Let's rearrange this by grouping terms with $u_1$ and $u_2$:

$u_1(y_1'' + p(x)y_1' + q(x)y_1) + u_2(y_2'' + p(x)y_2' + q(x)y_2) + u_1'y_1' + u_2'y_2' = r(x)$

Now, here’s where the magic of $y_1$ and $y_2$ being solutions to the *homogeneous* equation comes in. Remember, $y_1$ and $y_2$ satisfy:

$y_1'' + p(x)y_1' + q(x)y_1 = 0$
$y_2'' + p(x)y_2' + q(x)y_2 = 0$

So, the equation simplifies dramatically! The terms multiplying $u_1$ and $u_2$ vanish:

$u_1(0) + u_2(0) + u_1'y_1' + u_2'y_2' = r(x)$

This leaves us with:

$$ u_1'y_1' + u_2'y_2' = r(x) \quad (**) $$

Look at this! We started with two unknown functions $u_1$ and $u_2$, and we’ve arrived at two equations involving their derivatives:

1.  From our imposed condition: $u_1'y_1 + u_2'y_2 = 0$
2.  From substituting into the ODE: $u_1'y_1' + u_2'y_2' = r(x)$

This is a system of two linear algebraic equations for the unknowns $u_1'$ and $u_2'$. We can solve this system using Cramer's rule or substitution.

### Solving for $u_1'$ and $u_2'$

Let $f_1 = u_1'$ and $f_2 = u_2'$. Our system is:

$y_1 f_1 + y_2 f_2 = 0$
$y_1' f_1 + y_2' f_2 = r(x)$

The determinant of the coefficient matrix is $W(y_1, y_2) = y_1y_2' - y_1'y_2$. This is famously known as the **Wronskian** of $y_1$ and $y_2$. Since $y_1$ and $y_2$ are linearly independent solutions to the homogeneous ODE, their Wronskian $W(y_1, y_2)$ is non-zero on our interval $I$. This is crucial because it guarantees a unique solution for $u_1'$ and $u_2'$.

Using Cramer's Rule:

To find $u_1'$, we replace the first column (coefficients of $f_1$) with the constants on the right side:
$$ u_1' = \frac{\begin{vmatrix} 0 & y_2 \\ r(x) & y_2' \end{vmatrix}}{W(y_1, y_2)} = \frac{0 \cdot y_2' - y_2 \cdot r(x)}{W(y_1, y_2)} = -\frac{y_2 r(x)}{W(y_1, y_2)} $$

To find $u_2'$, we replace the second column (coefficients of $f_2$) with the constants on the right side:
$$ u_2' = \frac{\begin{vmatrix} y_1 & 0 \\ y_1' & r(x) \end{vmatrix}}{W(y_1, y_2)} = \frac{y_1 \cdot r(x) - 0 \cdot y_1'}{W(y_1, y_2)} = \frac{y_1 r(x)}{W(y_1, y_2)} $$

So, we have found expressions for $u_1'$ and $u_2'$!

### Finding $u_1$ and $u_2$ and the Particular Solution

Once we have $u_1'$ and $u_2'$, we can find $u_1$ and $u_2$ by integrating:

$$ u_1(x) = \int u_1'(x) dx = \int -\frac{y_2(x) r(x)}{W(y_1, y_2)} dx $$
$$ u_2(x) = \int u_2'(x) dx = \int \frac{y_1(x) r(x)}{W(y_1, y_2)} dx $$

When integrating, we usually pick the constant of integration to be zero, as we only need *one* particular solution.

Then, our particular solution $y_p(x)$ is:

$$ y_p(x) = u_1(x) y_1(x) + u_2(x) y_2(x) $$

And the general solution to the non-homogeneous ODE is:

$$ y(x) = c_1 y_1(x) + c_2 y_2(x) + y_p(x) $$

### Example: A Common Scenario

Let's illustrate this with a concrete example. Suppose we need to solve the ODE:

$$ y'' + y = \sec(x) $$

This is a non-homogeneous second-order linear ODE with constant coefficients $p(x) = 0$ and $q(x) = 1$, and $r(x) = \sec(x)$.

**Step 1: Find the complementary solution ($y_c$)**

First, we solve the associated homogeneous equation:
$y'' + y = 0$

The characteristic equation is $m^2 + 1 = 0$, which has roots $m = \pm i$.
For complex roots $\alpha \pm i\beta$, the solutions are $e^{\alpha x}\cos(\beta x)$ and $e^{\alpha x}\sin(\beta x)$.
Here, $\alpha=0$ and $\beta=1$. So, our linearly independent solutions are:

$y_1(x) = \cos(x)$
$y_2(x) = \sin(x)$

The complementary solution is:
$y_c(x) = c_1 \cos(x) + c_2 \sin(x)$

**Step 2: Calculate the Wronskian**

We need $W(y_1, y_2) = y_1y_2' - y_1'y_2$.
$y_1 = \cos(x)$, $y_1' = -\sin(x)$
$y_2 = \sin(x)$, $y_2' = \cos(x)$

$W(\cos(x), \sin(x)) = (\cos(x))(\cos(x)) - (-\sin(x))(\sin(x))$
$W = \cos^2(x) + \sin^2(x) = 1$

Ah, the Wronskian is a beautiful constant 1 in this case!

**Step 3: Find $u_1'(x)$ and $u_2'(x)$**

Our $r(x) = \sec(x)$.
Using our formulas:

$u_1'(x) = -\frac{y_2(x) r(x)}{W(y_1, y_2)} = -\frac{\sin(x) \sec(x)}{1} = -\frac{\sin(x)}{ \cos(x)} = -\tan(x)$

$u_2'(x) = \frac{y_1(x) r(x)}{W(y_1, y_2)} = \frac{\cos(x) \sec(x)}{1} = \frac{\cos(x)}{ \cos(x)} = 1$

**Step 4: Integrate to find $u_1(x)$ and $u_2(x)$**

$u_1(x) = \int u_1'(x) dx = \int -\tan(x) dx$

Do you remember the integral of $\tan(x)$? It's $-\ln|\cos(x)|$. So,
$u_1(x) = - (-\ln|\cos(x)|) = \ln|\cos(x)|$

$u_2(x) = \int u_2'(x) dx = \int 1 dx = x$

(We’re choosing the constants of integration to be zero here.)

**Step 5: Construct the particular solution ($y_p$)**

$y_p(x) = u_1(x) y_1(x) + u_2(x) y_2(x)$
$y_p(x) = (\ln|\cos(x)|) \cos(x) + (x) \sin(x)$

**Step 6: Write the general solution**

The general solution is $y(x) = y_c(x) + y_p(x)$:

$y(x) = c_1 \cos(x) + c_2 \sin(x) + \cos(x)\ln|\cos(x)| + x\sin(x)$

This method might seem a bit involved with all the derivatives and integrals, but it’s systematic. The key is to correctly identify $y_1$, $y_2$, calculate their Wronskian, and then correctly integrate $u_1'$ and $u_2'$.

### Connecting to Course Outcomes (CO2)

This entire process directly addresses **CO2: Solve homogeneous and non-homogeneous linear differential equations with constant coefficients.** We first found the homogeneous solution ($y_c$) and then used variation of parameters to find the particular solution ($y_p$) to the non-homogeneous equation. This is precisely what you’ll need to do in many engineering applications, from analyzing circuits with external forcing functions to modeling mechanical vibrations with driving forces.

### Analogy Time: The Band and the Soloists

Imagine you have a band (the homogeneous solution, $y_c = c_1 y_1 + c_2 y_2$). The band members $y_1$ and $y_2$ have established their musical parts, and $c_1, c_2$ are like the volume knobs for each. Now, a guest soloist (the forcing term $r(x)$) comes in and needs to be integrated into the performance.

The variation of parameters method says: "Instead of just having fixed parts for our core musicians ($y_1, y_2$), let's allow them to dynamically adapt their playing style based on the soloist." So, $c_1$ and $c_2$ become $u_1(x)$ and $u_2(x)$. The specific way they need to adapt ($u_1'$ and $u_2'$) is determined by how the soloist sounds ($r(x)$) and how the core musicians play together (their Wronskian).

The goal is to find the perfect "adaptive parts" for $y_1$ and $y_2$ (i.e., $u_1$ and $u_2$) so that when they play along with the soloist, the whole ensemble sounds harmonious and achieves the desired overall performance (solves the non-homogeneous ODE).

### Important Considerations & Pitfalls

*   **Linear Independence:** Always ensure $y_1$ and $y_2$ are *linearly independent*. If they aren't, their Wronskian will be zero, and the method breaks down.
*   **Correct $r(x)$:** Make sure your ODE is in the standard form $y'' + p(x)y' + q(x)y = r(x)$ before identifying $r(x)$. If there's a coefficient in front of $y''$, you must divide the entire equation by it first.
*   **Integration:** The integration steps for $u_1'$ and $u_2'$ can be challenging. Sometimes trigonometric substitutions, integration by parts, or partial fractions are needed. This is where your calculus skills (from textbooks like Anton, Biven, Davis or Stewart) are put to the test.
*   **Wronskian Calculation:** Double-check your Wronskian calculation; a simple sign error can lead to a completely wrong answer.

### Generalizing to Coefficients as Functions of $x$

While the example above used constant coefficients for the homogeneous part, the method of variation of parameters is even more powerful because it works even when $p(x)$ and $q(x)$ are functions of $x$. The derivation we went through for $u_1'$ and $u_2'$ only relied on $y_1$ and $y_2$ being solutions to the homogeneous equation, regardless of whether $p(x)$ and $q(x)$ were constants.

For example, if you have $y'' + x y' + y = x^2$, and you already know two linearly independent solutions $y_1$ and $y_2$ to $y'' + x y' + y = 0$ (which might be hard to find in the first place, but assume you have them), you can then use variation of parameters to find a particular solution.

### Summary and What to Remember

1.  **Goal:** Find a particular solution $y_p(x) = u_1(x)y_1(x) + u_2(x)y_2(x)$ for a non-homogeneous ODE, where $y_1, y_2$ are linearly independent solutions to the associated homogeneous ODE.
2.  **Key Steps:**
    *   Solve the homogeneous equation to find $y_1, y_2$.
    *   Calculate the Wronskian $W(y_1, y_2)$.
    *   Find $u_1' = -\frac{y_2 r(x)}{W}$ and $u_2' = \frac{y_1 r(x)}{W}$.
    *   Integrate $u_1'$ and $u_2'$ to get $u_1$ and $u_2$.
    *   Form $y_p = u_1 y_1 + u_2 y_2$.
3.  **The Wronskian:** It's the determinant $y_1y_2' - y_1'y_2$. It must be non-zero for linear independence.
4.  **The Method's Strength:** Works even when coefficients $p(x), q(x)$ are functions of $x$, provided you can find $y_1, y_2$.

This method is a cornerstone for solving many physical and electrical phenomena that are described by differential equations where external forces or inputs are present. It’s a powerful analytical tool that complements the characteristic equation method for constant-coefficient ODEs.

### Sample Questions and Answers

**Q1. (Conceptual) What is the fundamental idea behind the method of variation of parameters?**

**Answer:** The fundamental idea is to start with the general solution of the associated homogeneous differential equation, which is of the form $y_c(x) = c_1 y_1(x) + c_2 y_2(x)$. Then, we "vary" the constant parameters $c_1$ and $c_2$ by replacing them with unknown functions $u_1(x)$ and $u_2(x)$, assuming a particular solution of the form $y_p(x) = u_1(x) y_1(x) + u_2(x) y_2(x)$. The goal is then to determine these functions $u_1(x)$ and $u_2(x)$ by substituting this form into the non-homogeneous ODE.

**Q2. (Procedural) Find a particular solution for the ODE $y'' - y = \frac{1}{x}$ using variation of parameters. (You may assume $y_1=e^x$ and $y_2=e^{-x}$ are solutions to the homogeneous equation.)**

**Answer:**
1.  **Homogeneous Solutions:** Given $y_1(x) = e^x$ and $y_2(x) = e^{-x}$.
2.  **Wronskian:**
    $y_1' = e^x$, $y_2' = -e^{-x}$
    $W(y_1, y_2) = y_1y_2' - y_1'y_2 = (e^x)(-e^{-x}) - (e^x)(e^{-x})$
    $W = -e^0 - e^0 = -1 - 1 = -2$.
3.  **Identify $r(x)$:** The ODE is $y'' - y = \frac{1}{x}$. So, $r(x) = \frac{1}{x}$.
4.  **Find $u_1'$ and $u_2'$:**
    $u_1'(x) = -\frac{y_2 r(x)}{W} = -\frac{e^{-x} (\frac{1}{x})}{-2} = \frac{e^{-x}}{2x}$
    $u_2'(x) = \frac{y_1 r(x)}{W} = \frac{e^x (\frac{1}{x})}{-2} = -\frac{e^x}{2x}$
5.  **Integrate to find $u_1$ and $u_2$:**
    $u_1(x) = \int \frac{e^{-x}}{2x} dx$
    $u_2(x) = \int -\frac{e^x}{2x} dx$
    These integrals do not have simple closed-form elementary solutions. They are related to the Exponential Integral function, Ei.
    *Important Note:* In exams, you would typically be given an ODE where these integrals *are* solvable using elementary functions, or you might be asked to express $u_1$ and $u_2$ as integrals.
    For the sake of demonstrating the method, we express them as integrals:
    $u_1(x) = \frac{1}{2} \int \frac{e^{-x}}{x} dx$
    $u_2(x) = -\frac{1}{2} \int \frac{e^x}{x} dx$
6.  **Form $y_p$:**
    $y_p(x) = u_1(x)y_1(x) + u_2(x)y_2(x)$
    $y_p(x) = \left(\frac{1}{2} \int \frac{e^{-t}}{t} dt\right) e^x + \left(-\frac{1}{2} \int \frac{e^t}{t} dt\right) e^{-x}$
    (Using dummy integration variables $t$ for clarity).

**Q3. (Conceptual/Exam Tip) Why is the Wronskian essential in the variation of parameters method? What happens if $W(y_1, y_2) = 0$?**

**Answer:** The Wronskian $W(y_1, y_2) = y_1y_2' - y_1'y_2$ is essential because it appears in the denominator of the formulas for $u_1'$ and $u_2'$. If $W(y_1, y_2) = 0$, it implies that $y_1$ and $y_2$ are *linearly dependent*. If they are linearly dependent, one solution is just a constant multiple of the other, meaning we don't actually have two independent building blocks for our complementary solution. The method relies on $y_1$ and $y_2$ being linearly independent, which is guaranteed by a non-zero Wronskian for solutions of a second-order linear homogeneous ODE. If $W=0$, the formulas for $u_1'$ and $u_2'$ would involve division by zero, indicating that the method cannot be applied in the standard way with the given $y_1$ and $y_2$.

**Q4. (Connection to CO2) How does variation of parameters help in solving engineering problems described by ODEs?**

**Answer:** Many engineering systems (e.g., electrical circuits with external voltage sources, mechanical systems with external forces, control systems with inputs) are modeled by non-homogeneous linear ODEs. The complementary solution $y_c$ describes the system's natural behavior or transient response, while the particular solution $y_p$ describes the system's steady-state response or behavior due to the external input ($r(x)$). The variation of parameters method provides a systematic way to find $y_p$ when the input $r(x)$ is not a simple exponential or sinusoidal function (which would typically be handled by the method of undetermined coefficients), making it a versatile tool for analyzing forced systems in electrical and physical sciences. It allows us to find the system's response to a wide variety of external stimuli.
