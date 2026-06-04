---
title: "Instantaneous Rates of Change"
subject: "MATHEMATICS FOR INFORMATION SCIENCE – 1"
module: "Module 1: Limits of Function Values"
branch: "Computer Science and Engineering"
semester: 1
topicId: "68b45b6e58474a0b135b5bc2"
status: "completed"
scrapedAt: "2026-05-20T16:39:50.476Z"
---
Alright everyone, welcome back! Today, we're diving headfirst into a truly fundamental concept in calculus, one that forms the bedrock for so much of what we'll do in this course: **Instantaneous Rates of Change**. This topic is part of our first module on Limits of Function Values, and it’s absolutely crucial for understanding how things change at a precise moment. Think of it as zooming in, way in, on a graph to see the exact steepness at a single point.

### Understanding Change: From Average to Instantaneous

We’ve all experienced change, right? The speed of a car, the growth of a plant, the increase in data usage on your phone plan. Often, we talk about the *average* rate of change. For example, if you drive 100 miles in 2 hours, your average speed is 50 miles per hour. That’s simple division, change in distance over change in time. It gives us a good overall picture.

But what if you’re interested in your speed *right now*, at this very second? That’s your *instantaneous* speed. Your speedometer tells you that, and it can be very different from your average speed. You might have been stuck in traffic for a bit, then sped up on the highway. The speedometer captures that precise moment.

In mathematics, we bridge this gap from average to instantaneous using the powerful concept of **limits**. And that’s exactly where this topic shines and connects directly with our learning outcomes.

#### Connecting to Course Outcomes:

*   **CO1: Apply various concepts in calculus to linearize functions and to analyze concavity.** Understanding instantaneous rates of change is the first step to linearization. When we approximate a curve with a straight line at a point, that line's slope *is* the instantaneous rate of change. We'll see how this leads into analyzing concavity later.
*   **CO2: Calculate the limits for functions of two variables and partial derivatives of multivariable functions.** While this specific topic focuses on single-variable functions, the *idea* of taking a limit to find an instantaneous rate is a direct precursor to understanding partial derivatives. We're essentially looking at the "slope" in a particular direction, and limits are key to defining that.

### The Secant Line and the Tangent Line: Visualizing the Idea

Let's think about a function, say $f(x)$. We can visualize its graph. To find the average rate of change of $f(x)$ between two points, say $x=a$ and $x=b$, we draw a **secant line** through the points $(a, f(a))$ and $(b, f(b))$ on the graph.

The slope of this secant line is:

$$ m_{secant} = \frac{\text{change in } y}{\text{change in } x} = \frac{f(b) - f(a)}{b - a} $$

This formula, by the way, is something you’ll recognize from our discussions on average rates of change. It's fundamental.

Now, imagine we want to find the rate of change *at* a specific point, say $x=a$. We can't just pick one point! So, what do we do? We keep the point $(a, f(a))$ fixed and start moving the second point $(b, f(b))$ closer and closer to $(a, f(a))$. As point $b$ approaches point $a$, the secant line pivots.

What happens to the slope of this secant line as $b$ gets infinitely close to $a$? It approaches the slope of the line that just "kisses" the curve at point $(a, f(a))$. This special line is called the **tangent line** at that point.

The slope of this tangent line is our **instantaneous rate of change** at $x=a$.

### Formalizing with Limits: The Definition of the Derivative

This idea of "getting closer and closer" is precisely what limits are all about! We can express the slope of the secant line in a slightly different way. Let $x = a+h$. Then $b = a+h$, and $b-a = h$. As $b$ approaches $a$, $a+h$ approaches $a$, which means $h$ approaches 0.

So, the slope of the secant line becomes:

$$ m_{secant} = \frac{f(a+h) - f(a)}{(a+h) - a} = \frac{f(a+h) - f(a)}{h} $$

This expression, $\frac{f(a+h) - f(a)}{h}$, is often called the **difference quotient**. It represents the average rate of change over a small interval of length $h$.

Now, for the magic! To get the *instantaneous* rate of change at $x=a$, we take the limit of this difference quotient as $h$ approaches 0:

$$ m_{tangent} = \lim_{h \to 0} \frac{f(a+h) - f(a)}{h} $$

This limit, if it exists, is the **derivative of $f$ at $x=a$**. We denote it by $f'(a)$ (read as "f prime of a").

**Key Takeaway:** The instantaneous rate of change of a function $f$ at a point $x=a$ is precisely the derivative of $f$ at $x=a$, defined as the limit of the difference quotient.

### Examples to Make it Click

Let’s use some relatable scenarios.

**Example 1: Speed of a Falling Object**

Imagine you drop a ball from the top of a tall building. Its height after $t$ seconds is given by a function, say $s(t) = 100 - 16t^2$ (where $s$ is in feet and $t$ is in seconds, assuming gravity is the only force).

*   **Average Speed:** What's the average speed of the ball during the first 2 seconds?
    $s(0) = 100 - 16(0)^2 = 100$ feet
    $s(2) = 100 - 16(2)^2 = 100 - 16(4) = 100 - 64 = 36$ feet
    Average speed = $\frac{s(2) - s(0)}{2 - 0} = \frac{36 - 100}{2} = \frac{-64}{2} = -32$ feet/second. The negative sign indicates it's moving downwards.

*   **Instantaneous Speed:** What's the speed of the ball exactly at $t=2$ seconds? This is the instantaneous rate of change of its position function $s(t)$ at $t=2$. We need to find $s'(2)$.
    Using the definition:
    $s'(2) = \lim_{h \to 0} \frac{s(2+h) - s(2)}{h}$

    First, let's find $s(2+h)$:
    $s(2+h) = 100 - 16(2+h)^2 = 100 - 16(4 + 4h + h^2) = 100 - 64 - 64h - 16h^2 = 36 - 64h - 16h^2$

    Now, plug this into the limit formula:
    $s'(2) = \lim_{h \to 0} \frac{(36 - 64h - 16h^2) - 36}{h}$
    $s'(2) = \lim_{h \to 0} \frac{-64h - 16h^2}{h}$

    We can factor out $h$ from the numerator:
    $s'(2) = \lim_{h \to 0} \frac{h(-64 - 16h)}{h}$

    Now, as long as $h \neq 0$, we can cancel the $h$'s:
    $s'(2) = \lim_{h \to 0} (-64 - 16h)$

    Finally, substitute $h=0$:
    $s'(2) = -64 - 16(0) = -64$ feet/second.

So, at exactly 2 seconds, the ball is falling at a speed of 64 feet per second. Notice this is much faster than the average speed of 32 ft/sec we calculated over the first 2 seconds. This makes sense because the ball is accelerating due to gravity.

**Common Pitfall:** Trying to plug in $h=0$ directly into the difference quotient will result in $\frac{0}{0}$, which is an indeterminate form. That’s why we *must* simplify the expression first, using algebraic manipulation (like factoring and canceling), before taking the limit. This is the core of using limits to resolve such ambiguities, a skill central to Module 1.

**Example 2: Growth Rate of a Bacterial Culture**

Suppose the number of bacteria in a culture after $t$ hours is given by $N(t) = 1000e^{0.5t}$. We want to know how fast the bacteria population is growing at $t=3$ hours.

*   **The question:** What is the instantaneous growth rate at $t=3$? This means we need to find $N'(3)$.

    $N'(3) = \lim_{h \to 0} \frac{N(3+h) - N(3)}{h}$

    Let's compute $N(3+h)$ and $N(3)$:
    $N(3) = 1000e^{0.5 \times 3} = 1000e^{1.5}$
    $N(3+h) = 1000e^{0.5(3+h)} = 1000e^{1.5 + 0.5h} = 1000e^{1.5}e^{0.5h}$

    Now substitute into the limit:
    $N'(3) = \lim_{h \to 0} \frac{1000e^{1.5}e^{0.5h} - 1000e^{1.5}}{h}$

    Factor out $1000e^{1.5}$:
    $N'(3) = \lim_{h \to 0} \frac{1000e^{1.5}(e^{0.5h} - 1)}{h}$

    We can pull the constant term out of the limit:
    $N'(3) = 1000e^{1.5} \lim_{h \to 0} \frac{e^{0.5h} - 1}{h}$

    Now, this limit $\lim_{h \to 0} \frac{e^{kh} - 1}{h}$ is a standard limit that evaluates to $k$. In our case, $k=0.5$. (If you don't recall this standard limit, you can derive it using L'Hopital's Rule, which we might touch upon later, or by using the Taylor series expansion of $e^x$, but for now, let's assume you know it or are given it. It's a fundamental result from the study of exponential functions).

    So, $\lim_{h \to 0} \frac{e^{0.5h} - 1}{h} = 0.5$.

    Therefore, $N'(3) = 1000e^{1.5} \times 0.5 = 500e^{1.5}$.

    Using a calculator, $e^{1.5} \approx 4.4817$.
    So, $N'(3) \approx 500 \times 4.4817 \approx 2240.85$.

    **Interpretation:** At 3 hours, the bacterial population is growing at an instantaneous rate of approximately 2241 bacteria per hour. This is a key concept for understanding population dynamics or the growth of any quantity modeled by an exponential function.

### The Derivative as a Function

So far, we've found the instantaneous rate of change at a *specific* point, like $x=a$. But we can do this for *any* point $x$. If we replace the specific value $a$ with a general variable $x$, we can define a new function, called the **derivative function**, or simply the **derivative**, denoted by $f'(x)$:

$$ f'(x) = \lim_{h \to 0} \frac{f(x+h) - f(x)}{h} $$

This function $f'(x)$ tells us the instantaneous rate of change of $f(x)$ at *any* value of $x$ where the limit exists.

**How this relates to our textbooks:**
Thomas' Calculus and Kreyszig's Advanced Engineering Mathematics both provide rigorous definitions of the derivative using this limit process. They emphasize that the derivative is a function, not just a number, and they explore its properties extensively. Kreyszig, in particular, is excellent for showing how these foundational concepts extend to more complex engineering applications.

### Notation for Derivatives

It's important to be comfortable with the different ways derivatives are written. Besides $f'(x)$, you'll commonly see:

*   **Leibniz Notation:** $\frac{dy}{dx}$ (This is particularly useful when we think of $y$ as a function of $x$, i.e., $y=f(x)$). It literally means "the derivative of $y$ with respect to $x$."
*   $\frac{d}{dx}[f(x)]$ (The operator notation, indicating "take the derivative of $f(x)$ with respect to $x$").
*   $y'$ or $f'(x)$ (Lagrange Notation).

When dealing with our specific point $x=a$, we often use:

*   $f'(a)$
*   $\frac{dy}{dx}\bigg|_{x=a}$ (The "bar" notation, meaning evaluate the derivative at $x=a$).

### Why is this so important for Information Science?

You might be wondering, "How does calculating the slope of a curve relate to information science?" Think about it!

*   **Data Analysis:** When you analyze data, you're often interested in how one variable changes with respect to another. Is the number of website users increasing linearly, or is it accelerating? The derivative tells you the *rate* of that change.
*   **Algorithm Efficiency:** In computer science, the "rate of change" of a program's runtime or memory usage as the input size grows is crucial. This is analyzed using concepts like Big O notation, which is deeply rooted in understanding how functions change.
*   **Machine Learning:** Many machine learning algorithms, especially those using gradient descent for optimization (related to CO4), rely heavily on finding the "steepest downhill" direction, which is determined by the derivative (or gradient, for multivariable functions). Linearization (CO1) is also a core technique in approximating complex models.
*   **Signal Processing:** Analyzing how signals change over time, their frequency components, and their rates of variation all involve calculus and derivatives.

Essentially, whenever you need to understand *how fast* something is changing, or the sensitivity of a system to small changes, you're looking at instantaneous rates of change. This concept is your first key to unlocking these analytical capabilities.

### Summary and What to Remember

*   **Average Rate of Change vs. Instantaneous Rate of Change:** The average is over an interval, the instantaneous is at a single point.
*   **Secant Line:** Connects two points on a curve, represents average rate of change.
*   **Tangent Line:** Touches a curve at a single point, represents instantaneous rate of change.
*   **The Limit Definition:** The derivative $f'(a)$ is found by $\lim_{h \to 0} \frac{f(a+h) - f(a)}{h}$. This is the core of finding instantaneous rates of change.
*   **Derivative Function:** $f'(x) = \lim_{h \to 0} \frac{f(x+h) - f(x)}{h}$ gives the rate of change at *any* point $x$.
*   **Applications:** Crucial for understanding speed, growth rates, optimization, and the behavior of systems in science and engineering.

Mastering this definition and the idea behind it is paramount. It's the bridge from basic algebra to the powerful world of calculus.

---

### Sample Questions with Answers

**Question 1 (Conceptual):**
Explain the relationship between the slope of a secant line and the slope of a tangent line. How does the concept of a limit enable us to move from one to the other?

**Answer:**
A secant line connects two distinct points on a curve, and its slope represents the *average* rate of change of the function between those two points. A tangent line, on the other hand, touches the curve at a single point, and its slope represents the *instantaneous* rate of change at that specific point. The limit is the tool that allows us to transition from the secant line to the tangent line. By taking the limit of the slope of the secant line as the two points on the curve get infinitely close to each other (i.e., as the denominator $h$ in the difference quotient approaches zero), we find the slope of the tangent line. This process essentially captures the rate of change at an infinitely small interval, giving us the instantaneous rate.

**Question 2 (Application/Calculation):**
A company's profit, $P(x)$, in thousands of dollars, from selling $x$ thousand units of a product is given by $P(x) = -x^3 + 12x^2 + 30x - 50$. Calculate the instantaneous rate of change of profit when the company sells 5 thousand units.

**Answer:**
We need to find the derivative of $P(x)$ and then evaluate it at $x=5$.
First, let's find the derivative $P'(x)$ using the limit definition:
$P'(x) = \lim_{h \to 0} \frac{P(x+h) - P(x)}{h}$

$P(x+h) = -(x+h)^3 + 12(x+h)^2 + 30(x+h) - 50$
$P(x+h) = -(x^3 + 3x^2h + 3xh^2 + h^3) + 12(x^2 + 2xh + h^2) + 30x + 30h - 50$
$P(x+h) = -x^3 - 3x^2h - 3xh^2 - h^3 + 12x^2 + 24xh + 12h^2 + 30x + 30h - 50$

$P(x+h) - P(x) = (-x^3 - 3x^2h - 3xh^2 - h^3 + 12x^2 + 24xh + 12h^2 + 30x + 30h - 50) - (-x^3 + 12x^2 + 30x - 50)$
$P(x+h) - P(x) = -3x^2h - 3xh^2 - h^3 + 24xh + 12h^2 + 30h$

Now divide by $h$:
$\frac{P(x+h) - P(x)}{h} = \frac{h(-3x^2 - 3xh - h^2 + 24x + 12h + 30)}{h}$
$\frac{P(x+h) - P(x)}{h} = -3x^2 - 3xh - h^2 + 24x + 12h + 30$

Take the limit as $h \to 0$:
$P'(x) = \lim_{h \to 0} (-3x^2 - 3xh - h^2 + 24x + 12h + 30)$
$P'(x) = -3x^2 + 24x + 30$

Now, evaluate $P'(x)$ at $x=5$ (representing 5 thousand units):
$P'(5) = -3(5)^2 + 24(5) + 30$
$P'(5) = -3(25) + 120 + 30$
$P'(5) = -75 + 120 + 30$
$P'(5) = 45 + 30$
$P'(5) = 75$

**Interpretation:** The instantaneous rate of change of profit when selling 5 thousand units is 75. Since profit is in thousands of dollars, this means that at the point of selling 5 thousand units, the profit is increasing at a rate of $75,000 per thousand units sold (or more precisely, for each infinitesimal increase in units around 5,000, the profit increases by approximately $75).

**Question 3 (Connection to Course Outcomes):**
How does understanding instantaneous rates of change help us in linearizing functions, as mentioned in CO1?

**Answer:**
Linearizing a function at a point means approximating its behavior near that point using a straight line. The best straight-line approximation of a function $f(x)$ at a point $x=a$ is its tangent line at that point. The slope of this tangent line is precisely the instantaneous rate of change of the function at $x=a$, which is given by the derivative $f'(a)$. The equation of the tangent line is $y - f(a) = f'(a)(x-a)$, or $y = f(a) + f'(a)(x-a)$. This linear approximation is very useful because linear functions are much easier to work with than many complex non-linear functions. By using the instantaneous rate of change (the derivative), we can construct this linear model, which is a fundamental technique in calculus and its applications.
