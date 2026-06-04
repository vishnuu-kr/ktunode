---
title: "Dimensionality reduction technique"
subject: "INTRODUCTION TO ARTIFICIAL INTELLIGENCE AND DATA 
SCIENCE"
module: "Module 2: Mathematical Foundations of AI and Data science : Role of linear algebra in Data representation and analysis"
branch: "Electrical and Electronics Engineering"
semester: 3
topicId: "68a200842b85456187f35b97"
status: "completed"
scrapedAt: "2026-05-23T16:14:06.351Z"
---
## Module 2: Mathematical Foundations of AI and Data Science - Role of Linear Algebra in Data Representation and Analysis

### Topic: Dimensionality Reduction Techniques

---

### 1. Introduction: The Curse of Dimensionality and the Need for Dimensionality Reduction

**1.1 What is Dimensionality?**

*   In the context of data science and AI, **dimensionality** refers to the number of features or variables used to describe a data point.
*   A dataset with many features is considered **high-dimensional**.
*   **Example:** Imagine a dataset of images. Each pixel in an image can be considered a feature. A high-resolution image will have thousands or even millions of pixels, leading to a very high-dimensional dataset.

**1.2 The Curse of Dimensionality**

*   As the number of dimensions increases, the volume of the feature space grows exponentially.
*   This leads to several problems:
    *   **Increased sparsity:** Data points become very spread out, making it difficult to find neighbors or patterns.
    *   **Computational cost:** Algorithms become computationally expensive and slow to train.
    *   **Overfitting:** Models are more prone to overfitting the training data, as they can find spurious correlations in the high-dimensional space.
    *   **Difficulty in visualization:** It's impossible to visualize data beyond three dimensions.
*   **Textbook Reference:** While not explicitly a "curse of dimensionality" section, **Gilbert Strang's "Introduction to Linear Algebra"** implicitly deals with the challenges of working with high-dimensional vector spaces. The concepts of basis, spanning sets, and the geometric interpretation of vectors become more abstract and harder to grasp intuitively in higher dimensions. **Aurélien Géron's "Hands-on machine learning"** often highlights practical challenges encountered with high-dimensional data in ML algorithms.

**1.3 What is Dimensionality Reduction?**

*   **Dimensionality Reduction** is the process of reducing the number of features (dimensions) in a dataset while retaining as much of the essential information as possible.
*   The goal is to create a lower-dimensional representation of the data that is easier to work with, more computationally efficient, and less prone to overfitting.

---

### 2. Types of Dimensionality Reduction Techniques

Dimensionality reduction techniques can be broadly categorized into two main types:

*   **Feature Selection:**
    *   Involves selecting a subset of the original features that are most relevant to the task.
    *   The original features are kept, but irrelevant or redundant ones are discarded.
    *   **Example:** If you have a dataset of customer information including age, income, purchase history, and zip code, and you're building a model to predict purchasing behavior, you might find that zip code is not a significant predictor and decide to remove it.
*   **Feature Extraction:**
    *   Involves creating new, lower-dimensional features by combining or transforming the original features.
    *   These new features are combinations of the original ones and are not directly interpretable as the original features.
    *   **Example:** Imagine a dataset with features `height` and `weight`. You might create a new feature called `BMI` (Body Mass Index) which is a function of both height and weight.

---

### 3. Feature Extraction Techniques (Leveraging Linear Algebra)

This section will focus on feature extraction techniques, as they directly utilize the linear algebra concepts discussed in this module.

#### 3.1 Principal Component Analysis (PCA)

**3.1.1 Core Concept:**

*   PCA is a linear dimensionality reduction technique that aims to find a new set of orthogonal (uncorrelated) variables, called **principal components (PCs)**, that capture the maximum variance in the data.
*   The first principal component captures the most variance, the second captures the second most variance (orthogonal to the first), and so on.
*   By keeping only the first few principal components, we can significantly reduce the dimensionality while preserving most of the data's variability.

**3.1.2 Mathematical Underpinnings (from Linear Algebra):**

*   **Covariance Matrix:** PCA relies heavily on the **covariance matrix** of the data. The covariance matrix ($\Sigma$) describes the relationships (variance and covariance) between different pairs of features.
    *   For a dataset $X$ with $n$ samples and $p$ features, the covariance matrix is a $p \times p$ matrix.
    *   The diagonal elements represent the variance of each feature.
    *   The off-diagonal elements represent the covariance between pairs of features.
    *   **Reference:** **Gupta & Kapoor's "Fundamentals of Mathematical Statistics"** provides a thorough explanation of covariance and covariance matrices. **Strang's "Introduction to Linear Algebra"** provides the foundational understanding of matrices, their properties, and operations.
*   **Eigenvectors and Eigenvalues:** The core of PCA involves finding the **eigenvectors** and **eigenvalues** of the covariance matrix.
    *   **Eigenvectors:** These are the directions of maximum variance in the data. In PCA, the eigenvectors of the covariance matrix correspond to the principal components. They are unit vectors.
    *   **Eigenvalues:** These represent the magnitude of the variance along the corresponding eigenvectors. A larger eigenvalue indicates that the corresponding eigenvector (principal component) captures more variance in the data.
    *   **Equation:** $ \Sigma v = \lambda v $, where $\Sigma$ is the covariance matrix, $v$ is an eigenvector, and $\lambda$ is the corresponding eigenvalue.
    *   **Reference:** **Strang's "Introduction to Linear Algebra"** is the definitive source for understanding eigenvectors and eigenvalues. **Deisenroth, Faisal, & Ong's "Mathematics for Machine Learning"** also dedicates significant sections to these concepts in the context of PCA.
*   **Orthogonality:** The eigenvectors of a covariance matrix are orthogonal to each other. This means the principal components are uncorrelated, which is a desirable property for many machine learning algorithms.
*   **Data Transformation:**
    1.  **Standardize the data:** Before applying PCA, it's crucial to standardize the data so that each feature has a mean of 0 and a standard deviation of 1. This prevents features with larger scales from dominating the principal components.
    2.  **Compute the covariance matrix** of the standardized data.
    3.  **Compute the eigenvectors and eigenvalues** of the covariance matrix.
    4.  **Sort the eigenvectors** in descending order of their corresponding eigenvalues.
    5.  **Select the top k eigenvectors** to form the new lower-dimensional subspace, where $k$ is the desired number of dimensions.
    6.  **Project the original data** onto this new subspace by multiplying the standardized data matrix by the matrix formed by the selected top $k$ eigenvectors.

**3.1.3 Example:**

Imagine a dataset with two features, `height` and `weight`. If `height` and `weight` are highly correlated (taller people tend to weigh more), PCA will likely find that the first principal component captures most of the variance along the direction of this correlation. The second principal component will capture the remaining variance, likely representing deviations from this general trend. If we reduce the dimensionality to 1, we are essentially summarizing the data by a single "size" dimension that combines height and weight.

**3.1.4 When to use PCA:**

*   When the features are correlated.
*   To reduce noise in the data.
*   To speed up machine learning algorithms by reducing the number of features.
*   For data visualization.

**3.1.5 Important Points to Remember about PCA:**

*   PCA is an **unsupervised** technique; it does not consider the target variable.
*   It assumes that directions with higher variance contain more information.
*   The principal components are linear combinations of the original features.
*   The interpretation of the new features (principal components) can be challenging.
*   PCA is sensitive to the scaling of the data.

---

#### 3.2 Singular Value Decomposition (SVD)

**3.2.1 Core Concept:**

*   SVD is a matrix factorization technique that decomposes any matrix $A$ into three other matrices: $A = U \Sigma V^T$.
*   SVD is a more general technique than PCA and can be applied to any matrix, not just square covariance matrices.
*   It reveals the underlying structure of the data by identifying orthogonal bases for the row and column spaces of the matrix.

**3.2.2 Mathematical Underpinnings (from Linear Algebra):**

*   **Matrix Factorization:** For any $m \times n$ matrix $A$, SVD decomposes it into:
    *   $U$: An $m \times m$ orthogonal matrix whose columns are the left singular vectors.
    *   $\Sigma$: An $m \times n$ rectangular diagonal matrix with non-negative real numbers on the diagonal, called singular values. These are typically sorted in descending order.
    *   $V^T$: The transpose of an $n \times n$ orthogonal matrix $V$, whose columns are the right singular vectors.
*   **Relationship with Eigen Decomposition:** If $A$ is a symmetric positive semi-definite matrix (like a covariance matrix), then its singular values are the square roots of its eigenvalues, and the left and right singular vectors correspond to its eigenvectors.
    *   $A^T A = (U \Sigma V^T)^T (U \Sigma V^T) = V \Sigma^T U^T U \Sigma V^T = V (\Sigma^T \Sigma) V^T$. This is the eigendecomposition of $A^T A$. The eigenvalues are $\sigma_i^2$ and the eigenvectors are the columns of $V$.
    *   $A A^T = (U \Sigma V^T) (U \Sigma V^T)^T = U \Sigma V^T V \Sigma^T U^T = U (\Sigma \Sigma^T) U^T$. This is the eigendecomposition of $A A^T$. The eigenvalues are $\sigma_i^2$ and the eigenvectors are the columns of $U$.
*   **Reference:** **Strang's "Introduction to Linear Algebra"** provides a detailed explanation of SVD and its applications. **Deisenroth, Faisal, & Ong's "Mathematics for Machine Learning"** also covers SVD extensively.
*   **Dimensionality Reduction using SVD:**
    1.  Apply SVD to the data matrix $X$ (where rows are samples and columns are features): $X = U \Sigma V^T$.
    2.  Truncate the matrices by keeping only the top $k$ singular values and their corresponding singular vectors. This means keeping the first $k$ columns of $U$, the top-left $k \times k$ submatrix of $\Sigma$, and the first $k$ columns of $V$.
    3.  The reduced-dimension representation of the data can be obtained by projecting the original data onto the new subspace defined by the top $k$ right singular vectors: $X_{reduced} = X V_k$, where $V_k$ consists of the first $k$ columns of $V$. Alternatively, $X_{reduced} = U_k \Sigma_k$.

**3.2.3 Example:**

Consider a document-term matrix where rows represent documents and columns represent words, with entries being the frequency of a word in a document. SVD can be used to find latent semantic relationships between documents and words. By keeping a few singular values, we can represent documents and words in a lower-dimensional "topic space," capturing the main themes discussed in the documents.

**3.2.4 When to use SVD:**

*   For dimensionality reduction (similar to PCA, often used as an alternative or for specific applications like Latent Semantic Analysis).
*   Recommender systems (e.g., Netflix prize).
*   Image compression.
*   Noise reduction.
*   Solving linear least squares problems.

**3.2.5 Important Points to Remember about SVD:**

*   SVD is a powerful matrix factorization technique.
*   It can be used for dimensionality reduction by selecting the most significant singular values.
*   It forms the basis for many advanced techniques in AI and data science.

---

#### 3.3 Linear Discriminant Analysis (LDA) - A Supervised Technique

**3.3.1 Core Concept:**

*   Unlike PCA, LDA is a **supervised** dimensionality reduction technique. It aims to find a lower-dimensional subspace that maximizes the separation between classes while minimizing the variance within each class.
*   It is often used as a preprocessing step for classification algorithms.

**3.3.2 Mathematical Underpinnings:**

*   LDA seeks a linear projection $w$ such that the ratio of between-class scatter to within-class scatter is maximized:
    $$ J(w) = \frac{w^T S_B w}{w^T S_W w} $$
    where $S_B$ is the between-class scatter matrix and $S_W$ is the within-class scatter matrix.
*   The optimal projection vectors (discriminants) are the eigenvectors of $S_W^{-1} S_B$.
*   **Reference:** **Gupta & Kapoor's "Fundamentals of Mathematical Statistics"** provides the statistical background for scatter matrices. **Deisenroth, Faisal, & Ong's "Mathematics for Machine Learning"** also covers LDA. **Cielen, Meysman, & Meysman's "Introducing Data Science"** might touch upon LDA in practical machine learning contexts.

**3.3.3 Example:**

Imagine you have data for two types of iris flowers, with measurements of sepal length, sepal width, petal length, and petal width. LDA would try to find a projection that best separates the two iris species, considering their class labels.

**3.3.4 When to use LDA:**

*   When you have labeled data (for classification tasks).
*   To improve the performance of classification algorithms by reducing the number of features.
*   When you want to maximize class separability.

**3.3.5 Important Points to Remember about LDA:**

*   LDA is a **supervised** technique.
*   It is primarily used for classification.
*   It projects data onto a lower-dimensional space that maximizes class separability.
*   The number of output dimensions is limited by the number of classes minus one.

---

### 4. Feature Selection Techniques (Brief Overview)

While not directly utilizing linear algebra for transformation, feature selection is a crucial dimensionality reduction strategy.

*   **Filter Methods:**
    *   Select features based on their statistical relationship with the target variable, independent of the chosen machine learning model.
    *   **Examples:** Correlation Coefficient, Chi-Squared Test, Information Gain, ANOVA F-value.
    *   **Reference:** **Gupta & Kapoor's "Fundamentals of Mathematical Statistics"** and **Miller's "Statistics For Data Science"** cover these statistical measures.
*   **Wrapper Methods:**
    *   Use a specific machine learning model to evaluate the performance of different subsets of features.
    *   **Examples:** Forward Selection, Backward Elimination, Recursive Feature Elimination (RFE).
    *   **Reference:** **Géron's "Hands-on machine learning"** is excellent for practical implementation of these methods.
*   **Embedded Methods:**
    *   Feature selection is performed as part of the model training process.
    *   **Examples:** LASSO (L1 regularization), Ridge Regression (L2 regularization, though it shrinks coefficients rather than eliminating them).
    *   **Reference:** **Géron's "Hands-on machine learning"** and **Deisenroth, Faisal, & Ong's "Mathematics for Machine Learning"** discuss regularization techniques.

---

### 5. Applications of Dimensionality Reduction

*   **Improved Model Performance:** By reducing noise and combating overfitting, dimensionality reduction can lead to better generalization on unseen data.
*   **Faster Training Times:** Fewer features mean less computation, leading to significantly faster model training.
*   **Reduced Storage Space:** Lower-dimensional data requires less memory and disk space.
*   **Data Visualization:** Reducing data to 2 or 3 dimensions allows for visual exploration and understanding of patterns.
*   **Noise Reduction:** By focusing on the principal components that capture the most variance, noise in the data can be filtered out.

---

### 6. Practice Questions and Exercises

**Question 1:** What is the primary goal of dimensionality reduction?

**Answer:** The primary goal of dimensionality reduction is to reduce the number of features (dimensions) in a dataset while retaining as much of the essential information as possible. This helps to overcome the "curse of dimensionality," leading to faster computation, reduced overfitting, and better visualization.

**Question 2:** Explain the key difference between feature selection and feature extraction.

**Answer:**
*   **Feature Selection** involves choosing a subset of the original features, keeping them in their original form.
*   **Feature Extraction** involves creating new features by transforming or combining the original features into a lower-dimensional space. The new features are not directly interpretable as the original ones.

**Question 3:** In PCA, what do the eigenvectors and eigenvalues of the covariance matrix represent?

**Answer:**
*   **Eigenvectors:** Represent the directions of maximum variance in the data. These are the principal components.
*   **Eigenvalues:** Represent the magnitude of the variance along the corresponding eigenvector (principal component). A larger eigenvalue indicates that the principal component captures more variance.

**Question 4:** What is the main advantage of using PCA over simply selecting a subset of original features?

**Answer:** PCA can capture the underlying structure of the data by considering correlations between features. By creating new features (principal components) that are linear combinations of the original features, PCA can often represent the data more effectively in fewer dimensions than simply discarding some original features.

**Question 5 (Conceptual):** You have a dataset with 100 features and 1000 samples. You want to visualize this data. Which dimensionality reduction technique would be most suitable for visualization, and why?

**Answer:** PCA would be most suitable. Since we want to visualize the data, we need to reduce the dimensions to 2 or 3. PCA finds the directions of maximum variance, which often represent the most significant patterns in the data. By projecting the 100-dimensional data onto the first two or three principal components, we can create a 2D or 3D scatter plot to visualize the data's structure, clusters, or relationships.

**Question 6 (Mathematical):** Consider a dataset $X$ with features $f_1$ and $f_2$. Suppose the covariance matrix is:
$$ \Sigma = \begin{bmatrix} 4 & 2 \\ 2 & 1 \end{bmatrix} $$
If the eigenvalues are $\lambda_1 = 5$ and $\lambda_2 = 0$, and the corresponding eigenvectors are $v_1 = \begin{bmatrix} 2 \\ 1 \end{bmatrix}$ and $v_2 = \begin{bmatrix} -1 \\ 2 \end{bmatrix}$ (note: these are not normalized yet for simplicity of example).
What are the principal components, and if you want to reduce the dimensionality to 1, which principal component would you choose?

**Answer:**
1.  **Normalize the eigenvectors:**
    *   $v_1_{norm} = \frac{1}{\sqrt{2^2 + 1^2}} \begin{bmatrix} 2 \\ 1 \end{bmatrix} = \frac{1}{\sqrt{5}} \begin{bmatrix} 2 \\ 1 \end{bmatrix}$
    *   $v_2_{norm} = \frac{1}{\sqrt{(-1)^2 + 2^2}} \begin{bmatrix} -1 \\ 2 \end{bmatrix} = \frac{1}{\sqrt{5}} \begin{bmatrix} -1 \\ 2 \end{bmatrix}$
2.  **Principal Components:** The normalized eigenvectors are the principal components.
    *   PC1 (corresponding to $\lambda_1 = 5$): $\frac{1}{\sqrt{5}} \begin{bmatrix} 2 \\ 1 \end{bmatrix}$
    *   PC2 (corresponding to $\lambda_2 = 0$): $\frac{1}{\sqrt{5}} \begin{bmatrix} -1 \\ 2 \end{bmatrix}$
3.  **Dimensionality Reduction to 1:** To reduce the dimensionality to 1, we choose the principal component with the largest eigenvalue. In this case, the largest eigenvalue is $\lambda_1 = 5$. Therefore, we would choose **PC1** (the normalized eigenvector corresponding to $\lambda_1$). This principal component represents a direction that captures the most variance in the data.

---

### 7. Important Points to Remember

*   **Curse of Dimensionality:** High-dimensional data poses significant challenges for AI and data science algorithms.
*   **PCA:** Unsupervised, focuses on variance maximization, uses eigenvectors/eigenvalues of the covariance matrix. It assumes linear relationships and is sensitive to scaling.
*   **SVD:** General matrix factorization, can be used for dimensionality reduction by selecting significant singular values. Widely applicable.
*   **LDA:** Supervised, focuses on maximizing class separability, useful for classification preprocessing.
*   **Feature Selection vs. Extraction:** Understand the distinction and when to apply each.
*   **Data Preprocessing:** Standardizing data is crucial for PCA.
*   **Interpretability:** New features from feature extraction techniques might be harder to interpret than original features.
*   **Choice of Technique:** The best dimensionality reduction technique depends on the specific problem, the nature of the data, and whether the task is supervised or unsupervised.

---

### Alignment with Course Outcomes:

*   **CO1 (Apply ML algorithms):** Understanding dimensionality reduction is crucial for applying many ML algorithms efficiently and effectively, especially those sensitive to the number of features.
*   **CO2 (Apply advanced math for analysis):** This topic directly uses matrix operations, singular values, and PCA (which relies on eigenvectors/eigenvalues) to analyze and solve engineering problems by reducing data complexity.
*   **CO3 (Analyze and interpret data):** Dimensionality reduction techniques like PCA help in analyzing and interpreting data by revealing underlying structure and enabling visualization.
*   **CO4 (Integrate statistical approaches and ML techniques):** Dimensionality reduction bridges statistical concepts (covariance, variance) with machine learning techniques (feature extraction for model building).
