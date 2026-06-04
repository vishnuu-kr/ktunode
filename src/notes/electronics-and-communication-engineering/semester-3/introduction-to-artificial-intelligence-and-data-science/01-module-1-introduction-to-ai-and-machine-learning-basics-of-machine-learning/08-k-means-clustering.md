---
title: "K-means clustering"
subject: "INTRODUCTION TO ARTIFICIAL INTELLIGENCE AND DATA 
SCIENCE"
module: "Module 1: Introduction to AI and Machine Learning : Basics of Machine Learning"
branch: "Electronics and Communication Engineering"
semester: 3
topicId: "68a5c45db09ce205780fe33f"
status: "completed"
scrapedAt: "2026-05-23T17:45:38.551Z"
---
## Study Notes: K-means Clustering

**Subject:** INTRODUCTION TO ARTIFICIAL INTELLIGENCE AND DATA SCIENCE
**Module:** Module 1: Introduction to AI and Machine Learning: Basics of Machine Learning
**Topic:** K-means Clustering

---

### 1. Introduction to K-means Clustering

K-means clustering is a popular **unsupervised learning algorithm** used for **partitioning a dataset into a predefined number of clusters (k)**. The goal is to group similar data points together into clusters, such that data points within the same cluster are more similar to each other than to those in other clusters.

*   **Unsupervised Learning:** Unlike supervised learning, K-means does not require labeled data. It discovers inherent patterns and structures in the data.
*   **Clustering:** The process of grouping data points into subsets (clusters) based on their similarity.
*   **Centroid:** The mean of all data points assigned to a particular cluster. It represents the center of the cluster.

**Relevance to Course Outcomes:**

*   **CO1 (Apply machine learning algorithms):** K-means is a fundamental clustering algorithm that can be applied to various engineering problems requiring data grouping.
*   **CO4 (Integrate statistical approaches and machine learning techniques):** K-means, while primarily an ML algorithm, relies on distance metrics which have statistical underpinnings.

---

### 2. The K-means Algorithm: Step-by-Step

The K-means algorithm iteratively refines cluster assignments and centroids until convergence.

**Algorithm Steps:**

1.  **Initialization:**
    *   **Choose the number of clusters (k):** This is a hyperparameter that needs to be set by the user.
    *   **Initialize centroids:** Randomly select k data points from the dataset as initial cluster centroids, or use a more sophisticated initialization method like K-means++.

2.  **Assignment Step:**
    *   For each data point in the dataset, calculate its distance to each of the k centroids.
    *   Assign the data point to the cluster whose centroid is closest to it. The most common distance metric used is the **Euclidean distance**.

3.  **Update Step:**
    *   For each cluster, recalculate the position of its centroid. The new centroid is the **mean (average)** of all data points assigned to that cluster.

4.  **Iteration:**
    *   Repeat the **Assignment Step** and **Update Step** until the centroids no longer move significantly (i.e., the cluster assignments stabilize) or a maximum number of iterations is reached.

**Mathematical Formulation (Euclidean Distance):**

Given a data point $x_i$ and a centroid $c_j$, the Euclidean distance is calculated as:

$d(x_i, c_j) = \sqrt{\sum_{l=1}^{d} (x_{i,l} - c_{j,l})^2}$

where:
*   $x_i$ is the i-th data point.
*   $c_j$ is the j-th centroid.
*   $d$ is the number of dimensions (features) of the data points.
*   $x_{i,l}$ and $c_{j,l}$ are the l-th component of the i-th data point and the j-th centroid, respectively.

**Objective Function (Minimization):**

K-means aims to minimize the **within-cluster sum of squares (WCSS)**, also known as inertia:

$WCSS = \sum_{j=1}^{k} \sum_{x_i \in C_j} ||x_i - c_j||^2$

where:
*   $C_j$ is the set of data points assigned to cluster $j$.
*   $c_j$ is the centroid of cluster $j$.

**Important Note:** The initialization of centroids can significantly impact the final clustering result.

---

### 3. Key Concepts and Definitions

*   **Clustering:** The task of dividing a dataset into groups (clusters) such that data points within a cluster are similar to each other and dissimilar to data points in other clusters.
*   **Unsupervised Learning:** A type of machine learning where the algorithm learns from data that has not been labeled, classified, or categorized.
*   **k:** The number of clusters, a user-defined hyperparameter.
*   **Centroid:** The mean of the data points in a cluster, representing the cluster's center.
*   **Euclidean Distance:** A common metric to measure the straight-line distance between two points in Euclidean space.
*   **Inertia (WCSS):** The sum of squared distances of samples to their closest cluster center. Lower inertia generally indicates better clustering.
*   **Convergence:** The state where the algorithm's parameters (centroids) no longer change significantly between iterations.
*   **Hyperparameter:** A parameter whose value is set before the learning process begins. 'k' is a hyperparameter for K-means.

---

### 4. How to Choose 'k' (Number of Clusters)

Choosing the optimal value for 'k' is crucial. Several methods can help:

*   **Elbow Method:**
    *   Run K-means for a range of 'k' values (e.g., from 1 to 10).
    *   For each 'k', calculate the WCSS (inertia).
    *   Plot the WCSS against the number of clusters 'k'.
    *   The plot will typically show a downward trend. The "elbow" point on the plot, where the rate of decrease in WCSS sharply changes, is often considered a good choice for 'k'. This indicates diminishing returns from adding more clusters.
    *   *Reference:* This method is widely discussed in machine learning literature, including **Géron's "Hands-on Machine Learning"** and **Cielen et al.'s "Introducing Data Science."**

*   **Silhouette Score:**
    *   Measures how similar a data point is to its own cluster compared to other clusters.
    *   It ranges from -1 to +1.
        *   A high score means the data point is well-matched to its own cluster and poorly matched to neighboring clusters.
        *   A score of 0 indicates that the data point is on the boundary between two clusters.
        *   A negative score suggests that the data point might have been assigned to the wrong cluster.
    *   The average silhouette score across all data points can be used to evaluate different values of 'k'. The 'k' that maximizes the average silhouette score is often preferred.
    *   *Reference:* For detailed mathematical background on silhouette scores, refer to **Deisenroth, Faisal, and Ong's "Mathematics for Machine Learning"** or **Gupta and Kapoor's "Fundamentals of Mathematical Statistics"** for general statistical evaluation metrics.

*   **Domain Knowledge:** Often, the specific problem or application provides insights into a reasonable number of clusters. For example, if you're clustering customers, you might already have an idea of how many customer segments exist.

---

### 5. Advantages and Disadvantages of K-means

**Advantages:**

*   **Simplicity and Ease of Implementation:** The algorithm is conceptually straightforward and relatively easy to code.
*   **Efficiency:** For large datasets, K-means is generally more efficient than hierarchical clustering methods. Its time complexity is typically $O(n \cdot k \cdot i \cdot d)$, where $n$ is the number of data points, $k$ is the number of clusters, $i$ is the number of iterations, and $d$ is the number of dimensions.
*   **Scalability:** Can be scaled to large datasets.
*   **Guaranteed Convergence:** The algorithm is guaranteed to converge, although it may converge to a local minimum.

**Disadvantages:**

*   **Sensitivity to Initialization:** The initial placement of centroids can significantly affect the final clustering outcome. Multiple runs with different initializations might be necessary.
*   **Predefined 'k':** The number of clusters 'k' must be specified in advance, which can be challenging if the optimal number is unknown.
*   **Assumes Spherical Clusters:** K-means works best when clusters are roughly spherical and equally sized. It can struggle with clusters of irregular shapes or varying densities.
*   **Outlier Sensitivity:** Outliers can disproportionately influence the calculation of centroids.
*   **Curse of Dimensionality:** In high-dimensional spaces, the concept of distance can become less meaningful, potentially impacting K-means performance.
    *   *Reference:* The challenges with high-dimensional data and distance metrics are explored in **Blum, Hopcroft, and Kannan's "Foundations of Data Science."**

---

### 6. Examples of K-means Clustering

*   **Customer Segmentation:** Grouping customers based on purchasing behavior, demographics, or website interaction to tailor marketing strategies.
    *   *Data:* Purchase history, spending amounts, visit frequency.
    *   *Result:* Clusters like "High-Value Customers," "Budget Shoppers," "New Customers."
*   **Document Clustering:** Grouping similar documents together for topic analysis or organization.
    *   *Data:* Text content of documents (often represented using TF-IDF).
    *   *Result:* Clusters representing different news categories or research topics.
*   **Image Compression/Quantization:** Reducing the number of colors in an image by clustering similar pixel colors.
    *   *Data:* RGB values of pixels.
    *   *Result:* A palette of representative colors.
*   **Anomaly Detection:** While not its primary purpose, data points that are far from any cluster centroid could be flagged as potential anomalies.
*   **Genomic Data Analysis:** Grouping genes with similar expression patterns.

**Example Scenario:**

Imagine you have data on the `Annual Income` and `Spending Score` (a score from 1-100 based on spending habits) for customers of a mall. You want to segment these customers to understand them better.

*   **Data:** A dataset with two features: `Annual Income` and `Spending Score`.
*   **Objective:** Group customers into a certain number of segments (e.g., k=5).
*   **Process:**
    1.  Initialize 5 random centroids.
    2.  Assign each customer to the nearest centroid based on their income and spending score.
    3.  Recalculate the centroids as the average income and spending score of customers in each group.
    4.  Repeat steps 2 and 3 until convergence.
*   **Interpretation:** The resulting clusters might represent groups like:
    *   **Cluster 1:** Low Income, Low Spending Score
    *   **Cluster 2:** Low Income, High Spending Score
    *   **Cluster 3:** Medium Income, Medium Spending Score
    *   **Cluster 4:** High Income, Low Spending Score
    *   **Cluster 5:** High Income, High Spending Score

---

### 7. Important Points to Remember

*   K-means is an **unsupervised learning algorithm**.
*   It partitions data into **'k' clusters**.
*   The algorithm is **iterative**, assigning points to the nearest centroid and then updating centroids.
*   **Euclidean distance** is the most common distance metric.
*   The choice of **'k' is critical** and can be guided by methods like the Elbow Method or Silhouette Score.
*   K-means is **sensitive to initial centroid placement**.
*   It performs best on **spherical, similarly sized clusters**.
*   It can be applied to various domains like customer segmentation, document analysis, and image processing.

---

### 8. Practice Questions

**Question 1:**
What is the primary goal of the K-means clustering algorithm?
a) To predict a target variable based on input features.
b) To group similar data points into a predefined number of clusters.
c) To reduce the dimensionality of a dataset while retaining most of the variance.
d) To learn a mapping from input to output using labeled data.

**Question 2:**
Which of the following is a common distance metric used in K-means clustering?
a) Manhattan distance
b) Cosine similarity
c) Euclidean distance
d) Jaccard distance

**Question 3:**
Explain the Elbow Method for determining the optimal value of 'k' in K-means clustering.

**Question 4:**
What are the two main steps that are repeated in the K-means algorithm?

**Question 5:**
True or False: K-means clustering is a supervised learning algorithm.

---

### 9. Answers to Practice Questions

**Answer 1:**
b) To group similar data points into a predefined number of clusters.
*   *Explanation:* K-means is an unsupervised clustering algorithm. Option (a) describes supervised regression or classification, option (c) describes dimensionality reduction techniques like PCA, and option (d) describes supervised learning.

**Answer 2:**
c) Euclidean distance
*   *Explanation:* While other distance metrics can be used, Euclidean distance is the most common and standard metric for K-means.

**Answer 3:**
The Elbow Method involves running K-means for a range of 'k' values (e.g., 1 to 10). For each 'k', the Within-Cluster Sum of Squares (WCSS) or inertia is calculated. The WCSS is then plotted against 'k'. The point on the graph where the rate of decrease in WCSS sharply changes (forming an "elbow") is considered a good indication of the optimal number of clusters. This is because beyond this point, adding more clusters yields diminishing returns in reducing the within-cluster variance.

**Answer 4:**
The two main steps that are repeated in the K-means algorithm are:
1.  **Assignment Step:** Assign each data point to the cluster whose centroid is closest.
2.  **Update Step:** Recalculate the centroids of each cluster as the mean of all data points assigned to that cluster.

**Answer 5:**
False. K-means clustering is an **unsupervised learning** algorithm because it does not require labeled data. It discovers patterns and groups in the data autonomously.

---

This comprehensive set of notes covers the core concepts of K-means clustering, its algorithm, evaluation methods, advantages/disadvantages, and practical applications, aligning with the stated learning outcomes and course objectives.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=33vbFFFn04k) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=Q-tL8_628gE) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=p6Q9_e7_L1w) |
