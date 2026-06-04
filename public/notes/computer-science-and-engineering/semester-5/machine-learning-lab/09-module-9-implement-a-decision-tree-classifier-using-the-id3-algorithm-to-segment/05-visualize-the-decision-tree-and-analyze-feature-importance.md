---
title: "Visualize the decision tree and analyze feature importance."
subject: "MACHINE LEARNING LAB"
module: "Module 9: Implement a Decision Tree classifier using the ID3 algorithm to segment customers based on their purchasing behavior using the Online Retail dataset. Analyze the tree structure and discuss the feature importance."
branch: "Computer Science and Engineering"
semester: 5
topicId: "684162770fc9aa1fdbc8b969"
status: "completed"
scrapedAt: "2026-05-20T16:47:31.885Z"
---
## MACHINE LEARNING LAB - Module 9: Visualizing Decision Trees and Analyzing Feature Importance

**Topic:** Visualize the decision tree and analyze feature importance from a Decision Tree classifier trained using the ID3 algorithm on the Online Retail dataset to segment customers based on their purchasing behavior.

**Learning Outcomes:**

*   Understand how to visualize a decision tree.
*   Interpret the tree structure to understand decision rules.
*   Understand different methods to analyze feature importance.
*   Apply these techniques to the Online Retail dataset and interpret the results.

---

### 1. Introduction to Decision Tree Visualization

**1.1 Key Concepts:**

*   **Decision Tree:** A supervised learning algorithm used for both classification and regression tasks. It partitions the data into subsets based on a series of decision rules inferred from the data features.
*   **Tree Structure:** A hierarchical structure consisting of nodes, branches, and leaves.
    *   **Root Node:** The starting node of the tree representing the entire dataset.
    *   **Internal Node:** A node that tests an attribute and branches based on the outcome of the test.
    *   **Leaf Node:** A terminal node that represents the predicted class or value.
    *   **Branch:** Represents the outcome of a test at an internal node.
*   **ID3 Algorithm:** Iterative Dichotomiser 3 is a decision tree learning algorithm that uses entropy and information gain to determine the best attribute to split the data at each node.

**1.2 Why Visualize Decision Trees?**

*   **Interpretability:** Makes the decision-making process transparent and easy to understand.
*   **Debugging:** Helps identify potential problems in the model, such as overfitting or incorrect splitting rules.
*   **Communication:** Facilitates communication of the model's logic to non-technical stakeholders.
*   **Feature Importance:** Provides insights into the relative importance of different features in the decision-making process.

**1.3 Visualization Techniques:**

Several libraries can be used to visualize decision trees, including:

*   **Graphviz:** A graph visualization software.  Requires installation and often integration with a Python library.
*   **`sklearn.tree.plot_tree`:** Built-in function within scikit-learn to plot decision trees. (Recommended for this lab)
*   **`dtreeviz`:** A Python library that offers more advanced visualizations, including decision boundaries and detailed node information.

**Example (using `sklearn.tree.plot_tree`):**

```python
from sklearn.tree import DecisionTreeClassifier, plot_tree
from sklearn.model_selection import train_test_split
import matplotlib.pyplot as plt
import pandas as pd

# Sample data (replace with your Online Retail data processing)
data = {'CustomerID': [1, 2, 3, 4, 5],
        'Frequency': [5, 2, 7, 1, 3],
        'MonetaryValue': [100, 50, 200, 20, 75],
        'Recency': [10, 30, 5, 60, 20],
        'Segment': ['A', 'B', 'A', 'C', 'B']}
df = pd.DataFrame(data)

X = df[['Frequency', 'MonetaryValue', 'Recency']]
y = df['Segment']

X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)

# Train a Decision Tree Classifier (using ID3 principles, scikit-learn uses CART by default but the concepts are similar for visualization purposes)
dtree = DecisionTreeClassifier(max_depth=2)  # Limit depth for better visualization
dtree.fit(X_train, y_train)

# Visualize the tree
plt.figure(figsize=(12, 8))
plot_tree(dtree, feature_names=['Frequency', 'MonetaryValue', 'Recency'],
          class_names=dtree.classes_, filled=True, rounded=True)
plt.show()
```

**Explanation:**

1.  **Import necessary libraries:** `DecisionTreeClassifier`, `plot_tree`, `matplotlib.pyplot`, `pandas`, `train_test_split`.
2.  **Load and Prepare Data:** Replace the sample data with your processed Online Retail dataset, ensuring you have features (X) and target variable (y - segment/customer group).
3.  **Split Data:** Split your data into training and testing sets to train the model.
4.  **Train the Decision Tree:** Create a `DecisionTreeClassifier` object and fit it to the training data.  The `max_depth` parameter is crucial for controlling the complexity of the tree and making it easier to visualize.
5.  **Visualize the Tree:** Use `plot_tree` function to visualize the decision tree. The `feature_names` argument specifies the names of the features used in the tree, `class_names` specifies the classes, and `filled=True` fills the nodes with color based on the class distribution, and `rounded=True` makes the nodes look rounded.

**Key Takeaways from the Visualization:**

*   **Root Node:** The first split and the feature used for it.
*   **Internal Nodes:** How the data is further divided based on feature values.
*   **Leaf Nodes:** The predicted segment/customer group for each branch.  Observe the `value` attribute in each leaf node, indicating the distribution of classes within that leaf.
*   **Decision Rules:** Trace a path from the root to a leaf to understand the rules used to assign a customer to a particular segment.

---

### 2. Interpreting the Tree Structure and Decision Rules

**2.1 Understanding Node Information:**

When you visualize the tree, each node typically displays the following information:

*   **Feature:** The feature being tested at that node. (e.g., "Frequency")
*   **Threshold:** The value used to split the data. (e.g., "Frequency <= 5.5")
*   **Gini Impurity/Entropy:**  A measure of the impurity of the node. Lower values indicate a purer node (i.e., the node contains mostly instances of a single class).
*   **Samples:** The total number of samples that reach that node.
*   **Value:** The distribution of classes at that node.  Shows how many samples of each class are present in the node.
*   **Class:** The predicted class for that node (if it's a leaf node).  Based on the majority class in the leaf.

**2.2 Tracing Decision Paths:**

To understand how the model classifies a particular customer, follow the path from the root node to a leaf node.  At each internal node, check if the customer's feature value satisfies the condition. Based on the outcome, follow the corresponding branch until you reach a leaf node, which indicates the predicted customer segment.

**Example:**

Suppose you have a customer with Frequency = 6, MonetaryValue = 150, and Recency = 15.  Looking at the visualized tree:

1.  **Root Node:** Let's assume the root node splits on Frequency <= 5.5.  Since 6 > 5.5, you follow the "False" (right) branch.
2.  **Internal Node:**  The next node splits on MonetaryValue <= 125. Since 150 > 125, you follow the "False" (right) branch.
3.  **Leaf Node:** You arrive at a leaf node predicting segment "A."

Therefore, the decision tree predicts that this customer belongs to segment "A".

**2.3 Addressing Complexity:**

*   **Tree Depth:**  Deeper trees are more complex and can overfit the data.
*   **Pruning:** Techniques used to reduce the size of the tree and prevent overfitting (e.g., limiting `max_depth`, setting a minimum number of samples per leaf with `min_samples_leaf`, setting a minimum impurity decrease with `min_impurity_decrease`).
*   **Interpreting Large Trees:** Visualizing extremely large trees can be difficult. Consider limiting the depth or focusing on a specific subtree.  Feature importance analysis (discussed below) can help prioritize which parts of the tree to examine.

---

### 3. Feature Importance Analysis

**3.1 Definition:**

Feature importance refers to assigning a score to each feature based on its contribution to the predictive power of the model. Features with higher importance scores are considered more influential in making predictions.

**3.2 Methods for Determining Feature Importance:**

*   **Gini Importance (Mean Decrease Impurity):** This method calculates the total amount that each feature reduces the impurity (Gini impurity or entropy) across all nodes where it is used.  Features used earlier in the tree and/or in more nodes will generally have higher importance.  This is the default method used by scikit-learn's `DecisionTreeClassifier`.
*   **Permutation Importance:** This method measures the decrease in model score when a single feature is randomly shuffled. The idea is that if a feature is important, shuffling its values will significantly decrease the model's performance. This method is more robust than Gini importance but can be computationally expensive.
*   **SHAP (SHapley Additive exPlanations) values:**  A more sophisticated method based on game theory that calculates the contribution of each feature to each prediction. It provides a more comprehensive understanding of feature importance, taking into account feature interactions.  Requires more computational resources.

**3.3 Gini Importance in Scikit-learn:**

The `DecisionTreeClassifier` in scikit-learn provides the `feature_importances_` attribute, which stores the Gini importance scores for each feature.

**Example (using Gini Importance):**

```python
from sklearn.tree import DecisionTreeClassifier
from sklearn.model_selection import train_test_split
import pandas as pd
import matplotlib.pyplot as plt

# Sample data (replace with your Online Retail data processing)
data = {'CustomerID': [1, 2, 3, 4, 5],
        'Frequency': [5, 2, 7, 1, 3],
        'MonetaryValue': [100, 50, 200, 20, 75],
        'Recency': [10, 30, 5, 60, 20],
        'Segment': ['A', 'B', 'A', 'C', 'B']}
df = pd.DataFrame(data)

X = df[['Frequency', 'MonetaryValue', 'Recency']]
y = df['Segment']

X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)

# Train a Decision Tree Classifier
dtree = DecisionTreeClassifier()
dtree.fit(X_train, y_train)

# Get feature importances
importances = dtree.feature_importances_

# Print feature importances
print("Feature Importances:", importances)

# Plot feature importances
plt.bar(X.columns, importances)
plt.xlabel("Features")
plt.ylabel("Importance")
plt.title("Feature Importance")
plt.show()
```

**Explanation:**

1.  **Train a Decision Tree:** Create and train a `DecisionTreeClassifier` on your data.
2.  **Access Feature Importances:** Access the `feature_importances_` attribute of the trained model. This is a NumPy array containing the importance scores for each feature, in the same order as the features in your data.
3.  **Interpret Feature Importances:** The values in the `feature_importances_` array represent the relative importance of each feature. Higher values indicate greater importance.  They are normalized to sum to 1.
4.  **Visualize Feature Importances:** Create a bar plot or other visualization to display the feature importances, making it easier to compare the relative importance of different features.

**3.4 Interpreting Feature Importance Results:**

*   **Identify Key Drivers:** The features with the highest importance scores are the most important drivers of customer segmentation.
*   **Feature Selection:** Feature importance can be used to select a subset of the most relevant features for building a simpler and more interpretable model.  Removing unimportant features can also improve model performance by reducing noise and overfitting.
*   **Business Insights:** Understanding feature importance can provide valuable business insights into the factors that drive customer behavior. For example, if "Frequency" is the most important feature, it suggests that how often a customer makes purchases is a key determinant of their segment.

**3.5 Considerations:**

*   **Correlation:** If features are highly correlated, their importance scores may be misleading. One feature might appear to be more important than it actually is simply because it is correlated with another important feature.  Consider using feature selection techniques or dimensionality reduction to address collinearity.
*   **Algorithm Bias:**  Different feature importance methods can produce different results.  It's a good practice to try multiple methods and compare the results.  Gini importance, while readily available, can be biased towards features with many categories or high cardinality.
*   **Context Matters:** Feature importance should always be interpreted in the context of the specific dataset and business problem.

---

### 4. Applying to the Online Retail Dataset

**4.1 Data Preparation (Brief Recap):**

Remember that you'll need to perform the following data preparation steps on the Online Retail dataset before applying the decision tree:

1.  **Data Cleaning:** Handle missing values, remove irrelevant columns.
2.  **Feature Engineering:** Create features relevant to customer segmentation, such as:
    *   **Recency:**  Number of days since the last purchase.
    *   **Frequency:**  Number of purchases made by the customer.
    *   **Monetary Value:** Total spending by the customer.
3.  **Segmentation:** Define customer segments based on their RFM values (e.g., using quantiles or clustering).  This will be your target variable (y).
4.  **Feature Scaling:**  Decision trees are not inherently sensitive to feature scaling, but it can be beneficial to scale features, especially if using other algorithms in conjunction with the decision tree.

**4.2 Steps:**

1.  **Load and Prepare the Data:** Load the Online Retail dataset and perform the necessary data cleaning and feature engineering steps as described above.
2.  **Split the Data:** Split the data into training and testing sets.
3.  **Train the Decision Tree:** Train a `DecisionTreeClassifier` on the training data, using the engineered features as input and the customer segments as the target variable. Experiment with different `max_depth` values to control the complexity of the tree.
4.  **Visualize the Tree:** Visualize the trained decision tree using `plot_tree`. Adjust the figure size and font size to make the tree more readable.
5.  **Analyze Feature Importance:**  Obtain the feature importances using `dtree.feature_importances_` and visualize them using a bar plot.
6.  **Interpret the Results:** Analyze the tree structure and feature importances to understand the key drivers of customer segmentation.  Identify the most important features and the decision rules used to classify customers into different segments.

**4.3 Expected Outcomes:**

*   A visualized decision tree that shows how the algorithm segments customers based on their purchasing behavior.
*   A ranked list of features based on their importance in the decision-making process.
*   Insights into the key drivers of customer segmentation in the Online Retail dataset.

---

### Practice Questions and Exercises:

1.  **Question:** What does a leaf node represent in a decision tree?

    **Answer:** A leaf node represents the predicted class or value for a particular data point (customer segment in our case).

2.  **Question:** How does the `max_depth` parameter affect the visualization and interpretability of a decision tree?

    **Answer:** `max_depth` limits the depth of the tree. A smaller `max_depth` results in a simpler and easier-to-visualize tree but might underfit the data. A larger `max_depth` can lead to a more complex tree that is harder to visualize and may overfit the data.

3.  **Exercise:** Train a DecisionTreeClassifier on the Online Retail dataset (after performing data preparation). Experiment with different `max_depth` values (e.g., 2, 4, 6) and observe how the tree structure and feature importances change.  Which `max_depth` value provides the best balance between interpretability and performance?

4.  **Question:** What is Gini importance, and how is it calculated?

    **Answer:** Gini importance (or Mean Decrease Impurity) measures the total reduction in impurity (e.g., Gini impurity or entropy) achieved by each feature across all nodes in the tree where it is used. It is calculated as the sum of the impurity decreases weighted by the proportion of samples that reach each node.

5.  **Exercise:** After training your decision tree on the Online Retail dataset, identify the top 3 most important features based on Gini importance. How would you interpret these results from a business perspective? For example, if `Recency` is the most important feature, what does that suggest about customer behavior?

6.  **Question:** What are some limitations of relying solely on Gini importance for feature importance analysis?

    **Answer:** Gini importance can be biased towards features with many categories or high cardinality and may not accurately reflect the true importance of features in the presence of multicollinearity.

7.  **Exercise:** Explain in your own words how you would explain the decision making of a decision tree to a non-technical stakeholder.  Include an example based on a simplified version of the Online Retail dataset (e.g. only 3 customers and a tree depth of 1).

---

### Important Points to Remember:

*   **Data preparation is crucial.** The quality of your features directly impacts the performance and interpretability of the decision tree.
*   **Visualize the tree to understand the decision rules.**
*   **Feature importance provides insights into the key drivers of customer segmentation.**
*   **Consider the limitations of Gini importance and explore other feature importance methods if necessary.**
*   **Interpret the results in the context of the business problem.**
*   **Experiment with different tree depths to balance interpretability and performance.**
*   **Address overfitting by using pruning techniques (e.g., limiting `max_depth`, `min_samples_leaf`, `min_impurity_decrease`).**
