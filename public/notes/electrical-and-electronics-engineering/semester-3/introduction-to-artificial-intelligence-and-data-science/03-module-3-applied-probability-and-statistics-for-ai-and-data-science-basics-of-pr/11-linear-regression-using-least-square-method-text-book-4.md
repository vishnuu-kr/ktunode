---
title: "linear regression (using least square method) (Text book 4 )"
subject: "INTRODUCTION TO ARTIFICIAL INTELLIGENCE AND DATA 
SCIENCE"
module: "Module 3: Applied Probability and Statistics for AI and Data Science : Basics of probability"
branch: "Electrical and Electronics Engineering"
semester: 3
topicId: "68a200842b85456187f35ba4"
status: "completed"
scrapedAt: "2026-05-23T16:14:15.202Z"
---
# Module 3: Applied Probability and Statistics for AI and Data Science - Basics of Probability

## Topic: Linear Regression (Using Least Squares Method)

---

### 1. Introduction to Linear Regression

Linear regression is a fundamental supervised learning algorithm used to model the relationship between a dependent variable (target variable) and one or more independent variables (features). It aims to find a linear relationship that best fits the observed data.

**Key Concepts:**

*   **Dependent Variable (y):** The variable we are trying to predict.
*   **Independent Variable(s) (x):** The variable(s) used to predict the dependent variable.
*   **Linear Relationship:** A relationship where the change in the dependent variable is proportional to the change in the independent variable(s).

**Textbook Reference:**

*   **Fundamentals of mathematical statistics by Gupta, S. C., and V. K. Kapoor (Textbook 4):** This textbook provides a solid foundation in statistical concepts, including regression analysis, which is directly applicable to understanding the mathematical underpinnings of linear regression. Chapter on "Linear Regression and Correlation" will be particularly relevant.
*   **Mathematics for machine learning by Deisenroth, Marc Peter, A. Aldo Faisal, and Cheng Soon Ong (Textbook 3):** This book offers a more modern perspective on linear algebra and its applications in machine learning, including linear regression. Chapters on "Linear Regression" and "Linear Algebra" are highly relevant.
*   **Hands-on machine learning with Scikit-Learn, Keras, and TensorFlow by Aurélien Géron (Textbook 2):** This book provides practical implementation details and intuitions behind linear regression in the context of machine learning. Chapter on "Linear Regression" is essential for understanding its application.

---

### 2. Simple Linear Regression

Simple linear regression involves a single independent variable. The relationship is modeled by a straight line.

**Mathematical Model:**

The equation of a straight line is given by:

$y = \beta_0 + \beta_1 x + \epsilon$

Where:
*   $y$: Dependent variable
*   $x$: Independent variable
*   $\beta_0$: Intercept (the value of $y$ when $x$ is 0)
*   $\beta_1$: Slope (the change in $y$ for a unit change in $x$)
*   $\epsilon$: Error term (represents the part of $y$ that cannot be explained by $x$)

**Goal:** To estimate the values of $\beta_0$ and $\beta_1$ that best fit the data.

---

### 3. The Least Squares Method

The Least Squares method is a widely used technique to find the best-fitting line by minimizing the sum of the squared differences between the observed values of the dependent variable and the values predicted by the linear model. These differences are called residuals.

**Key Concepts:**

*   **Residual (e):** The difference between the observed value ($y_i$) and the predicted value ($\hat{y}_i$).
    $e_i = y_i - \hat{y}_i$
*   **Predicted Value ($\hat{y}$):** The value of the dependent variable predicted by the regression line for a given $x$.
    $\hat{y}_i = \hat{\beta}_0 + \hat{\beta}_1 x_i$ (where $\hat{\beta}_0$ and $\hat{\beta}_1$ are the estimated coefficients)
*   **Sum of Squared Residuals (SSR) or Sum of Squared Errors (SSE):** The quantity we want to minimize.
    $SSR = \sum_{i=1}^{n} e_i^2 = \sum_{i=1}^{n} (y_i - \hat{y}_i)^2 = \sum_{i=1}^{n} (y_i - (\hat{\beta}_0 + \hat{\beta}_1 x_i))^2$

**Derivation of Coefficients ($\hat{\beta}_0$ and $\hat{\beta}_1$):**

To find the values of $\hat{\beta}_0$ and $\hat{\beta}_1$ that minimize the SSR, we use calculus. We take the partial derivatives of the SSR with respect to $\hat{\beta}_0$ and $\hat{\beta}_1$ and set them to zero.

**Partial derivative with respect to $\hat{\beta}_0$:**

$\frac{\partial SSR}{\partial \hat{\beta}_0} = \sum_{i=1}^{n} 2(y_i - \hat{\beta}_0 - \hat{\beta}_1 x_i)(-1) = -2 \sum_{i=1}^{n} (y_i - \hat{\beta}_0 - \hat{\beta}_1 x_i)$

Setting to zero:
$\sum_{i=1}^{n} (y_i - \hat{\beta}_0 - \hat{\beta}_1 x_i) = 0$
$\sum y_i - n\hat{\beta}_0 - \hat{\beta}_1 \sum x_i = 0$
$n\hat{\beta}_0 = \sum y_i - \hat{\beta}_1 \sum x_i$
$\hat{\beta}_0 = \frac{\sum y_i - \hat{\beta}_1 \sum x_i}{n} = \bar{y} - \hat{\beta}_1 \bar{x}$

Where $\bar{y}$ is the mean of $y$ and $\bar{x}$ is the mean of $x$.

**Partial derivative with respect to $\hat{\beta}_1$:**

$\frac{\partial SSR}{\partial \hat{\beta}_1} = \sum_{i=1}^{n} 2(y_i - \hat{\beta}_0 - \hat{\beta}_1 x_i)(-x_i) = -2 \sum_{i=1}^{n} x_i(y_i - \hat{\beta}_0 - \hat{\beta}_1 x_i)$

Setting to zero:
$\sum_{i=1}^{n} x_i(y_i - \hat{\beta}_0 - \hat{\beta}_1 x_i) = 0$
$\sum x_i y_i - \hat{\beta}_0 \sum x_i - \hat{\beta}_1 \sum x_i^2 = 0$

Substitute $\hat{\beta}_0 = \bar{y} - \hat{\beta}_1 \bar{x}$:
$\sum x_i y_i - (\bar{y} - \hat{\beta}_1 \bar{x}) \sum x_i - \hat{\beta}_1 \sum x_i^2 = 0$
$\sum x_i y_i - \bar{y} \sum x_i + \hat{\beta}_1 \bar{x} \sum x_i - \hat{\beta}_1 \sum x_i^2 = 0$

Using $\sum x_i = n\bar{x}$:
$\sum x_i y_i - \bar{y} (n\bar{x}) + \hat{\beta}_1 \bar{x} (n\bar{x}) - \hat{\beta}_1 \sum x_i^2 = 0$
$\sum x_i y_i - n\bar{x}\bar{y} + \hat{\beta}_1 (n\bar{x}^2 - \sum x_i^2) = 0$

Rearranging to solve for $\hat{\beta}_1$:
$\hat{\beta}_1 ( \sum x_i^2 - n\bar{x}^2 ) = n\bar{x}\bar{y} - \sum x_i y_i$

We know that the variance of x is $Var(x) = \frac{\sum x_i^2 - n\bar{x}^2}{n}$. So, $\sum x_i^2 - n\bar{x}^2 = n \cdot Var(x)$.
Also, the covariance of x and y is $Cov(x,y) = \frac{\sum x_i y_i - n\bar{x}\bar{y}}{n}$. So, $n\bar{x}\bar{y} - \sum x_i y_i = -n \cdot Cov(x,y)$.

This leads to:
$\hat{\beta}_1 (n \cdot Var(x)) = -n \cdot Cov(x,y)$
$\hat{\beta}_1 = \frac{-Cov(x,y)}{Var(x)}$

A more direct formula derived from the sums is:

$\hat{\beta}_1 = \frac{\sum_{i=1}^{n} (x_i - \bar{x})(y_i - \bar{y})}{\sum_{i=1}^{n} (x_i - \bar{x})^2}$

This can also be written as:

$\hat{\beta}_1 = \frac{n \sum x_i y_i - (\sum x_i)(\sum y_i)}{n \sum x_i^2 - (\sum x_i)^2}$

**Textbook Reference:**

*   **Fundamentals of mathematical statistics by Gupta, S. C., and V. K. Kapoor (Textbook 4):** Chapters on "Linear Regression and Correlation" will detail the derivation and formulas for $\hat{\beta}_0$ and $\hat{\beta}_1$ using least squares.
*   **Mathematics for machine learning by Deisenroth, Marc Peter, A. Aldo Faisal, and Cheng Soon Ong (Textbook 3):** This book will often present the least squares solution in a matrix form, which is more efficient for multiple regression.

---

### 4. Multiple Linear Regression

Multiple linear regression extends simple linear regression to include two or more independent variables.

**Mathematical Model:**

$y = \beta_0 + \beta_1 x_1 + \beta_2 x_2 + \dots + \beta_p x_p + \epsilon$

Where:
*   $y$: Dependent variable
*   $x_1, x_2, \dots, x_p$: Independent variables
*   $\beta_0$: Intercept
*   $\beta_1, \beta_2, \dots, \beta_p$: Coefficients for each independent variable, representing the change in $y$ for a unit change in the corresponding $x$, holding other variables constant.
*   $\epsilon$: Error term

**Matrix Form:**

Multiple linear regression is often represented in matrix form, which is highly efficient for computations, especially with many features.

Let:
*   $\mathbf{y}$ be the vector of dependent variables: $\mathbf{y} = \begin{bmatrix} y_1 \\ y_2 \\ \vdots \\ y_n \end{bmatrix}$
*   $\mathbf{X}$ be the design matrix (with a column of ones for the intercept): $\mathbf{X} = \begin{bmatrix} 1 & x_{11} & x_{12} & \dots & x_{1p} \\ 1 & x_{21} & x_{22} & \dots & x_{2p} \\ \vdots & \vdots & \vdots & \ddots & \vdots \\ 1 & x_{n1} & x_{n2} & \dots & x_{np} \end{bmatrix}$
*   $\boldsymbol{\beta}$ be the vector of coefficients: $\boldsymbol{\beta} = \begin{bmatrix} \beta_0 \\ \beta_1 \\ \vdots \\ \beta_p \end{bmatrix}$
*   $\boldsymbol{\epsilon}$ be the vector of errors: $\boldsymbol{\epsilon} = \begin{bmatrix} \epsilon_1 \\ \epsilon_2 \\ \vdots \\ \epsilon_n \end{bmatrix}$

The model becomes: $\mathbf{y} = \mathbf{X} \boldsymbol{\beta} + \boldsymbol{\epsilon}$

The least squares solution aims to minimize the sum of squared errors: $SSR = \boldsymbol{\epsilon}^T \boldsymbol{\epsilon} = (\mathbf{y} - \mathbf{X}\boldsymbol{\beta})^T (\mathbf{y} - \mathbf{X}\boldsymbol{\beta})$.

**Least Squares Solution in Matrix Form:**

The solution for $\boldsymbol{\beta}$ that minimizes SSR is given by the **normal equation**:

$\hat{\boldsymbol{\beta}} = (\mathbf{X}^T \mathbf{X})^{-1} \mathbf{X}^T \mathbf{y}$

**Explanation of the Matrix Formula:**

*   $\mathbf{X}^T \mathbf{X}$: This term involves the covariance of the independent variables.
*   $(\mathbf{X}^T \mathbf{X})^{-1}$: The inverse of this term accounts for the relationships between independent variables. If $\mathbf{X}^T \mathbf{X}$ is not invertible (e.g., due to multicollinearity), regularization techniques like Ridge or Lasso regression are used.
*   $\mathbf{X}^T \mathbf{y}$: This term involves the covariance between independent variables and the dependent variable.

**Textbook Reference:**

*   **Introduction to Linear Algebra by Gilbert Strang (Textbook 1):** This book is fundamental for understanding the matrix operations involved in the normal equation, including matrix multiplication, transpose, and inversion. Chapters on "Matrix Multiplication," "Inverse Matrices," and "Solving $Ax=b$" are crucial.
*   **Mathematics for machine learning by Deisenroth, Marc Peter, A. Aldo Faisal, and Cheng Soon Ong (Textbook 3):** Provides a clear exposition of the matrix formulation of linear regression and the derivation of the normal equation.
*   **Hands-on machine learning with Scikit-Learn, Keras, and TensorFlow by Aurélien Géron (Textbook 2):** Demonstrates how to implement multiple linear regression using libraries like Scikit-learn, abstracting away much of the matrix manipulation.

---

### 5. Evaluating Linear Regression Models

Once a regression model is fitted, it's important to evaluate its performance.

**Key Metrics:**

*   **R-squared ($R^2$):** A statistical measure that represents the proportion of the variance for a dependent variable that's explained by an independent variable or variables in a regression model. It ranges from 0 to 1. A higher $R^2$ indicates a better fit.
    $R^2 = 1 - \frac{SSR}{SST} = 1 - \frac{\sum_{i=1}^{n} (y_i - \hat{y}_i)^2}{\sum_{i=1}^{n} (y_i - \bar{y})^2}$
    Where:
    *   $SSR$: Sum of Squared Residuals (explained above)
    *   $SST$: Total Sum of Squares (variance of the dependent variable)

*   **Adjusted R-squared:** Similar to $R^2$, but it adjusts for the number of predictors in the model. It is useful when comparing models with different numbers of independent variables.

*   **Root Mean Squared Error (RMSE):** The square root of the average of the squared errors. It provides a measure of the typical distance between predicted and actual values, in the same units as the dependent variable.
    $RMSE = \sqrt{\frac{1}{n} \sum_{i=1}^{n} (y_i - \hat{y}_i)^2}$

**Textbook Reference:**

*   **Fundamentals of mathematical statistics by Gupta, S. C., and V. K. Kapoor (Textbook 4):** Chapters on "Correlation and Regression" will cover goodness-of-fit measures like $R^2$.
*   **Statistics For Data Science by James D. Miller (Reference Book 5):** This book likely offers practical insights into interpreting evaluation metrics for regression models.

---

### 6. Assumptions of Linear Regression

For the statistical inferences (like hypothesis testing on coefficients) derived from linear regression to be valid, several assumptions must hold true for the error term ($\epsilon$).

*   **Linearity:** The relationship between independent and dependent variables is linear.
*   **Independence of Errors:** The errors ($\epsilon_i$) are independent of each other. This means that the error for one observation does not influence the error for another.
*   **Homoscedasticity (Constant Variance):** The errors have constant variance across all levels of the independent variables. $Var(\epsilon_i) = \sigma^2$.
*   **Normality of Errors:** The errors are normally distributed with a mean of zero. $E(\epsilon_i) = 0$ and $\epsilon_i \sim N(0, \sigma^2)$.
*   **No Multicollinearity (for multiple regression):** The independent variables are not highly correlated with each other. Perfect multicollinearity can make the $(\mathbf{X}^T \mathbf{X})^{-1}$ term undefined.

**Textbook Reference:**

*   **Fundamentals of mathematical statistics by Gupta, S. C., and V. K. Kapoor (Textbook 4):** This textbook will thoroughly cover the statistical assumptions of linear regression and their implications.
*   **Probability and Statistics for Data Science by Carlos Fernandez-Granda (Reference Book 2):** May offer a data-science-oriented perspective on these assumptions and how to check them.

---

### 7. Practical Considerations and Techniques

*   **Outliers:** Extreme values in the data can significantly impact the regression line. Techniques like robust regression or outlier detection methods can be used.
*   **Multicollinearity:** High correlation between independent variables can lead to unstable coefficient estimates. Techniques like Principal Component Regression (PCR) or Ridge Regression can address this.
*   **Feature Engineering:** Creating new features from existing ones can improve model performance.
*   **Regularization (L1 and L2):** Techniques like Lasso (L1) and Ridge (L2) regression add a penalty term to the loss function, shrinking coefficients and preventing overfitting, especially in the presence of many features or multicollinearity. This is a crucial topic in machine learning.
    *   **Ridge Regression:** Adds $\alpha \sum_{j=1}^{p} \beta_j^2$ to the loss function.
    *   **Lasso Regression:** Adds $\alpha \sum_{j=1}^{p} |\beta_j|$ to the loss function, which can drive some coefficients to zero, performing feature selection.

**Textbook Reference:**

*   **Hands-on machine learning with Scikit-Learn, Keras, and TensorFlow by Aurélien Géron (Textbook 2):** This book is excellent for understanding regularization techniques (Lasso, Ridge, Elastic Net) and their practical implementation. Chapters on regularization are key.
*   **Mathematics for machine learning by Deisenroth, Marc Peter, A. Aldo Faisal, and Cheng Soon Ong (Textbook 3):** Might delve into the mathematical justification for regularization.

---

### 8. Alignment with Course Outcomes

*   **CO1: Apply the concept of machine learning algorithms including neural networks and supervised/unsupervised learning techniques for engineering applications.**
    *   Linear regression is a supervised learning technique. Understanding its principles is foundational for applying more complex ML algorithms.
*   **CO2: Apply advanced mathematical concepts such as matrix operations, singular values, and principal component analysis to analyze and solve engineering problems.**
    *   The matrix formulation of linear regression and the least squares solution $(\mathbf{X}^T \mathbf{X})^{-1} \mathbf{X}^T \mathbf{y}$ directly involve matrix operations. Understanding singular values is relevant when dealing with the inversion of $\mathbf{X}^T \mathbf{X}$ (Singular Value Decomposition - SVD is often used in practice).
*   **CO3: Analyze and interpret data using statistical methods including descriptive statistics, correlation, and regression analysis to derive meaningful insights and make informed decisions.**
    *   Linear regression is a core statistical method for analyzing relationships and making predictions. Understanding $R^2$, RMSE, and coefficient interpretations falls under this outcome.
*   **CO4: Integrate statistical approaches and machine learning techniques to ensure practically feasible solutions in engineering contexts.**
    *   Linear regression provides a simple yet powerful way to model relationships, which can be integrated with other techniques or used as a baseline for more complex engineering solutions.

---

### 9. Important Points to Remember

*   **Least Squares Minimizes Squared Errors:** The core idea is to find the line that minimizes the sum of the squared vertical distances between the data points and the line.
*   **Simple vs. Multiple Regression:** Simple uses one predictor, multiple uses multiple predictors.
*   **Matrix Form is Efficient:** For multiple regression, the matrix solution $\hat{\boldsymbol{\beta}} = (\mathbf{X}^T \mathbf{X})^{-1} \mathbf{X}^T \mathbf{y}$ is the standard approach.
*   **Assumptions Matter:** Violations of linear regression assumptions can lead to unreliable model interpretations and predictions.
*   **Evaluation Metrics:** $R^2$ and RMSE are crucial for assessing model fit.
*   **Regularization:** Essential for preventing overfitting, especially with high-dimensional data or multicollinearity.

---

### 10. Practice Questions and Exercises

**Question 1:**
Given the following data points: (1, 2), (2, 4), (3, 5).
Perform a simple linear regression using the least squares method to find the equation of the line $y = \beta_0 + \beta_1 x$.

**Solution 1:**
We have $n=3$.
$x = [1, 2, 3]$
$y = [2, 4, 5]$

Calculate sums:
$\sum x_i = 1 + 2 + 3 = 6$
$\sum y_i = 2 + 4 + 5 = 11$
$\sum x_i^2 = 1^2 + 2^2 + 3^2 = 1 + 4 + 9 = 14$
$\sum x_i y_i = (1 \times 2) + (2 \times 4) + (3 \times 5) = 2 + 8 + 15 = 25$

Calculate means:
$\bar{x} = \frac{6}{3} = 2$
$\bar{y} = \frac{11}{3} \approx 3.67$

Calculate $\hat{\beta}_1$:
$\hat{\beta}_1 = \frac{n \sum x_i y_i - (\sum x_i)(\sum y_i)}{n \sum x_i^2 - (\sum x_i)^2}$
$\hat{\beta}_1 = \frac{3 \times 25 - (6)(11)}{3 \times 14 - (6)^2}$
$\hat{\beta}_1 = \frac{75 - 66}{42 - 36} = \frac{9}{6} = 1.5$

Calculate $\hat{\beta}_0$:
$\hat{\beta}_0 = \bar{y} - \hat{\beta}_1 \bar{x}$
$\hat{\beta}_0 = \frac{11}{3} - 1.5 \times 2$
$\hat{\beta}_0 = \frac{11}{3} - 3 = \frac{11 - 9}{3} = \frac{2}{3} \approx 0.67$

The equation of the line is: $y = 0.67 + 1.5x$.

**Question 2:**
Explain the meaning of the $R^2$ value in the context of linear regression. What does an $R^2$ of 0.85 signify?

**Solution 2:**
$R^2$ (Coefficient of Determination) represents the proportion of the variance in the dependent variable that is predictable from the independent variable(s).
An $R^2$ of 0.85 signifies that 85% of the variability in the dependent variable can be explained by the independent variable(s) included in the model. The remaining 15% is due to other factors not captured by the model or random error.

**Question 3:**
Consider the multiple linear regression model: $y = \beta_0 + \beta_1 x_1 + \beta_2 x_2 + \epsilon$.
What is the matrix form of this model? Write down the formula for the least squares estimate of the coefficient vector $\hat{\boldsymbol{\beta}}$.

**Solution 3:**
The matrix form is $\mathbf{y} = \mathbf{X} \boldsymbol{\beta} + \boldsymbol{\epsilon}$, where:
$\mathbf{y} = \begin{bmatrix} y_1 \\ y_2 \\ \vdots \\ y_n \end{bmatrix}$, $\mathbf{X} = \begin{bmatrix} 1 & x_{11} & x_{12} \\ 1 & x_{21} & x_{22} \\ \vdots & \vdots & \vdots \\ 1 & x_{n1} & x_{n2} \end{bmatrix}$, $\boldsymbol{\beta} = \begin{bmatrix} \beta_0 \\ \beta_1 \\ \beta_2 \end{bmatrix}$, $\boldsymbol{\epsilon} = \begin{bmatrix} \epsilon_1 \\ \epsilon_2 \\ \vdots \\ \epsilon_n \end{bmatrix}$

The least squares estimate of the coefficient vector is:
$\hat{\boldsymbol{\beta}} = (\mathbf{X}^T \mathbf{X})^{-1} \mathbf{X}^T \mathbf{y}$

---

This concludes the notes on Linear Regression using the Least Squares Method. Remember to refer to the specified textbooks for deeper understanding and further examples.
