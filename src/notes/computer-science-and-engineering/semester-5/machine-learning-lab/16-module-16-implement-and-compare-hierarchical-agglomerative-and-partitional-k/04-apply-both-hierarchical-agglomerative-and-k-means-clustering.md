---
title: "Apply both hierarchical (agglomerative) and K-means clustering."
subject: "MACHINE LEARNING LAB"
module: "Module 16: Implement and compare hierarchical (agglomerative) and partitional (K"
branch: "Computer Science and Engineering"
semester: 5
topicId: "684162770fc9aa1fdbc8b999"
status: "completed"
scrapedAt: "2026-05-20T16:48:01.891Z"
---
## MACHINE LEARNING LAB - Module 16: Clustering - Hierarchical (Agglomerative) vs. K-Means

**Topic: Applying Hierarchical (Agglomerative) and K-Means Clustering**

**Learning Outcomes:**

*   Understand the principles and mechanisms of hierarchical (agglomerative) and K-Means clustering algorithms.
*   Implement hierarchical (agglomerative) clustering using Python libraries.
*   Implement K-Means clustering using Python libraries.
*   Compare and contrast hierarchical and K-Means clustering algorithms based on performance, scalability, and application scenarios.
*   Evaluate the effectiveness of clustering using appropriate metrics.
*   Apply appropriate pre-processing techniques for clustering.

---

**1. Introduction to Clustering**

*   **Definition:** Clustering is an unsupervised machine learning technique that groups similar data points together into clusters. The goal is to maximize similarity within clusters and minimize similarity between clusters.

*   **Types of Clustering:**
    *   **Partitional Clustering:** Divides data points into non-overlapping clusters. Each data point belongs to exactly one cluster.  Examples include K-Means and K-Medoids.
    *   **Hierarchical Clustering:** Creates a hierarchical representation of the data where clusters are nested within each other. It can be agglomerative (bottom-up) or divisive (top-down).

*   **Applications of Clustering:**
    *   **Customer Segmentation:** Grouping customers based on purchasing behavior.
    *   **Image Segmentation:** Dividing an image into distinct regions.
    *   **Document Clustering:** Grouping documents based on content.
    *   **Anomaly Detection:** Identifying unusual data points that do not belong to any cluster.

---

**2. Hierarchical (Agglomerative) Clustering**

*   **Principle:** Agglomerative clustering starts with each data point as a single cluster and iteratively merges the closest clusters until a single cluster remains or a stopping criterion is met.  It builds a hierarchy of clusters, often represented as a dendrogram.

*   **Mechanism:**
    1.  **Initialization:**  Each data point is considered a separate cluster.
    2.  **Similarity/Distance Calculation:** Calculate the distance (or similarity) between all pairs of clusters.  Common distance metrics include:
        *   **Euclidean Distance:** The straight-line distance between two points.
        *   **Manhattan Distance:** The sum of the absolute differences of the coordinates.
        *   **Cosine Similarity:** Measures the cosine of the angle between two vectors.
    3.  **Merging:**  Merge the two closest clusters based on a linkage criterion.
    4.  **Update:** Update the distance matrix to reflect the newly formed cluster.
    5.  **Iteration:** Repeat steps 3 and 4 until all data points belong to a single cluster or the desired number of clusters is reached.

*   **Linkage Criteria:** Defines how the distance between two clusters is calculated.  Common linkage criteria include:
    *   **Single Linkage (Nearest Neighbor):** The distance between the closest points in the two clusters. Prone to chaining, forming long, straggly clusters.
    *   **Complete Linkage (Furthest Neighbor):** The distance between the furthest points in the two clusters.  More resistant to noise and outliers, but may split large clusters.
    *   **Average Linkage:** The average distance between all pairs of points in the two clusters. A good compromise between single and complete linkage.
    *   **Ward's Linkage:** Minimizes the variance within the clusters being merged. Tends to produce more compact clusters.

*   **Dendrogram:** A tree-like diagram that visually represents the hierarchy of clusters. The height of each branch represents the distance between the clusters that were merged.

*   **Implementation (Python):**

    ```python
    import numpy as np
    import matplotlib.pyplot as plt
    from sklearn.cluster import AgglomerativeClustering
    from scipy.cluster.hierarchy import dendrogram, linkage

    # Sample Data
    X = np.array([[1, 2], [1.5, 1.8], [5, 8], [8, 8], [1, 0.6], [9, 11]])

    # 1. Using AgglomerativeClustering from sklearn
    agg_clustering = AgglomerativeClustering(n_clusters=2, linkage='ward') # Or 'single', 'complete', 'average'
    agg_clustering.fit(X)
    labels = agg_clustering.labels_

    print("Agglomerative Clustering Labels:", labels)

    # Plotting the results
    plt.scatter(X[:,0], X[:,1], c=labels, cmap='viridis')
    plt.title("Agglomerative Clustering")
    plt.xlabel("Feature 1")
    plt.ylabel("Feature 2")
    plt.show()

    # 2.  Building and plotting a dendrogram using scipy
    linked = linkage(X, 'ward')  # linkage methods: 'ward', 'single', 'complete', 'average'

    plt.figure(figsize=(10, 7))
    dendrogram(linked,
                orientation='top',
                labels=None,
                distance_sort='descending',
                show_leaf_counts=True)
    plt.title("Dendrogram")
    plt.xlabel("Sample Index")
    plt.ylabel("Distance")
    plt.show()
    ```

*   **Advantages:**
    *   Provides a hierarchical representation of the data.
    *   Does not require specifying the number of clusters beforehand (though you typically *extract* a specific number of clusters from the dendrogram).
    *   Can reveal underlying relationships and structures in the data.

*   **Disadvantages:**
    *   Can be computationally expensive, especially for large datasets (complexity can be O(n^3)).
    *   Sensitive to noise and outliers.
    *   Difficult to handle non-convex clusters.
    *   Once a merge happens, it cannot be undone.

---

**3. K-Means Clustering**

*   **Principle:** K-Means aims to partition the data into K clusters, where each data point belongs to the cluster with the nearest mean (centroid).

*   **Mechanism:**
    1.  **Initialization:** Randomly select K data points as initial centroids.
    2.  **Assignment:** Assign each data point to the closest centroid based on a distance metric (typically Euclidean distance).
    3.  **Update:** Recalculate the centroids as the mean of all data points assigned to that cluster.
    4.  **Iteration:** Repeat steps 2 and 3 until the centroids no longer change significantly or a maximum number of iterations is reached.

*   **Choosing K (Number of Clusters):**
    *   **Elbow Method:** Plot the within-cluster sum of squares (WCSS) for different values of K. The "elbow" point in the plot represents the optimal value of K.
    *   **Silhouette Score:** Measures how well each data point fits into its cluster.  Higher silhouette scores indicate better clustering.
    *   **Domain Knowledge:** The best choice for K is often guided by understanding of the data and the problem being addressed.

*   **Implementation (Python):**

    ```python
    import numpy as np
    import matplotlib.pyplot as plt
    from sklearn.cluster import KMeans
    from sklearn.metrics import silhouette_score

    # Sample Data
    X = np.array([[1, 2], [1.5, 1.8], [5, 8], [8, 8], [1, 0.6], [9, 11]])

    # 1. K-Means Clustering
    kmeans = KMeans(n_clusters=2, random_state=0, n_init=10)  # n_init specifies the number of times the k-means algorithm will be run with different centroid seeds.
    kmeans.fit(X)
    labels = kmeans.labels_
    centroids = kmeans.cluster_centers_

    print("K-Means Labels:", labels)
    print("Centroids:", centroids)

    # Plotting the results
    plt.scatter(X[:,0], X[:,1], c=labels, cmap='viridis')
    plt.scatter(centroids[:,0], centroids[:,1], marker='x', s=200, color='red')
    plt.title("K-Means Clustering")
    plt.xlabel("Feature 1")
    plt.ylabel("Feature 2")
    plt.show()

    # 2. Elbow Method for choosing K
    wcss = []
    for i in range(1, 11):
        kmeans = KMeans(n_clusters=i, random_state=0, n_init=10)
        kmeans.fit(X)
        wcss.append(kmeans.inertia_)  # Inertia: Sum of squared distances of samples to their closest cluster center

    plt.plot(range(1, 11), wcss)
    plt.title('Elbow Method')
    plt.xlabel('Number of clusters')
    plt.ylabel('WCSS')
    plt.show()

    # 3. Silhouette Score for choosing K
    silhouette_scores = []
    for i in range(2, 11):
      kmeans = KMeans(n_clusters=i, random_state=0, n_init=10)
      labels = kmeans.fit_predict(X)
      silhouette_scores.append(silhouette_score(X, labels))

    plt.plot(range(2,11), silhouette_scores)
    plt.title('Silhouette Score for Optimal K')
    plt.xlabel('Number of Clusters')
    plt.ylabel('Silhouette Score')
    plt.show()
    ```

*   **Advantages:**
    *   Simple and easy to implement.
    *   Scalable to large datasets (complexity is approximately O(n*k*i), where n is the number of data points, k is the number of clusters, and i is the number of iterations).
    *   Guaranteed to converge (though not necessarily to the global optimum).

*   **Disadvantages:**
    *   Requires specifying the number of clusters (K) beforehand.
    *   Sensitive to initial centroid positions.  Running the algorithm multiple times with different initializations can help.
    *   Assumes clusters are spherical and equally sized.  Performs poorly on non-convex clusters or clusters with varying densities.
    *   Sensitive to outliers.
    *   All features are considered equally important.

---

**4. Comparison of Hierarchical (Agglomerative) and K-Means Clustering**

| Feature           | Hierarchical (Agglomerative) | K-Means                |
|-------------------|-----------------------------|-------------------------|
| **Cluster Structure** | Hierarchical              | Partitional           |
| **Number of Clusters** | Not required (but usually selected from dendrogram) | Required                |
| **Computational Complexity** | O(n^3) (for basic implementations) | O(n*k*i)               |
| **Scalability**       | Lower                       | Higher                  |
| **Cluster Shape**      | Flexible                    | Assumes spherical clusters |
| **Sensitivity to Noise** | Higher                      | Moderate                 |
| **Output**          | Dendrogram                 | Cluster Assignments       |
| **Initialization**     | No initialization required  | Requires initial centroids |

*   **When to Use Which:**
    *   **Hierarchical:**  Use when you want to explore the data structure and are not sure about the number of clusters, or when you need a hierarchical representation. Good for smaller datasets.
    *   **K-Means:** Use when you have a good idea of the number of clusters, require fast clustering, and the clusters are expected to be spherical.  Good for larger datasets.

---

**5. Pre-processing for Clustering**

*   **Why Pre-process?**  Clustering algorithms are sensitive to the scale of the features and the presence of outliers.  Pre-processing can improve the quality of the clustering results.

*   **Common Techniques:**
    *   **Data Cleaning:** Handle missing values and remove duplicate data points.
    *   **Feature Scaling:**
        *   **Standardization (Z-score normalization):** Scales features to have a mean of 0 and a standard deviation of 1.  Useful when features have different units and ranges.
        *   **Min-Max Scaling:** Scales features to a range between 0 and 1.  Useful when you need to preserve the original distribution of the data.
    *   **Outlier Removal:** Identify and remove outliers that can distort the clustering results.  Techniques include:
        *   **Z-score:** Remove data points with a Z-score above a certain threshold (e.g., 3).
        *   **IQR (Interquartile Range):** Remove data points outside the range of Q1 - 1.5 * IQR and Q3 + 1.5 * IQR.
    *   **Dimensionality Reduction (Optional):**  Reduce the number of features using techniques like Principal Component Analysis (PCA) if there are many features and/or high multicollinearity.

*   **Example (Python):**

    ```python
    import numpy as np
    from sklearn.preprocessing import StandardScaler, MinMaxScaler
    from scipy import stats

    # Sample Data
    X = np.array([[1, 2], [1.5, 1.8], [5, 8], [8, 8], [1, 0.6], [9, 11], [20,200]]) #Including Outlier

    # 1. Standardization
    scaler = StandardScaler()
    X_scaled = scaler.fit_transform(X)
    print("Standardized Data:\n", X_scaled)

    # 2. Min-Max Scaling
    minmax_scaler = MinMaxScaler()
    X_minmax = minmax_scaler.fit_transform(X)
    print("Min-Max Scaled Data:\n", X_minmax)

    # 3. Outlier Removal (Z-score)
    z = np.abs(stats.zscore(X))
    threshold = 2 #Can adjust the threshold
    X_no_outliers = X[(z < threshold).all(axis=1)]

    print("Original Data Shape:", X.shape)
    print("Data Shape after Outlier Removal:", X_no_outliers.shape)

    ```

---

**6. Evaluating Clustering Performance**

*   Since clustering is an unsupervised technique, it's challenging to have ground truth labels for evaluation.  Therefore, we use internal validation measures to assess the quality of the clusters.

*   **Internal Validation Metrics:**
    *   **Silhouette Score:** (Mentioned earlier) Measures how similar a data point is to its own cluster compared to other clusters.  Ranges from -1 to 1.  Higher values indicate better clustering.

    *   **Davies-Bouldin Index:** Measures the average similarity ratio of each cluster with its most similar cluster. Lower values indicate better clustering (less separation between clusters).

    *   **Calinski-Harabasz Index:** Measures the ratio of between-cluster variance to within-cluster variance.  Higher values indicate better clustering.

*   **External Validation Metrics (Less Common):** Used when ground truth labels *are* available. Examples include:
    *   **Adjusted Rand Index (ARI):** Measures the similarity between the clustering result and the ground truth labels, corrected for chance.
    *   **Normalized Mutual Information (NMI):** Measures the mutual information between the clustering result and the ground truth labels, normalized to a range between 0 and 1.

*   **Implementation (Python):**

    ```python
    import numpy as np
    from sklearn.cluster import KMeans
    from sklearn.metrics import silhouette_score, davies_bouldin_score, calinski_harabasz_score

    # Sample Data
    X = np.array([[1, 2], [1.5, 1.8], [5, 8], [8, 8], [1, 0.6], [9, 11]])

    # K-Means Clustering
    kmeans = KMeans(n_clusters=2, random_state=0, n_init=10)
    labels = kmeans.fit_predict(X)

    # Evaluation Metrics
    silhouette = silhouette_score(X, labels)
    db_index = davies_bouldin_score(X, labels)
    ch_index = calinski_harabasz_score(X, labels)

    print("Silhouette Score:", silhouette)
    print("Davies-Bouldin Index:", db_index)
    print("Calinski-Harabasz Index:", ch_index)
    ```

---

**7. Important Points to Remember**

*   **Data Pre-processing is Crucial:** Scale your data and handle outliers.
*   **Choose the Right Algorithm:** Consider the characteristics of your data and the goals of your analysis when selecting between hierarchical and K-Means clustering.
*   **Evaluate Your Results:** Use internal validation metrics to assess the quality of your clusters.
*   **Interpret the Clusters:**  After clustering, analyze the characteristics of each cluster to understand what differentiates them.
*   **Consider Multiple Runs:** K-Means is sensitive to initialization. Run it multiple times with different initial random states and pick the best result.
*   **Linkage Matters:** Experiment with different linkage methods in agglomerative clustering.

---

**8. Practice Questions/Exercises**

1.  **Question:** Explain the difference between partitional and hierarchical clustering. Provide an example of each.
    *   **Answer:** Partitional clustering divides the data into non-overlapping clusters (e.g., K-Means). Hierarchical clustering creates a nested hierarchy of clusters (e.g., Agglomerative clustering).

2.  **Question:**  What are the different linkage criteria used in agglomerative clustering?  Describe how each criterion calculates the distance between clusters.
    *   **Answer:** Single linkage (nearest neighbor), Complete linkage (furthest neighbor), Average linkage, and Ward's linkage.  See explanations above in Section 2.

3.  **Question:**  How do you choose the optimal value of K in K-Means clustering?
    *   **Answer:** Elbow Method, Silhouette Score, and domain knowledge.

4.  **Question:**  Why is feature scaling important before applying clustering algorithms?
    *   **Answer:** Clustering algorithms are sensitive to the scale of the features. Feature scaling ensures that all features contribute equally to the distance calculations.

5.  **Question:** Implement K-means clustering on the following data using python: `data = [[1,2],[1.5,1.8],[5,8],[8,8],[1,0.6],[9,11]]`. Use `K=3`.

    ```python
    import numpy as np
    from sklearn.cluster import KMeans
    import matplotlib.pyplot as plt

    data = np.array([[1, 2], [1.5, 1.8], [5, 8], [8, 8], [1, 0.6], [9, 11]])
    kmeans = KMeans(n_clusters=3, random_state=0, n_init = 'auto') #set random_state for consistent results
    kmeans.fit(data)

    labels = kmeans.labels_
    centroids = kmeans.cluster_centers_

    print("Cluster Labels:", labels)
    print("Centroids:", centroids)

    plt.scatter(data[:,0], data[:,1], c=labels, cmap='viridis')
    plt.scatter(centroids[:,0], centroids[:,1], marker='x', s=200, color='red')
    plt.title("K-Means Clustering (K=3)")
    plt.xlabel("Feature 1")
    plt.ylabel("Feature 2")
    plt.show()
    ```

6. **Question:** Given a dataset with known cluster labels, how would you evaluate the performance of your clustering algorithm?
 * **Answer**: Use external validation metrics like Adjusted Rand Index (ARI) or Normalized Mutual Information (NMI)

7.  **Question:** What are the advantages and disadvantages of Hierarchical clustering compared to K-Means?

*   **Answer:** (Refer to the comparison table in Section 4).

These detailed notes provide a comprehensive understanding of hierarchical (agglomerative) and K-Means clustering, including their principles, implementation, comparison, and evaluation. They also cover the importance of data pre-processing and provide relevant examples and practice questions to reinforce learning. Remember to experiment with different datasets, parameters, and evaluation metrics to gain a deeper understanding of these clustering algorithms.
