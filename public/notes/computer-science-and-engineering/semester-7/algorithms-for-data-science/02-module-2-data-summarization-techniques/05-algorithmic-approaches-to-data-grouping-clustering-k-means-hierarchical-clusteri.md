---
title: "Algorithmic Approaches to Data Grouping - Clustering: k-means, hierarchical clustering, DBSCAN"
subject: "ALGORITHMS FOR DATA SCIENCE"
module: "Module 2: Data Summarization Techniques "
branch: "Computer Science and Engineering"
semester: 7
topicId: "684162790fc9aa1fdbc8c797"
status: "completed"
scrapedAt: "2026-05-20T17:00:30.237Z"
---
# ALGORITHMS FOR DATA SCIENCE: Module 2 - Data Summarization Techniques

## Topic: Algorithmic Approaches to Data Grouping - Clustering

This module introduces fundamental algorithmic approaches to summarizing data by grouping similar data points together. We'll explore three popular clustering algorithms: **k-means**, **hierarchical clustering**, and **DBSCAN**.

---

### 1. Introduction to Clustering

**What is Clustering?**

Clustering is an unsupervised machine learning technique that aims to partition a dataset into groups (clusters) such that data points within the same cluster are more similar to each other than to those in other clusters. It's about discovering inherent groupings in data without prior knowledge of the group labels.

**Key Concepts:**

*   **Similarity/Dissimilarity:** A measure of how alike or different two data points are. Common measures include:
    *   **Euclidean Distance:** The straight-line distance between two points in multi-dimensional space.
    *   **Manhattan Distance (L1 norm):** The sum of the absolute differences of their Cartesian coordinates.
    *   **Cosine Similarity:** Measures the cosine of the angle between two vectors, often used for text data.
*   **Cluster:** A collection of data points that are similar to each other and dissimilar to data points in other clusters.
*   **Unsupervised Learning:** Algorithms that learn from data without explicit labels or target outputs.
*   **Centroid:** The mean of all the data points in a cluster (typically used in k-means).

**Applications of Clustering:**

*   **Customer Segmentation:** Grouping customers based on purchasing behavior, demographics, etc.
*   **Image Segmentation:** Dividing an image into regions with similar pixel properties.
*   **Anomaly Detection:** Identifying data points that don't belong to any cluster.
*   **Document Analysis:** Grouping similar documents for topic modeling.
*   **Bioinformatics:** Grouping genes with similar expression patterns.

---

### 2. K-Means Clustering

**What is K-Means?**

K-means is an iterative partitioning algorithm that aims to divide *n* observations into *k* clusters, where *k* is a pre-defined parameter. It's a centroid-based clustering algorithm.

**How it Works (The Algorithm):**

1.  **Initialization:**
    *   Choose the number of clusters, *k*.
    *   Randomly select *k* data points as initial cluster centroids (or initialize them strategically, e.g., using k-means++).

2.  **Assignment Step:**
    *   Assign each data point to the nearest centroid based on a chosen distance metric (typically Euclidean distance). This creates *k* clusters.

3.  **Update Step:**
    *   Recalculate the centroids for each cluster by taking the mean of all data points assigned to that cluster.

4.  **Iteration:**
    *   Repeat the Assignment and Update steps until the centroids no longer change significantly, or until a maximum number of iterations is reached. The algorithm converges when assignments no longer change.

**Key Concepts:**

*   **Centroid:** The mean of all points assigned to a cluster.
*   **Objective Function (Within-Cluster Sum of Squares - WCSS):** K-means aims to minimize the WCSS, which is the sum of squared distances between each data point and its assigned cluster centroid.
    $WCSS = \sum_{i=1}^{k} \sum_{x \in C_i} ||x - \mu_i||^2$
    where $C_i$ is the $i$-th cluster, $\mu_i$ is its centroid, and $x$ is a data point in $C_i$.

**Steps in Detail:**

1.  **Initialization:**
    *   **Random Initialization:** Simple but can lead to suboptimal results.
    *   **K-Means++ Initialization:** A smarter initialization strategy that tends to choose centroids that are far apart, leading to better and more consistent results. It initializes the first centroid randomly, then selects subsequent centroids by picking points with a probability proportional to the square of their distance from the nearest existing centroid.

2.  **Assignment:** For each data point, calculate its distance to every centroid and assign it to the cluster whose centroid is closest.

3.  **Update:** For each cluster, compute the new centroid as the average of all data points currently assigned to that cluster.

4.  **Convergence:** The process stops when:
    *   Centroids do not move between iterations.
    *   Data point assignments do not change between iterations.
    *   A predefined maximum number of iterations is reached.

**Choosing the Value of *k***:

*   **Elbow Method:** Plot WCSS against different values of *k*. The "elbow" point, where the rate of decrease in WCSS sharply changes, is often considered a good choice for *k*.
*   **Silhouette Score:** Measures how similar an object is to its own cluster compared to other clusters. A higher silhouette score indicates better clustering.
*   **Gap Statistic:** Compares the WCSS of the clustered data to the expected WCSS of a null reference distribution (e.g., uniformly distributed data).

**Advantages:**

*   Simple to understand and implement.
*   Computationally efficient, especially for large datasets.
*   Scales well to large numbers of variables.

**Disadvantages:**

*   Requires the number of clusters (*k*) to be specified beforehand.
*   Sensitive to the initial choice of centroids.
*   Assumes clusters are spherical, equally sized, and have similar densities.
*   Can be sensitive to outliers.
*   The objective function (WCSS) is not always convex, meaning local optima can be reached.

**Example:**

Imagine clustering customer data based on two features: "Annual Income" and "Spending Score".

1.  We decide to look for *k* = 3 clusters.
2.  We randomly pick 3 customers as initial centroids.
3.  We assign each customer to the closest centroid.
4.  We recalculate the centroids based on the average income and spending score of customers in each group.
5.  We repeat steps 3 and 4 until the groups stabilize.

---

### 3. Hierarchical Clustering

**What is Hierarchical Clustering?**

Hierarchical clustering builds a hierarchy of clusters. It does not require the number of clusters to be specified beforehand. Instead, it creates a tree-like structure called a **dendrogram** that represents the nested structure of clusters.

**Two Main Types:**

1.  **Agglomerative (Bottom-Up):**
    *   Starts with each data point as its own cluster.
    *   Merges the two most similar clusters iteratively.
    *   Continues until all data points belong to a single cluster.

2.  **Divisive (Top-Down):**
    *   Starts with all data points in a single cluster.
    *   Splits clusters iteratively into smaller clusters.
    *   Continues until each data point is its own cluster.

Agglomerative clustering is more commonly used.

**How Agglomerative Clustering Works:**

1.  **Initialization:** Each data point is considered a cluster.
2.  **Iteration:**
    *   Find the two closest clusters based on a linkage criterion.
    *   Merge these two clusters into a single new cluster.
3.  **Termination:** Repeat step 2 until only one cluster remains.

**Key Concepts:**

*   **Dendrogram:** A tree-like diagram that illustrates the hierarchical relationships between clusters. The height of the branches indicates the distance at which clusters are merged.
*   **Linkage Criteria:** Defines how the distance between clusters is calculated. Common linkage methods:
    *   **Single Linkage:** The distance between two clusters is the minimum distance between any point in one cluster and any point in the other cluster.
        *   *Pros:* Can find non-elliptical clusters.
        *   *Cons:* Prone to the "chaining effect" where long, thin clusters can form.
    *   **Complete Linkage:** The distance between two clusters is the maximum distance between any point in one cluster and any point in the other cluster.
        *   *Pros:* Produces more compact, spherical clusters.
        *   *Cons:* Sensitive to outliers.
    *   **Average Linkage:** The distance between two clusters is the average distance between all pairs of points, where one point is from each cluster.
        *   *Pros:* A compromise between single and complete linkage.
        *   *Cons:* Can be computationally more expensive.
    *   **Ward's Linkage:** Merges clusters to minimize the increase in the total within-cluster variance (WCSS). It aims to create clusters of similar size and shape.
        *   *Pros:* Often produces good results with compact clusters.
        *   *Cons:* Can be computationally intensive.

**How to Determine the Number of Clusters from a Dendrogram:**

*   Draw a horizontal line across the dendrogram at a desired height. The number of vertical lines intersected by this horizontal line represents the number of clusters. The height of the line corresponds to the dissimilarity threshold.

**Advantages:**

*   Does not require the number of clusters to be specified beforehand.
*   Provides a visualization (dendrogram) that helps understand the structure of the data.
*   Can discover clusters of arbitrary shape (depending on linkage).

**Disadvantages:**

*   Computationally expensive, especially for large datasets (typically O(n^3) or O(n^2 log n) depending on implementation).
*   The choice of linkage criterion can significantly affect the results.
*   Once a merge or split is performed, it cannot be undone.

**Example:**

Consider a dataset of fruit images, and we want to group them.

1.  Start with each fruit image as its own cluster.
2.  Find the two most similar images (e.g., two apples) and merge them.
3.  Find the next two closest clusters (e.g., the two apples and another apple, or two oranges) and merge them.
4.  Continue this process, building a hierarchy.
5.  By examining the dendrogram, we can decide to cut it at a certain level to get groups of similar fruits (e.g., one cluster for apples, one for oranges).

---

### 4. DBSCAN (Density-Based Spatial Clustering of Applications with Noise)

**What is DBSCAN?**

DBSCAN is a density-based clustering algorithm that groups together points that are closely packed together, marking points that lie alone in low-density regions as outliers. It does not require the number of clusters to be specified beforehand and can find clusters of arbitrary shapes.

**Key Concepts:**

*   **Density:** DBSCAN defines clusters based on the density of data points. A region with a high density of points is considered part of a cluster.
*   **Epsilon (ε) or `eps`:** The maximum distance between two samples for one to be considered as in the neighborhood of the other.
*   **MinPts or `min_samples`:** The number of samples (or total weight) in a neighborhood for a point to be considered as a core point. This includes the point itself.

**Point Types:**

1.  **Core Point:** A point that has at least `min_samples` within its `eps` neighborhood (including itself).
2.  **Border Point:** A point that is within the `eps` neighborhood of a core point, but does not have enough neighbors to be a core point itself.
3.  **Noise Point (Outlier):** A point that is neither a core point nor a border point.

**How DBSCAN Works (The Algorithm):**

1.  **Initialization:**
    *   All points are initially unvisited.
    *   Pick an arbitrary unvisited point.

2.  **Neighborhood Exploration:**
    *   If the point has at least `min_samples` within its `eps` neighborhood (it's a core point):
        *   Start a new cluster.
        *   Recursively find all density-reachable points from this core point and add them to the current cluster.
        *   **Density-Reachable:** A point *q* is density-reachable from a point *p* if there is a chain of points $p_1, p_2, ..., p_n$ such that $p_1 = p$, $p_n = q$, and each $p_i$ is a core point, and $p_{i+1}$ is in the `eps` neighborhood of $p_i$.
        *   **Density-Connected:** Two points *p* and *q* are density-connected if there exists a core point *o* such that both *p* and *q* are density-reachable from *o*.
    *   If the point does not have enough neighbors (it's not a core point), mark it as noise (for now). It might later be assigned to a cluster if it's a border point of a newly discovered cluster.

3.  **Repeat:** Continue picking unvisited points until all points have been visited.

**Choosing the Values of `eps` and `min_samples`:**

*   **`eps`:** This parameter is highly dependent on the scale of your data. A common heuristic is to find the average distance to the k-th nearest neighbor (where k = `min_samples`) and choose `eps` around that value. Plotting a k-distance graph (distance to k-th nearest neighbor for all points) can help identify a suitable `eps`.
*   **`min_samples`:** A common choice is 2 * dimensionality of the data. However, it can also be chosen based on the expected minimum number of points that should constitute a dense region.

**Advantages:**

*   Can discover clusters of arbitrary shapes.
*   Robust to outliers.
*   Does not require the number of clusters to be specified beforehand.
*   Has two easily interpretable parameters (`eps` and `min_samples`).

**Disadvantages:**

*   Performance can be sensitive to the choice of `eps` and `min_samples`.
*   Struggles with clusters of varying densities. A high-density cluster might split, or a low-density cluster might merge with another.
*   Not effective for high-dimensional data (curse of dimensionality can make the concept of density less meaningful).
*   Border points might be assigned to different clusters if they are reachable from multiple core points (though most implementations handle this consistently).

**Example:**

Imagine plotting points on a 2D plane representing GPS locations.

1.  We set `eps` = 100 meters and `min_samples` = 5.
2.  Pick a point. If it has at least 5 neighbors within 100 meters, it's a core point. We start a cluster.
3.  Find all points reachable from this core point (and their core point neighbors) and add them to the cluster.
4.  If a point is within 100 meters of a core point but isn't a core point itself, it's a border point, added to the cluster.
5.  Points that aren't reachable by any core point are marked as noise.
6.  We repeat for other unvisited points. This could identify a cluster of closely packed houses (dense region) and individual scattered houses as noise.

---

### 5. Practice Questions & Exercises

**Question 1 (K-Means):**
Which of the following is NOT an advantage of k-means clustering?
a) Simplicity and ease of implementation.
b) Ability to find clusters of arbitrary shapes.
c) Computational efficiency.
d) Scales well to a large number of variables.

**Question 2 (Hierarchical Clustering):**
What is the primary output visualization of hierarchical clustering that helps in determining the number of clusters?
a) Scatter plot
b) Histogram
c) Dendrogram
d) Confusion matrix

**Question 3 (DBSCAN):**
In DBSCAN, which parameter defines the maximum distance between two samples for one to be considered as in the neighborhood of the other?
a) `min_samples`
b) `cluster_size`
c) `epsilon` (or `eps`)
d) `radius`

**Question 4 (Conceptual - All Algorithms):**
You have a dataset of customer purchase histories.
*   If you want to find exactly 5 distinct customer groups, which algorithm would be most straightforward?
*   If your customers exhibit complex purchasing patterns, forming non-spherical groups, which algorithm might be more suitable?
*   If you suspect that some customer data might be genuinely anomalous (e.g., unique one-off purchases), which algorithm is best at identifying these as "noise"?

**Exercise 1 (K-Means - Conceptual):**
Consider the following 2D data points: A(1,1), B(1,2), C(2,1), D(8,8), E(8,9), F(9,8).
If you were to apply k-means with k=2, describe how the algorithm might group these points and how the centroids would likely evolve.

**Exercise 2 (Hierarchical Clustering - Conceptual):**
Given the same points as Exercise 1: A(1,1), B(1,2), C(2,1), D(8,8), E(8,9), F(9,8).
If you were to use single linkage hierarchical clustering, which points would likely be merged first? Which would be merged later?

**Exercise 3 (DBSCAN - Conceptual):**
Consider the same points as Exercise 1: A(1,1), B(1,2), C(2,1), D(8,8), E(8,9), F(9,8).
If you set `eps = 1.5` and `min_samples = 2`, what would be the likely classification (Core, Border, Noise) for each point?

---

### 6. Answers to Practice Questions & Exercises

**Answer to Question 1:**
b) Ability to find clusters of arbitrary shapes.
*   *Explanation:* K-means typically assumes spherical clusters. Hierarchical clustering (with appropriate linkage) and DBSCAN are better suited for arbitrary shapes.

**Answer to Question 2:**
c) Dendrogram

**Answer to Question 3:**
c) `epsilon` (or `eps`)

**Answer to Question 4:**
*   **Exactly 5 distinct customer groups:** K-means would be most straightforward because you explicitly provide *k=5*.
*   **Complex, non-spherical groups:** Hierarchical clustering (depending on linkage like single or average) or DBSCAN could be more suitable.
*   **Identifying anomalies as "noise":** DBSCAN is specifically designed to identify noise points that don't belong to any dense cluster.

**Answer to Exercise 1 (K-Means):**
*   **Initial State:** Assume initial centroids are, say, A(1,1) and D(8,8).
*   **Assignment:**
    *   Points A, B, C would be closer to centroid A.
    *   Points D, E, F would be closer to centroid D.
*   **Update:**
    *   New centroid 1: Mean of A, B, C = ((1+1+2)/3, (1+2+1)/3) = (4/3, 4/3) ≈ (1.33, 1.33).
    *   New centroid 2: Mean of D, E, F = ((8+8+9)/3, (8+9+8)/3) = (25/3, 25/3) ≈ (8.33, 8.33).
*   **Iteration:** The points would remain assigned to their respective groups. The centroids would move closer to the actual centers of these two groups. The algorithm would likely converge with one cluster containing {A, B, C} and the other containing {D, E, F}.

**Answer to Exercise 2 (Hierarchical Clustering - Single Linkage):**
*   Calculate pairwise distances (using Euclidean distance):
    *   d(A,B) = 1
    *   d(A,C) = 1
    *   d(B,C) = sqrt((1-2)^2 + (2-1)^2) = sqrt(1+1) = sqrt(2) ≈ 1.41
    *   d(D,E) = 1
    *   d(D,F) = 1
    *   d(E,F) = sqrt((8-9)^2 + (9-8)^2) = sqrt(1+1) = sqrt(2) ≈ 1.41
    *   d(A,D) = sqrt((1-8)^2 + (1-8)^2) = sqrt(49+49) = sqrt(98) ≈ 9.9
*   **First Merges:** The smallest distances are 1. So, {A,B} would merge, and {D,E} would merge (or {A,C} and {D,F}, depending on the exact order of calculation if ties exist). Let's assume {A,B} and {D,E} merge.
*   **Next Merges:**
    *   Consider cluster {A,B} and point C. The distance from C to {A,B} using single linkage is min(d(C,A), d(C,B)) = min(1, 1.41) = 1.
    *   Consider cluster {D,E} and point F. The distance from F to {D,E} using single linkage is min(d(F,D), d(F,E)) = min(1, 1.41) = 1.
    *   So, {A,B,C} would merge, and {D,E,F} would merge.
*   **Final Merge:** The distance between the cluster {A,B,C} and {D,E,F} would be the minimum distance between any point in the first cluster and any point in the second cluster. For example, min(d(C,D), d(C,E), d(C,F)) = min(sqrt(7^2+7^2), sqrt(7^2+6^2), sqrt(6^2+7^2)) = min(sqrt(98), sqrt(85), sqrt(85)) ≈ 7.28. This would be the final merge.

**Answer to Exercise 3 (DBSCAN):**
Given points: A(1,1), B(1,2), C(2,1), D(8,8), E(8,9), F(9,8).
`eps = 1.5`, `min_samples = 2`.

*   **Point A(1,1):**
    *   Neighbors within 1.5: B(1,2) [d=1], C(2,1) [d=1]. Total neighbors = 2 (including itself if we count). `min_samples` is 2.
    *   A has 2 neighbors (B, C) within its 1.5 radius. So, A is a **Core Point**.
*   **Point B(1,2):**
    *   Neighbors within 1.5: A(1,1) [d=1]. Total neighbors = 1. Not enough for a core point.
    *   Check if B is reachable from a core point. A is a core point, and d(A,B) = 1 < 1.5. So B is in A's neighborhood.
    *   B is not a core point itself, but it's reachable from a core point (A). So, B is a **Border Point**.
*   **Point C(2,1):**
    *   Neighbors within 1.5: A(1,1) [d=1]. Total neighbors = 1. Not enough for a core point.
    *   Check if C is reachable from a core point. A is a core point, and d(A,C) = 1 < 1.5. So C is in A's neighborhood.
    *   C is not a core point itself, but it's reachable from a core point (A). So, C is a **Border Point**.
*   **Point D(8,8):**
    *   Neighbors within 1.5: E(8,9) [d=1], F(9,8) [d=1]. Total neighbors = 2 (including itself if we count). `min_samples` is 2.
    *   D has 2 neighbors (E, F) within its 1.5 radius. So, D is a **Core Point**.
*   **Point E(8,9):**
    *   Neighbors within 1.5: D(8,8) [d=1]. Total neighbors = 1. Not enough for a core point.
    *   Check if E is reachable from a core point. D is a core point, and d(D,E) = 1 < 1.5. So E is in D's neighborhood.
    *   E is not a core point itself, but it's reachable from a core point (D). So, E is a **Border Point**.
*   **Point F(9,8):**
    *   Neighbors within 1.5: D(8,8) [d=1]. Total neighbors = 1. Not enough for a core point.
    *   Check if F is reachable from a core point. D is a core point, and d(D,F) = 1 < 1.5. So F is in D's neighborhood.
    *   F is not a core point itself, but it's reachable from a core point (D). So, F is a **Border Point**.

**Summary of DBSCAN Classification:**
*   Core Points: A, D
*   Border Points: B, C, E, F
*   Noise Points: None

The algorithm would likely form two clusters: {A, B, C} and {D, E, F}.

---

### 7. Important Points to Remember

*   **Clustering is Unsupervised:** You don't have "correct" labels to guide the algorithm. The goal is to find intrinsic structure.
*   **Choice of Algorithm:** The best clustering algorithm depends on the data's characteristics (shape, density, presence of outliers) and your goals.
*   **Parameter Tuning:** K-means (k), Hierarchical (linkage, cut-off), and DBSCAN (`eps`, `min_samples`) all have parameters that significantly influence the results. Experimentation and domain knowledge are crucial.
*   **Distance Metrics Matter:** The choice of distance metric (Euclidean, Manhattan, etc.) is fundamental to how "similarity" is defined.
*   **Evaluation is Key:** Since clustering is unsupervised, evaluating the quality of clusters can be challenging. Techniques like the Elbow method, Silhouette score, and domain-specific validation are important.
*   **Curse of Dimensionality:** Clustering algorithms (especially density-based ones like DBSCAN) can perform poorly in high-dimensional spaces because the concept of distance and density becomes less meaningful. Feature selection or dimensionality reduction might be necessary.
*   **Outliers:** K-means is sensitive to outliers, while DBSCAN is designed to handle them by classifying them as noise. Hierarchical clustering can also be affected by outliers, depending on the linkage method.
