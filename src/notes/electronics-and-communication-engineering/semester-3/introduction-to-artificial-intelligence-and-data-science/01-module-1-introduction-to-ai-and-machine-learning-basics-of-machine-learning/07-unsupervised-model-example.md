---
title: "unsupervised model example"
subject: "INTRODUCTION TO ARTIFICIAL INTELLIGENCE AND DATA 
SCIENCE"
module: "Module 1: Introduction to AI and Machine Learning : Basics of Machine Learning"
branch: "Electronics and Communication Engineering"
semester: 3
topicId: "68a5c45db09ce205780fe33e"
status: "completed"
scrapedAt: "2026-05-23T17:45:37.708Z"
---
## Introduction to Artificial Intelligence and Data Science

### Module 1: Introduction to AI and Machine Learning: Basics of Machine Learning

#### Topic: Unsupervised Model Example

---

### 1. Learning Outcomes Covered

This topic specifically addresses the following learning outcome:

*   **CO1: Apply the concept of machine learning algorithms including neural networks and supervised/unsupervised learning techniques for engineering applications.** (Knowledge Level: K3) - Understanding unsupervised models is crucial for applying them to engineering problems.

---

### 2. Key Concepts and Definitions

**Unsupervised Learning:**

*   **Definition:** A type of machine learning where algorithms learn patterns from data that is not labeled. The goal is to discover hidden structures, relationships, or groupings within the data without explicit guidance.
*   **Key Characteristic:** No "correct" output is provided during training. The model learns by identifying similarities and differences in the input features.
*   **Contrast with Supervised Learning:** Supervised learning involves labeled data (input-output pairs), and the algorithm learns to map inputs to outputs. Unsupervised learning operates on unlabeled data.

**Types of Unsupervised Learning:**

*   **Clustering:** Grouping similar data points together. The algorithm identifies distinct clusters or segments within the data.
*   **Dimensionality Reduction:** Reducing the number of features (variables) in a dataset while preserving as much of the important information as possible. This can simplify models, improve performance, and aid in visualization.
*   **Association Rule Learning:** Discovering relationships or dependencies between items in a dataset. Often used in market basket analysis.

---

### 3. Unsupervised Model Example: **K-Means Clustering**

K-Means clustering is a popular and widely used unsupervised learning algorithm for **clustering**.

**3.1. What is K-Means Clustering?**

*   K-Means is an iterative algorithm that partitions a dataset into *k* distinct clusters.
*   The algorithm aims to minimize the **within-cluster sum of squares (WCSS)**, which is the sum of squared distances between each data point and the centroid of its assigned cluster.

**3.2. How K-Means Works (The Algorithm)**

1.  **Initialization:**
    *   Choose the number of clusters, *k*.
    *   Randomly initialize *k* cluster centroids. These centroids are essentially the initial means of the clusters.

2.  **Assignment Step:**
    *   Assign each data point to the nearest centroid based on a distance metric (commonly Euclidean distance). This forms *k* initial clusters.

3.  **Update Step:**
    *   Recalculate the position of each centroid by taking the mean of all data points assigned to that cluster.

4.  **Iteration:**
    *   Repeat the Assignment and Update steps until the centroids no longer change significantly, or a maximum number of iterations is reached. This indicates that the algorithm has converged.

**3.3. Key Concepts in K-Means**

*   **Centroid:** The mean of all data points assigned to a particular cluster. It represents the center of the cluster.
*   **Euclidean Distance:** The straight-line distance between two points in Euclidean space. For two points $p = (p_1, p_2, ..., p_n)$ and $q = (q_1, q_2, ..., q_n)$, the Euclidean distance is calculated as:
    $d(p, q) = \sqrt{(p_1 - q_1)^2 + (p_2 - q_2)^2 + ... + (p_n - q_n)^2}$
    (Refer to **Gupta & Kapoor, Fundamentals of Mathematical Statistics** for statistical distance concepts).

*   **Within-Cluster Sum of Squares (WCSS):** A measure of the compactness of clusters. Lower WCSS indicates better clustering.
    $WCSS = \sum_{i=1}^{k} \sum_{x \in C_i} ||x - \mu_i||^2$
    where:
    *   $k$ is the number of clusters.
    *   $C_i$ is the $i$-th cluster.
    *   $x$ is a data point in cluster $C_i$.
    *   $\mu_i$ is the centroid of cluster $C_i$.

**3.4. Example Scenario: Customer Segmentation**

Imagine an e-commerce company wants to understand its customer base better to tailor marketing strategies. They have data on customer purchasing habits, such as:

*   **Average Purchase Value:** The average amount a customer spends per transaction.
*   **Frequency of Purchase:** How often a customer buys from the company.

The company decides to use K-Means clustering to segment its customers.

**Steps:**

1.  **Data Preparation:** Collect customer data for "Average Purchase Value" and "Frequency of Purchase." Normalize these features if their scales are very different (e.g., using StandardScaler from Scikit-Learn). This is important because K-Means is sensitive to feature scales. (Refer to **Cielen, Meysman, & Arno, Introducing Data Science** for data preprocessing techniques).

2.  **Choosing *k*:** This is a crucial step.
    *   **Elbow Method:** Run K-Means for different values of *k* (e.g., 2 to 10) and plot the WCSS against *k*. The "elbow point" where the rate of decrease in WCSS slows down significantly suggests an optimal *k*.
    *   **Silhouette Score:** Measures how similar a data point is to its own cluster compared to other clusters. A higher silhouette score indicates better-defined clusters.

3.  **Applying K-Means:** Let's assume *k* = 3 is chosen.
    *   The algorithm initializes 3 centroids.
    *   Customers are assigned to the nearest centroid.
    *   Centroids are updated based on the average purchase value and frequency of purchase of the assigned customers.
    *   This process repeats until convergence.

4.  **Interpreting Clusters:** After clustering, the company might find:
    *   **Cluster 1: "High-Value, Frequent Buyers"** - Customers with high average purchase value and high purchase frequency. These are the most loyal and profitable customers.
    *   **Cluster 2: "Low-Value, Infrequent Buyers"** - Customers with low average purchase value and low purchase frequency. These might be new customers or occasional shoppers.
    *   **Cluster 3: "Mid-Tier Buyers"** - Customers who fall somewhere in between.

5.  **Actionable Insights:** Based on these segments, the company can:
    *   Offer loyalty programs or exclusive discounts to Cluster 1.
    *   Develop targeted campaigns to encourage repeat purchases from Cluster 2.
    *   Personalize recommendations for Cluster 3.

**(Refer to Aurélien Géron's "Hands-on machine learning with Scikit-Learn, Keras, and TensorFlow" for practical implementation of K-Means in Python.)**

---

### 4. Other Unsupervised Learning Examples

*   **Principal Component Analysis (PCA):** A dimensionality reduction technique. It finds new orthogonal axes (principal components) that capture the maximum variance in the data.
    *   **Application:** Image compression, noise reduction, feature extraction for supervised learning algorithms.
    *   (Refer to **Gilbert Strang's Introduction to Linear Algebra** and **Deisenroth, Faisal, & Ong's Mathematics for Machine Learning** for the underlying linear algebra concepts like eigenvectors and eigenvalues used in PCA).
    *   **CO2 Application:** Applying PCA to analyze and solve engineering problems.

*   **Apriori Algorithm (Association Rule Learning):** Used to find frequent itemsets in a dataset and derive association rules.
    *   **Application:** Market basket analysis (e.g., "Customers who buy bread also tend to buy milk").
    *   **CO1 Application:** Applying unsupervised learning techniques for engineering applications.

---

### 5. Important Points to Remember

*   **Unsupervised learning discovers patterns; it doesn't predict specific outcomes.**
*   **The choice of *k* in K-Means is critical and often requires domain knowledge or specific techniques like the Elbow method.**
*   **Feature scaling is crucial for distance-based algorithms like K-Means.**
*   **Unsupervised learning can be a powerful tool for exploratory data analysis, hypothesis generation, and data preprocessing.**
*   **Understanding the underlying mathematical principles (e.g., distance metrics, variance) is key to effectively using and interpreting unsupervised models.** (Relates to **CO2** and **CO3**).

---

### 6. Practice Questions and Exercises

**Question 1:**
You are given a dataset of customer demographics (age, income) and purchasing behavior (spending amount, purchase frequency). You want to segment these customers into distinct groups without any prior labels. Which type of machine learning and a specific algorithm would you likely use?

**Answer 1:**
You would use **unsupervised machine learning**, specifically a **clustering algorithm** like **K-Means**.

**Question 2:**
Explain the main difference between supervised and unsupervised learning.

**Answer 2:**
Supervised learning uses labeled data (input-output pairs) to train a model to predict outputs for new inputs. Unsupervised learning uses unlabeled data to discover hidden patterns, structures, or groupings within the data.

**Question 3:**
What is the primary goal of the K-Means clustering algorithm?

**Answer 3:**
The primary goal of K-Means is to partition a dataset into *k* clusters such that the **within-cluster sum of squares (WCSS)** is minimized.

**Question 4:**
(Conceptual Exercise)
Imagine you are analyzing sensor data from an industrial machine to detect anomalies. The sensor readings are numerical values. How could an unsupervised learning approach be beneficial here?

**Answer 4:**
An unsupervised learning approach, like clustering or anomaly detection (which often builds on unsupervised principles), could be used to identify "normal" operating patterns based on the sensor data. Deviations from these normal patterns, which wouldn't be labeled as "anomalous" beforehand, could then be flagged as potential anomalies or malfunctions. This directly relates to **CO1** by applying unsupervised learning to an engineering application.

**Question 5:**
Why is feature scaling important for K-Means? Provide a brief explanation.

**Answer 5:**
K-Means uses distance calculations (like Euclidean distance) to assign data points to clusters. If features have vastly different scales (e.g., age in years vs. income in thousands of dollars), the feature with the larger scale will disproportionately influence the distance calculations and dominate the clustering process. Feature scaling ensures that all features contribute equally to the distance metric. (Refer to **Cielen, Meysman, & Arno, Introducing Data Science** for practical scaling methods).

---

This comprehensive set of notes covers the fundamentals of unsupervised learning, with a detailed example of K-Means clustering. It emphasizes the practical application and theoretical underpinnings, aligning with the provided learning and course outcomes.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=gI-qXk7XojA) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=F_4HkL5r4n0) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=8XG7U5yN668) |
