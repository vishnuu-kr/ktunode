---
title: "Conservative 
vector field"
subject: "MATHEMATICS FOR ELECTRICAL SCIENCE AND PHYSICAL SCIENCE – 2"
module: "Module 3: Vector valued function of single variable "
branch: "Mechanical Engineering"
semester: 2
topicId: "68bd1edffeb4799d95e839b1"
status: "completed"
scrapedAt: "2026-05-20T17:45:58.723Z"
---
# MATHEMATICS FOR ELECTRICAL SCIENCE AND PHYSICAL SCIENCE – 2

## Module 3: Vector-Valued Functions of a Single Variable

### Topic: Conservative Vector Fields

Hello everyone, and welcome back to our journey through vector calculus! In this module, we've been exploring vector-valued functions, which are fundamental to understanding many physical phenomena, especially in electrical science and physics. We've learned about curves in space, their derivatives (which tell us about velocity and acceleration), and line integrals, which allow us to calculate things like work done by a force.

Today, we’re going to dive into a very special type of vector field: **Conservative Vector Fields**. This concept is incredibly powerful because it simplifies many calculations and reveals deep connections between different areas of vector calculus. Understanding conservative fields will directly help us with **Course Outcome 3 (CO3)**, as it relates to computing derivatives and line integrals of vector functions and their applications. Think about calculating the work done by a force field – if that field is conservative, the calculation becomes much, much easier!

#### What is a Vector Field?

Before we talk about *conservative* vector fields, let’s quickly recap what a vector field is. A vector field, often denoted by **F** or **F**(x, y) in 2D, or **F**(x, y, z) in 3D, assigns a vector to every point in a domain. Imagine a fluid flowing – the vector field would represent the velocity of the fluid at each point. Or think about the gravitational force exerted by the Earth – at every point in space, there's a vector indicating the direction and magnitude of the gravitational pull.

#### The Intuition Behind "Conservative"

The term "conservative" in physics often relates to energy. A conservative force is one where the work done by the force in moving an object between two points is independent of the path taken. This means the force "conserves" mechanical energy (potential + kinetic). In vector calculus, this idea translates beautifully.

Think about walking from your home to a friend's house. If you take different routes, the total distance traveled might be different, but if the "cost" or "effort" per unit distance is determined by some underlying potential (like a slight uphill or downhill gradient), and the total effort is simply the sum of these individual efforts, then the *total effort* between your home and your friend's house should be the same, regardless of the path. This is the essence of a conservative field.

Let's make this more concrete. Suppose you have a vector field **F**(x, y) in 2D. If this field is conservative, it means there exists a scalar function, let's call it $\phi(x, y)$ (often called a **potential function** or **scalar potential**), such that the vector field **F** is the gradient of this scalar function.

**Definition:** A vector field **F** is called **conservative** if there exists a scalar function $\phi$ such that **F** = $\nabla\phi$. The function $\phi$ is called a **potential function** for **F**.

Remember $\nabla$ (del) is the gradient operator. In 2D, $\nabla\phi = \left\langle \frac{\partial\phi}{\partial x}, \frac{\partial\phi}{\partial y} \right\rangle$. In 3D, $\nabla\phi = \left\langle \frac{\partial\phi}{\partial x}, \frac{\partial\phi}{\partial y}, \frac{\partial\phi}{\partial z} \right\rangle$.

So, if **F** = $P(x, y)\mathbf{i} + Q(x, y)\mathbf{j}$ is a 2D vector field, and **F** is conservative, then there's a $\phi(x, y)$ such that:
$P(x, y) = \frac{\partial\phi}{\partial x}$ and $Q(x, y) = \frac{\partial\phi}{\partial y}$.

Similarly, for a 3D vector field **F** = $P(x, y, z)\mathbf{i} + Q(x, y, z)\mathbf{j} + R(x, y, z)\mathbf{k}$:
$P(x, y, z) = \frac{\partial\phi}{\partial x}$, $Q(x, y, z) = \frac{\partial\phi}{\partial y}$, and $R(x, y, z) = \frac{\partial\phi}{\partial z}$.

This connection to gradients is crucial, and it's a central theme discussed in texts like *Calculus* by Anton, Biven, and Davis, and *Thomas' Calculus* by Weir, Hass, Heil, and Bogacki.

#### The Fundamental Theorem for Gradient Fields (The "Main Event" for Conservative Fields)

The real power of conservative fields comes from this theorem. It's analogous to the Fundamental Theorem of Calculus, which connects differentiation and integration for single-variable functions. For vector fields, it connects line integrals with the potential function.

**Theorem (The Fundamental Theorem for Line Integrals):**
If **F** is a conservative vector field on a domain $D$, and $\phi$ is a potential function for **F**, then for any piecewise smooth curve $C$ in $D$ with endpoints $A$ and $B$, the line integral of **F** along $C$ is simply the difference in the potential function evaluated at the endpoints:

$$ \int_C \mathbf{F} \cdot d\mathbf{r} = \int_C \nabla\phi \cdot d\mathbf{r} = \phi(B) - \phi(A) $$

Isn't that amazing? The line integral of a conservative vector field depends *only* on the starting and ending points, not on the path taken between them. This is why it’s called "path independence."

**Why is this useful?**
Imagine calculating the work done by a force field **F** along a very complex curve $C$. If you know **F** is conservative and you can find its potential function $\phi$, you don't need to parameterize the curve $C$ and perform a potentially difficult integral. You just need to find the coordinates of the start point $A$ and the end point $B$, plug them into $\phi$, and subtract. This is a massive simplification, directly addressing **CO3** by making line integral computations tractable.

**Example 1: Path Independence in Action**
Let's say a particle moves from (0,0) to (1,1) in a 2D plane. Consider the vector field **F**(x, y) = $\langle 2x, 2y \rangle$.
First, is this field conservative? We need to see if there's a $\phi$ such that $\nabla\phi = \mathbf{F}$.
Let's guess a potential function. If $\frac{\partial\phi}{\partial x} = 2x$, then $\phi(x, y)$ could be $x^2 + g(y)$ (where $g(y)$ is some function of $y$ only, since we're differentiating with respect to $x$).
Now, we need $\frac{\partial\phi}{\partial y} = 2y$. Differentiating our candidate $\phi(x, y) = x^2 + g(y)$ with respect to $y$, we get $\frac{\partial\phi}{\partial y} = \frac{d g}{d y}$.
So, we need $\frac{d g}{d y} = 2y$. Integrating this with respect to $y$, we get $g(y) = y^2 + K$, where $K$ is a constant.
Thus, a potential function is $\phi(x, y) = x^2 + y^2 + K$. We can choose $K=0$ for simplicity, so $\phi(x, y) = x^2 + y^2$.
Indeed, $\nabla(x^2 + y^2) = \langle 2x, 2y \rangle = \mathbf{F}$. So, **F** is conservative.

Now, let's calculate the work done by **F** as a particle moves from $A=(0,0)$ to $B=(1,1)$.
Using the Fundamental Theorem:
Work = $\int_C \mathbf{F} \cdot d\mathbf{r} = \phi(B) - \phi(A) = \phi(1,1) - \phi(0,0)$.
$\phi(1,1) = 1^2 + 1^2 = 2$.
$\phi(0,0) = 0^2 + 0^2 = 0$.
So, the work done is $2 - 0 = 2$.

Now, let's imagine two different paths:
Path 1: $C_1$ is the line segment from (0,0) to (1,1). Parameterize as $\mathbf{r}(t) = \langle t, t \rangle$, for $0 \le t \le 1$. Then $d\mathbf{r} = \langle 1, 1 \rangle dt$.
$\mathbf{F}(\mathbf{r}(t)) = \langle 2t, 2t \rangle$.
$\int_{C_1} \mathbf{F} \cdot d\mathbf{r} = \int_0^1 \langle 2t, 2t \rangle \cdot \langle 1, 1 \rangle dt = \int_0^1 (2t + 2t) dt = \int_0^1 4t dt = [2t^2]_0^1 = 2(1)^2 - 2(0)^2 = 2$.

Path 2: $C_2$ is the path along the x-axis from (0,0) to (1,0), then along the line x=1 from (1,0) to (1,1).
For the first part (x-axis): $\mathbf{r}(t) = \langle t, 0 \rangle$, $0 \le t \le 1$. $d\mathbf{r} = \langle 1, 0 \rangle dt$. $\mathbf{F}(\mathbf{r}(t)) = \langle 2t, 0 \rangle$.
$\int_{C_{2a}} \mathbf{F} \cdot d\mathbf{r} = \int_0^1 \langle 2t, 0 \rangle \cdot \langle 1, 0 \rangle dt = \int_0^1 2t dt = [t^2]_0^1 = 1$.
For the second part (vertical line): $\mathbf{r}(t) = \langle 1, t \rangle$, $0 \le t \le 1$. $d\mathbf{r} = \langle 0, 1 \rangle dt$. $\mathbf{F}(\mathbf{r}(t)) = \langle 2(1), 2t \rangle = \langle 2, 2t \rangle$.
$\int_{C_{2b}} \mathbf{F} \cdot d\mathbf{r} = \int_0^1 \langle 2, 2t \rangle \cdot \langle 0, 1 \rangle dt = \int_0^1 2t dt = [t^2]_0^1 = 1$.
Total work for Path 2 = $1 + 1 = 2$.

As predicted, both paths give the same result! This is the essence of path independence.

#### How to Check if a Vector Field is Conservative (The Test)

So, the big question is: how do we know if a given vector field is conservative in the first place? We need a test!

The connection to the gradient gives us a powerful test, especially using the curl. The curl of a vector field $\mathbf{F}$ is a vector quantity that measures the tendency of the field to "swirl" around a point. For a conservative field, which has no net "swirling" effect (it just points "outward" or "inward" from the potential function), the curl is zero.

**Curl in 3D:**
If $\mathbf{F}(x, y, z) = P\mathbf{i} + Q\mathbf{j} + R\mathbf{k}$, then the curl is:
$$ \nabla \times \mathbf{F} = \begin{vmatrix} \mathbf{i} & \mathbf{j} & \mathbf{k} \\ \frac{\partial}{\partial x} & \frac{\partial}{\partial y} & \frac{\partial}{\partial z} \\ P & Q & R \end{vmatrix} = \left( \frac{\partial R}{\partial y} - \frac{\partial Q}{\partial z} \right)\mathbf{i} + \left( \frac{\partial P}{\partial z} - \frac{\partial R}{\partial x} \right)\mathbf{j} + \left( \frac{\partial Q}{\partial x} - \frac{\partial P}{\partial y} \right)\mathbf{k} $$

**Curl in 2D:**
For a 2D field $\mathbf{F}(x, y) = P\mathbf{i} + Q\mathbf{j}$, we can think of it as a 3D field with $R=0$ and derivatives with respect to $z$ being zero: $\mathbf{F}(x, y, 0) = P\mathbf{i} + Q\mathbf{j} + 0\mathbf{k}$.
The curl becomes:
$$ \nabla \times \mathbf{F} = \left( \frac{\partial 0}{\partial y} - \frac{\partial Q}{\partial z} \right)\mathbf{i} + \left( \frac{\partial P}{\partial z} - \frac{\partial 0}{\partial x} \right)\mathbf{j} + \left( \frac{\partial Q}{\partial x} - \frac{\partial P}{\partial y} \right)\mathbf{k} $$
Since $\frac{\partial}{\partial z}$ of $Q$ and $P$ (which only depend on x,y) is zero, this simplifies to:
$$ \nabla \times \mathbf{F} = 0\mathbf{i} + 0\mathbf{j} + \left( \frac{\partial Q}{\partial x} - \frac{\partial P}{\partial y} \right)\mathbf{k} $$
Often, for 2D fields, we just refer to the scalar quantity $\frac{\partial Q}{\partial x} - \frac{\partial P}{\partial y}$ as the "curl" in a simplified sense, as it's the only non-zero component.

**The Test:**
If $\mathbf{F}$ is a vector field defined on a simply connected domain $D$, and $\nabla \times \mathbf{F} = \mathbf{0}$ (the zero vector), then **F** is conservative on $D$.

*   **What does "simply connected" mean?** It basically means the domain has no "holes" in it. Think of a disk versus a disk with a hole in the center. A simply connected domain is one where any closed loop can be continuously shrunk to a point within the domain. This condition is important for the converse of the theorem to hold, and it’s a common assumption in many problems, as found in our reference books.

*   **Important Caveat:** If $\nabla \times \mathbf{F} = \mathbf{0}$, and the domain is NOT simply connected (e.g., an annulus), the field might still NOT be conservative. However, if the domain IS simply connected, then $\nabla \times \mathbf{F} = \mathbf{0}$ is a reliable test for conservativeness.

**Checking our Example 1:**
**F**(x, y) = $\langle 2x, 2y \rangle$. So $P = 2x$ and $Q = 2y$.
$\frac{\partial Q}{\partial x} = \frac{\partial}{\partial x}(2y) = 0$.
$\frac{\partial P}{\partial y} = \frac{\partial}{\partial y}(2x) = 0$.
$\frac{\partial Q}{\partial x} - \frac{\partial P}{\partial y} = 0 - 0 = 0$.
Since the curl is zero and the domain (the entire xy-plane) is simply connected, **F** is indeed conservative.

**Example 2: Is this field conservative?**
Let **F**(x, y) = $\langle y, x \rangle$.
$P = y$, $Q = x$.
$\frac{\partial Q}{\partial x} = \frac{\partial}{\partial x}(x) = 1$.
$\frac{\partial P}{\partial y} = \frac{\partial}{\partial y}(y) = 1$.
$\frac{\partial Q}{\partial x} - \frac{\partial P}{\partial y} = 1 - 1 = 0$.
The curl is zero. The domain is the entire xy-plane (simply connected). Therefore, **F** is conservative.
Let's find the potential function $\phi$.
$\frac{\partial\phi}{\partial x} = P = y \implies \phi(x, y) = xy + g(y)$.
$\frac{\partial\phi}{\partial y} = \frac{\partial}{\partial y}(xy + g(y)) = x + g'(y)$.
We need this to equal $Q=x$. So, $x + g'(y) = x$, which means $g'(y) = 0$.
Integrating $g'(y)=0$ gives $g(y) = K$.
So, $\phi(x, y) = xy + K$. Let's take $\phi(x, y) = xy$.
Check: $\nabla(xy) = \langle \frac{\partial}{\partial x}(xy), \frac{\partial}{\partial y}(xy) \rangle = \langle y, x \rangle = \mathbf{F}$. Perfect!

**Example 3: A non-conservative field**
Let **F**(x, y) = $\langle -y, x \rangle$. (This is related to rotation, like a swirling fluid).
$P = -y$, $Q = x$.
$\frac{\partial Q}{\partial x} = \frac{\partial}{\partial x}(x) = 1$.
$\frac{\partial P}{\partial y} = \frac{\partial}{\partial y}(-y) = -1$.
$\frac{\partial Q}{\partial x} - \frac{\partial P}{\partial y} = 1 - (-1) = 2$.
Since the curl is $2\mathbf{k} \neq \mathbf{0}$, this field is NOT conservative.

This relates to **CO3** again. If we were asked to find the work done by **F** = $\langle -y, x \rangle$ moving around the unit circle $x^2+y^2=1$, we couldn't use the potential function shortcut. We would have to parameterize and integrate. Let's try it briefly: $C: \mathbf{r}(t) = \langle \cos t, \sin t \rangle$, $0 \le t \le 2\pi$. $d\mathbf{r} = \langle -\sin t, \cos t \rangle dt$.
$\mathbf{F}(\mathbf{r}(t)) = \langle -\sin t, \cos t \rangle$.
$\int_C \mathbf{F} \cdot d\mathbf{r} = \int_0^{2\pi} \langle -\sin t, \cos t \rangle \cdot \langle -\sin t, \cos t \rangle dt = \int_0^{2\pi} (\sin^2 t + \cos^2 t) dt = \int_0^{2\pi} 1 dt = [t]_0^{2\pi} = 2\pi$.
This result of $2\pi$ (not zero!) indicates a "circulation" around the circle, which is exactly what a non-zero curl implies.

#### Finding the Potential Function (When it IS Conservative)

If the curl test confirms that **F** is conservative, how do we systematically find the potential function $\phi$? We use the definitions: $P = \frac{\partial\phi}{\partial x}$, $Q = \frac{\partial\phi}{\partial y}$ (and $R = \frac{\partial\phi}{\partial z}$ in 3D).

Here’s the general procedure, often presented in textbooks like Kreyszig's *Advanced Engineering Mathematics*:

**Procedure to Find the Potential Function $\phi$ for a Conservative Field $\mathbf{F}$:**

1.  **Check for Conservativeness:** Calculate the curl of **F**. If $\nabla \times \mathbf{F} = \mathbf{0}$ (on a simply connected domain), then **F** is conservative.
2.  **Integrate $P$ with respect to $x$:** Assume $\mathbf{F} = P\mathbf{i} + Q\mathbf{j} + R\mathbf{k}$. Integrate $P(x, y, z)$ with respect to $x$ to get a preliminary form for $\phi$:
    $$ \phi(x, y, z) = \int P(x, y, z) \, dx + g(y, z) $$
    Here, $g(y, z)$ is an "integration constant" that can depend on $y$ and $z$, since we're treating $y$ and $z$ as constants during the $x$-integration.
3.  **Differentiate and Equate with $Q$:** Differentiate the expression for $\phi$ obtained in step 2 with respect to $y$, and set it equal to $Q(x, y, z)$:
    $$ \frac{\partial\phi}{\partial y} = \frac{\partial}{\partial y} \left( \int P \, dx \right) + \frac{\partial g}{\partial y} = Q(x, y, z) $$
    This gives you an equation involving $\frac{\partial g}{\partial y}$ and terms from $Q$.
4.  **Integrate $\frac{\partial g}{\partial y}$ to find $g(y, z)$:** Solve the equation from step 3 for $\frac{\partial g}{\partial y}$, and then integrate with respect to $y$ to find $g(y, z)$. Remember to add another "constant" $h(z)$ that can depend on $z$:
    $$ g(y, z) = \int \left( Q - \frac{\partial}{\partial y} \left( \int P \, dx \right) \right) \, dy + h(z) $$
5.  **Differentiate and Equate with $R$:** Now you have $\phi(x, y, z) = \left( \int P \, dx \right) + \left( \int \left( Q - \frac{\partial}{\partial y} \left( \int P \, dx \right) \right) \, dy \right) + h(z)$. Differentiate this entire expression for $\phi$ with respect to $z$, and set it equal to $R(x, y, z)$:
    $$ \frac{\partial\phi}{\partial z} = \frac{\partial}{\partial z} \left( \int P \, dx \right) + \frac{\partial}{\partial z} \left( \int \left( Q - \frac{\partial}{\partial y} \left( \int P \, dx \right) \right) \, dy \right) + \frac{dh}{dz} = R(x, y, z) $$
6.  **Integrate $\frac{dh}{dz}$ to find $h(z)$:** Solve the equation from step 5 for $\frac{dh}{dz}$, and then integrate with respect to $z$ to find $h(z)$. This will give you a final constant of integration.
7.  **Assemble $\phi$:** Substitute the found $g(y, z)$ and $h(z)$ back into the expression for $\phi$. You can always set the final constant of integration to zero.

**Example 4: Finding the potential function**
Let **F**(x, y, z) = $\langle y+z, x+z, x+y \rangle$.
Check curl:
$P = y+z$, $Q = x+z$, $R = x+y$.
$\frac{\partial R}{\partial y} = 1$, $\frac{\partial Q}{\partial z} = 1$. So $\frac{\partial R}{\partial y} - \frac{\partial Q}{\partial z} = 1-1=0$.
$\frac{\partial P}{\partial z} = 1$, $\frac{\partial R}{\partial x} = 1$. So $\frac{\partial P}{\partial z} - \frac{\partial R}{\partial x} = 1-1=0$.
$\frac{\partial Q}{\partial x} = 1$, $\frac{\partial P}{\partial y} = 1$. So $\frac{\partial Q}{\partial x} - \frac{\partial P}{\partial y} = 1-1=0$.
The curl is $\mathbf{0}$. The domain (all of $\mathbb{R}^3$) is simply connected. So, **F** is conservative.

Now, find $\phi$:
1.  Integrate $P=y+z$ with respect to $x$:
    $\phi(x, y, z) = \int (y+z) \, dx = yx + zx + g(y, z)$.

2.  Differentiate wrt $y$ and equate to $Q=x+z$:
    $\frac{\partial\phi}{\partial y} = x + \frac{\partial g}{\partial y}$.
    Set $x + \frac{\partial g}{\partial y} = x+z$.
    This implies $\frac{\partial g}{\partial y} = z$.

3.  Integrate $\frac{\partial g}{\partial y} = z$ wrt $y$:
    $g(y, z) = \int z \, dy = zy + h(z)$.

4.  Substitute $g(y, z)$ back into $\phi$:
    $\phi(x, y, z) = yx + zx + zy + h(z)$.

5.  Differentiate wrt $z$ and equate to $R=x+y$:
    $\frac{\partial\phi}{\partial z} = x + y + \frac{dh}{dz}$.
    Set $x + y + \frac{dh}{dz} = x+y$.
    This implies $\frac{dh}{dz} = 0$.

6.  Integrate $\frac{dh}{dz} = 0$ wrt $z$:
    $h(z) = K$ (a constant).

7.  Assemble $\phi$:
    $\phi(x, y, z) = yx + zx + zy + K$. We can choose $K=0$.
    So, $\phi(x, y, z) = xy + xz + yz$.

Let's verify:
$\nabla(xy + xz + yz) = \langle y+z, x+z, x+y \rangle$, which is indeed **F**.

#### Applications and Connections to Course Outcomes

This topic directly supports **CO3**: "Compute the derivatives and line integrals of vector functions and to learn their applications."
*   **Derivatives:** The entire concept of a conservative field is built on the gradient (a derivative). The curl is also a derivative operation.
*   **Line Integrals:** The Fundamental Theorem for Gradient Fields shows how to *compute* line integrals for conservative fields using the potential function, dramatically simplifying the process. This is a key application.
*   **Applications:**
    *   **Physics:** Work done by conservative forces (like gravity, electrostatic forces) is path-independent. If you lift an object, the work done against gravity depends only on the initial and final heights, not the path you took. This is a classic example and connects to physical science.
    *   **Electrical Science:** In electrostatics, the electric field is conservative. The electric potential (voltage) is the scalar potential function. The work done to move a charge between two points in an electric field depends only on the potential difference between those points. This is a direct link to electrical science applications. Understanding conservative fields is essential for understanding electric potential and fields. This also touches upon **CO1** by relating multivariable functions (potential) to physical concepts.

Let's think about **CO1**: "Compute the partial and total derivatives and maxima and minima of multivariable functions and to apply in engineering problems."
*   Finding the potential function $\phi$ involves repeated partial differentiation and integration, core skills for multivariable functions.
*   The condition for conservativeness ($\nabla \times \mathbf{F} = \mathbf{0}$) itself involves partial derivatives.
*   If we needed to find the maximum or minimum of a potential function $\phi$ (which might represent, say, potential energy), we would use techniques from **CO1** (setting partial derivatives to zero, using the Hessian matrix).

**Analogy for Electrical Science:**
Imagine a hilly terrain. The height at each point (x, y) is given by a function $h(x, y)$. The steepest slope and its direction at any point is given by the gradient of $h$, $\nabla h$. This gradient field is conservative because the "effort" to get from point A to point B is just the difference in height, $h(B) - h(A)$, regardless of the path. In electrical terms, $h(x,y)$ could be the electric potential (voltage) at each point. The electric field **E** is then given by **E** = $-\nabla h$ (note the negative sign for electric fields, representing forces on positive charges). Since $\nabla h$ is conservative, **E** is also conservative. The work done to move a charge $q$ from A to B is $q \times (\text{potential difference}) = q(h(B) - h(A))$. This is a direct application of the Fundamental Theorem for gradient fields.

#### Key Takeaways

*   A **conservative vector field** **F** is one that can be expressed as the gradient of a scalar function $\phi$ (the potential function): **F** = $\nabla\phi$.
*   The **Fundamental Theorem for Line Integrals** states that for a conservative field, $\int_C \mathbf{F} \cdot d\mathbf{r} = \phi(B) - \phi(A)$, where A and B are the endpoints of curve $C$. This implies **path independence**.
*   A key test for conservativeness (on a simply connected domain) is that the **curl of the field is zero**: $\nabla \times \mathbf{F} = \mathbf{0}$.
*   If a field is conservative, you can find its potential function by integrating its components and solving for the "unknown" functions of integration, using the gradient relationships.
*   Conservative fields are fundamental in physics (gravity, elasticity) and electrical science (electrostatics), where potential energy and electric potential are key concepts.

Remember these concepts, as they are foundational for understanding many physical phenomena and simplifying complex calculations.

---

### Sample Questions and Answers

**Conceptual Questions:**

1.  **Question:** What does it mean for a vector field to be conservative? Explain in your own words and provide the mathematical definition.
    **Answer:** A vector field is conservative if the work done by it in moving an object between two points is independent of the path taken. Mathematically, this means the field can be expressed as the gradient of a scalar potential function, $\mathbf{F} = \nabla\phi$. The key idea is that the field "conserves" some quantity, allowing for a shortcut in calculating line integrals.

2.  **Question:** State the Fundamental Theorem for Line Integrals and explain why it is so useful.
    **Answer:** The Fundamental Theorem for Line Integrals states that if $\mathbf{F}$ is a conservative vector field with potential function $\phi$, then $\int_C \mathbf{F} \cdot d\mathbf{r} = \phi(B) - \phi(A)$, where $A$ and $B$ are the endpoints of the curve $C$. This is useful because it allows us to calculate line integrals without parameterizing the curve, simply by evaluating the potential function at the start and end points. This significantly simplifies work done calculations in physics and electrical science.

3.  **Question:** How can you check if a vector field $\mathbf{F}(x, y, z) = P\mathbf{i} + Q\mathbf{j} + R\mathbf{k}$ is conservative, assuming its domain is $\mathbb{R}^3$?
    **Answer:** You can check if the curl of the vector field is the zero vector, i.e., $\nabla \times \mathbf{F} = \mathbf{0}$. For a 3D field, this means all three components of the curl must be zero:
    $\frac{\partial R}{\partial y} - \frac{\partial Q}{\partial z} = 0$
    $\frac{\partial P}{\partial z} - \frac{\partial R}{\partial x} = 0$
    $\frac{\partial Q}{\partial x} - \frac{\partial P}{\partial y} = 0$
    If all these conditions are met, and the domain is simply connected (like $\mathbb{R}^3$), then the field is conservative.

**Exam-Oriented Questions:**

4.  **Question:** Determine if the vector field $\mathbf{F}(x, y) = \langle 2xy, x^2 - e^y \rangle$ is conservative. If it is, find its potential function.
    **Solution:**
    Let $P(x, y) = 2xy$ and $Q(x, y) = x^2 - e^y$.
    First, we check the curl (in 2D, this is $\frac{\partial Q}{\partial x} - \frac{\partial P}{\partial y}$).
    $\frac{\partial Q}{\partial x} = \frac{\partial}{\partial x}(x^2 - e^y) = 2x$.
    $\frac{\partial P}{\partial y} = \frac{\partial}{\partial y}(2xy) = 2x$.
    Since $\frac{\partial Q}{\partial x} - \frac{\partial P}{\partial y} = 2x - 2x = 0$, and the domain is the entire $xy$-plane (simply connected), the field $\mathbf{F}$ is conservative.

    Now, we find the potential function $\phi(x, y)$ such that $\nabla\phi = \mathbf{F}$.
    From $\frac{\partial\phi}{\partial x} = P = 2xy$:
    $\phi(x, y) = \int 2xy \, dx = x^2y + g(y)$. (Integrating wrt x, treating y as constant).

    Now, differentiate this $\phi$ with respect to $y$ and set it equal to $Q$:
    $\frac{\partial\phi}{\partial y} = \frac{\partial}{\partial y}(x^2y + g(y)) = x^2 + g'(y)$.
    We require this to be equal to $Q = x^2 - e^y$.
    So, $x^2 + g'(y) = x^2 - e^y$.
    This implies $g'(y) = -e^y$.

    Integrate $g'(y)$ with respect to $y$ to find $g(y)$:
    $g(y) = \int -e^y \, dy = -e^y + K$. (K is the constant of integration).

    Substitute $g(y)$ back into the expression for $\phi$:
    $\phi(x, y) = x^2y - e^y + K$.
    We can choose $K=0$ for simplicity.
    Therefore, the potential function is $\phi(x, y) = x^2y - e^y$.

5.  **Question:** Evaluate the line integral $\int_C \mathbf{F} \cdot d\mathbf{r}$ where $\mathbf{F}(x, y) = \langle y\cos x, \sin x \rangle$ and $C$ is the curve $y = x^2$ from $(0,0)$ to $(1,1)$.
    **Solution:**
    Let $P(x, y) = y\cos x$ and $Q(x, y) = \sin x$.
    Check for conservativeness:
    $\frac{\partial Q}{\partial x} = \frac{\partial}{\partial x}(\sin x) = \cos x$.
    $\frac{\partial P}{\partial y} = \frac{\partial}{\partial y}(y\cos x) = \cos x$.
    Since $\frac{\partial Q}{\partial x} - \frac{\partial P}{\partial y} = \cos x - \cos x = 0$, and the domain (entire plane) is simply connected, $\mathbf{F}$ is conservative.

    Now, find the potential function $\phi(x, y)$.
    From $\frac{\partial\phi}{\partial x} = P = y\cos x$:
    $\phi(x, y) = \int y\cos x \, dx = y\sin x + g(y)$.

    Differentiate with respect to $y$ and set equal to $Q$:
    $\frac{\partial\phi}{\partial y} = \frac{\partial}{\partial y}(y\sin x + g(y)) = \sin x + g'(y)$.
    We require this to be equal to $Q = \sin x$.
    So, $\sin x + g'(y) = \sin x$.
    This implies $g'(y) = 0$.

    Integrate $g'(y)$ with respect to $y$:
    $g(y) = \int 0 \, dy = K$.

    So, the potential function is $\phi(x, y) = y\sin x + K$. Let's take $\phi(x, y) = y\sin x$.

    Now, use the Fundamental Theorem for Line Integrals. The curve $C$ goes from $A=(0,0)$ to $B=(1,1)$.
    $\int_C \mathbf{F} \cdot d\mathbf{r} = \phi(B) - \phi(A) = \phi(1,1) - \phi(0,0)$.
    $\phi(1,1) = (1)\sin(1) = \sin(1)$.
    $\phi(0,0) = (0)\sin(0) = 0$.

    Therefore, the line integral is $\sin(1) - 0 = \sin(1)$.

    *(Note: $\sin(1)$ here refers to the sine of 1 radian, approximately 0.841).*

This concludes our discussion on conservative vector fields. Keep practicing finding potential functions and using the fundamental theorem – it's a key skill!

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=WUvTyaaNkzM) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=7UJ4CFR1894) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=S0hG_mS9bV4) |
