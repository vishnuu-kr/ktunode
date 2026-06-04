---
title: "Load and preprocess the Boston Housing dataset."
subject: "MACHINE LEARNING LAB"
module: "Module 20: Investigate the bias"
branch: "Computer Science and Engineering"
semester: 5
topicId: "684162770fc9aa1fdbc8b9b4"
status: "completed"
scrapedAt: "2026-05-20T16:48:18.380Z"
---
## MACHINE LEARNING LAB - Module 20: Investigate the Bias - Boston Housing Dataset Loading and Preprocessing

**Subject:** MACHINE LEARNING LAB
**Module:** Module 20: Investigate the Bias
**Topic:** Load and Preprocess the Boston Housing Dataset
**Description:** Loading and preprocessing the Boston Housing dataset to prepare it for bias investigation and machine learning model training.

**Learning Outcomes:**

*   Understand the Boston Housing dataset and its features.
*   Learn how to load the dataset using scikit-learn.
*   Apply preprocessing techniques such as feature scaling (standardization and normalization).
*   Split the dataset into training and testing sets.
*   Understand the importance of data preprocessing for machine learning.

---

### 1. Understanding the Boston Housing Dataset

*   **Key Concept:** The Boston Housing dataset is a classic dataset in machine learning used for regression tasks. It contains information about housing values in the suburbs of Boston in the 1970s.

*   **Definition:** The dataset aims to predict the median value of owner-occupied homes in thousands of dollars based on various features of the neighborhood.

*   **Features (Attributes):**

    *   **CRIM:** Per capita crime rate by town.
    *   **ZN:** Proportion of residential land zoned for lots over 25,000 sq.ft.
    *   **INDUS:** Proportion of non-retail business acres per town.
    *   **CHAS:** Charles River dummy variable (= 1 if tract bounds river; 0 otherwise).
    *   **NOX:** Nitrogen oxides concentration (parts per 10 million).
    *   **RM:** Average number of rooms per dwelling.
    *   **AGE:** Proportion of owner-occupied units built prior to 1940.
    *   **DIS:** Weighted distances to five Boston employment centres.
    *   **RAD:** Index of accessibility to radial highways.
    *   **TAX:** Full-value property-tax rate per $10,000.
    *   **PTRATIO:** Pupil-teacher ratio by town.
    *   **B:** 1000(Bk - 0.63)^2 where Bk is the proportion of blacks by town.  **Important: This feature has raised ethical concerns due to its potential for reflecting and reinforcing racial bias. We'll address this later when investigating bias.**
    *   **LSTAT:** Percentage of lower status of the population.
    *   **MEDV:** Median value of owner-occupied homes in $1000's (Target Variable).

*   **Important Note:** The Boston Housing dataset has been removed from the `sklearn.datasets` module due to ethical concerns related to the 'B' feature (proportion of blacks by town).  You may still find it in older versions of scikit-learn or in other sources. Newer versions of scikit-learn will require you to load the data from an external source like `statsmodels`. We will demonstrate how to load it both ways.

### 2. Loading the Boston Housing Dataset

*   **Using Scikit-learn (Older Versions/External Source):**

    ```python
    # Method 1: Using statsmodels (Recommended for newer versions of scikit-learn)
    import statsmodels.api as sm
    boston = sm.datasets.get_rdataset("Boston", "MASS")
    df = boston.data.copy()
    df['MEDV'] = boston.endog

    # The dataframe df now contains the dataset
    X = df.drop('MEDV', axis=1)
    y = df['MEDV']


    # Method 2: (For Older Versions of Scikit-learn, or if the dataset exists)
    # from sklearn.datasets import load_boston
    # boston = load_boston()
    # X, y = boston.data, boston.target

    # Print the shape of the data
    print("Shape of X:", X.shape)
    print("Shape of y:", y.shape)

    # Print the feature names
    print("Feature names:", boston.feature_names if hasattr(boston, 'feature_names') else X.columns)
    ```

    *   **Explanation:**
        *   The code first tries to load the dataset using `statsmodels`. This is the recommended approach for current versions of scikit-learn.
        *   If using an older version of scikit-learn where `load_boston` still works, the code comments show how to load the data. This is **not recommended** due to the dataset's problematic 'B' feature.
        *   The features are stored in `X`, and the target variable (MEDV) is stored in `y`.
        *   We then print the shape of the data to confirm it has loaded correctly.
        *   We print the feature names for later use.

*   **Key Concept:**  Loading the dataset is the first step to making it usable for machine learning algorithms.  Understanding the data structure (shape, feature names) is crucial.

### 3. Preprocessing the Data: Feature Scaling

*   **Key Concept:** Feature scaling is essential for many machine learning algorithms because features with different scales can disproportionately influence the model. It helps to improve the performance and convergence of the model.

*   **Types of Feature Scaling:**

    *   **Standardization (Z-score normalization):** Scales features to have a mean of 0 and a standard deviation of 1.  Suitable when the data follows a normal distribution or when the algorithm is sensitive to feature scales.

    *   **Formula:**  `z = (x - μ) / σ`
        *   `x`:  Original value.
        *   `μ`: Mean of the feature.
        *   `σ`: Standard deviation of the feature.

    *   **Normalization (Min-Max scaling):** Scales features to a range between 0 and 1 (or a defined range).  Useful when you need to preserve the original distribution of the data and when you have features with bounded values.

    *   **Formula:**  `x' = (x - min) / (max - min)`
        *   `x`: Original value.
        *   `min`: Minimum value of the feature.
        *   `max`: Maximum value of the feature.

*   **Implementation using scikit-learn:**

    ```python
    from sklearn.preprocessing import StandardScaler, MinMaxScaler
    import pandas as pd

    # Convert X to a pandas DataFrame if it's not already. Important for feature name retention.
    if not isinstance(X, pd.DataFrame):
        X = pd.DataFrame(X, columns=boston.feature_names if hasattr(boston, 'feature_names') else ['feature_' + str(i) for i in range(X.shape[1])])



    # 1. Standardization
    scaler = StandardScaler()
    X_scaled = scaler.fit_transform(X)
    X_scaled = pd.DataFrame(X_scaled, columns=X.columns)  # Preserve feature names


    print("Scaled data (Standardized):\n", X_scaled.head())

    # 2. Normalization
    minmax_scaler = MinMaxScaler()
    X_normalized = minmax_scaler.fit_transform(X)
    X_normalized = pd.DataFrame(X_normalized, columns=X.columns) # Preserve feature names

    print("\nScaled data (Normalized):\n", X_normalized.head())
    ```

    *   **Explanation:**
        *   We import `StandardScaler` and `MinMaxScaler` from `sklearn.preprocessing`.
        *   We initialize the scaler objects.
        *   `scaler.fit_transform(X)` calculates the mean and standard deviation (or min and max) from the training data and then applies the scaling to the data.  It *fits* the scaler to the data and then *transforms* the data.  This is crucial.  You only fit the scaler on the *training data* and then transform both training and testing data.
        *  Converting the result back to a Pandas DataFrame preserves the column names which is helpful for downstream analysis and interpretability.

*   **Important Note:** You should *only* fit the scaler on the *training data* and then use the same scaler to transform both the training and testing data.  This prevents data leakage. We'll cover this in the next section.

### 4. Splitting the Data into Training and Testing Sets

*   **Key Concept:**  Splitting the data into training and testing sets is crucial for evaluating the performance of a machine learning model on unseen data. This helps to prevent overfitting, where the model performs well on the training data but poorly on new data.

*   **Implementation using scikit-learn:**

    ```python
    from sklearn.model_selection import train_test_split

    # Split the data into training and testing sets
    X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42) # using raw (unscaled) X, y here.

    print("Shape of X_train:", X_train.shape)
    print("Shape of X_test:", X_test.shape)
    print("Shape of y_train:", y_train.shape)
    print("Shape of y_test:", y_test.shape)

    # Now, *after* splitting, we scale the training and testing sets
    # Fit the scaler only on the training data
    scaler = StandardScaler() # or MinMaxScaler()

    X_train_scaled = scaler.fit_transform(X_train)
    X_test_scaled = scaler.transform(X_test) # Use the same scaler to transform the test data

    # Convert scaled data back to Pandas DataFrames, preserving column names:
    X_train_scaled = pd.DataFrame(X_train_scaled, columns=X.columns)
    X_test_scaled = pd.DataFrame(X_test_scaled, columns=X.columns)

    print("Scaled X_train shape:", X_train_scaled.shape)
    print("Scaled X_test shape:", X_test_scaled.shape)
    ```

    *   **Explanation:**
        *   We import `train_test_split` from `sklearn.model_selection`.
        *   `train_test_split(X, y, test_size=0.2, random_state=42)` splits the data into 80% training and 20% testing sets.
            *   `test_size` specifies the proportion of the data to use for testing.
            *   `random_state` ensures that the split is reproducible.  Using the same random state will always give the same split.
        *   We print the shapes of the training and testing sets to verify the split.
        *   **Crucially, we fit the scaler ONLY on the training data (X_train).**  We then use the fitted scaler to transform *both* the training data (X_train) and the testing data (X_test).  This prevents data leakage.
        *   We convert the scaled NumPy arrays back into Pandas DataFrames to preserve the column names for easier interpretability.

*   **Data Leakage:** Fitting the scaler on the entire dataset *before* splitting into training and testing sets introduces data leakage. The testing data influences the scaling parameters, leading to overly optimistic performance estimates.  This is why it is so important to fit the scaler *only* on the training data.

### 5. Importance of Data Preprocessing

*   **Improved Model Performance:** Feature scaling helps algorithms converge faster and avoid being dominated by features with larger scales.
*   **Algorithm Compatibility:** Some algorithms, like K-Nearest Neighbors (KNN) and Support Vector Machines (SVM), are highly sensitive to feature scaling.
*   **Preventing Data Leakage:**  Properly splitting the data into training and testing sets and applying preprocessing steps only to the training data prevents data leakage and ensures a more accurate assessment of model performance.
*   **Addressing Bias:** Preprocessing allows us to explore and potentially mitigate biases present in the data.  For example, we might choose to remove the 'B' feature due to its problematic nature. Alternatively, we might explore re-weighting or modifying this feature.  *It is important to note that simply removing the feature does not necessarily eliminate the bias.*

### 6. Example Code (Complete):

```python
import statsmodels.api as sm
import pandas as pd
from sklearn.preprocessing import StandardScaler, MinMaxScaler
from sklearn.model_selection import train_test_split

# Load the dataset using statsmodels
boston = sm.datasets.get_rdataset("Boston", "MASS")
df = boston.data.copy()
df['MEDV'] = boston.endog

# Separate features (X) and target (y)
X = df.drop('MEDV', axis=1)
y = df['MEDV']

# Print the shape of the data
print("Shape of X:", X.shape)
print("Shape of y:", y.shape)
print("Feature names:", X.columns)


# Split the data into training and testing sets
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)

# Scale the data (Standardization) - AFTER splitting
scaler = StandardScaler()
X_train_scaled = scaler.fit_transform(X_train)
X_test_scaled = scaler.transform(X_test)

# Convert scaled NumPy arrays back to Pandas DataFrames
X_train_scaled = pd.DataFrame(X_train_scaled, columns=X.columns)
X_test_scaled = pd.DataFrame(X_test_scaled, columns=X.columns)


print("Shape of X_train:", X_train.shape)
print("Shape of X_test:", X_test.shape)
print("Shape of y_train:", y_train.shape)
print("Shape of y_test:", y_test.shape)

print("Scaled X_train shape:", X_train_scaled.shape)
print("Scaled X_test shape:", X_test_scaled.shape)


# Display the first few rows of the scaled training data
print("\nScaled Training Data (first 5 rows):\n", X_train_scaled.head())

# Display the first few rows of the scaled test data
print("\nScaled Testing Data (first 5 rows):\n", X_test_scaled.head())
```

### 7. Practice Questions and Exercises

1.  **Question:** What are the potential issues with the "B" feature in the Boston Housing dataset?

    **Answer:** The "B" feature (proportion of blacks by town) has the potential to reflect and reinforce racial biases. It's crucial to be aware of this when using this dataset.

2.  **Exercise:**  Load the Boston Housing dataset using `statsmodels` and print the summary statistics (mean, standard deviation, etc.) of each feature *before* and *after* standardization.

    **Answer:**

    ```python
    import statsmodels.api as sm
    import pandas as pd
    from sklearn.preprocessing import StandardScaler

    # Load the dataset
    boston = sm.datasets.get_rdataset("Boston", "MASS")
    df = boston.data.copy()
    df['MEDV'] = boston.endog
    X = df.drop('MEDV', axis=1)


    # Print summary statistics before scaling
    print("Summary statistics before scaling:\n", X.describe())

    # Scale the data using StandardScaler
    scaler = StandardScaler()
    X_scaled = scaler.fit_transform(X)
    X_scaled = pd.DataFrame(X_scaled, columns=X.columns)  # Preserve column names


    # Print summary statistics after scaling
    print("\nSummary statistics after scaling:\n", X_scaled.describe())
    ```

    *   **Explanation:**  The output of `X.describe()` and `X_scaled.describe()` will show how the mean and standard deviation change after standardization.  The mean of the standardized features should be close to 0, and the standard deviation should be close to 1.

3.  **Question:** Why is it important to split the data into training and testing sets *before* feature scaling?

    **Answer:** Splitting the data *before* feature scaling prevents data leakage. Fitting the scaler on the entire dataset before splitting would allow information from the testing set to influence the scaling parameters, leading to overly optimistic performance estimates during model evaluation.

4.  **Exercise:** Modify the complete code example to use `MinMaxScaler` instead of `StandardScaler`. Observe the difference in the scaled data.

    **Answer:** Replace `scaler = StandardScaler()` with `scaler = MinMaxScaler()`. The normalized data will now have values between 0 and 1.

5.  **Question:** If you are using a KNN model, which scaling method (Standardization or Normalization) might be more appropriate and why?

    **Answer:** Normalization (Min-Max scaling) might be more appropriate for KNN. KNN relies on distance calculations, and features with larger scales can disproportionately influence the distance metric. Normalization ensures all features are on a similar scale (0-1), preventing this bias.  Standardization can also work but might not be as effective if the data doesn't follow a normal distribution.

### 8. Important Points to Remember

*   **Data Ethics:**  Be aware of the potential biases in datasets like the Boston Housing dataset. Carefully consider the ethical implications before using and interpreting results.
*   **Data Leakage:** Always split the data into training and testing sets *before* applying feature scaling or any other preprocessing steps that involve calculating statistics from the data.
*   **Scaler Fitting:**  Fit the scaler *only* on the training data and then use the same fitted scaler to transform both the training and testing data.
*   **Feature Understanding:** Thoroughly understand the meaning of each feature in the dataset.
*   **Scaling Choice:**  Choose the appropriate feature scaling method (Standardization or Normalization) based on the algorithm and the characteristics of the data.
*   **Preserve Feature Names:** When possible, preserve feature names throughout the preprocessing steps, particularly when converting NumPy arrays back to Pandas DataFrames. This aids in interpretability.
