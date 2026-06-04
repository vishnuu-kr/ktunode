---
title: "Implement and compare Logistic Regression and Decision Trees on the Adult Income dataset for predicting income levels. Evaluate both models based on performance metrics and interpretability."
subject: "MACHINE LEARNING LAB"
module: "Module 10: Implement and compare Logistic Regression and Decision Trees on the Adult Income dataset for predicting income levels. Evaluate both models based on performance metrics and interpretability."
branch: "Computer Science and Engineering"
semester: 5
topicId: "684162770fc9aa1fdbc8b96c"
status: "completed"
scrapedAt: "2026-05-20T16:47:33.391Z"
---
# MACHINE LEARNING LAB - Module 10: Logistic Regression vs. Decision Trees on Adult Income Dataset

**Topic:** Implement and compare Logistic Regression and Decision Trees on the Adult Income dataset for predicting income levels. Evaluate both models based on performance metrics and interpretability.

**Description:** This module focuses on applying two common classification algorithms, Logistic Regression and Decision Trees, to a real-world dataset (Adult Income dataset).  We will implement these models, train them on the data, evaluate their performance using various metrics, and compare their interpretability.

**Learning Outcomes:**

*   Understand the Adult Income dataset and its features.
*   Implement Logistic Regression for binary classification.
*   Implement Decision Trees for binary classification.
*   Evaluate the performance of both models using appropriate metrics (e.g., accuracy, precision, recall, F1-score, AUC-ROC).
*   Compare and contrast the interpretability of Logistic Regression and Decision Trees.
*   Identify the strengths and weaknesses of each model in the context of the Adult Income dataset.

---

## 1. Understanding the Adult Income Dataset

*   **Description:** The Adult Income dataset (also known as the "Census Income" dataset) is a widely used dataset for classification tasks. It contains demographic and socioeconomic information about individuals, and the goal is to predict whether their income exceeds $50,000 per year.

*   **Data Source:**  Often available from UCI Machine Learning Repository (or Kaggle, etc.)

*   **Key Features (Examples):**

    *   `age`: Age of the individual.
    *   `workclass`: Type of employment (e.g., Private, Self-emp-not-inc, Federal-gov).
    *   `fnlwgt`: "Final weight" - represents the number of people the census believes that entry represents.
    *   `education`: Highest level of education attained (e.g., Bachelors, Some-college, HS-grad).
    *   `education-num`: Numerical representation of the education level.
    *   `marital-status`: Marital status (e.g., Married-civ-spouse, Never-married).
    *   `occupation`: Type of occupation (e.g., Tech-support, Craft-repair, Sales).
    *   `relationship`: Relationship in family (e.g., Wife, Husband, Not-in-family).
    *   `race`: Race (e.g., White, Black, Asian-Pac-Islander).
    *   `sex`: Gender (Male, Female).
    *   `capital-gain`: Capital gains.
    *   `capital-loss`: Capital losses.
    *   `hours-per-week`: Number of hours worked per week.
    *   `native-country`: Country of origin.
    *   `income`: Income level ( >50K or <=50K) - **Target variable**.

*   **Data Preprocessing Considerations:**

    *   **Missing Values:** The dataset often contains missing values, represented as "?".  Strategies for handling missing values include:
        *   **Imputation:** Replacing missing values with the mean, median, or mode of the column.  For categorical features, the mode is often used.
        *   **Removal:** Removing rows or columns with a high percentage of missing values.  This should be done carefully.
    *   **Categorical Feature Encoding:** Machine learning models generally require numerical input. Categorical features must be encoded into numerical representations. Common encoding methods include:
        *   **One-Hot Encoding:** Creating a new binary column for each category. This is suitable for nominal categorical features (no inherent order).
        *   **Label Encoding:** Assigning a unique integer to each category. This is suitable for ordinal categorical features (inherent order, like education levels).  *Use with caution, as it can imply unintended relationships.*
    *   **Feature Scaling:**  Scaling numerical features to a similar range can improve model performance. Common scaling methods include:
        *   **StandardScaler:**  Scales features to have zero mean and unit variance.  Useful when the data has a normal distribution.
        *   **MinMaxScaler:**  Scales features to a range between 0 and 1. Useful when the data does not have a normal distribution or when specific range is required.
    *   **Data Splitting:** Divide the dataset into training, validation, and testing sets.
        *   **Training Set:** Used to train the model.
        *   **Validation Set:** Used to tune hyperparameters and avoid overfitting during training. (Optional, but recommended.)
        *   **Testing Set:** Used to evaluate the final performance of the trained model.

**Example (Python - Pandas):**

```python
import pandas as pd
from sklearn.model_selection import train_test_split

# Load the dataset
data = pd.read_csv('adult.csv')  # Replace 'adult.csv' with the actual filename

# Handle missing values (replace '?' with NaN and then drop rows)
data = data.replace('?', float('NaN'))
data = data.dropna()

# Convert income to numerical (0 and 1)
data['income'] = data['income'].map({'<=50K': 0, '>50K': 1})

# Select features and target
X = data.drop('income', axis=1)
y = data['income']

# Split data into training and testing sets
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)  # Adjust test_size and random_state as needed

print(X_train.head())
print(y_train.head())
```

## 2. Implementing Logistic Regression

*   **Key Concepts:**
    *   **Binary Classification:** Logistic Regression is a linear model that predicts the probability of a binary outcome (0 or 1).
    *   **Sigmoid Function:**  The sigmoid function (also known as the logistic function) maps any real-valued number to a value between 0 and 1.  The output is interpreted as the probability of the positive class.
        *   Formula:  σ(z) = 1 / (1 + e^(-z))
    *   **Linear Combination:** The input features are combined linearly with weights (coefficients) and a bias term.
        *   z = w1 * x1 + w2 * x2 + ... + wn * xn + b
    *   **Cost Function:** Logistic Regression uses a cost function (e.g., log loss or cross-entropy loss) to measure the difference between the predicted probabilities and the actual labels.
    *   **Optimization:**  The goal is to find the weights and bias that minimize the cost function. Common optimization algorithms include:
        *   **Gradient Descent:** An iterative optimization algorithm that updates the weights in the direction of the negative gradient of the cost function.
    *   **Regularization:**  Techniques used to prevent overfitting by adding a penalty term to the cost function.
        *   **L1 Regularization (Lasso):**  Adds a penalty proportional to the absolute value of the weights. Can lead to sparse models (some weights are zero).
        *   **L2 Regularization (Ridge):** Adds a penalty proportional to the square of the weights.  Tends to shrink the weights towards zero without making them exactly zero.
*   **Implementation Steps:**

    1.  **Preprocess the data:** Handle missing values, encode categorical features, and scale numerical features (as discussed in Section 1).
    2.  **Split the data:** Create training and testing sets.
    3.  **Create a Logistic Regression model:** Use a library like scikit-learn.
    4.  **Train the model:** Fit the model to the training data.
    5.  **Make predictions:** Use the trained model to predict income levels on the testing data.
    6.  **Evaluate the model:** Calculate performance metrics.

**Example (Python - Scikit-learn):**

```python
from sklearn.linear_model import LogisticRegression
from sklearn.preprocessing import StandardScaler, OneHotEncoder
from sklearn.compose import ColumnTransformer
from sklearn.pipeline import Pipeline
from sklearn.metrics import accuracy_score, classification_report, roc_auc_score

# Identify categorical and numerical features
categorical_features = X_train.select_dtypes(include=['object']).columns
numerical_features = X_train.select_dtypes(include=['number']).columns

# Create a preprocessor using ColumnTransformer
# StandardScaler for numerical, OneHotEncoder for categorical
preprocessor = ColumnTransformer(
    transformers=[
        ('num', StandardScaler(), numerical_features),
        ('cat', OneHotEncoder(handle_unknown='ignore'), categorical_features)  # handle_unknown to prevent errors if new categories are encountered
    ],
    remainder='passthrough'  # Other columns will be unchanged
)

# Create a pipeline
pipeline = Pipeline(steps=[('preprocessor', preprocessor),
                           ('classifier', LogisticRegression(solver='liblinear', random_state=42))])  # 'liblinear' is good for small datasets


# Train the model
pipeline.fit(X_train, y_train)

# Make predictions
y_pred = pipeline.predict(X_test)

# Evaluate the model
accuracy = accuracy_score(y_test, y_pred)
print(f"Accuracy: {accuracy}")

print(classification_report(y_test, y_pred))

# ROC AUC Score (requires probability estimates)
y_pred_proba = pipeline.predict_proba(X_test)[:, 1]  # Probabilities for the positive class
roc_auc = roc_auc_score(y_test, y_pred_proba)
print(f"ROC AUC: {roc_auc}")
```

## 3. Implementing Decision Trees

*   **Key Concepts:**
    *   **Tree-like Structure:** Decision Trees represent decisions and their possible consequences in a tree-like structure.
    *   **Nodes:**
        *   **Root Node:** The topmost node, representing the initial decision.
        *   **Internal Nodes:** Nodes that represent tests on features.
        *   **Leaf Nodes:** Nodes that represent the final prediction (class label).
    *   **Splitting:** The process of dividing a node into two or more sub-nodes based on a feature.
    *   **Splitting Criteria:**  Metrics used to determine the best feature and split point for each node.  Common criteria include:
        *   **Gini Impurity:** Measures the probability of misclassifying a randomly chosen element if it were randomly labeled according to the class distribution in the subset.  Lower Gini impurity is better.
        *   **Entropy:** Measures the uncertainty or randomness in a node.  Lower entropy is better.
        *   **Information Gain:** The reduction in entropy or Gini impurity achieved by splitting a node on a feature.
    *   **Pruning:** Techniques used to prevent overfitting by reducing the complexity of the tree.  Common methods include:
        *   **Pre-pruning:** Setting limits on the tree's growth (e.g., maximum depth, minimum samples per leaf).
        *   **Post-pruning:** Removing branches or nodes after the tree has been fully grown.
*   **Implementation Steps:**

    1.  **Preprocess the data:** Handle missing values, encode categorical features (LabelEncoding may be sufficient for Decision Trees, but OneHotEncoding is still valid), and optionally scale numerical features (though Decision Trees are less sensitive to feature scaling).
    2.  **Split the data:** Create training and testing sets.
    3.  **Create a Decision Tree model:** Use a library like scikit-learn.
    4.  **Tune Hyperparameters:**  Experiment with hyperparameters such as `max_depth`, `min_samples_split`, and `min_samples_leaf` to optimize performance and prevent overfitting.  Consider using cross-validation to evaluate different hyperparameter settings.
    5.  **Train the model:** Fit the model to the training data.
    6.  **Make predictions:** Use the trained model to predict income levels on the testing data.
    7.  **Evaluate the model:** Calculate performance metrics.
    8.  **Visualize the Tree (Optional):** Use libraries like `graphviz` or `matplotlib` to visualize the decision tree.

**Example (Python - Scikit-learn):**

```python
from sklearn.tree import DecisionTreeClassifier, plot_tree
import matplotlib.pyplot as plt
from sklearn.metrics import accuracy_score, classification_report

# Identify categorical and numerical features (same as before)
categorical_features = X_train.select_dtypes(include=['object']).columns
numerical_features = X_train.select_dtypes(include=['number']).columns

# Create a preprocessor (OneHotEncoder for categorical)
preprocessor = ColumnTransformer(
    transformers=[
        ('num', StandardScaler(), numerical_features), # or choose to drop it
        ('cat', OneHotEncoder(handle_unknown='ignore'), categorical_features)
    ],
    remainder='passthrough'
)

# Create a pipeline
pipeline_dt = Pipeline(steps=[('preprocessor', preprocessor),
                            ('classifier', DecisionTreeClassifier(random_state=42, max_depth=10))])  # Adjust max_depth

# Train the model
pipeline_dt.fit(X_train, y_train)

# Make predictions
y_pred_dt = pipeline_dt.predict(X_test)

# Evaluate the model
accuracy_dt = accuracy_score(y_test, y_pred_dt)
print(f"Decision Tree Accuracy: {accuracy_dt}")
print(classification_report(y_test, y_pred_dt))


# ROC AUC Score (requires probability estimates)
y_pred_proba_dt = pipeline_dt.predict_proba(X_test)[:, 1]  # Probabilities for the positive class
roc_auc_dt = roc_auc_score(y_test, y_pred_proba_dt)
print(f"ROC AUC: {roc_auc_dt}")


# Visualize the tree (first transform the data)
X_train_transformed = preprocessor.fit_transform(X_train)

feature_names = preprocessor.get_feature_names_out() # Get the feature names after preprocessing
estimator = pipeline_dt.named_steps['classifier'] # Grab the model from pipeline


plt.figure(figsize=(20, 10))  # Adjust figure size as needed
plot_tree(estimator,
          feature_names=feature_names,
          class_names=['<=50K', '>50K'],
          filled=True,
          fontsize=8)  # Adjust fontsize as needed
plt.show()
```

## 4. Evaluating Model Performance

*   **Performance Metrics:**

    *   **Accuracy:** The proportion of correctly classified instances.  (TP + TN) / (TP + TN + FP + FN)
    *   **Precision:** The proportion of true positives out of all instances predicted as positive. TP / (TP + FP) - Measures how accurately positive predictions are.
    *   **Recall (Sensitivity):** The proportion of true positives out of all actual positive instances. TP / (TP + FN) - Measures how well the model finds all positive instances.
    *   **F1-score:** The harmonic mean of precision and recall.  2 * (Precision * Recall) / (Precision + Recall) - Provides a balanced measure of precision and recall.
    *   **AUC-ROC (Area Under the Receiver Operating Characteristic Curve):**  A measure of the model's ability to distinguish between the two classes.  A higher AUC-ROC indicates better performance.  AUC represents the probability that a model ranks a random positive example more highly than a random negative example.
    *   **Confusion Matrix:** A table that summarizes the performance of a classification model by showing the number of true positives (TP), true negatives (TN), false positives (FP), and false negatives (FN).

*   **Interpreting Metrics in the Context of the Adult Income Dataset:**

    *   Consider the cost of false positives (predicting income > $50K when it's actually <= $50K) vs. false negatives (predicting income <= $50K when it's actually > $50K).  This will influence the choice of metrics.  For example, if it is more important to correctly identify individuals who earn > $50K (e.g., for targeted marketing), then recall is more important than precision.
    *   Look at the class distribution. If the dataset is imbalanced (one class has significantly more instances than the other), accuracy can be misleading. In this case, precision, recall, F1-score, and AUC-ROC are more informative.

## 5. Comparing Interpretability

*   **Logistic Regression:**

    *   **Interpretability:** Generally more interpretable than Decision Trees, especially when the number of features is not too large.
    *   **Coefficients:** The coefficients of the logistic regression model represent the change in the log-odds of the positive class for a one-unit change in the corresponding feature (assuming all other features are held constant).  A positive coefficient indicates that an increase in the feature increases the probability of the positive class.  A negative coefficient indicates the opposite.
    *   **Limitations:** The interpretability of logistic regression can be affected by multicollinearity (high correlation between features).

*   **Decision Trees:**

    *   **Interpretability:** Highly interpretable, especially for small trees.  The decision rules are easy to understand and visualize.
    *   **Tree Structure:** The tree structure explicitly shows the decision-making process. You can follow the branches from the root node to a leaf node to understand how a particular instance is classified.
    *   **Limitations:** Large, complex trees can be difficult to interpret.

*   **Comparison Table:**

| Feature        | Logistic Regression                               | Decision Trees                                 |
|----------------|---------------------------------------------------|-------------------------------------------------|
| Interpretability | Generally more interpretable (coefficients)    | Highly interpretable (tree structure), but may suffer if the tree is too large |
| Model Complexity | Linear model, lower complexity                     | Can be more complex, prone to overfitting          |
| Handling Non-Linearity |  Needs feature engineering/transformation |  Can model non-linear relationships             |
| Feature Interactions | Needs feature engineering                       | Can model feature interactions implicitly         |

## 6. Strengths and Weaknesses

*   **Logistic Regression:**

    *   **Strengths:**
        *   Simple and easy to implement.
        *   Interpretable.
        *   Efficient for linearly separable data.
    *   **Weaknesses:**
        *   Assumes a linear relationship between features and the log-odds of the outcome.
        *   Can struggle with complex, non-linear relationships.
        *   Sensitive to multicollinearity.

*   **Decision Trees:**

    *   **Strengths:**
        *   Easy to understand and visualize.
        *   Can handle both numerical and categorical features.
        *   Can model non-linear relationships.
        *   Robust to outliers.
        *   Can handle missing values (depending on the implementation).
    *   **Weaknesses:**
        *   Prone to overfitting (especially with deep trees).
        *   Can be unstable (small changes in the data can lead to different tree structures).
        *   Can be biased towards features with more levels.

## Practice Questions / Exercises

1.  **Data Preprocessing:**  What are the advantages and disadvantages of imputing missing values versus removing rows with missing values in the Adult Income dataset?  Explain the scenarios where each approach is more appropriate.
    *   **Answer:** Imputation preserves more data but can introduce bias if the missing data is not missing at random. Removal is simpler but can lead to a loss of information and potentially bias if the removed rows are not representative of the overall dataset. Imputation is more suitable when the percentage of missing values is low and removing rows would significantly reduce the dataset size. Removal is more appropriate when the percentage of missing values is high and imputation is likely to introduce significant bias.

2.  **Logistic Regression:** How does regularization help prevent overfitting in Logistic Regression?  Explain the difference between L1 and L2 regularization.
    *   **Answer:** Regularization adds a penalty term to the cost function, discouraging the model from assigning large weights to features. L1 regularization (Lasso) adds a penalty proportional to the absolute value of the weights, which can lead to sparse models (some weights are zero). L2 regularization (Ridge) adds a penalty proportional to the square of the weights, which tends to shrink the weights towards zero without making them exactly zero. L1 can be used for feature selection, while L2 generally provides better predictive accuracy.

3.  **Decision Trees:** Explain the concept of Gini impurity and how it is used to determine the best split in a Decision Tree.
    *   **Answer:** Gini impurity measures the probability of misclassifying a randomly chosen element if it were randomly labeled according to the class distribution in the subset. It ranges from 0 (pure node, all instances belong to the same class) to 0.5 (maximum impurity, equal distribution of classes). Decision Trees aim to minimize Gini impurity at each split, choosing the feature and split point that result in the greatest reduction in impurity.

4.  **Model Evaluation:** You trained both Logistic Regression and Decision Tree models on the Adult Income dataset.  The Logistic Regression model has an accuracy of 85% and an F1-score of 70%. The Decision Tree model has an accuracy of 87% and an F1-score of 75%. Which model would you choose and why?  Consider both performance and interpretability.
    *   **Answer:** The Decision Tree model has slightly better performance (higher accuracy and F1-score). However, the choice depends on the specific application and the relative importance of performance vs. interpretability. If interpretability is crucial (e.g., for explaining the model's decisions to stakeholders), and the Decision Tree is reasonably sized, the Decision Tree might be preferred. If only pure predictive power matters, then the decision tree is slightly better. If the Decision Tree is overly complex and prone to overfitting, and its higher performance is marginal, Logistic Regression might be a better choice due to its simplicity and stability. Furthermore, understanding what drives the difference between F1 and Accuracy is vital.

5.  **Hyperparameter Tuning:**  How can you use cross-validation to tune the `max_depth` hyperparameter of a Decision Tree?  Explain the steps involved.
    *   **Answer:**
        1.  **Define a range of values for `max_depth`:** Choose a set of possible values to test (e.g., `max_depth = [2, 4, 6, 8, 10]`).
        2.  **Split the training data into k folds:**  Use k-fold cross-validation (e.g., k = 5).
        3.  **For each value of `max_depth`:**
            *   **Iterate through the k folds:**  Train the Decision Tree on k-1 folds and evaluate it on the remaining fold.
            *   **Calculate the performance metric:**  Calculate the average performance metric (e.g., accuracy, F1-score) across all k folds.
        4.  **Select the `max_depth` value that yields the best average performance metric.**
        5.  **Train the final Decision Tree model using the selected `max_depth` on the entire training dataset.**

## Important Points to Remember

*   **Data preprocessing is crucial:** The quality of the data significantly impacts model performance.
*   **Understand the assumptions of each algorithm:** Logistic Regression assumes a linear relationship, while Decision Trees can model non-linear relationships.
*   **Prevent overfitting:** Use regularization (Logistic Regression) and pruning (Decision Trees).
*   **Choose appropriate evaluation metrics:** Consider the specific problem and the costs of different types of errors.
*   **Interpretability is important:**  Choose the model that provides the best balance between performance and interpretability.
*   **Hyperparameter Tuning:** Experiment with different hyperparameter values to find the best configuration for each model and data situation.

This detailed guide should provide a solid foundation for implementing and comparing Logistic Regression and Decision Trees on the Adult Income dataset in your Machine Learning Lab. Good luck!
