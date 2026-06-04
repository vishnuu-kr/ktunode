---
title: "Tasks:"
subject: "MACHINE LEARNING LAB"
module: "Module 4: Estimate the parameters of a logistic regression model using MLE and MAP on the Breast Cancer Wisconsin dataset. Compare the results and discuss the effects of regularization."
branch: "Computer Science and Engineering"
semester: 5
topicId: "684162770fc9aa1fdbc8b943"
status: "completed"
scrapedAt: "2026-05-20T16:47:07.917Z"
---
# MACHINE LEARNING LAB - Module 4: Logistic Regression with MLE/MAP and Regularization

## Topic: Estimating Logistic Regression Parameters (MLE & MAP) and Regularization Effects on Breast Cancer Wisconsin Dataset

**Learning Outcomes:**

*   Understand the principles of Logistic Regression.
*   Implement Logistic Regression using Maximum Likelihood Estimation (MLE).
*   Implement Logistic Regression using Maximum A Posteriori (MAP) estimation.
*   Apply MLE and MAP to the Breast Cancer Wisconsin dataset.
*   Compare the performance of MLE and MAP estimation.
*   Understand and implement regularization techniques (L1 and L2) in Logistic Regression.
*   Analyze the impact of regularization on model parameters and performance.
*   Understand the difference between L1 and L2 regularization.

---

## 1. Logistic Regression Fundamentals

*   **Definition:** Logistic Regression is a supervised learning classification algorithm used to predict the probability of a categorical dependent variable. It's commonly used for binary classification problems (two classes).

*   **Key Concepts:**

    *   **Sigmoid Function (Logistic Function):**  Converts any real value into a value between 0 and 1, representing a probability.
        *   Formula:  σ(z) = 1 / (1 + e^(-z))
        *   Where: z = w<sup>T</sup>x + b  (linear combination of features and weights, plus bias)
        *   w = weights (coefficients), x = feature vector, b = bias (intercept)
    *   **Probability Output:**  The sigmoid function's output is interpreted as the probability that the input 'x' belongs to class 1.
        *   P(y=1 | x) = σ(w<sup>T</sup>x + b)
    *   **Decision Boundary:** A threshold (usually 0.5) is applied to the probability output to classify the instance. If P(y=1 | x) >= 0.5, predict class 1; otherwise, predict class 0.
    *   **Log-Likelihood Function:** A function that measures how well the model predicts the actual observed values.  MLE aims to maximize this function.

*   **Assumptions:**

    *   Linearity between features and the log-odds of the outcome.

*   **Why not Linear Regression for Classification?**
    * Linear regression can produce probabilities outside the range [0, 1], making it unsuitable for interpreting outputs as probabilities.
    * Linear regression assumes a linear relationship between features and the outcome, which may not hold for classification problems.

## 2. Maximum Likelihood Estimation (MLE) for Logistic Regression

*   **Principle:** MLE aims to find the parameters (weights *w* and bias *b*) that maximize the likelihood of observing the training data, given the model.
*   **Likelihood Function:**  The probability of observing all the data points in the training set, assuming they are independent.
*   **Log-Likelihood Function (Simplified for Logistic Regression):**  Since likelihoods are multiplied, which can lead to very small numbers and computational issues, we usually work with the log-likelihood.
    *   `L(w, b) = Σ [y_i * log(σ(w^T * x_i + b)) + (1 - y_i) * log(1 - σ(w^T * x_i + b))]`
        *   Where:
            *   `y_i` is the true label (0 or 1) for the i-th data point.
            *   `x_i` is the feature vector for the i-th data point.
            *   `σ` is the sigmoid function.
*   **Optimization:** We use optimization algorithms (e.g., Gradient Descent, Newton-Raphson) to find the parameters that maximize the log-likelihood function.

*   **Steps for MLE:**

    1.  **Define the Log-Likelihood Function:** As shown above.
    2.  **Calculate the Gradient:**  Compute the gradient of the log-likelihood function with respect to the weights *w* and bias *b*.  This involves taking partial derivatives.
    3.  **Optimization Algorithm:** Use an iterative optimization algorithm (like Gradient Descent) to update the parameters until convergence.
        *   **Gradient Descent Update Rule:**
            *   `w = w - learning_rate * gradient_w`
            *   `b = b - learning_rate * gradient_b`

**Example (Conceptual):**

Imagine you have two parameters, `w1` and `w2`. You want to find the values of `w1` and `w2` that maximize the log-likelihood of your data.  You start with some initial guesses for `w1` and `w2`, calculate the gradient of the log-likelihood at those points, and then move `w1` and `w2` in the direction of the steepest ascent (the direction of the gradient) by a small amount (determined by the learning rate).  You repeat this process until the change in the log-likelihood becomes very small, indicating that you've reached a maximum (or a local maximum).

## 3. Maximum A Posteriori (MAP) Estimation for Logistic Regression

*   **Principle:** MAP aims to find the parameters that maximize the *posterior* probability, which is proportional to the likelihood *and* a prior probability distribution over the parameters.  This incorporates prior beliefs or knowledge about the parameters.
*   **Bayes' Theorem:** Provides the foundation for MAP estimation.

    *   `P(w | D) ∝ P(D | w) * P(w)`
        *   `P(w | D)`: Posterior probability of the parameters *w* given the data *D*.
        *   `P(D | w)`: Likelihood of the data *D* given the parameters *w* (same as in MLE).
        *   `P(w)`: Prior probability of the parameters *w*.
*   **Prior Distribution:**  Represents our prior beliefs about the parameter values. Common choices include:

    *   **Gaussian Prior:**  Assumes the parameters are normally distributed around zero. Encourages smaller parameter values, leading to L2 regularization.
    *   **Laplace Prior:** Assumes the parameters follow a Laplace distribution. Encourages sparsity (some parameters become exactly zero), leading to L1 regularization.
*   **MAP Estimation Formula (Log-Domain):**  To find the optimal parameters, we maximize the log of the posterior probability.  Using a Gaussian prior for *w* centered at 0:

    *   `log(P(w | D)) ∝ log(P(D | w)) + log(P(w))`
    *   `log(P(w | D)) ∝  Σ [y_i * log(σ(w^T * x_i + b)) + (1 - y_i) * log(1 - σ(w^T * x_i + b))]  - (λ / 2) * ||w||^2`  (L2 Regularization)
        *   Where:
            *   `λ` (lambda) is a regularization parameter that controls the strength of the prior.  Higher λ means a stronger prior (more regularization).
            *   `||w||^2` is the L2 norm (squared Euclidean norm) of the weight vector *w*.

**Key Differences between MLE and MAP:**

*   MLE only considers the likelihood of the data.
*   MAP considers both the likelihood of the data and a prior belief about the parameters.
*   MAP can help prevent overfitting, especially when the dataset is small.

## 4. Applying MLE and MAP to the Breast Cancer Wisconsin Dataset

*   **Dataset Description:** The Breast Cancer Wisconsin dataset contains features computed from digitized images of fine needle aspirates (FNA) of a breast mass. These features describe characteristics of the cell nuclei present in the image. The goal is to classify whether a sample is benign or malignant.
*   **Steps:**

    1.  **Data Preprocessing:**
        *   Load the dataset.
        *   Handle missing values (if any).
        *   Scale the features (e.g., using StandardScaler) to improve convergence during optimization.  Scaling is crucial for both MLE and MAP.
        *   Split the data into training and testing sets.
    2.  **Implement Logistic Regression with MLE:**
        *   Define the log-likelihood function.
        *   Implement an optimization algorithm (e.g., Gradient Descent) to find the optimal weights and bias.
    3.  **Implement Logistic Regression with MAP:**
        *   Choose a prior distribution (e.g., Gaussian).
        *   Define the log of the posterior probability function (likelihood + prior).
        *   Implement an optimization algorithm to find the optimal weights and bias.
    4.  **Evaluation:**
        *   Use the trained models to predict on the test set.
        *   Calculate performance metrics (e.g., accuracy, precision, recall, F1-score, AUC).
    5.  **Comparison:**
        *   Compare the performance of MLE and MAP.  Analyze the learned weights and biases.

*   **Code Snippets (Conceptual - Python):**

    ```python
    import numpy as np
    from sklearn.model_selection import train_test_split
    from sklearn.preprocessing import StandardScaler
    from sklearn.datasets import load_breast_cancer
    from sklearn.metrics import accuracy_score

    # Load the dataset
    cancer = load_breast_cancer()
    X, y = cancer.data, cancer.target

    # Preprocessing
    X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)
    scaler = StandardScaler()
    X_train = scaler.fit_transform(X_train)
    X_test = scaler.transform(X_test)

    # Sigmoid Function
    def sigmoid(z):
        return 1 / (1 + np.exp(-z))

    # MLE (Simplified Gradient Descent)
    def logistic_regression_mle(X, y, learning_rate=0.01, epochs=1000):
        m, n = X.shape
        w = np.zeros(n)
        b = 0

        for _ in range(epochs):
            z = X @ w + b
            y_pred = sigmoid(z)
            dw = (1/m) * X.T @ (y_pred - y)
            db = (1/m) * np.sum(y_pred - y)

            w -= learning_rate * dw
            b -= learning_rate * db

        return w, b

    # MAP (L2 Regularization) -  Simplified Gradient Descent
    def logistic_regression_map(X, y, learning_rate=0.01, epochs=1000, lambda_reg=0.1):
        m, n = X.shape
        w = np.zeros(n)
        b = 0

        for _ in range(epochs):
            z = X @ w + b
            y_pred = sigmoid(z)
            dw = (1/m) * X.T @ (y_pred - y) + (lambda_reg/m) * w  # Regularization term added to dw
            db = (1/m) * np.sum(y_pred - y)

            w -= learning_rate * dw
            b -= learning_rate * db

        return w, b


    # Train models
    w_mle, b_mle = logistic_regression_mle(X_train, y_train)
    w_map, b_map = logistic_regression_map(X_train, y_train, lambda_reg=0.1)

    # Predict function
    def predict(X, w, b):
        z = X @ w + b
        y_pred = sigmoid(z)
        return (y_pred >= 0.5).astype(int)

    # Predictions
    y_pred_mle = predict(X_test, w_mle, b_mle)
    y_pred_map = predict(X_test, w_map, b_map)

    # Evaluate
    accuracy_mle = accuracy_score(y_test, y_pred_mle)
    accuracy_map = accuracy_score(y_test, y_pred_map)

    print(f"MLE Accuracy: {accuracy_mle}")
    print(f"MAP Accuracy: {accuracy_map}")
    ```

## 5. Regularization Techniques (L1 and L2)

*   **Purpose:** Regularization is used to prevent overfitting by adding a penalty term to the loss function.  This discourages overly complex models.
*   **L1 Regularization (Lasso):** Adds a penalty proportional to the *absolute value* of the weights.
    *   Penalty Term: `λ * ||w||_1 = λ * Σ |w_i|` (L1 norm)
    *   Effect: Encourages sparsity – some weights become exactly zero, effectively performing feature selection.
*   **L2 Regularization (Ridge):** Adds a penalty proportional to the *square* of the weights.
    *   Penalty Term: `(λ / 2) * ||w||^2 = (λ / 2) * Σ w_i^2` (squared L2 norm)
    *   Effect: Shrinks the weights towards zero, but rarely makes them exactly zero. Reduces the magnitude of all weights, making the model less sensitive to individual features.
*   **Elastic Net Regularization:** A combination of L1 and L2 regularization.  It has two parameters: `λ` (total regularization strength) and `ρ` (the L1 ratio, controlling the balance between L1 and L2).

*   **Effect of Regularization Parameter (λ):**

    *   **λ = 0:** No regularization. Equivalent to MLE. Prone to overfitting.
    *   **Small λ:** Weak regularization.
    *   **Large λ:** Strong regularization. Weights are heavily penalized, potentially leading to underfitting.

*   **Impact on Model Parameters:**
    *   L1 regularization can drive some parameters to zero, effectively removing those features from the model.
    *   L2 regularization shrinks all parameters, reducing their influence.

*   **Implementation with MAP:** As shown in the MAP section, adding a Gaussian prior effectively implements L2 regularization.  Using a Laplace prior implements L1 regularization.  In practice, libraries like scikit-learn provide built-in parameters for L1 and L2 regularization.

## 6. Comparing MLE and MAP and Effects of Regularization

*   **When to use MLE:**
    *   When you have a large dataset and no strong prior beliefs about the parameters.
    *   When computational cost is a major concern (MLE is generally faster).

*   **When to use MAP:**
    *   When you have a small dataset and want to prevent overfitting.
    *   When you have prior knowledge about the parameters that you want to incorporate into the model.
    *   When you want to perform feature selection (using L1 regularization).

*   **Expected Outcomes on Breast Cancer Wisconsin Dataset:**
    *   With a relatively small dataset like the Breast Cancer Wisconsin dataset, MAP with appropriate regularization is likely to perform better than MLE by preventing overfitting.
    *   L1 regularization might identify the most important features for prediction, potentially simplifying the model without sacrificing accuracy.
    *   Careful tuning of the regularization parameter (λ) is crucial to achieve optimal performance.  Too much regularization can lead to underfitting, while too little can lead to overfitting.  Techniques like cross-validation can be used to choose the optimal λ.

*   **Key Considerations:**

    *   **Data Scaling:** Scaling features is essential for both MLE and MAP, especially when using gradient-based optimization algorithms.
    *   **Regularization Parameter Tuning:** The regularization parameter (λ) must be carefully tuned using techniques like cross-validation.
    *   **Computational Cost:** MAP estimation can be more computationally expensive than MLE, especially for complex models and prior distributions.
    *   **Interpretability:** L1 regularization can improve model interpretability by performing feature selection.

## 7. Practice Questions & Exercises

**Q1:**  Explain the difference between MLE and MAP estimation.

**Answer:** MLE finds the parameters that maximize the likelihood of observing the data. MAP finds the parameters that maximize the posterior probability, which is proportional to the likelihood and a prior probability distribution over the parameters. MAP incorporates prior beliefs, while MLE only considers the data.

**Q2:** What is the purpose of regularization in logistic regression? Explain L1 and L2 regularization.

**Answer:** Regularization prevents overfitting by adding a penalty term to the loss function. L1 regularization (Lasso) adds a penalty proportional to the absolute value of the weights, encouraging sparsity and feature selection. L2 regularization (Ridge) adds a penalty proportional to the square of the weights, shrinking the weights towards zero.

**Q3:** How does the regularization parameter (λ) affect the model?

**Answer:** A larger λ corresponds to stronger regularization, which can prevent overfitting but may also lead to underfitting if it's too large. A smaller λ corresponds to weaker regularization.

**Q4:** When would you prefer MAP over MLE?

**Answer:** You would prefer MAP over MLE when you have a small dataset, when you have prior knowledge about the parameters, or when you want to prevent overfitting.

**Q5:** Implement logistic regression with L2 regularization (MAP with a Gaussian prior) using scikit-learn on the Breast Cancer Wisconsin dataset and evaluate its performance. Experiment with different values of the regularization parameter 'C' (inverse of λ).

**Answer:**

```python
from sklearn.linear_model import LogisticRegression
from sklearn.model_selection import train_test_split
from sklearn.preprocessing import StandardScaler
from sklearn.datasets import load_breast_cancer
from sklearn.metrics import accuracy_score

# Load the dataset
cancer = load_breast_cancer()
X, y = cancer.data, cancer.target

# Preprocessing
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)
scaler = StandardScaler()
X_train = scaler.fit_transform(X_train)
X_test = scaler.transform(X_test)

# Train Logistic Regression with L2 regularization
# C is the inverse of lambda (regularization strength). Smaller C = stronger regularization
model = LogisticRegression(penalty='l2', C=0.1, solver='liblinear')  # 'liblinear' solver is suitable for small datasets
model.fit(X_train, y_train)

# Predictions
y_pred = model.predict(X_test)

# Evaluate
accuracy = accuracy_score(y_test, y_pred)
print(f"Accuracy with L2 regularization (C=0.1): {accuracy}")

# Experiment with different values of C
for C in [0.01, 0.1, 1, 10, 100]:
    model = LogisticRegression(penalty='l2', C=C, solver='liblinear')
    model.fit(X_train, y_train)
    y_pred = model.predict(X_test)
    accuracy = accuracy_score(y_test, y_pred)
    print(f"Accuracy with L2 regularization (C={C}): {accuracy}")
```

## 8. Important Points to Remember

*   Logistic Regression is a powerful and widely used classification algorithm.
*   MLE and MAP are two different approaches for estimating the parameters of Logistic Regression.
*   Regularization is crucial for preventing overfitting, especially with smaller datasets.
*   L1 and L2 regularization have different effects on the model parameters and can be used for feature selection or simply to improve generalization.
*   Careful tuning of the regularization parameter is essential to achieve optimal performance.
*   Data preprocessing (scaling) is vital for Logistic Regression to converge correctly.
*   Always evaluate your model on a separate test set to get an unbiased estimate of its performance.
