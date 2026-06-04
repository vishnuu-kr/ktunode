---
title: "Convolution theorem (without proof) and its application to finding inverse Laplace transform of products of functions."
subject: "MATHEMATICS FOR ELECTRICAL SCIENCE AND PHYSICAL 
SCIENCE - 1"
module: "Module 3: Laplace Transform"
branch: "Electrical and Electronics Engineering"
semester: 1
topicId: "68bd213e9ece2bdd875f950e"
status: "completed"
scrapedAt: "2026-05-23T16:03:26.152Z"
---
# Module 3: Laplace Transform - The Convolution Theorem

Welcome back, everyone! Today, we're going to dive into one of the most elegant and powerful tools in our Laplace transform arsenal: the **Convolution Theorem**. We've seen how Laplace transforms can simplify solving differential equations and analyzing systems. Now, we're going to see how the convolution theorem allows us to tackle an even more challenging type of problem: finding the inverse Laplace transform of a *product* of functions. This is incredibly useful when dealing with systems described by the output being a convolution of the input and the system's impulse response – a very common scenario in electrical science and physical science.

Our focus today is to understand what convolution is in the context of Laplace transforms, state the theorem (without getting bogged down in the proof, which is detailed in Kreyszig and other texts), and, most importantly, see how to *apply* it to find inverse Laplace transforms. This directly ties into **Course Outcome CO3**, where we're learning to compute Laplace transforms and apply them to solve ODEs. Understanding convolution expands our ability to model and solve more complex system behaviors.

## 1. What is Convolution? A Different Kind of "Product"

Before we hit the theorem, let's get a feel for what "convolution" actually means. In our everyday lives, when we talk about "products," we usually mean simple multiplication, right? Like 2 times 3 is 6. But in mathematics, especially in areas like signal processing and systems analysis, convolution is a different kind of operation.

Imagine you have two signals, say, your voice (a signal) and the acoustics of a room (another signal). When your voice goes into the room, what comes out is not just your voice multiplied by the room's properties. It's more like each tiny bit of your voice signal interacts with the room's response over time, and all these interactions combine. This "blending" or "mixing" of two signals over time, where one signal is essentially "flipped" and "slid" across the other, is what we call convolution.

In the context of Laplace transforms, if we have two functions, $f(t)$ and $g(t)$, their convolution, denoted by $(f * g)(t)$, is defined as:

$$(f * g)(t) = \int_0^t f(\tau) g(t - \tau) d\tau$$

Don't let this integral intimidate you just yet. The beauty of the Laplace transform is that it turns this potentially complex integral into something much simpler.

Think of it like this: Suppose $f(t)$ represents a stimulus applied at time $\tau$, and $g(t)$ represents how a system responds to a unit impulse that occurred at time $t$. The convolution $(f * g)(t)$ then calculates the *total* response of the system at time $t$ due to *all* the stimuli $f(\tau)$ applied from time $0$ up to time $t$. Each stimulus $f(\tau)$ contributes $f(\tau) \cdot g(t-\tau)$ to the output at time $t$, where $g(t-\tau)$ is the system's response to an impulse at time $\tau$ that lasts until time $t$.

## 2. The Convolution Theorem: A Bridge Between Time and Transform Domains

Now for the star of the show! The Convolution Theorem provides a direct link between the operation of convolution in the time domain and a simple multiplication in the Laplace transform domain. This is where the real power lies.

**The Convolution Theorem states:**

If $\mathcal{L}\{f(t)\} = F(s)$ and $\mathcal{L}\{g(t)\} = G(s)$, then the Laplace transform of the convolution of $f(t)$ and $g(t)$ is the product of their individual Laplace transforms:

$$\mathcal{L}\{(f * g)(t)\} = F(s) G(s)$$

This is fantastic! It tells us that a complex operation (convolution) in the time domain becomes a simple operation (multiplication) in the frequency (or $s$) domain.

But what about the other way around? Since we often want to find an inverse Laplace transform, the theorem is even more powerful when stated for the inverse transformation.

**The Inverse Convolution Theorem states:**

If $F(s)$ and $G(s)$ are the Laplace transforms of $f(t)$ and $g(t)$ respectively, i.e., $F(s) = \mathcal{L}\{f(t)\}$ and $G(s) = \mathcal{L}\{g(t)\}$, then the inverse Laplace transform of the product $F(s)G(s)$ is the convolution of $f(t)$ and $g(t)$:

$$\mathcal{L}^{-1}\{F(s)G(s)\} = (f * g)(t) = \int_0^t f(\tau) g(t - \tau) d\tau$$

This is precisely what we need! When we encounter a function in the $s$-domain that is a product of two simpler functions whose inverse Laplace transforms we know, we can use this theorem. Instead of struggling to find the inverse transform of the product directly, we find the inverse transforms of the individual factors and then compute their convolution.

**Remember this:** The convolution theorem is a two-way street. Multiplication in the $s$-domain corresponds to convolution in the $t$-domain, and vice-versa. This is a fundamental concept, especially for **Course Outcome CO3**.

## 3. Applying the Convolution Theorem: Finding Inverse Laplace Transforms of Products

This is where the magic happens in practice. Let's say we need to find $\mathcal{L}^{-1}\{H(s)\}$, where $H(s)$ can be expressed as a product of two functions, $H(s) = F(s)G(s)$, and we know the inverse transforms of $F(s)$ and $G(s)$.

**Here's the step-by-step approach:**

1.  **Identify the Product:** Express the given function $H(s)$ as a product of two functions, $H(s) = F(s)G(s)$, such that you know or can easily find the inverse Laplace transforms of $F(s)$ and $G(s)$. This often involves partial fraction decomposition if $H(s)$ is a rational function, but sometimes you can spot the product directly.

2.  **Find Individual Inverse Transforms:** Determine $f(t) = \mathcal{L}^{-1}\{F(s)\}$ and $g(t) = \mathcal{L}^{-1}\{G(s)\}$ using standard Laplace transform pairs and properties. This is where our previous work on basic transforms and theorems comes into play.

3.  **Compute the Convolution:** Apply the convolution theorem. The inverse Laplace transform of $H(s)$ is the convolution of $f(t)$ and $g(t)$:
    $$h(t) = \mathcal{L}^{-1}\{H(s)\} = \mathcal{L}^{-1}\{F(s)G(s)\} = (f * g)(t) = \int_0^t f(\tau) g(t - \tau) d\tau$$

    This integral might look daunting, but often, choosing $f(t)$ and $g(t)$ wisely can simplify the integration. You can swap the roles of $F(s)$ and $G(s)$ if it makes the integration easier, because convolution is commutative: $(f*g)(t) = (g*f)(t)$.

Let's illustrate this with an example.

### Example 1: A Simple Product

Suppose we want to find $\mathcal{L}^{-1}\left\{\frac{1}{s(s-a)}\right\}$.

1.  **Identify the Product:** We can see this as a product of two functions: $F(s) = \frac{1}{s}$ and $G(s) = \frac{1}{s-a}$.

2.  **Find Individual Inverse Transforms:**
    We know that $\mathcal{L}^{-1}\left\{\frac{1}{s}\right\} = 1$. So, $f(t) = 1$.
    We also know that $\mathcal{L}^{-1}\left\{\frac{1}{s-a}\right\} = e^{at}$. So, $g(t) = e^{at}$.

3.  **Compute the Convolution:**
    Using the convolution theorem:
    $$h(t) = \mathcal{L}^{-1}\left\{\frac{1}{s(s-a)}\right\} = (f * g)(t) = \int_0^t f(\tau) g(t - \tau) d\tau$$
    Substitute $f(\tau) = 1$ and $g(t - \tau) = e^{a(t - \tau)}$:
    $$h(t) = \int_0^t (1) \cdot e^{a(t - \tau)} d\tau$$
    $$h(t) = \int_0^t e^{at} e^{-a\tau} d\tau$$
    Since $e^{at}$ is constant with respect to $\tau$, we can pull it out of the integral:
    $$h(t) = e^{at} \int_0^t e^{-a\tau} d\tau$$
    Now, integrate $e^{-a\tau}$ with respect to $\tau$:
    $$h(t) = e^{at} \left[ \frac{e^{-a\tau}}{-a} \right]_0^t$$
    $$h(t) = e^{at} \left( \frac{e^{-at}}{-a} - \frac{e^0}{-a} \right)$$
    $$h(t) = e^{at} \left( \frac{e^{-at}}{-a} - \frac{1}{-a} \right)$$
    $$h(t) = e^{at} \left( \frac{1}{-a} - \frac{e^{-at}}{-a} \right)$$
    $$h(t) = -\frac{1}{a} e^{at} + \frac{1}{a} e^{at} e^{-at}$$
    $$h(t) = -\frac{1}{a} e^{at} + \frac{1}{a} e^0$$
    $$h(t) = \frac{1}{a} (1 - e^{at})$$

So, $\mathcal{L}^{-1}\left\{\frac{1}{s(s-a)}\right\} = \frac{1}{a}(1 - e^{at})$.

Notice how much easier this was than trying to do partial fractions for this specific product and then finding the inverse transforms, although partial fractions are also a very important tool! For example, if we *had* used partial fractions for $\frac{1}{s(s-a)}$, we would write $\frac{1}{s(s-a)} = \frac{A}{s} + \frac{B}{s-a}$. This gives $1 = A(s-a) + Bs$. Setting $s=0$, we get $1 = -Aa$, so $A = -1/a$. Setting $s=a$, we get $1 = Ba$, so $B = 1/a$. Thus, $\frac{1}{s(s-a)} = -\frac{1}{a}\frac{1}{s} + \frac{1}{a}\frac{1}{s-a}$.
Then $\mathcal{L}^{-1}\left\{-\frac{1}{a}\frac{1}{s} + \frac{1}{a}\frac{1}{s-a}\right\} = -\frac{1}{a}\mathcal{L}^{-1}\left\{\frac{1}{s}\right\} + \frac{1}{a}\mathcal{L}^{-1}\left\{\frac{1}{s-a}\right\} = -\frac{1}{a}(1) + \frac{1}{a}(e^{at}) = \frac{1}{a}(e^{at} - 1)$.

Wait, I made a mistake in my partial fraction calculation! Let's recheck that.
$1 = A(s-a) + Bs$
If $s=0$, $1 = A(-a) \implies A = -1/a$.
If $s=a$, $1 = B(a) \implies B = 1/a$.
So, $\frac{1}{s(s-a)} = \frac{-1/a}{s} + \frac{1/a}{s-a}$.
The inverse transform is indeed $-\frac{1}{a}(1) + \frac{1}{a}(e^{at}) = \frac{1}{a}(e^{at}-1)$.

Okay, let me re-evaluate the convolution integral.
$h(t) = e^{at} \left[ \frac{e^{-a\tau}}{-a} \right]_0^t = e^{at} \left( \frac{e^{-at}}{-a} - \frac{1}{-a} \right) = e^{at} \left( \frac{1-e^{-at}}{a} \right) = \frac{e^{at} - 1}{a}$.
My apologies! There was a sign error in my calculation. Let me be very careful.

$$h(t) = e^{at} \int_0^t e^{-a\tau} d\tau = e^{at} \left[ -\frac{1}{a}e^{-a\tau} \right]_0^t = e^{at} \left( -\frac{1}{a}e^{-at} - (-\frac{1}{a}e^0) \right) = e^{at} \left( -\frac{1}{a}e^{-at} + \frac{1}{a} \right) = -\frac{1}{a} + \frac{1}{a}e^{at} = \frac{1}{a}(e^{at}-1).$$

There we go! This matches the partial fraction result. My brain temporarily short-circuited. This highlights why careful calculation is crucial, whether using convolution or partial fractions. The convolution theorem simply offers an alternative path.

### Example 2: A More "System-Oriented" Problem

Let's consider a common scenario in electrical circuits. Suppose we have a circuit described by a differential equation, and its transfer function is given by $H(s) = \frac{1}{s^2+1}$. If the input signal is $x(t) = e^{-at}$ (where $a>0$), we want to find the output $y(t)$.

The output $y(t)$ is the convolution of the input signal $x(t)$ and the system's impulse response $h(t)$.
First, we need the impulse response $h(t)$. We know that $H(s) = \mathcal{L}\{h(t)\}$.
So, $h(t) = \mathcal{L}^{-1}\left\{\frac{1}{s^2+1}\right\}$. From our tables, this is $h(t) = \sin(t)$.

Our input is $x(t) = e^{-at}$.
So, the output is $y(t) = (x * h)(t) = \int_0^t x(\tau) h(t-\tau) d\tau$.
$$y(t) = \int_0^t e^{-a\tau} \sin(t-\tau) d\tau$$

This integral looks a bit tricky. What if we tried to view the problem from the Laplace domain perspective?
We have $Y(s) = X(s)H(s)$.
$X(s) = \mathcal{L}\{e^{-at}\} = \frac{1}{s+a}$.
$H(s) = \frac{1}{s^2+1}$.
So, $Y(s) = \frac{1}{s+a} \cdot \frac{1}{s^2+1}$.

Now, we can use the convolution theorem to find $y(t) = \mathcal{L}^{-1}\{Y(s)\}$.
Let $F(s) = \frac{1}{s+a}$ and $G(s) = \frac{1}{s^2+1}$.
Then $f(t) = \mathcal{L}^{-1}\left\{\frac{1}{s+a}\right\} = e^{-at}$.
And $g(t) = \mathcal{L}^{-1}\left\{\frac{1}{s^2+1}\right\} = \sin(t)$.

Now we compute the convolution $(f * g)(t)$:
$$y(t) = (f * g)(t) = \int_0^t f(\tau) g(t-\tau) d\tau$$
$$y(t) = \int_0^t e^{-a\tau} \sin(t-\tau) d\tau$$

This is the same integral we started with! So, convolution theorem helps us structure the problem, but the integral still needs to be solved. Let's solve this integral.
We can use the trigonometric identity $\sin(A-B) = \sin A \cos B - \cos A \sin B$.
Here, $A=t$ and $B=\tau$.
$$\sin(t-\tau) = \sin t \cos \tau - \cos t \sin \tau$$
So, the integral becomes:
$$y(t) = \int_0^t e^{-a\tau} (\sin t \cos \tau - \cos t \sin \tau) d\tau$$
$$y(t) = \sin t \int_0^t e^{-a\tau} \cos \tau d\tau - \cos t \int_0^t e^{-a\tau} \sin \tau d\tau$$

These are standard integrals of the form $\int e^{bx} \cos(cx) dx$ and $\int e^{bx} \sin(cx) dx$.
Recall (or look up in your integral tables, like those found in Kreyszig or Anton's Calculus):
$\int e^{bx} \cos(cx) dx = \frac{e^{bx}}{b^2+c^2}(b \cos(cx) + c \sin(cx))$
$\int e^{bx} \sin(cx) dx = \frac{e^{bx}}{b^2+c^2}(b \sin(cx) - c \cos(cx))$

In our case, $b = -a$ and $c = 1$. So, $b^2+c^2 = (-a)^2 + 1^2 = a^2+1$.

Let's evaluate the first integral:
$\int_0^t e^{-a\tau} \cos \tau d\tau = \left[\frac{e^{-a\tau}}{a^2+1}(-a \cos \tau + 1 \sin \tau)\right]_0^t$
$= \frac{e^{-at}}{a^2+1}(-a \cos t + \sin t) - \frac{e^0}{a^2+1}(-a \cos 0 + \sin 0)$
$= \frac{e^{-at}}{a^2+1}(-a \cos t + \sin t) - \frac{1}{a^2+1}(-a)$
$= \frac{-a e^{-at} \cos t + e^{-at} \sin t + a}{a^2+1}$

Now, evaluate the second integral:
$\int_0^t e^{-a\tau} \sin \tau d\tau = \left[\frac{e^{-a\tau}}{a^2+1}(-a \sin \tau - 1 \cos \tau)\right]_0^t$
$= \frac{e^{-at}}{a^2+1}(-a \sin t - \cos t) - \frac{e^0}{a^2+1}(-a \sin 0 - \cos 0)$
$= \frac{e^{-at}}{a^2+1}(-a \sin t - \cos t) - \frac{1}{a^2+1}(-1)$
$= \frac{-a e^{-at} \sin t - e^{-at} \cos t + 1}{a^2+1}$

Now, substitute these back into the expression for $y(t)$:
$$y(t) = \sin t \left(\frac{-a e^{-at} \cos t + e^{-at} \sin t + a}{a^2+1}\right) - \cos t \left(\frac{-a e^{-at} \sin t - e^{-at} \cos t + 1}{a^2+1}\right)$$

Let's expand and simplify:
$$y(t) = \frac{1}{a^2+1} [(-a \sin t \cos t e^{-at} + \sin^2 t e^{-at} + a \sin t) - (-a \sin t \cos t e^{-at} - \cos^2 t e^{-at} + \cos t)]$$
$$y(t) = \frac{1}{a^2+1} [-a \sin t \cos t e^{-at} + \sin^2 t e^{-at} + a \sin t + a \sin t \cos t e^{-at} + \cos^2 t e^{-at} - \cos t]$$

The terms $-a \sin t \cos t e^{-at}$ and $+a \sin t \cos t e^{-at}$ cancel out.
Also, $\sin^2 t + \cos^2 t = 1$.

$$y(t) = \frac{1}{a^2+1} [\sin^2 t e^{-at} + a \sin t + \cos^2 t e^{-at} - \cos t]$$
$$y(t) = \frac{1}{a^2+1} [e^{-at}(\sin^2 t + \cos^2 t) + a \sin t - \cos t]$$
$$y(t) = \frac{1}{a^2+1} [e^{-at} + a \sin t - \cos t]$$

So, the output is $y(t) = \frac{1}{a^2+1}(e^{-at} + a \sin t - \cos t)$.

This example showcases how the convolution theorem allows us to break down a complex inverse Laplace transform problem into finding simpler inverse transforms and then performing a convolution integral. This is a core skill for **Course Outcome CO3** and connects deeply with analyzing systems as taught in "Signals and Systems" (Haykin & Van Veen).

### Example 3: Using the Commutativity of Convolution

Sometimes, swapping $f(t)$ and $g(t)$ can make the convolution integral easier to evaluate. Let's revisit Example 1: $\mathcal{L}^{-1}\left\{\frac{1}{s(s-a)}\right\}$.
We had $F(s) = \frac{1}{s}$ and $G(s) = \frac{1}{s-a}$, leading to $f(t)=1$ and $g(t)=e^{at}$. The convolution was $\int_0^t 1 \cdot e^{a(t-\tau)} d\tau$.

What if we swapped them? Let $F(s) = \frac{1}{s-a}$ and $G(s) = \frac{1}{s}$.
Then $f(t) = e^{at}$ and $g(t) = 1$.
The convolution is $(f*g)(t) = \int_0^t f(\tau) g(t-\tau) d\tau = \int_0^t e^{a\tau} \cdot 1 d\tau$.
$$ \int_0^t e^{a\tau} d\tau = \left[\frac{e^{a\tau}}{a}\right]_0^t = \frac{e^{at}}{a} - \frac{e^0}{a} = \frac{e^{at}-1}{a} $$
This result is identical and the integral was arguably simpler (no $e^{at}e^{-a\tau}$ product inside). This demonstrates the flexibility and power of choosing the 'right' function pair for convolution.

## 4. When is Convolution Useful? Beyond Just Inverse Transforms

While our primary focus is finding inverse Laplace transforms of products, the convolution theorem is foundational for understanding system behavior.

*   **System Analysis:** In control systems and signal processing, the output of a Linear Time-Invariant (LTI) system is the convolution of the input signal with the system's impulse response. If the system's behavior is described by a transfer function $H(s)$ and the input by $X(s)$, then the output in the Laplace domain is $Y(s) = X(s)H(s)$. Using the convolution theorem's inverse, we know $y(t) = x(t) * h(t)$. This is a cornerstone of system theory, as covered in books like "Signals and Systems" by Haykin and Van Veen.
*   **Solving Differential Equations:** While we often use Laplace transforms to *directly* solve ODEs by transforming the entire equation, the convolution theorem can be an alternative way to find the solution if the equation can be rearranged into a form where the solution $Y(s)$ is a product. For example, a second-order system with a forcing function might yield $Y(s) = (\text{transfer function}) \times (\text{transform of forcing function})$.
*   **Probability and Statistics:** Convolution also appears in the theory of probability, where the sum of two independent random variables has a probability density function that is the convolution of their individual density functions. While not directly our topic, it shows the wide applicability of this mathematical concept.

## 5. Common Pitfalls and Exam Tips

*   **Integral Calculation Errors:** The most common mistake is in evaluating the convolution integral. Be meticulous with your integration, especially with signs, exponents, and constants. Double-check your standard integral formulas.
*   **Incorrectly Identifying $f(t)$ and $g(t)$:** If the integral becomes too complicated, consider swapping the roles of $F(s)$ and $G(s)$ to simplify the convolution.
*   **Forgetting the $t-\tau$:** In $g(t-\tau)$, remember to substitute $(t-\tau)$ for the variable in $g$.
*   **Limits of Integration:** For standard Laplace transforms starting at $t=0$, the limits are almost always from $0$ to $t$.
*   **Partial Fractions vs. Convolution:** Sometimes, partial fractions might be simpler for finding inverse transforms. Other times, especially when the factors $F(s)$ and $G(s)$ are standard forms (like $1/(s-a)$, $1/(s^2+b^2)$, $1/s$), convolution is very efficient. For rational functions, it's often a matter of preference or what the question implicitly suggests. For instance, if the question asks to "use the convolution theorem," you must use it.
*   **Understanding the "Why":** Remember that the theorem's power comes from turning multiplication (easy) into convolution (harder integral) and vice versa. It's about choosing the right domain for the operation.

## 6. Connection to Course Outcomes

*   **CO1 (Linear Equations & Matrices):** While not directly about matrices, the manipulation of functions and solving integrals can be seen as an extension of algebraic manipulation.
*   **CO2 (Differential Equations):** The convolution theorem is a powerful tool for solving differential equations, especially those with complex forcing functions, by transforming them into the $s$-domain.
*   **CO3 (Laplace Transform & ODEs):** This entire topic is central to CO3. We are directly using the Laplace transform and its properties to find inverse transforms and, by extension, solve ODEs. Understanding convolution enhances our ability to model and solve ODEs arising in engineering.
*   **CO4 (Taylor & Fourier Series):** While different tools, both convolution and series expansions are about representing complex functions or signals in terms of simpler components. Convolution breaks down a product in the $s$-domain into simpler time-domain functions.

---

## Sample Questions with Answers

**Question 1 (Conceptual):**
State the Convolution Theorem for Laplace Transforms, both for the forward transform and the inverse transform. Explain in your own words why this theorem is useful.

**Answer:**
The Convolution Theorem states that if $\mathcal{L}\{f(t)\} = F(s)$ and $\mathcal{L}\{g(t)\} = G(s)$, then:
1.  **Forward Transform:** $\mathcal{L}\{(f * g)(t)\} = F(s)G(s)$, where $(f * g)(t) = \int_0^t f(\tau) g(t-\tau) d\tau$.
2.  **Inverse Transform:** $\mathcal{L}^{-1}\{F(s)G(s)\} = (f * g)(t)$.

This theorem is incredibly useful because it transforms a difficult operation (convolution) in the time domain into a simpler operation (multiplication) in the Laplace domain, and vice versa. This allows us to find inverse Laplace transforms of products of functions that might be very difficult to compute directly. It's a key tool for analyzing the behavior of LTI systems where the output is the convolution of the input and the impulse response.

**Question 2 (Application):**
Find the inverse Laplace transform of $H(s) = \frac{1}{(s-2)(s+3)}$ using the Convolution Theorem.

**Answer:**
1.  **Identify Product:** We can write $H(s)$ as a product: $F(s) = \frac{1}{s-2}$ and $G(s) = \frac{1}{s+3}$.

2.  **Find Individual Inverse Transforms:**
    $f(t) = \mathcal{L}^{-1}\left\{\frac{1}{s-2}\right\} = e^{2t}$
    $g(t) = \mathcal{L}^{-1}\left\{\frac{1}{s+3}\right\} = e^{-3t}$

3.  **Compute Convolution:**
    $h(t) = (f * g)(t) = \int_0^t f(\tau) g(t-\tau) d\tau$
    $h(t) = \int_0^t e^{2\tau} e^{-3(t-\tau)} d\tau$
    $h(t) = \int_0^t e^{2\tau} e^{-3t} e^{3\tau} d\tau$
    $h(t) = \int_0^t e^{-3t} e^{5\tau} d\tau$

    Pull $e^{-3t}$ out of the integral as it's constant with respect to $\tau$:
    $h(t) = e^{-3t} \int_0^t e^{5\tau} d\tau$

    Now, integrate:
    $h(t) = e^{-3t} \left[\frac{e^{5\tau}}{5}\right]_0^t$
    $h(t) = e^{-3t} \left(\frac{e^{5t}}{5} - \frac{e^0}{5}\right)$
    $h(t) = e^{-3t} \left(\frac{e^{5t} - 1}{5}\right)$
    $h(t) = \frac{e^{-3t}e^{5t} - e^{-3t}}{5}$
    $h(t) = \frac{e^{2t} - e^{-3t}}{5}$

    Alternatively, we could swap $f(t)$ and $g(t)$:
    $f(t) = e^{-3t}$ and $g(t) = e^{2t}$.
    $h(t) = \int_0^t e^{-3\tau} e^{2(t-\tau)} d\tau = \int_0^t e^{-3\tau} e^{2t} e^{-2\tau} d\tau = e^{2t} \int_0^t e^{-5\tau} d\tau$
    $h(t) = e^{2t} \left[\frac{e^{-5\tau}}{-5}\right]_0^t = e^{2t} \left(\frac{e^{-5t}}{-5} - \frac{1}{-5}\right) = e^{2t} \left(\frac{1 - e^{-5t}}{5}\right) = \frac{e^{2t} - e^{-5t}e^{2t}}{5} = \frac{e^{2t} - e^{-3t}}{5}$.
    The result is the same.

**Question 3 (Problem Solving/Exam Oriented):**
A system has a transfer function $H(s) = \frac{1}{s^2+4}$. An input signal $x(t) = \sin(2t)$ is applied. Find the output signal $y(t)$ using the convolution theorem.

**Answer:**
1.  **Find Laplace Transform of Input:**
    $X(s) = \mathcal{L}\{\sin(2t)\} = \frac{2}{s^2+4}$.

2.  **Find the product in the s-domain:**
    $Y(s) = X(s)H(s) = \frac{2}{s^2+4} \cdot \frac{1}{s^2+4} = \frac{2}{(s^2+4)^2}$.

3.  **Apply Convolution Theorem:** We need to find $y(t) = \mathcal{L}^{-1}\left\{\frac{2}{(s^2+4)^2}\right\}$.
    Let $F(s) = \frac{1}{s^2+4}$ and $G(s) = \frac{2}{s^2+4}$.
    We know that $\mathcal{L}^{-1}\left\{\frac{2}{s^2+4}\right\} = \sin(2t)$.
    So, $f(t) = \sin(2t)$ and $g(t) = \sin(2t)$.

4.  **Compute Convolution:**
    $y(t) = (f * g)(t) = \int_0^t f(\tau) g(t-\tau) d\tau$
    $y(t) = \int_0^t \sin(2\tau) \sin(2(t-\tau)) d\tau$
    $y(t) = \int_0^t \sin(2\tau) \sin(2t - 2\tau) d\tau$

    Using the product-to-sum trigonometric identity: $\sin A \sin B = \frac{1}{2}[\cos(A-B) - \cos(A+B)]$.
    Here, $A = 2\tau$ and $B = 2t - 2\tau$.
    $A-B = 2\tau - (2t - 2\tau) = 2\tau - 2t + 2\tau = 4\tau - 2t$.
    $A+B = 2\tau + (2t - 2\tau) = 2t$.

    So, $\sin(2\tau) \sin(2t - 2\tau) = \frac{1}{2}[\cos(4\tau - 2t) - \cos(2t)]$.

    $y(t) = \int_0^t \frac{1}{2}[\cos(4\tau - 2t) - \cos(2t)] d\tau$
    $y(t) = \frac{1}{2} \int_0^t \cos(4\tau - 2t) d\tau - \frac{1}{2} \int_0^t \cos(2t) d\tau$

    Evaluate the first integral: $\int_0^t \cos(4\tau - 2t) d\tau$. Let $u = 4\tau - 2t$, then $du = 4 d\tau$.
    When $\tau=0$, $u = -2t$. When $\tau=t$, $u = 2t$.
    $\int_{-2t}^{2t} \cos(u) \frac{du}{4} = \frac{1}{4}[\sin(u)]_{-2t}^{2t} = \frac{1}{4}(\sin(2t) - \sin(-2t)) = \frac{1}{4}(\sin(2t) + \sin(2t)) = \frac{1}{4}(2\sin(2t)) = \frac{1}{2}\sin(2t)$.

    Evaluate the second integral: $\int_0^t \cos(2t) d\tau$. Since $\cos(2t)$ is constant with respect to $\tau$:
    $\cos(2t) [\tau]_0^t = \cos(2t) (t - 0) = t \cos(2t)$.

    Substitute back into the expression for $y(t)$:
    $y(t) = \frac{1}{2} \left(\frac{1}{2}\sin(2t)\right) - \frac{1}{2} (t \cos(2t))$
    $y(t) = \frac{1}{4}\sin(2t) - \frac{t}{2}\cos(2t)$

    This is the correct answer. Often, questions involving powers of standard forms like $(s^2+a^2)^2$ appear in exams and are best handled by the convolution theorem.

This concludes our discussion on the Convolution Theorem. It's a powerful technique that, with practice, will become a valuable asset in your problem-solving toolkit. Keep practicing the integral calculations, and you'll master it!
