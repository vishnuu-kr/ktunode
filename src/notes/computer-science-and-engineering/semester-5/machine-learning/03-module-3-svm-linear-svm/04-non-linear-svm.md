---
title: "Non-linear SVM"
subject: "MACHINE LEARNING"
module: "Module 3: SVM – Linear SVM"
branch: "Computer Science and Engineering"
semester: 5
topicId: "684162760fc9aa1fdbc8b5c7"
status: "completed"
scrapedAt: "2026-05-20T16:46:42.727Z"
---
# MACHINE LEARNING - Module 3: SVM – Linear SVM - Non-linear SVM

**Learning Outcomes:**

*   Understand the limitations of linear SVM for non-linearly separable data.
*   Explain the concept of kernel functions and their role in non-linear SVM.
*   Describe different types of kernel functions (Polynomial, Radial Basis Function (RBF), Sigmoid) and their properties.
*   Apply kernel functions to transform data into a higher-dimensional space.
*   Explain the kernel trick and its benefits.
*   Understand the effect of kernel parameters (e.g., degree in polynomial kernel, gamma in RBF kernel) on the decision boundary.
*   Explain the importance of cross-validation and grid search for selecting optimal kernel parameters.
*   Implement and evaluate non-linear SVM models using libraries like scikit-learn.
*   Compare and contrast linear and non-linear SVM.

## 1. Limitations of Linear SVM

*   **Linear Separability:** Linear SVMs work effectively when data can be separated by a straight line (in 2D) or a hyperplane (in higher dimensions).
*   **Non-Linear Data:** When data is non-linearly separable, a linear SVM will struggle to find an optimal separating hyperplane, leading to poor performance and high error rates.
*   **Example:** Consider a dataset where the positive and negative examples are arranged in concentric circles. A linear SVM cannot effectively separate these classes.

## 2. Kernel Functions: Introduction

*   **Definition:** Kernel functions are mathematical functions that provide a way to compute the dot product of two vectors in a high-dimensional feature space without explicitly computing the transformation. They implicitly map input data into a higher-dimensional space.
*   **Role:** Kernel functions allow SVMs to create non-linear decision boundaries by performing linear separation in a transformed feature space.
*   **Analogy:** Imagine trying to separate overlapping circles on a table. You could lift the table and slightly tilt it so that the circles are separated vertically. Kernel functions perform a similar "lifting" operation into a higher dimension.

## 3. Types of Kernel Functions

### 3.1. Polynomial Kernel

*   **Formula:**  `K(x, y) = (x · y + c)^d`
    *   `x` and `y` are input vectors.
    *   `c` is a constant (typically 0 or 1).
    *   `d` is the degree of the polynomial (a hyperparameter).
*   **Properties:**
    *   Maps data into a polynomial feature space.
    *   The degree `d` controls the complexity of the decision boundary. Higher `d` values can lead to overfitting.
*   **Example:** A polynomial kernel with `d=2` (quadratic kernel) creates features like `x1^2`, `x2^2`, and `x1*x2`.
*   **Use Cases:** Suitable for problems where relationships between data points can be expressed as polynomial combinations.

### 3.2. Radial Basis Function (RBF) Kernel (Gaussian Kernel)

*   **Formula:** `K(x, y) = exp(-gamma * ||x - y||^2)`
    *   `x` and `y` are input vectors.
    *   `gamma` is a hyperparameter (gamma > 0). It determines the influence of a single training example.  Smaller gamma means a larger radius of influence.
    *   `||x - y||` is the Euclidean distance between `x` and `y`.
*   **Properties:**
    *   Maps data into an infinite-dimensional feature space.
    *   `gamma` controls the flexibility of the decision boundary.
        *   Small `gamma`: Wide influence; can lead to underfitting.
        *   Large `gamma`: Narrow influence; can lead to overfitting.
*   **Example:** Consider two points `x` and `y`. If they are close in the original space, the RBF kernel value will be close to 1, indicating high similarity. If they are far apart, the kernel value will be close to 0.
*   **Use Cases:** The RBF kernel is a good default choice and often performs well in various applications.  It's generally preferred when you don't have specific prior knowledge about the data.

### 3.3. Sigmoid Kernel (Hyperbolic Tangent Kernel)

*   **Formula:** `K(x, y) = tanh(alpha * (x · y) + c)`
    *   `x` and `y` are input vectors.
    *   `alpha` and `c` are hyperparameters.
*   **Properties:**
    *   Behaves similarly to a two-layer neural network (multilayer perceptron).
    *   Can be less effective than other kernels, especially RBF.  Its usage is less common.
*   **Use Cases:**  Might be considered if the dataset is inherently neural network-like.

## 4. Kernel Trick

*   **Definition:** The kernel trick is the method of using a kernel function to compute the dot product in a high-dimensional space without explicitly calculating the coordinates of the data points in that space.
*   **Benefits:**
    *   **Computational Efficiency:** Avoids the explicit computation of potentially very high-dimensional feature mappings, which can be computationally expensive or even infeasible.
    *   **Abstraction:** Allows working with feature spaces without needing to know their explicit form.

## 5. Effect of Kernel Parameters

*   **Polynomial Kernel (Degree `d`):**
    *   `d` = 1: Linear kernel (equivalent to a linear SVM).
    *   Higher `d`: More complex decision boundaries. Risk of overfitting increases with increasing `d`.
*   **RBF Kernel (Gamma `gamma`):**
    *   Small `gamma` (e.g., close to 0):  The kernel has a wide influence; data points are considered similar even if they are relatively far apart. Leads to a smoother decision boundary. May result in underfitting.
    *   Large `gamma`: The kernel has a narrow influence; data points must be very close to be considered similar.  Leads to a more complex and wiggly decision boundary.  May result in overfitting.
*   **General:** Careful tuning of kernel parameters is crucial for achieving good performance.  Experimentation and validation are essential.

## 6. Cross-Validation and Grid Search

*   **Importance:**  Kernel parameters (like `gamma` in RBF) significantly impact the model's performance. Choosing optimal parameters is essential to avoid underfitting or overfitting.
*   **Cross-Validation:**
    *   A technique to assess the generalization performance of a model by splitting the data into multiple folds.
    *   The model is trained on some folds and tested on the remaining fold(s). This process is repeated for each fold, and the average performance is calculated.
    *   Common methods: k-fold cross-validation (e.g., 5-fold, 10-fold), stratified k-fold cross-validation (preserves class proportions in each fold).
*   **Grid Search:**
    *   A systematic approach to finding the best hyperparameters for a model.
    *   A grid of hyperparameter values is defined (e.g., `gamma` = [0.01, 0.1, 1, 10]).
    *   The model is trained and evaluated for each combination of hyperparameters in the grid.
    *   Cross-validation is typically used within the grid search process to evaluate each hyperparameter combination robustly.
    *   The combination of hyperparameters that yields the best cross-validation performance is selected.
*   **Combined Approach:** Grid search with cross-validation (GridSearchCV in scikit-learn) is a common and effective technique for hyperparameter tuning in SVM and other machine learning models.

## 7. Implementation and Evaluation with Scikit-learn

```python
from sklearn import svm
from sklearn.model_selection import train_test_split, GridSearchCV
from sklearn.metrics import accuracy_score, classification_report
from sklearn.datasets import make_circles # Example dataset
import matplotlib.pyplot as plt
import numpy as np

# 1. Generate non-linear data (concentric circles)
X, y = make_circles(n_samples=100, noise=0.1, factor=0.5, random_state=42)

# 2. Split data into training and testing sets
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.3, random_state=42)

# 3. Define the parameter grid for grid search (for RBF kernel)
param_grid = {'C': [0.1, 1, 10, 100],  # Regularization parameter
              'gamma': [0.01, 0.1, 1, 10]}  # Kernel coefficient

# 4. Create an RBF SVM model
rbf_svm = svm.SVC(kernel='rbf') # RBF kernel

# 5. Perform grid search with cross-validation
grid_search = GridSearchCV(rbf_svm, param_grid, cv=5, scoring='accuracy') # 5-fold CV

# 6. Fit the grid search to the training data
grid_search.fit(X_train, y_train)

# 7. Print the best parameters
print("Best parameters:", grid_search.best_params_)

# 8. Get the best model
best_rbf_svm = grid_search.best_estimator_

# 9. Make predictions on the test set
y_pred = best_rbf_svm.predict(X_test)

# 10. Evaluate the model
accuracy = accuracy_score(y_test, y_pred)
print("Accuracy:", accuracy)

print("Classification Report:\n", classification_report(y_test, y_pred))

# Visualizing the decision boundary (Optional - Requires plotting)
def plot_decision_boundary(model, X, y):
    h = .02  # step size in the mesh
    x_min, x_max = X[:, 0].min() - 1, X[:, 0].max() + 1
    y_min, y_max = X[:, 1].min() - 1, X[:, 1].max() + 1
    xx, yy = np.meshgrid(np.arange(x_min, x_max, h), np.arange(y_min, y_max, h))

    Z = model.predict(np.c_[xx.ravel(), yy.ravel()])
    Z = Z.reshape(xx.shape)

    plt.contourf(xx, yy, Z, cmap=plt.cm.Paired, alpha=0.8)
    plt.scatter(X[:, 0], X[:, 1], c=y, cmap=plt.cm.Paired)
    plt.xlabel('Feature 1')
    plt.ylabel('Feature 2')
    plt.title('Decision Boundary of SVM')
    plt.show()

plot_decision_boundary(best_rbf_svm, X, y)

# Linear SVM example
linear_svm = svm.SVC(kernel='linear')
linear_svm.fit(X_train, y_train)
y_pred_linear = linear_svm.predict(X_test)
accuracy_linear = accuracy_score(y_test, y_pred_linear)
print(f"Linear SVM Accuracy: {accuracy_linear}")
plot_decision_boundary(linear_svm, X, y) #Plot decision boundary for linear SVM
```

**Explanation:**

1.  **Data Generation:** `make_circles` creates a dataset with concentric circles, which is not linearly separable.
2.  **Data Splitting:** Splits the data into training and testing sets.
3.  **Parameter Grid:**  Defines the range of `C` (regularization) and `gamma` (kernel coefficient) values to explore during grid search.
4.  **Model Creation:** `svm.SVC(kernel='rbf')` creates an SVM model using the RBF kernel.
5.  **Grid Search:** `GridSearchCV` performs cross-validation (5-fold) to find the best `C` and `gamma` values based on accuracy.
6.  **Model Fitting:** The grid search fits the model to the training data for each combination of hyperparameters.
7.  **Best Parameters:** The best parameters found by grid search are printed.
8.  **Best Model:** The best model (with the optimal hyperparameters) is obtained.
9.  **Prediction:** Predictions are made on the test set.
10. **Evaluation:** The model's accuracy and classification report are printed.

## 8. Comparing Linear and Non-linear SVM

| Feature          | Linear SVM                                 | Non-linear SVM                               |
| ---------------- | ------------------------------------------ | -------------------------------------------- |
| Data Separability | Linearly separable data                   | Non-linearly separable data                  |
| Kernel           | Linear kernel (x · y)                      | Polynomial, RBF, Sigmoid kernels            |
| Complexity       | Simpler, computationally less expensive    | More complex, potentially more expensive    |
| Parameters       | Regularization parameter (C)              | C, and kernel-specific parameters (e.g., gamma, degree) |
| Overfitting      | Less prone to overfitting (with good C)   | More prone to overfitting (requires careful parameter tuning) |
| Interpretation   | Easier to interpret                        | Harder to interpret                          |

## 9. Important Points to Remember

*   **Kernel Choice:** The choice of kernel function depends on the data. RBF is a good default choice, but other kernels might be more suitable for specific problems.
*   **Parameter Tuning:** Careful tuning of kernel parameters is crucial for optimal performance.
*   **Overfitting:** Non-linear SVMs can easily overfit if the parameters are not chosen carefully.  Use cross-validation and grid search to avoid this.
*   **Computational Cost:** Non-linear SVMs can be computationally expensive, especially with large datasets.
*   **Scaling:** Feature scaling (e.g., StandardScaler) is often essential for non-linear SVMs to prevent features with larger values from dominating the distance calculations.
*   **Interpretability:** Linear SVMs are generally more interpretable than non-linear SVMs.

## 10. Practice Questions/Exercises

**Question 1:** Explain the purpose of a kernel function in a non-linear SVM.

**Answer:** Kernel functions provide a way to compute the dot product of two vectors in a high-dimensional feature space without explicitly computing the transformation. They implicitly map input data into a higher-dimensional space, allowing SVMs to create non-linear decision boundaries by performing linear separation in that transformed space.

**Question 2:** What is the effect of increasing the `gamma` parameter in the RBF kernel? What are the potential consequences?

**Answer:** Increasing the `gamma` parameter in the RBF kernel makes the influence of each data point smaller. This leads to a more complex and wiggly decision boundary that is more sensitive to individual data points. A high `gamma` value can lead to overfitting, where the model performs well on the training data but poorly on unseen data.

**Question 3:** Why is cross-validation important when tuning the hyperparameters of a non-linear SVM?

**Answer:** Cross-validation provides a more reliable estimate of the model's generalization performance than a single train-test split. It helps prevent overfitting by evaluating the model on multiple subsets of the data. By using cross-validation during hyperparameter tuning (e.g., with grid search), you can select parameters that lead to better performance on unseen data.

**Question 4:** Compare and contrast the RBF kernel and the Polynomial kernel.  Include strengths and weaknesses of each.

**Answer:**
*   **RBF Kernel:**
    *   **Formula:** `K(x, y) = exp(-gamma * ||x - y||^2)`
    *   **Maps to:** Infinite-dimensional feature space
    *   **Parameter:** `gamma` controls the width of the Gaussian kernel.
    *   **Strengths:** Often performs well in various applications; good default choice.
    *   **Weaknesses:** Can be computationally expensive; Parameter tuning can be tricky (finding the right `gamma`).

*   **Polynomial Kernel:**
    *   **Formula:** `K(x, y) = (x · y + c)^d`
    *   **Maps to:** Polynomial feature space (degree `d`)
    *   **Parameter:** `d` (degree of the polynomial) controls the complexity.
    *   **Strengths:** Can capture polynomial relationships between features.
    *   **Weaknesses:** High degree can lead to overfitting; Less commonly used than RBF.

**Question 5:** You have a dataset that you suspect is non-linearly separable. Would you start with a linear SVM or a non-linear SVM? Explain your reasoning.

**Answer:** I would start with a non-linear SVM, specifically with the RBF kernel.  Here's why:

*   **Assumption:** I suspect the data is non-linearly separable.  A linear SVM would likely perform poorly in this scenario.
*   **RBF as a Good Default:** The RBF kernel is often considered a good default choice for non-linear problems. It can handle complex decision boundaries and generally provides good performance.
*   **Experimentation:** I would still compare the performance to that of a linear SVM (with a tuned C parameter).  If the data *is* close to linearly separable, the linear SVM might surprisingly perform well and be computationally cheaper.
*   **Model Complexity:**  A non-linear SVM automatically allows the decision boundary to take a non-linear shape, unlike a linear SVM which is restricted to be a straight line.
