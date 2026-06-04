---
title: "Dimensionality reduction technique"
subject: "INTRODUCTION TO ARTIFICIAL INTELLIGENCE AND DATA SCIENCE"
module: "Module 2: Mathematical Foundations of AI and Data science : Role of linear algebra in Data representation and analysis"
branch: "Mechanical Engineering"
semester: 3
topicId: "68a3fd1351d0cf4804462d8f"
status: "completed"
scrapedAt: "2026-05-20T17:49:49.067Z"
---
# Module 2: Mathematical Foundations of AI and Data Science - Dimensionality Reduction Techniques

## 1. Introduction to Dimensionality Reduction

### 1.1 What is Dimensionality Reduction?

*   **Definition:** Dimensionality reduction is the process of reducing the number of random variables or features under consideration, by obtaining a set of principal variables. In essence, it's about transforming data from a high-dimensional space into a lower-dimensional space while retaining as much meaningful information as possible.

### 1.2 Why is Dimensionality Reduction Important?

*   **Curse of Dimensionality:** As the number of features (dimensions) increases, the data becomes sparse, making it harder to find patterns and build effective models. This phenomenon is known as the "curse of dimensionality."
*   **Improved Model Performance:** Reduced dimensionality can lead to faster training times and better generalization for machine learning models, as they are less likely to overfit to noisy or irrelevant features.
*   **Reduced Storage Space:** High-dimensional data requires more memory and storage.
*   **Easier Visualization:** It's impossible to visualize data with more than three dimensions. Reducing dimensions to 2 or 3 allows for easier interpretation and exploration of the data.
*   **Noise Reduction:** Removing redundant or noisy features can improve the signal-to-noise ratio.

### 1.3 Types of Dimensionality Reduction

There are two main categories:

*   **Feature Selection:** This involves selecting a subset of the original features that are most relevant to the problem at hand. The original features are kept, but some are discarded.
    *   *Examples:* Filter methods (correlation, mutual information), Wrapper methods (recursive feature elimination), Embedded methods (Lasso, Ridge regression).
*   **Feature Extraction:** This involves transforming the original features into a new, lower-dimensional set of features. These new features are combinations of the original features. This is where linear algebra plays a crucial role.
    *   *Examples:* Principal Component Analysis (PCA), Linear Discriminant Analysis (LDA), t-Distributed Stochastic Neighbor Embedding (t-SNE), Autoencoders.

## 2. Linear Algebra's Role in Data Representation and Analysis for Dimensionality Reduction

Linear algebra provides the mathematical framework for understanding and implementing many dimensionality reduction techniques.

### 2.1 Data Representation as Vectors and Matrices

*   **Data Points as Vectors:** Each data point in a dataset can be represented as a vector in a multi-dimensional space. If a dataset has 'm' samples and 'n' features, it can be represented as an m x n matrix where each row is a data point (vector) and each column is a feature.
*   **Feature Engineering:** Linear transformations are fundamental in creating new features from existing ones, which is the essence of feature extraction.

### 2.2 Key Linear Algebra Concepts

*   **Vectors:** Ordered lists of numbers. Represent individual data points or features.
    *   *Example:* A dataset of house prices might have features like square footage, number of bedrooms, and location. A single house could be represented by the vector `[square_footage, num_bedrooms, location_code]`.
*   **Matrices:** Rectangular arrays of numbers. Represent entire datasets, transformations, or covariance structures.
    *   *Example:* A dataset with 100 houses (samples) and 5 features would be a 100x5 matrix.
*   **Dot Product:** Measures the similarity between two vectors.
    *   `a · b = Σ(a_i * b_i)`
    *   *Relevance:* Used in projecting data onto new axes.
*   **Vector Spaces:** A set of vectors where addition and scalar multiplication are defined. Data points exist within a vector space.
*   **Linear Transformations:** Mappings from one vector space to another using matrices. This is the core of feature extraction.
    *   `y = Ax`, where `A` is a matrix and `x` is a vector.
    *   *Reference:* **Strang's Introduction to Linear Algebra** extensively covers linear transformations and their matrix representations.
*   **Eigenvalues and Eigenvectors:**
    *   **Eigenvector:** A non-zero vector that does not change its direction when a linear transformation is applied to it. It only scales by a factor.
    *   **Eigenvalue:** The scaling factor by which an eigenvector is multiplied.
    *   `Av = λv`, where `A` is a matrix, `v` is an eigenvector, and `λ` is the eigenvalue.
    *   *Relevance:* Eigenvectors represent the directions of maximum variance in data, and eigenvalues represent the magnitude of that variance. This is fundamental to PCA.
*   **Covariance Matrix:** A matrix that describes the variance of each feature and the covariance between pairs of features. It captures the linear relationships between variables in a dataset.
    *   For a dataset X with n features and m samples, the covariance matrix C is calculated as: `C = (1/(m-1)) * X_centered.T * X_centered`, where `X_centered` is the data with the mean of each feature removed.
    *   *Relevance:* The covariance matrix is central to PCA, as its eigenvectors represent the principal components.
*   **Singular Value Decomposition (SVD):** A factorization of a matrix into three other matrices. For a matrix `A`, `A = UΣV^T`.
    *   `U`: Orthogonal matrix whose columns are the left singular vectors.
    *   `Σ`: Diagonal matrix containing singular values (non-negative, ordered from largest to smallest).
    *   `V`: Orthogonal matrix whose columns are the right singular vectors.
    *   *Relevance:* SVD is a powerful tool for dimensionality reduction (e.g., in PCA and LSA), noise reduction, and recommendation systems. It can decompose a matrix into components that capture different aspects of the data's variance.
    *   *Reference:* **Strang's Introduction to Linear Algebra** provides a deep dive into SVD and its applications. **Mathematics for Machine Learning** also explains SVD in the context of machine learning.

## 3. Principal Component Analysis (PCA) - A Key Dimensionality Reduction Technique

PCA is a linear feature extraction technique that transforms a dataset into a new coordinate system such that the greatest variances of the data lie on the first few coordinates (called principal components).

### 3.1 How PCA Works

1.  **Standardize the Data:** Center the data by subtracting the mean of each feature. Optionally, scale each feature to have unit variance. This ensures that features with larger scales don't dominate the analysis.
2.  **Compute the Covariance Matrix:** Calculate the covariance matrix of the standardized data.
3.  **Compute Eigenvalues and Eigenvectors:** Find the eigenvalues and corresponding eigenvectors of the covariance matrix.
4.  **Sort Eigenvectors:** Sort the eigenvectors in descending order based on their corresponding eigenvalues. The eigenvector with the largest eigenvalue is the first principal component, the one with the second largest eigenvalue is the second principal component, and so on.
5.  **Select Principal Components:** Choose the top 'k' eigenvectors (where 'k' is the desired lower dimension) that capture the most variance.
6.  **Transform the Data:** Project the original standardized data onto the selected 'k' eigenvectors. This results in the new, lower-dimensional representation of the data.

**Mathematically:**

*   Let `X` be the original data matrix (m x n).
*   Center the data: `X_centered = X - mean(X)`.
*   Compute the covariance matrix: `C = (1/(m-1)) * X_centered.T * X_centered`.
*   Compute eigenvalues `λ` and eigenvectors `v` of `C`.
*   Sort `v` based on `λ` in descending order.
*   Select the top `k` eigenvectors to form a matrix `W` (n x k).
*   The transformed data is `X_reduced = X_centered * W` (m x k).

### 3.2 Interpreting Principal Components

*   **Principal components are linear combinations of the original features.**
*   The first principal component captures the direction of maximum variance in the data.
*   Subsequent principal components capture the next largest variances, orthogonal to the previous ones.
*   By selecting the top 'k' principal components, we retain the most significant variations in the data while discarding less important ones.

### 3.3 Example of PCA

Imagine a dataset with two features: `Height` and `Weight`. If most of the variation in the data is explained by a general "size" factor (e.g., taller people tend to weigh more), PCA might identify a first principal component that represents this combined "size" aspect. The second principal component might capture variations orthogonal to size, like body composition.

### 3.4 PCA Implementation (Conceptual)

*   **Scikit-learn:** The `sklearn.decomposition.PCA` class in Python is a widely used tool for performing PCA.
    ```python
    from sklearn.decomposition import PCA
    from sklearn.preprocessing import StandardScaler
    import numpy as np

    # Assume X is your data matrix (m samples, n features)
    # X = np.array([...])

    # 1. Standardize the data
    scaler = StandardScaler()
    X_scaled = scaler.fit_transform(X)

    # 2. Apply PCA
    # n_components: the desired number of dimensions
    pca = PCA(n_components=2)
    X_pca = pca.fit_transform(X_scaled)

    # X_pca is now your data in 2 dimensions.
    # pca.explained_variance_ratio_ shows the proportion of variance explained by each component.
    ```
*   **Reference:** **Hands-on Machine Learning with Scikit-Learn, Keras, and TensorFlow** provides practical examples and detailed explanations of using PCA with Scikit-learn.

### 3.5 When to Use PCA

*   When dealing with datasets with a high number of features.
*   To improve the performance of machine learning algorithms by reducing overfitting and computational cost.
*   For data visualization purposes (reducing to 2 or 3 dimensions).
*   To remove multicollinearity (highly correlated features).

### 3.6 Limitations of PCA

*   **Linearity Assumption:** PCA is a linear technique and may not effectively capture non-linear relationships in the data.
*   **Interpretability:** The principal components are linear combinations of original features, which can sometimes make them difficult to interpret in terms of their original meaning.
*   **Sensitive to Scaling:** PCA is sensitive to the scale of the features, hence standardization is crucial.
*   **Information Loss:** By reducing dimensions, some information is inevitably lost. The goal is to minimize the loss of *important* information.

## 4. Other Dimensionality Reduction Techniques (Brief Mention)

While PCA is a cornerstone, other methods are also important:

*   **Linear Discriminant Analysis (LDA):** A supervised dimensionality reduction technique that aims to maximize the separation between classes while minimizing the variance within each class. It's particularly useful for classification problems.
    *   *Reference:* Covered in advanced machine learning and pattern recognition texts.
*   **t-Distributed Stochastic Neighbor Embedding (t-SNE):** A non-linear dimensionality reduction technique particularly well-suited for visualizing high-dimensional datasets in a low-dimensional space (typically 2D or 3D). It focuses on preserving local structure, meaning similar data points in high dimensions will be close together in the low-dimensional embedding.
    *   *Reference:* **Hands-on Machine Learning with Scikit-Learn, Keras, and TensorFlow** might cover advanced visualization techniques.
*   **Autoencoders:** Neural network architectures that learn to compress and then reconstruct data. The bottleneck layer in an autoencoder effectively learns a lower-dimensional representation of the input data.
    *   *Reference:* **Hands-on Machine Learning with Scikit-Learn, Keras, and TensorFlow** provides excellent coverage of neural networks and autoencoders.

## 5. Connection to Course Outcomes

*   **CO1 (Apply ML algorithms):** Dimensionality reduction is a preprocessing step for many ML algorithms, improving their efficiency and performance.
*   **CO2 (Apply advanced math concepts):** PCA heavily relies on matrix operations, eigenvalues, and eigenvectors, directly aligning with this outcome. SVD is also a core linear algebra concept relevant here.
*   **CO3 (Analyze and interpret data):** Dimensionality reduction helps in analyzing and interpreting data by reducing complexity and enabling visualization. Understanding variance explained by components aids interpretation.
*   **CO4 (Integrate statistical and ML techniques):** Dimensionality reduction techniques like PCA are statistical methods that are integral to building practical ML solutions.

## 6. Key Points to Remember

*   Dimensionality reduction aims to reduce the number of features while preserving essential information.
*   The "curse of dimensionality" motivates the need for these techniques.
*   Feature selection keeps original features, while feature extraction creates new ones.
*   Linear algebra, especially eigenvalues, eigenvectors, covariance matrices, and SVD, is fundamental to linear feature extraction methods like PCA.
*   PCA finds principal components that capture maximum variance in the data.
*   Standardization is crucial before applying PCA.
*   While powerful, PCA has limitations, especially with non-linear data.

---

## Practice Questions

**Question 1:**
What is the primary goal of dimensionality reduction?
a) To increase the number of features for better model performance.
b) To reduce the number of features while retaining important information.
c) To introduce more noise into the dataset.
d) To perform feature selection only.

**Question 2:**
Which of the following is a key linear algebra concept that forms the basis of Principal Component Analysis (PCA)?
a) Determinants
b) Eigenvalues and Eigenvectors
c) Vector Cross Product
d) Matrix Inversion

**Question 3:**
If you have a dataset with 100 features and you apply PCA to reduce it to 10 components, what does each of these 10 components represent?
a) One of the original features.
b) A linear combination of the original features that captures a significant portion of the data's variance.
c) A random subset of the original features.
d) A non-linear transformation of the original features.

**Question 4:**
Why is it important to standardize data before applying PCA?
a) To increase the number of data points.
b) To ensure that features with larger scales do not disproportionately influence the principal components.
c) To reduce the computational complexity of PCA.
d) To introduce correlations between features.

**Question 5:**
Briefly explain the difference between feature selection and feature extraction.

---

## Answers

**Answer 1:**
b) To reduce the number of features while retaining important information.

**Answer 2:**
b) Eigenvalues and Eigenvectors

**Answer 3:**
b) A linear combination of the original features that captures a significant portion of the data's variance.

**Answer 4:**
b) To ensure that features with larger scales do not disproportionately influence the principal components.

**Answer 5:**
*   **Feature Selection:** Involves choosing a subset of the most relevant original features and discarding the rest. The selected features are unchanged.
*   **Feature Extraction:** Involves transforming the original features into a new, smaller set of features. These new features are often combinations of the original ones and may not directly correspond to any single original feature.

---
This study material has been compiled referencing concepts from:
*   **Introduction to Linear Algebra by Gilbert Strang** (for foundational linear algebra concepts like eigenvectors, eigenvalues, and SVD).
*   **Hands-on Machine Learning with Scikit-Learn, Keras, and TensorFlow by Aurélien Géron** (for practical implementation details of PCA and other techniques).
*   **Mathematics for Machine Learning by Deisenroth, Faisal, and Ong** (for a deeper mathematical understanding of concepts applied in machine learning, including dimensionality reduction).
*   **Fundamentals of mathematical statistics by Gupta, S. C., and V. K. Kapoor** (for statistical underpinnings of variance and covariance).

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=p_di4ateumM) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=Kb3K1Ui4454) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=IYdiKeQ9xME) |
