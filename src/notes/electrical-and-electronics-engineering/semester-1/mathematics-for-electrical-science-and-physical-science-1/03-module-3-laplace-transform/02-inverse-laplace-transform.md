---
title: "Inverse Laplace Transform"
subject: "MATHEMATICS FOR ELECTRICAL SCIENCE AND PHYSICAL 
SCIENCE - 1"
module: "Module 3: Laplace Transform"
branch: "Electrical and Electronics Engineering"
semester: 1
topicId: "68bd213e9ece2bdd875f9506"
status: "completed"
scrapedAt: "2026-05-23T16:03:19.952Z"
---
## Module 3: Laplace Transform – The Inverse Journey

Welcome back, everyone! In our previous sessions, we've embarked on the exciting journey of the Laplace Transform, learning how it converts our often-difficult differential equations in the time domain ($t$) into simpler algebraic equations in the frequency domain ($s$). We've seen how this transformation can be a powerful tool for solving linear ordinary differential equations, especially those with discontinuous forcing functions, which are incredibly common in electrical circuits and physical systems.

Today, we're going to tackle the other side of the coin: the **Inverse Laplace Transform**. Think of it as finding your way back home after a trip. We've transformed our problem into the $s$-domain to solve it, and now we need to transform the solution back into the time domain to understand how our system behaves over time. This is absolutely crucial for interpreting the results in the context of real-world electrical science and physical science applications.

Our goal today is to understand how to reverse the Laplace Transform process. We'll be looking at functions in the $s$-domain, let's call them $F(s)$, and finding their corresponding time-domain functions, $f(t)$. This directly ties into **Course Outcome CO3: Compute Laplace transform and apply it to solve ODEs arising in engineering.** Mastering the inverse transform is what allows us to actually *use* the Laplace transform method to solve those engineering problems.

### What Exactly is the Inverse Laplace Transform?

Formally, if the Laplace Transform of $f(t)$ is $F(s)$, denoted as $\mathcal{L}\{f(t)\} = F(s)$, then the Inverse Laplace Transform of $F(s)$ is $f(t)$, denoted as $\mathcal{L}^{-1}\{F(s)\} = f(t)$. It's simply the operation that undoes what the Laplace Transform does.

Imagine you have a recipe written in a secret code (the $s$-domain). The Laplace Transform is the process of encoding the original recipe. The Inverse Laplace Transform is like having the decoder ring to translate that coded recipe back into plain English, so you can actually bake the cake (understand the system's behavior).

The fundamental property that underpins the Inverse Laplace Transform is the **uniqueness theorem**. This theorem assures us that for a given $F(s)$, there is only one continuous function $f(t)$ that produces it via the Laplace Transform (for $t \geq 0$). This is a relief, as it means we don't have to worry about multiple possible solutions in the time domain for a single $F(s)$.

### The Toolbox: Properties of the Inverse Laplace Transform

Just like the Laplace Transform itself, the Inverse Laplace Transform also has a set of handy properties that make our lives much easier. These properties are derived directly from the properties of the Laplace Transform, so if you've got those down, these will feel quite natural.

#### 1. Linearity

This is perhaps the most important property. The Inverse Laplace Transform is a linear operator. This means:

$\mathcal{L}^{-1}\{aF(s) + bG(s)\} = a\mathcal{L}^{-1}\{F(s)\} + b\mathcal{L}^{-1}\{G(s)\}$

where $a$ and $b$ are constants.

**Think of it this way:** If you have a complex expression in the $s$-domain that's a sum or difference of simpler terms, you can take the inverse transform of each term separately and then combine them with their respective constants. This is a huge advantage, as most $F(s)$ we encounter will be combinations of simpler functions.

**Example:** If we have $F(s) = \frac{3}{s-1} - \frac{2}{s^2+4}$, we can find its inverse transform by finding the inverse transforms of $\frac{1}{s-1}$ and $\frac{1}{s^2+4}$ separately and then combining them.

#### 2. Frequency Shifting (First Shifting Theorem)

This property is the inverse of the first shifting theorem for the Laplace Transform. It states:

If $\mathcal{L}^{-1}\{F(s)\} = f(t)$, then $\mathcal{L}^{-1}\{F(s-a)\} = e^{at}f(t)$.

**What does this mean in practice?** If you see a term like $F(s-a)$ in your $s$-domain expression, it means the original time-domain function $f(t)$ has been multiplied by $e^{at}$. This is incredibly useful for handling terms involving exponential growth or decay in our solutions.

**Relatable Example:** Imagine you're tracking the position of a car. If the car's acceleration is constant (say, 0), its position might be a simple quadratic function of time. If, however, the car has a slightly leaky fuel tank, leading to a decreasing acceleration that's proportional to its current speed, this introduces an exponential term. The shifting theorem helps us find that exponential behavior in the time domain.

#### 3. Frequency Differentiation

This property is the inverse of the frequency differentiation property:

If $\mathcal{L}^{-1}\{F(s)\} = f(t)$, then $\mathcal{L}^{-1}\left\{\frac{dF(s)}{ds}\right\} = -tf(t)$.

**Why is this useful?** While not as frequently used for basic inverse transforms as linearity or shifting, it can be handy when you encounter derivatives of $F(s)$ with respect to $s$. It tells us that differentiating in the $s$-domain corresponds to multiplying by $-t$ in the time domain.

#### 4. Frequency Integration

This property is the inverse of frequency integration:

If $\mathcal{L}^{-1}\{F(s)\} = f(t)$, then $\mathcal{L}^{-1}\left\{\int_{s}^{\infty} F(u) du\right\} = \frac{f(t)}{t}$.

**Again, a bit more advanced, but good to know:** Integrating $F(s)$ in the $s$-domain corresponds to dividing by $t$ in the time domain. This can be useful in certain types of system analysis.

#### 5. Time Shifting (Second Shifting Theorem)

This is the inverse of the second shifting theorem:

If $\mathcal{L}^{-1}\{F(s)\} = f(t)$, then $\mathcal{L}^{-1}\{e^{-as}F(s)\} = u(t-a)f(t-a)$, where $u(t-a)$ is the unit step function (Heaviside function).

**This is a big one for systems with delayed responses!** If your $F(s)$ is multiplied by $e^{-as}$, it means the original function $f(t)$ is delayed by $a$ units of time and is only activated after time $a$. The unit step function $u(t-a)$ perfectly captures this "switching on" behavior.

**Real-World Analogy:** Consider a communication system. You send a signal, and due to the distance and processing, it arrives at the receiver with a delay. The $e^{-as}$ term in the Laplace domain captures that delay. The inverse transform tells you how the delayed signal behaves. It's like sending a message by mail – there's a delay from when you send it to when the recipient gets it.

### The Core Technique: Partial Fraction Decomposition

Now, you might be thinking, "Okay, I know the properties, but what if $F(s)$ is a complicated rational function, like a fraction involving polynomials in $s$?" This is where **Partial Fraction Decomposition (PFD)**, a technique you'll have seen in other areas of mathematics, becomes your absolute best friend.

The goal of PFD is to break down a complex rational function $F(s) = \frac{P(s)}{Q(s)}$ into a sum of simpler fractions, each of which we can easily find the inverse Laplace Transform of using our standard tables or the properties we just discussed.

Let's recall how it works, assuming $Q(s)$ has roots $s_1, s_2, \dots, s_n$.

#### Case 1: Distinct Real Roots

If $Q(s) = (s-s_1)(s-s_2)\dots(s-s_n)$, where all $s_i$ are distinct real numbers, then we can write:

$\frac{P(s)}{Q(s)} = \frac{A_1}{s-s_1} + \frac{A_2}{s-s_2} + \dots + \frac{A_n}{s-s_n}$

The inverse Laplace Transform of $\frac{1}{s-a}$ is $e^{at}$. So, the inverse transform of $\frac{A_i}{s-s_i}$ is $A_i e^{s_i t}$. The overall inverse transform will be the sum of these exponential terms.

**Example:** Let's find the inverse Laplace Transform of $F(s) = \frac{s+1}{(s-2)(s+3)}$.

First, we decompose it into partial fractions:
$\frac{s+1}{(s-2)(s+3)} = \frac{A}{s-2} + \frac{B}{s+3}$

To find $A$ and $B$:
Multiply both sides by $(s-2)(s+3)$:
$s+1 = A(s+3) + B(s-2)$

*   **To find A:** Let $s=2$. Then $2+1 = A(2+3) + B(0)$, so $3 = 5A$, which gives $A = \frac{3}{5}$.
*   **To find B:** Let $s=-3$. Then $-3+1 = A(0) + B(-3-2)$, so $-2 = -5B$, which gives $B = \frac{2}{5}$.

So, $F(s) = \frac{3/5}{s-2} + \frac{2/5}{s+3}$.

Now, we take the inverse Laplace Transform using linearity and the basic form $\mathcal{L}^{-1}\{\frac{1}{s-a}\} = e^{at}$:

$\mathcal{L}^{-1}\{F(s)\} = \mathcal{L}^{-1}\left\{\frac{3/5}{s-2} + \frac{2/5}{s+3}\right\}$
$= \frac{3}{5}\mathcal{L}^{-1}\left\{\frac{1}{s-2}\right\} + \frac{2}{5}\mathcal{L}^{-1}\left\{\frac{1}{s+3}\right\}$
$= \frac{3}{5}e^{2t} + \frac{2}{5}e^{-3t}$

**Remember this:** Partial fraction decomposition is your key to unlocking most inverse Laplace Transform problems. The method of choosing specific values of $s$ (like the roots) to find the coefficients ($A, B, \dots$) is often called the "Heaviside cover-up method," and it's incredibly efficient for distinct roots.

#### Case 2: Repeated Real Roots

If $Q(s)$ has a real root $s_1$ repeated $m$ times, say $Q(s) = (s-s_1)^m (s-s_2)\dots$, then the partial fraction expansion includes terms like:

$\frac{A_1}{s-s_1} + \frac{A_2}{(s-s_1)^2} + \dots + \frac{A_m}{(s-s_1)^m}$

The inverse Laplace Transform of $\frac{1}{(s-a)^k}$ is $\frac{t^{k-1}e^{at}}{(k-1)!}$.

**Example:** Find the inverse Laplace Transform of $F(s) = \frac{s}{(s-1)^2}$.

Here, we have a repeated root $s=1$ (multiplicity 2).
$\frac{s}{(s-1)^2} = \frac{A}{s-1} + \frac{B}{(s-1)^2}$

Multiply by $(s-1)^2$:
$s = A(s-1) + B$

*   **To find B:** Let $s=1$. Then $1 = A(0) + B$, so $B=1$.
*   **To find A:** We can expand the right side: $s = As - A + B$. Comparing coefficients of $s$: $1 = A$. Alternatively, substitute any other value for $s$, say $s=0$: $0 = A(-1) + B$, so $0 = -A+1$, which gives $A=1$.

So, $F(s) = \frac{1}{s-1} + \frac{1}{(s-1)^2}$.

Now, we apply the inverse transform:
$\mathcal{L}^{-1}\{F(s)\} = \mathcal{L}^{-1}\left\{\frac{1}{s-1}\right\} + \mathcal{L}^{-1}\left\{\frac{1}{(s-1)^2}\right\}$
$= e^{1t} + \frac{t^{2-1}e^{1t}}{(2-1)!}$
$= e^t + \frac{t e^t}{1!} = e^t + te^t$

**Pitfall to watch out for:** When dealing with repeated roots, remember the factorials in the denominator and the power of $t$. A common mistake is forgetting these. Always double-check your formula for $\frac{1}{(s-a)^k}$.

#### Case 3: Complex Conjugate Roots

If $Q(s)$ has complex conjugate roots $s = \alpha \pm i\beta$, the partial fraction expansion will contain terms of the form:

$\frac{As + B}{s^2 + \omega^2}$ (for pure imaginary roots) or $\frac{As + B}{(s- \alpha)^2 + \beta^2}$ (for shifted complex roots).

The standard inverse transforms we need here are:
*   $\mathcal{L}^{-1}\left\{\frac{s}{s^2+\omega^2}\right\} = \cos(\omega t)$
*   $\mathcal{L}^{-1}\left\{\frac{\omega}{s^2+\omega^2}\right\} = \sin(\omega t)$
*   $\mathcal{L}^{-1}\left\{\frac{s- \alpha}{(s- \alpha)^2+\beta^2}\right\} = e^{\alpha t}\cos(\beta t)$
*   $\mathcal{L}^{-1}\left\{\frac{\beta}{(s- \alpha)^2+\beta^2}\right\} = e^{\alpha t}\sin(\beta t)$

**Example:** Find the inverse Laplace Transform of $F(s) = \frac{s+2}{s^2+2s+5}$.

First, we need to complete the square in the denominator. The denominator is $s^2+2s+5$.
To complete the square for $s^2+2s$, we need $(s+1)^2 = s^2+2s+1$.
So, $s^2+2s+5 = (s^2+2s+1) + 4 = (s+1)^2 + 2^2$.

Our $F(s)$ becomes $\frac{s+2}{(s+1)^2 + 2^2}$.
We want to match this to the forms $e^{\alpha t}\cos(\beta t)$ and $e^{\alpha t}\sin(\beta t)$.
Here, $\alpha = -1$ and $\beta = 2$. The terms we are looking for are of the form $\frac{s-\alpha}{(s-\alpha)^2+\beta^2}$ and $\frac{\beta}{(s-\alpha)^2+\beta^2}$.

Our denominator is $(s-(-1))^2 + 2^2$. So we need terms involving $(s-(-1))$ in the numerator.
We can rewrite the numerator $s+2$ as $(s+1) + 1$.

So, $F(s) = \frac{(s+1) + 1}{(s+1)^2 + 2^2} = \frac{s+1}{(s+1)^2 + 2^2} + \frac{1}{(s+1)^2 + 2^2}$.

Now, we need to adjust the second term to have $\beta=2$ in the numerator.
$\frac{1}{(s+1)^2 + 2^2} = \frac{1}{2} \cdot \frac{2}{(s+1)^2 + 2^2}$.

So, $F(s) = \frac{s+1}{(s+1)^2 + 2^2} + \frac{1}{2} \frac{2}{(s+1)^2 + 2^2}$.

Taking the inverse Laplace Transform:
$\mathcal{L}^{-1}\{F(s)\} = \mathcal{L}^{-1}\left\{\frac{s+1}{(s+1)^2 + 2^2}\right\} + \frac{1}{2} \mathcal{L}^{-1}\left\{\frac{2}{(s+1)^2 + 2^2}\right\}$
$= e^{-1t}\cos(2t) + \frac{1}{2} e^{-1t}\sin(2t)$
$= e^{-t}\cos(2t) + \frac{1}{2}e^{-t}\sin(2t)$

**Tip for exams:** If you see a quadratic in the denominator that doesn't factor into real roots, it almost certainly means complex roots are involved, and you should immediately think about completing the square and aiming for the sine and cosine forms. Make sure the numerator matches the required form. Often, you'll need to split the numerator into two parts to achieve this.

### Using a Table of Laplace Transforms (Your Best Friend!)

As you practice, you'll notice certain functions $F(s)$ appear repeatedly. It's highly beneficial to have a table of common Laplace Transforms and their inverses handy. Textbooks like Kreyszig (Advanced Engineering Mathematics) and Bird’s Higher Engineering Mathematics provide excellent tables.

For example, some essential inverse transforms you'll want to memorize or have readily available are:

| $F(s)$                                  | $f(t) = \mathcal{L}^{-1}\{F(s)\}$ | Notes                                     |
| :-------------------------------------- | :-------------------------------- | :---------------------------------------- |
| $\frac{1}{s}$                           | $1$                               | Unit Step                                 |
| $\frac{1}{s-a}$                         | $e^{at}$                          | Exponential                               |
| $\frac{1}{s^n}$ ($n$ is positive integer) | $\frac{t^{n-1}}{(n-1)!}$          | Power function                            |
| $\frac{s}{s^2+\omega^2}$                | $\cos(\omega t)$                  | Cosine                                    |
| $\frac{\omega}{s^2+\omega^2}$           | $\sin(\omega t)$                  | Sine                                      |
| $\frac{s}{s^2-\omega^2}$                | $\cosh(\omega t)$                 | Hyperbolic Cosine                         |
| $\frac{\omega}{s^2-\omega^2}$           | $\sinh(\omega t)$                 | Hyperbolic Sine                           |
| $\frac{s}{(s-a)^2+\beta^2}$             | $e^{at}\cos(\beta t)$             | Shifted Cosine                            |
| $\frac{\beta}{(s-a)^2+\beta^2}$         | $e^{at}\sin(\beta t)$             | Shifted Sine                              |
| $\frac{1}{(s-a)^n}$                     | $\frac{t^{n-1}e^{at}}{(n-1)!}$    | Shifted Power function                    |

**Remember this:** A good table is your lifeline. Familiarize yourself with these common forms.

### Applying the Inverse Laplace Transform to Solve ODEs

This is where it all comes together and directly addresses **Course Outcome CO2: Solve homogeneous and non-homogeneous linear differential equation with constant coefficients** and **CO3: Compute Laplace transform and apply it to solve ODEs arising in engineering.**

Let's walk through a typical ODE problem. Suppose we have the second-order ODE:
$y'' + 3y' + 2y = e^{-t}$
with initial conditions $y(0) = 1$ and $y'(0) = 0$.

**Step 1: Take the Laplace Transform of the entire equation.**
Recall that:
$\mathcal{L}\{y''(t)\} = s^2 Y(s) - sy(0) - y'(0)$
$\mathcal{L}\{y'(t)\} = s Y(s) - y(0)$
$\mathcal{L}\{y(t)\} = Y(s)$
$\mathcal{L}\{e^{-at}\} = \frac{1}{s+a}$

Applying these to our equation:
$\mathcal{L}\{y'' + 3y' + 2y\} = \mathcal{L}\{e^{-t}\}$
$(s^2 Y(s) - sy(0) - y'(0)) + 3(s Y(s) - y(0)) + 2 Y(s) = \frac{1}{s+1}$

**Step 2: Substitute the initial conditions.**
Given $y(0) = 1$ and $y'(0) = 0$:
$(s^2 Y(s) - s(1) - 0) + 3(s Y(s) - 1) + 2 Y(s) = \frac{1}{s+1}$
$s^2 Y(s) - s + 3s Y(s) - 3 + 2 Y(s) = \frac{1}{s+1}$

**Step 3: Solve for $Y(s)$ (algebraically).**
Group terms with $Y(s)$:
$(s^2 + 3s + 2) Y(s) - s - 3 = \frac{1}{s+1}$
$(s^2 + 3s + 2) Y(s) = s + 3 + \frac{1}{s+1}$
$(s+1)(s+2) Y(s) = \frac{(s+3)(s+1) + 1}{s+1}$
$(s+1)(s+2) Y(s) = \frac{s^2 + 4s + 3 + 1}{s+1}$
$(s+1)(s+2) Y(s) = \frac{s^2 + 4s + 4}{s+1} = \frac{(s+2)^2}{s+1}$

Now, isolate $Y(s)$:
$Y(s) = \frac{(s+2)^2}{(s+1)^2 (s+2)}$
$Y(s) = \frac{s+2}{(s+1)^2}$

**Step 4: Find the Inverse Laplace Transform of $Y(s)$ to get $y(t)$.**
This is the part we've been practicing! We need to find $\mathcal{L}^{-1}\left\{\frac{s+2}{(s+1)^2}\right\}$.
We already did a similar example: $\frac{s}{(s-1)^2} = \frac{1}{s-1} + \frac{1}{(s-1)^2}$.
For our current $Y(s)$, the denominator is $(s+1)^2$. This is a repeated root at $s=-1$ with multiplicity 2.
The general form is $\frac{A}{s+1} + \frac{B}{(s+1)^2}$.

$\frac{s+2}{(s+1)^2} = \frac{A}{s+1} + \frac{B}{(s+1)^2}$
Multiply by $(s+1)^2$:
$s+2 = A(s+1) + B$

*   **To find B:** Let $s=-1$. Then $-1+2 = A(0) + B$, so $B=1$.
*   **To find A:** Let $s=0$. Then $0+2 = A(0+1) + B$, so $2 = A+B$. Since $B=1$, $2 = A+1$, which means $A=1$.

So, $Y(s) = \frac{1}{s+1} + \frac{1}{(s+1)^2}$.

Now, take the inverse Laplace transform:
$y(t) = \mathcal{L}^{-1}\left\{\frac{1}{s+1}\right\} + \mathcal{L}^{-1}\left\{\frac{1}{(s+1)^2}\right\}$
Using our table or properties:
$y(t) = e^{-t} + \frac{t^{2-1}e^{-1t}}{(2-1)!}$
$y(t) = e^{-t} + \frac{t e^{-t}}{1!}$
$y(t) = e^{-t} + te^{-t}$

And there you have it! The solution to the differential equation expressed as a function of time. This method is incredibly powerful because it transforms a calculus problem (differential equations) into an algebra problem (solving for $Y(s)$) and then back to a calculus problem (finding the inverse transform), but usually with much simpler functions.

### Connecting to Course Outcomes

Let's see how this all aligns with our course objectives:

*   **CO1: Solve systems of linear equations and diagonalize matrices.** While not directly about matrices, the algebraic manipulation to solve for $Y(s)$ often involves systems of linear equations when using PFD for higher-order polynomials, especially with repeated or complex roots where you might use Cramer's rule or substitution.
*   **CO2: Solve homogeneous and non-homogeneous linear differential equation with constant coefficients.** This entire process is dedicated to solving these types of ODEs. The Laplace transform method provides a systematic way to handle both the homogeneous part (via the characteristic polynomial implicitly in $s^2+3s+2$) and the non-homogeneous part (the $e^{-t}$ forcing function).
*   **CO3: Compute Laplace transform and apply it to solve ODEs arising in engineering.** This is our primary focus. We've demonstrated how to compute the inverse Laplace transform of $Y(s)$ and how this entire process allows us to solve ODEs that model engineering systems (like circuits, mechanical vibrations, etc.).
*   **CO4: Determine the Taylor series and evaluate Fourier series expansion for different periodic functions.** While not a direct link here, understanding functions in the $s$-domain can sometimes give insights into the frequency content of signals, which is a bridge to Fourier analysis. Also, some techniques used in finding inverse transforms, like using series expansions of $F(s)$, can be conceptually related to Taylor series.

### Important Takeaways for Exams and Understanding

1.  **PFD is king:** For rational functions of $s$, partial fraction decomposition is the primary method for breaking them down into manageable pieces.
2.  **Know your basic inverse transforms:** The forms for $1/s$, $1/(s-a)$, $1/(s^2+\omega^2)$, $s/(s^2+\omega^2)$, and their shifted versions are absolutely essential.
3.  **Completing the square:** For quadratic denominators with complex roots, always complete the square to get the $(s-a)^2+\beta^2$ form.
4.  **Be careful with repeated roots:** The powers of $t$ and factorials are common places to make errors.
5.  **Check your algebra:** Solving for $Y(s)$ is pure algebra, and a single mistake here will propagate through the entire solution.
6.  **Properties are your allies:** Linearity and the shifting theorems are used constantly.

Mastering the inverse Laplace transform is like becoming a skilled translator. You can take a problem expressed in one language (time domain) and translate it into another (frequency domain) to solve it, and then translate the solution back to understand its meaning in the original context. This is a fundamental skill for any engineer or scientist working with dynamic systems.

---

### Sample Questions and Answers

**Question 1 (Conceptual):**
Explain why partial fraction decomposition is a crucial technique for finding the Inverse Laplace Transform of rational functions.

**Answer:**
Partial fraction decomposition is crucial because the Inverse Laplace Transform tables and properties are typically defined for simpler functions, such as $1/s$, $1/(s-a)$, $s/(s^2+\omega^2)$, etc. A complex rational function $F(s) = P(s)/Q(s)$ is usually not directly found in these tables. PFD allows us to break down such a complex fraction into a sum of these simpler, recognizable forms. Once decomposed, we can apply the linearity property of the inverse Laplace transform to find the inverse transform of each simple term individually and then sum them up to obtain the overall time-domain function $f(t)$. This transforms a difficult inversion problem into a series of simpler, solvable ones.

**Question 2 (Application - Exam Style):**
Find the inverse Laplace transform of $F(s) = \frac{2s+1}{s^2-4s+13}$.

**Answer:**
We need to find $f(t) = \mathcal{L}^{-1}\{F(s)\}$.
The denominator is $s^2-4s+13$. Let's check its roots. The discriminant is $\Delta = (-4)^2 - 4(1)(13) = 16 - 52 = -36$. Since the discriminant is negative, the roots are complex, and we should complete the square.

To complete the square for $s^2-4s$: we need $(s-2)^2 = s^2-4s+4$.
So, $s^2-4s+13 = (s^2-4s+4) + 9 = (s-2)^2 + 3^2$.

Our $F(s)$ becomes $\frac{2s+1}{(s-2)^2 + 3^2}$.
This suggests the form $e^{\alpha t}\cos(\beta t)$ or $e^{\alpha t}\sin(\beta t)$. Here, $\alpha = 2$ and $\beta = 3$.
The standard forms are $\frac{s-\alpha}{(s-\alpha)^2+\beta^2}$ and $\frac{\beta}{(s-\alpha)^2+\beta^2}$.
So we need terms involving $(s-2)$ in the numerator and a $3$ for the sine part.

Let's rewrite the numerator $2s+1$ in terms of $(s-2)$:
$2s+1 = 2(s-2) + 4 + 1 = 2(s-2) + 5$.

So, $F(s) = \frac{2(s-2) + 5}{(s-2)^2 + 3^2} = \frac{2(s-2)}{(s-2)^2 + 3^2} + \frac{5}{(s-2)^2 + 3^2}$.

Now, we adjust the second term to match the $\sin$ form (which requires $\beta=3$ in the numerator):
$\frac{5}{(s-2)^2 + 3^2} = \frac{5}{3} \cdot \frac{3}{(s-2)^2 + 3^2}$.

So, $F(s) = 2 \cdot \frac{s-2}{(s-2)^2 + 3^2} + \frac{5}{3} \cdot \frac{3}{(s-2)^2 + 3^2}$.

Now, we take the inverse Laplace transform:
$f(t) = \mathcal{L}^{-1}\left\{2 \cdot \frac{s-2}{(s-2)^2 + 3^2}\right\} + \mathcal{L}^{-1}\left\{\frac{5}{3} \cdot \frac{3}{(s-2)^2 + 3^2}\right\}$
$f(t) = 2 \cdot e^{2t}\cos(3t) + \frac{5}{3} \cdot e^{2t}\sin(3t)$.

**Question 3 (Conceptual):**
What is the role of the unit step function $u(t-a)$ in the inverse Laplace Transform, and which Laplace Transform property does it relate to?

**Answer:**
The unit step function $u(t-a)$ in the time-domain function $f(t)$ signifies a time delay. It means the function $f(t)$ is zero for $t < a$ and becomes active (takes the form of $f(t-a)$) only after time $a$. This is directly related to the **Second Shifting Theorem (Time Shifting)**. Specifically, if $F(s)$ is the Laplace Transform of $f(t)$, then $\mathcal{L}^{-1}\{e^{-as}F(s)\} = u(t-a)f(t-a)$. The $e^{-as}$ term in the $s$-domain corresponds to the time delay introduced by multiplying the original time-domain function by $u(t-a)$ and shifting it by $a$. This is fundamental for modeling systems with delayed inputs or responses.
