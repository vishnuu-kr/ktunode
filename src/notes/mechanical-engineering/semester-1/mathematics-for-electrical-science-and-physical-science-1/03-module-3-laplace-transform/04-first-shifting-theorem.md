---
title: "First shifting theorem"
subject: "MATHEMATICS FOR ELECTRICAL SCIENCE AND 
PHYSICAL  SCIENCE - 1"
module: "Module 3: Laplace Transform"
branch: "Mechanical Engineering"
semester: 1
topicId: "68bd1edefeb4799d95e83557"
status: "completed"
scrapedAt: "2026-05-20T17:39:30.149Z"
---
## Module 3: Laplace Transform - The First Shifting Theorem

Welcome, everyone, to our journey into the Laplace Transform! In this module, we're exploring a powerful tool that simplifies the analysis of systems, especially in electrical engineering and physics. We've already learned what the Laplace Transform is and how to compute it for basic functions. Today, we're going to unlock one of its most useful properties: the **First Shifting Theorem**.

Think of the Laplace Transform as a translator. It takes functions of time, like signals or responses in a circuit, and translates them into a different domain – the *s*-domain. This translation often makes complex problems much easier to handle. The First Shifting Theorem is like a rule in this translation process that allows us to efficiently transform functions that have been "shifted" in time.

### Understanding Time Shifting

Before we dive into the theorem itself, let's make sure we're clear on what "time shifting" means. Imagine you have a signal, say, a voltage pulse that starts at time $t=0$. If we delay that same pulse so it now starts at time $t=a$ (where $a > 0$), we've performed a time shift.

**Analogy:** Think about a favorite song. The original song plays from start to finish. Now, imagine you want to play that song, but with a 5-second delay. You press play, wait 5 seconds, and *then* the song starts. The song itself is unchanged, but its *appearance* in time has been shifted. This is exactly what we mean by time shifting in the context of functions.

Mathematically, if we have a function $f(t)$, a time-shifted version of it starting at $t=a$ is represented by $f(t-a)$. However, this is only valid for $t \ge a$. For $t < a$, the shifted function is zero. This is where the **unit step function**, often denoted as $u(t)$ or $H(t)$, comes in. The unit step function is defined as:

$$
u(t) = \begin{cases} 0 & \text{if } t < 0 \\ 1 & \text{if } t \ge 0 \end{cases}
$$

So, the time-shifted function $f(t-a)$ can be precisely represented as $f(t-a)u(t-a)$. This $u(t-a)$ term acts like a switch: it's off (zero) before $t=a$ and on (one) at or after $t=a$, ensuring the function only "starts" at the shifted time.

### The First Shifting Theorem: The Core Idea

Now, let's connect this to the Laplace Transform. The First Shifting Theorem tells us how the Laplace Transform of a time-shifted function relates to the Laplace Transform of the original function.

**Statement of the First Shifting Theorem:**

If the Laplace Transform of a function $f(t)$ is $F(s)$, i.e., $\mathcal{L}\{f(t)\} = F(s)$, then the Laplace Transform of the time-shifted function $f(t-a)u(t-a)$ is given by:

$$
\mathcal{L}\{f(t-a)u(t-a)\} = e^{-as}F(s)
$$

where $a > 0$.

**Explanation:** What does this mean in plain English? It means that if you take a function $f(t)$ and shift it in time by 'a' units (making it start at $t=a$ instead of $t=0$), its Laplace Transform gets multiplied by $e^{-as}$. This is a fantastic simplification! Instead of recomputing the entire Laplace Transform for a shifted function, we can simply take the transform of the original function and multiply it by this exponential term.

**Why $e^{-as}$?** This factor $e^{-as}$ arises directly from the definition of the Laplace Transform. Remember, the Laplace Transform involves an integral from 0 to infinity:
$F(s) = \int_0^\infty e^{-st} f(t) dt$.

When we consider $f(t-a)u(t-a)$, the integral becomes:
$\mathcal{L}\{f(t-a)u(t-a)\} = \int_0^\infty e^{-st} f(t-a)u(t-a) dt$.

Since $u(t-a)$ is zero for $t < a$, the integral effectively starts from $a$:
$= \int_a^\infty e^{-st} f(t-a) dt$.

Now, let's make a substitution. Let $\tau = t-a$. This means $t = \tau+a$, and $dt = d\tau$. When $t=a$, $\tau=0$. As $t \to \infty$, $\tau \to \infty$. Substituting these into the integral:
$= \int_0^\infty e^{-s(\tau+a)} f(\tau) d\tau$
$= \int_0^\infty e^{-s\tau} e^{-sa} f(\tau) d\tau$
$= e^{-sa} \int_0^\infty e^{-s\tau} f(\tau) d\tau$.

And look at that! The integral $\int_0^\infty e^{-s\tau} f(\tau) d\tau$ is precisely the Laplace Transform of $f(\tau)$, which is $F(s)$. So, we arrive at $e^{-sa}F(s)$. This derivation, found in many standard texts like Kreyszig's *Advanced Engineering Mathematics*, shows the mathematical foundation of the theorem.

**Connecting to Course Outcomes:** This theorem directly supports **CO3: Compute Laplace transform and apply it to solve ODEs arising in engineering.** When we encounter differential equations where the input forcing function is activated at a later time, this theorem is our go-to tool.

### Examples to Illustrate the Power

Let's walk through some examples. We'll start simple and build up.

**Example 1: Shifting the Unit Step Function itself**

We know that $\mathcal{L}\{u(t)\} = \frac{1}{s}$.
What is $\mathcal{L}\{u(t-a)u(t-a)\}$? Notice that $u(t-a)u(t-a)$ is just $u(t-a)$ because $u(x) \cdot u(x) = u(x)$.
Using the First Shifting Theorem with $f(t) = u(t)$ and $a=a$:
$\mathcal{L}\{u(t-a)\} = e^{-as} \mathcal{L}\{u(t)\} = e^{-as} \left(\frac{1}{s}\right) = \frac{e^{-as}}{s}$.

**Relatable Situation:** Imagine you're baking cookies. The recipe calls for baking for 20 minutes. That's your $f(t) = \text{bake for 20 min}$. If you decide to *delay* the baking by 10 minutes (maybe you want to finish your call first), the baking process is now $f(t-10)$, and it only happens for $t \ge 10$. The Laplace Transform of this delayed baking process would be $e^{-10s}$ times the transform of "bake for 20 min."

**Example 2: Shifting an Exponential Function**

Let $f(t) = e^{bt}$. We know its Laplace Transform is $F(s) = \frac{1}{s-b}$ (provided $s > b$).

Now, let's find the Laplace Transform of $f(t-a)u(t-a) = e^{b(t-a)}u(t-a)$.
Using the First Shifting Theorem:
$\mathcal{L}\{e^{b(t-a)}u(t-a)\} = e^{-as} \mathcal{L}\{e^{bt}\}$.
Substitute the known transform of $e^{bt}$:
$= e^{-as} \left(\frac{1}{s-b}\right) = \frac{e^{-as}}{s-b}$.

**Relatable Situation:** Consider a savings account. If you deposit money, it grows exponentially over time according to $P(t) = P_0 e^{rt}$, where $r$ is the interest rate. The Laplace Transform helps us analyze how the *value* of this investment behaves in the *s-domain*. Now, suppose you *delay* your initial deposit by 5 years. The amount you have after $t$ years would be $P(t-5)u(t-5) = P_0 e^{r(t-5)}u(t-5)$. The First Shifting Theorem tells us that the Laplace Transform of this delayed investment is simply $e^{-5s}$ times the Laplace Transform of the original deposit. This is crucial for analyzing investment strategies with staggered contributions.

**Example 3: Shifting a Sine Function**

Let $f(t) = \sin(\omega t)$. We know $\mathcal{L}\{\sin(\omega t)\} = \frac{\omega}{s^2 + \omega^2}$.

What is $\mathcal{L}\{\sin(\omega(t-a))u(t-a)\}$?
Applying the theorem:
$\mathcal{L}\{\sin(\omega(t-a))u(t-a)\} = e^{-as} \mathcal{L}\{\sin(\omega t)\}$.
$= e^{-as} \left(\frac{\omega}{s^2 + \omega^2}\right) = \frac{\omega e^{-as}}{s^2 + \omega^2}$.

**Exam Tip:** Often, exam questions will present a function like $\sin(\omega(t-a))$ and expect you to recognize that it's a shifted sine wave. The key is to identify $f(t)$ and $a$. Here, $f(t) = \sin(\omega t)$ and the shift is by $a$.

### Applications in Solving Differential Equations (CO3 Link)

This theorem is a cornerstone for solving non-homogeneous linear differential equations with constant coefficients, especially when the forcing function (the term on the right-hand side) is piecewise defined or starts at a time other than $t=0$.

Consider a system described by:
$y''(t) + 3y'(t) + 2y(t) = r(t)$

where $r(t)$ is some input.
If $r(t)$ is a simple function like $e^{2t}$, we know how to handle it. But what if $r(t)$ is $e^{2(t-1)}u(t-1)$?

Let's take the Laplace Transform of both sides of the equation. Let $Y(s) = \mathcal{L}\{y(t)\}$.
We use the standard Laplace transform properties for derivatives:
$\mathcal{L}\{y''(t)\} = s^2Y(s) - sy(0) - y'(0)$
$\mathcal{L}\{y'(t)\} = sY(s) - y(0)$

So, the transformed equation becomes:
$(s^2Y(s) - sy(0) - y'(0)) + 3(sY(s) - y(0)) + 2Y(s) = \mathcal{L}\{e^{2(t-1)}u(t-1)\}$.

Now, we need to find $\mathcal{L}\{e^{2(t-1)}u(t-1)\}$.
Here, the original function is $f(t) = e^{2t}$, and the shift is $a=1$.
We know $\mathcal{L}\{e^{2t}\} = \frac{1}{s-2}$.
Using the First Shifting Theorem:
$\mathcal{L}\{e^{2(t-1)}u(t-1)\} = e^{-1s} \mathcal{L}\{e^{2t}\} = \frac{e^{-s}}{s-2}$.

So, the transformed equation, after rearranging terms involving initial conditions, will look like:
$(s^2 + 3s + 2)Y(s) = \text{initial conditions} + \frac{e^{-s}}{s-2}$.

Then, we solve for $Y(s)$:
$Y(s) = \frac{\text{initial conditions}}{s^2 + 3s + 2} + \frac{e^{-s}}{(s-2)(s^2 + 3s + 2)}$.

The term $\frac{e^{-s}}{(s-2)(s^2 + 3s + 2)}$ is where the First Shifting Theorem has made a direct impact. To find the time-domain solution $y(t)$, we would then use inverse Laplace Transforms. The $e^{-as}$ factor in $Y(s)$ will translate back to a time shift in our solution $y(t)$. Specifically, if $\mathcal{L}^{-1}\{G(s)\} = g(t)$, then $\mathcal{L}^{-1}\{e^{-as}G(s)\} = g(t-a)u(t-a)$.

This process is fundamental for engineers analyzing systems with delayed inputs, like a control signal that is activated after a certain time, or a disturbance that occurs later in the operation of a system. This directly demonstrates how the Laplace transform, with its shifting theorem, helps us solve real-world engineering problems, fulfilling **CO3**.

### Connecting to Other Course Outcomes

While the First Shifting Theorem's primary impact is on **CO3**, understanding it indirectly helps with other outcomes.

*   **CO1: Solve systems of linear equations and diagonalize matrices.** While not directly using this theorem, the algebraic manipulations we do in the *s*-domain to solve for $Y(s)$ are analogous to solving linear systems. Understanding how transforms simplify these operations builds a foundation for matrix methods.
*   **CO2: Solve homogeneous and non-homogeneous linear differential equation with constant coefficients.** The First Shifting Theorem is a specific tool within the broader context of solving ODEs. It empowers us to handle a particular type of non-homogeneity (delayed inputs) more efficiently.
*   **CO4: Determine the Taylor series and evaluate Fourier series expansion for different periodic functions.** This might seem distant, but understanding function behavior in different domains (time, frequency, *s*-domain) gives a more holistic view of signal analysis. Fourier series deal with periodic signals, Laplace transforms with causal signals (though extended to non-causal). The conceptual links between these transformational tools are valuable for a complete understanding of signal processing.

### Important Points to Remember

Let's summarize the key takeaways. This is crucial for your understanding and for tackling exam questions.

*   **The Essence:** The First Shifting Theorem allows us to transform a function that has been delayed in time.
*   **The Rule:** $\mathcal{L}\{f(t-a)u(t-a)\} = e^{-as}F(s)$, where $F(s) = \mathcal{L}\{f(t)\}$.
*   **Identification is Key:** When you see a function like $f(t-a)u(t-a)$, you must be able to identify:
    *   The "original" function $f(t)$.
    *   The time shift amount $a$.
*   **The $e^{-as}$ factor:** This is the signature of the First Shifting Theorem in the Laplace domain.
*   **Reverse (Inverse) Shifting:** Similarly, if you see $e^{-as}G(s)$ in your $Y(s)$ solution, you know its inverse transform will be $g(t-a)u(t-a)$, where $g(t) = \mathcal{L}^{-1}\{G(s)\}$.

**Common Pitfall:** Sometimes students confuse the First Shifting Theorem with the Second Shifting Theorem (which deals with delaying the *transformed* function). Always remember: the First Shifting Theorem shifts the *original* function $f(t)$ and introduces $e^{-as}$ in the *s*-domain.

**From the Textbooks:** Kreyszig's *Advanced Engineering Mathematics* (Chapter 6 on Laplace Transforms) and Anton, Biven, Davis's *Calculus* provide rigorous mathematical definitions and proofs for these theorems. Bird's *Higher Engineering Mathematics* and Ramana's *Higher Engineering Mathematics* also offer excellent explanations and numerous examples relevant to engineering applications. Haykin and Van Veen's *Signals and Systems* would be the place to look for how these transforms are used in practical signal analysis.

### Sample Questions and Answers

Let's test your understanding with some practice questions.

**Question 1 (Conceptual):**
If $\mathcal{L}\{f(t)\} = F(s)$, what is $\mathcal{L}\{f(t-3)u(t-3)\}$?

**Answer:**
This question directly tests the definition of the First Shifting Theorem.
Here, the original function is $f(t)$ and the time shift is $a=3$.
According to the theorem, $\mathcal{L}\{f(t-a)u(t-a)\} = e^{-as}F(s)$.
Substituting $a=3$, we get:
$\mathcal{L}\{f(t-3)u(t-3)\} = e^{-3s}F(s)$.

**Question 2 (Application):**
Find the Laplace Transform of $t^2 u(t-2)$.

**Answer:**
This requires careful identification of the components.
The function is $t^2 u(t-2)$. We need to express this in the form $f(t-a)u(t-a)$.
Here, the shift is clearly $a=2$. So, we are looking at $f(t-2)u(t-2)$.
This means $f(t-2) = t^2$.
To find $f(t)$, we replace $(t-2)$ with $\tau$, so $t = \tau+2$.
Thus, $f(\tau) = (\tau+2)^2$.
Replacing $\tau$ with $t$ for the function definition, we get $f(t) = (t+2)^2$.

Now we need to find $\mathcal{L}\{f(t)\} = \mathcal{L}\{(t+2)^2\}$.
First, expand $(t+2)^2 = t^2 + 4t + 4$.
Then, take the Laplace Transform term by term:
$\mathcal{L}\{t^2 + 4t + 4\} = \mathcal{L}\{t^2\} + 4\mathcal{L}\{t\} + 4\mathcal{L}\{1\}$
Using standard transforms:
$\mathcal{L}\{t^n\} = \frac{n!}{s^{n+1}}$ and $\mathcal{L}\{1\} = \frac{1}{s}$.
So, $\mathcal{L}\{t^2\} = \frac{2!}{s^{2+1}} = \frac{2}{s^3}$.
$\mathcal{L}\{t\} = \frac{1!}{s^{1+1}} = \frac{1}{s^2}$.
$\mathcal{L}\{1\} = \frac{1}{s}$.

Therefore, $F(s) = \mathcal{L}\{(t+2)^2\} = \frac{2}{s^3} + 4\left(\frac{1}{s^2}\right) + 4\left(\frac{1}{s}\right) = \frac{2}{s^3} + \frac{4}{s^2} + \frac{4}{s}$.

Finally, apply the First Shifting Theorem with $a=2$:
$\mathcal{L}\{t^2 u(t-2)\} = \mathcal{L}\{(t+2-2)^2 u(t-2)\} = e^{-2s} \mathcal{L}\{(t+2)^2\}$
$\mathcal{L}\{t^2 u(t-2)\} = e^{-2s} \left(\frac{2}{s^3} + \frac{4}{s^2} + \frac{4}{s}\right)$.

**Question 3 (Inverse Transform):**
Find the inverse Laplace Transform of $G(s) = \frac{e^{-4s}}{s-5}$.

**Answer:**
This involves recognizing the $e^{-as}$ factor, which indicates the First Shifting Theorem (in its inverse form) was used.
We have $G(s) = e^{-4s} \left(\frac{1}{s-5}\right)$.
Let $H(s) = \frac{1}{s-5}$. We know that the inverse Laplace Transform of $H(s)$ is $h(t) = \mathcal{L}^{-1}\left\{\frac{1}{s-5}\right\} = e^{5t}$.

The First Shifting Theorem for inverse transforms states:
If $\mathcal{L}^{-1}\{H(s)\} = h(t)$, then $\mathcal{L}^{-1}\{e^{-as}H(s)\} = h(t-a)u(t-a)$.

In our case, $a=4$ and $H(s) = \frac{1}{s-5}$, so $h(t) = e^{5t}$.
Therefore, the inverse Laplace Transform of $G(s)$ is:
$g(t) = \mathcal{L}^{-1}\{G(s)\} = h(t-4)u(t-4) = e^{5(t-4)}u(t-4)$.

This concludes our look at the First Shifting Theorem. It's a fundamental property that, once mastered, will significantly streamline your work with Laplace Transforms, especially when dealing with problems involving time delays. Keep practicing, and you'll find it becomes second nature!

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=WUvTyaaNkzM) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=tyDKR4FG3Yw) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=jZ5z11sK0Mg) |
