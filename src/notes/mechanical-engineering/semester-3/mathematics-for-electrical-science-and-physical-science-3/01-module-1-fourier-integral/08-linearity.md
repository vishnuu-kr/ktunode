---
title: "Linearity"
subject: "MATHEMATICS FOR ELECTRICAL SCIENCE AND PHYSICAL SCIENCE – 3"
module: "Module 1: Fourier Integral"
branch: "Mechanical Engineering"
semester: 3
topicId: "68a3fd1251d0cf4804462c99"
status: "completed"
scrapedAt: "2026-05-20T17:50:35.829Z"
---
Here are comprehensive study notes on the Linearity property of the Fourier Integral, tailored for your course:

## MATHEMATICS FOR ELECTRICAL SCIENCE AND PHYSICAL SCIENCE – 3

### Module 1: Fourier Integral

#### Topic: Linearity

**Learning Outcomes:**

*   Understand the linearity property of the Fourier integral.
*   Apply the linearity property to find Fourier transforms of linear combinations of functions.

**Course Outcomes Alignment:**

*   **CO1: Determine the Fourier transforms of functions and apply them to solve problems arising in engineering.** (Knowledge Level: K3) - The linearity property is fundamental to determining Fourier transforms of more complex functions by breaking them down into simpler components.

**1. Introduction to the Fourier Integral**

The Fourier Integral is an extension of the Fourier series to non-periodic functions. It represents a function $f(x)$ as an integral of its sinusoidal components. The Fourier transform of a function $f(x)$ is defined as:

$$F(\omega) = \mathcal{F}\{f(x)\} = \frac{1}{\sqrt{2\pi}}\int_{-\infty}^{\infty} f(x) e^{-i\omega x} dx$$

And its inverse Fourier transform is:

$$f(x) = \mathcal{F}^{-1}\{F(\omega)\} = \frac{1}{\sqrt{2\pi}}\int_{-\infty}^{\infty} F(\omega) e^{i\omega x} d\omega$$

*(Refer to Kreyszig, 10th ed., Chapter 11: Fourier Integrals and Applications, for a detailed introduction to Fourier integrals and transforms.)*

**2. The Linearity Property of the Fourier Integral**

The linearity property states that the Fourier transform of a linear combination of functions is the linear combination of their individual Fourier transforms.

**Definition:**
If $f_1(x)$ and $f_2(x)$ are functions whose Fourier transforms exist, and $a$ and $b$ are constants, then the Fourier transform of $a f_1(x) + b f_2(x)$ is given by:

$$\mathcal{F}\{a f_1(x) + b f_2(x)\} = a \mathcal{F}\{f_1(x)\} + b \mathcal{F}\{f_2(x)\}$$

**Proof:**

Let $F_1(\omega) = \mathcal{F}\{f_1(x)\}$ and $F_2(\omega) = \mathcal{F}\{f_2(x)\}$.

By the definition of the Fourier transform:
$$F_1(\omega) = \frac{1}{\sqrt{2\pi}}\int_{-\infty}^{\infty} f_1(x) e^{-i\omega x} dx$$
$$F_2(\omega) = \frac{1}{\sqrt{2\pi}}\int_{-\infty}^{\infty} f_2(x) e^{-i\omega x} dx$$

Now, consider the Fourier transform of $a f_1(x) + b f_2(x)$:
$$\mathcal{F}\{a f_1(x) + b f_2(x)\} = \frac{1}{\sqrt{2\pi}}\int_{-\infty}^{\infty} (a f_1(x) + b f_2(x)) e^{-i\omega x} dx$$

Using the linearity property of integration:
$$\mathcal{F}\{a f_1(x) + b f_2(x)\} = \frac{1}{\sqrt{2\pi}}\int_{-\infty}^{\infty} a f_1(x) e^{-i\omega x} dx + \frac{1}{\sqrt{2\pi}}\int_{-\infty}^{\infty} b f_2(x) e^{-i\omega x} dx$$

Factoring out the constants $a$ and $b$:
$$\mathcal{F}\{a f_1(x) + b f_2(x)\} = a \left(\frac{1}{\sqrt{2\pi}}\int_{-\infty}^{\infty} f_1(x) e^{-i\omega x} dx\right) + b \left(\frac{1}{\sqrt{2\pi}}\int_{-\infty}^{\infty} f_2(x) e^{-i\omega x} dx\right)$$

Substituting back the definitions of $F_1(\omega)$ and $F_2(\omega)$:
$$\mathcal{F}\{a f_1(x) + b f_2(x)\} = a F_1(\omega) + b F_2(\omega)$$

This proves the linearity property.

*(Kreyszig, 10th ed., Section 11.4: Fourier Transforms of Functions, also mentions the basic properties of Fourier transforms, including linearity.)*

**3. Applications of the Linearity Property**

The linearity property is crucial for simplifying the computation of Fourier transforms for functions that can be expressed as a sum or difference of simpler, known functions. This is a fundamental technique in signal processing and system analysis.

**Example 1: Fourier Transform of a Rectangular Pulse (using known transforms)**

Let's find the Fourier transform of a function defined as:
$$f(x) = \begin{cases} 1 & \text{if } |x| \le a \\ 0 & \text{if } |x| > a \end{cases}$$

This function can be written as $f(x) = \text{rect}(x/2a)$.
We know the Fourier transform of the rectangular pulse $\text{rect}(x/T)$ is $T \text{sinc}(\omega T/2)$.

Consider a simpler rectangular pulse:
$$g(x) = \begin{cases} 1 & \text{if } |x| \le a \\ 0 & \text{if } |x| > a \end{cases}$$

This can be written as $g(x) = \text{rect}(x/a)$, where $\text{rect}(u) = 1$ for $|u| \le 1/2$ and 0 otherwise.
If we adjust the definition of $\text{rect}$ to be 1 for $|x| \le 1$, then the transform of $\text{rect}(x)$ is $2\text{sinc}(\omega)$.

Let's use the common definition:
$$ \text{rect}(x) = \begin{cases} 1 & \text{if } |x| \le 1/2 \\ 0 & \text{if } |x| > 1/2 \end{cases} $$
Then $\mathcal{F}\{\text{rect}(x)\} = \sqrt{2\pi} \text{sinc}(\omega/2)$.

Our function $f(x)$ is $1$ for $|x| \le a$, which can be seen as $f(x) = \text{rect}(x/a)$ if we scale the argument.
Let $u = x/a$. Then $x = au$.
$$ f(x) = \begin{cases} 1 & \text{if } |x/a| \le 1 \\ 0 & \text{if } |x/a| > 1 \end{cases} $$
Let $h(u) = \begin{cases} 1 & \text{if } |u| \le 1 \\ 0 & \text{if } |u| > 1 \end{cases}$.
We know $\mathcal{F}\{h(u)\} = \sqrt{2\pi} \text{sinc}(\omega)$.

Now, consider $f(x) = h(x/a)$. Using the scaling property (which is a consequence of linearity and other properties), $\mathcal{F}\{f(ax)\} = \frac{1}{|a|}\mathcal{F}\{f(x)\}$.
So, $\mathcal{F}\{h(x/a)\} = \frac{1}{1/a} \mathcal{F}\{h(x)\} = a \sqrt{2\pi} \text{sinc}(\omega)$.

Alternatively, let's work directly from the definition and the linearity property.
Consider the function $f(x) = c \cdot \text{rect}(x/a)$, where $\text{rect}(u)$ is 1 for $|u| \le 1/2$ and 0 otherwise.
Our pulse is 1 for $|x| \le a$. This is $\text{rect}(x/2a)$ if we define $\text{rect}$ to be 1 for $|x| \le 1$.
Let's use the common definition of sinc: $\text{sinc}(x) = \frac{\sin(\pi x)}{\pi x}$.
The Fourier transform of a rectangular pulse of width $2a$ and height 1, centered at the origin, i.e., $f(x) = 1$ for $|x| \le a$ and $0$ otherwise, is:

$$F(\omega) = \frac{1}{\sqrt{2\pi}}\int_{-a}^{a} 1 \cdot e^{-i\omega x} dx$$
$$F(\omega) = \frac{1}{\sqrt{2\pi}} \left[ \frac{e^{-i\omega x}}{-i\omega} \right]_{-a}^{a}$$
$$F(\omega) = \frac{1}{\sqrt{2\pi}} \frac{e^{-i\omega a} - e^{i\omega a}}{-i\omega}$$
$$F(\omega) = \frac{1}{\sqrt{2\pi}} \frac{-2i \sin(\omega a)}{-i\omega}$$
$$F(\omega) = \sqrt{\frac{2}{\pi}} \frac{\sin(\omega a)}{\omega}$$
This can also be written using the unnormalized sinc function: $\text{sinc}(x) = \frac{\sin x}{x}$.
$$F(\omega) = \sqrt{\frac{2}{\pi}} a \frac{\sin(\omega a)}{\omega a} = a \sqrt{\frac{2}{\pi}} \text{sinc}(\omega a / \pi)$$

*(Note: The definition of the Fourier transform and the resulting form of the sinc function can vary slightly based on the $\frac{1}{\sqrt{2\pi}}$ or $1$ factor used in the definition. The key is consistency.)*

**Example 2: Fourier Transform of a Sum of Two Pulses**

Let $f(x) = f_1(x) + f_2(x)$, where:
$f_1(x) = \begin{cases} 2 & \text{if } |x| \le 1 \\ 0 & \text{if } |x| > 1 \end{cases}$
$f_2(x) = \begin{cases} 3 & \text{if } |x| \le 2 \\ 0 & \text{if } |x| > 2 \end{cases}$

Using the linearity property:
$\mathcal{F}\{f(x)\} = \mathcal{F}\{f_1(x) + f_2(x)\} = \mathcal{F}\{f_1(x)\} + \mathcal{F}\{f_2(x)\}$

From Example 1 (with $a=1$ and height 2):
$\mathcal{F}\{f_1(x)\} = 2 \cdot \mathcal{F}\{\text{rect}(x/1) \text{ height 1 for } |x|\le 1\}$
$\mathcal{F}\{f_1(x)\} = 2 \cdot \sqrt{\frac{2}{\pi}} \frac{\sin(\omega \cdot 1)}{\omega} = 2\sqrt{\frac{2}{\pi}} \frac{\sin(\omega)}{\omega}$

From Example 1 (with $a=2$ and height 3):
$\mathcal{F}\{f_2(x)\} = 3 \cdot \mathcal{F}\{\text{rect}(x/2) \text{ height 1 for } |x|\le 2\}$
$\mathcal{F}\{f_2(x)\} = 3 \cdot \sqrt{\frac{2}{\pi}} \frac{\sin(\omega \cdot 2)}{\omega} = 3\sqrt{\frac{2}{\pi}} \frac{\sin(2\omega)}{\omega}$

Therefore,
$\mathcal{F}\{f(x)\} = 2\sqrt{\frac{2}{\pi}} \frac{\sin(\omega)}{\omega} + 3\sqrt{\frac{2}{\pi}} \frac{\sin(2\omega)}{\omega}$
$\mathcal{F}\{f(x)\} = \sqrt{\frac{2}{\pi}} \frac{2\sin(\omega) + 3\sin(2\omega)}{\omega}$

*(Reference: B.V. Ramana, Higher Engineering Mathematics, 39th ed., Chapter 42: Fourier Transforms, likely covers basic properties like linearity and standard transform pairs.)*

**3.1. Using Linearity with Known Fourier Transform Pairs**

Many engineering mathematics textbooks provide tables of Fourier transform pairs. The linearity property allows us to quickly find the Fourier transform of functions that are linear combinations of these known pairs.

**Common Fourier Transform Pairs (using $\mathcal{F}\{f(x)\} = \frac{1}{\sqrt{2\pi}}\int_{-\infty}^{\infty} f(x) e^{-i\omega x} dx$):**

| $f(x)$                               | $\mathcal{F}\{f(x)\}$                                      |
| :----------------------------------- | :--------------------------------------------------------- |
| $\delta(x)$ (Dirac Delta Function)   | $\frac{1}{\sqrt{2\pi}}$                                    |
| $1$ (for all $x$)                    | $\sqrt{2\pi}\delta(\omega)$                               |
| $e^{-ax^2}$ ($a>0$)                  | $\frac{1}{\sqrt{2a}}e^{-\omega^2/(4a)}$                   |
| $\text{rect}(x/a)$ (Width $a$)      | $a\sqrt{\frac{2}{\pi}}\text{sinc}(\frac{a\omega}{2})$      |
| $e^{-a|x|}$ ($a>0$)                  | $\sqrt{\frac{2}{\pi}} \frac{a}{\omega^2 + a^2}$            |
| $\frac{\sin(ax)}{\pi x}$             | $\text{rect}(\omega/(2a))$                                 |
| $\text{sgn}(x)$                      | $\frac{1}{i\pi}\sqrt{\frac{2}{\pi}}\omega$ (Principal Value) |

*(Note: The form of the sinc function and the constants can vary. Kreyszig uses $\int_{-\infty}^{\infty} f(t)e^{-i\omega t}dt$ and $\frac{1}{2\pi}\int_{-\infty}^{\infty}F(\omega)e^{i\omega t}d\omega$. In this case, the table would adjust.)*

**Example 3: Fourier Transform of a combination involving exponential and sinc**

Find the Fourier transform of $f(x) = 2e^{-3|x|} + 5 \frac{\sin(2x)}{\pi x}$.

Using the linearity property:
$\mathcal{F}\{f(x)\} = 2 \mathcal{F}\{e^{-3|x|}\} + 5 \mathcal{F}\{\frac{\sin(2x)}{\pi x}\}$

From the table (using $a=3$ for the exponential term and $a=2$ for the sinc term):
$\mathcal{F}\{e^{-3|x|}\} = \sqrt{\frac{2}{\pi}} \frac{3}{\omega^2 + 3^2} = \sqrt{\frac{2}{\pi}} \frac{3}{\omega^2 + 9}$
$\mathcal{F}\{\frac{\sin(2x)}{\pi x}\} = \text{rect}(\omega/(2 \cdot 2)) = \text{rect}(\omega/4)$

Therefore,
$\mathcal{F}\{f(x)\} = 2 \left(\sqrt{\frac{2}{\pi}} \frac{3}{\omega^2 + 9}\right) + 5 \cdot \text{rect}(\omega/4)$
$\mathcal{F}\{f(x)\} = \sqrt{\frac{2}{\pi}} \frac{6}{\omega^2 + 9} + 5 \cdot \text{rect}(\omega/4)$

**4. Important Points to Remember**

*   **Consistency:** Always use the same definition of the Fourier transform and its inverse throughout your calculations.
*   **Existence of Transform:** The linearity property holds if the Fourier transforms of the individual functions exist. This generally means the functions must be absolutely integrable over $(-\infty, \infty)$.
*   **Integral Properties:** The proof relies on the fundamental properties of integration, specifically that the integral of a sum is the sum of integrals, and constants can be pulled out of integrals.
*   **Building Blocks:** Linearity is a foundational property that, combined with other properties (like scaling, time/frequency shifting, differentiation), allows us to transform a wide range of functions.
*   **Applications:** This property is directly relevant to CO1, enabling the calculation of Fourier transforms for composite signals and systems in electrical and physical sciences.

**5. Practice Questions and Exercises**

**Question 1:**
Find the Fourier transform of the function $f(x) = 4 \cdot \text{rect}(x/2) - 2 e^{-|x|}$.
Assume $\mathcal{F}\{\text{rect}(x/a)\} = a\sqrt{\frac{2}{\pi}}\text{sinc}(\frac{a\omega}{2})$ and $\mathcal{F}\{e^{-a|x|}\} = \sqrt{\frac{2}{\pi}} \frac{a}{\omega^2 + a^2}$.

**Answer 1:**
Using linearity:
$\mathcal{F}\{f(x)\} = \mathcal{F}\{4 \cdot \text{rect}(x/2)\} - \mathcal{F}\{2 e^{-|x|}\}$
$\mathcal{F}\{f(x)\} = 4 \mathcal{F}\{\text{rect}(x/2)\} - 2 \mathcal{F}\{e^{-|x|}\}$

For $\text{rect}(x/2)$, $a=2$:
$\mathcal{F}\{\text{rect}(x/2)\} = 2\sqrt{\frac{2}{\pi}}\text{sinc}(\frac{2\omega}{2}) = 2\sqrt{\frac{2}{\pi}}\text{sinc}(\omega)$

For $e^{-|x|}$, $a=1$:
$\mathcal{F}\{e^{-|x|}\} = \sqrt{\frac{2}{\pi}} \frac{1}{\omega^2 + 1^2} = \sqrt{\frac{2}{\pi}} \frac{1}{\omega^2 + 1}$

Substituting these back:
$\mathcal{F}\{f(x)\} = 4 \left(2\sqrt{\frac{2}{\pi}}\text{sinc}(\omega)\right) - 2 \left(\sqrt{\frac{2}{\pi}} \frac{1}{\omega^2 + 1}\right)$
$\mathcal{F}\{f(x)\} = 8\sqrt{\frac{2}{\pi}}\text{sinc}(\omega) - 2\sqrt{\frac{2}{\pi}} \frac{1}{\omega^2 + 1}$
$\mathcal{F}\{f(x)\} = \sqrt{\frac{2}{\pi}} \left( 8\text{sinc}(\omega) - \frac{2}{\omega^2 + 1} \right)$

**Question 2:**
Given that $\mathcal{F}\{e^{-ax^2}\} = \frac{1}{\sqrt{2a}}e^{-\omega^2/(4a)}$ for $a>0$.
Find the Fourier transform of $f(x) = 3e^{-2x^2} - 5e^{-x^2}$.

**Answer 2:**
Using linearity:
$\mathcal{F}\{f(x)\} = \mathcal{F}\{3e^{-2x^2}\} - \mathcal{F}\{5e^{-x^2}\}$
$\mathcal{F}\{f(x)\} = 3\mathcal{F}\{e^{-2x^2}\} - 5\mathcal{F}\{e^{-x^2}\}$

For $e^{-2x^2}$, $a=2$:
$\mathcal{F}\{e^{-2x^2}\} = \frac{1}{\sqrt{2 \cdot 2}}e^{-\omega^2/(4 \cdot 2)} = \frac{1}{\sqrt{4}}e^{-\omega^2/8} = \frac{1}{2}e^{-\omega^2/8}$

For $e^{-x^2}$, $a=1$:
$\mathcal{F}\{e^{-x^2}\} = \frac{1}{\sqrt{2 \cdot 1}}e^{-\omega^2/(4 \cdot 1)} = \frac{1}{\sqrt{2}}e^{-\omega^2/4}$

Substituting these back:
$\mathcal{F}\{f(x)\} = 3 \left(\frac{1}{2}e^{-\omega^2/8}\right) - 5 \left(\frac{1}{\sqrt{2}}e^{-\omega^2/4}\right)$
$\mathcal{F}\{f(x)\} = \frac{3}{2}e^{-\omega^2/8} - \frac{5}{\sqrt{2}}e^{-\omega^2/4}$

**Question 3:**
Show, using the definition of the Fourier Integral and the linearity property of integration, that if $f(x)$ is such that its Fourier Transform $F(\omega)$ exists, and $c$ is a constant, then $\mathcal{F}\{c f(x)\} = c F(\omega)$.

**Answer 3:**
Let $F(\omega) = \mathcal{F}\{f(x)\} = \frac{1}{\sqrt{2\pi}}\int_{-\infty}^{\infty} f(x) e^{-i\omega x} dx$.
Consider $\mathcal{F}\{c f(x)\}$:
$$ \mathcal{F}\{c f(x)\} = \frac{1}{\sqrt{2\pi}}\int_{-\infty}^{\infty} (c f(x)) e^{-i\omega x} dx $$
Using the linearity property of definite integrals:
$$ \mathcal{F}\{c f(x)\} = c \left(\frac{1}{\sqrt{2\pi}}\int_{-\infty}^{\infty} f(x) e^{-i\omega x} dx\right) $$
Substituting $F(\omega)$:
$$ \mathcal{F}\{c f(x)\} = c F(\omega) $$
This shows the linearity property for a single function multiplied by a constant. The property for the sum of functions extends this.

---
These notes cover the linearity property of the Fourier Integral, its definition, proof, applications, and practical examples, directly contributing to the learning outcomes and Course Outcome 1. The references provided point to where further details can be found in your prescribed textbooks.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=p_di4ateumM) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=Kb3K1Ui4454) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=S0hG_mS9bV4) |
