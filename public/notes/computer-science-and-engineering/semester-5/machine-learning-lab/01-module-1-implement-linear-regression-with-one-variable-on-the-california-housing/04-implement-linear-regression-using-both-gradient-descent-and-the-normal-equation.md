---
title: "Implement linear regression using both gradient descent and the normal equation."
subject: "MACHINE LEARNING LAB"
module: "Module 1: Implement linear regression with one variable on the California Housing dataset to predict housing prices based on a single feature (e.g., the average number of rooms per dwelling)."
branch: "Computer Science and Engineering"
semester: 5
topicId: "684162770fc9aa1fdbc8b930"
status: "completed"
scrapedAt: "2026-05-20T16:46:56.318Z"
---
# MACHINE LEARNING LAB - Module 1: Linear Regression with One Variable - California Housing Dataset

## Topic: Implementing Linear Regression with Gradient Descent and the Normal Equation

**Description:** Implementing linear regression using both gradient descent and the normal equation to predict housing prices in the California Housing dataset based on a single feature (average number of rooms per dwelling).

**Learning Outcomes:**

*   Understand the fundamental concepts of linear regression.
*   Implement linear regression using the gradient descent algorithm.
*   Implement linear regression using the normal equation.
*   Compare and contrast gradient descent and the normal equation.
*   Apply linear regression to predict housing prices using a single feature from the California Housing dataset.
*   Evaluate the performance of the models using appropriate metrics.

---

## 1. Key Concepts and Definitions

*   **Linear Regression:** A supervised learning algorithm that models the relationship between a dependent variable (target) and one or more independent variables (features) by fitting a linear equation to the observed data. In this case, we are dealing with *simple linear regression* because we are using only one independent variable.

*   **Dependent Variable (Target):** The variable we are trying to predict (housing prices in this case).  Denoted as 'y'.

*   **Independent Variable (Feature):** The variable we use to predict the target (average number of rooms per dwelling in this case). Denoted as 'x'.

*   **Hypothesis Function (h(x)):** The linear equation that represents the relationship between the feature and the target. In simple linear regression, it's defined as:

    `h(x) = θ₀ + θ₁x`

    where:
    *   `θ₀` is the intercept (the value of y when x is 0).
    *   `θ₁` is the slope (the change in y for a unit change in x).
    *   `x` is the input feature.

*   **Parameters (θ₀, θ₁):** The values that define the hypothesis function.  Our goal is to find the optimal values for these parameters that minimize the difference between the predicted values and the actual values.  These are also often referred to as 'weights'.

*   **Cost Function (J(θ₀, θ₁)):** A function that measures the error between the predicted values (h(x)) and the actual values (y).  A common cost function is the *Mean Squared Error (MSE)*:

    `J(θ₀, θ₁) = (1 / 2m) * Σ(h(xᵢ) - yᵢ)²`

    where:
    *   `m` is the number of training examples.
    *   `Σ` denotes the sum over all training examples.
    *   `xᵢ` and `yᵢ` are the feature and target values for the i-th training example.
    The factor of `1/2` is often used for mathematical convenience in gradient descent calculations.

*   **Gradient Descent:** An iterative optimization algorithm used to find the minimum of a function. In linear regression, it's used to find the values of θ₀ and θ₁ that minimize the cost function.

*   **Learning Rate (α):** A parameter that controls the step size during gradient descent. A small learning rate may lead to slow convergence, while a large learning rate may cause the algorithm to overshoot the minimum and fail to converge.

*   **Normal Equation:** A closed-form solution for finding the optimal parameters (θ₀, θ₁) of a linear regression model.  It directly calculates the values without iteration.

*   **Feature Scaling:** A technique used to standardize the range of independent variables. It's often crucial for gradient descent to converge faster and more reliably.  Common methods include:
    *   **Min-Max Scaling:** Scales features to a range between 0 and 1.
    *   **Standardization (Z-score Normalization):** Scales features to have a mean of 0 and a standard deviation of 1.

---

## 2. Implementing Linear Regression with Gradient Descent

**Algorithm:**

1.  **Initialize Parameters:** Choose initial values for θ₀ and θ₁.  Often, these are initialized to 0 or to small random values.
2.  **Calculate Predictions:** Calculate the predicted values for all training examples using the current values of θ₀ and θ₁: `h(xᵢ) = θ₀ + θ₁xᵢ`
3.  **Calculate Cost:** Calculate the cost function J(θ₀, θ₁) using the predicted values and the actual values.
4.  **Calculate Gradients:** Calculate the partial derivatives of the cost function with respect to θ₀ and θ₁:

    *   `∂J/∂θ₀ = (1 / m) * Σ(h(xᵢ) - yᵢ)`
    *   `∂J/∂θ₁ = (1 / m) * Σ((h(xᵢ) - yᵢ) * xᵢ)`
5.  **Update Parameters:** Update the parameters using the gradients and the learning rate:

    *   `θ₀ = θ₀ - α * (∂J/∂θ₀)`
    *   `θ₁ = θ₁ - α * (∂J/∂θ₁)`
6.  **Repeat Steps 2-5:**  Repeat steps 2-5 until convergence. Convergence is typically determined by either:
    *   A maximum number of iterations has been reached.
    *   The change in the cost function is below a certain threshold.

**Python Example:**

```python
import numpy as np

def compute_cost(X, y, theta):
  """Computes the cost function for linear regression.

  Args:
    X: Feature matrix (m x 1).
    y: Target vector (m x 1).
    theta: Parameter vector (2 x 1) [theta0, theta1].

  Returns:
    J: The cost (MSE) value.
  """
  m = len(y)
  predictions = X.dot(theta)
  errors = predictions - y
  sq_errors = np.square(errors)
  J = (1 / (2 * m)) * np.sum(sq_errors)
  return J

def gradient_descent(X, y, theta, alpha, num_iters):
  """Performs gradient descent to learn linear regression parameters.

  Args:
    X: Feature matrix (m x 1).
    y: Target vector (m x 1).
    theta: Initial parameter vector (2 x 1) [theta0, theta1].
    alpha: Learning rate.
    num_iters: Number of iterations.

  Returns:
    theta: Updated parameter vector.
    J_history: History of the cost function values during iterations.
  """
  m = len(y)
  J_history = []

  for i in range(num_iters):
    predictions = X.dot(theta)
    errors = predictions - y

    # Update theta0 and theta1 simultaneously
    theta0 = theta[0] - alpha * (1 / m) * np.sum(errors)
    theta1 = theta[1] - alpha * (1 / m) * np.sum(errors * X[:,1])

    theta = np.array([theta0, theta1])

    J_history.append(compute_cost(X, y, theta))

  return theta, J_history

# Example usage (assuming you have loaded your data into X and y)
# X should include a column of ones for the intercept term
# Example:
# X = np.column_stack((np.ones(len(x)), x))
# y = housing_prices

# Initialize parameters
theta = np.array([0.0, 0.0])
alpha = 0.01  # Adjust learning rate
num_iters = 1000  # Adjust number of iterations

# Perform gradient descent
theta, J_history = gradient_descent(X, y, theta, alpha, num_iters)

print("Theta found by gradient descent:", theta)
```

**Important Points:**

*   **Learning Rate Tuning:** Choosing an appropriate learning rate is crucial. Experiment with different values to find one that leads to convergence without overshooting.  Common values are 0.001, 0.01, 0.1, 1.
*   **Feature Scaling:** If the feature values are not on a similar scale, gradient descent can take much longer to converge. Consider applying feature scaling before running the algorithm.
*   **Convergence Monitoring:** Plot the cost function (J_history) as a function of the iteration number. This helps you visualize whether gradient descent is converging. A decreasing cost function indicates that the algorithm is working correctly.  If the cost function *increases*, you've chosen a learning rate that is too high.

---

## 3. Implementing Linear Regression with the Normal Equation

**Equation:**

The normal equation provides a direct solution for θ:

`θ = (XᵀX)⁻¹Xᵀy`

where:

*   `X` is the feature matrix (m x n+1), including a column of ones for the intercept (n is the number of features *before* adding the column of ones).
*   `y` is the target vector (m x 1).
*   `Xᵀ` is the transpose of X.
*   `(XᵀX)⁻¹` is the inverse of the matrix `XᵀX`.

**Python Example:**

```python
import numpy as np

def normal_equation(X, y):
  """Computes the parameters for linear regression using the normal equation.

  Args:
    X: Feature matrix (m x n+1).
    y: Target vector (m x 1).

  Returns:
    theta: Parameter vector (n+1 x 1).
  """
  theta = np.linalg.inv(X.T.dot(X)).dot(X.T).dot(y)
  return theta

# Example usage (assuming you have loaded your data into X and y)
# X should include a column of ones for the intercept term
# Example:
# X = np.column_stack((np.ones(len(x)), x))
# y = housing_prices

# Calculate theta using the normal equation
theta = normal_equation(X, y)

print("Theta found by the normal equation:", theta)
```

**Important Points:**

*   **No Iteration:** The normal equation is a direct calculation, so it does not require iterative updates.
*   **No Learning Rate:**  The normal equation does not require a learning rate.
*   **Computational Cost:** Calculating the inverse of the matrix `(XᵀX)` can be computationally expensive for very large datasets.  The computational complexity is O(n³), where n is the number of features.  This is a major disadvantage for datasets with many features.
*   **No Feature Scaling (Usually):** The normal equation is not as sensitive to feature scaling as gradient descent.  However, feature scaling can still sometimes improve the numerical stability of the matrix inversion.

---

## 4. Comparing Gradient Descent and the Normal Equation

| Feature             | Gradient Descent                                 | Normal Equation                                |
| ------------------- | ------------------------------------------------ | ---------------------------------------------- |
| Iterative           | Yes                                             | No                                              |
| Learning Rate       | Required (needs tuning)                           | Not Required                                    |
| Feature Scaling     | Often Required                                   | Not always required, but can improve stability |
| Computational Cost  | Relatively inexpensive per iteration           | Can be expensive for large datasets             |
| Handles Large n     | Scales well to very large n                     | Performs poorly for very large n                |
| Solution            | Approximate (converges to a minimum)            | Exact                                           |

**Choosing the Right Method:**

*   **Gradient Descent:** Use when the number of features (n) is very large (e.g., n > 10,000).
*   **Normal Equation:** Use when the number of features (n) is relatively small (e.g., n < 10,000).

---

## 5. Applying Linear Regression to the California Housing Dataset

1.  **Load the Dataset:**  Use libraries like `sklearn` or `pandas` to load the California Housing dataset.
2.  **Select the Feature:** Choose the "average number of rooms per dwelling" as your single feature (independent variable, x).
3.  **Prepare the Data:**
    *   Extract the chosen feature and the target variable (housing prices).
    *   Reshape the data into numpy arrays if necessary.
    *   Add a column of ones to the feature matrix (X) to account for the intercept term (θ₀).  This is done using `np.column_stack((np.ones(len(x)), x))` where `x` is the array containing the feature values.
    *   Consider applying feature scaling to the feature (x).
4.  **Implement Linear Regression:**
    *   Implement either gradient descent or the normal equation (or both).
5.  **Train the Model:**
    *   For gradient descent, choose a learning rate and number of iterations, and run the algorithm.
    *   For the normal equation, simply calculate the parameters directly.
6.  **Make Predictions:**  Use the learned parameters (θ₀, θ₁) to make predictions on new data (or on the training data itself to assess performance). `predictions = X.dot(theta)`
7.  **Evaluate the Model:**  Use metrics such as Mean Squared Error (MSE) or R-squared to evaluate the performance of the model.

**Example (Using scikit-learn for data loading and a simplified evaluation):**

```python
from sklearn.datasets import fetch_california_housing
import numpy as np
from sklearn.metrics import mean_squared_error

# Load the California Housing dataset
housing = fetch_california_housing()

# Select the feature "average number of rooms per dwelling"
X = housing.data[:, 5].reshape(-1, 1)  # Reshape for scikit-learn
y = housing.target

# Add a column of ones for the intercept
X = np.column_stack((np.ones(len(X)), X))


# --- Using the Normal Equation ---
def normal_equation(X, y):
  theta = np.linalg.inv(X.T.dot(X)).dot(X.T).dot(y)
  return theta

theta_normal = normal_equation(X, y)
predictions_normal = X.dot(theta_normal)
mse_normal = mean_squared_error(y, predictions_normal)

print("Normal Equation Theta:", theta_normal)
print("Normal Equation MSE:", mse_normal)


# --- Using Gradient Descent ---
def compute_cost(X, y, theta):
    m = len(y)
    predictions = X.dot(theta)
    cost = np.sum((predictions - y)**2) / (2 * m)
    return cost

def gradient_descent(X, y, theta, learning_rate, n_iterations):
    m = len(y)
    cost_history = np.zeros(n_iterations)

    for i in range(n_iterations):
        predictions = X.dot(theta)
        error = predictions - y
        theta = theta - (learning_rate / m) * X.T.dot(error)
        cost_history[i] = compute_cost(X, y, theta)

    return theta, cost_history

# Initialize theta
theta_gd = np.zeros(X.shape[1])
learning_rate = 0.01
n_iterations = 1000

theta_gd, cost_history = gradient_descent(X, y, theta_gd, learning_rate, n_iterations)

predictions_gd = X.dot(theta_gd)
mse_gd = mean_squared_error(y, predictions_gd)


print("\nGradient Descent Theta:", theta_gd)
print("Gradient Descent MSE:", mse_gd)


# Feature scaling (example using standardization) - RECOMMENDED FOR GRADIENT DESCENT
from sklearn.preprocessing import StandardScaler

scaler = StandardScaler()
X_scaled = housing.data[:, 5].reshape(-1, 1)
X_scaled = scaler.fit_transform(X_scaled)  # Fit and transform
X_scaled = np.column_stack((np.ones(len(X_scaled)), X_scaled)) # Add the ones

# Initialize theta
theta_gd_scaled = np.zeros(X_scaled.shape[1])
learning_rate = 0.01
n_iterations = 1000

theta_gd_scaled, cost_history = gradient_descent(X_scaled, y, theta_gd_scaled, learning_rate, n_iterations)

predictions_gd_scaled = X_scaled.dot(theta_gd_scaled)
mse_gd_scaled = mean_squared_error(y, predictions_gd_scaled)

print("\nGradient Descent (Scaled) Theta:", theta_gd_scaled)
print("Gradient Descent (Scaled) MSE:", mse_gd_scaled)
```

---

## 6. Evaluation Metrics

*   **Mean Squared Error (MSE):**  Average of the squared differences between predicted and actual values. Lower MSE indicates better performance.

    `MSE = (1 / m) * Σ(h(xᵢ) - yᵢ)²`

*   **R-squared (Coefficient of Determination):** Represents the proportion of variance in the dependent variable that can be predicted from the independent variable(s).  It ranges from 0 to 1.  A higher R-squared indicates a better fit.  R-squared is often computed using libraries like scikit-learn.

---

## 7. Practice Questions

1.  **What is the hypothesis function in simple linear regression?**
    *   **Answer:** `h(x) = θ₀ + θ₁x`

2.  **What is the purpose of the cost function?**
    *   **Answer:** To measure the error between the predicted values and the actual values.  The goal is to minimize the cost function.

3.  **Explain the difference between gradient descent and the normal equation.**
    *   **Answer:** Gradient descent is an iterative optimization algorithm, while the normal equation provides a direct, closed-form solution. Gradient descent requires a learning rate and is often used for large datasets, while the normal equation can be computationally expensive for large datasets.

4.  **Why is feature scaling important for gradient descent?**
    *   **Answer:** Feature scaling helps gradient descent converge faster and more reliably by ensuring that the features are on a similar scale.

5.  **When would you choose gradient descent over the normal equation?**
    *   **Answer:** When the number of features is very large (e.g., > 10,000).

6.  **Write the formula for the normal equation.**
    *   **Answer:** `θ = (XᵀX)⁻¹Xᵀy`

7.  **What is the effect of a learning rate that is too high in gradient descent?**
    *   **Answer:** The algorithm may overshoot the minimum and fail to converge. The cost function may increase with each iteration.

8.  **What are θ₀ and θ₁ in the context of linear regression?**
    *   **Answer:** θ₀ is the intercept (the value of y when x is 0), and θ₁ is the slope (the change in y for a unit change in x). They are the parameters (weights) of the linear regression model.

9. **Explain the relationship between Cost function and Gradient Descent.**
    * **Answer:** The cost function measures the error of a model, and gradient descent is an iterative optimization algorithm used to minimize this cost function by adjusting the model's parameters (weights). In simpler terms, gradient descent helps find the best set of parameters for a model by "walking down" the slope of the cost function until it reaches the lowest point (minimum cost).

10. **What does R-squared value indicate?**
    * **Answer:** R-squared (Coefficient of Determination) represents the proportion of variance in the dependent variable that can be predicted from the independent variable(s). It ranges from 0 to 1. A higher R-squared value (closer to 1) indicates a better fit, meaning that the model explains a larger portion of the variability in the target variable. A value close to 0 suggests that the model does not explain much of the variance.

---

## 8. Important Points to Remember

*   Linear regression aims to find the best-fitting line to predict a continuous target variable.
*   Gradient descent is an iterative optimization algorithm that adjusts the model's parameters to minimize the cost function.
*   The normal equation provides a direct, closed-form solution for the optimal parameters.
*   Feature scaling is often important for gradient descent to converge efficiently.
*   The choice between gradient descent and the normal equation depends on the size of the dataset and the number of features.
*   Evaluate the performance of your model using appropriate metrics such as MSE and R-squared.
*   A good understanding of linear algebra is beneficial for understanding the normal equation.
*   Always consider the assumptions of linear regression (linearity, independence, homoscedasticity, normality of residuals) before applying it.

This comprehensive guide should provide a solid foundation for understanding and implementing linear regression with gradient descent and the normal equation on the California Housing dataset. Remember to practice the examples and explore the concepts further to deepen your understanding. Good luck!
