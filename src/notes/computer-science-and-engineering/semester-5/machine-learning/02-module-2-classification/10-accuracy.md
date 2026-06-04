---
title: "Accuracy"
subject: "MACHINE LEARNING"
module: "Module 2: Classification  "
branch: "Computer Science and Engineering"
semester: 5
topicId: "684162760fc9aa1fdbc8b5bc"
status: "completed"
scrapedAt: "2026-05-20T16:46:35.509Z"
---
# MACHINE LEARNING - MODULE 2: CLASSIFICATION - TOPIC: ACCURACY

## Introduction

This module focuses on accuracy as a critical evaluation metric for classification models in Machine Learning. We will delve into its definition, limitations, and how it compares to other performance measures.

## Learning Outcomes

By the end of this topic, you should be able to:

*   Define accuracy and explain how it is calculated.
*   Identify situations where accuracy is not a reliable performance metric.
*   Explain the limitations of using accuracy as the sole evaluation metric for classification models.
*   Compare and contrast accuracy with other performance metrics such as precision, recall, and F1-score.
*   Calculate accuracy given a confusion matrix.
*   Understand the impact of class imbalance on accuracy.

## 1. Defining Accuracy and Calculation

*   **Definition:** Accuracy is the most intuitive and widely used metric for evaluating classification models.  It represents the proportion of correctly classified instances out of the total number of instances.

*   **Formula:**

    ```
    Accuracy = (Number of Correct Predictions) / (Total Number of Predictions)
    ```

    Or equivalently:

    ```
    Accuracy = (True Positives (TP) + True Negatives (TN)) / (TP + TN + False Positives (FP) + False Negatives (FN))
    ```

    *   **True Positives (TP):**  Correctly predicted positive instances.
    *   **True Negatives (TN):** Correctly predicted negative instances.
    *   **False Positives (FP):** Incorrectly predicted positive instances (Type I Error). Also known as a *false alarm*.
    *   **False Negatives (FN):** Incorrectly predicted negative instances (Type II Error).  Also known as a *miss*.

*   **Example:**

    Suppose we have a classification model that predicts whether an email is spam or not spam.  We test the model on 100 emails and obtain the following results:

    *   True Positives (Spam correctly identified): 30
    *   True Negatives (Not Spam correctly identified): 60
    *   False Positives (Not Spam incorrectly marked as Spam): 5
    *   False Negatives (Spam incorrectly marked as Not Spam): 5

    Accuracy = (30 + 60) / (30 + 60 + 5 + 5) = 90 / 100 = 0.9 or 90%

## 2. Situations Where Accuracy is Unreliable

Accuracy is a straightforward metric, but it has limitations, especially when dealing with:

*   **Imbalanced Datasets:** In imbalanced datasets, where one class significantly outweighs the other(s), accuracy can be misleading. A model might achieve high accuracy by simply predicting the majority class most of the time, without actually learning to identify the minority class.

*   **Unequal Costs of Errors:**  When the consequences of false positives and false negatives are significantly different, accuracy becomes an inadequate metric.

    *   **Example 1 (Imbalanced Data):** Suppose we have a dataset for detecting a rare disease, where only 1% of the population has the disease. A model that always predicts "no disease" will achieve 99% accuracy, but it will be useless because it fails to identify anyone with the disease.

    *   **Example 2 (Unequal Costs):** In fraud detection, failing to identify a fraudulent transaction (False Negative) is much more costly than incorrectly flagging a legitimate transaction as fraudulent (False Positive).  High accuracy might be achieved even if many fraudulent transactions are missed.

## 3. Limitations of Accuracy

*   **Ignores Class Distribution:** Accuracy treats all classes equally, regardless of their prevalence in the dataset.
*   **Masks Performance on Individual Classes:**  A high overall accuracy can hide poor performance on specific classes.
*   **Sensitive to Changes in Class Distribution:** If the class distribution in the test set differs significantly from the training set, accuracy may not be a reliable indicator of model performance.
*   **Does Not Account for Types of Errors:** Accuracy treats all errors the same.  It doesn't distinguish between false positives and false negatives, which can have very different implications.

## 4. Comparing Accuracy with Other Metrics

When accuracy is not sufficient, we can use other metrics such as precision, recall, F1-score, and AUC-ROC to better evaluate a classification model.

*   **Precision:**  Measures the proportion of positive predictions that are actually correct.

    ```
    Precision = TP / (TP + FP)
    ```
    *   High precision means the model has a low rate of false positives.
    *   Answers the question: "Of all the instances predicted as positive, how many were actually positive?"

*   **Recall (Sensitivity):** Measures the proportion of actual positive instances that are correctly identified by the model.

    ```
    Recall = TP / (TP + FN)
    ```

    *   High recall means the model has a low rate of false negatives.
    *   Answers the question: "Of all the actual positive instances, how many were correctly identified?"

*   **F1-Score:**  The harmonic mean of precision and recall.  It provides a balanced measure of a model's performance, considering both false positives and false negatives.

    ```
    F1-Score = 2 * (Precision * Recall) / (Precision + Recall)
    ```

    *   Useful when you want to find a balance between precision and recall.

*   **AUC-ROC (Area Under the Receiver Operating Characteristic Curve):**  Measures the ability of a classifier to distinguish between classes. It plots the true positive rate (TPR) against the false positive rate (FPR) at various threshold settings. A higher AUC-ROC value indicates better performance.

    *   Useful when you want to compare different classifiers and choose the one with the best overall performance.

**Key Differences:**

*   Accuracy is a single metric that summarizes overall correctness.
*   Precision focuses on the accuracy of positive predictions.
*   Recall focuses on the model's ability to find all positive instances.
*   F1-score balances precision and recall.
*   AUC-ROC provides a comprehensive view of classifier performance across different thresholds.

## 5. Calculating Accuracy from a Confusion Matrix

A confusion matrix is a table that summarizes the performance of a classification model by showing the counts of true positives, true negatives, false positives, and false negatives.

|                      | Predicted Positive | Predicted Negative |
| -------------------- | ------------------ | ------------------ |
| **Actual Positive**  | True Positive (TP) | False Negative (FN) |
| **Actual Negative**  | False Positive (FP) | True Negative (TN) |

**Example:**

Consider the following confusion matrix for a disease detection model:

|                      | Predicted Positive | Predicted Negative |
| -------------------- | ------------------ | ------------------ |
| **Actual Positive**  | 80                 | 20                 |
| **Actual Negative**  | 10                 | 90                 |

*   TP = 80
*   TN = 90
*   FP = 10
*   FN = 20

Accuracy = (TP + TN) / (TP + TN + FP + FN) = (80 + 90) / (80 + 90 + 10 + 20) = 170 / 200 = 0.85 or 85%

## 6. Impact of Class Imbalance on Accuracy

Class imbalance occurs when one class has significantly more instances than the other class(es). In such cases, accuracy can be a misleading metric because a classifier can achieve high accuracy by simply predicting the majority class.

**Example:**

Suppose you are building a model to detect fraudulent credit card transactions. In a typical dataset, fraudulent transactions represent only a small fraction (e.g., 0.1%) of all transactions.

*   A simple classifier that always predicts "not fraudulent" would achieve 99.9% accuracy.
*   However, this classifier would be completely useless because it would fail to identify any fraudulent transactions.

**Dealing with Class Imbalance:**

To address class imbalance, you can use the following techniques:

*   **Resampling Techniques:**
    *   **Oversampling:**  Increase the number of instances in the minority class.  (e.g., SMOTE, Random Oversampling)
    *   **Undersampling:** Decrease the number of instances in the majority class. (e.g., Random Undersampling)

*   **Cost-Sensitive Learning:**  Assign different costs to misclassifications of different classes.  This penalizes errors in the minority class more heavily.

*   **Using Different Evaluation Metrics:** Rely on metrics such as precision, recall, F1-score, and AUC-ROC, which are less sensitive to class imbalance.

## Practice Questions/Exercises

1.  **Question:**  A classification model predicts whether a customer will click on an ad. Out of 1000 customers, the model correctly predicted 800 clicks and 150 non-clicks. It incorrectly predicted 30 clicks and 20 non-clicks.  What is the accuracy of the model?

    **Answer:**  Accuracy = (800 + 150) / 1000 = 0.95 or 95%

2.  **Question:** Explain why accuracy might not be a good metric for evaluating a spam detection model if only 1% of emails are actually spam.

    **Answer:** If 99% of emails are not spam, a model that always predicts "not spam" would achieve 99% accuracy.  However, it would be completely ineffective because it would fail to identify any spam emails, which is the main objective.

3.  **Question:** Define True Positive, True Negative, False Positive, and False Negative in the context of medical diagnosis (predicting if a patient has a disease).

    **Answer:**
    *   **True Positive (TP):** The patient has the disease, and the model correctly predicts that they have the disease.
    *   **True Negative (TN):** The patient does not have the disease, and the model correctly predicts that they do not have the disease.
    *   **False Positive (FP):** The patient does not have the disease, but the model incorrectly predicts that they have the disease (Type I error).
    *   **False Negative (FN):** The patient has the disease, but the model incorrectly predicts that they do not have the disease (Type II error).

4.  **Question:** Calculate Precision, Recall, and F1-score from the following confusion matrix:

    |                      | Predicted Positive | Predicted Negative |
    | -------------------- | ------------------ | ------------------ |
    | **Actual Positive**  | 60                 | 40                 |
    | **Actual Negative**  | 10                 | 90                 |

    **Answer:**

    *   TP = 60
    *   TN = 90
    *   FP = 10
    *   FN = 40

    *   Precision = TP / (TP + FP) = 60 / (60 + 10) = 60 / 70 = 0.857
    *   Recall = TP / (TP + FN) = 60 / (60 + 40) = 60 / 100 = 0.6
    *   F1-Score = 2 * (Precision * Recall) / (Precision + Recall) = 2 * (0.857 * 0.6) / (0.857 + 0.6) = 2 * 0.5142 / 1.457 = 0.706

## Important Points to Remember

*   Accuracy is a simple and intuitive metric, but it has limitations.
*   Be cautious when using accuracy on imbalanced datasets or when the costs of different types of errors are unequal.
*   Consider using other metrics, such as precision, recall, F1-score, and AUC-ROC, in addition to accuracy.
*   Understand the context of your problem and choose the metrics that are most relevant to your goals.
*   Always analyze the confusion matrix to gain a deeper understanding of your model's performance.
