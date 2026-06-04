---
title: "Mappings of w= 𝑠𝑖𝑛𝑧"
subject: "MATHEMATICS FOR ELECTRICAL SCIENCE AND PHYSICAL SCIENCE – 3"
module: "Module 2: Complex Function"
branch: "Civil Engineering"
semester: 3
topicId: "689f15ca56b5e963ba81069a"
status: "completed"
scrapedAt: "2026-05-20T18:41:25.300Z"
---
# MATHEMATICS FOR ELECTRICAL SCIENCE AND PHYSICAL SCIENCE – 3

## Module 2: Complex Function

## Topic: Mappings of $w = \sin z$

---

### Learning Outcomes:

Upon completion of this topic, you should be able to:

1.  **Understand the basic definition of the complex sine function.**
2.  **Analyze the mapping properties of $w = \sin z$.** This includes identifying how regions in the $z$-plane are transformed into regions in the $w$-plane.
3.  **Determine the images of specific curves and regions under the mapping $w = \sin z$.** This might involve lines, rectangles, sectors, etc.
4.  **Identify the relationship between the sine function and other elementary complex functions.**

---

### 1. Basic Definition of the Complex Sine Function

The complex sine function, denoted as $\sin z$, is defined for a complex number $z = x + iy$ using Euler's formula:

$$ \sin z = \frac{e^{iz} - e^{-iz}}{2i} $$

We can also express $\sin z$ in terms of the real and imaginary parts of $z$:

Let $z = x + iy$.
$$ \sin z = \sin(x + iy) = \sin x \cos(iy) + \cos x \sin(iy) $$

Using the identities:
*   $\cos(iy) = \cosh y$
*   $\sin(iy) = i \sinh y$

Substituting these into the equation:
$$ \sin z = \sin x \cosh y + \cos x (i \sinh y) $$
$$ \sin z = (\sin x \cosh y) + i (\cos x \sinh y) $$

So, if $w = u + iv$, then for $w = \sin z$:
*   $u = \sin x \cosh y$
*   $v = \cos x \sinh y$

---

### 2. Mapping Properties of $w = \sin z$

The mapping $w = \sin z$ transforms regions in the $z$-plane to regions in the $w$-plane. Understanding these properties involves examining how lines and curves are transformed.

**Key Properties:**

*   **Periodicity:** The sine function is periodic with period $2\pi$. This means $\sin(z + 2\pi k) = \sin z$ for any integer $k$. Therefore, the mapping repeats every $2\pi$ interval in the real part of $z$.
*   **Symmetry:**
    *   $\sin(-z) = -\sin z$ (Odd function)
    *   $\sin(\pi - z) = \sin z$
    *   $\sin(\pi + z) = -\sin z$
    *   $\sin(z + \pi) = -\sin z$
*   **Derivative:** The derivative of $\sin z$ is $\cos z$. The derivative is zero when $z = \frac{\pi}{2} + n\pi$, where $n$ is an integer. At these points, the mapping is not conformal (i.e., angles are not preserved).

---

### 3. Images of Specific Curves and Regions under $w = \sin z$

Let's analyze how various parts of the $z$-plane are mapped. We'll primarily use the relations:
$u = \sin x \cosh y$
$v = \cos x \sinh y$

**3.1 Mapping of Vertical Lines ($x = c$)**

Consider a vertical line $x = c$, where $0 < c < \pi$.
*   $u = \sin c \cosh y$
*   $v = \cos c \sinh y$

We can express $\cosh y$ and $\sinh y$ in terms of $u$ and $v$:
*   $\cosh y = \frac{u}{\sin c}$
*   $\sinh y = \frac{v}{\cos c}$

Using the identity $\cosh^2 y - \sinh^2 y = 1$:
$$ \left(\frac{u}{\sin c}\right)^2 - \left(\frac{v}{\cos c}\right)^2 = 1 $$
$$ \frac{u^2}{\sin^2 c} - \frac{v^2}{\cos^2 c} = 1 $$

This is the equation of a **hyperbola** in the $w$-plane.

*   If $0 < c < \pi/2$, then $\sin c > 0$ and $\cos c > 0$. The hyperbola opens to the right ($u > 0$).
*   If $\pi/2 < c < \pi$, then $\sin c > 0$ and $\cos c < 0$. The hyperbola also opens to the right ($u > 0$).
*   If $c = \pi/2$, then $\sin c = 1$ and $\cos c = 0$.
    *   $u = \cosh y$
    *   $v = 0$
    This maps the line $x = \pi/2$ to the positive real axis in the $w$-plane ($u \ge 1$).

**Example:** Map the line $x = \pi/4$.
Here, $c = \pi/4$, $\sin c = 1/\sqrt{2}$, $\cos c = 1/\sqrt{2}$.
The equation becomes:
$$ \frac{u^2}{(1/\sqrt{2})^2} - \frac{v^2}{(1/\sqrt{2})^2} = 1 $$
$$ 2u^2 - 2v^2 = 1 \implies u^2 - v^2 = 1/2 $$
This is a hyperbola opening to the right.

**3.2 Mapping of Horizontal Lines ($y = c$, $c \neq 0$)**

Consider a horizontal line $y = c$, where $c > 0$.
*   $u = \sin x \cosh c$
*   $v = \cos x \sinh c$

We can express $\sin x$ and $\cos x$ in terms of $u$ and $v$:
*   $\sin x = \frac{u}{\cosh c}$
*   $\cos x = \frac{v}{\sinh c}$

Using the identity $\sin^2 x + \cos^2 x = 1$:
$$ \left(\frac{u}{\cosh c}\right)^2 + \left(\frac{v}{\sinh c}\right)^2 = 1 $$
$$ \frac{u^2}{\cosh^2 c} + \frac{v^2}{\sinh^2 c} = 1 $$

This is the equation of an **ellipse** in the $w$-plane, centered at the origin.

*   The semi-major axis is along the $u$-axis with length $\cosh c$.
*   The semi-minor axis is along the $v$-axis with length $\sinh c$.

Since $\cosh c > \sinh c$ for $c \neq 0$, the major axis is always horizontal.

**Example:** Map the line $y = 1$.
Here, $c = 1$. $\cosh 1 \approx 1.543$, $\sinh 1 \approx 1.175$.
The equation becomes:
$$ \frac{u^2}{\cosh^2 1} + \frac{v^2}{\sinh^2 1} = 1 $$
This is an ellipse with horizontal semi-axis $\approx 1.543$ and vertical semi-axis $\approx 1.175$.

**3.3 Mapping of Rectangular Regions**

Consider a rectangle defined by $x_1 \le x \le x_2$ and $y_1 \le y \le y_2$. The mapping of this region will be bounded by the transformed curves of its sides.

**Important Region: The Strip $0 \le x \le \pi/2$, $y \ge 0$**

Let's analyze the mapping of the fundamental region $0 \le x \le \pi/2$ and $y \ge 0$.

*   **Side 1: $x = 0$, $y \ge 0$**
    *   $u = \sin 0 \cosh y = 0$
    *   $v = \cos 0 \sinh y = \sinh y$
    As $y$ goes from $0$ to $\infty$, $\sinh y$ goes from $0$ to $\infty$. This maps to the positive imaginary axis ($u=0, v \ge 0$).

*   **Side 2: $x = \pi/2$, $y \ge 0$**
    *   $u = \sin(\pi/2) \cosh y = \cosh y$
    *   $v = \cos(\pi/2) \sinh y = 0$
    As $y$ goes from $0$ to $\infty$, $\cosh y$ goes from $1$ to $\infty$. This maps to the positive real axis ($v=0, u \ge 1$).

*   **Side 3: $y = 0$, $0 \le x \le \pi/2$**
    *   $u = \sin x \cosh 0 = \sin x$
    *   $v = \cos x \sinh 0 = 0$
    As $x$ goes from $0$ to $\pi/2$, $\sin x$ goes from $0$ to $1$. This maps to the segment $[0, 1]$ on the real axis ($v=0, 0 \le u \le 1$).

*   **Inside the region ($0 < x < \pi/2$, $y > 0$):** This maps to the upper half of the $w$-plane ($v > 0$) between the curves generated by the sides.

Combining these:
The strip $0 \le x \le \pi/2$, $y \ge 0$ is mapped to the upper half of the $w$-plane ($v \ge 0$).
The boundary $x=0, y \ge 0$ maps to the positive imaginary axis.
The boundary $y=0, 0 \le x \le \pi/2$ maps to the segment $[0, 1]$ on the real axis.
The boundary $x=\pi/2, y \ge 0$ maps to the ray $[1, \infty)$ on the real axis.

Therefore, the region $0 \le x \le \pi/2$, $y \ge 0$ is mapped to the **upper half of the $w$-plane ($v \ge 0$)**.

**Mapping of the Strip $0 \le x \le \pi$, $y \ge 0$**

*   **$x=0, y \ge 0$**: Positive imaginary axis.
*   **$x=\pi, y \ge 0$**: $\sin(\pi) \cosh y = 0$, $\cos(\pi) \sinh y = -\sinh y$. This maps to the negative imaginary axis ($u=0, v \le 0$).
*   **$y=0, 0 \le x \le \pi$**: $\sin x \cosh 0 = \sin x$. This maps to the segment $[-1, 1]$ on the real axis.

The strip $0 \le x \le \pi$, $y \ge 0$ is mapped to the **entire $w$-plane ($-\infty < u < \infty$, $-\infty < v < \infty$)**.

**3.4 Mapping of the Region $- \pi/2 \le x \le \pi/2$, $y \ge 0$**

*   **$x = -\pi/2$, $y \ge 0$**:
    *   $u = \sin(-\pi/2) \cosh y = -\cosh y$
    *   $v = \cos(-\pi/2) \sinh y = 0$
    As $y$ goes from $0$ to $\infty$, $-\cosh y$ goes from $-1$ to $-\infty$. This maps to the ray $(-\infty, -1]$ on the real axis.

*   **$x = \pi/2$, $y \ge 0$**: Maps to $[1, \infty)$ on the real axis.
*   **$y = 0$, $-\pi/2 \le x \le \pi/2$**: $\sin x$. This maps to the segment $[-1, 1]$ on the real axis.

The region $-\pi/2 \le x \le \pi/2$, $y \ge 0$ is mapped to the **upper half of the $w$-plane ($v \ge 0$)**. The segment $[-1, 1]$ is covered once, and the rays $(-\infty, -1]$ and $[1, \infty)$ are covered once.

**3.5 Mapping of the Right Half-Plane ($x \ge 0$)**

This region is more complex. Due to periodicity, we can consider the strip $0 \le x \le \pi$. The right half-plane ($x \ge 0$) can be seen as a union of strips like $0 \le x \le \pi$, $\pi \le x \le 2\pi$, etc., and their lower half-plane counterparts.

The mapping of the strip $0 \le x \le \pi$, $y \ge 0$ covers the entire $w$-plane. The mapping of the strip $-\pi \le x \le 0$, $y \ge 0$ also covers the entire $w$-plane.

**Summary of Key Mappings:**

*   **Vertical lines $x=c$ ($c \neq \pi/2 + n\pi$) map to hyperbolas.**
*   **Horizontal lines $y=c$ ($c \neq 0$) map to ellipses.**
*   **The strip $0 \le x \le \pi/2$, $y \ge 0$ maps to the upper half-plane $v \ge 0$.**
*   **The strip $-\pi/2 \le x \le \pi/2$, $y \ge 0$ maps to the upper half-plane $v \ge 0$.**
*   **The strip $0 \le x \le \pi$, $y \ge 0$ maps to the entire $w$-plane.**

---

### 4. Relationship with Other Elementary Complex Functions

The sine function is closely related to the exponential function through its definition. It can also be expressed using the hyperbolic sine function:

*   $\sin z = -i \sinh(iz)$
*   $\sin z = \cos(z - \pi/2)$

This means that understanding the mapping of $\sinh z$ can provide insights into $\sin z$. The mapping of $\sinh z$ is known to transform horizontal lines into ellipses and vertical lines into hyperbolas.

---

### Important Points to Remember:

*   **Definition:** $\sin z = \frac{e^{iz} - e^{-iz}}{2i} = \sin x \cosh y + i \cos x \sinh y$.
*   **Periodicity:** $\sin(z + 2\pi k) = \sin z$.
*   **Critical Points:** The mapping is not conformal at $z = \frac{\pi}{2} + n\pi$, where $\cos z = 0$.
*   **Lines to Conics:** Vertical lines map to hyperbolas, and horizontal lines map to ellipses.
*   **Strip Mappings:** Understanding how strips are mapped is crucial for analyzing regions. The strip $0 \le x \le \pi$, $y \ge 0$ covers the entire $w$-plane.

---

### Practice Questions:

1.  Express $\sin(2+3i)$ in the form $u+iv$.
2.  Find the image of the vertical line $x = \pi/3$ under the mapping $w = \sin z$.
3.  Find the image of the horizontal line $y = 1$ under the mapping $w = \sin z$.
4.  Describe the image of the rectangle $0 \le x \le \pi/2$, $0 \le y \le 1$ under the mapping $w = \sin z$.
5.  Determine where the function $w = \sin z$ fails to be conformal.

---

### Answers to Practice Questions:

1.  **Express $\sin(2+3i)$ in the form $u+iv$.**
    Let $z = 2+3i$, so $x=2$ and $y=3$.
    $u = \sin x \cosh y = \sin 2 \cosh 3$
    $v = \cos x \sinh y = \cos 2 \sinh 3$

    Using a calculator:
    $\sin 2 \approx 0.9093$
    $\cos 2 \approx -0.4161$
    $\cosh 3 \approx 10.0677$
    $\sinh 3 \approx 10.0179$

    $u \approx (0.9093)(10.0677) \approx 9.1514$
    $v \approx (-0.4161)(10.0179) \approx -4.1692$

    So, $\sin(2+3i) \approx 9.1514 - 4.1692i$.

2.  **Find the image of the vertical line $x = \pi/3$ under the mapping $w = \sin z$.**
    Here, $c = \pi/3$. $\sin(\pi/3) = \sqrt{3}/2$, $\cos(\pi/3) = 1/2$.
    The mapping equations are $u = (\sqrt{3}/2) \cosh y$ and $v = (1/2) \sinh y$.
    Solving for $\cosh y$ and $\sinh y$:
    $\cosh y = \frac{2u}{\sqrt{3}}$
    $\sinh y = 2v$
    Using $\cosh^2 y - \sinh^2 y = 1$:
    $\left(\frac{2u}{\sqrt{3}}\right)^2 - (2v)^2 = 1$
    $\frac{4u^2}{3} - 4v^2 = 1$
    $\frac{u^2}{3/4} - \frac{v^2}{1/4} = 1$
    This is a **hyperbola** with equation $\frac{u^2}{3/4} - v^2 = 1/4$. Since $0 < \pi/3 < \pi/2$, $\cos(\pi/3) > 0$, so $v$ has the same sign as $\sinh y$. The hyperbola opens to the right.

3.  **Find the image of the horizontal line $y = 1$ under the mapping $w = \sin z$.**
    Here, $c = 1$. $\cosh 1 \approx 1.543$, $\sinh 1 \approx 1.175$.
    The mapping equations are $u = \sin x \cosh 1$ and $v = \cos x \sinh 1$.
    Solving for $\sin x$ and $\cos x$:
    $\sin x = \frac{u}{\cosh 1}$
    $\cos x = \frac{v}{\sinh 1}$
    Using $\sin^2 x + \cos^2 x = 1$:
    $\left(\frac{u}{\cosh 1}\right)^2 + \left(\frac{v}{\sinh 1}\right)^2 = 1$
    $\frac{u^2}{\cosh^2 1} + \frac{v^2}{\sinh^2 1} = 1$
    This is an **ellipse** centered at the origin with horizontal semi-axis $\cosh 1$ and vertical semi-axis $\sinh 1$.

4.  **Describe the image of the rectangle $0 \le x \le \pi/2$, $0 \le y \le 1$ under the mapping $w = \sin z$.**
    We need to map each boundary:
    *   $x=0, 0 \le y \le 1$: $u=0$, $v=\sinh y$. Maps to the segment $[0, \sinh 1]$ on the imaginary axis.
    *   $x=\pi/2, 0 \le y \le 1$: $u=\cosh y$, $v=0$. Maps to the segment $[1, \cosh 1]$ on the real axis.
    *   $y=0, 0 \le x \le \pi/2$: $u=\sin x$, $v=0$. Maps to the segment $[0, 1]$ on the real axis.
    *   $y=1, 0 \le x \le \pi/2$: $u=\sin x \cosh 1$, $v=\cos x \sinh 1$. This maps to the arc of the ellipse $\frac{u^2}{\cosh^2 1} + \frac{v^2}{\sinh^2 1} = 1$ in the first quadrant ($u \ge 0, v \ge 0$), starting from $(0, \sinh 1)$ and ending at $(\cosh 1, 0)$.

    The image is a region bounded by these curves. It's a section of the upper half-plane defined by the ellipse and the coordinate axes. Specifically, it's the portion of the upper half-plane ($v \ge 0$) enclosed by the imaginary axis segment $[0, \sinh 1]$, the real axis segment $[0, \cosh 1]$, and the elliptical arc connecting $(0, \sinh 1)$ to $(\cosh 1, 0)$ for $0 \le x \le \pi/2$.

5.  **Determine where the function $w = \sin z$ fails to be conformal.**
    The function $w = \sin z$ fails to be conformal when its derivative is zero.
    $w' = \frac{d}{dz}(\sin z) = \cos z$.
    $\cos z = 0$ when $z = \frac{\pi}{2} + n\pi$, where $n$ is an integer.
    Therefore, $w = \sin z$ fails to be conformal at $z = \frac{\pi}{2} + n\pi$, $n \in \mathbb{Z}$.

---
