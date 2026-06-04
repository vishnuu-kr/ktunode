---
title: "K-means clustering."
subject: "INTRODUCTION TO ARTIFICIAL INTELLIGENCE AND DATA SCIENCE"
module: "Module 1: Introduction to AI and Machine Learning : Basics of Machine Learning"
branch: "Mechanical Engineering"
semester: 3
topicId: "68a3fd1351d0cf4804462d83"
status: "completed"
scrapedAt: "2026-05-20T17:49:41.306Z"
---
# Module 1: Introduction to AI and Machine Learning - Basics of Machine Learning

## Topic: K-means Clustering

---

### 1. Introduction to Clustering

**Definition:** Clustering is a type of **unsupervised machine learning** where the algorithm groups data points into clusters such that data points within the same cluster are more similar to each other than to those in other clusters. The goal is to discover underlying structures and patterns in unlabeled data.

**Key Concepts:**

*   **Unsupervised Learning:** Learning from data without predefined labels or target outputs. The algorithm learns patterns and structures directly from the input features.
*   **Similarity/Dissimilarity:** A measure used to quantify how alike or different two data points are. Common measures include Euclidean distance, Manhattan distance, and cosine similarity.
*   **Clusters:** Groups of data points that are closely related to each other.
*   **Centroid:** The mean of the data points in a cluster, often used as the representative point of the cluster.

**Relevance to Course Outcomes:**

*   **CO1:** K-means clustering is a fundamental unsupervised learning technique. Understanding it is crucial for applying machine learning algorithms to engineering problems where labeled data might be scarce.
*   **CO4:** K-means can be used to pre-process data or to segment data for further analysis using other statistical or machine learning techniques, thus integrating different approaches.

**Textbook References:**

*   **Géron (2nd ed.):** Chapter 14, "Unsupervised Learning Techniques," likely covers clustering as a key method for discovering structure.
*   **Cielen et al. (1st ed.):** Likely discusses clustering as a core data mining and machine learning technique, potentially with Python examples.
*   **Kotu & Deshpande (2nd ed.):** Chapter 9, "Cluster Analysis: Basic Concepts and Algorithms," would provide a foundational understanding of clustering.

---

### 2. K-means Clustering Algorithm

**Definition:** K-means is an iterative algorithm that aims to partition a dataset into *k* distinct clusters, where *k* is a predefined positive integer. It's a partitioning clustering method.

**Algorithm Steps:**

1.  **Initialization:**
    *   Choose the number of clusters, *k*.
    *   Initialize *k* centroids. Common initialization methods include:
        *   **Randomly selecting *k* data points** from the dataset as initial centroids.
        *   **K-means++ initialization:** A more sophisticated method that aims to select initial centroids that are far apart, leading to better convergence. (Mentioned in Géron).

2.  **Assignment Step (Expectation):**
    *   Assign each data point to the nearest centroid. The distance is typically calculated using **Euclidean distance**.
    *   For each data point $x_i$, assign it to cluster $C_j$ if $j$ minimizes the distance $d(x_i, \mu_j)$, where $\mu_j$ is the centroid of cluster $C_j$.

3.  **Update Step (Maximization):**
    *   Recalculate the position of each centroid by computing the **mean** of all data points assigned to that cluster.
    *   For each cluster $C_j$, update its centroid $\mu_j$ to be the mean of all $x_i$ such that $x_i \in C_j$.

4.  **Iteration:**
    *   Repeat the Assignment and Update steps until a stopping criterion is met. Common stopping criteria include:
        *   **Centroids do not change** significantly between iterations (convergence).
        *   Data points **do not change** their cluster assignments.
        *   A **maximum number of iterations** is reached.

**Key Concepts:**

*   **Centroid Initialization:** Crucial for the final clustering outcome. Poor initialization can lead to suboptimal clusters.
*   **Euclidean Distance:** The most common distance metric used in K-means. For two points $p = (p_1, p_2, \dots, p_n)$ and $q = (q_1, q_2, \dots, q_n)$, the Euclidean distance is $d(p, q) = \sqrt{\sum_{i=1}^n (p_i - q_i)^2}$. (Relates to **CO2** - vector operations).
*   **Convergence:** The algorithm converges when the centroids stabilize.

**Example:**

Imagine you have data points representing customer locations in a city. You want to group them into 3 clusters (k=3) for marketing purposes.

1.  **Initialization:** Randomly pick 3 locations as initial centroids.
2.  **Assignment:** Assign each customer to the closest of the 3 initial centroids.
3.  **Update:** Calculate the average location of all customers assigned to each centroid. These new average locations become the updated centroids.
4.  **Iteration:** Repeat steps 2 and 3 until the centroids stop moving significantly.

**Textbook References:**

*   **Géron (2nd ed.):** Likely details the K-means algorithm with mathematical formulas and practical implementation hints.
*   **Gupta & Kapoor (9th ed.):** Chapter on "Measures of Central Tendency" would define the mean, which is central to the update step.
*   **Deisenroth et al. (1st ed.):** May discuss clustering in the context of optimization and iterative algorithms.
*   **Kotu & Deshpande (2nd ed.):** Chapter 9 will provide the formal algorithmic steps and mathematical formulation.

---

### 3. Objective Function (K-means Cost Function)

**Definition:** K-means aims to minimize the **Within-Cluster Sum of Squares (WCSS)**, also known as inertia. This function measures the total squared distance between each data point and its assigned centroid.

$$ \text{WCSS} = \sum_{j=1}^k \sum_{x_i \in C_j} \|x_i - \mu_j\|^2 $$

Where:
*   $k$ is the number of clusters.
*   $C_j$ is the set of data points assigned to cluster $j$.
*   $x_i$ is a data point.
*   $\mu_j$ is the centroid of cluster $j$.
*   $\|x_i - \mu_j\|^2$ is the squared Euclidean distance between $x_i$ and $\mu_j$.

**Key Concepts:**

*   **Minimization:** The K-means algorithm is an optimization algorithm that iteratively tries to reduce the WCSS.
*   **Local Minima:** K-means is susceptible to converging to a local minimum of the WCSS, not necessarily the global minimum. Running the algorithm multiple times with different initializations can help mitigate this.

**Relevance to Course Outcomes:**

*   **CO2:** Understanding the objective function involves concepts of summation and squared differences, aligning with mathematical foundations.
*   **CO3:** Minimizing WCSS is a form of statistical optimization, aiming to find a data partitioning that best represents central tendencies within groups.

**Textbook References:**

*   **Géron (2nd ed.):** Will likely explain WCSS as the objective function optimized by K-means.
*   **Kotu & Deshpande (2nd ed.):** Chapter 9 will detail the WCSS and its role in the algorithm.
*   **Miller (1st ed.):** Could discuss optimization objectives in the context of statistical modeling.

---

### 4. Choosing the Optimal Number of Clusters (k)

**Challenge:** Determining the optimal value for *k* is a significant challenge in K-means clustering, as the algorithm requires *k* to be specified beforehand.

**Methods to Determine *k*:**

1.  **Elbow Method:**
    *   Run K-means for a range of *k* values (e.g., from 1 to 10).
    *   For each *k*, calculate the WCSS.
    *   Plot the WCSS against *k*.
    *   The plot typically shows a decrease in WCSS as *k* increases. The "elbow" point on the plot, where the rate of decrease sharply changes, is often considered a good choice for *k*. This is because adding more clusters beyond the elbow point yields diminishing returns in reducing the WCSS.

2.  **Silhouette Score:**
    *   Measures how similar a data point is to its own cluster (cohesion) compared to other clusters (separation).
    *   For a data point $i$:
        *   $a(i)$: The average distance from $i$ to all other data points in the same cluster.
        *   $b(i)$: The average distance from $i$ to all data points in the *nearest* different cluster.
    *   The silhouette score for data point $i$ is: $s(i) = \frac{b(i) - a(i)}{\max(a(i), b(i))}$.
    *   The silhouette score ranges from -1 to 1:
        *   **1:** Data point is far from neighboring clusters.
        *   **0:** Data point is on or very close to the decision boundary between two clusters.
        *   **-1:** Data point is likely misclassified.
    *   The **average silhouette score** across all data points is used to evaluate different values of *k*. The *k* that yields the highest average silhouette score is often preferred.

**Relevance to Course Outcomes:**

*   **CO1:** Choosing *k* is a practical aspect of applying clustering algorithms effectively.
*   **CO3:** Both the Elbow method (observing trend changes) and Silhouette score (statistical metric) involve data analysis and interpretation to make informed decisions about model parameters.
*   **CO4:** Evaluating different *k* values and selecting the best one is part of model selection and tuning, integrating statistical understanding with practical application.

**Textbook References:**

*   **Géron (2nd ed.):** Likely dedicates a section to choosing *k*, explaining the Elbow method and possibly mentioning silhouette scores.
*   **Miller (1st ed.):** Might cover techniques for model evaluation and parameter selection in statistical contexts.
*   **Kotu & Deshpande (2nd ed.):** Chapter 9 will probably discuss methods for determining the number of clusters.

---

### 5. K-means Variants and Considerations

*   **Sensitivity to Initial Centroids:** As mentioned, K-means can converge to different local optima depending on the initial placement of centroids. Using **K-means++** initialization significantly reduces this problem. Running the algorithm multiple times (e.g., 10-20 times) with different random initializations and choosing the clustering with the lowest WCSS is a common practice.
*   **Handling Outliers:** K-means is sensitive to outliers because they can significantly pull centroids away from the actual cluster centers. Outliers can skew the mean calculation in the update step. Preprocessing data to identify and handle outliers (e.g., by removal or transformation) might be necessary.
*   **Feature Scaling:** K-means relies on distance metrics. If features have different scales (e.g., one feature is in meters, another in seconds), features with larger scales can dominate the distance calculation. It's crucial to **scale features** to a similar range (e.g., using Standardization or Min-Max Scaling) before applying K-means. This ensures all features contribute equally to the distance calculation.
*   **Spherical Clusters:** K-means assumes clusters are spherical and have roughly equal variance. It may perform poorly on clusters that are elongated, non-spherical, or have very different sizes.
*   **Dimensionality:** K-means can struggle with high-dimensional data due to the **curse of dimensionality**. Distances between points become less meaningful in very high dimensions. Techniques like Principal Component Analysis (PCA) can be used to reduce dimensionality before applying K-means (relates to **CO2**).

**Relevance to Course Outcomes:**

*   **CO1:** Understanding these considerations is vital for successfully applying K-means in real-world engineering scenarios.
*   **CO2:** Feature scaling and dimensionality reduction (like PCA) directly utilize linear algebra and statistical concepts to improve algorithm performance.
*   **CO4:** Addressing these limitations by preprocessing and considering algorithm assumptions integrates statistical knowledge with practical application for robust solutions.

**Textbook References:**

*   **Géron (2nd ed.):** Will likely cover practical aspects like feature scaling, outlier sensitivity, and initialization strategies.
*   **Strang (6th ed.):** Concepts from linear algebra, such as vector norms and transformations, underpin distance metrics and dimensionality reduction.
*   **Deisenroth et al. (1st ed.):** Discusses foundational mathematical concepts relevant to data scaling and dimensionality.
*   **Watkins (Preliminary):** May cover data preprocessing techniques relevant to machine learning.

---

### 6. Practical Implementation (Conceptual, based on common libraries)

Most data science libraries (like Scikit-learn in Python) provide efficient implementations of K-means.

**Conceptual Steps using a Library:**

1.  **Import necessary libraries:** `numpy`, `sklearn.cluster.KMeans`, `sklearn.preprocessing.StandardScaler`, etc.
2.  **Load and preprocess data:** Load your dataset. Apply feature scaling (e.g., `StandardScaler`).
3.  **Determine *k*:** Use the Elbow method or Silhouette scores to find a suitable number of clusters.
4.  **Instantiate KMeans:**
    ```python
    from sklearn.cluster import KMeans
    kmeans = KMeans(n_clusters=k, init='k-means++', n_init=10, random_state=42)
    # n_clusters: the desired number of clusters (k)
    # init: initialization method ('k-means++' is recommended)
    # n_init: number of times the k-means algorithm will be run with different centroid seeds (important for robustness)
    # random_state: for reproducibility
    ```
5.  **Fit the model:**
    ```python
    kmeans.fit(scaled_data)
    ```
6.  **Get cluster labels and centroids:**
    ```python
    labels = kmeans.labels_       # Cluster assignment for each data point
    centroids = kmeans.cluster_centers_ # Coordinates of the cluster centers
    ```
7.  **Evaluate:** Analyze the clusters, visualize them (if 2D/3D), and assess performance using metrics like silhouette score.

**Relevance to Course Outcomes:**

*   **CO1:** Demonstrates the application of an unsupervised learning algorithm.
*   **CO3:** Involves interpretation of the results (cluster labels).
*   **CO4:** Integrates data preprocessing (scaling) with the core algorithm.

**Textbook References:**

*   **Géron (2nd ed.):** Chapter 14 will likely provide concrete Python code examples using Scikit-learn.
*   **Cielen et al. (1st ed.):** Will provide Python-centric examples for data science tasks, including clustering.

---

### 7. Examples of K-means in Engineering and Data Science

*   **Customer Segmentation:** Grouping customers based on their purchasing behavior, demographics, or website activity for targeted marketing (e.g., E-commerce, retail).
*   **Image Compression/Quantization:** Reducing the number of colors in an image by clustering pixel colors. The cluster centroids represent the new color palette. (Relates to **CO1**, **CO3**).
*   **Document Clustering:** Grouping similar documents or articles based on their content (e.g., for information retrieval or topic modeling).
*   **Anomaly Detection:** While not its primary purpose, data points that are far from any centroid might be considered anomalies.
*   **Genomic Analysis:** Clustering genes with similar expression patterns.
*   **Manufacturing:** Identifying groups of products with similar defect patterns or performance metrics. (Directly relates to **CO1**, **CO4**).
*   **Urban Planning:** Grouping geographical areas based on demographic and infrastructure data to identify needs or optimize resource allocation.

**Relevance to Course Outcomes:**

*   **CO1:** All these examples showcase the application of unsupervised learning in various domains.
*   **CO2:** Analyzing genomic data or performance metrics might involve understanding underlying mathematical representations of the data.
*   **CO3:** Interpreting customer segments or defect patterns relies on statistical analysis of the clustered data.
*   **CO4:** Integrating clustering with other analysis steps (e.g., clustering defect data and then applying statistical process control) is a common practice.

---

### 8. Practice Questions and Answers

**Question 1:**
What type of machine learning is K-means clustering?
    a) Supervised Learning
    b) Unsupervised Learning
    c) Semi-supervised Learning
    d) Reinforcement Learning

**Answer:** b) Unsupervised Learning

**Question 2:**
What is the primary objective function that K-means clustering aims to minimize?
    a) Within-Cluster Sum of Squares (WCSS)
    b) Between-Cluster Sum of Squares (BCSS)
    c) Mean Squared Error (MSE)
    d) Root Mean Squared Error (RMSE)

**Answer:** a) Within-Cluster Sum of Squares (WCSS)

**Question 3:**
Which of the following is NOT a common issue or consideration when using K-means clustering?
    a) Sensitivity to initial centroid placement
    b) Requirement for feature scaling
    c) Dependence on the number of clusters (k) being predetermined
    d) Assumption that clusters are of arbitrary shape and size

**Answer:** d) Assumption that clusters are of arbitrary shape and size. (K-means assumes roughly spherical clusters).

**Question 4:**
If you are analyzing customer data where 'Age' (ranging from 18-80) and 'Annual Income' (ranging from 20,000 to 2,000,000) are features, why is feature scaling important before applying K-means?

**Answer:** Feature scaling is important because features with larger scales (like 'Annual Income') can disproportionately influence the distance calculations and thus the cluster assignments, overriding the contribution of features with smaller scales (like 'Age'). Scaling ensures that both features contribute more equally to the clustering process.

**Question 5:**
Briefly describe the Elbow method for determining the optimal number of clusters, *k*.

**Answer:** The Elbow method involves running K-means for a range of *k* values and calculating the Within-Cluster Sum of Squares (WCSS) for each *k*. The WCSS is then plotted against *k*. The "elbow" point on this plot, where the rate of decrease in WCSS sharply changes, is considered a good indication of the optimal number of clusters.

---

### 9. Important Points to Remember

*   K-means is an **unsupervised learning** algorithm for **partitioning data** into *k* clusters.
*   It aims to **minimize Within-Cluster Sum of Squares (WCSS)**.
*   The algorithm involves an iterative process of **assignment** and **update** of centroids.
*   **Initialization of centroids** is critical and can affect the final outcome. Use **K-means++** and run multiple initializations.
*   **Feature scaling** is crucial for algorithms sensitive to feature magnitudes, like K-means.
*   The choice of *k* is not automatic; use methods like the **Elbow method** or **Silhouette score**.
*   K-means assumes **spherical clusters** of similar size and is sensitive to **outliers**.
*   It can be effective for various engineering and data science applications, but understanding its limitations is key.

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=423c-v3_2X8) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=9GMBpZZtjXM) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=KzE_56Hk5B8) |


### 10. Further Reading & Integration with Textbooks

*   **Gilbert Strang's "Introduction to Linear Algebra":** While not directly about clustering, Chapters on vector norms, distances, and transformations (especially in the context of data representation) provide the mathematical underpinning for distance calculations in K-means and dimensionality reduction techniques like PCA.
*   **Aurélien Géron's "Hands-on machine learning...":** This book is invaluable for practical implementation. Chapter 14 specifically covers unsupervised learning, including K-means, with Python code examples and detailed explanations of its parameters and considerations.
*   **Deisenroth, Faisal, & Ong's "Mathematics for machine learning":** This book provides a strong theoretical foundation. Look for sections on optimization, distance metrics, and basic algorithms, which will deepen your understanding of *why* K-means works and its mathematical properties.
*   **S. C. Gupta & V. K. Kapoor's "Fundamentals of mathematical statistics":** Chapters on measures of central tendency (mean), dispersion, and basic probability will reinforce the statistical concepts behind calculating centroids and understanding data distribution.
*   **Davy Cielen et al.'s "Introducing data science...":** This book offers a practical introduction to data science tools, likely including chapters on applying clustering with Python libraries, making the concepts tangible.
*   **Vijay Kotu & Bala Deshpande's "Data science: concepts and practice":** This reference book provides broader context on data mining and clustering techniques, including K-means, often with real-world case studies.
*   **James D. Miller's "Statistics For Data Science":** This book would offer statistical insights into evaluating clustering quality and understanding the properties of the data being clustered.

By referencing these texts, you can gain a comprehensive understanding from the theoretical underpinnings (Strang, Deisenroth) to practical application and evaluation (Géron, Cielen, Kotu, Miller).