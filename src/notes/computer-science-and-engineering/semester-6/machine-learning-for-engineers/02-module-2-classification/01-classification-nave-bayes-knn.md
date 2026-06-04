---
title: "Classification  - Naïve Bayes, KNN"
subject: "MACHINE LEARNING FOR ENGINEERS"
module: "Module 2: Classification  "
branch: "Computer Science and Engineering"
semester: 6
topicId: "684162780fc9aa1fdbc8bf4c"
status: "completed"
scrapedAt: "2026-05-20T16:55:00.440Z"
---
# Machine Learning for Engineers - Module 2: Classification

## Topic: Naïve Bayes and K-Nearest Neighbors (KNN)

---

### **1. Introduction to Classification**

**Learning Outcome:** Understand the fundamental concept of classification in machine learning.

*   **What is Classification?**
    *   A supervised learning task where the goal is to assign an input data point to one of several predefined categories or classes.
    *   The output is a discrete label.
    *   **Examples:**
        *   Email spam detection (spam/not spam)
        *   Image recognition (cat/dog/bird)
        *   Medical diagnosis (disease/no disease)
        *   Customer churn prediction (churn/not churn)

*   **Key Components:**
    *   **Features (X):** Input variables or attributes of the data.
    *   **Labels (y):** The target variable, representing the class to which a data point belongs.
    *   **Classifier:** An algorithm that learns a mapping from features to labels.

---

### **2. Naïve Bayes Classifier**

**Learning Outcomes:**
*   Understand the underlying principles of the Naïve Bayes classifier.
*   Apply Naïve Bayes to solve classification problems.

*   **Core Principle: Bayes' Theorem**
    *   Naïve Bayes is a probabilistic classifier based on Bayes' theorem.
    *   **Bayes' Theorem:**
        $$ P(y|X) = \frac{P(X|y) * P(y)}{P(X)} $$
        Where:
        *   $P(y|X)$: **Posterior Probability** - The probability of class $y$ given the observed features $X$. This is what we want to predict.
        *   $P(X|y)$: **Likelihood** - The probability of observing features $X$ given the class $y$.
        *   $P(y)$: **Prior Probability** - The probability of class $y$ before observing any data.
        *   $P(X)$: **Evidence** - The probability of observing features $X$ (which is constant for all classes, so it can be ignored when comparing probabilities for different classes).

*   **The "Naïve" Assumption:**
    *   The key assumption that makes Naïve Bayes "naïve" is the **conditional independence of features** given the class.
    *   This means that the presence or absence of a particular feature is unrelated to the presence or absence of any other feature, given the class label.
    *   For a set of features $X = \{x_1, x_2, ..., x_n\}$, the likelihood can be simplified:
        $$ P(X|y) = P(x_1|y) * P(x_2|y) * ... * P(x_n|y) $$

*   **How it Works (Classification):**
    1.  **Calculate Prior Probabilities:** $P(y)$ for each class $y$. This is typically estimated by the proportion of training examples belonging to each class.
    2.  **Calculate Likelihoods:** $P(x_i|y)$ for each feature $x_i$ and each class $y$. The way this is calculated depends on the type of data:
        *   **For Categorical Features (e.g., words in text):** Count the frequency of each feature value occurring with each class, and divide by the total number of instances of that class.
        *   **For Continuous Features (e.g., height, weight):** Assume a probability distribution (commonly Gaussian/Normal) and estimate its parameters (mean and variance) for each class. This leads to Gaussian Naïve Bayes.
    3.  **Calculate Posterior Probabilities:** Using Bayes' theorem and the independence assumption, calculate $P(y|X)$ for each class.
    4.  **Predict:** Assign the input data point to the class with the highest posterior probability.

*   **Types of Naïve Bayes:**
    *   **Gaussian Naïve Bayes:** Assumes features follow a Gaussian distribution. Suitable for continuous data.
    *   **Multinomial Naïve Bayes:** Used for discrete counts (e.g., word frequencies in text classification). Features are represented as counts of occurrences.
    *   **Bernoulli Naïve Bayes:** Used for binary features (presence/absence of a feature). Suitable for text classification where features are binary indicators of word presence.

*   **Example: Email Spam Detection**
    *   **Features:** Presence of certain words (e.g., "free", "win", "money", "viagra").
    *   **Classes:** Spam, Not Spam.
    *   **Training Data:** A collection of emails labeled as spam or not spam.
    *   **Process:**
        1.  Calculate $P(\text{Spam})$ and $P(\text{Not Spam})$.
        2.  Calculate $P(\text{"free"} | \text{Spam})$, $P(\text{"win"} | \text{Spam})$, etc., and similarly for "Not Spam".
        3.  For a new email with words "free" and "win", calculate $P(\text{Spam} | \text{"free", "win"})$ and $P(\text{Not Spam} | \text{"free", "win"})$ using the formula:
            $$ P(\text{Spam} | \text{"free", "win"}) \propto P(\text{"free"} | \text{Spam}) * P(\text{"win"} | \text{Spam}) * P(\text{Spam}) $$
            $$ P(\text{Not Spam} | \text{"free", "win"}) \propto P(\text{"free"} | \text{Not Spam}) * P(\text{"win"} | \text{Not Spam}) * P(\text{Not Spam}) $$
        4.  Compare the resulting probabilities and classify the email accordingly.

*   **Advantages of Naïve Bayes:**
    *   Simple and easy to implement.
    *   Works well with high-dimensional data (e.g., text classification).
    *   Requires relatively little training data.
    *   Fast training and prediction times.
    *   Performs surprisingly well even when the independence assumption is violated.

*   **Disadvantages of Naïve Bayes:**
    *   The "naïve" independence assumption can be unrealistic in practice.
    *   Zero-frequency problem: If a feature value does not appear in the training data for a specific class, its likelihood will be zero, leading to a zero posterior probability for that class (smoothing techniques like Laplace smoothing can mitigate this).

*   **Important Points to Remember:**
    *   **Bayes' Theorem is the foundation.**
    *   **Conditional Independence of features is the "naïve" assumption.**
    *   **Categorical and continuous data require different likelihood estimations.**
    *   **Laplace smoothing is crucial for handling unseen feature values.**

---

### **3. K-Nearest Neighbors (KNN) Classifier**

**Learning Outcomes:**
*   Understand the principles of the K-Nearest Neighbors (KNN) algorithm.
*   Apply KNN to solve classification problems.
*   Explain the impact of the parameter 'k' on the KNN algorithm.

*   **Core Principle:**
    *   KNN is a non-parametric, instance-based learning algorithm.
    *   It classifies a new data point based on the majority class of its 'k' nearest neighbors in the feature space.
    *   **"Birds of a feather flock together"** - similar data points are likely to belong to the same class.

*   **How it Works:**
    1.  **Choose 'k':** Select the number of nearest neighbors to consider.
    2.  **Calculate Distances:** For a new, unclassified data point, calculate the distance between it and all data points in the training set. Common distance metrics include:
        *   **Euclidean Distance:** The straight-line distance between two points. For two points $p = (p_1, p_2, ..., p_n)$ and $q = (q_1, q_2, ..., q_n)$:
            $$ d(p, q) = \sqrt{\sum_{i=1}^{n} (p_i - q_i)^2} $$
        *   **Manhattan Distance (L1 Distance):** The sum of absolute differences between coordinates.
            $$ d(p, q) = \sum_{i=1}^{n} |p_i - q_i| $$
        *   **Minkowski Distance:** A generalization of Euclidean and Manhattan distances.
            $$ d(p, q) = \left(\sum_{i=1}^{n} |p_i - q_i|^m\right)^{1/m} $$
            (Euclidean is m=2, Manhattan is m=1)
    3.  **Identify 'k' Nearest Neighbors:** Find the 'k' training data points with the smallest distances to the new data point.
    4.  **Majority Vote:** Count the occurrences of each class among these 'k' neighbors. The class with the highest count is assigned to the new data point.

*   **The Importance of 'k':**
    *   **Small 'k' (e.g., k=1):**
        *   **Pros:** More sensitive to noise and outliers. Can lead to a complex decision boundary that closely follows the training data.
        *   **Cons:** Prone to overfitting. The decision boundary can be very jagged.
    *   **Large 'k':**
        *   **Pros:** Smoother decision boundary, less sensitive to noise.
        *   **Cons:** Might miss local patterns and overgeneralize. Can lead to underfitting. The decision boundary becomes smoother and potentially less accurate for local regions.

*   **Choosing the Optimal 'k':**
    *   There is no single "best" value for 'k'.
    *   It's a hyperparameter that needs to be tuned, typically using cross-validation.
    *   A common approach is to try odd values of 'k' to avoid ties in voting, although strategies for tie-breaking exist.

*   **Data Preprocessing for KNN:**
    *   **Feature Scaling is CRUCIAL:** KNN is highly sensitive to the scale of features. Features with larger ranges can disproportionately influence the distance calculations.
    *   **Common Scaling Techniques:**
        *   **Standardization (Z-score scaling):** Transforms data to have a mean of 0 and a standard deviation of 1.
            $$ X_{\text{scaled}} = \frac{X - \mu}{\sigma} $$
        *   **Normalization (Min-Max Scaling):** Scales data to a specific range, usually [0, 1].
            $$ X_{\text{scaled}} = \frac{X - X_{\min}}{X_{\max} - X_{\min}} $$

*   **Example: Flower Classification (Iris Dataset)**
    *   **Features:** Sepal Length, Sepal Width, Petal Length, Petal Width.
    *   **Classes:** Setosa, Versicolor, Virginica.
    *   **Process:**
        1.  Suppose we have a new flower with features (5.1, 3.5, 1.4, 0.2).
        2.  We choose k=3.
        3.  Calculate the Euclidean distance from this new flower to all flowers in the training set.
        4.  Identify the 3 closest flowers. Let's say they are:
            *   Flower 1: Setosa (distance 0.1)
            *   Flower 2: Setosa (distance 0.15)
            *   Flower 3: Versicolor (distance 0.4)
        5.  Count the classes among the 3 neighbors: 2 Setosa, 1 Versicolor.
        6.  The majority class is Setosa, so the new flower is classified as Setosa.

*   **Advantages of KNN:**
    *   Simple to understand and implement.
    *   No explicit training phase (learns from data at prediction time).
    *   Can naturally handle multi-class classification.
    *   Can learn complex decision boundaries.

*   **Disadvantages of KNN:**
    *   **Computationally expensive during prediction:** Needs to calculate distances to all training points. This can be very slow for large datasets.
    *   **Sensitive to the choice of 'k' and distance metric.**
    *   **Requires feature scaling.**
    *   **Suffers from the curse of dimensionality:** Performance degrades in high-dimensional spaces as distances become less meaningful.
    *   **Needs a lot of memory:** Stores the entire training dataset.

*   **Important Points to Remember:**
    *   **Based on similarity/distance to neighbors.**
    *   **'k' is a crucial hyperparameter.**
    *   **Feature scaling is mandatory for good performance.**
    *   **Computationally intensive at prediction time.**
    *   **Susceptible to the curse of dimensionality.**

---

### **4. Practice Questions and Exercises**

**Question 1 (Naïve Bayes):**
You are building a spam filter. You have trained a Naïve Bayes classifier and calculated the following probabilities for a new email with features "free" and "money":
*   $P(\text{Spam}) = 0.2$
*   $P(\text{"free"} | \text{Spam}) = 0.1$
*   $P(\text{"money"} | \text{Spam}) = 0.05$
*   $P(\text{Not Spam}) = 0.8$
*   $P(\text{"free"} | \text{Not Spam}) = 0.01$
*   $P(\text{"money"} | \text{Not Spam}) = 0.005$

Assuming feature independence, which class is the email most likely to belong to?

**Answer 1:**
We need to calculate the posterior probabilities (or proportional to them) for each class.
For Spam:
$P(\text{Spam} | \text{"free", "money"}) \propto P(\text{"free"} | \text{Spam}) * P(\text{"money"} | \text{Spam}) * P(\text{Spam})$
$P(\text{Spam} | \text{"free", "money"}) \propto 0.1 * 0.05 * 0.2 = 0.001$

For Not Spam:
$P(\text{Not Spam} | \text{"free", "money"}) \propto P(\text{"free"} | \text{Not Spam}) * P(\text{"money"} | \text{Not Spam}) * P(\text{Not Spam})$
$P(\text{Not Spam} | \text{"free", "money"}) \propto 0.01 * 0.005 * 0.8 = 0.00004$

Comparing the proportional posterior probabilities: $0.001 > 0.00004$.
Therefore, the email is most likely to belong to the **Spam** class.

**Question 2 (KNN):**
Consider the following 2D training data points with their classes:
*   A: (1, 2) - Class 0
*   B: (2, 3) - Class 0
*   C: (4, 5) - Class 1
*   D: (5, 4) - Class 1

A new data point X is located at (3, 4). If you use KNN with k=3 and Euclidean distance, what class will X be predicted to?

**Answer 2:**
1.  **Calculate Euclidean Distances from X (3, 4) to each training point:**
    *   Distance to A (1, 2): $\sqrt{(3-1)^2 + (4-2)^2} = \sqrt{2^2 + 2^2} = \sqrt{4 + 4} = \sqrt{8} \approx 2.83$
    *   Distance to B (2, 3): $\sqrt{(3-2)^2 + (4-3)^2} = \sqrt{1^2 + 1^2} = \sqrt{1 + 1} = \sqrt{2} \approx 1.41$
    *   Distance to C (4, 5): $\sqrt{(3-4)^2 + (4-5)^2} = \sqrt{(-1)^2 + (-1)^2} = \sqrt{1 + 1} = \sqrt{2} \approx 1.41$
    *   Distance to D (5, 4): $\sqrt{(3-5)^2 + (4-4)^2} = \sqrt{(-2)^2 + 0^2} = \sqrt{4 + 0} = \sqrt{4} = 2.00$

2.  **Identify the 3 Nearest Neighbors:**
    The distances in ascending order are: 1.41 (B), 1.41 (C), 2.00 (D), 2.83 (A).
    The 3 nearest neighbors are B, C, and D.

3.  **Majority Vote:**
    *   B: Class 0
    *   C: Class 1
    *   D: Class 1

    There are 2 votes for Class 1 and 1 vote for Class 0.

    Therefore, the new data point X will be predicted to belong to **Class 1**.

**Question 3 (Conceptual):**
Which of the following statements is FALSE regarding Naïve Bayes and KNN?
a) Naïve Bayes assumes feature independence given the class.
b) KNN's performance is significantly affected by the scale of features.
c) Naïve Bayes is typically more computationally expensive during prediction than KNN.
d) The choice of 'k' in KNN impacts the complexity of the decision boundary.

**Answer 3:**
The FALSE statement is **c)**.
*   Naïve Bayes is generally very fast at prediction time because it involves simple probability calculations.
*   KNN is computationally expensive at prediction time because it requires calculating distances to all training data points.

---

### **5. Summary of Key Concepts**

*   **Classification:** Assigning data points to predefined categories.
*   **Naïve Bayes:** Probabilistic classifier based on Bayes' theorem with a strong (naïve) assumption of feature independence. Excellent for text data, fast.
*   **KNN:** Non-parametric, instance-based classifier that relies on similarity to neighbors. Sensitive to 'k' and feature scaling, computationally intensive at prediction.

---

This concludes Module 2, Topic: Naïve Bayes and KNN. Remember to practice these concepts with various datasets to solidify your understanding.
