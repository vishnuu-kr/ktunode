---
title: "Implement Ridge and Lasso regression on the Diabetes dataset. Compare the performance of these regularized models with standard linear regression."
subject: "MACHINE LEARNING LAB"
module: "Module 3: Implement Ridge and Lasso regression on the Diabetes dataset. Compare the performance of these regularized models with standard linear regression."
branch: "Computer Science and Engineering"
semester: 5
topicId: "684162770fc9aa1fdbc8b93b"
status: "completed"
scrapedAt: "2026-05-20T16:47:02.876Z"
---
## MACHINE LEARNING LAB - Module 3: Ridge & Lasso Regression on Diabetes Dataset

**Topic:** Implement Ridge and Lasso regression on the Diabetes dataset. Compare the performance of these regularized models with standard linear regression.

**Description:** This module focuses on understanding and implementing Ridge and Lasso regression, two popular regularization techniques, and comparing their performance against standard linear regression using the Diabetes dataset.  We will explore how these techniques can improve model generalization and prevent overfitting.

**Learning Outcomes:**

*   Understand the concepts of regularization, Ridge regression, and Lasso regression.
*   Implement Ridge and Lasso regression using Python and relevant libraries (e.g., scikit-learn).
*   Apply Ridge and Lasso regression to the Diabetes dataset.
*   Evaluate the performance of Ridge, Lasso, and standard linear regression models using appropriate metrics (e.g., Mean Squared Error, R-squared).
*   Compare and contrast the performance of these models and identify the impact of regularization.
*   Tune hyperparameters (alpha) for Ridge and Lasso regression using techniques like cross-validation.
*   Interpret the effects of Ridge and Lasso on feature coefficients.

---

### 1. Key Concepts and Definitions

*   **Linear Regression:** A linear approach for modeling the relationship between a scalar response (dependent variable) and one or more explanatory variables (independent variables).  It assumes a linear relationship between the input features and the output.

    *   Equation:  `y = Xw + b`
    *   Where:
        *   `y`: Target variable
        *   `X`: Feature matrix
        *   `w`: Weight vector (coefficients)
        *   `b`: Bias (intercept)

*   **Overfitting:** A phenomenon where a model learns the training data too well, including noise and outliers, resulting in poor generalization to unseen data.  High variance is a characteristic of an overfit model.

*   **Underfitting:**  A phenomenon where a model is too simple to capture the underlying patterns in the training data, leading to poor performance on both the training and test sets.  High bias is a characteristic of an underfit model.

*   **Regularization:** Techniques used to prevent overfitting by adding a penalty term to the loss function that discourages excessively large coefficients.  This forces the model to be simpler and more generalizable.

*   **Ridge Regression (L2 Regularization):**  Adds a penalty term to the loss function proportional to the *square* of the magnitude of the coefficients.  This shrinks the coefficients towards zero, but rarely sets them exactly to zero.

    *   Loss Function:  `MSE + alpha * ||w||^2`  (MSE is Mean Squared Error, `||w||^2` is the L2 norm of the coefficient vector)
    *   `alpha` (λ):  A hyperparameter that controls the strength of the regularization.  Higher `alpha` values lead to stronger regularization.

*   **Lasso Regression (L1 Regularization):** Adds a penalty term to the loss function proportional to the *absolute value* of the magnitude of the coefficients.  This shrinks the coefficients towards zero and can actually force some coefficients to be exactly zero, effectively performing feature selection.

    *   Loss Function: `MSE + alpha * ||w||_1` (MSE is Mean Squared Error, `||w||_1` is the L1 norm of the coefficient vector)
    *   `alpha` (λ): A hyperparameter that controls the strength of the regularization. Higher `alpha` values lead to stronger regularization.

*   **Hyperparameter:** A parameter that is set before the learning process begins.  Examples include the `alpha` value in Ridge and Lasso regression.  Hyperparameters are often tuned using techniques like cross-validation.

*   **Cross-Validation:**  A technique used to evaluate the performance of a model and tune hyperparameters.  It involves splitting the data into multiple folds, training the model on some folds, and evaluating it on the remaining fold(s).  Common types include k-fold cross-validation.

*   **Mean Squared Error (MSE):** A common metric used to evaluate regression models. It measures the average squared difference between the predicted and actual values.  Lower MSE values indicate better model performance.

*   **R-squared (Coefficient of Determination):** A statistical measure that represents the proportion of the variance in the dependent variable that is predictable from the independent variables.  Ranges from 0 to 1 (or can be negative).  Higher R-squared values indicate a better fit of the model to the data.

---

### 2. Implementation with Python (using scikit-learn)

```python
import numpy as np
from sklearn.datasets import load_diabetes
from sklearn.model_selection import train_test_split, cross_val_score, KFold
from sklearn.linear_model import LinearRegression, Ridge, Lasso
from sklearn.metrics import mean_squared_error, r2_score
from sklearn.preprocessing import StandardScaler
import matplotlib.pyplot as plt

# 1. Load the Diabetes dataset
diabetes = load_diabetes()
X = diabetes.data
y = diabetes.target

# 2. Data Preprocessing (Scaling is crucial for regularized models)
scaler = StandardScaler()
X_scaled = scaler.fit_transform(X)


# 3. Split the data into training and testing sets
X_train, X_test, y_train, y_test = train_test_split(X_scaled, y, test_size=0.3, random_state=42)


# 4. Linear Regression
linear_model = LinearRegression()
linear_model.fit(X_train, y_train)
linear_predictions = linear_model.predict(X_test)
linear_mse = mean_squared_error(y_test, linear_predictions)
linear_r2 = r2_score(y_test, linear_predictions)

print("Linear Regression:")
print(f"  MSE: {linear_mse:.4f}")
print(f"  R-squared: {linear_r2:.4f}")

# 5. Ridge Regression
ridge_model = Ridge(alpha=1.0)  # Initial alpha value
ridge_model.fit(X_train, y_train)
ridge_predictions = ridge_model.predict(X_test)
ridge_mse = mean_squared_error(y_test, ridge_predictions)
ridge_r2 = r2_score(y_test, ridge_predictions)

print("\nRidge Regression (alpha=1.0):")
print(f"  MSE: {ridge_mse:.4f}")
print(f"  R-squared: {ridge_r2:.4f}")


# 6. Lasso Regression
lasso_model = Lasso(alpha=0.1)  # Initial alpha value
lasso_model.fit(X_train, y_train)
lasso_predictions = lasso_model.predict(X_test)
lasso_mse = mean_squared_error(y_test, lasso_predictions)
lasso_r2 = r2_score(y_test, lasso_predictions)

print("\nLasso Regression (alpha=0.1):")
print(f"  MSE: {lasso_mse:.4f}")
print(f"  R-squared: {lasso_r2:.4f}")



# 7. Hyperparameter Tuning with Cross-Validation (Ridge)
alphas = np.logspace(-5, 2, 100)  # Range of alpha values to explore
ridge_cv_scores = []

for alpha in alphas:
    ridge = Ridge(alpha=alpha)
    kf = KFold(n_splits=5, shuffle=True, random_state=42)  # 5-fold cross-validation
    scores = cross_val_score(ridge, X_train, y_train, cv=kf, scoring='neg_mean_squared_error') # Use negative MSE because cross_val_score maximizes
    ridge_cv_scores.append(np.mean(scores) * -1) #Convert back to positive MSE for easier interpretation


best_alpha_ridge = alphas[np.argmin(ridge_cv_scores)]
best_ridge_model = Ridge(alpha=best_alpha_ridge)
best_ridge_model.fit(X_train, y_train)
best_ridge_predictions = best_ridge_model.predict(X_test)
best_ridge_mse = mean_squared_error(y_test, best_ridge_predictions)
best_ridge_r2 = r2_score(y_test, best_ridge_predictions)

print("\nRidge Regression (with Cross-Validation):")
print(f"  Best Alpha: {best_alpha_ridge:.4f}")
print(f"  MSE: {best_ridge_mse:.4f}")
print(f"  R-squared: {best_ridge_r2:.4f}")

# Plot alpha vs MSE
plt.figure(figsize=(10, 6))
plt.plot(alphas, ridge_cv_scores)
plt.xscale('log')
plt.xlabel('Alpha')
plt.ylabel('Mean Squared Error (Cross-Validation)')
plt.title('Ridge Regression: Alpha vs. Cross-Validation MSE')
plt.axvline(x=best_alpha_ridge, color='r', linestyle='--', label=f'Best Alpha = {best_alpha_ridge:.4f}')
plt.legend()
plt.grid(True)
plt.show()



# 8. Hyperparameter Tuning with Cross-Validation (Lasso)
alphas = np.logspace(-5, 2, 100)  # Range of alpha values to explore
lasso_cv_scores = []

for alpha in alphas:
    lasso = Lasso(alpha=alpha)
    kf = KFold(n_splits=5, shuffle=True, random_state=42)  # 5-fold cross-validation
    scores = cross_val_score(lasso, X_train, y_train, cv=kf, scoring='neg_mean_squared_error') # Use negative MSE because cross_val_score maximizes
    lasso_cv_scores.append(np.mean(scores) * -1) #Convert back to positive MSE for easier interpretation


best_alpha_lasso = alphas[np.argmin(lasso_cv_scores)]
best_lasso_model = Lasso(alpha=best_alpha_lasso)
best_lasso_model.fit(X_train, y_train)
best_lasso_predictions = best_lasso_model.predict(X_test)
best_lasso_mse = mean_squared_error(y_test, best_lasso_predictions)
best_lasso_r2 = r2_score(y_test, best_lasso_predictions)

print("\nLasso Regression (with Cross-Validation):")
print(f"  Best Alpha: {best_alpha_lasso:.4f}")
print(f"  MSE: {best_lasso_mse:.4f}")
print(f"  R-squared: {best_lasso_r2:.4f}")

# Plot alpha vs MSE
plt.figure(figsize=(10, 6))
plt.plot(alphas, lasso_cv_scores)
plt.xscale('log')
plt.xlabel('Alpha')
plt.ylabel('Mean Squared Error (Cross-Validation)')
plt.title('Lasso Regression: Alpha vs. Cross-Validation MSE')
plt.axvline(x=best_alpha_lasso, color='r', linestyle='--', label=f'Best Alpha = {best_alpha_lasso:.4f}')
plt.legend()
plt.grid(True)
plt.show()


# 9. Analyze Coefficients
print("\nLinear Regression Coefficients:", linear_model.coef_)
print("\nBest Ridge Regression Coefficients:", best_ridge_model.coef_)
print("\nBest Lasso Regression Coefficients:", best_lasso_model.coef_)

```

**Explanation of the code:**

1.  **Load the Diabetes Dataset:** Loads the dataset using `load_diabetes()` from `sklearn.datasets`.
2.  **Data Preprocessing:** Scales the data using `StandardScaler`. Scaling is *essential* for Ridge and Lasso regression because they are sensitive to the scale of the features.
3.  **Split Data:** Splits the data into training and testing sets using `train_test_split`.
4.  **Linear Regression:** Trains a standard linear regression model and evaluates its performance using MSE and R-squared.
5.  **Ridge Regression:** Trains a Ridge regression model with an initial `alpha` value and evaluates its performance.
6.  **Lasso Regression:** Trains a Lasso regression model with an initial `alpha` value and evaluates its performance.
7.  **Hyperparameter Tuning (Ridge):** Uses cross-validation to find the best `alpha` value for Ridge regression.  Iterates through a range of `alpha` values, trains a Ridge model for each `alpha`, and calculates the cross-validation score (negative MSE). Chooses the `alpha` with the lowest (negative) MSE.
8.  **Hyperparameter Tuning (Lasso):**  Similar to Ridge, uses cross-validation to find the best `alpha` for Lasso regression.
9.  **Analyze Coefficients:** Prints the coefficients of the linear regression, Ridge, and Lasso models.  Observe how Ridge shrinks coefficients and how Lasso can set some coefficients to zero.

---

### 3. Comparing Model Performance and Impact of Regularization

*   **Expected Outcomes:**
    *   With appropriate `alpha` tuning, Ridge and Lasso regression often outperform standard linear regression on the *test* set (unseen data). This is because they help to prevent overfitting.
    *   As `alpha` increases, the coefficients of Ridge and Lasso regression shrink. Lasso can force some coefficients to exactly zero, effectively performing feature selection.  Ridge will shrink coefficients towards zero but rarely to zero.
    *   High values of `alpha` can lead to underfitting if the regularization is too strong.

*   **Analyzing Coefficients:**  Compare the coefficients of the three models.
    *   **Linear Regression:** May have larger magnitude coefficients, potentially leading to overfitting.
    *   **Ridge Regression:** Coefficients are generally smaller in magnitude than linear regression.
    *   **Lasso Regression:** Some coefficients will be zero, indicating that those features are not being used by the model.

---

### 4.  Practice Questions and Exercises

**Question 1:** What is the main difference between Ridge and Lasso regression?

**Answer:** The main difference is the type of penalty used. Ridge uses L2 regularization (the square of the magnitude of the coefficients), while Lasso uses L1 regularization (the absolute value of the magnitude of the coefficients).  Lasso can perform feature selection by setting some coefficients to exactly zero, while Ridge shrinks coefficients towards zero.

**Question 2:** Why is it important to scale the data before applying Ridge or Lasso regression?

**Answer:** Ridge and Lasso regression are sensitive to the scale of the features. Features with larger scales will have a disproportionately larger impact on the penalty term, potentially leading to biased coefficient estimates. Scaling ensures that all features are treated equally.

**Question 3:** What does a higher `alpha` value mean in Ridge or Lasso regression?

**Answer:** A higher `alpha` value indicates stronger regularization. This means the model will penalize large coefficients more heavily, leading to smaller coefficients and potentially improved generalization.  However, too high of an alpha can cause underfitting.

**Question 4:** Explain the concept of cross-validation and why it's important for hyperparameter tuning.

**Answer:** Cross-validation is a technique used to evaluate a model's performance and tune hyperparameters. It involves splitting the data into multiple folds, training the model on some folds, and evaluating it on the remaining fold(s).  This process is repeated multiple times, with different folds used for training and evaluation.  Cross-validation provides a more robust estimate of the model's performance than a single train-test split and helps to prevent overfitting during hyperparameter tuning.  It helps to find the hyperparameter values that generalize best to unseen data.

**Exercise 1:** Modify the Python code above to try different ranges of `alpha` values during hyperparameter tuning for Ridge and Lasso.  Observe how the best `alpha` and the model performance change.

**Exercise 2:** Implement Ridge and Lasso regression on a different dataset (e.g., the Boston housing dataset).

**Exercise 3:**  Experiment with different cross-validation strategies (e.g., Leave-One-Out cross-validation) and compare the results.

**Exercise 4:** Modify the code to plot the coefficients of each feature as a function of alpha, for both Ridge and Lasso regression. This will visually show how regularization shrinks the coefficients.

---

### 5. Important Points to Remember

*   **Regularization is a powerful technique for preventing overfitting.**
*   **Ridge (L2) shrinks coefficients towards zero but rarely sets them exactly to zero.**
*   **Lasso (L1) can perform feature selection by setting some coefficients to exactly zero.**
*   **Data scaling is crucial before applying Ridge or Lasso regression.**
*   **The `alpha` hyperparameter controls the strength of regularization.**
*   **Cross-validation is essential for tuning the `alpha` hyperparameter and evaluating model performance.**
*   **Analyze the coefficients to understand the impact of regularization.**
*   **Be mindful of the bias-variance tradeoff when choosing the `alpha` value. Too much regularization can lead to underfitting.**
