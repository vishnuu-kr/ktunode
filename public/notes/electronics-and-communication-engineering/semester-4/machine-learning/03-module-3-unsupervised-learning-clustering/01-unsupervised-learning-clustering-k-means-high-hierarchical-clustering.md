---
title: "Unsupervised learning: Clustering-K-means, High, Hierarchical clustering"
subject: "MACHINE LEARNING"
module: "Module 3: Unsupervised learning: Clustering"
branch: "Electronics and Communication Engineering"
semester: 4
topicId: "68a5c45eb09ce205780fe62c"
status: "completed"
scrapedAt: "2026-05-23T17:50:18.607Z"
---
# Machine Learning: Module 3 - Unsupervised Learning: Clustering

## Topic: K-Means, Hierarchical Clustering

---

## 1. Introduction to Unsupervised Learning and Clustering

Unsupervised learning is a type of machine learning where the algorithm learns patterns from data that has not been labeled, classified, or categorized. The goal is to discover inherent structures and relationships within the data.

**Clustering** is a fundamental technique in unsupervised learning that aims to group a set of objects in such a way that objects in the same group (called a **cluster**) are more similar to each other than to those in other groups.

**Key Concepts:**

*   **Unsupervised Learning:** Learning from unlabeled data. No target variable is provided.
*   **Clustering:** The task of grouping a set of objects into clusters.
*   **Cluster:** A collection of data points that are similar to each other and dissimilar to data points in other clusters.
*   **Similarity/Dissimilarity Measure:** A metric used to quantify how alike or different two data points are. Common measures include Euclidean distance, Manhattan distance, and cosine similarity.
*   **Centroid:** The mean of all data points belonging to a cluster.

**Learning Outcomes Covered:**
*   Analyze and apply unsupervised machine learning techniques to solve various data-driven problems. (CO1)
*   Design and execute clustering techniques, and assess their effectiveness using various proximity measures. (CO3)
*   Apply unsupervised learning techniques and understand reinforcement learning for complex problem-solving. (CO4)

**Textbook References:**
*   *Hands-on Machine Learning with Scikit-Learn, Keras, and TensorFlow* by Aurélien Géron (Chapter 9: Unsupervised Learning)
*   *Introduction to Machine Learning with Python* by Andreas C. Müller & Sarah Guido (Chapter 6: Unsupervised Learning)
*   *Machine Learning for Absolute Beginners* by Oliver Theobald (Chapter 7: Clustering)

---

## 2. K-Means Clustering

K-Means is one of the most popular and simplest clustering algorithms. It partitions a dataset into *k* distinct clusters, where *k* is a user-defined parameter.

**How it Works (Algorithm Steps):**

1.  **Initialization:** Randomly select *k* data points as initial cluster centroids.
2.  **Assignment Step:** Assign each data point to the cluster whose centroid is closest to it (based on a chosen distance metric, typically Euclidean distance).
3.  **Update Step:** Recalculate the position of the centroids by taking the mean of all data points assigned to that cluster.
4.  **Iteration:** Repeat steps 2 and 3 until the centroids no longer move significantly, or a maximum number of iterations is reached.

**Key Concepts:**

*   **Centroid (Mean):** The average position of all data points in a cluster.
*   **Euclidean Distance:** The straight-line distance between two points in Euclidean space. For points $p = (p_1, p_2, \dots, p_n)$ and $q = (q_1, q_2, \dots, q_n)$, the Euclidean distance is $\sqrt{\sum_{i=1}^n (p_i - q_i)^2}$.
*   **Objective Function (Inertia/Within-Cluster Sum of Squares - WCSS):** K-Means aims to minimize the sum of squared distances between each data point and its assigned cluster centroid.
    *   $WCSS = \sum_{i=1}^k \sum_{x \in C_i} \|x - \mu_i\|^2$, where $C_i$ is the $i$-th cluster, $x$ is a data point in $C_i$, and $\mu_i$ is the centroid of $C_i$.
*   **Choice of *k*:** Determining the optimal number of clusters is crucial. Methods like the Elbow method and Silhouette analysis are used.

**Important Points to Remember:**

*   **Sensitivity to Initialization:** The final clusters can depend on the initial placement of centroids. Running K-Means multiple times with different random initializations and choosing the best result is common (e.g., `n_init` parameter in scikit-learn).
*   **Assumes Spherical Clusters:** K-Means works best when clusters are roughly spherical, equally sized, and well-separated.
*   **Scalability:** K-Means is computationally efficient and scales well to large datasets.
*   **Feature Scaling:** It's essential to scale your data before applying K-Means, as the algorithm is sensitive to the scale of features. Features with larger ranges can disproportionately influence the distance calculations.

**Example (Conceptual):**

Imagine you have a dataset of customer purchase histories, and you want to segment them into different customer groups. K-Means can help by grouping customers with similar purchasing patterns.

1.  **Initialization:** Randomly pick 3 customers as initial group representatives (centroids).
2.  **Assignment:** Assign every other customer to the group whose representative is closest to their purchasing behavior (e.g., frequency of purchase, amount spent).
3.  **Update:** The "average" purchasing behavior of customers in each group is recalculated to become the new representative.
4.  **Repeat:** Continue assigning and updating until the group representatives stabilize.

**Textbook References:**
*   *Hands-on Machine Learning with Scikit-Learn, Keras, and TensorFlow* (Chapter 9.1: K-Means Clustering)
*   *Introduction to Machine Learning with Python* (Section 6.1: K-Means)
*   *Machine Learning for Absolute Beginners* (Chapter 7: Clustering - K-Means)

**Practice Question 1:**
What is the main objective of the K-Means algorithm?
a) To classify data into predefined categories.
b) To find the optimal hyperplane for separation.
c) To partition data into *k* clusters by minimizing the within-cluster sum of squares.
d) To reduce the dimensionality of the data while preserving variance.

**Answer:** c) To partition data into *k* clusters by minimizing the within-cluster sum of squares.

---

## 3. Determining the Optimal Number of Clusters (*k*)

A critical step in K-Means is choosing the right value for *k*.

**Methods:**

*   **The Elbow Method:**
    *   Run K-Means for a range of *k* values (e.g., from 1 to 10).
    *   For each *k*, calculate the WCSS (inertia).
    *   Plot the WCSS against *k*.
    *   The "elbow" point on the plot, where the rate of decrease in WCSS sharply slows down, is often considered a good choice for *k*. This is because adding more clusters beyond the elbow point yields diminishing returns in terms of reducing within-cluster variance.

    **Example Visualization:**
    Imagine a plot with *k* on the x-axis and WCSS on the y-axis. The curve might start high, decrease sharply, and then start to flatten out. The elbow is the point where the curve transitions from a steep decline to a more gradual one.

*   **Silhouette Analysis:**
    *   Calculates the **silhouette coefficient** for each data point.
    *   The silhouette coefficient for a data point measures how similar it is to its own cluster (cohesion) compared to other clusters (separation).
    *   For a data point *i*:
        *   $a(i)$: The average distance from *i* to all other data points in the same cluster.
        *   $b(i)$: The average distance from *i* to all data points in the *nearest* other cluster.
        *   Silhouette Coefficient $s(i) = \frac{b(i) - a(i)}{\max(a(i), b(i))}$
    *   **Interpretation:**
        *   $s(i)$ close to +1: The data point is well-clustered and far from neighboring clusters.
        *   $s(i)$ close to 0: The data point is on or very near the decision boundary between two clusters.
        *   $s(i)$ close to -1: The data point is likely misclassified.
    *   The average silhouette coefficient over all data points can be used to evaluate the quality of clustering for different values of *k*. The *k* that maximizes the average silhouette coefficient is often chosen.

**Textbook References:**
*   *Hands-on Machine Learning with Scikit-Learn, Keras, and TensorFlow* (Section 9.1.2: How to Use K-Means)
*   *Introduction to Machine Learning with Python* (Section 6.1.3: Choosing the Number of Clusters)

**Practice Question 2:**
Which method plots the within-cluster sum of squares (WCSS) against the number of clusters (*k*) to identify an optimal *k*?
a) Silhouette Analysis
b) K-Means++
c) The Elbow Method
d) PCA

**Answer:** c) The Elbow Method

---

## 4. Hierarchical Clustering

Hierarchical clustering builds a hierarchy of clusters. Unlike K-Means, it does not require specifying the number of clusters beforehand. There are two main types:

*   **Agglomerative (Bottom-Up):** Starts with each data point as its own cluster and iteratively merges the closest pairs of clusters until only one cluster remains.
*   **Divisive (Top-Down):** Starts with all data points in one cluster and recursively splits clusters until each data point is in its own cluster.

**Agglomerative Hierarchical Clustering (Most Common):**

**How it Works:**

1.  **Initialization:** Treat each data point as a single cluster.
2.  **Merge:** Find the two closest clusters and merge them into a new, larger cluster.
3.  **Iteration:** Repeat step 2 until all data points belong to a single cluster.

**Key Concepts:**

*   **Linkage Criteria:** Defines how the distance between clusters is calculated. Common criteria include:
    *   **Single Linkage:** The distance between two clusters is the minimum distance between any point in the first cluster and any point in the second cluster.
        *   *Pros:* Can identify non-elliptical shapes.
        *   *Cons:* Prone to the "chaining effect" (long, thin clusters).
    *   **Complete Linkage:** The distance between two clusters is the maximum distance between any point in the first cluster and any point in the second cluster.
        *   *Pros:* Tends to produce more compact clusters.
        *   *Cons:* Sensitive to outliers.
    *   **Average Linkage:** The distance between two clusters is the average distance between all pairs of points, where one point is from the first cluster and the other is from the second.
        *   *Pros:* A compromise between single and complete linkage.
        *   *Cons:* Can be computationally more expensive.
    *   **Centroid Linkage:** The distance between two clusters is the distance between their centroids.
        *   *Note:* Can lead to inversions in the dendrogram (a cluster appearing at a lower level than one of its children).

*   **Dendrogram:** A tree-like diagram that illustrates the arrangement of the clusters produced by hierarchical clustering. The height of the branches indicates the distance at which clusters were merged.
    *   **Reading a Dendrogram:** To obtain a specific number of clusters (*k*), you can cut the dendrogram horizontally at a certain height. The number of vertical lines intersected by the horizontal cut is the number of clusters.

**Important Points to Remember:**

*   **No need to pre-specify *k*:** You can choose *k* by cutting the dendrogram at a desired level.
*   **Computationally Expensive:** Agglomerative clustering typically has a time complexity of $O(n^2 \log n)$ or $O(n^3)$, making it less suitable for very large datasets compared to K-Means ($O(nkd)$, where $d$ is the number of dimensions).
*   **Sensitive to Noise and Outliers:** Depending on the linkage criterion, it can be sensitive to outliers.
*   **Can reveal hierarchical structure:** Useful when the data has an inherent hierarchical organization.

**Example (Conceptual):**

Imagine classifying different species of flowers based on their measurements (sepal length, petal width, etc.).

1.  Start: Each flower is its own cluster.
2.  Merge: Find the two most similar flowers and group them.
3.  Continue merging: Group the next closest pair of flowers or groups until all flowers are in one large group.
4.  Dendrogram: The resulting dendrogram shows how flowers (or groups of flowers) are progressively grouped based on similarity. Cutting the dendrogram at a certain height could reveal distinct species or sub-species.

**Textbook References:**
*   *Hands-on Machine Learning with Scikit-Learn, Keras, and TensorFlow* (Section 9.2: Agglomerative Hierarchical Clustering)
*   *Introduction to Machine Learning with Python* (Section 6.2: Hierarchical Clustering)
*   *Machine Learning for Absolute Beginners* (Chapter 7: Clustering - Hierarchical Clustering)

**Practice Question 3:**
Which of the following is NOT a common linkage criterion used in hierarchical clustering?
a) Single Linkage
b) Mean Linkage
c) Complete Linkage
d) Average Linkage

**Answer:** b) Mean Linkage (Average Linkage is a common one, but "Mean Linkage" itself isn't a standard term. It's likely a distractor for Average Linkage or Centroid Linkage).

---

## 5. Choosing Between K-Means and Hierarchical Clustering

The choice between K-Means and Hierarchical Clustering depends on the dataset characteristics and the desired outcome.

| Feature              | K-Means Clustering                                   | Hierarchical Clustering                                     |
| :------------------- | :--------------------------------------------------- | :---------------------------------------------------------- |
| **Number of Clusters (*k*)** | Must be pre-specified.                             | Does not need to be pre-specified; determined by dendrogram. |
| **Computational Complexity** | Relatively efficient ($O(nkd)$) for large datasets. | More computationally expensive ($O(n^2 \log n)$ or $O(n^3)$) for large datasets. |
| **Cluster Shape**    | Assumes spherical clusters.                          | Can handle arbitrary cluster shapes (depending on linkage).  |
| **Initialization**   | Sensitive to initial centroid placement.             | Not sensitive to initial placement; deterministic.          |
| **Output**           | Assigns each point to one cluster.                   | Produces a hierarchy of clusters (dendrogram).              |
| **Scalability**      | Scales well to large datasets.                       | Scales poorly to very large datasets.                       |
| **Use Cases**        | Customer segmentation, image compression.            | Biological data analysis, document clustering, visual inspection of relationships. |

**Important to Remember:**

*   For very large datasets where computational efficiency is critical, K-Means is often preferred.
*   If the dataset has an inherent hierarchical structure or if you want to explore different granularities of clusters without pre-defining *k*, hierarchical clustering is a better choice.
*   Always consider scaling your data for both algorithms, especially if features have different units or ranges.

**Textbook References:**
*   *Hands-on Machine Learning with Scikit-Learn, Keras, and TensorFlow* (Chapters 9.1 and 9.2 discuss the pros and cons.)
*   *Introduction to Machine Learning with Python* (Section 6.3: Comparing K-Means and Hierarchical Clustering)

---

## 6. Practice Exercises and Answers

**Exercise 1:**
You are given a dataset of customer demographics and purchasing behavior. You want to group customers into distinct segments for targeted marketing.
1.  Which unsupervised learning technique would be most appropriate for this task, and why?
2.  What are the main challenges you might face when using K-Means for this problem?

**Answer:**
1.  **K-Means Clustering** would be most appropriate. It's efficient for large datasets and aims to find groups of similar customers, which is ideal for segmentation. Alternatively, Hierarchical Clustering could be used if you want to explore different levels of segmentation without pre-specifying the number of groups, or if you suspect non-spherical cluster shapes.
2.  **Challenges with K-Means:**
    *   **Choosing *k*:** Determining the optimal number of customer segments without prior knowledge can be difficult. You'd need to use methods like the Elbow method or Silhouette analysis.
    *   **Sensitivity to Initialization:** The initial placement of cluster centroids might lead to different segmentations. Running K-Means multiple times with different random seeds is recommended.
    *   **Feature Scaling:** Demographics (e.g., age) and purchasing behavior (e.g., total spending) might have different scales. Features must be scaled appropriately (e.g., using StandardScaler) before applying K-Means.
    *   **Assumed Cluster Shape:** K-Means assumes clusters are roughly spherical. If customer segments have complex shapes (e.g., crescent-shaped), K-Means might not perform optimally.

**Exercise 2:**
Consider the following dendrogram. If you wanted to obtain exactly 3 clusters, where would you cut the dendrogram? What linkage criterion might have produced this dendrogram if the original data points were labeled A, B, C, D, E, F?

**(Imagine a simple dendrogram with 6 data points A-F. Let's say A and B merge first, then C and D. Then the (A,B) cluster merges with E. Finally, (C,D) merges with F. The final merge combines the two large branches.)**

**Answer:**
1.  **Cutting the Dendrogram for 3 Clusters:** To obtain 3 clusters, you would draw a horizontal line that intersects exactly three vertical branches. Observing the hypothetical dendrogram structure described above, you would cut just below the point where the (C,D) cluster and the (A,B,E) cluster merge. This would leave you with clusters {A, B, E}, {C, D}, and {F} (assuming F was the last to merge with the main branch).
2.  **Linkage Criterion:** The specific linkage criterion that produced this exact dendrogram would depend on the precise distances. However, the general structure suggests that:
    *   A and B were closest.
    *   C and D were next closest to each other.
    *   E was closer to the (A,B) cluster than F was to the (C,D) cluster.
    *   The linkage criteria (like single, complete, or average) would influence which specific pairs are considered "closest" at each step. For instance, if E was only slightly similar to A and B (perhaps in one dimension), single linkage might merge them if other points were far away. Complete linkage would require all points in (A,B) to be close to E. The provided structure is plausible under various linkage criteria, but the exact criterion cannot be definitively stated without the actual distance matrix.

**Exercise 3:**
Explain the difference between the "chaining effect" in single linkage hierarchical clustering and the sensitivity to outliers in complete linkage.

**Answer:**
*   **Chaining Effect (Single Linkage):** This occurs when clusters are merged based on the minimum distance between any two points in the clusters. If there's a "bridge" of data points connecting two otherwise separate clusters, single linkage can erroneously merge them, creating long, elongated, or "chained" clusters. This can lead to a lack of distinct, well-separated groups.

*   **Sensitivity to Outliers (Complete Linkage):** Complete linkage merges clusters based on the maximum distance between points in the two clusters. An outlier point that is far from its cluster centroid but close to points in another cluster can significantly influence the distance calculation between its own cluster and the other. This can cause the algorithm to merge clusters prematurely or incorrectly, especially if the outlier is extreme. In essence, the "worst-case" distance dominates the merge decision.

---

## 7. Key Takeaways and Important Points to Remember

*   **Unsupervised Learning & Clustering:** Discovering hidden patterns and grouping similar data points without predefined labels.
*   **K-Means:**
    *   Iterative algorithm minimizing WCSS.
    *   Requires pre-specifying *k*.
    *   Sensitive to initialization and feature scaling.
    *   Assumes spherical clusters.
    *   Efficient for large datasets.
    *   Use Elbow method or Silhouette analysis to find optimal *k*.
*   **Hierarchical Clustering:**
    *   Builds a hierarchy of clusters via a dendrogram.
    *   Does not require pre-specifying *k*.
    *   Choice of linkage criterion (single, complete, average) affects results.
    *   Computationally intensive, less suitable for very large datasets.
    *   Can reveal intricate relationships and cluster shapes.
*   **Data Preprocessing:** Feature scaling is crucial for distance-based algorithms like K-Means and Hierarchical Clustering.
*   **Evaluation:** While not strictly "evaluated" with metrics like accuracy (due to no labels), internal metrics (like Silhouette score) or visual inspection of clusters (via PCA or t-SNE) can help assess quality.

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=33vbFFFn04k) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=Q-tL8_628gE) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=APPIZ2S8YmY) |
