---
title: "linear regression (using least square method) (Text book 4 )"
subject: "INTRODUCTION TO ARTIFICIAL INTELLIGENCE AND DATA SCIENCE"
module: "Module 3: Applied Probability and Statistics for AI and Data Science : Basics of probability"
branch: "Mechanical Engineering"
semester: 3
topicId: "68a3fd1351d0cf4804462d9c"
status: "completed"
scrapedAt: "2026-05-20T17:49:57.723Z"
---
# Module 3: Applied Probability and Statistics for AI and Data Science - Basics of Probability

## Topic: Linear Regression (Using Least Squares Method)

This module introduces fundamental concepts of probability and statistics essential for Artificial Intelligence and Data Science. In this topic, we focus on **Linear Regression**, a cornerstone supervised learning algorithm, and specifically delve into the **Least Squares Method** for its implementation.

---

### Learning Outcomes:

*   **Understand the concept of linear regression:** What it is, why it's used, and its relationship with probability and statistics.
*   **Explain the Least Squares Method:** How it works to find the best-fitting line and the underlying mathematical principles.
*   **Apply linear regression to real-world problems:** Recognizing scenarios where it can be effectively used.
*   **Interpret the results of linear regression:** Understanding the meaning of coefficients and the goodness of fit.
*   **Relate linear regression to statistical concepts:** Connecting it to concepts like correlation and error.

---

### 1. Introduction to Linear Regression

Linear regression is a statistical method used to model the relationship between a **dependent variable** (the outcome we want to predict) and one or more **independent variables** (the factors that might influence the outcome).

*   **Purpose:**
    *   To understand the strength and direction of the relationship between variables.
    *   To predict the value of the dependent variable based on the independent variables.
*   **Types:**
    *   **Simple Linear Regression:** Involves one independent variable.
    *   **Multiple Linear Regression:** Involves two or more independent variables.

**Example:** Predicting a student's final exam score (dependent variable) based on the number of hours they studied (independent variable).

---

### 2. The Mathematical Model of Linear Regression

#### 2.1 Simple Linear Regression

The relationship between the dependent variable ($Y$) and the independent variable ($X$) is modeled as a straight line:

$Y = \beta_0 + \beta_1 X + \epsilon$

Where:
*   $Y$: The dependent variable (response).
*   $X$: The independent variable (predictor).
*   $\beta_0$: The **intercept** (the value of $Y$ when $X=0$).
*   $\beta_1$: The **slope** (the change in $Y$ for a one-unit change in $X$).
*   $\epsilon$: The **error term** (represents the unexplained variability in $Y$, including measurement errors and other unobserved factors).

Our goal is to estimate the values of $\beta_0$ and $\beta_1$ from the observed data.

#### 2.2 Multiple Linear Regression

When there are multiple independent variables ($X_1, X_2, ..., X_p$), the model becomes:

$Y = \beta_0 + \beta_1 X_1 + \beta_2 X_2 + ... + \beta_p X_p + \epsilon$

*   $\beta_i$: The coefficient for the $i$-th independent variable, representing the change in $Y$ for a one-unit change in $X_i$, assuming all other independent variables are held constant.

**Textbook Reference:**
*   **Gupta & Kapoor (Fundamentals of mathematical statistics):** Chapter 14, "Theory of Regression". This textbook provides a comprehensive foundation in regression analysis, including the mathematical derivations.
*   **Deisenroth, Faisal, & Ong (Mathematics for machine learning):** Discusses linear models and their statistical properties in the context of machine learning.

---

### 3. The Least Squares Method

The **Least Squares Method** is a common technique to find the "best-fitting" line by minimizing the sum of the squared differences between the observed values of the dependent variable and the values predicted by the regression line.

#### 3.1 The Concept of Residuals

For each data point $(x_i, y_i)$, the predicted value $\hat{y}_i$ is given by the regression equation:

$\hat{y}_i = \hat{\beta}_0 + \hat{\beta}_1 x_i$ (for simple linear regression)

The **residual** ($e_i$) is the difference between the observed value ($y_i$) and the predicted value ($\hat{y}_i$):

$e_i = y_i - \hat{y}_i$

#### 3.2 Minimizing the Sum of Squared Residuals (SSR)

The Least Squares method aims to minimize the **Sum of Squared Residuals (SSR)**, also known as the **Sum of Squared Errors (SSE)**:

$SSR = \sum_{i=1}^{n} e_i^2 = \sum_{i=1}^{n} (y_i - \hat{y}_i)^2$

Substituting the predicted value:

$SSR = \sum_{i=1}^{n} (y_i - (\hat{\beta}_0 + \hat{\beta}_1 x_i))^2$

To find the values of $\hat{\beta}_0$ and $\hat{\beta}_1$ that minimize SSR, we use calculus. We take the partial derivatives of SSR with respect to $\hat{\beta}_0$ and $\hat{\beta}_1$, set them to zero, and solve the resulting system of equations.

#### 3.3 Derivation of Coefficients (Simple Linear Regression)

**Minimizing with respect to $\hat{\beta}_0$:**

$\frac{\partial SSR}{\partial \hat{\beta}_0} = \sum_{i=1}^{n} 2(y_i - \hat{\beta}_0 - \hat{\beta}_1 x_i)(-1) = 0$
$\sum (y_i - \hat{\beta}_0 - \hat{\beta}_1 x_i) = 0$
$\sum y_i - n\hat{\beta}_0 - \hat{\beta}_1 \sum x_i = 0$
$n\hat{\beta}_0 = \sum y_i - \hat{\beta}_1 \sum x_i$
$\hat{\beta}_0 = \frac{\sum y_i}{n} - \hat{\beta}_1 \frac{\sum x_i}{n}$
$\hat{\beta}_0 = \bar{y} - \hat{\beta}_1 \bar{x}$

This shows that the regression line passes through the mean of $X$ and the mean of $Y$ ($\bar{x}, \bar{y}$).

**Minimizing with respect to $\hat{\beta}_1$:**

$\frac{\partial SSR}{\partial \hat{\beta}_1} = \sum_{i=1}^{n} 2(y_i - \hat{\beta}_0 - \hat{\beta}_1 x_i)(-x_i) = 0$
$\sum x_i(y_i - \hat{\beta}_0 - \hat{\beta}_1 x_i) = 0$
$\sum x_i y_i - \hat{\beta}_0 \sum x_i - \hat{\beta}_1 \sum x_i^2 = 0$

Substitute $\hat{\beta}_0 = \bar{y} - \hat{\beta}_1 \bar{x}$:

$\sum x_i y_i - (\bar{y} - \hat{\beta}_1 \bar{x}) \sum x_i - \hat{\beta}_1 \sum x_i^2 = 0$
$\sum x_i y_i - \bar{y} \sum x_i + \hat{\beta}_1 \bar{x} \sum x_i - \hat{\beta}_1 \sum x_i^2 = 0$
$\sum x_i y_i - \bar{y} (n\bar{x}) + \hat{\beta}_1 (n\bar{x}^2) - \hat{\beta}_1 \sum x_i^2 = 0$
$\sum x_i y_i - n\bar{x}\bar{y} = \hat{\beta}_1 (\sum x_i^2 - n\bar{x}^2)$

Therefore, the formula for $\hat{\beta}_1$ is:

$\hat{\beta}_1 = \frac{\sum x_i y_i - n\bar{x}\bar{y}}{\sum x_i^2 - n\bar{x}^2}$

This can also be expressed using covariance and variance:

$\hat{\beta}_1 = \frac{Cov(X, Y)}{Var(X)}$

Where:
*   $Cov(X, Y) = \frac{1}{n-1} \sum_{i=1}^{n} (x_i - \bar{x})(y_i - \bar{y})$ (Sample covariance)
*   $Var(X) = \frac{1}{n-1} \sum_{i=1}^{n} (x_i - \bar{x})^2$ (Sample variance)

And the intercept is:

$\hat{\beta}_0 = \bar{y} - \hat{\beta}_1 \bar{x}$

**Textbook Reference:**
*   **Gupta & Kapoor (Fundamentals of mathematical statistics):** Section 14.4, "The Method of Least Squares". Provides detailed algebraic derivations.
*   **Miller (Statistics For Data Science):** Likely covers the estimation of regression coefficients using least squares in its chapters on regression.

#### 3.4 Matrix Formulation (Important for AI/ML and CO2)

For multiple linear regression, the model can be expressed in matrix form:

$Y = X\beta + \epsilon$

Where:
*   $Y$ is an $n \times 1$ vector of observed dependent variable values.
*   $X$ is an $n \times (p+1)$ matrix of independent variable values (with a column of 1s for the intercept).
*   $\beta$ is a $(p+1) \times 1$ vector of coefficients ($\beta_0, \beta_1, ..., \beta_p$).
*   $\epsilon$ is an $n \times 1$ vector of errors.

The Least Squares objective is to minimize the squared Euclidean norm of the error vector:

$SSR = ||\epsilon||^2 = \epsilon^T \epsilon = (Y - X\beta)^T (Y - X\beta)$

Taking the derivative with respect to $\beta$ and setting it to zero yields the **normal equations**:

$X^T X \hat{\beta} = X^T Y$

To solve for $\hat{\beta}$, we multiply by the inverse of $X^T X$ (assuming $X^T X$ is invertible):

$\hat{\beta} = (X^T X)^{-1} X^T Y$

This matrix form is fundamental in machine learning libraries and is more computationally efficient for multiple regression.

**Textbook Reference:**
*   **Strang (Introduction to Linear Algebra):** Chapter 6, "Orthogonality". This chapter is crucial for understanding the matrix formulation and its geometric interpretation, including the projection onto the column space of X.
*   **Deisenroth, Faisal, & Ong (Mathematics for machine learning):** Chapter 6, "Linear Regression". This chapter specifically covers the matrix formulation of linear regression and its solution using the normal equations.
*   **Blum, Hopcroft, & Kannan (Foundations of Data Science):** May touch upon linear algebra as a foundation for data analysis, including regression.

---

### 4. Assumptions of Linear Regression

For the Ordinary Least Squares (OLS) estimates to be the Best Linear Unbiased Estimators (BLUE), several assumptions need to hold:

1.  **Linearity:** The relationship between independent and dependent variables is linear.
2.  **Independence of Errors:** The errors ($\epsilon_i$) are independent of each other.
3.  **Homoscedasticity:** The variance of the errors is constant for all values of the independent variables ($\text{Var}(\epsilon_i) = \sigma^2$).
4.  **Normality of Errors:** The errors are normally distributed with a mean of zero ($\epsilon_i \sim N(0, \sigma^2)$).
5.  **No perfect multicollinearity:** In multiple regression, no independent variable is a perfect linear combination of other independent variables.

**Textbook Reference:**
*   **Gupta & Kapoor (Fundamentals of mathematical statistics):** Discusses the assumptions of the general linear model in detail.
*   **Fernandez-Granda (Probability and Statistics for Data Science):** Likely covers these assumptions when introducing statistical modeling.

---

### 5. Interpreting Linear Regression Results

#### 5.1 Coefficients ($\hat{\beta}_0, \hat{\beta}_1$)

*   $\hat{\beta}_1$: Represents the estimated change in the dependent variable ($Y$) for a one-unit increase in the independent variable ($X$), holding other variables constant.
*   $\hat{\beta}_0$: Represents the estimated value of the dependent variable ($Y$) when all independent variables are zero. This interpretation is only meaningful if $X=0$ is within the range of the observed data and makes practical sense.

#### 5.2 Goodness of Fit

*   **R-squared ($R^2$):** The coefficient of determination. It represents the proportion of the variance in the dependent variable that is predictable from the independent variable(s).
    *   $R^2 = \frac{SSR - SSE}{SSR}$ or $R^2 = 1 - \frac{SSE}{SST}$, where $SSE = \sum (y_i - \hat{y}_i)^2$ and $SST = \sum (y_i - \bar{y})^2$.
    *   $R^2$ ranges from 0 to 1. A higher $R^2$ indicates a better fit.
*   **Adjusted R-squared:** For multiple regression, it adjusts $R^2$ for the number of predictors in the model. It penalizes the addition of unnecessary variables.
*   **Root Mean Squared Error (RMSE):** The standard deviation of the residuals. It measures the average magnitude of the errors.

**Textbook Reference:**
*   **Gupta & Kapoor (Fundamentals of mathematical statistics):** Chapters on correlation and regression will cover measures of association and goodness of fit.
*   **Miller (Statistics For Data Science):** Will likely dedicate sections to interpreting regression outputs and model evaluation metrics like R-squared.

---

### 6. Connection to AI/Data Science and Course Outcomes

*   **CO1 (Apply ML algorithms):** Linear regression is a fundamental supervised learning algorithm. Understanding it is crucial for applying more complex models.
*   **CO2 (Apply advanced mathematical concepts):** The matrix formulation of linear regression directly utilizes linear algebra concepts like matrix multiplication, inversion, and transpose, as emphasized by Strang.
*   **CO3 (Analyze and interpret data using statistical methods):** Linear regression is a primary tool for correlation and regression analysis, allowing us to understand relationships and make predictions based on data.
*   **CO4 (Integrate statistical approaches and ML techniques):** Linear regression bridges the gap between statistical modeling and machine learning, forming the basis for many advanced techniques.

**Textbook Reference:**
*   **Géron (Hands-on machine learning):** Chapter 4, "Training Linear Models". This chapter provides a practical implementation of linear regression using Scikit-Learn, connecting the mathematical concepts to code.
*   **Cielen, Meysman & Kelleher (Introducing data science):** Likely covers linear regression as a core data science technique for understanding relationships and making predictions.

---

### 7. Practical Example: Predicting House Prices

Let's say we want to predict the price of a house based on its size (in square feet).

**Data:**
| Size (sq ft) | Price ($) |
| :----------- | :-------- |
| 1000         | 150,000   |
| 1200         | 180,000   |
| 1500         | 220,000   |
| 1800         | 260,000   |
| 2000         | 300,000   |

**Steps:**

1.  **Calculate means:**
    $\bar{x} = (1000 + 1200 + 1500 + 1800 + 2000) / 5 = 1500$
    $\bar{y} = (150,000 + 180,000 + 220,000 + 260,000 + 300,000) / 5 = 220,000$

2.  **Calculate $\sum x_i y_i$, $\sum x_i^2$:**
    *   $\sum x_i y_i = (1000 \times 150000) + (1200 \times 180000) + ... = 1,650,000,000$
    *   $\sum x_i^2 = 1000^2 + 1200^2 + ... = 13,150,000$

3.  **Calculate $\hat{\beta}_1$:**
    $\hat{\beta}_1 = \frac{1,650,000,000 - 5 \times 1500 \times 220,000}{13,150,000 - 5 \times 1500^2} = \frac{1,650,000,000 - 1,650,000,000}{13,150,000 - 11,250,000} = \frac{0}{1,900,000}$ - **Wait, this example data is perfectly linear, which is rare. Let's adjust.**

**Revised Data (with some variation):**
| Size (sq ft) | Price ($) |
| :----------- | :-------- |
| 1000         | 150,000   |
| 1200         | 170,000   |
| 1500         | 220,000   |
| 1800         | 250,000   |
| 2000         | 310,000   |

**Recalculate:**
*   $\bar{x} = 1500$
*   $\bar{y} = 220,000$
*   $\sum x_i y_i = (1000 \times 150000) + (1200 \times 170000) + (1500 \times 220000) + (1800 \times 250000) + (2000 \times 310000)$
    $= 150,000,000 + 204,000,000 + 330,000,000 + 450,000,000 + 620,000,000 = 1,754,000,000$
*   $\sum x_i^2 = 1000^2 + 1200^2 + 1500^2 + 1800^2 + 2000^2 = 1,000,000 + 1,440,000 + 2,250,000 + 3,240,000 + 4,000,000 = 11,930,000$

$\hat{\beta}_1 = \frac{1,754,000,000 - 5 \times 1500 \times 220,000}{11,930,000 - 5 \times 1500^2}$
$\hat{\beta}_1 = \frac{1,754,000,000 - 1,650,000,000}{11,930,000 - 11,250,000} = \frac{104,000,000}{680,000} \approx 152.94$

4.  **Calculate $\hat{\beta}_0$:**
    $\hat{\beta}_0 = \bar{y} - \hat{\beta}_1 \bar{x} = 220,000 - 152.94 \times 1500$
    $\hat{\beta}_0 = 220,000 - 229,410 \approx -9,410$

**Regression Equation:**
$\text{Price} = -9,410 + 152.94 \times \text{Size}$

**Interpretation:**
*   For every additional square foot, the price of the house is estimated to increase by approximately $152.94.
*   The intercept of $-9,410$ suggests that a house with 0 square feet would have a negative price, which is nonsensical in this context. This highlights that extrapolation outside the data range can be misleading.

---

### 8. Practice Questions

1.  **Concept:** What is the primary goal of the Least Squares Method in linear regression?
    *   **Answer:** To minimize the sum of the squared differences between the observed values of the dependent variable and the values predicted by the regression line.

2.  **Calculation (Simple Linear Regression):** Given the following data points $(X, Y)$: $(1, 2), (2, 4), (3, 5), (4, 4), (5, 5)$.
    *   Calculate $\bar{x}$ and $\bar{y}$.
    *   Calculate the estimated coefficients $\hat{\beta}_0$ and $\hat{\beta}_1$ using the least squares formulas.
    *   Write the equation of the regression line.
    *   **Answer:**
        *   $\bar{x} = 3$, $\bar{y} = 4$
        *   $\sum x_i y_i = 1(2) + 2(4) + 3(5) + 4(4) + 5(5) = 2 + 8 + 15 + 16 + 25 = 66$
        *   $\sum x_i^2 = 1^2 + 2^2 + 3^2 + 4^2 + 5^2 = 1 + 4 + 9 + 16 + 25 = 55$
        *   $\hat{\beta}_1 = \frac{66 - 5 \times 3 \times 4}{55 - 5 \times 3^2} = \frac{66 - 60}{55 - 45} = \frac{6}{10} = 0.6$
        *   $\hat{\beta}_0 = \bar{y} - \hat{\beta}_1 \bar{x} = 4 - 0.6 \times 3 = 4 - 1.8 = 2.2$
        *   Regression Line: $Y = 2.2 + 0.6X$

3.  **Matrix Form:** If $X = \begin{pmatrix} 1 & 2 \\ 1 & 3 \end{pmatrix}$ and $Y = \begin{pmatrix} 5 \\ 7 \end{pmatrix}$, calculate the estimated coefficient vector $\hat{\beta}$ using the normal equations $\hat{\beta} = (X^T X)^{-1} X^T Y$.
    *   **Answer:**
        *   $X^T = \begin{pmatrix} 1 & 1 \\ 2 & 3 \end{pmatrix}$
        *   $X^T X = \begin{pmatrix} 1 & 1 \\ 2 & 3 \end{pmatrix} \begin{pmatrix} 1 & 2 \\ 1 & 3 \end{pmatrix} = \begin{pmatrix} 1(1)+1(1) & 1(2)+1(3) \\ 2(1)+3(1) & 2(2)+3(3) \end{pmatrix} = \begin{pmatrix} 2 & 5 \\ 5 & 13 \end{pmatrix}$
        *   Determinant of $X^T X = (2 \times 13) - (5 \times 5) = 26 - 25 = 1$
        *   $(X^T X)^{-1} = \frac{1}{1} \begin{pmatrix} 13 & -5 \\ -5 & 2 \end{pmatrix} = \begin{pmatrix} 13 & -5 \\ -5 & 2 \end{pmatrix}$
        *   $X^T Y = \begin{pmatrix} 1 & 1 \\ 2 & 3 \end{pmatrix} \begin{pmatrix} 5 \\ 7 \end{pmatrix} = \begin{pmatrix} 1(5)+1(7) \\ 2(5)+3(7) \end{pmatrix} = \begin{pmatrix} 12 \\ 31 \end{pmatrix}$
        *   $\hat{\beta} = \begin{pmatrix} 13 & -5 \\ -5 & 2 \end{pmatrix} \begin{pmatrix} 12 \\ 31 \end{pmatrix} = \begin{pmatrix} 13(12) - 5(31) \\ -5(12) + 2(31) \end{pmatrix} = \begin{pmatrix} 156 - 155 \\ -60 + 62 \end{pmatrix} = \begin{pmatrix} 1 \\ 2 \end{pmatrix}$
        *   So, $\hat{\beta}_0 = 1$ and $\hat{\beta}_1 = 2$. The regression line is $Y = 1 + 2X$.

---

### 9. Important Points to Remember

*   **Linear regression models linear relationships.** If the true relationship is non-linear, linear regression may not be suitable.
*   **The Least Squares Method finds the line of best fit by minimizing the sum of squared errors.** This is a common and powerful optimization technique.
*   **The matrix formulation $\hat{\beta} = (X^T X)^{-1} X^T Y$ is crucial for understanding and implementing multiple linear regression in software.**
*   **Always check the assumptions of linear regression.** Violations can lead to biased or inefficient estimates.
*   **Interpreting coefficients and R-squared is essential for drawing meaningful conclusions from the model.**
*   **Be cautious about extrapolation.** Predictions outside the range of the training data can be unreliable.
*   **Correlation does not imply causation.** While regression shows associations, it doesn't prove that one variable causes another.

---

This concludes the overview of linear regression using the least squares method. This foundational topic is critical for many subsequent machine learning and data science techniques.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=clVwS3P9s84) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=9GMBpZZtjXM) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=KzE_56Hk5B8) |
