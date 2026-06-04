---
title: "Regression - Linear regression with one variable"
subject: "MACHINE LEARNING"
module: "Module 1: Introduction to ML :"
branch: "Computer Science and Engineering"
semester: 5
topicId: "684162760fc9aa1fdbc8b5b0"
status: "completed"
scrapedAt: "2026-05-20T16:46:27.797Z"
---
# MACHINE LEARNING - Module 1: Introduction to ML - Regression: Linear Regression with One Variable

## Learning Outcomes:

*   Understand the concept of regression and its applications.
*   Define linear regression with one variable and its components.
*   Formulate the hypothesis function for linear regression.
*   Understand the concept of cost function and its role in linear regression.
*   Learn and apply the gradient descent algorithm to minimize the cost function.
*   Evaluate the performance of a linear regression model.

## 1. Introduction to Regression and its Applications:

*   **Definition:** Regression is a supervised learning technique used to predict a continuous target variable (also called dependent variable) based on one or more independent variables (also called features or predictors).

*   **Supervised Learning:** In supervised learning, we train a model using labeled data, meaning we have both the input features and the corresponding correct output (target variable).

*   **Contrast with Classification:** Regression predicts continuous values (e.g., house price, temperature), while classification predicts discrete categories (e.g., spam/not spam, cat/dog).

*   **Applications of Regression:**
    *   **Predicting house prices:** Based on features like size, location, and number of bedrooms.
    *   **Forecasting sales:** Based on historical sales data and marketing spend.
    *   **Estimating stock prices:** Based on past performance and economic indicators.
    *   **Predicting student performance:** Based on study hours and previous grades.
    *   **Analyzing relationships between variables:**  For example, the relationship between advertising expenditure and sales revenue.

## 2. Linear Regression with One Variable: Definition and Components

*   **Definition:** Linear regression with one variable (also called simple linear regression) is a regression model that predicts a target variable based on a single input variable using a linear relationship.  It's the simplest form of regression.

*   **Components:**
    *   **Independent Variable (x):** The input variable used to predict the target variable. Also called the predictor or feature.  Example:  Size of a house (in square feet).
    *   **Dependent Variable (y):** The target variable that we are trying to predict. Also called the response variable. Example: Price of the house.
    *   **Hypothesis Function (h(x)):** The linear function that maps the input variable to the predicted output. It is defined by two parameters: the intercept and the slope.  This will be elaborated in the next section.
    *   **Parameters (θ₀, θ₁):** The coefficients of the linear function that determine the relationship between the input and output.
        *   θ₀ (Theta zero): The intercept of the line (the value of y when x = 0).
        *   θ₁ (Theta one): The slope of the line (the change in y for a unit change in x).
    *   **Cost Function (J(θ₀, θ₁)):** A measure of how well the hypothesis function fits the training data. It quantifies the error between the predicted values and the actual values.

## 3. Hypothesis Function for Linear Regression:

*   **Formulation:** The hypothesis function for linear regression with one variable is a linear equation:

    ```
    h(x) = θ₀ + θ₁x
    ```

    Where:
    *   h(x) is the predicted value of y for a given x.
    *   θ₀ is the y-intercept (the value of h(x) when x is 0).
    *   θ₁ is the slope of the line (the amount h(x) changes for each unit increase in x).
    *   x is the independent variable.

*   **Goal:** The goal of linear regression is to find the optimal values for θ₀ and θ₁ that minimize the difference between the predicted values (h(x)) and the actual values (y) in the training data.

*   **Example:** Suppose we want to predict the price of a house (y) based on its size in square feet (x).  Our hypothesis function might be:

    ```
    h(x) = 50000 + 150x
    ```

    This means that a house with 0 square feet is predicted to cost $50,000 (the intercept), and for every additional square foot, the price increases by $150 (the slope). A house with 1000 square feet would be predicted to cost $50,000 + (150 * 1000) = $200,000.

## 4. Cost Function: Measuring the Error

*   **Purpose:** The cost function quantifies the difference between the predicted values (h(x)) and the actual values (y) for all data points in the training set.  The lower the cost, the better the model's fit to the data.

*   **Common Cost Function: Mean Squared Error (MSE):** MSE is the most commonly used cost function for linear regression.  It calculates the average squared difference between the predicted and actual values.

*   **Formula for MSE:**

    ```
    J(θ₀, θ₁) = (1 / 2m) * Σ (h(xᵢ) - yᵢ)²  for i = 1 to m
    ```

    Where:
    *   J(θ₀, θ₁) is the cost function.
    *   m is the number of training examples.
    *   xᵢ is the value of the independent variable for the i-th training example.
    *   yᵢ is the actual value of the dependent variable for the i-th training example.
    *   h(xᵢ) is the predicted value for the i-th training example, calculated using the hypothesis function (h(xᵢ) = θ₀ + θ₁xᵢ).
    *   Σ represents the summation over all training examples.

*   **Why Squared Error?**
    *   Squaring the difference ensures that all errors (positive and negative) contribute positively to the cost.
    *   It penalizes larger errors more heavily than smaller errors, which is often desirable.
    *   The MSE is differentiable, which is important for using optimization algorithms like gradient descent.

*   **The factor of 1/2m:**  The `1/2m` is used for mathematical convenience during the gradient descent optimization process.  It simplifies the derivative calculation.

*   **Goal:** The goal is to find the values of θ₀ and θ₁ that minimize J(θ₀, θ₁).

## 5. Gradient Descent: Minimizing the Cost Function

*   **Definition:** Gradient descent is an iterative optimization algorithm used to find the minimum of a function. In the context of linear regression, it's used to find the values of θ₀ and θ₁ that minimize the cost function J(θ₀, θ₁).

*   **Analogy:** Imagine you are standing on a hill and want to reach the bottom. You can't see the entire landscape, so you take small steps in the direction of the steepest descent until you reach a local minimum.

*   **Algorithm:**
    1.  **Initialization:** Start with initial values for θ₀ and θ₁ (e.g., θ₀ = 0, θ₁ = 0).
    2.  **Iteration:** Repeat the following steps until convergence:
        *   **Calculate the partial derivatives of the cost function with respect to θ₀ and θ₁:**  These derivatives indicate the direction of the steepest ascent of the cost function.  We want to move in the opposite direction (steepest descent).

            ```
            ∂J(θ₀, θ₁) / ∂θ₀ = (1/m) * Σ (h(xᵢ) - yᵢ)  for i = 1 to m
            ∂J(θ₀, θ₁) / ∂θ₁ = (1/m) * Σ ((h(xᵢ) - yᵢ) * xᵢ)  for i = 1 to m
            ```
        *   **Update the parameters θ₀ and θ₁:**

            ```
            θ₀ := θ₀ - α * (∂J(θ₀, θ₁) / ∂θ₀)
            θ₁ := θ₁ - α * (∂J(θ₀, θ₁) / ∂θ₁)
            ```

            Where:
            *   α (alpha) is the learning rate. It controls the size of the steps taken during each iteration.

    3.  **Convergence:** The algorithm is said to converge when the cost function stops decreasing significantly or after a predefined number of iterations.

*   **Learning Rate (α):**
    *   **Too small:** Gradient descent will be slow to converge.
    *   **Too large:** Gradient descent may overshoot the minimum and diverge.  The cost function might increase with each iteration.
    *   Choosing the right learning rate is crucial for the performance of gradient descent.  Experimentation is often necessary to find an appropriate value.

*   **Simultaneous Update:** It's important to update θ₀ and θ₁ simultaneously in each iteration.  This means calculating the updated values using the *old* values of θ₀ and θ₁ before assigning them. If you update θ₀ first and then use the updated θ₀ to update θ₁, you will not get the correct gradient descent path.

*   **Local Minima:** Gradient descent can get stuck in local minima. However, for linear regression with the MSE cost function, the cost function is a convex function, meaning it has only one global minimum.

## 6. Evaluating the Performance of a Linear Regression Model

*   **Metrics:** Several metrics can be used to evaluate the performance of a linear regression model.  Some common metrics include:

    *   **Mean Squared Error (MSE):** As discussed before, MSE calculates the average squared difference between predicted and actual values. A lower MSE indicates a better fit.

    *   **Root Mean Squared Error (RMSE):** The square root of the MSE.  It has the same units as the dependent variable, making it easier to interpret.

    *   **R-squared (Coefficient of Determination):** Measures the proportion of variance in the dependent variable that is explained by the independent variable(s).  It ranges from 0 to 1.  A higher R-squared indicates a better fit.

        ```
        R² = 1 - (SSres / SStot)
        ```

        Where:
        *   SSres is the sum of squares of residuals (the squared differences between the actual values and the predicted values).
        *   SStot is the total sum of squares (the squared differences between the actual values and the mean of the actual values).

    *   **Adjusted R-squared:**  A modification of R-squared that adjusts for the number of predictors in the model. It penalizes the inclusion of irrelevant predictors.  Useful when comparing models with different numbers of features.

*   **Interpretation:** The choice of which metric to use depends on the specific application and the goals of the analysis.  Generally, lower MSE and RMSE values, and higher R-squared values, indicate better model performance.

*   **Considerations:**
    *   **Overfitting:** A model that fits the training data too well may not generalize well to new data.  Techniques like cross-validation can help to detect and prevent overfitting.
    *   **Underfitting:** A model that doesn't fit the training data well may not capture the underlying relationship between the variables.  This can be addressed by adding more features or using a more complex model.
    *   **Assumptions of Linear Regression:** Linear regression makes certain assumptions about the data, such as linearity, independence of errors, homoscedasticity (constant variance of errors), and normality of errors.  Violations of these assumptions can affect the validity of the model.

## 7. Important Points to Remember

*   Regression predicts continuous values, while classification predicts discrete categories.
*   Linear regression with one variable models the relationship between a single independent variable and a dependent variable using a straight line.
*   The hypothesis function h(x) represents the predicted value.  It's defined by two parameters: θ₀ (intercept) and θ₁ (slope).
*   The cost function (MSE) quantifies the error between predicted and actual values.  The goal is to minimize this error.
*   Gradient descent is an iterative algorithm used to find the values of θ₀ and θ₁ that minimize the cost function.
*   The learning rate (α) controls the step size in gradient descent.  Choosing an appropriate learning rate is crucial.
*   Evaluate model performance using metrics like MSE, RMSE, and R-squared.
*   Be aware of the assumptions of linear regression and potential issues like overfitting and underfitting.

## 8. Practice Questions/Exercises with Answers

**Question 1:**

Given the following training data for house size (x) in square feet and price (y) in dollars:

| x (square feet) | y (dollars) |
|-----------------|-------------|
| 1000            | 200000      |
| 1500            | 300000      |
| 2000            | 400000      |

Suppose you have the hypothesis function h(x) = 100000 + 150x.  Calculate the Mean Squared Error (MSE) for this hypothesis on this data.

**Answer:**

1.  **Calculate predictions for each data point:**
    *   h(1000) = 100000 + 150 * 1000 = 250000
    *   h(1500) = 100000 + 150 * 1500 = 325000
    *   h(2000) = 100000 + 150 * 2000 = 400000

2.  **Calculate the squared errors:**
    *   (250000 - 200000)² = 2500000000
    *   (325000 - 300000)² = 625000000
    *   (400000 - 400000)² = 0

3.  **Calculate the sum of squared errors:**
    *   2500000000 + 625000000 + 0 = 3125000000

4.  **Calculate the MSE (divide by 2m):**
    *   MSE = 3125000000 / (2 * 3) = 3125000000 / 6 = 520833333.33

**Question 2:**

What is the role of the learning rate (α) in gradient descent?  What happens if the learning rate is too large or too small?

**Answer:**

The learning rate (α) controls the step size taken during each iteration of gradient descent.  It determines how much the parameters (θ₀ and θ₁) are adjusted based on the calculated gradient.

*   **Learning rate too small:** Gradient descent will converge very slowly, requiring many iterations to reach the minimum.
*   **Learning rate too large:** Gradient descent may overshoot the minimum and diverge. The cost function may increase with each iteration, and the algorithm may never converge.

**Question 3:**

Explain the difference between R-squared and Adjusted R-squared. When would you prefer to use Adjusted R-squared?

**Answer:**

*   **R-squared (Coefficient of Determination):** Measures the proportion of variance in the dependent variable explained by the independent variable(s).  It increases as you add more independent variables to the model, even if those variables are not truly related to the dependent variable.

*   **Adjusted R-squared:** A modification of R-squared that penalizes the inclusion of irrelevant predictors. It accounts for the number of predictors in the model, so it will decrease if you add a predictor that does not significantly improve the model's fit.

You would prefer to use Adjusted R-squared when comparing models with different numbers of predictors. It provides a more accurate measure of the model's goodness of fit by considering the complexity of the model.  Adjusted R-squared helps prevent overfitting by discouraging the addition of unnecessary variables.

**Question 4:**

Why is the cost function for linear regression a convex function? What are the implications of this?

**Answer:**

The cost function (Mean Squared Error) for linear regression is a convex function because it has a bowl-like shape.  This means it has a single global minimum and no local minima.

**Implications:**

*   Gradient descent is guaranteed to find the global minimum of the cost function. It won't get stuck in a local minimum, ensuring that the algorithm finds the optimal values for θ₀ and θ₁.
*   This makes linear regression with MSE a relatively simple and robust optimization problem.
