---
title: "Investigate the bias-variance tradeoff using polynomial regression on the Boston Housing dataset. Plot the training and validation errors for various polynomial degrees and discuss the tradeoff between bias and variance."
subject: "MACHINE LEARNING LAB"
module: "Module 20: Investigate the bias"
branch: "Computer Science and Engineering"
semester: 5
topicId: "684162770fc9aa1fdbc8b9b2"
status: "completed"
scrapedAt: "2026-05-20T16:48:16.955Z"
---
# MACHINE LEARNING LAB - Module 20: Investigating Bias

## Topic: Investigating the Bias-Variance Tradeoff using Polynomial Regression on the Boston Housing Dataset

**Description:** Explore the bias-variance tradeoff using polynomial regression on the Boston Housing dataset. Plot training and validation errors for various polynomial degrees and discuss the relationship between model complexity, bias, and variance.

**Learning Outcomes:**

*   Understand the concepts of bias and variance in machine learning.
*   Understand the bias-variance tradeoff.
*   Apply polynomial regression to a real-world dataset (Boston Housing).
*   Analyze training and validation errors for different polynomial degrees.
*   Explain the relationship between polynomial degree, bias, and variance.
*   Use visualizations (plots) to illustrate the bias-variance tradeoff.

---

### 1. Key Concepts and Definitions

*   **Bias:**
    *   Definition: Bias is the error introduced by approximating a real-life problem, which is often complex, by a simplified model. It represents the difference between the average prediction of our model and the correct value we are trying to predict.
    *   Characteristics:
        *   High bias models make strong assumptions about the data.
        *   High bias models tend to *underfit* the data, meaning they fail to capture important relationships.
        *   High bias models typically have simple architectures (e.g., linear models for non-linear data).
        *   Example: Trying to fit a straight line to a dataset with a strong quadratic relationship.
    *   Consequences: Poor performance on both training and test data.

*   **Variance:**
    *   Definition: Variance refers to the sensitivity of the model to changes in the training data. It measures how much the model's prediction varies if trained on different subsets of the data.
    *   Characteristics:
        *   High variance models are very sensitive to the specific training data.
        *   High variance models tend to *overfit* the data, meaning they learn the noise and idiosyncrasies of the training data.
        *   High variance models typically have complex architectures (e.g., high-degree polynomials).
        *   Example: Fitting a very high-degree polynomial to a dataset; it will perfectly fit the training data but perform poorly on unseen data.
    *   Consequences: Excellent performance on training data but poor performance on unseen data (test/validation data).

*   **Bias-Variance Tradeoff:**
    *   Definition: The tradeoff between bias and variance describes the fact that decreasing one often increases the other.  The goal is to find a model with a balance between bias and variance that minimizes the total error (generalization error).
    *   Explanation:
        *   **High Bias, Low Variance:** The model is simple and consistent but misses crucial patterns in the data. It underfits.
        *   **Low Bias, High Variance:** The model is complex and captures intricate details, including noise, in the training data. It overfits.
        *   **Optimal Model:** A model that captures the underlying patterns without overfitting the noise.  This achieves a balance between bias and variance.

*   **Underfitting:**
    *   Definition: A model is underfitting when it is too simple to capture the underlying patterns in the data.
    *   Symptoms:
        *   High bias.
        *   Poor performance on both training and validation datasets.

*   **Overfitting:**
    *   Definition: A model is overfitting when it learns the noise and specific characteristics of the training data rather than the underlying patterns.
    *   Symptoms:
        *   High variance.
        *   Excellent performance on the training dataset but poor performance on the validation dataset.

*   **Polynomial Regression:**
    *   Definition: A form of linear regression where the relationship between the independent variable(s) and the dependent variable is modeled as an nth degree polynomial.
    *   Equation (for a single feature):  `y = b0 + b1*x + b2*x^2 + ... + bn*x^n`  where `b0, b1, ..., bn` are the coefficients and `n` is the degree of the polynomial.
    *   Use Case: Polynomial regression can model non-linear relationships between features and the target variable.  Higher degrees allow the model to fit more complex curves.

*   **Boston Housing Dataset:**
    *   Description: A dataset containing information about housing prices in the Boston area. Includes features such as crime rate, average number of rooms per dwelling, and pupil-teacher ratio.
    *   Availability: Often included in machine learning libraries like scikit-learn.

*   **Training Error:**
    *   Definition: The error of the model on the training dataset.  Represents how well the model has learned the training data.

*   **Validation Error:**
    *   Definition: The error of the model on the validation dataset. Represents how well the model generalizes to unseen data.  The validation dataset is a subset of the data that the model is not trained on.

### 2. Applying Polynomial Regression to the Boston Housing Dataset

This section outlines the steps involved in investigating the bias-variance tradeoff using polynomial regression and the Boston Housing dataset.

**Steps:**

1.  **Load and Prepare the Boston Housing Dataset:**
    *   Use a library like scikit-learn to load the dataset.
    *   Preprocess the data if necessary (e.g., feature scaling).  Scaling can be particularly important for polynomial regression as higher-degree terms can lead to large numerical values.
    *   Split the dataset into training and validation sets (e.g., 80% training, 20% validation).

    ```python
    from sklearn.datasets import load_boston
    from sklearn.model_selection import train_test_split
    from sklearn.preprocessing import StandardScaler
    import numpy as np

    boston = load_boston()
    X = boston.data
    y = boston.target

    X_train, X_val, y_train, y_val = train_test_split(X, y, test_size=0.2, random_state=42) # random_state for reproducibility

    # Feature Scaling
    scaler = StandardScaler()
    X_train = scaler.fit_transform(X_train)  # Fit only on training data!
    X_val = scaler.transform(X_val)  # Transform validation data using the fitted scaler.

    ```

2.  **Implement Polynomial Regression:**
    *   Use `PolynomialFeatures` from scikit-learn to transform the features into polynomial features.
    *   Create a linear regression model to fit the polynomial features.
    *   Train the model on the training data.
    *   Make predictions on both the training and validation sets.

    ```python
    from sklearn.preprocessing import PolynomialFeatures
    from sklearn.linear_model import LinearRegression
    from sklearn.metrics import mean_squared_error

    def polynomial_regression(X_train, y_train, X_val, y_val, degree):
        poly = PolynomialFeatures(degree=degree)
        X_train_poly = poly.fit_transform(X_train)
        X_val_poly = poly.transform(X_val)

        model = LinearRegression()
        model.fit(X_train_poly, y_train)

        y_train_pred = model.predict(X_train_poly)
        y_val_pred = model.predict(X_val_poly)

        train_error = mean_squared_error(y_train, y_train_pred)
        val_error = mean_squared_error(y_val, y_val_pred)

        return train_error, val_error
    ```

3.  **Iterate Through Different Polynomial Degrees:**
    *   Loop through a range of polynomial degrees (e.g., 1 to 10).
    *   For each degree, perform polynomial regression, calculate the training error and validation error.

    ```python
    degrees = range(1, 11)
    train_errors = []
    val_errors = []

    for degree in degrees:
        train_error, val_error = polynomial_regression(X_train, y_train, X_val, y_val, degree)
        train_errors.append(train_error)
        val_errors.append(val_error)
    ```

4.  **Plot Training and Validation Errors:**
    *   Create a plot with the polynomial degree on the x-axis and the training and validation errors on the y-axis.
    *   Plot both training and validation errors on the same plot for easy comparison.

    ```python
    import matplotlib.pyplot as plt

    plt.plot(degrees, train_errors, label='Training Error')
    plt.plot(degrees, val_errors, label='Validation Error')
    plt.xlabel('Polynomial Degree')
    plt.ylabel('Mean Squared Error')
    plt.title('Bias-Variance Tradeoff')
    plt.legend()
    plt.grid(True)
    plt.show()
    ```

5.  **Analyze the Results:**
    *   Observe the trends in the training and validation errors as the polynomial degree increases.
    *   Identify the degree where the validation error is minimized.  This represents a good balance between bias and variance.
    *   Discuss how the bias and variance change with the polynomial degree.

### 3. Discussing the Bias-Variance Tradeoff

*   **Low Degree Polynomials (e.g., Degree 1 or 2):**
    *   **High Bias:** The model is too simple to capture the complex relationships in the data.  It underfits the data.
    *   **Low Variance:** The model's predictions are relatively stable across different training sets.
    *   **Result:** Both training and validation errors are high.

*   **High Degree Polynomials (e.g., Degree 8, 9, or 10):**
    *   **Low Bias:** The model is complex enough to fit the training data very well, potentially capturing all the noise.
    *   **High Variance:** The model's predictions are very sensitive to the specific training data. Small changes in the training data can lead to significant changes in the model's parameters and predictions. It overfits the data.
    *   **Result:** Low training error but high validation error.  The gap between the training and validation errors is large.

*   **Optimal Degree (The "Sweet Spot"):**
    *   There is an intermediate polynomial degree where the validation error is minimized. This represents a good balance between bias and variance.  The model captures the underlying patterns in the data without overfitting the noise.

### 4. Important Points to Remember

*   **Feature Scaling:** Feature scaling (e.g., using `StandardScaler`) is crucial for polynomial regression, especially with higher degrees. Without scaling, higher-degree terms can lead to very large numerical values, which can cause instability and poor performance.
*   **Validation Set:** The validation set is essential for evaluating the model's generalization performance and identifying the optimal model complexity.
*   **Random State:** Use a `random_state` when splitting the data into training and validation sets to ensure reproducibility.
*   **Metrics:**  Mean Squared Error (MSE) is a common metric for regression problems, but other metrics like R-squared can also be used.
*   **Regularization:** Regularization techniques (e.g., L1 or L2 regularization) can help to reduce overfitting in polynomial regression, particularly with high degrees.  These techniques add a penalty to the model's complexity, encouraging it to find a simpler solution.

### 5. Practice Questions and Exercises

**Question 1:** What is the difference between bias and variance in machine learning?

**Answer:** Bias is the error introduced by approximating a real-life problem with a simplified model (underfitting). Variance is the sensitivity of the model to changes in the training data (overfitting).

**Question 2:** Explain the bias-variance tradeoff.

**Answer:** The bias-variance tradeoff is the property of a set of statistical models whereby models with lower bias in parameter estimation have higher variance of the parameter estimates across samples, and vice versa.  The goal is to find a balance that minimizes total error.

**Question 3:** How does increasing the degree of a polynomial affect the bias and variance of a polynomial regression model?

**Answer:** Increasing the degree generally reduces bias (as the model becomes more flexible) but increases variance (as the model becomes more sensitive to the training data).

**Question 4:** Why is feature scaling important when using polynomial regression?

**Answer:** Feature scaling is crucial because higher-degree terms in polynomial regression can lead to very large numerical values, which can cause instability and poor performance if the features are not on a similar scale.

**Exercise:**

1.  Implement polynomial regression on a different dataset (e.g., a dataset of your choice from scikit-learn or Kaggle).
2.  Experiment with different feature scaling techniques (e.g., `MinMaxScaler` instead of `StandardScaler`).
3.  Add regularization (e.g., L1 or L2 regularization) to the polynomial regression model and observe how it affects the bias-variance tradeoff.
4.  Try different splitting ratios for your train and validation sets.  How does this affect the training and validation errors?

### 6. Code Example (Complete)

```python
from sklearn.datasets import load_boston
from sklearn.model_selection import train_test_split
from sklearn.preprocessing import StandardScaler, PolynomialFeatures
from sklearn.linear_model import LinearRegression
from sklearn.metrics import mean_squared_error
import matplotlib.pyplot as plt
import numpy as np

# Load the Boston Housing dataset
boston = load_boston()
X = boston.data
y = boston.target

# Split the dataset into training and validation sets
X_train, X_val, y_train, y_val = train_test_split(X, y, test_size=0.2, random_state=42)

# Feature Scaling
scaler = StandardScaler()
X_train = scaler.fit_transform(X_train)
X_val = scaler.transform(X_val)


def polynomial_regression(X_train, y_train, X_val, y_val, degree):
    """
    Performs polynomial regression and returns training and validation errors.

    Args:
        X_train: Training features.
        y_train: Training target.
        X_val: Validation features.
        y_val: Validation target.
        degree: The degree of the polynomial.

    Returns:
        A tuple containing the training error and validation error.
    """
    poly = PolynomialFeatures(degree=degree)
    X_train_poly = poly.fit_transform(X_train)
    X_val_poly = poly.transform(X_val)

    model = LinearRegression()
    model.fit(X_train_poly, y_train)

    y_train_pred = model.predict(X_train_poly)
    y_val_pred = model.predict(X_val_poly)

    train_error = mean_squared_error(y_train, y_train_pred)
    val_error = mean_squared_error(y_val, y_val_pred)

    return train_error, val_error


# Iterate through different polynomial degrees
degrees = range(1, 11)
train_errors = []
val_errors = []

for degree in degrees:
    train_error, val_error = polynomial_regression(X_train, y_train, X_val, y_val, degree)
    train_errors.append(train_error)
    val_errors.append(val_error)

# Plot the training and validation errors
plt.plot(degrees, train_errors, label='Training Error')
plt.plot(degrees, val_errors, label='Validation Error')
plt.xlabel('Polynomial Degree')
plt.ylabel('Mean Squared Error')
plt.title('Bias-Variance Tradeoff')
plt.legend()
plt.grid(True)
plt.show()

print("Training Errors:", train_errors)
print("Validation Errors:", val_errors)
