---
title: "Principal Component Analysis (PCA). (Text-1)"
subject: "INTRODUCTION TO ARTIFICIAL INTELLIGENCE AND DATA 
SCIENCE"
module: "Module 2: Mathematical Foundations of AI and Data science : Role of linear algebra in Data representation and analysis"
branch: "Electrical and Electronics Engineering"
semester: 3
topicId: "68a200842b85456187f35b98"
status: "completed"
scrapedAt: "2026-05-23T16:14:07.086Z"
---
# Module 2: Mathematical Foundations of AI and Data Science - Role of Linear Algebra in Data Representation and Analysis

## Topic: Principal Component Analysis (PCA)

### 1. Introduction to PCA

Principal Component Analysis (PCA) is a widely used dimensionality reduction technique in machine learning and data science. Its primary goal is to transform a dataset with many variables into a smaller set of variables, called principal components, while retaining most of the original data's variance. This is achieved by identifying the directions (principal components) in the data that capture the most variability.

**Key Concepts:**

*   **Dimensionality Reduction:** The process of reducing the number of random variables under consideration, by obtaining a set of principal variables. This is crucial for dealing with high-dimensional data, which can suffer from the "curse of dimensionality," leading to increased computational cost, overfitting, and difficulty in visualization.
*   **Variance:** A measure of how spread out a set of data is. In PCA, we aim to capture the directions with the maximum variance.
*   **Covariance:** A measure of how much two random variables change together. The covariance matrix summarizes the relationships between all pairs of variables in a dataset.
*   **Eigenvectors and Eigenvalues:** These are fundamental concepts in linear algebra that PCA heavily relies on.
    *   **Eigenvectors:** Non-zero vectors that, when a linear transformation is applied to them, only change by a scalar factor. In PCA, eigenvectors of the covariance matrix represent the directions of maximum variance in the data.
    *   **Eigenvalues:** The scalar factor by which an eigenvector is stretched or shrunk when a linear transformation is applied. In PCA, eigenvalues represent the magnitude of variance along the corresponding eigenvector. Larger eigenvalues indicate directions with more variance.

**Learning Outcome Alignment:**

*   **CO2:** Apply advanced mathematical concepts such as matrix operations, singular values, and principal component analysis to analyze and solve engineering problems.
    *   PCA directly addresses the application of principal component analysis for data analysis. The underlying mathematical concepts of eigenvectors and eigenvalues are central to its understanding.

**Textbook References:**

*   **Introduction to Linear Algebra by Gilbert Strang:** Chapter 11 discusses "Linear Algebra and Calculus," which includes eigenvalues and eigenvectors as core components. Section 11.3 specifically covers eigenvalues and eigenvectors.
*   **Mathematics for Machine Learning by Deisenroth, Faisal, and Ong:** Chapter 11, "Principal Component Analysis," provides a thorough mathematical treatment of PCA, including its derivation from singular value decomposition (SVD) and its connection to eigenvalues.

### 2. The Goal of PCA

The main objective of PCA is to find a new set of orthogonal (uncorrelated) variables, the principal components, which are linear combinations of the original variables. These principal components are ordered such that the first principal component captures the largest possible variance, the second principal component captures the second largest variance and is orthogonal to the first, and so on.

**Why use PCA?**

*   **Dimensionality Reduction:** To simplify datasets by reducing the number of features while preserving important information.
*   **Noise Reduction:** By discarding components with low variance, PCA can help to remove noise from the data.
*   **Data Visualization:** Reducing data to 2 or 3 principal components allows for easy visualization of high-dimensional data.
*   **Improved Model Performance:** In some cases, using a reduced set of features can lead to faster training and better generalization for machine learning models.
*   **Feature Extraction:** Creating new, more informative features from existing ones.

### 3. How PCA Works (The Mathematical Steps)

Let's consider a dataset with $n$ samples and $d$ features. The data can be represented as a matrix $X$ of size $n \times d$.

**Steps:**

1.  **Standardize the Data:**
    *   Calculate the mean and standard deviation for each feature.
    *   Subtract the mean from each feature and divide by the standard deviation. This ensures that all features are on a similar scale and that the analysis is not dominated by features with larger ranges.
    *   The standardized data matrix, let's call it $X_{std}$, has zero mean for each column.

2.  **Compute the Covariance Matrix:**
    *   The covariance matrix, denoted by $\Sigma$ or $C$, shows the variance of each feature and the covariance between each pair of features.
    *   For the standardized data $X_{std}$, the covariance matrix is calculated as:
        $$ \Sigma = \frac{1}{n-1} X_{std}^T X_{std} $$
    *   The covariance matrix is a $d \times d$ symmetric matrix.

3.  **Compute Eigenvectors and Eigenvalues of the Covariance Matrix:**
    *   Find the eigenvectors and eigenvalues of the covariance matrix $\Sigma$.
    *   Let $v_i$ be an eigenvector and $\lambda_i$ be its corresponding eigenvalue. The relationship is given by:
        $$ \Sigma v_i = \lambda_i v_i $$
    *   The eigenvectors represent the directions of maximum variance, and the eigenvalues represent the magnitude of variance along those directions.
    *   The eigenvectors are orthogonal to each other if they correspond to distinct eigenvalues.

4.  **Sort Eigenvectors by Eigenvalue:**
    *   Sort the eigenvalues in descending order ($\lambda_1 \ge \lambda_2 \ge \dots \ge \lambda_d$).
    *   Sort the corresponding eigenvectors in the same order. The eigenvector corresponding to the largest eigenvalue is the first principal component, and so on.

5.  **Choose the Number of Principal Components (k):**
    *   Decide how many principal components ($k$) you want to keep. This is often determined by:
        *   **Cumulative Variance Explained:** Selecting $k$ such that the sum of the first $k$ eigenvalues divided by the sum of all eigenvalues (total variance) exceeds a certain threshold (e.g., 95%).
        *   **Scree Plot:** Visualizing eigenvalues plotted against their component number. The "elbow" of the plot suggests a point where additional components contribute little additional variance.

6.  **Form the Projection Matrix (W):**
    *   Create a matrix $W$ of size $d \times k$ by stacking the top $k$ eigenvectors (as columns) corresponding to the $k$ largest eigenvalues.

7.  **Transform the Data:**
    *   Project the original (standardized) data onto the new subspace defined by the principal components:
        $$ X_{pca} = X_{std} W $$
    *   $X_{pca}$ is a new dataset of size $n \times k$, where $k < d$. Each column of $X_{pca}$ is a principal component.

**Example:**

Consider a dataset with two features, $x_1$ and $x_2$. If the covariance matrix has eigenvectors pointing along the diagonal and anti-diagonal, and the eigenvalues indicate that the diagonal direction has much higher variance, then the first principal component will align with the diagonal, capturing most of the data's spread. The second principal component will align with the anti-diagonal, capturing the remaining variance.

**Textbook References:**

*   **Introduction to Linear Algebra by Gilbert Strang:** Chapter 11.3 provides the foundational concepts of eigenvectors and eigenvalues, which are crucial for understanding the mathematical steps in PCA.
*   **Mathematics for Machine Learning by Deisenroth, Faisal, and Ong:** Chapter 11 details the step-by-step derivation and calculation of PCA.
*   **Fundamentals of Mathematical Statistics by Gupta, S. C., and V. K. Kapoor:** Chapter 14, "Theory of Estimation," might touch upon concepts like variance and covariance estimation, which are prerequisites. Chapter 18, "Multivariate Normal Distribution," is relevant as PCA is often applied to data assumed to be elliptically distributed.

### 4. PCA from the perspective of Singular Value Decomposition (SVD)

PCA can also be understood through Singular Value Decomposition (SVD) of the data matrix $X$.

Let $X$ be an $n \times d$ data matrix (centered by subtracting the mean of each column). SVD decomposes $X$ as:
$$ X = U \Sigma V^T $$
where:
*   $U$ is an $n \times n$ orthogonal matrix.
*   $\Sigma$ is an $n \times d$ diagonal matrix with non-negative singular values $\sigma_1 \ge \sigma_2 \ge \dots \ge \sigma_r$ on the diagonal (where $r = \text{rank}(X)$).
*   $V^T$ is a $d \times d$ orthogonal matrix, so $V$ is also orthogonal.

The covariance matrix is $C = \frac{1}{n-1} X^T X$.
Substituting the SVD of $X$:
$$ C = \frac{1}{n-1} (U \Sigma V^T)^T (U \Sigma V^T) $$
$$ C = \frac{1}{n-1} (V \Sigma^T U^T) (U \Sigma V^T) $$
Since $U^T U = I$ (identity matrix) and $\Sigma^T \Sigma$ is a $d \times d$ diagonal matrix where the diagonal elements are $\sigma_i^2$ (or 0 if $n<d$), and $\Sigma \Sigma^T$ is an $n \times n$ diagonal matrix:
$$ C = \frac{1}{n-1} V (\Sigma^T \Sigma) V^T $$
This is an eigenvalue decomposition of $C$.
*   The columns of $V$ are the eigenvectors of $C$.
*   The eigenvalues of $C$ are $\lambda_i = \frac{\sigma_i^2}{n-1}$.

The principal components are the linear combinations of the original variables, represented by the columns of $V$. The transformation to the principal component space is:
$$ X_{pca} = X V $$
$$ X_{pca} = (U \Sigma V^T) V $$
$$ X_{pca} = U \Sigma $$
The columns of $X_{pca}$ are the principal components, scaled by the singular values.

**Relationship:**
The principal components are the rows of $V^T$ (or columns of $V$). The variance explained by each principal component is proportional to the square of the corresponding singular value.

**Textbook References:**

*   **Introduction to Linear Algebra by Gilbert Strang:** Chapter 6, "Symmetric Matrices," and Chapter 11.3, "Eigenvalues and Eigenvectors," can be used to bridge the understanding between SVD and eigenvalue decomposition.
*   **Mathematics for Machine Learning by Deisenroth, Faisal, and Ong:** Section 11.4 explicitly shows the connection between PCA and SVD.

### 5. Practical Implementation and Usage (Scikit-learn)

In Python, the `scikit-learn` library provides a convenient `PCA` class.

```python
from sklearn.decomposition import PCA
from sklearn.preprocessing import StandardScaler
import numpy as np

# Sample Data (e.g., 5 samples, 4 features)
X = np.array([[1, 2, 3, 4],
              [5, 5, 6, 7],
              [8, 9, 10, 11],
              [2, 3, 4, 5],
              [6, 7, 8, 9]])

# 1. Standardize the Data
scaler = StandardScaler()
X_scaled = scaler.fit_transform(X)

# 2. Initialize PCA
# Let's say we want to reduce to 2 components
n_components = 2
pca = PCA(n_components=n_components)

# 3. Fit PCA on the scaled data and transform it
X_pca = pca.fit_transform(X_scaled)

print("Original Data Shape:", X.shape)
print("Transformed Data Shape:", X_pca.shape)
print("Transformed Data (Principal Components):\n", X_pca)

# Key attributes of the PCA object after fitting:
print("\nExplained Variance Ratio:", pca.explained_variance_ratio_)
# The percentage of variance explained by each selected component.

print("Singular Values:", pca.singular_values_)
# The singular values corresponding to the principal components.

print("Components (Eigenvectors):", pca.components_)
# The principal axes in feature space, representing the directions of maximum variance.
# Each row is a principal component.
```

**Textbook References:**

*   **Hands-on Machine Learning with Scikit-Learn, Keras, and TensorFlow by Aurélien Géron:** Chapter 8, "Dimensionality Reduction," covers PCA in detail with practical examples using scikit-learn.

### 6. Interpreting PCA Results

*   **Explained Variance Ratio:** This attribute of the `PCA` object in scikit-learn is crucial. It tells you the proportion of the dataset's variance that lies along each principal component.
    *   If `pca.explained_variance_ratio_ = [0.7, 0.2, 0.1]`, it means the first component explains 70% of the variance, the second explains 20%, and the third explains 10%.
    *   You can sum these ratios to determine how much total variance is captured by a chosen number of components.

*   **Components (Eigenvectors):** These represent the directions in the original feature space that the principal components align with.
    *   Each row of `pca.components_` is a principal component.
    *   The values in each row indicate how much each original feature contributes to that principal component. For instance, if the first principal component (row 0) has values `[0.5, 0.6, 0.4, 0.5]`, it means that original features 1, 2, 3, and 4 contribute to this component, with features 2 and 4 having slightly higher contributions.

**Learning Outcome Alignment:**

*   **CO3:** Analyze and interpret data using statistical methods including descriptive statistics, correlation, and regression analysis to derive meaningful insights and make informed decisions.
    *   Understanding the "explained variance ratio" is a form of data interpretation, allowing us to make informed decisions about the number of components to retain.

### 7. When to Use PCA and When Not To

**When to Use PCA:**

*   **High-Dimensional Data:** When dealing with datasets having a large number of features.
*   **Multicollinearity:** When features are highly correlated, PCA can create uncorrelated components.
*   **Noise Reduction:** When you suspect noise is present in features with low variance.
*   **Visualization:** To reduce dimensions to 2 or 3 for plotting.
*   **Feature Engineering:** To create new, potentially more informative features.
*   **Improving Model Performance:** When reducing dimensions can speed up training or prevent overfitting.

**When NOT to Use PCA (or use with caution):**

*   **Interpretable Features are Crucial:** PCA creates new, abstract components that are linear combinations of original features. If the interpretability of the original features is paramount, PCA might obscure this.
*   **Data is Not Linear:** PCA assumes linear relationships between variables. If the underlying structure of the data is highly non-linear, other dimensionality reduction techniques like t-SNE or UMAP might be more suitable.
*   **Features Have Very Different Scales and Meaning:** While standardization helps, if features have vastly different meanings and variance magnitudes are due to inherent properties rather than scale, PCA might still disproportionately weigh features.
*   **Outliers:** PCA can be sensitive to outliers as they can significantly affect the covariance matrix and thus the principal components.
*   **When Components Are Not Meaningful:** Sometimes, even the top principal components don't have a clear intuitive meaning related to the original data's problem.

**Course Outcome Alignment:**

*   **CO1:** Apply the concept of machine learning algorithms including neural networks and supervised/unsupervised learning techniques for engineering applications. (Knowledge Level: K3)
    *   Understanding when and why to apply PCA is part of applying ML techniques effectively.
*   **CO4:** Integrate statistical approaches and machine learning techniques to ensure practically feasible solutions in engineering contexts. (Knowledge Level: K3)
    *   Choosing PCA as part of a larger workflow to make a solution "practically feasible" (e.g., reducing computational cost) demonstrates this outcome.

**Textbook References:**

*   **Hands-on Machine Learning with Scikit-Learn, Keras, and TensorFlow by Aurélien Géron:** Discusses practical considerations and limitations of PCA.
*   **Introducing data science: big data, machine learning, and more, using Python tools by Cielen, Davy, and Arno Meysman:** Provides broader context on when dimensionality reduction is beneficial.

### 8. Practice Questions

**Question 1:**
What is the primary goal of Principal Component Analysis (PCA)?
(a) To increase the number of features in a dataset.
(b) To create new features that are independent of each other, capturing maximum variance.
(c) To identify the least important features and remove them.
(d) To transform data into a non-linear space.

**Question 2:**
Eigenvectors of the covariance matrix in PCA represent:
(a) The magnitude of variance along a direction.
(b) The directions of maximum variance in the data.
(c) The correlation between features.
(d) The distribution of a single feature.

**Question 3:**
If the first principal component explains 70% of the variance and the second explains 20%, how much variance is explained by the first two components combined?

**Question 4:**
Why is it generally recommended to standardize data before applying PCA?

**Question 5:**
Briefly explain the relationship between PCA and Singular Value Decomposition (SVD).

### 9. Answers to Practice Questions

**Answer 1:**
(b) To create new features that are independent of each other, capturing maximum variance.
*   **Explanation:** PCA aims to find new, uncorrelated components (principal components) that capture the maximum possible variance in the data.

**Answer 2:**
(b) The directions of maximum variance in the data.
*   **Explanation:** Eigenvectors of the covariance matrix point in the directions of maximum variance. The corresponding eigenvalues represent the magnitude of that variance.

**Answer 3:**
70% + 20% = 90%
*   **Explanation:** The explained variance ratios are additive for orthogonal components.

**Answer 4:**
It is recommended to standardize data before applying PCA to ensure that all features contribute equally to the analysis, regardless of their original scale or units. Features with larger scales can otherwise dominate the variance calculations, leading to biased principal components.

**Answer 5:**
Both PCA and SVD are closely related. PCA can be performed by computing the eigenvalue decomposition of the covariance matrix, or equivalently, by performing SVD on the data matrix. The right singular vectors of the data matrix (columns of V in $X = U \Sigma V^T$) are the principal components, and the variance explained by each component is related to the square of the corresponding singular values.

### 10. Important Points to Remember

*   **Goal:** Dimensionality reduction by capturing maximum variance.
*   **Core Math:** Eigenvectors and Eigenvalues of the Covariance Matrix.
*   **Steps:** Standardize -> Covariance Matrix -> Eigen Decomposition -> Sort -> Project.
*   **Interpretation:** Use `explained_variance_ratio_` to decide how many components to keep.
*   **SVD Connection:** Principal components are related to the right singular vectors of the data matrix.
*   **Pre-processing:** Standardization is crucial.
*   **Trade-offs:** PCA offers benefits like noise reduction and efficiency but can reduce interpretability.

This comprehensive set of notes covers the theoretical underpinnings and practical application of Principal Component Analysis, aligning with the specified learning and course outcomes.
