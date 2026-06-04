---
title: "Potential function (results 
without proof)."
subject: "MATHEMATICS FOR ELECTRICAL SCIENCE AND PHYSICAL SCIENCE – 2"
module: "Module 3: Vector valued function of single variable "
branch: "Civil Engineering"
semester: 2
topicId: "68b54566d74ec52cc0912cdd"
status: "completed"
scrapedAt: "2026-05-20T18:37:04.431Z"
---
# Module 3: Vector-Valued Functions of a Single Variable

## Topic: Potential Functions (Results Without Proof)

Welcome, everyone! In this session, we're diving into a really important concept in vector calculus: **Potential Functions**. This topic is crucial because it links together several ideas we've been exploring, particularly in Module 3 and it has direct applications in our Electrical Science and Physical Science work. Specifically, understanding potential functions will help us solidify our grasp of vector fields, which are everywhere in physics and engineering – think about electric fields, magnetic fields, gravitational fields, or even the flow of fluids.

Our focus today is on understanding the *results* related to potential functions. We won't be getting bogged down in formal proofs, but instead, we'll concentrate on what potential functions *are*, why they are useful, and how we recognize them. This aligns directly with our course outcomes, especially **CO3: Compute the derivatives and line integrals of vector functions and to learn their applications**, and **CO4: Apply the concepts of surface and volume integrals and to learn their inter-relations and applications**. You'll see how potential functions simplify calculations involving line integrals, which is a key takeaway for both these outcomes.

### What Exactly is a Potential Function?

Imagine you have a vector field. Think of it like a map of wind directions and strengths across a region. At every point, there's a vector telling you "go this way with this much force." Now, sometimes, this vector field can be described in a much simpler way. A **potential function**, let's call it $f(x, y, z)$, is a scalar function (just a single number at each point) such that its gradient vector gives us the original vector field.

In mathematical terms, if we have a vector field $\mathbf{F}(x, y, z) = P(x, y, z) \mathbf{i} + Q(x, y, z) \mathbf{j} + R(x, y, z) \mathbf{k}$, and there exists a scalar function $f(x, y, z)$ such that:

$\mathbf{F}(x, y, z) = \nabla f(x, y, z)$

where $\nabla f$ is the gradient of $f$, which is defined as:

$\nabla f(x, y, z) = \frac{\partial f}{\partial x} \mathbf{i} + \frac{\partial f}{\partial y} \mathbf{j} + \frac{\partial f}{\partial z} \mathbf{k}$

Then, we say that $f$ is a **potential function** for $\mathbf{F}$, and $\mathbf{F}$ is called a **conservative vector field**.

Think of it this way: the gradient operation (the $\nabla$ symbol) is like a "differentiation" operation for vector fields. If we can "undo" this differentiation by finding the original scalar function $f$, then the field is "conservative." Why conservative? Because the work done by such a field moving an object from one point to another depends *only* on the starting and ending points, not the path taken. This is a fundamental concept in physics, for example, in gravitational or electrostatic forces. As highlighted in many engineering mathematics texts like Kreyszig's "Advanced Engineering Mathematics," conservative fields are central to understanding energy conservation.

### The Key Result: Curl and Conservatism

This is where things get really elegant. There's a powerful test to determine if a vector field *could* have a potential function, and it involves another operation called the **curl**.

For a vector field $\mathbf{F} = P \mathbf{i} + Q \mathbf{j} + R \mathbf{k}$, its curl is defined as:

$\nabla \times \mathbf{F} = \left(\frac{\partial R}{\partial y} - \frac{\partial Q}{\partial z}\right) \mathbf{i} + \left(\frac{\partial P}{\partial z} - \frac{\partial R}{\partial x}\right) \mathbf{j} + \left(\frac{\partial Q}{\partial x} - \frac{\partial P}{\partial y}\right) \mathbf{k}$

Now, here's the crucial result (and remember, we're taking this as a given, no proof today!):

**Theorem:** A vector field $\mathbf{F}$ is conservative (i.e., has a potential function) if and only if its curl is the zero vector, $\nabla \times \mathbf{F} = \mathbf{0}$, *provided that the domain of $\mathbf{F}$ is connected and simply connected*.

What does "connected and simply connected" mean? Think of it as a region without "holes" or "tunnels." For most of the fields we'll encounter in typical engineering problems, this condition is met. So, in practice, if you calculate the curl of a vector field and get the zero vector, you can be pretty sure it's conservative and has a potential function.

**Why is this useful?** If $\mathbf{F} = \nabla f$, then it can be shown (again, without proof) that $\nabla \times \mathbf{F} = \nabla \times (\nabla f) = \mathbf{0}$. This means that if a field is the gradient of *some* scalar function, its curl *must* be zero. The theorem essentially states the converse is also true, under the right domain conditions.

**Example:** Let's test this. Consider the vector field $\mathbf{F}(x, y) = 2xy \mathbf{i} + (x^2 + y^2) \mathbf{j}$.
Here, $P = 2xy$ and $Q = x^2 + y^2$. (For 2D fields, we can think of $R=0$ and all partial derivatives with respect to $z$ as zero. The curl in 2D simplifies).
Let's calculate its curl (or the relevant part for 2D):
$\frac{\partial Q}{\partial x} = \frac{\partial}{\partial x}(x^2 + y^2) = 2x$
$\frac{\partial P}{\partial y} = \frac{\partial}{\partial y}(2xy) = 2x$

Since $\frac{\partial Q}{\partial x} = \frac{\partial P}{\partial y}$, the "z-component" of the curl is zero. For a 2D field embedded in 3D, this implies $\nabla \times \mathbf{F} = \mathbf{0}$. So, this field is conservative and should have a potential function.

### Finding the Potential Function

So, we've established that if $\nabla \times \mathbf{F} = \mathbf{0}$, we can find a potential function $f$. How do we find it? We use the definition of the gradient:

If $\mathbf{F} = P \mathbf{i} + Q \mathbf{j} + R \mathbf{k} = \nabla f$, then:
1. $\frac{\partial f}{\partial x} = P(x, y, z)$
2. $\frac{\partial f}{\partial y} = Q(x, y, z)$
3. $\frac{\partial f}{\partial z} = R(x, y, z)$

We can integrate these equations. Let's illustrate with a common method, often found in sections discussing vector calculus in texts like Thomas' Calculus or Anton's Calculus.

**Method:**
Start with $\frac{\partial f}{\partial x} = P(x, y, z)$. Integrate with respect to $x$, treating $y$ and $z$ as constants:
$f(x, y, z) = \int P(x, y, z) \, dx + g(y, z)$
Here, $g(y, z)$ is our "constant of integration," but since we're differentiating with respect to $x$, anything that depends only on $y$ and $z$ acts like a constant.

Now, take the partial derivative of this expression for $f$ with respect to $y$ and set it equal to $Q$:
$\frac{\partial f}{\partial y} = \frac{\partial}{\partial y} \left( \int P(x, y, z) \, dx \right) + \frac{\partial g}{\partial y} = Q(x, y, z)$

This gives us an equation for $\frac{\partial g}{\partial y}$. We can then integrate this with respect to $y$ to find $g(y, z)$:
$g(y, z) = \int \left( Q(x, y, z) - \frac{\partial}{\partial y} \left( \int P(x, y, z) \, dx \right) \right) \, dy + h(z)$
Again, $h(z)$ is a "constant of integration" with respect to $y$, so it can depend on $z$.

Finally, substitute this $g(y, z)$ back into the expression for $f(x, y, z)$. Then, take the partial derivative of this updated $f$ with respect to $z$ and set it equal to $R$. This will give us an equation to solve for $h(z)$, which we can then integrate to find $h(z)$. Once we have $h(z)$, we have our complete potential function $f(x, y, z)$.

**Important Note:** The potential function is not unique. If $f$ is a potential function for $\mathbf{F}$, then $f + C$ (where $C$ is any constant) is also a potential function. This is because the derivative of a constant is zero. So, we often find *a* potential function, implicitly setting the constant of integration to zero.

**Example Revisited:** Let's find the potential function for $\mathbf{F}(x, y) = 2xy \mathbf{i} + (x^2 + y^2) \mathbf{j}$.
We know it's conservative.
1. $\frac{\partial f}{\partial x} = P = 2xy$
   Integrating with respect to $x$: $f(x, y) = \int 2xy \, dx = x^2y + g(y)$

2. Now, differentiate this $f$ with respect to $y$ and set it equal to $Q$:
   $\frac{\partial f}{\partial y} = \frac{\partial}{\partial y}(x^2y + g(y)) = x^2 + g'(y)$
   We set this equal to $Q = x^2 + y^2$:
   $x^2 + g'(y) = x^2 + y^2$
   $g'(y) = y^2$

3. Integrate $g'(y)$ with respect to $y$ to find $g(y)$:
   $g(y) = \int y^2 \, dy = \frac{1}{3}y^3$
   (We can ignore the constant of integration here, as it would just add to the overall constant $C$ for $f$).

So, our potential function is:
$f(x, y) = x^2y + \frac{1}{3}y^3$

Let's quickly check:
$\frac{\partial f}{\partial x} = 2xy$ (Correct, matches $P$)
$\frac{\partial f}{\partial y} = x^2 + y^2$ (Correct, matches $Q$)

This method works wonderfully for fields where the curl is zero. It's a direct application of our understanding of partial derivatives and integration.

### The Fundamental Theorem for Line Integrals

This is arguably the most important result related to potential functions. It provides a shortcut for calculating line integrals of conservative vector fields.

**Theorem:** If $\mathbf{F}$ is a conservative vector field on an open connected domain $D$ and $f$ is a potential function for $\mathbf{F}$ on $D$, then for any piecewise smooth curve $C$ in $D$ from point $A$ to point $B$,
$\int_C \mathbf{F} \cdot d\mathbf{r} = f(B) - f(A)$

Here, $\int_C \mathbf{F} \cdot d\mathbf{r}$ is the line integral of $\mathbf{F}$ along curve $C$.

**What does this mean in plain English?** If you have a conservative force field (like gravity or an electrostatic field, assuming no external sources or sinks), the work done by that field moving an object from point $A$ to point $B$ is simply the difference in the potential energy at $B$ and the potential energy at $A$. The path taken doesn't matter! This is a profound simplification.

**Think of it this way:** Imagine walking up a hill. The total change in your altitude (potential energy) depends only on your starting elevation and your final elevation, not the specific winding path you took. If you climb higher, you gain potential energy, regardless of the route.

**Example:** Let's calculate the line integral of $\mathbf{F}(x, y) = 2xy \mathbf{i} + (x^2 + y^2) \mathbf{j}$ along a curve $C$ from $(1, 0)$ to $(2, 3)$.
We already found that $\mathbf{F}$ is conservative and its potential function is $f(x, y) = x^2y + \frac{1}{3}y^3$.
Let $A = (1, 0)$ and $B = (2, 3)$.
Using the Fundamental Theorem for Line Integrals:
$\int_C \mathbf{F} \cdot d\mathbf{r} = f(B) - f(A)$
$\int_C \mathbf{F} \cdot d\mathbf{r} = f(2, 3) - f(1, 0)$

Calculate $f(2, 3)$:
$f(2, 3) = (2)^2(3) + \frac{1}{3}(3)^3 = 4(3) + \frac{1}{3}(27) = 12 + 9 = 21$

Calculate $f(1, 0)$:
$f(1, 0) = (1)^2(0) + \frac{1}{3}(0)^3 = 0 + 0 = 0$

Therefore, the line integral is:
$\int_C \mathbf{F} \cdot d\mathbf{r} = 21 - 0 = 21$

This is so much easier than parameterizing the curve and performing the integration directly! This is a typical exam question where recognizing a conservative field and finding its potential function is key.

### Connection to Course Outcomes

Let's explicitly link this back to our Course Outcomes:

*   **CO1: Compute the partial and total derivatives and maxima and minima of multivariable functions and to apply in engineering problems.** Finding a potential function $f$ requires us to work with partial derivatives. We use $\frac{\partial f}{\partial x} = P$, $\frac{\partial f}{\partial y} = Q$, etc. The process of finding $f$ often involves integrating expressions derived from these partial derivatives. While we aren't directly finding maxima/minima here, the underlying calculus skills are the same.

*   **CO3: Compute the derivatives and line integrals of vector functions and to learn their applications.** This is where potential functions shine! We've used derivatives (gradients and partials) to *define* potential functions and to *test* for conservatism (using curl). The most significant application is the Fundamental Theorem for Line Integrals, which directly simplifies the computation of line integrals of conservative fields. This theorem is a cornerstone of applications in physics and electrical science, relating work/energy to field properties. For instance, in electrical science, calculating the voltage difference between two points in an electrostatic field is a direct application of the potential function (voltage is the negative of the electric potential).

*   **CO4: Apply the concepts of surface and volume integrals and to learn their inter-relations and applications.** While this module focuses on vector functions of a *single* variable (which are curves), the concept of scalar and vector fields is foundational. The ideas of potential functions and conservative fields pave the way for understanding more complex field theorems like divergence and Stokes' theorem, which are crucial for surface and volume integrals in higher modules. The scalar potential $f$ is the "source" from which the vector field $\mathbf{F}$ is derived, a concept that extends to scalar potentials for other types of fields.

### In Summary & Key Takeaways

*   A **potential function** $f$ for a vector field $\mathbf{F}$ is a scalar function such that $\mathbf{F} = \nabla f$.
*   A vector field $\mathbf{F}$ is **conservative** if it has a potential function.
*   A necessary condition for a vector field to be conservative (on a simply connected domain) is that its **curl is zero**, $\nabla \times \mathbf{F} = \mathbf{0}$.
*   If a field is conservative, we can find its potential function by integrating the components of $\mathbf{F}$ and solving for the unknown "constants" of integration, which turn out to be functions of the other variables.
*   The **Fundamental Theorem for Line Integrals** states that for a conservative field $\mathbf{F}$ with potential $f$, $\int_C \mathbf{F} \cdot d\mathbf{r} = f(B) - f(A)$, which drastically simplifies line integral calculations.
*   **Remember this:** If you see a line integral and suspect the field might be conservative, *always* check its curl first. If it's zero, finding the potential function is usually much faster than direct integration.

This concept of potential functions is powerful because it allows us to convert difficult vector-calculus problems (like line integrals) into simpler scalar-calculus problems (evaluating a function at two points). Keep this in mind as we move forward!

---

## Sample Questions with Answers

**1. Conceptual Question:**
What is the primary condition we check to determine if a vector field is conservative, and what theorem allows us to simplify line integrals of such fields?

**Answer:**
The primary condition to check if a vector field $\mathbf{F}$ is conservative (on a simply connected domain) is if its **curl is the zero vector**, i.e., $\nabla \times \mathbf{F} = \mathbf{0}$.
The theorem that allows us to simplify line integrals of conservative fields is the **Fundamental Theorem for Line Integrals**, which states that $\int_C \mathbf{F} \cdot d\mathbf{r} = f(B) - f(A)$, where $f$ is the potential function of $\mathbf{F}$, and $A$ and $B$ are the endpoints of the curve $C$.

**2. Application Question:**
Determine if the vector field $\mathbf{F}(x, y, z) = (2xy+z) \mathbf{i} + (x^2-2yz) \mathbf{j} + (x-y^2) \mathbf{k}$ is conservative. If it is, find a potential function $f(x, y, z)$.

**Answer:**
First, we check the curl of $\mathbf{F}$:
$\mathbf{F} = P \mathbf{i} + Q \mathbf{j} + R \mathbf{k}$
$P = 2xy+z$, $Q = x^2-2yz$, $R = x-y^2$

Calculate the components of the curl:
$\frac{\partial R}{\partial y} = \frac{\partial}{\partial y}(x-y^2) = -2y$
$\frac{\partial Q}{\partial z} = \frac{\partial}{\partial z}(x^2-2yz) = -2y$
So, $\frac{\partial R}{\partial y} - \frac{\partial Q}{\partial z} = -2y - (-2y) = 0$.

$\frac{\partial P}{\partial z} = \frac{\partial}{\partial z}(2xy+z) = 1$
$\frac{\partial R}{\partial x} = \frac{\partial}{\partial x}(x-y^2) = 1$
So, $\frac{\partial P}{\partial z} - \frac{\partial R}{\partial x} = 1 - 1 = 0$.

$\frac{\partial Q}{\partial x} = \frac{\partial}{\partial x}(x^2-2yz) = 2x$
$\frac{\partial P}{\partial y} = \frac{\partial}{\partial y}(2xy+z) = 2x$
So, $\frac{\partial Q}{\partial x} - \frac{\partial P}{\partial y} = 2x - 2x = 0$.

Since all components of the curl are zero, $\nabla \times \mathbf{F} = \mathbf{0}$. The field $\mathbf{F}$ is conservative.

Now, let's find the potential function $f$:
We have:
1. $\frac{\partial f}{\partial x} = P = 2xy+z$
   Integrating with respect to $x$: $f(x, y, z) = \int (2xy+z) \, dx = x^2y + xz + g(y, z)$

2. $\frac{\partial f}{\partial y} = Q = x^2-2yz$
   From our expression for $f$: $\frac{\partial f}{\partial y} = \frac{\partial}{\partial y}(x^2y + xz + g(y, z)) = x^2 + \frac{\partial g}{\partial y}$
   Setting them equal: $x^2 + \frac{\partial g}{\partial y} = x^2 - 2yz$
   $\frac{\partial g}{\partial y} = -2yz$
   Integrating with respect to $y$: $g(y, z) = \int (-2yz) \, dy = -yz^2 + h(z)$

3. $\frac{\partial f}{\partial z} = R = x-y^2$
   Substitute $g(y, z)$ back into $f$: $f(x, y, z) = x^2y + xz - yz^2 + h(z)$
   Now differentiate this $f$ with respect to $z$:
   $\frac{\partial f}{\partial z} = \frac{\partial}{\partial z}(x^2y + xz - yz^2 + h(z)) = x - 3yz + h'(z)$
   Setting this equal to $R$: $x - 3yz + h'(z) = x - y^2$
   There seems to be a mismatch here. Let's recheck the partials.

   Ah, I made a mistake in the calculation of $\frac{\partial f}{\partial y}$ from $f(x,y,z) = x^2y + xz + g(y,z)$.
   $\frac{\partial}{\partial y}(x^2y + xz + g(y,z)) = x^2 + 0 + \frac{\partial g}{\partial y}$. This is correct.

   Let's recheck the integration of $g'(y) = -2yz$.
   $g(y,z) = \int (-2yz) \, dy$. Here, $z$ is treated as a constant during integration with respect to $y$.
   So, $g(y,z) = -2z \int y \, dy = -2z \left(\frac{1}{2}y^2\right) + h(z) = -yz^2 + h(z)$. This is correct.

   Now, let's re-evaluate $\frac{\partial f}{\partial z}$ using $f(x, y, z) = x^2y + xz - yz^2 + h(z)$.
   $\frac{\partial f}{\partial z} = \frac{\partial}{\partial z}(x^2y) + \frac{\partial}{\partial z}(xz) - \frac{\partial}{\partial z}(yz^2) + \frac{\partial}{\partial z}(h(z))$
   $\frac{\partial f}{\partial z} = 0 + x - 2yz + h'(z)$.

   We must set this equal to $R = x-y^2$.
   $x - 2yz + h'(z) = x - y^2$
   This implies $h'(z) = -y^2 + 2yz$. This indicates an issue, as $h'(z)$ should only depend on $z$.

   **Let's restart the finding of $f$ to be very careful.**

   If $\mathbf{F} = (2xy+z) \mathbf{i} + (x^2-2yz) \mathbf{j} + (x-y^2) \mathbf{k}$:
   1. $\frac{\partial f}{\partial x} = 2xy+z \implies f(x, y, z) = x^2y + xz + g(y, z)$ (Correct)

   2. $\frac{\partial f}{\partial y} = \frac{\partial}{\partial y}(x^2y + xz + g(y, z)) = x^2 + \frac{\partial g}{\partial y}$
      This must equal $Q = x^2 - 2yz$.
      $x^2 + \frac{\partial g}{\partial y} = x^2 - 2yz \implies \frac{\partial g}{\partial y} = -2yz$.
      Integrating w.r.t. $y$: $g(y, z) = -yz^2 + h(z)$. (Correct)

   3. Substitute $g$ into $f$: $f(x, y, z) = x^2y + xz - yz^2 + h(z)$.
      Now, $\frac{\partial f}{\partial z}$ should equal $R = x-y^2$.
      $\frac{\partial f}{\partial z} = \frac{\partial}{\partial z}(x^2y) + \frac{\partial}{\partial z}(xz) - \frac{\partial}{\partial z}(yz^2) + \frac{\partial}{\partial z}(h(z))$
      $\frac{\partial f}{\partial z} = 0 + x - 2yz + h'(z)$.

      We need this to equal $R = x - y^2$.
      $x - 2yz + h'(z) = x - y^2$.
      This implies $h'(z) = -y^2 + 2yz$. This still shows a dependency on $y$.

      **Let's recheck the Curl calculation.**
      $P = 2xy+z$, $Q = x^2-2yz$, $R = x-y^2$.
      $\partial R/\partial y = -2y$. $\partial Q/\partial z = -2y$. Difference is 0.
      $\partial P/\partial z = 1$. $\partial R/\partial x = 1$. Difference is 0.
      $\partial Q/\partial x = 2x$. $\partial P/\partial y = 2x$. Difference is 0.
      The curl is indeed zero. The field IS conservative.

      **Perhaps there's a misunderstanding in how the $g$ and $h$ functions are handled, or a typo in the question.**
      Let's assume the method is correct and there might be a slight error in the question's values as presented, leading to an inconsistent $h'(z)$.

      However, if we *must* find a potential function, let's proceed with the derived $f$ expression and ensure it matches $P$ and $Q$.
      $f(x, y, z) = x^2y + xz - yz^2$.
      $\frac{\partial f}{\partial x} = 2xy + z$ (Matches $P$)
      $\frac{\partial f}{\partial y} = x^2 - z^2$ (This is where it deviates from $Q = x^2 - 2yz$)

      **Correction needed:** Let's go back to the step where we integrated $\frac{\partial g}{\partial y} = -2yz$.
      $g(y,z) = \int (-2yz) \, dy = -y^2z + h(z)$. **Here was the error: -2yz integrated with respect to y is -y^2z, not -yz^2.**

      Let's re-calculate $f$ using $g(y,z) = -y^2z + h(z)$:
      $f(x, y, z) = x^2y + xz - y^2z + h(z)$

      Now, check $\frac{\partial f}{\partial z}$:
      $\frac{\partial f}{\partial z} = \frac{\partial}{\partial z}(x^2y) + \frac{\partial}{\partial z}(xz) - \frac{\partial}{\partial z}(y^2z) + \frac{\partial}{\partial z}(h(z))$
      $\frac{\partial f}{\partial z} = 0 + x - y^2 + h'(z)$

      This must equal $R = x-y^2$.
      $x - y^2 + h'(z) = x - y^2$
      This means $h'(z) = 0$.
      Integrating $h'(z)=0$ with respect to $z$: $h(z) = C$, where $C$ is a constant.

      Therefore, the potential function is $f(x, y, z) = x^2y + xz - y^2z + C$.
      We usually choose $C=0$ for simplicity.
      **Potential Function: $f(x, y, z) = x^2y + xz - y^2z$**

**3. Exam-Oriented Question:**
Calculate the line integral $\int_C \mathbf{F} \cdot d\mathbf{r}$ where $\mathbf{F}(x, y) = \langle 2x \cos y, -x^2 \sin y \rangle$ and $C$ is the curve from $(0, 0)$ to $(\pi/2, \pi/4)$.

**Answer:**
First, check if $\mathbf{F}$ is conservative.
$P = 2x \cos y$, $Q = -x^2 \sin y$.
$\frac{\partial Q}{\partial x} = \frac{\partial}{\partial x}(-x^2 \sin y) = -2x \sin y$.
$\frac{\partial P}{\partial y} = \frac{\partial}{\partial y}(2x \cos y) = -2x \sin y$.

Since $\frac{\partial Q}{\partial x} = \frac{\partial P}{\partial y}$, the field is conservative. Now we find a potential function $f(x, y)$.

1. $\frac{\partial f}{\partial x} = P = 2x \cos y$
   Integrate with respect to $x$: $f(x, y) = \int (2x \cos y) \, dx = x^2 \cos y + g(y)$.

2. $\frac{\partial f}{\partial y} = Q = -x^2 \sin y$
   From our $f$: $\frac{\partial f}{\partial y} = \frac{\partial}{\partial y}(x^2 \cos y + g(y)) = -x^2 \sin y + g'(y)$.
   Set them equal: $-x^2 \sin y + g'(y) = -x^2 \sin y$.
   This implies $g'(y) = 0$.
   Integrating $g'(y)=0$ with respect to $y$: $g(y) = C$.

So, a potential function is $f(x, y) = x^2 \cos y$. (We can set $C=0$).

Now, use the Fundamental Theorem for Line Integrals. The curve $C$ goes from $A = (0, 0)$ to $B = (\pi/2, \pi/4)$.
$\int_C \mathbf{F} \cdot d\mathbf{r} = f(B) - f(A) = f(\pi/2, \pi/4) - f(0, 0)$.

$f(\pi/2, \pi/4) = (\pi/2)^2 \cos(\pi/4) = \frac{\pi^2}{4} \cdot \frac{\sqrt{2}}{2} = \frac{\pi^2\sqrt{2}}{8}$.
$f(0, 0) = (0)^2 \cos(0) = 0 \cdot 1 = 0$.

Therefore, $\int_C \mathbf{F} \cdot d\mathbf{r} = \frac{\pi^2\sqrt{2}}{8} - 0 = \frac{\pi^2\sqrt{2}}{8}$.

This is the kind of question where recognizing conservatism and using the potential function is a huge time saver.
