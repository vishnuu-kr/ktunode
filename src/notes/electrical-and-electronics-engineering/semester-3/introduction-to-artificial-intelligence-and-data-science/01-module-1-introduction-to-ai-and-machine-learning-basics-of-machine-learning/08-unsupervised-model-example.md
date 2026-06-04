---
title: "unsupervised model example"
subject: "INTRODUCTION TO ARTIFICIAL INTELLIGENCE AND DATA 
SCIENCE"
module: "Module 1: Introduction to AI and Machine Learning :  Basics of Machine Learning"
branch: "Electrical and Electronics Engineering"
semester: 3
topicId: "68a200842b85456187f35b8a"
status: "completed"
scrapedAt: "2026-05-23T16:13:57.398Z"
---
# Module 1: Introduction to AI and Machine Learning: Basics of Machine Learning
## Topic: Unsupervised Model Examples

---

### 1. Introduction to Unsupervised Learning

Unsupervised learning is a type of machine learning where the algorithm learns from data that has **not been labeled**. This means the algorithm is given input data and is tasked with finding patterns, structures, or relationships within that data on its own. Unlike supervised learning, there are no "correct answers" provided to the model during training.

**Key Concepts:**

*   **Unlabeled Data:** Data without pre-assigned categories or target variables.
*   **Pattern Discovery:** The primary goal is to uncover hidden structures, relationships, or groupings in the data.
*   **Exploratory Data Analysis (EDA) Tool:** Unsupervised learning is often used for understanding the underlying nature of a dataset before applying other analytical techniques.
*   **No Target Variable:** The model does not predict a specific outcome; it aims to describe the data itself.

**Learning Outcome Alignment:**

*   **CO1:** This topic directly contributes to applying unsupervised learning techniques for engineering applications. By understanding unsupervised models, students can identify situations where they can be used to group or structure data in engineering contexts.

**Textbook/Reference Integration:**

*   **Cielen et al. (2016), "Introducing data science: big data, machine learning, and more, using Python tools"**: This book is likely to provide foundational explanations and practical examples of unsupervised learning techniques, such as clustering and dimensionality reduction, using Python libraries.
*   **Kotu & Deshpande (2018), "Data science: concepts and practice"**: This reference book would offer a conceptual overview of unsupervised learning, its purpose, and various algorithms used for pattern discovery in data science.

---

### 2. Common Unsupervised Model Examples

Unsupervised learning encompasses a range of algorithms, each designed to tackle different types of pattern discovery. The most prominent categories are clustering and dimensionality reduction.

#### 2.1. Clustering

Clustering is the task of grouping a set of objects in such a way that objects in the same group (called a cluster) are more similar to each other than to those in other groups (clusters).

**Key Concepts:**

*   **Similarity/Dissimilarity:** Measures used to determine how close or far apart data points are (e.g., Euclidean distance, Manhattan distance).
*   **Centroid:** The mean position of all the points in a cluster.
*   **Cluster Assignment:** The process of assigning data points to specific clusters.
*   **Number of Clusters (k):** Often a parameter that needs to be decided upon (e.g., in K-Means).

**Example 1: Customer Segmentation (Retail)**

*   **Description:** A retail company wants to understand its customer base better to tailor marketing campaigns. They have data on customer demographics, purchase history, browsing behavior, etc.
*   **Unsupervised Model:** **K-Means Clustering**
    *   **How it works:** K-Means aims to partition *n* observations into *k* clusters in which each observation belongs to the cluster with the nearest mean (cluster centroid).
    *   **Process:**
        1.  Initialize *k* centroids randomly.
        2.  Assign each data point to the nearest centroid.
        3.  Recalculate the centroids of the clusters based on the assigned data points.
        4.  Repeat steps 2 and 3 until convergence (e.g., centroids don't move significantly).
    *   **Example Data Points (Simplified):** Imagine customers plotted based on "Average Purchase Value" and "Frequency of Visits."
        *   Cluster 1: High spenders, frequent visitors (Loyal Customers)
        *   Cluster 2: Low spenders, infrequent visitors (Occasional Shoppers)
        *   Cluster 3: High spenders, infrequent visitors (Potential High-Value Customers)
*   **Application:** The company can now create targeted marketing strategies for each segment (e.g., loyalty programs for Cluster 1, special offers for Cluster 3).
*   **Textbook/Reference Integration:**
    *   **Géron (2022), "Hands-on machine learning with Scikit-Learn, Keras, and TensorFlow"**: This book will likely have practical implementations of K-Means in Python, illustrating its use for customer segmentation or similar real-world problems.
    *   **Gupta & Kapoor (2020), "Fundamentals of mathematical statistics"**: Provides the statistical underpinnings for understanding distances and means, which are crucial for clustering algorithms.

**Example 2: Document Grouping (Natural Language Processing)**

*   **Description:** A library wants to organize a large collection of unsorted research papers.
*   **Unsupervised Model:** **Hierarchical Clustering**
    *   **How it works:** Hierarchical clustering builds a hierarchy of clusters. There are two main approaches:
        *   **Agglomerative (Bottom-up):** Starts with each document as its own cluster and iteratively merges the closest clusters.
        *   **Divisive (Top-down):** Starts with all documents in one cluster and recursively splits clusters.
    *   **Process (Agglomerative):**
        1.  Treat each document as a single cluster.
        2.  Compute the distance between all pairs of clusters.
        3.  Merge the two closest clusters.
        4.  Repeat steps 2 and 3 until only one cluster remains.
        5.  A dendrogram is often used to visualize the hierarchy and decide on the number of clusters.
    *   **Example Data Points (Simplified):** Documents represented by their word frequencies or topic models.
        *   Cluster 1: Papers related to Artificial Intelligence (e.g., machine learning, neural networks)
        *   Cluster 2: Papers related to Biology (e.g., genetics, cell biology)
        *   Cluster 3: Papers related to Physics (e.g., quantum mechanics, astrophysics)
*   **Application:** The library can use these clusters to categorize papers, making them easier to browse and search.
*   **Textbook/Reference Integration:**
    *   **Deisenroth et al. (2020), "Mathematics for machine learning"**: This book might touch upon distance metrics and similarity measures, which are fundamental to how hierarchical clustering operates.
    *   **Evans & Rosenthal (2009), "Probability and Statistics - The Science of Uncertainty"**: Concepts of probability and statistics are used in evaluating similarity and defining cluster properties.

#### 2.2. Dimensionality Reduction

Dimensionality reduction is the process of reducing the number of random variables under consideration, by obtaining a set of principal variables. This is useful for visualizing high-dimensional data, speeding up algorithms, and removing noise.

**Key Concepts:**

*   **Dimensions/Features:** The attributes or variables describing the data.
*   **Curse of Dimensionality:** The phenomenon where data becomes sparse and distances become less meaningful in high-dimensional spaces, impacting the performance of ML algorithms.
*   **Feature Extraction:** Creating new features that are combinations of original features.
*   **Feature Selection:** Choosing a subset of the original features.

**Example 3: Data Visualization (High-Dimensional Data)**

*   **Description:** Imagine a dataset with hundreds of features (e.g., gene expression levels for thousands of genes across different samples). Visualizing this data directly is impossible.
*   **Unsupervised Model:** **Principal Component Analysis (PCA)**
    *   **How it works:** PCA is a linear dimensionality reduction technique that finds a new set of orthogonal (uncorrelated) variables, called principal components (PCs), that capture the maximum variance in the original data. The first PC captures the most variance, the second PC captures the second most variance among the remaining variance, and so on.
    *   **Process (Conceptual):**
        1.  Standardize the data (mean 0, variance 1).
        2.  Compute the covariance matrix of the standardized data.
        3.  Compute the eigenvalues and eigenvectors of the covariance matrix.
        4.  Sort eigenvalues in descending order and select the top *k* eigenvectors (corresponding to the largest eigenvalues). These eigenvectors form the new basis.
        5.  Project the original data onto this new basis to obtain the reduced-dimensional representation.
    *   **Example Data Points (Simplified):** Consider a dataset with 500 features. PCA can reduce these 500 features into 2 or 3 principal components.
*   **Application:** The 2 or 3 principal components can then be plotted to visualize the overall structure of the data, revealing clusters or patterns that were hidden in the high-dimensional space.
*   **Textbook/Reference Integration:**
    *   **Strang (2023), "Introduction to Linear Algebra"**: This is a foundational text for understanding PCA. Concepts like eigenvalues, eigenvectors, covariance matrices, and orthogonal transformations are core to PCA.
    *   **Deisenroth et al. (2020), "Mathematics for machine learning"**: Explicitly covers PCA and its mathematical basis, including the role of linear algebra.
    *   **CO2:** This topic directly addresses the application of advanced mathematical concepts like singular values (related to eigenvalues in PCA) and PCA itself for analyzing engineering problems.

**Example 4: Noise Reduction in Images**

*   **Description:** An image can be represented as a matrix of pixel values. When images are noisy, it can be difficult to analyze them.
*   **Unsupervised Model:** **Singular Value Decomposition (SVD)** (closely related to PCA)
    *   **How it works:** SVD decomposes any matrix A into three other matrices: A = U * Σ * V<sup>T</sup>.
        *   U and V are orthogonal matrices.
        *   Σ is a diagonal matrix containing singular values.
    *   The singular values represent the "strength" of the corresponding components. By keeping only the largest singular values and their corresponding components from U and V, we can reconstruct an approximation of the original matrix that is less noisy and has a reduced dimensionality (in terms of the number of components used).
    *   **Process:** Decompose the image matrix using SVD, select the top *k* singular values and corresponding vectors, and reconstruct the image.
*   **Application:** The reconstructed image will be a smoother version of the original, effectively reducing noise.
*   **Textbook/Reference Integration:**
    *   **Strang (2023), "Introduction to Linear Algebra"**: SVD is a central topic in linear algebra and is extensively covered in this book, highlighting its applications.
    *   **CO2:** Directly relates to singular values and their application in analyzing and solving engineering problems (image processing).

---

### 3. Key Takeaways and Important Points

*   **Unsupervised learning is about discovery:** Unlike supervised learning, where you predict labels, unsupervised learning aims to find inherent patterns and structures.
*   **No ground truth needed for training:** This makes it suitable for exploratory data analysis and situations where labeling is expensive or impossible.
*   **Common techniques:** Clustering (grouping similar data points) and dimensionality reduction (reducing the number of features) are primary examples.
*   **K-Means:** A popular and simple clustering algorithm that partitions data into a pre-defined number of clusters.
*   **Hierarchical Clustering:** Creates a tree-like structure of clusters, allowing for flexible interpretation of the number of groups.
*   **PCA:** A powerful technique for reducing the number of dimensions while retaining as much variance as possible, crucial for visualization and efficiency.
*   **SVD:** A matrix factorization technique that can be used for dimensionality reduction and noise reduction, closely linked to PCA.
*   **Mathematical Foundations:** Understanding linear algebra (eigenvalues, eigenvectors, matrix decomposition) and statistics (distance measures, variance) is crucial for grasping these unsupervised models.

---

### 4. Practice Questions & Exercises

**Question 1:**
You have a dataset of customer transactions with features like "total spent," "number of items purchased," and "time of day of purchase." You want to group customers into distinct segments based on their purchasing behavior. Which type of unsupervised learning technique would be most appropriate, and why? Name a specific algorithm.

**Answer 1:**
Customer segmentation is a classic use case for **clustering**. Clustering algorithms group similar data points together. The "why" is because we don't have pre-defined customer segments (no labels), and we want to discover natural groupings based on their transaction patterns. **K-Means clustering** would be a suitable specific algorithm for this task, aiming to partition customers into *k* distinct behavioral groups.

**Question 2:**
Imagine you have a dataset with 100 features for each data point, but you suspect that the underlying structure of the data can be represented in a much lower dimensional space (e.g., 2 or 3 dimensions) for visualization. Which unsupervised dimensionality reduction technique would you most likely use? Explain its core principle.

**Answer 2:**
**Principal Component Analysis (PCA)** would be the most appropriate technique. Its core principle is to find a new set of orthogonal axes (principal components) that capture the maximum possible variance in the data. By retaining only the first few principal components, we can represent the data in a lower-dimensional space while preserving most of the original data's variability, making it suitable for visualization.

**Question 3:**
A researcher has a large collection of scientific articles, each represented by a vector of word frequencies. They want to organize these articles into thematic groups. If they decide to build a hierarchy of clusters, starting with each article as its own cluster and then merging the most similar ones, what type of clustering algorithm are they likely using?

**Answer 3:**
They are likely using **Agglomerative Hierarchical Clustering**. This is a bottom-up approach where clusters are successively merged based on their similarity until a single cluster containing all data points is formed. The resulting hierarchy can be visualized using a dendrogram.

**Question 4 (Conceptual - linking to math):**
In Principal Component Analysis (PCA), what mathematical objects are derived from the covariance matrix that help in identifying the principal components? What do these objects represent in terms of data variance?

**Answer 4:**
PCA derives **eigenvalues** and **eigenvectors** from the covariance matrix of the data.
*   **Eigenvectors** represent the directions of maximum variance in the data. They form the new axes (principal components) of the reduced-dimensional space.
*   **Eigenvalues** represent the magnitude of variance along the corresponding eigenvector's direction. Larger eigenvalues indicate directions with more variance, and thus more important components for capturing the data's structure.

---
This module provides a foundational understanding of unsupervised learning, setting the stage for applying these techniques in various engineering and data science contexts, as outlined in the Course Outcomes (CO1, CO2, CO3, CO4).
