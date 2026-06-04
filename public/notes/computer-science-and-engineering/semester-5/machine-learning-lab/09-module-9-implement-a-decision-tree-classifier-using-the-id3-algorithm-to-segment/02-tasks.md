---
title: "Tasks:"
subject: "MACHINE LEARNING LAB"
module: "Module 9: Implement a Decision Tree classifier using the ID3 algorithm to segment customers based on their purchasing behavior using the Online Retail dataset. Analyze the tree structure and discuss the feature importance."
branch: "Computer Science and Engineering"
semester: 5
topicId: "684162770fc9aa1fdbc8b966"
status: "completed"
scrapedAt: "2026-05-20T16:47:29.724Z"
---
# MACHINE LEARNING LAB - Module 9: Decision Tree Classifier (ID3) for Customer Segmentation

**Topic:** Implementing a Decision Tree classifier using the ID3 algorithm to segment customers based on their purchasing behavior using the Online Retail dataset. Analyzing the tree structure and discussing feature importance.

**Learning Outcomes:**

*   Understand the principles and workings of the ID3 algorithm.
*   Implement a Decision Tree classifier using the ID3 algorithm in Python.
*   Apply the Decision Tree classifier to the Online Retail dataset.
*   Segment customers based on their purchasing behavior.
*   Analyze the structure of the generated Decision Tree.
*   Determine and interpret feature importance based on the tree structure.
*   Understand the strengths and weaknesses of Decision Tree classifiers.

## 1. Introduction to Decision Trees and ID3 Algorithm

*   **Decision Tree:** A supervised learning algorithm used for both classification and regression tasks. It works by recursively partitioning the feature space into distinct regions based on a series of decision rules. The structure resembles a tree, with nodes representing decisions based on feature values and leaves representing the predicted outcome (class or value).

*   **ID3 (Iterative Dichotomiser 3):** A greedy algorithm used to construct decision trees for classification problems.  It selects the best attribute (feature) to split the data at each node based on the concept of *information gain*. It favors attributes with high information gain. ID3 assumes all attributes are categorical.

*   **Key Concepts:**

    *   **Entropy:** A measure of impurity or disorder in a dataset.  A higher entropy value indicates more randomness, while a lower value indicates more homogeneity. Formula: `Entropy(S) = -Σ p(i) * log2(p(i))`, where `S` is the dataset, and `p(i)` is the proportion of data belonging to class `i`.

    *   **Information Gain:** The reduction in entropy achieved by partitioning the dataset based on a particular attribute.  ID3 selects the attribute with the highest information gain for each node split.  Formula: `Gain(S, A) = Entropy(S) - Σ (|Sv| / |S|) * Entropy(Sv)`, where `S` is the dataset, `A` is the attribute, `Sv` is the subset of `S` where attribute `A` has value `v`, and `|Sv|` and `|S|` represent the size of the respective sets.

    *   **Root Node:** The topmost node in the decision tree, representing the initial decision.

    *   **Internal Node:** A node that represents a decision based on a feature's value.

    *   **Leaf Node:** A terminal node that represents the final prediction (class label).

    *   **Branches:**  Represent the outcome of a test (a specific value of the chosen attribute).

*   **ID3 Algorithm Steps:**

    1.  Start with the entire dataset.
    2.  Calculate the entropy of the dataset.
    3.  For each attribute:
        *   Calculate the information gain by splitting the dataset on that attribute.
    4.  Select the attribute with the highest information gain.
    5.  Create a decision node based on the selected attribute.
    6.  Split the dataset into subsets based on the values of the selected attribute.
    7.  Recursively repeat steps 2-6 for each subset until:
        *   All samples in a subset belong to the same class (pure node).
        *   There are no more attributes to split on.
        *   A predefined stopping criterion is met (e.g., maximum tree depth).

## 2. Implementing ID3 in Python

*   **Libraries:**
    *   `pandas`: For data manipulation and analysis.
    *   `numpy`: For numerical operations.
    *   `sklearn`: (Although not strictly ID3, can provide a DecisionTreeClassifier to compare performance).

*   **Example Implementation (Conceptual - simplified and assumes categorical data):**

    ```python
    import pandas as pd
    import numpy as np
    from math import log2

    def entropy(data):
        """Calculates the entropy of a dataset."""
        class_counts = data['Class'].value_counts() # Assuming 'Class' is the target variable
        total_samples = len(data)
        entropy_value = 0
        for count in class_counts:
            probability = count / total_samples
            entropy_value -= probability * log2(probability)
        return entropy_value

    def information_gain(data, attribute):
        """Calculates the information gain of splitting on an attribute."""
        total_entropy = entropy(data)
        attribute_values = data[attribute].unique()
        weighted_entropy = 0
        for value in attribute_values:
            subset = data[data[attribute] == value]
            weighted_entropy += (len(subset) / len(data)) * entropy(subset)
        return total_entropy - weighted_entropy

    def id3(data, attributes, target_attribute="Class", max_depth=5, current_depth=0):
        """Implements the ID3 algorithm."""

        # Base Cases:
        # 1. All examples have the same class.
        if len(data[target_attribute].unique()) == 1:
            return data[target_attribute].unique()[0]  # Return the class

        # 2. No more attributes to split on, or max depth reached.
        if not attributes or current_depth >= max_depth:
            return data[target_attribute].value_counts().idxmax()  # Return the majority class

        # Find the best attribute to split on.
        gains = {attr: information_gain(data, attr) for attr in attributes}
        best_attribute = max(gains, key=gains.get)

        # Create the tree.
        tree = {best_attribute: {}}

        # Recursively build the tree for each value of the best attribute.
        for value in data[best_attribute].unique():
            subset = data[data[best_attribute] == value]
            new_attributes = [attr for attr in attributes if attr != best_attribute]
            subtree = id3(subset, new_attributes, target_attribute, max_depth, current_depth + 1)
            tree[best_attribute][value] = subtree

        return tree


    # Example Usage (Requires Data Preparation):
    # Assuming you have a DataFrame called 'retail_data' with a 'Class' column and other relevant attributes.
    # Replace with your actual data and column names.

    # Prepare a sample dataframe, which must include a target variable named 'Class'
    retail_data = pd.DataFrame({
        'Feature1': ['A', 'A', 'B', 'B', 'A', 'B'],
        'Feature2': ['X', 'Y', 'X', 'Y', 'X', 'Y'],
        'Class': ['Yes', 'No', 'Yes', 'No', 'Yes', 'No']
    })
    attributes = ['Feature1', 'Feature2']  # List of attributes to use for splitting
    decision_tree = id3(retail_data, attributes, target_attribute="Class")
    print(decision_tree)
    ```

*   **Explanation:**

    *   `entropy(data)`: Calculates the entropy of the dataset based on the distribution of class labels.
    *   `information_gain(data, attribute)`: Calculates the information gain for a given attribute.
    *   `id3(data, attributes)`: Implements the ID3 algorithm recursively.  It finds the best attribute, creates a node, splits the data, and recursively calls itself on the subsets.

*   **Limitations of this Simplified Implementation:**
    *   Handles only categorical attributes.  Real-world datasets often contain numerical attributes, which require discretization (binning).
    *   No pruning to prevent overfitting.
    *   Basic structure; not optimized for performance.
    *   No explicit handling of missing values.

## 3. Applying ID3 to the Online Retail Dataset

*   **Dataset:** The Online Retail dataset typically contains information about customer transactions, including:

    *   `InvoiceNo`: Invoice number.
    *   `StockCode`: Stock code of the product.
    *   `Description`: Product description.
    *   `Quantity`: Quantity of items purchased.
    *   `InvoiceDate`: Date and time of the transaction.
    *   `UnitPrice`: Unit price of the product.
    *   `CustomerID`: Customer identifier.
    *   `Country`: Country where the transaction occurred.

*   **Data Preprocessing:** Before applying ID3, the data needs to be preprocessed:

    1.  **Data Cleaning:** Handle missing values (e.g., impute or remove rows).  Correct inconsistencies.

    2.  **Feature Engineering:**
        *   **Recency:** How recently a customer made a purchase (e.g., days since last purchase).
        *   **Frequency:** How often a customer makes purchases (e.g., number of transactions).
        *   **Monetary Value:** Total spending by a customer (e.g., sum of purchases).
        *   **Average Basket Size:** Average number of items per transaction.
        *   **Country of Origin:** Where the customer originates from. (One-hot encode if needed)
        *   **Time of Day:** Time of Day the purchase was made.
        *   Create a **target variable**: This requires some business intuition. Example:
            *   **Customer Segmentation based on Spending Tier**: Low, Medium, High (based on monetary value quantiles).
            *   **Churn Prediction**: Whether a customer will make another purchase in the near future (requires defining a time window).
        *   **Convert Numerical to Categorical:** ID3 requires categorical attributes.  Bin numerical features into categories (e.g., "Low", "Medium", "High" for Recency, Frequency, Monetary Value).  Use techniques like equal-width binning, equal-frequency binning, or custom binning based on domain knowledge.

    3.  **Feature Selection:** Choose the most relevant features for segmentation. This can be done through domain knowledge or through feature selection techniques.

*   **Implementation Steps:**

    1.  Load the Online Retail dataset using `pandas`.
    2.  Perform data cleaning and preprocessing (as described above).
    3.  Convert numerical features to categorical features using binning.
    4.  Create the target variable.
    5.  Prepare the data for the ID3 algorithm (e.g., convert to a suitable format).
    6.  Run the ID3 algorithm on the preprocessed data.
    7.  Visualize the resulting decision tree (if feasible).

## 4. Analyzing the Tree Structure and Feature Importance

*   **Tree Structure:**

    *   The tree structure reveals how the algorithm partitioned the customers based on their purchasing behavior.  Each node represents a decision rule based on a feature, and the branches represent the possible outcomes of that decision.
    *   The depth of the tree indicates the complexity of the decision rules.  A deeper tree may be more accurate but also more prone to overfitting.

*   **Feature Importance:**

    *   Feature importance refers to the relative contribution of each feature to the decision-making process.  In the context of ID3, feature importance can be inferred from the tree structure:
        *   **Features used higher up in the tree (closer to the root) are generally more important.** These features have a greater impact on the overall segmentation because they are used to make the initial splits.
        *   **The information gain of each attribute at each node can be used as a measure of feature importance.**  Attributes with higher information gain are considered more important.

*   **Interpretation:**

    *   By analyzing the tree structure and feature importance, you can gain insights into the key factors that drive customer segmentation.  For example, you might find that Recency is the most important factor, indicating that customers who recently made a purchase are more likely to belong to a specific segment.

*   **Example:**

    Suppose the root node of the decision tree is based on the "Recency" feature.  This indicates that Recency is the most important factor in segmenting customers.  If the next level of the tree splits based on "Frequency", it suggests that Frequency is the second most important factor.

## 5. Strengths and Weaknesses of Decision Tree Classifiers

*   **Strengths:**

    *   **Easy to understand and interpret:** Decision trees are intuitive and easy to visualize, making them accessible to non-technical stakeholders.
    *   **Handles both categorical and numerical data (with preprocessing):** While ID3 technically handles only categorical, most implementations and libraries allow for numerical data with discretization.
    *   **Non-parametric:** No assumptions about the underlying data distribution.
    *   **Feature importance:** Provides insights into the most relevant features.
    *   **Relatively fast:**  Building and predicting with decision trees can be computationally efficient.

*   **Weaknesses:**

    *   **Overfitting:** Prone to overfitting the training data, especially with complex trees. This can be mitigated using techniques like pruning, setting a maximum tree depth, or using ensemble methods (e.g., Random Forest).
    *   **Instability:** Small changes in the training data can lead to significant changes in the tree structure.
    *   **Bias towards features with many levels:** ID3 (in its original form) tends to favor features with many distinct values.  Information gain is biased.
    *   **Can struggle with complex relationships:** May not be suitable for datasets with highly complex non-linear relationships.

## 6. Practice Questions/Exercises

1.  **What is entropy, and how is it used in the ID3 algorithm?**
    *   **Answer:** Entropy is a measure of disorder or impurity in a dataset. In ID3, it's used to quantify the uncertainty about the class labels. The algorithm aims to reduce entropy at each node by selecting the attribute that provides the highest information gain.

2.  **Explain the concept of information gain and how it is calculated.**
    *   **Answer:** Information gain is the reduction in entropy achieved by splitting a dataset on a particular attribute. It is calculated as the difference between the entropy of the original dataset and the weighted average of the entropies of the subsets created by the split.  `Gain(S, A) = Entropy(S) - Σ (|Sv| / |S|) * Entropy(Sv)`.

3.  **What are some common data preprocessing steps required before applying ID3 to the Online Retail dataset?**
    *   **Answer:** Data cleaning (handling missing values), feature engineering (creating RFM features), converting numerical features to categorical features (binning), and feature selection.

4.  **How can you determine the importance of a feature in a decision tree built using the ID3 algorithm?**
    *   **Answer:** By observing the position of the feature in the tree. Features used higher up in the tree (closer to the root) are generally more important. The information gain of each attribute can also be used.

5.  **What are the limitations of the ID3 algorithm, and how can they be addressed?**
    *   **Answer:** Overfitting (addressed by pruning, setting maximum depth, ensemble methods), bias towards features with many levels (addressed by using Gain Ratio), handles only categorical features (needs discretization).

6.  **Implement a function to calculate the Gini Impurity of a dataset.  How does this compare to entropy?**
    ```python
    import pandas as pd
    def gini_impurity(data, target_attribute="Class"):
        """Calculates the Gini Impurity of a dataset."""
        class_counts = data[target_attribute].value_counts()
        total_samples = len(data)
        gini = 1.0
        for class_label, count in class_counts.items():
            probability = count / total_samples
            gini -= probability**2
        return gini

    # Sample Data
    data = pd.DataFrame({'Class': ['A', 'A', 'B', 'C', 'C', 'C']})
    print(gini_impurity(data)) # Output: 0.6111111111111112
    ```

    *   **Comparison:** Both Gini Impurity and Entropy are measures of impurity. Entropy uses the logarithm base 2 which makes it more computationally intensive.  Gini Impurity can sometimes be faster to compute. Both are used in decision trees, with CART using Gini and ID3 and C4.5 using Entropy/Information Gain.

7.  **Explain how you would handle missing values when building a decision tree. List at least 3 methods.**
    *   **Answer:**
        1.  **Deletion:** Remove rows with missing values (use with caution, can lose data).
        2.  **Imputation:** Replace missing values with a substitute value. Common methods include:
            *   Mean/Median/Mode imputation: Replace with the mean (for numerical), median (for numerical, robust to outliers) or mode (for categorical) of the attribute.
            *   Constant value imputation: Replace with a constant value (e.g., 0, "Unknown").
        3.  **Treat Missing Value as a Separate Category:** For categorical features, consider creating a new category for the missing values.

## 7. Important Points to Remember

*   ID3 is a relatively simple algorithm that provides a good starting point for understanding decision trees.
*   Data preprocessing is crucial for achieving good performance with ID3.
*   Feature importance can be a valuable tool for gaining insights into the drivers of customer behavior.
*   Overfitting is a common problem with decision trees, and techniques like pruning should be used to mitigate it.
*   Consider using more advanced decision tree algorithms (e.g., C4.5, CART) or ensemble methods (e.g., Random Forest, Gradient Boosting) for better performance in real-world applications.
