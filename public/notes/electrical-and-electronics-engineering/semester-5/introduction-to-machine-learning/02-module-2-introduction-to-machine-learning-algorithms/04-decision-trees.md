---
title: "decision trees"
subject: "INTRODUCTION TO MACHINE LEARNING"
module: "Module 2: Introduction to machine learning algorithms "
branch: "Electrical and Electronics Engineering"
semester: 5
topicId: "68a200862b85456187f3642e"
status: "completed"
scrapedAt: "2026-05-23T16:22:21.675Z"
---
# Module 2: Introduction to Machine Learning Algorithms - Decision Trees

## 1. Introduction to Decision Trees

Decision Trees are a fundamental and intuitive supervised machine learning algorithm used for both **classification** and **regression** tasks. They work by recursively partitioning the data based on the values of input features, creating a tree-like structure.

*   **Analogy:** Think of making a series of yes/no questions to arrive at a conclusion. For example, deciding whether to play tennis based on weather conditions.

### 1.1 Key Concepts

*   **Root Node:** The topmost node in the tree, representing the entire dataset. It's the starting point for making a decision.
*   **Internal Nodes (Decision Nodes):** Nodes that represent a test on an attribute (feature). Each internal node has branches corresponding to the possible outcomes of the test.
*   **Branches:** Connect nodes and represent the outcome of a test.
*   **Leaf Nodes (Terminal Nodes):** Nodes that represent a class label (in classification) or a predicted value (in regression). They are the endpoints of the decision path.
*   **Splitting:** The process of dividing a node into two or more sub-nodes based on a specific attribute and a condition.
*   **Pruning:** The process of removing branches from a decision tree to reduce complexity and prevent overfitting.

### 1.2 How Decision Trees Work

1.  **Start at the Root Node:** The entire dataset is considered.
2.  **Find the Best Split:** The algorithm selects the attribute and the splitting criterion that best separates the data into distinct classes or reduces the impurity.
3.  **Create Branches:** Based on the chosen split, the node is divided into child nodes.
4.  **Recursively Split:** The process is repeated for each child node until a stopping criterion is met (e.g., all instances in a node belong to the same class, the node is pure, or a maximum depth is reached).
5.  **Assign Class/Value to Leaf Nodes:** Once a leaf node is reached, the majority class of the instances in that node (for classification) or the average value (for regression) is assigned.

## 2. Decision Trees for Classification

In classification, decision trees aim to partition the feature space such that each resulting region (leaf node) is as pure as possible, meaning it predominantly contains instances of a single class.

### 2.1 Measuring Purity/Impurity

To determine the "best" split, we need metrics to quantify how well a split separates the data.

*   **Gini Impurity:** Measures the probability of misclassifying a randomly chosen element from the set if it were randomly labeled according to the distribution of classes in the subset.
    *   Formula: $Gini(D) = 1 - \sum_{i=1}^{c} p_i^2$, where $p_i$ is the proportion of instances belonging to class $i$.
    *   A Gini impurity of 0 means the node is pure (all instances belong to one class).
    *   A Gini impurity of 0.5 (for binary classification) means the node is maximally impure (equal distribution of classes).
*   **Entropy:** Measures the level of disorder or randomness in a set of instances.
    *   Formula: $Entropy(D) = - \sum_{i=1}^{c} p_i \log_2(p_i)$, where $p_i$ is the proportion of instances belonging to class $i$.
    *   Entropy is 0 for a pure node and maximum for a node with an even distribution of classes.
*   **Information Gain:** The reduction in entropy (or Gini impurity) achieved by splitting the data on a particular attribute. The attribute with the highest information gain is chosen for the split.
    *   Formula: $IG(D, A) = Entropy(D) - \sum_{v \in Values(A)} \frac{|D_v|}{|D|} Entropy(D_v)$
    *   $D$ is the dataset, $A$ is the attribute, $Values(A)$ are the possible values of attribute $A$, and $D_v$ is the subset of $D$ for which attribute $A$ has value $v$.

**Key Takeaway:** Decision trees choose the attribute that maximizes information gain (or minimizes Gini impurity) at each step to create the most homogeneous child nodes.

### 2.2 Example (Classification)

Let's consider a simple dataset to predict whether to play tennis:

| Outlook  | Temperature | Humidity | Windy | PlayTennis |
| :------- | :---------- | :------- | :---- | :--------- |
| Sunny    | Hot         | High     | False | No         |
| Sunny    | Hot         | High     | True  | No         |
| Overcast | Hot         | High     | False | Yes        |
| Rainy    | Mild        | High     | False | Yes        |
| Rainy    | Cool        | Normal   | False | Yes        |
| Rainy    | Cool        | Normal   | True  | No         |
| Overcast | Cool        | Normal   | True  | Yes        |
| Sunny    | Mild        | High     | False | No         |
| Sunny    | Cool        | Normal   | False | Yes        |
| Rainy    | Mild        | Normal   | False | Yes        |
| Sunny    | Mild        | Normal   | True  | Yes        |
| Overcast | Mild        | High     | True  | Yes        |
| Overcast | Hot         | Normal   | False | Yes        |
| Rainy    | Mild        | High     | True  | No         |

*   **Total Instances:** 14
*   **Positive (Yes):** 9
*   **Negative (No):** 5

Let's calculate the initial entropy of the entire dataset:
$p_{Yes} = 9/14$, $p_{No} = 5/14$
$Entropy(D) = - (9/14) \log_2(9/14) - (5/14) \log_2(5/14) \approx 0.940$

Now, let's consider splitting by 'Outlook':

*   **Outlook = Sunny:** 5 instances (2 Yes, 3 No)
    *   $p_{Yes} = 2/5$, $p_{No} = 3/5$
    *   $Entropy(Sunny) = - (2/5) \log_2(2/5) - (3/5) \log_2(3/5) \approx 0.971$
*   **Outlook = Overcast:** 4 instances (4 Yes, 0 No) - Pure node
    *   $Entropy(Overcast) = 0$
*   **Outlook = Rainy:** 5 instances (3 Yes, 2 No)
    *   $p_{Yes} = 3/5$, $p_{No} = 2/5$
    *   $Entropy(Rainy) = - (3/5) \log_2(3/5) - (2/5) \log_2(2/5) \approx 0.971$

Information Gain for 'Outlook':
$IG(D, Outlook) = Entropy(D) - [ (5/14) \times Entropy(Sunny) + (4/14) \times Entropy(Overcast) + (5/14) \times Entropy(Rainy) ]$
$IG(D, Outlook) = 0.940 - [ (5/14) \times 0.971 + (4/14) \times 0 + (5/14) \times 0.971 ]$
$IG(D, Outlook) \approx 0.940 - [ 0.347 + 0 + 0.347 ] \approx 0.246$

The algorithm would then calculate IG for 'Temperature', 'Humidity', and 'Windy' and select the attribute with the highest IG to be the root node. In this dataset, 'Outlook' is often found to be the best first split.

## 3. Decision Trees for Regression

In regression, decision trees aim to partition the data into regions where the target variable is as constant as possible. Instead of classifying, leaf nodes predict a numerical value.

### 3.1 Measuring Impurity for Regression

*   **Mean Squared Error (MSE):** The average of the squared differences between the actual values and the predicted value (often the mean of the target values in the leaf node).
    *   Formula: $MSE = \frac{1}{N} \sum_{i=1}^{N} (y_i - \hat{y})^2$, where $N$ is the number of instances, $y_i$ is the actual value, and $\hat{y}$ is the predicted value (mean of $y_i$ in the leaf).
*   **Mean Absolute Error (MAE):** The average of the absolute differences between the actual values and the predicted value.
    *   Formula: $MAE = \frac{1}{N} \sum_{i=1}^{N} |y_i - \hat{y}|$

**Key Takeaway:** For regression, decision trees select splits that minimize the MSE or MAE in the resulting child nodes. The prediction for a leaf node is typically the mean of the target values of the training samples that fall into that leaf.

### 3.2 Example (Regression)

Consider a dataset predicting house prices based on size:

| Size (sq ft) | Price ($) |
| :----------- | :-------- |
| 1000         | 150000    |
| 1200         | 170000    |
| 1500         | 200000    |
| 1800         | 230000    |
| 2000         | 250000    |
| 2200         | 270000    |
| 2500         | 300000    |

Let's say we want to split based on 'Size' at 1600 sq ft.

*   **Left Node (Size <= 1600):** Instances with sizes 1000, 1200, 1500. Prices: 150000, 170000, 200000.
    *   Mean Price: $(150000 + 170000 + 200000) / 3 = 176667$
    *   Calculate MSE for this node.
*   **Right Node (Size > 1600):** Instances with sizes 1800, 2000, 2200, 2500. Prices: 230000, 250000, 270000, 300000.
    *   Mean Price: $(230000 + 250000 + 270000 + 300000) / 4 = 262500$
    *   Calculate MSE for this node.

The algorithm would evaluate different split points for 'Size' to find the one that minimizes the sum of MSEs across the child nodes.

## 4. Advantages and Disadvantages of Decision Trees

### 4.1 Advantages

*   **Interpretability:** Easy to understand and visualize, making them suitable for explaining decisions to non-technical stakeholders (CO1, CO2).
*   **Handles both numerical and categorical data:** Can process different data types without extensive preprocessing.
*   **Non-parametric:** Does not make strong assumptions about the underlying data distribution.
*   **Feature Importance:** Can identify important features by observing how often they are used for splitting.
*   **No data scaling required:** Unlike algorithms sensitive to feature scales (e.g., SVM, KNN), decision trees are not affected by scaling.
*   **Handles non-linear relationships:** Can capture complex interactions between features.

### 4.2 Disadvantages

*   **Overfitting:** Prone to creating overly complex trees that fit the training data too closely, leading to poor generalization on unseen data (CO2).
*   **Instability:** Small changes in the data can lead to significantly different tree structures.
*   **Bias towards features with more levels:** Attributes with a larger number of distinct values can be favored by information gain.
*   **Greedy approach:** The optimal split is chosen at each step, but this does not guarantee a globally optimal tree.
*   **Difficulty with linear relationships:** May require deep trees to approximate simple linear relationships.

## 5. Preventing Overfitting: Pruning

Overfitting is a major challenge with decision trees. Pruning is the technique used to combat this.

*   **Pre-pruning (Early Stopping):** Stopping the tree growth before it reaches its full potential. This involves setting limits on:
    *   **Maximum Depth:** The maximum number of levels the tree can have.
    *   **Minimum Samples per Split:** The minimum number of instances required in a node to split it.
    *   **Minimum Samples per Leaf:** The minimum number of instances allowed in a leaf node.
    *   **Minimum Impurity Decrease:** A split is only made if it reduces impurity by at least a certain threshold.
*   **Post-pruning (Cost-Complexity Pruning):** Growing the full tree first and then iteratively removing branches that provide the least additional predictive power. This is often done using a validation set.

**Reference:** (Géron, 2019) discusses pre-pruning and post-pruning extensively in the context of Scikit-learn implementations. (Deisenroth, Faisal, & Ong, 2020) also touches upon regularization techniques that are conceptually similar to pruning.

## 6. Ensemble Methods with Decision Trees

While single decision trees can be effective, their instability and tendency to overfit can be addressed by using them as building blocks in ensemble methods.

*   **Random Forests:** Builds multiple decision trees on different random subsets of the data and features, and then aggregates their predictions (e.g., majority vote for classification, average for regression). This significantly reduces variance and improves generalization.
*   **Gradient Boosting Machines (e.g., Gradient Boosting Classifier/Regressor, XGBoost, LightGBM):** Builds trees sequentially, with each new tree trying to correct the errors made by the previous ones. These are powerful and often achieve state-of-the-art results.

**Reference:** (Géron, 2019) and (Raschka & Mirjalili, 2019) provide detailed explanations and implementations of Random Forests and Gradient Boosting.

## 7. Implementation in Python (using Scikit-learn)

Scikit-learn is a powerful library for implementing decision trees.

```python
from sklearn.tree import DecisionTreeClassifier, DecisionTreeRegressor
from sklearn.model_selection import train_test_split
from sklearn.metrics import accuracy_score, mean_squared_error
from sklearn.datasets import load_iris, load_boston # load_boston is deprecated, consider fetch_california_housing

# --- Classification Example ---
# Load dataset
iris = load_iris()
X, y = iris.data, iris.target

# Split data
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.3, random_state=42)

# Initialize and train the classifier
# Using pre-pruning parameters to prevent overfitting
clf = DecisionTreeClassifier(max_depth=3, min_samples_split=5, random_state=42)
clf.fit(X_train, y_train)

# Make predictions
y_pred = clf.predict(X_test)

# Evaluate
accuracy = accuracy_score(y_test, y_pred)
print(f"Classification Accuracy: {accuracy:.2f}")

# --- Regression Example ---
# Load dataset (using a common example, though load_boston is deprecated)
from sklearn.datasets import make_regression
X_reg, y_reg = make_regression(n_samples=100, n_features=1, noise=10, random_state=42)

# Split data
X_train_reg, X_test_reg, y_train_reg, y_test_reg = train_test_split(X_reg, y_reg, test_size=0.3, random_state=42)

# Initialize and train the regressor
# Using pre-pruning parameters
reg = DecisionTreeRegressor(max_depth=3, min_samples_split=5, random_state=42)
reg.fit(X_train_reg, y_train_reg)

# Make predictions
y_pred_reg = reg.predict(X_test_reg)

# Evaluate
mse = mean_squared_error(y_test_reg, y_pred_reg)
print(f"Regression MSE: {mse:.2f}")
```

**Reference:** (Müller & Guido, 2016) and (Vander Plas, 2016) are excellent resources for practical Python implementation with Scikit-learn. (CO3, CO4)

## 8. Practice Questions

**Question 1 (Concept):**
What is the primary goal of a decision tree in a classification task?
a) Minimize the variance of predictions.
b) Partition the data into regions of high purity.
c) Find the best linear separation between classes.
d) Cluster similar data points.

**Question 2 (Concept):**
Which of the following metrics is commonly used to evaluate the quality of a split in a decision tree for classification?
a) Mean Squared Error (MSE)
b) R-squared
c) Gini Impurity (or Entropy)
d) Silhouette Score

**Question 3 (Application):**
You are building a decision tree to predict customer churn. If a leaf node contains 100 customers, 95 of whom churned and 5 did not, what would be the predicted outcome for a new customer falling into this leaf node?

**Question 4 (Overfitting/Pruning):**
Explain the concept of overfitting in decision trees and how pre-pruning (e.g., setting `max_depth`) can help mitigate it.

**Question 5 (Implementation):**
If you want to prevent a decision tree from becoming too complex and overfitting, which Scikit-learn parameter would you adjust in `DecisionTreeClassifier`?
a) `criterion`
b) `splitter`
c) `max_depth`
d) `random_state`

## 9. Answers to Practice Questions

**Answer 1:**
b) Partition the data into regions of high purity. (This means each region primarily belongs to one class.)

**Answer 2:**
c) Gini Impurity (or Entropy). MSE and R-squared are used for regression, and Silhouette Score is for clustering.

**Answer 3:**
The predicted outcome would be "Churned" because it is the majority class in that leaf node.

**Answer 4:**
Overfitting occurs when a decision tree learns the training data too well, including its noise and outliers, resulting in poor performance on new, unseen data. This often happens with deep, complex trees. Pre-pruning, such as setting a `max_depth` limit, restricts the tree's growth, preventing it from becoming overly specialized to the training data and thus improving its ability to generalize.

**Answer 5:**
c) `max_depth`. Setting a `max_depth` limits the depth of the tree, preventing it from creating very specific rules that might lead to overfitting. `criterion` determines the impurity measure, `splitter` chooses the splitting strategy, and `random_state` ensures reproducibility.

---

## Important Points to Remember:

*   Decision trees are versatile for both **classification** and **regression**.
*   Key metrics for splitting are **Gini Impurity** and **Entropy** (classification) and **MSE/MAE** (regression).
*   **Overfitting** is a major concern; **pruning** (pre- and post-) is crucial.
*   Decision trees are **interpretable** and don't require feature scaling.
*   Their instability can be overcome using **ensemble methods** like Random Forests and Gradient Boosting.
*   Scikit-learn's `DecisionTreeClassifier` and `DecisionTreeRegressor` are the go-to tools for implementation.

This detailed note covers the core concepts of decision trees, their application in both classification and regression, the challenges they present, and how to address them, aligning with the learning outcomes and providing practical context from the recommended textbooks.
