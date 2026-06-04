---
title: "The Cauchy- Schwarz Inequality"
subject: "MATHEMATICS FOR INFORMATION SCIENCE – 2"
module: "Module 3: Vector length and unit vector"
branch: "Computer Science and Engineering"
semester: 2
topicId: "68b45b6e58474a0b135b5d1d"
status: "completed"
scrapedAt: "2026-05-20T16:34:42.347Z"
---
## Module 3: Vector Length and Unit Vector

### Topic: The Cauchy-Schwarz Inequality

Welcome, everyone! Today, we're going to delve into one of the most fundamental and widely applicable inequalities in mathematics, particularly in fields like information science, machine learning, and physics: **The Cauchy-Schwarz Inequality**. You've already learned about vector lengths and unit vectors, and this inequality beautifully connects these concepts with the idea of how "aligned" two vectors are. It's a cornerstone for understanding many results that will follow, so let's really get a solid grasp of it.

This topic is crucial for achieving **Course Outcome CO3**, which is about understanding inner product spaces and their properties. The Cauchy-Schwarz inequality is a direct consequence of the properties of inner products, and it underpins many of the applications within CO3, such as understanding geometric relationships between vectors and solving optimization problems.

### 1. What is the Cauchy-Schwarz Inequality?

At its heart, the Cauchy-Schwarz inequality tells us that the absolute value of the dot product (or inner product) of two vectors is less than or equal to the product of their lengths. It's a statement about the maximum possible "overlap" or "correlation" between two vectors.

Let's start with a formal definition and then we'll unpack it with some intuition.

**Definition:** For any two vectors $\mathbf{u}$ and $\mathbf{v}$ in an inner product space (like $\mathbb{R}^n$ with the standard dot product), the Cauchy-Schwarz inequality states:

$$|\mathbf{u} \cdot \mathbf{v}| \le \|\mathbf{u}\| \|\mathbf{v}\|$$

Here, $\mathbf{u} \cdot \mathbf{v}$ is the dot product (or inner product) of vectors $\mathbf{u}$ and $\mathbf{v}$, and $\|\mathbf{u}\|$ and $\|\mathbf{v}\|$ are their respective lengths (or norms).

Now, what does this *mean*? Think about the dot product as a measure of how much two vectors point in the same direction. If they point in exactly the same direction, the dot product is at its maximum positive value. If they point in exactly opposite directions, it's at its maximum negative value. If they are perpendicular, the dot product is zero.

The inequality tells us that no matter how "aligned" or "anti-aligned" two vectors are, the absolute value of their dot product will *never* exceed the product of their individual magnitudes. It's like saying the "strength of their combined effort" (the dot product) is limited by their individual strengths (their lengths).

This is a very powerful statement, and it's often used to prove other inequalities and results. For instance, when we talk about **Course Outcome CO3** and the concept of "orthonormalization" or "least squares," understanding the bounds provided by Cauchy-Schwarz is fundamental.

**Connecting to our Textbooks:** This inequality is a standard result in any good linear algebra text. You'll find it discussed in detail in **Kreyszig's Advanced Engineering Mathematics** and **Larson's Elementary Linear Algebra**. They often prove it using algebraic manipulations involving quadratic forms or geometric arguments.

### 2. Intuitive Understanding and Examples

Let's try to build some intuition with a simple example and then a relatable analogy.

**Example in $\mathbb{R}^2$:**

Consider two vectors in $\mathbb{R}^2$:
$\mathbf{u} = \begin{pmatrix} 3 \\ 4 \end{pmatrix}$ and $\mathbf{v} = \begin{pmatrix} 1 \\ 1 \end{pmatrix}$

First, let's calculate their lengths:
$\|\mathbf{u}\| = \sqrt{3^2 + 4^2} = \sqrt{9 + 16} = \sqrt{25} = 5$
$\|\mathbf{v}\| = \sqrt{1^2 + 1^2} = \sqrt{1 + 1} = \sqrt{2}$

Now, let's calculate their dot product:
$\mathbf{u} \cdot \mathbf{v} = (3)(1) + (4)(1) = 3 + 4 = 7$

The Cauchy-Schwarz inequality states: $|\mathbf{u} \cdot \mathbf{v}| \le \|\mathbf{u}\| \|\mathbf{v}\|$
$|7| \le 5 \cdot \sqrt{2}$
$7 \le 5\sqrt{2}$

Is this true? Let's check: $5\sqrt{2} \approx 5 \times 1.414 = 7.07$.
So, $7 \le 7.07$. Yes, the inequality holds!

Now, let's consider a case where the vectors are more "aligned."
Let $\mathbf{w} = \begin{pmatrix} 6 \\ 8 \end{pmatrix}$ (which is just $2\mathbf{u}$) and $\mathbf{v} = \begin{pmatrix} 1 \\ 1 \end{pmatrix}$.

$\|\mathbf{w}\| = \sqrt{6^2 + 8^2} = \sqrt{36 + 64} = \sqrt{100} = 10$
$\mathbf{w} \cdot \mathbf{v} = (6)(1) + (8)(1) = 6 + 8 = 14$

The inequality: $|14| \le 10 \cdot \sqrt{2}$
$14 \le 10\sqrt{2}$
$14 \le 14.14$. Again, it holds. Notice how the dot product $14$ is closer to the maximum possible value $14.14$ compared to the previous $7$ which was closer to $7.07$.

**Analogy: Teamwork and Individual Strengths**

Imagine you have two people, Alice and Bob, who are working on a project.
Let vector $\mathbf{u}$ represent Alice's skill set and effort, and vector $\mathbf{v}$ represent Bob's skill set and effort.
The "dot product" $\mathbf{u} \cdot \mathbf{v}$ could be thought of as the "synergy" or "combined output" they achieve together on the project, where their efforts complement each other.
The "lengths" $\|\mathbf{u}\|$ and $\|\mathbf{v}\|$ represent their individual capacities or total effort.

The Cauchy-Schwarz inequality tells us that the synergy or combined output they achieve together will never be *more* than the product of their individual capacities. If Alice is incredibly skilled and Bob is incredibly skilled, their combined output can be very high, but it's bounded by simply multiplying their individual potentials. It's impossible for their collaboration to magically produce more output than the sum of their maximum potential outputs multiplied together.

Think about it: if Alice can lift 100kg and Bob can lift 150kg, their *combined* lifting power is at most 250kg (if they lift together in a specific way, like a tug-of-war where their strengths align). However, the product of their individual strengths is $100 \times 150 = 15000$. Clearly, their combined effort is much, much smaller than this product. The inequality is $|100+150| \le 100 \times 150$, which is $250 \le 15000$. This analogy shows that the dot product is a specific way of combining efforts that is limited by individual efforts.

Now, what if Alice and Bob are working on tasks that are perfectly aligned? For instance, if Bob's skills and efforts are exactly double Alice's ($\mathbf{v} = 2\mathbf{u}$). In this case, their dot product will be maximized relative to their lengths, and the inequality will be very close to equality.

This connection to "alignment" is key. The Cauchy-Schwarz inequality essentially says that the dot product is maximized (in absolute value) when the vectors are parallel.

### 3. The Equality Condition

A crucial aspect of any inequality is understanding *when* equality holds. This often tells us a lot about the underlying structure.

**Equality holds in the Cauchy-Schwarz inequality if and only if $\mathbf{u}$ and $\mathbf{v}$ are linearly dependent.**

What does "linearly dependent" mean?
*   For two vectors, it means one is a scalar multiple of the other. That is, $\mathbf{u} = c\mathbf{v}$ for some scalar $c$, or $\mathbf{v} = c\mathbf{u}$ for some scalar $c$, or one of them is the zero vector.
*   If $\mathbf{u} = c\mathbf{v}$, then $\mathbf{u} \cdot \mathbf{v} = (c\mathbf{v}) \cdot \mathbf{v} = c(\mathbf{v} \cdot \mathbf{v}) = c\|\mathbf{v}\|^2$.
*   And $\|\mathbf{u}\| = \|c\mathbf{v}\| = |c|\|\mathbf{v}\|$.
*   So, $\|\mathbf{u}\| \|\mathbf{v}\| = |c|\|\mathbf{v}\| \|\mathbf{v}\| = |c|\|\mathbf{v}\|^2$.
*   Thus, $|\mathbf{u} \cdot \mathbf{v}| = |c|\|\mathbf{v}\|^2$ and $\|\mathbf{u}\| \|\mathbf{v}\| = |c|\|\mathbf{v}\|^2$.
*   They are equal!

This makes perfect sense with our "alignment" idea. When vectors are parallel (one is a multiple of the other), they are perfectly aligned, and their dot product reaches its maximum possible value relative to their lengths, leading to equality in the Cauchy-Schwarz inequality.

**What if one of the vectors is the zero vector?**
If $\mathbf{u} = \mathbf{0}$, then $|\mathbf{0} \cdot \mathbf{v}| = |0| = 0$.
And $\|\mathbf{0}\| \|\mathbf{v}\| = 0 \cdot \|\mathbf{v}\| = 0$.
So, $0 \le 0$, which is true. The zero vector is linearly dependent with any other vector, so the equality condition holds here too.

**Exam Tip:** When asked about the conditions for equality in Cauchy-Schwarz, remember "linear dependence" and what it means for vectors. This is a common point tested in exams.

### 4. Proof of the Cauchy-Schwarz Inequality

There are several ways to prove this inequality. A common and elegant proof relies on constructing a quadratic function. This showcases how algebraic techniques can establish geometric relationships. This proof is fundamental for understanding the structure of inner product spaces, which directly relates to **Course Outcome CO3**.

Let $\mathbf{u}$ and $\mathbf{v}$ be vectors in an inner product space.

**Case 1: $\mathbf{v} = \mathbf{0}$**
As we saw, if $\mathbf{v} = \mathbf{0}$, then $|\mathbf{u} \cdot \mathbf{0}| = 0$ and $\|\mathbf{u}\| \|\mathbf{0}\| = 0$. So, $0 \le 0$, and the inequality holds.

**Case 2: $\mathbf{v} \ne \mathbf{0}$**
Consider the vector $\mathbf{w} = \mathbf{u} - t\mathbf{v}$ for any real scalar $t$.
By the properties of inner product spaces (specifically, that the inner product of a vector with itself is non-negative, i.e., $\|\mathbf{w}\|^2 \ge 0$), we have:
$(\mathbf{u} - t\mathbf{v}) \cdot (\mathbf{u} - t\mathbf{v}) \ge 0$

Let's expand this:
$\mathbf{u} \cdot (\mathbf{u} - t\mathbf{v}) - t\mathbf{v} \cdot (\mathbf{u} - t\mathbf{v}) \ge 0$
$(\mathbf{u} \cdot \mathbf{u}) - (\mathbf{u} \cdot t\mathbf{v}) - (t\mathbf{v} \cdot \mathbf{u}) + (t\mathbf{v} \cdot t\mathbf{v}) \ge 0$

Using the properties of linearity of the dot product:
$\|\mathbf{u}\|^2 - t(\mathbf{u} \cdot \mathbf{v}) - t(\mathbf{v} \cdot \mathbf{u}) + t^2(\mathbf{v} \cdot \mathbf{v}) \ge 0$

Since the dot product is commutative ($\mathbf{u} \cdot \mathbf{v} = \mathbf{v} \cdot \mathbf{u}$), and $\mathbf{v} \cdot \mathbf{v} = \|\mathbf{v}\|^2$:
$\|\mathbf{u}\|^2 - 2t(\mathbf{u} \cdot \mathbf{v}) + t^2\|\mathbf{v}\|^2 \ge 0$

This is a quadratic inequality in $t$ of the form $At^2 + Bt + C \ge 0$, where:
$A = \|\mathbf{v}\|^2$
$B = -2(\mathbf{u} \cdot \mathbf{v})$
$C = \|\mathbf{u}\|^2$

Since $\mathbf{v} \ne \mathbf{0}$, we know $A = \|\mathbf{v}\|^2 > 0$.
A quadratic $At^2 + Bt + C$ with $A > 0$ is always non-negative if and only if its discriminant is less than or equal to zero. The discriminant is $\Delta = B^2 - 4AC$.

So, we must have:
$(-2(\mathbf{u} \cdot \mathbf{v}))^2 - 4(\|\mathbf{v}\|^2)(\|\mathbf{u}\|^2) \le 0$
$4(\mathbf{u} \cdot \mathbf{v})^2 - 4\|\mathbf{u}\|^2 \|\mathbf{v}\|^2 \le 0$

Dividing by 4 (which is positive, so the inequality direction doesn't change):
$(\mathbf{u} \cdot \mathbf{v})^2 - \|\mathbf{u}\|^2 \|\mathbf{v}\|^2 \le 0$

Rearranging this gives:
$(\mathbf{u} \cdot \mathbf{v})^2 \le \|\mathbf{u}\|^2 \|\mathbf{v}\|^2$

Taking the square root of both sides (and recalling that $\sqrt{x^2} = |x|$):
$|\mathbf{u} \cdot \mathbf{v}| \le \|\mathbf{u}\| \|\mathbf{v}\|$

And there we have it – the Cauchy-Schwarz inequality!

**Proof of Equality:**
Now, when does equality hold in $B^2 - 4AC \le 0$? Equality holds when the discriminant is exactly zero, i.e., $B^2 - 4AC = 0$.
This happens when the quadratic $At^2 + Bt + C$ has exactly one real root. A quadratic $At^2 + Bt + C$ with $A > 0$ and $\Delta = 0$ can be written as $A(t - t_0)^2$ for some $t_0$.
In our case, $A = \|\mathbf{v}\|^2$ and $\Delta = 0$. The unique root $t_0$ of $At^2 + Bt + C = 0$ is given by $t = -B / (2A)$.
$t_0 = -(-2(\mathbf{u} \cdot \mathbf{v})) / (2\|\mathbf{v}\|^2) = (\mathbf{u} \cdot \mathbf{v}) / \|\mathbf{v}\|^2$.

If $\Delta = 0$, then $A(t - t_0)^2 = 0$ for this specific value of $t$.
This means that for $t = t_0 = (\mathbf{u} \cdot \mathbf{v}) / \|\mathbf{v}\|^2$, the expression $(\mathbf{u} - t\mathbf{v}) \cdot (\mathbf{u} - t\mathbf{v})$ must be zero.
$(\mathbf{u} - t_0\mathbf{v}) \cdot (\mathbf{u} - t_0\mathbf{v}) = 0$
This implies $\mathbf{u} - t_0\mathbf{v} = \mathbf{0}$, or $\mathbf{u} = t_0\mathbf{v}$.

This shows that $\mathbf{u}$ is a scalar multiple of $\mathbf{v}$ (specifically $t_0$ times $\mathbf{v}$). Therefore, $\mathbf{u}$ and $\mathbf{v}$ are linearly dependent.

Conversely, if $\mathbf{u} = c\mathbf{v}$ for some scalar $c$, we already showed that equality holds.

**Remember this:** The proof uses the fundamental property that the squared norm of any vector is non-negative. This is a very common technique in proving inequalities in vector spaces.

### 5. Applications and Significance

The Cauchy-Schwarz inequality is not just an abstract mathematical statement; it has profound implications and is used everywhere.

*   **Triangle Inequality:** The Cauchy-Schwarz inequality is the key ingredient in proving the Triangle Inequality for vectors, which states that $\|\mathbf{u} + \mathbf{v}\| \le \|\mathbf{u}\| + \|\mathbf{v}\|$. This is fundamental to defining a "metric" or distance in vector spaces, directly relevant to **Course Outcome CO3** (inner product spaces).
    Let's quickly see how:
    $\|\mathbf{u} + \mathbf{v}\|^2 = (\mathbf{u} + \mathbf{v}) \cdot (\mathbf{u} + \mathbf{v})$
    $= \mathbf{u} \cdot \mathbf{u} + 2(\mathbf{u} \cdot \mathbf{v}) + \mathbf{v} \cdot \mathbf{v}$
    $= \|\mathbf{u}\|^2 + 2(\mathbf{u} \cdot \mathbf{v}) + \|\mathbf{v}\|^2$
    Now, using Cauchy-Schwarz, $\mathbf{u} \cdot \mathbf{v} \le |\mathbf{u} \cdot \mathbf{v}| \le \|\mathbf{u}\| \|\mathbf{v}\|$.
    So, $\|\mathbf{u} + \mathbf{v}\|^2 \le \|\mathbf{u}\|^2 + 2\|\mathbf{u}\| \|\mathbf{v}\| + \|\mathbf{v}\|^2 = (\|\mathbf{u}\| + \|\mathbf{v}\|)^2$.
    Taking the square root of both sides gives $\|\mathbf{u} + \mathbf{v}\| \le \|\mathbf{u}\| + \|\mathbf{v}\|$.

*   **Defining Angles:** In $\mathbb{R}^n$, the dot product is related to the angle $\theta$ between two non-zero vectors $\mathbf{u}$ and $\mathbf{v}$ by $\mathbf{u} \cdot \mathbf{v} = \|\mathbf{u}\| \|\mathbf{v}\| \cos \theta$.
    If we divide the Cauchy-Schwarz inequality by $\|\mathbf{u}\| \|\mathbf{v}\|$ (assuming they are non-zero):
    $\frac{|\mathbf{u} \cdot \mathbf{v}|}{\|\mathbf{u}\| \|\mathbf{v}\|} \le 1$
    $\left| \frac{\mathbf{u} \cdot \mathbf{v}}{\|\mathbf{u}\| \|\mathbf{v}\|} \right| \le 1$
    $\left| \cos \theta \right| \le 1$
    This confirms that the cosine of any angle must be between -1 and 1, a fundamental geometric fact. The Cauchy-Schwarz inequality guarantees that the value $\frac{\mathbf{u} \cdot \mathbf{v}}{\|\mathbf{u}\| \|\mathbf{v}\|}$ is always a valid value for $\cos \theta$, allowing us to define the angle between vectors in any inner product space, which is a key concept in **Course Outcome CO3**.

*   **Machine Learning and Data Science:** This is where things get really interesting for Information Science.
    *   **Similarity Measures:** The expression $\frac{\mathbf{u} \cdot \mathbf{v}}{\|\mathbf{u}\| \|\mathbf{v}\|}$ is known as the **cosine similarity**. It measures the cosine of the angle between two vectors. A value of 1 means the vectors are identical (perfectly aligned), 0 means they are orthogonal (unrelated), and -1 means they are opposite. Cauchy-Schwarz ensures this value is always between -1 and 1. This is widely used in natural language processing (document similarity), recommendation systems, and many other areas where you want to quantify how "alike" two data points are when represented as vectors. (Refer to **Mathematics for Machine Learning** by Deisenroth et al. for more on this).
    *   **Optimization:** Many optimization algorithms rely on understanding the bounds provided by inequalities like Cauchy-Schwarz.
    *   **Signal Processing:** In analyzing signals, which are often represented as vectors or functions, this inequality helps understand the relationship between different parts of a signal or between different signals.

*   **Other Areas:** Physics (e.g., quantum mechanics), probability and statistics (e.g., correlation coefficients), and engineering all utilize this inequality extensively.

### 6. Generalizing to Different Inner Products

While we've primarily used the dot product in $\mathbb{R}^n$, the Cauchy-Schwarz inequality is true for *any* real inner product space. The proof we saw relied only on the abstract properties of an inner product (linearity, symmetry, positive-definiteness), not the specific components of the vectors.

So, if you have a different way of defining the "inner product" (like an integral for functions or a weighted sum for data), as long as it satisfies the axioms of an inner product, the Cauchy-Schwarz inequality will hold. This is a powerful unifying concept.

For example, for continuous functions $f(x)$ and $g(x)$ on an interval $[a, b]$, a common inner product is defined as:
$\langle f, g \rangle = \int_a^b f(x)g(x) dx$

The "norm" or "length" would be:
$\|f\| = \sqrt{\int_a^b (f(x))^2 dx}$

The Cauchy-Schwarz inequality for functions states:
$$ \left| \int_a^b f(x)g(x) dx \right| \le \sqrt{\int_a^b (f(x))^2 dx} \sqrt{\int_a^b (g(x))^2 dx} $$
This is fundamental in functional analysis and signal processing.

### 7. Summary and Key Takeaways

Let's recap the main points:

*   **What it is:** The absolute value of the dot product of two vectors is less than or equal to the product of their lengths: $|\mathbf{u} \cdot \mathbf{v}| \le \|\mathbf{u}\| \|\mathbf{v}\|$.
*   **What it means:** It bounds the "alignment" or "correlation" between two vectors by their individual magnitudes.
*   **Equality Condition:** Equality holds if and only if the vectors are linearly dependent (one is a scalar multiple of the other, or one is the zero vector).
*   **Why it's important:**
    *   It's a fundamental property of inner product spaces.
    *   It's crucial for proving other important inequalities like the Triangle Inequality.
    *   It allows us to define angles between vectors in general inner product spaces.
    *   It's the basis for important concepts in data science and machine learning like cosine similarity.
*   **Proof Technique:** Often proved by considering a quadratic in a scalar parameter $t$, using the non-negativity of squared norms.

**Remember this:** The Cauchy-Schwarz inequality is a fundamental relationship that ties together the concepts of vector magnitude and the interaction (dot product) between vectors. Its importance cannot be overstated, as it forms the bedrock for much of what we do in linear algebra and its applications.

---

### Sample Questions and Answers

Here are a few questions to test your understanding, ranging from conceptual checks to more exam-oriented problems.

**Question 1 (Conceptual):**
In your own words, explain why the Cauchy-Schwarz inequality is useful for measuring the similarity between two data points represented as vectors.

**Answer:**
The Cauchy-Schwarz inequality ensures that when we calculate the cosine similarity, $\frac{\mathbf{u} \cdot \mathbf{v}}{\|\mathbf{u}\| \|\mathbf{v}\|}$, the value will always be between -1 and 1. This ratio, derived from the inequality, directly relates to the angle between the vectors. A cosine value close to 1 indicates the vectors point in very similar directions (high similarity), a value close to 0 indicates they are largely unrelated (orthogonal), and a value close to -1 indicates they point in opposite directions (dissimilarity). Thus, the inequality guarantees a well-defined and bounded measure of similarity.

**Question 2 (Application):**
Given vectors $\mathbf{a} = \begin{pmatrix} 1 \\ -2 \\ 3 \end{pmatrix}$ and $\mathbf{b} = \begin{pmatrix} -4 \\ 5 \\ 6 \end{pmatrix}$, verify the Cauchy-Schwarz inequality.

**Answer:**
First, calculate the lengths of the vectors:
$\|\mathbf{a}\| = \sqrt{1^2 + (-2)^2 + 3^2} = \sqrt{1 + 4 + 9} = \sqrt{14}$
$\|\mathbf{b}\| = \sqrt{(-4)^2 + 5^2 + 6^2} = \sqrt{16 + 25 + 36} = \sqrt{77}$

Next, calculate the dot product:
$\mathbf{a} \cdot \mathbf{b} = (1)(-4) + (-2)(5) + (3)(6) = -4 - 10 + 18 = 4$

Now, check the inequality: $|\mathbf{a} \cdot \mathbf{b}| \le \|\mathbf{a}\| \|\mathbf{b}\|$
$|4| \le \sqrt{14} \sqrt{77}$
$4 \le \sqrt{14 \times 77}$
$4 \le \sqrt{1078}$

To verify, we can square both sides:
$4^2 \le 1078$
$16 \le 1078$
This is true, so the Cauchy-Schwarz inequality holds for these vectors.

**Question 3 (Equality Condition - Exam Style):**
Let $\mathbf{u}$ and $\mathbf{v}$ be two vectors. Under what condition does the Cauchy-Schwarz inequality $|\mathbf{u} \cdot \mathbf{v}| = \|\mathbf{u}\| \|\mathbf{v}\|$ hold? Explain why.

**Answer:**
The equality in the Cauchy-Schwarz inequality $|\mathbf{u} \cdot \mathbf{v}| = \|\mathbf{u}\| \|\mathbf{v}\|$ holds if and only if the vectors $\mathbf{u}$ and $\mathbf{v}$ are linearly dependent.

**Explanation:**
Linear dependence means that one vector can be expressed as a scalar multiple of the other. That is, $\mathbf{u} = c\mathbf{v}$ for some scalar $c$, or $\mathbf{v} = c\mathbf{u}$ for some scalar $c$, or one of the vectors is the zero vector.

If $\mathbf{u} = c\mathbf{v}$:
LHS: $|\mathbf{u} \cdot \mathbf{v}| = |(c\mathbf{v}) \cdot \mathbf{v}| = |c (\mathbf{v} \cdot \mathbf{v})| = |c| \|\mathbf{v}\|^2$.
RHS: $\|\mathbf{u}\| \|\mathbf{v}\| = \|c\mathbf{v}\| \|\mathbf{v}\| = |c| \|\mathbf{v}\| \|\mathbf{v}\| = |c| \|\mathbf{v}\|^2$.
Since LHS = RHS, equality holds.

If $\mathbf{u} = \mathbf{0}$, then $|\mathbf{0} \cdot \mathbf{v}| = 0$ and $\|\mathbf{0}\| \|\mathbf{v}\| = 0 \cdot \|\mathbf{v}\| = 0$. Equality holds. Similarly if $\mathbf{v} = \mathbf{0}$.

The proof of the inequality involves showing that the equality holds precisely when the quadratic $At^2 + Bt + C$ has a discriminant of zero, which leads to $\mathbf{u} - t\mathbf{v} = \mathbf{0}$ for a specific $t$, implying $\mathbf{u} = t\mathbf{v}$.

---
This concludes our discussion on the Cauchy-Schwarz Inequality. Make sure you understand the statement, its implications, and the condition for equality, as it's a cornerstone for many subsequent topics.
