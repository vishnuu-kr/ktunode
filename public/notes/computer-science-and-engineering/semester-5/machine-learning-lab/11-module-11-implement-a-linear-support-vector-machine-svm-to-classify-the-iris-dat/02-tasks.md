---
title: "Tasks:"
subject: "MACHINE LEARNING LAB"
module: "Module 11: Implement a Linear Support Vector Machine (SVM) to classify the Iris dataset. Visualize the decision boundary and discuss how the margin is determined."
branch: "Computer Science and Engineering"
semester: 5
topicId: "684162770fc9aa1fdbc8b974"
status: "completed"
scrapedAt: "2026-05-20T16:47:38.569Z"
---
# MACHINE LEARNING LAB - Module 11: Linear SVM on Iris Dataset

## Topic: Implementing Linear SVM for Iris Dataset Classification & Decision Boundary Visualization

**Description:** This module focuses on implementing a Linear Support Vector Machine (SVM) to classify the Iris dataset. You will learn to visualize the decision boundary and understand how the margin is determined.

**Learning Outcomes:**

*   Understand the fundamental concepts of Support Vector Machines (SVMs).
*   Implement a Linear SVM using Python and relevant libraries (e.g., scikit-learn).
*   Preprocess the Iris dataset for use with an SVM.
*   Train a Linear SVM model on the Iris dataset.
*   Evaluate the performance of the trained SVM model.
*   Visualize the decision boundary of the Linear SVM for two features of the Iris dataset.
*   Explain the concept of margin in SVM and its determination.
*   Discuss the impact of hyperparameters (e.g., C) on the margin and classification accuracy.

---

## 1. Key Concepts and Definitions:

*   **Support Vector Machine (SVM):** A supervised machine learning algorithm used for classification and regression.  SVM aims to find the optimal hyperplane that separates different classes in the feature space with the maximum margin.

*   **Hyperplane:** A decision boundary that separates the data points into different classes. In a 2D space, the hyperplane is a line. In a 3D space, it's a plane.  In n-dimensional space, it's called a hyperplane.

*   **Margin:** The distance between the hyperplane and the closest data points from each class.  SVM aims to maximize this margin.  A larger margin generally leads to better generalization performance.

*   **Support Vectors:** The data points that lie closest to the hyperplane and influence its position and orientation.  These are the critical elements in defining the margin and, therefore, the decision boundary.

*   **Linear SVM:** A type of SVM that uses a linear kernel function. It is suitable for data that is linearly separable.

*   **Kernel Function:** A function that defines how the similarity between data points is calculated.  Linear kernel is simply the dot product of the two vectors.  Other kernels, like RBF or polynomial, allow SVM to handle non-linearly separable data.

*   **C Parameter (Regularization Parameter):** A hyperparameter that controls the trade-off between maximizing the margin and minimizing the classification error on the training data.

    *   **Small C:**  A small C value encourages a larger margin, even if it means misclassifying some training points.  This can lead to higher bias but lower variance, which might prevent overfitting.

    *   **Large C:** A large C value tries to classify all training data points correctly, even if it results in a smaller margin. This can lead to lower bias but higher variance, potentially overfitting the data.

*   **Bias-Variance Tradeoff:**  The balance between underfitting (high bias) and overfitting (high variance). SVM, through the C parameter, allows us to adjust this balance.

*   **Iris Dataset:** A classic dataset in machine learning containing measurements of sepal length, sepal width, petal length, and petal width for three species of iris flowers (setosa, versicolor, and virginica).

---

## 2. Implementing Linear SVM with Python and Scikit-learn:

```python
# Import necessary libraries
import numpy as np
import matplotlib.pyplot as plt
from sklearn import datasets
from sklearn.model_selection import train_test_split
from sklearn.svm import LinearSVC
from sklearn.metrics import accuracy_score

# 1. Load the Iris dataset
iris = datasets.load_iris()

# 2. Select two features for visualization (e.g., sepal length and sepal width)
X = iris.data[:, :2]  # Select the first two features
y = iris.target

# 3. Split the dataset into training and testing sets
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.3, random_state=42)

# 4. Create a Linear SVM classifier
svm = LinearSVC(C=1.0, dual="auto") # C is the regularization parameter.  dual="auto" to let sklearn pick.

# 5. Train the model
svm.fit(X_train, y_train)

# 6. Make predictions on the test set
y_pred = svm.predict(X_test)

# 7. Evaluate the model
accuracy = accuracy_score(y_test, y_pred)
print(f"Accuracy: {accuracy}")

# 8. Visualize the decision boundary
def plot_decision_boundary(X, y, model, title="Decision Boundary"):
    """Plots the decision boundary of a classifier."""
    x_min, x_max = X[:, 0].min() - 1, X[:, 0].max() + 1
    y_min, y_max = X[:, 1].min() - 1, X[:, 1].max() + 1
    xx, yy = np.meshgrid(np.arange(x_min, x_max, 0.02),
                         np.arange(y_min, y_max, 0.02))
    Z = model.predict(np.c_[xx.ravel(), yy.ravel()])
    Z = Z.reshape(xx.shape)
    plt.contourf(xx, yy, Z, cmap=plt.cm.coolwarm, alpha=0.8)
    plt.scatter(X[:, 0], X[:, 1], c=y, cmap=plt.cm.coolwarm, edgecolors='k')
    plt.xlabel('Sepal length')
    plt.ylabel('Sepal width')
    plt.title(title)
    plt.show()


plot_decision_boundary(X, y, svm, "Linear SVM Decision Boundary on Iris Dataset (Sepal Length vs. Sepal Width)")
```

**Explanation:**

1.  **Import Libraries:** Imports necessary libraries: `numpy` for numerical operations, `matplotlib` for plotting, `sklearn.datasets` to load the Iris dataset, `sklearn.model_selection` for splitting the data, `sklearn.svm` for the Linear SVM implementation, and `sklearn.metrics` to evaluate the model.

2.  **Load the Iris Dataset:** Loads the Iris dataset using `datasets.load_iris()`.

3.  **Select Features:** Selects the first two features (sepal length and sepal width) from the dataset for visualization purposes. This simplifies the decision boundary to a 2D plot.

4.  **Split the Dataset:** Splits the data into training and testing sets using `train_test_split()`.  A `test_size` of 0.3 means 30% of the data is used for testing, and 70% for training. `random_state` ensures reproducibility.

5.  **Create and Train the Linear SVM:** Creates a `LinearSVC` object with a regularization parameter `C=1.0`. `dual="auto"` is set to let scikit-learn choose the best algorithm for the problem.  The model is then trained using the `fit()` method with the training data.

6.  **Make Predictions:** Predicts the class labels for the test set using the `predict()` method.

7.  **Evaluate the Model:** Calculates the accuracy of the model using `accuracy_score()` and prints the result.

8.  **Visualize the Decision Boundary:**  The `plot_decision_boundary` function generates a contour plot showing the decision boundary learned by the SVM.  It uses `np.meshgrid` to create a grid of points, predicts the class for each point on the grid, and then uses `plt.contourf` to plot the decision regions.  It also plots the data points themselves.

---

## 3. Understanding the Margin:

*   The margin is the region between the hyperplane and the support vectors.  It is calculated as the distance from the hyperplane to the closest data points (support vectors) on each side.

*   **Geometric Margin:** The perpendicular distance from the decision boundary to the nearest data points (support vectors).  The goal of SVM is to maximize this geometric margin.

*   In the `LinearSVC` implementation, maximizing the margin is directly related to minimizing the norm of the weight vector (w) associated with the hyperplane (w.x + b = 0). The margin is inversely proportional to the norm of the weight vector:  Margin = 2 / ||w||.

*   The C parameter in `LinearSVC` controls the penalty for misclassifying training examples.  A smaller C allows for a larger margin but might misclassify more training points. A larger C aims to classify all training points correctly, potentially resulting in a smaller margin.

*   **Effect of C on Margin:**

    *   **Low C:** Wider margin, but more classification errors allowed (potentially underfitting).

    *   **High C:** Narrower margin, but fewer classification errors allowed (potentially overfitting).

---

## 4. Discussion of Margin Determination and Hyperparameters:

*   The margin is determined by the support vectors and the orientation of the hyperplane. The SVM algorithm aims to find the hyperplane that maximizes the margin while minimizing classification errors (controlled by the `C` parameter).

*   **Hyperparameter Tuning:** Selecting the optimal value for the `C` parameter is crucial for achieving good performance. Techniques like cross-validation are often used to find the best `C` value.  You would split your *training* data further into training and validation sets, train the SVM with different C values, and select the C value that yields the best performance on the validation set.

*   **Impact of Feature Scaling:** SVM is sensitive to feature scaling.  It's generally recommended to scale your features (e.g., using `StandardScaler` or `MinMaxScaler` from scikit-learn) before training an SVM model. Feature scaling ensures that all features contribute equally to the distance calculations.

```python
from sklearn.preprocessing import StandardScaler

# Scale the features
scaler = StandardScaler()
X_train_scaled = scaler.fit_transform(X_train)
X_test_scaled = scaler.transform(X_test)

# Train the SVM on the scaled data
svm_scaled = LinearSVC(C=1.0, dual="auto")
svm_scaled.fit(X_train_scaled, y_train)

# Evaluate the model
y_pred_scaled = svm_scaled.predict(X_test_scaled)
accuracy_scaled = accuracy_score(y_test, y_pred_scaled)
print(f"Accuracy (Scaled Data): {accuracy_scaled}")

plot_decision_boundary(X_train_scaled, y_train, svm_scaled, "Linear SVM Decision Boundary on Iris Dataset (Scaled Data)")
```

---

## 5. Practice Questions/Exercises:

1.  **What are Support Vectors and why are they important in SVM?**

    *   **Answer:** Support vectors are the data points that lie closest to the hyperplane. They are crucial because they directly influence the position and orientation of the hyperplane and, therefore, the margin.  The SVM algorithm only needs these points to define the decision boundary; all other points are irrelevant.

2.  **Explain the role of the C parameter in Linear SVM. What happens if you increase or decrease C?**

    *   **Answer:** The C parameter controls the regularization strength.  It's a trade-off between maximizing the margin and minimizing the classification error on the training data.

        *   **Increasing C:** Penalizes misclassification of training examples more heavily.  This leads to a smaller margin but potentially higher accuracy on the training data. It can lead to overfitting.

        *   **Decreasing C:** Allows for a larger margin, even if it means misclassifying some training examples.  It can lead to underfitting.

3.  **How does feature scaling affect the performance of a Linear SVM? Why is it important to scale features?**

    *   **Answer:** SVMs are sensitive to feature scaling because they rely on distance calculations. If features have different scales, the feature with the larger scale will dominate the distance calculations. This can lead to biased results. Feature scaling ensures that all features contribute equally, leading to better model performance.

4.  **Modify the provided code to use petal length and petal width instead of sepal length and sepal width.  How does the decision boundary change? Why?**

    *   **Answer:** To use petal length and petal width, change `X = iris.data[:, :2]` to `X = iris.data[:, 2:]`. The decision boundary will likely be different because petal length and petal width are generally more informative features for distinguishing between the Iris species, leading to better separation and a more distinct decision boundary.

5.  **Implement a cross-validation loop to find the optimal value of C for the Linear SVM.  Use 5-fold cross-validation and search for C values in the range of [0.01, 0.1, 1, 10, 100].**

    ```python
    from sklearn.model_selection import cross_val_score

    C_values = [0.01, 0.1, 1, 10, 100]
    best_C = None
    best_accuracy = 0

    for C in C_values:
        svm = LinearSVC(C=C, dual="auto") # Ensure dual='auto' for compatibility
        scores = cross_val_score(svm, X_train, y_train, cv=5, scoring='accuracy') #5-fold cross validation
        mean_accuracy = scores.mean()

        print(f"C: {C}, Mean Accuracy: {mean_accuracy}")

        if mean_accuracy > best_accuracy:
            best_accuracy = mean_accuracy
            best_C = C

    print(f"Best C: {best_C}, Best Accuracy: {best_accuracy}")

    # Train the final model with the best C value
    final_svm = LinearSVC(C=best_C, dual="auto")
    final_svm.fit(X_train, y_train)

    # Evaluate the final model on the test set
    y_pred = final_svm.predict(X_test)
    accuracy = accuracy_score(y_test, y_pred)
    print(f"Test Accuracy with Best C: {accuracy}")

    ```

---

## 6. Important Points to Remember:

*   SVM aims to find the optimal hyperplane that maximizes the margin between classes.
*   Support vectors are the crucial data points that define the margin and hyperplane.
*   The C parameter controls the trade-off between margin maximization and misclassification errors.
*   Feature scaling is generally recommended for SVM to ensure equal contribution from all features.
*   Hyperparameter tuning (e.g., using cross-validation) is essential to find the optimal C value for a given dataset.
*   Linear SVM is suitable for linearly separable data. For non-linearly separable data, consider using kernel functions (e.g., RBF, polynomial).
