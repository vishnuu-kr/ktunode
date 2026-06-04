---
title: "Euclidean, Manhattan, Minkowski Distances"
subject: "MACHINE LEARNING"
module: "Module 3: Unsupervised learning: Clustering"
branch: "Electronics and Communication Engineering"
semester: 4
topicId: "68a5c45eb09ce205780fe62f"
status: "completed"
scrapedAt: "2026-05-23T17:50:20.598Z"
---
# Machine Learning: Module 3 - Unsupervised Learning: Clustering

## Topic: Distance Metrics: Euclidean, Manhattan, and Minkowski Distances

**Learning Outcomes:**
* Understand the concept of distance and similarity in the context of clustering.
* Differentiate between various distance metrics commonly used in clustering algorithms.
* Apply Euclidean, Manhattan, and Minkowski distances to measure the dissimilarity between data points.
* Evaluate the suitability of different distance metrics based on the characteristics of the dataset.

**Course Outcomes Alignment:**
* **CO3: Design and execute clustering techniques, and assess their effectiveness using various proximity measures. (Knowledge Level: K3)** This topic directly supports CO3 by introducing the fundamental "proximity measures" (distance metrics) essential for clustering. Understanding these metrics is crucial for designing and assessing clustering algorithms.
* **CO1: Analyze and apply supervised and unsupervised machine learning techniques to solve various data-driven problems. (Knowledge Level: K4)** While this topic focuses on unsupervised learning, understanding distance metrics is a foundational skill applicable to various ML problems that involve comparing data points, even in supervised contexts (e.g., k-Nearest Neighbors).

---

### 1. Introduction to Distance Metrics in Clustering

In unsupervised learning, particularly in **clustering**, the goal is to group similar data points together. To achieve this, we need a way to quantify "similarity" or, more commonly, "dissimilarity" between data points. This is where **distance metrics** come into play.

*   **Key Concept: Dissimilarity Measure:** A function that quantifies how different two data points are. A lower dissimilarity score indicates higher similarity.
*   **Importance:** The choice of distance metric significantly impacts the shape of clusters and the overall performance of clustering algorithms. Different metrics are sensitive to different aspects of the data's geometry.

---

### 2. Euclidean Distance (L2 Norm)

The Euclidean distance is the most common and intuitive distance metric. It represents the straight-line distance between two points in Euclidean space.

*   **Definition:** For two data points, $\mathbf{x} = (x_1, x_2, ..., x_n)$ and $\mathbf{y} = (y_1, y_2, ..., y_n)$, in an n-dimensional space, the Euclidean distance is calculated as:

    $d(\mathbf{x}, \mathbf{y}) = \sqrt{\sum_{i=1}^{n} (x_i - y_i)^2}$

*   **Intuition:** Imagine drawing a straight line connecting two points on a graph. The length of that line is the Euclidean distance.

*   **Characteristics:**
    *   Sensitive to the magnitude of differences in each dimension.
    *   Squared differences penalize larger differences more heavily.
    *   Works well for data where dimensions are comparable in scale and the "average" distance is meaningful.
    *   Assumes features are continuous and numerical.

*   **Example:**
    Consider two points in 2D space:
    Point A: (1, 2)
    Point B: (4, 6)

    Euclidean Distance $d(A, B) = \sqrt{(4-1)^2 + (6-2)^2}$
    $d(A, B) = \sqrt{3^2 + 4^2}$
    $d(A, B) = \sqrt{9 + 16}$
    $d(A, B) = \sqrt{25}$
    $d(A, B) = 5$

*   **Textbook Reference:**
    *   **Hands-on Machine Learning with Scikit-Learn, Keras, and TensorFlow by Aurelien Geron:** Geron often uses Euclidean distance as the default in his examples, especially when discussing algorithms like K-Means, highlighting its simplicity and widespread use. He emphasizes its applicability to continuous numerical features. (Second edition, Chapter 9, Unsupervised Learning).
    *   **Introduction to Machine learning with Python by Andreas C. Müller & Sarah Guido:** Müller and Guido also introduce Euclidean distance as a fundamental metric for algorithms like K-Means and K-Nearest Neighbors, explaining its geometric interpretation and usefulness. (Chapter 5, Unsupervised Learning).

---

### 3. Manhattan Distance (City Block Distance, L1 Norm)

The Manhattan distance calculates the distance between two points by summing the absolute differences of their coordinates. It's like measuring distance in a city grid where you can only move along streets (horizontally or vertically).

*   **Definition:** For two data points, $\mathbf{x} = (x_1, x_2, ..., x_n)$ and $\mathbf{y} = (y_1, y_2, ..., y_n)$, in an n-dimensional space, the Manhattan distance is calculated as:

    $d(\mathbf{x}, \mathbf{y}) = \sum_{i=1}^{n} |x_i - y_i|$

*   **Intuition:** Imagine walking on a grid, like in Manhattan, where you can only move horizontally or vertically. The distance is the sum of the lengths of these movements.

*   **Characteristics:**
    *   Less sensitive to outliers than Euclidean distance because it doesn't square the differences.
    *   Measures the difference along each axis independently.
    *   Can be more robust when dealing with datasets that have features with vastly different scales or when outliers are present.
    *   More suitable for data where movement is constrained to axis-aligned paths.

*   **Example:**
    Using the same points A (1, 2) and B (4, 6):

    Manhattan Distance $d(A, B) = |4-1| + |6-2|$
    $d(A, B) = |3| + |4|$
    $d(A, B) = 3 + 4$
    $d(A, B) = 7$

*   **Textbook Reference:**
    *   **Machine learning for absolute beginners by Oliver Theobald:** Theobald introduces Manhattan distance as an alternative to Euclidean distance, explaining its "city block" analogy and its reduced sensitivity to outliers compared to Euclidean distance. (Second edition, Chapter 4, Clustering Algorithms).
    *   **Pattern Recognition and Machine Learning by C.M. Bishop:** While Bishop might not explicitly detail Manhattan distance in a basic introductory section, his comprehensive treatment of probability and statistics for pattern recognition implicitly covers the underlying principles of L1 regularization and norms, which relate to Manhattan distance. (Chapter 3, Probability Distributions).

---

### 4. Minkowski Distance (Lp Norm)

The Minkowski distance is a generalization of both Euclidean and Manhattan distances. It's a family of distance metrics parameterized by $p$.

*   **Definition:** For two data points, $\mathbf{x} = (x_1, x_2, ..., x_n)$ and $\mathbf{y} = (y_1, y_2, ..., y_n)$, in an n-dimensional space, the Minkowski distance is calculated as:

    $d(\mathbf{x}, \mathbf{y}) = \left( \sum_{i=1}^{n} |x_i - y_i|^p \right)^{1/p}$

*   **Relationship to other distances:**
    *   When $p=1$, Minkowski distance becomes the **Manhattan Distance**:
        $d(\mathbf{x}, \mathbf{y}) = \left( \sum_{i=1}^{n} |x_i - y_i|^1 \right)^{1/1} = \sum_{i=1}^{n} |x_i - y_i|$

    *   When $p=2$, Minkowski distance becomes the **Euclidean Distance**:
        $d(\mathbf{x}, \mathbf{x}) = \left( \sum_{i=1}^{n} |x_i - y_i|^2 \right)^{1/2} = \sqrt{\sum_{i=1}^{n} (x_i - y_i)^2}$

    *   As $p \to \infty$, Minkowski distance approaches the **Chebyshev Distance** (Maximum Value):
        $d(\mathbf{x}, \mathbf{y}) = \max_{i=1}^{n} |x_i - y_i|$

*   **Characteristics:**
    *   Offers flexibility by allowing the selection of different values for *p*.
    *   The choice of *p* influences how the metric emphasizes or de-emphasizes individual differences.
    *   Higher values of *p* tend to make the metric more sensitive to larger differences across dimensions.
    *   Lower values of *p* are more forgiving of large differences and focus more on the average difference.

*   **Example:**
    Using points A (1, 2) and B (4, 6) with $p=3$:

    Minkowski Distance $d(A, B) = \left( |4-1|^3 + |6-2|^3 \right)^{1/3}$
    $d(A, B) = \left( 3^3 + 4^3 \right)^{1/3}$
    $d(A, B) = \left( 27 + 64 \right)^{1/3}$
    $d(A, B) = \left( 91 \right)^{1/3}$
    $d(A, B) \approx 4.50$

*   **Textbook Reference:**
    *   **Learning Deep Learning by Magnus Ekman:** Ekman might touch upon Lp norms in the context of regularization or feature engineering for neural networks, where understanding how different powers of *p* affect the distance or penalty is relevant. (Relevant if discussing feature scaling or loss functions).
    *   **Pattern Recognition by Theodoridis and Koutroumbas:** This reference is highly relevant as it delves deep into pattern recognition theory, where distance measures like Minkowski are foundational. They would likely discuss the general Lp norm and its properties in the context of feature space and classification/clustering. (Chapter 3, Feature Extraction and Selection).
    *   **CS229 Lecture Notes by Andrew Ng and Tengyu Ma:** Andrew Ng's lecture notes often cover fundamental algorithms and concepts, including distance metrics used in K-Means and other clustering methods. They would likely present the general Minkowski form as a unifying concept. (Likely covered in sections on K-Means or general data preprocessing).

---

### 5. Choosing the Right Distance Metric

The choice of distance metric depends heavily on the nature of your data and the problem you are trying to solve.

*   **When to use Euclidean Distance:**
    *   When features are on a similar scale and the "average" distance is meaningful.
    *   When you want to penalize larger differences more significantly.
    *   Commonly used in K-Means, PCA, and K-NN.

*   **When to use Manhattan Distance:**
    *   When dealing with high-dimensional data, as it can be less affected by the "curse of dimensionality" compared to Euclidean distance.
    *   When outliers are present in the data, as it's more robust to them.
    *   When the features represent distinct paths or movements (e.g., grid-based systems).

*   **When to use Minkowski Distance (and varying *p*):**
    *   To explore the impact of different "sensitivities" to feature differences.
    *   For very high-dimensional data, smaller *p* values (closer to 1) might be preferred.
    *   For problems where the maximum difference is more important, a large *p* (approaching Chebyshev) might be considered.

*   **Important Consideration: Feature Scaling:**
    *   Distance metrics are sensitive to the scale of features. If features have different units or ranges, it's crucial to scale them (e.g., using Standardization or Min-Max Scaling) before applying distance calculations.
    *   **Geron** and **Müller & Guido** both emphasize the importance of feature scaling before applying distance-based algorithms.

---

### 6. Practice Questions

1.  **Question:** Calculate the Euclidean and Manhattan distances between the following two 3D points:
    Point P1: (2, 3, 5)
    Point P2: (7, 1, 9)

    **Answer:**
    *   **Euclidean Distance:**
        $d(P1, P2) = \sqrt{(7-2)^2 + (1-3)^2 + (9-5)^2}$
        $d(P1, P2) = \sqrt{5^2 + (-2)^2 + 4^2}$
        $d(P1, P2) = \sqrt{25 + 4 + 16}$
        $d(P1, P2) = \sqrt{45} \approx 6.71$

    *   **Manhattan Distance:**
        $d(P1, P2) = |7-2| + |1-3| + |9-5|$
        $d(P1, P2) = |5| + |-2| + |4|$
        $d(P1, P2) = 5 + 2 + 4$
        $d(P1, P2) = 11$

2.  **Question:** If you have a dataset with a significant number of outliers in one or more features, which distance metric (Euclidean or Manhattan) would likely be more robust and why?

    **Answer:** Manhattan distance (L1 norm) would likely be more robust. This is because it sums the absolute differences between coordinates, whereas Euclidean distance squares these differences. Squaring amplifies the impact of large differences (outliers), making the Euclidean distance more sensitive to them. Manhattan distance treats all differences linearly, thus being less affected by extreme values.

3.  **Question:** Explain the relationship between Minkowski distance and Euclidean distance. For what value of 'p' does Minkowski distance become Euclidean distance?

    **Answer:** Minkowski distance is a generalized form of distance metrics. It is defined by the formula $d(\mathbf{x}, \mathbf{y}) = \left( \sum_{i=1}^{n} |x_i - y_i|^p \right)^{1/p}$. When $p=2$, the Minkowski distance formula becomes:
    $d(\mathbf{x}, \mathbf{y}) = \left( \sum_{i=1}^{n} |x_i - y_i|^2 \right)^{1/2} = \sqrt{\sum_{i=1}^{n} (x_i - y_i)^2}$
    This is precisely the formula for Euclidean distance. Therefore, Minkowski distance becomes Euclidean distance when $p=2$.

---

### 7. Important Points to Remember

*   **Distance vs. Similarity:** Clustering aims to group similar points. Distance metrics measure dissimilarity; a lower distance means higher similarity.
*   **Feature Scaling is Crucial:** Always consider scaling your features before applying distance metrics, especially if they have different units or ranges.
*   **Choice Matters:** The selection of a distance metric can significantly alter the outcome of a clustering algorithm. Understand your data and choose accordingly.
*   **Euclidean (L2):** Straight-line distance, sensitive to magnitude, squares differences.
*   **Manhattan (L1):** City block distance, sum of absolute differences, more robust to outliers.
*   **Minkowski (Lp):** Generalization, parameterized by 'p', allows tuning sensitivity to feature differences.

---
This concludes the study notes for Euclidean, Manhattan, and Minkowski Distances in the context of Unsupervised Learning: Clustering. Remember to practice these concepts with different datasets to solidify your understanding.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=gI-qXk7XojA) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=M0mx8S05v60) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=APPIZ2S8YmY) |
