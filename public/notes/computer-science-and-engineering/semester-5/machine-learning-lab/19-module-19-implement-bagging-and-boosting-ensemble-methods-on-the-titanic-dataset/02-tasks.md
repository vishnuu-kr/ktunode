---
title: "Tasks:"
subject: "MACHINE LEARNING LAB"
module: "Module 19: Implement bagging and boosting ensemble methods on the Titanic dataset. Compare the performance of both methods in terms of accuracy, precision, recall, and F1"
branch: "Computer Science and Engineering"
semester: 5
topicId: "684162770fc9aa1fdbc8b9ac"
status: "completed"
scrapedAt: "2026-05-20T16:48:13.380Z"
---
# MACHINE LEARNING LAB: Module 19 - Bagging and Boosting on the Titanic Dataset

## Introduction

This module focuses on implementing and comparing two popular ensemble methods: Bagging and Boosting.  We will apply these techniques to the classic Titanic dataset, evaluating their performance using accuracy, precision, recall, and F1-score.

## Learning Outcomes

Upon completion of this module, you will be able to:

*   Implement Bagging ensemble methods using scikit-learn.
*   Implement Boosting ensemble methods using scikit-learn.
*   Apply Bagging and Boosting to the Titanic dataset.
*   Evaluate the performance of Bagging and Boosting models using accuracy, precision, recall, and F1-score.
*   Compare the performance of Bagging and Boosting methods.
*   Explain the key differences between Bagging and Boosting.
*   Understand the concept of ensemble learning and its benefits.

## 1. Key Concepts and Definitions

*   **Ensemble Learning:** A machine learning technique that combines multiple base models (e.g., decision trees) to create a stronger, more robust model. The underlying principle is that combining the predictions of multiple weaker learners can often result in a more accurate and generalizable prediction than relying on a single, complex model.

*   **Base Learner (Weak Learner):** An individual model within an ensemble. Typically, these are simple models like decision trees with limited depth or linear models.

*   **Variance:**  A measure of how much a model's predictions vary for different training datasets. High variance indicates that the model is sensitive to the specific training data and may overfit.

*   **Bias:** A measure of how much a model's predictions deviate from the true values. High bias indicates that the model is making strong assumptions about the data and may underfit.

*   **Overfitting:** When a model learns the training data too well, including the noise and outliers. It performs well on the training data but poorly on unseen data.

*   **Underfitting:** When a model is too simple to capture the underlying patterns in the data. It performs poorly on both training and unseen data.

## 2. Bagging (Bootstrap Aggregating)

*   **Definition:** A parallel ensemble method where multiple base learners are trained on different subsets of the *training data*. These subsets are created by *sampling with replacement* from the original training set, a process known as bootstrapping.  Each base learner is trained independently. The final prediction is made by aggregating the predictions of all base learners (e.g., through averaging for regression or majority voting for classification).

*   **How it Works:**
    1.  **Bootstrapping:** Create multiple random subsets of the training data by sampling with replacement.
    2.  **Training:** Train a base learner (e.g., decision tree) on each bootstrap sample.
    3.  **Aggregation:** Combine the predictions of all base learners. For classification, this is typically done by majority voting. For regression, it's done by averaging.

*   **Benefits:**
    *   Reduces variance and therefore reduces overfitting.
    *   Easy to parallelize since each base learner is trained independently.

*   **Example:**  Random Forest is a popular bagging algorithm that uses decision trees as base learners.

*   **Scikit-learn Implementation (BaggingClassifier):**

    ```python
    from sklearn.ensemble import BaggingClassifier
    from sklearn.tree import DecisionTreeClassifier
    from sklearn.model_selection import train_test_split
    from sklearn.metrics import accuracy_score, precision_score, recall_score, f1_score
    import pandas as pd

    # Load the Titanic dataset
    data = pd.read_csv("titanic.csv")  # Replace "titanic.csv" with the actual path

    # Preprocessing (simple example - you'll need to expand this for a complete model)
    data = data.fillna(data.mean())  # Fill missing values with the mean
    data['Sex'] = data['Sex'].map({'male': 0, 'female': 1})  # Convert sex to numerical
    data = data[['Survived', 'Pclass', 'Sex', 'Age', 'SibSp', 'Parch', 'Fare']]
    data = data.dropna()

    X = data.drop('Survived', axis=1)
    y = data['Survived']

    # Split the data into training and testing sets
    X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.3, random_state=42)

    # Create a BaggingClassifier
    bagging_classifier = BaggingClassifier(base_estimator=DecisionTreeClassifier(),
                                           n_estimators=100,  # Number of base learners
                                           random_state=42)

    # Train the model
    bagging_classifier.fit(X_train, y_train)

    # Make predictions
    y_pred = bagging_classifier.predict(X_test)

    # Evaluate the model
    accuracy = accuracy_score(y_test, y_pred)
    precision = precision_score(y_test, y_pred)
    recall = recall_score(y_test, y_pred)
    f1 = f1_score(y_test, y_pred)

    print("Bagging Classifier Performance:")
    print(f"Accuracy: {accuracy}")
    print(f"Precision: {precision}")
    print(f"Recall: {recall}")
    print(f"F1-score: {f1}")
    ```

*   **Key Parameters:**

    *   `base_estimator`:  The base learner to be used (e.g., `DecisionTreeClassifier`, `SVC`, `LogisticRegression`).
    *   `n_estimators`: The number of base learners to create.  A higher number generally improves performance, but increases computation time.
    *   `max_samples`:  The number of samples to draw from the training data to train each base estimator.
    *   `max_features`: The number of features to draw from the training data to train each base estimator.
    *   `random_state`:  For reproducibility.

## 3. Boosting

*   **Definition:** A sequential ensemble method where base learners are trained iteratively. Each subsequent base learner focuses on correcting the errors made by the previous learners. Boosting algorithms assign weights to the training instances, giving more weight to misclassified instances. The final prediction is a weighted combination of the predictions from all base learners.

*   **How it Works:**
    1.  **Initial Training:** Train a base learner on the original training data.
    2.  **Weighting:**  Assign weights to the training instances based on the errors made by the previous learner.  Instances that were misclassified are given higher weights.
    3.  **Sequential Training:** Train the next base learner on the re-weighted training data.  This forces the new learner to focus on the instances that were difficult for the previous learner.
    4.  **Repeat:** Repeat steps 2 and 3 for a specified number of iterations.
    5.  **Aggregation:** Combine the predictions of all base learners, typically with weights reflecting their performance.

*   **Benefits:**
    *   Can achieve high accuracy by focusing on difficult instances.
    *   Reduces both bias and variance, although reducing bias is its primary strength.

*   **Examples:**
    *   **AdaBoost (Adaptive Boosting):**  Assigns weights to both training instances and base learners.
    *   **Gradient Boosting:**  Trains base learners to predict the residual errors of the previous learners. Common implementations include XGBoost, LightGBM, and CatBoost.

*   **Scikit-learn Implementation (AdaBoostClassifier):**

    ```python
    from sklearn.ensemble import AdaBoostClassifier
    from sklearn.tree import DecisionTreeClassifier
    from sklearn.model_selection import train_test_split
    from sklearn.metrics import accuracy_score, precision_score, recall_score, f1_score
    import pandas as pd

    # Load the Titanic dataset (same as before)
    data = pd.read_csv("titanic.csv")  # Replace "titanic.csv" with the actual path

    # Preprocessing (same as before - important for consistent comparison)
    data = data.fillna(data.mean())  # Fill missing values with the mean
    data['Sex'] = data['Sex'].map({'male': 0, 'female': 1})  # Convert sex to numerical
    data = data[['Survived', 'Pclass', 'Sex', 'Age', 'SibSp', 'Parch', 'Fare']]
    data = data.dropna()

    X = data.drop('Survived', axis=1)
    y = data['Survived']

    # Split the data into training and testing sets (same as before)
    X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.3, random_state=42)


    # Create an AdaBoostClassifier
    adaboost_classifier = AdaBoostClassifier(base_estimator=DecisionTreeClassifier(max_depth=1), #Stumps often work well
                                           n_estimators=50,  # Number of base learners
                                           random_state=42)

    # Train the model
    adaboost_classifier.fit(X_train, y_train)

    # Make predictions
    y_pred = adaboost_classifier.predict(X_test)

    # Evaluate the model
    accuracy = accuracy_score(y_test, y_pred)
    precision = precision_score(y_test, y_pred)
    recall = recall_score(y_test, y_pred)
    f1 = f1_score(y_test, y_pred)

    print("AdaBoost Classifier Performance:")
    print(f"Accuracy: {accuracy}")
    print(f"Precision: {precision}")
    print(f"Recall: {recall}")
    print(f"F1-score: {f1}")
    ```

*   **Key Parameters (AdaBoostClassifier):**

    *   `base_estimator`: The base learner to be used (e.g., `DecisionTreeClassifier`).  Stumps (decision trees with a single split) are commonly used.
    *   `n_estimators`: The number of base learners to create.
    *   `learning_rate`:  A shrinkage parameter that reduces the contribution of each base learner. A smaller learning rate requires a larger number of estimators.
    *   `random_state`:  For reproducibility.

## 4. Performance Metrics

*   **Accuracy:** The proportion of correctly classified instances.  Formula: (True Positives + True Negatives) / (Total Instances).  Good for balanced datasets.

*   **Precision:** The proportion of correctly predicted positive instances out of all instances predicted as positive. Formula: True Positives / (True Positives + False Positives).  Important when minimizing false positives is crucial.

*   **Recall (Sensitivity):** The proportion of correctly predicted positive instances out of all actual positive instances.  Formula: True Positives / (True Positives + False Negatives). Important when minimizing false negatives is crucial.

*   **F1-score:** The harmonic mean of precision and recall.  Formula: 2 * (Precision * Recall) / (Precision + Recall). Provides a balanced measure of performance when precision and recall are both important.

## 5. Comparing Bagging and Boosting

| Feature         | Bagging                               | Boosting                                 |
|-----------------|----------------------------------------|------------------------------------------|
| Training        | Parallel                               | Sequential                                |
| Base Learners    | Independent                            | Dependent (each learner focuses on errors of previous) |
| Goal            | Reduce variance                         | Reduce bias and variance                  |
| Sensitivity to Noise | Less sensitive                      | More sensitive to noisy data (can overfit more easily) |
| Weighting       | No weighting of instances             | Weights assigned to instances, focusing on misclassified ones |
| Examples        | Random Forest                          | AdaBoost, Gradient Boosting (XGBoost, LightGBM, CatBoost) |

## 6. Applying Bagging and Boosting to the Titanic Dataset

The provided code snippets demonstrate the basic implementation of Bagging and Boosting on the Titanic dataset. To get a complete comparison, you should:

1.  **Complete Data Preprocessing:** Handle missing values more robustly (e.g., using imputation with strategies other than the mean).  Consider feature engineering (creating new features from existing ones, like combining "SibSp" and "Parch" into a "FamilySize" feature).  Scale numerical features. Encode categorical features correctly.

2.  **Hyperparameter Tuning:**  Experiment with different hyperparameters for both Bagging and Boosting models. Use techniques like Grid Search or Randomized Search with cross-validation to find the optimal hyperparameter settings.

3.  **Cross-Validation:** Use cross-validation (e.g., k-fold cross-validation) to obtain a more reliable estimate of the model's performance.

4.  **Compare Performance:**  Calculate accuracy, precision, recall, and F1-score for both models on the same test dataset after performing hyperparameter tuning and cross-validation.  Compare the results and draw conclusions about which method performs better on this dataset.  Consider reporting confidence intervals for the performance metrics.

## 7. Practice Questions/Exercises

1.  **What is ensemble learning, and why is it used?**
    *   **Answer:** Ensemble learning combines multiple base models to create a stronger model. It is used to improve accuracy, reduce variance, and reduce bias.

2.  **Explain the difference between Bagging and Boosting.**
    *   **Answer:** Bagging trains base learners in parallel on bootstrapped samples of the data to reduce variance. Boosting trains base learners sequentially, with each learner focusing on correcting the errors of the previous ones, to reduce bias and variance.

3.  **What performance metrics should be used to evaluate a classification model on an imbalanced dataset? Why?**
    *   **Answer:** Accuracy can be misleading on imbalanced datasets. Precision, recall, and F1-score are better metrics because they consider the true positives, false positives, and false negatives, providing a more comprehensive evaluation of the model's performance on both classes.

4.  **Implement a Random Forest classifier on the Titanic dataset and evaluate its performance using accuracy, precision, recall, and F1-score.** (See example code - you need to pre-process the data yourself).

5.  **Implement a Gradient Boosting classifier (e.g., using XGBoost) on the Titanic dataset and evaluate its performance using accuracy, precision, recall, and F1-score. Compare the results with Bagging and AdaBoost.** (This requires installing the XGBoost library).

6. **Why is feature scaling important when using certain machine learning algorithms, and how might it impact the performance of Bagging and Boosting?**
    * **Answer:** Feature scaling is important for algorithms sensitive to the magnitude of features, such as those using distance calculations (e.g., KNN) or gradient descent (e.g., linear regression, neural networks). While decision tree-based algorithms used in Bagging and Boosting are generally less sensitive, feature scaling can still indirectly affect performance. For instance, in Gradient Boosting, a base learner more sensitive to unscaled features might lead to a suboptimal sequence of learners. Additionally, it can influence regularization techniques, leading to different model complexities and performance.

## 8. Important Points to Remember

*   **Data Preprocessing is Crucial:** The performance of any machine learning model, including ensemble methods, heavily depends on the quality of the data. Thoroughly preprocess the Titanic dataset before training your models.
*   **Hyperparameter Tuning Matters:** Finding the optimal hyperparameters for Bagging and Boosting algorithms can significantly improve their performance.
*   **Cross-Validation is Essential:** Use cross-validation to get a reliable estimate of the model's performance and avoid overfitting.
*   **Understand the Trade-offs:** Bagging is generally good for reducing variance and preventing overfitting, while Boosting is good for reducing both bias and variance but can be more prone to overfitting if not tuned carefully.
*   **Experiment with Different Base Learners:**  Try different base learners to see which ones work best for the Titanic dataset.

By completing the tasks and exercises in this module, you will gain a solid understanding of Bagging and Boosting ensemble methods and their application to the Titanic dataset. You will also develop the skills to evaluate and compare their performance using appropriate metrics. Good luck!
