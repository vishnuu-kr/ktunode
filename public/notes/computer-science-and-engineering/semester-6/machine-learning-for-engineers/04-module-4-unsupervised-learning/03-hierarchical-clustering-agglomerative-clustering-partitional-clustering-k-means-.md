---
title: "Hierarchical Clustering - Agglomerative Clustering, partitional clustering, K-means clustering"
subject: "MACHINE LEARNING FOR ENGINEERS"
module: "Module 4: Unsupervised Learning"
branch: "Computer Science and Engineering"
semester: 6
topicId: "684162780fc9aa1fdbc8bf5b"
status: "completed"
scrapedAt: "2026-05-20T16:55:09.768Z"
---
# Machine Learning for Engineers - Module 4: Unsupervised Learning

## Topic: Hierarchical Clustering, Partitional Clustering, and K-Means Clustering

---

### **Learning Outcomes:**

*   Understand the fundamental concepts of unsupervised learning.
*   Differentiate between hierarchical and partitional clustering approaches.
*   Explain the agglomerative (bottom-up) hierarchical clustering process.
*   Describe various linkage criteria used in agglomerative clustering.
*   Explain the divisive (top-down) hierarchical clustering process.
*   Understand the principles of partitional clustering.
*   Explain the K-Means clustering algorithm.
*   Discuss the strengths and weaknesses of K-Means clustering.
*   Apply clustering algorithms to real-world problems.

---

### **1. Introduction to Unsupervised Learning**

Unsupervised learning is a type of machine learning where algorithms learn patterns from data that is not labeled, classified, or categorized. The goal is to discover hidden structures, relationships, and groupings within the data.

**Key Concepts:**

*   **Data:** Unlabeled data (no predefined output variable).
*   **Goal:** Discover inherent patterns, groupings, or structures in the data.
*   **Applications:** Customer segmentation, anomaly detection, dimensionality reduction, recommendation systems.

---

### **2. Clustering: Discovering Groups**

Clustering is a fundamental unsupervised learning technique that aims to group similar data points together. The aim is to have high intra-cluster similarity (data points within a cluster are similar) and low inter-cluster similarity (data points in different clusters are dissimilar).

**Key Concepts:**

*   **Cluster:** A collection of data points that are similar to each other and dissimilar to data points in other clusters.
*   **Similarity/Dissimilarity:** Measured using distance metrics. Common metrics include:
    *   **Euclidean Distance:** The straight-line distance between two points in multi-dimensional space.
        *   For points $P = (p_1, p_2, \dots, p_n)$ and $Q = (q_1, q_2, \dots, q_n)$, the Euclidean distance is:
            $d(P, Q) = \sqrt{(p_1 - q_1)^2 + (p_2 - q_2)^2 + \dots + (p_n - q_n)^2}$
    *   **Manhattan Distance (L1 Distance):** The sum of the absolute differences of their Cartesian coordinates.
        *   $d(P, Q) = |p_1 - q_1| + |p_2 - q_2| + \dots + |p_n - q_n|$
    *   **Cosine Similarity:** Measures the cosine of the angle between two non-zero vectors. Often used for text data. A value of 1 means identical direction, 0 means orthogonal.
*   **Centroid:** The mean position of all the points in a cluster.

---

### **3. Hierarchical Clustering**

Hierarchical clustering builds a hierarchy of clusters. This hierarchy is often represented as a **dendrogram**, a tree-like diagram. There are two main types:

#### **3.1. Agglomerative (Bottom-Up) Clustering**

This is the most common type of hierarchical clustering. It starts with each data point as its own cluster and iteratively merges the two closest clusters until only one cluster remains (containing all data points).

**The Process:**

1.  **Initialization:** Treat each data point as a separate cluster.
2.  **Iteration:**
    *   Calculate the distance between all pairs of current clusters.
    *   Merge the two closest clusters into a new, larger cluster.
    *   Repeat until only one cluster remains.

**Linkage Criteria: How to measure the distance between clusters?**

The choice of linkage criterion significantly impacts the shape and structure of the resulting clusters.

*   **Single Linkage (Minimum Linkage):** The distance between two clusters is the minimum distance between any point in the first cluster and any point in the second cluster.
    *   *Pros:* Can find non-elliptical shapes, good for identifying sparse or elongated clusters.
    *   *Cons:* Sensitive to outliers, prone to "chaining" (merging clusters based on single close points).
    *   $D(C_i, C_j) = \min_{x \in C_i, y \in C_j} d(x, y)$

*   **Complete Linkage (Maximum Linkage):** The distance between two clusters is the maximum distance between any point in the first cluster and any point in the second cluster.
    *   *Pros:* Tends to produce more compact and spherical clusters, less sensitive to outliers than single linkage.
    *   *Cons:* Can be sensitive to outliers, may not find elongated clusters.
    *   $D(C_i, C_j) = \max_{x \in C_i, y \in C_j} d(x, y)$

*   **Average Linkage:** The distance between two clusters is the average distance between all pairs of points, where one point is from the first cluster and the other is from the second cluster.
    *   *Pros:* A compromise between single and complete linkage, generally produces good results.
    *   *Cons:* Can be computationally more intensive than single or complete linkage.
    *   $D(C_i, C_j) = \frac{1}{|C_i||C_j|} \sum_{x \in C_i} \sum_{y \in C_j} d(x, y)$

*   **Centroid Linkage:** The distance between two clusters is the distance between their centroids.
    *   *Pros:* Simple to understand.
    *   *Cons:* The cluster merging process can lead to non-monotonic distance measures (distance between merged clusters might be smaller than the distance between the original clusters), which can make it difficult to interpret the dendrogram.

*   **Ward's Method:** Minimizes the increase in total within-cluster variance after merging. It aims to produce clusters of roughly equal size and variance.
    *   *Pros:* Tends to produce compact, spherical clusters. Often a good default choice.
    *   *Cons:* Sensitive to the scale of features; data often needs to be standardized.
    *   When merging two clusters $C_i$ and $C_j$ into a new cluster $C_{new}$, the increase in the sum of squared errors (SSE) is calculated. The merge that minimizes this increase is chosen.

**Dendrogram:**

A dendrogram visually represents the hierarchical clustering process.

*   **Leaves:** Represent individual data points.
*   **Branches:** Represent merges of clusters.
*   **Height of the branch:** Indicates the distance at which the clusters were merged.
*   **Cutting the dendrogram:** To obtain a specific number of clusters, you can cut the dendrogram at a certain height. All branches that are cut at this height define the clusters.

**Example:**

Consider 5 data points A, B, C, D, E.

1.  **Start:** {A}, {B}, {C}, {D}, {E}
2.  **Merge A and B** (assuming they are closest): {A, B}, {C}, {D}, {E}
3.  **Merge D and E** (assuming they are closest): {A, B}, {C}, {D, E}
4.  **Merge C and {A, B}** (assuming they are closest): {A, B, C}, {D, E}
5.  **Merge {A, B, C} and {D, E}**: {A, B, C, D, E}

A dendrogram would show these merges.

#### **3.2. Divisive (Top-Down) Clustering**

Divisive clustering starts with a single cluster containing all data points and iteratively splits clusters into smaller ones until each data point is in its own cluster or a stopping criterion is met.

**The Process:**

1.  **Initialization:** Treat all data points as a single cluster.
2.  **Iteration:**
    *   Select a cluster to split.
    *   Split the selected cluster into two sub-clusters. This splitting is often done by identifying the most dissimilar pair of points and splitting around them, or by performing K-Means within the cluster.
    *   Repeat until a stopping criterion is met (e.g., desired number of clusters, minimum cluster size).

**Comparison to Agglomerative:**

*   **Agglomerative:** Generally simpler to implement and understand. Produces a dendrogram that allows for flexible selection of the number of clusters.
*   **Divisive:** Can be computationally more expensive as it requires choosing which cluster to split and how to split it. Might be more suitable for very large datasets where starting with many small clusters is inefficient.

---

### **4. Partitional Clustering**

Partitional clustering algorithms divide the data set into *k* distinct clusters, where each data point belongs to exactly one cluster. Unlike hierarchical clustering, it does not produce a hierarchy of clusters; it directly partitions the data.

**Key Concepts:**

*   **Predefined number of clusters (k):** The user must specify the desired number of clusters beforehand.
*   **Optimization:** Aims to optimize an objective function, typically by minimizing the within-cluster sum of squares (WCSS).

---

### **5. K-Means Clustering Algorithm**

K-Means is a popular and efficient partitional clustering algorithm. It aims to partition *n* data points into *k* clusters, such that each data point belongs to the cluster with the nearest mean (centroid).

**The Process:**

1.  **Initialization:**
    *   Choose the number of clusters, *k*.
    *   Randomly select *k* data points as the initial centroids for the clusters.
    *   *Alternatively, use more sophisticated initialization methods like K-Means++.*

2.  **Assignment Step (Expectation Step):**
    *   Assign each data point to the cluster whose centroid is closest (based on a chosen distance metric, usually Euclidean).

3.  **Update Step (Maximization Step):**
    *   Recalculate the centroid of each cluster by taking the mean of all data points assigned to that cluster.

4.  **Convergence:**
    *   Repeat the Assignment and Update steps until the centroids no longer move significantly, or until a maximum number of iterations is reached. This means the assignment of data points to clusters has stabilized.

**Objective Function:**

K-Means aims to minimize the Within-Cluster Sum of Squares (WCSS), also known as inertia:

$WCSS = \sum_{i=1}^{k} \sum_{x \in C_i} ||x - \mu_i||^2$

Where:
*   $k$ is the number of clusters.
*   $C_i$ is the $i$-th cluster.
*   $x$ is a data point.
*   $\mu_i$ is the centroid of cluster $C_i$.
*   $||x - \mu_i||^2$ is the squared Euclidean distance between data point $x$ and centroid $\mu_i$.

**Example:**

Let's cluster 5 points: A(2,3), B(3,2), C(8,7), D(9,8), E(7,9) into k=2 clusters.

1.  **Initialization:** Let's say we randomly pick A as centroid 1 ($\mu_1$) and C as centroid 2 ($\mu_2$).
    *   $\mu_1 = (2,3)$
    *   $\mu_2 = (8,7)$

2.  **Assignment Step:**
    *   Point A(2,3): Distance to $\mu_1$ = 0, Distance to $\mu_2$ = $\sqrt{(8-2)^2 + (7-3)^2} = \sqrt{36+16} = \sqrt{52} \approx 7.2$. Assign A to Cluster 1.
    *   Point B(3,2): Distance to $\mu_1$ = $\sqrt{(3-2)^2 + (2-3)^2} = \sqrt{1+1} = \sqrt{2} \approx 1.4$. Distance to $\mu_2$ = $\sqrt{(8-3)^2 + (7-2)^2} = \sqrt{25+25} = \sqrt{50} \approx 7.1$. Assign B to Cluster 1.
    *   Point C(8,7): Distance to $\mu_1$ = $\sqrt{(8-2)^2 + (7-3)^2} = \sqrt{36+16} = \sqrt{52} \approx 7.2$. Distance to $\mu_2$ = 0. Assign C to Cluster 2.
    *   Point D(9,8): Distance to $\mu_1$ = $\sqrt{(9-2)^2 + (8-3)^2} = \sqrt{49+25} = \sqrt{74} \approx 8.6$. Distance to $\mu_2$ = $\sqrt{(8-9)^2 + (7-8)^2} = \sqrt{1+1} = \sqrt{2} \approx 1.4$. Assign D to Cluster 2.
    *   Point E(7,9): Distance to $\mu_1$ = $\sqrt{(7-2)^2 + (9-3)^2} = \sqrt{25+36} = \sqrt{61} \approx 7.8$. Distance to $\mu_2$ = $\sqrt{(8-7)^2 + (7-9)^2} = \sqrt{1+4} = \sqrt{5} \approx 2.2$. Assign E to Cluster 2.

    *   **Cluster 1:** {A, B}
    *   **Cluster 2:** {C, D, E}

3.  **Update Step:**
    *   New $\mu_1$ = Mean of A(2,3) and B(3,2) = $((2+3)/2, (3+2)/2) = (2.5, 2.5)$
    *   New $\mu_2$ = Mean of C(8,7), D(9,8), E(7,9) = $((8+9+7)/3, (7+8+9)/3) = (24/3, 24/3) = (8, 8)$

4.  **Assignment Step (with new centroids):**
    *   $\mu_1 = (2.5, 2.5)$
    *   $\mu_2 = (8, 8)$
    *   Point A(2,3): Dist to $\mu_1 \approx 0.7$, Dist to $\mu_2 \approx 8.6$. Assign A to Cluster 1.
    *   Point B(3,2): Dist to $\mu_1 \approx 0.7$, Dist to $\mu_2 \approx 8.6$. Assign B to Cluster 1.
    *   Point C(8,7): Dist to $\mu_1 \approx 7.9$, Dist to $\mu_2 \approx 1.4$. Assign C to Cluster 2.
    *   Point D(9,8): Dist to $\mu_1 \approx 9.2$, Dist to $\mu_2 \approx 1.4$. Assign D to Cluster 2.
    *   Point E(7,9): Dist to $\mu_1 \approx 7.2$, Dist to $\mu_2 \approx 1.4$. Assign E to Cluster 2.

    The assignments did not change. Convergence reached.

    *   **Final Clusters:**
        *   Cluster 1: {A(2,3), B(3,2)}
        *   Cluster 2: {C(8,7), D(9,8), E(7,9)}

**Choosing the value of k:**

*   **Elbow Method:** Plot WCSS against different values of *k*. The plot typically shows a sharp decrease in WCSS initially, followed by a plateau. The "elbow point" where the rate of decrease slows down significantly is often chosen as the optimal *k*.
*   **Silhouette Score:** Measures how similar a data point is to its own cluster compared to other clusters. A higher silhouette score indicates better clustering.
*   **Domain Knowledge:** Sometimes, the number of clusters is determined by prior understanding of the problem domain.

#### **5.1. Strengths of K-Means Clustering:**

*   **Simplicity:** Easy to understand and implement.
*   **Efficiency:** Relatively fast, especially for large datasets, with a time complexity of $O(n \cdot k \cdot i \cdot d)$, where n is the number of data points, k is the number of clusters, i is the number of iterations, and d is the number of dimensions.
*   **Scalability:** Works well for large datasets.
*   **Guaranteed Convergence:** The algorithm is guaranteed to converge.

#### **5.2. Weaknesses of K-Means Clustering:**

*   **Sensitivity to Initialization:** The final clustering can depend on the initial placement of centroids. Running K-Means multiple times with different initializations is recommended.
*   **Predefined k:** Requires the user to specify the number of clusters (*k*) beforehand.
*   **Assumption of Spherical Clusters:** Tends to find spherical or globular clusters and struggles with clusters of arbitrary shapes, elongated clusters, or clusters with different densities.
*   **Sensitivity to Outliers:** Outliers can significantly influence the centroid positions.
*   **Requires Numerical Data:** Not directly applicable to categorical data without appropriate encoding.

---

### **6. Applying Clustering to Real-World Problems**

Clustering has numerous applications:

*   **Customer Segmentation:** Grouping customers based on purchasing behavior, demographics, or website activity to tailor marketing campaigns.
    *   *Example:* E-commerce platforms can segment customers into "high-value," "occasional," and "new" customers.
*   **Image Segmentation:** Partitioning an image into regions based on pixel similarity (e.g., color, texture).
    *   *Example:* Medical imaging to identify different tissue types or tumors.
*   **Document Clustering:** Grouping similar documents together for better organization and search.
    *   *Example:* News articles can be clustered by topic (sports, politics, technology).
*   **Anomaly Detection:** Identifying data points that do not belong to any cluster, indicating unusual behavior.
    *   *Example:* Fraud detection in financial transactions.
*   **Recommendation Systems:** Grouping users with similar preferences to recommend items they might like.
    *   *Example:* Recommending movies to users based on the viewing habits of similar users.

---

### **Practice Questions & Exercises**

**Question 1:**
What is the primary goal of unsupervised learning?
a) Predicting a continuous target variable.
b) Classifying data into predefined categories.
c) Discovering hidden patterns and structures in unlabeled data.
d) Optimizing a model's performance based on labeled feedback.

**Question 2:**
Differentiate between agglomerative and divisive hierarchical clustering.
a) Agglomerative merges clusters, divisive splits clusters.
b) Agglomerative requires *k* upfront, divisive does not.
c) Agglomerative is top-down, divisive is bottom-up.
d) Agglomerative is more suitable for non-spherical clusters, divisive is not.

**Question 3:**
Which linkage criterion defines the distance between two clusters as the maximum distance between any point in one cluster and any point in the other cluster?
a) Single Linkage
b) Complete Linkage
c) Average Linkage
d) Centroid Linkage

**Question 4:**
In K-Means clustering, the algorithm iteratively performs two main steps. What are they?
a) Initialization and Prediction
b) Assignment and Update
c) Feature Engineering and Model Training
d) Evaluation and Fine-tuning

**Question 5:**
What is a common method to determine the optimal number of clusters (*k*) for K-Means?
a) Cross-validation error minimization
b) The Elbow Method
c) Grid Search for hyperparameter tuning
d) Principal Component Analysis (PCA)

**Question 6 (Exercise):**
Consider the following data points in 2D: P1(1,2), P2(1,3), P3(3,4), P4(4,3), P5(4,5).
Perform agglomerative hierarchical clustering using **single linkage** and **Euclidean distance**. Show the steps and the resulting dendrogram (conceptually or by describing the merges).

---

### **Answers to Practice Questions**

**Answer 1:**
c) Discovering hidden patterns and structures in unlabeled data.

**Answer 2:**
a) Agglomerative merges clusters, divisive splits clusters.

**Answer 3:**
b) Complete Linkage

**Answer 4:**
b) Assignment and Update

**Answer 5:**
b) The Elbow Method

**Answer 6 (Exercise):**

**Data Points:** P1(1,2), P2(1,3), P3(3,4), P4(4,3), P5(4,5)
**Distance Metric:** Euclidean

**Initial Clusters:** {P1}, {P2}, {P3}, {P4}, {P5}

**Step 1: Calculate pairwise distances and find the minimum.**
*   d(P1,P2) = $\sqrt{(1-1)^2 + (3-2)^2} = \sqrt{0+1} = 1$
*   d(P1,P3) = $\sqrt{(3-1)^2 + (4-2)^2} = \sqrt{4+4} = \sqrt{8} \approx 2.83$
*   d(P1,P4) = $\sqrt{(4-1)^2 + (3-2)^2} = \sqrt{9+1} = \sqrt{10} \approx 3.16$
*   d(P1,P5) = $\sqrt{(4-1)^2 + (5-2)^2} = \sqrt{9+9} = \sqrt{18} \approx 4.24$
*   d(P2,P3) = $\sqrt{(3-1)^2 + (4-3)^2} = \sqrt{4+1} = \sqrt{5} \approx 2.24$
*   d(P2,P4) = $\sqrt{(4-1)^2 + (3-3)^2} = \sqrt{9+0} = 3$
*   d(P2,P5) = $\sqrt{(4-1)^2 + (5-3)^2} = \sqrt{9+4} = \sqrt{13} \approx 3.61$
*   d(P3,P4) = $\sqrt{(4-3)^2 + (3-4)^2} = \sqrt{1+1} = \sqrt{2} \approx 1.41$
*   d(P3,P5) = $\sqrt{(4-3)^2 + (5-4)^2} = \sqrt{1+1} = \sqrt{2} \approx 1.41$
*   d(P4,P5) = $\sqrt{(4-4)^2 + (5-3)^2} = \sqrt{0+4} = 2$

The minimum distance is 1 between P1 and P2.
**Merge 1:** {P1, P2} at distance 1.
**Current Clusters:** {P1, P2}, {P3}, {P4}, {P5}

**Step 2: Calculate distances between new cluster {P1, P2} and other clusters using single linkage.**
*   d({P1,P2}, P3) = min(d(P1,P3), d(P2,P3)) = min(2.83, 2.24) = 2.24
*   d({P1,P2}, P4) = min(d(P1,P4), d(P2,P4)) = min(3.16, 3) = 3
*   d({P1,P2}, P5) = min(d(P1,P5), d(P2,P5)) = min(4.24, 3.61) = 3.61

Distances between remaining single clusters are:
*   d(P3,P4) = 1.41
*   d(P3,P5) = 1.41
*   d(P4,P5) = 2

The minimum distance is 1.41, occurring between {P3, P4} and {P3, P5}. Let's pick {P3, P4}.
**Merge 2:** {P3, P4} at distance 1.41.
**Current Clusters:** {P1, P2}, {P3, P4}, {P5}

**Step 3: Calculate distances between {P3, P4} and {P5} using single linkage.**
*   d({P3,P4}, P5) = min(d(P3,P5), d(P4,P5)) = min(1.41, 2) = 1.41
Now, calculate distances between {P1, P2} and the other clusters.
*   d({P1,P2}, {P3,P4}) = min(d({P1,P2}, P3), d({P1,P2}, P4)) = min(2.24, 3) = 2.24
*   d({P1,P2}, P5) = 3.61 (from Step 2)

The minimum distance is 1.41 between {P3, P4} and {P5}.
**Merge 3:** {P3, P4, P5} at distance 1.41.
**Current Clusters:** {P1, P2}, {P3, P4, P5}

**Step 4: Calculate distance between the two remaining clusters.**
*   d({P1,P2}, {P3,P4,P5}) = min(d({P1,P2}, P3), d({P1,P2}, P4), d({P1,P2}, P5))
    = min(2.24, 3, 3.61) = 2.24

**Merge 4:** {P1, P2, P3, P4, P5} at distance 2.24.
**Final Cluster:** {P1, P2, P3, P4, P5}

**Dendrogram Description:**
*   The leaves are P1, P2, P3, P4, P5.
*   P1 and P2 merge at height 1.
*   P3 and P4 merge at height 1.41.
*   The cluster {P3, P4} merges with P5 at height 1.41 (using single linkage with P3).
*   The cluster {P1, P2} merges with the cluster {P3, P4, P5} (specifically with {P3,P4} at distance 2.24) at height 2.24.

---

### **Important Points to Remember:**

*   **Unsupervised learning:** No labels, focus on structure discovery.
*   **Clustering goal:** Maximize intra-cluster similarity, minimize inter-cluster similarity.
*   **Hierarchical Clustering:**
    *   **Agglomerative:** Bottom-up, merges clusters. Use a dendrogram to visualize and select *k*.
    *   **Linkage Criteria (Single, Complete, Average, Centroid, Ward's):** Dictate how cluster distances are calculated and affect cluster shape.
*   **Partitional Clustering:**
    *   **K-Means:** Popular algorithm, partitions data into *k* clusters.
    *   **Objective:** Minimize WCSS.
    *   **Challenges:** Sensitivity to initialization, need to pre-define *k*, assumes spherical clusters.
*   **Choosing *k*:** Elbow method, Silhouette score, domain knowledge.
*   **Applications:** Broad range from customer segmentation to anomaly detection.

---
