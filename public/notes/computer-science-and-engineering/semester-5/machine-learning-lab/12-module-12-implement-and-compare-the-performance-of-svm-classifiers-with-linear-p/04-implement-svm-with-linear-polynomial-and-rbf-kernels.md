---
title: "Implement SVM with linear, polynomial, and RBF kernels."
subject: "MACHINE LEARNING LAB"
module: "Module 12: Implement and compare the performance of SVM classifiers with linear, polynomial, and RBF kernels on the Fashion MNIST dataset. Analyze the advantages and disadvantages of each kernel type."
branch: "Computer Science and Engineering"
semester: 5
topicId: "684162770fc9aa1fdbc8b97d"
status: "completed"
scrapedAt: "2026-05-20T16:47:44.384Z"
---
# MACHINE LEARNING LAB - Module 12: SVM with Different Kernels on Fashion MNIST

**Topic:** Implement SVM with linear, polynomial, and RBF kernels.

**Description:** Implement and compare the performance of SVM classifiers with linear, polynomial, and RBF kernels on the Fashion MNIST dataset. Analyze the advantages and disadvantages of each kernel type.

**Learning Outcomes:**

*   Implement SVM classifiers with linear, polynomial, and RBF kernels using Python and scikit-learn.
*   Apply these classifiers to the Fashion MNIST dataset.
*   Evaluate the performance of each kernel type using appropriate metrics (e.g., accuracy, precision, recall, F1-score).
*   Analyze the advantages and disadvantages of each kernel type concerning computational cost, model complexity, and performance on the Fashion MNIST dataset.
*   Understand the role of hyperparameters in each kernel and how they influence the model's performance.

## 1. Key Concepts and Definitions

*   **SVM (Support Vector Machine):** A supervised learning algorithm used for classification and regression.  SVM aims to find the optimal hyperplane that maximizes the margin between different classes in the feature space.
*   **Hyperplane:**  A decision boundary that separates data points belonging to different classes. In a 2D space, it's a line; in a 3D space, it's a plane; and in higher-dimensional spaces, it's a hyperplane.
*   **Margin:**  The distance between the hyperplane and the closest data points from each class.  A larger margin generally indicates a better generalization ability.
*   **Support Vectors:** The data points closest to the hyperplane that influence its position and orientation.  These are the critical elements defining the decision boundary.
*   **Kernel Function:** A mathematical function that maps the original input space into a higher-dimensional feature space, allowing SVM to find non-linear decision boundaries.  It implicitly computes the dot product of data points in the higher-dimensional space without explicitly calculating their coordinates, which is computationally efficient.
*   **Linear Kernel:** A simple kernel that performs a linear separation of the data.  It's equivalent to a linear classifier.
*   **Polynomial Kernel:** A kernel that introduces polynomial features, allowing SVM to model non-linear relationships.
*   **RBF (Radial Basis Function) Kernel:** A kernel that maps data points into an infinite-dimensional space based on their distance to a chosen point (landmark). It is very flexible and can handle complex non-linear boundaries.
*   **Fashion MNIST:** A dataset consisting of 60,000 training images and 10,000 testing images of Zalando fashion articles.  Each image is 28x28 pixels and associated with a label from 10 classes (e.g., T-shirt/top, Trouser, Pullover, Dress, Coat, Sandal, Shirt, Sneaker, Bag, Ankle boot).
*   **Hyperparameter Tuning:** The process of selecting the best values for the hyperparameters of a machine learning model to optimize its performance.
*   **Cross-Validation:** A technique used to estimate the performance of a model on unseen data by splitting the data into multiple folds and training and testing the model on different combinations of folds.
*   **Accuracy:** The proportion of correctly classified data points.
*   **Precision:** The proportion of true positive predictions among all positive predictions.
*   **Recall:** The proportion of true positive predictions among all actual positive instances.
*   **F1-Score:** The harmonic mean of precision and recall, providing a balanced measure of the model's performance.
*   **Computational Cost:** The amount of resources (e.g., time, memory) required to train and use a machine learning model.
*   **Model Complexity:** The degree to which a model can capture complex relationships in the data.  More complex models have higher variance and are more prone to overfitting.
*   **Overfitting:** A phenomenon where a model learns the training data too well, leading to poor performance on unseen data.
*   **Underfitting:** A phenomenon where a model is too simple to capture the underlying patterns in the data, resulting in poor performance on both training and testing data.

## 2. SVM Kernels: Implementation and Comparison

### 2.1. Linear Kernel

*   **Formula:** K(x, y) = x<sup>T</sup>y  (dot product of x and y)
*   **Advantages:**
    *   Simple and fast to train.
    *   Works well when data is linearly separable or nearly linearly separable.
    *   Requires fewer hyperparameters to tune.
*   **Disadvantages:**
    *   Cannot model non-linear relationships in the data.
*   **Implementation in scikit-learn:**

    ```python
    from sklearn import svm
    from sklearn.model_selection import train_test_split
    from sklearn.datasets import fetch_openml
    from sklearn.metrics import accuracy_score

    # Load Fashion MNIST dataset
    X, y = fetch_openml('Fashion-MNIST', version=1, return_X_y=True, as_frame=False)
    X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)

    # Create SVM classifier with linear kernel
    clf = svm.SVC(kernel='linear')

    # Train the classifier
    clf.fit(X_train, y_train)

    # Make predictions
    y_pred = clf.predict(X_test)

    # Evaluate the model
    accuracy = accuracy_score(y_test, y_pred)
    print(f"Accuracy with Linear Kernel: {accuracy}")
    ```

### 2.2. Polynomial Kernel

*   **Formula:** K(x, y) = (gamma * x<sup>T</sup>y + coef0)<sup>degree</sup>
    *   `gamma`: Kernel coefficient (controls the influence of each training example).
    *   `coef0`: Independent term (controls the influence of high vs. low degree terms).
    *   `degree`: Degree of the polynomial.
*   **Advantages:**
    *   Can model non-linear relationships in the data.
    *   More flexible than the linear kernel.
*   **Disadvantages:**
    *   More complex than the linear kernel and can be more prone to overfitting.
    *   Sensitive to hyperparameter tuning (degree, gamma, coef0).
    *   Can be computationally expensive for high degrees.
*   **Implementation in scikit-learn:**

    ```python
    from sklearn import svm
    from sklearn.model_selection import train_test_split
    from sklearn.datasets import fetch_openml
    from sklearn.metrics import accuracy_score

    # Load Fashion MNIST dataset
    X, y = fetch_openml('Fashion-MNIST', version=1, return_X_y=True, as_frame=False)
    X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)

    # Create SVM classifier with polynomial kernel
    clf = svm.SVC(kernel='poly', degree=3, gamma='scale', coef0=0) # Example parameters.  Tune these!

    # Train the classifier
    clf.fit(X_train, y_train)

    # Make predictions
    y_pred = clf.predict(X_test)

    # Evaluate the model
    accuracy = accuracy_score(y_test, y_pred)
    print(f"Accuracy with Polynomial Kernel: {accuracy}")
    ```
    **Note**: The `gamma` parameter is set to `'scale'` by default in recent versions of scikit-learn. This automatically scales the value of gamma based on the variance of the input features. You can also specify a numerical value for gamma if desired.

### 2.3. RBF (Radial Basis Function) Kernel

*   **Formula:** K(x, y) = exp(-gamma * ||x - y||<sup>2</sup>)
    *   `gamma`: Kernel coefficient (controls the influence of each training example). A larger gamma leads to a more complex model with tighter decision boundaries.
*   **Advantages:**
    *   Very flexible and can model highly non-linear relationships.
    *   Generally provides better performance than linear and polynomial kernels for complex datasets.
*   **Disadvantages:**
    *   Can be computationally expensive, especially for large datasets.
    *   Sensitive to hyperparameter tuning (gamma, C).
    *   Prone to overfitting if gamma is too large.
*   **Implementation in scikit-learn:**

    ```python
    from sklearn import svm
    from sklearn.model_selection import train_test_split
    from sklearn.datasets import fetch_openml
    from sklearn.metrics import accuracy_score

    # Load Fashion MNIST dataset
    X, y = fetch_openml('Fashion-MNIST', version=1, return_X_y=True, as_frame=False)
    X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)

    # Create SVM classifier with RBF kernel
    clf = svm.SVC(kernel='rbf', gamma='scale') # Example parameters.  Tune these!

    # Train the classifier
    clf.fit(X_train, y_train)

    # Make predictions
    y_pred = clf.predict(X_test)

    # Evaluate the model
    accuracy = accuracy_score(y_test, y_pred)
    print(f"Accuracy with RBF Kernel: {accuracy}")
    ```

## 3. Applying to Fashion MNIST Dataset

The code examples provided in sections 2.1, 2.2, and 2.3 already demonstrate how to apply SVM with linear, polynomial, and RBF kernels to the Fashion MNIST dataset. The key steps are:

1.  **Load the dataset:** Use `fetch_openml('Fashion-MNIST', version=1, return_X_y=True, as_frame=False)` to load the dataset.
2.  **Split the data:** Use `train_test_split` to divide the data into training and testing sets.
3.  **Create the SVM classifier:** Instantiate an `svm.SVC` object with the desired kernel type (e.g., `kernel='linear'`, `kernel='poly'`, `kernel='rbf'`).
4.  **Train the classifier:** Use `clf.fit(X_train, y_train)` to train the model.
5.  **Make predictions:** Use `clf.predict(X_test)` to generate predictions on the test set.
6.  **Evaluate the model:** Use `accuracy_score(y_test, y_pred)` or other metrics (precision, recall, F1-score) to assess the model's performance.

## 4. Hyperparameter Tuning and Model Evaluation

*   **Hyperparameter Importance:**
    *   **Linear Kernel:** Primarily the regularization parameter `C` needs tuning.
    *   **Polynomial Kernel:** `degree`, `gamma`, `coef0`, and `C` all need careful tuning.
    *   **RBF Kernel:** `gamma` and `C` are the most important hyperparameters.
*   **Hyperparameter Tuning Methods:**
    *   **Grid Search:**  Define a grid of possible hyperparameter values and evaluate the model's performance for each combination of values using cross-validation.
    *   **Randomized Search:**  Randomly sample hyperparameter values from a defined distribution and evaluate the model's performance for each sample. This can be more efficient than grid search when the hyperparameter space is large.
    *   **Bayesian Optimization:** Uses a probabilistic model to guide the search for the optimal hyperparameters.  More sophisticated than grid or randomized search and often finds better results with fewer iterations.
*   **Cross-Validation:** Use techniques like k-fold cross-validation to obtain a more robust estimate of the model's performance on unseen data. This helps prevent overfitting.

**Example of Grid Search with Cross-Validation (RBF Kernel):**

```python
from sklearn import svm
from sklearn.model_selection import train_test_split, GridSearchCV
from sklearn.datasets import fetch_openml
from sklearn.metrics import accuracy_score

# Load Fashion MNIST dataset
X, y = fetch_openml('Fashion-MNIST', version=1, return_X_y=True, as_frame=False)
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)

# Define the hyperparameter grid
param_grid = {
    'C': [0.1, 1, 10],
    'gamma': ['scale', 0.1, 1]
}

# Create SVM classifier with RBF kernel
clf = svm.SVC(kernel='rbf')

# Create GridSearchCV object
grid_search = GridSearchCV(clf, param_grid, cv=3, scoring='accuracy', verbose=2)  # cv=3 for 3-fold cross-validation

# Perform grid search
grid_search.fit(X_train, y_train)

# Print the best parameters
print("Best parameters:", grid_search.best_params_)

# Make predictions using the best model
y_pred = grid_search.predict(X_test)

# Evaluate the model
accuracy = accuracy_score(y_test, y_pred)
print(f"Accuracy with RBF Kernel (Grid Search): {accuracy}")
```

## 5. Advantages and Disadvantages of Each Kernel Type (Summary)

| Kernel Type | Advantages                                                                    | Disadvantages                                                                         | Computational Cost | Hyperparameter Tuning | Suitable for                                                                     |
| :---------- | :---------------------------------------------------------------------------- | :------------------------------------------------------------------------------------ | :------------------- | :---------------------- | :------------------------------------------------------------------------------- |
| Linear      | Simple, fast, works well for linearly separable data.                           | Cannot model non-linear relationships.                                                 | Low                  | Minimal                | Linearly separable or nearly linearly separable data.                            |
| Polynomial  | Can model non-linear relationships, more flexible than linear.                    | Complex, prone to overfitting, sensitive to hyperparameter tuning, can be expensive. | Medium to High       | Extensive              | Non-linear data with a clear polynomial relationship, moderate complexity.         |
| RBF         | Very flexible, models highly non-linear relationships, often best performance. | Computationally expensive, sensitive to hyperparameter tuning, prone to overfitting.   | High                 | Extensive              | Highly non-linear data, complex relationships, when performance is prioritized. |

## 6. Important Points to Remember

*   **Data Preprocessing:**  Consider scaling or normalizing the Fashion MNIST data before training the SVM. This can improve the model's performance and convergence speed, especially for RBF and polynomial kernels. StandardScaler or MinMaxScaler from scikit-learn are good choices.
*   **Computational Cost:**  Training SVM, especially with RBF or polynomial kernels, can be computationally expensive on large datasets. Consider using techniques like stochastic gradient descent (SGD) or kernel approximation methods to reduce the training time.
*   **Regularization (C):** The regularization parameter `C` controls the trade-off between maximizing the margin and minimizing the classification error. A smaller `C` encourages a larger margin but allows for more misclassifications, while a larger `C` aims to minimize misclassifications but may result in a smaller margin and overfitting.
*   **Kernel Choice:** The best kernel type depends on the nature of the data. Start with a linear kernel if the data is likely to be linearly separable. If the linear kernel performs poorly, try the polynomial or RBF kernel.  RBF is often a good default choice.
*   **Interpretability:**  Linear kernels are generally more interpretable than polynomial and RBF kernels, as the decision boundary is simply a linear combination of the input features.
*   **Start Small:** When experimenting, start with a small subset of the Fashion MNIST dataset to iterate quickly. Once you find promising hyperparameters, train on the full dataset.
*   **Balancing Classes:** If the classes in the Fashion MNIST dataset are imbalanced, consider using techniques like class weighting or oversampling/undersampling to address the imbalance and prevent the model from being biased towards the majority class.

## 7. Practice Questions/Exercises

1.  **Data Scaling:** Implement SVM with the RBF kernel on Fashion MNIST with and without data scaling. Compare the performance (accuracy and training time) and discuss the effect of data scaling.
    *   **Answer:** Scaling the data (using `StandardScaler` or `MinMaxScaler`) generally improves the performance and reduces the training time of SVM with the RBF kernel.  Without scaling, features with larger values might dominate the distance calculations, leading to suboptimal results.
2.  **Hyperparameter Tuning:** Perform a grid search to find the optimal hyperparameters (C and gamma) for the RBF kernel on the Fashion MNIST dataset. Report the best parameters and the corresponding accuracy.  Experiment with different ranges of `C` and `gamma`.
    *   **Answer:** The best parameters will vary depending on the range of values explored in the grid search and the random state used for splitting the data.  However, a common result is that `C` values in the range of 1 to 10 and `gamma` values in the range of 0.1 to 1 often yield good performance.
3.  **Kernel Comparison:** Train SVM classifiers with linear, polynomial (degree 3), and RBF kernels on the Fashion MNIST dataset using the same training and testing data. Evaluate the performance of each kernel using accuracy, precision, recall, and F1-score.  Analyze the results and discuss the advantages and disadvantages of each kernel type in the context of the Fashion MNIST dataset.
    *   **Answer:** Generally, the RBF kernel will achieve the highest accuracy and F1-score on the Fashion MNIST dataset, followed by the polynomial kernel, and then the linear kernel. The linear kernel is faster to train but less accurate due to its inability to model non-linear relationships.
4.  **Computational Cost Analysis:** Train SVM classifiers with different kernels (linear, polynomial, RBF) on varying sizes of the Fashion MNIST training data (e.g., 10%, 50%, 100%).  Measure the training time for each kernel and dataset size. Plot the training time versus dataset size for each kernel and analyze the computational cost of each kernel.
    *   **Answer:** The training time will generally increase with the size of the dataset. The linear kernel will have the lowest training time, followed by the polynomial kernel, and then the RBF kernel. The RBF kernel can become significantly more expensive than the other kernels as the dataset size increases.
5.  **Regularization Impact:**  Using the RBF kernel, train multiple SVM classifiers with different values of `C` (e.g., 0.01, 0.1, 1, 10, 100) on the Fashion MNIST dataset.  Evaluate the performance of each classifier on both the training and testing data. Plot the training and testing accuracy versus `C` and analyze the impact of regularization on model performance.
    *   **Answer:** As `C` increases, the training accuracy will generally increase, but the testing accuracy may initially increase and then decrease.  A small value of `C` may lead to underfitting, while a large value of `C` may lead to overfitting.  The optimal value of `C` is the one that achieves the best balance between training and testing accuracy.
