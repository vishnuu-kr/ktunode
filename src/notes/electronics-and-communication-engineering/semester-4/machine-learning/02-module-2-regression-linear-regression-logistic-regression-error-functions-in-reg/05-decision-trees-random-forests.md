---
title: "Decision trees -random forests"
subject: "MACHINE LEARNING"
module: "Module 2: Regression: linear regression, logistic regression error functions in regression"
branch: "Electronics and Communication Engineering"
semester: 4
topicId: "68a5c45eb09ce205780fe629"
status: "completed"
scrapedAt: "2026-05-23T17:50:17.162Z"
---
# Machine Learning: Module 2 - Regression: Decision Trees & Random Forests

This module delves into tree-based ensemble methods, specifically Decision Trees and Random Forests, which are powerful tools for both regression and classification tasks. While the module title emphasizes regression, these algorithms are versatile and can be adapted for both.

## Learning Outcomes:

By the end of this topic, you will be able to:

*   Understand the fundamental principles of decision trees.
*   Explain how decision trees are used for both regression and classification.
*   Describe the advantages and disadvantages of decision trees.
*   Understand the concept of ensemble learning and its benefits.
*   Explain the workings of Random Forests.
*   Discuss how Random Forests overcome the limitations of individual decision trees.
*   Apply and evaluate decision trees and Random Forests for regression and classification problems.

## Course Outcomes Alignment:

This topic directly contributes to:

*   **CO1: Analyze and apply supervised and unsupervised machine learning techniques to solve various data-driven problems. (Knowledge Level: K4)** - You will learn to analyze the behavior of tree-based models and apply them to solve regression and classification problems.
*   **CO2: Develop, train, and optimize regression and classification models (Knowledge Level: K3)** - You will learn to build, tune, and evaluate decision trees and Random Forests for regression and classification tasks.

---

## 1. Decision Trees

Decision Trees are a popular supervised learning algorithm used for both classification and regression. They work by recursively splitting the dataset into subsets based on the values of features, creating a tree-like structure.

### 1.1 How Decision Trees Work

*   **Tree Structure:**
    *   **Root Node:** The topmost node, representing the entire dataset.
    *   **Internal Nodes:** Nodes that represent a test on a particular feature.
    *   **Branches:** Represent the outcome of the test.
    *   **Leaf Nodes (Terminal Nodes):** Nodes that represent a class label (in classification) or a predicted value (in regression).
*   **Splitting Criteria:** The core of building a decision tree is determining the best feature and the best split point for each node. Common criteria include:
    *   **Gini Impurity (Classification):** Measures the probability of misclassifying a randomly chosen element if it were randomly labeled according to the distribution of labels in the subset. A Gini impurity of 0 means all instances belong to the same class.
        *   *Formula:* $Gini(p) = 1 - \sum_{i=1}^{C} p_i^2$, where $p_i$ is the proportion of instances of class $i$ in the node, and $C$ is the number of classes.
    *   **Information Gain (Classification):** Measures the reduction in entropy (disorder) achieved by splitting on a particular feature. Higher information gain indicates a better split.
        *   *Formula:* $Information Gain = Entropy(Parent) - \sum_{i=1}^{k} \frac{N_i}{N} Entropy(Child_i)$, where $N$ is the total number of instances, $N_i$ is the number of instances in the $i$-th child node, and $k$ is the number of child nodes.
    *   **Mean Squared Error (MSE) (Regression):** Measures the average squared difference between the actual values and the predicted value in a node. The goal is to minimize MSE.
        *   *Formula:* $MSE = \frac{1}{n} \sum_{i=1}^{n} (y_i - \hat{y})^2$, where $y_i$ are the actual values and $\hat{y}$ is the predicted value (often the mean of the target values in the node).
*   **Recursive Partitioning:** The process of splitting continues recursively until a stopping criterion is met. This could be:
    *   All instances in a node belong to the same class (pure node).
    *   A maximum tree depth is reached.
    *   A minimum number of samples per leaf node is reached.
    *   The improvement in the splitting criterion is below a threshold.

### 1.2 Decision Trees for Regression

In regression trees, the leaf nodes predict a continuous value. This prediction is typically the **mean** of the target values of the training instances that fall into that leaf node.

**Example:** Predicting house prices. A decision tree might split based on "Square Footage." If a house has > 2000 sq ft, it goes down one branch; otherwise, it goes down another. The leaf nodes would then predict the average price of houses in that category.

*   **Textbook Reference:** *Hands-on Machine learning with Sc-kit Learn Keras and Tensorflow* by Aurelien Geron provides excellent coverage of decision tree regression and classification, including how to implement them with Scikit-learn.

### 1.3 Decision Trees for Classification

In classification trees, the leaf nodes predict a class label. This prediction is typically the **majority class** of the training instances that fall into that leaf node.

**Example:** Predicting whether an email is spam or not. A decision tree might split on "Number of exclamation marks." If a spam email has > 2 exclamation marks, it's classified as spam, etc.

*   **Textbook Reference:** *Introduction to Machine learning with Python* by Andreas C. Müller & Sarah Guido is a great resource for understanding the practical application of decision trees for classification.

### 1.4 Advantages of Decision Trees

*   **Easy to understand and interpret:** The tree structure provides a clear, visual representation of the decision-making process.
*   **Handle both numerical and categorical data:** Can work with various data types.
*   **No need for feature scaling:** Tree-based models are not sensitive to the scale of features.
*   **Can capture non-linear relationships:** Can model complex interactions between features.
*   **Feature importance:** Easily identify which features are most influential in the decision-making process.

### 1.5 Disadvantages of Decision Trees

*   **Overfitting:** Decision trees can easily overfit the training data, leading to poor generalization on unseen data. This is particularly true for deep trees.
*   **Instability:** Small variations in the data can lead to significantly different tree structures.
*   **Bias towards features with more levels:** Information gain and Gini impurity can be biased towards features with a larger number of unique values.
*   **Greedy approach:** The splitting process is greedy, meaning it makes the locally optimal choice at each step, which may not lead to a globally optimal tree.

---

## 2. Ensemble Learning

Ensemble learning is a machine learning paradigm where multiple models (often called "base learners" or "weak learners") are combined to improve prediction accuracy and robustness compared to a single model.

### 2.1 The Wisdom of the Crowd

The core idea behind ensemble learning is that a diverse group of models, each making independent errors, can collectively make better predictions than any single model.

### 2.2 Types of Ensemble Methods

*   **Bagging (Bootstrap Aggregating):**
    *   Trains multiple base learners on different random subsets of the training data (with replacement).
    *   The subsets are created using **bootstrapping**.
    *   For regression, predictions are averaged. For classification, predictions are made by majority voting.
    *   Reduces variance and helps prevent overfitting.
*   **Boosting:**
    *   Trains base learners sequentially, with each new learner focusing on correcting the errors of the previous ones.
    *   Samples are weighted, giving more importance to misclassified samples.
    *   Can lead to higher accuracy but is more prone to overfitting if not carefully tuned.
    *   Examples: AdaBoost, Gradient Boosting.
*   **Stacking (Stacked Generalization):**
    *   Trains multiple diverse base learners.
    *   A meta-learner (or blender) is trained on the predictions of the base learners to make the final prediction.

---

## 3. Random Forests

Random Forests are an ensemble learning method that builds a multitude of decision trees during training and outputs the mode of the classes (classification) or mean prediction (regression) of the individual trees.

### 3.1 How Random Forests Work

Random Forests leverage the principles of bagging and add an extra layer of randomness during the tree building process.

1.  **Bootstrap Aggregating (Bagging):**
    *   For each tree in the forest, a bootstrap sample (random sample with replacement) of the training data is drawn. This means some data points might be selected multiple times, while others might not be selected at all for a given tree.
2.  **Random Feature Subsampling:**
    *   At each node of each decision tree, instead of considering all features for splitting, a random subset of features is selected. The best split is then chosen from this random subset.
    *   This further increases the diversity of the trees and decorrelates them. The number of features to consider at each split is a hyperparameter (often denoted as `max_features`).

### 3.2 Advantages of Random Forests

*   **Reduced Overfitting:** By averaging predictions from multiple diverse trees, Random Forests significantly reduce overfitting compared to single decision trees.
*   **High Accuracy:** Often achieves very high accuracy on many types of problems.
*   **Robust to Outliers:** Less sensitive to outliers than single decision trees due to the aggregation process.
*   **Handles High Dimensionality:** Can handle datasets with a large number of features.
*   **Implicit Feature Importance:** Provides an estimate of feature importance based on how much each feature contributes to reducing impurity across all trees.
*   **Out-of-Bag (OOB) Error Estimation:** Because each tree is trained on a bootstrap sample, there are data points that are not used for training that particular tree. These are called "out-of-bag" samples. The OOB samples can be used to estimate the generalization error of the forest without needing a separate validation set.

### 3.3 Disadvantages of Random Forests

*   **Less Interpretable than Single Trees:** While feature importance can be extracted, the overall decision-making process of a forest of hundreds of trees is less transparent than a single decision tree.
*   **Computationally More Expensive:** Training multiple trees takes more time and resources than training a single tree.
*   **Can be memory intensive:** Storing many trees can require significant memory.

### 3.4 Random Forests for Regression

In Random Forests for regression, each tree predicts a continuous value. The final prediction is the **average** of the predictions from all individual trees.

**Example:** Predicting sales figures. A Random Forest would build multiple decision trees, each using a bootstrap sample and random feature subsets. Each tree predicts a sales figure for a given input. The final prediction is the average of all these predicted sales figures.

### 3.5 Random Forests for Classification

In Random Forests for classification, each tree predicts a class label. The final prediction is the **majority vote** among all the individual trees.

**Example:** Image classification. A Random Forest could classify images of cats and dogs. Each tree would look at different subsets of pixels (features) and make an independent prediction. The class that receives the most votes from the trees is the final prediction.

*   **Textbook Reference:** Aurelien Geron's *Hands-on Machine learning with Sc-kit Learn Keras and Tensorflow* dedicates a significant portion to Random Forests, explaining their implementation and hyperparameter tuning in detail.

---

## 4. Error Functions in Regression

While this topic is broadly about decision trees and random forests, it's essential to recall error functions relevant to regression when using these models for regression tasks.

*   **Mean Squared Error (MSE):** As mentioned earlier, this is commonly used as a splitting criterion in regression trees and as a metric to evaluate regression models. It penalizes larger errors more heavily.
*   **Root Mean Squared Error (RMSE):** The square root of MSE. It has the same units as the target variable, making it more interpretable.
*   **Mean Absolute Error (MAE):** The average of the absolute differences between actual and predicted values. It is less sensitive to outliers than MSE.
    *   *Formula:* $MAE = \frac{1}{n} \sum_{i=1}^{n} |y_i - \hat{y}|$

---

## 5. Practice Questions & Exercises

**Question 1 (Conceptual):**
What is the primary difference between the splitting criterion used in a decision tree for classification and one used for regression?

**Answer:**
For classification, criteria like Gini Impurity or Information Gain are used to measure the "purity" of a node in terms of class labels. For regression, Mean Squared Error (MSE) or similar metrics are used to measure the variance or spread of the target values within a node.

**Question 2 (Conceptual):**
Explain the role of bootstrapping and random feature selection in Random Forests.

**Answer:**
*   **Bootstrapping:** Creates diverse training datasets for each individual decision tree by sampling with replacement. This helps in reducing variance.
*   **Random Feature Selection:** At each split, only a random subset of features is considered. This further decorrelates the trees, preventing them from becoming too similar and thus improving the ensemble's robustness and reducing overfitting.

**Question 3 (Application - Scikit-learn):**
Imagine you have a dataset `X_train`, `y_train` for a regression problem and `X_test`, `y_test` for testing. Write Python code using scikit-learn to:
1.  Train a `DecisionTreeRegressor`.
2.  Train a `RandomForestRegressor`.
3.  Evaluate both models using Mean Squared Error (MSE) on the test set.

**Answer:**

```python
from sklearn.tree import DecisionTreeRegressor
from sklearn.ensemble import RandomForestRegressor
from sklearn.metrics import mean_squared_error
from sklearn.model_selection import train_test_split
import numpy as np

# Assume X and y are already loaded and preprocessed
# Example data generation:
np.random.seed(42)
X = np.random.rand(100, 5) * 10
y = 2 * X[:, 0] + np.sin(X[:, 1]) + np.random.randn(100) * 0.5

X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)

# 1. Train a DecisionTreeRegressor
dt_regressor = DecisionTreeRegressor(max_depth=5, random_state=42) # Added max_depth to prevent deep overfitting
dt_regressor.fit(X_train, y_train)

# 2. Train a RandomForestRegressor
rf_regressor = RandomForestRegressor(n_estimators=100, max_depth=5, random_state=42) # n_estimators=100 is common
rf_regressor.fit(X_train, y_train)

# 3. Evaluate both models using MSE on the test set
y_pred_dt = dt_regressor.predict(X_test)
mse_dt = mean_squared_error(y_test, y_pred_dt)
print(f"Decision Tree Regressor MSE: {mse_dt:.4f}")

y_pred_rf = rf_regressor.predict(X_test)
mse_rf = mean_squared_error(y_test, y_pred_rf)
print(f"Random Forest Regressor MSE: {mse_rf:.4f}")
```

**Question 4 (True/False):**
Random Forests are guaranteed to perform better than individual decision trees on all datasets.

**Answer:**
False. While Random Forests generally perform better and are more robust due to reduced overfitting, there might be rare cases where a very simple problem is perfectly captured by a single, shallow decision tree, and the randomness of the forest might introduce slight noise. However, in practice, Random Forests are significantly more reliable.

**Question 5 (Hyperparameter Tuning):**
Consider tuning a `RandomForestRegressor`. What are two key hyperparameters you would focus on and why?

**Answer:**
1.  **`n_estimators`**: The number of trees in the forest. Increasing this generally improves performance up to a point, but also increases computation time.
2.  **`max_features`**: The number of features to consider when looking for the best split. This controls the degree of randomness in feature selection. A smaller `max_features` leads to more decorrelated trees but can underfit if too small. A larger `max_features` makes trees more similar, potentially increasing correlation and overfitting. Other important hyperparameters include `max_depth` and `min_samples_split`.

---

## 6. Important Points to Remember

*   **Decision Trees** are interpretable but prone to overfitting.
*   **Ensemble methods** combine multiple models to improve performance.
*   **Random Forests** are an ensemble of decision trees built using **bagging** and **random feature selection**.
*   Random Forests significantly **reduce variance** and **overfitting** compared to single decision trees.
*   For regression, Random Forests **average** the predictions of individual trees.
*   For classification, Random Forests use **majority voting**.
*   Key hyperparameters for Random Forests include `n_estimators` and `max_features`.
*   **Out-of-Bag (OOB) error** is a valuable way to estimate the generalization error of a Random Forest without a separate validation set.

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=gI-qXk7XojA) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=Q-tL8_628gE) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=p6Q9_e7_L1w) |


## 7. Textbook and Reference Content Incorporation

*   **Geron (Chapter 6 & 7):** Provides detailed explanations and practical implementations of Decision Trees and Ensemble Learning (including Random Forests) in Python using Scikit-learn. It covers the decision tree splitting criteria and the mechanics of Random Forests.
*   **Müller & Guido (Chapter 2 & 4):** Offers a hands-on approach to understanding decision trees for both classification and regression, focusing on their intuitive nature and implementation within the Scikit-learn framework. They emphasize the practical aspects of using these models.
*   **Theobald:** While more introductory, it likely covers the basic concepts of decision trees as a fundamental supervised learning algorithm.
*   **Bishop & Theodoridis:** These advanced texts provide a deeper theoretical understanding of the statistical underpinnings of tree-based methods and ensemble learning, including information theory concepts (entropy, information gain) and statistical learning theory related to bias-variance trade-off.
*   **Andrew Ng's Lecture Notes:** Often cover ensemble methods like Bagging and Boosting, providing a strong theoretical foundation for why these methods work well and their connection to bias-variance decomposition.

This comprehensive set of notes should provide a solid foundation for understanding Decision Trees and Random Forests within the context of Machine Learning, Module 2.