---
title: "Compare the classification performance for each kernel."
subject: "MACHINE LEARNING LAB"
module: "Module 12: Implement and compare the performance of SVM classifiers with linear, polynomial, and RBF kernels on the Fashion MNIST dataset. Analyze the advantages and disadvantages of each kernel type."
branch: "Computer Science and Engineering"
semester: 5
topicId: "684162770fc9aa1fdbc8b97e"
status: "completed"
scrapedAt: "2026-05-20T16:47:45.105Z"
---
# MACHINE LEARNING LAB - Module 12: SVM Kernels on Fashion MNIST - Performance Comparison

**Topic:** Compare the classification performance for each kernel (Linear, Polynomial, and RBF) when used with SVM classifiers on the Fashion MNIST dataset.

**Description:**  This module focuses on implementing and evaluating Support Vector Machine (SVM) classifiers with different kernel functions (Linear, Polynomial, and RBF) using the Fashion MNIST dataset.  We will analyze the advantages and disadvantages of each kernel type in the context of this image classification task and compare their classification performance.

**Learning Outcomes:**

*   Understand the different kernel functions (Linear, Polynomial, and RBF) used in SVM classifiers.
*   Implement SVM classifiers with each of these kernels using a Python library like scikit-learn.
*   Apply these SVM classifiers to the Fashion MNIST dataset.
*   Evaluate the classification performance of each kernel type using appropriate metrics (e.g., accuracy, precision, recall, F1-score).
*   Analyze the advantages and disadvantages of each kernel type in terms of performance, computational cost, and interpretability.
*   Compare and contrast the performance of each kernel and explain the potential reasons for the observed differences.

---

## 1. Introduction to SVM Kernels

*   **Key Concept: Kernels** -  Kernel functions are a technique used in SVMs to map data into a higher-dimensional space where it becomes easier to separate the classes. They implicitly compute the dot product of the data points in this higher-dimensional space without explicitly transforming the data, which makes them computationally efficient.

*   **Types of Kernels:** We'll focus on three common kernel types:

    *   **Linear Kernel:**
        *   **Definition:** The simplest kernel, essentially performing a linear separation in the input space.  It is equivalent to using a linear classifier.
        *   **Formula:** K(x, x') = x<sup>T</sup>x' (dot product between x and x')
        *   **Advantages:** Fast to compute, easy to interpret (linear boundary).
        *   **Disadvantages:** Only suitable for linearly separable data.  May underperform on complex datasets.

    *   **Polynomial Kernel:**
        *   **Definition:** Maps the data into a higher-dimensional space using polynomial features.  The degree of the polynomial is a key parameter.
        *   **Formula:** K(x, x') = (γx<sup>T</sup>x' + r)<sup>d</sup>
            *   `γ` (gamma): Kernel coefficient, controlling the influence of each individual training example.
            *   `r` (coef0):  Independent term (constant).
            *   `d` (degree): Degree of the polynomial.
        *   **Advantages:** Can handle non-linear data.  The degree parameter allows controlling the complexity of the model.
        *   **Disadvantages:**  Higher computational cost than the linear kernel.  Can be prone to overfitting if the degree is too high.  Requires careful tuning of parameters (γ, r, d).

    *   **RBF (Radial Basis Function) Kernel:**
        *   **Definition:**  Maps the data into an infinite-dimensional space.  Measures the similarity between data points based on their distance.
        *   **Formula:** K(x, x') = exp(-γ ||x - x'||<sup>2</sup>)
            *   `γ` (gamma):  Kernel coefficient, controlling the influence of each individual training example. Smaller values mean a larger radius of influence.
        *   **Advantages:**  Very flexible and can handle complex, non-linear data.  Often performs well in practice.
        *   **Disadvantages:**  The most computationally expensive of the three.  Sensitive to parameter tuning (γ and C).  Can be difficult to interpret. Prone to overfitting if γ is too large or C is too large.

## 2. Implementing SVM Classifiers with Scikit-learn

*   **Example Python Code (Conceptual):**

    ```python
    from sklearn import svm
    from sklearn.model_selection import train_test_split
    from sklearn.metrics import accuracy_score, classification_report
    from sklearn.datasets import fetch_openml # For Fashion MNIST

    # 1. Load the Fashion MNIST dataset
    fashion_mnist = fetch_openml(name='Fashion-MNIST', version=1, as_frame=False)
    X, y = fashion_mnist["data"], fashion_mnist["target"]

    # 2. Split data into training and testing sets
    X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)

    # 3. Scale the data (Important for SVM performance)
    from sklearn.preprocessing import StandardScaler
    scaler = StandardScaler()
    X_train = scaler.fit_transform(X_train)
    X_test = scaler.transform(X_test)

    # 4. Define and train SVM classifiers with different kernels

    # Linear Kernel
    svm_linear = svm.SVC(kernel='linear')
    svm_linear.fit(X_train, y_train)
    y_pred_linear = svm_linear.predict(X_test)

    # Polynomial Kernel
    svm_poly = svm.SVC(kernel='poly', degree=3, gamma='scale', coef0=1)  # Tune degree, gamma, and coef0
    svm_poly.fit(X_train, y_train)
    y_pred_poly = svm_poly.predict(X_test)

    # RBF Kernel
    svm_rbf = svm.SVC(kernel='rbf', gamma='scale') # Tune gamma and C
    svm_rbf.fit(X_train, y_train)
    y_pred_rbf = svm_rbf.predict(X_test)


    # 5. Evaluate performance
    print("Linear Kernel Accuracy:", accuracy_score(y_test, y_pred_linear))
    print(classification_report(y_test, y_pred_linear))

    print("Polynomial Kernel Accuracy:", accuracy_score(y_test, y_pred_poly))
    print(classification_report(y_test, y_pred_poly))

    print("RBF Kernel Accuracy:", accuracy_score(y_test, y_pred_rbf))
    print(classification_report(y_test, y_pred_rbf))
    ```

*   **Important Notes:**

    *   **Data Scaling:**  SVMs are sensitive to the scale of the input features. Always scale your data (e.g., using `StandardScaler` or `MinMaxScaler`) before training an SVM.  Failure to do so can lead to significantly poorer performance.
    *   **Parameter Tuning:**  The parameters of the SVM (especially `C` and `gamma`) and the kernel (e.g., `degree` for the polynomial kernel) have a major impact on performance.  Use techniques like cross-validation (e.g., `GridSearchCV`) to find optimal parameter values.
    *   **Computational Cost:**  Training an SVM can be computationally expensive, especially with large datasets and complex kernels like RBF. Consider using a smaller subset of the data for initial experimentation.  Explore optimized SVM implementations if needed.
    *   **Gamma Parameter:** The `gamma` parameter in the Polynomial and RBF kernels controls the influence of a single training example.  A small `gamma` value means a large radius of influence (the kernel is more sensitive to far-away points), while a large `gamma` value means a small radius of influence (the kernel is more sensitive to nearby points). `gamma='scale'` is often a good starting point.
    *   **C Parameter:** The `C` parameter controls the penalty for misclassifying training examples. A large `C` value corresponds to a low-bias, high-variance model, where the model tries to classify all training examples correctly.  A small `C` value corresponds to a high-bias, low-variance model, where the model allows more misclassifications.

## 3. Applying SVM to Fashion MNIST

*   **Fashion MNIST Dataset:** Fashion MNIST is a dataset of 70,000 grayscale images of fashion products from 10 categories, with 6,000 training images and 1,000 testing images per category. The dataset is commonly used as a drop-in replacement for the original MNIST dataset (handwritten digits).

*   **Steps:**

    1.  **Load the Fashion MNIST dataset.** (Using `fetch_openml` from scikit-learn is a simple way to do this).
    2.  **Preprocess the data:**
        *   Reshape the images into a 2D array (n_samples, n_features).  Each image is originally 28x28 pixels, so you'll have 784 features per image.
        *   Scale the pixel values (e.g., using `StandardScaler`) to improve SVM performance.
    3.  **Split the data into training and testing sets.**
    4.  **Train SVM classifiers with Linear, Polynomial, and RBF kernels.**
    5.  **Evaluate the performance of each classifier on the test set.**

## 4. Evaluating Classification Performance

*   **Metrics:**

    *   **Accuracy:** The proportion of correctly classified instances.  (Useful when classes are balanced).
    *   **Precision:** The proportion of positive identifications that were actually correct.  (TP / (TP + FP))
    *   **Recall (Sensitivity):** The proportion of actual positives that were identified correctly. (TP / (TP + FN))
    *   **F1-score:** The harmonic mean of precision and recall.  (2 * (Precision * Recall) / (Precision + Recall)) (Useful when you want to balance precision and recall).
    *   **Classification Report:**  A convenient way to view precision, recall, F1-score, and support (number of samples) for each class.
    *   **Confusion Matrix:**  A table that shows the number of correct and incorrect classifications for each class.  Helps identify which classes are being confused with each other.

*   **Code Example (using `classification_report`):**

    ```python
    from sklearn.metrics import classification_report

    # Example for the linear kernel
    print("Linear Kernel Classification Report:")
    print(classification_report(y_test, y_pred_linear))
    ```

## 5. Analyzing Advantages and Disadvantages of Each Kernel

| Kernel Type | Advantages                                                                   | Disadvantages                                                                                                 | When to Use                                                                                                  |
|-------------|------------------------------------------------------------------------------|--------------------------------------------------------------------------------------------------------------|--------------------------------------------------------------------------------------------------------------|
| Linear      | Fast to train, simple to interpret, works well with linearly separable data. | Limited expressiveness, underperforms on non-linear data.                                               | When you suspect the data is linearly separable or when computational cost is a major constraint.           |
| Polynomial  | Can handle non-linear data, allows controlling complexity with the degree.     | Higher computational cost than linear, prone to overfitting (high degree), requires parameter tuning.     | When the data is not linearly separable but has some polynomial relationship between features.             |
| RBF         | Very flexible, can handle complex non-linear data, often performs well.      | Highest computational cost, sensitive to parameter tuning, can be difficult to interpret, prone to overfitting. | When the data is highly non-linear and you need high accuracy, but be prepared for computational cost. |

## 6. Comparing Kernel Performance on Fashion MNIST

*   **Expected Outcome:**

    *   The **Linear kernel** will likely perform the worst, as Fashion MNIST is not a linearly separable dataset.
    *   The **Polynomial kernel** can achieve better performance than the linear kernel, but it requires careful tuning of the `degree`, `gamma`, and `coef0` parameters. Overfitting is a risk.
    *   The **RBF kernel** typically provides the best performance on Fashion MNIST due to its ability to model complex, non-linear relationships.  However, it is also the most computationally expensive and sensitive to parameter tuning (especially `gamma` and `C`).

*   **Reasons for Differences:**

    *   **Linearity:** Fashion MNIST images have complex patterns that are not linearly separable.  The linear kernel struggles to capture these patterns.
    *   **Model Complexity:** The polynomial and RBF kernels can create more complex decision boundaries than the linear kernel, allowing them to better fit the non-linear data in Fashion MNIST.
    *   **Overfitting:**  If the `degree` of the polynomial kernel is too high or the `gamma` of the RBF kernel is too large, the model can overfit the training data, leading to poor generalization performance on the test data.

## 7. Practice Questions & Exercises

1.  **What is a kernel function in SVM? Explain its purpose.**
    *   **Answer:** A kernel function is a method used in SVMs to map data into a higher-dimensional space, making it easier to separate the classes. It computes the dot product of the data points in this higher-dimensional space without explicitly transforming the data.

2.  **Explain the difference between the Linear, Polynomial, and RBF kernels.**
    *   **Answer:**
        *   **Linear:** Performs a linear separation in the input space.
        *   **Polynomial:** Maps the data into a higher-dimensional space using polynomial features.
        *   **RBF:** Maps the data into an infinite-dimensional space based on the distance between data points.

3.  **Why is data scaling important when using SVM?**
    *   **Answer:** SVMs are sensitive to the scale of the input features.  Features with larger values can dominate the distance calculations, leading to biased results. Scaling ensures that all features contribute equally.

4.  **What are the advantages and disadvantages of using the RBF kernel?**
    *   **Answer:**
        *   **Advantages:** Very flexible, can handle complex non-linear data, often performs well.
        *   **Disadvantages:** Highest computational cost, sensitive to parameter tuning, can be difficult to interpret, prone to overfitting.

5.  **How does the `gamma` parameter affect the RBF kernel?**
    *   **Answer:** The `gamma` parameter controls the influence of a single training example. A small `gamma` value means a large radius of influence (the kernel is more sensitive to far-away points), while a large `gamma` value means a small radius of influence (the kernel is more sensitive to nearby points).

6.  **What metrics can be used to evaluate the performance of SVM classifiers on the Fashion MNIST dataset?**
    *   **Answer:** Accuracy, precision, recall, F1-score, classification report, and confusion matrix.

7.  **Exercise:** Implement SVM classifiers with Linear, Polynomial (degree=3), and RBF kernels on a subset of the Fashion MNIST dataset (e.g., 10,000 training samples and 2,000 testing samples). Scale the data using `StandardScaler`. Evaluate the performance of each kernel using accuracy and the classification report. Compare the results and explain why one kernel might perform better than the others.  Try different values of `C` and `gamma` and observe the impact on performance.

## 8. Important Points to Remember

*   **Data scaling is crucial for SVM performance.**
*   **Parameter tuning (C, gamma, degree) is essential to achieve good results.**  Use cross-validation techniques.
*   **RBF kernel is often the best choice for complex, non-linear datasets like Fashion MNIST, but it is computationally expensive.**
*   **Understand the trade-offs between model complexity, computational cost, and interpretability when choosing a kernel.**
*   **Be aware of the potential for overfitting, especially with the Polynomial and RBF kernels.**
*   **Always evaluate your model's performance on a separate test set to ensure generalization.**
