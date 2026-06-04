---
title: "Implement boosting using a boosting algorithm (e.g., AdaBoost) and evaluate performance."
subject: "MACHINE LEARNING LAB"
module: "Module 19: Implement bagging and boosting ensemble methods on the Titanic dataset. Compare the performance of both methods in terms of accuracy, precision, recall, and F1"
branch: "Computer Science and Engineering"
semester: 5
topicId: "684162770fc9aa1fdbc8b9af"
status: "completed"
scrapedAt: "2026-05-20T16:48:15.546Z"
---
# MACHINE LEARNING LAB - Module 19: Boosting on the Titanic Dataset (AdaBoost)

**Topic:** Implement boosting using a boosting algorithm (e.g., AdaBoost) and evaluate performance.

**Learning Outcomes:**

*   Understand the concept of boosting and its difference from bagging.
*   Implement AdaBoost using a suitable machine learning library (e.g., scikit-learn).
*   Apply AdaBoost to the Titanic dataset for survival prediction.
*   Evaluate the performance of the AdaBoost model using accuracy, precision, recall, and F1-score.
*   Compare the performance of AdaBoost with other ensemble methods (like Bagging) on the Titanic dataset.
*   Understand the effect of hyperparameters on AdaBoost performance.

## 1. Introduction to Boosting

*   **Definition:** Boosting is an ensemble learning technique that combines multiple weak learners (typically simple models like decision stumps) into a strong learner.  Unlike bagging, boosting sequentially trains learners, where each subsequent learner focuses on correcting the errors made by its predecessors.  This is achieved by weighting the training instances; misclassified instances are given higher weights, forcing the new learner to focus on these "hard" cases.
*   **Key Concepts:**
    *   **Weak Learners:** Simple models that perform slightly better than random guessing.  Decision stumps (decision trees with a single node) are common.
    *   **Weighted Instances:** Each training instance has a weight assigned to it. These weights are adjusted after each weak learner is trained.
    *   **Sequential Training:**  Models are trained in sequence, with each model learning from the mistakes of the previous ones.
    *   **Weighted Combination:**  The predictions of the individual weak learners are combined using a weighted average or a similar technique, where the weights reflect the performance of each learner.
*   **Difference from Bagging:**
    *   **Training:** Bagging trains weak learners independently in parallel. Boosting trains them sequentially, where each learner depends on the previous one.
    *   **Focus:** Bagging aims to reduce variance by averaging the predictions of multiple independent models. Boosting aims to reduce bias by iteratively correcting errors.
    *   **Weighting:** Bagging uses random sampling with replacement (bootstrap aggregating). Boosting uses instance weighting and learner weighting.

## 2. AdaBoost (Adaptive Boosting)

*   **Definition:** AdaBoost is a specific boosting algorithm that adaptively adjusts the weights of training instances and weak learners.  It focuses on difficult-to-classify examples, iteratively improving the ensemble's performance.
*   **Algorithm Overview:**
    1.  **Initialization:** Assign equal weights to all training instances.
    2.  **Iteration:** For *t* = 1 to *T* (where *T* is the number of weak learners):
        *   Train a weak learner (e.g., decision stump) on the weighted training data.
        *   Calculate the weighted error rate of the weak learner.
        *   Compute a weight (alpha) for the weak learner based on its error rate.  Better learners get higher weights. `alpha = 0.5 * ln((1 - error) / error)`
        *   Update the weights of the training instances. Increase the weights of misclassified instances and decrease the weights of correctly classified instances.
        *   Normalize the instance weights so they sum to 1.
    3.  **Prediction:**  Combine the predictions of all weak learners using a weighted sum, where the weights are the alphas calculated in each iteration.
*   **Key Equations:**
    *   **Weighted Error Rate:**  `error = sum(weight_i * indicator(y_i != prediction_i)) / sum(weight_i)`, where `indicator` is 1 if the prediction is incorrect and 0 otherwise.
    *   **Learner Weight (Alpha):** `alpha = 0.5 * ln((1 - error) / error)`
    *   **Instance Weight Update:** `weight_i = weight_i * exp(alpha)` if misclassified, `weight_i = weight_i * exp(-alpha)` if correctly classified.
    *   **Normalization:** Divide all instance weights by their sum to ensure they sum to 1.
*   **Advantages:**
    *   Simple to implement.
    *   Often achieves high accuracy.
    *   Relatively robust to overfitting (although careful hyperparameter tuning is still needed).
*   **Disadvantages:**
    *   Sensitive to noisy data and outliers.
    *   Can be computationally expensive for large datasets.

## 3. Implementing AdaBoost on the Titanic Dataset

*   **Dataset:** Titanic dataset (available on Kaggle) contains information about passengers on the Titanic, including whether they survived or not (the target variable).
*   **Features:**  Features typically used include:
    *   `Pclass` (Passenger Class)
    *   `Sex`
    *   `Age`
    *   `SibSp` (Number of siblings/spouses aboard)
    *   `Parch` (Number of parents/children aboard)
    *   `Fare`
    *   `Embarked` (Port of Embarkation)
*   **Steps:**

    1.  **Data Loading and Preprocessing:**
        *   Load the Titanic dataset using pandas.
        *   Handle missing values (e.g., impute `Age` with the mean or median).
        *   Encode categorical features (e.g., `Sex`, `Embarked`) using one-hot encoding or label encoding.
        *   Split the data into training and testing sets.
    2.  **Model Training:**
        *   Import the `AdaBoostClassifier` from scikit-learn.
        *   Create an `AdaBoostClassifier` object. You can specify the `n_estimators` (number of weak learners) and the `learning_rate`.
        ```python
        from sklearn.ensemble import AdaBoostClassifier
        from sklearn.model_selection import train_test_split
        from sklearn.metrics import accuracy_score, precision_score, recall_score, f1_score
        import pandas as pd
        from sklearn.impute import SimpleImputer
        from sklearn.preprocessing import LabelEncoder

        # Load the Titanic dataset (replace 'titanic.csv' with your actual file path)
        df = pd.read_csv('titanic.csv')

        # Preprocessing
        # Handle missing values
        df['Age'].fillna(df['Age'].median(), inplace=True)
        df['Embarked'].fillna(df['Embarked'].mode()[0], inplace=True) #mode()[0] gets the most frequent value

        # Encode categorical features
        le = LabelEncoder()
        df['Sex'] = le.fit_transform(df['Sex']) # 0 for female, 1 for male

        embarked_mapping = {'S': 0, 'C': 1, 'Q': 2}
        df['Embarked'] = df['Embarked'].map(embarked_mapping)


        # Select features and target variable
        features = ['Pclass', 'Sex', 'Age', 'SibSp', 'Parch', 'Fare', 'Embarked']
        target = 'Survived'

        X = df[features]
        y = df[target]

        # Split data into training and testing sets
        X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)

        # Create an AdaBoostClassifier object
        ada_clf = AdaBoostClassifier(n_estimators=50, random_state=42) # Number of weak learners and random state

        # Train the model
        ada_clf.fit(X_train, y_train)
        ```
    3.  **Prediction:**
        *   Use the trained `AdaBoostClassifier` to predict the survival of passengers in the test set.
        ```python
        # Make predictions on the test set
        y_pred = ada_clf.predict(X_test)
        ```
    4.  **Evaluation:**
        *   Calculate accuracy, precision, recall, and F1-score to evaluate the model's performance.
        ```python
        # Evaluate the model
        accuracy = accuracy_score(y_test, y_pred)
        precision = precision_score(y_test, y_pred)
        recall = recall_score(y_test, y_pred)
        f1 = f1_score(y_test, y_pred)

        print(f"Accuracy: {accuracy}")
        print(f"Precision: {precision}")
        print(f"Recall: {recall}")
        print(f"F1-score: {f1}")
        ```

## 4. Evaluating Performance Metrics

*   **Accuracy:** The proportion of correctly classified instances.  `Accuracy = (TP + TN) / (TP + TN + FP + FN)`
*   **Precision:** The proportion of true positives among the instances predicted as positive. `Precision = TP / (TP + FP)` (How many of those predicted to survive actually did?)
*   **Recall:** The proportion of true positives that were correctly identified. `Recall = TP / (TP + FN)` (How many of the actual survivors were correctly predicted?)
*   **F1-score:** The harmonic mean of precision and recall. It provides a balanced measure of the model's performance.  `F1 = 2 * (Precision * Recall) / (Precision + Recall)`
*   **Interpretation:**  Analyze the values of these metrics to understand the strengths and weaknesses of the model. For example:
    *   High accuracy but low recall indicates that the model is good at identifying negative cases but misses many positive cases.
    *   High precision but low accuracy indicates that the model is very confident when predicting positive cases but makes many incorrect predictions.

## 5. Comparing AdaBoost with Bagging

*   **Bagging (Bootstrap Aggregating):**  An ensemble method that trains multiple independent models on bootstrapped samples of the training data and averages their predictions.  A common example is the Random Forest algorithm.
*   **Comparison Table:**

| Feature        | AdaBoost                               | Bagging                                   |
| -------------- | -------------------------------------- | ----------------------------------------- |
| Training       | Sequential                             | Parallel                                   |
| Instance Weighting | Yes                                  | No                                        |
| Learner Combination | Weighted average                       | Averaging or majority voting             |
| Bias/Variance | Primarily reduces bias                  | Primarily reduces variance                 |
| Sensitivity to Noise | More sensitive                       | Less sensitive                           |
| Example        | AdaBoostClassifier (scikit-learn)      | RandomForestClassifier (scikit-learn)   |

*   **Code Example (Comparison):**
```python
from sklearn.ensemble import RandomForestClassifier, AdaBoostClassifier
from sklearn.model_selection import train_test_split
from sklearn.metrics import accuracy_score, precision_score, recall_score, f1_score
import pandas as pd
from sklearn.preprocessing import LabelEncoder

# Load the Titanic dataset (replace 'titanic.csv' with your actual file path)
df = pd.read_csv('titanic.csv')

# Preprocessing
# Handle missing values
df['Age'].fillna(df['Age'].median(), inplace=True)
df['Embarked'].fillna(df['Embarked'].mode()[0], inplace=True) #mode()[0] gets the most frequent value

# Encode categorical features
le = LabelEncoder()
df['Sex'] = le.fit_transform(df['Sex']) # 0 for female, 1 for male

embarked_mapping = {'S': 0, 'C': 1, 'Q': 2}
df['Embarked'] = df['Embarked'].map(embarked_mapping)


# Select features and target variable
features = ['Pclass', 'Sex', 'Age', 'SibSp', 'Parch', 'Fare', 'Embarked']
target = 'Survived'

X = df[features]
y = df[target]

# Split data into training and testing sets
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)


# AdaBoost
ada_clf = AdaBoostClassifier(n_estimators=50, random_state=42)
ada_clf.fit(X_train, y_train)
y_pred_ada = ada_clf.predict(X_test)

# RandomForest (Bagging)
rf_clf = RandomForestClassifier(n_estimators=50, random_state=42)
rf_clf.fit(X_train, y_train)
y_pred_rf = rf_clf.predict(X_test)


# Evaluate and Print Results
def evaluate_model(y_true, y_pred, model_name):
    accuracy = accuracy_score(y_true, y_pred)
    precision = precision_score(y_true, y_pred)
    recall = recall_score(y_true, y_pred)
    f1 = f1_score(y_true, y_pred)

    print(f"--- {model_name} ---")
    print(f"Accuracy: {accuracy}")
    print(f"Precision: {precision}")
    print(f"Recall: {recall}")
    print(f"F1-score: {f1}")
    print("\n")

evaluate_model(y_test, y_pred_ada, "AdaBoost")
evaluate_model(y_test, y_pred_rf, "RandomForest")
```
*   **Expected Results:**  The performance of AdaBoost and Random Forest may vary depending on the dataset and hyperparameter tuning. AdaBoost might perform better if the data is clean and the weak learners are carefully selected. Random Forest might be more robust to noisy data and outliers.  Experimentation is key to determining the best model for a specific task.

## 6. Hyperparameter Tuning

*   **Key Hyperparameters for AdaBoost:**
    *   `n_estimators`: The number of weak learners to train sequentially. Increasing `n_estimators` can improve performance, but it can also lead to overfitting.
    *   `learning_rate`:  Controls the contribution of each weak learner to the final prediction. A smaller `learning_rate` requires a larger `n_estimators` to achieve the same performance.  Smaller learning rates help prevent overfitting.
    *   `base_estimator`:  The weak learner used in the boosting process.  The default is a DecisionTreeClassifier with `max_depth=1` (a decision stump). You can experiment with other base estimators, but decision stumps are generally effective.
*   **Tuning Techniques:**
    *   **Grid Search:**  Try different combinations of hyperparameters and select the combination that yields the best performance on a validation set.
    *   **Randomized Search:**  Randomly sample hyperparameter values and evaluate their performance.  Can be more efficient than grid search for high-dimensional hyperparameter spaces.
    *   **Cross-Validation:**  Use cross-validation to evaluate the performance of different hyperparameter settings. This helps to prevent overfitting to the validation set.
*   **Example (Grid Search):**

```python
from sklearn.ensemble import AdaBoostClassifier
from sklearn.model_selection import GridSearchCV, train_test_split
from sklearn.metrics import accuracy_score, precision_score, recall_score, f1_score
import pandas as pd
from sklearn.preprocessing import LabelEncoder

# Load the Titanic dataset (replace 'titanic.csv' with your actual file path)
df = pd.read_csv('titanic.csv')

# Preprocessing
# Handle missing values
df['Age'].fillna(df['Age'].median(), inplace=True)
df['Embarked'].fillna(df['Embarked'].mode()[0], inplace=True) #mode()[0] gets the most frequent value

# Encode categorical features
le = LabelEncoder()
df['Sex'] = le.fit_transform(df['Sex']) # 0 for female, 1 for male

embarked_mapping = {'S': 0, 'C': 1, 'Q': 2}
df['Embarked'] = df['Embarked'].map(embarked_mapping)


# Select features and target variable
features = ['Pclass', 'Sex', 'Age', 'SibSp', 'Parch', 'Fare', 'Embarked']
target = 'Survived'

X = df[features]
y = df[target]

# Split data into training and testing sets
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)


from sklearn.tree import DecisionTreeClassifier

# Define the parameter grid
param_grid = {
    'n_estimators': [50, 100, 200],
    'learning_rate': [0.01, 0.1, 1.0],
    'base_estimator': [None, DecisionTreeClassifier(max_depth=1), DecisionTreeClassifier(max_depth=2)]  #Example base estimators
}

# Create the AdaBoostClassifier
ada = AdaBoostClassifier(random_state=42)

# Create the GridSearchCV object
grid_search = GridSearchCV(estimator=ada, param_grid=param_grid, scoring='accuracy', cv=3)

# Fit the grid search to the data
grid_search.fit(X_train, y_train)

# Print the best parameters and the best score
print("Best parameters:", grid_search.best_params_)
print("Best score:", grid_search.best_score_)

# Get the best estimator
best_ada = grid_search.best_estimator_

# Evaluate the best estimator on the test set
y_pred = best_ada.predict(X_test)
accuracy = accuracy_score(y_test, y_pred)
print("Test accuracy:", accuracy)
```

## 7. Important Points to Remember

*   Boosting algorithms are powerful ensemble methods that can improve the performance of weak learners.
*   AdaBoost is a specific boosting algorithm that adaptively adjusts the weights of training instances and weak learners.
*   Hyperparameter tuning is crucial for achieving optimal performance with AdaBoost.
*   Consider the trade-offs between bias and variance when choosing the number of weak learners and the learning rate.
*   Boosting is sensitive to noisy data and outliers, so data cleaning and preprocessing are important.
*   Compare the performance of AdaBoost with other ensemble methods, such as Bagging, to determine the best model for a specific task.
*   Always split your data into training, validation, and testing sets to avoid overfitting and to get a realistic estimate of your model's performance.

## 8. Practice Questions/Exercises

1.  **Question:** Explain the difference between bagging and boosting in terms of how they train their base learners.
    *   **Answer:** Bagging trains base learners independently and in parallel on bootstrapped samples of the training data. Boosting trains them sequentially, with each learner focusing on the errors made by its predecessors.

2.  **Question:** What are the key hyperparameters that affect the performance of AdaBoost? Explain how changing each of these parameters can impact the model's performance.
    *   **Answer:**  The key hyperparameters are:
        *   `n_estimators`: The number of weak learners.  Increasing it usually improves performance until overfitting occurs.
        *   `learning_rate`: Controls the contribution of each learner.  Smaller values require more learners but can prevent overfitting.
        * `base_estimator`: The type of weak learner. Can be a decision stump or more complex tree.

3.  **Question:**  How does AdaBoost handle misclassified instances during training?
    *   **Answer:** AdaBoost increases the weights of misclassified instances, making them more important for subsequent weak learners to focus on.

4.  **Question:** Given the following confusion matrix for an AdaBoost model on the Titanic dataset, calculate the precision, recall, and F1-score for the 'Survived' class (positive class).

    |                | Predicted Survived | Predicted Not Survived |
    | -------------- | ------------------ | ---------------------- |
    | Actual Survived | 50                | 20                    |
    | Actual Not Survived | 10                 | 98                   |

    *   **Answer:**
        *   TP (True Positives) = 50
        *   FP (False Positives) = 10
        *   FN (False Negatives) = 20
        *   Precision = TP / (TP + FP) = 50 / (50 + 10) = 50/60 = 0.833
        *   Recall = TP / (TP + FN) = 50 / (50 + 20) = 50/70 = 0.714
        *   F1-score = 2 * (Precision * Recall) / (Precision + Recall) = 2 * (0.833 * 0.714) / (0.833 + 0.714) = 0.769

5.  **Exercise:** Implement AdaBoost on the Titanic dataset using scikit-learn. Experiment with different values of `n_estimators` and `learning_rate` and evaluate the performance using accuracy, precision, recall, and F1-score. Compare your results with a RandomForestClassifier. Include the code and a brief analysis of your findings. (See the code examples provided in the notes for a starting point.)

These detailed notes should provide a comprehensive understanding of boosting and AdaBoost, including its implementation, evaluation, and comparison with bagging on the Titanic dataset. Remember to experiment with the code and hyperparameters to gain practical experience and a deeper understanding of the concepts.
