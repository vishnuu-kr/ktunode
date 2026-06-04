---
title: "Compare performance metrics and discuss the strengths and weaknesses of each method."
subject: "MACHINE LEARNING LAB"
module: "Module 19: Implement bagging and boosting ensemble methods on the Titanic dataset. Compare the performance of both methods in terms of accuracy, precision, recall, and F1"
branch: "Computer Science and Engineering"
semester: 5
topicId: "684162770fc9aa1fdbc8b9b0"
status: "completed"
scrapedAt: "2026-05-20T16:48:16.251Z"
---
# MACHINE LEARNING LAB - Module 19: Bagging vs. Boosting on Titanic Dataset

**Topic:** Compare performance metrics and discuss the strengths and weaknesses of Bagging and Boosting ensemble methods.

**Learning Outcomes:**

*   Implement Bagging and Boosting ensemble methods.
*   Apply these methods to the Titanic dataset.
*   Compare the performance of Bagging and Boosting using accuracy, precision, recall, and F1-score.
*   Discuss the strengths and weaknesses of Bagging and Boosting.
*   Understand the underlying principles of each ensemble method.

## 1. Introduction to Ensemble Methods

*   **Definition:** Ensemble methods combine multiple individual models to create a stronger, more robust model. The idea is that the "wisdom of the crowd" (of models) is often better than relying on a single model.

*   **Types of Ensemble Methods:**
    *   **Bagging (Bootstrap Aggregating):** Trains multiple models independently on different subsets of the training data.
    *   **Boosting:** Trains models sequentially, where each subsequent model tries to correct the errors of the previous model.

## 2. Bagging (Bootstrap Aggregating)

*   **Key Concept:** Reducing variance. Bagging is particularly effective for high-variance models (models that overfit).

*   **How it Works:**
    1.  **Bootstrap Sampling:** Create multiple (e.g., 'n') subsets of the training data by sampling with replacement. This means some data points might be duplicated in a subset, and others might be left out.
    2.  **Model Training:** Train a base model (e.g., Decision Tree, Logistic Regression) on each bootstrap sample independently.
    3.  **Aggregation:** Combine the predictions of all 'n' models.
        *   **Classification:** Majority voting (the class predicted by the most models wins).
        *   **Regression:** Averaging the predicted values.

*   **Example:** Random Forest is a popular bagging algorithm using Decision Trees as base learners.

*   **Strengths of Bagging:**
    *   Reduces variance and overfitting.
    *   Simple to implement and parallelize.
    *   Can improve accuracy significantly.

*   **Weaknesses of Bagging:**
    *   May not significantly improve performance if the base learner is already very stable (low variance).
    *   Can be computationally expensive, especially with a large number of base models.

## 3. Boosting

*   **Key Concept:** Reducing bias. Boosting is effective for models with high bias (models that underfit).

*   **How it Works:**
    1.  **Sequential Training:** Models are trained sequentially.
    2.  **Weighted Data:** Each data point is assigned a weight. Initially, all weights are equal.
    3.  **Error Correction:**  Subsequent models focus on correcting the errors made by previous models by assigning higher weights to misclassified data points.
    4.  **Weighted Combination:** The final prediction is a weighted combination of the predictions from all models, where models with lower error rates have higher weights.

*   **Common Boosting Algorithms:**
    *   **AdaBoost (Adaptive Boosting):**  Assigns weights to both data points and models based on their performance.
    *   **Gradient Boosting:**  Trains models to predict the residual errors of previous models.
    *   **XGBoost (Extreme Gradient Boosting):**  An optimized version of Gradient Boosting with regularization and parallel processing capabilities.
    *   **LightGBM (Light Gradient Boosting Machine):** Uses a novel tree learning algorithm and gradient-based one-side sampling to improve speed and efficiency.
    *   **CatBoost (Category Boosting):** Handles categorical features effectively and robustly.

*   **Strengths of Boosting:**
    *   Can achieve very high accuracy, often outperforming bagging.
    *   Adaptively focuses on difficult-to-classify instances.

*   **Weaknesses of Boosting:**
    *   More prone to overfitting than bagging if not carefully tuned (e.g., regularization parameters).
    *   Can be more computationally expensive than bagging, especially for complex algorithms.
    *   Sensitive to noisy data and outliers.

## 4. Implementing Bagging and Boosting on the Titanic Dataset

**Steps:**

1.  **Data Loading and Preprocessing:**
    *   Load the Titanic dataset (e.g., using Pandas in Python).
    *   Handle missing values (e.g., imputation with mean/median or using a constant value).
    *   Encode categorical features (e.g., using One-Hot Encoding or Label Encoding).
    *   Split the data into training and testing sets.
    *   Scale numeric features (optional, but often beneficial for algorithms sensitive to feature scaling).

2.  **Bagging Implementation:**
    *   Choose a base model (e.g., DecisionTreeClassifier).
    *   Use `BaggingClassifier` from `sklearn.ensemble`.
    *   Specify the number of base models (`n_estimators`).
    *   Train the BaggingClassifier on the training data.
    *   Make predictions on the testing data.

    ```python
    from sklearn.ensemble import BaggingClassifier
    from sklearn.tree import DecisionTreeClassifier
    from sklearn.model_selection import train_test_split
    from sklearn.metrics import accuracy_score, precision_score, recall_score, f1_score
    import pandas as pd

    # Load the Titanic dataset (replace 'titanic.csv' with the actual path)
    df = pd.read_csv('titanic.csv')

    # Preprocessing (simplified example)
    df['Sex'] = df['Sex'].map({'male': 0, 'female': 1})
    df['Embarked'] = df['Embarked'].fillna(df['Embarked'].mode()[0]) # Fill missing Embarked values with mode
    df['Embarked'] = df['Embarked'].map({'S': 0, 'C': 1, 'Q': 2})

    # Drop unnecessary columns and rows with remaining missing values
    df = df.drop(['Name', 'Ticket', 'Cabin', 'PassengerId'], axis=1)
    df = df.dropna()

    X = df.drop('Survived', axis=1)
    y = df['Survived']

    # Split into training and testing sets
    X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)


    # Initialize and train BaggingClassifier
    bagging = BaggingClassifier(base_estimator=DecisionTreeClassifier(), n_estimators=100, random_state=42)
    bagging.fit(X_train, y_train)

    # Make predictions
    y_pred_bagging = bagging.predict(X_test)

    # Evaluate performance
    accuracy_bagging = accuracy_score(y_test, y_pred_bagging)
    precision_bagging = precision_score(y_test, y_pred_bagging)
    recall_bagging = recall_score(y_test, y_pred_bagging)
    f1_bagging = f1_score(y_test, y_pred_bagging)

    print("Bagging Performance:")
    print(f"Accuracy: {accuracy_bagging:.4f}")
    print(f"Precision: {precision_bagging:.4f}")
    print(f"Recall: {recall_bagging:.4f}")
    print(f"F1-Score: {f1_bagging:.4f}")
    ```

3.  **Boosting Implementation:**
    *   Choose a boosting algorithm (e.g., AdaBoostClassifier, GradientBoostingClassifier, XGBoost).
    *   Use the corresponding class from `sklearn.ensemble` or the `xgboost` library.
    *   Specify parameters such as the number of estimators (`n_estimators`), learning rate (`learning_rate`), and maximum tree depth (`max_depth`).
    *   Train the boosting model on the training data.
    *   Make predictions on the testing data.

    ```python
    from sklearn.ensemble import AdaBoostClassifier

    # Initialize and train AdaBoostClassifier
    adaboost = AdaBoostClassifier(n_estimators=100, random_state=42)
    adaboost.fit(X_train, y_train)

    # Make predictions
    y_pred_adaboost = adaboost.predict(X_test)

    # Evaluate performance
    accuracy_adaboost = accuracy_score(y_test, y_pred_adaboost)
    precision_adaboost = precision_score(y_test, y_pred_adaboost)
    recall_adaboost = recall_score(y_test, y_pred_adaboost)
    f1_adaboost = f1_score(y_test, y_pred_adaboost)

    print("\nAdaBoost Performance:")
    print(f"Accuracy: {accuracy_adaboost:.4f}")
    print(f"Precision: {precision_adaboost:.4f}")
    print(f"Recall: {recall_adaboost:.4f}")
    print(f"F1-Score: {f1_adaboost:.4f}")
    ```

4.  **Performance Evaluation:**
    *   Calculate the following metrics for both Bagging and Boosting:
        *   **Accuracy:** The proportion of correctly classified instances.  (TP + TN) / (TP + TN + FP + FN)
        *   **Precision:** The proportion of correctly predicted positive instances out of all instances predicted as positive. TP / (TP + FP)
        *   **Recall (Sensitivity):** The proportion of correctly predicted positive instances out of all actual positive instances. TP / (TP + FN)
        *   **F1-Score:** The harmonic mean of precision and recall, providing a balanced measure of performance. 2 * (Precision * Recall) / (Precision + Recall)

5.  **Comparison:**
    *   Compare the values of accuracy, precision, recall, and F1-score for Bagging and Boosting.
    *   Analyze the results to determine which method performed better on the Titanic dataset.
    *   Discuss the potential reasons for the observed performance differences based on the strengths and weaknesses of each method.  For example, if boosting overfits, it might have high training accuracy but lower testing accuracy.
    *   Consider the impact of hyperparameter tuning on the performance of both methods.

## 5. Performance Metrics Explained

*   **Accuracy:**
    *   **Definition:** Overall correctness of the model.
    *   **Pros:** Easy to understand.
    *   **Cons:** Can be misleading when dealing with imbalanced datasets (where one class has significantly more instances than the other).

*   **Precision:**
    *   **Definition:** Measures how many of the positive predictions were actually correct.
    *   **Pros:** Useful when the cost of false positives is high.
    *   **Cons:** Ignores false negatives.

*   **Recall (Sensitivity):**
    *   **Definition:** Measures how many of the actual positive cases were correctly predicted.
    *   **Pros:** Useful when the cost of false negatives is high.
    *   **Cons:** Ignores false positives.

*   **F1-Score:**
    *   **Definition:** Harmonic mean of precision and recall.
    *   **Pros:** Provides a balanced measure, especially when dealing with imbalanced datasets.
    *   **Cons:** Can be harder to interpret than accuracy.

*   **Choosing the Right Metric:** The best metric depends on the specific problem and the costs associated with different types of errors.  For example, in medical diagnosis, recall might be more important than precision if missing a disease (false negative) has serious consequences.

## 6. Strengths and Weaknesses Summary

| Feature        | Bagging                         | Boosting                               |
|----------------|---------------------------------|----------------------------------------|
| **Goal**       | Reduce Variance                | Reduce Bias                              |
| **Training**   | Parallel                       | Sequential                               |
| **Base Learner** | Typically unstable (e.g., Trees) | Can use stable learners, but more commonly unstable ones. |
| **Overfitting** | Less prone                      | More prone, requires careful tuning       |
| **Complexity** | Simpler                         | More complex                            |
| **Robustness** | More robust to outliers         | Less robust to outliers                |
| **Computational Cost** | Can be high, but parallelizable   | Can be very high due to sequential training |

## 7. Practice Questions/Exercises

1.  **Question:** Explain the difference between Bagging and Boosting in terms of how models are trained and combined.

    **Answer:** Bagging trains models independently on different subsets of the training data and combines their predictions through majority voting (classification) or averaging (regression). Boosting trains models sequentially, where each subsequent model focuses on correcting the errors of the previous model.  The final prediction is a weighted combination of the predictions.

2.  **Question:** What is the purpose of bootstrap sampling in Bagging?

    **Answer:** Bootstrap sampling creates multiple subsets of the training data by sampling with replacement.  This allows each base model to be trained on a slightly different dataset, reducing the variance of the ensemble.

3.  **Question:** Why might boosting be more prone to overfitting than bagging?

    **Answer:** Boosting focuses on correcting the errors of previous models, which can lead to overfitting if the model is too complex or if the data contains noise. Careful tuning of hyperparameters is needed to prevent overfitting in boosting.

4.  **Question:**  In a fraud detection scenario, is it more important to have high precision or high recall? Why?

    **Answer:** Recall is generally more important in fraud detection.  Failing to detect fraudulent transactions (false negatives) has a higher cost than incorrectly flagging legitimate transactions as fraudulent (false positives).  Therefore, maximizing recall (the ability to detect all actual fraudulent transactions) is crucial.

5. **Exercise:**  Experiment with different base learners (e.g., Logistic Regression, Support Vector Machines) in the BaggingClassifier. How does the choice of base learner affect the performance on the Titanic dataset?
    **Answer:**  This will vary, but generally Decision Trees are the most effective base learner for bagging because they tend to have high variance, which bagging helps to reduce. Logistic Regression and SVMs, being more stable, might not see as much improvement from bagging.

6. **Exercise:** Tune the hyperparameters of the AdaBoostClassifier, such as `n_estimators` and `learning_rate`.  How do these parameters affect the performance of the model?
    **Answer:**  Increasing `n_estimators` can improve performance up to a point, but can also lead to overfitting. A smaller `learning_rate` often requires a larger `n_estimators` to achieve optimal performance.  Experimentation and cross-validation are key to finding the best hyperparameter values.

## 8. Important Points to Remember

*   Bagging reduces variance, while boosting reduces bias.
*   Choose the appropriate ensemble method based on the characteristics of your data and the type of model you are trying to build.
*   Proper hyperparameter tuning is crucial for both Bagging and Boosting to avoid overfitting or underfitting.
*   Consider the trade-offs between accuracy, precision, recall, and F1-score when evaluating model performance.
*   Imbalanced datasets can significantly impact performance metrics; consider using techniques like oversampling or undersampling to address this issue.
