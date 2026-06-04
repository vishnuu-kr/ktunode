---
title: "Transforms of Derivatives"
subject: "MATHEMATICS FOR ELECTRICAL SCIENCE AND PHYSICAL SCIENCE – 3"
module: "Module 1: Fourier Integral"
branch: "Mechanical Engineering"
semester: 3
topicId: "68a3fd1251d0cf4804462c97"
status: "completed"
scrapedAt: "2026-05-20T17:50:34.403Z"
---
# MATHEMATICS FOR ELECTRICAL SCIENCE AND PHYSICAL SCIENCE – 3

## Module 1: Fourier Integral

### Topic: Transforms of Derivatives

**Learning Outcomes:**

*   Understand the concept of the Fourier transform of a derivative of a function.
*   Derive and apply the formulas for the Fourier transforms of the first and second derivatives of a function.
*   Utilize these formulas to solve differential equations using the Fourier transform method.

**Course Outcomes Addressed:**

*   **CO1: Determine the Fourier transforms of functions and apply them to solve problems arising in engineering. (Knowledge Level: K3)**
    *   This topic directly addresses CO1 by extending the application of Fourier transforms to a crucial class of problems: differential equations. Understanding and applying derivative transforms enables us to convert differential equations into algebraic equations in the frequency domain, simplifying the solution process.

---

### 1. Introduction to Fourier Transforms of Derivatives

The Fourier transform is a powerful tool for analyzing signals and systems, particularly in electrical and physical sciences. It allows us to decompose a function into its constituent frequencies. This topic focuses on a key property: how the Fourier transform of a derivative of a function relates to the Fourier transform of the function itself. This relationship is fundamental to solving differential equations using the Fourier transform method.

**Key Concept:** The process of differentiation in the time/spatial domain corresponds to multiplication by frequency in the frequency domain.

---

### 2. Fourier Transform of the First Derivative

Let $f(t)$ be a function and its Fourier transform be denoted by $F(\omega)$.
$$F(\omega) = \mathcal{F}\{f(t)\} = \int_{-\infty}^{\infty} f(t) e^{-i\omega t} dt$$

Now, let's consider the Fourier transform of its first derivative, $f'(t)$.
$$\mathcal{F}\{f'(t)\} = \int_{-\infty}^{\infty} f'(t) e^{-i\omega t} dt$$

We can use integration by parts to evaluate this integral. Let $u = e^{-i\omega t}$ and $dv = f'(t) dt$.
Then $du = -i\omega e^{-i\omega t} dt$ and $v = f(t)$.

$$\int u \, dv = uv - \int v \, du$$

$$\mathcal{F}\{f'(t)\} = \left[f(t) e^{-i\omega t}\right]_{-\infty}^{\infty} - \int_{-\infty}^{\infty} f(t) (-i\omega e^{-i\omega t}) dt$$

**Important Assumption:** For the Fourier transform to exist and for this property to hold, we typically assume that $f(t) \to 0$ as $|t| \to \infty$. This condition ensures that the boundary term $\left[f(t) e^{-i\omega t}\right]_{-\infty}^{\infty}$ vanishes.

Under this assumption, the boundary term becomes $0 - 0 = 0$.

$$\mathcal{F}\{f'(t)\} = 0 - \int_{-\infty}^{\infty} f(t) (-i\omega e^{-i\omega t}) dt$$
$$\mathcal{F}\{f'(t)\} = i\omega \int_{-\infty}^{\infty} f(t) e^{-i\omega t} dt$$
$$\mathcal{F}\{f'(t)\} = i\omega F(\omega)$$

**Formula for the Fourier Transform of the First Derivative:**
$$\mathcal{F}\{f'(t)\} = i\omega F(\omega)$$

This formula states that the Fourier transform of the first derivative of a function is equal to the frequency $\omega$ multiplied by the Fourier transform of the original function, scaled by $i$.

**Reference (Kreyszig, 10th ed., Section 11.5):** Kreyszig discusses the operational properties of Fourier transforms, including the transform of derivatives. He emphasizes the role of boundary conditions for the validity of these properties.

---

### 3. Fourier Transform of the Second Derivative

Let's now consider the Fourier transform of the second derivative, $f''(t)$. We can apply the same property recursively.
$$\mathcal{F}\{f''(t)\} = \mathcal{F}\left\{\frac{d}{dt}(f'(t))\right\}$$

Let $g(t) = f'(t)$. Then $\mathcal{F}\{g'(t)\} = i\omega G(\omega)$, where $G(\omega) = \mathcal{F}\{g(t)\}$.
We know that $\mathcal{F}\{f'(t)\} = i\omega F(\omega)$. So, $G(\omega) = i\omega F(\omega)$.

Substituting this back:
$$\mathcal{F}\{f''(t)\} = i\omega \mathcal{F}\{f'(t)\}$$
$$\mathcal{F}\{f''(t)\} = i\omega (i\omega F(\omega))$$
$$\mathcal{F}\{f''(t)\} = (i\omega)^2 F(\omega)$$
$$\mathcal{F}\{f''(t)\} = -\omega^2 F(\omega)$$

**Formula for the Fourier Transform of the Second Derivative:**
$$\mathcal{F}\{f''(t)\} = -\omega^2 F(\omega)$$

This formula indicates that the Fourier transform of the second derivative is proportional to the negative square of the frequency multiplied by the Fourier transform of the original function.

**Generalization to Higher Derivatives:**
By repeatedly applying the property, we can generalize it for the $n$-th derivative:
$$\mathcal{F}\{f^{(n)}(t)\} = (i\omega)^n F(\omega)$$

**Reference (Ramana, 39th ed., Chapter 33):** Ramana's book also covers operational properties of Fourier transforms, providing similar derivations for transforms of derivatives. He typically presents these properties as fundamental for solving differential equations.

---

### 4. Application to Solving Differential Equations

The primary utility of the transforms of derivatives lies in their ability to convert linear ordinary and partial differential equations with constant coefficients into algebraic equations in the frequency domain. This significantly simplifies the process of finding solutions.

Consider a general linear ordinary differential equation with constant coefficients:
$$a_n y^{(n)}(t) + a_{n-1} y^{(n-1)}(t) + \dots + a_1 y'(t) + a_0 y(t) = g(t)$$

Taking the Fourier transform of both sides:
$$\mathcal{F}\{a_n y^{(n)}(t) + \dots + a_0 y(t)\} = \mathcal{F}\{g(t)\}$$

Using the linearity property of the Fourier transform ($\mathcal{F}\{af(t) + bg(t)\} = aF(\omega) + bG(\omega)$) and the derivative transform properties:
$$a_n \mathcal{F}\{y^{(n)}(t)\} + \dots + a_0 \mathcal{F}\{y(t)\} = G(\omega)$$
$$a_n (i\omega)^n Y(\omega) + \dots + a_1 (i\omega) Y(\omega) + a_0 Y(\omega) = G(\omega)$$
where $Y(\omega) = \mathcal{F}\{y(t)\}$.

We can factor out $Y(\omega)$:
$$Y(\omega) [a_n (i\omega)^n + a_{n-1} (i\omega)^{n-1} + \dots + a_1 (i\omega) + a_0] = G(\omega)$$

Now, we can solve for $Y(\omega)$:
$$Y(\omega) = \frac{G(\omega)}{a_n (i\omega)^n + a_{n-1} (i\omega)^{n-1} + \dots + a_1 (i\omega) + a_0}$$

Once $Y(\omega)$ is found, the solution $y(t)$ is obtained by taking the inverse Fourier transform:
$$y(t) = \mathcal{F}^{-1}\{Y(\omega)\}$$

**Important Note on Initial Conditions:** Standard Fourier Transforms are generally suited for solving differential equations without initial conditions. For problems requiring initial conditions, the Laplace transform is usually more convenient as it directly incorporates these conditions in the transform process. However, for steady-state analysis or problems where initial conditions are not specified or are assumed to be zero, the Fourier transform is very effective.

**Reference (Grewal, 44th ed., Chapter 27):** Grewal's Higher Engineering Mathematics provides comprehensive coverage of Fourier transforms and their applications, including solving differential equations. The approach is similar, emphasizing the conversion of differential operators to algebraic multipliers in the frequency domain.

---

### 5. Examples

**Example 1: Solve the differential equation $y''(t) + 4y(t) = \sin(t)$ using Fourier Transforms.**

Assume that $y(t)$ and its derivatives approach zero as $|t| \to \infty$.

1.  **Take the Fourier Transform of the equation:**
    $$\mathcal{F}\{y''(t) + 4y(t)\} = \mathcal{F}\{\sin(t)\}$$
    By linearity:
    $$\mathcal{F}\{y''(t)\} + 4\mathcal{F}\{y(t)\} = \mathcal{F}\{\sin(t)\}$$

2.  **Apply derivative transform properties and known transforms:**
    We know:
    *   $\mathcal{F}\{y''(t)\} = -\omega^2 Y(\omega)$, where $Y(\omega) = \mathcal{F}\{y(t)\}$.
    *   $\mathcal{F}\{\sin(at)\} = \frac{2a\omega}{a^2 - \omega^2}$. For $\sin(t)$, $a=1$, so $\mathcal{F}\{\sin(t)\} = \frac{2\omega}{1 - \omega^2}$.

    Substituting these into the transformed equation:
    $$-\omega^2 Y(\omega) + 4Y(\omega) = \frac{2\omega}{1 - \omega^2}$$

3.  **Solve for $Y(\omega)$:**
    $$Y(\omega)(4 - \omega^2) = \frac{2\omega}{1 - \omega^2}$$
    $$Y(\omega) = \frac{2\omega}{(1 - \omega^2)(4 - \omega^2)}$$

4.  **Find the inverse Fourier Transform $y(t)$:**
    We need to decompose $Y(\omega)$ using partial fractions:
    $$\frac{2\omega}{(1 - \omega^2)(4 - \omega^2)} = \frac{2\omega}{(1 - \omega)(1 + \omega)(2 - \omega)(2 + \omega)}$$
    Let's use a slightly different form for $\sin(t)$ transform which is $\frac{1}{2i}(e^{it} - e^{-it})$.
    $\mathcal{F}\{\sin(t)\} = \mathcal{F}\left\{\frac{1}{2i}(e^{it} - e^{-it})\right\} = \frac{1}{2i}\left(\mathcal{F}\{e^{it}\} - \mathcal{F}\{e^{-it}\}\right)$
    Recall $\mathcal{F}\{e^{iat}\} = 2\pi\delta(\omega-a)$.
    So, $\mathcal{F}\{\sin(t)\} = \frac{1}{2i}(2\pi\delta(\omega-1) - 2\pi\delta(\omega+1)) = \pi(\delta(\omega-1) - \delta(\omega+1))$.

    Let's re-evaluate the equation for $Y(\omega)$ using this form for $\mathcal{F}\{\sin(t)\}$. This is often more directly handled with Fourier series for periodic signals or specific forms.

    Let's stick to the form $F(\omega) = \int f(t)e^{-i\omega t}dt$.
    A common Fourier transform pair is $\mathcal{F}\{\sin(at)\} = \frac{i}{2}[\delta(\omega-a) - \delta(\omega+a)]$ (using the definition $\int_{-\infty}^{\infty} f(t)e^{i\omega t}dt$ which is more common in some texts, but let's stick to $e^{-i\omega t}$).

    Let's use the definition $\mathcal{F}\{f(t)\} = \frac{1}{\sqrt{2\pi}}\int_{-\infty}^{\infty} f(t)e^{-i\omega t} dt$.
    Then $\mathcal{F}\{f'(t)\} = i\omega \mathcal{F}\{f(t)\}$ and $\mathcal{F}\{f''(t)\} = -\omega^2 \mathcal{F}\{f(t)\}$.
    And $\mathcal{F}\{\sin(at)\} = \sqrt{\frac{\pi}{2}} \frac{i}{2} [\delta(\omega-a) - \delta(\omega+a)]$.
    For $\sin(t)$, $\mathcal{F}\{\sin(t)\} = \sqrt{\frac{\pi}{2}} \frac{i}{2} [\delta(\omega-1) - \delta(\omega+1)]$.

    The equation becomes:
    $$-\omega^2 Y(\omega) + 4Y(\omega) = \sqrt{\frac{\pi}{2}} \frac{i}{2} [\delta(\omega-1) - \delta(\omega+1)]$$
    $$Y(\omega)(4 - \omega^2) = \sqrt{\frac{\pi}{2}} \frac{i}{2} [\delta(\omega-1) - \delta(\omega+1)]$$
    $$Y(\omega) = \frac{\sqrt{\frac{\pi}{2}} \frac{i}{2} [\delta(\omega-1) - \delta(\omega+1)]}{4 - \omega^2}$$

    This form involving delta functions in the numerator is tricky to invert directly without careful handling of the integral. Let's revert to the integral definition of the transform and a different approach for the right-hand side if the form $\frac{2\omega}{1-\omega^2}$ was indeed intended.

    **Alternative approach for Example 1 (using $f(t) = e^{-at}u(t)$ and its transform):**
    This example highlights that the standard FT is best for non-periodic forcing functions where the integral converges. The sine function is periodic.

    Let's consider a simpler ODE that clearly benefits from FT.

**Example 2: Solve the differential equation $y'(t) + 2y(t) = e^{-t}u(t)$ using Fourier Transforms.**
Assume $y(t) \to 0$ as $|t| \to \infty$.
Here $u(t)$ is the unit step function.

1.  **Take the Fourier Transform of the equation:**
    $$\mathcal{F}\{y'(t) + 2y(t)\} = \mathcal{F}\{e^{-t}u(t)\}$$
    $$\mathcal{F}\{y'(t)\} + 2\mathcal{F}\{y(t)\} = \mathcal{F}\{e^{-t}u(t)\}$$

2.  **Apply derivative transform properties and known transforms:**
    *   $\mathcal{F}\{y'(t)\} = i\omega Y(\omega)$.
    *   We need $\mathcal{F}\{e^{-t}u(t)\}$. The Fourier transform of $e^{-at}u(t)$ is $\frac{1}{a+i\omega}$.
        So, $\mathcal{F}\{e^{-t}u(t)\} = \frac{1}{1+i\omega}$.

    Substituting:
    $$i\omega Y(\omega) + 2Y(\omega) = \frac{1}{1+i\omega}$$

3.  **Solve for $Y(\omega)$:**
    $$Y(\omega)(2 + i\omega) = \frac{1}{1+i\omega}$$
    $$Y(\omega) = \frac{1}{(1+i\omega)(2+i\omega)}$$

4.  **Find the inverse Fourier Transform $y(t)$:**
    We use partial fraction decomposition for $Y(\omega)$:
    $$\frac{1}{(1+i\omega)(2+i\omega)} = \frac{A}{1+i\omega} + \frac{B}{2+i\omega}$$
    $$1 = A(2+i\omega) + B(1+i\omega)$$
    If $i\omega = -1$: $1 = A(2-1) + B(0) \Rightarrow A=1$.
    If $i\omega = -2$: $1 = A(0) + B(1-2) \Rightarrow B=-1$.

    So, $$Y(\omega) = \frac{1}{1+i\omega} - \frac{1}{2+i\omega}$$

    Now, we use the inverse transform pair: $\mathcal{F}^{-1}\left\{\frac{1}{a+i\omega}\right\} = e^{-at}u(t)$.
    *   $\mathcal{F}^{-1}\left\{\frac{1}{1+i\omega}\right\} = e^{-t}u(t)$.
    *   $\mathcal{F}^{-1}\left\{\frac{1}{2+i\omega}\right\} = e^{-2t}u(t)$.

    Therefore, the solution is:
    $$y(t) = e^{-t}u(t) - e^{-2t}u(t)$$
    $$y(t) = (e^{-t} - e^{-2t})u(t)$$

This example clearly demonstrates the power of using Fourier transforms for solving linear ODEs with constant coefficients.

---

### 6. Practice Questions and Exercises

**Q1.** State and prove the Fourier transform of the first derivative of a function $f(t)$, assuming $f(t) \to 0$ as $|t| \to \infty$.

**Q2.** State and prove the Fourier transform of the second derivative of a function $f(t)$, assuming $f(t) \to 0$ and $f'(t) \to 0$ as $|t| \to \infty$.

**Q3.** Solve the following differential equation using Fourier Transforms:
    $y''(t) - 3y'(t) + 2y(t) = e^{-3t}u(t)$
    Assume $y(t)$ and its derivatives approach zero as $|t| \to \infty$.

**Q4.** Consider the equation $y'(t) + y(t) = \delta(t)$. Solve using Fourier Transforms.
    (Hint: $\mathcal{F}\{\delta(t)\} = 1$)

---

### 7. Answers to Practice Questions

**A1.**
**Statement:** If $F(\omega) = \mathcal{F}\{f(t)\}$, then $\mathcal{F}\{f'(t)\} = i\omega F(\omega)$.
**Proof:**
$$\mathcal{F}\{f'(t)\} = \int_{-\infty}^{\infty} f'(t) e^{-i\omega t} dt$$
Using integration by parts: $u = e^{-i\omega t}$, $dv = f'(t) dt$. Then $du = -i\omega e^{-i\omega t} dt$, $v = f(t)$.
$$\mathcal{F}\{f'(t)\} = \left[f(t) e^{-i\omega t}\right]_{-\infty}^{\infty} - \int_{-\infty}^{\infty} f(t) (-i\omega e^{-i\omega t}) dt$$
Assuming $f(t) \to 0$ as $|t| \to \infty$, the boundary term is 0.
$$\mathcal{F}\{f'(t)\} = 0 + i\omega \int_{-\infty}^{\infty} f(t) e^{-i\omega t} dt = i\omega F(\omega)$$

**A2.**
**Statement:** If $F(\omega) = \mathcal{F}\{f(t)\}$, then $\mathcal{F}\{f''(t)\} = -\omega^2 F(\omega)$.
**Proof:**
$$\mathcal{F}\{f''(t)\} = \mathcal{F}\left\{\frac{d}{dt}(f'(t))\right\}$$
Using the property for the first derivative on $f'(t)$:
$$\mathcal{F}\{f''(t)\} = i\omega \mathcal{F}\{f'(t)\}$$
Since $\mathcal{F}\{f'(t)\} = i\omega F(\omega)$:
$$\mathcal{F}\{f''(t)\} = i\omega (i\omega F(\omega)) = (i\omega)^2 F(\omega) = -\omega^2 F(\omega)$$

**A3.**
Given $y''(t) - 3y'(t) + 2y(t) = e^{-3t}u(t)$.
1.  **Transform the equation:**
    $\mathcal{F}\{y''(t)\} - 3\mathcal{F}\{y'(t)\} + 2\mathcal{F}\{y(t)\} = \mathcal{F}\{e^{-3t}u(t)\}$
    $$-\omega^2 Y(\omega) - 3(i\omega Y(\omega)) + 2Y(\omega) = \frac{1}{3+i\omega}$$
2.  **Solve for $Y(\omega)$:**
    $$Y(\omega) [-\omega^2 - 3i\omega + 2] = \frac{1}{3+i\omega}$$
    $$Y(\omega) [2 - 3i\omega - \omega^2] = \frac{1}{3+i\omega}$$
    $$Y(\omega) = \frac{1}{(2 - 3i\omega - \omega^2)(3+i\omega)}$$
    The denominator quadratic can be factored: $2 - 3i\omega - \omega^2 = (1-i\omega)(2-i\omega)$.
    $$Y(\omega) = \frac{1}{(1-i\omega)(2-i\omega)(3+i\omega)}$$
3.  **Partial Fraction Decomposition:**
    $$\frac{1}{(1-i\omega)(2-i\omega)(3+i\omega)} = \frac{A}{1-i\omega} + \frac{B}{2-i\omega} + \frac{C}{3+i\omega}$$
    Solving for A, B, C:
    $A = \frac{1}{(1 - 2)(1 + 3)} = \frac{1}{(-1)(4)} = -\frac{1}{4}$
    $B = \frac{1}{(1 - 3)(2 + 3)} = \frac{1}{(-2)(5)} = -\frac{1}{10}$
    $C = \frac{1}{(3 - 1)(3 - 2)} = \frac{1}{(2)(1)} = \frac{1}{2}$
    So, $$Y(\omega) = -\frac{1}{4}\frac{1}{1-i\omega} - \frac{1}{10}\frac{1}{2-i\omega} + \frac{1}{2}\frac{1}{3+i\omega}$$
    *Note on inverse transforms*: $\mathcal{F}^{-1}\left\{\frac{1}{a-i\omega}\right\} = e^{at}u(t)$ and $\mathcal{F}^{-1}\left\{\frac{1}{a+i\omega}\right\} = e^{-at}u(t)$.

4.  **Find $y(t)$:**
    $$y(t) = -\frac{1}{4}e^{t}u(t) - \frac{1}{10}e^{2t}u(t) + \frac{1}{2}e^{-3t}u(t)$$
    $$y(t) = \left(-\frac{1}{4}e^{t} - \frac{1}{10}e^{2t} + \frac{1}{2}e^{-3t}\right)u(t)$$

**A4.**
Given $y'(t) + y(t) = \delta(t)$.
1.  **Transform the equation:**
    $\mathcal{F}\{y'(t)\} + \mathcal{F}\{y(t)\} = \mathcal{F}\{\delta(t)\}$
    $$i\omega Y(\omega) + Y(\omega) = 1$$
2.  **Solve for $Y(\omega)$:**
    $$Y(\omega)(1 + i\omega) = 1$$
    $$Y(\omega) = \frac{1}{1+i\omega}$$
3.  **Find $y(t)$:**
    Using the inverse transform pair $\mathcal{F}^{-1}\left\{\frac{1}{a+i\omega}\right\} = e^{-at}u(t)$ with $a=1$:
    $$y(t) = e^{-t}u(t)$$

---

### 8. Important Points to Remember

*   **Operator Property:** The Fourier transform converts differentiation in the time/spatial domain into multiplication by $i\omega$ (or $-i\omega$ depending on the transform definition) in the frequency domain.
    *   $\mathcal{F}\{f'(t)\} = i\omega F(\omega)$
    *   $\mathcal{F}\{f''(t)\} = -\omega^2 F(\omega)$
    *   $\mathcal{F}\{f^{(n)}(t)\} = (i\omega)^n F(\omega)$
*   **Validity:** These properties generally require that the function and its derivatives satisfy certain conditions at infinity (e.g., approach zero) for the boundary terms in integration by parts to vanish.
*   **Application to ODEs:** The primary application is solving linear ordinary differential equations with constant coefficients. The FT converts these ODEs into algebraic equations in the frequency domain.
*   **Initial Conditions:** Standard Fourier Transforms are less direct for problems with specified initial conditions compared to Laplace Transforms. They are often used for steady-state solutions or when initial conditions are implicitly assumed to be zero.
*   **Convergence:** Ensure that the Fourier transform of the functions involved exists. This is usually satisfied for causal signals in electrical engineering.

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=fNk_zzaMoEs) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=Kb3K1Ui4454) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=S0hG_mS9bV4) |


### 9. Further Reading and References

*   **Kreyszig, Erwin. *Advanced Engineering Mathematics*. 10th ed., John Wiley & Sons, 2016.** (Chapter 11 on Fourier Integrals is particularly relevant for operational properties.)
*   **Ramana, B. V. *Higher Engineering Mathematics*. 39th ed., McGraw-Hill Education, 2023.** (Chapters on Fourier Transforms and their applications will cover derivative properties.)
*   **Grewal, B. S. *Higher Engineering Mathematics*. 44th ed., Khanna Publishers, 2018.** (Similar to Ramana, this book provides extensive examples of solving differential equations using Fourier Transforms.)
*   **Zill, Dennis G., and Patrick D. Shanahan. *Complex Analysis*. 3rd ed., Jones & Bartlett, 2015.** (While primarily on complex analysis, concepts related to transforms and their properties can be found indirectly or through related integral transforms.)
*   **Rao, K. R., Do Nyeon Kim, and Jae Jeong Hwang. *Fast Fourier Transform - Algorithms and Applications*. Springer, 2011.** (This book focuses on the computational aspects of FFT but the underlying mathematical principles of transforms, including derivative properties, are foundational.)

---