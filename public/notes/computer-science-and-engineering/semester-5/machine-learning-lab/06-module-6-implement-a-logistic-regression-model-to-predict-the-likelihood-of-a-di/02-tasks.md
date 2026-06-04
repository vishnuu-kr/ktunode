---
title: "Tasks:"
subject: "MACHINE LEARNING LAB"
module: "Module 6: Implement a logistic regression model to predict the likelihood of a disease using the Pima Indians Diabetes dataset. Compare the performance with and without feature scaling."
branch: "Computer Science and Engineering"
semester: 5
topicId: "684162770fc9aa1fdbc8b951"
status: "completed"
scrapedAt: "2026-05-20T16:47:16.701Z"
---
## MACHINE LEARNING LAB - Module 6: Logistic Regression and Feature Scaling for Diabetes Prediction

**Topic:** Implementing a Logistic Regression Model to predict diabetes using the Pima Indians Diabetes dataset and comparing performance with and without feature scaling.

**Learning Outcomes:**

*   Understand the principles of Logistic Regression.
*   Load and preprocess the Pima Indians Diabetes dataset.
*   Implement a Logistic Regression model using Python and libraries like scikit-learn.
*   Apply feature scaling techniques like Standardization and Min-Max Scaling.
*   Evaluate model performance using appropriate metrics (accuracy, precision, recall, F1-score, ROC AUC).
*   Compare the performance of Logistic Regression models with and without feature scaling.
*   Interpret the results and draw conclusions about the impact of feature scaling.

---

### 1. Introduction to Logistic Regression

*   **Definition:** Logistic Regression is a statistical model used to predict the probability of a binary outcome (0 or 1, True or False, Yes or No).  It's a linear model but uses the sigmoid function to map the output to a probability between 0 and 1.
*   **Key Concepts:**
    *   **Sigmoid Function (Logistic Function):**  σ(z) = 1 / (1 + e<sup>-z</sup>)
        *   This function takes any real-valued number `z` as input and outputs a value between 0 and 1.
        *   `z` is the linear combination of input features and their corresponding weights: `z = w0 + w1*x1 + w2*x2 + ... + wn*xn` where `w` are the weights/coefficients and `x` are the features.
    *   **Decision Boundary:**  The threshold value above which the model predicts one class (e.g., diabetes present) and below which it predicts the other (e.g., diabetes absent).  Commonly 0.5.
    *   **Cost Function (Log Loss/Binary Cross-Entropy):** Measures the error between predicted probabilities and actual labels. The goal is to minimize this cost.
    *   **Gradient Descent:** An optimization algorithm used to find the optimal weights (coefficients) that minimize the cost function.
*   **When to Use Logistic Regression:**
    *   Binary classification problems.
    *   When you need probabilistic outputs.
    *   When features are relatively independent.
*   **Example:** Predicting whether a customer will click on an ad (click/no-click), whether a patient has a disease (present/absent), or whether an email is spam (spam/not spam).

### 2. The Pima Indians Diabetes Dataset

*   **Description:** The Pima Indians Diabetes dataset is a classic dataset used for binary classification. It contains medical diagnostic measurements from Pima Indian women and indicates whether each patient has diabetes.
*   **Features:**
    *   `Pregnancies`: Number of times pregnant
    *   `Glucose`: Plasma glucose concentration a 2 hours in an oral glucose tolerance test
    *   `BloodPressure`: Diastolic blood pressure (mm Hg)
    *   `SkinThickness`: Triceps skin fold thickness (mm)
    *   `Insulin`: 2-Hour serum insulin (mu U/ml)
    *   `BMI`: Body mass index (weight in kg/(height in m)^2)
    *   `DiabetesPedigreeFunction`: Diabetes pedigree function
    *   `Age`: Age (years)
*   **Target Variable:**
    *   `Outcome`: Class variable (0 or 1), indicating whether the patient has diabetes (1) or not (0).
*   **Loading the Data (Python - Example using Pandas):**

    ```python
    import pandas as pd

    # Load the dataset
    data = pd.read_csv("diabetes.csv")  # Replace "diabetes.csv" with the actual path
    print(data.head())
    ```

### 3. Implementing Logistic Regression with scikit-learn (Python)

*   **Steps:**
    1.  **Import necessary libraries:**
        ```python
        from sklearn.model_selection import train_test_split
        from sklearn.linear_model import LogisticRegression
        from sklearn.metrics import accuracy_score, classification_report, roc_auc_score
        ```
    2.  **Prepare the data:**
        *   Separate features (X) and target variable (y).
        *   Split the data into training and testing sets.
        ```python
        X = data.drop('Outcome', axis=1)
        y = data['Outcome']
        X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42) # 80% train, 20% test
        ```
    3.  **Create and train the Logistic Regression model:**
        ```python
        model = LogisticRegression(max_iter=1000) # Increase max_iter for convergence
        model.fit(X_train, y_train)
        ```
    4.  **Make predictions on the test set:**
        ```python
        y_pred = model.predict(X_test)
        y_pred_proba = model.predict_proba(X_test)[:, 1] # Probabilities for class 1
        ```
    5.  **Evaluate the model:**
        ```python
        accuracy = accuracy_score(y_test, y_pred)
        report = classification_report(y_test, y_pred)
        roc_auc = roc_auc_score(y_test, y_pred_proba)

        print(f"Accuracy: {accuracy}")
        print(f"Classification Report:\n{report}")
        print(f"ROC AUC: {roc_auc}")
        ```

### 4. Feature Scaling

*   **Definition:** Feature scaling is a data preprocessing technique used to normalize the range of independent variables or features of data.
*   **Why Feature Scaling?**
    *   **Improves Algorithm Performance:** Algorithms like Logistic Regression (especially when using gradient descent) converge faster when features are on a similar scale.
    *   **Prevents Feature Domination:** Features with larger values might dominate the learning process if not scaled.
    *   **Required by Distance-Based Algorithms:** Feature scaling is essential for algorithms that rely on distance calculations (e.g., k-NN, SVM with RBF kernel).
*   **Common Feature Scaling Techniques:**
    *   **Standardization (Z-score scaling):**
        *   Transforms data to have a mean of 0 and a standard deviation of 1.
        *   Formula:  `z = (x - μ) / σ`  where `x` is the original value, `μ` is the mean, and `σ` is the standard deviation.
        *   Good for data with a normal distribution.
        *   **Python (using scikit-learn):**
            ```python
            from sklearn.preprocessing import StandardScaler
            scaler = StandardScaler()
            X_train_scaled = scaler.fit_transform(X_train) # Fit on training data, then transform
            X_test_scaled = scaler.transform(X_test)      # Transform test data using fitted scaler
            ```
    *   **Min-Max Scaling (Normalization):**
        *   Transforms data to a range between 0 and 1.
        *   Formula:  `x' = (x - min) / (max - min)`  where `x` is the original value, `min` is the minimum value in the feature, and `max` is the maximum value in the feature.
        *   Good for data with a known bounded range.
        *   **Python (using scikit-learn):**
            ```python
            from sklearn.preprocessing import MinMaxScaler
            scaler = MinMaxScaler()
            X_train_scaled = scaler.fit_transform(X_train) # Fit on training data, then transform
            X_test_scaled = scaler.transform(X_test)      # Transform test data using fitted scaler
            ```
*   **Important Note:**
    *   **Fit on Training Data, Transform on Test Data:** Always fit the scaler on the *training* data and then use the *same* fitted scaler to transform the *test* data. This prevents data leakage and ensures a realistic evaluation.

### 5. Comparing Performance with and without Feature Scaling

1.  **Train Logistic Regression model without scaling:**  (Already done in Section 3)
2.  **Scale the data using Standardization or Min-Max Scaling:** (Example below using Standardization)

    ```python
    from sklearn.preprocessing import StandardScaler
    scaler = StandardScaler()
    X_train_scaled = scaler.fit_transform(X_train)
    X_test_scaled = scaler.transform(X_test)
    ```
3.  **Train a new Logistic Regression model on the scaled data:**

    ```python
    model_scaled = LogisticRegression(max_iter=1000)
    model_scaled.fit(X_train_scaled, y_train)
    ```
4.  **Make predictions on the scaled test set:**

    ```python
    y_pred_scaled = model_scaled.predict(X_test_scaled)
    y_pred_proba_scaled = model_scaled.predict_proba(X_test_scaled)[:, 1]
    ```
5.  **Evaluate the model trained on scaled data:**

    ```python
    accuracy_scaled = accuracy_score(y_test, y_pred_scaled)
    report_scaled = classification_report(y_test, y_pred_scaled)
    roc_auc_scaled = roc_auc_score(y_test, y_pred_proba_scaled)

    print(f"Accuracy (Scaled): {accuracy_scaled}")
    print(f"Classification Report (Scaled):\n{report_scaled}")
    print(f"ROC AUC (Scaled): {roc_auc_scaled}")
    ```
6.  **Compare the results:** Compare the accuracy, precision, recall, F1-score, and ROC AUC of the model trained without scaling to the model trained with scaling.

*   **Expected Outcome:** You should generally see an improvement in performance (especially convergence and potentially accuracy) when using feature scaling. The extent of the improvement can vary depending on the dataset and the chosen scaling method.

### 6. Evaluation Metrics

*   **Accuracy:** The proportion of correctly classified instances. `(TP + TN) / (TP + TN + FP + FN)`
*   **Precision:** The proportion of true positives among the instances predicted as positive. `TP / (TP + FP)`
*   **Recall (Sensitivity):** The proportion of true positives that were correctly identified. `TP / (TP + FN)`
*   **F1-score:** The harmonic mean of precision and recall. `2 * (Precision * Recall) / (Precision + Recall)`
*   **ROC AUC (Area Under the Receiver Operating Characteristic Curve):**  Measures the ability of the classifier to distinguish between classes. A higher AUC indicates better performance.  Interpreted as the probability that the model ranks a random positive instance higher than a random negative instance.
*   **Confusion Matrix:** A table that summarizes the performance of a classification model by showing the counts of true positives (TP), true negatives (TN), false positives (FP), and false negatives (FN).

    |             | Predicted Positive | Predicted Negative |
    |-------------|--------------------|--------------------|
    | Actual Positive | True Positive (TP)  | False Negative (FN) |
    | Actual Negative | False Positive (FP) | True Negative (TN)  |

### 7. Interpretation and Conclusions

*   **Analyze the results:**  Based on the evaluation metrics, determine whether feature scaling improved the performance of the Logistic Regression model for diabetes prediction.
*   **Consider the dataset:**  Reflect on how the characteristics of the Pima Indians Diabetes dataset (e.g., different feature ranges) might have contributed to the observed impact of feature scaling.
*   **Generalizability:**  Discuss the implications of these findings for applying Logistic Regression to other datasets and the importance of considering feature scaling as a preprocessing step.

### 8. Practice Questions/Exercises

1.  **Load the Pima Indians Diabetes dataset and identify missing values.**  How would you handle them? (Answer: Use `data.isnull().sum()` or `data.isna().sum()` to identify missing values.  Common approaches to handling them include imputation with the mean, median, or a constant value, or removing rows with missing values, depending on the amount of missing data and the potential impact on the analysis.)
2.  **Implement Logistic Regression *without* feature scaling using a different train/test split (e.g., `test_size=0.3` and `random_state=123`).** How does the accuracy change? (Answer: Accuracy will likely vary depending on the specific split.  Different splits can lead to different model performance.)
3.  **Implement Logistic Regression *with* Min-Max scaling instead of Standardization.**  Compare the results. Which scaling method appears to perform better for this dataset and this model? (Answer: The impact can vary; experiment and compare the evaluation metrics. Sometimes standardization works better, sometimes Min-Max. There isn't a definitive answer without empirical testing.)
4.  **Try different values for the `random_state` parameter in the `train_test_split` function.**  What does `random_state` control, and why is it important? (Answer: `random_state` controls the shuffling of the data before splitting. Setting it to a specific value ensures that you get the same train/test split each time you run the code, which is crucial for reproducibility. If not set, each run will give you a different split and potentially different results.)
5. **Increase the number of features (e.g. using polynomial features or feature crossing), and evaluate the impact of feature scaling.** (Answer: PolynomialFeatures creates new features by raising existing ones to a power (e.g., squaring) or multiplying them. The increased feature space can exacerbate the need for feature scaling.)
6.  **Explain the benefits of using ROC AUC as an evaluation metric, especially in the context of imbalanced datasets.** (Answer:  ROC AUC measures the ability of the classifier to distinguish between classes, regardless of the class distribution. Unlike accuracy, it's less sensitive to imbalanced datasets because it considers the trade-off between the true positive rate and the false positive rate.  This makes it a more reliable metric for evaluating performance when one class is much more frequent than the other.)

### 9. Important Points to Remember

*   **Feature scaling is not always necessary, but it's often beneficial, especially for algorithms like Logistic Regression.**
*   **Always fit the scaler on the training data and transform both the training and test data using the same fitted scaler.**
*   **Choose the appropriate feature scaling technique based on the characteristics of your data.**
*   **Evaluate model performance using appropriate metrics and compare the results with and without feature scaling.**
*   **Interpret the results and draw conclusions about the impact of feature scaling on the specific problem.**
*   **Understand the difference between `fit()` and `transform()` methods in scikit-learn scalers.** `fit()` calculates the scaling parameters (e.g., mean and standard deviation), while `transform()` applies the scaling using those parameters.
