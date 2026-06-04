---
title: "Classification Algorithms - Logistic regression, decision trees, and k-Nearest Neighbors (k-NN)"
subject: "ALGORITHMS FOR DATA SCIENCE"
module: "Module 3: Regression Algorithms "
branch: "Computer Science and Engineering"
semester: 7
topicId: "684162790fc9aa1fdbc8c79d"
status: "completed"
scrapedAt: "2026-05-20T17:00:33.751Z"
---
# ALGORITHMS FOR DATA SCIENCE

## Module 3: Regression Algorithms (with a focus on Classification Algorithms)

### Topic: Classification Algorithms - Logistic Regression, Decision Trees, and k-Nearest Neighbors (k-NN)

**Important Note:** While this topic falls under "Regression Algorithms" in the module title, the focus here is on *classification* algorithms, which are distinct from regression algorithms. Regression aims to predict a continuous value, while classification aims to predict a discrete category. This module likely covers both to provide a broader understanding of supervised learning.

---

### 1. Introduction to Classification

**What is Classification?**

*   A supervised machine learning task where the goal is to predict a categorical label or class for a given input data point.
*   Unlike regression (which predicts continuous values), classification predicts discrete outcomes.
*   Examples:
    *   Email spam detection (spam/not spam)
    *   Image recognition (cat/dog/bird)
    *   Medical diagnosis (disease/no disease)
    *   Customer churn prediction (churn/not churn)

**Types of Classification:**

*   **Binary Classification:** Predicts between two classes (e.g., Yes/No, True/False, 0/1).
*   **Multi-class Classification:** Predicts among more than two classes (e.g., classifying different types of fruits).
*   **Multi-label Classification:** Assigns multiple labels to a single data point (e.g., tagging an image with "beach," "sunset," "ocean").

---

### 2. Logistic Regression

**Overview:**

*   Despite its name, Logistic Regression is a **classification** algorithm, particularly for binary classification.
*   It's a linear model that uses a sigmoid function to predict the probability of a data point belonging to a particular class.

**Key Concepts:**

*   **Sigmoid Function (Logistic Function):**
    *   Formula: $\sigma(z) = \frac{1}{1 + e^{-z}}$
    *   Transforms any real-valued number into a value between 0 and 1.
    *   This output can be interpreted as a probability.
*   **Linear Combination:** Similar to linear regression, it calculates a weighted sum of the input features plus a bias term: $z = w_0 + w_1x_1 + w_2x_2 + ... + w_nx_n$.
*   **Decision Boundary:**
    *   The point where the probability of belonging to class 1 is 0.5.
    *   For binary classification, a threshold (usually 0.5) is used to assign a class label. If $P(\text{class}=1) > 0.5$, assign to class 1; otherwise, assign to class 0.
    *   The decision boundary in logistic regression is linear (a line in 2D, a plane in 3D, a hyperplane in higher dimensions).
*   **Cost Function (Log Loss or Binary Cross-Entropy):**
    *   Measures the difference between the predicted probability and the actual class label.
    *   It penalizes confident incorrect predictions more heavily.
    *   Formula for a single example:
        *   If $y=1$: $-\log(p)$
        *   If $y=0$: $-\log(1-p)$
        *   Combined: $-[y\log(p) + (1-y)\log(1-p)]$
    *   The goal of training is to minimize this cost function.
*   **Optimization Algorithms:**
    *   Gradient Descent (or variations like Stochastic Gradient Descent, Adam) is used to find the optimal weights (coefficients) that minimize the cost function.

**Mathematical Formulation:**

*   Let $x$ be the input feature vector and $y$ be the binary class label (0 or 1).
*   The model predicts the probability of $y=1$ given $x$: $P(y=1|x) = \sigma(w \cdot x + b)$, where $w$ is the weight vector and $b$ is the bias.
*   $P(y=0|x) = 1 - P(y=1|x)$.

**Example:**

Imagine classifying emails as "Spam" (1) or "Not Spam" (0) based on two features:
1.  `num_keywords`: Number of spam-related keywords.
2.  `has_attachment`: Whether the email has an attachment (1 if yes, 0 if no).

The logistic regression model might learn weights $w_1$ and $w_2$ and a bias $b$. The probability of an email being spam could be calculated as:
$P(\text{Spam}) = \sigma(w_1 \cdot \text{num_keywords} + w_2 \cdot \text{has_attachment} + b)$

If $P(\text{Spam}) > 0.5$, the email is classified as Spam.

**Advantages:**

*   Simple and computationally efficient.
*   Outputs probabilities, which can be useful for decision-making.
*   Provides interpretability of feature importance through coefficients.

**Disadvantages:**

*   Assumes a linear relationship between features and the log-odds of the outcome.
*   Can be sensitive to outliers.
*   May not perform well on complex, non-linear decision boundaries.

---

### 3. Decision Trees

**Overview:**

*   A tree-like structure where each internal node represents a test on an attribute (feature), each branch represents an outcome of the test, and each leaf node represents a class label (or a prediction).
*   They work by recursively partitioning the data based on feature values.

**Key Concepts:**

*   **Root Node:** The topmost node, representing the entire dataset.
*   **Internal Nodes:** Nodes that represent a test on a feature.
*   **Branches (Edges):** Connect nodes and represent the outcome of a test (e.g., "Feature A > 5").
*   **Leaf Nodes (Terminal Nodes):** Nodes that represent the final classification outcome.
*   **Splitting:** The process of dividing a node into two or more sub-nodes based on a feature's value. The goal is to create sub-nodes that are as "pure" as possible (i.e., contain data points belonging to a single class).
*   **Impurity Measures (for splitting):**
    *   **Gini Impurity:** Measures the probability of incorrectly classifying a randomly chosen element from the dataset if it were randomly labeled according to the distribution of labels in the subset.
        *   For a node with classes $C_1, C_2, ..., C_k$: $Gini = 1 - \sum_{i=1}^k (p_i)^2$, where $p_i$ is the proportion of data points belonging to class $i$.
        *   A Gini impurity of 0 means perfect purity.
    *   **Information Gain (based on Entropy):** Measures the reduction in uncertainty (entropy) after a split.
        *   Entropy: $Entropy = -\sum_{i=1}^k p_i \log_2(p_i)$. Higher entropy means more uncertainty.
        *   Information Gain = Entropy(parent) - $\sum (\frac{N_{child}}{N_{parent}} \cdot Entropy(child))$
*   **Pruning:** The process of reducing the size of the tree by removing nodes that provide little power in classification. This helps prevent overfitting.
    *   **Pre-pruning:** Stopping the tree growth early (e.g., by setting a maximum depth, minimum samples per leaf).
    *   **Post-pruning:** Growing the full tree and then removing branches that don't improve performance on a validation set.
*   **Decision Rule:** Each path from the root node to a leaf node represents a decision rule.

**How it works (Building a Tree):**

1.  Start with the entire dataset at the root node.
2.  Select the feature that best splits the data into homogeneous subsets (using Gini impurity or information gain).
3.  Create child nodes for each possible outcome of the selected feature's test.
4.  Recursively repeat steps 2 and 3 for each child node until a stopping criterion is met (e.g., all data points in a node belong to the same class, no more features to split on, or a pre-defined depth is reached).
5.  Assign the majority class of the data points in a leaf node as the prediction for that leaf.

**Example:**

Classifying whether to approve a loan based on:
*   `Income`
*   `Credit Score`
*   `Employment Duration`

A decision tree might look like:

```
          Root (All Applicants)
             |
   Credit Score > 700?
         /         \
       Yes         No
      /             \
  Income > $50k?    Leave Blank (Default: Reject)
     /     \
   Yes     No
  /         \
Approve    Reject
```

**Advantages:**

*   Easy to understand and interpret.
*   Can handle both numerical and categorical data.
*   No need for feature scaling.
*   Can capture non-linear relationships.

**Disadvantages:**

*   Can be prone to overfitting, especially with deep trees.
*   Can be unstable; small changes in data can lead to a completely different tree.
*   Can create biased trees if some classes dominate.

---

### 4. k-Nearest Neighbors (k-NN)

**Overview:**

*   A simple, non-parametric, instance-based learning algorithm used for both classification and regression.
*   For classification, it predicts the class of a new data point based on the majority class of its 'k' nearest neighbors in the training data.

**Key Concepts:**

*   **'k':** The number of nearest neighbors to consider. This is a hyperparameter that needs to be tuned.
*   **Distance Metric:** Used to measure the similarity or dissimilarity between data points. Common metrics include:
    *   **Euclidean Distance:** The straight-line distance between two points in Euclidean space. For two points $p = (p_1, p_2, ..., p_n)$ and $q = (q_1, q_2, ..., q_n)$, the Euclidean distance is:
        $d(p, q) = \sqrt{\sum_{i=1}^n (p_i - q_i)^2}$
    *   **Manhattan Distance (L1 distance):** The sum of the absolute differences of their coordinates.
        $d(p, q) = \sum_{i=1}^n |p_i - q_i|$
    *   **Minkowski Distance:** A generalization of both Euclidean and Manhattan distances.
*   **Feature Scaling:** Crucial for k-NN, as algorithms that rely on distance measures are sensitive to the scale of features. Features with larger ranges can dominate the distance calculation. Common scaling methods include Standardization (Z-score scaling) or Normalization (Min-Max scaling).
*   **Majority Voting:** For classification, once the 'k' nearest neighbors are identified, the class that appears most frequently among these neighbors is assigned to the new data point.

**How it works (Classification):**

1.  Choose a value for 'k'.
2.  Calculate the distance between the new data point and all data points in the training set using a chosen distance metric.
3.  Identify the 'k' data points with the smallest distances to the new data point.
4.  Count the occurrences of each class among these 'k' neighbors.
5.  Assign the class with the highest count (majority vote) to the new data point.

**Example:**

Classifying a new fruit based on its `weight` and `sweetness`:

Suppose we have training data points:
*   Apple: (Weight=150, Sweetness=7) - Class: Fruit
*   Banana: (Weight=120, Sweetness=8) - Class: Fruit
*   Lemon: (Weight=80, Sweetness=3) - Class: Not Fruit
*   Orange: (Weight=130, Sweetness=6) - Class: Fruit

New data point: (Weight=135, Sweetness=7)

Let's choose k=3 and use Euclidean distance.

*   Distance to Apple: $\sqrt{(150-135)^2 + (7-7)^2} = \sqrt{15^2} = 15$
*   Distance to Banana: $\sqrt{(120-135)^2 + (8-7)^2} = \sqrt{(-15)^2 + 1^2} = \sqrt{225+1} = \sqrt{226} \approx 15.03$
*   Distance to Lemon: $\sqrt{(80-135)^2 + (3-7)^2} = \sqrt{(-55)^2 + (-4)^2} = \sqrt{3025+16} = \sqrt{3041} \approx 55.15$
*   Distance to Orange: $\sqrt{(130-135)^2 + (6-7)^2} = \sqrt{(-5)^2 + (-1)^2} = \sqrt{25+1} = \sqrt{26} \approx 5.10$

The 3 nearest neighbors are: Orange (distance 5.10), Apple (distance 15), Banana (distance 15.03).

*   Orange: Class = Fruit
*   Apple: Class = Fruit
*   Banana: Class = Fruit

Majority vote: 3 "Fruit" votes.
The new data point is classified as **Fruit**.

**Choosing 'k':**

*   **Small 'k':** Sensitive to noise and outliers; can lead to overfitting.
*   **Large 'k':** Smoother decision boundaries; can lead to underfitting.
*   The optimal 'k' is usually found through cross-validation. A common starting point is $\sqrt{N}$, where N is the number of training samples.

**Advantages:**

*   Simple to implement and understand.
*   No training phase (lazy learner).
*   Can adapt to new data easily.
*   Effective for complex decision boundaries.

**Disadvantages:**

*   Computationally expensive during prediction, especially with large datasets.
*   Requires feature scaling.
*   Sensitive to the choice of 'k' and the distance metric.
*   Can suffer from the "curse of dimensionality" (performance degrades as the number of features increases).

---

### 5. Practice Questions and Exercises

**Question 1:**

Which of the following is NOT a classification algorithm?
a) Logistic Regression
b) Decision Tree
c) k-Nearest Neighbors
d) Linear Regression

**Question 2:**

The sigmoid function in Logistic Regression maps any real-valued number to a range between:
a) -1 and 1
b) 0 and 1
c) 0 and infinity
d) -infinity and 0

**Question 3:**

In Decision Trees, which measure is used to evaluate the quality of a split by quantifying the reduction in impurity?
a) Variance
b) Mean Squared Error
c) Information Gain
d) Correlation Coefficient

**Question 4:**

What is the primary reason for performing feature scaling before using the k-Nearest Neighbors algorithm?
a) To reduce the number of features
b) To prevent overfitting
c) To ensure that features with larger ranges do not dominate the distance calculation
d) To speed up the computation of the decision tree

**Question 5 (Applied):**

You are building a spam email classifier. You have trained a Logistic Regression model and obtained the following probability for a new email: $P(\text{Spam}) = 0.72$. Based on the standard threshold of 0.5, how would you classify this email?

**Question 6 (Conceptual):**

Discuss a scenario where a Decision Tree might be preferred over Logistic Regression, and vice versa.

---

### 6. Answers to Practice Questions

**Answer 1:**

d) Linear Regression

*   **Explanation:** Linear Regression is used for predicting continuous values (regression), not discrete categories (classification). Logistic Regression, Decision Trees, and k-NN are all classification algorithms.

**Answer 2:**

b) 0 and 1

*   **Explanation:** The sigmoid function, $\sigma(z) = \frac{1}{1 + e^{-z}}$, always outputs a value between 0 and 1, representing a probability.

**Answer 3:**

c) Information Gain

*   **Explanation:** Information Gain (calculated using Entropy) or Gini Impurity are measures used in Decision Trees to determine the best feature to split on. Variance and Mean Squared Error are typically used in regression tasks.

**Answer 4:**

c) To ensure that features with larger ranges do not dominate the distance calculation

*   **Explanation:** k-NN relies on distance metrics. If features are on different scales, features with larger numerical ranges (e.g., income in thousands) can disproportionately influence the distance calculation compared to features with smaller ranges (e.g., number of emails sent). Scaling ensures all features contribute more equally.

**Answer 5 (Applied):**

You would classify this email as **Spam**.

*   **Explanation:** The probability of the email being spam is 0.72, which is greater than the typical threshold of 0.5. This indicates a higher likelihood of the email belonging to the "Spam" class.

**Answer 6 (Conceptual):**

*   **Decision Tree Preferred:**
    *   **Scenario:** You have a dataset with many non-linear relationships between features and the target variable, and interpretability is crucial. For example, classifying loan applications where the decision depends on combinations of income, credit score, and employment history in complex ways, and you want a simple set of rules.
    *   **Reasoning:** Decision trees naturally handle non-linear decision boundaries and can be easily visualized and explained as a series of IF-THEN rules.

*   **Logistic Regression Preferred:**
    *   **Scenario:** You have a dataset where the relationship between features and the log-odds of the target variable is approximately linear, and you need a fast, efficient model that outputs probabilities. For example, classifying customer churn based on usage patterns and demographic data, where you want to understand the impact of each feature on the probability of churn.
    *   **Reasoning:** Logistic regression is computationally efficient, provides clear probability outputs, and the coefficients offer direct insights into the influence of each feature on the outcome. It performs well when the decision boundary is close to linear.

---

### 7. Important Points to Remember

*   **Classification vs. Regression:** Always remember the fundamental difference: Classification predicts categories, Regression predicts continuous values.
*   **Logistic Regression for Classification:** Despite its name, it's a powerful binary (and can be extended to multi-class) classification algorithm.
*   **Decision Tree Splits:** The effectiveness of a decision tree hinges on choosing the best features to split on at each node, minimizing impurity (Gini or Entropy).
*   **Overfitting in Trees:** Be mindful of creating overly complex decision trees. Pruning is essential for generalization.
*   **k-NN: Distance Matters:** The choice of distance metric and the value of 'k' are critical hyperparameters in k-NN.
*   **Feature Scaling for k-NN:** Never forget to scale your features when using k-NN, otherwise, features with larger scales will unfairly dominate the distance calculations.
*   **Lazy Learners:** k-NN is a "lazy learner" because it doesn't build an explicit model during training; it defers computation until prediction time.

---
