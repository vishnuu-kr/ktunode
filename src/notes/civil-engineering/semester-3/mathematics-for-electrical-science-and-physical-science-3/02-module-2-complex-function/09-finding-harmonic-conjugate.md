---
title: "Finding harmonic conjugate"
subject: "MATHEMATICS FOR ELECTRICAL SCIENCE AND PHYSICAL SCIENCE – 3"
module: "Module 2: Complex Function"
branch: "Civil Engineering"
semester: 3
topicId: "689f15ca56b5e963ba810695"
status: "completed"
scrapedAt: "2026-05-20T18:41:21.727Z"
---
# MATHEMATICS FOR ELECTRICAL SCIENCE AND PHYSICAL SCIENCE – 3

## Module 2: Complex Function

### Topic: Finding Harmonic Conjugate

---

### 1. Introduction to Harmonic Functions and Conjugates

This section introduces the fundamental concepts of harmonic functions and their conjugates, which are crucial for understanding complex functions and their applications in electrical and physical sciences.

*   **Harmonic Function:**
    *   A real-valued function $u(x, y)$ of two real variables $x$ and $y$ is called **harmonic** if it satisfies Laplace's equation in two dimensions:
        $$ \frac{\partial^2 u}{\partial x^2} + \frac{\partial^2 u}{\partial y^2} = 0 $$
    *   Laplace's equation is a second-order partial differential equation.
    *   Harmonic functions frequently appear in physics and engineering, for example, in:
        *   **Electrostatics:** The electric potential in a charge-free region is harmonic.
        *   **Fluid Dynamics:** The velocity potential for an irrotational, incompressible flow is harmonic.
        *   **Heat Conduction:** The steady-state temperature distribution in a homogeneous medium with no heat sources is harmonic.

*   **Harmonic Conjugate:**
    *   If $u(x, y)$ is a harmonic function, its **harmonic conjugate**, denoted by $v(x, y)$, is another real-valued function such that the complex function $f(z) = u(x, y) + iv(x, y)$ is analytic in a region of the complex plane, where $z = x + iy$.
    *   For $f(z)$ to be analytic, it must satisfy the **Cauchy-Riemann equations**:
        $$ \frac{\partial u}{\partial x} = \frac{\partial v}{\partial y} \quad \text{and} \quad \frac{\partial u}{\partial y} = -\frac{\partial v}{\partial x} $$

### 2. Learning Outcomes

Upon successful completion of this topic, you will be able to:

*   **LO1: Understand the relationship between harmonic functions and analytic functions.**
*   **LO2: State and apply the Cauchy-Riemann equations to find harmonic conjugates.**
*   **LO3: Determine the harmonic conjugate of a given harmonic function.**
*   **LO4: Construct the analytic function from a harmonic function and its conjugate.**
*   **LO5: Verify that a given function is harmonic by checking Laplace's equation.**

### 3. Key Concepts and Definitions

*   **Analytic Function:** A complex function $f(z)$ is analytic in a region if it is differentiable at every point in that region. Analyticity implies that the function is infinitely differentiable.
*   **Cauchy-Riemann Equations:** These are necessary conditions for a complex function $f(z) = u(x, y) + iv(x, y)$ to be analytic. If $f(z)$ is analytic, then $\frac{\partial u}{\partial x} = \frac{\partial v}{\partial y}$ and $\frac{\partial u}{\partial y} = -\frac{\partial v}{\partial x}$.
*   **Laplace's Equation:** $\nabla^2 \phi = \frac{\partial^2 \phi}{\partial x^2} + \frac{\partial^2 \phi}{\partial y^2} = 0$. Functions satisfying this equation are called harmonic.
*   **Harmonic Conjugate:** If $u$ is harmonic, its harmonic conjugate $v$ makes $f(z) = u + iv$ analytic.

### 4. Finding the Harmonic Conjugate

Given a harmonic function $u(x, y)$, we want to find its harmonic conjugate $v(x, y)$. This involves using the Cauchy-Riemann equations.

Let $f(z) = u(x, y) + iv(x, y)$.
If $f(z)$ is analytic, then:
1.  $\frac{\partial u}{\partial x} = \frac{\partial v}{\partial y}$
2.  $\frac{\partial u}{\partial y} = -\frac{\partial v}{\partial x}$

We can use these equations to find $v(x, y)$.

**Steps to find the harmonic conjugate $v(x, y)$ of a given harmonic function $u(x, y)$:**

1.  **Verify $u(x, y)$ is harmonic (Optional but recommended):** Calculate the second partial derivatives of $u$ with respect to $x$ and $y$ and check if $\frac{\partial^2 u}{\partial x^2} + \frac{\partial^2 u}{\partial y^2} = 0$.
2.  **Calculate partial derivatives of $u$:** Find $\frac{\partial u}{\partial x}$ and $\frac{\partial u}{\partial y}$.
3.  **Set up equations for $v$:**
    *   From $\frac{\partial u}{\partial x} = \frac{\partial v}{\partial y}$, integrate $\frac{\partial u}{\partial x}$ with respect to $y$ to find $v$. This will result in an expression for $v$ involving $x$ and an arbitrary function of $x$, say $\phi(x)$.
    *   From $\frac{\partial u}{\partial y} = -\frac{\partial v}{\partial x}$, integrate $\frac{\partial u}{\partial y}$ with respect to $x$ to find $v$. This will result in an expression for $v$ involving $y$ and an arbitrary function of $y$, say $\psi(y)$.
4.  **Compare and combine:** The expressions obtained for $v$ from both Cauchy-Riemann equations must be consistent. This allows us to determine the exact form of $v(x, y)$.
5.  **Add the constant of integration:** Since $v$ is a real-valued function, we add a constant of integration, $C$, which can be any real number.

**Alternative Method using $f'(z)$:**

If $f(z) = u(x, y) + iv(x, y)$ is analytic, then its derivative is given by:
$$ f'(z) = \frac{\partial u}{\partial x} + i \frac{\partial v}{\partial x} $$
or, using the Cauchy-Riemann equations:
$$ f'(z) = \frac{\partial u}{\partial x} - i \frac{\partial u}{\partial y} $$
or
$$ f'(z) = \frac{\partial v}{\partial y} + i \frac{\partial v}{\partial y} $$
Once $f'(z)$ is found, we can integrate it with respect to $z$ to find $f(z)$. The imaginary part of $f(z)$ will be the harmonic conjugate $v(x, y)$.

---

### 5. Examples

**Example 1: Finding the harmonic conjugate of $u(x, y) = x^2 - y^2$**

**LO5:** Verify that $u(x, y)$ is harmonic.
*   $\frac{\partial u}{\partial x} = 2x$
*   $\frac{\partial^2 u}{\partial x^2} = 2$
*   $\frac{\partial u}{\partial y} = -2y$
*   $\frac{\partial^2 u}{\partial y^2} = -2$
*   $\frac{\partial^2 u}{\partial x^2} + \frac{\partial^2 u}{\partial y^2} = 2 + (-2) = 0$.
    So, $u(x, y) = x^2 - y^2$ is harmonic.

**LO3:** Find the harmonic conjugate $v(x, y)$.
We have the Cauchy-Riemann equations:
1.  $\frac{\partial u}{\partial x} = \frac{\partial v}{\partial y} \implies 2x = \frac{\partial v}{\partial y}$
2.  $\frac{\partial u}{\partial y} = -\frac{\partial v}{\partial x} \implies -2y = -\frac{\partial v}{\partial x} \implies 2y = \frac{\partial v}{\partial x}$

From equation (1), integrate with respect to $y$:
$v(x, y) = \int 2x \, dy = 2xy + \phi(x)$
where $\phi(x)$ is an arbitrary function of $x$.

Now, differentiate this expression for $v$ with respect to $x$ and equate it to equation (2):
$\frac{\partial v}{\partial x} = \frac{\partial}{\partial x}(2xy + \phi(x)) = 2y + \phi'(x)$

From equation (2), we know $\frac{\partial v}{\partial x} = 2y$.
So, $2y + \phi'(x) = 2y$.
This implies $\phi'(x) = 0$.
Integrating $\phi'(x) = 0$ with respect to $x$ gives $\phi(x) = C$, where $C$ is a real constant.

Substituting $\phi(x) = C$ back into the expression for $v(x, y)$:
$v(x, y) = 2xy + C$

The harmonic conjugate of $u(x, y) = x^2 - y^2$ is $v(x, y) = 2xy$. (We can usually omit the constant $C$ when finding the conjugate, as it doesn't affect the harmonic property or the analytic function up to an additive constant).

**LO4:** Construct the analytic function.
$f(z) = u(x, y) + iv(x, y) = (x^2 - y^2) + i(2xy)$
We recognize this as $f(z) = (x+iy)^2 = z^2$.

**Example 2: Finding the harmonic conjugate of $u(x, y) = e^x \cos y$**

**LO5:** Verify that $u(x, y)$ is harmonic.
*   $\frac{\partial u}{\partial x} = e^x \cos y$
*   $\frac{\partial^2 u}{\partial x^2} = e^x \cos y$
*   $\frac{\partial u}{\partial y} = -e^x \sin y$
*   $\frac{\partial^2 u}{\partial y^2} = -e^x \cos y$
*   $\frac{\partial^2 u}{\partial x^2} + \frac{\partial^2 u}{\partial y^2} = e^x \cos y + (-e^x \cos y) = 0$.
    So, $u(x, y) = e^x \cos y$ is harmonic.

**LO3:** Find the harmonic conjugate $v(x, y)$.
Cauchy-Riemann equations:
1.  $\frac{\partial u}{\partial x} = \frac{\partial v}{\partial y} \implies e^x \cos y = \frac{\partial v}{\partial y}$
2.  $\frac{\partial u}{\partial y} = -\frac{\partial v}{\partial x} \implies -e^x \sin y = -\frac{\partial v}{\partial x} \implies e^x \sin y = \frac{\partial v}{\partial x}$

From equation (1), integrate with respect to $y$:
$v(x, y) = \int e^x \cos y \, dy = e^x \sin y + \phi(x)$

Differentiate this $v$ with respect to $x$:
$\frac{\partial v}{\partial x} = \frac{\partial}{\partial x}(e^x \sin y + \phi(x)) = e^x \sin y + \phi'(x)$

From equation (2), we know $\frac{\partial v}{\partial x} = e^x \sin y$.
So, $e^x \sin y + \phi'(x) = e^x \sin y$.
This implies $\phi'(x) = 0$.
Integrating $\phi'(x) = 0$ gives $\phi(x) = C$.

Thus, $v(x, y) = e^x \sin y + C$.
The harmonic conjugate is $v(x, y) = e^x \sin y$.

**LO4:** Construct the analytic function.
$f(z) = u(x, y) + iv(x, y) = e^x \cos y + i(e^x \sin y)$
$f(z) = e^x (\cos y + i \sin y) = e^x e^{iy} = e^{x+iy} = e^z$.

**Example 3: Finding the harmonic conjugate of $u(x, y) = \ln(x^2 + y^2)$ for $(x, y) \neq (0, 0)$**

**LO5:** Verify that $u(x, y)$ is harmonic.
*   $\frac{\partial u}{\partial x} = \frac{2x}{x^2 + y^2}$
*   $\frac{\partial^2 u}{\partial x^2} = \frac{2(x^2 + y^2) - 2x(2x)}{(x^2 + y^2)^2} = \frac{2x^2 + 2y^2 - 4x^2}{(x^2 + y^2)^2} = \frac{2y^2 - 2x^2}{(x^2 + y^2)^2}$
*   $\frac{\partial u}{\partial y} = \frac{2y}{x^2 + y^2}$
*   $\frac{\partial^2 u}{\partial y^2} = \frac{2(x^2 + y^2) - 2y(2y)}{(x^2 + y^2)^2} = \frac{2x^2 + 2y^2 - 4y^2}{(x^2 + y^2)^2} = \frac{2x^2 - 2y^2}{(x^2 + y^2)^2}$
*   $\frac{\partial^2 u}{\partial x^2} + \frac{\partial^2 u}{\partial y^2} = \frac{2y^2 - 2x^2}{(x^2 + y^2)^2} + \frac{2x^2 - 2y^2}{(x^2 + y^2)^2} = 0$.
    So, $u(x, y) = \ln(x^2 + y^2)$ is harmonic.

**LO3:** Find the harmonic conjugate $v(x, y)$.
Cauchy-Riemann equations:
1.  $\frac{\partial u}{\partial x} = \frac{\partial v}{\partial y} \implies \frac{2x}{x^2 + y^2} = \frac{\partial v}{\partial y}$
2.  $\frac{\partial u}{\partial y} = -\frac{\partial v}{\partial x} \implies \frac{2y}{x^2 + y^2} = -\frac{\partial v}{\partial x} \implies -\frac{2y}{x^2 + y^2} = \frac{\partial v}{\partial x}$

From equation (1), integrate with respect to $y$:
$v(x, y) = \int \frac{2x}{x^2 + y^2} \, dy = 2x \int \frac{1}{x^2 + y^2} \, dy$
Let $y = x \tan \theta$, $dy = x \sec^2 \theta \, d\theta$.
$v(x, y) = 2x \int \frac{1}{x^2 + x^2 \tan^2 \theta} (x \sec^2 \theta) \, d\theta = 2x \int \frac{x \sec^2 \theta}{x^2 (1 + \tan^2 \theta)} \, d\theta$
$v(x, y) = 2x \int \frac{x \sec^2 \theta}{x^2 \sec^2 \theta} \, d\theta = 2x \int \frac{1}{x} \, d\theta = 2 \int d\theta = 2\theta + \phi(x)$
Since $y = x \tan \theta$, $\tan \theta = y/x$, so $\theta = \arctan(y/x)$.
$v(x, y) = 2 \arctan(y/x) + \phi(x)$

Differentiate this $v$ with respect to $x$:
$\frac{\partial v}{\partial x} = \frac{\partial}{\partial x} (2 \arctan(y/x) + \phi(x)) = 2 \cdot \frac{1}{1 + (y/x)^2} \cdot (-\frac{y}{x^2}) + \phi'(x)$
$\frac{\partial v}{\partial x} = 2 \cdot \frac{x^2}{x^2 + y^2} \cdot (-\frac{y}{x^2}) + \phi'(x) = -\frac{2y}{x^2 + y^2} + \phi'(x)$

From equation (2), we know $\frac{\partial v}{\partial x} = -\frac{2y}{x^2 + y^2}$.
So, $-\frac{2y}{x^2 + y^2} + \phi'(x) = -\frac{2y}{x^2 + y^2}$.
This implies $\phi'(x) = 0$, so $\phi(x) = C$.

Thus, $v(x, y) = 2 \arctan(y/x) + C$.
The harmonic conjugate is $v(x, y) = 2 \arctan(y/x)$.

**LO4:** Construct the analytic function.
$f(z) = u(x, y) + iv(x, y) = \ln(x^2 + y^2) + i(2 \arctan(y/x))$
We know that $z = r e^{i\theta}$, where $r = \sqrt{x^2 + y^2}$ and $\theta = \arctan(y/x)$.
So, $\ln(x^2 + y^2) = \ln(r^2) = 2 \ln r$.
And $2 \arctan(y/x) = 2 \theta$.
Thus, $f(z) = 2 \ln r + i (2 \theta) = 2 (\ln r + i \theta) = 2 \ln(r e^{i\theta}) = 2 \ln z$.

---

### 6. Practice Questions

1.  **Given $u(x, y) = 3x^2y - y^3$.**
    a.  Show that $u(x, y)$ is harmonic. (LO5)
    b.  Find the harmonic conjugate $v(x, y)$. (LO3)
    c.  Construct the analytic function $f(z) = u(x, y) + iv(x, y)$. (LO4)

2.  **Given $u(x, y) = x^3 - 3xy^2$.**
    a.  Show that $u(x, y)$ is harmonic. (LO5)
    b.  Find the harmonic conjugate $v(x, y)$. (LO3)
    c.  Construct the analytic function $f(z) = u(x, y) + iv(x, y)$. (LO4)

3.  **Given $u(x, y) = \sin x \cosh y$.**
    a.  Show that $u(x, y)$ is harmonic. (LO5)
    b.  Find the harmonic conjugate $v(x, y)$. (LO3)
    c.  Construct the analytic function $f(z) = u(x, y) + iv(x, y)$. (LO4)

4.  **Given $v(x, y) = \tan^{-1}(y/x)$, find its harmonic conjugate $u(x, y)$.**
    *(Hint: This is finding the real part when given the imaginary part, but the process is similar. You'll need to use the Cauchy-Riemann equations in the form $\frac{\partial v}{\partial x} = -\frac{\partial u}{\partial y}$ and $\frac{\partial v}{\partial y} = \frac{\partial u}{\partial x}$)* (LO2, LO3)

---

### 7. Answers to Practice Questions

1.  **Given $u(x, y) = 3x^2y - y^3$.**
    a.  $\frac{\partial u}{\partial x} = 6xy$, $\frac{\partial^2 u}{\partial x^2} = 6y$
        $\frac{\partial u}{\partial y} = 3x^2 - 3y^2$, $\frac{\partial^2 u}{\partial y^2} = -6y$
        $\frac{\partial^2 u}{\partial x^2} + \frac{\partial^2 u}{\partial y^2} = 6y + (-6y) = 0$. $u$ is harmonic.
    b.  $v(x, y) = -x^3 + 3xy^2$
    c.  $f(z) = (3x^2y - y^3) + i(-x^3 + 3xy^2) = -i(x^3 - 3x^2y - 3xy^2 + y^3) \ldots$
        *Correction:* Let's re-evaluate $f(z)$.
        $f(z) = u + iv = (3x^2y - y^3) + i(-x^3 + 3xy^2)$.
        Consider $z^3 = (x+iy)^3 = x^3 + 3x^2(iy) + 3x(iy)^2 + (iy)^3 = x^3 + 3ix^2y - 3xy^2 - iy^3 = (x^3 - 3xy^2) + i(3x^2y - y^3)$.
        So, $u = x^3 - 3xy^2$ and $v = 3x^2y - y^3$ would be the conjugate of $z^3$.
        For $u = 3x^2y - y^3$, we expect $v$ to be related to $-i z^3$.
        Let's redo the conjugate calculation:
        $\frac{\partial u}{\partial x} = 6xy = \frac{\partial v}{\partial y}$
        $\frac{\partial u}{\partial y} = 3x^2 - 3y^2 = -\frac{\partial v}{\partial x} \implies \frac{\partial v}{\partial x} = 3y^2 - 3x^2$
        From $\frac{\partial v}{\partial y} = 6xy$, integrating wrt $y$: $v(x, y) = 3xy^2 + \phi(x)$.
        Differentiating wrt $x$: $\frac{\partial v}{\partial x} = 3y^2 + \phi'(x)$.
        Equating to $\frac{\partial v}{\partial x} = 3y^2 - 3x^2$:
        $3y^2 + \phi'(x) = 3y^2 - 3x^2 \implies \phi'(x) = -3x^2$.
        Integrating $\phi'(x)$: $\phi(x) = -x^3 + C$.
        So, $v(x, y) = 3xy^2 - x^3$.
        $f(z) = (3x^2y - y^3) + i(3xy^2 - x^3)$.
        This corresponds to $f(z) = i z^3$.
        $i z^3 = i(x^3 - 3xy^2 + i(3x^2y - y^3)) = ix^3 + 3ix^2y + i^2(3xy^2) + i^2(-y^3) = ix^3 - 3xy^2 - 3xy^2 + y^3 = y^3 - 3xy^2 + i(x^3 + 3x^2y)$. This is not correct.

        Let's re-check the question and my work.
        $u(x, y) = 3x^2y - y^3$.
        $\frac{\partial u}{\partial x} = 6xy$.
        $\frac{\partial u}{\partial y} = 3x^2 - 3y^2$.
        Cauchy-Riemann:
        $\frac{\partial v}{\partial y} = 6xy \implies v(x, y) = 3xy^2 + \phi(x)$.
        $\frac{\partial v}{\partial x} = 3y^2 - 3x^2$.
        From $v(x, y) = 3xy^2 + \phi(x)$, we get $\frac{\partial v}{\partial x} = 3y^2 + \phi'(x)$.
        So $3y^2 + \phi'(x) = 3y^2 - 3x^2 \implies \phi'(x) = -3x^2$.
        $\phi(x) = -x^3$.
        Therefore, $v(x, y) = 3xy^2 - x^3$.

        The analytic function is $f(z) = u + iv = (3x^2y - y^3) + i(3xy^2 - x^3)$.
        Let's test $z^3 = (x+iy)^3 = (x^3 - 3xy^2) + i(3x^2y - y^3)$.
        So $u_{z^3} = x^3 - 3xy^2$ and $v_{z^3} = 3x^2y - y^3$.
        The question gave $u = 3x^2y - y^3$. This is the imaginary part of $z^3$.
        If $u = \text{Im}(z^3)$, then $v = -\text{Re}(z^3) = -(x^3 - 3xy^2) = -x^3 + 3xy^2$.

        Let's re-calculate from scratch for $u(x, y) = 3x^2y - y^3$:
        $\frac{\partial u}{\partial x} = 6xy$.
        $\frac{\partial u}{\partial y} = 3x^2 - 3y^2$.
        $\frac{\partial v}{\partial y} = 6xy \implies v(x, y) = 3xy^2 + \phi(x)$.
        $\frac{\partial v}{\partial x} = 3y^2 + \phi'(x)$.
        We also need $\frac{\partial u}{\partial y} = -\frac{\partial v}{\partial x}$.
        $3x^2 - 3y^2 = -(3y^2 + \phi'(x))$
        $3x^2 - 3y^2 = -3y^2 - \phi'(x)$
        $3x^2 = -\phi'(x) \implies \phi'(x) = -3x^2$.
        $\phi(x) = -x^3 + C$.
        So, $v(x, y) = 3xy^2 - x^3$. This is what I got initially.

        Let's try to construct $f(z)$ from $u=3x^2y-y^3$ and $v=3xy^2-x^3$.
        $f(z) = (3x^2y - y^3) + i(3xy^2 - x^3)$.
        Consider $iz^3 = i(x^3 - 3xy^2 + i(3x^2y - y^3)) = ix^3 + 3ix^2y - 3xy^2 + y^3$. This is not matching.

        Let's use the $f'(z)$ method.
        $u = 3x^2y - y^3$.
        $\frac{\partial u}{\partial x} = 6xy$.
        $\frac{\partial u}{\partial y} = 3x^2 - 3y^2$.
        $f'(z) = \frac{\partial u}{\partial x} + i \frac{\partial v}{\partial x}$.
        Also $\frac{\partial v}{\partial x} = -\frac{\partial u}{\partial y} = -(3x^2 - 3y^2) = 3y^2 - 3x^2$.
        $f'(z) = 6xy + i(3y^2 - 3x^2)$.
        We need to express this in terms of $z$.
        Recall $x = (z+\bar{z})/2$ and $y = (z-\bar{z})/(2i)$.
        This can get complicated.

        Let's try to match $f(z)$ form.
        $z^3 = (x^3 - 3xy^2) + i(3x^2y - y^3)$.
        Here, $u_{z^3} = x^3 - 3xy^2$ and $v_{z^3} = 3x^2y - y^3$.
        The given $u$ is $v_{z^3}$.
        If $u(x, y) = \text{Im}(z^3)$, then its harmonic conjugate $v(x, y)$ should be $-\text{Re}(z^3)$.
        So, $v(x, y) = -(x^3 - 3xy^2) = 3xy^2 - x^3$. This matches my calculation.

        c.  $f(z) = u + iv = (3x^2y - y^3) + i(3xy^2 - x^3)$.
            This is $i z^3$.
            $i z^3 = i (x^3 - 3xy^2 + i(3x^2y - y^3)) = ix^3 - 3ixy^2 - 3xy^2 + y^3 = (y^3 - 3xy^2) + i(x^3 - 3xy^2)$. Still not matching.

            Let's reconsider the Cauchy-Riemann setup.
            $u = 3x^2y - y^3$.
            $v = 3xy^2 - x^3$.
            $f(z) = (3x^2y - y^3) + i(3xy^2 - x^3)$.
            Let's check for $z^3$: $z^3 = (x^3 - 3xy^2) + i(3x^2y - y^3)$.
            Let's check for $iz^3$: $iz^3 = i(x^3 - 3xy^2) - (3x^2y - y^3) = (y^3 - 3x^2y) + i(x^3 - 3xy^2)$. Not matching.
            Let's check for $-iz^3$: $-iz^3 = -(y^3 - 3x^2y) - i(x^3 - 3xy^2) = (3x^2y - y^3) + i(3xy^2 - x^3)$. This matches!
            So, $f(z) = -iz^3$.

    b.  $v(x, y) = 3xy^2 - x^3$
    c.  $f(z) = -iz^3$

2.  **Given $u(x, y) = x^3 - 3xy^2$.**
    a.  $\frac{\partial u}{\partial x} = 3x^2 - 3y^2$, $\frac{\partial^2 u}{\partial x^2} = 6x$
        $\frac{\partial u}{\partial y} = -6xy$, $\frac{\partial^2 u}{\partial y^2} = -6x$
        $\frac{\partial^2 u}{\partial x^2} + \frac{\partial^2 u}{\partial y^2} = 6x + (-6x) = 0$. $u$ is harmonic.
    b.  $v(x, y) = 3x^2y - y^3$
    c.  $f(z) = (x^3 - 3xy^2) + i(3x^2y - y^3) = z^3$.

3.  **Given $u(x, y) = \sin x \cosh y$.**
    a.  $\frac{\partial u}{\partial x} = \cos x \cosh y$, $\frac{\partial^2 u}{\partial x^2} = -\sin x \cosh y$
        $\frac{\partial u}{\partial y} = \sin x \sinh y$, $\frac{\partial^2 u}{\partial y^2} = \sin x \cosh y$
        $\frac{\partial^2 u}{\partial x^2} + \frac{\partial^2 u}{\partial y^2} = -\sin x \cosh y + \sin x \cosh y = 0$. $u$ is harmonic.
    b.  $v(x, y) = \cos x \sinh y$
    c.  $f(z) = \sin x \cosh y + i \cos x \sinh y$.
        Recall $\sin(x+iy) = \sin x \cosh y + i \cos x \sinh y$.
        So, $f(z) = \sin(z)$.

4.  **Given $v(x, y) = \tan^{-1}(y/x)$, find its harmonic conjugate $u(x, y)$.**
    We are given $v$, so we use the Cauchy-Riemann equations to find $u$.
    $\frac{\partial v}{\partial x} = \frac{1}{1+(y/x)^2} \cdot (-\frac{y}{x^2}) = \frac{x^2}{x^2+y^2} \cdot (-\frac{y}{x^2}) = -\frac{y}{x^2+y^2}$.
    $\frac{\partial v}{\partial y} = \frac{1}{1+(y/x)^2} \cdot (\frac{1}{x}) = \frac{x^2}{x^2+y^2} \cdot \frac{1}{x} = \frac{x}{x^2+y^2}$.

    Using Cauchy-Riemann:
    $\frac{\partial v}{\partial y} = \frac{\partial u}{\partial x} \implies \frac{x}{x^2+y^2} = \frac{\partial u}{\partial x}$.
    Integrate with respect to $x$: $u(x, y) = \int \frac{x}{x^2+y^2} \, dx = \frac{1}{2} \int \frac{2x}{x^2+y^2} \, dx = \frac{1}{2} \ln(x^2+y^2) + \phi(y)$.

    $\frac{\partial v}{\partial x} = -\frac{\partial u}{\partial y} \implies -\frac{y}{x^2+y^2} = -\frac{\partial u}{\partial y} \implies \frac{y}{x^2+y^2} = \frac{\partial u}{\partial y}$.
    Differentiate $u(x, y) = \frac{1}{2} \ln(x^2+y^2) + \phi(y)$ with respect to $y$:
    $\frac{\partial u}{\partial y} = \frac{1}{2} \frac{2y}{x^2+y^2} + \phi'(y) = \frac{y}{x^2+y^2} + \phi'(y)$.

    Equating the two expressions for $\frac{\partial u}{\partial y}$:
    $\frac{y}{x^2+y^2} = \frac{y}{x^2+y^2} + \phi'(y)$.
    This implies $\phi'(y) = 0$, so $\phi(y) = C$.

    Therefore, the harmonic conjugate is $u(x, y) = \frac{1}{2} \ln(x^2+y^2)$.
    The analytic function is $f(z) = u + iv = \frac{1}{2} \ln(x^2+y^2) + i \tan^{-1}(y/x) = \ln(\sqrt{x^2+y^2}) + i \tan^{-1}(y/x) = \ln(r) + i\theta = \ln(re^{i\theta}) = \ln(z)$.

---

### 8. Important Points to Remember

*   A real-valued function $u(x, y)$ is harmonic if it satisfies Laplace's equation: $\frac{\partial^2 u}{\partial x^2} + \frac{\partial^2 u}{\partial y^2} = 0$.
*   The harmonic conjugate $v(x, y)$ of a harmonic function $u(x, y)$ is a function such that $f(z) = u(x, y) + iv(x, y)$ is an analytic function.
*   The Cauchy-Riemann equations are essential for finding harmonic conjugates:
    *   $\frac{\partial u}{\partial x} = \frac{\partial v}{\partial y}$
    *   $\frac{\partial u}{\partial y} = -\frac{\partial v}{\partial x}$
*   When finding $v$ by integrating $\frac{\partial u}{\partial x}$ with respect to $y$, remember to add an arbitrary function of $x$ (e.g., $\phi(x)$). Similarly, when integrating $\frac{\partial u}{\partial y}$ with respect to $x$, add an arbitrary function of $y$ (e.g., $\psi(y)$). Consistency between these forms will determine the full expression for $v$.
*   The constant of integration $C$ for the harmonic conjugate can usually be omitted as it only shifts the analytic function by a constant.
*   If you are given the imaginary part $v(x, y)$ and asked to find its harmonic conjugate $u(x, y)$, you use the same Cauchy-Riemann equations, but assign them differently:
    *   $\frac{\partial v}{\partial x} = -\frac{\partial u}{\partial y}$
    *   $\frac{\partial v}{\partial y} = \frac{\partial u}{\partial x}$

---
This concludes the study notes for finding harmonic conjugates. Remember to practice these steps to become proficient in this important topic.
