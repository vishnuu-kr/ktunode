---
title: "Load and preprocess the Titanic dataset."
subject: "MACHINE LEARNING LAB"
module: "Module 19: Implement bagging and boosting ensemble methods on the Titanic dataset. Compare the performance of both methods in terms of accuracy, precision, recall, and F1"
branch: "Computer Science and Engineering"
semester: 5
topicId: "684162770fc9aa1fdbc8b9ad"
status: "completed"
scrapedAt: "2026-05-20T16:48:14.137Z"
---
## Machine Learning Lab: Module 19 - Titanic Dataset: Bagging vs. Boosting - Load and Preprocess

**Module Goal:** Implement bagging and boosting ensemble methods on the Titanic dataset and compare their performance.

**Topic:** Load and preprocess the Titanic dataset.

**Learning Outcomes:**

*   Understand the Titanic dataset and its features.
*   Learn how to load the Titanic dataset into a suitable data structure (e.g., Pandas DataFrame).
*   Identify and handle missing values in the dataset.
*   Convert categorical features into numerical representations.
*   Split the dataset into training and testing sets.
*   Prepare the data for use in machine learning models.

### 1. Understanding the Titanic Dataset

*   **Background:** The Titanic dataset is a classic dataset used in machine learning for classification tasks. It contains information about passengers on the Titanic, including whether or not they survived. The goal is to predict survival based on various features.

*   **Key Features:**
    *   **PassengerId:** A unique identifier for each passenger. (Typically not used for prediction)
    *   **Survived:** Whether the passenger survived (0 = No, 1 = Yes). This is the target variable.
    *   **Pclass:** Passenger class (1 = 1st, 2 = 2nd, 3 = 3rd).  Higher class generally correlated with better survival chances.
    *   **Name:** Passenger's name. Can be used for feature engineering (e.g., extracting titles).
    *   **Sex:** Passenger's sex (male/female).  Gender was a significant factor in survival.
    *   **Age:** Passenger's age. Often contains missing values.
    *   **SibSp:** Number of siblings/spouses aboard the Titanic.
    *   **Parch:** Number of parents/children aboard the Titanic.
    *   **Ticket:** Ticket number.  May have some patterns, but often difficult to use directly.
    *   **Fare:** Passenger fare.  Correlates with passenger class.
    *   **Cabin:** Cabin number. Contains many missing values.
    *   **Embarked:** Port of embarkation (C = Cherbourg, Q = Queenstown, S = Southampton).

### 2. Loading the Titanic Dataset

*   **Key Concept:**  We'll use the Pandas library in Python to load and manipulate the dataset. Pandas provides powerful data structures like DataFrames that make it easy to work with tabular data.

*   **Code Example (using Pandas):**

    ```python
    import pandas as pd

    # Load the training and testing datasets
    train_data = pd.read_csv("train.csv")  # Replace "train.csv" with the actual file path
    test_data = pd.read_csv("test.csv")  # Replace "test.csv" with the actual file path

    # Display the first few rows of the training data
    print("Training Data:")
    print(train_data.head())

    # Display the first few rows of the testing data
    print("\nTesting Data:")
    print(test_data.head())

    # Display the shape of the training and testing data
    print("\nTraining data shape:", train_data.shape)
    print("Testing data shape:", test_data.shape)
    ```

*   **Explanation:**
    *   `import pandas as pd`: Imports the Pandas library and gives it the alias `pd`.
    *   `pd.read_csv("train.csv")`: Reads the CSV file named "train.csv" into a Pandas DataFrame.  Make sure this file is in the same directory as your script, or provide the correct path.
    *   `train_data.head()`: Displays the first 5 rows of the DataFrame, giving you a quick overview of the data.  You can specify the number of rows by passing an argument (e.g., `train_data.head(10)`).
    *   `train_data.shape`: Returns a tuple representing the dimensions of the DataFrame (rows, columns).

### 3. Identifying and Handling Missing Values

*   **Key Concept:** Missing data can negatively impact the performance of machine learning models. It's crucial to identify missing values and handle them appropriately. Common strategies include:
    *   **Imputation:** Replacing missing values with estimated values (e.g., mean, median, mode).
    *   **Deletion:** Removing rows or columns with missing values.  Use with caution, as it can lead to data loss.

*   **Identifying Missing Values:**

    ```python
    # Check for missing values
    print("Missing values in training data:")
    print(train_data.isnull().sum())

    print("\nMissing values in testing data:")
    print(test_data.isnull().sum())
    ```

    This code will print the number of missing values for each column in the training and testing datasets.  You'll likely find missing values in the 'Age' and 'Cabin' columns, and potentially 'Embarked' (in the training set) and 'Fare' (in the testing set).

*   **Handling Missing Values (Example - Imputation with Mean/Median):**

    ```python
    # Impute missing Age values with the median age
    train_data['Age'].fillna(train_data['Age'].median(), inplace=True)
    test_data['Age'].fillna(test_data['Age'].median(), inplace=True)

    # Impute missing Embarked values with the mode (most frequent value)
    train_data['Embarked'].fillna(train_data['Embarked'].mode()[0], inplace=True)

    #Impute missing Fare values with the median fare
    test_data['Fare'].fillna(test_data['Fare'].median(), inplace=True)

    # Drop the Cabin column (too many missing values)
    train_data.drop('Cabin', axis=1, inplace=True)
    test_data.drop('Cabin', axis=1, inplace=True)

    #Verify no missing values remain
    print("\nMissing values in training data after imputation:")
    print(train_data.isnull().sum())

    print("\nMissing values in testing data after imputation:")
    print(test_data.isnull().sum())
    ```

*   **Explanation:**
    *   `train_data['Age'].isnull().sum()`:  Counts the number of missing values in the 'Age' column.
    *   `train_data['Age'].fillna(train_data['Age'].median(), inplace=True)`: Fills the missing values in the 'Age' column with the median age. `inplace=True` modifies the DataFrame directly.  Using the median is often better than the mean for age because age distributions can be skewed.
    *   `train_data['Embarked'].fillna(train_data['Embarked'].mode()[0], inplace=True)`:  Fills missing values in the 'Embarked' column with the mode (most frequent value).  `train_data['Embarked'].mode()` returns a Pandas Series, and `[0]` selects the first (and only) mode.
    *   `train_data.drop('Cabin', axis=1, inplace=True)`: Drops the 'Cabin' column. `axis=1` specifies that we're dropping a column.

*   **Important Note:** Choose imputation strategies carefully.  The best strategy depends on the specific data and the model you're using.  Consider using more sophisticated imputation methods (e.g., using other features to predict missing age values) if the data allows.

### 4. Converting Categorical Features into Numerical Representations

*   **Key Concept:** Many machine learning models require numerical input. Categorical features (e.g., 'Sex', 'Embarked') need to be converted into numerical representations.  Common techniques include:
    *   **Label Encoding:** Assigning a unique integer to each category.
    *   **One-Hot Encoding:** Creating a new binary column for each category.

*   **Code Example (using Pandas - One-Hot Encoding):**

    ```python
    # Convert 'Sex' to numerical using one-hot encoding
    train_data = pd.get_dummies(train_data, columns=['Sex'])
    test_data = pd.get_dummies(test_data, columns=['Sex'])

    # Convert 'Embarked' to numerical using one-hot encoding
    train_data = pd.get_dummies(train_data, columns=['Embarked'])
    test_data = pd.get_dummies(test_data, columns=['Embarked'])

    print("\nTraining data after one-hot encoding:")
    print(train_data.head())

    print("\nTesting data after one-hot encoding:")
    print(test_data.head())
    ```

*   **Explanation:**
    *   `pd.get_dummies(train_data, columns=['Sex'])`:  Performs one-hot encoding on the 'Sex' column.  This creates two new columns: 'Sex_female' and 'Sex_male'. A value of 1 in 'Sex_female' indicates the passenger was female, and a value of 1 in 'Sex_male' indicates the passenger was male.
    *   The same process is applied to the 'Embarked' column.

*   **Alternative (Label Encoding using Scikit-learn):**

    ```python
    from sklearn.preprocessing import LabelEncoder

    # Create a LabelEncoder object
    label_encoder = LabelEncoder()

    # Fit and transform the 'Sex' column
    train_data['Sex'] = label_encoder.fit_transform(train_data['Sex'])
    test_data['Sex'] = label_encoder.transform(test_data['Sex']) # Use the fitted encoder on the test data

    # Fit and transform the 'Embarked' column
    train_data['Embarked'] = label_encoder.fit_transform(train_data['Embarked'])
    test_data['Embarked'] = label_encoder.transform(test_data['Embarked']) # Use the fitted encoder on the test data

    print("\nTraining data after label encoding:")
    print(train_data.head())

    print("\nTesting data after label encoding:")
    print(test_data.head())

    ```

    *   `LabelEncoder()`: Creates a LabelEncoder object.
    *   `fit_transform()`: Fits the encoder to the training data (learning the unique categories) and transforms the training data.
    *   `transform()`: Transforms the test data using the *same* encoder fitted to the training data.  This is crucial to ensure consistency between training and testing data.

*   **Choosing between One-Hot Encoding and Label Encoding:**
    *   **One-Hot Encoding:** Generally preferred for categorical features that are not ordinal (i.e., there is no inherent order between the categories). It prevents the model from assuming an ordinal relationship between the categories.  Good for features like 'Sex' and 'Embarked'.
    *   **Label Encoding:** Can be used for ordinal categorical features (e.g., 'Pclass' might be considered ordinal, although one-hot encoding is still often preferred). Can also be used for categorical target variables.  However, be cautious when using it for non-ordinal features, as it can introduce unintended bias.

### 5. Splitting the Dataset into Training and Testing Sets

*   **Key Concept:**  To evaluate the performance of a machine learning model, it's essential to split the dataset into two parts:
    *   **Training set:** Used to train the model.
    *   **Testing set:** Used to evaluate the model's performance on unseen data.  This gives an estimate of how well the model will generalize to new data.

*   **Code Example (using Scikit-learn):**

    ```python
    from sklearn.model_selection import train_test_split

    # Define features (X) and target (y)
    X = train_data.drop(['Survived', 'PassengerId', 'Name', 'Ticket'], axis=1) # Drop irrelevant columns from features
    y = train_data['Survived']

    # Split the data into training and testing sets
    X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)

    print("\nX_train shape:", X_train.shape)
    print("X_test shape:", X_test.shape)
    print("y_train shape:", y_train.shape)
    print("y_test shape:", y_test.shape)
    ```

*   **Explanation:**
    *   `from sklearn.model_selection import train_test_split`: Imports the `train_test_split` function.
    *   `X = train_data.drop(['Survived', 'PassengerId', 'Name', 'Ticket'], axis=1)`: Creates a DataFrame `X` containing the features.  We drop the 'Survived' column (because it's the target variable), 'PassengerId', 'Name', and 'Ticket' (because they are generally not useful for prediction without further feature engineering).  **Carefully consider which features to include based on their potential relevance.**
    *   `y = train_data['Survived']`: Creates a Series `y` containing the target variable.
    *   `train_test_split(X, y, test_size=0.2, random_state=42)`: Splits the data into training and testing sets.
        *   `test_size=0.2`: Specifies that 20% of the data should be used for testing.
        *   `random_state=42`: Sets the random seed. This ensures that the split is reproducible. Using the same random seed will result in the same split each time you run the code. This is important for comparing different models or tuning hyperparameters.

*   **Important Notes:**
    *   **stratify = y:** For imbalanced datasets (where one class has significantly fewer examples than the other), consider using `stratify=y` in `train_test_split`. This ensures that the class distribution is the same in the training and testing sets.  The Titanic dataset is slightly imbalanced (more deaths than survivors), so stratification is a good idea, though the impact is not dramatic.
    *   **Features in Test Set:** The `test_data` set should also be preprocessed similarly to the `train_data` set, including handling missing values and converting categorical features. You should *not* split `test_data` into train and test sets. The provided `test_data` is for final evaluation *after* training and validating on the training set.

### 6. Preparing the Data for Machine Learning Models

*   **Key Concept:**  After handling missing values, converting categorical features, and splitting the data, you might need to further prepare the data for specific machine learning models. Common steps include:

    *   **Feature Scaling:** Scaling numerical features to a similar range. This is important for models that are sensitive to feature scaling (e.g., Support Vector Machines, K-Nearest Neighbors, Neural Networks).  Common scaling methods include:
        *   **StandardScaler:** Standardizes features by removing the mean and scaling to unit variance.
        *   **MinMaxScaler:** Scales features to a range between 0 and 1.
    *   **Feature Engineering:** Creating new features from existing features. This can improve the model's performance by capturing non-linear relationships or interactions between features.  For the Titanic dataset, this might include:
        *   Extracting titles from the 'Name' column (e.g., Mr., Mrs., Miss., Master.).
        *   Creating a 'FamilySize' feature by combining 'SibSp' and 'Parch'.
        *   Creating a 'IsAlone' feature based on 'FamilySize'.
    *   **Feature Selection:** Selecting the most relevant features to improve model performance and reduce complexity.

*   **Code Example (Feature Scaling using StandardScaler):**

    ```python
    from sklearn.preprocessing import StandardScaler

    # Create a StandardScaler object
    scaler = StandardScaler()

    # Fit the scaler to the training data and transform it
    X_train = scaler.fit_transform(X_train)

    # Transform the test data using the same scaler
    X_test = scaler.transform(X_test)

    print("\nX_train after scaling:")
    print(X_train[:5])  # Print the first 5 rows of the scaled training data
    ```

*   **Explanation:**
    *   `StandardScaler()`: Creates a StandardScaler object.
    *   `scaler.fit_transform(X_train)`: Fits the scaler to the training data (calculating the mean and standard deviation of each feature) and transforms the training data.  Crucially, we only *fit* on the training data to avoid data leakage from the test set.
    *   `scaler.transform(X_test)`: Transforms the test data using the *same* scaler fitted to the training data.

*   **Applying to full Test set:**

    ```python
    # Prepare the provided test data, following steps performed on training data

    # Drop irrelevant features from test data set.
    X_final_test = test_data.drop(['PassengerId', 'Name', 'Ticket'], axis=1)

    #Scale test data
    X_final_test = scaler.transform(X_final_test)
    print("\nX_final_test after scaling:")
    print(X_final_test[:5])
    ```

### Practice Questions and Exercises

1.  **Question:** What is the purpose of splitting the dataset into training and testing sets?
    *   **Answer:** To evaluate the model's performance on unseen data and estimate its ability to generalize to new data.

2.  **Question:** Why is it important to handle missing values in the dataset?
    *   **Answer:** Missing values can negatively impact the performance of machine learning models.

3.  **Question:** Explain the difference between label encoding and one-hot encoding. When should you use each method?
    *   **Answer:** Label encoding assigns a unique integer to each category. One-hot encoding creates a new binary column for each category. One-hot encoding is generally preferred for non-ordinal categorical features, while label encoding can be used for ordinal categorical features or the target variable.

4.  **Exercise:** Load the Titanic dataset, identify missing values, impute the missing 'Age' values with the mean age, and convert the 'Sex' column to numerical using one-hot encoding. Split the dataset into 80% training and 20% testing sets with a random state of 0.
    *   **Answer:** (Code combined from previous examples)

        ```python
        import pandas as pd
        from sklearn.model_selection import train_test_split
        from sklearn.preprocessing import LabelEncoder

        # Load the training data
        train_data = pd.read_csv("train.csv")

        # Impute missing Age values with the mean age
        train_data['Age'].fillna(train_data['Age'].mean(), inplace=True)

        # Impute missing Embarked values with the mode (most frequent value)
        train_data['Embarked'].fillna(train_data['Embarked'].mode()[0], inplace=True)

        # Drop the Cabin column (too many missing values)
        train_data.drop('Cabin', axis=1, inplace=True)

        # Convert 'Sex' to numerical using one-hot encoding
        train_data = pd.get_dummies(train_data, columns=['Sex'])
        #Convert 'Embarked' to numerical using one-hot encoding
        train_data = pd.get_dummies(train_data, columns=['Embarked'])

        # Define features (X) and target (y)
        X = train_data.drop(['Survived', 'PassengerId', 'Name', 'Ticket'], axis=1)
        y = train_data['Survived']

        # Split the data into training and testing sets
        X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=0)

        print("X_train shape:", X_train.shape)
        print("X_test shape:", X_test.shape)
        ```

5.  **Exercise:**  After splitting the data as in Exercise 4, standardize the numerical features of the training data using `StandardScaler`.

```python
        import pandas as pd
        from sklearn.model_selection import train_test_split
        from sklearn.preprocessing import LabelEncoder, StandardScaler

        # Load the training data
        train_data = pd.read_csv("train.csv")

        # Impute missing Age values with the mean age
        train_data['Age'].fillna(train_data['Age'].mean(), inplace=True)

        # Impute missing Embarked values with the mode (most frequent value)
        train_data['Embarked'].fillna(train_data['Embarked'].mode()[0], inplace=True)

        # Drop the Cabin column (too many missing values)
        train_data.drop('Cabin', axis=1, inplace=True)

        # Convert 'Sex' to numerical using one-hot encoding
        train_data = pd.get_dummies(train_data, columns=['Sex'])
        #Convert 'Embarked' to numerical using one-hot encoding
        train_data = pd.get_dummies(train_data, columns=['Embarked'])

        # Define features (X) and target (y)
        X = train_data.drop(['Survived', 'PassengerId', 'Name', 'Ticket'], axis=1)
        y = train_data['Survived']

        # Split the data into training and testing sets
        X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=0)

        # Create a StandardScaler object
        scaler = StandardScaler()

        # Fit the scaler to the training data and transform it
        X_train = scaler.fit_transform(X_train)

        # Transform the test data using the same scaler
        X_test = scaler.transform(X_test)

        print("X_train shape:", X_train.shape)
        print("X_test shape:", X_test.shape)
```
### Important Points to Remember

*   **Data Exploration:** Always start by exploring the dataset to understand its features, data types, and distributions.
*   **Missing Data:** Handle missing values appropriately using imputation or deletion.
*   **Categorical Features:** Convert categorical features into numerical representations using label encoding or one-hot encoding.
*   **Train-Test Split:** Split the data into training and testing sets to evaluate model performance.
*   **Feature Scaling:** Scale numerical features if necessary for the chosen model.
*   **Data Leakage:** Avoid data leakage by fitting preprocessing steps (e.g., scaling, encoding) only on the training data and then transforming the testing data using the same fitted object.
*   **Reproducibility:** Use a random seed (`random_state`) when splitting the data to ensure reproducibility.
*   **Test Data Usage:** The external `test.csv` dataset is for the *final* evaluation after training and validation on the training data.  Don't split it further.
