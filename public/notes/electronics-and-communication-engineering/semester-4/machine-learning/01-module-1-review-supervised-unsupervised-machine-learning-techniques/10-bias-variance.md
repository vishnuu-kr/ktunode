---
title: "Bias, variance"
subject: "MACHINE LEARNING"
module: "Module 1: Review: supervised, unsupervised machine learning techniques"
branch: "Electronics and Communication Engineering"
semester: 4
topicId: "68a5c45eb09ce205780fe622"
status: "completed"
scrapedAt: "2026-05-23T17:50:12.899Z"
---
# Machine Learning: Module 1 - Review: Supervised, Unsupervised ML Techniques

## Topic: Bias and Variance

### 1. Introduction: The Bias-Variance Trade-off

The goal of supervised machine learning is to build a model that generalizes well to unseen data. This means the model should perform accurately not only on the data it was trained on but also on new, previously unencountered data. The **bias-variance trade-off** is a fundamental concept that helps us understand and diagnose the sources of error in our models.

**Key Concept:** A model's error can be decomposed into three parts:
*   **Bias:** The error introduced by approximating a real-world problem, which may be complex, by a simplified model. It measures how far off the model's predictions are from the true values, on average.
*   **Variance:** The error introduced by the model's sensitivity to small fluctuations in the training dataset. It measures how much the model's predictions would change if it were trained on a different training dataset.
*   **Irreducible Error:** The error inherent in the problem itself (e.g., due to noise in the data). This error cannot be reduced by improving the model.

**Formula for Expected Error:**
For a regression problem, the expected squared error at a point $x$ can be decomposed as:

$E[(y - \hat{f}(x))^2] = \text{Bias}[\hat{f}(x)]^2 + \text{Var}[\hat{f}(x)] + \text{Irreducible Error}$

Where:
*   $y$: The true value.
*   $\hat{f}(x)$: The prediction of our model at point $x$.
*   $E[\cdot]$: The expectation operator.
*   $\text{Bias}[\hat{f}(x)] = E[\hat{f}(x)] - y$: The difference between the average prediction of our model and the true value.
*   $\text{Var}[\hat{f}(x)] = E[(\hat{f}(x) - E[\hat{f}(x)])^2]$: The variance of the model's prediction around its average prediction.

### 2. Understanding Bias

**Definition:** Bias is the error due to erroneous assumptions in the learning algorithm. High bias can cause the learning algorithm to miss relevant relations between features and target outputs.

**Characteristics of High Bias:**
*   **Underfitting:** The model is too simple to capture the underlying patterns in the data.
*   **Poor performance on both training and testing data.**
*   **Large error on the training set.**

**Causes of High Bias:**
*   Using a model that is too simple for the complexity of the problem (e.g., using a linear model for non-linear data).
*   Insufficient number of features.
*   Over-regularization (e.g., too strong L1 or L2 regularization).

**Example:**
Imagine trying to fit a straight line to data that clearly follows a curved pattern (e.g., a parabola). The line will systematically miss the true relationship, leading to high bias.

![High Bias Example](https://i.imgur.com/0e31y7N.png)
*(Illustration: A straight line attempting to fit curved data, showing systematic deviation.)*

### 3. Understanding Variance

**Definition:** Variance is the error introduced by the model's sensitivity to the specific training data. High variance may cause the learning algorithm to learn unwanted patterns that exist only in the training data, and these patterns will not generalize to the test data.

**Characteristics of High Variance:**
*   **Overfitting:** The model learns the training data too well, including its noise and specific idiosyncrasies.
*   **Good performance on training data, but poor performance on testing data.**
*   **Small error on the training set, but large error on the testing set.**

**Causes of High Variance:**
*   Using a model that is too complex for the amount of data available (e.g., a high-degree polynomial for a small dataset).
*   Too many features, especially if they are not relevant.
*   Lack of regularization.

**Example:**
Imagine fitting a very complex, wiggly line through a few data points. The line might perfectly pass through all the training points, but it would likely be wildly incorrect for any new data points that don't fall exactly on that wiggly path.

![High Variance Example](https://i.imgur.com/K5kX3oD.png)
*(Illustration: A highly complex curve fitting through a few data points, highlighting sensitivity to individual points.)*

### 4. The Bias-Variance Trade-off Explained

**The Core Idea:** There is a fundamental tension between bias and variance. As we decrease bias, we often increase variance, and vice versa. The goal is to find a model that achieves a good balance between bias and variance, minimizing the total error.

*   **Simple Models (Low Complexity):** Tend to have high bias and low variance. They are less likely to overfit but may underfit the data.
*   **Complex Models (High Complexity):** Tend to have low bias and high variance. They can capture intricate patterns but are more prone to overfitting.

**Visualizing the Trade-off:**
Consider the expected error curve as a function of model complexity.
*   As complexity increases, bias generally decreases.
*   As complexity increases, variance generally increases.
*   The total error is the sum of bias squared, variance, and irreducible error. This sum often has a "U" shape, with an optimal complexity level that minimizes the total error.

![Bias Variance Tradeoff](https://i.imgur.com/9x5z7j7.png)
*(Illustration: Plot of Bias, Variance, and Total Error vs. Model Complexity. Bias decreases, Variance increases, Total Error has a minimum.)*

**Key Takeaway:** We seek a model that is "just complex enough" to capture the underlying patterns without being so complex that it learns the noise in the training data.

### 5. Diagnosing Bias and Variance

We can diagnose whether a model suffers from high bias or high variance by comparing its performance on the training set versus the validation (or test) set.

| Scenario                 | Training Error | Validation/Test Error | Diagnosis            |
| :----------------------- | :------------- | :-------------------- | :------------------- |
| Low Error (Train)        | Low            | Low                   | Good fit             |
| High Error (Train)       | High           | High                  | High Bias (Underfitting) |
| Low Error (Train)        | Low            | High                  | High Variance (Overfitting) |
| High Error (Train)       | High           | Very High             | High Bias and High Variance |

**Relationship to Learning Curves:**
Learning curves plot the model's performance (e.g., error) on both the training and validation sets as a function of the training dataset size.

*   **High Bias (Underfitting):** Both training and validation errors will be high and converge to a similar high value. Increasing training data won't significantly improve performance.
*   **High Variance (Overfitting):** The training error will be low, while the validation error will be high. There will be a significant gap between the two curves. Increasing training data may help close the gap.

### 6. Strategies to Address Bias and Variance

**Strategies to Reduce High Bias (Underfitting):**

*   **Increase Model Complexity:**
    *   Use more complex algorithms (e.g., switch from linear regression to polynomial regression, or from a shallow neural network to a deeper one).
    *   Add more features to the model (feature engineering).
    *   Decrease regularization strength (if applicable).
*   **Feature Engineering:** Create new features that might better capture the underlying patterns.
*   **Remove irrelevant features:** If you have too many irrelevant features, they might be obscuring the signal.

**Strategies to Reduce High Variance (Overfitting):**

*   **Increase Training Data:** More data helps the model generalize better and learn the true patterns rather than noise. This is often the most effective solution.
*   **Simplify the Model:**
    *   Use less complex algorithms.
    *   Reduce the number of features (feature selection).
    *   Use fewer hidden units or layers in neural networks.
*   **Regularization:**
    *   **L1/L2 Regularization:** Adds a penalty term to the loss function based on the magnitude of the model's weights. This discourages large weights, leading to smoother models. (Mentioned in Geron Ch 3, 11).
    *   **Dropout:** Randomly deactivates neurons during training in neural networks, forcing the network to learn more robust representations. (Mentioned in Ekman Ch 7).
    *   **Early Stopping:** Monitor the validation error during training and stop training when the validation error starts to increase, even if the training error is still decreasing. (Mentioned in Geron Ch 11).
*   **Data Augmentation:** Artificially increase the size of the training dataset by creating modified copies of existing data (e.g., rotating images, adding noise).

### 7. Relationship to Supervised Learning Techniques (CO1, CO2)

The bias-variance trade-off is central to selecting, building, and tuning models in supervised learning.

*   **Regression Models:**
    *   **Linear Regression:** Tends to have high bias (if the true relationship is non-linear) and low variance.
    *   **Polynomial Regression:** Can have lower bias but higher variance, especially for high-degree polynomials.
    *   **Decision Trees (Regression):** Can easily overfit (high variance) if not pruned.
    *   **Support Vector Machines (SVMs) with different kernels:** The complexity of the kernel (e.g., linear vs. RBF) affects the bias-variance trade-off. RBF kernel with a large gamma and small C can lead to high variance.
    *   **Neural Networks:** The number of layers, neurons, and activation functions significantly impacts bias and variance. Deep networks can have low bias but are prone to high variance if not regularized properly.

*   **Classification Models:**
    *   **Logistic Regression:** Similar to linear regression, can have high bias for non-linearly separable data.
    *   **k-Nearest Neighbors (k-NN):**
        *   Small `k` (e.g., k=1): Low bias, high variance (sensitive to training data).
        *   Large `k`: High bias, low variance (smoother decision boundary).
    *   **Decision Trees (Classification):** Prone to overfitting (high variance) if allowed to grow deep.
    *   **Ensemble Methods (e.g., Random Forests, Gradient Boosting):** Generally help reduce variance by combining multiple models, often leading to a better bias-variance balance. Random Forests, for example, decorrelates trees to reduce variance. (Mentioned in Geron Ch 7).

### 8. Important Points to Remember

*   **Bias vs. Variance is a Trade-off:** You cannot optimize both simultaneously.
*   **Underfitting = High Bias:** Model is too simple.
*   **Overfitting = High Variance:** Model is too complex for the data.
*   **Diagnose by comparing training and validation errors.** A large gap indicates high variance. High errors on both indicate high bias.
*   **More data is often the best solution for high variance.**
*   **Regularization is a powerful technique to combat high variance.**
*   **Model complexity is a key factor influencing both bias and variance.**

### 9. Practice Questions and Exercises

**Question 1:**
A machine learning model achieves very low error on its training data but a significantly higher error on its test data. What is the most likely problem with this model?
A) High bias
B) High variance
C) Irreducible error
D) Underfitting

**Answer:** B) High variance
**Explanation:** Low training error and high test error indicate that the model has learned the training data too well, including its noise, and fails to generalize to new data. This is the hallmark of overfitting, which is caused by high variance.

**Question 2:**
Consider a scenario where you are trying to predict house prices using a linear regression model. However, the true relationship between house size and price is non-linear (e.g., prices increase at a faster rate for larger houses).
a) Would this model likely suffer from high bias or high variance? Explain why.
b) What are two ways you could potentially reduce the bias in this model?

**Answer:**
a) This model would likely suffer from **high bias**.
**Explanation:** A linear regression model assumes a linear relationship between features and the target. If the true relationship is non-linear, the linear model is too simple to capture the underlying pattern. This mismatch between the model's assumptions and the data's true structure leads to a systematic error, i.e., high bias. It will underfit the data.

b) Two ways to reduce bias:
1.  **Increase model complexity:** Replace the linear regression with a non-linear model, such as **polynomial regression**. This would allow the model to capture the curved relationship between house size and price.
2.  **Feature Engineering:** Create a new feature that represents a non-linear transformation of the existing feature. For example, if the non-linearity is quadratic, you could add a feature like "house\_size\_squared" to the model.

**Question 3:**
You are training a very deep neural network with millions of parameters on a small dataset of images. After training, you observe that the network achieves 99% accuracy on the training set but only 60% accuracy on a held-out validation set.
a) What is the primary issue with this model?
b) Suggest three techniques you could use to address this issue.

**Answer:**
a) The primary issue with this model is **high variance** (overfitting).
**Explanation:** The extremely high accuracy on the training set (99%) suggests the model has memorized the training data. The significantly lower accuracy on the validation set (60%) shows it does not generalize well to unseen data. This large gap between training and validation performance is characteristic of overfitting due to high variance. The model is too complex (deep network with many parameters) for the limited amount of data.

b) Three techniques to address high variance:
1.  **Increase Training Data:** Obtain a larger dataset of images. More data helps the model learn more robust patterns and reduces its reliance on specific training examples.
2.  **Regularization:** Apply regularization techniques such as:
    *   **L1 or L2 Regularization:** Add a penalty to the loss function based on the magnitude of the weights.
    *   **Dropout:** Randomly drop out a percentage of neurons during training.
    *   **Batch Normalization:** Can have a regularizing effect.
3.  **Simplify the Model:** Reduce the complexity of the neural network by:
    *   **Reducing the number of layers.**
    *   **Reducing the number of neurons per layer.**
4.  **Data Augmentation:** Artificially increase the size and diversity of the training dataset by applying transformations like rotations, flips, zooms, and color jittering to existing images.
5.  **Early Stopping:** Monitor the validation accuracy (or loss) during training and stop training when the validation performance begins to degrade, even if the training performance is still improving.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=gI-qXk7XojA) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=M0mx8S05v60) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=APPIZ2S8YmY) |


### 10. References and Further Reading

*   **Hands-on Machine Learning with Scikit-Learn, Keras, and TensorFlow by Aurélien Géron (Chapter 2, Chapter 11):** Discusses model evaluation, the bias-variance trade-off, and regularization techniques like L1/L2, dropout, and early stopping in detail.
*   **Introduction to Machine Learning with Python by Andreas C. Müller & Sarah Guido (Chapter 3, Chapter 5):** Explains model evaluation, cross-validation, and how different algorithms inherently have different bias-variance characteristics.
*   **CS229 Lecture Notes by Andrew Ng and Tengyu Ma (Section 3):** Provides a more theoretical and mathematical treatment of the bias-variance decomposition and its implications.

This concludes the notes on Bias and Variance. Understanding this trade-off is crucial for building effective and generalizable machine learning models.