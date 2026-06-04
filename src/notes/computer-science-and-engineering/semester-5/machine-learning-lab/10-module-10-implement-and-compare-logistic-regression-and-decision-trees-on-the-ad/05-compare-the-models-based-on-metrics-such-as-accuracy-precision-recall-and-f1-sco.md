---
title: "Compare the models based on metrics such as accuracy, precision, recall, and F1-score."
subject: "MACHINE LEARNING LAB"
module: "Module 10: Implement and compare Logistic Regression and Decision Trees on the Adult Income dataset for predicting income levels. Evaluate both models based on performance metrics and interpretability."
branch: "Computer Science and Engineering"
semester: 5
topicId: "684162770fc9aa1fdbc8b970"
status: "completed"
scrapedAt: "2026-05-20T16:47:36.388Z"
---
## MACHINE LEARNING LAB - Module 10: Comparing Logistic Regression and Decision Trees on the Adult Income Dataset

**Topic:** Compare the models based on metrics such as accuracy, precision, recall, and F1-score.

**Description:** Implement and compare Logistic Regression and Decision Trees on the Adult Income dataset for predicting income levels. Evaluate both models based on performance metrics and interpretability.

**Learning Outcomes:**

*   Understand the application of Logistic Regression and Decision Trees for classification tasks.
*   Implement Logistic Regression and Decision Trees using a programming language like Python (with libraries like scikit-learn).
*   Evaluate the performance of Logistic Regression and Decision Trees using accuracy, precision, recall, and F1-score.
*   Compare the performance of Logistic Regression and Decision Trees based on these metrics.
*   Analyze the interpretability of both models.

---

### 1. Introduction: Adult Income Dataset and Classification

*   **Adult Income Dataset:** This dataset contains demographic and socioeconomic information about individuals.  The goal is to predict whether an individual's income exceeds $50,000 per year.
*   **Classification Task:** Predicting whether an individual's income is above or below $50,000 is a binary classification problem.
*   **Machine Learning Models:** We'll use two popular classification algorithms: Logistic Regression and Decision Trees.
*   **Evaluation Metrics:** We will quantitatively evaluate these models using accuracy, precision, recall, and F1-score.

### 2. Logistic Regression

*   **Definition:** Logistic Regression is a linear model for classification that predicts the probability of a binary outcome.  It uses a sigmoid function to map the linear combination of features to a probability between 0 and 1.
*   **Mathematical Formulation:**
    *   `z = w1x1 + w2x2 + ... + wn xn + b` (Linear combination of features)
    *   `p = 1 / (1 + e^-z)` (Sigmoid function, converting z to a probability p)
    *   Where:
        *   `x1, x2, ..., xn` are the features.
        *   `w1, w2, ..., wn` are the feature weights.
        *   `b` is the bias (intercept).
        *   `p` is the predicted probability of belonging to class 1.
*   **Implementation (Python with scikit-learn):**
    ```python
    from sklearn.linear_model import LogisticRegression
    from sklearn.model_selection import train_test_split
    from sklearn.metrics import accuracy_score, precision_score, recall_score, f1_score

    # Assuming X (features) and y (target variable) are already loaded
    X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.3, random_state=42) # Split data

    model = LogisticRegression(solver='liblinear', random_state=42) # Initialize Logistic Regression
    model.fit(X_train, y_train)  # Train the model

    y_pred = model.predict(X_test)  # Make predictions

    # Calculate evaluation metrics
    accuracy = accuracy_score(y_test, y_pred)
    precision = precision_score(y_test, y_pred)
    recall = recall_score(y_test, y_pred)
    f1 = f1_score(y_test, y_pred)

    print(f"Accuracy: {accuracy}")
    print(f"Precision: {precision}")
    print(f"Recall: {recall}")
    print(f"F1-score: {f1}")
    ```
*   **Advantages:** Simple to implement, provides probabilities, can handle linear relationships well.
*   **Disadvantages:** Assumes linear relationships between features and the log-odds of the outcome, may not perform well with complex, non-linear data. Requires feature scaling (e.g., standardization or normalization) for optimal performance.

### 3. Decision Trees

*   **Definition:** Decision Trees are non-parametric supervised learning methods used for both classification and regression. They partition the feature space into rectangular regions, creating a tree-like structure. Each internal node represents a test on an attribute, each branch represents the outcome of the test, and each leaf node represents a class label (classification) or a predicted value (regression).
*   **Implementation (Python with scikit-learn):**
    ```python
    from sklearn.tree import DecisionTreeClassifier
    from sklearn.model_selection import train_test_split
    from sklearn.metrics import accuracy_score, precision_score, recall_score, f1_score

    # Assuming X (features) and y (target variable) are already loaded
    X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.3, random_state=42) # Split data

    model = DecisionTreeClassifier(random_state=42) # Initialize Decision Tree
    model.fit(X_train, y_train)  # Train the model

    y_pred = model.predict(X_test)  # Make predictions

    # Calculate evaluation metrics
    accuracy = accuracy_score(y_test, y_pred)
    precision = precision_score(y_test, y_pred)
    recall = recall_score(y_test, y_pred)
    f1 = f1_score(y_test, y_pred)

    print(f"Accuracy: {accuracy}")
    print(f"Precision: {precision}")
    print(f"Recall: {recall}")
    print(f"F1-score: {f1}")
    ```
*   **Advantages:** Easy to understand and interpret, can handle both numerical and categorical data, can capture non-linear relationships.
*   **Disadvantages:** Prone to overfitting (especially with deep trees), can be sensitive to small variations in the data.

### 4. Evaluation Metrics

*   **Confusion Matrix:** A table that summarizes the performance of a classification model.
    *   **Rows:** Actual classes.
    *   **Columns:** Predicted classes.
    *   **Elements:**
        *   **True Positive (TP):**  Correctly predicted positive instances (e.g., correctly predicted income > $50k).
        *   **True Negative (TN):**  Correctly predicted negative instances (e.g., correctly predicted income <= $50k).
        *   **False Positive (FP):** Incorrectly predicted positive instances (Type I error; e.g., predicted income > $50k when it's actually <= $50k).
        *   **False Negative (FN):** Incorrectly predicted negative instances (Type II error; e.g., predicted income <= $50k when it's actually > $50k).

*   **Accuracy:**  The proportion of correctly classified instances out of all instances.
    *   `Accuracy = (TP + TN) / (TP + TN + FP + FN)`
    *   **Limitation:** Can be misleading with imbalanced datasets (where one class has significantly more instances than the other).

*   **Precision:** The proportion of correctly predicted positive instances out of all instances predicted as positive.
    *   `Precision = TP / (TP + FP)`
    *   Answers the question: "Of all the instances predicted as positive, how many were actually positive?"
    *   **Importance:**  High precision is desired when the cost of a false positive is high.  For example, if predicting fraud, you want to be sure that the transactions you flag as fraudulent are actually fraudulent.

*   **Recall (Sensitivity):** The proportion of correctly predicted positive instances out of all actual positive instances.
    *   `Recall = TP / (TP + FN)`
    *   Answers the question: "Of all the actual positive instances, how many were correctly predicted?"
    *   **Importance:** High recall is desired when the cost of a false negative is high. For example, if predicting a disease, you want to identify as many true cases as possible, even if it means some false positives.

*   **F1-Score:** The harmonic mean of precision and recall.
    *   `F1-score = 2 * (Precision * Recall) / (Precision + Recall)`
    *   Provides a balanced measure that considers both precision and recall.  Useful when you want to find a compromise between minimizing both false positives and false negatives.
    *   **Importance:** Good for imbalanced datasets, since it weighs both precision and recall equally.

### 5. Comparing Logistic Regression and Decision Trees

| Feature           | Logistic Regression                                 | Decision Tree                                        |
| ----------------- | --------------------------------------------------- | ----------------------------------------------------- |
| **Complexity**    | Lower                                               | Higher (can be controlled by tree depth)             |
| **Interpretability** | Relatively high (coefficients can be examined)     | High (visual representation, if the tree isn't too deep) |
| **Handling Non-linearity** | Requires feature engineering or polynomial features| Can handle non-linear relationships directly         |
| **Data Requirements**  | Requires feature scaling, less tolerant of outliers    | Less sensitive to feature scaling, more robust to outliers|
| **Overfitting**    | Less prone to overfitting (with regularization)     | Prone to overfitting (requires pruning or regularization) |
| **Performance on Adult Income Dataset (Example)** | May achieve moderate performance (e.g., Accuracy ~ 80-85%) | Potentially higher performance with tuning (Accuracy ~ 85-90%) |

**General Guidelines for choosing between them:**

*   **Linearity:** If the relationship between features and the target is approximately linear, Logistic Regression can be a good choice.
*   **Interpretability:** If interpretability is critical, both can work.  Logistic Regression gives coefficients, while Decision Trees offer a visual structure.
*   **Data Complexity:** For complex, non-linear relationships, Decision Trees are often better. However, be mindful of overfitting.
*   **Data Preparation:** Consider the need for feature scaling and handling of outliers.

### 6. Interpretability

*   **Logistic Regression:** Interpret the coefficients as the change in the log-odds of the outcome for a one-unit change in the feature.  Exponentiating the coefficient gives the odds ratio.  For example, if the coefficient for "age" is 0.02, then a one-year increase in age increases the odds of earning >$50k by `e^0.02` (approximately 1.02 or 2%).
*   **Decision Trees:**  Interpret the tree structure. The most important features are those used at the top of the tree.  The path through the tree to a leaf node explains the logic behind the prediction. For example, a rule might be: "If education level is 'Bachelors' and occupation is 'Professional', then predict income > $50k."  Feature importance can also be calculated in Decision Trees, highlighting which features contributed the most to the splits.

### 7. Practice Questions/Exercises

1.  **Question:** What is the difference between precision and recall? When would you prioritize one over the other?
    *   **Answer:** Precision measures the accuracy of positive predictions (out of all predicted positives, how many were truly positive). Recall measures the completeness of positive predictions (out of all actual positives, how many were predicted positive). You prioritize precision when false positives are costly, and recall when false negatives are costly.
2.  **Question:** Explain how the F1-score balances precision and recall.
    *   **Answer:** The F1-score is the harmonic mean of precision and recall. It penalizes models that have a large difference between precision and recall.  A high F1-score indicates that the model has both good precision and good recall.
3.  **Question:** How can you prevent overfitting in Decision Trees?
    *   **Answer:**  By limiting the depth of the tree (`max_depth`), setting a minimum number of samples required to split a node (`min_samples_split`), and setting a minimum number of samples required to be at a leaf node (`min_samples_leaf`).  These techniques are called pruning or regularization.
4.  **Question:** Why is feature scaling important for Logistic Regression?
    *   **Answer:** Logistic Regression relies on gradient descent to find the optimal coefficients. If features have vastly different scales, the gradient descent algorithm can take much longer to converge and may be unstable. Feature scaling ensures that all features contribute equally to the optimization process.
5.  **Exercise:** Load the Adult Income dataset. Split it into training and testing sets. Train both a Logistic Regression model and a Decision Tree model. Calculate the accuracy, precision, recall, and F1-score for both models on the test set. Which model performs better based on these metrics?
    *   **Answer:**  The answer will depend on the specific dataset loading and preprocessing.  Generally, a well-tuned Decision Tree will often outperform a Logistic Regression model on the Adult Income dataset due to the complex, potentially non-linear relationships in the data.  However, the un-tuned Decision Tree may overfit.  The key is to tune both models properly and compare them using the chosen metrics.  Also, the interpretability must be kept in mind, depending on which factors are more important to the user.

### 8. Important Points to Remember

*   **Data Preprocessing:**  Clean and preprocess the data (handle missing values, encode categorical features, scale numerical features).
*   **Train-Test Split:**  Always split the data into training and testing sets to evaluate model performance on unseen data.
*   **Model Selection:**  Choose the appropriate model based on the characteristics of the data and the specific problem. Consider the linearity, complexity, and interpretability requirements.
*   **Hyperparameter Tuning:** Tune the hyperparameters of the models (e.g., regularization strength in Logistic Regression, tree depth in Decision Trees) to optimize performance. Use techniques like cross-validation.
*   **Metric Selection:** Choose the evaluation metrics that are most relevant to the problem. Accuracy can be misleading with imbalanced datasets. Consider precision, recall, and F1-score.
*   **Interpretability:**  Understand how the models make predictions and be able to explain the results. This is crucial for building trust and confidence in the model.

By understanding these concepts and applying them to the Adult Income dataset, you can effectively implement, evaluate, and compare Logistic Regression and Decision Trees for classification tasks. Remember to prioritize not only performance metrics but also interpretability for creating reliable and trustworthy machine learning models.
