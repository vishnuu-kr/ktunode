---
title: "regression models"
subject: "INTRODUCTION TO ARTIFICIAL INTELLIGENCE AND DATA 
SCIENCE"
module: "Module 1: Introduction to AI and Machine Learning : Basics of Machine Learning"
branch: "Electronics and Communication Engineering"
semester: 3
topicId: "68a5c45db09ce205780fe33b"
status: "completed"
scrapedAt: "2026-05-23T17:45:35.188Z"
---
# Module 1: Introduction to AI and Machine Learning - Basics of Machine Learning

## Topic: Regression Models

---

### 1. Learning Outcomes Covered

This topic contributes to the following learning outcomes:

*   **CO3: Analyze and interpret data using statistical methods including descriptive statistics, correlation, and regression analysis to derive meaningful insights and make informed decisions.**
    *   Regression models are a core statistical method for analyzing relationships between variables and making predictions, directly aligning with this outcome.
*   **CO4: Integrate statistical approaches and machine learning techniques to ensure practically feasible solutions in engineering contexts.**
    *   Regression is a fundamental machine learning technique rooted in statistical principles, crucial for building predictive models in engineering.

---

### 2. Key Concepts and Definitions

Regression is a statistical and machine learning technique used to model the relationship between a dependent variable (the variable we want to predict) and one or more independent variables (the variables used for prediction). The goal is to find a function that best describes how the independent variables influence the dependent variable.

**Core Components:**

*   **Dependent Variable (Target Variable, Response Variable):** The variable we are trying to predict or explain. It is typically a continuous numerical value.
    *   *Example:* Predicting house prices, temperature, sales figures.
*   **Independent Variable(s) (Predictor Variable(s), Feature(s)):** The variable(s) used to predict the dependent variable. These can be numerical or categorical.
    *   *Example:* For house prices, independent variables could be size (sq ft), number of bedrooms, location.
*   **Model:** The mathematical function or equation that describes the relationship between the independent and dependent variables.
*   **Parameters/Coefficients:** The values learned by the model that define the relationship. These are adjusted during the training process.
*   **Error/Residual:** The difference between the actual value of the dependent variable and the value predicted by the model. Regression aims to minimize this error.

**Types of Regression:**

Regression can be broadly categorized into two main types:

*   **Simple Linear Regression:** Models the relationship between a single independent variable and a dependent variable using a straight line.
*   **Multiple Linear Regression:** Models the relationship between two or more independent variables and a dependent variable using a linear equation.

---

### 3. Simple Linear Regression

**Concept:**
Simple Linear Regression assumes a linear relationship between one independent variable ($X$) and one dependent variable ($Y$). The relationship is expressed as:

$Y = \beta_0 + \beta_1 X + \epsilon$

Where:
*   $Y$: Dependent variable
*   $X$: Independent variable
*   $\beta_0$: Intercept (the value of $Y$ when $X$ is 0)
*   $\beta_1$: Slope (the change in $Y$ for a one-unit change in $X$)
*   $\epsilon$: Error term (represents the unexplained variation in $Y$)

**Goal:** To estimate the coefficients ($\beta_0$ and $\beta_1$) that best fit the data.

**Method: Ordinary Least Squares (OLS)**
OLS is the most common method for estimating the coefficients. It works by minimizing the sum of the squared residuals (the difference between the actual $Y$ and the predicted $\hat{Y}$).

*   **Predicted Value:** $\hat{Y} = \beta_0 + \beta_1 X$
*   **Residual:** $e = Y - \hat{Y}$
*   **Sum of Squared Residuals (SSR):** $SSR = \sum_{i=1}^{n} e_i^2 = \sum_{i=1}^{n} (Y_i - (\beta_0 + \beta_1 X_i))^2$

OLS finds the values of $\beta_0$ and $\beta_1$ that minimize SSR.

**Formulas for Coefficients (derived using calculus):**

$\beta_1 = \frac{\sum_{i=1}^{n} (X_i - \bar{X})(Y_i - \bar{Y})}{\sum_{i=1}^{n} (X_i - \bar{X})^2}$

$\beta_0 = \bar{Y} - \beta_1 \bar{X}$

Where:
*   $\bar{X}$ is the mean of the independent variable.
*   $\bar{Y}$ is the mean of the dependent variable.

**Example:**
Predicting a student's exam score ($Y$) based on the number of hours they studied ($X$).

| Hours Studied (X) | Exam Score (Y) |
| :---------------- | :------------- |
| 2                 | 65             |
| 3                 | 70             |
| 5                 | 85             |
| 7                 | 90             |
| 8                 | 95             |

*   Calculate $\bar{X} = (2+3+5+7+8)/5 = 5$
*   Calculate $\bar{Y} = (65+70+85+90+95)/5 = 81$
*   Calculate deviations from mean and their products:
    *   $(X_i - \bar{X})$: -3, -2, 0, 2, 3
    *   $(Y_i - \bar{Y})$: -16, -11, 4, 9, 14
    *   $(X_i - \bar{X})(Y_i - \bar{Y})$: 48, 22, 0, 18, 42
    *   Sum of $(X_i - \bar{X})(Y_i - \bar{Y}) = 48 + 22 + 0 + 18 + 42 = 130$
    *   $(X_i - \bar{X})^2$: 9, 4, 0, 4, 9
    *   Sum of $(X_i - \bar{X})^2 = 9 + 4 + 0 + 4 + 9 = 26$
*   $\beta_1 = 130 / 26 = 5$
*   $\beta_0 = 81 - 5 * 5 = 81 - 25 = 56$

The regression equation is: $\hat{Y} = 56 + 5X$

**Interpretation:** For every additional hour studied, the exam score is predicted to increase by 5 points. The baseline score (when studying 0 hours) is predicted to be 56.

**Evaluation Metrics (for Simple Linear Regression):**

*   **R-squared ($R^2$):** The proportion of the variance in the dependent variable that is predictable from the independent variable(s). Ranges from 0 to 1. Higher is better.
    *   $R^2 = 1 - \frac{SSR}{SST}$ where $SST = \sum_{i=1}^{n} (Y_i - \bar{Y})^2$ (Total Sum of Squares)
*   **Root Mean Squared Error (RMSE):** The standard deviation of the residuals (prediction errors). Lower is better.
    *   $RMSE = \sqrt{\frac{1}{n} \sum_{i=1}^{n} (Y_i - \hat{Y}_i)^2}$

---

### 4. Multiple Linear Regression

**Concept:**
Multiple Linear Regression extends simple linear regression to include two or more independent variables. It models a linear relationship between these variables and the dependent variable.

The relationship is expressed as:

$Y = \beta_0 + \beta_1 X_1 + \beta_2 X_2 + \dots + \beta_k X_k + \epsilon$

Where:
*   $Y$: Dependent variable
*   $X_1, X_2, \dots, X_k$: Independent variables
*   $\beta_0$: Intercept
*   $\beta_1, \beta_2, \dots, \beta_k$: Coefficients for each independent variable, representing the change in $Y$ for a one-unit change in the respective $X$, holding other variables constant.
*   $\epsilon$: Error term

**Matrix Representation (highly recommended for understanding and implementation):**

The model can be represented in matrix form:

$Y = X\beta + \epsilon$

Where:
*   $Y$: A vector of the dependent variable values ($n \times 1$).
*   $X$: A matrix of the independent variable values, with a column of ones added for the intercept ($n \times (k+1)$).
*   $\beta$: A vector of coefficients ($\beta_0, \beta_1, \dots, \beta_k$) ($(k+1) \times 1$).
*   $\epsilon$: A vector of error terms ($n \times 1$).

**Estimation using OLS (Matrix Form):**
The OLS solution for $\beta$ is given by:

$\hat{\beta} = (X^T X)^{-1} X^T Y$

This formula leverages linear algebra to efficiently calculate the best-fit coefficients.

**Example:**
Predicting a house price ($Y$) based on its size in square feet ($X_1$) and the number of bedrooms ($X_2$).

| House Price (Y) | Size (sq ft) ($X_1$) | Bedrooms ($X_2$) |
| :-------------- | :------------------- | :--------------- |
| 250,000         | 1500                 | 3                |
| 300,000         | 1800                 | 4                |
| 200,000         | 1200                 | 2                |
| 400,000         | 2200                 | 4                |
| 350,000         | 2000                 | 3                |

The model would be: $\hat{Y} = \beta_0 + \beta_1 X_1 + \beta_2 X_2$

To use the matrix formula, we construct:
$Y = \begin{bmatrix} 250000 \\ 300000 \\ 200000 \\ 400000 \\ 350000 \end{bmatrix}$, $X = \begin{bmatrix} 1 & 1500 & 3 \\ 1 & 1800 & 4 \\ 1 & 1200 & 2 \\ 1 & 2200 & 4 \\ 1 & 2000 & 3 \end{bmatrix}$

Then, calculate $\hat{\beta}$ using the formula.

**Interpretation:**
*   $\beta_1$ would indicate the estimated change in house price for each additional square foot, holding the number of bedrooms constant.
*   $\beta_2$ would indicate the estimated change in house price for each additional bedroom, holding the size constant.

**Evaluation Metrics (for Multiple Linear Regression):**
*   **R-squared ($R^2$):** Same concept as simple linear regression, but now it represents the proportion of variance explained by all independent variables combined.
*   **Adjusted R-squared:** Similar to $R^2$, but it penalizes the addition of irrelevant independent variables. It is a better metric when comparing models with different numbers of predictors.
*   **RMSE:** Same concept as in simple linear regression.
*   **P-values:** Used to test the statistical significance of each independent variable. A low p-value (typically < 0.05) suggests the variable is likely to have a real effect on the dependent variable.

---

### 5. Assumptions of Linear Regression

For the OLS method to provide unbiased and efficient estimates, several assumptions should ideally hold:

1.  **Linearity:** The relationship between the independent and dependent variables is linear.
2.  **Independence of Errors:** The error terms ($\epsilon_i$) are independent of each other. This means the error for one data point does not affect the error for another.
3.  **Homoscedasticity (Constant Variance of Errors):** The variance of the error terms is constant across all levels of the independent variables.
4.  **Normality of Errors:** The error terms are normally distributed.
5.  **No Multicollinearity:** Independent variables are not highly correlated with each other. High multicollinearity can make coefficient estimates unstable and difficult to interpret.

**Importance:** Violating these assumptions can lead to biased estimates, inaccurate predictions, and invalid statistical inferences.

---

### 6. Polynomial Regression

**Concept:**
When the relationship between variables is not linear, we can use polynomial regression. It fits a non-linear model to the data by adding polynomial terms of the independent variables.

For example, a quadratic regression model with one independent variable:

$Y = \beta_0 + \beta_1 X + \beta_2 X^2 + \epsilon$

This is still a linear model in terms of the *coefficients* ($\beta_0, \beta_1, \beta_2$), so it can be solved using OLS by treating $X^2$ as a new independent variable.

**Example:**
Predicting crop yield ($Y$) based on fertilizer amount ($X$). The relationship might be positive up to a point, then decrease due to over-fertilization. A quadratic model could capture this.

**Considerations:**
*   Increasing the degree of the polynomial can lead to overfitting, where the model fits the training data too closely and performs poorly on new data.
*   Choosing the right degree of the polynomial is crucial.

---

### 7. Regularized Regression (Brief Introduction)

When dealing with a large number of features or multicollinearity, standard OLS can be prone to overfitting. Regularization techniques add a penalty term to the cost function to shrink the coefficients towards zero.

*   **Ridge Regression (L2 Regularization):** Adds a penalty proportional to the square of the magnitude of coefficients. It shrinks coefficients but rarely sets them to exactly zero.
*   **Lasso Regression (L1 Regularization):** Adds a penalty proportional to the absolute value of the magnitude of coefficients. It can shrink coefficients to exactly zero, effectively performing feature selection.

These techniques are more advanced and are typically covered in later modules, but it's good to be aware of them as extensions to basic regression.

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=gI-qXk7XojA) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=Q-tL8_628gE) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=APPIZ2S8YmY) |


### 8. Textbooks and Reference Material Connections

*   **Introduction to Linear Algebra by Gilbert Strang:** Essential for understanding the matrix formulation ($X^T X)^{-1} X^T Y$ and the underlying mathematical operations involved in solving linear systems. (CO2)
*   **Hands-on machine learning with Scikit-Learn, Keras, and TensorFlow by Aurélien Géron:** Provides practical implementations of regression models using Python libraries, covering concepts like OLS, Ridge, Lasso, and evaluation metrics. (CO1, CO3, CO4)
*   **Mathematics for machine learning by Deisenroth, Marc Peter, A. Aldo Faisal, and Cheng Soon Ong:** Offers a rigorous mathematical foundation for linear regression, including derivations of OLS solutions and discussions on matrix algebra. (CO2, CO3)
*   **Fundamentals of mathematical statistics by Gupta, S. C., and V. K. Kapoor:** Covers the statistical underpinnings of regression, including hypothesis testing for coefficients, confidence intervals, and detailed explanations of assumptions. (CO3)
*   **Introducing data science: big data, machine learning, and more, using Python tools by Cielen, Davy, and Arno Meysman:** Introduces regression as a foundational data science and machine learning technique with practical Python examples. (CO1, CO3, CO4)
*   **Statistics For Data Science by James D. Miller:** Provides a clear and accessible overview of regression, its applications, and how to interpret results, making it suitable for understanding the practical aspects of CO3.
*   **Probability and Statistics For Data Science by Carlos Fernandez-Granda:** Explores the probabilistic foundations of regression models and their use in making predictions and inferences, aligning with CO3.

---

### 9. Practice Questions and Exercises

**Question 1:**
In simple linear regression, what does the coefficient $\beta_1$ represent?
*   a) The intercept of the regression line.
*   b) The estimated value of the dependent variable when the independent variable is zero.
*   c) The estimated change in the dependent variable for a one-unit increase in the independent variable.
*   d) The proportion of variance in the dependent variable explained by the independent variable.

**Answer:** c) The estimated change in the dependent variable for a one-unit increase in the independent variable.

**Question 2:**
If a multiple linear regression model predicts house price ($Y$) based on size ($X_1$) and number of bedrooms ($X_2$), and the estimated equation is $\hat{Y} = 50000 + 100X_1 + 15000X_2$, what is the interpretation of the coefficient $15000$?
*   a) For every extra square foot, the price increases by $15000$.
*   b) For every extra bedroom, the price increases by $15000$, holding size constant.
*   c) The base price of a house with no size and no bedrooms is $15000$.
*   d) The total increase in price due to bedrooms is $15000$.

**Answer:** b) For every extra bedroom, the price increases by $15000$, holding size constant.

**Question 3:**
Which of the following is NOT a key assumption of linear regression when using OLS?
*   a) Linearity of the relationship.
*   b) Independence of errors.
*   c) Multicollinearity between independent variables.
*   d) Homoscedasticity of errors.

**Answer:** c) Multicollinearity between independent variables. (High multicollinearity is a violation, not an assumption).

**Question 4:**
You are building a model to predict student GPA ($Y$) based on hours spent on social media per week ($X$). You collect data and fit a simple linear regression model, obtaining the equation $\hat{Y} = 3.5 - 0.05X$.
*   a) Interpret the intercept ($\beta_0 = 3.5$).
*   b) Interpret the slope ($\beta_1 = -0.05$).
*   c) Predict the GPA of a student who spends 10 hours per week on social media.
*   d) If the $R^2$ value is 0.30, what does this mean?

**Answer:**
*   a) The intercept ($\beta_0 = 3.5$) suggests that a student who spends 0 hours on social media is predicted to have a GPA of 3.5.
*   b) The slope ($\beta_1 = -0.05$) indicates that for every additional hour a student spends on social media per week, their GPA is predicted to decrease by 0.05 points, assuming this linear relationship holds.
*   c) $\hat{Y} = 3.5 - 0.05 * 10 = 3.5 - 0.5 = 3.0$. The predicted GPA is 3.0.
*   d) An $R^2$ of 0.30 means that 30% of the variance in student GPAs can be explained by the number of hours spent on social media. The remaining 70% is due to other factors not included in the model or random variation.

---

### 10. Important Points to Remember

*   **Regression is for prediction and understanding relationships.** It helps us quantify how changes in independent variables affect a dependent variable.
*   **Linear regression assumes a linear relationship.** If the relationship is clearly non-linear, consider polynomial regression or other non-linear models.
*   **OLS minimizes the sum of squared errors.** This is a fundamental concept behind how the best-fit line is found.
*   **Matrix algebra is crucial for understanding and implementing multiple linear regression.** The formula $\hat{\beta} = (X^T X)^{-1} X^T Y$ is powerful.
*   **Always check the assumptions of linear regression.** Violations can lead to unreliable results.
*   **$R^2$ measures goodness of fit, but it's not the only metric.** RMSE and other metrics are also important for evaluating model performance.
*   **Correlation does not imply causation.** Regression can show a strong association, but it doesn't prove that changes in the independent variable *cause* changes in the dependent variable.

---

### 11. Knowledge Levels Alignment

*   **CO1 (Apply ML algorithms):** Understanding regression models is foundational to applying various supervised learning techniques. This topic provides the theoretical basis.
*   **CO2 (Apply advanced math):** Concepts like vector/matrix operations, mean, variance, and algebraic manipulation are directly applied when deriving and using regression formulas.
*   **CO3 (Analyze/interpret data with stats):** Regression analysis is a primary statistical method for data analysis and interpretation, making this topic central to this outcome.
*   **CO4 (Integrate stat/ML):** Regression models bridge statistics and machine learning, demonstrating how statistical principles are used to build predictive models.

---