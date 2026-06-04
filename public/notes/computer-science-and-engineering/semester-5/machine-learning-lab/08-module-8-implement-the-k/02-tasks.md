---
title: "Tasks:"
subject: "MACHINE LEARNING LAB"
module: "Module 8: Implement the K"
branch: "Computer Science and Engineering"
semester: 5
topicId: "684162770fc9aa1fdbc8b95f"
status: "completed"
scrapedAt: "2026-05-20T16:47:25.316Z"
---
# MACHINE LEARNING LAB - Module 8: Implement the K-Means Clustering Algorithm

## Overview

This module focuses on implementing the K-Means clustering algorithm, a fundamental unsupervised learning technique. You will learn the theory behind K-Means, its practical implementation using Python and libraries like scikit-learn, and how to evaluate its performance.

## Learning Outcomes

*   Understand the K-Means clustering algorithm and its underlying principles.
*   Implement K-Means from scratch and using libraries (scikit-learn).
*   Apply K-Means to real-world datasets.
*   Determine the optimal number of clusters (K) using techniques like the Elbow Method.
*   Evaluate the performance of K-Means clustering.
*   Understand the limitations of K-Means and when it's not suitable.

## 1. Key Concepts and Definitions

*   **Clustering:** Grouping data points into clusters based on similarity.
*   **Unsupervised Learning:** Learning from unlabeled data.  There is no target variable to predict.
*   **K-Means:** An iterative clustering algorithm that aims to partition *n* observations into *k* clusters in which each observation belongs to the cluster with the nearest mean (cluster center or centroid), serving as a prototype of the cluster.
*   **Centroid:** The center of a cluster, typically calculated as the mean of the data points within that cluster.
*   **Euclidean Distance:** A common distance metric used in K-Means to measure the similarity between data points and centroids.  It's calculated as the square root of the sum of the squared differences between corresponding elements of the two data points.
*   **Squared Euclidean Distance:**  The square of the Euclidean distance. Used sometimes for computational efficiency as it avoids the square root operation.
*   **Within-Cluster Sum of Squares (WCSS):** The sum of the squared distances between each data point and its cluster centroid. It's a measure of how tightly the data points are clustered within each cluster.  Lower WCSS generally indicates better clustering.
*   **Inertia:**  The sum of squared distances of samples to their closest cluster center. It's the same as WCSS. Scikit-learn's K-Means implementation uses "inertia" as the attribute to access WCSS.
*   **Elbow Method:** A technique used to determine the optimal number of clusters (K) by plotting the WCSS (inertia) for different values of K and looking for an "elbow" point, where the rate of decrease in WCSS starts to diminish significantly.
*   **Silhouette Score:** A metric to evaluate the quality of clustering. It measures how well each data point fits within its cluster compared to other clusters.  Ranges from -1 to +1.  A score closer to +1 indicates better clustering.
*   **Initialization Methods:** Techniques used to select the initial centroids for the K-Means algorithm. Common methods include:
    *   **Random Initialization:** Randomly selects K data points as initial centroids.  Can lead to suboptimal results due to sensitivity to initial centroid selection.
    *   **K-Means++:** A more sophisticated initialization method that selects initial centroids in a way that they are far from each other, leading to faster convergence and better clustering.  Scikit-learn uses K-Means++ by default.
*   **Lloyd's Algorithm:** The standard iterative algorithm for K-Means.

## 2. K-Means Algorithm Steps

1.  **Initialization:** Choose *k* initial centroids, either randomly or using a more sophisticated method like K-Means++.
2.  **Assignment:** Assign each data point to the nearest centroid based on a distance metric (e.g., Euclidean distance).
3.  **Update:** Recalculate the centroids of each cluster by computing the mean of all data points assigned to that cluster.
4.  **Iteration:** Repeat steps 2 and 3 until the centroids no longer change significantly or a maximum number of iterations is reached. This signifies convergence.

## 3. Implementation from Scratch (Python)

```python
import numpy as np

def euclidean_distance(x1, x2):
    return np.sqrt(np.sum((x1 - x2)**2))

class KMeans:
    def __init__(self, k=3, max_iters=100):
        self.k = k
        self.max_iters = max_iters
        self.centroids = None

    def fit(self, X):
        # 1. Initialize centroids randomly
        np.random.seed(42)  # For reproducibility
        random_indices = np.random.choice(X.shape[0], self.k, replace=False)
        self.centroids = X[random_indices]

        # 2. Iterate until convergence or max_iters
        for _ in range(self.max_iters):
            # Assign data points to clusters
            clusters = self._create_clusters(X)

            # Save old centroids for convergence check
            old_centroids = self.centroids

            # Recalculate centroids
            self.centroids = self._calculate_centroids(X, clusters)

            # Check for convergence
            if self._is_converged(old_centroids, self.centroids):
                break

    def _create_clusters(self, X):
        clusters = [[] for _ in range(self.k)]
        for i, x in enumerate(X):
            closest_centroid = np.argmin([euclidean_distance(x, centroid) for centroid in self.centroids])
            clusters[closest_centroid].append(i)
        return clusters

    def _calculate_centroids(self, X, clusters):
        centroids = np.zeros((self.k, X.shape[1]))
        for cluster_idx, cluster in enumerate(clusters):
            if cluster:  # Handle empty clusters
                cluster_mean = np.mean(X[cluster], axis=0)
                centroids[cluster_idx] = cluster_mean
            else:
                # Handle empty clusters: keep the old centroid
                centroids[cluster_idx] = self.centroids[cluster_idx]
        return centroids

    def _is_converged(self, old_centroids, centroids):
        distances = [euclidean_distance(old_centroids[i], centroids[i]) for i in range(self.k)]
        return sum(distances) == 0

    def predict(self, X):
        clusters = self._create_clusters(X)
        predictions = np.zeros(X.shape[0])
        for cluster_idx, cluster in enumerate(clusters):
            for sample_idx in cluster:
                predictions[sample_idx] = cluster_idx
        return predictions

# Example usage
if __name__ == "__main__":
    from sklearn.datasets import make_blobs
    import matplotlib.pyplot as plt

    # Generate sample data
    X, _ = make_blobs(n_samples=300, centers=4, cluster_std=0.60, random_state=0)

    # Instantiate and fit the K-Means model
    kmeans = KMeans(k=4, max_iters=150)
    kmeans.fit(X)
    predictions = kmeans.predict(X)

    # Visualize the results
    plt.scatter(X[:, 0], X[:, 1], c=predictions)
    plt.scatter(kmeans.centroids[:, 0], kmeans.centroids[:, 1], marker="x", s=200, linewidths=3, color="r")
    plt.title("K-Means Clustering")
    plt.show()
```

## 4. Implementation with Scikit-learn

```python
from sklearn.cluster import KMeans
from sklearn.datasets import make_blobs
import matplotlib.pyplot as plt

# Generate sample data
X, _ = make_blobs(n_samples=300, centers=4, cluster_std=0.60, random_state=0)

# Instantiate and fit the K-Means model
kmeans = KMeans(n_clusters=4, init='k-means++', max_iter=300, n_init=10, random_state=0)
kmeans.fit(X)
predictions = kmeans.predict(X)

# Get the centroids
centroids = kmeans.cluster_centers_

# Get the inertia (WCSS)
inertia = kmeans.inertia_

# Visualize the results
plt.scatter(X[:, 0], X[:, 1], c=predictions)
plt.scatter(centroids[:, 0], centroids[:, 1], marker="x", s=200, linewidths=3, color="r")
plt.title("K-Means Clustering with Scikit-learn")
plt.show()

print(f"Inertia (WCSS): {inertia}")
```

**Explanation of parameters in `sklearn.cluster.KMeans`:**

*   `n_clusters`: The number of clusters to form. This is the 'k' in K-Means.
*   `init`: Method for initialization: 'k-means++' (default) or 'random'. K-Means++ is generally preferred for its superior initialization.
*   `max_iter`: Maximum number of iterations for a single run.
*   `n_init`: Number of times the k-means algorithm will be run with different centroid seeds. The final results will be the best output of n_init consecutive runs in terms of inertia. Scikit-learn recommends setting `n_init` to at least 10.
*   `random_state`:  Determines random number generation for centroid initialization. Use an int to make the randomness deterministic.

## 5. Determining the Optimal Number of Clusters (K) - The Elbow Method

```python
from sklearn.cluster import KMeans
from sklearn.datasets import make_blobs
import matplotlib.pyplot as plt

# Generate sample data
X, _ = make_blobs(n_samples=300, centers=4, cluster_std=0.60, random_state=0)

# Calculate WCSS for different values of K
wcss = []
for i in range(1, 11):
    kmeans = KMeans(n_clusters=i, init='k-means++', max_iter=300, n_init=10, random_state=0)
    kmeans.fit(X)
    wcss.append(kmeans.inertia_)  # inertia_ is the WCSS

# Plot the Elbow Method graph
plt.plot(range(1, 11), wcss)
plt.title('Elbow Method')
plt.xlabel('Number of Clusters (K)')
plt.ylabel('WCSS (Inertia)')
plt.show()
```

**Explanation:**  The elbow method plots the WCSS (inertia) against the number of clusters (K).  The optimal K is typically where the graph starts to flatten out, resembling an "elbow." In the example above, you'd likely choose K=4.

## 6. Evaluating Clustering Performance - Silhouette Score

```python
from sklearn.cluster import KMeans
from sklearn.metrics import silhouette_score
from sklearn.datasets import make_blobs

# Generate sample data
X, _ = make_blobs(n_samples=300, centers=4, cluster_std=0.60, random_state=0)

# Fit K-Means
kmeans = KMeans(n_clusters=4, init='k-means++', max_iter=300, n_init=10, random_state=0)
kmeans.fit(X)
predictions = kmeans.predict(X)

# Calculate the Silhouette Score
silhouette = silhouette_score(X, predictions)
print(f"Silhouette Score: {silhouette}")
```

A Silhouette Score close to +1 indicates that the data points are well-clustered, with clear separation between clusters. A score close to 0 indicates overlapping clusters, and a score close to -1 indicates that the data points may have been assigned to the wrong clusters.

## 7. Limitations of K-Means

*   **Sensitivity to Initial Centroids:**  Different initial centroid positions can lead to different clustering results.  K-Means++ helps mitigate this.  Running the algorithm multiple times with different initializations (controlled by `n_init` in scikit-learn) is recommended.
*   **Assumption of Spherical Clusters:** K-Means assumes that clusters are spherical (or nearly spherical) and equally sized. It performs poorly on non-spherical or irregularly shaped clusters.
*   **Requires Pre-defined K:**  You need to specify the number of clusters (K) in advance.  The Elbow Method and Silhouette Score can help estimate K, but it's not always straightforward.
*   **Sensitive to Scaling:** K-Means is sensitive to the scaling of the features. Features with larger scales can dominate the distance calculations.  It's important to scale or normalize the data before applying K-Means.
*   **Doesn't handle outliers well:** Outliers can significantly affect the position of the centroids.

## 8. When K-Means is Not Suitable

*   **Non-spherical clusters:** Use algorithms like DBSCAN or spectral clustering.
*   **Clusters of varying sizes and densities:** Use algorithms like DBSCAN or hierarchical clustering.
*   **High-dimensional data:** K-Means suffers from the "curse of dimensionality." Dimensionality reduction techniques (PCA, t-SNE) can be applied before K-Means.

## 9. Practice Questions and Exercises

**Question 1:**  What is the main goal of the K-Means algorithm?

**Answer:** To partition *n* observations into *k* clusters in which each observation belongs to the cluster with the nearest mean (cluster center or centroid).

**Question 2:**  Explain the role of the "centroids" in K-Means.

**Answer:** Centroids are the center points of each cluster, representing the mean of all data points assigned to that cluster.  They are iteratively updated during the K-Means algorithm.

**Question 3:** What distance metric is commonly used in K-Means?

**Answer:** Euclidean Distance.

**Question 4:**  What is WCSS (Within-Cluster Sum of Squares)?  How is it related to Inertia?

**Answer:** WCSS is the sum of the squared distances between each data point and its cluster centroid. It's a measure of how tightly the data points are clustered within each cluster.  Inertia, as defined in scikit-learn's K-Means implementation, is the same as WCSS.

**Question 5:**  Describe the Elbow Method and how it helps determine the optimal number of clusters.

**Answer:** The Elbow Method involves plotting the WCSS (inertia) for different values of K and looking for an "elbow" point, where the rate of decrease in WCSS starts to diminish significantly. This elbow point suggests an appropriate number of clusters.

**Question 6:** What is the Silhouette Score, and what does it tell you about the quality of a clustering result?

**Answer:** The Silhouette Score measures how well each data point fits within its cluster compared to other clusters. It ranges from -1 to +1. A score closer to +1 indicates better clustering.

**Question 7:**  Name two limitations of the K-Means algorithm.

**Answer:** Sensitivity to initial centroids and the assumption of spherical clusters.

**Question 8:** When would K-Means *not* be a suitable clustering algorithm?

**Answer:** When dealing with non-spherical clusters, clusters of varying sizes and densities, or high-dimensional data without dimensionality reduction.

**Exercise 1:**

1.  Generate a synthetic dataset using `sklearn.datasets.make_blobs`.
2.  Implement K-Means using the scikit-learn library with K=3.
3.  Visualize the clusters and centroids.
4.  Calculate and print the WCSS (inertia) and Silhouette Score.

**Exercise 2:**

1.  Using the same dataset from Exercise 1, apply the Elbow Method to determine the optimal number of clusters.  Try K values from 1 to 10.
2.  Plot the Elbow Method graph.
3.  Based on the graph, choose an appropriate value for K.
4.  Re-run K-Means with the chosen K and evaluate the performance using the Silhouette Score.

## 10. Important Points to Remember

*   **Data Preprocessing:** Scale or normalize your data before applying K-Means to avoid features with larger scales dominating the distance calculations.
*   **Initialization Matters:** Use K-Means++ initialization or run K-Means multiple times with different random initializations (`n_init` in scikit-learn).
*   **Choose K Wisely:** Use the Elbow Method or other techniques to estimate the optimal number of clusters.  Consider domain knowledge as well.
*   **Evaluate Performance:** Use metrics like the Silhouette Score to assess the quality of the clustering.
*   **Understand the Limitations:** Be aware of K-Means' limitations and choose a more appropriate algorithm if necessary.  Consider DBSCAN, hierarchical clustering, or spectral clustering for non-spherical data.
*   **Handle Empty Clusters:** Implement a strategy to handle empty clusters during the centroid update step, especially when implementing K-Means from scratch.  One common approach is to re-initialize the centroid randomly or keep the old centroid.
