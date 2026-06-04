---
title: "clustering algorithms"
subject: "INTRODUCTION TO MACHINE LEARNING"
module: "Module 2: Introduction to machine learning algorithms "
branch: "Electrical and Electronics Engineering"
semester: 5
topicId: "68a200862b85456187f36431"
status: "completed"
scrapedAt: "2026-05-23T16:22:23.910Z"
---
## Module 2: Introduction to Machine Learning Algorithms - Clustering Algorithms

This module explores unsupervised learning, specifically focusing on **clustering algorithms**. Clustering is a fundamental technique for discovering inherent groupings or patterns within data without prior knowledge of the data's labels.

---

### 1. What is Clustering?

*   **Definition:** Clustering is the task of grouping a set of objects in such a way that objects in the same group (called a **cluster**) are more similar to each other than to those in other groups (clusters).
*   **Unsupervised Learning:** Clustering falls under unsupervised learning because it does not require labeled data. The algorithm discovers patterns and structures from the data itself.
*   **Goal:** To partition a dataset into subsets (clusters) where data points within a subset share similar characteristics, while being dissimilar to data points in other subsets.

**Key Concepts:**

*   **Similarity/Dissimilarity Measure:** Crucial for determining how "close" two data points are. Common measures include:
    *   **Euclidean Distance:** The straight-line distance between two points. For points $p = (p_1, p_2, ..., p_n)$ and $q = (q_1, q_2, ..., q_n)$, the Euclidean distance is $\sqrt{\sum_{i=1}^n (p_i - q_i)^2}$. (Bishop, Chapter 1)
    *   **Manhattan Distance (L1 Distance):** The sum of the absolute differences of their Cartesian coordinates. For points $p$ and $q$, it is $\sum_{i=1}^n |p_i - q_i|$.
    *   **Cosine Similarity:** Measures the cosine of the angle between two vectors. Useful for text data or high-dimensional sparse data. It ranges from -1 (exactly opposite) to 1 (exactly the same).
    *   **Jaccard Similarity:** Measures the similarity between two sets. Defined as the size of the intersection divided by the size of the union of the sets.
*   **Cluster Representation:** How we define a cluster. This could be by its centroid (mean of points), medoid (actual data point closest to the mean), or density.

**Why use Clustering?**

*   **Exploratory Data Analysis:** To understand the underlying structure and discover hidden patterns in data.
*   **Customer Segmentation:** Grouping customers with similar buying habits or demographics for targeted marketing. (Han, Kamber, Pei, Chapter 8)
*   **Document Analysis:** Grouping similar documents or articles.
*   **Image Segmentation:** Dividing an image into regions with similar properties.
*   **Anomaly Detection:** Identifying data points that do not belong to any cluster.

---

### 2. Common Clustering Algorithms

We will explore several popular clustering algorithms:

#### 2.1 K-Means Clustering

*   **Concept:** An iterative algorithm that aims to partition $n$ observations into $k$ clusters, where each observation belongs to the cluster with the nearest mean (cluster centroid).
*   **How it works:**
    1.  **Initialization:** Randomly select $k$ initial centroids.
    2.  **Assignment Step:** Assign each data point to the cluster whose centroid is closest (e.g., using Euclidean distance).
    3.  **Update Step:** Recalculate the centroids of the clusters as the mean of all data points assigned to that cluster.
    4.  **Iteration:** Repeat the Assignment and Update steps until the centroids no longer change significantly, or a maximum number of iterations is reached.
*   **Objective Function:** K-Means aims to minimize the within-cluster sum of squares (WCSS), also known as inertia.
    $WCSS = \sum_{i=1}^k \sum_{x \in C_i} ||x - \mu_i||^2$
    where $C_i$ is the $i$-th cluster, $x$ is a data point, and $\mu_i$ is the centroid of cluster $C_i$. (Deisenroth, Faisal, Ong, Chapter 8)
*   **Choosing 'k':** The number of clusters, $k$, must be specified beforehand. Common methods for choosing $k$ include:
    *   **Elbow Method:** Plot WCSS against different values of $k$. The "elbow" point, where the rate of decrease in WCSS sharply changes, is often considered a good choice for $k$. (Müller & Guido, Chapter 8)
    *   **Silhouette Score:** Measures how similar a data point is to its own cluster compared to other clusters. A higher silhouette score indicates better clustering.
*   **Pros:**
    *   Simple to understand and implement.
    *   Computationally efficient for large datasets.
    *   Works well when clusters are spherical and well-separated.
*   **Cons:**
    *   Sensitive to initial centroid placement (can converge to local optima).
    *   Assumes clusters are spherical and equally sized.
    *   Sensitive to outliers.
    *   Requires the number of clusters ($k$) to be predefined.
*   **Example:** Segmenting customers based on their spending habits. If we want to group customers into 3 categories (low, medium, high spenders), we would set $k=3$.

---

#### 2.2 Hierarchical Clustering

*   **Concept:** Builds a hierarchy of clusters. This can be done in two ways:
    *   **Agglomerative (Bottom-Up):** Starts with each data point as its own cluster and iteratively merges the closest pairs of clusters until only one cluster remains.
    *   **Divisive (Top-Down):** Starts with all data points in one cluster and iteratively splits clusters until each data point is in its own cluster.
*   **How it works (Agglomerative):**
    1.  **Initialization:** Treat each data point as a single cluster.
    2.  **Merging:** Find the two closest clusters and merge them.
    3.  **Iteration:** Repeat step 2 until all data points belong to a single cluster.
*   **Linkage Criteria:** How the distance between clusters is defined when merging:
    *   **Single Linkage:** Minimum distance between any point in cluster A and any point in cluster B. Can lead to "chaining" effect.
    *   **Complete Linkage:** Maximum distance between any point in cluster A and any point in cluster B. Tends to produce compact, spherical clusters.
    *   **Average Linkage:** Average distance between all pairs of points, one from each cluster.
    *   **Ward's Method:** Minimizes the variance within each cluster after merging. Aims to merge clusters that result in the smallest increase in total within-cluster variance. (Géron, Chapter 9)
*   **Dendrogram:** A tree-like diagram that illustrates the hierarchical relationships between clusters. The height of the branches represents the distance at which clusters were merged. Cutting the dendrogram at a certain height can yield different numbers of clusters.
*   **Pros:**
    *   Does not require the number of clusters ($k$) to be predefined.
    *   Provides a visual representation (dendrogram) of cluster relationships.
    *   Can capture non-spherical clusters.
*   **Cons:**
    *   Computationally expensive, especially for large datasets (often $O(n^3)$ or $O(n^2 \log n)$).
    *   Once a merge or split is performed, it cannot be undone.
    *   Sensitive to the choice of linkage criterion.
*   **Example:** Grouping species of animals based on their genetic similarity. The dendrogram would show how closely related different species are.

---

#### 2.3 DBSCAN (Density-Based Spatial Clustering of Applications with Noise)

*   **Concept:** Groups together points that are closely packed together, marking points in low-density regions as outliers (noise). It is based on the idea of "density connectivity."
*   **Key Parameters:**
    *   `eps` (epsilon): The maximum distance between two samples for one to be considered as in the neighborhood of the other.
    *   `min_samples`: The number of samples in a neighborhood for a point to be considered as a core point.
*   **Definitions:**
    *   **Core Point:** A point that has at least `min_samples` points (including itself) within its `eps` neighborhood.
    *   **Border Point:** A point that is within the `eps` neighborhood of a core point but does not have enough neighbors to be a core point itself.
    *   **Noise Point (Outlier):** A point that is neither a core point nor a border point.
*   **How it works:**
    1.  The algorithm starts with an arbitrary point.
    2.  If the point is a core point, it starts a new cluster and finds all density-reachable points.
    3.  If the point is a border point, it belongs to an existing cluster.
    4.  If the point is noise, it is ignored.
    5.  The algorithm continues until all points have been visited.
*   **Pros:**
    *   Can find arbitrarily shaped clusters.
    *   Does not require the number of clusters ($k$) to be predefined.
    *   Robust to outliers.
*   **Cons:**
    *   Sensitive to the choice of `eps` and `min_samples`.
    *   Struggles with clusters of varying densities.
    *   Can be computationally intensive for very large datasets with high dimensionality.
*   **Example:** Identifying clusters of galaxies in astronomical data, where galaxies might be spread out in irregular shapes.

---

#### 2.4 Mean-Shift Clustering

*   **Concept:** A non-parametric clustering algorithm that aims to find the modes (peaks) of the probability density function of the data. It works by iteratively shifting data points towards denser regions.
*   **How it works:**
    1.  Initialize each data point as a cluster centroid.
    2.  For each data point, calculate the "mean shift" vector, which points in the direction of the greatest increase in density.
    3.  Move the data point in the direction of the mean shift vector.
    4.  Repeat steps 2-3 until the data points converge to a stable location (a mode of the density).
    5.  Clusters are formed by grouping data points that converge to the same mode.
*   **Bandwidth Parameter:** Similar to `eps` in DBSCAN, the bandwidth parameter controls the size of the neighborhood considered for calculating the mean shift.
*   **Pros:**
    *   Does not require the number of clusters ($k$) to be predefined.
    *   Can find arbitrarily shaped clusters.
    *   Robust to outliers as they tend to not converge to any mode.
*   **Cons:**
    *   Computationally expensive, especially with large datasets.
    *   The choice of bandwidth is crucial and can significantly impact results.
    *   Can be slow to converge.
*   **Example:** Grouping points in an image based on color and texture similarity, where objects might have complex shapes.

---

### 3. Evaluating Clustering Performance

Since clustering is unsupervised, evaluating its performance is more challenging than supervised learning. We generally use **internal evaluation metrics** (based on the data itself) or **external evaluation metrics** (when ground truth labels are available).

#### 3.1 Internal Evaluation Metrics

These metrics assess the quality of the clustering without external information.

*   **Silhouette Coefficient:**
    *   For each sample, calculates:
        *   `a`: The average distance of the sample to all other points in the same cluster.
        *   `b`: The minimum average distance of the sample to points in a different cluster (the "neighboring" cluster).
    *   The silhouette score for a sample is $(b - a) / max(a, b)$.
    *   The overall silhouette score is the average of the silhouette scores for all samples.
    *   **Range:** [-1, 1]
        *   **Close to 1:** The sample is far from neighboring clusters.
        *   **Close to 0:** The sample is close to a decision boundary between two clusters.
        *   **Close to -1:** The sample might have been assigned to the wrong cluster.
    *   (Müller & Guido, Chapter 8)
*   **Davies-Bouldin Index:**
    *   Measures the average "similarity" between each cluster and its most similar cluster, where similarity is defined as the ratio of within-cluster distances to between-cluster distances.
    *   Lower Davies-Bouldin index indicates better clustering (clusters are compact and well-separated).
*   **Calinski-Harabasz Index (Variance Ratio Criterion):**
    *   Measures the ratio of the sum of between-cluster dispersion to the sum of within-cluster dispersion.
    *   Higher Calinski-Harabasz index indicates better clustering (clusters are dense and well-separated).

#### 3.2 External Evaluation Metrics (When Ground Truth is Available)

These metrics compare the clustering results to known class labels.

*   **Adjusted Rand Index (ARI):**
    *   Measures the similarity between two clusterings (the predicted clustering and the true clustering), adjusted for chance.
    *   **Range:** [-1, 1] (1 indicates perfect agreement, 0 indicates agreement equivalent to random chance).
    *   Considers pairs of samples and counts how many pairs are in the same cluster in both clusterings, in different clusters in both, in the same cluster in one and different in the other.
*   **Mutual Information-based Metrics (e.g., Normalized Mutual Information - NMI):**
    *   Measure the mutual dependence between the predicted clustering and the true labels.
    *   Higher NMI indicates better agreement.

---

### 4. Practical Considerations and Best Practices

*   **Feature Scaling:** Many clustering algorithms (especially those based on distance, like K-Means) are sensitive to the scale of features. **Standardize or normalize** your data before applying clustering. This ensures that features with larger ranges don't dominate the distance calculations. (Müller & Guido, Chapter 3)
*   **Dimensionality Reduction:** High-dimensional data can suffer from the "curse of dimensionality," making distance measures less meaningful. Techniques like **Principal Component Analysis (PCA)** can be used to reduce dimensionality before clustering. (Deisenroth, Faisal, Ong, Chapter 10)
*   **Choosing the Right Algorithm:** The choice of algorithm depends on the characteristics of your data and the desired outcome:
    *   For spherical clusters: K-Means.
    *   For hierarchical relationships: Hierarchical Clustering.
    *   For arbitrary shapes and noise handling: DBSCAN, Mean-Shift.
*   **Interpreting Results:** Visualize your clusters (e.g., using scatter plots of the first two principal components) to gain insights into the discovered groupings.
*   **Domain Knowledge:** Always combine algorithmic results with domain knowledge to validate and interpret the clusters meaningfully.

---

### 5. Python Implementation with Scikit-learn

Scikit-learn provides efficient implementations of most popular clustering algorithms.

**Example: K-Means Clustering**

```python
from sklearn.cluster import KMeans
from sklearn.preprocessing import StandardScaler
import matplotlib.pyplot as plt
import numpy as np

# Sample Data (replace with your actual data)
# Let's create some random data for demonstration
np.random.seed(42)
X = np.random.rand(100, 2) * 10 # 100 samples, 2 features

# --- Preprocessing ---
# Feature Scaling (important for K-Means)
scaler = StandardScaler()
X_scaled = scaler.fit_transform(X)

# --- Applying K-Means ---
# Choose the number of clusters (e.g., k=3)
k = 3
kmeans = KMeans(n_clusters=k, random_state=42, n_init=10) # n_init to avoid local optima
kmeans.fit(X_scaled)

# Get cluster labels and centroids
labels = kmeans.labels_
centroids = kmeans.cluster_centers_

# --- Visualization ---
plt.figure(figsize=(8, 6))
plt.scatter(X_scaled[:, 0], X_scaled[:, 1], c=labels, cmap='viridis', marker='o', edgecolor='k', s=50, alpha=0.7)
plt.scatter(centroids[:, 0], centroids[:, 1], c='red', marker='X', s=200, label='Centroids')
plt.title('K-Means Clustering')
plt.xlabel('Feature 1 (Scaled)')
plt.ylabel('Feature 2 (Scaled)')
plt.legend()
plt.grid(True)
plt.show()

# --- Elbow Method to find optimal k ---
wcss = []
for i in range(1, 11):
    kmeans_elbow = KMeans(n_clusters=i, random_state=42, n_init=10)
    kmeans_elbow.fit(X_scaled)
    wcss.append(kmeans_elbow.inertia_) # inertia_ is WCSS

plt.figure(figsize=(8, 6))
plt.plot(range(1, 11), wcss, marker='o')
plt.title('Elbow Method for Optimal k')
plt.xlabel('Number of Clusters (k)')
plt.ylabel('WCSS')
plt.xticks(range(1, 11))
plt.grid(True)
plt.show()
```
*(This example uses Python libraries like NumPy, Pandas, Matplotlib, and Scikit-learn, aligning with CO3 and CO4.)*

---

### 6. Learning Outcomes Covered

*   **LO1: Understand the relationships between different types of variables...:** While clustering focuses on grouping, understanding the nature of variables (continuous, discrete) is crucial for choosing appropriate distance measures and interpreting results. For instance, Euclidean distance is suitable for continuous numerical data.
*   **LO2: Apply different supervised and unsupervised machine learning algorithms...:** This section directly addresses the application of unsupervised clustering algorithms (K-Means, Hierarchical, DBSCAN, Mean-Shift) and their relevance in real-world scenarios like customer segmentation.
*   **LO3: Apply essential Python libraries...:** The example demonstrates the use of NumPy for data manipulation, Matplotlib for visualization, and Scikit-learn for implementing clustering algorithms, directly addressing this outcome.
*   **LO4: Implement machine learning algorithms... and evaluate their performance...:** The notes cover the implementation of K-Means in Python and discuss various internal and external evaluation metrics (Silhouette, ARI) used to assess clustering performance.

---

### 7. Course Outcomes Alignment

*   **CO1 (K2):** Understanding variable types and hypothesis testing is foundational. While not directly implemented here, it informs the choice of distance metrics and the statistical assumptions underlying some clustering approaches.
*   **CO2 (K3):** Directly addressed by explaining and demonstrating the application of K-Means, Hierarchical Clustering, DBSCAN, and Mean-Shift for data partitioning.
*   **CO3 (K3):** Demonstrated through the Python code example using NumPy, Matplotlib, and Scikit-learn for data preparation, clustering, and visualization.
*   **CO4 (K3):** Directly addressed by providing implementation details for K-Means and discussing evaluation metrics for clustering.

---

### 8. Important Points to Remember

*   **Clustering is unsupervised:** You don't need labels to start.
*   **Distance/Similarity Measure is Key:** Choose it wisely based on your data.
*   **Feature Scaling is Crucial:** Especially for distance-based algorithms like K-Means.
*   **"k" is often unknown:** Use methods like the Elbow method or Silhouette score to estimate it.
*   **Algorithm Choice Matters:** Each algorithm has strengths and weaknesses.
*   **Evaluation is challenging:** Use a combination of internal and external metrics if possible.
*   **DBSCAN handles arbitrary shapes and noise well.**
*   **Hierarchical clustering provides a dendrogram for understanding relationships.**

---

### 9. Practice Questions and Answers

**Q1. What is the main difference between K-Means and Hierarchical Clustering in terms of how they form clusters?**

**A1.**
*   **K-Means:** Is a *partitioning* algorithm. It divides the data into a pre-defined number of clusters ($k$) and aims to minimize the within-cluster sum of squares. It iteratively assigns points to the nearest centroid and updates centroids.
*   **Hierarchical Clustering:** Is a *hierarchical* algorithm. It builds a tree-like structure of clusters. Agglomerative hierarchical clustering starts with individual points as clusters and merges them based on similarity, while divisive clustering does the opposite. It doesn't require a pre-defined number of clusters upfront; you can cut the hierarchy (dendrogram) at different levels to obtain different numbers of clusters.

**Q2. Explain the Elbow Method and why it's used in K-Means clustering.**

**A2.** The Elbow Method is a heuristic used to find an optimal value for the number of clusters ($k$) in K-Means clustering. It involves plotting the **Within-Cluster Sum of Squares (WCSS)** against different values of $k$. WCSS is a measure of the compactness of the clusters (sum of squared distances of samples to their cluster center). As $k$ increases, WCSS generally decreases. The "elbow" point in the plot, where the rate of decrease sharply slows down, is considered a good trade-off between the number of clusters and the reduction in WCSS, suggesting a suitable number of clusters.

**Q3. What are the primary advantages of DBSCAN over K-Means?**

**A3.**
*   **Arbitrary Shape Clusters:** DBSCAN can discover clusters of arbitrary shapes, not just the spherical shapes assumed by K-Means.
*   **No Predefined 'k':** DBSCAN does not require the number of clusters ($k$) to be specified beforehand. The algorithm determines the number of clusters based on the data's density.
*   **Outlier Detection:** DBSCAN inherently identifies and labels noise points, which are data points that do not belong to any cluster. K-Means assigns every point to a cluster, even if it's an outlier.

**Q4. If you had a dataset where you suspect clusters have very different densities, which algorithm might you avoid, and why?**

**A4.** You might want to be cautious with **DBSCAN** if clusters have significantly different densities. DBSCAN relies on a fixed `eps` (epsilon) parameter. If `eps` is set to capture a dense cluster, it might miss points in a sparser cluster. Conversely, if `eps` is set to capture a sparse cluster, it might group points from a dense cluster into multiple smaller clusters or label them as noise. Algorithms like Mean-Shift (with careful bandwidth selection) or certain variations of hierarchical clustering might be more robust to varying densities.

**Q5. Why is feature scaling important for K-Means clustering? Provide an example.**

**A5.** Feature scaling is important for K-Means because it uses Euclidean distance, which is sensitive to the magnitude of features. If features have different scales, features with larger values will disproportionately influence the distance calculations and the position of cluster centroids.

**Example:**
Consider a dataset with two features:
*   Feature A: Income (ranging from 20,000 to 200,000)
*   Feature B: Age (ranging from 20 to 70)

Without scaling, the difference in income values (e.g., 180,000) would be much larger than the difference in age values (e.g., 50). This would cause the "Income" feature to dominate the distance calculation, potentially making the "Age" feature almost irrelevant in forming clusters. After scaling (e.g., using `StandardScaler` to give both features a mean of 0 and standard deviation of 1), their ranges become comparable, allowing both features to contribute more equally to the clustering process.

---
This comprehensive set of notes covers the core concepts of clustering algorithms, their practical applications, implementation details, and evaluation methods, directly addressing the learning and course outcomes. Remember to consult the specified textbooks for deeper theoretical understanding and further examples.
