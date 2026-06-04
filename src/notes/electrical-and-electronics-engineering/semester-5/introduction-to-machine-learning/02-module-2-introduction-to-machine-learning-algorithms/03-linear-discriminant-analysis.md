---
title: "linear discriminant analysis"
subject: "INTRODUCTION TO MACHINE LEARNING"
module: "Module 2: Introduction to machine learning algorithms "
branch: "Electrical and Electronics Engineering"
semester: 5
topicId: "68a200862b85456187f3642d"
status: "completed"
scrapedAt: "2026-05-23T16:22:20.919Z"
---
# Module 2: Introduction to Machine Learning Algorithms - Linear Discriminant Analysis (LDA)

This module introduces various machine learning algorithms. We will delve into **Linear Discriminant Analysis (LDA)**, a fundamental technique for classification and dimensionality reduction.

## 1. Introduction to Linear Discriminant Analysis (LDA)

Linear Discriminant Analysis (LDA) is a supervised machine learning algorithm that can be used for both classification and dimensionality reduction. It's particularly effective when dealing with datasets where classes are well-separated or when you want to reduce the dimensionality of a dataset while preserving class separability.

**Key Concepts & Definitions:**

*   **Supervised Learning:** LDA is a supervised learning algorithm because it requires labeled data (i.e., the class of each data point is known).
*   **Classification:** LDA's primary use is to classify data points into predefined classes.
*   **Dimensionality Reduction:** LDA can also be used to reduce the number of features in a dataset while maximizing class separability.
*   **Class Separability:** The goal of LDA is to find a linear combination of features that characterizes or separates two or more classes of objects or events.

**Learning Outcomes Covered:**

*   This topic directly addresses **CO2** by applying a classification and dimensionality reduction algorithm.
*   It indirectly relates to **CO1** by understanding class separation which relies on statistical properties of data.
*   It lays the groundwork for **CO4** by introducing a classification algorithm that can be implemented in Python.

**Textbook References:**

*   **Mathematics for Machine Learning (Deisenroth et al.):** Provides foundational mathematical concepts relevant to LDA, such as linear algebra and probability.
*   **Pattern Recognition and Machine Learning (Bishop):** Offers a comprehensive theoretical treatment of LDA within the broader context of pattern recognition.
*   **Introduction to Machine Learning with Python (Müller & Guido):** Discusses LDA in the context of practical machine learning implementations and its use in scikit-learn.

---

## 2. How LDA Works (Classification)

LDA aims to find a linear decision boundary that best separates the classes. It achieves this by maximizing the ratio of between-class variance to within-class variance.

**Key Concepts & Definitions:**

*   **Between-Class Variance:** Measures how spread out the means of different classes are. A larger between-class variance indicates better separation between classes.
*   **Within-Class Variance:** Measures how spread out the data points are within each class. A smaller within-class variance indicates that the data points for a given class are clustered closely together.
*   **Fisher's Linear Discriminant:** The mathematical formulation behind LDA is often referred to as Fisher's Linear Discriminant.

**The LDA Objective:**

LDA seeks to find a projection vector (or vectors for multi-class problems) $\mathbf{w}$ such that when the data points are projected onto this vector, the projected means of the different classes are as far apart as possible, and the variance of the projected data points within each class is as small as possible.

Mathematically, LDA maximizes the objective function:

$$J(\mathbf{w}) = \frac{\mathbf{w}^T S_B \mathbf{w}}{\mathbf{w}^T S_W \mathbf{w}}$$

where:

*   $S_B$ is the **between-class scatter matrix**.
*   $S_W$ is the **within-class scatter matrix**.

**Steps for Classification:**

1.  **Calculate Class Means:** Compute the mean vector for each class.
2.  **Calculate Within-Class Scatter Matrix ($S_W$):** For each class, compute the scatter matrix (covariance matrix). Sum these scatter matrices across all classes.
    $$S_W = \sum_{c=1}^{C} \sum_{\mathbf{x} \in X_c} (\mathbf{x} - \boldsymbol{\mu}_c)(\mathbf{x} - \boldsymbol{\mu}_c)^T$$
    where $X_c$ is the set of data points in class $c$, $\boldsymbol{\mu}_c$ is the mean of class $c$, and $C$ is the number of classes.
3.  **Calculate Between-Class Scatter Matrix ($S_B$):** This matrix captures the variance between the means of the classes.
    $$S_B = \sum_{c=1}^{C} N_c (\boldsymbol{\mu}_c - \boldsymbol{\mu})(\boldsymbol{\mu}_c - \boldsymbol{\mu})^T$$
    where $N_c$ is the number of samples in class $c$, and $\boldsymbol{\mu}$ is the mean of all data points.
4.  **Find the Discriminant Vectors:** Solve the generalized eigenvalue problem:
    $$S_B \mathbf{w} = \lambda S_W \mathbf{w}$$
    The eigenvectors of $S_W^{-1} S_B$ corresponding to the largest eigenvalues are the discriminant vectors.
5.  **Project Data:** Project the original data points onto these discriminant vectors.
6.  **Classification:** For a new data point, project it onto the discriminant vectors and assign it to the class whose projected mean is closest (e.g., using Euclidean distance or by fitting a probability model).

**Important Point to Remember:**

*   LDA assumes that the data within each class is normally distributed and that the covariance matrices for all classes are equal (homoscedasticity). If these assumptions are violated, LDA's performance may degrade.

**Textbook References:**

*   **Pattern Recognition and Machine Learning (Bishop):** Provides detailed mathematical derivations for the scatter matrices and the solution to the eigenvalue problem.
*   **Mathematics for Machine Learning (Deisenroth et al.):** Reinforces the concepts of covariance matrices and linear transformations.

---

## 3. LDA for Dimensionality Reduction

LDA can be used as a dimensionality reduction technique by projecting the data onto the $k$ discriminant vectors that capture the most class separability, where $k$ is typically less than the original number of features (or $C-1$, whichever is smaller).

**Key Concepts & Definitions:**

*   **Feature Extraction:** LDA transforms the original features into a new set of features (the discriminant vectors) that are optimal for classification.
*   **Preserving Class Separability:** Unlike techniques like PCA (Principal Component Analysis), LDA's dimensionality reduction specifically aims to maximize the separation between classes.

**Steps for Dimensionality Reduction:**

1.  Follow steps 1-4 from the classification section to compute the discriminant vectors.
2.  Select the top $k$ eigenvectors (corresponding to the $k$ largest eigenvalues) as the new feature basis.
3.  Project the original dataset onto this new $k$-dimensional subspace.

**Example:**

Imagine a dataset with 10 features and 3 classes. Using LDA for dimensionality reduction, we could project this data into a 2-dimensional space (since $C-1 = 3-1 = 2$) that best separates the three classes. The new 2 features would be linear combinations of the original 10 features.

**Important Point to Remember:**

*   LDA for dimensionality reduction is often used as a pre-processing step before applying other classification algorithms, especially when dealing with high-dimensional data.

**Textbook References:**

*   **Introduction to Machine Learning with Python (Müller & Guido):** Explains how LDA is implemented in scikit-learn for dimensionality reduction purposes.
*   **Hands-On Machine Learning with Scikit-Learn, Keras, and TensorFlow (Géron):** Demonstrates practical applications of LDA for dimensionality reduction in Python.

---

## 4. LDA Assumptions and Limitations

While powerful, LDA has certain assumptions that, if not met, can affect its performance.

**Key Concepts & Definitions:**

*   **Normality:** Assumes that the distribution of features within each class is Gaussian (normally distributed).
*   **Homoscedasticity:** Assumes that all classes have the same covariance matrix. This means the spread and orientation of the data ellipses for each class are identical.
*   **Independence:** Assumes that the features are independent within each class, although this is often relaxed in practice as the covariance matrix accounts for correlations.

**Limitations:**

*   **Violated Assumptions:** If the data is not normally distributed or if covariance matrices are significantly different across classes, LDA might not perform optimally. In such cases, other classifiers like Quadratic Discriminant Analysis (QDA), Support Vector Machines (SVMs), or tree-based methods might be more suitable.
*   **Linearity:** LDA finds linear decision boundaries. It cannot capture complex, non-linear relationships between features and classes.
*   **Number of Discriminants:** The maximum number of discriminant components that can be extracted is $C-1$, where $C$ is the number of classes. If you have more features than $C-1$, LDA will reduce the dimensionality to $C-1$. If you have fewer features than $C-1$, you won't be able to extract $C-1$ components.

**Examples of When LDA Might Struggle:**

*   **Moon-shaped data:** If classes form non-linear shapes, LDA will struggle.
*   **Data with vastly different variances:** If one class is much more spread out than others, the homoscedasticity assumption is violated.

**Textbook References:**

*   **The Elements of Statistical Learning (Hastie et al.):** Provides a thorough discussion of the assumptions and limitations of LDA.
*   **Introduction to Machine Learning with Python (Müller & Guido):** Highlights practical considerations and when to choose alternative methods.

---

## 5. LDA vs. PCA

Both LDA and PCA are dimensionality reduction techniques, but they have different objectives.

**Key Concepts & Definitions:**

*   **PCA (Principal Component Analysis):** An unsupervised technique that aims to find directions (principal components) of maximum variance in the data, irrespective of class labels. It focuses on preserving as much of the total variance as possible.
*   **LDA (Linear Discriminant Analysis):** A supervised technique that aims to find directions (discriminant vectors) that maximize the separability between classes. It prioritizes class discrimination over total variance.

**Comparison Table:**

| Feature           | PCA                                    | LDA                                    |
| :---------------- | :------------------------------------- | :------------------------------------- |
| **Objective**     | Maximize total variance                | Maximize class separability            |
| **Supervision**   | Unsupervised                           | Supervised                             |
| **Use Cases**     | Dimensionality reduction, noise reduction | Classification, dimensionality reduction |
| **Output**        | Principal Components                   | Discriminant Vectors                   |
| **Class Labels**  | Ignored                                | Utilized                               |
| **Assumptions**   | Fewer, primarily related to linearity  | Normality, homoscedasticity            |

**Example:**

If you have a dataset with two classes that are linearly separable but have very different overall variances, PCA might find a component that captures the most variance but doesn't separate the classes well. LDA, on the other hand, would find a component that explicitly maximizes the distance between the class means, leading to better classification.

**Important Point to Remember:**

*   If your goal is solely dimensionality reduction without regard to class separation (e.g., for visualization of the entire dataset's variance), PCA is appropriate. If your goal is to reduce dimensions while maintaining or improving class separation for classification, LDA is the better choice.

**Textbook References:**

*   **Mathematics for Machine Learning (Deisenroth et al.):** Provides a clear comparison of PCA and LDA from a mathematical perspective.
*   **Introduction to Machine Learning with Python (Müller & Guido):** Discusses when to use LDA versus PCA in practical machine learning scenarios.

---

## 6. Implementation in Python (using scikit-learn)

Scikit-learn provides an efficient implementation of LDA.

**Key Concepts & Definitions:**

*   **`sklearn.discriminant_analysis.LinearDiscriminantAnalysis`:** The primary class in scikit-learn for performing LDA.

**Example Usage:**

```python
from sklearn.discriminant_analysis import LinearDiscriminantAnalysis
from sklearn.model_selection import train_test_split
from sklearn.datasets import make_classification
from sklearn.metrics import accuracy_score

# 1. Generate sample data
X, y = make_classification(n_samples=200, n_features=10, n_informative=5, n_redundant=2, n_classes=3, random_state=42)

# 2. Split data into training and testing sets
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.3, random_state=42)

# 3. Initialize and train the LDA classifier
# solver='svd' is good for general use, 'lsqr' for large datasets, 'eigen' for small datasets
lda = LinearDiscriminantAnalysis(n_components=None, solver='svd') # n_components=None means it will choose min(n_features, n_classes - 1)
lda.fit(X_train, y_train)

# 4. Predict on the test set
y_pred = lda.predict(X_test)

# 5. Evaluate the model
accuracy = accuracy_score(y_test, y_pred)
print(f"Accuracy: {accuracy:.2f}")

# 6. For dimensionality reduction:
#    Set n_components to the desired number of dimensions (e.g., 2 for visualization)
lda_reducer = LinearDiscriminantAnalysis(n_components=2)
X_train_reduced = lda_reducer.fit_transform(X_train, y_train)
X_test_reduced = lda_reducer.transform(X_test)

print(f"Original training data shape: {X_train.shape}")
print(f"Reduced training data shape: {X_train_reduced.shape}")
```

**Learning Outcomes Covered:**

*   This directly addresses **CO3** and **CO4** by demonstrating how to implement a machine learning algorithm using Python and essential libraries.

**Textbook References:**

*   **Python Data Science Handbook (Vander Plas):** Provides practical examples of using scikit-learn for various machine learning tasks.
*   **Hands-On Machine Learning with Scikit-Learn, Keras, and TensorFlow (Géron):** Offers in-depth guidance on scikit-learn implementations and best practices.
*   **Introduction to Machine Learning with Python (Müller & Guido):** Contains practical code examples and explanations for using LDA within scikit-learn.

---

## 7. Practice Questions

1.  **Conceptual:** Explain the core objective of Linear Discriminant Analysis (LDA) in terms of maximizing class separability.
2.  **Conceptual:** What are the main assumptions of LDA? Why are they important?
3.  **Comparative:** How does LDA differ from Principal Component Analysis (PCA) in terms of their goals and data usage?
4.  **Application:** When would you choose LDA for dimensionality reduction over PCA, and vice-versa?
5.  **Implementation (Conceptual):** If you have a dataset with 5 classes, what is the maximum number of discriminant components LDA can extract?
6.  **Implementation (Python):** Using the provided Python code snippet as a base, modify it to perform LDA with `solver='lsqr'` and set `n_components=2` for dimensionality reduction. Print the shapes of the reduced data.

---

## 8. Answers to Practice Questions

1.  **Conceptual:** The core objective of LDA is to find a linear projection that maximizes the distance between the means of different classes while minimizing the variance within each class. This is achieved by maximizing the ratio of between-class variance to within-class variance.
2.  **Conceptual:** The main assumptions of LDA are:
    *   **Normality:** Data within each class follows a Gaussian distribution.
    *   **Homoscedasticity:** All classes share the same covariance matrix.
    These assumptions are important because LDA's performance and the optimality of its linear decision boundaries rely on them. Violations can lead to suboptimal results.
3.  **Comparative:**
    *   **PCA:** Is an unsupervised technique that focuses on finding directions of maximum variance in the data, ignoring class labels. Its goal is to reduce dimensionality while preserving as much of the total data variance as possible.
    *   **LDA:** Is a supervised technique that uses class labels to find directions that best separate the classes. Its goal is to maximize class separability, which may not align with maximizing overall variance.
4.  **Application:**
    *   **Choose LDA for dimensionality reduction when:** The primary goal is to prepare data for classification, and class separability is crucial. LDA will extract features that are most discriminative between classes.
    *   **Choose PCA for dimensionality reduction when:** The goal is general data compression, noise reduction, or visualization without a specific focus on class separation. It's useful when you want to retain as much of the original data's variance as possible.
5.  **Implementation (Conceptual):** With 5 classes ($C=5$), the maximum number of discriminant components LDA can extract is $C-1 = 5-1 = 4$.
6.  **Implementation (Python):**

    ```python
    from sklearn.discriminant_analysis import LinearDiscriminantAnalysis
    from sklearn.model_selection import train_test_split
    from sklearn.datasets import make_classification

    # 1. Generate sample data
    X, y = make_classification(n_samples=200, n_features=10, n_informative=5, n_redundant=2, n_classes=3, random_state=42)

    # 2. Split data into training and testing sets
    X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.3, random_state=42)

    # 3. Initialize and train LDA for dimensionality reduction
    # Using solver='lsqr' and n_components=2
    lda_reducer = LinearDiscriminantAnalysis(n_components=2, solver='lsqr')
    X_train_reduced = lda_reducer.fit_transform(X_train, y_train)
    X_test_reduced = lda_reducer.transform(X_test)

    print(f"Original training data shape: {X_train.shape}")
    print(f"Reduced training data shape: {X_train_reduced.shape}")
    print(f"Original testing data shape: {X_test.shape}")
    print(f"Reduced testing data shape: {X_test_reduced.shape}")
    ```

    **Expected Output:**
    ```
    Original training data shape: (140, 10)
    Reduced training data shape: (140, 2)
    Original testing data shape: (60, 10)
    Reduced testing data shape: (60, 2)
    ```

---

## 9. Important Points to Remember

*   LDA is a **supervised** algorithm.
*   It's used for both **classification** and **dimensionality reduction**.
*   It aims to maximize **between-class variance** relative to **within-class variance**.
*   Key assumptions include **normality** of data within classes and **equal covariance matrices (homoscedasticity)**.
*   The maximum number of components extracted is `n_classes - 1`.
*   LDA finds **linear** decision boundaries.
*   It's a good alternative to PCA when **class separability** is the primary concern for dimensionality reduction.
*   Scikit-learn provides a robust implementation through `LinearDiscriminantAnalysis`.

---
This concludes Module 2's topic on Linear Discriminant Analysis. You should now have a solid understanding of its principles, applications, and limitations.
