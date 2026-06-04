---
title: "Euler formulas"
subject: "MATHEMATICS FOR ELECTRICAL SCIENCE AND 
PHYSICAL  SCIENCE - 1"
module: "Module 4: Taylor series representation (without proof, assuming the possibility of power series expansion in appropriate domains)"
branch: "Civil Engineering"
semester: 1
topicId: "68b54565d74ec52cc09129ee"
status: "completed"
scrapedAt: "2026-05-20T18:31:10.111Z"
---
# Module 4: Taylor Series Representation

## Topic: Euler Formulas: Bridging the Gap Between Exponentials and Trigonometry

Welcome, everyone! Today, we're diving into a topic that's absolutely fundamental in electrical science and physical science: Euler's formulas. These aren't just fancy equations; they're the magic link that connects the seemingly different worlds of exponential functions and trigonometric functions. Think of them as the Rosetta Stone for understanding oscillatory behavior using the powerful language of complex exponentials.

We're operating within the framework of Taylor series, where we're exploring how functions can be represented as infinite polynomials. The beauty of Euler's formulas lies in how they emerge naturally from the Taylor series expansions of $e^x$, $\sin(x)$, and $\cos(x)$. We won't be proving these expansions rigorously here, as the course assumes we can work with power series in appropriate domains. However, understanding *that* they exist and *how* they relate is our primary goal.

### 1. Recalling Essential Taylor Series Expansions

Before we get to Euler's formulas, let's quickly refresh some key Taylor series we've likely encountered or will soon see in our textbooks like Kreyszig or Anton's Calculus. These are the building blocks.

*   **The Exponential Function:** The Taylor series expansion of $e^x$ around $x=0$ (the Maclaurin series) is:
    $e^x = 1 + x + \frac{x^2}{2!} + \frac{x^3}{3!} + \frac{x^4}{4!} + \cdots = \sum_{n=0}^{\infty} \frac{x^n}{n!}$

*   **The Cosine Function:** The Taylor series expansion of $\cos(x)$ around $x=0$ is:
    $\cos(x) = 1 - \frac{x^2}{2!} + \frac{x^4}{4!} - \frac{x^6}{6!} + \cdots = \sum_{n=0}^{\infty} \frac{(-1)^n x^{2n}}{(2n)!}$
    Notice the pattern: only even powers of $x$, and the signs alternate.

*   **The Sine Function:** The Taylor series expansion of $\sin(x)$ around $x=0$ is:
    $\sin(x) = x - \frac{x^3}{3!} + \frac{x^5}{5!} - \frac{x^7}{7!} + \cdots = \sum_{n=0}^{\infty} \frac{(-1)^n x^{2n+1}}{(2n+1)!}$
    Here, we have only odd powers of $x$, and the signs also alternate.

**Why are these important?** Think about it. If we can represent these fundamental functions as infinite polynomials, we can then manipulate them, integrate them, differentiate them, and analyze their behavior in ways that might be tricky with the original transcendental functions. This is the power of series representation, and it directly links to **CO4: Determine the Taylor series and evaluate Fourier series expansion...** by providing the foundation for understanding how complex functions are built from simpler polynomial terms.

### 2. The Birth of Euler's Formulas: Substituting into the Exponential

Now, let's introduce the star of the show: Euler's formulas. They arise when we substitute an *imaginary* number, $ix$, into the Taylor series for $e^x$. Remember, the imaginary unit $i$ is defined as $i^2 = -1$.

Let's take our $e^x$ series and replace every $x$ with $ix$:

$e^{ix} = 1 + (ix) + \frac{(ix)^2}{2!} + \frac{(ix)^3}{3!} + \frac{(ix)^4}{4!} + \frac{(ix)^5}{5!} + \cdots$

Now, let's carefully expand the powers of $ix$:
*   $(ix)^2 = i^2 x^2 = -x^2$
*   $(ix)^3 = i^3 x^3 = -i x^3$
*   $(ix)^4 = i^4 x^4 = (i^2)^2 x^4 = (-1)^2 x^4 = x^4$
*   $(ix)^5 = i^5 x^5 = i^4 \cdot i x^5 = i x^5$

And so on. The powers of $i$ cycle through $i, -1, -i, 1, i, -1, -i, 1, \ldots$.

Substituting these back into the series for $e^{ix}$:

$e^{ix} = 1 + ix - \frac{x^2}{2!} - \frac{ix^3}{3!} + \frac{x^4}{4!} + \frac{ix^5}{5!} - \frac{x^6}{6!} - \frac{ix^7}{7!} + \cdots$

This looks a bit jumbled, right? But here's where the magic happens. Let's group the terms that have an $i$ and those that don't:

$e^{ix} = \left(1 - \frac{x^2}{2!} + \frac{x^4}{4!} - \frac{x^6}{6!} + \cdots \right) + i \left(x - \frac{x^3}{3!} + \frac{x^5}{5!} - \frac{x^7}{7!} + \cdots \right)$

Now, take a good look at those two parenthesized series. Do they look familiar?

The first parenthesis is exactly the Taylor series for $\cos(x)$!
The second parenthesis is exactly the Taylor series for $\sin(x)$!

So, we arrive at the most famous of Euler's formulas:

**Euler's Formula:**
$e^{ix} = \cos(x) + i \sin(x)$

This is a profound result. It tells us that the complex exponential $e^{ix}$ is not some abstract entity, but is directly composed of the familiar cosine and sine waves. This is crucial for understanding signals and systems where we often use complex exponentials to represent sinusoidal signals, a direct link to **CO3: Compute Laplace transform and apply it to solve ODEs...** and even **CO2: Solve homogeneous and non-homogeneous linear differential equation with constant coefficients**, as complex exponentials are key in finding solutions to these equations.

### 3. The Other Euler Formulas: Unpacking the Relationship

From the fundamental formula $e^{ix} = \cos(x) + i \sin(x)$, we can derive other useful forms.

**a) Expressing Cosine and Sine in terms of Exponentials:**

We can use the property that $e^{-ix} = \cos(-x) + i \sin(-x)$. Since $\cos(-x) = \cos(x)$ (cosine is an even function) and $\sin(-x) = -\sin(x)$ (sine is an odd function), we have:

$e^{-ix} = \cos(x) - i \sin(x)$

Now we have a system of two equations:
1.  $e^{ix} = \cos(x) + i \sin(x)$
2.  $e^{-ix} = \cos(x) - i \sin(x)$

If we add these two equations:
$(e^{ix} + e^{-ix}) = 2 \cos(x)$
This gives us the formula for cosine:
$\cos(x) = \frac{e^{ix} + e^{-ix}}{2}$

If we subtract the second equation from the first:
$(e^{ix} - e^{-ix}) = 2i \sin(x)$
This gives us the formula for sine:
$\sin(x) = \frac{e^{ix} - e^{-ix}}{2i}$

These are incredibly useful! They allow us to convert trigonometric functions into combinations of complex exponentials, and vice versa. This is particularly helpful when dealing with integrals of trigonometric powers or in solving certain types of differential equations where it's easier to work with exponentials. It also strengthens the connection to **CO4** by showing alternative representations of trigonometric functions.

**b) Euler's Identity: The Most Beautiful Equation?**

What happens if we set $x = \pi$ in the main Euler formula, $e^{ix} = \cos(x) + i \sin(x)$?

$e^{i\pi} = \cos(\pi) + i \sin(\pi)$

We know that $\cos(\pi) = -1$ and $\sin(\pi) = 0$.
So, $e^{i\pi} = -1 + i(0)$
$e^{i\pi} = -1$

Rearranging this, we get:
$e^{i\pi} + 1 = 0$

This is Euler's Identity. It's often called the most beautiful equation in mathematics because it elegantly links five fundamental mathematical constants: $e$, $i$, $\pi$, $1$, and $0$, using the three basic arithmetic operations. It's a testament to the deep interconnectedness of mathematical concepts.

### 4. Visualizing Euler's Formula: The Unit Circle

So, what does $e^{ix} = \cos(x) + i \sin(x)$ actually *mean* visually? This is where the unit circle in the complex plane comes in handy.

Remember, a complex number $z = a + bi$ can be plotted as a point $(a, b)$ in the complex plane, where the horizontal axis is the real axis and the vertical axis is the imaginary axis.

For $e^{ix} = \cos(x) + i \sin(x)$:
*   The real part is $\cos(x)$.
*   The imaginary part is $\sin(x)$.

If we consider $x$ as an angle (in radians) measured counterclockwise from the positive real axis, then:
*   $\cos(x)$ is the x-coordinate of the point on the unit circle corresponding to angle $x$.
*   $\sin(x)$ is the y-coordinate of the point on the unit circle corresponding to angle $x$.

Therefore, the complex number $e^{ix}$ corresponds to the point $(\cos(x), \sin(x))$ on the unit circle. This means that $e^{ix}$ traces out the unit circle as $x$ varies. The value $x$ represents the angle in radians.

**Analogy:** Imagine you're on a Ferris wheel that's exactly 1 meter in radius (the unit circle). You start at the point (1, 0) on the right. As you rotate counterclockwise by an angle $x$, your position can be described by the coordinates $(\cos(x), \sin(x))$. Euler's formula says your position can *also* be described by the complex number $e^{ix}$.

This geometric interpretation is vital for understanding phenomena like AC circuits, where the voltage and current can be represented as rotating phasors in the complex plane. The angle represents the phase of the signal. This directly supports understanding **CO4** through visualization and connects to **CO3** where phase is critical.

### 5. Applications and Significance

Why should we care about Euler's formulas in Electrical Science and Physical Science?

*   **Representing Oscillations and Waves:** Sinusoidal functions like $\cos(\omega t)$ and $\sin(\omega t)$ are the backbone of describing waves, vibrations, and alternating currents. Euler's formulas allow us to represent these as a single complex exponential, $e^{i\omega t}$. This simplifies many calculations, especially in Fourier analysis and signal processing. For example, representing a signal $f(t) = A \cos(\omega t + \phi)$ as $A \text{Re}(e^{i(\omega t + \phi)})$ can often make analysis easier. This is a direct link to **CO4**.

*   **Solving Differential Equations:** Many physical systems, from mechanical vibrations to electrical circuits, are modeled by linear differential equations with constant coefficients. The characteristic equation for these often involves finding roots, which can be complex. The solutions then naturally involve terms like $e^{\alpha t} \cos(\beta t)$ and $e^{\alpha t} \sin(\beta t)$, which can be compactly written as $e^{(\alpha + i\beta)t}$. Using complex exponentials simplifies finding and manipulating these solutions, directly supporting **CO2** and **CO3**.

*   **Circuit Analysis (AC Circuits):** In AC circuit analysis, impedance is used to describe the opposition to current flow. This impedance is a complex quantity. Using Euler's formulas, voltages and currents are often represented as complex exponentials (phasors), making it straightforward to perform calculations involving resistance, capacitance, and inductance, all of which are handled elegantly in the complex domain. This links directly to the practical application of mathematical tools in electrical engineering.

*   **Complex Numbers in Physics:** Many areas of physics, such as quantum mechanics, utilize complex numbers extensively. Euler's formulas provide a bridge between the real-valued descriptions of physical phenomena and the complex mathematical framework used to describe them.

**Exam Tip:** Be ready to convert between trigonometric forms and exponential forms. Questions might ask you to express a sine or cosine function using complex exponentials or to simplify expressions involving complex exponentials into trigonometric forms.

### 6. Connecting to Other Course Outcomes

Let's explicitly see how this topic contributes to our broader course objectives:

*   **CO1: Solve systems of linear equations and diagonalize matrices.** While not directly about matrices, understanding complex numbers and their manipulation (which Euler's formulas facilitate) is crucial when eigenvalues and eigenvectors turn out to be complex. This often happens when dealing with systems that exhibit oscillatory behavior, which our topic directly relates to.

*   **CO2: Solve homogeneous and non-homogeneous linear differential equations with constant coefficients.** As mentioned, the characteristic equation of such ODEs often yields complex roots. The solutions then involve $e^{rt}$ where $r$ is complex. Euler's formulas are essential for expressing these solutions in terms of real trigonometric functions, or for simplifying the process of finding them. For example, if roots are $\alpha \pm i\beta$, the solutions are of the form $e^{\alpha t}(C_1 \cos(\beta t) + C_2 \sin(\beta t))$, which is directly linked to $e^{(\alpha \pm i\beta)t}$.

*   **CO3: Compute Laplace transform and apply it to solve ODEs arising in engineering.** Laplace transforms are incredibly powerful for solving ODEs. Functions involving sines and cosines have well-defined Laplace transforms, often expressed in terms of complex arguments related to Euler's formulas. Furthermore, the behavior of systems in the Laplace domain (the "s-plane") often involves poles and zeros, which can be complex and are analyzed using concepts derived from Euler's formulas.

*   **CO4: Determine the Taylor series and evaluate Fourier series expansion for different periodic functions.** Euler's formulas are derived from Taylor series. Understanding how $e^{ix}$ relates to $\cos(x)$ and $\sin(x)$ is a prerequisite for understanding Fourier series. Fourier series represent periodic functions as sums of sines and cosines. By using Euler's formulas, we can also represent these Fourier series using complex exponentials, which often simplifies analysis, particularly in understanding the frequency spectrum of signals.

### Summary of Key Takeaways

Remember these core ideas:

*   Euler's formula $e^{ix} = \cos(x) + i \sin(x)$ links complex exponentials to trigonometry via Taylor series.
*   This allows us to express $\cos(x)$ and $\sin(x)$ using complex exponentials:
    *   $\cos(x) = \frac{e^{ix} + e^{-ix}}{2}$
    *   $\sin(x) = \frac{e^{ix} - e^{-ix}}{2i}$
*   Geometrically, $e^{ix}$ represents a point on the unit circle in the complex plane at an angle $x$ (in radians) from the positive real axis.
*   These formulas are indispensable for analyzing oscillations, solving differential equations, and understanding AC circuits and wave phenomena.

They are foundational to many advanced topics in both electrical and physical sciences. Make sure you're comfortable manipulating them!

---

## Sample Questions with Answers

**Question 1 (Conceptual):** Explain why Euler's formula $e^{ix} = \cos(x) + i \sin(x)$ is considered a fundamental link between exponential and trigonometric functions, drawing upon the concept of Taylor series.

**Answer:**
Euler's formula is a direct consequence of the Taylor series expansions for $e^x$, $\cos(x)$, and $\sin(x)$. When we substitute $ix$ into the Taylor series for $e^x$, we get:
$e^{ix} = 1 + (ix) + \frac{(ix)^2}{2!} + \frac{(ix)^3}{3!} + \frac{(ix)^4}{4!} + \dots$
$e^{ix} = 1 + ix - \frac{x^2}{2!} - \frac{ix^3}{3!} + \frac{x^4}{4!} + \dots$
Grouping the real and imaginary terms, we find:
$e^{ix} = \left(1 - \frac{x^2}{2!} + \frac{x^4}{4!} - \dots\right) + i \left(x - \frac{x^3}{3!} + \frac{x^5}{5!} - \dots\right)$
The first parenthesis is the Taylor series for $\cos(x)$, and the second is for $\sin(x)$. Thus, $e^{ix} = \cos(x) + i \sin(x)$. This equation shows that the complex exponential function $e^{ix}$ encapsulates the behavior of both cosine and sine functions, demonstrating that these seemingly distinct functions are deeply related and can be viewed through the lens of a single complex exponential. This connection simplifies analysis by allowing us to use the algebraic properties of exponentials to work with trigonometric phenomena.

**Question 2 (Application/Exam-Oriented):** Express the function $f(t) = 5 \sin(3t - \frac{\pi}{4})$ using a complex exponential.

**Answer:**
We know that $\sin(\theta) = \text{Im}(e^{i\theta})$.
Here, $\theta = 3t - \frac{\pi}{4}$.
So, $\sin(3t - \frac{\pi}{4}) = \text{Im}(e^{i(3t - \frac{\pi}{4})})$.
Therefore, $f(t) = 5 \sin(3t - \frac{\pi}{4}) = 5 \text{Im}(e^{i(3t - \frac{\pi}{4})})$.

Alternatively, we can use the formula $\sin(x) = \frac{e^{ix} - e^{-ix}}{2i}$:
$f(t) = 5 \left( \frac{e^{i(3t - \frac{\pi}{4})} - e^{-i(3t - \frac{\pi}{4})}}{2i} \right)$
$f(t) = \frac{5}{2i} \left( e^{i(3t - \frac{\pi}{4})} - e^{-i(3t - \frac{\pi}{4})} \right)$
Since $\frac{1}{i} = -i$, we have:
$f(t) = -\frac{5i}{2} \left( e^{i(3t - \frac{\pi}{4})} - e^{-i(3t - \frac{\pi}{4})} \right)$

Both forms are valid ways to express it using complex exponentials. The first, using the imaginary part, is often more direct.

**Question 3 (Conceptual/Exam-Oriented):** Write down Euler's formulas for $\cos(x)$ and $\sin(x)$ and explain their geometrical significance in the complex plane.

**Answer:**
Euler's formulas for $\cos(x)$ and $\sin(x)$ are:
1.  $\cos(x) = \frac{e^{ix} + e^{-ix}}{2}$
2.  $\sin(x) = \frac{e^{ix} - e^{-ix}}{2i}$

**Geometrical Significance:**
In the complex plane, a complex number $z = a + bi$ is represented by a point $(a, b)$. According to Euler's main formula, $e^{ix} = \cos(x) + i \sin(x)$.
Here, the real part is $\cos(x)$ and the imaginary part is $\sin(x)$.
If we consider $x$ as an angle (in radians) measured counterclockwise from the positive real axis, then $(\cos(x), \sin(x))$ are the coordinates of a point on the unit circle (a circle with radius 1 centered at the origin).
Therefore, $e^{ix}$ represents a point on the unit circle in the complex plane at an angle $x$ radians from the positive real axis. As $x$ changes, $e^{ix}$ traces out the unit circle.

The formulas for $\cos(x)$ and $\sin(x)$ show how these trigonometric functions can be obtained by combining complex exponentials representing points on the unit circle. Specifically, $\cos(x)$ is the average of $e^{ix}$ and $e^{-ix}$ (which are points symmetrically located with respect to the real axis), and $\sin(x)$ is related to the difference between them (scaled by $1/(2i)$). This visual link to the unit circle is critical for understanding phasors in AC circuit analysis and wave phenomena.

**Question 4 (Application/Exam-Oriented):** Simplify the expression $(1+i)^4$ using Euler's formula.

**Answer:**
First, let's convert $1+i$ into polar form, which is directly related to Euler's formula.
The magnitude $|1+i| = \sqrt{1^2 + 1^2} = \sqrt{2}$.
The argument (angle) $\arg(1+i) = \arctan(\frac{1}{1}) = \frac{\pi}{4}$ radians.

So, $1+i$ can be written in polar form as $\sqrt{2} (\cos(\frac{\pi}{4}) + i \sin(\frac{\pi}{4}))$.
Using Euler's formula, this is equivalent to $\sqrt{2} e^{i\frac{\pi}{4}}$.

Now, we need to calculate $(1+i)^4$:
$(1+i)^4 = \left(\sqrt{2} e^{i\frac{\pi}{4}}\right)^4$
$= (\sqrt{2})^4 \left(e^{i\frac{\pi}{4}}\right)^4$
$= (2^{1/2})^4 e^{i(\frac{\pi}{4} \times 4)}$
$= 2^2 e^{i\pi}$
$= 4 e^{i\pi}$

Now, using Euler's formula in reverse ($e^{i\theta} = \cos(\theta) + i \sin(\theta)$) with $\theta = \pi$:
$e^{i\pi} = \cos(\pi) + i \sin(\pi) = -1 + i(0) = -1$.

So, $(1+i)^4 = 4 \times (-1) = -4$.

This method is much simpler than expanding $(1+i)^4$ directly using the binomial theorem! This showcases the power of polar form and Euler's formula for complex number exponentiation, which is a key application in many scientific and engineering contexts.
