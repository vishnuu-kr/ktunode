---
title: "Concept of scalar and vector fields"
subject: "MATHEMATICS FOR ELECTRICAL SCIENCE AND PHYSICAL SCIENCE - 2"
module: "Module 3: Vector valued function of single variable "
branch: "Electrical and Electronics Engineering"
semester: 2
topicId: "68bd213f9ece2bdd875f9837"
status: "completed"
scrapedAt: "2026-05-23T16:08:12.148Z"
---
# MATHEMATICS FOR ELECTRICAL SCIENCE AND PHYSICAL SCIENCE - 2
## Module 3: Vector Valued Functions of a Single Variable

### Topic: Concept of Scalar and Vector Fields

Welcome everyone! In this module, we're going to dive into the fascinating world of vector-valued functions, which are fundamental to understanding many phenomena in electrical science and physical science. Today, we’re starting with a foundational concept: scalar and vector fields. Think of these as the languages we use to describe how physical quantities vary across space and time.

#### 3.1 What is a Field? The Big Picture

Before we get into specifics, let’s establish what we mean by a "field" in mathematics and physics. A field, in this context, is essentially a way of assigning a mathematical object (like a number or a vector) to every point in a region of space. This region could be a simple line, a 2D plane, or even our familiar 3D space, and it can also vary with time.

**Why are fields so important?** Imagine trying to describe the temperature across a room. You wouldn't want to write down the temperature at every single point individually; that would be an endless task! Instead, we use a *scalar field* to represent this. Or, consider the wind velocity at different locations in the atmosphere. This requires not just a magnitude (speed) but also a direction, which naturally leads us to *vector fields*.

These concepts are absolutely crucial for our course. Understanding fields will directly help us with **Course Outcome 1 (CO1)** as we analyze how quantities change, and it forms the bedrock for **Course Outcome 3 (CO3)** and **Course Outcome 4 (CO4)** when we start dealing with derivatives and integrals of these functions in space.

#### 3.2 Scalar Fields: Assigning a Number to Every Point

Let's start with the simpler of the two: **scalar fields**.

**Definition:** A scalar field is a function that assigns a single real number (a scalar) to each point in a given space. If our space is denoted by $S$, then a scalar field $f$ is a function $f: S \to \mathbb{R}$.

Think about these examples:

*   **Temperature Distribution:** In your house, the temperature at any given point (x, y, z) in the room can be described by a scalar value, say $T(x, y, z)$. So, $T$ is a scalar field. You can walk from one corner of the room to another, and the temperature might change.
*   **Pressure:** The atmospheric pressure at different locations on Earth is another scalar field, $P(x, y, z)$. It's just a number, but it tells you something important about the state of the atmosphere at that point.
*   **Electric Potential:** In electromagnetism, the electric potential, often denoted by $V$, at any point in space around charges is a scalar quantity. So, $V(x, y, z)$ is a scalar field. This is a direct link to our electrical science studies! (See Anton, Biven, Davis, Chapter 14, for excellent coverage of scalar fields and their applications in physics.)
*   **Density:** The density of a non-uniform object, like a piece of metal with varying composition, can be described by a scalar field $\rho(x, y, z)$.

In simpler terms, a scalar field tells you "how much" of something there is at each point, without any directional information. It’s like painting a picture where each pixel has a specific color intensity, but not a direction.

**Mathematical Representation:**
If we are working in 3D Euclidean space, a point is represented by its coordinates $(x, y, z)$. A scalar field $f$ then can be written as $f(x, y, z)$. If we are in 2D, it's $f(x, y)$, and in 1D (like along a wire), it's $f(x)$.

**Example:** Consider the temperature in a square metal plate defined by $0 \le x \le 10$ and $0 \le y \le 10$. If the temperature distribution is given by $T(x, y) = x^2 + y^2$, then at the point (2, 3), the temperature is $T(2, 3) = 2^2 + 3^2 = 4 + 9 = 13$ units. This function $T(x, y)$ is a scalar field describing the temperature across the plate.

#### 3.3 Vector Fields: Assigning a Vector to Every Point

Now, let's move to **vector fields**. These are a bit richer because they not only have magnitude but also direction.

**Definition:** A vector field is a function that assigns a vector to each point in a given space. If our space is $S$, then a vector field $\mathbf{F}$ is a function $\mathbf{F}: S \to V$, where $V$ is a vector space. For most of our purposes in this course, $S$ will be a subset of $\mathbb{R}^n$ (usually $\mathbb{R}^2$ or $\mathbb{R}^3$) and $V$ will be $\mathbb{R}^n$ as well.

Think about these real-world examples:

*   **Wind Velocity:** Imagine the wind blowing across a landscape. At each point in the atmosphere, the wind has a speed and a direction. This is perfectly described by a vector field, where at each point $(x, y, z)$ we assign a velocity vector $\mathbf{v}(x, y, z)$. This is vital for meteorology and fluid dynamics.
*   **Gravitational Force:** Every object with mass exerts a gravitational pull on every other object. If we consider the Earth, the gravitational force exerted on a small test mass at any point in space around the Earth can be described by a vector field. The force vector points towards the center of the Earth, and its magnitude depends on the distance. (This is beautifully explained in physics textbooks, and the mathematical description often uses vector fields.)
*   **Electric Field:** This is a cornerstone of electrical science! The electric field $\mathbf{E}$ at any point in space around electric charges is a vector that indicates the force per unit positive charge at that point. So, $\mathbf{E}(x, y, z)$ is a vector field. The direction of $\mathbf{E}$ tells us the direction a positive test charge would be pushed, and its magnitude tells us how strong that push is. (This is covered extensively in chapters on electromagnetism in physics texts and is related to scalar fields via $\mathbf{E} = -\nabla V$ if a scalar potential $V$ exists).
*   **Magnetic Field:** Similarly, the magnetic field $\mathbf{B}$ around magnets or currents is a vector field, $\mathbf{B}(x, y, z)$. The direction of $\mathbf{B}$ is given by the direction a compass needle would point.
*   **Fluid Flow:** In a river, the velocity of the water at every point can be described by a vector field. Some parts of the river might flow faster than others, and the direction can change.

**Mathematical Representation:**
In 3D space, a vector field $\mathbf{F}$ is typically written in terms of its component functions:
$\mathbf{F}(x, y, z) = P(x, y, z)\mathbf{i} + Q(x, y, z)\mathbf{j} + R(x, y, z)\mathbf{k}$
Here, $P, Q, R$ are scalar functions of $x, y, z$. At each point $(x, y, z)$, the value of $\mathbf{F}$ is a vector whose components are given by $P, Q, R$.

**Example:** Consider a 2D flow field in the $xy$-plane given by $\mathbf{F}(x, y) = y\mathbf{i} - x\mathbf{j}$.
At the point (1, 0), $\mathbf{F}(1, 0) = 0\mathbf{i} - 1\mathbf{j} = -\mathbf{j}$. This means at (1, 0), the field is pointing downwards with a magnitude of 1.
At the point (0, 1), $\mathbf{F}(0, 1) = 1\mathbf{i} - 0\mathbf{j} = \mathbf{i}$. At (0, 1), the field is pointing to the right with a magnitude of 1.
If you plot these vectors at various points, you'd see a swirling pattern, which is characteristic of this particular vector field. (Thomas' Calculus, Chapter 16, is excellent for visualizing and working with vector fields in multiple dimensions.)

**Connection to Course Outcomes:**
*   **CO1:** Understanding how quantities like temperature or potential *vary* across space is directly related to analyzing scalar fields. When we look at how these scalar fields change from point to point, we’re using concepts that lead to partial derivatives.
*   **CO3:** Vector fields are the direct subject of CO3. Computing derivatives of vector functions (like the divergence and curl, which we'll get to later) and line integrals *along* these fields are core components of this outcome. For instance, the electric field $\mathbf{E}$ is a vector field, and we'll study how to calculate the work done by this field along a path, which is a line integral.
*   **CO4:** Surface and volume integrals are often applied to vector fields as well, for example, calculating the flux of a vector field through a surface.

#### 3.4 Visualizing Fields: Making the Abstract Concrete

The abstract definitions are clear, but visualizing these fields is key to building intuition.

**Visualizing Scalar Fields:**
For 2D scalar fields $f(x, y)$, we can think of them in a few ways:
1.  **Contour Maps (Level Curves):** Just like topographic maps use contour lines to show points of equal elevation, we can draw *level curves* (or contours) for scalar fields. A level curve for $f(x, y) = c$ connects all points $(x, y)$ where the scalar value is $c$.
    *   **Example:** For $T(x, y) = x^2 + y^2$, the level curves are circles centered at the origin. $T=1$ is $x^2+y^2=1$, $T=4$ is $x^2+y^2=4$, and so on. These circles represent points of constant temperature. (See Bird’s Higher Engineering Mathematics for examples of visualizing scalar functions.)
2.  **3D Surface:** We can plot the scalar field as a surface in 3D space, where the height of the surface at point $(x, y)$ is given by $z = f(x, y)$. This gives us a "landscape" of values.

**Visualizing Vector Fields:**
This is where things get really interesting. For a vector field $\mathbf{F}(x, y, z)$, we draw an arrow (a vector) at each point $(x, y, z)$ in space. The arrow's direction is the direction of the field, and its length is proportional to the magnitude of the field at that point.

*   **Example (Flow):** Imagine a 2D velocity field $\mathbf{v}(x, y)$. If we draw small arrows at various points, we can see how the fluid is moving. For $\mathbf{F}(x, y) = y\mathbf{i} - x\mathbf{j}$ we saw earlier, the vectors form a pattern rotating counter-clockwise around the origin.
*   **Streamlines:** For fluid flow or fields representing directional quantities, *streamlines* are curves that are everywhere tangent to the vector field. If you imagine floating in a river, your path would be a streamline. (Kreyszig’s Advanced Engineering Mathematics has excellent graphical representations of vector fields and streamlines.)

#### 3.5 Relationships: How Scalar and Vector Fields Connect

The most important connection we’ll explore in this module is how scalar and vector fields are related through differentiation.

*   **Gradient of a Scalar Field:** The *gradient* of a scalar field $f$ produces a vector field. The gradient vector at any point points in the direction of the greatest rate of increase of the scalar field, and its magnitude is that rate of increase.
    *   In 3D, $\nabla f = \frac{\partial f}{\partial x}\mathbf{i} + \frac{\partial f}{\partial y}\mathbf{j} + \frac{\partial f}{\partial z}\mathbf{k}$.
    *   **Connection to CO1 and CO3:** This is a direct application of partial derivatives (CO1) and generates a vector field, which is the subject of CO3. For instance, if $f$ is temperature, $\nabla f$ tells you the direction in which the temperature is rising fastest.
*   **Relationship to Electric Potential:** As mentioned, the electric field $\mathbf{E}$ is the negative gradient of the electric potential $V$: $\mathbf{E} = -\nabla V$. So, a scalar field (potential) can generate a vector field (electric field). This is a fundamental concept in electromagnetism.

We’ll also see later that vector fields can be differentiated to produce other scalar or vector fields (e.g., divergence and curl).

#### 3.6 Why This Matters in Your Studies (Exam Focus)

Understanding scalar and vector fields isn't just theoretical; it's the language of many physical laws.

*   **For Electrical Science:** Electric potential ($V$) is a scalar field. Electric field ($\mathbf{E}$) is a vector field derived from $V$. Magnetic potential and field are also described using these concepts. We'll use line integrals of $\mathbf{E}$ to find voltage differences, and flux integrals (related to surface integrals of $\mathbf{B}$) are crucial for Faraday's Law.
*   **For Physical Science:** Temperature, pressure, density (scalar fields); wind velocity, gravitational force, fluid flow (vector fields) are all modeled using these mathematical tools. Concepts like flux, divergence, and curl (which we'll cover) are essential for understanding conservation laws and field behavior.

**Common Pitfalls to Avoid:**
*   **Confusing Scalar and Vector:** Always be clear whether you're dealing with a magnitude (scalar) or a magnitude with direction (vector).
*   **Dimensionality:** Pay attention to whether you're working in 1D, 2D, or 3D space. The notation and formulas change accordingly.
*   **Visualization:** Don't shy away from trying to sketch or visualize the fields. It makes the abstract concrete.

**Key Takeaway:** Fields are functions that assign mathematical objects (scalars or vectors) to points in space. Scalar fields describe quantities with magnitude only, while vector fields describe quantities with both magnitude and direction. Their relationship through differentiation is central to understanding many physical phenomena.

---

### Sample Questions and Answers

**Q1. Conceptual Understanding:**
Explain the difference between a scalar field and a vector field using a real-world analogy.

**Answer:**
Imagine you're standing in a park on a warm day.
*   A **scalar field** would be like the **temperature** at every point in the park. If you pick any spot, you can assign a single number representing the temperature there (e.g., 25°C). The temperature itself doesn't have a direction.
*   A **vector field** would be like the **wind velocity** at every point in the park. At any given spot, the wind has a speed (how fast it's blowing) and a direction (which way it's blowing). So, at each point, you assign a vector (e.g., 10 km/h North-West).

**Q2. Mathematical Identification:**
Is the function $f(x, y) = e^{-x^2 - y^2}$ a scalar field or a vector field? Justify your answer.

**Answer:**
The function $f(x, y) = e^{-x^2 - y^2}$ is a **scalar field**.
**Justification:** For any given point $(x, y)$ in the $xy$-plane, this function assigns a single real number. The output of the function is a scalar value (e.g., at (0,0), $f(0,0) = e^0 = 1$; at (1,0), $f(1,0) = e^{-1}$). It does not assign a direction or a vector quantity.

**Q3. Application to Physics/Engineering:**
The electric potential $V(x, y, z)$ in a certain region of space is given by $V(x, y, z) = 5x^2 + 2y^2 - 3z$.
(a) Is $V$ a scalar field or a vector field?
(b) If the electric field $\mathbf{E}$ is related to the potential by $\mathbf{E} = -\nabla V$, what is the electric field vector in this region?

**Answer:**
(a) $V(x, y, z) = 5x^2 + 2y^2 - 3z$ assigns a single real number (potential) to each point $(x, y, z)$ in space. Therefore, $V$ is a **scalar field**.

(b) To find the electric field $\mathbf{E}$, we need to compute the gradient of $V$ and then negate it.
The gradient $\nabla V$ is given by:
$\nabla V = \frac{\partial V}{\partial x}\mathbf{i} + \frac{\partial V}{\partial y}\mathbf{j} + \frac{\partial V}{\partial z}\mathbf{k}$

Let's compute the partial derivatives:
$\frac{\partial V}{\partial x} = \frac{\partial}{\partial x}(5x^2 + 2y^2 - 3z) = 10x$
$\frac{\partial V}{\partial y} = \frac{\partial}{\partial y}(5x^2 + 2y^2 - 3z) = 4y$
$\frac{\partial V}{\partial z} = \frac{\partial}{\partial z}(5x^2 + 2y^2 - 3z) = -3$

So, $\nabla V = 10x\mathbf{i} + 4y\mathbf{j} - 3\mathbf{k}$.

Now, we find $\mathbf{E}$:
$\mathbf{E} = -\nabla V = -(10x\mathbf{i} + 4y\mathbf{j} - 3\mathbf{k})$
$\mathbf{E} = -10x\mathbf{i} - 4y\mathbf{j} + 3\mathbf{k}$

The electric field vector in this region is $\mathbf{E}(x, y, z) = -10x\mathbf{i} - 4y\mathbf{j} + 3\mathbf{k}$. This shows how a scalar field (potential) can define a vector field (electric field), directly linking to CO1 and CO3.

**Q4. Visual Interpretation:**
Consider a 2D vector field $\mathbf{F}(x, y) = x\mathbf{i} + y\mathbf{j}$. Describe what this field looks like and what it might represent physically.

**Answer:**
The vector field is $\mathbf{F}(x, y) = x\mathbf{i} + y\mathbf{j}$.
Let's look at a few points:
*   At (1, 0): $\mathbf{F}(1, 0) = 1\mathbf{i} + 0\mathbf{j} = \mathbf{i}$. A vector pointing right.
*   At (0, 1): $\mathbf{F}(0, 1) = 0\mathbf{i} + 1\mathbf{j} = \mathbf{j}$. A vector pointing up.
*   At (2, 2): $\mathbf{F}(2, 2) = 2\mathbf{i} + 2\mathbf{j}$. A vector pointing diagonally up-right, twice as long as the vector at (1,1).
*   At (-1, -1): $\mathbf{F}(-1, -1) = -1\mathbf{i} - 1\mathbf{j}$. A vector pointing diagonally down-left.

**Visual Description:**
If you plot these vectors, you'll see that at every point $(x, y)$, the vector points directly away from the origin $(0,0)$, and its length is equal to the distance from the origin to $(x, y)$. The vectors essentially "radiate" outwards from the origin.

**Physical Representation:**
This vector field is often used to represent:
1.  **Radial outward flow:** Imagine a source at the origin from which fluid is flowing radially outwards in all directions. The velocity vector at each point would be proportional to its distance from the source, pointing away from it.
2.  **Gravitational or Electric Field from a point source (in some contexts):** While the direction might be inverted for attraction, the radial nature is similar. For instance, a field that gets weaker as you move away from a central point might have a magnitude proportional to $1/r$, but the direction is still radial. In this specific case $F(x,y) = \langle x,y \rangle$, the magnitude is $\sqrt{x^2+y^2}$, which is the distance from the origin. This doesn't represent a typical inverse-square law, but it illustrates the concept of a radially directed field.

This type of visualization helps understand the directional behavior of physical quantities, linking directly to the application aspect of CO3.
