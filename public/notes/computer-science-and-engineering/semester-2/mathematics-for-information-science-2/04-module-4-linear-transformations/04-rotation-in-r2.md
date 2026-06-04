---
title: "Rotation in R2"
subject: "MATHEMATICS FOR INFORMATION SCIENCE – 2"
module: "Module 4: Linear Transformations"
branch: "Computer Science and Engineering"
semester: 2
topicId: "68b45b6e58474a0b135b5d2d"
status: "completed"
scrapedAt: "2026-05-20T16:34:53.271Z"
---
# MATHEMATICS FOR INFORMATION SCIENCE – 2

## Module 4: Linear Transformations

### Topic: Rotation in $\mathbb{R}^2$

Welcome, everyone! Today, we're diving into a really visual and intuitive part of linear transformations: **Rotations in $\mathbb{R}^2$**. As you know from our previous discussions on linear transformations, they're essentially functions that map vectors from one vector space to another while preserving the structure of vector addition and scalar multiplication. Think of them as ways to stretch, shrink, shear, or, as we'll see today, *rotate* vectors. Understanding rotations is fundamental, especially in fields like computer graphics, robotics, and signal processing, where manipulating objects in 2D or 3D space is key. This topic directly ties into **Course Outcome 4 (CO4)**, where we aim to understand the concept of linear transformation and apply its properties. Specifically, we'll be looking at how to represent these rotations using matrices, which is a crucial step in finding matrices of linear transformations.

---

### 1. What is a Rotation? Visualizing the Transformation

Imagine you have a point or a vector on a 2D plane, say originating from $(0,0)$. A rotation is what happens when you spin that point around the origin by a certain angle. The distance of the point from the origin remains the same; it's only its direction that changes.

**Analogy Time:** Think about a clock's hands. The hour hand, minute hand, and second hand all pivot around the center of the clock. As time passes, they rotate. If you were to freeze a clock at a particular moment, the position of the hands represents a rotation from their starting position (say, 12 o'clock).

In $\mathbb{R}^2$, we can describe any vector $\mathbf{x} = \begin{pmatrix} x \\ y \end{pmatrix}$ by its coordinates $(x, y)$. A rotation transformation will take this vector to a new vector $\mathbf{x}' = \begin{pmatrix} x' \\ y' \end{pmatrix}$ in $\mathbb{R}^2$.

**Key Idea:** A rotation in $\mathbb{R}^2$ is a linear transformation. This is because rotating two vectors and then adding them gives the same result as adding the vectors first and then rotating the sum. Similarly, rotating a scaled vector is the same as scaling the rotated vector. This property is essential for our understanding of linear transformations.

---

### 2. Defining Rotation: The Angle Matters!

The most important parameter defining a rotation is the **angle of rotation**. Let's denote this angle by $\theta$. Conventionally, we measure $\theta$ counterclockwise from the positive x-axis.

*   **Positive $\theta$**: Counterclockwise rotation.
*   **Negative $\theta$**: Clockwise rotation (which is just a counterclockwise rotation by $-\theta$).

Let's consider a standard basis vector $\mathbf{e}_1 = \begin{pmatrix} 1 \\ 0 \end{pmatrix}$ on the x-axis. If we rotate it counterclockwise by an angle $\theta$, where does it end up?

Using trigonometry, the new coordinates $(x', y')$ of a point $(x, y)$ after rotation by $\theta$ are given by:
$x' = x \cos \theta - y \sin \theta$
$y' = x \sin \theta + y \cos \theta$

Let's apply this to our basis vector $\mathbf{e}_1 = \begin{pmatrix} 1 \\ 0 \end{pmatrix}$. Here, $x=1$ and $y=0$.
$x' = 1 \cos \theta - 0 \sin \theta = \cos \theta$
$y' = 1 \sin \theta + 0 \cos \theta = \sin \theta$

So, $\mathbf{e}_1$ is rotated to the vector $\begin{pmatrix} \cos \theta \\ \sin \theta \end{pmatrix}$. This makes perfect sense! It's a point on the unit circle at an angle $\theta$ from the positive x-axis.

Now, what about the other basis vector, $\mathbf{e}_2 = \begin{pmatrix} 0 \\ 1 \end{pmatrix}$ (on the y-axis)? Here, $x=0$ and $y=1$.
$x' = 0 \cos \theta - 1 \sin \theta = -\sin \theta$
$y' = 0 \sin \theta + 1 \cos \theta = \cos \theta$

So, $\mathbf{e}_2$ is rotated to the vector $\begin{pmatrix} -\sin \theta \\ \cos \theta \end{pmatrix}$. Again, this is consistent. If you visualize rotating the positive y-axis counterclockwise by $\theta$, it lands in the second or first quadrant depending on $\theta$, with coordinates $(-\sin\theta, \cos\theta)$.

---

### 3. The Rotation Matrix: Our Algebraic Tool

Since rotation is a linear transformation, we can represent it with a matrix. A linear transformation $T: \mathbb{R}^n \to \mathbb{R}^m$ is completely determined by its action on the standard basis vectors. If $A$ is the matrix of the transformation, then $T(\mathbf{x}) = A\mathbf{x}$. The columns of $A$ are precisely the images of the standard basis vectors under $T$.

In our case, for a rotation in $\mathbb{R}^2$, let $T_\theta$ be the rotation by angle $\theta$. The standard basis vectors are $\mathbf{e}_1 = \begin{pmatrix} 1 \\ 0 \end{pmatrix}$ and $\mathbf{e}_2 = \begin{pmatrix} 0 \\ 1 \end{pmatrix}$.
We found that:
$T_\theta(\mathbf{e}_1) = \begin{pmatrix} \cos \theta \\ \sin \theta \end{pmatrix}$
$T_\theta(\mathbf{e}_2) = \begin{pmatrix} -\sin \theta \\ \cos \theta \end{pmatrix}$

Therefore, the matrix $R_\theta$ representing the rotation by angle $\theta$ counterclockwise is formed by using these image vectors as its columns:

$$R_\theta = \begin{pmatrix} \cos \theta & -\sin \theta \\ \sin \theta & \cos \theta \end{pmatrix}$$

This is the **standard rotation matrix in $\mathbb{R}^2$**. You'll find this formula presented in most linear algebra texts, including Kreyszig and Larson.

**Important Point for Exams:** When asked to find the matrix of a rotation, make sure you know whether the rotation is clockwise or counterclockwise, and by what angle. The standard matrix assumes counterclockwise rotation. If it's clockwise by angle $\phi$, that's equivalent to counterclockwise rotation by $-\phi$. Since $\cos(-\phi) = \cos \phi$ and $\sin(-\phi) = -\sin \phi$, the matrix for clockwise rotation by $\phi$ is $\begin{pmatrix} \cos \phi & \sin \phi \\ -\sin \phi & \cos \phi \end{pmatrix}$.

---

### 4. Applying the Rotation Matrix: Examples in Action

Let's see how this matrix works with an example.

**Example 1: Rotating a Point**

Suppose we want to rotate the point $(2, 1)$ counterclockwise by an angle of $\frac{\pi}{2}$ (90 degrees).
Here, $\theta = \frac{\pi}{2}$.
So, $\cos\left(\frac{\pi}{2}\right) = 0$ and $\sin\left(\frac{\pi}{2}\right) = 1$.

The rotation matrix is:
$$R_{\pi/2} = \begin{pmatrix} \cos(\pi/2) & -\sin(\pi/2) \\ \sin(\pi/2) & \cos(\pi/2) \end{pmatrix} = \begin{pmatrix} 0 & -1 \\ 1 & 0 \end{pmatrix}$$

The vector corresponding to the point $(2, 1)$ is $\mathbf{x} = \begin{pmatrix} 2 \\ 1 \end{pmatrix}$.
The rotated vector $\mathbf{x}'$ is:
$$\mathbf{x}' = R_{\pi/2} \mathbf{x} = \begin{pmatrix} 0 & -1 \\ 1 & 0 \end{pmatrix} \begin{pmatrix} 2 \\ 1 \end{pmatrix} = \begin{pmatrix} (0)(2) + (-1)(1) \\ (1)(2) + (0)(1) \end{pmatrix} = \begin{pmatrix} -1 \\ 2 \end{pmatrix}$$

So, the point $(2, 1)$ is rotated to $(-1, 2)$. Does this make sense visually? If you plot $(2, 1)$ and then rotate it 90 degrees counterclockwise, it should land in the second quadrant, and indeed, $(-1, 2)$ is in the second quadrant. The distance from the origin for $(2,1)$ is $\sqrt{2^2+1^2} = \sqrt{5}$. The distance for $(-1,2)$ is $\sqrt{(-1)^2+2^2} = \sqrt{5}$. The distance is preserved, as expected.

**Example 2: Rotation in a Game**

Imagine you're programming a simple 2D game. You have a spaceship at a certain position, and you want it to turn. If the spaceship is represented by a vector (or a set of points) and you want to rotate it, you'll use the rotation matrix.

Let's say your spaceship's nose is currently pointing along the positive x-axis, represented by the vector $\begin{pmatrix} 1 \\ 0 \end{pmatrix}$. If you press the "turn left" button, which initiates a $15^\circ$ counterclockwise rotation, the new direction of the nose will be:

$\theta = 15^\circ = \frac{\pi}{12}$ radians.
$\cos(15^\circ) \approx 0.966$
$\sin(15^\circ) \approx 0.259$

$$R_{15^\circ} = \begin{pmatrix} 0.966 & -0.259 \\ 0.259 & 0.966 \end{pmatrix}$$

New nose direction = $R_{15^\circ} \begin{pmatrix} 1 \\ 0 \end{pmatrix} = \begin{pmatrix} 0.966 \\ 0.259 \end{pmatrix}$.
The spaceship's nose is now pointing in a direction slightly above the positive x-axis.

---

### 5. Properties of Rotation Matrices

Rotation matrices have some very nice properties. Let's explore a few.

*   **Determinant**: Let's calculate the determinant of $R_\theta$:
    $\det(R_\theta) = (\cos \theta)(\cos \theta) - (-\sin \theta)(\sin \theta) = \cos^2 \theta + \sin^2 \theta = 1$.
    **Remember this:** The determinant of any rotation matrix in $\mathbb{R}^2$ is always 1. This is significant because transformations with a determinant of 1 preserve area and orientation. It means no stretching or shrinking of area is happening, and the "handedness" of the coordinate system remains the same. This relates to **CO4** where we discuss rank and nullity, though here it's more about the geometric interpretation of determinants.

*   **Orthogonality**: Let's look at the columns of $R_\theta$. The first column is $\begin{pmatrix} \cos \theta \\ \sin \theta \end{pmatrix}$ and the second is $\begin{pmatrix} -\sin \theta \\ \cos \theta \end{pmatrix}$.
    What is the dot product of these two columns?
    $(\cos \theta)(-\sin \theta) + (\sin \theta)(\cos \theta) = -\cos \theta \sin \theta + \sin \theta \cos \theta = 0$.
    They are orthogonal!
    What about the length of each column vector?
    $\| \begin{pmatrix} \cos \theta \\ \sin \theta \end{pmatrix} \| = \sqrt{\cos^2 \theta + \sin^2 \theta} = 1$.
    $\| \begin{pmatrix} -\sin \theta \\ \cos \theta \end{pmatrix} \| = \sqrt{(-\sin \theta)^2 + \cos^2 \theta} = \sqrt{\sin^2 \theta + \cos^2 \theta} = 1$.
    Both columns have a length of 1.

    This means the columns of a rotation matrix form an **orthonormal basis**. Such matrices are called **orthogonal matrices**. An orthogonal matrix $Q$ has the property that $Q^T Q = I$ (the identity matrix), which also implies $Q^{-1} = Q^T$. For our rotation matrix:
    $$R_\theta^T = \begin{pmatrix} \cos \theta & \sin \theta \\ -\sin \theta & \cos \theta \end{pmatrix}$$
    And
    $$R_\theta^T R_\theta = \begin{pmatrix} \cos \theta & \sin \theta \\ -\sin \theta & \cos \theta \end{pmatrix} \begin{pmatrix} \cos \theta & -\sin \theta \\ \sin \theta & \cos \theta \end{pmatrix} = \begin{pmatrix} \cos^2\theta+\sin^2\theta & -\cos\theta\sin\theta+\sin\theta\cos\theta \\ -\sin\theta\cos\theta+\cos\theta\sin\theta & \sin^2\theta+\cos^2\theta \end{pmatrix} = \begin{pmatrix} 1 & 0 \\ 0 & 1 \end{pmatrix} = I$$
    This is a crucial property. It means that the inverse of a rotation is simply its transpose.
    $R_\theta^{-1} = R_\theta^T$.

    What does $R_\theta^{-1}$ represent geometrically? It represents the inverse transformation. If $R_\theta$ rotates by $\theta$ counterclockwise, then $R_\theta^{-1}$ must undo that rotation. Rotating by $-\theta$ counterclockwise (or $\theta$ clockwise) does exactly that!
    $R_\theta(-\phi) = \begin{pmatrix} \cos(-\phi) & -\sin(-\phi) \\ \sin(-\phi) & \cos(-\phi) \end{pmatrix} = \begin{pmatrix} \cos \phi & \sin \phi \\ -\sin \phi & \cos \phi \end{pmatrix}$, which is indeed $R_\phi^T$.
    This ties into **CO4** as well, showing how to find inverse transformations and their matrix representations.

*   **Composition of Rotations**: What happens if you rotate by $\theta_1$ and then by $\theta_2$? This is equivalent to rotating by $\theta_1 + \theta_2$. Let's check if the matrices reflect this:
    $R_{\theta_1} R_{\theta_2} = \begin{pmatrix} \cos \theta_1 & -\sin \theta_1 \\ \sin \theta_1 & \cos \theta_1 \end{pmatrix} \begin{pmatrix} \cos \theta_2 & -\sin \theta_2 \\ \sin \theta_2 & \cos \theta_2 \end{pmatrix}$
    Using trigonometric angle addition formulas ($\cos(A+B) = \cos A \cos B - \sin A \sin B$ and $\sin(A+B) = \sin A \cos B + \cos A \sin B$):
    The (1,1) entry: $(\cos \theta_1)(\cos \theta_2) - (\sin \theta_1)(\sin \theta_2) = \cos(\theta_1 + \theta_2)$.
    The (1,2) entry: $(\cos \theta_1)(-\sin \theta_2) - (\sin \theta_1)(\cos \theta_2) = -(\sin \theta_1 \cos \theta_2 + \cos \theta_1 \sin \theta_2) = -\sin(\theta_1 + \theta_2)$.
    The (2,1) entry: $(\sin \theta_1)(\cos \theta_2) + (\cos \theta_1)(\sin \theta_2) = \sin(\theta_1 + \theta_2)$.
    The (2,2) entry: $(\sin \theta_1)(-\sin \theta_2) + (\cos \theta_1)(\cos \theta_2) = \cos(\theta_1 + \theta_2)$.

    So, $R_{\theta_1} R_{\theta_2} = \begin{pmatrix} \cos(\theta_1 + \theta_2) & -\sin(\theta_1 + \theta_2) \\ \sin(\theta_1 + \theta_2) & \cos(\theta_1 + \theta_2) \end{pmatrix} = R_{\theta_1 + \theta_2}$.
    This shows that the multiplication of rotation matrices corresponds to adding their angles, which is a beautiful property! This also links to the idea of composing transformations.

---

### 6. Connection to Course Outcomes

Let's explicitly map what we've learned today to our Course Outcomes:

*   **CO4: Understand the concept of linear transformation and to apply its properties, to find the rank and nullity of a linear transformation and to find the matrices of linear transformations.**
    *   We've established that rotation in $\mathbb{R}^2$ is a linear transformation.
    *   We derived the standard matrix $R_\theta$ for this transformation. This directly addresses "find the matrices of linear transformations."
    *   The properties of $R_\theta$ (determinant = 1, orthogonality) are key properties of this specific linear transformation. The fact that the determinant is non-zero means the transformation is invertible and has full rank (rank 2 for $\mathbb{R}^2$). Nullity would be 0.
    *   Understanding the composition of rotations ($R_{\theta_1} R_{\theta_2} = R_{\theta_1+\theta_2}$) and the inverse ($R_\theta^{-1} = R_\theta^T$) are applications of its properties.

*   **CO1: Solve system of linear equations, to evaluate eigen values and eigen vectors of matrices and to diagonalize matrices.**
    *   While not directly a focus of *this specific topic*, the rotation matrix itself is a matrix we could analyze for eigenvalues and eigenvectors. What are they?
    *   For a rotation matrix $R_\theta$ with $\theta \neq k\pi$ (where $k$ is an integer), the only vector that doesn't change direction is the zero vector. However, if you allow complex numbers, there are complex eigenvalues and eigenvectors.
    *   For $\theta=0$ (identity), eigenvalues are 1, 1. For $\theta=\pi$ (180-degree rotation), eigenvalues are -1, -1. For other $\theta$, there are no real eigenvalues, meaning no real vector maintains its direction (except the zero vector).
    *   This matrix is generally not diagonalizable over the real numbers for most angles, which is an important concept related to diagonalization.

*   **CO2: Understand the concepts of vector spaces and subspaces and to apply their properties.**
    *   $\mathbb{R}^2$ is our vector space. Rotations operate within this space. The basis vectors and their transformations are key to understanding the structure of the space under transformation.

*   **CO3: Describe inner product spaces and their properties, to apply orthonormalization process and to solve least square problems.**
    *   The orthogonality property of rotation matrices ($Q^T Q = I$) directly relates to the concepts of inner products and orthonormal bases, which are central to CO3. The columns of $R_\theta$ forming an orthonormal set is a prime example.

---

### 7. Common Pitfalls and Exam Tips

*   **Angle Direction:** Always be mindful of whether the rotation is clockwise or counterclockwise. The standard matrix is for counterclockwise. A clockwise rotation by $\phi$ is $R_{-\phi}$.
*   **Radians vs. Degrees:** Ensure your trigonometric functions are using the correct units (radians are standard in calculus and linear algebra).
*   **Matrix Multiplication Order:** For composing transformations, the order matters. If you have a vector $\mathbf{v}$ and apply transformation $A$ then $B$, the result is $B(A\mathbf{v}) = (BA)\mathbf{v}$. So, the matrix for the combined transformation is $BA$.
*   **Complex Numbers:** For exam questions involving eigenvalues of rotation matrices (when $\theta$ is not $0$ or $\pi$), remember to consider complex numbers.

---

### Sample Questions and Answers

**Question 1 (Conceptual):**
Explain why the determinant of a rotation matrix in $\mathbb{R}^2$ is always 1. What is the geometric significance of this fact?

**Answer 1:**
The rotation matrix in $\mathbb{R}^2$ for an angle $\theta$ is $R_\theta = \begin{pmatrix} \cos \theta & -\sin \theta \\ \sin \theta & \cos \theta \end{pmatrix}$. Its determinant is $\det(R_\theta) = (\cos \theta)(\cos \theta) - (-\sin \theta)(\sin \theta) = \cos^2 \theta + \sin^2 \theta = 1$.
Geometrically, a determinant of 1 signifies that the transformation preserves area and orientation. A rotation spins an object without stretching or shrinking it, and it doesn't flip it inside out. The unit square, for instance, remains a unit square (just rotated) after a rotation, so its area (1) is unchanged.

**Question 2 (Exam-Oriented):**
Find the matrix for a rotation in $\mathbb{R}^2$ by $30^\circ$ clockwise about the origin.

**Answer 2:**
A clockwise rotation by $30^\circ$ is equivalent to a counterclockwise rotation by $-30^\circ$.
So, $\theta = -30^\circ = -\frac{\pi}{6}$ radians.
We need to calculate $\cos(-30^\circ)$ and $\sin(-30^\circ)$.
$\cos(-30^\circ) = \cos(30^\circ) = \frac{\sqrt{3}}{2}$
$\sin(-30^\circ) = -\sin(30^\circ) = -\frac{1}{2}$

The rotation matrix $R_{-30^\circ}$ is:
$$R_{-30^\circ} = \begin{pmatrix} \cos(-30^\circ) & -\sin(-30^\circ) \\ \sin(-30^\circ) & \cos(-30^\circ) \end{pmatrix} = \begin{pmatrix} \frac{\sqrt{3}}{2} & -(-\frac{1}{2}) \\ -\frac{1}{2} & \frac{\sqrt{3}}{2} \end{pmatrix} = \begin{pmatrix} \frac{\sqrt{3}}{2} & \frac{1}{2} \\ -\frac{1}{2} & \frac{\sqrt{3}}{2} \end{pmatrix}$$

**Question 3 (Application):**
A point $P$ is located at $(3, 4)$. If $P$ is rotated $90^\circ$ counterclockwise about the origin, what are its new coordinates?

**Answer 3:**
The vector for point $P$ is $\mathbf{p} = \begin{pmatrix} 3 \\ 4 \end{pmatrix}$.
The rotation is $90^\circ$ counterclockwise, so $\theta = 90^\circ = \frac{\pi}{2}$.
The rotation matrix is $R_{90^\circ} = \begin{pmatrix} \cos(90^\circ) & -\sin(90^\circ) \\ \sin(90^\circ) & \cos(90^\circ) \end{pmatrix} = \begin{pmatrix} 0 & -1 \\ 1 & 0 \end{pmatrix}$.

The new coordinates are found by multiplying the rotation matrix by the vector:
$$\mathbf{p}' = R_{90^\circ} \mathbf{p} = \begin{pmatrix} 0 & -1 \\ 1 & 0 \end{pmatrix} \begin{pmatrix} 3 \\ 4 \end{pmatrix} = \begin{pmatrix} (0)(3) + (-1)(4) \\ (1)(3) + (0)(4) \end{pmatrix} = \begin{pmatrix} -4 \\ 3 \end{pmatrix}$$
The new coordinates are $(-4, 3)$.

---

This concludes our overview of rotations in $\mathbb{R}^2$. Remember, these transformations are building blocks for many complex operations in information science. Keep practicing with different angles and points, and always visualize the geometric effect!
