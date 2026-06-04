---
title: "Harmonic functions"
subject: "MATHEMATICS FOR ELECTRICAL SCIENCE AND PHYSICAL SCIENCE – 3"
module: "Module 2: Complex Function"
branch: "Civil Engineering"
semester: 3
topicId: "689f15ca56b5e963ba810694"
status: "completed"
scrapedAt: "2026-05-20T18:41:21.030Z"
---
# Mathematics for Electrical Science and Physical Science – 3

## Module 2: Complex Functions

### Topic: Harmonic Functions

---

### 1. Learning Outcomes

Upon successful completion of this topic, you should be able to:

*   **Understand the definition of harmonic functions and their relationship to analytic functions.**
*   **Identify harmonic functions and verify if a given function is harmonic.**
*   **Find the harmonic conjugate of a given harmonic function.**
*   **Construct an analytic function from its real or imaginary part, given the other part.**
*   **Apply the concept of harmonic functions to solve problems in physical sciences and electrical engineering.**

---

### 2. Key Concepts and Definitions

#### 2.1 What is a Harmonic Function?

A real-valued function $\phi(x, y)$ of two real variables $x$ and $y$ is said to be **harmonic** in a region $R$ if it possesses continuous second partial derivatives in $R$ and satisfies **Laplace's Equation**:

$$ \nabla^2 \phi = \frac{\partial^2 \phi}{\partial x^2} + \frac{\partial^2 \phi}{\partial y^2} = 0 $$

**Laplace's Equation** is a fundamental partial differential equation that appears in many areas of physics, including electrostatics, fluid dynamics, heat conduction, and wave propagation.

#### 2.2 Harmonic Conjugate

If $f(z) = u(x, y) + i v(x, y)$ is an analytic function in a region $R$, then its real part $u(x, y)$ and its imaginary part $v(x, y)$ are both harmonic functions in $R$. Furthermore, $u$ and $v$ are called **harmonic conjugates** of each other.

This means that if $u(x, y)$ is harmonic, its harmonic conjugate $v(x, y)$ is a function such that $u(x, y) + i v(x, y)$ is analytic.

#### 2.3 Relationship between Harmonic Functions and Analytic Functions

The core connection lies in the Cauchy-Riemann equations. If $f(z) = u(x, y) + i v(x, y)$ is analytic in a region, then:

1.  $u$ and $v$ are harmonic in that region.
2.  The Cauchy-Riemann equations are satisfied:
    *   $\frac{\partial u}{\partial x} = \frac{\partial v}{\partial y}$
    *   $\frac{\partial u}{\partial y} = -\frac{\partial v}{\partial x}$

This implies that if you have one part of an analytic function (either the real or imaginary part), you can find the other part and thus reconstruct the entire analytic function.

#### 2.4 Verifying if a Function is Harmonic

To verify if a function $\phi(x, y)$ is harmonic, you need to:

1.  Calculate its second partial derivatives with respect to $x$: $\frac{\partial^2 \phi}{\partial x^2}$.
2.  Calculate its second partial derivatives with respect to $y$: $\frac{\partial^2 \phi}{\partial y^2}$.
3.  Sum these second partial derivatives: $\frac{\partial^2 \phi}{\partial x^2} + \frac{\partial^2 \phi}{\partial y^2}$.
4.  If the sum is zero, and the second partial derivatives are continuous, then $\phi(x, y)$ is harmonic.

#### 2.5 Finding the Harmonic Conjugate

Given a harmonic function $u(x, y)$, we want to find its harmonic conjugate $v(x, y)$ such that $u(x, y) + i v(x, y)$ is analytic. We can use the Cauchy-Riemann equations:

*   $\frac{\partial v}{\partial y} = \frac{\partial u}{\partial x}$
*   $\frac{\partial v}{\partial x} = -\frac{\partial u}{\partial y}$

We can integrate the first equation with respect to $y$ to find $v$:

$$ v(x, y) = \int \frac{\partial u}{\partial x} dy + g(x) $$

Here, $g(x)$ is an arbitrary function of $x$ (acting as the "constant of integration" with respect to $y$).

Then, we differentiate this expression for $v$ with respect to $x$ and equate it to $-\frac{\partial u}{\partial y}$ to find $g(x)$.

Alternatively, we can integrate the second equation with respect to $x$ to find $v$:

$$ v(x, y) = \int -\frac{\partial u}{\partial y} dx + h(y) $$

Here, $h(y)$ is an arbitrary function of $y$. We then differentiate this expression for $v$ with respect to $y$ and equate it to $\frac{\partial u}{\partial x}$ to find $h(y)$.

#### 2.6 Constructing an Analytic Function

If we are given the real part $u(x, y)$ of an analytic function $f(z) = u(x, y) + i v(x, y)$, we first verify that $u$ is harmonic. Then, we find its harmonic conjugate $v(x, y)$ using the methods described above. Finally, we construct the analytic function $f(z) = u(x, y) + i v(x, y)$.

A more direct method is using **Millne-Thomson Method**:

1.  Replace $y$ with 0 in $\frac{\partial u}{\partial x}$ and $\frac{\partial u}{\partial y}$. Let these be $\phi(x) = \frac{\partial u}{\partial x}(x, 0)$ and $\psi(x) = \frac{\partial u}{\partial y}(x, 0)$.
2.  Form the function $F(z) = \phi(z) - i \psi(z)$.
3.  Integrate $F(z)$ with respect to $z$ to get $f(z)$:
    $$ f(z) = \int F(z) dz + C $$
    where $C$ is a complex constant. The real part of $f(z)$ will be the given $u(x, y)$.

Similarly, if we are given the imaginary part $v(x, y)$, we can find its harmonic conjugate $u(x, y)$ using the Cauchy-Riemann equations and construct $f(z) = u(x, y) + i v(x, y)$.

Using the Millne-Thomson Method for the imaginary part $v(x, y)$:

1.  Calculate $\frac{\partial v}{\partial x}$ and $\frac{\partial v}{\partial y}$.
2.  Replace $y$ with 0 in these derivatives to get $\phi(x) = \frac{\partial v}{\partial x}(x, 0)$ and $\psi(x) = \frac{\partial v}{\partial y}(x, 0)$.
3.  Form the function $G(z) = \psi(z) + i \phi(z)$.
4.  Integrate $G(z)$ with respect to $z$ to get $f(z)$:
    $$ f(z) = \int G(z) dz + C $$
    The imaginary part of $f(z)$ will be the given $v(x, y)$.

---

### 3. Examples

#### Example 1: Verifying if a Function is Harmonic

**Question:** Show that the function $\phi(x, y) = x^2 - y^2$ is harmonic.

**Solution:**
We need to check if it satisfies Laplace's equation: $\frac{\partial^2 \phi}{\partial x^2} + \frac{\partial^2 \phi}{\partial y^2} = 0$.

First partial derivatives:
*   $\frac{\partial \phi}{\partial x} = 2x$
*   $\frac{\partial \phi}{\partial y} = -2y$

Second partial derivatives:
*   $\frac{\partial^2 \phi}{\partial x^2} = \frac{\partial}{\partial x}(2x) = 2$
*   $\frac{\partial^2 \phi}{\partial y^2} = \frac{\partial}{\partial y}(-2y) = -2$

Sum of second partial derivatives:
*   $\frac{\partial^2 \phi}{\partial x^2} + \frac{\partial^2 \phi}{\partial y^2} = 2 + (-2) = 0$

Since the second partial derivatives are continuous and sum to zero, $\phi(x, y) = x^2 - y^2$ is harmonic.

#### Example 2: Finding the Harmonic Conjugate

**Question:** Given the harmonic function $u(x, y) = x^2 - y^2$, find its harmonic conjugate $v(x, y)$.

**Solution:**
We know that $u(x, y) = x^2 - y^2$ is harmonic. We need to find $v(x, y)$ such that $f(z) = u(x, y) + i v(x, y)$ is analytic.
Using the Cauchy-Riemann equations:

1.  $\frac{\partial u}{\partial x} = 2x$
2.  $\frac{\partial u}{\partial y} = -2y$

Now, use the Cauchy-Riemann equations for $v$:
*   $\frac{\partial v}{\partial y} = \frac{\partial u}{\partial x} = 2x$
*   $\frac{\partial v}{\partial x} = -\frac{\partial u}{\partial y} = -(-2y) = 2y$

Integrate the first equation with respect to $y$:
$$ v(x, y) = \int 2x \, dy + g(x) $$
$$ v(x, y) = 2xy + g(x) $$

Now, differentiate this expression for $v$ with respect to $x$ and equate it to $\frac{\partial u}{\partial y}$:
$$ \frac{\partial v}{\partial x} = \frac{\partial}{\partial x}(2xy + g(x)) = 2y + g'(x) $$

We require this to be equal to $2y$:
$$ 2y + g'(x) = 2y $$
$$ g'(x) = 0 $$
Integrating $g'(x) = 0$ gives $g(x) = C$, where $C$ is a constant.

So, the harmonic conjugate is $v(x, y) = 2xy + C$. We usually take $C=0$ for simplicity.
Thus, $v(x, y) = 2xy$.

#### Example 3: Constructing an Analytic Function (using Cauchy-Riemann)

**Question:** Find the analytic function $f(z)$ whose real part is $u(x, y) = x^2 - y^2$.

**Solution:**
From Example 2, we found that the harmonic conjugate is $v(x, y) = 2xy$.
Therefore, the analytic function is:
$$ f(z) = u(x, y) + i v(x, y) = (x^2 - y^2) + i (2xy) $$
We can recognize this as $z^2$:
Since $z = x + iy$, then $z^2 = (x + iy)^2 = x^2 + 2ixy + (iy)^2 = x^2 + 2ixy - y^2 = (x^2 - y^2) + i(2xy)$.
So, $f(z) = z^2$.

#### Example 4: Constructing an Analytic Function (using Millne-Thomson Method)

**Question:** Find the analytic function $f(z)$ whose real part is $u(x, y) = e^x \cos y$.

**Solution:**

**Step 1: Verify $u(x, y)$ is harmonic.**
*   $\frac{\partial u}{\partial x} = e^x \cos y$
*   $\frac{\partial u}{\partial y} = -e^x \sin y$
*   $\frac{\partial^2 u}{\partial x^2} = e^x \cos y$
*   $\frac{\partial^2 u}{\partial y^2} = -e^x \cos y$
*   $\frac{\partial^2 u}{\partial x^2} + \frac{\partial^2 u}{\partial y^2} = e^x \cos y - e^x \cos y = 0$.
So, $u(x, y)$ is harmonic.

**Step 2: Use Millne-Thomson Method.**
*   Calculate $\frac{\partial u}{\partial x} = e^x \cos y$ and $\frac{\partial u}{\partial y} = -e^x \sin y$.
*   Replace $y$ with 0:
    *   $\phi(x) = \frac{\partial u}{\partial x}(x, 0) = e^x \cos 0 = e^x$
    *   $\psi(x) = \frac{\partial u}{\partial y}(x, 0) = -e^x \sin 0 = 0$
*   Form $F(z) = \phi(z) - i \psi(z) = e^z - i(0) = e^z$.
*   Integrate $F(z)$ to find $f(z)$:
    $$ f(z) = \int e^z dz = e^z + C $$
    where $C$ is a complex constant.

Let's check if the real part of $e^z$ is indeed $e^x \cos y$.
$f(z) = e^{x+iy} = e^x e^{iy} = e^x (\cos y + i \sin y) = e^x \cos y + i e^x \sin y$.
The real part is $e^x \cos y$, which matches the given $u(x, y)$.

#### Example 5: Constructing an Analytic Function (given imaginary part)

**Question:** Find the analytic function $f(z)$ whose imaginary part is $v(x, y) = 2xy$.

**Solution:**
We need to find $u(x, y)$ such that $f(z) = u(x, y) + i v(x, y)$ is analytic.
Using the Cauchy-Riemann equations:

1.  $\frac{\partial v}{\partial x} = 2y$
2.  $\frac{\partial v}{\partial y} = 2x$

Now, use the Cauchy-Riemann equations for $u$:
*   $\frac{\partial u}{\partial x} = \frac{\partial v}{\partial y} = 2x$
*   $\frac{\partial u}{\partial y} = -\frac{\partial v}{\partial x} = -(2y) = -2y$

Integrate the first equation with respect to $x$:
$$ u(x, y) = \int 2x \, dx + h(y) $$
$$ u(x, y) = x^2 + h(y) $$

Now, differentiate this expression for $u$ with respect to $y$ and equate it to $-2y$:
$$ \frac{\partial u}{\partial y} = \frac{\partial}{\partial y}(x^2 + h(y)) = h'(y) $$

We require this to be equal to $-2y$:
$$ h'(y) = -2y $$
Integrating $h'(y) = -2y$ gives $h(y) = -y^2 + C$, where $C$ is a constant.

So, the real part is $u(x, y) = x^2 - y^2 + C$. We can take $C=0$.
Thus, $u(x, y) = x^2 - y^2$.

The analytic function is:
$$ f(z) = u(x, y) + i v(x, y) = (x^2 - y^2) + i (2xy) $$
As seen before, $f(z) = z^2$.

---

### 4. Practice Questions/Exercises

**Question 1:** Verify that the function $\phi(x, y) = \ln(x^2 + y^2)$ is harmonic for $(x, y) \neq (0, 0)$.

**Question 2:** Given that $u(x, y) = \frac{x}{x^2 + y^2}$ is harmonic, find its harmonic conjugate $v(x, y)$.

**Question 3:** Find the analytic function $f(z)$ whose real part is $u(x, y) = e^{-y} \sin x$.

**Question 4:** Find the analytic function $f(z)$ whose imaginary part is $v(x, y) = \arctan\left(\frac{y}{x}\right)$ for $x > 0$.

**Question 5:** If $f(z) = u(x, y) + i v(x, y)$ is analytic, show that $u(x, y)$ and $v(x, y)$ satisfy Laplace's equation.

---

### 5. Answers to Practice Questions

**Answer 1:**
Let $\phi(x, y) = \ln(x^2 + y^2)$.
*   $\frac{\partial \phi}{\partial x} = \frac{2x}{x^2 + y^2}$
*   $\frac{\partial^2 \phi}{\partial x^2} = \frac{2(x^2 + y^2) - 2x(2x)}{(x^2 + y^2)^2} = \frac{2x^2 + 2y^2 - 4x^2}{(x^2 + y^2)^2} = \frac{2y^2 - 2x^2}{(x^2 + y^2)^2}$
*   $\frac{\partial \phi}{\partial y} = \frac{2y}{x^2 + y^2}$
*   $\frac{\partial^2 \phi}{\partial y^2} = \frac{2(x^2 + y^2) - 2y(2y)}{(x^2 + y^2)^2} = \frac{2x^2 + 2y^2 - 4y^2}{(x^2 + y^2)^2} = \frac{2x^2 - 2y^2}{(x^2 + y^2)^2}$

$\frac{\partial^2 \phi}{\partial x^2} + \frac{\partial^2 \phi}{\partial y^2} = \frac{2y^2 - 2x^2}{(x^2 + y^2)^2} + \frac{2x^2 - 2y^2}{(x^2 + y^2)^2} = \frac{0}{(x^2 + y^2)^2} = 0$.
Thus, $\phi(x, y)$ is harmonic.

**Answer 2:**
Given $u(x, y) = \frac{x}{x^2 + y^2}$.
*   $\frac{\partial u}{\partial x} = \frac{(x^2 + y^2)(1) - x(2x)}{(x^2 + y^2)^2} = \frac{y^2 - x^2}{(x^2 + y^2)^2}$
*   $\frac{\partial u}{\partial y} = \frac{x(2y)}{(x^2 + y^2)^2} = \frac{-2xy}{(x^2 + y^2)^2}$

Using Cauchy-Riemann equations:
*   $\frac{\partial v}{\partial y} = \frac{y^2 - x^2}{(x^2 + y^2)^2}$
*   $\frac{\partial v}{\partial x} = -\frac{\partial u}{\partial y} = - \frac{-2xy}{(x^2 + y^2)^2} = \frac{2xy}{(x^2 + y^2)^2}$

Integrate $\frac{\partial v}{\partial y}$ with respect to $y$:
$v(x, y) = \int \frac{y^2 - x^2}{(x^2 + y^2)^2} dy$.
This integration can be tricky. A simpler approach is to use the known analytic function associated with $1/z$.
We know that $f(z) = \frac{1}{z} = \frac{1}{x+iy} = \frac{x-iy}{x^2+y^2} = \frac{x}{x^2+y^2} - i\frac{y}{x^2+y^2}$.
The real part is $u(x, y) = \frac{x}{x^2+y^2}$.
The imaginary part is $v(x, y) = -\frac{y}{x^2+y^2}$.
So, the harmonic conjugate is $v(x, y) = -\frac{y}{x^2+y^2}$.

**Answer 3:**
Given $u(x, y) = e^{-y} \sin x$.
*   $\frac{\partial u}{\partial x} = e^{-y} \cos x$
*   $\frac{\partial u}{\partial y} = -e^{-y} \sin x$

Millne-Thomson Method:
*   $\phi(x) = \frac{\partial u}{\partial x}(x, 0) = e^0 \cos x = \cos x$
*   $\psi(x) = \frac{\partial u}{\partial y}(x, 0) = -e^0 \sin x = -\sin x$
*   $F(z) = \phi(z) - i \psi(z) = \cos z - i(-\sin z) = \cos z + i \sin z = e^{iz}$.
*   $f(z) = \int e^{iz} dz = \frac{e^{iz}}{i} + C = -i e^{iz} + C$.
Check: $-i e^{i(x+iy)} = -i e^{ix - y} = -i e^{-y} e^{ix} = -i e^{-y} (\cos x + i \sin x) = -i e^{-y} \cos x - i^2 e^{-y} \sin x = e^{-y} \sin x - i e^{-y} \cos x$.
The real part is $e^{-y} \sin x$, which matches.
So, $f(z) = -i e^{iz} + C$.

**Answer 4:**
Given $v(x, y) = \arctan\left(\frac{y}{x}\right)$.
*   $\frac{\partial v}{\partial x} = \frac{1}{1 + (y/x)^2} \cdot \left(-\frac{y}{x^2}\right) = \frac{x^2}{x^2 + y^2} \cdot \left(-\frac{y}{x^2}\right) = -\frac{y}{x^2 + y^2}$
*   $\frac{\partial v}{\partial y} = \frac{1}{1 + (y/x)^2} \cdot \frac{1}{x} = \frac{x^2}{x^2 + y^2} \cdot \frac{1}{x} = \frac{x}{x^2 + y^2}$

Using Cauchy-Riemann equations:
*   $\frac{\partial u}{\partial x} = \frac{\partial v}{\partial y} = \frac{x}{x^2 + y^2}$
*   $\frac{\partial u}{\partial y} = -\frac{\partial v}{\partial x} = - \left(-\frac{y}{x^2 + y^2}\right) = \frac{y}{x^2 + y^2}$

We recognize these as the partial derivatives of $\ln(x^2+y^2)$.
$u(x, y) = \ln(x^2 + y^2) + C$.
The analytic function is $f(z) = \ln(x^2 + y^2) + i \arctan\left(\frac{y}{x}\right) + C$.
Since $z = re^{i\theta}$, $\ln z = \ln r + i\theta$. Here $r = \sqrt{x^2+y^2}$ and $\theta = \arctan(y/x)$.
So, $\ln z = \ln(\sqrt{x^2+y^2}) + i \arctan(y/x) = \frac{1}{2}\ln(x^2+y^2) + i \arctan(y/x)$.
Thus, $f(z) = 2 \ln z + C$.

**Answer 5:**
If $f(z) = u(x, y) + i v(x, y)$ is analytic, then the Cauchy-Riemann equations hold:
$\frac{\partial u}{\partial x} = \frac{\partial v}{\partial y}$  (1)
$\frac{\partial u}{\partial y} = -\frac{\partial v}{\partial x}$ (2)

Differentiate (1) with respect to $x$:
$\frac{\partial^2 u}{\partial x^2} = \frac{\partial^2 v}{\partial y \partial x}$

Differentiate (2) with respect to $y$:
$\frac{\partial^2 u}{\partial y^2} = -\frac{\partial^2 v}{\partial x \partial y}$

Since $f(z)$ is analytic, its partial derivatives of order up to the second are continuous and mixed partials are equal ($\frac{\partial^2 v}{\partial y \partial x} = \frac{\partial^2 v}{\partial x \partial y}$).

Summing the two equations:
$\frac{\partial^2 u}{\partial x^2} + \frac{\partial^2 u}{\partial y^2} = \frac{\partial^2 v}{\partial y \partial x} - \frac{\partial^2 v}{\partial x \partial y} = 0$.
Thus, $u(x, y)$ is harmonic.

Similarly, to show $v(x, y)$ is harmonic:
Differentiate (1) with respect to $y$:
$\frac{\partial^2 u}{\partial y \partial x} = \frac{\partial^2 v}{\partial y^2}$

Differentiate (2) with respect to $x$:
$\frac{\partial^2 u}{\partial x \partial y} = -\frac{\partial^2 v}{\partial x^2}$

Since $\frac{\partial^2 u}{\partial y \partial x} = \frac{\partial^2 u}{\partial x \partial y}$:
$\frac{\partial^2 v}{\partial y^2} = -\frac{\partial^2 v}{\partial x^2}$
$\frac{\partial^2 v}{\partial x^2} + \frac{\partial^2 v}{\partial y^2} = 0$.
Thus, $v(x, y)$ is harmonic.

---

### 6. Important Points to Remember

*   A function $\phi(x, y)$ is **harmonic** if $\frac{\partial^2 \phi}{\partial x^2} + \frac{\partial^2 \phi}{\partial y^2} = 0$ and its second partial derivatives are continuous.
*   If $f(z) = u(x, y) + i v(x, y)$ is analytic, then both $u(x, y)$ and $v(x, y)$ are harmonic functions, and they are **harmonic conjugates** of each other.
*   The **Cauchy-Riemann equations** are crucial for relating the real and imaginary parts of an analytic function and for finding harmonic conjugates:
    *   $\frac{\partial u}{\partial x} = \frac{\partial v}{\partial y}$
    *   $\frac{\partial u}{\partial y} = -\frac{\partial v}{\partial x}$
*   To find the harmonic conjugate $v$ of a harmonic function $u$, integrate $\frac{\partial v}{\partial y} = \frac{\partial u}{\partial x}$ with respect to $y$ (or $\frac{\partial v}{\partial x} = -\frac{\partial u}{\partial y}$ with respect to $x$) and determine the integration constant.
*   The **Millne-Thomson method** provides a direct way to construct an analytic function $f(z)$ given its real part $u(x, y)$ or imaginary part $v(x, y)$.
*   Harmonic functions are fundamental in solving physical problems like electrostatics (potential functions) and steady-state heat conduction.

---
