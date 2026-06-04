---
title: "Implement bagging and boosting ensemble methods on the Titanic dataset. Compare the performance of both methods in terms of accuracy, precision, recall, and F1-score. Discuss how each method improves model performance and their respective strengths and weaknesses."
subject: "MACHINE LEARNING LAB"
module: "Module 19: Implement bagging and boosting ensemble methods on the Titanic dataset. Compare the performance of both methods in terms of accuracy, precision, recall, and F1"
branch: "Computer Science and Engineering"
semester: 5
topicId: "684162770fc9aa1fdbc8b9ab"
status: "completed"
scrapedAt: "2026-05-20T16:48:12.675Z"
---
# MACHINE LEARNING LAB - Module 19: Bagging and Boosting on the Titanic Dataset

**Topic:** Implement bagging and boosting ensemble methods on the Titanic dataset. Compare the performance of both methods in terms of accuracy, precision, recall, and F1-score. Discuss how each method improves model performance and their respective strengths and weaknesses.

**Learning Outcomes:**

*   Understand the principles behind bagging and boosting ensemble methods.
*   Implement bagging and boosting using appropriate libraries (e.g., scikit-learn) in Python.
*   Apply bagging and boosting to the Titanic dataset for classification.
*   Evaluate the performance of bagging and boosting models using accuracy, precision, recall, and F1-score.
*   Compare and contrast the performance of bagging and boosting on the Titanic dataset.
*   Explain how bagging and boosting improve model performance.
*   Identify the strengths and weaknesses of bagging and boosting.

## 1. Introduction to Ensemble Methods

*   **Definition:** Ensemble methods combine multiple individual models (often called "base learners") to create a stronger, more robust model. The idea is that combining diverse perspectives can lead to better predictions than relying on a single model.
*   **Types of Ensemble Methods:**
    *   **Bagging (Bootstrap Aggregating):** Reduces variance by training multiple models on different subsets of the training data and aggregating their predictions.
    *   **Boosting:** Reduces bias by sequentially training models, where each subsequent model focuses on correcting the mistakes of previous models.
    *   **Stacking:** Combines predictions from multiple models using another model (a "meta-learner"). This is not the focus of this module but is good to keep in mind.

## 2. Bagging (Bootstrap Aggregating)

*   **Key Concept:** Creates multiple versions of a predictor by training on different random subsets of the training data (sampling with replacement).
*   **Algorithm:**
    1.  **Bootstrap Sampling:**  Create multiple (e.g., *n*) bootstrap samples from the original training data. A bootstrap sample is a random sample of the same size as the original dataset, taken with replacement (meaning a data point can be selected multiple times).
    2.  **Model Training:** Train a separate base learner (e.g., decision tree, logistic regression) on each bootstrap sample. These base learners are typically of the same type.
    3.  **Aggregation:** Combine the predictions of all base learners.
        *   **Classification:**  Majority voting (the class predicted by most learners is the final prediction).
        *   **Regression:** Averaging (the average of the predicted values is the final prediction).

*   **How Bagging Improves Performance:**
    *   **Reduces Variance:** By averaging or voting across multiple models trained on different subsets of the data, bagging reduces the impact of outliers and noisy data, leading to a more stable and generalizable model.
    *   **Improved Stability:** Less sensitive to changes in the training data.

*   **Example:**  Random Forest is a popular bagging algorithm using decision trees as base learners.

*   **Strengths:**
    *   Simple to implement.
    *   Reduces variance, leading to more stable models.
    *   Can be parallelized (each model can be trained independently).
    *   Effective for high-variance models (e.g., decision trees).

*   **Weaknesses:**
    *   May not significantly improve performance for low-variance models.
    *   Can be computationally expensive (especially for large datasets and complex models).
    *   Models can be highly correlated if bootstrap samples are not diverse enough.

## 3. Boosting

*   **Key Concept:** Sequentially trains models, where each model focuses on correcting the mistakes of previous models. Weights are assigned to data points, with higher weights given to misclassified instances.
*   **Algorithm:**
    1.  **Initialization:**  Assign equal weights to all data points in the training set.
    2.  **Iterative Training:**
        *   Train a base learner (e.g., decision stump - a shallow decision tree) on the weighted training data.
        *   Calculate the error rate of the model.
        *   Calculate a weight for the model based on its error rate.  Better models get higher weights.
        *   Update the weights of the data points. Increase the weights of misclassified data points and decrease the weights of correctly classified data points.
    3.  **Aggregation:** Combine the predictions of all base learners, weighted by their respective weights.

*   **How Boosting Improves Performance:**
    *   **Reduces Bias:**  By focusing on misclassified instances, boosting iteratively improves the model's ability to capture complex relationships in the data and reduce bias.
    *   **Improved Accuracy:**  By combining the strengths of multiple weak learners, boosting can create a strong, accurate model.

*   **Examples:**
    *   **AdaBoost (Adaptive Boosting):**  One of the original boosting algorithms.
    *   **Gradient Boosting Machines (GBM):**  A generalization of boosting that allows for different loss functions and base learners.
    *   **XGBoost (Extreme Gradient Boosting):**  An optimized and highly popular implementation of gradient boosting.
    *   **LightGBM (Light Gradient Boosting Machine):** Another gradient boosting framework that uses tree-based learning algorithms. It is designed to be distributed and efficient with the following advantages: Faster training speed and higher efficiency. Lower memory usage. Better accuracy. Support of parallel and GPU learning. Capable of handling large-scale data.
    *   **CatBoost (Category Boosting):**  A gradient boosting algorithm that handles categorical features well.

*   **Strengths:**
    *   Can significantly improve accuracy compared to single models.
    *   Effective for reducing both bias and variance.
    *   Can handle complex relationships in the data.

*   **Weaknesses:**
    *   More complex to implement than bagging.
    *   More susceptible to overfitting if the boosting process is not carefully controlled (e.g., through regularization or early stopping).
    *   Can be sensitive to noisy data.
    *   Training can be computationally expensive, especially for large datasets and complex models.

## 4. Titanic Dataset and Implementation

*   **Dataset Description:** The Titanic dataset is a classic dataset in machine learning used for binary classification. The task is to predict whether a passenger survived the sinking of the Titanic based on features like passenger class, sex, age, number of siblings/spouses aboard, number of parents/children aboard, fare, and embarkation port.

*   **Implementation Steps (using scikit-learn in Python):**

    ```python
    import pandas as pd
    from sklearn.model_selection import train_test_split
    from sklearn.preprocessing import LabelEncoder, StandardScaler
    from sklearn.impute import SimpleImputer
    from sklearn.ensemble import BaggingClassifier, AdaBoostClassifier
    from sklearn.tree import DecisionTreeClassifier
    from sklearn.metrics import accuracy_score, precision_score, recall_score, f1_score
    from sklearn.linear_model import LogisticRegression

    # 1. Load the data
    data = pd.read_csv('titanic.csv')  # Replace 'titanic.csv' with the actual file path

    # 2. Preprocessing
    # Handle missing values
    data['Age'].fillna(data['Age'].median(), inplace=True)
    data['Embarked'].fillna(data['Embarked'].mode()[0], inplace=True)

    # Convert categorical features to numerical
    label_encoder = LabelEncoder()
    data['Sex'] = label_encoder.fit_transform(data['Sex'])
    data['Embarked'] = label_encoder.fit_transform(data['Embarked'])

    # Select features and target
    features = ['Pclass', 'Sex', 'Age', 'SibSp', 'Parch', 'Fare', 'Embarked']
    target = 'Survived'

    X = data[features]
    y = data[target]

    # Split data into training and testing sets
    X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)

    # Scale the features
    scaler = StandardScaler()
    X_train = scaler.fit_transform(X_train)
    X_test = scaler.transform(X_test)


    # 3. Bagging
    # Bagging with Decision Tree
    bagging_dt = BaggingClassifier(base_estimator=DecisionTreeClassifier(max_depth=5),
                                  n_estimators=100,  # Number of base learners
                                  random_state=42)
    bagging_dt.fit(X_train, y_train)
    y_pred_bagging_dt = bagging_dt.predict(X_test)

    # Bagging with Logistic Regression
    bagging_lr = BaggingClassifier(base_estimator=LogisticRegression(solver='liblinear', random_state=42),
                                  n_estimators=100,
                                  random_state=42)
    bagging_lr.fit(X_train, y_train)
    y_pred_bagging_lr = bagging_lr.predict(X_test)

    # 4. Boosting (AdaBoost)
    boosting = AdaBoostClassifier(base_estimator=DecisionTreeClassifier(max_depth=3),
                                   n_estimators=100,  # Number of base learners
                                   random_state=42)
    boosting.fit(X_train, y_train)
    y_pred_boosting = boosting.predict(X_test)


    # 5. Evaluation
    def evaluate_model(y_true, y_pred, model_name):
        accuracy = accuracy_score(y_true, y_pred)
        precision = precision_score(y_true, y_pred)
        recall = recall_score(y_true, y_pred)
        f1 = f1_score(y_true, y_pred)

        print(f"Model: {model_name}")
        print(f"Accuracy: {accuracy:.4f}")
        print(f"Precision: {precision:.4f}")
        print(f"Recall: {recall:.4f}")
        print(f"F1-score: {f1:.4f}")
        print("-" * 30)


    evaluate_model(y_test, y_pred_bagging_dt, "Bagging (Decision Tree)")
    evaluate_model(y_test, y_pred_bagging_lr, "Bagging (Logistic Regression)")
    evaluate_model(y_test, y_pred_boosting, "AdaBoost")
    ```

    **Explanation:**

    1.  **Data Loading and Preprocessing:**
        *   Loads the Titanic dataset using pandas.
        *   Handles missing values in the 'Age' and 'Embarked' columns by filling them with the median and mode, respectively.
        *   Converts categorical features ('Sex' and 'Embarked') to numerical representations using Label Encoding.
        *   Selects the features to be used for prediction and the target variable ('Survived').
        *   Splits the data into training and testing sets using `train_test_split`.
        *   Scales the features using `StandardScaler`.  This is crucial for algorithms like Logistic Regression and can improve the performance of Decision Trees as well.

    2.  **Bagging Implementation:**
        *   Creates a `BaggingClassifier` object.
        *   `base_estimator`:  Specifies the type of base learner to use.  Here, it's `DecisionTreeClassifier`.
        *   `n_estimators`:  Specifies the number of base learners (the number of trees in the forest).
        *   `random_state`: Sets the random seed for reproducibility.
        *   Fits the `BaggingClassifier` to the training data.
        *   Predicts the target variable for the test data.

    3.  **Boosting (AdaBoost) Implementation:**
        *   Creates an `AdaBoostClassifier` object.
        *   `base_estimator`:  Specifies the type of base learner to use.
        *   `n_estimators`:  Specifies the number of base learners.
        *   `random_state`: Sets the random seed for reproducibility.
        *   Fits the `AdaBoostClassifier` to the training data.
        *   Predicts the target variable for the test data.

    4.  **Evaluation:**
        *   Calculates the accuracy, precision, recall, and F1-score for each model using scikit-learn's metrics functions.
        *   Prints the evaluation results for each model.

    **Important Notes:**

    *   Replace `"titanic.csv"` with the actual path to your Titanic dataset file.
    *   The code includes basic data preprocessing steps. You may need to perform more extensive data cleaning and feature engineering to improve model performance. Consider handling missing values more intelligently (e.g., using different imputation techniques, feature engineering) and exploring other features.
    *   Experiment with different values for the hyperparameters of the bagging and boosting classifiers (e.g., `n_estimators`, `max_depth`, learning rate) to optimize model performance. Use techniques like cross-validation to select the best hyperparameter values.  Be careful not to overfit to the training data.
    *   Consider trying other boosting algorithms like Gradient Boosting Machines (GBM), XGBoost, LightGBM, and CatBoost for potentially better performance.

## 5. Comparing Bagging and Boosting on the Titanic Dataset

*   **Expected Observations:** You should observe that both bagging and boosting generally outperform a single decision tree or logistic regression model. This is because they leverage the power of ensemble learning to reduce variance and bias.
*   **Bagging (Decision Tree):** Typically improves accuracy and stability by reducing variance. It might not always yield the highest precision or recall, but provides a more robust and less overfit model. The performance of Bagging with logistic regression may be less pronounced.
*   **Boosting (AdaBoost):** Aims to improve accuracy by sequentially correcting errors made by previous models. It often results in higher precision and recall compared to bagging, but can be more prone to overfitting if not tuned properly.
*   **Factors Affecting Performance:** The performance of bagging and boosting depends on the choice of base learners, hyperparameter tuning, and the characteristics of the dataset.

## 6. Model Evaluation Metrics: Accuracy, Precision, Recall, and F1-score

*   **Accuracy:**  The proportion of correctly classified instances out of all instances.
    *   Formula: `Accuracy = (True Positives + True Negatives) / (Total Instances)`
    *   Good for balanced datasets, but can be misleading for imbalanced datasets.

*   **Precision:** The proportion of true positives out of all instances predicted as positive.
    *   Formula: `Precision = True Positives / (True Positives + False Positives)`
    *   Measures how well the model avoids false positives. High precision means the model is good at identifying the relevant instances, and doesn't incorrectly flag irrelevant ones.
    *   Important when minimizing false positives is crucial (e.g., spam detection).

*   **Recall (Sensitivity):** The proportion of true positives out of all actual positive instances.
    *   Formula: `Recall = True Positives / (True Positives + False Negatives)`
    *   Measures how well the model avoids false negatives. High recall means the model finds most of the relevant instances.
    *   Important when minimizing false negatives is crucial (e.g., medical diagnosis).

*   **F1-score:** The harmonic mean of precision and recall.
    *   Formula: `F1-score = 2 * (Precision * Recall) / (Precision + Recall)`
    *   Provides a balanced measure of precision and recall.  Useful when you want to balance the trade-off between false positives and false negatives.

## 7. Important Points to Remember

*   **Ensemble methods are powerful techniques for improving model performance.**
*   **Bagging reduces variance, while boosting reduces bias.**
*   **Hyperparameter tuning is crucial for both bagging and boosting.**
*   **Be aware of the potential for overfitting, especially with boosting.**
*   **Choose appropriate evaluation metrics based on the specific problem and the importance of different types of errors.**
*   **Consider the computational cost when choosing between bagging and boosting.**
*   **Explore different boosting algorithms (XGBoost, LightGBM, CatBoost) for potential performance improvements.**
*   **Feature engineering and data preprocessing are essential steps for any machine learning task.**

## 8. Practice Questions/Exercises

1.  **Explain the difference between bagging and boosting in terms of how they combine base learners.**
    *   **Answer:** Bagging trains base learners independently on different subsets of the data and aggregates their predictions (e.g., majority voting). Boosting trains base learners sequentially, where each model focuses on correcting the mistakes of previous models, and combines their predictions with weighted averaging.

2.  **Why is it important to tune the hyperparameters of bagging and boosting models?**
    *   **Answer:** Hyperparameter tuning helps to optimize the performance of the models and prevent overfitting.  Choosing the right hyperparameters can significantly impact the bias-variance tradeoff.

3.  **What are the potential consequences of overfitting when using boosting? How can you mitigate this?**
    *   **Answer:** Overfitting in boosting can lead to a model that performs well on the training data but poorly on unseen data. This can be mitigated by using techniques such as cross-validation, regularization (e.g., L1 or L2 regularization), and early stopping (monitoring performance on a validation set and stopping training when performance starts to degrade).

4.  **Consider the scenario where you need to build a model to predict whether a patient has a rare disease. Which evaluation metric (accuracy, precision, recall, or F1-score) would be most important and why?**
    *   **Answer:** Recall would be the most important metric. In this scenario, it's crucial to identify as many patients with the disease as possible, even if it means having some false positives. A high recall minimizes the risk of missing patients who need treatment.

5.  **Implement bagging and boosting on the Titanic dataset using a different base learner than the ones shown in the example code (e.g., Support Vector Machine, K-Nearest Neighbors). Evaluate the performance of these models and compare them to the results obtained with decision trees.**

    * **Answer:** This exercise allows students to get practical experience changing the `base_estimator` parameter within scikit-learn's `BaggingClassifier` and `AdaBoostClassifier`.  The key is ensuring the chosen base learner is suitable for both bagging/boosting and the problem at hand (classification).

6.  **Experiment with different values of `n_estimators` in both Bagging and Boosting.  Plot the accuracy on both the training and testing data as `n_estimators` increases. What do you observe?**
    * **Answer:** This explores the impact of the number of base learners. Generally, increasing `n_estimators` improves performance up to a point, after which performance might plateau or even decrease (due to overfitting, especially in boosting).  The training accuracy will likely always increase, while the testing accuracy shows the point of diminishing returns.

This detailed markdown provides a comprehensive study guide for the given topic, covering all learning outcomes, key concepts, and definitions with examples, practice questions and highlighted key points.  The code provides a runnable implementation, and the exercises encourage experimentation and deeper understanding.
