---
title: "Clustering - Introduction to clustering"
subject: "DATA MINING"
module: "Module 3: Classification "
branch: "Computer Science and Engineering"
semester: 5
topicId: "684162770fc9aa1fdbc8b8b1"
status: "completed"
scrapedAt: "2026-05-20T16:45:12.358Z"
---
# DATA MINING: Module 3 - Classification: Clustering - Introduction to Clustering

**Learning Outcomes:**

*   Understand the concept of clustering and its applications.
*   Distinguish between different types of clustering.
*   Explain the basic steps involved in a clustering process.
*   Describe various distance measures used in clustering.
*   Understand the concept of cluster quality and evaluation metrics.

## 1. Introduction to Clustering

*   **Definition:** Clustering is the process of grouping data objects into clusters such that objects within the same cluster are similar to each other and dissimilar to objects in other clusters.

*   **Unsupervised Learning:** Clustering is a form of unsupervised learning, meaning there are no predefined classes or labels to guide the grouping process.  The algorithm aims to discover inherent structure in the data.

*   **Key Idea:**  Maximize intra-cluster similarity and minimize inter-cluster similarity.

*   **Applications:**
    *   **Customer Segmentation:** Grouping customers based on purchasing behavior for targeted marketing.
    *   **Document Clustering:** Organizing documents by topic or theme.
    *   **Image Segmentation:**  Identifying objects and regions within an image.
    *   **Anomaly Detection:**  Identifying unusual data points that don't fit into any cluster.
    *   **Bioinformatics:**  Grouping genes with similar expression patterns.
    *   **Social Network Analysis:**  Identifying communities of users with similar interests.

## 2. Types of Clustering

*   **Partitioning Clustering:**
    *   Divides the data into non-overlapping subsets (clusters).
    *   Each data point belongs to exactly one cluster.
    *   Examples: K-Means, K-Medoids.
    *   Suitable when the number of clusters is known or can be reasonably estimated.

*   **Hierarchical Clustering:**
    *   Creates a hierarchy of clusters, from small to large.
    *   Can be visualized as a dendrogram (tree-like diagram).
    *   Two main types:
        *   **Agglomerative (Bottom-up):** Starts with each data point as a separate cluster and iteratively merges the closest clusters until a single cluster remains.
        *   **Divisive (Top-down):** Starts with all data points in a single cluster and recursively splits the clusters until each data point forms its own cluster.
    *   Examples:  Agglomerative hierarchical clustering (using different linkage methods), divisive hierarchical clustering.
    *   Useful when the desired number of clusters is unknown.

*   **Density-Based Clustering:**
    *   Identifies clusters based on the density of data points.
    *   Clusters are defined as dense regions separated by sparser regions.
    *   Examples: DBSCAN (Density-Based Spatial Clustering of Applications with Noise), OPTICS (Ordering Points To Identify the Clustering Structure).
    *   Effective at discovering clusters of arbitrary shapes and handling noise (outliers).

*   **Grid-Based Clustering:**
    *   Quantizes the data space into a grid structure.
    *   Clusters are formed by grouping adjacent grid cells with similar density.
    *   Example: STING (Statistical Information Grid).
    *   Fast and efficient for large datasets.

*   **Model-Based Clustering:**
    *   Assumes that the data is generated from a mixture of probability distributions.
    *   Each cluster is associated with a probability distribution (e.g., Gaussian).
    *   Example: Gaussian Mixture Models (GMM).
    *   Provides a probabilistic interpretation of the clusters.

## 3. The Clustering Process

1.  **Data Preprocessing:**
    *   **Data Cleaning:** Handle missing values, remove noise, and correct inconsistencies.
    *   **Feature Selection/Extraction:** Choose relevant features or create new features that are more informative for clustering.
    *   **Data Transformation/Normalization:** Scale or normalize the data to ensure that all features contribute equally to the distance calculations.  Common methods include:
        *   **Min-Max Scaling:** Scales features to a range between 0 and 1.
        *   **Z-Score Standardization:** Scales features to have a mean of 0 and a standard deviation of 1.

2.  **Selecting a Clustering Algorithm:**
    *   Choose an appropriate clustering algorithm based on the characteristics of the data, the desired shape of the clusters, and the computational resources available.  Consider the type of data (numerical, categorical), the expected cluster shape (spherical, arbitrary), and the presence of noise.

3.  **Defining Similarity/Distance Measure:**
    *   Select a suitable distance measure to quantify the similarity or dissimilarity between data points.  See section 4 for examples.

4.  **Applying the Clustering Algorithm:**
    *   Run the chosen clustering algorithm on the preprocessed data using the selected distance measure.

5.  **Evaluating the Clustering Results:**
    *   Assess the quality of the resulting clusters using appropriate evaluation metrics.  See section 5 for examples.
    *   Determine the optimal number of clusters, if required by the algorithm.

6.  **Interpretation and Visualization:**
    *   Interpret the meaning of the clusters and visualize the results to gain insights into the data.
    *   Label the clusters based on the characteristics of the data points they contain.

## 4. Distance Measures

*   **Euclidean Distance:**
    *   The straight-line distance between two points in a multi-dimensional space.
    *   Formula:  `sqrt(sum((xi - yi)^2))` for i = 1 to n, where x and y are two data points with n dimensions.
    *   Sensitive to the scale of the features.

*   **Manhattan Distance (City Block Distance):**
    *   The sum of the absolute differences between the coordinates of two points.
    *   Formula: `sum(|xi - yi|)` for i = 1 to n.
    *   Less sensitive to outliers than Euclidean distance.

*   **Minkowski Distance:**
    *   A generalization of Euclidean and Manhattan distances.
    *   Formula: `(sum(|xi - yi|^p))^(1/p)` for i = 1 to n.
    *   p = 2 corresponds to Euclidean distance.
    *   p = 1 corresponds to Manhattan distance.

*   **Cosine Similarity:**
    *   Measures the angle between two vectors.
    *   Formula: `(x . y) / (||x|| * ||y||)`, where x and y are two vectors, and . represents the dot product.
    *   Useful for text data and high-dimensional data.

*   **Jaccard Similarity:**
    *   Measures the similarity between two sets.
    *   Formula: `|A ∩ B| / |A ∪ B|`, where A and B are two sets.
    *   Useful for binary data and set-valued data.

*   **Hamming Distance:**
    *   Measures the number of positions at which two strings of equal length are different.
    *   Useful for categorical data or comparing bit strings.

**Choosing the Right Distance Measure:** The best distance measure depends on the type of data and the application. Consider:

*   **Numerical Data:** Euclidean, Manhattan, Minkowski
*   **Text Data:** Cosine Similarity
*   **Binary/Set Data:** Jaccard Similarity
*   **Categorical Data:** Hamming Distance

## 5. Cluster Quality and Evaluation Metrics

*   **Internal Measures:** Evaluate the quality of the clustering based on the data itself, without external labels.
    *   **Silhouette Coefficient:** Measures how similar an object is to its own cluster compared to other clusters.  Ranges from -1 to 1.  Higher values indicate better clustering.
    *   **Davies-Bouldin Index:** Measures the average similarity between each cluster and its most similar cluster. Lower values indicate better clustering.
    *   **Calinski-Harabasz Index (Variance Ratio Criterion):**  Measures the ratio of between-cluster variance to within-cluster variance.  Higher values indicate better clustering.

*   **External Measures:** Evaluate the quality of the clustering by comparing it to a known ground truth (i.e., labels).
    *   **Purity:** Measures the extent to which each cluster contains data points from a single class.
    *   **Rand Index:** Measures the percentage of correctly classified pairs of data points.
    *   **Adjusted Rand Index (ARI):**  A corrected-for-chance version of the Rand Index.
    *   **Normalized Mutual Information (NMI):** Measures the mutual information between the cluster assignments and the true labels, normalized by the entropy of the cluster assignments and the true labels.

**Interpreting Evaluation Metrics:**

*   There is no single "best" metric.  The choice of metric depends on the application and the nature of the data.
*   Internal measures are useful when ground truth is not available, but they may not always accurately reflect the true quality of the clustering.
*   External measures are more reliable when ground truth is available, but they require labeled data.

## 6. Important Points to Remember

*   Clustering is an unsupervised learning technique.
*   The choice of clustering algorithm and distance measure depends on the data and the application.
*   Data preprocessing is crucial for obtaining good clustering results.
*   Cluster evaluation is important for assessing the quality of the clustering.
*   The interpretation of the clusters is essential for extracting meaningful insights from the data.

## 7. Practice Questions and Exercises

**Question 1:** What is the key difference between clustering and classification?

**Answer:** Clustering is unsupervised learning, where the algorithm discovers groupings without predefined labels. Classification is supervised learning, where the algorithm learns a mapping from input features to predefined labels.

**Question 2:** Explain the difference between agglomerative and divisive hierarchical clustering.

**Answer:** Agglomerative clustering starts with each data point as a separate cluster and iteratively merges the closest clusters until a single cluster remains (bottom-up). Divisive clustering starts with all data points in a single cluster and recursively splits the clusters until each data point forms its own cluster (top-down).

**Question 3:** When would you prefer to use cosine similarity over Euclidean distance?

**Answer:** Cosine similarity is preferred over Euclidean distance when dealing with text data or high-dimensional data.  Cosine similarity measures the angle between vectors and is less sensitive to the magnitude of the vectors.

**Question 4:** What are some limitations of K-Means clustering?

**Answer:** K-Means requires specifying the number of clusters (K) in advance. It is also sensitive to the initial placement of the cluster centroids and may converge to a local optimum.  It works best with spherical clusters and can struggle with non-convex shapes.

**Question 5:** Given the following data points: (1, 2), (1, 4), (1, 0), (4, 2), (4, 4), (4, 0). Perform one iteration of K-Means clustering with K=2 and initial centroids at (1, 2) and (4, 2) using Euclidean distance. What will the clusters be after the first iteration?

**Answer:**

1.  **Calculate Distances:**

    *   **To (1, 2):**
        *   (1, 2): sqrt((1-1)^2 + (2-2)^2) = 0
        *   (1, 4): sqrt((1-1)^2 + (4-2)^2) = 2
        *   (1, 0): sqrt((1-1)^2 + (0-2)^2) = 2
        *   (4, 2): sqrt((4-1)^2 + (2-2)^2) = 3
        *   (4, 4): sqrt((4-1)^2 + (4-2)^2) = sqrt(13) ≈ 3.61
        *   (4, 0): sqrt((4-1)^2 + (0-2)^2) = sqrt(13) ≈ 3.61
    *   **To (4, 2):**
        *   (1, 2): sqrt((1-4)^2 + (2-2)^2) = 3
        *   (1, 4): sqrt((1-4)^2 + (4-2)^2) = sqrt(13) ≈ 3.61
        *   (1, 0): sqrt((1-4)^2 + (0-2)^2) = sqrt(13) ≈ 3.61
        *   (4, 2): sqrt((4-4)^2 + (2-2)^2) = 0
        *   (4, 4): sqrt((4-4)^2 + (4-2)^2) = 2
        *   (4, 0): sqrt((4-4)^2 + (0-2)^2) = 2

2.  **Assign to Clusters:**

    *   (1, 2): Closer to (1, 2) -> Cluster 1
    *   (1, 4): Closer to (1, 2) -> Cluster 1
    *   (1, 0): Closer to (1, 2) -> Cluster 1
    *   (4, 2): Closer to (4, 2) -> Cluster 2
    *   (4, 4): Closer to (4, 2) -> Cluster 2
    *   (4, 0): Closer to (4, 2) -> Cluster 2

3.  **Resulting Clusters:**

    *   Cluster 1: {(1, 2), (1, 4), (1, 0)}
    *   Cluster 2: {(4, 2), (4, 4), (4, 0)}

**Question 6:** Describe a scenario where DBSCAN would be more appropriate than K-Means.

**Answer:** DBSCAN is more appropriate than K-Means when the clusters are non-spherical or when the data contains noise (outliers). K-Means assumes that clusters are spherical and can be significantly affected by outliers. DBSCAN can identify clusters of arbitrary shapes and is robust to noise because it defines clusters based on density.  An example is detecting oddly shaped clusters of customers on a map based on their GPS locations, even when there is significant noise in the data.
