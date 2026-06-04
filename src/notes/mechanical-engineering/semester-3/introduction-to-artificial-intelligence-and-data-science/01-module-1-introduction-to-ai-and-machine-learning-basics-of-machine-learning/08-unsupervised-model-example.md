---
title: "unsupervised model example"
subject: "INTRODUCTION TO ARTIFICIAL INTELLIGENCE AND DATA SCIENCE"
module: "Module 1: Introduction to AI and Machine Learning : Basics of Machine Learning"
branch: "Mechanical Engineering"
semester: 3
topicId: "68a3fd1351d0cf4804462d82"
status: "completed"
scrapedAt: "2026-05-20T17:49:40.596Z"
---
## Module 1: Introduction to AI and Machine Learning: Basics of Machine Learning - Unsupervised Model Example

This module introduces the fundamental concepts of Artificial Intelligence (AI) and Machine Learning (ML). Specifically, this section focuses on providing a practical example of an unsupervised learning model.

---

### 1. Learning Outcomes Covered

This section will help you understand:

*   **How unsupervised learning models work:** We will explore the core principles and mechanics of these models.
*   **Applications of unsupervised learning:** You will see how these techniques are used in real-world scenarios.
*   **Key concepts related to unsupervised learning:** This includes understanding data partitioning, pattern discovery, and feature representation.

---

### 2. Key Concepts and Definitions

#### 2.1. Unsupervised Learning

**Definition:** Unsupervised learning is a type of machine learning where the algorithm learns from data that has not been labeled or categorized. The goal is to find hidden patterns, structures, or relationships within the data without explicit guidance.

**Key Characteristics:**

*   **No target variable:** Unlike supervised learning, there is no pre-defined output or label to predict.
*   **Data exploration:** The primary objective is to explore and understand the inherent structure of the data.
*   **Pattern discovery:** Algorithms aim to identify groupings, anomalies, or underlying dimensions in the data.

#### 2.2. Common Unsupervised Learning Tasks

*   **Clustering:** Grouping similar data points together.
*   **Dimensionality Reduction:** Reducing the number of features (variables) in a dataset while preserving important information.
*   **Anomaly Detection:** Identifying unusual or outlier data points.

---

### 3. Unsupervised Model Example: Customer Segmentation using K-Means Clustering

This is a classic and widely used example to illustrate unsupervised learning.

#### 3.1. The Problem: Understanding Customer Behavior

Imagine an e-commerce company that wants to understand its customer base better. They have data on customer purchases, demographics, browsing history, etc. The goal is to group customers into distinct segments to tailor marketing campaigns, personalize recommendations, and improve customer service.

**Why Unsupervised Learning?**

The company doesn't have pre-defined customer categories. They want the data to reveal these natural groupings.

#### 3.2. The Model: K-Means Clustering

**Definition:** K-Means is an iterative algorithm that partitions a dataset into *k* distinct, non-overlapping clusters. It aims to minimize the within-cluster sum of squares (inertia), which is the sum of squared distances between data points and their respective cluster centroids.

**How it Works (Simplified Steps):**

1.  **Initialization:**
    *   Choose the number of clusters, *k*. This is a hyperparameter that needs to be decided beforehand (or through experimentation).
    *   Randomly select *k* data points from the dataset as initial cluster centroids.

2.  **Assignment Step:**
    *   Assign each data point to the nearest cluster centroid based on a distance metric (typically Euclidean distance).

3.  **Update Step:**
    *   Recalculate the position of each cluster centroid by taking the mean of all data points assigned to that cluster.

4.  **Iteration:**
    *   Repeat the assignment and update steps until the cluster assignments no longer change or a maximum number of iterations is reached.

#### 3.3. Illustrative Example Data

Let's consider a simplified dataset with two features:

*   **Annual Income** (in thousands of dollars)
*   **Spending Score** (a score from 1 to 100, representing how much a customer spends)

| Customer ID | Annual Income | Spending Score |
| :---------- | :------------ | :------------- |
| 1           | 15            | 39             |
| 2           | 15            | 81             |
| 3           | 16            | 6            |
| 4           | 16            | 77             |
| 5           | 17            | 40             |
| ...         | ...           | ...            |

**Visualizing the Data:**

If we plot this data on a 2D graph, we might visually identify potential groups of customers (e.g., low income/low spending, low income/high spending, high income/moderate spending, etc.). K-Means aims to formalize this visual grouping.

#### 3.4. Applying K-Means (Conceptual Walkthrough with k=3)

Let's assume we decide to segment customers into *k=3* groups.

1.  **Initialization:** We randomly pick 3 points as our initial centroids.
2.  **Assignment:** Each customer is assigned to the closest centroid.
3.  **Update:** The centroids are moved to the average position of the customers assigned to them.
4.  **Repeat:** This process continues until convergence.

**Potential Outcome:**

After running K-Means, we might end up with three distinct customer segments:

*   **Segment 1 (e.g., "Careful Spenders"):** Customers with lower incomes and moderate spending scores. They are cautious with their money.
*   **Segment 2 (e.g., "Targeted High Spenders"):** Customers with higher incomes and very high spending scores. They are valuable customers who spend a lot.
*   **Segment 3 (e.g., "Low Earners, Low Spenders"):** Customers with lower incomes and lower spending scores. They are less engaged and may require different marketing approaches.

#### 3.5. Interpreting the Results

The company can now analyze the characteristics of each segment:

*   **Segment 1:** Marketing efforts could focus on value-for-money deals or loyalty programs.
*   **Segment 2:** These customers could be offered premium products, exclusive previews, or personalized VIP treatment.
*   **Segment 3:** Strategies might involve engagement campaigns to increase spending or targeted promotions for essential products.

---

### 4. Importance and Applications of Unsupervised Learning

*   **Pattern Discovery:** Uncovering hidden structures in complex datasets.
*   **Data Preprocessing:** Used for feature extraction and dimensionality reduction (e.g., PCA, discussed in CO2) before applying supervised learning.
*   **Anomaly Detection:** Identifying fraudulent transactions, unusual system behavior, or rare events.
*   **Recommender Systems:** Grouping users with similar preferences to recommend items.
*   **Market Basket Analysis:** Finding associations between items frequently purchased together.

---

### 5. Connecting to Course Outcomes

*   **CO1 (Apply ML algorithms):** K-Means clustering is a direct application of an unsupervised ML algorithm for customer segmentation, a common engineering application.
*   **CO2 (Apply advanced math):** While not explicitly shown here in detail, the distance calculations (Euclidean) and averaging for centroid updates involve basic linear algebra and statistical concepts. Techniques like Principal Component Analysis (PCA) for dimensionality reduction, another unsupervised method, heavily rely on concepts from "Introduction to Linear Algebra" by Gilbert Strang and "Mathematics for Machine Learning" by Deisenroth et al.
*   **CO3 (Analyze and interpret data):** The interpretation of the customer segments derived from clustering requires statistical analysis and drawing insights from the data.
*   **CO4 (Integrate statistical & ML):** Understanding the data's statistical properties and then applying an ML algorithm like K-Means to find patterns is an integration of both fields.

---

### 6. Important Points to Remember

*   **Choice of *k***: Determining the optimal number of clusters (*k*) is crucial and often requires techniques like the Elbow Method or Silhouette Score.
*   **Feature Scaling:** For algorithms like K-Means that rely on distance, it's often necessary to scale features (e.g., normalize or standardize) so that features with larger ranges don't dominate the distance calculations. "Hands-on Machine Learning" by Aurélien Géron often emphasizes this preprocessing step.
*   **Sensitivity to Initialization:** K-Means can be sensitive to the initial placement of centroids. Running the algorithm multiple times with different random initializations and choosing the best result is a common practice.
*   **Cluster Shape:** K-Means assumes clusters are spherical. It may not perform well on clusters with irregular shapes.

---

### 7. Practice Questions/Exercises

**Question 1:**

What is the primary difference between supervised and unsupervised learning?

**Answer:**
Supervised learning uses labeled data to predict an output variable, while unsupervised learning uses unlabeled data to find hidden patterns and structures.

**Question 2:**

In the K-Means clustering example, what are the two features used for customer segmentation?

**Answer:**
Annual Income and Spending Score.

**Question 3:**

If you wanted to group customers based on their purchasing behavior without prior knowledge of customer types, which type of machine learning would you use? Explain why.

**Answer:**
Unsupervised learning. This is because you are looking for patterns and groupings within the data itself, rather than trying to predict a known outcome based on labeled examples. Unsupervised learning is ideal for exploratory data analysis and discovering inherent structures.

**Question 4 (Conceptual):**

Suppose you are using K-Means to segment images based on color. If your images have colors represented by RGB values (Red, Green, Blue), each of which can range from 0 to 255, why might feature scaling be important before applying K-Means?

**Answer:**
Feature scaling is important because the range of each feature (R, G, B) is the same (0-255). However, if you were to introduce another feature with a much larger or smaller range (e.g., image size), without scaling, the feature with the larger range could disproportionately influence the distance calculations, potentially leading to biased cluster assignments. In this specific color example, while the ranges are similar, scaling can still ensure that the relative importance of each color channel is maintained equally across all dimensions. For instance, if one color channel had a much higher variance, scaling would help prevent it from dominating the distance calculation.

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=clVwS3P9s84) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=A182z4Z_H3U) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=x1U7Hw4K0mU) |


### 8. References and Further Reading

*   **"Hands-on machine learning with Scikit-Learn, Keras, and TensorFlow" by Aurélien Géron:** Provides practical implementations and explanations of clustering algorithms like K-Means.
*   **"Mathematics for machine learning" by Deisenroth, Marc Peter, et al.:** Explains the underlying mathematical principles, including distance metrics and optimization, relevant to K-Means.
*   **"Introduction to Linear Algebra" by Gilbert Strang:** Essential for understanding vector operations and mathematical concepts that underpin many ML algorithms, including those used for dimensionality reduction (which is often paired with clustering).
*   **"Introducing data science: big data, machine learning, and more, using Python tools" by Cielen, Davy, and Arno Meysman:** Offers introductory examples of applying data science techniques, including unsupervised learning.

---