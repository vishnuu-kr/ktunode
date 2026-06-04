---
title: "Dimensionality reduction technique"
subject: "INTRODUCTION TO ARTIFICIAL INTELLIGENCE AND DATA 
SCIENCE"
module: "Module 2: Mathematical Foundations of AI and Data science : Role of linear algebra in Data representation and analysis"
branch: "Electronics and Communication Engineering"
semester: 3
topicId: "68a5c45db09ce205780fe34b"
status: "completed"
scrapedAt: "2026-05-23T17:45:48.024Z"
---
# Module 2: Mathematical Foundations of AI and Data Science - Dimensionality Reduction Techniques

## Introduction to Dimensionality Reduction

**What is Dimensionality?**

In the context of data science and AI, **dimensionality** refers to the number of features or attributes in a dataset. A dataset with many features is considered high-dimensional.

**Why Reduce Dimensionality?**

High-dimensional datasets often present several challenges:

*   **The Curse of Dimensionality:** As the number of dimensions increases, the volume of the feature space grows exponentially. This leads to data becoming sparse, making it harder for algorithms to find meaningful patterns and increasing the risk of overfitting.
*   **Increased Computational Cost:** More dimensions mean more computations, leading to slower training times for machine learning models.
*   **Redundancy and Noise:** Many features in a high-dimensional dataset might be redundant (highly correlated) or contain noise, which can negatively impact model performance.
*   **Visualization:** It's impossible to visualize data beyond three dimensions, making it difficult to understand data structure and relationships.

**Dimensionality Reduction** is the process of transforming data from a high-dimensional space into a lower-dimensional space while preserving as much of the essential information as possible.

---

## Key Concepts and Definitions

*   **Features/Attributes:** Individual measurable properties or characteristics of a phenomenon being observed.
*   **Data Point/Observation:** A single instance or record in a dataset, characterized by its feature values.
*   **Feature Space:** The multi-dimensional space where each dimension corresponds to a feature.
*   **Overfitting:** A phenomenon where a machine learning model learns the training data too well, including its noise and fluctuations, leading to poor generalization to unseen data.
*   **Sparsity:** In high-dimensional spaces, data points become increasingly distant from each other, making the space appear "empty" or sparse.
*   **Redundancy:** When features are highly correlated, they provide similar information, leading to inefficiency.
*   **Noise:** Random errors or irrelevant variations in data that can obscure underlying patterns.

---

## Types of Dimensionality Reduction Techniques

Dimensionality reduction techniques can be broadly categorized into two main types:

### 1. Feature Selection

**Definition:** Feature selection involves choosing a subset of the original features that are most relevant to the problem at hand, discarding the rest. It aims to select the most informative features without transforming them.

**Methods:**

*   **Filter Methods:**
    *   **Description:** These methods use statistical measures to score and rank features based on their relevance to the target variable, independent of any specific machine learning model.
    *   **Examples:**
        *   **Correlation Coefficient:** Measures the linear relationship between two variables. Features highly correlated with the target variable are kept. (Refer to Gupta & Kapoor, Fundamentals of Mathematical Statistics for statistical measures).
        *   **Chi-Squared Test:** Used for categorical features to determine if there's a significant association between the feature and the target variable.
        *   **Information Gain:** Measures the reduction in entropy (uncertainty) of the target variable when a particular feature is known.
    *   **Pros:** Computationally efficient, model-agnostic.
    *   **Cons:** May not capture feature interactions; might select redundant features.

*   **Wrapper Methods:**
    *   **Description:** These methods use a specific machine learning model to evaluate the quality of feature subsets. They train the model with different feature subsets and select the subset that yields the best performance.
    *   **Examples:**
        *   **Forward Selection:** Starts with an empty set of features and iteratively adds the feature that most improves model performance.
        *   **Backward Elimination:** Starts with all features and iteratively removes the feature whose removal least degrades model performance.
        *   **Recursive Feature Elimination (RFE):** Repeatedly removes the least important features based on model coefficients or feature importances. (Refer to Géron, Hands-on Machine Learning with Scikit-Learn, Keras, and TensorFlow for practical implementation examples).
    *   **Pros:** Can capture feature interactions and find feature subsets that are optimal for a specific model.
    *   **Cons:** Computationally expensive due to repeated model training.

*   **Embedded Methods:**
    *   **Description:** These methods perform feature selection as part of the model training process. The model inherently selects important features.
    *   **Examples:**
        *   **Lasso Regression (L1 Regularization):** Adds a penalty proportional to the absolute value of the coefficients. This can drive some coefficients to zero, effectively performing feature selection. (Refer to Deisenroth, Faisal, & Ong, Mathematics for Machine Learning for regularization concepts).
        *   **Ridge Regression (L2 Regularization):** Adds a penalty proportional to the square of the coefficients. While it shrinks coefficients, it rarely drives them to zero, so it's less of a direct feature selection method than Lasso.
        *   **Tree-based Methods (e.g., Random Forests, Gradient Boosting):** Naturally provide feature importance scores, which can be used to select features.
    *   **Pros:** More efficient than wrapper methods; considers feature interactions.
    *   **Cons:** Feature selection is tied to the specific model.

### 2. Feature Extraction

**Definition:** Feature extraction creates new, lower-dimensional features by combining or transforming the original features. These new features are often linear or non-linear combinations of the original ones.

**Methods:**

*   **Principal Component Analysis (PCA)**
    *   **Description:** PCA is a linear dimensionality reduction technique that aims to find a new set of orthogonal (uncorrelated) features called **principal components**. These components are ordered such that the first component captures the most variance in the data, the second captures the next most variance, and so on.
    *   **Mathematical Foundation:** PCA relies heavily on **linear algebra**, specifically **eigenvalue decomposition** or **Singular Value Decomposition (SVD)** of the covariance matrix of the data.
        *   **Covariance Matrix:** A matrix that shows the covariance between pairs of features. It indicates how features vary together.
        *   **Eigenvectors:** Directions in the feature space that capture the maximum variance. These become the new principal components.
        *   **Eigenvalues:** The magnitude of variance captured by the corresponding eigenvectors.
    *   **Steps:**
        1.  **Standardize the Data:** Center the data by subtracting the mean of each feature and scale it by dividing by the standard deviation. This ensures that features with larger scales don't dominate the analysis.
        2.  **Compute the Covariance Matrix:** Calculate the covariance matrix of the standardized data.
        3.  **Compute Eigenvalues and Eigenvectors:** Calculate the eigenvalues and eigenvectors of the covariance matrix.
        4.  **Sort Eigenvectors by Eigenvalues:** Sort the eigenvectors in descending order of their corresponding eigenvalues.
        5.  **Select Top K Eigenvectors:** Choose the top *k* eigenvectors that capture a desired amount of variance (e.g., 95% of the total variance). These *k* eigenvectors form the new, lower-dimensional subspace.
        6.  **Transform the Data:** Project the original standardized data onto the subspace spanned by the selected *k* eigenvectors.
    *   **Learning Outcome Alignment:** Directly addresses **CO2** by applying matrix operations, singular values (related to eigenvalues), and PCA.
    *   **Textbook References:**
        *   **Strang, Introduction to Linear Algebra:** Discusses eigenvalues, eigenvectors, and matrix decompositions, which are fundamental to PCA.
        *   **Deisenroth, Faisal, & Ong, Mathematics for Machine Learning:** Provides a detailed mathematical explanation of PCA and its applications.
        *   **Géron, Hands-on Machine Learning:** Offers practical implementation of PCA using Scikit-Learn and explains its use in machine learning pipelines.
    *   **Example:** Imagine a dataset with two features, height and weight. PCA might find a new component that represents "body size" by combining height and weight linearly, capturing more variance than either feature alone.
    *   **Pros:** Effective for reducing noise and redundancy, finds uncorrelated features, can be used for visualization.
    *   **Cons:** Linear transformation; may lose interpretability of the original features; sensitive to scaling.

*   **Linear Discriminant Analysis (LDA)**
    *   **Description:** LDA is a **supervised** dimensionality reduction technique that aims to find a lower-dimensional subspace that maximizes the separability between classes. Unlike PCA, which focuses on preserving variance, LDA focuses on maximizing the ratio of between-class variance to within-class variance.
    *   **Mathematical Foundation:** Involves calculating scatter matrices (within-class and between-class scatter matrices) and finding the directions (linear discriminants) that best separate the classes. This involves solving a generalized eigenvalue problem.
    *   **Learning Outcome Alignment:** Aligns with **CO2** and **CO3** by using mathematical concepts to analyze and solve problems, and **CO4** by integrating statistical and machine learning techniques.
    *   **Textbook References:**
        *   **Gupta & Kapoor, Fundamentals of Mathematical Statistics:** Covers concepts of hypothesis testing and statistical inference, which are related to class separability.
        *   **Deisenroth, Faisal, & Ong, Mathematics for Machine Learning:** Explains the mathematical formulation of LDA.
    *   **Example:** In a classification problem with two classes (e.g., images of cats and dogs), LDA would find directions in the feature space that best separate the cat images from the dog images.
    *   **Pros:** Effective for classification tasks, can improve class separability.
    *   **Cons:** Supervised method (requires labeled data); assumes features are normally distributed and have equal covariance matrices across classes.

*   **t-Distributed Stochastic Neighbor Embedding (t-SNE)**
    *   **Description:** t-SNE is a non-linear dimensionality reduction technique primarily used for **visualization** of high-dimensional data in a 2D or 3D space. It works by modeling the similarity between data points in the high-dimensional space as conditional probabilities and then minimizing the divergence between these probabilities and the probabilities in the low-dimensional space. It excels at revealing local structure and clusters in the data.
    *   **Mathematical Foundation:** Based on probability distributions and minimizing Kullback-Leibler (KL) divergence. It converts high-dimensional Euclidean distances into conditional probabilities that represent similarities.
    *   **Learning Outcome Alignment:** Primarily supports **CO3** by enabling data interpretation and visualization.
    *   **Textbook References:**
        *   **Cielen, Meysman, & Meysman, Introducing Data Science:** Provides an overview of data visualization techniques, where t-SNE is commonly used.
        *   **Géron, Hands-on Machine Learning:** May touch upon visualization techniques and their importance in understanding data.
    *   **Example:** Visualizing a large dataset of handwritten digits, t-SNE can reveal distinct clusters for each digit (0s, 1s, 2s, etc.) by mapping them to a 2D plot.
    *   **Pros:** Excellent for visualizing complex datasets and revealing clusters.
    *   **Cons:** Computationally intensive; results can vary with different random initializations; primarily for visualization, not as a pre-processing step for other models.

*   **Autoencoders**
    *   **Description:** Autoencoders are a type of artificial neural network used for unsupervised learning. They are trained to reconstruct their input, meaning the output of the network should be as close as possible to the input. They consist of an **encoder** that maps the input to a lower-dimensional latent representation (the "bottleneck") and a **decoder** that reconstructs the input from this representation. The latent representation is the dimensionality-reduced version of the data.
    *   **Mathematical Foundation:** Relies on neural network architectures and optimization techniques (backpropagation). The encoder and decoder are typically composed of layers of non-linear transformations.
    *   **Learning Outcome Alignment:** Directly supports **CO1** by applying neural networks, and indirectly **CO2** and **CO4** by using them for data analysis and feature extraction.
    *   **Textbook References:**
        *   **Géron, Hands-on Machine Learning:** Provides in-depth coverage of neural networks, including autoencoders, and their practical applications.
        *   **Deisenroth, Faisal, & Ong, Mathematics for Machine Learning:** May cover foundational concepts of neural networks and their mathematical underpinnings.
    *   **Example:** An autoencoder trained on images of faces can learn a compact representation of facial features in the latent space.
    *   **Pros:** Can learn complex non-linear relationships; flexible architecture.
    *   **Cons:** Requires more data and computational resources than linear methods; can be more complex to tune.

---

## Role of Linear Algebra in Data Representation and Analysis (Revisited)

Linear algebra is the backbone of many dimensionality reduction techniques, particularly feature extraction methods.

*   **Data Representation:**
    *   **Vectors:** Individual data points are often represented as vectors in a multi-dimensional space.
    *   **Matrices:** A dataset with *n* data points and *d* features can be represented as an *n x d* matrix. Each row is a data point (vector), and each column is a feature (vector).
    *   **Subspaces:** Dimensionality reduction techniques essentially transform data into a lower-dimensional subspace, which can be defined by a set of basis vectors.

*   **Data Analysis with Linear Algebra:**
    *   **Covariance Matrix (PCA):** Understanding the relationship between features and their variance.
    *   **Eigen Decomposition/SVD:** Essential for finding the principal components in PCA and understanding the underlying structure of the data's variance.
    *   **Matrix Multiplication:** Used extensively to project data onto new subspaces and transform data.
    *   **Vector Spaces:** The concept of vector spaces and subspaces is crucial for understanding where data resides and how it's transformed.

---

## Importance of Dimensionality Reduction in AI and Data Science

*   **Improved Model Performance:** By reducing noise and redundancy, dimensionality reduction can lead to more robust and accurate models.
*   **Faster Training Times:** Fewer dimensions mean fewer computations, significantly speeding up model training.
*   **Reduced Storage Space:** Lower-dimensional data requires less memory.
*   **Better Visualization and Interpretation:** Facilitates understanding of complex datasets.
*   **Mitigating the Curse of Dimensionality:** Helps overcome the challenges associated with high-dimensional data.

---

## Important Points to Remember

*   **Feature Selection vs. Feature Extraction:** Understand the fundamental difference: selecting original features versus creating new ones.
*   **Linear vs. Non-linear:** Recognize which techniques are linear (PCA, LDA) and which are non-linear (t-SNE, Autoencoders).
*   **Supervised vs. Unsupervised:** Identify whether a technique requires labeled data (LDA) or can work with unlabeled data (PCA, t-SNE, Autoencoders).
*   **Purpose:** Consider the goal: visualization (t-SNE), general dimensionality reduction (PCA), or improving classification (LDA).
*   **Trade-offs:** Dimensionality reduction often involves a trade-off between data compression and information loss.
*   **Scaling:** For PCA, standardizing data is crucial.

---

## Practice Questions

**Question 1:**
Which of the following is a **supervised** dimensionality reduction technique?
a) Principal Component Analysis (PCA)
b) Linear Discriminant Analysis (LDA)
c) t-Distributed Stochastic Neighbor Embedding (t-SNE)
d) Autoencoders

**Question 2:**
The "Curse of Dimensionality" refers to:
a) The fact that high-dimensional data is always easy to visualize.
b) The exponential increase in data sparsity and computational complexity as dimensions increase.
c) The tendency of machine learning models to always overfit high-dimensional data.
d) The ease of finding meaningful patterns in high-dimensional data.

**Question 3:**
PCA aims to find new features that:
a) Maximize the separability between classes.
b) Preserve the most variance in the data.
c) Reduce the error in predicting a target variable.
d) Are created using non-linear transformations.

**Question 4:**
Which technique is primarily used for **visualizing** high-dimensional data by preserving local structure?
a) PCA
b) LDA
c) t-SNE
d) Lasso Regression

**Question 5:**
Explain the role of the covariance matrix in Principal Component Analysis (PCA).

---

## Answers to Practice Questions

**Answer 1:**
b) Linear Discriminant Analysis (LDA)
*   **Explanation:** LDA requires labeled data (classes) to find directions that maximize class separability, making it a supervised technique. PCA, t-SNE, and Autoencoders (typically) are unsupervised.

**Answer 2:**
b) The exponential increase in data sparsity and computational complexity as dimensions increase.
*   **Explanation:** As dimensions grow, the volume of the space expands rapidly, making data points far apart and increasing computational demands for algorithms.

**Answer 3:**
b) Preserve the most variance in the data.
*   **Explanation:** PCA finds principal components that capture the maximum amount of variance in the dataset, thereby preserving the most information.

**Answer 4:**
c) t-SNE
*   **Explanation:** t-SNE is specifically designed for visualizing high-dimensional data in lower dimensions (usually 2D or 3D) and is known for revealing clusters and local structure.

**Answer 5:**
The covariance matrix in PCA is a square matrix that describes the variance of each feature and the covariance between pairs of features in the dataset. It quantizes how features vary together. The eigenvectors of the covariance matrix represent the directions of maximum variance in the data (the principal components), and the corresponding eigenvalues indicate the magnitude of variance along those directions. PCA uses these eigenvectors and eigenvalues to transform the data into a lower-dimensional space, prioritizing the components with the highest eigenvalues (largest variance). This process is fundamental to reducing dimensionality while retaining as much of the data's inherent variability as possible.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=p_di4ateumM) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=Kb3K1Ui4454) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=IYdiKeQ9xME) |
