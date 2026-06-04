---
title: "K-means clustering."
subject: "INTRODUCTION TO ARTIFICIAL INTELLIGENCE AND DATA 
SCIENCE"
module: "Module 1: Introduction to AI and Machine Learning :  Basics of Machine Learning"
branch: "Electrical and Electronics Engineering"
semester: 3
topicId: "68a200842b85456187f35b8b"
status: "completed"
scrapedAt: "2026-05-23T16:13:58.062Z"
---
# Module 1: Introduction to AI and Machine Learning - Basics of Machine Learning

## Topic: K-Means Clustering

---

### 1. Overview and Purpose

K-means clustering is a popular **unsupervised learning algorithm** used for **partitioning a dataset into a predefined number of distinct groups or clusters**. The goal is to group similar data points together based on their features, while ensuring that data points in different clusters are dissimilar.

**Key Concept:** Unsupervised Learning - learning from data that is not labeled. The algorithm discovers patterns and structures in the data without explicit guidance.

**Analogy:** Imagine you have a box of different colored marbles. K-means would try to sort them into piles of the same color, without being told beforehand what colors exist or how many piles to make (though you do tell it how many piles, `k`).

---

### 2. Learning Outcomes Addressed

This topic directly contributes to the following learning outcomes:

*   **CO1: Apply the concept of machine learning algorithms including neural networks and supervised/unsupervised learning techniques for engineering applications.** (Knowledge Level: K3)
    *   K-means is a fundamental unsupervised learning technique that can be applied in various engineering domains for tasks like customer segmentation, image compression, anomaly detection, etc.
*   **CO2: Apply advanced mathematical concepts such as matrix operations, singular values, and principal component analysis to analyze and solve engineering problems.** (Knowledge Level: K3)
    *   While not directly involving PCA or SVD, K-means relies on distance calculations, which are rooted in vector space concepts and can be enhanced by dimensionality reduction techniques (like PCA) before clustering.
*   **CO3: Analyze and interpret data using statistical methods including descriptive statistics, correlation, and regression analysis to derive meaningful insights and make informed decisions.** (Knowledge Level: K3)
    *   Clustering provides insights into data distribution and relationships, helping to identify underlying patterns that can inform decision-making.
*   **CO4: Integrate statistical approaches and machine learning techniques to ensure practically feasible solutions in engineering contexts.** (Knowledge Level: K3)
    *   K-means, as a clustering technique, is often integrated with other statistical methods for data preprocessing, feature engineering, and result interpretation to build robust engineering solutions.

---

### 3. Key Concepts and Definitions

*   **Clustering:** The task of grouping a set of objects in such a way that objects in the same group (called a cluster) are more similar to each other than to those in other groups.
*   **Centroid:** The mean position of all the points in a cluster. In K-means, centroids are represented by their coordinates in the feature space.
*   **Distance Metric:** A function that quantifies the dissimilarity between two data points. The most common is the **Euclidean distance**.
    *   **Euclidean Distance:** For two points $p = (p_1, p_2, ..., p_n)$ and $q = (q_1, q_2, ..., q_n)$ in an n-dimensional space, the Euclidean distance is calculated as:
        $$ d(p, q) = \sqrt{\sum_{i=1}^{n} (p_i - q_i)^2} $$
        *   *(Referenced from Mathematics for Machine Learning, Chapter 2: Linear Algebra - Euclidean Space)*
*   **Within-Cluster Sum of Squares (WCSS) / Inertia:** A measure of the compactness of the clusters. It's the sum of squared distances between each point and its assigned centroid. The goal of K-means is to minimize WCSS.
    $$ WCSS = \sum_{k=1}^{K} \sum_{x \in C_k} ||x - \mu_k||^2 $$
    where $K$ is the number of clusters, $C_k$ is the set of data points in cluster $k$, $x$ is a data point, and $\mu_k$ is the centroid of cluster $k$.
*   **Number of Clusters (k):** A hyperparameter that must be specified before running the algorithm. Choosing the right 'k' is crucial.

---

### 4. The K-Means Algorithm: Step-by-Step

The K-means algorithm is an iterative process:

1.  **Initialization:**
    *   Choose the number of clusters, $k$.
    *   Randomly select $k$ data points from the dataset as initial centroids, OR initialize centroids using methods like K-means++.
        *   *K-means++ initialization aims to choose initial centroids that are spread out, leading to better convergence and potentially better cluster quality. (Referenced from Hands-on ML by Géron, Chapter 9, though the book focuses on other clustering algorithms like DBSCAN, the principle of better initialization is relevant).*
2.  **Assignment Step (Expectation Step):**
    *   Assign each data point to the nearest centroid based on the chosen distance metric (typically Euclidean distance). This forms $k$ clusters.
3.  **Update Step (Maximization Step):**
    *   Recalculate the position of each centroid by taking the mean of all data points assigned to that cluster.
4.  **Convergence:**
    *   Repeat the Assignment and Update steps until the centroids no longer move significantly, or until a maximum number of iterations is reached. This means the cluster assignments stabilize.

---

### 5. How to Choose 'k'

Selecting the optimal value for $k$ is a common challenge. Several methods exist:

*   **Elbow Method:**
    *   Run K-means for a range of $k$ values (e.g., from 1 to 10).
    *   For each $k$, calculate the WCSS (Inertia).
    *   Plot the WCSS against the number of clusters $k$.
    *   The "elbow" point in the plot, where the rate of decrease in WCSS sharply changes, is considered a good indicator of the optimal $k$. The idea is to find a point where adding more clusters doesn't significantly reduce the WCSS.
        *   *(Referenced from Hands-on ML by Géron, Chapter 9, discussing hyperparameter tuning for clustering).*
*   **Silhouette Score:**
    *   Measures how similar a data point is to its own cluster (cohesion) compared to other clusters (separation).
    *   A score of +1 means the point is far away from neighboring clusters.
    *   A score of 0 means the point is on the boundary between two clusters.
    *   A score of -1 means the point is likely misclassified.
    *   The average silhouette score across all data points is used to evaluate the quality of clustering for different $k$ values. The $k$ that yields the highest average silhouette score is often chosen.
        *   *(Referenced from Hands-on ML by Géron, Chapter 9, detailing evaluation metrics for clustering).*
*   **Domain Knowledge:** In many practical applications, prior knowledge about the data or the problem can guide the choice of $k$.

---

### 6. Mathematical Underpinnings (Briefly)

*   **Vector Spaces:** Data points are treated as vectors in a multi-dimensional space. Distance calculations (like Euclidean) are fundamental operations in vector algebra. *(Referenced from Introduction to Linear Algebra by Gilbert Strang, Chapters 1-4 on Vectors and Matrices).*
*   **Optimization:** K-means can be viewed as an optimization problem where the objective is to minimize the WCSS. The iterative update step aims to find local minima of this objective function.

---

### 7. Applications in Engineering and Data Science

K-means clustering has broad applications:

*   **Customer Segmentation:** Grouping customers based on purchasing behavior, demographics, etc., for targeted marketing.
*   **Image Compression:** Reducing the number of colors in an image by clustering similar colors. The centroids represent the new color palette.
*   **Document Clustering:** Grouping similar documents for organization and retrieval.
*   **Anomaly Detection:** Identifying data points that do not belong to any cluster or are far from any centroid.
*   **Genomic Analysis:** Clustering genes with similar expression patterns.
*   **Social Network Analysis:** Identifying communities or groups within a social network.
    *   *(Referenced from Introducing Data Science by Cielen et al., Chapter 5, discussing clustering applications).*
    *   *(Referenced from Data Science: Concepts and Practice by Kotu & Deshpande, Chapter 7, on clustering and its uses).*

---

### 8. Example: Clustering Iris Flower Data

Let's consider a simplified example with the Iris dataset, which has measurements for different iris species. We'll aim to cluster the flowers into 3 groups (since there are 3 species, but imagine we don't know this).

**Dataset (Simplified):**
Suppose we have two features: Sepal Length (cm) and Petal Length (cm).

| Sepal Length | Petal Length |
| :----------- | :----------- |
| 5.1          | 3.5          |
| 4.9          | 3.0          |
| 4.7          | 3.2          |
| 7.0          | 3.2          |
| 6.4          | 3.2          |
| 6.9          | 3.1          |

**Algorithm Steps:**

1.  **Initialization:**
    *   $k = 3$.
    *   Randomly pick 3 points as initial centroids (e.g., (5.1, 3.5), (4.7, 3.2), (7.0, 3.2)).

2.  **Assignment Step (Iteration 1):**
    *   Calculate the distance of each point to the 3 centroids.
    *   Assign each point to the closest centroid.

3.  **Update Step (Iteration 1):**
    *   Calculate the mean of points assigned to each cluster to get new centroid positions.

4.  **Repeat:** Continue assigning points and updating centroids until they stabilize.

**Expected Outcome:** Ideally, the algorithm would group the first three points together (likely Setosa), the next three points (likely Versicolor), and the last three points (likely Virginica) into distinct clusters.

---

### 9. Important Points to Remember

*   **Unsupervised:** K-means works without labeled data.
*   **Predefined 'k':** You *must* specify the number of clusters ($k$) beforehand. This is a significant limitation.
*   **Sensitivity to Initialization:** The starting positions of centroids can affect the final clustering result. K-means++ initialization helps mitigate this.
*   **Globular Clusters:** K-means works best for finding clusters that are spherical or globular in shape and roughly equal in size. It struggles with clusters of irregular shapes, varying densities, or non-convex shapes. *(Referenced from Data Science: Concepts and Practice by Kotu & Deshpande, Chapter 7, discussing limitations).*
*   **Sensitive to Scale:** Features should ideally be on a similar scale. If one feature has a much larger range than others, it will dominate the distance calculations. **Feature scaling (e.g., standardization or normalization)** is often a crucial preprocessing step. *(Referenced from Hands-on ML by Géron, Chapter 9, emphasizing preprocessing).*
*   **Local Optima:** The algorithm converges to a local optimum, not necessarily the global optimum. Running the algorithm multiple times with different initializations is a good practice.

---

### 10. Practice Questions

1.  **Concept Check:** What type of machine learning is K-means clustering?
    *   **Answer:** Unsupervised learning.

2.  **Algorithm Step:** Which step involves assigning data points to the nearest centroid?
    *   **Answer:** The Assignment Step (or Expectation Step).

3.  **Metric:** What is the most commonly used distance metric in K-means?
    *   **Answer:** Euclidean distance.

4.  **Limitation:** Name one major limitation of the K-means algorithm.
    *   **Answer:** Requires a predefined number of clusters ($k$), sensitive to initial centroid placement, struggles with non-globular clusters, sensitive to feature scaling. (Any one of these is a valid answer).

5.  **Application:** If you wanted to group similar news articles together to make it easier for users to find related content, which unsupervised learning technique could you use?
    *   **Answer:** K-means clustering (or any clustering algorithm).

6.  **Evaluation:** You have run K-means with $k=3$ and $k=5$ and calculated the WCSS for both. The WCSS for $k=3$ is 150, and for $k=5$ is 100. Based on the Elbow Method, which value of $k$ might be preferred, and why?
    *   **Answer:** While $k=5$ has a lower WCSS (100 vs 150), the choice depends on the *rate of decrease*. You would need to plot WCSS against $k$ to find the "elbow." If the WCSS dropped from 150 to 120 for $k=4$ and then to 100 for $k=5$, the elbow might be at $k=4$. If the drop from $k=3$ to $k=4$ was small, and the drop from $k=4$ to $k=5$ was also small, $k=3$ might be preferred. The key is identifying where adding more clusters provides diminishing returns.

---
