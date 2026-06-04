---
title: "Performance metrics: Accuracy Recall, Precision, ROC curve"
subject: "MACHINE LEARNING"
module: "Module 1: Review: supervised, unsupervised machine learning techniques"
branch: "Electronics and Communication Engineering"
semester: 4
topicId: "68a5c45eb09ce205780fe623"
status: "completed"
scrapedAt: "2026-05-23T17:50:13.607Z"
---
# Machine Learning: Module 1 Review - Performance Metrics (Accuracy, Recall, Precision, ROC Curve)

This module review focuses on essential performance metrics used to evaluate classification models in supervised machine learning. Understanding these metrics is crucial for selecting the best model for a given task and interpreting its results.

---

## Learning Outcomes Covered:

*   **Analyze and apply supervised and unsupervised machine learning techniques to solve various data-driven problems.** (CO1, K4) - While this outcome is broad, understanding performance metrics is a fundamental step in analyzing and applying supervised techniques.
*   **Develop, train, and optimize regression and classification models.** (CO2, K3) - This outcome directly relates to optimizing classification models by using these metrics.

---

## 1. Introduction to Model Evaluation in Classification

In supervised machine learning, particularly for classification tasks, we need to quantify how well our model performs. Simply looking at the model's predictions isn't enough. We need objective measures to compare different models, understand their strengths and weaknesses, and make informed decisions.

**Key Concept:** **Classification Model Evaluation** - The process of assessing the performance of a machine learning model that predicts categorical output variables.

---

## 2. The Confusion Matrix: The Foundation for Metrics

Before diving into specific metrics, it's essential to understand the **Confusion Matrix**. For a binary classification problem (e.g., predicting "yes" or "no", "spam" or "not spam"), the confusion matrix summarizes the prediction results against the actual true values.

**Key Concepts:**

*   **True Positive (TP):** The model correctly predicted the positive class.
    *   *Example:* The model predicted "spam" and the email was indeed "spam."
*   **True Negative (TN):** The model correctly predicted the negative class.
    *   *Example:* The model predicted "not spam" and the email was indeed "not spam."
*   **False Positive (FP) / Type I Error:** The model incorrectly predicted the positive class.
    *   *Example:* The model predicted "spam" but the email was actually "not spam." (A false alarm)
*   **False Negative (FN) / Type II Error:** The model incorrectly predicted the negative class.
    *   *Example:* The model predicted "not spam" but the email was actually "spam." (A missed detection)

**Visual Representation (Binary Classification):**

|                 | **Predicted Positive** | **Predicted Negative** |
| :-------------- | :--------------------- | :--------------------- |
| **Actual Positive** | TP                     | FN                     |
| **Actual Negative** | FP                     | TN                     |

**Textbook Reference:**

*   **Hands-on Machine Learning with Scikit-Learn, Keras, and TensorFlow by Aurélien Géron (2nd Ed., 2019):** Géron discusses the confusion matrix extensively in Chapter 3, "Classification," as a fundamental tool for evaluating binary classifiers. He emphasizes its role in deriving other performance metrics.
*   **Introduction to Machine Learning with Python by Andreas C. Müller & Sarah Guido (2017):** Müller and Guido also introduce the confusion matrix in their discussion of evaluation metrics, highlighting its importance for understanding classification errors.

---

## 3. Accuracy

**Definition:** Accuracy is the most intuitive metric. It measures the proportion of total predictions that were correct.

**Formula:**

$$ \text{Accuracy} = \frac{\text{Number of Correct Predictions}}{\text{Total Number of Predictions}} = \frac{TP + TN}{TP + TN + FP + FN} $$

**When to Use:**

*   When the classes are **balanced** (i.e., the number of instances in each class is roughly equal).
*   When all types of errors (False Positives and False Negatives) are equally costly.

**Example:**
If a model made 100 predictions, and 90 were correct (TP + TN = 90) and 10 were incorrect (FP + FN = 10), the accuracy would be 90/100 = 0.9 or 90%.

**Important Point to Remember:**
Accuracy can be **misleading** on imbalanced datasets. If 95% of your data belongs to the negative class, a model that always predicts the negative class will achieve 95% accuracy, even though it's terrible at identifying the positive class.

**Textbook Reference:**
*   **Machine Learning for Absolute Beginners by Oliver Theobald (2nd Ed.):** Theobald's book often starts with simpler concepts like accuracy, explaining its basic definition and its limitations with imbalanced data.

---

## 4. Precision

**Definition:** Precision measures the proportion of correctly predicted positive instances out of all instances that were predicted as positive. It answers: "Of all the instances the model predicted as positive, how many were actually positive?"

**Formula:**

$$ \text{Precision} = \frac{TP}{TP + FP} $$

**When to Use:**

*   When the **cost of False Positives is high**. You want to be sure that when the model predicts positive, it's likely correct.
*   *Example:* Spam detection (a False Positive means a legitimate email is marked as spam). Medical diagnosis of a serious disease (a False Positive might lead to unnecessary stress and further tests).

**Example:**
If a model predicted 50 instances as positive (TP + FP = 50), and 40 of them were indeed positive (TP = 40), then the precision would be 40/50 = 0.8 or 80%.

**Textbook Reference:**
*   **Hands-on Machine Learning with Scikit-Learn, Keras, and TensorFlow by Aurélien Géron (2nd Ed., 2019):** Géron thoroughly explains precision in the context of avoiding false positives, crucial for tasks where a wrong positive prediction is detrimental.
*   **Introduction to Machine Learning with Python by Andreas C. Müller & Sarah Guido (2017):** They highlight precision as a key metric when the focus is on the reliability of positive predictions.

---

## 5. Recall (Sensitivity or True Positive Rate - TPR)

**Definition:** Recall measures the proportion of actual positive instances that were correctly identified by the model. It answers: "Of all the instances that were actually positive, how many did the model correctly predict as positive?"

**Formula:**

$$ \text{Recall} = \frac{TP}{TP + FN} $$

**When to Use:**

*   When the **cost of False Negatives is high**. You want to minimize missed positive cases.
*   *Example:* Medical diagnosis of a serious disease (a False Negative means a patient with the disease is not detected). Fraud detection (a False Negative means a fraudulent transaction is missed).

**Example:**
If there were actually 60 positive instances in the dataset (TP + FN = 60), and the model correctly identified 40 of them as positive (TP = 40), then the recall would be 40/60 = 0.67 or 67%.

**Textbook Reference:**
*   **Hands-on Machine Learning with Scikit-Learn, Keras, and TensorFlow by Aurélien Géron (2nd Ed., 2019):** Géron explains recall as the ability of the classifier to find all the positive samples.
*   **Machine Learning for Absolute Beginners by Oliver Theobald (2nd Ed.):** Theobald often contrasts recall with precision, explaining the scenarios where maximizing recall is more important.

---

## 6. Precision vs. Recall Trade-off

Precision and Recall are often inversely related.

*   **Increasing Precision** typically leads to **decreasing Recall**, and vice versa.
*   This is because a model trying to be very precise about its positive predictions might be too conservative, leading to more False Negatives (lowering recall). Conversely, a model trying to capture every possible positive case might incorrectly label some negative cases as positive, leading to more False Positives (lowering precision).

**Key Concept:** **Precision-Recall Curve** - A plot that shows the relationship between precision and recall for different probability thresholds of a classification model. This curve helps visualize the trade-off.

---

## 7. F1-Score

**Definition:** The F1-Score is the harmonic mean of Precision and Recall. It provides a single metric that balances both.

**Formula:**

$$ F1\text{-Score} = 2 \times \frac{\text{Precision} \times \text{Recall}}{\text{Precision} + \text{Recall}} $$

**When to Use:**

*   When you need a single metric that balances both Precision and Recall, especially in **imbalanced datasets**.
*   It is preferred over accuracy when there is a significant class imbalance or when the costs of False Positives and False Negatives are comparable.

**Example:**
If Precision = 0.8 and Recall = 0.67:
$$ F1\text{-Score} = 2 \times \frac{0.8 \times 0.67}{0.8 + 0.67} = 2 \times \frac{0.536}{1.47} \approx 0.73 $$

**Important Point to Remember:**
The F1-Score is high only when both Precision and Recall are high. A model with very high precision but very low recall (or vice versa) will have a low F1-Score.

**Textbook Reference:**
*   **Hands-on Machine Learning with Scikit-Learn, Keras, and TensorFlow by Aurélien Géron (2nd Ed., 2019):** Géron introduces the F1-Score as a useful way to combine precision and recall into a single metric.
*   **Introduction to Machine Learning with Python by Andreas C. Müller & Sarah Guido (2017):** They discuss the F1-Score as a common choice for evaluating models on imbalanced datasets.

---

## 8. Receiver Operating Characteristic (ROC) Curve

**Definition:** The ROC curve is a graphical plot that illustrates the diagnostic ability of a binary classifier system as its discrimination threshold is varied. It plots the **True Positive Rate (Recall)** against the **False Positive Rate (FPR)**.

**Key Concepts:**

*   **True Positive Rate (TPR) / Recall:**  $ \frac{TP}{TP + FN} $ (as defined before)
*   **False Positive Rate (FPR):** The proportion of actual negative instances that were incorrectly predicted as positive.
    $$ \text{FPR} = \frac{FP}{FP + TN} $$
    This means FPR = 1 - True Negative Rate (TNR), where TNR = $\frac{TN}{FP + TN}$.

**How it Works:**

*   Most classifiers can output a probability score for each class.
*   By varying the **probability threshold** (e.g., if probability > 0.5, predict positive; if probability > 0.7, predict positive), you get different combinations of TPR and FPR.
*   The ROC curve plots these TPRs against their corresponding FPRs.

**Interpreting the ROC Curve:**

*   **Ideal Classifier:** A classifier that perfectly separates the classes would have a curve that goes straight up the y-axis to (0,1) and then straight across to (1,1).
*   **Random Classifier:** A classifier that makes random guesses would have a diagonal line from (0,0) to (1,1).
*   **Better Classifier:** A classifier whose curve is closer to the top-left corner is considered better.

**Area Under the ROC Curve (AUC):**

*   **Definition:** AUC is a single scalar value that summarizes the performance of the classifier across all possible thresholds. It represents the probability that the classifier will rank a randomly chosen positive instance higher than a randomly chosen negative instance.
*   **Range:** 0 to 1.
*   **Interpretation:**
    *   AUC = 1: Perfect classifier.
    *   AUC = 0.5: Random classifier.
    *   AUC < 0.5: Classifier performs worse than random.
    *   Generally, AUC > 0.7 is considered acceptable, AUC > 0.8 is good, and AUC > 0.9 is excellent.

**When to Use:**

*   When you want to understand the **trade-off between sensitivity (Recall) and specificity (1-FPR)**.
*   When you need to evaluate classifiers across a range of thresholds.
*   On **imbalanced datasets**, the ROC curve and AUC are generally more reliable than accuracy because they are not affected by the class distribution in the same way accuracy is.

**Textbook Reference:**
*   **Hands-on Machine Learning with Scikit-Learn, Keras, and TensorFlow by Aurélien Géron (2nd Ed., 2019):** Géron dedicates significant attention to ROC curves and AUC in Chapter 3, explaining how to plot them using Scikit-Learn and interpreting their meaning. He emphasizes their utility for imbalanced datasets.
*   **Introduction to Machine Learning with Python by Andreas C. Müller & Sarah Guido (2017):** They also cover ROC curves and AUC, explaining how to use them to compare classifiers and understand their performance at different decision thresholds.

---

## 9. Practice Questions & Exercises

**Question 1:**
A spam classifier predicts 100 emails as spam. Out of these, 90 are actually spam (TP=90), and 10 are not spam (FP=10). The classifier correctly identified 950 out of 960 non-spam emails (TN=950, FN=10).

Calculate:
a) Accuracy
b) Precision
c) Recall
d) F1-Score

**Answer 1:**
*   TP = 90
*   FP = 10
*   TN = 950
*   FN = 10

Total instances = TP + FP + TN + FN = 90 + 10 + 950 + 10 = 1060

a) **Accuracy**: $ \frac{TP + TN}{Total} = \frac{90 + 950}{1060} = \frac{1040}{1060} \approx 0.981 $
b) **Precision**: $ \frac{TP}{TP + FP} = \frac{90}{90 + 10} = \frac{90}{100} = 0.9 $
c) **Recall**: $ \frac{TP}{TP + FN} = \frac{90}{90 + 10} = \frac{90}{100} = 0.9 $
d) **F1-Score**: $ 2 \times \frac{0.9 \times 0.9}{0.9 + 0.9} = 2 \times \frac{0.81}{1.8} = 2 \times 0.45 = 0.9 $

**Question 2:**
Consider a dataset where 95% of instances are class A (negative) and 5% are class B (positive). If a model always predicts class A, what would its accuracy, precision, and recall be? Explain why this is problematic.

**Answer 2:**
Let's assume a dataset of 100 instances:
*   Class A (Negative): 95 instances
*   Class B (Positive): 5 instances

If the model always predicts Class A:
*   TP = 0 (no positive instances predicted as positive)
*   FP = 0 (no negative instances predicted as positive)
*   TN = 95 (all 95 negative instances correctly predicted as negative)
*   FN = 5 (all 5 positive instances incorrectly predicted as negative)

a) **Accuracy**: $ \frac{TP + TN}{Total} = \frac{0 + 95}{100} = 0.95 $ or 95%
b) **Precision**: $ \frac{TP}{TP + FP} = \frac{0}{0 + 0} $ (undefined, or often treated as 0 if TP is 0). In practice, if there are no positive predictions, precision isn't meaningful.
c) **Recall**: $ \frac{TP}{TP + FN} = \frac{0}{0 + 5} = \frac{0}{5} = 0 $ or 0%

**Why this is problematic:**
The accuracy of 95% is very high, making the model appear good. However, its recall is 0%, meaning it completely failed to identify any of the positive instances. This highlights the issue with accuracy on imbalanced datasets; it can hide poor performance on the minority class. Precision is also low (or undefined), indicating it cannot reliably identify positive cases.

**Question 3:**
Imagine you are building a model to detect a rare but very dangerous disease.
*   Would you prioritize **Precision** or **Recall**? Explain your reasoning.
*   What would be the impact on your chosen metric if your model had a high number of False Positives versus a high number of False Negatives?

**Answer 3:**
You would prioritize **Recall**.

**Reasoning:**
In the case of a rare but dangerous disease, the cost of a **False Negative (FN)** is extremely high. A False Negative means the disease was present, but the model failed to detect it, potentially leading to severe health consequences or even death for the patient. Therefore, it is crucial to identify as many true positive cases as possible, even if it means having some False Positives.

*   **High False Positives (FP):** This means the model incorrectly diagnoses a healthy person as having the disease. While this can lead to unnecessary anxiety and further tests for the patient, it is generally less catastrophic than missing a true case.
*   **High False Negatives (FN):** This means the model misses a patient who actually has the disease. This is the scenario we want to avoid at all costs.

By maximizing Recall, we aim to minimize False Negatives, ensuring that most of the actual cases are caught. Precision would be less critical here, as a few healthy individuals being flagged might be acceptable if it means catching all the sick ones.

---

## 10. Important Points to Remember

*   **No single metric is perfect for all situations.** Always consider the problem context and the costs associated with different types of errors.
*   **Accuracy is misleading on imbalanced datasets.** Look at Precision, Recall, F1-Score, and ROC/AUC instead.
*   **Precision** focuses on the correctness of positive predictions (minimizing False Positives).
*   **Recall** focuses on finding all actual positive instances (minimizing False Negatives).
*   **F1-Score** is the harmonic mean of Precision and Recall, providing a balanced measure.
*   **ROC Curve and AUC** are excellent for evaluating a classifier's ability to discriminate between classes across all thresholds, especially on imbalanced data.

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=gI-qXk7XojA) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=F_4HkL5r4n0) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=APPIZ2S8YmY) |


## Further Reading & References:

*   **Géron, A. (2019). *Hands-on Machine Learning with Scikit-Learn, Keras, and TensorFlow* (2nd ed.). O'Reilly.** (Chapters 3)
*   **Müller, A. C., & Guido, S. (2017). *Introduction to Machine Learning with Python*. O'Reilly.** (Chapters relevant to model evaluation)
*   **Theobald, O. (2020). *Machine Learning for Absolute Beginners* (2nd ed.). Independently published.** (Introductory concepts)
*   **Ng, A., & Ma, T. (2023). *CS229 Lecture Notes*. Stanford University.** (Refer to sections on evaluation metrics for advanced understanding).

This comprehensive overview of accuracy, precision, recall, and the ROC curve provides a strong foundation for evaluating classification models. These metrics are fundamental to achieving **CO1** (Analyze and apply supervised techniques) and **CO2** (Develop, train, and optimize classification models).