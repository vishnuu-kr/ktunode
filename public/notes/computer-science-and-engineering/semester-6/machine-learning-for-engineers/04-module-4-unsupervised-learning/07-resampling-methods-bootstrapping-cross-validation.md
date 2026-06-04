---
title: "Resampling methods  - Bootstrapping, Cross Validation."
subject: "MACHINE LEARNING FOR ENGINEERS"
module: "Module 4: Unsupervised Learning"
branch: "Computer Science and Engineering"
semester: 6
topicId: "684162780fc9aa1fdbc8bf5f"
status: "completed"
scrapedAt: "2026-05-20T16:55:12.601Z"
---
# Machine Learning for Engineers - Module 4: Unsupervised Learning

## Topic: Resampling Methods - Bootstrapping and Cross-Validation

---

### 1. Introduction to Resampling Methods

Resampling methods are techniques used to estimate the performance and variability of a machine learning model by repeatedly drawing samples from the original dataset. They are crucial for:

*   **Estimating Model Performance:** Providing a more robust and reliable estimate of how a model will perform on unseen data.
*   **Assessing Model Uncertainty:** Quantifying the variability of model performance due to the specific sample of data used for training.
*   **Model Selection:** Helping choose the best model among several candidates.
*   **Hyperparameter Tuning:** Optimizing the parameters of a model.

While typically discussed in the context of supervised learning for performance evaluation, the underlying principles of resampling are valuable in understanding model behavior even in unsupervised learning contexts, especially when evaluating clustering quality or other unsupervised metrics.

---

### 2. Bootstrapping

**2.1. Key Concepts and Definitions:**

*   **Bootstrap Sample:** A sample created by drawing observations from the original dataset *with replacement*. This means an observation can be selected multiple times in a single bootstrap sample, and some observations from the original dataset might not be selected at all.
*   **Bagging (Bootstrap Aggregating):** A general ensemble method that uses bootstrapping to create multiple training datasets. A model is trained on each bootstrap sample, and their predictions are combined (e.g., by averaging for regression or majority voting for classification) to improve accuracy and reduce variance.
*   **Bootstrap Estimate of Variance:** By training a model on multiple bootstrap samples, we can estimate the variance of model parameters or performance metrics. This helps understand the stability of the model.

**2.2. How Bootstrapping Works:**

1.  **Original Dataset:** You have a dataset of size $N$.
2.  **Create Bootstrap Samples:** Generate $B$ (a large number, e.g., 100, 1000) new datasets, each of size $N$, by sampling *with replacement* from the original dataset.
3.  **Train Models:** Train an identical model on each of the $B$ bootstrap samples.
4.  **Aggregate Results:**
    *   **For Performance Estimation:** You can apply each trained model to the data points *not* included in its respective bootstrap sample (out-of-bag samples). Average the performance across all out-of-bag predictions.
    *   **For Parameter Estimation:** Calculate the parameter of interest (e.g., mean, regression coefficient) for each of the $B$ models. The distribution of these $B$ values can be used to estimate the mean and variance of the parameter.

**2.3. Examples:**

*   **Estimating the Mean of a Parameter:** Suppose we want to estimate the mean of a parameter $\theta$ from a dataset. We can create many bootstrap samples, calculate the mean for each sample, and then compute the mean and standard deviation of these bootstrap means. The standard deviation of the bootstrap means is an estimate of the standard error of the mean.
*   **Bagging for Regression:** Train multiple regression models (e.g., decision trees) on different bootstrap samples of the training data. To predict a new data point, average the predictions from all the individual models. This often reduces overfitting compared to a single model.
*   **Bootstrapping in Unsupervised Learning (Conceptual):** Imagine you have a clustering algorithm. You could bootstrap your dataset, run the clustering algorithm on each bootstrap sample, and then compare the resulting cluster assignments across the bootstrapped runs. This could give you an idea of the stability of your clusters. For instance, you could measure how often a data point is assigned to the same cluster across different bootstrap samples.

**2.4. Advantages of Bootstrapping:**

*   **Simple to implement.**
*   **Requires no strong assumptions about the underlying data distribution.**
*   **Effective for estimating variance and confidence intervals.**
*   **Forms the basis of powerful ensemble methods like Bagging.**

**2.5. Disadvantages of Bootstrapping:**

*   **Can be computationally intensive** due to training multiple models.
*   **Less efficient than other methods for estimating the bias-variance trade-off directly** when compared to techniques like cross-validation, especially for model selection.

---

### 3. Cross-Validation

Cross-validation is a more systematic approach to estimate model performance by partitioning the dataset into multiple subsets (folds).

**3.1. Key Concepts and Definitions:**

*   **Training Set:** The portion of the data used to train the model.
*   **Validation Set (or Test Set):** The portion of the data used to evaluate the model's performance.
*   **Fold:** A subset of the dataset.
*   **k-Fold Cross-Validation:** The dataset is randomly divided into $k$ equal-sized folds. The model is trained $k$ times. In each iteration, one fold is used as the validation set, and the remaining $k-1$ folds are combined to form the training set.
*   **Leave-One-Out Cross-Validation (LOOCV):** A special case of k-fold cross-validation where $k$ is equal to the number of observations in the dataset ($N$). Each observation is used as a validation set once.
*   **Stratified k-Fold Cross-Validation:** Used for classification problems with imbalanced classes. It ensures that each fold maintains the same proportion of classes as the original dataset.
*   **Time Series Cross-Validation:** For time-series data, the data must be split chronologically to avoid data leakage. The training data must always precede the validation data.

**3.2. How k-Fold Cross-Validation Works:**

1.  **Partition Data:** Divide the dataset of size $N$ into $k$ folds (e.g., $k=5$ or $k=10$).
2.  **Iterate through Folds:** For $i = 1, \dots, k$:
    *   **Training Set:** Use folds $1, \dots, i-1, i+1, \dots, k$.
    *   **Validation Set:** Use fold $i$.
    *   **Train Model:** Train the model on the training set.
    *   **Evaluate Model:** Evaluate the model on the validation set and record the performance metric (e.g., accuracy, MSE).
3.  **Average Performance:** Calculate the average of the performance metrics recorded in each iteration. This average is the cross-validation performance estimate.

**3.3. Examples:**

*   **5-Fold Cross-Validation for Regression:**
    *   Dataset size: 1000 samples.
    *   $k=5$.
    *   Divide data into 5 folds, each with 200 samples.
    *   **Fold 1 (Validation):** Train on Folds 2, 3, 4, 5; Evaluate on Fold 1.
    *   **Fold 2 (Validation):** Train on Folds 1, 3, 4, 5; Evaluate on Fold 2.
    *   ...
    *   **Fold 5 (Validation):** Train on Folds 1, 2, 3, 4; Evaluate on Fold 5.
    *   The final performance is the average of the 5 evaluation scores.
*   **Stratified 5-Fold CV for Classification:** If a dataset has 70% class A and 30% class B, a stratified 5-fold CV would ensure each of the 5 folds has approximately 70% class A and 30% class B.
*   **Hyperparameter Tuning (e.g., choosing regularization strength in Ridge Regression):**
    *   Try different values for the regularization parameter $\alpha$.
    *   For each $\alpha$, perform 5-fold CV.
    *   Select the $\alpha$ that yields the best average CV performance.

**3.4. Advantages of Cross-Validation:**

*   **Provides a more reliable estimate of model performance** than a single train-test split, as it uses all data for both training and validation.
*   **Less prone to the specific characteristics of a single train-test split.**
*   **Effective for model selection and hyperparameter tuning.**

**3.5. Disadvantages of Cross-Validation:**

*   **Computationally expensive:** The model needs to be trained $k$ times.
*   **LOOCV can be extremely computationally expensive** for large datasets.
*   **Not suitable for time-series data without modification.**
*   **Can still exhibit variance in the performance estimate** depending on how the folds are split (though less than a single split).

---

### 4. Relationship and Choice between Bootstrapping and Cross-Validation

*   **Bootstrapping** is excellent for estimating the **variance** of a statistic or model parameter and forms the basis for **ensemble methods** like Bagging. It's less directly used for systematic model selection or hyperparameter tuning in the same way cross-validation is.
*   **Cross-Validation** is primarily used for **performance estimation**, **model selection**, and **hyperparameter tuning**. It provides a more direct measure of how a model is likely to perform on unseen data.

**When to Use Which:**

*   **To estimate the uncertainty/variability of a model's coefficients or performance metrics:** Bootstrapping.
*   **To build robust ensemble models (like Random Forests):** Bootstrapping is fundamental.
*   **To compare different models and select the best one:** Cross-validation.
*   **To find the optimal hyperparameters for a single model:** Cross-validation.
*   **For very small datasets where you want to maximize training data usage:** LOOCV can be considered, but beware of computational cost.

---

### 5. Practice Questions and Exercises

**Question 1:**

What is the primary difference between sampling with replacement and sampling without replacement in the context of creating bootstrap samples?

**Answer 1:**

Sampling *with replacement* means that an observation can be selected multiple times in a single bootstrap sample, and some original observations might not be selected. Sampling *without replacement* means each observation can be selected at most once.

---

**Question 2:**

You are evaluating a logistic regression model for a binary classification task. You have a dataset of 1000 samples.
a) Describe how you would perform 10-fold cross-validation for this model.
b) What is the main advantage of using cross-validation over a single train-test split?

**Answer 2:**

a)
1.  **Partition:** Divide the 1000 samples into 10 equally sized folds (100 samples each).
2.  **Iterate:** For each fold $i$ from 1 to 10:
    *   Use fold $i$ as the validation set (100 samples).
    *   Use the remaining 9 folds (900 samples) as the training set.
    *   Train the logistic regression model on the 900 training samples.
    *   Evaluate the model on the 100 validation samples using a chosen metric (e.g., accuracy, F1-score). Record this score.
3.  **Average:** Calculate the average of the 10 recorded scores. This is the 10-fold cross-validation performance estimate.

b) The main advantage is that cross-validation provides a more reliable and robust estimate of the model's performance on unseen data. This is because it uses all data points for both training and validation across different iterations, reducing the impact of the specific random split in a single train-test split.

---

**Question 3:**

Which resampling method is most suitable for creating ensemble models like Random Forests? Explain why.

**Answer 3:**

Bootstrapping is most suitable for creating ensemble models like Random Forests. This is because bootstrapping creates multiple, slightly different training datasets by sampling with replacement. These datasets are then used to train individual models (e.g., decision trees in Random Forests). The aggregation of predictions from these diverse models helps to reduce variance and improve overall accuracy.

---

**Question 4:**

Consider a scenario where you want to estimate the standard error of a complex model's prediction for a single data point. Which resampling method would you primarily use for this task?

**Answer 4:**

Bootstrapping would be primarily used for this task. By repeatedly drawing bootstrap samples from the original data, training the model on each, and then making predictions for the specific data point on each bootstrapped model, you can obtain a distribution of predictions for that point. The standard deviation of this distribution serves as an estimate of the standard error of the prediction.

---

### 6. Important Points to Remember

*   **Resampling = Performance Estimation + Uncertainty Assessment.**
*   **Bootstrapping:** Sample *with replacement*. Key for **variance estimation** and **ensemble methods** (Bagging, Random Forests).
*   **Cross-Validation:** Partitions data into **folds**. Key for **model selection** and **hyperparameter tuning**.
*   **k-Fold CV:** Train $k$ times, using 1 fold for validation and $k-1$ for training.
*   **Stratified CV:** Essential for classification with **imbalanced classes**.
*   **Time Series CV:** Requires **chronological splitting** to prevent data leakage.
*   **Computational Cost:** Both methods can be computationally intensive, especially LOOCV.
*   **Goal Dictates Method:** Choose the resampling technique based on whether your primary goal is to estimate variance, build ensembles, or select models/hyperparameters.
