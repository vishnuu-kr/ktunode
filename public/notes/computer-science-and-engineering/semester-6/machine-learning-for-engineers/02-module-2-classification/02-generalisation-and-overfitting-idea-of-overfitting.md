---
title: "Generalisation and Overfitting  - Idea of overfitting"
subject: "MACHINE LEARNING FOR ENGINEERS"
module: "Module 2: Classification  "
branch: "Computer Science and Engineering"
semester: 6
topicId: "684162780fc9aa1fdbc8bf4d"
status: "completed"
scrapedAt: "2026-05-20T16:55:01.149Z"
---
# MACHINE LEARNING FOR ENGINEERS - Module 2: Classification

## Topic: Generalisation and Overfitting - The Idea of Overfitting

This module delves into a fundamental challenge in machine learning: ensuring our models learn from data in a way that allows them to perform well on *new, unseen data*. We'll focus on understanding the concept of overfitting, a common pitfall that hinders this goal.

### Learning Outcomes

By the end of this topic, you should be able to:

*   **Define** the concept of overfitting in the context of machine learning classification.
*   **Explain** why overfitting occurs.
*   **Differentiate** between fitting the training data well and achieving good generalization.
*   **Identify** common symptoms or indicators of overfitting.
*   **Understand** the relationship between model complexity and overfitting.
*   **Recognize** the importance of evaluating model performance on unseen data.

---

### 1. Key Concepts and Definitions

#### 1.1 Generalisation

*   **Definition:** Generalisation is the ability of a machine learning model to perform well on new, unseen data that it was not trained on. A well-generalised model has learned the underlying patterns and relationships in the data, rather than simply memorizing the training examples.
*   **Goal:** The ultimate goal of most machine learning tasks is to achieve good generalisation. We build models to make predictions on future data, not just to perform well on the data we've already seen.

#### 1.2 Overfitting

*   **Definition:** Overfitting occurs when a machine learning model learns the training data *too well*. Instead of capturing the underlying patterns, it starts to learn the noise and specific idiosyncrasies of the training set.
*   **Analogy:** Imagine a student who memorizes every single answer to a practice exam. They might ace that practice exam, but if the actual exam has slightly different questions or phrasing, they'll likely struggle because they didn't truly understand the concepts. Similarly, an overfit model "memorizes" the training data.
*   **Consequence:** An overfit model will perform exceptionally well on the training data but poorly on new, unseen data (the test or validation set). This is because the noise it has learned doesn't exist in the new data.

#### 1.3 The Bias-Variance Trade-off (Introduction)

*   **Concept:** Overfitting is closely related to the bias-variance trade-off, a fundamental concept in machine learning.
    *   **Bias:** Bias refers to the simplifying assumptions made by a model to make the target function easier to learn. High bias models tend to underfit the data (too simple).
    *   **Variance:** Variance refers to the amount by which the model's prediction would change if we trained it on a different training dataset. High variance models tend to overfit the data (too complex, sensitive to training data fluctuations).
*   **Relationship:**
    *   **Underfitting:** High Bias, Low Variance. The model is too simple to capture the underlying patterns.
    *   **Overfitting:** Low Bias, High Variance. The model is too complex and sensitive to the training data, including its noise.
    *   **Good Fit:** A balance between bias and variance, leading to good generalisation.

#### 1.4 Training, Validation, and Test Sets

*   **Training Set:** The data used to train the machine learning model. The model learns its parameters from this data.
*   **Validation Set:** A separate dataset used to tune hyperparameters of the model and to get an unbiased estimate of its performance *during* training. This helps detect overfitting early.
*   **Test Set:** A completely unseen dataset used *only once* at the very end to evaluate the final performance of the trained model. This provides the most reliable estimate of generalisation.

---

### 2. Why Does Overfitting Occur?

Overfitting can arise from several factors:

*   **Model Complexity:**
    *   **High Complexity:** Using a model that is too complex for the amount of data available. For instance, a very deep decision tree or a high-degree polynomial regression.
    *   **Too Many Features:** Using a large number of features, especially if many are irrelevant or noisy. The model might find spurious correlations in the training data.

*   **Insufficient Training Data:**
    *   **Small Dataset:** When the training dataset is too small, the model may not have enough examples to learn the true underlying patterns. It can easily latch onto noise.

*   **Noisy Data:**
    *   **Errors and Outliers:** If the training data contains errors, incorrect labels, or outliers, an overfit model will try to accommodate these noisy points, mistaking them for real patterns.

*   **Excessive Training Time (for iterative models):**
    *   **Uncontrolled Iterations:** For iterative algorithms like gradient descent (used in neural networks), training for too many epochs can lead to the model becoming overly specialized to the training data.

---

### 3. Differentiating Fitting Training Data vs. Generalisation

This is a crucial distinction:

*   **Fitting Training Data Well:**
    *   **Characteristics:** Low error on the training set, often reaching very low values (e.g., 0% error). The model's predictions closely match the training labels.
    *   **Indicator:** This is *not* necessarily a sign of a good model. It could be a sign of overfitting.

*   **Achieving Good Generalisation:**
    *   **Characteristics:** Low error on unseen data (validation or test sets). The model's predictions on new data are accurate.
    *   **Indicator:** The model has learned the underlying patterns and can apply them to new situations.

---

### 4. Symptoms of Overfitting

How do we know if our model is overfitting?

*   **Large Gap between Training and Validation/Test Error:**
    *   **Observation:** The model achieves very high accuracy (or very low error) on the training data but significantly lower accuracy (or higher error) on the validation or test data.
    *   **Example:**
        *   Training Accuracy: 99%
        *   Validation Accuracy: 70%
        *   This large drop indicates overfitting.

*   **Learning Curves:**
    *   **Concept:** Plotting the model's performance (e.g., accuracy or error) on both the training and validation sets against the number of training epochs or the amount of training data.
    *   **Overfitting Pattern:**
        *   The training error/loss continues to decrease.
        *   The validation error/loss starts to increase after a certain point.
        *   The gap between the two curves widens.

    *   **Visual Representation:**
        ```
        ^ Performance
        |
        |   /-------\  (Validation Error)
        |  /         \
        | /           \
        |/-------------\  (Training Error)
        +----------------> Training Progress (e.g., Epochs)
        ```
        The point where validation error starts increasing is the onset of overfitting.

*   **Model is Too Complex:**
    *   **Observation:** Using highly complex models (e.g., very deep neural networks, decision trees with many splits) when simpler models might suffice.
    *   **Indicator:** If a simple linear model performs reasonably well, a highly complex, non-linear model might be overfitting.

---

### 5. Model Complexity and Overfitting

*   **Relationship:** There's a direct relationship between model complexity and the risk of overfitting.
    *   **Simple Models:** Tend to have high bias and low variance. They might underfit if they are too simple.
    *   **Complex Models:** Tend to have low bias and high variance. They are more prone to overfitting.

*   **Example: Decision Trees**
    *   **Simple Decision Tree (Shallow):** High bias, low variance. Might underfit if it doesn't capture enough detail.
    *   **Complex Decision Tree (Deep):** Low bias, high variance. Can perfectly fit the training data by creating a leaf node for almost every training example, leading to overfitting.

    *   **Visualizing Overfitting in Decision Trees:**
        Imagine classifying emails as spam or not spam.
        *   **Underfit Tree:** Only uses a few basic rules (e.g., "if contains 'viagra' then spam"). Might misclassify many legitimate emails.
        *   **Overfit Tree:** Has thousands of rules, including those based on specific sender names that only appeared once in the training data, or specific punctuation patterns that were accidental. It will correctly classify all training emails but fail on new emails.

*   **Example: Polynomial Regression**
    *   **Linear Regression (Degree 1):** Low complexity, might underfit noisy data.
    *   **Quadratic Regression (Degree 2):** Medium complexity, might capture general trend.
    *   **High-Degree Polynomial Regression (e.g., Degree 10):** High complexity. Can perfectly fit all training points, even noisy ones, leading to wild fluctuations and poor performance on new data.

    *   **Visualizing Overfitting in Polynomial Regression:**
        Imagine fitting a curve to scattered data points.
        *   **Degree 1 (Line):** Misses the underlying curve.
        *   **Degree 2 (Parabola):** Might capture the general curve.
        *   **Degree 10:** Wiggles excessively to pass through every single data point, including outliers.

---

### 6. Importance of Evaluating on Unseen Data

*   **Why it matters:** The only way to truly assess how well a model will perform in the real world is to evaluate it on data it has never encountered during training.
*   **Role of Validation/Test Sets:**
    *   **Validation Set:** Used to monitor performance during training and adjust hyperparameters to prevent overfitting.
    *   **Test Set:** Provides the final, unbiased evaluation of the model's generalisation capability.

---

### Practice Questions & Exercises

1.  **Definition:** Briefly define overfitting in your own words.
2.  **Scenario:** A student builds a highly complex neural network for image classification. They achieve 100% accuracy on their training set. When they test it on a new set of images, the accuracy drops to 60%.
    *   Is this model likely overfitting, underfitting, or well-generalized? Explain your reasoning.
3.  **Identify the Symptom:** What is the primary indicator of overfitting when comparing performance metrics on the training set versus the validation/test set?
4.  **Model Complexity:** Explain the relationship between model complexity and the risk of overfitting.
5.  **Learning Curve:** Describe the characteristic shape of the learning curves (training loss vs. validation loss) when a model is overfitting.

---

### Answers to Practice Questions

1.  **Definition:** Overfitting is when a machine learning model learns the training data too well, including its noise and specific details, leading to poor performance on new, unseen data. The model memorizes the training data instead of learning the general patterns.
2.  **Scenario:** The model is likely **overfitting**. The 100% accuracy on the training set suggests it has learned the training data very thoroughly. The significant drop to 60% accuracy on new data indicates it hasn't generalized well and has likely learned noise or specific examples from the training set that are not present in the new data.
3.  **Identify the Symptom:** The primary symptom of overfitting is a **large gap between the training performance (e.g., accuracy, low error) and the validation/test performance (e.g., lower accuracy, high error)**. The model performs much better on the data it was trained on than on new data.
4.  **Model Complexity:** More complex models (e.g., those with more parameters, deeper trees, higher-degree polynomials) have a higher capacity to fit the training data perfectly. This increased capacity makes them more susceptible to learning noise and specific data points rather than generalizable patterns, thus increasing the risk of overfitting. Simpler models, while potentially underfitting, are generally less prone to overfitting.
5.  **Learning Curve:** When a model is overfitting, the learning curves typically show:
    *   **Training Loss:** Continues to decrease steadily throughout training.
    *   **Validation Loss:** Decreases initially but then starts to **increase** after a certain point in training.
    *   The **gap between the training loss and validation loss widens** as training progresses beyond the optimal point.

---

### Important Points to Remember

*   **The goal is generalization, not just fitting the training data.**
*   **Overfitting = High performance on training data, low performance on unseen data.**
*   **Key causes:** Model complexity, insufficient data, noisy data.
*   **Main symptom:** A significant difference (gap) between training and validation/test performance.
*   **Model complexity is a double-edged sword:** Too simple leads to underfitting, too complex leads to overfitting.
*   **Always evaluate on unseen data** (validation/test sets) to understand true generalisation.
*   **Learning curves are powerful tools** for diagnosing overfitting.
