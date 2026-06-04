---
title: "Zeros of Analytic functions – Poles and Zeros"
subject: "MATHEMATICS FOR ELECTRICAL SCIENCE AND PHYSICAL SCIENCE – 3"
module: "Module 4: Taylor series and Maclaurin series"
branch: "Electronics and Communication Engineering"
semester: 3
topicId: "68a5c45db09ce205780fe276"
status: "completed"
scrapedAt: "2026-05-23T17:47:22.264Z"
---
# MATHEMATICS FOR ELECTRICAL SCIENCE AND PHYSICAL SCIENCE – 3

## Module 4: Taylor Series and Maclaurin Series

### Topic: Zeros of Analytic Functions – Poles and Zeros

---

### Introduction

This topic delves into the behavior of analytic functions near specific points in the complex plane. Understanding zeros and poles is fundamental to analyzing the singularities of complex functions, which has significant applications in electrical and physical sciences, particularly in areas like circuit analysis, control systems, and signal processing. This aligns with **Course Outcome CO2** (understanding analyticity) and **Course Outcome CO4** (understanding series expansion about a singularity).

---

### 1. Zeros of Analytic Functions

An analytic function $f(z)$ can have points where its value is zero. The nature of these zeros is crucial for understanding the function's behavior.

**Definition:**
A point $z_0$ is called a **zero** of an analytic function $f(z)$ if $f(z_0) = 0$.

**Definition: Order of a Zero**
If $f(z)$ is analytic in a region containing $z_0$, and if $f(z_0) = f'(z_0) = f''(z_0) = \dots = f^{(n-1)}(z_0) = 0$ but $f^{(n)}(z_0) \neq 0$, then $z_0$ is a **zero of order n** of $f(z)$.

**Key Property:**
If $f(z)$ is analytic and has a zero of order $n$ at $z_0$, then $f(z)$ can be represented by a Taylor series around $z_0$ as:
$f(z) = c_n (z - z_0)^n + c_{n+1} (z - z_0)^{n+1} + \dots$
where $c_n = \frac{f^{(n)}(z_0)}{n!} \neq 0$.

This means that in a neighborhood of $z_0$, $f(z)$ behaves like $c_n (z - z_0)^n$.

**Examples:**

1.  **Function:** $f(z) = z^2 - 4z + 4$
    **Analysis:** $f(z) = (z-2)^2$.
    $f(2) = 0$.
    $f'(z) = 2(z-2)$, so $f'(2) = 0$.
    $f''(z) = 2$, so $f''(2) = 2 \neq 0$.
    Therefore, $z_0 = 2$ is a zero of order 2.

2.  **Function:** $f(z) = \sin(z)$
    **Analysis:** We know that $\sin(z) = z - \frac{z^3}{3!} + \frac{z^5}{5!} - \dots$ (Maclaurin series).
    The Maclaurin series for $\sin(z)$ has only odd powers of $z$.
    $f(0) = 0$.
    $f'(z) = \cos(z)$, so $f'(0) = 1 \neq 0$.
    Therefore, $z_0 = 0$ is a zero of order 1.

3.  **Function:** $f(z) = e^z - 1$
    **Analysis:** The Maclaurin series for $e^z$ is $1 + z + \frac{z^2}{2!} + \dots$.
    So, $f(z) = (1 + z + \frac{z^2}{2!} + \dots) - 1 = z + \frac{z^2}{2!} + \dots$.
    $f(0) = 0$.
    $f'(z) = e^z$, so $f'(0) = 1 \neq 0$.
    Therefore, $z_0 = 0$ is a zero of order 1.

**Important Point to Remember:**
An isolated zero of an analytic function is a point $z_0$ such that $f(z_0) = 0$ and there exists a neighborhood of $z_0$ in which $f(z) \neq 0$ for all $z \neq z_0$.

**Theorem (Uniqueness of Zeros):**
If an analytic function $f(z)$ has an accumulation point of zeros in a domain $D$, then $f(z)$ must be identically zero throughout $D$. This means if an analytic function is zero at infinitely many points in a region and these points have a limit point within that region, the function must be zero everywhere. This property is crucial in proving other theorems in complex analysis. (Refer to Kreyszig, 10th ed., Chapter 14 on Complex Integration and Series, Section on Analytic Functions and their Properties).

---

### 2. Poles of Analytic Functions

Poles are a specific type of singularity where a function tends to infinity.

**Definition: Pole**
A point $z_0$ is called a **pole** of an analytic function $f(z)$ if $f(z)$ can be represented in a neighborhood of $z_0$ by a Laurent series of the form:
$f(z) = \frac{a_{-m}}{(z-z_0)^m} + \frac{a_{-m+1}}{(z-z_0)^{m-1}} + \dots + \frac{a_{-1}}{z-z_0} + a_0 + a_1(z-z_0) + \dots$
where $m$ is a positive integer and $a_{-m} \neq 0$.

**Definition: Order of a Pole**
The integer $m$ in the above definition is called the **order of the pole** at $z_0$.

**Alternative Definition for Poles:**
A point $z_0$ is a pole of order $m$ for $f(z)$ if:
1.  $f(z)$ has a singularity at $z_0$.
2.  $\lim_{z \to z_0} (z-z_0)^m f(z) = L$, where $L$ is a finite, non-zero complex number.

If $m=1$, it is a **simple pole**.

**Relationship with Zeros of the Denominator:**
If $f(z) = \frac{g(z)}{h(z)}$, where $g(z)$ and $h(z)$ are analytic and $h(z_0) = 0$, then $z_0$ is a pole of $f(z)$ if $g(z_0) \neq 0$ and $z_0$ is a zero of $h(z)$. The order of the pole of $f(z)$ at $z_0$ is equal to the order of the zero of $h(z)$ at $z_0$ minus the order of the zero of $g(z)$ at $z_0$ (assuming $g(z_0) \neq 0$).

**Key Property:**
If $f(z)$ has a pole of order $m$ at $z_0$, then the function $\frac{1}{f(z)}$ has a zero of order $m$ at $z_0$.

**Examples:**

1.  **Function:** $f(z) = \frac{1}{z-2}$
    **Analysis:** $z_0 = 2$.
    The Laurent series around $z_0=2$ is simply $\frac{1}{z-2}$, which has $a_{-1} = 1$ and $m=1$.
    Thus, $z_0=2$ is a pole of order 1 (a simple pole).
    Alternatively, $\lim_{z \to 2} (z-2) f(z) = \lim_{z \to 2} (z-2) \frac{1}{z-2} = 1$ (finite and non-zero).

2.  **Function:** $f(z) = \frac{z}{(z-3)^2}$
    **Analysis:** $z_0 = 3$.
    The Laurent series around $z_0=3$ has $a_{-2} = 1$ and $m=2$.
    Thus, $z_0=3$ is a pole of order 2.
    Alternatively, $\lim_{z \to 3} (z-3)^2 f(z) = \lim_{z \to 3} (z-3)^2 \frac{z}{(z-3)^2} = \lim_{z \to 3} z = 3$ (finite and non-zero).

3.  **Function:** $f(z) = \frac{1}{z^2(z-1)}$
    **Analysis:**
    -   At $z_0 = 0$: $f(z) = \frac{1}{z^2} \frac{1}{z-1} = \frac{1}{z^2} \left( -1 - z - z^2 - \dots \right)$.
        The term with the lowest negative power is $\frac{-1}{z^2}$. So $m=2$, and $z_0=0$ is a pole of order 2.
        Alternatively, $\lim_{z \to 0} z^2 f(z) = \lim_{z \to 0} z^2 \frac{1}{z^2(z-1)} = \lim_{z \to 0} \frac{1}{z-1} = -1$ (finite and non-zero).
    -   At $z_0 = 1$: $f(z) = \frac{1}{(z-1)} \frac{1}{z^2}$.
        The term with the lowest negative power is $\frac{1}{z-1}$. So $m=1$, and $z_0=1$ is a pole of order 1 (a simple pole).
        Alternatively, $\lim_{z \to 1} (z-1) f(z) = \lim_{z \to 1} (z-1) \frac{1}{z^2(z-1)} = \lim_{z \to 1} \frac{1}{z^2} = 1$ (finite and non-zero).

**Important Point to Remember:**
The order of a pole can be determined by finding the smallest positive integer $m$ such that $(z-z_0)^m f(z)$ has a finite, non-zero limit as $z \to z_0$. This is directly related to the principal part of the Laurent series.

**Connection to Taylor and Maclaurin Series:**
While Taylor and Maclaurin series represent functions locally by non-negative powers of $(z-z_0)$, the presence of poles necessitates the use of Laurent series, which include negative powers of $(z-z_0)$. Zeros are characterized by the absence of negative powers and the presence of a lowest positive power term in the Taylor expansion.

---

### 3. Classification of Singularities

Understanding zeros and poles is part of classifying singularities of analytic functions.

**Definition: Isolated Singularity**
A point $z_0$ is an **isolated singularity** of $f(z)$ if $f(z)$ is analytic in a punctured disk $0 < |z-z_0| < R$ for some $R > 0$, but not analytic at $z_0$.

Isolated singularities can be classified into three types:
1.  **Removable Singularity:** If the Laurent series expansion of $f(z)$ around $z_0$ has no negative powers of $(z-z_0)$ (i.e., the principal part is zero). This means $f(z)$ can be made analytic at $z_0$ by defining $f(z_0)$ appropriately. This occurs when $\lim_{z \to z_0} f(z)$ exists and is finite.
2.  **Pole:** If the Laurent series expansion has a finite number of negative powers of $(z-z_0)$, with the lowest power being $m > 0$. This is the type of singularity discussed earlier.
3.  **Essential Singularity:** If the Laurent series expansion has infinitely many negative powers of $(z-z_0)$. These are the most complex singularities.

**Example:**
-   $f(z) = \frac{\sin(z)}{z}$: $z_0 = 0$ is a removable singularity because $\frac{\sin(z)}{z} = 1 - \frac{z^2}{3!} + \frac{z^4}{5!} - \dots$, which has no negative powers. $\lim_{z \to 0} \frac{\sin(z)}{z} = 1$.
-   $f(z) = \frac{1}{z^2}$: $z_0 = 0$ is a pole of order 2.
-   $f(z) = e^{1/z}$: $z_0 = 0$ is an essential singularity because $e^{1/z} = 1 + \frac{1}{z} + \frac{1}{2!z^2} + \frac{1}{3!z^3} + \dots$ has infinitely many negative powers of $z$.

**Connection to Course Outcomes:**
-   **CO2:** Understanding analyticity is key. A function is analytic where it has no singularities. Zeros and poles are points where analyticity is interrupted in specific ways.
-   **CO4:** The series expansion of a complex function about a singularity is directly related to the classification of that singularity. Poles are defined by the nature of their principal part in the Laurent series.

---

### 4. Applications in Electrical and Physical Science

Understanding zeros and poles is crucial in many engineering disciplines:

*   **Control Systems (Electrical Engineering):** The locations of zeros and poles of a system's transfer function in the complex plane determine its stability and transient response. Poles in the left-half plane indicate stability, while poles in the right-half plane indicate instability. Zeros affect the system's response by shaping its magnitude and phase.
*   **Signal Processing (Electrical Engineering):** Zeros and poles appear in the frequency response of filters and other systems. For example, in digital filters, poles and zeros in the Z-plane dictate the filter's characteristics. The Fast Fourier Transform (FFT) is used to analyze signals in the frequency domain, and understanding the spectral content often involves identifying the frequencies where signals have zeros or peaks (related to poles in some contexts). (Refer to Fast Fourier Transform - Algorithms and Applications by Rao et al., for signal processing aspects).
*   **Circuit Analysis (Electrical Engineering):** In analyzing RLC circuits, the characteristic equation often leads to poles which determine the natural frequencies and damping of the circuit's response.
*   **Quantum Mechanics (Physical Science):** The behavior of wave functions and scattering amplitudes can be understood through their zeros and poles in the complex energy or momentum planes.

**Example (Control Systems):**
Consider a system with transfer function $H(s) = \frac{s-1}{(s+2)(s+3)}$.
-   Zeros: $s = 1$.
-   Poles: $s = -2$ (simple pole), $s = -3$ (simple pole).
The poles are in the left-half of the s-plane, indicating the system is stable. The zero at $s=1$ influences the frequency response.

---

### 5. Practice Questions

**Question 1:**
Find the order of the zero of the function $f(z) = (z - \pi i)^3 \cos(z)$ at $z_0 = \pi i$.

**Question 2:**
Determine whether $z_0 = 0$ is a zero, pole, or neither for the function $f(z) = \frac{z - \sin(z)}{z^3}$. If it's a pole, find its order.

**Question 3:**
Identify all the poles of the function $f(z) = \frac{e^z}{z^2(z-1)^3}$ and determine their orders.

**Question 4:**
For the function $f(z) = \frac{z^2+1}{z-i}$, what is the nature of the singularity at $z_0 = i$?

---

### 6. Answers to Practice Questions

**Answer 1:**
$f(z) = (z - \pi i)^3 \cos(z)$.
$f(\pi i) = (\pi i - \pi i)^3 \cos(\pi i) = 0^3 \cdot \cos(\pi i) = 0$.
$f'(z) = 3(z-\pi i)^2 \cos(z) - (z-\pi i)^3 \sin(z)$.
$f'(\pi i) = 3(\pi i - \pi i)^2 \cos(\pi i) - (\pi i - \pi i)^3 \sin(\pi i) = 0$.
$f''(z) = 6(z-\pi i) \cos(z) - 3(z-\pi i)^2 \sin(z) - [3(z-\pi i)^2 \sin(z) - (z-\pi i)^3 \cos(z)]$.
$f''(\pi i) = 0$.
$f'''(z) = 6 \cos(z) - 18(z-\pi i) \sin(z) - 6(z-\pi i) \sin(z) + 3(z-\pi i)^2 \cos(z) - [3(z-\pi i)^2 \cos(z) - (z-\pi i)^3 (-\sin(z))]$.
$f'''(\pi i) = 6 \cos(\pi i) - 0 - 0 + 0 - [0 - 0] = 6 \cos(\pi i)$.
We know $\cos(\pi i) = \frac{e^{\pi i} + e^{-\pi i}}{2} = \frac{-1 + (-1)}{2} = -1$.
So, $f'''(\pi i) = 6(-1) = -6 \neq 0$.
Since $f(\pi i) = f'(\pi i) = f''(\pi i) = 0$ and $f'''(\pi i) \neq 0$, $z_0 = \pi i$ is a zero of order 3.

**Answer 2:**
$f(z) = \frac{z - \sin(z)}{z^3}$.
We need to find the behavior of the numerator near $z=0$. Using Maclaurin series for $\sin(z)$:
$\sin(z) = z - \frac{z^3}{3!} + \frac{z^5}{5!} - \dots$
So, $z - \sin(z) = z - (z - \frac{z^3}{6} + \frac{z^5}{120} - \dots) = \frac{z^3}{6} - \frac{z^5}{120} + \dots$
Now, substitute this back into $f(z)$:
$f(z) = \frac{\frac{z^3}{6} - \frac{z^5}{120} + \dots}{z^3} = \frac{1}{6} - \frac{z^2}{120} + \dots$
As $z \to 0$, $f(z) \to \frac{1}{6}$.
Since the limit is finite and non-zero, $z_0 = 0$ is neither a zero nor a pole. In fact, it's a removable singularity, and if we define $f(0) = 1/6$, the function becomes analytic at $z=0$.

**Answer 3:**
$f(z) = \frac{e^z}{z^2(z-1)^3}$.
The singularities occur where the denominator is zero: $z=0$ and $z=1$.

-   **At $z_0 = 0$:**
    We consider the behavior of $\frac{e^z}{(z-1)^3}$ near $z=0$.
    As $z \to 0$, $e^z \to e^0 = 1$.
    As $z \to 0$, $(z-1)^3 \to (0-1)^3 = -1$.
    So, near $z=0$, $f(z) \approx \frac{1}{z^2} \frac{1}{-1} = -\frac{1}{z^2}$.
    This suggests $z_0 = 0$ is a pole. To confirm the order, let's check the limit:
    $\lim_{z \to 0} z^2 f(z) = \lim_{z \to 0} z^2 \frac{e^z}{z^2(z-1)^3} = \lim_{z \to 0} \frac{e^z}{(z-1)^3} = \frac{e^0}{(0-1)^3} = \frac{1}{-1} = -1$.
    Since the limit is finite and non-zero, $z_0 = 0$ is a pole of order 2.

-   **At $z_0 = 1$:**
    We consider the behavior of $\frac{e^z}{z^2}$ near $z=1$.
    As $z \to 1$, $e^z \to e^1 = e$.
    As $z \to 1$, $z^2 \to 1^2 = 1$.
    So, near $z=1$, $f(z) \approx \frac{e}{1} \frac{1}{(z-1)^3} = \frac{e}{(z-1)^3}$.
    This suggests $z_0 = 1$ is a pole. To confirm the order, let's check the limit:
    $\lim_{z \to 1} (z-1)^3 f(z) = \lim_{z \to 1} (z-1)^3 \frac{e^z}{z^2(z-1)^3} = \lim_{z \to 1} \frac{e^z}{z^2} = \frac{e^1}{1^2} = e$.
    Since the limit is finite and non-zero, $z_0 = 1$ is a pole of order 3.

**Answer 4:**
$f(z) = \frac{z^2+1}{z-i}$.
The singularity is at $z_0 = i$.
We notice that the numerator is $z^2+1 = (z-i)(z+i)$.
So, $f(z) = \frac{(z-i)(z+i)}{z-i}$.
For $z \neq i$, $f(z) = z+i$.
The limit as $z \to i$ is $\lim_{z \to i} f(z) = \lim_{z \to i} (z+i) = i+i = 2i$.
Since the limit exists and is finite, $z_0 = i$ is a removable singularity.

---

### 8. Important Points to Remember

*   **Zeros:** $f(z_0) = 0$. Order $n$ means $f^{(n)}(z_0) \neq 0$ and $f^{(k)}(z_0) = 0$ for $k < n$. The Taylor series starts with $(z-z_0)^n$.
*   **Poles:** $f(z)$ goes to infinity at $z_0$. Order $m$ means $\lim_{z \to z_0} (z-z_0)^m f(z)$ is finite and non-zero. The Laurent series has a finite number of negative powers, the lowest being $(z-z_0)^{-m}$.
*   The function $1/f(z)$ has a zero of order $m$ at $z_0$ if $f(z)$ has a pole of order $m$ at $z_0$.
*   The classification of singularities (removable, pole, essential) depends on the behavior of the principal part of the Laurent series.
*   The location of zeros and poles of transfer functions is critical for stability and performance analysis in control systems and signal processing.

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=fNk_zzaMoEs) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=Kb3K1Ui4454) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=IYdiKeQ9xME) |


### References

*   **Kreyszig, E.** (2016). *Advanced Engineering Mathematics* (10th ed.). John Wiley & Sons. (Chapters on Complex Analytic Functions and their properties, Laurent Series).
*   **Zill, D. G., & Shanahan, P. D.** (2015). *Complex Analysis* (3rd ed.). Jones & Bartlett Learning. (Chapters on Singularities, Laurent Series, Zeros and Poles).
*   **Ramana, B. V.** (2023). *Higher Engineering Mathematics* (39th ed.). McGraw-Hill Education. (Sections on Complex Functions, Series Expansion).
*   **Grewal, B. S.** (2018). *Higher Engineering Mathematics* (44th ed.). Khanna Publishers. (Relevant sections on Complex Analysis).
*   **Rao, K. R., Kim, D. N., & Hwang, J. J.** (2011). *Fast Fourier Transform - Algorithms and Applications*. Springer. (For context on signal processing applications).

---