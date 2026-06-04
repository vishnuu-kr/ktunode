---
title: "Tune hyperparameters using cross-validation."
subject: "MACHINE LEARNING LAB"
module: "Module 3: Implement Ridge and Lasso regression on the Diabetes dataset. Compare the performance of these regularized models with standard linear regression."
branch: "Computer Science and Engineering"
semester: 5
topicId: "684162770fc9aa1fdbc8b93f"
status: "completed"
scrapedAt: "2026-05-20T16:47:05.753Z"
---
# MACHINE LEARNING LAB - Module 3: Regularization and Hyperparameter Tuning

## Topic: Tuning Hyperparameters using Cross-Validation for Ridge and Lasso Regression on the Diabetes Dataset

**Description:** This module focuses on implementing Ridge and Lasso regression on the Diabetes dataset, comparing their performance with standard linear regression, and tuning hyperparameters using cross-validation to optimize model performance.

**Learning Outcomes:**

*   Understand the concepts of Ridge and Lasso regression and their differences.
*   Implement Ridge and Lasso regression on the Diabetes dataset using Python (e.g., scikit-learn).
*   Compare the performance of Ridge and Lasso regression with standard linear regression using appropriate metrics (e.g., Mean Squared Error, R-squared).
*   Explain the need for hyperparameter tuning in regularized models.
*   Understand and implement cross-validation techniques (e.g., k-fold cross-validation).
*   Tune the hyperparameters (alpha for Ridge and Lasso) using cross-validation.
*   Analyze the impact of hyperparameter tuning on model performance.

---

## 1. Introduction to Regularization

*   **Overfitting:** A model that performs well on the training data but poorly on unseen data. This occurs when the model learns the noise and specific patterns in the training data, rather than the underlying relationship.
*   **Underfitting:** A model that is too simple to capture the underlying relationship in the data.
*   **Regularization:** A technique used to prevent overfitting by adding a penalty term to the loss function. This penalty discourages the model from learning complex patterns in the data.  The goal is to find a balance between model complexity and prediction accuracy.

## 2. Ridge Regression (L2 Regularization)

*   **Definition:**  Ridge regression adds an L2 penalty to the ordinary least squares (OLS) objective function. The L2 penalty is the sum of the squares of the coefficients multiplied by a regularization parameter, *alpha* (λ).
*   **Objective Function:**  `Loss = OLS Loss + alpha * (sum of squares of coefficients)`
*   **Formula:**  `min ||y - Xw||^2_2 + alpha * ||w||^2_2` where:
    *   `y` is the target vector.
    *   `X` is the feature matrix.
    *   `w` is the coefficient vector.
    *   `alpha` (λ) is the regularization parameter.
*   **Impact of Alpha:**
    *   `alpha = 0`:  Equivalent to standard linear regression (no regularization).
    *   `alpha > 0`:  Shrinks the coefficients towards zero. Larger `alpha` values lead to stronger regularization and smaller coefficients.
*   **Benefits:**
    *   Reduces overfitting.
    *   Handles multicollinearity (high correlation between features) better than OLS.  It doesn't necessarily eliminate features entirely, but shrinks the coefficients of correlated features.
*   **Key Point:**  Ridge regression keeps all features in the model but reduces their impact.

## 3. Lasso Regression (L1 Regularization)

*   **Definition:** Lasso regression adds an L1 penalty to the ordinary least squares (OLS) objective function. The L1 penalty is the sum of the absolute values of the coefficients multiplied by a regularization parameter, *alpha* (λ).
*   **Objective Function:**  `Loss = OLS Loss + alpha * (sum of absolute values of coefficients)`
*   **Formula:** `min ||y - Xw||^2_2 + alpha * ||w||_1` where:
    *   `y` is the target vector.
    *   `X` is the feature matrix.
    *   `w` is the coefficient vector.
    *   `alpha` (λ) is the regularization parameter.
*   **Impact of Alpha:**
    *   `alpha = 0`: Equivalent to standard linear regression (no regularization).
    *   `alpha > 0`: Shrinks the coefficients towards zero.  Crucially, some coefficients may be shrunk to *exactly zero*, effectively performing feature selection.
*   **Benefits:**
    *   Reduces overfitting.
    *   Performs feature selection by setting some coefficients to zero.  This can lead to simpler and more interpretable models.
*   **Key Point:** Lasso regression can eliminate features entirely from the model.

## 4. Comparing Ridge and Lasso

| Feature        | Ridge Regression (L2)                                      | Lasso Regression (L1)                                         |
|----------------|-----------------------------------------------------------|--------------------------------------------------------------|
| Penalty        | L2 (Sum of Squares)                                      | L1 (Sum of Absolute Values)                                     |
| Coefficient Impact | Shrinks coefficients towards zero                         | Shrinks coefficients towards zero, can set some to zero       |
| Feature Selection| No explicit feature selection; keeps all features           | Performs feature selection; can eliminate features entirely    |
| Multicollinearity | Handles it well by shrinking correlated feature coefficients | Can arbitrarily select one feature among highly correlated ones |
| Model Complexity | Generally more complex (all features are retained)          | Can lead to simpler models due to feature selection             |
| Use Cases      | When you want to reduce the impact of all features         | When you suspect many features are irrelevant                |

## 5. The Diabetes Dataset

*   A standard dataset in machine learning for regression tasks.
*   Contains information on diabetes patients, including features such as age, sex, body mass index (BMI), average blood pressure, and six blood serum measurements.
*   The target variable is a quantitative measure of disease progression one year after baseline.
*   **Access:** Easily accessible using scikit-learn: `from sklearn.datasets import load_diabetes`

## 6. The Need for Hyperparameter Tuning

*   **Hyperparameters:** Parameters that are not learned from the data during training but are set *before* training begins (e.g., `alpha` in Ridge and Lasso).
*   **Importance:** The choice of hyperparameters significantly impacts model performance.  Setting `alpha` too high in Ridge or Lasso can lead to underfitting, while setting it too low can lead to overfitting.
*   **Tuning:** The process of finding the optimal hyperparameter values for a given model and dataset.

## 7. Cross-Validation

*   **Definition:** A technique for evaluating model performance on unseen data by splitting the data into multiple folds (subsets). The model is trained on some folds and tested on the remaining fold. This process is repeated multiple times, with different folds used for testing each time.
*   **Purpose:** Provides a more robust estimate of model performance compared to a single train-test split. Helps to avoid overfitting to the training data during hyperparameter tuning.
*   **Types of Cross-Validation:**
    *   **k-fold Cross-Validation:** The data is divided into k folds. In each iteration, k-1 folds are used for training, and the remaining fold is used for testing. The results are averaged over all k iterations.
    *   **Stratified k-fold Cross-Validation:** Similar to k-fold, but ensures that the class distribution in each fold is representative of the overall class distribution in the dataset (important for classification tasks, but can be useful for regression too when target is highly skewed).
    *   **Leave-One-Out Cross-Validation (LOOCV):** Each data point is used as a test set, and the remaining data points are used for training.  (k = n, where n is the number of data points). Computationally expensive for large datasets.
*   **Implementation (using scikit-learn):**
    ```python
    from sklearn.model_selection import KFold
    kf = KFold(n_splits=5, shuffle=True, random_state=42)  # 5-fold cross-validation
    ```

## 8. Hyperparameter Tuning using Cross-Validation

*   **Goal:** Find the optimal value of `alpha` (λ) that minimizes the error on unseen data.
*   **Process:**
    1.  **Define a range of possible `alpha` values:**  Experiment with a range of values, often on a logarithmic scale (e.g., `[0.001, 0.01, 0.1, 1, 10, 100]`).
    2.  **For each `alpha` value:**
        *   Perform k-fold cross-validation.
        *   Train the model on k-1 folds using the current `alpha` value.
        *   Evaluate the model on the remaining fold using a suitable metric (e.g., Mean Squared Error, R-squared).
        *   Calculate the average performance across all k folds.
    3.  **Select the `alpha` value that yields the best average performance across the cross-validation folds.**

*   **Techniques for Efficient Hyperparameter Tuning:**
    *   **Grid Search:**  Evaluate all possible combinations of hyperparameters within a defined grid.  Simple but can be computationally expensive.
        *   Implementation (using scikit-learn): `GridSearchCV`
    *   **Randomized Search:**  Randomly sample hyperparameter combinations from a defined distribution.  Often more efficient than Grid Search, especially when some hyperparameters are more important than others.
        *   Implementation (using scikit-learn): `RandomizedSearchCV`
    *   **Bayesian Optimization:**  Uses a probabilistic model to guide the search for optimal hyperparameters. Can be more efficient than Grid Search and Randomized Search, especially for complex models with many hyperparameters.
        *   Implementation (using scikit-learn-contrib): `skopt`

*   **Example (using scikit-learn's `GridSearchCV`):**

    ```python
    from sklearn.linear_model import Ridge
    from sklearn.model_selection import GridSearchCV
    from sklearn.datasets import load_diabetes
    from sklearn.model_selection import train_test_split

    # Load the diabetes dataset
    diabetes = load_diabetes()
    X, y = diabetes.data, diabetes.target

    # Split data into training and testing sets
    X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)


    # Define the parameter grid
    param_grid = {'alpha': [0.001, 0.01, 0.1, 1, 10, 100]}

    # Create a Ridge regression model
    ridge = Ridge()

    # Create a GridSearchCV object
    grid_search = GridSearchCV(ridge, param_grid, cv=5, scoring='neg_mean_squared_error') #cv=5 means 5-fold cross-validation. We are using 'neg_mean_squared_error' because GridSearchCV maximizes the score, so we use the negative of MSE to find the minimum MSE.

    # Fit the GridSearchCV object to the data
    grid_search.fit(X_train, y_train)

    # Print the best parameters and the best score
    print("Best parameters:", grid_search.best_params_)
    print("Best score:", grid_search.best_score_)

    # Get the best estimator
    best_ridge = grid_search.best_estimator_

    # Evaluate the best model on the test set
    test_score = best_ridge.score(X_test, y_test) #R^2 score
    print("Test R^2 score:", test_score)

    ```

## 9. Implementation on the Diabetes Dataset (Python Example)

```python
import numpy as np
from sklearn.datasets import load_diabetes
from sklearn.linear_model import LinearRegression, Ridge, Lasso
from sklearn.model_selection import train_test_split, cross_val_score, KFold, GridSearchCV
from sklearn.metrics import mean_squared_error, r2_score
import pandas as pd

# 1. Load the Diabetes Dataset
diabetes = load_diabetes()
X, y = diabetes.data, diabetes.target

# 2. Split Data into Training and Testing Sets
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42) # Random state for reproducibility

# 3. Standard Linear Regression
linear_model = LinearRegression()
linear_model.fit(X_train, y_train)
y_pred_linear = linear_model.predict(X_test)
mse_linear = mean_squared_error(y_test, y_pred_linear)
r2_linear = r2_score(y_test, y_pred_linear)
print("Linear Regression:")
print(f"  MSE: {mse_linear:.2f}")
print(f"  R-squared: {r2_linear:.2f}")

# 4. Ridge Regression with Hyperparameter Tuning (GridSearchCV)
param_grid_ridge = {'alpha': [0.001, 0.01, 0.1, 1, 10, 100, 1000]} # Range of alpha values to test
ridge = Ridge()
grid_search_ridge = GridSearchCV(ridge, param_grid_ridge, scoring='neg_mean_squared_error', cv=5) # 5-fold cross-validation
grid_search_ridge.fit(X_train, y_train)
best_alpha_ridge = grid_search_ridge.best_params_['alpha'] # Access the best alpha value
best_ridge = grid_search_ridge.best_estimator_
y_pred_ridge = best_ridge.predict(X_test)
mse_ridge = mean_squared_error(y_test, y_pred_ridge)
r2_ridge = r2_score(y_test, y_pred_ridge)
print("\nRidge Regression (with GridSearchCV):")
print(f"  Best alpha: {best_alpha_ridge}")
print(f"  MSE: {mse_ridge:.2f}")
print(f"  R-squared: {r2_ridge:.2f}")

# 5. Lasso Regression with Hyperparameter Tuning (GridSearchCV)
param_grid_lasso = {'alpha': [0.001, 0.01, 0.1, 1, 10, 100, 1000]} # Range of alpha values to test
lasso = Lasso()
grid_search_lasso = GridSearchCV(lasso, param_grid_lasso, scoring='neg_mean_squared_error', cv=5) # 5-fold cross-validation
grid_search_lasso.fit(X_train, y_train)
best_alpha_lasso = grid_search_lasso.best_params_['alpha']  # Access the best alpha value
best_lasso = grid_search_lasso.best_estimator_
y_pred_lasso = best_lasso.predict(X_test)
mse_lasso = mean_squared_error(y_test, y_pred_lasso)
r2_lasso = r2_score(y_test, y_pred_lasso)
print("\nLasso Regression (with GridSearchCV):")
print(f"  Best alpha: {best_alpha_lasso}")
print(f"  MSE: {mse_lasso:.2f}")
print(f"  R-squared: {r2_lasso:.2f}")

# 6. Examining Feature Importance (Lasso) - Optional
print("\nLasso Coefficients (Feature Importance):")
lasso_coef = pd.DataFrame({'feature': diabetes.feature_names, 'coefficient': best_lasso.coef_})
print(lasso_coef)

```

**Explanation of the Code:**

1.  **Load Data & Split:**  Loads the diabetes dataset and splits it into training and testing sets.
2.  **Linear Regression:** Trains a standard linear regression model and evaluates its performance.
3.  **Ridge Regression (with GridSearchCV):**
    *   Defines a grid of `alpha` values to search over.
    *   Creates a `Ridge` model.
    *   Uses `GridSearchCV` to perform cross-validation and find the best `alpha`.
    *   Trains a `Ridge` model with the best `alpha` and evaluates its performance on the test set.
4.  **Lasso Regression (with GridSearchCV):**  Similar to Ridge regression, but uses a `Lasso` model and performs hyperparameter tuning using `GridSearchCV`.
5. **Examining Feature Importance (Lasso) - Optional:**  Displays the coefficients learned by the Lasso model.  Coefficients that are zero indicate that the corresponding feature was eliminated by the Lasso regularization.

## 10. Analyzing the Impact of Hyperparameter Tuning

*   **Compare the performance metrics (MSE, R-squared) of the following models:**
    *   Standard Linear Regression
    *   Ridge Regression (without hyperparameter tuning - using a default alpha)
    *   Ridge Regression (with hyperparameter tuning)
    *   Lasso Regression (without hyperparameter tuning - using a default alpha)
    *   Lasso Regression (with hyperparameter tuning)
*   **Observe:**
    *   Regularized models (Ridge and Lasso) often perform better than standard linear regression when overfitting is a concern.
    *   Hyperparameter tuning can significantly improve the performance of regularized models by finding the optimal balance between model complexity and prediction accuracy.
    *   Lasso can lead to feature selection, resulting in a simpler and more interpretable model.
*   **Interpreting Results:**
    * A lower MSE indicates a better fit (less error).
    * A higher R-squared indicates a better fit (more variance explained).
    * Analyze the coefficients in the Lasso model to identify the most important features.  Features with coefficients close to zero have little to no impact on the prediction.

## 11. Practice Questions / Exercises

1.  **Explain the difference between L1 and L2 regularization.**
    *   *Answer:* L1 regularization (Lasso) adds the sum of absolute values of coefficients to the loss function, potentially shrinking some coefficients to zero and performing feature selection.  L2 regularization (Ridge) adds the sum of squared coefficients to the loss function, shrinking coefficients towards zero but rarely making them exactly zero.

2.  **What is cross-validation, and why is it important for hyperparameter tuning?**
    *   *Answer:* Cross-validation is a technique for evaluating model performance on unseen data by splitting the data into multiple folds, training on some folds, and testing on the remaining folds. It's important for hyperparameter tuning because it provides a more robust estimate of model performance than a single train-test split, helping to avoid overfitting to the training data.

3.  **How does the `alpha` parameter affect Ridge and Lasso regression?**
    *   *Answer:* `alpha` (λ) is the regularization parameter. Higher values of `alpha` lead to stronger regularization, shrinking coefficients towards zero. In Ridge, this reduces the impact of all features. In Lasso, it can shrink some coefficients to exactly zero, performing feature selection. A value of alpha = 0 is equivalent to standard linear regression.

4.  **Implement Ridge regression on the Diabetes dataset with `alpha = 10` and evaluate its performance.**  (Hint: Use `Ridge` class from scikit-learn)
    ```python
    from sklearn.linear_model import Ridge
    from sklearn.datasets import load_diabetes
    from sklearn.model_selection import train_test_split
    from sklearn.metrics import mean_squared_error

    diabetes = load_diabetes()
    X, y = diabetes.data, diabetes.target
    X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)

    ridge = Ridge(alpha=10)
    ridge.fit(X_train, y_train)
    y_pred = ridge.predict(X_test)
    mse = mean_squared_error(y_test, y_pred)
    print(f"Ridge Regression (alpha=10) MSE: {mse:.2f}")
    ```

5.  **Explain how to use `GridSearchCV` to find the best `alpha` value for Lasso regression.**
    *   *Answer:*  (See the example code in Section 8). Define a `param_grid` with a range of `alpha` values. Create a `Lasso` model.  Create a `GridSearchCV` object, passing the `Lasso` model, the `param_grid`, the cross-validation folds (`cv`), and the scoring metric (e.g., 'neg_mean_squared_error'). Fit the `GridSearchCV` object to the training data. The `best_params_` attribute will give you the optimal `alpha` value. The `best_estimator_` attribute will give you the Lasso model trained with the best alpha.

## 12. Important Points to Remember

*   Regularization is a technique to prevent overfitting.
*   Ridge regression uses L2 regularization and shrinks coefficients towards zero.
*   Lasso regression uses L1 regularization and can perform feature selection.
*   Hyperparameter tuning is crucial for optimizing the performance of regularized models.
*   Cross-validation provides a robust estimate of model performance.
*   Grid Search and Randomized Search are common techniques for hyperparameter tuning.  Bayesian optimization can be even more efficient for complex models.
*   Always split your data into training and testing sets *before* performing hyperparameter tuning and cross-validation to avoid data leakage and obtain realistic performance estimates.
*   Understand the trade-off between model complexity and prediction accuracy.
