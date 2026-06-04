---
title: "Implement polynomial regression with varying degrees."
subject: "MACHINE LEARNING LAB"
module: "Module 20: Investigate the bias"
branch: "Computer Science and Engineering"
semester: 5
topicId: "684162770fc9aa1fdbc8b9b5"
status: "completed"
scrapedAt: "2026-05-20T16:48:19.088Z"
---
## Machine Learning Lab - Module 20: Investigating Bias - Polynomial Regression

**Topic:** Implement polynomial regression with varying degrees.

**Learning Outcomes:**

*   Understand the concept of polynomial regression.
*   Implement polynomial regression using Python and libraries like scikit-learn.
*   Experiment with different polynomial degrees and observe their effect on the model's fit.
*   Identify overfitting and underfitting based on the model's performance with varying degrees.
*   Understand the relationship between model complexity, bias, and variance.
*   Apply techniques to evaluate the model's performance, such as train-test split and error metrics.

---

### 1. Key Concepts and Definitions

*   **Regression:** A statistical method used to determine the relationship between a dependent variable (target) and one or more independent variables (features).
*   **Linear Regression:** A regression model where the relationship between the dependent and independent variables is assumed to be linear.  Equation:  `y = mx + c` (for one independent variable), where `y` is the target, `x` is the feature, `m` is the slope, and `c` is the intercept.
*   **Polynomial Regression:**  A regression model that models the relationship between the dependent and independent variables as an *n*-th degree polynomial.  This allows for non-linear relationships. Equation: `y = b0 + b1*x + b2*x^2 + ... + bn*x^n`, where `n` is the degree of the polynomial.
*   **Degree (of a Polynomial):** The highest power of the independent variable in the polynomial equation.  A degree of 1 represents linear regression. A degree of 2 represents a quadratic relationship, and so on.
*   **Overfitting:**  A phenomenon where a model learns the training data too well, capturing noise and specific details instead of the underlying general pattern. This leads to high accuracy on the training data but poor performance on unseen data (test data). Overfitted models are complex, high-degree polynomial models.
*   **Underfitting:** A phenomenon where a model is too simple to capture the underlying patterns in the data.  This leads to poor performance on both the training and test data. Underfitted models are low-degree polynomial models (e.g., linear regression) when the true relationship is non-linear.
*   **Bias:** The error introduced by approximating a real-life problem, which is often complex, by a simplified model. A high-bias model makes strong assumptions about the data, which can lead to underfitting.
*   **Variance:** The amount by which the model's prediction changes if different training data is used.  A high-variance model is very sensitive to the training data and is likely to overfit.
*   **Train-Test Split:**  A technique used to evaluate the performance of a model by dividing the available data into two sets: a training set (used to train the model) and a test set (used to evaluate the model's performance on unseen data).  Common splits are 80/20 or 70/30.
*   **Error Metrics:** Quantitative measures used to evaluate the performance of a regression model. Common metrics include:
    *   **Mean Squared Error (MSE):**  The average of the squared differences between the predicted and actual values.  `MSE = (1/n) * Σ(y_predicted - y_actual)^2`
    *   **Root Mean Squared Error (RMSE):** The square root of the MSE.  `RMSE = sqrt(MSE)`
    *   **R-squared (Coefficient of Determination):** Represents the proportion of variance in the dependent variable that is predictable from the independent variable(s).  A value closer to 1 indicates a better fit.

### 2. Implementing Polynomial Regression with Varying Degrees in Python

We will use the following Python libraries:

*   **NumPy:** For numerical operations and array manipulation.
*   **scikit-learn (sklearn):**  For machine learning algorithms, including polynomial feature generation and linear regression.
*   **Matplotlib:** For plotting and visualization.

**Code Example:**

```python
import numpy as np
import matplotlib.pyplot as plt
from sklearn.linear_model import LinearRegression
from sklearn.preprocessing import PolynomialFeatures
from sklearn.model_selection import train_test_split
from sklearn.metrics import mean_squared_error, r2_score

# 1. Generate some sample data (non-linear relationship)
np.random.seed(0)  # for reproducibility
X = np.linspace(-5, 5, 100).reshape(-1, 1) # Feature
y = 0.5 * X**3 - X**2 + 2*X + 3 + np.random.normal(0, 10, 100).reshape(-1, 1) # Target (with noise)


# 2. Split the data into training and testing sets
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.3, random_state=42)

# 3. Loop through different polynomial degrees
degrees = [1, 3, 10] # Explore different degrees
plt.figure(figsize=(15, 5)) # Create a figure for plotting

for i, degree in enumerate(degrees):
    plt.subplot(1, 3, i+1)  # Create subplots for each degree

    # 4. Create Polynomial Features
    poly = PolynomialFeatures(degree=degree)
    X_train_poly = poly.fit_transform(X_train) # Transform the training data
    X_test_poly = poly.transform(X_test)      # Transform the testing data

    # 5. Train a Linear Regression model on the transformed features
    model = LinearRegression()
    model.fit(X_train_poly, y_train)

    # 6. Make predictions on the test set
    y_pred = model.predict(X_test_poly)

    # 7. Evaluate the model
    mse = mean_squared_error(y_test, y_pred)
    r2 = r2_score(y_test, y_pred)
    print(f"Degree {degree}: MSE = {mse:.2f}, R2 = {r2:.2f}")

    # 8. Plot the results
    plt.scatter(X, y, label="Original Data", s=10)
    plt.plot(X, model.predict(poly.transform(X)), color='red', label=f"Degree {degree} Fit")
    plt.title(f"Polynomial Regression (Degree {degree})")
    plt.xlabel("X")
    plt.ylabel("y")
    plt.legend()

plt.tight_layout()  # Adjust subplot parameters for a tight layout.
plt.show()
```

**Explanation:**

1.  **Data Generation:**  We create synthetic data with a cubic relationship plus some random noise to simulate real-world data.
2.  **Train-Test Split:**  The data is divided into training and testing sets to evaluate the model's generalization ability.
3.  **Looping through Degrees:**  We iterate through different polynomial degrees (1, 3, and 10).
4.  **Polynomial Feature Generation:**  `PolynomialFeatures` transforms the original features into polynomial features.  For example, if `degree=2` and `X = [x1, x2]`, it creates features `[1, x1, x2, x1^2, x1*x2, x2^2]`. Crucially, the `fit_transform` method is only used on the training data to learn the parameters.  The `transform` method then uses these parameters to transform the test data. This is important to prevent data leakage from the test set to the training set.
5.  **Linear Regression Model:** We train a standard `LinearRegression` model on the *transformed* polynomial features. Even though the relationship is polynomial, the model being trained is still linear with respect to the *new* features.
6.  **Prediction:** The trained model predicts values on the test set using the transformed test features.
7.  **Evaluation:**  We calculate the MSE and R-squared score to evaluate the model's performance.
8.  **Visualization:**  We plot the original data points and the predicted curve for each degree.  This visually demonstrates the effect of different polynomial degrees.

**Observations:**

*   **Degree 1 (Linear):**  Underfits the data.  The line doesn't capture the curvature of the relationship.  High bias.
*   **Degree 3:**  Provides a good fit to the data.  It captures the cubic relationship without overfitting.  The best trade-off between bias and variance.
*   **Degree 10:**  Overfits the data.  The curve follows the noise in the training data too closely, resulting in poor generalization to the test data. High variance.

### 3.  Identifying Overfitting and Underfitting

*   **Underfitting:**
    *   High bias
    *   Poor performance on both training and test data.
    *   The model is too simple to capture the underlying patterns.
*   **Overfitting:**
    *   High variance
    *   Excellent performance on the training data but poor performance on the test data.
    *   The model is too complex and learns the noise in the training data.

By plotting the learning curves (training and validation error as a function of the training set size) you can also identify if your model is overfitting or underfitting.

### 4. Relationship between Model Complexity, Bias, and Variance

*   **Simple Models (Low Complexity):** High bias, low variance.  These models make strong assumptions about the data, leading to underfitting.  They don't change much with different training sets.
*   **Complex Models (High Complexity):** Low bias, high variance.  These models make fewer assumptions and can fit the training data very well, but they are sensitive to the training data and may overfit.
*   **Ideal Model:**  A model that achieves a balance between bias and variance, generalizing well to unseen data.  Finding this balance is a key goal in machine learning.

The **Bias-Variance Tradeoff** is the concept that increasing one usually decreases the other. The goal is to find a model that minimizes both bias and variance.

### 5. Practice Questions/Exercises

**Question 1:** What is the difference between linear regression and polynomial regression?

**Answer:** Linear regression models a linear relationship between the independent and dependent variables. Polynomial regression models a non-linear relationship by using polynomial features of the independent variables.

**Question 2:** How does the degree of the polynomial affect the model's fit?

**Answer:** A low degree polynomial may underfit the data, while a high degree polynomial may overfit the data.  An appropriate degree allows the model to capture the underlying patterns without overfitting.

**Question 3:**  How can you identify if a model is overfitting?

**Answer:**  An overfitting model performs very well on the training data but poorly on the test data.  The model has learned the noise in the training data.

**Question 4:** What is the Bias-Variance Tradeoff? Explain how model complexity relates to it.

**Answer:** The Bias-Variance Tradeoff refers to the inverse relationship between bias and variance in a model. Simple models have high bias and low variance (underfitting), while complex models have low bias and high variance (overfitting). The goal is to find a model complexity that minimizes both.

**Exercise 1:** Modify the Python code above to use different training and test set sizes (e.g., 90/10 split vs. 50/50 split).  Observe how this affects the model's performance and the visualization.

**Exercise 2:** Try different error metrics, such as Mean Absolute Error (MAE), and compare the results with MSE and R-squared.

**Exercise 3:** Instead of generating data using a polynomial function, use real-world datasets and apply polynomial regression. (You can use datasets available on Kaggle or scikit-learn).

### 6. Important Points to Remember

*   Polynomial regression is a powerful technique for modeling non-linear relationships.
*   Choosing the right polynomial degree is crucial to avoid overfitting or underfitting.
*   Train-test split is essential for evaluating the model's performance on unseen data.
*   Error metrics provide quantitative measures of the model's accuracy.
*   Understanding the bias-variance tradeoff is fundamental to building effective machine learning models.
*   Always visualize your data and model's fit to gain insights into its behavior.
*   Avoid data leakage by only fitting the PolynomialFeatures on the training data and transforming the test data.
