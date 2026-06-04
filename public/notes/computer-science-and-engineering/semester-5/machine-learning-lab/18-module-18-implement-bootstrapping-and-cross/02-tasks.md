---
title: "Tasks:"
subject: "MACHINE LEARNING LAB"
module: "Module 18: Implement bootstrapping and cross"
branch: "Computer Science and Engineering"
semester: 5
topicId: "684162770fc9aa1fdbc8b9a5"
status: "completed"
scrapedAt: "2026-05-20T16:48:09.152Z"
---
# MACHINE LEARNING LAB - Module 18: Bootstrapping and Cross-Validation

**Subject:** MACHINE LEARNING LAB
**Module:** Module 18: Implement Bootstrapping and Cross-Validation
**Topic:** Bootstrapping and Cross-Validation
**Description:** Techniques for evaluating and improving the performance of machine learning models.

**Learning Outcomes:**

*   Understand the concept of bootstrapping and its applications in statistical inference and machine learning.
*   Implement bootstrapping for estimating confidence intervals and bias.
*   Understand different cross-validation techniques (k-fold, stratified k-fold, leave-one-out cross-validation).
*   Implement different cross-validation techniques using Python libraries (e.g., scikit-learn).
*   Compare and contrast bootstrapping and cross-validation.
*   Apply bootstrapping and cross-validation to evaluate the performance of machine learning models.
*   Understand the importance of choosing appropriate evaluation metrics for different problems.

## 1. Introduction to Bootstrapping

### 1.1. Key Concepts and Definitions

*   **Bootstrapping:** A resampling technique used to estimate the sampling distribution of a statistic (e.g., mean, median, standard deviation) by repeatedly sampling with replacement from the original dataset.  It's used to assess the uncertainty associated with a model or statistic.

*   **Resampling with Replacement:**  Randomly drawing data points from the original dataset.  Crucially, after a data point is selected, it is "replaced" back into the dataset, allowing it to be selected again in subsequent draws. This means a single data point can appear multiple times in a resampled dataset.

*   **Bootstrap Sample:** A dataset created by resampling with replacement from the original dataset.  A bootstrap sample has the same size as the original dataset.

*   **Bootstrap Statistic:**  The statistic (e.g., mean, median) calculated on a bootstrap sample.

*   **Sampling Distribution (of a Statistic):**  The distribution of a statistic calculated from many different samples of the population. Bootstrapping estimates this distribution by resampling from a single sample.

*   **Confidence Interval:**  A range of values within which the true population parameter is likely to lie, with a certain level of confidence (e.g., 95% confidence interval).

*   **Bias:**  The systematic difference between the expected value of an estimator and the true value of the parameter being estimated.  Bootstrapping can be used to estimate and correct for bias.

### 1.2. Applications of Bootstrapping

*   **Estimating Confidence Intervals:** Constructing confidence intervals for population parameters without relying on strong assumptions about the underlying distribution.

*   **Estimating Bias:**  Assessing the bias of an estimator.

*   **Estimating Standard Error:** Approximating the standard error of an estimator.

*   **Model Evaluation:** Evaluating the performance of machine learning models, especially when the dataset is small.

### 1.3. Implementing Bootstrapping

**Steps:**

1.  **Create Bootstrap Samples:** Generate `B` bootstrap samples by resampling with replacement from the original dataset.  Typically, `B` is a large number (e.g., 1000 or more).

2.  **Calculate Bootstrap Statistics:** For each bootstrap sample, calculate the statistic of interest (e.g., mean, median, regression coefficient).

3.  **Estimate the Sampling Distribution:** The collection of bootstrap statistics approximates the sampling distribution of the statistic.

4.  **Estimate Confidence Interval:**  Use the quantiles of the bootstrap statistics to construct a confidence interval.  For example, the 2.5th and 97.5th percentiles of the bootstrap statistics form a 95% confidence interval.

5.  **Estimate Bias:** Calculate the bias as the difference between the average of the bootstrap statistics and the statistic calculated on the original dataset.

### 1.4. Example (Python)

```python
import numpy as np
import pandas as pd

def bootstrap(data, statistic, B=1000, alpha=0.05):
  """
  Performs bootstrapping to estimate confidence intervals and bias.

  Args:
      data: The original dataset (e.g., a NumPy array or Pandas Series).
      statistic: A function that calculates the statistic of interest (e.g., np.mean, np.median).
      B: The number of bootstrap samples to generate.
      alpha: The significance level (e.g., 0.05 for a 95% confidence interval).

  Returns:
      A dictionary containing the confidence interval and bias estimate.
  """
  n = len(data)
  bootstrap_statistics = []
  for _ in range(B):
    # Resample with replacement
    indices = np.random.choice(n, size=n, replace=True)
    bootstrap_sample = data[indices]
    bootstrap_statistics.append(statistic(bootstrap_sample))

  bootstrap_statistics = np.array(bootstrap_statistics)

  # Calculate confidence interval
  lower_quantile = np.quantile(bootstrap_statistics, alpha / 2)
  upper_quantile = np.quantile(bootstrap_statistics, 1 - alpha / 2)
  confidence_interval = (lower_quantile, upper_quantile)

  # Calculate bias
  original_statistic = statistic(data)
  bias = np.mean(bootstrap_statistics) - original_statistic

  return {"confidence_interval": confidence_interval, "bias": bias, "bootstrap_statistics": bootstrap_statistics}


# Example usage
data = np.array([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])

results = bootstrap(data, np.mean, B=1000)

print("Confidence Interval:", results["confidence_interval"])
print("Bias:", results["bias"])

# Example with pandas DataFrame
df = pd.DataFrame({'values': [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]})
results_df = bootstrap(df['values'].values, np.mean, B=1000)  # Convert Pandas Series to NumPy array
print("Pandas Example - Confidence Interval:", results_df["confidence_interval"])
print("Pandas Example - Bias:", results_df["bias"])
```

### 1.5. Important Points to Remember about Bootstrapping

*   Bootstrapping works best when the original dataset is a reasonable representation of the population.
*   The number of bootstrap samples (`B`) should be sufficiently large to obtain stable estimates.
*   Bootstrapping can be computationally expensive, especially for large datasets and complex statistics.
*   Bootstrapping is not a substitute for collecting more data if the original sample is too small to be representative.
*   The bootstrap confidence intervals are only accurate if the statistic of interest is reasonably well-behaved.

## 2. Cross-Validation

### 2.1. Key Concepts and Definitions

*   **Cross-Validation:**  A technique for evaluating the performance of a machine learning model by partitioning the dataset into multiple subsets (folds), training the model on some of the folds, and testing it on the remaining fold(s). This process is repeated multiple times, using different folds for training and testing, and the results are averaged to obtain a more reliable estimate of the model's performance.

*   **Training Set:** The portion of the dataset used to train the machine learning model.

*   **Testing Set (Validation Set):** The portion of the dataset used to evaluate the performance of the trained model.

*   **Fold:** A subset of the data used in cross-validation.

*   **K-Fold Cross-Validation:**  The dataset is divided into `k` folds. The model is trained on `k-1` folds and tested on the remaining fold. This process is repeated `k` times, each time using a different fold as the testing set.

*   **Stratified K-Fold Cross-Validation:**  Similar to k-fold cross-validation, but the folds are created such that the proportion of each class is roughly the same in each fold. This is particularly useful for imbalanced datasets.

*   **Leave-One-Out Cross-Validation (LOOCV):** A special case of k-fold cross-validation where `k` is equal to the number of data points in the dataset. The model is trained on all data points except one, and tested on the single held-out data point. This is repeated for each data point.

*   **Evaluation Metric:** A measure used to quantify the performance of the machine learning model (e.g., accuracy, precision, recall, F1-score, RMSE).

### 2.2. Types of Cross-Validation

*   **K-Fold Cross-Validation:** A common and widely applicable method.
    *   **Advantages:** Relatively simple to implement, provides a good estimate of model performance.
    *   **Disadvantages:** Can be computationally expensive for large datasets and complex models.

*   **Stratified K-Fold Cross-Validation:**  Important when dealing with imbalanced datasets.
    *   **Advantages:** Maintains class proportions in each fold, providing a more realistic estimate of performance.
    *   **Disadvantages:**  Same as k-fold cross-validation.

*   **Leave-One-Out Cross-Validation (LOOCV):**
    *   **Advantages:** Uses almost all data for training in each iteration, potentially reducing bias.
    *   **Disadvantages:** Can be computationally very expensive for large datasets. May have high variance, especially if there are outliers in the data.

### 2.3. Implementing Cross-Validation

**Steps (using scikit-learn):**

1.  **Import necessary libraries:** `sklearn.model_selection`, `sklearn.metrics`.

2.  **Choose a cross-validation technique:** `KFold`, `StratifiedKFold`, `LeaveOneOut`.

3.  **Create a cross-validation object:**  Instantiate the chosen cross-validation class with the desired number of folds or other parameters.

4.  **Iterate through the folds:** Use the `split()` method of the cross-validation object to generate training and testing indices for each fold.

5.  **Train and evaluate the model:** For each fold, train the model on the training data and evaluate it on the testing data using an appropriate evaluation metric.

6.  **Average the results:** Calculate the average of the evaluation metric across all folds to obtain an overall estimate of the model's performance.

### 2.4. Example (Python)

```python
from sklearn.model_selection import KFold, StratifiedKFold, LeaveOneOut, cross_val_score
from sklearn.linear_model import LogisticRegression
from sklearn.datasets import make_classification
from sklearn.metrics import accuracy_score, make_scorer
import numpy as np


# Create a synthetic dataset
X, y = make_classification(n_samples=100, n_features=20, n_informative=2, n_redundant=0, random_state=42)

# Model
model = LogisticRegression(solver='liblinear', random_state=42)  # Specify solver to avoid warning


# 1. K-Fold Cross-Validation
kf = KFold(n_splits=5, shuffle=True, random_state=42)  # Shuffle for better results
cv_scores_kf = cross_val_score(model, X, y, cv=kf, scoring='accuracy') # Using cross_val_score

print("K-Fold Cross-Validation Accuracy:", cv_scores_kf.mean())

# Alternative implementation - Manual loop
kf = KFold(n_splits=5, shuffle=True, random_state=42)
accuracies_kf = []
for train_index, test_index in kf.split(X):
    X_train, X_test = X[train_index], X[test_index]
    y_train, y_test = y[train_index], y[test_index]
    model.fit(X_train, y_train)
    y_pred = model.predict(X_test)
    accuracy = accuracy_score(y_test, y_pred)
    accuracies_kf.append(accuracy)
print("K-Fold Cross-Validation Accuracy (Manual):", np.mean(accuracies_kf))



# 2. Stratified K-Fold Cross-Validation (for classification problems)
skf = StratifiedKFold(n_splits=5, shuffle=True, random_state=42) # Shuffle for better results
cv_scores_skf = cross_val_score(model, X, y, cv=skf, scoring='accuracy') # Using cross_val_score

print("Stratified K-Fold Cross-Validation Accuracy:", cv_scores_skf.mean())

# Alternative implementation - Manual loop
skf = StratifiedKFold(n_splits=5, shuffle=True, random_state=42)
accuracies_skf = []
for train_index, test_index in skf.split(X,y):
    X_train, X_test = X[train_index], X[test_index]
    y_train, y_test = y[train_index], y[test_index]
    model.fit(X_train, y_train)
    y_pred = model.predict(X_test)
    accuracy = accuracy_score(y_test, y_pred)
    accuracies_skf.append(accuracy)
print("Stratified K-Fold Cross-Validation Accuracy (Manual):", np.mean(accuracies_skf))


# 3. Leave-One-Out Cross-Validation
loo = LeaveOneOut()
cv_scores_loo = cross_val_score(model, X, y, cv=loo, scoring='accuracy') # Using cross_val_score
print("Leave-One-Out Cross-Validation Accuracy:", cv_scores_loo.mean())
```

### 2.5. Choosing Appropriate Evaluation Metrics

The choice of evaluation metric depends on the type of problem and the specific goals.

*   **Classification:**
    *   **Accuracy:**  The proportion of correctly classified instances.  Suitable for balanced datasets.
    *   **Precision:**  The proportion of correctly predicted positive instances out of all instances predicted as positive.  Important when minimizing false positives is crucial.
    *   **Recall (Sensitivity):** The proportion of correctly predicted positive instances out of all actual positive instances.  Important when minimizing false negatives is crucial.
    *   **F1-score:**  The harmonic mean of precision and recall.  Provides a balance between precision and recall.
    *   **AUC-ROC:**  Area Under the Receiver Operating Characteristic curve.  A measure of the model's ability to discriminate between positive and negative classes.  Suitable for imbalanced datasets.

*   **Regression:**
    *   **Mean Squared Error (MSE):**  The average squared difference between the predicted and actual values.
    *   **Root Mean Squared Error (RMSE):**  The square root of the MSE.  Easier to interpret than MSE because it is in the same units as the target variable.
    *   **Mean Absolute Error (MAE):** The average absolute difference between the predicted and actual values. More robust to outliers than MSE.
    *   **R-squared (Coefficient of Determination):**  The proportion of variance in the target variable that is explained by the model.

### 2.6. Important Points to Remember about Cross-Validation

*   Cross-validation provides a more reliable estimate of model performance than a single train-test split.
*   Choose the appropriate cross-validation technique based on the characteristics of the dataset and the problem.
*   Use stratified k-fold cross-validation for imbalanced datasets.
*   Select the appropriate evaluation metric based on the type of problem and the specific goals.
*   Cross-validation can be computationally expensive, especially for large datasets and complex models.

## 3. Comparing and Contrasting Bootstrapping and Cross-Validation

| Feature           | Bootstrapping                                 | Cross-Validation                               |
|--------------------|-----------------------------------------------|------------------------------------------------|
| **Purpose**        | Estimate sampling distribution, confidence intervals, bias | Estimate model performance, tune hyperparameters |
| **Resampling**     | Samples with replacement from the original dataset | Partitions the original dataset into folds      |
| **Data Usage**      | Creates multiple datasets from the same data     | Uses all data points for both training and testing (across folds) |
| **Computational Cost**| Can be computationally expensive for large datasets and complex statistics | Can be computationally expensive for large datasets and complex models |
| **Bias Estimation**| Directly estimates bias of a statistic           | Provides an estimate of model bias via performance evaluation|
| **Variance Estimation** | Provides an estimate of variance of a statistic  | Provides an estimate of model variance across different folds|
| **Typical Use Cases**| Statistical inference, model uncertainty assessment| Model selection, hyperparameter tuning, performance evaluation |

**Key Differences:**

*   **Bootstrapping** focuses on estimating the *properties of a statistic* (e.g., mean, standard deviation) from a single dataset.  It creates *new* datasets by sampling *with replacement*.

*   **Cross-Validation** focuses on estimating the *performance of a model* on unseen data.  It *partitions* the original dataset into subsets without creating new datasets.

**When to Use Which:**

*   Use **bootstrapping** when you want to estimate the uncertainty (e.g., confidence intervals, bias) associated with a statistic calculated from your data.  For example, you might use bootstrapping to estimate the confidence interval for the mean of a sample.
*   Use **cross-validation** when you want to evaluate the performance of a machine learning model and select the best model or hyperparameters.  For example, you might use cross-validation to compare the performance of different machine learning algorithms or to tune the hyperparameters of a single algorithm.

## 4. Practice Questions/Exercises

1.  **Bootstrapping:** You have a dataset of customer ages: `ages = [25, 30, 35, 40, 45, 50, 55, 60]`.  Use bootstrapping to estimate the 95% confidence interval for the mean age. Use 1000 bootstrap samples.

    ```python
    import numpy as np

    ages = np.array([25, 30, 35, 40, 45, 50, 55, 60])

    def bootstrap_ci(data, statistic, B=1000, alpha=0.05):
        n = len(data)
        bootstrap_statistics = []
        for _ in range(B):
            indices = np.random.choice(n, size=n, replace=True)
            bootstrap_sample = data[indices]
            bootstrap_statistics.append(statistic(bootstrap_sample))

        bootstrap_statistics = np.array(bootstrap_statistics)
        lower_quantile = np.quantile(bootstrap_statistics, alpha / 2)
        upper_quantile = np.quantile(bootstrap_statistics, 1 - alpha / 2)
        return (lower_quantile, upper_quantile)

    ci = bootstrap_ci(ages, np.mean)
    print(f"95% Confidence Interval for Mean Age: {ci}")
    ```

2.  **Cross-Validation:**  You have a dataset of medical records and want to train a logistic regression model to predict whether a patient has diabetes (binary classification).  Use 5-fold stratified cross-validation to evaluate the model's performance.  Report the average accuracy.

    ```python
    from sklearn.model_selection import StratifiedKFold, cross_val_score
    from sklearn.linear_model import LogisticRegression
    from sklearn.datasets import load_diabetes # Using diabetes dataset (regression - convert to classification)
    from sklearn.metrics import accuracy_score
    import numpy as np
    from sklearn.model_selection import train_test_split

    # Load the diabetes dataset (originally regression, converting to binary classification)
    diabetes = load_diabetes()
    X = diabetes.data
    y_regression = diabetes.target

    # Convert the regression target to a binary classification problem (above/below median)
    median_target = np.median(y_regression)
    y = (y_regression > median_target).astype(int)

    # Model
    model = LogisticRegression(solver='liblinear') # Specify solver

    # Cross-validation
    skf = StratifiedKFold(n_splits=5, shuffle=True, random_state=42)
    cv_scores = cross_val_score(model, X, y, cv=skf, scoring='accuracy')

    print("Average Accuracy:", cv_scores.mean())
    ```

3.  **Comparison:**  Explain in your own words the key differences between bootstrapping and cross-validation. When would you choose bootstrapping, and when would you choose cross-validation?

    *Answer:* Bootstrapping resamples *with replacement* to estimate properties of a statistic, while cross-validation *partitions* the data to estimate model performance.  Use bootstrapping when you want to understand the uncertainty associated with a specific value calculated from your data (like the mean or median), and use cross-validation when you want to assess how well your machine learning model will generalize to unseen data and tune its parameters.

4. **Imbalanced Dataset:** Why is stratified k-fold cross-validation preferred over k-fold cross-validation when dealing with imbalanced datasets? Explain with an example.

   *Answer:* In imbalanced datasets, one class has significantly fewer instances than the other. Standard k-fold cross-validation might create folds where one or more folds have very few or no instances of the minority class. This can lead to a biased evaluation of the model's performance, as the model might appear to perform well overall but fail to correctly classify the minority class. Stratified k-fold ensures that each fold has approximately the same proportion of each class as the original dataset, providing a more robust and realistic evaluation of the model's ability to handle imbalanced data.

## 5. Conclusion

This module covered two essential techniques for evaluating and improving machine learning models: bootstrapping and cross-validation.  Understanding the principles behind these methods and how to implement them is crucial for building robust and reliable models. Remember to choose the appropriate technique and evaluation metrics based on the specific characteristics of your data and problem.
