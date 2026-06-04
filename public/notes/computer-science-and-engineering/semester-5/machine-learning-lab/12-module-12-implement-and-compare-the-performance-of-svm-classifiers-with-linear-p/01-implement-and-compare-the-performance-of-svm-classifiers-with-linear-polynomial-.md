---
title: "Implement and compare the performance of SVM classifiers with linear, polynomial, and RBF kernels on the Fashion MNIST dataset. Analyze the advantages and disadvantages of each kernel type."
subject: "MACHINE LEARNING LAB"
module: "Module 12: Implement and compare the performance of SVM classifiers with linear, polynomial, and RBF kernels on the Fashion MNIST dataset. Analyze the advantages and disadvantages of each kernel type."
branch: "Computer Science and Engineering"
semester: 5
topicId: "684162770fc9aa1fdbc8b97a"
status: "completed"
scrapedAt: "2026-05-20T16:47:42.211Z"
---
# MACHINE LEARNING LAB - Module 12: SVM Kernels on Fashion MNIST

**Topic:** Implement and compare the performance of SVM classifiers with linear, polynomial, and RBF kernels on the Fashion MNIST dataset. Analyze the advantages and disadvantages of each kernel type.

**Description:** This module explores Support Vector Machines (SVMs) and their application to image classification, specifically using the Fashion MNIST dataset. We will focus on comparing the performance of different kernel functions (Linear, Polynomial, and RBF) within the SVM framework.

**Learning Outcomes:**

*   Understand the basics of Support Vector Machines (SVMs).
*   Explain the concept and purpose of kernel functions in SVMs.
*   Implement SVM classifiers with Linear, Polynomial, and RBF kernels using Python and relevant libraries (e.g., scikit-learn).
*   Apply these SVM classifiers to the Fashion MNIST dataset.
*   Evaluate the performance of each kernel type using appropriate metrics (e.g., accuracy, precision, recall, F1-score).
*   Analyze the advantages and disadvantages of each kernel type in the context of the Fashion MNIST dataset.
*   Interpret the impact of kernel parameters (e.g., degree for Polynomial, gamma for RBF) on model performance.

## 1. Support Vector Machines (SVMs) - Basics

*   **Definition:** SVMs are a powerful and versatile class of supervised machine learning algorithms used for classification and regression.  They aim to find the optimal hyperplane that separates data points of different classes with the largest margin.

*   **Key Concepts:**
    *   **Hyperplane:** In an *n*-dimensional space, a hyperplane is a flat *n-1* dimensional subspace. In 2D, it's a line; in 3D, it's a plane.
    *   **Margin:**  The distance between the hyperplane and the closest data points from each class.  A larger margin generally indicates better generalization.
    *   **Support Vectors:** The data points that lie closest to the hyperplane and directly influence its position and orientation. These are crucial for defining the decision boundary.
    *   **Objective:** Maximize the margin while minimizing classification error.

*   **Hard Margin vs. Soft Margin:**
    *   **Hard Margin:** Aims to perfectly separate the data.  Only suitable for linearly separable data. Can be highly sensitive to outliers.
    *   **Soft Margin:** Allows for some misclassification to achieve a better balance between margin maximization and minimizing errors.  Controlled by a regularization parameter *C*.

*   **Regularization Parameter (C):** Controls the trade-off between maximizing the margin and minimizing the classification error.
    *   **Small C:** A large margin is preferred, even if it means misclassifying some points.  Leads to underfitting (high bias, low variance).
    *   **Large C:** Classifying all training points correctly is prioritized, even if it leads to a smaller margin.  Leads to overfitting (low bias, high variance).

## 2. Kernel Functions in SVMs

*   **The Kernel Trick:**  The kernel trick allows SVMs to operate in high-dimensional, implicit feature spaces without explicitly calculating the coordinates of the data in that space.  This is achieved by defining a kernel function that computes the dot product between two data points in the high-dimensional space.

*   **Why Use Kernels?**  Data that is not linearly separable in its original feature space can often be separated by projecting it into a higher-dimensional space. Kernels provide an efficient way to perform this projection.

*   **Common Kernel Functions:**
    *   **Linear Kernel:**
        *   **Formula:**  K(x, y) = x<sup>T</sup>y
        *   **Description:**  Simply performs a linear dot product between the input vectors.  Equivalent to a linear classifier in the original feature space.
        *   **Use Cases:** Suitable for linearly separable data or when the number of features is large compared to the number of samples.
    *   **Polynomial Kernel:**
        *   **Formula:** K(x, y) = (x<sup>T</sup>y + r)<sup>d</sup>
        *   **Parameters:**
            *   `d` (degree): Controls the complexity of the model.  Higher degrees can capture more complex relationships but are prone to overfitting.
            *   `r` (coef0): A constant term added to the dot product. Influences the impact of lower-order terms.
        *   **Description:**  Maps data to a higher-dimensional space by considering all polynomial combinations of the original features up to a specified degree.
        *   **Use Cases:** Can be effective for non-linear data, but requires careful parameter tuning.
    *   **Radial Basis Function (RBF) Kernel:**
        *   **Formula:** K(x, y) = exp(-γ ||x - y||<sup>2</sup>)
        *   **Parameter:**
            *   `γ` (gamma): Controls the influence of a single training example.
                *   **Small gamma:** Larger influence, smoother decision boundary.
                *   **Large gamma:** Smaller influence, more complex decision boundary, prone to overfitting.
        *   **Description:** Maps data to an infinite-dimensional space. The kernel value decreases as the distance between the two data points increases.
        *   **Use Cases:** A powerful and versatile kernel often used as a default choice when the data is non-linear. Requires careful tuning of the gamma parameter.

## 3. Implementing SVM Classifiers with Different Kernels on Fashion MNIST

*   **Dataset:** Fashion MNIST is a dataset of 70,000 grayscale images of fashion products from 10 categories, with 60,000 training images and 10,000 test images.

*   **Steps:**
    1.  **Data Loading and Preprocessing:**
        *   Load the Fashion MNIST dataset using libraries like `tensorflow.keras.datasets.fashion_mnist` or `torchvision.datasets.FashionMNIST`.
        *   Reshape the images into a 2D array (n_samples, n_features). Each image becomes a single row vector.
        *   Scale the pixel values to a range between 0 and 1 (e.g., divide by 255). This can improve performance and prevent numerical instability.
        *   Consider splitting the training data into training and validation sets for hyperparameter tuning.
    2.  **Model Definition:**
        *   Import the `SVC` class from `sklearn.svm`.
        *   Create instances of `SVC` for each kernel type (Linear, Polynomial, RBF).
        *   Set the `kernel` parameter accordingly:
            *   `kernel='linear'`
            *   `kernel='poly'` (and specify `degree` and `coef0` as needed)
            *   `kernel='rbf'` (and specify `gamma` as needed)
        *   Experiment with different values for `C` (regularization parameter) for each kernel.
    3.  **Model Training:**
        *   Use the `fit()` method of each `SVC` instance to train the models on the training data.
    4.  **Model Evaluation:**
        *   Use the `predict()` method to make predictions on the test data.
        *   Evaluate the performance using metrics such as:
            *   **Accuracy:** Overall percentage of correctly classified images.
            *   **Precision:**  For each class, the proportion of correctly predicted instances among all instances predicted as that class.
            *   **Recall:**  For each class, the proportion of correctly predicted instances among all actual instances of that class.
            *   **F1-score:** The harmonic mean of precision and recall.
            *   **Confusion Matrix:** A table showing the number of correct and incorrect predictions for each class.
    5.  **Hyperparameter Tuning:**
        *   Use techniques like cross-validation or grid search to find the optimal values for the kernel parameters (degree, gamma) and the regularization parameter C.
        *   Evaluate performance on a validation set during tuning to avoid overfitting to the test data.

*   **Python Code Example (Illustrative - Requires Libraries):**

    ```python
    import numpy as np
    from sklearn import datasets
    from sklearn.model_selection import train_test_split, GridSearchCV
    from sklearn.svm import SVC
    from sklearn.metrics import accuracy_score, classification_report
    from sklearn.preprocessing import StandardScaler

    # 1. Load Fashion MNIST data (replace with your actual loading)
    from tensorflow.keras.datasets import fashion_mnist
    (X_train_full, y_train_full), (X_test, y_test) = fashion_mnist.load_data()

    # 2. Preprocess the data
    X_train_full = X_train_full.reshape((60000, 28*28))
    X_test = X_test.reshape((10000, 28*28))
    X_train_full = X_train_full.astype('float32') / 255
    X_test = X_test.astype('float32') / 255
    y_train_full = y_train_full.astype('int32')
    y_test = y_test.astype('int32')

    # Split training into training and validation sets
    X_train, X_val, y_train, y_val = train_test_split(X_train_full, y_train_full, test_size=0.2, random_state=42)


    # Feature Scaling (Important for SVM performance)
    scaler = StandardScaler()
    X_train = scaler.fit_transform(X_train)
    X_val = scaler.transform(X_val)
    X_test = scaler.transform(X_test)


    # --- Example with RBF Kernel (and Grid Search for Hyperparameter Tuning) ---
    param_grid = {'C': [0.1, 1, 10], 'gamma': [0.1, 1, 'scale', 'auto']}  # 'scale' and 'auto' are special values for gamma
    grid_search = GridSearchCV(SVC(kernel='rbf'), param_grid, refit = True, verbose = 2, cv=3) #3-fold cross validation

    grid_search.fit(X_train, y_train)

    print("Best parameters:", grid_search.best_params_)
    best_model_rbf = grid_search.best_estimator_

    # Make predictions on the test set
    y_pred_rbf = best_model_rbf.predict(X_test)

    # Evaluate the performance
    accuracy_rbf = accuracy_score(y_test, y_pred_rbf)
    print(f"RBF Kernel Accuracy: {accuracy_rbf}")
    print(classification_report(y_test, y_pred_rbf))

    # --- Example with Linear Kernel ---
    model_linear = SVC(kernel='linear', C=1)
    model_linear.fit(X_train, y_train)
    y_pred_linear = model_linear.predict(X_test)
    accuracy_linear = accuracy_score(y_test, y_pred_linear)
    print(f"Linear Kernel Accuracy: {accuracy_linear}")
    print(classification_report(y_test, y_pred_linear))


    # --- Example with Polynomial Kernel ---
    model_poly = SVC(kernel='poly', degree=3, C=1, coef0=1)  # Adjust degree and coef0
    model_poly.fit(X_train, y_train)
    y_pred_poly = model_poly.predict(X_test)
    accuracy_poly = accuracy_score(y_test, y_pred_poly)
    print(f"Polynomial Kernel Accuracy: {accuracy_poly}")
    print(classification_report(y_test, y_pred_poly))
    ```

## 4. Advantages and Disadvantages of Each Kernel Type

| Kernel Type | Advantages                                                                         | Disadvantages                                                                               | Suitable Data                                                                    | Parameter Tuning Complexity | Computational Cost |
|-------------|--------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------|----------------------------|--------------------|
| Linear      | Simple, fast training, good for linearly separable data, fewer parameters to tune. | Not suitable for non-linear data. Can underfit complex relationships.                      | Linearly separable or high-dimensional data with many features.                  | Low                        | Low                |
| Polynomial  | Can model non-linear relationships, flexible.                                         | More parameters to tune (degree, coef0). Prone to overfitting with high degrees.  Can be slow for large datasets.  | Data with polynomial relationships.                                           | Medium                     | Medium              |
| RBF         | Powerful, can model complex non-linear relationships, often performs well.         | More computationally expensive, sensitive to parameter tuning (gamma, C). Can overfit. | Generally suitable for non-linear data. Often a good starting point.           | High                       | High               |

## 5. Impact of Kernel Parameters

*   **Polynomial Kernel - Degree (d):** Higher degrees allow the model to capture more complex relationships but can lead to overfitting. Start with a small degree (e.g., 2 or 3) and increase it gradually while monitoring performance on a validation set.
*   **Polynomial Kernel - coef0 (r):** The `coef0` parameter influences the importance of high-degree vs. low-degree terms.  It is often useful when low-degree terms contribute significantly to the model.
*   **RBF Kernel - Gamma (γ):** Gamma controls the influence of individual training examples.
    *   **Small Gamma:** The model considers a wider region around each data point, resulting in a smoother decision boundary.  May lead to underfitting.
    *   **Large Gamma:** The model is more sensitive to individual data points, resulting in a more complex decision boundary. May lead to overfitting.

## 6. Important Points to Remember

*   **Data Preprocessing:** Feature scaling (e.g., using `StandardScaler` or `MinMaxScaler`) is crucial for SVM performance, especially with RBF and Polynomial kernels.  It prevents features with larger values from dominating the distance calculations.
*   **Hyperparameter Tuning:** The performance of SVMs is highly dependent on the choice of kernel and its parameters.  Use techniques like cross-validation or grid search to find the optimal parameters for your specific dataset.
*   **Computational Cost:** SVMs can be computationally expensive, especially with RBF and Polynomial kernels, particularly for large datasets. Consider using techniques like kernel approximation or dimensionality reduction to improve performance.
*   **Overfitting:** SVMs, especially with complex kernels like RBF and high-degree Polynomial kernels, are prone to overfitting.  Regularization (C) and careful parameter tuning are essential to prevent overfitting. Always evaluate performance on a separate validation or test set.
*   **Class Imbalance:** If the dataset is imbalanced (unequal number of samples per class), consider using techniques like class weighting (e.g., setting `class_weight='balanced'` in `SVC`) or oversampling/undersampling.
*   **Kernel Selection:**  Start with RBF as it is a good general-purpose kernel.  If the data is known to be linearly separable, linear kernel is a good option.  Polynomial kernel requires more careful parameter tuning.

## 7. Practice Questions/Exercises

**Question 1:** Explain the role of support vectors in SVM.

**Answer:** Support vectors are the data points closest to the hyperplane and directly influence its position and orientation. They are crucial for defining the decision boundary. Removing non-support vectors does not affect the model.

**Question 2:** What is the purpose of the regularization parameter (C) in SVM?  What are the effects of using a small vs. a large value for C?

**Answer:** The regularization parameter (C) controls the trade-off between maximizing the margin and minimizing the classification error.
*   **Small C:** Prefers a large margin, even if it means misclassifying some points. Leads to underfitting (high bias, low variance).
*   **Large C:** Prioritizes classifying all training points correctly, even if it leads to a smaller margin. Leads to overfitting (low bias, high variance).

**Question 3:**  How does the gamma parameter affect the behavior of the RBF kernel?

**Answer:** Gamma controls the influence of individual training examples in the RBF kernel.
*   **Small Gamma:** Larger influence, smoother decision boundary, potentially underfitting.
*   **Large Gamma:** Smaller influence, more complex decision boundary, potentially overfitting.

**Question 4:**  You are working with the Fashion MNIST dataset and find that your RBF kernel SVM is overfitting. What are some strategies you could use to address this?

**Answer:** Strategies to reduce overfitting with an RBF kernel SVM:
1.  **Decrease Gamma:**  Reduce the value of the gamma parameter to create a smoother decision boundary.
2.  **Increase C:**  Increase the value of the regularization parameter C to penalize misclassification errors less, leading to a larger margin.
3.  **Use Cross-Validation:** Employ cross-validation to evaluate model performance on multiple splits of the training data and tune hyperparameters (C and gamma) to optimize for generalization.
4.  **Get More Data:** Increasing the size of the training dataset can often help to reduce overfitting.
5.  **Feature Selection/Dimensionality Reduction:**  Reducing the number of features used by the model can sometimes improve generalization. Techniques like PCA or feature selection methods could be applied.

**Question 5:**  You suspect your data is linearly separable. Which kernel would be the most appropriate to use? Why?

**Answer:** A linear kernel would be the most appropriate.  It's the simplest and most computationally efficient option for linearly separable data.  Using a more complex kernel (like RBF or polynomial) would likely lead to overfitting and increased computational cost without a significant improvement in performance.

By working through these notes, examples, and practice questions, you should have a solid understanding of how to implement and compare SVM classifiers with different kernels on the Fashion MNIST dataset, and be able to analyze the advantages and disadvantages of each kernel type. Remember to experiment with different parameter values and evaluate performance on a validation set to find the best model for your specific task.
