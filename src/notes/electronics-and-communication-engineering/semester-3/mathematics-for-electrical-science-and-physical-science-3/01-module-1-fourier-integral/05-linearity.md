---
title: "Linearity"
subject: "MATHEMATICS FOR ELECTRICAL SCIENCE AND PHYSICAL SCIENCE – 3"
module: "Module 1: Fourier Integral"
branch: "Electronics and Communication Engineering"
semester: 3
topicId: "68a5c45db09ce205780fe253"
status: "completed"
scrapedAt: "2026-05-23T17:46:55.559Z"
---
# MATHEMATICS FOR ELECTRICAL SCIENCE AND PHYSICAL SCIENCE – 3

## Module 1: Fourier Integral

### Topic: Linearity

This topic focuses on the **linearity property of the Fourier Integral**, a fundamental concept for understanding how Fourier Transforms behave with respect to linear operations on functions. This property is crucial for simplifying the analysis of complex signals and systems in Electrical and Physical Sciences.

---

### 1. Introduction to Fourier Integral and Linearity

The Fourier Integral (or Fourier Transform) is a generalization of the Fourier Series, which decomposes a function into a continuous spectrum of frequencies. It is defined for functions that are not necessarily periodic.

**Definition of Fourier Integral (Fourier Transform):**

For a function $f(x)$ defined for $-\infty < x < \infty$, its Fourier Transform, denoted by $\mathcal{F}\{f(x)\}$ or $F(\omega)$, is given by:

$F(\omega) = \frac{1}{\sqrt{2\pi}} \int_{-\infty}^{\infty} f(x) e^{-i\omega x} dx$

The inverse Fourier Transform, which reconstructs the original function from its transform, is given by:

$f(x) = \frac{1}{\sqrt{2\pi}} \int_{-\infty}^{\infty} F(\omega) e^{i\omega x} d\omega$

The constant $\frac{1}{\sqrt{2\pi}}$ can be distributed differently between the forward and inverse transforms. Some conventions use $\frac{1}{2\pi}$ for the forward and 1 for the inverse, or 1 for the forward and $\frac{1}{2\pi}$ for the inverse. The choice of convention doesn't affect the underlying principles but is important for consistency within a particular context. We will primarily use the $\frac{1}{\sqrt{2\pi}}$ convention as seen in Kreyszig.

**Reference:**
*   **Kreyszig, E. (2016). *Advanced Engineering Mathematics* (10th ed.). John Wiley & Sons.** Chapter 11 covers Fourier Integrals and Transforms, detailing these definitions and properties.

---

### 2. The Linearity Property

The linearity property states that the Fourier Transform of a linear combination of two functions is equal to the same linear combination of their individual Fourier Transforms. This is a direct consequence of the linearity of integration.

**Statement of Linearity Property:**

Let $f(x)$ and $g(x)$ be two functions, and let $a$ and $b$ be constants. If their Fourier Transforms exist, then:

$\mathcal{F}\{af(x) + bg(x)\} = a\mathcal{F}\{f(x)\} + b\mathcal{F}\{g(x)\}$

In terms of the transform notation:

$F\left(\omega\right)[af(x) + bg(x)] = aF\left(\omega\right)[f(x)] + bF\left(\omega\right)[g(x)]$

**Derivation (using the definition):**

Consider the Fourier Transform of $af(x) + bg(x)$:

$\mathcal{F}\{af(x) + bg(x)\} = \frac{1}{\sqrt{2\pi}} \int_{-\infty}^{\infty} [af(x) + bg(x)] e^{-i\omega x} dx$

Using the linearity property of integration (the integral of a sum is the sum of the integrals, and constants can be pulled out of integrals):

$= \frac{1}{\sqrt{2\pi}} \int_{-\infty}^{\infty} af(x) e^{-i\omega x} dx + \frac{1}{\sqrt{2\pi}} \int_{-\infty}^{\infty} bg(x) e^{-i\omega x} dx$

$= a \left(\frac{1}{\sqrt{2\pi}} \int_{-\infty}^{\infty} f(x) e^{-i\omega x} dx\right) + b \left(\frac{1}{\sqrt{2\pi}} \int_{-\infty}^{\infty} g(x) e^{-i\omega x} dx\right)$

By the definition of the Fourier Transform, the terms in the parentheses are $\mathcal{F}\{f(x)\}$ and $\mathcal{F}\{g(x)\}$ respectively.

$= a\mathcal{F}\{f(x)\} + b\mathcal{F}\{g(x)\}$

This proves the linearity property.

**Reference:**
*   **Kreyszig, E. (2016). *Advanced Engineering Mathematics* (10th ed.). John Wiley & Sons.** This property is typically discussed early in the chapter on Fourier Transforms.
*   **Ramana, B. V. (2023). *Higher Engineering Mathematics* (39th ed.). McGraw-Hill Education.** Similar to Kreyszig, Ramana's text will also cover this fundamental property.

---

### 3. Importance and Applications of Linearity

The linearity property is fundamental in signal processing and system analysis. Many physical systems are linear, meaning that the response of the system to a sum of inputs is the sum of the responses to each input individually.

*   **Signal Decomposition:** If a complex signal can be represented as a sum of simpler signals (e.g., sum of sine waves), its Fourier Transform can be found by summing the Fourier Transforms of the simpler signals.
*   **System Analysis:** For a Linear Time-Invariant (LTI) system, if $f(x)$ is an input and $y(x)$ is the output, then for an input $af(x) + bg(x)$, the output is $ay(x) + b \text{shift}(g(x))$. The Fourier Transform simplifies the analysis of LTI systems by converting differential equations into algebraic equations. The output transform is the input transform multiplied by the system's frequency response. Linearity ensures that we can analyze the system's response to complex input signals by breaking them down into simpler components.
*   **Solving Differential Equations:** Fourier Transforms are powerful tools for solving linear ordinary and partial differential equations with constant coefficients. The linearity of the transform allows us to transform these equations into algebraic equations in the frequency domain, which are often easier to solve.

**Alignment with Course Outcomes:**

*   **CO1: Determine the Fourier transforms of functions and apply them to solve problems arising in engineering. (Knowledge Level: K3)**
    The linearity property is a core tool for determining Fourier Transforms of composite functions and applying them to engineering problems. For instance, if you need to find the Fourier Transform of a piecewise function that is a sum of simpler functions, you can use linearity.

---

### 4. Examples Illustrating Linearity

Let's consider some examples to demonstrate the linearity property.

**Example 1: Fourier Transform of a Scaled and Shifted Rectangular Pulse**

Let $f(x) = \text{rect}(x) = \begin{cases} 1 & \text{if } |x| \le 1/2 \\ 0 & \text{if } |x| > 1/2 \end{cases}$.
We know from standard tables or derivations that the Fourier Transform of $\text{rect}(x)$ is $\sqrt{\frac{\pi}{2}} \text{sinc}\left(\frac{\omega}{2}\right)$, where $\text{sinc}(u) = \frac{\sin(u)}{u}$.
Using our $\frac{1}{\sqrt{2\pi}}$ convention:
$F(\omega)[\text{rect}(x)] = \sqrt{\frac{\pi}{2}} \frac{\sin(\omega/2)}{\omega/2} = \sqrt{2\pi} \frac{\sin(\omega/2)}{\omega}$.

Now consider the function $g(x) = 3 \cdot \text{rect}(x) - 2 \cdot \text{rect}(x-1)$.
According to the linearity property:

$\mathcal{F}\{g(x)\} = \mathcal{F}\{3 \cdot \text{rect}(x) - 2 \cdot \text{rect}(x-1)\}$
$= 3 \mathcal{F}\{\text{rect}(x)\} - 2 \mathcal{F}\{\text{rect}(x-1)\}$

We know $\mathcal{F}\{\text{rect}(x)\} = \sqrt{2\pi} \frac{\sin(\omega/2)}{\omega}$.
To find $\mathcal{F}\{\text{rect}(x-1)\}$, we'd typically use the time-shifting property, but for demonstrating linearity itself, we can assume its transform is known or will be derived separately. The key here is the application of the *linearity* property.

So, $\mathcal{F}\{g(x)\} = 3 \left(\sqrt{2\pi} \frac{\sin(\omega/2)}{\omega}\right) - 2 \mathcal{F}\{\text{rect}(x-1)\}$.
If we also knew $\mathcal{F}\{\text{rect}(x-1)\} = e^{-i\omega} \sqrt{2\pi} \frac{\sin(\omega/2)}{\omega}$, then:

$\mathcal{F}\{g(x)\} = 3 \left(\sqrt{2\pi} \frac{\sin(\omega/2)}{\omega}\right) - 2 e^{-i\omega} \left(\sqrt{2\pi} \frac{\sin(\omega/2)}{\omega}\right)$
$= \sqrt{2\pi} \frac{\sin(\omega/2)}{\omega} (3 - 2e^{-i\omega})$.

**Example 2: Fourier Transform of a Sum of Exponential Functions**

Consider the function $f(x) = e^{-a|x|}$ for $a > 0$. Its Fourier Transform is known to be $\sqrt{\frac{2}{\pi}} \frac{a}{\omega^2 + a^2}$.

Now consider $g(x) = 2e^{-a|x|} + 3e^{-b|x|}$ for $a, b > 0$.
Using the linearity property:

$\mathcal{F}\{g(x)\} = \mathcal{F}\{2e^{-a|x|} + 3e^{-b|x|}\}$
$= 2 \mathcal{F}\{e^{-a|x|}\} + 3 \mathcal{F}\{e^{-b|x|}\}$
$= 2 \left(\sqrt{\frac{2}{\pi}} \frac{a}{\omega^2 + a^2}\right) + 3 \left(\sqrt{\frac{2}{\pi}} \frac{b}{\omega^2 + b^2}\right)$
$= \sqrt{\frac{2}{\pi}} \left(\frac{2a}{\omega^2 + a^2} + \frac{3b}{\omega^2 + b^2}\right)$.

**Reference:**
*   **Grewal, B. S. (2018). *Higher Engineering Mathematics* (44th ed.). Khanna Publishers.** Grewal's textbook provides numerous solved examples for Fourier Transforms, which will include applications of linearity.

---

### 5. Practice Questions and Exercises

**Question 1:**
Given that the Fourier Transform of the function $f(x) = e^{-x^2}$ is $F(\omega) = \frac{1}{2^{1/4}} e^{-\omega^2/4}$.
Find the Fourier Transform of $g(x) = 3e^{-x^2} - 5e^{-(x-2)^2}$.

**Solution 1:**
Using the linearity property:
$\mathcal{F}\{g(x)\} = \mathcal{F}\{3e^{-x^2} - 5e^{-(x-2)^2}\}$
$= 3 \mathcal{F}\{e^{-x^2}\} - 5 \mathcal{F}\{e^{-(x-2)^2}\}$

We are given $\mathcal{F}\{e^{-x^2}\} = \frac{1}{2^{1/4}} e^{-\omega^2/4}$.
We also know (or can derive) that the Fourier Transform of $e^{-(x-c)^2}$ is $e^{-i\omega c} \mathcal{F}\{e^{-x^2}\}$.
So, $\mathcal{F}\{e^{-(x-2)^2}\} = e^{-i\omega 2} \left(\frac{1}{2^{1/4}} e^{-\omega^2/4}\right)$.

Substituting these into the equation for $\mathcal{F}\{g(x)\}$:
$\mathcal{F}\{g(x)\} = 3 \left(\frac{1}{2^{1/4}} e^{-\omega^2/4}\right) - 5 e^{-2i\omega} \left(\frac{1}{2^{1/4}} e^{-\omega^2/4}\right)$
$= \frac{1}{2^{1/4}} e^{-\omega^2/4} (3 - 5e^{-2i\omega})$.

**Question 2:**
Let $f(x)$ be a function with Fourier Transform $F(\omega)$. What is the Fourier Transform of $h(x) = 2f(x) + 4f(x-a)$?

**Solution 2:**
Using the linearity property and the time-shifting property ($\mathcal{F}\{f(x-a)\} = e^{-i\omega a} F(\omega)$):
$\mathcal{F}\{h(x)\} = \mathcal{F}\{2f(x) + 4f(x-a)\}$
$= 2 \mathcal{F}\{f(x)\} + 4 \mathcal{F}\{f(x-a)\}$
$= 2 F(\omega) + 4 e^{-i\omega a} F(\omega)$
$= F(\omega) (2 + 4e^{-i\omega a})$.

**Question 3:**
If $\mathcal{F}\{\text{rect}(x)\} = \sqrt{2\pi} \text{sinc}(\omega/2)$, find the Fourier Transform of $j(x) = 5 \cdot \text{rect}(x) + 2 \cdot \text{rect}(x+3)$.

**Solution 3:**
Using the linearity property and the time-shifting property ($\mathcal{F}\{\text{rect}(x+a)\} = e^{i\omega a} \mathcal{F}\{\text{rect}(x)\}$):
$\mathcal{F}\{j(x)\} = \mathcal{F}\{5 \cdot \text{rect}(x) + 2 \cdot \text{rect}(x+3)\}$
$= 5 \mathcal{F}\{\text{rect}(x)\} + 2 \mathcal{F}\{\text{rect}(x+3)\}$
$= 5 (\sqrt{2\pi} \text{sinc}(\omega/2)) + 2 e^{i\omega 3} (\sqrt{2\pi} \text{sinc}(\omega/2))$
$= \sqrt{2\pi} \text{sinc}(\omega/2) (5 + 2e^{i\omega 3})$.

---

### 6. Important Points to Remember

*   **Linearity is a consequence of the linearity of integration.** This fundamental mathematical property is what makes the Fourier Transform linear.
*   **The linearity property applies to both the forward and inverse Fourier Transforms.** This means that if you have a sum of functions in the frequency domain, their inverse transforms can be found by summing their individual inverse transforms.
*   **The property holds for complex coefficients as well.** $a$ and $b$ can be complex numbers.
*   **The linearity property is distinct from other properties** like time-shifting, scaling, or differentiation, but it can be used in conjunction with them. For example, when finding the transform of a function that is a linear combination of shifted versions of another function.
*   **This property is crucial for understanding system behavior in signal processing.** It allows us to analyze the response of linear systems to complex inputs by breaking down the input into simpler components whose transforms are known.

---

### 7. Connection to Course Outcomes

This topic directly supports **CO1: Determine the Fourier transforms of functions and apply them to solve problems arising in engineering.**

*   **K3 (Knowledge Level):** By understanding and applying the linearity property, students can determine the Fourier transforms of composite functions that are formed by linear combinations of simpler functions. This is a direct application of knowledge.
*   **Application in Engineering:** As discussed in Section 3, linearity is fundamental to analyzing signals and systems in electrical and physical sciences. For instance, calculating the Fourier Transform of a signal that is a sum of two different waveforms or analyzing the output of a linear system subjected to a sum of inputs relies heavily on this property.

The other course outcomes (CO2, CO3, CO4) deal with complex analysis, which has its own set of properties and applications. While Fourier analysis often involves complex numbers and integration, the specific topic of "Linearity" within the Fourier Integral context primarily addresses the behavior of the transform operation itself with respect to linear combinations of functions.

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=p_di4ateumM) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=Kb3K1Ui4454) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=S0hG_mS9bV4) |


### 8. Further Reading and Advanced Topics (Brief Mention)

*   **Other Properties:** Beyond linearity, students should also familiarize themselves with other key Fourier Transform properties like time-shifting, frequency-shifting, time-scaling, frequency-scaling, differentiation (in time and frequency domains), convolution, and multiplication. These properties, combined with linearity, form a powerful toolkit for solving engineering problems.
*   **Discrete Fourier Transform (DFT) and Fast Fourier Transform (FFT):** While this module focuses on the continuous Fourier Integral, the linearity property extends to its discrete counterpart, the DFT. The FFT algorithms, which are highly efficient methods for computing the DFT, also leverage linearity and other properties of the transform.
*   **Applications in Physics:** In physics, Fourier Transforms are used extensively in areas like quantum mechanics (momentum representation), optics (diffraction patterns), and statistical mechanics. The linearity property simplifies the analysis of systems involving sums of states or forces.

**Reference:**
*   **Rao, K.R., Kim, D.N., & Hwang, J.J. (2011). *Fast Fourier Transform - Algorithms and Applications*. Springer.** This book provides insights into the practical implementation and applications of Fourier Transforms, where understanding properties like linearity is foundational.

---