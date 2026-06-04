---
title: "Regression  - Linear regression with one variable"
subject: "MACHINE LEARNING FOR ENGINEERS"
module: "Module 1: Introduction to ML"
branch: "Computer Science and Engineering"
semester: 6
topicId: "684162780fc9aa1fdbc8bf49"
status: "completed"
scrapedAt: "2026-05-20T16:54:58.998Z"
---
# MACHINE LEARNING FOR ENGINEERS

## Module 1: Introduction to ML

### Topic: Regression - Linear Regression with One Variable

---

### 1. Learning Outcomes

Upon successful completion of this topic, you will be able to:

*   **Understand the concept of regression and its purpose in machine learning.**
*   **Define and explain linear regression with one variable.**
*   **Identify the mathematical representation of a simple linear regression model.**
*   **Describe the components of a simple linear regression model: independent variable, dependent variable, intercept, and slope.**
*   **Explain the goal of fitting a simple linear regression model.**
*   **Understand the concept of cost functions, specifically Mean Squared Error (MSE), used in linear regression.**
*   **Explain the intuition behind the Gradient Descent algorithm for minimizing the cost function.**
*   **Apply the formulas for calculating the intercept and slope using the Ordinary Least Squares (OLS) method.**
*   **Interpret the coefficients (intercept and slope) of a fitted linear regression model.**
*   **Evaluate the performance of a simple linear regression model using appropriate metrics (e.g., MSE, R-squared).**
*   **Recognize the assumptions of linear regression.**
*   **Identify common applications and limitations of simple linear regression.**

---

### 2. Key Concepts and Definitions

#### 2.1 What is Regression?

*   **Definition:** Regression is a supervised machine learning technique used to predict a **continuous target variable** (also known as the dependent variable) based on one or more **independent variables** (also known as predictor variables).
*   **Purpose:** To model the relationship between variables and make predictions about future or unknown values.
*   **Contrast with Classification:** While classification predicts discrete categories, regression predicts numerical values.

#### 2.2 Linear Regression with One Variable

*   **Definition:** A fundamental regression algorithm that models the relationship between a single independent variable ($X$) and a single dependent variable ($Y$) by fitting a **straight line** through the data points.
*   **Goal:** To find the line that best represents the underlying linear relationship between $X$ and $Y$.

#### 2.3 Mathematical Representation

The equation for a simple linear regression model is:

$$ Y = \beta_0 + \beta_1 X + \epsilon $$

Where:

*   $Y$: The **dependent variable** (the variable we want to predict).
*   $X$: The **independent variable** (the variable used for prediction).
*   $\beta_0$: The **intercept** (or bias term). It's the value of $Y$ when $X$ is 0. It represents the starting point of the line.
*   $\beta_1$: The **slope** (or coefficient). It represents the change in $Y$ for a one-unit change in $X$. It indicates the direction and magnitude of the relationship.
*   $\epsilon$: The **error term** (or residual). It represents the difference between the actual value of $Y$ and the predicted value of $Y$. It accounts for factors not captured by $X$ and the inherent randomness in the data.

**In practice, when fitting a model, we often use:**

$$ \hat{Y} = b_0 + b_1 X $$

Where:

*   $\hat{Y}$ (Y-hat): The **predicted value** of $Y$.
*   $b_0$: The **estimated intercept**.
*   $b_1$: The **estimated slope**.

#### 2.4 Components of the Model

*   **Independent Variable ($X$):** The input feature used to make predictions.
*   **Dependent Variable ($Y$):** The output target variable to be predicted.
*   **Intercept ($\beta_0$ or $b_0$):** The point where the regression line crosses the y-axis (when $X=0$).
*   **Slope ($\beta_1$ or $b_1$):** The rate of change of the dependent variable with respect to the independent variable.

#### 2.5 Goal of Fitting a Simple Linear Regression Model

The primary goal is to find the values of $b_0$ (intercept) and $b_1$ (slope) that **minimize the difference** between the actual values of $Y$ and the predicted values $\hat{Y}$ across all data points. This difference is quantified by a **cost function**.

---

### 3. Minimizing the Cost Function

#### 3.1 Cost Function: Mean Squared Error (MSE)

*   **Definition:** A common cost function used to evaluate the performance of regression models. It measures the average of the squared differences between the actual and predicted values.
*   **Formula:**

    $$ J(b_0, b_1) = \frac{1}{2m} \sum_{i=1}^{m} ( \hat{Y}^{(i)} - Y^{(i)} )^2 $$

    Where:
    *   $m$: The number of training examples.
    *   $\hat{Y}^{(i)}$: The predicted value for the $i$-th data point.
    *   $Y^{(i)}$: The actual value for the $i$-th data point.
    *   $( \hat{Y}^{(i)} - Y^{(i)} )^2$: The squared error for the $i$-th data point.
    *   The $\frac{1}{2}$ is often included for mathematical convenience when taking the derivative in gradient descent.

*   **Intuition:** MSE penalizes larger errors more heavily due to the squaring. The goal is to find $b_0$ and $b_1$ that make $J(b_0, b_1)$ as small as possible.

#### 3.2 Gradient Descent

*   **Concept:** An iterative optimization algorithm used to find the minimum of a function. In linear regression, it's used to find the optimal values for $b_0$ and $b_1$ that minimize the MSE cost function.
*   **Intuition:** Imagine standing on a hilly landscape (the cost function surface) and wanting to reach the lowest point (the minimum cost). Gradient descent takes small steps downhill in the direction of the steepest descent.
*   **How it works:**
    1.  Initialize $b_0$ and $b_1$ to some starting values (often
