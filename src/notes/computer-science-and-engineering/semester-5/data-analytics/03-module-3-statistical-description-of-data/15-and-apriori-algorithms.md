---
title: "and Apriori Algorithms."
subject: "DATA ANALYTICS"
module: "Module 3: Statistical Description of data "
branch: "Computer Science and Engineering"
semester: 5
topicId: "684162770fc9aa1fdbc8b721"
status: "completed"
scrapedAt: "2026-05-20T16:44:03.894Z"
---
# DATA ANALYTICS - Module 3: Statistical Description of Data and Apriori Algorithm

## Learning Outcomes:

Upon completion of this module, you will be able to:

*   Understand and calculate key statistical measures of data (mean, median, mode, variance, standard deviation).
*   Explain the concepts of frequency distribution, histograms, and percentiles.
*   Understand and apply the Apriori algorithm for association rule mining.
*   Interpret the results of association rule mining using metrics like support, confidence, and lift.
*   Identify the strengths and weaknesses of the Apriori algorithm.
*   Apply the Apriori algorithm to real-world datasets.

## 1. Statistical Description of Data

This section focuses on methods for summarizing and describing data using statistical measures.

### 1.1 Measures of Central Tendency

These measures indicate the "center" or typical value of a dataset.

*   **Mean (Average):** The sum of all values divided by the number of values.

    *   **Formula:**  `Mean (μ) = Σxᵢ / n`  where xᵢ are the individual values and n is the number of values.
    *   **Example:**  Data: 2, 4, 6, 8, 10. Mean = (2+4+6+8+10)/5 = 6
    *   **Python Example (using NumPy):**
        ```python
        import numpy as np
        data = np.array([2, 4, 6, 8, 10])
        mean = np.mean(data)
        print(f"Mean: {mean}") # Output: Mean: 6.0
        ```

*   **Median:** The middle value when the data is sorted in ascending order.

    *   If the number of values is even, the median is the average of the two middle values.
    *   **Example:**
        *   Data: 2, 4, 6, 8, 10.  Median = 6
        *   Data: 2, 4, 6, 8. Median = (4+6)/2 = 5
    *   **Python Example (using NumPy):**
        ```python
        import numpy as np
        data1 = np.array([2, 4, 6, 8, 10])
        median1 = np.median(data1)
        print(f"Median 1: {median1}") # Output: Median 1: 6.0

        data2 = np.array([2, 4, 6, 8])
        median2 = np.median(data2)
        print(f"Median 2: {median2}") # Output: Median 2: 5.0
        ```

*   **Mode:** The value that appears most frequently in the dataset.  A dataset can have no mode, one mode (unimodal), or multiple modes (multimodal).

    *   **Example:** Data: 2, 4, 4, 6, 8, 8, 8, 10.  Mode = 8
    *   **Python Example (using SciPy):**
        ```python
        from scipy import stats
        data = [2, 4, 4, 6, 8, 8, 8, 10]
        mode = stats.mode(data)
        print(f"Mode: {mode}")  # Output: Mode: ModeResult(mode=array([8]), count=array([3]))
        print(f"Mode Value: {mode.mode[0]}") # Access the mode value
        ```

**Important Point:**  The mean is sensitive to outliers, while the median is more robust. The mode is useful for categorical data as well.

### 1.2 Measures of Dispersion (Variability)

These measures describe the spread or variability of the data around the central tendency.

*   **Range:** The difference between the maximum and minimum values in the dataset.

    *   **Formula:** `Range = Maximum Value - Minimum Value`
    *   **Example:** Data: 2, 4, 6, 8, 10. Range = 10 - 2 = 8

*   **Variance:** The average of the squared differences from the mean.  It measures how far each number in the set is from the mean.

    *   **Formula (Population Variance):** `σ² = Σ(xᵢ - μ)² / N` where xᵢ are the individual values, μ is the population mean, and N is the population size.
    *   **Formula (Sample Variance):** `s² = Σ(xᵢ - x̄)² / (n - 1)` where xᵢ are the individual values, x̄ is the sample mean, and n is the sample size.  We use (n-1) for the sample variance to provide an unbiased estimate of the population variance.
    *   **Example:**  Data: 2, 4, 6, 8, 10.  Mean = 6. Variance =  ((2-6)² + (4-6)² + (6-6)² + (8-6)² + (10-6)²) / 5 = (16 + 4 + 0 + 4 + 16) / 5 = 8  (Assuming population)
    *   **Python Example (using NumPy):**
        ```python
        import numpy as np
        data = np.array([2, 4, 6, 8, 10])
        variance = np.var(data)  # Calculates population variance by default
        print(f"Variance (Population): {variance}") # Output: Variance (Population): 8.0

        variance_sample = np.var(data, ddof=1) # Set ddof=1 to calculate sample variance
        print(f"Variance (Sample): {variance_sample}") # Output: Variance (Sample): 10.0
        ```

*   **Standard Deviation:** The square root of the variance.  It is a more interpretable measure of spread because it is in the same units as the original data.

    *   **Formula (Population Standard Deviation):** `σ = √σ²`
    *   **Formula (Sample Standard Deviation):** `s = √s²`
    *   **Example:** Using the previous data (variance = 8), standard deviation = √8 ≈ 2.83
    *   **Python Example (using NumPy):**
        ```python
        import numpy as np
        data = np.array([2, 4, 6, 8, 10])
        std_dev = np.std(data) # Calculates population standard deviation by default
        print(f"Standard Deviation (Population): {std_dev}") # Output: Standard Deviation (Population): 2.8284271247461903

        std_dev_sample = np.std(data, ddof=1) #Set ddof=1 to calculate sample standard deviation
        print(f"Standard Deviation (Sample): {std_dev_sample}") # Output: Standard Deviation (Sample): 3.1622776601683795
        ```

**Important Point:**  A larger variance/standard deviation indicates greater variability in the data.

### 1.3 Frequency Distribution and Histograms

*   **Frequency Distribution:** A table or graph that shows the frequency (number of occurrences) of each value or group of values in a dataset.

*   **Histogram:** A graphical representation of a frequency distribution.  It consists of bars where the height of each bar represents the frequency of values within a particular bin (range).

    *   **Example:** Suppose we have the following exam scores: 60, 65, 70, 70, 75, 80, 80, 80, 85, 90. A histogram might group the scores into bins of size 10 (e.g., 60-69, 70-79, 80-89, 90-99). The histogram would then show the number of scores that fall within each bin.

    *   **Python Example (using Matplotlib):**
        ```python
        import matplotlib.pyplot as plt
        import numpy as np

        data = np.array([60, 65, 70, 70, 75, 80, 80, 80, 85, 90])
        plt.hist(data, bins=[60, 70, 80, 90, 100], edgecolor='black') # Specifies the bin edges
        plt.xlabel("Exam Scores")
        plt.ylabel("Frequency")
        plt.title("Histogram of Exam Scores")
        plt.show()
        ```

### 1.4 Percentiles

*   **Percentile:** A value below which a certain percentage of the data falls.  For example, the 75th percentile is the value below which 75% of the data falls.

*   **Example:** If a student's score is at the 80th percentile, it means that 80% of the students scored lower than that student.

*   **Python Example (using NumPy):**
    ```python
    import numpy as np
    data = np.array([2, 4, 6, 8, 10])
    percentile_75 = np.percentile(data, 75)  # Calculate the 75th percentile
    print(f"75th Percentile: {percentile_75}")  # Output: 75th Percentile: 9.0
    ```

## 2. Apriori Algorithm

The Apriori algorithm is a classic algorithm for association rule mining.  It is used to discover frequent itemsets and association rules from transaction datasets.

### 2.1 Key Concepts

*   **Transaction:** A set of items purchased together in a single transaction (e.g., a customer's shopping basket).

*   **Itemset:** A collection of one or more items (e.g., {Bread, Milk}).

*   **k-itemset:** An itemset containing k items (e.g., {Bread, Milk, Butter} is a 3-itemset).

*   **Support:** The proportion of transactions that contain a specific itemset.  It measures how frequently an itemset appears in the dataset.

    *   **Formula:** `Support(X) = Number of transactions containing X / Total number of transactions`

*   **Confidence:** The conditional probability of item Y being purchased given that item X is purchased. It measures how often rule Y is found to be true when rule X is found to be true.

    *   **Formula:** `Confidence(X -> Y) = Support(X ∪ Y) / Support(X)`

*   **Lift:** The ratio of the observed support to that expected if X and Y were independent. It measures how much more likely Y is purchased when X is purchased, compared to the probability of Y being purchased independently.

    *   **Formula:** `Lift(X -> Y) = Confidence(X -> Y) / Support(Y)`
    *   **Interpretation:**
        *   Lift > 1: X and Y are positively correlated.
        *   Lift < 1: X and Y are negatively correlated.
        *   Lift = 1: X and Y are independent.

*   **Minimum Support (minsup):** A threshold value for support.  Itemsets with support below this threshold are considered infrequent and are not used in further analysis.

*   **Minimum Confidence (minconf):** A threshold value for confidence.  Rules with confidence below this threshold are considered weak and are not considered significant.

### 2.2 Apriori Algorithm Steps

1.  **Generate Frequent 1-Itemsets:**
    *   Calculate the support for each individual item.
    *   Keep only the items whose support is greater than or equal to the minimum support (minsup).

2.  **Generate Candidate k-Itemsets (k > 1):**
    *   Iteratively generate candidate k-itemsets from frequent (k-1)-itemsets using the Apriori property (explained below).
    *   Candidate itemsets are generated by joining frequent (k-1)-itemsets.  Two (k-1)-itemsets are joined if their first (k-2) items are the same.

3.  **Prune Candidate k-Itemsets:**
    *   Remove any candidate k-itemsets that contain any (k-1)-itemset that is not frequent.  This step uses the Apriori property.

4.  **Calculate Support for Candidate k-Itemsets:**
    *   Calculate the support for each candidate k-itemset in the dataset.

5.  **Generate Frequent k-Itemsets:**
    *   Keep only the candidate k-itemsets whose support is greater than or equal to the minimum support (minsup).

6.  **Repeat Steps 2-5 until no more frequent itemsets can be generated.**

7.  **Generate Association Rules:**
    *   Generate association rules from the frequent itemsets.
    *   For each frequent itemset, create rules by splitting the itemset into antecedent (X) and consequent (Y).
    *   Calculate the confidence for each rule.
    *   Keep only the rules whose confidence is greater than or equal to the minimum confidence (minconf).

### 2.3 Apriori Property

The Apriori property is a crucial concept in the Apriori algorithm:

*   **Definition:** If an itemset is infrequent, all of its supersets must also be infrequent. Conversely, if an itemset is frequent, all of its subsets must also be frequent.
*   **Use:** The Apriori algorithm uses this property to efficiently prune the search space for frequent itemsets. By identifying infrequent itemsets early on, the algorithm can avoid generating and evaluating many unnecessary candidate itemsets.

### 2.4 Example of Apriori Algorithm

Let's consider a simple transaction dataset:

| Transaction ID | Items              |
| :------------- | :----------------- |
| T1             | A, B, C          |
| T2             | A, B             |
| T3             | A, C             |
| T4             | B, C             |
| T5             | A, B, C, D      |

Assume `minsup = 0.4` (i.e., minimum support is 40% of the transactions) and `minconf = 0.6` (minimum confidence is 60%).

**Step 1: Generate Frequent 1-Itemsets**

| Item | Support | Frequent? |
| :--- | :------ | :-------- |
| A    | 4/5 = 0.8 | Yes       |
| B    | 4/5 = 0.8 | Yes       |
| C    | 4/5 = 0.8 | Yes       |
| D    | 1/5 = 0.2 | No        |

Frequent 1-Itemsets: {A}, {B}, {C}

**Step 2: Generate Candidate 2-Itemsets**

Candidate 2-Itemsets: {A, B}, {A, C}, {B, C} (We only join frequent items from the previous step.)

**Step 3: Calculate Support for Candidate 2-Itemsets**

| Itemset | Support | Frequent? |
| :------ | :------ | :-------- |
| {A, B}  | 3/5 = 0.6 | Yes       |
| {A, C}  | 3/5 = 0.6 | Yes       |
| {B, C}  | 3/5 = 0.6 | Yes       |

Frequent 2-Itemsets: {A, B}, {A, C}, {B, C}

**Step 4: Generate Candidate 3-Itemsets**

Candidate 3-Itemsets: {A, B, C} (We join {A, B} with {A, C} and {B, C}, ensuring that the first item is same).

**Step 5: Calculate Support for Candidate 3-Itemsets**

| Itemset    | Support | Frequent? |
| :--------- | :------ | :-------- |
| {A, B, C} | 2/5 = 0.4 | Yes       |

Frequent 3-Itemsets: {A, B, C}

**Step 6: Generate Candidate 4-Itemsets**

No candidate 4-itemsets can be generated as there are no frequent 3-itemsets to join with {A, B, C}.

**Step 7: Generate Association Rules**

From frequent itemsets, we can generate association rules.  Let's focus on the {A, B, C} itemset.

*   Rule 1: A, B -> C.  Confidence = Support({A, B, C}) / Support({A, B}) = 0.4 / 0.6 = 0.67. This rule satisfies minconf.
    *   Lift(A, B -> C) = Confidence(A, B -> C) / Support(C) = 0.67 / 0.8 = 0.84 (slightly negatively correlated)
*   Rule 2: A, C -> B.  Confidence = Support({A, B, C}) / Support({A, C}) = 0.4 / 0.6 = 0.67. This rule satisfies minconf.
    *   Lift(A, C -> B) = Confidence(A, C -> B) / Support(B) = 0.67 / 0.8 = 0.84 (slightly negatively correlated)
*   Rule 3: B, C -> A.  Confidence = Support({A, B, C}) / Support({B, C}) = 0.4 / 0.6 = 0.67. This rule satisfies minconf.
    *   Lift(B, C -> A) = Confidence(B, C -> A) / Support(A) = 0.67 / 0.8 = 0.84 (slightly negatively correlated)
*   Rule 4: A -> B, C.  Confidence = Support({A, B, C}) / Support({A}) = 0.4 / 0.8 = 0.5. This rule *does not* satisfy minconf and would be discarded.
*   Rule 5: B -> A, C.  Confidence = Support({A, B, C}) / Support({B}) = 0.4 / 0.8 = 0.5. This rule *does not* satisfy minconf and would be discarded.
*   Rule 6: C -> A, B.  Confidence = Support({A, B, C}) / Support({C}) = 0.4 / 0.8 = 0.5. This rule *does not* satisfy minconf and would be discarded.

### 2.5 Advantages of Apriori Algorithm

*   **Easy to implement and understand.**
*   **Uses the Apriori property to prune the search space effectively.**
*   **Widely used and well-established algorithm.**

### 2.6 Disadvantages of Apriori Algorithm

*   **Can be computationally expensive, especially for large datasets with many frequent itemsets.**  The algorithm requires multiple passes over the dataset.
*   **Can generate a large number of candidate itemsets, even with pruning.**
*   **Sensitive to the choice of minimum support.**  A low minimum support can lead to the generation of many irrelevant itemsets, while a high minimum support can miss important patterns.

### 2.7 Practice Questions/Exercises

1.  **Data:** Transaction data of customers buying items:

    | Transaction ID | Items         |
    | :------------- | :------------ |
    | T1             | Milk, Bread   |
    | T2             | Milk, Diapers |
    | T3             | Bread, Diapers, Beer |
    | T4             | Milk, Diapers, Beer |
    | T5             | Bread, Diapers |
    | T6             | Milk, Bread, Diapers, Beer |

    Using Apriori Algorithm, with `minsup = 0.5` and `minconf = 0.7`:

    a)  Find the frequent 1-itemsets.
    b)  Find the frequent 2-itemsets.
    c)  Find the association rules from the frequent itemsets with confidence greater than the minimum confidence.

    **Answer:**

    a)  **Frequent 1-itemsets:**
        *   Milk: 4/6 = 0.67 (Frequent)
        *   Bread: 3/6 = 0.5 (Frequent)
        *   Diapers: 4/6 = 0.67 (Frequent)
        *   Beer: 2/6 = 0.33 (Not Frequent)

        Frequent 1-itemsets: {Milk}, {Bread}, {Diapers}

    b)  **Frequent 2-itemsets:**
        *   {Milk, Bread}: 2/6 = 0.33 (Not Frequent)
        *   {Milk, Diapers}: 3/6 = 0.5 (Frequent)
        *   {Bread, Diapers}: 2/6 = 0.33 (Not Frequent)

        Frequent 2-itemsets: {Milk, Diapers}

    c)  **Association Rules:**
        *   From {Milk, Diapers}:
            *   Milk -> Diapers: Confidence = Support({Milk, Diapers}) / Support({Milk}) = (3/6) / (4/6) = 0.75.  This rule *satisfies* the minimum confidence of 0.7.
            *   Diapers -> Milk: Confidence = Support({Milk, Diapers}) / Support({Diapers}) = (3/6) / (4/6) = 0.75.  This rule *satisfies* the minimum confidence of 0.7.

        Therefore the association rules are:

        *   Milk -> Diapers
        *   Diapers -> Milk

2.  What is the Apriori Property and how does it help the Apriori algorithm?

    **Answer:** The Apriori Property states that if an itemset is infrequent, all of its supersets must also be infrequent. This property allows the algorithm to prune candidate itemsets that are guaranteed to be infrequent, reducing the computational cost.

3.  How are Support, Confidence, and Lift used to evaluate association rules?

    **Answer:**

    *   **Support:** Indicates how frequently the itemset occurs in the dataset.
    *   **Confidence:** Measures the reliability of the rule.  It's the probability of finding the consequent in transactions that contain the antecedent.
    *   **Lift:** Measures how much more likely the consequent is purchased when the antecedent is purchased, compared to the probability of purchasing the consequent independently.  A lift greater than 1 indicates a positive correlation.

### 2.8 Important Points to Remember

*   The Apriori algorithm is used for association rule mining.
*   Key concepts are: support, confidence, and lift.
*   The Apriori property is crucial for efficient pruning.
*   The choice of minimum support and minimum confidence affects the results.
*   Be aware of the algorithm's computational limitations for large datasets.
