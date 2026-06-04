---
title: "Classification Algorithms - Logistic regression, k-Nearest Neighbours (k-NN), Decision Trees"
subject: "INTRODUCTION TO MACHINE LEARNING"
module: "Module 4: ML algorithm implementation with python "
branch: "Electrical and Electronics Engineering"
semester: 5
topicId: "68a200862b85456187f3643b"
status: "completed"
scrapedAt: "2026-05-23T16:22:29.876Z"
---
## Introduction to Machine Learning: Module 4 - Classification Algorithms with Python

This module delves into the practical implementation of fundamental classification algorithms in Python, focusing on Logistic Regression, k-Nearest Neighbours (k-NN), and Decision Trees. We will explore their underlying principles, how to implement them using scikit-learn, and how to evaluate their performance.

---

### 1. Introduction to Classification

**Definition:** Classification is a type of supervised machine learning where the goal is to assign an input data point to one of several predefined categories or classes. This is a **supervised learning** task because the algorithm learns from labeled data (data where the correct class is already known).

**Key Concepts:**

*   **Features (Independent Variables):** The measurable characteristics of the data that are used to predict the class.
*   **Target Variable (Dependent Variable/Class Label):** The categorical variable that we want to predict.
*   **Training Data:** A dataset used to train the classification model.
*   **Test Data:** A dataset used to evaluate the performance of the trained model on unseen data.
*   **Classes/Categories:** The distinct groups into which data points can be classified. For binary classification, there are two classes; for multi-class classification, there are more than two.

**Relevance to Course Outcomes:**

*   **CO2:** This topic directly addresses applying different supervised machine learning algorithms (classification) to solve real-world problems.
*   **CO4:** We will implement classification algorithms in Python and evaluate their performance.

**Textbook References:**

*   **Introduction to Machine Learning with Python:** Provides a foundational understanding of classification and its applications.
*   **Hands-On Machine Learning with Scikit-Learn, Keras, and TensorFlow:** Offers practical examples and code snippets for implementing classification models.

---

### 2. Logistic Regression

**Overview:** Despite its name, Logistic Regression is a **classification algorithm**, not a regression algorithm. It is primarily used for binary classification problems, but can be extended to multi-class classification. It models the probability of a data point belonging to a particular class.

**Key Concepts:**

*   **Sigmoid Function (Logistic Function):** This function maps any real-valued number into a value between 0 and 1, representing a probability.
    *   Formula: $\sigma(z) = \frac{1}{1 + e^{-z}}$
    *   Where $z$ is a linear combination of features: $z = \beta_0 + \beta_1 x_1 + \beta_2 x_2 + ... + \beta_n x_n$
*   **Decision Boundary:** The line or hyperplane that separates different classes. In logistic regression, it's often defined where the probability is 0.5.
*   **Log-Loss (Binary Cross-Entropy):** The loss function used to train logistic regression. It penalizes incorrect predictions based on how confident the model was in its incorrect prediction.
*   **Coefficients ($\beta$):** These represent the change in the log-odds of the outcome for a one-unit change in the predictor variable, holding other predictors constant.

**How it works:**

1.  It calculates a linear combination of the input features.
2.  This linear combination is passed through the sigmoid function to produce a probability between 0 and 1.
3.  A threshold (typically 0.5) is used to classify the data point into one of the two classes. If the probability is greater than or equal to the threshold, it's assigned to class 1; otherwise, it's assigned to class 0.

**Implementation with Python (scikit-learn):**

```python
from sklearn.linear_model import LogisticRegression
from sklearn.model_selection import train_test_split
from sklearn.metrics import accuracy_score
import pandas as pd
import numpy as np

# Assume X contains features and y contains labels

# Split data into training and testing sets
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)

# Initialize and train the Logistic Regression model
model = LogisticRegression()
model.fit(X_train, y_train)

# Make predictions on the test set
y_pred = model.predict(X_test)

# Evaluate the model
accuracy = accuracy_score(y_test, y_pred)
print(f"Accuracy: {accuracy}")
```

**Important Points to Remember:**

*   Logistic Regression assumes a **linear relationship** between the features and the log-odds of the target variable.
*   It is sensitive to **outliers**.
*   Feature scaling (e.g., standardization or normalization) can improve performance.
*   It is a good choice for **binary classification** and when interpretability of coefficients is important.

**Textbook References:**

*   **Mathematics for Machine Learning:** Chapter on linear models and logistic regression.
*   **Pattern Recognition and Machine Learning:** Section on generalized linear models.
*   **Introduction to Machine Learning with Python:** Practical implementation and interpretation of results.
*   **Hands-On Machine Learning with Scikit-Learn, Keras, and TensorFlow:** Chapter on classification, including logistic regression.
*   **Python Machine Learning:** Details on the mathematical underpinnings and implementation.

---

### 3. k-Nearest Neighbours (k-NN)

**Overview:** k-NN is a simple, non-parametric, instance-based learning algorithm used for both classification and regression. For classification, it assigns a data point to the class that is most common among its 'k' nearest neighbours in the feature space.

**Key Concepts:**

*   **k:** The number of nearest neighbours to consider.
*   **Distance Metric:** A function used to measure the similarity or dissimilarity between data points (e.g., Euclidean distance, Manhattan distance).
    *   **Euclidean Distance:** The straight-line distance between two points. For points $(x_1, x_2, ..., x_n)$ and $(y_1, y_2, ..., y_n)$, the Euclidean distance is $\sqrt{(x_1 - y_1)^2 + (x_2 - y_2)^2 + ... + (x_n - y_n)^2}$.
*   **Majority Vote:** In classification, the class that appears most frequently among the k nearest neighbours is assigned to the new data point.
*   **Non-parametric:** It does not make any assumptions about the underlying data distribution.
*   **Lazy Learner:** It does not explicitly build a model during training. The computation is deferred until prediction time.

**How it works (Classification):**

1.  When a new data point needs to be classified, the algorithm calculates the distance between this new point and all points in the training dataset.
2.  It identifies the 'k' nearest neighbours based on these distances.
3.  It counts the occurrences of each class among these 'k' neighbours.
4.  The new data point is assigned the class that has the majority vote.

**Implementation with Python (scikit-learn):**

```python
from sklearn.neighbors import KNeighborsClassifier
from sklearn.model_selection import train_test_split
from sklearn.metrics import accuracy_score
from sklearn.preprocessing import StandardScaler # Important for k-NN
import pandas as pd
import numpy as np

# Assume X contains features and y contains labels

# Split data into training and testing sets
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)

# Scale features (crucial for k-NN)
scaler = StandardScaler()
X_train_scaled = scaler.fit_transform(X_train)
X_test_scaled = scaler.transform(X_test)

# Initialize and train the k-NN model
# Experiment with different values of k
k = 5
model = KNeighborsClassifier(n_neighbors=k)
model.fit(X_train_scaled, y_train)

# Make predictions on the test set
y_pred = model.predict(X_test_scaled)

# Evaluate the model
accuracy = accuracy_score(y_test, y_pred)
print(f"Accuracy with k={k}: {accuracy}")
```

**Choosing the optimal 'k':**

*   **Small 'k':** Can lead to overfitting, highly sensitive to noise.
*   **Large 'k':** Can lead to underfitting, might smooth out decision boundaries too much.
*   Cross-validation is often used to find the best 'k'.

**Important Points to Remember:**

*   **Feature scaling is essential** because k-NN is distance-based. Features with larger scales can disproportionately influence the distance calculations.
*   **Computationally expensive** during prediction, especially with large datasets, as it needs to compare the new data point with all training points.
*   The choice of **distance metric** and **'k'** significantly impacts performance.
*   Can suffer from the **curse of dimensionality** (performance degrades in high-dimensional spaces).

**Textbook References:**

*   **Introduction to Machine Learning with Python:** Practical usage and tuning of k-NN.
*   **Hands-On Machine Learning with Scikit-Learn, Keras, and TensorFlow:** Detailed explanation and implementation with examples.
*   **Python Machine Learning:** Discussion on distance metrics and parameter tuning.

---

### 4. Decision Trees

**Overview:** Decision Trees are tree-like structures where each internal node represents a test on an attribute (feature), each branch represents an outcome of the test, and each leaf node represents a class label. They are intuitive and easy to interpret.

**Key Concepts:**

*   **Root Node:** The topmost node in the tree.
*   **Internal Nodes:** Nodes that represent a test on a feature.
*   **Branches:** Edges connecting nodes, representing the outcome of a test.
*   **Leaf Nodes (Terminal Nodes):** Nodes that represent the final class prediction.
*   **Splitting:** The process of dividing a node into two or more sub-nodes based on a feature and a condition.
*   **Impurity Measures:** Metrics used to evaluate the quality of a split. Common measures include:
    *   **Gini Impurity:** Measures the probability of a randomly chosen element in a set being incorrectly classified. A lower Gini impurity is better.
        *   Formula for a node with $C$ classes: $Gini(p) = 1 - \sum_{i=1}^{C} p_i^2$, where $p_i$ is the proportion of samples belonging to class $i$.
    *   **Entropy:** Measures the amount of uncertainty or randomness in a set. Lower entropy is better.
        *   Formula: $Entropy(p) = - \sum_{i=1}^{C} p_i \log_2(p_i)$
*   **Information Gain:** The reduction in impurity achieved by a split. The algorithm chooses the split that maximizes information gain.
*   **Pruning:** A technique to reduce the size of the decision tree by removing nodes that provide little power in classifying data, thus preventing overfitting.

**How it works:**

1.  The algorithm starts at the root node.
2.  It splits the data based on the feature that best separates the classes (according to impurity measures like Gini impurity or entropy).
3.  This process is recursively applied to the resulting sub-nodes.
4.  The splitting stops when a stopping criterion is met (e.g., all samples in a node belong to the same class, maximum tree depth reached, or no further improvement in impurity).
5.  The leaf nodes represent the predicted class.

**Implementation with Python (scikit-learn):**

```python
from sklearn.tree import DecisionTreeClassifier
from sklearn.model_selection import train_test_split
from sklearn.metrics import accuracy_score
from sklearn.tree import plot_tree # For visualization
import matplotlib.pyplot as plt
import pandas as pd
import numpy as np

# Assume X contains features and y contains labels

# Split data into training and testing sets
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)

# Initialize and train the Decision Tree model
# Explore parameters like max_depth, min_samples_split, criterion
model = DecisionTreeClassifier(criterion='gini', random_state=42)
model.fit(X_train, y_train)

# Make predictions on the test set
y_pred = model.predict(X_test)

# Evaluate the model
accuracy = accuracy_score(y_test, y_pred)
print(f"Accuracy: {accuracy}")

# Visualize the decision tree (optional)
plt.figure(figsize=(15, 10))
plot_tree(model, feature_names=['feature1', 'feature2'], class_names=['Class0', 'Class1'], filled=True, rounded=True)
plt.show()
```

**Important Points to Remember:**

*   **Easy to interpret and visualize.**
*   **No need for feature scaling.**
*   Can easily **overfit** to the training data if not properly tuned.
*   **Pruning** is crucial to prevent overfitting.
*   Can be unstable: small changes in the data can lead to a completely different tree.
*   **Ensemble methods** like Random Forests and Gradient Boosting build upon decision trees to overcome their limitations.

**Textbook References:**

*   **Introduction to Machine Learning with Python:** Practical implementation, understanding splits, and pruning.
*   **Hands-On Machine Learning with Scikit-Learn, Keras, and TensorFlow:** Detailed explanation of tree construction, impurity measures, and practical tips for avoiding overfitting.
*   **Data Mining: Concepts and Techniques:** Comprehensive coverage of decision tree algorithms like ID3, C4.5, and CART.
*   **Python Machine Learning:** Focus on scikit-learn implementation and hyperparameter tuning.

---

### 5. Model Evaluation for Classification

Once a classification model is trained, it's crucial to evaluate its performance on unseen data.

**Key Metrics:**

*   **Accuracy:** The proportion of correctly classified instances out of the total number of instances.
    *   Formula: $\text{Accuracy} = \frac{\text{Number of Correct Predictions}}{\text{Total Number of Predictions}}$
    *   *Caution:* Can be misleading if the dataset is imbalanced.
*   **Confusion Matrix:** A table that summarizes the performance of a classification model. It consists of:
    *   **True Positives (TP):** Instances correctly predicted as positive.
    *   **True Negatives (TN):** Instances correctly predicted as negative.
    *   **False Positives (FP):** Instances incorrectly predicted as positive (Type I error).
    *   **False Negatives (FN):** Instances incorrectly predicted as negative (Type II error).
*   **Precision:** The proportion of true positive predictions out of all positive predictions. It answers: "Of all the instances predicted as positive, how many were actually positive?"
    *   Formula: $\text{Precision} = \frac{TP}{TP + FP}$
*   **Recall (Sensitivity):** The proportion of true positive predictions out of all actual positive instances. It answers: "Of all the actual positive instances, how many were correctly predicted as positive?"
    *   Formula: $\text{Recall} = \frac{TP}{TP + FN}$
*   **F1-Score:** The harmonic mean of precision and recall. It provides a single score that balances both metrics.
    *   Formula: $F1\text{-}Score = 2 \times \frac{\text{Precision} \times \text{Recall}}{\text{Precision} + \text{Recall}}$
*   **ROC Curve (Receiver Operating Characteristic Curve):** A plot that shows the diagnostic ability of a binary classifier system as its discrimination threshold is varied. It plots True Positive Rate (Recall) against False Positive Rate (FPR = FP / (FP + TN)).
*   **AUC (Area Under the ROC Curve):** The area under the ROC curve. It represents the degree or measure of separability of the classes. An AUC of 1 indicates perfect classification, while an AUC of 0.5 indicates random classification.

**Implementation with Python (scikit-learn):**

```python
from sklearn.metrics import confusion_matrix, classification_report, roc_curve, auc
import matplotlib.pyplot as plt

# Assuming y_test contains actual labels and y_pred contains predicted labels
# And y_pred_proba contains the probability of the positive class

# Confusion Matrix
print("Confusion Matrix:")
print(confusion_matrix(y_test, y_pred))

# Classification Report (includes precision, recall, f1-score)
print("\nClassification Report:")
print(classification_report(y_test, y_pred))

# ROC Curve and AUC
# For binary classification, you need probabilities for the positive class
y_pred_proba = model.predict_proba(X_test)[:, 1] # Probability of the positive class
fpr, tpr, thresholds = roc_curve(y_test, y_pred_proba)
roc_auc = auc(fpr, tpr)

plt.figure()
plt.plot(fpr, tpr, color='darkorange', lw=2, label='ROC curve (area = %0.2f)' % roc_auc)
plt.plot([0, 1], [0, 1], color='navy', lw=2, linestyle='--')
plt.xlim([0.0, 1.0])
plt.ylim([0.0, 1.05])
plt.xlabel('False Positive Rate')
plt.ylabel('True Positive Rate')
plt.title('Receiver Operating Characteristic')
plt.legend(loc="lower right")
plt.show()

print(f"\nAUC: {roc_auc}")
```

**Relevance to Course Outcomes:**

*   **CO4:** Implementing algorithms and evaluating their performance using relevant metrics is directly covered here.
*   **CO1:** Understanding how to interpret metrics like accuracy, precision, and recall relates to understanding the performance of models derived from statistical relationships.

**Textbook References:**

*   **Introduction to Machine Learning with Python:** Practical guide to using scikit-learn for evaluation.
*   **Hands-On Machine Learning with Scikit-Learn, Keras, and TensorFlow:** Comprehensive explanation of various evaluation metrics and their interpretation.
*   **Python Machine Learning:** Detailed discussion on classification evaluation metrics and their importance.
*   **Applied Predictive Modelling:** In-depth coverage of model evaluation techniques.

---

### 6. Practice Questions and Exercises

**Question 1 (Conceptual):**

Which of the following classification algorithms is **not** sensitive to feature scaling?
(a) Logistic Regression
(b) k-Nearest Neighbours (k-NN)
(c) Decision Trees
(d) Support Vector Machines (SVM) with RBF kernel

**Answer:** (c) Decision Trees. Logistic Regression and k-NN are sensitive to feature scaling because they involve distance calculations or linear combinations of features where magnitudes matter. SVM with an RBF kernel is also sensitive to feature scaling.

---

**Question 2 (Implementation - Logistic Regression):**

Imagine you have a dataset `iris.csv` with features `sepal_length`, `sepal_width`, `petal_length`, `petal_width` and a target variable `species`. You want to predict if a flower is 'setosa' or not (binary classification).

Write Python code using scikit-learn to:
1. Load the dataset.
2. Filter the dataset to include only 'setosa' and other species.
3. Split the data into training and testing sets (80/20 split).
4. Train a Logistic Regression model.
5. Predict on the test set.
6. Calculate the accuracy of the model.

**Hint:** You'll need `pandas` for loading and manipulating data, and `sklearn.linear_model.LogisticRegression` and `sklearn.model_selection.train_test_split`.

```python
# Solution for Question 2
import pandas as pd
from sklearn.model_selection import train_test_split
from sklearn.linear_model import LogisticRegression
from sklearn.metrics import accuracy_score
from sklearn.datasets import load_iris # Using scikit-learn's built-in iris dataset for simplicity

# Load the iris dataset
iris = load_iris()
X = iris.data
y = iris.target

# Convert to DataFrame for easier manipulation and binary classification
df = pd.DataFrame(data=X, columns=iris.feature_names)
df['species'] = y

# Create a binary target: 1 for setosa, 0 for others
df['is_setosa'] = (df['species'] == 0).astype(int)
X_binary = df[iris.feature_names]
y_binary = df['is_setosa']

# Split data into training and testing sets
X_train, X_test, y_train, y_test = train_test_split(X_binary, y_binary, test_size=0.2, random_state=42, stratify=y_binary) # Stratify for balanced split

# Train a Logistic Regression model
model_lr = LogisticRegression(random_state=42)
model_lr.fit(X_train, y_train)

# Predict on the test set
y_pred_lr = model_lr.predict(X_test)

# Calculate accuracy
accuracy_lr = accuracy_score(y_test, y_pred_lr)
print(f"Logistic Regression Accuracy (Setosa vs Others): {accuracy_lr:.4f}")

# Optional: Print detailed report
print("\nClassification Report (Logistic Regression):")
print(classification_report(y_test, y_pred_lr))
```

---

**Question 3 (Conceptual):**

What is the primary advantage of using Decision Trees over Logistic Regression for certain datasets?

**Answer:** Decision Trees can capture non-linear relationships and complex interactions between features without requiring explicit feature engineering. Logistic Regression assumes a linear relationship between features and the log-odds of the target variable.

---

**Question 4 (Implementation - k-NN):**

Using the same binary classification setup from Question 2 (predicting 'setosa'), implement a k-NN classifier with `k=3`. Remember to scale your features.

```python
# Solution for Question 4
from sklearn.neighbors import KNeighborsClassifier
from sklearn.preprocessing import StandardScaler

# Split data into training and testing sets (already done in Question 2)
# X_train, X_test, y_train, y_test

# Scale features
scaler_knn = StandardScaler()
X_train_scaled_knn = scaler_train_knn.fit_transform(X_train)
X_test_scaled_knn = scaler_train_knn.transform(X_test)

# Train a k-NN model with k=3
model_knn = KNeighborsClassifier(n_neighbors=3)
model_knn.fit(X_train_scaled_knn, y_train)

# Predict on the test set
y_pred_knn = model_knn.predict(X_test_scaled_knn)

# Calculate accuracy
accuracy_knn = accuracy_score(y_test, y_pred_knn)
print(f"k-NN Accuracy (k=3) (Setosa vs Others): {accuracy_knn:.4f}")

# Optional: Print detailed report
print("\nClassification Report (k-NN):")
print(classification_report(y_test, y_pred_knn))
```

---

**Question 5 (Conceptual):**

When evaluating a binary classification model, why is accuracy not always the best metric, especially for imbalanced datasets? What are better alternatives?

**Answer:** Accuracy can be misleading on imbalanced datasets because a model can achieve high accuracy by simply predicting the majority class for all instances. For example, if 95% of the data belongs to class A and 5% to class B, a model that always predicts class A will have 95% accuracy but is useless for predicting class B.

Better alternatives include:
*   **Precision:** Useful when the cost of False Positives is high.
*   **Recall:** Useful when the cost of False Negatives is high.
*   **F1-Score:** A balance between precision and recall.
*   **Confusion Matrix:** Provides a detailed breakdown of correct and incorrect predictions for each class.
*   **ROC Curve and AUC:** Effective for evaluating the overall discriminative power of a binary classifier across different thresholds.

---

### 7. Key Takeaways for Module 4

*   **Classification** aims to assign data points to predefined categories.
*   **Logistic Regression** is a linear model that uses the sigmoid function to predict probabilities, suitable for binary classification. It assumes linearity and requires feature scaling.
*   **k-Nearest Neighbours (k-NN)** is a distance-based algorithm that classifies based on the majority vote of its neighbours. **Feature scaling is critical**, and the choice of 'k' and distance metric is important. It can be computationally intensive.
*   **Decision Trees** create a tree-like structure to make decisions. They are interpretable but prone to **overfitting**, requiring pruning. They do not require feature scaling.
*   **Model evaluation** is crucial. Metrics like accuracy, precision, recall, F1-score, and AUC provide different insights into a classifier's performance. Always consider the context and class balance when choosing metrics.
*   **Data preprocessing** (like feature scaling) is often a necessary step before applying ML algorithms.

This module provides a practical foundation for implementing and understanding some of the most fundamental classification algorithms in machine learning using Python.
