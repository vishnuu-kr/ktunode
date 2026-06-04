---
title: "Definitions of length, distance and angle"
subject: "MATHEMATICS FOR INFORMATION SCIENCE – 2"
module: "Module 3: Vector length and unit vector"
branch: "Computer Science and Engineering"
semester: 2
topicId: "68b45b6e58474a0b135b5d21"
status: "completed"
scrapedAt: "2026-05-20T16:34:45.235Z"
---
Let's dive into Module 3 of our "Mathematics for Information Science – 2" course. Today, we're going to talk about something fundamental: how we measure things in the world of vectors. Think of vectors as arrows that represent direction and magnitude. We'll be exploring their **length**, the **distance** between them, and the **angle** that separates them. These concepts might sound simple, but they are the bedrock for so much of what we do in information science, from machine learning to computer graphics.

Our main goal here is to equip you with the tools to quantify relationships between data points represented as vectors. This directly ties into several of our Course Outcomes (COs):

*   **CO1:** Solving systems of equations and understanding eigenvalues/eigenvectors often relies on understanding how vectors "scale" and interact, which is intimately linked to their lengths and the angles between them.
*   **CO2:** When we talk about vector spaces, the concepts of length and distance are what give these spaces structure and allow us to define concepts like "closeness" between data points.
*   **CO3:** This module is a direct precursor to understanding inner product spaces. The inner product is *how* we define length and angle! So, everything we learn today is crucial for orthonormalization and least squares.
*   **CO4:** While linear transformations might seem abstract, understanding how they affect the *size* and *orientation* of vectors (which relates to length and angle) is key to grasping their geometric interpretation.

So, let's get started by building our intuition.

## 3.1 Defining Length: How Long is This Arrow?

Imagine you have a set of coordinates on a map. You want to know how far it is from your current location to the coffee shop. In mathematical terms, your current location and the coffee shop's location can be represented by vectors. The "how far" is essentially the **length** of the vector connecting these two points.

In an information science context, think about two documents that have been converted into vectors based on the frequency of certain words. The length of these vectors might tell us something about the "richness" or "density" of information in those documents.

### 3.1.1 The Euclidean Length: Our Go-To Measure

When we talk about length in vector spaces, especially in the context of what we're doing in this course, we almost always mean the **Euclidean length**, also known as the **magnitude** or **norm**.

Let's start in a familiar 2D space. A vector $\mathbf{v}$ in 2D can be written as $(v_1, v_2)$. Geometrically, this is an arrow starting from the origin (0,0) and pointing to the point $(v_1, v_2)$. How do we find the length of this arrow? We use the Pythagorean theorem!

If you draw the vector, it forms the hypotenuse of a right-angled triangle. The two other sides are the components $v_1$ and $v_2$. The lengths of these sides are $|v_1|$ and $|v_2|$. So, by the Pythagorean theorem:

Length$^2$ = $v_1^2 + v_2^2$

Therefore, the length of vector $\mathbf{v}$, denoted as $\|\mathbf{v}\|$, is:

$\|\mathbf{v}\| = \sqrt{v_1^2 + v_2^2}$

**Example:** Consider the vector $\mathbf{v} = (3, 4)$. Its length is $\|\mathbf{v}\| = \sqrt{3^2 + 4^2} = \sqrt{9 + 16} = \sqrt{25} = 5$. It's like a 3-4-5 right triangle!

Now, what about higher dimensions? This concept generalizes beautifully. For a vector $\mathbf{v} = (v_1, v_2, v_3, \dots, v_n)$ in $\mathbb{R}^n$, the Euclidean length is given by:

$\|\mathbf{v}\| = \sqrt{v_1^2 + v_2^2 + v_3^2 + \dots + v_n^2}$

This formula is incredibly important. It's derived from the inner product, which we'll explore more in CO3. For now, just remember that the square of the length is the sum of the squares of the components.

**Connecting to Textbooks:** Both Kreyszig (Chapter 7, Section 7.1) and Larson (Chapter 6, Section 6.1) define the norm of a vector this way. They’ll often call it the "Euclidean norm" or "length of a vector." It's your fundamental way to measure the "size" of a vector.

**Important Note:** Length is always non-negative. A zero vector $(0, 0, \dots, 0)$ has a length of 0, and any non-zero vector has a positive length.

### 3.1.2 What if the Vector Doesn't Start at the Origin?

Sometimes, we have a vector that represents the displacement from point A to point B, where neither A nor B is the origin. For example, A = (1, 2) and B = (4, 6). To find the vector from A to B, we subtract the coordinates of A from the coordinates of B:

$\mathbf{v} = B - A = (4-1, 6-2) = (3, 4)$

Once we have this displacement vector, we can find its length using the same formula: $\|\mathbf{v}\| = \sqrt{3^2 + 4^2} = 5$.

This leads us directly to the concept of **distance**.

## 3.2 Defining Distance: How Far Apart Are These Two Points?

The **distance** between two points, say $P = (p_1, p_2, \dots, p_n)$ and $Q = (q_1, q_2, \dots, q_n)$, is simply the length of the vector that connects them. How do we find that vector? By subtracting the coordinates of one point from the other.

The vector from P to Q is $\mathbf{v} = Q - P = (q_1 - p_1, q_2 - p_2, \dots, q_n - p_n)$.

The distance between P and Q, often denoted as $d(P, Q)$, is then the length of this vector:

$d(P, Q) = \|Q - P\| = \sqrt{(q_1 - p_1)^2 + (q_2 - p_2)^2 + \dots + (q_n - p_n)^2}$

**Relatable Example:** Imagine you're trying to estimate how similar two customer profiles are, based on their purchase history (e.g., number of times they bought product X, product Y, etc.). Each customer profile can be a vector in a multi-dimensional space. The distance between these vectors tells you how "different" the customers are in terms of their purchasing behaviour. A small distance means they are similar, a large distance means they are quite different. This is a core idea in recommender systems and customer segmentation, directly impacting **CO2** and **CO3**.

**Exam Tip:** Be careful with the order of subtraction! Distance is always non-negative. $(P-Q)$ will have components that are the negative of $(Q-P)$, but when you square them, the result is the same. So, $\|P - Q\| = \|Q - P\|$. The distance between your house and the library is the same as the distance between the library and your house.

**Summary for Distance:** Distance is just the length of the "difference vector" between two points.

## 3.3 Defining Angle: How Are These Vectors Oriented Relative to Each Other?

Angles are crucial for understanding the relationship between vectors. Are they pointing in the same direction? Opposite directions? Are they perpendicular?

Think about two different feature vectors representing images. If the angle between them is small, it suggests the images are similar in their features. If the angle is close to 90 degrees, they are quite different. This is fundamental for **CO3** (inner product spaces) and has implications for **CO2** (vector spaces).

### 3.3.1 The Dot Product: Our Key to Angles

To find the angle between two vectors, we need a concept called the **dot product** (or inner product). For vectors $\mathbf{u} = (u_1, u_2, \dots, u_n)$ and $\mathbf{v} = (v_1, v_2, \dots, v_n)$, the dot product, denoted as $\mathbf{u} \cdot \mathbf{v}$, is calculated as:

$\mathbf{u} \cdot \mathbf{v} = u_1 v_1 + u_2 v_2 + \dots + u_n v_n$

Notice that the dot product of two vectors results in a *scalar* (a single number), not another vector.

**Example:** If $\mathbf{u} = (1, 2)$ and $\mathbf{v} = (3, -1)$, then $\mathbf{u} \cdot \mathbf{v} = (1)(3) + (2)(-1) = 3 - 2 = 1$.

Now, how does the dot product relate to the angle? There's a beautiful geometric relationship, often called the **Cauchy-Schwarz inequality** in its general form, but for the angle, it's more directly stated as:

$\mathbf{u} \cdot \mathbf{v} = \|\mathbf{u}\| \|\mathbf{v}\| \cos \theta$

where $\theta$ is the angle between vectors $\mathbf{u}$ and $\mathbf{v}$.

This formula is incredibly powerful! It connects the algebraic definition of the dot product (sum of products of components) with its geometric interpretation (lengths and the angle).

To find the angle $\theta$, we can rearrange this formula:

$\cos \theta = \frac{\mathbf{u} \cdot \mathbf{v}}{\|\mathbf{u}\| \|\mathbf{v}\|}$

And then, we can find the angle itself using the inverse cosine function (arccosine):

$\theta = \arccos \left( \frac{\mathbf{u} \cdot \mathbf{v}}{\|\mathbf{u}\| \|\mathbf{v}\|} \right)$

**Crucial Point:** This formula requires that both $\|\mathbf{u}\|$ and $\|\mathbf{v}\|$ are non-zero. We can't divide by zero! So, we can only define angles between non-zero vectors.

**Connecting to Textbooks:** This relationship is a cornerstone of linear algebra. You'll find it in Kreyszig (Chapter 7, Section 7.2, specifically on the dot product and angle) and Larson (Chapter 6, Section 6.2). The term "inner product" is often used interchangeably with "dot product" in this context, and it's the foundation for **CO3**.

### 3.3.2 Interpreting the Angle

The value of $\cos \theta$ tells us a lot about the angle $\theta$:

*   If $\mathbf{u} \cdot \mathbf{v} > 0$: Then $\cos \theta > 0$, which means $0^\circ \le \theta < 90^\circ$. The vectors are pointing in roughly the same direction. They are "acute" with respect to each other.
*   If $\mathbf{u} \cdot \mathbf{v} < 0$: Then $\cos \theta < 0$, which means $90^\circ < \theta \le 180^\circ$. The vectors are pointing in roughly opposite directions. They are "obtuse" with respect to each other.
*   If $\mathbf{u} \cdot \mathbf{v} = 0$: Then $\cos \theta = 0$ (assuming non-zero vectors). This means $\theta = 90^\circ$ (or $\pi/2$ radians). The vectors are **orthogonal** (perpendicular). This is a super important concept, especially for **CO3** (orthonormalization).

**Orthogonality Example:** Consider $\mathbf{u} = (1, 0)$ and $\mathbf{v} = (0, 1)$. These are vectors along the x and y axes.
$\mathbf{u} \cdot \mathbf{v} = (1)(0) + (0)(1) = 0$.
$\|\mathbf{u}\| = \sqrt{1^2 + 0^2} = 1$.
$\|\mathbf{v}\| = \sqrt{0^2 + 1^2} = 1$.
$\cos \theta = \frac{0}{1 \cdot 1} = 0$.
$\theta = \arccos(0) = 90^\circ$. They are indeed perpendicular!

**Vector Lengths and Angles in Information Science:**

*   **Clustering:** In clustering algorithms (like K-Means), we often measure the distance between data points (vectors) to group similar points together. The geometric interpretation of length and distance is paramount here.
*   **Natural Language Processing (NLP):** Word embeddings (like Word2Vec or GloVe) represent words as vectors. The cosine similarity, which is derived from the angle formula ($\cos \theta = \frac{\mathbf{u} \cdot \mathbf{v}}{\|\mathbf{u}\| \|\mathbf{v}\|}$), is used to measure the semantic similarity between words. If two words have similar meanings, their vectors will point in similar directions, resulting in a small angle and a high cosine similarity. This directly relates to understanding data and its meaning, touching **CO2** and **CO3**.
*   **Computer Graphics:** Determining how light reflects off surfaces or how objects are oriented in 3D space heavily relies on vector angles and their relationships.

**Putting it all together for Exam Readiness:**

*   **Know the formulas by heart:**
    *   $\|\mathbf{v}\| = \sqrt{v_1^2 + v_2^2 + \dots + v_n^2}$
    *   $d(P, Q) = \|Q - P\| = \sqrt{(q_1 - p_1)^2 + \dots + (q_n - p_n)^2}$
    *   $\mathbf{u} \cdot \mathbf{v} = u_1 v_1 + u_2 v_2 + \dots + u_n v_n$
    *   $\cos \theta = \frac{\mathbf{u} \cdot \mathbf{v}}{\|\mathbf{u}\| \|\mathbf{v}\|}$
*   **Understand the geometric meaning:** Length is size, distance is separation, and angle is orientation.
*   **Be ready to compute:** You'll definitely be asked to calculate lengths, distances, dot products, and angles for given vectors.
*   **Recognize orthogonality:** A dot product of zero means perpendicular vectors. This is a recurring theme.
*   **Connect to applications:** Think about how these geometric measures translate to data similarity, classification, or other information science tasks.

We've laid a solid foundation for understanding vectors. Next, we'll build upon this by exploring the concept of unit vectors, which are simply vectors of length 1, and how they help us normalize directions. But for now, make sure these definitions of length, distance, and angle are crystal clear. They are your primary tools for quantitative analysis in vector spaces!

---

## Sample Questions and Answers

**Question 1 (Conceptual):**
Explain the relationship between the dot product of two vectors and the angle between them. Why is this relationship important in information science?

**Answer:**
The dot product of two vectors $\mathbf{u}$ and $\mathbf{v}$ is algebraically defined as the sum of the products of their corresponding components: $\mathbf{u} \cdot \mathbf{v} = u_1 v_1 + u_2 v_2 + \dots + u_n v_n$. Geometrically, it's related to their lengths and the cosine of the angle $\theta$ between them by the formula: $\mathbf{u} \cdot \mathbf{v} = \|\mathbf{u}\| \|\mathbf{v}\| \cos \theta$.

This relationship is crucial in information science because it allows us to quantify the similarity in orientation between vectors representing data. For instance, in Natural Language Processing (NLP), word embeddings represent words as vectors. The cosine of the angle between these vectors (derived from the dot product) indicates their semantic similarity. A small angle (high cosine similarity) means the words are semantically related, which is vital for tasks like information retrieval and recommender systems. It bridges the gap between algebraic operations and meaningful interpretations of data relationships.

**Question 2 (Computational):**
Let $P = (1, -2, 3)$ and $Q = (4, 0, -1)$.
(a) Find the vector $\mathbf{v}$ from point P to point Q.
(b) Calculate the length of vector $\mathbf{v}$.
(c) Calculate the distance between points P and Q.

**Answer:**
(a) To find the vector $\mathbf{v}$ from P to Q, we subtract the coordinates of P from the coordinates of Q:
$\mathbf{v} = Q - P = (4 - 1, 0 - (-2), -1 - 3) = (3, 2, -4)$.

(b) The length of vector $\mathbf{v}$ is calculated using the Euclidean norm formula:
$\|\mathbf{v}\| = \sqrt{v_1^2 + v_2^2 + v_3^2} = \sqrt{3^2 + 2^2 + (-4)^2}$
$\|\mathbf{v}\| = \sqrt{9 + 4 + 16} = \sqrt{29}$.

(c) The distance between points P and Q is the length of the vector connecting them, which is precisely $\|\mathbf{v}\|$ calculated in part (b).
Distance $d(P, Q) = \|\mathbf{v}\| = \sqrt{29}$.

**Question 3 (Application/Conceptual):**
Two vectors, $\mathbf{a} = (2, 1)$ and $\mathbf{b} = (-1, 2)$, are given.
(a) Calculate the dot product $\mathbf{a} \cdot \mathbf{b}$.
(b) Determine if vectors $\mathbf{a}$ and $\mathbf{b}$ are orthogonal. Justify your answer.
(c) If you were representing two data points with these vectors, what would the result in (b) imply about their relationship?

**Answer:**
(a) The dot product $\mathbf{a} \cdot \mathbf{b}$ is:
$\mathbf{a} \cdot \mathbf{b} = (2)(-1) + (1)(2) = -2 + 2 = 0$.

(b) Two vectors are orthogonal if their dot product is zero (provided they are non-zero vectors, which these are). Since $\mathbf{a} \cdot \mathbf{b} = 0$, vectors $\mathbf{a}$ and $\mathbf{b}$ are indeed orthogonal. This means the angle between them is 90 degrees.

(c) If these vectors represented two data points, the fact that they are orthogonal implies that the features or characteristics represented by these vectors are independent or unrelated in some way. In a 2D feature space, for example, if one vector represents 'price' and another represents 'customer satisfaction score', orthogonality might suggest that these two aspects of the data point don't influence each other in the way captured by this representation. This concept is foundational for understanding basis vectors and transformations, relevant to **CO1** and **CO2**.
