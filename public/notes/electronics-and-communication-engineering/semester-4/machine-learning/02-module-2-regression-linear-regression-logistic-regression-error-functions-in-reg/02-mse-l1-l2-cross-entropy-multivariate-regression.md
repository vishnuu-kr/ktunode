---
title: "MSE, L1, L2, Cross entropy multivariate regression"
subject: "MACHINE LEARNING"
module: "Module 2: Regression: linear regression, logistic regression error functions in regression"
branch: "Electronics and Communication Engineering"
semester: 4
topicId: "68a5c45eb09ce205780fe626"
status: "completed"
scrapedAt: "2026-05-23T17:50:15.034Z"
---
# Machine Learning: Module 2 - Regression

## Topic: Error Functions in Regression: MSE, L1, L2, Cross-Entropy, Multivariate Regression

### Introduction to Regression

Regression is a supervised learning technique used for predicting a **continuous target variable** based on one or more input features. The goal is to learn a function that maps input features to output values.

**Key Concepts:**

*   **Dependent Variable (Target Variable):** The variable we are trying to predict. It is continuous.
*   **Independent Variables (Features/Predictors):** The variables used to predict the dependent variable.
*   **Model:** The learned function that represents the relationship between independent and dependent variables.
*   **Parameters/Coefficients:** Values learned by the model that define the relationship.

**Learning Outcomes Covered in this Topic:**

*   **LO: Understand the fundamental concepts of regression analysis.** (Implied by covering various regression techniques and error functions.)
*   **LO: Differentiate between various regression error functions and their implications.**
*   **LO: Understand and implement different regression algorithms, including linear and logistic regression.**
*   **LO: Evaluate regression models using appropriate metrics.**
*   **LO: Understand the concepts of multivariate regression and its applications.**

**Course Outcomes Alignment:**

*   **CO1: Analyze and apply supervised and unsupervised machine learning techniques to solve various data-driven problems.** (K4 - Analyzing different error functions and their suitability for problems, understanding multivariate regression.)
*   **CO2: Develop, train, and optimize regression and classification models.** (K3 - Understanding the core mechanisms of linear and logistic regression, and how error functions drive optimization.)

---

### 1. Linear Regression

Linear regression models the relationship between the dependent variable ($y$) and independent variables ($X$) by fitting a linear equation to the observed data.

**Simple Linear Regression (One Independent Variable):**
$y = \beta_0 + \beta_1 x + \epsilon$

*   $\beta_0$: Intercept
*   $\beta_1$: Slope coefficient
*   $\epsilon$: Error term (representing unmodeled factors)

**Multiple Linear Regression (Multiple Independent Variables):**
$y = \beta_0 + \beta_1 x_1 + \beta_2 x_2 + ... + \beta_n x_n + \epsilon$

In matrix form: $\mathbf{y} = \mathbf{X}\boldsymbol{\beta} + \boldsymbol{\epsilon}$

*   $\mathbf{y}$: Vector of dependent variables.
*   $\mathbf{X}$: Matrix of independent variables (with a column of ones for the intercept).
*   $\boldsymbol{\beta}$: Vector of coefficients.
*   $\boldsymbol{\epsilon}$: Vector of error terms.

**How it works:** The goal is to find the coefficients ($\boldsymbol{\beta}$) that minimize the difference between the predicted values ($\hat{y}$) and the actual values ($y$). This is achieved by minimizing an **error function** or **loss function**.

**Reference:** *Hands-on Machine Learning* (Geron) provides excellent practical introductions and explanations of linear regression. *Introduction to Machine Learning with Python* (Müller & Guido) also offers a clear, intuitive explanation.

---

### 2. Logistic Regression

Logistic regression is used for **classification problems**, specifically for predicting a binary outcome (0 or 1). It models the probability that an input belongs to a particular class.

**Key Concepts:**

*   **Sigmoid Function (Logistic Function):**
    $\sigma(z) = \frac{1}{1 + e^{-z}}$
    This function squashes any real-valued number into a value between 0 and 1, which can be interpreted as a probability.
*   **Linear Combination:** The input to the sigmoid function is a linear combination of the features:
    $z = \beta_0 + \beta_1 x_1 + \beta_2 x_2 + ... + \beta_n x_n$
*   **Prediction:** The probability of belonging to the positive class (e.g., class 1) is given by:
    $P(y=1 | \mathbf{x}) = \sigma(\mathbf{x}^T \boldsymbol{\beta})$

**How it works:** Logistic regression uses a specific error function (Cross-Entropy) to train the model.

**Reference:** Geron's *Hands-on Machine Learning* covers logistic regression thoroughly, including its probabilistic interpretation.

---

### 3. Error Functions (Loss Functions) in Regression

Error functions quantify the difference between the predicted values ($\hat{y}$) and the actual values ($y$). The objective of training a regression model is to minimize this error function.

#### 3.1. Mean Squared Error (MSE)

*   **Definition:** MSE measures the average of the squares of the errors. It's the most common loss function for regression.
*   **Formula:**
    $MSE = \frac{1}{N} \sum_{i=1}^{N} (y_i - \hat{y}_i)^2$
    Where:
    *   $N$ is the number of data points.
    *   $y_i$ is the actual value for the $i$-th data point.
    *   $\hat{y}_i$ is the predicted value for the $i$-th data point.

*   **Characteristics:**
    *   **Penalizes large errors more heavily:** Due to the squaring term, larger deviations from the actual value contribute significantly more to the MSE.
    *   **Differentiable:** This makes it suitable for gradient-based optimization methods (like Gradient Descent).
    *   **Sensitive to outliers:** Because it squares the errors, outliers can disproportionately influence the model's fit.

*   **Use Case:** Standard linear regression, when the errors are assumed to be normally distributed.

*   **Reference:**
    *   *Hands-on Machine Learning* (Geron) explains MSE as the default cost function for linear regression.
    *   *Pattern Recognition and Machine Learning* (Bishop) discusses MSE within the context of maximum likelihood estimation for Gaussian noise.

*   **Example:** If actual values are [10, 12, 15] and predicted values are [11, 13, 14]:
    *   Errors: [-1, -1, 1]
    *   Squared Errors: [1, 1, 1]
    *   MSE = (1 + 1 + 1) / 3 = 1

#### 3.2. L1 Loss (Mean Absolute Error - MAE)

*   **Definition:** L1 loss measures the average of the absolute differences between the predicted and actual values.
*   **Formula:**
    $L1 = \frac{1}{N} \sum_{i=1}^{N} |y_i - \hat{y}_i|$

*   **Characteristics:**
    *   **Less sensitive to outliers:** The absolute value means that outliers do not have as drastic an impact as they do with MSE.
    *   **Non-differentiable at zero:** The absolute value function has a sharp corner at zero, which can make gradient-based optimization slightly more complex (though subgradients can be used).
    *   **Promotes sparsity:** When used as a regularization technique (Lasso), it can drive some coefficients to exactly zero, effectively performing feature selection.

*   **Use Case:** When robustness to outliers is critical.

*   **Reference:** Geron mentions L1 loss as an alternative to MSE, and its regularization properties (Lasso) are a key concept.

*   **Example:** Using the same values as above:
    *   Errors: [-1, -1, 1]
    *   Absolute Errors: [1, 1, 1]
    *   L1 = (1 + 1 + 1) / 3 = 1

#### 3.3. L2 Loss (Ridge Regression - Regularization)

*   **Definition:** L2 loss is not directly an error function in the same sense as MSE or L1. Instead, it refers to a **regularization term** added to the loss function (usually MSE) to prevent overfitting. It penalizes large coefficients.
*   **Formula (Added to MSE):**
    $Cost(MSE + L2) = \frac{1}{N} \sum_{i=1}^{N} (y_i - \hat{y}_i)^2 + \alpha \sum_{j=1}^{n} \beta_j^2$
    Where:
    *   $\alpha$ is the regularization hyperparameter (controls the strength of the penalty).
    *   $\beta_j$ are the coefficients (excluding the intercept $\beta_0$).

*   **Characteristics:**
    *   **Reduces model complexity:** By penalizing large coefficients, it discourages the model from relying too heavily on any single feature.
    *   **Shrinks coefficients:** It tends to shrink coefficients towards zero but rarely makes them exactly zero.
    *   **Improves generalization:** Helps prevent overfitting, especially with high-dimensional data or multicollinearity.

*   **Use Case:** When multicollinearity is present or to prevent overfitting in models with many features.

*   **Reference:** Geron extensively covers L2 regularization (Ridge Regression) as a technique to improve model robustness.

*   **Example:** Consider a model with coefficients $\beta_1 = 2, \beta_2 = -3$ and $\alpha = 0.1$.
    *   L2 Penalty = $0.1 * (2^2 + (-3)^2) = 0.1 * (4 + 9) = 0.1 * 13 = 1.3$. This value would be added to the MSE.

#### 3.4. L1 Regularization (Lasso Regression)

*   **Definition:** Similar to L2, L1 regularization adds a penalty to the loss function based on the absolute values of the coefficients.
*   **Formula (Added to MSE):**
    $Cost(MSE + L1) = \frac{1}{N} \sum_{i=1}^{N} (y_i - \hat{y}_i)^2 + \alpha \sum_{j=1}^{n} |\beta_j|$

*   **Characteristics:**
    *   **Feature Selection:** The key difference from L2 is that L1 regularization can force some coefficients to be exactly zero, effectively performing automatic feature selection.
    *   **Sparsity:** Creates sparse models.
    *   **Can be sensitive to feature scaling:** Like other regularization techniques.

*   **Use Case:** When you suspect many features are irrelevant and want to simplify the model by eliminating them.

*   **Reference:** Geron discusses Lasso Regression and its feature selection capabilities.

*   **Example:** Consider a model with coefficients $\beta_1 = 2, \beta_2 = -3$ and $\alpha = 0.1$.
    *   L1 Penalty = $0.1 * (|2| + |-3|) = 0.1 * (2 + 3) = 0.1 * 5 = 0.5$. This value would be added to the MSE.

**Important Note on L1 and L2:** When referring to "L1 Loss" and "L2 Loss" in the context of error functions directly, it's typically referring to MAE and MSE respectively. However, L1 and L2 are *most commonly* encountered as regularization terms added to a primary loss function (like MSE) to improve model generalization.

---

### 4. Cross-Entropy Loss (for Logistic Regression)

*   **Definition:** Cross-entropy, also known as log loss, is the standard loss function for classification tasks, including logistic regression. It measures the performance of a classification model whose output is a probability value between 0 and 1.
*   **Formula:**
    For a single data point:
    $L = -(y \log(\hat{y}) + (1-y) \log(1-\hat{y}))$
    Where:
    *   $y$ is the true label (0 or 1).
    *   $\hat{y}$ is the predicted probability of class 1.

    For $N$ data points (Binary Cross-Entropy):
    $CrossEntropy = -\frac{1}{N} \sum_{i=1}^{N} [y_i \log(\hat{y}_i) + (1-y_i) \log(1-\hat{y}_i)]$

*   **Characteristics:**
    *   **Penalizes confident wrong predictions heavily:** If the model predicts a high probability for the wrong class, the loss will be very large.
    *   **Differentiable:** Essential for gradient descent.
    *   **Intuition:** It's related to the Kullback-Leibler (KL) divergence, measuring the difference between the true probability distribution and the predicted probability distribution.

*   **Use Case:** All binary and multi-class classification problems (logistic regression, neural networks for classification).

*   **Reference:**
    *   Geron's *Hands-on Machine Learning* explains cross-entropy as the cost function for logistic regression.
    *   *Learning Deep Learning* (Ekman) provides a detailed treatment of cross-entropy within the context of neural networks.
    *   Andrew Ng's CS229 notes also cover logistic regression and its cost function.

*   **Example:**
    *   If $y=1$ and $\hat{y}=0.9$: $L = -(1 \log(0.9) + 0 \log(0.1)) = -\log(0.9) \approx 0.105$ (small loss, good prediction)
    *   If $y=1$ and $\hat{y}=0.1$: $L = -(1 \log(0.1) + 0 \log(0.9)) = -\log(0.1) \approx 2.303$ (large loss, bad prediction)
    *   If $y=0$ and $\hat{y}=0.1$: $L = -(0 \log(0.9) + 1 \log(0.9)) = -\log(0.9) \approx 0.105$ (small loss, good prediction)
    *   If $y=0$ and $\hat{y}=0.9$: $L = -(0 \log(0.1) + 1 \log(0.1)) = -\log(0.1) \approx 2.303$ (large loss, bad prediction)

---

### 5. Multivariate Regression

*   **Definition:** Multivariate regression is a statistical technique used when there are **multiple dependent variables** to be predicted simultaneously, each potentially dependent on the same set of independent variables. This contrasts with multiple linear regression, where there's only one dependent variable and multiple independent variables.

*   **Key Concepts:**
    *   **Multiple Dependent Variables:** We are predicting $m$ different target variables ($y_1, y_2, ..., y_m$).
    *   **Single Set of Independent Variables:** The same set of $n$ independent variables ($x_1, x_2, ..., x_n$) are used for all dependent variables.
    *   **System of Equations:** A system of regression equations is typically fitted, one for each dependent variable.
    *   **Correlations Between Dependent Variables:** Multivariate regression can explicitly model the correlations between the dependent variables.

*   **Example:** Predicting a person's height and weight simultaneously based on their age, gender, and diet.
    *   Dependent Variables: Height, Weight ($m=2$)
    *   Independent Variables: Age, Gender, Diet ($n=3$)

*   **Techniques:**
    *   **Seemingly Unrelated Regression (SUR):** This technique accounts for correlations between the error terms of the different regression equations, which can lead to more efficient estimates than fitting each equation independently.
    *   **Principal Component Regression (PCR) / Partial Least Squares Regression (PLSR):** These methods can be used when the number of features is very large or when multicollinearity is severe, by transforming the features into a smaller set of components.

*   **Error Functions:** The same error functions (MSE, L1) can be applied to each dependent variable's prediction, and then averaged or combined. The choice of error function still depends on the desired properties (robustness, sensitivity to outliers).

*   **Reference:**
    *   While not explicitly detailed in the introductory texts for beginners, *Pattern Recognition and Machine Learning* (Bishop) and *Pattern Recognition* (Theodoridis & Koutroumbas) would likely cover more advanced multivariate statistical methods.
    *   Andrew Ng's CS229 notes might touch upon more advanced topics beyond basic linear/logistic regression if they cover broader statistical modeling.

---

### Practice Questions and Answers

**Question 1:**
You are building a linear regression model to predict house prices. You have a dataset with 1000 houses. After training your model, you calculate the Mean Squared Error (MSE) to be 500,000.
What does this MSE value tell you about your model's performance, and what are the potential implications of this value?

**Answer 1:**
The MSE of 500,000 represents the average squared difference between the actual house prices and the prices predicted by your model.
*   **Interpretation:** A higher MSE indicates that, on average, your model's predictions are further from the actual values. The magnitude of the MSE needs to be interpreted in the context of the scale of the house prices. For example, if house prices range from $100,000 to $1,000,000, an MSE of 500,000 might be acceptable or indicate significant error.
*   **Implications:**
    *   **Outliers:** The squaring of errors means that a few predictions that are very far off (outliers) could be significantly contributing to this MSE.
    *   **Model Fit:** It suggests a certain level of inaccuracy in the model's predictions.
    *   **Comparison:** This value is most useful when comparing different models trained on the same dataset or when tracking improvement during model training.

**Question 2:**
You are working on a binary classification problem to predict whether a customer will click on an ad (1) or not (0). Your model outputs probabilities. Which loss function is most appropriate for this task and why?

**Answer 2:**
The most appropriate loss function for this binary classification task is **Cross-Entropy Loss** (also known as Log Loss).
*   **Reasoning:** Cross-entropy is designed to measure the performance of classification models whose output is a probability value between 0 and 1. It heavily penalizes confident incorrect predictions (e.g., predicting a 0.9 probability of clicking when the customer did not click). This property drives the model to learn probabilities that are close to the true labels, making it suitable for optimizing logistic regression and other classification models.

**Question 3:**
You are developing a regression model. You've noticed that your current model performs very well on the training data but poorly on unseen test data. You suspect overfitting. Which regularization technique could help address this, and how does it work?

**Answer 3:**
**L2 Regularization (Ridge Regression)** or **L1 Regularization (Lasso Regression)** can help address overfitting.
*   **How L2 Regularization works:** It adds a penalty term to the loss function that is proportional to the square of the magnitude of the coefficients ($\alpha \sum \beta_j^2$). This discourages the model from learning excessively large coefficients, which often leads to models that are too complex and overfit. It effectively "shrinks" the coefficients towards zero, making the model less sensitive to individual data points and more generalizable.
*   **How L1 Regularization works:** It adds a penalty term proportional to the absolute value of the coefficients ($\alpha \sum |\beta_j|$). Similar to L2, it discourages large coefficients. However, a key difference is that L1 can force some coefficients to become exactly zero, effectively performing feature selection and creating a sparser, simpler model.

**Question 4:**
Explain the primary difference between multiple linear regression and multivariate regression.

**Answer 4:**
The primary difference lies in the **number of dependent variables**:
*   **Multiple Linear Regression:** Predicts a **single** dependent variable using two or more independent variables.
*   **Multivariate Regression:** Predicts **multiple** dependent variables simultaneously using one or more independent variables. The models for each dependent variable can be related, and correlations between the dependent variables themselves can be accounted for.

**Question 5:**
Consider the following data for a regression problem:
Actual values ($y$): [5, 7, 10]
Predicted values ($\hat{y}$): [6, 6, 11]

Calculate the MSE and MAE for this set of predictions.

**Answer 5:**
**Calculations:**
*   **Errors ($y - \hat{y}$):**
    *   $5 - 6 = -1$
    *   $7 - 6 = 1$
    *   $10 - 11 = -1$

*   **Squared Errors ($(y - \hat{y})^2$):**
    *   $(-1)^2 = 1$
    *   $1^2 = 1$
    *   $(-1)^2 = 1$

*   **Absolute Errors ($|y - \hat{y}|$):**
    *   $|-1| = 1$
    *   $|1| = 1$
    *   $|-1| = 1$

*   **MSE:**
    $MSE = \frac{1}{3} \sum (y - \hat{y})^2 = \frac{1 + 1 + 1}{3} = \frac{3}{3} = 1$

*   **MAE:**
    $MAE = \frac{1}{3} \sum |y - \hat{y}| = \frac{1 + 1 + 1}{3} = \frac{3}{3} = 1$

In this specific case, MSE and MAE are equal. However, this is not always true, especially if there are larger errors.

---

### Important Points to Remember

*   **Linear Regression** predicts continuous values using linear relationships.
*   **Logistic Regression** predicts categorical outcomes (probabilities) using the sigmoid function and is used for classification.
*   **MSE** is sensitive to outliers due to squaring errors; commonly used for linear regression.
*   **MAE (L1 Loss)** is more robust to outliers than MSE.
*   **L2 Regularization (Ridge)** penalizes large coefficients to reduce overfitting and multicollinearity.
*   **L1 Regularization (Lasso)** penalizes coefficients and can perform feature selection by setting coefficients to zero.
*   **Cross-Entropy** is the standard loss function for classification tasks like logistic regression.
*   **Multivariate Regression** deals with predicting multiple dependent variables simultaneously.
*   The choice of error function or regularization technique significantly impacts model performance, robustness, and generalizability. Always consider the nature of your data and the problem you are trying to solve.
*   Always scale your features before applying L1 or L2 regularization to ensure fair penalty application.

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=gI-qXk7XojA) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=M0mx8S05v60) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=p6Q9_e7_L1w) |
