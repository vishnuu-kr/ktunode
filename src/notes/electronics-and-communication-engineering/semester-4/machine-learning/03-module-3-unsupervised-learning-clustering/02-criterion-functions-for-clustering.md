---
title: "criterion functions for clustering"
subject: "MACHINE LEARNING"
module: "Module 3: Unsupervised learning: Clustering"
branch: "Electronics and Communication Engineering"
semester: 4
topicId: "68a5c45eb09ce205780fe62d"
status: "completed"
scrapedAt: "2026-05-23T17:50:19.250Z"
---
## MACHINE LEARNING: Module 3 - Unsupervised Learning: Clustering

### Topic: Criterion Functions for Clustering

**1. Introduction to Clustering and its Goal**

Clustering is a fundamental technique in unsupervised learning that aims to partition a dataset into groups (clusters) such that data points within the same cluster are more similar to each other than to those in other clusters. The primary goal is to discover inherent groupings in the data without prior knowledge of class labels.

**Key Concept:** **Similarity/Dissimilarity Measure:** The effectiveness of clustering heavily relies on how we define "similarity" or "dissimilarity" between data points. Common measures include:
    *   **Euclidean Distance:** The straight-line distance between two points.
    *   **Manhattan Distance:** The sum of the absolute differences of their Cartesian coordinates.
    *   **Cosine Similarity:** Measures the cosine of the angle between two vectors.

**Learning Outcome Addressed:** Implicitly addressed by understanding the objective of clustering, which is to group similar items. This is foundational for CO3.

**2. The Role of Criterion Functions in Clustering**

Criterion functions, also known as objective functions or loss functions in the context of clustering, are mathematical expressions that quantify the quality of a particular clustering solution. The goal of clustering algorithms is to find a partitioning of the data that optimizes (minimizes or maximizes) a chosen criterion function.

**Key Concept:** **Optimization Problem:** Clustering can be framed as an optimization problem where we search for the best cluster assignment for each data point.

**Reference:** *Introduction to Machine Learning with Python* by Müller & Guido emphasizes that clustering algorithms often work by iteratively trying to improve an objective function.

**3. Common Types of Criterion Functions**

Criterion functions can be broadly categorized based on what they aim to achieve:

**3.1. Minimizing Intra-cluster Variance (Maximizing Inter-cluster Variance)**

These criterion functions aim to create clusters where the data points are as close to their respective cluster centroids as possible.

*   **Within-Cluster Sum of Squares (WCSS) / Inertia:** This is a very common criterion. It sums the squared distances of each data point to the centroid of its assigned cluster.
    *   **Formula:** $WCSS = \sum_{k=1}^{K} \sum_{x_i \in C_k} ||x_i - \mu_k||^2$
        *   $K$: Number of clusters
        *   $C_k$: The $k$-th cluster
        *   $x_i$: A data point
        *   $\mu_k$: The centroid (mean) of cluster $C_k$
    *   **Goal:** Minimize WCSS.
    *   **Algorithm Association:** K-Means clustering directly optimizes this criterion.

    **Example:** Imagine clustering customer purchase behaviors. A low WCSS would indicate that customers within each cluster have similar purchasing patterns and are close to the average behavior of that cluster.

*   **Davies-Bouldin Index (DBI):** Measures the average similarity ratio of each cluster with its most similar cluster. A lower DBI indicates better clustering. It considers both intra-cluster compactness and inter-cluster separation.
    *   **Formula:** $DBI = \frac{1}{K} \sum_{k=1}^{K} \max_{j \neq k} \left( \frac{s_k + s_j}{d(C_k, C_j)} \right)$
        *   $s_k$: Average distance of points in cluster $C_k$ to its centroid.
        *   $d(C_k, C_j)$: Distance between centroids of cluster $C_k$ and cluster $C_j$.
    *   **Goal:** Minimize DBI.
    *   **Use Case:** Used for evaluating the quality of a clustering solution after it has been obtained.

**Learning Outcomes Addressed:**
    *   **CO3:** Designs and executes clustering techniques (by understanding what these techniques optimize) and assesses their effectiveness (by understanding evaluation metrics like DBI). (Knowledge Level: K3)

**3.2. Maximizing Inter-cluster Distance (Separation)**

These criteria focus on ensuring that clusters are as far apart from each other as possible.

*   **Sum of Inter-cluster Distances:** Maximizing the sum of distances between the centroids of all pairs of clusters.
    *   **Goal:** Maximize $\sum_{k=1}^{K} \sum_{j=k+1}^{K} ||\mu_k - \mu_j||$

*   **Silhouette Score:** Although more of an evaluation metric, it implicitly encourages well-separated clusters. It measures how similar a data point is to its own cluster (cohesion) compared to other clusters (separation).
    *   **Formula for a data point $i$:** $s(i) = \frac{b(i) - a(i)}{\max(a(i), b(i))}$
        *   $a(i)$: Average distance of $i$ to all other data points in the *same* cluster.
        *   $b(i)$: Average distance of $i$ to all data points in the *closest other* cluster.
    *   **Interpretation:**
        *   $s(i) \approx 1$: The point is well-clustered.
        *   $s(i) \approx 0$: The point is near a decision boundary.
        *   $s(i) \approx -1$: The point is likely misclassified.
    *   **Overall Silhouette Score:** The average of $s(i)$ for all data points.
    *   **Goal:** Maximize the average Silhouette Score.

    **Example:** In image segmentation, a high Silhouette Score would indicate that pixels belonging to a particular object (cluster) are clearly distinct from pixels belonging to other objects.

**Learning Outcomes Addressed:**
    *   **CO3:** Designs and executes clustering techniques and assesses their effectiveness using various proximity measures. (Knowledge Level: K3)

**3.3. Model-Based Criterion Functions (e.g., Gaussian Mixture Models - GMM)**

These approaches assume that the data is generated from a mixture of probability distributions, often Gaussian. The criterion function involves finding the parameters of these distributions that best explain the observed data.

*   **Maximum Likelihood Estimation (MLE):** For GMMs, the goal is to find the parameters (means, covariances, and mixing proportions of the Gaussian components) that maximize the likelihood of observing the given dataset.
    *   **Algorithm Association:** Expectation-Maximization (EM) algorithm is commonly used to find the MLE for GMMs.

    **Reference:** *Pattern Recognition and Machine Learning* by Bishop provides a detailed mathematical treatment of GMMs and the EM algorithm for parameter estimation.

**Learning Outcomes Addressed:**
    *   **CO1:** Analyzes and applies unsupervised machine learning techniques (like GMMs) to solve various data-driven problems. (Knowledge Level: K4)
    *   **CO4:** Applies unsupervised learning techniques (GMMs) for complex problem-solving. (Knowledge Level: K3)

**4. Criterion Functions and Algorithm Selection**

The choice of criterion function is often tied to the specific clustering algorithm being used.

*   **K-Means:** Explicitly designed to minimize the WCSS.
*   **Hierarchical Clustering:** While not directly optimizing a single criterion function in the same way as K-Means, it often uses similarity/dissimilarity measures to decide which clusters to merge, implicitly aiming for compactness and separation at different levels.
*   **DBSCAN:** Focuses on density, grouping together points that are closely packed together, marking points that lie alone in low-density regions as outliers. Its "criterion" is more about connectivity in a dense region.
*   **Gaussian Mixture Models (GMMs):** Optimize the likelihood of the data under a mixture of Gaussian distributions, typically using the EM algorithm.

**Important Point to Remember:** Different criterion functions lead to different types of clusters. A WCSS-minimizing algorithm like K-Means will tend to find spherical clusters, while other methods might find clusters of arbitrary shapes.

**Learning Outcomes Addressed:**
    *   **CO3:** Designs and executes clustering techniques. (Knowledge Level: K3)

**5. Practical Considerations and Challenges**

*   **Number of Clusters (K):** Many criterion functions are sensitive to the number of clusters chosen. Techniques like the Elbow Method or Silhouette Analysis are used to help determine an optimal $K$.
*   **Initialization:** For iterative algorithms like K-Means, the initial placement of centroids can significantly impact the final clustering result.
*   **Local Optima:** Optimization algorithms can get stuck in local optima, meaning they find a good solution but not necessarily the absolute best possible solution according to the criterion function.

**Reference:** *Hands-on Machine Learning with Scikit-Learn, Keras, and TensorFlow* by Geron discusses the practical challenges of K-Means, including initialization sensitivity and the need for hyperparameter tuning.

**Learning Outcomes Addressed:**
    *   **CO1:** Analyzes and applies unsupervised machine learning techniques. (Knowledge Level: K4)
    *   **CO3:** Designs and executes clustering techniques. (Knowledge Level: K3)

**6. Practice Questions**

1.  **Question:** What is the primary objective of a criterion function in clustering?
    **Answer:** The primary objective is to provide a quantitative measure of the quality of a clustering solution, guiding the algorithm to find the optimal partitioning of the data.

2.  **Question:** Explain the concept of Within-Cluster Sum of Squares (WCSS) and which algorithm is famously associated with its minimization.
    **Answer:** WCSS measures the total squared distance between each data point and its cluster centroid. A lower WCSS indicates more compact clusters. The K-Means algorithm is designed to minimize WCSS.

3.  **Question:** How does the Davies-Bouldin Index (DBI) differ from WCSS in its approach to evaluating clustering quality?
    **Answer:** WCSS focuses solely on intra-cluster compactness. DBI, however, considers both intra-cluster compactness (average distance of points to centroid) and inter-cluster separation (distance between centroids). A good clustering according to DBI has compact clusters that are also well-separated from each other.

4.  **Question:** Why is the Silhouette Score considered a good metric for assessing clustering quality, particularly regarding cluster separation?
    **Answer:** The Silhouette Score for a data point measures how similar it is to its own cluster versus how similar it is to the nearest neighboring cluster. A high Silhouette Score indicates that the point is well-matched to its cluster and poorly matched to other clusters, thus promoting both cohesion and separation.

5.  **Question:** Briefly describe the criterion function used in Gaussian Mixture Models (GMMs).
    **Answer:** GMMs use Maximum Likelihood Estimation (MLE) as their criterion function. The goal is to find the parameters of Gaussian distributions (means, covariances, mixing proportions) that maximize the probability of observing the given data.

**7. Key Points to Remember**

*   **Criterion functions are the backbone of clustering algorithms**, providing a mathematical basis for evaluating and optimizing cluster assignments.
*   **Minimizing WCSS** leads to compact, spherical clusters, often achieved by K-Means.
*   **Metrics like DBI and Silhouette Score** provide more holistic evaluations by considering both cluster compactness and separation.
*   **Model-based approaches** (like GMMs) use likelihood-based criterion functions to fit data to probabilistic models.
*   The **choice of criterion function directly influences the type of clusters discovered** and the suitability of the algorithm for a given problem.
*   **Practical challenges** like determining the number of clusters and handling local optima are crucial when working with criterion functions.

This set of notes covers the core concepts of criterion functions for clustering, their different types, their relationship with algorithms, and practical considerations, directly addressing the learning and course outcomes.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=mc979OhitAg) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=F_4HkL5r4n0) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=8XG7U5yN668) |
