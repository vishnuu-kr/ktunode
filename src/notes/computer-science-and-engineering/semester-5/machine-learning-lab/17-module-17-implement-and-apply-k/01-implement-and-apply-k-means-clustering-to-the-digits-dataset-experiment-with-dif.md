---
title: "Implement and apply K-means clustering to the Digits dataset. Experiment with different numbers of clusters and evaluate the clustering results using metrics such as inertia and silhouette score. Analyze how the choice of K affects clustering performance."
subject: "MACHINE LEARNING LAB"
module: "Module 17: Implement and apply K"
branch: "Computer Science and Engineering"
semester: 5
topicId: "684162770fc9aa1fdbc8b99d"
status: "completed"
scrapedAt: "2026-05-20T16:48:04.072Z"
---
# MACHINE LEARNING LAB - Module 17: Implement and Apply K-Means Clustering

## Topic: Implement and apply K-means clustering to the Digits dataset. Experiment with different numbers of clusters and evaluate the clustering results using metrics such as inertia and silhouette score. Analyze how the choice of K affects clustering performance.

### Learning Outcomes:

*   Understand the K-means clustering algorithm and its implementation.
*   Apply K-means clustering to the Digits dataset.
*   Experiment with different values of *K* (number of clusters).
*   Evaluate clustering performance using Inertia and Silhouette Score.
*   Analyze the impact of the choice of *K* on clustering performance.

### 1. Introduction to K-Means Clustering

*   **Definition:** K-means clustering is an unsupervised learning algorithm that aims to partition *n* observations into *k* clusters, where each observation belongs to the cluster with the nearest mean (cluster center or centroid), serving as a prototype of the cluster.

*   **Key Concepts:**
    *   **Unsupervised Learning:**  Learning from unlabeled data, aiming to discover hidden patterns.
    *   **Centroids:** The mean of the data points in a cluster.
    *   **Distance Metric:**  A measure to determine the similarity or dissimilarity between data points.  Common choices include Euclidean distance, Manhattan distance, and Cosine similarity. Euclidean distance is most common for K-Means.
    *   **Iteration:** K-means iteratively refines cluster assignments and centroid locations until convergence.
    *   **Convergence:**  The algorithm is considered to have converged when the cluster assignments no longer change significantly or when a predefined maximum number of iterations is reached.

*   **Algorithm Steps:**
    1.  **Initialization:** Randomly select *k* initial centroids.
    2.  **Assignment Step:** Assign each data point to the nearest centroid based on the chosen distance metric.
    3.  **Update Step:** Recalculate the centroids by taking the mean of all data points assigned to each cluster.
    4.  **Iteration:** Repeat steps 2 and 3 until the centroids no longer change significantly or a maximum number of iterations is reached.

*   **Assumptions:**
    *   Clusters are spherical and equally sized.
    *   Clusters are well-separated.

### 2. The Digits Dataset

*   **Description:**  The Digits dataset is a collection of 1797 handwritten digits (0-9), each represented by an 8x8 image (64 features).
*   **Source:** Available in scikit-learn (`sklearn.datasets`).
*   **Usage:** A popular dataset for practicing classification and clustering tasks.
*   **Loading the Dataset:**
    ```python
    from sklearn.datasets import load_digits
    digits = load_digits()
    X = digits.data # Feature matrix
    y = digits.target # Target labels (actual digit values)
    ```

### 3. Implementing K-Means Clustering on the Digits Dataset

*   **Using scikit-learn:**
    ```python
    from sklearn.cluster import KMeans
    from sklearn.metrics import silhouette_score, davies_bouldin_score
    import matplotlib.pyplot as plt

    # Choose the number of clusters (K) - Experiment with different values!
    k = 10 # Since there are 10 digits (0-9)

    # Create a KMeans object
    kmeans = KMeans(n_clusters=k, init='k-means++', max_iter=300, n_init=10, random_state=42)  #n_init is set to silence a warning and represents the number of times the k-means algorithm will be run with different centroid seeds.

    # Fit the model to the data
    kmeans.fit(X)

    # Get cluster labels for each data point
    labels = kmeans.labels_

    # Get the cluster centroids
    centroids = kmeans.cluster_centers_

    # Print some information
    print(f"Cluster labels: {labels}")
    print(f"Centroids shape: {centroids.shape}")
    ```

*   **Explanation:**
    *   `KMeans(n_clusters=k)`:  Creates a K-Means object with *k* clusters.
    *   `kmeans.fit(X)`:  Fits the K-Means model to the data *X*.
    *   `kmeans.labels_`:  Returns the cluster labels assigned to each data point.
    *   `kmeans.cluster_centers_`: Returns the coordinates of the cluster centroids.
    *   `n_init='auto'`: automatically chooses `n_init` based on the data size

*   **Visualizing Clusters (Optional):**  You can visualize the cluster centroids by reshaping them into 8x8 images.

    ```python
    # Visualize the centroids
    fig, axes = plt.subplots(2, 5, figsize=(8, 3))
    for i, ax in enumerate(axes.flat):
        ax.imshow(centroids[i].reshape(8, 8), cmap='gray')
        ax.set_xticks([])
        ax.set_yticks([])
        ax.set_title(f"Cluster {i}")
    plt.show()
    ```

### 4. Evaluating Clustering Performance

*   **Metrics:**

    *   **Inertia (Within-Cluster Sum of Squares - WCSS):**
        *   **Definition:** The sum of squared distances of samples to their closest cluster center.
        *   **Interpretation:**  Lower inertia indicates better clustering, as data points are closer to their respective centroids.
        *   **Calculation:**  `kmeans.inertia_`
        *   **Limitation:** Inertia tends to decrease as *k* increases, making it difficult to directly compare results across different values of *k*.
        *   **Example:**  If inertia is 1000 for k=5 and 500 for k=10, it doesn't necessarily mean k=10 is better.

    *   **Silhouette Score:**
        *   **Definition:**  Measures how well each data point fits within its assigned cluster.
        *   **Range:** -1 to 1.
        *   **Interpretation:**
            *   Values close to 1 indicate that the data point is well-clustered.
            *   Values close to 0 indicate that the data point is close to a cluster boundary.
            *   Negative values indicate that the data point might be assigned to the wrong cluster.
        *   **Calculation:** `silhouette_score(X, labels)`
        *   **Formula:**  (b - a) / max(a, b), where:
            *   a is the mean intra-cluster distance (average distance to all other points in the same cluster).
            *   b is the mean nearest-cluster distance (average distance to all points in the nearest cluster).
        *   **Advantages:** Provides a more nuanced evaluation than inertia and considers both cohesion (within-cluster similarity) and separation (between-cluster dissimilarity).

    *   **Davies-Bouldin Index:**
        *   **Definition:** Measures the average similarity ratio of each cluster with its most similar cluster.  Lower values indicate better clustering, with clusters being well-separated and compact.
        *   **Calculation:** `davies_bouldin_score(X, labels)`
        *   **Interpretation:** A lower Davies-Bouldin index signifies better clustering.
        *   **Less Common:** While useful, it's less frequently used than Inertia and Silhouette Score, especially for introductory purposes.

*   **Code Example:**
    ```python
    from sklearn.metrics import silhouette_score, davies_bouldin_score

    # Calculate Inertia
    inertia = kmeans.inertia_
    print(f"Inertia: {inertia}")

    # Calculate Silhouette Score
    silhouette = silhouette_score(X, labels)
    print(f"Silhouette Score: {silhouette}")

    # Calculate Davies-Bouldin Index
    db_index = davies_bouldin_score(X, labels)
    print(f"Davies-Bouldin Index: {db_index}")
    ```

### 5. Analyzing the Impact of K on Clustering Performance

*   **The Elbow Method (for choosing K):**
    *   **Procedure:**
        1.  Run K-means for a range of *K* values (e.g., 1 to 20).
        2.  Calculate the inertia for each *K*.
        3.  Plot the inertia values against the corresponding *K* values.
        4.  Look for the "elbow" point in the plot, where the rate of decrease in inertia starts to slow down. This point suggests a good balance between minimizing inertia and avoiding overfitting (too many clusters).

    *   **Code Example:**
        ```python
        inertia = []
        silhouette_scores = []
        davies_bouldin_indices = []
        K_range = range(2, 21) #Try K from 2 to 20

        for k in K_range:
            kmeans = KMeans(n_clusters=k, init='k-means++', max_iter=300, n_init=10, random_state=42)
            kmeans.fit(X)
            labels = kmeans.labels_
            inertia.append(kmeans.inertia_)
            silhouette_scores.append(silhouette_score(X, labels))
            davies_bouldin_indices.append(davies_bouldin_score(X, labels))


        # Plot Inertia
        plt.figure(figsize=(12, 6))
        plt.subplot(1, 3, 1)
        plt.plot(K_range, inertia, marker='o')
        plt.xlabel("Number of Clusters (K)")
        plt.ylabel("Inertia")
        plt.title("Elbow Method for Optimal K")

        #Plot Silhouette Score
        plt.subplot(1, 3, 2)
        plt.plot(K_range, silhouette_scores, marker='o')
        plt.xlabel("Number of Clusters (K)")
        plt.ylabel("Silhouette Score")
        plt.title("Silhouette Score vs. K")

        #Plot Davies-Bouldin Index
        plt.subplot(1, 3, 3)
        plt.plot(K_range, davies_bouldin_indices, marker='o')
        plt.xlabel("Number of Clusters (K)")
        plt.ylabel("Davies-Bouldin Index")
        plt.title("Davies-Bouldin Index vs. K")

        plt.tight_layout()
        plt.show()
        ```

*   **Interpreting the Results:**
    *   **Inertia:** As *K* increases, inertia will generally decrease. The goal is to find a *K* where adding more clusters provides diminishing returns in terms of reducing inertia.
    *   **Silhouette Score:**  Look for the *K* value that maximizes the silhouette score.  A higher silhouette score indicates better-defined clusters. Note that this score may not always correlate perfectly with the ground truth (actual digit labels).
    *   **Davies-Bouldin Index:** Look for the *K* value that minimizes the Davies-Bouldin Index. A lower score indicates better clustering.
    *   **Ground Truth:** In this case, you have the actual digit labels (`y`). While K-Means is unsupervised, you can compare the cluster assignments to the ground truth to assess the purity of the clusters. However, it's important to remember that K-Means might not perfectly align with the actual digit classes.  You might have a cluster containing mostly '0's but also some '6's.  Metrics like purity and adjusted rand index (ARI) can be used to compare cluster labels to ground truth.

*   **Choosing the Optimal K:** The optimal *K* will depend on the dataset and the specific goals of the clustering task. Consider the following factors:
    *   The elbow point in the inertia plot.
    *   The value of *K* that maximizes the silhouette score.
    *   The value of *K* that minimizes the Davies-Bouldin Index
    *   The interpretability of the resulting clusters.
    *   Comparison to the ground truth labels, if available (using metrics like purity or ARI).

### 6. Important Points to Remember

*   **Scaling Data:** K-Means is sensitive to the scale of the features.  It's generally recommended to scale your data using `StandardScaler` or `MinMaxScaler` before applying K-Means.
*   **Random Initialization:** K-Means uses random initialization of centroids. This can lead to different clustering results on different runs.  The `n_init` parameter controls how many times the algorithm is run with different initial centroid seeds.
*   **Local Optima:** K-Means can get stuck in local optima. Running the algorithm multiple times with different initializations can help to mitigate this problem.
*   **Choosing K:**  The choice of *K* is a critical parameter. Use the elbow method, silhouette score, Davies-Bouldin Index, and domain knowledge to guide your selection.
*   **Unsupervised Nature:** K-Means is an unsupervised algorithm. It does not use labels during training. You can use labels *after* clustering to evaluate the results.

### 7. Practice Questions & Exercises

1.  **Code:** Load the Digits dataset and apply K-means clustering with K=5. Print the inertia and silhouette score.
    *   **Answer:** See the code examples above.  Just change `k = 5`

2.  **Conceptual:** Explain the difference between inertia and silhouette score in the context of K-means clustering.
    *   **Answer:** Inertia measures the sum of squared distances of samples to their closest cluster center.  A lower inertia is desirable. Silhouette score measures how well each data point fits within its assigned cluster, ranging from -1 to 1, with values closer to 1 indicating better clustering.

3.  **Analysis:** Run K-means clustering on the Digits dataset for K values ranging from 2 to 15. Plot the inertia and silhouette score as a function of K. What is the optimal K according to the elbow method? What is the optimal K according to the silhouette score?  Do they agree?  Why or why not?
    *   **Answer:**  The elbow method will involve visually inspecting the plot and identifying the "elbow". The silhouette score will involve finding the K with the highest score. They may not agree because they capture different aspects of clustering performance.

4.  **Implementation:**  Modify the code to use `MinMaxScaler` to scale the Digits data before applying K-means.  Does this significantly affect the inertia and silhouette score? Why?
    *   **Answer:**
        ```python
        from sklearn.preprocessing import MinMaxScaler

        #Scale the data
        scaler = MinMaxScaler()
        X_scaled = scaler.fit_transform(X)


        #Choose the number of clusters (K) - Experiment with different values!
        k = 10 # Since there are 10 digits (0-9)

        # Create a KMeans object
        kmeans = KMeans(n_clusters=k, init='k-means++', max_iter=300, n_init=10, random_state=42)  #n_init is set to silence a warning and represents the number of times the k-means algorithm will be run with different centroid seeds.

        # Fit the model to the data
        kmeans.fit(X_scaled)

        # Get cluster labels for each data point
        labels = kmeans.labels_


        # Calculate Inertia
        inertia = kmeans.inertia_
        print(f"Inertia: {inertia}")

        # Calculate Silhouette Score
        silhouette = silhouette_score(X_scaled, labels)  #Pass scaled data to the silhouette score
        print(f"Silhouette Score: {silhouette}")
        ```
        Scaling *will* affect the scores. K-Means uses distance calculations, and the scale of the features can disproportionately influence these calculations. Scaling ensures that all features contribute equally to the distance metric.

5. **Conceptual:** What are some limitations of K-means clustering?
   * **Answer:** Assumptions about spherical clusters, sensitivity to initial centroids, difficulty handling non-globular shapes, needs K specified upfront, and sensitivity to outliers.

### 8. Further Exploration

*   Explore other clustering algorithms such as hierarchical clustering, DBSCAN, and Gaussian Mixture Models.
*   Investigate different distance metrics and their impact on K-means clustering.
*   Apply K-means clustering to other datasets and compare the results.
*   Learn about advanced clustering evaluation metrics such as purity and adjusted rand index (ARI).
