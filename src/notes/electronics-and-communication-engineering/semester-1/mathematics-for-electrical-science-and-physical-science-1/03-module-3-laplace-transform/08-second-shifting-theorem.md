---
title: "Second shifting theorem"
subject: "MATHEMATICS FOR ELECTRICAL SCIENCE AND PHYSICAL 
SCIENCE - 1"
module: "Module 3: Laplace Transform"
branch: "Electronics and Communication Engineering"
semester: 1
topicId: "68b7dc8f20463779487d9fcb"
status: "completed"
scrapedAt: "2026-05-23T17:35:06.239Z"
---
# Module 3: Laplace Transform - The Second Shifting Theorem

Welcome back, everyone! Today, we're diving deeper into the powerful world of the Laplace Transform, specifically focusing on a theorem that often comes up when dealing with piecewise-defined functions, especially those involving sudden "shifts" or delays. This is the **Second Shifting Theorem**. Understanding this theorem will be crucial for solving certain types of differential equations, particularly those that model systems with delayed inputs or changes, which is a very common scenario in Electrical and Physical Sciences.

Remember our first shifting theorem? That dealt with shifting the *frequency* (the 's' domain). This second theorem deals with shifting the *time* (the 't' domain). Think of it like this: the first theorem lets you move things left or right on the 's' axis, while this second one lets you slide things forward or backward in time.

## Understanding the "Shift" in Time: The Unit Step Function

Before we formally introduce the theorem, let's get comfortable with the tool that makes it work: the **Unit Step Function**, often denoted as $u(t-a)$ or $H(t-a)$.

You've likely encountered functions that switch on or off abruptly. Imagine turning on a light switch. At time $t=0$ (or perhaps some later time $t=a$), the light goes from being off to being on. The unit step function is the mathematical way to represent this "switching on."

*   **Definition:** The unit step function $u(t-a)$ is defined as:
    $$
    u(t-a) =
    \begin{cases}
    0 & \text{if } t < a \\
    1 & \text{if } t \geq a
    \end{cases}
    $$

    Think of $a$ as the "delay" or the point in time when the "step" occurs.
    *   If $a=0$, it's just $u(t)$, which is 0 for $t<0$ and 1 for $t \geq 0$. This is the standard switch that turns on at $t=0$.
    *   If $a > 0$, the switch is delayed. The function remains 0 until time $t=a$, and then it jumps to 1. This is like waiting for a specific time before activating something.
    *   If $a < 0$, the "switch" actually happened in the past. For $t \geq 0$, which is usually our domain of interest, the function is already 1.

    A common analogy:
    *   $u(t)$ is like a light switch that turns on at $t=0$.
    *   $u(t-2)$ is like a light switch that you only flip at $t=2$ seconds. Until then, the light is off. After 2 seconds, it's on.

### Why is this important for Laplace Transforms?

Many real-world phenomena don't start immediately at $t=0$. Think about:
*   A voltage being applied to a circuit *after* a certain delay.
*   A force being applied to a mechanical system at a specific moment.
*   A control signal activating only when a certain condition is met at a particular time.

These situations are naturally described by piecewise-defined functions, often involving the unit step function. And the Laplace transform is exceptionally good at handling these.

## The Second Shifting Theorem: The Core Idea

Now, let's state the theorem. It directly relates the Laplace transform of a time-shifted function to the Laplace transform of the original function.

**Theorem Statement:** If the Laplace transform of a function $f(t)$ is $F(s)$, i.e., $\mathcal{L}\{f(t)\} = F(s)$, then the Laplace transform of $f(t-a)u(t-a)$ is $e^{-as}F(s)$, where $a \geq 0$.

In symbols:
$$
\mathcal{L}\{f(t-a)u(t-a)\} = e^{-as} F(s)
$$

Let's unpack this. We're taking a function $f(t)$, which we know how to transform into $F(s)$. Then, we create a *new* function by:
1.  **Shifting $f(t)$ by $a$ units in time:** This means replacing every $t$ in $f(t)$ with $(t-a)$. We get $f(t-a)$.
2.  **Multiplying by $u(t-a)$:** This "activates" the shifted function $f(t-a)$ only for $t \geq a$. Before $t=a$, the function is zero because $u(t-a)$ is zero. After $t=a$, the function behaves like $f(t-a)$.

The theorem tells us that the Laplace transform of this time-shifted and "gated" function $f(t-a)u(t-a)$ is simply $e^{-as}$ multiplied by the original transform $F(s)$.

**The $e^{-as}$ factor is the hallmark of this theorem!** When you see $e^{-as}$ in the Laplace domain, it's a strong hint that a unit step function, and thus a time shift, is involved in the original time-domain function.

## Understanding *Why* it Works (The Intuition)

This is where we connect with **Course Outcome CO3: Compute Laplace transform and apply it to solve ODEs arising in engineering.** This theorem is a direct application of Laplace transform properties for solving ODEs with specific input signals.

Let's recall the definition of the Laplace transform:
$$
F(s) = \mathcal{L}\{f(t)\} = \int_0^\infty e^{-st} f(t) dt
$$

Now, let's apply this definition to our target function, $g(t) = f(t-a)u(t-a)$:
$$
\mathcal{L}\{g(t)\} = \mathcal{L}\{f(t-a)u(t-a)\} = \int_0^\infty e^{-st} f(t-a)u(t-a) dt
$$

Because $u(t-a)$ is zero for $t < a$, the integral from $0$ to $\infty$ can be split, but the first part (from $0$ to $a$) will be zero:
$$
\mathcal{L}\{f(t-a)u(t-a)\} = \int_0^a e^{-st} f(t-a)u(t-a) dt + \int_a^\infty e^{-st} f(t-a)u(t-a) dt
$$
Since $u(t-a)=0$ for $t<a$, the first integral is 0. For $t \geq a$, $u(t-a)=1$. So we have:
$$
\mathcal{L}\{f(t-a)u(t-a)\} = \int_a^\infty e^{-st} f(t-a) dt
$$

Now, let's make a substitution. This is a standard trick in calculus and Laplace transforms. Let $\tau = t-a$. This means $t = \tau+a$. Differentiating, we get $d\tau = dt$.
What are the limits of integration for $\tau$?
*   When $t=a$, $\tau = a-a = 0$.
*   As $t \to \infty$, $\tau = t-a \to \infty$.

Substitute these into the integral:
$$
\mathcal{L}\{f(t-a)u(t-a)\} = \int_0^\infty e^{-s(\tau+a)} f(\tau) d\tau
$$
Let's rearrange the exponential term:
$$
= \int_0^\infty e^{-s\tau} e^{-sa} f(\tau) d\tau
$$
Since $e^{-sa}$ does not depend on $\tau$ (our integration variable), we can pull it out of the integral:
$$
= e^{-sa} \int_0^\infty e^{-s\tau} f(\tau) d\tau
$$
And what is that integral? It's exactly the definition of the Laplace transform of $f(\tau)$! Since the variable of integration doesn't matter, $\int_0^\infty e^{-s\tau} f(\tau) d\tau = F(s)$.
$$
= e^{-sa} F(s)
$$
So, we have proven the theorem!

**Remember this:** The $e^{-as}$ term arises from the $e^{-sa}$ factor that was pulled out of the integral after the change of variables. It's the mathematical signature of a time shift by $a$.

## Examples: Making it Concrete

Let's try some examples, starting with the basics and building up.

### Example 1: Shifting a Simple Exponential Decay

Suppose we want to find the Laplace transform of $f(t) = e^{-2t}u(t-3)$.

**Thinking Process:**
1.  **Identify the core function:** The function $f(t)$ *would have been* $e^{-2t}$ if it started at $t=0$.
2.  **Identify the shift:** The presence of $u(t-3)$ tells us there's a shift by $a=3$.
3.  **Identify the shifted function:** We need to evaluate $f(t-a)$ where $f(t)=e^{-2t}$ and $a=3$. So, $f(t-3) = e^{-2(t-3)}$.
4.  **Apply the theorem:** $\mathcal{L}\{f(t-a)u(t-a)\} = e^{-as}F(s)$.
    *   First, find $F(s) = \mathcal{L}\{e^{-2t}\}$. From our standard Laplace transform table (which you should all have handy and memorized!), $\mathcal{L}\{e^{bt}\} = \frac{1}{s-b}$.
    *   So, $F(s) = \mathcal{L}\{e^{-2t}\} = \frac{1}{s - (-2)} = \frac{1}{s+2}$.
    *   Now, apply the theorem with $a=3$:
        $$
        \mathcal{L}\{e^{-2(t-3)}u(t-3)\} = e^{-3s} \left(\frac{1}{s+2}\right) = \frac{e^{-3s}}{s+2}
        $$

So, $\mathcal{L}\{e^{-2t}u(t-3)\} = \frac{e^{-3s}}{s+2}$.

**Relatable Analogy:** Imagine a radioactive substance that decays with a rate constant of 2 per unit time. If we start observing it from $t=0$, its amount is described by $e^{-2t}$. But what if we only *start measuring* this substance at $t=3$? Before $t=3$, we see nothing (or zero). From $t=3$ onwards, we see the decay process, but it's as if the decay *started* at $t=3$. The amount at any time $t \geq 3$ would be the amount that was there at $t=3$ and then decayed for $(t-3)$ time units. This would be $e^{-2(t-3)}$. The Laplace transform $\frac{e^{-3s}}{s+2}$ tells us about this delayed observation.

### Example 2: A Pulse Function

What about the Laplace transform of a function that is "on" for a specific duration and then "off"? For instance, a rectangular pulse from $t=2$ to $t=5$.

This pulse can be represented using unit step functions:
*   It turns ON at $t=2$: $u(t-2)$.
*   It turns OFF at $t=5$. To make it turn off, we subtract a unit step that starts at $t=5$: $-u(t-5)$.

So, the pulse function, let's call it $p(t)$, is:
$$
p(t) = u(t-2) - u(t-5)
$$
This function is 0 for $t<2$, it's 1 for $2 \leq t < 5$, and it's 0 for $t \geq 5$.

Now, let's find its Laplace transform:
$$
\mathcal{L}\{p(t)\} = \mathcal{L}\{u(t-2) - u(t-5)\}
$$
Using the linearity of the Laplace transform:
$$
= \mathcal{L}\{u(t-2)\} - \mathcal{L}\{u(t-5)\}
$$
For $\mathcal{L}\{u(t-2)\}$:
*   This is $\mathcal{L}\{1 \cdot u(t-2)\}$.
*   The base function is $f(t)=1$. Its Laplace transform is $F(s) = \mathcal{L}\{1\} = \frac{1}{s}$.
*   The shift is $a=2$.
*   So, $\mathcal{L}\{u(t-2)\} = e^{-2s} F(s) = e^{-2s} \left(\frac{1}{s}\right) = \frac{e^{-2s}}{s}$.

For $\mathcal{L}\{u(t-5)\}$:
*   The base function is again $f(t)=1$, so $F(s) = \frac{1}{s}$.
*   The shift is $a=5$.
*   So, $\mathcal{L}\{u(t-5)\} = e^{-5s} F(s) = e^{-5s} \left(\frac{1}{s}\right) = \frac{e^{-5s}}{s}$.

Combining these:
$$
\mathcal{L}\{p(t)\} = \frac{e^{-2s}}{s} - \frac{e^{-5s}}{s} = \frac{e^{-2s} - e^{-5s}}{s}
$$

**Relatable Analogy:** Imagine you're designing a simple traffic light system. For a pedestrian crossing, you might want the "walk" signal to appear for 3 minutes (say, from $t=2$ to $t=5$ minutes). The signal is represented by $u(t-2)$ (it turns on at $t=2$) and then turns off with $-u(t-5)$ (it turns off at $t=5$). The transform $\frac{e^{-2s} - e^{-5s}}{s}$ describes the effect of this timed "walk" signal on a system it's controlling, like the flow of traffic lights at an intersection. This is directly applicable to **CO3** where we solve ODEs modelling systems with such inputs.

### Example 3: Finding the Time-Domain Function from its Transform

The second shifting theorem is also crucial for finding the *inverse* Laplace transform. If we have a transform involving $e^{-as}$, we know how to get back to the time domain.

Suppose we are given $G(s) = \frac{e^{-4s}}{s(s-2)}$ and we need to find $g(t) = \mathcal{L}^{-1}\{G(s)\}$.

**Thinking Process:**
1.  **Identify the $e^{-as}$ term:** We see $e^{-4s}$, so $a=4$.
2.  **Identify the remaining part:** Let $H(s) = \frac{1}{s(s-2)}$.
3.  **Find the inverse transform of the remaining part:** We need to find $h(t) = \mathcal{L}^{-1}\{H(s)\}$. This often requires partial fraction decomposition.
    $$
    \frac{1}{s(s-2)} = \frac{A}{s} + \frac{B}{s-2}
    $$
    Multiplying by $s(s-2)$: $1 = A(s-2) + Bs$.
    *   If $s=0$: $1 = A(-2) \Rightarrow A = -\frac{1}{2}$.
    *   If $s=2$: $1 = B(2) \Rightarrow B = \frac{1}{2}$.
    So, $H(s) = -\frac{1}{2s} + \frac{1}{2(s-2)}$.
    Now, find the inverse transform term by term:
    $$
    h(t) = \mathcal{L}^{-1}\left\{-\frac{1}{2s} + \frac{1}{2(s-2)}\right\} = -\frac{1}{2}\mathcal{L}^{-1}\left\{\frac{1}{s}\right\} + \frac{1}{2}\mathcal{L}^{-1}\left\{\frac{1}{s-2}\right\}
    $$
    Using standard transforms: $\mathcal{L}^{-1}\{\frac{1}{s}\} = 1$ and $\mathcal{L}^{-1}\{\frac{1}{s-b}\} = e^{bt}$.
    $$
    h(t) = -\frac{1}{2}(1) + \frac{1}{2}e^{2t} = \frac{1}{2}(e^{2t} - 1)
    $$
4.  **Apply the second shifting theorem in reverse:** We found $h(t) = \mathcal{L}^{-1}\{H(s)\}$. The original transform was $G(s) = e^{-as}H(s)$, with $a=4$.
    The theorem states $\mathcal{L}\{f(t-a)u(t-a)\} = e^{-as}F(s)$.
    So, if $G(s) = e^{-as}H(s)$, then $g(t) = \mathcal{L}^{-1}\{G(s)\} = f(t-a)u(t-a)$, where $f(t) = \mathcal{L}^{-1}\{H(s)\}$.
    In our case, $f(t) = h(t) = \frac{1}{2}(e^{2t} - 1)$.
    Therefore,
    $$
    g(t) = h(t-4)u(t-4) = \frac{1}{2}(e^{2(t-4)} - 1)u(t-4)
    $$

**Key Point:** Whenever you see $e^{-as}$ multiplied by a transform $H(s)$, you find the inverse transform of $H(s)$ (let's call it $h(t)$), and then you replace $t$ with $(t-a)$ and multiply the whole thing by $u(t-a)$.

## Connection to Course Outcomes

*   **CO3: Compute Laplace transform and apply it to solve ODEs arising in engineering.** This theorem is a direct tool for CO3. Many engineering systems are described by linear ODEs, and when the input forcing function is a signal that starts or changes at a specific time, we represent it using unit step functions. The second shifting theorem allows us to correctly transform these piecewise inputs, making the ODE algebraic in the 's' domain, which we can then solve. For example, a circuit with a switch closing at $t=t_0$ will have a voltage source term like $V_0 u(t-t_0)$.

## Common Pitfalls and Tips for Exams

1.  **Confusing First and Second Shifting Theorems:** The first shifts in the $s$-domain ($e^{at}f(t) \leftrightarrow F(s-a)$), this second shifts in the $t$-domain ($f(t-a)u(t-a) \leftrightarrow e^{-as}F(s)$). Always check if the shift is on $t$ in the time domain (leading to $e^{-as}$) or on $s$ in the frequency domain (leading to a modified $F(s)$).
2.  **Incorrectly Identifying $f(t)$:** When finding $\mathcal{L}\{f(t-a)u(t-a)\}$, you first need the transform of $f(t)$, *not* $f(t-a)$. So, if you have $e^{-2(t-3)}u(t-3)$, the $f(t)$ whose transform you need is $e^{-2t}$.
3.  **Forgetting $u(t-a)$ in the Inverse Transform:** When going from $e^{-as}F(s)$ back to time, don't forget to multiply by $u(t-a)$. This ensures the function only "appears" after the shift $a$.
4.  **Partial Fraction Decomposition Errors:** These are common for the inverse transform step. Double-check your calculations.
5.  **Domain of $a$**: The theorem is stated for $a \geq 0$. If $a < 0$, $u(t-a)$ is 1 for $t \geq 0$, so the shift essentially happens before our observation starts.

**Quick Recall Tip:**
*   **Time Shift $\rightarrow$ Exponential in $s$:** A shift in time $f(t-a)$ (activated by $u(t-a)$) leads to multiplication by $e^{-as}$.
*   **Exponential in $t$ $\rightarrow$ Shift in $s$:** A multiplication by $e^{at}$ in time leads to a shift in $s$ in the transform ($F(s-a)$).

## Summary

The Second Shifting Theorem is a fundamental tool for working with time-delayed signals and functions in the Laplace domain. It directly allows us to:
*   Transform functions that are "switched on" or modified at a specific time $t=a$.
*   Easily find the inverse transform of functions that have $e^{-as}$ terms, signifying a time-delayed event.

By mastering this theorem, you gain a significant capability in analyzing systems with delayed inputs, which are prevalent in many engineering applications, aligning perfectly with **CO3**.

---

## Sample Questions and Answers

**Q1. Conceptual Question:** Explain in your own words why the factor $e^{-as}$ appears in the Laplace transform of $f(t-a)u(t-a)$.

**Answer:** The factor $e^{-as}$ arises from the definition of the Laplace transform and a change of variables. When we transform $f(t-a)u(t-a)$, the integral starts at $t=a$ due to the $u(t-a)$ term. If we substitute $\tau = t-a$, then $t = \tau+a$. The term $e^{-st}$ becomes $e^{-s(\tau+a)} = e^{-s\tau}e^{-sa}$. The $e^{-sa}$ part is a constant with respect to the integration variable $\tau$, so it's pulled out of the integral. This $e^{-sa}$ term is precisely $e^{-as}$ when written in terms of $s$ and $a$. It mathematically represents how the time shift "delays" the overall response in the Laplace domain.

**Q2. Exam-Oriented Question:** Find the Laplace transform of the function $g(t) = (t-2)^2 u(t-2)$.

**Solution:**
1.  **Identify the shift:** We have $u(t-2)$, so $a=2$.
2.  **Identify the base function $f(t)$:** The expression inside the unit step is $(t-2)^2$. This means the original function $f(t)$ (before shifting) is $f(t) = t^2$.
3.  **Find the Laplace transform of $f(t)$:** $F(s) = \mathcal{L}\{t^2\}$. Using the power rule $\mathcal{L}\{t^n\} = \frac{n!}{s^{n+1}}$, we get $F(s) = \frac{2!}{s^{2+1}} = \frac{2}{s^3}$.
4.  **Apply the Second Shifting Theorem:** $\mathcal{L}\{f(t-a)u(t-a)\} = e^{-as}F(s)$.
    Substituting $a=2$ and $F(s)=\frac{2}{s^3}$:
    $$
    \mathcal{L}\{g(t)\} = \mathcal{L}\{(t-2)^2 u(t-2)\} = e^{-2s} \left(\frac{2}{s^3}\right) = \frac{2e^{-2s}}{s^3}
    $$
    **Answer:** $\mathcal{L}\{g(t)\} = \frac{2e^{-2s}}{s^3}$.

**Q3. Exam-Oriented Question:** Find the inverse Laplace transform of $G(s) = \frac{e^{-s} - 2e^{-3s}}{s+1}$.

**Solution:**
1.  **Use linearity:**
    $$
    g(t) = \mathcal{L}^{-1}\left\{\frac{e^{-s}}{s+1} - \frac{2e^{-3s}}{s+1}\right\} = \mathcal{L}^{-1}\left\{\frac{e^{-s}}{s+1}\right\} - 2\mathcal{L}^{-1}\left\{\frac{e^{-3s}}{s+1}\right\}
    $$
2.  **Focus on the term $\frac{1}{s+1}$:** Let $H(s) = \frac{1}{s+1}$.
3.  **Find the inverse transform of $H(s)$:** $h(t) = \mathcal{L}^{-1}\left\{\frac{1}{s+1}\right\}$. Using $\mathcal{L}^{-1}\left\{\frac{1}{s-b}\right\} = e^{bt}$, we get $h(t) = e^{-t}$.
4.  **Apply the Second Shifting Theorem in reverse for each term:**
    *   For the first term, $\frac{e^{-s}}{s+1}$: Here, $a=1$ and $H(s) = \frac{1}{s+1}$ with $h(t) = e^{-t}$. So, $\mathcal{L}^{-1}\left\{\frac{e^{-s}}{s+1}\right\} = h(t-1)u(t-1) = e^{-(t-1)}u(t-1)$.
    *   For the second term, $\frac{e^{-3s}}{s+1}$: Here, $a=3$ and $H(s) = \frac{1}{s+1}$ with $h(t) = e^{-t}$. So, $\mathcal{L}^{-1}\left\{\frac{e^{-3s}}{s+1}\right\} = h(t-3)u(t-3) = e^{-(t-3)}u(t-3)$.
5.  **Combine the results:**
    $$
    g(t) = e^{-(t-1)}u(t-1) - 2[e^{-(t-3)}u(t-3)]
    $$
    $$
    g(t) = e^{-t+1}u(t-1) - 2e^{-t+3}u(t-3)
    $$
    **Answer:** $g(t) = e^{1-t}u(t-1) - 2e^{3-t}u(t-3)$.

This demonstrates how the second shifting theorem is essential for both forward and backward transformations involving time delays, a key skill for **CO3**.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=fNk_zzaMoEs) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=7UJ4CFR1894) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=IYdiKeQ9xME) |
