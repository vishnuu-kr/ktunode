---
title: "Linearity"
subject: "MATHEMATICS FOR ELECTRICAL SCIENCE AND PHYSICAL SCIENCE – 3"
module: "Module 1: Fourier Integral"
branch: "Electronics and Communication Engineering"
semester: 3
topicId: "68a5c45db09ce205780fe256"
status: "completed"
scrapedAt: "2026-05-23T17:46:58.041Z"
---
Here are comprehensive study notes for the topic of Linearity within the Fourier Integral module of Mathematics for Electrical Science and Physical Science – 3, designed to align with the provided learning outcomes and course objectives.

---

## Module 1: Fourier Integral - Topic: Linearity

**Subject:** Mathematics for Electrical Science and Physical Science – 3

---

### 1. Introduction

The Fourier Integral is a powerful tool used to represent arbitrary functions as a superposition of sinusoids. This module explores the properties of the Fourier Integral, starting with fundamental principles like linearity. Understanding linearity is crucial as it allows us to decompose complex problems into simpler, manageable parts, a common strategy in both electrical and physical sciences. This topic directly supports **CO1: Determine the Fourier transforms of functions and apply them to solve problems arising in engineering.**

---

### 2. Key Concepts and Definitions

#### 2.1. Linearity Property of Fourier Transform

The Fourier Transform is a **linear operator**. This means that for any two functions $f(t)$ and $g(t)$ and any constants $a$ and $b$, the Fourier Transform of a linear combination of these functions is the linear combination of their individual Fourier Transforms.

Mathematically, if:
*   $\mathcal{F}\{f(t)\} = F(\omega)$
*   $\mathcal{F}\{g(t)\} = G(\omega)$

Then, the linearity property states:

$\mathcal{F}\{a f(t) + b g(t)\} = a \mathcal{F}\{f(t)\} + b \mathcal{F}\{g(t)\}$

Or, using the notation for the Fourier Transform:

$a f(t) + b g(t) \stackrel{\mathcal{F}}{\longleftrightarrow} a F(\omega) + b G(\omega)$

#### 2.2. Definition of Fourier Transform (for context)

Recall the definition of the Fourier Transform of a function $f(t)$:

$F(\omega) = \mathcal{F}\{f(t)\} = \int_{-\infty}^{\infty} f(t) e^{-i \omega t} dt$

And the Inverse Fourier Transform:

$f(t) = \mathcal{F}^{-1}\{F(\omega)\} = \frac{1}{2\pi} \int_{-\infty}^{\infty} F(\omega) e^{i \omega t} d\omega$

*   **Note:** The factor of $1/(2\pi)$ can sometimes be distributed differently between the forward and inverse transforms depending on the convention used. Kreyszig (10th ed.) uses $\frac{1}{2\pi}$ for the inverse transform.

#### 2.3. Derivation of the Linearity Property

We can derive the linearity property directly from the definition of the Fourier Transform:

$\mathcal{F}\{a f(t) + b g(t)\} = \int_{-\infty}^{\infty} [a f(t) + b g(t)] e^{-i \omega t} dt$

Using the linearity of integration:

$= \int_{-\infty}^{\infty} a f(t) e^{-i \omega t} dt + \int_{-\infty}^{\infty} b g(t) e^{-i \omega t} dt$

Factoring out the constants $a$ and $b$:

$= a \int_{-\infty}^{\infty} f(t) e^{-i \omega t} dt + b \int_{-\infty}^{\infty} g(t) e^{-i \omega t} dt$

By the definition of the Fourier Transform:

$= a F(\omega) + b G(\omega)$

This confirms the linearity property.

---

### 3. Importance and Applications of Linearity

The linearity property is fundamental in signal processing and system analysis. Many real-world systems, particularly in electrical engineering and physics, can be approximated as linear time-invariant (LTI) systems.

*   **Signal Decomposition:** Complex signals can be broken down into simpler components (e.g., sum of a sine wave and a cosine wave). The Fourier Transform of the complex signal is the sum of the Fourier Transforms of its components.
*   **System Analysis:** For an LTI system, if the input is $x(t)$ with Fourier Transform $X(\omega)$, and the system's impulse response is $h(t)$ with Fourier Transform $H(\omega)$ (the frequency response), then the output $y(t)$ has a Fourier Transform $Y(\omega) = H(\omega) X(\omega)$. If the input is a combination of signals, say $x_1(t) + x_2(t)$, the output will be $y_1(t) + y_2(t)$, where $Y_1(\omega) = H(\omega) X_1(\omega)$ and $Y_2(\omega) = H(\omega) X_2(\omega)$. This linearity allows us to analyze the system's response to each component separately and then sum the results. This is a core concept addressed by **CO1**.
*   **Simplification of Calculations:** When dealing with functions that are sums of simpler functions (e.g., piecewise functions, or sums of impulses), linearity allows us to find the Fourier Transform of each part and add them up, which is often much easier than integrating the entire complex function directly.

**Reference:** Kreyszig's "Advanced Engineering Mathematics" (10th ed., Section 11.4 - Fourier Transform) discusses various properties, including linearity, as essential for understanding Fourier analysis. B.V. Ramana's "Higher Engineering Mathematics" also dedicates chapters to Fourier transforms and their properties, emphasizing linearity.

---

### 4. Examples

Let's illustrate the linearity property with examples.

#### Example 1: Linearity with Simple Functions

Let $f(t) = e^{-at} u(t)$ and $g(t) = \text{sgn}(t) e^{-a|t|}$, where $a > 0$ and $u(t)$ is the unit step function.
We know the Fourier Transforms:
*   $\mathcal{F}\{e^{-at} u(t)\} = \frac{1}{a + i\omega}$
*   $\mathcal{F}\{\text{sgn}(t) e^{-a|t|}\} = \frac{-2i\omega}{a^2 + \omega^2}$

Now, consider the function $h(t) = 2 f(t) - 3 g(t)$.
Using the linearity property:

$\mathcal{F}\{h(t)\} = \mathcal{F}\{2 f(t) - 3 g(t)\}$
$= 2 \mathcal{F}\{f(t)\} - 3 \mathcal{F}\{g(t)\}$
$= 2 \left(\frac{1}{a + i\omega}\right) - 3 \left(\frac{-2i\omega}{a^2 + \omega^2}\right)$
$= \frac{2}{a + i\omega} + \frac{6i\omega}{a^2 + \omega^2}$

This demonstrates how the transform of a linear combination is the linear combination of the transforms.

#### Example 2: Piecewise Function

Consider the function $f(t)$ defined as:
$f(t) = \begin{cases} 1 & \text{if } -1 \le t \le 1 \\ 0 & \text{otherwise} \end{cases}$

This function can be expressed as the difference of two step functions multiplied by an exponential term, or more directly, as a rectangular pulse.
$f(t) = \text{rect}\left(\frac{t}{2}\right)$, where $\text{rect}(x) = \begin{cases} 1 & \text{if } |x| \le 1/2 \\ 0 & \text{otherwise} \end{cases}$
So, $\text{rect}\left(\frac{t}{2}\right) = \begin{cases} 1 & \text{if } |t/2| \le 1/2 \implies |t| \le 1 \\ 0 & \text{otherwise} \end{cases}$

The Fourier Transform of a rectangular pulse of width $2T$ centered at the origin is $\frac{2 \sin(\omega T)}{\omega}$.
In our case, the width is $2$, so $2T = 2 \implies T=1$.

Therefore, $\mathcal{F}\{\text{rect}(t/2)\} = \frac{2 \sin(\omega \cdot 1)}{\omega} = \frac{2 \sin(\omega)}{\omega}$.

Now, consider a function $s(t)$ which is the sum of two such pulses, one centered at $t=0$ and another at $t=2$:
$s(t) = \text{rect}(t/2) + \text{rect}((t-2)/2)$

Using linearity:
$\mathcal{F}\{s(t)\} = \mathcal{F}\{\text{rect}(t/2)\} + \mathcal{F}\{\text{rect}((t-2)/2)\}$

We already have $\mathcal{F}\{\text{rect}(t/2)\} = \frac{2 \sin(\omega)}{\omega}$.
The second term is a time-shifted version of the rectangular pulse. The time-shifting property of the Fourier Transform (which itself relies on linearity) states:
$\mathcal{F}\{f(t-t_0)\} = e^{-i\omega t_0} F(\omega)$.
Here, $f(t) = \text{rect}(t/2)$, $F(\omega) = \frac{2 \sin(\omega)}{\omega}$, and $t_0 = 2$.

So, $\mathcal{F}\{\text{rect}((t-2)/2)\} = e^{-i\omega 2} \frac{2 \sin(\omega)}{\omega}$.

Therefore, $\mathcal{F}\{s(t)\} = \frac{2 \sin(\omega)}{\omega} + e^{-i 2\omega} \frac{2 \sin(\omega)}{\omega} = \frac{2 \sin(\omega)}{\omega} (1 + e^{-i 2\omega})$.

This example combines the linearity property with the time-shifting property to transform a more complex signal.

---

### 5. Practice Questions and Exercises

**Instructions:** Assume the standard Fourier Transform definition.

1.  Given $\mathcal{F}\{e^{-2t}u(t)\} = \frac{1}{2+i\omega}$ and $\mathcal{F}\{\sin(3t)u(t)\} = \frac{3}{\omega(9+\omega^2)}$. Find the Fourier Transform of $f(t) = 4e^{-2t}u(t) - 2\sin(3t)u(t)$.

2.  Let the function $g(t)$ be defined as $g(t) = 5$ for $-1 \le t \le 1$, and $g(t) = 0$ otherwise. Find the Fourier Transform of $h(t) = g(t) + g(t-2)$.

3.  If $\mathcal{F}\{f(t)\} = F(\omega)$, what is $\mathcal{F}\{3f(t) - 5f(t-1)\}$? (You'll need to use the time-shifting property as well).

**Answers:**

1.  Using the linearity property:
    $\mathcal{F}\{f(t)\} = \mathcal{F}\{4e^{-2t}u(t) - 2\sin(3t)u(t)\}$
    $= 4 \mathcal{F}\{e^{-2t}u(t)\} - 2 \mathcal{F}\{\sin(3t)u(t)\}$
    $= 4 \left(\frac{1}{2+i\omega}\right) - 2 \left(\frac{3}{\omega(9+\omega^2)}\right)$
    $= \frac{4}{2+i\omega} - \frac{6}{\omega(9+\omega^2)}$

2.  The function $g(t)$ is a rectangular pulse of width 2 centered at the origin. Its Fourier Transform is $\mathcal{F}\{g(t)\} = \frac{2 \sin(1\omega)}{\omega} = \frac{2 \sin(\omega)}{\omega}$.
    Using linearity and the time-shifting property:
    $\mathcal{F}\{h(t)\} = \mathcal{F}\{g(t) + g(t-2)\}$
    $= \mathcal{F}\{g(t)\} + \mathcal{F}\{g(t-2)\}$
    $= \frac{2 \sin(\omega)}{\omega} + e^{-i\omega 2} \frac{2 \sin(\omega)}{\omega}$
    $= \frac{2 \sin(\omega)}{\omega} (1 + e^{-i 2\omega})$

3.  Using linearity and the time-shifting property:
    $\mathcal{F}\{3f(t) - 5f(t-1)\} = 3 \mathcal{F}\{f(t)\} - 5 \mathcal{F}\{f(t-1)\}$
    $= 3 F(\omega) - 5 e^{-i\omega(1)} F(\omega)$
    $= F(\omega) (3 - 5e^{-i\omega})$

---

### 6. Important Points to Remember

*   **Operator Property:** The Fourier Transform is a linear operator. This means it preserves linear combinations of functions.
*   **Decomposition and Synthesis:** Linearity allows us to break down complex signals into simpler ones, find their individual transforms, and then combine the results. This is also true in reverse for synthesis.
*   **Foundation for Other Properties:** Linearity is a foundational property that often underpins the derivation or application of other Fourier Transform properties like time-shifting, frequency-shifting, and differentiation.
*   **System Analysis:** In LTI systems, linearity ensures that the response to a sum of inputs is the sum of responses to individual inputs. This is fundamental to understanding how systems process signals.
*   **Mathematical Justification:** The linearity property stems directly from the linearity of integration.

---

### 7. Alignment with Course Outcomes (COs)

*   **CO1: Determine the Fourier transforms of functions and apply them to solve problems arising in engineering. (Knowledge Level: K3)**
    *   This topic directly addresses CO1 by providing a fundamental tool (linearity) for determining Fourier transforms of composite functions. The ability to decompose signals into simpler components and transform them individually, then combine them, is a key problem-solving technique in engineering applications of Fourier analysis. The examples provided demonstrate practical applications in signal processing.

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=p_di4ateumM) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=Kb3K1Ui4454) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=S0hG_mS9bV4) |


### 8. Further Reading and References

*   **Kreyszig, E. (2016). *Advanced Engineering Mathematics* (10th ed.). John Wiley & Sons.**
    *   Refer to Chapter 11, particularly sections on Fourier Transform properties. Kreyszig thoroughly explains the mathematical basis and applications of these properties.
*   **Ramana, B. V. (2023). *Higher Engineering Mathematics* (39th ed.). McGraw-Hill Education.**
    *   This text provides a strong foundation in Fourier transforms and their properties, often with detailed derivations and numerous examples relevant to engineering.
*   **Grewal, B. S. (2018). *Higher Engineering Mathematics* (44th ed.). Khanna Publishers.**
    *   Similar to Ramana, Grewal offers comprehensive coverage of Fourier series and transforms, emphasizing their applications and properties like linearity.

While the other reference books (Zill & Shanahan, Rao et al.) are valuable for complex analysis and FFT, the linearity property of the Fourier Integral itself is most directly and thoroughly covered in the standard engineering mathematics texts like Kreyszig and Ramana/Grewal.

---

This concludes the study notes on the Linearity property of the Fourier Integral. Master this property to build a strong foundation for understanding more complex Fourier Transform concepts and their wide-ranging applications in electrical and physical sciences.