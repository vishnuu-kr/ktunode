---
title: "Hierarchical Clustering - Agglomerative Clustering"
subject: "MACHINE LEARNING"
module: "Module 4: Unsupervised Learning"
branch: "Computer Science and Engineering"
semester: 5
topicId: "684162760fc9aa1fdbc8b5d0"
status: "completed"
scrapedAt: "2026-05-20T16:46:48.463Z"
---
## MACHINE LEARNING - Module 4: Unsupervised Learning - Hierarchical Clustering (Agglomerative)

**Topic:** Hierarchical Clustering - Agglomerative Clustering

**Learning Outcomes:**

*   Understand the concept of hierarchical clustering.
*   Differentiate between agglomerative and divisive hierarchical clustering.
*   Explain the agglomerative clustering algorithm.
*   Describe different linkage methods (single, complete, average, ward).
*   Interpret a dendrogram and determine the optimal number of clusters.
*   Apply agglomerative clustering using Python libraries (e.g., scikit-learn).
*   Evaluate the strengths and weaknesses of agglomerative clustering.

---

### 1. Introduction to Hierarchical Clustering

*   **What is Hierarchical Clustering?**
    *   Hierarchical clustering is an unsupervised learning algorithm that builds a hierarchy of clusters. Unlike K-means, it doesn't require you to pre-define the number of clusters.
    *   It creates a tree-like structure (dendrogram) representing the nested grouping of data points.
    *   Useful when the number of clusters is unknown or when you want to understand the relationships between data points at different levels of granularity.

*   **Key Concepts:**
    *   **Dendrogram:** A tree-like diagram that records the sequence of merges or splits in the hierarchical clustering process. The height of the branches indicates the distance between clusters at which they were merged.
    *   **Proximity Matrix (or Distance Matrix):** A matrix containing the distances between all pairs of data points. This matrix is the input for agglomerative clustering.
    *   **Linkage Criteria:** The rule that determines the distance between sets of observations as a function of the pairwise distances between observations. Different linkage methods lead to different cluster shapes and characteristics.

### 2. Agglomerative vs. Divisive Hierarchical Clustering

*   **Agglomerative (Bottom-Up):**
    *   Starts with each data point as its own individual cluster.
    *   Merges the closest pairs of clusters iteratively until all data points belong to a single cluster or a stopping criterion is met.
    *   More common and generally preferred due to its computational efficiency in most cases.
    *   Focus of these notes.

*   **Divisive (Top-Down):**
    *   Starts with all data points belonging to a single cluster.
    *   Divides the cluster into smaller sub-clusters recursively until each data point forms its own cluster.
    *   Computationally more expensive than agglomerative clustering for larger datasets.

**Difference Table:**

| Feature          | Agglomerative Clustering (Bottom-Up) | Divisive Clustering (Top-Down) |
| ---------------- | -------------------------------------- | ------------------------------- |
| Starting Point  | Each point as a cluster                | All points in one cluster       |
| Process          | Merging clusters                       | Splitting clusters              |
| Computational Cost | Generally lower                      | Generally higher                |
| Common Usage     | More common                            | Less common                     |

### 3. Agglomerative Clustering Algorithm

1.  **Initialization:**  Begin with each data point considered as an individual cluster.  Construct the proximity (distance) matrix.
2.  **Iteration:**
    *   Find the two closest clusters in the proximity matrix.
    *   Merge these two clusters into a single cluster.
    *   Update the proximity matrix to reflect the distances between the new cluster and the remaining clusters.  The method for updating the matrix depends on the chosen linkage criterion (see Section 4).
3.  **Termination:** Repeat step 2 until all data points are in a single cluster or a pre-defined stopping criterion is met (e.g., desired number of clusters reached).

**Example:**

Imagine you have 4 data points: A, B, C, D. Their distances are:

*   Dist(A, B) = 2
*   Dist(A, C) = 6
*   Dist(A, D) = 10
*   Dist(B, C) = 5
*   Dist(B, D) = 9
*   Dist(C, D) = 4

Using single linkage:

1.  Initially:  {A}, {B}, {C}, {D}
2.  Merge A and B (smallest distance = 2): {AB}, {C}, {D}
3.  Update the proximity matrix based on the minimum distance between the new cluster {AB} and {C} and {D}.
4.  Continue merging until all are in one cluster {ABCD}.

### 4. Linkage Methods

Linkage methods define how the distance between two clusters is calculated. This greatly impacts the shape and characteristics of the resulting clusters.

*   **Single Linkage (Nearest Neighbor):**
    *   Distance between two clusters is the *minimum* distance between any point in one cluster and any point in the other cluster.
    *   Tends to create long, chain-like clusters. Sensitive to noise and outliers.
    *   **Formula:**  `d(Ci, Cj) = min(dist(x, y)) for all x in Ci and y in Cj`

*   **Complete Linkage (Furthest Neighbor):**
    *   Distance between two clusters is the *maximum* distance between any point in one cluster and any point in the other cluster.
    *   Tends to create compact, tightly packed clusters.  Less sensitive to noise than single linkage.
    *   **Formula:**  `d(Ci, Cj) = max(dist(x, y)) for all x in Ci and y in Cj`

*   **Average Linkage:**
    *   Distance between two clusters is the *average* distance between all pairs of points, one from each cluster.
    *   Balances the characteristics of single and complete linkage. More robust to outliers than single linkage.
    *   **Formula:** `d(Ci, Cj) = (1 / (|Ci| * |Cj|)) * sum(dist(x, y)) for all x in Ci and y in Cj` where |Ci| and |Cj| represent the number of elements in clusters Ci and Cj, respectively.

*   **Ward's Linkage:**
    *   Minimizes the *variance* within the clusters being merged.
    *   Tends to create clusters that are relatively equal in size.  Often preferred when clusters are expected to be roughly spherical and of similar sizes.
    *   Focuses on minimizing the increase in within-cluster sum of squares (WCSS) when merging clusters.
    *   **Note:** Works best with Euclidean distance.

**Comparison Table:**

| Linkage Method    | Distance Metric         | Cluster Shape        | Sensitivity to Noise | Characteristics                                                                |
| ----------------- | ------------------------- | -------------------- | -------------------- | ----------------------------------------------------------------------------- |
| Single Linkage     | Minimum distance          | Chain-like           | High                 | Forms long, straggly clusters.  Prone to the "chaining effect."                 |
| Complete Linkage   | Maximum distance          | Compact               | Low                  | Forms dense, tightly packed clusters.                                          |
| Average Linkage    | Average distance          | Intermediate         | Medium               | Compromise between single and complete linkage. More balanced clusters.         |
| Ward's Linkage     | Variance minimization      | Relatively Equal Size | Low                  | Minimizes variance, tends to create clusters of similar size and spherical shape. |

### 5. Interpreting a Dendrogram

*   **Purpose:** Visual representation of the hierarchical clustering process, showing the merging of clusters at different distance levels.
*   **X-axis:** Represents the data points (or clusters).
*   **Y-axis:** Represents the distance (or dissimilarity) between clusters.
*   **Interpreting the Dendrogram:**
    *   The height of the vertical lines indicates the distance at which clusters were merged. Taller lines indicate that the clusters were more dissimilar when merged.
    *   To determine the optimal number of clusters, look for the longest vertical line (or lines) that doesn't intersect any other horizontal lines.  Draw a horizontal line across the dendrogram at the top of this longest vertical line. The number of vertical lines this horizontal line intersects represents a reasonable estimate for the optimal number of clusters.
    *   **Cutting the Dendrogram:** By choosing a specific distance threshold (i.e., cutting the dendrogram at a certain height), you define the number of clusters.

**Example:**

Imagine a dendrogram. A long vertical line goes from distance 2 to distance 8 before it intersects another cluster. Cutting the dendrogram at distance 8 might suggest a good number of clusters because merging below distance 8 yields significant difference/dissimilarity.

### 6. Agglomerative Clustering in Python (Scikit-Learn)

```python
from sklearn.cluster import AgglomerativeClustering
from sklearn.datasets import make_blobs
import matplotlib.pyplot as plt

# Generate sample data
X, y = make_blobs(n_samples=300, centers=4, cluster_std=0.60, random_state=0)

# Initialize Agglomerative Clustering
# n_clusters: Number of clusters to form.
# affinity: Metric used to compute the linkage. Can be "euclidean", "manhattan", "cosine", etc.
# linkage: Linkage criterion to use. "ward", "complete", "average", "single"
clustering = AgglomerativeClustering(n_clusters=4, affinity='euclidean', linkage='ward')

# Fit the model to the data
clustering.fit(X)

# Get the cluster labels
labels = clustering.labels_

# Plot the results
plt.scatter(X[:, 0], X[:, 1], c=labels, cmap='viridis')
plt.title("Agglomerative Clustering")
plt.xlabel("Feature 1")
plt.ylabel("Feature 2")
plt.show()
```

**Key Parameters of `AgglomerativeClustering`:**

*   `n_clusters`: The number of clusters to find.  If set to `None`, the algorithm will proceed until only one cluster remains (allowing you to analyze the dendrogram to choose the optimal number).
*   `affinity`: The metric used to calculate the distance between data points. Common options include 'euclidean', 'manhattan', 'cosine'. Ward's linkage requires 'euclidean'.
*   `linkage`: The linkage criterion to use. Options are 'ward', 'complete', 'average', and 'single'.

### 7. Strengths and Weaknesses of Agglomerative Clustering

**Strengths:**

*   **No need to pre-specify the number of clusters:** Allows exploration of data at different levels of granularity.
*   **Provides a hierarchy of clusters:** Useful for understanding relationships between data points.
*   **Relatively easy to implement and interpret.**
*   **Versatile:** Can use different linkage methods to adapt to different data characteristics.

**Weaknesses:**

*   **Computational Complexity:** Can be computationally expensive for large datasets (O(n^2) or O(n^3) depending on implementation and linkage method).
*   **Sensitivity to Noise and Outliers:** Some linkage methods (e.g., single linkage) are highly susceptible to noise.
*   **Difficulty in Handling Different Cluster Sizes and Densities:** May struggle with datasets where clusters have significantly different sizes, densities, or non-convex shapes.
*   **Irreversible:** Once a merge has been performed, it cannot be undone. This can lead to suboptimal clustering if early decisions are poor.

### 8. Practice Questions/Exercises

**Q1:** What is the main difference between agglomerative and divisive hierarchical clustering?

**Answer:** Agglomerative clustering starts with each data point as its own cluster and merges them iteratively, while divisive clustering starts with all data points in one cluster and splits it recursively.

**Q2:** Explain the concept of "linkage" in agglomerative clustering. Why is it important?

**Answer:** Linkage defines how the distance between two clusters is calculated. It's important because it determines the shape and characteristics of the resulting clusters (e.g., compact vs. chain-like). Different linkage methods are suitable for different data characteristics.

**Q3:** Describe the differences between single, complete, average, and Ward's linkage. Provide a scenario where each might be most appropriate.

**Answer:**
*   **Single Linkage:** Minimum distance. Good for finding stringy/elongated clusters, but very sensitive to noise. Use when clusters are expected to be connected through a "chaining" effect.
*   **Complete Linkage:** Maximum distance. Good for finding compact, well-separated clusters, less sensitive to noise. Use when you want to ensure that all points within a cluster are relatively close to each other.
*   **Average Linkage:** Average distance. A compromise between single and complete linkage, offers more balanced clustering. Good when you want to balance compactness and chain-like structures.
*   **Ward's Linkage:** Minimizes variance. Good for finding clusters of similar size and spherical shape. Use when clusters are expected to be roughly equal in size.

**Q4:** How can a dendrogram be used to determine the optimal number of clusters?

**Answer:** Look for the longest vertical lines in the dendrogram that don't intersect any horizontal lines. Draw a horizontal line at the top of this longest line. The number of vertical lines this horizontal line intersects is a good estimate for the optimal number of clusters.

**Q5:** You have a dataset with many outliers. Which linkage method would be the *least* appropriate for agglomerative clustering? Why?

**Answer:** Single linkage would be the least appropriate because it is highly sensitive to noise and outliers. Outliers can easily distort the cluster structure created by single linkage.

**Q6:**  Write python code using scikit-learn to perform Agglomerative Clustering on dummy dataset (using `make_blobs`).

```python
from sklearn.cluster import AgglomerativeClustering
from sklearn.datasets import make_blobs
import matplotlib.pyplot as plt

# Generate sample data
X, y = make_blobs(n_samples=100, centers=3, cluster_std=0.60, random_state=0)

# Initialize Agglomerative Clustering with 3 clusters and Ward linkage
clustering = AgglomerativeClustering(n_clusters=3, linkage='ward')

# Fit the model to the data
clustering.fit(X)

# Get the cluster labels
labels = clustering.labels_

# Plot the results
plt.scatter(X[:, 0], X[:, 1], c=labels, cmap='viridis')
plt.title("Agglomerative Clustering Example")
plt.xlabel("Feature 1")
plt.ylabel("Feature 2")
plt.show()
```

---

### 9. Important Points to Remember

*   Agglomerative clustering is a bottom-up hierarchical clustering method.
*   Linkage methods significantly impact the resulting cluster structures.
*   The dendrogram is a powerful tool for visualizing the clustering process and determining the optimal number of clusters.
*   Consider the strengths and weaknesses of agglomerative clustering and the properties of your data when choosing this algorithm.
*   Experiment with different linkage methods and parameters to find the best clustering solution for your specific problem.
