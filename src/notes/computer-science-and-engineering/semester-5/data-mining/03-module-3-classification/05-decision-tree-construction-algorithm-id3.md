---
title: "Decision tree construction algorithm - ID3"
subject: "DATA MINING"
module: "Module 3: Classification "
branch: "Computer Science and Engineering"
semester: 5
topicId: "684162770fc9aa1fdbc8b8aa"
status: "completed"
scrapedAt: "2026-05-20T16:45:07.351Z"
---
# Data Mining: Module 3 - Classification: Decision Tree Construction Algorithm - ID3

## Learning Outcomes:

*   Understand the concept of decision trees and their role in classification.
*   Explain the working principle of the ID3 algorithm.
*   Calculate entropy and information gain for attribute selection.
*   Construct a decision tree using the ID3 algorithm.
*   Identify the limitations of the ID3 algorithm.
*   Apply ID3 to solve simple classification problems.

## 1. Introduction to Decision Trees and Classification

*   **Classification:**  Assigning data instances to predefined categories or classes.  For example, classifying emails as "spam" or "not spam".
*   **Decision Tree:** A supervised learning algorithm that uses a tree-like model to represent decisions and their possible consequences.  It consists of:
    *   **Nodes:** Represent tests on attributes.
    *   **Branches:** Represent the outcome of the test.
    *   **Leaves:** Represent the class label (the prediction).
*   **Root Node:** The topmost node of the tree.
*   **Internal Nodes:** Nodes that have branches leading from them.
*   **Leaf Nodes:** Nodes with no branches leading from them. These represent the classification outcome.
*   **Advantages of Decision Trees:**
    *   Easy to understand and interpret.
    *   Can handle both numerical and categorical data.
    *   Require relatively little data preparation.
    *   Can handle multi-output problems.
*   **Disadvantages of Decision Trees:**
    *   Prone to overfitting the training data. (Solution: Pruning)
    *   Sensitive to small changes in the data.
    *   Can be biased if some classes dominate.

## 2. The ID3 Algorithm: Iterative Dichotomiser 3

*   **Definition:** ID3 (Iterative Dichotomiser 3) is a greedy algorithm used to construct a decision tree from a dataset.  It uses information gain to select the best attribute for splitting the data at each node.
*   **Key Idea:**  Choose the attribute that best separates the data into distinct classes.  The "best" attribute is the one that maximizes information gain.
*   **ID3 Algorithm Steps:**
    1.  **Start:** Begin with the entire dataset as the root node.
    2.  **Attribute Selection:** Calculate the information gain for each attribute.
    3.  **Best Attribute:** Select the attribute with the highest information gain as the splitting attribute for the current node.
    4.  **Split:** Create branches for each possible value of the selected attribute.
    5.  **Recursive Step:** Repeat steps 2-4 for each branch, using the subset of the data that corresponds to that branch.
    6.  **Stopping Conditions:**
        *   All instances in the subset belong to the same class. (Create a leaf node with that class)
        *   No more attributes are available to split on. (Create a leaf node with the majority class)
        *   The subset is empty. (Create a leaf node with the majority class from the parent node).

## 3. Entropy and Information Gain

*   **Entropy (H):** Measures the impurity or randomness of a set of examples.  It represents the expected information content of a message (in this case, the class label). A higher entropy value indicates more uncertainty about the class distribution.
    *   Formula:  `H(S) = - Σ p(i) * log2(p(i))`
        *   `S`: The dataset
        *   `p(i)`: The proportion of instances belonging to class `i` in the dataset `S`
        *   `Σ`: Summation over all classes.
*   **Information Gain (IG):**  Measures the reduction in entropy achieved by splitting the data on a particular attribute. It represents how much better we can classify the data after knowing the value of a particular attribute.
    *   Formula: `IG(S, A) = H(S) - Σ [ |Sv| / |S| * H(Sv) ]`
        *   `S`: The dataset
        *   `A`: The attribute being considered
        *   `Sv`: The subset of `S` for which attribute `A` has value `v`
        *   `|Sv|`: The number of instances in subset `Sv`
        *   `|S|`: The number of instances in the entire dataset `S`
        *   `H(S)`: The entropy of the dataset `S`
        *   `H(Sv)`: The entropy of the subset `Sv`
        *   `Σ`: Summation over all possible values `v` of attribute `A`

**Example: Calculating Entropy and Information Gain**

Consider the following dataset for predicting whether a customer will buy a computer:

| Age      | Income   | Student | Credit Rating | Buys Computer |
| -------- | -------- | ------- | ------------- | ------------- |
| <=30     | High     | No      | Fair          | No            |
| <=30     | High     | No      | Excellent     | No            |
| 31...40   | High     | No      | Fair          | Yes           |
| >40      | Medium   | No      | Fair          | Yes           |
| >40      | Low      | Yes     | Fair          | Yes           |
| >40      | Low      | Yes     | Excellent     | No            |
| 31...40   | Low      | Yes     | Excellent     | Yes           |
| <=30     | Medium   | No      | Fair          | No            |
| <=30     | Low      | Yes     | Fair          | Yes           |
| >40      | Medium   | Yes     | Fair          | Yes           |
| <=30     | Medium   | Yes     | Excellent     | Yes           |
| 31...40   | Medium   | No      | Excellent     | Yes           |
| 31...40   | High     | Yes     | Fair          | Yes           |
| >40      | Medium   | No      | Excellent     | No            |

1.  **Calculate Entropy of the entire dataset (Buys Computer):**
    *   Total instances: 14
    *   Yes: 9
    *   No: 5
    *   H(S) = - (9/14) * log2(9/14) - (5/14) * log2(5/14) = 0.940

2.  **Calculate Information Gain for Attribute 'Age':**
    *   **Age <=30:**  5 instances (Yes: 2, No: 3)
        *   H(Age <=30) = - (2/5) * log2(2/5) - (3/5) * log2(3/5) = 0.971
    *   **Age 31...40:** 4 instances (Yes: 4, No: 0)
        *   H(Age 31...40) = - (4/4) * log2(4/4) - (0/4) * log2(0/4) = 0  (Note: log2(0) is undefined, but in this context, we treat 0 * log2(0) as 0)
    *   **Age >40:** 5 instances (Yes: 3, No: 2)
        *   H(Age >40) = - (3/5) * log2(3/5) - (2/5) * log2(2/5) = 0.971

    *   IG(S, Age) = H(S) - [ (5/14) * H(Age <=30) + (4/14) * H(Age 31...40) + (5/14) * H(Age >40) ]
    *   IG(S, Age) = 0.940 - [ (5/14) * 0.971 + (4/14) * 0 + (5/14) * 0.971 ]
    *   IG(S, Age) = 0.940 - 0.6935 = 0.2465

3.  **Repeat for other attributes (Income, Student, Credit Rating) and select the attribute with the highest Information Gain.**  In this example, we'll assume that 'Age' has the highest information gain.

4.  **'Age' becomes the root node.** Branches are created for each value of 'Age' (<=30, 31...40, >40).  The algorithm is then recursively applied to each of these branches using the corresponding subset of the data.

## 4. Constructing a Decision Tree with ID3: Complete Example

Using the same dataset above:

| Age      | Income   | Student | Credit Rating | Buys Computer |
| -------- | -------- | ------- | ------------- | ------------- |
| <=30     | High     | No      | Fair          | No            |
| <=30     | High     | No      | Excellent     | No            |
| 31...40   | High     | No      | Fair          | Yes           |
| >40      | Medium   | No      | Fair          | Yes           |
| >40      | Low      | Yes     | Fair          | Yes           |
| >40      | Low      | Yes     | Excellent     | No            |
| 31...40   | Low      | Yes     | Excellent     | Yes           |
| <=30     | Medium   | No      | Fair          | No            |
| <=30     | Low      | Yes     | Fair          | Yes           |
| >40      | Medium   | Yes     | Fair          | Yes           |
| <=30     | Medium   | Yes     | Excellent     | Yes           |
| 31...40   | Medium   | No      | Excellent     | Yes           |
| 31...40   | High     | Yes     | Fair          | Yes           |
| >40      | Medium   | No      | Excellent     | No            |

1.  **Root Node:**  We determined above that 'Age' has the highest information gain. So, 'Age' is the root node.

2.  **Branch 1: Age <=30:**
    *   Subset:  5 instances (No, No, No, Yes, Yes)
    *   Remaining attributes: Income, Student, Credit Rating
    *   Calculate Information Gain for Income, Student, Credit Rating on *this subset*.
    *   Assume 'Student' has the highest Information Gain.
        *   **Branch 1a: Student = Yes:** 2 instances (Yes, Yes) -  Leaf Node: Yes
        *   **Branch 1b: Student = No:** 3 instances (No, No, No) - Leaf Node: No

3.  **Branch 2: Age 31...40:**
    *   Subset: 4 instances (Yes, Yes, Yes, Yes)
    *   All instances belong to the same class (Yes).  Leaf Node: Yes

4.  **Branch 3: Age >40:**
    *   Subset: 5 instances (Yes, Yes, No, Yes, No)
    *   Remaining attributes: Income, Student, Credit Rating
    *   Calculate Information Gain for Income, Student, Credit Rating on *this subset*.
    *   Assume 'Credit Rating' has the highest Information Gain.
        *   **Branch 3a: Credit Rating = Fair:** 3 instances (Yes, Yes, Yes) - Leaf Node: Yes
        *   **Branch 3b: Credit Rating = Excellent:** 2 instances (No, No) - Leaf Node: No

**Resulting Decision Tree:**

```
Age
|
|--- <=30
|   |
|   |--- Student
|   |   |
|   |   |--- Yes: Yes
|   |   |
|   |   |--- No: No
|   |
|--- 31...40: Yes
|
|--- >40
|   |
|   |--- Credit Rating
|   |   |
|   |   |--- Fair: Yes
|   |   |
|   |   |--- Excellent: No
```

## 5. Limitations of ID3

*   **Bias towards Multi-Valued Attributes:** Attributes with more values tend to be preferred by ID3 because they can artificially increase information gain.  This can lead to trees that are too complex and overfit the data. (Solution: Gain Ratio)
*   **Handles only Categorical Attributes:** ID3 is designed for datasets with categorical attributes.  Continuous attributes need to be discretized before being used with ID3.
*   **No Pruning:**  ID3 doesn't incorporate pruning mechanisms to avoid overfitting.  This can result in complex trees that perform poorly on unseen data.
*   **Sensitivity to Noisy Data:** ID3 can be sensitive to noisy data, as it may create branches based on outliers or errors in the data.
*   **Subsequent algorithms like C4.5 and CART addressed some of these limitations.**

## 6. Important Points to Remember

*   ID3 is a greedy algorithm that makes locally optimal choices at each step. This does not guarantee a globally optimal tree.
*   Entropy measures the impurity of a dataset. Lower entropy is better.
*   Information gain measures the reduction in entropy after splitting on an attribute. Higher information gain is better.
*   The ID3 algorithm recursively partitions the data based on the attribute with the highest information gain.
*   Be aware of the limitations of ID3 and consider other decision tree algorithms like C4.5 or CART for more robust and accurate classification.
*   Preprocessing of Data: Handle missing values and categorical data appropriately before applying ID3.

## 7. Practice Questions/Exercises

**Question 1:**

Calculate the entropy of a dataset with 10 instances, where 6 instances belong to class A and 4 instances belong to class B.

**Answer:**

H(S) = - (6/10) * log2(6/10) - (4/10) * log2(4/10) = -0.6 * (-0.737) - 0.4 * (-1.322) = 0.4422 + 0.5288 = 0.971

**Question 2:**

Given a dataset with entropy H(S) = 1.0. After splitting on attribute A, the entropy for the resulting subsets are: H(S1) = 0.5 (S1 has 4 instances), H(S2) = 0.8 (S2 has 6 instances).  The total number of instances in S is 10. Calculate the information gain for attribute A.

**Answer:**

IG(S, A) = H(S) - [ (|S1| / |S|) * H(S1) + (|S2| / |S|) * H(S2) ]
IG(S, A) = 1.0 - [ (4/10) * 0.5 + (6/10) * 0.8 ]
IG(S, A) = 1.0 - [ 0.2 + 0.48 ]
IG(S, A) = 1.0 - 0.68 = 0.32

**Question 3:**

What are the main limitations of the ID3 algorithm?

**Answer:**

*   Bias towards multi-valued attributes.
*   Handles only categorical attributes.
*   No pruning mechanism.
*   Sensitivity to noisy data.

**Question 4:**

What is the purpose of Information Gain in the ID3 algorithm?

**Answer:**

Information Gain is used to determine the best attribute to split the data at each node of the decision tree. It measures the reduction in entropy achieved by splitting on a particular attribute. The attribute with the highest information gain is chosen as the splitting attribute.
