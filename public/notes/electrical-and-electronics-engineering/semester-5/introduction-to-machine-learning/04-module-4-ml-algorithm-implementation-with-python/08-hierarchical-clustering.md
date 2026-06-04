---
title: "Hierarchical clustering."
subject: "INTRODUCTION TO MACHINE LEARNING"
module: "Module 4: ML algorithm implementation with python "
branch: "Electrical and Electronics Engineering"
semester: 5
topicId: "68a200862b85456187f36440"
status: "completed"
scrapedAt: "2026-05-23T16:22:33.574Z"
---
# Module 4: ML Algorithm Implementation with Python - Hierarchical Clustering

This module delves into the practical implementation of machine learning algorithms in Python, with a specific focus on **Hierarchical Clustering**. We will explore how to apply this unsupervised learning technique to group data points and understand its underlying principles.

## 1. Introduction to Clustering

Clustering is an **unsupervised learning** technique that aims to group a set of objects in such a way that objects in the same group (called a **cluster**) are more similar to each other than to those in other groups. It's about discovering inherent groupings in data.

**Key Concepts:**
*   **Unsupervised Learning:** Algorithms learn from unlabeled data, meaning the data does not have predefined categories or target variables.
*   **Similarity/Dissimilarity:** The core of clustering relies on defining how "close" or "similar" data points are. This is often measured by **distance metrics**.
*   **Clusters:** Groups of data points that are more similar to each other than to data points in other clusters.

**Relevance to Course Outcomes:**
*   **CO2:** Clustering algorithms are a fundamental type of unsupervised learning used for discovering patterns in data.
*   **CO4:** We will be implementing clustering algorithms in Python.

## 2. Hierarchical Clustering: The Core Idea

Hierarchical clustering builds a hierarchy of clusters. There are two main approaches:

### 2.1 Agglomerative (Bottom-Up) Hierarchical Clustering

This is the more common approach. It starts with each data point as its own cluster and iteratively merges the closest pairs of clusters until only one cluster remains.

**Process:**
1.  **Initialization:** Each data point is a separate cluster.
2.  **Merging:** In each step, the two closest clusters are merged to form a new, larger cluster.
3.  **Termination:** The process continues until all data points belong to a single cluster.

**Key Concepts:**
*   **Dendrogram:** A tree-like diagram that illustrates the arrangement of the clusters produced by hierarchical clustering. It shows the sequence of merges or splits and the distance at which these occur.
*   **Linkage Criteria:** Defines how the distance between clusters is calculated. This is crucial for determining which clusters to merge.

### 2.2 Divisive (Top-Down) Hierarchical Clustering

This approach starts with all data points in a single cluster and recursively splits clusters into smaller ones until each data point is in its own cluster. This is less common in practice due to its computational complexity.

## 3. Distance Metrics

To measure the similarity or dissimilarity between data points and clusters, we need distance metrics. Common metrics include:

*   **Euclidean Distance:** The straight-line distance between two points in Euclidean space. For two points $p = (p_1, p_2, ..., p_n)$ and $q = (q_1, q_2, ..., q_n)$, the Euclidean distance is:
    $$ d(p, q) = \sqrt{\sum_{i=1}^{n} (p_i - q_i)^2} $$
    *   **Reference:** "Mathematics for Machine Learning" by Deisenroth, Faisal, and Ong discusses vector norms and distances.

*   **Manhattan Distance (L1 Distance):** The sum of the absolute differences of their Cartesian coordinates.
    $$ d(p, q) = \sum_{i=1}^{n} |p_i - q_i| $$

*   **Cosine Similarity/Distance:** Measures the cosine of the angle between two non-zero vectors. It's often used for text data. Cosine similarity is $1 - \text{cosine distance}$.
    $$ \text{similarity} = \frac{p \cdot q}{||p|| ||q||} $$

**Important Point to Remember:** The choice of distance metric significantly impacts the clustering results. Euclidean distance assumes that the dimensions are on a similar scale and are equally important. Scaling your data before applying clustering is often recommended.

**Relevance to Course Outcomes:**
*   **CO1:** Understanding distance metrics is related to understanding relationships between variables, especially continuous ones.
*   **CO3:** Data pre-processing often involves scaling features, which impacts distance calculations.

## 4. Linkage Criteria (for Agglomerative Clustering)

Linkage criteria define how the distance between two clusters (sets of data points) is computed.

*   **Single Linkage:** The distance between two clusters is the minimum distance between any two data points in the respective clusters.
    $$ \text{linkage}(C_i, C_j) = \min_{p \in C_i, q \in C_j} d(p, q) $$
    *   **Tendency:** Can lead to "chaining" where clusters are extended into long chains.

*   **Complete Linkage:** The distance between two clusters is the maximum distance between any two data points in the respective clusters.
    $$ \text{linkage}(C_i, C_j) = \max_{p \in C_i, q \in C_j} d(p, q) $$
    *   **Tendency:** Tends to produce more compact, spherical clusters.

*   **Average Linkage:** The distance between two clusters is the average distance between all pairs of data points in the respective clusters.
    $$ \text{linkage}(C_i, C_j) = \frac{1}{|C_i||C_j|} \sum_{p \in C_i} \sum_{q \in C_j} d(p, q) $$
    *   **Tendency:** A compromise between single and complete linkage.

*   **Ward's Method:** Merges clusters to minimize the increase in total within-cluster variance. It aims to produce clusters of similar size.
    $$ \Delta \text{variance} = \frac{|C_i||C_j|}{|C_i| + |C_j|} d(m_i, m_j)^2 $$
    where $m_i$ and $m_j$ are the centroids of clusters $C_i$ and $C_j$.
    *   **Tendency:** Often produces compact, equally sized clusters and is sensitive to outliers.

**Important Point to Remember:** The choice of linkage criterion also significantly affects the clustering results. Ward's method is a popular choice.

**Relevance to Course Outcomes:**
*   **CO4:** Understanding linkage is key to implementing clustering.

**Reference:** "Introduction to Machine Learning with Python" by Müller and Guido discusses linkage criteria in the context of scikit-learn.

## 5. Implementing Hierarchical Clustering in Python (scikit-learn)

Scikit-learn provides `AgglomerativeClustering` for hierarchical clustering.

```python
from sklearn.cluster import AgglomerativeClustering
from sklearn.preprocessing import StandardScaler
import numpy as np
import matplotlib.pyplot as plt
from scipy.cluster.hierarchy import dendrogram, linkage

# --- 1. Prepare Data ---
# Let's create some sample data (e.g., 2D points)
np.random.seed(42)
X = np.array([[1, 2], [1.5, 1.8], [5, 8], [8, 8], [1, 0.6], [9, 11]])

# It's often good practice to scale data, especially if features have different ranges.
# StandardScaler removes the mean and scales to unit variance.
scaler = StandardScaler()
X_scaled = scaler.fit_transform(X)

# --- 2. Perform Hierarchical Clustering ---
# linkage: 'ward', 'average', 'complete', 'single'
# affinity: 'euclidean', 'l1', 'l2', 'manhattan', 'cosine' (for linkage='average', 'complete', 'single')
# n_clusters: The number of clusters to find (optional if you want to cut the dendrogram later)

# Example 1: Using Ward linkage and specifying n_clusters
agg_clustering_ward = AgglomerativeClustering(n_clusters=2, linkage='ward', affinity='euclidean')
labels_ward = agg_clustering_ward.fit_predict(X_scaled)

print("Labels (Ward linkage):", labels_ward)

# Example 2: Using Average linkage and specifying n_clusters
agg_clustering_avg = AgglomerativeClustering(n_clusters=2, linkage='average', affinity='euclidean')
labels_avg = agg_clustering_avg.fit_predict(X_scaled)

print("Labels (Average linkage):", labels_avg)

# --- 3. Visualize the Dendrogram ---
# For visualization, we often use scipy.cluster.hierarchy
# We need to calculate the linkage matrix first.
# Using 'ward' linkage for demonstration
linked = linkage(X_scaled, method='ward')

plt.figure(figsize=(10, 7))
dendrogram(linked,
           orientation='top',
           labels=np.arange(X.shape[0]), # Labels for data points
           distance_sort='descending',
           show_leaf_counts=True)
plt.title('Dendrogram for Hierarchical Clustering (Ward Linkage)')
plt.xlabel('Sample Index')
plt.ylabel('Distance')
plt.show()

# --- 4. Cutting the Dendrogram to get Clusters ---
# You can choose the number of clusters by drawing a horizontal line on the dendrogram.
# The number of vertical lines the horizontal line crosses indicates the number of clusters.
# Alternatively, you can directly specify n_clusters in AgglomerativeClustering.

# Let's try to cut at a certain height to get 2 clusters
# (This often requires experimentation or using the linkage matrix directly)

# Using AgglomerativeClustering with n_clusters is the more direct way in scikit-learn

# Visualize the clusters (Example with Ward linkage)
plt.figure(figsize=(8, 6))
scatter = plt.scatter(X_scaled[:, 0], X_scaled[:, 1], c=labels_ward, cmap='viridis', s=100)
plt.title('Hierarchical Clustering Results (Ward Linkage, 2 Clusters)')
plt.xlabel('Feature 1 (Scaled)')
plt.ylabel('Feature 2 (Scaled)')
plt.legend(handles=scatter.legend_elements()[0], labels=np.unique(labels_ward))
plt.grid(True)
plt.show()
```

**Relevance to Course Outcomes:**
*   **CO3:** Uses `StandardScaler` for data preparation.
*   **CO4:** Implements `AgglomerativeClustering` and uses `matplotlib` for visualization.

**Reference:** "Python Data Science Handbook" by Jake Vander Plas covers data visualization with Matplotlib and data manipulation with NumPy/Pandas. "Hands-On Machine Learning with Scikit-Learn, Keras, and TensorFlow" by Aurélien Géron provides practical examples of using scikit-learn.

## 6. Determining the Number of Clusters

A key challenge in hierarchical clustering is deciding where to "cut" the dendrogram to obtain the desired number of clusters.

**Methods:**
*   **Visual Inspection of Dendrogram:** Look for significant jumps in distance. The height at which clusters merge indicates the dissimilarity. Large vertical distances between merges suggest that merging those clusters would significantly increase the dissimilarity, implying they are distinct groups.
*   **Domain Knowledge:** Prior knowledge about the data might suggest a natural number of clusters.
*   **Metric-based Evaluation (e.g., Silhouette Score, Davies-Bouldin Index):** These metrics can help evaluate clustering quality for different numbers of clusters. However, they are more commonly used with partitional clustering algorithms like K-Means. For hierarchical clustering, they are applied *after* cutting the dendrogram.

**Important Point to Remember:** There's no single "best" way to determine the number of clusters. It often involves a combination of visual inspection and quantitative metrics.

**Relevance to Course Outcomes:**
*   **CO2, CO4:** Evaluating the quality of clustering is essential.

## 7. Advantages and Disadvantages of Hierarchical Clustering

**Advantages:**
*   **No need to pre-specify the number of clusters (initially):** The dendrogram provides a complete hierarchy, allowing you to choose the number of clusters later.
*   **Provides a visual representation (dendrogram):** This helps understand the relationships and hierarchy of clusters.
*   **Can capture clusters of arbitrary shapes:** Depending on the linkage criteria (especially single linkage), it can form non-spherical clusters.

**Disadvantages:**
*   **Computationally expensive:** Time complexity is typically $O(n^2 \log n)$ or $O(n^3)$ depending on the implementation and linkage, where $n$ is the number of data points. This makes it less suitable for very large datasets.
*   **Greedy approach:** Once a merge or split is made, it cannot be undone, which can lead to suboptimal solutions.
*   **Sensitivity to noise and outliers:** Outliers can significantly affect the distances and linkage, potentially leading to misclassifications.
*   **Difficulty in choosing the number of clusters:** Requires careful interpretation of the dendrogram or using evaluation metrics.

**Relevance to Course Outcomes:**
*   **CO2, CO4:** Understanding the trade-offs of different algorithms is crucial for selecting the appropriate one.

**Reference:** "The Elements of Statistical Learning" by Hastie, Tibshirani, and Friedman provides a theoretical foundation for various clustering algorithms, including hierarchical clustering.

## 8. Practice Questions and Answers

**Question 1:** What is the primary difference between agglomerative and divisive hierarchical clustering?

**Answer:** Agglomerative clustering starts with individual data points as clusters and merges them iteratively, while divisive clustering starts with all data points in one cluster and splits them recursively.

**Question 2:** Name two common distance metrics used in clustering. Explain when you might prefer one over the other.

**Answer:**
1.  **Euclidean Distance:** Suitable for data where the absolute difference between feature values is meaningful and features are on a similar scale.
2.  **Cosine Similarity (or Distance):** Useful for high-dimensional data, especially text data, where the magnitude of vectors is less important than their orientation.

**Question 3:** What is a dendrogram, and what information does it convey in hierarchical clustering?

**Answer:** A dendrogram is a tree-like diagram that visualizes the sequence of merges or splits in hierarchical clustering. It shows the relationships between clusters at different levels of similarity/dissimilarity, indicating which data points or clusters are grouped together and at what distance.

**Question 4:** If you have a dataset where one feature (e.g., 'income') has a much larger range than another (e.g., 'age'), what preprocessing step would you likely perform before applying hierarchical clustering, and why?

**Answer:** You would likely **scale** the features, for example, using `StandardScaler` or `MinMaxScaler`. This is because distance metrics like Euclidean distance are sensitive to the scale of features. Without scaling, the feature with the larger range would dominate the distance calculations, potentially leading to biased clustering results.

**Question 5:** Which linkage criterion tends to produce long, chained clusters?
    a) Complete Linkage
    b) Single Linkage
    c) Average Linkage
    d) Ward's Method

**Answer:** b) Single Linkage

**Question 6:** What is a potential disadvantage of hierarchical clustering for very large datasets?

**Answer:** Its high computational complexity ($O(n^2 \log n)$ or $O(n^3)$), making it slow and memory-intensive for large numbers of data points.

---

## Important Points to Remember

*   **Clustering is unsupervised:** It discovers patterns without predefined labels.
*   **Distance metrics are crucial:** Choose them based on the nature of your data.
*   **Linkage criteria impact results:** Select based on the desired cluster shapes and characteristics.
*   **Data scaling is often necessary:** Especially when features have different units or ranges.
*   **Dendrograms are visual tools:** They help understand the hierarchical structure and decide on the number of clusters.
*   **Computational cost:** Hierarchical clustering can be slow for large datasets.
*   **No perfect number of clusters:** Determining this often requires domain knowledge and evaluation metrics.

This concludes our study notes on Hierarchical Clustering within Module 4. Remember to practice implementing these concepts using Python libraries like scikit-learn.
