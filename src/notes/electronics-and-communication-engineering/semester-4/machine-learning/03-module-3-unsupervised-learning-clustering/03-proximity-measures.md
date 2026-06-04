---
title: "proximity measures"
subject: "MACHINE LEARNING"
module: "Module 3: Unsupervised learning: Clustering"
branch: "Electronics and Communication Engineering"
semester: 4
topicId: "68a5c45eb09ce205780fe62e"
status: "completed"
scrapedAt: "2026-05-23T17:50:19.957Z"
---
# Machine Learning: Module 3 - Unsupervised Learning: Clustering - Proximity Measures

## Module Overview

This module delves into unsupervised learning, focusing on **Clustering**. Clustering is a technique used to group similar data points together without prior knowledge of the group labels. This module will explore how to define "similarity" or "dissimilarity" between data points using various **proximity measures**. Understanding these measures is crucial for the effectiveness of any clustering algorithm, as they form the foundation for assigning data points to clusters.

## Course Outcomes Addressed:

*   **CO3:** Design and execute clustering techniques, and assess their effectiveness using various proximity measures. (Knowledge Level: K3)

## Learning Outcomes:

Upon completion of this topic, you will be able to:

*   Understand the fundamental role of proximity measures in clustering algorithms.
*   Differentiate between various distance and similarity measures.
*   Select appropriate proximity measures based on the data type and clustering goal.
*   Calculate and interpret common proximity measures for different data types (e.g., numerical, binary).

## 1. Introduction to Proximity Measures in Clustering

### 1.1 What are Proximity Measures?

Proximity measures, also known as distance metrics or similarity/dissimilarity measures, quantify the "closeness" or "relatedness" between two data points. In the context of clustering, these measures are used to determine which data points are more similar to each other and, therefore, likely belong to the same cluster.

**Key Concept:** Clustering algorithms fundamentally rely on a measure of similarity (or its inverse, dissimilarity/distance) to group data.

### 1.2 Why are Proximity Measures Important?

*   **Cluster Formation:** They are the core engine for deciding which data points should be grouped together.
*   **Algorithm Choice:** Different clustering algorithms are designed to work with specific types of proximity measures.
*   **Data Interpretation:** The choice of measure can significantly impact the shape and interpretation of the discovered clusters.
*   **Attribute Importance:** Some measures can implicitly handle the relative importance of different features.

### 1.3 Types of Proximity Measures

Proximity measures can be broadly categorized based on the type of data they are applied to:

*   **Measures for Numerical Data:** Used for features with continuous or discrete numerical values.
*   **Measures for Binary Data:** Used for features that are only present or absent (e.g., categorical features with two states).
*   **Measures for Categorical Data:** Used for nominal or ordinal categorical features.

---

## 2. Proximity Measures for Numerical Data

These measures are typically based on calculating the difference between corresponding feature values of two data points.

### 2.1 Euclidean Distance

**Definition:** The most common distance measure, representing the straight-line distance between two points in Euclidean space.

For two data points $x = (x_1, x_2, ..., x_n)$ and $y = (y_1, y_2, ..., y_n)$, the Euclidean distance is:

$d(x, y) = \sqrt{\sum_{i=1}^{n} (x_i - y_i)^2}$

**Example:**
Let $x = (1, 2)$ and $y = (4, 6)$.
$d(x, y) = \sqrt{(1-4)^2 + (2-6)^2} = \sqrt{(-3)^2 + (-4)^2} = \sqrt{9 + 16} = \sqrt{25} = 5$

**Textbook Reference:**
*   **Geron (Hands-on Machine Learning):** Mentions Euclidean distance as a common choice for measuring distances between data points in chapters discussing clustering algorithms like K-Means.
*   **Müller & Guido (Introduction to Machine Learning with Python):** Explains Euclidean distance and its use in algorithms like K-Nearest Neighbors (KNN) and clustering.

**Important Point:** Sensitive to the scale of features. If features have vastly different scales, features with larger scales will dominate the distance calculation. **Feature scaling (e.g., standardization or min-max scaling) is often recommended before using Euclidean distance.** (CO3)

### 2.2 Manhattan Distance (City Block Distance)

**Definition:** The sum of the absolute differences of their Cartesian coordinates. It's like calculating distance by moving along the grid lines of a city block.

For two data points $x = (x_1, x_2, ..., x_n)$ and $y = (y_1, y_2, ..., y_n)$, the Manhattan distance is:

$d(x, y) = \sum_{i=1}^{n} |x_i - y_i|$

**Example:**
Let $x = (1, 2)$ and $y = (4, 6)$.
$d(x, y) = |1-4| + |2-6| = |-3| + |-4| = 3 + 4 = 7$

**Comparison with Euclidean:** Manhattan distance is less sensitive to outliers than Euclidean distance because it doesn't square the differences. It can be more appropriate when movement is restricted to axes.

### 2.3 Minkowski Distance

**Definition:** A generalized form of Euclidean and Manhattan distances.

For two data points $x = (x_1, x_2, ..., x_n)$ and $y = (y_1, y_2, ..., y_n)$, the Minkowski distance of order $p$ is:

$d(x, y) = \left(\sum_{i=1}^{n} |x_i - y_i|^p\right)^{1/p}$

*   When $p=1$, it's the Manhattan distance.
*   When $p=2$, it's the Euclidean distance.
*   As $p \to \infty$, it becomes the Chebyshev distance (maximum absolute difference).

**Chebyshev Distance (Maximum Value Distance):**
$d(x, y) = \max_{i=1}^{n} |x_i - y_i|$

**Textbook Reference:**
*   **Theodoridis & Koutroumbas (Pattern Recognition):** Provides a rigorous mathematical treatment of various distance measures, including Minkowski distance and its properties.

### 2.4 Cosine Similarity

**Definition:** Measures the cosine of the angle between two non-zero vectors. It's often used to measure the similarity between documents or other high-dimensional data where the magnitude of the vector is less important than its orientation.

**Formula:**

$similarity(x, y) = \frac{x \cdot y}{\|x\| \|y\|} = \frac{\sum_{i=1}^{n} x_i y_i}{\sqrt{\sum_{i=1}^{n} x_i^2} \sqrt{\sum_{i=1}^{n} y_i^2}}$

The value ranges from -1 (exactly opposite) to 1 (exactly the same direction), with 0 indicating orthogonality (unrelated). For clustering, we often use the **Cosine Distance**, which is $1 - \text{Cosine Similarity}$.

**Example:**
Let $x = (1, 0)$ and $y = (0, 1)$.
$x \cdot y = (1)(0) + (0)(1) = 0$
$\|x\| = \sqrt{1^2 + 0^2} = 1$
$\|y\| = \sqrt{0^2 + 1^2} = 1$
$similarity(x, y) = \frac{0}{1 \times 1} = 0$
Cosine Distance = $1 - 0 = 1$.

Let $x = (1, 1)$ and $y = (2, 2)$.
$x \cdot y = (1)(2) + (1)(2) = 4$
$\|x\| = \sqrt{1^2 + 1^2} = \sqrt{2}$
$\|y\| = \sqrt{2^2 + 2^2} = \sqrt{8} = 2\sqrt{2}$
$similarity(x, y) = \frac{4}{\sqrt{2} \times 2\sqrt{2}} = \frac{4}{4} = 1$
Cosine Distance = $1 - 1 = 0$.

**Important Point:** Unaffected by the magnitude of the vectors. Ideal for text data where document length can vary greatly.

---

## 3. Proximity Measures for Binary Data

Binary data consists of features that can take only one of two values (e.g., 0/1, True/False, Yes/No).

Let's consider two data points, $x$ and $y$, each with $n$ binary features. We can summarize the relationships between their feature values into four categories:

*   **$n_{11}$:** Number of features where both $x$ and $y$ have a value of 1. (Match, Present)
*   **$n_{00}$:** Number of features where both $x$ and $y$ have a value of 0. (Match, Absent)
*   **$n_{10}$:** Number of features where $x$ has 1 and $y$ has 0. (Mismatch, Absent in y)
*   **$n_{01}$:** Number of features where $x$ has 0 and $y$ has 1. (Mismatch, Absent in x)

Note that $n_{11} + n_{00} + n_{10} + n_{01} = n$.

### 3.1 Jaccard Similarity / Distance

**Definition:** Jaccard similarity measures the size of the intersection divided by the size of the union of two sets. For binary data, it's typically used when only the presence of a feature is important.

**Jaccard Similarity:**
$J(x, y) = \frac{n_{11}}{n_{11} + n_{10} + n_{01}}$

**Jaccard Distance:**
$d(x, y) = 1 - J(x, y) = \frac{n_{10} + n_{01}}{n_{11} + n_{10} + n_{01}}$

**Example:**
Data point $x = (1, 0, 1, 1)$
Data point $y = (1, 1, 0, 1)$

*   $n_{11}$: Feature 1 (1,1), Feature 4 (1,1) $\implies n_{11} = 2$
*   $n_{00}$: Feature 2 (0,1) - doesn't count, Feature 3 (1,0) - doesn't count. (Need to consider all features). Let's assume $n=4$.
    $n_{00}$ would be the count where both are 0. In this example, there are no features where both are 0. $\implies n_{00} = 0$
*   $n_{10}$: Feature 3 (1,0) $\implies n_{10} = 1$
*   $n_{01}$: Feature 2 (0,1) $\implies n_{01} = 1$

$J(x, y) = \frac{2}{2 + 1 + 1} = \frac{2}{4} = 0.5$
$d(x, y) = 1 - 0.5 = 0.5$

**Important Point:** Ignores features that are absent in both data points ($n_{00}$). This can be desirable when absence of a feature provides no information.

### 3.2 Dice Coefficient (Sørensen-Dice Index)

**Definition:** Similar to Jaccard, but gives more weight to matches.

**Dice Similarity:**
$D(x, y) = \frac{2 \times n_{11}}{n_{11} + n_{10} + n_{01} + n_{11}} = \frac{2 \times n_{11}}{n_{11} + n_{01} + n_{10} + n_{00}}$ (denominator corrected - sum of all features)
Often, the denominator considers only the features that are present in at least one of the objects: $n_{11} + n_{10} + n_{01}$. In that case:
$D(x, y) = \frac{2 \times n_{11}}{2 \times n_{11} + n_{10} + n_{01}}$

Let's use the common definition where the denominator is the sum of features present in either set:
$D(x, y) = \frac{2 \times n_{11}}{(\text{total features where x is 1}) + (\text{total features where y is 1})}$
$D(x, y) = \frac{2 \times n_{11}}{n_{11} + n_{10} + n_{11} + n_{01}} = \frac{2 \times n_{11}}{2n_{11} + n_{10} + n_{01}}$

**Dice Distance:**
$d(x, y) = 1 - D(x, y) = 1 - \frac{2 \times n_{11}}{2n_{11} + n_{10} + n_{01}} = \frac{n_{10} + n_{01}}{2n_{11} + n_{10} + n_{01}}$

**Example (using previous x, y):**
$x = (1, 0, 1, 1)$
$y = (1, 1, 0, 1)$
$n_{11}=2, n_{10}=1, n_{01}=1$

$D(x, y) = \frac{2 \times 2}{2 \times 2 + 1 + 1} = \frac{4}{4 + 1 + 1} = \frac{4}{6} = \frac{2}{3} \approx 0.67$
$d(x, y) = 1 - \frac{2}{3} = \frac{1}{3} \approx 0.33$

**Important Point:** Typically yields higher similarity scores than Jaccard for datasets with many shared features.

### 3.3 Hamming Distance

**Definition:** The number of positions at which the corresponding symbols are different. For binary data, this is simply the number of mismatched bits.

**Formula:**
$d(x, y) = \sum_{i=1}^{n} I(x_i \neq y_i)$, where $I(\cdot)$ is the indicator function.
This is equivalent to $n_{10} + n_{01}$.

**Example (using previous x, y):**
$x = (1, 0, 1, 1)$
$y = (1, 1, 0, 1)$
Mismatches at position 2 (0 vs 1) and position 3 (1 vs 0).
$d(x, y) = 2$

**Important Point:** Considers all positions, including where both values are 0. Sensitive to the number of features.

### 3.4 Other Binary Measures

*   **Simple Matching Coefficient (SMC):**
    $SMC(x, y) = \frac{n_{11} + n_{00}}{n_{11} + n_{00} + n_{10} + n_{01}}$
    Measures the proportion of agreements (both present or both absent).

*   **Simple Matching Distance:** $1 - SMC(x, y) = \frac{n_{10} + n_{01}}{n_{11} + n_{00} + n_{10} + n_{01}}$

**Important Point for Binary Measures:** The interpretation of $n_{00}$ (features absent in both) is critical. If absences are meaningful (e.g., absence of a disease), SMC might be useful. If absences are common and uninformative, Jaccard or Dice are preferred.

---

## 4. Proximity Measures for Categorical Data

Categorical data has discrete, unordered values (e.g., colors like 'red', 'blue', 'green').

### 4.1 Simple Matching for Categorical Data

**Definition:** For nominal categorical features, we can define a match if the categories are identical and a mismatch otherwise. This can be extended to a binary representation for each category.

**Example:**
Feature: Color
$x$: 'red'
$y$: 'blue'

If we one-hot encode:
$x = (1, 0, 0)$ (assuming 'red', 'blue', 'green' order)
$y = (0, 1, 0)$

We can then apply binary proximity measures to these one-hot encoded vectors.

However, a simpler direct approach for a single categorical feature:
A match occurs if $x_i = y_i$. A mismatch if $x_i \neq y_i$.
The distance for a single categorical feature is 0 if they match, 1 if they mismatch.

For multiple categorical features, the distance is the sum of mismatches across features.

**Reference:**
*   **Müller & Guido (Introduction to Machine Learning with Python):** Discusses handling categorical data, often involving encoding before applying distance measures.

### 4.2 Dissimilarity for Mixed Data Types

**Definition:** Real-world datasets often contain a mix of numerical, binary, and categorical features. A common approach is to compute a dissimilarity matrix for each data type and then combine them.

For example, for a dataset with $p$ features, where $d_k(x_i, x_j)$ is the distance between data points $x_i$ and $x_j$ for feature $k$:

**Gower's Distance:** A popular method to combine dissimilarities from different attribute types. It's a weighted average of the individual attribute dissimilarities.

$d(x_i, x_j) = \frac{1}{p} \sum_{k=1}^{p} \delta_{ijk} d_k(x_i, x_j)$

where:
*   $d_k(x_i, x_j)$ is the dissimilarity for feature $k$.
*   $\delta_{ijk} = 0$ if either attribute $k$ is missing for data point $i$ or $j$, otherwise $\delta_{ijk} = 1$.
*   The weights for different attribute types are often set according to their perceived importance. For numerical features, Euclidean distance can be used. For categorical features, a dissimilarity of 0 for matching categories and 1 for non-matching categories is used.

**Important Point:** Handling mixed data types requires careful consideration of how to combine dissimilarities from different feature types.

---

## 5. Choosing the Right Proximity Measure (CO3)

The selection of an appropriate proximity measure is crucial and depends on several factors:

1.  **Data Type:** Numerical, binary, categorical, or mixed.
2.  **Scale of Features:** For numerical data, feature scaling is vital if features have different ranges.
3.  **Nature of the Problem:**
    *   **Euclidean Distance:** Good for dense, numerical data where geometric distance is meaningful. Sensitive to outliers.
    *   **Manhattan Distance:** Less sensitive to outliers than Euclidean. Useful when movement is restricted to axes or when features represent costs.
    *   **Cosine Similarity:** Ideal for high-dimensional, sparse data like text, where the angle between vectors matters more than magnitude.
    *   **Jaccard/Dice:** Suitable for binary data, particularly when the presence of an attribute is important and absences are common or uninformative.
    *   **Hamming Distance:** Good for binary data where all positions are equally important.
4.  **Clustering Algorithm Requirements:** Some algorithms are inherently designed for specific measures (e.g., K-Means with Euclidean distance).
5.  **Interpretation of Similarity/Dissimilarity:** What constitutes "similarity" in your specific domain?

**Geron (Hands-on Machine Learning)** emphasizes the importance of understanding the data and the algorithm's assumptions. For example, when introducing K-Means, he highlights that it works well with Euclidean distance and benefits from scaled data.

**Müller & Guido (Introduction to Machine Learning with Python)** also stress data preprocessing, including handling categorical features and scaling numerical ones, as these steps directly affect the proximity calculations and thus clustering results.

**Recommendation:** Always start by understanding your data and what "similarity" means in that context. Experiment with different measures and evaluate the resulting clusters.

---

## 6. Practice Questions and Answers

**Question 1:**
Given two data points $x = (2, 5)$ and $y = (6, 2)$ in a 2D space, calculate the Euclidean distance and Manhattan distance between them.

**Answer:**
*   **Euclidean Distance:**
    $d(x, y) = \sqrt{(2-6)^2 + (5-2)^2} = \sqrt{(-4)^2 + (3)^2} = \sqrt{16 + 9} = \sqrt{25} = 5$

*   **Manhattan Distance:**
    $d(x, y) = |2-6| + |5-2| = |-4| + |3| = 4 + 3 = 7$

**Question 2:**
Consider two binary data points:
$x = (1, 0, 1, 1, 0)$
$y = (1, 1, 0, 1, 0)$

Calculate:
a) Jaccard Distance
b) Hamming Distance

**Answer:**
First, let's determine $n_{11}, n_{00}, n_{10}, n_{01}$ for $n=5$:
*   $n_{11}$ (both 1): Position 1, Position 4. $n_{11} = 2$
*   $n_{00}$ (both 0): Position 5. $n_{00} = 1$
*   $n_{10}$ (x=1, y=0): Position 3. $n_{10} = 1$
*   $n_{01}$ (x=0, y=1): Position 2. $n_{01} = 1$
Check: $2 + 1 + 1 + 1 = 5$. Correct.

a) **Jaccard Distance:**
$J(x, y) = \frac{n_{11}}{n_{11} + n_{10} + n_{01}} = \frac{2}{2 + 1 + 1} = \frac{2}{4} = 0.5$
Jaccard Distance = $1 - J(x, y) = 1 - 0.5 = 0.5$

b) **Hamming Distance:**
$d(x, y) = n_{10} + n_{01} = 1 + 1 = 2$
(This is also the number of positions where $x_i \neq y_i$: Position 2 and Position 3).

**Question 3:**
When would you prefer Cosine Similarity over Euclidean Distance for clustering?

**Answer:**
You would prefer Cosine Similarity over Euclidean Distance when dealing with high-dimensional, sparse data, such as text documents or gene expression data, where the magnitude of the feature values might be less important than the direction or relative proportions of the features. For example, in text clustering, the length of a document can vary significantly. Cosine similarity focuses on the angle between document vectors, capturing topic similarity regardless of document length, whereas Euclidean distance would be heavily influenced by longer documents (larger magnitudes).

**Question 4:**
Explain the importance of feature scaling before applying Euclidean distance for clustering.

**Answer:**
Euclidean distance is calculated based on the absolute differences between feature values. If features are on vastly different scales (e.g., one feature ranges from 0-1 and another from 0-1000), the feature with the larger range will dominate the distance calculation. This can lead to clusters that are heavily biased by features with large scales, even if those features are not necessarily more important. Feature scaling (like standardization to mean 0 and variance 1, or min-max scaling to a range like 0-1) ensures that all features contribute more equally to the distance metric, leading to more balanced and potentially more meaningful clusters. This is crucial for CO3, as it directly impacts the effectiveness of the chosen proximity measure.

---

## 7. Important Points to Remember

*   **Proximity measures define "similarity" or "dissimilarity" between data points.** They are the bedrock of clustering algorithms.
*   **The choice of proximity measure is critical and context-dependent.** It depends on data type, scale, and the problem domain.
*   **For numerical data, Euclidean, Manhattan, and Minkowski distances are common.** Euclidean is sensitive to scale and outliers; Manhattan is less so.
*   **For binary data, Jaccard, Dice, and Hamming distances are prominent.** Jaccard and Dice ignore agreements on absence, while Hamming counts all mismatches.
*   **Cosine similarity is effective for high-dimensional, sparse data where direction matters.**
*   **Feature scaling is almost always recommended when using distance metrics sensitive to scale (like Euclidean).**
*   **Mixed data types require specialized methods like Gower's distance for combining dissimilarities.**
*   **Understanding the implications of each measure on cluster formation is key to effective clustering (CO3).**

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=gI-qXk7XojA) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=Q-tL8_628gE) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=APPIZ2S8YmY) |


## Further Reading and References

*   **Geron, A. (2019). *Hands-On Machine Learning with Scikit-Learn, Keras, and TensorFlow*. O'Reilly.** (Chapters on clustering algorithms will implicitly or explicitly discuss distance metrics).
*   **Müller, A. C., & Guido, S. (2017). *Introduction to Machine Learning with Python*. O'Reilly.** (Chapter on unsupervised learning and practical examples will cover distance metrics for clustering).
*   **Theodoridis, S., & Koutroumbas, K. (2003). *Pattern Recognition*. Academic Press.** (Provides deeper mathematical foundations for various similarity and distance measures).
*   **Bishop, C. M. (2006). *Pattern Recognition and Machine Learning*. Springer.** (Another comprehensive source for theoretical underpinnings of distance metrics).

This topic lays the groundwork for understanding how clustering algorithms group data, directly enabling the achievement of **CO3** by providing the tools to design and execute clustering and assess its effectiveness.