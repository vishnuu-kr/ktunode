---
title: "Recall"
subject: "MACHINE LEARNING"
module: "Module 2: Classification  "
branch: "Computer Science and Engineering"
semester: 5
topicId: "684162760fc9aa1fdbc8b5bb"
status: "completed"
scrapedAt: "2026-05-20T16:46:34.809Z"
---
## MACHINE LEARNING - Module 2: Classification - Topic: Recall

**Learning Outcomes:**

*   Understand the definition and importance of Recall in classification.
*   Calculate Recall given a confusion matrix.
*   Explain the trade-off between Recall and Precision.
*   Recognize scenarios where Recall is a critical evaluation metric.
*   Apply Recall in multi-class classification.

**1. Introduction to Recall**

*   **Definition:** Recall, also known as Sensitivity, True Positive Rate (TPR), or Hit Rate, measures the ability of a classification model to find *all* the relevant instances in a dataset.  It answers the question: "Of all the actual positives, how many did the model correctly classify as positive?"

*   **Formula:**

    ```
    Recall = True Positives (TP) / (True Positives (TP) + False Negatives (FN))
    ```

    *   **True Positives (TP):** The number of instances correctly predicted as positive.
    *   **False Negatives (FN):** The number of instances that were actually positive but incorrectly predicted as negative.

*   **Intuition:** Recall focuses on minimizing the number of missed positive instances.  A high recall means the model is good at finding most of the positive cases, even if it incorrectly labels some negative cases as positive.

*   **Importance:** Recall is crucial when the cost of missing a positive instance is very high.

**2. Calculating Recall from a Confusion Matrix**

*   **Confusion Matrix:** A table that summarizes the performance of a classification model by displaying the counts of True Positives (TP), True Negatives (TN), False Positives (FP), and False Negatives (FN).

    ```
                  | Predicted Positive | Predicted Negative |
        ----------|--------------------|--------------------|
        Actual Positive | TP                 | FN                 |
        Actual Negative | FP                 | TN                 |
    ```

*   **Example:** Consider the following confusion matrix for a disease detection model:

    ```
                  | Predicted Positive | Predicted Negative |
        ----------|--------------------|--------------------|
        Actual Positive | 80                 | 20                 |
        Actual Negative | 10                 | 90                 |
    ```

    *   TP = 80
    *   FN = 20
    *   Recall = TP / (TP + FN) = 80 / (80 + 20) = 80 / 100 = 0.8 or 80%

    *   **Interpretation:** The model has a recall of 80%, meaning it correctly identified 80% of the individuals who actually have the disease. 20% of the people who have the disease were missed (False Negatives).

**3. The Trade-off Between Recall and Precision**

*   **Precision:** Measures the accuracy of the positive predictions. It answers the question: "Of all the instances the model predicted as positive, how many were actually positive?"

    ```
    Precision = True Positives (TP) / (True Positives (TP) + False Positives (FP))
    ```

*   **Trade-off:**  Generally, there is an inverse relationship between Recall and Precision.

    *   **Increasing Recall:** To increase recall, you might need to lower the classification threshold. This will lead to more positive predictions (more TPs), but it also increases the number of False Positives (FP), potentially decreasing Precision.
    *   **Increasing Precision:** To increase precision, you might need to raise the classification threshold. This will lead to fewer positive predictions (fewer TPs), but it also decreases the number of False Positives (FP), potentially decreasing Recall.

*   **Visualizing the Trade-off: Precision-Recall Curve (PR Curve)**

    *   Plots Precision against Recall for different threshold values.  Helps visualize the trade-off and choose the best threshold for your specific application.

*   **Example:** Think about email spam filtering.

    *   **High Precision (Low Recall):**  Only mark emails as spam if you're extremely certain.  You'll avoid misclassifying important emails as spam, but some spam might get through to your inbox.
    *   **High Recall (Low Precision):** Mark any email that *might* be spam as spam. You'll catch almost all spam, but some legitimate emails might end up in your spam folder (a major inconvenience).

**4. Scenarios Where Recall is a Critical Evaluation Metric**

*   **Medical Diagnosis (e.g., Cancer Detection):**  Missing a case of cancer (False Negative) is far more dangerous than incorrectly flagging a healthy person as potentially having cancer (False Positive). We need a high recall to ensure we catch as many actual cases as possible, even if it means more follow-up tests for healthy individuals.

*   **Fraud Detection:**  Missing a fraudulent transaction (False Negative) can lead to significant financial losses.  A high recall ensures that most fraudulent activities are identified, even if some legitimate transactions are flagged for review.

*   **Search and Rescue:**  Finding all survivors in a disaster area is crucial.  A high recall is essential to minimize the number of missed survivors, even if it means searching some areas where there are no survivors.

*   **Security Systems (Intrusion Detection):**  Missing an intrusion attempt (False Negative) can compromise the security of the system. A high recall is needed to detect almost all intrusion attempts, even if it results in some false alarms.

**5. Recall in Multi-Class Classification**

*   **Challenge:** In multi-class classification, Recall needs to be calculated for each class separately.

*   **Approaches:**

    *   **One-vs-Rest (OvR) or One-vs-All (OvA):**  Treat each class as positive and all other classes as negative. Calculate Recall for each class independently.  This creates a separate confusion matrix for each class.

    *   **Calculate average Recall:** After calculating individual class Recalls, you can average them to get an overall Recall score.  Common averaging methods include:

        *   **Macro-average:** Calculate the Recall for each class and then average the Recalls equally.
        *   **Weighted-average:** Calculate the Recall for each class and then average the Recalls weighted by the number of instances in each class.

*   **Example:**  Image classification of animals (dog, cat, bird).

    *   You would calculate Recall for the "dog" class (how many actual dog images were correctly identified as dogs).
    *   You would calculate Recall for the "cat" class (how many actual cat images were correctly identified as cats).
    *   You would calculate Recall for the "bird" class (how many actual bird images were correctly identified as birds).
    *   Then, you can average these three Recall values (macro or weighted) to get an overall Recall performance measure for the model.

**6. Practice Questions/Exercises**

*   **Question 1:** A spam detection model has the following confusion matrix:

    ```
                  | Predicted Spam | Predicted Not Spam |
        ----------|----------------|---------------------|
        Actual Spam    | 95            | 5                    |
        Actual Not Spam| 10            | 90                    |
    ```

    Calculate the Recall of the spam detection model.

    **Answer:** Recall = TP / (TP + FN) = 95 / (95 + 5) = 95 / 100 = 0.95 or 95%

*   **Question 2:** Explain why Recall is a more important metric than Precision in a medical diagnosis scenario for a rare, but treatable, disease.

    **Answer:** In this scenario, missing a case of the rare disease (False Negative) has severe consequences, as the patient won't receive the necessary treatment. False Positives, while inconvenient (requiring further testing), are less critical than failing to identify an actual case. Therefore, maximizing Recall (minimizing False Negatives) is paramount.

*   **Question 3:** A multi-class classification model predicts the type of fruit (apple, banana, orange).  The following are the results:

    *   **Apple:** TP = 40, FN = 10
    *   **Banana:** TP = 30, FN = 5
    *   **Orange:** TP = 20, FN = 20

    Calculate the Recall for each class.

    **Answer:**

    *   Apple Recall = 40 / (40 + 10) = 0.8 or 80%
    *   Banana Recall = 30 / (30 + 5) = 0.857 or 85.7%
    *   Orange Recall = 20 / (20 + 20) = 0.5 or 50%

*   **Question 4:** You are building a fraud detection system for credit card transactions. Would you prioritize high Recall or high Precision? Explain your reasoning.

    **Answer:** High Recall would be prioritized. Missing a fraudulent transaction (False Negative) has a direct financial consequence. While flagging legitimate transactions as fraudulent (False Positive) might cause some inconvenience to customers, it is less costly than failing to detect actual fraud. Therefore, a system designed to catch as many fraudulent transactions as possible (high Recall) is preferred, even if it means some false alarms.

**7. Important Points to Remember**

*   **Recall prioritizes finding all positive instances.**
*   **Recall is crucial when the cost of False Negatives is high.**
*   **There is a trade-off between Recall and Precision.**
*   **Recall is calculated using True Positives and False Negatives.**
*   **In multi-class classification, Recall is calculated for each class separately.**
*   **Understanding the specific context of the problem is crucial in deciding whether to prioritize Recall or Precision.**
