---
title: "Derivation of differential equation for calculating the deflection of beams – Macaulay’s method"
subject: "MECHANICS OF SOLIDS"
module: "Module 3: Theory of simple bending, assumptions and limitations"
branch: "Civil Engineering"
semester: 2
topicId: "68b54566d74ec52cc0912f74"
status: "completed"
scrapedAt: "2026-05-20T18:37:28.330Z"
---
## MECHANICS OF SOLIDS - MODULE 3: THEORY OF SIMPLE BENDING

### Topic: Derivation of Differential Equation for Deflection of Beams – Macaulay’s Method

**(CO1: Recall fundamental terms; CO2: Explain behavior under loads; CO3: Apply principles to calculate deflection)**

Welcome, everyone! Today, we're diving into a crucial aspect of understanding how beams behave under load: **deflection**. We know that when a beam is subjected to forces, it bends. This bending, or deflection, is not just a curiosity; it's a critical design parameter. Too much deflection can lead to structural failure, aesthetic issues, or functional problems (imagine a perfectly flat floor becoming a saggy mess!).

In Module 3, we've already touched upon the theory of simple bending, its assumptions, and limitations. We established the fundamental relationship between bending moment ($M$), material properties (Young's Modulus, $E$), and the beam's geometry (Moment of Inertia, $I$) with the curvature of the beam. If you recall, the bending stress ($\sigma$) is given by $\sigma = \frac{My}{I}$, and the bending moment is related to the curvature ($\frac{1}{R}$) by $M = \frac{EI}{R}$.

Now, the question is, how do we quantify this bending? How do we find the actual shape of the deformed beam? This is where we need to derive the **differential equation for the deflection of beams**. This equation will be our powerful tool to calculate the deflection at any point along the beam.

### From Curvature to Deflection: The Core Idea

Let's visualize a beam. When it deflects, it forms a curve. We can represent this curve mathematically. Think of it like drawing a smooth, wavy line on a piece of paper. The shape of this line tells us how much the beam has deflected at each point.

In bending theory, we established that the curvature ($\frac{1}{R}$) of the deflected beam is directly proportional to the bending moment ($M$) and inversely proportional to the flexural rigidity ($EI$).
So, we have:
$$ \frac{1}{R} = \frac{M}{EI} $$

Now, a key connection we need to make is between curvature and the derivatives of the deflection curve. If we consider the deflected shape of the beam, let $y$ represent the vertical deflection at a horizontal distance $x$ from one end. The slope of the deflected curve at any point is given by $\frac{dy}{dx}$. The curvature of a curve $y = f(x)$ is given by the second derivative, $\frac{d^2y}{dx^2}$, for small deflections. This is a very important approximation we make in the theory of simple bending: **we assume that the deflections are small compared to the dimensions of the beam.** This allows us to simplify the curvature formula.

For a curve with small slopes, the curvature $\frac{1}{R}$ can be approximated as:
$$ \frac{1}{R} \approx \frac{d^2y}{dx^2} $$

This is a vital simplification! It allows us to equate our bending moment relationship with the geometrical property of the curve.

### The Fundamental Differential Equation of Deflection

By substituting the approximate curvature into our bending moment equation, we get the fundamental differential equation for the deflection of beams:

$$ EI \frac{d^2y}{dx^2} = M(x) $$

Here:
*   $E$ is the Young's Modulus of the beam material (a measure of its stiffness). Think of it as how resistant the material is to stretching or compressing. A high $E$ means a stiffer material.
*   $I$ is the Moment of Inertia of the beam's cross-section about the neutral axis (a measure of its resistance to bending based on its shape). A larger $I$ means it's harder to bend the beam for the same material.
*   $EI$ is the **flexural rigidity**, the product of $E$ and $I$. This is what truly dictates how much a beam will resist bending.
*   $y$ is the deflection of the beam at a distance $x$ from the origin.
*   $M(x)$ is the bending moment at the section $x$. This $M(x)$ is not a constant; it varies along the length of the beam depending on the applied loads and support conditions.

**Remember this:** This equation, $EI \frac{d^2y}{dx^2} = M(x)$, is the cornerstone for all deflection calculations in beams under simple bending. It directly links the internal bending moment to the beam's elastic properties and its deformed shape. This ties directly into **CO3**, where we learn to apply principles to calculate deflection.

### Solving the Differential Equation: The Challenge and Macaulay’s Method

Now, we have this powerful equation, but how do we actually *solve* it to find $y(x)$? We need to integrate this equation twice with respect to $x$.

Integrating once gives us the slope:
$$ EI \frac{dy}{dx} = \int M(x) dx + C_1 $$
where $C_1$ is the first constant of integration.

Integrating again gives us the deflection:
$$ EI y = \int \left( \int M(x) dx \right) dx + C_1 x + C_2 $$
where $C_2$ is the second constant of integration.

The difficulty arises because the bending moment $M(x)$ often changes abruptly due to concentrated loads or point supports. Representing $M(x)$ using standard mathematical functions (like polynomials) that can be easily integrated can become very cumbersome, especially for beams with multiple concentrated loads. We would have to break the beam into several segments, derive the bending moment equation for each segment, integrate, and then match constants of integration at the boundaries. This can get *very* messy, *very* quickly. Think of trying to describe a journey with many stops and starts using just one continuous, smooth equation – it’s difficult!

This is where **Macaulay's Method** comes in as a brilliant solution. It's a technique designed to handle these discontinuities gracefully, allowing us to write a single bending moment equation for the entire beam, even with concentrated loads.

### Macaulay’s Method: The Magic of Singularity Functions

Developed by William Henry Macaulay, this method uses what are often called "singularity functions" or "Macaulay brackets" to represent the bending moment $M(x)$ in a single, continuous equation. The key idea is to use bracket notation, $\langle x-a \rangle^n$, which is defined as:

$$ \langle x-a \rangle^n = \begin{cases} (x-a)^n & \text{if } x \ge a \\ 0 & \text{if } x < a \end{cases} $$
for $n \ge 0$.

Why is this so useful? Let's consider how a concentrated load $P$ at a distance $a$ from the origin affects the bending moment.
*   For any section $x < a$, the load $P$ is not yet acting, so its contribution to the bending moment is zero.
*   For any section $x > a$, the load $P$ creates a bending moment $P(x-a)$ (assuming the load acts downwards and we're measuring bending moment that causes tension at the bottom).

This behavior is perfectly captured by the Macaulay bracket: $P \langle x-a \rangle^1$. When $x < a$, $\langle x-a \rangle^1 = 0$, and when $x > a$, $\langle x-a \rangle^1 = (x-a)$, giving us the correct bending moment contribution.

**How to Apply Macaulay's Method for Deflection:**

The process generally involves these steps:

1.  **Establish a Coordinate System:** Choose an origin (usually at the left end of the beam) and the positive direction for $x$ and $y$ (usually upwards is positive deflection). This is crucial for consistency.
2.  **Determine Reactions:** Calculate the support reactions using static equilibrium equations. These reactions are treated as external forces acting on the beam.
3.  **Write the Bending Moment Equation $M(x)$:** This is the heart of Macaulay's method. You write a *single* equation for the bending moment at any section $x$ from the origin.
    *   Start from one end (usually the left).
    *   Include the effect of each load and support reaction as it is encountered from left to right.
    *   For a force $F$ acting downwards at a distance $a$ from the origin, its contribution to the bending moment at section $x$ is $-F \langle x-a \rangle^1$. (The negative sign is because a downward force typically causes a sagging moment, which we might consider negative, or we define our moment convention accordingly. If we take $M(x)$ to be the moment tending to cause tension at the bottom, a downward force to the left of $x$ will cause a positive moment, so it would be $+F \langle x-a \rangle^1$. Let's stick to the convention where $M(x)$ is the sagging moment.) Let's be precise: the moment at section $x$ due to a downward force $P$ at distance $a$ ($a<x$) is $P(x-a)$. So the contribution is $P \langle x-a \rangle^1$.
    *   For a moment $M_0$ applied at distance $a$, its contribution is $M_0 \langle x-a \rangle^0$. (Remember $\langle x-a \rangle^0$ is 1 if $x \ge a$ and 0 if $x < a$).
    *   Crucially, **do not include terms that occur to the left of the section $x$**. The Macaulay brackets handle this automatically.
    *   The bending moment $M(x)$ will be the sum of contributions from reactions, applied loads, and applied moments.

4.  **Integrate the Differential Equation:** Substitute the $M(x)$ equation into $EI \frac{d^2y}{dx^2} = M(x)$.
    *   Integrate once to get $EI \frac{dy}{dx} = \int M(x) dx + C_1$. When integrating terms like $\langle x-a \rangle^n$, the rule is $\int \langle x-a \rangle^n dx = \frac{\langle x-a \rangle^{n+1}}{n+1}$.
    *   Integrate a second time to get $EI y = \int \left( \int M(x) dx \right) dx + C_1 x + C_2$.

5.  **Determine Constants of Integration ($C_1$ and $C_2$):** This is where we apply the boundary conditions or continuity conditions of the beam.
    *   **Boundary Conditions:** These are conditions at the supports. For example:
        *   At a simply supported end ($x=0$), $y=0$.
        *   At a fixed support ($x=0$), $y=0$ and $\frac{dy}{dx}=0$.
    *   **Continuity Conditions:** If we have a beam with an internal hinge, the bending moment at the hinge is zero. If we have a point of discontinuity in loading, we need to ensure continuity of slope and deflection if no internal hinge exists.
    *   You will typically need two conditions to solve for the two unknowns, $C_1$ and $C_2$.

6.  **Obtain the Deflection Equation:** Once $C_1$ and $C_2$ are found, substitute them back into the equation for $EI y$ to get the final deflection equation $y(x)$ for the entire beam.

**Example Illustration (Conceptual):**

Imagine a simply supported beam of length $L$ with a concentrated load $P$ at its center ($x=L/2$).
Let's set up the origin at the left support.
The reactions at both supports will be $P/2$.

The bending moment equation would look something like this:
$M(x) = \frac{P}{2} x - P \langle x - L/2 \rangle^1$

*   For $x < L/2$, $M(x) = \frac{P}{2} x$.
*   For $x > L/2$, $M(x) = \frac{P}{2} x - P (x - L/2) = \frac{P}{2} x - Px + \frac{PL}{2} = \frac{PL}{2} - \frac{P}{2} x$. This is correct; it's the moment diagram for a simply supported beam with a central load.

Now, we integrate twice:
$EI \frac{d^2y}{dx^2} = \frac{P}{2} x - P \langle x - L/2 \rangle^1$

$EI \frac{dy}{dx} = \frac{P}{2} \frac{x^2}{2} - P \frac{\langle x - L/2 \rangle^2}{2} + C_1$
$EI \frac{dy}{dx} = \frac{P x^2}{4} - \frac{P}{2} \langle x - L/2 \rangle^2 + C_1$

$EI y = \frac{P x^3}{12} - \frac{P}{2} \frac{\langle x - L/2 \rangle^3}{3} + C_1 x + C_2$
$EI y = \frac{P x^3}{12} - \frac{P}{6} \langle x - L/2 \rangle^3 + C_1 x + C_2$

Now, the boundary conditions for a simply supported beam at $x=0$ and $x=L$:
1.  At $x=0$, $y=0$.
    Substituting into the $EIy$ equation:
    $EI(0) = \frac{P(0)^3}{12} - \frac{P}{6} \langle 0 - L/2 \rangle^3 + C_1(0) + C_2$
    $0 = 0 - 0 + 0 + C_2 \implies C_2 = 0$.

2.  At $x=L$, $y=0$.
    Substituting into the $EIy$ equation with $C_2=0$:
    $EI(0) = \frac{P L^3}{12} - \frac{P}{6} \langle L - L/2 \rangle^3 + C_1 L + 0$
    $0 = \frac{P L^3}{12} - \frac{P}{6} \langle L/2 \rangle^3 + C_1 L$
    $0 = \frac{P L^3}{12} - \frac{P}{6} (\frac{L^3}{8}) + C_1 L$
    $0 = \frac{P L^3}{12} - \frac{P L^3}{48} + C_1 L$
    $0 = \frac{4 P L^3 - P L^3}{48} + C_1 L$
    $0 = \frac{3 P L^3}{48} + C_1 L$
    $0 = \frac{P L^3}{16} + C_1 L$
    $C_1 = - \frac{P L^2}{16}$

So the final deflection equation is:
$EI y = \frac{P x^3}{12} - \frac{P}{6} \langle x - L/2 \rangle^3 - \frac{P L^2}{16} x$

This equation allows us to find the deflection $y$ at any point $x$ along the beam. If we want the maximum deflection, which occurs at $x=L/2$, we substitute $x=L/2$:
$EI y_{max} = \frac{P (L/2)^3}{12} - \frac{P}{6} \langle L/2 - L/2 \rangle^3 - \frac{P L^2}{16} (L/2)$
$EI y_{max} = \frac{P L^3}{96} - \frac{P}{6} (0)^3 - \frac{P L^3}{32}$
$EI y_{max} = \frac{P L^3}{96} - \frac{3 P L^3}{96} = - \frac{2 P L^3}{96} = - \frac{P L^3}{48}$

So, $y_{max} = -\frac{PL^3}{48EI}$. The negative sign indicates downward deflection. This result is consistent with what we find using other methods, and it's a very common formula you'll see in tables for beam deflections.

**Relating to Course Outcomes:**
*   **CO1 & CO2:** By understanding the bending moment and its relation to curvature, and then to the deflection curve, we're recalling fundamental terms and explaining the beam's behavior.
*   **CO3:** Macaulay's method is a direct application of principles to calculate deflection. We are using the derived differential equation and integration techniques.
*   **CO6:** Ultimately, calculating deflection is part of analyzing a structural member to ensure it can carry loads safely, which relates to proportioning cross-sections.

### Advantages of Macaulay's Method

Why do we prefer Macaulay's method for certain problems?
*   **Unified Equation:** It provides a single equation for the bending moment, slope, and deflection across the entire beam, regardless of the number of concentrated loads. This is a huge simplification compared to segmenting the beam. This directly addresses the complexity of applying principles (CO3).
*   **Ease of Integration:** The Macaulay brackets are easy to integrate using simple power rules.
*   **Systematic Approach:** It offers a systematic and procedural way to solve deflection problems, reducing errors.

### Limitations of Macaulay's Method

Like any method, it's not universally applicable.
*   **Simple Bending:** It's derived from the theory of simple bending, meaning it assumes that shear deformation is negligible compared to bending deformation. This is generally true for long, slender beams but can be less accurate for short, deep beams. This relates back to the assumptions of Module 3.
*   **Linear Elastic Material:** The method assumes the material behaves linearly elastically, meaning stress is proportional to strain and the material returns to its original shape when the load is removed. This is a standard assumption in mechanics of solids.
*   **Concentrated Loads and Moments:** While excellent for concentrated loads and moments, it's less direct for uniformly distributed loads (UDLs) or varying loads. However, UDLs can be represented using the Macaulay bracket by considering their start and end points. For example, a UDL of intensity $w$ over a length $L$ starting at $x=a$ and ending at $x=b$ can be expressed as $w\langle x-a \rangle^0 - w\langle x-b \rangle^0$. This requires careful handling. Most textbooks, like Bansal or Punmia, discuss how to handle UDLs within this framework.
*   **Not for Complex Shapes:** For beams with rapidly changing cross-sections or very complex loading, other methods like the Moment-Area method or numerical methods might be more efficient.
