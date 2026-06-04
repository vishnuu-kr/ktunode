---
title: "Load and preprocess the Mall Customers dataset."
subject: "MACHINE LEARNING LAB"
module: "Module 16: Implement and compare hierarchical (agglomerative) and partitional (K"
branch: "Computer Science and Engineering"
semester: 5
topicId: "684162770fc9aa1fdbc8b998"
status: "completed"
scrapedAt: "2026-05-20T16:48:01.084Z"
---
# MACHINE LEARNING LAB - Module 16: Load and Preprocess Mall Customers Dataset

**Topic:** Load and preprocess the Mall Customers dataset.

**Module Goal:** Implement and compare hierarchical (agglomerative) and partitional (K-means) clustering algorithms.  This topic focuses on the preparatory step of loading and cleaning data.

**Learning Outcomes:**

*   Understand the structure of the Mall Customers dataset.
*   Load the dataset into a suitable data structure (e.g., pandas DataFrame).
*   Inspect the dataset for missing values and handle them appropriately.
*   Encode categorical features (if any) into numerical format.
*   Scale numerical features to improve clustering performance.

## 1. Understanding the Mall Customers Dataset

*   **Description:** The Mall Customers dataset typically contains information about customers of a shopping mall. This dataset is often used for customer segmentation.
*   **Typical Columns:**
    *   `CustomerID`: Unique identifier for each customer.
    *   `Gender`:  Customer's gender (categorical).
    *   `Age`: Customer's age (numerical).
    *   `Annual Income (k$)`: Customer's annual income in thousands of dollars (numerical).
    *   `Spending Score (1-100)`: A score assigned to the customer based on their spending behavior (numerical).
*   **Purpose:** To segment customers into distinct groups based on their characteristics.  This helps in targeted marketing, improved customer relationship management, and better resource allocation.
*   **Data Source:**  The dataset is often available on platforms like Kaggle or in common machine learning datasets.

## 2. Loading the Dataset

*   **Libraries:** The primary library used for loading and manipulating the dataset is `pandas`. You may also need `numpy` for numerical operations.

*   **Steps:**
    1.  **Import Libraries:**

        ```python
        import pandas as pd
        import numpy as np
        ```

    2.  **Load the Dataset:**  Use `pd.read_csv()` to load the CSV file into a pandas DataFrame.  Replace `"Mall_Customers.csv"` with the actual file path if necessary.

        ```python
        df = pd.read_csv("Mall_Customers.csv")
        ```

    3.  **Initial Inspection:**
        *   `df.head()`: Displays the first few rows of the DataFrame.
        *   `df.tail()`: Displays the last few rows.
        *   `df.info()`: Provides information about the data types and the number of non-null values in each column.
        *   `df.describe()`: Shows descriptive statistics (mean, standard deviation, min, max, etc.) for numerical columns.
        *   `df.shape`:  Returns the number of rows and columns.

        ```python
        print(df.head())
        print(df.info())
        print(df.describe())
        print(df.shape)
        ```

## 3. Inspecting and Handling Missing Values

*   **Importance:** Missing values can significantly affect the performance of clustering algorithms.
*   **Detection:**
    *   `df.isnull().sum()`: Returns the number of missing values in each column.
    *   `df.isna().sum()`:  Equivalent to `isnull().sum()`.
    *   `df.isnull().sum().sum()`: Returns the total number of missing values in the entire DataFrame.
*   **Handling Methods:**
    *   **Deletion:**
        *   `df.dropna()`: Removes rows containing any missing values. Use with caution as it can lead to significant data loss.
        *   `df.dropna(subset=['ColumnName'])`:  Removes rows with missing values in a specific column.
    *   **Imputation:**  Replacing missing values with estimated values.
        *   **Mean/Median Imputation (for Numerical Data):**
            ```python
            mean_age = df['Age'].mean()
            df['Age'].fillna(mean_age, inplace=True) # Replace missing values with the mean age

            median_income = df['Annual Income (k$)'].median()
            df['Annual Income (k$)'].fillna(median_income, inplace=True) # Replace with median. More robust to outliers.
            ```
        *   **Mode Imputation (for Categorical Data):**
            ```python
            mode_gender = df['Gender'].mode()[0]  # [0] because mode() can return multiple values
            df['Gender'].fillna(mode_gender, inplace=True) # Replace missing values with the most frequent gender
            ```
    *   **Considerations:**
        *   The choice of method depends on the nature of the missing data and the column itself.
        *   If a column has a large number of missing values, imputation might introduce significant bias.  Consider dropping the column in such cases.
        *   `inplace=True` modifies the DataFrame directly. Otherwise, you need to assign the result back to the DataFrame (e.g., `df = df.fillna(...)`).

## 4. Encoding Categorical Features

*   **Why Encoding?** Many machine learning algorithms (including K-means and agglomerative clustering) require numerical input. Categorical features need to be converted into a numerical format.
*   **Common Techniques:**
    *   **One-Hot Encoding:** Creates a new binary column for each category in the categorical feature. Suitable when there is no ordinal relationship between categories.
        ```python
        df = pd.get_dummies(df, columns=['Gender'], drop_first=True) # drop_first avoids multicollinearity
        ```
        *   `drop_first=True` is a crucial parameter. It removes the first category's column. If you don't do this, you can run into multicollinearity issues, which can throw off your models. For example, if you only had male and female and didn't use `drop_first=True`, you would have two columns. If one column is zero, the other *has* to be one. One of them is therefore redundant.
    *   **Label Encoding:** Assigns a unique integer to each category. Suitable when there is an ordinal relationship (e.g., "Low", "Medium", "High").  The Mall Customers dataset typically uses Gender, which doesn't usually have any ordering so one-hot encoding is better.  But if you *did* want to use label encoding:
        ```python
        from sklearn.preprocessing import LabelEncoder

        le = LabelEncoder()
        df['Gender'] = le.fit_transform(df['Gender'])  # Male: 1, Female: 0 (or vice versa - check mapping with le.classes_)
        ```

## 5. Scaling Numerical Features

*   **Why Scaling?** Clustering algorithms (especially K-means and agglomerative clustering with distance metrics like Euclidean distance) are sensitive to the scale of the features. Features with larger values can dominate the distance calculations.
*   **Common Techniques:**
    *   **StandardScaler:** Standardizes features by removing the mean and scaling to unit variance (mean = 0, standard deviation = 1).
        ```python
        from sklearn.preprocessing import StandardScaler

        scaler = StandardScaler()
        numerical_cols = ['Age', 'Annual Income (k$)', 'Spending Score (1-100)'] # List of numerical columns to scale
        df[numerical_cols] = scaler.fit_transform(df[numerical_cols])
        ```
    *   **MinMaxScaler:** Scales features to a specified range (typically [0, 1]).
        ```python
        from sklearn.preprocessing import MinMaxScaler

        min_max_scaler = MinMaxScaler()
        numerical_cols = ['Age', 'Annual Income (k$)', 'Spending Score (1-100)']
        df[numerical_cols] = min_max_scaler.fit_transform(df[numerical_cols])
        ```
    *   **RobustScaler:** Uses median and interquartile range (IQR) to scale features. More robust to outliers than StandardScaler.  It is particularly useful if your dataset has a lot of outliers.

        ```python
        from sklearn.preprocessing import RobustScaler

        robust_scaler = RobustScaler()
        numerical_cols = ['Age', 'Annual Income (k$)', 'Spending Score (1-100)']
        df[numerical_cols] = robust_scaler.fit_transform(df[numerical_cols])
        ```

*   **Important:**
    *   `fit_transform()` is used when fitting the scaler to the training data.
    *   If you have separate training and testing datasets, `fit()` should be called only on the training data, and `transform()` should be used on both training and testing data using the fitted scaler.  This avoids data leakage.
    *   When scaling, be aware of the `CustomerID` column. It's a unique identifier and doesn't contribute to clustering in most cases. It's usually dropped: `df = df.drop('CustomerID', axis=1)`

## 6. Putting it All Together: Example Code

```python
import pandas as pd
from sklearn.preprocessing import StandardScaler
from sklearn.preprocessing import LabelEncoder # Example of label encoding
from sklearn.preprocessing import OneHotEncoder # Example of one hot encoding
import numpy as np

# 1. Load the dataset
df = pd.read_csv("Mall_Customers.csv")

# 2. Inspect the data
print("Original Data:")
print(df.head())
print(df.info())
print(df.describe())

# 3. Handle Missing Values (if any) - Check for null values first
print("\nMissing Values:")
print(df.isnull().sum())  # Assuming there are no missing values in this dataset

# 4. Encode Categorical Feature ('Gender')
# Using One-Hot Encoding - More appropriate for this dataset
df = df.drop('CustomerID', axis=1) # Remove CustomerID as it's not useful for clustering
df = pd.get_dummies(df, columns=['Gender'], drop_first=True) # Convert 'Gender' to numerical using one-hot encoding.
# Alternatively, can use label encoding, but OneHotEncoder is usually better for this data
# le = LabelEncoder()
# df['Gender'] = le.fit_transform(df['Gender'])

print("\nData after Encoding:")
print(df.head())

# 5. Scale Numerical Features
numerical_cols = ['Age', 'Annual Income (k$)', 'Spending Score (1-100)']
scaler = StandardScaler()
df[numerical_cols] = scaler.fit_transform(df[numerical_cols])

print("\nData after Scaling:")
print(df.head())

# Now the data is ready for clustering algorithms (K-means, Hierarchical)
```

## 7. Practice Questions/Exercises

1.  **Question:** What is the purpose of scaling numerical features before applying clustering algorithms?
    *   **Answer:** To prevent features with larger values from dominating the distance calculations and to ensure that all features contribute equally to the clustering process.

2.  **Question:** You have a column named "Education Level" with categories "High School", "Bachelor's", "Master's", and "PhD". Which encoding technique (One-Hot or Label) would be more appropriate and why?
    *   **Answer:** Label encoding would be more appropriate because there is an ordinal relationship between the categories (PhD > Master's > Bachelor's > High School). However, care must be taken as the difference between the numerical representation of the categories may not accurately represent the true relationship between categories. You could encode the levels as 1, 2, 3, and 4 respectively.

3.  **Question:**  The `Annual Income (k$)` column has missing values.  How would you impute these missing values?  Provide code.
    *   **Answer:** You could impute with the mean or median. Median is preferred as it is more robust to outliers.
        ```python
        median_income = df['Annual Income (k$)'].median()
        df['Annual Income (k$)'].fillna(median_income, inplace=True)
        ```

4.  **Question:** What does the `drop_first=True` argument in `pd.get_dummies()` do, and why is it important?
    *   **Answer:** `drop_first=True` removes the first category's column when using One-Hot Encoding. This avoids multicollinearity (high correlation between independent variables), which can lead to unstable or unreliable model results.

5.  **Exercise:** Load the "Mall_Customers.csv" dataset. Check for missing values. If there are any missing values in any of the columns, fill them with the median of the respective column. Encode the 'Gender' column using one-hot encoding. Finally, scale the 'Age', 'Annual Income (k$)', and 'Spending Score (1-100)' columns using the StandardScaler. Print the first 5 rows of the preprocessed DataFrame.

## 8. Important Points to Remember

*   Always explore your data first using `head()`, `info()`, and `describe()`.
*   Handle missing values carefully to avoid introducing bias.
*   Choose the appropriate encoding technique for categorical features based on the nature of the data. One-Hot encoding is generally safer unless there's a clear ordinal relationship.
*   Scaling is crucial for distance-based clustering algorithms.
*   Document your preprocessing steps thoroughly for reproducibility.
*   Always remove/ignore irrelevant features like `CustomerID` which will not contribute to clustering.

These notes provide a comprehensive overview of loading and preprocessing the Mall Customers dataset, a critical first step before implementing and comparing clustering algorithms. By understanding these concepts and practicing with the examples, you will be well-prepared for the subsequent steps in the module.
