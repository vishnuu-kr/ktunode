---
title: "linear regression (using least square method)"
subject: "INTRODUCTION TO ARTIFICIAL INTELLIGENCE AND DATA 
SCIENCE"
module: "Module 3: Applied Probability and Statistics for AI and Data Science : Basics of probability"
branch: "Electronics and Communication Engineering"
semester: 3
topicId: "68a5c45db09ce205780fe358"
status: "completed"
scrapedAt: "2026-05-23T17:45:58.671Z"
---
# Module 3: Applied Probability and Statistics for AI and Data Science - Basics of Probability

## Topic: Linear Regression (Using Least Squares Method)

This module introduces the fundamental concepts of probability and statistics crucial for Artificial Intelligence (AI) and Data Science. We will delve into **Linear Regression**, a foundational machine learning algorithm used for predicting a continuous target variable based on one or more predictor variables. Specifically, we will focus on the **Least Squares Method** for fitting a linear model.

---

### Learning Outcomes:

*   **Understand the concept of linear regression:** Define linear regression and its purpose in AI and Data Science.
*   **Formulate the linear regression model:** Express the relationship between variables mathematically.
*   **Understand the Least Squares Method:** Explain the objective of minimizing the sum of squared errors.
*   **Derive the closed-form solution for linear regression coefficients:** Understand how to find the optimal parameters.
*   **Interpret the coefficients of a linear regression model:** Understand what the learned parameters represent.
*   **Evaluate the performance of a linear regression model:** Learn metrics to assess the model's accuracy.

---

### 1. Introduction to Linear Regression

**Key Concept:** Linear Regression is a supervised learning algorithm used to model the relationship between a dependent variable (target) and one or more independent variables (features). It assumes a linear relationship between these variables.

**Definition:**
*   **Dependent Variable (y):** The variable we aim to predict.
*   **Independent Variable(s) (x):** The variable(s) used to predict the dependent variable.

**Purpose in AI/Data Science:**
*   **Prediction:** Forecasting future values (e.g., predicting house prices based on size, predicting sales based on advertising spend).
*   **Understanding Relationships:** Quantifying the strength and direction of relationships between variables.
*   **Inference:** Drawing conclusions about the underlying data generating process.

**Relation to Course Outcomes:**
*   **CO1 (Apply ML algorithms):** Linear regression is a fundamental supervised learning algorithm.
*   **CO3 (Analyze data using statistical methods):** Regression analysis is a core statistical technique for understanding relationships.
*   **CO4 (Integrate statistical and ML):** Linear regression bridges statistical modeling with machine learning applications.

---

### 2. The Linear Regression Model

**Key Concept:** The linear regression model represents the relationship between variables as a straight line (or hyperplane in multiple dimensions).

**2.1 Simple Linear Regression (One Independent Variable)**

**Definition:** In simple linear regression, we model the relationship between a single independent variable ($x$) and a dependent variable ($y$) using a straight line.

**Model Equation:**
$y = \beta_0 + \beta_1x + \epsilon$

Where:
*   $y$: The dependent variable.
*   $x$: The independent variable.
*   $\beta_0$: The **intercept** (or bias term). It represents the expected value of $y$ when $x=0$.
*   $\beta_1$: The **coefficient** or **slope** for $x$. It represents the expected change in $y$ for a one-unit increase in $x$.
*   $\epsilon$: The **error term** or **residual**. It accounts for variability in $y$ that cannot be explained by $x$. It's assumed to be a random variable with a mean of zero and constant variance.

**Key Point:** The goal of linear regression is to find the values of $\beta_0$ and $\beta_1$ that best fit the observed data.

**Example:** Predicting a student's exam score ($y$) based on the number of hours they studied ($x$).
$Score = \beta_0 + \beta_1 \times HoursStudied + \epsilon$

---

**2.2 Multiple Linear Regression (Multiple Independent Variables)**

**Definition:** In multiple linear regression, we model the relationship between a dependent variable ($y$) and two or more independent variables ($x_1, x_2, ..., x_p$).

**Model Equation:**
$y = \beta_0 + \beta_1x_1 + \beta_2x_2 + ... + \beta_px_p + \epsilon$

Where:
*   $y$: The dependent variable.
*   $x_1, x_2, ..., x_p$: The independent variables.
*   $\beta_0$: The intercept.
*   $\beta_1, \beta_2, ..., \beta_p$: The coefficients for each independent variable. $\beta_i$ represents the expected change in $y$ for a one-unit increase in $x_i$, assuming all other independent variables are held constant.
*   $\epsilon$: The error term.

**Matrix Form:**
This is where concepts from linear algebra (Gilbert Strang, "Introduction to Linear Algebra") become crucial. The multiple linear regression model can be elegantly expressed in matrix form:

$Y = X\beta + \epsilon$

Where:
*   $Y$: A vector of dependent variable observations (n x 1).
    $Y = \begin{pmatrix} y_1 \\ y_2 \\ \vdots \\ y_n \end{pmatrix}$
*   $X$: The **design matrix** or **feature matrix** (n x (p+1)). The first column is typically a column of ones for the intercept term.
    $X = \begin{pmatrix} 1 & x_{11} & x_{12} & \dots & x_{1p} \\ 1 & x_{21} & x_{22} & \dots & x_{2p} \\ \vdots & \vdots & \vdots & \ddots & \vdots \\ 1 & x_{n1} & x_{n2} & \dots & x_{np} \end{pmatrix}$
*   $\beta$: A vector of coefficients ( (p+1) x 1).
    $\beta = \begin{pmatrix} \beta_0 \\ \beta_1 \\ \vdots \\ \beta_p \end{pmatrix}$
*   $\epsilon$: A vector of error terms (n x 1).
    $\epsilon = \begin{pmatrix} \epsilon_1 \\ \epsilon_2 \\ \vdots \\ \epsilon_n \end{pmatrix}$

**Key Point:** Matrix notation provides a concise and powerful way to represent and manipulate linear regression models, especially when dealing with many features.

**Relation to Course Outcomes:**
*   **CO2 (Apply advanced mathematical concepts):** Understanding matrix operations is essential for the matrix formulation of linear regression.

---

### 3. The Least Squares Method

**Key Concept:** The Least Squares Method is an optimization technique used to find the "best-fitting" line or hyperplane by minimizing the sum of the squares of the differences between the observed values and the values predicted by the model.

**Definition:** For a set of $n$ observations $(x_i, y_i)$, where $x_i$ can be a vector of features, the predicted value of $y_i$ is given by $\hat{y}_i = \beta_0 + \beta_1x_{i1} + \dots + \beta_px_{ip}$. The **residual** or **error** for the $i$-th observation is the difference between the actual value and the predicted value: $e_i = y_i - \hat{y}_i$.

The Least Squares Method aims to minimize the **Sum of Squared Errors (SSE)**, also known as the **Residual Sum of Squares (RSS)**.

**Objective Function:**
$SSE = \sum_{i=1}^{n} e_i^2 = \sum_{i=1}^{n} (y_i - \hat{y}_i)^2$

**In matrix form:**
The error vector is $\epsilon = Y - X\beta$.
The SSE can be expressed as:
$SSE = \epsilon^T \epsilon = (Y - X\beta)^T (Y - X\beta)$

**Goal:** Find the vector $\beta$ that minimizes $SSE$.

**Intuition:** Squaring the errors serves two purposes:
1.  It penalizes larger errors more heavily.
2.  It ensures that positive and negative errors do not cancel each other out.

**Reference:** Gupta & Kapoor, "Fundamentals of Mathematical Statistics" extensively covers the principles of estimation and minimization, which form the basis of the least squares method. Aurélien Géron, "Hands-on Machine Learning" provides practical implementations and explains the underlying principles in a data science context.

**Relation to Course Outcomes:**
*   **CO3 (Analyze data using statistical methods):** Least squares is a fundamental statistical method for parameter estimation in regression.
*   **CO4 (Integrate statistical and ML):** It's a core technique linking statistical principles to machine learning model fitting.

---

### 4. Deriving the Closed-Form Solution (Normal Equation)

**Key Concept:** The Normal Equation provides a direct, analytical solution for the optimal coefficients ($\beta$) that minimize the SSE. This is a key application of linear algebra in finding the minimum of a quadratic function.

**Derivation:**
To find the $\beta$ that minimizes $SSE = (Y - X\beta)^T (Y - X\beta)$, we take the derivative of $SSE$ with respect to $\beta$ and set it to zero.

1.  **Expand the SSE:**
    $SSE = (Y^T - (X\beta)^T)(Y - X\beta)$
    $SSE = (Y^T - \beta^T X^T)(Y - X\beta)$
    $SSE = Y^T Y - Y^T X\beta - \beta^T X^T Y + \beta^T X^T X\beta$

    Since $Y^T X\beta$ is a scalar, its transpose is itself: $(Y^T X\beta)^T = \beta^T X^T (Y^T)^T = \beta^T X^T Y$.
    So, $Y^T X\beta = \beta^T X^T Y$.

    $SSE = Y^T Y - 2\beta^T X^T Y + \beta^T X^T X\beta$

2.  **Take the derivative with respect to $\beta$:**
    Using matrix calculus rules:
    *   $\frac{\partial}{\partial \beta} (c^T \beta) = c$ (where $c$ is a vector)
    *   $\frac{\partial}{\partial \beta} (\beta^T A \beta) = 2A\beta$ (where $A$ is symmetric, and $X^T X$ is symmetric)

    $\frac{\partial SSE}{\partial \beta} = \frac{\partial}{\partial \beta} (Y^T Y) - \frac{\partial}{\partial \beta} (2\beta^T X^T Y) + \frac{\partial}{\partial \beta} (\beta^T X^T X\beta)$
    $\frac{\partial SSE}{\partial \beta} = 0 - 2X^T Y + 2X^T X\beta$

3.  **Set the derivative to zero and solve for $\beta$:**
    $-2X^T Y + 2X^T X\beta = 0$
    $2X^T X\beta = 2X^T Y$
    $X^T X\beta = X^T Y$

    To isolate $\beta$, we need to multiply by the inverse of $X^T X$ (assuming it exists):
    $(X^T X)^{-1} X^T X\beta = (X^T X)^{-1} X^T Y$
    $I\beta = (X^T X)^{-1} X^T Y$
    $\hat{\beta} = (X^T X)^{-1} X^T Y$

This equation is known as the **Normal Equation**. $\hat{\beta}$ represents the vector of estimated coefficients that minimize the SSE.

**Key Requirements for the Normal Equation:**
*   The matrix $X^T X$ must be invertible. This is generally true if the features are linearly independent and the number of observations $n$ is greater than or equal to the number of features $p+1$.
*   Calculating the inverse of $(X^T X)$ can be computationally expensive for a large number of features.

**Reference:** Gilbert Strang, "Introduction to Linear Algebra" provides a comprehensive background on matrix operations, including matrix inversion and solving systems of linear equations, which are fundamental to understanding the Normal Equation. Deisenroth, Faisal, & Ong, "Mathematics for Machine Learning" also deeply explores these topics.

**Relation to Course Outcomes:**
*   **CO2 (Apply advanced mathematical concepts):** Directly applies matrix transpose, multiplication, and inversion.
*   **CO4 (Integrate statistical and ML):** Provides a direct analytical solution for fitting a statistical model using linear algebra principles.

---

### 5. Interpretation of Coefficients

**Key Concept:** The learned coefficients ($\beta_0, \beta_1, \dots, \beta_p$) have specific meanings that help us understand the relationships in the data.

**Interpretation:**
*   **$\beta_0$ (Intercept):** The expected value of the dependent variable ($y$) when all independent variables ($x_1, \dots, x_p$) are zero.
    *   **Caution:** The intercept may not always have a meaningful interpretation in the real world. For example, if studying hours ($x$) cannot be zero, then $\beta_0$ (score when studying 0 hours) might not be interpretable.

*   **$\beta_i$ (Coefficient for $x_i$):** The estimated change in the dependent variable ($y$) for a one-unit increase in the independent variable ($x_i$), holding all other independent variables constant.
    *   A positive $\beta_i$ indicates a positive relationship (as $x_i$ increases, $y$ tends to increase).
    *   A negative $\beta_i$ indicates a negative relationship (as $x_i$ increases, $y$ tends to decrease).
    *   The magnitude of $\beta_i$ indicates the strength of the impact.

**Example (Simple Linear Regression):**
If we have the model: $Score = 45 + 5 \times HoursStudied$
*   $\beta_0 = 45$: A student who studies 0 hours is predicted to score 45. (Might not be realistic, but it's the intercept of the line).
*   $\beta_1 = 5$: For every additional hour a student studies, their score is predicted to increase by 5 points.

**Example (Multiple Linear Regression):**
If we have the model: $HousePrice = \beta_0 + \beta_1 \times SquareFootage + \beta_2 \times NumberOfBedrooms$
*   $\beta_1$: For every additional square foot, the house price is predicted to increase by $\beta_1$, assuming the number of bedrooms remains the same.
*   $\beta_2$: For each additional bedroom, the house price is predicted to increase by $\beta_2$, assuming the square footage remains the same.

**Important Point:** Correlation does not imply causation. While regression can show strong associations, it doesn't prove that changes in $x_i$ *cause* changes in $y$.

**Relation to Course Outcomes:**
*   **CO3 (Analyze data using statistical methods):** Interpreting coefficients is a key part of regression analysis to understand data relationships.

---

### 6. Evaluating Model Performance

**Key Concept:** After fitting a linear regression model, it's crucial to evaluate how well it performs on unseen data. Several metrics help us assess the model's accuracy and goodness of fit.

**Common Evaluation Metrics:**

*   **Mean Squared Error (MSE):** The average of the squared errors.
    $MSE = \frac{1}{n} \sum_{i=1}^{n} (y_i - \hat{y}_i)^2 = \frac{1}{n} SSE$
    *   Lower MSE indicates a better fit.

*   **Root Mean Squared Error (RMSE):** The square root of MSE. It's in the same units as the dependent variable, making it easier to interpret.
    $RMSE = \sqrt{MSE} = \sqrt{\frac{1}{n} \sum_{i=1}^{n} (y_i - \hat{y}_i)^2}$
    *   Lower RMSE indicates a better fit.

*   **Mean Absolute Error (MAE):** The average of the absolute differences between actual and predicted values.
    $MAE = \frac{1}{n} \sum_{i=1}^{n} |y_i - \hat{y}_i|$
    *   Less sensitive to outliers than MSE/RMSE.
    *   Lower MAE indicates a better fit.

*   **R-squared ($R^2$) or Coefficient of Determination:** Represents the proportion of the variance in the dependent variable that is predictable from the independent variable(s).
    $R^2 = 1 - \frac{SSE}{SST}$
    Where:
    *   $SSE = \sum_{i=1}^{n} (y_i - \hat{y}_i)^2$ (Sum of Squared Errors of the model)
    *   $SST = \sum_{i=1}^{n} (y_i - \bar{y})^2$ (Total Sum of Squares, variance of the actual $y$ values)

    **Interpretation of $R^2$:**
    *   $R^2$ ranges from 0 to 1.
    *   An $R^2$ of 0 means the model explains none of the variability in the dependent variable.
    *   An $R^2$ of 1 means the model explains all of the variability.
    *   **Important:** A high $R^2$ doesn't always mean the model is good. It can be inflated by adding more features (even irrelevant ones).

*   **Adjusted R-squared:** A modified version of $R^2$ that adjusts for the number of predictor variables in the model. It increases only if the new term improves the model more than would be expected by chance.
    $Adjusted R^2 = 1 - \frac{(1 - R^2)(n - 1)}{n - p - 1}$
    Where:
    *   $n$: number of observations
    *   $p$: number of predictor variables

    *   **Use Adjusted $R^2$ when comparing models with different numbers of predictors.**

**Reference:** Cielen, Meysman, & Meysman, "Introducing data science" and Miller, "Statistics For Data Science" provide practical insights into evaluating model performance using these metrics. Fernandez-Granda, "Probability and Statistics for Data Science" offers theoretical underpinnings for these evaluation techniques.

**Relation to Course Outcomes:**
*   **CO3 (Analyze data using statistical methods):** Evaluating model performance is a critical part of statistical analysis.
*   **CO4 (Integrate statistical and ML):** These metrics are used to assess the effectiveness of ML models.

---

### 7. Considerations and Limitations

*   **Assumptions of Linear Regression:** Linear regression relies on several assumptions, including linearity, independence of errors, homoscedasticity (constant variance of errors), and normality of errors. Violations of these assumptions can lead to biased estimates and unreliable predictions. (Gupta & Kapoor, "Fundamentals of Mathematical Statistics" covers these assumptions in detail).
*   **Outliers:** The Least Squares Method is sensitive to outliers because errors are squared. A single extreme data point can disproportionately influence the fitted line.
*   **Multicollinearity:** In multiple linear regression, if independent variables are highly correlated with each other, it can lead to unstable and unreliable coefficient estimates.
*   **Extrapolation:** Extrapolating beyond the range of the training data can lead to inaccurate predictions.
*   **Computational Cost:** For very large datasets or a very large number of features, calculating $(X^T X)^{-1}$ can be computationally intensive. In such cases, iterative optimization methods like Gradient Descent are preferred. (Aurélien Géron, "Hands-on Machine Learning" discusses Gradient Descent as an alternative to the Normal Equation).

---

### Practice Questions

**Question 1:**
Consider the following data points for a simple linear regression: (1, 2), (2, 3), (3, 5), (4, 4).
Calculate the estimated coefficients $\hat{\beta}_0$ and $\hat{\beta}_1$ using the Least Squares Method.

**Solution:**
1.  **Data:**
    $x = [1, 2, 3, 4]$
    $y = [2, 3, 5, 4]$

2.  **Calculate necessary sums:**
    *   $n = 4$
    *   $\sum x = 1+2+3+4 = 10$
    *   $\sum y = 2+3+5+4 = 14$
    *   $\sum x^2 = 1^2+2^2+3^2+4^2 = 1+4+9+16 = 30$
    *   $\sum xy = (1*2) + (2*3) + (3*5) + (4*4) = 2 + 6 + 15 + 16 = 39$

3.  **Formulas for simple linear regression coefficients:**
    $\hat{\beta}_1 = \frac{n\sum xy - (\sum x)(\sum y)}{n\sum x^2 - (\sum x)^2}$
    $\hat{\beta}_0 = \bar{y} - \hat{\beta}_1\bar{x}$

4.  **Calculate $\hat{\beta}_1$:**
    $\hat{\beta}_1 = \frac{4(39) - (10)(14)}{4(30) - (10)^2} = \frac{156 - 140}{120 - 100} = \frac{16}{20} = 0.8$

5.  **Calculate $\hat{\beta}_0$:**
    $\bar{x} = \frac{10}{4} = 2.5$
    $\bar{y} = \frac{14}{4} = 3.5$
    $\hat{\beta}_0 = 3.5 - 0.8(2.5) = 3.5 - 2.0 = 1.5$

**Answer:** $\hat{\beta}_0 = 1.5$, $\hat{\beta}_1 = 0.8$. The regression line is $y = 1.5 + 0.8x$.

---

**Question 2:**
Explain why $R^2$ can be misleading and when Adjusted $R^2$ is preferred.

**Solution:**
$R^2$ measures the proportion of variance explained by the model. However, $R^2$ will always increase or stay the same when new features are added to a model, even if those features are not truly useful or predictive. This is because the new features can at least partially account for the existing error. Therefore, a high $R^2$ might simply indicate an overfitted model with too many predictors.

Adjusted $R^2$ is preferred when comparing models with different numbers of predictor variables. It penalizes the inclusion of unnecessary predictors, providing a more honest assessment of the model's goodness of fit relative to its complexity. Adjusted $R^2$ will only increase if the new predictor improves the model more than what would be expected by chance.

---

### Important Points to Remember:

*   Linear regression models the relationship between variables as a straight line (or hyperplane).
*   The **Least Squares Method** minimizes the sum of squared errors to find the best-fitting line.
*   The **Normal Equation**, $\hat{\beta} = (X^T X)^{-1} X^T Y$, provides a direct analytical solution for the coefficients.
*   Coefficients ($\beta_0, \beta_1, \dots, \beta_p$) represent the intercept and the change in the dependent variable for a unit change in each independent variable, respectively, holding others constant.
*   Evaluate model performance using metrics like MSE, RMSE, MAE, and $R^2$.
*   Adjusted $R^2$ is useful for comparing models with different numbers of features.
*   Be aware of the assumptions of linear regression and potential issues like outliers and multicollinearity.

---

This concludes Module 3's topic on Linear Regression using the Least Squares Method. This foundational understanding is critical for many AI and Data Science applications.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=mc979OhitAg) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=M0mx8S05v60) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=APPIZ2S8YmY) |
