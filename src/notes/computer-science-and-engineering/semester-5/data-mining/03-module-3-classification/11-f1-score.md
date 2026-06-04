---
title: "F1 score"
subject: "DATA MINING"
module: "Module 3: Classification "
branch: "Computer Science and Engineering"
semester: 5
topicId: "684162770fc9aa1fdbc8b8b0"
status: "completed"
scrapedAt: "2026-05-20T16:45:11.641Z"
---
# DATA MINING - Module 3: Classification - F1 Score

## Learning Outcomes:

*   Understand the concept of Precision and Recall.
*   Define and calculate the F1 score.
*   Understand the trade-off between Precision and Recall.
*   Explain the situations where F1 score is preferred over accuracy.
*   Compare and contrast different evaluation metrics for classification.
*   Apply F1 score to real-world classification problems.

## 1. Key Concepts and Definitions:

*   **Classification:** The process of assigning a class label to an instance based on its attributes.  It's a supervised learning task where the goal is to learn a mapping from input features to discrete output labels.

*   **Confusion Matrix:** A table that summarizes the performance of a classification model by showing the counts of true positive, true negative, false positive, and false negative predictions.

    |                  | Predicted Positive | Predicted Negative |
    |------------------|--------------------|--------------------|
    | **Actual Positive** | True Positive (TP)   | False Negative (FN)  |
    | **Actual Negative** | False Positive (FP)  | True Negative (TN)   |

*   **True Positive (TP):**  The model correctly predicted the positive class.
*   **True Negative (TN):** The model correctly predicted the negative class.
*   **False Positive (FP):** The model incorrectly predicted the positive class (Type I error).  Also known as a *false alarm*.
*   **False Negative (FN):** The model incorrectly predicted the negative class (Type II error).  Also known as a *miss*.

*   **Precision:**  The proportion of predicted positive instances that were actually positive. It answers the question: "Of all the instances predicted as positive, how many were actually positive?"

    *   Formula: `Precision = TP / (TP + FP)`

*   **Recall (Sensitivity or True Positive Rate):** The proportion of actual positive instances that were correctly predicted as positive. It answers the question: "Of all the actual positive instances, how many were correctly identified?"

    *   Formula: `Recall = TP / (TP + FN)`

*   **F1 Score:** The harmonic mean of precision and recall. It provides a single metric that balances both precision and recall.  It's especially useful when the class distribution is imbalanced.

    *   Formula: `F1 Score = 2 * (Precision * Recall) / (Precision + Recall)`

## 2. Understanding Precision and Recall:

Precision and recall are two important metrics for evaluating classification models, particularly when dealing with imbalanced datasets (where one class has significantly more instances than the other).

*   **High Precision:** Indicates that the model is good at not labeling negative instances as positive.  It avoids false alarms.
*   **High Recall:** Indicates that the model is good at finding most of the positive instances. It avoids missing positive instances.

**Example:**

Imagine you are building a spam filter.

*   **High Precision:**  The filter is very accurate in identifying spam emails.  If an email is flagged as spam, it's highly likely to be spam.  Few legitimate emails are wrongly classified as spam.
*   **High Recall:**  The filter identifies almost all spam emails. Very few spam emails slip through and end up in the inbox.

## 3. Trade-off Between Precision and Recall:

Often, there's an inverse relationship between precision and recall. Improving one might lead to a decrease in the other.  This is the *precision-recall trade-off*.

*   **Increasing Precision (typically):** Can decrease recall because the model becomes more conservative in predicting the positive class, leading to more false negatives.
*   **Increasing Recall (typically):** Can decrease precision because the model becomes more aggressive in predicting the positive class, leading to more false positives.

**Example:**

Continuing with the spam filter:

*   **To achieve very high precision (avoiding false positives),** you might make the filter very strict. This might mean only flagging emails that are *extremely* obviously spam.  However, some genuine spam emails might slip through (lower recall).
*   **To achieve very high recall (catching all spam),** you might make the filter very lenient. This might mean flagging anything that *could* be spam. However, some legitimate emails might get flagged as spam (lower precision).

## 4. Calculating the F1 Score:

The F1 score provides a single metric that balances both precision and recall. It's calculated as the harmonic mean of precision and recall.

**Formula:** `F1 Score = 2 * (Precision * Recall) / (Precision + Recall)`

**Example:**

Consider a classification model that detects fraudulent transactions.  The confusion matrix is as follows:

|                  | Predicted Fraudulent | Predicted Non-Fraudulent |
|------------------|-----------------------|--------------------------|
| **Actual Fraudulent** | 80                    | 20                       |
| **Actual Non-Fraudulent** | 10                    | 990                      |

*   TP = 80
*   FP = 10
*   FN = 20
*   TN = 990

1.  **Calculate Precision:** `Precision = TP / (TP + FP) = 80 / (80 + 10) = 80/90 = 0.89`
2.  **Calculate Recall:** `Recall = TP / (TP + FN) = 80 / (80 + 20) = 80/100 = 0.80`
3.  **Calculate F1 Score:** `F1 Score = 2 * (Precision * Recall) / (Precision + Recall) = 2 * (0.89 * 0.80) / (0.89 + 0.80) = 2 * 0.712 / 1.69 = 1.424 / 1.69 = 0.84`

Therefore, the F1 score for this model is 0.84.

## 5. When is F1 Score Preferred over Accuracy?

*   **Imbalanced Datasets:** When the number of instances in different classes is significantly different, accuracy can be misleading. A model can achieve high accuracy by simply predicting the majority class most of the time.  F1 score provides a more balanced evaluation of the model's performance on both classes.

*   **Unequal Costs of False Positives and False Negatives:** If the consequences of false positives and false negatives are different, F1 score can be more appropriate.  We choose F1-score when we want a balance between precision and recall. For example:

    *   **Medical Diagnosis:** Missing a disease (false negative) can be more costly than a false alarm (false positive). In such cases, we might prioritize recall over precision and consider metrics like F2 score (which weighs recall higher).
    *   **Fraud Detection:**  Flagging a legitimate transaction as fraudulent (false positive) can be annoying for the customer, but missing a fraudulent transaction (false negative) can result in significant financial loss. We might look to maximize the recall.

## 6. Comparing and Contrasting Evaluation Metrics:

| Metric      | Description                                                                            | Advantages                                                                                  | Disadvantages                                                                            | When to Use                                                                                                                               |
|-------------|----------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------|------------------------------------------------------------------------------------------|------------------------------------------------------------------------------------------------------------------------------------------|
| **Accuracy**  | Overall correctness of the model.                                                     | Easy to understand and interpret.                                                          | Misleading with imbalanced datasets.                                                        | When classes are balanced and false positives and false negatives have similar costs.                                                 |
| **Precision** | Proportion of predicted positives that are actually positive.                         | Useful when minimizing false positives is important.                                        | Can be low if the model misses many positive instances (low recall).                                | When the cost of false positives is high (e.g., spam filtering, medical diagnosis where unnecessary treatment is harmful).           |
| **Recall**    | Proportion of actual positives that are correctly predicted.                            | Useful when minimizing false negatives is important.                                        | Can be low if the model predicts many false positives (low precision).                               | When the cost of false negatives is high (e.g., detecting diseases, identifying fraudulent transactions).                             |
| **F1 Score**  | Harmonic mean of precision and recall.                                                  | Provides a balanced evaluation of precision and recall, especially for imbalanced datasets. | Doesn't provide insight into the individual performance of the model in terms of precision or recall.   | When a balance between precision and recall is desired, and especially when dealing with imbalanced datasets.                               |
| **AUC-ROC** | Area Under the Receiver Operating Characteristic curve. Measures the separability of classes. | Provides a comprehensive view of the model's performance across different classification thresholds. | Can be less interpretable than other metrics. May not be suitable when the cost of false positives and false negatives are very different. | When you want to evaluate the model's ability to discriminate between classes across different thresholds, especially with imbalanced data. |

## 7. Applying F1 Score to Real-World Classification Problems:

*   **Medical Diagnosis:**  Evaluating a model that predicts the presence of a disease. F1 score helps balance the need to correctly identify patients with the disease (high recall) while minimizing false alarms (high precision).
*   **Fraud Detection:** Assessing a system that identifies fraudulent transactions. F1 score helps balance the need to detect fraudulent activities (high recall) while minimizing the number of legitimate transactions incorrectly flagged as fraud (high precision).
*   **Spam Filtering:** Evaluating a system that filters spam emails. F1 score helps balance the need to catch all spam emails (high recall) while minimizing the number of legitimate emails mistakenly classified as spam (high precision).
*   **Image Recognition:** Evaluating a system that identifies objects in images.  F1-score can provide a balanced measure of how accurately and completely objects are being recognized.

## 8. Important Points to Remember:

*   F1 score is a valuable metric when dealing with imbalanced datasets or when precision and recall are both important.
*   There is often a trade-off between precision and recall.
*   Choosing the appropriate evaluation metric depends on the specific problem and the costs associated with false positives and false negatives.
*   Understand the context of the problem before choosing an evaluation metric.

## 9. Practice Questions/Exercises:

**Question 1:**

A classification model predicts whether a customer will click on an advertisement. The following confusion matrix is obtained:

|                  | Predicted Click | Predicted No Click |
|------------------|-----------------|--------------------|
| **Actual Click** | 60              | 40                 |
| **Actual No Click** | 20              | 880                |

Calculate the precision, recall, and F1 score for the "Click" class.

**Answer:**

1.  **TP = 60**
2.  **FP = 20**
3.  **FN = 40**

*   **Precision:** `Precision = TP / (TP + FP) = 60 / (60 + 20) = 60/80 = 0.75`
*   **Recall:** `Recall = TP / (TP + FN) = 60 / (60 + 40) = 60/100 = 0.60`
*   **F1 Score:** `F1 Score = 2 * (Precision * Recall) / (Precision + Recall) = 2 * (0.75 * 0.60) / (0.75 + 0.60) = 2 * 0.45 / 1.35 = 0.90 / 1.35 = 0.67`

**Question 2:**

Explain in what scenario you would prefer the F1 score over Accuracy.

**Answer:**

The F1 score is preferred over accuracy when dealing with *imbalanced datasets*. Accuracy can be misleading in these cases because a model can achieve a high accuracy by simply predicting the majority class most of the time, without actually performing well on the minority class. The F1 score, on the other hand, takes into account both precision and recall, providing a more balanced evaluation of the model's performance on both classes. F1-score is also preferable when the cost of false positives and false negatives are significantly different.

**Question 3:**

A model has a precision of 0.9 and a recall of 0.5. Calculate the F1 score.

**Answer:**

`F1 Score = 2 * (Precision * Recall) / (Precision + Recall) = 2 * (0.9 * 0.5) / (0.9 + 0.5) = 2 * 0.45 / 1.4 = 0.9 / 1.4 = 0.64`

**Question 4:**

Why is the F1-score known as the *harmonic* mean of precision and recall?

**Answer:**

The F1-score uses the harmonic mean instead of the arithmetic mean because it is more sensitive to low values. If either precision or recall is very low, the harmonic mean will be significantly lower than the arithmetic mean, reflecting the poor performance in that aspect. This makes the F1-score a more conservative and informative metric when both precision and recall are important.
