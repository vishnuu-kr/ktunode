---
title: "Euler formulas"
subject: "MATHEMATICS FOR ELECTRICAL SCIENCE AND PHYSICAL 
SCIENCE - 1"
module: "Module 4: Taylor series representation (without proof, assuming the possibility of power series expansion in appropriate domains)"
branch: "Electronics and Communication Engineering"
semester: 1
topicId: "68b7dc8f20463779487d9fd2"
status: "completed"
scrapedAt: "2026-05-23T17:35:11.591Z"
---
# Module 4: Taylor Series Representation – Euler's Formulas

Welcome, everyone! Today, we're diving into a truly beautiful and powerful topic in our journey through mathematics for Electrical and Physical Sciences: **Euler's Formulas**. Now, you might have encountered $e^{ix}$ or $\sin x$ and $\cos x$ before, but the magic that Euler unveiled is how these seemingly different concepts are intimately connected through the lens of Taylor series. This connection is absolutely fundamental, not just for understanding deeper mathematical concepts, but also for solving many practical problems in electrical engineering and physics, particularly in areas like signal analysis and circuit theory.

Our aim today is to understand *how* these formulas arise from the Taylor series expansions we've been studying. We won't be going through the rigorous proofs involving complex analysis, as our module assumes we can work with these power series expansions in appropriate domains. Think of it as building on the foundation we've laid.

### Connecting with Course Objectives

Before we get into the nitty-gritty, let's see how this ties into our course.

*   **CO4: Determine the Taylor series and evaluate Fourier series expansion for different periodic functions.** Euler's formulas are the bridge that connects exponential functions with trigonometric functions. Understanding this connection allows us to represent periodic signals (which are everywhere in electrical science!) in different, sometimes more convenient, forms. This is crucial for analyzing signals using Fourier series.
*   **CO2: Solve homogeneous and non-homogeneous linear differential equation with constant coefficients.** Many differential equations that model physical systems involve trigonometric terms or complex exponentials. Knowing Euler's formulas allows us to translate between these representations, often simplifying the process of finding solutions. For instance, a solution might involve $e^{ax}\sin(bx)$, which can be directly related to a complex exponential.
*   **CO3: Compute Laplace transform and apply it to solve ODEs arising in engineering.** The Laplace transform itself often deals with complex exponentials. When we encounter terms like $\sin(\omega t)$ or $\cos(\omega t)$ in our time-domain problems, their Laplace transforms involve these trigonometric functions. Euler's formulas help us understand the relationship between the Laplace transforms of trigonometric functions and the transforms of complex exponentials.

So, as you can see, this topic isn't just an isolated mathematical curiosity; it's a vital tool that empowers us to tackle a wide range of engineering and physics problems.

### The Building Blocks: Familiar Taylor Series

We've already spent time with Taylor series expansions. Remember how we can represent many common functions as an infinite sum of polynomial terms? The general idea, centered at $a$, is:

$f(x) = \sum_{n=0}^{\infty} \frac{f^{(n)}(a)}{n!}(x-a)^n$

For simplicity, we often consider the Maclaurin series, where $a=0$:

$f(x) = \sum_{n=0}^{\infty} \frac{f^{(n)}(0)}{n!}x^n$

Let's bring to mind the Maclaurin series for a couple of key functions:

1.  **The exponential function, $e^x$:** This is one of the most fundamental functions in mathematics and science. Its Maclaurin series is:
    $e^x = 1 + x + \frac{x^2}{2!} + \frac{x^3}{3!} + \frac{x^4}{4!} + \frac{x^5}{5!} + \dots$
    Or more compactly:
    $e^x = \sum_{n=0}^{\infty} \frac{x^n}{n!}$

2.  **The cosine function, $\cos x$:** This is our classic wave function, describing oscillatory behavior. Its Maclaurin series is:
    $\cos x = 1 - \frac{x^2}{2!} + \frac{x^4}{4!} - \frac{x^6}{6!} + \frac{x^8}{8!} - \dots$
    Notice the pattern: only even powers of $x$, and alternating signs.
    $\cos x = \sum_{k=0}^{\infty} \frac{(-1)^k x^{2k}}{(2k)!}$

3.  **The sine function, $\sin x$:** Another essential wave function. Its Maclaurin series is:
    $\sin x = x - \frac{x^3}{3!} + \frac{x^5}{5!} - \frac{x^7}{7!} + \frac{x^9}{9!} - \dots$
    Here, we have only odd powers of $x$, and alternating signs.
    $\sin x = \sum_{k=0}^{\infty} \frac{(-1)^k x^{2k+1}}{(2k+1)!}$

These expansions are valid for all real values of $x$, and as we'll see, they're also valid for complex values.

### The Big Question: What About $e^{ix}$?

Now, here's where the magic happens. What if we substitute $ix$ into the Maclaurin series for $e^x$? Since the series for $e^x$ is valid for all $x$, it's also valid for $ix$, where $i$ is the imaginary unit ($i^2 = -1$).

Let's do that substitution carefully:

$e^{ix} = 1 + (ix) + \frac{(ix)^2}{2!} + \frac{(ix)^3}{3!} + \frac{(ix)^4}{4!} + \frac{(ix)^5}{5!} + \frac{(ix)^6}{6!} + \dots$

Now, let's evaluate the powers of $i$:
*   $i^1 = i$
*   $i^2 = -1$
*   $i^3 = i^2 \cdot i = -i$
*   $i^4 = (i^2)^2 = (-1)^2 = 1$
*   $i^5 = i^4 \cdot i = i$
*   $i^6 = i^4 \cdot i^2 = 1 \cdot (-1) = -1$

And so on. The powers of $i$ cycle through $i, -1, -i, 1$.

Let's substitute these back into our expansion for $e^{ix}$:

$e^{ix} = 1 + ix + \frac{i^2 x^2}{2!} + \frac{i^3 x^3}{3!} + \frac{i^4 x^4}{4!} + \frac{i^5 x^5}{5!} + \frac{i^6 x^6}{6!} + \dots$
$e^{ix} = 1 + ix + \frac{-1 \cdot x^2}{2!} + \frac{-i \cdot x^3}{3!} + \frac{1 \cdot x^4}{4!} + \frac{i \cdot x^5}{5!} + \frac{-1 \cdot x^6}{6!} + \dots$

Now, let's group the terms that have $i$ (the imaginary parts) and the terms that don't have $i$ (the real parts):

$e^{ix} = \left( 1 - \frac{x^2}{2!} + \frac{x^4}{4!} - \frac{x^6}{6!} + \dots \right) + i \left( x - \frac{x^3}{3!} + \frac{x^5}{5!} - \frac{x^7}{7!} + \dots \right)$

Take a moment to look at those two groups of terms. Do they look familiar?

Yes, they are *exactly* the Maclaurin series for $\cos x$ and $\sin x$ that we wrote down earlier!

So, we have:

$e^{ix} = \left( 1 - \frac{x^2}{2!} + \frac{x^4}{4!} - \dots \right) + i \left( x - \frac{x^3}{3!} + \frac{x^5}{5!} - \dots \right)$
$e^{ix} = \cos x + i \sin x$

And *this*, my friends, is **Euler's Formula**! It's a profound statement connecting the exponential function with $i$ to the fundamental trigonometric functions.

### Euler's Formula and Its Significance

The formula $e^{ix} = \cos x + i \sin x$ is one of the most elegant equations in mathematics. It's often cited for its beauty because it links together five fundamental mathematical constants and operations: $e$ (the base of natural logarithms), $i$ (the imaginary unit), $\pi$ (though not explicitly here, it appears when evaluating at specific points), addition, and exponentiation.

**What does this *mean* for us?**

*   **Representation of Waves:** Trigonometric functions are the language of waves – think of sound waves, light waves, AC electrical circuits. Euler's formula shows that these waves can be represented using complex exponentials. This is incredibly useful because operations on complex exponentials (like multiplication and differentiation/integration) are often much simpler than the equivalent operations on sines and cosines.
*   **Complex Numbers in Polar Form:** This formula provides a geometric interpretation of complex numbers. A complex number $z = x + iy$ can be represented in the Cartesian plane. Euler's formula tells us that $e^{i\theta}$ corresponds to a point on the unit circle in the complex plane, with an angle $\theta$ (in radians) from the positive real axis. The magnitude is 1, and the angle is $\theta$. This leads to the polar form of complex numbers: $z = r e^{i\theta} = r(\cos \theta + i \sin \theta)$. This is a core concept in electrical engineering for analyzing AC circuits (e.g., impedance).
*   **Simplifying Calculations:** As mentioned, working with $e^{i\theta}$ is often easier than working with $\cos \theta + i \sin \theta$ directly. For example, powers and products are straightforward with exponentials.

### Deriving Other Related Formulas

Euler's formula $e^{ix} = \cos x + i \sin x$ is the cornerstone. By using properties of exponents and the fact that $e^{-ix} = \cos(-x) + i \sin(-x)$, we can derive other useful identities.

Remember that $\cos(-x) = \cos x$ (cosine is an even function) and $\sin(-x) = -\sin x$ (sine is an odd function).

So, $e^{-ix} = \cos x - i \sin x$.

Now we have a system of two equations:
1.  $e^{ix} = \cos x + i \sin x$
2.  $e^{-ix} = \cos x - i \sin x$

Let's manipulate these to isolate $\cos x$ and $\sin x$:

*   **To find $\cos x$:** Add equation (1) and equation (2):
    $(e^{ix}) + (e^{-ix}) = (\cos x + i \sin x) + (\cos x - i \sin x)$
    $e^{ix} + e^{-ix} = 2 \cos x$
    Dividing by 2, we get:
    $\cos x = \frac{e^{ix} + e^{-ix}}{2}$

    This is a very important result! It expresses the cosine function in terms of complex exponentials. You'll see this used extensively when analyzing signals and solving differential equations, especially in contexts like circuit analysis and mechanical vibrations.

*   **To find $\sin x$:** Subtract equation (2) from equation (1):
    $(e^{ix}) - (e^{-ix}) = (\cos x + i \sin x) - (\cos x - i \sin x)$
    $e^{ix} - e^{-ix} = \cos x + i \sin x - \cos x + i \sin x$
    $e^{ix} - e^{-ix} = 2i \sin x$
    Dividing by $2i$, we get:
    $\sin x = \frac{e^{ix} - e^{-ix}}{2i}$

    This formula expresses the sine function using complex exponentials. Again, incredibly useful for simplifying calculations in various engineering applications.

### Why is this "Without Proof"?

Our module specifies "without proof, assuming the possibility of power series expansion in appropriate domains." What this means is that we're not going to delve into the complex analysis proofs that rigorously establish the validity of these expansions for complex arguments. Instead, we're relying on the established fact that the Taylor (Maclaurin) series for $e^x$, $\sin x$, and $\cos x$ are known to converge for all complex numbers, and that substituting $ix$ into the series for $e^x$ *correctly yields* the series for $\cos x + i \sin x$. Textbooks like Kreyszig and Anton, Biven, Davis will likely cover the more formal proofs, but for our purposes, understanding the *connection* through the series is the key.

### Real-World Analogies and Examples

Let's try to make this tangible.

**Analogy: The Traveling Wave**
Imagine a ripple on a pond. It has a position, a height (amplitude), and it's moving. We can describe this wave using sine or cosine functions (its shape and oscillation). Euler's formula says we can also describe this same wave using a complex exponential $e^{i(\omega t - kx)}$. This complex exponential encodes both the amplitude and the phase of the wave in a compact way. The real part, $\cos(\omega t - kx)$, might describe the actual displacement of the water, while the imaginary part, $\sin(\omega t - kx)$, is also present in the complex representation, indicating that the full wave behavior is captured.

**Example: AC Circuits**
In AC (Alternating Current) circuits, voltage and current oscillate sinusoidally. For example, a voltage might be $v(t) = V_m \cos(\omega t + \phi)$. Analyzing circuits with components like capacitors and inductors involves complex impedance. Instead of dealing with the differential equations of $\cos(\omega t)$ and $\sin(\omega t)$ directly, electrical engineers often represent the voltage as a complex phasor, say $V = V_m e^{j(\omega t + \phi)}$ (using $j$ for the imaginary unit in electrical engineering). The impedance of a resistor is $R$, an inductor is $j\omega L$, and a capacitor is $1/(j\omega C)$. Using these complex impedances makes circuit analysis with Kirchhoff's laws much simpler, as they become algebraic equations in the complex domain. After solving, we take the real part of the resulting complex voltage or current to get the actual physical quantity. Euler's formulas are the bridge that allows this simplification.

**Example: Signal Processing**
Suppose you have a signal that's a combination of pure sine waves. A signal $s(t) = A\cos(\omega t) + B\sin(\omega t)$. Using Euler's formulas, we can rewrite $\cos(\omega t)$ and $\sin(\omega t)$ in terms of complex exponentials.
$\cos(\omega t) = \frac{e^{i\omega t} + e^{-i\omega t}}{2}$
$\sin(\omega t) = \frac{e^{i\omega t} - e^{-i\omega t}}{2i}$

Substituting these into $s(t)$:
$s(t) = A\left(\frac{e^{i\omega t} + e^{-i\omega t}}{2}\right) + B\left(\frac{e^{i\omega t} - e^{-i\omega t}}{2i}\right)$
$s(t) = \left(\frac{A}{2} + \frac{B}{2i}\right)e^{i\omega t} + \left(\frac{A}{2} - \frac{B}{2i}\right)e^{-i\omega t}$

This shows that any linear combination of sines and cosines can be expressed as a linear combination of complex exponentials with frequencies $\omega$ and $-\omega$. This is a fundamental idea in Fourier analysis.

### Summary and Key Takeaways

*   **Euler's Formula:** $e^{ix} = \cos x + i \sin x$. This is derived by substituting $ix$ into the Maclaurin series for $e^x$ and grouping real and imaginary terms, which then match the Maclaurin series for $\cos x$ and $\sin x$.
*   **Related Formulas:**
    *   $\cos x = \frac{e^{ix} + e^{-ix}}{2}$
    *   $\sin x = \frac{e^{ix} - e^{-ix}}{2i}$
*   **Significance:** These formulas provide a powerful link between exponential and trigonometric functions, crucial for representing waves, understanding complex numbers in polar form, and simplifying calculations in signal processing, circuit analysis, and differential equations.
*   **Application Context:** Remember that in electrical engineering, $j$ is often used instead of $i$ for the imaginary unit.

This connection is so fundamental that when you encounter problems involving oscillations or periodic phenomena, thinking in terms of complex exponentials via Euler's formulas is often the most efficient path to a solution. It’s a tool that unlocks deeper understanding and more elegant problem-solving techniques.

---

### Sample Questions and Answers

**Question 1 (Conceptual):**
Explain the relationship between the Taylor series of $e^x$, $\sin x$, and $\cos x$ that leads to Euler's formula.

**Answer:**
Euler's formula, $e^{ix} = \cos x + i \sin x$, is derived by substituting $ix$ into the known Maclaurin series for $e^x$:
$e^x = \sum_{n=0}^{\infty} \frac{x^n}{n!} = 1 + x + \frac{x^2}{2!} + \frac{x^3}{3!} + \dots$
Substituting $ix$ gives:
$e^{ix} = 1 + (ix) + \frac{(ix)^2}{2!} + \frac{(ix)^3}{3!} + \frac{(ix)^4}{4!} + \dots$
Using the powers of $i$ ($i^2=-1, i^3=-i, i^4=1, \dots$), we get:
$e^{ix} = 1 + ix - \frac{x^2}{2!} - i\frac{x^3}{3!} + \frac{x^4}{4!} + i\frac{x^5}{5!} - \dots$
Grouping the real terms (no $i$) and imaginary terms (with $i$):
$e^{ix} = \left(1 - \frac{x^2}{2!} + \frac{x^4}{4!} - \dots \right) + i \left(x - \frac{x^3}{3!} + \frac{x^5}{5!} - \dots \right)$
The terms in the first parenthesis are precisely the Maclaurin series for $\cos x$, and the terms in the second parenthesis are the Maclaurin series for $\sin x$. Therefore, $e^{ix} = \cos x + i \sin x$.

**Question 2 (Application/Exam-Oriented):**
Use Euler's formulas to express $\cos^2 x$ in terms of cosine functions of multiple angles.

**Answer:**
We know that $\cos x = \frac{e^{ix} + e^{-ix}}{2}$.
Let's square this expression:
$\cos^2 x = \left(\frac{e^{ix} + e^{-ix}}{2}\right)^2$
$\cos^2 x = \frac{(e^{ix} + e^{-ix})^2}{4}$
Expand the numerator: $(e^{ix} + e^{-ix})^2 = (e^{ix})^2 + 2(e^{ix})(e^{-ix}) + (e^{-ix})^2$
$(e^{ix} + e^{-ix})^2 = e^{i2x} + 2e^{ix-ix} + e^{-i2x}$
$(e^{ix} + e^{-ix})^2 = e^{i2x} + 2e^0 + e^{-i2x}$
$(e^{ix} + e^{-ix})^2 = e^{i2x} + 2(1) + e^{-i2x}$
$(e^{ix} + e^{-ix})^2 = e^{i2x} + e^{-i2x} + 2$

Now substitute this back into the expression for $\cos^2 x$:
$\cos^2 x = \frac{e^{i2x} + e^{-i2x} + 2}{4}$
$\cos^2 x = \frac{e^{i2x} + e^{-i2x}}{4} + \frac{2}{4}$

Recall that $\cos(2x) = \frac{e^{i2x} + e^{-i2x}}{2}$.
So, $e^{i2x} + e^{-i2x} = 2 \cos(2x)$.

Substituting this back:
$\cos^2 x = \frac{2 \cos(2x)}{4} + \frac{1}{2}$
$\cos^2 x = \frac{1}{2} \cos(2x) + \frac{1}{2}$

This is a standard trigonometric identity derived using Euler's formulas, often used in integration of trigonometric functions.

**Question 3 (Conceptual/Exam-Oriented):**
What is the significance of Euler's formula $e^{ix} = \cos x + i \sin x$ in the context of signal processing and electrical engineering?

**Answer:**
Euler's formula is fundamental because it bridges the gap between exponential functions and trigonometric functions, which are the building blocks of waves and oscillations found everywhere in physical phenomena and engineering.
1.  **Representation of Signals:** It allows sinusoidal signals (like AC voltage $V\cos(\omega t)$) to be represented as the real part of a complex exponential ($V e^{j\omega t}$). This complex exponential representation is often called a phasor.
2.  **Simplification of Analysis:** Operations on sinusoidal signals, such as addition, differentiation, and integration, can become complex. By converting them to complex exponentials using Euler's formulas, these operations often simplify into algebraic manipulations in the complex domain. For instance, differentiation of $e^{ax}$ is just $a e^{ax}$, which is much simpler than differentiating $\cos(\omega t)$.
3.  **Circuit Analysis:** In AC circuit analysis, components like inductors and capacitors have impedances that are complex quantities ($j\omega L$ and $1/(j\omega C)$). Using phasors and complex impedances allows for a powerful algebraic method (instead of differential equations) to solve for currents and voltages in circuits.
4.  **Fourier Analysis:** Euler's formula is the basis for expressing any periodic signal as a sum of complex exponentials with different frequencies and amplitudes (Fourier Series). This provides a comprehensive way to analyze the frequency content of signals.

In essence, Euler's formula provides a compact and computationally convenient way to handle oscillatory behavior.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=WUvTyaaNkzM) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=Kb3K1Ui4454) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=jZ5z11sK0Mg) |
