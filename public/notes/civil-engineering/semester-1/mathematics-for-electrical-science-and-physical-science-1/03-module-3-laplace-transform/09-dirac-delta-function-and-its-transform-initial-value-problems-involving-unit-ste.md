---
title: "Dirac delta function and its transform (Initial value problems involving unit step function and Dirac delta function are excluded)"
subject: "MATHEMATICS FOR ELECTRICAL SCIENCE AND 
PHYSICAL  SCIENCE - 1"
module: "Module 3: Laplace Transform"
branch: "Civil Engineering"
semester: 1
topicId: "68b54565d74ec52cc09129e8"
status: "completed"
scrapedAt: "2026-05-20T18:31:06.575Z"
---
## Module 3: Laplace Transform - The Dirac Delta Function and Its Transform

Welcome, everyone! In our journey through the Laplace Transform, we've explored how it helps us simplify the analysis of differential equations and systems. Today, we're going to tackle a rather special, somewhat abstract, but incredibly powerful concept: the **Dirac Delta Function**, often called the "unit impulse" or "dirac delta." It might sound a bit strange at first, but trust me, it's a cornerstone in many areas of electrical engineering and physics, especially when dealing with instantaneous events.

Our focus today is on understanding what this function represents, how it's characterized mathematically (even though it's not a "function" in the traditional sense!), and crucially, what its Laplace transform is. We'll also see how this relates to our broader understanding of systems and signals. Remember, we're excluding initial value problems that involve the unit step and Dirac delta functions directly as initial conditions. Our goal here is to understand the *transform* of the delta function itself and its implications.

### 1. What is the Dirac Delta Function? An Intuitive Understanding

Imagine you're trying to model a sudden, sharp impact, like a hammer hitting a nail, or a lightning strike. In the real world, these events happen over an extremely short duration but deliver a significant amount of "energy" or "force." How do we represent such an event mathematically?

Traditionally, functions have a finite value at every point. But a truly instantaneous event is like a spike that's infinitely tall and infinitely narrow, yet it still has a "strength" or "area" associated with it. This is where the Dirac delta function comes in.

Think of it as a limiting process. We can approximate an impulse by a very tall, very narrow pulse. Let's consider a rectangular pulse, $p_\epsilon(t)$, defined as:

$p_\epsilon(t) = \begin{cases} \frac{1}{2\epsilon} & -\epsilon < t < \epsilon \\ 0 & \text{otherwise} \end{cases}$

This pulse has a height of $\frac{1}{2\epsilon}$ and a width of $2\epsilon$. What's interesting about this pulse? The **area under the pulse** is always 1, regardless of $\epsilon$:

Area $= \text{height} \times \text{width} = \frac{1}{2\epsilon} \times 2\epsilon = 1$

Now, imagine making $\epsilon$ smaller and smaller, approaching zero. The pulse gets taller and narrower, but its area remains 1. As $\epsilon \to 0$, this pulse "collapses" into a single point at $t=0$. This limiting form is what we call the Dirac delta function, denoted by $\delta(t)$.

So, intuitively, we can think of $\delta(t)$ as a function that is zero everywhere except at $t=0$, and at $t=0$, it's infinitely large. However, its "strength" or "area" is exactly 1.

This concept is beautifully explained in Kreyszig's "Advanced Engineering Mathematics," which often introduces generalized functions or distributions to rigorously define such concepts. While we won't delve into distribution theory here, this intuitive understanding is key.

### 2. Defining the Dirac Delta Function: Properties and Sifting Property

Since $\delta(t)$ isn't a conventional function, we define it by its properties, primarily through its behavior when multiplied by another function and integrated. This is often called the **sifting property**.

The fundamental property of the Dirac delta function is:

$\int_{-\infty}^{\infty} f(t) \delta(t-a) dt = f(a)$

where $f(t)$ is any "well-behaved" function (continuous at $t=a$).

Let's break this down. The term $\delta(t-a)$ is the Dirac delta function shifted so its "spike" is at $t=a$.

*   **When $t \neq a$, $\delta(t-a) = 0$.** So, the product $f(t)\delta(t-a)$ is zero everywhere except at $t=a$.
*   **At $t=a$, $\delta(t-a)$ is infinitely large.** However, when we multiply it by $f(t)$, the value of $f(t)$ at $t=a$ "selects" or "sifts out" the value of $f(t)$ at that specific point.

Consider an example. Let $f(t) = e^{-t^2}$ and we want to evaluate:

$\int_{-\infty}^{\infty} e^{-t^2} \delta(t-2) dt$

Here, $a=2$. The delta function $\delta(t-2)$ is zero for all $t \neq 2$. At $t=2$, it's infinitely large. The function $f(t) = e^{-t^2}$ is continuous at $t=2$. According to the sifting property, the integral will simply pick out the value of $f(t)$ at $t=2$.

So, $\int_{-\infty}^{\infty} e^{-t^2} \delta(t-2) dt = e^{-2^2} = e^{-4}$.

This is incredibly powerful. It allows us to isolate the value of a function at a specific point using integration and the delta function. This "sifting" capability is precisely why it's so useful in signal processing and physics.

**Key Properties to Remember:**

*   $\delta(t) = 0$ for $t \neq 0$.
*   $\int_{-\infty}^{\infty} \delta(t) dt = 1$.
*   $\int_{-\infty}^{\infty} f(t) \delta(t-a) dt = f(a)$ (sifting property).
*   $\delta(t) = \delta(-t)$ (it's an even function).
*   $t\delta(t) = 0$ for all $t$. (This is because $t=0$ at the point where $\delta(t)$ is non-zero).
*   $\delta(at) = \frac{1}{|a|} \delta(t)$ for $a \neq 0$.

These properties are standardly presented in texts like Kreyszig and Bird's "Higher Engineering Mathematics." Understanding the sifting property is paramount for this topic.

### 3. The Laplace Transform of the Dirac Delta Function

Now, let's connect this to our Laplace transform toolkit. Recall the definition of the Laplace transform of a function $g(t)$:

$\mathcal{L}\{g(t)\} = G(s) = \int_{0}^{\infty} e^{-st} g(t) dt$

We are interested in finding $\mathcal{L}\{\delta(t)\}$. Using the definition:

$\mathcal{L}\{\delta(t)\} = \int_{0}^{\infty} e^{-st} \delta(t) dt$

Now, let's apply the sifting property. Here, our $f(t)$ is $e^{-st}$, and our $\delta(t-a)$ is $\delta(t)$. So, $a=0$.

The sifting property states $\int_{-\infty}^{\infty} f(t) \delta(t-a) dt = f(a)$.
We are integrating from $0$ to $\infty$, not $-\infty$ to $\infty$. Let's consider the behavior of $\delta(t)$: it is zero for $t < 0$. So, the integral from $0$ to $\infty$ is effectively the same as the integral from $-\infty$ to $\infty$ in terms of its contribution when $\delta(t)$ is involved, provided $f(t)$ is well-behaved.

So, we have:

$\int_{0}^{\infty} e^{-st} \delta(t) dt$

The term $\delta(t)$ is zero for $t<0$. The function $e^{-st}$ is continuous for all $t$. The sifting property, applied over the interval $[0, \infty)$, means we are looking for the value of $e^{-st}$ at $t=0$.

Therefore,

$\mathcal{L}\{\delta(t)\} = e^{-s \cdot 0} = e^0 = 1$

**Wow! That's remarkably simple! The Laplace transform of the Dirac delta function $\delta(t)$ is simply 1.**

This is a crucial result, and you'll see it used frequently. It tells us that an impulse input to a system, when transformed via Laplace, becomes a constant value of 1 in the $s$-domain. This simplifies many calculations immensely.

### 4. Laplace Transform of a Shifted Delta Function

What about a delta function shifted in time, $\delta(t-a)$? Let's find its Laplace transform.

$\mathcal{L}\{\delta(t-a)\} = \int_{0}^{\infty} e^{-st} \delta(t-a) dt$

Now, we need to be careful with the integration limits and the location of the spike ($t=a$).

*   **Case 1: $a > 0$.** In this case, the spike at $t=a$ occurs within our integration interval $[0, \infty)$. The function $f(t) = e^{-st}$ is continuous at $t=a$. Applying the sifting property $\int_{0}^{\infty} f(t) \delta(t-a) dt = f(a)$ for $a>0$:

    $\mathcal{L}\{\delta(t-a)\} = e^{-sa}$

*   **Case 2: $a < 0$.** If $a$ is negative, say $a = -b$ where $b>0$, then $\delta(t-a) = \delta(t+b)$. The spike is at $t = -b$, which is outside our integration interval $[0, \infty)$. Since $\delta(t+b) = 0$ for all $t \ge 0$, the integral is zero.

    $\mathcal{L}\{\delta(t-a)\} = \int_{0}^{\infty} e^{-st} \delta(t+b) dt = 0$ for $a < 0$.

However, in many practical applications, especially in system analysis, the input is considered for $t \ge 0$, so the relevant delta function is often $\delta(t)$ or $\delta(t-a)$ where $a \ge 0$.

**Therefore, for $a \ge 0$, the Laplace transform of $\delta(t-a)$ is $e^{-sa}$.**

This result is also directly related to the time-shifting property of the Laplace transform. If $\mathcal{L}\{g(t)\} = G(s)$, then $\mathcal{L}\{g(t-a)u(t-a)\} = e^{-as}G(s)$. If we consider $g(t) = \delta(t)$, then $G(s) = \mathcal{L}\{\delta(t)\} = 1$.

So, $\mathcal{L}\{\delta(t-a)u(t-a)\} = e^{-as} \cdot 1 = e^{-as}$. Since $\delta(t-a)$ is zero for $t<a$, $\delta(t-a)u(t-a)$ is equivalent to $\delta(t-a)$ for $a \ge 0$ in the context of the Laplace transform starting from $t=0$.

### 5. Why is this important? Connections to Course Outcomes

Understanding the Laplace transform of the Dirac delta function directly links to our **Course Outcome 3 (CO3): Compute Laplace transform and apply it to solve ODEs arising in engineering.**

*   **Laplace Transform Computation:** We've just computed the Laplace transform of $\delta(t)$ and $\delta(t-a)$ and found them to be 1 and $e^{-sa}$ respectively. This is a fundamental transform pair that you absolutely must remember.
*   **Application to ODEs:** While we are not focusing on initial value problems here, the Dirac delta function is often used to model **impulsive forcing functions** in ODEs. For example, if a system is subjected to a very short, sharp force at time $t=a$, this can be modeled as a forcing term of the form $F_0 \delta(t-a)$. When you take the Laplace transform of the ODE, this term will transform into $F_0 e^{-sa}$, making the solution process in the $s$-domain much more manageable.

Consider a simple second-order system: $m\frac{d^2y}{dt^2} + c\frac{dy}{dt} + ky = f(t)$. If $f(t)$ represents an impact at $t=0$, we might model it as $f(t) = F_0 \delta(t)$. Taking the Laplace transform:

$m(s^2Y(s) - sy(0) - y'(0)) + c(sY(s) - y(0)) + kY(s) = \mathcal{L}\{F_0 \delta(t)\} = F_0$

Assuming zero initial conditions ($y(0)=0, y'(0)=0$), this simplifies to:

$m(s^2Y(s)) + c(sY(s)) + kY(s) = F_0$

$(ms^2 + cs + k)Y(s) = F_0$

$Y(s) = \frac{F_0}{ms^2 + cs + k}$

This algebraic equation in the $s$-domain is much easier to solve than the original differential equation with a non-standard forcing function. The inverse Laplace transform then gives us the system's response. This exemplifies how CO3 is directly addressed.

### 6. Relatable Examples and Analogies

Let's try to make this more tangible.

**Analogy: The "Hammer Blow" in a Game Show**

Imagine a game show where contestants have to hit a target with a hammer. The show wants to award a bonus for hitting the target *exactly* at a specific moment (say, when the buzzer sounds).
*   A standard "force" might be a contestant pushing a button for a sustained period.
*   A **Dirac delta function** is like the bonus awarded if the hammer hits the target at the *precise instant* the buzzer sounds. It's an instantaneous "event" with a defined "effect" (the bonus). The timing is critical.

Mathematically, if the "effect" of the hammer blow at time $t=a$ on some score $S$ is modeled by $S(t)$, and the hammer blow itself is represented by $\delta(t-a)$, then the total score contribution from this blow is given by integrating the "effect" over time. If $S(t)$ represents the "score rate" at time $t$, the total score is $\int S(t) \delta(t-a) dt = S(a)$. The delta function "picks out" the score rate at the exact moment of impact.

**Practical Engineering Scenario: A Sudden Voltage Spike**

In electrical circuits, a component might experience a brief, very high voltage surge, perhaps due to a lightning strike or a switching transient. This surge is often modeled as a Dirac delta function. For instance, if a system is designed to respond to an input voltage $v_{in}(t)$, and a very short voltage spike occurs at $t=0$, we might represent $v_{in}(t)$ as $V_p \delta(t)$, where $V_p$ is the "strength" of the spike.

If your circuit's behavior is described by an ODE, and its Laplace transform is $Y(s) = H(s) V_{in}(s)$, where $H(s)$ is the system's transfer function, then for an input $V_p \delta(t)$:

$Y(s) = H(s) \mathcal{L}\{V_p \delta(t)\} = H(s) \cdot V_p$

The output in the $s$-domain is simply the transfer function multiplied by the strength of the impulse. This is immensely useful for analyzing the system's impulse response, which is a fundamental characteristic of linear time-invariant (LTI) systems. The impulse response is what you get when you feed a Dirac delta function into the system.

### 7. Summary and Key Takeaways

Let's quickly recap the most important points:

*   The **Dirac delta function $\delta(t)$** is a generalized function representing an infinitely tall, infinitely narrow spike at $t=0$ with a total area of 1. It's best understood through its **sifting property**: $\int_{-\infty}^{\infty} f(t) \delta(t-a) dt = f(a)$.
*   The **Laplace transform of $\delta(t)$ is 1**.
*   The **Laplace transform of $\delta(t-a)$ for $a \ge 0$ is $e^{-sa}$**.
*   This is directly related to **CO3**, as it provides a key transform pair used when modeling impulsive inputs in ODEs and systems.
*   Remember these transforms: $\mathcal{L}\{\delta(t)\} = 1$ and $\mathcal{L}\{\delta(t-a)\} = e^{-sa}$ (for $a \ge 0$). These are exam staples!

### Sample Questions and Answers

Here are a few questions to test your understanding.

**Q1 (Conceptual):** What is the fundamental property that defines the behavior of the Dirac delta function $\delta(t-a)$ when it's part of an integral?

**Answer:** The fundamental property is the **sifting property**: $\int_{-\infty}^{\infty} f(t) \delta(t-a) dt = f(a)$, provided $f(t)$ is continuous at $t=a$. This means the integral effectively "sifts out" the value of $f(t)$ at the point where the delta function is non-zero.

**Q2 (Exam-Oriented - Transform Calculation):** Find the Laplace transform of the function $g(t) = 5\delta(t-3)$.

**Answer:**
We know the Laplace transform of $\delta(t-a)$ is $e^{-sa}$ for $a \ge 0$.
Using the linearity property of the Laplace transform, $\mathcal{L}\{c \cdot f(t)\} = c \cdot \mathcal{L}\{f(t)\}$.
Here, $c=5$ and $f(t) = \delta(t-3)$. The shift is $a=3$, which is $\ge 0$.
So, $\mathcal{L}\{5\delta(t-3)\} = 5 \cdot \mathcal{L}\{\delta(t-3)\}$
$\mathcal{L}\{5\delta(t-3)\} = 5 \cdot e^{-3s}$

**Q3 (Application Context):** A system is described by the equation $\frac{dy}{dt} + 2y = f(t)$. If the input $f(t)$ is a unit impulse at $t=1$, how would you represent $f(t)$ and what would its Laplace transform be?

**Answer:**
A unit impulse at $t=1$ is represented by the Dirac delta function $\delta(t-1)$.
So, $f(t) = \delta(t-1)$.
The Laplace transform of $f(t)$ is:
$\mathcal{L}\{f(t)\} = \mathcal{L}\{\delta(t-1)\}$
Since the shift $a=1$ is $\ge 0$, the Laplace transform is $e^{-1s}$ or simply $e^{-s}$.

**Q4 (Deeper Understanding):** Consider the integral $\int_{-5}^{5} t^2 \delta(t+2) dt$. Without explicitly computing the integral, what is its value and why?

**Answer:**
The integral is $\int_{-5}^{5} t^2 \delta(t+2) dt$.
The Dirac delta function is $\delta(t+2)$, which means the "spike" is at $t = -2$.
The integration limits are from $-5$ to $5$. The point $t=-2$ is within this interval.
The function being multiplied by the delta function is $f(t) = t^2$. This function is continuous at $t=-2$.
By the sifting property, $\int_{-\infty}^{\infty} f(t) \delta(t-a) dt = f(a)$.
Our integral is essentially a portion of the full range. Since $\delta(t+2)$ is zero outside the interval where $t=-2$, and $-2$ is within $[-5, 5]$, the integral behaves as if it were over the full range for this specific delta function.
The value of the integral is $f(-2) = (-2)^2 = 4$.

Keep practicing these transform pairs and the sifting property. They are fundamental building blocks for many advanced topics in signals and systems. See you in the next session!
