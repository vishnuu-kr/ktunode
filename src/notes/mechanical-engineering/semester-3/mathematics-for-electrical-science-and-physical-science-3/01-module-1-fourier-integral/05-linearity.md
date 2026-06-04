---
title: "Linearity"
subject: "MATHEMATICS FOR ELECTRICAL SCIENCE AND PHYSICAL SCIENCE – 3"
module: "Module 1: Fourier Integral"
branch: "Mechanical Engineering"
semester: 3
topicId: "68a3fd1251d0cf4804462c96"
status: "completed"
scrapedAt: "2026-05-20T17:50:33.687Z"
---
# Mathematics for Electrical Science and Physical Science – 3

## Module 1: Fourier Integral

### Topic: Linearity of the Fourier Integral

---

### 1. Introduction to Fourier Integrals

Before delving into the linearity property, it's crucial to understand the foundation of Fourier Integrals. Fourier integrals provide a way to represent a non-periodic function as a superposition (integral) of complex exponentials, analogous to how Fourier series represent periodic functions as a sum of sines and cosines.

**Key Concept:** The Fourier integral of a function $f(x)$ is defined as:

$$
F(\omega) = \mathcal{F}[f(x)] = \frac{1}{\sqrt{2\pi}} \int_{-\infty}^{\infty} f(x) e^{-i\omega x} dx
$$

This $F(\omega)$ is known as the **Fourier transform** of $f(x)$. The inverse Fourier transform is given by:

$$
f(x) = \mathcal{F}^{-1}[F(\omega)] = \frac{1}{\sqrt{2\pi}} \int_{-\infty}^{\infty} F(\omega) e^{i\omega x} d\omega
$$

*   **Note:** Different conventions exist for the $1/\sqrt{2\pi}$ factor. Some definitions place it on the inverse transform, or split it between both. The definition used here is common in engineering and physics. For detailed discussion on these conventions, refer to **Kreyszig's Advanced Engineering Mathematics** (Chapter 11, Section 11.1).

---

### 2. The Linearity Property of Fourier Integrals

The linearity property is a fundamental characteristic of linear transformations. In the context of Fourier integrals, it states that the Fourier transform of a linear combination of functions is the linear combination of their individual Fourier transforms. This property is incredibly useful for simplifying the computation of Fourier transforms for more complex functions.

**Key Concept:** For any two functions $f_1(x)$ and $f_2(x)$ and any constants $a$ and $b$, the Fourier transform of $a f_1(x) + b f_2(x)$ is given by:

$$
\mathcal{F}[a f_1(x) + b f_2(x)] = a \mathcal{F}[f_1(x)] + b \mathcal{F}[f_2(x)]
$$

**Derivation of the Linearity Property:**

Let $f(x) = a f_1(x) + b f_2(x)$.
The Fourier transform of $f(x)$ is:

$$
\mathcal{F}[f(x)] = \frac{1}{\sqrt{2\pi}} \int_{-\infty}^{\infty} f(x) e^{-i\omega x} dx
$$

Substitute $f(x) = a f_1(x) + b f_2(x)$:

$$
\mathcal{F}[a f_1(x) + b f_2(x)] = \frac{1}{\sqrt{2\pi}} \int_{-\infty}^{\infty} (a f_1(x) + b f_2(x)) e^{-i\omega x} dx
$$

Using the properties of integration (linearity of the integral):

$$
\mathcal{F}[a f_1(x) + b f_2(x)] = \frac{1}{\sqrt{2\pi}} \left( \int_{-\infty}^{\infty} a f_1(x) e^{-i\omega x} dx + \int_{-\infty}^{\infty} b f_2(x) e^{-i\omega x} dx \right)
$$

Now, factor out the constants $a$ and $b$:

$$
\mathcal{F}[a f_1(x) + b f_2(x)] = a \left( \frac{1}{\sqrt{2\pi}} \int_{-\infty}^{\infty} f_1(x) e^{-i\omega x} dx \right) + b \left( \frac{1}{\sqrt{2\pi}} \int_{-\infty}^{\infty} f_2(x) e^{-i\omega x} dx \right)
$$

Recognizing the terms in the parentheses as the Fourier transforms of $f_1(x)$ and $f_2(x)$ respectively:

$$
\mathcal{F}[a f_1(x) + b f_2(x)] = a \mathcal{F}[f_1(x)] + b \mathcal{F}[f_2(x)]
$$

This confirms the linearity property. This property is directly applicable to **CO1: Determine the Fourier transforms of functions and apply them to solve problems arising in engineering.** By breaking down complex functions into simpler ones whose Fourier transforms are known, we can efficiently find the Fourier transform of the complex function.

---

### 3. Examples Illustrating Linearity

Let's illustrate the linearity property with some examples.

**Example 1: Fourier Transform of a Constant Multiple of a Function**

Let $f(x) = c \cdot g(x)$, where $c$ is a constant.
Using the linearity property with $a=c$ and $b=0$ (or just considering the case where $b=0$):

$$
\mathcal{F}[c \cdot g(x)] = c \cdot \mathcal{F}[g(x)]
$$

*   **Specific Case:** If $g(x) = e^{-ax^2}$ (Gaussian function) with $a>0$, its Fourier transform is $\mathcal{F}[e^{-ax^2}] = \frac{1}{\sqrt{2a}} e^{-\omega^2/(4a)}$.
    Then, the Fourier transform of $c \cdot e^{-ax^2}$ is:
    $$
    \mathcal{F}[c \cdot e^{-ax^2}] = c \cdot \frac{1}{\sqrt{2a}} e^{-\omega^2/(4a)}
    $$

**Example 2: Fourier Transform of a Sum of Two Functions**

Let $f(x) = f_1(x) + f_2(x)$.
Using the linearity property with $a=1$ and $b=1$:

$$
\mathcal{F}[f_1(x) + f_2(x)] = \mathcal{F}[f_1(x)] + \mathcal{F}[f_2(x)]
$$

*   **Specific Case:** Find the Fourier transform of $f(x) = \text{rect}(x-1) + \text{rect}(x+1)$, where $\text{rect}(x)$ is the rectangular pulse function defined as:
    $$
    \text{rect}(x) = \begin{cases} 1 & \text{if } |x| \le 1/2 \\ 0 & \text{otherwise} \end{cases}
    $$
    The Fourier transform of $\text{rect}(x)$ is known to be $\sqrt{\frac{2}{\pi}} \text{sinc}(\omega/2)$, where $\text{sinc}(u) = \frac{\sin(\pi u)}{\pi u}$.
    We also know that $\mathcal{F}[g(x-x_0)] = e^{-i\omega x_0} \mathcal{F}[g(x)]$ (time shift property, which we will cover in later topics but is useful here).
    So, $\mathcal{F}[\text{rect}(x-1)] = e^{-i\omega} \mathcal{F}[\text{rect}(x)] = e^{-i\omega} \sqrt{\frac{2}{\pi}} \text{sinc}(\omega/2)$.
    And, $\mathcal{F}[\text{rect}(x+1)] = e^{i\omega} \mathcal{F}[\text{rect}(x)] = e^{i\omega} \sqrt{\frac{2}{\pi}} \text{sinc}(\omega/2)$.
    Using linearity:
    $$
    \mathcal{F}[\text{rect}(x-1) + \text{rect}(x+1)] = \mathcal{F}[\text{rect}(x-1)] + \mathcal{F}[\text{rect}(x+1)]
    $$
    $$
    = e^{-i\omega} \sqrt{\frac{2}{\pi}} \text{sinc}(\omega/2) + e^{i\omega} \sqrt{\frac{2}{\pi}} \text{sinc}(\omega/2)
    $$
    $$
    = \sqrt{\frac{2}{\pi}} \text{sinc}(\omega/2) (e^{-i\omega} + e^{i\omega})
    $$
    Using Euler's formula, $e^{i\theta} + e^{-i\theta} = 2\cos(\theta)$:
    $$
    = \sqrt{\frac{2}{\pi}} \text{sinc}(\omega/2) (2\cos(\omega))
    $$
    $$
    = 2\sqrt{\frac{2}{\pi}} \cos(\omega) \text{sinc}(\omega/2)
    $$

**Example 3: Fourier Transform of a Linear Combination**

Find the Fourier transform of $f(x) = 2e^{-|x|} - 3e^{-2|x|}$.
We know that $\mathcal{F}[e^{-a|x|}] = \sqrt{\frac{2}{\pi}} \frac{a}{\omega^2 + a^2}$ for $a>0$.

Using the linearity property:
$$
\mathcal{F}[2e^{-|x|} - 3e^{-2|x|}] = 2 \mathcal{F}[e^{-|x|}] - 3 \mathcal{F}[e^{-2|x|}]
$$

Here, for the first term, $a=1$. For the second term, $a=2$.
$$
= 2 \left( \sqrt{\frac{2}{\pi}} \frac{1}{\omega^2 + 1^2} \right) - 3 \left( \sqrt{\frac{2}{\pi}} \frac{2}{\omega^2 + 2^2} \right)
$$
$$
= \sqrt{\frac{2}{\pi}} \left( \frac{2}{\omega^2 + 1} - \frac{6}{\omega^2 + 4} \right)
$$

*   **Reference:** This property is extensively covered in **Kreyszig's Advanced Engineering Mathematics** (Chapter 11, Section 11.2) and **Ramana's Higher Engineering Mathematics** (Chapter 38, Section 38.5).

---

### 4. Learning Outcomes Covered

*   **CO1: Determine the Fourier transforms of functions and apply them to solve problems arising in engineering.**
    *   The linearity property is a cornerstone for determining Fourier transforms of complex functions by decomposing them into simpler, known functions. This directly aids in solving engineering problems where signals and systems are often represented as combinations of basic waveforms.

---

### 5. Important Points to Remember

*   The linearity property holds for both the Fourier transform and the inverse Fourier transform.
*   It simplifies computations significantly.
*   It is a direct consequence of the integral definition of the Fourier transform and the linearity property of integration.
*   This property, along with others like the time-shift, frequency-shift, and differentiation properties, forms a powerful toolkit for Fourier transform analysis.

---

### 6. Practice Questions/Exercises

**Question 1:** Using the linearity property, find the Fourier transform of the function $f(x) = 5 \sin(kx) e^{-ax^2}$, where $a>0$ and $k$ is a constant. (You may use the Fourier transform of $e^{-ax^2}$ and knowledge of trigonometric identities).

**Solution 1:**
We know that $\sin(kx) = \frac{e^{ikx} - e^{-ikx}}{2i}$.
So, $f(x) = 5 \left( \frac{e^{ikx} - e^{-ikx}}{2i} \right) e^{-ax^2} = \frac{5}{2i} (e^{ikx} e^{-ax^2} - e^{-ikx} e^{-ax^2})$.
Using the frequency-shift property: $\mathcal{F}[e^{i\omega_0 x} g(x)] = G(\omega - \omega_0)$, where $G(\omega) = \mathcal{F}[g(x)]$.
We know $\mathcal{F}[e^{-ax^2}] = \frac{1}{\sqrt{2a}} e^{-\omega^2/(4a)}$.
So, $\mathcal{F}[e^{ikx} e^{-ax^2}] = \frac{1}{\sqrt{2a}} e^{-(\omega-k)^2/(4a)}$.
And $\mathcal{F}[e^{-ikx} e^{-ax^2}] = \frac{1}{\sqrt{2a}} e^{-(\omega+k)^2/(4a)}$.

Using linearity:
$$
\mathcal{F}[f(x)] = \frac{5}{2i} \left( \mathcal{F}[e^{ikx} e^{-ax^2}] - \mathcal{F}[e^{-ikx} e^{-ax^2}] \right)
$$
$$
= \frac{5}{2i} \left( \frac{1}{\sqrt{2a}} e^{-(\omega-k)^2/(4a)} - \frac{1}{\sqrt{2a}} e^{-(\omega+k)^2/(4a)} \right)
$$
$$
= \frac{5}{2i\sqrt{2a}} \left( e^{-(\omega-k)^2/(4a)} - e^{-(\omega+k)^2/(4a)} \right)
$$

**Question 2:** Find the Fourier transform of $f(x) = \text{rect}(x/2) - 2\text{rect}(x-1)$.

**Solution 2:**
We know $\mathcal{F}[\text{rect}(x)] = \sqrt{\frac{2}{\pi}} \text{sinc}(\omega/2)$.
Using the scaling property: $\mathcal{F}[g(ax)] = \frac{1}{|a|} G(\omega/a)$.
So, $\mathcal{F}[\text{rect}(x/2)] = \frac{1}{|1/2|} \mathcal{F}[\text{rect}(x)]|_{\omega \to \omega/(1/2)} = 2 \sqrt{\frac{2}{\pi}} \text{sinc}((\omega/2)/ (1/2)) = 2 \sqrt{\frac{2}{\pi}} \text{sinc}(\omega)$.

Using the time-shift property: $\mathcal{F}[g(x-x_0)] = e^{-i\omega x_0} \mathcal{F}[g(x)]$.
$\mathcal{F}[\text{rect}(x-1)] = e^{-i\omega} \mathcal{F}[\text{rect}(x)] = e^{-i\omega} \sqrt{\frac{2}{\pi}} \text{sinc}(\omega/2)$.

Using linearity:
$$
\mathcal{F}[\text{rect}(x/2) - 2\text{rect}(x-1)] = \mathcal{F}[\text{rect}(x/2)] - 2\mathcal{F}[\text{rect}(x-1)]
$$
$$
= 2 \sqrt{\frac{2}{\pi}} \text{sinc}(\omega) - 2 \left( e^{-i\omega} \sqrt{\frac{2}{\pi}} \text{sinc}(\omega/2) \right)
$$
$$
= 2 \sqrt{\frac{2}{\pi}} \left( \text{sinc}(\omega) - e^{-i\omega} \text{sinc}(\omega/2) \right)
$$

---
This concludes the notes on the linearity property of the Fourier Integral. This fundamental property is the first step in systematically analyzing signals and systems using Fourier transforms.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=p_di4ateumM) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=Kb3K1Ui4454) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=S0hG_mS9bV4) |
