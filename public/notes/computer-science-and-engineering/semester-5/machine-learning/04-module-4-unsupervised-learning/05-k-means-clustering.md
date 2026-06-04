---
title: "K-means clustering"
subject: "MACHINE LEARNING"
module: "Module 4: Unsupervised Learning"
branch: "Computer Science and Engineering"
semester: 5
topicId: "684162760fc9aa1fdbc8b5d2"
status: "completed"
scrapedAt: "2026-05-20T16:46:49.888Z"
---
# MACHINE LEARNING - Module 4: Unsupervised Learning - K-means Clustering

## Learning Outcomes:

Upon completion of this study material, you should be able to:

*   **Understand the concept of unsupervised learning and its applications.**
*   **Explain the K-means clustering algorithm and its purpose.**
*   **Describe the steps involved in the K-means algorithm.**
*   **Implement K-means clustering using a programming language (e.g., Python with scikit-learn).**
*   **Determine the optimal number of clusters (K) using methods like the Elbow method and Silhouette analysis.**
*   **Evaluate the performance of a K-means clustering model.**
*   **Identify the advantages and disadvantages of K-means clustering.**
*   **Apply K-means clustering to real-world datasets and interpret the results.**

## 1. Introduction to Unsupervised Learning

*   **Definition:** Unsupervised learning is a type of machine learning where the algorithm learns patterns from unlabeled data.  There is no "ground truth" or target variable to guide the learning process.
*   **Goal:** To discover hidden structures, patterns, and relationships within the data.
*   **Applications:**
    *   **Clustering:** Grouping similar data points together. (e.g., customer segmentation)
    *   **Dimensionality Reduction:** Reducing the number of variables while preserving important information. (e.g., Principal Component Analysis (PCA))
    *   **Anomaly Detection:** Identifying unusual data points that deviate significantly from the norm. (e.g., fraud detection)
    *   **Association Rule Mining:** Discovering relationships between variables. (e.g., market basket analysis)
*   **Contrast with Supervised Learning:**  Supervised learning uses labeled data to train a model to predict a target variable.  Unsupervised learning operates on unlabeled data to uncover hidden structures.

## 2. K-means Clustering: Overview

*   **Definition:** K-means clustering is an unsupervised learning algorithm that aims to partition *n* observations into *k* clusters, in which each observation belongs to the cluster with the nearest mean (cluster centers or cluster centroid), serving as a prototype of the cluster.
*   **Purpose:** To group data points into clusters based on their similarity.  Data points within the same cluster are more similar to each other than to data points in other clusters.
*   **Key Concepts:**
    *   ***k***: The number of clusters to be created.  This is a hyperparameter that must be specified *a priori*.
    *   **Centroid:** The mean (average) of the data points in a cluster.  Represents the center of the cluster.
    *   **Distance Metric:**  Used to measure the similarity between data points and cluster centroids.  Common metrics include:
        *   **Euclidean Distance:** The straight-line distance between two points.  (Most commonly used)
        *   **Manhattan Distance:** The sum of the absolute differences between coordinates.
        *   **Cosine Similarity:** Measures the cosine of the angle between two vectors (useful for text data).
    *   **Iteration:** The process of assigning data points to clusters and updating the cluster centroids is repeated until convergence.
    *   **Convergence:** The algorithm converges when the cluster assignments no longer change significantly, or the centroids stabilize.

## 3. Steps of the K-means Algorithm

1.  **Initialization:**
    *   Choose the number of clusters, *k*.
    *   Randomly initialize *k* centroids.  A common strategy is to randomly select *k* data points from the dataset as initial centroids.
2.  **Assignment Step:**
    *   For each data point, calculate the distance to each centroid.
    *   Assign the data point to the cluster with the nearest centroid.
3.  **Update Step:**
    *   Recalculate the centroid of each cluster by computing the mean of all data points assigned to that cluster.
4.  **Iteration:**
    *   Repeat steps 2 and 3 until convergence. Convergence is typically determined by:
        *   **Centroid stability:** The centroids no longer move significantly between iterations.
        *   **Cluster assignment stability:** Data point cluster assignments no longer change significantly between iterations.
        *   **Maximum iterations:** A pre-defined maximum number of iterations is reached.

**Example (Simplified):**

Imagine you have the following 2D data points: (1, 2), (1.5, 1.8), (5, 8), (8, 8), (1, 0.6), (9, 11).  You want to cluster them into *k = 2* clusters.

1.  **Initialization:**  Let's randomly select (1, 2) and (5, 8) as our initial centroids.
2.  **Assignment Step:**  Calculate distances from each point to (1, 2) and (5, 8).  For example, (1, 2) is closest to (1, 2) and (1.5, 1.8) is also closest to (1, 2).  (5, 8) is closest to (5, 8), (8, 8), and (9, 11).
3.  **Update Step:**  The new centroid for cluster 1 (initially around (1,2)) becomes the average of (1, 2), (1.5, 1.8), and (1, 0.6), which is approximately (1.17, 1.47). The new centroid for cluster 2 (initially around (5,8)) becomes the average of (5, 8), (8, 8), and (9, 11), which is approximately (7.33, 9).
4.  **Iteration:**  Repeat steps 2 and 3. Calculate the distances to the new centroids (1.17, 1.47) and (7.33, 9) and reassign points. Recalculate the centroids. Continue until the centroids stop moving significantly.

## 4. Implementation with Python (Scikit-learn)

```python
from sklearn.cluster import KMeans
import numpy as np

# Sample data
X = np.array([[1, 2], [1.5, 1.8], [5, 8], [8, 8], [1, 0.6], [9, 11]])

# Create a KMeans object with k=2
kmeans = KMeans(n_clusters=2, random_state=0, n_init='auto') # n_init added to suppress warning

# Fit the model to the data
kmeans.fit(X)

# Get the cluster labels for each data point
labels = kmeans.labels_
print("Cluster Labels:", labels)  # Output: [0 0 1 1 0 1]

# Get the cluster centroids
centroids = kmeans.cluster_centers_
print("Centroids:", centroids)
# Output:
# Centroids: [[1.16666667 1.46666667]
#              [7.33333333 9.        ]]


# Predict the cluster for a new data point
new_point = np.array([[3, 4]])
prediction = kmeans.predict(new_point)
print("Prediction for new point (3,4):", prediction) # Output: [0]

```

*   **`sklearn.cluster.KMeans`:**  The class for performing K-means clustering in scikit-learn.
*   **`n_clusters`:**  The number of clusters *k*.
*   **`random_state`:**  An integer used to initialize the random number generator. Setting a `random_state` ensures reproducibility of results. The warning `FutureWarning: The default value of `n_init` will change from 10 to 'auto' in version 1.4. Set the value of `n_init` explicitly to suppress the warning` is addressed by using `n_init='auto'`. `n_init` specifies the number of times the K-means algorithm will be run with different centroid seeds. The final results will be the best output of `n_init` consecutive runs in terms of inertia. If 'auto', the number of runs is chosen as max(n_satisfactory_starts, n_clusters) if version < 1.2 and max(n_satisfactory_starts, n_clusters // 2) if version >= 1.2 (default: 10)
*   **`fit(X)`:**  Trains the K-means model on the data `X`.
*   **`labels_`:**  An attribute that stores the cluster labels assigned to each data point.
*   **`cluster_centers_`:**  An attribute that stores the coordinates of the cluster centroids.
*   **`predict(new_data)`:**  Predicts the cluster assignment for new data points.

## 5. Determining the Optimal Number of Clusters (K)

Choosing the correct value for *k* is crucial for effective K-means clustering. Two common methods for determining the optimal *k* are:

*   **Elbow Method:**
    *   **Principle:**  Runs K-means for a range of *k* values and plots the within-cluster sum of squares (WCSS) or inertia (sum of squared distances of samples to their closest cluster center).
    *   **Interpretation:**  The "elbow point" in the plot, where the rate of decrease in WCSS starts to diminish significantly, is considered the optimal *k*.  The elbow point represents a trade-off between minimizing WCSS and avoiding overfitting.
    *   **Code Example:**

    ```python
    from sklearn.cluster import KMeans
    import matplotlib.pyplot as plt

    # Sample data (replace with your own)
    X = np.array([[1, 2], [1.5, 1.8], [5, 8], [8, 8], [1, 0.6], [9, 11]])

    # Calculate WCSS for different values of k
    wcss = []
    for i in range(1, 7):  # Try k from 1 to 6
        kmeans = KMeans(n_clusters=i, random_state=0, n_init='auto')
        kmeans.fit(X)
        wcss.append(kmeans.inertia_)  # Inertia is the WCSS

    # Plot the Elbow Method graph
    plt.plot(range(1, 7), wcss)
    plt.title('Elbow Method')
    plt.xlabel('Number of clusters')
    plt.ylabel('WCSS')
    plt.show()
    ```
*   **Silhouette Analysis:**
    *   **Principle:**  Measures how well each data point fits into its assigned cluster.  It calculates a silhouette coefficient for each data point, which ranges from -1 to 1.
    *   **Silhouette Coefficient:**
        *   **Close to 1:**  The data point is well-clustered.
        *   **Close to 0:**  The data point is near a cluster boundary.
        *   **Close to -1:**  The data point may be assigned to the wrong cluster.
    *   **Interpretation:**  Calculate the average silhouette score for different values of *k*.  The *k* with the highest average silhouette score is considered the optimal number of clusters.
    *   **Code Example:**

    ```python
    from sklearn.cluster import KMeans
    from sklearn.metrics import silhouette_score
    import matplotlib.pyplot as plt
    import numpy as np

    # Sample data (replace with your own)
    X = np.array([[1, 2], [1.5, 1.8], [5, 8], [8, 8], [1, 0.6], [9, 11]])


    # Calculate silhouette scores for different values of k
    silhouette_scores = []
    for i in range(2, 7): # Silhouette score requires at least 2 clusters
        kmeans = KMeans(n_clusters=i, random_state=0, n_init='auto')
        labels = kmeans.fit_predict(X)
        silhouette_scores.append(silhouette_score(X, labels))

    # Plot the Silhouette scores
    plt.plot(range(2, 7), silhouette_scores)
    plt.title('Silhouette Analysis')
    plt.xlabel('Number of clusters')
    plt.ylabel('Silhouette Score')
    plt.show()
    ```

## 6. Evaluating K-means Clustering Performance

Unlike supervised learning, where we have ground truth labels to compare against predictions, evaluating unsupervised learning algorithms like K-means is more challenging. Here are some metrics and considerations:

*   **Inertia (Within-Cluster Sum of Squares - WCSS):**  As seen in the Elbow Method, inertia represents the sum of squared distances of samples to their closest cluster center.  Lower inertia generally indicates better clustering, but decreasing inertia indefinitely can lead to overfitting (each data point becoming its own cluster). Inertia is sensitive to dataset dimensionality, so be wary of using it to compare across datasets or models with differing numbers of features.
*   **Silhouette Score:**  As discussed earlier, the silhouette score provides a measure of how well each data point fits within its cluster.  A higher silhouette score generally indicates better clustering.
*   **Visual Inspection:**  For datasets with a small number of dimensions (e.g., 2D or 3D), visualizing the clusters can be a helpful way to assess the quality of the clustering.  Scatter plots or 3D plots can reveal whether the clusters are well-separated and meaningful.
*   **Domain Knowledge:**  The most important evaluation often comes from domain experts.  Do the resulting clusters make sense in the context of the problem? Are they actionable?
*   **External Evaluation (If Ground Truth is Available):** In some cases, you might have some external information or "ground truth" about the data, even if it wasn't used to train the K-means model.  In such cases, you can use metrics like:
    *   **Adjusted Rand Index (ARI):** Measures the similarity between the cluster assignments and the ground truth labels, adjusted for chance.  Ranges from -1 to 1, with 1 indicating perfect agreement.
    *   **Normalized Mutual Information (NMI):**  Measures the mutual information between the cluster assignments and the ground truth labels, normalized to a range between 0 and 1.  Higher values indicate better agreement.

## 7. Advantages and Disadvantages of K-means Clustering

**Advantages:**

*   **Simple and easy to understand:** The algorithm is relatively straightforward to implement and interpret.
*   **Efficient:**  K-means can be computationally efficient, especially for large datasets.
*   **Scalable:**  It can handle large datasets with a relatively low computational cost.
*   **Widely applicable:** K-means can be applied to a variety of domains and data types.

**Disadvantages:**

*   **Requires specifying *k*:**  Choosing the optimal value for *k* can be challenging.  The Elbow method and Silhouette analysis can help, but the choice can still be subjective.
*   **Sensitive to initial centroid positions:**  The algorithm can converge to different solutions depending on the initial placement of the centroids.  Running the algorithm multiple times with different initializations can help mitigate this issue (addressed by the `n_init` parameter in scikit-learn).
*   **Assumes clusters are spherical and equally sized:** K-means performs best when clusters are roughly spherical, equally sized, and have similar densities.  It may not perform well on data with non-spherical clusters, varying densities, or complex shapes.
*   **Sensitive to outliers:**  Outliers can significantly affect the position of the centroids and distort the clustering results.
*   **Not guaranteed to converge to the global optimum:** K-means is a greedy algorithm and may converge to a local optimum, rather than the global optimum.
*   **Numerical data only:** Requires the data to be numerical or a distance metric appropriate for the data type must be defined.

## 8. Applications of K-means Clustering

*   **Customer Segmentation:** Grouping customers based on their purchasing behavior, demographics, or other characteristics.
*   **Image Segmentation:** Partitioning an image into different regions based on color, texture, or other features.
*   **Document Clustering:** Grouping similar documents together based on their content.
*   **Anomaly Detection:** Identifying unusual data points in a dataset (e.g., fraud detection, network intrusion detection).
*   **Recommendation Systems:** Recommending products or services to users based on the preferences of similar users.
*   **Genomic Analysis:** Grouping genes based on their expression patterns.

## Practice Questions/Exercises:

1.  **What is the main difference between supervised and unsupervised learning?**
    *   **Answer:** Supervised learning uses labeled data to learn a mapping from inputs to outputs, while unsupervised learning uses unlabeled data to discover hidden patterns and structures.

2.  **Explain the steps involved in the K-means clustering algorithm.**
    *   **Answer:** (See section 3 above) Initialization, Assignment Step, Update Step, Iteration until Convergence.

3.  **How does the Elbow method help determine the optimal number of clusters?**
    *   **Answer:** The Elbow method plots the WCSS (Within-Cluster Sum of Squares) for different values of *k*. The "elbow point" in the plot, where the rate of decrease in WCSS starts to diminish, is considered the optimal *k*.

4.  **What are some of the advantages and disadvantages of K-means clustering?**
    *   **Answer:** (See section 7 above).  Advantages: Simple, efficient, scalable.  Disadvantages: Requires specifying *k*, sensitive to initial centroid positions, assumes spherical clusters, sensitive to outliers.

5.  **You have a dataset of customer purchasing habits.  How could you use K-means clustering to segment your customers?  What features might you use?**
    *   **Answer:** You could use K-means to group customers with similar purchasing patterns.  Features you might use include:
        *   Purchase frequency
        *   Average order value
        *   Types of products purchased
        *   Spending habits over time

6.  **Why is feature scaling important before applying K-means clustering?**
    *   **Answer:** K-means uses distance-based metrics like Euclidean distance.  If features have different scales, those with larger scales can dominate the distance calculations, leading to biased clustering results. Scaling ensures that all features contribute equally to the distance calculations.

7.  **Given the points A(2,10), B(2,5), C(8,4), D(5,8), E(7,5), F(6,4), and G(1,2), and k=2. If initial centroids are A and G, what would be the clusters after the first iteration using Euclidean distance?**

    * **Answer:**
    * Calculate distances to centroid A(2,10):
        * d(A,A) = 0
        * d(B,A) = sqrt((2-2)^2 + (5-10)^2) = 5
        * d(C,A) = sqrt((8-2)^2 + (4-10)^2) = sqrt(36+36) = 7.21
        * d(D,A) = sqrt((5-2)^2 + (8-10)^2) = sqrt(9+4) = 3.61
        * d(E,A) = sqrt((7-2)^2 + (5-10)^2) = sqrt(25+25) = 7.07
        * d(F,A) = sqrt((6-2)^2 + (4-10)^2) = sqrt(16+36) = 7.21
        * d(G,A) = sqrt((1-2)^2 + (2-10)^2) = sqrt(1+64) = 8.06
    * Calculate distances to centroid G(1,2):
        * d(A,G) = 8.06 (Already calculated)
        * d(B,G) = sqrt((2-1)^2 + (5-2)^2) = sqrt(1+9) = 3.16
        * d(C,G) = sqrt((8-1)^2 + (4-2)^2) = sqrt(49+4) = 7.28
        * d(D,G) = sqrt((5-1)^2 + (8-2)^2) = sqrt(16+36) = 7.21
        * d(E,G) = sqrt((7-1)^2 + (5-2)^2) = sqrt(36+9) = 6.71
        * d(F,G) = sqrt((6-1)^2 + (4-2)^2) = sqrt(25+4) = 5.39
        * d(G,G) = 0

    * Assign each point to the closest centroid:
        * A -> A (0 < 8.06)
        * B -> G (5 > 3.16)
        * C -> A (7.21 < 7.28)
        * D -> A (3.61 < 7.21)
        * E -> G (7.07 > 6.71)
        * F -> G (7.21 > 5.39)
        * G -> G (8.06 > 0)

    * Clusters after the first iteration:
        * Cluster 1 (around A): A, C, D
        * Cluster 2 (around G): B, E, F, G
     Note: further iterations would be required to find the optimal centroid positions

## 9. Important Points to Remember

*   K-means is a powerful and widely used clustering algorithm, but it has limitations.
*   Choosing the right value for *k* is crucial.  Use the Elbow method and Silhouette analysis to guide your choice.
*   Feature scaling is generally necessary before applying K-means.
*   Consider the assumptions of K-means (spherical clusters, equal sizes) and choose a different algorithm if those assumptions are not met.
*   Evaluate the results using appropriate metrics and domain knowledge.
*   Run K-means multiple times with different initializations to avoid local optima.
