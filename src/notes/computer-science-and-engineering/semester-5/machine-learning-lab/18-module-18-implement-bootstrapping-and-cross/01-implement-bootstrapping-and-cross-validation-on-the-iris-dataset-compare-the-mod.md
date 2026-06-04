---
title: "Implement bootstrapping and cross-validation on the Iris dataset. Compare the model performance metrics (e.g., accuracy, F1-score) obtained using these resampling methods. Discuss the advantages and disadvantages of each method."
subject: "MACHINE LEARNING LAB"
module: "Module 18: Implement bootstrapping and cross"
branch: "Computer Science and Engineering"
semester: 5
topicId: "684162770fc9aa1fdbc8b9a4"
status: "completed"
scrapedAt: "2026-05-20T16:48:08.398Z"
---
# MACHINE LEARNING LAB - Module 18: Bootstrapping and Cross-Validation on the Iris Dataset

## Topic: Implement Bootstrapping and Cross-Validation on the Iris Dataset

### Learning Outcomes:

*   Understand the concepts of bootstrapping and cross-validation.
*   Implement bootstrapping and cross-validation techniques on the Iris dataset.
*   Evaluate model performance using metrics like accuracy and F1-score.
*   Compare the results obtained from bootstrapping and cross-validation.
*   Discuss the advantages and disadvantages of each resampling method.

### 1. Introduction: The Need for Resampling Techniques

*   **Problem:** Evaluating a machine learning model's performance on a single training/testing split can be unreliable. The test set might be particularly easy or difficult, leading to an overly optimistic or pessimistic view of the model's true generalization ability.
*   **Solution:** Resampling techniques like bootstrapping and cross-validation address this by creating multiple training/testing splits and averaging the results. They provide more robust estimates of model performance.

### 2. Key Concepts and Definitions

*   **Resampling:** A statistical technique where you repeatedly draw samples from the original dataset to create multiple simulated datasets.
*   **Training Set:** The subset of the dataset used to train the machine learning model.
*   **Testing Set:** The subset of the dataset used to evaluate the performance of the trained model on unseen data.
*   **Generalization:** The ability of a model to perform well on unseen data.
*   **Bias:**  The difference between the expected prediction of our model and the true value. High bias implies underfitting.
*   **Variance:**  The variability in the model's predictions for different training datasets. High variance implies overfitting.
*   **Model Evaluation Metrics:** Quantitative measures used to assess the performance of a machine learning model. Examples include:
    *   **Accuracy:** The proportion of correctly classified instances. (TP + TN) / (TP + TN + FP + FN)
    *   **Precision:** The proportion of true positives among all predicted positives. TP / (TP + FP)
    *   **Recall (Sensitivity):** The proportion of true positives that were correctly identified. TP / (TP + FN)
    *   **F1-Score:** The harmonic mean of precision and recall, providing a balanced measure of performance. 2 * (Precision * Recall) / (Precision + Recall)
    *   **TP (True Positive):**  The model correctly predicted the positive class.
    *   **TN (True Negative):**  The model correctly predicted the negative class.
    *   **FP (False Positive):** The model incorrectly predicted the positive class (Type I error).
    *   **FN (False Negative):** The model incorrectly predicted the negative class (Type II error).

### 3. Bootstrapping

*   **Definition:** A resampling technique where you repeatedly sample *with replacement* from the original dataset to create new "bootstrap" datasets.  The bootstrap samples are the same size as the original dataset.
*   **Process:**
    1.  Draw *N* samples with replacement from the original dataset (of size *N*), forming a bootstrap dataset.
    2.  Train a model on the bootstrap dataset.
    3.  Evaluate the model on the original dataset (or a held-out test set from the original data).
    4.  Repeat steps 1-3 many times (e.g., 1000 times).
    5.  Calculate the average of the performance metrics across all iterations to obtain an estimate of the model's generalization ability.
*   **Advantages:**
    *   Simple to implement.
    *   Provides a good estimate of model performance, especially when the original dataset is small.
    *   Can be used to estimate confidence intervals for model parameters.
*   **Disadvantages:**
    *   Some data points may appear multiple times in a bootstrap sample, while others may not appear at all.
    *   Can be computationally expensive, especially for large datasets and complex models.
    *   Might underestimate the variance if the original dataset is not representative of the population.

**Example (Conceptual):**

Original dataset: `[1, 2, 3, 4, 5]`

Bootstrap sample 1: `[2, 2, 4, 1, 5]`
Bootstrap sample 2: `[3, 5, 1, 1, 4]`
Bootstrap sample 3: `[1, 3, 3, 2, 5]`

Each bootstrap sample is drawn with replacement, allowing for duplicates and omissions from the original dataset.

**Python Code Example (Conceptual - Iris Dataset is covered later):**

```python
import numpy as np
from sklearn.tree import DecisionTreeClassifier
from sklearn.metrics import accuracy_score

def bootstrapping(data, labels, num_iterations=1000):
  """
  Performs bootstrapping to estimate model performance.

  Args:
    data: The input data.
    labels: The corresponding labels.
    num_iterations: The number of bootstrap iterations.

  Returns:
    A list of accuracy scores obtained from each iteration.
  """
  accuracy_scores = []
  n_samples = len(data)
  for _ in range(num_iterations):
    # Create bootstrap sample indices
    indices = np.random.choice(n_samples, size=n_samples, replace=True)
    bootstrap_data = data[indices]
    bootstrap_labels = labels[indices]

    # Train model
    model = DecisionTreeClassifier()
    model.fit(bootstrap_data, bootstrap_labels)

    # Evaluate on original data (or held-out set)
    predictions = model.predict(data)
    accuracy = accuracy_score(labels, predictions)
    accuracy_scores.append(accuracy)

  return accuracy_scores

# Example usage (replace with your Iris dataset)
# Assuming you have data and labels loaded as numpy arrays
# accuracy_scores = bootstrapping(data, labels)
# average_accuracy = np.mean(accuracy_scores)
# print(f"Average accuracy from bootstrapping: {average_accuracy}")
```

### 4. Cross-Validation

*   **Definition:** A resampling technique where the original dataset is partitioned into *k* subsets (or folds). The model is trained on *k-1* folds and tested on the remaining fold. This process is repeated *k* times, with each fold serving as the test set once.
*   **Types:**
    *   **k-Fold Cross-Validation:** The dataset is divided into *k* folds of approximately equal size.
    *   **Stratified k-Fold Cross-Validation:** Similar to k-fold, but ensures that each fold has the same proportion of classes as the original dataset.  This is crucial for imbalanced datasets.
    *   **Leave-One-Out Cross-Validation (LOOCV):** Each data point serves as a separate test set. This is equivalent to k-fold cross-validation with *k* equal to the number of data points.
*   **Process (k-Fold):**
    1.  Divide the dataset into *k* folds.
    2.  For *i* = 1 to *k*:
        *   Use fold *i* as the test set.
        *   Use the remaining *k-1* folds as the training set.
        *   Train a model on the training set.
        *   Evaluate the model on the test set and record the performance metrics.
    3.  Calculate the average of the performance metrics across all *k* iterations to obtain an estimate of the model's generalization ability.
*   **Advantages:**
    *   Uses all data for both training and testing.
    *   Provides a more robust estimate of model performance compared to a single train/test split.
    *   Helps to identify overfitting.
    *   Stratified k-fold is excellent for imbalanced datasets.
*   **Disadvantages:**
    *   Can be computationally expensive, especially for large datasets and complex models.  LOOCV is particularly expensive.
    *   The choice of *k* can affect the results. A small *k* can lead to higher bias, while a large *k* can lead to higher variance.  Generally, k=5 or k=10 are good starting points.

**Example (Conceptual):**

Dataset: `[A, B, C, D, E]`
k = 5 (5-Fold Cross-Validation)

Fold 1: Test: `[A]`, Train: `[B, C, D, E]`
Fold 2: Test: `[B]`, Train: `[A, C, D, E]`
Fold 3: Test: `[C]`, Train: `[A, B, D, E]`
Fold 4: Test: `[D]`, Train: `[A, B, C, E]`
Fold 5: Test: `[E]`, Train: `[A, B, C, D]`

**Python Code Example (Conceptual - Iris Dataset is covered later):**

```python
from sklearn.model_selection import cross_val_score, StratifiedKFold
from sklearn.tree import DecisionTreeClassifier
import numpy as np

def cross_validation(data, labels, k=10, stratified=False):
  """
  Performs k-fold cross-validation to estimate model performance.

  Args:
    data: The input data.
    labels: The corresponding labels.
    k: The number of folds.
    stratified: Whether to use stratified k-fold cross-validation.

  Returns:
    A list of accuracy scores obtained from each fold.
  """

  model = DecisionTreeClassifier()  # Or any other model

  if stratified:
      cv = StratifiedKFold(n_splits=k, shuffle=True, random_state=42)  # Added shuffle and random_state
  else:
      cv = k  # Use default k-fold

  scores = cross_val_score(model, data, labels, cv=cv, scoring='accuracy')
  return scores

# Example usage (replace with your Iris dataset)
# Assuming you have data and labels loaded as numpy arrays
# scores = cross_validation(data, labels, k=10, stratified=True)
# average_accuracy = np.mean(scores)
# print(f"Average accuracy from cross-validation: {average_accuracy}")
```

### 5. Applying Bootstrapping and Cross-Validation to the Iris Dataset

**Steps:**

1.  **Load the Iris dataset:**  Use `sklearn.datasets.load_iris()`.
2.  **Choose a Model:** Select a suitable classification model (e.g., Decision Tree, Logistic Regression, Support Vector Machine).
3.  **Implement Bootstrapping:**
    *   Create a function to perform bootstrapping as shown in the Python code example above.
    *   Run the function with the Iris dataset and a chosen number of iterations (e.g., 1000).
    *   Calculate the average accuracy and F1-score across all iterations.
4.  **Implement Cross-Validation:**
    *   Use `sklearn.model_selection.cross_val_score` or `sklearn.model_selection.StratifiedKFold` for stratified cross validation.
    *   Run cross-validation with the Iris dataset and a chosen number of folds (e.g., k=10).
    *   Calculate the average accuracy and F1-score across all folds.  Specify `scoring='f1_macro'` for F1-score in `cross_val_score` for multi-class problems like Iris.
5.  **Compare Results:**  Compare the average accuracy and F1-score obtained from bootstrapping and cross-validation.
6.  **Discuss Advantages and Disadvantages:** Analyze the results in light of the advantages and disadvantages of each method (discussed in sections 3 & 4).

**Python Code Example (Iris Dataset):**

```python
from sklearn.datasets import load_iris
from sklearn.model_selection import cross_val_score, StratifiedKFold
from sklearn.tree import DecisionTreeClassifier
from sklearn.metrics import accuracy_score, f1_score
import numpy as np

# 1. Load the Iris dataset
iris = load_iris()
data = iris.data
labels = iris.target

# 2. Choose a model (Decision Tree)
model = DecisionTreeClassifier(random_state=42)  # Add random_state for reproducibility

# 3. Implement Bootstrapping
def bootstrapping(data, labels, num_iterations=1000):
  """Performs bootstrapping and returns accuracy and F1-score."""
  accuracy_scores = []
  f1_scores = []
  n_samples = len(data)
  for _ in range(num_iterations):
    indices = np.random.choice(n_samples, size=n_samples, replace=True)
    bootstrap_data = data[indices]
    bootstrap_labels = labels[indices]

    model = DecisionTreeClassifier(random_state=42) # Instantiate model inside loop for independence
    model.fit(bootstrap_data, bootstrap_labels)

    predictions = model.predict(data)
    accuracy = accuracy_score(labels, predictions)
    f1 = f1_score(labels, predictions, average='macro')  # Use 'macro' for multi-class
    accuracy_scores.append(accuracy)
    f1_scores.append(f1)

  return accuracy_scores, f1_scores

bootstrap_accuracy_scores, bootstrap_f1_scores = bootstrapping(data, labels)
average_bootstrap_accuracy = np.mean(bootstrap_accuracy_scores)
average_bootstrap_f1 = np.mean(bootstrap_f1_scores)
print(f"Average Accuracy (Bootstrapping): {average_bootstrap_accuracy}")
print(f"Average F1-score (Bootstrapping): {average_bootstrap_f1}")


# 4. Implement Cross-Validation (Stratified)
cv = StratifiedKFold(n_splits=10, shuffle=True, random_state=42)  # Recommended for Iris data

accuracy_scores_cv = cross_val_score(model, data, labels, cv=cv, scoring='accuracy')
f1_scores_cv = cross_val_score(model, data, labels, cv=cv, scoring='f1_macro')

average_cv_accuracy = np.mean(accuracy_scores_cv)
average_cv_f1 = np.mean(f1_scores_cv)

print(f"Average Accuracy (Cross-Validation): {average_cv_accuracy}")
print(f"Average F1-score (Cross-Validation): {average_cv_f1}")

# 5. Compare Results (Example Discussion)
print("\nComparison:")
print(f"Accuracy Difference: {average_bootstrap_accuracy - average_cv_accuracy}")
print(f"F1-score Difference: {average_bootstrap_f1 - average_cv_f1}")

# 6. Discuss Advantages and Disadvantages (Example Discussion)
print("\nDiscussion:")
print("Bootstrapping might show slightly optimistic results because it evaluates on the same data used for training.")
print("Cross-validation provides a more robust estimate of the model's generalization performance.")
print("Stratified K-Fold is important for the Iris dataset because it ensures balanced representation of each class in each fold.")
```

**Explanation of changes/improvements:**

*   **`random_state`:**  Added `random_state=42` to `DecisionTreeClassifier` and `StratifiedKFold` for reproducibility. This ensures that the results are consistent each time you run the code.
*   **Model Instantiation in Bootstrap Loop:** The `DecisionTreeClassifier` is now instantiated inside the `for` loop in the `bootstrapping` function. This ensures that a *new*, untrained model is used for each bootstrap sample.  This is *crucial* for correct bootstrapping.  Without it, the first model trained contaminates all subsequent evaluations.
*   **F1-score calculation:** Changed the `f1_score` calculation to use `average='macro'` in both bootstrapping and cross-validation.  `'macro'` calculates the F1-score for each class and then averages them.  This is the correct approach for a multi-class classification problem like the Iris dataset.  Without it, the default 'binary' setting would only be appropriate for a two-class problem.
*   **Stratified K-Fold:**  Explicitly using `StratifiedKFold` in the cross-validation example.  This is highly recommended for the Iris dataset because it ensures that each fold has approximately the same class distribution as the original dataset.  This is especially important for imbalanced datasets, but even with a relatively balanced dataset like Iris, it's good practice.  `shuffle=True` is also added to the StratifiedKFold to shuffle the data before splitting.
*   **Clearer Comparison and Discussion:** Added a section for comparing the results and providing a brief discussion of the advantages and disadvantages of each method in the context of the Iris dataset.  This addresses the learning outcomes directly.
*   **Comprehensive Comments:** Added more comments to explain each step of the code.
*   **Function Docstrings:** Added docstrings to the functions to describe their purpose, arguments, and return values.
*   **Error Handling (Implicit):** Using scikit-learn functions generally provides robust error handling.  For example, passing incorrect data types to `cross_val_score` will raise a `ValueError` with a descriptive message.
*   **Code Clarity:** Improved code formatting and readability.
*   **Emphasis on Correct F1-Score Calculation:** The use of `average='macro'` in the `f1_score` function is *essential* for multi-class problems, so it is strongly emphasized.
*   **Emphasis on Model Independence in Bootstrapping:** The importance of creating a new model instance in each bootstrap iteration is also strongly emphasized.

### 6. Advantages and Disadvantages Summary

| Feature          | Bootstrapping                                   | Cross-Validation                                    |
|-------------------|---------------------------------------------------|------------------------------------------------------|
| Data Usage       | Samples with replacement from the original data.   | Partitions data into k folds.                      |
| Computational Cost| Can be high depending on the number of iterations. | Can be high depending on the number of folds and data size.|
| Bias             | Can have higher bias if the original data is unrepresentative. | Can have lower bias, especially with larger k.         |
| Variance         | Can underestimate variance.                       | Can have lower variance.                             |
| Implementation   | Relatively simple.                               | More complex (especially stratified variants).       |
| Best Use Case    | Small datasets, confidence interval estimation.      | Robust performance estimation, model comparison.       |
| Imbalanced Data  | Not directly addressed; requires careful sampling. | Stratified variants handle imbalanced data well.    |

### 7. Important Points to Remember

*   **Resampling techniques provide more robust estimates of model performance than a single train/test split.**
*   **Bootstrapping samples with replacement, while cross-validation partitions the data.**
*   **Choose the appropriate evaluation metrics (e.g., accuracy, F1-score) based on the specific problem and dataset.**
*   **Stratified k-fold cross-validation is important for imbalanced datasets.**
*   **Consider the computational cost when choosing between bootstrapping and cross-validation.**
*   **The choice of *k* in k-fold cross-validation can affect the results.**
*   **Bootstrapping requires creating a *new* model instance in each iteration for accurate results.**
*   **For multi-class classification problems, use `average='macro'` when calculating F1-score.**

### 8. Practice Questions/Exercises

1.  **What is the main difference between bootstrapping and cross-validation?**

    *   **Answer:** Bootstrapping samples *with replacement* from the original dataset, creating multiple datasets of the same size as the original. Cross-validation *partitions* the dataset into *k* folds, using each fold as a test set in turn.

2.  **Why is stratified k-fold cross-validation important for imbalanced datasets?**

    *   **Answer:** Stratified k-fold ensures that each fold has approximately the same proportion of classes as the original dataset, preventing a situation where a fold might contain only a single class, which would lead to biased performance estimates.

3.  **What are the advantages and disadvantages of using LOOCV?**

    *   **Answer:**
        *   **Advantages:** Uses nearly all the data for training in each iteration, can provide an unbiased estimate of model performance.
        *   **Disadvantages:** Very computationally expensive, can have high variance, especially if there are outliers in the dataset.

4.  **How does the choice of *k* in k-fold cross-validation affect the bias and variance of the performance estimate?**

    *   **Answer:** A small *k* (e.g., k=2 or 3) can lead to higher bias (because the training sets are smaller) and lower variance. A large *k* (e.g., k close to *N*, like in LOOCV) can lead to lower bias but higher variance. A value of k=5 or k=10 is generally a good compromise.

5.  **Implement bootstrapping and cross-validation on a different dataset (e.g., the digits dataset) and compare the results.** (Extend the provided code to work with the digits dataset from scikit-learn).

6. **Why is it important to instantiate the model inside the bootstrapping loop? What happens if you instantiate the model *outside* the loop instead?**

   * **Answer:**  If you instantiate the model *outside* the loop, the model is trained *incrementally* on each bootstrap sample. The model becomes influenced by the training done in previous loop iterations. The result would not be reflective of true bootstrapping methodology.

7. **Explain the difference between `f1_score` with `average='binary'`, `average='macro'`, and `average='weighted'`? When would you choose each setting?**

    *   **Answer:**
        *   `average='binary'`:  Used for binary classification problems (two classes). It calculates the F1-score for the positive class.
        *   `average='macro'`: Calculates the F1-score for each class and then averages them, giving equal weight to each class. Use this when you want to treat all classes equally, regardless of their size.  Appropriate for multi-class and multi-label problems.
        *   `average='weighted'`: Calculates the F1-score for each class and then averages them, weighting each class by its support (number of true instances for each class). Use this when you want to account for class imbalance.  Appropriate for multi-class and multi-label problems.

This comprehensive set of notes covers all the learning outcomes, key concepts, and provides a practical implementation of bootstrapping and cross-validation on the Iris dataset. The inclusion of practice questions and important points to remember helps reinforce the learning process. Remember to experiment with the code and different datasets to solidify your understanding.
