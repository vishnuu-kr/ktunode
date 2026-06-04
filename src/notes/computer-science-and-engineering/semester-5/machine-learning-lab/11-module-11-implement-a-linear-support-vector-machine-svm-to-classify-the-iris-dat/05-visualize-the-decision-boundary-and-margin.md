---
title: "Visualize the decision boundary and margin."
subject: "MACHINE LEARNING LAB"
module: "Module 11: Implement a Linear Support Vector Machine (SVM) to classify the Iris dataset. Visualize the decision boundary and discuss how the margin is determined."
branch: "Computer Science and Engineering"
semester: 5
topicId: "684162770fc9aa1fdbc8b977"
status: "completed"
scrapedAt: "2026-05-20T16:47:40.752Z"
---
# MACHINE LEARNING LAB - Module 11: Linear SVM - Visualizing Decision Boundary and Margin (Iris Dataset)

**Subject:** MACHINE LEARNING LAB
**Module:** Module 11: Implement a Linear Support Vector Machine (SVM) to classify the Iris dataset.
**Topic:** Visualize the decision boundary and margin.

**Description:** This module focuses on visualizing the decision boundary and margin of a Linear Support Vector Machine (SVM) trained on the Iris dataset. We'll understand how the SVM determines the optimal decision boundary and how the margin affects classification performance.

**Learning Outcomes:**

*   Understand the concept of a decision boundary in the context of a linear SVM.
*   Visualize the decision boundary and margins using Python libraries (e.g., Matplotlib, Seaborn, scikit-learn).
*   Explain how the margin is determined by the support vectors.
*   Discuss the impact of the 'C' parameter on the margin and model complexity.
*   Interpret the visualized decision boundary and margin to understand the SVM's classification behavior.

## 1. Key Concepts and Definitions

*   **Support Vector Machine (SVM):** A supervised learning algorithm used for classification and regression. SVMs aim to find the optimal hyperplane that separates data points of different classes with the largest possible margin.
*   **Hyperplane:** A generalization of a line (in 2D) or a plane (in 3D) to higher-dimensional spaces. It's the decision boundary used by SVMs to separate classes. For the Iris dataset, using only two features, the hyperplane is a simple line.
*   **Decision Boundary:** The hyperplane that separates data points belonging to different classes.  Points on one side of the decision boundary are classified as belonging to one class, and points on the other side are classified as belonging to another class.
*   **Margin:** The distance between the decision boundary and the closest data points from each class. A larger margin generally indicates better generalization performance.
*   **Support Vectors:** The data points closest to the decision boundary that influence the position and orientation of the hyperplane. Only these points are critical in defining the decision boundary and the margin.
*   **'C' Parameter (Regularization Parameter):**  Controls the trade-off between achieving a low training error and maximizing the margin.
    *   **Small 'C':** Favors a larger margin, even if it misclassifies some data points (soft margin). This leads to higher bias and lower variance. The SVM tries to find a wider street even if a few cars are parked on the sidewalk.
    *   **Large 'C':**  Tries to classify all training data points correctly, potentially resulting in a smaller margin and overfitting (hard margin). This leads to lower bias and higher variance. The SVM is strict and wants the widest street with no cars parked on the sidewalk.
*   **Linear Kernel:** The simplest kernel function used in SVMs. It defines the decision boundary as a linear hyperplane. The Iris dataset is suitable for the linear kernel because some classes are linearly separable.

## 2. Visualizing the Decision Boundary and Margin with Python (Iris Dataset)

This section outlines the Python code for visualizing the decision boundary and margin using scikit-learn and Matplotlib.

```python
import numpy as np
import matplotlib.pyplot as plt
from sklearn import datasets
from sklearn.model_selection import train_test_split
from sklearn.svm import SVC
from sklearn.metrics import accuracy_score

# 1. Load the Iris Dataset
iris = datasets.load_iris()
# Using only the first two features for easy visualization
X = iris.data[:, :2]
y = iris.target

# Filter out the Iris-Virginica class (index 2) to make it a binary classification problem
X = X[y != 2]
y = y[y != 2]  # Update the target values

# 2. Split the Data into Training and Testing Sets
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)

# 3. Train a Linear SVM Classifier
# Experiment with different values of C
C = 1.0  # Regularization parameter
clf = SVC(kernel='linear', C=C)
clf.fit(X_train, y_train)

# 4. Make Predictions on the Test Set
y_pred = clf.predict(X_test)

# 5. Evaluate the Model
accuracy = accuracy_score(y_test, y_pred)
print(f"Accuracy: {accuracy}")

# 6. Visualize the Decision Boundary and Margin
def plot_decision_boundary(X, y, model, title):
    h = .02  # Step size in the mesh
    x_min, x_max = X[:, 0].min() - 1, X[:, 0].max() + 1
    y_min, y_max = X[:, 1].min() - 1, X[:, 1].max() + 1
    xx, yy = np.meshgrid(np.arange(x_min, x_max, h), np.arange(y_min, y_max, h))

    Z = model.predict(np.c_[xx.ravel(), yy.ravel()])
    Z = Z.reshape(xx.shape)

    plt.contourf(xx, yy, Z, cmap=plt.cm.RdBu, alpha=0.8)

    # Plot also the training points
    plt.scatter(X[:, 0], X[:, 1], c=y, cmap=plt.cm.RdBu, edgecolors='k')
    plt.xlabel('Sepal length')
    plt.ylabel('Sepal width')
    plt.xlim(xx.min(), xx.max())
    plt.ylim(yy.min(), yy.max())
    plt.xticks(())
    plt.yticks(())
    plt.title(title)

    # Plot the support vectors
    sv = model.support_vectors_
    plt.scatter(sv[:, 0], sv[:, 1], s=100, facecolors='none', edgecolors='k', label='Support Vectors')
    plt.legend()


plt.figure(figsize=(8, 6))
plot_decision_boundary(X, y, clf, f"Linear SVM Decision Boundary (C={C})")
plt.show()
```

**Explanation:**

1.  **Load and Prepare Data:** Loads the Iris dataset and selects the first two features (sepal length and sepal width) for visualization. It also filters for binary classification to make visualization easier.
2.  **Data Splitting:** Splits the data into training and testing sets.
3.  **Train the SVM Classifier:** Creates an `SVC` object with a linear kernel and the specified `C` value and trains it on the training data.
4.  **Make Predictions and Evaluate:** Predicts on the test set and calculates the accuracy.
5.  **Visualize the Decision Boundary and Margin:**
    *   Creates a meshgrid of points covering the feature space.
    *   Uses the trained SVM to predict the class for each point in the meshgrid.
    *   Plots the decision boundary as a contour plot.
    *   Plots the training data points with different colors for different classes.
    *   Plots the support vectors.  Support vectors are highlighted with a distinct marker.
6.  **Interpretation:** The plot shows the decision boundary (the line separating the two classes), the data points, and the support vectors.

## 3. How the Margin is Determined by Support Vectors

*   The margin is defined as the distance between the decision boundary and the closest data points from each class.
*   These closest data points are the **support vectors**.
*   The SVM algorithm aims to find the hyperplane that maximizes this margin.
*   The margin is centered around the decision boundary.
*   The support vectors are the critical points that define the margin; if their positions change, the decision boundary and margin will also change.  Changing other non-support vector data points typically *won't* affect the boundary.

## 4. Impact of the 'C' Parameter on the Margin and Model Complexity

The 'C' parameter plays a crucial role in determining the margin and model complexity.  By adjusting 'C', you can control the trade-off between having a wide margin versus correctly classifying all training data points.

*   **Small 'C':**
    *   **Wider Margin:** The SVM prioritizes a wider margin, even if it means misclassifying some training points.
    *   **Higher Bias, Lower Variance:** The model is less sensitive to individual data points, leading to a simpler decision boundary and potentially underfitting.
    *   **Generalization:**  Tends to generalize better to unseen data when the underlying relationship is relatively simple, but there are noisy data points.

*   **Large 'C':**
    *   **Narrower Margin:** The SVM tries to classify all training points correctly, potentially resulting in a smaller margin.
    *   **Lower Bias, Higher Variance:** The model is more sensitive to individual data points, leading to a more complex decision boundary and potentially overfitting.
    *   **Overfitting:** Can lead to poor performance on unseen data because the model has learned the noise in the training data.

**Example (Impact of 'C' on Iris Dataset):**

*   **C = 0.1:** The decision boundary might be a simpler line, misclassifying some points but achieving a wider margin.  Good if there's noise in the data.
*   **C = 100:** The decision boundary might be more complex, perfectly separating the training data but potentially overfitting to the specific characteristics of the training set, leading to a smaller margin.

**How to Find the Optimal 'C':**

*   Use techniques like cross-validation (e.g., k-fold cross-validation) to evaluate the model's performance on different 'C' values.
*   Choose the 'C' value that provides the best balance between training accuracy and generalization performance on unseen data (as measured by validation accuracy).

## 5. Interpreting the Visualized Decision Boundary and Margin

The visualized decision boundary and margin provide insights into the SVM's classification behavior:

*   **Decision Boundary Location:** The position and orientation of the decision boundary indicate how the SVM separates the two classes.
*   **Margin Width:** A wider margin suggests a more robust separation between the classes.  A narrow margin might indicate that the classes are difficult to separate linearly, or that the model is overfitting.
*   **Support Vectors:** The location of the support vectors highlights the data points that are most critical for defining the decision boundary and margin.
*   **Misclassified Points:** Data points that fall on the wrong side of the decision boundary are misclassified by the SVM.  The number of misclassified points depends on the 'C' value.
*   **Overall Fit:** By observing the decision boundary and margin in relation to the data points, you can assess whether the SVM is fitting the data well or overfitting.

## 6. Important Points to Remember

*   The 'C' parameter is crucial for controlling the trade-off between margin maximization and error minimization.
*   Support vectors are the critical data points that define the decision boundary and margin.
*   Visualizing the decision boundary and margin helps in understanding the SVM's classification behavior and identifying potential overfitting or underfitting issues.
*   Experiment with different 'C' values and feature combinations to find the optimal SVM model for a given dataset.
*   For non-linearly separable data, consider using non-linear kernels (e.g., RBF kernel).

## 7. Practice Questions and Exercises

**Question 1:** What is the role of support vectors in a linear SVM?

**Answer:** Support vectors are the data points closest to the decision boundary that directly influence its position and orientation. They are the only points that matter for defining the margin.

**Question 2:** Explain the impact of a very large 'C' value on the SVM model.

**Answer:** A large 'C' value encourages the SVM to classify all training points correctly, potentially leading to a narrower margin and overfitting. The model becomes very sensitive to the training data and may not generalize well to unseen data.

**Question 3:** What does the margin represent in an SVM?

**Answer:** The margin is the distance between the decision boundary and the closest data points (support vectors) from each class. A larger margin indicates better separation between the classes and generally improves generalization performance.

**Exercise 1:**

Modify the provided Python code to experiment with different 'C' values (e.g., 0.01, 0.1, 1, 10, 100). Observe how the decision boundary and margin change with different 'C' values.  Record your observations.

**Exercise 2:**

Modify the Python code to use all four features of the Iris dataset.  How does this change the complexity of visualization? Why? What alternative methods might you use to visualize higher dimensional decision boundaries? (Hint: Consider dimensionality reduction techniques)

**Exercise 3:**

Instead of manually filtering out `Iris-Virginica`, try a one-vs-rest approach using `make_classification` and train on a synthetic dataset that has 3 classes. Modify the decision boundary plot to show three different regions with associated margins. How would you represent the margin if there are three boundaries?
