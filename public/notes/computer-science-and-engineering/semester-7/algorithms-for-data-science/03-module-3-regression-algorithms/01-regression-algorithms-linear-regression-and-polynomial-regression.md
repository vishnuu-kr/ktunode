---
title: "Regression Algorithms - Linear regression and polynomial regression"
subject: "ALGORITHMS FOR DATA SCIENCE"
module: "Module 3: Regression Algorithms "
branch: "Computer Science and Engineering"
semester: 7
topicId: "684162790fc9aa1fdbc8c79a"
status: "completed"
scrapedAt: "2026-05-20T17:00:31.644Z"
---
# ALGORITHMS FOR DATA SCIENCE

## Module 3: Regression Algorithms

### Topic: Linear Regression and Polynomial Regression

---

### 1. Introduction to Regression

Regression is a supervised machine learning technique used to predict a continuous output variable (dependent variable) based on one or more input variables (independent variables). It aims to find the relationship between these variables by fitting a model to the data.

**Key Concepts:**

*   **Dependent Variable (y):** The variable we are trying to predict (e.g., house price, temperature, sales).
*   **Independent Variable(s) (x):** The variables used to make the prediction (e.g., house size, location, advertising spend).
*   **Model:** A mathematical equation that describes the relationship between the independent and dependent variables.
*   **Fitting:** The process of finding the optimal parameters for the model that best represent the data.
*   **Prediction:** Using the fitted model to estimate the dependent variable for new, unseen data.

---

### 2. Linear Regression

Linear Regression is a fundamental regression algorithm that models the relationship between a dependent variable and one or more independent variables by fitting a linear equation to the observed data.

#### 2.1. Simple Linear Regression

Simple Linear Regression involves a single independent variable. The model is represented by the equation of a straight line:

**Equation:**

$y = \beta_0 + \beta_1x + \epsilon$

Where:

*   $y$: Dependent variable.
*   $x$: Independent variable.
*   $\beta_0$: **Intercept** (the value of $y$ when $x$ is 0).
*   $\beta_1$: **Slope** (the change in $y$ for a one-unit change in $x$).
*   $\epsilon$: **Error Term** (represents the variability in $y$ that cannot be explained by $x$, including random errors and unobserved variables).

**Objective:** To find the values of $\beta_0$ and $\beta_1$ that minimize the difference between the observed $y$ values and the predicted $\hat{y}$ values.

**Method: Ordinary Least Squares (OLS)**

OLS is the most common method used to estimate the coefficients ($\beta_0$, $\beta_1$). It minimizes the **Sum of Squared Errors (SSE)**:

$SSE = \sum_{i=1}^{n} (y_i - \hat{y}_i)^2 = \sum_{i=1}^{n} (y_i - (\beta_0 + \beta_1x_i))^2$

To find the optimal $\beta_0$ and $\beta_1$, we take the partial derivatives of SSE with respect to $\beta_0$ and $\beta_1$, set them to zero, and solve the resulting system of equations.

**Formulas for Coefficients (OLS):**

$\beta_1 = \frac{\sum_{i=1}^{n} (x_i - \bar{x})(y_i - \bar{y})}{\sum_{i=1}^{n} (x_i - \bar{x})^2}$

$\beta_0 = \bar{y} - \beta_1\bar{x}$

Where:

*   $\bar{x}$: Mean of the independent variable.
*   $\bar{y}$: Mean of the dependent variable.

**Example:** Predicting house price based on house size.

*   Independent Variable (x): House Size (sq ft)
*   Dependent Variable (y): House Price ($)

If the fitted model is: $Price = 50000 + 200 \times Size$

*   If a house is 1500 sq ft, the predicted price is: $50000 + 200 \times 1500 = 350000$.
*   The intercept (50000) can be interpreted as a base price, potentially for a house with 0 sq ft (though this might not be practically meaningful).
*   The slope (200) indicates that for every additional square foot of living space, the price is predicted to increase by $200.

#### 2.2. Multiple Linear Regression

Multiple Linear Regression involves two or more independent variables.

**Equation:**

$y = \beta_0 + \beta_1x_1 + \beta_2x_2 + ... + \beta_kx_k + \epsilon$

Where:

*   $y$: Dependent variable.
*   $x_1, x_2, ..., x_k$: Independent variables.
*   $\beta_0$: Intercept.
*   $\beta_1, \beta_2, ..., \beta_k$: Coefficients for each independent variable, representing the change in $y$ for a one-unit change in that specific $x$, holding all other $x$'s constant.
*   $\epsilon$: Error term.

**In Matrix Form:**

$Y = X\beta + \epsilon$

Where:

*   $Y$: Vector of dependent variable observations.
*   $X$: Design matrix where each column represents an independent variable (including a column of ones for the intercept).
*   $\beta$: Vector of coefficients ($\beta_0, \beta_1, ..., \beta_k$).
*   $\epsilon$: Vector of error terms.

**OLS Solution in Matrix Form:**

$\hat{\beta} = (X^T X)^{-1} X^T Y$

This formula provides a compact way to calculate all coefficients simultaneously.

**Example:** Predicting house price based on house size, number of bedrooms, and location (represented by a categorical variable converted to numerical).

*   Independent Variables ($x_1, x_2, x_3$): House Size, Number of Bedrooms, Location (e.g., 0 for suburban, 1 for downtown).
*   Dependent Variable (y): House Price.

Fitted model: $Price = 30000 + 150 \times Size + 10000 \times Bedrooms + 50000 \times Location$

*   If a house is 1800 sq ft, has 3 bedrooms, and is in downtown (Location=1):
    $Price = 30000 + 150 \times 1800 + 10000 \times 3 + 50000 \times 1$
    $Price = 30000 + 270000 + 30000 + 50000 = 380000$

**Assumptions of Linear Regression:**

It's important to note that linear regression relies on several assumptions for its results to be valid and reliable:

1.  **Linearity:** The relationship between independent and dependent variables is linear.
2.  **Independence of Errors:** The error terms are independent of each other.
3.  **Homoscedasticity:** The variance of the error terms is constant across all levels of the independent variables.
4.  **Normality of Errors:** The error terms are normally distributed.
5.  **No Multicollinearity:** Independent variables are not highly correlated with each other (in multiple linear regression).

---

### 3. Polynomial Regression

Polynomial Regression is a technique that models the relationship between variables as an $n^{th}$ degree polynomial. It allows for capturing non-linear relationships in the data, which cannot be adequately represented by a straight line.

**Equation:**

$y = \beta_0 + \beta_1x + \beta_2x^2 + \beta_3x^3 + ... + \beta_nx^n + \epsilon$

Where:

*   $y$: Dependent variable.
*   $x$: Independent variable.
*   $\beta_0, \beta_1, ..., \beta_n$: Coefficients for each term.
*   $n$: Degree of the polynomial.

**How it works:**

Polynomial regression is a special case of multiple linear regression. By creating new features that are powers of the original independent variable ($x^2, x^3$, etc.), we can use the linear regression framework to fit a non-linear curve.

**Example:** Predicting the yield of a chemical reaction based on temperature. The relationship might be parabolic (curved).

*   Independent Variable (x): Temperature ($^\circ C$)
*   Dependent Variable (y): Yield (%)

A linear model might not capture the peak yield at an optimal temperature. A quadratic polynomial regression ($n=2$) could be used:

$Yield = \beta_0 + \beta_1 \times Temperature + \beta_2 \times Temperature^2 + \epsilon$

If the fitted model is: $Yield = 10 + 2 \times Temp - 0.05 \times Temp^2$

*   If Temperature = 50 $^\circ C$: $Yield = 10 + 2 \times 50 - 0.05 \times 50^2 = 10 + 100 - 0.05 \times 2500 = 110 - 125 = -15$ (This might indicate the model is overfitted or the temperature range is outside optimal. Let's try another value).
*   If Temperature = 20 $^\circ C$: $Yield = 10 + 2 \times 20 - 0.05 \times 20^2 = 10 + 40 - 0.05 \times 400 = 50 - 20 = 30$
*   If Temperature = 30 $^\circ C$: $Yield = 10 + 2 \times 30 - 0.05 \times 30^2 = 10 + 60 - 0.05 \times 900 = 70 - 45 = 25$
*   If Temperature = 25 $^\circ C$: $Yield = 10 + 2 \times 25 - 0.05 \times 25^2 = 10 + 50 - 0.05 \times 625 = 60 - 31.25 = 28.75$
*   The peak yield occurs when the derivative is zero: $2 - 0.1 \times Temp = 0 \implies Temp = 20$. This is incorrect. Let's recheck the derivative:
    $\frac{d(Yield)}{d(Temp)} = \beta_1 + 2\beta_2x$.
    For $Yield = 10 + 2 \times Temp - 0.05 \times Temp^2$,
    $\frac{d(Yield)}{d(Temp)} = 2 - 0.1 \times Temp$.
    Setting to zero: $2 - 0.1 \times Temp = 0 \implies Temp = 20$.
    Let's recalculate for temperature = 20: $Yield = 10 + 2 * 20 - 0.05 * 20^2 = 10 + 40 - 0.05 * 400 = 50 - 20 = 30$.
    Let's try a higher temperature:
*   If Temperature = 30 $^\circ C$: $Yield = 10 + 2 \times 30 - 0.05 \times 30^2 = 10 + 60 - 0.05 \times 900 = 70 - 45 = 25$.
*   The peak yield is indeed at $Temp = 20$.

The degree of the polynomial ($n$) is a hyperparameter that needs to be chosen carefully.

**Choosing the Degree of the Polynomial:**

*   **Low Degree (e.g., $n=1$):** Might underfit if the true relationship is non-linear.
*   **High Degree (e.g., $n=10$):** Can overfit the training data, capturing noise rather than the underlying pattern. The model might perform poorly on unseen data.
*   **Cross-validation** is often used to select the optimal degree of the polynomial.

**Pros of Polynomial Regression:**

*   Can model non-linear relationships.
*   Relatively simple to implement by transforming features.

**Cons of Polynomial Regression:**

*   Can be prone to overfitting, especially with higher degrees.
*   Extrapolation outside the range of training data can be unreliable.
*   Interpretability of coefficients can be difficult for higher degrees.

---

### 4. Key Concepts and Definitions Recap

*   **Regression:** Predicting a continuous outcome.
*   **Dependent Variable (y):** The target variable to predict.
*   **Independent Variable(s) (x):** Predictor variables.
*   **Simple Linear Regression:** Predicts y using one x, $y = \beta_0 + \beta_1x + \epsilon$.
*   **Multiple Linear Regression:** Predicts y using multiple x's, $y = \beta_0 + \beta_1x_1 + ... + \beta_kx_k + \epsilon$.
*   **OLS (Ordinary Least Squares):** Method to find coefficients by minimizing the sum of squared errors.
*   **Intercept ($\beta_0$):** Predicted y when all x's are 0.
*   **Slope ($\beta_1$):** Change in y for a unit change in x.
*   **Polynomial Regression:** Models non-linear relationships using polynomial terms ($x^2, x^3$, etc.).
*   **Degree of Polynomial (n):** The highest power of the independent variable in the model.
*   **Underfitting:** Model is too simple to capture the underlying pattern.
*   **Overfitting:** Model is too complex, fitting noise in the training data.

---

### 5. Practice Questions and Exercises

**Question 1:**
You are building a simple linear regression model to predict a student's exam score ($y$) based on the number of hours they studied ($x$). You have the following data:

| Hours Studied ($x$) | Exam Score ($y$) |
| :------------------ | :--------------- |
| 2                   | 65               |
| 4                   | 75               |
| 6                   | 85               |
| 8                   | 95               |

Assume the mean hours studied ($\bar{x}$) is 5 and the mean exam score ($\bar{y}$) is 80.
Calculate the slope ($\beta_1$) and the intercept ($\beta_0$) for this simple linear regression model.

**Answer 1:**
First, calculate the terms needed for the slope formula:
$\sum (x_i - \bar{x})(y_i - \bar{y})$ and $\sum (x_i - \bar{x})^2$

| $x_i$ | $y_i$ | $x_i - \bar{x}$ | $y_i - \bar{y}$ | $(x_i - \bar{x})(y_i - \bar{y})$ | $(x_i - \bar{x})^2$ |
| :---- | :---- | :-------------- | :-------------- | :------------------------------- | :------------------ |
| 2     | 65    | -3              | -15             | 45                               | 9                   |
| 4     | 75    | -1              | -5              | 5                                | 1                   |
| 6     | 85    | 1               | 5               | 5                                | 1                   |
| 8     | 95    | 3               | 15              | 45                               | 9                   |
| **Sum** |       | **0**           | **0**           | **100**                          | **20**              |

Slope ($\beta_1$):
$\beta_1 = \frac{\sum (x_i - \bar{x})(y_i - \bar{y})}{\sum (x_i - \bar{x})^2} = \frac{100}{20} = 5$

Intercept ($\beta_0$):
$\beta_0 = \bar{y} - \beta_1\bar{x} = 80 - 5 \times 5 = 80 - 25 = 55$

The linear regression model is: **Exam Score = 55 + 5 * Hours Studied**

---

**Question 2:**
A data scientist is analyzing the relationship between advertising spend and sales. They fit a multiple linear regression model:

Sales = $10000 + 20 \times AdSpend_A + 35 \times AdSpend_B + \epsilon$

Interpret the coefficients $\beta_1 = 20$ and $\beta_2 = 35$ in this model.

**Answer 2:**
*   **$\beta_1 = 20$ (Coefficient for AdSpend_A):** For every additional dollar spent on advertising campaign A, sales are predicted to increase by $20, assuming all other variables (AdSpend_B) remain constant.
*   **$\beta_2 = 35$ (Coefficient for AdSpend_B):** For every additional dollar spent on advertising campaign B, sales are predicted to increase by $35, assuming all other variables (AdSpend_A) remain constant.

---

**Question 3:**
You are fitting a polynomial regression model to predict crop yield ($y$) based on the amount of fertilizer applied ($x$).

Your current model is: $Yield = 10 + 5x - 0.2x^2 + \epsilon$

If you apply 15 units of fertilizer, what is the predicted crop yield?

**Answer 3:**
Using the polynomial regression equation:
$Yield = 10 + 5x - 0.2x^2$
Substitute $x = 15$:
$Yield = 10 + 5 \times 15 - 0.2 \times (15)^2$
$Yield = 10 + 75 - 0.2 \times 225$
$Yield = 85 - 45$
$Yield = 40$

The predicted crop yield is **40 units**.

---

**Question 4:**
Consider fitting a polynomial regression model with a very high degree (e.g., $n=10$) to a dataset with only a few data points. What is the most likely issue you will encounter, and why?

**Answer 4:**
The most likely issue is **overfitting**. A high-degree polynomial can create a complex curve that perfectly passes through all the training data points, including the random noise. This means the model will have a very low error on the training data but will likely perform poorly on new, unseen data because it has learned the noise rather than the underlying pattern.

---

### 6. Important Points to Remember

*   **Linearity Assumption:** Linear regression assumes a linear relationship. If the relationship is strongly non-linear, linear regression will underfit.
*   **Polynomial Regression for Non-Linearity:** Use polynomial regression when the relationship is curved. Be cautious about the degree to avoid overfitting.
*   **Feature Engineering:** Polynomial regression is a form of feature engineering where you create new features ($x^2, x^3$, etc.).
*   **OLS Method:** The core idea behind fitting linear and polynomial regression is minimizing the sum of squared errors.
*   **Interpretation of Coefficients:** In multiple linear regression, coefficients represent the change in the dependent variable for a unit change in an independent variable, *holding all other predictors constant*.
*   **Model Evaluation:** Always evaluate your regression models on unseen data (e.g., using validation or test sets) to assess their generalization performance. Metrics like R-squared, Mean Squared Error (MSE), and Root Mean Squared Error (RMSE) are commonly used.
*   **Assumptions Matter:** Violations of linear regression assumptions can lead to biased or inefficient estimates.

---
