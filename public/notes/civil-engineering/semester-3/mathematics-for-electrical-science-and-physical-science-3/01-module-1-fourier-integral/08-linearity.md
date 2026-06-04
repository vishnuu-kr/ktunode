---
title: "Linearity"
subject: "MATHEMATICS FOR ELECTRICAL SCIENCE AND PHYSICAL SCIENCE – 3"
module: "Module 1: Fourier Integral"
branch: "Civil Engineering"
semester: 3
topicId: "689f15ca56b5e963ba81068a"
status: "completed"
scrapedAt: "2026-05-20T18:41:14.797Z"
---
# MATHEMATICS FOR ELECTRICAL SCIENCE AND PHYSICAL SCIENCE – 3

## Module 1: Fourier Integral

### Topic: Linearity

This topic explores the linearity property of the Fourier Integral, a fundamental concept in signal processing and analysis within electrical and physical sciences.

---

### Learning Outcomes

By the end of this topic, you should be able to:

*   Understand and state the linearity property of the Fourier Integral.
*   Apply the linearity property to simplify or analyze Fourier Transforms of linear combinations of functions.
*   Recognize how linearity relates to superposition in systems and signal decomposition.

---

### Key Concepts and Definitions

#### 1. The Fourier Integral (Fourier Transform)

Before diving into linearity, let's recall the definition of the Fourier Integral. For a function $f(t)$, its Fourier Transform $F(\omega)$ is defined as:

$$
F(\omega) = \mathcal{F}\{f(t)\} = \frac{1}{\sqrt{2\pi}} \int_{-\infty}^{\infty} f(t) e^{-i\omega t} dt
$$

And its inverse Fourier Transform is:

$$
f(t) = \mathcal{F}^{-1}\{F(\omega)\} = \frac{1}{\sqrt{2\pi}} \int_{-\infty}^{\infty} F(\omega) e^{i\omega t} d\omega
$$

The $\frac{1}{\sqrt{2\pi}}$ factor is a common convention, though other conventions exist (e.g., $\frac{1}{2\pi}$ on the inverse transform, or no factor at all). We will consistently use the above definition.

#### 2. Linearity Property of the Fourier Integral

The **linearity property** states that the Fourier Transform of a linear combination of functions is the linear combination of their individual Fourier Transforms. Mathematically, if $f_1(t)$ and $f_2(t)$ are functions with Fourier Transforms $F_1(\omega)$ and $F_2(\omega)$ respectively, and $a$ and $b$ are constants, then:

$$
\mathcal{F}\{a f_1(t) + b f_2(t)\} = a \mathcal{F}\{f_1(t)\} + b \mathcal{F}\{f_2(t)\} = a F_1(\omega) + b F_2(\omega)
$$

**Explanation:**

This property is a direct consequence of the linearity of integration. Let's prove it:

Consider the Fourier Transform of the linear combination $a f_1(t) + b f_2(t)$:

$$
\mathcal{F}\{a f_1(t) + b f_2(t)\} = \frac{1}{\sqrt{2\pi}} \int_{-\infty}^{\infty} [a f_1(t) + b f_2(t)] e^{-i\omega t} dt
$$

Using the properties of integration (linearity of the integral), we can split the integral:

$$
= \frac{1}{\sqrt{2\pi}} \int_{-\infty}^{\infty} a f_1(t) e^{-i\omega t} dt + \frac{1}{\sqrt{2\pi}} \int_{-\infty}^{\infty} b f_2(t) e^{-i\omega t} dt
$$

Now, we can pull out the constants $a$ and $b$:

$$
= a \left( \frac{1}{\sqrt{2\pi}} \int_{-\infty}^{\infty} f_1(t) e^{-i\omega t} dt \right) + b \left( \frac{1}{\sqrt{2\pi}} \int_{-\infty}^{\infty} f_2(t) e^{-i\omega t} dt \right)
$$

Recognizing the terms in the parentheses as the Fourier Transforms of $f_1(t)$ and $f_2(t)$:

$$
= a F_1(\omega) + b F_2(\omega)
$$

Thus, the linearity property is proven.

---

### Applications and Significance

The linearity property is crucial in many aspects of signal analysis:

*   **System Analysis:** In linear time-invariant (LTI) systems, the output for a sum of inputs is the sum of the outputs for each individual input. The Fourier Transform is a powerful tool for analyzing LTI systems. If $h(t)$ is the impulse response of an LTI system, its Fourier Transform $H(\omega)$ is the system's frequency response. For an input signal $x(t) = a x_1(t) + b x_2(t)$, the output $y(t)$ will be $a y_1(t) + b y_2(t)$, where $y_i(t)$ is the output corresponding to input $x_i(t)$. In the frequency domain, this means if $X_1(\omega)$, $X_2(\omega)$, and $Y_1(\omega)$, $Y_2(\omega)$ are the transforms of the inputs and outputs, then $Y(\omega) = H(\omega) X(\omega)$. The linearity of the Fourier Transform ensures this relationship holds for composite inputs.

*   **Signal Decomposition:** Complex signals can often be decomposed into simpler components (e.g., sinusoidal components). The linearity property allows us to find the Fourier Transform of the complex signal by summing the transforms of its simpler components.

*   **Simplification of Calculations:** When dealing with functions that are sums or differences of known functions, the linearity property simplifies the process of finding their Fourier Transforms. Instead of computing the transform of the entire composite function, we can compute the transforms of the individual components and combine them.

---

### Examples

**Example 1: Fourier Transform of a Sum of Rectangular Pulses**

Let $f_1(t)$ be a rectangular pulse of width 2 centered at $t=0$, and $f_2(t)$ be a rectangular pulse of width 1 centered at $t=1$.

$f_1(t) = \begin{cases} 1 & \text{if } -1 \le t \le 1 \\ 0 & \text{otherwise} \end{cases}$

$f_2(t) = \begin{cases} 1 & \text{if } 0 \le t \le 1 \\ 0 & \text{otherwise} \end{cases}$

We want to find the Fourier Transform of $f(t) = 2f_1(t) - f_2(t)$.

We know the Fourier Transform of a rectangular pulse of width $T$ centered at $t=0$ is:
$\mathcal{F}\{\text{rect}(t/T)\} = T \sqrt{\frac{\pi}{2}} \text{sinc}(\frac{\omega T}{2})$, where $\text{sinc}(x) = \frac{\sin(\pi x)}{\pi x}$.

Let's adjust this for our definition of the rectangular pulse.
The standard rectangular pulse of width $2a$ centered at 0 is $rect(t/2a)$, which is 1 for $|t| \le a$ and 0 otherwise.
The Fourier Transform of $rect(t/T)$ is $T \text{sinc}(\omega T/2)$. Here, $T$ is the width.

For $f_1(t)$: This is a rectangular pulse of width 2, so $T=2$.
$F_1(\omega) = \mathcal{F}\{f_1(t)\} = 2 \frac{\sin(\omega \cdot 2 / 2)}{\omega \cdot 2 / 2} = 2 \frac{\sin(\omega)}{\omega}$.

For $f_2(t)$: This is a rectangular pulse from 0 to 1. We can express it as $u(t) - u(t-1)$, where $u(t)$ is the unit step function.
The Fourier Transform of the unit step function is $\pi \delta(\omega) + \frac{1}{i\omega}$.
However, it's often easier to compute directly or use the time-shifting property.
$f_2(t) = \text{rect}((t-0.5)/1)$. The center is at $t=0.5$ and width is $1$.
Using the time-shifting property: $\mathcal{F}\{f(t-\tau)\} = e^{-i\omega\tau} F(\omega)$.
Let's consider a standard rect pulse of width 1 centered at 0: $\text{rect}(t)$.
$\mathcal{F}\{\text{rect}(t)\} = \int_{-1/2}^{1/2} 1 \cdot e^{-i\omega t} dt = \left[ \frac{e^{-i\omega t}}{-i\omega} \right]_{-1/2}^{1/2} = \frac{e^{-i\omega/2} - e^{i\omega/2}}{-i\omega} = \frac{2i \sin(\omega/2)}{-i\omega} = \frac{2 \sin(\omega/2)}{\omega}$.
So, $F_2(\omega) = \mathcal{F}\{\text{rect}(t-0.5)\} = e^{-i\omega 0.5} \left( \frac{2 \sin(\omega/2)}{\omega} \right)$.

*Correction on $f_1(t)$ and $f_2(t)$ interpretation:*
Let's use the common definition of the rectangular function: $\text{rect}(x) = 1$ for $|x| \le 1/2$ and 0 otherwise. The width is 1.
So, $\mathcal{F}\{\text{rect}(t/T)\} = T \frac{\sin(\omega T/2)}{\omega T/2}$.

$f_1(t)$: This is 1 for $-1 \le t \le 1$. This corresponds to $2 \cdot \text{rect}(t/2)$. The width is 2.
$\mathcal{F}\{2 \cdot \text{rect}(t/2)\} = 2 \cdot 2 \frac{\sin(\omega \cdot 2 / 2)}{\omega \cdot 2 / 2} = 4 \frac{\sin(\omega)}{\omega}$. Let's call this $G_1(\omega)$.

$f_2(t)$: This is 1 for $0 \le t \le 1$. This is a pulse of width 1.
We can write $f_2(t) = \text{rect}((t-0.5)/1)$.
$\mathcal{F}\{\text{rect}((t-0.5)/1)\} = 1 \cdot \frac{\sin(\omega \cdot 1 / 2)}{\omega \cdot 1 / 2} e^{-i\omega 0.5} = \frac{2 \sin(\omega/2)}{\omega} e^{-i\omega/2}$. Let's call this $G_2(\omega)$.

Now, using the linearity property for $f(t) = 2f_1(t) - f_2(t)$:
$\mathcal{F}\{f(t)\} = \mathcal{F}\{2f_1(t) - f_2(t)\} = 2 \mathcal{F}\{f_1(t)\} - \mathcal{F}\{f_2(t)\}$
$\mathcal{F}\{f(t)\} = 2 G_1(\omega) - G_2(\omega)$
$\mathcal{F}\{f(t)\} = 2 \left( 4 \frac{\sin(\omega)}{\omega} \right) - \frac{2 \sin(\omega/2)}{\omega} e^{-i\omega/2}$
$\mathcal{F}\{f(t)\} = \frac{8 \sin(\omega)}{\omega} - \frac{2 \sin(\omega/2)}{\omega} e^{-i\omega/2}$

**Example 2: Fourier Transform of a Scaled and Shifted Cosine Wave**

Let $f(t) = 5 \cos(2t - \pi/4)$.
We know that $\cos(\theta) = \frac{e^{i\theta} + e^{-i\theta}}{2}$.
So, $f(t) = 5 \frac{e^{i(2t - \pi/4)} + e^{-i(2t - \pi/4)}}{2} = \frac{5}{2} (e^{i(2t - \pi/4)} + e^{-i(2t - \pi/4)})$.

We know the Fourier Transform of a complex exponential: $\mathcal{F}\{e^{i\alpha t}\} = 2\pi \delta(\omega - \alpha)$.
Let's use this definition.

For the first term: $5/2 \cdot e^{i(2t - \pi/4)} = 5/2 \cdot e^{-i\pi/4} \cdot e^{i2t}$.
Using linearity and the transform of $e^{i\alpha t}$:
$\mathcal{F}\{5/2 \cdot e^{-i\pi/4} \cdot e^{i2t}\} = (5/2 \cdot e^{-i\pi/4}) \mathcal{F}\{e^{i2t}\} = (5/2 \cdot e^{-i\pi/4}) (2\pi \delta(\omega - 2))$.

For the second term: $5/2 \cdot e^{-i(2t - \pi/4)} = 5/2 \cdot e^{i\pi/4} \cdot e^{-i2t}$.
$\mathcal{F}\{5/2 \cdot e^{i\pi/4} \cdot e^{-i2t}\} = (5/2 \cdot e^{i\pi/4}) \mathcal{F}\{e^{-i2t}\} = (5/2 \cdot e^{i\pi/4}) (2\pi \delta(\omega - (-2)))$.
$\mathcal{F}\{5/2 \cdot e^{i\pi/4} \cdot e^{-i2t}\} = (5/2 \cdot e^{i\pi/4}) (2\pi \delta(\omega + 2))$.

Combining both using linearity:
$\mathcal{F}\{5 \cos(2t - \pi/4)\} = (5/2 \cdot e^{-i\pi/4}) (2\pi \delta(\omega - 2)) + (5/2 \cdot e^{i\pi/4}) (2\pi \delta(\omega + 2))$
$= 5\pi e^{-i\pi/4} \delta(\omega - 2) + 5\pi e^{i\pi/4} \delta(\omega + 2)$.

*Alternative approach using cosine transform:*
The Fourier Transform of $\cos(\omega_0 t)$ is $\pi [\delta(\omega - \omega_0) + \delta(\omega + \omega_0)]$.
If we use the form $f(t) = A \cos(\omega_0 t + \phi)$, its transform is $A \pi [\delta(\omega - \omega_0) e^{i\phi} + \delta(\omega + \omega_0) e^{-i\phi}]$.

Here, $A=5$, $\omega_0=2$, and $\phi = -\pi/4$.
$\mathcal{F}\{5 \cos(2t - \pi/4)\} = 5\pi [\delta(\omega - 2) e^{i(-\pi/4)} + \delta(\omega + 2) e^{-i(-\pi/4)}]$
$= 5\pi [\delta(\omega - 2) e^{-i\pi/4} + \delta(\omega + 2) e^{i\pi/4}]$.
This matches the previous result.

---

### Practice Questions/Exercises

1.  **State the linearity property of the Fourier Integral.**
2.  Let $f_1(t)$ be a function with Fourier Transform $F_1(\omega) = e^{-\omega^2}$. Let $f_2(t)$ be a function with Fourier Transform $F_2(\omega) = \text{rect}(\omega/2)$. Find the Fourier Transform of $g(t) = 3f_1(t) - 2f_2(t)$.
3.  Find the Fourier Transform of the signal $s(t) = 2 e^{-3t} u(t) - 4 e^{-t} u(t)$, where $u(t)$ is the unit step function.
    *   Hint: Recall $\mathcal{F}\{e^{-at} u(t)\} = \frac{1}{a+i\omega}$ for $a>0$.
4.  Find the Fourier Transform of $x(t) = \sin(\omega_0 t)$.
    *   Hint: $\sin(\theta) = \frac{e^{i\theta} - e^{-i\theta}}{2i}$.

---

### Answers to Exercises

1.  **Answer:** The linearity property of the Fourier Integral states that for any functions $f_1(t)$ and $f_2(t)$ with Fourier Transforms $F_1(\omega)$ and $F_2(\omega)$ respectively, and for any constants $a$ and $b$, the Fourier Transform of $a f_1(t) + b f_2(t)$ is given by $a F_1(\omega) + b F_2(\omega)$.
    $$
    \mathcal{F}\{a f_1(t) + b f_2(t)\} = a F_1(\omega) + b F_2(\omega)
    $$

2.  **Answer:**
    Using the linearity property:
    $\mathcal{F}\{g(t)\} = \mathcal{F}\{3f_1(t) - 2f_2(t)\}$
    $= 3 \mathcal{F}\{f_1(t)\} - 2 \mathcal{F}\{f_2(t)\}$
    $= 3 F_1(\omega) - 2 F_2(\omega)$
    $= 3 e^{-\omega^2} - 2 \text{rect}(\omega/2)$

3.  **Answer:**
    Let $f_1(t) = e^{-3t} u(t)$ and $f_2(t) = e^{-t} u(t)$.
    We are given the transform of $e^{-at} u(t)$ is $\frac{1}{a+i\omega}$.
    So, $\mathcal{F}\{f_1(t)\} = \mathcal{F}\{e^{-3t} u(t)\} = \frac{1}{3+i\omega}$.
    And, $\mathcal{F}\{f_2(t)\} = \mathcal{F}\{e^{-t} u(t)\} = \frac{1}{1+i\omega}$.

    Using the linearity property for $s(t) = 2f_1(t) - 4f_2(t)$:
    $\mathcal{F}\{s(t)\} = 2 \mathcal{F}\{f_1(t)\} - 4 \mathcal{F}\{f_2(t)\}$
    $= 2 \left(\frac{1}{3+i\omega}\right) - 4 \left(\frac{1}{1+i\omega}\right)$
    $= \frac{2}{3+i\omega} - \frac{4}{1+i\omega}$

4.  **Answer:**
    We use the identity $\sin(\omega_0 t) = \frac{e^{i\omega_0 t} - e^{-i\omega_0 t}}{2i}$.
    Using the linearity property and the transform of $e^{i\alpha t}$, which is $2\pi \delta(\omega - \alpha)$:
    $\mathcal{F}\{\sin(\omega_0 t)\} = \mathcal{F}\left\{\frac{e^{i\omega_0 t} - e^{-i\omega_0 t}}{2i}\right\}$
    $= \frac{1}{2i} \left( \mathcal{F}\{e^{i\omega_0 t}\} - \mathcal{F}\{e^{-i\omega_0 t}\} \right)$
    $= \frac{1}{2i} \left( 2\pi \delta(\omega - \omega_0) - 2\pi \delta(\omega - (-\omega_0)) \right)$
    $= \frac{2\pi}{2i} \left( \delta(\omega - \omega_0) - \delta(\omega + \omega_0) \right)$
    $= \frac{\pi}{i} \left( \delta(\omega - \omega_0) - \delta(\omega + \omega_0) \right)$
    $= -i\pi \left( \delta(\omega - \omega_0) - \delta(\omega + \omega_0) \right)$
    $= i\pi \left( \delta(\omega + \omega_0) - \delta(\omega - \omega_0) \right)$.

---

### Important Points to Remember

*   **Fundamental Property:** Linearity is a cornerstone property of many integral transforms, including the Fourier Integral.
*   **Superposition Principle:** The linearity property directly reflects the superposition principle, meaning that the response of a system to a sum of inputs is the sum of the responses to each individual input.
*   **Frequency Domain Analysis:** This property is indispensable for analyzing signals and systems in the frequency domain. It allows for breaking down complex signals into simpler components whose transforms are known.
*   **LTI Systems:** Linearity is essential for understanding how LTI systems operate on signals. The Fourier Transform is a powerful tool for analyzing these systems because it simplifies the convolution operation into multiplication in the frequency domain.
*   **Convention Matters:** Be mindful of the convention used for the Fourier Transform (especially the scaling factor $\frac{1}{\sqrt{2\pi}}$), as it can affect intermediate results but not the fundamental properties like linearity.

---
