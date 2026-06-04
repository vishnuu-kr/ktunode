---
title: "First shifting theorem"
subject: "MATHEMATICS FOR ELECTRICAL SCIENCE AND PHYSICAL 
SCIENCE - 1"
module: "Module 3: Laplace Transform"
branch: "Electrical and Electronics Engineering"
semester: 1
topicId: "68bd213e9ece2bdd875f9508"
status: "completed"
scrapedAt: "2026-05-23T16:03:21.494Z"
---
# Mathematics for Electrical Science and Physical Science - 1

## Module 3: Laplace Transform

### Topic: The First Shifting Theorem (Frequency Domain Shifting)

Welcome back everyone! In our journey through the Laplace Transform, we've established its power to transform differential equations into algebraic ones, making them much more manageable. Today, we're going to unlock another crucial tool in our Laplace Transform arsenal: **The First Shifting Theorem**. Think of this theorem as a way to shift our transformed functions in the frequency domain, which has incredibly useful applications, particularly in solving certain types of differential equations and analyzing system responses. This theorem directly relates to **Course Outcome 3 (CO3)**, as it's a fundamental technique for applying Laplace transforms to solve Ordinary Differential Equations (ODEs) that frequently arise in electrical and physical science problems.

### Understanding the Core Idea: What is Shifting?

Before we dive into the theorem itself, let's get a feel for what "shifting" means in this context. Imagine you have a function, say $f(t)$, and its Laplace Transform, $F(s)$. The Laplace Transform maps a function of time, $f(t)$, to a function of the complex frequency variable, $s$. The first shifting theorem tells us how the Laplace Transform changes if we modify the *original* time-domain function $f(t)$ by multiplying it with an exponential term, $e^{at}$.

So, the big question is: **What is the Laplace Transform of $e^{at}f(t)$?**

Let's think about it intuitively. The term $e^{at}$ acts like a "growth factor" or a "decay factor" depending on the sign of 'a'. When we introduce this exponential term into our time-domain function, how does that ripple through to its frequency-domain representation, $F(s)$? The first shifting theorem gives us a very elegant answer.

### The First Shifting Theorem: The Statement and Explanation

The theorem states:

**If $\mathcal{L}\{f(t)\} = F(s)$, then $\mathcal{L}\{e^{at}f(t)\} = F(s-a)$**

Let's break this down.

*   **$\mathcal{L}\{f(t)\} = F(s)$**: This is our starting point. We know the Laplace Transform of a function $f(t)$ is $F(s)$. This is like having a reference point.
*   **$e^{at}f(t)$**: This is our new time-domain function. We've essentially "modulated" or "shifted" our original function $f(t)$ by multiplying it with $e^{at}$.
*   **$\mathcal{L}\{e^{at}f(t)\} = F(s-a)$**: This is the punchline! The Laplace Transform of this "exponentially shifted" function is obtained by taking the original transform $F(s)$ and replacing every instance of 's' with **'(s-a)'**.

It's a direct substitution! We're shifting the entire function $F(s)$ in the frequency domain. If 'a' is positive, we shift it to the right (towards higher frequencies). If 'a' is negative, we shift it to the left (towards lower frequencies). This is why it's often called the "frequency domain shifting theorem."

**Why does this happen?** Let's recall the definition of the Laplace Transform:
$F(s) = \mathcal{L}\{f(t)\} = \int_{0}^{\infty} e^{-st} f(t) \, dt$

Now, let's apply this definition to our new function, $e^{at}f(t)$:
$\mathcal{L}\{e^{at}f(t)\} = \int_{0}^{\infty} e^{-st} (e^{at}f(t)) \, dt$

We can combine the exponential terms: $e^{-st} e^{at} = e^{-(s-a)t}$.
So, the integral becomes:
$\mathcal{L}\{e^{at}f(t)\} = \int_{0}^{\infty} e^{-(s-a)t} f(t) \, dt$

Notice something here? This integral looks *exactly* like the definition of the Laplace Transform, but instead of $-st$, we have $-(s-a)t$. If we were to formally substitute $s' = s-a$, the integral would be $\int_{0}^{\infty} e^{-s't} f(t) \, dt$, which is $F(s')$. And since $s' = s-a$, we get $F(s-a)$. This is precisely what the theorem states!

This mathematical derivation, as presented in many standard texts like Kreyszig's "Advanced Engineering Mathematics," solidifies the understanding. It's not just a rule; it stems directly from the definition of the transform.

### Connecting to Course Outcomes: Why is this important?

This theorem is a cornerstone for **CO3: Compute Laplace transform and apply it to solve ODEs arising in engineering.**

*   **Solving ODEs:** Many physical systems involve phenomena that grow or decay exponentially over time. For instance, charging a capacitor through a resistor with an exponential voltage source, or the transient response of a damped oscillator. When we take the Laplace transform of an ODE involving terms like $e^{at}y(t)$ or $e^{at}y'(t)$, the first shifting theorem allows us to handle these exponential terms elegantly. Instead of a complicated convolution integral, we get a simple substitution in the frequency domain, leading to algebraic equations that are much easier to solve.
*   **System Analysis:** In electrical engineering, particularly in signals and systems, exponential terms often appear in the impulse response or transfer functions of systems. Understanding how these relate to each other through the first shifting theorem helps us predict system behavior under different input conditions.

### Everyday Analogies for Visualization

Let's try to make this more tangible. Imagine you're tuning an old radio.

*   **$f(t)$ is a specific radio station's signal at a particular frequency.** Its Laplace Transform $F(s)$ represents how that signal "looks" in terms of its frequency components.
*   **Now, imagine you have a special filter (our $e^{at}$) that can boost or attenuate signals based on how they've already evolved.** If $a > 0$, it's like a filter that amplifies signals that have already "grown" by a factor of $e^{at}$. If $a < 0$, it attenuates them.
*   **The First Shifting Theorem says:** when you apply this boost/attenuation filter ($e^{at}$) to the original signal $f(t)$ *in the time domain*, it's equivalent to taking the *frequency profile* of the original signal ($F(s)$) and *shifting that profile itself* by an amount 'a' along the frequency axis. The whole "shape" of the frequency response moves.

Think of it like this: if $F(s)$ is a mountain range representing signal strength versus frequency, $F(s-a)$ is the *same mountain range*, just slid horizontally along the frequency axis by 'a' units.

Another way to think about it:

Imagine you have a recipe for a cake, $f(t)$, and its aroma signature when baked, $F(s)$. The first shifting theorem is like saying: if you bake the cake but *add a pinch of yeast* ($e^{at}$ with $a>0$) which makes it rise faster and bigger as it bakes, then the *aroma signature* of this modified cake is simply the original aroma signature, $F(s)$, but somehow "compressed" or "shifted" towards a "stronger essence" frequency $s-a$. It's not a perfect analogy for the substitution, but it captures the idea that a change in the time domain (adding yeast) leads to a corresponding, predictable change in the frequency domain (shifted aroma signature).

### Common Laplace Transforms and Applications of the First Shifting Theorem

Let's list some fundamental Laplace Transforms and see how the first shifting theorem can be applied. These are essential for exam preparation.

| $f(t)$            | $\mathcal{L}\{f(t)\} = F(s)$ | $\mathcal{L}\{e^{at}f(t)\}$ |
| :---------------- | :--------------------------- | :------------------------ |
| $1$ (unit step)   | $\frac{1}{s}$                | $\frac{1}{s-a}$           |
| $t^n$ (for integer n $\ge 0$) | $\frac{n!}{s^{n+1}}$         | $\frac{n!}{(s-a)^{n+1}}$  |
| $e^{bt}$          | $\frac{1}{s-b}$              | $\frac{1}{(s-a-b)}$       |
| $\sin(\omega t)$  | $\frac{\omega}{s^2 + \omega^2}$ | $\frac{\omega}{(s-a)^2 + \omega^2}$ |
| $\cos(\omega t)$  | $\frac{s}{s^2 + \omega^2}$  | $\frac{s-a}{(s-a)^2 + \omega^2}$ |
| $t e^{bt}$        | $\frac{1}{(s-b)^2}$          | $\frac{1}{(s-a-b)^2}$     |

**Let's verify some of these using the theorem:**

1.  **Transform of $e^{at}$:** We know $\mathcal{L}\{1\} = \frac{1}{s}$. Using the theorem with $f(t)=1$ and the shift parameter $a$, we get $\mathcal{L}\{e^{at} \cdot 1\} = F(s-a) = \frac{1}{(s-a)}$. This matches the entry in the table.

2.  **Transform of $e^{at}t^n$:** We know $\mathcal{L}\{t^n\} = \frac{n!}{s^{n+1}}$. Using the theorem with $f(t)=t^n$ and the shift parameter $a$, we get $\mathcal{L}\{e^{at}t^n\} = F(s-a) = \frac{n!}{(s-a)^{n+1}}$. This also matches.

3.  **Transform of $e^{at}\sin(\omega t)$:** We know $\mathcal{L}\{\sin(\omega t)\} = \frac{\omega}{s^2 + \omega^2}$. Using the theorem with $f(t)=\sin(\omega t)$ and the shift parameter $a$, we get $\mathcal{L}\{e^{at}\sin(\omega t)\} = F(s-a) = \frac{\omega}{(s-a)^2 + \omega^2}$. This is the transform of a *damped sine wave*, which is a very common signal!

**This theorem is incredibly powerful for finding transforms of functions that are like basic functions but "damped" or "amplified" by an exponential.**

### Example: Finding the Laplace Transform of a Damped Cosine Wave

Let's find the Laplace Transform of $f(t) = e^{-2t}\cos(3t)$.

**Step 1: Identify the base function and the exponential term.**
The base function is $f(t) = \cos(3t)$.
The exponential term is $e^{-2t}$.
So, in the theorem $\mathcal{L}\{e^{at}f(t)\} = F(s-a)$, we have $a = -2$ and $f(t) = \cos(3t)$.

**Step 2: Find the Laplace Transform of the base function.**
We know that $\mathcal{L}\{\cos(\omega t)\} = \frac{s}{s^2 + \omega^2}$.
For our base function $f(t) = \cos(3t)$, we have $\omega = 3$.
So, $F(s) = \mathcal{L}\{\cos(3t)\} = \frac{s}{s^2 + 3^2} = \frac{s}{s^2 + 9}$.

**Step 3: Apply the first shifting theorem.**
We need to find $\mathcal{L}\{e^{-2t}\cos(3t)\}$. According to the theorem, this is $F(s-a)$.
Since $a = -2$, we need to replace every 's' in $F(s)$ with $(s - (-2)) = (s+2)$.

$F(s-a) = F(s-(-2)) = F(s+2) = \frac{(s+2)}{(s+2)^2 + 9}$.

**Step 4: Simplify (if necessary).**
The result is $\frac{s+2}{(s+2)^2 + 9}$. We can expand the denominator if needed:
$(s+2)^2 + 9 = s^2 + 4s + 4 + 9 = s^2 + 4s + 13$.
So, the transform is $\frac{s+2}{s^2 + 4s + 13}$.

**Remember this:** When you see a function that looks like a standard function (like sine, cosine, polynomial) multiplied by an exponential $e^{at}$, the first shifting theorem is almost certainly your tool of choice. Just find the transform of the standard function, and then substitute $(s-a)$ for $s$.

### Application to Solving ODEs

This is where the theorem truly shines and directly addresses **CO3**. Let's consider a second-order ODE:

$y'' + 2y' + 5y = e^{-t}\sin(t)$

with initial conditions, say $y(0) = 1$ and $y'(0) = 0$.

**Step 1: Take the Laplace Transform of both sides.**
$\mathcal{L}\{y''\} + 2\mathcal{L}\{y'\} + 5\mathcal{L}\{y\} = \mathcal{L}\{e^{-t}\sin(t)\}$

**Step 2: Use Laplace Transform properties and the first shifting theorem.**
Recall:
$\mathcal{L}\{y\} = Y(s)$
$\mathcal{L}\{y'\} = sY(s) - y(0)$
$\mathcal{L}\{y''\} = s^2Y(s) - sy(0) - y'(0)$

Using the first shifting theorem for the right-hand side:
We know $\mathcal{L}\{\sin(\omega t)\} = \frac{\omega}{s^2 + \omega^2}$.
For $\sin(t)$, $\omega = 1$, so $\mathcal{L}\{\sin(t)\} = \frac{1}{s^2 + 1}$.
Therefore, $\mathcal{L}\{e^{-t}\sin(t)\}$ with $a=-1$ is $F(s-(-1)) = F(s+1) = \frac{1}{(s+1)^2 + 1}$.

Substituting these into the transformed equation:
$(s^2Y(s) - sy(0) - y'(0)) + 2(sY(s) - y(0)) + 5Y(s) = \frac{1}{(s+1)^2 + 1}$

**Step 3: Substitute initial conditions.**
Given $y(0) = 1$ and $y'(0) = 0$:
$(s^2Y(s) - s(1) - 0) + 2(sY(s) - 1) + 5Y(s) = \frac{1}{(s+1)^2 + 1}$
$s^2Y(s) - s + 2sY(s) - 2 + 5Y(s) = \frac{1}{(s+1)^2 + 1}$

**Step 4: Solve for $Y(s)$.**
Group terms with $Y(s)$:
$Y(s)(s^2 + 2s + 5) - s - 2 = \frac{1}{(s+1)^2 + 1}$
$Y(s)(s^2 + 2s + 5) = s + 2 + \frac{1}{(s+1)^2 + 1}$
$Y(s) = \frac{s+2}{s^2 + 2s + 5} + \frac{1}{(s^2 + 2s + 5)((s+1)^2 + 1)}$

Notice that the denominator of the first term, $s^2 + 2s + 5$, can be written as $(s+1)^2 + 4$.
So, $Y(s) = \frac{s+2}{(s+1)^2 + 4} + \frac{1}{((s+1)^2 + 4)((s+1)^2 + 1)}$

The first term, $\frac{s+2}{(s+1)^2 + 4}$, can be recognized as the transform of $e^{-t}\cos(2t)$ using the first shifting theorem and linearity.
$\frac{s+2}{(s+1)^2 + 4} = \frac{s+1}{(s+1)^2 + 2^2} + \frac{1}{(s+1)^2 + 2^2}$
$\mathcal{L}^{-1}\left\{\frac{s+1}{(s+1)^2 + 2^2}\right\} = e^{-t}\cos(2t)$
$\mathcal{L}^{-1}\left\{\frac{1}{(s+1)^2 + 2^2}\right\} = \frac{1}{2}\mathcal{L}^{-1}\left\{\frac{2}{(s+1)^2 + 2^2}\right\} = \frac{1}{2}e^{-t}\sin(2t)$
So, the first part of the solution is $y_p(t) = e^{-t}(\cos(2t) + \frac{1}{2}\sin(2t))$.

The second term will require partial fraction decomposition on $s$, which is a good place to pause and emphasize that the first shifting theorem simplifies the *initial transformation*, but subsequent steps like partial fractions might still be needed for the inverse transform.

The key takeaway here is that the first shifting theorem allowed us to convert the $e^{-t}\sin(t)$ term on the RHS into a form that is much more amenable to inverse Laplace transformation, especially when combined with the roots of the characteristic polynomial ($s^2+2s+5$).

### Important Considerations and Common Pitfalls

*   **Identifying 'a':** Be very careful with the sign of 'a'. If the term is $e^{5t}$, then $a=5$. If it's $e^{-3t}$, then $a=-3$.
*   **Substituting for 's':** You must substitute $(s-a)$ for *every* occurrence of 's' in $F(s)$.
*   **Algebraic Manipulation:** After the substitution, you often need to do some algebraic simplification, like expanding terms or completing the square in the denominator, to match standard inverse transform forms.
*   **Combination with Other Theorems:** The first shifting theorem is often used in conjunction with other Laplace transform properties, such as linearity, the second shifting theorem, and transforms of derivatives and integrals.
*   **Exam Focus:** For exams, expect questions that ask you to directly find the Laplace transform of functions involving exponentials, or to use the theorem as a step in solving ODEs. Recognizing functions of the form $e^{at} \times (\text{polynomial or trig function})$ is crucial.

### Summary and Key Takeaways

The First Shifting Theorem is your best friend when dealing with functions that have been multiplied by an exponential term $e^{at}$ in the time domain.

*   **Core Rule:** $\mathcal{L}\{e^{at}f(t)\} = F(s-a)$, where $F(s) = \mathcal{L}\{f(t)\}$.
*   **Effect:** It shifts the Laplace transform $F(s)$ by '$a$' units in the frequency domain.
*   **Application:** Indispensable for solving ODEs involving exponential forcing functions or initial conditions, and for analyzing system responses.
*   **How to Use:** Find the transform of the non-exponential part, then replace $s$ with $(s-a)$.

This theorem is a fundamental building block for advanced Laplace transform techniques and a vital tool for understanding dynamic systems in science and engineering. Mastering it will significantly boost your ability to tackle problems related to **CO3**.

---

## Sample Questions and Answers

Here are some questions to test your understanding, covering both conceptual recall and application:

**Question 1 (Conceptual):**
State the First Shifting Theorem of the Laplace Transform and explain its significance in the context of signals and systems.

**Answer:**
The First Shifting Theorem states that if $\mathcal{L}\{f(t)\} = F(s)$, then $\mathcal{L}\{e^{at}f(t)\} = F(s-a)$.
Its significance lies in its ability to simplify the analysis of systems or signals that exhibit exponential growth or decay. In signals and systems, multiplying a signal $f(t)$ by $e^{at}$ corresponds to scaling its frequency spectrum $F(s)$ by shifting it along the s-axis. This is crucial for understanding the behavior of damped oscillations (e.g., $e^{-bt}\cos(\omega t)$) or exponentially growing signals, and for simplifying the process of solving linear ODEs with exponential inputs.

**Question 2 (Application - Finding Transform):**
Find the Laplace Transform of $f(t) = t^3 e^{4t}$.

**Answer:**
1.  **Identify base function and shift:** The base function is $f_0(t) = t^3$. The exponential term is $e^{4t}$, so $a=4$.
2.  **Find transform of base function:** We know $\mathcal{L}\{t^n\} = \frac{n!}{s^{n+1}}$. For $n=3$, $\mathcal{L}\{t^3\} = \frac{3!}{s^{3+1}} = \frac{6}{s^4}$. Let this be $F_0(s)$.
3.  **Apply the first shifting theorem:** $\mathcal{L}\{e^{4t}t^3\} = F_0(s-4)$.
4.  **Substitute:** Replace $s$ with $(s-4)$ in $F_0(s)$.
    $\mathcal{L}\{t^3 e^{4t}\} = \frac{6}{(s-4)^4}$.

**Question 3 (Application - ODE Solving Step):**
Consider the ODE $y'' - 4y' + 3y = e^{2t}$. If you were to take the Laplace Transform of the right-hand side using the first shifting theorem, what would you get?

**Answer:**
The right-hand side is $e^{2t}$.
1.  **Identify base function and shift:** The base function is $f_0(t) = 1$. The exponential term is $e^{2t}$, so $a=2$.
2.  **Find transform of base function:** $\mathcal{L}\{1\} = \frac{1}{s}$. Let this be $F_0(s)$.
3.  **Apply the first shifting theorem:** $\mathcal{L}\{e^{2t} \cdot 1\} = F_0(s-2)$.
4.  **Substitute:** Replace $s$ with $(s-2)$ in $F_0(s)$.
    $\mathcal{L}\{e^{2t}\} = \frac{1}{(s-2)}$.

**Question 4 (Deeper Understanding/Pattern Recognition):**
Find the Laplace Transform of $f(t) = e^{-t}\cos(4t)$.

**Answer:**
1.  **Identify base function and shift:** The base function is $f_0(t) = \cos(4t)$. The exponential term is $e^{-t}$, so $a=-1$.
2.  **Find transform of base function:** We know $\mathcal{L}\{\cos(\omega t)\} = \frac{s}{s^2 + \omega^2}$. For $\omega=4$, $\mathcal{L}\{\cos(4t)\} = \frac{s}{s^2 + 4^2} = \frac{s}{s^2 + 16}$. Let this be $F_0(s)$.
3.  **Apply the first shifting theorem:** $\mathcal{L}\{e^{-t}\cos(4t)\} = F_0(s-(-1)) = F_0(s+1)$.
4.  **Substitute:** Replace $s$ with $(s+1)$ in $F_0(s)$.
    $\mathcal{L}\{e^{-t}\cos(4t)\} = \frac{(s+1)}{(s+1)^2 + 16}$.

This question is common because it tests recognition of the damped cosine form. The denominator $(s+1)^2 + 16$ is often left in this form, or expanded to $s^2 + 2s + 1 + 16 = s^2 + 2s + 17$.
