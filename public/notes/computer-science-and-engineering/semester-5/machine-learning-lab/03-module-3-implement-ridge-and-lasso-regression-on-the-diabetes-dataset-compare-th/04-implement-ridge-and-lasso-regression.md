---
title: "Implement Ridge and Lasso regression."
subject: "MACHINE LEARNING LAB"
module: "Module 3: Implement Ridge and Lasso regression on the Diabetes dataset. Compare the performance of these regularized models with standard linear regression."
branch: "Computer Science and Engineering"
semester: 5
topicId: "684162770fc9aa1fdbc8b93e"
status: "completed"
scrapedAt: "2026-05-20T16:47:05.033Z"
---
# MACHINE LEARNING LAB - Module 3: Ridge and Lasso Regression on Diabetes Dataset

## Topic: Implement Ridge and Lasso Regression

### Description:

This module focuses on implementing Ridge and Lasso regression techniques on the Diabetes dataset and comparing their performance against standard linear regression. Regularization methods are employed to address overfitting, a common problem in machine learning, by adding penalties to the model's coefficients.

### Learning Outcomes:

*   Understand the concepts of Ridge and Lasso Regression.
*   Implement Ridge and Lasso Regression models using Python and appropriate libraries (e.g., scikit-learn).
*   Apply these models to the Diabetes dataset.
*   Evaluate and compare the performance of Ridge, Lasso, and standard Linear Regression using relevant metrics (e.g., Mean Squared Error, R-squared).
*   Understand the effect of the regularization parameter (alpha or lambda) on model performance.
*   Visualize the impact of regularization on model coefficients.

---

## 1. Key Concepts and Definitions:

*   **Overfitting:** A phenomenon where a model learns the training data too well, capturing noise and outliers, leading to poor performance on unseen data (test data).
*   **Regularization:** Techniques used to prevent overfitting by adding a penalty term to the cost function. This penalty discourages complex models by shrinking the coefficients of less important features.
*   **Linear Regression:** A linear approach to modeling the relationship between a scalar response (dependent variable) and one or more explanatory variables (independent variables).  The model assumes a linear relationship between the input features and the output. The goal is to find the best-fitting line (or hyperplane in higher dimensions) that minimizes the sum of squared errors between the predicted and actual values.
*   **Ridge Regression (L2 Regularization):** Adds a penalty term proportional to the *square* of the magnitude of the coefficients to the cost function. This penalty shrinks the coefficients towards zero but rarely makes them exactly zero.  It uses L2 norm.
    *   **Cost Function (Ridge):**  `RSS + alpha * ||w||₂²`  where:
        *   `RSS` is the Residual Sum of Squares (from standard linear regression).
        *   `alpha` (or lambda) is the regularization parameter controlling the strength of the penalty. Higher `alpha` means stronger regularization.
        *   `||w||₂²` is the L2 norm (Euclidean norm) of the coefficient vector `w` (sum of squares of coefficients).
*   **Lasso Regression (L1 Regularization):** Adds a penalty term proportional to the *absolute value* of the magnitude of the coefficients to the cost function. This penalty can force some coefficients to become exactly zero, effectively performing feature selection. It uses L1 norm.
    *   **Cost Function (Lasso):** `RSS + alpha * ||w||₁`  where:
        *   `RSS` is the Residual Sum of Squares (from standard linear regression).
        *   `alpha` (or lambda) is the regularization parameter controlling the strength of the penalty.  Higher `alpha` means stronger regularization.
        *   `||w||₁` is the L1 norm (sum of absolute values of coefficients).
*   **Regularization Parameter (alpha or lambda):**  A hyperparameter that controls the strength of the regularization penalty.  It determines the trade-off between fitting the data well and keeping the model simple.  Selecting the optimal alpha is crucial for good performance.  This is often done using cross-validation.
*   **Cross-Validation:** A technique used to evaluate the performance of a model on unseen data by splitting the data into multiple folds, training the model on some folds, and testing it on the remaining fold.  This process is repeated multiple times, and the average performance is used as an estimate of the model's generalization ability.  Used to optimize hyperparameters like `alpha`.
*   **Mean Squared Error (MSE):** A common metric for evaluating regression models, measuring the average squared difference between the predicted and actual values. Lower MSE indicates better performance.
*   **R-squared (Coefficient of Determination):**  A metric that represents the proportion of variance in the dependent variable that is predictable from the independent variables. It ranges from 0 to 1, where 1 indicates a perfect fit. Higher R-squared generally indicates better performance.

---

## 2. Implementation with Python (Scikit-learn):

```python
import numpy as np
from sklearn.datasets import load_diabetes
from sklearn.model_selection import train_test_split, cross_val_score, GridSearchCV
from sklearn.linear_model import LinearRegression, Ridge, Lasso
from sklearn.metrics import mean_squared_error, r2_score
import matplotlib.pyplot as plt

# 1. Load the Diabetes Dataset
diabetes = load_diabetes()
X = diabetes.data
y = diabetes.target

# 2. Split the Data into Training and Testing Sets
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.3, random_state=42)

# 3. Implement Linear Regression
linear_reg = LinearRegression()
linear_reg.fit(X_train, y_train)
y_pred_linear = linear_reg.predict(X_test)

# 4. Implement Ridge Regression
ridge_reg = Ridge(alpha=1.0)  # Alpha is the regularization parameter
ridge_reg.fit(X_train, y_train)
y_pred_ridge = ridge_reg.predict(X_test)

# 5. Implement Lasso Regression
lasso_reg = Lasso(alpha=1.0)  # Alpha is the regularization parameter
lasso_reg.fit(X_train, y_train)
y_pred_lasso = lasso_reg.predict(X_test)

# 6. Evaluate Model Performance
print("Linear Regression:")
print("  MSE:", mean_squared_error(y_test, y_pred_linear))
print("  R-squared:", r2_score(y_test, y_pred_linear))

print("\nRidge Regression:")
print("  MSE:", mean_squared_error(y_test, y_pred_ridge))
print("  R-squared:", r2_score(y_test, y_pred_ridge))

print("\nLasso Regression:")
print("  MSE:", mean_squared_error(y_test, y_pred_lasso))
print("  R-squared:", r2_score(y_test, y_pred_lasso))


# 7. Optimize Alpha using Cross-Validation (GridSearchCV)
# For Ridge
param_grid_ridge = {'alpha': np.logspace(-3, 3, 7)} # Values for alpha to test
grid_search_ridge = GridSearchCV(Ridge(), param_grid_ridge, scoring='neg_mean_squared_error', cv=5)
grid_search_ridge.fit(X_train, y_train)
best_alpha_ridge = grid_search_ridge.best_params_['alpha']
print(f"\nBest alpha for Ridge: {best_alpha_ridge}")

# For Lasso
param_grid_lasso = {'alpha': np.logspace(-3, 3, 7)} # Values for alpha to test
grid_search_lasso = GridSearchCV(Lasso(), param_grid_lasso, scoring='neg_mean_squared_error', cv=5)
grid_search_lasso.fit(X_train, y_train)
best_alpha_lasso = grid_search_lasso.best_params_['alpha']
print(f"Best alpha for Lasso: {best_alpha_lasso}")


# 8. Train and Evaluate Models with Optimized Alpha
ridge_reg_optimized = Ridge(alpha=best_alpha_ridge)
ridge_reg_optimized.fit(X_train, y_train)
y_pred_ridge_optimized = ridge_reg_optimized.predict(X_test)

lasso_reg_optimized = Lasso(alpha=best_alpha_lasso)
lasso_reg_optimized.fit(X_train, y_train)
y_pred_lasso_optimized = lasso_reg_optimized.predict(X_test)

print("\nOptimized Ridge Regression:")
print("  MSE:", mean_squared_error(y_test, y_pred_ridge_optimized))
print("  R-squared:", r2_score(y_test, y_pred_ridge_optimized))

print("\nOptimized Lasso Regression:")
print("  MSE:", mean_squared_error(y_test, y_pred_lasso_optimized))
print("  R-squared:", r2_score(y_test, y_pred_lasso_optimized))


# 9. Visualize Coefficients
plt.figure(figsize=(12, 6))

plt.subplot(1, 3, 1)
plt.bar(range(len(linear_reg.coef_)), linear_reg.coef_)
plt.title("Linear Regression Coefficients")

plt.subplot(1, 3, 2)
plt.bar(range(len(ridge_reg_optimized.coef_)), ridge_reg_optimized.coef_)
plt.title("Ridge Regression Coefficients (Optimized)")

plt.subplot(1, 3, 3)
plt.bar(range(len(lasso_reg_optimized.coef_)), lasso_reg_optimized.coef_)
plt.title("Lasso Regression Coefficients (Optimized)")

plt.tight_layout()
plt.show()
```

**Explanation of the Code:**

1.  **Data Loading and Splitting:** Loads the Diabetes dataset and splits it into training and testing sets.
2.  **Model Implementation:**  Creates instances of `LinearRegression`, `Ridge`, and `Lasso` models from `sklearn.linear_model`.  The `alpha` parameter is set initially to 1.0.
3.  **Model Training:** Trains each model using the training data.
4.  **Prediction:**  Uses the trained models to make predictions on the test data.
5.  **Evaluation:** Calculates the Mean Squared Error (MSE) and R-squared for each model to evaluate its performance.  Prints the results.
6.  **Alpha Optimization:** Uses `GridSearchCV` with cross-validation to find the best `alpha` value for Ridge and Lasso regression. `GridSearchCV` automates the process of trying different `alpha` values and selecting the one that gives the best performance based on the chosen scoring metric (`neg_mean_squared_error` in this case).
7.  **Model Training with Optimized Alpha:**  Trains new Ridge and Lasso models using the best `alpha` values found by `GridSearchCV`.
8.  **Evaluation with Optimized Alpha:** Evaluates the performance of the optimized Ridge and Lasso models.
9.  **Visualization:** Creates bar plots to visualize the coefficients of the Linear Regression, Ridge Regression (optimized), and Lasso Regression (optimized) models. This allows you to see how the regularization techniques affect the magnitude and sparsity of the coefficients.

---

## 3. Understanding the Effect of Alpha:

*   **Linear Regression (Alpha = 0 conceptually):** No regularization.  May overfit the training data.
*   **Ridge Regression:**
    *   **Small Alpha:**  Similar to linear regression.  Coefficients are not significantly shrunk.
    *   **Large Alpha:**  Strong regularization.  Coefficients are shrunk towards zero, reducing model complexity and potentially preventing overfitting.
*   **Lasso Regression:**
    *   **Small Alpha:**  Similar to linear regression.  Few coefficients are forced to zero.
    *   **Large Alpha:**  Strong regularization. More coefficients are forced to zero, performing feature selection and creating a sparse model.

**Important Note:**  The optimal value of `alpha` depends on the specific dataset and problem.  Cross-validation is essential to find the best value.

---

## 4. Visualizing the Impact of Regularization on Coefficients:

By plotting the coefficients of the different models (Linear Regression, Ridge Regression, and Lasso Regression), you can observe the following:

*   **Linear Regression:**  Coefficients can have large magnitudes, both positive and negative.
*   **Ridge Regression:**  Coefficients are smaller in magnitude compared to Linear Regression.  They are shrunk towards zero but rarely become exactly zero.
*   **Lasso Regression:**  Some coefficients are exactly zero, indicating that the corresponding features have been excluded from the model. The remaining non-zero coefficients might be larger than the corresponding Ridge coefficients.

---

## 5. Practice Questions/Exercises:

1.  **Question:** What is the main difference between Ridge and Lasso regression?
    *   **Answer:** Ridge regression uses L2 regularization, which shrinks coefficients towards zero. Lasso regression uses L1 regularization, which can force some coefficients to be exactly zero, effectively performing feature selection.

2.  **Question:** What happens to the model complexity as the value of `alpha` (the regularization parameter) increases in Ridge and Lasso regression?
    *   **Answer:** As `alpha` increases, the regularization strength increases, and the model complexity decreases.  Larger alpha values penalize large coefficients more heavily, leading to simpler models.

3.  **Question:** Why is cross-validation important when using Ridge and Lasso regression?
    *   **Answer:** Cross-validation is important to find the optimal value of the regularization parameter (`alpha`).  It helps to evaluate the model's performance on unseen data and prevents overfitting to the training data. Different `alpha` values will result in different model complexities and generalization performance; therefore, selecting the 'best' `alpha` requires validation on held-out data (which is precisely what Cross-Validation helps to simulate).

4.  **Exercise:**  Modify the code to use different values of `alpha` in Ridge and Lasso regression. Observe the changes in MSE, R-squared, and the magnitude of the coefficients. How does the performance of the models change? (Hint: try `alpha` values in a range like `0.001, 0.01, 0.1, 1, 10, 100`).

5.  **Exercise:** Instead of `GridSearchCV`, manually implement a cross-validation loop to determine the best `alpha` for Ridge regression.  Compare your results with the `GridSearchCV` approach.

    ```python
    # Example (Manual Cross-Validation for Ridge):
    from sklearn.model_selection import KFold
    import numpy as np

    def manual_cross_validation_ridge(X, y, alphas, n_folds=5):
      """Performs manual cross-validation to find the best alpha for Ridge Regression.

      Args:
        X: Feature data.
        y: Target data.
        alphas: A list of alpha values to test.
        n_folds: The number of folds for cross-validation.

      Returns:
        The best alpha value and its corresponding average MSE across folds.
      """

      kf = KFold(n_splits=n_folds, shuffle=True, random_state=42) # Ensure consistent splits
      avg_mse_scores = []

      for alpha in alphas:
        fold_mse_scores = []
        for train_index, val_index in kf.split(X): # val_index is your test/validation set here
          X_train, X_val = X[train_index], X[val_index]
          y_train, y_val = y[train_index], y[val_index]

          ridge_reg = Ridge(alpha=alpha)
          ridge_reg.fit(X_train, y_train)
          y_pred = ridge_reg.predict(X_val)
          fold_mse_scores.append(mean_squared_error(y_val, y_pred))

        avg_mse_scores.append(np.mean(fold_mse_scores))

      best_alpha_index = np.argmin(avg_mse_scores)
      best_alpha = alphas[best_alpha_index]
      best_avg_mse = avg_mse_scores[best_alpha_index]

      return best_alpha, best_avg_mse

    # Example Usage:
    X = diabetes.data
    y = diabetes.target
    alphas_to_test = np.logspace(-3, 3, 7) # Same range as in GridSearchCV
    best_alpha, best_avg_mse = manual_cross_validation_ridge(X, y, alphas_to_test)

    print(f"Best Alpha (Manual CV): {best_alpha}")
    print(f"Average MSE (Manual CV): {best_avg_mse}")

    ```

---

## 6. Important Points to Remember:

*   Ridge and Lasso regression are powerful techniques for preventing overfitting.
*   The regularization parameter (`alpha`) controls the strength of the penalty.
*   Ridge regression shrinks coefficients towards zero but rarely sets them to zero.
*   Lasso regression can perform feature selection by forcing some coefficients to be exactly zero.
*   Cross-validation is essential for selecting the optimal value of `alpha`.
*   The choice between Ridge and Lasso depends on the specific problem and the desired model characteristics (e.g., sparsity).  Lasso is preferred if you suspect that many features are irrelevant and want to perform feature selection.
*   Visualizing the coefficients can provide insights into the impact of regularization.
