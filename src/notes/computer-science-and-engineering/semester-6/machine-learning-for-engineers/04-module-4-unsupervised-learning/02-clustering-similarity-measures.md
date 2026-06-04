---
title: "Clustering  - Similarity measures"
subject: "MACHINE LEARNING FOR ENGINEERS"
module: "Module 4: Unsupervised Learning"
branch: "Computer Science and Engineering"
semester: 6
topicId: "684162780fc9aa1fdbc8bf5a"
status: "completed"
scrapedAt: "2026-05-20T16:55:09.007Z"
---
# MACHINE LEARNING FOR ENGINEERS - Module 4: Unsupervised Learning

## Topic: Clustering - Similarity Measures

### Learning Outcomes:

By the end of this topic, you will be able to:

*   Understand the fundamental role of similarity measures in clustering.
*   Identify and explain various common similarity (and dissimilarity) measures used for different data types.
*   Choose an appropriate similarity measure based on the nature of the data and the clustering algorithm.
*   Understand the impact of different similarity measures on clustering results.

---

### 1. Introduction to Similarity Measures in Clustering

**What is Clustering?**

Clustering is an unsupervised learning technique that aims to group a set of objects in such a way that objects in the same group (called a cluster) are more similar to each other than to those in other groups.

**Why are Similarity Measures Crucial?**

Similarity measures are the **heartbeat** of clustering algorithms. They provide the quantitative basis for determining how "close" or "alike" two data points are. Without a way to measure similarity, we cannot effectively group data points.

*   **Core Function:** Quantify the degree of resemblance between data points.
*   **Algorithm Dependence:** Most clustering algorithms (e.g., K-Means, Hierarchical Clustering) rely heavily on a distance or similarity metric to make grouping decisions.
*   **Data Type Impact:** The choice of similarity measure is heavily dependent on the type of data being analyzed (numerical, categorical, binary, etc.).

---

### 2. Types of Similarity/Dissimilarity Measures

It's important to note that many common measures are actually **dissimilarity** measures (quantifying how *different* two points are). High dissimilarity means low similarity, and vice-versa. We often work with distance measures, where a smaller distance implies greater similarity.

We'll categorize measures based on the type of data they are typically used for.

#### 2.1. Measures for Numerical Data

These measures are designed for data where features have continuous numerical values.

**a) Euclidean Distance (L2 Norm)**

*   **Concept:** The straight-line distance between two points in Euclidean space. It's the most intuitive and commonly used distance measure.
*   **Formula:** For two data points $p = (p_1, p_2, ..., p_n)$ and $q = (q_1, q_2, ..., q_n)$:
    $d(p, q) = \sqrt{\sum_{i=1}^{n}(p_i - q_i)^2}$
*   **Characteristics:**
    *   Sensitive to the scale of features. Features with larger scales will dominate the distance calculation.
    *   Assumes features are independent (though it doesn't explicitly enforce this).
    *   Sensitive to outliers.
*   **Example:**
    Consider two points in 2D: $P = (1, 2)$ and $Q = (4, 6)$.
    $d(P, Q) = \sqrt{(1-4)^2 + (2-6)^2} = \sqrt{(-3)^2 + (-4)^2} = \sqrt{9 + 16} = \sqrt{25} = 5$

**b) Manhattan Distance (L1 Norm, City Block Distance)**

*   **Concept:** The sum of the absolute differences of their Cartesian coordinates. Imagine moving between points on a grid like city blocks.
*   **Formula:** For two data points $p = (p_1, p_2, ..., p_n)$ and $q = (q_1, q_2, ..., q_n)$:
    $d(p, q) = \sum_{i=1}^{n}|p_i - q_i|$
*   **Characteristics:**
    *   Less sensitive to outliers compared to Euclidean distance.
    *   Less sensitive to the scale of features than Euclidean distance, but still affected.
    *   More robust to noise.
*   **Example:**
    Using the same points $P = (1, 2)$ and $Q = (4, 6)$:
    $d(P, Q) = |1 - 4| + |2 - 6| = |-3| + |-4| = 3 + 4 = 7$

**c) Minkowski Distance (Lp Norm)**

*   **Concept:** A generalization of both Euclidean and Manhattan distances.
*   **Formula:** For two data points $p = (p_1, p_2, ..., p_n)$ and $q = (q_1, q_2, ..., q_n)$:
    $d(p, q) = \left(\sum_{i=1}^{n}|p_i - q_i|^p\right)^{1/p}$
*   **Characteristics:**
    *   When $p=1$, it's Manhattan distance.
    *   When $p=2$, it's Euclidean distance.
    *   As $p \to \infty$, it approaches Chebyshev distance (maximum absolute difference).
*   **Example:**
    For $P = (1, 2)$ and $Q = (4, 6)$:
    *   With $p=3$: $d(P, Q) = (|1-4|^3 + |2-6|^3)^{1/3} = (|-3|^3 + |-4|^3)^{1/3} = (27 + 64)^{1/3} = (91)^{1/3} \approx 4.49$

**d) Cosine Similarity**

*   **Concept:** Measures the cosine of the angle between two non-zero vectors. It's often used to measure similarity between documents, where vectors represent word frequencies. It focuses on the direction, not the magnitude.
*   **Formula:** For two vectors $A$ and $B$:
    $similarity(A, B) = \frac{A \cdot B}{||A|| ||B||} = \frac{\sum_{i=1}^{n}A_i B_i}{\sqrt{\sum_{i=1}^{n}A_i^2} \sqrt{\sum_{i=1}^{n}B_i^2}}$
*   **Characteristics:**
    *   Ranges from -1 (exactly opposite) to 1 (exactly the same direction). 0 means orthogonal (unrelated).
    *   Not a distance metric, but a similarity metric. For distance, we can use $1 - CosineSimilarity$.
    *   Unaffected by the magnitude of the vectors (e.g., document length).
*   **Example:**
    Let $A = [1, 2, 3]$ and $B = [2, 4, 6]$.
    $A \cdot B = (1)(2) + (2)(4) + (3)(6) = 2 + 8 + 18 = 28$
    $||A|| = \sqrt{1^2 + 2^2 + 3^2} = \sqrt{1 + 4 + 9} = \sqrt{14}$
    $||B|| = \sqrt{2^2 + 4^2 + 6^2} = \sqrt{4 + 16 + 36} = \sqrt{56} = 2\sqrt{14}$
    $CosineSimilarity(A, B) = \frac{28}{\sqrt{14} \cdot 2\sqrt{14}} = \frac{28}{2 \cdot 14} = \frac{28}{28} = 1$
    (The vectors are pointing in the same direction, one is just a scalar multiple of the other).

**e) Mahalanobis Distance**

*   **Concept:** A measure of the distance between a point and a distribution, taking into account the correlations and variances of the variables. It's a multivariate generalization of the idea of standardizing variables by dividing by their standard deviation.
*   **Formula:** For a point $x$ and a distribution with mean vector $\mu$ and covariance matrix $\Sigma$:
    $D(x) = \sqrt{(x - \mu)^T \Sigma^{-1} (x - \mu)}$
*   **Characteristics:**
    *   Accounts for the correlation between features.
    *   Invariant to linear transformations of the data.
    *   Useful when features are correlated.
    *   Requires calculation of the covariance matrix.
*   **When to use:** When features are correlated and their scales vary significantly. It's particularly useful for identifying outliers in multivariate data.

#### 2.2. Measures for Binary Data

These measures are used when features are binary (0 or 1, True or False, Yes or No). We often represent the relationship between two binary data points ($p$ and $q$) using a contingency table:

|             | $q_1$ | $q_0$ |
| :---------- | :---- | :---- |
| $p_1$       | $a$   | $b$   |
| $p_0$       | $c$   | $d$   |

Where:
*   $a$: Number of attributes where both $p$ and $q$ are 1.
*   $b$: Number of attributes where $p$ is 1 and $q$ is 0.
*   $c$: Number of attributes where $p$ is 0 and $q$ is 1.
*   $d$: Number of attributes where both $p$ and $q$ are 0.

**a) Jaccard Similarity (Jaccard Index)**

*   **Concept:** Measures the similarity between two sets. It's defined as the size of the intersection divided by the size of the union. For binary data, it considers only the attributes where at least one of the points is 1.
*   **Formula:**
    $J(p, q) = \frac{|p \cap q|}{|p \cup q|} = \frac{a}{a + b + c}$
*   **Characteristics:**
    *   Ranges from 0 (no common 1s) to 1 (identical).
    *   Ignores attributes where both are 0 (the $d$ count). This is good when 0s are frequent and don't carry much information (e.g., user has not purchased an item).
*   **Example:**
    $p = [1, 0, 1, 0]$
    $q = [1, 1, 0, 0]$
    Matching 1s ($a$): 1 (first attribute)
    $p$ is 1, $q$ is 0 ($b$): 1 (third attribute)
    $p$ is 0, $q$ is 1 ($c$): 1 (second attribute)
    Both are 0 ($d$): 1 (fourth attribute)
    $J(p, q) = \frac{1}{1 + 1 + 1} = \frac{1}{3}$

**b) Dice Similarity (Sorensen-Dice Coefficient)**

*   **Concept:** Similar to Jaccard, but gives more weight to the presence of shared attributes (1s).
*   **Formula:**
    $D(p, q) = \frac{2|p \cap q|}{|p| + |q|} = \frac{2a}{2a + b + c}$
*   **Characteristics:**
    *   Ranges from 0 to 1.
    *   Also ignores attributes where both are 0.
*   **Example:**
    Using the same $p$ and $q$ as above:
    $D(p, q) = \frac{2 \cdot 1}{2 \cdot 1 + 1 + 1} = \frac{2}{4} = 0.5$

**c) Hamming Distance**

*   **Concept:** The number of positions at which the corresponding symbols are different.
*   **Formula:** For two binary strings of equal length:
    $d(p, q) = \sum_{i=1}^{n} \mathbb{I}(p_i \neq q_i)$  (where $\mathbb{I}$ is the indicator function)
*   **Characteristics:**
    *   This is a **distance** measure. Lower values mean higher similarity.
    *   Considers all positions, including where both are 0.
    *   Sensitive to the proportion of 0s and 1s.
*   **Example:**
    $p = [1, 0, 1, 0]$
    $q = [1, 1, 0, 0]$
    Positions where they differ: 2nd (0 vs 1) and 3rd (1 vs 0).
    $d(p, q) = 2$

**d) Simple Matching Coefficient (SMC)**

*   **Concept:** The proportion of attributes that match (both 1 or both 0).
*   **Formula:**
    $SMC(p, q) = \frac{a + d}{a + b + c + d}$
*   **Characteristics:**
    *   This is a **similarity** measure, ranging from 0 to 1.
    *   Accounts for matches of both 1s and 0s.
    *   Can be biased if one value (0 or 1) is much more frequent than the other.
*   **Example:**
    Using the same $p$ and $q$ as above:
    $SMC(p, q) = \frac{1 + 1}{1 + 1 + 1 + 1} = \frac{2}{4} = 0.5$

**e) Russell-Rao Coefficient**

*   **Concept:** Similar to Jaccard, but includes the $d$ term in the denominator. It's the proportion of shared 1s out of all attributes where at least one attribute is 1 or both are 0.
*   **Formula:**
    $RR(p, q) = \frac{a}{a + b + c + d}$
*   **Characteristics:**
    *   This is a **similarity** measure.
    *   Less commonly used than Jaccard or Dice.
*   **Example:**
    Using the same $p$ and $q$ as above:
    $RR(p, q) = \frac{1}{1 + 1 + 1 + 1} = \frac{1}{4} = 0.25$

#### 2.3. Measures for Categorical Data

These measures are for features that take on discrete, non-ordered values (e.g., colors, cities, product types).

**a) Simple Matching Coefficient (SMC) for Categorical Data**

*   **Concept:** Can be extended to categorical data by comparing attributes. The count of matches is the number of attributes where $p_i = q_i$.
*   **Formula:**
    $SMC(p, q) = \frac{\text{Number of matching attributes}}{\text{Total number of attributes}}$
*   **Characteristics:**
    *   Simple and intuitive.
    *   Assumes all mismatches are equal.
    *   Can be sensitive to the number of possible categories.

**b) Unweighted Hamming Distance**

*   **Concept:** For nominal (unordered) categorical data, this is simply the number of positions where the values differ.
*   **Formula:**
    $d(p, q) = \sum_{i=1}^{n} \mathbb{I}(p_i \neq q_i)$
*   **Characteristics:**
    *   Treats all mismatches equally.
    *   Can be normalized by dividing by the total number of attributes.

**c) Weighted Jaccard or Dice**

*   **Concept:** For categorical data with attributes that might have different importance or costs associated with mismatches, weighted versions can be used. This requires assigning weights to attributes.

**d) Gower's Distance**

*   **Concept:** A flexible measure that can handle mixed data types (numerical, binary, categorical) in a single distance calculation. It's a weighted average of distances computed for each feature type.
*   **Formula:** Gower's distance $D$ between two samples $x$ and $y$ is calculated as:
    $D(x, y) = \frac{1}{n} \sum_{i=1}^{n} \delta_i(x_i, y_i)$
    Where:
    *   $n$ is the number of features.
    *   $\delta_i$ is a similarity measure for the $i$-th feature.
        *   For numerical features: $\delta_i(x_i, y_i) = 1 - \frac{|x_i - y_i|}{\max(x) - \min(x)}$ (scaled range)
        *   For categorical features: $\delta_i(x_i, y_i) = 0$ if $x_i \neq y_i$, and $1$ if $x_i = y_i$.
        *   For binary features: can use Jaccard or similar.
*   **Characteristics:**
    *   Handles mixed data types gracefully.
    *   Allows for customization of how each feature type contributes (via weights, though the basic form is unweighted average).

#### 2.4. Measures for Text Data (Often treated as Numerical/Vectorized)

Once text data is converted into numerical representations (e.g., Bag-of-Words, TF-IDF), similarity measures for numerical data are applied.

*   **Cosine Similarity:** Very popular for text due to its ability to capture semantic similarity by focusing on document direction (topic).
*   **Euclidean Distance:** Can be used, but often less effective than Cosine similarity for text because document length (magnitude) can be a less relevant factor for topic similarity.

---

### 3. Choosing the Right Similarity Measure

The choice of similarity measure is critical and depends on:

1.  **Data Type:**
    *   **Numerical:** Euclidean, Manhattan, Cosine, Mahalanobis.
    *   **Binary:** Jaccard, Dice, Hamming, SMC.
    *   **Categorical:** SMC, Unweighted Hamming, Gower's.
    *   **Mixed:** Gower's.

2.  **Nature of the Problem:**
    *   **Document clustering (text):** Cosine similarity is often preferred.
    *   **Image pixel data:** Euclidean distance might be suitable.
    *   **Gene expression data:** Correlation-based distances (like Pearson correlation coefficient, often transformed into a distance) are common.
    *   **Transaction data (e.g., market basket analysis):** Jaccard or Dice for binary item presence.

3.  **Algorithm Requirements:**
    *   Some algorithms have a built-in distance metric (e.g., K-Means defaults to Euclidean).
    *   Hierarchical clustering can often work with various distance metrics.

4.  **Sensitivity to Outliers and Scale:**
    *   **Outliers:** Manhattan distance, Jaccard, Dice are generally more robust than Euclidean.
    *   **Scale:** For Euclidean and Manhattan, feature scaling (e.g., standardization or min-max scaling) is often necessary if features have different scales. Cosine similarity is scale-invariant.

5.  **Meaning of "Similarity" in Context:**
    *   Do you care about the absolute difference (Euclidean)?
    *   Do you care about the direction of feature vectors (Cosine)?
    *   Do you care about the presence of shared positive attributes, ignoring absent ones (Jaccard)?
    *   Do you care about agreement on both present and absent attributes (SMC)?

**Impact on Clustering Results:**

Different similarity measures can lead to vastly different clustering outcomes. For example:

*   A dataset with one feature having a very large range will dominate Euclidean distance. If this feature is not truly representative of the underlying groups, the clustering will be skewed.
*   For binary data, Jaccard's focus on shared "1"s might be ideal for recommendation systems (e.g., users who liked the same movies), while SMC's consideration of shared "0"s might be better for data where the absence of something is also informative.

---

### 4. Practice Questions and Exercises

**Question 1:**
You are clustering customer purchase data, represented as a binary vector where '1' indicates a customer purchased an item and '0' indicates they did not. Consider two customers with the following purchase vectors:

Customer A: [1, 1, 0, 1, 0, 0]
Customer B: [1, 0, 0, 1, 1, 0]

Calculate the Jaccard similarity and the Hamming distance between Customer A and Customer B.

**Answer 1:**
Let's analyze the vectors:
A = [1, 1, 0, 1, 0, 0]
B = [1, 0, 0, 1, 1, 0]

Contingency Table for binary data:
*   $a$ (both 1s): Attribute 1, Attribute 4. So, $a=2$.
*   $b$ ($A$ is 1, $B$ is 0): Attribute 2. So, $b=1$.
*   $c$ ($A$ is 0, $B$ is 1): Attribute 5. So, $c=1$.
*   $d$ (both 0s): Attribute 3, Attribute 6. So, $d=2$.

**Jaccard Similarity:**
$J(A, B) = \frac{a}{a + b + c} = \frac{2}{2 + 1 + 1} = \frac{2}{4} = 0.5$

**Hamming Distance:**
Hamming distance counts the positions where the values differ.
Attribute 2: A=1, B=0 (differ)
Attribute 5: A=0, B=1 (differ)
The values at attributes 1, 3, 4, and 6 are the same.
Hamming distance = 2.

---

**Question 2:**
Two data points in 3D space are given by $P = (2, 5, 1)$ and $Q = (3, 7, 3)$. Calculate the Euclidean distance and the Manhattan distance between $P$ and $Q$.

**Answer 2:**
$P = (2, 5, 1)$
$Q = (3, 7, 3)$

**Euclidean Distance:**
$d(P, Q) = \sqrt{(2-3)^2 + (5-7)^2 + (1-3)^2}$
$d(P, Q) = \sqrt{(-1)^2 + (-2)^2 + (-2)^2}$
$d(P, Q) = \sqrt{1 + 4 + 4} = \sqrt{9} = 3$

**Manhattan Distance:**
$d(P, Q) = |2-3| + |5-7| + |1-3|$
$d(P, Q) = |-1| + |-2| + |-2|$
$d(P, Q) = 1 + 2 + 2 = 5$

---

**Question 3:**
Why is feature scaling (like standardization) often recommended before applying clustering algorithms that use distance measures like Euclidean distance?

**Answer 3:**
Feature scaling is crucial for distance-based clustering algorithms (especially with Euclidean distance) because these measures are sensitive to the scale of the features. If features have significantly different ranges or units, features with larger values or wider ranges will disproportionately influence the distance calculation. This can lead to the clustering algorithm being dominated by these features, potentially ignoring the contributions of features with smaller ranges that might also be important for defining groups. Standardization (or Min-Max scaling) brings all features to a similar scale, ensuring that each feature contributes more equitably to the similarity or dissimilarity measures used by the clustering algorithm.

---

**Question 4:**
Explain the difference in philosophy between Jaccard similarity and the Simple Matching Coefficient (SMC) for binary data.

**Answer 4:**
*   **Jaccard Similarity:** Focuses on the **agreement on presence**. It measures the proportion of attributes that are present (value 1) in *at least one* of the two data points, out of those attributes that are present in *both*. It essentially ignores attributes where both data points have a 0. This is useful when the absence of a feature (0) is common and doesn't carry much discriminative information.
*   **Simple Matching Coefficient (SMC):** Focuses on **overall agreement**, considering both the presence (1-1 matches) and absence (0-0 matches) of attributes. It measures the proportion of attributes where the two data points have the same value, regardless of whether that value is 0 or 1. This is useful when both the presence and absence of attributes are informative and equally important for distinguishing between data points.

---

### 5. Important Points to Remember

*   **Similarity vs. Dissimilarity:** Understand that most measures are dissimilarity (distance) measures, where a lower value indicates higher similarity.
*   **Data Type is Key:** The choice of measure is dictated by whether your data is numerical, binary, categorical, or mixed.
*   **Feature Scaling:** For numerical data and distance metrics like Euclidean, always consider feature scaling to prevent features with larger scales from dominating.
*   **Sensitivity to Outliers:** Be aware that Euclidean distance is more sensitive to outliers than Manhattan distance or Jaccard similarity.
*   **Context Matters:** The "best" similarity measure depends on the specific problem and what you want to capture as "similarity."
*   **Cosine Similarity:** Excellent for high-dimensional data like text, as it focuses on direction rather than magnitude.
*   **Gower's Distance:** A versatile tool for handling datasets with mixed data types.
*   **Experimentation:** It's often beneficial to experiment with different similarity measures to see which yields the most meaningful clustering results for your specific dataset.

---
