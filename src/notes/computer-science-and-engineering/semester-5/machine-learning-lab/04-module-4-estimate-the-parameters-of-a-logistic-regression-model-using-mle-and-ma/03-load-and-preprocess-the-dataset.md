---
title: "Load and preprocess the dataset."
subject: "MACHINE LEARNING LAB"
module: "Module 4: Estimate the parameters of a logistic regression model using MLE and MAP on the Breast Cancer Wisconsin dataset. Compare the results and discuss the effects of regularization."
branch: "Computer Science and Engineering"
semester: 5
topicId: "684162770fc9aa1fdbc8b944"
status: "completed"
scrapedAt: "2026-05-20T16:47:08.632Z"
---
# MACHINE LEARNING LAB - Module 4: Load and Preprocess the Breast Cancer Wisconsin Dataset

**Topic:** Load and preprocess the dataset.

**Overall Goal:** Estimate the parameters of a logistic regression model using Maximum Likelihood Estimation (MLE) and Maximum a Posteriori (MAP) on the Breast Cancer Wisconsin dataset. Compare the results and discuss the effects of regularization.  This topic focuses specifically on the initial step: loading and preparing the data for subsequent modeling.

**1. Learning Outcomes:**

*   Understand the Breast Cancer Wisconsin dataset and its features.
*   Learn how to load the dataset using common Python libraries (e.g., scikit-learn, pandas).
*   Preprocess the dataset by handling missing values (if any).
*   Scale or normalize the features to improve model performance.
*   Split the dataset into training and testing sets.

**2. Key Concepts and Definitions:**

*   **Breast Cancer Wisconsin Dataset:** A widely used dataset for classification problems, containing features extracted from digitized images of fine needle aspirates (FNA) of a breast mass. The goal is to predict whether a tumor is benign or malignant.

*   **Features:** The dataset consists of 30 real-valued features, computed from each cell nucleus. These features include:
    *   Radius (mean of distances from center to points on the perimeter)
    *   Texture (standard deviation of gray-scale values)
    *   Perimeter
    *   Area
    *   Smoothness (local variation in radius lengths)
    *   Compactness (perimeter^2 / area - 1.0)
    *   Concavity (severity of concave portions of the contour)
    *   Concave points (number of concave portions of the contour)
    *   Symmetry
    *   Fractal dimension ("coastline approximation" - 1)
    Each of these features has a mean, standard error, and worst (mean of the three largest values) measurement.  That is where the 30 features come from (10 features x 3 values).

*   **Target Variable (Class):**  Indicates whether the tumor is malignant (1) or benign (0).

*   **Missing Values:** Data entries that are absent or represented by special symbols (e.g., NaN, NULL).  Handling missing values is crucial for data quality and model performance.

*   **Feature Scaling:** Transforming numerical features to a similar range. Common techniques include:
    *   **Standardization:** Scales features to have a mean of 0 and a standard deviation of 1.  Formula:  `z = (x - μ) / σ` where `x` is the original value, `μ` is the mean, and `σ` is the standard deviation.
    *   **Normalization (Min-Max Scaling):** Scales features to a range between 0 and 1. Formula: `x' = (x - min(x)) / (max(x) - min(x))`

*   **Training and Testing Sets:**  The dataset is divided into two sets:
    *   **Training set:** Used to train the machine learning model.
    *   **Testing set:** Used to evaluate the performance of the trained model on unseen data.

**3. Loading the Dataset:**

The Breast Cancer Wisconsin dataset can be loaded using several methods:

*   **Using scikit-learn (built-in):**

```python
from sklearn.datasets import load_breast_cancer
cancer = load_breast_cancer()

# cancer is a dictionary-like object
print(cancer.keys())
# Output: dict_keys(['data', 'target', 'frame', 'target_names', 'DESCR', 'feature_names', 'filename', 'data_module'])

X = cancer.data  # Features
y = cancer.target  # Target variable

print("Shape of X:", X.shape) # Features matrix (number of samples, number of features)
print("Shape of y:", y.shape) # Target variable (number of samples,)
```

*   **Using scikit-learn (fetch_openml) - preferred method if you want the pandas dataframe:**

```python
from sklearn.datasets import fetch_openml
import pandas as pd

cancer = fetch_openml(name="breast-cancer", version=1, as_frame=True)

# as_frame=True makes the cancer object contain .data and .target as pandas dataframes.
df = cancer.data
target = cancer.target

print(df.head())
print(target.head())
print(df.shape)
print(target.shape)

# Combine data and target into a single dataframe (useful for preprocessing).
df['target'] = target

```


*   **Loading from a CSV file (using pandas):**  If the data is in a CSV file (e.g., downloaded from UCI Machine Learning Repository):

```python
import pandas as pd

df = pd.read_csv('breast_cancer.csv')  # Replace 'breast_cancer.csv' with the actual file name

# Check for missing values
print(df.isnull().sum())

# If the CSV doesn't automatically interpret the last column as the target,
# You might need to extract the features and target manually like this:
X = df.drop('target_column_name', axis=1)  # Replace 'target_column_name' with the actual name of the target column
y = df['target_column_name']

print("Shape of X:", X.shape)
print("Shape of y:", y.shape)

```

**4. Preprocessing the Dataset:**

*   **Handling Missing Values:**

```python
# Using pandas to find and handle missing values
import pandas as pd
import numpy as np

# Example dataframe (replace with your actual dataframe)
data = {'col1': [1, 2, np.nan, 4], 'col2': [5, np.nan, 7, 8], 'target': [0, 1, 0, 1]}
df = pd.DataFrame(data)

# Check for missing values (NaN)
print(df.isnull().sum())

# Possible methods for handling missing values:

# 1. Remove rows with missing values (use with caution, might lose a lot of data)
df_cleaned = df.dropna()
print("Dataframe after dropping NaNs:\n", df_cleaned)

# 2. Impute missing values (replace with a calculated value) - Common techniques:

#    a) Impute with the mean:
df_filled_mean = df.fillna(df.mean())
print("Dataframe after filling with mean:\n", df_filled_mean)

#    b) Impute with the median:
df_filled_median = df.fillna(df.median())
print("Dataframe after filling with median:\n", df_filled_median)

#    c) Impute with a specific value (e.g., 0):
df_filled_zero = df.fillna(0)
print("Dataframe after filling with 0:\n", df_filled_zero)

# Choose the imputation method based on the nature of your data and the amount of missing values.
# For example, if the data is skewed, the median might be a better choice than the mean.
```

*   **Feature Scaling:**

```python
from sklearn.preprocessing import StandardScaler, MinMaxScaler

# Assuming X is your feature matrix

# 1. Standardization (StandardScaler)
scaler = StandardScaler()
X_scaled = scaler.fit_transform(X)

# 2. Normalization (MinMaxScaler)
min_max_scaler = MinMaxScaler()
X_normalized = min_max_scaler.fit_transform(X)


print("Scaled data (first 5 rows):\n", X_scaled[:5])
print("Normalized data (first 5 rows):\n", X_normalized[:5])
```

*   **When to use which scaling method:**

    *   **StandardScaler:**  Useful when the data follows a normal distribution or when you want to preserve the relationships between data points (e.g., for algorithms that use distance calculations like K-Nearest Neighbors).
    *   **MinMaxScaler:** Useful when you need values to be within a specific range (0-1), especially for algorithms that are sensitive to feature scaling (e.g., neural networks).  Also appropriate when you know the exact bounds of the features.

*   **Splitting the dataset:**

```python
from sklearn.model_selection import train_test_split

X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)  # 80% training, 20% testing

print("X_train shape:", X_train.shape)
print("X_test shape:", X_test.shape)
print("y_train shape:", y_train.shape)
print("y_test shape:", y_test.shape)
```

    *   **`test_size`:**  Specifies the proportion of the dataset to include in the test split (e.g., 0.2 means 20% for testing).
    *   **`random_state`:**  Sets a seed for the random number generator.  This ensures that the data split is reproducible.  Use the same `random_state` value to get the same split every time you run the code.

**4. Examples:**

**Complete Example (Loading, Preprocessing, Splitting):**

```python
from sklearn.datasets import load_breast_cancer
from sklearn.model_selection import train_test_split
from sklearn.preprocessing import StandardScaler
import pandas as pd

# 1. Load the dataset
cancer = load_breast_cancer()
X = cancer.data
y = cancer.target

# 2. Convert to pandas dataframe for easier inspection (optional but recommended)
df = pd.DataFrame(X, columns=cancer.feature_names)
df['target'] = y # add the target column

# Check for missing values (if you loaded from CSV, this is crucial!)
print("Missing values:\n", df.isnull().sum())

# 3. Scale the features
scaler = StandardScaler()
X_scaled = scaler.fit_transform(X)

# 4. Split into training and testing sets
X_train, X_test, y_train, y_test = train_test_split(X_scaled, y, test_size=0.3, random_state=42)  # 70% training, 30% testing

print("X_train shape:", X_train.shape)
print("X_test shape:", X_test.shape)
print("y_train shape:", y_train.shape)
print("y_test shape:", y_test.shape)
```

**5. Practice Questions/Exercises:**

1.  **Question:** What are the different features present in the Breast Cancer Wisconsin dataset?
    *   **Answer:** The dataset contains 30 real-valued features computed from digitized images of FNA of a breast mass, including radius, texture, perimeter, area, smoothness, compactness, concavity, concave points, symmetry, and fractal dimension. Each feature has a mean, standard error, and worst value.

2.  **Question:** Why is feature scaling important for machine learning models?  Describe the difference between StandardScaler and MinMaxScaler.
    *   **Answer:** Feature scaling ensures that all features contribute equally to the model's learning process. Without scaling, features with larger values might dominate the model.  `StandardScaler` scales features to have a mean of 0 and a standard deviation of 1. `MinMaxScaler` scales features to a range between 0 and 1.  StandardScaler is appropriate when the features generally follow a normal distribution or you want to preserve distances.  MinMaxScaler is appropriate when you want to force values between 0 and 1, especially for algorithms that are sensitive to scaling.

3.  **Question:** Explain the purpose of splitting the dataset into training and testing sets. Why is the `random_state` parameter important?
    *   **Answer:** Splitting the dataset allows you to train the model on a portion of the data (training set) and evaluate its performance on unseen data (testing set). This helps estimate how well the model will generalize to new, real-world data. The `random_state` parameter ensures that the data split is reproducible, so you can get the same split every time you run the code, making your results consistent.

4.  **Exercise:**  Load the Breast Cancer Wisconsin dataset using `load_breast_cancer()`.  Create a pandas DataFrame from the data and add the target variable as a new column called 'target'. Print the first 5 rows of the DataFrame and the number of rows and columns.
    *   **Answer:** See the "Complete Example" code above for a good template.

5.  **Exercise:** Load the breast cancer dataset with `fetch_openml()` and explore the dataframe properties using `.info()` and `.describe()`.

```python
from sklearn.datasets import fetch_openml

cancer = fetch_openml(name="breast-cancer", version=1, as_frame=True)
df = cancer.frame
print(df.info())
print(df.describe())
```

**6. Important Points to Remember:**

*   Always explore your data to understand its characteristics before applying any preprocessing steps.
*   Choose the appropriate feature scaling method based on the nature of your data and the machine learning algorithm you plan to use.
*   Handling missing values correctly is crucial for data quality.
*   Use a consistent `random_state` when splitting the data for reproducible results.
*   Thorough data preprocessing is essential for building accurate and reliable machine learning models.
