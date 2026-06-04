---
title: "Dimensionality reduction - Principal Component Analysis"
subject: "MACHINE LEARNING"
module: "Module 4: Unsupervised Learning"
branch: "Computer Science and Engineering"
semester: 5
topicId: "684162760fc9aa1fdbc8b5d3"
status: "completed"
scrapedAt: "2026-05-20T16:46:50.598Z"
---
# MACHINE LEARNING - Module 4: Unsupervised Learning - Dimensionality Reduction - Principal Component Analysis (PCA)

## Introduction

This module covers Principal Component Analysis (PCA), a fundamental dimensionality reduction technique within the realm of unsupervised learning. PCA aims to reduce the number of variables in a dataset while retaining as much variance as possible. This is achieved by transforming the data into a new set of variables, called principal components, which are uncorrelated and ordered by the amount of variance they explain.

## Learning Outcomes

By the end of this topic, you should be able to:

1.  **Explain the concept of dimensionality reduction and its benefits.**
2.  **Describe the mathematical foundation of PCA, including eigenvectors and eigenvalues.**
3.  **Implement PCA using Python libraries (e.g., scikit-learn).**
4.  **Interpret the results of PCA, including explained variance ratio.**
5.  **Apply PCA to real-world datasets and understand its limitations.**

## 1. Dimensionality Reduction and its Benefits

*   **Definition:** Dimensionality reduction is the process of reducing the number of features (variables, dimensions) in a dataset while preserving its essential characteristics.

*   **Types:**
    *   **Feature Selection:** Selecting a subset of the original features. Examples: Filtering methods based on correlation, wrapper methods using a machine learning model for evaluation.
    *   **Feature Extraction:** Transforming the original features into a new set of features. PCA is a feature extraction method.

*   **Benefits of Dimensionality Reduction:**

    *   **Reduced Computational Cost:** Training models on datasets with fewer dimensions is faster and requires less memory.
    *   **Improved Model Performance:** High dimensionality can lead to overfitting (the curse of dimensionality). Reducing dimensions can improve generalization and reduce noise.
    *   **Enhanced Visualization:** Easier to visualize data in 2D or 3D when dimensionality is reduced.
    *   **Data Compression:** Reducing the number of features can lead to data compression, saving storage space.
    *   **Feature Engineering:**  PCA can help identify important underlying patterns and structures, leading to better feature engineering for subsequent modeling.
    *   **Multicollinearity Mitigation:** Addresses multicollinearity (high correlation between features) by creating uncorrelated principal components.

## 2. Mathematical Foundation of PCA

*   **Core Idea:** PCA finds a new set of orthogonal (uncorrelated) axes that capture the maximum variance in the data.  These axes are called Principal Components.

*   **Key Concepts:**

    *   **Variance:** A measure of how spread out the data is.  PCA aims to preserve the variance in the original data.
    *   **Covariance Matrix:** A matrix that describes the covariance between each pair of features in the dataset. The diagonal elements represent the variance of each feature.  PCA relies on calculating the covariance matrix of the data.
    *   **Eigenvectors:**  A vector that, when multiplied by a matrix, results in a scaled version of itself. In PCA, eigenvectors represent the direction of the principal components.  They are the axes along which the data has the most variance.
    *   **Eigenvalues:** The scaling factor associated with each eigenvector. In PCA, eigenvalues represent the amount of variance explained by the corresponding eigenvector (principal component).  Larger eigenvalues indicate more important components.
    *   **Orthogonality:** Principal components are orthogonal (perpendicular) to each other, meaning they are uncorrelated. This eliminates redundancy in the reduced data.

*   **Steps in PCA (Mathematics):**

    1.  **Standardize the data:**  Scale each feature to have zero mean and unit variance.  This is crucial because PCA is sensitive to the scale of the features.
    2.  **Calculate the Covariance Matrix:** Calculate the covariance matrix of the standardized data.
    3.  **Calculate the Eigenvectors and Eigenvalues:** Compute the eigenvectors and eigenvalues of the covariance matrix.
    4.  **Sort Eigenvalues and Corresponding Eigenvectors:** Sort the eigenvalues in descending order. This ranks the principal components by the amount of variance they explain. Keep track of the corresponding eigenvectors.
    5.  **Select Principal Components:** Choose the top *k* eigenvectors corresponding to the *k* largest eigenvalues.  *k* is the desired number of dimensions after reduction.
    6.  **Create the Projection Matrix (Feature Vector):**  Form a matrix (the feature vector) with the selected eigenvectors as columns.
    7.  **Transform the Data:** Multiply the standardized original data by the feature vector to obtain the transformed data in the new, lower-dimensional space.

*   **Explained Variance Ratio:**
    *   **Definition:** For each principal component, the explained variance ratio is the percentage of the total variance in the data that is explained by that component.
    *   **Calculation:**  (Eigenvalue of component i) / (Sum of all eigenvalues)
    *   **Importance:**  The explained variance ratio helps determine the optimal number of principal components to retain. A cumulative explained variance of, say, 95% is often used as a cutoff.

## 3. Implementing PCA using Python (Scikit-learn)

```python
import numpy as np
from sklearn.preprocessing import StandardScaler
from sklearn.decomposition import PCA
import matplotlib.pyplot as plt

# Sample Data (replace with your actual data)
data = np.array([[1, 2, 3],
                 [4, 5, 6],
                 [7, 8, 9],
                 [10, 11, 12]])

# 1. Standardize the Data
scaler = StandardScaler()
scaled_data = scaler.fit_transform(data)

# 2. Apply PCA
pca = PCA() # You can specify n_components if you know the desired reduced dimension
pca.fit(scaled_data)

# 3. Transform the Data
transformed_data = pca.transform(scaled_data)

# Print Results
print("Original Data:\n", data)
print("\nStandardized Data:\n", scaled_data)
print("\nTransformed Data (PCA):\n", transformed_data)
print("\nExplained Variance Ratio:", pca.explained_variance_ratio_)

# Plot Cumulative Explained Variance
cumulative_variance = np.cumsum(pca.explained_variance_ratio_)
plt.plot(range(1, len(cumulative_variance) + 1), cumulative_variance)
plt.xlabel("Number of Principal Components")
plt.ylabel("Cumulative Explained Variance")
plt.title("Cumulative Explained Variance vs. Number of Components")
plt.show()
```

**Explanation:**

1.  **Import Libraries:** Imports `numpy` for numerical operations, `StandardScaler` for data standardization, `PCA` for PCA implementation, and `matplotlib` for plotting.
2.  **Sample Data:** Creates a sample NumPy array as the input data.  Replace this with your actual dataset.
3.  **Standardize Data:** Uses `StandardScaler` to standardize the data, ensuring that each feature has zero mean and unit variance. This is crucial for PCA.
4.  **Apply PCA:**
    *   Creates a `PCA` object. You can specify the number of components using the `n_components` parameter. If not specified, PCA will retain all components.  For example, `pca = PCA(n_components=2)` would reduce to 2 components.
    *   `pca.fit(scaled_data)`: Computes the principal components from the standardized data.
5.  **Transform Data:** `pca.transform(scaled_data)`: Applies the dimensionality reduction to the data.
6.  **Print Results:** Prints the original, standardized, and transformed data. It also prints the explained variance ratio for each principal component.
7.  **Plot Cumulative Explained Variance:** Creates a plot showing the cumulative explained variance as a function of the number of principal components. This helps you choose the optimal number of components to retain.

## 4. Interpreting PCA Results

*   **Explained Variance Ratio:**
    *   The explained variance ratio tells you how much of the total variance in the data is explained by each principal component. The first principal component typically explains the most variance, followed by the second, and so on.
    *   Examine the explained variance ratio to decide how many principal components to keep. A good rule of thumb is to retain enough components to explain a significant percentage of the total variance (e.g., 90-95%).
    *   **Example:**  If `pca.explained_variance_ratio_` is `[0.8, 0.15, 0.05]`, then the first principal component explains 80% of the variance, the second explains 15%, and the third explains 5%.  Keeping only the first two components would explain 95% of the total variance.

*   **Loadings (Eigenvectors):**
    *   The eigenvectors are also known as *loadings*. They indicate the contribution of each original feature to each principal component.
    *   Analyze the loadings to understand which original features are most important for each principal component.  Large loadings (either positive or negative) indicate a strong relationship between the feature and the component.
    *   **Example:** Imagine a dataset with features "height", "weight", and "age".  If the first principal component has large positive loadings for "height" and "weight" and a small loading for "age", it suggests that this component primarily represents "body size".

## 5. Applying PCA to Real-World Datasets and its Limitations

*   **Applications:**

    *   **Image Compression:** Reduce the number of pixels needed to represent an image.
    *   **Noise Reduction:**  PCA can filter out noise in data by retaining only the most important principal components.
    *   **Face Recognition:**  Used to reduce the dimensionality of face images, making face recognition algorithms more efficient.  (Eigenfaces)
    *   **Finance:** Used for portfolio optimization, risk management, and fraud detection.
    *   **Bioinformatics:** Analyzing gene expression data.
    *   **Recommender Systems:** Reducing the dimensionality of user-item interaction data.

*   **Limitations:**

    *   **Linearity Assumption:** PCA assumes that the data can be adequately represented by linear combinations of the original features. If the data has highly non-linear relationships, PCA may not be effective. Other dimensionality reduction techniques like t-SNE or UMAP might be more suitable in such cases.
    *   **Scale Sensitivity:** PCA is sensitive to the scale of the features. It's important to standardize the data before applying PCA.
    *   **Interpretability:** While the principal components are ordered by variance, interpreting their meaning can be challenging, especially when the original features are highly correlated.
    *   **Variance as a Metric:** PCA focuses on maximizing variance, which may not always be the best criterion for preserving information relevant to a specific task (e.g., classification).  Sometimes, information is hidden in lower-variance dimensions.
    *   **Data Distribution:** Assumes data is approximately normally distributed.  Skewed data can affect performance.

## Practice Questions and Exercises

1.  **Question:** What are the main benefits of dimensionality reduction in machine learning?
    *   **Answer:** Reduced computational cost, improved model performance (less overfitting), enhanced visualization, data compression, feature engineering, and multicollinearity mitigation.

2.  **Question:** Explain the difference between feature selection and feature extraction.  Give an example of each.
    *   **Answer:** Feature selection involves choosing a subset of the original features, while feature extraction transforms the original features into a new set of features.  Example of feature selection: selecting the top *k* features based on their correlation with the target variable.  Example of feature extraction: PCA.

3.  **Question:** What do eigenvectors and eigenvalues represent in PCA?
    *   **Answer:** Eigenvectors represent the direction of the principal components (the axes along which the data has the most variance). Eigenvalues represent the amount of variance explained by each corresponding eigenvector (principal component).

4.  **Question:**  You perform PCA on a dataset and find that the first two principal components explain 90% of the variance. What does this mean, and why is it important?
    *   **Answer:** This means that the first two principal components capture 90% of the total variance in the data. This is important because you can reduce the dimensionality of the data to two dimensions while still retaining most of the important information. This can lead to significant computational savings and improved model performance.

5.  **Exercise:**  Using the Python code provided, change the `n_components` parameter in the `PCA` object to different values (e.g., 1, 2, 3).  Observe how the `transformed_data` and `explained_variance_ratio_` change. How does the plot of cumulative explained variance help you choose the right number of components?

6.  **Exercise:** Find a publicly available dataset (e.g., from UCI Machine Learning Repository or Kaggle) with a relatively high number of features. Apply PCA to the dataset and analyze the explained variance ratio. Determine the number of principal components needed to explain at least 95% of the variance.

## Important Points to Remember

*   **Standardization is crucial:** Always standardize your data before applying PCA.
*   **Explained variance ratio is your guide:** Use the explained variance ratio to determine the optimal number of principal components.
*   **PCA is a linear technique:** It may not be suitable for data with highly non-linear relationships.
*   **Interpret loadings carefully:** The loadings can provide insights into the meaning of the principal components.
*   **Balance variance with task relevance:** Sometimes, maximizing variance might not be the best criterion for a specific task. Consider the specific problem you are trying to solve when choosing the number of components.
