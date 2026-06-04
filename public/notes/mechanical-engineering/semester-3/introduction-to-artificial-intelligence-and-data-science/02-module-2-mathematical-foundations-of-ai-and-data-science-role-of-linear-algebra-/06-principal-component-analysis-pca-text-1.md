---
title: "Principal Component Analysis (PCA). (Text-1)"
subject: "INTRODUCTION TO ARTIFICIAL INTELLIGENCE AND DATA SCIENCE"
module: "Module 2: Mathematical Foundations of AI and Data science : Role of linear algebra in Data representation and analysis"
branch: "Mechanical Engineering"
semester: 3
topicId: "68a3fd1351d0cf4804462d90"
status: "completed"
scrapedAt: "2026-05-20T17:49:49.794Z"
---
# Module 2: Mathematical Foundations of AI and Data Science - Role of Linear Algebra in Data Representation and Analysis

## Topic: Principal Component Analysis (PCA)

**Course Outcome Alignment:** This topic directly contributes to **CO2** by enabling students to apply principal component analysis to analyze and solve engineering problems. It also indirectly supports **CO3** and **CO4** by providing a dimensionality reduction technique that can improve data analysis and the performance of machine learning models.

**Knowledge Level:** K3 (Apply)

---

### 1. Introduction to Dimensionality Reduction

*   **What is Dimensionality Reduction?**
    *   The process of reducing the number of random variables under consideration, by obtaining a set of principal variables.
    *   In essence, it's about transforming high-dimensional data into a lower-dimensional space while retaining as much of the original information (variance) as possible.

*   **Why is Dimensionality Reduction Important?**
    *   **Curse of Dimensionality:** As the number of features (dimensions) increases, the data becomes sparser, making it harder for machine learning algorithms to find meaningful patterns and leading to increased computational cost and storage requirements.
    *   **Visualization:** Humans can only visualize data in 2D or 3D. Dimensionality reduction allows us to project high-dimensional data into these lower dimensions for easier understanding and exploration.
    *   **Improved Model Performance:** Reducing noisy or redundant features can lead to faster training times and better generalization for machine learning models.
    *   **Noise Reduction:** By focusing on the directions of maximum variance, PCA can effectively filter out noise in the data.

*   **Types of Dimensionality Reduction:**
    *   **Feature Selection:** Selecting a subset of the original features.
    *   **Feature Extraction:** Creating new features (dimensions) that are combinations of the original features. PCA is a prominent example of feature extraction.

---

### 2. Principal Component Analysis (PCA)

#### 2.1 Core Idea and Objective

*   **Objective:** To find a new set of orthogonal (uncorrelated) variables, called **Principal Components (PCs)**, such that each successive PC accounts for the largest possible variance in the data that is not accounted for by the preceding PCs.
*   **Linear Transformation:** PCA is a linear transformation technique that projects the data onto a lower-dimensional subspace spanned by the principal components.
*   **Maximizing Variance:** The goal is to find the directions (principal components) in the original feature space that capture the most variance.

#### 2.2 Mathematical Formulation (Leveraging Linear Algebra)

*   **Data Matrix (X):**
    *   Let $X$ be an $n \times d$ matrix, where $n$ is the number of observations (data points) and $d$ is the number of features (dimensions).
    *   Each row represents an observation, and each column represents a feature.

*   **Centering the Data:**
    *   Before applying PCA, it's crucial to center the data by subtracting the mean of each feature from all observations of that feature.
    *   Let $\bar{x}_j$ be the mean of the $j$-th feature. The centered data matrix $X_{centered}$ has elements $x_{ij}' = x_{ij} - \bar{x}_j$.
    *   This ensures that the first principal component captures the directions of maximum variance, not the mean.

*   **Covariance Matrix ($\Sigma$):**
    *   The covariance matrix describes the variance of each feature and the covariance between pairs of features.
    *   For centered data $X_{centered}$, the sample covariance matrix $S$ is calculated as:
        $S = \frac{1}{n-1} X_{centered}^T X_{centered}$
    *   $S$ is a $d \times d$ symmetric matrix. The diagonal elements represent the variance of each feature, and the off-diagonal elements represent the covariance between pairs of features.

*   **Eigen Decomposition of the Covariance Matrix:**
    *   The key to PCA lies in the eigen decomposition of the covariance matrix $S$.
    *   We want to find eigenvectors $v$ and eigenvalues $\lambda$ such that $Sv = \lambda v$.
    *   **Eigenvectors:** These represent the **directions** of maximum variance in the data. They form the basis for the principal components. In PCA, eigenvectors are often referred to as **principal component vectors** or **loadings**.
    *   **Eigenvalues:** These represent the **magnitude of variance** along the corresponding eigenvectors. A larger eigenvalue indicates that the corresponding eigenvector captures more variance in the data.

*   **Sorting Eigenpairs:**
    *   The eigenvectors are sorted in descending order of their corresponding eigenvalues.
    *   Let the sorted eigenvalues be $\lambda_1 \ge \lambda_2 \ge \dots \ge \lambda_d$.
    *   The corresponding sorted eigenvectors are $v_1, v_2, \dots, v_d$.

*   **Choosing Principal Components:**
    *   To reduce the dimensionality from $d$ to $k$ (where $k < d$), we select the top $k$ eigenvectors corresponding to the $k$ largest eigenvalues: $v_1, v_2, \dots, v_k$.
    *   These $k$ eigenvectors form the **projection matrix** $W$, which is a $d \times k$ matrix:
        $W = [v_1 | v_2 | \dots | v_k]$

*   **Transforming the Data:**
    *   The original centered data $X_{centered}$ is projected onto the new subspace spanned by the top $k$ principal components.
    *   The transformed data $Y$ is an $n \times k$ matrix:
        $Y = X_{centered} W$

#### 2.3 Interpretation of Principal Components

*   **Principal Component 1 ($PC_1$):** The direction in the $d$-dimensional space that captures the largest amount of variance in the data. It represents the most significant pattern or trend in the data.
*   **Principal Component 2 ($PC_2$):** The direction orthogonal to $PC_1$ that captures the second largest amount of variance. It captures the next most significant pattern, independent of $PC_1$.
*   **Subsequent PCs:** Each subsequent PC captures the largest remaining variance that is orthogonal to all preceding PCs.
*   **Loadings:** The components of the eigenvectors ($v_i$) are called loadings. They indicate how much each original feature contributes to a particular principal component. A high absolute value of a loading suggests that the corresponding feature is strongly associated with that PC.

#### 2.4 Choosing the Number of Principal Components ($k$)

*   **Scree Plot:**
    *   A plot of eigenvalues against their corresponding principal component number.
    *   We look for an "elbow" in the plot, where the eigenvalues start to decrease sharply. The components before the elbow are typically retained.

*   **Explained Variance Ratio:**
    *   The proportion of the total variance explained by each principal component: $\frac{\lambda_i}{\sum_{j=1}^d \lambda_j}$.
    *   We can set a threshold for the cumulative explained variance (e.g., 95% or 99%) and select enough components to meet that threshold.

*   **Domain Knowledge:** Sometimes, the desired number of components might be dictated by the specific application or available visualization capabilities.

---

### 3. PCA in Practice: An Illustrative Example

Imagine a dataset with two features, `Height` and `Weight`, for a group of people.

*   **Data:**
    *   We have $n$ people, each with a `Height` and `Weight`.
    *   This is 2-dimensional data ($d=2$).

*   **Centering:**
    *   Calculate the average height ($\bar{H}$) and average weight ($\bar{W}$).
    *   Subtract $\bar{H}$ from all heights and $\bar{W}$ from all weights.

*   **Covariance Matrix:**
    *   Calculate the covariance matrix $S$ for the centered data.
    *   $S = \begin{pmatrix} \text{Var}(H) & \text{Cov}(H, W) \\ \text{Cov}(H, W) & \text{Var}(W) \end{pmatrix}$

*   **Eigen Decomposition:**
    *   Find the eigenvectors and eigenvalues of $S$.
    *   Assume the eigenvalues are $\lambda_1 > \lambda_2$.
    *   The eigenvector $v_1$ corresponding to $\lambda_1$ will likely be a direction that increases with both height and weight, capturing the overall size.
    *   The eigenvector $v_2$ corresponding to $\lambda_2$ will be orthogonal to $v_1$ and might capture subtle variations or negative correlations if they exist (though unlikely for height and weight).

*   **Projection:**
    *   If we want to reduce dimensionality to 1 (i.e., $k=1$), we use the eigenvector $v_1$.
    *   The new 1-dimensional representation of each person is their projected value onto $v_1$. This new dimension might be interpreted as "overall body size."

---

### 4. Key Concepts and Definitions Recap

*   **Principal Component (PC):** A new variable that is a linear combination of the original variables, capturing the maximum variance.
*   **Eigenvector:** The direction of maximum variance.
*   **Eigenvalue:** The magnitude of variance along the corresponding eigenvector.
*   **Covariance Matrix:** A matrix representing the variance of each feature and the covariance between pairs of features.
*   **Loadings:** The coefficients in the linear combination that form a principal component.
*   **Scree Plot:** A graphical tool to help decide the number of principal components.
*   **Explained Variance Ratio:** The proportion of total variance accounted for by each PC.

---

### 5. Advantages and Disadvantages of PCA

#### 5.1 Advantages

*   **Simplicity and Effectiveness:** Easy to understand and implement, and often effective for dimensionality reduction.
*   **Uncorrelation:** The resulting principal components are uncorrelated, which can be beneficial for certain machine learning algorithms.
*   **Noise Reduction:** By discarding components with low variance, PCA can act as a form of noise filtering.
*   **Data Visualization:** Enables visualization of high-dimensional data in lower dimensions.

#### 5.2 Disadvantages

*   **Interpretability:** The new principal components are linear combinations of the original features, which can make them difficult to interpret in terms of their original meaning.
*   **Sensitivity to Scaling:** PCA is sensitive to the scale of the original features. Features with larger scales will dominate the variance. **It is crucial to scale the data (e.g., using Standardization) before applying PCA.**
*   **Linearity Assumption:** PCA assumes that the underlying structure of the data is linear. It may not perform well on highly non-linear data.
*   **Information Loss:** While PCA aims to retain most variance, some information is inevitably lost when reducing dimensions.
*   **Not Feature Selection:** PCA creates new features, it doesn't select original features. This can be a disadvantage if the goal is to understand the importance of individual original features.

---

### 6. Important Points to Remember

*   **Always center your data before PCA.**
*   **Scale your features (e.g., standardize to have zero mean and unit variance) before PCA**, especially if they have different units or scales.
*   PCA is a **linear dimensionality reduction technique**.
*   The number of principal components to retain is a crucial hyperparameter that needs careful selection.
*   The interpretability of principal components can be challenging.

---

### 7. Practice Questions and Exercises

**Question 1:**
What is the primary goal of Principal Component Analysis (PCA)?

**Answer:**
The primary goal of PCA is to reduce the dimensionality of a dataset by transforming the original variables into a new set of uncorrelated variables called principal components, ordered such that each successive component accounts for the largest possible variance in the data not captured by the preceding components.

**Question 2:**
Why is it important to scale features before applying PCA? Give an example.

**Answer:**
It's important to scale features before PCA because PCA is sensitive to the scale of the features. Features with larger scales contribute more to the variance and thus to the principal components, potentially overshadowing features with smaller scales that might still contain important information.
**Example:** Consider a dataset with `Age` (ranging from 0 to 100) and `Salary` (ranging from 20,000 to 200,000). If we don't scale, `Salary` will dominate the variance calculations, and the first principal component will primarily reflect salary variations, even if age has equally important underlying patterns. Standardizing both features to have a mean of 0 and a standard deviation of 1 would give them equal footing.

**Question 3:**
If a covariance matrix of a dataset has eigenvalues $\lambda_1 = 10.5$, $\lambda_2 = 3.2$, and $\lambda_3 = 0.8$, and you want to retain 90% of the total variance, how many principal components would you likely select? (Assume total variance is 14.5).

**Answer:**
Total variance = 14.5
Variance explained by PC1 = 10.5
Variance explained by PC1 + PC2 = 10.5 + 3.2 = 13.7
Proportion of variance explained by PC1 = 10.5 / 14.5 ≈ 0.724 (72.4%)
Proportion of variance explained by PC1 + PC2 = 13.7 / 14.5 ≈ 0.945 (94.5%)

Since 94.5% is greater than 90%, you would likely select **2 principal components**.

**Question 4:**
What do the eigenvectors of the covariance matrix represent in PCA?

**Answer:**
The eigenvectors of the covariance matrix represent the directions of maximum variance in the data. These directions are orthogonal to each other and form the basis for the principal components. They are often referred to as the principal component vectors or loadings.

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=p_di4ateumM) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=tyDKR4FG3Yw) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=S0hG_mS9bV4) |


### 8. Textbook and Reference Material Integration

*   **Gilbert Strang's "Introduction to Linear Algebra":** Provides the fundamental understanding of matrices, eigenvalues, eigenvectors, and transformations, which are the bedrock of PCA. Understanding matrix decomposition is crucial for grasping how PCA works.
*   **Deisenroth, Faisal, Ong's "Mathematics for Machine Learning":** This book offers a machine learning-centric view of linear algebra. Chapter 11 discusses PCA in detail, covering the eigen decomposition of the covariance matrix and its application for dimensionality reduction. It emphasizes the geometric interpretation of PCA as finding directions of maximum variance.
*   **Aurélien Géron's "Hands-on Machine Learning with Scikit-Learn, Keras, and TensorFlow":** Chapter 8 of this book provides a practical guide to PCA using Scikit-Learn. It explains how to implement PCA, choose the number of components, and interpret the results in a machine learning context. It also highlights the importance of data scaling.
*   **Gupta & Kapoor's "Fundamentals of Mathematical Statistics":** While not directly focused on PCA as a machine learning technique, it provides the statistical underpinnings of variance, covariance, and the properties of correlation, which are essential for understanding the mathematical basis of PCA.
*   **Kotu & Deshpande's "Data Science: Concepts and Practice":** Discusses dimensionality reduction techniques, including PCA, in the context of data preprocessing and feature engineering for machine learning. It emphasizes the practical benefits of PCA in improving model efficiency and performance.

---

This concludes the notes on Principal Component Analysis (PCA) within the context of Module 2. Understanding these concepts is vital for applying effective data representation and analysis techniques in AI and Data Science.