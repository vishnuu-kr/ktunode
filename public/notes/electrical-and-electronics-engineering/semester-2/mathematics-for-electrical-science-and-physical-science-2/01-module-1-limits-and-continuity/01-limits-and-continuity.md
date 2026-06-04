---
title: "Limits and continuity"
subject: "MATHEMATICS FOR ELECTRICAL SCIENCE AND PHYSICAL SCIENCE - 2"
module: "Module 1: Limits and continuity"
branch: "Electrical and Electronics Engineering"
semester: 2
topicId: "68bd213f9ece2bdd875f9824"
status: "completed"
scrapedAt: "2026-05-23T16:07:57.793Z"
---
# MATHEMATICS FOR ELECTRICAL SCIENCE AND PHYSICAL SCIENCE - 2

## Module 1: Limits and Continuity

### Topic: Limits and Continuity

Welcome to our journey into the fascinating world of calculus! In this first module, we're going to lay the groundwork for everything that follows by exploring two fundamental concepts: **limits** and **continuity**. These ideas are absolutely crucial, not just for abstract mathematics, but for understanding how physical systems behave and how engineers design everything from electrical circuits to bridges.

Think about it: when we analyze a physical phenomenon, we often want to know what happens to a system as some parameter gets *infinitesimally close* to a certain value. Or, we want to understand if a system's behavior changes smoothly or abruptly. That's where limits and continuity come in. They give us the tools to talk precisely about "approaching" and "smoothness."

Our goal here is to build a strong conceptual understanding. We'll see how these ideas connect to the course outcomes, particularly in how we analyze the behavior of functions, which is the bedrock of many engineering problems.

---

### Understanding Limits: Getting Close to Something

Imagine you're walking towards a door. You take one step, then half a step, then a quarter of a step, and so on. You're getting closer and closer to the door, but you never *quite* touch it. Limits in mathematics are about this idea of "getting arbitrarily close" to a value.

**What is a Limit?**

Formally, we say that the **limit of a function $f(x)$ as $x$ approaches a value $c$ is $L$**, written as:

$$ \lim_{x \to c} f(x) = L $$

This means that as $x$ gets *really, really close* to $c$ (from either side, but not equal to $c$), the value of $f(x)$ gets *really, really close* to $L$.

**Analogy: The Speedometer in Your Car**

Let's make this more relatable. Think about your car's speedometer. If you're driving along a road that has a speed limit of, say, 60 km/h, and you're accelerating, your speedometer reading will change. Let's say at a specific moment in time, you're precisely at the speed limit, 60 km/h.

Now, suppose we want to know what your speed is *approaching* as you reach that point. Even if you momentarily went slightly over 60 and then back down, or were just shy of it, the speedometer reading is *approaching* 60. The limit is concerned with the value the speedometer *tends towards* as you get infinitesimally close to that exact moment, not necessarily the exact value *at* that moment (though often they are the same!).

**Why not just plug in the value?**

You might ask, "Why not just evaluate $f(c)$?" Well, sometimes $f(c)$ might be undefined, or it might not be the value the function is "heading towards."

Consider a function like:

$$ f(x) = \frac{x^2 - 4}{x - 2} $$

If we try to plug in $x=2$, we get $\frac{0}{0}$, which is an indeterminate form. It doesn't tell us what's happening *near* $x=2$.

However, we can simplify this function for $x \neq 2$:

$$ f(x) = \frac{(x-2)(x+2)}{x-2} = x+2 \quad (\text{for } x \neq 2) $$

Now, as $x$ gets close to 2 (say, $x=1.9$, $x=1.99$, $x=2.01$, $x=2.001$), what value does $f(x)$ (or $x+2$) get close to? It gets close to $2+2 = 4$.

So, even though $f(2)$ is undefined, the **limit** of $f(x)$ as $x$ approaches 2 is 4:

$$ \lim_{x \to 2} \frac{x^2 - 4}{x - 2} = 4 $$

This is a core concept that will directly help us in **CO1**, where we analyze function behavior. Understanding what a function approaches is key to understanding its characteristics.

**Properties of Limits**

Just like with basic arithmetic, limits have rules that make calculations easier. If $\lim_{x \to c} f(x) = L$ and $\lim_{x \to c} g(x) = M$, then:

*   **Sum/Difference:** $\lim_{x \to c} [f(x) \pm g(x)] = L \pm M$
*   **Product:** $\lim_{x \to c} [f(x) \cdot g(x)] = L \cdot M$
*   **Quotient:** $\lim_{x \to c} \frac{f(x)}{g(x)} = \frac{L}{M}$, provided $M \neq 0$.
*   **Constant Multiple:** $\lim_{x \to c} [k \cdot f(x)] = k \cdot L$
*   **Power:** $\lim_{x \to c} [f(x)]^n = L^n$

These properties are extensively covered in chapters like Chapter 1 of Anton's Calculus, 12th Edition, and are essential for calculating limits efficiently. They're the "algebra" of limits.

**One-Sided Limits: Approaching from One Direction**

Sometimes, a function might behave differently as you approach a point from the left versus from the right. This leads us to **one-sided limits**.

*   The **right-hand limit** (as $x$ approaches $c$ from values greater than $c$) is denoted as $\lim_{x \to c^+} f(x)$.
*   The **left-hand limit** (as $x$ approaches $c$ from values less than $c$) is denoted as $\lim_{x \to c^-} f(x)$.

For the overall limit $\lim_{x \to c} f(x)$ to exist, the left-hand limit and the right-hand limit must exist and be equal:

$$ \lim_{x \to c} f(x) = L \quad \iff \quad \lim_{x \to c^-} f(x) = L \text{ and } \lim_{x \to c^+} f(x) = L $$

**Example: The Floor Function**

Consider the floor function, $f(x) = \lfloor x \rfloor$, which gives the greatest integer less than or equal to $x$. What is the limit as $x$ approaches 3?

*   If we approach 3 from the left (e.g., $x = 2.9, 2.99, 2.999$), $\lfloor x \rfloor$ will be 2. So, $\lim_{x \to 3^-} \lfloor x \rfloor = 2$.
*   If we approach 3 from the right (e.g., $x = 3.1, 3.01, 3.001$), $\lfloor x \rfloor$ will be 3. So, $\lim_{x \to 3^+} \lfloor x \rfloor = 3$.

Since the left-hand limit (2) is not equal to the right-hand limit (3), the overall limit $\lim_{x \to 3} \lfloor x \rfloor$ **does not exist**. This concept of different behaviors from different sides is crucial when analyzing piecewise functions or functions with sharp turns, which is relevant for CO1.

---

### Continuity: No Jumps, No Gaps, No Holes

Now that we understand limits, we can talk about **continuity**. Intuitively, a continuous function is one whose graph can be drawn without lifting your pen from the paper. There are no sudden jumps, breaks, or holes.

**Definition of Continuity at a Point**

A function $f$ is **continuous at a point $c$** if and only if all three of the following conditions are met:

1.  $f(c)$ is defined. (The function actually exists at that point).
2.  $\lim_{x \to c} f(x)$ exists. (The function approaches a specific value as $x$ gets close to $c$).
3.  $\lim_{x \to c} f(x) = f(c)$. (The value the function approaches is the actual value at the point).

If any one of these conditions fails, the function is said to be **discontinuous** at $c$.

**Why is Continuity Important?**

Continuity is vital in many scientific and engineering applications. It implies that small changes in the input lead to small changes in the output. This is the essence of stability and predictability in many systems.

*   **Electrical Science:** In analyzing circuits, if a voltage or current is a continuous function of time, it means there are no sudden surges or drops, which is desirable for most components. Discontinuities could indicate issues like circuit breakers tripping or sudden power fluctuations.
*   **Physical Science:** In physics, quantities like position, velocity, and temperature are often modeled as continuous functions. If a physical quantity were discontinuous, it would mean an instantaneous, infinite change, which is rarely observed in reality (though approximations can sometimes lead to apparent discontinuities). This relates to CO1 where understanding the behavior of functions helps analyze physical phenomena.

**Types of Discontinuities**

When a function isn't continuous at a point, it's discontinuous. There are a few common ways this can happen:

1.  **Removable Discontinuity:** This occurs when $\lim_{x \to c} f(x)$ exists, but either $f(c)$ is undefined, or $\lim_{x \to c} f(x) \neq f(c)$. It's "removable" because we could redefine $f(c)$ to be equal to the limit, and the function would become continuous at $c$.
    *   *Example:* Our earlier function $f(x) = \frac{x^2 - 4}{x - 2}$ had a removable discontinuity at $x=2$ because $f(2)$ was undefined, but the limit was 4. We could define $f(2)=4$ to make it continuous.

2.  **Jump Discontinuity:** This happens when the left-hand limit and the right-hand limit exist but are not equal: $\lim_{x \to c^-} f(x) \neq \lim_{x \to c^+} f(x)$.
    *   *Example:* The floor function $\lfloor x \rfloor$ at $x=3$ is a classic example of a jump discontinuity.

3.  **Infinite Discontinuity (Asymptotic Discontinuity):** This occurs when at least one of the one-sided limits is infinite. The graph of the function will have a vertical asymptote at $x=c$.
    *   *Example:* Consider $f(x) = \frac{1}{x^2}$. As $x \to 0$, $f(x) \to \infty$. So, $\lim_{x \to 0} \frac{1}{x^2} = \infty$. This is an infinite discontinuity at $x=0$.

**Continuity on an Interval**

A function is **continuous on an open interval $(a, b)$** if it is continuous at every point in that interval. For a **closed interval $[a, b]$**, the function must be continuous on $(a, b)$ and satisfy:

$$ \lim_{x \to a^+} f(x) = f(a) $$
$$ \lim_{x \to b^-} f(x) = f(b) $$

This means we consider the one-sided limits at the endpoints of the closed interval.

**The Power of Continuous Functions: Intermediate Value Theorem (IVT) and Extreme Value Theorem (EVT)**

Continuous functions have some incredibly powerful properties that are fundamental in calculus and its applications.

*   **Intermediate Value Theorem (IVT):** If a function $f$ is continuous on a closed interval $[a, b]$, and $N$ is any number between $f(a)$ and $f(b)$ (i.e., $f(a) < N < f(b)$ or $f(b) < N < f(a)$), then there exists at least one number $c$ in the interval $(a, b)$ such that $f(c) = N$.

    *   *Relatable Example:* Imagine you're climbing a hill. If the path is continuous (no sudden impossibilities), and you start at an altitude of 100 meters and end at 500 meters, then at some point during your climb, you must have been at an altitude of 300 meters. The IVT guarantees this for any continuous function.
    *   *Engineering Application (CO1):* This theorem is incredibly useful for finding roots of equations. If you want to find a value $c$ such that $f(c)=0$, and you can find an interval $[a, b]$ where $f(a)$ and $f(b)$ have opposite signs (one positive, one negative), then the IVT guarantees there's a root $c$ in between. This is the basis for numerical methods like the bisection method, used extensively in solving engineering problems where analytical solutions are impossible.

*   **Extreme Value Theorem (EVT):** If a function $f$ is continuous on a closed interval $[a, b]$, then $f$ must attain an absolute maximum value and an absolute minimum value on that interval. That is, there exist numbers $c_1$ and $c_2$ in $[a, b]$ such that $f(c_1) \le f(x) \le f(c_2)$ for all $x$ in $[a, b]$.

    *   *Relatable Example:* If you drive a car along a road between two points, and your speed is a continuous function of time, then you will reach a maximum speed and a minimum speed during that journey.
    *   *Engineering Application (CO1):* This theorem is the foundation for optimization problems. When we want to find the maximum or minimum value of a quantity (e.g., maximum efficiency of a power converter, minimum stress on a beam), we often rely on the function representing that quantity being continuous over a relevant interval. If it is, we know these extreme values *must* exist, and subsequent calculus techniques (like finding critical points) help us locate them.

**Continuity of Common Functions**

Many functions you'll encounter are continuous everywhere they are defined:

*   **Polynomials:** e.g., $f(x) = 3x^2 - 5x + 2$ are continuous everywhere.
*   **Rational Functions:** e.g., $f(x) = \frac{P(x)}{Q(x)}$ where $P(x)$ and $Q(x)$ are polynomials, are continuous everywhere except where the denominator $Q(x)=0$.
*   **Trigonometric Functions:** $\sin(x)$, $\cos(x)$ are continuous everywhere. $\tan(x)$, $\sec(x)$, $\csc(x)$, $\cot(x)$ are continuous everywhere except where their denominators are zero (e.g., $\tan(x)$ is discontinuous at $x = \frac{\pi}{2} + n\pi$).
*   **Exponential Functions:** $e^x$, $a^x$ are continuous everywhere.
*   **Logarithmic Functions:** $\ln(x)$, $\log_a(x)$ are continuous on their domains (i.e., for $x>0$).

When you combine functions using addition, subtraction, multiplication, division, or composition, the resulting function is usually continuous where it's defined. For instance, if $f$ and $g$ are continuous, then $f+g$, $f-g$, $f \cdot g$, and $f/g$ (where $g \neq 0$) are continuous. This is like building blocks – you start with simple continuous functions and build more complex ones.

**The Epsilon-Delta Definition (A Glimpse)**

While we've focused on the intuitive and algebraic definitions, it's worth noting that the rigorous mathematical definition of a limit, known as the **epsilon-delta ($\epsilon-\delta$) definition**, underpins everything. It states:

$\lim_{x \to c} f(x) = L$ if for every $\epsilon > 0$, there exists a $\delta > 0$ such that if $0 < |x - c| < \delta$, then $|f(x) - L| < \epsilon$.

This might seem abstract, but it's the ultimate precise way of saying "arbitrarily close." It guarantees that no matter how small a tolerance ($\epsilon$) you set for the output $f(x)$ around $L$, you can always find an interval around $c$ (defined by $\delta$) such that all $x$ values in that interval (except possibly $c$ itself) produce $f(x)$ values within that tolerance. This definition is foundational for proving theorems about limits and continuity, as found in theoretical sections of textbooks like Anton.

---

### Connecting to Course Outcomes

Let's explicitly see how this module directly supports our course objectives:

*   **CO1: Compute the partial and total derivatives and maxima and minima of multivariable functions and to apply in engineering problems.**
    *   **Connection:** Limits are the bedrock of derivatives. The definition of a derivative itself is a limit: $f'(x) = \lim_{h \to 0} \frac{f(x+h) - f(x)}{h}$. Understanding limits is absolutely essential to calculating derivatives, which are then used to find rates of change, slopes, and crucially, maxima and minima (local extrema often occur where the derivative is zero or undefined, and continuity is usually a prerequisite for this analysis). Our discussion of IVT and EVT directly relates to finding maxima and minima.

*   **CO2: Understand theoretical idea of multiple integrals and to apply them to find areas and volumes of geometrical shapes.**
    *   **Connection:** While this module focuses on single-variable calculus, the concept of "approaching" and "summing up infinitesimal pieces" that defines limits is extended to multiple integrals. Riemann sums, which are used to define definite integrals (and subsequently multiple integrals), are essentially sums of function values over increasingly smaller intervals. The idea of a limit as the interval size goes to zero is present.

*   **CO3: Compute the derivatives and line integrals of vector functions and to learn their applications.**
    *   **Connection:** Similar to CO1, the definition of the derivative of a vector function also relies on limits. Line integrals also involve summing infinitesimal quantities along a curve, and the concept of approaching a limit as the "pieces" of the curve become infinitesimally small is inherent.

*   **CO4: Apply the concepts of surface and volume integrals and to learn their inter-relations and applications.**
    *   **Connection:** Again, the foundational idea of limits as the basis for integration (approximating areas/volumes with sums of infinitesimal pieces) carries through to surface and volume integrals.

In essence, Module 1 provides the foundational language and analytical tools (limits and continuity) that are absolutely indispensable for understanding and applying the concepts in all subsequent modules. Without a firm grasp of limits and continuity, the ability to compute derivatives, integrals, and analyze function behavior for CO1, CO3, and CO4 would be severely compromised.

---

### Key Takeaways for Exams and Understanding

*   **Limit is about "approaching":** It's the value a function *tends towards*, not necessarily the value *at* the point.
*   **Continuity is about "smoothness":** No breaks, gaps, or jumps. A function is continuous at $c$ if $f(c)$ is defined, the limit exists, and they are equal.
*   **One-sided limits matter:** If they differ, the overall limit doesn't exist.
*   **Removable discontinuities can be "fixed":** By redefining the function at a single point.
*   **IVT and EVT are powerful consequences of continuity:** They guarantee the existence of values (intermediate values, maximum/minimum values) and are crucial for applications like root-finding and optimization.
*   **Know the continuity of basic functions:** Polynomials, rationals (except at zeros of denominator), trig, exp, log.

---

### Sample Questions with Answers

**Q1. Conceptual Understanding: What is the fundamental difference between a limit and the value of a function at a point?**

**Answer:** The limit of a function $f(x)$ as $x$ approaches $c$ ($\lim_{x \to c} f(x)$) describes the behavior of the function *near* the point $c$. It's the value that $f(x)$ gets arbitrarily close to as $x$ gets arbitrarily close to $c$. On the other hand, the value of the function at $c$, denoted $f(c)$, is the actual output of the function when the input is exactly $c$. The limit might exist even if $f(c)$ is undefined (a removable discontinuity), or the limit might exist but be different from $f(c)$. For continuity, they must be equal.

**Q2. Calculation Practice: Evaluate the following limit, if it exists:**

$$ \lim_{x \to 1} \frac{x^3 - 1}{x - 1} $$

**Answer:**
If we try to substitute $x=1$, we get $\frac{1^3 - 1}{1 - 1} = \frac{0}{0}$, which is an indeterminate form. This suggests we need to simplify the expression.
We can factor the numerator using the difference of cubes formula: $a^3 - b^3 = (a-b)(a^2 + ab + b^2)$.
So, $x^3 - 1 = (x-1)(x^2 + x + 1)$.

Now, we can rewrite the limit:
$$ \lim_{x \to 1} \frac{(x-1)(x^2 + x + 1)}{x - 1} $$
Since we are considering the limit as $x \to 1$, $x$ is close to 1 but not equal to 1. Therefore, $x-1 \neq 0$, and we can cancel the $(x-1)$ term from the numerator and denominator:
$$ \lim_{x \to 1} (x^2 + x + 1) $$
Now, we can substitute $x=1$ into the simplified expression because it's a polynomial and continuous everywhere:
$$ 1^2 + 1 + 1 = 1 + 1 + 1 = 3 $$
Therefore, the limit is 3.

**Q3. Conceptual Application: A sensor measures the temperature of a chemical reaction. The temperature is modeled by the function $T(t) = 20 + 5t - t^2$ for $0 \le t \le 5$ seconds. Is the temperature function continuous on the interval $[0, 5]$? Explain why or why not, and discuss its physical significance.**

**Answer:**
The function $T(t) = 20 + 5t - t^2$ is a polynomial in $t$. Polynomials are known to be continuous everywhere. Therefore, $T(t)$ is continuous for all real numbers, and specifically, it is continuous on the closed interval $[0, 5]$.

**Physical Significance:** The continuity of the temperature function $T(t)$ on $[0, 5]$ means that the temperature of the chemical reaction changes smoothly over time. There are no sudden, instantaneous jumps or drops in temperature. This is physically realistic for most chemical processes; temperature changes gradually as heat is absorbed or released. This smoothness implies that the system is stable and predictable within this time frame, which is crucial for controlling and understanding the reaction's progress. If it were discontinuous, it would imply an instantaneous, infinite rate of temperature change, which is not physically observed. This relates to CO1 by showing how function properties describe physical phenomena.

**Q4. Understanding Discontinuities: Consider the function $f(x) = \begin{cases} x+2 & \text{if } x < 0 \\ 2 & \text{if } x = 0 \\ x^2+2 & \text{if } x > 0 \end{cases}$. Is this function continuous at $x=0$?**

**Answer:**
To check for continuity at $x=0$, we need to verify the three conditions:
1.  **Is $f(0)$ defined?** Yes, $f(0) = 2$.
2.  **Does $\lim_{x \to 0} f(x)$ exist?** We need to check the left-hand and right-hand limits.
    *   **Left-hand limit:** As $x \to 0^-$, $x < 0$, so we use $f(x) = x+2$.
        $$ \lim_{x \to 0^-} f(x) = \lim_{x \to 0^-} (x+2) = 0 + 2 = 2 $$
    *   **Right-hand limit:** As $x \to 0^+$, $x > 0$, so we use $f(x) = x^2+2$.
        $$ \lim_{x \to 0^+} f(x) = \lim_{x \to 0^+} (x^2+2) = 0^2 + 2 = 2 $$
    Since $\lim_{x \to 0^-} f(x) = 2$ and $\lim_{x \to 0^+} f(x) = 2$, the overall limit exists and $\lim_{x \to 0} f(x) = 2$.
3.  **Is $\lim_{x \to 0} f(x) = f(0)$?** Yes, we found $\lim_{x \to 0} f(x) = 2$ and $f(0) = 2$. So, $2 = 2$.

Since all three conditions are met, the function $f(x)$ is **continuous** at $x=0$. This is an example where the pieces of a piecewise function "meet" nicely at the point of transition.
