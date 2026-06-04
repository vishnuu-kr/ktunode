---
title: "Unit step function"
subject: "MATHEMATICS FOR ELECTRICAL SCIENCE AND 
PHYSICAL  SCIENCE - 1"
module: "Module 3: Laplace Transform"
branch: "Civil Engineering"
semester: 1
topicId: "68b54565d74ec52cc09129e6"
status: "completed"
scrapedAt: "2026-05-20T18:31:05.171Z"
---
# Module 3: Laplace Transform - Unit Step Function

Welcome everyone to our session on the Laplace Transform, specifically diving into a fundamental building block: the **Unit Step Function**. This function, though simple in its definition, is incredibly powerful when we start working with the Laplace transform, especially for solving differential equations that model real-world systems in electrical and physical science. Think of it as the "on-off switch" for signals and systems.

Our goal today is to understand what the unit step function is, how to represent it mathematically, and most importantly, how its Laplace transform is calculated. This will directly help us achieve **Course Outcome 3 (CO3)**: to compute Laplace transforms and apply them to solve Ordinary Differential Equations (ODEs) arising in engineering.

## 1. What is the Unit Step Function?

Imagine you're controlling a device, say, a light bulb. You flip a switch. At that moment, the light goes from off to on. Before you flipped the switch, the light was off (its output was zero). Immediately after you flip it, it's on (its output is one, or some constant value representing "on"). The unit step function precisely models this sudden change.

Formally, the unit step function, often denoted as $u(t)$ or $U(t)$, is defined as:

$$
u(t) =
\begin{cases}
0 & \text{if } t < 0 \\
1 & \text{if } t \ge 0
\end{cases}
$$

This definition tells us that for any time *before* $t=0$, the function has a value of zero. At time $t=0$, it instantly jumps to a value of one and stays there for all subsequent times.

**Analogy Time!** Think about turning on a heater. Before you set the thermostat, the heater is off. The moment you set it to a desired temperature at, say, $t=0$, the heater starts to operate. The unit step function represents that "moment of activation."

*   **Connection to Real-World Signals:** In electrical engineering, this could be turning on a voltage source, applying a constant force to a mechanical system, or activating a control signal. For instance, if you connect a battery to a circuit at $t=0$, the voltage applied is a unit step function (assuming the battery voltage is 1 Volt).

*   **Notation:** You'll often see it as $u(t)$ or $u_1(t)$ (where the subscript 1 indicates the value it steps to). Sometimes, especially in older texts or specific contexts, you might see $H(t)$ for the Heaviside step function, which is exactly the same. Kreyszig (10th ed.) uses $u(t)$ and $u_a(t)$ for a step starting at $t=a$.

### 1.1. The Shifted Unit Step Function

What if the "switch" doesn't get flipped at $t=0$? What if it's flipped at some later time, say $t=a$? This is where the **shifted unit step function**, $u(t-a)$, comes in.

The definition is very similar:

$$
u(t-a) =
\begin{cases}
0 & \text{if } t < a \\
1 & \text{if } t \ge a
\end{cases}
$$

So, the function remains zero until time $t=a$, at which point it jumps to one.

**Visualizing the Shift:** If $u(t)$ is a switch at time 0, $u(t-2)$ is a switch that gets flipped at time $t=2$. The graph of $u(t-2)$ is simply the graph of $u(t)$ shifted 2 units to the right along the time axis.

*   **Example:** If we apply a voltage of 5 Volts starting at $t=3$ seconds, the voltage function $v(t)$ can be written as $v(t) = 5 u(t-3)$.

*   **Importance for Modeling:** This shifted version is crucial because most real-world events don't start precisely at $t=0$. They start when they start!

## 2. The Unit Step Function as a Gatekeeper

One of the most important uses of the unit step function is to "gate" or "window" other functions. That is, to turn a function on or off over specific time intervals.

Let's say we have a function $f(t)$ and we want it to be active only for $t \ge a$. We can achieve this by multiplying $f(t)$ with $u(t-a)$:

$f(t) u(t-a) =
\begin{cases}
f(t) \cdot 0 & \text{if } t < a \\
f(t) \cdot 1 & \text{if } t \ge a
\end{cases}
=
\begin{cases}
0 & \text{if } t < a \\
f(t) & \text{if } t \ge a
\end{cases}
$

This is exactly what we saw with $5 u(t-3)$. The value 5 is a constant function, and multiplying it by $u(t-3)$ makes that constant voltage active only after $t=3$.

### 2.1. Gating Over an Interval

What if we want a function $f(t)$ to be active only between $t=a$ and $t=b$ (where $a < b$)?

We can use two step functions for this.
1.  First, we turn $f(t)$ ON at $t=a$ using $u(t-a)$. This gives us $f(t) u(t-a)$.
2.  Then, we need to turn it OFF at $t=b$. We can do this by multiplying by a step function that is 0 for $t \ge b$. That function is $u(t-b)$. However, when we multiply $f(t) u(t-a)$ by $u(t-b)$, we are effectively multiplying by 0 for $t \ge b$.

So, the function active only for $a \le t < b$ is:

$f(t) [u(t-a) - u(t-b)]$

Let's check this:
*   For $t < a$: $f(t) [0 - 0] = 0$.
*   For $a \le t < b$: $f(t) [1 - 0] = f(t)$.
*   For $t \ge b$: $f(t) [1 - 1] = f(t) \cdot 0 = 0$.

This is exactly what we want! It's zero before $a$, it's $f(t)$ between $a$ and $b$, and it's zero after $b$.

**Real-world Example:** Imagine a pulse signal that is 5 volts for 2 seconds, starting at $t=1$ second.
Here, $f(t) = 5$, $a=1$, and the pulse duration is 2 seconds, so it ends at $t=1+2=3$. Thus, $b=3$.
The function would be $5 [u(t-1) - u(t-3)]$.

*   **Key Takeaway:** The difference of two shifted step functions, $u(t-a) - u(t-b)$, creates a rectangular pulse of height 1, starting at $t=a$ and ending at $t=b$. Multiplying by a constant or another function shapes that pulse.

This concept of representing signals using step functions is central to modeling and analyzing systems, directly aiding **CO3** by providing a way to describe complex input signals for ODEs.

## 3. Laplace Transform of the Unit Step Function

Now, the core of our topic: finding the Laplace transform of $u(t)$. This is where the power of the Laplace transform starts to shine.

Recall the definition of the Laplace transform of a function $g(t)$:
$\mathcal{L}\{g(t)\} = G(s) = \int_{0}^{\infty} e^{-st} g(t) dt$

Let's apply this to $u(t)$. We have $g(t) = u(t)$.

$\mathcal{L}\{u(t)\} = \int_{0}^{\infty} e^{-st} u(t) dt$

Because $u(t) = 1$ for $t \ge 0$, the integral becomes:

$\mathcal{L}\{u(t)\} = \int_{0}^{\infty} e^{-st} (1) dt$

This is a standard improper integral. Let's evaluate it:

$\int_{0}^{\infty} e^{-st} dt = \lim_{b \to \infty} \int_{0}^{b} e^{-st} dt$

The integral of $e^{-st}$ with respect to $t$ is $-\frac{1}{s} e^{-st}$, provided $s \ne 0$.

So, $\lim_{b \to \infty} \left[ -\frac{1}{s} e^{-st} \right]_{0}^{b}$

$= \lim_{b \to \infty} \left( -\frac{1}{s} e^{-sb} - \left(-\frac{1}{s} e^{-s \cdot 0}\right) \right)$

$= \lim_{b \to \infty} \left( -\frac{1}{s} e^{-sb} + \frac{1}{s} e^{0} \right)$

$= \lim_{b \to \infty} \left( -\frac{1}{s} e^{-sb} + \frac{1}{s} \right)$

Now, we need to consider the limit as $b \to \infty$.
For the term $e^{-sb}$:
*   If $s > 0$, then $-sb \to -\infty$ as $b \to \infty$. Therefore, $e^{-sb} \to 0$.
*   If $s < 0$, then $-sb \to +\infty$ as $b \to \infty$. Therefore, $e^{-sb} \to \infty$. The integral diverges, meaning the Laplace transform does not exist for $s<0$.
*   If $s = 0$, the original integral $\int_0^\infty e^{-0t} dt = \int_0^\infty 1 dt = \lim_{b\to\infty} [t]_0^b = \lim_{b\to\infty} b = \infty$. So, it also diverges for $s=0$.

Therefore, for the Laplace transform to exist, we must have $s > 0$. Under this condition, $\lim_{b \to \infty} e^{-sb} = 0$.

So, the result is:

$0 + \frac{1}{s} = \frac{1}{s}$

Thus, we have found a very important result:

$\mathcal{L}\{u(t)\} = \frac{1}{s}, \quad s > 0$

**Remember this:** The Laplace transform of the basic unit step function is $1/s$. This is one of the fundamental pairs you'll need to memorize, just like you memorize $e^{at} \leftrightarrow \frac{1}{s-a}$.

### 3.1. Laplace Transform of the Shifted Unit Step Function

What about $u(t-a)$ for $a > 0$?
$\mathcal{L}\{u(t-a)\} = \int_{0}^{\infty} e^{-st} u(t-a) dt$

Since $u(t-a) = 0$ for $t < a$ and $u(t-a) = 1$ for $t \ge a$, our integral limits change:

$\mathcal{L}\{u(t-a)\} = \int_{a}^{\infty} e^{-st} (1) dt$

Let's evaluate this:
$\lim_{b \to \infty} \int_{a}^{b} e^{-st} dt = \lim_{b \to \infty} \left[ -\frac{1}{s} e^{-st} \right]_{a}^{b}$

$= \lim_{b \to \infty} \left( -\frac{1}{s} e^{-sb} - \left(-\frac{1}{s} e^{-sa}\right) \right)$

$= \lim_{b \to \infty} \left( -\frac{1}{s} e^{-sb} + \frac{1}{s} e^{-sa} \right)$

Again, for $s > 0$, $e^{-sb} \to 0$ as $b \to \infty$.

So, the result is:

$\mathcal{L}\{u(t-a)\} = \frac{1}{s} e^{-sa}, \quad s > 0, \quad a > 0$

**This is the second key pair:** The Laplace transform of a *shifted* unit step function $u(t-a)$ is $e^{-sa}/s$. The $e^{-sa}$ term is called a "delay factor" or "shift factor" in the $s$-domain.

*   **Intuition:** Shifting a function in the time domain by $a$ units corresponds to multiplying its Laplace transform by $e^{-sa}$. This is a very general property known as the **Time-Shifting Property** of the Laplace transform. If $\mathcal{L}\{f(t)\} = F(s)$, then $\mathcal{L}\{f(t-a)u(t-a)\} = e^{-sa} F(s)$. In our case, $f(t)=1$, and $\mathcal{L}\{1\}=1/s$. So, $\mathcal{L}\{1 \cdot u(t-a)\} = e^{-sa} (1/s)$, which matches our result. This property is vital for **CO3**.

*   **Kreyszig's Notation:** Kreyszig (10th ed., Section 7.4) might denote the unit step function starting at $a$ as $u_a(t)$. The property then states $\mathcal{L}\{u_a(t)\} = \frac{1}{s}e^{-as}$ for $a > 0$.

## 4. Applications in Solving ODEs

Now, how does this tie into solving ODEs, our main objective for **CO3**?

Consider an ODE like:
$y'' + 3y' + 2y = f(t)$

If the forcing function $f(t)$ is described using unit step functions, we can systematically solve it.

**Example:** Let's solve the ODE $y'' + y = u(t-2)$, with initial conditions $y(0)=0$ and $y'(0)=0$.

1.  **Take the Laplace Transform of both sides:**
    $\mathcal{L}\{y''\} + \mathcal{L}\{y\} = \mathcal{L}\{u(t-2)\}$

2.  **Use Laplace Transform properties:**
    Recall the transforms for derivatives:
    $\mathcal{L}\{y''\} = s^2 Y(s) - s y(0) - y'(0)$
    $\mathcal{L}\{y'\} = s Y(s) - y(0)$
    And $\mathcal{L}\{y\} = Y(s)$.

    Using the initial conditions $y(0)=0$ and $y'(0)=0$:
    $\mathcal{L}\{y''\} = s^2 Y(s)$
    $\mathcal{L}\{y'\} = s Y(s)$

    From our earlier work, $\mathcal{L}\{u(t-2)\} = \frac{1}{s}e^{-2s}$.

    Substituting these into the transformed equation:
    $(s^2 Y(s)) + Y(s) = \frac{1}{s}e^{-2s}$

3.  **Solve for $Y(s)$:**
    $Y(s)(s^2 + 1) = \frac{1}{s}e^{-2s}$
    $Y(s) = \frac{1}{s(s^2+1)}e^{-2s}$

4.  **Find the inverse Laplace Transform:**
    This is the trickiest part. We need to find the inverse transform of $\frac{1}{s(s^2+1)}e^{-2s}$.
    Let $H(s) = \frac{1}{s(s^2+1)}$. We first find $h(t) = \mathcal{L}^{-1}\{H(s)\}$.
    We can use partial fraction decomposition for $H(s)$:
    $\frac{1}{s(s^2+1)} = \frac{A}{s} + \frac{Bs+C}{s^2+1}$
    $1 = A(s^2+1) + (Bs+C)s$
    $1 = As^2 + A + Bs^2 + Cs$
    $1 = (A+B)s^2 + Cs + A$

    Comparing coefficients:
    *   $s^2$: $A+B = 0 \implies B = -A$
    *   $s$: $C = 0$
    *   constant: $A = 1$

    So, $A=1$, $B=-1$, $C=0$.
    $H(s) = \frac{1}{s} - \frac{s}{s^2+1}$

    Now, find the inverse transform of $H(s)$:
    $h(t) = \mathcal{L}^{-1}\{\frac{1}{s}\} - \mathcal{L}^{-1}\{\frac{s}{s^2+1}\}$
    We know $\mathcal{L}^{-1}\{\frac{1}{s}\} = u(t)$ (or 1 for $t \ge 0$) and $\mathcal{L}^{-1}\{\frac{s}{s^2+1}\} = \cos(t)$.
    So, $h(t) = 1 - \cos(t)$.

    Now, we have $Y(s) = h(t) e^{-2s}$ in the $s$-domain, which is $Y(s) = H(s) e^{-2s}$.
    Using the time-shifting property, $\mathcal{L}^{-1}\{e^{-sa} H(s)\} = h(t-a) u(t-a)$.
    Here, $a=2$ and $h(t) = 1 - \cos(t)$.

    So, $y(t) = \mathcal{L}^{-1}\{Y(s)\} = (1 - \cos(t-2)) u(t-2)$.

    **The Solution:**
    $y(t) =
    \begin{cases}
    0 & \text{if } t < 2 \\
    1 - \cos(t-2) & \text{if } t \ge 2
    \end{cases}
    $

**What does this solution mean?**
Before time $t=2$, the system is at rest ($y(t)=0$, $y'(t)=0$). At $t=2$, a unit step input is applied, and the system responds with the function $1-\cos(t-2)$. This function starts from $1-\cos(0)=0$ at $t=2$, rises, and then oscillates with a decaying amplitude (though in this simple case, it's a pure oscillation offset).

This problem-solving process directly addresses **CO3**, demonstrating how to use Laplace transforms to handle ODEs with piecewise-defined forcing functions that are naturally expressed using unit step functions.

## 5. Summary and Key Takeaways

Let's recap the essential points you should take away from this session:

*   **Unit Step Function Definition:** $u(t) = 0$ for $t<0$ and $1$ for $t \ge 0$. It models an instantaneous switch from off to on.
*   **Shifted Unit Step Function:** $u(t-a) = 0$ for $t<a$ and $1$ for $t \ge a$. It models a switch that is turned on at time $t=a$.
*   **Using Step Functions for Gates:** The product $f(t)u(t-a)$ makes $f(t)$ active only for $t \ge a$. The expression $f(t)[u(t-a) - u(t-b)]$ makes $f(t)$ active only for $a \le t < b$. This is a powerful way to represent signals.
*   **Laplace Transform of Unit Step:** $\mathcal{L}\{u(t)\} = \frac{1}{s}$ for $s > 0$. This is a fundamental pair.
*   **Laplace Transform of Shifted Unit Step:** $\mathcal{L}\{u(t-a)\} = \frac{1}{s}e^{-sa}$ for $s > 0, a > 0$. This is due to the time-shifting property.
*   **Application to ODEs:** Unit step functions are crucial for describing real-world inputs (like switching on a power supply or applying a force) in ODEs. Laplace transforms provide a systematic way to solve these ODEs by converting them into algebraic equations in the $s$-domain.

Understanding the unit step function and its Laplace transform is not just about memorizing formulas; it's about grasping how to model and analyze systems that are activated or change their behavior at specific points in time. This is a cornerstone for many problems you'll encounter in your engineering studies.

## Sample Questions with Answers

**Question 1 (Conceptual):**
Describe the function $f(t) = 3u(t-1) - 3u(t-4)$ using words and sketch its graph.

**Answer 1:**
This function represents a rectangular pulse.
*   For $t < 1$, $f(t) = 3(0) - 3(0) = 0$.
*   For $1 \le t < 4$, $f(t) = 3(1) - 3(0) = 3$.
*   For $t \ge 4$, $f(t) = 3(1) - 3(1) = 0$.

So, $f(t)$ is zero for all times before $t=1$, it has a constant value of 3 for the time interval from $t=1$ to $t=4$ (exclusive of $t=4$), and it becomes zero again for all times after $t=4$.

**Sketch:**
The graph would be a horizontal axis (t-axis) and a vertical axis (f(t)-axis).
From $t=0$ to $t=1$, the graph is on the t-axis (value 0).
At $t=1$, the graph jumps up to a height of 3 and draws a horizontal line segment at $f(t)=3$ up to $t=4$.
At $t=4$, the graph drops back down to the t-axis (value 0) and stays there for $t>4$.

**Question 2 (Exam-Oriented - Laplace Transform Calculation):**
Find the Laplace transform of the function $g(t) = t u(t-2)$.

**Answer 2:**
We need to find $\mathcal{L}\{t u(t-2)\}$.
This is of the form $\mathcal{L}\{f(t) u(t-a)\}$, where $f(t) = t$ and $a=2$.
The time-shifting property states that $\mathcal{L}\{f(t-a) u(t-a)\} = e^{-sa} F(s)$, where $F(s) = \mathcal{L}\{f(t)\}$.
Our function is $t u(t-2)$, not $(t-2) u(t-2)$. So, we must first rewrite $t$ in terms of $(t-2)$.
$t = (t-2) + 2$.
So, $g(t) = [(t-2) + 2] u(t-2) = (t-2)u(t-2) + 2u(t-2)$.

Now, we can take the Laplace transform of each term:
$\mathcal{L}\{g(t)\} = \mathcal{L}\{(t-2)u(t-2)\} + \mathcal{L}\{2u(t-2)\}$

For the first term, $\mathcal{L}\{(t-2)u(t-2)\}$:
Here, $f(t-2) = t-2$, so $f(t) = t$.
We know $\mathcal{L}\{t\} = \frac{1}{s^2}$.
Using the time-shifting property, $\mathcal{L}\{(t-2)u(t-2)\} = e^{-2s} \mathcal{L}\{t\} = e^{-2s} \frac{1}{s^2}$.

For the second term, $\mathcal{L}\{2u(t-2)\}$:
Here, $f(t) = 2$.
We know $\mathcal{L}\{2\} = \frac{2}{s}$.
Using the time-shifting property, $\mathcal{L}\{2u(t-2)\} = e^{-2s} \mathcal{L}\{2\} = e^{-2s} \frac{2}{s}$.

Combining both terms:
$\mathcal{L}\{g(t)\} = e^{-2s} \frac{1}{s^2} + e^{-2s} \frac{2}{s} = e^{-2s} \left( \frac{1}{s^2} + \frac{2}{s} \right)$
$\mathcal{L}\{g(t)\} = e^{-2s} \left( \frac{1 + 2s}{s^2} \right)$

**Alternative approach using derivatives:**
Another way for $\mathcal{L}\{t \cdot 1 \cdot u(t-a)\}$ is using the property $\mathcal{L}\{t \cdot f(t)\} = -\frac{d}{ds} F(s)$.
Let $h(t) = u(t-2)$. Then $H(s) = \mathcal{L}\{u(t-2)\} = \frac{1}{s}e^{-2s}$.
We want $\mathcal{L}\{t \cdot h(t)\}$.
$\mathcal{L}\{t \cdot u(t-2)\} = -\frac{d}{ds} \left( \frac{1}{s}e^{-2s} \right)$
Using the product rule for differentiation:
$-\left( \frac{d}{ds}(\frac{1}{s}) \cdot e^{-2s} + \frac{1}{s} \cdot \frac{d}{ds}(e^{-2s}) \right)$
$= -\left( -\frac{1}{s^2} e^{-2s} + \frac{1}{s} (-2e^{-2s}) \right)$
$= -\left( -\frac{1}{s^2} e^{-2s} - \frac{2}{s} e^{-2s} \right)$
$= \frac{1}{s^2} e^{-2s} + \frac{2}{s} e^{-2s}$
$= e^{-2s} \left( \frac{1}{s^2} + \frac{2}{s} \right) = e^{-2s} \left( \frac{1+2s}{s^2} \right)$.
Both methods yield the same result, reinforcing the understanding of these properties for **CO3**.

**Question 3 (Application to ODEs):**
A system is described by the differential equation $y' + 2y = u(t-3)$, with $y(0)=1$. Find the solution $y(t)$.

**Answer 3:**
1.  **Take Laplace Transform:**
    $\mathcal{L}\{y'\} + \mathcal{L}\{2y\} = \mathcal{L}\{u(t-3)\}$
    $(sY(s) - y(0)) + 2Y(s) = \frac{1}{s}e^{-3s}$

2.  **Substitute initial condition and solve for $Y(s)$:**
    $(sY(s) - 1) + 2Y(s) = \frac{1}{s}e^{-3s}$
    $Y(s)(s+2) - 1 = \frac{1}{s}e^{-3s}$
    $Y(s)(s+2) = 1 + \frac{1}{s}e^{-3s}$
    $Y(s) = \frac{1}{s+2} + \frac{1}{s(s+2)}e^{-3s}$

3.  **Find Inverse Laplace Transform:**
    We need to find the inverse transforms of $\frac{1}{s+2}$ and $\frac{1}{s(s+2)}$.
    *   $\mathcal{L}^{-1}\{\frac{1}{s+2}\} = e^{-2t}$. This is the response to the initial condition.
    *   For $\frac{1}{s(s+2)}$, use partial fractions:
        $\frac{1}{s(s+2)} = \frac{A}{s} + \frac{B}{s+2}$
        $1 = A(s+2) + Bs$
        If $s=0$, $1 = A(2) \implies A = 1/2$.
        If $s=-2$, $1 = B(-2) \implies B = -1/2$.
        So, $\frac{1}{s(s+2)} = \frac{1/2}{s} - \frac{1/2}{s+2}$.
        $\mathcal{L}^{-1}\{\frac{1}{s(s+2)}\} = \mathcal{L}^{-1}\{\frac{1/2}{s}\} - \mathcal{L}^{-1}\{\frac{1/2}{s+2}\} = \frac{1}{2} - \frac{1}{2}e^{-2t}$.
        Let $h(t) = \frac{1}{2} - \frac{1}{2}e^{-2t}$.

    Now, apply the time-shifting property to the second term of $Y(s)$:
    $\mathcal{L}^{-1}\{\frac{1}{s(s+2)}e^{-3s}\} = \mathcal{L}^{-1}\{H(s)e^{-3s}\} = h(t-3)u(t-3)$
    $= \left( \frac{1}{2} - \frac{1}{2}e^{-2(t-3)} \right) u(t-3)$

4.  **Combine the parts for the final solution $y(t)$:**
    $y(t) = e^{-2t} + \left( \frac{1}{2} - \frac{1}{2}e^{-2(t-3)} \right) u(t-3)$

    This can be written piecewise:
    $y(t) =
    \begin{cases}
    e^{-2t} & \text{if } t < 3 \\
    e^{-2t} + \frac{1}{2} - \frac{1}{2}e^{-2t+6} & \text{if } t \ge 3
    \end{cases}
    $
    $y(t) =
    \begin{cases}
    e^{-2t} & \text{if } t < 3 \\
    e^{-2t} + \frac{1}{2} - \frac{1}{2}e^{6}e^{-2t} & \text{if } t \ge 3
    \end{cases}
    $
    $y(t) =
    \begin{cases}
    e^{-2t} & \text{if } t < 3 \\
    e^{-2t} (1 - \frac{1}{2}e^{6}) + \frac{1}{2} & \text{if } t \ge 3
    \end{cases}
    $

This detailed breakdown shows how the unit step function, when combined with Laplace transforms, allows us to solve ODEs with inputs that change at specific times, directly addressing **CO3**.
