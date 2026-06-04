---
title: "Regression: linear regression, logistic regression error functions in regression"
subject: "MACHINE LEARNING"
module: "Module 2: Regression: linear regression, logistic regression error functions in regression"
branch: "Electronics and Communication Engineering"
semester: 4
topicId: "68a5c45eb09ce205780fe625"
status: "completed"
scrapedAt: "2026-05-23T17:50:14.325Z"
---
## Machine Learning: Module 2 - Regression

### Topic: Regression: Linear Regression, Logistic Regression, and Error Functions in Regression

This module delves into two fundamental supervised learning algorithms: **Linear Regression** and **Logistic Regression**. We will explore their core concepts, how they work, and crucially, how we measure their performance using various **error functions**. This knowledge is essential for building predictive models that can accurately estimate continuous values (regression) and predict probabilities (classification, which logistic regression is often used for).

---

### Learning Outcomes:

Upon completion of this module, you will be able to:

*   Understand the principles and mathematical foundations of linear regression.
*   Understand the principles and mathematical foundations of logistic regression.
*   Differentiate between regression and classification tasks and when to apply each algorithm.
*   Explain and apply common error functions used in regression tasks (e.g., MSE, MAE, RMSE).
*   Evaluate the performance of regression models using these error functions.
*   Implement and train basic linear and logistic regression models using popular libraries.

---

### Course Outcomes Alignment:

*   **CO1 (K4): Analyze and apply supervised and unsupervised machine learning techniques...** This module directly addresses the supervised learning aspect by introducing regression and classification techniques, requiring analysis of their mechanisms and application.
*   **CO2 (K3): Develop, train, and optimize regression and classification models...** This is a primary focus of this module. We will cover developing and training both linear and logistic regression models, and understanding error functions is crucial for optimization.

---

### 1. Regression: An Overview

**Definition:** Regression is a type of **supervised learning** where the goal is to predict a **continuous numerical output** (also known as the target variable or dependent variable) based on one or more input features (independent variables).

**Key Concepts:**

*   **Dependent Variable (y):** The variable we are trying to predict. It's continuous (e.g., house price, temperature, stock value).
*   **Independent Variables (X):** The features or input variables that are used to predict the dependent variable. These can be numerical or categorical (though categorical variables often need to be encoded).
*   **Model:** The mathematical function that maps the independent variables to the dependent variable.

**Example:** Predicting the price of a house based on its size, number of bedrooms, and location. Here, house price is the dependent variable, and the other attributes are independent variables.

---

### 2. Linear Regression

**Definition:** Linear Regression is a fundamental algorithm that models the relationship between a dependent variable and one or more independent variables by fitting a linear equation to the observed data. The relationship is assumed to be linear, meaning a change in an independent variable results in a proportional change in the dependent variable.

**Types of Linear Regression:**

*   **Simple Linear Regression:** Involves a single independent variable.
    *   **Equation:** $y = \beta_0 + \beta_1 x + \epsilon$
        *   $y$: Dependent variable
        *   $x$: Independent variable
        *   $\beta_0$: Intercept (the value of y when x is 0)
        *   $\beta_1$: Slope (the change in y for a unit change in x)
        *   $\epsilon$: Error term (represents the unobserved factors that affect y)

*   **Multiple Linear Regression:** Involves two or more independent variables.
    *   **Equation:** $y = \beta_0 + \beta_1 x_1 + \beta_2 x_2 + ... + \beta_n x_n + \epsilon$
        *   $x_1, x_2, ..., x_n$: Independent variables
        *   $\beta_0, \beta_1, ..., \beta_n$: Coefficients (intercept and slopes for each independent variable)

**Goal of Linear Regression:** To find the "best-fit" line (or hyperplane in multiple dimensions) that minimizes the difference between the predicted values and the actual values.

**How it works (The Math):**

Linear regression typically uses a technique called **Ordinary Least Squares (OLS)** to find the optimal values for the coefficients ($\beta_0, \beta_1, ...$). OLS aims to minimize the **sum of the squared residuals** (the difference between the actual and predicted values).

**Key Concept: The Hypothesis Function (h(x))**

The hypothesis function represents the model's prediction for a given input.

*   **Simple Linear Regression:** $h_\theta(x) = \theta_0 + \theta_1 x$ (where $\theta$ are the parameters, equivalent to $\beta$)
*   **Multiple Linear Regression:** $h_\theta(x) = \theta_0 + \theta_1 x_1 + \theta_2 x_2 + ... + \theta_n x_n$
    *   Can be written in vector form: $h_\theta(x) = \theta^T x$, where $\theta$ and $x$ are vectors of parameters and features, respectively, and $x_0$ is implicitly 1 for the intercept term.

**Optimization:** The process of finding the values of $\theta$ that minimize the cost function.

---

### 3. Logistic Regression

**Definition:** Logistic Regression is a statistical model that models the probability of a binary outcome (0 or 1) as a function of one or more predictor variables. Despite its name, it is primarily used for **classification tasks**, not regression. It predicts the probability of an instance belonging to a particular class.

**Key Concepts:**

*   **Binary Classification:** The task of classifying data into one of two possible categories (e.g., spam/not spam, malignant/benign tumor, pass/fail).
*   **Sigmoid Function (or Logistic Function):** This function squashes any input value into a range between 0 and 1, making it suitable for representing probabilities.
    *   **Equation:** $g(z) = \frac{1}{1 + e^{-z}}$
        *   $z$: The linear combination of input features and weights.

**How it works (The Math):**

1.  **Linear Combination:** Similar to linear regression, logistic regression first computes a linear combination of the input features and their corresponding weights:
    $z = \theta_0 + \theta_1 x_1 + \theta_2 x_2 + ... + \theta_n x_n$
    *   In vector form: $z = \theta^T x$

2.  **Sigmoid Activation:** The result $z$ is then passed through the sigmoid function to get the predicted probability:
    $h_\theta(x) = g(z) = \frac{1}{1 + e^{-\theta^T x}}$
    *   $h_\theta(x)$ represents the probability that $y=1$ given $x$: $P(y=1 | x; \theta) = h_\theta(x)$
    *   Consequently, the probability that $y=0$ is $P(y=0 | x; \theta) = 1 - h_\theta(x)$.

**Decision Boundary:**

Logistic regression creates a decision boundary to separate the classes. This boundary is typically linear (a line in 2D, a plane in 3D, or a hyperplane in higher dimensions) defined by setting $h_\theta(x) = 0.5$ (which corresponds to $z = 0$).

**Classification:** Based on the predicted probability:
*   If $h_\theta(x) \geq 0.5$, predict class 1.
*   If $h_\theta(x) < 0.5$, predict class 0.

**Optimization:** The parameters ($\theta$) are typically optimized using **Gradient Descent**, but the cost function is different from linear regression.

---

### 4. Error Functions in Regression (Cost Functions)

**Definition:** Error functions (or cost functions or loss functions) quantify the difference between the predicted values and the actual target values. The goal of training a regression model is to minimize this error function by adjusting the model's parameters.

**Key Concepts:**

*   **Residual:** The difference between the actual value and the predicted value for a single data point: $residual = y_i - \hat{y}_i$
*   **Loss Function:** A function that measures the error for a single data point.
*   **Cost Function:** The average of the loss functions over all data points in the training set.

**Common Error Functions for Regression:**

#### 4.1. Mean Squared Error (MSE)

*   **Description:** MSE calculates the average of the squared differences between the predicted and actual values. Squaring the errors penalizes larger errors more heavily than smaller ones.
*   **Formula:**
    $MSE = \frac{1}{n} \sum_{i=1}^{n} (y_i - \hat{y}_i)^2$
    Where:
    *   $y_i$: Actual value for the i-th data point
    *   $\hat{y}_i$: Predicted value for the i-th data point
    *   $n$: Number of data points
*   **Pros:**
    *   Mathematically convenient for optimization (differentiable everywhere).
    *   Penalizes larger errors significantly.
*   **Cons:**
    *   Sensitive to outliers. A single large outlier can disproportionately affect the MSE.
    *   The units of MSE are squared units of the target variable (e.g., dollars squared), which can be difficult to interpret.
*   **Usage:** Commonly used as the cost function in Linear Regression during optimization (e.g., by Ordinary Least Squares).

#### 4.2. Root Mean Squared Error (RMSE)

*   **Description:** RMSE is the square root of the MSE. It brings the error metric back to the original units of the target variable, making it more interpretable.
*   **Formula:**
    $RMSE = \sqrt{\frac{1}{n} \sum_{i=1}^{n} (y_i - \hat{y}_i)^2} = \sqrt{MSE}$
*   **Pros:**
    *   Interpretable in the original units of the target variable.
    *   Still penalizes larger errors more heavily.
*   **Cons:**
    *   Still sensitive to outliers.
*   **Usage:** A very common metric for evaluating regression models.

#### 4.3. Mean Absolute Error (MAE)

*   **Description:** MAE calculates the average of the absolute differences between the predicted and actual values. It treats all errors equally, regardless of their magnitude.
*   **Formula:**
    $MAE = \frac{1}{n} \sum_{i=1}^{n} |y_i - \hat{y}_i|$
*   **Pros:**
    *   Less sensitive to outliers compared to MSE/RMSE.
    *   Interpretable in the original units of the target variable.
*   **Cons:**
    *   Not differentiable at zero, which can pose minor challenges for some optimization algorithms (though methods exist to handle this).
    *   Does not penalize large errors as much as MSE/RMSE.
*   **Usage:** Useful when you want to be robust to outliers or when the magnitude of error is linearly related to the cost.

#### 4.4. R-squared ($\text{R}^2$) Score (Coefficient of Determination)

*   **Description:** $\text{R}^2$ measures the proportion of the variance in the dependent variable that is predictable from the independent variables. It indicates how well the regression model fits the observed data.
*   **Formula:**
    $R^2 = 1 - \frac{\text{Sum of Squares of Residuals (SSR)}}{\text{Total Sum of Squares (SST)}}$
    $R^2 = 1 - \frac{\sum_{i=1}^{n} (y_i - \hat{y}_i)^2}{\sum_{i=1}^{n} (y_i - \bar{y})^2}$
    Where:
    *   $y_i$: Actual value
    *   $\hat{y}_i$: Predicted value
    *   $\bar{y}$: Mean of the actual values
*   **Interpretation:**
    *   $\text{R}^2$ ranges from $-\infty$ to 1.
    *   $\text{R}^2 = 1$: The model explains all the variability of the response data around its mean.
    *   $\text{R}^2 = 0$: The model explains none of the variability of the response data around its mean.
    *   $\text{R}^2 < 0$: The model performs worse than a simple horizontal line at the mean of the data (usually indicates a poorly fitting model).
*   **Pros:**
    *   Provides a good measure of how well the model fits the data.
    *   Easily comparable across different datasets or models.
*   **Cons:**
    *   Can be misleading in complex models with many features, as adding more features can increase $\text{R}^2$ even if they don't improve the model's actual predictive power (this leads to the concept of Adjusted $\text{R}^2$).
    *   Does not indicate bias or whether the model is appropriate for the data.
*   **Usage:** A key metric for evaluating the overall goodness-of-fit of a regression model.

---

### 5. Cost Function for Logistic Regression

**Definition:** For logistic regression, the standard Mean Squared Error (MSE) is not suitable. If we were to use MSE, the cost function would be **non-convex**, making it very difficult to find the global minimum using gradient descent. Instead, a specialized cost function called **Binary Cross-Entropy Loss** (also known as Log Loss) is used.

**Binary Cross-Entropy Loss:**

*   **Description:** This loss function penalizes incorrect predictions based on how far the predicted probability is from the actual outcome (0 or 1). It is derived from Maximum Likelihood Estimation.
*   **For a single training example (x, y):**
    *   If $y=1$ (actual class is 1): $Cost(h_\theta(x), y) = -\log(h_\theta(x))$
        *   If $h_\theta(x)$ is close to 1 (correct prediction), the cost is close to 0.
        *   If $h_\theta(x)$ is close to 0 (incorrect prediction), the cost is very large.
    *   If $y=0$ (actual class is 0): $Cost(h_\theta(x), y) = -\log(1 - h_\theta(x))$
        *   If $h_\theta(x)$ is close to 0 (correct prediction), the cost is close to 0.
        *   If $h_\theta(x)$ is close to 1 (incorrect prediction), the cost is very large.

*   **Combined Formula:**
    $Cost(h_\theta(x), y) = -[y \log(h_\theta(x)) + (1-y) \log(1-h_\theta(x))]$

*   **Overall Cost Function (J($\theta$)):** The average of the individual costs over all training examples.
    $J(\theta) = \frac{1}{n} \sum_{i=1}^{n} -[y^{(i)} \log(h_\theta(x^{(i)})) + (1-y^{(i)}) \log(1-h_\theta(x^{(i)}))]$

*   **Pros:**
    *   Convex, ensuring that gradient descent can find the global minimum.
    *   Effectively penalizes confident wrong predictions.
*   **Cons:**
    *   Requires $h_\theta(x)$ to be strictly between 0 and 1 to avoid undefined logarithms.

---

### 6. Practice Questions & Exercises

**Question 1:**
You are building a model to predict the number of hours a student will study based on the number of assignments they have.
a) Is this a regression or classification problem?
b) What type of linear regression would you use (simple or multiple)?
c) Write down the hypothesis function for this problem.

**Question 2:**
You are classifying emails as "spam" or "not spam". You use logistic regression.
a) What is the output of the sigmoid function?
b) What is the range of the output of the logistic regression model?
c) If the logistic regression model outputs a probability of 0.8 for an email, what class would it predict if your decision threshold is 0.5?

**Question 3:**
Consider the following actual and predicted values for a regression problem:
Actual: [10, 12, 15, 18, 20]
Predicted: [11, 13, 14, 17, 22]

Calculate:
a) Mean Squared Error (MSE)
b) Mean Absolute Error (MAE)
c) Root Mean Squared Error (RMSE)

**Question 4:**
Explain why MSE is preferred over MAE for training linear regression models using gradient descent.

**Question 5:**
What does an $\text{R}^2$ score of 0.75 mean? What does an $\text{R}^2$ score of -0.1 mean?

---

### 7. Answers to Practice Questions

**Answer 1:**
a) This is a **regression** problem because you are predicting a continuous numerical output (hours of study).
b) You would use **simple linear regression** as there is only one independent variable (number of assignments).
c) $y = \beta_0 + \beta_1 x + \epsilon$, where $y$ is the number of hours studied and $x$ is the number of assignments. The hypothesis function is $\hat{y} = \beta_0 + \beta_1 x$.

**Answer 2:**
a) The sigmoid function outputs a value between 0 and 1.
b) The output of the logistic regression model represents the **probability** of belonging to class 1, so it is between 0 and 1.
c) If the probability is 0.8 and the decision threshold is 0.5, it would predict class **1 (spam)**.

**Answer 3:**
Actual: [10, 12, 15, 18, 20]
Predicted: [11, 13, 14, 17, 22]
Residuals ($y_i - \hat{y}_i$): [-1, -1, 1, 1, -2]

a) **MSE:**
   Squared Residuals: [1, 1, 1, 1, 4]
   Sum of Squared Residuals: $1 + 1 + 1 + 1 + 4 = 8$
   $MSE = \frac{8}{5} = \textbf{1.6}$

b) **MAE:**
   Absolute Residuals: [1, 1, 1, 1, 2]
   Sum of Absolute Residuals: $1 + 1 + 1 + 1 + 2 = 6$
   $MAE = \frac{6}{5} = \textbf{1.2}$

c) **RMSE:**
   $RMSE = \sqrt{MSE} = \sqrt{1.6} \approx \textbf{1.26}$

**Answer 4:**
MSE is preferred because it is a **convex function** with respect to the model parameters. This means that gradient descent can easily find the single global minimum. MAE, on the other hand, has an absolute value in its calculation, which makes it **non-differentiable at zero**, leading to a non-convex cost function, making optimization more complex and potentially leading to local minima.

**Answer 5:**
*   An $\text{R}^2$ score of 0.75 means that **75% of the variance** in the dependent variable can be explained by the independent variables in the model. It indicates a reasonably good fit.
*   An $\text{R}^2$ score of -0.1 means that the model performs **worse than a simple horizontal line** at the mean of the dependent variable. This indicates a very poor fit, and the model is likely not capturing the underlying patterns in the data.

---

### 8. Important Points to Remember

*   **Regression vs. Classification:** Regression predicts continuous values, while classification predicts discrete categories. Logistic Regression is used for classification.
*   **Linear Regression Assumptions:** Linearity, independence of errors, homoscedasticity (constant variance of errors), and normality of errors. Violations can affect model performance.
*   **Logistic Regression's Sigmoid:** Crucial for mapping linear outputs to probabilities between 0 and 1.
*   **Error Functions:**
    *   **MSE/RMSE:** Penalize larger errors more, sensitive to outliers.
    *   **MAE:** Treats all errors equally, robust to outliers.
    *   **R-squared:** Measures goodness-of-fit, proportion of variance explained.
*   **Cost Function for Logistic Regression:** Binary Cross-Entropy (Log Loss) is used because it's convex, enabling efficient optimization with gradient descent.
*   **Outliers:** Be mindful of outliers, especially when using MSE/RMSE. Consider MAE or data preprocessing if outliers are problematic.
*   **Model Evaluation:** Use appropriate error metrics (MSE, MAE, RMSE) for regression and accuracy/precision/recall/F1-score (for classification, which we'll cover more in later modules) to assess model performance.

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=33vbFFFn04k) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=Q-tL8_628gE) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=APPIZ2S8YmY) |


### References and Further Reading:

*   **Hands-on Machine Learning with Scikit-Learn, Keras, and TensorFlow by Aurélien Géron (Chapter 1, Chapter 4):** Provides practical introductions and examples for linear and logistic regression.
*   **Introduction to Machine Learning with Python by Andreas C. Müller & Sarah Guido (Chapter 3):** Offers clear explanations of regression and classification concepts, including linear and logistic regression.
*   **Machine Learning for Absolute Beginners by Oliver Theobald (Chapter 5, Chapter 6):** Good for foundational understanding of regression and classification.
*   **CS229 Lecture Notes by Andrew Ng and Tengyu Ma (Regression, Logistic Regression sections):** Offers a more in-depth mathematical treatment.

---