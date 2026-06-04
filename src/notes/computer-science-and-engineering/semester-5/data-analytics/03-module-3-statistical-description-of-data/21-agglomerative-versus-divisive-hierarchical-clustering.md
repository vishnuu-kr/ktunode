---
title: "Agglomerative  versus Divisive Hierarchical Clustering"
subject: "DATA ANALYTICS"
module: "Module 3: Statistical Description of data "
branch: "Computer Science and Engineering"
semester: 5
topicId: "684162770fc9aa1fdbc8b727"
status: "completed"
scrapedAt: "2026-05-20T16:44:08.096Z"
---
## Data Analytics: Module 3 - Statistical Description of Data
### Topic: Agglomerative vs. Divisive Hierarchical Clustering

**Learning Outcomes:**

*   Understand the fundamental concepts of hierarchical clustering.
*   Differentiate between agglomerative and divisive hierarchical clustering methods.
*   Describe the algorithms involved in both agglomerative and divisive clustering.
*   Identify different linkage methods used in agglomerative clustering.
*   Evaluate the advantages and disadvantages of each approach.
*   Apply hierarchical clustering using software packages (conceptually - code examples are not the focus here).

**1. Introduction to Hierarchical Clustering**

*   **Definition:** Hierarchical clustering is a type of unsupervised machine learning algorithm that builds a hierarchy of clusters by iteratively merging or splitting data points/clusters.  Unlike K-means, it doesn't require specifying the number of clusters beforehand.
*   **Key Concept: Dendrogram:** Hierarchical clustering produces a tree-like structure called a dendrogram, which visually represents the hierarchy of clusters. The dendrogram shows how the clusters are formed at different levels of similarity.
*   **Types of Hierarchical Clustering:** There are two main types:
    *   **Agglomerative (Bottom-Up):** Starts with each data point as a single cluster and iteratively merges the closest clusters until all data points belong to a single cluster.
    *   **Divisive (Top-Down):** Starts with all data points in a single cluster and iteratively splits the cluster into smaller clusters until each data point is a single cluster.

**2. Agglomerative Hierarchical Clustering**

*   **Algorithm:**
    1.  **Initialization:** Start with each data point as a separate cluster.
    2.  **Distance Matrix:** Calculate the distance matrix between all pairs of clusters. The distance matrix represents the pairwise distances between all clusters.  Common distance metrics include Euclidean distance, Manhattan distance, and correlation distance.
    3.  **Merging:** Find the two closest clusters based on the distance matrix.
    4.  **Update:** Merge the two closest clusters into a single cluster.
    5.  **Recalculate:** Update the distance matrix by calculating the distance between the new cluster and all other clusters.
    6.  **Repeat:** Repeat steps 3-5 until all data points belong to a single cluster.
*   **Linkage Methods:**  Linkage methods define how the distance between two clusters is calculated. The choice of linkage method can significantly impact the resulting clusters.
    *   **Single Linkage (Nearest Neighbor):** The distance between two clusters is the shortest distance between any two points in the two clusters.  Tends to form long, "chain-like" clusters. Prone to the chaining effect and sensitivity to noise.
    *   **Complete Linkage (Furthest Neighbor):** The distance between two clusters is the longest distance between any two points in the two clusters.  Tends to form compact, well-separated clusters. More robust to noise than single linkage.
    *   **Average Linkage:** The distance between two clusters is the average distance between all pairs of points in the two clusters.  A compromise between single and complete linkage.  Less sensitive to outliers than single or complete linkage.
    *   **Centroid Linkage:** The distance between two clusters is the distance between the centroids (means) of the two clusters.  Can sometimes lead to reversals (clusters merging at a lower level than expected).
    *   **Ward's Linkage:**  Minimizes the increase in the total within-cluster variance after merging. It tends to form compact, spherical clusters.  Often a good default choice.

*   **Example:** Consider four data points A, B, C, and D.
    1.  Initial clusters: {A}, {B}, {C}, {D}
    2.  Assume the distance matrix is:
        ```
        A  B  C  D
        A  0  3  6  8
        B  3  0  5  7
        C  6  5  0  2
        D  8  7  2  0
        ```
    3.  Using single linkage, clusters C and D are merged first (distance 2).  New cluster {CD}
    4.  The distance matrix is updated. Then, B is merged with {CD} (distance 5). New cluster {BCD}
    5.  Finally, A is merged with {BCD} (distance 3 to B).
*   **Advantages:**
    *   Simple to implement.
    *   Provides a visual representation of the clustering hierarchy (dendrogram).
    *   Doesn't require specifying the number of clusters beforehand.
*   **Disadvantages:**
    *   Sensitive to noise and outliers.
    *   Can be computationally expensive for large datasets (O(n^3) complexity for naive implementations).
    *   Difficult to correct errors once a merge has occurred.

**3. Divisive Hierarchical Clustering**

*   **Algorithm:**
    1.  **Initialization:** Start with all data points in a single cluster.
    2.  **Splitting:**  Find the cluster to split.  Often, the cluster with the largest diameter (farthest distance between two points) or the cluster with the lowest average similarity is chosen.
    3.  **Splitting Method:** Determine how to split the chosen cluster.  Exhaustively searching all possible splits is computationally infeasible.  Instead, algorithms like K-means or other clustering techniques are often used to split the cluster into two sub-clusters.
    4.  **Repeat:** Repeat steps 2-3 until each data point is in its own cluster, or a stopping criterion is met (e.g., a desired number of clusters is reached).
*   **Splitting Methods:**
    *   **Monothetic Divisive Analysis (DIANA):** A popular divisive algorithm that starts with all objects in one cluster and repeatedly splits the most heterogeneous cluster until each cluster contains only one object. The split is based on the average dissimilarity of each object to the other objects in the cluster.
    *   **Bisecting K-Means:**  Repeatedly applies K-means (with K=2) to the largest cluster until a desired number of clusters is achieved.
*   **Example:**  Consider the same four data points A, B, C, and D.
    1.  Initial cluster: {ABCD}
    2.  Splitting:  Let's say DIANA is used, and it determines that splitting {ABCD} into {AB} and {CD} is the most heterogeneous split.
    3.  The algorithm proceeds by splitting {AB} and {CD} further until each point is in its own cluster.
*   **Advantages:**
    *   Can be more efficient than agglomerative clustering for certain datasets, particularly when a strong hierarchy exists.
    *   Potentially more accurate because the algorithm has more information available when making decisions at the top level of the hierarchy.
*   **Disadvantages:**
    *   More complex to implement than agglomerative clustering.
    *   Choosing the splitting criterion and splitting method can be challenging.
    *   Computationally intensive, though typically less so than agglomerative for large datasets.

**4. Comparing Agglomerative and Divisive Clustering**

| Feature          | Agglomerative                                    | Divisive                                       |
| ---------------- | ------------------------------------------------ | ---------------------------------------------- |
| Approach         | Bottom-up (merging)                              | Top-down (splitting)                              |
| Starting Point   | Each data point in its own cluster               | All data points in a single cluster           |
| Complexity       | O(n^3) (naive), can be reduced with optimizations | Varies greatly depending on splitting method. Generally, computationally complex, but potentially less than Agglomerative for VERY large datasets. |
| Implementation   | Relatively simple                                | More complex                                     |
| Sensitivity to Noise | More sensitive due to early merging decisions  | Less sensitive due to global view initially    |
| Typical Use Cases | Smaller to moderately sized datasets             | Larger datasets, data with a clear hierarchy.   |

**5. Considerations for Choosing a Method**

*   **Dataset Size:** For small to medium datasets, agglomerative clustering is generally preferred due to its simplicity. For very large datasets, divisive clustering *might* be considered, depending on the chosen splitting method and hardware.
*   **Data Structure:** If the data has a natural hierarchical structure, hierarchical clustering (either agglomerative or divisive) can be a good choice.
*   **Computational Resources:** Consider the computational cost of each method when dealing with large datasets.
*   **Interpretability:**  Hierarchical clustering produces a dendrogram, which provides a visual representation of the clustering hierarchy. This can be useful for understanding the relationships between data points.

**6. Important Points to Remember**

*   Hierarchical clustering is an unsupervised learning technique.
*   Agglomerative clustering starts with individual data points and merges clusters.
*   Divisive clustering starts with a single cluster and splits it iteratively.
*   Linkage methods determine how the distance between clusters is calculated in agglomerative clustering.
*   The choice of linkage method can significantly affect the results.
*   Divisive clustering requires choosing a splitting criterion and splitting method.
*   Hierarchical clustering produces a dendrogram that represents the clustering hierarchy.

**7. Practice Questions/Exercises**

1.  **Explain the difference between agglomerative and divisive hierarchical clustering.**
    *   **Answer:** Agglomerative clustering is a bottom-up approach that starts with each data point as its own cluster and merges the closest clusters iteratively. Divisive clustering is a top-down approach that starts with all data points in one cluster and splits the cluster into smaller clusters iteratively.

2.  **What are the different linkage methods used in agglomerative clustering? Briefly explain each method.**
    *   **Answer:** The linkage methods are:
        *   **Single Linkage:** Minimum distance between points in two clusters.
        *   **Complete Linkage:** Maximum distance between points in two clusters.
        *   **Average Linkage:** Average distance between all pairs of points in two clusters.
        *   **Centroid Linkage:** Distance between the centroids of two clusters.
        *   **Ward's Linkage:** Minimizes the increase in within-cluster variance.

3.  **What are the advantages and disadvantages of agglomerative clustering?**
    *   **Answer:**
        *   **Advantages:** Simple to implement, produces a dendrogram, doesn't require specifying the number of clusters beforehand.
        *   **Disadvantages:** Sensitive to noise and outliers, can be computationally expensive, difficult to correct errors once a merge has occurred.

4.  **What are the advantages and disadvantages of divisive clustering?**
    *   **Answer:**
        *   **Advantages:** Can be more efficient for certain datasets, potentially more accurate.
        *   **Disadvantages:** More complex to implement, choosing the splitting criterion and splitting method can be challenging, computationally intensive.

5.  **Describe a scenario where agglomerative clustering would be more appropriate than divisive clustering.**
    *   **Answer:**  Agglomerative clustering is more appropriate for smaller datasets where simplicity and ease of implementation are important. If there's a good understanding of the underlying data and an expectation that clusters will readily merge together at early stages, it could be suitable.

6.  **Describe a scenario where divisive clustering might be considered.**
    *   **Answer:** When you expect a strong hierarchical structure in your data, and you are dealing with a larger dataset.  Also, when you want an initial global view of the data before partitioning.  However, the complexity of implementation must be considered.

These notes should provide a solid foundation for understanding agglomerative and divisive hierarchical clustering. Remember to explore the algorithms in more detail using software packages and example datasets to solidify your understanding. Good luck!
