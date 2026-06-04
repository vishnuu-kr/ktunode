---
title: "Evaluate model performance with and without feature scaling."
subject: "MACHINE LEARNING LAB"
module: "Module 6: Implement a logistic regression model to predict the likelihood of a disease using the Pima Indians Diabetes dataset. Compare the performance with and without feature scaling."
branch: "Computer Science and Engineering"
semester: 5
topicId: "684162770fc9aa1fdbc8b954"
status: "completed"
scrapedAt: "2026-05-20T16:47:18.866Z"
---
# MACHINE LEARNING LAB - Module 6: Logistic Regression with Pima Indians Diabetes Dataset - Evaluating Feature Scaling

**Topic:** Evaluate model performance with and without feature scaling.

**Description:** Implement a logistic regression model to predict the likelihood of diabetes using the Pima Indians Diabetes dataset. Compare the performance with and without feature scaling.

**Learning Outcomes:**

*   Understand the Pima Indians Diabetes dataset.
*   Implement a logistic regression model using Python libraries (e.g., scikit-learn).
*   Apply feature scaling techniques (e.g., StandardScaler, MinMaxScaler).
*   Evaluate the performance of the logistic regression model using appropriate metrics (e.g., accuracy, precision, recall, F1-score, ROC AUC).
*   Compare model performance with and without feature scaling.
*   Understand the benefits and drawbacks of feature scaling for logistic regression.
*   Interpret the results and draw conclusions about the impact of feature scaling on model performance.

---

## 1. Introduction to the Pima Indians Diabetes Dataset

*   **Description:** The Pima Indians Diabetes Dataset is a dataset originally from the National Institute of Diabetes and Digestive and Kidney Diseases. It aims to predict whether or not a patient has diabetes, based on diagnostic measurements.

*   **Features:** The dataset typically contains the following features:

    *   **Pregnancies:** Number of times pregnant.
    *   **Glucose:** Plasma glucose concentration a 2 hours in an oral glucose tolerance test.
    *   **BloodPressure:** Diastolic blood pressure (mm Hg).
    *   **SkinThickness:** Triceps skin fold thickness (mm).
    *   **Insulin:** 2-Hour serum insulin (mu U/ml).
    *   **BMI:** Body mass index (weight in kg/(height in m)^2).
    *   **DiabetesPedigreeFunction:** Diabetes pedigree function.
    *   **Age:** Age (years).
    *   **Outcome:** Class variable (0 or 1), where 1 indicates the presence of diabetes.

*   **Availability:** The dataset is readily available online, often found on platforms like Kaggle or through the UCI Machine Learning Repository.  It is also included in scikit-learn's dataset collection.

## 2. Logistic Regression: A Brief Overview

*   **Definition:** Logistic regression is a linear model used for binary classification problems. It predicts the probability of a binary outcome (0 or 1) based on a linear combination of input features.  It uses the sigmoid function to map the linear combination to a probability between 0 and 1.

*   **Equation:**  The probability *p* of the outcome being 1 is given by:

    ```
    p = 1 / (1 + e^(-z))
    z = b0 + b1*x1 + b2*x2 + ... + bn*xn
    ```

    Where:
        *   *p* is the predicted probability.
        *   *e* is Euler's number (approximately 2.71828).
        *   *z* is the linear combination of features.
        *   *b0* is the intercept (bias).
        *   *b1, b2, ..., bn* are the coefficients (weights) for each feature.
        *   *x1, x2, ..., xn* are the feature values.

*   **Key Concepts:**

    *   **Sigmoid Function:**  Transforms the linear combination into a probability.
    *   **Threshold:**  A probability threshold (usually 0.5) is used to classify the outcome. If p >= threshold, predict 1; otherwise, predict 0.
    *   **Cost Function:**  Logistic regression uses a cost function (e.g., cross-entropy) to optimize the coefficients.
    *   **Optimization Algorithms:** Algorithms like gradient descent are used to minimize the cost function and find the optimal coefficients.

## 3. Feature Scaling Techniques

*   **Importance:** Feature scaling is a crucial preprocessing step when features have different scales.  It prevents features with larger values from dominating the model and can improve the convergence speed and performance of optimization algorithms.

*   **Common Techniques:**

    *   **StandardScaler (Z-score normalization):** Scales features to have a mean of 0 and a standard deviation of 1.

        ```
        x_scaled = (x - mean) / standard_deviation
        ```

    *   **MinMaxScaler:** Scales features to a specific range (typically between 0 and 1).

        ```
        x_scaled = (x - min) / (max - min)
        ```

*   **Why Feature Scaling Matters for Logistic Regression:**

    *   **Convergence Speed:**  Features with larger ranges can slow down the convergence of gradient descent algorithms.
    *   **Coefficient Interpretation:**  Scaled features make it easier to compare the relative importance of coefficients.
    *   **Regularization:** Feature scaling is particularly important when using regularization techniques (L1 or L2) in logistic regression, as regularization penalizes large coefficients.  Without scaling, features with large values could be unfairly penalized.
    *   **Distance-Based Models:**  While logistic regression isn't strictly a distance-based model, feature scaling can still impact its performance by preventing features with larger ranges from dominating the decision boundary.

## 4. Implementing Logistic Regression with and without Feature Scaling (Python Example)

```python
import numpy as np
import pandas as pd
from sklearn.model_selection import train_test_split
from sklearn.linear_model import LogisticRegression
from sklearn.preprocessing import StandardScaler, MinMaxScaler
from sklearn.metrics import accuracy_score, classification_report, roc_auc_score
import warnings
warnings.filterwarnings('ignore')

# 1. Load the dataset (replace with your actual data loading)
try:
    from sklearn.datasets import load_diabetes
    data = pd.read_csv('diabetes.csv')  # Replace 'diabetes.csv' if the file name is different.
except FileNotFoundError:
    print("Error: The 'diabetes.csv' file was not found.  Please ensure it is in the correct directory.")
    exit()
except Exception as e:
    print(f"An error occurred while loading the data: {e}")
    exit()

X = data.drop('Outcome', axis=1)
y = data['Outcome']


# 2. Split the data into training and testing sets
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.3, random_state=42)

# 3. Logistic Regression WITHOUT Feature Scaling
model_no_scaling = LogisticRegression()
model_no_scaling.fit(X_train, y_train)
y_pred_no_scaling = model_no_scaling.predict(X_test)
y_prob_no_scaling = model_no_scaling.predict_proba(X_test)[:, 1]  # Probabilities for ROC AUC

# 4. Logistic Regression WITH Feature Scaling (StandardScaler)
scaler = StandardScaler()
X_train_scaled = scaler.fit_transform(X_train)
X_test_scaled = scaler.transform(X_test)

model_scaled = LogisticRegression()
model_scaled.fit(X_train_scaled, y_train)
y_pred_scaled = model_scaled.predict(X_test_scaled)
y_prob_scaled = model_scaled.predict_proba(X_test_scaled)[:, 1] # Probabilities for ROC AUC


# 5. Evaluate Model Performance
print("--- Model Performance WITHOUT Feature Scaling ---")
print("Accuracy:", accuracy_score(y_test, y_pred_no_scaling))
print("Classification Report:\n", classification_report(y_test, y_pred_no_scaling))
print("ROC AUC:", roc_auc_score(y_test, y_prob_no_scaling))

print("\n--- Model Performance WITH Feature Scaling (StandardScaler) ---")
print("Accuracy:", accuracy_score(y_test, y_pred_scaled))
print("Classification Report:\n", classification_report(y_test, y_pred_scaled))
print("ROC AUC:", roc_auc_score(y_test, y_prob_scaled))
```

**Explanation:**

1.  **Data Loading and Splitting:** The code loads the Pima Indians Diabetes dataset and splits it into training and testing sets. `test_size=0.3` indicates that 30% of the data will be used for testing, and `random_state=42` ensures reproducibility. The `try...except` block helps handle errors during file loading.
2.  **Logistic Regression without Scaling:** A logistic regression model is trained directly on the unscaled training data. Predictions are made on the unscaled test data.
3.  **Feature Scaling:** A `StandardScaler` is used to scale the training and testing data.  It is crucial to `fit` the scaler only on the *training* data and then `transform` both the training and testing data. This prevents data leakage from the test set into the training process.
4.  **Logistic Regression with Scaling:** A new logistic regression model is trained on the scaled training data and used to make predictions on the scaled test data.
5.  **Evaluation:** The performance of both models is evaluated using accuracy, classification report (precision, recall, F1-score), and ROC AUC.  The classification report provides a detailed breakdown of the model's performance for each class. ROC AUC is a good metric for imbalanced datasets.

## 5. Evaluating Model Performance Metrics

*   **Accuracy:**  The proportion of correctly classified instances.  (TP + TN) / (TP + TN + FP + FN).  Can be misleading if the dataset is imbalanced.

*   **Precision:**  The proportion of correctly predicted positive instances out of all instances predicted as positive. TP / (TP + FP).  High precision means the model makes fewer false positive errors.

*   **Recall (Sensitivity):** The proportion of correctly predicted positive instances out of all actual positive instances. TP / (TP + FN).  High recall means the model captures most of the actual positive cases.

*   **F1-Score:**  The harmonic mean of precision and recall.  2 * (Precision * Recall) / (Precision + Recall).  Provides a balanced measure of precision and recall.

*   **ROC AUC (Area Under the Receiver Operating Characteristic Curve):**  Measures the ability of the model to distinguish between classes.  An AUC of 1 represents a perfect classifier, and an AUC of 0.5 represents a classifier that performs no better than random chance. It is particularly useful when dealing with imbalanced datasets because it considers the ranking of probabilities rather than just the predicted class labels.

    *   **ROC Curve:** Plots the true positive rate (TPR) against the false positive rate (FPR) at various threshold settings.

    *   **TPR (True Positive Rate):** Same as recall (TP / (TP + FN)).

    *   **FPR (False Positive Rate):** FP / (FP + TN).

## 6. Interpreting Results and Drawing Conclusions

*   **Compare the performance metrics:** After running the code, analyze the accuracy, precision, recall, F1-score, and ROC AUC for both models (with and without feature scaling).

*   **Expected Outcome:** You should generally observe that the model with feature scaling performs better or at least as well as the model without scaling. This is because feature scaling helps the optimization algorithm converge more effectively.  However, the degree of improvement depends on the dataset and the specific scaling method used.

*   **Consider the specific problem:** In the context of predicting diabetes, higher recall might be more important than higher precision.  It's better to identify more people who potentially have diabetes (even if it means some false positives) so they can get early treatment.  Therefore, analyze the classification report carefully, paying attention to the performance on the minority class (usually the positive class, indicating diabetes).

*   **Potential Reasons for No Improvement:**

    *   **Data Already on Similar Scales:** If the features in the dataset are already on roughly the same scale, feature scaling might not make a significant difference.
    *   **Dataset Characteristics:** Some datasets are inherently less sensitive to feature scaling.
    *   **Model Parameters:** The choice of regularization parameters (e.g., the `C` parameter in `LogisticRegression`) can also influence the impact of feature scaling.

## 7. Practice Questions/Exercises

1.  **Question:** What are the main benefits of feature scaling for logistic regression?
    *   **Answer:** Improves convergence speed, facilitates coefficient interpretation, is essential for regularization techniques, and can prevent features with larger ranges from dominating the model.

2.  **Question:** Explain the difference between StandardScaler and MinMaxScaler.
    *   **Answer:** StandardScaler scales features to have a mean of 0 and a standard deviation of 1, while MinMaxScaler scales features to a specific range (typically 0 to 1).

3.  **Question:** Why is it important to `fit` the scaler only on the training data and then `transform` both the training and testing data?
    *   **Answer:** To prevent data leakage.  Fitting the scaler on the entire dataset would allow information from the test set to influence the scaling of the training data, leading to overly optimistic performance estimates.

4.  **Question:**  How would you choose between using StandardScaler and MinMaxScaler?
    *   **Answer:** If the data has outliers, StandardScaler might be more appropriate as MinMaxScaler is sensitive to outliers. If the data does not have outliers and a specific range (e.g., 0 to 1) is desired, MinMaxScaler is a good choice. In general, it's a good practice to try both and compare the results.  Also consider the algorithm you are using. Some algorithms are more sensitive to the scale of the data than others.

5.  **Question:** Modify the code to use MinMaxScaler instead of StandardScaler.  Run the code and compare the results.  Are the results different? Why or why not?
    *   **Answer:** (See the code modification below). The results might be slightly different depending on the distribution of the data. MinMaxScaler can be more sensitive to outliers.

```python
# Modified code with MinMaxScaler
import numpy as np
import pandas as pd
from sklearn.model_selection import train_test_split
from sklearn.linear_model import LogisticRegression
from sklearn.preprocessing import StandardScaler, MinMaxScaler
from sklearn.metrics import accuracy_score, classification_report, roc_auc_score

# 1. Load the dataset
data = pd.read_csv('diabetes.csv')  # Replace 'diabetes.csv' if the file name is different.

X = data.drop('Outcome', axis=1)
y = data['Outcome']

# 2. Split the data into training and testing sets
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.3, random_state=42)

# 4. Logistic Regression WITH Feature Scaling (MinMaxScaler)
scaler = MinMaxScaler()
X_train_scaled = scaler.fit_transform(X_train)
X_test_scaled = scaler.transform(X_test)

model_scaled = LogisticRegression()
model_scaled.fit(X_train_scaled, y_train)
y_pred_scaled = model_scaled.predict(X_test_scaled)
y_prob_scaled = model_scaled.predict_proba(X_test_scaled)[:, 1]


# 5. Evaluate Model Performance
print("\n--- Model Performance WITH Feature Scaling (MinMaxScaler) ---")
print("Accuracy:", accuracy_score(y_test, y_pred_scaled))
print("Classification Report:\n", classification_report(y_test, y_pred_scaled))
print("ROC AUC:", roc_auc_score(y_test, y_prob_scaled))
```

## 8. Important Points to Remember

*   **Feature scaling is often beneficial but not always necessary.**  Experiment to see if it improves performance.
*   **Always fit the scaler on the training data only.**
*   **Consider the distribution of your data and the specific algorithm when choosing a scaling method.**
*   **Evaluate your model using appropriate metrics for your problem.**
*   **Pay attention to the performance on the minority class if you have an imbalanced dataset.**
*   **Regularization plays a crucial role in Logistic Regression. Try different values for `C` (the inverse of regularization strength) and observe how it affects performance. Feature scaling becomes even more important when using regularization.**
