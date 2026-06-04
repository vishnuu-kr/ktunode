---
title: "Classification  - Logistic regression"
subject: "MACHINE LEARNING"
module: "Module 2: Classification  "
branch: "Computer Science and Engineering"
semester: 5
topicId: "684162760fc9aa1fdbc8b5b3"
status: "completed"
scrapedAt: "2026-05-20T16:46:29.219Z"
---
# MACHINE LEARNING - Module 2: Classification - Logistic Regression

## Learning Outcomes:

*   Understand the concept of logistic regression and its application in classification problems.
*   Explain the sigmoid function and its role in logistic regression.
*   Formulate the cost function for logistic regression and understand its properties.
*   Apply gradient descent to optimize the cost function and learn the model parameters.
*   Evaluate the performance of a logistic regression model using appropriate metrics.
*   Implement logistic regression using a programming language (e.g., Python with scikit-learn).
*   Understand the differences and similarities between logistic regression and linear regression.

## 1. Introduction to Logistic Regression

*   **What is Logistic Regression?**
    *   A linear model for **binary classification** problems (predicting one of two outcomes).
    *   Predicts the *probability* of a data point belonging to a particular class.
    *   Despite its name, it's a *classification* algorithm, not a regression algorithm.
*   **Why use Logistic Regression?**
    *   Simple and efficient.
    *   Provides interpretable results (probability of belonging to a class).
    *   Can be regularized to prevent overfitting.
    *   Works well with linearly separable data.
*   **Examples of Logistic Regression Applications:**
    *   Spam detection (spam or not spam).
    *   Medical diagnosis (disease present or absent).
    *   Customer churn prediction (will churn or not).
    *   Fraud detection (fraudulent or not).

## 2. The Sigmoid Function

*   **Definition:**
    *   Also known as the logistic function.
    *   A mathematical function that maps any real value to a value between 0 and 1.
    *   Formula:  `σ(z) = 1 / (1 + e^(-z))`
    *   where:
        *   `σ(z)` is the sigmoid function output.
        *   `z` is the input to the function.
        *   `e` is Euler's number (approximately 2.71828).
*   **Role in Logistic Regression:**
    *   Transforms the linear combination of features (`z = w^T * x + b`) into a probability between 0 and 1.
    *   `w` is the vector of weights, `x` is the feature vector, and `b` is the bias (or intercept).
    *   The output of the sigmoid function is interpreted as the probability of the data point belonging to the positive class (class 1).  `P(y=1|x)`
*   **Properties of the Sigmoid Function:**
    *   Ranges from 0 to 1.
    *   S-shaped curve.
    *   `σ(0) = 0.5`. This is the decision boundary – if the output of the sigmoid is greater than 0.5, we classify the input as class 1; otherwise, as class 0.
*   **Visual Representation:**
    ```
    import numpy as np
    import matplotlib.pyplot as plt

    def sigmoid(z):
        return 1 / (1 + np.exp(-z))

    z = np.linspace(-10, 10, 100)
    sigma_z = sigmoid(z)

    plt.plot(z, sigma_z)
    plt.xlabel("z")
    plt.ylabel("σ(z)")
    plt.title("Sigmoid Function")
    plt.grid(True)
    plt.show()
    ```

## 3. Cost Function

*   **Why a Specific Cost Function?**
    *   The mean squared error (MSE) cost function, used in linear regression, is *not* suitable for logistic regression because the sigmoid function introduces non-linearity.  This can lead to a non-convex cost function, resulting in multiple local minima, making it difficult for gradient descent to find the global minimum.
*   **Definition:**
    *   The cost function for logistic regression is called the **cross-entropy loss** (or log loss).
    *   It measures the difference between the predicted probabilities and the actual labels.
    *   Formula:
        *   For a single data point:
            `Cost(h(x), y) = -y * log(h(x)) - (1 - y) * log(1 - h(x))`
        *   For the entire dataset (m data points):
            `J(w, b) = -1/m * Σ [yᵢ * log(h(xᵢ)) + (1 - yᵢ) * log(1 - h(xᵢ))]`
            where:
            *   `h(xᵢ)` is the predicted probability for data point `xᵢ` (output of the sigmoid function).
            *   `yᵢ` is the actual label for data point `xᵢ` (0 or 1).
            *   `m` is the number of data points.
*   **Intuition:**
    *   If `y = 1`, the cost is high when `h(x)` is close to 0 (wrong prediction).
    *   If `y = 0`, the cost is high when `h(x)` is close to 1 (wrong prediction).
*   **Properties:**
    *   Convex function (has a single global minimum).
    *   Ensures that gradient descent can efficiently find the optimal weights and bias.

## 4. Gradient Descent

*   **What is Gradient Descent?**
    *   An iterative optimization algorithm used to find the minimum of a function (in this case, the cost function).
    *   Starts with an initial guess for the parameters (weights `w` and bias `b`) and iteratively updates them in the direction of the negative gradient (steepest descent).
*   **Applying Gradient Descent to Logistic Regression:**
    *   **Goal:** Minimize the cost function `J(w, b)`.
    *   **Steps:**
        1.  **Initialize:**  Set initial values for `w` and `b` (e.g., 0).
        2.  **Compute Gradients:** Calculate the partial derivatives of the cost function with respect to `w` and `b`.
            *   `∂J/∂w = 1/m * Σ [ (h(xᵢ) - yᵢ) * xᵢ ]`
            *   `∂J/∂b = 1/m * Σ [ h(xᵢ) - yᵢ ]`
        3.  **Update Parameters:** Update `w` and `b` using the following equations:
            *   `w = w - α * (∂J/∂w)`
            *   `b = b - α * (∂J/∂b)`
            where `α` is the learning rate (controls the step size).
        4.  **Repeat:** Repeat steps 2 and 3 until convergence (the cost function stops decreasing significantly).
*   **Learning Rate (α):**
    *   A crucial hyperparameter.
    *   Too large: May overshoot the minimum and oscillate.
    *   Too small: May take a very long time to converge.
    *   Experimentation is often needed to find a suitable learning rate.
*   **Implementation (Python Example):**

    ```python
    import numpy as np

    def sigmoid(z):
        return 1 / (1 + np.exp(-z))

    def cost_function(h, y):
        m = len(y)
        cost = -1/m * np.sum(y * np.log(h) + (1 - y) * np.log(1 - h))
        return cost

    def gradient_descent(X, y, w, b, alpha, num_iters):
        m = len(y)
        costs = []
        for i in range(num_iters):
            z = np.dot(X, w) + b
            h = sigmoid(z)
            dw = 1/m * np.dot(X.T, (h - y))
            db = 1/m * np.sum(h - y)
            w = w - alpha * dw
            b = b - alpha * db
            cost = cost_function(h, y)
            costs.append(cost)
            if i % 100 == 0:
                print(f"Iteration {i}: Cost = {cost}")

        return w, b, costs


    # Example Usage (replace with your data)
    X = np.array([[1, 2], [1, 3], [1, 4], [1, 5], [1, 6]])  # Features
    y = np.array([0, 0, 0, 1, 1])  # Labels
    w = np.zeros(X.shape[1])  # Initialize weights
    b = 0  # Initialize bias
    alpha = 0.01  # Learning rate
    num_iters = 1000  # Number of iterations

    w, b, costs = gradient_descent(X, y, w, b, alpha, num_iters)

    print("Final Weights:", w)
    print("Final Bias:", b)
    ```

## 5. Model Evaluation

*   **Accuracy:**
    *   The most common metric.
    *   Percentage of correctly classified instances.
    *   `Accuracy = (Number of Correct Predictions) / (Total Number of Predictions)`
    *   Can be misleading if the dataset is imbalanced (e.g., 99% of the data points belong to one class).
*   **Confusion Matrix:**
    *   A table that summarizes the performance of a classification model.
    *   Rows represent the actual classes, and columns represent the predicted classes.
    *   **Key terms:**
        *   **True Positive (TP):**  Correctly predicted positive instances.
        *   **True Negative (TN):** Correctly predicted negative instances.
        *   **False Positive (FP):** Incorrectly predicted positive instances (Type I error).
        *   **False Negative (FN):** Incorrectly predicted negative instances (Type II error).
*   **Precision:**
    *   Measures how many of the positive predictions were actually correct.
    *   `Precision = TP / (TP + FP)`
    *   Important when minimizing false positives is crucial (e.g., spam detection).
*   **Recall (Sensitivity or True Positive Rate):**
    *   Measures how many of the actual positive instances were correctly predicted.
    *   `Recall = TP / (TP + FN)`
    *   Important when minimizing false negatives is crucial (e.g., medical diagnosis).
*   **F1-Score:**
    *   The harmonic mean of precision and recall.
    *   `F1-Score = 2 * (Precision * Recall) / (Precision + Recall)`
    *   Provides a balanced measure of the model's performance.
*   **ROC Curve (Receiver Operating Characteristic):**
    *   Plots the true positive rate (TPR) against the false positive rate (FPR) at various threshold settings.
    *   AUC (Area Under the ROC Curve): A measure of the model's ability to distinguish between positive and negative classes.  AUC ranges from 0 to 1.  A higher AUC indicates better performance.
*   **Implementation (Python with scikit-learn):**

    ```python
    from sklearn.model_selection import train_test_split
    from sklearn.linear_model import LogisticRegression
    from sklearn.metrics import accuracy_score, confusion_matrix, precision_score, recall_score, f1_score, roc_auc_score, roc_curve
    import matplotlib.pyplot as plt

    # Assuming you have X (features) and y (labels)
    # Split data into training and testing sets
    X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)

    # Create and train the Logistic Regression model
    model = LogisticRegression(solver='liblinear', random_state=42)  #solver is required
    model.fit(X_train, y_train)

    # Make predictions
    y_pred = model.predict(X_test)
    y_prob = model.predict_proba(X_test)[:, 1] # Probability of positive class


    # Evaluate the model
    accuracy = accuracy_score(y_test, y_pred)
    conf_matrix = confusion_matrix(y_test, y_pred)
    precision = precision_score(y_test, y_pred)
    recall = recall_score(y_test, y_pred)
    f1 = f1_score(y_test, y_pred)
    auc = roc_auc_score(y_test, y_prob)

    print("Accuracy:", accuracy)
    print("Confusion Matrix:\n", conf_matrix)
    print("Precision:", precision)
    print("Recall:", recall)
    print("F1-Score:", f1)
    print("AUC:", auc)

    #Plot ROC Curve
    fpr, tpr, thresholds = roc_curve(y_test, y_prob)
    plt.plot(fpr, tpr, label=f"AUC = {auc:.2f}")
    plt.plot([0, 1], [0, 1], linestyle='--', color='r', label='Random')
    plt.xlabel("False Positive Rate")
    plt.ylabel("True Positive Rate")
    plt.title("ROC Curve")
    plt.legend()
    plt.show()
    ```

## 6. Implementation using Python and Scikit-learn

*   Scikit-learn provides a straightforward way to implement logistic regression.
*   Key steps:
    1.  **Import `LogisticRegression`:**  `from sklearn.linear_model import LogisticRegression`
    2.  **Create an instance:** `model = LogisticRegression(solver='liblinear')`  *Note: you often need to specify a solver, such as 'liblinear', 'lbfgs', 'newton-cg', 'sag', or 'saga'.  'liblinear' is suitable for small datasets.*
    3.  **Train the model:** `model.fit(X_train, y_train)`
    4.  **Make predictions:** `y_pred = model.predict(X_test)`
    5.  **Evaluate the model:** Use metrics from `sklearn.metrics`.

## 7. Logistic Regression vs. Linear Regression

| Feature          | Logistic Regression                                 | Linear Regression                                    |
| ---------------- | --------------------------------------------------- | ---------------------------------------------------- |
| **Type**        | Classification                                       | Regression                                         |
| **Output**        | Probability (0 to 1)                                | Continuous value                                     |
| **Target Variable** | Categorical (binary)                               | Continuous                                         |
| **Cost Function** | Cross-entropy loss                                  | Mean squared error (MSE)                               |
| **Activation Function** | Sigmoid                                            | None (or identity function)                           |
| **Use Case**     | Predicting category membership                      | Predicting a continuous value                        |
| **Assumptions**  | Linearity of features and log-odds; independence of errors | Linearity, normality, independence of errors, homoscedasticity |

## 8. Important Points to Remember

*   Logistic Regression is a *classification* algorithm, despite its name.
*   The Sigmoid function is essential for mapping linear combinations to probabilities.
*   The Cross-entropy loss function is crucial for training Logistic Regression models effectively.
*   Gradient descent is used to find the optimal model parameters.
*   Choose the learning rate carefully to avoid overshooting or slow convergence.
*   Use appropriate evaluation metrics to assess model performance, considering the specific problem and data characteristics.
*   Be aware of the assumptions of Logistic Regression and address potential violations.

## 9. Practice Questions and Exercises

1.  **What is the role of the sigmoid function in logistic regression?**
    *   Answer: To transform the linear combination of features into a probability between 0 and 1.

2.  **Why is the cross-entropy loss function preferred over the mean squared error (MSE) for logistic regression?**
    *   Answer: MSE can result in a non-convex cost function with multiple local minima, making optimization difficult. Cross-entropy is convex.

3.  **Explain how gradient descent is used to train a logistic regression model.**
    *   Answer: Gradient descent iteratively adjusts the model parameters (weights and bias) by moving in the direction of the negative gradient of the cost function until convergence.

4.  **What are some evaluation metrics commonly used for logistic regression, and when would you prefer one over another?**
    *   Answer: Accuracy, Precision, Recall, F1-score, AUC.  Choose based on the specific problem requirements.  For example, use recall when minimizing false negatives is critical.

5.  **Implement logistic regression using Python and scikit-learn to classify the following data. X = [[1], [2], [3], [4]], y = [0, 0, 1, 1]. Split the data into training and testing sets and evaluate the performance of the model.**

    ```python
    from sklearn.model_selection import train_test_split
    from sklearn.linear_model import LogisticRegression
    from sklearn.metrics import accuracy_score

    X = [[1], [2], [3], [4]]
    y = [0, 0, 1, 1]

    X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.25, random_state=42) #Small dataset, so using smaller test size

    model = LogisticRegression(solver='liblinear', random_state=42)
    model.fit(X_train, y_train)

    y_pred = model.predict(X_test)

    accuracy = accuracy_score(y_test, y_pred)
    print("Accuracy:", accuracy) #Prints accuracy: 1.0, indicating perfect classification on the test set.

    ```
6.  **Discuss the impact of the learning rate on the convergence of gradient descent in logistic regression.**
    *   Answer: A learning rate that is too high may cause the algorithm to overshoot the minimum and fail to converge, while a learning rate that is too low may cause the algorithm to converge very slowly.
