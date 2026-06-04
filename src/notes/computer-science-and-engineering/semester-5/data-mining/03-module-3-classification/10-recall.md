---
title: "recall"
subject: "DATA MINING"
module: "Module 3: Classification "
branch: "Computer Science and Engineering"
semester: 5
topicId: "684162770fc9aa1fdbc8b8af"
status: "completed"
scrapedAt: "2026-05-20T16:45:10.928Z"
---
# DATA MINING: Module 3 - Classification - Recall

## 1. Introduction

This module focuses on Recall, a crucial metric for evaluating the performance of classification models.  Understanding recall is essential for building effective classification systems, especially when dealing with imbalanced datasets or scenarios where missing positive cases is costly.

## 2. Learning Outcomes

By the end of this topic, you should be able to:

*   **Define Recall (Sensitivity or True Positive Rate).**
*   **Explain the significance of Recall in classification.**
*   **Calculate Recall from a confusion matrix.**
*   **Interpret Recall in the context of a specific problem.**
*   **Compare and contrast Recall with other evaluation metrics like Precision and Accuracy.**
*   **Understand the trade-off between Recall and Precision.**
*   **Apply Recall in situations with imbalanced datasets.**

## 3. Key Concepts and Definitions

*   **Classification:** A supervised learning task that predicts the category or class to which a given data point belongs.
*   **Confusion Matrix:** A table that summarizes the performance of a classification model by showing the counts of true positive, true negative, false positive, and false negative predictions.
*   **True Positive (TP):** The model correctly predicts the positive class.
*   **True Negative (TN):** The model correctly predicts the negative class.
*   **False Positive (FP):** The model incorrectly predicts the positive class (Type I error). Also known as a "false alarm."
*   **False Negative (FN):** The model incorrectly predicts the negative class (Type II error).  Also known as a "miss."
*   **Recall (Sensitivity, True Positive Rate):** The proportion of actual positive cases that are correctly identified by the model.  It measures the ability of the model to find all the relevant instances.

## 4. Definition and Formula of Recall

**Definition:** Recall, also known as Sensitivity or True Positive Rate (TPR), measures the proportion of actual positive cases that are correctly classified as positive by the model. In simpler terms, it answers the question: "Out of all the actual positive instances, how many did the model correctly identify?"

**Formula:**

`Recall = True Positives / (True Positives + False Negatives)`

`Recall = TP / (TP + FN)`

**Interpretation:**

*   A Recall of 1.0 (or 100%) means that the model correctly identified all actual positive cases.
*   A Recall of 0.0 (or 0%) means that the model did not identify any actual positive cases.
*   A higher Recall is desirable when it's crucial to minimize false negatives (i.e., missing positive cases).

## 5. Significance of Recall in Classification

Recall is a vital metric in scenarios where missing positive cases has severe consequences.  Examples include:

*   **Medical Diagnosis (e.g., Cancer Detection):**  Failing to detect cancer (a false negative) can have life-threatening consequences. High recall ensures that the model identifies as many actual cancer cases as possible, even if it leads to a few false positives.
*   **Fraud Detection:**  Missing fraudulent transactions (a false negative) can result in financial losses. A high recall in fraud detection is crucial to minimize these losses.
*   **Spam Detection:** While false positives (legitimate emails being marked as spam) are annoying, missing spam emails (false negatives) can be dangerous (e.g., phishing scams). While a balance is needed, initially prioritizing recall is often preferred to prevent harmful spam from reaching the user.
*   **Defect Detection in Manufacturing:**  Missing defective products (false negatives) can lead to customer dissatisfaction, safety issues, and financial losses. High recall is important to ensure all defects are caught before products reach consumers.

## 6. Calculating Recall from a Confusion Matrix

**Example Confusion Matrix:**

|                  | Predicted Positive | Predicted Negative |
|------------------|--------------------|--------------------|
| **Actual Positive** | 90 (TP)            | 10 (FN)            |
| **Actual Negative** | 5 (FP)             | 95 (TN)            |

**Calculation:**

Recall = TP / (TP + FN) = 90 / (90 + 10) = 90 / 100 = 0.9

**Interpretation:**

The Recall is 0.9, or 90%. This means that the model correctly identified 90% of all actual positive cases.  It missed 10% of the positive cases (false negatives).

## 7. Interpreting Recall in Context

Let's say the example above is for a cancer detection model.  A Recall of 90% means the model correctly identified 90% of patients who actually had cancer.  It missed 10% of cancer patients, which is a significant concern in this context. The focus would then be on improving the model to reduce the number of false negatives, even if it comes at the cost of slightly increasing the number of false positives.

## 8. Comparing and Contrasting Recall with Other Evaluation Metrics

*   **Precision:** Measures the proportion of positive predictions that are actually correct.
    *   `Precision = True Positives / (True Positives + False Positives)`
    *   Precision focuses on the accuracy of positive predictions, while Recall focuses on the completeness of positive identification.
*   **Accuracy:** Measures the overall correctness of the model's predictions.
    *   `Accuracy = (True Positives + True Negatives) / (Total Number of Predictions)`
    *   Accuracy can be misleading in imbalanced datasets, where one class is much more frequent than the other.  In such cases, a model can achieve high accuracy by simply predicting the majority class most of the time.
*   **F1-Score:**  The harmonic mean of Precision and Recall.  It provides a balanced measure of a model's performance, especially when Precision and Recall have conflicting goals.
    *   `F1-Score = 2 * (Precision * Recall) / (Precision + Recall)`

**Key Differences and When to Use Which Metric:**

| Metric     | Focus                                     | When to Prioritize                                                                   |
|------------|-------------------------------------------|--------------------------------------------------------------------------------------|
| Recall     | Minimizing False Negatives                | When missing positive cases is costly (e.g., medical diagnosis, fraud detection)     |
| Precision  | Minimizing False Positives                | When false positives are costly (e.g., spam filtering, where legitimate emails should not be marked as spam) |
| Accuracy   | Overall correctness (balanced dataset)      | When the dataset is balanced and both false positives and false negatives have similar costs. |
| F1-Score   | Balance between Precision and Recall       | When you need a balanced measure that considers both false positives and false negatives. |

## 9. The Trade-off between Recall and Precision

There is often an inverse relationship between Recall and Precision.  Increasing one can often decrease the other.

*   **Increasing Recall:** To increase Recall, you might lower the classification threshold, making it easier for the model to predict a positive outcome. This will likely identify more of the true positive cases, but it can also lead to more false positives (decreasing Precision).
*   **Increasing Precision:** To increase Precision, you might raise the classification threshold, making it harder for the model to predict a positive outcome. This will reduce the number of false positives, but it can also lead to more false negatives (decreasing Recall).

Choosing the right balance between Recall and Precision depends on the specific problem and the relative costs of false positives and false negatives.

## 10. Applying Recall in Situations with Imbalanced Datasets

Imbalanced datasets occur when one class has significantly more instances than the other. In such cases, accuracy can be misleading.  Recall becomes particularly important in imbalanced datasets because it focuses on the performance of the model on the minority (positive) class.

**Example:**

Consider a dataset for detecting credit card fraud, where only 1% of transactions are fraudulent.  A model that always predicts "not fraudulent" will have an accuracy of 99%, but it will also have a Recall of 0% because it will not detect any fraudulent transactions.

In such scenarios, focusing on Recall (and other metrics like Precision and F1-score) is essential to ensure the model effectively identifies the rare positive cases.  Techniques like resampling (oversampling the minority class or undersampling the majority class) or using cost-sensitive learning algorithms can help improve Recall in imbalanced datasets.

## 11. Practice Questions and Exercises

1.  **Question:** A classification model predicts the presence of a rare disease. Out of 100 patients who actually have the disease, the model correctly identifies 70 of them. What is the Recall of the model?
    *   **Answer:** Recall = 70 / 100 = 0.7 (or 70%)

2.  **Question:**  In a spam detection system, a model has a Recall of 0.9 and a Precision of 0.6. Explain what these values mean in the context of spam detection.
    *   **Answer:**
        *   Recall of 0.9: The model correctly identifies 90% of all spam emails. It misses 10% of spam emails (false negatives).
        *   Precision of 0.6: Out of all emails classified as spam, 60% are actually spam.  40% are legitimate emails that were incorrectly classified as spam (false positives).

3.  **Question:**  You are building a model to detect fraudulent insurance claims.  Would you prioritize Recall or Precision in this scenario?  Why?
    *   **Answer:** You should prioritize Recall.  Missing a fraudulent claim (false negative) can result in significant financial losses for the insurance company.  While false positives (incorrectly flagging a legitimate claim as fraudulent) can be investigated, the cost of missing a fraudulent claim is typically much higher.

4. **Question:** Consider a confusion matrix:

|                  | Predicted Positive | Predicted Negative |
|------------------|--------------------|--------------------|
| **Actual Positive** | 150 (TP)           | 50 (FN)            |
| **Actual Negative** | 10 (FP)             | 890 (TN)           |

Calculate the following metrics: Accuracy, Precision, and Recall.

*   **Answer:**
    *   Accuracy = (TP + TN) / (TP + TN + FP + FN) = (150 + 890) / (150 + 890 + 10 + 50) = 1040 / 1100 = 0.945 (94.5%)
    *   Precision = TP / (TP + FP) = 150 / (150 + 10) = 150 / 160 = 0.9375 (93.75%)
    *   Recall = TP / (TP + FN) = 150 / (150 + 50) = 150 / 200 = 0.75 (75%)

5. **Exercise:** Research a real-world application where Recall is more important than Precision. Describe the application and explain why Recall is prioritized.

## 12. Important Points to Remember

*   **Recall is about minimizing False Negatives.**
*   **Recall is also known as Sensitivity or True Positive Rate (TPR).**
*   **Recall is crucial in scenarios where missing positive cases is costly or dangerous.**
*   **Recall should be carefully considered in imbalanced datasets.**
*   **There is often a trade-off between Recall and Precision.  Understanding this trade-off is essential for building effective classification models.**
