---
title: "Cauchy Integral formula (without proof)."
subject: "MATHEMATICS FOR ELECTRICAL SCIENCE AND PHYSICAL SCIENCE – 3"
module: "Module 3: Complex Integration"
branch: "Electrical and Electronics Engineering"
semester: 3
topicId: "68a200832b85456187f35a78"
status: "completed"
scrapedAt: "2026-05-23T16:14:45.653Z"
---
# Mathematics for Electrical Science and Physical Science – 3: Module 3 - Complex Integration

## Topic: Cauchy Integral Formula (Without Proof)

This topic focuses on a powerful tool in complex analysis that allows us to evaluate contour integrals of analytic functions and find the values of these functions at specific points within a contour.

### Learning Outcomes Covered:

*   **CO3:** Compute complex integrals using Cauchy's integral theorem and Cauchy's integral formula. (Knowledge Level: K3)

### Key Concepts and Definitions:

#### 1. Analytic Function:

A function $f(z)$ is **analytic** in a region $R$ if it is differentiable at every point in $R$. Analyticity implies that the function is infinitely differentiable and can be represented by a Taylor series in the region.

#### 2. Simple Closed Contour (or Curve):

A continuous curve $C$ in the complex plane is a **simple closed contour** if it does not intersect itself and its beginning and end points coincide. Examples include circles and ellipses.

#### 3. Region of Analyticity:

A region $R$ is where a function $f(z)$ is analytic.

#### 4. Interior and Exterior of a Contour:

For a simple closed contour $C$, the complex plane is divided into two regions: the **interior** (bounded by $C$) and the **exterior** (unbounded region outside $C$).

#### 5. Cauchy Integral Formula:

This is the central formula for this topic. It states that if a function $f(z)$ is analytic in a simply connected domain $D$ and $C$ is a simple closed contour within $D$, then for any point $z_0$ inside $C$, the value of $f(z)$ at $z_0$ can be expressed by the following integral:

$$
f(z_0) = \frac{1}{2\pi i} \oint_C \frac{f(z)}{z - z_0} dz
$$

Where:
*   $f(z)$ is analytic in the domain containing $C$ and its interior.
*   $C$ is a simple closed contour.
*   $z_0$ is any point strictly inside $C$.
*   $i$ is the imaginary unit ($\sqrt{-1}$).
*   $\oint_C$ denotes integration along the contour $C$ in the positive (counterclockwise) direction.

#### 6. Generalized Cauchy Integral Formula (for Derivatives):

Cauchy's Integral Formula can be extended to find the derivatives of an analytic function. If $f(z)$ is analytic in a simply connected domain $D$ and $C$ is a simple closed contour within $D$, then for any point $z_0$ inside $C$, the $n$-th derivative of $f(z)$ at $z_0$ is given by:

$$
f^{(n)}(z_0) = \frac{n!}{2\pi i} \oint_C \frac{f(z)}{(z - z_0)^{n+1}} dz
$$

Where:
*   $f^{(n)}(z_0)$ denotes the $n$-th derivative of $f(z)$ evaluated at $z_0$.
*   $n!$ is the factorial of $n$ ($n! = n \times (n-1) \times \dots \times 2 \times 1$).

### Importance and Applications (Connecting to CO3):

*   **Calculating Function Values:** The Cauchy Integral Formula provides a direct method to calculate the value of an analytic function at a point inside a contour if we know its values on the contour. This is particularly useful when the integrand in the formula is simpler to integrate than the original function itself.
*   **Calculating Contour Integrals:** The formula can be rearranged to evaluate contour integrals. If we have an integral of the form $\oint_C \frac{f(z)}{z - z_0} dz$, and we can identify $f(z)$ as an analytic function and $z_0$ as a point inside the contour $C$, we can directly compute the integral as $2\pi i f(z_0)$. This is a significant simplification compared to parameterizing the contour and performing direct integration.
*   **Foundation for Other Theorems:** The Cauchy Integral Formula is a cornerstone of complex analysis and serves as a basis for proving other important theorems, such as Cauchy's Integral Theorem (which this formula is derived from) and the Residue Theorem.

### Examples:

**Example 1: Using Cauchy Integral Formula to find $f(z_0)$**

Let $f(z) = e^z$. Find the value of $f(1)$ if we are given the integral:
$$
\oint_C \frac{e^z}{z - 1} dz
$$
where $C$ is the circle $|z| = 2$ traversed counterclockwise.

**Solution:**
Here, $f(z) = e^z$, which is analytic everywhere in the complex plane. The point $z_0 = 1$. The contour $C$ is the circle $|z| = 2$. Since $z_0 = 1$ lies inside the circle $|z| = 2$, we can apply the Cauchy Integral Formula:
$$
f(z_0) = \frac{1}{2\pi i} \oint_C \frac{f(z)}{z - z_0} dz
$$
Rearranging for the integral:
$$
\oint_C \frac{f(z)}{z - z_0} dz = 2\pi i f(z_0)
$$
Substituting $f(z) = e^z$ and $z_0 = 1$:
$$
\oint_C \frac{e^z}{z - 1} dz = 2\pi i f(1) = 2\pi i e^1 = 2\pi i e
$$
Therefore, the value of the integral is $2\pi i e$.

**Example 2: Using Cauchy Integral Formula to evaluate an integral**

Evaluate the integral $\oint_C \frac{\sin(\pi z^2) + \cos(\pi z^2)}{z - 1} dz$, where $C$ is the circle $|z| = 1/2$ traversed counterclockwise.

**Solution:**
Let $f(z) = \sin(\pi z^2) + \cos(\pi z^2)$. This function is analytic everywhere in the complex plane, as it's a composition of standard analytic functions (polynomials, sine, cosine).
The point $z_0 = 1$.
The contour $C$ is the circle $|z| = 1/2$.
We observe that the point $z_0 = 1$ lies *outside* the contour $C$. For the Cauchy Integral Formula to be applicable, $z_0$ must be *inside* the contour.

Let's consider another integral where the point is inside:
Evaluate the integral $\oint_C \frac{\sin(\pi z^2) + \cos(\pi z^2)}{z - 1/2} dz$, where $C$ is the circle $|z| = 1$ traversed counterclockwise.

**Solution:**
Here, $f(z) = \sin(\pi z^2) + \cos(\pi z^2)$, which is analytic.
The point $z_0 = 1/2$.
The contour $C$ is the circle $|z| = 1$.
Since $z_0 = 1/2$ is inside the circle $|z| = 1$, we can use the Cauchy Integral Formula:
$$
\oint_C \frac{f(z)}{z - z_0} dz = 2\pi i f(z_0)
$$
Substituting $f(z) = \sin(\pi z^2) + \cos(\pi z^2)$ and $z_0 = 1/2$:
$$
\oint_C \frac{\sin(\pi z^2) + \cos(\pi z^2)}{z - 1/2} dz = 2\pi i \left( \sin\left(\pi \left(\frac{1}{2}\right)^2\right) + \cos\left(\pi \left(\frac{1}{2}\right)^2\right) \right)
$$
$$
= 2\pi i \left( \sin\left(\frac{\pi}{4}\right) + \cos\left(\frac{\pi}{4}\right) \right)
$$
We know that $\sin(\pi/4) = \frac{\sqrt{2}}{2}$ and $\cos(\pi/4) = \frac{\sqrt{2}}{2}$.
$$
= 2\pi i \left( \frac{\sqrt{2}}{2} + \frac{\sqrt{2}}{2} \right) = 2\pi i (\sqrt{2}) = 2\sqrt{2}\pi i
$$
Therefore, the value of the integral is $2\sqrt{2}\pi i$.

**Example 3: Using Generalized Cauchy Integral Formula for Derivatives**

Evaluate the integral $\oint_C \frac{e^{2z}}{(z - 1)^2} dz$, where $C$ is the circle $|z - 1| = 1$ traversed counterclockwise.

**Solution:**
Here, we have a term $(z - z_0)^{n+1}$ in the denominator. We need to identify $n$.
In this case, the denominator is $(z - 1)^2$, so $n+1 = 2$, which means $n = 1$.
The function $f(z) = e^{2z}$, which is analytic everywhere.
The point $z_0 = 1$.
The contour $C$ is the circle $|z - 1| = 1$. The center of the circle is $1$, and its radius is $1$. The point $z_0 = 1$ is the center of the circle, which is inside $C$.

Using the Generalized Cauchy Integral Formula for the first derivative ($n=1$):
$$
f'(z_0) = \frac{1!}{2\pi i} \oint_C \frac{f(z)}{(z - z_0)^{1+1}} dz
$$
Rearranging for the integral:
$$
\oint_C \frac{f(z)}{(z - z_0)^2} dz = 2\pi i f'(z_0)
$$
First, let's find the first derivative of $f(z) = e^{2z}$:
$f'(z) = \frac{d}{dz}(e^{2z}) = 2e^{2z}$.
Now, evaluate $f'(z)$ at $z_0 = 1$:
$f'(1) = 2e^{2 \times 1} = 2e^2$.

Substitute this back into the integral formula:
$$
\oint_C \frac{e^{2z}}{(z - 1)^2} dz = 2\pi i f'(1) = 2\pi i (2e^2) = 4\pi i e^2
$$
Therefore, the value of the integral is $4\pi i e^2$.

### Practice Questions/Exercises:

1.  Evaluate the integral $\oint_C \frac{z^3 + 2z - 1}{z - i} dz$, where $C$ is the circle $|z| = 2$ traversed counterclockwise.
2.  Evaluate the integral $\oint_C \frac{\cos(z)}{z^2 + 1} dz$, where $C$ is the circle $|z| = 3$ traversed counterclockwise. (Hint: You may need to use partial fraction decomposition or consider different points $z_0$).
3.  Evaluate the integral $\oint_C \frac{e^z}{z(z-1)} dz$, where $C$ is the circle $|z - 1/2| = 1/4$ traversed counterclockwise.
4.  Evaluate the integral $\oint_C \frac{1}{z-2} dz$, where $C$ is the circle $|z|=1$ traversed counterclockwise.
5.  Using the generalized Cauchy Integral Formula, evaluate $\oint_C \frac{2z + 1}{(z-1)^3} dz$, where $C$ is the circle $|z|=2$ traversed counterclockwise.

### Answers to Practice Questions:

1.  Let $f(z) = z^3 + 2z - 1$ and $z_0 = i$. Since $|i| = 1 < 2$, $z_0$ is inside $C$.
    $\oint_C \frac{f(z)}{z - i} dz = 2\pi i f(i) = 2\pi i (i^3 + 2i - 1) = 2\pi i (-i + 2i - 1) = 2\pi i (i - 1) = 2\pi i^2 - 2\pi i = -2\pi - 2\pi i$.
    **Answer: $-2\pi - 2\pi i$**

2.  Let $f(z) = \frac{1}{z^2+1}$. This function is not analytic at $z=i$ and $z=-i$. The integral is $\oint_C \frac{1}{z^2+1} dz$.
    If $f(z) = 1$ (which is analytic), and the integral is $\oint_C \frac{1}{(z-i)(z+i)} dz$.
    We need to split this using partial fractions: $\frac{1}{(z-i)(z+i)} = \frac{A}{z-i} + \frac{B}{z+i}$.
    $1 = A(z+i) + B(z-i)$.
    If $z=i$: $1 = A(2i) \Rightarrow A = \frac{1}{2i} = -\frac{i}{2}$.
    If $z=-i$: $1 = B(-2i) \Rightarrow B = -\frac{1}{2i} = \frac{i}{2}$.
    So the integral is $\oint_C \left( \frac{-i/2}{z-i} + \frac{i/2}{z+i} \right) dz = -\frac{i}{2} \oint_C \frac{1}{z-i} dz + \frac{i}{2} \oint_C \frac{1}{z+i} dz$.
    Both $z_0 = i$ and $z_0 = -i$ are inside the circle $|z|=3$.
    For the first integral, $f(z)=1$, $z_0=i$: $2\pi i f(i) = 2\pi i (1) = 2\pi i$.
    For the second integral, $f(z)=1$, $z_0=-i$: $2\pi i f(-i) = 2\pi i (1) = 2\pi i$.
    The total integral is $-\frac{i}{2} (2\pi i) + \frac{i}{2} (2\pi i) = - \pi i^2 + \pi i^2 = \pi + \pi = 2\pi$.
    **Answer: $2\pi$**

3.  Let $f(z) = \frac{1}{z-1}$. This function is analytic for $z \neq 1$. The integral is $\oint_C \frac{1/z}{z-1} dz$.
    Here, we have two options for $f(z)$ and $z_0$:
    Option 1: $f(z) = \frac{1}{z}$ and $z_0 = 1$. The contour is $|z - 1/2| = 1/4$. The point $z_0=1$ is NOT inside this contour since $|1 - 1/2| = 1/2 > 1/4$.
    Option 2: $f(z) = \frac{1}{z-1}$ and $z_0 = 0$. The contour is $|z - 1/2| = 1/4$. The point $z_0=0$ is NOT inside this contour since $|0 - 1/2| = 1/2 > 1/4$.

    Let's re-examine the problem. It should be $\oint_C \frac{f(z)}{z-z_0} dz$.
    Let $f(z) = \frac{1}{z}$. Then $f(z)$ is analytic everywhere except at $z=0$.
    The integral is $\oint_C \frac{1/(z-1)}{z} dz$.
    Let $f(z) = \frac{1}{z-1}$. This function is analytic inside and on the contour $|z - 1/2| = 1/4$ because $z=1$ is outside this circle.
    The point $z_0 = 0$. The contour $C$ is $|z - 1/2| = 1/4$.
    Is $z_0 = 0$ inside $C$? $|0 - 1/2| = |-1/2| = 1/2$. The radius of $C$ is $1/4$. Since $1/2 > 1/4$, $z_0 = 0$ is *outside* $C$.
    Thus, the integrand $\frac{1}{z(z-1)}$ is analytic inside $C$. By Cauchy's Integral Theorem, the integral is 0.

    Let's consider the integral $\oint_C \frac{1}{z(z-1)} dz$ where $C$ is $|z|=1/4$.
    Here $z_0=0$ is inside $C$. $f(z) = \frac{1}{z-1}$.
    Integral = $2\pi i f(0) = 2\pi i (\frac{1}{0-1}) = 2\pi i (-1) = -2\pi i$.

    Let's assume the question intended to ask for $\oint_C \frac{1}{z(z-1)} dz$ where $C$ is $|z - 1/2| = 1/4$. In this case, the integrand is analytic everywhere within $C$. Therefore, the integral is 0 by Cauchy's Integral Theorem.
    **Answer: 0** (assuming the integrand is analytic within the contour)

4.  Here, $f(z) = 1$ (analytic) and $z_0 = 2$. The contour $C$ is $|z|=1$.
    The point $z_0 = 2$ lies *outside* the contour $C$.
    Since the integrand $\frac{1}{z-2}$ is analytic inside and on the contour $C$, by Cauchy's Integral Theorem, the integral is 0.
    **Answer: 0**

5.  We need to evaluate $\oint_C \frac{2z + 1}{(z-1)^3} dz$, where $C$ is the circle $|z|=2$.
    Here, $n+1 = 3$, so $n=2$.
    $f(z) = 2z + 1$, which is analytic.
    $z_0 = 1$. This point is inside the circle $|z|=2$.
    We need the second derivative of $f(z)$:
    $f'(z) = 2$.
    $f''(z) = 0$.
    Using the generalized formula: $\oint_C \frac{f(z)}{(z - z_0)^{n+1}} dz = \frac{2\pi i}{n!} f^{(n)}(z_0)$.
    $\oint_C \frac{2z + 1}{(z-1)^3} dz = \frac{2\pi i}{2!} f''(1) = \frac{2\pi i}{2} (0) = 0$.
    **Answer: 0**

### Important Points to Remember:

*   **Analyticity is Crucial:** The Cauchy Integral Formula and its generalized versions are only applicable if the function $f(z)$ is analytic in the region containing the contour $C$ and its interior.
*   **Location of $z_0$:** The point $z_0$ must be strictly *inside* the contour $C$. If $z_0$ is on the contour or outside, the formula does not apply directly.
*   **Orientation of Contour:** The formulas assume the contour $C$ is traversed in the positive (counterclockwise) direction.
*   **Simple Closed Contour:** The contour $C$ must be a simple closed contour.
*   **Denominator Power:** For derivatives, carefully identify the power of $(z-z_0)$ in the denominator to determine the order of the derivative ($n$).
*   **Relationship to Cauchy's Integral Theorem:** If the integrand is analytic everywhere inside and on the contour, the integral is zero (Cauchy's Integral Theorem). The Cauchy Integral Formula is for cases where the integrand has a simple pole *inside* the contour.
