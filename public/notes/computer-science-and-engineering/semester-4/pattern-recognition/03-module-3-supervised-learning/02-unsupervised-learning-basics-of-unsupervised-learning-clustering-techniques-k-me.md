---
title: "Unsupervised Learning - Basics of unsupervised learning, Clustering 
techniques: k-means, hierarchical clustering, Gaussian Mixture Models  
(GMM) (Text 1, Chapter 9)"
subject: "PATTERN RECOGNITION"
module: "Module 3: Supervised Learning "
branch: "Computer Science and Engineering"
semester: 4
topicId: "684162750fc9aa1fdbc8b0bf"
status: "completed"
scrapedAt: "2026-05-20T16:15:12.528Z"
---
# PATTERN RECOGNITION - Module 3: Supervised Learning - Unsupervised Learning

**Topic:** Unsupervised Learning - Basics of unsupervised learning, Clustering techniques: k-means, hierarchical clustering, Gaussian Mixture Models (GMM) (Text 1, Chapter 9)

**Description:** Unsupervised learning methods and key clustering algorithms for pattern recognition.

**Learning Outcomes:**

*   Understand the fundamental concepts of unsupervised learning and its differences from supervised learning.
*   Explain the concept of clustering and its applications.
*   Implement and apply the k-means clustering algorithm.
*   Explain and apply hierarchical clustering methods (agglomerative and divisive).
*   Describe and apply Gaussian Mixture Models (GMM) for clustering.
*   Compare and contrast k-means, hierarchical clustering, and GMM.
*   Evaluate the performance of different clustering algorithms.

---

## 1. Basics of Unsupervised Learning

*   **Definition:** Unsupervised learning is a type of machine learning where the algorithm learns patterns from unlabeled data.  Unlike supervised learning, there are no predefined target variables or correct answers provided during the training phase.

*   **Key Characteristics:**
    *   **Unlabeled Data:** The training data consists of input features without corresponding output labels.
    *   **Pattern Discovery:** The primary goal is to discover hidden patterns, structures, or relationships within the data.
    *   **Data Exploration:** Used to explore data, identify groups, reduce dimensionality, and detect anomalies.

*   **Contrast with Supervised Learning:**

    | Feature         | Supervised Learning                                   | Unsupervised Learning                               |
    |-----------------|-------------------------------------------------------|-------------------------------------------------------|
    | Data            | Labeled data (input features and target variables) | Unlabeled data (input features only)                |
    | Goal            | Predict a target variable based on input features     | Discover patterns and structure in the data          |
    | Common Tasks   | Classification, Regression                            | Clustering, Dimensionality Reduction, Association Rule Mining |
    | Examples        | Image classification, Spam detection                 | Customer segmentation, Anomaly detection             |

*   **Common Tasks in Unsupervised Learning:**
    *   **Clustering:** Grouping similar data points together.
    *   **Dimensionality Reduction:** Reducing the number of features while preserving important information. (e.g., PCA, t-SNE)
    *   **Association Rule Mining:** Discovering relationships between variables in large datasets. (e.g., market basket analysis)
    *   **Anomaly Detection:** Identifying data points that deviate significantly from the norm.

*   **Applications of Unsupervised Learning:**
    *   **Customer Segmentation:** Grouping customers based on purchasing behavior.
    *   **Anomaly Detection:** Identifying fraudulent transactions or network intrusions.
    *   **Document Clustering:** Grouping similar documents together.
    *   **Image Segmentation:** Partitioning an image into multiple regions.
    *   **Recommender Systems:** Suggesting items based on user preferences and item similarities.
    *   **Bioinformatics:** Discovering patterns in gene expression data.

## 2. Clustering

*   **Definition:** Clustering is the task of grouping a set of objects in such a way that objects in the same group (called a cluster) are more similar (in some sense) to each other than to those in other groups (clusters).

*   **Goals of Clustering:**
    *   Maximize intra-cluster similarity.
    *   Minimize inter-cluster similarity.

*   **Similarity Measures:**
    *   **Distance-based:**
        *   **Euclidean Distance:**  Most common, measures straight-line distance.  `sqrt(sum((x_i - y_i)^2))`
        *   **Manhattan Distance:** Measures the sum of absolute differences of coordinates. `sum(|x_i - y_i|)`
        *   **Minkowski Distance:** A generalization of Euclidean and Manhattan distances.  `(sum(|x_i - y_i|^p))^(1/p)`
        *   **Cosine Similarity:** Measures the cosine of the angle between two vectors, often used for text data. `(A . B) / (||A|| ||B||)`
    *   **Correlation-based:**
        *   **Pearson Correlation:** Measures the linear relationship between two variables.
    *   The choice of similarity measure depends on the type of data and the application.

*   **Types of Clustering Algorithms:**
    *   **Partitioning Clustering:**  Divides the data into non-overlapping clusters (e.g., k-means).
    *   **Hierarchical Clustering:** Creates a hierarchy of clusters (e.g., agglomerative and divisive clustering).
    *   **Density-Based Clustering:** Identifies clusters based on the density of data points (e.g., DBSCAN).
    *   **Model-Based Clustering:** Assumes that the data is generated from a mixture of probability distributions (e.g., GMM).

## 3. k-means Clustering

*   **Algorithm:**
    1.  **Initialization:** Choose the number of clusters, *k*, and randomly initialize *k* cluster centroids.
    2.  **Assignment Step:** Assign each data point to the nearest centroid, based on a distance metric (e.g., Euclidean distance).
    3.  **Update Step:** Recalculate the centroids of each cluster by taking the mean of all data points assigned to that cluster.
    4.  **Iteration:** Repeat steps 2 and 3 until the centroids no longer change significantly or a maximum number of iterations is reached.

*   **Mathematical Formulation:**

    *   Let *X* = {x₁, x₂, ..., xₙ} be the set of *n* data points.
    *   Let *k* be the number of clusters.
    *   Let *μᵢ* be the centroid of cluster *i* (where *i* = 1, 2, ..., *k*).
    *   The objective is to minimize the within-cluster sum of squares (WCSS), also known as the inertia:

        `WCSS = Σᵢ Σₓ (||x - μᵢ||²), for all x ∈ cluster i`

*   **Advantages:**
    *   Simple and easy to implement.
    *   Relatively efficient for large datasets.

*   **Disadvantages:**
    *   Sensitive to initial centroid selection.
    *   Requires specifying the number of clusters, *k*, beforehand.
    *   Assumes clusters are spherical and equally sized.
    *   Sensitive to outliers.

*   **Choosing the optimal *k*:**
    *   **Elbow Method:** Plot the WCSS for different values of *k*. The "elbow" point (where the decrease in WCSS starts to diminish) suggests an optimal *k*.
    *   **Silhouette Score:** Measures how well each data point fits within its cluster. Values closer to 1 indicate better clustering.

*   **Example:**
    Imagine you have data on customer spending habits (e.g., amount spent per month, number of purchases). Using k-means, you could group customers into segments such as "high spenders," "moderate spenders," and "low spenders." You can then tailor marketing strategies to each segment.

*   **Practice Question:**
    You have a dataset of 100 data points.  You run k-means with k=2, k=3, k=4, k=5 and calculate the WCSS for each.  The WCSS values are 500, 300, 250, 230 respectively.  Using the elbow method, which value of k would you choose and why?

    *   **Answer:** You would likely choose k=3. The significant drop in WCSS occurs between k=2 and k=3. After k=3, the reduction in WCSS becomes smaller, indicating diminishing returns.

## 4. Hierarchical Clustering

*   **Definition:** Hierarchical clustering builds a hierarchy of clusters by iteratively merging or splitting clusters.

*   **Types:**
    *   **Agglomerative (Bottom-Up):** Starts with each data point as a separate cluster and successively merges the closest clusters until only one cluster remains.
    *   **Divisive (Top-Down):** Starts with all data points in a single cluster and successively splits the cluster into smaller clusters until each data point is in its own cluster.

*   **Agglomerative Clustering:**

    1.  **Initialization:** Treat each data point as a single cluster.
    2.  **Distance Calculation:** Compute the distance matrix between all pairs of clusters.
    3.  **Merging:** Merge the two closest clusters based on a linkage criterion.
    4.  **Update:** Update the distance matrix.
    5.  **Iteration:** Repeat steps 3 and 4 until only one cluster remains.

*   **Linkage Criteria:**

    *   **Single Linkage:**  Minimum distance between points in two clusters.  Can lead to "chaining" and elongated clusters.
    *   **Complete Linkage:** Maximum distance between points in two clusters.  Tends to produce compact clusters.
    *   **Average Linkage:** Average distance between all pairs of points in two clusters.  A compromise between single and complete linkage.
    *   **Ward's Method:** Minimizes the increase in WCSS when two clusters are merged. Often produces balanced clusters.

*   **Divisive Clustering:**

    1.  **Initialization:** Start with all data points in a single cluster.
    2.  **Splitting:** Split the cluster into two sub-clusters (e.g., using k-means).
    3.  **Iteration:** Recursively split the clusters until each data point is in its own cluster.

*   **Dendrogram:** A tree-like diagram that visualizes the hierarchy of clusters. The height of the branches represents the distance between clusters.

*   **Advantages:**
    *   Does not require specifying the number of clusters beforehand.
    *   Provides a hierarchical representation of the data.
    *   Useful for exploring data at different levels of granularity.

*   **Disadvantages:**
    *   Can be computationally expensive, especially for large datasets.
    *   Sensitive to noise and outliers.
    *   Difficult to modify once a split or merge decision is made.

*   **Example:**
    In biological taxonomy, hierarchical clustering can be used to build a tree-like structure representing the evolutionary relationships between different species.

*   **Practice Question:**
    Explain the difference between single linkage and complete linkage in hierarchical clustering.  Which linkage method is more likely to produce elongated clusters?

    *   **Answer:** Single linkage considers the shortest distance between any two points in two clusters, while complete linkage considers the longest distance. Single linkage is more likely to produce elongated clusters due to its tendency to link clusters based on just a few close points.

## 5. Gaussian Mixture Models (GMM)

*   **Definition:** GMM is a probabilistic model that assumes the data is generated from a mixture of several Gaussian distributions, each representing a cluster.

*   **Key Concepts:**

    *   **Gaussian Distribution (Normal Distribution):** Defined by a mean (μ) and covariance matrix (Σ).
    *   **Mixture Components:** Each Gaussian distribution in the mixture.
    *   **Mixing Coefficients (Weights):**  The probability that a data point belongs to a specific Gaussian distribution.  They sum to 1.

*   **Mathematical Formulation:**

    *   The probability density function of a GMM is given by:

        `p(x) = Σᵢ πᵢ * N(x | μᵢ, Σᵢ)`

        where:
            *   *x* is a data point.
            *   *πᵢ* is the mixing coefficient for component *i*.
            *   *N(x | μᵢ, Σᵢ)* is the Gaussian distribution with mean *μᵢ* and covariance matrix *Σᵢ*.

*   **Algorithm (Expectation-Maximization - EM):**

    1.  **Initialization:** Choose the number of components, *k*, and randomly initialize the parameters (means, covariances, and mixing coefficients) of each Gaussian distribution.
    2.  **Expectation (E) Step:** Calculate the responsibility of each component for each data point. The responsibility represents the probability that a data point belongs to a specific component.  This is essentially a "soft" assignment.
    3.  **Maximization (M) Step:** Update the parameters of each Gaussian distribution based on the responsibilities.
    4.  **Iteration:** Repeat steps 2 and 3 until the parameters converge or a maximum number of iterations is reached.

*   **Advantages:**
    *   Can handle clusters with non-spherical shapes.
    *   Provides probabilities of belonging to each cluster.
    *   More flexible than k-means.

*   **Disadvantages:**
    *   Can be computationally expensive, especially for high-dimensional data.
    *   Sensitive to initial parameter selection.
    *   May converge to local optima.
    *   Requires specifying the number of components, *k*, beforehand.

*   **Choosing the optimal *k*:**
    *   **Bayesian Information Criterion (BIC):** Penalizes model complexity and rewards goodness of fit. Lower BIC values indicate better models.
    *   **Akaike Information Criterion (AIC):** Similar to BIC, but penalizes model complexity less heavily.

*   **Example:**
    In image segmentation, GMM can be used to model the distribution of pixel colors in different regions of the image. Each Gaussian component represents a different color region.

*   **Practice Question:**
    Explain the role of the Expectation (E) and Maximization (M) steps in the EM algorithm used to train GMMs.

    *   **Answer:** The E-step calculates the probability (responsibility) of each data point belonging to each Gaussian component based on the current model parameters.  The M-step then uses these responsibilities to update the model parameters (means, covariances, mixing coefficients) to maximize the likelihood of the data given the model. The E and M steps are repeated iteratively until the model parameters converge.

## 6. Comparison of k-means, Hierarchical Clustering, and GMM

| Feature           | k-means                               | Hierarchical Clustering                  | GMM                                        |
|-------------------|---------------------------------------|------------------------------------------|---------------------------------------------|
| Cluster Shape     | Spherical                             | Flexible (depends on linkage)            | Ellipsoidal                                 |
| Number of Clusters| Must be specified beforehand            | Not required                               | Must be specified beforehand                |
| Scalability       | Relatively scalable                   | Can be computationally expensive          | Can be computationally expensive             |
| Output            | Hard cluster assignment                 | Hierarchy of clusters (dendrogram)       | Soft cluster assignment (probabilities)      |
| Model             | Centroid-based                        | Distance-based                           | Probabilistic (Gaussian distributions)       |
| Handling Outliers | Sensitive                             | Sensitive                                | Can be robust with appropriate covariance |

## 7. Evaluating Clustering Performance

*   **Intrinsic Evaluation:** Evaluates the quality of clustering based on the data itself, without external labels.

    *   **Silhouette Score:** Measures how well each data point fits within its cluster. Values closer to 1 indicate better clustering.
    *   **Davies-Bouldin Index:** Measures the average similarity ratio between clusters. Lower values indicate better clustering.
    *   **Calinski-Harabasz Index:** Measures the ratio of between-cluster variance to within-cluster variance. Higher values indicate better clustering.

*   **Extrinsic Evaluation:** Evaluates the quality of clustering based on external labels (ground truth). This is used if you know the "true" cluster assignments beforehand.

    *   **Purity:** Measures the extent to which each cluster contains data points from a single class.
    *   **Rand Index:** Measures the similarity between the clustering results and the ground truth.
    *   **Adjusted Rand Index (ARI):** A corrected-for-chance version of the Rand Index.
    *   **Normalized Mutual Information (NMI):** Measures the amount of information that the clustering results and the ground truth share.

*   **Choosing an Evaluation Metric:**  The choice of evaluation metric depends on the availability of ground truth labels and the specific goals of the clustering task.

---

**Important Points to Remember:**

*   Unsupervised learning deals with unlabeled data.
*   Clustering aims to group similar data points together.
*   k-means is a simple and efficient partitioning algorithm but requires specifying *k* and assumes spherical clusters.
*   Hierarchical clustering builds a hierarchy of clusters and doesn't require specifying *k*.
*   GMM models data as a mixture of Gaussian distributions and provides probabilities of belonging to each cluster.
*   The choice of clustering algorithm and evaluation metric depends on the specific application and data characteristics.

This comprehensive study guide should provide a strong foundation for understanding the basics of unsupervised learning and the key clustering techniques of k-means, hierarchical clustering, and GMM. Remember to practice implementing these algorithms and applying them to real-world datasets to solidify your understanding. Good luck!
