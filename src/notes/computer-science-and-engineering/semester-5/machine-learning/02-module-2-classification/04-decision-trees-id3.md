---
title: "Decision Trees – ID3"
subject: "MACHINE LEARNING"
module: "Module 2: Classification  "
branch: "Computer Science and Engineering"
semester: 5
topicId: "684162760fc9aa1fdbc8b5b6"
status: "completed"
scrapedAt: "2026-05-20T16:46:31.314Z"
---
# MACHINE LEARNING - Module 2: Classification - Decision Trees: ID3

## Introduction

This module delves into the ID3 (Iterative Dichotomiser 3) algorithm, a foundational decision tree learning algorithm used for classification tasks in Machine Learning. Decision trees offer a visual and interpretable way to make predictions based on a series of decisions.

**Learning Outcomes:**

*   Understand the fundamental concepts of decision trees.
*   Explain the ID3 algorithm and its working principles.
*   Calculate Entropy and Information Gain.
*   Construct a decision tree using the ID3 algorithm.
*   Identify the limitations of the ID3 algorithm.

## 1. Fundamental Concepts of Decision Trees

*   **Definition:** A decision tree is a supervised learning algorithm used for both classification and regression tasks. It represents a set of rules organized in a hierarchical structure. Each node in the tree represents a test on an attribute, each branch represents an outcome of the test, and each leaf node represents a class label (in classification) or a value (in regression).

*   **Components of a Decision Tree:**
    *   **Root Node:** The topmost node in the tree. It represents the entire dataset.
    *   **Internal Node (Decision Node):** Represents a test on an attribute.
    *   **Branch:** Represents the outcome of a test.
    *   **Leaf Node (Terminal Node):** Represents a class label or a value.
    *   **Splitting:** The process of dividing a node into two or more sub-nodes based on an attribute's value.
    *   **Pruning:** The process of removing sub-nodes of a decision node.

*   **Advantages of Decision Trees:**
    *   Easy to understand and interpret.
    *   Can handle both categorical and numerical data.
    *   Require little data preparation.
    *   Can be used for feature selection.

*   **Disadvantages of Decision Trees:**
    *   Prone to overfitting (can memorize the training data).
    *   Sensitive to small changes in the data.
    *   Can be unstable.
    *   Greedy Algorithm, might not find the optimal solution.

## 2. The ID3 Algorithm: Introduction and Working Principles

*   **Definition:** ID3 (Iterative Dichotomiser 3) is a greedy algorithm developed by Ross Quinlan used to generate a decision tree from a dataset. It works by recursively selecting the best attribute to split the data based on the concept of Information Gain.

*   **Key Principles:**
    1.  **Top-Down Greedy Approach:** The algorithm starts with the entire dataset at the root node and recursively splits the data until a stopping criterion is met.
    2.  **Information Gain:** ID3 uses Information Gain as the metric to determine the best attribute to split on. The attribute with the highest Information Gain is selected.
    3.  **Entropy:** Information Gain is calculated based on Entropy, which measures the impurity or randomness of the data. A dataset with a uniform distribution of classes has high entropy, while a dataset with only one class has zero entropy.
    4.  **Stopping Criteria:** The algorithm stops splitting when:
        *   All instances belong to the same class.
        *   There are no more attributes to split on.
        *   There are no more instances in the dataset.

*   **ID3 Algorithm Steps:**

    1.  **Calculate the Entropy of the target variable (the class label).**
    2.  **For each attribute:**
        *   Calculate the Entropy for each value of the attribute.
        *   Calculate the Information Gain for the attribute.
    3.  **Select the attribute with the highest Information Gain to be the splitting attribute for the current node.**
    4.  **Create a decision node that splits on the selected attribute.**
    5.  **Repeat steps 1-4 for each branch created from the split, using only the instances that belong to that branch.**
    6.  **Stop when all instances in a branch belong to the same class or when there are no more attributes to split on.**

## 3. Entropy and Information Gain

*   **Entropy:**

    *   **Definition:** A measure of the impurity or randomness of a set of examples.
    *   **Formula:**  `Entropy(S) = - Σ p(i) * log2(p(i))`

        *   `S` is the set of examples.
        *   `p(i)` is the proportion of examples in `S` that belong to class `i`.
        *   `Σ` represents the summation over all classes.

    *   **Example:**

        Suppose we have a dataset with 9 positive examples and 5 negative examples.

        `Entropy(S) = - (9/14) * log2(9/14) - (5/14) * log2(5/14)`
        `Entropy(S) ≈ - (0.643) * (-0.553) - (0.357) * (-1.485)`
        `Entropy(S) ≈ 0.4 + 0.53`
        `Entropy(S) ≈ 0.94`

        This indicates a relatively high level of impurity.

*   **Information Gain:**

    *   **Definition:** The reduction in entropy achieved by splitting the data on a particular attribute. It measures how well an attribute separates the training data according to the target classification.
    *   **Formula:** `Gain(S, A) = Entropy(S) - Σ (|Sv| / |S|) * Entropy(Sv)`

        *   `S` is the set of examples.
        *   `A` is the attribute.
        *   `Sv` is the subset of `S` for which attribute `A` has value `v`.
        *   `|Sv|` is the number of examples in `Sv`.
        *   `|S|` is the number of examples in `S`.
        *   `Entropy(S)` is the entropy of the original set `S`.
        *   `Entropy(Sv)` is the entropy of the subset `Sv`.
        *   `Σ` represents the summation over all values `v` of attribute `A`.

    *   **Example:**

        Suppose we have the following data:

        | Outlook  | Temperature | Humidity | Wind  | PlayTennis |
        |----------|-------------|----------|-------|------------|
        | Sunny    | Hot         | High     | Weak  | No         |
        | Sunny    | Hot         | High     | Strong| No         |
        | Overcast | Hot         | High     | Weak  | Yes        |
        | Rainy    | Mild        | High     | Weak  | Yes        |
        | Rainy    | Cool        | Normal   | Weak  | Yes        |
        | Rainy    | Cool        | Normal   | Strong| No         |
        | Overcast | Cool        | Normal   | Strong| Yes        |
        | Sunny    | Mild        | High     | Weak  | No         |
        | Sunny    | Cool        | Normal   | Weak  | Yes        |
        | Rainy    | Mild        | Normal   | Weak  | Yes        |
        | Sunny    | Mild        | Normal   | Strong| Yes        |
        | Overcast | Mild        | High     | Strong| Yes        |
        | Overcast | Hot         | Normal   | Weak  | Yes        |
        | Rainy    | Mild        | High     | Strong| No         |

        Total: 14 examples. 9 Yes, 5 No.
        `Entropy(S) = - (9/14) * log2(9/14) - (5/14) * log2(5/14) ≈ 0.94`

        Now, let's calculate the Information Gain for "Outlook":

        *   Outlook = Sunny: 5 examples (2 Yes, 3 No) -> `Entropy(Sunny) = - (2/5) * log2(2/5) - (3/5) * log2(3/5) ≈ 0.971`
        *   Outlook = Overcast: 4 examples (4 Yes, 0 No) -> `Entropy(Overcast) = - (4/4) * log2(4/4) - (0/4) * log2(0/4) = 0`
        *   Outlook = Rainy: 5 examples (3 Yes, 2 No) -> `Entropy(Rainy) = - (3/5) * log2(3/5) - (2/5) * log2(2/5) ≈ 0.971`

        `Gain(S, Outlook) = Entropy(S) - [(5/14) * Entropy(Sunny) + (4/14) * Entropy(Overcast) + (5/14) * Entropy(Rainy)]`
        `Gain(S, Outlook) = 0.94 - [(5/14) * 0.971 + (4/14) * 0 + (5/14) * 0.971]`
        `Gain(S, Outlook) ≈ 0.94 - 0.6935 ≈ 0.2465`

        Similarly, you would calculate the Information Gain for Temperature, Humidity, and Wind and choose the attribute with the highest gain to split on at the root node.

## 4. Constructing a Decision Tree using the ID3 Algorithm

Let's continue the previous example to illustrate the construction process.

1.  **Root Node:** Based on the calculations (omitted for brevity, but assumed to be calculated), "Outlook" has the highest Information Gain. Therefore, "Outlook" becomes the root node.

2.  **Splitting on Outlook:**
    *   **Outlook = Sunny:** We have 5 examples. Since `Entropy(Sunny) ≈ 0.971`, we need to split further.  We would now consider the remaining attributes (Temperature, Humidity, Wind) for these 5 examples only, and calculate the Information Gain for each. Let's say "Humidity" has the highest Information Gain.  We split on "Humidity":
        *   Humidity = High: 3 examples (No, No, No) -> Leaf Node: No
        *   Humidity = Normal: 2 examples (Yes, Yes) -> Leaf Node: Yes

    *   **Outlook = Overcast:** We have 4 examples, all "Yes".  Leaf Node: Yes

    *   **Outlook = Rainy:** We have 5 examples. Since `Entropy(Rainy) ≈ 0.971`, we need to split further.  We would now consider the remaining attributes (Temperature, Humidity, Wind) for these 5 examples only, and calculate the Information Gain for each. Let's say "Wind" has the highest Information Gain. We split on "Wind":
        *   Wind = Weak: 3 examples (Yes, Yes, Yes) -> Leaf Node: Yes
        *   Wind = Strong: 2 examples (No, No) -> Leaf Node: No

3.  **The Resulting Decision Tree:**

    ```
    Outlook
    |
    |-- Sunny
    |   |
    |   |-- Humidity
    |   |   |
    |   |   |-- High: No
    |   |   |-- Normal: Yes
    |
    |-- Overcast: Yes
    |
    |-- Rainy
    |   |
    |   |-- Wind
    |   |   |
    |   |   |-- Weak: Yes
    |   |   |-- Strong: No
    ```

## 5. Limitations of the ID3 Algorithm

*   **Bias towards Attributes with Many Values:** ID3 favors attributes with a large number of distinct values, as these attributes tend to have higher Information Gain. This can lead to overfitting. This is addressed by algorithms like C4.5 (which uses Gain Ratio).
*   **Handles only Categorical Attributes:** ID3 cannot directly handle continuous attributes. Continuous attributes must be discretized before being used in ID3.
*   **No Handling of Missing Values:** ID3 cannot handle missing values in the dataset.  Missing values need to be pre-processed (e.g., imputed) before using ID3.
*   **Overfitting:** As mentioned before, ID3 can overfit the training data if the tree is allowed to grow too deep. This can be mitigated by pruning the tree or using other regularization techniques.

## Practice Questions/Exercises

1.  **Calculate the entropy of a dataset with 100 examples, where 60 are positive and 40 are negative.**

    *   **Answer:**  `Entropy(S) = - (60/100) * log2(60/100) - (40/100) * log2(40/100) ≈ 0.971`

2.  **Explain the meaning of Information Gain in the context of decision tree learning.**

    *   **Answer:** Information Gain represents the reduction in entropy (impurity) achieved by splitting the dataset on a specific attribute. A higher Information Gain indicates that the attribute is more effective in separating the data into distinct classes.

3.  **What are the stopping criteria for the ID3 algorithm?**

    *   **Answer:** The ID3 algorithm stops splitting when:
        *   All instances belong to the same class.
        *   There are no more attributes to split on.
        *   There are no more instances in the dataset.

4.  **A dataset has 10 examples. Calculate the information gain of attribute "Color" if it splits the dataset into the following subsets: Color=Red (3 positive, 1 negative), Color=Blue (2 positive, 2 negative), Color=Green (1 positive, 1 negative), Color=Yellow (0 positive, 0 negative). The original entropy is 0.94.**

    *   **Answer:**
        *   Entropy(Red) = - (3/4)log2(3/4) - (1/4)log2(1/4) = 0.811
        *   Entropy(Blue) = - (2/4)log2(2/4) - (2/4)log2(2/4) = 1
        *   Entropy(Green) = - (1/2)log2(1/2) - (1/2)log2(1/2) = 1
        *   Entropy(Yellow) = 0

        *   Gain(S, Color) = 0.94 - [(4/10)*0.811 + (4/10)*1 + (2/10)*1 + (0/10)*0] = 0.94 - [0.3244 + 0.4 + 0.2 + 0] = 0.94 - 0.9244 = 0.0156

5.  **What is the main disadvantage of ID3 concerning attributes with many values, and how do algorithms like C4.5 address this?**

    *   **Answer:** ID3 has a bias towards attributes with many values because they tend to have higher Information Gain, even if they don't provide meaningful separation. C4.5 addresses this by using Gain Ratio, which normalizes the Information Gain by the intrinsic information of the attribute itself, penalizing attributes with many values.

## Important Points to Remember

*   ID3 is a greedy algorithm, so it might not find the globally optimal decision tree.
*   Entropy and Information Gain are crucial concepts for understanding how ID3 works.
*   ID3 is susceptible to overfitting. Consider pruning or using other techniques to prevent this.
*   Be aware of the limitations of ID3, such as its inability to handle continuous attributes and missing values directly.
*   Understand the difference between ID3, C4.5 and other decision tree variants.
