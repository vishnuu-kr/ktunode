---
title: "Spectral Clustering - Introduction to Clustering and Spectral Clustering"
subject: "TOPICS IN THEORETICAL COMPUTER SCIENCE"
module: "Module 2: Spectral Clustering "
branch: "Computer Science and Engineering"
semester: 7
topicId: "684162790fc9aa1fdbc8c3fe"
status: "completed"
scrapedAt: "2026-05-20T17:11:51.357Z"
---
# TOPICS IN THEORETICAL COMPUTER SCIENCE

## Module 2: Spectral Clustering

### Topic: Spectral Clustering - Introduction to Clustering and Spectral Clustering

---

### 1. Introduction to Clustering

**1.1 What is Clustering?**

Clustering is an unsupervised machine learning task that involves grouping a set of objects in such a way that objects in the same group (called a cluster) are more similar to each other than to those in other groups. The goal is to discover hidden patterns and structures within unlabeled data.

**1.2 Key Concepts in Clustering:**

*   **Unsupervised Learning:** The algorithm learns from data without predefined labels.
*   **Similarity/Distance Measure:** A function that quantifies how alike or different two data points are. Common measures include:
    *   **Euclidean Distance:** The straight-line distance between two points in a multi-dimensional space.
    *   **Cosine Similarity:** Measures the cosine of the angle between two non-zero vectors, often used for text data.
    *   **Jaccard Similarity:** Used for sets, measures the size of the intersection divided by the size of the union.
*   **Cluster:** A group of data points that are more similar to each other than to data points in other clusters.
*   **Centroid:** The mean of the data points in a cluster.
*   **Cluster Quality:** Metrics used to evaluate how well the data is clustered. Examples include:
    *   **Silhouette Score:** Measures how similar an object is to its own cluster compared to other clusters.
    *   **Davies-Bouldin Index:** Measures the average similarity ratio of each cluster with the cluster that is most similar to it.

**1.3 Common Clustering Algorithms:**

*   **K-Means:** Partitions data into *k* clusters by minimizing the sum of squared distances between data points and their assigned cluster's centroid.
    *   **Pros:** Simple, efficient, scales well to large datasets.
    *   **Cons:** Sensitive to initial centroid placement, assumes spherical clusters, requires specifying *k* in advance.
*   **Hierarchical Clustering:** Builds a hierarchy of clusters.
    *   **Agglomerative (Bottom-up):** Starts with each data point as its own cluster and merges them iteratively.
    *   **Divisive (Top-down):** Starts with all data points in one cluster and splits them iteratively.
    *   **Pros:** Doesn't require specifying *k*, provides a dendrogram visualizing the hierarchy.
    *   **Cons:** Computationally expensive for large datasets, sensitive to noise.
*   **DBSCAN (Density-Based Spatial Clustering of Applications with Noise):** Groups together points that are closely packed together (points with many nearby neighbors), marking points that lie alone in low-density regions as outliers.
    *   **Pros:** Can find arbitrarily shaped clusters, robust to outliers.
    *   **Cons:** Sensitive to parameter tuning (epsilon and min_samples), struggles with clusters of varying densities.

**1.4 When Clustering is Useful:**

*   **Customer Segmentation:** Grouping customers based on purchasing behavior, demographics, etc.
*   **Image Segmentation:** Dividing an image into meaningful regions.
*   **Document Analysis:** Grouping similar documents or topics.
*   **Anomaly Detection:** Identifying data points that deviate significantly from the norm.
*   **Bioinformatics:** Grouping genes with similar expression patterns.

---

### 2. Spectral Clustering

**2.1 What is Spectral Clustering?**

Spectral clustering is a family of clustering algorithms that uses the eigenvalues (spectrum) of a similarity matrix to perform dimensionality reduction before clustering in a lower-dimensional space. It is particularly effective at finding non-linearly separable clusters, which are challenging for algorithms like K-Means.

**2.2 The Core Idea:**

Instead of clustering directly in the original feature space, spectral clustering transforms the data into a new space where clusters might be linearly separable. This transformation is achieved by leveraging the structure of the data represented by its **similarity graph**.

**2.3 The Similarity Graph:**

*   **Nodes:** Represent the data points.
*   **Edges:** Connect pairs of data points. The weight of an edge signifies the similarity between the two connected data points.
    *   **High weight:** High similarity.
    *   **Low/Zero weight:** Low similarity.

**2.4 Constructing the Similarity Graph:**

There are several ways to define the similarity between data points and construct the graph:

*   **ε-Neighborhood Graph:**
    *   Connect two points if the distance between them is less than a threshold ε.
    *   Edge weights can be:
        *   **Binary:** 1 if distance ≤ ε, 0 otherwise.
        *   **Gaussian Similarity:** $w_{ij} = e^{-\frac{||x_i - x_j||^2}{2\sigma^2}}$ if distance ≤ ε, 0 otherwise.
*   **k-Nearest Neighbors (k-NN) Graph:**
    *   Connect point $x_i$ to $x_j$ if $x_j$ is among the *k* nearest neighbors of $x_i$, OR if $x_i$ is among the *k* nearest neighbors of $x_j$.
    *   Edge weights can be:
        *   **Binary:** 1 if connected, 0 otherwise.
        *   **Gaussian Similarity:** $w_{ij} = e^{-\frac{||x_i - x_j||^2}{2\sigma^2}}$ if connected, 0 otherwise.
*   **Fully Connected Graph:**
    *   Connect all pairs of points.
    *   Edge weights are typically defined using a Gaussian similarity function: $w_{ij} = e^{-\frac{||x_i - x_j||^2}{2\sigma^2}}$ for all $i \neq j$. The parameter $\sigma$ controls the width of the Gaussian and thus the influence of distance.

**2.5 Key Matrices in Spectral Clustering:**

Given the similarity matrix $W$ (where $W_{ij}$ is the weight of the edge between data point $i$ and data point $j$), we can define other important matrices:

*   **Degree Matrix (D):** A diagonal matrix where $D_{ii} = \sum_{j} W_{ij}$ (the sum of weights of edges connected to node $i$).
*   **Laplacian Matrix (L):** Represents the graph structure and is crucial for spectral clustering. There are two common forms:
    *   **Unnormalized Laplacian:** $L = D - W$
        *   Properties: Positive semi-definite, eigenvalues are non-negative.
        *   The number of zero eigenvalues corresponds to the number of connected components in the graph.
    *   **Normalized Laplacian:**
        *   **Symmetric Normalized Laplacian:** $L_{sym} = D^{-1/2} L D^{-1/2} = I - D^{-1/2} W D^{-1/2}$
        *   **Random Walk Normalized Laplacian:** $L_{rw} = D^{-1} L = I - D^{-1} W$
        *   These normalization methods are used to prevent nodes with high degrees from dominating the clustering process. They are particularly useful when cluster sizes or node degrees vary significantly.

**2.6 The Spectral Clustering Algorithm (General Steps):**

1.  **Construct the Similarity Graph:** Represent the data points as nodes and their similarities as edge weights.
2.  **Compute the Laplacian Matrix:** Choose either the unnormalized, symmetric normalized, or random walk normalized Laplacian based on the data characteristics.
3.  **Compute Eigenvectors:** Calculate the first *k* eigenvectors corresponding to the smallest *k* eigenvalues of the chosen Laplacian matrix. (If using normalized Laplacians, these correspond to the smallest eigenvalues). The number of clusters, *k*, is typically chosen in advance.
4.  **Form the Feature Matrix:** Create a new matrix $U$ where the columns are the *k* computed eigenvectors. Each row of $U$ now represents a data point in a lower-dimensional (k-dimensional) space.
5.  **Cluster in the New Space:** Treat each row of $U$ as a new data point and apply a standard clustering algorithm (like K-Means) to these points to obtain the final cluster assignments.

**2.7 Why Eigenvectors of the Laplacian?**

The eigenvectors of the Laplacian matrix capture information about the connectivity and structure of the graph.

*   **Small Eigenvalues:** Correspond to eigenvectors that vary slowly across the graph. These eigenvectors tend to group together nodes that are "close" in the graph structure.
*   **First *k* Eigenvectors:** If the graph has *k* well-separated connected components (ideal clusters), the first *k* eigenvalues will be close to zero, and their corresponding eigenvectors will have non-zero values only within their respective components.
*   **Dimensionality Reduction:** By selecting the first *k* eigenvectors, we are effectively projecting the data into a space where the cluster structure is more apparent and potentially linearly separable.

**2.8 Choosing the Number of Clusters (k):**

This is a crucial hyperparameter. Common methods include:

*   **Elbow Method:** Plotting the eigenvalues and looking for an "elbow" where the rate of decrease slows down.
*   **Silhouette Score:** Evaluating cluster quality for different *k* values.
*   **Gap Statistic:** Comparing the within-cluster dispersion to what would be expected under a null reference distribution.
*   **Domain Knowledge:** Relying on prior understanding of the data.

---

### 3. Illustrative Example: Spectral Clustering for Non-Linearly Separable Data

Consider the following data points:

*   **Cluster 1:** Points on a circle.
*   **Cluster 2:** Points on another concentric circle.

**(Imagine two circles of data points, one inside the other. K-Means would struggle to separate these as they are not linearly separable.)**

**Steps:**

1.  **Construct Similarity Graph:**
    *   Use a Gaussian kernel: $w_{ij} = e^{-\frac{||x_i - x_j||^2}{2\sigma^2}}$.
    *   Points on the same circle will have high similarity ($w_{ij}$ close to 1), while points on different circles will have lower similarity.
    *   $\sigma$ is chosen to be small enough so that points on the inner circle are not considered similar to points on the outer circle, and vice-versa.

2.  **Compute Laplacian:** Let's assume we use the Unnormalized Laplacian: $L = D - W$.

3.  **Compute Eigenvectors:** We want to find 2 clusters ($k=2$). We compute the first 2 eigenvectors corresponding to the smallest eigenvalues of $L$.

    *   The eigenvectors associated with the smallest eigenvalues of the Laplacian of a graph tend to have distinct patterns. For a graph with two well-separated components, the first eigenvector might be constant (corresponding to eigenvalue 0). The second eigenvector might separate the two components.
    *   For the circular data, the first few eigenvectors will reveal the circular structure. The first two non-trivial eigenvectors (after the constant one) will effectively "unwrap" the circles into segments that can be separated.

4.  **Form Feature Matrix (U):** Let the first two eigenvectors be $v_1$ and $v_2$. The new representation for each data point $i$ will be $(v_{1i}, v_{2i})$.

    *   The points originally on the inner circle will be mapped to a region in this 2D space.
    *   The points originally on the outer circle will be mapped to a different region.
    *   Crucially, in this new 2D space, the two groups of points might become linearly separable (e.g., clustered around two distinct points or forming two distinct blobs).

5.  **Cluster with K-Means:** Apply K-Means with $k=2$ to these new $(v_{1i}, v_{2i})$ representations. K-Means will now easily separate the data points into their original two circular groups.

---

### 4. Important Points to Remember:

*   **Spectral clustering excels at finding non-linearly separable clusters.** This is its main advantage over algorithms like K-Means.
*   **The construction of the similarity graph is critical.** The choice of similarity measure, graph type (ε-neighborhood, k-NN, fully connected), and parameters (ε, σ, k) significantly impacts the results.
*   **The Laplacian matrix is the core mathematical tool.** Its eigenvectors reveal the underlying structure of the graph.
*   **The number of clusters *k* must be specified.** Choosing *k* is an important hyperparameter tuning step.
*   **The final clustering step (often K-Means) is applied in the lower-dimensional eigenvector space, not the original feature space.**

---

### 5. Practice Questions and Exercises

**Question 1: Conceptual Understanding**

Explain the primary advantage of spectral clustering over K-Means clustering. Provide an example of a data distribution where spectral clustering would perform significantly better than K-Means.

**Question 2: Matrix Definitions**

Given a similarity matrix $W$ of size $N \times N$, define:
a) The Degree Matrix $D$.
b) The Unnormalized Laplacian $L$.
c) The Symmetric Normalized Laplacian $L_{sym}$.

**Question 3: Algorithm Steps**

List the main steps involved in the spectral clustering algorithm.

**Question 4: Hyperparameters**

Identify at least two important hyperparameters in spectral clustering and explain their role.

**Question 5: True/False**

Spectral clustering directly clusters data points in their original high-dimensional space. (True/False)

---

### 6. Answers to Practice Questions

**Answer 1:**
The primary advantage of spectral clustering is its ability to find clusters that are not linearly separable in the original feature space. K-Means, which relies on distances to centroids, typically assumes convex and spherical clusters.

An example where spectral clustering excels is data that forms concentric circles, moons, or other complex, intertwined shapes. K-Means would likely fail to correctly partition these structures, whereas spectral clustering, by transforming the data using graph eigenvectors, can reveal the underlying separability.

**Answer 2:**
Given a similarity matrix $W$ of size $N \times N$:
a) **Degree Matrix $D$:** A diagonal matrix where the diagonal element $D_{ii}$ is the sum of the weights of all edges connected to node $i$.
   $D_{ii} = \sum_{j=1}^{N} W_{ij}$ for $i=1, \dots, N$. All off-diagonal elements are zero.

b) **Unnormalized Laplacian $L$:** Defined as $L = D - W$.

c) **Symmetric Normalized Laplacian $L_{sym}$:** Defined as $L_{sym} = D^{-1/2} L D^{-1/2} = D^{-1/2} (D - W) D^{-1/2} = I - D^{-1/2} W D^{-1/2}$. Here, $D^{-1/2}$ is a diagonal matrix with diagonal elements $1/\sqrt{D_{ii}}$.

**Answer 3:**
The main steps involved in the spectral clustering algorithm are:
1.  **Construct the Similarity Graph:** Represent data points as nodes and their similarities as edge weights.
2.  **Compute the Laplacian Matrix:** Choose an appropriate Laplacian (e.g., unnormalized, symmetric normalized).
3.  **Compute Eigenvectors:** Find the first *k* eigenvectors corresponding to the smallest eigenvalues of the Laplacian.
4.  **Form the Feature Matrix:** Create a new matrix where rows are the computed eigenvectors, transforming data into a lower-dimensional space.
5.  **Cluster in the New Space:** Apply a standard clustering algorithm (e.g., K-Means) to the transformed data points.

**Answer 4:**
Two important hyperparameters in spectral clustering are:
1.  **Number of Clusters (k):** This determines how many clusters the algorithm will attempt to find. It's crucial for selecting the number of eigenvectors to use.
2.  **Similarity Function Parameters (e.g., $\sigma$ for Gaussian kernel, ε for ε-neighborhood graph, number of neighbors for k-NN graph):** These parameters control how similarity is defined between data points, which directly influences the structure of the similarity graph and, consequently, the Laplacian eigenvalues and eigenvectors. For example, $\sigma$ in the Gaussian kernel controls the "smoothness" or "reach" of the similarity measure.

**Answer 5:**
False. Spectral clustering transforms the data into a lower-dimensional space defined by the eigenvectors of the graph Laplacian before applying a standard clustering algorithm like K-Means.

---
This concludes the study notes for "Spectral Clustering - Introduction to Clustering and Spectral Clustering." Remember to practice by applying these concepts to different datasets and experimenting with hyperparameter choices.
