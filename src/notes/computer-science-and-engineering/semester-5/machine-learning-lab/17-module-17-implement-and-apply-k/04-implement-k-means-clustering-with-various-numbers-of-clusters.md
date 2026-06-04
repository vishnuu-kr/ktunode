---
title: "Implement K-means clustering with various numbers of clusters."
subject: "MACHINE LEARNING LAB"
module: "Module 17: Implement and apply K"
branch: "Computer Science and Engineering"
semester: 5
topicId: "684162770fc9aa1fdbc8b9a0"
status: "completed"
scrapedAt: "2026-05-20T16:48:06.193Z"
---
## MACHINE LEARNING LAB - Module 17: Implement and Apply K - Implementing K-Means Clustering with Varying Numbers of Clusters

**Learning Outcomes:**

*   Understand the K-means clustering algorithm and its core principles.
*   Implement K-means clustering using Python and libraries like scikit-learn.
*   Apply K-means clustering to datasets with different characteristics.
*   Evaluate the performance of K-means clustering with different numbers of clusters (K).
*   Use techniques like the Elbow Method and Silhouette Score to determine the optimal number of clusters.
*   Interpret the results of K-means clustering and derive insights.

---

### 1. K-Means Clustering: Core Concepts and Definitions

*   **Definition:** K-means clustering is an unsupervised learning algorithm that aims to partition *n* observations into *k* clusters, where each observation belongs to the cluster with the nearest mean (cluster center or centroid).
*   **Unsupervised Learning:**  The algorithm learns from unlabeled data, finding inherent patterns and groupings.
*   **Key Terms:**
    *   **Clusters:** Groups of similar data points.
    *   **Centroid:** The mean (average) of all data points within a cluster.  Represents the center of the cluster.
    *   **K:**  The number of clusters desired (a hyperparameter that you must specify).
    *   **Iteration:**  A single pass through the data where centroids are updated and data points are reassigned.
    *   **Convergence:** The state where the centroids no longer change significantly, indicating the algorithm has reached a stable solution.
    *   **Distance Metric:**  Used to measure the similarity between data points and centroids (e.g., Euclidean distance, Manhattan distance).  Euclidean distance is the most common.
*   **Algorithm Steps:**
    1.  **Initialization:** Randomly select *k* initial centroids.
    2.  **Assignment:** Assign each data point to the nearest centroid, forming *k* clusters.
    3.  **Update:** Recalculate the centroid of each cluster as the mean of all data points assigned to that cluster.
    4.  **Repeat:** Repeat steps 2 and 3 until convergence (centroids no longer change significantly or a maximum number of iterations is reached).
*   **Assumptions:**
    *   Clusters are spherical (circular in 2D, hyperspherical in higher dimensions).
    *   Clusters are roughly equal in size.
    *   Data points are assigned exclusively to one cluster (hard clustering).
*   **Limitations:**
    *   Sensitive to initial centroid selection.  Different initializations can lead to different results.  (K-means++ helps mitigate this)
    *   Requires specifying *k* beforehand.
    *   Doesn't handle non-spherical clusters well.
    *   Sensitive to outliers.
    *   Assumes all features have equal importance.

### 2. Implementing K-Means with Python (Scikit-learn)

*   **Libraries:**
    *   `scikit-learn` (`sklearn`): Provides the `KMeans` class for implementing K-means clustering.
    *   `numpy`: For numerical operations and data handling.
    *   `matplotlib` or `seaborn`: For data visualization.

*   **Code Example:**

```python
import numpy as np
import matplotlib.pyplot as plt
from sklearn.cluster import KMeans
from sklearn.datasets import make_blobs # For generating sample data

# 1. Generate Sample Data (for demonstration)
X, y = make_blobs(n_samples=300, centers=4, cluster_std=0.60, random_state=0)

# 2. Instantiate the KMeans object
kmeans = KMeans(n_clusters=4, init='k-means++', max_iter=300, n_init=10, random_state=0) #Common best practices are included: k-means++ init, specifying a number of inits

# 3. Fit the model to the data
kmeans.fit(X)

# 4. Get the cluster labels for each data point
y_kmeans = kmeans.predict(X)

# 5. Get the centroids
centroids = kmeans.cluster_centers_

# 6. Visualize the clusters
plt.scatter(X[:, 0], X[:, 1], c=y_kmeans, s=50, cmap='viridis')  # Data points colored by cluster
plt.scatter(centroids[:, 0], centroids[:, 1], c='red', s=200, marker='x') # Centroids marked with 'x'
plt.title("K-Means Clustering")
plt.xlabel("Feature 1")
plt.ylabel("Feature 2")
plt.show()
```

*   **Explanation:**
    *   `KMeans(n_clusters=k, init='k-means++', max_iter=300, n_init=10, random_state=0)`: Creates a KMeans object.
        *   `n_clusters`:  The number of clusters (K).  Crucially, you're going to be varying this value.
        *   `init='k-means++'` :  Uses the K-means++ initialization method, which is a smarter way to choose initial centroids and often leads to better results than random initialization.
        *   `max_iter`: The maximum number of iterations to run K-means.
        *   `n_init`:  Number of times the k-means algorithm will be run with different centroid seeds. The final results will be the best output of n_init consecutive runs in terms of inertia. This helps to avoid getting stuck in local optima.
        *   `random_state`:  Used for reproducibility.  Setting it to a specific value ensures you get the same result each time you run the code with the same data.
    *   `kmeans.fit(X)`:  Trains the K-means model on the data `X`.
    *   `kmeans.predict(X)`:  Assigns each data point to a cluster and returns the cluster labels.
    *   `kmeans.cluster_centers_`:  Returns the coordinates of the cluster centroids.

### 3. Applying K-Means to Datasets with Different Characteristics

*   **Dataset Examples:**
    *   **Customer Segmentation:**  Clustering customers based on their demographics, purchase history, website activity, etc.
    *   **Image Segmentation:** Grouping pixels in an image based on their color and texture.
    *   **Document Clustering:** Grouping documents based on their content (e.g., news articles, research papers).
    *   **Anomaly Detection:** Identifying data points that are significantly different from the rest of the data.
*   **Considerations:**
    *   **Data Preprocessing:** K-means is sensitive to the scale of features.  Scaling or standardization (e.g., using `StandardScaler` from scikit-learn) is often necessary to ensure that all features contribute equally to the distance calculations.
    *   **Feature Selection:**  Choose relevant features for clustering. Irrelevant features can introduce noise and reduce the effectiveness of the algorithm.
    *   **Data Representation:** Transform data into a suitable numerical format for K-means.  For example, categorical data may need to be encoded using one-hot encoding or similar techniques.

*   **Example: Scaling Data**

```python
from sklearn.preprocessing import StandardScaler

# Assume X is your data
scaler = StandardScaler()
X_scaled = scaler.fit_transform(X)

# Now use X_scaled with KMeans
kmeans = KMeans(n_clusters=4, init='k-means++', max_iter=300, n_init=10, random_state=0)
kmeans.fit(X_scaled)
```

### 4. Evaluating K-Means with Different Numbers of Clusters (K)

*   **Why Vary K?** The optimal number of clusters (*k*) is usually unknown beforehand. It's crucial to try different values of *k* and evaluate the results.

*   **Evaluation Metrics:**

    *   **Inertia (Within-Cluster Sum of Squares - WCSS):**
        *   **Definition:**  The sum of squared distances of samples to their closest cluster center.  A lower inertia value indicates better clustering.
        *   **Calculation:**  `kmeans.inertia_` after fitting the model.
        *   **Interpretation:**  Inertia tends to decrease as *k* increases because data points are closer to their centroids. However, it eventually reaches a point of diminishing returns, where adding more clusters doesn't significantly reduce inertia.
    *   **Elbow Method:**
        *   **Procedure:** Plot the inertia values for different values of *k*. Look for an "elbow" point in the plot, where the rate of decrease in inertia starts to slow down.  The *k* value at the elbow is often a good choice.
        *   **Implementation:**
            ```python
            inertia = []
            for i in range(1, 11):  # Try K from 1 to 10
                kmeans = KMeans(n_clusters=i, init='k-means++', max_iter=300, n_init=10, random_state=0)
                kmeans.fit(X_scaled)
                inertia.append(kmeans.inertia_)

            plt.plot(range(1, 11), inertia, marker='o')
            plt.title('Elbow Method for Optimal K')
            plt.xlabel('Number of clusters')
            plt.ylabel('Inertia')
            plt.show()
            ```
    *   **Silhouette Score:**
        *   **Definition:**  Measures how well each data point fits into its assigned cluster compared to other clusters.  It ranges from -1 to +1.
        *   **Interpretation:**
            *   +1: Data point is well-clustered.
            *   0: Data point is close to the decision boundary between two clusters.
            *   -1: Data point may be assigned to the wrong cluster.
        *   **Calculation:**  Use `sklearn.metrics.silhouette_score`.
        *   **Procedure:** Calculate the average silhouette score for different values of *k*.  Choose the *k* that maximizes the silhouette score.
        *   **Implementation:**
            ```python
            from sklearn.metrics import silhouette_score

            silhouette_scores = []
            for i in range(2, 11): # Silhouette score requires at least 2 clusters
                kmeans = KMeans(n_clusters=i, init='k-means++', max_iter=300, n_init=10, random_state=0)
                cluster_labels = kmeans.fit_predict(X_scaled)
                silhouette_avg = silhouette_score(X_scaled, cluster_labels)
                silhouette_scores.append(silhouette_avg)
                print(f"For n_clusters = {i}, the average silhouette_score is : {silhouette_avg}")

            plt.plot(range(2, 11), silhouette_scores, marker='o')
            plt.title('Silhouette Score for Optimal K')
            plt.xlabel('Number of clusters')
            plt.ylabel('Silhouette Score')
            plt.show()
            ```
        *   **Note:** The Silhouette Score is generally a more robust metric than the Elbow Method, especially when clusters are not well-defined or have varying densities. However, calculating the Silhouette Score is computationally more expensive, especially for large datasets.
    *   **Other Metrics (Less Common for K-Means):**
        *   **Davies-Bouldin Index:** A lower Davies-Bouldin index indicates better clustering (measures the average "similarity" between clusters, where similarity is the ratio of within-cluster distances to between-cluster distances).
        *   **Calinski-Harabasz Index:** A higher Calinski-Harabasz index indicates better clustering (measures the ratio of between-cluster variance to within-cluster variance).

### 5. Interpreting K-Means Results and Deriving Insights

*   **Analyzing Cluster Centroids:** The centroid coordinates provide insights into the characteristics of each cluster. For example, in customer segmentation, you can examine the average income, age, and purchase frequency of customers in each cluster to understand their distinct profiles.
*   **Profiling Clusters:**  Create descriptions of each cluster based on the features that define them.  What are the key characteristics that distinguish one cluster from another?  Use domain knowledge to interpret the clusters in a meaningful way.
*   **Visualizing Clusters:**  Scatter plots (for 2D data) or dimensionality reduction techniques (e.g., PCA or t-SNE) can help visualize the clusters.
*   **Taking Action Based on Insights:**  The insights derived from K-means clustering can be used to inform decision-making in various applications:
    *   **Marketing:** Tailor marketing campaigns to specific customer segments.
    *   **Product Development:**  Develop new products or features that cater to the needs of different customer groups.
    *   **Resource Allocation:**  Allocate resources more effectively based on the characteristics of different clusters.

### 6. Important Points to Remember

*   **Data Preprocessing is Crucial:** Scaling, normalization, and feature selection can significantly improve the performance of K-means.
*   **K-Means is Sensitive to Initialization:** Use `init='k-means++'` or run the algorithm multiple times with different random seeds (`n_init` > 1) to mitigate this.
*   **Choose K Carefully:**  Use the Elbow Method or Silhouette Score to guide your selection of the optimal number of clusters.
*   **Interpret the Results:** Don't just run the algorithm; understand what the clusters represent and how they can be used to solve a problem.
*   **Consider Alternatives:**  If your data violates the assumptions of K-means (e.g., non-spherical clusters), consider using other clustering algorithms like DBSCAN, hierarchical clustering, or Gaussian Mixture Models.

---

### Practice Questions and Exercises:

**1. What are the three main steps in the K-means algorithm?**

*   **Answer:** 1. Initialization: Randomly select *k* initial centroids.  2. Assignment: Assign each data point to the nearest centroid. 3. Update: Recalculate the centroids of each cluster.

**2. Explain the purpose of the Elbow Method and how it helps in determining the optimal number of clusters.**

*   **Answer:** The Elbow Method is a technique used to find the optimal number of clusters (k) in K-means clustering. It involves plotting the inertia (within-cluster sum of squares - WCSS) for different values of k.  The "elbow" point on the plot represents the value of k where adding more clusters provides diminishing returns in terms of reducing inertia.  This point is often considered a good choice for the optimal number of clusters.

**3. Why is data scaling important before applying K-means clustering? Give an example of a scaling technique.**

*   **Answer:** K-means clustering is sensitive to the scale of features because it uses distance metrics (e.g., Euclidean distance) to measure similarity. If features have vastly different ranges, features with larger ranges will dominate the distance calculations, potentially leading to biased clustering results. Data scaling ensures that all features contribute equally to the distance calculations. An example of a scaling technique is `StandardScaler`, which standardizes the features by subtracting the mean and dividing by the standard deviation.

**4.  Implement K-means clustering with K=3 on the following data using scikit-learn:  `X = np.array([[1, 2], [1.5, 1.8], [5, 8], [8, 8], [1, 0.6], [9, 11]])` Visualize the results.**

*   **Answer:**

```python
import numpy as np
import matplotlib.pyplot as plt
from sklearn.cluster import KMeans

X = np.array([[1, 2], [1.5, 1.8], [5, 8], [8, 8], [1, 0.6], [9, 11]])

kmeans = KMeans(n_clusters=3, init='k-means++', max_iter=300, n_init=10, random_state=0)
kmeans.fit(X)
y_kmeans = kmeans.predict(X)
centroids = kmeans.cluster_centers_

plt.scatter(X[:, 0], X[:, 1], c=y_kmeans, s=50, cmap='viridis')
plt.scatter(centroids[:, 0], centroids[:, 1], c='red', s=200, marker='x')
plt.title("K-Means Clustering (K=3)")
plt.xlabel("Feature 1")
plt.ylabel("Feature 2")
plt.show()
```

**5. What does a Silhouette Score of -1 indicate about a data point's cluster assignment?**

*   **Answer:** A Silhouette Score of -1 indicates that the data point is likely assigned to the wrong cluster. It suggests that the data point is much closer to the data points in a neighboring cluster than to the data points in its own cluster.

---

These comprehensive notes cover the key aspects of implementing K-means clustering with varying numbers of clusters. By understanding these concepts and practicing the exercises, you should be well-equipped to apply K-means in your own machine learning projects. Remember to always consider the limitations of K-means and choose the appropriate evaluation metrics to assess its performance.
