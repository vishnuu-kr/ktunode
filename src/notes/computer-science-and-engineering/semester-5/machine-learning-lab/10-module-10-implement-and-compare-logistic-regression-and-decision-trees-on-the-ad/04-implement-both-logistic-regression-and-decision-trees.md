---
title: "Implement both Logistic Regression and Decision Trees."
subject: "MACHINE LEARNING LAB"
module: "Module 10: Implement and compare Logistic Regression and Decision Trees on the Adult Income dataset for predicting income levels. Evaluate both models based on performance metrics and interpretability."
branch: "Computer Science and Engineering"
semester: 5
topicId: "684162770fc9aa1fdbc8b96f"
status: "completed"
scrapedAt: "2026-05-20T16:47:35.669Z"
---
## MACHINE LEARNING LAB - Module 10: Logistic Regression vs. Decision Trees on Adult Income Dataset

**Topic: Implement both Logistic Regression and Decision Trees**

**Learning Outcomes:**

*   Understand the principles of Logistic Regression and Decision Trees.
*   Preprocess the Adult Income dataset for machine learning tasks.
*   Implement Logistic Regression using Python libraries (e.g., scikit-learn).
*   Implement Decision Trees using Python libraries (e.g., scikit-learn).
*   Evaluate the performance of both models using appropriate metrics (Accuracy, Precision, Recall, F1-score, AUC-ROC).
*   Compare the interpretability of Logistic Regression and Decision Trees.
*   Identify the strengths and weaknesses of each model for this specific dataset.

---

### 1. Introduction

This module focuses on implementing and comparing two popular classification algorithms: Logistic Regression and Decision Trees.  We'll use the Adult Income dataset, a standard dataset for classification problems, to predict whether an individual's income is above or below a certain threshold (often $50,000). The emphasis is not just on getting the highest accuracy, but also on understanding how the models work and how to interpret their results.

### 2. Key Concepts and Definitions

*   **Classification:** A supervised learning task where the goal is to assign an input data point to a predefined category or class.  In this case, our classes are '>50K' and '<=50K'.
*   **Supervised Learning:** A type of machine learning where the algorithm learns from a labeled dataset (i.e., a dataset where the correct output is known for each input).
*   **Adult Income Dataset:** A dataset containing demographic and socio-economic information about individuals, including age, education, occupation, etc., along with their income level.  It is frequently used for classification tasks.
*   **Feature Engineering:** The process of transforming raw data into features that better represent the underlying problem to the predictive models, resulting in improved model accuracy. This can involve creating new features, scaling existing features, or handling missing values.
*   **Model Training:** The process of using a labeled dataset to adjust the parameters of a machine learning model so that it can accurately predict the output for new, unseen data.
*   **Model Evaluation:** The process of assessing the performance of a trained machine learning model on a hold-out dataset to estimate its generalization ability.

### 3. Logistic Regression

#### 3.1 Principles of Logistic Regression

Logistic Regression is a linear model that predicts the probability of a binary outcome. It models the probability of the outcome using the logistic function (sigmoid function):

`p(Y=1) = 1 / (1 + exp(-(β0 + β1X1 + β2X2 + ... + βnXn)))`

Where:

*   `p(Y=1)` is the probability of the outcome being 1 (e.g., income > 50K).
*   `β0` is the intercept (bias).
*   `β1, β2, ..., βn` are the coefficients for the features `X1, X2, ..., Xn`.
*   `exp` is the exponential function.

The output of the logistic function is always between 0 and 1, representing a probability.  A threshold (typically 0.5) is used to classify the input into one of the two classes.

#### 3.2 Implementation Steps

1.  **Import Libraries:** Import necessary libraries like `pandas` for data manipulation, `scikit-learn` for Logistic Regression, train-test split, and evaluation metrics.

    ```python
    import pandas as pd
    from sklearn.model_selection import train_test_split
    from sklearn.linear_model import LogisticRegression
    from sklearn.metrics import accuracy_score, classification_report, roc_auc_score, roc_curve
    import matplotlib.pyplot as plt
    import numpy as np # added for handling NaN values

    # optional for preprocessing features
    from sklearn.preprocessing import StandardScaler, OneHotEncoder
    from sklearn.compose import ColumnTransformer
    from sklearn.pipeline import Pipeline

    ```

2.  **Load and Explore the Data:** Load the Adult Income dataset using pandas.  Explore the data to understand its structure, data types, and missing values.

    ```python
    # Replace 'adult.csv' with the actual path to your dataset
    data = pd.read_csv('adult.csv')

    # Display the first few rows of the dataset
    print(data.head())

    # Get summary statistics of the numerical features
    print(data.describe())

    # Check the data types of the features
    print(data.dtypes)

    # Check for missing values
    print(data.isnull().sum()) # This might not show missing values if they are encoded as '?' or other strings.

    # Assuming missing values are represented as '?'
    data = data.replace('?', np.nan) # replace ? with NaN
    print(data.isnull().sum()) # This will now show true missing value count
    data = data.dropna()  # Remove rows with any missing values

    # Verify that all null values have been handled
    print(data.isnull().sum())
    ```

3.  **Data Preprocessing:** Prepare the data for Logistic Regression. This includes:

    *   **Handling Missing Values:**  Identify and handle missing values.  Common techniques include removing rows with missing values or imputing them with the mean, median, or mode. **Important:** In the provided `adult.csv` missing values are often represented by "?", not `NaN`, so you must replace these with `NaN` before using methods like `dropna()` or imputation.
    *   **Encoding Categorical Features:** Convert categorical features (e.g., 'workclass', 'education', 'occupation') into numerical representations.  Common techniques include:
        *   **One-Hot Encoding:** Creates a new binary column for each category within a categorical feature.  Suitable for categorical features with low cardinality (number of unique values).
        *   **Label Encoding:** Assigns a numerical label to each category. Can be problematic for Logistic Regression as it implies an ordinal relationship between categories that may not exist.
    *   **Feature Scaling:** Scale numerical features to have a similar range. This is important for Logistic Regression as it is sensitive to the scale of the features.  Common techniques include:
        *   **StandardScaler:** Standardizes features by removing the mean and scaling to unit variance (Z-score normalization).
        *   **MinMaxScaler:** Scales features to a range between 0 and 1.

    ```python
    # Identify categorical and numerical features
    categorical_features = data.select_dtypes(include=['object']).columns.tolist()
    numerical_features = data.select_dtypes(include=['number']).columns.tolist()

    # remove target column 'income' from categorical feature
    categorical_features.remove('income')

    # Define the preprocessing steps
    numeric_transformer = StandardScaler()
    categorical_transformer = OneHotEncoder(handle_unknown='ignore')

    # Create a ColumnTransformer to apply different transformers to different columns
    preprocessor = ColumnTransformer(
        transformers=[
            ('num', numeric_transformer, numerical_features),
            ('cat', categorical_transformer, categorical_features)])

    # Split data into features (X) and target (y)
    X = data.drop('income', axis=1)
    y = data['income']

    # Split data into training and testing sets
    X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)


    # Preprocess the training data
    X_train = preprocessor.fit_transform(X_train)

    # Preprocess the testing data
    X_test = preprocessor.transform(X_test)
    ```

4.  **Train the Logistic Regression Model:** Create an instance of the `LogisticRegression` class and train it using the preprocessed training data.  You can adjust hyperparameters like `penalty` (L1 or L2 regularization), `C` (inverse of regularization strength), and `solver` (algorithm for optimization).

    ```python
    # Create a Logistic Regression model
    model = LogisticRegression(solver='liblinear', random_state=42) # 'liblinear' is good for small datasets

    # Train the model
    model.fit(X_train, y_train)
    ```

5.  **Make Predictions:** Use the trained model to make predictions on the preprocessed testing data.

    ```python
    # Make predictions on the test set
    y_pred = model.predict(X_test)
    ```

6.  **Evaluate the Model:** Evaluate the performance of the model using appropriate metrics.

    ```python
    # Calculate accuracy
    accuracy = accuracy_score(y_test, y_pred)
    print(f"Accuracy: {accuracy:.4f}")

    # Generate a classification report
    print("Classification Report:")
    print(classification_report(y_test, y_pred))

    # Calculate the predicted probabilities
    y_pred_proba = model.predict_proba(X_test)[:, 1]  # Probability of the positive class

    # Calculate AUC-ROC score
    auc_roc = roc_auc_score(y_test, y_pred_proba)
    print(f"AUC-ROC Score: {auc_roc:.4f}")

    # Plot ROC curve
    fpr, tpr, thresholds = roc_curve(y_test, y_pred_proba)

    plt.figure(figsize=(8, 6))
    plt.plot(fpr, tpr, color='darkorange', lw=2, label=f'AUC = {auc_roc:.2f}')
    plt.plot([0, 1], [0, 1], color='navy', lw=2, linestyle='--')
    plt.xlabel('False Positive Rate')
    plt.ylabel('True Positive Rate')
    plt.title('Receiver Operating Characteristic (ROC) Curve')
    plt.legend(loc='lower right')
    plt.show()
    ```

#### 3.3 Important Points to Remember for Logistic Regression:

*   Logistic Regression is a linear model, so it may not perform well on datasets with complex non-linear relationships.
*   Feature scaling is important for Logistic Regression.
*   Regularization (L1 or L2) can help prevent overfitting.
*   Logistic Regression is relatively easy to interpret as you can examine the coefficients to understand the impact of each feature.
*   Handles binary classification directly; for multi-class problems, techniques like One-vs-Rest (OvR) or Multinomial Logistic Regression are used.

### 4. Decision Trees

#### 4.1 Principles of Decision Trees

Decision Trees are non-parametric supervised learning methods used for both classification and regression.  They work by recursively partitioning the feature space into smaller regions based on the values of the features.  Each internal node in the tree represents a test on an attribute, each branch represents the outcome of the test, and each leaf node represents a class label (in classification) or a predicted value (in regression).

The goal is to create a tree that minimizes impurity at each node.  Common impurity measures include:

*   **Gini Impurity:** Measures the probability of misclassifying a randomly chosen element if it were randomly labeled according to the class distribution in the node.
*   **Entropy:** Measures the disorder or randomness in the node.

Decision Trees can handle both numerical and categorical features directly.

#### 4.2 Implementation Steps

1.  **Import Libraries:** (already covered above)
2.  **Load and Explore the Data:** (already covered above)
3.  **Data Preprocessing:** (already covered above) - **Important:** Decision Trees can handle categorical features directly, but scikit-learn's `DecisionTreeClassifier` requires numerical input. Therefore, encoding categorical features is still necessary.
4.  **Train the Decision Tree Model:** Create an instance of the `DecisionTreeClassifier` class and train it using the preprocessed training data.  You can adjust hyperparameters like `max_depth` (maximum depth of the tree), `min_samples_split` (minimum number of samples required to split an internal node), and `min_samples_leaf` (minimum number of samples required to be at a leaf node) to control the complexity of the tree and prevent overfitting.

    ```python
    from sklearn.tree import DecisionTreeClassifier, plot_tree

    # Create a Decision Tree model
    tree_model = DecisionTreeClassifier(random_state=42, max_depth=5) # Example hyperparameters: limiting max_depth to avoid overfitting

    # Train the model
    tree_model.fit(X_train, y_train)
    ```

5.  **Make Predictions:** Use the trained model to make predictions on the preprocessed testing data.

    ```python
    # Make predictions on the test set
    y_pred_tree = tree_model.predict(X_test)
    ```

6.  **Evaluate the Model:** Evaluate the performance of the model using appropriate metrics.

    ```python
    # Calculate accuracy
    accuracy_tree = accuracy_score(y_test, y_pred_tree)
    print(f"Decision Tree Accuracy: {accuracy_tree:.4f}")

    # Generate a classification report
    print("Decision Tree Classification Report:")
    print(classification_report(y_test, y_pred_tree))

    # Calculate the predicted probabilities
    y_pred_proba_tree = tree_model.predict_proba(X_test)[:, 1]  # Probability of the positive class

    # Calculate AUC-ROC score
    auc_roc_tree = roc_auc_score(y_test, y_pred_proba_tree)
    print(f"Decision Tree AUC-ROC Score: {auc_roc_tree:.4f}")

    # Plot ROC curve
    fpr_tree, tpr_tree, thresholds_tree = roc_curve(y_test, y_pred_proba_tree)

    plt.figure(figsize=(8, 6))
    plt.plot(fpr_tree, tpr_tree, color='darkorange', lw=2, label=f'AUC = {auc_roc_tree:.2f}')
    plt.plot([0, 1], [0, 1], color='navy', lw=2, linestyle='--')
    plt.xlabel('False Positive Rate')
    plt.ylabel('True Positive Rate')
    plt.title('Decision Tree Receiver Operating Characteristic (ROC) Curve')
    plt.legend(loc='lower right')
    plt.show()

    # Visualize the Decision Tree (optional, for smaller trees)
    plt.figure(figsize=(20, 10))
    plot_tree(tree_model, feature_names=preprocessor.get_feature_names_out(), class_names=['<=50K', '>50K'], filled=True, fontsize=10)  # Use preprocessor to get the column names
    plt.show()

    ```

#### 4.3 Important Points to Remember for Decision Trees:

*   Decision Trees are non-parametric and can handle non-linear relationships in the data.
*   Decision Trees are prone to overfitting, especially when the tree is allowed to grow too deep.  Techniques like pruning, limiting `max_depth`, and setting minimum sample requirements can help prevent overfitting.
*   Decision Trees are relatively easy to interpret, especially for smaller trees.
*   Feature scaling is **not** strictly required for Decision Trees, but it can sometimes improve performance or stability, particularly when combined with other techniques.
*   Can handle both numerical and categorical data, although scikit-learn implementations often require categorical data to be encoded numerically.
*   Decision Trees can be sensitive to small changes in the data.

### 5. Comparing Logistic Regression and Decision Trees

| Feature          | Logistic Regression                                     | Decision Trees                                         |
| ---------------- | ----------------------------------------------------- | ------------------------------------------------------ |
| Model Type       | Linear                                                | Non-linear                                              |
| Interpretability | High (coefficients indicate feature importance)         | Moderate (easy to visualize for small trees)           |
| Overfitting      | Less prone to overfitting (with regularization)         | Prone to overfitting (requires pruning)                |
| Feature Scaling  | Important                                              | Not strictly required, but can be beneficial            |
| Data Types       | Numerical (categorical features need encoding)       | Numerical (scikit-learn requires numerical encoding)   |
| Non-linearity    | Can only capture linear relationships                | Can capture non-linear relationships                  |
| Hyperparameters  | Regularization strength (C), solver, penalty        | Max depth, min samples split, min samples leaf, criterion |

**When to use which model:**

*   **Logistic Regression:** Use when you suspect a linear relationship between the features and the target variable, and when interpretability is important.  Also a good starting point for many classification problems.
*   **Decision Trees:** Use when you suspect non-linear relationships and when you need a model that can handle categorical features directly.  Be mindful of overfitting and use techniques like pruning to control complexity.

### 6. Practice Questions/Exercises

1.  **Data Preprocessing:** How would you handle missing values in the Adult Income dataset if the number of missing values in a specific column is very high (e.g., >50%)? Explain why.
    *   **Answer:** If a column has a very high percentage of missing values, it might be best to drop the column altogether.  Imputing a large number of missing values could introduce significant bias and distort the information in the column.  Consider the potential information loss and whether the column is crucial for prediction.

2.  **Hyperparameter Tuning:** What are the effects of increasing the `max_depth` parameter in a Decision Tree?
    *   **Answer:** Increasing `max_depth` allows the tree to grow deeper and capture more complex relationships in the data. However, it also increases the risk of overfitting, leading to poor generalization performance on unseen data.

3.  **Interpretability:** How would you interpret the coefficients in a Logistic Regression model in the context of the Adult Income dataset?
    *   **Answer:**  After One-Hot Encoding, each coefficient represents the change in the log-odds of the outcome (income > 50K) for a one-unit increase in the corresponding feature, holding all other features constant.  A positive coefficient indicates that an increase in the feature increases the likelihood of income being > 50K, while a negative coefficient indicates the opposite. The magnitude of the coefficient reflects the strength of the association.

4.  **Model Comparison:**  You train both Logistic Regression and a Decision Tree on the Adult Income dataset. Logistic Regression achieves an accuracy of 82%, while the Decision Tree achieves an accuracy of 85%. However, the Decision Tree has a much lower F1-score for the minority class (income > 50K).  Which model would you choose and why?
    *   **Answer:** This depends on the specific goals. While the Decision Tree has a higher overall accuracy, the lower F1-score for the minority class suggests that it might be overfitting to the majority class (income <= 50K). If accurately predicting income > 50K is important, the Logistic Regression model might be preferred despite its slightly lower overall accuracy, because its F1-score for the minority class will likely be better (or at least not drastically worse). Further investigation into the model's performance across different evaluation metrics is warranted, alongside considering the business implications of misclassifying either income group.

5.  **Feature Importance:** How can you determine which features are most important in a trained Decision Tree model?
    *   **Answer:** Use the `feature_importances_` attribute of the trained `DecisionTreeClassifier` object. This attribute returns an array of values representing the relative importance of each feature in the dataset. Higher values indicate greater importance. These values can be displayed alongside their associated features for clear understanding.

### 7. Conclusion

This module provided a hands-on experience implementing and comparing Logistic Regression and Decision Trees on the Adult Income dataset. You learned how to preprocess the data, train and evaluate the models, and interpret the results.  Understanding the strengths and weaknesses of each model allows you to choose the best approach for your specific machine learning task.  Remember that model selection is an iterative process that often involves experimentation and fine-tuning.
