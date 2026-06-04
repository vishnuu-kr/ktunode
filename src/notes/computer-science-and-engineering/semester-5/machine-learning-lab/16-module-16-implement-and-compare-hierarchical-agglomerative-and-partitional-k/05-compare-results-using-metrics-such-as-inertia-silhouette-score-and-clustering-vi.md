---
title: "Compare results using metrics such as inertia, silhouette score, and clustering visualization."
subject: "MACHINE LEARNING LAB"
module: "Module 16: Implement and compare hierarchical (agglomerative) and partitional (K"
branch: "Computer Science and Engineering"
semester: 5
topicId: "684162770fc9aa1fdbc8b99a"
status: "completed"
scrapedAt: "2026-05-20T16:48:02.646Z"
---
# MACHINE LEARNING LAB - Module 16: Comparing Hierarchical and K-Means Clustering

**Topic:** Comparing results using metrics such as inertia, silhouette score, and clustering visualization.

**Learning Outcomes:**

*   Implement both hierarchical (agglomerative) and partitional (K-Means) clustering algorithms.
*   Apply inertia, silhouette score, and visualization techniques to evaluate clustering performance.
*   Compare the results of hierarchical and K-Means clustering based on these evaluation metrics.
*   Understand the strengths and weaknesses of each clustering algorithm.
*   Choose the appropriate clustering algorithm based on the dataset and desired outcome.

## 1. Introduction to Clustering Algorithms

*   **Clustering:** An unsupervised learning technique used to group similar data points together based on their inherent characteristics.  No prior labels are available.

*   **Types of Clustering Algorithms:**
    *   **Partitional Clustering:** Divides the data into non-overlapping clusters.  K-Means is a prime example.
    *   **Hierarchical Clustering:** Creates a hierarchy of clusters, either by successively merging clusters (agglomerative) or splitting clusters (divisive).

## 2. K-Means Clustering (Partitional)

*   **Key Concepts:**
    *   **K:** The number of clusters to be formed. Must be specified beforehand.
    *   **Centroids:** The center points of each cluster. Data points are assigned to the nearest centroid.
    *   **Iteration:** The algorithm iteratively assigns data points to clusters and updates the centroids until convergence (centroids no longer significantly change).
    *   **Objective Function:**  K-Means aims to minimize the within-cluster sum of squares (WCSS), also known as *inertia*.

*   **Algorithm Steps:**
    1.  Choose the number of clusters, K.
    2.  Initialize K centroids (randomly or using smart initialization methods like K-Means++).
    3.  Assign each data point to the nearest centroid based on a distance metric (typically Euclidean distance).
    4.  Recalculate the centroids of each cluster by taking the mean of all data points assigned to that cluster.
    5.  Repeat steps 3 and 4 until convergence.

*   **Implementation (Conceptual Python using scikit-learn):**

    ```python
    from sklearn.cluster import KMeans
    import numpy as np
    import matplotlib.pyplot as plt
    from sklearn.datasets import make_blobs # for generating sample data

    # Generate sample data
    X, y = make_blobs(n_samples=300, centers=4, cluster_std=0.60, random_state=0)

    # Create a KMeans object with K=4
    kmeans = KMeans(n_clusters=4, init='k-means++', max_iter=300, random_state=0)

    # Fit the model to the data
    kmeans.fit(X)

    # Get cluster labels
    labels = kmeans.labels_

    # Get cluster centroids
    centroids = kmeans.cluster_centers_

    # Visualize the clusters
    plt.scatter(X[:, 0], X[:, 1], c=labels, s=50, cmap='viridis')
    plt.scatter(centroids[:, 0], centroids[:, 1], marker='x', s=200, linewidths=3, color='red')
    plt.title('K-Means Clustering')
    plt.xlabel('Feature 1')
    plt.ylabel('Feature 2')
    plt.show()

    # Get inertia
    inertia = kmeans.inertia_
    print(f"Inertia: {inertia}")
    ```

*   **Strengths:**
    *   Simple and easy to implement.
    *   Efficient for large datasets (especially if K is relatively small).

*   **Weaknesses:**
    *   Requires specifying the number of clusters (K) beforehand.
    *   Sensitive to initial centroid placement.
    *   Assumes clusters are spherical and equally sized, which may not always be the case.
    *   Can get stuck in local optima.

## 3. Hierarchical Clustering (Agglomerative)

*   **Key Concepts:**
    *   **Agglomerative:**  Starts with each data point as its own cluster and iteratively merges the closest clusters until only one cluster remains or a specified number of clusters is reached.
    *   **Linkage Criteria:** Defines how the distance between clusters is calculated. Common linkage methods include:
        *   **Single Linkage (Minimum):**  The distance between the closest points in the two clusters.
        *   **Complete Linkage (Maximum):** The distance between the farthest points in the two clusters.
        *   **Average Linkage:** The average distance between all pairs of points in the two clusters.
        *   **Ward Linkage:** Minimizes the variance within clusters.

*   **Algorithm Steps:**
    1.  Start with each data point as a separate cluster.
    2.  Compute the distance between all pairs of clusters.
    3.  Merge the two closest clusters based on the chosen linkage criterion.
    4.  Update the distance matrix to reflect the new cluster.
    5.  Repeat steps 3 and 4 until only one cluster remains or a specified number of clusters is reached.

*   **Dendrogram:**  A tree-like diagram that visualizes the hierarchical clustering process.  The height of the branches represents the distance between clusters at the point of merging.

*   **Implementation (Conceptual Python using scikit-learn):**

    ```python
    from sklearn.cluster import AgglomerativeClustering
    from scipy.cluster.hierarchy import dendrogram
    import matplotlib.pyplot as plt
    import numpy as np
    from sklearn.datasets import make_blobs

    # Generate sample data
    X, y = make_blobs(n_samples=300, centers=4, cluster_std=0.60, random_state=0)


    # Create an AgglomerativeClustering object
    agg_clustering = AgglomerativeClustering(n_clusters=4, linkage='ward')

    # Fit the model to the data
    agg_clustering.fit(X)

    # Get cluster labels
    labels = agg_clustering.labels_

    # Visualize the clusters
    plt.scatter(X[:, 0], X[:, 1], c=labels, s=50, cmap='viridis')
    plt.title('Agglomerative Clustering')
    plt.xlabel('Feature 1')
    plt.ylabel('Feature 2')
    plt.show()

    # Function to plot dendrogram (from scikit-learn documentation)
    def plot_dendrogram(model, **kwargs):
        # Create linkage matrix and then plot the dendrogram

        # Create the counts of samples under each node
        counts = np.zeros(model.children_.shape[0])
        n_samples = len(model.labels_)
        for i, merge in enumerate(model.children_):
            current_count = 0
            for child_idx in merge:
                if child_idx < n_samples:
                    current_count += 1  # leaf node
                else:
                    current_count += counts[child_idx - n_samples]
            counts[i] = current_count

        linkage_matrix = np.column_stack([model.children_, model.distances_,
                                          counts]).astype(float)

        # Plot the corresponding dendrogram
        dendrogram(linkage_matrix, **kwargs)

    # Fit the model again, but without specifying the number of clusters, so we can build the full tree
    model = AgglomerativeClustering(distance_threshold=0, n_clusters=None, linkage='ward') # distance_threshold=0 builds a full tree
    model = model.fit(X)

    plt.title('Hierarchical Clustering Dendrogram')
    # Plot top three levels of the dendrogram
    plot_dendrogram(model, truncate_mode='level', p=3)
    plt.xlabel("Number of points in node (or index of point if no parenthesis).")
    plt.show()
    ```

*   **Strengths:**
    *   Does not require specifying the number of clusters beforehand (if using dendrograms).
    *   Provides a hierarchical structure of clusters, which can be useful for understanding relationships between data points.
    *   Versatile due to the availability of various linkage criteria.

*   **Weaknesses:**
    *   Can be computationally expensive for large datasets (especially for certain linkage methods like complete linkage).
    *   Sensitive to noise and outliers.
    *   Difficult to correct misclassification after a merging decision has been made.

## 4. Clustering Evaluation Metrics

*   **Inertia (Within-Cluster Sum of Squares - WCSS):**
    *   **Definition:** The sum of squared distances of samples to their closest cluster center.
    *   **Interpretation:** Lower inertia indicates better clustering, as data points are closer to their respective centroids.  Inertia is minimized by the K-Means algorithm.
    *   **Limitation:** Inertia decreases as the number of clusters increases, making it unsuitable for directly comparing clustering results with different numbers of clusters.  It is useful, however, for the "elbow method" to find the optimal K for K-Means.
    *   **Applicability:** Primarily used for K-Means clustering.

*   **Silhouette Score:**
    *   **Definition:** Measures how similar a data point is to its own cluster compared to other clusters.
    *   **Formula:**  `s = (b - a) / max(a, b)`
        *   `a`: The average intra-cluster distance (the average distance to all other points in the same cluster).
        *   `b`: The average nearest-cluster distance (the average distance to all points in the *nearest* other cluster).
    *   **Interpretation:**
        *   `+1`: Best value.  Indicates that the data point is well-clustered.
        *   `0`: Indicates that the data point is on or very close to a decision boundary between two clusters.
        *   `-1`: Worst value.  Indicates that the data point might be assigned to the wrong cluster.
    *   **Range:** -1 to +1
    *   **Applicability:** Can be used for both K-Means and hierarchical clustering.  Provides a more nuanced evaluation than inertia.

*   **Clustering Visualization:**
    *   **Purpose:** Visually assess the quality of the clustering results.
    *   **Techniques:**
        *   **Scatter Plots:** Plotting the data points with different colors representing different clusters. Useful for 2D or 3D data.
        *   **Dendrograms (Hierarchical Clustering):** Visualizing the hierarchy of clusters.
        *   **Principal Component Analysis (PCA) or t-distributed Stochastic Neighbor Embedding (t-SNE):** Reducing the dimensionality of the data before plotting, allowing visualization of higher-dimensional data.
    *   **Interpretation:**  Look for well-separated clusters with minimal overlap.

*   **Implementation (Conceptual Python using scikit-learn):**

    ```python
    from sklearn.metrics import silhouette_score
    from sklearn.cluster import KMeans, AgglomerativeClustering
    import numpy as np
    from sklearn.datasets import make_blobs

    # Generate sample data
    X, y = make_blobs(n_samples=300, centers=4, cluster_std=0.60, random_state=0)

    # K-Means Clustering
    kmeans = KMeans(n_clusters=4, init='k-means++', max_iter=300, random_state=0)
    kmeans.fit(X)
    kmeans_labels = kmeans.labels_
    kmeans_inertia = kmeans.inertia_
    kmeans_silhouette = silhouette_score(X, kmeans_labels)

    print(f"K-Means Inertia: {kmeans_inertia}")
    print(f"K-Means Silhouette Score: {kmeans_silhouette}")

    # Hierarchical Clustering
    agg_clustering = AgglomerativeClustering(n_clusters=4, linkage='ward')
    agg_clustering.fit(X)
    agg_labels = agg_clustering.labels_
    agg_silhouette = silhouette_score(X, agg_labels)

    print(f"Agglomerative Clustering Silhouette Score: {agg_silhouette}")

    #Visualization example (using the earlier scatter plot from examples above)
    #You can reuse the code blocks from the K-Means and Agglomerative Clustering examples
    #to generate the scatter plots.  Just ensure the matplotlib.pyplot library has been imported.
    ```

## 5. Comparing K-Means and Hierarchical Clustering

| Feature            | K-Means                                   | Hierarchical (Agglomerative)                      |
| ------------------ | ----------------------------------------- | ------------------------------------------------- |
| Number of Clusters | Requires specifying K beforehand           | Can be determined by dendrogram or stopping criteria  |
| Cluster Shape      | Assumes spherical clusters                  | More flexible; can handle non-spherical clusters |
| Scalability        | More scalable to large datasets           | Can be computationally expensive for large datasets |
| Sensitivity to Init. | Sensitive to initial centroid placement   | Less sensitive to initialization                  |
| Interpretability   | Relatively easy to interpret             | Dendrogram provides hierarchical insights        |
| Memory Usage       | Lower memory footprint                    | Higher memory footprint                             |

*   **When to Use K-Means:**
    *   When the number of clusters is known or can be estimated.
    *   When the data is relatively large.
    *   When clusters are expected to be roughly spherical.

*   **When to Use Hierarchical Clustering:**
    *   When the number of clusters is unknown and a hierarchical structure is desired.
    *   When the dataset is relatively small.
    *   When clusters are expected to have complex shapes.
    *   When interpretability of cluster relationships is important.

## 6. Choosing the Appropriate Algorithm

*   **Data Exploration:** Before applying any clustering algorithm, it's crucial to explore the data to understand its characteristics, such as:
    *   Number of data points
    *   Number of features
    *   Distribution of data points
    *   Presence of outliers

*   **Considerations:**
    *   **Business Understanding:**  What are you trying to achieve with clustering? Are there any prior assumptions about the data?
    *   **Computational Resources:** Do you have the computational resources to run more complex algorithms like hierarchical clustering on a large dataset?
    *   **Interpretability:**  Is it important to understand the relationships between clusters?
    *   **Experimentation:** Try both K-Means and hierarchical clustering and compare the results using appropriate evaluation metrics and visualizations.

## 7. Important Points to Remember

*   Clustering is an unsupervised learning technique; there are no "right" answers.
*   The choice of clustering algorithm depends on the dataset, the desired outcome, and the available resources.
*   Evaluation metrics like inertia and silhouette score can help assess the quality of the clustering results.
*   Visualization is a valuable tool for understanding the clusters and identifying potential issues.
*   Preprocessing steps (e.g., scaling, normalization) can significantly impact the performance of clustering algorithms.
*   Always consider the context of the problem and the business goals when interpreting clustering results.
*   Consider using domain knowledge to inform your choices of algorithm, parameters, and evaluation metrics.

## 8. Practice Questions/Exercises

**Question 1:**  What is the main difference between partitional and hierarchical clustering algorithms?

**Answer:** Partitional clustering divides the data into non-overlapping clusters, while hierarchical clustering creates a hierarchy of clusters.

**Question 2:**  What does a high silhouette score indicate?

**Answer:** A high silhouette score (close to +1) indicates that the data point is well-clustered and similar to other points in its own cluster, while being dissimilar to points in other clusters.

**Question 3:** What is inertia in the context of K-Means? How does increasing K affect the inertia?

**Answer:** Inertia is the sum of squared distances of samples to their closest cluster center. Increasing the number of clusters (K) will generally *decrease* the inertia, as data points will be closer to a centroid.

**Question 4:** When might you choose Agglomerative clustering over K-Means?

**Answer:** When you do not know the number of clusters beforehand, desire a hierarchical representation of the data, or when clusters are not expected to be spherical.

**Question 5:** Implement K-Means clustering on a sample dataset (e.g., using `make_blobs`) with K=3. Calculate the inertia and silhouette score.  Then, visualize the clusters.

**Answer (Conceptual):**  Refer to the code examples provided earlier in the notes.  You will need to adapt the code to use `n_clusters=3`. Ensure you import necessary libraries and generate or load appropriate data.
