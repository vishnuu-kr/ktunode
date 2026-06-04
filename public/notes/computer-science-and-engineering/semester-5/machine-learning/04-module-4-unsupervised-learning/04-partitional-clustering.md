---
title: "partitional clustering"
subject: "MACHINE LEARNING"
module: "Module 4: Unsupervised Learning"
branch: "Computer Science and Engineering"
semester: 5
topicId: "684162760fc9aa1fdbc8b5d1"
status: "completed"
scrapedAt: "2026-05-20T16:46:49.175Z"
---
# MACHINE LEARNING - Module 4: Unsupervised Learning - Partitional Clustering

## Introduction

This module focuses on unsupervised learning, specifically *partitional clustering*. Partitional clustering algorithms aim to divide a dataset into non-overlapping groups (clusters) where each data point belongs to only one cluster. The goal is to maximize intra-cluster similarity and minimize inter-cluster similarity.

## Learning Outcomes

Upon completion of this topic, you will be able to:

1.  Understand the fundamental concepts of partitional clustering.
2.  Explain the k-means algorithm, its variants, and limitations.
3.  Describe the k-medoids algorithm and its advantages over k-means.
4.  Discuss evaluation metrics for partitional clustering.
5.  Apply partitional clustering algorithms to real-world datasets.

## 1. Fundamental Concepts of Partitional Clustering

*   **Definition:** Partitional clustering algorithms partition a dataset of *n* objects into *k* clusters, where each object belongs to exactly one cluster. This differs from hierarchical clustering which creates a nested hierarchy of clusters.

*   **Key Characteristics:**
    *   **Non-overlapping Clusters:**  Each data point is assigned to only one cluster.
    *   **Fixed Number of Clusters (k):**  Most partitional clustering algorithms require the user to specify the number of clusters *k* beforehand.
    *   **Optimization Criterion:** Algorithms optimize an objective function that measures the quality of the clustering, such as minimizing the within-cluster variance or maximizing the between-cluster variance.

*   **Process:**  Typically, partitional clustering algorithms follow an iterative process:
    1.  **Initialization:** Select initial cluster centers (centroids or medoids).
    2.  **Assignment:** Assign each data point to the nearest cluster center.
    3.  **Update:** Recalculate the cluster centers based on the current cluster assignments.
    4.  **Iteration:** Repeat steps 2 and 3 until the cluster assignments stabilize or a maximum number of iterations is reached.

*   **Distance Metrics:**  The "nearest" cluster center is determined by a distance metric. Common distance metrics include:
    *   **Euclidean Distance:** The straight-line distance between two points. Commonly used with k-means.
    *   **Manhattan Distance:**  The sum of the absolute differences of their coordinates.  More robust to outliers than Euclidean distance.
    *   **Minkowski Distance:** A generalization of Euclidean and Manhattan distances.
    *   **Cosine Similarity:** Measures the cosine of the angle between two vectors.  Useful for text data.

## 2. K-Means Algorithm

*   **Description:** K-means is one of the most popular and widely used partitional clustering algorithms.  It aims to partition *n* data points into *k* clusters, where each data point belongs to the cluster with the nearest mean (centroid).

*   **Algorithm Steps:**
    1.  **Initialization:** Choose *k* initial cluster centers (centroids) randomly or using heuristics (e.g., k-means++).
    2.  **Assignment:** Assign each data point to the nearest centroid, based on the chosen distance metric (usually Euclidean distance).
    3.  **Update:** Recalculate the centroids of each cluster by taking the mean of all data points assigned to that cluster.
    4.  **Iteration:** Repeat steps 2 and 3 until the centroids no longer change significantly or a maximum number of iterations is reached.

*   **Mathematical Formulation:**
    *   Minimize the within-cluster sum of squares (WCSS):

    ```
    WCSS = Σ Σ ||xᵢ - μⱼ||²
    ```

    where:
    *   xᵢ is a data point
    *   μⱼ is the centroid of cluster *j*
    *   The outer summation is over all clusters.
    *   The inner summation is over all points *xᵢ* assigned to cluster *j*.

*   **Variants:**
    *   **K-means++:**  An initialization technique that selects initial centroids that are far apart from each other, improving the quality of the clustering.
    *   **Mini-Batch K-means:**  Instead of using the entire dataset in each iteration, Mini-Batch K-means uses a small, randomly selected subset (mini-batch) to update the centroids.  This makes it faster for large datasets.
    *   **Fuzzy C-Means (FCM):**  Allows data points to belong to multiple clusters with different degrees of membership.

*   **Limitations:**
    *   **Requires specifying *k*:** The number of clusters *k* must be determined beforehand.  Choosing the optimal *k* can be challenging.
    *   **Sensitive to initial centroid selection:** Different initializations can lead to different clusterings.  Multiple runs with different initializations are often recommended.
    *   **Assumes clusters are spherical and equally sized:** K-means performs poorly when clusters have non-spherical shapes, varying sizes, or varying densities.
    *   **Sensitive to outliers:** Outliers can significantly influence the position of the centroids.
    *   **Convergence to local optima:**  K-means can get stuck in local optima, which may not be the best possible clustering.

*   **Example:** Consider a dataset of customer information with features like age and income. K-means can be used to segment customers into different groups based on their demographics, allowing for targeted marketing campaigns.

## 3. K-Medoids Algorithm

*   **Description:** K-medoids is similar to k-means, but instead of using the mean of the data points as the cluster center, it uses the *medoid*. The medoid is the most centrally located data point within a cluster – the point that minimizes the sum of distances to other points in the cluster.

*   **Algorithm Steps:**
    1.  **Initialization:** Randomly select *k* data points as initial medoids.
    2.  **Assignment:** Assign each data point to the nearest medoid.
    3.  **Update:** For each cluster, find the data point that minimizes the sum of distances to all other data points in the cluster.  This data point becomes the new medoid.
    4.  **Iteration:** Repeat steps 2 and 3 until the medoids no longer change or a maximum number of iterations is reached.

*   **Advantages over K-Means:**
    *   **More robust to outliers:** Since medoids are actual data points, they are less sensitive to outliers than centroids (which are calculated as means).
    *   **Works with arbitrary distance metrics:** K-medoids can be used with any distance metric, even non-Euclidean distances.  This makes it suitable for datasets with categorical or mixed data types.
    *   **More interpretable:**  Medoids are actual data points, making them easier to understand and interpret than centroids.

*   **Disadvantages:**
    *   **Higher computational complexity:** K-medoids is generally more computationally expensive than k-means, especially for large datasets.

*   **Example:** Consider clustering customer data based on purchase history.  Using k-medoids can provide more robust clusters when dealing with outliers or non-numerical attributes.

## 4. Evaluation Metrics for Partitional Clustering

Evaluating the quality of partitional clustering is crucial, especially since we don't have ground truth labels.  Common metrics include:

*   **Silhouette Coefficient:**
    *   Measures how similar a data point is to its own cluster compared to other clusters.
    *   Ranges from -1 to 1.
        *   Values close to 1 indicate that the data point is well-clustered.
        *   Values close to 0 indicate that the data point is near a cluster boundary.
        *   Negative values indicate that the data point may have been assigned to the wrong cluster.
    *   Formula:  `s = (b - a) / max(a, b)`
        *   `a`: Average distance to all other points within the same cluster.
        *   `b`: Average distance to all points in the nearest neighboring cluster.

*   **Davies-Bouldin Index:**
    *   Measures the average similarity between each cluster and its most similar cluster.
    *   Lower values indicate better clustering.
    *   Based on cluster scatter (average distance of points within a cluster to their centroid) and cluster separation (distance between cluster centroids).

*   **Calinski-Harabasz Index (Variance Ratio Criterion):**
    *   Measures the ratio of between-cluster variance to within-cluster variance.
    *   Higher values indicate better clustering.
    *   Sensitive to the number of clusters.

*   **Within-Cluster Sum of Squares (WCSS):**
    *   Already discussed in the k-means section.  Lower WCSS generally indicates better clustering.
    *   Can be used to help determine the optimal number of clusters *k* (Elbow Method).

*   **Elbow Method:**
    *   A technique used to find the optimal number of clusters *k* by plotting WCSS against different values of *k*.
    *   The "elbow" point in the plot, where the rate of decrease in WCSS starts to diminish, is considered a good estimate for the optimal *k*.

## 5. Applying Partitional Clustering Algorithms

Here are some considerations when applying partitional clustering:

*   **Data Preprocessing:**
    *   **Scaling:** Scale features to have similar ranges to prevent features with larger values from dominating the distance calculations. Common scaling methods include standardization (Z-score) and min-max scaling.
    *   **Handling Missing Values:** Impute missing values or remove data points with missing values.
    *   **Encoding Categorical Variables:** Convert categorical variables into numerical representations using techniques like one-hot encoding or label encoding.

*   **Choosing the Right Algorithm:**
    *   Consider the shape and size of the clusters, the presence of outliers, and the computational resources available.
    *   K-means is suitable for spherical, equally sized clusters with few outliers and sufficient computational power.
    *   K-medoids is more robust to outliers and can handle arbitrary distance metrics.
    *   Mini-Batch K-means is suitable for large datasets.

*   **Parameter Tuning:**
    *   Experiment with different values of *k* and initialization strategies to find the best clustering.
    *   Use evaluation metrics to compare the performance of different clustering solutions.

*   **Interpretation of Results:**
    *   Analyze the characteristics of each cluster to gain insights from the data.
    *   Visualize the clusters using scatter plots or other visualization techniques.

## Practice Questions/Exercises

1.  **Question:** Explain the difference between k-means and k-medoids algorithms. In what scenarios is k-medoids preferred over k-means?
    **Answer:** K-means uses the mean (centroid) of the data points in a cluster as the cluster center, while k-medoids uses the actual data point (medoid) that is most centrally located within the cluster. K-medoids is preferred over k-means when the data contains outliers or when using non-Euclidean distance metrics.

2.  **Question:** What are some limitations of the k-means algorithm? How can you mitigate these limitations?
    **Answer:** Limitations of k-means include the requirement to specify *k* beforehand, sensitivity to initial centroid selection, the assumption of spherical clusters, and sensitivity to outliers. These limitations can be mitigated by using techniques such as the elbow method for choosing *k*, running k-means multiple times with different initializations, using k-means++, and considering k-medoids or other clustering algorithms for non-spherical clusters or data with outliers.

3.  **Question:** Describe the Elbow Method and how it is used to determine the optimal number of clusters *k* in k-means.
    **Answer:** The Elbow Method involves plotting the WCSS (Within-Cluster Sum of Squares) against different values of *k*.  As *k* increases, WCSS decreases. The "elbow" point in the plot, where the rate of decrease in WCSS starts to diminish significantly, is considered a good estimate for the optimal *k*.

4.  **Question:** What are some preprocessing steps that are often applied before running a partitional clustering algorithm like k-means? Why are these steps important?
    **Answer:** Common preprocessing steps include scaling features (e.g., standardization or min-max scaling), handling missing values (e.g., imputation or removal), and encoding categorical variables (e.g., one-hot encoding or label encoding). These steps are important because they ensure that all features contribute equally to the distance calculations, that missing values do not affect the clustering results, and that categorical variables can be properly handled by the clustering algorithm.

5.  **Question:** You are given a dataset with features that have significantly different scales. Which scaling method would be more appropriate: Standardization (Z-score) or Min-Max Scaling? Why?
    **Answer:** Standardization (Z-score) would generally be more appropriate. Min-Max Scaling is sensitive to outliers, and if you have data with significantly different scales, outliers in one feature could unduly influence the scaling of that feature and potentially skew the results. Standardization is less sensitive to outliers.

## Important Points to Remember

*   Partitional clustering aims to divide data into non-overlapping clusters.
*   K-means is a popular algorithm, but has limitations (sensitive to initialization, assumes spherical clusters, etc.).
*   K-medoids is more robust to outliers.
*   Evaluation metrics like Silhouette Coefficient, Davies-Bouldin Index, and Calinski-Harabasz Index are used to assess the quality of the clustering.
*   Data preprocessing (scaling, missing value handling) is crucial.
*   Choosing the right algorithm and parameters depends on the specific dataset and problem.
