---
title: "regression and classification"
subject: "INTRODUCTION TO MACHINE LEARNING"
module: "Module 2: Introduction to machine learning algorithms "
branch: "Electrical and Electronics Engineering"
semester: 5
topicId: "68a200862b85456187f3642c"
status: "completed"
scrapedAt: "2026-05-23T16:22:20.185Z"
---
# Introduction to Machine Learning Algorithms: Regression and Classification

## Module 2: Introduction to Machine Learning Algorithms

This module introduces the fundamental concepts of two core supervised machine learning tasks: **Regression** and **Classification**. We will explore their objectives, the types of problems they solve, and the underlying principles of key algorithms.

---

### 1. Understanding Regression and Classification

Both regression and classification are **supervised learning** tasks. This means they learn from labeled data, where each data point has an associated "correct" output.

**Key Distinction:**

*   **Regression:** Predicts a **continuous** output variable. The output can take any value within a range.
*   **Classification:** Predicts a **discrete** (categorical) output variable. The output belongs to one of a predefined set of classes.

**Connecting to Course Outcomes:**

*   **CO1 (K2):** Understanding variables is crucial for distinguishing between continuous (regression) and discrete (classification) outputs.
*   **CO2 (K3):** This topic directly addresses applying regression and classification algorithms.
*   **CO4 (K3):** We will implement and evaluate algorithms for both tasks.

---

### 2. Regression

#### 2.1. Objective of Regression

The goal of regression is to find a model that best describes the relationship between a set of **independent variables** (features) and a **dependent variable** (target) that is continuous. The model aims to predict the continuous target variable for new, unseen data.

**Examples of Regression Problems:**

*   Predicting house prices based on features like size, location, and number of bedrooms.
*   Forecasting stock prices based on historical data and economic indicators.
*   Estimating a student's test score based on study hours and previous academic performance.
*   Predicting the temperature tomorrow based on historical weather patterns.

#### 2.2. Types of Regression

*   **Simple Linear Regression:** Predicts a continuous target variable using a single independent variable. The relationship is modeled by a straight line.
    *   **Equation:** $y = \beta_0 + \beta_1 x + \epsilon$
        *   $y$: Dependent variable (continuous)
        *   $x$: Independent variable
        *   $\beta_0$: Intercept (bias)
        *   $\beta_1$: Coefficient (slope)
        *   $\epsilon$: Error term (accounts for variability not explained by $x$)
*   **Multiple Linear Regression:** Predicts a continuous target variable using two or more independent variables. The relationship is modeled by a hyperplane.
    *   **Equation:** $y = \beta_0 + \beta_1 x_1 + \beta_2 x_2 + ... + \beta_n x_n + \epsilon$
        *   $x_i$: Independent variables
        *   $\beta_i$: Coefficients for each independent variable
*   **Polynomial Regression:** Models non-linear relationships by adding polynomial terms of the independent variables.
    *   **Equation (example for degree 2):** $y = \beta_0 + \beta_1 x + \beta_2 x^2 + \epsilon$
*   **Other Regression Techniques (to be explored in depth in later modules):**
    *   Ridge Regression
    *   Lasso Regression
    *   Support Vector Regression (SVR)
    *   Decision Tree Regression
    *   Random Forest Regression

#### 2.3. Key Concepts in Regression

*   **Features (Independent Variables):** The input variables used for prediction.
*   **Target (Dependent Variable):** The continuous variable to be predicted.
*   **Model Coefficients ($\beta$):** Parameters learned by the model that define the relationship between features and the target.
*   **Error/Residuals:** The difference between the actual target value and the predicted target value.
*   **Cost Function (Loss Function):** A function that quantifies the error of the model. Common examples include:
    *   **Mean Squared Error (MSE):** $\text{MSE} = \frac{1}{n} \sum_{i=1}^{n} (y_i - \hat{y}_i)^2$
    *   **Root Mean Squared Error (RMSE):** $\text{RMSE} = \sqrt{\text{MSE}}$
    *   **Mean Absolute Error (MAE):** $\text{MAE} = \frac{1}{n} \sum_{i=1}^{n} |y_i - \hat{y}_i|$

#### 2.4. Fitting a Regression Model

The process of fitting a regression model involves finding the optimal values for the model coefficients that minimize the chosen cost function. Common methods include:

*   **Ordinary Least Squares (OLS):** A method used to find the best-fitting line in linear regression by minimizing the sum of squared errors. (Refer to "Mathematics for Machine Learning" for mathematical details on OLS).

#### 2.5. Evaluating Regression Models

*   **R-squared ($R^2$):** Represents the proportion of the variance in the dependent variable that is predictable from the independent variables. Ranges from 0 to 1, with higher values indicating a better fit.
    *   $R^2 = 1 - \frac{\text{SSR}}{\text{SST}} = 1 - \frac{\sum_{i=1}^{n} (y_i - \hat{y}_i)^2}{\sum_{i=1}^{n} (y_i - \bar{y})^2}$
    *   SSR (Sum of Squares of Residuals)
    *   SST (Total Sum of Squares)
*   **RMSE, MAE:** As mentioned in cost functions, these directly measure the average magnitude of errors.

**Important Point to Remember:** Correlation does not imply causation. A strong regression model indicates a strong statistical relationship, but not necessarily a causal link.

---

### 3. Classification

#### 3.1. Objective of Classification

The goal of classification is to assign data points to predefined **discrete categories** or **classes**. The model learns from labeled data to predict the class label for new, unseen data.

**Examples of Classification Problems:**

*   **Binary Classification:**
    *   Spam detection (spam vs. not spam).
    *   Medical diagnosis (diseased vs. healthy).
    *   Customer churn prediction (churn vs. not churn).
*   **Multi-class Classification:**
    *   Image recognition (cat, dog, bird).
    *   Handwritten digit recognition (0-9).
    *   Sentiment analysis (positive, negative, neutral).

#### 3.2. Types of Classification

*   **Binary Classification:** Predicts one of two possible classes (e.g., 0 or 1, Yes or No).
*   **Multi-class Classification:** Predicts one of more than two possible classes.

#### 3.3. Key Concepts in Classification

*   **Features (Independent Variables):** The input variables used for prediction.
*   **Target (Dependent Variable):** The categorical variable (class label) to be predicted.
*   **Classes:** The distinct categories to which data points are assigned.
*   **Decision Boundary:** A boundary that separates different classes in the feature space.

#### 3.4. Common Classification Algorithms (to be explored in depth)

*   **Logistic Regression:** Despite the name, it's a classification algorithm. It uses a sigmoid function to output probabilities for each class.
    *   **Sigmoid Function:** $\sigma(z) = \frac{1}{1 + e^{-z}}$
    *   **Equation (for binary):** $P(y=1|x) = \sigma(\beta_0 + \beta_1 x_1 + ... + \beta_n x_n)$
*   **K-Nearest Neighbors (KNN):** Classifies a data point based on the majority class of its 'k' nearest neighbors in the feature space. (Refer to "Introduction to Machine Learning with Python" for intuitive explanations).
*   **Support Vector Machines (SVM):** Finds an optimal hyperplane that maximizes the margin between different classes.
*   **Decision Trees:** Creates a tree-like structure where internal nodes represent feature tests, branches represent outcomes of the tests, and leaf nodes represent class labels. (Refer to "Hands-On Machine Learning with Scikit-Learn, Keras, and TensorFlow" for visual examples).
*   **Random Forest:** An ensemble of multiple decision trees, which often leads to improved accuracy and robustness.
*   **Gradient Boosting:** Another ensemble technique that builds trees sequentially, with each new tree correcting the errors of the previous ones.

#### 3.5. Evaluating Classification Models

Evaluating classification models is different from regression as we are dealing with categorical outputs.

*   **Confusion Matrix:** A table that summarizes the performance of a classification model on a set of test data. It shows the counts of:
    *   **True Positives (TP):** Correctly predicted positive class.
    *   **True Negatives (TN):** Correctly predicted negative class.
    *   **False Positives (FP):** Incorrectly predicted positive class (Type I error).
    *   **False Negatives (FN):** Incorrectly predicted negative class (Type II error).

*   **Key Metrics derived from Confusion Matrix:**
    *   **Accuracy:** The proportion of correct predictions out of the total predictions.
        *   $\text{Accuracy} = \frac{\text{TP} + \text{TN}}{\text{TP} + \text{TN} + \text{FP} + \text{FN}}$
    *   **Precision:** The proportion of true positive predictions out of all positive predictions made. High precision means fewer false positives.
        *   $\text{Precision} = \frac{\text{TP}}{\text{TP} + \text{FP}}$
    *   **Recall (Sensitivity):** The proportion of true positive predictions out of all actual positive instances. High recall means fewer false negatives.
        *   $\text{Recall} = \frac{\text{TP}}{\text{TP} + \text{FN}}$
    *   **F1-Score:** The harmonic mean of precision and recall, providing a balance between the two.
        *   $\text{F1-Score} = 2 \times \frac{\text{Precision} \times \text{Recall}}{\text{Precision} + \text{Recall}}$

*   **ROC Curve (Receiver Operating Characteristic Curve) and AUC (Area Under the Curve):**
    *   **ROC Curve:** Plots the True Positive Rate (Recall) against the False Positive Rate ($\frac{\text{FP}}{\text{FP} + \text{TN}}$) at various threshold settings.
    *   **AUC:** The area under the ROC curve, which provides an aggregate measure of classification performance. A higher AUC indicates a better model.

**Important Point to Remember:** The choice of evaluation metric depends on the specific problem and the relative costs of false positives versus false negatives.

---

### 4. Data Preparation for Regression and Classification

Before applying algorithms, data often needs preparation:

*   **Feature Scaling:** Normalizing or standardizing features (e.g., using StandardScaler from scikit-learn). This is particularly important for distance-based algorithms (like KNN) and algorithms that use gradient descent. (Refer to "Python Data Science Handbook" for data manipulation).
*   **Handling Categorical Features:** Encoding categorical features into numerical representations (e.g., One-Hot Encoding). (Refer to "Introduction to Machine Learning with Python").
*   **Handling Missing Values:** Imputing missing values using strategies like mean, median, or more sophisticated methods.

**Connecting to Course Outcomes:**

*   **CO3 (K3):** Directly relevant for preparing data using Python libraries.

---

### 5. Practice Questions and Exercises

**Question 1 (Conceptual):**

What is the primary difference between a regression problem and a classification problem in machine learning?

**Answer:**
The primary difference lies in the type of output variable they predict. Regression predicts a **continuous** numerical value, while classification predicts a **discrete** categorical label.

---

**Question 2 (Conceptual):**

Consider a scenario where you are building a model to predict the number of hours a student studies for an exam. Would this be a regression or classification problem? Justify your answer.

**Answer:**
This would be a **regression** problem because the output variable, "number of hours," is a continuous numerical value. Students can study for 2.5 hours, 3 hours, 4.75 hours, etc.

---

**Question 3 (Conceptual):**

You are building a model to identify whether an email is spam or not. Which type of machine learning task is this, and what are the two classes involved?

**Answer:**
This is a **classification** problem. The two classes involved are typically "Spam" and "Not Spam" (or "Ham").

---

**Question 4 (Evaluation):**

A binary classification model produces the following confusion matrix:

|             | Predicted Negative | Predicted Positive |
| :---------- | :----------------- | :----------------- |
| Actual Neg  | 80                 | 20                 |
| Actual Pos  | 30                 | 70                 |

Calculate the following metrics:
a) Accuracy
b) Precision
c) Recall
d) F1-Score

**Answer:**

From the confusion matrix:
*   TP (True Positives) = 70 (Correctly predicted positive)
*   TN (True Negatives) = 80 (Correctly predicted negative)
*   FP (False Positives) = 20 (Predicted positive, but actually negative)
*   FN (False Negatives) = 30 (Predicted negative, but actually positive)

a) **Accuracy:**
   $\text{Accuracy} = \frac{\text{TP} + \text{TN}}{\text{TP} + \text{TN} + \text{FP} + \text{FN}} = \frac{70 + 80}{70 + 80 + 20 + 30} = \frac{150}{200} = 0.75$

b) **Precision:**
   $\text{Precision} = \frac{\text{TP}}{\text{TP} + \text{FP}} = \frac{70}{70 + 20} = \frac{70}{90} \approx 0.78$

c) **Recall:**
   $\text{Recall} = \frac{\text{TP}}{\text{TP} + \text{FN}} = \frac{70}{70 + 30} = \frac{70}{100} = 0.70$

d) **F1-Score:**
   $\text{F1-Score} = 2 \times \frac{\text{Precision} \times \text{Recall}}{\text{Precision} + \text{Recall}} = 2 \times \frac{0.78 \times 0.70}{0.78 + 0.70} = 2 \times \frac{0.546}{1.48} \approx 0.738$

---
