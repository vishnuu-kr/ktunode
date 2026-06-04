---
title: "Tasks:"
subject: "MACHINE LEARNING LAB"
module: "Module 10: Implement and compare Logistic Regression and Decision Trees on the Adult Income dataset for predicting income levels. Evaluate both models based on performance metrics and interpretability."
branch: "Computer Science and Engineering"
semester: 5
topicId: "684162770fc9aa1fdbc8b96d"
status: "completed"
scrapedAt: "2026-05-20T16:47:34.172Z"
---
## MACHINE LEARNING LAB - Module 10: Logistic Regression vs. Decision Trees on Adult Income Dataset

**Topic:** Implement and compare Logistic Regression and Decision Trees on the Adult Income dataset for predicting income levels. Evaluate both models based on performance metrics and interpretability.

**Learning Outcomes:**

*   Understand the principles of Logistic Regression and Decision Trees.
*   Preprocess and prepare the Adult Income dataset for machine learning models.
*   Implement Logistic Regression and Decision Tree models using Python libraries like scikit-learn.
*   Evaluate model performance using appropriate metrics such as accuracy, precision, recall, F1-score, and AUC-ROC.
*   Compare and contrast the performance and interpretability of Logistic Regression and Decision Trees.
*   Understand the trade-offs between different model parameters and their impact on model performance.
*   Interpret the model outcomes and draw meaningful conclusions about the factors influencing income levels.

---

### 1. Introduction: The Adult Income Dataset and Problem Statement

*   **Dataset Overview:** The Adult Income dataset (also known as the Census Income dataset) is a widely used dataset for classification tasks. It contains information about individuals, including demographic and socio-economic attributes, and the target variable is whether their income is above or below a certain threshold (usually $50,000 per year).

*   **Problem Statement:**  The goal is to build a machine learning model that can accurately predict whether an individual's income is above or below $50,000 based on their demographic and socio-economic characteristics.

*   **Why This Problem Matters:** Understanding the factors that influence income levels can provide valuable insights for policy making, economic analysis, and individual financial planning.

---

### 2. Key Concepts: Logistic Regression

*   **Definition:** Logistic Regression is a statistical method used for binary classification problems. It models the probability of a binary outcome based on one or more predictor variables.

*   **How it Works:**
    *   It uses a sigmoid function (also known as the logistic function) to transform the linear combination of input features into a probability between 0 and 1.
    *   The sigmoid function is defined as: `sigmoid(x) = 1 / (1 + exp(-x))`
    *   The model learns coefficients for each input feature that maximize the likelihood of observing the training data.
    *   A threshold (usually 0.5) is used to classify instances as belonging to either the positive or negative class.

*   **Assumptions:**
    *   The dependent variable is binary (two categories).
    *   The independent variables are linearly related to the log-odds of the event.
    *   Little or no multicollinearity among the independent variables.
    *   Sufficiently large sample size.

*   **Advantages:**
    *   Easy to implement and interpret.
    *   Provides probability estimates.
    *   Efficient for binary classification problems.

*   **Disadvantages:**
    *   Can only predict categorical outcomes.
    *   Relies on the assumption of linearity between the independent variables and the log-odds.
    *   May not perform well with complex, non-linear relationships.

*   **Example:** Predicting whether an individual's income is >$50K (1) or <=$50K (0) based on age, education, and occupation.

---

### 3. Key Concepts: Decision Trees

*   **Definition:** Decision Trees are non-parametric supervised learning methods used for both classification and regression. They learn decision rules inferred from the data features.

*   **How it Works:**
    *   The tree is built by recursively splitting the data based on the feature that best separates the classes (for classification) or minimizes variance (for regression).
    *   Splitting criteria:
        *   **Classification:** Gini impurity, entropy, information gain.
        *   **Regression:** Mean squared error, mean absolute error.
    *   Each internal node represents a test on an attribute.
    *   Each branch represents the outcome of the test.
    *   Each leaf node represents a class label (for classification) or a predicted value (for regression).

*   **Advantages:**
    *   Easy to understand and interpret.
    *   Can handle both numerical and categorical data.
    *   Non-parametric (no assumptions about data distribution).
    *   Can capture non-linear relationships.

*   **Disadvantages:**
    *   Prone to overfitting.
    *   Sensitive to small changes in the data.
    *   Can be unstable (small changes in data can lead to different trees).
    *   Can be biased towards features with more levels.

*   **Example:**  Classifying income level based on age, education, occupation, and hours per week, with splits based on specific age ranges or education levels.

---

### 4. Data Preprocessing for the Adult Income Dataset

*   **Data Loading and Inspection:** Load the dataset using pandas and inspect the first few rows to understand the data structure and features.

*   **Handling Missing Values:**
    *   Identify columns with missing values.
    *   Impute missing values using methods like:
        *   **Mean/Median Imputation:** For numerical features.
        *   **Mode Imputation:** For categorical features.
        *   **Removal:** Remove rows with missing values (if the number of missing values is small).
    *   Consider using more advanced imputation techniques if appropriate.

*   **Encoding Categorical Variables:**
    *   Convert categorical features into numerical representations using techniques like:
        *   **One-Hot Encoding:** Create binary columns for each category.
        *   **Label Encoding:** Assign a numerical value to each category. (Less suitable for features where order doesn't matter, as it can imply an ordinal relationship.)

*   **Feature Scaling:**
    *   Scale numerical features to a similar range using techniques like:
        *   **Standardization (Z-score):**  Scales features to have a mean of 0 and a standard deviation of 1.  Formula: `(x - mean) / std`
        *   **Min-Max Scaling:** Scales features to a range between 0 and 1.  Formula: `(x - min) / (max - min)`
    *   Feature scaling is *highly recommended* for Logistic Regression, as it is sensitive to feature scales. Decision Trees are generally less sensitive to feature scaling.

*   **Data Splitting:**
    *   Split the data into training and testing sets using `train_test_split` from scikit-learn.  A typical split is 80% training and 20% testing.

**Example (Python - scikit-learn):**

```python
import pandas as pd
from sklearn.model_selection import train_test_split
from sklearn.preprocessing import LabelEncoder, StandardScaler, OneHotEncoder
from sklearn.impute import SimpleImputer
import numpy as np

# Load the data (replace 'adult.csv' with your file path)
df = pd.read_csv('adult.csv')

# Display first few rows
print(df.head())

# Identify columns with missing values (represented as '?')
df = df.replace('?', np.nan)
print(df.isnull().sum())

# Handle missing values (imputation with mode)
for col in df.columns:
    if df[col].isnull().any():
        most_frequent_value = df[col].mode()[0]  # get the first mode
        df[col] = df[col].fillna(most_frequent_value)

# Encode categorical features using One-Hot Encoding
categorical_cols = df.select_dtypes(include='object').columns.drop('income')  # Exclude target variable
encoder = OneHotEncoder(handle_unknown='ignore', sparse_output=False)  #handle_unknown handles cases where test data has categories unseen in training
encoded_data = encoder.fit_transform(df[categorical_cols])
encoded_df = pd.DataFrame(encoded_data, columns=encoder.get_feature_names_out(categorical_cols))
df = pd.concat([df.drop(categorical_cols, axis=1).reset_index(drop=True), encoded_df.reset_index(drop=True)], axis=1)


# Encode target variable
le = LabelEncoder()
df['income'] = le.fit_transform(df['income'])


# Scale numerical features
numerical_cols = df.select_dtypes(include=['int64', 'float64']).columns.drop('income')
scaler = StandardScaler()
df[numerical_cols] = scaler.fit_transform(df[numerical_cols])


# Split the data into training and testing sets
X = df.drop('income', axis=1)
y = df['income']
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)

print(X_train.shape, X_test.shape, y_train.shape, y_test.shape)
```

---

### 5. Model Implementation and Training

*   **Logistic Regression:**
    *   Import the `LogisticRegression` class from scikit-learn.
    *   Create an instance of the `LogisticRegression` class.
    *   Fit the model to the training data using the `fit()` method.
    *   Set parameters like `penalty` (e.g., 'l1', 'l2') for regularization, `C` (inverse of regularization strength), and `solver` (algorithm for optimization). Experiment to find the best parameters.

*   **Decision Trees:**
    *   Import the `DecisionTreeClassifier` class from scikit-learn.
    *   Create an instance of the `DecisionTreeClassifier` class.
    *   Fit the model to the training data using the `fit()` method.
    *   Set parameters like `max_depth` (maximum depth of the tree), `min_samples_split` (minimum number of samples required to split an internal node), and `min_samples_leaf` (minimum number of samples required to be at a leaf node) to prevent overfitting.

**Example (Python - scikit-learn):**

```python
from sklearn.linear_model import LogisticRegression
from sklearn.tree import DecisionTreeClassifier

# Logistic Regression
logreg = LogisticRegression(penalty='l2', C=0.1, solver='liblinear', random_state=42) # Example hyperparameters. Tune using cross-validation
logreg.fit(X_train, y_train)

# Decision Tree
tree = DecisionTreeClassifier(max_depth=10, min_samples_split=10, min_samples_leaf=5, random_state=42)  # Example hyperparameters. Tune using cross-validation
tree.fit(X_train, y_train)
```

---

### 6. Model Evaluation

*   **Performance Metrics:**
    *   **Accuracy:** The proportion of correctly classified instances.  `Accuracy = (TP + TN) / (TP + TN + FP + FN)`
    *   **Precision:** The proportion of correctly predicted positive instances out of all predicted positive instances.  `Precision = TP / (TP + FP)`
    *   **Recall (Sensitivity):** The proportion of correctly predicted positive instances out of all actual positive instances.  `Recall = TP / (TP + FN)`
    *   **F1-score:** The harmonic mean of precision and recall.  `F1-score = 2 * (Precision * Recall) / (Precision + Recall)`
    *   **AUC-ROC (Area Under the Receiver Operating Characteristic Curve):** Measures the ability of the model to distinguish between positive and negative classes. Higher AUC indicates better performance.  It represents the probability that the model ranks a random positive example higher than a random negative example.
    *   **Confusion Matrix:** A table that summarizes the performance of a classification model by showing the counts of true positive (TP), true negative (TN), false positive (FP), and false negative (FN) predictions.

*   **Evaluation Procedure:**
    *   Use the trained models to predict the income levels on the test data using the `predict()` method.  For AUC-ROC, use `predict_proba()` to get the probability estimates.
    *   Calculate the performance metrics using functions from scikit-learn like `accuracy_score`, `precision_score`, `recall_score`, `f1_score`, `roc_auc_score`, and `confusion_matrix`.

**Example (Python - scikit-learn):**

```python
from sklearn.metrics import accuracy_score, precision_score, recall_score, f1_score, roc_auc_score, confusion_matrix

# Logistic Regression Evaluation
y_pred_logreg = logreg.predict(X_test)
y_pred_proba_logreg = logreg.predict_proba(X_test)[:, 1] # Probabilities for the positive class

print("Logistic Regression Metrics:")
print("Accuracy:", accuracy_score(y_test, y_pred_logreg))
print("Precision:", precision_score(y_test, y_pred_logreg))
print("Recall:", recall_score(y_test, y_pred_logreg))
print("F1-score:", f1_score(y_test, y_pred_logreg))
print("AUC-ROC:", roc_auc_score(y_test, y_pred_proba_logreg))
print("Confusion Matrix:\n", confusion_matrix(y_test, y_pred_logreg))

# Decision Tree Evaluation
y_pred_tree = tree.predict(X_test)
y_pred_proba_tree = tree.predict_proba(X_test)[:, 1]  # Probabilities for the positive class

print("\nDecision Tree Metrics:")
print("Accuracy:", accuracy_score(y_test, y_pred_tree))
print("Precision:", precision_score(y_test, y_pred_tree))
print("Recall:", recall_score(y_test, y_pred_tree))
print("F1-score:", f1_score(y_test, y_pred_tree))
print("AUC-ROC:", roc_auc_score(y_test, y_pred_proba_tree))
print("Confusion Matrix:\n", confusion_matrix(y_test, y_pred_tree))
```

---

### 7. Model Comparison and Interpretability

*   **Performance Comparison:**
    *   Compare the performance metrics of Logistic Regression and Decision Trees.
    *   Consider the strengths and weaknesses of each model in the context of the Adult Income dataset.  For example, Logistic Regression might be preferred if interpretability is paramount and the data can be reasonably approximated by a linear model. Decision Trees may perform better if the relationships in the data are highly non-linear, but at the cost of interpretability and potential overfitting.

*   **Interpretability:**
    *   **Logistic Regression:** The coefficients of the Logistic Regression model can be interpreted as the change in the log-odds of the outcome for a one-unit change in the predictor variable.  Positive coefficients indicate a positive relationship with the outcome, and negative coefficients indicate a negative relationship.
    *   **Decision Trees:** Decision Trees are inherently more interpretable than Logistic Regression.  The decision rules can be easily visualized and understood.  You can examine the tree structure to see which features are most important for predicting income levels.  Feature importance can also be calculated, indicating how much each feature contributes to reducing impurity (e.g., Gini impurity).

*   **Visualizations:**
    *   **Logistic Regression:** Plot the coefficients of the Logistic Regression model to visualize the feature importance.
    *   **Decision Trees:** Visualize the Decision Tree using `plot_tree` from `sklearn.tree` or using external libraries like `graphviz`.

**Example (Python - scikit-learn):**

```python
import matplotlib.pyplot as plt
import numpy as np
from sklearn.tree import plot_tree

# Logistic Regression Feature Importance
logreg_coef = logreg.coef_[0]  # Get coefficients
feature_names = X_train.columns

# Sort coefficients and feature names for better visualization
sorted_indices = np.argsort(np.abs(logreg_coef))
sorted_coef = logreg_coef[sorted_indices]
sorted_features = feature_names[sorted_indices]

plt.figure(figsize=(10, 8))
plt.barh(sorted_features, sorted_coef)
plt.xlabel("Coefficient Value")
plt.ylabel("Feature")
plt.title("Logistic Regression Feature Importance")
plt.show()


# Decision Tree Visualization (limited to a shallow tree for interpretability)
plt.figure(figsize=(20,10))
plot_tree(tree, feature_names=X_train.columns, filled=True, max_depth=3) # Restrict max_depth for readability
plt.show()

# Decision Tree Feature Importance (alternative to visual representation)
feature_importances = tree.feature_importances_
sorted_indices = np.argsort(feature_importances)
sorted_importances = feature_importances[sorted_indices]
sorted_features = feature_names[sorted_indices]

plt.figure(figsize=(10, 8))
plt.barh(sorted_features, sorted_importances)
plt.xlabel("Feature Importance")
plt.ylabel("Feature")
plt.title("Decision Tree Feature Importance")
plt.show()
```

---

### 8. Parameter Tuning and Model Optimization

*   **Logistic Regression:**
    *   **Regularization (L1 and L2):**  Use `penalty='l1'` (Lasso) or `penalty='l2'` (Ridge) to prevent overfitting. L1 regularization can also perform feature selection by driving some coefficients to zero.
    *   **Regularization Strength (C):**  `C` is the inverse of the regularization strength. Smaller values of `C` imply stronger regularization.  Use cross-validation to find the optimal value of `C`.
    *   **Solver:** Experiment with different solvers like 'liblinear', 'lbfgs', 'sag', and 'saga' to find the most efficient solver for your dataset.  'liblinear' is suitable for small datasets.  'lbfgs', 'sag', and 'saga' are suitable for larger datasets.

*   **Decision Trees:**
    *   **`max_depth`:**  The maximum depth of the tree.  Smaller values prevent overfitting.
    *   **`min_samples_split`:** The minimum number of samples required to split an internal node.  Larger values prevent overfitting.
    *   **`min_samples_leaf`:** The minimum number of samples required to be at a leaf node.  Larger values prevent overfitting.
    *   **`criterion`:** The function to measure the quality of a split (e.g., 'gini' or 'entropy').

*   **Cross-Validation:**
    *   Use cross-validation (e.g., k-fold cross-validation) to evaluate the model performance on multiple folds of the training data and to tune the model parameters.  Scikit-learn's `GridSearchCV` and `RandomizedSearchCV` can be used for hyperparameter tuning.

**Example (Python - scikit-learn - GridSearchCV):**

```python
from sklearn.model_selection import GridSearchCV

# Logistic Regression Parameter Tuning
param_grid_logreg = {
    'penalty': ['l1', 'l2'],
    'C': [0.001, 0.01, 0.1, 1, 10, 100],
    'solver': ['liblinear', 'saga']  # Solvers compatible with both l1 and l2
}

grid_search_logreg = GridSearchCV(LogisticRegression(random_state=42), param_grid_logreg, cv=5, scoring='roc_auc')
grid_search_logreg.fit(X_train, y_train)

print("Best Logistic Regression Parameters:", grid_search_logreg.best_params_)
best_logreg = grid_search_logreg.best_estimator_


# Decision Tree Parameter Tuning
param_grid_tree = {
    'max_depth': [3, 5, 7, 10, None], # None means unbounded depth
    'min_samples_split': [2, 5, 10],
    'min_samples_leaf': [1, 3, 5],
    'criterion': ['gini', 'entropy']
}

grid_search_tree = GridSearchCV(DecisionTreeClassifier(random_state=42), param_grid_tree, cv=5, scoring='roc_auc')
grid_search_tree.fit(X_train, y_train)

print("Best Decision Tree Parameters:", grid_search_tree.best_params_)
best_tree = grid_search_tree.best_estimator_

# Evaluate the best models on the test set (replace previous evaluations)
y_pred_logreg = best_logreg.predict(X_test)
y_pred_proba_logreg = best_logreg.predict_proba(X_test)[:, 1]

y_pred_tree = best_tree.predict(X_test)
y_pred_proba_tree = best_tree.predict_proba(X_test)[:, 1]


#Print metrics for the best models (similarly to previous evaluation steps)
```

---

### 9. Interpretation of Model Outcomes

*   **Identify Important Features:** Determine which features are most influential in predicting income levels based on the model coefficients (Logistic Regression) or feature importance (Decision Trees).
*   **Draw Conclusions:** Draw meaningful conclusions about the factors that contribute to higher or lower income levels. For example, higher education, specific occupations, and longer working hours might be positively correlated with higher income.  Age may have a non-linear relationship.
*   **Address Bias:** Be aware of potential biases in the dataset and the model predictions. Consider the ethical implications of using these models for decision-making. For instance, if the training data reflects historical biases in hiring practices, the model might perpetuate those biases.

---

### 10. Important Points to Remember

*   Data preprocessing is crucial for model performance.
*   Choose appropriate evaluation metrics based on the problem and the desired outcome.
*   Parameter tuning is essential for optimizing model performance and preventing overfitting.
*   Interpretability is important for understanding the model's behavior and ensuring fairness.
*   Be aware of potential biases in the data and the model predictions.

---

### Practice Questions/Exercises

**1. What is the sigmoid function and how is it used in Logistic Regression?**

**Answer:** The sigmoid function (1 / (1 + exp(-x))) transforms the linear combination of input features into a probability between 0 and 1.  It maps any real-valued number to a value between 0 and 1, allowing Logistic Regression to model probabilities for binary outcomes.

**2. Explain the difference between Gini impurity and entropy in the context of Decision Trees.**

**Answer:** Both Gini impurity and entropy are measures of node impurity. Gini impurity measures the probability of misclassifying a randomly chosen element in a node if it were randomly labeled according to the class distribution in the node. Entropy measures the average information content of the node. While both are good splitting criteria, Gini impurity is computationally faster, while entropy might lead to slightly more balanced trees.

**3. Why is feature scaling important for Logistic Regression, but less so for Decision Trees?**

**Answer:** Logistic Regression is sensitive to the scale of features because it uses gradient descent to find the optimal coefficients. Features with larger scales can dominate the optimization process. Decision Trees, on the other hand, are based on splitting the data based on feature values, and the scale of the features does not affect the splitting process.

**4. Explain the concept of overfitting and how it can be prevented in Decision Trees.**

**Answer:** Overfitting occurs when a model learns the training data too well, including noise and outliers, and performs poorly on unseen data. In Decision Trees, overfitting can be prevented by limiting the depth of the tree (`max_depth`), setting minimum sample requirements for splitting nodes (`min_samples_split`) and leaf nodes (`min_samples_leaf`), and using pruning techniques.

**5. What is the purpose of regularization in Logistic Regression, and how does it work?**

**Answer:** Regularization in Logistic Regression prevents overfitting by adding a penalty term to the loss function. L1 regularization (Lasso) adds the absolute value of the coefficients to the loss function, which can lead to feature selection by driving some coefficients to zero. L2 regularization (Ridge) adds the squared value of the coefficients to the loss function, which shrinks the coefficients towards zero but rarely sets them exactly to zero.

**6. Implement the above code from start to finish and comment/explain what each step does.** (This is a major exercise)

**7. Tune the hyperparameters for both Logistic Regression and Decision Trees (using Grid Search or Randomized Search) and discuss how hyperparameter tuning affected the accuracy of both models.** (This is also a major exercise)
