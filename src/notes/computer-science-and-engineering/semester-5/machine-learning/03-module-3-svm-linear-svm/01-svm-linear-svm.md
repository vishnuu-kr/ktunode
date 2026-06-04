---
title: "SVM – Linear SVM"
subject: "MACHINE LEARNING"
module: "Module 3: SVM – Linear SVM"
branch: "Computer Science and Engineering"
semester: 5
topicId: "684162760fc9aa1fdbc8b5c4"
status: "completed"
scrapedAt: "2026-05-20T16:46:40.589Z"
---
# MACHINE LEARNING - Module 3: SVM – Linear SVM

## Topic: SVM – Linear SVM

**Description:** This topic focuses on Linear Support Vector Machines (SVMs), a powerful and widely used supervised learning algorithm for classification tasks. We will explore the core concepts, mathematical formulation, and practical applications of linear SVMs.

**Learning Outcomes:** Upon completion of this topic, you will be able to:

1.  **Explain the fundamental concepts of SVMs, including hyperplanes, margin, and support vectors.**
2.  **Describe the goal of SVM: maximizing the margin between classes.**
3.  **Formulate the optimization problem for a linear SVM.**
4.  **Explain the role of the regularization parameter (C) and its impact on the model.**
5.  **Apply linear SVMs to solve classification problems using libraries like Scikit-learn.**
6.  **Interpret the results and evaluate the performance of a linear SVM model.**

---

### 1. Fundamental Concepts of SVMs

*   **Hyperplane:** In an *n*-dimensional space, a hyperplane is an *(n-1)*-dimensional subspace.  For example:
    *   In 2D (a plane), a hyperplane is a line.
    *   In 3D, a hyperplane is a 2D plane.
    *   In higher dimensions, it's a similar flat subspace.

*   **Separating Hyperplane:**  A hyperplane that divides the data points of different classes.  The goal of SVM is to find the *best* separating hyperplane.

*   **Margin:** The distance between the hyperplane and the closest data point from either class. A larger margin generally indicates better generalization performance.  SVMs aim to maximize this margin.

*   **Support Vectors:** The data points that lie closest to the hyperplane and influence the position and orientation of the hyperplane. Only these points are critical in defining the separating hyperplane; all other training points are irrelevant once the support vectors are known.

*   **Illustration:** Imagine two groups of dots (red and blue) scattered on a piece of paper. A linear SVM aims to draw a straight line (the hyperplane in 2D) that best separates the red dots from the blue dots, while keeping a large space (the margin) between the line and the closest dots from each group. These closest dots are the support vectors.

### 2. Goal of SVM: Maximizing the Margin

*   **Maximum Margin Separator:**  The hyperplane that maximizes the margin between the two classes. This maximization helps in achieving better generalization and robustness to unseen data.

*   **Intuition:**  A larger margin implies that the classifier is more confident in its predictions.  Small variations in the test data are less likely to cause misclassifications if the margin is wide.

*   **Why Maximize?**
    *   **Better Generalization:** Reduces the risk of overfitting to the training data.
    *   **Robustness:**  Less sensitive to noisy data and outliers.

### 3. Optimization Problem for a Linear SVM

*   **Mathematical Formulation:**

    *   Given a training dataset {(x<sub>i</sub>, y<sub>i</sub>)}, where x<sub>i</sub> is the feature vector and y<sub>i</sub> is the class label (+1 or -1).

    *   The equation of the hyperplane is:  `w<sup>T</sup>x + b = 0`, where:
        *   `w` is the weight vector (normal to the hyperplane).
        *   `x` is the input feature vector.
        *   `b` is the bias (offset from the origin).

    *   **Goal:** Find `w` and `b` that maximize the margin subject to the constraint that all data points are classified correctly:

        *   `y<sub>i</sub>(w<sup>T</sup>x<sub>i</sub> + b) >= 1  for all i`

    *   **Margin:**  The margin is equal to `2 / ||w||`, where `||w||` is the Euclidean norm of `w`.

    *   **Optimization Problem:**
        *   Minimize:  `1/2 * ||w||<sup>2</sup>`  (equivalent to maximizing the margin)
        *   Subject to: `y<sub>i</sub>(w<sup>T</sup>x<sub>i</sub> + b) >= 1  for all i`

*   **Solving the Optimization Problem:**  This is a quadratic programming (QP) problem.  Solvers exist to find the optimal `w` and `b`. Libraries like Scikit-learn handle this automatically.

### 4. Role of the Regularization Parameter (C)

*   **Soft Margin SVM:** Allows for some misclassifications in the training data.  This is crucial when the data is not perfectly linearly separable.

*   **Regularization Parameter (C):**  Controls the trade-off between:
    *   **Maximizing the margin:**  A larger margin leads to better generalization.
    *   **Minimizing the training error:**  Classifying all training points correctly.

*   **Impact of C:**

    *   **High C (Small Regularization):**
        *   Penalizes misclassifications more heavily.
        *   Tries to classify all training points correctly.
        *   May lead to a smaller margin.
        *   Risk of overfitting, especially if the data is noisy.

    *   **Low C (Large Regularization):**
        *   Allows more misclassifications.
        *   Tries to find a larger margin, even if it means misclassifying some points.
        *   Can prevent overfitting.
        *   May lead to underfitting if C is too low.

*   **Choosing the Right C:**  Typically done using techniques like cross-validation. You experiment with different values of C and select the one that gives the best performance on a validation set.

### 5. Applying Linear SVMs with Scikit-learn

*   **Example Code:**

```python
from sklearn import svm
from sklearn.model_selection import train_test_split
from sklearn.metrics import accuracy_score
import numpy as np

# Sample Data (replace with your actual data)
X = np.array([[1, 2], [1.5, 1.8], [5, 8], [8, 8], [1, 0.6], [9, 11]])
y = np.array([0, 0, 1, 1, 0, 1])  # 0 and 1 represent the two classes

# Split data into training and testing sets
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)

# Create a linear SVM classifier
clf = svm.SVC(kernel='linear', C=1.0)  # C is the regularization parameter

# Train the classifier
clf.fit(X_train, y_train)

# Make predictions on the test set
y_pred = clf.predict(X_test)

# Evaluate the model
accuracy = accuracy_score(y_test, y_pred)
print("Accuracy:", accuracy)

# Get the support vectors
support_vectors = clf.support_vectors_
print("Support Vectors:\n", support_vectors)

# Get the coefficients of the hyperplane (w)
w = clf.coef_
print("Coefficients (w):\n", w)

# Get the intercept (b)
b = clf.intercept_
print("Intercept (b):\n", b)
```

*   **Explanation:**
    *   `svm.SVC(kernel='linear', C=1.0)`: Creates a Support Vector Classifier with a linear kernel.  `C=1.0` sets the regularization parameter.
    *   `clf.fit(X_train, y_train)`: Trains the model using the training data.
    *   `clf.predict(X_test)`: Predicts the class labels for the test data.
    *   `accuracy_score(y_test, y_pred)`: Calculates the accuracy of the model.
    *   `clf.support_vectors_`:  Returns the support vectors.
    *   `clf.coef_`:  Returns the coefficients of the separating hyperplane (w).
    *   `clf.intercept_`: Returns the intercept term (b).

### 6. Interpreting Results and Evaluating Performance

*   **Accuracy:**  The proportion of correctly classified instances.  A common metric, but can be misleading for imbalanced datasets.

*   **Precision:**  Out of all the instances predicted as positive, what proportion are actually positive? `Precision = True Positives / (True Positives + False Positives)`

*   **Recall:**  Out of all the actual positive instances, what proportion are correctly predicted as positive? `Recall = True Positives / (True Positives + False Negatives)`

*   **F1-score:**  The harmonic mean of precision and recall.  Provides a balanced measure of performance. `F1-score = 2 * (Precision * Recall) / (Precision + Recall)`

*   **Confusion Matrix:**  A table that summarizes the performance of a classification model by showing the counts of true positives, true negatives, false positives, and false negatives.

*   **Scikit-learn provides functions for calculating these metrics:**

```python
from sklearn.metrics import classification_report, confusion_matrix

# Generate the classification report
print(classification_report(y_test, y_pred))

# Generate the confusion matrix
print(confusion_matrix(y_test, y_pred))
```

---

### Practice Questions/Exercises

1.  **What is the purpose of the margin in SVM?**

    *   *Answer:* The margin is the distance between the separating hyperplane and the closest data point from either class. Maximizing the margin leads to better generalization and robustness to unseen data.

2.  **Explain the role of support vectors in defining the hyperplane.**

    *   *Answer:* Support vectors are the data points closest to the hyperplane.  They are the only points that affect the position and orientation of the hyperplane.  Removing other data points will not change the hyperplane once the support vectors are known.

3.  **How does the regularization parameter `C` affect the SVM model?  Explain the difference between a high `C` and a low `C` value.**

    *   *Answer:* `C` controls the trade-off between maximizing the margin and minimizing the training error.  A high `C` value penalizes misclassifications more heavily, leading to a smaller margin and potentially overfitting.  A low `C` value allows more misclassifications, leading to a larger margin and potentially underfitting.

4.  **Consider the following dataset:**

    | Feature 1 | Feature 2 | Class |
    |---|---|---|
    | 1 | 1 | 0 |
    | 2 | 2 | 0 |
    | 4 | 5 | 1 |
    | 5 | 4 | 1 |

    **Write Python code using Scikit-learn to train a linear SVM classifier on this dataset and predict the class for the point (3, 3).**

    *   *Answer:*

    ```python
    from sklearn import svm
    import numpy as np

    X = np.array([[1, 1], [2, 2], [4, 5], [5, 4]])
    y = np.array([0, 0, 1, 1])

    clf = svm.SVC(kernel='linear', C=1.0)
    clf.fit(X, y)

    prediction = clf.predict([[3, 3]])
    print("Prediction for (3, 3):", prediction)
    ```

5.  **What are the advantages and disadvantages of Linear SVMs?**

    *   *Answer:*
        *   *Advantages:*
            *   Effective in high dimensional spaces.
            *   Relatively memory efficient because it uses a subset of training points in the decision function (support vectors).
            *   Versatile: Different Kernel functions can be specified for the decision function.
        *   *Disadvantages:*
            *   Can overfit if the number of features is much greater than the number of samples.
            *   Not suitable for non-linear data without using kernel trick.
            *   Probabilities are not directly estimated; these are calculated using an expensive five-fold cross-validation.

---

### Important Points to Remember

*   SVMs aim to find the optimal separating hyperplane by maximizing the margin.
*   Support vectors are the critical data points that define the hyperplane.
*   The regularization parameter `C` controls the trade-off between margin maximization and training error minimization.
*   Linear SVMs are best suited for linearly separable data.
*   Performance evaluation metrics such as accuracy, precision, recall, F1-score, and the confusion matrix are essential for assessing the effectiveness of the model.
*   Cross-validation is crucial for selecting the optimal value for C and avoiding overfitting.
