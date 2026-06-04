---
title: "working with data sets – data cleaning and pre-processing functions"
subject: "INTRODUCTION TO MACHINE LEARNING"
module: "Module 3: Introduction to python for ML "
branch: "Electrical and Electronics Engineering"
semester: 5
topicId: "68a200862b85456187f36436"
status: "completed"
scrapedAt: "2026-05-23T16:22:26.898Z"
---
# Introduction to Machine Learning - Module 3: Introduction to Python for ML

## Topic: Working with Datasets – Data Cleaning and Pre-processing Functions

This module focuses on essential data manipulation and preparation techniques using Python, a crucial step before applying any machine learning algorithm. We will explore how to handle common data issues and transform raw data into a format suitable for ML models.

---

### Learning Outcomes:

*   Understand the fundamental concepts of data cleaning and pre-processing in the context of machine learning.
*   Identify and address common data quality issues such as missing values, outliers, and inconsistent data.
*   Apply various Python libraries, primarily Pandas and NumPy, for effective data cleaning and pre-processing.
*   Perform data transformations including scaling, encoding, and feature engineering.
*   Prepare datasets for input into machine learning algorithms.

---

### Course Outcomes Addressed:

*   **CO3:** Apply essential Python libraries (NumPy, Pandas, Matplotlib) to clean, pre-process, and visualize data sets, preparing data for machine learning applications. (Knowledge Level: K3)

---

### Key Concepts and Definitions:

*   **Dataset:** A collection of related data points, typically organized in a tabular format with rows representing observations and columns representing features (variables).
*   **Data Cleaning:** The process of detecting and correcting (or removing) corrupt or inaccurate records from a dataset. This involves identifying and handling errors, inconsistencies, and inaccuracies.
*   **Data Pre-processing:** The process of transforming raw data into a clean and understandable format that is suitable for machine learning algorithms. It often involves cleaning, transformation, and feature engineering.
*   **Features (Variables):** The attributes or characteristics of the data that are used as input for machine learning models.
*   **Observations (Samples/Instances):** The individual data points or records in a dataset.
*   **Missing Values:** Data points that are absent for a particular feature or observation.
*   **Outliers:** Data points that significantly deviate from other observations in the dataset.
*   **Data Transformation:** Modifying the format or structure of data to make it more suitable for analysis or modeling.
*   **Feature Scaling:** A data pre-processing step that normalizes the range of independent variables or features of data.
*   **Encoding:** The process of converting categorical data into numerical format that can be understood by machine learning algorithms.
*   **Feature Engineering:** The process of using domain knowledge to create new features from existing ones to improve model performance.

---

### Libraries for Data Manipulation:

The primary libraries we will use for data cleaning and pre-processing are:

*   **Pandas:** A powerful and flexible open-source library for data manipulation and analysis. It provides data structures like `Series` (1D labeled array) and `DataFrame` (2D labeled data structure with columns of potentially different types).
    *   *Referenced in:* Python Data Science Handbook, Introduction to Machine Learning with Python.
*   **NumPy:** The fundamental package for scientific computing in Python. It provides support for arrays, matrices, and a large collection of mathematical functions to operate on these arrays.
    *   *Referenced in:* Mathematics for Machine Learning, Python Data Science Handbook.

---

### 1. Handling Missing Data

Missing data is a common problem in real-world datasets. It can arise due to various reasons like data entry errors, sensor malfunctions, or privacy concerns.

#### 1.1. Identifying Missing Data

Pandas DataFrames offer convenient methods to detect missing values:

*   `isnull()`: Returns a boolean DataFrame of the same shape, where `True` indicates a missing value (NaN - Not a Number).
*   `notnull()`: Returns a boolean DataFrame where `False` indicates a missing value.
*   `sum()`: Can be chained with `isnull()` to count the number of missing values per column.

**Example (using Pandas):**

```python
import pandas as pd
import numpy as np

# Create a sample DataFrame with missing values
data = {'col1': [1, 2, np.nan, 4, 5],
        'col2': ['A', np.nan, 'C', 'D', 'E'],
        'col3': [10.5, 11.2, 12.0, np.nan, 14.5]}
df = pd.DataFrame(data)

print("Original DataFrame:")
print(df)

print("\nChecking for null values:")
print(df.isnull())

print("\nCounting missing values per column:")
print(df.isnull().sum())
```

**Output:**

```
Original DataFrame:
   col1 col2  col3
0   1.0    A  10.5
1   2.0  NaN  11.2
2   NaN    C  12.0
3   4.0    D   NaN
4   5.0    E  14.5

Checking for null values:
    col1   col2   col3
0  False  False  False
1  False   True  False
2   True  False  False
3  False  False   True
4  False  False  False

Counting missing values per column:
col1    1
col2    1
col3    1
dtype: int64
```

#### 1.2. Strategies for Handling Missing Data

*   **Deletion:**
    *   **Row Deletion (Listwise Deletion):** Remove rows that contain any missing values.
        *   *Pros:* Simple to implement.
        *   *Cons:* Can lead to significant data loss if many rows have missing values, potentially biasing the dataset.
        *   *Pandas Function:* `df.dropna()`
    *   **Column Deletion:** Remove columns that have a high percentage of missing values.
        *   *Pros:* Useful when a feature is mostly missing and unlikely to be informative.
        *   *Cons:* Loss of potentially valuable features.
        *   *Pandas Function:* `df.drop(columns=['column_name'])`

    **Example (Row Deletion):**

    ```python
    df_dropped_rows = df.dropna()
    print("\nDataFrame after dropping rows with missing values:")
    print(df_dropped_rows)
    ```

*   **Imputation:** Replacing missing values with estimated values.

    *   **Mean Imputation:** Replace missing values with the mean of the column. Suitable for numerical data with no significant outliers.
        *   *Pandas Function:* `df['column_name'].fillna(df['column_name'].mean())`
    *   **Median Imputation:** Replace missing values with the median of the column. More robust to outliers than mean imputation.
        *   *Pandas Function:* `df['column_name'].fillna(df['column_name'].median())`
    *   **Mode Imputation:** Replace missing values with the mode (most frequent value) of the column. Suitable for categorical data.
        *   *Pandas Function:* `df['column_name'].fillna(df['column_name'].mode()[0])`
    *   **Forward Fill (`ffill`) / Backward Fill (`bfill`):** Fill missing values with the previous (`ffill`) or next (`bfill`) valid observation. Useful for time-series data.
        *   *Pandas Functions:* `df['column_name'].fillna(method='ffill')` or `df['column_name'].fillna(method='bfill')`
    *   **Imputation using a constant value:** Replacing missing values with a specific number (e.g., 0, -1) or a string (e.g., 'Unknown').
        *   *Pandas Function:* `df['column_name'].fillna(0)` or `df['column_name'].fillna('Unknown')`
    *   **Model-based Imputation:** Using machine learning models (e.g., k-NN, regression) to predict missing values based on other features. This is more advanced but can be more accurate.
        *   *Libraries:* `sklearn.impute.KNNImputer`, `sklearn.impute.IterativeImputer` (from `fancyimpute` or `scikit-learn` version 0.22+)

    **Example (Imputation):**

    ```python
    # Impute missing values in 'col1' with the mean
    df['col1'].fillna(df['col1'].mean(), inplace=True)

    # Impute missing values in 'col2' with the mode
    df['col2'].fillna(df['col2'].mode()[0], inplace=True)

    # Impute missing values in 'col3' with the median
    df['col3'].fillna(df['col3'].median(), inplace=True)

    print("\nDataFrame after imputation:")
    print(df)
    print("\nMissing values after imputation:")
    print(df.isnull().sum())
    ```

    **Important Note:** Using `inplace=True` modifies the DataFrame directly. It's often good practice to create a copy of the DataFrame before performing operations like imputation to preserve the original data.

---

### 2. Handling Outliers

Outliers can significantly impact the performance of machine learning models, especially those sensitive to variance like linear regression or SVM.

#### 2.1. Identifying Outliers

*   **Visualization:**
    *   **Box Plots:** Visually identify data points that fall outside the whiskers of the plot.
    *   **Scatter Plots:** Visualize relationships between variables and spot unusual points.
    *   **Histograms:** Observe the distribution and identify values far from the central tendency.
*   **Statistical Methods:**
    *   **Z-score:** Measures how many standard deviations a data point is from the mean. A common threshold is `|Z| > 3`.
        *   *Formula:* $Z = \frac{x - \mu}{\sigma}$
        *   *NumPy Function:* `scipy.stats.zscore`
    *   **Interquartile Range (IQR):** Identify values that fall below $Q1 - 1.5 \times IQR$ or above $Q3 + 1.5 \times IQR$, where $Q1$ is the 25th percentile, $Q3$ is the 75th percentile, and $IQR = Q3 - Q1$. This method is less sensitive to extreme values than the Z-score.

**Example (using IQR):**

```python
import matplotlib.pyplot as plt

# Assuming df is already loaded and has numerical columns

# Calculate IQR for 'col1'
Q1 = df['col1'].quantile(0.25)
Q3 = df['col1'].quantile(0.75)
IQR = Q3 - Q1

lower_bound = Q1 - 1.5 * IQR
upper_bound = Q3 + 1.5 * IQR

print(f"\nIQR for col1: {IQR}")
print(f"Lower bound for col1: {lower_bound}")
print(f"Upper bound for col1: {upper_bound}")

# Identify outliers
outliers = df[(df['col1'] < lower_bound) | (df['col1'] > upper_bound)]
print("\nOutliers in col1:")
print(outliers)

# Visualize with a box plot
plt.figure(figsize=(8, 4))
df.boxplot(column=['col1'])
plt.title('Box Plot of Col1')
plt.show()
```

#### 2.2. Strategies for Handling Outliers

*   **Deletion:** Remove rows containing outliers. Similar pros and cons to deleting missing values.
*   **Transformation:** Apply mathematical transformations like log or square root to reduce the impact of extreme values.
*   **Capping (Winsorizing):** Replace outlier values with the nearest "acceptable" value (e.g., the upper/lower bound determined by IQR).
    *   *Pandas Function:* `df['column'].clip(lower=lower_bound, upper=upper_bound)`

    **Example (Capping):**

    ```python
    df['col1_capped'] = df['col1'].clip(lower=lower_bound, upper=upper_bound)
    print("\nDataFrame with col1 capped:")
    print(df)
    ```
*   **Imputation:** Treat outliers as missing values and impute them.
*   **Using Robust Models:** Employ machine learning algorithms that are less sensitive to outliers, such as robust regression or tree-based models (though outliers can still affect tree splits).

---

### 3. Data Transformation

Raw data often needs to be transformed to meet the assumptions of certain machine learning algorithms or to improve their performance.

#### 3.1. Feature Scaling

Many ML algorithms (e.g., gradient descent-based algorithms like Logistic Regression, SVM, neural networks) perform better when features are on a similar scale. This prevents features with larger ranges from dominating the learning process.

*   **Standardization (Z-score scaling):** Rescales features to have zero mean and unit variance.
    *   *Formula:* $x_{scaled} = \frac{x - \mu}{\sigma}$
    *   *Use Case:* When data follows a Gaussian distribution or when the algorithm assumes zero mean and unit variance.
    *   *Scikit-learn Class:* `sklearn.preprocessing.StandardScaler`

    **Example:**

    ```python
    from sklearn.preprocessing import StandardScaler

    scaler = StandardScaler()
    # Fit the scaler to the data and transform it
    # We select only numerical columns for scaling
    numerical_cols = df.select_dtypes(include=np.number).columns
    df[numerical_cols] = scaler.fit_transform(df[numerical_cols])

    print("\nDataFrame after Standardization:")
    print(df)
    ```

*   **Min-Max Scaling (Normalization):** Rescales features to a fixed range, usually between 0 and 1.
    *   *Formula:* $x_{scaled} = \frac{x - x_{min}}{x_{max} - x_{min}}$
    *   *Use Case:* When the algorithm requires data within a specific range, or when the data does not follow a Gaussian distribution.
    *   *Scikit-learn Class:* `sklearn.preprocessing.MinMaxScaler`

    **Example:**

    ```python
    from sklearn.preprocessing import MinMaxScaler

    scaler_minmax = MinMaxScaler()
    # Fit and transform again (assuming df is reset or using a copy)
    # For demonstration, let's use a fresh copy
    data_fresh = {'col1': [1, 2, 5, 4, 5],
                  'col2': ['A', 'B', 'C', 'D', 'E'],
                  'col3': [10.5, 11.2, 12.0, 13.0, 14.5]}
    df_fresh = pd.DataFrame(data_fresh)
    numerical_cols_fresh = df_fresh.select_dtypes(include=np.number).columns

    df_fresh[numerical_cols_fresh] = scaler_minmax.fit_transform(df_fresh[numerical_cols_fresh])

    print("\nDataFrame after Min-Max Scaling:")
    print(df_fresh)
    ```

**Important Point:** Fit scalers *only* on the training data and then use the *same* fitted scaler to transform both the training and testing data. This prevents data leakage from the test set into the training process.

#### 3.2. Encoding Categorical Variables

Machine learning algorithms typically require numerical input. Categorical variables (e.g., 'Red', 'Green', 'Blue') need to be converted into numerical representations.

*   **One-Hot Encoding:** Creates new binary columns for each unique category. If a row belongs to a category, the corresponding new column gets a 1, and all other new columns get a 0.
    *   *Use Case:* When there's no inherent order between categories (nominal data).
    *   *Pandas Function:* `pd.get_dummies()`
    *   *Scikit-learn Class:* `sklearn.preprocessing.OneHotEncoder`

    **Example (using `pd.get_dummies`):**

    ```python
    # Assuming df has a 'col2' with categorical data
    # Let's re-create df with some categorical data for clarity
    data_cat = {'col1': [1, 2, 3, 4, 5],
                'col2': ['Red', 'Blue', 'Green', 'Red', 'Blue'],
                'col3': [10.5, 11.2, 12.0, 13.0, 14.5]}
    df_cat = pd.DataFrame(data_cat)

    print("\nOriginal DataFrame with categorical data:")
    print(df_cat)

    df_encoded = pd.get_dummies(df_cat, columns=['col2'], prefix='color')
    print("\nDataFrame after One-Hot Encoding:")
    print(df_encoded)
    ```

*   **Label Encoding:** Assigns a unique integer to each category.
    *   *Use Case:* When there's an ordinal relationship between categories (e.g., 'Small', 'Medium', 'Large').
    *   *Scikit-learn Class:* `sklearn.preprocessing.LabelEncoder`

    **Example:**

    ```python
    from sklearn.preprocessing import LabelEncoder

    le = LabelEncoder()
    # Fit and transform 'col2' assuming it's ordinal (e.g., 'Low', 'Medium', 'High')
    # For this example, let's use a new column 'col4'
    data_ord = {'col4': ['Low', 'Medium', 'High', 'Medium', 'Low']}
    df_ord = pd.DataFrame(data_ord)

    df_ord['col4_encoded'] = le.fit_transform(df_ord['col4'])
    print("\nDataFrame after Label Encoding:")
    print(df_ord)
    print(f"Mapping: {list(le.classes_)} -> {list(le.transform(le.classes_))}")
    ```

**Important Consideration:** For nominal categorical features, one-hot encoding is generally preferred over label encoding to avoid introducing an artificial ordinal relationship.

#### 3.3. Handling Text Data

Text data often needs to be converted into numerical features. Common techniques include:

*   **Bag-of-Words (BoW):** Represents text documents as a multiset of its words, disregarding grammar and word order but keeping multiplicity.
*   **TF-IDF (Term Frequency-Inverse Document Frequency):** A numerical statistic that is intended to reflect how important a word is to a document in a collection or corpus.
    *   *Libraries:* `sklearn.feature_extraction.text.CountVectorizer` (for BoW) and `sklearn.feature_extraction.text.TfidfVectorizer` (for TF-IDF).

#### 3.4. Discretization (Binning)

Converting continuous numerical data into discrete intervals (bins).

*   *Use Case:* For algorithms that work well with categorical data, or to reduce the impact of outliers.
*   *Pandas Function:* `pd.cut()` (for equal-width bins) or `pd.qcut()` (for equal-frequency bins).

    **Example:**

    ```python
    # Binning 'col1' from df_cat into 3 bins
    df_cat['col1_binned'] = pd.cut(df_cat['col1'], bins=3, labels=['Low', 'Medium', 'High'])
    print("\nDataFrame with binned numerical data:")
    print(df_cat)
    ```

---

### 4. Feature Engineering

Creating new features from existing ones to improve model performance or provide more relevant information. This is often highly domain-specific.

*   **Creating Interaction Terms:** Multiplying or combining existing features.
    *   *Example:* If `feature_A` and `feature_B` are important, `feature_A * feature_B` might be a useful new feature.
*   **Polynomial Features:** Creating polynomial combinations of features (e.g., $x^2$, $x^3$).
    *   *Scikit-learn Class:* `sklearn.preprocessing.PolynomialFeatures`
*   **Date and Time Features:** Extracting components like day of the week, month, year, hour from date/time columns.
*   **Aggregation:** Creating summary statistics (mean, sum, count) for groups of data.

**Example (Interaction Term):**

```python
# Assuming df_encoded has 'feature_X' and 'feature_Y'
# For demonstration:
df_encoded['feature_X'] = [10, 20, 30, 40, 50]
df_encoded['feature_Y'] = [2, 3, 4, 5, 6]

df_encoded['interaction_XY'] = df_encoded['feature_X'] * df_encoded['feature_Y']
print("\nDataFrame with interaction feature:")
print(df_encoded)
```

---

### 5. Data Splitting

Before training a model, it's crucial to split the dataset into training and testing sets.

*   **Training Set:** Used to train the machine learning model.
*   **Testing Set:** Used to evaluate the performance of the trained model on unseen data.
*   **Validation Set (Optional):** Used for hyperparameter tuning.

*   *Scikit-learn Function:* `sklearn.model_selection.train_test_split`

    **Example:**

    ```python
    from sklearn.model_selection import train_test_split

    # Assume 'target_variable' is the column we want to predict
    # And 'features' are all other columns
    # For this example, let's use df_encoded and create a dummy target
    df_encoded['target'] = [0, 1, 0, 1, 0]

    X = df_encoded.drop('target', axis=1)
    y = df_encoded['target']

    X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.3, random_state=42)

    print(f"\nShape of training features (X_train): {X_train.shape}")
    print(f"Shape of testing features (X_test): {X_test.shape}")
    print(f"Shape of training target (y_train): {y_train.shape}")
    print(f"Shape of testing target (y_test): {y_test.shape}")
    ```

    *   `test_size`: The proportion of the dataset to include in the test split.
    *   `random_state`: Ensures reproducibility of the split.

---

### Important Points to Remember:

*   **Data Quality is Paramount:** Clean and well-pre-processed data is fundamental for building accurate and reliable ML models.
*   **Understand Your Data:** Always explore and visualize your data to identify issues and choose appropriate cleaning/pre-processing strategies.
*   **Avoid Data Leakage:** Be careful not to use information from the test set (or validation set) during training, especially when scaling or encoding. Fit transformers on the training data *only*.
*   **Iterative Process:** Data cleaning and pre-processing is often an iterative process. You might need to revisit these steps as you build and evaluate your models.
*   **Domain Knowledge:** Incorporate domain knowledge to guide feature engineering and data transformation decisions.
*   **Pandas `inplace=True`:** Use with caution. It's often safer to work on a copy of your DataFrame.

---

### Practice Questions:

1.  **Missing Values:** Given a Pandas DataFrame `df_missing` with a column named 'Age' that has missing values, how would you fill these missing values with the median age of the column?
2.  **Outlier Detection:** For a numerical column 'Salary' in a DataFrame, describe two methods to identify potential outliers and explain when you might prefer one over the other.
3.  **Feature Scaling:** When would you use Standardization (e.g., `StandardScaler`) versus Min-Max Scaling (e.g., `MinMaxScaler`)?
4.  **Categorical Encoding:** You have a dataset with a 'Color' column containing 'Red', 'Green', 'Blue'. How would you represent this column numerically for a machine learning model that requires numerical input, assuming there is no inherent order between the colors?
5.  **Data Splitting:** Why is it important to split your data into training and testing sets before building a machine learning model? What is the purpose of the `random_state` parameter in `train_test_split`?

---

### Answers to Practice Questions:

1.  **Missing Values:**
    ```python
    median_age = df_missing['Age'].median()
    df_missing['Age'].fillna(median_age, inplace=True)
    ```
    Alternatively, to avoid modifying the original DataFrame directly:
    ```python
    df_filled = df_missing.copy()
    median_age = df_filled['Age'].median()
    df_filled['Age'].fillna(median_age, inplace=True)
    ```

2.  **Outlier Detection:**
    *   **Z-score:** Calculate the Z-score for each data point. Points with a Z-score greater than a certain threshold (commonly 2 or 3) are considered outliers. This method assumes the data is normally distributed.
    *   **IQR (Interquartile Range):** Calculate $Q1$, $Q3$, and $IQR = Q3 - Q1$. Outliers are values below $Q1 - 1.5 \times IQR$ or above $Q3 + 1.5 \times IQR$. This method is more robust to extreme values and doesn't assume a specific distribution.
    *   **Preference:** IQR is generally preferred when the data might be skewed or contain extreme values that could heavily influence the mean and standard deviation used in the Z-score calculation.

3.  **Feature Scaling:**
    *   **Standardization (`StandardScaler`):** Use when your data follows a Gaussian (normal) distribution or when the algorithm assumes features are centered around zero with unit variance (e.g., algorithms using gradient descent, SVM, PCA).
    *   **Min-Max Scaling (`MinMaxScaler`):** Use when your data does not follow a Gaussian distribution or when the algorithm requires features to be within a specific range (e.g., neural networks that use activation functions sensitive to input magnitude, image processing where pixel values are normalized to [0, 1]).

4.  **Categorical Encoding:**
    One-Hot Encoding is the appropriate method here, as there's no inherent order. Using `pd.get_dummies`:
    ```python
    df_encoded = pd.get_dummies(df_missing, columns=['Color'], prefix='color')
    ```
    This would create columns like `color_Red`, `color_Green`, `color_Blue`. For a 'Red' row, `color_Red` would be 1 and others 0.

5.  **Data Splitting:**
    *   **Importance:** Splitting data ensures that we can evaluate how well our trained model generalizes to new, unseen data. If we evaluate on the same data used for training, the model might appear to perform better than it actually would in a real-world scenario because it has already learned the training data's patterns, including noise.
    *   **`random_state`:** This parameter controls the shuffling applied to the data before splitting. Setting a fixed `random_state` (e.g., `random_state=42`) ensures that the split is the same every time you run the code, making your experiments reproducible. Without it, the data would be split differently each time, leading to varying evaluation results.

---

This concludes Module 3's topic on data cleaning and pre-processing functions in Python for Machine Learning. Mastering these techniques is a critical step towards successful model development.
