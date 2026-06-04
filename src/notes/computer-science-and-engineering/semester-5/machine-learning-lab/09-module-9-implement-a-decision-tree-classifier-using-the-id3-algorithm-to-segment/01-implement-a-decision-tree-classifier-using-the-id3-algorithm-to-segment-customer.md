---
title: "Implement a Decision Tree classifier using the ID3 algorithm to segment customers based on their purchasing behavior using the Online Retail dataset. Analyze the tree structure and discuss the feature importance."
subject: "MACHINE LEARNING LAB"
module: "Module 9: Implement a Decision Tree classifier using the ID3 algorithm to segment customers based on their purchasing behavior using the Online Retail dataset. Analyze the tree structure and discuss the feature importance."
branch: "Computer Science and Engineering"
semester: 5
topicId: "684162770fc9aa1fdbc8b965"
status: "completed"
scrapedAt: "2026-05-20T16:47:29.003Z"
---
# MACHINE LEARNING LAB - Module 9: Decision Tree Classifier with ID3 Algorithm

**Topic:** Implement a Decision Tree classifier using the ID3 algorithm to segment customers based on their purchasing behavior using the Online Retail dataset. Analyze the tree structure and discuss the feature importance.

**Description:** Implementing the ID3 algorithm for customer segmentation using the Online Retail dataset. Analyzing the resulting decision tree's structure and interpreting feature importance for purchasing behavior.

## Learning Outcomes:

*   Understand the ID3 algorithm and its application in classification.
*   Learn how to prepare the Online Retail dataset for machine learning.
*   Implement a Decision Tree classifier using the ID3 algorithm.
*   Visualize and interpret the structure of a Decision Tree.
*   Analyze feature importance within a Decision Tree.
*   Understand the limitations of the ID3 algorithm.

## 1. Key Concepts and Definitions

*   **Decision Tree:** A supervised learning algorithm used for both classification and regression tasks. It partitions data into smaller subsets based on features until a prediction can be made.
*   **ID3 Algorithm (Iterative Dichotomiser 3):** A greedy algorithm used to construct a decision tree. It selects the best attribute to split on at each node by maximizing information gain.
*   **Entropy:** A measure of impurity or disorder in a set of data. In the context of decision trees, it represents the uncertainty associated with the class label of a data point. Formula:

    `Entropy(S) = - Σ p(i) * log2(p(i))`

    Where:
    *   `S` is the dataset
    *   `p(i)` is the proportion of data points belonging to class `i`
*   **Information Gain:** Measures the reduction in entropy achieved by splitting a dataset on a particular attribute.  It represents how much information a feature provides about the class label. Formula:

    `Gain(S, A) = Entropy(S) - Σ (|Sv| / |S|) * Entropy(Sv)`

    Where:
    *   `S` is the dataset
    *   `A` is the attribute being split on
    *   `Sv` is the subset of `S` where attribute `A` has value `v`
    *   `|Sv|` is the number of elements in `Sv`
    *   `|S|` is the number of elements in `S`
*   **Gini Impurity:** Another measure of impurity, alternative to entropy. Formula:

    `Gini(S) = 1 - Σ p(i)^2`

    Where:
    *   `S` is the dataset
    *   `p(i)` is the proportion of data points belonging to class `i`

*   **Customer Segmentation:** Dividing a customer base into groups of individuals that are similar in specific ways relevant to marketing, such as age, gender, interests, and spending habits.
*   **Feature Importance:** Indicates the relative importance of each feature in the decision-making process of the decision tree.  Features used higher up in the tree have a greater impact on the final prediction.
*   **Overfitting:**  When a model learns the training data too well, including noise and outliers, leading to poor performance on unseen data.
*   **Pruning:** A technique to reduce the size and complexity of a decision tree, thereby improving its generalization performance and preventing overfitting.
*   **Online Retail Dataset:**  A transactional dataset containing the purchases made by online retail customers. It typically includes features like:
    *   `InvoiceNo`: Invoice number. Nominal, a 6-digit integral number uniquely assigned to each transaction. If this code starts with letter 'c', it indicates a cancellation.
    *   `StockCode`: Product (item) code. Nominal, a 5-digit integral number uniquely assigned to each distinct product.
    *   `Description`: Product (item) name. Nominal.
    *   `Quantity`: The quantities of each product (item) per transaction. Numeric.
    *   `InvoiceDate`: Invoice Date and time. Numeric, the day and time when each transaction was generated.
    *   `UnitPrice`: Unit price. Numeric, Product price per unit in sterling.
    *   `CustomerID`: Customer number. Nominal, a 5-digit integral number uniquely assigned to each customer.
    *   `Country`: Country name. Nominal, the country where each customer resides.

## 2. Preparing the Online Retail Dataset

*   **Data Cleaning:**
    *   Handle missing values (e.g., impute with the mean, median, or mode; or remove rows with missing values).  CustomerID often has missing values which often need to be removed if they're crucial for segmentation.
    *   Remove duplicate rows.
    *   Address inconsistencies and errors in the data.
*   **Feature Engineering:**
    *   Create new features from existing ones (e.g., total spending per customer, recency, frequency, monetary value (RFM) features).  These are often more informative than the raw transactional data.
    *   Convert categorical features into numerical representations using techniques like one-hot encoding or label encoding.  ID3 algorithm works best with categorical features.  If you're using a scikit-learn based implementation of decision trees, numerical features are automatically handled.
*   **Data Transformation:**
    *   Scale numerical features (e.g., using standardization or normalization). (Less important for the pure ID3 algorithm but useful for other algorithms you might compare against).
*   **Discretization:** Convert continuous features into discrete or categorical features. The ID3 algorithm works with categorical data. Discretization can be done by binning continuous variables into predefined ranges (e.g., low, medium, high spending).

**Example:**

```python
import pandas as pd

# Load the dataset
df = pd.read_csv('OnlineRetail.csv', encoding='latin1')

# Data Cleaning (Simple example)
df = df.dropna(subset=['CustomerID'])  # Remove rows with missing CustomerID
df = df[df['Quantity'] > 0]  # Remove rows with negative quantities (returns)

# Feature Engineering (Simple example)
df['TotalPrice'] = df['Quantity'] * df['UnitPrice']
customer_data = df.groupby('CustomerID').agg({
    'TotalPrice': 'sum',
    'InvoiceNo': 'nunique', #Count unique invoices
    'InvoiceDate': 'max'
})
customer_data.rename(columns={'TotalPrice': 'MonetaryValue', 'InvoiceNo':'Frequency','InvoiceDate': 'LastPurchaseDate'}, inplace=True)

#Calculate Recency
now = pd.Timestamp('2011-12-10')
customer_data['LastPurchaseDate'] = pd.to_datetime(customer_data['LastPurchaseDate'])
customer_data['Recency'] = (now - customer_data['LastPurchaseDate']).dt.days

# Example of discretizing the "MonetaryValue" feature
customer_data['MonetaryValue_Category'] = pd.qcut(customer_data['MonetaryValue'], q=3, labels=['Low', 'Medium', 'High'])

print(customer_data.head())
```

## 3. Implementing the ID3 Algorithm

*   **Algorithm Steps:**
    1.  Start with the entire dataset as the root node.
    2.  Calculate the entropy of the dataset.
    3.  For each attribute:
        *   Calculate the information gain by splitting the dataset on that attribute.
    4.  Select the attribute with the highest information gain as the splitting attribute for the current node.
    5.  Create child nodes for each possible value of the splitting attribute.
    6.  Repeat steps 2-5 for each child node until:
        *   All data points in a node belong to the same class.
        *   There are no more attributes to split on.
        *   A predefined stopping criterion is met (e.g., maximum tree depth).

*   **Implementation Considerations:**
    *   The ID3 algorithm is prone to overfitting, especially with continuous attributes. Consider using techniques like pruning to mitigate this.
    *   The ID3 algorithm is biased towards attributes with many values.  The C4.5 algorithm addresses this by using Gain Ratio instead of Information Gain.
    *   Handling missing values is important.  Common approaches include ignoring the data points with missing values, imputing the missing values, or creating a separate branch for missing values.

**Simplified Python Example (Illustrative, not a complete ID3 implementation):**

```python
import numpy as np
import pandas as pd

# Simplified example data
data = {'Outlook': ['Sunny', 'Sunny', 'Overcast', 'Rainy', 'Rainy', 'Rainy', 'Overcast', 'Sunny', 'Sunny', 'Rainy', 'Sunny', 'Overcast', 'Overcast', 'Rainy'],
        'Temperature': ['Hot', 'Hot', 'Hot', 'Mild', 'Cool', 'Cool', 'Cool', 'Mild', 'Cool', 'Mild', 'Mild', 'Mild', 'Hot', 'Mild'],
        'Humidity': ['High', 'High', 'High', 'High', 'Normal', 'Normal', 'Normal', 'High', 'Normal', 'Normal', 'Normal', 'High', 'Normal', 'High'],
        'Wind': ['Weak', 'Strong', 'Weak', 'Weak', 'Weak', 'Strong', 'Strong', 'Weak', 'Weak', 'Weak', 'Strong', 'Strong', 'Weak', 'Strong'],
        'PlayTennis': ['No', 'No', 'Yes', 'Yes', 'Yes', 'No', 'Yes', 'No', 'Yes', 'Yes', 'Yes', 'Yes', 'Yes', 'No']}

df = pd.DataFrame(data)

def calculate_entropy(data):
  """Calculates the entropy of a dataset."""
  class_counts = data['PlayTennis'].value_counts()
  entropy = 0
  total_samples = len(data)
  for class_label in class_counts.index:
    probability = class_counts[class_label] / total_samples
    entropy -= probability * np.log2(probability)
  return entropy

def calculate_information_gain(data, attribute):
    """Calculates the information gain of an attribute."""
    entropy_S = calculate_entropy(data)
    attribute_values = data[attribute].unique()
    weighted_entropy = 0
    for value in attribute_values:
        subset = data[data[attribute] == value]
        weighted_entropy += (len(subset) / len(data)) * calculate_entropy(subset)
    return entropy_S - weighted_entropy

# Example Usage:
entropy_overall = calculate_entropy(df)
print(f"Overall Entropy: {entropy_overall}")

information_gain_outlook = calculate_information_gain(df, 'Outlook')
print(f"Information Gain (Outlook): {information_gain_outlook}")

information_gain_temperature = calculate_information_gain(df, 'Temperature')
print(f"Information Gain (Temperature): {information_gain_temperature}")

information_gain_humidity = calculate_information_gain(df, 'Humidity')
print(f"Information Gain (Humidity): {information_gain_humidity}")

information_gain_wind = calculate_information_gain(df, 'Wind')
print(f"Information Gain (Wind): {information_gain_wind}")


# The attribute with the highest information gain would be chosen for the root node.
```

**Note:** A full ID3 implementation would recursively build the tree structure based on these calculations.  Implementing a complete ID3 algorithm from scratch can be complex. For real-world applications, it's generally recommended to use existing libraries like scikit-learn (though scikit-learn doesn't offer a *pure* ID3 implementation - it uses optimized versions of CART which use Gini impurity).

## 4. Visualizing and Interpreting the Decision Tree Structure

*   **Visualization Tools:**
    *   Scikit-learn's `tree.plot_tree` function (for trees created using scikit-learn).
    *   Graphviz (for creating visual representations of tree structures in various formats).
    *   Custom visualization code using libraries like Matplotlib or Seaborn.

*   **Interpreting the Tree:**
    *   Each node in the tree represents a decision based on a specific attribute.
    *   The branches represent the possible values of the attribute.
    *   The leaf nodes represent the predicted class label (customer segment).
    *   By following the branches from the root node to a leaf node, you can understand the rules that are used to classify a customer into a particular segment.

**Example (using scikit-learn):**

```python
from sklearn.tree import DecisionTreeClassifier, plot_tree
from sklearn.model_selection import train_test_split
import matplotlib.pyplot as plt
from sklearn.preprocessing import LabelEncoder

# Assuming you have 'customer_data' DataFrame prepared as in previous examples
# and have a 'Segment' column to predict.  We'll create a dummy segment for this example.
np.random.seed(42) #For reproducibility
customer_data['Segment'] = np.random.choice(['A','B','C'], size=len(customer_data))

# Convert categorical features to numerical using Label Encoding (for scikit-learn)
le = LabelEncoder()
customer_data['MonetaryValue_Category_Encoded'] = le.fit_transform(customer_data['MonetaryValue_Category'])
X = customer_data[['Recency', 'Frequency', 'MonetaryValue_Category_Encoded']] # Numerical Features
y = customer_data['Segment'] # Target Variable

# Split data into training and testing sets
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)

# Create a Decision Tree classifier
dtc = DecisionTreeClassifier(random_state=42, criterion='gini', max_depth=3)  # Using Gini impurity as criterion (scikit-learn default)
dtc.fit(X_train, y_train)

# Visualize the Decision Tree
plt.figure(figsize=(15, 10))
plot_tree(dtc, feature_names=X.columns, class_names=dtc.classes_, filled=True)
plt.show()
```

## 5. Analyzing Feature Importance

*   **Methods for Determining Feature Importance:**
    *   **Gini Importance (or Mean Decrease Impurity):**  The default in scikit-learn's `DecisionTreeClassifier`.  It measures the total reduction in Gini impurity brought about by splits on each feature, averaged over all trees in the ensemble (if using a Random Forest).
    *   **Permutation Importance:**  Measures the decrease in model score when a single feature is randomly shuffled. This breaks the relationship between the feature and the target variable. Features that cause a large drop in score are considered more important.
    *   **Feature Usage Frequency:** Simply counting how often each feature is used in the tree's decision nodes.

*   **Interpreting Feature Importance:**
    *   A higher feature importance score indicates that the feature has a greater influence on the model's predictions.
    *   Feature importance can help you understand which factors are most important for customer segmentation.

**Example (using scikit-learn):**

```python
from sklearn.inspection import permutation_importance

# Feature Importance using Gini Importance
feature_importances = dtc.feature_importances_
print("Feature Importances (Gini):", feature_importances)

# Feature Importance using Permutation Importance
result = permutation_importance(dtc, X_test, y_test, n_repeats=10, random_state=42)
permutation_importances = result.importances_mean
print("Feature Importances (Permutation):", permutation_importances)


# Plotting Feature Importance
import matplotlib.pyplot as plt

feature_names = X.columns
sorted_idx = feature_importances.argsort() # Use gini importances for plotting in this example. You can adapt for permutation importances.

plt.figure(figsize=(10, 5))
plt.barh(feature_names[sorted_idx], feature_importances[sorted_idx])
plt.xlabel("Feature Importance")
plt.title("Feature Importance")
plt.show()
```

## 6. Limitations of the ID3 Algorithm

*   **Bias towards multi-valued attributes:** ID3 prefers attributes with a larger number of distinct values because they naturally tend to result in higher information gain.
*   **Handling Continuous Attributes:** ID3 inherently works with categorical attributes. Continuous attributes need to be discretized (binned) before being used.  The choice of binning can significantly impact the tree structure.
*   **Overfitting:** ID3 is prone to overfitting the training data, especially when the tree is allowed to grow too deep.
*   **No Pruning:** The basic ID3 algorithm doesn't include pruning mechanisms to avoid overfitting.
*   **Missing Values:**  Handling missing values requires special treatment, and ID3 doesn't have a built-in mechanism for dealing with them.

## Important Points to Remember:

*   The ID3 algorithm is a foundational concept for understanding decision trees, but it's often not used in its purest form in practice due to its limitations.
*   Data preparation (cleaning, feature engineering, discretization) is a crucial step for successfully applying the ID3 algorithm to the Online Retail dataset.
*   Feature importance can provide valuable insights into customer behavior and inform marketing strategies.
*   Consider the limitations of ID3 and explore alternative decision tree algorithms like C4.5, CART, or ensemble methods like Random Forests or Gradient Boosting for more robust and accurate models.
*   Scikit-learn's `DecisionTreeClassifier` provides an efficient and well-optimized implementation of the CART algorithm (using Gini impurity), but it doesn't offer a direct implementation of the ID3 algorithm.

## Practice Questions/Exercises:

1.  **Explain the difference between entropy and information gain.**
    *   **Answer:** Entropy measures the impurity or randomness in a dataset. Information gain measures the reduction in entropy achieved by splitting the dataset on a particular attribute. It represents how much information a feature provides about the class label.

2.  **Why is data preprocessing important when using the Online Retail dataset to build a decision tree?**
    *   **Answer:** Data preprocessing ensures data quality, handles missing values, transforms categorical features into numerical representations, and creates new features that might be more informative for the decision tree algorithm.  Specifically for ID3, continuous features need to be discretized.

3.  **What are the limitations of the ID3 algorithm?**
    *   **Answer:** Bias towards multi-valued attributes, inability to directly handle continuous attributes without discretization, proneness to overfitting, lack of built-in pruning, and no inherent mechanism for handling missing values.

4.  **How can feature importance be used to improve customer segmentation?**
    *   **Answer:** Feature importance helps identify the factors that are most influential in determining customer segments.  This allows you to focus marketing efforts on the most relevant factors and create more targeted campaigns.

5.  **Describe how you would discretize a continuous feature like "Total Spending" for use with the ID3 algorithm.**
    *   **Answer:** Common discretization methods include:
        *   **Equal-width binning:** Dividing the range of the feature into equal-width intervals.
        *   **Equal-frequency binning (Quantile binning):** Dividing the feature into intervals containing roughly the same number of data points.
        *   **Domain expertise:** Using domain knowledge to define meaningful ranges for the feature (e.g., low, medium, high spending).  You could use `pd.qcut` for equal-frequency binning or `pd.cut` for equal width binning.

6.  **Given the following dataset:**

    | Color  | Shape   | Fruit    | Class |
    | ------ | ------- | -------- | ----- |
    | Red    | Round   | Apple    | Yes   |
    | Red    | Round   | Apple    | Yes   |
    | Green  | Round   | Grape    | No    |
    | Yellow | Long    | Banana   | Yes   |
    | Yellow | Round   | Lemon    | No    |

    **Calculate the entropy of the dataset with respect to the "Class" attribute.**

    **Answer:**
    ```
    Total samples: 5
    Yes: 3
    No: 2
    p(Yes) = 3/5 = 0.6
    p(No) = 2/5 = 0.4

    Entropy(S) = - (0.6 * log2(0.6) + 0.4 * log2(0.4))
               = - (0.6 * -0.737 + 0.4 * -1.322)
               = - (-0.4422 - 0.5288)
               = 0.971 bits
    ```

7.  **Using the same dataset from Question 6, calculate the Information Gain for the attribute "Color".**

    **Answer:**

    First, calculate the entropy for each color:

    * **Red:**  2 Yes, 0 No. Entropy(Red) = - (1 * log2(1) + 0 * log2(0)) = 0
    * **Green:** 0 Yes, 1 No. Entropy(Green) = 0
    * **Yellow:** 1 Yes, 1 No. Entropy(Yellow) = - (0.5 * log2(0.5) + 0.5 * log2(0.5)) = 1

    Now, calculate the Information Gain:

    Gain(S, Color) = Entropy(S) - Σ (|Sv| / |S|) * Entropy(Sv)
                    = 0.971 - [(2/5)*0 + (1/5)*0 + (2/5)*1]
                    = 0.971 - 0.4
                    = 0.571 bits
