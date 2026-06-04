---
title: "Hierarchical  Clustering"
subject: "DATA MINING"
module: "Module 3: Classification "
branch: "Computer Science and Engineering"
semester: 5
topicId: "684162770fc9aa1fdbc8b8b5"
status: "completed"
scrapedAt: "2026-05-20T16:45:15.221Z"
---
## Data Mining: Module 3 - Classification: Hierarchical Clustering

**Learning Outcomes:**

* Understand the concept of hierarchical clustering.
* Differentiate between agglomerative and divisive hierarchical clustering methods.
* Learn different linkage methods (single, complete, average, centroid, Ward's).
* Understand the strengths and weaknesses of hierarchical clustering.
* Apply hierarchical clustering using Python (conceptual understanding and basic implementation).
* Evaluate the results of hierarchical clustering (visual assessment of dendrograms).

---

### 1. Introduction to Hierarchical Clustering

*   **Definition:** Hierarchical clustering is a method of cluster analysis that seeks to build a hierarchy of clusters.  Instead of partitioning data into distinct clusters in a single step (like k-means), it builds a tree-like structure called a dendrogram.

*   **Key Characteristics:**
    *   **Hierarchy:**  Clusters are nested, forming a tree structure.
    *   **Deterministic:**  Typically produces the same result given the same data (unlike k-means which depends on random initialization).
    *   **No need to pre-specify the number of clusters:** The dendrogram allows exploration of clustering at different levels of granularity.  The number of clusters can be determined after the dendrogram is built.
    *   **Visual representation:** The dendrogram provides a valuable visual representation of the clustering process and relationships between data points.

### 2. Types of Hierarchical Clustering

*   **Agglomerative (Bottom-up):**
    *   **Starting Point:** Each data point starts as its own cluster.
    *   **Process:**  At each step, the two closest clusters are merged, gradually building larger and larger clusters until all data points belong to a single cluster.
    *   **Commonly Used:** More widely used than divisive clustering due to its straightforward implementation and interpretability.
    *   **Also known as:**  Bottom-up clustering, merging clustering.

*   **Divisive (Top-down):**
    *   **Starting Point:** All data points initially belong to a single cluster.
    *   **Process:**  At each step, the cluster is divided into smaller clusters, recursively until each data point forms its own cluster.
    *   **Computational Complexity:** Generally more computationally expensive than agglomerative clustering.
    *   **Also known as:** Top-down clustering, splitting clustering.

**In summary:**
| Feature         | Agglomerative Clustering | Divisive Clustering   |
|-----------------|---------------------------|-----------------------|
| Approach       | Bottom-up                 | Top-down              |
| Start          | Each point is a cluster   | All points in one cluster |
| Process        | Merge closest clusters   | Split largest cluster   |
| Complexity     | Typically lower         | Typically higher      |
| Common Usage   | More common             | Less common           |

### 3. Linkage Methods: Measuring Distance Between Clusters

Linkage methods define how the distance between clusters is calculated, which dictates how clusters are merged (in agglomerative clustering) or split (in divisive clustering).

*   **Single Linkage (Nearest Neighbor):**
    *   **Distance Metric:** The distance between two clusters is defined as the shortest distance between any two points in the two clusters.
    *   **Formula:** d(C<sub>i</sub>, C<sub>j</sub>) = min {dist(x, y) | x ∈ C<sub>i</sub>, y ∈ C<sub>j</sub>}
    *   **Pros:**  Effective at identifying non-elliptical clusters; sensitive to outliers.
    *   **Cons:**  Prone to chaining; can lead to elongated clusters.

*   **Complete Linkage (Farthest Neighbor):**
    *   **Distance Metric:** The distance between two clusters is defined as the longest distance between any two points in the two clusters.
    *   **Formula:** d(C<sub>i</sub>, C<sub>j</sub>) = max {dist(x, y) | x ∈ C<sub>i</sub>, y ∈ C<sub>j</sub>}
    *   **Pros:**  Less prone to chaining than single linkage.
    *   **Cons:**  Sensitive to outliers; can break large clusters; tends to find compact clusters.

*   **Average Linkage (Unweighted Pair Group Method with Arithmetic Mean - UPGMA):**
    *   **Distance Metric:** The distance between two clusters is the average distance between all pairs of points, where one point is from each cluster.
    *   **Formula:** d(C<sub>i</sub>, C<sub>j</sub>) = (1 / |C<sub>i</sub>| |C<sub>j</sub>|) ∑<sub>x ∈ C<sub>i</sub></sub> ∑<sub>y ∈ C<sub>j</sub></sub> dist(x, y)
    *   **Pros:**  More robust than single and complete linkage to outliers.
    *   **Cons:**  Can sometimes perform worse than complete linkage if the clusters are well-separated.

*   **Centroid Linkage (Unweighted Pair Group Method using Centroids - UPGMC):**
    *   **Distance Metric:** The distance between two clusters is the distance between the centroids (means) of the two clusters.
    *   **Formula:** d(C<sub>i</sub>, C<sub>j</sub>) = dist(μ<sub>i</sub>, μ<sub>j</sub>), where μ<sub>i</sub> and μ<sub>j</sub> are the centroids of C<sub>i</sub> and C<sub>j</sub> respectively.
    *   **Pros:**  Simple to understand and implement.
    *   **Cons:**  Can be sensitive to outliers; the distance between merged clusters may be smaller than the distances between points in those clusters, leading to inversions in the dendrogram.

*   **Ward's Linkage:**
    *   **Distance Metric:**  The distance between two clusters is based on the increase in the within-cluster sum of squares (WCSS) if the two clusters were merged. Aims to minimize the variance within clusters.
    *   **Pros:**  Tends to produce more compact clusters; generally regarded as one of the better-performing linkage methods, especially for relatively spherical clusters of similar sizes.
    *   **Cons:**  Sensitive to outliers.

**In summary:**

| Linkage Method | Distance Metric                   | Characteristics                                                                       |
|----------------|-----------------------------------|---------------------------------------------------------------------------------------|
| Single         | Minimum distance between points     | Chaining effect; sensitive to noise                                                       |
| Complete       | Maximum distance between points     | Compact clusters; sensitive to outliers                                                    |
| Average        | Average distance between all pairs | More robust to outliers than single or complete                                          |
| Centroid       | Distance between centroids         | Simple, but can lead to inversions in the dendrogram                                   |
| Ward's          | Increase in WCSS after merging   | Minimizes within-cluster variance; tends to produce compact clusters; sensitive to outliers |

### 4. Strengths and Weaknesses of Hierarchical Clustering

**Strengths:**

*   **No need to pre-specify the number of clusters:** Allows exploration of different levels of granularity.
*   **Dendrogram provides a visual representation:** Helps understand the structure and relationships in the data.
*   **Deterministic:** Provides consistent results.
*   **Can reveal hierarchical relationships:** Captures the multi-level structure of the data.
*   **Applicable to any attribute type:**  Can be used with numerical, categorical, or mixed data types by choosing an appropriate distance metric.

**Weaknesses:**

*   **Computational complexity:** Can be computationally expensive, especially for large datasets (O(n<sup>3</sup>) for agglomerative methods in the worst case, although optimized implementations exist).
*   **Sensitivity to noise and outliers:** Some linkage methods (single, complete, Ward's) are particularly affected by noise.
*   **Difficulty in correcting mistakes:** Once a decision is made to merge or split clusters, it cannot be undone.
*   **Interpretation of dendrograms can be subjective:** Choosing the right number of clusters from the dendrogram requires judgment.

### 5. Applying Hierarchical Clustering in Python (Conceptual Understanding and Basic Implementation)

While a fully working code example might be extensive, this outline provides a conceptual understanding and code snippet illustrating the basic steps.

```python
# Example using scikit-learn

from sklearn.cluster import AgglomerativeClustering
from scipy.cluster.hierarchy import dendrogram, linkage
import matplotlib.pyplot as plt
import numpy as np

# Sample data (replace with your actual data)
X = np.array([[1, 2], [1.5, 1.8], [5, 8], [8, 8], [1, 0.6], [9, 11]])

# 1. Create linkage matrix (using scipy)
linked = linkage(X, 'ward') # 'ward' linkage is commonly used

# 2. Perform hierarchical clustering (using scikit-learn)
cluster = AgglomerativeClustering(n_clusters=2, linkage='ward')  # Specify the desired number of clusters
cluster.fit_predict(X)

# 3. Visualize the dendrogram (using scipy)
plt.figure(figsize=(10, 7))
dendrogram(linked,
            orientation='top',
            labels=None, # replace with labels if available
            distance_sort='descending',
            show_leaf_counts=True)
plt.title('Hierarchical Clustering Dendrogram')
plt.xlabel('Data Point Index or Cluster Size')
plt.ylabel('Distance')
plt.show()

# 4. Access Cluster Labels (if using AgglomerativeClustering)
labels = cluster.labels_  # Gives the cluster assignment for each data point
print("Cluster Labels:", labels)
```

**Explanation:**

1.  **Import Libraries:** Import necessary libraries such as `AgglomerativeClustering` from `sklearn.cluster`, `dendrogram` and `linkage` from `scipy.cluster.hierarchy`, `matplotlib.pyplot` for visualization, and `numpy` for data handling.
2.  **Create Data:**  Replace the sample data with your actual dataset.
3.  **Create Linkage Matrix:** The `linkage` function from `scipy` computes the distance between data points and creates a linkage matrix, which is used to draw the dendrogram. You specify the linkage method (e.g., 'ward', 'single', 'complete', 'average').
4.  **Perform Hierarchical Clustering:** `AgglomerativeClustering` from scikit-learn performs the clustering based on the linkage matrix (although `scipy` can be used to cluster directly as well). You specify the number of clusters (`n_clusters`).
5.  **Visualize Dendrogram:** `dendrogram` function visualizes the linkage matrix as a dendrogram. The x-axis represents the data points or cluster size, and the y-axis represents the distance between clusters.
6.  **Access Cluster Labels:** `cluster.labels_` provides the cluster assignments for each data point after the clustering is performed by sklearn's `AgglomerativeClustering`.

**Important Notes:**

*   **Data Preprocessing:**  It's crucial to scale or normalize your data before applying hierarchical clustering, especially when features have different scales.
*   **Distance Metric:** Choose an appropriate distance metric (e.g., Euclidean, Manhattan, cosine) based on the data type and the problem.
*   **Determining the Number of Clusters:**  This is a critical step. Visual inspection of the dendrogram, along with domain knowledge, can help determine a suitable number of clusters.

### 6. Evaluating Hierarchical Clustering (Visual Assessment of Dendrograms)

The dendrogram is the primary tool for evaluating hierarchical clustering.

*   **Interpreting the Dendrogram:**
    *   **Height of the branches:** Represents the distance between the clusters being merged. Taller branches indicate greater dissimilarity.
    *   **Cutting the Dendrogram:**  Imagine drawing a horizontal line across the dendrogram. The number of vertical lines the horizontal line intersects represents the number of clusters. The height at which you cut the dendrogram determines the granularity of the clustering.
    *   **Identify Natural Clusters:**  Look for large gaps in the vertical distances.  A larger gap suggests a more natural separation between the clusters.

*   **Considerations:**
    *   **Consistency:** If the data is well-structured, the dendrogram should show clear, well-separated branches.
    *   **Inversions:** Inversions (where the height of a branch is lower than a branch below it) can indicate issues with the data or the linkage method. Centroid linkage is particularly prone to inversions.
    *   **Comparison with other methods:** Compare the results of hierarchical clustering with other clustering methods (e.g., k-means) to validate the findings.  Consider using internal or external validation measures (e.g., silhouette score, Rand index) where appropriate and where ground truth is available.

*   **Limitations of Visual Assessment:**
    *   Subjective:  Interpreting dendrograms involves judgment, and different analysts may draw different conclusions.
    *   Difficult for large datasets: Dendrograms become difficult to read and interpret with a large number of data points.

### 7. Practice Questions / Exercises

1.  **Question:** What is the key difference between agglomerative and divisive hierarchical clustering?
    *   **Answer:** Agglomerative clustering starts with each data point as its own cluster and merges them iteratively, while divisive clustering starts with all data points in one cluster and divides it iteratively.

2.  **Question:** Explain how single linkage can lead to a "chaining" effect.
    *   **Answer:** Single linkage uses the minimum distance between points in two clusters. This means that a single point from one cluster can be very close to a point in another cluster, causing the two clusters to merge even if the majority of points in the clusters are far apart. This can lead to elongated clusters that "chain" together.

3.  **Question:** Which linkage method is most likely to create compact, spherical clusters, and why?
    *   **Answer:** Ward's linkage is most likely to create compact, spherical clusters because it aims to minimize the increase in within-cluster variance when merging clusters. This tends to create clusters that are tightly packed and have similar sizes.

4.  **Exercise:** Consider a dataset with three points: A(1,1), B(1,2), and C(4,3).  Manually perform agglomerative hierarchical clustering using single linkage. Show the steps involved in merging the clusters.
    *   **Answer:**
        1.  **Initial state:** Three clusters {A}, {B}, {C}.
        2.  **Calculate distance matrix:**  (Using Euclidean distance)
            *   d(A, B) = sqrt((1-1)^2 + (2-1)^2) = 1
            *   d(A, C) = sqrt((4-1)^2 + (3-1)^2) = sqrt(13) ≈ 3.61
            *   d(B, C) = sqrt((4-1)^2 + (3-2)^2) = sqrt(10) ≈ 3.16
        3.  **Merge clusters {A} and {B}** because d(A,B) = 1 is the smallest.  New cluster: {A, B}, {C}
        4.  **Calculate distance between {A, B} and {C}:** Since we are using single linkage, the distance is the minimum distance between any point in {A, B} and point C.
            *   d({A,B}, C) = min(d(A, C), d(B, C)) = min(3.61, 3.16) = 3.16
        5.  **Merge clusters {A, B} and {C}** because this is the smallest remaining distance.  Final cluster: {A, B, C}.
        This example shows how single linkage merges clusters based on the closest points, regardless of the overall density or shape of the clusters.

5. **Exercise:**  Explain how you would use a dendrogram to determine the optimal number of clusters for a given dataset.

    * **Answer:**

    1.  **Visualize the Dendrogram:** Generate a dendrogram using a suitable linkage method (e.g., Ward's, complete).

    2.  **Look for Large Vertical Gaps:** Identify the longest vertical lines in the dendrogram that do not intersect other vertical lines above them. These lines represent significant increases in the distance between clusters when they are merged.

    3.  **Cut the Dendrogram:** Imagine drawing a horizontal line that crosses the dendrogram. The number of vertical branches this horizontal line intersects indicates the number of clusters at that level of the hierarchy.

    4.  **Choose the Number of Clusters:** Select the number of clusters corresponding to the horizontal line drawn just below the longest vertical line. This is where the merging of clusters results in a substantial increase in distance, suggesting that merging these clusters would result in a significant loss of cluster cohesion.

    5.  **Consider Domain Knowledge:** Always consider your domain knowledge when selecting the number of clusters. The number of clusters suggested by the dendrogram should be meaningful and actionable in the context of your specific problem.

    6.  **Evaluate with Metrics (if possible):** If ground truth or external labels are available, evaluate the quality of the clustering using metrics like the silhouette score or adjusted Rand index to validate your choice.

### 8. Important Points to Remember

*   Hierarchical clustering is a powerful technique for exploring the structure of data and identifying clusters without requiring a pre-defined number of clusters.
*   The choice of linkage method significantly impacts the results. Experiment with different methods to find the one that best suits your data.
*   Dendrograms are valuable for visualizing the clustering process and evaluating the results, but their interpretation can be subjective.
*   Computational complexity is a concern for large datasets.
*   Data preprocessing (scaling, normalization) is crucial for obtaining meaningful results.
*   Combine visual assessment of the dendrogram with domain knowledge and, where possible, quantitative evaluation metrics.
