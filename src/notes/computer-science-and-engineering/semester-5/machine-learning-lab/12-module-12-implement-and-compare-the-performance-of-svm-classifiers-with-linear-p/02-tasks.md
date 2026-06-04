---
title: "Tasks:"
subject: "MACHINE LEARNING LAB"
module: "Module 12: Implement and compare the performance of SVM classifiers with linear, polynomial, and RBF kernels on the Fashion MNIST dataset. Analyze the advantages and disadvantages of each kernel type."
branch: "Computer Science and Engineering"
semester: 5
topicId: "684162770fc9aa1fdbc8b97b"
status: "completed"
scrapedAt: "2026-05-20T16:47:42.934Z"
---
# MACHINE LEARNING LAB - Module 12: SVM Kernels on Fashion MNIST

## Topic: Implement and compare the performance of SVM classifiers with linear, polynomial, and RBF kernels on the Fashion MNIST dataset. Analyze the advantages and disadvantages of each kernel type.

### Learning Outcomes:

*   Understand the concept of Support Vector Machines (SVMs) and their application to classification problems.
*   Learn about different kernel functions used in SVMs, specifically linear, polynomial, and RBF kernels.
*   Implement SVM classifiers with different kernel types using Python and relevant libraries (e.g., Scikit-learn).
*   Evaluate the performance of SVM classifiers with different kernels on the Fashion MNIST dataset.
*   Analyze the advantages and disadvantages of each kernel type based on performance, computational cost, and model complexity.
*   Gain practical experience in choosing appropriate kernels for specific datasets and classification tasks.

### 1. Introduction to Support Vector Machines (SVMs)

*   **Definition:** SVM is a supervised learning algorithm used for classification and regression. It aims to find an optimal hyperplane that maximizes the margin between different classes in the feature space.
*   **Key Concepts:**
    *   **Hyperplane:**  A decision boundary separating the data points of different classes.  In 2D, it's a line; in 3D, it's a plane; and in higher dimensions, it's a hyperplane.
    *   **Margin:**  The distance between the hyperplane and the closest data points from each class. SVM aims to maximize this margin.
    *   **Support Vectors:** The data points that lie closest to the hyperplane and influence its position and orientation.  These are critical for defining the decision boundary.
    *   **Kernel Trick:**  A method that allows SVMs to implicitly map data into higher-dimensional spaces to find nonlinear decision boundaries without explicitly computing the transformation.
*   **Example:** Imagine classifying apples and oranges based on size and color. An SVM tries to find the best line (hyperplane) that separates the apples and oranges, maximizing the distance between the line and the closest apple and orange.

### 2. Kernel Functions

*   **Definition:** Kernel functions are mathematical functions that define the similarity between data points. They implicitly map the input data into a higher-dimensional feature space, where a linear separation might be possible.

*   **Common Kernel Types:**

    *   **2.1 Linear Kernel:**
        *   **Formula:** `K(x, x') = x · x'` (dot product of two vectors)
        *   **Description:**  Simply calculates the dot product between the input vectors. It's suitable for linearly separable data.
        *   **Advantages:** Simple, fast computation, few parameters.
        *   **Disadvantages:**  Cannot handle non-linearly separable data.
        *   **Use Case:**  Text classification where features are often linearly related.

    *   **2.2 Polynomial Kernel:**
        *   **Formula:** `K(x, x') = (γ * (x · x') + r)^d`
            *   `γ`: Gamma (kernel coefficient)
            *   `r`:  Coefficient (bias term)
            *   `d`: Degree of the polynomial
        *   **Description:** Maps data to a higher-dimensional space using polynomial combinations of the original features.
        *   **Advantages:** Can model non-linear relationships, more flexible than linear kernel.
        *   **Disadvantages:**  More parameters to tune (γ, r, d), can be computationally expensive, prone to overfitting if the degree is too high.
        *   **Use Case:** Image recognition, sentiment analysis.

    *   **2.3 Radial Basis Function (RBF) Kernel (also known as Gaussian Kernel):**
        *   **Formula:** `K(x, x') = exp(-γ * ||x - x'||^2)`
            *   `γ`: Gamma (kernel coefficient),  γ > 0
            *   `||x - x'||`: Euclidean distance between x and x'
        *   **Description:**  Maps data to an infinite-dimensional space. The similarity between two points decreases exponentially with distance.
        *   **Advantages:**  Handles non-linear relationships well, generally outperforms linear and polynomial kernels in many cases, fewer parameters than polynomial.
        *   **Disadvantages:**  More computationally expensive than linear, sensitive to the choice of γ.  Can overfit if γ is too large.
        *   **Use Case:** Image classification, bioinformatics, object recognition.

### 3. Fashion MNIST Dataset

*   **Description:** A dataset consisting of 60,000 training images and 10,000 testing images of fashion articles (e.g., T-shirt/top, Trouser, Pullover, Dress, Coat, Sandal, Shirt, Sneaker, Bag, Ankle boot). Each image is a 28x28 grayscale image.
*   **Why use Fashion MNIST?:** It serves as a drop-in replacement for the original MNIST handwritten digit dataset, which is often too easy for modern machine learning models.  Fashion MNIST provides a more challenging benchmark.

### 4. Implementation with Python and Scikit-learn

*   **Libraries:**
    *   `sklearn.svm`:  For SVM classifiers (SVC)
    *   `sklearn.model_selection`: For splitting data into training and testing sets, and performing cross-validation.
    *   `sklearn.metrics`:  For evaluating model performance (e.g., accuracy, confusion matrix).
    *   `sklearn.preprocessing`:  For scaling the data (important for SVMs).
    *   `matplotlib.pyplot`: For visualizing data and results.
    *   `numpy`: For numerical operations.

*   **Code Example (Conceptual Outline):**

    ```python
    import numpy as np
    from sklearn import svm
    from sklearn.model_selection import train_test_split
    from sklearn.metrics import accuracy_score, classification_report
    from sklearn.preprocessing import StandardScaler
    from tensorflow import keras # For loading Fashion MNIST

    # 1. Load Fashion MNIST Dataset
    (x_train, y_train), (x_test, y_test) = keras.datasets.fashion_mnist.load_data()

    # 2. Preprocess the Data
    x_train = x_train.reshape(x_train.shape[0], -1) / 255.0 # Flatten and normalize
    x_test = x_test.reshape(x_test.shape[0], -1) / 255.0

    # 3. Scale the Data (Important for SVMs)
    scaler = StandardScaler()
    x_train = scaler.fit_transform(x_train)
    x_test = scaler.transform(x_test)

    # 4. Split the Data into Training and Validation Sets
    x_train, x_val, y_train, y_val = train_test_split(x_train, y_train, test_size=0.2, random_state=42)


    # 5. Define and Train SVM Models with Different Kernels
    kernels = ['linear', 'poly', 'rbf']
    models = {}  # Store trained models

    for kernel in kernels:
        print(f"Training SVM with {kernel} kernel...")
        if kernel == 'poly':
            model = svm.SVC(kernel=kernel, degree=3, gamma='scale', coef0=0.0, C=1.0) # Example parameters - tune these
        else:
            model = svm.SVC(kernel=kernel, gamma='scale', C=1.0) # Example parameters - tune these
        model.fit(x_train, y_train)
        models[kernel] = model  # Store the trained model

    # 6. Evaluate the Models
    for kernel, model in models.items():
        y_pred = model.predict(x_val)  # Predict on the validation set
        accuracy = accuracy_score(y_val, y_pred)
        print(f"Accuracy with {kernel} kernel: {accuracy:.4f}")
        print(f"Classification Report with {kernel} kernel:\n{classification_report(y_val, y_pred)}")

    # 7. Test the best Model on the Test Dataset

    # Choose the best model based on validation set performance
    best_kernel = max(models, key=lambda k: accuracy_score(y_val, models[k].predict(x_val)))
    best_model = models[best_kernel]

    y_test_pred = best_model.predict(x_test)
    test_accuracy = accuracy_score(y_test, y_test_pred)
    print(f"Test Accuracy with {best_kernel} kernel: {test_accuracy:.4f}")
    print(f"Test Classification Report with {best_kernel} kernel:\n{classification_report(y_test, y_test_pred)}")
    ```

### 5. Advantages and Disadvantages of Each Kernel Type

| Kernel Type | Advantages                                                                 | Disadvantages                                                                                                | When to Use                                                                                                |
|-------------|-----------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------------------------------|
| Linear      | Simple, fast, few parameters, good for linearly separable data.            | Cannot handle non-linear relationships.                                                                     | Text classification, image classification (when features are largely linearly correlated).                |
| Polynomial    | Can model non-linear relationships, more flexible than linear.           | More parameters to tune, computationally expensive, prone to overfitting (high degree).                       | Image recognition, sentiment analysis (when data has complex polynomial relationships).                    |
| RBF        | Handles non-linear relationships well, generally good performance, few params. | More computationally expensive than linear, sensitive to gamma, can overfit (high gamma).                  | Image classification, bioinformatics, object recognition (when data has complex non-linear relationships). |

### 6. Performance Evaluation

*   **Metrics:**
    *   **Accuracy:** The proportion of correctly classified instances.
    *   **Precision:** The proportion of correctly predicted positive instances out of all instances predicted as positive.
    *   **Recall:** The proportion of correctly predicted positive instances out of all actual positive instances.
    *   **F1-score:** The harmonic mean of precision and recall.
    *   **Confusion Matrix:**  A table showing the counts of true positive, true negative, false positive, and false negative predictions.

*   **Cross-Validation:** A technique used to evaluate the model's performance on unseen data by splitting the data into multiple folds and training and testing the model on different combinations of folds.  `sklearn.model_selection.cross_val_score` can be used.

### 7. Hyperparameter Tuning

*   **Importance:** Choosing the right hyperparameters (e.g., C, gamma, degree) is crucial for achieving optimal performance.
*   **Techniques:**
    *   **Grid Search:**  Exhaustively searches through a pre-defined set of hyperparameter values.
    *   **Randomized Search:**  Randomly samples hyperparameter values from a specified distribution.
    *   **Bayesian Optimization:**  Uses Bayesian methods to efficiently explore the hyperparameter space.
*   **Scikit-learn Tools:**  `GridSearchCV` and `RandomizedSearchCV` can be used for hyperparameter tuning.

### 8. Practice Questions/Exercises

1.  **Question:**  What is the role of support vectors in SVM?

    **Answer:** Support vectors are the data points that lie closest to the hyperplane and influence its position and orientation. They are critical for defining the decision boundary.

2.  **Question:**  Explain the difference between linear and RBF kernels.

    **Answer:** A linear kernel calculates the dot product of input vectors and is suitable for linearly separable data.  An RBF kernel maps data to an infinite-dimensional space using an exponential function based on the distance between points.  RBF can handle non-linear relationships.

3.  **Question:**  Why is data scaling important when using SVMs?

    **Answer:** SVMs are sensitive to the scale of the input features. Features with larger values can dominate the calculation of the distance between data points, leading to biased results. Scaling ensures that all features contribute equally to the model.

4.  **Exercise:** Implement SVM classifiers with linear, polynomial (degree=3), and RBF kernels on a subset of the Fashion MNIST dataset (e.g., the first 10000 training examples and 2000 testing examples).  Evaluate their performance using accuracy and F1-score. Experiment with different values for the hyperparameters C and gamma (for RBF).  Which kernel performs best?

    **Answer (Conceptual):**  After running the code and tuning hyperparameters, you will likely find that the RBF kernel performs the best on the Fashion MNIST dataset.  The polynomial kernel might perform reasonably well, but requires careful tuning of the degree and other parameters to avoid overfitting. The linear kernel may struggle with this dataset due to the non-linear nature of the relationships between fashion items. Remember to scale your data!  The best values for C and gamma will depend on the specific data subset and the complexity of the decision boundary.

### 9. Important Points to Remember

*   **Data Preprocessing:** Scaling and normalization are crucial for SVM performance.
*   **Kernel Selection:** Choose the appropriate kernel based on the data characteristics and the expected complexity of the decision boundary.
*   **Hyperparameter Tuning:** Optimize the hyperparameters using cross-validation techniques.
*   **Computational Cost:** Be mindful of the computational cost of different kernels, especially for large datasets. RBF is generally more computationally expensive than Linear.
*   **Overfitting:**  Avoid overfitting by using appropriate regularization techniques and carefully tuning the hyperparameters.  High degree polynomial kernels and RBF kernels with very large gammas are particularly prone to overfitting.
*   **Interpretability:** Linear kernels produce more interpretable models because you can directly examine the weights assigned to each feature.

By working through these notes and the provided example, you should gain a solid understanding of how to implement and compare SVM classifiers with different kernels on the Fashion MNIST dataset. Remember that experimentation and careful analysis of the results are key to building effective machine learning models.
