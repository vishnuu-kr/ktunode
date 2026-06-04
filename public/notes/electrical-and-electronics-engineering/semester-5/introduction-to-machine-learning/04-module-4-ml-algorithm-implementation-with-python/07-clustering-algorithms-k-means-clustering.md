---
title: "Clustering Algorithms -K-means clustering"
subject: "INTRODUCTION TO MACHINE LEARNING"
module: "Module 4: ML algorithm implementation with python "
branch: "Electrical and Electronics Engineering"
semester: 5
topicId: "68a200862b85456187f3643f"
status: "completed"
scrapedAt: "2026-05-23T16:22:32.839Z"
---
# Introduction to Machine Learning

## Module 4: ML Algorithm Implementation with Python

### Topic: Clustering Algorithms - K-Means Clustering

---

### **1. Learning Outcomes Covered**

This module will equip you to:

*   **Understand the fundamental principles of K-Means clustering:** Grasp how it groups data points into distinct clusters based on similarity.
*   **Implement K-Means clustering using Python:** Utilize libraries like scikit-learn to apply the algorithm to datasets.
*   **Evaluate the performance of K-Means clustering:** Learn how to assess the quality of the generated clusters.
*   **Apply K-Means to real-world problems:** Recognize scenarios where K-Means is a suitable unsupervised learning technique.

---

### **2. Key Concepts and Definitions**

**Clustering:**

*   **Definition:** An unsupervised machine learning technique that involves grouping a set of objects in such a way that objects in the same group (called a cluster) are more similar to each other than to those in other groups.
*   **Goal:** To discover inherent groupings within unlabeled data.
*   **Applications:** Customer segmentation, anomaly detection, image segmentation, document analysis.

**Unsupervised Learning:**

*   **Definition:** A type of machine learning in which algorithms learn patterns from unlabeled data. The algorithm is not given "correct" outputs, but rather must find structure on its own.
*   **Contrast with Supervised Learning:** Supervised learning requires labeled data (input-output pairs), while unsupervised learning works with input data only.

**K-Means Clustering:**

*   **Definition:** A popular, iterative, and partitioning-based clustering algorithm that aims to partition *n* observations into *k* clusters in which each observation belongs to the cluster with the nearest mean (cluster centroid).
*   **Objective Function (Sum of Squared Errors - SSE):** To minimize the sum of squared distances between each data point and its assigned cluster centroid.
    $$ \text{SSE} = \sum_{i=1}^{k} \sum_{x \in C_i} \|x - \mu_i\|^2 $$
    where:
    *   $k$ is the number of clusters.
    *   $C_i$ is the set of data points assigned to cluster $i$.
    *   $x$ is a data point.
    *   $\mu_i$ is the mean (centroid) of cluster $i$.

---

### **3. The K-Means Algorithm: Step-by-Step**

The K-Means algorithm proceeds iteratively to partition the data into *k* clusters. The steps are as follows:

1.  **Initialization:**
    *   Choose the number of clusters, *k*.
    *   Randomly select *k* data points from the dataset as initial cluster centroids. (Alternatively, more sophisticated initialization methods like k-means++ can be used to improve convergence.)

2.  **Assignment Step (Expectation Step):**
    *   Assign each data point to the nearest centroid. The distance is typically measured using Euclidean distance.
    *   For each data point $x_j$, find the centroid $\mu_i$ such that $d(x_j, \mu_i)$ is minimized, and assign $x_j$ to cluster $C_i$.
    $$ C_i = \{x_j \mid \|x_j - \mu_i\| \le \|x_j - \mu_m\| \text{ for all } m \ne i\} $$

3.  **Update Step (Maximization Step):**
    *   Recalculate the centroids for each cluster. The new centroid $\mu_i$ is the mean of all data points assigned to cluster $C_i$.
    $$ \mu_i = \frac{1}{|C_i|} \sum_{x \in C_i} x $$
    *   Repeat steps 2 and 3 until a convergence criterion is met.

4.  **Convergence:**
    *   The algorithm converges when the cluster assignments no longer change between iterations, or when the change in centroid positions is below a certain threshold.

---

### **4. Implementation with Python (using scikit-learn)**

Scikit-learn provides a user-friendly implementation of the K-Means algorithm.

#### **Core Components:**

*   `sklearn.cluster.KMeans`: The primary class for K-Means clustering.

#### **Key Parameters:**

*   `n_clusters`: The number of clusters to form (denoted as *k*). **This is a crucial hyperparameter you need to specify.**
*   `init`: Method for initialization. Common options:
    *   `'k-means++'` (default): Smart initialization that tends to produce better results and faster convergence.
    *   `'random'`: Randomly select *k* data points as initial centroids.
*   `n_init`: Number of times the k-means algorithm will be run with different centroid seeds. The final results will be the best output of `n_init` consecutive runs in terms of inertia.
*   `max_iter`: Maximum number of iterations of the k-means algorithm for a single run.
*   `tol`: Tolerance with which to check the convergence.

#### **Example Usage:**

```python
import matplotlib.pyplot as plt
from sklearn.cluster import KMeans
from sklearn.datasets import make_blobs # For generating sample data
import pandas as pd
import numpy as np

# 1. Generate Sample Data
# Let's create a dataset with 3 distinct clusters
X, y_true = make_blobs(n_samples=300, centers=3, cluster_std=0.60, random_state=0)

# Display the generated data
plt.figure(figsize=(8, 6))
plt.scatter(X[:, 0], X[:, 1], s=50)
plt.title("Sample Data for Clustering")
plt.xlabel("Feature 1")
plt.ylabel("Feature 2")
plt.show()

# 2. Initialize and Fit the KMeans Model
# We'll try to find 3 clusters
k = 3
kmeans = KMeans(n_clusters=k, random_state=0, n_init=10) # n_init=10 is recommended
kmeans.fit(X)

# 3. Get Cluster Assignments and Centroids
labels = kmeans.labels_ # Cluster assignment for each data point
centers = kmeans.cluster_centers_ # Coordinates of the cluster centers

# 4. Visualize the Results
plt.figure(figsize=(8, 6))
plt.scatter(X[:, 0], X[:, 1], c=labels, s=50, cmap='viridis') # Color points by cluster
plt.scatter(centers[:, 0], centers[:, 1], c='red', s=200, alpha=0.75, marker='X', label='Centroids') # Plot centroids
plt.title(f"K-Means Clustering Results (k={k})")
plt.xlabel("Feature 1")
plt.ylabel("Feature 2")
plt.legend()
plt.show()

# 5. Accessing Results
print(f"Cluster labels for the first 10 data points: {labels[:10]}")
print(f"Centroids:\n{centers}")
```

---

### **5. Evaluating K-Means Clustering**

Since K-Means is an unsupervised algorithm, evaluating its performance can be tricky. We don't have ground truth labels in most real-world scenarios. However, we can use intrinsic evaluation metrics that measure the quality of the clusters themselves.

#### **The Elbow Method:**

*   **Concept:** The Elbow method is a heuristic used to find the optimal value of *k*. It involves running K-Means for a range of *k* values (e.g., 1 to 10) and plotting the *inertia* (sum of squared distances of samples to their closest cluster center) against the number of clusters.
*   **Inertia:** This is the SSE mentioned earlier. `kmeans.inertia_` attribute in scikit-learn.
*   **How it works:** As *k* increases, inertia generally decreases. The "elbow" point in the plot, where the rate of decrease sharply slows down, is often considered a good choice for *k*. This is because adding more clusters beyond this point provides diminishing returns in reducing the within-cluster variance.

#### **Example of the Elbow Method:**

```python
# Continuing from the previous example

inertia = []
k_range = range(1, 11) # Try k from 1 to 10

for k_try in k_range:
    kmeans_elbow = KMeans(n_clusters=k_try, random_state=0, n_init=10)
    kmeans_elbow.fit(X)
    inertia.append(kmeans_elbow.inertia_)

# Plotting the Elbow Curve
plt.figure(figsize=(10, 6))
plt.plot(k_range, inertia, marker='o')
plt.title("Elbow Method for Optimal k")
plt.xlabel("Number of Clusters (k)")
plt.ylabel("Inertia (SSE)")
plt.xticks(k_range)
plt.grid(True)
plt.show()

# Based on the plot, we'd look for the "elbow" point.
# For the make_blobs data generated with centers=3, we expect the elbow to be around k=3.
```

#### **Silhouette Score:**

*   **Concept:** The Silhouette Score measures how similar an object is to its own cluster (cohesion) compared to other clusters (separation). It provides a measure of how well-defined the clusters are.
*   **Range:** The score ranges from -1 to +1.
    *   +1: Indicates that the sample is far away from neighboring clusters.
    *   0: Indicates that the sample is on or very close to the decision boundary between two neighboring clusters.
    *   -1: Indicates that those samples might have been assigned to the wrong cluster.
*   **Calculation:** For each sample, it is calculated as:
    $$ s(i) = \frac{b(i) - a(i)}{\max(a(i), b(i))} $$
    where:
    *   $a(i)$: The average distance from sample *i* to all other points in the same cluster.
    *   $b(i)$: The average distance from sample *i* to all points in the *nearest* neighboring cluster.
*   **Overall Score:** The silhouette score for a set of clusters is the average of the silhouette scores for all samples.

#### **Example of Silhouette Score:**

```python
from sklearn.metrics import silhouette_score

# Assuming kmeans was fitted with k=3
# Calculate silhouette score for the k=3 clustering
silhouette_avg_3 = silhouette_score(X, labels)
print(f"Silhouette Score for k=3: {silhouette_avg_3:.3f}")

# Let's compare with another k, say k=2
kmeans_k2 = KMeans(n_clusters=2, random_state=0, n_init=10)
kmeans_k2.fit(X)
labels_k2 = kmeans_k2.labels_
silhouette_avg_2 = silhouette_score(X, labels_k2)
print(f"Silhouette Score for k=2: {silhouette_avg_2:.3f}")

# You can iterate through different k values to find the one with the highest silhouette score
silhouette_scores = []
for k_try in k_range[1:]: # Start from k=2 since silhouette requires at least 2 clusters
    kmeans_sil = KMeans(n_clusters=k_try, random_state=0, n_init=10)
    kmeans_sil.fit(X)
    cluster_labels = kmeans_sil.labels_
    if len(set(cluster_labels)) > 1: # Ensure there's more than one cluster
        silhouette_avg = silhouette_score(X, cluster_labels)
        silhouette_scores.append(silhouette_avg)
    else:
        silhouette_scores.append(-1) # Handle cases with only one cluster

plt.figure(figsize=(10, 6))
plt.plot(k_range[1:], silhouette_scores, marker='o')
plt.title("Silhouette Scores for Different k Values")
plt.xlabel("Number of Clusters (k)")
plt.ylabel("Average Silhouette Score")
plt.xticks(k_range[1:])
plt.grid(True)
plt.show()
```

---

### **6. Important Points to Remember**

*   **Choosing *k*:** The most critical aspect of K-Means is determining the optimal number of clusters (*k*). The Elbow method and Silhouette score are common techniques, but domain knowledge is also invaluable.
*   **Initialization Sensitivity:** K-Means is sensitive to the initial placement of centroids. Using `init='k-means++'` and running `n_init` multiple times helps mitigate this.
*   **Distance Metric:** K-Means typically uses Euclidean distance. If your data has features with different scales, **feature scaling (e.g., using StandardScaler)** is essential before applying K-Means. Otherwise, features with larger scales will dominate the distance calculations.
*   **Cluster Shape:** K-Means assumes that clusters are spherical and roughly equal in size and density. It may struggle with clusters of arbitrary shapes, elongated clusters, or clusters with significantly different variances.
*   **Outliers:** K-Means can be sensitive to outliers, as they can disproportionately influence the centroid positions.
*   **Scalability:** While relatively fast, K-Means can be computationally expensive for very large datasets.

---

### **7. Alignment with Course Outcomes**

*   **CO1 (Variable Relationships, Hypothesis Testing):** While K-Means doesn't directly involve hypothesis testing, understanding the "distance" between data points (related to variable relationships) is fundamental to its operation. The evaluation metrics like Silhouette score indirectly assess how well variables group together.
*   **CO2 (Apply ML Algorithms):** This topic directly addresses applying an unsupervised clustering algorithm (K-Means) to discover structure in data, which is a core part of CO2.
*   **CO3 (Python Libraries for Data Prep/Viz):** The examples demonstrate using `matplotlib` for visualization and `sklearn.datasets.make_blobs` for data generation, aligning with data preparation and visualization aspects. Feature scaling, often done with `sklearn.preprocessing.StandardScaler`, is implicitly related.
*   **CO4 (Implement and Evaluate):** This module focuses on the implementation of K-Means in Python using scikit-learn and evaluating its performance using metrics like inertia and silhouette score, directly fulfilling CO4.

---

### **8. Practice Questions and Exercises**

**Question 1:**

What is the primary objective of the K-Means clustering algorithm?

*   A) To predict a continuous target variable.
*   B) To classify data points into predefined categories.
*   C) To group similar data points together into clusters without prior knowledge of the groups.
*   D) To reduce the dimensionality of the dataset.

**Answer:** C

**Question 2:**

Which of the following is NOT a typical step in the K-Means algorithm?

*   A) Initialization of centroids.
*   B) Assignment of data points to the nearest centroid.
*   C) Update of centroid positions based on the mean of assigned points.
*   D) Calculation of accuracy based on ground truth labels.

**Answer:** D (K-Means is unsupervised, so ground truth labels are usually not available for direct accuracy calculation.)

**Question 3 (Conceptual/Implementation):**

Imagine you have a dataset of customer purchase history. How could K-Means clustering be used to analyze this data? What would the clusters represent?

**Answer:**
K-Means could be used to segment customers based on their purchasing patterns. For example, clusters might represent:
*   **High-value, frequent buyers:** Customers who spend a lot and purchase often.
*   **Occasional discount shoppers:** Customers who buy during sales.
*   **New customers:** Those with fewer purchases but potentially high initial spending.
*   **Infrequent, low-spending customers:**

The clusters would represent distinct groups of customers with similar behaviors, allowing for targeted marketing campaigns, personalized recommendations, or tailored customer service strategies.

**Question 4 (Implementation Challenge):**

Using Python and scikit-learn, perform K-Means clustering on the `iris` dataset (available in `sklearn.datasets.load_iris`).

1.  Load the iris dataset.
2.  Select two features (e.g., 'sepal length' and 'sepal width').
3.  Apply K-Means with `n_clusters=3` (since there are 3 species in iris).
4.  Visualize the clustered data, coloring points by their assigned cluster.
5.  Print the cluster centers.

**Answer (Code Snippet):**

```python
from sklearn.datasets import load_iris
from sklearn.cluster import KMeans
import matplotlib.pyplot as plt
import pandas as pd

# 1. Load the iris dataset
iris = load_iris()
X_iris = iris.data[:, [0, 1]] # Using sepal length and sepal width
y_iris_true = iris.target # True labels (for comparison if needed, but not for K-means itself)

# 2. Apply K-Means
k_iris = 3
kmeans_iris = KMeans(n_clusters=k_iris, random_state=0, n_init=10)
kmeans_iris.fit(X_iris)
labels_iris = kmeans_iris.labels_
centers_iris = kmeans_iris.cluster_centers_

# 3. Visualize the clustered data
plt.figure(figsize=(8, 6))
plt.scatter(X_iris[:, 0], X_iris[:, 1], c=labels_iris, s=50, cmap='viridis', label='Data Points')
plt.scatter(centers_iris[:, 0], centers_iris[:, 1], c='red', s=200, alpha=0.75, marker='X', label='Centroids')
plt.title(f"K-Means Clustering on Iris Dataset (k={k_iris})")
plt.xlabel(iris.feature_names[0]) # Sepal Length
plt.ylabel(iris.feature_names[1]) # Sepal Width
plt.legend()
plt.show()

# 4. Print the cluster centers
print(f"Cluster Centers:\n{centers_iris}")

# Optional: Compare with true labels for evaluation if desired
# print(f"True labels for first 10 points: {y_iris_true[:10]}")
# print(f"K-Means labels for first 10 points: {labels_iris[:10]}")
# silhouette_avg_iris = silhouette_score(X_iris, labels_iris)
# print(f"Silhouette Score for Iris (k=3): {silhouette_avg_iris:.3f}")
```

---
