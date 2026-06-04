---
title: "Implement bagging using a base classifier (e.g., decision tree) and evaluate performance."
subject: "MACHINE LEARNING LAB"
module: "Module 19: Implement bagging and boosting ensemble methods on the Titanic dataset. Compare the performance of both methods in terms of accuracy, precision, recall, and F1"
branch: "Computer Science and Engineering"
semester: 5
topicId: "684162770fc9aa1fdbc8b9ae"
status: "completed"
scrapedAt: "2026-05-20T16:48:14.839Z"
---
## MACHINE LEARNING LAB - Module 19: Bagging and Boosting on Titanic Dataset - Bagging Implementation

**Topic:** Implement bagging using a base classifier (e.g., decision tree) and evaluate performance.

**Learning Outcomes:**

*   Understand the concept of bagging as an ensemble method.
*   Implement bagging using a decision tree as the base classifier.
*   Evaluate the performance of the bagging model using accuracy, precision, recall, and F1-score.
*   Understand the bias-variance trade-off and how bagging affects it.

### 1. Introduction to Bagging (Bootstrap Aggregating)

*   **Definition:** Bagging, short for Bootstrap Aggregating, is an ensemble learning technique that aims to improve the stability and accuracy of machine learning algorithms. It involves training multiple instances of a base estimator on different subsets of the training data, and then averaging their predictions.

*   **Key Concepts:**
    *   **Bootstrap Sampling:**  Random sampling with replacement from the original training dataset to create multiple subsets.  Each subset has the same size as the original dataset, but some instances are duplicated, and others are omitted.
    *   **Base Estimator:** The individual machine learning algorithm used within the bagging ensemble. Common choices include decision trees, but other models can also be used.
    *   **Aggregation:** The process of combining the predictions from all base estimators. For classification, this usually involves majority voting.  For regression, it involves averaging the predictions.

*   **Why Bagging Works:**
    *   **Reduces Variance:** Bagging reduces the variance of the model by averaging the predictions of multiple models trained on different subsets of the data. This is particularly useful when the base estimator is prone to overfitting (i.e., high variance).
    *   **Improves Stability:**  Small changes in the training data will have a smaller impact on the ensemble's overall prediction, making the model more stable.
    *   **Parallelizable:** Each base estimator can be trained independently and in parallel, making bagging suitable for large datasets and distributed computing environments.

### 2. Implementing Bagging with Decision Trees (on Titanic Dataset)

*   **Base Classifier:** Decision Tree (e.g., `DecisionTreeClassifier` in scikit-learn). Decision trees are often used as base classifiers for bagging because they are relatively simple and have high variance (tend to overfit).

*   **Steps:**
    1.  **Data Preparation:** Load and pre-process the Titanic dataset.  This includes handling missing values, converting categorical features into numerical features (using one-hot encoding or similar), and splitting the data into training and testing sets.
    2.  **Bootstrap Sampling:** Generate multiple bootstrap samples from the training data.
    3.  **Train Base Estimators:** Train a decision tree classifier on each bootstrap sample.
    4.  **Prediction:** For each instance in the test set, obtain predictions from all trained decision trees.
    5.  **Aggregation (Majority Voting):**  For classification, the final prediction is the class that is predicted most often by the ensemble (majority voting).

*   **Python Implementation (using scikit-learn):**

    ```python
    import pandas as pd
    from sklearn.model_selection import train_test_split
    from sklearn.tree import DecisionTreeClassifier
    from sklearn.ensemble import BaggingClassifier
    from sklearn.metrics import accuracy_score, precision_score, recall_score, f1_score
    from sklearn.impute import SimpleImputer  # For handling missing values
    from sklearn.preprocessing import LabelEncoder # for encoding labels


    # 1. Load the Titanic Dataset (replace 'titanic.csv' with your file path)
    try:
        titanic_data = pd.read_csv('titanic.csv')
    except FileNotFoundError:
        print("Titanic dataset file not found. Please ensure 'titanic.csv' is in the correct directory.")
        exit()

    # 2. Data Preprocessing
    # Handle missing values - Impute with the mean for numerical columns and mode for categorical columns
    for col in titanic_data.columns:
        if titanic_data[col].isnull().any():
            if titanic_data[col].dtype == 'object':
                titanic_data[col] = titanic_data[col].fillna(titanic_data[col].mode()[0])
            else:
                titanic_data[col] = titanic_data[col].fillna(titanic_data[col].mean())

    # Convert categorical features into numerical
    label_encoder = LabelEncoder()
    titanic_data['Sex'] = label_encoder.fit_transform(titanic_data['Sex'])
    titanic_data['Embarked'] = label_encoder.fit_transform(titanic_data['Embarked'])

    # Select features and target variable
    features = ['Pclass', 'Sex', 'Age', 'SibSp', 'Parch', 'Fare', 'Embarked']  # Choose relevant features
    target = 'Survived'

    X = titanic_data[features]
    y = titanic_data[target]


    # 3. Split the Data into Training and Testing Sets
    X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)

    # 4. Initialize and Train the Bagging Classifier
    #  - base_estimator: Decision Tree (default)
    #  - n_estimators: Number of base estimators (decision trees)
    #  - random_state: For reproducibility
    bagging_clf = BaggingClassifier(n_estimators=100, random_state=42) # Increased n_estimators
    bagging_clf.fit(X_train, y_train)

    # 5. Make Predictions
    y_pred = bagging_clf.predict(X_test)

    # 6. Evaluate Performance
    accuracy = accuracy_score(y_test, y_pred)
    precision = precision_score(y_test, y_pred)
    recall = recall_score(y_test, y_pred)
    f1 = f1_score(y_test, y_pred)

    print("Bagging Classifier Performance:")
    print(f"Accuracy: {accuracy:.4f}")
    print(f"Precision: {precision:.4f}")
    print(f"Recall: {recall:.4f}")
    print(f"F1-Score: {f1:.4f}")
    ```

*   **Explanation of Code:**

    *   **Data Loading and Preprocessing:** Loads the Titanic dataset using pandas, handles missing values using `SimpleImputer`, and converts categorical features into numerical features using `LabelEncoder`.  Crucially, it now handles different datatypes during the missing value imputation stage, and defaults to using the most frequent value for categorical columns.
    *   **Train/Test Split:** Splits the data into training and testing sets using `train_test_split`.
    *   **BaggingClassifier Initialization:** Creates a `BaggingClassifier` object.  The `n_estimators` parameter controls the number of base estimators (decision trees) in the ensemble. A `random_state` is set for reproducibility.
    *   **Model Training:** Trains the bagging classifier using the training data.
    *   **Prediction:**  Uses the trained model to make predictions on the test data.
    *   **Evaluation:** Calculates and prints the accuracy, precision, recall, and F1-score using `sklearn.metrics`.

### 3. Evaluating Bagging Performance

*   **Metrics:**
    *   **Accuracy:** The proportion of correctly classified instances.
    *   **Precision:** The proportion of correctly predicted positive instances out of all instances predicted as positive.  (TP / (TP + FP))
    *   **Recall:** The proportion of correctly predicted positive instances out of all actual positive instances. (TP / (TP + FN))
    *   **F1-Score:** The harmonic mean of precision and recall.  A balanced metric that considers both false positives and false negatives.
    *   **Confusion Matrix:** A table that summarizes the performance of a classification model by showing the counts of true positive (TP), true negative (TN), false positive (FP), and false negative (FN) predictions.

*   **Interpretation:**
    *   Compare the performance of the bagging model to the performance of a single decision tree. Bagging should generally improve performance, especially if the decision tree is prone to overfitting.
    *   Analyze the precision and recall to understand the types of errors the model is making.  High precision means fewer false positives, while high recall means fewer false negatives.
    *   The F1-score provides a single metric that balances precision and recall.

### 4. Bias-Variance Trade-off and Bagging

*   **Bias:** The error introduced by approximating a real-world problem, which is often complex, by a simplified model. A model with high bias tends to underfit the data.

*   **Variance:** The sensitivity of the model to changes in the training data. A model with high variance tends to overfit the data.

*   **Bagging's Effect:**
    *   **Reduces Variance:** Bagging primarily reduces variance. By averaging the predictions of multiple models trained on different subsets of the data, bagging reduces the sensitivity of the model to specific instances in the training set.
    *   **Slightly Increases Bias (Potentially):** In some cases, bagging can slightly increase bias, but this is usually a small price to pay for the reduction in variance.  The overall effect is generally an improvement in model performance.

### 5. Important Points to Remember

*   Bagging works best when the base estimator is unstable (high variance).
*   The `n_estimators` parameter in the `BaggingClassifier` controls the number of base estimators. Increasing `n_estimators` generally improves performance, but there is a diminishing return.
*   Bagging can be used with any base estimator, not just decision trees.
*   Bagging is a parallelizable algorithm, making it suitable for large datasets.
*   The bootstrap samples are drawn with replacement, meaning that some instances will appear multiple times in a given sample, while others will be omitted.  This is crucial for the variance reduction effect.

### 6. Practice Questions and Exercises

1.  **What is bootstrap sampling, and why is it important in bagging?**
    *   *Answer:* Bootstrap sampling is random sampling with replacement from the original training dataset. It is important because it creates multiple subsets of the data that are slightly different from each other, which allows the base estimators to learn different aspects of the data and reduce the variance of the ensemble.

2.  **How does bagging reduce variance?**
    *   *Answer:* Bagging reduces variance by averaging the predictions of multiple models trained on different bootstrap samples. This reduces the sensitivity of the model to specific instances in the training set.

3.  **What is the effect of increasing the `n_estimators` parameter in the `BaggingClassifier`?**
    *   *Answer:* Increasing `n_estimators` generally improves performance by creating a more diverse ensemble. However, there is a diminishing return, and increasing `n_estimators` beyond a certain point will have little effect on performance.  It also increases training time.

4.  **Modify the provided code to use a different base estimator, such as a Support Vector Machine (SVM), instead of a decision tree.**

    *   *Answer:*

        ```python
        import pandas as pd
        from sklearn.model_selection import train_test_split
        from sklearn.svm import SVC  # Import SVC
        from sklearn.ensemble import BaggingClassifier
        from sklearn.metrics import accuracy_score, precision_score, recall_score, f1_score
        from sklearn.impute import SimpleImputer
        from sklearn.preprocessing import LabelEncoder

        # Load the Titanic Dataset (replace 'titanic.csv' with your file path)
        try:
            titanic_data = pd.read_csv('titanic.csv')
        except FileNotFoundError:
            print("Titanic dataset file not found. Please ensure 'titanic.csv' is in the correct directory.")
            exit()

        # Data Preprocessing
        # Handle missing values - Impute with the mean for numerical columns and mode for categorical columns
        for col in titanic_data.columns:
            if titanic_data[col].isnull().any():
                if titanic_data[col].dtype == 'object':
                    titanic_data[col] = titanic_data[col].fillna(titanic_data[col].mode()[0])
                else:
                    titanic_data[col] = titanic_data[col].fillna(titanic_data[col].mean())

        # Convert categorical features into numerical
        label_encoder = LabelEncoder()
        titanic_data['Sex'] = label_encoder.fit_transform(titanic_data['Sex'])
        titanic_data['Embarked'] = label_encoder.fit_transform(titanic_data['Embarked'])

        # Select features and target variable
        features = ['Pclass', 'Sex', 'Age', 'SibSp', 'Parch', 'Fare', 'Embarked']  # Choose relevant features
        target = 'Survived'

        X = titanic_data[features]
        y = titanic_data[target]

        # Split the Data into Training and Testing Sets
        X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)

        # Initialize and Train the Bagging Classifier with SVM as the base estimator
        base_estimator = SVC(probability=True, random_state=42) # SVC requires probability=True for predict_proba
        bagging_clf = BaggingClassifier(base_estimator=base_estimator, n_estimators=100, random_state=42)
        bagging_clf.fit(X_train, y_train)

        # Make Predictions
        y_pred = bagging_clf.predict(X_test)

        # Evaluate Performance
        accuracy = accuracy_score(y_test, y_pred)
        precision = precision_score(y_test, y_pred)
        recall = recall_score(y_test, y_pred)
        f1 = f1_score(y_test, y_pred)

        print("Bagging Classifier (with SVM) Performance:")
        print(f"Accuracy: {accuracy:.4f}")
        print(f"Precision: {precision:.4f}")
        print(f"Recall: {recall:.4f}")
        print(f"F1-Score: {f1:.4f}")
        ```

        **Key Changes:**
        *   Import `SVC` from `sklearn.svm`.
        *   Create an `SVC` object and pass it as the `base_estimator` argument to the `BaggingClassifier`.
        *   Set `probability=True` in the `SVC` constructor because `BaggingClassifier` relies on `predict_proba` for ensembling when the base estimator is an `SVC`.  If this is not set, the code will raise an error.

5.  **Explain how bagging addresses overfitting.**
    *   *Answer:* Bagging addresses overfitting by training multiple models on different subsets of the data. Each model learns a slightly different perspective of the data, and the ensemble combines these perspectives to produce a more robust and generalized prediction. The averaging effect reduces the impact of noise and outliers in the training data, which helps to prevent overfitting.
