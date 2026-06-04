---
title: "Convolution theorem (without proof) and its application to finding inverse Laplace transform of products of functions."
subject: "MATHEMATICS FOR ELECTRICAL SCIENCE AND 
PHYSICAL  SCIENCE - 1"
module: "Module 3: Laplace Transform"
branch: "Civil Engineering"
semester: 1
topicId: "68b54565d74ec52cc09129e9"
status: "completed"
scrapedAt: "2026-05-20T18:31:07.278Z"
---
# Module 3: Laplace Transform - The Convolution Theorem and Its Applications

Welcome, everyone! Today, we're diving into a really powerful tool within Laplace transforms: the **Convolution Theorem**. This theorem is going to unlock a new way for us to tackle some tricky problems, especially when we need to find the inverse Laplace transform of a product of two functions. Remember from our previous lectures that the Laplace transform is excellent for converting differential equations into algebraic equations, making them much easier to solve. But what happens when the solution involves the inverse transform of something like $F(s)G(s)$? This is where convolution comes in, and it's a concept that's deeply connected to how systems respond over time, a crucial idea in both Electrical and Physical Sciences.

This topic directly supports **Course Outcome 3 (CO3): Compute Laplace transform and apply it to solve ODEs arising in engineering.** Specifically, understanding convolution helps us solve ODEs where the input function might be a product of simpler functions, or where the system's response involves integrating over past inputs, which is exactly what convolution describes.

## 1. What is Convolution? A Gentle Introduction

Before we jump into the theorem itself, let's get a feel for what convolution *means*. Imagine you're throwing a pebble into a still pond. The ripple is the "response" to the "input" (the pebble). Now, imagine you throw a second pebble a moment later. The new ripples will interact with the old ones. Convolution, in a mathematical sense, describes how the "response" of a system to a series of "inputs" unfolds over time, considering the history of those inputs and the system's own characteristics.

Think of it like this:
*   **System:** Imagine a radio receiver.
*   **Input:** The radio waves broadcast from a station.
*   **Output:** The sound you hear.

The sound you hear at any given moment depends not just on the radio waves arriving *right now*, but also on how the receiver "remembers" and processes the waves that arrived a little bit earlier. It's like a weighted average of past inputs, where the "weights" are determined by the system's impulse response.

Mathematically, the convolution of two functions, say $f(t)$ and $g(t)$, denoted as $(f * g)(t)$, is defined as:

$$(f * g)(t) = \int_0^t f(\tau) g(t-\tau) d\tau$$

Here, $\tau$ is just a dummy variable of integration. We are essentially sliding one function (with its time axis reversed, $g(t-\tau)$) across the other ($f(\tau)$), multiplying them at each position, and integrating the product. The result, $(f * g)(t)$, tells us the combined effect at time $t$.

This integral form might look a bit daunting, but it's a fundamental concept in signal processing and system analysis. As Kreyszig mentions in his "Advanced Engineering Mathematics," convolution is deeply tied to the behavior of linear time-invariant (LTI) systems, which are ubiquitous in engineering.

## 2. The Convolution Theorem: Connecting Multiplication in the s-Domain to Convolution in the t-Domain

Now, the magic of Laplace transforms is that they often turn difficult operations in one domain into simpler ones in another. We've seen that differentiation in the $t$-domain becomes multiplication by $s$ in the $s$-domain, and integration in the $t$-domain becomes division by $s$. What about multiplication in the $s$-domain? That is, if we have $Y(s) = F(s)G(s)$, what is $y(t) = \mathcal{L}^{-1}\{F(s)G(s)\}$?

This is precisely where the **Convolution Theorem** comes to our rescue. It states:

**If $F(s) = \mathcal{L}\{f(t)\}$ and $G(s) = \mathcal{L}\{g(t)\}$, then $\mathcal{L}\{(f * g)(t)\} = F(s)G(s)$.**

And crucially for us, the converse is also true:

**$\mathcal{L}^{-1}\{F(s)G(s)\} = (f * g)(t) = \int_0^t f(\tau) g(t-\tau) d\tau$.**

This is an incredibly powerful result! It means that if we can find the inverse Laplace transforms of $F(s)$ and $G(s)$ individually, say $f(t)$ and $g(t)$, then the inverse Laplace transform of their product $F(s)G(s)$ is simply the convolution of $f(t)$ and $g(t)$.

Remember this: **Multiplication of transforms in the $s$-domain corresponds to convolution of the functions in the $t$-domain.**

This theorem is a cornerstone when dealing with problems that involve systems with memory or when the forcing function is a product of simpler functions. For example, in electrical circuits, if you have a voltage source that's a product of two time-varying signals, finding the current using Laplace transforms might involve this theorem.

## 3. Applying the Convolution Theorem to Find Inverse Laplace Transforms

The real utility of this theorem lies in finding $\mathcal{L}^{-1}\{F(s)G(s)\}$. Here's a general approach:

1.  **Identify $F(s)$ and $G(s)$:** Given a function of $s$ that is a product of two simpler functions, $H(s) = F(s)G(s)$, separate it into these two parts. Often, you can choose $F(s)$ and $G(s)$ in different ways, and the choice might depend on which inverse transform is easier to find.
2.  **Find the Inverse Laplace Transforms:** Determine $f(t) = \mathcal{L}^{-1}\{F(s)\}$ and $g(t) = \mathcal{L}^{-1}\{G(s)\}$. You'll use your existing knowledge of standard Laplace transform pairs for this.
3.  **Compute the Convolution Integral:** Apply the convolution formula:
    $$(f * g)(t) = \int_0^t f(\tau) g(t-\tau) d\tau$$
    This is the most involved step and requires good integration skills.
4.  **Evaluate the Integral:** Carefully perform the integration to find the resulting function of $t$.

Let's look at an example. Suppose we need to find the inverse Laplace transform of $H(s) = \frac{1}{s(s-a)}$.

*   **Step 1: Identify $F(s)$ and $G(s)$**
    We can choose $F(s) = \frac{1}{s}$ and $G(s) = \frac{1}{s-a}$.

*   **Step 2: Find Inverse Laplace Transforms**
    From our standard tables (like those in Anton's Calculus or Bird's Higher Engineering Mathematics), we know:
    $f(t) = \mathcal{L}^{-1}\left\{\frac{1}{s}\right\} = 1$ (for $t \ge 0$)
    $g(t) = \mathcal{L}^{-1}\left\{\frac{1}{s-a}\right\} = e^{at}$ (for $t \ge 0$)

*   **Step 3: Compute the Convolution Integral**
    Now we apply the formula:
    $$(f * g)(t) = \int_0^t f(\tau) g(t-\tau) d\tau$$
    Substituting our functions:
    $$(f * g)(t) = \int_0^t (1) \cdot e^{a(t-\tau)} d\tau$$

*   **Step 4: Evaluate the Integral**
    This is a straightforward integral:
    $$(f * g)(t) = \int_0^t e^{at} e^{-a\tau} d\tau$$
    Since $e^{at}$ is constant with respect to $\tau$, we can pull it out:
    $$(f * g)(t) = e^{at} \int_0^t e^{-a\tau} d\tau$$
    Now, integrate $e^{-a\tau}$:
    $$(f * g)(t) = e^{at} \left[ -\frac{1}{a} e^{-a\tau} \right]_0^t$$
    Evaluate at the limits:
    $$(f * g)(t) = e^{at} \left( -\frac{1}{a} e^{-at} - \left(-\frac{1}{a} e^0\right) \right)$$
    $$(f * g)(t) = e^{at} \left( -\frac{1}{a} e^{-at} + \frac{1}{a} \right)$$
    Distribute $e^{at}$:
    $$(f * g)(t) = -\frac{1}{a} e^{at} e^{-at} + \frac{1}{a} e^{at}$$
    $$(f * g)(t) = -\frac{1}{a} + \frac{1}{a} e^{at}$$
    $$(f * g)(t) = \frac{1}{a} (e^{at} - 1)$$

So, $\mathcal{L}^{-1}\left\{\frac{1}{s(s-a)}\right\} = \frac{1}{a} (e^{at} - 1)$.

Notice something important here. If we had used partial fraction decomposition on $\frac{1}{s(s-a)}$, we would get:
$\frac{1}{s(s-a)} = \frac{A}{s} + \frac{B}{s-a}$
$1 = A(s-a) + Bs$
If $s=0$, $1 = A(-a) \implies A = -\frac{1}{a}$.
If $s=a$, $1 = B(a) \implies B = \frac{1}{a}$.
So, $\frac{1}{s(s-a)} = -\frac{1}{a}\frac{1}{s} + \frac{1}{a}\frac{1}{s-a}$.
Taking the inverse Laplace transform:
$\mathcal{L}^{-1}\left\{\frac{1}{s(s-a)}\right\} = -\frac{1}{a} \mathcal{L}^{-1}\left\{\frac{1}{s}\right\} + \frac{1}{a} \mathcal{L}^{-1}\left\{\frac{1}{s-a}\right\} = -\frac{1}{a}(1) + \frac{1}{a}e^{at} = \frac{1}{a}(e^{at}-1)$.

We got the same answer! This is a good check, and it highlights that convolution is an alternative method to partial fractions for finding inverse Laplace transforms of products. Sometimes, partial fractions can be cumbersome if the denominator is of high degree or has difficult roots. In those cases, convolution might be a more direct route.

## 4. Example: A System with an Integrator and an Exponential Decay

Let's consider another example to solidify our understanding. Suppose we want to find the inverse Laplace transform of $H(s) = \frac{1}{s(s+2)}$.

We can use convolution here.
Let $F(s) = \frac{1}{s}$ and $G(s) = \frac{1}{s+2}$.
Then $f(t) = \mathcal{L}^{-1}\left\{\frac{1}{s}\right\} = 1$ and $g(t) = \mathcal{L}^{-1}\left\{\frac{1}{s+2}\right\} = e^{-2t}$.

Now, the convolution integral:
$$(f * g)(t) = \int_0^t f(\tau) g(t-\tau) d\tau$$
$$(f * g)(t) = \int_0^t (1) \cdot e^{-2(t-\tau)} d\tau$$
$$(f * g)(t) = \int_0^t e^{-2t} e^{2\tau} d\tau$$
Pulling out the $e^{-2t}$ term:
$$(f * g)(t) = e^{-2t} \int_0^t e^{2\tau} d\tau$$
Integrate $e^{2\tau}$:
$$(f * g)(t) = e^{-2t} \left[ \frac{1}{2} e^{2\tau} \right]_0^t$$
Evaluate at the limits:
$$(f * g)(t) = e^{-2t} \left( \frac{1}{2} e^{2t} - \frac{1}{2} e^0 \right)$$
$$(f * g)(t) = e^{-2t} \left( \frac{1}{2} e^{2t} - \frac{1}{2} \right)$$
Distribute $e^{-2t}$:
$$(f * g)(t) = \frac{1}{2} e^{-2t} e^{2t} - \frac{1}{2} e^{-2t}$$
$$(f * g)(t) = \frac{1}{2} - \frac{1}{2} e^{-2t}$$
$$(f * g)(t) = \frac{1}{2} (1 - e^{-2t})$$

So, $\mathcal{L}^{-1}\left\{\frac{1}{s(s+2)}\right\} = \frac{1}{2}(1 - e^{-2t})$.

This is a beautiful result! It tells us how a system with a "gain" of $\frac{1}{s+2}$ (which represents an exponential decay effect) responds to a step input (represented by $\frac{1}{s}$). The output is a signal that rises exponentially towards a steady state. This is a very common behavior in many physical systems, like charging a capacitor through a resistor, where the voltage builds up over time. The $\frac{1}{s}$ part signifies the step input (like turning on a voltage source), and the $\frac{1}{s+2}$ part signifies the system's natural response.

Think about this scenario from Simon Haykin's "Signals and Systems." If $f(t)$ is the input signal to a system and $h(t)$ is the system's impulse response, the output $y(t)$ is given by the convolution $y(t) = (h * f)(t)$. The Laplace transform then gives us $Y(s) = H(s)F(s)$. If we know the system's transfer function $H(s)$ and the input's transform $F(s)$, we can find the output transform $Y(s)$, and then use the convolution theorem to find the output signal $y(t)$, especially if $F(s)$ is a product of simpler terms.

## 5. Choosing $F(s)$ and $G(s)$: A Strategic Decision

Sometimes, a function $H(s)$ can be decomposed into $F(s)G(s)$ in multiple ways. For example, $H(s) = \frac{1}{s^2+1} \cdot \frac{1}{s+1}$ or $H(s) = \frac{1}{s+1} \cdot \frac{1}{s^2+1}$. In this case, $f(t) = \sin(t)$ and $g(t) = e^{-t}$, or vice versa. The convolution integral will be:

$$\int_0^t \sin(\tau) e^{-(t-\tau)} d\tau \quad \text{or} \quad \int_0^t e^{-\tau} \sin(t-\tau) d\tau$$

Both integrals will yield the same result for the inverse Laplace transform of $\frac{1}{(s+1)(s^2+1)}$. The key is to pick the decomposition that makes the integration simpler. Often, simpler algebraic functions or basic exponentials are easier to handle within the integral.

A crucial point to remember, as emphasized in textbooks like Ramana's "Higher Engineering Mathematics," is that the convolution integral requires us to integrate. So, if one of the functions, say $g(t)$, is simple to integrate with respect to $\tau$ when the other function is $f(\tau)$, that's a good choice.

Let's take $H(s) = \frac{1}{(s+1)(s+2)}$.
We can choose $F(s) = \frac{1}{s+1}$ and $G(s) = \frac{1}{s+2}$.
Then $f(t) = e^{-t}$ and $g(t) = e^{-2t}$.
The convolution integral is:
$$(f * g)(t) = \int_0^t e^{-\tau} e^{-2(t-\tau)} d\tau$$
$$(f * g)(t) = \int_0^t e^{-\tau} e^{-2t} e^{2\tau} d\tau$$
$$(f * g)(t) = e^{-2t} \int_0^t e^{\tau} d\tau$$
$$(f * g)(t) = e^{-2t} \left[ e^{\tau} \right]_0^t$$
$$(f * g)(t) = e^{-2t} (e^t - e^0)$$
$$(f * g)(t) = e^{-2t} (e^t - 1)$$
$$(f * g)(t) = e^{-t} - e^{-2t}$$

This is much cleaner than if we had tried to integrate something like $\sin(t-\tau)e^{-\tau}$ if our functions were trigonometric.

## 6. Why is Convolution Important in Engineering?

Understanding convolution is vital because it directly models how systems respond to inputs.

*   **Electrical Engineering:** In circuit analysis, the output voltage or current of a system (like an RC or RLC circuit) is the convolution of the input signal with the circuit's impulse response. For instance, if you have a filter circuit, its impulse response describes how it reacts to a sudden spike. If you then apply a complex signal, the output is the convolution of the complex signal and the impulse response. This is fundamental to understanding system stability and transient behavior.
*   **Physical Science:** In physics, convolution appears in areas like optics (diffraction patterns), signal processing for sensors, and even in probability theory (sum of independent random variables). For example, if you're analyzing a signal from a detector, the recorded signal is the true signal convolved with the detector's response function (which might smear out sharp edges).

The ability to compute inverse Laplace transforms of products of functions using convolution is a direct pathway to solving many differential equations that describe these physical phenomena, tying back perfectly to **CO3**. It allows us to analyze the behavior of systems when the input isn't a simple step or exponential, but a more complex combination.

## 7. Common Pitfalls and Exam Tips

*   **Integration Errors:** The most common mistakes happen during the evaluation of the convolution integral. Be very careful with the limits of integration and the algebra involved, especially with exponential or trigonometric functions.
*   **Incorrectly Identifying $f(t)$ and $g(t)$:** Always ensure you are using the correct standard Laplace transform pairs. Double-check your tables!
*   **Forgetting the Integral Limits:** The convolution is always from 0 to $t$.
*   **Swapping $f(\tau)$ and $g(t-\tau)$:** While the convolution is commutative ($(f*g)(t) = (g*f)(t)$), when setting up the integral, make sure you correctly substitute into the formula $\int_0^t f(\tau) g(t-\tau) d\tau$.
*   **When to use Convolution vs. Partial Fractions:** Use convolution when partial fraction decomposition becomes very complex, or when the problem is specifically designed to test convolution. For simpler rational functions, partial fractions might be quicker.

**Exam Tip:** If you're asked to find the inverse Laplace transform of a product $F(s)G(s)$, and the prompt doesn't specify *how*, consider both partial fractions and convolution. If partial fractions are tedious, convolution is your friend. Sometimes, the structure of the problem might hint at which method is preferred.

## 8. Summary

The Convolution Theorem is a bridge between multiplication in the Laplace domain ($s$-domain) and convolution in the time domain ($t$-domain). Specifically:
$\mathcal{L}^{-1}\{F(s)G(s)\} = (f * g)(t) = \int_0^t f(\tau) g(t-\tau) d\tau$.

This theorem is essential for:
*   Solving ODEs where the forcing function is a product.
*   Analyzing the response of LTI systems.
*   Providing an alternative method to partial fraction decomposition for finding inverse Laplace transforms.

Mastering this will significantly enhance your ability to solve a wide range of engineering and physics problems.

---

## Sample Questions and Answers

**Question 1 (Conceptual):** Explain, in your own words, why the Convolution Theorem is important for solving differential equations in engineering.

**Answer:** The Convolution Theorem is important because it allows us to find the response of a system (often described by a differential equation) to an input signal that might be a product of simpler signals. In the Laplace domain, this complex input appears as a product of two transforms. The theorem tells us that the system's response is the convolution of the individual responses to these simpler signals. This simplifies the analysis significantly, as solving differential equations often involves finding inverse Laplace transforms, and convolution provides a structured way to do this for product terms, which frequently arise from combination inputs or system dynamics. It directly helps us understand how the "memory" of the system combines with the history of the input.

**Question 2 (Application):** Find the inverse Laplace transform of $H(s) = \frac{1}{s(s+1)}$ using the convolution theorem.

**Answer:**
Let $F(s) = \frac{1}{s}$ and $G(s) = \frac{1}{s+1}$.
Then, $f(t) = \mathcal{L}^{-1}\left\{\frac{1}{s}\right\} = 1$ (for $t \ge 0$).
And $g(t) = \mathcal{L}^{-1}\left\{\frac{1}{s+1}\right\} = e^{-t}$ (for $t \ge 0$).

Using the convolution theorem, $\mathcal{L}^{-1}\{F(s)G(s)\} = \int_0^t f(\tau) g(t-\tau) d\tau$.

Substitute $f(\tau)=1$ and $g(t-\tau)=e^{-(t-\tau)}$:
$$(f * g)(t) = \int_0^t (1) \cdot e^{-(t-\tau)} d\tau$$
$$(f * g)(t) = \int_0^t e^{-t} e^{\tau} d\tau$$

Since $e^{-t}$ is constant with respect to $\tau$, we can pull it out of the integral:
$$(f * g)(t) = e^{-t} \int_0^t e^{\tau} d\tau$$

Now, integrate $e^{\tau}$:
$$(f * g)(t) = e^{-t} \left[ e^{\tau} \right]_0^t$$

Evaluate at the limits:
$$(f * g)(t) = e^{-t} (e^t - e^0)$$
$$(f * g)(t) = e^{-t} (e^t - 1)$$

Distribute $e^{-t}$:
$$(f * g)(t) = e^{-t}e^t - e^{-t}(1)$$
$$(f * g)(t) = 1 - e^{-t}$$

So, $\mathcal{L}^{-1}\left\{\frac{1}{s(s+1)}\right\} = 1 - e^{-t}$.

**Question 3 (Comparison/Conceptual Check):** For the function $H(s) = \frac{s+2}{s(s+1)}$, would you prefer to use partial fraction decomposition or the convolution theorem to find the inverse Laplace transform? Justify your answer.

**Answer:** For $H(s) = \frac{s+2}{s(s+1)}$, partial fraction decomposition is likely the easier method.
We can write $\frac{s+2}{s(s+1)} = \frac{A}{s} + \frac{B}{s+1}$.
Multiplying by $s(s+1)$, we get $s+2 = A(s+1) + Bs$.
Setting $s=0$, we get $2 = A(1) \implies A=2$.
Setting $s=-1$, we get $-1+2 = B(-1) \implies 1 = -B \implies B=-1$.
So, $H(s) = \frac{2}{s} - \frac{1}{s+1}$.
The inverse Laplace transform is $\mathcal{L}^{-1}\left\{\frac{2}{s}\right\} - \mathcal{L}^{-1}\left\{\frac{1}{s+1}\right\} = 2 - e^{-t}$. This is very straightforward.

Using convolution would involve choosing $F(s)$ and $G(s)$ whose product is $\frac{s+2}{s(s+1)}$. For example, $F(s) = \frac{1}{s}$ and $G(s) = \frac{s+2}{s+1}$. Finding $g(t) = \mathcal{L}^{-1}\left\{\frac{s+2}{s+1}\right\}$ would require further manipulation (like polynomial long division or partial fractions on $G(s)$ itself, $G(s) = \frac{s+1+1}{s+1} = 1 + \frac{1}{s+1}$), giving $g(t) = \delta(t) + e^{-t}$. Then you'd convolve $f(t)=1$ with $g(t)$, which also isn't as simple as direct partial fractions. Therefore, partial fractions are preferred here. Convolution is generally more advantageous when the product $F(s)G(s)$ doesn't easily decompose into simple terms via partial fractions, or when $F(s)$ and $G(s)$ are standard forms like $1/s$, $1/(s-a)$, $1/(s^2+\omega^2)$, etc., and their convolution integral is manageable.
