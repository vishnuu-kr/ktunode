---
title: "Linearity"
subject: "MATHEMATICS FOR ELECTRICAL SCIENCE AND PHYSICAL SCIENCE – 3"
module: "Module 1: Fourier Integral"
branch: "Electrical and Electronics Engineering"
semester: 3
topicId: "68a200832b85456187f35a5c"
status: "completed"
scrapedAt: "2026-05-23T16:14:25.681Z"
---
# MATHEMATICS FOR ELECTRICAL SCIENCE AND PHYSICAL SCIENCE – 3

## Module 1: Fourier Integral

### Topic: Linearity

**Learning Outcomes:**

*   Understand the fundamental properties of Fourier transforms, particularly the linearity property.
*   Apply the linearity property to simplify Fourier transform calculations for linear combinations of functions.
*   Recognize the importance of the linearity property in analyzing signals and systems in electrical and physical sciences.

**Course Outcomes Addressed:**

*   **CO1: Determine the Fourier transforms of functions and apply them to solve problems arising in engineering.** (Knowledge Level: K3) - The linearity property is a fundamental tool for determining Fourier transforms of more complex functions, which is directly applicable to engineering problems.

---

### 1. Introduction to Fourier Integrals and Transforms

Before delving into the linearity property, it's crucial to have a foundational understanding of Fourier Integrals and Transforms.

*   **Fourier Integral Theorem:** For a function $f(x)$ that is absolutely integrable over $(-\infty, \infty)$ and has a finite number of discontinuities, it can be represented by an integral of sines and cosines.
    $$f(x) = \frac{1}{\pi} \int_0^\infty \int_{-\infty}^\infty f(t) \cos(\omega(x-t)) dt d\omega$$
    (Kreyszig, 10th ed., Chapter 11.5)

*   **Fourier Transform:** The Fourier transform of a function $f(x)$ is defined as:
    $$\mathcal{F}\{f(x)\} = F(\omega) = \int_{-\infty}^\infty f(x) e^{-i\omega x} dx$$
    (Kreyszig, 10th ed., Chapter 11.5)

*   **Inverse Fourier Transform:** The function $f(x)$ can be recovered from its Fourier transform $F(\omega)$ using the inverse Fourier transform:
    $$f(x) = \mathcal{F}^{-1}\{F(\omega)\} = \frac{1}{2\pi} \int_{-\infty}^\infty F(\omega) e^{i\omega x} d\omega$$
    (Kreyszig, 10th ed., Chapter 11.5)

**Key Concept:** The Fourier transform converts a function from the time (or spatial) domain to the frequency domain, allowing for analysis of its frequency components.

---

### 2. The Linearity Property of Fourier Transforms

The linearity property is one of the most fundamental and useful properties of Fourier transforms. It states that the Fourier transform of a linear combination of functions is the linear combination of their individual Fourier transforms.

**Definition:**
If $f(x)$ and $g(x)$ are functions for which their Fourier transforms exist, and $a$ and $b$ are constants, then the Fourier transform of $a f(x) + b g(x)$ is given by:

$$\mathcal{F}\{a f(x) + b g(x)\} = a F(\omega) + b G(\omega)$$

where $F(\omega) = \mathcal{F}\{f(x)\}$ and $G(\omega) = \mathcal{F}\{g(x)\}$.

**Proof:**
We can derive this property directly from the definition of the Fourier transform:

$$
\mathcal{F}\{a f(x) + b g(x)\} = \int_{-\infty}^\infty (a f(x) + b g(x)) e^{-i\omega x} dx
$$

Using the linearity of integration:

$$
= \int_{-\infty}^\infty a f(x) e^{-i\omega x} dx + \int_{-\infty}^\infty b g(x) e^{-i\omega x} dx
$$

Factoring out the constants:

$$
= a \int_{-\infty}^\infty f(x) e^{-i\omega x} dx + b \int_{-\infty}^\infty g(x) e^{-i\omega x} dx
$$

By the definition of the Fourier transform, the integrals are $F(\omega)$ and $G(\omega)$ respectively:

$$
= a F(\omega) + b G(\omega)
$$

This proves the linearity property.

(Kreyszig, 10th ed., Chapter 11.6, Properties of Fourier Transforms)
(Ramana, 39th ed., Chapter 50, Fourier Transforms)
(Grewal, 44th ed., Chapter 40, Fourier Transforms)

**Importance in Engineering:**
The linearity property is critical for analyzing systems that respond linearly to inputs. In electrical circuits, for example, if a system has a linear response, the response to a sum of input signals is the sum of the responses to each individual signal. The Fourier transform allows us to analyze these signals in the frequency domain, and the linearity property ensures that this analysis can be done component by component. This aligns directly with **CO1**.

---

### 3. Applications and Examples of Linearity

The linearity property greatly simplifies the process of finding Fourier transforms for functions that are combinations of simpler, known functions.

**Example 1: Fourier Transform of a Rectangular Pulse and its Scaled/Shifted Version**

Let $f(x)$ be a rectangular pulse:
$$f(x) = \begin{cases} 1 & \text{if } |x| \le a \\ 0 & \text{if } |x| > a \end{cases}$$
Its Fourier transform is known to be:
$$F(\omega) = \int_{-a}^a 1 \cdot e^{-i\omega x} dx = \left[\frac{e^{-i\omega x}}{-i\omega}\right]_{-a}^a = \frac{e^{-i\omega a} - e^{i\omega a}}{-i\omega} = \frac{2(\cos(\omega a) - 1)}{-i\omega} = \frac{2i(\cos(\omega a) - 1)}{\omega}$$
Using the identity $1 - \cos(\theta) = 2\sin^2(\theta/2)$:
$$F(\omega) = \frac{2i(-2\sin^2(\omega a/2))}{\omega} = \frac{-4i \sin^2(\omega a/2)}{\omega}$$
A more common form uses $\text{sinc}(x) = \sin(x)/x$:
$$F(\omega) = \int_{-a}^a e^{-i\omega x} dx = \left[\frac{e^{-i\omega x}}{-i\omega}\right]_{-a}^a = \frac{e^{-i\omega a} - e^{i\omega a}}{-i\omega} = \frac{2\sin(\omega a)}{\omega} = 2a \text{sinc}(\omega a)$$

Now, consider a scaled version of the rectangular pulse, say $g(x) = c f(x)$, where $c$ is a constant.
Using linearity:
$$\mathcal{F}\{g(x)\} = \mathcal{F}\{c f(x)\} = c \mathcal{F}\{f(x)\} = c F(\omega)$$
So, the Fourier transform of a scaled rectangular pulse is simply the scaled Fourier transform of the original pulse.

Let's consider another function $h(x) = f(x-x_0)$, a shifted rectangular pulse. While linearity doesn't directly handle shifts, it's often used in conjunction with other properties. However, if we consider a combination like $k(x) = c_1 f(x) + c_2 f(x-x_0)$, we can find its Fourier transform as:
$$\mathcal{F}\{k(x)\} = c_1 \mathcal{F}\{f(x)\} + c_2 \mathcal{F}\{f(x-x_0)\}$$
We would then need the shift property to find $\mathcal{F}\{f(x-x_0)\}$. The linearity property ensures that we can handle the scaling and summation of the transformed components.

**Example 2: Fourier Transform of a Sum of Exponential Signals**

Consider the function $f(t) = A_1 e^{-a_1 t}u(t) + A_2 e^{-a_2 t}u(t)$, where $u(t)$ is the unit step function and $a_1, a_2 > 0$.
We know the Fourier transform of $e^{-at}u(t)$ is $\frac{1}{a+i\omega}$.
Using the linearity property:
$$\mathcal{F}\{f(t)\} = \mathcal{F}\{A_1 e^{-a_1 t}u(t) + A_2 e^{-a_2 t}u(t)\}$$
$$= A_1 \mathcal{F}\{e^{-a_1 t}u(t)\} + A_2 \mathcal{F}\{e^{-a_2 t}u(t)\}$$
$$= A_1 \left(\frac{1}{a_1+i\omega}\right) + A_2 \left(\frac{1}{a_2+i\omega}\right)$$

This is a direct application of the linearity property, making the calculation straightforward. This is highly relevant to **CO1**.

**Example 3: Fourier Transform of a Differentiated Signal (combined with linearity)**

While linearity doesn't directly deal with differentiation, it's used when the function itself is a linear combination of differentiated terms. For example, consider finding the Fourier transform of $f(t) = \frac{d}{dt} (e^{-at}u(t))$.
We know the differentiation property: $\mathcal{F}\{\frac{df}{dt}\} = i\omega F(\omega)$.
So, $\mathcal{F}\{\frac{d}{dt}(e^{-at}u(t))\} = i\omega \mathcal{F}\{e^{-at}u(t)\} = i\omega \left(\frac{1}{a+i\omega}\right)$.

Now, if we want to find the Fourier transform of $g(t) = 3 \frac{d}{dt}(e^{-a_1 t}u(t)) - 2 \frac{d}{dt}(e^{-a_2 t}u(t))$, we can use linearity:
$$\mathcal{F}\{g(t)\} = 3 \mathcal{F}\{\frac{d}{dt}(e^{-a_1 t}u(t))\} - 2 \mathcal{F}\{\frac{d}{dt}(e^{-a_2 t}u(t))\}$$
$$= 3 \left(i\omega \frac{1}{a_1+i\omega}\right) - 2 \left(i\omega \frac{1}{a_2+i\omega}\right)$$
This shows how linearity combines with other properties.

---

### 4. Practice Questions

**Question 1:**
If $F(\omega)$ is the Fourier transform of $f(x)$, what is the Fourier transform of $3f(x) - 5f(x)$?

**Answer 1:**
Using the linearity property:
$\mathcal{F}\{3f(x) - 5f(x)\} = \mathcal{F}\{-2f(x)\}$
$= -2 \mathcal{F}\{f(x)\}$
$= -2 F(\omega)$

**Question 2:**
Let $f(x) = \text{rect}(x/2)$ (a rectangular pulse of width 2 centered at 0) and $g(x) = \text{rect}((x-1)/3)$ (a rectangular pulse of width 3 centered at 1). Find the Fourier transform of $h(x) = 2f(x) + 4g(x)$.

**Answer 2:**
We know that $\mathcal{F}\{\text{rect}(x/a)\} = a \text{sinc}(a\omega/2)$.
So, $\mathcal{F}\{f(x)\} = \mathcal{F}\{\text{rect}(x/2)\} = 2 \text{sinc}(2\omega/2) = 2 \text{sinc}(\omega)$.
The Fourier transform of $g(x) = \text{rect}((x-1)/3)$ is $\mathcal{F}\{g(x)\} = 3 \text{sinc}(3\omega/2)$.
Using the linearity property for $h(x) = 2f(x) + 4g(x)$:
$\mathcal{F}\{h(x)\} = \mathcal{F}\{2f(x) + 4g(x)\}$
$= 2 \mathcal{F}\{f(x)\} + 4 \mathcal{F}\{g(x)\}$
$= 2 (2 \text{sinc}(\omega)) + 4 (3 \text{sinc}(3\omega/2))$
$= 4 \text{sinc}(\omega) + 12 \text{sinc}(3\omega/2)$

**Question 3:**
Given that the Fourier transform of $e^{-|x|}$ is $\frac{2}{1+\omega^2}$, find the Fourier transform of $f(x) = 5e^{-|x|} + 2e^{-|x-3|}$.

**Answer 3:**
Let $g(x) = e^{-|x|}$. We are given $\mathcal{F}\{g(x)\} = \frac{2}{1+\omega^2}$.
The function $f(x)$ is $5g(x) + 2g(x-3)$.
Using the linearity property:
$\mathcal{F}\{f(x)\} = \mathcal{F}\{5g(x) + 2g(x-3)\}$
$= 5 \mathcal{F}\{g(x)\} + 2 \mathcal{F}\{g(x-3)\}$
We know $\mathcal{F}\{g(x)\} = \frac{2}{1+\omega^2}$.
The shift property states $\mathcal{F}\{g(x-x_0)\} = e^{-i\omega x_0} G(\omega)$.
So, $\mathcal{F}\{g(x-3)\} = e^{-i\omega 3} \left(\frac{2}{1+\omega^2}\right)$.
Therefore,
$\mathcal{F}\{f(x)\} = 5 \left(\frac{2}{1+\omega^2}\right) + 2 \left(e^{-i3\omega} \frac{2}{1+\omega^2}\right)$
$= \frac{10}{1+\omega^2} + \frac{4e^{-i3\omega}}{1+\omega^2}$
$= \frac{10 + 4e^{-i3\omega}}{1+\omega^2}$

---

### 5. Important Points to Remember

*   **Definition of Fourier Transform:** Understand the integral definition $\mathcal{F}\{f(x)\} = F(\omega) = \int_{-\infty}^\infty f(x) e^{-i\omega x} dx$.
*   **Core of Linearity:** The Fourier transform of a linear combination of functions is the linear combination of their individual Fourier transforms: $\mathcal{F}\{a f(x) + b g(x)\} = a F(\omega) + b G(\omega)$.
*   **Applicability:** This property holds for any linear combination of functions whose Fourier transforms exist.
*   **Simplification:** Linearity is a powerful tool for simplifying the calculation of Fourier transforms for complex signals by breaking them down into simpler, known components.
*   **Foundation for Other Properties:** Linearity is often used in conjunction with other Fourier transform properties (like scaling, shifting, differentiation, convolution) to solve more complex problems.
*   **System Analysis:** In linear systems, the output is a linear combination of the inputs. The linearity property of Fourier transforms directly translates to the frequency-domain analysis of such systems. This directly supports **CO1**.

---

### 6. Connection to Course Outcomes

*   **CO1: Determine the Fourier transforms of functions and apply them to solve problems arising in engineering.** (Knowledge Level: K3)
    *   The linearity property is a primary method for determining Fourier transforms of functions that are sums or scalar multiples of simpler functions, which are ubiquitous in engineering signal analysis. By understanding and applying linearity, students can derive Fourier transforms for composite signals and use these transforms to solve engineering problems related to signal processing, system analysis, and communication.

---

This concludes the notes on the Linearity property of Fourier Integrals. Remember to practice these concepts with different types of functions to solidify your understanding.
