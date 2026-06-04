---
title: "Local Linear 
approximations"
subject: "MATHEMATICS FOR ELECTRICAL SCIENCE AND PHYSICAL SCIENCE – 2"
module: "Module 1: Limits and continuity"
branch: "Mechanical Engineering"
semester: 2
topicId: "68bd1edffeb4799d95e8399e"
status: "completed"
scrapedAt: "2026-05-20T17:45:43.235Z"
---
# MATHEMATICS FOR ELECTRICAL SCIENCE AND PHYSICAL SCIENCE – 2

## Module 1: Limits and Continuity

### Topic: Local Linear Approximations

Welcome, everyone! Today, we're diving into a topic that's absolutely fundamental for understanding how functions behave around a specific point. We're talking about **Local Linear Approximations**. This is where the rubber meets the road in connecting the abstract world of calculus with the practical world of engineering and physical sciences.

Think about it this way: many complex phenomena in electrical circuits or physical systems can be incredibly difficult to model precisely. However, if we can understand how these systems behave over a *very small* range around a particular operating point, we can often simplify our analysis significantly. This is precisely what local linear approximations allow us to do. They help us approximate a curve with a straight line in a small neighborhood. This ties directly into our Course Outcomes, especially **CO1**, where we deal with derivatives, which are the very essence of describing local behavior. Understanding how functions change locally is crucial for calculating derivatives and, subsequently, for finding maxima and minima.

### What is a Local Linear Approximation?

Imagine you have a function, let's call it $y = f(x)$. We're interested in understanding what $f(x)$ is doing near a specific point, say $x = a$. If the function is "nice" around $a$ (and in calculus, "nice" usually means differentiable), we can approximate the function's graph by its tangent line at $x=a$.

Why the tangent line? Because the tangent line at a point on a curve is the *best linear fit* to that curve at that exact point. It captures the instantaneous rate of change (the slope) of the function at $a$.

Let's recall the equation of a line. If we know a point $(a, f(a))$ on the line and its slope, $m$, the equation of the line is given by:

$y - f(a) = m(x - a)$

Now, in the context of our function $f(x)$, what is the slope $m$ of the tangent line at $x=a$? That's right, it's the derivative of $f(x)$ evaluated at $a$, which we denote as $f'(a)$.

So, the equation of the tangent line to the graph of $y = f(x)$ at the point $(a, f(a))$ is:

$y - f(a) = f'(a)(x - a)$

We can rearrange this to express $y$ in terms of $x$:

$y = f(a) + f'(a)(x - a)$

This equation gives us the value of $y$ on the tangent line for any given $x$.

### The Approximation

Now, here's the magic. If we are considering values of $x$ that are *very close* to $a$, the tangent line is a remarkably good approximation of the function $f(x)$ itself. We can express this as:

$f(x) \approx f(a) + f'(a)(x - a) \quad \text{for } x \text{ near } a$

We often call this the **linear approximation** or **tangent line approximation** of $f(x)$ at $x=a$. Sometimes, in electrical science, we might see this written using $\Delta y \approx f'(a) \Delta x$, where $\Delta x = x - a$ is a small change in $x$, and $\Delta y = f(x) - f(a)$ is the corresponding approximate change in $y$. This is a very useful way to think about how small changes in input affect output.

This concept is directly related to the definition of the derivative. Remember the limit definition of the derivative?

$f'(a) = \lim_{h \to 0} \frac{f(a+h) - f(a)}{h}$

If $h$ is very small (i.e., $a+h$ is close to $a$), the ratio $\frac{f(a+h) - f(a)}{h}$ is close to $f'(a)$. Rearranging this gives us $f(a+h) - f(a) \approx f'(a)h$, or $f(a+h) \approx f(a) + f'(a)h$. This is exactly our linear approximation formula, just with $x = a+h$.

**Key Idea:** The linear approximation essentially replaces a curved function with its tangent line in a small interval around the point of tangency. This is like using a ruler to measure a small segment of a curve – it looks pretty straight!

### Examples to Visualize

Let's ground this with some examples.

**Example 1: Approximating $\sqrt{4.1}$**

We want to approximate $\sqrt{4.1}$. We know that $4.1$ is close to $4$, and $\sqrt{4}$ is a nice, simple number ($2$). This suggests our point of approximation, $a$, should be $4$.

Our function is $f(x) = \sqrt{x}$.
The point of approximation is $a=4$.
The value we are interested in is $x=4.1$.

First, we need the value of the function at $a$:
$f(a) = f(4) = \sqrt{4} = 2$.

Next, we need the derivative of $f(x)$:
$f(x) = x^{1/2}$
$f'(x) = \frac{1}{2}x^{-1/2} = \frac{1}{2\sqrt{x}}$.

Now, evaluate the derivative at $a=4$:
$f'(a) = f'(4) = \frac{1}{2\sqrt{4}} = \frac{1}{2 \times 2} = \frac{1}{4}$.

Using our linear approximation formula:
$f(x) \approx f(a) + f'(a)(x - a)$
$\sqrt{x} \approx \sqrt{4} + f'(4)(x - 4)$
$\sqrt{x} \approx 2 + \frac{1}{4}(x - 4)$.

Now, substitute $x = 4.1$:
$\sqrt{4.1} \approx 2 + \frac{1}{4}(4.1 - 4)$
$\sqrt{4.1} \approx 2 + \frac{1}{4}(0.1)$
$\sqrt{4.1} \approx 2 + 0.025$
$\sqrt{4.1} \approx 2.025$.

Let's check this with a calculator. $\sqrt{4.1} \approx 2.024845...$. Our approximation is very close! This makes sense because $4.1$ is indeed very close to $4$.

**Relatable Analogy:** Imagine you're navigating a very bumpy road in a car. If you're going very slowly, and you look just a few feet ahead, the road might seem almost flat. You can approximate your path with a straight line. But if you look miles ahead, the bumps and dips become very apparent. The tangent line approximation is like looking just a short distance ahead – it captures the immediate direction and slope, but not the long-term curvature. This is extremely useful in physics, for instance, when analyzing small oscillations of a pendulum, where the curved path can be approximated by linear motion for small angles.

**Example 2: Approximating $\sin(0.1)$**

Let's approximate the value of $\sin(0.1)$ radians. Here, $0.1$ is a small number, so we can think of our approximation point $a$ as $0$.
Our function is $f(x) = \sin(x)$.
The point of approximation is $a=0$.
The value we are interested in is $x=0.1$.

First, $f(a)$:
$f(0) = \sin(0) = 0$.

Next, the derivative of $f(x)$:
$f'(x) = \cos(x)$.

Evaluate the derivative at $a=0$:
$f'(0) = \cos(0) = 1$.

Using the linear approximation formula:
$f(x) \approx f(a) + f'(a)(x - a)$
$\sin(x) \approx \sin(0) + \cos(0)(x - 0)$
$\sin(x) \approx 0 + 1(x)$
$\sin(x) \approx x$.

So, for $x$ close to $0$, $\sin(x) \approx x$.
Substituting $x = 0.1$:
$\sin(0.1) \approx 0.1$.

This is a fundamental result often used in physics and engineering when dealing with small angles (measured in radians). If you're dealing with a small vibration, for example, and the angle of displacement is $\theta$, you can often approximate $\sin(\theta)$ by $\theta$ itself, which simplifies the differential equations governing the system. This is a key aspect of linearization in control systems and signal processing.

### The Error in Approximation

It's important to understand that this is an *approximation*. The tangent line and the function are not identical. The difference between the actual function value and the approximated value is the **error**.

Error $= f(x) - [f(a) + f'(a)(x - a)]$

As $x$ gets further away from $a$, this error generally increases. The "local" in "local linear approximation" is critical. The approximation is good only in a *small neighborhood* around $a$.

The error term can be formally expressed using Taylor's Theorem. For the linear approximation, the remainder term (which represents the error) is given by:

$R_1(x) = \frac{f''(c)}{2!}(x-a)^2$

for some number $c$ between $a$ and $x$. This means the error is proportional to the square of the distance from $a$. If $(x-a)$ is small, $(x-a)^2$ is even smaller, which is why the approximation is good.

### Taylor Polynomials: Generalizing the Idea

The linear approximation is actually the first-degree Taylor polynomial. Taylor's Theorem allows us to build higher-degree polynomial approximations that are even more accurate.

The Taylor polynomial of degree $n$ for $f(x)$ centered at $x=a$ is:

$P_n(x) = f(a) + f'(a)(x-a) + \frac{f''(a)}{2!}(x-a)^2 + \dots + \frac{f^{(n)}(a)}{n!}(x-a)^n$

The linear approximation is $P_1(x) = f(a) + f'(a)(x-a)$.

**Textbook Connection:** If you look at books like Anton, Biven, Davis or Thomas' Calculus, they introduce this formally as part of the discussion on differentiability and its geometric interpretation. They emphasize that the tangent line is the "best linear approximation" because it matches the function's value and its slope at the point $a$.

### Application in Electrical and Physical Sciences

Why is this so important in our field?

*   **Circuit Analysis:** For non-linear circuit components (like diodes or transistors), their behavior is often described by complex, non-linear equations. However, for small signal analysis, we can linearize these equations around a quiescent operating point (Q-point). This allows us to use linear circuit analysis techniques (like superposition, impedance concepts) which are much simpler. For instance, the dynamic resistance of a diode $r_d = \frac{kT}{qI}$ is a linear approximation of its current-voltage characteristic around a specific DC bias current $I$. This is directly derived from the derivative of the diode equation.
*   **Physics:** As mentioned with the pendulum, many physical systems exhibit approximately linear behavior when deviations from an equilibrium are small. This includes small oscillations in springs, systems near phase transitions, and in the behavior of light in optical fibers for small perturbations.
*   **Error Propagation:** When you measure quantities with uncertainties (like voltage, current, resistance), and then use these measured values in a formula to calculate another quantity, the uncertainties propagate. The linear approximation, using partial derivatives (tying into CO1), is the standard way to estimate this error propagation. If $Q = f(x, y)$, then $\Delta Q \approx \frac{\partial f}{\partial x}\Delta x + \frac{\partial f}{\partial y}\Delta y$. This is a multivariate extension of our linear approximation concept.

**Example 3: Linearizing a Function for Small Changes in a System**

Consider a simple electrical system where the output voltage $V_{out}$ depends on an input voltage $V_{in}$ through a non-linear resistor. Let's say the relationship is $I = k V_{in}^3$, and $V_{out} = I \cdot R$ for some resistor $R$. So, $V_{out}(V_{in}) = R k V_{in}^3$.

Suppose our system is operating at $V_{in} = 2V$, and we want to know how a small change in input voltage, $\Delta V_{in}$, affects the output voltage, $\Delta V_{out}$.

Our function is $f(V_{in}) = R k V_{in}^3$.
We are interested in behavior around $a = 2V$.
Let's assume $R=1\Omega$ and $k=1 A/V^3$ for simplicity. So $f(V_{in}) = V_{in}^3$.

The operating point value is $f(a) = f(2) = 2^3 = 8V$.
The derivative is $f'(V_{in}) = 3 V_{in}^2$.
At the operating point, $f'(a) = f'(2) = 3(2^2) = 3(4) = 12 V/V$.

Our linear approximation is:
$f(V_{in}) \approx f(a) + f'(a)(V_{in} - a)$
$V_{out} \approx 8 + 12(V_{in} - 2)$.

Now, let $\Delta V_{in} = V_{in} - 2$. The formula becomes:
$V_{out} \approx 8 + 12 \Delta V_{in}$.

This tells us that for every $1V$ increase in $V_{in}$ around $2V$, the $V_{out}$ increases by approximately $12V$. This is much easier to work with than the cubic relationship for small changes.

**Important Point:** This approximation is valid only for small values of $\Delta V_{in}$. If $\Delta V_{in}$ is large, the cubic term ($V_{in}^3$) will deviate significantly from the linear approximation.

### Summary and Key Takeaways

*   **What is it?** A local linear approximation approximates a function $f(x)$ near a point $a$ using the equation of its tangent line at $a$.
*   **The Formula:** $f(x) \approx f(a) + f'(a)(x-a)$ for $x$ near $a$.
*   **Why it works:** The tangent line captures the function's value and its instantaneous rate of change at $a$. For small intervals around $a$, the tangent line is a good local representation of the curve.
*   **Applications:** Essential for simplifying complex non-linear systems in electrical circuits and physical phenomena by linearizing behavior around an operating point. It's the foundation for small-signal analysis.
*   **Connection to CO1:** This topic directly builds understanding of derivatives, which are fundamental for calculating the rate of change of functions and are used extensively in optimization problems (finding maxima/minima) and error analysis.
*   **Caution:** It's a *local* approximation. Accuracy decreases as $x$ moves further from $a$.

Remember this: whenever you see a complex function or system in a small region of operation, think about the tangent line. It's your best friend for making things manageable!

---

### Sample Questions and Answers

**1. Conceptual Question:** Explain why the tangent line provides a good local linear approximation for a differentiable function.

**Answer:** A tangent line to a function $f(x)$ at a point $x=a$ is defined as the line that passes through the point $(a, f(a))$ and has a slope equal to the derivative of the function at that point, $f'(a)$. The derivative $f'(a)$ represents the instantaneous rate of change of the function at $a$. For values of $x$ very close to $a$, the function's behavior is dominated by this instantaneous rate of change. Therefore, the tangent line, which perfectly matches the function's value and its slope at $a$, serves as an excellent approximation of the function's behavior in that immediate vicinity. The smaller the interval around $a$, the closer the tangent line's graph will be to the function's graph.

**2. Application Question:** A transistor's collector current $I_C$ is approximately related to its base-emitter voltage $V_{BE}$ by the equation $I_C = I_S e^{V_{BE}/V_T}$, where $I_S$ and $V_T$ are constants. If the transistor is biased at $V_{BE} = V_0$ and we want to analyze small AC signals applied to the base, what is the approximate linear relationship between the change in $I_C$ ($\Delta I_C$) and the change in $V_{BE}$ ($\Delta V_{BE}$)?

**Answer:**
Let $f(V_{BE}) = I_C = I_S e^{V_{BE}/V_T}$.
We are interested in the behavior around the bias point $a = V_0$.
The value of the function at the bias point is $f(V_0) = I_S e^{V_0/V_T}$. This is our DC collector current, let's call it $I_{C0}$.

Next, we find the derivative with respect to $V_{BE}$:
$f'(V_{BE}) = \frac{d}{dV_{BE}}(I_S e^{V_{BE}/V_T}) = I_S \cdot e^{V_{BE}/V_T} \cdot \frac{1}{V_T} = \frac{I_S}{V_T} e^{V_{BE}/V_T}$.

Now, evaluate the derivative at the bias point $V_{BE} = V_0$:
$f'(V_0) = \frac{I_S}{V_T} e^{V_0/V_T}$.
Notice that $I_S e^{V_0/V_T}$ is simply $I_{C0}$, the DC collector current.
So, $f'(V_0) = \frac{I_{C0}}{V_T}$. This quantity is known as the transconductance, $g_m$.

The linear approximation formula is $f(V_{BE}) \approx f(V_0) + f'(V_0)(V_{BE} - V_0)$.
Substituting our terms:
$I_C \approx I_{C0} + \frac{I_{C0}}{V_T}(V_{BE} - V_0)$.

Let $\Delta I_C = I_C - I_{C0}$ and $\Delta V_{BE} = V_{BE} - V_0$.
Then, $\Delta I_C \approx \frac{I_{C0}}{V_T} \Delta V_{BE}$.
Or, $\Delta I_C \approx g_m \Delta V_{BE}$.

This is the fundamental relationship for small-signal analysis of bipolar junction transistors (BJTs). It shows that the AC component of the collector current is linearly proportional to the AC component of the base-emitter voltage, with the constant of proportionality being the transconductance $g_m$.

**3. Exam-Oriented Question:** Approximate the value of $\tan(0.75)$ using a local linear approximation. Take $a=0$.

**Answer:**
Our function is $f(x) = \tan(x)$.
We want to approximate $f(0.75)$.
Our point of approximation is $a=0$.

First, find $f(a)$:
$f(0) = \tan(0) = 0$.

Next, find the derivative of $f(x)$:
$f'(x) = \frac{d}{dx}(\tan(x)) = \sec^2(x)$.

Evaluate the derivative at $a=0$:
$f'(0) = \sec^2(0)$.
Since $\sec(x) = \frac{1}{\cos(x)}$ and $\cos(0) = 1$, we have $\sec(0) = 1$.
So, $f'(0) = 1^2 = 1$.

Now, use the linear approximation formula:
$f(x) \approx f(a) + f'(a)(x-a)$
$\tan(x) \approx \tan(0) + \sec^2(0)(x-0)$
$\tan(x) \approx 0 + 1(x)$
$\tan(x) \approx x$.

Substitute $x = 0.75$:
$\tan(0.75) \approx 0.75$.

**Note:** This result, $\tan(x) \approx x$ for small $x$, is similar to $\sin(x) \approx x$. However, $0.75$ radians (which is about $43$ degrees) is not as "small" as $0.1$ radians. The approximation might not be as accurate as in the $\sin(0.1)$ case. Let's check: $\tan(0.75) \approx 0.9316$. The approximation $0.75$ is off by about $0.18$, which is a significant percentage error. This highlights the importance of the "local" aspect and the size of $(x-a)$. For better accuracy, we'd need to choose an $a$ closer to $0.75$ where the tangent is defined and then use a higher-degree Taylor polynomial. For instance, if we chose $a = \pi/4$ (approx. $0.785$), $f(\pi/4) = 1$ and $f'(\pi/4) = \sec^2(\pi/4) = (\sqrt{2})^2 = 2$. Then $\tan(0.75) \approx 1 + 2(0.75 - \pi/4) \approx 1 + 2(0.75 - 0.785) = 1 + 2(-0.035) = 1 - 0.07 = 0.93$. This is a much better approximation. This demonstrates that picking the right $a$ is crucial.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=XZo4xyJXC2k) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=7UJ4CFR1894) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=S0hG_mS9bV4) |
