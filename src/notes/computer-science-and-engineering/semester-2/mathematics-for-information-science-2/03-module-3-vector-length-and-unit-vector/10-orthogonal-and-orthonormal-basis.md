---
title: "Orthogonal and orthonormal basis"
subject: "MATHEMATICS FOR INFORMATION SCIENCE – 2"
module: "Module 3: Vector length and unit vector"
branch: "Computer Science and Engineering"
semester: 2
topicId: "68b45b6e58474a0b135b5d24"
status: "completed"
scrapedAt: "2026-05-20T16:34:47.392Z"
---
## Mathematics for Information Science – 2: Module 3 - Vector Length and Unit Vectors

### Topic: Orthogonal and Orthonormal Basis

Welcome, everyone! Today, we're diving into a really fundamental and powerful concept in linear algebra, one that's going to be incredibly useful as we explore how to represent data and solve problems in information science. We've already spent some time understanding vector lengths and how to normalize vectors into unit vectors. Now, we're going to build on that by discussing **orthogonal and orthonormal bases**.

Think about how we describe locations in our everyday world. We often use a coordinate system, right? Like the Cartesian coordinate system with its x, y, and z axes. These axes are special – they are perpendicular to each other. This perpendicularity is the essence of what we call **orthogonality**. When we combine this orthogonality with unit vectors, we get something even more special: an **orthonormal basis**.

Understanding these concepts is crucial for several of our course outcomes. Specifically:

*   **CO2 (Vector Spaces):** Orthogonal and orthonormal bases are special types of bases for vector spaces, and understanding them helps us grasp the structure and properties of these spaces more deeply.
*   **CO3 (Inner Product Spaces):** This topic directly relates to inner product spaces because the concept of orthogonality is defined using the inner product (or dot product in our familiar Euclidean space). We'll see how orthonormal bases simplify many calculations in these spaces, including orthonormalization processes.

Let's start by solidifying our understanding of the core idea: **orthogonality**.

#### The Heart of Orthogonality: The Dot Product

We've seen the dot product in action. For two vectors, say $\mathbf{u} = [u_1, u_2, \dots, u_n]$ and $\mathbf{v} = [v_1, v_2, \dots, v_n]$, their dot product is defined as:

$\mathbf{u} \cdot \mathbf{v} = u_1 v_1 + u_2 v_2 + \dots + u_n v_n$

This simple operation tells us a great deal about the relationship between two vectors.

**Definition of Orthogonality:**
Two vectors, $\mathbf{u}$ and $\mathbf{v}$, are said to be **orthogonal** if their dot product is zero:

$\mathbf{u} \cdot \mathbf{v} = 0$

**Why does this make sense?**
Geometrically, if the dot product of two non-zero vectors is zero, it means the angle between them is 90 degrees (or $\pi/2$ radians). Think back to those x, y, z axes. The x-axis is orthogonal to the y-axis, the y-axis to the z-axis, and so on. Their dot products are zero. This geometric intuition is incredibly powerful, especially when we move to higher dimensions where visualizing becomes tricky.

**Relatable Example:**
Imagine you're packing for a trip. You have a suitcase and you want to pack a pair of shoes. You can lay them side-by-side, and they're "parallel" to each other (or perhaps we say they're linearly dependent if one is just a scaled version of the other). But if you want to pack them efficiently, you might place one flat and the other standing up, perpendicular to the first. They are now orthogonal in terms of the space they occupy. If you think of vectors representing the "direction" of each shoe's sole, these directions are at a 90-degree angle.

**Exam Tip:** Whenever you see "orthogonal" or "perpendicular" in a problem involving vectors, immediately think "dot product equals zero." This is your go-to equation!

#### Expanding Orthogonality: Sets of Vectors

It's not just pairs of vectors that can be orthogonal. We can have sets of vectors where *every distinct pair* within the set is orthogonal.

**Definition of an Orthogonal Set of Vectors:**
A set of vectors $\{\mathbf{v}_1, \mathbf{v}_2, \dots, \mathbf{v}_k\}$ is **orthogonal** if $\mathbf{v}_i \cdot \mathbf{v}_j = 0$ for all $i \neq j$.

This is like having multiple directions that are all mutually perpendicular. Think of the directions north, east, and up. They are all orthogonal to each other.

#### The Power of Orthogonal Bases

Now, let's connect this to the idea of a **basis**. Remember from our discussions on vector spaces (CO2), a basis is a set of linearly independent vectors that can span the entire space.

**Definition of an Orthogonal Basis:**
An **orthogonal basis** for a vector space is a basis where every pair of distinct vectors in the basis set is orthogonal.

So, if we have a basis $\{\mathbf{v}_1, \mathbf{v}_2, \dots, \mathbf{v}_n\}$ for an $n$-dimensional space, and $\mathbf{v}_i \cdot \mathbf{v}_j = 0$ for all $i \neq j$, then this is an orthogonal basis.

**Why are orthogonal bases so great?**
Well, they simplify many calculations immensely. Consider expressing any vector $\mathbf{x}$ as a linear combination of basis vectors:

$\mathbf{x} = c_1 \mathbf{v}_1 + c_2 \mathbf{v}_2 + \dots + c_n \mathbf{v}_n$

In a general basis, finding the coefficients $c_i$ can be quite involved, often requiring solving a system of linear equations. However, in an orthogonal basis, finding these coefficients becomes remarkably easy, as we'll see in a moment. This ties directly into CO2, helping us understand the structure and manipulation within vector spaces.

#### From Orthogonal to Orthonormal: The Unit Vector Factor

We've already mastered turning vectors into unit vectors by dividing them by their lengths. Now, let's combine this with orthogonality.

**Definition of an Orthonormal Set of Vectors:**
A set of vectors $\{\mathbf{u}_1, \mathbf{u}_2, \dots, \mathbf{u}_k\}$ is **orthonormal** if:
1.  The set is orthogonal, meaning $\mathbf{u}_i \cdot \mathbf{u}_j = 0$ for all $i \neq j$.
2.  Each vector in the set is a unit vector, meaning $\|\mathbf{u}_i\| = 1$ for all $i$.

We can express this concisely using the Kronecker delta symbol, $\delta_{ij}$, which is 1 if $i=j$ and 0 if $i \neq j$:

$\mathbf{u}_i \cdot \mathbf{u}_j = \delta_{ij}$

**Definition of an Orthonormal Basis:**
An **orthonormal basis** for a vector space is a basis where every pair of distinct vectors is orthogonal, and each vector is a unit vector.

**Relatable Analogy:**
Think back to our suitcase example. If we consider the directions "forward," "sideways," and "up," these are mutually orthogonal directions. Now, imagine we have a tape measure. If we mark off exactly one meter (or one foot) along each of these directions, we have unit vectors representing these directions. These three mutually perpendicular, unit-length directions form an orthonormal basis for 3D space. This is exactly how our familiar Cartesian coordinate system ($i$, $j$, $k$) works!

**Why are orthonormal bases even better?**
They are the "gold standard" for many applications because they combine the simplicity of orthogonality with the convenience of unit lengths. This is particularly beneficial in areas like signal processing and data analysis where we often work with normalized features.

#### Constructing Orthonormal Bases: The Gram-Schmidt Process

What if we're given a set of linearly independent vectors that aren't orthogonal, and we need to find an orthonormal basis for the subspace they span? This is where the **Gram-Schmidt orthogonalization process** comes in. It's a systematic way to "un-bend" and "normalize" vectors. This process is a direct application that helps us achieve CO3 (applying orthonormalization).

Let's say we have a set of linearly independent vectors $\{\mathbf{v}_1, \mathbf{v}_2, \dots, \mathbf{v}_n\}$. We want to transform this into an orthonormal basis $\{\mathbf{u}_1, \mathbf{u}_2, \dots, \mathbf{u}_n\}$.

**The Steps (simplified view):**

1.  **Start with the first vector:**
    *   Let $\mathbf{w}_1 = \mathbf{v}_1$.
    *   Normalize it to get the first orthonormal vector: $\mathbf{u}_1 = \frac{\mathbf{w}_1}{\|\mathbf{w}_1\|}$.
    This vector $\mathbf{u}_1$ forms an orthonormal basis for the subspace spanned by $\{\mathbf{v}_1\}$.

2.  **Process the second vector:**
    *   We want to find a vector $\mathbf{w}_2$ that is orthogonal to $\mathbf{u}_1$. We take $\mathbf{v}_2$ and subtract its projection onto $\mathbf{u}_1$. The projection of $\mathbf{v}_2$ onto $\mathbf{u}_1$ is given by $(\mathbf{v}_2 \cdot \mathbf{u}_1)\mathbf{u}_1$.
    *   So, $\mathbf{w}_2 = \mathbf{v}_2 - (\mathbf{v}_2 \cdot \mathbf{u}_1)\mathbf{u}_1$. This $\mathbf{w}_2$ is guaranteed to be orthogonal to $\mathbf{u}_1$. (Why? You can check: $\mathbf{w}_2 \cdot \mathbf{u}_1 = (\mathbf{v}_2 - (\mathbf{v}_2 \cdot \mathbf{u}_1)\mathbf{u}_1) \cdot \mathbf{u}_1 = \mathbf{v}_2 \cdot \mathbf{u}_1 - (\mathbf{v}_2 \cdot \mathbf{u}_1)(\mathbf{u}_1 \cdot \mathbf{u}_1)$. Since $\mathbf{u}_1$ is a unit vector, $\mathbf{u}_1 \cdot \mathbf{u}_1 = 1$, so it becomes $\mathbf{v}_2 \cdot \mathbf{u}_1 - \mathbf{v}_2 \cdot \mathbf{u}_1 = 0$).
    *   Normalize $\mathbf{w}_2$ to get the second orthonormal vector: $\mathbf{u}_2 = \frac{\mathbf{w}_2}{\|\mathbf{w}_2\|}$.
    Now, $\{\mathbf{u}_1, \mathbf{u}_2\}$ is an orthonormal basis for the subspace spanned by $\{\mathbf{v}_1, \mathbf{v}_2\}$.

3.  **Continue for the remaining vectors:**
    *   For $\mathbf{v}_k$, we find $\mathbf{w}_k$ by subtracting the projections of $\mathbf{v}_k$ onto all the previously found orthonormal vectors $\{\mathbf{u}_1, \dots, \mathbf{u}_{k-1}\}$:
        $\mathbf{w}_k = \mathbf{v}_k - (\mathbf{v}_k \cdot \mathbf{u}_1)\mathbf{u}_1 - (\mathbf{v}_k \cdot \mathbf{u}_2)\mathbf{u}_2 - \dots - (\mathbf{v}_k \cdot \mathbf{u}_{k-1})\mathbf{u}_{k-1}$
    *   Normalize $\mathbf{w}_k$: $\mathbf{u}_k = \frac{\mathbf{w}_k}{\|\mathbf{w}_k\|}$.

**Textbook Connection:** You can find a detailed explanation of the Gram-Schmidt process in Kreyszig's "Advanced Engineering Mathematics" and Larson's "Elementary Linear Algebra." They often present it with more formal notation, but the underlying idea of subtracting projections is key.

**Example:** Let's find an orthonormal basis for the subspace spanned by $\mathbf{v}_1 = [1, 1, 0]$ and $\mathbf{v}_2 = [1, 0, 1]$.

*   **Step 1: Process $\mathbf{v}_1$**
    *   $\mathbf{w}_1 = \mathbf{v}_1 = [1, 1, 0]$
    *   $\|\mathbf{w}_1\| = \sqrt{1^2 + 1^2 + 0^2} = \sqrt{2}$
    *   $\mathbf{u}_1 = \frac{\mathbf{w}_1}{\|\mathbf{w}_1\|} = \frac{1}{\sqrt{2}}[1, 1, 0] = [\frac{1}{\sqrt{2}}, \frac{1}{\sqrt{2}}, 0]$

*   **Step 2: Process $\mathbf{v}_2$**
    *   First, calculate the projection of $\mathbf{v}_2$ onto $\mathbf{u}_1$:
        $\mathbf{v}_2 \cdot \mathbf{u}_1 = [1, 0, 1] \cdot [\frac{1}{\sqrt{2}}, \frac{1}{\sqrt{2}}, 0] = 1(\frac{1}{\sqrt{2}}) + 0(\frac{1}{\sqrt{2}}) + 1(0) = \frac{1}{\sqrt{2}}$
    *   The projection vector is $(\mathbf{v}_2 \cdot \mathbf{u}_1)\mathbf{u}_1 = \frac{1}{\sqrt{2}} [\frac{1}{\sqrt{2}}, \frac{1}{\sqrt{2}}, 0] = [\frac{1}{2}, \frac{1}{2}, 0]$
    *   Now, find $\mathbf{w}_2$:
        $\mathbf{w}_2 = \mathbf{v}_2 - (\mathbf{v}_2 \cdot \mathbf{u}_1)\mathbf{u}_1 = [1, 0, 1] - [\frac{1}{2}, \frac{1}{2}, 0] = [\frac{1}{2}, -\frac{1}{2}, 1]$
    *   Normalize $\mathbf{w}_2$:
        $\|\mathbf{w}_2\| = \sqrt{(\frac{1}{2})^2 + (-\frac{1}{2})^2 + 1^2} = \sqrt{\frac{1}{4} + \frac{1}{4} + 1} = \sqrt{\frac{1}{2} + 1} = \sqrt{\frac{3}{2}}$
    *   $\mathbf{u}_2 = \frac{\mathbf{w}_2}{\|\mathbf{w}_2\|} = \frac{1}{\sqrt{3/2}} [\frac{1}{2}, -\frac{1}{2}, 1] = \sqrt{\frac{2}{3}} [\frac{1}{2}, -\frac{1}{2}, 1] = [\frac{1}{\sqrt{6}}, -\frac{1}{\sqrt{6}}, \sqrt{\frac{2}{3}}]$

So, the orthonormal basis for the subspace spanned by $\mathbf{v}_1$ and $\mathbf{v}_2$ is $\{\mathbf{u}_1, \mathbf{u}_2\} = \{[\frac{1}{\sqrt{2}}, \frac{1}{\sqrt{2}}, 0], [\frac{1}{\sqrt{6}}, -\frac{1}{\sqrt{6}}, \sqrt{\frac{2}{3}}]\}$.

**Common Pitfall:** Make sure to use the *normalized* vectors ($\mathbf{u}_i$) when calculating projections in subsequent steps of Gram-Schmidt. Using the $\mathbf{w}_i$ vectors (which are orthogonal but not yet unit length) will lead to incorrect results.

#### The Magic of Orthonormal Bases in Calculations

Why go through the trouble of Gram-Schmidt? Because working with orthonormal bases makes expressing any vector as a linear combination incredibly simple. If $\{\mathbf{u}_1, \mathbf{u}_2, \dots, \mathbf{u}_n\}$ is an orthonormal basis for a space, and we want to write any vector $\mathbf{x}$ in that space as:

$\mathbf{x} = c_1 \mathbf{u}_1 + c_2 \mathbf{u}_2 + \dots + c_n \mathbf{u}_n$

The coefficients $c_i$ are simply the dot products of $\mathbf{x}$ with the basis vectors:

$c_i = \mathbf{x} \cdot \mathbf{u}_i$

So, $\mathbf{x} = (\mathbf{x} \cdot \mathbf{u}_1)\mathbf{u}_1 + (\mathbf{x} \cdot \mathbf{u}_2)\mathbf{u}_2 + \dots + (\mathbf{x} \cdot \mathbf{u}_n)\mathbf{u}_n$.

**This is a HUGE simplification!** It means we don't need to solve systems of equations to find these coefficients. This property is fundamental in many data science techniques, such as principal component analysis (PCA), where we project data onto orthogonal directions. This directly connects to **CO2** (understanding vector space properties) and **CO3** (applying orthonormalization and simplifying calculations).

**Textbook Connection:** Gilbert Strang's "Linear Algebra and Learning from Data" often emphasizes the practical benefits of orthonormal bases and their role in data decomposition.

**Let's verify with our example:**
Let's take a vector $\mathbf{x} = [2, 1, 3]$ and express it in our orthonormal basis $\{\mathbf{u}_1, \mathbf{u}_2\}$.
First, let's check if $\mathbf{x}$ is in the subspace spanned by $\mathbf{v}_1$ and $\mathbf{v}_2$. It actually isn't, but for demonstration, let's see how it would decompose using the found basis. The general formula for projection of $\mathbf{x}$ onto the subspace spanned by $\{\mathbf{v}_1, \mathbf{v}_2\}$ would use $\{\mathbf{u}_1, \mathbf{u}_2\}$.

$c_1 = \mathbf{x} \cdot \mathbf{u}_1 = [2, 1, 3] \cdot [\frac{1}{\sqrt{2}}, \frac{1}{\sqrt{2}}, 0] = \frac{2}{\sqrt{2}} + \frac{1}{\sqrt{2}} + 0 = \frac{3}{\sqrt{2}}$
$c_2 = \mathbf{x} \cdot \mathbf{u}_2 = [2, 1, 3] \cdot [\frac{1}{\sqrt{6}}, -\frac{1}{\sqrt{6}}, \sqrt{\frac{2}{3}}] = \frac{2}{\sqrt{6}} - \frac{1}{\sqrt{6}} + 3\sqrt{\frac{2}{3}} = \frac{1}{\sqrt{6}} + 3\frac{\sqrt{2}}{\sqrt{3}} = \frac{1}{\sqrt{6}} + \frac{3\sqrt{6}}{3} = \frac{1}{\sqrt{6}} + \sqrt{6} = \frac{1+6}{\sqrt{6}} = \frac{7}{\sqrt{6}}$

So, $\mathbf{x} \approx c_1 \mathbf{u}_1 + c_2 \mathbf{u}_2$
$\mathbf{x} \approx \frac{3}{\sqrt{2}} [\frac{1}{\sqrt{2}}, \frac{1}{\sqrt{2}}, 0] + \frac{7}{\sqrt{6}} [\frac{1}{\sqrt{6}}, -\frac{1}{\sqrt{6}}, \sqrt{\frac{2}{3}}]$
$\mathbf{x} \approx [\frac{3}{2}, \frac{3}{2}, 0] + [\frac{7}{6}, -\frac{7}{6}, \frac{7\sqrt{2}}{3\sqrt{3}}]$
$\mathbf{x} \approx [\frac{9}{6} + \frac{7}{6}, \frac{9}{6} - \frac{7}{6}, \frac{7\sqrt{6}}{9}]$
$\mathbf{x} \approx [\frac{16}{6}, \frac{2}{6}, \frac{7\sqrt{6}}{9}] = [\frac{8}{3}, \frac{1}{3}, \frac{7\sqrt{6}}{9}]$

Notice that this approximation $[\frac{8}{3}, \frac{1}{3}, \frac{7\sqrt{6}}{9}]$ is the projection of $\mathbf{x}$ onto the subspace spanned by $\{\mathbf{v}_1, \mathbf{v}_2\}$. If $\mathbf{x}$ were perfectly in that subspace, this sum would equal $\mathbf{x}$ itself.

#### Importance in Information Science

The concepts of orthogonal and orthonormal bases are not just abstract mathematical ideas; they are cornerstones for many algorithms in information science:

*   **Signal Processing:** Signals are often represented as vectors. Orthogonal transforms (like the Fourier Transform) decompose signals into orthogonal components, making analysis and filtering much easier.
*   **Machine Learning:** In algorithms like Principal Component Analysis (PCA), we find an orthonormal basis of the data's variance directions (principal components). We then project data onto this basis to reduce dimensionality while retaining as much information as possible. This ties directly into **CO2** and **CO3**.
*   **Computer Graphics:** Representing directions and transformations often relies on orthonormal bases (like rotation matrices, which are composed of orthonormal vectors).
*   **Data Compression:** Techniques like Singular Value Decomposition (SVD) heavily utilize orthogonal matrices and bases for efficient data representation.

Essentially, whenever we need to break down a complex entity (like a signal or a dataset) into simpler, independent components, orthogonal or orthonormal bases are the tools we use. They provide a clear, uncluttered way to represent and analyze data.

#### Summary and Key Takeaways

*   **Orthogonality:** Two vectors are orthogonal if their dot product is zero. Geometrically, this means they are perpendicular.
*   **Orthogonal Set/Basis:** A set of vectors where every pair of distinct vectors is orthogonal.
*   **Orthonormality:** A set of vectors that are both orthogonal and have a magnitude (length) of 1 (i.e., they are unit vectors).
*   **Orthonormal Basis:** An orthogonal basis where each basis vector is a unit vector.
*   **Gram-Schmidt Process:** A method to convert a set of linearly independent vectors into an orthonormal basis. It involves successively subtracting projections onto previously found orthogonal vectors and then normalizing.
*   **The Big Advantage:** In an orthonormal basis, finding the coefficients for any vector's linear combination is as simple as taking dot products. This dramatically simplifies computations in various applications.

Remember this: Orthonormal bases are like the "perfect coordinate systems" for many problems in information science. They simplify analysis, representation, and computation, making complex tasks more manageable.

---

### Sample Questions and Answers

**Conceptual Questions:**

1.  **Question:** What is the geometric interpretation of two vectors being orthogonal?
    **Answer:** Two vectors are orthogonal if they are perpendicular to each other, meaning the angle between them is 90 degrees (or $\pi/2$ radians). This is mathematically represented by their dot product being zero.

2.  **Question:** Explain the difference between an orthogonal set and an orthonormal set of vectors.
    **Answer:** An **orthogonal set** is a set of vectors where every distinct pair of vectors has a dot product of zero. An **orthonormal set** takes this a step further: not only must the vectors be orthogonal to each other, but each vector in the set must also be a unit vector (have a length of 1).

3.  **Question:** Why are orthonormal bases preferred over non-orthonormal bases for many applications in information science?
    **Answer:** Orthonormal bases simplify calculations significantly. Specifically, when expressing any vector as a linear combination of basis vectors, the coefficients are simply the dot products of the vector with the basis vectors. This avoids the need to solve systems of linear equations, which is crucial for efficiency in algorithms like PCA, signal processing, and data analysis.

**Exam-Oriented Questions:**

4.  **Question:** Let $\mathbf{u} = [2, -1, 3]$ and $\mathbf{v} = [1, 4, 0]$. Are these vectors orthogonal? Justify your answer.
    **Answer:** To check for orthogonality, we compute their dot product:
    $\mathbf{u} \cdot \mathbf{v} = (2)(1) + (-1)(4) + (3)(0) = 2 - 4 + 0 = -2$.
    Since $\mathbf{u} \cdot \mathbf{v} = -2 \neq 0$, the vectors $\mathbf{u}$ and $\mathbf{v}$ are not orthogonal.

5.  **Question:** Given the vector $\mathbf{v}_1 = [3, 0, 0]$ and $\mathbf{v}_2 = [0, 2, 0]$.
    a) Show that $\{\mathbf{v}_1, \mathbf{v}_2\}$ is an orthogonal set.
    b) Find an orthonormal basis for the subspace spanned by $\{\mathbf{v}_1, \mathbf{v}_2\}$.
    **Answer:**
    a) To show $\{\mathbf{v}_1, \mathbf{v}_2\}$ is orthogonal, we compute their dot product:
    $\mathbf{v}_1 \cdot \mathbf{v}_2 = (3)(0) + (0)(2) + (0)(0) = 0$.
    Since the dot product is zero, the vectors are orthogonal.

    b) To find an orthonormal basis, we need to normalize each vector:
    For $\mathbf{v}_1$:
    $\|\mathbf{v}_1\| = \sqrt{3^2 + 0^2 + 0^2} = \sqrt{9} = 3$.
    The normalized vector $\mathbf{u}_1 = \frac{\mathbf{v}_1}{\|\mathbf{v}_1\|} = \frac{1}{3}[3, 0, 0] = [1, 0, 0]$.

    For $\mathbf{v}_2$:
    $\|\mathbf{v}_2\| = \sqrt{0^2 + 2^2 + 0^2} = \sqrt{4} = 2$.
    The normalized vector $\mathbf{u}_2 = \frac{\mathbf{v}_2}{\|\mathbf{v}_2\|} = \frac{1}{2}[0, 2, 0] = [0, 1, 0]$.
    The orthonormal basis is $\{\mathbf{u}_1, \mathbf{u}_2\} = \{[1, 0, 0], [0, 1, 0]\}$.

6.  **Question:** Apply the Gram-Schmidt process to the set of vectors $\{\mathbf{v}_1 = [1, 1], \mathbf{v}_2 = [2, 3]\}$ to obtain an orthonormal basis for $\mathbb{R}^2$.
    **Answer:**
    *   **Step 1: Process $\mathbf{v}_1$**
        $\mathbf{w}_1 = \mathbf{v}_1 = [1, 1]$.
        $\|\mathbf{w}_1\| = \sqrt{1^2 + 1^2} = \sqrt{2}$.
        $\mathbf{u}_1 = \frac{\mathbf{w}_1}{\|\mathbf{w}_1\|} = \frac{1}{\sqrt{2}}[1, 1] = [\frac{1}{\sqrt{2}}, \frac{1}{\sqrt{2}}]$.

    *   **Step 2: Process $\mathbf{v}_2$**
        Calculate the projection of $\mathbf{v}_2$ onto $\mathbf{u}_1$:
        $\mathbf{v}_2 \cdot \mathbf{u}_1 = [2, 3] \cdot [\frac{1}{\sqrt{2}}, \frac{1}{\sqrt{2}}] = \frac{2}{\sqrt{2}} + \frac{3}{\sqrt{2}} = \frac{5}{\sqrt{2}}$.
        The projection vector is $(\mathbf{v}_2 \cdot \mathbf{u}_1)\mathbf{u}_1 = \frac{5}{\sqrt{2}} [\frac{1}{\sqrt{2}}, \frac{1}{\sqrt{2}}] = [\frac{5}{2}, \frac{5}{2}]$.
        Now, find $\mathbf{w}_2$:
        $\mathbf{w}_2 = \mathbf{v}_2 - (\mathbf{v}_2 \cdot \mathbf{u}_1)\mathbf{u}_1 = [2, 3] - [\frac{5}{2}, \frac{5}{2}] = [2 - \frac{5}{2}, 3 - \frac{5}{2}] = [-\frac{1}{2}, \frac{1}{2}]$.
        Normalize $\mathbf{w}_2$:
        $\|\mathbf{w}_2\| = \sqrt{(-\frac{1}{2})^2 + (\frac{1}{2})^2} = \sqrt{\frac{1}{4} + \frac{1}{4}} = \sqrt{\frac{1}{2}} = \frac{1}{\sqrt{2}}$.
        $\mathbf{u}_2 = \frac{\mathbf{w}_2}{\|\mathbf{w}_2\|} = \frac{1}{1/\sqrt{2}} [-\frac{1}{2}, \frac{1}{2}] = \sqrt{2} [-\frac{1}{2}, \frac{1}{2}] = [-\frac{\sqrt{2}}{2}, \frac{\sqrt{2}}{2}]$.

    The orthonormal basis is $\{\mathbf{u}_1, \mathbf{u}_2\} = \{[\frac{1}{\sqrt{2}}, \frac{1}{\sqrt{2}}], [-\frac{1}{\sqrt{2}}, \frac{1}{\sqrt{2}}]\}$ (or equivalently, $\{[\frac{\sqrt{2}}{2}, \frac{\sqrt{2}}{2}], [-\frac{\sqrt{2}}{2}, \frac{\sqrt{2}}{2}]\}$).
