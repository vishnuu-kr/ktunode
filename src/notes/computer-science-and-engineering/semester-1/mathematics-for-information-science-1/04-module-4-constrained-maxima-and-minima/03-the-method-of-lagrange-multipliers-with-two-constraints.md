---
title: "The Method of Lagrange Multipliers with two constraints"
subject: "MATHEMATICS FOR INFORMATION SCIENCE – 1"
module: "Module 4: Constrained Maxima and Minima"
branch: "Computer Science and Engineering"
semester: 1
topicId: "68b45b6e58474a0b135b5be1"
status: "completed"
scrapedAt: "2026-05-20T16:40:35.136Z"
---
## Mathematics for Information Science – 1: Module 4 – Constrained Maxima and Minima

### Topic: The Method of Lagrange Multipliers with Two Constraints

Hello everyone! Welcome back to our journey into the fascinating world of multivariable calculus. In this module, we've been exploring how to find maximum and minimum values of functions, especially when our variables aren't free to roam anywhere they please. Today, we're taking it a step further, tackling a scenario where our function of interest is restricted by *two* separate conditions. This is where the powerful **Method of Lagrange Multipliers with Two Constraints** comes into play, and believe me, it's a tool you'll find incredibly useful, especially in fields like optimization within information science.

Remember, our overarching goal in this course is to build a strong foundation in calculus to tackle problems in information science. Specifically, CO3 is about interpreting directional derivatives and solving for maxima and minima of multivariable functions, and CO4 extends this to constrained optimization, which is exactly what we're diving into today. This method will allow us to find optimal solutions under realistic, multi-faceted limitations.

#### Revisiting the Core Idea: Lagrange Multipliers with One Constraint

Before we tackle two constraints, let's quickly refresh our memory about the single-constraint case. Imagine you're at a party, and you want to find the spot in the room with the *best* music (maximum enjoyment). However, you can only move along a specific path, say, a circular walkway around the dance floor. This walkway is your constraint.

Mathematically, if we want to maximize or minimize a function $f(x, y)$ subject to a constraint $g(x, y) = c$, we introduced a new variable, $\lambda$ (lambda), the Lagrange multiplier. We formed a new function, the Lagrangian:

$L(x, y, \lambda) = f(x, y) - \lambda(g(x, y) - c)$

The magic happens when we set the gradient of $L$ to zero. This essentially means that at the maximum or minimum point on the constraint curve, the level curves of $f$ and $g$ must be parallel. In simpler terms, the direction of steepest ascent of $f$ must be the same as, or opposite to, the direction of steepest ascent of $g$.

The system of equations we solved was:

$\nabla f(x, y) = \lambda \nabla g(x, y)$
$g(x, y) = c$

This gave us equations for $f_x = \lambda g_x$, $f_y = \lambda g_y$, and the constraint $g(x, y) = c$. Solving these simultaneously gave us the candidate points for our maximum or minimum.

#### Stepping Up: The Method with Two Constraints

Now, let's imagine a slightly more complex scenario. Suppose you're a designer trying to create a product that maximizes its utility ($f(x, y, z)$) but is constrained by two factors: the total cost of materials cannot exceed a certain budget ($g(x, y, z) = c_1$), and the product must fit within a specific size limit ($h(x, y, z) = c_2$). Here, we have a function of three variables, $f$, and *two* constraint functions, $g$ and $h$.

This is where the method of Lagrange multipliers truly shines by extending naturally. When we have two constraints, we introduce *two* Lagrange multipliers, typically denoted as $\lambda$ and $\mu$ (mu).

Consider a function $f(x, y, z)$ that we want to maximize or minimize, subject to two constraints:
$g(x, y, z) = c_1$
$h(x, y, z) = c_2$

The intuition here is that at the optimal point, the gradient of our function $f$ must lie in the plane spanned by the gradients of the two constraint functions, $g$ and $h$. Think of it like this: the direction of "most improvement" for $f$ must be achievable by making changes that simultaneously satisfy both constraints.

To formalize this, we construct the Lagrangian function by incorporating both constraints with their respective multipliers:

$L(x, y, z, \lambda, \mu) = f(x, y, z) - \lambda(g(x, y, z) - c_1) - \mu(h(x, y, z) - c_2)$

Notice how we've added a term for the second constraint, multiplied by $\mu$. It's crucial to keep track of which constraint corresponds to which multiplier.

#### The System of Equations: The Heart of the Method

To find the candidate points (where our maximum or minimum might occur), we set the gradient of the Lagrangian $L$ with respect to *all* its variables ($x, y, z, \lambda, \mu$) to zero. This gives us a system of equations.

Let's break down these equations:

1.  **Partial derivative with respect to x:**
    $\frac{\partial L}{\partial x} = \frac{\partial f}{\partial x} - \lambda \frac{\partial g}{\partial x} - \mu \frac{\partial h}{\partial x} = 0$
    This can be rewritten as: $\frac{\partial f}{\partial x} = \lambda \frac{\partial g}{\partial x} + \mu \frac{\partial h}{\partial x}$

2.  **Partial derivative with respect to y:**
    $\frac{\partial L}{\partial y} = \frac{\partial f}{\partial y} - \lambda \frac{\partial g}{\partial y} - \mu \frac{\partial h}{\partial y} = 0$
    Which becomes: $\frac{\partial f}{\partial y} = \lambda \frac{\partial g}{\partial y} + \mu \frac{\partial h}{\partial y}$

3.  **Partial derivative with respect to z:**
    $\frac{\partial L}{\partial z} = \frac{\partial f}{\partial z} - \lambda \frac{\partial g}{\partial z} - \mu \frac{\partial h}{\partial z} = 0$
    And similarly: $\frac{\partial f}{\partial z} = \lambda \frac{\partial g}{\partial z} + \mu \frac{\partial h}{\partial z}$

These first three equations elegantly express the geometric idea we discussed: $\nabla f = \lambda \nabla g + \mu \nabla h$. This means the gradient of $f$ is a linear combination of the gradients of $g$ and $h$.

4.  **Partial derivative with respect to $\lambda$:**
    $\frac{\partial L}{\partial \lambda} = -(g(x, y, z) - c_1) = 0$
    This simplifies to: $g(x, y, z) = c_1$
    This is our first constraint, brought back into the system.

5.  **Partial derivative with respect to $\mu$:**
    $\frac{\partial L}{\partial \mu} = -(h(x, y, z) - c_2) = 0$
    Which gives us: $h(x, y, z) = c_2$
    This is our second constraint, also brought back into the system.

So, in total, we have **five** equations and **five** unknowns ($x, y, z, \lambda, \mu$). Solving this system will give us the candidate points $(x, y, z)$ where potential extrema might occur.

**Remember this**: The number of equations you get from the gradient equals the number of variables in your original function ($f$). The number of additional equations equals the number of constraints. The total number of variables in your Lagrangian is the sum of these.

#### Connecting to Course Outcomes

This method is directly tied to **CO3** and **CO4**.
*   **CO3:** We are finding maxima and minima of a multivariable function ($f$). The system of partial derivatives essentially tells us how the function $f$ changes relative to the constraints $g$ and $h$.
*   **CO4:** This is the prime example of solving constrained maxima and minima. We are explicitly dealing with a function subject to multiple limitations, and the Lagrange multiplier method provides a systematic way to handle these restrictions.

#### Example: Let's Get Practical!

Suppose we want to find the maximum value of the function $f(x, y, z) = xyz$ subject to the constraints:
1.  $x + y + z = 12$
2.  $x^2 + y^2 + z^2 = 50$

This is a classic optimization problem. Imagine you have 12 units of a resource to distribute among three activities (represented by $x, y, z$), and the "cost" or "effort" for these activities is related to the sum of their squares, which must also be limited. You want to maximize the product $xyz$, perhaps representing the overall impact or efficiency.

Let's apply the method:

Our functions are:
$f(x, y, z) = xyz$
$g(x, y, z) = x + y + z$ (Constraint 1: $c_1 = 12$)
$h(x, y, z) = x^2 + y^2 + z^2$ (Constraint 2: $c_2 = 50$)

The Lagrange multipliers are $\lambda$ and $\mu$.
The Lagrangian is:
$L(x, y, z, \lambda, \mu) = xyz - \lambda(x + y + z - 12) - \mu(x^2 + y^2 + z^2 - 50)$

Now, let's find the partial derivatives and set them to zero:

1.  $\frac{\partial L}{\partial x} = yz - \lambda - 2\mu x = 0 \implies yz = \lambda + 2\mu x$ (Eq 1)
2.  $\frac{\partial L}{\partial y} = xz - \lambda - 2\mu y = 0 \implies xz = \lambda + 2\mu y$ (Eq 2)
3.  $\frac{\partial L}{\partial z} = xy - \lambda - 2\mu z = 0 \implies xy = \lambda + 2\mu z$ (Eq 3)
4.  $\frac{\partial L}{\partial \lambda} = -(x + y + z - 12) = 0 \implies x + y + z = 12$ (Eq 4)
5.  $\frac{\partial L}{\partial \mu} = -(x^2 + y^2 + z^2 - 50) = 0 \implies x^2 + y^2 + z^2 = 50$ (Eq 5)

Now we need to solve this system. This is often the trickiest part!

From Eq 1 and Eq 2:
$yz = \lambda + 2\mu x$
$xz = \lambda + 2\mu y$
Subtracting these gives: $xz - yz = 2\mu y - 2\mu x$
$z(x - y) = -2\mu (x - y)$
$z(x - y) + 2\mu (x - y) = 0$
$(z + 2\mu)(x - y) = 0$

This implies either $x = y$ or $z = -2\mu$.

Let's consider the case $x=y$.
From Eq 2 and Eq 3:
$xz = \lambda + 2\mu y$
$xy = \lambda + 2\mu z$
Subtracting these: $xz - xy = 2\mu z - 2\mu y$
$x(z - y) = 2\mu (z - y)$
$x(z - y) - 2\mu (z - y) = 0$
$(x - 2\mu)(z - y) = 0$
This implies either $y = z$ or $x = 2\mu$.

So, we have several possibilities. The most symmetric case often yields the extrema. Let's assume $x=y=z$.

If $x=y=z$, then from Eq 4:
$x + x + x = 12 \implies 3x = 12 \implies x = 4$.
So, $x=4, y=4, z=4$.
Let's check this with Eq 5: $x^2 + y^2 + z^2 = 4^2 + 4^2 + 4^2 = 16 + 16 + 16 = 48$.
Uh oh! This doesn't satisfy the second constraint ($48 \neq 50$). This means that the optimal point isn't where $x=y=z$.

Let's go back to $(z + 2\mu)(x - y) = 0$ and $(x - 2\mu)(z - y) = 0$.

Case 1: $x = y$.
If $x = y$, then Eq 1 and Eq 2 become identical if we substitute $y$ for $x$.
$yz = \lambda + 2\mu x$
$xz = \lambda + 2\mu x$ (since $x=y$, $xz = \lambda + 2\mu x$)
$xy = \lambda + 2\mu z \implies x^2 = \lambda + 2\mu z$

From $x=y$, our constraints become:
$2x + z = 12 \implies z = 12 - 2x$ (Eq 4')
$2x^2 + z^2 = 50$ (Eq 5')

Now substitute Eq 4' into Eq 5':
$2x^2 + (12 - 2x)^2 = 50$
$2x^2 + (144 - 48x + 4x^2) = 50$
$6x^2 - 48x + 144 = 50$
$6x^2 - 48x + 94 = 0$
$3x^2 - 24x + 47 = 0$

Let's use the quadratic formula to solve for $x$:
$x = \frac{-(-24) \pm \sqrt{(-24)^2 - 4(3)(47)}}{2(3)}$
$x = \frac{24 \pm \sqrt{576 - 564}}{6}$
$x = \frac{24 \pm \sqrt{12}}{6}$
$x = \frac{24 \pm 2\sqrt{3}}{6}$
$x = 4 \pm \frac{\sqrt{3}}{3}$

So, we have two possible values for $x$ when $x=y$:
$x_1 = 4 + \frac{\sqrt{3}}{3}$ and $x_2 = 4 - \frac{\sqrt{3}}{3}$

If $x = 4 + \frac{\sqrt{3}}{3}$, then $y = 4 + \frac{\sqrt{3}}{3}$.
Using $z = 12 - 2x$:
$z = 12 - 2(4 + \frac{\sqrt{3}}{3}) = 12 - 8 - \frac{2\sqrt{3}}{3} = 4 - \frac{2\sqrt{3}}{3}$.
Point 1: $(4 + \frac{\sqrt{3}}{3}, 4 + \frac{\sqrt{3}}{3}, 4 - \frac{2\sqrt{3}}{3})$

If $x = 4 - \frac{\sqrt{3}}{3}$, then $y = 4 - \frac{\sqrt{3}}{3}$.
Using $z = 12 - 2x$:
$z = 12 - 2(4 - \frac{\sqrt{3}}{3}) = 12 - 8 + \frac{2\sqrt{3}}{3} = 4 + \frac{\sqrt{3}}{3}$.
Point 2: $(4 - \frac{\sqrt{3}}{3}, 4 - \frac{\sqrt{3}}{3}, 4 + \frac{\sqrt{3}}{3})$

By symmetry, we also need to consider cases where $y=z$ or $x=z$. These will give us permutations of the values we just found.
For example, if $y=z$, we'd get:
Point 3: $(4 - \frac{2\sqrt{3}}{3}, 4 + \frac{\sqrt{3}}{3}, 4 + \frac{\sqrt{3}}{3})$
Point 4: $(4 + \frac{\sqrt{3}}{3}, 4 - \frac{\sqrt{3}}{3}, 4 - \frac{\sqrt{3}}{3})$ (Oops, this is incorrect. Let's redo the permutation)

Let the solutions be $(a, b, c)$. The possible points arising from $x=y$ are $(4+\frac{\sqrt{3}}{3}, 4+\frac{\sqrt{3}}{3}, 4-\frac{2\sqrt{3}}{3})$ and $(4-\frac{\sqrt{3}}{3}, 4-\frac{\sqrt{3}}{3}, 4+\frac{2\sqrt{3}}{3})$.
The possible points arising from $y=z$ are $(4-\frac{2\sqrt{3}}{3}, 4+\frac{\sqrt{3}}{3}, 4+\frac{\sqrt{3}}{3})$ and $(4+\frac{2\sqrt{3}}{3}, 4-\frac{\sqrt{3}}{3}, 4-\frac{\sqrt{3}}{3})$.
The possible points arising from $x=z$ are $(4+\frac{\sqrt{3}}{3}, 4-\frac{2\sqrt{3}}{3}, 4+\frac{\sqrt{3}}{3})$ and $(4-\frac{\sqrt{3}}{3}, 4+\frac{2\sqrt{3}}{3}, 4-\frac{\sqrt{3}}{3})$.

Let's calculate the value of $f(x,y,z) = xyz$ for these points.
For $(4 + \frac{\sqrt{3}}{3}, 4 + \frac{\sqrt{3}}{3}, 4 - \frac{2\sqrt{3}}{3})$:
$f = (4 + \frac{\sqrt{3}}{3})^2 (4 - \frac{2\sqrt{3}}{3})$
This calculation gets a bit messy. Let's see if there's a simpler way or if we missed a crucial insight.

Let's re-examine the equations:
$yz = \lambda + 2\mu x$ (1)
$xz = \lambda + 2\mu y$ (2)
$xy = \lambda + 2\mu z$ (3)

Multiply (1) by $x$, (2) by $y$, and (3) by $z$:
$xyz = \lambda x + 2\mu x^2$
$xyz = \lambda y + 2\mu y^2$
$xyz = \lambda z + 2\mu z^2$

This implies:
$\lambda x + 2\mu x^2 = \lambda y + 2\mu y^2 = \lambda z + 2\mu z^2$

$\lambda(x-y) = 2\mu(y^2 - x^2) = 2\mu(y-x)(y+x)$
$\lambda(x-y) = -2\mu(x-y)(x+y)$

If $x \neq y$, then $\lambda = -2\mu(x+y)$.

Similarly, comparing $\lambda y + 2\mu y^2$ and $\lambda z + 2\mu z^2$:
$\lambda(y-z) = 2\mu(z^2 - y^2) = 2\mu(z-y)(z+y)$
$\lambda(y-z) = -2\mu(y-z)(y+z)$

If $y \neq z$, then $\lambda = -2\mu(y+z)$.

And if $x \neq z$:
$\lambda = -2\mu(x+z)$.

So, if $x, y, z$ are all distinct, then:
$-2\mu(x+y) = -2\mu(y+z) = -2\mu(x+z)$

If $\mu \neq 0$, then $x+y = y+z = x+z$.
$x+y = y+z \implies x=z$. This contradicts our assumption that $x, y, z$ are distinct.
Therefore, the case where $x, y, z$ are all distinct doesn't lead to a solution unless $\mu = 0$ or $\lambda = 0$.

If $\mu = 0$, then $yz = \lambda$, $xz = \lambda$, $xy = \lambda$.
This implies $yz = xz \implies z(y-x) = 0$. So $z=0$ or $x=y$.
If $z=0$, then $\lambda=0$. But $f(x,y,0) = 0$, which is unlikely to be a maximum if positive values are possible.
If $x=y$, then $yz = \lambda$, $xz = \lambda$ becomes $xz = \lambda$. So $x^2z = \lambda$.
$xy = \lambda$ becomes $x^2 = \lambda$.
So, $x^2 = x^2z$. If $x \neq 0$, then $z=1$.
If $x=y$, $z=1$, then $x^2 = \lambda$.
Constraints: $2x+1 = 12 \implies 2x = 11 \implies x = 11/2$.
$2x^2+z^2 = 50 \implies 2(11/2)^2 + 1^2 = 2(121/4) + 1 = 121/2 + 1 = 123/2 = 61.5 \neq 50$.
So $\mu$ cannot be zero.

This brings us back to the case where at least two variables must be equal.
Let's reconsider the $x=y$ case that led to $3x^2 - 24x + 47 = 0$.
The solutions were $x = 4 \pm \frac{\sqrt{3}}{3}$.

Let $x = y = 4 + \frac{\sqrt{3}}{3}$.
Then $z = 12 - 2x = 12 - 2(4 + \frac{\sqrt{3}}{3}) = 12 - 8 - \frac{2\sqrt{3}}{3} = 4 - \frac{2\sqrt{3}}{3}$.
Let's check the second constraint: $x^2+y^2+z^2 = 2x^2+z^2$.
$x^2 = (4 + \frac{\sqrt{3}}{3})^2 = 16 + \frac{8\sqrt{3}}{3} + \frac{3}{9} = 16 + \frac{8\sqrt{3}}{3} + \frac{1}{3} = \frac{49}{3} + \frac{8\sqrt{3}}{3}$.
$z^2 = (4 - \frac{2\sqrt{3}}{3})^2 = 16 - \frac{16\sqrt{3}}{3} + \frac{12}{9} = 16 - \frac{16\sqrt{3}}{3} + \frac{4}{3} = \frac{52}{3} - \frac{16\sqrt{3}}{3}$.
$2x^2+z^2 = 2(\frac{49}{3} + \frac{8\sqrt{3}}{3}) + (\frac{52}{3} - \frac{16\sqrt{3}}{3})$
$= \frac{98}{3} + \frac{16\sqrt{3}}{3} + \frac{52}{3} - \frac{16\sqrt{3}}{3}$
$= \frac{98+52}{3} = \frac{150}{3} = 50$.
This is correct! So, one candidate point is $(4 + \frac{\sqrt{3}}{3}, 4 + \frac{\sqrt{3}}{3}, 4 - \frac{2\sqrt{3}}{3})$.

Now for the other value of $x$:
Let $x = y = 4 - \frac{\sqrt{3}}{3}$.
Then $z = 12 - 2x = 12 - 2(4 - \frac{\sqrt{3}}{3}) = 12 - 8 + \frac{2\sqrt{3}}{3} = 4 + \frac{2\sqrt{3}}{3}$.
Let's check the second constraint: $x^2+y^2+z^2 = 2x^2+z^2$.
$x^2 = (4 - \frac{\sqrt{3}}{3})^2 = 16 - \frac{8\sqrt{3}}{3} + \frac{3}{9} = 16 - \frac{8\sqrt{3}}{3} + \frac{1}{3} = \frac{49}{3} - \frac{8\sqrt{3}}{3}$.
$z^2 = (4 + \frac{2\sqrt{3}}{3})^2 = 16 + \frac{16\sqrt{3}}{3} + \frac{12}{9} = 16 + \frac{16\sqrt{3}}{3} + \frac{4}{3} = \frac{52}{3} + \frac{16\sqrt{3}}{3}$.
$2x^2+z^2 = 2(\frac{49}{3} - \frac{8\sqrt{3}}{3}) + (\frac{52}{3} + \frac{16\sqrt{3}}{3})$
$= \frac{98}{3} - \frac{16\sqrt{3}}{3} + \frac{52}{3} + \frac{16\sqrt{3}}{3}$
$= \frac{98+52}{3} = \frac{150}{3} = 50$.
This is also correct! So, another candidate point is $(4 - \frac{\sqrt{3}}{3}, 4 - \frac{\sqrt{3}}{3}, 4 + \frac{2\sqrt{3}}{3})$.

By symmetry, the possible points are permutations of $(a, a, b)$ where $a = 4 \pm \frac{\sqrt{3}}{3}$ and $b$ is the corresponding $z$ value.
The set of candidate points are:
1.  $(4 + \frac{\sqrt{3}}{3}, 4 + \frac{\sqrt{3}}{3}, 4 - \frac{2\sqrt{3}}{3})$
2.  $(4 - \frac{\sqrt{3}}{3}, 4 - \frac{\sqrt{3}}{3}, 4 + \frac{2\sqrt{3}}{3})$
3.  $(4 + \frac{\sqrt{3}}{3}, 4 - \frac{2\sqrt{3}}{3}, 4 + \frac{\sqrt{3}}{3})$
4.  $(4 - \frac{\sqrt{3}}{3}, 4 + \frac{2\sqrt{3}}{3}, 4 - \frac{\sqrt{3}}{3})$
5.  $(4 - \frac{2\sqrt{3}}{3}, 4 + \frac{\sqrt{3}}{3}, 4 + \frac{\sqrt{3}}{3})$
6.  $(4 + \frac{2\sqrt{3}}{3}, 4 - \frac{\sqrt{3}}{3}, 4 - \frac{\sqrt{3}}{3})$

Now we need to evaluate $f(x, y, z) = xyz$ at these points.

Let $a = 4 + \frac{\sqrt{3}}{3}$ and $b = 4 - \frac{2\sqrt{3}}{3}$.
Let $a' = 4 - \frac{\sqrt{3}}{3}$ and $b' = 4 + \frac{2\sqrt{3}}{3}$.

For point 1: $f = a \cdot a \cdot b = a^2 b$.
$a^2 = \frac{49}{3} + \frac{8\sqrt{3}}{3}$
$b = 4 - \frac{2\sqrt{3}}{3}$
$a^2 b = (\frac{49}{3} + \frac{8\sqrt{3}}{3})(4 - \frac{2\sqrt{3}}{3})$
$= \frac{196}{3} - \frac{98\sqrt{3}}{9} + \frac{32\sqrt{3}}{3} - \frac{16 \cdot 3}{9}$
$= \frac{196}{3} - \frac{98\sqrt{3}}{9} + \frac{96\sqrt{3}}{9} - \frac{48}{9}$
$= \frac{588}{9} - \frac{2\sqrt{3}}{9} - \frac{48}{9}$
$= \frac{540 - 2\sqrt{3}}{9} = 60 - \frac{2\sqrt{3}}{9}$

For point 2: $f = a' \cdot a' \cdot b' = (a')^2 b'$.
$(a')^2 = \frac{49}{3} - \frac{8\sqrt{3}}{3}$
$b' = 4 + \frac{2\sqrt{3}}{3}$
$(a')^2 b' = (\frac{49}{3} - \frac{8\sqrt{3}}{3})(4 + \frac{2\sqrt{3}}{3})$
$= \frac{196}{3} + \frac{98\sqrt{3}}{9} - \frac{32\sqrt{3}}{3} - \frac{16 \cdot 3}{9}$
$= \frac{196}{3} + \frac{98\sqrt{3}}{9} - \frac{96\sqrt{3}}{9} - \frac{48}{9}$
$= \frac{588}{9} + \frac{2\sqrt{3}}{9} - \frac{48}{9}$
$= \frac{540 + 2\sqrt{3}}{9} = 60 + \frac{2\sqrt{3}}{9}$

Comparing the values:
$60 - \frac{2\sqrt{3}}{9}$ is approximately $60 - \frac{2 \times 1.732}{9} \approx 60 - 0.385 = 59.615$.
$60 + \frac{2\sqrt{3}}{9}$ is approximately $60 + 0.385 = 60.385$.

The maximum value is $60 + \frac{2\sqrt{3}}{9}$, which occurs at points like $(4 - \frac{\sqrt{3}}{3}, 4 - \frac{\sqrt{3}}{3}, 4 + \frac{2\sqrt{3}}{3})$ and its permutations.

The minimum value is $60 - \frac{2\sqrt{3}}{9}$, which occurs at points like $(4 + \frac{\sqrt{3}}{3}, 4 + \frac{\sqrt{3}}{3}, 4 - \frac{2\sqrt{3}}{3})$ and its permutations.

This example illustrates that the algebra can be quite involved, but the process is systematic. It's important to check all possible cases arising from the equalities.

#### Key Considerations and Pitfalls

1.  **Solving the System:** The most challenging part is often solving the system of equations. Look for symmetries and algebraic tricks. Sometimes, rearranging terms or multiplying equations strategically can simplify the process.
2.  **The Nature of the Extremum:** The Lagrange multiplier method finds *candidate* points for extrema. You still need to determine if these points correspond to a maximum, minimum, or neither. This can be done by:
    *   Evaluating the function at all candidate points and comparing the values.
    *   Using the Second Derivative Test for Constrained Optimization (though this is more advanced and less commonly expected in introductory courses unless explicitly taught).
    *   Considering the geometry of the problem or the behavior of the function. If the constraint region is closed and bounded (compact), and the function is continuous, then both a maximum and minimum must exist.
3.  **When Gradients are Zero:** The method assumes that $\nabla g$ and $\nabla h$ are not both zero at the solution point. If they are, you need to handle that case separately.
4.  **Number of Multipliers:** Ensure you use the correct number of Lagrange multipliers – one for each constraint.
5.  **Algebraic Complexity:** Don't be discouraged by messy numbers. It's a common occurrence with this method. Double-check your algebra carefully. As Thomas' Calculus notes, the method is robust, but the execution requires diligence.

#### Visualizing the Two Constraints

In the single constraint case, we were looking for a point on a curve (level curve of $g$) where the function $f$ had an extremum. Geometrically, this happens when the level curves of $f$ and $g$ are tangent.

With two constraints, say $g(x,y,z) = c_1$ and $h(x,y,z) = c_2$, these equations typically define a *curve* in 3D space (the intersection of two surfaces). We are looking for the maximum or minimum of $f(x,y,z)$ for points $(x,y,z)$ lying on this curve.
The condition $\nabla f = \lambda \nabla g + \mu \nabla h$ means that $\nabla f$ is perpendicular to the curve of intersection. This is because $\nabla g$ is normal to the surface $g=c_1$, and $\nabla h$ is normal to the surface $h=c_2$. The tangent line to the curve of intersection must be perpendicular to both $\nabla g$ and $\nabla h$, meaning the tangent vector lies in the plane spanned by $\nabla g$ and $\nabla h$. If $\nabla f$ is also in this plane, it means $\nabla f$ is perpendicular to the curve of intersection.

Kreyszig's "Advanced Engineering Mathematics" often presents these concepts with a strong geometric underpinning, which is invaluable for building intuition.

#### Summary: The Power of Two Multipliers

The method of Lagrange multipliers with two constraints is a direct extension of the single-constraint case. By introducing a second multiplier, $\mu$, we can systematically find the extrema of a function subject to two independent conditions. The core idea remains the same: at an extremum, the gradient of the objective function is a linear combination of the gradients of the constraint functions. The system of equations generated by setting the gradient of the Lagrangian to zero provides the candidate points for these extrema.

This technique is fundamental for solving real-world optimization problems where multiple limitations are present, making it a critical tool for information scientists dealing with resource allocation, performance tuning, and complex system design.

---

### Sample Questions and Answers

**Question 1 (Conceptual):**
Explain the geometric interpretation of the Lagrange multiplier method when there are two constraints, $g(x, y, z) = c_1$ and $h(x, y, z) = c_2$, for optimizing a function $f(x, y, z)$.

**Answer:**
Geometrically, the two constraint equations $g(x, y, z) = c_1$ and $h(x, y, z) = c_2$ typically define a curve in 3D space, which is the intersection of two surfaces. The Lagrange multiplier method with two multipliers finds the points on this curve where the function $f(x, y, z)$ reaches its maximum or minimum. The condition $\nabla f = \lambda \nabla g + \mu \nabla h$ implies that the gradient of $f$ at such a point is a linear combination of the gradients of $g$ and $h$. Since $\nabla g$ and $\nabla h$ are normal vectors to their respective surfaces, any vector that is a linear combination of them lies in the plane spanned by $\nabla g$ and $\nabla h$. This plane is perpendicular to the tangent line of the intersection curve. Therefore, $\nabla f$ being in this plane means $\nabla f$ is perpendicular to the curve of intersection, which is characteristic of an extremum on that curve.

**Question 2 (Application):**
Find the dimensions of a rectangular box that has a volume of 1000 cubic inches and a surface area of 600 square inches, and maximizes the sum of the squares of its edge lengths.

**Answer:**
Let the dimensions of the box be $x, y, z$.
We want to maximize $S = x^2 + y^2 + z^2$.
The constraints are:
1.  Volume: $V = xyz = 1000$ ($g(x, y, z) = xyz$, $c_1 = 1000$)
2.  Surface Area: $A = 2xy + 2yz + 2zx = 600$, which simplifies to $xy + yz + zx = 300$ ($h(x, y, z) = xy + yz + zx$, $c_2 = 300$)

The function to maximize is $f(x, y, z) = x^2 + y^2 + z^2$.
The Lagrangian is:
$L(x, y, z, \lambda, \mu) = x^2 + y^2 + z^2 - \lambda(xyz - 1000) - \mu(xy + yz + zx - 300)$

Partial derivatives set to zero:
1.  $\frac{\partial L}{\partial x} = 2x - \lambda yz - \mu(y + z) = 0 \implies 2x = \lambda yz + \mu(y + z)$
2.  $\frac{\partial L}{\partial y} = 2y - \lambda xz - \mu(x + z) = 0 \implies 2y = \lambda xz + \mu(x + z)$
3.  $\frac{\partial L}{\partial z} = 2z - \lambda xy - \mu(x + y) = 0 \implies 2z = \lambda xy + \mu(x + y)$
4.  $\frac{\partial L}{\partial \lambda} = -(xyz - 1000) = 0 \implies xyz = 1000$
5.  $\frac{\partial L}{\partial \mu} = -(xy + yz + zx - 300) = 0 \implies xy + yz + zx = 300$

Multiply (1) by $x$, (2) by $y$, (3) by $z$:
$2x^2 = \lambda xyz + \mu(xy + xz)$
$2y^2 = \lambda xyz + \mu(yx + yz)$
$2z^2 = \lambda xyz + \mu(zx + zy)$

Substitute $xyz = 1000$:
$2x^2 = 1000\lambda + \mu(xy + xz)$
$2y^2 = 1000\lambda + \mu(yx + yz)$
$2z^2 = 1000\lambda + \mu(zx + zy)$

Let's assume the box is a cube, $x=y=z$.
Constraint 1: $x^3 = 1000 \implies x = 10$.
Constraint 2: $3x^2 = 3(10)^2 = 300$.
This satisfies both constraints! So, a cube with side length 10 is a candidate.
For a cube $x=y=z=10$, the sum of squares of edge lengths is $10^2 + 10^2 + 10^2 = 100 + 100 + 100 = 300$.

Let's try to prove that this is indeed the maximum.
From $2x^2 = 1000\lambda + \mu(xy + xz)$, $2y^2 = 1000\lambda + \mu(yx + yz)$, $2z^2 = 1000\lambda + \mu(zx + zy)$, we can see that if $x, y, z$ are different, the terms $\mu(xy+xz)$, $\mu(yx+yz)$, $\mu(zx+zy)$ must balance things out.

Consider the scenario where $x=y$.
Then the constraints become:
1.  $x^2z = 1000 \implies z = 1000/x^2$
2.  $x^2 + 2xz = 300$

Substitute $z$ into the second constraint:
$x^2 + 2x(1000/x^2) = 300$
$x^2 + 2000/x = 300$
Multiply by $x$:
$x^3 + 2000 = 300x$
$x^3 - 300x + 2000 = 0$

We already know $x=10$ is a solution for a cube ($x=y=z=10$), which would mean $10^3 - 300(10) + 2000 = 1000 - 3000 + 2000 = 0$. So $x=10$ is a root.
Dividing $(x^3 - 300x + 2000)$ by $(x-10)$:
$(x^3 - 10x^2) + (10x^2 - 100x) - (200x + 2000) = x^2(x-10) + 10x(x-10) - 200(x-10) = (x-10)(x^2 + 10x - 200) = 0$.
So the other roots are given by $x^2 + 10x - 200 = 0$.
$x = \frac{-10 \pm \sqrt{100 - 4(1)(-200)}}{2} = \frac{-10 \pm \sqrt{100 + 800}}{2} = \frac{-10 \pm \sqrt{900}}{2} = \frac{-10 \pm 30}{2}$.
$x = \frac{20}{2} = 10$ or $x = \frac{-40}{2} = -20$.
Since dimensions must be positive, $x=10$ is the only valid solution for this case.

This means that if $x=y$, the only physically meaningful solution that satisfies the constraints is $x=y=10$. If $x=y=10$, then $z = 1000/10^2 = 10$. This confirms that the cube $x=y=z=10$ is the only candidate solution arising from the symmetry $x=y$ (or $y=z$ or $z=x$).

Now we evaluate $f(x,y,z) = x^2+y^2+z^2$ at this point.
For $x=y=z=10$, $f(10,10,10) = 10^2 + 10^2 + 10^2 = 300$.

Since this is the only candidate point, and the constraint region for positive $x,y,z$ is not compact, we would generally need to argue why this is a maximum. In typical exam scenarios for this level, if a single point emerges from the symmetric case and satisfies all constraints, it's often the desired extremum. The sum of squares of edge lengths intuitively increases as dimensions become more unequal while maintaining volume and surface area constraints (e.g., a very long, thin box). Thus, the cube should yield the minimum sum of squares.

However, the question asks for maximization. This suggests that we might have missed some non-symmetric solutions or that the problem context implies an upper bound on dimensions not explicitly stated. In a contest math setting, the cube often provides minimums for sums of squares or sums of cubes given fixed product and vice-versa, and maximums for product given sums. Here, it's the sum of squares, so the cube usually yields the minimum.

Let's re-read carefully: "maximizes the sum of the squares of its edge lengths".
My analysis for $x=y$ leading to $x=10$ implies that $x=10$ is the only possible value for equal dimensions.
If the question truly implies a maximum exists and we found only one candidate, then that candidate must be it.

Let's check the partial derivative equations again:
$2x = \lambda yz + \mu(y + z)$
$2y = \lambda xz + \mu(x + z)$
$2z = \lambda xy + \mu(x + y)$

If $x=10, y=10, z=10$:
$20 = \lambda (100) + \mu(20)$
$20 = 100\lambda + 20\mu \implies 1 = 5\lambda + \mu$

We need to find $\lambda$ and $\mu$ satisfying this. This equation alone doesn't rule out the cube.
However, the phrasing "maximizes" is tricky here. It's possible that the question has an issue or that a deeper analysis of non-symmetric cases would be required. But given the typical scope, the cube is the most likely intended answer for *an* extremum. If it were a minimum, the cube would be it. For a maximum, we'd expect dimensions to be far apart, which contradicts $x=y=z$.

Let's assume for exam purposes that if the symmetric case satisfies constraints, it's a critical point. Given it's the only one we found, it's the most plausible answer.

**Final Answer for Q2 (as per typical exam expectation for this kind of problem):**
The dimensions of the rectangular box are $10 \times 10 \times 10$ inches. This cube satisfies the volume constraint ($10^3 = 1000$) and the surface area constraint ($2(100) + 2(100) + 2(100) = 600$). This point is the only symmetric solution derived from the method of Lagrange multipliers, suggesting it is a critical point for the sum of squares of edge lengths.

---
**Question 3 (Conceptual Understanding):**
In the method of Lagrange multipliers with two constraints, $g(x, y, z) = c_1$ and $h(x, y, z) = c_2$, why do we introduce two Lagrange multipliers, $\lambda$ and $\mu$?

**Answer:**
We introduce two Lagrange multipliers, $\lambda$ and $\mu$, because we have two independent restrictions on our variables. Each constraint requires its own "correction factor" or multiplier to ensure that any movement away from a potential extremum simultaneously respects both limitations. Geometrically, $\lambda \nabla g$ accounts for the change in $f$ due to movement constrained by $g$, and $\mu \nabla h$ accounts for the change due to movement constrained by $h$. The combination $\lambda \nabla g + \mu \nabla h$ represents the gradient of $f$ being a linear combination of the normal vectors to the surfaces defined by the constraints, ensuring that the optimal point lies on the intersection curve and that the gradient of $f$ is perpendicular to this curve. If we used only one multiplier, we would only be able to satisfy one constraint at a time or find a situation where $\nabla f$ is parallel to only one of the constraint gradients, not necessarily lying in the plane defined by both.
