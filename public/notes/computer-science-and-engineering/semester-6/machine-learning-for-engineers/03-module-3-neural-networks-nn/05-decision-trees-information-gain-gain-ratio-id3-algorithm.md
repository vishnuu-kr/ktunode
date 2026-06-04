---
title: "Decision Trees  – Information Gain, Gain Ratio, ID3 algorithm"
subject: "MACHINE LEARNING FOR ENGINEERS"
module: "Module 3: Neural Networks (NN) "
branch: "Computer Science and Engineering"
semester: 6
topicId: "684162780fc9aa1fdbc8bf57"
status: "completed"
scrapedAt: "2026-05-20T16:55:07.586Z"
---
# Machine Learning for Engineers - Module 3: Neural Networks (NN)

## Topic: Decision Trees – Information Gain, Gain Ratio, ID3 Algorithm

---

### **Learning Outcomes:**

*   Understand the concept of Decision Trees as a supervised learning algorithm.
*   Learn how to construct Decision Trees using impurity measures like Information Gain.
*   Explore the Gain Ratio as an improvement over Information Gain.
*   Understand and apply the ID3 algorithm for Decision Tree construction.

---

### **1. Introduction to Decision Trees**

Decision Trees are a type of **supervised learning algorithm** used for both **classification** and **regression** tasks. They work by recursively partitioning the input data based on the values of features, creating a tree-like structure.

*   **Analogy:** Think of a flowchart that helps you make a decision. Each box represents a test on an attribute (feature), each branch represents the outcome of the test, and each leaf node represents a class label (in classification) or a predicted value (in regression).

*   **Key Components:**
    *   **Root Node:** The topmost node representing the entire dataset.
    *   **Internal Nodes (Decision Nodes):** Represent a test on an attribute.
    *   **Branches:** Represent the outcome of the test.
    *   **Leaf Nodes (Terminal Nodes):** Represent the final decision or prediction.

*   **How it Works:** The algorithm starts at the root node and splits the data based on the feature that best separates the data into distinct classes. This process is repeated recursively for each subset of data until a stopping criterion is met (e.g., all data points in a node belong to the same class, or a maximum depth is reached).

---

### **2. Measuring Impurity: The Need for Splitting Criteria**

To build an effective Decision Tree, we need a way to decide which feature to split on at each node. The goal is to choose the feature that best *reduces the impurity* of the resulting child nodes. Impurity refers to the degree of mixed class labels within a set of data.

#### **2.1 Entropy**

**Entropy** is a measure of randomness or uncertainty in a dataset. In the context of classification, it quantifies the impurity of a set of examples with respect to their class labels.

*   **Definition:** For a set S with C classes, the entropy is calculated as:
    $$Entropy(S) = -\sum_{i=1}^{C} p_i \log_2(p_i)$$
    where $p_i$ is the proportion of samples belonging to class $i$.

*   **Interpretation:**
    *   **Zero Entropy:** If all samples in S belong to the same class, the entropy is 0 (perfectly pure).
    *   **Maximum Entropy:** If samples are evenly distributed among all classes, the entropy is maximum (maximum impurity).

*   **Example:**
    Consider a dataset with 10 samples and 2 classes (Yes/No):
    *   Case 1: 10 Yes, 0 No
        $p_{Yes} = 10/10 = 1$, $p_{No} = 0/10 = 0$
        $Entropy = -(1 \log_2(1) + 0 \log_2(0)) = 0$ (Pure)
    *   Case 2: 5 Yes, 5 No
        $p_{Yes} = 5/10 = 0.5$, $p_{No} = 5/10 = 0.5$
        $Entropy = -(0.5 \log_2(0.5) + 0.5 \log_2(0.5)) = -(0.5 * -1 + 0.5 * -1) = 1$ (Maximum Impurity)
    *   Case 3: 7 Yes, 3 No
        $p_{Yes} = 7/10 = 0.7$, $p_{No} = 3/10 = 0.3$
        $Entropy = -(0.7 \log_2(0.7) + 0.3 \log_2(0.3)) \approx -(0.7 * -0.51 + 0.3 * -1.74) \approx -(-0.357 - 0.522) \approx 0.879$

#### **2.2 Information Gain**

**Information Gain** measures the reduction in entropy achieved by splitting a dataset on a particular attribute. The attribute with the highest Information Gain is chosen as the splitting attribute at a given node.

*   **Definition:** For a dataset S and an attribute A, the Information Gain is calculated as:
    $$IG(S, A) = Entropy(S) - \sum_{v \in Values(A)} \frac{|S_v|}{|S|} Entropy(S_v)$$
    where:
    *   $Entropy(S)$ is the entropy of the parent node.
    *   $Values(A)$ are the possible values of attribute A.
    *   $S_v$ is the subset of S for which attribute A has value v.
    *   $\frac{|S_v|}{|S|}$ is the proportion of samples in S that have value v for attribute A.
    *   $Entropy(S_v)$ is the entropy of the subset $S_v$.

*   **Goal:** We want to maximize Information Gain, meaning we want to choose the attribute that results in the largest reduction in impurity.

*   **Example:**
    Let's consider a dataset with 14 samples, 9 Yes and 5 No (Entropy(S) $\approx 0.940$). We want to decide whether to split on attribute 'Outlook' which has values {Sunny, Overcast, Rainy}.

    *   **Outlook = Sunny:** 2 Yes, 3 No (6 samples total)
        $p_{Yes} = 2/6$, $p_{No} = 3/6$
        $Entropy(Sunny) = -(2/6 \log_2(2/6) + 3/6 \log_2(3/6)) \approx 0.918$
        Weighted entropy for Sunny = $(6/14) * 0.918 \approx 0.393$

    *   **Outlook = Overcast:** 4 Yes, 0 No (4 samples total)
        $p_{Yes} = 4/4$, $p_{No} = 0/4$
        $Entropy(Overcast) = 0$
        Weighted entropy for Overcast = $(4/14) * 0 = 0$

    *   **Outlook = Rainy:** 3 Yes, 2 No (5 samples total)
        $p_{Yes} = 3/5$, $p_{No} = 2/5$
        $Entropy(Rainy) = -(3/5 \log_2(3/5) + 2/5 \log_2(2/5)) \approx 0.971$
        Weighted entropy for Rainy = $(5/14) * 0.971 \approx 0.347$

    *   **Information Gain(S, Outlook):**
        $IG(S, Outlook) = Entropy(S) - (Weighted Entropy(Sunny) + Weighted Entropy(Overcast) + Weighted Entropy(Rainy))$
        $IG(S, Outlook) \approx 0.940 - (0.393 + 0 + 0.347) \approx 0.940 - 0.740 = 0.200$

    We would repeat this calculation for other attributes (e.g., Temperature, Humidity, Wind) and choose the one with the highest Information Gain.

---

### **3. Limitations of Information Gain and Introduction to Gain Ratio**

Information Gain can sometimes be biased towards attributes with a large number of distinct values. This is because such attributes can split the dataset into many small subsets, each with low entropy, leading to a high Information Gain even if the split isn't truly informative.

#### **3.1 Split Information (Intrinsic Information)**

**Split Information** measures the potential information generated by splitting the dataset based on a particular attribute. It quantifies the distribution of the values of that attribute.

*   **Definition:** For a dataset S and an attribute A, Split Information is calculated as:
    $$SplitInfo(S, A) = -\sum_{v \in Values(A)} \frac{|S_v|}{|S|} \log_2\left(\frac{|S_v|}{|S|}\right)$$
    This is essentially the entropy of the attribute's value distribution.

*   **Interpretation:**
    *   If an attribute has only one value, Split Information is 0.
    *   If an attribute has many values, Split Information will be higher.

#### **3.2 Gain Ratio**

**Gain Ratio** is an extension of Information Gain that normalizes it by the Split Information of the attribute. This helps to overcome the bias of Information Gain towards attributes with many values.

*   **Definition:**
    $$GainRatio(S, A) = \frac{IG(S, A)}{SplitInfo(S, A)}$$

*   **Goal:** We want to maximize Gain Ratio. This metric rewards attributes that provide high Information Gain while penalizing attributes that have a high number of values (high Split Information).

*   **Example (Continuing the Outlook example):**
    Let's calculate Gain Ratio for 'Outlook'. We already have $IG(S, Outlook) \approx 0.200$.

    Now, let's calculate $SplitInfo(S, Outlook)$:
    *   Proportion of Sunny = $6/14$
    *   Proportion of Overcast = $4/14$
    *   Proportion of Rainy = $5/14$

    $$SplitInfo(S, Outlook) = -(\frac{6}{14}\log_2(\frac{6}{14}) + \frac{4}{14}\log_2(\frac{4}{14}) + \frac{5}{14}\log_2(\frac{5}{14}))$$
    $$SplitInfo(S, Outlook) \approx - (0.428 \log_2(0.428) + 0.286 \log_2(0.286) + 0.357 \log_2(0.357))$$
    $$SplitInfo(S, Outlook) \approx - (0.428 * -1.22 + 0.286 * -1.81 + 0.357 * -1.48)$$
    $$SplitInfo(S, Outlook) \approx - (-0.522 - 0.518 - 0.528) \approx 1.568$$

    *   **GainRatio(S, Outlook):**
        $$GainRatio(S, Outlook) = \frac{0.200}{1.568} \approx 0.127$$

    We would compare this Gain Ratio with those of other attributes. If another attribute had a lower Information Gain but a much lower Split Information (e.g., an attribute with only two values), its Gain Ratio might be higher.

---

### **4. The ID3 Algorithm (Iterative Dichotomiser 3)**

ID3 is a classic algorithm for constructing decision trees. It uses **Information Gain** as its splitting criterion.

*   **Core Idea:** Greedily select the attribute with the highest Information Gain at each step to split the data.

*   **Algorithm Steps:**

    1.  **Start with the entire training dataset** as the root node.
    2.  **Calculate the Information Gain** for every attribute with respect to the current dataset.
    3.  **Select the attribute with the highest Information Gain.** This attribute becomes the decision node.
    4.  **Partition the dataset** into subsets based on the values of the selected attribute. Each subset corresponds to a branch from the decision node.
    5.  **Recursively apply steps 2-4** to each subset.
    6.  **Stopping Conditions:** The recursion stops when:
        *   All instances in a subset belong to the same class (create a leaf node with that class label).
        *   There are no more attributes to split on.
        *   The dataset is empty.
        *   (Optional) A maximum depth is reached or a minimum number of samples in a node is met.

*   **Example Walkthrough (Simplified):**
    Consider the following dataset for predicting whether to play tennis:

    | Day   | Outlook   | Temperature | Humidity | Wind    | PlayTennis |
    | :---- | :-------- | :---------- | :------- | :------ | :--------- |
    | D1    | Sunny     | Hot         | High     | Weak    | No         |
    | D2    | Sunny     | Hot         | High     | Strong  | No         |
    | D3    | Overcast  | Hot         | High     | Weak    | Yes        |
    | D4    | Rainy     | Mild        | High     | Weak    | Yes        |
    | D5    | Rainy     | Cool        | Normal   | Weak    | Yes        |
    | D6    | Rainy     | Cool        | Normal   | Strong  | No         |
    | D7    | Overcast  | Cool        | Normal   | Strong  | Yes        |
    | D8    | Sunny     | Mild        | High     | Weak    | No         |
    | D9    | Sunny     | Cool        | Normal   | Weak    | Yes        |
    | D10   | Rainy     | Mild        | Normal   | Weak    | Yes        |
    | D11   | Sunny     | Mild        | Normal   | Strong  | Yes        |
    | D12   | Overcast  | Mild        | High     | Strong  | Yes        |
    | D13   | Overcast  | Hot         | Normal   | Weak    | Yes        |
    | D14   | Rainy     | Mild        | High     | Strong  | No         |

    *   **Initial State (Root Node):** 14 samples. 9 'Yes', 5 'No'.
        $Entropy(S) \approx 0.940$

    *   **Calculate Information Gain for each attribute:**
        *   **Outlook:** $IG \approx 0.200$ (calculated earlier)
        *   **Temperature:** (Need to calculate its IG)
            *   Hot: 2 Yes, 2 No (4 samples). $Entropy \approx 1$. Weighted $4/14 * 1 \approx 0.286$
            *   Mild: 4 Yes, 2 No (6 samples). $Entropy \approx 0.918$. Weighted $6/14 * 0.918 \approx 0.393$
            *   Cool: 3 Yes, 1 No (4 samples). $Entropy \approx 0.811$. Weighted $4/14 * 0.811 \approx 0.232$
            $IG(S, Temperature) = 0.940 - (0.286 + 0.393 + 0.232) = 0.940 - 0.911 = 0.029$
        *   **Humidity:** (Need to calculate its IG)
            *   High: 3 Yes, 4 No (7 samples). $Entropy \approx 0.985$. Weighted $7/14 * 0.985 \approx 0.493$
            *   Normal: 6 Yes, 1 No (7 samples). $Entropy \approx 0.592$. Weighted $7/14 * 0.592 \approx 0.296$
            $IG(S, Humidity) = 0.940 - (0.493 + 0.296) = 0.940 - 0.789 = 0.151$
        *   **Wind:** (Need to calculate its IG)
            *   Weak: 6 Yes, 2 No (8 samples). $Entropy \approx 0.811$. Weighted $8/14 * 0.811 \approx 0.463$
            *   Strong: 3 Yes, 3 No (6 samples). $Entropy = 1$. Weighted $6/14 * 1 \approx 0.429$
            $IG(S, Wind) = 0.940 - (0.463 + 0.429) = 0.940 - 0.892 = 0.048$

    *   **Decision at Root:** 'Outlook' has the highest Information Gain (0.200). So, 'Outlook' is the root node.

    *   **Branching on Outlook:**
        *   **Outlook = Sunny:** (D1, D2, D8, D9, D11) -> 2 Yes, 3 No. $Entropy \approx 0.971$.
            *   Need to split this node further.
        *   **Outlook = Overcast:** (D3, D7, D12, D13) -> 4 Yes, 0 No. Pure. Leaf node: **Yes**.
        *   **Outlook = Rainy:** (D4, D5, D6, D10, D14) -> 3 Yes, 2 No. $Entropy \approx 0.971$.
            *   Need to split this node further.

    *   **Splitting Node 'Sunny':** Dataset: {D1, D2, D8, D9, D11}. Attributes: Temperature, Humidity, Wind. (9 Yes, 5 No)
        *   Calculate IG for Temperature, Humidity, Wind on this subset.
        *   Let's assume Humidity has the highest IG for this subset (e.g., High: 0 Yes, 2 No; Normal: 2 Yes, 1 No).
            *   $Entropy(Sunny) \approx 0.971$
            *   Humidity = High: 0 Yes, 2 No. $Entropy = 0$. Weighted $2/5 * 0 = 0$.
            *   Humidity = Normal: 2 Yes, 1 No. $Entropy \approx 0.918$. Weighted $3/5 * 0.918 \approx 0.551$.
            *   $IG(Sunny, Humidity) \approx 0.971 - (0 + 0.551) = 0.420$
        *   The node splits on Humidity.
            *   Humidity = High: 0 Yes, 2 No. Pure. Leaf node: **No**.
            *   Humidity = Normal: 2 Yes, 1 No. Pure. Leaf node: **Yes**.

    *   **Splitting Node 'Rainy':** Dataset: {D4, D5, D6, D10, D14}. Attributes: Temperature, Humidity, Wind. (3 Yes, 2 No).
        *   Calculate IG for Temperature, Humidity, Wind on this subset.
        *   Let's assume Wind has the highest IG for this subset (e.g., Weak: 2 Yes, 1 No; Strong: 1 Yes, 1 No).
            *   $Entropy(Rainy) \approx 0.971$
            *   Wind = Weak: 2 Yes, 1 No. $Entropy \approx 0.918$. Weighted $3/5 * 0.918 \approx 0.551$.
            *   Wind = Strong: 1 Yes, 1 No. $Entropy = 1$. Weighted $2/5 * 1 = 0.4$.
            *   $IG(Rainy, Wind) \approx 0.971 - (0.551 + 0.4) = 0.971 - 0.951 = 0.020$
        *   The node splits on Wind.
            *   Wind = Weak: 2 Yes, 1 No. Pure. Leaf node: **Yes**.
            *   Wind = Strong: 1 Yes, 1 No. Pure. Leaf node: **No**.

    The final tree would have 'Outlook' as the root, branching to 'Yes' for 'Overcast', then 'Humidity' for 'Sunny', and 'Wind' for 'Rainy'.

---

### **5. Practice Questions & Exercises**

**Question 1:**
Calculate the Entropy of a dataset with 12 samples, where 8 belong to Class A and 4 belong to Class B.

**Question 2:**
Given a dataset S with Entropy(S) = 0.970. We consider splitting on attribute A.
Attribute A has values {v1, v2, v3}.
*   Subset S_v1: 5 samples (3 Class A, 2 Class B). Entropy(S_v1) = 0.971.
*   Subset S_v2: 4 samples (4 Class A, 0 Class B). Entropy(S_v2) = 0.
*   Subset S_v3: 3 samples (2 Class A, 1 Class B). Entropy(S_v3) = 0.918.
Calculate the Information Gain of attribute A.

**Question 3:**
For the same dataset and attribute A in Question 2, calculate the Split Information for attribute A.
*   |S| = 12, |S_v1| = 5, |S_v2| = 4, |S_v3| = 3.

**Question 4:**
Using the results from Questions 2 and 3, calculate the Gain Ratio for attribute A.

**Question 5:**
What is the primary advantage of using Gain Ratio over Information Gain?

---

### **Answers to Practice Questions**

**Answer 1:**
$p_A = 8/12 = 2/3$, $p_B = 4/12 = 1/3$
$Entropy(S) = - (2/3 \log_2(2/3) + 1/3 \log_2(1/3))$
$Entropy(S) \approx - (0.667 * -0.585 + 0.333 * -1.585)$
$Entropy(S) \approx - (-0.390 - 0.528) \approx 0.918$

**Answer 2:**
$IG(S, A) = Entropy(S) - (\frac{5}{12} Entropy(S_{v1}) + \frac{4}{12} Entropy(S_{v2}) + \frac{3}{12} Entropy(S_{v3}))$
$IG(S, A) = 0.970 - (\frac{5}{12} * 0.971 + \frac{4}{12} * 0 + \frac{3}{12} * 0.918)$
$IG(S, A) = 0.970 - (0.4045 + 0 + 0.2295)$
$IG(S, A) = 0.970 - 0.634 = 0.336$

**Answer 3:**
$SplitInfo(S, A) = - (\frac{5}{12} \log_2(\frac{5}{12}) + \frac{4}{12} \log_2(\frac{4}{12}) + \frac{3}{12} \log_2(\frac{3}{12}))$
$SplitInfo(S, A) = - (0.417 \log_2(0.417) + 0.333 \log_2(0.333) + 0.250 \log_2(0.250))$
$SplitInfo(S, A) \approx - (0.417 * -1.257 + 0.333 * -1.585 + 0.250 * -2)$
$SplitInfo(S, A) \approx - (-0.524 - 0.528 - 0.5) \approx 1.552$

**Answer 4:**
$GainRatio(S, A) = \frac{IG(S, A)}{SplitInfo(S, A)} = \frac{0.336}{1.552} \approx 0.2165$

**Answer 5:**
The primary advantage of Gain Ratio over Information Gain is that it **reduces the bias towards attributes with many distinct values**. By normalizing Information Gain by the Split Information, attributes with a high number of values (which tend to have high Information Gain but are not necessarily the best splits) are penalized.

---

### **Important Points to Remember:**

*   **Decision Trees are greedy:** They make locally optimal decisions at each step without looking ahead.
*   **Impurity Measures:** Entropy and Gini Impurity (another common measure not covered in detail here but similar in concept) are used to quantify the mixed-ness of classes.
*   **Information Gain:** Measures the reduction in entropy. Maximizing IG is the goal for ID3.
*   **Gain Ratio:** Addresses the bias of Information Gain by normalizing with Split Information. Preferred for more robust tree building.
*   **ID3 Algorithm:** A recursive, greedy algorithm that uses Information Gain to select splitting attributes.
*   **Stopping Criteria:** Crucial for preventing overfitting and creating manageable trees. Common criteria include reaching pure nodes, no more attributes, or hitting depth/sample limits.
*   **Overfitting:** Decision Trees can easily overfit the training data. Techniques like pruning or using ensemble methods (like Random Forests) are used to combat this.
*   **Handling Continuous Attributes:** Continuous attributes need to be discretized (e.g., by finding optimal split points) before being used by ID3.

---
**End of Notes**
