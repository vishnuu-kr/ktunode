---
title: "Clustering Paradigms"
subject: "DATA MINING"
module: "Module 3: Classification "
branch: "Computer Science and Engineering"
semester: 5
topicId: "684162770fc9aa1fdbc8b8b3"
status: "completed"
scrapedAt: "2026-05-20T16:45:13.789Z"
---
# DATA MINING - Module 3: Classification - Clustering Paradigms

These notes cover the topic of Clustering Paradigms within the context of Classification in Data Mining.

## Learning Outcomes:

*   Understand the fundamental differences between classification and clustering.
*   Describe the different clustering paradigms and their underlying principles.
*   Explain the strengths and weaknesses of each clustering paradigm.
*   Apply appropriate clustering algorithms to different types of data.
*   Evaluate the performance of clustering algorithms.
*   Understand the application of clustering in classification.

## 1. Introduction: Classification vs. Clustering

*   **Classification:**  A supervised learning technique where the goal is to predict the class label of a given data point based on a labeled training dataset. We *know* the classes beforehand.
    *   *Example:*  Classifying emails as spam or not spam based on features like sender, subject, and content.
*   **Clustering:** An unsupervised learning technique where the goal is to group similar data points together into clusters. We *do not* know the classes beforehand.  The algorithm discovers patterns in the data to form these groups.
    *   *Example:* Grouping customers into segments based on their purchasing behavior.

**Key Difference:** Classification requires labeled data, while clustering works with unlabeled data.  Clustering is about discovering hidden patterns, while classification is about predicting known labels.

## 2. Clustering Paradigms

Clustering algorithms can be broadly categorized into several paradigms.

### 2.1. Partitioning Clustering

*   **Definition:** Partitioning algorithms divide the dataset into *k* non-overlapping clusters, where *k* is a pre-defined number. Each data point belongs to exactly one cluster.
*   **Key Algorithms:**
    *   **K-Means:**
        *   *Algorithm:*
            1.  Choose *k* initial centroids (randomly or using a heuristic).
            2.  Assign each data point to the nearest centroid (based on distance, e.g., Euclidean distance).
            3.  Recalculate the centroids of each cluster (as the mean of the points in that cluster).
            4.  Repeat steps 2 and 3 until the centroids no longer change significantly or a maximum number of iterations is reached.
        *   *Strengths:* Simple, efficient, and widely used.
        *   *Weaknesses:* Sensitive to initial centroid selection, assumes clusters are spherical and equally sized, requires specifying *k* beforehand, struggles with non-convex clusters.
        *   *Example:*  Grouping images based on color similarity using K-Means where each color is considered as a feature and each image is a data point.
    *   **K-Medoids (PAM - Partitioning Around Medoids):**
        *   *Algorithm:*  Similar to K-Means, but instead of using the mean as the centroid, it uses the *medoid* – the most centrally located data point in the cluster.
        *   *Strengths:* More robust to outliers than K-Means.
        *   *Weaknesses:* Computationally more expensive than K-Means, still requires specifying *k*.
        *   *Example:*  Clustering locations of shops based on geographical data where the medoid is the most accessible shop within that cluster.

*   **Important Considerations:**
    *   Choosing the right value of *k* is crucial. Techniques like the elbow method or silhouette analysis can help.
    *   Distance metrics (Euclidean, Manhattan, Cosine) affect the results.  The choice depends on the data type and the desired cluster shape.
    *   Data normalization (scaling) is often necessary to prevent features with larger values from dominating the distance calculations.

### 2.2. Hierarchical Clustering

*   **Definition:** Hierarchical algorithms build a hierarchy of clusters, either by starting with each data point as a separate cluster and merging them (agglomerative) or by starting with a single cluster containing all data points and splitting it (divisive).
*   **Types:**
    *   **Agglomerative (Bottom-up):**
        *   *Algorithm:*
            1.  Start with each data point as a separate cluster.
            2.  Find the two closest clusters and merge them.
            3.  Repeat step 2 until only one cluster remains (containing all data points).
        *   *Linkage Methods (determine how to measure distance between clusters):*
            *   *Single Linkage (MIN):* Distance between the closest points in the two clusters.  Prone to chaining.
            *   *Complete Linkage (MAX):* Distance between the farthest points in the two clusters.  More robust to noise.
            *   *Average Linkage:* Average distance between all pairs of points, one from each cluster.  Balances single and complete linkage.
            *   *Ward's Linkage:* Minimizes the increase in within-cluster variance after merging.  Tends to produce more compact clusters.
        *   *Strengths:*  Provides a hierarchical representation of the data, doesn't require specifying *k* beforehand (can be determined by cutting the dendrogram at an appropriate level).
        *   *Weaknesses:* Computationally expensive (especially for large datasets), sensitive to noise and outliers.
    *   **Divisive (Top-down):**
        *   *Algorithm:*
            1.  Start with all data points in a single cluster.
            2.  Split the cluster into two sub-clusters.
            3.  Recursively split the sub-clusters until each data point is in its own cluster.
        *   *Strengths:*  Potentially more accurate than agglomerative clustering, but more complex to implement.
        *   *Weaknesses:* Computationally very expensive.  Less commonly used than agglomerative methods.
*   **Dendrogram:** A tree-like diagram that visualizes the hierarchy of clusters. The height of the branches represents the distance between the clusters that were merged.

### 2.3. Density-Based Clustering

*   **Definition:** Density-based algorithms group together data points that are closely packed together, separating them from regions of lower density (noise or outliers).
*   **Key Algorithm:**
    *   **DBSCAN (Density-Based Spatial Clustering of Applications with Noise):**
        *   *Parameters:*
            *   *Epsilon (ε):*  The radius of the neighborhood around a data point.
            *   *MinPts:* The minimum number of data points required within the epsilon neighborhood for a point to be considered a core point.
        *   *Algorithm:*
            1.  Label each point as core, border, or noise.
                *   *Core point:* A point with at least *MinPts* points within its epsilon neighborhood (including itself).
                *   *Border point:* A point that is not a core point but is within the epsilon neighborhood of a core point.
                *   *Noise point:* A point that is neither a core point nor a border point.
            2.  Connect core points that are within each other's epsilon neighborhoods.
            3.  Assign border points to the cluster of the nearest core point.
            4.  Noise points are not assigned to any cluster.
        *   *Strengths:*  Can discover clusters of arbitrary shapes, robust to noise and outliers, doesn't require specifying *k*.
        *   *Weaknesses:* Sensitive to parameter tuning (ε and MinPts), struggles with varying densities.
        *   *Example:* Identifying clusters of traffic accidents on a map based on the density of accidents.
*   **Other Density-Based Algorithms:** OPTICS (Ordering Points To Identify the Clustering Structure), DENCLUE (DENsity CLUstering).

### 2.4. Grid-Based Clustering

*   **Definition:** Grid-based algorithms quantize the data space into a finite number of cells (forming a grid) and perform clustering on these cells.
*   **Key Algorithm:**
    *   **STING (Statistical Information Grid):**
        *   *Algorithm:* Divides the spatial area into rectangular cells at different levels of resolution. At each level, statistical information (e.g., mean, standard deviation, max, min) of the attributes is stored for each cell.
        *   *Strengths:*  Fast processing time as it uses summarized information in cells. Suitable for large datasets.
        *   *Weaknesses:* Accuracy is limited by the grid resolution.
        *   *Example:* Grouping areas based on population density from spatial data.

### 2.5. Model-Based Clustering

*   **Definition:** Model-based algorithms assume that the data is generated from a mixture of probability distributions. The goal is to estimate the parameters of these distributions to identify the clusters.
*   **Key Algorithm:**
    *   **Gaussian Mixture Models (GMM):**
        *   *Algorithm:* Assumes that the data is generated from a mixture of Gaussian distributions.  Uses the Expectation-Maximization (EM) algorithm to estimate the parameters of each Gaussian component (mean, covariance, mixing proportions).
        *   *Strengths:* Can discover clusters with different shapes and sizes, provides probabilistic cluster assignments.
        *   *Weaknesses:* Sensitive to initial parameter values, can be computationally expensive, assumes that the data is Gaussian distributed.
        *   *Example:* Segmenting customers based on multiple features such as age, income, and spending habits, where each segment follows a Gaussian distribution.

## 3. Evaluating Clustering Algorithms

*   **Internal Evaluation Metrics:** Evaluate the quality of the clustering based on the data itself.
    *   **Silhouette Coefficient:** Measures how similar a data point is to its own cluster compared to other clusters.  Ranges from -1 to 1 (higher is better).
    *   **Davies-Bouldin Index:** Measures the average similarity between each cluster and its most similar cluster.  Lower is better.
    *   **Within-Cluster Sum of Squares (WCSS):**  Measures the sum of squared distances between each data point and the centroid of its cluster.  Lower is better (used in the Elbow method to find the optimal *k* in K-Means).
*   **External Evaluation Metrics:** Evaluate the quality of the clustering by comparing it to a known ground truth (if available).
    *   **Purity:** Measures the extent to which each cluster contains data points from a single class.
    *   **Rand Index:** Measures the similarity between the clustering result and the ground truth.
    *   **Adjusted Rand Index (ARI):** A corrected-for-chance version of the Rand Index.
    *   **Normalized Mutual Information (NMI):**  Measures the mutual information between the clustering result and the ground truth, normalized by the entropy of each.
*   **Visual Inspection:**  Plotting the data points with different colors for each cluster can provide a qualitative assessment of the clustering result.

## 4. Application of Clustering in Classification

*   **Cluster Analysis as a Preprocessing Step:** Clustering can be used to identify subgroups of data points that are more homogeneous. This can improve the performance of classification algorithms by:
    *   **Reducing the complexity of the classification problem:**  By training separate classifiers on each cluster, you can create more specialized models.
    *   **Improving the accuracy of the classification:**  Clusters can reveal underlying structure in the data that is not apparent when training a single classifier on the entire dataset.
*   **Semi-Supervised Learning:**  Clustering can be used to assign pseudo-labels to unlabeled data points.  These pseudo-labels can then be used to train a classification model.
*   **Feature Engineering:**  Cluster membership can be used as a feature in a classification model.  For example, a new feature could represent the distance of a data point to the nearest cluster centroid.

## 5. Important Points to Remember

*   No single clustering algorithm is best for all datasets.  The choice of algorithm depends on the characteristics of the data, the desired cluster shape, and the computational resources available.
*   Parameter tuning is crucial for achieving good clustering results.
*   Evaluating the quality of the clustering is important for ensuring that the results are meaningful.
*   Clustering can be a valuable tool for data exploration, pattern discovery, and preprocessing for classification.

## 6. Practice Questions and Exercises

**Question 1:** What is the key difference between classification and clustering?

**Answer:** Classification is supervised learning with labeled data, aiming to predict class labels. Clustering is unsupervised learning with unlabeled data, aiming to discover groups of similar data points.

**Question 2:** Explain how K-Means clustering works and its limitations.

**Answer:** K-Means iteratively assigns data points to the nearest of *k* centroids and recalculates the centroids based on the mean of assigned points. Limitations include sensitivity to initial centroid selection, assumption of spherical clusters, and requiring pre-defined *k*.

**Question 3:** Describe the difference between agglomerative and divisive hierarchical clustering.

**Answer:** Agglomerative clustering starts with individual data points as clusters and merges them iteratively. Divisive clustering starts with all data points in one cluster and splits it recursively.

**Question 4:** What are the key parameters of the DBSCAN algorithm and how do they affect the clustering result?

**Answer:** The key parameters are epsilon (ε), the radius of the neighborhood, and MinPts, the minimum number of points within the epsilon neighborhood.  Small ε values may lead to many small clusters, while large ε values may merge clusters.  Small MinPts values may lead to more noise points, while large MinPts values may miss dense clusters.

**Question 5:** Explain how clustering can be used as a pre-processing step for classification.

**Answer:** Clustering can identify subgroups in the data, reducing the complexity of the classification problem and potentially improving accuracy by training specialized models for each cluster. Cluster membership can also be used as a new feature for classification.

**Exercise 1:** Given the data points (1, 2), (1.5, 1.8), (5, 8), (8, 8), (1, 0.6), (9, 11), perform one iteration of K-Means clustering with k=2 using initial centroids (1, 1) and (8, 8) and Euclidean distance.  Assign each data point to the closest centroid.

**Answer:**
*   **Centroid 1 (1, 1):**
    *   (1, 2): Distance = sqrt((1-1)^2 + (2-1)^2) = 1
    *   (1.5, 1.8): Distance = sqrt((1.5-1)^2 + (1.8-1)^2) = sqrt(0.25 + 0.64) = 0.94
    *   (5, 8): Distance = sqrt((5-1)^2 + (8-1)^2) = sqrt(16 + 49) = 8.06
    *   (8, 8): Distance = sqrt((8-1)^2 + (8-1)^2) = sqrt(49 + 49) = 9.9
    *   (1, 0.6): Distance = sqrt((1-1)^2 + (0.6-1)^2) = 0.4
    *   (9, 11): Distance = sqrt((9-1)^2 + (11-1)^2) = sqrt(64+100) = 12.8

*   **Centroid 2 (8, 8):**
    *   (1, 2): Distance = sqrt((1-8)^2 + (2-8)^2) = sqrt(49 + 36) = 9.22
    *   (1.5, 1.8): Distance = sqrt((1.5-8)^2 + (1.8-8)^2) = sqrt(42.25 + 67.24) = 10.46
    *   (5, 8): Distance = sqrt((5-8)^2 + (8-8)^2) = 3
    *   (8, 8): Distance = 0
    *   (1, 0.6): Distance = sqrt((1-8)^2 + (0.6-8)^2) = sqrt(49 + 54.76) = 10.18
    *   (9, 11): Distance = sqrt((9-8)^2 + (11-8)^2) = sqrt(1+9) = 3.16

*   **Assignment:**
    *   Cluster 1: (1, 2), (1.5, 1.8), (1, 0.6)
    *   Cluster 2: (5, 8), (8, 8), (9, 11)

**Exercise 2:** Consider a dataset with three data points: A(1,1), B(1.5, 1.5), C(5,1).  Perform one step of agglomerative hierarchical clustering using single linkage. Which two points would be merged first?

**Answer:**
* Distance(A, B) = sqrt((1.5-1)^2 + (1.5-1)^2) = sqrt(0.25 + 0.25) = sqrt(0.5) = 0.707
* Distance(A, C) = sqrt((5-1)^2 + (1-1)^2) = sqrt(16 + 0) = 4
* Distance(B, C) = sqrt((5-1.5)^2 + (1-1.5)^2) = sqrt(12.25 + 0.25) = sqrt(12.5) = 3.535

Using single linkage, the two closest points (A and B) would be merged first because the distance between them is the smallest.

These notes provide a solid foundation for understanding Clustering Paradigms within the context of Classification in Data Mining. Remember to practice applying these concepts to real-world datasets. Good luck!
