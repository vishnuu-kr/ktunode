---
title: "Fourier Cosine and Sine integrals"
subject: "MATHEMATICS FOR ELECTRICAL SCIENCE AND PHYSICAL SCIENCE – 3"
module: "Module 1: Fourier Integral"
branch: "Mechanical Engineering"
semester: 3
topicId: "68a3fd1251d0cf4804462c94"
status: "completed"
scrapedAt: "2026-05-20T17:50:32.265Z"
---
## MATHEMATICS FOR ELECTRICAL SCIENCE AND PHYSICAL SCIENCE – 3

### Module 1: Fourier Integral

#### Topic: Fourier Cosine and Sine Integrals

---

This topic delves into the extension of Fourier series to functions defined over an infinite interval, utilizing the concept of the Fourier integral. We will specifically focus on the Fourier Cosine and Sine integrals, which are applicable to even and odd functions, respectively. These concepts are fundamental for analyzing signals and systems in electrical and physical sciences, as indicated by **CO1: Determine the Fourier transforms of functions and apply them to solve problems arising in engineering.**

---

### 1. Introduction to Fourier Integrals

The Fourier series represents a periodic function as a sum of sines and cosines. When dealing with non-periodic functions defined over an infinite interval, we transition from a discrete sum to a continuous integral, known as the **Fourier integral**. This allows us to represent any function that satisfies certain conditions as an integral of sines and cosines, each with a different frequency.

**Key Idea:** The Fourier integral can be thought of as the limit of a Fourier series as the period of the function approaches infinity.

**Conditions for Existence of Fourier Integral:**

A function $f(x)$ defined on $(-\infty, \infty)$ is said to have a Fourier integral if it satisfies the following conditions:

*   $f(x)$ is **absolutely integrable** over $(-\infty, \infty)$, meaning $\int_{-\infty}^{\infty} |f(x)| dx < \infty$.
*   $f(x)$ has a finite number of discontinuities in any finite interval.
*   $f(x)$ has a finite number of maxima and minima in any finite interval.

These conditions are analogous to the Dirichlet conditions for Fourier series.

**Kreyszig (10th Ed., Chapter 11.7):** Kreyszig provides a thorough explanation of the Fourier integral and its representation. He emphasizes the absolute integrability condition as crucial for the convergence of the integral.

---

### 2. Fourier Integral Representation

For a function $f(x)$ satisfying the above conditions, its Fourier integral is given by:

$$ f(x) \sim \frac{1}{\pi} \int_{0}^{\infty} [A(\omega) \cos(\omega x) + B(\omega) \sin(\omega x)] d\omega $$

where $A(\omega)$ and $B(\omega)$ are the **Fourier cosine and sine coefficients**, respectively, defined as:

$$ A(\omega) = \int_{-\infty}^{\infty} f(v) \cos(\omega v) dv $$
$$ B(\omega) = \int_{-\infty}^{\infty} f(v) \sin(\omega v) dv $$

**Important Note:** This representation assumes the function is neither purely even nor purely odd. We will now specialize to cases where the function exhibits such symmetry.

---

### 3. Fourier Cosine Integral

If $f(x)$ is an **even function**, i.e., $f(-x) = f(x)$, then $B(\omega) = 0$. The Fourier integral simplifies to the **Fourier Cosine Integral**:

$$ f(x) \sim \frac{2}{\pi} \int_{0}^{\infty} A(\omega) \cos(\omega x) d\omega $$

where the cosine coefficient $A(\omega)$ becomes:

$$ A(\omega) = \int_{0}^{\infty} f(v) \cos(\omega v) dv $$

**Derivation:**
If $f(x)$ is even, then $f(v)\sin(\omega v)$ is an odd function of $v$. Therefore, $\int_{-\infty}^{\infty} f(v) \sin(\omega v) dv = 0$, which implies $B(\omega)=0$.
Also, since $f(v)$ is even, $f(v)\cos(\omega v)$ is even. Thus, $\int_{-\infty}^{\infty} f(v) \cos(\omega v) dv = 2 \int_{0}^{\infty} f(v) \cos(\omega v) dv$.

**Ramana (39th Ed., Chapter 37):** Ramana's text offers clear derivations and examples for Fourier Cosine and Sine integrals, focusing on their application in solving differential equations.

**Example 1:** Find the Fourier Cosine integral of $f(x) = e^{-ax}$, $a > 0$, for $x \ge 0$.

*   Since the function is defined for $x \ge 0$, we can consider it as an even extension to $(-\infty, \infty)$ for the purpose of the cosine integral, or more formally, we directly use the definition for even functions. However, the problem statement implicitly suggests that we should consider $f(x)$ on $x \ge 0$ and find its cosine integral representation, which is effectively representing an even extension of $f(x)$ on $(-\infty, \infty)$.

Let's assume the problem implies finding the Fourier Cosine integral of $f(x) = e^{-ax}$ for $x \ge 0$. In this context, $f(x)$ is considered to be defined for $x \ge 0$, and we are looking for its representation as a Fourier Cosine integral. This is often how such problems are phrased, implying an even extension.

We need to compute $A(\omega)$:
$$ A(\omega) = \int_{0}^{\infty} e^{-av} \cos(\omega v) dv $$

Using integration by parts twice or standard integral formulas:
$$ A(\omega) = \left[ \frac{e^{-av}}{a^2 + \omega^2} (-a \cos(\omega v) + \omega \sin(\omega v)) \right]_0^{\infty} $$
$$ A(\omega) = 0 - \left( \frac{1}{a^2 + \omega^2} (-a \cdot 1 + \omega \cdot 0) \right) $$
$$ A(\omega) = \frac{a}{a^2 + \omega^2} $$

Therefore, the Fourier Cosine integral of $f(x) = e^{-ax}$ for $x \ge 0$ is:
$$ f(x) \sim \frac{2}{\pi} \int_{0}^{\infty} \frac{a}{a^2 + \omega^2} \cos(\omega x) d\omega $$

**Result:** $\frac{2}{\pi} \int_{0}^{\infty} \frac{a}{a^2 + \omega^2} \cos(\omega x) d\omega = e^{-ax}$ for $x > 0$.

---

### 4. Fourier Sine Integral

If $f(x)$ is an **odd function**, i.e., $f(-x) = -f(x)$, then $A(\omega) = 0$. The Fourier integral simplifies to the **Fourier Sine Integral**:

$$ f(x) \sim \frac{2}{\pi} \int_{0}^{\infty} B(\omega) \sin(\omega x) d\omega $$

where the sine coefficient $B(\omega)$ becomes:

$$ B(\omega) = \int_{0}^{\infty} f(v) \sin(\omega v) dv $$

**Derivation:**
If $f(x)$ is odd, then $f(v)\cos(\omega v)$ is an odd function of $v$. Therefore, $\int_{-\infty}^{\infty} f(v) \cos(\omega v) dv = 0$, which implies $A(\omega)=0$.
Also, since $f(v)$ is odd, $f(v)\sin(\omega v)$ is even. Thus, $\int_{-\infty}^{\infty} f(v) \sin(\omega v) dv = 2 \int_{0}^{\infty} f(v) \sin(\omega v) dv$.

**Grewal (44th Ed., Chapter 47):** Grewal's textbook provides numerous solved examples on Fourier sine and cosine integrals, illustrating their application in boundary value problems.

**Example 2:** Find the Fourier Sine integral of $f(x) = e^{-ax}$, $a > 0$, for $x \ge 0$.

We need to compute $B(\omega)$:
$$ B(\omega) = \int_{0}^{\infty} e^{-av} \sin(\omega v) dv $$

Using integration by parts twice or standard integral formulas:
$$ B(\omega) = \left[ \frac{e^{-av}}{a^2 + \omega^2} (-a \sin(\omega v) - \omega \cos(\omega v)) \right]_0^{\infty} $$
$$ B(\omega) = 0 - \left( \frac{1}{a^2 + \omega^2} (-a \cdot 0 - \omega \cdot 1) \right) $$
$$ B(\omega) = \frac{\omega}{a^2 + \omega^2} $$

Therefore, the Fourier Sine integral of $f(x) = e^{-ax}$ for $x \ge 0$ is:
$$ f(x) \sim \frac{2}{\pi} \int_{0}^{\infty} \frac{\omega}{a^2 + \omega^2} \sin(\omega x) d\omega $$

**Result:** $\frac{2}{\pi} \int_{0}^{\infty} \frac{\omega}{a^2 + \omega^2} \sin(\omega x) d\omega = e^{-ax}$ for $x > 0$.

---

### 5. Relation to Fourier Transforms

The Fourier cosine and sine integrals are special cases of the more general **Fourier transform**. If we consider the Fourier transform of $f(x)$ as:

$$ F(\omega) = \mathcal{F}\{f(x)\} = \int_{-\infty}^{\infty} f(x) e^{-i\omega x} dx $$

and its inverse transform:

$$ f(x) = \mathcal{F}^{-1}\{F(\omega)\} = \frac{1}{2\pi} \int_{-\infty}^{\infty} F(\omega) e^{i\omega x} d\omega $$

We can express $e^{-i\omega x} = \cos(\omega x) - i \sin(\omega x)$. Substituting this into the Fourier transform definition:

$$ F(\omega) = \int_{-\infty}^{\infty} f(x) (\cos(\omega x) - i \sin(\omega x)) dx $$
$$ F(\omega) = \int_{-\infty}^{\infty} f(x) \cos(\omega x) dx - i \int_{-\infty}^{\infty} f(x) \sin(\omega x) dx $$

Comparing this with the definitions of $A(\omega)$ and $B(\omega)$:

$$ F(\omega) = A(\omega) - i B(\omega) $$

Now, let's substitute this back into the inverse Fourier transform:

$$ f(x) = \frac{1}{2\pi} \int_{-\infty}^{\infty} (A(\omega) - i B(\omega)) e^{i\omega x} d\omega $$
$$ f(x) = \frac{1}{2\pi} \int_{-\infty}^{\infty} (A(\omega) - i B(\omega)) (\cos(\omega x) + i \sin(\omega x)) d\omega $$
$$ f(x) = \frac{1}{2\pi} \int_{-\infty}^{\infty} [A(\omega) \cos(\omega x) + A(\omega) i \sin(\omega x) - i B(\omega) \cos(\omega x) + B(\omega) \sin(\omega x)] d\omega $$
$$ f(x) = \frac{1}{2\pi} \int_{-\infty}^{\infty} [ (A(\omega) \cos(\omega x) + B(\omega) \sin(\omega x)) + i (A(\omega) \sin(\omega x) - B(\omega) \cos(\omega x)) ] d\omega $$

This is the general Fourier integral.

**For Even Functions ($f(x)$ is even):**
$A(\omega) = 2 \int_{0}^{\infty} f(v) \cos(\omega v) dv$ and $B(\omega) = 0$.
$F(\omega) = A(\omega)$.
$$ f(x) = \frac{1}{2\pi} \int_{-\infty}^{\infty} A(\omega) e^{i\omega x} d\omega = \frac{1}{2\pi} \int_{-\infty}^{\infty} A(\omega) (\cos(\omega x) + i \sin(\omega x)) d\omega $$
Since $f(x)$ is even, the imaginary part must be zero. This implies that $A(\omega)\sin(\omega x)$ must integrate to zero, which is true.
$$ f(x) = \frac{1}{2\pi} \int_{-\infty}^{\infty} A(\omega) \cos(\omega x) d\omega $$
Let $u = \omega$, then $du = d\omega$.
$$ f(x) = \frac{1}{2\pi} \int_{-\infty}^{\infty} A(u) \cos(ux) du $$
Since $A(u)$ is even (because $f(v)$ is even),
$$ f(x) = \frac{1}{2\pi} \cdot 2 \int_{0}^{\infty} A(u) \cos(ux) du = \frac{1}{\pi} \int_{0}^{\infty} A(u) \cos(ux) du $$
This matches our Fourier Cosine Integral with $A(\omega)$ as defined previously.

**For Odd Functions ($f(x)$ is odd):**
$A(\omega) = 0$ and $B(\omega) = 2 \int_{0}^{\infty} f(v) \sin(\omega v) dv$.
$F(\omega) = -i B(\omega)$.
$$ f(x) = \frac{1}{2\pi} \int_{-\infty}^{\infty} (-i B(\omega)) e^{i\omega x} d\omega = \frac{1}{2\pi} \int_{-\infty}^{\infty} (-i B(\omega)) (\cos(\omega x) + i \sin(\omega x)) d\omega $$
$$ f(x) = \frac{1}{2\pi} \int_{-\infty}^{\infty} (-i B(\omega) \cos(\omega x) + B(\omega) \sin(\omega x)) d\omega $$
Since $f(x)$ is odd, the real part must be zero. This implies that $-iB(\omega)\cos(\omega x)$ must integrate to zero, which is true.
$$ f(x) = \frac{1}{2\pi} \int_{-\infty}^{\infty} B(\omega) \sin(\omega x) d\omega $$
Since $B(u)$ is even (because $f(v)$ is odd),
$$ f(x) = \frac{1}{2\pi} \cdot 2 \int_{0}^{\infty} B(u) \sin(ux) du = \frac{1}{\pi} \int_{0}^{\infty} B(u) \sin(ux) du $$
This matches our Fourier Sine Integral with $B(\omega)$ as defined previously.

**CO1 Alignment:** This section directly addresses **CO1** by showing how Fourier cosine and sine integrals are derived from the general Fourier transform, demonstrating their applicability in representing functions and solving problems. The knowledge level here is **K3** as students are applying the transform concepts.

---

### 6. Practical Applications

Fourier integrals (cosine and sine) are fundamental tools in:

*   **Solving Partial Differential Equations (PDEs):** They are used to solve boundary value problems for PDEs defined on infinite domains, such as heat conduction and wave propagation. For instance, the heat equation on a semi-infinite rod.
*   **Signal Processing:** Analyzing signals that are not periodic, like transient signals. The Fourier integral provides the frequency spectrum of these signals.
*   **Image Processing:** Representing images as a sum of cosine and sine waves of different frequencies and orientations.
*   **Physics:** Quantum mechanics (wave functions), acoustics, and optics.

**Rao, Kim, Hwang (1st Ed., Chapter 1):** While this book focuses on FFT, the introductory chapters often discuss the theoretical underpinnings of Fourier analysis, including the Fourier integral as the continuous counterpart to the discrete Fourier transform.

---

### 7. Key Concepts and Definitions to Remember

*   **Fourier Integral:** A representation of a non-periodic function as an integral of sines and cosines.
*   **Conditions for Existence:** Absolute integrability and finite number of discontinuities/extrema.
*   **Fourier Cosine Integral:** For even functions.
    *   $f(x) \sim \frac{2}{\pi} \int_{0}^{\infty} A(\omega) \cos(\omega x) d\omega$
    *   $A(\omega) = \int_{0}^{\infty} f(v) \cos(\omega v) dv$
*   **Fourier Sine Integral:** For odd functions.
    *   $f(x) \sim \frac{2}{\pi} \int_{0}^{\infty} B(\omega) \sin(\omega x) d\omega$
    *   $B(\omega) = \int_{0}^{\infty} f(v) \sin(\omega v) dv$
*   **Relationship to Fourier Transform:** The cosine and sine integrals are special cases of the Fourier transform for even and odd functions, respectively.

---

### 8. Practice Questions and Exercises

**Instructions:** Solve the following problems. Show all your steps.

**Question 1:** Find the Fourier Cosine integral of the function
$$ f(x) = \begin{cases} 1 & \text{if } 0 \le x \le 1 \\ 0 & \text{if } x > 1 \end{cases} $$

**Solution 1:**
Since this is a problem asking for a cosine integral, we consider $f(x)$ on $[0, \infty)$. For the cosine integral, we only need to define the function for $x \ge 0$. The function $f(x)$ is defined as 1 on $[0, 1]$ and 0 elsewhere for $x \ge 0$.

We need to compute $A(\omega)$:
$$ A(\omega) = \int_{0}^{\infty} f(v) \cos(\omega v) dv $$
$$ A(\omega) = \int_{0}^{1} 1 \cdot \cos(\omega v) dv + \int_{1}^{\infty} 0 \cdot \cos(\omega v) dv $$
$$ A(\omega) = \int_{0}^{1} \cos(\omega v) dv $$

If $\omega \ne 0$:
$$ A(\omega) = \left[ \frac{\sin(\omega v)}{\omega} \right]_0^1 = \frac{\sin(\omega)}{\omega} - \frac{\sin(0)}{\omega} = \frac{\sin(\omega)}{\omega} $$

If $\omega = 0$:
$$ A(0) = \int_{0}^{1} \cos(0 \cdot v) dv = \int_{0}^{1} 1 dv = [v]_0^1 = 1 $$
Note that $\lim_{\omega \to 0} \frac{\sin(\omega)}{\omega} = 1$, so the expression $A(\omega) = \frac{\sin(\omega)}{\omega}$ is valid for all $\omega \ge 0$ if we interpret $\frac{\sin(0)}{0}$ as 1.

The Fourier Cosine integral is:
$$ f(x) \sim \frac{2}{\pi} \int_{0}^{\infty} A(\omega) \cos(\omega x) d\omega $$
$$ f(x) \sim \frac{2}{\pi} \int_{0}^{\infty} \frac{\sin(\omega)}{\omega} \cos(\omega x) d\omega $$

**Answer 1:** The Fourier Cosine integral is $\frac{2}{\pi} \int_{0}^{\infty} \frac{\sin(\omega)}{\omega} \cos(\omega x) d\omega$.

**Question 2:** Find the Fourier Sine integral of the function
$$ f(x) = \begin{cases} x & \text{if } 0 \le x \le 1 \\ 0 & \text{if } x > 1 \end{cases} $$

**Solution 2:**
We need to compute $B(\omega)$:
$$ B(\omega) = \int_{0}^{\infty} f(v) \sin(\omega v) dv $$
$$ B(\omega) = \int_{0}^{1} v \sin(\omega v) dv + \int_{1}^{\infty} 0 \cdot \sin(\omega v) dv $$
$$ B(\omega) = \int_{0}^{1} v \sin(\omega v) dv $$

Using integration by parts: $\int u dv = uv - \int v du$.
Let $u = v$ and $dv = \sin(\omega v) dv$.
Then $du = dv$ and $v = -\frac{\cos(\omega v)}{\omega}$.

$$ B(\omega) = \left[ v \left(-\frac{\cos(\omega v)}{\omega}\right) \right]_0^1 - \int_{0}^{1} \left(-\frac{\cos(\omega v)}{\omega}\right) dv $$
$$ B(\omega) = \left( 1 \cdot \left(-\frac{\cos(\omega)}{\omega}\right) - 0 \cdot \left(-\frac{\cos(0)}{\omega}\right) \right) + \frac{1}{\omega} \int_{0}^{1} \cos(\omega v) dv $$
$$ B(\omega) = -\frac{\cos(\omega)}{\omega} + \frac{1}{\omega} \left[ \frac{\sin(\omega v)}{\omega} \right]_0^1 $$
$$ B(\omega) = -\frac{\cos(\omega)}{\omega} + \frac{1}{\omega} \left( \frac{\sin(\omega)}{\omega} - 0 \right) $$
$$ B(\omega) = -\frac{\cos(\omega)}{\omega} + \frac{\sin(\omega)}{\omega^2} $$

The Fourier Sine integral is:
$$ f(x) \sim \frac{2}{\pi} \int_{0}^{\infty} B(\omega) \sin(\omega x) d\omega $$
$$ f(x) \sim \frac{2}{\pi} \int_{0}^{\infty} \left( \frac{\sin(\omega)}{\omega^2} - \frac{\cos(\omega)}{\omega} \right) \sin(\omega x) d\omega $$

**Answer 2:** The Fourier Sine integral is $\frac{2}{\pi} \int_{0}^{\infty} \left( \frac{\sin(\omega)}{\omega^2} - \frac{\cos(\omega)}{\omega} \right) \sin(\omega x) d\omega$.

**Question 3:** Determine the Fourier integral representation of the function $f(x) = e^{-|x|}$. Is it a cosine or sine integral? Justify your answer.

**Solution 3:**
First, let's check the symmetry of $f(x) = e^{-|x|}$.
$f(-x) = e^{-|-x|} = e^{-|x|} = f(x)$.
Since $f(-x) = f(x)$, the function is **even**. Therefore, its Fourier integral representation will be a **Fourier Cosine Integral**.

We need to compute $A(\omega)$:
$$ A(\omega) = \int_{-\infty}^{\infty} f(v) \cos(\omega v) dv $$
Since $f(v)$ is even and $\cos(\omega v)$ is even, their product is even.
$$ A(\omega) = 2 \int_{0}^{\infty} f(v) \cos(\omega v) dv $$
$$ A(\omega) = 2 \int_{0}^{\infty} e^{-|v|} \cos(\omega v) dv $$
For $v \ge 0$, $|v| = v$.
$$ A(\omega) = 2 \int_{0}^{\infty} e^{-v} \cos(\omega v) dv $$

From Example 1, we know that $\int_{0}^{\infty} e^{-av} \cos(\omega v) dv = \frac{a}{a^2 + \omega^2}$.
Here, $a=1$.
$$ A(\omega) = 2 \cdot \frac{1}{1^2 + \omega^2} = \frac{2}{1 + \omega^2} $$

The Fourier Cosine integral is:
$$ f(x) \sim \frac{2}{\pi} \int_{0}^{\infty} A(\omega) \cos(\omega x) d\omega $$
$$ f(x) \sim \frac{2}{\pi} \int_{0}^{\infty} \frac{2}{1 + \omega^2} \cos(\omega x) d\omega $$
$$ f(x) \sim \frac{4}{\pi} \int_{0}^{\infty} \frac{\cos(\omega x)}{1 + \omega^2} d\omega $$

**Answer 3:** The function $f(x) = e^{-|x|}$ is even. Its Fourier integral representation is a Fourier Cosine Integral: $\frac{4}{\pi} \int_{0}^{\infty} \frac{\cos(\omega x)}{1 + \omega^2} d\omega$.

---

### 9. Important Points to Remember

*   **Symmetry is Key:** Always check for even or odd symmetry of the function to determine if a Fourier Cosine or Sine integral is appropriate. This significantly simplifies calculations.
*   **Absolute Integrability:** Ensure the function satisfies the absolute integrability condition for the Fourier integral to exist.
*   **Domain of Definition:** For cosine and sine integrals, we typically consider functions defined on $[0, \infty)$. The integral formulas automatically handle the extension to $(-\infty, \infty)$ based on the symmetry.
*   **Interchange of Order of Integration:** The derivation relies on the ability to interchange the order of integration, which is justified by the conditions on $f(x)$.
*   **Applications in PDEs:** Understanding these integrals is crucial for solving certain types of partial differential equations on semi-infinite domains.

---

This concludes the notes on Fourier Cosine and Sine Integrals. These concepts form the foundation for a deeper understanding of Fourier analysis in continuous domains and are vital for applications in various scientific and engineering fields, as aligned with **CO1**. The ability to identify and compute these integrals demonstrates a practical application of mathematical principles in problem-solving.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=WUvTyaaNkzM) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=7UJ4CFR1894) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=jZ5z11sK0Mg) |
