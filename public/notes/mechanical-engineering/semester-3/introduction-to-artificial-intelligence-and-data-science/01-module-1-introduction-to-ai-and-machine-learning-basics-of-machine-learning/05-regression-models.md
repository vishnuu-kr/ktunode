---
title: "regression models"
subject: "INTRODUCTION TO ARTIFICIAL INTELLIGENCE AND DATA SCIENCE"
module: "Module 1: Introduction to AI and Machine Learning : Basics of Machine Learning"
branch: "Mechanical Engineering"
semester: 3
topicId: "68a3fd1351d0cf4804462d7f"
status: "completed"
scrapedAt: "2026-05-20T17:49:38.581Z"
---
# Module 1: Introduction to AI and Machine Learning - Basics of Machine Learning
## Topic: Regression Models

This module introduces the fundamental concepts of Machine Learning (ML), focusing on supervised learning techniques. Regression is a cornerstone of supervised learning, enabling us to predict continuous numerical values. This topic will delve into the core principles of regression, its types, and how it's applied in data science and engineering.

**Learning Outcomes:**

*   Understand the fundamental concepts of regression analysis in machine learning.
*   Differentiate between various types of regression models.
*   Apply basic regression models to predict continuous outcomes.
*   Evaluate the performance of regression models using appropriate metrics.

**Course Outcomes Addressed:**

*   **CO1:** Apply the concept of machine learning algorithms including neural networks and supervised/unsupervised learning techniques for engineering applications. (Regression is a key supervised learning technique).
*   **CO3:** Analyze and interpret data using statistical methods including descriptive statistics, correlation, and regression analysis to derive meaningful insights and make informed decisions. (Regression is central to this outcome).
*   **CO4:** Integrate statistical approaches and machine learning techniques to ensure practically feasible solutions in engineering contexts. (Regression bridges statistics and ML for practical applications).

---

### 1. What is Regression?

Regression is a supervised machine learning technique used to predict a **continuous numerical output variable** (also known as the target, dependent variable, or response variable) based on one or more **input features** (also known as independent variables or predictors).

**Key Concepts:**

*   **Dependent Variable (Y):** The variable we are trying to predict. It must be continuous (e.g., price, temperature, age).
*   **Independent Variables (X):** The features used to predict the dependent variable. These can be continuous, categorical, or ordinal.
*   **Model:** A mathematical representation that describes the relationship between the independent and dependent variables.
*   **Learning/Training:** The process of finding the optimal parameters for the model by fitting it to a dataset.
*   **Prediction/Inference:** Using the trained model to predict the output for new, unseen data.

**Example:** Predicting the price of a house (Y) based on its size in square feet (X).

**Reference:**
*   **Cielen et al. (2016), *Introducing data science*:** "Regression is a statistical method used to estimate the relationship between a dependent variable and one or more independent variables." (Chapter 5: Regression Analysis)
*   **Deisenroth et al. (2020), *Mathematics for machine learning*:** Emphasizes the mathematical underpinnings of regression, often framing it as finding the best-fitting line or curve through data points. (Chapter 3: Linear Regression)

---

### 2. Types of Regression Models

Regression models can be categorized based on the nature of the relationship between variables and the number of independent variables used.

#### 2.1. Based on the Number of Independent Variables

*   **Simple Linear Regression:**
    *   **Definition:** Involves a single independent variable (X) to predict the dependent variable (Y).
    *   **Mathematical Representation:** $Y = \beta_0 + \beta_1X + \epsilon$
        *   $\beta_0$: Intercept (the value of Y when X is 0).
        *   $\beta_1$: Slope (the change in Y for a one-unit change in X).
        *   $\epsilon$: Error term (represents the unobserved factors that affect Y).
    *   **Goal:** Find the values of $\beta_0$ and $\beta_1$ that minimize the error.

*   **Multiple Linear Regression:**
    *   **Definition:** Involves two or more independent variables ($X_1, X_2, ..., X_n$) to predict the dependent variable (Y).
    *   **Mathematical Representation:** $Y = \beta_0 + \beta_1X_1 + \beta_2X_2 + ... + \beta_nX_n + \epsilon$
        *   $\beta_i$: Coefficient for the $i$-th independent variable, representing the change in Y for a one-unit change in $X_i$, holding other variables constant.
    *   **Goal:** Find the values of $\beta_0, \beta_1, ..., \beta_n$ that minimize the error.
    *   **Matrix Form:** $Y = X\beta + \epsilon$, where $Y$ is the vector of dependent variables, $X$ is the matrix of independent variables (with a column of 1s for the intercept), $\beta$ is the vector of coefficients, and $\epsilon$ is the vector of errors.

    **Reference:**
    *   **Strang (2023), *Introduction to Linear Algebra*:** Discusses the matrix formulation of linear systems, which is fundamental to solving multiple linear regression problems (e.g., the normal equation). (Chapter 6: Orthogonality and Projections, Chapter 7: The Matrix of Covariance and Its Eigenvalues)
    *   **Gupta & Kapoor (2020), *Fundamentals of mathematical statistics*:** Provides detailed theoretical explanations and derivations for linear regression models. (Chapter 14: Theory of Estimation - particularly sections on properties of estimators like unbiasedness and efficiency for regression coefficients)

#### 2.2. Based on the Nature of the Relationship

*   **Linear Regression:** Assumes a linear relationship between independent and dependent variables. This is the most basic form.

*   **Polynomial Regression:**
    *   **Definition:** Used when the relationship between the independent and dependent variables is curvilinear. It models this relationship by adding polynomial terms of the independent variable.
    *   **Mathematical Representation (for one independent variable):** $Y = \beta_0 + \beta_1X + \beta_2X^2 + ... + \beta_dX^d + \epsilon$, where $d$ is the degree of the polynomial.
    *   **Example:** Predicting crop yield (Y) based on fertilizer amount (X), where the relationship might be parabolic.
    *   **Note:** Polynomial regression is still considered a form of linear regression because the model is linear in its coefficients ($\beta_i$).

*   **Non-linear Regression:**
    *   **Definition:** Models relationships that cannot be represented by a linear combination of the independent variables or their polynomial terms. The model itself is non-linear in its parameters.
    *   **Example:** Exponential growth models, logistic growth models.

**Reference:**
*   **Géron (2022), *Hands-on machine learning*:** Provides practical implementations and discussions on when to use polynomial features to capture non-linear relationships in linear models. (Chapter 4: Training Linear Models - covers polynomial regression with Scikit-Learn).
*   **Miller (2019), *Statistics For Data Science*:** Explains the intuition behind polynomial regression and its application in fitting curves. (Chapter 5: Linear Regression and its Extensions)

---

### 3. How Regression Models Work: The Learning Process

The core of regression is to find the best-fitting line or curve through the data points. This is typically achieved by minimizing the difference between the predicted values and the actual values.

#### 3.1. Cost Function (Loss Function)

The cost function quantifies the error of the model. For regression, a common cost function is the **Mean Squared Error (MSE)**.

*   **Definition:** The average of the squared differences between the predicted values and the actual values.
*   **Formula:** $MSE = \frac{1}{n} \sum_{i=1}^{n} (y_i - \hat{y}_i)^2$, where:
    *   $n$ is the number of data points.
    *   $y_i$ is the actual value of the dependent variable for the $i$-th data point.
    *   $\hat{y}_i$ is the predicted value of the dependent variable for the $i$-th data point.
*   **Why squared error?**
    *   It penalizes larger errors more than smaller errors.
    *   It ensures that the errors are always positive.
    *   It leads to a differentiable function, which is essential for optimization algorithms.

**Other Cost Functions:**

*   **Root Mean Squared Error (RMSE):** The square root of MSE. It's in the same units as the dependent variable, making it more interpretable.
*   **Mean Absolute Error (MAE):** The average of the absolute differences between predicted and actual values. Less sensitive to outliers than MSE.

#### 3.2. Optimization Algorithms

These algorithms are used to find the model parameters that minimize the cost function.

*   **Ordinary Least Squares (OLS):**
    *   **Concept:** A direct analytical method to find the coefficients that minimize the sum of squared errors.
    *   **Mathematical Solution (for multiple linear regression):** $\hat{\beta} = (X^TX)^{-1}X^TY$, where $\hat{\beta}$ is the vector of estimated coefficients.
    *   **Requirements:** The matrix $X^TX$ must be invertible.

*   **Gradient Descent:**
    *   **Concept:** An iterative optimization algorithm that starts with arbitrary initial values for the coefficients and repeatedly updates them in the direction that reduces the cost function.
    *   **Process:**
        1.  Initialize coefficients.
        2.  Calculate the gradient of the cost function with respect to each coefficient. The gradient points in the direction of steepest ascent.
        3.  Update coefficients by moving in the opposite direction of the gradient (steepest descent).
        4.  Repeat until convergence (when the change in coefficients is minimal).
    *   **Update Rule:** $\beta_{j} := \beta_{j} - \alpha \frac{\partial J(\beta)}{\partial \beta_{j}}$, where $\alpha$ is the learning rate.
    *   **Types:** Batch Gradient Descent, Stochastic Gradient Descent (SGD), Mini-batch Gradient Descent.

**Reference:**
*   **Deisenroth et al. (2020), *Mathematics for machine learning*:** Deep dives into the calculus and linear algebra required for OLS and gradient-based optimization. (Chapter 3: Linear Regression - covers normal equation and gradient descent)
*   **Géron (2022), *Hands-on machine learning*:** Provides practical Python implementations of OLS and gradient descent using Scikit-Learn and TensorFlow/Keras. (Chapter 4: Training Linear Models)
*   **Evans & Rosenthal (2009), *Probability and Statistics - The Science of Uncertainty*:** Discusses statistical inference and estimation, which forms the basis for understanding why OLS is used. (Chapter 8: Estimation, Chapter 9: Hypothesis Testing - concepts relevant to statistical significance of coefficients)

---

### 4. Evaluating Regression Models

After training, it's crucial to evaluate how well the model performs on unseen data.

#### 4.1. Performance Metrics

*   **R-squared ($R^2$) / Coefficient of Determination:**
    *   **Definition:** Represents the proportion of the variance in the dependent variable that is predictable from the independent variable(s).
    *   **Formula:** $R^2 = 1 - \frac{SSR}{SST} = 1 - \frac{\sum (y_i - \hat{y}_i)^2}{\sum (y_i - \bar{y})^2}$, where:
        *   $SSR$ (Sum of Squares Regression): $\sum (\hat{y}_i - \bar{y})^2$
        *   $SST$ (Total Sum of Squares): $\sum (y_i - \bar{y})^2$
        *   $\bar{y}$: Mean of the dependent variable.
    *   **Interpretation:**
        *   $R^2 = 0$: The model explains none of the variability of the response data around its mean.
        *   $R^2 = 1$: The model perfectly explains all the variability.
        *   Values can be negative if the model is worse than predicting the mean.
    *   **Caveat:** $R^2$ always increases or stays the same when new features are added to the model, even if they are not useful.

*   **Adjusted R-squared:**
    *   **Definition:** A modified version of $R^2$ that adjusts for the number of predictors in the model. It penalizes the addition of unnecessary features.
    *   **Formula:** $Adjusted R^2 = 1 - \frac{(1 - R^2)(n - 1)}{n - k - 1}$, where:
        *   $n$: Number of data points.
        *   $k$: Number of independent variables.
    *   **Interpretation:** Useful for comparing models with different numbers of features.

*   **Mean Squared Error (MSE):** (Already discussed as a cost function) Lower MSE is better.

*   **Root Mean Squared Error (RMSE):** (Already discussed as a cost function) Lower RMSE is better.

*   **Mean Absolute Error (MAE):** (Already discussed as a cost function) Lower MAE is better.

#### 4.2. Residual Analysis

*   **Residuals:** The difference between the actual value and the predicted value ($e_i = y_i - \hat{y}_i$).
*   **Purpose:** To check if the assumptions of the regression model are met.
    *   **Assumption 1: Linearity:** Residuals should be randomly scattered around zero. A pattern (e.g., a curve) in the residual plot indicates a non-linear relationship not captured by the model.
    *   **Assumption 2: Homoscedasticity (Constant Variance):** The spread of residuals should be constant across all levels of the independent variable(s). A "fanning out" or "funnel" shape indicates heteroscedasticity.
    *   **Assumption 3: Independence of Errors:** Residuals should not show any patterns or correlation with each other.
    *   **Assumption 4: Normality of Errors:** Residuals should be approximately normally distributed (often checked with a Q-Q plot or histogram).

**Reference:**
*   **Gupta & Kapoor (2020), *Fundamentals of mathematical statistics*:** Provides in-depth statistical tests for model assumptions and interpretation of R-squared. (Chapter 15: Sampling Distributions and Estimation - covers statistical significance of coefficients, which is related to model validity)
*   **Miller (2019), *Statistics For Data Science*:** Explains the practical application of metrics like R-squared and MAE, and how to interpret residual plots. (Chapter 6: Model Evaluation and Selection)
*   **Fernandez-Granda (2017), *Probability and Statistics for Data Science*:** Focuses on the probabilistic interpretation of these metrics and their statistical properties. (Chapter 7: Linear Regression)

---

### 5. Assumptions of Linear Regression

For the results of linear regression (especially OLS) to be statistically valid and for the coefficients to be unbiased and efficient estimates, several assumptions must hold.

1.  **Linearity:** The relationship between the mean of the dependent variable and the independent variables is linear.
2.  **Independence of Errors:** The errors ($\epsilon_i$) are independent of each other.
3.  **Homoscedasticity:** The variance of the errors is constant ($\text{Var}(\epsilon_i) = \sigma^2$ for all $i$).
4.  **Normality of Errors:** The errors are normally distributed with a mean of zero ($\epsilon_i \sim N(0, \sigma^2)$).
5.  **No Multicollinearity:** The independent variables are not perfectly linearly correlated with each other (in multiple regression).

**Reference:**
*   **Gupta & Kapoor (2020), *Fundamentals of mathematical statistics*:** Chapter 14 provides a thorough treatment of the assumptions of linear regression and their implications.
*   **Watkins (Preliminary Edition), *An Introduction to the Science of Statistics*:** Likely covers these fundamental assumptions from a statistical modeling perspective.

---

### 6. Limitations of Regression

*   **Correlation vs. Causation:** Regression can identify strong relationships between variables, but it cannot prove causation.
*   **Outliers:** Can significantly influence the regression line and model parameters, especially in linear regression.
*   **Extrapolation:** Predicting values outside the range of the training data can be unreliable.
*   **Assumptions Violations:** If the assumptions of the model are not met, the model's predictions and inferences may be biased or inaccurate.
*   **Overfitting/Underfitting:**
    *   **Overfitting:** A model that fits the training data too closely, including noise, and performs poorly on new data. Polynomial regression with a high degree can lead to overfitting.
    *   **Underfitting:** A model that is too simple to capture the underlying patterns in the data, performing poorly on both training and new data.

**Reference:**
*   **Géron (2022), *Hands-on machine learning*:** Discusses overfitting and underfitting in detail and introduces techniques like regularization to combat them. (Chapter 2: End-to-End Machine Learning Project, Chapter 4: Training Linear Models - regularization)
*   **Kotu & Deshpande (2018), *Data science: concepts and practice*:** Provides a broader perspective on data science principles, including the importance of understanding model limitations and potential pitfalls. (Chapter 6: Predictive Analytics - covers pitfalls and considerations in predictive modeling)

---

### Practice Questions and Exercises

**Question 1:**
A company wants to predict its monthly sales (in thousands of dollars) based on its advertising expenditure (in thousands of dollars). They collect data for 10 months:

| Month | Advertising Expenditure (X) | Sales (Y) |
| :---- | :-------------------------- | :-------- |
| 1     | 5                           | 12        |
| 2     | 7                           | 15        |
| 3     | 8                           | 17        |
| 4     | 10                          | 20        |
| 5     | 12                          | 23        |
| 6     | 13                          | 25        |
| 7     | 15                          | 28        |
| 8     | 16                          | 30        |
| 9     | 18                          | 33        |
| 10    | 20                          | 36        |

Assume a simple linear regression model: $Sales = \beta_0 + \beta_1 \times AdvertisingExpenditure$.
Calculate the following:
a) The intercept ($\beta_0$) and slope ($\beta_1$) using Ordinary Least Squares (OLS).
b) Predict the sales for an advertising expenditure of $25,000.
c) Calculate the $R^2$ value for this model.

**Hint:** You'll need to calculate sums: $\sum X$, $\sum Y$, $\sum XY$, $\sum X^2$, $\sum Y^2$, and $n$.
*   $\beta_1 = \frac{n(\sum XY) - (\sum X)(\sum Y)}{n(\sum X^2) - (\sum X)^2}$
*   $\beta_0 = \frac{\sum Y - \beta_1(\sum X)}{n}$
*   $R^2 = 1 - \frac{SSR}{SST}$, where $SSR = \sum (y_i - \hat{y}_i)^2$ and $SST = \sum (y_i - \bar{y})^2$.

**Question 2:**
What are the key assumptions of linear regression? Briefly explain why violating the assumption of homoscedasticity can be problematic.

**Question 3:**
Explain the difference between $R^2$ and Adjusted $R^2$. When would you prefer to use Adjusted $R^2$?

---

### Answers to Practice Questions

**Answer 1:**

First, let's calculate the necessary sums from the data:

| Month | X (Adv Exp) | Y (Sales) | XY    | X^2   | Y^2   |
| :---- | :---------- | :-------- | :---- | :---- | :---- |
| 1     | 5           | 12        | 60    | 25    | 144   |
| 2     | 7           | 15        | 105   | 49    | 225   |
| 3     | 8           | 17        | 136   | 64    | 289   |
| 4     | 10          | 20        | 200   | 100   | 400   |
| 5     | 12          | 23        | 276   | 144   | 529   |
| 6     | 13          | 25        | 325   | 169   | 625   |
| 7     | 15          | 28        | 420   | 225   | 784   |
| 8     | 16          | 30        | 480   | 256   | 900   |
| 9     | 18          | 33        | 594   | 324   | 1089  |
| 10    | 20          | 36        | 720   | 400   | 1296  |
| **Sums** | **124**     | **239**   | **3316** | **1760** | **6281** |

$n = 10$

a) Calculate $\beta_0$ and $\beta_1$:

$\beta_1 = \frac{10(3316) - (124)(239)}{10(1760) - (124)^2} = \frac{33160 - 29636}{17600 - 15376} = \frac{3524}{2224} \approx 1.5845$

$\beta_0 = \frac{239 - 1.5845(124)}{10} = \frac{239 - 196.478}{10} = \frac{42.522}{10} \approx 4.2522$

So, the regression equation is approximately: $Sales = 4.2522 + 1.5845 \times Advertising Expenditure$.

b) Predict sales for $25,000 advertising expenditure:
$\hat{Y} = 4.2522 + 1.5845 \times 25 = 4.2522 + 39.6125 \approx 43.8647$
Predicted sales are approximately $43,864.70.

c) Calculate $R^2$:
First, calculate predicted values ($\hat{y}_i$) and residuals ($e_i = y_i - \hat{y}_i$):

| X    | Y    | $\hat{y}_i = 4.2522 + 1.5845X$ | $e_i = Y - \hat{y}_i$ | $e_i^2$ | $y_i - \bar{y}$ | $(y_i - \bar{y})^2$ |
| :--- | :--- | :---------------------------- | :-------------------- | :------ | :-------------- | :------------------ |
| 5    | 12   | 12.175                        | -0.175                | 0.0306  | -11.5           | 132.25              |
| 7    | 15   | 15.344                        | -0.344                | 0.1183  | -8.5            | 72.25               |
| 8    | 17   | 16.928                        | 0.072                 | 0.0052  | -6.5            | 42.25               |
| 10   | 20   | 20.097                        | -0.097                | 0.0094  | -3.5            | 12.25               |
| 12   | 23   | 23.267                        | -0.267                | 0.0713  | -0.5            | 0.25                |
| 13   | 25   | 24.851                        | 0.149                 | 0.0222  | 1.5             | 2.25                |
| 15   | 28   | 28.020                        | -0.020                | 0.0004  | 4.5             | 20.25               |
| 16   | 30   | 29.605                        | 0.395                 | 0.1560  | 6.5             | 42.25               |
| 18   | 33   | 32.774                        | 0.226                 | 0.0511  | 9.5             | 90.25               |
| 20   | 36   | 35.943                        | 0.057                 | 0.0033  | 12.5            | 156.25              |
| **Sums** |      |                               | **0.284**             | **0.5683** |                 | **570.5**           |

$\bar{y} = 239 / 10 = 23.9$
$SST = \sum (y_i - \bar{y})^2 = 570.5$
$SSR = \sum (y_i - \hat{y}_i)^2 = \sum e_i^2 = 0.5683$

$R^2 = 1 - \frac{SSR}{SST} = 1 - \frac{0.5683}{570.5} \approx 1 - 0.000996 \approx 0.999$

The $R^2$ value is approximately 0.999, indicating a very strong linear relationship and that the model explains almost all of the variance in sales.

**Answer 2:**
The key assumptions of linear regression are:
1.  **Linearity:** The relationship between the mean of Y and X is linear.
2.  **Independence of Errors:** Errors are independent of each other.
3.  **Homoscedasticity:** The variance of errors is constant.
4.  **Normality of Errors:** Errors are normally distributed.
5.  **No Multicollinearity:** Independent variables are not perfectly correlated.

Violating the assumption of **homoscedasticity** (when the variance of errors is not constant) is problematic because it violates the Gauss-Markov theorem, which states that OLS estimators are BLUE (Best Linear Unbiased Estimators) under certain assumptions. If heteroscedasticity is present:
*   The OLS estimators for the coefficients are still unbiased.
*   However, they are no longer the minimum variance estimators among all linear unbiased estimators.
*   The standard errors of the coefficients will be biased, leading to incorrect hypothesis tests and confidence intervals. This means we might incorrectly conclude that a variable is statistically significant when it is not, or vice-versa.

**Answer 3:**
*   **$R^2$ (Coefficient of Determination):** Measures the proportion of the variance in the dependent variable that is predictable from the independent variables. It always increases or stays the same as more predictors are added, even if they are not useful.
*   **Adjusted $R^2$:** A modification of $R^2$ that accounts for the number of predictors in the model. It penalizes the addition of unnecessary predictors.

You would prefer to use **Adjusted $R^2$** when comparing models with different numbers of independent variables. It provides a more honest assessment of the model's explanatory power, as it doesn't artificially inflate the score by adding irrelevant features. A higher Adjusted $R^2$ generally indicates a better model fit, considering the complexity.

---

### Important Points to Remember

*   Regression predicts **continuous** values.
*   **Simple Linear Regression** uses one predictor; **Multiple Linear Regression** uses two or more.
*   The goal is to **minimize the error** (e.g., MSE) between predicted and actual values.
*   **OLS** provides an analytical solution, while **Gradient Descent** is an iterative optimization method.
*   **$R^2$** indicates how much variance is explained by the model.
*   **Adjusted $R^2$** is better for comparing models with different numbers of predictors.
*   **Residual analysis** is crucial for validating model assumptions and identifying potential issues.
*   Be aware of **overfitting**, **underfitting**, and the difference between **correlation and causation**.
*   Understanding the **assumptions** of linear regression is vital for interpreting results correctly.

---

This concludes the topic on Regression Models. The next steps in your learning would involve exploring other types of regression (e.g., Ridge, Lasso, Logistic Regression for classification) and more advanced evaluation techniques.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=clVwS3P9s84) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=9GMBpZZtjXM) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=e_Nl2Q2yK8c) |
