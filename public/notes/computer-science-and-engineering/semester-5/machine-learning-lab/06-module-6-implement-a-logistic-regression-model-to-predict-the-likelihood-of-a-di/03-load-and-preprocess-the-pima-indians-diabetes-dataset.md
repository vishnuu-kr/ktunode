---
title: "Load and preprocess the Pima Indians Diabetes dataset."
subject: "MACHINE LEARNING LAB"
module: "Module 6: Implement a logistic regression model to predict the likelihood of a disease using the Pima Indians Diabetes dataset. Compare the performance with and without feature scaling."
branch: "Computer Science and Engineering"
semester: 5
topicId: "684162770fc9aa1fdbc8b952"
status: "completed"
scrapedAt: "2026-05-20T16:47:17.428Z"
---
## Machine Learning Lab: Module 6 - Pima Indians Diabetes Dataset Preprocessing

**Topic:** Load and preprocess the Pima Indians Diabetes dataset.

**Module Goal:** Implement a logistic regression model to predict the likelihood of a disease using the Pima Indians Diabetes dataset. Compare the performance with and without feature scaling.

**Focus of this Topic:** Preparing the data for effective modeling.

**Learning Outcomes:**

*   Understand the Pima Indians Diabetes dataset.
*   Load the dataset using appropriate Python libraries (e.g., Pandas).
*   Explore the dataset structure, including identifying features and the target variable.
*   Handle missing values appropriately (if any exist).
*   Convert categorical variables into numerical representations (if any exist, but they don't in this specific dataset).
*   Split the dataset into training and testing sets.

---

### 1. Understanding the Pima Indians Diabetes Dataset

*   **What is it?** The Pima Indians Diabetes dataset is a collection of medical diagnostic measurements from Pima Indian women at least 21 years old, residing near Phoenix, Arizona. The goal is to predict whether or not a patient will develop diabetes based on these measurements.
*   **Source:** Originally from the National Institute of Diabetes and Digestive and Kidney Diseases. Available on platforms like Kaggle and the UCI Machine Learning Repository.
*   **Features (Independent Variables):**
    *   **Pregnancies:** Number of times pregnant.
    *   **Glucose:** Plasma glucose concentration a 2 hours in an oral glucose tolerance test.
    *   **BloodPressure:** Diastolic blood pressure (mm Hg).
    *   **SkinThickness:** Triceps skin fold thickness (mm).
    *   **Insulin:** 2-Hour serum insulin (mu U/ml).
    *   **BMI:** Body mass index (weight in kg/(height in m)^2).
    *   **DiabetesPedigreeFunction:** Diabetes pedigree function (a function which scores likelihood of diabetes based on family history).
    *   **Age:** Age (years).
*   **Target Variable (Dependent Variable):**
    *   **Outcome:** Class variable (0 or 1).  268 of 768 are 1, the others are 0. 0 represents negative for diabetes, 1 represents positive for diabetes.
*   **Key Characteristics:**
    *   Classification problem: Predicting a binary outcome (diabetes or no diabetes).
    *   Relatively small dataset: Allows for quick experimentation and learning.
    *   Real-world dataset: Provides experience with data preprocessing challenges.

### 2. Loading the Dataset using Pandas

*   **Pandas Library:** Pandas is a powerful Python library for data manipulation and analysis.  It provides data structures like DataFrames for organizing and working with tabular data.
*   **Steps:**
    1.  **Import Pandas:** `import pandas as pd`
    2.  **Load the data:**
        ```python
        import pandas as pd

        # Option 1: Load from a local CSV file
        data = pd.read_csv("diabetes.csv")  # Replace "diabetes.csv" with your file path

        # Option 2: Load from a URL (if available)
        # data = pd.read_csv("URL_of_the_dataset")
        ```
*   **Verification:** After loading, use `data.head()` to display the first few rows of the DataFrame and `data.info()` to get a summary of the dataset (data types, missing values, etc.).

    ```python
    print(data.head())
    print(data.info())
    ```

### 3. Exploring the Dataset Structure

*   **`data.info()`:**  Provides:
    *   Number of rows (entries) and columns (features).
    *   Data type of each column (e.g., int64, float64).
    *   Number of non-null values in each column. This is crucial for identifying missing data.
*   **`data.describe()`:**  Provides descriptive statistics for each numerical column:
    *   `count`: Number of non-null values.
    *   `mean`: Average value.
    *   `std`: Standard deviation.
    *   `min`: Minimum value.
    *   `25%`: 25th percentile (Q1).
    *   `50%`: 50th percentile (median, Q2).
    *   `75%`: 75th percentile (Q3).
    *   `max`: Maximum value.
    *   **Important:**  These statistics can help identify outliers and potential issues with data quality.
*   **`data.shape`:** Returns a tuple representing the dimensions of the DataFrame (number of rows, number of columns).
*   **`data.isnull().sum()`:** Returns the number of missing values per column. This is a very quick and effective way to check for missing data.

    ```python
    print(data.describe())
    print(data.shape)
    print(data.isnull().sum())
    ```

### 4. Handling Missing Values

*   **Identifying Missing Values:**  The `data.info()` and `data.isnull().sum()` methods are used to identify columns with missing values.
*   **Common Missing Value Indicators:** Sometimes missing values are represented as `NaN` (Not a Number). However, in this particular dataset, zeros sometimes represent missing values. From exploring the data, it doesn't make sense for Glucose, BloodPressure, SkinThickness, Insulin, or BMI to be zero. We must handle these accordingly.
*   **Handling Strategies:**
    *   **Imputation:** Replacing missing values with estimated values.  Common strategies include:
        *   **Mean Imputation:** Replacing missing values with the mean of the column. Suitable when the data is normally distributed.
        *   **Median Imputation:** Replacing missing values with the median of the column. More robust to outliers than mean imputation.
        *   **Mode Imputation:** Replacing missing values with the mode of the column (most frequent value). Suitable for categorical data.  Not really applicable here since the 'categorical' data is the outcome, and we don't want to impute the target variable.
    *   **Removal:** Removing rows or columns containing missing values. Suitable when the percentage of missing data is small, or the missingness is not random.
*   **Implementation (for Pima Indians Dataset - Replacing 0 with NaN then Imputing):**

    ```python
    import pandas as pd
    import numpy as np

    # Load the dataset
    data = pd.read_csv("diabetes.csv")

    # Replace 0 with NaN in relevant columns
    cols_to_replace = ['Glucose', 'BloodPressure', 'SkinThickness', 'Insulin', 'BMI']
    data[cols_to_replace] = data[cols_to_replace].replace(0, np.nan)

    # Impute missing values using the median
    for col in cols_to_replace:
        data[col] = data[col].fillna(data[col].median())

    # Verify that there are no more NaN values
    print(data.isnull().sum())  # Should now all be 0
    ```

### 5. Converting Categorical Variables to Numerical (Not Applicable Here)

*   **Categorical Variables:** Features that represent categories or labels (e.g., "Red", "Blue", "Green").
*   **Why Convert?** Most machine learning algorithms require numerical input.
*   **Common Techniques:**
    *   **One-Hot Encoding:** Creates new binary columns for each category. Suitable for nominal categorical variables (categories without inherent order).
    *   **Label Encoding:** Assigns a unique integer to each category. Suitable for ordinal categorical variables (categories with inherent order).
*   **Note:** The Pima Indians Diabetes dataset primarily contains numerical features. The 'Outcome' variable is already encoded as 0 and 1.  Therefore, this step is not required for this dataset.  If, hypothetically, the `Outcome` was represented as 'Positive' and 'Negative', you would use label encoding.

### 6. Splitting the Dataset into Training and Testing Sets

*   **Purpose:** To evaluate the performance of the trained model on unseen data.
*   **Training Set:** Used to train the machine learning model.
*   **Testing Set:** Used to evaluate the model's performance.
*   **Common Split Ratio:** 80/20 or 70/30 (training/testing).
*   **`train_test_split` function:** Provided by scikit-learn.
*   **Implementation:**

    ```python
    from sklearn.model_selection import train_test_split

    # Separate features (X) and target (y)
    X = data.drop('Outcome', axis=1)  # Features
    y = data['Outcome']  # Target

    # Split the data into training and testing sets
    X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)  # 80% training, 20% testing

    print("X_train shape:", X_train.shape)
    print("X_test shape:", X_test.shape)
    print("y_train shape:", y_train.shape)
    print("y_test shape:", y_test.shape)
    ```

*   **`random_state`:**  Controls the shuffling applied to the data before splitting. Setting a `random_state` ensures reproducibility – the same split will be obtained each time you run the code.

---

### Practice Questions/Exercises

1.  **What is the purpose of the Pima Indians Diabetes dataset?**

    *   **Answer:** To predict whether a patient will develop diabetes based on medical diagnostic measurements.

2.  **List three features present in the Pima Indians Diabetes dataset.**

    *   **Answer:** Pregnancies, Glucose, BloodPressure, SkinThickness, Insulin, BMI, DiabetesPedigreeFunction, Age (any three of these).

3.  **Why is it important to handle missing values in a dataset?**

    *   **Answer:** Missing values can lead to biased or inaccurate model results and can cause some algorithms to fail.

4.  **Explain the difference between mean and median imputation.**

    *   **Answer:** Mean imputation replaces missing values with the average value of the column. Median imputation replaces missing values with the middle value of the column. Median imputation is more robust to outliers.

5.  **What is the purpose of splitting the dataset into training and testing sets?**

    *   **Answer:** To train the model on the training set and evaluate its performance on unseen data (the testing set). This helps to estimate how well the model will generalize to new, real-world data.

6.  **Using Pandas, write code to print the number of missing values in each column of the dataset (assuming the dataset is already loaded into a DataFrame called `data`).**

    *   **Answer:** `print(data.isnull().sum())`

7.  **After loading the dataset and replacing 0 values with NaN in the 'Glucose', 'BloodPressure', and 'BMI' columns, write code to impute the missing values using the median of each respective column.**

```python
import pandas as pd
import numpy as np

# Assuming 'data' DataFrame is already loaded
data = pd.read_csv("diabetes.csv") # added loading the dataset for standalone execution

cols_to_replace = ['Glucose', 'BloodPressure', 'BMI']
data[cols_to_replace] = data[cols_to_replace].replace(0, np.nan)

for col in cols_to_replace:
    data[col] = data[col].fillna(data[col].median())

print(data.isnull().sum())
```
---

### Important Points to Remember

*   **Data Quality is Crucial:** The performance of a machine learning model heavily depends on the quality of the input data.  Proper preprocessing is essential.
*   **Domain Knowledge:** Understanding the context of the data (e.g., what the features represent) can help guide preprocessing decisions.
*   **Experimentation:** Try different preprocessing techniques and evaluate their impact on model performance.
*   **Reproducibility:** Use `random_state` when splitting the data to ensure consistent results.
*   **Zeros as Missing Values:** Be mindful of zeros that might represent missing data and handle them accordingly.  This is a common issue in medical datasets.
