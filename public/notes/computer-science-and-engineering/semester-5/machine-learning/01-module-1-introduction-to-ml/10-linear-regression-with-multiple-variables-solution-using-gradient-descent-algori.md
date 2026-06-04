---
title: "Linear regression with multiple variables : solution using gradient descent algorithm and matrix method."
subject: "MACHINE LEARNING"
module: "Module 1: Introduction to ML :"
branch: "Computer Science and Engineering"
semester: 5
topicId: "684162760fc9aa1fdbc8b5b1"
status: "completed"
scrapedAt: "2026-05-20T16:46:28.501Z"
---
## MACHINE LEARNING - Module 1: Introduction to ML - Linear Regression with Multiple Variables

**Topic:** Linear Regression with Multiple Variables: Solution using Gradient Descent Algorithm and Matrix Method

**Learning Outcomes:**

*   Understand the concept of linear regression with multiple variables.
*   Formulate the hypothesis function and cost function for multiple linear regression.
*   Apply the Gradient Descent algorithm to find the optimal parameters (coefficients) for the linear regression model.
*   Understand the concept of the learning rate and its impact on convergence.
*   Implement feature scaling techniques (e.g., Standardization, Min-Max scaling) to improve the performance of Gradient Descent.
*   Solve the multiple linear regression problem using the Matrix method (Normal Equation).
*   Compare and contrast the Gradient Descent algorithm and the Matrix method, considering their advantages and disadvantages.
*   Identify scenarios where each method is more appropriate.

---

### 1. Introduction to Linear Regression with Multiple Variables

*   **Definition:** Linear regression with multiple variables (also known as multivariate linear regression) is a statistical technique used to model the relationship between a dependent variable (target) and two or more independent variables (features).  It extends simple linear regression, which only uses one independent variable.

*   **Example:** Predicting house prices based on size (sq ft), number of bedrooms, number of bathrooms, and location.

*   **Key Concepts:**
    *   **Dependent Variable (y):** The variable we want to predict (e.g., house price).
    *   **Independent Variables (x₁, x₂, ..., xₙ):** The variables used to make the prediction (e.g., size, number of bedrooms).
    *   **Coefficients (θ₀, θ₁, θ₂, ..., θₙ):** The parameters that define the relationship between the independent variables and the dependent variable.  θ₀ is the intercept (bias), and θ₁, θ₂, ..., θₙ are the slopes for each independent variable.

### 2. Hypothesis Function and Cost Function

*   **Hypothesis Function:** The linear equation that represents the relationship between the independent variables and the dependent variable.
    *   **Equation:**  hθ(x) = θ₀ + θ₁x₁ + θ₂x₂ + ... + θₙxₙ
    *   In matrix notation: hθ(x) = θᵀx  (where θ and x are column vectors)

*   **Cost Function:** A function that measures the difference between the predicted values (from the hypothesis function) and the actual values.  The goal is to minimize this cost function.
    *   **Commonly Used Cost Function: Mean Squared Error (MSE)**
        *   **Equation:**  J(θ) = (1/2m) * Σ(hθ(x(i)) - y(i))²  (summation from i=1 to m)
            *   where:
                *   m = number of training examples
                *   x(i) = the i-th input vector (features for the i-th training example)
                *   y(i) = the actual output (target) for the i-th training example
                *   hθ(x(i)) = the predicted output for the i-th training example, using parameters θ

*   **Goal:** Find the values of θ₀, θ₁, θ₂, ..., θₙ that minimize the cost function J(θ).

### 3. Gradient Descent Algorithm

*   **Purpose:**  An iterative optimization algorithm used to find the minimum of a function (in our case, the cost function).

*   **Algorithm:**
    1.  **Initialization:** Start with initial values for the parameters θ₀, θ₁, θ₂, ..., θₙ (usually initialized to 0).
    2.  **Iteration:** Repeat until convergence:
        *   Update each parameter θⱼ simultaneously:
            *   θⱼ := θⱼ - α * (∂J(θ) / ∂θⱼ)
            *   where:
                *   α = Learning Rate (controls the step size)
                *   ∂J(θ) / ∂θⱼ = Partial derivative of the cost function with respect to θⱼ

*   **Partial Derivative of MSE Cost Function (for linear regression):**
    *   ∂J(θ) / ∂θ₀ = (1/m) * Σ(hθ(x(i)) - y(i))
    *   ∂J(θ) / ∂θⱼ = (1/m) * Σ(hθ(x(i)) - y(i)) * xⱼ(i)  (for j = 1 to n)

*   **Gradient Descent Update Rule (for linear regression):**
    *   θ₀ := θ₀ - α * (1/m) * Σ(hθ(x(i)) - y(i))
    *   θⱼ := θⱼ - α * (1/m) * Σ(hθ(x(i)) - y(i)) * xⱼ(i)  (for j = 1 to n)

*   **Important:** Updates to all θⱼ must be done *simultaneously* in each iteration.

*   **Learning Rate (α):**
    *   **Too Small:** Gradient Descent converges very slowly.
    *   **Too Large:** Gradient Descent may overshoot the minimum and fail to converge (or even diverge).
    *   **Choosing a good learning rate:** Experiment with different values (e.g., 0.01, 0.001, 0.0001).  Plot the cost function J(θ) over iterations.  If J(θ) consistently decreases, the learning rate is likely appropriate. If J(θ) increases or oscillates, reduce the learning rate.

*   **Convergence:** Gradient Descent is considered to have converged when the cost function J(θ) stops decreasing significantly or reaches a predefined threshold.

### 4. Feature Scaling

*   **Problem:** When features have vastly different ranges of values, Gradient Descent can converge very slowly.  Features with larger ranges can dominate the cost function, leading to oscillations and slow convergence.

*   **Solution:** Feature scaling brings features to a similar scale.

*   **Common Techniques:**
    *   **Standardization (Z-score Normalization):**
        *   x' = (x - μ) / σ
        *   where:
            *   x' = scaled value
            *   x = original value
            *   μ = mean of the feature
            *   σ = standard deviation of the feature
        *   Results in features with approximately zero mean and unit variance.

    *   **Min-Max Scaling (Normalization):**
        *   x' = (x - xₘᵢₙ) / (xₘₐₓ - xₘᵢₙ)
        *   where:
            *   x' = scaled value (between 0 and 1)
            *   x = original value
            *   xₘᵢₙ = minimum value of the feature
            *   xₘₐₓ = maximum value of the feature
        *   Scales features to a range between 0 and 1.

*   **When to Use Which:**
    *   **Standardization:** Useful when data has outliers or when the distribution is approximately Gaussian.  It doesn't bound the values to a specific range.
    *   **Min-Max Scaling:** Useful when you need values within a specific range (e.g., 0 to 1) and when you don't have significant outliers.

### 5. Matrix Method (Normal Equation)

*   **Purpose:**  An analytical method to directly find the optimal parameters θ without iteration.

*   **Equation:** θ = (XᵀX)⁻¹Xᵀy
    *   where:
        *   θ = column vector of parameters
        *   X = design matrix (each row represents a training example, and each column represents a feature).  Add a column of 1's for the intercept term (θ₀).
        *   y = column vector of target values

*   **Steps:**
    1.  Construct the design matrix X.
    2.  Calculate XᵀX.
    3.  Calculate the inverse of (XᵀX).  This step is computationally expensive for large datasets.  (XᵀX)⁻¹
    4.  Calculate Xᵀy.
    5.  Calculate θ = (XᵀX)⁻¹Xᵀy.

*   **Advantages:**
    *   No need to choose a learning rate.
    *   No need for iterative steps.
    *   Directly computes the optimal parameters.

*   **Disadvantages:**
    *   Computationally expensive, especially for large datasets (calculating the inverse of XᵀX is O(n³), where n is the number of features).
    *   May not work if XᵀX is non-invertible (singular). This can happen if there is multicollinearity (high correlation between features) or if the number of features is greater than the number of training examples.

### 6. Comparison of Gradient Descent and Matrix Method

| Feature           | Gradient Descent                        | Matrix Method (Normal Equation)       |
| ----------------- | ---------------------------------------- | ------------------------------------- |
| Iterative         | Yes                                      | No                                   |
| Learning Rate    | Required                                 | Not Required                         |
| Computational Cost | Less expensive for large datasets      | More expensive for large datasets    |
| Feature Scaling  | Beneficial, speeds up convergence        | Not strictly required, but recommended |
| Multicollinearity| Less sensitive                           | Sensitive; may require regularization |
| Dataset Size      | Scales well with large datasets           | Slower with large datasets           |
| Invertibility     | Not applicable                           | Requires XᵀX to be invertible        |

### 7. When to Use Which Method

*   **Gradient Descent:**
    *   Large datasets (thousands or millions of examples).
    *   Many features (hundreds or thousands).
    *   When you need to update the model frequently with new data.

*   **Matrix Method:**
    *   Small to medium-sized datasets (hundreds or a few thousand examples).
    *   Relatively few features (tens or hundreds).
    *   When you need a precise solution and computational cost is not a major concern.

### 8. Important Points to Remember

*   **Feature scaling is crucial for Gradient Descent to converge efficiently.**
*   **Choosing an appropriate learning rate is essential for Gradient Descent.**
*   **The Matrix method provides a direct solution but can be computationally expensive for large datasets.**
*   **Multicollinearity can be a problem for the Matrix method.**
*   **Understand the trade-offs between Gradient Descent and the Matrix method when choosing an algorithm.**

### 9. Practice Questions/Exercises

**Question 1:**

You are building a linear regression model to predict the price of a car based on its mileage (in thousands of miles) and its age (in years).  You have the following data:

| Car  | Mileage (thousands) | Age (years) | Price ($) |
| ---- | -------------------- | ----------- | --------- |
| 1    | 60                  | 5           | 15000     |
| 2    | 80                  | 8           | 10000     |
| 3    | 40                  | 3           | 20000     |
| 4    | 100                 | 10          | 8000      |

a)  Write down the hypothesis function for this problem.

b)  Write down the cost function (MSE) for this problem.

c)  (Conceptual) Describe the steps involved in using Gradient Descent to find the optimal parameters for this model.

d)  (Conceptual) Describe the steps involved in using the Matrix Method to find the optimal parameters for this model.

**Answer 1:**

a)  **Hypothesis Function:**  hθ(x) = θ₀ + θ₁ * (Mileage) + θ₂ * (Age)

b)  **Cost Function (MSE):**
    J(θ) = (1/(2*4)) * [(θ₀ + θ₁*60 + θ₂*5 - 15000)² + (θ₀ + θ₁*80 + θ₂*8 - 10000)² + (θ₀ + θ₁*40 + θ₂*3 - 20000)² + (θ₀ + θ₁*100 + θ₂*10 - 8000)²]

c)  **Gradient Descent Steps:**
    1.  Initialize θ₀, θ₁, and θ₂ to some initial values (e.g., 0).
    2.  Choose a learning rate α.
    3.  Repeat until convergence:
        *   Calculate the partial derivatives of the cost function with respect to θ₀, θ₁, and θ₂.
        *   Update θ₀, θ₁, and θ₂ simultaneously:
            *   θ₀ := θ₀ - α * (∂J(θ) / ∂θ₀)
            *   θ₁ := θ₁ - α * (∂J(θ) / ∂θ₁)
            *   θ₂ := θ₂ - α * (∂J(θ) / ∂θ₂)
    4. Monitor the cost function J(θ) to check for convergence. Adjust learning rate if necessary.

d)  **Matrix Method Steps:**
    1.  Construct the design matrix X:
        ```
        X = [[1, 60, 5],
             [1, 80, 8],
             [1, 40, 3],
             [1, 100, 10]]
        ```
    2.  Construct the target vector y:
        ```
        y = [[15000],
             [10000],
             [20000],
             [8000]]
        ```
    3.  Calculate XᵀX.
    4.  Calculate the inverse of (XᵀX), i.e., (XᵀX)⁻¹.
    5.  Calculate Xᵀy.
    6.  Calculate θ = (XᵀX)⁻¹Xᵀy.

**Question 2:**

Why is feature scaling important for Gradient Descent, and what are two common methods for feature scaling?

**Answer 2:**

Feature scaling is important for Gradient Descent because when features have significantly different ranges, Gradient Descent can converge slowly and may oscillate. Features with larger ranges can dominate the cost function, making it difficult for Gradient Descent to find the optimal parameters.

Two common methods for feature scaling are:

*   **Standardization (Z-score Normalization):** Scales features to have zero mean and unit variance.
*   **Min-Max Scaling (Normalization):** Scales features to a range between 0 and 1.

**Question 3:**

What are the advantages and disadvantages of using the Matrix Method (Normal Equation) compared to Gradient Descent?

**Answer 3:**

**Matrix Method:**

*   **Advantages:**
    *   No need to choose a learning rate.
    *   No iterative steps required; direct calculation of optimal parameters.
*   **Disadvantages:**
    *   Computationally expensive for large datasets due to matrix inversion.
    *   May not work if XᵀX is non-invertible (singular), often caused by multicollinearity.

**Gradient Descent:**

*   **Advantages:**
    *   Scales well with large datasets.
    *   Less sensitive to multicollinearity than the Normal Equation.
*   **Disadvantages:**
    *   Requires choosing an appropriate learning rate.
    *   Requires multiple iterations to converge.
    *   Feature scaling is generally necessary for efficient convergence.

---
This detailed explanation provides a comprehensive understanding of linear regression with multiple variables, covering both the Gradient Descent algorithm and the Matrix method, including their practical considerations and trade-offs. The exercises help reinforce the concepts.
