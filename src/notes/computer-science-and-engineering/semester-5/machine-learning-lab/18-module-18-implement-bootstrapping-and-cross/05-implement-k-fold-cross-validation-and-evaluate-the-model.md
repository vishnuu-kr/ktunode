---
title: "Implement k-fold cross-validation and evaluate the model."
subject: "MACHINE LEARNING LAB"
module: "Module 18: Implement bootstrapping and cross"
branch: "Computer Science and Engineering"
semester: 5
topicId: "684162770fc9aa1fdbc8b9a8"
status: "completed"
scrapedAt: "2026-05-20T16:48:11.262Z"
---
## MACHINE LEARNING LAB - Module 18: Implement Bootstrapping and Cross-Validation - Topic: Implement k-fold cross-validation and evaluate the model.

**Learning Outcomes:**

*   Understand the concept of k-fold cross-validation and its advantages.
*   Implement k-fold cross-validation using Python libraries (e.g., scikit-learn).
*   Evaluate model performance using appropriate metrics during cross-validation.
*   Interpret and compare results obtained from different k-fold cross-validation settings.
*   Understand the importance of shuffling data before splitting for cross-validation.

### 1. Introduction to k-fold Cross-Validation

*   **Definition:** k-fold cross-validation is a resampling technique used to evaluate machine learning models on a limited data sample. It helps estimate how well the model will generalize to independent (unseen) data.

*   **Key Concept:**  Instead of using a single train/test split, the data is divided into *k* "folds" (subsets) of approximately equal size.  The model is trained *k* times, each time using *k-1* folds as the training set and the remaining fold as the validation (or test) set.

*   **Advantages of k-fold Cross-Validation:**
    *   **Reduces Bias:** Provides a more accurate estimate of model performance compared to a single train/test split, especially with smaller datasets.  A single split might be lucky or unlucky, leading to an over-optimistic or pessimistic view.
    *   **More Data Used for Training:** Each data point is used for validation exactly once and for training *k-1* times. This means more data is used for training overall compared to a single train/test split.
    *   **Provides Multiple Performance Estimates:**  Yields *k* different performance metrics (e.g., accuracy, precision, recall), allowing for a more robust assessment of model variability.
    *   **Helpful in Hyperparameter Tuning:** k-fold cross-validation is used in conjunction with grid search or random search to choose the optimal hyperparameters for the model.

### 2. How k-fold Cross-Validation Works (Step-by-Step)

1.  **Shuffle the Data:**  Randomize the order of the data points.  This is crucial to ensure that each fold has a representative distribution of the target variable, especially when the data is ordered by class or some other characteristic.

2.  **Divide the Data:** Split the data into *k* roughly equal-sized folds.  For example, if *k=5* and you have 100 data points, each fold will have 20 data points.

3.  **Iterate k Times:**
    *   For each iteration *i* (from 1 to *k*):
        *   Treat fold *i* as the validation/test set.
        *   Treat the remaining *k-1* folds as the training set.
        *   Train the model using the training set.
        *   Evaluate the model on the validation/test set and record the performance metric (e.g., accuracy, F1-score).

4.  **Calculate Aggregate Performance:** After *k* iterations, calculate the average (and standard deviation, if needed) of the performance metrics obtained in each iteration.  This provides the final estimate of the model's performance.

### 3. Implementing k-fold Cross-Validation with Scikit-learn

*   **Key Libraries:**
    *   `sklearn.model_selection.KFold`:  For creating the k-fold splits.
    *   `sklearn.model_selection.cross_val_score`:  For easily performing k-fold cross-validation and returning the scores.
    *   `sklearn.model_selection.cross_validate`:  More flexible than `cross_val_score`, allowing for multiple metrics to be evaluated and also returning train scores (optional) and fit/score times.
    *   `sklearn.metrics`: Provides various performance metrics for classification and regression.
    *   Any Machine Learning model from Scikit-learn (e.g., `LogisticRegression`, `DecisionTreeClassifier`, `LinearRegression`).

*   **Example Code (using `cross_val_score`):**

```python
from sklearn.model_selection import KFold, cross_val_score
from sklearn.linear_model import LogisticRegression
from sklearn.datasets import make_classification  # For creating a synthetic dataset
import numpy as np

# 1. Create a synthetic dataset
X, y = make_classification(n_samples=100, n_features=20, random_state=42)

# 2. Create a Logistic Regression model
model = LogisticRegression(solver='liblinear', random_state=42)

# 3. Define the k-fold cross-validation strategy
kf = KFold(n_splits=5, shuffle=True, random_state=42)  # k=5, shuffle data

# 4. Perform k-fold cross-validation using cross_val_score
scores = cross_val_score(model, X, y, cv=kf, scoring='accuracy')  # Evaluate using accuracy

# 5. Print the scores for each fold and the mean score
print("Cross-validation scores:", scores)
print("Mean cross-validation score:", np.mean(scores))

```

*   **Example Code (using `cross_validate` - more flexible):**

```python
from sklearn.model_selection import KFold, cross_validate
from sklearn.linear_model import LogisticRegression
from sklearn.datasets import make_classification
import numpy as np

# 1. Create a synthetic dataset
X, y = make_classification(n_samples=100, n_features=20, random_state=42)

# 2. Create a Logistic Regression model
model = LogisticRegression(solver='liblinear', random_state=42)

# 3. Define the k-fold cross-validation strategy
kf = KFold(n_splits=5, shuffle=True, random_state=42)  # k=5, shuffle data

# 4. Perform k-fold cross-validation using cross_validate
scoring = ['accuracy', 'precision', 'recall', 'f1'] # Specify multiple metrics
cv_results = cross_validate(model, X, y, cv=kf, scoring=scoring, return_train_score=False) # Get test scores

# 5. Print the results
print("Accuracy scores:", cv_results['test_accuracy'])
print("Mean Accuracy:", np.mean(cv_results['test_accuracy']))

print("Precision scores:", cv_results['test_precision'])
print("Mean Precision:", np.mean(cv_results['test_precision']))

print("Recall scores:", cv_results['test_recall'])
print("Mean Recall:", np.mean(cv_results['test_recall']))

print("F1 scores:", cv_results['test_f1'])
print("Mean F1:", np.mean(cv_results['test_f1']))
```

*   **Explanation:**
    *   `KFold(n_splits=k, shuffle=True, random_state=seed)`: Creates a k-fold splitter.  `n_splits` specifies the number of folds (*k*). `shuffle=True` is crucial for shuffling the data before splitting. `random_state` ensures reproducibility.
    *   `cross_val_score(model, X, y, cv=kf, scoring='accuracy')`:  Performs cross-validation. `model` is the model to be evaluated, `X` and `y` are the data, `cv` is the cross-validation splitter (e.g., the `KFold` object), and `scoring` specifies the metric to use for evaluation. Common scoring metrics include 'accuracy', 'precision', 'recall', 'f1', 'roc_auc', 'neg_mean_squared_error' (for regression).
    *  `cross_validate(model, X, y, cv=kf, scoring=scoring, return_train_score=False)`:  Similar to `cross_val_score` but returns a dictionary containing various evaluation scores (and optionally, train scores). It can evaluate multiple metrics at once. `return_train_score=False` prevents the train scores from being calculated, and it will speed up the process of training.

### 4. Evaluating Model Performance and Interpreting Results

*   **Performance Metrics:** Choose appropriate metrics based on the problem type (classification or regression) and the specific goals.
    *   **Classification:** Accuracy, Precision, Recall, F1-score, ROC AUC, Confusion Matrix.
    *   **Regression:** Mean Squared Error (MSE), Root Mean Squared Error (RMSE), Mean Absolute Error (MAE), R-squared.

*   **Interpreting Results:**
    *   **Mean Score:**  The average performance across all folds. Provides an overall estimate of the model's expected performance on unseen data.
    *   **Standard Deviation (or Variance):** Indicates the variability of the model's performance across different folds. A high standard deviation suggests that the model's performance is sensitive to the specific training data used, and the model might not generalize well.
    *   **Comparing Models:** Use cross-validation to compare the performance of different models. The model with the higher mean score (and lower variance) is generally preferred.

*   **Example Interpretation:**

    Suppose you run 5-fold cross-validation with a Logistic Regression model and get the following accuracy scores: `[0.85, 0.88, 0.82, 0.90, 0.86]`.
    *   **Mean Accuracy:** (0.85 + 0.88 + 0.82 + 0.90 + 0.86) / 5 = 0.862
    *   **Standard Deviation:** Approximately 0.027
    *   **Interpretation:**  The model is expected to have an accuracy of around 86.2% on unseen data.  The relatively low standard deviation (2.7%) suggests that the model's performance is fairly consistent across different subsets of the data.

### 5. Importance of Shuffling Data

*   **Why Shuffle?**
    *   **Prevent Bias:**  If the data is ordered in some way (e.g., by class label, date, or any other relevant feature), splitting it into folds without shuffling can lead to biased results. One or more folds might contain a disproportionate representation of certain classes or features.
    *   **Ensure Representative Folds:** Shuffling ensures that each fold has a more representative distribution of the target variable and features, leading to a more accurate estimate of model performance.

*   **Example:** Imagine a dataset where the first 50 samples are all of class 0, and the next 50 samples are all of class 1. If you use 5-fold cross-validation with `k=5` *without* shuffling, the first fold will contain only class 0 examples, and the last fold will contain only class 1 examples.  The model will learn very little during cross-validation and the evaluation will be meaningless. Shuffling solves this problem.

*   **How to Shuffle:**  Use the `shuffle=True` parameter in `KFold` or `StratifiedKFold` (see below).

### 6. Choosing the Value of *k*

*   **Common Values:**  *k=5* or *k=10* are commonly used in practice.

*   **Trade-offs:**
    *   **Larger *k* (e.g., *k=10*):**
        *   Lower bias:  Each fold is smaller, so the training sets are more similar to the complete dataset. This reduces the bias in the performance estimate.
        *   Higher variance: The models trained on each fold are more similar to each other.
        *   More computationally expensive:  Requires more training iterations.
    *   **Smaller *k* (e.g., *k=5*):**
        *   Higher bias: The training sets differ more from the full dataset.
        *   Lower variance: The models trained on each fold are less similar to each other.
        *   Less computationally expensive.
    *   ***k=n* (Leave-One-Out Cross-Validation - LOOCV):** A special case where *k* is equal to the number of data points. Each data point is used as the validation set once. LOOCV has the lowest bias but very high variance. It is also computationally expensive.

*   **General Guidelines:**
    *   For smaller datasets, use a larger *k* (e.g., *k=10*) to reduce bias.
    *   For larger datasets, use a smaller *k* (e.g., *k=5*) to reduce computational cost.

### 7. Stratified k-fold Cross-Validation

*   **Problem:**  In classification problems with imbalanced classes (where one class has significantly more samples than another), standard k-fold cross-validation might not create folds with a representative distribution of classes. Some folds might have very few or no samples from the minority class.

*   **Solution:** Stratified k-fold cross-validation ensures that each fold has approximately the same proportion of samples from each class as the original dataset.

*   **Implementation:** Use `sklearn.model_selection.StratifiedKFold` instead of `KFold`.

*   **Example:**

```python
from sklearn.model_selection import StratifiedKFold, cross_val_score
from sklearn.linear_model import LogisticRegression
from sklearn.datasets import make_classification
import numpy as np

# Create an imbalanced dataset
X, y = make_classification(n_samples=100, n_features=20, weights=[0.9, 0.1], random_state=42)  # 90% class 0, 10% class 1

# Create a Logistic Regression model
model = LogisticRegression(solver='liblinear', random_state=42)

# Define StratifiedKFold
skf = StratifiedKFold(n_splits=5, shuffle=True, random_state=42)

# Perform cross-validation
scores = cross_val_score(model, X, y, cv=skf, scoring='f1') # Use F1-score (more suitable for imbalanced datasets)

print("Cross-validation scores:", scores)
print("Mean cross-validation score:", np.mean(scores))
```

### 8. Practice Questions and Exercises

1.  **Question:** What is the purpose of k-fold cross-validation?
    *   **Answer:** To estimate how well a machine learning model will generalize to unseen data by training and evaluating the model multiple times on different subsets of the data.

2.  **Question:** Why is it important to shuffle the data before splitting it into folds for cross-validation?
    *   **Answer:** To prevent bias and ensure that each fold has a representative distribution of the target variable, especially when the data is ordered in some way.

3.  **Question:** What are the advantages of using cross_validate instead of cross_val_score?
    *   **Answer:** `cross_validate` allows you to calculate multiple scoring metrics and return the training scores if desired, unlike `cross_val_score` which only returns the test scores for one scoring metric.

4.  **Exercise:**
    *   Load the Iris dataset from scikit-learn (`sklearn.datasets.load_iris`).
    *   Train a Support Vector Machine (SVM) classifier (`sklearn.svm.SVC`) using 10-fold cross-validation.
    *   Evaluate the model using accuracy, precision, and recall.
    *   Print the mean and standard deviation of each metric.

```python
from sklearn.datasets import load_iris
from sklearn.model_selection import StratifiedKFold, cross_validate
from sklearn.svm import SVC
import numpy as np

# Load the Iris dataset
iris = load_iris()
X, y = iris.data, iris.target

# Create an SVM model
model = SVC(gamma='scale', random_state=42)

# Define StratifiedKFold
skf = StratifiedKFold(n_splits=10, shuffle=True, random_state=42)

# Perform cross-validation with multiple metrics
scoring = ['accuracy', 'precision_macro', 'recall_macro']  # Use macro averaging for multi-class
cv_results = cross_validate(model, X, y, cv=skf, scoring=scoring, return_train_score=False)

# Print the results
print("Mean Accuracy:", np.mean(cv_results['test_accuracy']))
print("Std Accuracy:", np.std(cv_results['test_accuracy']))

print("Mean Precision:", np.mean(cv_results['test_precision_macro']))
print("Std Precision:", np.std(cv_results['test_precision_macro']))

print("Mean Recall:", np.mean(cv_results['test_recall_macro']))
print("Std Recall:", np.std(cv_results['test_recall_macro']))
```

5. **Exercise:** Using the code for stratified K-fold cross validation, modify the code to display the scores of each fold for each metric (accuracy, precision, recall and F1 scores).

```python
from sklearn.model_selection import StratifiedKFold, cross_validate
from sklearn.linear_model import LogisticRegression
from sklearn.datasets import make_classification
import numpy as np

# 1. Create an imbalanced dataset
X, y = make_classification(n_samples=100, n_features=20, weights=[0.9, 0.1], random_state=42)  # 90% class 0, 10% class 1

# 2. Create a Logistic Regression model
model = LogisticRegression(solver='liblinear', random_state=42)

# 3. Define StratifiedKFold
skf = StratifiedKFold(n_splits=5, shuffle=True, random_state=42)

# 4. Perform cross-validation
scoring = ['accuracy', 'precision', 'recall', 'f1']
cv_results = cross_validate(model, X, y, cv=skf, scoring=scoring, return_train_score=False)

# 5. Print the results - DISPLAYING EACH FOLD'S SCORE
print("Accuracy scores per fold:", cv_results['test_accuracy'])
print("Mean Accuracy:", np.mean(cv_results['test_accuracy']))

print("Precision scores per fold:", cv_results['test_precision'])
print("Mean Precision:", np.mean(cv_results['test_precision']))

print("Recall scores per fold:", cv_results['test_recall'])
print("Mean Recall:", np.mean(cv_results['test_recall']))

print("F1 scores per fold:", cv_results['test_f1'])
print("Mean F1:", np.mean(cv_results['test_f1']))
```

### 9. Important Points to Remember

*   **Always shuffle the data before splitting it into folds (unless there's a specific reason not to).**
*   **Choose an appropriate value for *k* based on the size of your dataset.**
*   **Use stratified k-fold cross-validation for classification problems with imbalanced classes.**
*   **Select appropriate performance metrics based on the problem type and goals.**
*   **Interpret the mean and standard deviation of the performance metrics to understand the model's expected performance and variability.**
*   **Cross-validation is a powerful technique for model evaluation and comparison, but it should be used in conjunction with other techniques like hyperparameter tuning.**
*   **Be mindful of computational cost, especially with large datasets and large values of *k*.**
*   **When comparing models using cross-validation, ensure you're using the same folds for both models to make a fair comparison (e.g., by using the same `KFold` or `StratifiedKFold` object).**
