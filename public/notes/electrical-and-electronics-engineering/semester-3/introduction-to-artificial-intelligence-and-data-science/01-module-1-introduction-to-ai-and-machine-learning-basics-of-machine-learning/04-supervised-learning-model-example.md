---
title: "Supervised learning model example"
subject: "INTRODUCTION TO ARTIFICIAL INTELLIGENCE AND DATA 
SCIENCE"
module: "Module 1: Introduction to AI and Machine Learning :  Basics of Machine Learning"
branch: "Electrical and Electronics Engineering"
semester: 3
topicId: "68a200842b85456187f35b86"
status: "completed"
scrapedAt: "2026-05-23T16:13:54.293Z"
---
# Module 1: Introduction to AI and Machine Learning - Basics of Machine Learning

## Topic: Supervised Learning Model Example

This section provides a practical example of a supervised learning model, illustrating the core concepts and workflow involved in building and using such models.

---

### 1. Learning Outcomes Covered

This topic will help you understand:

*   **The fundamental process of supervised learning.**
*   **How to frame a real-world problem as a supervised learning task.**
*   **The roles of features and target variables.**
*   **The concept of a model making predictions based on learned patterns.**
*   **The need for data to train and evaluate models.**

---

### 2. Key Concepts and Definitions

**Supervised Learning:** A type of machine learning where an algorithm learns from a labeled dataset. This means that for each data point, there is a known correct output or "label." The goal is to learn a mapping function from input variables (features) to the output variable (target).

**Labeled Dataset:** A dataset containing both input features and their corresponding correct outputs (labels).

**Features (Input Variables):** The independent variables or attributes that are used to make predictions. These are the characteristics of the data that the model uses to learn.

**Target Variable (Output Variable/Label):** The dependent variable or the outcome that the model is trying to predict.

**Model:** The algorithm that learns the relationship between features and the target variable from the training data.

**Training:** The process of feeding the labeled dataset to the algorithm to learn the patterns and build the model.

**Prediction:** Using the trained model to estimate the target variable for new, unseen data.

---

### 3. Supervised Learning Model Example: Predicting House Prices

Let's consider a common real-world example: **predicting the selling price of a house.** This is a classic **regression** problem within supervised learning.

#### 3.1 Problem Formulation

**Goal:** To build a system that can predict the selling price of a house given its characteristics.

**Type of Supervised Learning:** Since the target variable (house price) is a continuous numerical value, this is a **regression** problem. If we were predicting a category (e.g., "will the house sell for more than $500,000? Yes/No"), it would be a **classification** problem.

#### 3.2 Data Collection and Preparation

We need a dataset of houses that have already been sold, along with their characteristics and selling prices.

**Example Dataset (Illustrative):**

| House ID | Square Footage (sqft) | Number of Bedrooms | Number of Bathrooms | Lot Size (acres) | Year Built | Selling Price ($) |
| :------- | :-------------------- | :----------------- | :------------------ | :--------------- | :--------- | :---------------- |
| 1        | 1500                  | 3                  | 2                   | 0.25             | 1995       | 300,000           |
| 2        | 2000                  | 4                  | 3                   | 0.30             | 2005       | 450,000           |
| 3        | 1200                  | 2                  | 1.5                 | 0.15             | 1980       | 250,000           |
| 4        | 2500                  | 4                  | 3.5                 | 0.40             | 2015       | 550,000           |
| 5        | 1800                  | 3                  | 2.5                 | 0.28             | 2000       | 380,000           |
| ...      | ...                   | ...                | ...                 | ...              | ...        | ...               |

**Identifying Features and Target:**

*   **Features:** Square Footage, Number of Bedrooms, Number of Bathrooms, Lot Size, Year Built.
*   **Target Variable:** Selling Price.

**Data Preprocessing (Briefly):**
In a real-world scenario, data would need cleaning (handling missing values, outliers), and potentially feature engineering or scaling. For instance, the "Year Built" might be converted into "Age of House."

#### 3.3 Model Training

We select a supervised learning algorithm suitable for regression. A common and conceptually simple algorithm is **Linear Regression**.

**Linear Regression (Conceptual Basis):**
Linear regression assumes a linear relationship between the features and the target variable. It tries to find the best-fitting line (or hyperplane in multiple dimensions) through the data points.

The model can be represented as:

$ \text{Selling Price} = \beta_0 + \beta_1 \times \text{Square Footage} + \beta_2 \times \text{Number of Bedrooms} + \beta_3 \times \text{Number of Bathrooms} + \beta_4 \times \text{Lot Size} + \beta_5 \times \text{Year Built} + \epsilon $

Where:
*   $ \beta_0 $ is the intercept.
*   $ \beta_1, \beta_2, ..., \beta_5 $ are the coefficients (weights) associated with each feature. These coefficients represent how much the selling price changes for a one-unit increase in the corresponding feature, holding other features constant.
*   $ \epsilon $ represents the error term.

**Training Process:**
The algorithm uses the historical data (features and selling prices) to estimate the optimal values for the coefficients ($ \beta_0, \beta_1, ..., \beta_5 $). This is often done by minimizing the sum of squared differences between the actual selling prices and the prices predicted by the model (e.g., using Ordinary Least Squares - OLS).

**Textbook Reference:** Gilbert Strang's "Introduction to Linear Algebra" provides the mathematical foundation for understanding how to solve systems of linear equations, which is central to methods like OLS used in linear regression. Chapters on linear systems and least squares would be highly relevant. Aurélien Géron's "Hands-on machine learning" offers practical implementations of linear regression using scikit-learn.

#### 3.4 Model Evaluation

After training, the model needs to be evaluated on data it hasn't seen before (a **test set**) to assess its performance. Common evaluation metrics for regression include:

*   **Mean Squared Error (MSE):** The average of the squared errors.
*   **Root Mean Squared Error (RMSE):** The square root of MSE, giving an error in the same units as the target variable.
*   **Mean Absolute Error (MAE):** The average of the absolute differences between predicted and actual values.
*   **R-squared ($R^2$):** The proportion of the variance in the dependent variable that is predictable from the independent variables.

#### 3.5 Making Predictions

Once the model is trained and evaluated, it can be used to predict the selling price of a new house.

**Example Prediction:**
Suppose we have a new house with the following characteristics:
*   Square Footage: 1800 sqft
*   Number of Bedrooms: 3
*   Number of Bathrooms: 2.5
*   Lot Size: 0.20 acres
*   Year Built: 2010

We input these features into our trained linear regression model. The model, using its learned coefficients, will output a predicted selling price.

**Example:** If the trained model learned the following coefficients (hypothetical):
*   $ \beta_0 = 50000 $
*   $ \beta_1 = 150 $ (per sqft)
*   $ \beta_2 = 10000 $ (per bedroom)
*   $ \beta_3 = 25000 $ (per bathroom)
*   $ \beta_4 = 200000 $ (per acre)
*   $ \beta_5 = -1000 $ (per year)

The predicted selling price would be:
$ \text{Predicted Price} = 50000 + (150 \times 1800) + (10000 \times 3) + (25000 \times 2.5) + (200000 \times 0.20) + (-1000 \times 2010) $
$ \text{Predicted Price} = 50000 + 270000 + 30000 + 62500 + 40000 - 201000 $
$ \text{Predicted Price} = 251,500 $

This is a simplified example; real-world models would involve more complex feature interactions and potentially non-linear relationships.

**Alignment with Course Outcomes:**
*   **CO1:** Applying a supervised learning technique (regression) to an engineering application (predicting house prices, which could be part of real estate analysis or urban planning).
*   **CO2:** While not explicitly shown here, feature scaling and data manipulation for regression can involve matrix operations, and understanding the underlying mathematics (like Strang's book) is crucial.
*   **CO3:** The entire process of identifying features, training a model, and evaluating its performance with metrics like RMSE and $R^2$ is directly related to analyzing and interpreting data using statistical methods and regression analysis.
*   **CO4:** This example demonstrates integrating data (features) with a statistical/machine learning technique (linear regression) to derive a meaningful insight (predicted price), contributing to practically feasible solutions.

---

### 4. Other Supervised Learning Model Examples

*   **Spam Detection (Classification):**
    *   **Features:** Word frequencies (e.g., "free," "viagra"), sender's domain, presence of special characters.
    *   **Target:** "Spam" or "Not Spam" (a binary category).
    *   **Algorithms:** Logistic Regression, Support Vector Machines (SVM), Naive Bayes.
    *   **Textbook Reference:** "Hands-on machine learning" covers classification algorithms extensively.

*   **Image Recognition (Classification):**
    *   **Features:** Pixel values of an image, textures, shapes extracted from the image.
    *   **Target:** The object depicted in the image (e.g., "cat," "dog," "car").
    *   **Algorithms:** Convolutional Neural Networks (CNNs).
    *   **Textbook Reference:** "Hands-on machine learning" has dedicated chapters on deep learning and CNNs for image tasks.

*   **Customer Churn Prediction (Classification):**
    *   **Features:** Customer demographics, usage patterns, customer service interactions, contract type.
    *   **Target:** Whether a customer will "churn" (leave the service) or "not churn."
    *   **Algorithms:** Decision Trees, Random Forests, Gradient Boosting.
    *   **Textbook Reference:** "Introducing data science" or "Data science: concepts and practice" would likely cover these classification algorithms in the context of business applications.

---

### 5. Practice Questions and Exercises

**Question 1:**
You are given a dataset of customer purchase history, including features like 'Average Purchase Value', 'Number of Visits', and 'Time Since Last Purchase'. Your goal is to predict if a customer will make a purchase in the next month.
a) What type of supervised learning problem is this? (Regression or Classification)
b) Identify the potential features and the target variable.
c) Name one algorithm that could be used to solve this problem.

**Answer 1:**
a) This is a **Classification** problem because the target variable is a category ("Will purchase" or "Will not purchase").
b) **Features:** 'Average Purchase Value', 'Number of Visits', 'Time Since Last Purchase'. **Target Variable:** Whether the customer makes a purchase in the next month.
c) Possible algorithms include Logistic Regression, Support Vector Machines (SVM), Decision Trees, or Random Forests.

**Question 2:**
Consider the house price prediction example. If the trained linear regression model predicts a price of $350,000 for a house, but the actual selling price was $375,000, what is the error for this specific house in terms of:
a) Absolute Error
b) Squared Error

**Answer 2:**
a) **Absolute Error:** $| \text{Actual Price} - \text{Predicted Price} | = | \$375,000 - \$350,000 | = \$25,000$.
b) **Squared Error:** $(\text{Actual Price} - \text{Predicted Price})^2 = (\$375,000 - \$350,000)^2 = (\$25,000)^2 = 625,000,000$.

**Question 3 (Conceptual):**
Why is it important to evaluate a supervised learning model on a dataset it has not seen during training?

**Answer 3:**
It's crucial to evaluate a model on unseen data to ensure it can **generalize** to new, real-world situations. Evaluating only on the training data would be misleading because the model might have simply "memorized" the training examples (overfitting). An evaluation on unseen data (like a test set) reveals how well the model has learned the underlying patterns and can make accurate predictions on new data.

---

### 6. Important Points to Remember

*   **Supervised learning requires labeled data.** The "supervision" comes from these labels.
*   **The choice of algorithm depends on the problem type:** Regression for continuous numerical outputs, Classification for categorical outputs.
*   **Features are the inputs, the target is the output.**
*   **Data preprocessing is a critical step** before model training.
*   **Model evaluation is essential** to understand how well the model performs and to avoid overfitting.
*   **Generalization is the ultimate goal:** a model should perform well on new, unseen data.

---
