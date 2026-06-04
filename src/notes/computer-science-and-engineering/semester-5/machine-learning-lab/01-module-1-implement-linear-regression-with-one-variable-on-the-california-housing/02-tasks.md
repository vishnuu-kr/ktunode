---
title: "Tasks:"
subject: "MACHINE LEARNING LAB"
module: "Module 1: Implement linear regression with one variable on the California Housing dataset to predict housing prices based on a single feature (e.g., the average number of rooms per dwelling)."
branch: "Computer Science and Engineering"
semester: 5
topicId: "684162770fc9aa1fdbc8b92e"
status: "completed"
scrapedAt: "2026-05-20T16:46:54.881Z"
---
# MACHINE LEARNING LAB - Module 1: Linear Regression with One Variable on California Housing Dataset

## Topic: Predicting Housing Prices with Single Feature Linear Regression

**Description:** Implement linear regression with one variable on the California Housing dataset to predict housing prices based on a single feature (e.g., the average number of rooms per dwelling).

**Learning Outcomes:**

*   Understand the principles of linear regression with one variable.
*   Learn how to load and preprocess data using Python libraries like Scikit-learn and Pandas.
*   Implement the cost function for linear regression.
*   Implement gradient descent to find the optimal parameters for the linear regression model.
*   Evaluate the performance of the linear regression model using metrics like Mean Squared Error (MSE).
*   Visualize the model and its performance.

---

## 1. Key Concepts and Definitions

*   **Linear Regression:** A linear approach to modeling the relationship between a scalar response (dependent variable) and one or more explanatory variables (independent variables). In this case, we focus on *simple linear regression*, which involves only one independent variable.
*   **Hypothesis Function (Model):**  Represents the relationship between the input feature (x) and the predicted output (y).  For simple linear regression, it's defined as: `h(x) = θ₀ + θ₁x`, where:
    *   `h(x)` is the predicted value (housing price).
    *   `x` is the independent variable (e.g., average number of rooms).
    *   `θ₀` is the intercept (the value of y when x is 0).
    *   `θ₁` is the slope (the change in y for a one-unit change in x).  `θ₀` and `θ₁` are also known as *parameters* or *coefficients*.
*   **Cost Function:** Measures the difference between the predicted values and the actual values.  A common cost function for linear regression is the *Mean Squared Error (MSE)*: `J(θ₀, θ₁) = (1 / 2m) * Σ(h(xᵢ) - yᵢ)²`, where:
    *   `m` is the number of training examples.
    *   `xᵢ` is the input feature for the i-th example.
    *   `yᵢ` is the actual output value for the i-th example.
    *   The goal is to minimize `J(θ₀, θ₁)` to find the best values for `θ₀` and `θ₁`.
*   **Gradient Descent:** An iterative optimization algorithm used to find the minimum of a function (in this case, the cost function).  It works by repeatedly updating the parameters in the direction of the steepest descent:
    *   `θ₀ := θ₀ - α * (∂J(θ₀, θ₁) / ∂θ₀)`
    *   `θ₁ := θ₁ - α * (∂J(θ₀, θ₁) / ∂θ₁)`
    *   Where `α` is the *learning rate* (a hyperparameter controlling the step size).
    *   The partial derivatives are:
        *   `∂J(θ₀, θ₁) / ∂θ₀ = (1/m) * Σ(h(xᵢ) - yᵢ)`
        *   `∂J(θ₀, θ₁) / ∂θ₁ = (1/m) * Σ((h(xᵢ) - yᵢ) * xᵢ)`
*   **Learning Rate (α):**  A crucial hyperparameter in gradient descent.
    *   *Too small:*  Gradient descent will be very slow to converge.
    *   *Too large:* Gradient descent might overshoot the minimum and fail to converge (or even diverge).
*   **Features (Independent Variables):** Input variables used to predict the target variable. In this case, "average number of rooms per dwelling".
*   **Target Variable (Dependent Variable):** The variable we are trying to predict. In this case, "housing prices".
*   **Mean Squared Error (MSE):** A common metric used to evaluate the performance of regression models.  It measures the average squared difference between the predicted and actual values.  Lower MSE indicates better performance.

---

## 2. Loading and Preprocessing the California Housing Dataset

*   **Libraries:**
    *   `scikit-learn (sklearn)`: For loading the dataset, splitting data into training and testing sets, and implementing linear regression.
    *   `pandas`:  For data manipulation and analysis.
    *   `numpy`: For numerical computations.
    *   `matplotlib`: For data visualization.
*   **Loading the Dataset:**
    ```python
    from sklearn.datasets import fetch_california_housing
    import pandas as pd
    import numpy as np
    import matplotlib.pyplot as plt

    # Load the California housing dataset
    housing = fetch_california_housing()

    # Convert to pandas DataFrame for easier handling
    df = pd.DataFrame(housing.data, columns=housing.feature_names)
    df['MedHouseVal'] = housing.target  # Add the target variable

    print(df.head())
    ```

*   **Selecting the Feature:**  Choose the feature you want to use for simple linear regression (e.g., 'AveRooms').
    ```python
    feature = 'AveRooms'
    X = df[[feature]].values  # Feature (independent variable)
    y = df['MedHouseVal'].values  # Target variable (dependent variable)
    ```

*   **Splitting the Data:** Divide the data into training and testing sets to evaluate the model's performance on unseen data.
    ```python
    from sklearn.model_selection import train_test_split

    X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42) # 80% train, 20% test
    ```

*   **Feature Scaling (Important!):**  Scaling features can significantly improve the performance of gradient descent, especially when features have different ranges.  Common methods include:
    *   *Standardization:*  Scales features to have a mean of 0 and a standard deviation of 1.
    *   *Min-Max Scaling:* Scales features to a range between 0 and 1.

    ```python
    from sklearn.preprocessing import StandardScaler

    scaler = StandardScaler()
    X_train = scaler.fit_transform(X_train)  # Fit and transform the training data
    X_test = scaler.transform(X_test)       # Transform the testing data

    # Scale the target variable, too (optional but often helpful for stability)
    y_scaler = StandardScaler()
    y_train = y_scaler.fit_transform(y_train.reshape(-1, 1)).flatten()
    y_test = y_scaler.transform(y_test.reshape(-1, 1)).flatten()
    ```
    **Important:**  Fit the scaler on the *training data only* and then use the same scaler to transform the testing data. This prevents data leakage. We also reshape the target variables to ensure proper scaling, then flatten them back into 1D arrays.

---

## 3. Implementing the Cost Function

```python
def cost_function(X, y, theta0, theta1):
    """
    Calculates the Mean Squared Error (MSE) cost function.

    Args:
        X: Input features (numpy array).
        y: Target values (numpy array).
        theta0: Intercept (float).
        theta1: Slope (float).

    Returns:
        The MSE cost (float).
    """
    m = len(y)
    predictions = theta0 + theta1 * X
    squared_errors = (predictions - y) ** 2
    cost = (1 / (2 * m)) * np.sum(squared_errors)
    return cost
```

*   **Explanation:**  The function calculates the predicted values based on the current `theta0` and `theta1`, computes the squared errors between the predictions and the actual values, and returns the average of these squared errors (divided by 2m for convenience).

---

## 4. Implementing Gradient Descent

```python
def gradient_descent(X, y, theta0, theta1, learning_rate, iterations):
    """
    Performs gradient descent to find the optimal parameters for linear regression.

    Args:
        X: Input features (numpy array).
        y: Target values (numpy array).
        theta0: Initial intercept (float).
        theta1: Initial slope (float).
        learning_rate: Learning rate (float).
        iterations: Number of iterations (int).

    Returns:
        A tuple containing:
            - theta0: Optimized intercept (float).
            - theta1: Optimized slope (float).
            - cost_history: A list of cost values at each iteration.
    """
    m = len(y)
    cost_history = []

    for i in range(iterations):
        # Calculate predictions
        predictions = theta0 + theta1 * X

        # Calculate gradients
        derivative_theta0 = (1 / m) * np.sum(predictions - y)
        derivative_theta1 = (1 / m) * np.sum((predictions - y) * X)

        # Update parameters
        theta0 = theta0 - learning_rate * derivative_theta0
        theta1 = theta1 - learning_rate * derivative_theta1

        # Calculate and store cost
        cost = cost_function(X, y, theta0, theta1)
        cost_history.append(cost)

        # Print cost every 100 iterations (optional)
        if (i + 1) % 100 == 0:
            print(f"Iteration {i+1}: Cost = {cost}")

    return theta0, theta1, cost_history
```

*   **Explanation:**
    *   The function iteratively updates `theta0` and `theta1` based on the gradient descent update rules.
    *   It calculates the gradients of the cost function with respect to `theta0` and `theta1`.
    *   It updates the parameters using the calculated gradients and the learning rate.
    *   The `cost_history` list stores the cost function value at each iteration, allowing us to track the convergence of the algorithm.
    *   Printing the cost every few iterations can help monitor the progress of gradient descent.

---

## 5. Training and Evaluating the Model

```python
# Initialize parameters
theta0 = 0
theta1 = 0
learning_rate = 0.01
iterations = 1000

# Train the model
theta0, theta1, cost_history = gradient_descent(X_train, y_train, theta0, theta1, learning_rate, iterations)

print(f"Optimized theta0: {theta0}")
print(f"Optimized theta1: {theta1}")
```

*   **Evaluation:** Use the Mean Squared Error (MSE) to evaluate the model's performance on the test set.

```python
from sklearn.metrics import mean_squared_error

# Make predictions on the test set
y_pred = theta0 + theta1 * X_test

# Calculate MSE
mse = mean_squared_error(y_test, y_pred)
print(f"Mean Squared Error on Test Set: {mse}")
```

---

## 6. Visualization

*   **Visualizing the Cost Function:** Plot the cost history to see how the cost function decreased over iterations.  This helps determine if the learning rate is appropriate and if the algorithm converged.

```python
plt.plot(range(1, iterations + 1), cost_history)
plt.xlabel('Iteration')
plt.ylabel('Cost')
plt.title('Cost Function vs. Iteration')
plt.show()
```

*   **Visualizing the Regression Line:** Plot the training data and the regression line to visualize the model's fit.

```python
plt.scatter(X_train, y_train, label='Training Data')
plt.plot(X_train, theta0 + theta1 * X_train, color='red', label='Linear Regression')
plt.xlabel(feature) # Use the feature name
plt.ylabel('MedHouseVal (Scaled)')
plt.title('Linear Regression Fit on Training Data')
plt.legend()
plt.show()

plt.scatter(X_test, y_test, label='Testing Data')
plt.plot(X_test, theta0 + theta1 * X_test, color='red', label='Linear Regression')
plt.xlabel(feature) # Use the feature name
plt.ylabel('MedHouseVal (Scaled)')
plt.title('Linear Regression Fit on Testing Data')
plt.legend()
plt.show()
```

---

## 7. Practice Questions/Exercises

1.  **Implement Linear Regression with Another Feature:**  Modify the code to use a different feature from the California Housing dataset (e.g., 'MedInc' - median income). Compare the MSE and visualizations for different features.  Which feature gives better predictions? Why?

    *   **Answer:**  The 'MedInc' feature often provides better predictions because income is strongly correlated with housing prices.

2.  **Tune the Learning Rate:** Experiment with different learning rates (e.g., 0.001, 0.01, 0.1) and observe the effect on the convergence of gradient descent.  How does the cost function change? What happens if the learning rate is too high?

    *   **Answer:** A smaller learning rate (e.g., 0.001) will result in slower convergence.  A larger learning rate (e.g., 0.1) might lead to oscillations or divergence if it's too high. The 'sweet spot' needs to be found via experimentation.

3.  **Change the Number of Iterations:** How does changing the number of iterations affect the final values of `theta0` and `theta1`?  Is there a point where increasing the number of iterations no longer improves the model's performance?

    *   **Answer:**  Increasing the number of iterations allows gradient descent to converge closer to the minimum of the cost function.  However, after a certain point, the improvement in performance becomes negligible, and increasing iterations further is wasteful.

4.  **Remove Feature Scaling:** Comment out the feature scaling code.  How does this affect the performance of gradient descent?  Why?

    *   **Answer:** Removing feature scaling can significantly slow down or even prevent gradient descent from converging. This is because features with different scales can cause the cost function to be elongated, making it difficult for gradient descent to find the optimal parameters.

5.  **Vectorized Implementation:** Refactor the `cost_function` and `gradient_descent` functions to use vectorized operations with NumPy, which are generally faster than explicit loops.

    *   **Example (Vectorized Cost Function):**
        ```python
        def cost_function_vectorized(X, y, theta):
            """
            Calculates the Mean Squared Error (MSE) cost function using vectorized operations.

            Args:
                X: Input features (numpy array) with a column of ones for the intercept term.
                y: Target values (numpy array).
                theta: A numpy array containing the intercept and slope [theta0, theta1].

            Returns:
                The MSE cost (float).
            """
            m = len(y)
            predictions = X @ theta  # Matrix multiplication
            squared_errors = (predictions - y) ** 2
            cost = (1 / (2 * m)) * np.sum(squared_errors)
            return cost
        ```
    *  **Important:** To use the vectorized implementation, `X` needs to be a matrix where the first column is all ones (for the intercept term) and the second column is the feature values.  `theta` is a vector [theta0, theta1].

---

## 8. Important Points to Remember

*   **Feature Scaling is Crucial:**  Always scale your features before running gradient descent.  Standardization or Min-Max scaling are common choices.
*   **Choose the Right Learning Rate:** Experiment with different learning rates to find a value that allows gradient descent to converge efficiently. Monitor the cost function to ensure convergence.
*   **Split Your Data:** Divide your data into training and testing sets to evaluate the model's performance on unseen data and avoid overfitting.
*   **Understand the Cost Function:** The cost function measures the model's error. The goal of linear regression is to minimize this error.
*   **Gradient Descent is Iterative:**  Gradient descent is an iterative process that gradually improves the model's parameters. The number of iterations required depends on the data and the learning rate.
*   **Visualize Your Data and Model:**  Visualizations can help you understand the data, the model's fit, and the convergence of gradient descent.
*   **Linear Regression Assumptions:**  Linear regression makes certain assumptions about the data, such as linearity, independence of errors, and homoscedasticity.  Violations of these assumptions can affect the model's performance. Consider transformations or more advanced modeling techniques if these assumptions are not met.

By working through these notes and practice exercises, you should gain a solid understanding of implementing linear regression with one variable using the California Housing dataset. Good luck!
