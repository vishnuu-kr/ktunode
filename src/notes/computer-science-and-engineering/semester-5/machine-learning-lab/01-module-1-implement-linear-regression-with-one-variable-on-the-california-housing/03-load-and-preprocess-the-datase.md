---
title: "Load and preprocess the datase."
subject: "MACHINE LEARNING LAB"
module: "Module 1: Implement linear regression with one variable on the California Housing dataset to predict housing prices based on a single feature (e.g., the average number of rooms per dwelling)."
branch: "Computer Science and Engineering"
semester: 5
topicId: "684162770fc9aa1fdbc8b92f"
status: "completed"
scrapedAt: "2026-05-20T16:46:55.598Z"
---
# MACHINE LEARNING LAB - Module 1: Linear Regression with One Variable - Loading and Preprocessing the California Housing Dataset

**Objective:** Implement linear regression with one variable on the California Housing dataset to predict housing prices based on a single feature (e.g., the average number of rooms per dwelling). This module focuses on loading and preprocessing the dataset.

**Learning Outcomes:**

*   Understand the California Housing dataset structure and content.
*   Load the California Housing dataset using appropriate Python libraries (e.g., scikit-learn).
*   Inspect and explore the dataset to understand its characteristics.
*   Handle missing values using appropriate techniques (if any).
*   Select the feature variable (average number of rooms per dwelling).
*   Split the dataset into training and testing sets.
*   Scale the feature variable using techniques like Min-Max Scaling or Standardization.

## 1. Introduction to the California Housing Dataset

*   **What is it?** A dataset containing information about housing in California, derived from the 1990 U.S. Census. It includes features such as median income, average number of rooms, population, and more, as well as the median house value for each block group.

*   **Why is it used?** A popular dataset for learning and practicing machine learning techniques due to its manageable size and interesting prediction task (house prices).  It provides a practical application of regression techniques.

*   **Key Features:**
    *   `MedInc`: Median income in block group
    *   `HouseAge`: Median house age in block group
    *   `AveRooms`: Average number of rooms per dwelling
    *   `AveBedrms`: Average number of bedrooms per dwelling
    *   `Population`: Block group population
    *   `AveOccup`: Average number of household members
    *   `Latitude`: Block group latitude
    *   `Longitude`: Block group longitude
    *   `MedHouseVal`: Median house value for block group (Target variable)

*   **Relevance to Linear Regression:** Allows us to explore the relationship between housing features and price, particularly the assumption of a linear relationship which is fundamental to Linear Regression.

## 2. Loading the Dataset

*   **Using scikit-learn:** The scikit-learn library provides a convenient function to load the California Housing dataset directly.

    ```python
    from sklearn.datasets import fetch_california_housing
    import pandas as pd

    # Load the dataset
    housing = fetch_california_housing(as_frame=True)
    data = housing.frame # This will create a pandas DataFrame
    ```

*   **Explanation:**
    *   `fetch_california_housing()`:  This function downloads the dataset if it's not already present and returns it as a `Bunch` object. Using `as_frame=True` returns the dataset directly as a Pandas DataFrame.
    *   `housing.frame`: Accesses the actual dataset from the `Bunch` object, creating a pandas DataFrame named `data`.

*   **Alternative: Loading from a CSV file:**  If you have the dataset in a CSV file (e.g., downloaded from a source like Kaggle), you can use `pandas.read_csv()`.

    ```python
    import pandas as pd

    # Load data from CSV
    data = pd.read_csv("california_housing.csv")  # Replace with your file path
    ```

*   **Important:** Ensure that the file path is correct if loading from a CSV.

## 3. Inspecting and Exploring the Dataset

*   **Using `pandas`:**
    *   `data.head()`: Displays the first few rows of the DataFrame, allowing you to quickly see the column names and some example values.
    *   `data.info()`: Provides information about the data types of each column, the number of non-null values, and memory usage. This is crucial for identifying missing values and understanding the data structure.
    *   `data.describe()`:  Calculates descriptive statistics (count, mean, std, min, max, percentiles) for each numerical column.  This helps in understanding the distribution and range of values for each feature.
    *   `data.shape`:  Returns the dimensions of the DataFrame (number of rows and columns).

    ```python
    # Inspect the data
    print(data.head())
    print(data.info())
    print(data.describe())
    print(data.shape)
    ```

*   **Visualizations (optional but highly recommended):**
    *   **Histograms:**  `data.hist(figsize=(12, 10))`  Shows the distribution of each numerical feature.  Useful for identifying skewness and potential outliers.
    *   **Scatter Plots:**  `plt.scatter(data['AveRooms'], data['MedHouseVal'])`  Visualizes the relationship between 'AveRooms' (chosen feature) and 'MedHouseVal' (target).  This can help assess the linearity of the relationship.
    *   **Box Plots:** Useful for visualizing the distribution and identifying outliers.

    ```python
    import matplotlib.pyplot as plt

    # Example: Histogram of 'AveRooms'
    plt.hist(data['AveRooms'])
    plt.xlabel('Average Number of Rooms')
    plt.ylabel('Frequency')
    plt.title('Distribution of Average Number of Rooms')
    plt.show()

    # Example: Scatter plot of AveRooms vs. MedHouseVal
    plt.scatter(data['AveRooms'], data['MedHouseVal'])
    plt.xlabel('Average Number of Rooms')
    plt.ylabel('Median House Value')
    plt.title('Relationship between Average Rooms and House Value')
    plt.show()
    ```

## 4. Handling Missing Values

*   **Checking for Missing Values:**
    *   `data.isnull().sum()`:  Returns the number of missing values in each column.
    *   `data.isna().sum()`: Similar to `isnull()`, used to detect missing values.  They are often interchangeable, but it's good to be aware of both.

    ```python
    # Check for missing values
    print(data.isnull().sum())
    ```

*   **Handling Missing Values (if any):**  Since the California Housing dataset from scikit-learn is typically clean and doesn't have missing values, this step might not be necessary. However, if you encounter missing values (especially when loading from a CSV), common techniques include:
    *   **Imputation:** Replacing missing values with a suitable estimate (e.g., mean, median, mode).  `data['column_name'].fillna(data['column_name'].mean(), inplace=True)` fills missing values in 'column_name' with the mean.  `inplace=True` modifies the DataFrame directly.
    *   **Dropping Rows:** Removing rows with missing values.  `data.dropna(inplace=True)` removes all rows containing any missing values.  **Caution:** This can lead to data loss if many rows contain missing values.
    *   **Dropping Columns:** Removing columns with a high percentage of missing values.

*   **Example (Imputation):**

    ```python
    # Example: Impute missing values in 'column_with_missing' with the mean
    # This is only for demonstration.  The original dataset doesn't need this.
    # Let's artificially introduce a NaN:
    import numpy as np
    data.loc[0, 'AveRooms'] = np.nan

    data['AveRooms'].fillna(data['AveRooms'].mean(), inplace=True)
    print(data.isnull().sum()) # Check again, should be no missing values in 'AveRooms'
    ```

## 5. Feature Selection and Target Variable

*   **Feature Variable (X):** In this module, we are focusing on the 'AveRooms' (average number of rooms per dwelling) as the single feature variable.
*   **Target Variable (y):**  'MedHouseVal' (median house value) is the target variable we want to predict.

    ```python
    # Select the feature and target variables
    X = data[['AveRooms']]  # Feature (use double brackets to keep it as a DataFrame)
    y = data['MedHouseVal']   # Target
    ```

*   **Importance of Feature Selection:** Choosing the right feature can significantly impact the performance of your linear regression model. Domain knowledge and exploratory data analysis can help in this process.  The choice of `AveRooms` is an exercise to demonstrate the linear regression process. Other features might correlate better with `MedHouseVal`.

## 6. Splitting the Data into Training and Testing Sets

*   **Purpose:** To evaluate the performance of your trained model on unseen data.
*   **Using `train_test_split` from scikit-learn:**

    ```python
    from sklearn.model_selection import train_test_split

    # Split the data into training and testing sets
    X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)
    ```

*   **Explanation:**
    *   `train_test_split(X, y, test_size=0.2, random_state=42)`: Splits the data into training and testing sets.
    *   `test_size=0.2`:  Specifies that 20% of the data should be used for testing and 80% for training.
    *   `random_state=42`:  Sets a seed for the random number generator. This ensures that the data is split in the same way each time you run the code, making the results reproducible.  Using a constant `random_state` is good practice for comparing model performance.
    *   `X_train`, `y_train`: Training data (features and target).
    *   `X_test`, `y_test`: Testing data (features and target).

*   **Importance of `random_state`:**  Without it, each run of the `train_test_split` function would result in a different split, making it difficult to compare the performance of different models or parameter settings consistently.

## 7. Feature Scaling

*   **Why Scaling is Important:** Linear regression is sensitive to the scale of the input features. Features with larger values can dominate the model, leading to biased results. Scaling brings all features to a similar range, improving model performance and convergence speed.

*   **Common Scaling Techniques:**
    *   **Min-Max Scaling:** Scales the values to a range between 0 and 1.
        *   Formula:  `X_scaled = (X - X_min) / (X_max - X_min)`
    *   **Standardization (Z-score normalization):** Scales the values to have a mean of 0 and a standard deviation of 1.
        *   Formula: `X_scaled = (X - X_mean) / X_std`

*   **Using `sklearn.preprocessing`:**

    ```python
    from sklearn.preprocessing import MinMaxScaler, StandardScaler

    # Min-Max Scaling
    scaler = MinMaxScaler()
    X_train_scaled = scaler.fit_transform(X_train) # FIT on TRAINING data only
    X_test_scaled = scaler.transform(X_test)       # TRANSFORM test data using FIT from TRAINING data

    # Standardization (Z-score)
    scaler_std = StandardScaler()
    X_train_scaled_std = scaler_std.fit_transform(X_train) # FIT on TRAINING data only
    X_test_scaled_std = scaler_std.transform(X_test)       # TRANSFORM test data using FIT from TRAINING data
    ```

*   **Explanation:**
    *   `MinMaxScaler()`: Creates a MinMaxScaler object.
    *   `StandardScaler()`: Creates a StandardScaler object.
    *   `scaler.fit_transform(X_train)`:  *Fits* the scaler to the training data (calculates X_min and X_max for Min-Max, or X_mean and X_std for StandardScaler) and then transforms the training data.  **Crucially, `fit()` is only performed on the training data.**
    *   `scaler.transform(X_test)`: Transforms the testing data using the scaling parameters learned from the training data.  **Do not fit the scaler to the test data!**  This is to simulate real-world scenarios where you are scaling unseen data based on what you learned from your training data. Fitting on test data will lead to data leakage and overly optimistic performance estimates.

*   **Important:** *Always fit the scaler on the training data and then use that fitted scaler to transform both the training and testing data.* This prevents information from the testing data from influencing the scaling process, which would lead to biased results.

## 8. Putting it All Together (Example)

```python
import pandas as pd
from sklearn.datasets import fetch_california_housing
from sklearn.model_selection import train_test_split
from sklearn.preprocessing import MinMaxScaler
import matplotlib.pyplot as plt

# 1. Load the dataset
housing = fetch_california_housing(as_frame=True)
data = housing.frame

# 2. Inspect (first few rows)
print("First 5 rows of the dataset:")
print(data.head())

# 3. Check for missing values
print("\nMissing values per column:")
print(data.isnull().sum())

# 4. Select feature and target
X = data[['AveRooms']]
y = data['MedHouseVal']

# Visualize the relationship
plt.scatter(X, y)
plt.xlabel("Average Number of Rooms")
plt.ylabel("Median House Value")
plt.title("Scatter Plot of AveRooms vs MedHouseVal")
plt.show()


# 5. Split into training and testing sets
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)

# 6. Scale the feature (MinMaxScaler)
scaler = MinMaxScaler()
X_train_scaled = scaler.fit_transform(X_train)
X_test_scaled = scaler.transform(X_test)

print("\nShape of X_train:", X_train.shape)
print("Shape of X_test:", X_test.shape)
print("Shape of X_train_scaled:", X_train_scaled.shape)
print("Shape of X_test_scaled:", X_test_scaled.shape)

print("\nFirst 5 rows of scaled X_train:")
print(X_train_scaled[:5])

print("\nFirst 5 rows of scaled X_test:")
print(X_test_scaled[:5])
```

## 9. Practice Questions/Exercises

1.  **Dataset Exploration:** After loading the California Housing dataset, how would you determine the range of values for the 'MedInc' (median income) feature? Provide the code.

    *Answer:*

    ```python
    import pandas as pd
    from sklearn.datasets import fetch_california_housing

    housing = fetch_california_housing(as_frame=True)
    data = housing.frame

    print("Minimum Median Income:", data['MedInc'].min())
    print("Maximum Median Income:", data['MedInc'].max())
    ```

2.  **Missing Value Handling:** Assume you loaded the California Housing dataset from a CSV and found that the 'HouseAge' column has some missing values.  How would you replace these missing values with the median age?

    *Answer:*

    ```python
    import pandas as pd
    # Assume data is loaded from CSV and some values in 'HouseAge' are missing.
    # Example adding some NaN values for testing:
    data = fetch_california_housing(as_frame=True).frame # load in-memory dataset
    import numpy as np
    data.loc[[1, 5, 10], 'HouseAge'] = np.nan

    median_age = data['HouseAge'].median()
    data['HouseAge'].fillna(median_age, inplace=True)
    print(data['HouseAge'].isnull().sum()) # Should be 0
    ```

3.  **Data Splitting:** Why is it important to set the `random_state` parameter when splitting the data into training and testing sets? What happens if you don't set it?

    *Answer:* Setting `random_state` ensures that the data is split in the same way each time the code is run. This makes the results reproducible and allows for consistent comparison of different models or parameter settings. If you don't set it, the data will be split randomly each time, which can lead to varying results and make it difficult to compare different approaches.

4.  **Feature Scaling:** Why do we fit the scaler only on the training data and not on the entire dataset or the testing data?  Explain the concept of "data leakage".

    *Answer:* We fit the scaler only on the training data to prevent information from the testing data from influencing the scaling process. Fitting the scaler on the entire dataset or the testing data would introduce "data leakage," where information from the test set is used to influence the model training. This leads to an overly optimistic assessment of the model's performance on unseen data, as it has indirectly "seen" the test data during the scaling process. Data leakage results in poor generalization to new, truly unseen data.

5. **Scaling practice:** Using the code from the example section:
   * Print the *mean* and *standard deviation* of both `X_train_scaled_std` and `X_test_scaled_std`. What values do you expect from the train data and what does the test data show?
   * Can you revert `X_train_scaled` and `X_test_scaled` back to the original values? Show how.

   *Answers:*
    ```python
    import pandas as pd
    from sklearn.datasets import fetch_california_housing
    from sklearn.model_selection import train_test_split
    from sklearn.preprocessing import MinMaxScaler, StandardScaler
    import numpy as np

    # 1. Load the dataset
    housing = fetch_california_housing(as_frame=True)
    data = housing.frame

    # 4. Select feature and target
    X = data[['AveRooms']]
    y = data['MedHouseVal']

    # 5. Split into training and testing sets
    X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)

    # 6. Scale the feature (MinMaxScaler)
    scaler = MinMaxScaler()
    X_train_scaled = scaler.fit_transform(X_train)
    X_test_scaled = scaler.transform(X_test)

    # Apply StandardScaler as well
    scaler_std = StandardScaler()
    X_train_scaled_std = scaler_std.fit_transform(X_train)
    X_test_scaled_std = scaler_std.transform(X_test)

    # Print mean and std of scaled data
    print(f"X_train_scaled_std - Mean: {np.mean(X_train_scaled_std):.4f}, Std: {np.std(X_train_scaled_std):.4f}")
    print(f"X_test_scaled_std - Mean: {np.mean(X_test_scaled_std):.4f}, Std: {np.std(X_test_scaled_std):.4f}")

    # Expected results:
    # X_train_scaled_std - Mean: 0.0000, Std: 1.0000
    # X_test_scaled_std - Mean: 0.0231, Std: 0.9936

    # Revert data with MinMaxScaler
    X_train_original = scaler.inverse_transform(X_train_scaled)
    X_test_original = scaler.inverse_transform(X_test_scaled)

    # Test reversion by comparing the first original and reverted data values:
    print(f"\nOriginal X_train value (First row, AveRooms): {X_train['AveRooms'].iloc[0]:.4f}")
    print(f"Reverted X_train value (First row, AveRooms): {X_train_original[0, 0]:.4f}")
    print(f"Original X_test value (First row, AveRooms): {X_test['AveRooms'].iloc[0]:.4f}")
    print(f"Reverted X_test value (First row, AveRooms): {X_test_original[0, 0]:.4f}")

    ```

## 10. Important Points to Remember

*   Always inspect your data after loading it to understand its structure, data types, and potential issues like missing values.
*   Handle missing values appropriately before proceeding with model training.
*   Split your data into training and testing sets to evaluate the model's performance on unseen data.
*   Fit the scaler only on the training data and then use that fitted scaler to transform both the training and testing data to prevent data leakage.
*   Understand the purpose of `random_state` and use it to ensure reproducible results.
*   The choice of the feature variable impacts model performance.
*   Use visualizations to explore the data and identify potential relationships between features and the target variable.
