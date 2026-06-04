---
title: "Linearity"
subject: "MATHEMATICS FOR ELECTRICAL SCIENCE AND PHYSICAL SCIENCE – 3"
module: "Module 1: Fourier Integral"
branch: "Electrical and Electronics Engineering"
semester: 3
topicId: "68a200832b85456187f35a5f"
status: "completed"
scrapedAt: "2026-05-23T16:14:27.880Z"
---
## MATHEMATICS FOR ELECTRICAL SCIENCE AND PHYSICAL SCIENCE – 3

### Module 1: Fourier Integral

### Topic: Linearity

---

### 1. Introduction to Fourier Integral

The Fourier Integral (or Fourier Transform) is a generalization of the Fourier Series for non-periodic functions. It allows us to represent any function $f(x)$ as a continuous superposition of sinusoidal components (complex exponentials). This is particularly useful in electrical engineering for analyzing signals and systems, and in physical science for understanding wave phenomena and spectral analysis.

**Key Concept:** The Fourier Integral decomposes a function into its constituent frequencies, similar to how a prism decomposes light into its spectral colors.

**Reference:** Kreyszig, Section 7.1 "Fourier Integral". This section provides the theoretical foundation for the Fourier Integral by considering the limit of Fourier Series as the period approaches infinity.

---

### 2. Definition of the Fourier Integral

For a function $f(x)$ that is absolutely integrable, i.e., $\int_{-\infty}^{\infty} |f(x)| dx < \infty$, its Fourier Integral is given by:

$$ F(\omega) = \mathcal{F}\{f(x)\} = \frac{1}{\sqrt{2\pi}} \int_{-\infty}^{\infty} f(x) e^{-i\omega x} dx $$

This $F(\omega)$ is called the **Fourier Transform** of $f(x)$. The term $\frac{1}{\sqrt{2\pi}}$ is a normalization factor. Different conventions exist for this factor (e.g., $\frac{1}{2\pi}$ or no factor). We will adhere to the convention used in Kreyszig.

The inverse Fourier Transform allows us to recover the original function from its Fourier Transform:

$$ f(x) = \mathcal{F}^{-1}\{F(\omega)\} = \frac{1}{\sqrt{2\pi}} \int_{-\infty}^{\infty} F(\omega) e^{i\omega x} d\omega $$

**Important Point:** The Fourier Integral exists if the function is absolutely integrable. This is a crucial condition for convergence.

**Reference:** Kreyszig, Section 7.1 "Fourier Integral". The derivation of the Fourier Integral from the Fourier Series is explained here. Also, Ramana, Chapter 35 "Fourier Transforms" provides a similar definition and discussion on conditions for existence.

---

### 3. Linearity Property of the Fourier Integral

The Fourier Integral operator is a **linear operator**. This means that for any constants $a$ and $b$, and any functions $f(x)$ and $g(x)$ for which the Fourier Transforms exist:

$$ \mathcal{F}\{a f(x) + b g(x)\} = a \mathcal{F}\{f(x)\} + b \mathcal{F}\{g(x)\} $$

In terms of the transform and inverse transform:

$$ \mathcal{F}\{a f(x) + b g(x)\} = a F(\omega) + b G(\omega) $$

where $F(\omega) = \mathcal{F}\{f(x)\}$ and $G(\omega) = \mathcal{F}\{g(x)\}$.

**Proof of Linearity:**

Let's prove this property using the definition of the Fourier Transform:

$$ \mathcal{F}\{a f(x) + b g(x)\} = \frac{1}{\sqrt{2\pi}} \int_{-\infty}^{\infty} (a f(x) + b g(x)) e^{-i\omega x} dx $$

Using the linearity of integration:

$$ \mathcal{F}\{a f(x) + b g(x)\} = \frac{1}{\sqrt{2\pi}} \left( \int_{-\infty}^{\infty} a f(x) e^{-i\omega x} dx + \int_{-\infty}^{\infty} b g(x) e^{-i\omega x} dx \right) $$

Factor out the constants $a$ and $b$:

$$ \mathcal{F}\{a f(x) + b g(x)\} = a \left( \frac{1}{\sqrt{2\pi}} \int_{-\infty}^{\infty} f(x) e^{-i\omega x} dx \right) + b \left( \frac{1}{\sqrt{2\pi}} \int_{-\infty}^{\infty} g(x) e^{-i\omega x} dx \right) $$

Recognizing the definitions of $F(\omega)$ and $G(\omega)$:

$$ \mathcal{F}\{a f(x) + b g(x)\} = a F(\omega) + b G(\omega) $$

**Importance of Linearity:**

The linearity property is fundamental because it allows us to:

*   **Simplify complex problems:** We can decompose a complex signal into simpler components, find the Fourier Transform of each component, and then combine them using linearity.
*   **Solve transform problems:** If we know the transforms of basic functions, we can use linearity to find the transforms of more complex functions that are linear combinations of these basics.
*   **Analyze linear systems:** In electrical engineering, systems are often linear. The output of a linear system to a sum of inputs is the sum of the outputs to each individual input. This property extends to Fourier Transforms, making them powerful tools for system analysis.

**Reference:** Kreyszig, Section 7.2 "Fourier Transforms of Special Functions". While this section focuses on specific functions, the underlying principle of linearity is applied throughout. Also, Ramana, Chapter 35 "Fourier Transforms" explicitly lists linearity as a property.

---

### 4. Learning Outcomes Addressed

This topic directly addresses:

*   **CO1: Determine the Fourier transforms of functions and apply them to solve problems arising in engineering.**
    *   The definition of the Fourier Transform is fundamental to determining Fourier transforms.
    *   The linearity property is a key tool for applying Fourier Transforms to solve problems, especially in the context of linear systems and signal decomposition.

---

### 5. Examples

**Example 1: Linearity with a Piecewise Function**

Let $f(x) = e^{-ax}u(x)$ and $g(x) = e^{bx}u(-x)$, where $a, b > 0$ and $u(x)$ is the unit step function. We know the Fourier Transforms:
$\mathcal{F}\{e^{-ax}u(x)\} = \frac{1}{a + i\omega}$
$\mathcal{F}\{e^{bx}u(-x)\} = \frac{1}{b - i\omega}$

Consider the function $h(x) = 2e^{-ax}u(x) - 3e^{bx}u(-x)$.
Using the linearity property:

$$ \mathcal{F}\{h(x)\} = \mathcal{F}\{2e^{-ax}u(x) - 3e^{bx}u(-x)\} $$
$$ \mathcal{F}\{h(x)\} = 2 \mathcal{F}\{e^{-ax}u(x)\} - 3 \mathcal{F}\{e^{bx}u(-x)\} $$
$$ \mathcal{F}\{h(x)\} = 2 \left( \frac{1}{a + i\omega} \right) - 3 \left( \frac{1}{b - i\omega} \right) $$
$$ \mathcal{F}\{h(x)\} = \frac{2}{a + i\omega} - \frac{3}{b - i\omega} $$

This demonstrates how the linearity property allows us to combine known transforms.

**Example 2: Linearity with Constants**

Let $f(x)$ be a function with Fourier Transform $F(\omega)$.
What is the Fourier Transform of $5f(x)$?
Using linearity:
$\mathcal{F}\{5f(x)\} = 5 \mathcal{F}\{f(x)\} = 5F(\omega)$.

What is the Fourier Transform of $f(x) + 2$?
This requires the Fourier Transform of a constant, which is a Dirac delta function.
$\mathcal{F}\{c\} = c \sqrt{2\pi} \delta(\omega)$.
So, $\mathcal{F}\{f(x) + 2\} = \mathcal{F}\{f(x)\} + \mathcal{F}\{2\} = F(\omega) + 2\sqrt{2\pi}\delta(\omega)$.

**Reference:** Ramana, Chapter 35, provides several solved examples illustrating the application of linearity in finding Fourier Transforms of various functions.

---

### 6. Practice Questions/Exercises

1.  Let $f(x) = \begin{cases} 1 & \text{if } -1 \le x \le 1 \\ 0 & \text{otherwise} \end{cases}$. Find the Fourier Transform of $f(x)$.
2.  Using the result from question 1, and the linearity property, find the Fourier Transform of the function:
    $g(x) = \begin{cases} 2 & \text{if } -1 \le x \le 1 \\ 0 & \text{otherwise} \end{cases}$
3.  If $\mathcal{F}\{e^{-|x|}\} = \sqrt{\frac{2}{\pi}} \frac{1}{1+\omega^2}$, find the Fourier Transform of $h(x) = 3e^{-|x-2|}$.
4.  Given $\mathcal{F}\{f(x)\} = F(\omega)$, what is $\mathcal{F}\{f(x) - f(-x)\}$?

---

### 7. Answers to Practice Questions

1.  **Fourier Transform of a rectangular pulse:**
    $$ F(\omega) = \mathcal{F}\{f(x)\} = \frac{1}{\sqrt{2\pi}} \int_{-1}^{1} 1 \cdot e^{-i\omega x} dx $$
    $$ = \frac{1}{\sqrt{2\pi}} \left[ \frac{e^{-i\omega x}}{-i\omega} \right]_{-1}^{1} = \frac{1}{\sqrt{2\pi}} \left( \frac{e^{-i\omega}}{-i\omega} - \frac{e^{i\omega}}{-i\omega} \right) $$
    $$ = \frac{1}{\sqrt{2\pi}} \frac{e^{i\omega} - e^{-i\omega}}{i\omega} = \frac{1}{\sqrt{2\pi}} \frac{2\sin(\omega)}{\omega} $$
    $$ = \sqrt{\frac{2}{\pi}} \frac{\sin(\omega)}{\omega} $$

2.  **Using linearity:**
    The function $g(x)$ is $2 \cdot f(x)$.
    Using the linearity property:
    $$ \mathcal{F}\{g(x)\} = \mathcal{F}\{2f(x)\} = 2 \mathcal{F}\{f(x)\} $$
    $$ = 2 \left( \sqrt{\frac{2}{\pi}} \frac{\sin(\omega)}{\omega} \right) = \sqrt{\frac{8}{\pi}} \frac{\sin(\omega)}{\omega} $$

3.  **Using linearity and the shift property (which we will cover later, but can be inferred):**
    We know $\mathcal{F}\{e^{-|x|}\} = \sqrt{\frac{2}{\pi}} \frac{1}{1+\omega^2}$.
    The function $h(x) = 3e^{-|x-2|}$ is a scaled and shifted version of $e^{-|x|}$.
    The scaling by 3 is handled by linearity: $\mathcal{F}\{3e^{-|x|}\} = 3 \mathcal{F}\{e^{-|x|}\} = 3 \sqrt{\frac{2}{\pi}} \frac{1}{1+\omega^2}$.
    The shift property of Fourier Transforms states that $\mathcal{F}\{f(x-a)\} = e^{-i\omega a} F(\omega)$.
    Here, $f(x) = e^{-|x|}$ and $a=2$. So, $\mathcal{F}\{e^{-|x-2|}\} = e^{-i\omega 2} \left( \sqrt{\frac{2}{\pi}} \frac{1}{1+\omega^2} \right)$.
    Therefore,
    $$ \mathcal{F}\{h(x)\} = \mathcal{F}\{3e^{-|x-2|}\} = 3 \mathcal{F}\{e^{-|x-2|}\} $$
    $$ = 3 e^{-i2\omega} \left( \sqrt{\frac{2}{\pi}} \frac{1}{1+\omega^2} \right) = 3\sqrt{\frac{2}{\pi}} \frac{e^{-i2\omega}}{1+\omega^2} $$

4.  **Applying linearity:**
    Let $k(x) = f(x) - f(-x)$.
    $$ \mathcal{F}\{k(x)\} = \mathcal{F}\{f(x) - f(-x)\} $$
    Using linearity:
    $$ = \mathcal{F}\{f(x)\} - \mathcal{F}\{f(-x)\} $$
    We know $\mathcal{F}\{f(x)\} = F(\omega)$.
    The property for reflection states $\mathcal{F}\{f(-x)\} = F(-\omega)$.
    Therefore,
    $$ \mathcal{F}\{f(x) - f(-x)\} = F(\omega) - F(-\omega) $$

---

### 8. Important Points to Remember

*   **Definition:** The Fourier Transform represents a function as a continuous spectrum of frequencies.
*   **Conditions for Existence:** The function must be absolutely integrable ($\int_{-\infty}^{\infty} |f(x)| dx < \infty$).
*   **Linearity is Key:** $\mathcal{F}\{a f(x) + b g(x)\} = a F(\omega) + b G(\omega)$. This property is fundamental for simplifying and solving problems.
*   **Normalization Factor:** Be mindful of the normalization factor $\frac{1}{\sqrt{2\pi}}$. Different texts might use variations.
*   **Application:** Linearity is crucial for analyzing linear systems and breaking down complex signals into simpler components.

---

### 9. Connection to Course Outcomes

*   **CO1:** The linearity property is a direct application of how Fourier Transforms are used to determine the transforms of functions (by combining simpler known transforms) and apply them to problems. For instance, in electrical engineering, if a system is linear and we know the response to basic signals, we can find the response to any arbitrary input signal by decomposing it and using linearity.

---

This concludes the study notes for the Linearity property within Module 1: Fourier Integral. Remember to practice the examples and exercises to solidify your understanding.
