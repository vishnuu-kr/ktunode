---
title: "LASSO and RIDGE regularization"
subject: "MACHINE LEARNING"
module: "Module 2: Classification  "
branch: "Computer Science and Engineering"
semester: 5
topicId: "684162760fc9aa1fdbc8b5b8"
status: "completed"
scrapedAt: "2026-05-20T16:46:32.711Z"
---
## MACHINE LEARNING: Module 2 - Classification: LASSO and RIDGE Regularization

**Learning Outcomes:**

*   Understand the concept of regularization and its purpose in machine learning.
*   Differentiate between L1 (LASSO) and L2 (Ridge) regularization.
*   Explain how LASSO and Ridge regularization affect model coefficients.
*   Describe the impact of the regularization parameter (λ or α) on model complexity and performance.
*   Apply LASSO and Ridge regularization using Python libraries like scikit-learn.
*   Understand the advantages and disadvantages of LASSO and Ridge regularization.
*   Choose between LASSO and Ridge regularization based on the characteristics of the data and the desired model properties.

---

**1. Introduction to Regularization**

*   **Definition:** Regularization is a technique used to prevent overfitting in machine learning models. Overfitting occurs when a model learns the training data too well, capturing noise and outliers, leading to poor performance on unseen data (test data).

*   **Purpose:**
    *   Improve model generalization by reducing variance.
    *   Simplify the model by shrinking or eliminating less important features.
    *   Prevent multicollinearity issues (high correlation between features).

*   **How it Works:** Regularization adds a penalty term to the cost function (loss function) that the model tries to minimize during training.  This penalty discourages the model from assigning large coefficients to features.

**2. L1 Regularization (LASSO - Least Absolute Shrinkage and Selection Operator)**

*   **Definition:** LASSO regularization adds a penalty term proportional to the *absolute value* of the coefficients to the cost function.

*   **Cost Function:**
    ```
    Cost Function =  Original Cost Function + λ * Σ |βi|
    ```
    where:
        *   `λ` (lambda) is the regularization parameter (also sometimes denoted as α).
        *   `βi` are the coefficients of the model (i = 1 to number of features).
        *   `Σ |βi|` is the sum of the absolute values of the coefficients.

*   **Key Properties:**
    *   **Feature Selection:** LASSO can drive the coefficients of some features to exactly zero, effectively performing feature selection. This results in a sparser model (fewer features used).
    *   **Geometric Interpretation:** The L1 penalty corresponds to a diamond-shaped constraint region. This shape increases the probability of the coefficient vector intersecting the axes (i.e., setting some coefficients to zero).
    *   **Suitable for:** Datasets with many features, especially when you suspect that only a subset of features are truly important.

*   **Example:** Imagine predicting house prices using features like size, number of bedrooms, location, year built, distance to the nearest school, etc. LASSO might identify that only size and location are significant predictors, setting the coefficients of the other features to zero.

**3. L2 Regularization (Ridge Regression)**

*   **Definition:** Ridge regularization adds a penalty term proportional to the *square* of the coefficients to the cost function.

*   **Cost Function:**
    ```
    Cost Function = Original Cost Function + λ * Σ βi²
    ```
    where:
        *   `λ` (lambda) is the regularization parameter (also sometimes denoted as α).
        *   `βi` are the coefficients of the model (i = 1 to number of features).
        *   `Σ βi²` is the sum of the squares of the coefficients.

*   **Key Properties:**
    *   **Coefficient Shrinkage:** Ridge shrinks the coefficients towards zero but rarely sets them exactly to zero. All features are retained in the model, but their influence is reduced.
    *   **Geometric Interpretation:** The L2 penalty corresponds to a circular (or spherical in higher dimensions) constraint region.  This shape encourages the coefficients to be small but rarely exactly zero.
    *   **Addresses Multicollinearity:** Ridge regularization is effective in dealing with multicollinearity by reducing the variance of the coefficients.
    *   **Suitable for:** Datasets where all features are potentially relevant, and you want to prevent overfitting without completely eliminating any feature.

*   **Example:**  Predicting customer churn using features like age, income, usage frequency, customer service interactions, etc. Ridge might reduce the impact of all features, preventing any single feature from dominating the prediction, but it will still use all features.

**4. The Regularization Parameter (λ or α)**

*   **Role:**  Controls the strength of the regularization penalty.
*   **High λ (or α):**
    *   Stronger regularization.
    *   Larger penalty on coefficients.
    *   Simpler model (lower variance).
    *   Higher bias (potential underfitting).
*   **Low λ (or α):**
    *   Weaker regularization.
    *   Smaller penalty on coefficients.
    *   More complex model (higher variance).
    *   Lower bias (potential overfitting).
*   **Choosing the Right λ:**  Often determined through techniques like cross-validation.  You would try several values of λ and choose the one that gives the best performance on a validation set (data not used for training).  Grid search and RandomizedSearchCV are commonly used for this parameter tuning.

**5. Implementing LASSO and Ridge in Python (Scikit-learn)**

```python
from sklearn.linear_model import Lasso, Ridge
from sklearn.model_selection import train_test_split
from sklearn.datasets import make_regression
from sklearn.metrics import mean_squared_error
import numpy as np

# Generate some sample data
X, y = make_regression(n_samples=100, n_features=5, noise=5, random_state=42)
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.3, random_state=42)

# --- LASSO Regression ---
lasso = Lasso(alpha=0.1)  # alpha is the regularization parameter (λ)
lasso.fit(X_train, y_train)

# Print coefficients
print("LASSO Coefficients:", lasso.coef_)

# Make predictions
y_pred_lasso = lasso.predict(X_test)

# Evaluate performance
mse_lasso = mean_squared_error(y_test, y_pred_lasso)
print("LASSO Mean Squared Error:", mse_lasso)


# --- Ridge Regression ---
ridge = Ridge(alpha=1.0)  # alpha is the regularization parameter (λ)
ridge.fit(X_train, y_train)

# Print coefficients
print("Ridge Coefficients:", ridge.coef_)

# Make predictions
y_pred_ridge = ridge.predict(X_test)

# Evaluate performance
mse_ridge = mean_squared_error(y_test, y_pred_ridge)
print("Ridge Mean Squared Error:", mse_ridge)

# Finding the best alpha using cross-validation
from sklearn.linear_model import RidgeCV
ridge_cv = RidgeCV(alphas=np.logspace(-3, 3, 100)) # Try 100 values of alpha between 0.001 and 1000
ridge_cv.fit(X_train, y_train)
print("Best alpha using RidgeCV:", ridge_cv.alpha_)
y_pred_ridge_cv = ridge_cv.predict(X_test)
mse_ridge_cv = mean_squared_error(y_test, y_pred_ridge_cv)
print("RidgeCV Mean Squared Error:", mse_ridge_cv)
```

**Explanation:**

*   `Lasso(alpha=0.1)` and `Ridge(alpha=1.0)` create LASSO and Ridge regression objects with specified regularization strengths.  The `alpha` parameter corresponds to λ.
*   `fit(X_train, y_train)` trains the model on the training data.
*   `coef_` attribute provides the learned coefficients.
*   `predict(X_test)` makes predictions on the test data.
*   `mean_squared_error(y_test, y_pred)` calculates the mean squared error to evaluate model performance.
*   `RidgeCV()` automatically selects the best alpha using cross-validation.

**6. Advantages and Disadvantages**

| Feature        | LASSO (L1)                                             | Ridge (L2)                                                    |
|----------------|--------------------------------------------------------|---------------------------------------------------------------|
| Penalty        | Σ |βi| (Sum of absolute values of coefficients)      | Σ βi² (Sum of squared coefficients)                            |
| Feature Selection| Yes (can set coefficients to 0)                       | No (shrinks coefficients but rarely to 0)                   |
| Multicollinearity| Less effective                                          | Effective                                                        |
| Model Complexity| Simpler models (fewer features)                       | More complex models (all features retained)                  |
| Sparsity       | Produces sparse models                                 | Does not produce sparse models                                |
| Interpretability | Easier to interpret (due to feature selection)       | Can be harder to interpret                                   |
| When to Use    | When you suspect many features are irrelevant           | When all features are potentially relevant and multicollinearity is present |

**7. Choosing Between LASSO and Ridge**

*   **High Dimensionality (p >> n):**  If the number of features (p) is much greater than the number of samples (n), LASSO is often preferred as it can perform feature selection and simplify the model.
*   **Multicollinearity:** If the features are highly correlated, Ridge is generally preferred as it can handle multicollinearity better.
*   **Feature Relevance:** If you know or suspect that only a few features are truly important, LASSO can help you identify those features. If you believe all features are potentially relevant, Ridge might be a better choice.
*   **Interpretability:** LASSO's feature selection makes it easier to interpret the model.
*   **Experimentation:** Often, the best approach is to try both LASSO and Ridge (and Elastic Net, a combination of both) and compare their performance using cross-validation.

**8. Important Points to Remember**

*   Regularization helps prevent overfitting by adding a penalty to the cost function.
*   LASSO performs feature selection by driving some coefficients to zero.
*   Ridge shrinks coefficients but rarely sets them to zero.
*   The regularization parameter (λ or α) controls the strength of the regularization.
*   Choose between LASSO and Ridge based on the characteristics of the data and the desired model properties.
*   Cross-validation is crucial for selecting the optimal value of the regularization parameter.

**Practice Questions/Exercises:**

1.  **Conceptual Question:** Explain the difference between L1 and L2 regularization in your own words.  What is the main advantage of using LASSO over Ridge regression?

    *   **Answer:** L1 regularization (LASSO) adds a penalty proportional to the absolute value of the coefficients, while L2 regularization (Ridge) adds a penalty proportional to the square of the coefficients. The main advantage of LASSO is its ability to perform feature selection by setting the coefficients of irrelevant features to zero, leading to a simpler and more interpretable model.

2.  **Coding Exercise:** Using the scikit-learn `make_regression` dataset generator, create a dataset with 100 samples and 10 features, but make only 3 of the features truly relevant.  Then:
    *   Train a linear regression model without regularization.
    *   Train a LASSO regression model with `alpha=0.1`.
    *   Train a Ridge regression model with `alpha=1.0`.
    *   Compare the coefficients of the models.  How many features are set to zero by the LASSO model?  How do the Ridge coefficients compare to the unregularized model?

    *   **Answer (Example):** You will observe that the LASSO model has more coefficients close to or equal to zero than the Ridge or the unregularized model.  The Ridge coefficients will be smaller in magnitude than the unregularized model's coefficients. The amount of features set to zero can be counted by iterating through the lasso.coef_ array and using a counter, incrementing if the absolute value of a coefficient is smaller than a certain threshold (e.g., 1e-5).

3.  **Conceptual Question:**  You have a dataset with a large number of highly correlated features. Which regularization technique would you prefer: LASSO or Ridge?  Why?

    *   **Answer:** Ridge regularization.  Ridge is more effective at handling multicollinearity than LASSO.  LASSO might arbitrarily select one feature from a group of correlated features and set the others to zero, which might not be the most stable or interpretable solution. Ridge, on the other hand, shrinks the coefficients of all correlated features, distributing the weight among them and reducing the impact of multicollinearity on the model's variance.

4.  **Parameter Tuning:**  Why is it important to tune the regularization parameter (λ or α) using cross-validation?

    *   **Answer:** The regularization parameter controls the trade-off between model complexity and bias.  A high value of λ leads to a simpler model with higher bias (potential underfitting), while a low value of λ leads to a more complex model with lower bias but higher variance (potential overfitting). Cross-validation allows you to estimate the generalization performance of the model for different values of λ and select the value that minimizes the error on unseen data, achieving the best balance between bias and variance.
