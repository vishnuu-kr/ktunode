---
title: "Information Gain"
subject: "DATA MINING"
module: "Module 3: Classification "
branch: "Computer Science and Engineering"
semester: 5
topicId: "684162770fc9aa1fdbc8b8a8"
status: "completed"
scrapedAt: "2026-05-20T16:45:05.925Z"
---
## Data Mining: Module 3 - Classification - Information Gain

**Learning Outcomes:**

*   Understand the concept of entropy and its role in measuring impurity.
*   Define Information Gain and explain its purpose in decision tree algorithms.
*   Calculate Information Gain for a given dataset and attribute.
*   Interpret the results of Information Gain calculations.
*   Explain the limitations of Information Gain and when Gain Ratio is preferred.

**1. Introduction to Entropy and Impurity**

*   **What is Impurity?** In the context of classification, impurity refers to the degree to which a set of data points (a node in a decision tree) contains a mixture of different classes.  A "pure" node contains only data points belonging to a single class.

*   **Entropy: Measuring Impurity:** Entropy is a measure of disorder or randomness in a system. In data mining, it quantifies the impurity or uncertainty within a set of data points.  A higher entropy value indicates a more mixed or impure dataset.

*   **Formula for Entropy:**
    *   For a dataset *S* with *n* classes, the entropy is calculated as:

        ```
        Entropy(S) = - Σ (pi * log2(pi))
        ```

        Where:
        *   `S` is the set of data points.
        *   `n` is the number of classes.
        *   `pi` is the proportion of data points belonging to class *i* in the dataset *S*.

*   **Key Properties of Entropy:**
    *   **Minimum Entropy (0):** Occurs when all data points belong to the same class (a pure node). `log2(1) = 0`
    *   **Maximum Entropy (log2(n)):** Occurs when data points are equally distributed across all *n* classes.  For a binary classification problem, the maximum entropy is 1 (when classes are equally represented - 50/50 split).

**Example: Calculating Entropy**

*   **Scenario:** You have a dataset of 10 customers.  7 are likely to buy a product (Positive), and 3 are not (Negative).

    *   `S = {7 Positive, 3 Negative}`
    *   `p(Positive) = 7/10 = 0.7`
    *   `p(Negative) = 3/10 = 0.3`

    *   `Entropy(S) = - (0.7 * log2(0.7) + 0.3 * log2(0.3))`
    *   `Entropy(S) ≈ - (0.7 * -0.515 + 0.3 * -1.737)`
    *   `Entropy(S) ≈ - (-0.3605 - 0.5211)`
    *   `Entropy(S) ≈ 0.8816`

    *   **Interpretation:** The entropy is 0.8816, indicating a relatively mixed dataset (not perfectly pure).

**2. Information Gain: Measuring Attribute Effectiveness**

*   **Definition:** Information Gain (IG) measures the reduction in entropy achieved by partitioning the dataset based on a particular attribute. It quantifies how much "information" a feature provides about the class label.

*   **Purpose:** In decision tree algorithms, Information Gain is used to select the best attribute to split the data at each node. The attribute with the highest Information Gain is chosen, as it results in the most significant reduction in impurity in the resulting sub-datasets (child nodes).

*   **Formula for Information Gain:**

    ```
    InformationGain(S, A) = Entropy(S) - Σ [ (|Sv| / |S|) * Entropy(Sv) ]
    ```

    Where:

    *   `S` is the original dataset.
    *   `A` is the attribute being considered for splitting.
    *   `Sv` is the subset of *S* where attribute *A* has value *v*.
    *   `|Sv|` is the number of elements in subset *Sv*.
    *   `|S|` is the number of elements in the original dataset *S*.
    *   The summation is taken over all possible values *v* of attribute *A*.

**3. Calculating Information Gain: A Step-by-Step Example**

*   **Dataset:** Consider a dataset to predict whether a customer will play tennis based on weather conditions.

    | Outlook   | Temperature | Humidity | Wind  | PlayTennis |
    | --------- | ----------- | -------- | ----- | ---------- |
    | Sunny     | Hot         | High     | Weak  | No         |
    | Sunny     | Hot         | High     | Strong | No         |
    | Overcast  | Hot         | High     | Weak  | Yes        |
    | Rainy     | Mild        | High     | Weak  | Yes        |
    | Rainy     | Cool        | Normal   | Weak  | Yes        |
    | Rainy     | Cool        | Normal   | Strong | No         |
    | Overcast  | Cool        | Normal   | Strong | Yes        |
    | Sunny     | Mild        | High     | Weak  | No         |
    | Sunny     | Cool        | Normal   | Weak  | Yes        |
    | Rainy     | Mild        | Normal   | Weak  | Yes        |
    | Sunny     | Mild        | Normal   | Strong | Yes        |
    | Overcast  | Mild        | High     | Strong | Yes        |
    | Overcast  | Hot         | Normal   | Weak  | Yes        |
    | Rainy     | Mild        | High     | Strong | No         |

*   **Step 1: Calculate Entropy of the Original Dataset (S)**

    *   `PlayTennis = {9 Yes, 5 No}`
    *   `Entropy(S) = - ( (9/14) * log2(9/14) + (5/14) * log2(5/14) )`
    *   `Entropy(S) ≈ 0.940`

*   **Step 2: Calculate Information Gain for Attribute "Outlook"**

    *   "Outlook" has three possible values: Sunny, Overcast, Rainy.
    *   `S_Sunny = {3 No, 2 Yes}` (5 data points)
    *   `S_Overcast = {4 Yes}` (4 data points)
    *   `S_Rainy = {3 Yes, 2 No}` (5 data points)

    *   `Entropy(S_Sunny) = - ( (2/5) * log2(2/5) + (3/5) * log2(3/5) ) ≈ 0.971`
    *   `Entropy(S_Overcast) = 0`  (All Yes - Pure node)
    *   `Entropy(S_Rainy) = - ( (3/5) * log2(3/5) + (2/5) * log2(2/5) ) ≈ 0.971`

    *   `InformationGain(S, Outlook) = Entropy(S) - [ (|S_Sunny| / |S|) * Entropy(S_Sunny) + (|S_Overcast| / |S|) * Entropy(S_Overcast) + (|S_Rainy| / |S|) * Entropy(S_Rainy) ]`
    *   `InformationGain(S, Outlook) = 0.940 - [ (5/14) * 0.971 + (4/14) * 0 + (5/14) * 0.971 ]`
    *   `InformationGain(S, Outlook) ≈ 0.940 - [ 0.347 + 0 + 0.347 ]`
    *   `InformationGain(S, Outlook) ≈ 0.246`

*   **Step 3: Calculate Information Gain for other attributes (Temperature, Humidity, Wind)**

    *   Repeat the above process for each remaining attribute.
    *   This requires calculating the entropy for each subset (e.g., for Temperature: Hot, Mild, Cool).

*   **Step 4: Select the Attribute with the Highest Information Gain**

    *   After calculating the Information Gain for all attributes, choose the attribute with the highest value.
    *   This attribute will be used as the root node (or the node at the current level) of the decision tree.
    *   Let's assume, after calculation, these were the results:

        *   `InformationGain(S, Outlook) ≈ 0.246`
        *   `InformationGain(S, Temperature) ≈ 0.029`
        *   `InformationGain(S, Humidity) ≈ 0.151`
        *   `InformationGain(S, Wind) ≈ 0.048`

    *   **Conclusion:** Since "Outlook" has the highest Information Gain (0.246), it would be selected as the root node of the decision tree.

**4. Interpreting Information Gain**

*   **Higher Information Gain = Better Split:** A higher Information Gain indicates that the attribute is better at separating the data into subsets that are more pure (less mixed).  It suggests that the attribute is a strong predictor of the class label.

*   **Zero Information Gain:** An Information Gain of 0 means that the attribute provides no information about the class label. Splitting the data based on this attribute does not reduce the entropy.

**5. Limitations of Information Gain and the Need for Gain Ratio**

*   **Bias towards Attributes with Many Values:** Information Gain is biased towards attributes with a large number of distinct values.  Attributes with many values tend to split the data into smaller, more pure subsets, leading to artificially high Information Gain.  This can lead to overfitting.

*   **Example:** Consider an attribute "CustomerID" which has a unique value for each data point. Splitting on this attribute would result in pure subsets (each subset contains only one customer, and hence a single class), leading to an extremely high Information Gain, even though "CustomerID" is likely irrelevant for predicting the class label.

*   **Gain Ratio: Addressing the Bias:** Gain Ratio addresses the bias of Information Gain by normalizing it by the *split information*. Split information measures the entropy of the attribute itself, reflecting the number and size of the partitions it creates.

*   **Formula for Gain Ratio:**

    ```
    GainRatio(S, A) = InformationGain(S, A) / SplitInformation(S, A)
    ```

    Where:

    ```
    SplitInformation(S, A) = - Σ [ (|Sv| / |S|) * log2(|Sv| / |S|) ]
    ```

    *   SplitInformation measures the entropy of the splits created by attribute *A*.

*   **When to Use Gain Ratio:** Gain Ratio is preferred over Information Gain when dealing with attributes that have a large number of distinct values, to avoid the bias towards these attributes.

**6. Important Points to Remember**

*   Entropy measures impurity or disorder.
*   Information Gain measures the reduction in entropy after splitting on an attribute.
*   The attribute with the highest Information Gain is chosen for splitting.
*   Information Gain is biased towards attributes with many values.
*   Gain Ratio addresses the bias of Information Gain by considering the split information.
*   Choose Gain Ratio when dealing with attributes with a large number of distinct values.

**7. Practice Questions/Exercises**

1.  **Calculating Entropy:** A dataset contains 200 records. 120 records belong to Class A, and 80 records belong to Class B. Calculate the entropy of this dataset.

    *   **Answer:**
        *   `p(Class A) = 120/200 = 0.6`
        *   `p(Class B) = 80/200 = 0.4`
        *   `Entropy = - (0.6 * log2(0.6) + 0.4 * log2(0.4))`
        *   `Entropy ≈ 0.971`

2.  **Interpreting Information Gain:** You calculated the Information Gain for two attributes: `Attribute X: 0.35`, `Attribute Y: 0.15`. Which attribute would you choose to split on, and why?

    *   **Answer:** You would choose Attribute X because it has a higher Information Gain (0.35) compared to Attribute Y (0.15).  This indicates that splitting on Attribute X results in a greater reduction in entropy and a more pure classification.

3.  **Bias of Information Gain:** Explain why Information Gain might be biased towards attributes with many values. Provide an example.

    *   **Answer:** Information Gain tends to favor attributes with a large number of distinct values because these attributes can create smaller, more homogeneous subsets, leading to a higher reduction in entropy. An example is the "CustomerID" attribute, which can create perfect splits but is unlikely to be relevant for prediction.

4.  **When to Use Gain Ratio:**  In what situation is Gain Ratio preferred over Information Gain, and why?

    *   **Answer:** Gain Ratio is preferred over Information Gain when dealing with attributes that have a large number of distinct values. This is because Information Gain is biased towards such attributes, which can lead to overfitting. Gain Ratio normalizes Information Gain by the split information, mitigating this bias.

5.  **Calculating Information Gain (Simplified):** A dataset has 10 instances.  The target variable has two classes: Positive and Negative. Initially, the dataset has 6 Positive and 4 Negative instances.  Splitting on attribute 'Color' results in two subsets:
    * Subset 1 (Color=Red): 4 Positive, 1 Negative
    * Subset 2 (Color=Blue): 2 Positive, 3 Negative

    Calculate the Information Gain for attribute 'Color'. (You can use a calculator)

    * **Answer:**
        * Entropy(Original) =  -(6/10)*log2(6/10) - (4/10)*log2(4/10) ≈ 0.971
        * Entropy(Red) = -(4/5)*log2(4/5) - (1/5)*log2(1/5) ≈ 0.722
        * Entropy(Blue) = -(2/5)*log2(2/5) - (3/5)*log2(3/5) ≈ 0.971

        * Information Gain (Color) = 0.971 - [(5/10)*0.722 + (5/10)*0.971] ≈ 0.125
