---
title: "Compare the polynomial regression models with linear regression using metrics such as MSE and R-squared."
subject: "MACHINE LEARNING LAB"
module: "Module 2: Implement polynomial regression on the Auto MPG dataset to predict miles per gallon (MPG) based on engine displacement. Compare polynomial regression results with linear regression."
branch: "Computer Science and Engineering"
semester: 5
topicId: "684162770fc9aa1fdbc8b938"
status: "completed"
scrapedAt: "2026-05-20T16:47:01.425Z"
---
# MACHINE LEARNING LAB - Module 2: Polynomial Regression vs. Linear Regression on Auto MPG Dataset

## Topic: Comparing Polynomial Regression Models with Linear Regression using MSE and R-squared

### Learning Outcomes:

*   Understand the concept of polynomial regression and its application.
*   Implement polynomial regression using Python and relevant libraries (e.g., scikit-learn).
*   Understand and calculate Mean Squared Error (MSE) and R-squared.
*   Compare the performance of polynomial regression models of different degrees.
*   Compare the performance of polynomial regression with linear regression.
*   Interpret the results and draw conclusions about model performance.

### 1. Key Concepts and Definitions:

*   **Regression:** A statistical process for estimating the relationship between a dependent variable (outcome) and one or more independent variables (predictors).
*   **Linear Regression:** A regression model that assumes a linear relationship between the independent and dependent variables. Represented by the equation:  `y = mx + b`, where `y` is the dependent variable, `x` is the independent variable, `m` is the slope, and `b` is the y-intercept.
*   **Polynomial Regression:** A regression model that models the relationship between the independent and dependent variables as an nth-degree polynomial. Represented by the equation: `y = b0 + b1*x + b2*x^2 + ... + bn*x^n`, where `y` is the dependent variable, `x` is the independent variable, and `b0, b1, ..., bn` are the coefficients. The degree `n` determines the complexity of the curve.
*   **Auto MPG Dataset:** A commonly used dataset for regression tasks, containing information about cars and their miles per gallon (MPG) performance.  Key features include MPG, cylinders, displacement, horsepower, weight, acceleration, model year, and origin.  We'll focus on using 'displacement' to predict 'MPG'.
*   **Mean Squared Error (MSE):** A measure of the average squared difference between the predicted values and the actual values.  It penalizes larger errors more heavily. A lower MSE indicates a better model fit.
    *   Formula:  `MSE = (1/n) * Σ(yi - ŷi)^2`, where `yi` is the actual value, `ŷi` is the predicted value, and `n` is the number of data points.
*   **R-squared (Coefficient of Determination):** A statistical measure that represents the proportion of variance in the dependent variable that is predictable from the independent variable(s). It ranges from 0 to 1.  A higher R-squared indicates a better fit, meaning the model explains a larger proportion of the variance in the data.
    *   Formula: `R-squared = 1 - (SSR / SST)`, where `SSR` is the sum of squares of residuals (the sum of squared differences between predicted and actual values), and `SST` is the total sum of squares (the sum of squared differences between actual values and the mean of the actual values).
*   **Overfitting:** A situation where a model learns the training data too well, capturing noise and specific details that don't generalize to new, unseen data.  Overfitted models often perform poorly on test data.  Polynomial regression with a very high degree is prone to overfitting.
*   **Underfitting:** A situation where a model is too simple to capture the underlying patterns in the data.  Underfitted models perform poorly on both training and test data.  A linear regression might underfit a highly non-linear relationship.

### 2. Implementing Polynomial Regression in Python (using scikit-learn):

```python
import pandas as pd
import numpy as np
from sklearn.model_selection import train_test_split
from sklearn.linear_model import LinearRegression
from sklearn.preprocessing import PolynomialFeatures
from sklearn.metrics import mean_squared_error, r2_score
import matplotlib.pyplot as plt

# 1. Load the Auto MPG dataset (replace with your actual file path)
try:
    df = pd.read_csv('auto-mpg.csv') # or 'auto_mpg.data' if using the UCI dataset
except FileNotFoundError:
    print("Error: Auto MPG dataset not found.  Make sure the file path is correct.")
    exit()

# Clean the data (handle missing values, if any) - Replace '?' with NaN
df = df.replace('?', np.nan)
df = df.dropna()

# Convert necessary columns to numeric type
df['horsepower'] = pd.to_numeric(df['horsepower'])

# 2. Prepare the data
X = df[['displacement']]  # Independent variable
y = df['mpg']  # Dependent variable

# 3. Split the data into training and testing sets
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)

# 4. Implement Linear Regression
linear_model = LinearRegression()
linear_model.fit(X_train, y_train)
y_pred_linear = linear_model.predict(X_test)
mse_linear = mean_squared_error(y_test, y_pred_linear)
r2_linear = r2_score(y_test, y_pred_linear)

print("Linear Regression:")
print(f"  MSE: {mse_linear}")
print(f"  R-squared: {r2_linear}")

# 5. Implement Polynomial Regression (for different degrees)
degrees = [2, 3, 4, 5]  # Explore different polynomial degrees

for degree in degrees:
    # Create Polynomial Features
    poly = PolynomialFeatures(degree=degree)
    X_train_poly = poly.fit_transform(X_train)
    X_test_poly = poly.transform(X_test)

    # Train the Polynomial Regression model
    poly_model = LinearRegression()
    poly_model.fit(X_train_poly, y_train)

    # Make predictions
    y_pred_poly = poly_model.predict(X_test_poly)

    # Evaluate the model
    mse_poly = mean_squared_error(y_test, y_pred_poly)
    r2_poly = r2_score(y_test, y_pred_poly)

    print(f"\nPolynomial Regression (Degree {degree}):")
    print(f"  MSE: {mse_poly}")
    print(f"  R-squared: {r2_poly}")

    # Optional: Plot the results
    plt.figure(figsize=(8, 6))
    plt.scatter(X_test, y_test, label="Actual Data")

    # Sort the test data for plotting the regression line smoothly
    sort_axis = np.argsort(X_test.values.ravel()) # Sort X_test
    X_test_sorted = X_test.values.ravel()[sort_axis]
    y_pred_sorted = y_pred_poly[sort_axis]


    plt.plot(X_test_sorted, y_pred_sorted, color='red', label=f"Polynomial Regression (Degree {degree})")
    plt.xlabel("Displacement")
    plt.ylabel("MPG")
    plt.title(f"Polynomial Regression (Degree {degree}) vs. Actual Data")
    plt.legend()
    plt.show()

# 6. Comparison and Interpretation

# Compare the MSE and R-squared values for linear and polynomial regression models.
# Analyze the results:
# - Does polynomial regression improve the model's performance compared to linear regression?
# - How does the degree of the polynomial affect the model's performance?
# - Is there evidence of overfitting with higher-degree polynomials?
```

**Explanation of the Code:**

1.  **Load Data:** Loads the Auto MPG dataset using pandas.  **Important:**  Replace `"auto-mpg.csv"` with the correct path to your data file. Handle missing values (`?` replaced with `NaN` and rows with `NaN` are removed). Correctly convert the 'horsepower' column to a numeric type.

2.  **Prepare Data:** Selects 'displacement' as the independent variable (X) and 'mpg' as the dependent variable (y).

3.  **Split Data:** Splits the data into training and testing sets using `train_test_split`.  The `test_size=0.2` means 20% of the data is used for testing, and `random_state=42` ensures reproducibility.

4.  **Linear Regression:**
    *   Creates a `LinearRegression` object.
    *   Trains the model using `fit(X_train, y_train)`.
    *   Makes predictions on the test set using `predict(X_test)`.
    *   Calculates MSE and R-squared using `mean_squared_error` and `r2_score`.
    *   Prints the evaluation metrics.

5.  **Polynomial Regression:**
    *   Iterates through a list of polynomial degrees (`degrees = [2, 3, 4, 5]`).
    *   For each degree:
        *   Creates a `PolynomialFeatures` object to transform the original features into polynomial features. `poly.fit_transform(X_train)` fits the transformer to the training data and transforms it, while `poly.transform(X_test)` transforms the test data using the fitted transformer. **Important:**  Only `fit_transform` on the *training* data to avoid data leakage.
        *   Trains a `LinearRegression` model on the polynomial features.  Note that even though we use LinearRegression *again*, the polynomial features make this polynomial regression.
        *   Makes predictions and calculates MSE and R-squared.
        *   Prints the evaluation metrics.
        *   Optionally plots the regression line against the actual data to visualize the fit.

6.  **Comparison and Interpretation:**  This section provides guidance on how to interpret the results.  It prompts you to compare the MSE and R-squared values and to consider whether polynomial regression improved the model's performance, how the degree of the polynomial affects the model, and whether there is evidence of overfitting.

### 3. Comparing Polynomial Regression Models

*   **Analyzing MSE and R-squared:** Compare the MSE and R-squared values for different degrees of polynomial regression.  A lower MSE and a higher R-squared generally indicate a better fit to the data.
*   **Overfitting and Underfitting:**
    *   A linear regression might **underfit** if the relationship between displacement and MPG is non-linear.
    *   A high-degree polynomial (e.g., degree 5 or higher) can **overfit** the training data, resulting in a good fit on the training set but poor generalization to the test set.  Overfitting is often indicated by a decreasing R-squared or increasing MSE on the *test* set as the degree of the polynomial increases.
*   **Optimal Degree:**  The optimal degree of the polynomial is the one that balances model complexity and generalization ability.  It's often found by observing the performance on the *test* set.  A common technique is cross-validation to more rigorously estimate model performance.

### 4. Evaluating Model Performance: MSE and R-squared

*   **MSE (Mean Squared Error):**
    *   Lower is better.
    *   Units: The units of MSE are the square of the units of the dependent variable (MPG in this case).  This can make it harder to interpret directly.
    *   Sensitive to outliers: Squaring the errors makes the MSE very sensitive to outliers.
*   **R-squared:**
    *   Higher is better (closer to 1).
    *   Represents the proportion of variance explained by the model.
    *   Ranges from 0 to 1 (although can be negative if the model performs very poorly).
    *   Not always a perfect measure:  R-squared can be artificially inflated by adding more variables to the model, even if those variables are not truly related to the dependent variable.  Adjusted R-squared addresses this to some extent.

### 5. Examples:

Let's assume we run the code and get the following results (these are just examples):

```
Linear Regression:
  MSE: 24.01
  R-squared: 0.65

Polynomial Regression (Degree 2):
  MSE: 19.52
  R-squared: 0.71

Polynomial Regression (Degree 3):
  MSE: 19.28
  R-squared: 0.72

Polynomial Regression (Degree 4):
  MSE: 20.15
  R-squared: 0.70

Polynomial Regression (Degree 5):
  MSE: 22.50
  R-squared: 0.68
```

**Interpretation:**

*   Polynomial regression (degrees 2 and 3) improved the model performance compared to linear regression, as evidenced by lower MSE and higher R-squared.
*   Degree 3 seems to be slightly better than degree 2.
*   Degrees 4 and 5 show a decrease in R-squared and an increase in MSE compared to degree 3, suggesting that these higher degrees might be overfitting the data.

### 6. Practice Questions/Exercises:

1.  **Data Exploration:** Before implementing regression, what are some exploratory data analysis (EDA) steps you should take to understand the data and identify potential issues?
    *   **Answer:** EDA steps include:
        *   Checking for missing values.
        *   Examining the distribution of variables (histograms, box plots).
        *   Calculating descriptive statistics (mean, median, standard deviation).
        *   Visualizing relationships between variables (scatter plots).
        *   Checking for outliers.

2.  **Feature Scaling:**  Does polynomial regression typically require feature scaling (e.g., standardization or normalization)? Why or why not?
    *   **Answer:** Yes, feature scaling is often recommended for polynomial regression.  When you create polynomial features (e.g., x^2, x^3), the values can become very large, especially if the original feature 'x' has values > 1.  This can lead to numerical instability and can make it difficult for the model to converge during training. Scaling the features to a similar range (e.g., between 0 and 1) can alleviate these issues.

3.  **Model Selection:** Based on the example results above (MSE and R-squared values), which model (linear, degree 2, degree 3, degree 4, or degree 5) would you choose and why?
    *   **Answer:** Based on the example, the polynomial regression model with degree 3 would likely be chosen. It has the lowest MSE and highest R-squared compared to the other models.  While the differences might be small, the trend suggests that higher degrees (4 and 5) are starting to overfit, as their performance on the *test* set is declining.

4.  **Cross-Validation:** Explain the concept of k-fold cross-validation and why it is useful for evaluating machine learning models, especially when determining the optimal degree of a polynomial regression.
    *   **Answer:** K-fold cross-validation is a technique used to assess the performance of a model on unseen data. The data is divided into k "folds" (subsets). The model is trained on k-1 folds and tested on the remaining fold. This process is repeated k times, with each fold serving as the test set once. The performance metrics (e.g., MSE, R-squared) are averaged across the k folds to obtain a more robust estimate of the model's generalization ability.  It is especially helpful for determining the optimal degree of polynomial regression because it provides a more reliable estimate of how well the model will perform on unseen data compared to a single train/test split.  It helps to avoid overfitting and select a model that generalizes better.

5.  **Interpreting Coefficients:**  In a polynomial regression model, how do you interpret the coefficients of the polynomial terms?  For example, if you have a model `y = b0 + b1*x + b2*x^2`, what does b2 tell you?
    *   **Answer:** The coefficients in a polynomial regression model represent the change in the dependent variable (y) for a unit change in the corresponding polynomial term. However, their interpretation is not as straightforward as in linear regression because the independent variable (x) is raised to different powers.  In the example `y = b0 + b1*x + b2*x^2`:
        *   `b0` is the intercept (the value of y when x = 0).
        *   `b1` represents the linear effect of x on y.
        *   `b2` represents the quadratic effect of x on y.  A positive `b2` indicates that the relationship between x and y is curved upward (convex), while a negative `b2` indicates that the relationship is curved downward (concave). The magnitude of `b2` indicates the strength of the curvature.

### 7. Important Points to Remember:

*   **Overfitting is a major concern with polynomial regression.**  Monitor the performance on a validation or test set to avoid it. Use techniques like cross-validation.
*   **Feature scaling can improve the stability and performance of polynomial regression.**
*   **The optimal degree of the polynomial depends on the data and the specific problem.** There's no one-size-fits-all answer. Experiment with different degrees.
*   **MSE and R-squared are useful metrics for evaluating regression models, but they should be considered together.** R-squared can be misleading if the model is overfitting.
*   **Always visualize your results!** Plotting the regression line against the data can provide valuable insights into the model's fit.
*   **Polynomial regression is a form of *linear* regression.** The "linear" refers to the fact that the coefficients are linear in the equation, not that the *relationship* is linear.
