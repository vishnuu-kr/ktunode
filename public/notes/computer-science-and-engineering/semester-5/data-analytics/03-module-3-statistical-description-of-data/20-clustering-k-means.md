---
title: "Clustering - K-Means"
subject: "DATA ANALYTICS"
module: "Module 3: Statistical Description of data "
branch: "Computer Science and Engineering"
semester: 5
topicId: "684162770fc9aa1fdbc8b726"
status: "completed"
scrapedAt: "2026-05-20T16:44:07.393Z"
---
# DATA ANALYTICS - Module 3: Statistical Description of Data - Clustering: K-Means

## Introduction

This document provides comprehensive study notes on K-Means clustering, a key unsupervised learning algorithm. We will cover the fundamental concepts, steps involved, advantages, disadvantages, and practical considerations of K-Means.

## Learning Outcomes

By the end of this module, you will be able to:

1.  **Explain the concept of clustering and its applications.**
2.  **Describe the K-Means algorithm step-by-step.**
3.  **Apply the K-Means algorithm to a dataset.**
4.  **Evaluate the performance of a K-Means clustering model.**
5.  **Choose an appropriate value for K (the number of clusters).**
6.  **Identify the limitations of K-Means clustering.**
7.  **Discuss variations and extensions of the K-Means algorithm.**

## 1.  Clustering and its Applications

*   **Definition:** Clustering is the process of grouping similar data points together into clusters, where data points within a cluster are more similar to each other than to those in other clusters. It's an unsupervised learning technique because no prior knowledge or labeled data is used.
*   **Types of Clustering:**
    *   **Partitioning Clustering:** Divides data into non-overlapping clusters (e.g., K-Means).  Each data point belongs to only one cluster.
    *   **Hierarchical Clustering:** Creates a hierarchy of clusters, where clusters can have sub-clusters (e.g., Agglomerative and Divisive Clustering).
    *   **Density-Based Clustering:** Identifies clusters based on the density of data points (e.g., DBSCAN).
    *   **Model-Based Clustering:** Assumes data is generated from a mixture of probability distributions (e.g., Gaussian Mixture Models).
*   **Applications of Clustering:**
    *   **Customer Segmentation:** Grouping customers based on purchasing behavior, demographics, etc. for targeted marketing.
    *   **Image Segmentation:** Identifying regions of interest in an image based on pixel similarities.
    *   **Document Clustering:** Grouping documents based on topic or content.
    *   **Anomaly Detection:** Identifying outliers in a dataset by observing data points that do not belong to any cluster.
    *   **Recommendation Systems:** Grouping users with similar preferences to provide personalized recommendations.
    *   **Bioinformatics:** Grouping genes based on expression patterns or proteins based on structure.

## 2.  K-Means Algorithm: Step-by-Step

*   **K-Means Overview:**  A partitioning clustering algorithm that aims to partition *n* data points into *k* clusters, where each data point belongs to the cluster with the nearest mean (centroid).
*   **Algorithm Steps:**

    1.  **Initialization:**
        *   Choose the number of clusters, *k*.
        *   Randomly select *k* data points as initial centroids.  (Centroids represent the mean of data points within a cluster.)
    2.  **Assignment:**
        *   Assign each data point to the nearest centroid based on a distance metric (typically Euclidean distance).
        *   Euclidean Distance:  `sqrt(sum((xi - cj)^2))` for i = 1 to n and j = 1 to k, where *xi* is a data point and *cj* is a centroid.
    3.  **Update:**
        *   Calculate the new centroid of each cluster by taking the mean of all data points assigned to that cluster.
    4.  **Iteration:**
        *   Repeat steps 2 and 3 until the centroids no longer change significantly or a maximum number of iterations is reached (convergence).  This means data points no longer switch between clusters, or the movement of centroids is below a pre-defined threshold.

## 3.  Applying K-Means to a Dataset

Let's consider a simplified example with a small dataset:

| Data Point (X) | Data Point (Y) |
|---|---|
| 1 | 1 |
| 1.5 | 2 |
| 3 | 4 |
| 5 | 7 |
| 3.5 | 5 |
| 4.5 | 5 |
| 3.5 | 6 |

**Example:  K = 2**

1. **Initialization:** Randomly choose two centroids.  Let's say:
   *   Centroid 1: (1, 1)
   *   Centroid 2: (5, 7)

2. **Assignment:**  Calculate the Euclidean distance of each data point to each centroid and assign the data point to the closest centroid.

   | Data Point | Distance to (1,1) | Distance to (5,7) | Cluster Assignment |
   |---|---|---|---|
   | (1, 1) | 0 | 8.49 | Cluster 1 |
   | (1.5, 2) | 1.12 | 7.31 | Cluster 1 |
   | (3, 4) | 4.24 | 3.61 | Cluster 2 |
   | (5, 7) | 8.49 | 0 | Cluster 2 |
   | (3.5, 5) | 5.66 | 2.06 | Cluster 2 |
   | (4.5, 5) | 6.02 | 2.5 | Cluster 2 |
   | (3.5, 6) | 6.71 | 1.58 | Cluster 2 |

3. **Update:** Calculate the new centroids based on the mean of the points in each cluster.

   *   Cluster 1:  ((1+1.5)/2, (1+2)/2) = (1.25, 1.5)
   *   Cluster 2:  ((3+5+3.5+4.5+3.5)/5, (4+7+5+5+6)/5) = (3.9, 5.4)

4. **Iteration:** Repeat steps 2 and 3 until the centroids stabilize or a maximum number of iterations is reached. The cluster assignments and centroid positions will change in subsequent iterations. The process stops when the assignment remains same after an iteration.

**Important:** K-Means is sensitive to initial centroid placement. Different initializations can lead to different cluster arrangements. Therefore, K-Means is often run multiple times with different random initializations, and the solution with the best performance (e.g., lowest sum of squared distances) is chosen.

## 4.  Evaluating K-Means Performance

Since K-Means is unsupervised, we don't have ground truth labels to directly compare against.  Therefore, we rely on internal metrics to evaluate the "goodness" of the clustering.

*   **Inertia (Within-Cluster Sum of Squares - WCSS):**

    *   The sum of squared distances of each data point to its closest centroid.
    *   Lower inertia indicates better clustering (data points are closer to their centroids).
    *   Inertia decreases as *k* increases, so it's not a reliable metric on its own.
*   **Silhouette Score:**

    *   Measures how similar a data point is to its own cluster compared to other clusters.
    *   Ranges from -1 to 1:
        *   Values close to 1 indicate good clustering (data point is well-clustered).
        *   Values close to 0 indicate overlapping clusters.
        *   Values close to -1 indicate the data point may be assigned to the wrong cluster.
    *   Formula: `(b - a) / max(a, b)`, where:
        *   *a* is the average distance from the data point to other data points in the same cluster.
        *   *b* is the average distance from the data point to data points in the nearest other cluster.
    *   The Silhouette score is calculated for each data point and then averaged across all data points to get an overall score.
*   **Davies-Bouldin Index:**

    *   Measures the average "similarity" between clusters.
    *   Lower values indicate better clustering (clusters are well-separated).
    *   It's based on the ratio of within-cluster scatter to between-cluster separation.

**Practical Considerations:**

*   These metrics provide insights, but the best evaluation often involves domain knowledge.  Do the resulting clusters make sense in the context of the data?

## 5.  Choosing the Optimal K

Selecting the appropriate number of clusters, *k*, is a crucial step in K-Means.

*   **Elbow Method:**

    *   Plot the inertia (WCSS) against different values of *k*.
    *   Look for an "elbow" point in the plot, where the rate of decrease in inertia starts to slow down significantly.  This point suggests a reasonable value for *k*.  Beyond this point, adding more clusters doesn't significantly reduce the WCSS.
*   **Silhouette Analysis:**

    *   Calculate the silhouette score for different values of *k*.
    *   Choose the *k* that maximizes the silhouette score.
    *   Silhouette plots can also reveal issues like clusters with negative silhouette scores, which indicate poor clustering.
*   **Domain Knowledge:**

    *   Consider the context of the data.  Are there inherent groupings or categories that suggest a reasonable range for *k*?
*   **Gap Statistic:**

    *   Compares the WCSS of the clustered data to the expected WCSS under a null reference distribution (random data with no clusters).
    *   The optimal *k* is the value where the gap between the observed and expected WCSS is the largest.  This method requires more computation.

## 6.  Limitations of K-Means Clustering

*   **Sensitivity to Initial Centroid Placement:** Different initializations can lead to different cluster results.  Mitigation: Run K-Means multiple times with different random initializations and choose the best solution based on inertia or another metric.
*   **Assumes Spherical Clusters:** K-Means performs best when clusters are roughly spherical and equally sized. It struggles with non-spherical, elongated, or irregularly shaped clusters.
*   **Sensitive to Outliers:** Outliers can significantly influence the position of centroids, leading to poor clustering.
*   **Requires Pre-defined Number of Clusters (k):** Choosing the optimal *k* can be challenging.
*   **All features contribute equally:** K-Means treats all features as equally important. Feature scaling is often necessary to ensure that features with larger scales don't dominate the distance calculations.
*   **Not suitable for categorical data directly:** K-Means relies on distance calculations, which are typically performed on numerical data.  Categorical features need to be encoded into numerical representations before applying K-Means.

## 7.  Variations and Extensions of K-Means

*   **K-Medoids:** Uses data points (medoids) as cluster centers instead of means.  More robust to outliers than K-Means.  PAM (Partitioning Around Medoids) is a popular algorithm for K-Medoids.
*   **Mini-Batch K-Means:** Uses small random samples (mini-batches) of the data to update the centroids, making it more scalable for large datasets.
*   **Fuzzy C-Means (FCM):** Allows data points to belong to multiple clusters with varying degrees of membership. Each data point has a membership value for each cluster, indicating the degree to which it belongs to that cluster.
*   **Bisecting K-Means:**  A hierarchical clustering approach that starts with all data points in one cluster and recursively splits clusters into two using K-Means until the desired number of clusters is reached.

## Practice Questions

1.  **Explain the difference between partitioning clustering and hierarchical clustering.**

    *   *Answer:* Partitioning clustering divides data into non-overlapping clusters, while hierarchical clustering creates a hierarchy of clusters.
2.  **What is inertia in the context of K-Means, and how is it used for evaluation?**

    *   *Answer:* Inertia is the sum of squared distances of each data point to its closest centroid. Lower inertia generally indicates better clustering, but it decreases as *k* increases, so it's not a reliable metric on its own.
3.  **Describe the Elbow Method for choosing the optimal value of *k* in K-Means.**

    *   *Answer:* The Elbow Method involves plotting the inertia (WCSS) against different values of *k*. The optimal *k* is the point on the plot where the rate of decrease in inertia starts to slow down significantly (the "elbow" point).
4.  **What are some limitations of K-Means clustering?**

    *   *Answer:* Sensitivity to initial centroid placement, assumes spherical clusters, sensitive to outliers, requires pre-defined number of clusters.
5.  **How does K-Medoids differ from K-Means, and why is K-Medoids more robust to outliers?**

    *   *Answer:* K-Medoids uses data points (medoids) as cluster centers instead of means. It's more robust to outliers because medoids are actual data points, while means can be heavily influenced by extreme values.
6.  **Why is feature scaling important before applying K-Means?**

    *   *Answer:* K-Means relies on distance calculations. If features have different scales, features with larger scales can dominate the distance calculations, leading to biased clustering. Feature scaling ensures that all features contribute equally.

## Important Points to Remember

*   K-Means is a powerful and widely used clustering algorithm.
*   Understanding its limitations is crucial for applying it effectively.
*   Experiment with different values of *k* and evaluation metrics to find the best clustering solution for your data.
*   Consider data preprocessing techniques like feature scaling and outlier removal to improve K-Means performance.
*   Be aware of the assumptions K-Means makes about the data (e.g., spherical clusters) and choose alternative clustering algorithms if those assumptions are not met.
