---
title: "Compare performance metrics (MSE, R-squared) with standard linear regression."
subject: "MACHINE LEARNING LAB"
module: "Module 3: Implement Ridge and Lasso regression on the Diabetes dataset. Compare the performance of these regularized models with standard linear regression."
branch: "Computer Science and Engineering"
semester: 5
topicId: "684162770fc9aa1fdbc8b940"
status: "completed"
scrapedAt: "2026-05-20T16:47:06.471Z"
---
# MACHINE LEARNING LAB - Module 3: Ridge, Lasso, and Linear Regression Comparison on the Diabetes Dataset

**Topic:** Compare performance metrics (MSE, R-squared) of Ridge and Lasso regression with standard Linear Regression on the Diabetes dataset.

**Learning Outcomes:**

*   Understand the concepts of Linear Regression, Ridge Regression, and Lasso Regression.
*   Implement Ridge and Lasso regression using Python libraries (e.g., scikit-learn).
*   Evaluate the performance of the three models (Linear, Ridge, and Lasso) using Mean Squared Error (MSE) and R-squared.
*   Compare and contrast the performance of regularized models (Ridge and Lasso) with standard linear regression on the Diabetes dataset.
*   Understand the impact of the regularization parameter (alpha) on model performance.
*   Be able to interpret the results and draw conclusions about the effectiveness of regularization.

## 1. Introduction to Regression Techniques

*   **Regression Analysis:** A statistical process for estimating the relationships among variables.  The focus is on the relationship between a dependent variable (target) and one or more independent variables (predictors).

### 1.1 Linear Regression

*   **Definition:** A linear approach for modeling the relationship between a scalar response (dependent variable) and one or more explanatory variables (independent variables). The relationship is modeled using a linear equation.
*   **Equation:**  `y = β₀ + β₁x₁ + β₂x₂ + ... + βₙxₙ + ε`
    *   `y`: Dependent variable (target)
    *   `x₁, x₂, ..., xₙ`: Independent variables (features)
    *   `β₀`: Intercept
    *   `β₁, β₂, ..., βₙ`: Coefficients for each feature
    *   `ε`: Error term

*   **Objective:** To find the best-fitting line (or hyperplane in higher dimensions) that minimizes the sum of squared errors between the predicted and actual values.
*   **Cost Function (Ordinary Least Squares - OLS):**  Minimizes the Residual Sum of Squares (RSS).  RSS =  ∑(yᵢ - ŷᵢ)² , where yᵢ is the actual value and ŷᵢ is the predicted value.

### 1.2 Ridge Regression (L2 Regularization)

*   **Definition:** A linear regression technique that adds L2 regularization to the cost function to prevent overfitting.
*   **Regularization:** Adding a penalty term to the cost function to discourage large coefficient values.  This helps to prevent the model from fitting the noise in the data.
*   **L2 Regularization:**  Adds a penalty proportional to the *square* of the magnitude of the coefficients.
*   **Equation:** The Ridge Regression cost function is:  `RSS + α * ∑(βᵢ)²`
    *   `α` (alpha): The regularization parameter (also known as lambda).  Controls the strength of the regularization. A higher `α` value increases the penalty for large coefficients, shrinking them towards zero.  `α >= 0`.

*   **Impact:**
    *   Shrinks the coefficients towards zero but *rarely* forces them to be exactly zero.
    *   Reduces the complexity of the model, preventing overfitting.
    *   Useful when there are many features, and some may be correlated (multicollinearity).
*   **Bias-Variance Tradeoff:** Ridge regression introduces a small bias to reduce variance, leading to better generalization performance, especially when dealing with noisy data.

### 1.3 Lasso Regression (L1 Regularization)

*   **Definition:** A linear regression technique that adds L1 regularization to the cost function to prevent overfitting.
*   **L1 Regularization:** Adds a penalty proportional to the *absolute value* of the magnitude of the coefficients.
*   **Equation:** The Lasso Regression cost function is:  `RSS + α * ∑|βᵢ|`
    *   `α` (alpha): The regularization parameter.  Controls the strength of the regularization. A higher `α` value increases the penalty for large coefficients, shrinking them towards zero. `α >= 0`.

*   **Impact:**
    *   Shrinks the coefficients towards zero, and can force some coefficients to be *exactly zero*. This performs feature selection.
    *   Simplifies the model by effectively removing irrelevant features.
    *   Useful when you suspect that only a few features are truly important.
*   **Bias-Variance Tradeoff:** Lasso regression generally introduces more bias than Ridge but can significantly reduce variance by eliminating irrelevant features.

### 1.4 Key Differences Between Ridge and Lasso

| Feature         | Ridge Regression (L2)                                     | Lasso Regression (L1)                                       |
|-----------------|------------------------------------------------------------|-------------------------------------------------------------|
| Regularization  | L2 (Squared Magnitude of Coefficients)                     | L1 (Absolute Value of Coefficients)                          |
| Coefficient Shrinkage | Shrinks coefficients towards zero, rarely zeroing them out | Can shrink coefficients to zero, performing feature selection |
| Feature Selection | No explicit feature selection                              | Performs feature selection                                    |
| Handling Multicollinearity | Better at handling multicollinearity than Linear Regression | Less effective at handling multicollinearity than Ridge    |
| Bias            | Introduces small bias                                      | Introduces potentially more bias                               |
| Variance        | Reduces variance                                          | Reduces variance significantly                                |
| Use Cases       | Many features, some correlated, less emphasis on feature selection | Few truly important features, emphasis on feature selection   |

## 2. Implementing Ridge and Lasso Regression on the Diabetes Dataset

*   **Diabetes Dataset:** A dataset containing information on diabetes patients, including various physiological measurements (e.g., age, sex, body mass index, average blood pressure) and a quantitative measure of disease progression one year after baseline.  Available in scikit-learn.

*   **Steps for Implementation:**

    1.  **Import Libraries:** Import necessary libraries like `numpy`, `pandas`, `sklearn.linear_model`, `sklearn.model_selection`, and `sklearn.metrics`.
    2.  **Load the Dataset:** Load the Diabetes dataset using `sklearn.datasets.load_diabetes()`.
    3.  **Split Data:** Split the data into training and testing sets using `train_test_split`.  A typical split is 80/20 or 70/30.
    4.  **Standardize/Scale Data:** Use `StandardScaler` or `MinMaxScaler` to scale the features. This is *crucial* for regularization techniques as they are sensitive to feature scales.
    5.  **Train Linear Regression Model:** Create and train a `LinearRegression` model on the training data.
    6.  **Train Ridge Regression Model:** Create and train a `Ridge` model on the training data. Experiment with different values of `alpha`.  Use `GridSearchCV` for optimal `alpha` selection.
    7.  **Train Lasso Regression Model:** Create and train a `Lasso` model on the training data. Experiment with different values of `alpha`. Use `GridSearchCV` for optimal `alpha` selection.
    8.  **Make Predictions:** Use each trained model to make predictions on the test data.
    9.  **Evaluate Performance:** Calculate MSE and R-squared for each model on the test data.
    10. **Compare Results:** Compare the MSE and R-squared values of the three models.
    11. **Analyze Coefficients:**  Examine the coefficients of each model, especially in Ridge and Lasso. Note how Lasso can zero out coefficients, indicating feature selection.

## 3. Performance Metrics: MSE and R-squared

*   **Mean Squared Error (MSE):**

    *   **Definition:** The average squared difference between the predicted and actual values.
    *   **Formula:**  MSE = (1/n) * ∑(yᵢ - ŷᵢ)²
    *   **Interpretation:** A lower MSE indicates a better fit.  Sensitive to outliers.  Units are squared units of the target variable.
    *   **Python:** `from sklearn.metrics import mean_squared_error`

*   **R-squared (Coefficient of Determination):**

    *   **Definition:** Represents the proportion of the variance in the dependent variable that is predictable from the independent variables.  Also indicates how well the model fits the observed data.
    *   **Formula:** R² = 1 - (SSres / SStot)
        *   SSres:  Residual Sum of Squares (explained above for OLS).
        *   SStot:  Total Sum of Squares = ∑(yᵢ - ȳ)² , where ȳ is the mean of the actual values.
    *   **Interpretation:**
        *   R² ranges from 0 to 1.
        *   A higher R² indicates a better fit.
        *   R² = 1 means the model perfectly explains the variance in the target variable.
        *   R² = 0 means the model explains none of the variance in the target variable.
        *   Note: R² can be negative if the model is worse than simply predicting the mean of the target variable.  This is common when using regularized models without proper hyperparameter tuning.
    *   **Python:** `from sklearn.metrics import r2_score`

## 4. Expected Outcomes and Analysis

*   **Hypothesis:** Ridge and Lasso regression will likely outperform standard linear regression on the Diabetes dataset, especially if there is multicollinearity or a large number of features.
*   **Expected Results:**
    *   Linear Regression: Provides a baseline performance.
    *   Ridge Regression: Should have lower MSE and higher R-squared than Linear Regression, especially with an optimized `alpha`. Coefficients will be shrunk towards zero.
    *   Lasso Regression: Could potentially have the lowest MSE and highest R-squared (depending on the optimal `alpha`), with some coefficients being zeroed out, indicating feature selection.
*   **Analyzing Coefficients:** Examine the coefficients of each model. Lasso regression might set some coefficients to zero, effectively performing feature selection.  Compare the magnitude of the coefficients across the models. Ridge will shrink coefficients but rarely to zero.  Linear Regression coefficients will likely be larger (in absolute value) than both Ridge and Lasso.
*   **Impact of Alpha:**  Experiment with different values of `alpha` for Ridge and Lasso. Observe how increasing `alpha` shrinks the coefficients and affects the MSE and R-squared. Use cross-validation to find the optimal `alpha`.

## 5. Example Python Code (Illustrative)

```python
import numpy as np
from sklearn.datasets import load_diabetes
from sklearn.model_selection import train_test_split, GridSearchCV
from sklearn.linear_model import LinearRegression, Ridge, Lasso
from sklearn.preprocessing import StandardScaler
from sklearn.metrics import mean_squared_error, r2_score
import pandas as pd

# Load the Diabetes Dataset
diabetes = load_diabetes()
X = diabetes.data
y = diabetes.target

# Convert to Pandas DataFrame for easier handling
df = pd.DataFrame(X, columns=diabetes.feature_names)
df['target'] = y

# Print some info
print("Dataframe shape:", df.shape)
print("\nDescription of the data:")
print(df.describe())

# Split the data into training and testing sets
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)

# Scale the data
scaler = StandardScaler()
X_train_scaled = scaler.fit_transform(X_train)
X_test_scaled = scaler.transform(X_test)

# --- Linear Regression ---
linear_model = LinearRegression()
linear_model.fit(X_train_scaled, y_train)
y_pred_linear = linear_model.predict(X_test_scaled)

mse_linear = mean_squared_error(y_test, y_pred_linear)
r2_linear = r2_score(y_test, y_pred_linear)

print("\nLinear Regression:")
print("MSE:", mse_linear)
print("R-squared:", r2_linear)

# --- Ridge Regression ---
ridge_model = Ridge()
param_grid_ridge = {'alpha': [0.001, 0.01, 0.1, 1, 10, 100]}  # Tune alpha

grid_search_ridge = GridSearchCV(ridge_model, param_grid_ridge, scoring='neg_mean_squared_error', cv=5)  # Cross-validation for alpha
grid_search_ridge.fit(X_train_scaled, y_train)

best_alpha_ridge = grid_search_ridge.best_params_['alpha']
best_ridge_model = Ridge(alpha=best_alpha_ridge)
best_ridge_model.fit(X_train_scaled, y_train)

y_pred_ridge = best_ridge_model.predict(X_test_scaled)

mse_ridge = mean_squared_error(y_test, y_pred_ridge)
r2_ridge = r2_score(y_test, y_pred_ridge)

print("\nRidge Regression (Best Alpha:", best_alpha_ridge, "):")
print("MSE:", mse_ridge)
print("R-squared:", r2_ridge)

# --- Lasso Regression ---
lasso_model = Lasso()
param_grid_lasso = {'alpha': [0.001, 0.01, 0.1, 1, 10, 100]}  # Tune alpha

grid_search_lasso = GridSearchCV(lasso_model, param_grid_lasso, scoring='neg_mean_squared_error', cv=5)  # Cross-validation for alpha
grid_search_lasso.fit(X_train_scaled, y_train)

best_alpha_lasso = grid_search_lasso.best_params_['alpha']
best_lasso_model = Lasso(alpha=best_alpha_lasso)
best_lasso_model.fit(X_train_scaled, y_train)

y_pred_lasso = best_lasso_model.predict(X_test_scaled)

mse_lasso = mean_squared_error(y_test, y_pred_lasso)
r2_lasso = r2_score(y_test, y_pred_lasso)

print("\nLasso Regression (Best Alpha:", best_alpha_lasso, "):")
print("MSE:", mse_lasso)
print("R-squared:", r2_lasso)

# Print coefficients for analysis
print("\nLinear Regression Coefficients:", linear_model.coef_)
print("\nRidge Regression Coefficients:", best_ridge_model.coef_)
print("\nLasso Regression Coefficients:", best_lasso_model.coef_)
```

## 6. Practice Questions/Exercises

1.  **Explain the difference between L1 and L2 regularization.**
    *   **Answer:** L1 regularization (Lasso) adds a penalty proportional to the *absolute value* of the coefficients, while L2 regularization (Ridge) adds a penalty proportional to the *square* of the coefficients. L1 can force coefficients to zero, performing feature selection, while L2 shrinks coefficients but rarely to zero.

2.  **What is the impact of increasing the value of `alpha` in Ridge and Lasso regression?**
    *   **Answer:** Increasing `alpha` increases the strength of the regularization penalty. This results in:
        *   Smaller coefficient values (coefficients shrink towards zero).
        *   Increased bias.
        *   Decreased variance.
        *   Potentially improved generalization performance (especially if the original model was overfitting).

3.  **When would you prefer using Lasso over Ridge regression?**
    *   **Answer:** When you suspect that only a few features are truly important and you want to perform feature selection. Lasso can effectively remove irrelevant features by setting their coefficients to zero.

4.  **Why is feature scaling important when using Ridge or Lasso regression?**
    *   **Answer:** Ridge and Lasso regression are sensitive to the scale of the features. If features are on different scales, the regularization penalty might disproportionately affect features with larger values, regardless of their actual importance. Scaling ensures that all features are treated equally during regularization.

5.  **What are the limitations of using R-squared as a performance metric?**
    *   **Answer:** R-squared can be artificially inflated by adding more features to the model, even if those features are not truly informative. Adjusted R-squared addresses this limitation by penalizing the addition of unnecessary features. R-squared also doesn't necessarily indicate the presence of bias in the model. A high R-squared doesn't guarantee a good model if it's overfitting.  R-squared can also be negative if the model is worse than just predicting the mean.

6. **How can you find the best value of the alpha (regularization parameter) in Ridge and Lasso?**
    * **Answer:** You can find the best value of alpha using techniques like:
        * **Grid Search Cross-Validation:**  Define a range of potential alpha values and use cross-validation (e.g., GridSearchCV in scikit-learn) to evaluate the model's performance for each value. The alpha that yields the best cross-validation score (e.g., lowest MSE or highest R-squared) is selected.
        * **Randomized Search Cross-Validation:**  Similar to grid search, but instead of evaluating all possible combinations, it randomly samples a subset of alpha values from a specified distribution. Useful when the search space is very large.

## 7. Important Points to Remember

*   **Regularization helps prevent overfitting.**
*   **Ridge regression shrinks coefficients but rarely to zero.**
*   **Lasso regression can perform feature selection by setting coefficients to zero.**
*   **Feature scaling is crucial for Ridge and Lasso.**
*   **Choose the appropriate `alpha` value using cross-validation.**
*   **MSE and R-squared are common metrics for evaluating regression models.**
*   **Consider the bias-variance tradeoff when choosing between Ridge and Lasso.**
*   **Examine the coefficients to understand the impact of regularization.**
