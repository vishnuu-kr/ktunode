---
title: "Mappings of w=𝑒௭"
subject: "MATHEMATICS FOR ELECTRICAL SCIENCE AND PHYSICAL SCIENCE – 3"
module: "Module 2: Complex Function"
branch: "Civil Engineering"
semester: 3
topicId: "689f15ca56b5e963ba810698"
status: "completed"
scrapedAt: "2026-05-20T18:41:23.905Z"
---
# Mathematics for Electrical Science and Physical Science – 3: Complex Functions

## Module 2: Complex Function

### Topic: Mappings of $w = e^z$

This topic explores how the complex exponential function $w = e^z$ transforms points and regions in the complex plane. Understanding these mappings is crucial for analyzing various phenomena in electrical and physical sciences where complex numbers are employed.

---

### Learning Outcomes:

Upon successful completion of this topic, you should be able to:

*   **LO1: Understand the definition and properties of the complex exponential function.**
*   **LO2: Describe the geometric interpretation of the complex exponential function, particularly its relationship to multiplication by a positive real number and rotation.**
*   **LO3: Analyze and sketch the mapping of lines and simple regions under the transformation $w = e^z$.**
*   **LO4: Determine the inverse mapping $z = \ln(w)$ and its properties, including the multi-valued nature of the complex logarithm.**

---

### 1. Definition and Properties of the Complex Exponential Function ($w = e^z$)

#### Key Concept: Euler's Formula

The cornerstone of the complex exponential function is Euler's formula, which connects the exponential function with complex arguments to trigonometric functions.

*   **Definition:** For any complex number $z = x + iy$, where $x$ and $y$ are real numbers, the complex exponential function is defined as:
    $w = e^z = e^{x+iy} = e^x e^{iy}$

*   **Euler's Formula:** The term $e^{iy}$ is defined by Euler's formula:
    $e^{iy} = \cos(y) + i \sin(y)$

*   **Cartesian Form:** Substituting Euler's formula into the definition, we get the Cartesian form of $w$:
    $w = e^x (\cos(y) + i \sin(y))$

*   **Polar Form:** Let $w = R(\cos(\theta) + i \sin(\theta))$. Comparing this with the Cartesian form, we can identify:
    *   **Magnitude:** $|w| = |e^z| = e^x$
    *   **Argument:** $\arg(w) = y$ (or $y + 2k\pi$ for any integer $k$)

#### Properties of $e^z$:

1.  **Periodicity:** The complex exponential function is periodic with period $2\pi i$.
    $e^{z + 2\pi i k} = e^z$ for any integer $k$.
    *   **Explanation:** $e^{z + 2\pi i k} = e^x e^{i(y + 2\pi k)} = e^x (\cos(y + 2\pi k) + i \sin(y + 2\pi k)) = e^x (\cos(y) + i \sin(y)) = e^z$.

2.  **Multiplicativity:** The exponential property holds for complex numbers.
    $e^{z_1 + z_2} = e^{z_1} e^{z_2}$
    *   **Explanation:**
        $e^{z_1 + z_2} = e^{(x_1+iy_1) + (x_2+iy_2)} = e^{(x_1+x_2) + i(y_1+y_2)} = e^{x_1+x_2} e^{i(y_1+y_2)}$
        $e^{z_1} e^{z_2} = (e^{x_1}e^{iy_1})(e^{x_2}e^{iy_2}) = e^{x_1}e^{x_2}e^{iy_1}e^{iy_2} = e^{x_1+x_2}e^{i(y_1+y_2)}$

3.  **Non-zero:** The complex exponential function is never zero.
    $|e^z| = e^x > 0$ for all real $x$.

4.  **Derivative:** The derivative of $e^z$ with respect to $z$ is $e^z$.
    $\frac{d}{dz}(e^z) = e^z$
    *   **Explanation:** This can be shown using the Cauchy-Riemann equations.

---

### 2. Geometric Interpretation of $w = e^z$

The transformation $w = e^z$ maps points from the $z$-plane to the $w$-plane. The geometric interpretation helps visualize these mappings.

Let $z = x + iy$ and $w = u + iv$. We have:
$w = e^z = e^x (\cos(y) + i \sin(y))$
So, $u = e^x \cos(y)$ and $v = e^x \sin(y)$.

#### Key Geometric Effects:

1.  **Scaling (Magnitude):** The magnitude of $w$ is $e^x$. This means that points with the same real part $x$ are mapped to points in the $w$-plane with the same magnitude $e^x$.
    *   If $x$ is constant, $|w| = e^x$ is constant. This implies that vertical lines in the $z$-plane (where $x$ is constant) are mapped to circles centered at the origin in the $w$-plane.

2.  **Rotation (Argument):** The argument of $w$ is $y$. This means that points with the same imaginary part $y$ are mapped to points in the $w$-plane with the same argument $y$.
    *   If $y$ is constant, $\arg(w) = y$ is constant. This implies that horizontal lines in the $z$-plane (where $y$ is constant) are mapped to rays (half-lines) emanating from the origin in the $w$-plane.

#### Combining Magnitude and Argument:

*   **Mapping of Vertical Lines ($x = c$):**
    *   $|w| = e^c$ (a constant radius)
    *   $\arg(w) = y$ (varies as $y$ varies)
    *   **Result:** Vertical lines $x = c$ are mapped to circles of radius $e^c$ centered at the origin in the $w$-plane. As $y$ increases, the point on the circle moves counter-clockwise.

*   **Mapping of Horizontal Lines ($y = c$):**
    *   $|w| = e^x$ (varies as $x$ varies)
    *   $\arg(w) = c$ (a constant angle)
    *   **Result:** Horizontal lines $y = c$ are mapped to rays emanating from the origin in the $w$-plane at an angle $c$. As $x$ increases, the point moves radially outwards from the origin.

---

### 3. Mappings of Lines and Simple Regions under $w = e^z$

#### 3.1 Mapping of Lines

*   **Vertical Lines ($x = c$)**
    *   **Description:** A vertical line in the $z$-plane defined by $x=c$.
    *   **Mapping:** Maps to a circle $|w| = e^c$ in the $w$-plane.
    *   **Example:** Map the line $x = 1$.
        *   $|w| = e^1 = e$. This is a circle of radius $e$ centered at the origin.
        *   As $y$ varies from $-\infty$ to $+\infty$, the point $w$ traverses the entire circle counter-clockwise.

*   **Horizontal Lines ($y = c$)**
    *   **Description:** A horizontal line in the $z$-plane defined by $y=c$.
    *   **Mapping:** Maps to a ray (half-line) emanating from the origin in the $w$-plane at an angle $c$ (radians).
    *   **Example:** Map the line $y = \frac{\pi}{2}$.
        *   $\arg(w) = \frac{\pi}{2}$. This is the positive imaginary axis in the $w$-plane.
        *   $|w| = e^x$. As $x$ varies from $-\infty$ to $+\infty$, $|w|$ varies from $0$ to $+\infty$.
        *   **Result:** The line $y = \frac{\pi}{2}$ maps to the positive imaginary axis in the $w$-plane, excluding the origin.

*   **Lines $y = mx + c$ (General Lines):** These are generally mapped to logarithmic spirals. This is because both $x$ and $y$ are changing.

#### 3.2 Mapping of Regions

*   **Strip between two horizontal lines ($c_1 \le y \le c_2$)**
    *   **Description:** A horizontal strip in the $z$-plane.
    *   **Mapping:** Maps to a sector of an annulus (a "pie slice") in the $w$-plane.
    *   **Example:** Map the strip $0 \le y \le \frac{\pi}{2}$.
        *   $\arg(w)$ will be between $0$ and $\frac{\pi}{2}$. This defines a sector in the first quadrant.
        *   $|w| = e^x$. As $x$ varies, the radius changes.
        *   **Result:** This maps to the sector of the $w$-plane where $0 \le \arg(w) \le \frac{\pi}{2}$. The radial extent depends on the range of $x$.

*   **Strip between two vertical lines ($c_1 \le x \le c_2$)**
    *   **Description:** A vertical strip in the $z$-plane.
    *   **Mapping:** Maps to an annulus (a ring) in the $w$-plane.
    *   **Example:** Map the strip $1 \le x \le 2$.
        *   $|w| = e^x$. So, $e^1 \le |w| \le e^2$. This means $e \le |w| \le e^2$.
        *   $\arg(w) = y$. As $y$ varies over a range of $2\pi$, the full circle is covered.
        *   **Result:** This maps to the annulus in the $w$-plane between the circles $|w| = e$ and $|w| = e^2$.

*   **Rectangles:** A rectangle defined by $x_1 \le x \le x_2$ and $y_1 \le y \le y_2$ maps to a region bounded by two circles and two radial lines in the $w$-plane.
    *   **Example:** Map the rectangle $1 \le x \le 2$, $0 \le y \le \frac{\pi}{2}$.
        *   The lines $x=1$ and $x=2$ map to circles $|w|=e^1$ and $|w|=e^2$.
        *   The lines $y=0$ and $y=\frac{\pi}{2}$ map to rays $\arg(w)=0$ and $\arg(w)=\frac{\pi}{2}$.
        *   **Result:** This maps to a sector of an annulus, specifically the region $e \le |w| \le e^2$ and $0 \le \arg(w) \le \frac{\pi}{2}$.

#### Important Note on Periodicity:

Because $e^z$ is periodic with period $2\pi i$, the mapping is not one-to-one over the entire complex plane. The entire $z$-plane is mapped onto the $w$-plane infinitely many times. To achieve a one-to-one mapping, we typically consider a "strip" of width $2\pi$ in the imaginary direction, for example, $-\pi < y \le \pi$. This region is called the **principal strip**.

*   **Mapping of the Principal Strip ($-\pi < y \le \pi$):**
    *   This strip maps to the entire $w$-plane, excluding the origin.
    *   Each point in the $w$-plane (except $w=0$) is the image of exactly one point in the principal strip.

---

### 4. The Inverse Mapping: $z = \ln(w)$ (Complex Logarithm)

#### Key Concept: Complex Logarithm

The inverse of the exponential function is the logarithm. For complex numbers, this is called the **complex logarithm**.

Given $w = e^z$, to find $z$ in terms of $w$, we need to solve for $z$.
We know that $w = |w| e^{i \arg(w)}$.
Let $w = R e^{i\theta}$, where $R = |w|$ and $\theta = \arg(w)$.
We also have $z = x + iy$.

So, $R e^{i\theta} = e^{x+iy} = e^x e^{iy}$.

Equating magnitudes:
$R = e^x \implies x = \ln(R) = \ln(|w|)$

Equating arguments:
$\theta = y + 2k\pi$, where $k$ is an integer.
This implies $y = \theta + 2k\pi$.

Therefore, the general form for $z$ is:
$z = \ln(|w|) + i (\arg(w) + 2k\pi)$

#### Definition of Complex Logarithm:

The complex logarithm of $w$ (where $w \ne 0$) is defined as:
$\ln(w) = \ln(|w|) + i \arg(w)$

#### Properties of Complex Logarithm:

1.  **Multi-valued:** Since the argument of a complex number is multi-valued (adding $2k\pi$), the complex logarithm is also multi-valued.
    *   $\arg(w) = \text{Arg}(w) + 2k\pi$, where $\text{Arg}(w)$ is the principal value of the argument (usually $-\pi < \text{Arg}(w) \le \pi$).
    *   So, $\ln(w) = \ln(|w|) + i (\text{Arg}(w) + 2k\pi)$, for $k \in \mathbb{Z}$.

2.  **Principal Value of the Logarithm:** The principal value of the complex logarithm, denoted by $\text{Ln}(w)$, is obtained by using the principal value of the argument:
    $\text{Ln}(w) = \ln(|w|) + i \text{Arg}(w)$, where $-\pi < \text{Arg}(w) \le \pi$.

3.  **Logarithm of a Product:** The property $\ln(w_1 w_2) = \ln(w_1) + \ln(w_2)$ does *not* always hold for the complex logarithm. It holds only up to an integer multiple of $2\pi i$.
    $\ln(w_1 w_2) = \ln(w_1) + \ln(w_2) + 2k\pi i$ for some integer $k$.
    *   For the principal values: $\text{Ln}(w_1 w_2) = \text{Ln}(w_1) + \text{Ln}(w_2)$ if $-\pi < \text{Arg}(w_1) + \text{Arg}(w_2) \le \pi$. Otherwise, it differs by $2\pi i$.

4.  **Logarithm of a Power:** Similarly, $\ln(w^n) = n \ln(w)$ does not always hold.
    $\ln(w^n) = n \ln(w) + 2k\pi i$ for some integer $k$.

#### Mapping of Regions using the Inverse Function:

The inverse mapping $z = \ln(w)$ helps us understand how regions in the $w$-plane are formed by the exponential map.

*   **Circles centered at the origin ($|w| = R$) in the $w$-plane:**
    *   $|w| = R \implies \ln(|w|) = \ln(R)$.
    *   $\arg(w)$ varies from $0$ to $2\pi$.
    *   $z = \ln(R) + i (\theta + 2k\pi)$.
    *   **Result:** A circle $|w|=R$ in the $w$-plane maps to the vertical line $x = \ln(R)$ in the $z$-plane.

*   **Rays from the origin ($\arg(w) = \theta_0$) in the $w$-plane:**
    *   $\arg(w) = \theta_0$.
    *   $|w|$ varies from $0$ to $\infty$.
    *   $z = \ln(|w|) + i (\theta_0 + 2k\pi)$.
    *   **Result:** A ray $\arg(w) = \theta_0$ in the $w$-plane maps to the horizontal line $y = \theta_0$ in the $z$-plane.

*   **Annulus ($R_1 \le |w| \le R_2$) in the $w$-plane:**
    *   $R_1 \le |w| \le R_2 \implies \ln(R_1) \le \ln(|w|) \le \ln(R_2)$.
    *   **Result:** An annulus maps to a horizontal strip $\ln(R_1) \le x \le \ln(R_2)$ in the $z$-plane.

*   **Sector ($ \theta_1 \le \arg(w) \le \theta_2 $) in the $w$-plane:**
    *   $\theta_1 \le \arg(w) \le \theta_2$.
    *   **Result:** A sector maps to a vertical strip $\theta_1 \le y \le \theta_2$ in the $z$-plane.

---

### Important Points to Remember:

*   **$w = e^z = e^x(\cos y + i \sin y)$** is the fundamental definition.
*   **Magnitude of $w$ is $e^x$**: Vertical lines ($x=c$) map to circles ($|w|=e^c$).
*   **Argument of $w$ is $y$**: Horizontal lines ($y=c$) map to rays ($\arg(w)=c$).
*   **Periodicity:** $e^{z+2\pi i k} = e^z$. This means the mapping is not one-to-one over the entire complex plane. The principal strip ($-\pi < \text{Im}(z) \le \pi$) maps to the entire $w$-plane excluding the origin.
*   **Complex Logarithm is Multi-valued:** $\ln(w) = \ln(|w|) + i (\arg(w) + 2k\pi)$.
*   The inverse mapping $z = \ln(w)$ helps understand the forward mapping $w = e^z$. Circles in $w$ become vertical lines in $z$, and rays in $w$ become horizontal lines in $z$.

---

### Practice Questions:

**Question 1:**
Sketch the image of the vertical line segment from $z = 1 - i\pi$ to $z = 1 + i\pi$ under the mapping $w = e^z$.

**Question 2:**
Sketch the image of the horizontal line segment from $z = -1 + i\frac{\pi}{4}$ to $z = 1 + i\frac{\pi}{4}$ under the mapping $w = e^z$.

**Question 3:**
Find the image of the rectangular region defined by $0 \le x \le 2$ and $0 \le y \le \frac{\pi}{2}$ under the mapping $w = e^z$.

**Question 4:**
Determine the values of $z$ for which $e^z = -1$.

**Question 5:**
Find the principal value of $\ln(1+i)$.

---

### Answers to Practice Questions:

**Answer 1:**
The line segment is $x=1$, with $y$ varying from $-\pi$ to $\pi$.
The mapping is $w = e^1 (\cos y + i \sin y)$.
The magnitude $|w| = e^1 = e$.
The argument $\arg(w) = y$. As $y$ varies from $-\pi$ to $\pi$, the argument sweeps through the full range of $2\pi$.
**Result:** The image is the circle $|w| = e$ in the $w$-plane, traversed once counter-clockwise.

**Answer 2:**
The line segment is $y=\frac{\pi}{4}$, with $x$ varying from $-1$ to $1$.
The mapping is $w = e^x (\cos(\frac{\pi}{4}) + i \sin(\frac{\pi}{4})) = e^x (\frac{1}{\sqrt{2}} + i \frac{1}{\sqrt{2}})$.
The argument $\arg(w) = \frac{\pi}{4}$. This is a ray from the origin at an angle of $\frac{\pi}{4}$.
The magnitude $|w| = e^x$. As $x$ varies from $-1$ to $1$, $|w|$ varies from $e^{-1}$ to $e^1$.
**Result:** The image is a line segment on the ray $\arg(w) = \frac{\pi}{4}$ in the $w$-plane, extending from $|w| = e^{-1}$ to $|w| = e$.

**Answer 3:**
The region is a rectangle $0 \le x \le 2$, $0 \le y \le \frac{\pi}{2}$.
The lines $x=0$ and $x=2$ map to circles $|w|=e^0=1$ and $|w|=e^2$.
The lines $y=0$ and $y=\frac{\pi}{2}$ map to rays $\arg(w)=0$ and $\arg(w)=\frac{\pi}{2}$.
**Result:** The image is the sector of an annulus defined by $1 \le |w| \le e^2$ and $0 \le \arg(w) \le \frac{\pi}{2}$.

**Answer 4:**
We want to solve $e^z = -1$.
Let $z = x+iy$.
$e^x (\cos y + i \sin y) = -1$.
Comparing real and imaginary parts:
$e^x \cos y = -1$
$e^x \sin y = 0$

From $e^x \sin y = 0$, since $e^x \ne 0$, we must have $\sin y = 0$. This means $y = k\pi$ for some integer $k$.

Now substitute this into the first equation:
$e^x \cos(k\pi) = -1$.
If $k$ is even ($k=2m$), $\cos(2m\pi) = 1$. Then $e^x \cdot 1 = -1$, which has no real solution for $x$.
If $k$ is odd ($k=2m+1$), $\cos((2m+1)\pi) = -1$. Then $e^x \cdot (-1) = -1$, which means $e^x = 1$, so $x = 0$.

Therefore, $z = x + iy = 0 + i(2m+1)\pi = (2m+1)\pi i$.
**Result:** $z = (2m+1)\pi i$, where $m$ is an integer.

**Answer 5:**
We need to find $\text{Ln}(1+i)$.
First, find the modulus and argument of $w = 1+i$.
$|w| = |1+i| = \sqrt{1^2 + 1^2} = \sqrt{2}$.
The principal argument $\text{Arg}(1+i)$ is the angle in the first quadrant with tangent $\frac{1}{1}=1$. So, $\text{Arg}(1+i) = \frac{\pi}{4}$.

The principal value of the logarithm is $\text{Ln}(w) = \ln(|w|) + i \text{Arg}(w)$.
$\text{Ln}(1+i) = \ln(\sqrt{2}) + i \frac{\pi}{4}$.
Since $\ln(\sqrt{2}) = \ln(2^{1/2}) = \frac{1}{2}\ln(2)$.
**Result:** $\text{Ln}(1+i) = \frac{1}{2}\ln(2) + i \frac{\pi}{4}$.
