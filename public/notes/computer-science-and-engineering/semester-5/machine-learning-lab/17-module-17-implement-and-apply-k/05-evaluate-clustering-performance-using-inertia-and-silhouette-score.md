---
title: "Evaluate clustering performance using inertia and silhouette score."
subject: "MACHINE LEARNING LAB"
module: "Module 17: Implement and apply K"
branch: "Computer Science and Engineering"
semester: 5
topicId: "684162770fc9aa1fdbc8b9a1"
status: "completed"
scrapedAt: "2026-05-20T16:48:06.946Z"
---
# MACHINE LEARNING LAB - Module 17: Implement and Apply K - Evaluate Clustering Performance

## Topic: Evaluating Clustering Performance using Inertia and Silhouette Score

**Learning Outcomes:**

*   Understand the concepts of Inertia and Silhouette Score.
*   Apply Inertia to evaluate K-Means clustering.
*   Apply Silhouette Score to evaluate clustering algorithms.
*   Interpret the results of Inertia and Silhouette Score for model selection.
*   Compare and contrast Inertia and Silhouette Score.

---

### 1. Introduction to Clustering Evaluation

Clustering is an unsupervised learning technique where the goal is to group similar data points together.  Evaluating the performance of a clustering algorithm is crucial, especially since we don't have ground truth labels as we would in supervised learning.  Two common metrics used for evaluating clustering performance are **Inertia** and the **Silhouette Score**.

### 2. Inertia

*   **Definition:** Inertia measures the sum of squared distances of samples to their closest cluster center.  It quantifies how tightly each cluster is clustered.

*   **Formula:**

    `Inertia = Σ(distance(xi, μk)^2)`

    Where:

    *   `xi` is a data point.
    *   `μk` is the centroid of the cluster to which `xi` belongs.
    *   The sum is taken over all data points.

*   **Interpretation:**

    *   Lower inertia indicates better clustering (data points are closer to their cluster centers).
    *   Inertia is zero when each point is its own cluster.
    *   Inertia is sensitive to the number of clusters (`k`). As `k` increases, inertia typically decreases because data points are closer to their centroids. This means minimizing inertia alone is not sufficient for choosing the optimal `k`.  It will always favor a higher `k`.

*   **Use with K-Means:** Inertia is directly calculated during the K-Means algorithm's optimization process.

*   **Example:**

    ```python
    from sklearn.cluster import KMeans
    from sklearn.datasets import make_blobs
    import matplotlib.pyplot as plt

    # Generate sample data
    X, y = make_blobs(n_samples=300, centers=3, random_state=42)

    # Fit K-Means with k=3
    kmeans = KMeans(n_clusters=3, random_state=42, n_init = 'auto') #Ensure n_init is set
    kmeans.fit(X)

    # Get inertia
    inertia = kmeans.inertia_

    print(f"Inertia: {inertia}")

    # Plot the data and cluster centers
    plt.scatter(X[:, 0], X[:, 1], c=kmeans.labels_)
    plt.scatter(kmeans.cluster_centers_[:, 0], kmeans.cluster_centers_[:, 1], marker='x', s=200, color='red')
    plt.title(f"K-Means Clustering with Inertia: {inertia:.2f}")
    plt.xlabel("Feature 1")
    plt.ylabel("Feature 2")
    plt.show()


    # Elbow method to find the optimal number of clusters
    inertia_values = []
    for k in range(1, 11):
        kmeans = KMeans(n_clusters=k, random_state=42, n_init = 'auto')
        kmeans.fit(X)
        inertia_values.append(kmeans.inertia_)

    plt.plot(range(1, 11), inertia_values, marker='o')
    plt.title('Elbow Method for Optimal k')
    plt.xlabel('Number of clusters')
    plt.ylabel('Inertia')
    plt.show()
    ```

    **Explanation:**

    *   We generate synthetic data using `make_blobs`.
    *   We fit K-Means with `n_clusters=3`.  `n_init='auto'` prevents a warning and ensures KMeans runs multiple times with different centroid seeds to improve results.
    *   `kmeans.inertia_` provides the inertia value.
    *   The elbow method calculates inertia for different values of `k` and plots them to help choose a good `k`. The "elbow" in the plot (where the rate of decrease in inertia starts to slow down) can indicate a suitable number of clusters.

*   **Important Points:**

    *   Inertia is only meaningful when comparing different K-Means models on the *same* dataset.
    *   Inertia alone is *not* a good measure for selecting the optimal number of clusters.
    *   It is affected by dataset characteristics (e.g., density, shape).
    *   Inertia works best with spherical clusters.

### 3. Silhouette Score

*   **Definition:** The Silhouette Score measures how similar a data point is to its own cluster compared to other clusters. It ranges from -1 to 1.

*   **Formula:**

    `Silhouette Score = (b - a) / max(a, b)`

    Where:

    *   `a` is the average intra-cluster distance (average distance of a point to all other points in its cluster).
    *   `b` is the average nearest-cluster distance (average distance of a point to all points in the *next closest* cluster).

*   **Interpretation:**

    *   **+1:** Indicates the point is well-clustered, far away from neighboring clusters.
    *   **0:** Indicates the point is on or very close to a decision boundary between two clusters.
    *   **-1:** Indicates the point is likely assigned to the wrong cluster.

    The overall Silhouette Score for a clustering model is the average silhouette score of all samples.  A higher Silhouette Score indicates better clustering.

*   **Example:**

    ```python
    from sklearn.cluster import KMeans
    from sklearn.metrics import silhouette_score
    from sklearn.datasets import make_blobs
    import matplotlib.pyplot as plt
    import numpy as np

    # Generate sample data
    X, y = make_blobs(n_samples=300, centers=3, random_state=42)

    # Fit K-Means with k=3
    kmeans = KMeans(n_clusters=3, random_state=42, n_init = 'auto')
    kmeans.fit(X)
    labels = kmeans.labels_

    # Calculate Silhouette Score
    silhouette_avg = silhouette_score(X, labels)

    print(f"Silhouette Score: {silhouette_avg}")

    # Silhouette analysis for different values of k
    range_n_clusters = [2, 3, 4, 5, 6]
    silhouette_scores = []

    for n_clusters in range_n_clusters:
        # Initialize the clusterer with n_clusters value and a random generator
        # seed for reproducibility.
        clusterer = KMeans(n_clusters=n_clusters, random_state=10, n_init = 'auto')
        cluster_labels = clusterer.fit_predict(X)

        # The silhouette_score gives the average value for all the samples.
        # This gives a perspective into the density and separation of the formed
        # clusters
        silhouette_avg = silhouette_score(X, cluster_labels)
        print(
            "For n_clusters =",
            n_clusters,
            "The average silhouette_score is :",
            silhouette_avg,
        )
        silhouette_scores.append(silhouette_avg)

    # Plotting the silhouette scores
    plt.plot(range_n_clusters, silhouette_scores, marker='o')
    plt.xlabel('Number of clusters')
    plt.ylabel('Silhouette score')
    plt.title('Silhouette Analysis for Optimal k')
    plt.show()

    # Optional: Silhouette plot for visual analysis (more advanced)
    from sklearn.metrics import silhouette_samples
    import matplotlib.cm as cm

    # Visualizing Silhouette plot for k=3
    n_clusters = 3
    kmeans = KMeans(n_clusters=n_clusters, random_state=42, n_init = 'auto')
    cluster_labels = kmeans.fit_predict(X)

    silhouette_avg = silhouette_score(X, cluster_labels)
    sample_silhouette_values = silhouette_samples(X, cluster_labels)

    fig, ax1 = plt.subplots(1, 1)
    fig.set_size_inches(8, 6)

    y_lower = 10
    for i in range(n_clusters):
        # Aggregate the silhouette scores for samples belonging to
        # cluster i, and sort them
        ith_cluster_silhouette_values = sample_silhouette_values[cluster_labels == i]
        ith_cluster_silhouette_values.sort()

        size_cluster_i = ith_cluster_silhouette_values.shape[0]
        y_upper = y_lower + size_cluster_i

        color = cm.nipy_spectral(float(i) / n_clusters)
        ax1.fill_betweenx(
            np.arange(y_lower, y_upper),
            0,
            ith_cluster_silhouette_values,
            facecolor=color,
            edgecolor=color,
            alpha=0.7,
        )

        # Label the silhouette plots with their cluster numbers below y_lower
        ax1.text(-0.05, y_lower + 0.5 * size_cluster_i, str(i))

        # Compute the new y_lower for next plot
        y_lower = y_upper + 10  # 10 for the 0 samples

    ax1.set_title("The silhouette plot for the various clusters.")
    ax1.set_xlabel("The silhouette coefficient values")
    ax1.set_ylabel("Cluster label")

    # The vertical line for the average silhouette score of all the values
    ax1.axvline(x=silhouette_avg, color="red", linestyle="--")

    ax1.set_yticks([])  # Clear the yaxis labels / ticks
    ax1.set_xticks([-0.1, 0, 0.2, 0.4, 0.6, 0.8, 1])

    plt.suptitle(
        "Silhouette analysis for KMeans clustering on sample data "
        "with n_clusters = %d" % n_clusters,
        fontsize=14,
        fontweight="bold",
    )

    plt.show()
    ```

    **Explanation:**

    *   We generate synthetic data using `make_blobs`.
    *   We fit K-Means with `n_clusters=3`.  Again, `n_init='auto'` is set.
    *   `silhouette_score(X, labels)` calculates the average Silhouette Score.
    *   The code then iterates through different numbers of clusters and calculates the silhouette score, allowing us to choose optimal k.
    *   The optional Silhouette plot is a visualization that shows the silhouette coefficients for each sample in each cluster.  It allows a more detailed understanding of the quality of the clustering.  A good clustering will have a higher average silhouette score and all the silhouette coefficients should be reasonably high, without negative values, and the width of each cluster (related to number of samples in that cluster) should be roughly balanced.

*   **Important Points:**

    *   Silhouette Score can be used to evaluate any clustering algorithm.
    *   It is more computationally expensive than inertia, especially for large datasets.
    *   A higher Silhouette Score indicates better-defined clusters.
    *   The Silhouette Score can help in choosing the optimal number of clusters.

### 4. Comparing Inertia and Silhouette Score

| Feature           | Inertia                                   | Silhouette Score                               |
| ----------------- | ----------------------------------------- | ---------------------------------------------- |
| **Algorithm**     | Primarily for K-Means                     | Applicable to any clustering algorithm          |
| **Interpretation**| Lower is better, but decreases with k     | Higher is better, ranges from -1 to 1           |
| **Computation**   | Faster                                    | More computationally expensive                  |
| **Scale**         | Depends on the dataset                      | Normalized to [-1, 1]                         |
| **Usefulness**    | Quick assessment of K-Means performance | More reliable for choosing the optimal k     |
| **Cluster Shape** | Best for spherical clusters               | Handles non-spherical clusters better             |

### 5. Choosing the Optimal Number of Clusters

Both Inertia and Silhouette Score can be used to find the "optimal" number of clusters, but they should be used with caution and often in conjunction with domain knowledge and visualization techniques.

*   **Elbow Method (using Inertia):** Plot the inertia for different values of `k`. Look for the "elbow" in the plot, where the rate of decrease in inertia starts to slow down. This point suggests a good balance between minimizing inertia and avoiding overfitting.  (See example above)

*   **Silhouette Analysis:** Plot the Silhouette Score for different values of `k`. Choose the `k` that gives the highest Silhouette Score.  The Silhouette plot can also give detailed insights into the cluster quality. (See example above)

*   **Visual Inspection:** Visualize the clustering results with different values of `k` using scatter plots, and see which one makes the most sense visually based on your understanding of the data.

*   **Domain Knowledge:** Use your domain expertise to guide your choice of the number of clusters.  Does the data naturally fall into a certain number of groups?

### 6. Practice Questions

1.  **What does Inertia measure, and how is it interpreted?**

    *   **Answer:** Inertia measures the sum of squared distances of samples to their closest cluster center. Lower inertia generally indicates better clustering, but it decreases as the number of clusters increases.

2.  **What is the range of the Silhouette Score, and what do the values represent?**

    *   **Answer:** The Silhouette Score ranges from -1 to 1. +1 indicates a point is well-clustered, 0 indicates it's on a decision boundary, and -1 indicates it's likely assigned to the wrong cluster.

3.  **Which evaluation metric, Inertia or Silhouette Score, is generally more computationally expensive?**

    *   **Answer:** Silhouette Score is generally more computationally expensive.

4.  **In which situation is Inertia best applied?**

    *   **Answer:** Inertia is best applied for a quick assessment of K-Means performance on the same dataset with different numbers of clusters.

5.  **Why is it important to use both Inertia and Silhouette Score (or other evaluation metrics), rather than relying on just one?**

    *   **Answer:** Using only one metric can lead to suboptimal cluster selection. Inertia decreases monotonically with increasing `k`, which means it alone will always favour high `k`. Silhouette score provides more information about the cluster separation. Using both metrics can provide a more comprehensive picture of cluster quality and better guide cluster selection.  Visualizations and domain expertise can also help.

### 7.  Important Points to Remember

*   **Inertia is specific to K-Means and is most useful for comparing models on the same dataset.**
*   **Silhouette Score is more versatile and can be used to evaluate different clustering algorithms.**
*   **Both Inertia and Silhouette Score should be used cautiously and in conjunction with other methods (visualization, domain knowledge) to determine the optimal number of clusters.**
*   **Remember that the optimal number of clusters depends on the specific dataset and the goals of the analysis.**
*   **Always scale your data before clustering if features have vastly different ranges.** This is particularly important for K-Means, which relies on distance calculations. Failing to scale data will bias the results.
