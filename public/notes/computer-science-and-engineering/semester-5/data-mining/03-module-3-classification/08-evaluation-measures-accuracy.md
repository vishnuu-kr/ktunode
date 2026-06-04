---
title: "Evaluation measures - accuracy"
subject: "DATA MINING"
module: "Module 3: Classification "
branch: "Computer Science and Engineering"
semester: 5
topicId: "684162770fc9aa1fdbc8b8ad"
status: "completed"
scrapedAt: "2026-05-20T16:45:09.494Z"
---
## Data Mining: Module 3 - Classification: Evaluation Measures - Accuracy

These notes cover the concept of accuracy as an evaluation measure for classification models within the context of data mining.

**Learning Outcomes:**

*   Understand the concept of accuracy as a classification performance metric.
*   Calculate accuracy from a confusion matrix.
*   Recognize the limitations of accuracy and its potential for misleading results.
*   Apply accuracy in the context of imbalanced datasets and understand its drawbacks in such scenarios.

**1. Key Concepts and Definitions:**

*   **Classification:**  A supervised learning technique that assigns instances to predefined categories or classes based on their features.
*   **Evaluation Measure:** A metric used to assess the performance of a classification model.  These measures help us determine how well the model is generalizing to unseen data.
*   **Accuracy:**  The proportion of correctly classified instances out of the total number of instances. It's a straightforward and commonly used metric.
*   **True Positives (TP):** The number of instances correctly predicted as belonging to the positive class.
*   **True Negatives (TN):** The number of instances correctly predicted as belonging to the negative class.
*   **False Positives (FP):** The number of instances incorrectly predicted as belonging to the positive class (Type I error).
*   **False Negatives (FN):** The number of instances incorrectly predicted as belonging to the negative class (Type II error).
*   **Confusion Matrix:** A table that summarizes the performance of a classification model by showing the counts of TP, TN, FP, and FN.

**2.  Understanding Accuracy**

*   **Definition:** Accuracy is the most intuitive classification metric. It answers the question: "Out of all the instances, how many did the model classify correctly?"
*   **Formula:**

    ```
    Accuracy = (Number of Correct Predictions) / (Total Number of Predictions)
    Accuracy = (TP + TN) / (TP + TN + FP + FN)
    ```

*   **Interpretation:** A higher accuracy generally indicates a better-performing model. An accuracy of 1.0 (or 100%) means the model predicted all instances correctly. An accuracy of 0.0 (or 0%) means the model predicted all instances incorrectly (which is usually worse than random guessing).

**3. Calculating Accuracy from a Confusion Matrix**

*   **Example Confusion Matrix (Binary Classification):**

    |                   | Predicted Positive | Predicted Negative |
    |-------------------|--------------------|--------------------|
    | Actual Positive   | TP = 90           | FN = 10           |
    | Actual Negative   | FP = 5            | TN = 95           |

*   **Calculation:**

    *   Total instances = TP + TN + FP + FN = 90 + 95 + 5 + 10 = 200
    *   Correct predictions = TP + TN = 90 + 95 = 185
    *   Accuracy = (185 / 200) = 0.925 or 92.5%

**4. Limitations of Accuracy**

*   **Imbalanced Datasets:** Accuracy can be misleading when dealing with imbalanced datasets, where one class has significantly more instances than the other.

    *   **Example:** Consider a dataset with 95% negative instances and 5% positive instances.  A model that always predicts "negative" would achieve an accuracy of 95%.  While the accuracy is high, the model is effectively useless as it never identifies the positive class.
    *   **Problem:**  Accuracy doesn't differentiate between types of errors (FP vs FN).  In imbalanced datasets, we are often more concerned with correctly identifying the minority class.

*   **Cost Sensitivity:** Accuracy doesn't consider the cost associated with different types of errors.

    *   **Example:**  In medical diagnosis, a false negative (failing to diagnose a disease) can have much more severe consequences than a false positive (diagnosing someone with a disease they don't have). Accuracy treats both errors as equal, which is not appropriate in this context.

**5. Accuracy in Imbalanced Datasets**

*   **The Problem:**  In imbalanced datasets, a high accuracy can mask poor performance on the minority class.  A classifier might achieve high accuracy by simply predicting the majority class for all instances.
*   **Why Accuracy Fails:**  Because accuracy averages across all classes, the dominant class overwhelms the contribution of the minority class.
*   **Alternative Metrics:**  When dealing with imbalanced datasets, it's crucial to use alternative evaluation measures that are more sensitive to the performance on the minority class, such as:
    *   **Precision:**  Of all the instances predicted as positive, what proportion is actually positive? (TP / (TP + FP))
    *   **Recall (Sensitivity):**  Of all the actual positive instances, what proportion was correctly predicted as positive? (TP / (TP + FN))
    *   **F1-Score:** The harmonic mean of precision and recall.  Provides a balanced measure of performance.  (2 * (Precision * Recall) / (Precision + Recall))
    *   **Area Under the ROC Curve (AUC-ROC):**  Measures the ability of the classifier to distinguish between classes.

**6. Examples**

*   **Example 1 (Balanced Dataset):** A model predicts whether an email is spam or not.  After classifying 1000 emails, it correctly identifies 900 emails.  Accuracy = 900/1000 = 90%. This is a good indicator of performance in this balanced dataset scenario.
*   **Example 2 (Imbalanced Dataset):** A model predicts whether a customer will default on a loan.  The dataset contains 10,000 customers, and only 100 have defaulted.  The model predicts that no one will default.  Accuracy = 9900/10000 = 99%. While the accuracy is high, the model is useless because it doesn't identify any of the customers who will default.  Recall for the default class is 0, which is a better indicator of the model's poor performance.

**7. Important Points to Remember**

*   Accuracy is a simple and intuitive metric, but it has limitations.
*   Always consider the context of the problem and the characteristics of the dataset when using accuracy.
*   Be especially cautious when using accuracy on imbalanced datasets.
*   In situations where class imbalance exists or cost sensitivity is important, use alternative evaluation measures such as precision, recall, F1-score, or AUC-ROC.
*   A high accuracy score doesn't always guarantee a good model.  It's important to look at other metrics and consider the specific application.

**8. Practice Questions/Exercises**

**Question 1:**

You are building a model to detect fraudulent credit card transactions.  You have a dataset of 10,000 transactions, where only 200 are fraudulent.  Your model predicts 150 of the fraudulent transactions correctly and incorrectly labels 50 legitimate transactions as fraudulent.

a)  Create the confusion matrix.
b)  Calculate the accuracy of your model.
c)  Explain why accuracy might be a misleading metric in this scenario.

**Question 2:**

Given the following confusion matrix:

|                   | Predicted Positive | Predicted Negative |
|-------------------|--------------------|--------------------|
| Actual Positive   | TP = 60           | FN = 40           |
| Actual Negative   | FP = 10           | TN = 90           |

Calculate the accuracy, precision, and recall.  Which metric gives a better picture of the model's performance?

**Question 3:**

Explain in your own words why accuracy is not a good evaluation metric for imbalanced datasets. Give a real-world example.

**Answers:**

**Question 1:**

a) Confusion Matrix:

|                   | Predicted Fraudulent | Predicted Not Fraudulent |
|-------------------|----------------------|--------------------------|
| Actual Fraudulent   | TP = 150             | FN = 50                  |
| Actual Not Fraudulent| FP = 50              | TN = 9750                |

b) Accuracy: (150 + 9750) / 10000 = 9900/10000 = 0.99 or 99%

c) Accuracy is misleading because the model achieves very high accuracy (99%) by mostly predicting "not fraudulent."  While it correctly identifies 9750 non-fraudulent transactions, it misses 50 fraudulent transactions, which could have significant financial consequences.  In fraud detection, correctly identifying fraudulent transactions (high recall) is often more important than minimizing false positives.

**Question 2:**

*   Accuracy = (TP + TN) / (TP + TN + FP + FN) = (60 + 90) / (60 + 90 + 10 + 40) = 150 / 200 = 0.75 or 75%
*   Precision = TP / (TP + FP) = 60 / (60 + 10) = 60 / 70 = 0.857 or 85.7%
*   Recall = TP / (TP + FN) = 60 / (60 + 40) = 60 / 100 = 0.6 or 60%

In this case, precision and recall give a better picture of the model's performance. Precision indicates that when the model predicts a positive class, it is correct ~86% of the time. Recall shows the model only captures 60% of the actual positive cases. Whether precision or recall is 'better' depends on the specific application and which type of error is more costly.

**Question 3:**

Accuracy is not a good evaluation metric for imbalanced datasets because it gives a disproportionate weight to the majority class. A model can achieve high accuracy by simply predicting the majority class for all or most instances, even if it completely fails to identify the minority class. This is because the high number of correctly classified majority class instances overshadows the poor performance on the minority class in the accuracy calculation.

*   **Example:** Imagine predicting a rare disease. If only 1% of the population has the disease, a model that always predicts "no disease" would have 99% accuracy. However, it would be useless because it would never identify anyone with the disease, which is the primary goal.  Instead of relying on accuracy, we'd need to consider metrics like recall, which would highlight that the model has a recall of 0 (i.e., it doesn't identify *any* patients with the disease).
