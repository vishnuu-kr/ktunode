---
title: "Implement polynomial regression on the Auto MPG dataset to predict miles per gallon (MPG) based on engine displacement. Compare polynomial regression results with linear regression."
subject: "MACHINE LEARNING LAB"
module: "Module 2: Implement polynomial regression on the Auto MPG dataset to predict miles per gallon (MPG) based on engine displacement. Compare polynomial regression results with linear regression."
branch: "Computer Science and Engineering"
semester: 5
topicId: "684162770fc9aa1fdbc8b934"
status: "completed"
scrapedAt: "2026-05-20T16:46:58.470Z"
---
## MACHINE LEARNING LAB - Module 2: Polynomial Regression on Auto MPG Dataset

**Topic:** Implement polynomial regression on the Auto MPG dataset to predict miles per gallon (MPG) based on engine displacement. Compare polynomial regression results with linear regression.

**Learning Outcomes:**

*   Understand the concept of polynomial regression and its advantages over linear regression.
*   Load and preprocess the Auto MPG dataset.
*   Implement polynomial regression models of different degrees.
*   Evaluate the performance of linear and polynomial regression models using appropriate metrics (e.g., Mean Squared Error, R-squared).
*   Compare the results of linear and polynomial regression and determine the optimal degree for the polynomial model.
*   Visualize the regression results.

---

### 1. Introduction to Polynomial Regression

*   **Definition:** Polynomial regression is a form of regression analysis in which the relationship between the independent variable (x) and the dependent variable (y) is modeled as an nth degree polynomial.

*   **Equation:** The general form of a polynomial regression equation is:

    `y = β₀ + β₁x + β₂x² + ... + βₙxⁿ + ε`

    Where:
    *   `y` is the dependent variable (target).
    *   `x` is the independent variable (feature).
    *   `β₀, β₁, β₂, ..., βₙ` are the coefficients or weights of the polynomial terms.
    *   `n` is the degree of the polynomial.
    *   `ε` is the error term.

*   **Key Concept:** Polynomial regression allows for modeling non-linear relationships between variables, which linear regression cannot effectively capture.

*   **Advantages over Linear Regression:**
    *   **Handles Non-Linearity:**  Can model curves and more complex relationships.
    *   **Flexibility:** By adjusting the degree of the polynomial, you can fit a wide variety of data patterns.

*   **Disadvantages:**
    *   **Overfitting:**  High-degree polynomials can overfit the training data, leading to poor generalization on unseen data.
    *   **Computational Complexity:** Higher-degree polynomials can be computationally more expensive to train.
    *   **Extrapolation Issues:** Polynomial regression can produce unreliable predictions outside the range of the training data.

### 2. Auto MPG Dataset

*   **Description:** The Auto MPG dataset contains information about various car models, including their miles per gallon (MPG), number of cylinders, displacement, horsepower, weight, acceleration, model year, and origin.

*   **Relevant Features:**
    *   `mpg` (Miles per Gallon): The target variable we want to predict.
    *   `displacement`: The independent variable we will use to predict MPG.

*   **Data Source:**  Often available in machine learning libraries like scikit-learn or downloadable from online repositories.

### 3. Implementation Steps

**A. Data Loading and Preprocessing:**

1.  **Import Libraries:**
    ```python
    import pandas as pd
    import numpy as np
    import matplotlib.pyplot as plt
    from sklearn.model_selection import train_test_split
    from sklearn.linear_model import LinearRegression
    from sklearn.preprocessing import PolynomialFeatures
    from sklearn.metrics import mean_squared_error, r2_score
    ```

2.  **Load the Dataset:**
    *   If using a library-provided dataset, load it accordingly.
    *   If using a CSV file, load it using `pandas.read_csv()`.
    ```python
    # Example: Loading from a CSV file (replace 'auto_mpg.csv' with the actual path)
    data = pd.read_csv('auto_mpg.csv')
    ```

3.  **Data Cleaning (Handle Missing Values):**
    ```python
    # Check for missing values
    print(data.isnull().sum())

    # Handle missing values (e.g., replace with the mean or median) - Example: replacing with the mean
    data = data.fillna(data.mean())  # Assuming numeric data
    ```

4.  **Feature Selection:**
    ```python
    # Select the features you need
    X = data[['displacement']]  # Independent variable (input)
    y = data['mpg']  # Dependent variable (target)
    ```

5.  **Data Splitting:**
    ```python
    # Split the data into training and testing sets
    X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42) #Example of using a random state for reproducibility.
    ```

**B. Linear Regression:**

1.  **Model Training:**
    ```python
    # Create a Linear Regression model
    linear_model = LinearRegression()

    # Train the model
    linear_model.fit(X_train, y_train)
    ```

2.  **Prediction:**
    ```python
    # Make predictions on the test set
    y_pred_linear = linear_model.predict(X_test)
    ```

3.  **Evaluation:**
    ```python
    # Calculate evaluation metrics
    mse_linear = mean_squared_error(y_test, y_pred_linear)
    r2_linear = r2_score(y_test, y_pred_linear)

    print(f"Linear Regression MSE: {mse_linear}")
    print(f"Linear Regression R-squared: {r2_linear}")
    ```

**C. Polynomial Regression:**

1.  **Polynomial Feature Transformation:**
    ```python
    # Choose the degree of the polynomial
    degree = 2  # Example: Quadratic (degree=2)

    # Create a PolynomialFeatures object
    poly = PolynomialFeatures(degree=degree)

    # Transform the training and testing data
    X_train_poly = poly.fit_transform(X_train)
    X_test_poly = poly.transform(X_test)
    ```

2.  **Model Training:**
    ```python
    # Create a Linear Regression model (for polynomial regression)
    poly_model = LinearRegression()

    # Train the model on the transformed data
    poly_model.fit(X_train_poly, y_train)
    ```

3.  **Prediction:**
    ```python
    # Make predictions on the test set
    y_pred_poly = poly_model.predict(X_test_poly)
    ```

4.  **Evaluation:**
    ```python
    # Calculate evaluation metrics
    mse_poly = mean_squared_error(y_test, y_pred_poly)
    r2_poly = r2_score(y_test, y_pred_poly)

    print(f"Polynomial Regression (Degree {degree}) MSE: {mse_poly}")
    print(f"Polynomial Regression (Degree {degree}) R-squared: {r2_poly}")
    ```

**D. Model Comparison and Visualization:**

1.  **Comparison Metrics:**
    *   **Mean Squared Error (MSE):** Lower MSE indicates better performance.
    *   **R-squared (R²):**  Higher R-squared indicates a better fit (closer to 1).  R-squared represents the proportion of the variance in the dependent variable that is predictable from the independent variable(s).

2.  **Visualization:**
    ```python
    # Visualize the results
    plt.figure(figsize=(10, 6))

    # Scatter plot of the original data
    plt.scatter(X_test, y_test, color='blue', label='Actual Data')

    # Plot the linear regression line
    plt.plot(X_test, y_pred_linear, color='red', label='Linear Regression')

    # Sort X_test for proper plotting of the polynomial curve
    X_test_sorted = np.sort(X_test.values.flatten())
    plt.plot(X_test_sorted, poly_model.predict(poly.transform(X_test_sorted.reshape(-1, 1))), color='green', label=f'Polynomial Regression (Degree {degree})')

    plt.xlabel('Displacement')
    plt.ylabel('MPG')
    plt.title('Linear vs. Polynomial Regression')
    plt.legend()
    plt.show()
    ```

### 4. Determining the Optimal Degree

*   **Iteration:**  Train polynomial regression models with different degrees (e.g., 2, 3, 4, 5).
*   **Evaluation:**  Evaluate the performance of each model using metrics like MSE and R-squared on the test set.
*   **Observation:** Look for the degree that provides the best trade-off between model complexity and performance.  A plot of MSE/R-squared vs degree can be helpful.
*   **Avoid Overfitting:**  Be cautious about choosing a very high degree, as it can lead to overfitting.
*   **Validation Curve:** Use techniques like cross-validation to estimate the generalization performance for different degrees.  Libraries like scikit-learn provide tools for creating validation curves.

```python
# Example: Iterating through different degrees
degrees = range(1, 6)
mse_scores = []
r2_scores = []

for degree in degrees:
    poly = PolynomialFeatures(degree=degree)
    X_train_poly = poly.fit_transform(X_train)
    X_test_poly = poly.transform(X_test)

    poly_model = LinearRegression()
    poly_model.fit(X_train_poly, y_train)

    y_pred_poly = poly_model.predict(X_test_poly)
    mse = mean_squared_error(y_test, y_pred_poly)
    r2 = r2_score(y_test, y_pred_poly)

    mse_scores.append(mse)
    r2_scores.append(r2)

    print(f"Degree {degree} - MSE: {mse}, R-squared: {r2}")

# Plotting the results
plt.figure(figsize=(12, 6))

plt.subplot(1, 2, 1)
plt.plot(degrees, mse_scores, marker='o')
plt.xlabel('Degree')
plt.ylabel('Mean Squared Error (MSE)')
plt.title('MSE vs. Polynomial Degree')

plt.subplot(1, 2, 2)
plt.plot(degrees, r2_scores, marker='o')
plt.xlabel('Degree')
plt.ylabel('R-squared (R²)')
plt.title('R-squared vs. Polynomial Degree')

plt.tight_layout()  # Adjust subplot parameters for a tight layout
plt.show()
```

### 5. Key Concepts and Definitions:

*   **Regression Analysis:** A statistical process for estimating the relationship between variables.
*   **Linear Regression:** A regression model that assumes a linear relationship between the independent and dependent variables.
*   **Polynomial Regression:** A regression model that assumes a polynomial relationship between the independent and dependent variables.
*   **Degree of a Polynomial:** The highest power of the independent variable in the polynomial equation.
*   **Overfitting:** A phenomenon where a model learns the training data too well, resulting in poor generalization on unseen data.
*   **Underfitting:** A phenomenon where a model is too simple to capture the underlying patterns in the data.
*   **Mean Squared Error (MSE):** A metric that measures the average squared difference between the predicted and actual values.
*   **R-squared (R²):** A metric that represents the proportion of variance in the dependent variable explained by the independent variable(s). Also called the coefficient of determination.
*   **Feature Engineering:** The process of creating new features from existing ones to improve model performance. In this case, generating polynomial features.
*   **Model Evaluation:** The process of assessing the performance of a model using appropriate metrics.

### 6. Practice Questions and Exercises

**Question 1:** Explain the difference between linear regression and polynomial regression.

**Answer:** Linear regression models a linear relationship between variables, while polynomial regression models a relationship using a polynomial equation, allowing for curves and non-linear patterns.

**Question 2:** What is the purpose of the `PolynomialFeatures` class in scikit-learn?

**Answer:** The `PolynomialFeatures` class generates polynomial and interaction features from the input features.  It transforms the original features into a higher-dimensional space where a linear model can represent a non-linear relationship.

**Question 3:** How can you determine the optimal degree for a polynomial regression model?

**Answer:** By iterating through different degrees, evaluating their performance using metrics like MSE and R-squared on a test set (or using cross-validation), and selecting the degree that provides the best balance between model complexity and performance without overfitting.

**Question 4:** What are the risks of using a very high-degree polynomial in regression?

**Answer:** High-degree polynomials can overfit the training data, leading to poor generalization performance on new, unseen data.  They can also be computationally expensive to train.

**Exercise:**

1.  Load the Auto MPG dataset.
2.  Implement linear regression to predict MPG based on displacement.
3.  Implement polynomial regression (degree 2) to predict MPG based on displacement.
4.  Calculate and compare the MSE and R-squared for both models.
5.  Visualize the results.
6.  Experiment with different polynomial degrees (3, 4, 5) and observe the impact on the evaluation metrics.
7.  Discuss your findings. Which model performs better, and why? What degree of polynomial is optimal for this dataset and feature combination?

### 7. Important Points to Remember

*   Polynomial regression can be a powerful tool for modeling non-linear relationships.
*   The degree of the polynomial is a critical parameter to tune.
*   Overfitting is a major concern with polynomial regression, especially with high degrees. Use validation techniques to avoid it.
*   Proper data preprocessing and feature selection are crucial for model performance.
*   Always evaluate your models using appropriate metrics.
*   Visualization is essential for understanding the model's behavior and identifying potential issues.
*   Remember to split your dataset into training and testing sets to evaluate the model's ability to generalize to new data. Using a random state for the split ensures reproducibility.

This comprehensive set of notes covers the implementation of polynomial regression on the Auto MPG dataset, including the required code examples, explanations, and considerations for optimizing your model. Remember to practice and experiment to solidify your understanding of the concepts. Good luck!
