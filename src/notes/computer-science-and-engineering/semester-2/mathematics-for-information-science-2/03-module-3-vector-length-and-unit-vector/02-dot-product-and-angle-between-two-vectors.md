---
title: "Dot product and angle between two vectors"
subject: "MATHEMATICS FOR INFORMATION SCIENCE – 2"
module: "Module 3: Vector length and unit vector"
branch: "Computer Science and Engineering"
semester: 2
topicId: "68b45b6e58474a0b135b5d1c"
status: "completed"
scrapedAt: "2026-05-20T16:34:41.624Z"
---
## Mathematics for Information Science – 2

**Module 3: Vector Length and Unit Vectors**

### Topic: The Dot Product and the Angle Between Two Vectors

Hello everyone, and welcome back to our exploration of vectors! In this session, we're going to build on our understanding of vector length and unit vectors by introducing a fundamental operation: the **dot product**. This operation is incredibly powerful, allowing us to understand how two vectors relate to each other in terms of direction. It's a cornerstone concept, not just in mathematics, but especially in fields like Information Science, where we often deal with data represented as vectors. Think about how we compare documents, analyze user preferences, or even train machine learning models – the dot product plays a crucial role in many of these.

Before we dive in, let's quickly recap what we've covered. We understand vectors as quantities with both magnitude (length) and direction. We know how to calculate their length using the Pythagorean theorem, and we know how to normalize a vector to get a unit vector, which only tells us about direction. Today, we're going to quantify the *relationship* between two directions.

#### What is the Dot Product?

So, what exactly is this "dot product"? Imagine you have two vectors, let's call them $\mathbf{a}$ and $\mathbf{b}$. The dot product, also known as the **scalar product** because it results in a single number (a scalar), is defined in two primary ways, and the beauty is, these two definitions are perfectly consistent.

**Definition 1: The Algebraic Definition**

This is the definition you'll most often use for calculations, especially when your vectors are given in component form. If we have a 2D vector $\mathbf{a} = \begin{pmatrix} a_1 \\ a_2 \end{pmatrix}$ and a 2D vector $\mathbf{b} = \begin{pmatrix} b_1 \\ b_2 \end{pmatrix}$, their dot product, denoted by $\mathbf{a} \cdot \mathbf{b}$, is calculated by multiplying their corresponding components and summing the results:

$$ \mathbf{a} \cdot \mathbf{b} = a_1 b_1 + a_2 b_2 $$

Let's extend this to three dimensions. If $\mathbf{a} = \begin{pmatrix} a_1 \\ a_2 \\ a_3 \end{pmatrix}$ and $\mathbf{b} = \begin{pmatrix} b_1 \\ b_2 \\ b_3 \end{pmatrix}$, then:

$$ \mathbf{a} \cdot \mathbf{b} = a_1 b_1 + a_2 b_2 + a_3 b_3 $$

In general, for n-dimensional vectors $\mathbf{a} = \begin{pmatrix} a_1 \\ a_2 \\ \vdots \\ a_n \end{pmatrix}$ and $\mathbf{b} = \begin{pmatrix} b_1 \\ b_2 \\ \vdots \\ b_n \end{pmatrix}$:

$$ \mathbf{a} \cdot \mathbf{b} = \sum_{i=1}^{n} a_i b_i $$

This is the formula you'll use most often when you're given vectors like $\mathbf{u} = \langle 2, 3 \rangle$ and $\mathbf{v} = \langle -1, 4 \rangle$. Their dot product is $\mathbf{u} \cdot \mathbf{v} = (2)(-1) + (3)(4) = -2 + 12 = 10$. Simple enough, right?

**Connection to Course Outcomes:** This algebraic definition is directly tied to **CO1** as it's a fundamental arithmetic operation performed on vector components, which are essential for understanding matrix operations and systems of linear equations. It also forms the basis for calculations in **CO3** as we move towards inner product spaces.

**Definition 2: The Geometric Definition**

Now, for the more insightful part! The dot product also has a geometric interpretation that connects it directly to the lengths of the vectors and the angle between them. If $\theta$ is the angle between vectors $\mathbf{a}$ and $\mathbf{b}$ (where $0^\circ \le \theta \le 180^\circ$ or $0 \le \theta \le \pi$ radians), then the dot product is given by:

$$ \mathbf{a} \cdot \mathbf{b} = \|\mathbf{a}\| \|\mathbf{b}\| \cos \theta $$

Here, $\|\mathbf{a}\|$ and $\|\mathbf{b}\|$ represent the lengths (or magnitudes) of vectors $\mathbf{a}$ and $\mathbf{b}$ respectively, which we learned about in our previous sessions.

**Why is this important?** This geometric definition reveals the true power of the dot product. It tells us how much one vector "aligns" with another. The $\cos \theta$ term is crucial here.
*   If $\theta = 0^\circ$ (vectors point in the same direction), $\cos \theta = 1$, and $\mathbf{a} \cdot \mathbf{b} = \|\mathbf{a}\| \|\mathbf{b}\|$. The dot product is maximized.
*   If $\theta = 90^\circ$ (vectors are perpendicular or orthogonal), $\cos \theta = 0$, and $\mathbf{a} \cdot \mathbf{b} = 0$. This is a very important result!
*   If $\theta = 180^\circ$ (vectors point in opposite directions), $\cos \theta = -1$, and $\mathbf{a} \cdot \mathbf{b} = -\|\mathbf{a}\| \|\mathbf{b}\|$. The dot product is minimized (most negative).

**An Everyday Analogy:**
Imagine you're pushing a box across a floor.
*   **Vector $\mathbf{a}$** could be the direction and magnitude of your push (force).
*   **Vector $\mathbf{b}$** could be the direction of motion of the box.

The dot product $\mathbf{a} \cdot \mathbf{b}$ tells you how much of your pushing effort is actually contributing to moving the box forward.
*   If you push *exactly* in the direction the box is moving, all your effort contributes ( $\theta = 0^\circ$).
*   If you push from the side, perpendicular to the motion, none of your push helps move the box forward ( $\theta = 90^\circ$). Your dot product here is zero, meaning your force has no component in the direction of displacement.
*   If you push *against* the direction of motion, your push works against the movement, and the dot product will be negative.

This analogy, drawing from physics, is a classic way to introduce the dot product's geometric meaning. It elegantly captures how the angle between two vectors influences their combined effect.

**Connection to Course Outcomes:** This geometric definition directly relates to **CO3** as it introduces the concept of "inner product spaces." The dot product is the most common inner product. Understanding the angle is crucial for applications like orthonormalization and understanding the relationship between vectors in higher dimensions, which are key to **CO3**. It also supports **CO2** by providing a way to understand the "alignment" of vectors within a vector space.

#### Finding the Angle Between Two Vectors

The geometric definition of the dot product gives us a fantastic way to find the angle between two vectors, provided we know their components (so we can calculate the dot product algebraically) and their lengths. We can rearrange the formula:

$$ \mathbf{a} \cdot \mathbf{b} = \|\mathbf{a}\| \|\mathbf{b}\| \cos \theta $$

To find $\cos \theta$, we simply divide both sides by $\|\mathbf{a}\| \|\mathbf{b}\|$:

$$ \cos \theta = \frac{\mathbf{a} \cdot \mathbf{b}}{\|\mathbf{a}\| \|\mathbf{b}\|} $$

And then, to get the angle $\theta$ itself, we use the inverse cosine function (arccosine):

$$ \theta = \arccos \left( \frac{\mathbf{a} \cdot \mathbf{b}}{\|\mathbf{a}\| \|\mathbf{b}\|} \right) $$

**Important Note:** For this formula to work, neither $\mathbf{a}$ nor $\mathbf{b}$ can be the zero vector. If either vector is the zero vector, the angle between them is undefined.

**Example:**
Let's find the angle between $\mathbf{u} = \begin{pmatrix} 1 \\ 2 \end{pmatrix}$ and $\mathbf{v} = \begin{pmatrix} 3 \\ 1 \end{pmatrix}$.

1.  **Calculate the dot product:**
    $$ \mathbf{u} \cdot \mathbf{v} = (1)(3) + (2)(1) = 3 + 2 = 5 $$

2.  **Calculate the lengths of the vectors:**
    $$ \|\mathbf{u}\| = \sqrt{1^2 + 2^2} = \sqrt{1 + 4} = \sqrt{5} $$
    $$ \|\mathbf{v}\| = \sqrt{3^2 + 1^2} = \sqrt{9 + 1} = \sqrt{10} $$

3.  **Use the formula for $\cos \theta$:**
    $$ \cos \theta = \frac{\mathbf{u} \cdot \mathbf{v}}{\|\mathbf{u}\| \|\mathbf{v}\|} = \frac{5}{\sqrt{5} \sqrt{10}} = \frac{5}{\sqrt{50}} = \frac{5}{5\sqrt{2}} = \frac{1}{\sqrt{2}} $$

4.  **Find the angle $\theta$:**
    $$ \theta = \arccos \left( \frac{1}{\sqrt{2}} \right) = 45^\circ \quad \text{or} \quad \frac{\pi}{4} \text{ radians} $$

So, the angle between these two vectors is $45^\circ$. They are neither perfectly aligned nor perpendicular.

**Common Pitfalls and Exam Tips:**
*   **Units:** Be consistent with degrees or radians. Most calculators default to degrees, but in many mathematical contexts, radians are preferred.
*   **Zero Vector:** Always check if either vector is the zero vector before calculating the angle.
*   **Division by Zero:** The denominator $\|\mathbf{a}\| \|\mathbf{b}\|$ will be zero if either vector is the zero vector.
*   **Quadrant for $\theta$:** The $\arccos$ function on most calculators returns an angle between $0^\circ$ and $180^\circ$ (or 0 and $\pi$ radians), which is exactly what we need for the angle between two vectors. You don't need to worry about other quadrants here.

**Connection to Course Outcomes:** This calculation is a direct application of the concepts in **CO3**. Finding the angle is a fundamental operation in inner product spaces and is used in projections and understanding vector relationships. It also builds on **CO1** by requiring scalar calculations with vector components.

#### Properties of the Dot Product

The dot product, like other mathematical operations, has several useful properties that make calculations and proofs easier. Let $\mathbf{a}$, $\mathbf{b}$, and $\mathbf{c}$ be vectors and $k$ be a scalar.

1.  **Commutativity:** The order doesn't matter.
    $$ \mathbf{a} \cdot \mathbf{b} = \mathbf{b} \cdot \mathbf{a} $$
    This is clear from the algebraic definition: $a_1 b_1 + a_2 b_2 = b_1 a_1 + b_2 a_2$.

2.  **Distributivity over vector addition:**
    $$ \mathbf{a} \cdot (\mathbf{b} + \mathbf{c}) = \mathbf{a} \cdot \mathbf{b} + \mathbf{a} \cdot \mathbf{c} $$
    This property is crucial for simplifying expressions involving sums of vectors. Think of it like multiplying a number across a parenthesis: $x(y+z) = xy + xz$.

3.  **Scalar Multiplication:**
    $$ (k\mathbf{a}) \cdot \mathbf{b} = k(\mathbf{a} \cdot \mathbf{b}) = \mathbf{a} \cdot (k\mathbf{b}) $$
    You can pull a scalar factor out of the dot product. This means $(3\mathbf{a}) \cdot \mathbf{b}$ is the same as $3(\mathbf{a} \cdot \mathbf{b})$.

4.  **Dot product with itself:**
    $$ \mathbf{a} \cdot \mathbf{a} = \|\mathbf{a}\|^2 $$
    This is a very important property! Let's see why:
    If $\mathbf{a} = \begin{pmatrix} a_1 \\ a_2 \end{pmatrix}$, then $\mathbf{a} \cdot \mathbf{a} = a_1(a_1) + a_2(a_2) = a_1^2 + a_2^2$.
    And we know that $\|\mathbf{a}\| = \sqrt{a_1^2 + a_2^2}$, so $\|\mathbf{a}\|^2 = a_1^2 + a_2^2$. They are indeed equal!
    This property allows us to calculate the squared length of a vector without explicitly taking the square root until the very end, which can sometimes simplify calculations. It also directly links the dot product to the magnitude.

**Connection to Course Outcomes:** These properties are fundamental to working with inner product spaces (**CO3**). They allow us to manipulate vector expressions and are essential for proofs and derivations in linear algebra. For example, understanding these properties is key to proving that vectors are orthogonal, a core concept in **CO3**.

#### Orthogonality (Perpendicular Vectors)

We saw this earlier, but it deserves its own section because it's such a significant consequence of the dot product.
Two non-zero vectors $\mathbf{a}$ and $\mathbf{b}$ are **orthogonal** (or perpendicular) if and only if their dot product is zero.

$$ \mathbf{a} \perp \mathbf{b} \iff \mathbf{a} \cdot \mathbf{b} = 0 $$

This is derived directly from the geometric definition: $\mathbf{a} \cdot \mathbf{b} = \|\mathbf{a}\| \|\mathbf{b}\| \cos \theta$. For this product to be zero (and assuming $\|\mathbf{a}\|$ and $\|\mathbf{b}\|$ are non-zero), $\cos \theta$ must be zero, which happens when $\theta = 90^\circ$ (or $\pi/2$ radians).

**Example in Information Science Context:**
Consider two documents represented by feature vectors. For example, a document's "signature" might be a vector where each component represents the frequency of a specific word in the document.
Let $\mathbf{d}_1$ be the feature vector for Document 1 and $\mathbf{d}_2$ for Document 2.
If $\mathbf{d}_1 \cdot \mathbf{d}_2 = 0$, it means these documents have no common "features" in a certain sense. In simple word frequency terms, this would mean they don't share any words, which is unlikely for real documents. However, in more advanced feature representations (like those from topic modeling or embeddings), a zero dot product can indicate a lack of shared semantic content or distinctness between the documents.

This concept of orthogonality is central to **CO3** and is used extensively in areas like:
*   **Gram-Schmidt Orthogonalization:** A process to create an orthogonal basis from any set of linearly independent vectors.
*   **Least Squares Problems:** Orthogonal projections are key to finding the "best fit" solutions.
*   **Data Analysis:** Identifying independent components or distinct patterns in data often relies on finding orthogonal directions.

**Connection to Course Outcomes:** Orthogonality is a core concept in **CO3**. Understanding when vectors are orthogonal is fundamental to many applications in inner product spaces, including the orthonormalization process and solving least squares problems.

#### Projection of a Vector onto Another Vector

This is another incredibly useful application of the dot product. Imagine you have a vector $\mathbf{a}$ and you want to know how much of it "lies along" the direction of another vector $\mathbf{b}$. This is called the **projection of $\mathbf{a}$ onto $\mathbf{b}$**.

There are two parts to this:
1.  **Scalar Projection:** This is the "length" of the projection, measured along $\mathbf{b}$. It's the signed magnitude of the projection. From our geometric definition, $\mathbf{a} \cdot \mathbf{b} = \|\mathbf{a}\| \|\mathbf{b}\| \cos \theta$.
    We can rearrange this to isolate $\|\mathbf{a}\| \cos \theta$, which is exactly the scalar projection of $\mathbf{a}$ onto $\mathbf{b}$:
    $$ \text{proj}_{\mathbf{b}} \mathbf{a} = \|\mathbf{a}\| \cos \theta = \frac{\mathbf{a} \cdot \mathbf{b}}{\|\mathbf{b}\|} $$
    Notice this is the dot product divided by the *magnitude* of the vector being projected onto.

2.  **Vector Projection:** This is the actual vector that lies along $\mathbf{b}$. To get this, we take the scalar projection and multiply it by a unit vector in the direction of $\mathbf{b}$.
    The unit vector in the direction of $\mathbf{b}$ is $\mathbf{u}_{\mathbf{b}} = \frac{\mathbf{b}}{\|\mathbf{b}\|}$.
    So, the vector projection of $\mathbf{a}$ onto $\mathbf{b}$ is:
    $$ \text{proj}_{\mathbf{b}} \mathbf{a} = \left( \frac{\mathbf{a} \cdot \mathbf{b}}{\|\mathbf{b}\|} \right) \frac{\mathbf{b}}{\|\mathbf{b}\|} = \frac{\mathbf{a} \cdot \mathbf{b}}{\|\mathbf{b}\|^2} \mathbf{b} $$
    This is a very handy formula! It tells us that the vector projection is some scalar multiple of vector $\mathbf{b}$.

**Analogy:**
Think about sunlight hitting a wall.
*   **Vector $\mathbf{a}$** is the path of a sunbeam (direction and intensity).
*   **Vector $\mathbf{b}$** is a line drawn on the wall.

The **scalar projection** is like the length of the shadow the sunbeam casts on that line. If the sunbeam is parallel to the line, the shadow is longest. If it's perpendicular, the shadow on the line has zero length.
The **vector projection** is the actual shadow itself, a vector lying along the line on the wall.

**Example:**
Find the vector projection of $\mathbf{a} = \begin{pmatrix} 6 \\ 2 \end{pmatrix}$ onto $\mathbf{b} = \begin{pmatrix} 3 \\ 4 \end{pmatrix}$.

1.  **Calculate the dot product:**
    $$ \mathbf{a} \cdot \mathbf{b} = (6)(3) + (2)(4) = 18 + 8 = 26 $$

2.  **Calculate the squared magnitude of $\mathbf{b}$:**
    $$ \|\mathbf{b}\|^2 = 3^2 + 4^2 = 9 + 16 = 25 $$
    (We need the squared magnitude for the vector projection formula).

3.  **Calculate the vector projection:**
    $$ \text{proj}_{\mathbf{b}} \mathbf{a} = \frac{\mathbf{a} \cdot \mathbf{b}}{\|\mathbf{b}\|^2} \mathbf{b} = \frac{26}{25} \begin{pmatrix} 3 \\ 4 \end{pmatrix} = \begin{pmatrix} \frac{78}{25} \\ \frac{104}{25} \end{pmatrix} $$
    So, the projection of $\mathbf{a}$ onto $\mathbf{b}$ is the vector $\begin{pmatrix} 3.12 \\ 4.16 \end{pmatrix}$. This vector points in the same direction as $\mathbf{b}$ and represents the component of $\mathbf{a}$ that aligns with $\mathbf{b}$.

**Connection to Course Outcomes:** Projection is a core concept in **CO3** (inner product spaces) and is fundamental to solving least squares problems. It also relates to **CO2** as it describes how one vector "fits" within the span of another. This is a prime example of applying vector properties to solve practical problems, fitting the K3 (application) knowledge level.

**What is the scalar projection in this example?**
Using the formula:
$$ \text{proj}_{\mathbf{b}} \mathbf{a} = \frac{\mathbf{a} \cdot \mathbf{b}}{\|\mathbf{b}\|} = \frac{26}{\sqrt{25}} = \frac{26}{5} = 5.2 $$
So, the component of $\mathbf{a}$ along the direction of $\mathbf{b}$ has a length of 5.2.

#### Summary and Key Takeaways

We've covered a lot of ground today! Let's quickly recap the essential points you need to remember about the dot product:

*   **Two Definitions:**
    *   **Algebraic:** $\mathbf{a} \cdot \mathbf{b} = \sum a_i b_i$ (for calculation)
    *   **Geometric:** $\mathbf{a} \cdot \mathbf{b} = \|\mathbf{a}\| \|\mathbf{b}\| \cos \theta$ (for understanding relationships)
*   **Finding the Angle:** $\theta = \arccos \left( \frac{\mathbf{a} \cdot \mathbf{b}}{\|\mathbf{a}\| \|\mathbf{b}\|} \right)$. Remember to handle the zero vector case!
*   **Orthogonality:** $\mathbf{a} \cdot \mathbf{b} = 0$ means $\mathbf{a}$ and $\mathbf{b}$ are perpendicular (if non-zero). This is a critical concept.
*   **Projection:** The dot product allows us to decompose vectors and understand their components along specific directions.
    *   Scalar projection: $\frac{\mathbf{a} \cdot \mathbf{b}}{\|\mathbf{b}\|}$
    *   Vector projection: $\frac{\mathbf{a} \cdot \mathbf{b}}{\|\mathbf{b}\|^2} \mathbf{b}$
*   **Key Property:** $\mathbf{a} \cdot \mathbf{a} = \|\mathbf{a}\|^2$ is incredibly useful.

The dot product is a foundational tool. Its ability to quantify the relationship between vectors, particularly their alignment, makes it indispensable in Information Science for tasks ranging from similarity measures in recommender systems to feature analysis in machine learning.

Keep practicing these calculations, and remember the geometric interpretation – it's what truly unlocks the power of the dot product!

---

### Sample Questions and Answers

Here are a few questions to test your understanding:

**Question 1 (Conceptual):**
If two vectors $\mathbf{u}$ and $\mathbf{v}$ have a positive dot product, what can you say about the angle between them?
*   A) The angle is $90^\circ$.
*   B) The angle is greater than $90^\circ$.
*   C) The angle is less than $90^\circ$.
*   D) The angle is $180^\circ$.

**Answer:**
The correct answer is **C) The angle is less than $90^\circ$.**

**Reasoning:**
The geometric definition of the dot product is $\mathbf{u} \cdot \mathbf{v} = \|\mathbf{u}\| \|\mathbf{v}\| \cos \theta$.
If the dot product is positive, and since $\|\mathbf{u}\|$ and $\|\mathbf{v}\|$ are always positive (for non-zero vectors), $\cos \theta$ must be positive. The cosine function is positive for angles between $0^\circ$ and $90^\circ$ (or $0$ and $\pi/2$ radians).

**Question 2 (Calculation):**
Find the dot product of vectors $\mathbf{a} = \langle 2, -1, 3 \rangle$ and $\mathbf{b} = \langle -4, 5, 2 \rangle$.

**Answer:**
The dot product is calculated as:
$$ \mathbf{a} \cdot \mathbf{b} = (2)(-4) + (-1)(5) + (3)(2) $$
$$ \mathbf{a} \cdot \mathbf{b} = -8 - 5 + 6 $$
$$ \mathbf{a} \cdot \mathbf{b} = -7 $$

**Question 3 (Application - Angle):**
Determine the angle between the vectors $\mathbf{p} = \begin{pmatrix} 1 \\ 1 \end{pmatrix}$ and $\mathbf{q} = \begin{pmatrix} 1 \\ -1 \end{pmatrix}$.

**Answer:**
1.  **Calculate the dot product:**
    $$ \mathbf{p} \cdot \mathbf{q} = (1)(1) + (1)(-1) = 1 - 1 = 0 $$
2.  **Calculate the lengths:**
    $$ \|\mathbf{p}\| = \sqrt{1^2 + 1^2} = \sqrt{2} $$
    $$ \|\mathbf{q}\| = \sqrt{1^2 + (-1)^2} = \sqrt{2} $$
3.  **Use the angle formula:**
    $$ \cos \theta = \frac{\mathbf{p} \cdot \mathbf{q}}{\|\mathbf{p}\| \|\mathbf{q}\|} = \frac{0}{\sqrt{2} \sqrt{2}} = \frac{0}{2} = 0 $$
4.  **Find the angle:**
    $$ \theta = \arccos(0) = 90^\circ \quad \text{or} \quad \frac{\pi}{2} \text{ radians} $$
The angle between the vectors is $90^\circ$. This makes sense, as these vectors are orthogonal.

**Question 4 (Application - Projection):**
Find the vector projection of $\mathbf{v} = \begin{pmatrix} 3 \\ 0 \end{pmatrix}$ onto $\mathbf{w} = \begin{pmatrix} 1 \\ 1 \end{pmatrix}$.

**Answer:**
1.  **Calculate the dot product:**
    $$ \mathbf{v} \cdot \mathbf{w} = (3)(1) + (0)(1) = 3 $$
2.  **Calculate the squared magnitude of $\mathbf{w}$:**
    $$ \|\mathbf{w}\|^2 = 1^2 + 1^2 = 1 + 1 = 2 $$
3.  **Calculate the vector projection:**
    $$ \text{proj}_{\mathbf{w}} \mathbf{v} = \frac{\mathbf{v} \cdot \mathbf{w}}{\|\mathbf{w}\|^2} \mathbf{w} = \frac{3}{2} \begin{pmatrix} 1 \\ 1 \end{pmatrix} = \begin{pmatrix} \frac{3}{2} \\ \frac{3}{2} \end{pmatrix} $$
The vector projection of $\mathbf{v}$ onto $\mathbf{w}$ is $\begin{pmatrix} 1.5 \\ 1.5 \end{pmatrix}$. This vector lies along the line $y=x$ and represents the component of $\mathbf{v}$ that aligns with $\mathbf{w}$.

These examples cover the core calculations and conceptual understanding you'll need for this topic. Keep practicing!
