---
title: "Tasks:"
subject: "MACHINE LEARNING LAB"
module: "Module 3: Implement Ridge and Lasso regression on the Diabetes dataset. Compare the performance of these regularized models with standard linear regression."
branch: "Computer Science and Engineering"
semester: 5
topicId: "684162770fc9aa1fdbc8b93c"
status: "completed"
scrapedAt: "2026-05-20T16:47:03.594Z"
---
# MACHINE LEARNING LAB - Module 3: Ridge and Lasso Regression on Diabetes Dataset

## Introduction

This module focuses on implementing Ridge and Lasso regression, two common regularization techniques, on the Diabetes dataset.  We'll compare their performance against standard linear regression to understand the benefits and drawbacks of regularization in mitigating overfitting.

## Learning Outcomes

*   Understand the concepts of Ridge and Lasso regression.
*   Implement Ridge and Lasso regression using Python and libraries like scikit-learn.
*   Apply these regularized regression models to the Diabetes dataset.
*   Compare the performance of Ridge, Lasso, and standard linear regression using appropriate metrics.
*   Tune the hyperparameters (alpha) of Ridge and Lasso regression using techniques like cross-validation.
*   Interpret the effects of L1 and L2 regularization on model coefficients.

## Key Concepts and Definitions

*   **Linear Regression:** A linear approach for modeling the relationship between a scalar response (dependent variable) and one or more explanatory variables (independent variables).  It assumes a linear relationship between the features and the target.
*   **Overfitting:** A model that performs well on the training data but poorly on unseen data.  It has learned the noise in the training data as well as the underlying pattern.
*   **Regularization:** Techniques used to prevent overfitting by adding a penalty term to the cost function. This penalty discourages overly complex models, forcing them to generalize better.
*   **Ridge Regression (L2 Regularization):**  Adds a penalty term equal to the square of the magnitude of coefficients (L2 norm) to the ordinary least squares cost function.  This forces coefficients towards zero, but rarely exactly to zero.
    *   **Cost Function:**  `Minimize:  Sum of Squared Errors + alpha * (Sum of Coefficients Squared)`
    *   `alpha` (λ): Regularization strength. Higher values of alpha increase the penalty, leading to smaller coefficients.
*   **Lasso Regression (L1 Regularization):** Adds a penalty term equal to the absolute value of the magnitude of coefficients (L1 norm) to the ordinary least squares cost function. This forces some coefficients to be exactly zero, effectively performing feature selection.
    *   **Cost Function:**  `Minimize: Sum of Squared Errors + alpha * (Sum of Absolute Values of Coefficients)`
    *   `alpha` (λ): Regularization strength. Higher values of alpha increase the penalty, potentially zeroing out more coefficients.
*   **Diabetes Dataset:** A standard dataset available in scikit-learn consisting of 442 diabetes patients' information.  It contains 10 baseline variables (age, sex, body mass index, average blood pressure, and six blood serum measurements) and a quantitative measure of disease progression one year later.
*   **Mean Squared Error (MSE):** A common metric to evaluate regression models.  It calculates the average squared difference between the predicted and actual values.
*   **R-squared (Coefficient of Determination):** A metric indicating the proportion of variance in the dependent variable that is predictable from the independent variables.  Ranges from 0 to 1, with higher values indicating a better fit.
*   **Cross-Validation:**  A technique to evaluate model performance on unseen data by splitting the dataset into multiple folds, training the model on some folds, and testing on the remaining fold.  This is repeated for each fold, and the results are averaged.  Common types include k-fold cross-validation.

## Implementation Steps (with Python and scikit-learn)

1.  **Load the Diabetes Dataset:**

    ```python
    from sklearn.datasets import load_diabetes
    diabetes = load_diabetes()
    X, y = diabetes.data, diabetes.target
    ```

2.  **Split Data into Training and Testing Sets:**

    ```python
    from sklearn.model_selection import train_test_split
    X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)  # Adjust test_size and random_state as needed
    ```

3.  **Implement Linear Regression:**

    ```python
    from sklearn.linear_model import LinearRegression
    from sklearn.metrics import mean_squared_error, r2_score

    # Train the model
    linear_model = LinearRegression()
    linear_model.fit(X_train, y_train)

    # Make predictions on the test set
    y_pred_linear = linear_model.predict(X_test)

    # Evaluate the model
    mse_linear = mean_squared_error(y_test, y_pred_linear)
    r2_linear = r2_score(y_test, y_pred_linear)

    print("Linear Regression:")
    print(f"  Mean Squared Error: {mse_linear:.2f}")
    print(f"  R-squared: {r2_linear:.2f}")
    ```

4.  **Implement Ridge Regression:**

    ```python
    from sklearn.linear_model import Ridge

    # Train the model
    ridge_model = Ridge(alpha=1.0)  # Adjust alpha as needed.  Start with something like 1.0
    ridge_model.fit(X_train, y_train)

    # Make predictions on the test set
    y_pred_ridge = ridge_model.predict(X_test)

    # Evaluate the model
    mse_ridge = mean_squared_error(y_test, y_pred_ridge)
    r2_ridge = r2_score(y_test, y_pred_ridge)

    print("\nRidge Regression:")
    print(f"  Mean Squared Error: {mse_ridge:.2f}")
    print(f"  R-squared: {r2_ridge:.2f}")
    ```

5.  **Implement Lasso Regression:**

    ```python
    from sklearn.linear_model import Lasso

    # Train the model
    lasso_model = Lasso(alpha=1.0)  # Adjust alpha as needed. Start with something like 1.0
    lasso_model.fit(X_train, y_train)

    # Make predictions on the test set
    y_pred_lasso = lasso_model.predict(X_test)

    # Evaluate the model
    mse_lasso = mean_squared_error(y_test, y_pred_lasso)
    r2_lasso = r2_score(y_test, y_pred_lasso)

    print("\nLasso Regression:")
    print(f"  Mean Squared Error: {mse_lasso:.2f}")
    print(f"  R-squared: {r2_lasso:.2f}")
    ```

6.  **Hyperparameter Tuning (alpha) using Cross-Validation:**

    ```python
    from sklearn.model_selection import GridSearchCV

    # Ridge Regression - Tuning alpha
    param_grid_ridge = {'alpha': [0.001, 0.01, 0.1, 1, 10, 100]}
    grid_search_ridge = GridSearchCV(Ridge(), param_grid_ridge, cv=5, scoring='neg_mean_squared_error') # cv=5 means 5-fold cross validation
    grid_search_ridge.fit(X_train, y_train)

    print("\nBest alpha for Ridge:", grid_search_ridge.best_params_)
    best_ridge_model = grid_search_ridge.best_estimator_
    y_pred_ridge_best = best_ridge_model.predict(X_test)
    mse_ridge_best = mean_squared_error(y_test, y_pred_ridge_best)
    r2_ridge_best = r2_score(y_test, y_pred_ridge_best)

    print("Ridge Regression (Best Alpha):")
    print(f"  Mean Squared Error: {mse_ridge_best:.2f}")
    print(f"  R-squared: {r2_ridge_best:.2f}")

    # Lasso Regression - Tuning alpha
    param_grid_lasso = {'alpha': [0.001, 0.01, 0.1, 1, 10, 100]}
    grid_search_lasso = GridSearchCV(Lasso(), param_grid_lasso, cv=5, scoring='neg_mean_squared_error')
    grid_search_lasso.fit(X_train, y_train)

    print("\nBest alpha for Lasso:", grid_search_lasso.best_params_)
    best_lasso_model = grid_search_lasso.best_estimator_
    y_pred_lasso_best = best_lasso_model.predict(X_test)
    mse_lasso_best = mean_squared_error(y_test, y_pred_lasso_best)
    r2_lasso_best = r2_score(y_test, y_pred_lasso_best)

    print("Lasso Regression (Best Alpha):")
    print(f"  Mean Squared Error: {mse_lasso_best:.2f}")
    print(f"  R-squared: {r2_lasso_best:.2f}")
    ```

7.  **Coefficient Analysis:**

    ```python
    # Examine coefficients for each model
    print("\nLinear Regression Coefficients:", linear_model.coef_)
    print("\nRidge Regression Coefficients (Best Alpha):", best_ridge_model.coef_)
    print("\nLasso Regression Coefficients (Best Alpha):", best_lasso_model.coef_)
    ```

## Example

The code snippets above provide a basic example of how to implement Ridge and Lasso regression on the Diabetes dataset. Remember to adjust the `alpha` parameter to achieve optimal performance through cross-validation. You will observe that the Ridge and Lasso coefficients are generally smaller in magnitude than the Linear Regression coefficients.  Furthermore, you'll likely see some coefficients set to exactly zero by the Lasso model.

## Practice Questions and Exercises

1.  **Question:** What is the primary difference between Ridge and Lasso regression?

    **Answer:** Ridge regression (L2) penalizes the sum of the *squares* of the coefficients, shrinking them towards zero but rarely exactly to zero. Lasso regression (L1) penalizes the sum of the *absolute values* of the coefficients, which can force some coefficients to be exactly zero, effectively performing feature selection.

2.  **Exercise:** Modify the `test_size` parameter in `train_test_split` to 0.3 and observe how the model performance changes for each regression type (Linear, Ridge, Lasso).

    **Answer:** (Varies based on random_state and data)  Increasing `test_size` will generally lead to more data being used for testing, potentially giving you a more accurate evaluation of the model's generalization performance.  However, it also means less data is available for training, which can sometimes lead to a decrease in performance.

3.  **Question:** What does the `alpha` parameter control in Ridge and Lasso regression, and how does a higher value of `alpha` affect the model?

    **Answer:** The `alpha` parameter controls the strength of the regularization penalty. A higher value of `alpha` increases the penalty, forcing the coefficients towards zero (more strongly).  This can lead to simpler models with less overfitting, but it can also lead to underfitting if `alpha` is too high.

4.  **Exercise:**  Experiment with different values in the `param_grid` for the `GridSearchCV` function for both Ridge and Lasso. Does this improve the performance?

    **Answer:** (Varies based on the dataset and initial parameter grid)  The key is to find an optimal alpha that balances the trade-off between bias and variance. Try expanding the range and granularity of the grid. For example: `{'alpha': [0.0001, 0.001, 0.01, 0.1, 1, 10, 100, 1000]}`

5.  **Question:** Why is cross-validation important when tuning the `alpha` parameter in Ridge and Lasso regression?

    **Answer:** Cross-validation provides a more robust estimate of model performance on unseen data than simply evaluating on a single test set. It helps to prevent overfitting to the test set and allows you to select a value for `alpha` that generalizes well to different subsets of the data.

## Important Points to Remember

*   Regularization helps prevent overfitting by adding a penalty to the model's complexity.
*   Ridge regression (L2) shrinks coefficients towards zero, while Lasso regression (L1) can force some coefficients to be exactly zero, effectively performing feature selection.
*   The `alpha` parameter controls the strength of the regularization penalty.
*   Cross-validation is essential for tuning the `alpha` parameter and evaluating model performance.
*   The Diabetes dataset is a common benchmark for regression tasks.
*   Always split your data into training and testing sets to evaluate model generalization.
*   Compare performance metrics like MSE and R-squared to evaluate the effectiveness of different regression models.
*   Consider standardizing/scaling features before applying Ridge or Lasso, as they are sensitive to feature scaling.  Libraries like `StandardScaler` from scikit-learn can be used for this purpose.

## Further Exploration

*   Investigate the impact of feature scaling on Ridge and Lasso regression performance.
*   Explore other regularization techniques, such as Elastic Net, which combines L1 and L2 regularization.
*   Apply these techniques to other datasets and compare the results.
*   Learn about more advanced cross-validation strategies, such as stratified k-fold cross-validation.
