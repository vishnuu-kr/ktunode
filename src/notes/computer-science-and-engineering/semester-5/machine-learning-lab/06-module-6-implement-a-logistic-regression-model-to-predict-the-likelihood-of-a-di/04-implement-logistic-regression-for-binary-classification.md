---
title: "Implement logistic regression for binary classification."
subject: "MACHINE LEARNING LAB"
module: "Module 6: Implement a logistic regression model to predict the likelihood of a disease using the Pima Indians Diabetes dataset. Compare the performance with and without feature scaling."
branch: "Computer Science and Engineering"
semester: 5
topicId: "684162770fc9aa1fdbc8b953"
status: "completed"
scrapedAt: "2026-05-20T16:47:18.150Z"
---
# MACHINE LEARNING LAB - Module 6: Logistic Regression for Binary Classification (Pima Indians Diabetes Dataset)

**Topic:** Implement logistic regression for binary classification.

**Description:** Implement a logistic regression model to predict the likelihood of a disease using the Pima Indians Diabetes dataset. Compare the performance with and without feature scaling.

**Learning Outcomes:**

*   Understand the principles of logistic regression for binary classification.
*   Learn how to preprocess data, including handling missing values and feature scaling.
*   Implement logistic regression using Python and scikit-learn.
*   Evaluate the performance of a logistic regression model using appropriate metrics.
*   Compare the impact of feature scaling on the performance of logistic regression.

## 1. Introduction to Logistic Regression for Binary Classification

*   **Definition:** Logistic regression is a statistical method for analyzing a dataset in which there are one or more independent variables that determine an outcome. The outcome is measured with a dichotomous variable (in which there are only two possible outcomes). In this module, the outcome is whether or not a patient has diabetes (binary classification).
*   **Key Concepts:**
    *   **Binary Classification:**  A classification problem with two possible outcomes (e.g., 0 or 1, Yes or No, Diabetes or No Diabetes).
    *   **Sigmoid Function:** The core of logistic regression. It maps any real-valued number into a value between 0 and 1. The formula is:  `σ(z) = 1 / (1 + e^(-z))`. Where `z` is a linear combination of the input features: `z = wTx + b` (w = weights, x = features, b = bias).
    *   **Probability:** The output of the sigmoid function is interpreted as the probability of the positive class (e.g., the probability of having diabetes).
    *   **Decision Boundary:** A threshold (usually 0.5) is used to classify the data. If the probability is greater than 0.5, the data point is classified as belonging to the positive class; otherwise, it is classified as belonging to the negative class.
    *   **Cost Function (Log Loss):**  Used to measure the error of the model. Logistic regression typically uses the log loss function (also called cross-entropy loss):
        *   `J(w, b) = -[y * log(σ(z)) + (1 - y) * log(1 - σ(z))]`
        *   where `y` is the actual label (0 or 1) and `σ(z)` is the predicted probability.
    *   **Gradient Descent:** An optimization algorithm used to find the values of the weights (w) and bias (b) that minimize the cost function.

*   **Why Logistic Regression?**
    *   Simple and efficient.
    *   Provides probabilities for classification.
    *   Easy to interpret.
    *   Serves as a good baseline model.

## 2. The Pima Indians Diabetes Dataset

*   **Description:** This dataset contains medical diagnostic measurements from Pima Indian women aged 21 years and older. The goal is to predict whether a patient has diabetes, based on features like:
    *   **Pregnancies:** Number of times pregnant.
    *   **Glucose:** Plasma glucose concentration a 2 hours in an oral glucose tolerance test.
    *   **BloodPressure:** Diastolic blood pressure (mm Hg).
    *   **SkinThickness:** Triceps skin fold thickness (mm).
    *   **Insulin:** 2-Hour serum insulin (mu U/ml).
    *   **BMI:** Body mass index (weight in kg/(height in m)^2).
    *   **DiabetesPedigreeFunction:** Diabetes pedigree function.
    *   **Age:** Age (years).
    *   **Outcome:** Class variable (0 or 1, where 1 indicates diabetes).

*   **Dataset Characteristics:**  Typically contains missing values (often represented as 0), which need to be handled. Features have different scales, making feature scaling important.

## 3. Data Preprocessing

*   **Handling Missing Values:**
    *   **Identification:** Identify features with missing values (e.g., Glucose, BloodPressure, SkinThickness, Insulin, BMI may have zero values representing missing data).
    *   **Strategies:**
        *   **Deletion:** Remove rows with missing values (use with caution, as you might lose significant data).
        *   **Imputation:** Replace missing values with:
            *   **Mean/Median:**  Replace with the mean or median of the feature.  Median is often preferred when the feature distribution is skewed.
            *   **Mode:** Replace with the mode (most frequent value).
            *   **K-Nearest Neighbors (KNN) Imputation:** Use KNN to predict missing values based on other features.
    *   **Example (Python with Pandas):**

    ```python
    import pandas as pd
    import numpy as np
    from sklearn.impute import SimpleImputer

    # Load the dataset
    data = pd.read_csv('diabetes.csv') # Make sure 'diabetes.csv' is in the same directory

    # Replace 0 with NaN in relevant columns
    cols_to_replace = ['Glucose', 'BloodPressure', 'SkinThickness', 'Insulin', 'BMI']
    data[cols_to_replace] = data[cols_to_replace].replace(0, np.nan)

    # Impute missing values with the median
    imputer = SimpleImputer(strategy='median')  # You can also use 'mean' or 'most_frequent'
    data[cols_to_replace] = imputer.fit_transform(data[cols_to_replace])

    print(data.isnull().sum()) # Check for remaining missing values
    ```

*   **Feature Scaling:**
    *   **Why Feature Scaling?** Logistic regression is sensitive to the scale of input features. Features with larger values can dominate the model, leading to poor performance.
    *   **Methods:**
        *   **Standardization (Z-score scaling):**  Scales features to have a mean of 0 and a standard deviation of 1. Formula: `z = (x - μ) / σ`, where `μ` is the mean and `σ` is the standard deviation.
        *   **Min-Max Scaling:** Scales features to a range between 0 and 1.  Formula: `x_scaled = (x - min) / (max - min)`.
    *   **Example (Python with Scikit-learn):**

    ```python
    from sklearn.preprocessing import StandardScaler, MinMaxScaler

    # Standardization
    scaler_standard = StandardScaler()
    data_standardized = data.copy() # Create a copy to avoid modifying original data
    data_standardized.iloc[:, :-1] = scaler_standard.fit_transform(data_standardized.iloc[:, :-1]) # Scale all columns except the last one (outcome)

    # Min-Max Scaling
    scaler_minmax = MinMaxScaler()
    data_minmax = data.copy() # Create a copy to avoid modifying original data
    data_minmax.iloc[:, :-1] = scaler_minmax.fit_transform(data_minmax.iloc[:, :-1]) # Scale all columns except the last one (outcome)


    print("Standardized Data (First 5 rows):\n", data_standardized.head())
    print("\nMin-Max Scaled Data (First 5 rows):\n", data_minmax.head())
    ```

## 4. Implementing Logistic Regression

*   **Python with Scikit-learn:**

    ```python
    from sklearn.model_selection import train_test_split
    from sklearn.linear_model import LogisticRegression
    from sklearn.metrics import accuracy_score, classification_report, confusion_matrix

    # 1. Prepare Data (Example using Standardized Data)
    X = data_standardized.drop('Outcome', axis=1)
    y = data_standardized['Outcome']

    # 2. Split data into training and testing sets
    X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42) # Use a random_state for reproducibility

    # 3. Create and train the Logistic Regression model
    model = LogisticRegression(solver='liblinear', random_state=42) # 'liblinear' is suitable for small datasets
    model.fit(X_train, y_train)

    # 4. Make predictions on the test set
    y_pred = model.predict(X_test)

    # 5. Evaluate the model
    accuracy = accuracy_score(y_test, y_pred)
    print(f"Accuracy: {accuracy}")

    print("\nClassification Report:\n", classification_report(y_test, y_pred))

    print("\nConfusion Matrix:\n", confusion_matrix(y_test, y_pred))

    ```

*   **Explanation:**
    *   **Import Libraries:** Import necessary libraries from scikit-learn.
    *   **Prepare Data:**  Split the data into features (X) and target variable (y).
    *   **Split Data:** Divide the data into training and testing sets (e.g., 80% for training, 20% for testing).
    *   **Create and Train Model:** Create a `LogisticRegression` object and train it using the training data. The `solver` parameter specifies the optimization algorithm to use.  'liblinear' is good for smaller datasets.  Other options like 'lbfgs' or 'newton-cg' can be used for larger datasets.
    *   **Make Predictions:**  Use the trained model to predict the outcome on the test set.
    *   **Evaluate Model:**  Calculate the accuracy, precision, recall, F1-score, and confusion matrix to assess the model's performance.

## 5. Model Evaluation Metrics

*   **Accuracy:**  The proportion of correctly classified instances.  `Accuracy = (TP + TN) / (TP + TN + FP + FN)`.  Not always the best metric if the classes are imbalanced.
*   **Precision:** The proportion of correctly predicted positive instances out of all instances predicted as positive.  `Precision = TP / (TP + FP)`.  High precision means the model doesn't produce many false positives.
*   **Recall (Sensitivity):** The proportion of correctly predicted positive instances out of all actual positive instances.  `Recall = TP / (TP + FN)`.  High recall means the model doesn't miss many actual positives.
*   **F1-score:**  The harmonic mean of precision and recall.  `F1-score = 2 * (Precision * Recall) / (Precision + Recall)`.  Provides a balanced measure of the model's performance.
*   **Confusion Matrix:** A table that summarizes the performance of a classification model by showing the counts of true positive (TP), true negative (TN), false positive (FP), and false negative (FN) predictions.

    |                | Predicted Positive | Predicted Negative |
    |----------------|--------------------|--------------------|
    | **Actual Positive** | TP                | FN                |
    | **Actual Negative** | FP                | TN                |

## 6. Comparing Performance with and without Feature Scaling

*   **Experiment:** Train and evaluate logistic regression models *with* and *without* feature scaling (using both standardization and MinMax scaling).  Keep track of the performance metrics (accuracy, precision, recall, F1-score) for each model.
*   **Expected Results:**
    *   **With Feature Scaling:**  Generally, feature scaling improves the performance of logistic regression, particularly when features have significantly different scales. The convergence of gradient descent is faster and more stable.
    *   **Without Feature Scaling:**  Performance may be lower, and the model might take longer to converge.  Features with larger scales might dominate the decision-making process.
*   **Python Code (Extending the previous example):**

    ```python
    # Without Feature Scaling (using original data)
    X_unscaled = data.drop('Outcome', axis=1)
    y_unscaled = data['Outcome']
    X_train_unscaled, X_test_unscaled, y_train_unscaled, y_test_unscaled = train_test_split(X_unscaled, y_unscaled, test_size=0.2, random_state=42)
    model_unscaled = LogisticRegression(solver='liblinear', random_state=42)
    model_unscaled.fit(X_train_unscaled, y_train_unscaled)
    y_pred_unscaled = model_unscaled.predict(X_test_unscaled)
    accuracy_unscaled = accuracy_score(y_test_unscaled, y_pred_unscaled)
    print(f"Accuracy without Feature Scaling: {accuracy_unscaled}")

    # With Standardized Data (already done in the previous example)
    # (Accuracy results are already printed)

    # With MinMax Scaled Data
    X_minmax = data_minmax.drop('Outcome', axis=1)
    y_minmax = data_minmax['Outcome']
    X_train_minmax, X_test_minmax, y_train_minmax, y_test_minmax = train_test_split(X_minmax, y_minmax, test_size=0.2, random_state=42)
    model_minmax = LogisticRegression(solver='liblinear', random_state=42)
    model_minmax.fit(X_train_minmax, y_train_minmax)
    y_pred_minmax = model_minmax.predict(X_test_minmax)
    accuracy_minmax = accuracy_score(y_test_minmax, y_pred_minmax)
    print(f"Accuracy with MinMax Scaling: {accuracy_minmax}")


    # Compare Results (Example Output Interpretation - actual values will vary)
    # Accuracy without Feature Scaling: 0.7402597402597403
    # Accuracy with Standardized Data:     0.7662337662337663
    # Accuracy with MinMax Scaling:        0.7597402597402597
    ```

## 7. Important Points to Remember

*   **Data Preprocessing is Crucial:**  Handle missing values appropriately and perform feature scaling for optimal model performance.
*   **Choose the Right Solver:**  The `solver` parameter in `LogisticRegression` affects the optimization algorithm used.  'liblinear' is suitable for small datasets.
*   **Regularization:** Consider using regularization techniques (L1 or L2) to prevent overfitting. This can be set using the `penalty` and `C` parameters in `LogisticRegression`.  Smaller values of `C` imply stronger regularization.
*   **Class Imbalance:**  If the classes are significantly imbalanced, consider using techniques like oversampling (SMOTE), undersampling, or cost-sensitive learning.  You can also adjust the `class_weight` parameter in `LogisticRegression`.
*   **Interpretability:**  Logistic regression provides probabilities, which can be useful for understanding the model's confidence in its predictions.  You can also inspect the coefficients (weights) to see which features have the greatest impact on the outcome.
*   **Random State:** Set the `random_state` parameter in `train_test_split` and `LogisticRegression` for reproducibility.

## 8. Practice Questions/Exercises

1.  **Question:** What is the sigmoid function, and why is it used in logistic regression?
    *   **Answer:** The sigmoid function is a mathematical function that maps any real-valued number into a value between 0 and 1. It's used in logistic regression to predict the probability of a data point belonging to a particular class.

2.  **Question:** Explain the difference between standardization and min-max scaling. When is one preferred over the other?
    *   **Answer:**
        *   **Standardization:** Scales features to have a mean of 0 and a standard deviation of 1. It is sensitive to outliers but handles normally distributed data well.
        *   **Min-Max Scaling:** Scales features to a range between 0 and 1. It is sensitive to outliers and doesn't handle normally distributed data as well.
        *   **Preference:** Standardization is often preferred when the data follows a normal distribution, or when outliers are not a major concern. Min-max scaling is preferred when you need values between 0 and 1, or when you are dealing with image data where pixel values are typically in this range.

3.  **Question:** What are some strategies for handling missing values in the Pima Indians Diabetes dataset?
    *   **Answer:**  Deletion (removing rows with missing values), imputation with the mean, median, mode, or using KNN imputation. The median is often a good choice if the data is skewed.

4.  **Question:**  How do you evaluate the performance of a logistic regression model?
    *   **Answer:** Using metrics such as accuracy, precision, recall, F1-score, and the confusion matrix.  The choice of metric depends on the specific problem and the relative importance of different types of errors.

5.  **Question:** Write Python code to load the Pima Indians Diabetes dataset, replace missing values with the median, and split the data into training and testing sets.
    *   **Answer:** (See combined code below including Imputation and splitting the dataset)

6.  **Question:** Explain the purpose of the 'solver' parameter in the `LogisticRegression` function in scikit-learn. Give a brief explanation on 'liblinear' solver.
    *   **Answer:** The `solver` parameter specifies the optimization algorithm used to find the best parameters for the logistic regression model.  'liblinear' is suitable for smaller datasets and works well with L1 and L2 regularization.  Other options include 'lbfgs', 'newton-cg', 'sag', and 'saga', which are typically used for larger datasets. 'liblinear' uses a coordinate descent (CD) algorithm.

## 9. Complete Example Code (Combining all steps):

```python
import pandas as pd
import numpy as np
from sklearn.model_selection import train_test_split
from sklearn.linear_model import LogisticRegression
from sklearn.metrics import accuracy_score, classification_report, confusion_matrix
from sklearn.impute import SimpleImputer
from sklearn.preprocessing import StandardScaler

# 1. Load the dataset
data = pd.read_csv('diabetes.csv')  # Make sure 'diabetes.csv' is in the same directory

# 2. Handle Missing Values (Replace 0 with NaN and impute with median)
cols_to_replace = ['Glucose', 'BloodPressure', 'SkinThickness', 'Insulin', 'BMI']
data[cols_to_replace] = data[cols_to_replace].replace(0, np.nan)
imputer = SimpleImputer(strategy='median')
data[cols_to_replace] = imputer.fit_transform(data[cols_to_replace])

# 3. Feature Scaling (Standardization)
scaler = StandardScaler()
X = data.drop('Outcome', axis=1)
y = data['Outcome']
X_scaled = scaler.fit_transform(X) # Apply scaling to features

# 4. Split data into training and testing sets
X_train, X_test, y_train, y_test = train_test_split(X_scaled, y, test_size=0.2, random_state=42)

# 5. Create and train the Logistic Regression model
model = LogisticRegression(solver='liblinear', random_state=42)
model.fit(X_train, y_train)

# 6. Make predictions on the test set
y_pred = model.predict(X_test)

# 7. Evaluate the model
accuracy = accuracy_score(y_test, y_pred)
print(f"Accuracy: {accuracy}")

print("\nClassification Report:\n", classification_report(y_test, y_pred))

print("\nConfusion Matrix:\n", confusion_matrix(y_test, y_pred))

# Example - Training and evaluating a model without scaling

X_unscaled = data.drop('Outcome', axis = 1)
y_unscaled = data['Outcome']

X_train_unscaled, X_test_unscaled, y_train_unscaled, y_test_unscaled = train_test_split(X_unscaled, y_unscaled, test_size = 0.2, random_state = 42)
model_unscaled = LogisticRegression(solver = 'liblinear', random_state = 42)
model_unscaled.fit(X_train_unscaled, y_train_unscaled)

y_pred_unscaled = model_unscaled.predict(X_test_unscaled)
accuracy_unscaled = accuracy_score(y_test_unscaled, y_pred_unscaled)
print(f"Accuracy (Unscaled Data): {accuracy_unscaled}")
