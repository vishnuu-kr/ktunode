---
title: "Tasks:"
subject: "MACHINE LEARNING LAB"
module: "Module 16: Implement and compare hierarchical (agglomerative) and partitional (K"
branch: "Computer Science and Engineering"
semester: 5
topicId: "684162770fc9aa1fdbc8b997"
status: "completed"
scrapedAt: "2026-05-20T16:48:00.379Z"
---
## MACHINE LEARNING LAB - Module 16: Hierarchical (Agglomerative) vs. Partitional (K-Means) Clustering

These notes cover the implementation and comparison of hierarchical (agglomerative) and partitional (K-Means) clustering algorithms.

**Learning Outcomes:**

*   Understand the principles behind hierarchical (agglomerative) clustering.
*   Understand the principles behind K-Means clustering.
*   Implement hierarchical (agglomerative) clustering in Python.
*   Implement K-Means clustering in Python.
*   Compare and contrast hierarchical and K-Means clustering.
*   Evaluate the performance of both clustering algorithms.
*   Understand the strengths and weaknesses of each algorithm.
*   Select appropriate parameters for both algorithms.

**1. Introduction to Clustering**

*   **Definition:** Clustering is an unsupervised machine learning technique that aims to group similar data points together into clusters based on their inherent characteristics.
*   **Unsupervised Learning:** Clustering algorithms do not rely on labeled data. They discover patterns and structures in the data themselves.
*   **Applications:** Customer segmentation, image segmentation, anomaly detection, document clustering, and many more.
*   **Types of Clustering:**
    *   **Partitional Clustering:** Divides data into non-overlapping clusters. (e.g., K-Means)
    *   **Hierarchical Clustering:** Builds a hierarchy of clusters, from singletons to a single cluster containing all data points. (e.g., Agglomerative)
    *   **Density-Based Clustering:** Identifies clusters based on data point density. (e.g., DBSCAN)

**2. Hierarchical (Agglomerative) Clustering**

*   **Principles:**
    *   **Bottom-up approach:** Starts with each data point as its own cluster and iteratively merges the closest clusters until a single cluster is formed or a stopping criterion is met.
    *   **Dendrogram:** A tree-like diagram that visualizes the hierarchical structure of the clusters.  The height of the branches represents the distance between clusters at each merge.
*   **Key Concepts:**
    *   **Linkage Criteria:** Determines how the distance between two clusters is calculated.
        *   **Single Linkage (Nearest Point Algorithm):** Distance between the closest points in the two clusters. Prone to the "chaining effect".
        *   **Complete Linkage (Farthest Point Algorithm):** Distance between the farthest points in the two clusters.  More robust to noise but can be sensitive to outliers.
        *   **Average Linkage (UPGMA):** Average distance between all pairs of points, one from each cluster.  Often a good compromise.
        *   **Centroid Linkage:** Distance between the centroids (means) of the two clusters.
        *   **Ward's Linkage:** Minimizes the increase in total within-cluster variance after merging. Tends to create clusters of similar size.
    *   **Distance Metric:** Defines how the distance between two data points is calculated (e.g., Euclidean distance, Manhattan distance, Cosine similarity).
*   **Algorithm:**
    1.  Start with each data point as a singleton cluster.
    2.  Compute the distance matrix between all pairs of clusters.
    3.  Merge the two closest clusters based on the chosen linkage criterion.
    4.  Update the distance matrix to reflect the new cluster.
    5.  Repeat steps 3 and 4 until a single cluster is formed or a stopping criterion is met (e.g., reaching a desired number of clusters).
*   **Implementation in Python (using scikit-learn):**

```python
from sklearn.cluster import AgglomerativeClustering
from sklearn.datasets import make_blobs
import matplotlib.pyplot as plt

# Generate sample data
X, y = make_blobs(n_samples=300, centers=4, random_state=42)

# Initialize Agglomerative Clustering
agg_clustering = AgglomerativeClustering(n_clusters=4, linkage='ward') # You can change linkage
# Fit and predict the clusters
clusters = agg_clustering.fit_predict(X)

# Visualize the clusters
plt.scatter(X[:, 0], X[:, 1], c=clusters, cmap='viridis')
plt.title('Agglomerative Clustering')
plt.xlabel('Feature 1')
plt.ylabel('Feature 2')
plt.show()

# You can also use dendrograms to visualize hierarchical clustering:
from scipy.cluster.hierarchy import dendrogram, linkage
import numpy as np

linked = linkage(X, 'ward') # Calculate the linkage matrix
labelList = range(1, len(X)+1)

plt.figure(figsize=(10, 7))
dendrogram(linked,
            orientation='top',
            labels=labelList,
            distance_sort='descending',
            show_leaf_counts=True)
plt.show()
```

*   **Advantages:**
    *   Provides a hierarchical structure, allowing for exploration at different levels of granularity.
    *   No need to pre-specify the number of clusters (though you can choose a cutoff to determine the final number).
    *   Versatile due to different linkage criteria.
*   **Disadvantages:**
    *   Computationally expensive, especially for large datasets (complexity is typically O(n^3)).
    *   Sensitive to noise and outliers.
    *   Once a merge is done, it cannot be undone.
*   **Important Points to Remember:** The choice of linkage criterion significantly affects the resulting clusters. Experiment to find the best fit for your data. The `dendrogram` can aid in selecting the optimal number of clusters.

**3. Partitional (K-Means) Clustering**

*   **Principles:**
    *   Aims to partition the data into *k* distinct clusters, where each data point belongs to the cluster with the nearest mean (centroid).
    *   Minimizes the within-cluster sum of squares (WCSS), also known as inertia.
*   **Key Concepts:**
    *   ***k***: The number of clusters to be formed. Must be specified *a priori*.
    *   **Centroid:** The mean of the data points in a cluster.
    *   **Inertia:**  The sum of squared distances of samples to their closest cluster center.  Lower inertia indicates tighter clusters.
*   **Algorithm (Lloyd's Algorithm):**
    1.  Initialize *k* centroids (randomly or using heuristics like K-Means++).
    2.  Assign each data point to the nearest centroid based on a distance metric (usually Euclidean distance).
    3.  Recalculate the centroids as the mean of the data points assigned to each cluster.
    4.  Repeat steps 2 and 3 until the centroids no longer change significantly or a maximum number of iterations is reached.
*   **Implementation in Python (using scikit-learn):**

```python
from sklearn.cluster import KMeans
from sklearn.datasets import make_blobs
import matplotlib.pyplot as plt

# Generate sample data
X, y = make_blobs(n_samples=300, centers=4, random_state=42)

# Initialize K-Means Clustering
kmeans = KMeans(n_clusters=4, init='k-means++', max_iter=300, n_init=10, random_state=0) # n_init is important!
# Fit and predict the clusters
clusters = kmeans.fit_predict(X)

# Visualize the clusters
plt.scatter(X[:, 0], X[:, 1], c=clusters, cmap='viridis')
plt.scatter(kmeans.cluster_centers_[:, 0], kmeans.cluster_centers_[:, 1], s=300, marker='*', c='red', label='Centroids') # Plot centroids
plt.title('K-Means Clustering')
plt.xlabel('Feature 1')
plt.ylabel('Feature 2')
plt.legend()
plt.show()

# Access the cluster centers:
print(kmeans.cluster_centers_)

# Access the inertia:
print("Inertia:", kmeans.inertia_)
```

*   **Advantages:**
    *   Relatively simple and computationally efficient (O(n * k * i), where n is the number of data points, k is the number of clusters, and i is the number of iterations).
    *   Scalable to large datasets.
*   **Disadvantages:**
    *   Requires pre-specifying the number of clusters (*k*).
    *   Sensitive to the initial placement of centroids.  The `n_init` parameter in scikit-learn helps mitigate this by running the algorithm multiple times with different centroid seeds.
    *   Assumes clusters are spherical and equally sized, which may not always be the case in real-world data.
    *   Can get stuck in local optima.
*   **Important Points to Remember:** Choosing the correct value of *k* is crucial for K-Means.  The Elbow Method and Silhouette analysis are common techniques for determining the optimal *k*. Consider scaling your data before using K-Means as it's sensitive to feature scaling. The `n_init` parameter is critical to improve the robustness of the algorithm.

**4. Comparing Hierarchical and K-Means Clustering**

| Feature          | Hierarchical (Agglomerative) | K-Means                    |
|-------------------|-------------------------------|-----------------------------|
| **Approach**     | Bottom-up (agglomerative)     | Partitional                |
| **# of Clusters** | Can be determined post-hoc   | Must be pre-specified (*k*) |
| **Computational Complexity** | Higher (O(n^3))             | Lower (O(n * k * i))         |
| **Scalability**    | Lower                         | Higher                      |
| **Cluster Shape** | More flexible                | Assumes spherical clusters |
| **Initialization**| No initialization needed      | Sensitive to initialization |
| **Output**         | Dendrogram, hierarchy         | Cluster assignments, centroids |
| **Overlapping Clusters** | Generally doesn't produce overlapping clusters in its standard form, but fuzzy hierarchical clustering exists | Produces non-overlapping clusters |

**5. Evaluating Clustering Performance**

*   **Silhouette Score:** Measures how well each data point fits within its cluster. Ranges from -1 to 1. Higher values indicate better clustering.  Requires true labels for supervised comparison.
*   **Calinski-Harabasz Index (Variance Ratio Criterion):** Ratio of between-cluster variance to within-cluster variance. Higher values indicate better clustering.
*   **Davies-Bouldin Index:** Measures the average similarity between each cluster and its most similar cluster. Lower values indicate better clustering.
*   **Inertia (K-Means specific):** The sum of squared distances of samples to their closest cluster center. Lower inertia generally indicates better clustering, but can be misleading, especially when increasing the number of clusters.
*   **Visual Inspection:** Plotting the clusters can help assess their quality, especially in 2D or 3D.
*   **External Validation:** If true labels are available (which is rare in unsupervised learning), you can use metrics like Adjusted Rand Index (ARI) and Normalized Mutual Information (NMI) to compare the cluster assignments to the ground truth.

**Example of Silhouette Score Calculation:**

```python
from sklearn.metrics import silhouette_score

# Assuming 'X' is your data and 'clusters' are the cluster labels from either K-Means or Agglomerative Clustering

silhouette_avg = silhouette_score(X, clusters)
print("The average silhouette_score is :", silhouette_avg)
```

**6. Parameter Selection**

*   **Hierarchical Clustering:**
    *   **Linkage Criterion:** Experiment with different linkage methods (single, complete, average, Ward) to find the best fit for your data.
    *   **Distance Metric:** Choose an appropriate distance metric based on the nature of your data (Euclidean, Manhattan, Cosine, etc.).
    *   **Number of Clusters:** Use the dendrogram to help determine an appropriate number of clusters to cut the hierarchy.
*   **K-Means Clustering:**
    *   ***k***: Use the Elbow Method, Silhouette analysis, or domain knowledge to determine the optimal number of clusters.
    *   **Initialization Method:** Use `init='k-means++'` for better initialization and to avoid getting stuck in local optima.
    *   **`n_init`:**  Set to a higher value (e.g., 10) to run the algorithm multiple times with different initializations and select the best result.
    *   **`max_iter`:** Set a maximum number of iterations to prevent the algorithm from running indefinitely.

**7. Practice Questions/Exercises:**

1.  **Data Generation and Clustering:** Generate 200 data points with 3 clusters using `make_blobs`. Apply both K-Means and Agglomerative Clustering (using Ward linkage) with `n_clusters=3`. Visualize the results and compare the cluster assignments.
    *   **Answer:** The code would involve using `make_blobs` to create the data, then using `KMeans` and `AgglomerativeClustering` from scikit-learn, fitting the models, predicting the cluster assignments, and finally using `matplotlib` to visualize the results. The comparison involves observing the visual separation and potentially calculating the silhouette scores.

2.  **Elbow Method:** Using the same data from question 1, apply K-Means clustering for different values of *k* (e.g., 2 to 8). Plot the inertia against *k*. Identify the "elbow" point and discuss its significance.
    *   **Answer:** The code would loop through different values of k, fit a K-Means model for each k, store the inertia, and then plot the inertia values against k. The "elbow" point is the value of k where the inertia starts to decrease much more slowly, indicating a good trade-off between the number of clusters and the within-cluster variance.

3.  **Linkage Comparison:** Apply Agglomerative Clustering with different linkage criteria (single, complete, average, Ward) to the same data. Visualize the results and discuss how the choice of linkage affects the shape and separation of the clusters.
    *   **Answer:** The code would involve creating and fitting multiple AgglomerativeClustering models, one for each linkage method. Visualizing the results would show how single linkage tends to create elongated, chain-like clusters, while complete linkage creates more compact clusters and Ward linkage tries to minimize variance within the clusters.

4.  **Silhouette Score Comparison:**  Calculate the Silhouette score for both K-Means and Agglomerative clustering on a new dataset.  Which algorithm performs better according to this metric?
    *   **Answer:** Calculate the Silhouette score for both algorithms using `silhouette_score` from `sklearn.metrics`.  The algorithm with the higher Silhouette score is generally considered to have better performance on that particular dataset.

5.  **When to use Hierarchical vs. K-Means:**  Describe a scenario where Hierarchical clustering would be more appropriate than K-Means, and vice versa.
    *   **Answer:**  Hierarchical clustering is more appropriate when you want to understand the hierarchical relationships between data points, explore different levels of granularity, or when the number of clusters is not known in advance. For example, in analyzing phylogenetic relationships between species. K-Means is more appropriate when you have a large dataset, want to quickly partition the data into a known number of clusters, and expect the clusters to be roughly spherical. For example, segmenting customers into predefined groups based on spending habits.

**8. Important Points to Remember (Recap):**

*   Clustering is an unsupervised learning technique.
*   K-Means requires pre-specifying the number of clusters *k*.
*   Hierarchical clustering creates a hierarchy of clusters.
*   The choice of linkage criterion in hierarchical clustering significantly impacts the results.
*   The Elbow Method and Silhouette analysis can help determine the optimal *k* for K-Means.
*   Scale your data before using K-Means.
*   Evaluate clustering performance using appropriate metrics.
*   Consider the computational complexity of each algorithm, especially for large datasets.
*   `n_init` parameter in K-Means is crucial to avoid local optima.
