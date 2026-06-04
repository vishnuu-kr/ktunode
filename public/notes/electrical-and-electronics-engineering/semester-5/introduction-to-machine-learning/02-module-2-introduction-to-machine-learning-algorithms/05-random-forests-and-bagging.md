---
title: "random forests, and bagging"
subject: "INTRODUCTION TO MACHINE LEARNING"
module: "Module 2: Introduction to machine learning algorithms "
branch: "Electrical and Electronics Engineering"
semester: 5
topicId: "68a200862b85456187f3642f"
status: "completed"
scrapedAt: "2026-05-23T16:22:22.419Z"
---
# Introduction to Machine Learning: Module 2 - Introduction to Machine Learning Algorithms

## Topic: Random Forests and Bagging

This module delves into ensemble learning techniques, specifically focusing on Bagging and its powerful extension, Random Forests. These methods are crucial for improving the performance and robustness of machine learning models.

### Learning Outcomes Covered:

*   Understand the principles of ensemble learning, particularly bagging.
*   Learn how Random Forests build upon bagging for enhanced performance.
*   Identify the advantages and disadvantages of using Random Forests.
*   Understand the role of hyperparameters in Random Forests.
*   Implement and evaluate Random Forests using Python libraries.

---

### 1. Ensemble Learning: The Power of Collective Wisdom

Ensemble learning is a machine learning paradigm where multiple models are combined to achieve better predictive performance than any single model could achieve on its own. The core idea is that a diverse set of models, when combined intelligently, can reduce variance, bias, or both.

**Key Concepts:**

*   **Wisdom of the Crowds:** Analogous to how a group's collective judgment is often more accurate than an individual's, ensemble methods leverage the diversity of multiple models.
*   **Reducing Variance:** Individual models might be prone to overfitting the training data. By averaging or voting across multiple models trained on different subsets of data or with different features, the overall variance of the prediction is reduced.
*   **Reducing Bias:** While less common than variance reduction, some ensemble methods can also help in reducing bias.
*   **Diversity:** The effectiveness of an ensemble depends on the diversity of its base learners. If all base learners make the same errors, the ensemble will not improve.

**Reference:**

*   **The Elements of Statistical Learning (Hastie, Tibshirani, Friedman):** Chapter 10 (Ensembles) provides a comprehensive theoretical foundation for ensemble methods, including bagging and boosting.

---

### 2. Bagging (Bootstrap Aggregating)

Bagging is one of the simplest and most effective ensemble techniques. It aims to reduce the variance of a model by training multiple instances of the same base learner on different subsets of the training data, created through bootstrapping.

**Key Concepts:**

*   **Bootstrap Sampling:** This is the core of bagging. It involves creating multiple training datasets by randomly sampling from the original training dataset *with replacement*. Each bootstrap sample has the same size as the original dataset.
    *   **With Replacement:** When an instance is selected for a bootstrap sample, it is put back into the original dataset, allowing it to be selected again. This means some instances may appear multiple times in a bootstrap sample, while others may not appear at all (these are called "out-of-bag" or OOB samples).
*   **Base Learner:** Bagging can be applied to various base learning algorithms, but it is most effective with unstable learners (learners whose output changes significantly with small changes in the training data), such as decision trees.
*   **Aggregation:** After training multiple base learners on the bootstrap samples, their predictions are combined.
    *   **Regression:** The predictions are typically averaged.
    *   **Classification:** The predictions are combined through majority voting.

**How it Works (Steps):**

1.  **Create Bootstrap Samples:** Generate $B$ bootstrap samples from the original training dataset $D$. Each bootstrap sample $D_i$ ($i=1, \dots, B$) is created by sampling $N$ instances from $D$ with replacement, where $N$ is the size of $D$.
2.  **Train Base Learners:** Train $B$ instances of the same base learning algorithm (e.g., decision tree) on each bootstrap sample $D_i$. Let these models be $M_i$.
3.  **Aggregate Predictions:** For a new, unseen data point $x$:
    *   **Regression:** Predict $y$ as the average of the predictions from all base learners: $\hat{y} = \frac{1}{B} \sum_{i=1}^B M_i(x)$.
    *   **Classification:** Predict the class label as the one that receives the most votes from the base learners: $\hat{y} = \text{mode}(M_1(x), M_2(x), \dots, M_B(x))$.

**Advantages of Bagging:**

*   **Reduces Variance:** Significantly reduces overfitting by averaging or voting across multiple models.
*   **Improves Stability:** Makes the model less sensitive to noisy data or specific data points.
*   **Simple to Implement:** Straightforward concept to apply.
*   **Can be Parallelized:** Training of base learners can be done independently.

**Disadvantages of Bagging:**

*   **Does not reduce Bias:** If the base learner is consistently biased, bagging won't fix it.
*   **Increased Computational Cost:** Training multiple models takes more time and resources.
*   **Loss of Interpretability:** The ensemble model is harder to interpret than a single base learner.

**Reference:**

*   **Introduction to Machine Learning with Python (Müller, Guido):** Chapter 7 (Ensemble Learning) explains bagging and its application with decision trees.
*   **Hands-On Machine Learning with Scikit-Learn, Keras, and TensorFlow (Géron):** Chapter 7 (Ensemble Learning and Random Forests) provides a practical introduction to bagging.

---

### 3. Random Forests

Random Forests are an extension of bagging that specifically uses decision trees as the base learners. They introduce an additional layer of randomness during the tree building process, further enhancing diversity and improving performance.

**Key Concepts:**

*   **Bagging + Random Feature Subspace:** Random Forests combine the bootstrapping of bagging with the random selection of features at each node split in the decision tree.
*   **Node Randomness:** When building each decision tree, at each node, instead of considering all available features for the best split, only a random subset of features is considered.
    *   **Feature Subspace Size (mtry):** A hyperparameter that controls the number of features to consider at each split.
        *   For classification, $mtry = \sqrt{p}$ (where $p$ is the number of features).
        *   For regression, $mtry = p/3$.
        *   These are often treated as tunable hyperparameters.
*   **Reduced Correlation:** By forcing trees to be different (through both bootstrap sampling and random feature selection), the correlation between individual trees is reduced. This is key to the improvement over standard bagging.

**How it Works (Steps):**

1.  **Bootstrap Samples:** Create $B$ bootstrap samples from the original training dataset.
2.  **Grow Decision Trees:** For each bootstrap sample $D_i$, grow a decision tree:
    *   At each node, consider only a random subset of $mtry$ features.
    *   Find the best split among these $mtry$ features using a criterion like Gini impurity or entropy.
    *   Grow the trees to their maximum depth (or until other stopping criteria are met). Trees are typically *not* pruned in Random Forests.
3.  **Aggregate Predictions:** For a new, unseen data point $x$:
    *   **Regression:** Predict $y$ as the average of the predictions from all $B$ trees.
    *   **Classification:** Predict the class label as the majority vote from all $B$ trees.

**Advantages of Random Forests:**

*   **High Accuracy:** Often achieve state-of-the-art performance on many tabular datasets.
*   **Robust to Overfitting:** The inherent randomness makes them less prone to overfitting compared to single decision trees.
*   **Handles High Dimensionality:** Effective even with a large number of features.
*   **Handles Non-linear Relationships:** Can capture complex interactions between features.
*   **Feature Importance:** Can provide estimates of feature importance, indicating which features are most influential in the predictions.
*   **Handles Missing Values (to some extent):** Can handle missing values by using surrogate splits or imputing them during training.
*   **Out-of-Bag (OOB) Error Estimation:** The data points not included in a bootstrap sample (OOB samples) can be used to estimate the model's performance without needing a separate validation set. This is a significant advantage.

**Disadvantages of Random Forests:**

*   **Less Interpretable:** More complex than a single decision tree.
*   **Slower Training:** Can be computationally intensive, especially with large datasets and many trees.
*   **Can struggle with extrapolation:** May not perform well on data points far outside the range of the training data.

**Reference:**

*   **Hands-On Machine Learning with Scikit-Learn, Keras, and TensorFlow (Géron):** Chapter 7 (Ensemble Learning and Random Forests) provides a deep dive into Random Forests, including OOB scoring and feature importance.
*   **Introduction to Machine Learning with Python (Müller, Guido):** Chapter 7 also covers Random Forests in detail.
*   **Python Data Science Handbook (Vander Plas):** Chapter 5 (Machine Learning) offers practical examples of using Random Forests in Scikit-learn.

---

### 4. Hyperparameters for Random Forests

Tuning hyperparameters is crucial for optimizing the performance of Random Forests.

**Key Hyperparameters:**

*   **`n_estimators` (number of trees):**
    *   **Description:** The number of decision trees to grow in the forest.
    *   **Effect:** Increasing `n_estimators` generally reduces variance and improves accuracy, but with diminishing returns. It also increases training time.
    *   **Recommendation:** Start with a reasonably large number (e.g., 100 or 200) and observe performance.
*   **`max_features` (mtry):**
    *   **Description:** The number of features to consider when looking for the best split at each node.
    *   **Effect:** Controls the randomness in feature selection. Smaller `max_features` leads to more random forests but can increase bias. Larger `max_features` leads to less random forests, closer to bagged trees, and potentially more overfitting.
    *   **Recommendation:** Use the default values ($\sqrt{p}$ for classification, $p/3$ for regression) as a starting point and tune.
*   **`max_depth`:**
    *   **Description:** The maximum depth of each decision tree.
    *   **Effect:** Controls the complexity of individual trees. Deeper trees can capture more complex patterns but are more prone to overfitting. Shallower trees are less prone to overfitting but may underfit.
    *   **Recommendation:** Set to `None` to grow trees fully, or tune to a reasonable value (e.g., 10, 20) if overfitting is observed.
*   **`min_samples_split`:**
    *   **Description:** The minimum number of samples required to split an internal node.
    *   **Effect:** Higher values prevent the tree from learning from very small groups of samples, thus reducing overfitting but potentially increasing bias.
    *   **Recommendation:** Tune based on dataset size and complexity.
*   **`min_samples_leaf`:**
    *   **Description:** The minimum number of samples required to be at a leaf node.
    *   **Effect:** Similar to `min_samples_split`, higher values smooth the model and prevent overfitting.
    *   **Recommendation:** Tune based on dataset size and complexity.
*   **`criterion`:**
    *   **Description:** The function to measure the quality of a split. Common options are `'gini'` (Gini impurity) and `'entropy'` (Information Gain).
    *   **Effect:** Typically, the choice between Gini and entropy has a minor impact on performance.
    *   **Recommendation:** Use the default `'gini'`.

**Reference:**

*   **Hands-On Machine Learning with Scikit-Learn, Keras, and TensorFlow (Géron):** Chapter 7 discusses hyperparameter tuning for Random Forests, including `n_estimators`, `max_features`, and `max_depth`.

---

### 5. Out-of-Bag (OOB) Error Estimation

This is a valuable feature of Random Forests (and bagging in general).

**Key Concepts:**

*   **OOB Samples:** For each bootstrap sample, approximately one-third of the original training data is *not* included. These are the OOB samples for that particular tree.
*   **OOB Score:** To estimate the model's performance without a validation set, we can predict the OOB samples for each tree. For a given data point, we average the predictions from only those trees that did *not* use that data point in their bootstrap sample.
    *   **Classification:** The OOB score is typically the accuracy calculated on these OOB predictions.
    *   **Regression:** The OOB score is typically the Mean Squared Error (MSE) calculated on these OOB predictions.
*   **Benefit:** Provides a reliable estimate of the generalization error of the Random Forest, often very close to the error obtained using cross-validation.

**Implementation in Scikit-learn:**

When creating a `RandomForestClassifier` or `RandomForestRegressor` object, set `oob_score=True`. After fitting the model, you can access the score using `model.oob_score_`.

**Example (Conceptual):**

Suppose we have 100 trees. For a specific training example $x_k$:
*   Tree 1 used $x_k$ in its bootstrap sample.
*   Tree 2 did not use $x_k$.
*   Tree 3 used $x_k$.
*   ...
*   Tree 100 did not use $x_k$.

We use the predictions from Tree 2 and Tree 100 (and any other trees that didn't use $x_k$) to form an "OOB prediction" for $x_k$. We repeat this for all training examples. Then we calculate the accuracy of these OOB predictions.

**Reference:**

*   **Hands-On Machine Learning with Scikit-Learn, Keras, and TensorFlow (Géron):** Chapter 7 explains the OOB score and its importance.

---

### 6. Feature Importance in Random Forests

Random Forests can provide a measure of how important each feature is for the model's predictions.

**Key Concepts:**

*   **Mean Decrease Impurity (MDI) / Gini Importance:**
    *   For each feature, its importance is calculated as the total reduction in impurity (e.g., Gini impurity or entropy) brought about by that feature across all trees in the forest.
    *   Features that lead to larger impurity reductions are considered more important.
*   **Mean Decrease Accuracy (MDA) / Permutation Importance:**
    *   This method is more computationally expensive but often considered more reliable, especially in the presence of correlated features.
    *   It measures the decrease in the OOB score (or validation score) when the values of a single feature are randomly permuted.
    *   If a feature is important, permuting its values will significantly degrade the model's performance.
    *   This directly measures the feature's impact on the model's predictive power.

**Implementation in Scikit-learn:**

After fitting a Random Forest model, you can access feature importances using `model.feature_importances_`. This usually refers to the MDI score. Permutation importance can be calculated separately using functions like `sklearn.inspection.permutation_importance`.

**Example:**

If a Random Forest model for predicting house prices shows that `square_footage` has a much higher feature importance than `number_of_bathrooms`, it suggests that `square_footage` is a more significant predictor of house prices in the dataset.

**Reference:**

*   **Hands-On Machine Learning with Scikit-Learn, Keras, and TensorFlow (Géron):** Chapter 7 discusses feature importance calculation.
*   **Introduction to Machine Learning with Python (Müller, Guido):** Chapter 7 also covers feature importance.

---

### 7. Practice Questions

**Question 1:**
What is the primary goal of Bagging?
a) Reducing bias
b) Increasing model complexity
c) Reducing variance
d) Improving interpretability

**Question 2:**
Which of the following is a key difference between Bagging and Random Forests?
a) Bagging uses only regression trees, while Random Forests use only classification trees.
b) Random Forests introduce random feature selection at each split, while Bagging does not.
c) Bagging uses bootstrap samples, while Random Forests do not.
d) Random Forests combine models through averaging, while Bagging uses voting.

**Question 3:**
What does the `oob_score` parameter in Scikit-learn's Random Forest models allow you to do?
a) Prune the decision trees
b) Estimate the model's generalization error without a separate validation set
c) Adjust the `max_features` parameter
d) Increase the number of trees in the forest

**Question 4:**
If you are building a Random Forest for a classification task, what is the typical default value for `max_features` (mtry)?
a) Number of features / 2
b) Square root of the number of features
c) Number of features
d) log(Number of features)

**Question 5 (Conceptual):**
Consider a scenario where you have a dataset with many features, and most of them are irrelevant for predicting the target variable. How might Random Forests be beneficial in this situation, and what hyperparameter would you adjust?

---

### 8. Answers to Practice Questions

**Answer 1:**
The primary goal of Bagging is **c) Reducing variance**. By averaging predictions from multiple models trained on bootstrapped samples, bagging smooths out the predictions and reduces the impact of noise or specific data points, thus lowering variance.

**Answer 2:**
The key difference is **b) Random Forests introduce random feature selection at each split, while Bagging does not.** Both use bootstrap samples and an ensemble of base learners (typically decision trees). However, Random Forests add another layer of randomness by considering only a subset of features at each split, which further decorrelates the trees and improves performance.

**Answer 3:**
The `oob_score` parameter allows you to **b) Estimate the model's generalization error without a separate validation set**. This is achieved by using the out-of-bag samples for each tree to make predictions and then aggregating these predictions to estimate performance.

**Answer 4:**
For a classification task, the typical default value for `max_features` (mtry) is **b) Square root of the number of features**. For regression tasks, it's typically the number of features divided by 3.

**Answer 5:**
In a dataset with many irrelevant features, Random Forests can be beneficial because:
*   **Feature Randomness:** The `max_features` parameter ensures that even if a few dominant features are present, other features still get a chance to be considered for splits, leading to more diverse trees.
*   **Feature Importance:** Random Forests can identify which features are truly important, allowing you to potentially discard the irrelevant ones in future modeling or analysis.

To handle this scenario, you would primarily want to tune the **`max_features`** (mtry) hyperparameter. Setting `max_features` to a smaller value (closer to $\sqrt{p}$ or even less) encourages the forest to explore a wider range of features and become less reliant on a few potentially noisy or less important ones. You might also consider pruning trees using `max_depth`, `min_samples_split`, or `min_samples_leaf` if individual trees are overfitting to spurious patterns in the irrelevant features.

---

### 9. Important Points to Remember

*   **Ensemble Learning:** Combines multiple models to improve performance, often by reducing variance.
*   **Bagging (Bootstrap Aggregating):** Creates multiple training datasets via bootstrapping (sampling with replacement) and trains multiple instances of the same base learner. Aggregates predictions (average for regression, voting for classification). Primarily reduces variance.
*   **Random Forests:** An extension of Bagging that uses decision trees as base learners and introduces random feature selection at each split. This further reduces correlation between trees and improves accuracy and robustness.
*   **OOB Score:** A crucial feature of Random Forests for estimating generalization error without a separate validation set.
*   **Feature Importance:** Random Forests can provide insights into which features are most predictive.
*   **Hyperparameters:** Key parameters like `n_estimators`, `max_features`, and tree-specific parameters (`max_depth`, `min_samples_split`, `min_samples_leaf`) significantly impact performance and should be tuned.
*   **Bias-Variance Trade-off:** Bagging and Random Forests are primarily variance-reducing techniques. They do not significantly reduce bias.

---

This comprehensive set of notes covers the fundamental concepts of Bagging and Random Forests, their mechanics, advantages, disadvantages, hyperparameter tuning, and practical aspects like OOB error and feature importance. These techniques are powerful tools in your machine learning arsenal.
