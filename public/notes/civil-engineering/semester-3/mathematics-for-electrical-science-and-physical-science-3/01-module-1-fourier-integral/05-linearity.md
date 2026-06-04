---
title: "Linearity"
subject: "MATHEMATICS FOR ELECTRICAL SCIENCE AND PHYSICAL SCIENCE – 3"
module: "Module 1: Fourier Integral"
branch: "Civil Engineering"
semester: 3
topicId: "689f15ca56b5e963ba810687"
status: "completed"
scrapedAt: "2026-05-20T18:41:12.695Z"
---
# Mathematics for Electrical Science and Physical Science – 3

## Module 1: Fourier Integral

### Topic: Linearity

---

### 1. Introduction to Linearity in the Context of Fourier Integrals

The Fourier Integral is a powerful tool for representing arbitrary, non-periodic functions as a superposition of sinusoidal components (complex exponentials). Just as the Fourier Series deals with periodic functions, the Fourier Integral extends this concept to functions that are defined over the entire real line or over a finite interval that we can conceptually extend to infinity.

**Linearity** is a fundamental property of many mathematical operations and systems. In the context of Fourier Integrals, it means that the Fourier Integral of a sum of functions is the sum of the Fourier Integrals of those functions, and the Fourier Integral of a scaled function is the scaled Fourier Integral of that function. This property simplifies many calculations and is crucial for understanding how linear systems respond to various input signals.

---

### 2. Learning Outcomes

By the end of this topic, you should be able to:

*   **Understand and state the linearity property of the Fourier Integral.**
*   **Apply the linearity property to find the Fourier Integral of scaled and summed functions.**
*   **Use the linearity property in conjunction with known Fourier Integral pairs to solve problems.**
*   **Recognize how the linearity property is fundamental to analyzing linear systems using Fourier Transforms.**

---

### 3. Key Concepts and Definitions

#### 3.1 Fourier Integral Definition

For a function $f(x)$ that is absolutely integrable over $(-\infty, \infty)$, its Fourier Integral representation is given by:

$$F(\alpha) = \mathcal{F}\{f(x)\} = \frac{1}{\sqrt{2\pi}} \int_{-\infty}^{\infty} f(x) e^{-i\alpha x} dx$$

This function $F(\alpha)$ is called the **Fourier Transform** of $f(x)$. The inverse Fourier Transform allows us to recover $f(x)$ from $F(\alpha)$:

$$f(x) = \mathcal{F}^{-1}\{F(\alpha)\} = \frac{1}{\sqrt{2\pi}} \int_{-\infty}^{\infty} F(\alpha) e^{i\alpha x} d\alpha$$

*Note: Different conventions for the $\frac{1}{\sqrt{2\pi}}$ factor exist. This is a common one.*

#### 3.2 Linearity Property of the Fourier Integral

The linearity property states that for any constants $a$ and $b$, and any functions $f_1(x)$ and $f_2(x)$ for which their Fourier Transforms exist:

$$\mathcal{F}\{a f_1(x) + b f_2(x)\} = a \mathcal{F}\{f_1(x)\} + b \mathcal{F}\{f_2(x)\}$$

In terms of the integral definition:

$$\frac{1}{\sqrt{2\pi}} \int_{-\infty}^{\infty} [a f_1(x) + b f_2(x)] e^{-i\alpha x} dx = a \left( \frac{1}{\sqrt{2\pi}} \int_{-\infty}^{\infty} f_1(x) e^{-i\alpha x} dx \right) + b \left( \frac{1}{\sqrt{2\pi}} \int_{-\infty}^{\infty} f_2(x) e^{-i\alpha x} dx \right)$$

This property can be proven by directly applying the linearity of integration:

$$
\begin{aligned}
\mathcal{F}\{a f_1(x) + b f_2(x)\} &= \frac{1}{\sqrt{2\pi}} \int_{-\infty}^{\infty} [a f_1(x) + b f_2(x)] e^{-i\alpha x} dx \\
&= \frac{1}{\sqrt{2\pi}} \int_{-\infty}^{\infty} a f_1(x) e^{-i\alpha x} dx + \frac{1}{\sqrt{2\pi}} \int_{-\infty}^{\infty} b f_2(x) e^{-i\alpha x} dx \\
&= a \left( \frac{1}{\sqrt{2\pi}} \int_{-\infty}^{\infty} f_1(x) e^{-i\alpha x} dx \right) + b \left( \frac{1}{\sqrt{2\pi}} \int_{-\infty}^{\infty} f_2(x) e^{-i\alpha x} dx \right) \\
&= a \mathcal{F}\{f_1(x)\} + b \mathcal{F}\{f_2(x)\}
\end{aligned}
$$

---

### 4. Applications of the Linearity Property

The linearity property is incredibly useful because it allows us to break down complex problems into simpler ones. If we know the Fourier Transforms of basic functions, we can find the Fourier Transforms of more complex functions that are combinations of these basic ones.

#### 4.1 Transforming Scaled Functions

If we know the Fourier Transform of $f(x)$, say $F(\alpha)$, then the Fourier Transform of $c f(x)$ (where $c$ is a constant) is simply $c F(\alpha)$:

$$\mathcal{F}\{c f(x)\} = c \mathcal{F}\{f(x)\} = c F(\alpha)$$

**Example:**

We know the Fourier Transform of the rectangular pulse function:
$f(x) = \begin{cases} 1, & |x| \le a \\ 0, & |x| > a \end{cases}$
is $F(\alpha) = \sqrt{\frac{2}{\pi}} \frac{\sin(a\alpha)}{\alpha}$.

What is the Fourier Transform of $g(x) = 5 f(x)$?
Using linearity:
$\mathcal{F}\{g(x)\} = \mathcal{F}\{5 f(x)\} = 5 \mathcal{F}\{f(x)\} = 5 \sqrt{\frac{2}{\pi}} \frac{\sin(a\alpha)}{\alpha}$.

#### 4.2 Transforming Sums of Functions

If we have a function that is a sum of two (or more) functions, we can find its Fourier Transform by finding the transforms of each component function and adding them together.

**Example:**

Consider the function $h(x) = f_1(x) + f_2(x)$, where:
$f_1(x) = e^{-|x|}$
$f_2(x) = \text{sgn}(x) e^{-|x|}$ (This is related to the signum function multiplied by $e^{-|x|}$)

We need to know the Fourier Transforms of $f_1(x)$ and $f_2(x)$. Let's assume we know them:
$\mathcal{F}\{e^{-|x|}\} = \sqrt{\frac{2}{\pi}} \frac{1}{1+\alpha^2}$

Finding the transform of $f_2(x)$ might be more involved, but if we are given it, we can proceed. Let's take a simpler example using known pairs for clarity:

**Example:**

Find the Fourier Transform of $h(x) = \cos(\omega_0 x) e^{-ax^2}$ (where $a > 0$).

We can express $\cos(\omega_0 x)$ using Euler's formula: $\cos(\omega_0 x) = \frac{e^{i\omega_0 x} + e^{-i\omega_0 x}}{2}$.

So, $h(x) = \frac{1}{2} (e^{i\omega_0 x} e^{-ax^2} + e^{-i\omega_0 x} e^{-ax^2})$.

We know the Fourier Transform of a Gaussian function:
$\mathcal{F}\{e^{-ax^2}\} = \frac{1}{\sqrt{2a}} e^{-\frac{\alpha^2}{4a}}$

We also know the frequency shifting property (which itself relies on linearity and a known transform):
$\mathcal{F}\{e^{i\omega_0 x} f(x)\} = F(\alpha - \omega_0)$

Applying these properties and linearity:

$\mathcal{F}\{e^{i\omega_0 x} e^{-ax^2}\} = \frac{1}{\sqrt{2a}} e^{-\frac{(\alpha - \omega_0)^2}{4a}}$
$\mathcal{F}\{e^{-i\omega_0 x} e^{-ax^2}\} = \frac{1}{\sqrt{2a}} e^{-\frac{(\alpha + \omega_0)^2}{4a}}$

Therefore,
$$
\begin{aligned}
\mathcal{F}\{h(x)\} &= \mathcal{F}\left\{\frac{1}{2} e^{i\omega_0 x} e^{-ax^2} + \frac{1}{2} e^{-i\omega_0 x} e^{-ax^2}\right\} \\
&= \frac{1}{2} \mathcal{F}\{e^{i\omega_0 x} e^{-ax^2}\} + \frac{1}{2} \mathcal{F}\{e^{-i\omega_0 x} e^{-ax^2}\} \\
&= \frac{1}{2} \left( \frac{1}{\sqrt{2a}} e^{-\frac{(\alpha - \omega_0)^2}{4a}} \right) + \frac{1}{2} \left( \frac{1}{\sqrt{2a}} e^{-\frac{(\alpha + \omega_0)^2}{4a}} \right) \\
&= \frac{1}{2\sqrt{2a}} \left( e^{-\frac{(\alpha - \omega_0)^2}{4a}} + e^{-\frac{(\alpha + \omega_0)^2}{4a}} \right)
\end{aligned}
$$

---

### 5. Linearity and Linear Systems

The linearity property is fundamental in the study of **Linear Time-Invariant (LTI) Systems**.

*   **Linearity:** If a system produces output $y_1(t)$ for input $x_1(t)$ and output $y_2(t)$ for input $x_2(t)$, then for any constants $a$ and $b$, the system produces output $a y_1(t) + b y_2(t)$ for input $a x_1(t) + b x_2(t)$.
*   **Time-Invariance:** If the system produces output $y(t)$ for input $x(t)$, then it produces output $y(t - \tau)$ for input $x(t - \tau)$.

When we use Fourier Transforms to analyze LTI systems, the input signal $x(t)$ is transformed into its frequency domain representation $X(\omega)$ (using a similar integral definition, often with $2\pi$ in a different place). The system's response is characterized by its **frequency response** $H(\omega)$.

The key property is that the output's Fourier Transform $Y(\omega)$ is simply the product of the input's Fourier Transform and the system's frequency response:

$$Y(\omega) = H(\omega) X(\omega)$$

The linearity of the Fourier Transform ensures that if we apply this multiplication in the frequency domain, it corresponds to the superposition of the system's response to individual frequency components of the input signal. If the input is a sum of signals, the output is the sum of the outputs obtained by passing each component through the system.

---

### 6. Practice Questions

1.  Given that $\mathcal{F}\{e^{-ax^2}\} = \frac{1}{\sqrt{2a}} e^{-\frac{\alpha^2}{4a}}$ for $a > 0$, find the Fourier Transform of $f(x) = 3e^{-2x^2}$.
2.  Suppose $\mathcal{F}\{f(x)\} = F(\alpha)$. What is $\mathcal{F}\{-2f(x)\}$?
3.  Let $g(x) = f_1(x) - 3f_2(x)$. If $\mathcal{F}\{f_1(x)\} = F_1(\alpha)$ and $\mathcal{F}\{f_2(x)\} = F_2(\alpha)$, find $\mathcal{F}\{g(x)\}$.
4.  Using linearity and the known transform $\mathcal{F}\{e^{-ax}\} = \sqrt{\frac{2}{\pi}} \frac{a}{a^2 + \alpha^2}$ for $a>0$ (for $x \ge 0$ and 0 for $x < 0$, i.e., the unit step function times $e^{-ax}$), find the Fourier Transform of the function:
    $h(x) = \begin{cases} 2e^{-3x}, & x \ge 0 \\ 0, & x < 0 \end{cases}$
    (Hint: This is a scaled version of $e^{-ax}u(x)$).

---

### 7. Answers to Practice Questions

1.  Using linearity, $\mathcal{F}\{3e^{-2x^2}\} = 3 \mathcal{F}\{e^{-2x^2}\}$.
    Here, $a=2$. So, $\mathcal{F}\{3e^{-2x^2}\} = 3 \left( \frac{1}{\sqrt{2 \cdot 2}} e^{-\frac{\alpha^2}{4 \cdot 2}} \right) = 3 \left( \frac{1}{\sqrt{4}} e^{-\frac{\alpha^2}{8}} \right) = \frac{3}{2} e^{-\frac{\alpha^2}{8}}$.

2.  Using linearity, $\mathcal{F}\{-2f(x)\} = -2 \mathcal{F}\{f(x)\} = -2 F(\alpha)$.

3.  Using linearity, $\mathcal{F}\{g(x)\} = \mathcal{F}\{f_1(x) - 3f_2(x)\} = \mathcal{F}\{f_1(x)\} - 3\mathcal{F}\{f_2(x)\} = F_1(\alpha) - 3F_2(\alpha)$.

4.  The function $h(x)$ can be written as $h(x) = 2 \cdot e^{-3x} u(x)$, where $u(x)$ is the unit step function. This is exactly the form $c \cdot f(x)$ where $f(x) = e^{-ax}u(x)$ with $a=3$ and $c=2$.
    The known transform is $\mathcal{F}\{e^{-ax}u(x)\} = \sqrt{\frac{2}{\pi}} \frac{a}{a^2 + \alpha^2}$.
    For $a=3$, $\mathcal{F}\{e^{-3x}u(x)\} = \sqrt{\frac{2}{\pi}} \frac{3}{3^2 + \alpha^2} = \sqrt{\frac{2}{\pi}} \frac{3}{9 + \alpha^2}$.
    By linearity, $\mathcal{F}\{h(x)\} = \mathcal{F}\{2e^{-3x}u(x)\} = 2 \mathcal{F}\{e^{-3x}u(x)\}$.
    So, $\mathcal{F}\{h(x)\} = 2 \sqrt{\frac{2}{\pi}} \frac{3}{9 + \alpha^2} = \sqrt{\frac{2}{\pi}} \frac{6}{9 + \alpha^2}$.

---

### 8. Important Points to Remember

*   **Superposition:** The core idea of linearity is that the Fourier Transform "superposes" in the same way as the input function.
*   **Scaling:** If you scale the input function by a constant, its Fourier Transform is also scaled by the same constant.
*   **Addition:** The Fourier Transform of a sum of functions is the sum of their individual Fourier Transforms.
*   **Foundation for LTI Systems:** Linearity of the Fourier Transform is critical for analyzing how linear systems process signals. The input-output relationship in the frequency domain for LTI systems is multiplicative, a direct consequence of linearity.
*   **Applicability:** The linearity property applies to any linear operation on the function before taking the Fourier Transform, including combinations of scaling, shifting, and differentiation (which also have their own transform properties).
