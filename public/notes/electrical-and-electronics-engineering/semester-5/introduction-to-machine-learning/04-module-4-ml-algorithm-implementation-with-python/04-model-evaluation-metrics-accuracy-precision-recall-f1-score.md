---
title: "Model evaluation metrics: accuracy, precision, recall, F1-score"
subject: "INTRODUCTION TO MACHINE LEARNING"
module: "Module 4: ML algorithm implementation with python "
branch: "Electrical and Electronics Engineering"
semester: 5
topicId: "68a200862b85456187f3643c"
status: "completed"
scrapedAt: "2026-05-23T16:22:30.620Z"
---
# Introduction to Machine Learning - Module 4: ML Algorithm Implementation with Python

## Topic: Model Evaluation Metrics: Accuracy, Precision, Recall, F1-Score

This module focuses on understanding how to evaluate the performance of machine learning models, particularly classification models. We will delve into key metrics that help us quantify a model's effectiveness in making correct predictions.

### Learning Outcomes

*   Understand the purpose of model evaluation metrics in machine learning.
*   Define and explain Accuracy, Precision, Recall, and F1-Score.
*   Calculate these metrics for a given confusion matrix.
*   Recognize scenarios where each metric is more appropriate.
*   Implement the calculation of these metrics using Python libraries.

### 1. The Importance of Model Evaluation

*   **Why evaluate?** A model's performance is crucial for its practical application. Simply training a model isn't enough; we need to know how well it generalizes to unseen data.
*   **Beyond visual inspection:** While visualizing decision boundaries or learning curves can be helpful, quantitative metrics provide objective measures of performance.
*   **Guiding model selection:** Evaluation metrics help us compare different models and choose the best one for a specific task.
*   **Identifying model weaknesses:** Metrics can reveal specific areas where a model struggles, guiding further improvements.

**Reference:**
*   *Hands-On Machine Learning with Scikit-Learn, Keras, and TensorFlow* (Géron) emphasizes that "the most important thing to remember is that evaluation is not a one-time task."

### 2. The Confusion Matrix: The Foundation of Classification Metrics

The confusion matrix is a table that summarizes the performance of a classification algorithm on a set of test data for which the true values are known. It breaks down the predictions into four categories:

*   **True Positives (TP):** The model correctly predicted the positive class.
    *   *Example:* A spam filter correctly identified an email as spam.
*   **True Negatives (TN):** The model correctly predicted the negative class.
    *   *Example:* A spam filter correctly identified a non-spam email as not spam.
*   **False Positives (FP):** The model incorrectly predicted the positive class (Type I error).
    *   *Example:* A spam filter incorrectly classified a legitimate email as spam.
*   **False Negatives (FN):** The model incorrectly predicted the negative class (Type II error).
    *   *Example:* A spam filter incorrectly classified a spam email as not spam.

**Visual Representation:**

|               | Predicted Positive | Predicted Negative |
| :------------ | :----------------- | :----------------- |
| **Actual Positive** | TP                 | FN                 |
| **Actual Negative** | FP                 | TN                 |

**Reference:**
*   *Introduction to Machine Learning with Python* (Müller & Guido) uses the confusion matrix as a fundamental tool to explain various classification metrics.

### 3. Accuracy

*   **Definition:** Accuracy is the most intuitive metric. It represents the proportion of correctly classified instances (both positive and negative) out of the total number of instances.

*   **Formula:**
    $$ \text{Accuracy} = \frac{\text{TP} + \text{TN}}{\text{TP} + \text{TN} + \text{FP} + \text{FN}} $$

*   **Interpretation:** A higher accuracy score indicates better overall performance. An accuracy of 1.0 means all instances were classified correctly.

*   **Example:**
    Consider a medical diagnosis model for a rare disease. Out of 100 patients:
    *   TP = 5 (correctly diagnosed with the disease)
    *   TN = 90 (correctly diagnosed as healthy)
    *   FP = 2 (healthy patients wrongly diagnosed with the disease)
    *   FN = 3 (patients with the disease wrongly diagnosed as healthy)

    $$ \text{Accuracy} = \frac{5 + 90}{5 + 90 + 2 + 3} = \frac{95}{100} = 0.95 $$

*   **When to use Accuracy:**
    *   When the classes are balanced (i.e., the number of instances in each class is roughly equal).
    *   When all types of misclassifications are equally important.

*   **Limitations of Accuracy:**
    *   **Imbalanced datasets:** Accuracy can be misleading on datasets with imbalanced class distributions. For instance, if 95% of the data belongs to the negative class, a model that always predicts the negative class will achieve 95% accuracy, which is deceptively high.

**Reference:**
*   *Mathematics for Machine Learning* (Deisenroth, Faisal, Ong) might discuss accuracy in the context of general error rates in statistical models.
*   *Python Data Science Handbook* (Vander Plas) provides practical examples of calculating accuracy using Scikit-learn.

### 4. Precision

*   **Definition:** Precision measures the proportion of correctly predicted positive instances out of all instances predicted as positive. It answers the question: "Of all the instances predicted as positive, how many were actually positive?"

*   **Formula:**
    $$ \text{Precision} = \frac{\text{TP}}{\text{TP} + \text{FP}} $$

*   **Interpretation:** A high precision score means that when the model predicts positive, it is very likely to be correct. It minimizes **False Positives**.

*   **Example (Continuing from previous):**
    $$ \text{Precision} = \frac{5}{5 + 2} = \frac{5}{7} \approx 0.714 $$
    This means that when the model predicted a patient had the disease, it was correct about 71.4% of the time.

*   **When to use Precision:**
    *   When the cost of False Positives is high.
    *   *Example:* Email spam detection: we want to avoid marking legitimate emails as spam (high FP cost).
    *   *Example:* Medical diagnosis of a severe illness: we want to be very sure before telling a patient they have a serious condition (high FP cost).

**Reference:**
*   *Pattern Recognition and Machine Learning* (Bishop) might cover precision within the broader context of error analysis and classifier performance.

### 5. Recall (Sensitivity or True Positive Rate)

*   **Definition:** Recall measures the proportion of correctly predicted positive instances out of all actual positive instances. It answers the question: "Of all the actual positive instances, how many did the model correctly identify?"

*   **Formula:**
    $$ \text{Recall} = \frac{\text{TP}}{\text{TP} + \text{FN}} $$

*   **Interpretation:** A high recall score means the model is good at finding all the positive instances. It minimizes **False Negatives**.

*   **Example (Continuing from previous):**
    $$ \text{Recall} = \frac{5}{5 + 3} = \frac{5}{8} = 0.625 $$
    This means that out of all the patients who actually had the disease, the model correctly identified 62.5% of them.

*   **When to use Recall:**
    *   When the cost of False Negatives is high.
    *   *Example:* Fraud detection: we want to catch as many fraudulent transactions as possible, even if it means flagging some legitimate ones (high FN cost).
    *   *Example:* Medical screening for a life-threatening disease: we want to ensure we don't miss any cases (high FN cost).

**Reference:**
*   *The Elements of Statistical Learning* (Hastie, Tibshirani, Friedman) would likely discuss recall as a key performance indicator for classification tasks, especially in the context of misclassification costs.

### 6. F1-Score

*   **Definition:** The F1-Score is the harmonic mean of Precision and Recall. It provides a single metric that balances both precision and recall.

*   **Formula:**
    $$ \text{F1-Score} = 2 \times \frac{\text{Precision} \times \text{Recall}}{\text{Precision} + \text{Recall}} $$

*   **Interpretation:** A high F1-Score indicates that the model has both high precision and high recall. It's particularly useful when you need to consider both false positives and false negatives.

*   **Example (Continuing from previous):**
    $$ \text{F1-Score} = 2 \times \frac{0.714 \times 0.625}{0.714 + 0.625} = 2 \times \frac{0.44625}{1.339} \approx 2 \times 0.333 \approx 0.667 $$

*   **When to use F1-Score:**
    *   When dealing with imbalanced datasets.
    *   When both precision and recall are important.
    *   When you need a single metric that accounts for both false positives and false negatives.

**Reference:**
*   *Python Machine Learning* (Raschka, Mirjalili) provides practical implementations and explanations of the F1-Score in Python.
*   *Applied Predictive Modelling* (Kuhn, Johnson) would likely discuss the F1-Score as a robust metric for evaluating models in various predictive scenarios.

### 7. Relationship Between Metrics and Imbalanced Datasets

*   **Accuracy Issues:** As mentioned, accuracy can be very misleading with imbalanced data.
    *   *Example:* A dataset with 99% negative samples and 1% positive samples. A model that always predicts negative achieves 99% accuracy, but it completely fails to detect any positive instances.
*   **Precision and Recall on Imbalanced Data:**
    *   If a model predicts a lot of false positives, its **Precision** will be low.
    *   If a model misses many actual positive instances, its **Recall** will be low.
*   **F1-Score as a Balance:** The F1-Score is often preferred in these situations because it penalizes models that are poor in either precision or recall.

**Reference:**
*   *Data Mining: Concepts and Techniques* (Han, Kamber, Pei) would cover performance evaluation in the context of data mining, often highlighting the challenges posed by imbalanced datasets.

### 8. Implementation with Python (Scikit-learn)

Scikit-learn provides convenient functions to calculate these metrics.

**Key Functions:**

*   `sklearn.metrics.accuracy_score(y_true, y_pred)`
*   `sklearn.metrics.precision_score(y_true, y_pred)`
*   `sklearn.metrics.recall_score(y_true, y_pred)`
*   `sklearn.metrics.f1_score(y_true, y_pred)`
*   `sklearn.metrics.confusion_matrix(y_true, y_pred)`

**Example Code Snippet:**

```python
from sklearn.metrics import accuracy_score, precision_score, recall_score, f1_score, confusion_matrix
from sklearn.model_selection import train_test_split
from sklearn.linear_model import LogisticRegression
from sklearn.datasets import make_classification # For creating a sample dataset
import numpy as np

# 1. Create a sample imbalanced dataset
X, y = make_classification(n_samples=1000, n_features=10, n_informative=5, n_redundant=0,
                           weights=[0.95], flip_y=0, random_state=42) # 95% negative, 5% positive

# 2. Split data into training and testing sets
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.3, random_state=42, stratify=y)

# 3. Train a simple Logistic Regression model
model = LogisticRegression(random_state=42)
model.fit(X_train, y_train)

# 4. Make predictions on the test set
y_pred = model.predict(X_test)

# 5. Calculate and print the metrics

# Confusion Matrix
cm = confusion_matrix(y_test, y_pred)
print(f"Confusion Matrix:\n{cm}\n")

# Extract TP, TN, FP, FN from confusion matrix
tn, fp, fn, tp = cm.ravel()

print(f"TP: {tp}, TN: {tn}, FP: {fp}, FN: {fn}\n")

# Accuracy
accuracy = accuracy_score(y_test, y_pred)
print(f"Accuracy: {accuracy:.4f}")

# Precision
precision = precision_score(y_test, y_pred)
print(f"Precision: {precision:.4f}")

# Recall
recall = recall_score(y_test, y_pred)
print(f"Recall: {recall:.4f}")

# F1-Score
f1 = f1_score(y_test, y_pred)
print(f"F1-Score: {f1:.4f}")

# --- Interpretation of the output for an imbalanced dataset ---
# Notice how Accuracy might be high, but Precision and Recall could be low,
# and the F1-score provides a more balanced view.
```

**Reference:**
*   *Python Data Science Handbook* (Vander Plas) and *Hands-On Machine Learning* (Géron) are excellent resources for practical Python implementations of these metrics.

### 9. Important Points to Remember

*   **No single best metric:** The choice of metric depends on the problem and the relative costs of different types of errors.
*   **Understand the context:** Always consider the nature of your data (e.g., balanced vs. imbalanced) and the business objective.
*   **Use a validation set:** Evaluate models on data they haven't seen during training to get a realistic estimate of their performance.
*   **Beyond classification:** While these metrics are primarily for classification, similar concepts (like ROC AUC) exist for evaluating models on different tasks.
*   **Interpretation is key:** Don't just report numbers; understand what they mean in the context of your problem.

---

### Practice Questions & Exercises

**Question 1:**
A binary classification model predicts whether a customer will click on an advertisement.
From the test set, the following results are obtained:
*   Total instances: 200
*   Correctly predicted clicks (TP): 40
*   Correctly predicted non-clicks (TN): 150
*   Incorrectly predicted clicks (FP): 5
*   Incorrectly predicted non-clicks (FN): 5

Calculate the following metrics:
a) Accuracy
b) Precision
c) Recall
d) F1-Score

**Answer 1:**
a) **Accuracy:**
   $$ \text{Accuracy} = \frac{\text{TP} + \text{TN}}{\text{TP} + \text{TN} + \text{FP} + \text{FN}} = \frac{40 + 150}{40 + 150 + 5 + 5} = \frac{190}{200} = 0.95 $$
b) **Precision:**
   $$ \text{Precision} = \frac{\text{TP}}{\text{TP} + \text{FP}} = \frac{40}{40 + 5} = \frac{40}{45} \approx 0.8889 $$
c) **Recall:**
   $$ \text{Recall} = \frac{\text{TP}}{\text{TP} + \text{FN}} = \frac{40}{40 + 5} = \frac{40}{45} \approx 0.8889 $$
d) **F1-Score:**
   $$ \text{F1-Score} = 2 \times \frac{\text{Precision} \times \text{Recall}}{\text{Precision} + \text{Recall}} = 2 \times \frac{0.8889 \times 0.8889}{0.8889 + 0.8889} = 2 \times \frac{0.7901}{1.7778} \approx 0.8889 $$

**Question 2:**
Consider a medical test for a rare disease that affects only 1% of the population. You build a classifier to detect this disease. If your classifier achieves 99% accuracy, but has a Precision of 0.2, what can you infer about its performance? Why might Recall be more important than Precision in this scenario?

**Answer 2:**
*   **Inference from 99% Accuracy:** An accuracy of 99% on a dataset where 99% of the population is healthy would imply that the model is correctly identifying most healthy individuals. However, it doesn't tell us how well it's identifying the diseased individuals.
*   **Inference from 0.2 Precision:** A Precision of 0.2 means that when the model predicts someone has the disease, it's only correct 20% of the time. This indicates a high rate of False Positives (many healthy individuals are wrongly diagnosed as having the disease).
*   **Why Recall is More Important:** In a scenario with a rare disease, the cost of a False Negative (missing a diseased person, FN) is typically much higher than the cost of a False Positive (wrongly diagnosing a healthy person, FP). A high FN rate means people who are actually sick might not receive necessary treatment. Therefore, maximizing Recall (correctly identifying as many actual positive cases as possible) is crucial, even if it means accepting a lower Precision (more false alarms).

**Question 3:**
Write Python code using Scikit-learn to calculate the precision, recall, and F1-score for a given set of true labels (`y_true`) and predicted labels (`y_pred`). Assume `y_true` and `y_pred` are NumPy arrays.

**Answer 3:**
```python
import numpy as np
from sklearn.metrics import precision_score, recall_score, f1_score

# Example true and predicted labels (replace with your actual data)
y_true = np.array([0, 1, 0, 1, 1, 0, 0, 1, 0, 1])
y_pred = np.array([0, 1, 1, 1, 0, 0, 0, 1, 0, 0]) # Example predictions

# Calculate Precision
precision = precision_score(y_true, y_pred)
print(f"Precision: {precision:.4f}")

# Calculate Recall
recall = recall_score(y_true, y_pred)
print(f"Recall: {recall:.4f}")

# Calculate F1-Score
f1 = f1_score(y_true, y_pred)
print(f"F1-Score: {f1:.4f}")
