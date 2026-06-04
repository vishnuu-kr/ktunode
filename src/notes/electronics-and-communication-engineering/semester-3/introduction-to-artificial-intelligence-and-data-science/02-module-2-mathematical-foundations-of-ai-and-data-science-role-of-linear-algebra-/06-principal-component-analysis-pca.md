---
title: "Principal Component Analysis (PCA)."
subject: "INTRODUCTION TO ARTIFICIAL INTELLIGENCE AND DATA 
SCIENCE"
module: "Module 2: Mathematical Foundations of AI and Data science : Role of linear algebra in Data representation and analysis"
branch: "Electronics and Communication Engineering"
semester: 3
topicId: "68a5c45db09ce205780fe34c"
status: "completed"
scrapedAt: "2026-05-23T17:45:48.898Z"
---
# Module 2: Mathematical Foundations of AI and Data Science - Role of Linear Algebra in Data Representation and Analysis

## Topic: Principal Component Analysis (PCA)

### 1. Introduction to PCA

Principal Component Analysis (PCA) is a powerful dimensionality reduction technique widely used in data science and machine learning. It aims to simplify complex datasets by transforming them into a new set of uncorrelated variables, known as principal components (PCs), while retaining as much of the original data's variance as possible.

**Key Concepts:**

*   **Dimensionality Reduction:** The process of reducing the number of features or variables in a dataset while preserving essential information.
*   **Variance:** A measure of how spread out the data is. PCA seeks to maximize the variance captured by the principal components.
*   **Uncorrelated Variables:** Variables whose relationship can be described by a linear model with a slope of zero. In PCA, the principal components are orthogonal (uncorrelated).
*   **Feature Extraction:** Creating new features (principal components) from the original features.

**Role of Linear Algebra in PCA:**

Linear algebra is fundamental to understanding and implementing PCA. It provides the mathematical framework for:

*   **Data Representation:** Representing data as matrices and vectors.
*   **Covariance Matrix:** Calculating the relationships between variables.
*   **Eigenvalues and Eigenvectors:** Identifying the directions of maximum variance and their corresponding importance.
*   **Orthogonal Transformations:** Rotating the data to align with the principal components.

**(Referenced from: Strang, G. (2023). *Introduction to Linear Algebra*. Chapter 7: Orthogonality, Chapter 8: The Singular Value Decomposition.)**

### 2. The Goal of PCA

The primary goal of PCA is to find a lower-dimensional representation of the data that captures most of the variability. This is achieved by identifying directions (principal components) in the data that have the highest variance.

**Objectives:**

*   **Reduce the number of features:** This can lead to faster model training, reduced memory requirements, and help mitigate the "curse of dimensionality."
*   **Remove noise:** Components with low variance often represent noise, which can be discarded.
*   **Improve interpretability:** Sometimes, the principal components can be more interpretable than the original features, although this is not always guaranteed.
*   **Data Visualization:** Projecting high-dimensional data into 2 or 3 dimensions for visual inspection.

**Example:**

Imagine a dataset with 100 features describing customer behavior. Many of these features might be highly correlated (e.g., "amount spent on coffee" and "frequency of coffee purchases"). PCA can help reduce these 100 features into, say, 5 principal components that capture the most significant patterns in customer behavior, making it easier to analyze and build models.

**(Referenced from: Deisenroth, Faisal, & Ong, (2020). *Mathematics for Machine Learning*. Chapter 11: Dimensionality Reduction.)**

### 3. Mathematical Steps of PCA

PCA involves a series of linear algebra operations:

**Step 1: Standardize the Data**

Before applying PCA, it's crucial to standardize the data. This involves centering the data (subtracting the mean of each feature) and scaling it (dividing by the standard deviation of each feature). This ensures that features with larger scales don't dominate the analysis.

*   **Centering:** $X_{centered} = X - \bar{X}$, where $\bar{X}$ is the mean of each feature.
*   **Scaling (if needed):** $X_{standardized} = \frac{X_{centered}}{std(X)}$

**(Referenced from: Géron, A. (2022). *Hands-On Machine Learning with Scikit-Learn, Keras, and TensorFlow*. Chapter 8: Dimensionality Reduction.)**

**Step 2: Compute the Covariance Matrix**

The covariance matrix captures the pairwise linear relationships between the features. For a dataset $X$ with $n$ samples and $d$ features, the covariance matrix $C$ is a $d \times d$ matrix.

$C = \frac{1}{n-1} X^T X$ (for standardized data)

Each element $C_{ij}$ represents the covariance between feature $i$ and feature $j$.

**Important Point:** The diagonal elements of the covariance matrix are the variances of each feature.

**(Referenced from: Gupta & Kapoor, (2020). *Fundamentals of Mathematical Statistics*. Chapter 10: Correlation and Regression.)**

**Step 3: Compute Eigenvalues and Eigenvectors of the Covariance Matrix**

This is the core of PCA. We find the eigenvalues and eigenvectors of the covariance matrix $C$.

*   **Eigenvectors:** These are the directions (vectors) in the feature space along which the data varies the most. They represent the principal components.
*   **Eigenvalues:** These indicate the magnitude of the variance along the corresponding eigenvectors. Larger eigenvalues correspond to principal components that capture more variance.

We solve the equation: $Cv = \lambda v$

where:
*   $C$ is the covariance matrix.
*   $v$ is an eigenvector.
*   $\lambda$ is the corresponding eigenvalue.

**(Referenced from: Strang, G. (2023). *Introduction to Linear Algebra*. Chapter 6: Matrix Factorizations.)**

**Step 4: Sort Eigenvectors by Eigenvalues**

Sort the eigenvectors in descending order based on their corresponding eigenvalues. The eigenvector with the largest eigenvalue is the first principal component (PC1), the eigenvector with the second largest eigenvalue is the second principal component (PC2), and so on.

**Step 5: Choose the Number of Principal Components**

Decide how many principal components to keep. This is often determined by:

*   **Explained Variance Ratio:** The proportion of the total variance explained by each principal component.
    *   Explained Variance Ratio for PC$_i$ = $\frac{\lambda_i}{\sum_{j=1}^{d} \lambda_j}$
*   **Scree Plot:** A plot of eigenvalues against the component number. The "elbow" of the plot often indicates a good cutoff point.
*   **Cumulative Explained Variance:** Summing the explained variance ratios until a desired threshold (e.g., 95%) is reached.

**(Referenced from: Cielen, Davy, & Meysman, (2016). *Introducing Data Science*. Chapter 4: Principal Component Analysis.)**

**Step 6: Form the Projection Matrix**

Create a projection matrix $W$ by stacking the selected eigenvectors (corresponding to the chosen number of principal components) as columns. If you choose $k$ principal components, $W$ will be a $d \times k$ matrix.

**Step 7: Project the Original Data onto the New Subspace**

Transform the original standardized data $X_{standardized}$ into the new lower-dimensional space by multiplying it with the projection matrix $W$.

$X_{projected} = X_{standardized} W$

The resulting $X_{projected}$ is the dataset with reduced dimensionality.

### 4. The Mathematics Behind PCA: Eigenvalue Decomposition and SVD

PCA is deeply connected to two fundamental concepts in linear algebra: Eigenvalue Decomposition (EVD) and Singular Value Decomposition (SVD).

#### 4.1 Eigenvalue Decomposition (EVD)

If the covariance matrix $C$ is symmetric and positive semi-definite (which it is), it can be decomposed as:

$C = V \Lambda V^T$

where:
*   $V$ is an orthogonal matrix whose columns are the eigenvectors of $C$.
*   $\Lambda$ is a diagonal matrix with the eigenvalues of $C$ on the diagonal.

The projection onto the principal components can be seen as a transformation using the eigenvector matrix.

**(Referenced from: Strang, G. (2023). *Introduction to Linear Algebra*. Chapter 7: Orthogonality.)**

#### 4.2 Singular Value Decomposition (SVD)

SVD is a more general matrix factorization that can be applied to any $m \times n$ matrix $A$. It decomposes $A$ into three matrices:

$A = U \Sigma V^T$

where:
*   $U$ is an $m \times m$ orthogonal matrix (left singular vectors).
*   $\Sigma$ is an $m \times n$ diagonal matrix with non-negative singular values on the diagonal, sorted in descending order.
*   $V$ is an $n \times n$ orthogonal matrix (right singular vectors).

**Connection to PCA:**

If you have a data matrix $X$ (samples x features), and you center it, then the covariance matrix is $C = \frac{1}{n-1} X^T X$.
The SVD of $X$ is $X = U \Sigma V^T$.
Then, $X^T X = (U \Sigma V^T)^T (U \Sigma V^T) = V \Sigma^T U^T U \Sigma V^T = V (\Sigma^T \Sigma) V^T$.

Comparing $C = \frac{1}{n-1} V (\Sigma^T \Sigma) V^T$ with $C = V \Lambda V^T$, we see that:
*   The columns of $V$ are the eigenvectors of $C$.
*   The eigenvalues of $C$ are $\lambda_i = \frac{\sigma_i^2}{n-1}$, where $\sigma_i$ are the singular values.
*   The principal components are the columns of $V$.

**SVD is often preferred for PCA because:**

*   It is numerically more stable, especially for ill-conditioned matrices.
*   It can be applied directly to the data matrix without explicitly forming the covariance matrix.

**(Referenced from: Strang, G. (2023). *Introduction to Linear Algebra*. Chapter 8: The Singular Value Decomposition.)**
**(Referenced from: Deisenroth, Faisal, & Ong, (2020). *Mathematics for Machine Learning*. Chapter 11: Dimensionality Reduction.)**

### 5. Applications of PCA

PCA has numerous applications across various fields:

*   **Image Compression:** Reducing the storage space needed for images by representing them with fewer principal components.
*   **Noise Reduction:** Removing noisy features from datasets in signal processing and computer vision.
*   **Feature Extraction for Machine Learning:** Creating a smaller set of features for use in supervised learning algorithms (e.g., classification, regression) to improve performance and reduce training time.
*   **Data Visualization:** Visualizing high-dimensional data in 2D or 3D plots.
*   **Genomics:** Analyzing large gene expression datasets.
*   **Finance:** Portfolio optimization and risk management.

**(Referenced from: Géron, A. (2022). *Hands-On Machine Learning with Scikit-Learn, Keras, and TensorFlow*. Chapter 8: Dimensionality Reduction.)**
**(Referenced from: Cielen, Davy, & Meysman, (2016). *Introducing Data Science*. Chapter 4: Principal Component Analysis.)**

**Example (Image Compression):**

An image can be represented as a matrix of pixel values. By applying PCA to this matrix, we can identify the most important patterns in the image. By keeping only the principal components that capture the majority of the image's variance, we can reconstruct an approximation of the original image with fewer data points, thus compressing it.

### 6. Advantages and Disadvantages of PCA

**Advantages:**

*   **Simplicity and Efficiency:** Easy to implement and computationally efficient for dimensionality reduction.
*   **Noise Reduction:** Effectively removes noise from data by discarding components with low variance.
*   **Improved Model Performance:** Can improve the performance of machine learning models by reducing dimensionality and multicollinearity.
*   **Data Visualization:** Facilitates visualization of high-dimensional data.

**Disadvantages:**

*   **Loss of Information:** By reducing dimensions, some information is inevitably lost. The goal is to minimize this loss.
*   **Sensitivity to Feature Scaling:** PCA is sensitive to the scale of the features; hence, standardization is crucial.
*   **Interpretability:** The resulting principal components are linear combinations of the original features and may not always have a clear or intuitive interpretation.
*   **Assumes Linearity:** PCA assumes linear relationships between features. It may not perform well on datasets with highly non-linear structures.
*   **Noisy Components Might Be Kept:** If noise is spread across many components, PCA might retain some of it if those components also capture significant variance.

**(Referenced from: Géron, A. (2022). *Hands-On Machine Learning with Scikit-Learn, Keras, and TensorFlow*. Chapter 8: Dimensionality Reduction.)**

### 7. Practical Implementation (using Python libraries like Scikit-learn)

```python
import numpy as np
from sklearn.decomposition import PCA
from sklearn.preprocessing import StandardScaler
import matplotlib.pyplot as plt

# Sample Data (e.g., features related to customer behavior)
# Let's assume 50 samples and 5 features
np.random.seed(42)
data = np.random.rand(50, 5) * 10
# Adding some correlation to features
data[:, 1] = data[:, 0] * 0.8 + np.random.randn(50) * 1.5
data[:, 3] = data[:, 2] * 0.5 + np.random.randn(50) * 2

print("Original data shape:", data.shape)

# 1. Standardize the data
scaler = StandardScaler()
data_scaled = scaler.fit_transform(data)

# 2. Apply PCA
# Let's try to reduce to 2 components
pca = PCA(n_components=2)
principal_components = pca.fit_transform(data_scaled)

print("Reduced data shape:", principal_components.shape)

# Explained variance by each component
print("Explained variance ratio:", pca.explained_variance_ratio_)
print("Total explained variance:", np.sum(pca.explained_variance_ratio_))

# Visualize the reduced data (if n_components=2)
plt.figure(figsize=(8, 6))
plt.scatter(principal_components[:, 0], principal_components[:, 1])
plt.xlabel('Principal Component 1')
plt.ylabel('Principal Component 2')
plt.title('PCA of the Data')
plt.grid(True)
plt.show()

# To find the optimal number of components
pca_full = PCA() # No n_components specified, keeps all components
pca_full.fit(data_scaled)

plt.figure(figsize=(8, 6))
plt.plot(range(1, len(pca_full.explained_variance_ratio_) + 1), np.cumsum(pca_full.explained_variance_ratio_), marker='o')
plt.xlabel('Number of Components')
plt.ylabel('Cumulative Explained Variance Ratio')
plt.title('Scree Plot')
plt.grid(True)
plt.show()
```

### 8. Relation to Course Outcomes

*   **CO1: Apply the concept of machine learning algorithms including neural networks and supervised/unsupervised learning techniques for engineering applications.**
    *   PCA is an unsupervised learning technique used for dimensionality reduction, which is often a preprocessing step for supervised learning algorithms in engineering applications (e.g., predicting material properties, analyzing sensor data).
*   **CO2: Apply advanced mathematical concepts such as matrix operations, singular values, and principal component analysis to analyze and solve engineering problems.**
    *   This topic directly addresses CO2 by detailing the application of PCA, which relies heavily on eigenvalue decomposition and singular value decomposition of matrices. It's used to analyze and simplify complex engineering datasets.
*   **CO3: Analyze and interpret data using statistical methods including descriptive statistics, correlation, and regression analysis to derive meaningful insights and make informed decisions.**
    *   PCA builds upon understanding correlation (via the covariance matrix) and variance to extract meaningful components from data, aiding in data interpretation.
*   **CO4: Integrate statistical approaches and machine learning techniques to ensure practically feasible solutions in engineering contexts.**
    *   PCA is a prime example of integrating statistical principles (variance, covariance) with machine learning techniques (dimensionality reduction) to create more practical and efficient solutions for engineering problems.

### 9. Practice Questions and Answers

**Question 1:** What is the primary goal of Principal Component Analysis (PCA)?
    a) To increase the number of features in a dataset.
    b) To identify correlations between features.
    c) To reduce the dimensionality of a dataset while preserving maximum variance.
    d) To classify data into different categories.

**Question 2:** Which linear algebra concept is central to finding the directions of maximum variance in PCA?
    a) Matrix addition
    b) Eigenvectors and Eigenvalues
    c) Determinants
    d) Vector normalization

**Question 3:** Why is it important to standardize data before applying PCA?
    a) To increase the magnitude of all features.
    b) To ensure that features with larger scales do not disproportionately influence the principal components.
    c) To remove outliers from the dataset.
    d) To make the data normally distributed.

**Question 4:** If the explained variance ratio of the first principal component is 0.7 and the second is 0.2, what is the cumulative explained variance after the second component?
    a) 0.7
    b) 0.2
    c) 0.9
    d) 1.0

**Question 5:** How is the Singular Value Decomposition (SVD) related to PCA?
    a) SVD is not related to PCA.
    b) The right singular vectors of the data matrix are the principal components, and singular values are related to eigenvalues of the covariance matrix.
    c) The left singular vectors of the data matrix are the principal components.
    d) SVD is only used for data visualization.

---

**Answers:**

1.  **c) To reduce the dimensionality of a dataset while preserving maximum variance.**
2.  **b) Eigenvectors and Eigenvalues**
3.  **b) To ensure that features with larger scales do not disproportionately influence the principal components.**
4.  **c) 0.9** (0.7 + 0.2 = 0.9)
5.  **b) The right singular vectors of the data matrix are the principal components, and singular values are related to eigenvalues of the covariance matrix.**

### 10. Important Points to Remember

*   **Standardize your data** before applying PCA.
*   PCA aims to find **orthogonal directions of maximum variance**.
*   The **eigenvalues** of the covariance matrix determine the amount of variance explained by each **eigenvector (principal component)**.
*   **SVD is a more robust alternative** to explicitly calculating the covariance matrix and its eigenvalues/eigenvectors for PCA.
*   The choice of the number of components to retain is a trade-off between **dimensionality reduction and information loss**.
*   PCA is a **linear transformation** and may not be suitable for capturing highly non-linear relationships in data.

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=XZo4xyJXC2k) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=Kb3K1Ui4454) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=IYdiKeQ9xME) |
