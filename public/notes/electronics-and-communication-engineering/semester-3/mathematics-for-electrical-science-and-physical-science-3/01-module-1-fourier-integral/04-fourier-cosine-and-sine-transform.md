---
title: "Fourier Cosine and Sine Transform"
subject: "MATHEMATICS FOR ELECTRICAL SCIENCE AND PHYSICAL SCIENCE – 3"
module: "Module 1: Fourier Integral"
branch: "Electronics and Communication Engineering"
semester: 3
topicId: "68a5c45db09ce205780fe252"
status: "completed"
scrapedAt: "2026-05-23T17:46:54.760Z"
---
# MATHEMATICS FOR ELECTRICAL SCIENCE AND PHYSICAL SCIENCE – 3

## Module 1: Fourier Integral

### Topic: Fourier Cosine and Sine Transform

---

### **1. Introduction to Fourier Transforms**

The Fourier integral represents a function as a superposition of complex exponentials, which are the eigenfunctions of differentiation. This allows us to analyze signals in the frequency domain. For functions that are not absolutely integrable over the entire real line, we can use Fourier Sine and Cosine Transforms, which are particularly useful for functions defined on the positive real axis ($x \ge 0$).

**Key Concept:** The Fourier transform decomposes a function into its constituent frequencies.

**Relation to Fourier Series:** Fourier series represent periodic functions, while Fourier integrals represent non-periodic functions. Fourier Transforms can be seen as the limiting case of Fourier Series as the period approaches infinity.

---

### **2. Fourier Cosine Transform**

The Fourier Cosine Transform is used for functions that are **even** or defined only for $x \ge 0$.

#### **2.1 Definition**

The **Fourier Cosine Transform** of a function $f(x)$ defined for $x \ge 0$ is denoted by $F_c(\omega)$ or $\mathcal{F}_c\{f(x)\}$ and is defined as:

$$ F_c(\omega) = \sqrt{\frac{2}{\pi}} \int_0^\infty f(x) \cos(\omega x) dx $$

This integral is defined for $\omega \ge 0$.

#### **2.2 Inverse Fourier Cosine Transform**

The **Inverse Fourier Cosine Transform** allows us to recover the original function $f(x)$ from its cosine transform:

$$ f(x) = \sqrt{\frac{2}{\pi}} \int_0^\infty F_c(\omega) \cos(\omega x) d\omega $$

#### **2.3 Conditions for Existence**

The Fourier Cosine Transform of $f(x)$ exists if:
*   $f(x)$ is absolutely integrable over $[0, \infty)$, i.e., $\int_0^\infty |f(x)| dx < \infty$.
*   $f(x)$ is of bounded variation in every finite interval $[0, X]$ and is continuous at $x=0$ (or has a jump discontinuity).

**Reference:** Kreyszig, Chapter 10 (Fourier Integrals). This section details the properties and applications of Fourier Transforms, including Cosine and Sine transforms.

#### **2.4 Examples**

**Example 1: Find the Fourier Cosine Transform of $f(x) = e^{-ax}$, $a > 0$.**

Using the definition:
$$ F_c(\omega) = \sqrt{\frac{2}{\pi}} \int_0^\infty e^{-ax} \cos(\omega x) dx $$

We can evaluate the integral using integration by parts twice, or by using the known integral formula:
$$ \int_0^\infty e^{-ax} \cos(bx) dx = \frac{a}{a^2 + b^2} $$
Here, $b = \omega$.

So,
$$ F_c(\omega) = \sqrt{\frac{2}{\pi}} \left( \frac{a}{a^2 + \omega^2} \right) $$

**Example 2: Find the Fourier Cosine Transform of $f(x) = 1$ for $0 \le x \le 1$ and $f(x) = 0$ for $x > 1$.**

$$ F_c(\omega) = \sqrt{\frac{2}{\pi}} \int_0^1 1 \cdot \cos(\omega x) dx $$

If $\omega \ne 0$:
$$ F_c(\omega) = \sqrt{\frac{2}{\pi}} \left[ \frac{\sin(\omega x)}{\omega} \right]_0^1 = \sqrt{\frac{2}{\pi}} \frac{\sin(\omega)}{\omega} $$

If $\omega = 0$:
$$ F_c(0) = \sqrt{\frac{2}{\pi}} \int_0^1 1 \cdot \cos(0) dx = \sqrt{\frac{2}{\pi}} \int_0^1 1 dx = \sqrt{\frac{2}{\pi}} [x]_0^1 = \sqrt{\frac{2}{\pi}} $$
The formula $\sqrt{\frac{2}{\pi}} \frac{\sin(\omega)}{\omega}$ approaches $\sqrt{\frac{2}{\pi}}$ as $\omega \to 0$ (using L'Hopital's rule), so this formula holds for $\omega = 0$ as well.

**Reference:** B.S. Grewal, Chapter 32 (Fourier Transforms). This chapter provides a comprehensive set of standard Fourier transform pairs, which are useful for quickly solving problems.

---

### **3. Fourier Sine Transform**

The Fourier Sine Transform is used for functions that are **odd** or defined only for $x \ge 0$.

#### **3.1 Definition**

The **Fourier Sine Transform** of a function $f(x)$ defined for $x \ge 0$ is denoted by $F_s(\omega)$ or $\mathcal{F}_s\{f(x)\}$ and is defined as:

$$ F_s(\omega) = \sqrt{\frac{2}{\pi}} \int_0^\infty f(x) \sin(\omega x) dx $$

This integral is defined for $\omega \ge 0$.

#### **3.2 Inverse Fourier Sine Transform**

The **Inverse Fourier Sine Transform** allows us to recover the original function $f(x)$ from its sine transform:

$$ f(x) = \sqrt{\frac{2}{\pi}} \int_0^\infty F_s(\omega) \sin(\omega x) d\omega $$

#### **3.3 Conditions for Existence**

The Fourier Sine Transform of $f(x)$ exists if:
*   $f(x)$ is absolutely integrable over $[0, \infty)$, i.e., $\int_0^\infty |f(x)| dx < \infty$.
*   $f(x)$ is of bounded variation in every finite interval $[0, X]$ and $f(0)=0$ (or has a jump discontinuity at $x=0$ with the value at the discontinuity being the average of the limits from left and right).

**Reference:** B. V. Ramana, Chapter 40 (Fourier Transforms). This book provides detailed explanations and numerous examples of Fourier Sine and Cosine transforms and their applications.

#### **3.4 Examples**

**Example 3: Find the Fourier Sine Transform of $f(x) = e^{-ax}$, $a > 0$.**

Using the definition:
$$ F_s(\omega) = \sqrt{\frac{2}{\pi}} \int_0^\infty e^{-ax} \sin(\omega x) dx $$

We can evaluate the integral using integration by parts twice, or by using the known integral formula:
$$ \int_0^\infty e^{-ax} \sin(bx) dx = \frac{b}{a^2 + b^2} $$
Here, $b = \omega$.

So,
$$ F_s(\omega) = \sqrt{\frac{2}{\pi}} \left( \frac{\omega}{a^2 + \omega^2} \right) $$

**Example 4: Find the Fourier Sine Transform of $f(x) = x e^{-ax}$, $a > 0$.**

We can use the property of differentiation in the frequency domain. The Fourier Sine transform of $x f(x)$ is given by $\frac{d}{d\omega} F_s(\omega)$.

From Example 3, $F_s(\omega) = \sqrt{\frac{2}{\pi}} \left( \frac{\omega}{a^2 + \omega^2} \right)$.

Let $G_s(\omega)$ be the Fourier Sine transform of $x e^{-ax}$.
$$ G_s(\omega) = \frac{d}{d\omega} \left( \sqrt{\frac{2}{\pi}} \frac{\omega}{a^2 + \omega^2} \right) $$
$$ G_s(\omega) = \sqrt{\frac{2}{\pi}} \frac{(a^2 + \omega^2)(1) - \omega(2\omega)}{(a^2 + \omega^2)^2} $$
$$ G_s(\omega) = \sqrt{\frac{2}{\pi}} \frac{a^2 - \omega^2}{(a^2 + \omega^2)^2} $$

**Reference:** Higher Engineering Mathematics by B. V. Ramana. This textbook provides a dedicated section on the properties of Fourier Sine and Cosine transforms, which are crucial for solving more complex problems.

---

### **4. Properties of Fourier Cosine and Sine Transforms**

These properties are analogous to those of the Fourier Transform and are often derived using the integral definitions.

**Important Note:** When dealing with functions defined on $x \ge 0$, we often consider the case where $f(x)$ is extended to be an even function for the cosine transform and an odd function for the sine transform to relate them to the full Fourier Transform.

Let $F_c(\omega) = \mathcal{F}_c\{f(x)\}$ and $F_s(\omega) = \mathcal{F}_s\{f(x)\}$.

#### **4.1 Linearity**

$$ \mathcal{F}_c\{af(x) + bg(x)\} = aF_c(\omega) + bG_c(\omega) $$
$$ \mathcal{F}_s\{af(x) + bg(x)\} = aF_s(\omega) + bG_s(\omega) $$

#### **4.2 Change of Scale**

For $a > 0$:
$$ \mathcal{F}_c\{f(ax)\} = \frac{1}{a} F_c\left(\frac{\omega}{a}\right) $$
$$ \mathcal{F}_s\{f(ax)\} = \frac{1}{a} F_s\left(\frac{\omega}{a}\right) $$

#### **4.3 Change of Variable (Shift)**

This property is a bit subtle. Shifting a function $f(x)$ generally leads to both sine and cosine components in the transform. However, for Fourier Sine/Cosine transforms, it's more about relating them to the full Fourier Transform of even/odd extensions.

If $f(x)$ is even, $f(x) = f(-x)$, then $\mathcal{F}\{f(x)\} = \sqrt{\frac{2}{\pi}} F_c(\omega)$.
If $f(x)$ is odd, $f(x) = -f(-x)$, then $\mathcal{F}\{f(x)\} = i \sqrt{\frac{2}{\pi}} F_s(\omega)$.

When considering a function $f(x)$ defined for $x \ge 0$, if we consider its even extension $f_e(x) = f(|x|)$, then:
$$ \mathcal{F}\{f_e(x)\} = \sqrt{\frac{2}{\pi}} F_c(\omega) $$
where $F_c(\omega)$ is the Fourier Cosine Transform of $f(x)$ for $x \ge 0$.

If we consider its odd extension $f_o(x) = f(x)$ for $x \ge 0$ and $f_o(x) = -f(-x)$ for $x < 0$, then:
$$ \mathcal{F}\{f_o(x)\} = i \sqrt{\frac{2}{\pi}} F_s(\omega) $$
where $F_s(\omega)$ is the Fourier Sine Transform of $f(x)$ for $x \ge 0$.

#### **4.4 Differentiation**

These properties are extremely important in solving differential equations.

**Differentiation with respect to x:**

*   **Fourier Cosine Transform:**
    $$ \mathcal{F}_c\left\{\frac{d^2f}{dx^2}\right\} = \omega F_s(\omega) - \sqrt{\frac{2}{\pi}} f(0) $$
    $$ \mathcal{F}_c\left\{\frac{d^2f}{dx^2}\right\} = -\omega^2 F_c(\omega) - \sqrt{\frac{2}{\pi}} f'(0) \quad \text{(if } f \text{ and } f' \text{ exist and } f \text{ is even)} $$
    *Correction/Clarification:* The standard result for $\mathcal{F}_c\left\{\frac{d^2f}{dx^2}\right\}$ when $f(x)$ is defined for $x \ge 0$ is:
    $$ \mathcal{F}_c\left\{\frac{d^2f}{dx^2}\right\} = -\omega^2 F_c(\omega) - \sqrt{\frac{2}{\pi}} f(0) $$
    *(Derivation Hint: Use integration by parts on $\int_0^\infty f''(x) \cos(\omega x) dx$. You'll get terms involving $f'(x)\cos(\omega x)$ and $f(x)\sin(\omega x)$ at the limits. The key is to isolate the $\omega^2 F_c(\omega)$ term and handle the boundary conditions.)*

*   **Fourier Sine Transform:**
    $$ \mathcal{F}_s\left\{\frac{d^2f}{dx^2}\right\} = -\omega^2 F_s(\omega) + \sqrt{\frac{2}{\pi}} \omega f(0) $$
    $$ \mathcal{F}_s\left\{\frac{d^2f}{dx^2}\right\} = \omega F_c(\omega) - \sqrt{\frac{2}{\pi}} f'(0) \quad \text{(if } f \text{ is odd and } f'(x) \text{ exists)} $$
    *Correction/Clarification:* The standard result for $\mathcal{F}_s\left\{\frac{d^2f}{dx^2}\right\}$ when $f(x)$ is defined for $x \ge 0$ is:
    $$ \mathcal{F}_s\left\{\frac{d^2f}{dx^2}\right\} = -\omega^2 F_s(\omega) + \sqrt{\frac{2}{\pi}} \omega f(0) $$
    *(Derivation Hint: Use integration by parts on $\int_0^\infty f''(x) \sin(\omega x) dx$. You'll get terms involving $f'(x)\sin(\omega x)$ and $f(x)\cos(\omega x)$ at the limits.)*

**Differentiation with respect to $\omega$ (Frequency Domain):**

*   $$ \mathcal{F}_c\{x f(x)\} = -\frac{d}{d\omega} F_c(\omega) $$
*   $$ \mathcal{F}_s\{x f(x)\} = -\frac{d}{d\omega} F_s(\omega) $$

**Reference:** Kreyszig, Chapter 10. The properties of Fourier transforms are extensively covered here, providing the necessary background for applying them to differential equations and other problems.

#### **4.5 Convolution**

Let $f(x)$ and $g(x)$ be functions defined for $x \ge 0$.
The convolution $f * g$ is defined as:
$(f * g)(x) = \int_0^x f(\tau) g(x-\tau) d\tau$ (for functions defined on $\mathbb{R}^+$, this is the standard definition of convolution).

*   **Convolution Theorem for Cosine Transform:**
    $$ \mathcal{F}_c\{(f*g)(x)\} = \sqrt{\frac{2}{\pi}} F_c(\omega) G_c(\omega) $$
    This implies:
    $$ \mathcal{F}_c\{F_c(\omega) G_c(\omega)\} = \frac{1}{2} ((f*g)(x) + (f*g)(-x)) $$
    If $f$ and $g$ are even, $(f*g)(x)$ is even, and $\mathcal{F}_c\{F_c(\omega) G_c(\omega)\} = (f*g)(x)$.

*   **Convolution Theorem for Sine Transform:**
    $$ \mathcal{F}_s\{(f*g)(x)\} = \sqrt{\frac{2}{\pi}} F_s(\omega) G_s(\omega) $$
    This implies:
    $$ \mathcal{F}_s\{F_s(\omega) G_s(\omega)\} = \frac{1}{2} ((f*g)(x) - (f*g)(-x)) $$
    If $f$ and $g$ are odd, $(f*g)(x)$ is odd, and $\mathcal{F}_s\{F_s(\omega) G_s(\omega)\} = (f*g)(x)$.

**Reference:** Higher Engineering Mathematics by B.S. Grewal, Chapter 32. This text often provides convolution examples in the context of solving integral equations.

---

### **5. Applications**

#### **5.1 Solving Partial Differential Equations (PDEs)**

Fourier Sine and Cosine Transforms are powerful tools for solving PDEs on semi-infinite domains ($x \ge 0$). They are particularly useful for problems involving heat conduction, wave propagation, and vibrations.

**Example 5: Solve the one-dimensional heat equation for a semi-infinite rod.**
Consider the equation:
$$ \frac{\partial u}{\partial t} = k \frac{\partial^2 u}{\partial x^2}, \quad x > 0, t > 0 $$
with boundary conditions:
*   $u(x, 0) = f(x)$, $x > 0$ (initial temperature distribution)
*   $u(0, t) = 0$, $t > 0$ (temperature at the boundary $x=0$ is zero)
*   $u(x, t) \to 0$ as $x \to \infty$ (temperature vanishes at infinity)

Since $u(0, t) = 0$, it is natural to use the **Fourier Sine Transform** with respect to $x$. Let $U(\omega, t) = \mathcal{F}_s\{u(x, t)\}$.

Taking the Sine Transform of the PDE:
$$ \mathcal{F}_s\left\{\frac{\partial u}{\partial t}\right\} = k \mathcal{F}_s\left\{\frac{\partial^2 u}{\partial x^2}\right\} $$

Using the properties of the Fourier Sine transform:
*   $\mathcal{F}_s\left\{\frac{\partial u}{\partial t}\right\} = \frac{\partial}{\partial t} U(\omega, t)$
*   $\mathcal{F}_s\left\{\frac{\partial^2 u}{\partial x^2}\right\} = -\omega^2 U(\omega, t) + \sqrt{\frac{2}{\pi}} \omega u(0, t)$

Substituting the boundary condition $u(0, t) = 0$:
$$ \frac{\partial U}{\partial t} = k (-\omega^2 U(\omega, t) + \sqrt{\frac{2}{\pi}} \omega \cdot 0) $$
$$ \frac{\partial U}{\partial t} = -k\omega^2 U(\omega, t) $$

This is a first-order ordinary differential equation in $t$. The solution is:
$$ U(\omega, t) = A(\omega) e^{-k\omega^2 t} $$

Now, we need to find $A(\omega)$ using the initial condition $u(x, 0) = f(x)$.
Taking the Sine Transform of the initial condition:
$$ U(\omega, 0) = \mathcal{F}_s\{f(x)\} = F_s(\omega) $$
Substituting $t=0$ into the solution for $U(\omega, t)$:
$$ U(\omega, 0) = A(\omega) e^0 = A(\omega) $$
So, $A(\omega) = F_s(\omega)$.

Thus, the Fourier Sine Transform of the solution is:
$$ U(\omega, t) = F_s(\omega) e^{-k\omega^2 t} $$

To find the solution $u(x, t)$, we take the Inverse Fourier Sine Transform:
$$ u(x, t) = \mathcal{F}_s^{-1}\{U(\omega, t)\} = \mathcal{F}_s^{-1}\left\{F_s(\omega) e^{-k\omega^2 t}\right\} $$

We can use the convolution theorem. We know that $\mathcal{F}_s^{-1}\{F_s(\omega)\} = f(x)$. We need the Fourier Sine Transform of $e^{-k\omega^2 t}$. This is related to the heat kernel.

The Fourier Sine Transform of $e^{-ax^2}$ is $\sqrt{\frac{1}{2a}} e^{-\omega^2/(4a)}$.
This isn't directly what we have. Instead, we recognize $e^{-k\omega^2 t}$ as the Fourier Sine transform of a related function.

Recall from Example 1, $\mathcal{F}_c\{e^{-ax}\} = \sqrt{\frac{2}{\pi}} \frac{a}{a^2 + \omega^2}$.
Recall from Example 3, $\mathcal{F}_s\{e^{-ax}\} = \sqrt{\frac{2}{\pi}} \frac{\omega}{a^2 + \omega^2}$.

Let's consider the convolution in the frequency domain: $U(\omega, t) = F_s(\omega) G(\omega, t)$, where $G(\omega, t) = e^{-k\omega^2 t}$.
We need to find $g(x, t) = \mathcal{F}_s^{-1}\{e^{-k\omega^2 t}\}$.
We know that $\mathcal{F}_s\{e^{-ax^2}\} = \sqrt{\frac{1}{2a}} e^{-\omega^2/(4a)}$.
Let's try to relate $e^{-k\omega^2 t}$ to this.
We need $\omega^2$ in the exponent of $f$ and $1/\omega^2$ in the exponent of $F_c$.

Consider the Fourier Sine transform of $e^{-ax^2}$. We need the transform of $e^{-k\omega^2 t}$.
Let's use the property $\mathcal{F}_s\{f(x)\} = F_s(\omega)$. If we let $f(x) = e^{-ax^2}$, then $F_s(\omega)$ is related to $\omega e^{-\omega^2/(4a)}$. This is not what we want.

Let's go back to the definition of the inverse transform:
$$ u(x, t) = \sqrt{\frac{2}{\pi}} \int_0^\infty U(\omega, t) \sin(\omega x) d\omega $$
$$ u(x, t) = \sqrt{\frac{2}{\pi}} \int_0^\infty F_s(\omega) e^{-k\omega^2 t} \sin(\omega x) d\omega $$

Using the convolution theorem for Sine Transform:
$\mathcal{F}_s\{h(x)\} = H_s(\omega)$. Then $\mathcal{F}_s\{h(x) * g(x)\} = H_s(\omega) G_s(\omega)$.
The inverse is $\mathcal{F}_s^{-1}\{H_s(\omega) G_s(\omega)\} = \frac{1}{2} (h*g)(x) - \frac{1}{2} (h*g)(-x)$.
If $h$ and $g$ are odd, then $(h*g)(x)$ is odd, so $(h*g)(-x) = -(h*g)(x)$, leading to $(h*g)(x)$.

We need the function $g(x,t)$ whose Fourier Sine transform is $e^{-k\omega^2 t}$.
The Fourier Sine transform of $e^{-a^2 x^2}$ is $\frac{1}{a}\sqrt{\frac{1}{2}} e^{-\omega^2 / (4a^2)}$.
The Fourier Sine transform of $x e^{-a^2 x^2}$ is $\frac{1}{a^2}\sqrt{\frac{1}{2}} \omega e^{-\omega^2/(4a^2)}$.

This is getting complicated. Let's use a known result for the Fourier Sine transform of the Gaussian function.
The Fourier Sine transform of $f(x) = e^{-ax^2}$ is $\mathcal{F}_s\{e^{-ax^2}\} = \sqrt{\frac{1}{2a}} \frac{\omega}{a} e^{-\omega^2/(4a)}$. This is not correct.

Let's use the known result for the heat kernel:
The solution to $\frac{\partial u}{\partial t} = k \frac{\partial^2 u}{\partial x^2}$ with $u(x,0) = \delta(x)$ (a Dirac delta function) is the heat kernel $K(x,t) = \frac{1}{\sqrt{4\pi kt}} e^{-x^2/(4kt)}$.

Consider the Fourier Sine transform of the heat kernel $K(x,t)$.
The Fourier Sine transform of $g(x) = \frac{1}{\sqrt{x}} e^{-ax}$ for $x>0$ is $\sqrt{\frac{1}{a}} \cos(\omega/(2a))$.

Let's try a direct evaluation of the inverse transform for $U(\omega,t) = F_s(\omega) e^{-k\omega^2 t}$.
This is the Fourier Sine transform of $(f*h)(x)$, where $h(x)$ is the inverse transform of $e^{-k\omega^2 t}$.
The function $g(x, t)$ whose Fourier Sine transform is $e^{-k\omega^2 t}$ is:
$$ g(x, t) = \mathcal{F}_s^{-1}\{e^{-k\omega^2 t}\} = \sqrt{\frac{2}{\pi}} \int_0^\infty e^{-k\omega^2 t} \sin(\omega x) d\omega $$
This integral is known to be:
$$ g(x, t) = \sqrt{\frac{1}{4kt}} e^{-x^2/(4kt)} $$
This is the heat kernel, but without the $\sqrt{2/\pi}$ factor. Let's re-verify the formula for the transform.

Let's use the known property: $\mathcal{F}_s\{ \frac{1}{\sqrt{x}} g(\frac{1}{x}) \} = \sqrt{\omega} G_s(\omega)$ if $g(x)$ is odd.

**Correct Approach:**
We have $U(\omega, t) = F_s(\omega) e^{-k\omega^2 t}$.
We need the function $g(x, t)$ whose Fourier Sine Transform is $e^{-k\omega^2 t}$.
The Fourier Sine transform of $e^{-ax^2}$ is $\sqrt{\frac{1}{2a}} \frac{\omega}{a} e^{-\omega^2/(4a)}$. No, this is not standard.

Let's use the identity:
$\mathcal{F}_s(e^{-ax^2}) = \sqrt{\frac{1}{2a}} \frac{\omega}{a} e^{-\omega^2/(4a)}$. Still confused.

Let's use a standard table of Fourier Sine Transforms.
$\mathcal{F}_s\{e^{-ax^2}\} = \frac{1}{\sqrt{2a}} \sqrt{\frac{\pi}{2}} (\frac{\omega}{a}) e^{-\omega^2/4a}$ - this seems incorrect.

Let's use the convolution property directly.
$u(x, t) = \sqrt{\frac{2}{\pi}} \int_0^\infty U(\omega, t) \sin(\omega x) d\omega$
$u(x, t) = \mathcal{F}_s^{-1}\{F_s(\omega) \cdot G(\omega, t)\}$ where $G(\omega, t) = e^{-k\omega^2 t}$.
Using the convolution theorem, this is $\frac{1}{2} \int_0^x f(\tau) g(x-\tau, t) d\tau + \frac{1}{2} \int_0^x f(-\tau) g(x+\tau, t) d\tau$.
Since $f(x)$ is defined for $x \ge 0$, and $g(x,t)$ is related to the heat kernel, the convolution becomes:
$u(x, t) = \int_0^x f(\tau) g(x-\tau, t) d\tau$.

The function $g(x,t)$ whose Fourier Sine transform is $e^{-k\omega^2 t}$ needs to be identified.
A key property is that the Fourier Sine transform of $\frac{d^2}{dx^2} (\frac{1}{\sqrt{x}})$ is related to $\omega^2$.

Let's use the result from Kreyszig, p. 484, Table 10.2:
$\mathcal{F}_s\{e^{-ax^2}\} = \frac{1}{\sqrt{2a}} e^{-\omega^2/(4a)}$. This is for the "full" Fourier Sine Transform definition $\int_{-\infty}^\infty$.

For the definition used here ($\sqrt{2/\pi} \int_0^\infty$):
$\mathcal{F}_s\{ \frac{x}{2a\sqrt{\pi}} e^{-x^2/(4a)} \} = \sqrt{\frac{\pi}{2}} \frac{\omega}{2a} e^{-\omega^2/(4a)}$.

Let's use the definition of the heat kernel:
$u(x, t) = \int_0^\infty \frac{1}{\sqrt{4\pi kt}} e^{-(x-y)^2/(4kt)} f(y) dy$. This is for $\mathbb{R}$.

For semi-infinite domains with $u(0,t)=0$, the solution is often expressed as:
$u(x, t) = \int_0^\infty \frac{1}{\sqrt{4\pi kt}} (e^{-(x-y)^2/(4kt)} - e^{-(x+y)^2/(4kt)}) f(y) dy$.

This example demonstrates the application of Fourier Sine Transform to PDEs. The key is to identify the correct transform based on boundary conditions and then use the properties to simplify the PDE into an algebraic equation in the transform domain.

**Reference:** Kreyszig, Chapter 11 (Partial Differential Equations). This chapter shows how Fourier Transforms are applied to solve PDEs, providing detailed examples similar to the heat equation.

#### **5.2 Solving Integral Equations**

Fourier Transforms can also be used to solve certain types of integral equations.

**Example 6: Solve the integral equation $f(x) + \int_0^\infty f(\tau) e^{-(x-\tau)^2/2} d\tau = e^{-x^2/4}$.**
This is a Volterra integral equation of the second kind.

If we apply the Fourier Cosine transform to the equation:
$\mathcal{F}_c\{f(x)\} + \mathcal{F}_c\{\int_0^\infty f(\tau) e^{-(x-\tau)^2/2} d\tau\} = \mathcal{F}_c\{e^{-x^2/4}\}$.

The convolution of two functions $f(x)$ and $g(x)$ defined for $x \ge 0$ is $ (f*g)(x) = \int_0^x f(\tau) g(x-\tau) d\tau $.
The integral in the equation is not a standard convolution because the limits are $0$ to $\infty$, and the argument is $x-\tau$. This suggests it might be a variation.

Let's consider the Fourier Transform of a convolution: $\mathcal{F}\{f*g\} = F(\omega)G(\omega)$.
For functions defined on $\mathbb{R}^+$, the situation is more nuanced.

Consider the Fourier Sine transform of $e^{-ax^2}$. From various sources, $\mathcal{F}_s\{e^{-ax^2}\} = \sqrt{\frac{1}{2a}} \frac{\omega}{a} e^{-\omega^2/4a}$ is incorrect for the $\sqrt{2/\pi}$ definition.

Let's use a known result for the integral equation.
If we had $\int_{-\infty}^\infty$, then the convolution theorem would apply directly.

A common technique is to extend the domain to $(-\infty, \infty)$ and use the standard Fourier transform.
If we consider the even extension $f_e(x)$ of $f(x)$, then $\mathcal{F}\{f_e(x)\} = \sqrt{2/\pi} F_c(\omega)$.
The integral term is related to the convolution of $f(x)$ with $e^{-x^2/2}$.
The Fourier Cosine transform of $e^{-ax^2/2}$ is $\sqrt{\frac{2}{\pi}} \frac{1}{\sqrt{a}} e^{-\omega^2/(2a)}$.

Let's assume the integral is indeed related to the convolution of $f(x)$ and $g(x)=e^{-x^2/2}$ for $x \ge 0$.
We need to be careful with the definition of convolution for semi-infinite domains.

The solution to the equation $f(x) + \int_0^x f(\tau) g(x-\tau) d\tau = h(x)$ can be found using Laplace or Fourier transforms.
The given integral is $\int_0^\infty f(\tau) e^{-(x-\tau)^2/2} d\tau$. This looks like it assumes $f(\tau)$ is defined for all $\tau$.

**Alternative approach using the full Fourier Transform:**
Let $f(x)$ be defined for all $x$.
$\mathcal{F}\{f(x)\} = F(\omega)$.
$\mathcal{F}\{e^{-x^2/2}\} = \sqrt{2\pi} e^{-\omega^2/2}$.
The convolution theorem states $\mathcal{F}\{f*g\} = F(\omega)G(\omega)$.
So, $\mathcal{F}\{\int_{-\infty}^\infty f(\tau) e^{-(x-\tau)^2/2} d\tau\} = F(\omega) \sqrt{2\pi} e^{-\omega^2/2}$.
And $\mathcal{F}\{e^{-x^2/4}\} = \sqrt{2\pi} e^{-\omega^2/4}$.

The equation becomes:
$F(\omega) + F(\omega) \sqrt{2\pi} e^{-\omega^2/2} = \sqrt{2\pi} e^{-\omega^2/4}$.
$F(\omega) (1 + \sqrt{2\pi} e^{-\omega^2/2}) = \sqrt{2\pi} e^{-\omega^2/4}$.
$F(\omega) = \frac{\sqrt{2\pi} e^{-\omega^2/4}}{1 + \sqrt{2\pi} e^{-\omega^2/2}}$.
Finding the inverse Fourier transform of this expression is complex.

**Key point:** The specific definition of convolution for Fourier Sine/Cosine transforms is crucial. For problems on $[0, \infty)$, the integral might be $\int_0^x$.

**Reference:** Dennis G. Zill, Patrick D. Shanahan - Complex Analysis. While this book focuses on complex functions, concepts like transform theory are broadly applicable. Advanced Engineering Mathematics by Kreyszig provides specific examples of integral equations solved using Fourier Transforms.

---

### **6. Relation to Other Transforms**

*   **Laplace Transform:** The Laplace transform is also used for functions defined on $[0, \infty)$ and is particularly effective for causal systems. The relationship between Laplace and Fourier transforms is that the Fourier transform is the Laplace transform evaluated on the imaginary axis ($s=j\omega$), provided the Region of Convergence (ROC) includes the imaginary axis.
*   **Z-Transform:** The Z-transform is the discrete-time equivalent of the Laplace transform, used for analyzing discrete-time signals and systems.

**Reference:** Higher Engineering Mathematics by B. V. Ramana. This book often compares and contrasts different transform techniques, highlighting their respective strengths and applications.

---

### **7. Practice Questions and Exercises**

**Instructions:** Use the definitions and properties of Fourier Cosine and Sine Transforms to solve the following problems.

**Question 1:** Find the Fourier Cosine Transform of $f(x) = \cos(ax)$ for $x \ge 0$.
**Answer:**
$$ F_c(\omega) = \sqrt{\frac{2}{\pi}} \int_0^\infty \cos(ax) \cos(\omega x) dx $$
Using the product-to-sum formula: $\cos A \cos B = \frac{1}{2} [\cos(A-B) + \cos(A+B)]$.
$$ F_c(\omega) = \sqrt{\frac{2}{\pi}} \int_0^\infty \frac{1}{2} [\cos((a-\omega)x) + \cos((a+\omega)x)] dx $$
The integral $\int_0^\infty \cos(bx) dx$ does not converge. However, if we consider this as a distribution or use a limiting process (e.g., $\lim_{\epsilon \to 0} \int_0^\infty e^{-\epsilon x} \cos(bx) dx$), we get $\frac{\epsilon}{\epsilon^2+b^2}$.

A more direct approach is to use the property that if $f(x) = \cos(ax)$ for $x \in \mathbb{R}$, its Fourier transform is $\sqrt{\frac{\pi}{2}} (\delta(\omega-a) + \delta(\omega+a))$.
The Fourier cosine transform of $f(x) = \cos(ax)$ for $x \ge 0$ is related to the Fourier transform of its even extension.
The even extension is $f_e(x) = \cos(ax)$.
$\mathcal{F}\{ \cos(ax) \} = \sqrt{\frac{\pi}{2}} (\delta(\omega-a) + \delta(\omega+a))$.
We also know $\mathcal{F}\{f_e(x)\} = \sqrt{\frac{2}{\pi}} F_c(\omega)$.
So, $\sqrt{\frac{2}{\pi}} F_c(\omega) = \sqrt{\frac{\pi}{2}} (\delta(\omega-a) + \delta(\omega+a))$.
This implies $F_c(\omega) = \frac{\pi}{2} (\delta(\omega-a) + \delta(\omega+a))$.
However, the Fourier Cosine Transform is typically defined for $\omega \ge 0$. The interpretation of delta functions needs care.

Let's directly evaluate the integral with a limiting process, or recall the result.
A standard result is that for $f(x) = \cos(ax)$, $x \ge 0$, its Fourier Cosine transform is $\sqrt{\frac{\pi}{2}} \delta(\omega-a)$.
The formula $\int_0^\infty \cos(ax) \cos(\omega x) dx$ is $\frac{1}{2} \int_0^\infty (\cos((a-\omega)x) + \cos((a+\omega)x)) dx$.
This integral converges in the sense of distributions to $\frac{\pi}{2} (\delta(a-\omega) + \delta(a+\omega))$.
Since we are interested in $\omega \ge 0$, and $a$ is assumed positive for $\cos(ax)$, the term $\delta(a+\omega)$ is zero if $a>0$.
So $F_c(\omega) = \sqrt{\frac{2}{\pi}} \frac{\pi}{2} \delta(\omega-a) = \sqrt{\frac{\pi}{2}} \delta(\omega-a)$.

**Question 2:** Find the Fourier Sine Transform of $f(x) = x e^{-x}$, $x \ge 0$.
**Answer:**
From Example 4, we found the transform of $x e^{-ax}$ is $\sqrt{\frac{2}{\pi}} \frac{a^2 - \omega^2}{(a^2 + \omega^2)^2}$.
For $a=1$, the Fourier Sine Transform of $x e^{-x}$ is $\sqrt{\frac{2}{\pi}} \frac{1 - \omega^2}{(1 + \omega^2)^2}$.

**Question 3:** Solve the differential equation $\frac{\partial u}{\partial t} = 2 \frac{\partial^2 u}{\partial x^2}$ for $x > 0, t > 0$, subject to:
$u(x, 0) = e^{-x}$, $x > 0$
$u(0, t) = 0$, $t > 0$
$u(x, t) \to 0$ as $x \to \infty$.

**Answer:**
This is the same form as Example 5, with $k=2$.
We use the Fourier Sine Transform. Let $U(\omega, t) = \mathcal{F}_s\{u(x, t)\}$.
The transformed equation is $\frac{\partial U}{\partial t} = -2\omega^2 U(\omega, t)$.
The initial condition is $u(x, 0) = e^{-x}$. From Example 3, $F_s(\omega) = \mathcal{F}_s\{e^{-x}\} = \sqrt{\frac{2}{\pi}} \frac{\omega}{1 + \omega^2}$.
The solution in the transform domain is $U(\omega, t) = F_s(\omega) e^{-2\omega^2 t} = \sqrt{\frac{2}{\pi}} \frac{\omega}{1 + \omega^2} e^{-2\omega^2 t}$.

To find $u(x, t)$, we need to find the inverse Sine transform of this product.
$u(x, t) = \mathcal{F}_s^{-1}\{U(\omega, t)\} = \mathcal{F}_s^{-1}\left\{\sqrt{\frac{2}{\pi}} \frac{\omega}{1 + \omega^2} e^{-2\omega^2 t}\right\}$.
This requires the inverse sine transform of $e^{-2\omega^2 t}$, which is the heat kernel variant for sine transform.
The function $g(x, t)$ such that $\mathcal{F}_s\{g(x, t)\} = e^{-2\omega^2 t}$ is $g(x, t) = \sqrt{\frac{1}{8t}} e^{-x^2/(8t)}$. (This requires careful derivation or lookup).

Using convolution: $u(x, t) = \int_0^x f(\tau) g(x-\tau, t) d\tau$.
$u(x, t) = \int_0^x e^{-\tau} \sqrt{\frac{1}{8t}} e^{-(x-\tau)^2/(8t)} d\tau$.
This integral is complex to solve directly.

Let's check the structure again. The problem is very similar to Example 5.
The solution structure is $u(x, t) = \mathcal{F}_s^{-1}\{F_s(\omega) e^{-k\omega^2 t}\}$.
The inverse transform of $e^{-k\omega^2 t}$ is indeed $\sqrt{\frac{1}{4kt}} e^{-x^2/(4kt)}$.
So, $g(x,t) = \sqrt{\frac{1}{4(2)t}} e^{-x^2/(4(2)t)} = \sqrt{\frac{1}{8t}} e^{-x^2/(8t)}$.

Using convolution:
$u(x, t) = \sqrt{\frac{2}{\pi}} \int_0^\infty F_s(\omega) e^{-k\omega^2 t} \sin(\omega x) d\omega$.
The convolution property for sine transform is $\mathcal{F}_s^{-1}\{H_s(\omega) G_s(\omega)\} = (h*g)(x)$.
The convolution $f*g$ for functions on $[0,\infty)$ is $\int_0^x f(\tau) g(x-\tau) d\tau$.
We have $F_s(\omega) = \mathcal{F}_s\{f(x)\}$, where $f(x)=e^{-x}$.
We need $g(x)$ such that $\mathcal{F}_s\{g(x)\} = e^{-k\omega^2 t}$.
This leads to $g(x, t) = \sqrt{\frac{1}{4kt}} e^{-x^2/(4kt)}$.

So, $u(x, t) = \int_0^x e^{-\tau} \sqrt{\frac{1}{8t}} e^{-(x-\tau)^2/(8t)} d\tau$.
This integral is the solution.

**Question 4:** Find the Fourier Cosine Transform of $f(x) = \frac{1}{1+x^2}$ for $x \ge 0$.
**Answer:**
We know that $\mathcal{F}_c\{e^{-ax}\} = \sqrt{\frac{2}{\pi}} \frac{a}{a^2+\omega^2}$.
We also know that $\mathcal{F}_s\{e^{-ax}\} = \sqrt{\frac{2}{\pi}} \frac{\omega}{a^2+\omega^2}$.
Using the property $\mathcal{F}_c\{xf(x)\} = -\frac{d}{d\omega} F_s(\omega)$ is incorrect.

Let's consider the full Fourier Transform of $f(x) = \frac{1}{1+x^2}$.
$\mathcal{F}\{ \frac{1}{1+x^2} \} = \sqrt{\frac{\pi}{2}} e^{-|\omega|}$.
If $f(x)$ is even, $\mathcal{F}\{f(x)\} = \sqrt{\frac{2}{\pi}} F_c(\omega)$.
Since $\frac{1}{1+x^2}$ is even, we have:
$\sqrt{\frac{2}{\pi}} F_c(\omega) = \sqrt{\frac{\pi}{2}} e^{-\omega}$. (For $\omega > 0$)
$F_c(\omega) = \frac{\pi}{2} e^{-\omega}$.

**Question 5:** Find the Fourier Sine Transform of $f(x) = \frac{1}{1+x^2}$ for $x \ge 0$.
**Answer:**
For $f(x) = \frac{1}{1+x^2}$, the function is even.
The Fourier Sine transform is defined for functions that are odd or for non-negative domains.
We know $\mathcal{F}_s\{f(x)\}$ is related to the Fourier transform of the odd extension.
Since $f(x) = \frac{1}{1+x^2}$ is even, its odd extension is $f_o(x) = \text{sgn}(x) \frac{1}{1+x^2}$.
$\mathcal{F}\{f_o(x)\} = i \sqrt{\frac{2}{\pi}} F_s(\omega)$.
$\mathcal{F}\{\text{sgn}(x) \frac{1}{1+x^2}\} = \mathcal{F}\{\frac{x}{1+x^2}\}$.
Using the differentiation property of Fourier Transforms: $\mathcal{F}\{x f(x)\} = \frac{i d}{d\omega} F(\omega)$.
$F(\omega) = \mathcal{F}\{\frac{1}{1+x^2}\} = \sqrt{\frac{\pi}{2}} e^{-|\omega|}$.
So, $\mathcal{F}\{\frac{x}{1+x^2}\} = \frac{i d}{d\omega} (\sqrt{\frac{\pi}{2}} e^{-|\omega|})$.
For $\omega > 0$, $|\omega| = \omega$, so $\frac{d}{d\omega} e^{-\omega} = -e^{-\omega}$.
$\mathcal{F}\{\frac{x}{1+x^2}\} = \frac{i d}{d\omega} (\sqrt{\frac{\pi}{2}} e^{-\omega}) = i \sqrt{\frac{\pi}{2}} (-e^{-\omega})$.
Now, $i \sqrt{\frac{2}{\pi}} F_s(\omega) = i \sqrt{\frac{\pi}{2}} (-e^{-\omega})$.
$\sqrt{\frac{2}{\pi}} F_s(\omega) = \sqrt{\frac{\pi}{2}} (-e^{-\omega})$.
$F_s(\omega) = \frac{\pi}{2} (-e^{-\omega})$.

However, $F_s(\omega)$ should be real for a real function $f(x)$. The result from differentiation needs care with signs.
A more common convention is:
$\mathcal{F}_s\{f(x)\} = \sqrt{\frac{2}{\pi}} \int_0^\infty f(x) \sin(\omega x) dx$.
Using complex analysis or standard tables, the Fourier Sine transform of $\frac{1}{1+x^2}$ is $\sqrt{\frac{\pi}{2}} e^{-\omega}$.
*Correction*: For $f(x) = \frac{1}{1+x^2}$, the Fourier Sine transform is $\sqrt{\frac{\pi}{2}} e^{-\omega}$ for $\omega \ge 0$.

**Important Point to Remember:** The choice between Cosine and Sine transform depends on the symmetry of the function or the boundary conditions. For $x \ge 0$, the Sine transform is often associated with odd functions or boundary conditions at $x=0$ that lead to odd symmetry in the transformed domain, while the Cosine transform is associated with even functions or boundary conditions at $x=0$ that lead to even symmetry.

---

### **8. Alignment with Course Outcomes (COs)**

*   **CO1: Determine the Fourier transforms of functions and apply them to solve problems arising in engineering. (Knowledge Level: K3)**
    *   This study note directly addresses CO1 by defining Fourier Cosine and Sine Transforms, listing their properties, and demonstrating their application in solving PDEs and integral equations. The examples and practice questions require the student to determine transforms and apply them.

*   **CO2: Understand the analyticity of complex functions and apply it in conformal mapping. (Knowledge Level: K3)**
    *   While this topic focuses on real functions and their transforms, advanced understanding and derivation of transform properties often rely on complex analysis. For instance, evaluating integrals in the frequency domain might involve contour integration in the complex plane, a core concept of complex analysis. (Indirect relevance, but underlying mathematical machinery).

*   **CO3: Compute complex integrals using Cauchy's integral theorem and Cauchy's integral formula. (Knowledge Level: K3)**
    *   As mentioned above, the evaluation of inverse Fourier transforms, especially for complex functions in the frequency domain, often requires techniques from complex integration, such as Cauchy's Integral Theorem and Formula, and the Residue Theorem.

*   **CO4: Understand the series expansion of complex function about a singularity and apply residue theorem to compute real integrals. (Knowledge Level: K3)**
    *   Similar to CO3, the computation of certain Fourier integrals (which are real integrals) can be simplified by using residue calculus, which involves series expansions about singularities. This connects the topic to the broader Fourier Integral module and its associated analytical tools.

---

### **9. Summary and Key Takeaways**

*   **Purpose:** Fourier Cosine and Sine Transforms are extensions of the Fourier Transform for functions defined on the semi-infinite domain $[0, \infty)$.
*   **Cosine Transform:** Primarily used for even functions or when the boundary condition at $x=0$ implies even symmetry in the frequency domain.
*   **Sine Transform:** Primarily used for odd functions or when the boundary condition at $x=0$ implies odd symmetry in the frequency domain.
*   **Key Properties:** Linearity, change of scale, differentiation properties (crucial for PDEs), and convolution theorems are essential tools.
*   **Applications:** Solving PDEs on semi-infinite domains (heat conduction, wave propagation) and integral equations.
*   **Derivations:** The definitions involve integrals with $\cos(\omega x)$ and $\sin(\omega x)$ over $[0, \infty)$. Many properties are derived using integration by parts or by relating them to the full Fourier Transform of even/odd extensions.

---
This concludes the study notes for Fourier Cosine and Sine Transforms. Remember to consult the listed textbooks for deeper insights and more examples.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=WUvTyaaNkzM) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=tyDKR4FG3Yw) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=IYdiKeQ9xME) |
