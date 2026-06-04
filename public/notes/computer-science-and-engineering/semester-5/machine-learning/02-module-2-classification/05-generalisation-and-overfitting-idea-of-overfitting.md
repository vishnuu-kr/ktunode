---
title: "Generalisation and Overfitting - Idea of overfitting"
subject: "MACHINE LEARNING"
module: "Module 2: Classification  "
branch: "Computer Science and Engineering"
semester: 5
topicId: "684162760fc9aa1fdbc8b5b7"
status: "completed"
scrapedAt: "2026-05-20T16:46:32.013Z"
---
# MACHINE LEARNING - Module 2: Classification - Generalisation and Overfitting - Idea of Overfitting

## Introduction

This module delves into the crucial concepts of generalisation and overfitting in the context of classification within machine learning. Understanding these concepts is paramount for building models that perform well not just on the training data, but also on unseen data.  Overfitting, specifically, is a common pitfall that can severely limit the practical application of a machine learning model.

## Learning Outcomes

By the end of this module, you should be able to:

*   Define generalisation and overfitting in the context of classification.
*   Explain the causes and consequences of overfitting.
*   Identify potential signs of overfitting.
*   Distinguish between a model that generalises well and one that is overfitted.
*   Explain how overfitting relates to model complexity.

## 1. Generalisation

*   **Definition:** Generalisation refers to a model's ability to accurately predict the outcome (class label) for *new, unseen data* after having been trained on a specific dataset.  A model that generalises well has learned the underlying patterns and relationships in the data, rather than just memorising the training examples.

*   **Key Idea:**  The goal of machine learning is not simply to perfectly fit the training data, but to build a model that can reliably make predictions on data it has never encountered before.  This is what makes the model useful in real-world applications.

*   **Metrics for Generalisation:**  Common metrics used to evaluate a model's generalisation performance include:

    *   **Accuracy:** The percentage of correctly classified instances in the test set.
    *   **Precision:**  The proportion of true positive predictions among all positive predictions.
    *   **Recall:** The proportion of true positive predictions among all actual positive instances.
    *   **F1-score:**  The harmonic mean of precision and recall.
    *   **AUC-ROC:** Area Under the Receiver Operating Characteristic curve, measures the ability of a classifier to distinguish between classes.

*   **Example:** Imagine training a model to classify images of cats and dogs. If the model achieves 99% accuracy on the training data but only 60% accuracy on a new set of cat and dog images, it suggests poor generalisation.

## 2. Overfitting

*   **Definition:** Overfitting occurs when a machine learning model learns the training data *too well*.  Instead of capturing the underlying patterns, the model memorises the training examples, including the noise and specific characteristics that are unique to that particular dataset.  As a result, the model performs excellently on the training data but poorly on unseen data.

*   **Key Idea:**  An overfitted model has high variance and low bias (explained further below).  It is essentially "too complex" for the data it is trying to model.

*   **Causes of Overfitting:**

    *   **Excessive Model Complexity:** Using a model with too many parameters (e.g., a very deep decision tree, a high-degree polynomial regression, a neural network with too many layers and neurons) relative to the amount of training data.
    *   **Insufficient Training Data:**  When the training dataset is too small to represent the true underlying distribution, the model may learn spurious correlations.
    *   **Noisy Data:**  Presence of irrelevant features or incorrect labels in the training data can lead the model to learn these anomalies.
    *   **Training for Too Long:**  Sometimes, even a well-designed model can start to overfit if trained for an excessive number of epochs.

*   **Consequences of Overfitting:**

    *   **Poor Performance on Unseen Data:** The model fails to generalise to new data, leading to inaccurate predictions in real-world applications.
    *   **High Variance:**  The model's performance fluctuates significantly depending on the specific training data used. A small change in the training data can lead to a drastically different model.
    *   **Inability to Capture Underlying Patterns:**  The model focuses on the noise in the training data, missing the important underlying trends that would allow it to generalise.

*   **Bias-Variance Tradeoff:**

    *   **Bias:**  Refers to the error introduced by approximating a real-world problem, which is often complex, by a simplified model.  A high-bias model makes strong assumptions about the data and may underfit the training data.

    *   **Variance:** Refers to the sensitivity of the model to variations in the training data.  A high-variance model is very flexible and can fit the training data very closely, but it may also overfit.

    *   **Tradeoff:** The goal is to find a model with the right balance of bias and variance.  A model with low bias and low variance is ideal, but in practice, there is often a tradeoff between the two.  Reducing bias can increase variance, and vice versa. Overfitting is characterized by low bias and high variance.

*   **Example:** Consider a dataset of house prices and square footage. An overfitted model might be a high-degree polynomial regression that perfectly fits all the data points in the training set. However, this model would likely make wildly inaccurate predictions for new houses with square footage outside the range of the training data. A linear regression, while not perfectly fitting the training data, is more likely to generalise well because it avoids memorizing every nuance of the training set.

## 3. Identifying Overfitting

*   **Training vs. Validation/Test Performance:**  The most common indicator of overfitting is a significant gap between the model's performance on the training data and its performance on a validation or test dataset.  If the model performs very well on the training data but poorly on the validation/test data, it is likely overfitting.

*   **Learning Curves:**  Plotting the model's performance (e.g., accuracy, loss) on both the training and validation sets as a function of the training data size can reveal overfitting.  If the training error continues to decrease while the validation error plateaus or even increases, it suggests overfitting.

*   **Visual Inspection (for some models):**  For some models, such as decision trees, you can visually inspect the model to see if it is overly complex.  A very deep decision tree with many branches may be overfitting.

*   **Cross-Validation:**  Techniques like k-fold cross-validation can help estimate the model's generalisation performance and detect overfitting.

## 4. Model Complexity and Overfitting

*   **Relationship:** There is a direct relationship between model complexity and the risk of overfitting.  More complex models have more parameters and are therefore capable of fitting the training data more closely. However, this increased flexibility comes at the cost of increased variance and a higher risk of overfitting.

*   **Examples of Model Complexity:**

    *   **Decision Trees:** Tree depth. A deeper tree is more complex.
    *   **Linear Regression:**  Polynomial degree. Higher-degree polynomials are more complex.
    *   **Neural Networks:** Number of layers and neurons per layer. More layers and neurons mean more complexity.
    *   **Support Vector Machines:**  Kernel type and parameters. More complex kernels (e.g., RBF with a small gamma) can lead to overfitting.

## 5. Important Points to Remember

*   **Generalisation is the ultimate goal.** Focus on building models that perform well on unseen data, not just on the training data.
*   **Overfitting is a common problem.** Be aware of the signs of overfitting and take steps to prevent it.
*   **The bias-variance tradeoff is crucial.**  Find a balance between model complexity and generalisation ability.
*   **Validation and test sets are essential.** Use separate datasets to evaluate the model's performance and detect overfitting.

## 6. Practice Questions/Exercises

**Question 1:** What is the difference between generalisation and overfitting?

**Answer:** Generalisation refers to a model's ability to perform well on unseen data, while overfitting refers to a model that performs well on the training data but poorly on unseen data.

**Question 2:** List three causes of overfitting.

**Answer:** Excessive model complexity, insufficient training data, and noisy data.

**Question 3:** How can you identify potential overfitting in a model?

**Answer:** By comparing the model's performance on the training data to its performance on a validation/test dataset.  A large gap in performance suggests overfitting.  Also by observing learning curves (validation error plateaus while training error decreases)

**Question 4:** Explain the relationship between model complexity and overfitting.

**Answer:** More complex models have more parameters and are therefore more likely to overfit the training data.

**Question 5:** You train a model to classify emails as spam or not spam. It achieves 99% accuracy on the training data but only 70% accuracy on a test dataset. Is the model likely to be overfitting? Explain your reasoning.

**Answer:** Yes, the model is likely overfitting. The significant drop in accuracy from the training data to the test data indicates that the model has learned the training data too well and is not generalising well to new, unseen emails.

**Question 6:** You are building a decision tree model. Would a very deep tree or a shallow tree be more prone to overfitting, assuming all other factors are equal? Explain.

**Answer:** A very deep tree would be more prone to overfitting. Deeper trees have more branches and can therefore capture more complex patterns in the training data, including noise and irrelevant details. This can lead to the model memorizing the training data instead of learning the underlying patterns, resulting in poor performance on unseen data.
