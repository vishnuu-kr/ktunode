---
title: "Tasks:"
subject: "MACHINE LEARNING LAB"
module: "Module 2: Implement polynomial regression on the Auto MPG dataset to predict miles per gallon (MPG) based on engine displacement. Compare polynomial regression results with linear regression."
branch: "Computer Science and Engineering"
semester: 5
topicId: "684162770fc9aa1fdbc8b935"
status: "completed"
scrapedAt: "2026-05-20T16:46:59.247Z"
---
# MACHINE LEARNING LAB - Module 2: Polynomial Regression on Auto MPG Dataset

## Topic: Implementing Polynomial Regression for MPG Prediction

**Description:** Implement polynomial regression on the Auto MPG dataset to predict miles per gallon (MPG) based on engine displacement. Compare polynomial regression results with linear regression.

**Learning Outcomes:**

*   Understand the concept of polynomial regression and its advantages over linear regression.
*   Learn how to implement polynomial regression using Python and scikit-learn.
*   Be able to preprocess data and prepare it for regression models.
*   Understand how to evaluate the performance of regression models using appropriate metrics.
*   Compare the performance of polynomial regression and linear regression.
*   Identify and address potential issues such as overfitting and underfitting.
*   Be able to visualize regression results.

---

### 1. Key Concepts and Definitions

*   **Linear Regression:** A statistical method that models the relationship between a dependent variable (target) and one or more independent variables (features) by fitting a linear equation to observed data.  Assumes a linear relationship.

*   **Polynomial Regression:** A form of regression analysis in which the relationship between the independent variable(s) and the dependent variable is modeled as an *n*th degree polynomial. This allows for capturing non-linear relationships.

*   **Degree of Polynomial:**  The highest power of the independent variable in the polynomial equation. E.g.,  y = a + bx + cx^2  is a polynomial of degree 2.

*   **Feature Engineering:** The process of using domain knowledge of the data to create features that make machine learning algorithms work. In polynomial regression, this involves creating new features that are powers of existing features (e.g., creating x^2, x^3 from x).

*   **Overfitting:**  A model that performs well on the training data but poorly on unseen data. This happens when the model is too complex and learns the noise in the training data.

*   **Underfitting:** A model that performs poorly on both training and unseen data. This happens when the model is too simple and cannot capture the underlying patterns in the data.

*   **Mean Squared Error (MSE):** A common metric for evaluating regression models. It calculates the average squared difference between the predicted and actual values. Lower MSE indicates better performance.  Formula: MSE = (1/n) * Σ(y_i - ŷ_i)^2, where y_i is the actual value, ŷ_i is the predicted value, and n is the number of data points.

*   **R-squared (Coefficient of Determination):**  A statistical measure that represents the proportion of the variance in the dependent variable that is predictable from the independent variable(s). It ranges from 0 to 1, with higher values indicating a better fit.

*   **Bias-Variance Tradeoff:** The fundamental problem in machine learning where simpler models have high bias (underfitting) and complex models have high variance (overfitting). Finding the right balance is crucial for good model performance.

---

### 2. Implementing Polynomial Regression

Here's a step-by-step guide using Python and scikit-learn:

**a) Import Libraries:**

```python
import numpy as np
import pandas as pd
from sklearn.model_selection import train_test_split
from sklearn.linear_model import LinearRegression
from sklearn.preprocessing import PolynomialFeatures
from sklearn.metrics import mean_squared_error, r2_score
import matplotlib.pyplot as plt
```

**b) Load and Prepare the Data:**

```python
# Load the Auto MPG dataset (replace with your actual data loading method)
# Assuming you have a CSV file named 'auto_mpg.csv'
try:
    data = pd.read_csv('auto_mpg.csv')
except FileNotFoundError:
    print("Error: 'auto_mpg.csv' not found.  Make sure the file is in the correct directory.")
    exit()

# Data cleaning (handling missing values) -  replace '?' with NaN and then drop rows with NaN
data = data.replace('?', np.nan)
data = data.dropna()

# Convert relevant columns to numeric types
data['horsepower'] = pd.to_numeric(data['horsepower'])
data['mpg'] = pd.to_numeric(data['mpg'])  # Explicitly converting mpg as well

# Select features and target variable
X = data[['displacement']]  # Independent variable: engine displacement
y = data['mpg']           # Dependent variable: miles per gallon
```

*   **Important:**  Data preprocessing is crucial. The Auto MPG dataset often contains missing values represented as "?".  These need to be handled before training the model.  Converting the 'horsepower' column to numeric is often required.

**c) Split Data into Training and Testing Sets:**

```python
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)  # 80% training, 20% testing
```

**d) Implement Linear Regression (for comparison):**

```python
# Create a linear regression model
linear_model = LinearRegression()

# Train the model on the training data
linear_model.fit(X_train, y_train)

# Make predictions on the test data
y_pred_linear = linear_model.predict(X_test)

# Evaluate the linear regression model
mse_linear = mean_squared_error(y_test, y_pred_linear)
r2_linear = r2_score(y_test, y_pred_linear)

print("Linear Regression:")
print(f"  MSE: {mse_linear}")
print(f"  R-squared: {r2_linear}")
```

**e) Implement Polynomial Regression:**

```python
# Choose the degree of the polynomial
degree = 2  # Experiment with different degrees (2, 3, 4, etc.)

# Create a PolynomialFeatures object to transform the input features
poly = PolynomialFeatures(degree=degree)

# Transform the training and testing data into polynomial features
X_train_poly = poly.fit_transform(X_train)
X_test_poly = poly.transform(X_test)

# Create a linear regression model for the polynomial features
poly_model = LinearRegression()

# Train the polynomial regression model
poly_model.fit(X_train_poly, y_train)

# Make predictions on the test data using the polynomial model
y_pred_poly = poly_model.predict(X_test_poly)

# Evaluate the polynomial regression model
mse_poly = mean_squared_error(y_test, y_pred_poly)
r2_poly = r2_score(y_test, y_pred_poly)

print("\nPolynomial Regression (Degree {}):".format(degree))
print(f"  MSE: {mse_poly}")
print(f"  R-squared: {r2_poly}")
```

*   **`PolynomialFeatures`:**  This class from scikit-learn is crucial. It generates new feature columns consisting of all polynomial combinations of the features with degree less than or equal to the specified degree. For example, if the input feature is `x` and the degree is 2, it will generate features `[1, x, x^2]`.

**f) Visualization:**

```python
# Visualize the results
plt.figure(figsize=(10, 6))

# Scatter plot of the actual data points
plt.scatter(X_test, y_test, color='blue', label='Actual')

# Plot the linear regression line
plt.plot(X_test, y_pred_linear, color='red', label='Linear Regression')

# Plot the polynomial regression curve
# To plot a smooth curve, we need to generate more points
X_plot = np.linspace(X.min(), X.max(), 100).reshape(-1, 1)
X_plot_poly = poly.transform(X_plot)
y_plot_poly = poly_model.predict(X_plot_poly)
plt.plot(X_plot, y_plot_poly, color='green', label='Polynomial Regression (Degree {})'.format(degree))

plt.xlabel('Engine Displacement')
plt.ylabel('Miles per Gallon (MPG)')
plt.title('Linear vs. Polynomial Regression')
plt.legend()
plt.show()
```

*   **Important:**  For visualization, we generate a range of X values (`X_plot`) and then transform them using the same `poly.transform` method used on the training and testing data. This ensures the polynomial regression curve is plotted correctly.

**g) Hyperparameter Tuning (Choosing the Degree):**

The degree of the polynomial is a hyperparameter that needs to be tuned.  You can iterate through different degree values and evaluate the performance on a validation set (or using cross-validation) to find the optimal degree.  Higher degrees can lead to overfitting.

```python
# Example of tuning using a loop
degrees = range(1, 6)  # Test degrees 1 to 5
mse_values = []
r2_values = []

for degree in degrees:
    poly = PolynomialFeatures(degree=degree)
    X_train_poly = poly.fit_transform(X_train)
    X_test_poly = poly.transform(X_test)
    poly_model = LinearRegression()
    poly_model.fit(X_train_poly, y_train)
    y_pred_poly = poly_model.predict(X_test_poly)
    mse = mean_squared_error(y_test, y_pred_poly)
    r2 = r2_score(y_test, y_pred_poly)
    mse_values.append(mse)
    r2_values.append(r2)

    print(f"Degree {degree}: MSE = {mse:.4f}, R-squared = {r2:.4f}")


# Plotting MSE vs. Degree
plt.figure(figsize=(8, 6))
plt.plot(degrees, mse_values, marker='o', linestyle='-')
plt.xlabel('Polynomial Degree')
plt.ylabel('Mean Squared Error (MSE)')
plt.title('MSE vs. Polynomial Degree')
plt.grid(True)
plt.show()


# Plotting R-squared vs. Degree
plt.figure(figsize=(8, 6))
plt.plot(degrees, r2_values, marker='o', linestyle='-')
plt.xlabel('Polynomial Degree')
plt.ylabel('R-squared')
plt.title('R-squared vs. Polynomial Degree')
plt.grid(True)
plt.show()

```

*   **Explanation:** This code snippet demonstrates how to iterate through different polynomial degrees, train a model for each degree, and evaluate its performance using MSE and R-squared.  The plots help visualize the relationship between the degree and the model's performance, allowing you to choose the best degree that balances bias and variance.  A sharp decrease in MSE followed by an increase often indicates the onset of overfitting.

---

### 3. Advantages of Polynomial Regression over Linear Regression

*   **Handles Non-Linear Relationships:** Polynomial regression can capture more complex relationships between the independent and dependent variables than linear regression, which assumes a linear relationship.
*   **Flexibility:**  By increasing the degree of the polynomial, you can fit a wider range of curves to the data.

### 4. Disadvantages of Polynomial Regression

*   **Overfitting:** High-degree polynomials can easily overfit the training data, leading to poor generalization performance on unseen data.
*   **Complexity:** As the degree increases, the model becomes more complex and computationally expensive.
*   **Interpretability:** High-degree polynomials can be difficult to interpret.  The coefficients of the polynomial terms may not have clear meanings.
*   **Extrapolation:** Polynomial regression can produce unreliable predictions when extrapolating beyond the range of the training data.  The curve can behave unexpectedly outside the observed data range.

---

### 5. Evaluating Regression Models

*   **Mean Squared Error (MSE):**  Lower MSE is better.
*   **R-squared:** Higher R-squared is better (closer to 1).
*   **Visual Inspection:**  Plot the predicted values against the actual values to visually assess the model's fit. Examine residual plots to check for patterns that might indicate problems with the model.
*   **Cross-Validation:** Use k-fold cross-validation to get a more robust estimate of the model's performance.

---

### 6. Important Points to Remember

*   **Data Preprocessing:**  Always preprocess your data (handle missing values, scale features) before training a regression model.
*   **Feature Scaling:**  Polynomial features can have a wide range of values. Scaling features (e.g., using `StandardScaler` or `MinMaxScaler`) can improve the performance of the model, especially with higher-degree polynomials.
*   **Regularization:**  Techniques like L1 (Lasso) and L2 (Ridge) regularization can help prevent overfitting in polynomial regression.  These methods add a penalty term to the cost function that discourages large coefficients.
*   **Choose the Right Degree:**  Experiment with different polynomial degrees to find the optimal balance between bias and variance.  Use validation sets or cross-validation to evaluate the performance on unseen data.
*   **Understand the Limitations:**  Be aware of the limitations of polynomial regression, such as overfitting and difficulty with extrapolation.
*   **Domain Knowledge:** Use domain knowledge to inform your feature engineering and model selection.

---

### 7. Practice Questions/Exercises

**1. Data Loading and Cleaning:**

*   **Question:**  You have the Auto MPG dataset in a CSV file. Some values in the 'horsepower' column are represented as "?".  Write the Python code to load the data, replace "?" with `NaN`, and then remove rows containing `NaN`. Also, convert 'horsepower' column to numeric type.

*   **Answer:**

    ```python
    import pandas as pd
    import numpy as np

    data = pd.read_csv('auto_mpg.csv')
    data = data.replace('?', np.nan)
    data = data.dropna()
    data['horsepower'] = pd.to_numeric(data['horsepower'])
    print(data.head())
    ```

**2. Polynomial Feature Transformation:**

*   **Question:** You have a feature `X` representing engine displacement.  Create a polynomial feature matrix `X_poly` with a degree of 3 using `PolynomialFeatures` from scikit-learn.

*   **Answer:**

    ```python
    from sklearn.preprocessing import PolynomialFeatures
    import numpy as np

    X = np.array([[100], [150], [200], [250]])  # Example displacement values
    poly = PolynomialFeatures(degree=3)
    X_poly = poly.fit_transform(X)
    print(X_poly)
    ```

**3. Model Evaluation:**

*   **Question:** You have the actual values `y_true` and the predicted values `y_pred` for a regression model. Calculate the Mean Squared Error (MSE) and R-squared.

*   **Answer:**

    ```python
    from sklearn.metrics import mean_squared_error, r2_score
    import numpy as np

    y_true = np.array([20, 25, 30, 35])
    y_pred = np.array([22, 24, 28, 37])

    mse = mean_squared_error(y_true, y_pred)
    r2 = r2_score(y_true, y_pred)

    print(f"MSE: {mse}")
    print(f"R-squared: {r2}")
    ```

**4. Overfitting/Underfitting:**

*   **Question:**  Explain the difference between overfitting and underfitting in the context of polynomial regression.  What are the signs and some potential solutions?

*   **Answer:**

    *   **Overfitting:** The model fits the training data very well, including the noise, but performs poorly on unseen data. Signs: Low MSE on training data but high MSE on testing data. Solution: Reduce the degree of the polynomial, use regularization techniques, increase the size of the training data.
    *   **Underfitting:** The model is too simple and cannot capture the underlying patterns in the data.  Signs: High MSE on both training and testing data. Solution: Increase the degree of the polynomial, add more features.

**5. Choosing the Degree:**

*   **Question:** How would you choose the optimal degree for polynomial regression?

*   **Answer:** Experiment with different degrees and evaluate the performance on a validation set (or using cross-validation).  Look for the degree that gives the lowest MSE (or highest R-squared) on the validation set without overfitting the training data.  Visualizing the learning curves (MSE vs. training set size) for different degrees can also be helpful.

---
