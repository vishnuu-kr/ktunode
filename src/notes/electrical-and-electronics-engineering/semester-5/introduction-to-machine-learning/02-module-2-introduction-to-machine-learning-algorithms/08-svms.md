---
title: "SVMs"
subject: "INTRODUCTION TO MACHINE LEARNING"
module: "Module 2: Introduction to machine learning algorithms "
branch: "Electrical and Electronics Engineering"
semester: 5
topicId: "68a200862b85456187f36432"
status: "completed"
scrapedAt: "2026-05-23T16:22:24.654Z"
---
# Module 2: Introduction to Machine Learning Algorithms - Support Vector Machines (SVMs)

## 1. Introduction to SVMs

Support Vector Machines (SVMs) are powerful supervised learning algorithms primarily used for **classification** but can also be adapted for **regression** tasks. They are known for their effectiveness in high-dimensional spaces and their ability to handle complex decision boundaries.

**Key Concept:** SVMs work by finding the optimal hyperplane that best separates data points belonging to different classes.

**Learning Outcomes Covered:**

*   Understanding of classification algorithms (aligns with CO2, K2).
*   Implementation and evaluation of SVMs (aligns with CO4, K3).

### 1.1 What is a Hyperplane?

In machine learning, a hyperplane is a boundary that separates data points in a feature space.

*   **In 2D (two features):** A hyperplane is a line.
*   **In 3D (three features):** A hyperplane is a plane.
*   **In n-D (n features):** A hyperplane is an (n-1)-dimensional subspace.

**Mathematical Representation:**
A hyperplane can be defined by the equation:
$w^T x + b = 0$
where:
*   $w$ is the weight vector (normal to the hyperplane).
*   $x$ is the input feature vector.
*   $b$ is the bias term (offset).

**Important Point:** The goal of SVM is to find the hyperplane that maximizes the margin between the closest data points of different classes.

### 1.2 The Margin

The **margin** is the region between the hyperplane and the closest data points from each class, known as **support vectors**.

*   **Maximum Margin:** SVM aims to find the hyperplane that maximizes this margin. A larger margin generally leads to better generalization performance.
*   **Support Vectors:** These are the data points that lie closest to the hyperplane and are crucial in defining its position and orientation. Removing them would change the hyperplane.

**Example:** Imagine separating apples and oranges. The hyperplane would be the line that best divides them, and the support vectors would be the apples and oranges closest to that line.

**Textbook Reference:**
*   **Mathematics for Machine Learning (Deisenroth et al.):** Discusses the geometric interpretation of linear classifiers and the concept of margins.
*   **Pattern Recognition and Machine Learning (Bishop):** Provides a detailed mathematical derivation of SVMs, including the concept of margins and support vectors.

## 2. Linear SVMs

Linear SVMs are used when the data can be separated by a linear hyperplane.

### 2.1 The Goal: Maximize the Margin

For a linearly separable dataset, we want to find a hyperplane $w^T x + b = 0$ such that:

*   For data points in class +1: $w^T x + b \ge 1$
*   For data points in class -1: $w^T x + b \le -1$

This formulation implicitly scales $w$ and $b$ such that the distance from the hyperplane to the closest points (support vectors) is $1/\|w\|$. Maximizing this distance is equivalent to minimizing $\|w\|^2$.

**Objective Function (Primal Form):**
Minimize $\frac{1}{2} \|w\|^2$
Subject to: $y_i (w^T x_i + b) \ge 1$ for all $i = 1, \dots, N$
where:
*   $x_i$ is the $i$-th data point.
*   $y_i \in \{+1, -1\}$ is the class label of $x_i$.
*   $N$ is the number of data points.

### 2.2 The Dual Problem

The primal problem can be complex to solve directly. The **dual problem** formulation, using Lagrange multipliers, is often more tractable, especially when dealing with kernels.

**Dual Formulation:**
Maximize $\sum_{i=1}^N \alpha_i - \frac{1}{2} \sum_{i=1}^N \sum_{j=1}^N \alpha_i \alpha_j y_i y_j (x_i^T x_j)$
Subject to: $\sum_{i=1}^N \alpha_i y_i = 0$ and $\alpha_i \ge 0$ for all $i = 1, \dots, N$
where $\alpha_i$ are the Lagrange multipliers.

**Important Point:** The dual formulation highlights that the solution depends only on the dot products of the input vectors, which is key for kernel methods.

**Textbook Reference:**
*   **The Elements of Statistical Learning (Hastie et al.):** Provides a rigorous mathematical treatment of the primal and dual formulations of SVMs.
*   **Mathematics for Machine Learning (Deisenroth et al.):** Explains Lagrange multipliers and their application in optimization problems like SVM.

## 3. Handling Non-Linearity: The Kernel Trick

Most real-world datasets are not linearly separable. SVMs address this using the **kernel trick**.

### 3.1 The Kernel Trick Explained

The kernel trick allows SVMs to learn complex, non-linear decision boundaries without explicitly mapping data to a higher-dimensional space. Instead, it uses a **kernel function** to compute dot products in this higher-dimensional space.

**Kernel Function:** A function $K(x_i, x_j)$ that computes the dot product of the feature vectors after they've been mapped to a higher-dimensional space, without actually performing the mapping.

$K(x_i, x_j) = \phi(x_i)^T \phi(x_j)$
where $\phi(\cdot)$ is the mapping function to the higher-dimensional space.

**Common Kernel Functions:**

*   **Linear Kernel:** $K(x_i, x_j) = x_i^T x_j$ (Equivalent to no mapping, for linearly separable data).
*   **Polynomial Kernel:** $K(x_i, x_j) = (\gamma x_i^T x_j + r)^d$
    *   $\gamma$: Kernel coefficient.
    *   $r$: Constant.
    *   $d$: Degree of the polynomial.
*   **Radial Basis Function (RBF) Kernel (Gaussian Kernel):** $K(x_i, x_j) = \exp(-\gamma \|x_i - x_j\|^2)$
    *   $\gamma$: Kernel coefficient. Controls the influence of individual training samples. A smaller $\gamma$ means a larger influence, leading to smoother decision boundaries. A larger $\gamma$ means a smaller influence, leading to more complex boundaries that can overfit.

**Dual Problem with Kernels:**
Maximize $\sum_{i=1}^N \alpha_i - \frac{1}{2} \sum_{i=1}^N \sum_{j=1}^N \alpha_i \alpha_j y_i y_j K(x_i, x_j)$
Subject to: $\sum_{i=1}^N \alpha_i y_i = 0$ and $\alpha_i \ge 0$ for all $i = 1, \dots, N$

**Decision Function:**
$f(x) = \text{sign}(\sum_{i=1}^N \alpha_i y_i K(x_i, x) + b)$

**Example:** Consider data that is not separable in 2D. A polynomial kernel can map it to a higher dimension where it might become linearly separable.

**Textbook Reference:**
*   **Hands-On Machine Learning with Scikit-Learn, Keras, and TensorFlow (Géron):** Explains the kernel trick with intuitive examples and practical implementations in scikit-learn.
*   **Introduction to Machine Learning with Python (Müller & Guido):** Provides a clear explanation of how kernels enable SVMs to handle non-linear data.

## 4. Soft Margin SVM

In many real-world scenarios, data is not perfectly separable, even in a high-dimensional space. **Soft Margin SVMs** allow for some misclassifications by introducing a penalty for violating the margin.

### 4.1 The C Parameter

The **regularization parameter C** controls the trade-off between maximizing the margin and minimizing classification errors.

*   **Large C:** The model will try hard to classify all points correctly, potentially leading to a smaller margin and overfitting.
*   **Small C:** The model will allow more misclassifications to achieve a wider margin, potentially leading to underfitting but better generalization.

**Objective Function (Soft Margin Primal Form):**
Minimize $\frac{1}{2} \|w\|^2 + C \sum_{i=1}^N \xi_i$
Subject to: $y_i (w^T x_i + b) \ge 1 - \xi_i$ and $\xi_i \ge 0$ for all $i = 1, \dots, N$
where $\xi_i$ are slack variables that measure the degree of misclassification for data point $x_i$.

**Important Point:** Soft Margin SVMs are more robust to noisy data and outliers.

**Textbook Reference:**
*   **Python Data Science Handbook (Vander Plas):** Demonstrates the effect of the `C` parameter in scikit-learn's SVM implementation.
*   **Pattern Recognition and Machine Learning (Bishop):** Discusses the statistical interpretation of the regularization parameter `C`.

## 5. SVM for Regression (Support Vector Regression - SVR)

SVMs can also be used for regression tasks by modifying the objective function to fit data within an "epsilon-insensitive tube."

### 5.1 Epsilon-Insensitive Tube

In SVR, the goal is to find a function $f(x)$ that deviates from the actual target values $y_i$ by no more than a specified tolerance $\epsilon$.

*   The model tries to fit as many data points as possible within this tube.
*   Points outside the tube incur a penalty.

**Objective Function (SVR):**
Minimize $\frac{1}{2} \|w\|^2 + C \sum_{i=1}^N \max(0, |\text{output}_i - y_i| - \epsilon)$
where $\text{output}_i = w^T x_i + b$.

**Key Parameters in SVR:**

*   **`epsilon` ($\epsilon$):** The radius of the epsilon-insensitive tube. A larger $\epsilon$ means more tolerance for errors.
*   **`C`:** The regularization parameter, balancing margin width and fitting the data within the tube.
*   **Kernel:** Similar to classification, kernels can be used to handle non-linear regression.

**Example:** Predicting house prices. SVR can predict prices while allowing a certain tolerance ($\epsilon$) for deviations from the actual prices.

**Textbook Reference:**
*   **Hands-On Machine Learning with Scikit-Learn, Keras, and TensorFlow (Géron):** Provides practical examples of using SVR in Python.
*   **Python Machine Learning (Raschka & Mirjalili):** Explains the concepts and implementation of SVR.

## 6. Implementation in Python (Scikit-learn)

Scikit-learn provides a robust implementation of SVMs.

### 6.1 Key Scikit-learn Parameters

```python
from sklearn.svm import SVC, SVR
from sklearn.model_selection import train_test_split
from sklearn.metrics import accuracy_score, mean_squared_error
from sklearn.preprocessing import StandardScaler
import numpy as np

# For Classification
# svc = SVC(kernel='rbf', C=1.0, gamma='scale')

# For Regression
# svr = SVR(kernel='rbf', C=1.0, epsilon=0.1, gamma='scale')
```

*   **`kernel`**: Specifies the kernel type ('linear', 'poly', 'rbf', 'sigmoid').
*   **`C`**: Regularization parameter.
*   **`gamma`**: Kernel coefficient for 'rbf', 'poly', and 'sigmoid'. 'scale' uses 1 / (n_features * X.var()).
*   **`degree`**: Degree for polynomial kernel.
*   **`epsilon`**: For `SVR`, it's the epsilon-tube.
*   **`probability`**: If `True`, enables probability estimates (useful for `SVC`).

### 6.2 Data Preprocessing

SVMs are sensitive to the scale of features. **Feature scaling** is crucial.

*   **StandardScaler:** Standardizes features by removing the mean and scaling to unit variance.

**Example Workflow:**

1.  **Load Data:** Load your dataset.
2.  **Split Data:** Divide into training and testing sets.
3.  **Scale Features:** Use `StandardScaler` to scale features.
4.  **Train Model:** Instantiate and train an SVM classifier (`SVC`) or regressor (`SVR`).
5.  **Predict:** Make predictions on the test set.
6.  **Evaluate:** Calculate relevant metrics (accuracy, MSE, etc.).

**Textbook Reference:**
*   **Python Data Science Handbook (Vander Plas):** Offers detailed examples of using scikit-learn for SVM classification and regression, including data splitting and scaling.
*   **Introduction to Machine Learning with Python (Müller & Guido):** Provides practical code examples for SVM implementation.

## 7. Advantages and Disadvantages of SVMs

### 7.1 Advantages

*   **Effective in High-Dimensional Spaces:** Performs well even when the number of features is greater than the number of samples.
*   **Memory Efficient:** Uses a subset of training points (support vectors) in the decision function.
*   **Versatile:** Different kernel functions can be specified for different decision functions.
*   **Robust to Overfitting:** Especially when `C` is set appropriately and using kernels like RBF.
*   **Works Well with Clear Margin Separations:** Particularly effective when data is linearly separable or can be made separable with kernels.

### 7.2 Disadvantages

*   **Computationally Expensive:** Training time can be high, especially for large datasets (O(n^2) or O(n^3) complexity depending on implementation and kernel).
*   **Parameter Tuning:** Performance is sensitive to the choice of kernel and hyperparameters (C, gamma, epsilon). Requires careful tuning, often using cross-validation.
*   **Does Not Directly Provide Probability Estimates:** For `SVC`, probabilities can be obtained using `probability=True`, but this is computationally more expensive and is an extension rather than a direct output of the core algorithm.
*   **Not Ideal for Very Noisy Datasets:** While soft-margin helps, extremely noisy data can still pose challenges.
*   **Kernel Choice:** Selecting the right kernel can be tricky and might require experimentation.

**Important Point:** SVMs are often a good baseline model for classification and regression tasks.

**Textbook Reference:**
*   **The Elements of Statistical Learning (Hastie et al.):** Discusses the theoretical strengths and weaknesses of SVMs.

## 8. Practice Questions & Exercises

### Question 1 (Conceptual)

What is the primary goal of a Support Vector Machine (SVM) in classification?

**Answer:** The primary goal of an SVM is to find the optimal hyperplane that maximizes the margin between the closest data points of different classes (support vectors). This aims to create a robust decision boundary that generalizes well to unseen data.

### Question 2 (Kernel Trick)

Explain why the kernel trick is useful in SVMs.

**Answer:** The kernel trick is useful because it allows SVMs to learn non-linear decision boundaries without explicitly mapping the data into a very high-dimensional feature space. It does this by computing dot products in this higher-dimensional space using a kernel function, which is computationally much more efficient than performing the explicit transformation.

### Question 3 (Parameter Tuning)

Consider a dataset where you observe that your SVM model is performing poorly on both the training and testing sets (underfitting). What might be a reasonable adjustment to the `C` parameter of a Soft Margin SVM, and why?

**Answer:** If the model is underfitting, it means it's too simple and not capturing the underlying patterns in the data. For a Soft Margin SVM, decreasing the `C` parameter would allow more misclassifications to achieve a wider margin, potentially making the model too simple. Therefore, to address underfitting, you would typically **increase the `C` parameter**. A larger `C` penalizes misclassifications more heavily, encouraging the SVM to fit the training data more closely, which can lead to a more complex decision boundary and better performance on the training data, and hopefully on the test data as well.

### Question 4 (Practical - Python/Scikit-learn)

Given the following data:
```python
from sklearn.datasets import make_classification
from sklearn.model_selection import train_test_split
from sklearn.preprocessing import StandardScaler
from sklearn.svm import SVC
from sklearn.metrics import accuracy_score

X, y = make_classification(n_samples=100, n_features=2, n_informative=2, n_redundant=0, random_state=42)
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.3, random_state=42)

# Scale the features
scaler = StandardScaler()
X_train_scaled = scaler.fit_transform(X_train)
X_test_scaled = scaler.transform(X_test)

# Train an SVC model with an RBF kernel
# Fill in the missing parts:
# model = ???
# model.fit(???, ???)
# y_pred = model.predict(???)
# accuracy = ???

# print(f"Accuracy: {accuracy}")
```
Complete the Python code to train an SVC model with an RBF kernel, make predictions, and calculate the accuracy.

**Answer:**
```python
from sklearn.datasets import make_classification
from sklearn.model_selection import train_test_split
from sklearn.preprocessing import StandardScaler
from sklearn.svm import SVC
from sklearn.metrics import accuracy_score

X, y = make_classification(n_samples=100, n_features=2, n_informative=2, n_redundant=0, random_state=42)
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.3, random_state=42)

# Scale the features
scaler = StandardScaler()
X_train_scaled = scaler.fit_transform(X_train)
X_test_scaled = scaler.transform(X_test)

# Train an SVC model with an RBF kernel
model = SVC(kernel='rbf', C=1.0, gamma='scale', random_state=42) # Added random_state for reproducibility
model.fit(X_train_scaled, y_train)
y_pred = model.predict(X_test_scaled)
accuracy = accuracy_score(y_test, y_pred)

print(f"Accuracy: {accuracy}")
```
*Self-Correction Note:* Initially, I might forget `random_state` for `SVC` or `make_classification`. Adding it ensures that the results are reproducible if the code is run multiple times. Also, ensuring features are scaled *before* training is critical for SVM.

---

## Summary of Important Points

*   **SVMs find the optimal hyperplane to maximize the margin.**
*   **Support vectors** are the data points closest to the hyperplane and are crucial for its definition.
*   The **kernel trick** (e.g., RBF kernel) allows SVMs to handle non-linear data by implicitly mapping to higher dimensions.
*   **Soft Margin SVMs** use the `C` parameter to balance margin maximization and misclassification penalty.
*   **`C` parameter:** High `C` -> small margin, potentially overfit. Low `C` -> large margin, potentially underfit.
*   **`gamma` parameter (for RBF kernel):** High `gamma` -> localized decision boundary, potentially overfit. Low `gamma` -> global decision boundary, potentially underfit.
*   **Feature scaling** (e.g., using `StandardScaler`) is essential for SVM performance.
*   **SVR (Support Vector Regression)** uses an $\epsilon$-insensitive tube to perform regression.
*   SVMs are powerful but can be computationally expensive for large datasets and require careful **hyperparameter tuning**.

---

This comprehensive set of notes covers the fundamentals of SVMs, their mathematical underpinnings, practical implementation, and considerations for their use, aligning with the provided learning and course outcomes.
