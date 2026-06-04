---
title: "R Squared/Coefficient of Determination."
subject: "MACHINE LEARNING"
module: "Module 2: Classification  "
branch: "Computer Science and Engineering"
semester: 5
topicId: "684162760fc9aa1fdbc8b5c2"
status: "completed"
scrapedAt: "2026-05-20T16:46:39.880Z"
---
## MACHINE LEARNING - Module 2: Classification - R Squared/Coefficient of Determination

**Learning Outcomes:**

*   Understand the concept of R-squared in the context of classification (and its limitations).
*   Define R-squared and its interpretation.
*   Explain how R-squared is calculated (in a regression context).
*   Identify the limitations of using R-squared for evaluating classification models.
*   Recognize alternative metrics for evaluating classification models and when they are more appropriate.

**1. Key Concepts and Definitions**

*   **R-squared (Coefficient of Determination):** A statistical measure that represents the proportion of variance in the dependent variable (target variable) that is predictable from the independent variable(s) (features).  It essentially explains how well the regression model fits the observed data.  It ranges from 0 to 1, where:
    *   R-squared = 0: The model does not explain any variance in the target variable.
    *   R-squared = 1: The model perfectly explains the variance in the target variable.
    *   Values in between represent the percentage of the variance explained. For example, R-squared = 0.7 means that 70% of the variance in the target variable can be predicted from the features.

*   **Total Sum of Squares (TSS):**  Measures the total variability in the target variable.  It's the sum of the squared differences between each observed value and the mean of the target variable.

*   **Residual Sum of Squares (RSS):**  Measures the variability that the model *doesn't* explain. It's the sum of the squared differences between the actual values and the values predicted by the model.

*   **Regression vs. Classification:** R-squared is fundamentally designed for *regression* problems where the target variable is continuous.  While the *idea* of assessing model fit is relevant to classification, R-squared itself is not a reliable metric.

**2. Calculating R-squared (in a Regression Context)**

The formula for R-squared is:

R-squared = 1 - (RSS / TSS)

Where:

*   RSS =  ∑(yᵢ - ŷᵢ)²  (Sum of squared residuals/errors)
*   TSS =  ∑(yᵢ - ȳ)²  (Total sum of squares)
    *   yᵢ is the actual value of the target variable for the i-th observation.
    *   ŷᵢ is the predicted value of the target variable for the i-th observation.
    *   ȳ is the mean of the target variable.

**Example:**

Let's say you have the following data points:

| Actual (yᵢ) | Predicted (ŷᵢ) |
|---|---|
| 2 | 2.5 |
| 4 | 3.5 |
| 6 | 5.5 |
| 8 | 7.5 |
| 10 | 9.5 |

1.  **Calculate the Mean (ȳ):** (2 + 4 + 6 + 8 + 10) / 5 = 6

2.  **Calculate TSS:**
    *   (2 - 6)² + (4 - 6)² + (6 - 6)² + (8 - 6)² + (10 - 6)² = 16 + 4 + 0 + 4 + 16 = 40

3.  **Calculate RSS:**
    *   (2 - 2.5)² + (4 - 3.5)² + (6 - 5.5)² + (8 - 7.5)² + (10 - 9.5)² = 0.25 + 0.25 + 0.25 + 0.25 + 0.25 = 1.25

4.  **Calculate R-squared:**
    *   R-squared = 1 - (1.25 / 40) = 1 - 0.03125 = 0.96875

In this example, R-squared is approximately 0.969, meaning that about 96.9% of the variance in the target variable is explained by the model.

**3. Limitations of R-squared for Classification Models**

The primary limitation is that R-squared relies on the concept of *squared differences* and *variance* which are inherently suited for continuous, normally distributed data in regression problems.  Classification problems deal with *categorical* data (e.g., "cat," "dog," "bird" or 0, 1, 2).

*   **R-squared assumes a linear relationship:**  Classification algorithms often learn complex, non-linear decision boundaries. R-squared, designed for linear relationships, cannot adequately capture the performance of these models.

*   **R-squared penalizes incorrect magnitude:** In regression, predicting "10" when the actual value is "12" is considered a smaller error than predicting "20".  In classification, the magnitude of the predicted probability doesn't always directly correlate to the correctness of the classification (e.g., a model confidently predicting the wrong class is still just wrong).

*   **Misleading interpretation:** Applying R-squared to classification can lead to misinterpretations.  A high "R-squared" value doesn't necessarily mean the classifier is good.  It might just mean the model is consistently predicting the same, dominant class.

**4. Alternative Metrics for Evaluating Classification Models**

Because R-squared is unsuitable for classification, use these metrics instead:

*   **Accuracy:** The proportion of correctly classified instances out of the total instances.
    *   Formula: (True Positives + True Negatives) / (Total Instances)
    *   Limitation: Can be misleading with imbalanced datasets.

*   **Precision:** The proportion of true positives out of all instances predicted as positive.  Focuses on the correctness of positive predictions.
    *   Formula: True Positives / (True Positives + False Positives)

*   **Recall (Sensitivity):** The proportion of true positives out of all actual positive instances.  Focuses on identifying all positive instances.
    *   Formula: True Positives / (True Positives + False Negatives)

*   **F1-score:** The harmonic mean of precision and recall. Provides a balanced measure of performance.
    *   Formula: 2 * (Precision * Recall) / (Precision + Recall)

*   **AUC-ROC (Area Under the Receiver Operating Characteristic curve):** Measures the ability of the classifier to distinguish between classes.  It plots the true positive rate (recall) against the false positive rate at various threshold settings.  AUC values range from 0 to 1, where a higher value indicates better performance.  AUC of 0.5 represents random guessing.

*   **Confusion Matrix:** A table that summarizes the performance of a classification model by showing the counts of true positives, true negatives, false positives, and false negatives.

**5. Examples**

Imagine you are building a model to classify emails as spam or not spam.  You try to apply R-squared (which is not recommended):

*   The model has a "high R-squared" value.  This *doesn't* automatically mean it's a good spam filter.  It could be that the model is simply predicting "not spam" for almost every email, and if most emails are indeed not spam, it would achieve a high R-squared without actually identifying any spam emails.

A more appropriate evaluation would be:

*   **Precision:**  How many of the emails labeled as "spam" are actually spam? High precision means fewer false positives (legitimate emails being marked as spam).
*   **Recall:**  How many of the actual spam emails are correctly identified as spam?  High recall means fewer false negatives (spam emails slipping through the filter).
*   **F1-score:** A balanced measure of precision and recall, useful when you need to consider both false positives and false negatives.
*   **AUC-ROC:**  How well does the model distinguish between spam and not spam emails across different decision thresholds.

**6. Important Points to Remember**

*   **R-squared is primarily for regression problems.** Do not use it directly for evaluating classification models.
*   **Classification requires specialized metrics** like accuracy, precision, recall, F1-score, and AUC-ROC.
*   **The choice of metric depends on the specific problem** and the relative importance of false positives versus false negatives. For example, in medical diagnosis, you might prioritize high recall to avoid missing any positive cases.
*   **Always consider the class distribution (imbalance)** when evaluating classification models.  Accuracy can be misleading with imbalanced data.

**7. Practice Questions/Exercises**

1.  **True or False:** R-squared is an appropriate metric for evaluating the performance of a logistic regression model classifying customers as "likely to churn" or "not likely to churn."
    *   **Answer:** False

2.  Which of the following metrics is MOST suitable for evaluating a spam detection system where minimizing false negatives (allowing spam to slip through) is extremely important?
    a) Accuracy
    b) Precision
    c) Recall
    d) F1-score
    *   **Answer:** c) Recall

3.  Explain why a high R-squared value might be misleading if used to evaluate a classification model.
    *   **Answer:** A high R-squared value doesn't guarantee good classification performance.  It might simply indicate that the model is consistently predicting the majority class, especially in imbalanced datasets. R-squared is designed to assess the fit of a regression model based on variance explained, not the correctness of categorical predictions.

4.  What is the purpose of AUC-ROC in the context of classification model evaluation?
    *   **Answer:** AUC-ROC measures the classifier's ability to distinguish between different classes. It plots the trade-off between the true positive rate and the false positive rate across different classification thresholds, providing a comprehensive view of the model's performance.  A higher AUC-ROC value indicates better discrimination between the classes.

5.  Why is it important to consider the class distribution (balance/imbalance) when evaluating a classification model? Provide an example.
    *   **Answer:**  In an imbalanced dataset, where one class significantly outnumbers the other, accuracy can be misleading.  A model that always predicts the majority class can achieve high accuracy, even if it fails to correctly classify any instances of the minority class. For example, in a fraud detection system where fraudulent transactions are rare (e.g., 1% of all transactions), a model that always predicts "not fraudulent" would achieve 99% accuracy, but be completely useless in detecting actual fraud. Therefore, metrics like precision, recall, and F1-score, which are more sensitive to the performance on the minority class, are more appropriate.
