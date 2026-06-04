---
title: "Load and preprocess the dataset."
subject: "MACHINE LEARNING LAB"
module: "Module 2: Implement polynomial regression on the Auto MPG dataset to predict miles per gallon (MPG) based on engine displacement. Compare polynomial regression results with linear regression."
branch: "Computer Science and Engineering"
semester: 5
topicId: "684162770fc9aa1fdbc8b936"
status: "completed"
scrapedAt: "2026-05-20T16:46:59.968Z"
---
## Machine Learning Lab: Module 2 - Load and Preprocess Auto MPG Dataset for Polynomial Regression

**Topic:** Load and preprocess the dataset.

**Module Goal:** Implement polynomial regression on the Auto MPG dataset to predict miles per gallon (MPG) based on engine displacement. Compare polynomial regression results with linear regression.

**Learning Outcomes:**

*   Understand the structure of the Auto MPG dataset.
*   Load the Auto MPG dataset using appropriate libraries (e.g., Pandas).
*   Handle missing values (if any) in the dataset.
*   Select relevant features (engine displacement and MPG) for the regression task.
*   Preprocess the selected features (e.g., scaling, data cleaning).
*   Prepare the data for both linear and polynomial regression modeling.

---

### 1. Understanding the Auto MPG Dataset

*   **Definition:** The Auto MPG dataset contains information about various cars, including their miles per gallon (MPG), number of cylinders, engine displacement, horsepower, weight, acceleration, model year, origin, and car name.
*   **Purpose:** This dataset is commonly used for regression tasks, where the goal is to predict a car's MPG based on its characteristics.
*   **Key Features:**
    *   **MPG (Miles per Gallon):** The target variable we want to predict.
    *   **Cylinders:** Number of cylinders in the engine.
    *   **Displacement:** Engine displacement in cubic inches.  *This will be our primary independent variable for this module.*
    *   **Horsepower:** Engine horsepower.
    *   **Weight:** Vehicle weight in pounds.
    *   **Acceleration:** Time to accelerate from 0 to 60 mph.
    *   **Model Year:** The year the car was manufactured.
    *   **Origin:** The origin of the car (1: American, 2: European, 3: Japanese).
    *   **Car Name:** The name of the car model.
*   **Data Source:** The Auto MPG dataset is available from various sources, including the UCI Machine Learning Repository.

### 2. Loading the Dataset

*   **Library: Pandas** Pandas is a powerful Python library for data manipulation and analysis. It provides data structures like DataFrames, which are ideal for working with tabular data.
*   **Loading from CSV:**
    ```python
    import pandas as pd

    # Option 1: Directly from a URL (if available)
    # data_url = "https://archive.ics.uci.edu/ml/machine-learning-databases/auto-mpg/auto-mpg.data"
    # column_names = ['MPG', 'Cylinders', 'Displacement', 'Horsepower', 'Weight', 'Acceleration', 'Model Year', 'Origin']
    # df = pd.read_csv(data_url, names=column_names, delim_whitespace=True)

    # Option 2: From a local file (more common)
    df = pd.read_csv('auto-mpg.csv')  # Replace 'auto-mpg.csv' with the actual file path

    # Print the first few rows to inspect the data
    print(df.head())

    # Print the information on the dataset
    print(df.info())
    ```
*   **Explanation:**
    *   `import pandas as pd`: Imports the Pandas library and assigns it the alias `pd`.
    *   `pd.read_csv()`: Reads the CSV file into a Pandas DataFrame.  The `names` argument could be necessary if the CSV file lacks a header row. `delim_whitespace=True`  is used if the data fields are separated by whitespace, as in the original UCI data file.
    *   `df.head()`: Displays the first 5 rows of the DataFrame.
    *   `df.info()`: Provides concise summary information, including column names, data types, and the number of non-null values.

### 3. Handling Missing Values

*   **Identification:** Missing values are often represented as `NaN` (Not a Number) or other placeholders (e.g., "?").
*   **Checking for Missing Values:**
    ```python
    # Check for missing values in each column
    print(df.isnull().sum()) # or df.isna().sum()

    #Alternatively, if missing values are represented by '?', for example:
    #df = df.replace('?', np.nan)
    #print(df.isnull().sum())
    ```
*   **Handling Strategies:**
    *   **Deletion:** Remove rows or columns with missing values. This is suitable if the amount of missing data is small.
        ```python
        # Remove rows with any missing values
        df = df.dropna()

        # Remove a column with missing values (e.g., 'Horsepower')
        # df = df.drop('Horsepower', axis=1)
        ```
    *   **Imputation:** Replace missing values with estimated values. Common imputation methods include:
        *   **Mean/Median Imputation:** Replace missing values with the mean or median of the column.  Use median imputation for skewed data to avoid being influenced by outliers.
        *   **Mode Imputation:** Replace missing values with the most frequent value in the column.
        *   **Regression Imputation:** Use a regression model to predict missing values based on other features.
        ```python
        # Mean Imputation (using 'Displacement' column as an example)
        # Assuming 'Displacement' has missing values (which it likely doesn't in this standard dataset)
        #mean_displacement = df['Displacement'].mean()
        #df['Displacement'].fillna(mean_displacement, inplace=True)
        ```
    *   **Important Note:** Choose the imputation method carefully based on the nature of the data and the potential impact on the analysis. Deleting rows/columns can lead to information loss.  Imputation can introduce bias if not done thoughtfully.

### 4. Selecting Relevant Features

*   **Goal:** Focus on the features that are most relevant to the task of predicting MPG based on engine displacement.
*   **Selection:**
    ```python
    # Select 'Displacement' as the independent variable (X) and 'MPG' as the dependent variable (y)
    X = df[['Displacement']]  # Use double brackets to create a DataFrame
    y = df['MPG']
    ```
*   **Explanation:**
    *   `X = df[['Displacement']]`: Selects the 'Displacement' column as the independent variable and creates a new DataFrame `X`.  Using double brackets `[['...']]` is crucial to maintain the data structure as a DataFrame (required for most scikit-learn models).
    *   `y = df['MPG']`: Selects the 'MPG' column as the dependent variable (target) and creates a Pandas Series `y`.

### 5. Preprocessing the Selected Features

*   **Scaling:**  Scaling can be important, particularly for polynomial regression with higher degrees, as it can prevent numerical instability and improve model performance.  Standardization (scaling to have zero mean and unit variance) and Min-Max scaling (scaling to a range between 0 and 1) are common options. However, scaling is often *not strictly necessary* for simple polynomial regression using a single feature like `Displacement`, but it's good practice to consider.
    ```python
    from sklearn.preprocessing import StandardScaler #or MinMaxScaler

    # Initialize the scaler
    scaler = StandardScaler()  #or MinMaxScaler()

    # Fit the scaler to the independent variable (Displacement) and transform it
    X_scaled = scaler.fit_transform(X)

    #Optional: Can also scale the dependent variable
    #y_scaled = scaler.fit_transform(y.values.reshape(-1,1)) #need to reshape y

    # Convert scaled data back to DataFrame (for easier handling, optional)
    X = pd.DataFrame(X_scaled, columns=['Displacement'])

    #y = pd.Series(y_scaled.flatten())  #For scaled y, need to revert to Series
    ```

*   **Explanation:**
    *   `StandardScaler()` or `MinMaxScaler()`: Initializes the chosen scaler.
    *   `scaler.fit_transform(X)`: Fits the scaler to the data (calculates mean, standard deviation, or min/max) and transforms the data.
    * `X = pd.DataFrame(X_scaled, columns=['Displacement'])`:  Creates a dataframe again, and names the column for readability.
*   **Data Cleaning:** Review the data for unusual or incorrect values.  This might involve checking for outliers, typos, or inconsistencies.  In this specific dataset, you might want to confirm that displacement values are reasonable for car engines.

### 6. Preparing Data for Regression Modeling

*   **Data splitting:** Divide the dataset into training and testing sets.  The training set is used to train the regression models, and the testing set is used to evaluate their performance.
    ```python
    from sklearn.model_selection import train_test_split

    # Split the data into training and testing sets (e.g., 80% training, 20% testing)
    X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)  # random_state for reproducibility

    print("X_train shape:", X_train.shape)
    print("X_test shape:", X_test.shape)
    print("y_train shape:", y_train.shape)
    print("y_test shape:", y_test.shape)
    ```

*   **Explanation:**
    *   `train_test_split()`: Splits the data into training and testing sets.
    *   `test_size=0.2`: Specifies that 20% of the data should be used for testing.
    *   `random_state=42`: Sets a random seed to ensure consistent splitting of the data across multiple runs.

### Practice Questions/Exercises

1.  **Loading Data:** Write code to load the Auto MPG dataset from a local CSV file named 'auto-mpg.csv'.  Display the first 10 rows of the DataFrame.
    ```python
    import pandas as pd
    df = pd.read_csv('auto-mpg.csv')
    print(df.head(10))
    ```

2.  **Missing Values:** Check for missing values in the Auto MPG dataset. If any missing values are present, replace them with the mean of the corresponding column.
    ```python
    import pandas as pd
    import numpy as np
    df = pd.read_csv('auto-mpg.csv')
    #Assumes missing values are '?'
    df = df.replace('?', np.nan)
    print(df.isnull().sum())
    df['Horsepower'] = df['Horsepower'].astype('float') # Necessary before mean imputation
    df['Horsepower'].fillna(df['Horsepower'].mean(), inplace=True)

    #Verify the missing values are handled
    print(df.isnull().sum())
    ```

3.  **Feature Selection:** Select the 'Weight' column as the independent variable and 'MPG' as the dependent variable. Create separate DataFrames/Series for the independent and dependent variables.
    ```python
    import pandas as pd
    df = pd.read_csv('auto-mpg.csv')
    X = df[['Weight']]
    y = df['MPG']
    print(X.head())
    print(y.head())
    ```

4.  **Data Splitting:** Split the dataset (using 'Displacement' as the independent variable and 'MPG' as the dependent variable) into training and testing sets with an 80/20 split. Use a `random_state` of 123.  Print the shapes of the resulting training and testing sets.

    ```python
    import pandas as pd
    from sklearn.model_selection import train_test_split
    df = pd.read_csv('auto-mpg.csv')
    X = df[['Displacement']]
    y = df['MPG']
    X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=123)
    print("X_train shape:", X_train.shape)
    print("X_test shape:", X_test.shape)
    print("y_train shape:", y_train.shape)
    print("y_test shape:", y_test.shape)
    ```

### Important Points to Remember

*   Always inspect your data after loading it to understand its structure and identify any potential issues.
*   Handling missing values appropriately is crucial for building accurate models.  Consider the impact of different imputation methods.
*   Feature selection helps focus the analysis on the most relevant variables.
*   Data splitting ensures that you can evaluate the performance of your models on unseen data.
*   `random_state` is useful for reproducibility, especially when debugging.  Remove `random_state` when deploying the final model to avoid bias.

This comprehensive guide provides a solid foundation for loading and preprocessing the Auto MPG dataset for polynomial regression. The following modules will build on this base, covering polynomial feature generation, model training, evaluation, and comparison with linear regression. Remember that data preprocessing is a critical step in any machine learning project, and understanding the characteristics of your data is essential for building effective models.
