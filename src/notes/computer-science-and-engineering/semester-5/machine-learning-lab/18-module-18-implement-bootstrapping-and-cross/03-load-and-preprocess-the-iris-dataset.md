---
title: "Load and preprocess the Iris dataset."
subject: "MACHINE LEARNING LAB"
module: "Module 18: Implement bootstrapping and cross"
branch: "Computer Science and Engineering"
semester: 5
topicId: "684162770fc9aa1fdbc8b9a6"
status: "completed"
scrapedAt: "2026-05-20T16:48:09.855Z"
---
## MACHINE LEARNING LAB - Module 18: Implement Bootstrapping and Cross-Validation

**Topic:** Load and Preprocess the Iris Dataset

**Learning Outcomes:**

*   Understand the Iris dataset and its characteristics.
*   Load the Iris dataset using appropriate Python libraries (e.g., `scikit-learn`, `pandas`).
*   Perform basic data exploration (e.g., descriptive statistics, visualization).
*   Preprocess the data, including handling missing values (if any) and scaling/normalization.
*   Split the dataset into training and testing sets.

---

### 1. Understanding the Iris Dataset

*   **Definition:** The Iris dataset is a classic dataset in machine learning and statistics. It's often used for introductory classification tasks.
*   **Content:** It contains measurements for 150 Iris flowers, with 50 flowers from each of the three species:
    *   *Iris setosa*
    *   *Iris versicolor*
    *   *Iris virginica*
*   **Features:** The dataset includes four features measured in centimeters:
    *   Sepal length
    *   Sepal width
    *   Petal length
    *   Petal width
*   **Target Variable:** The species of Iris flower (setosa, versicolor, virginica).
*   **Data Type:** The features are numeric (continuous), and the target variable is categorical (nominal).
*   **Common Uses:** Classification problems, demonstration of machine learning algorithms, data exploration and visualization.

**Key Concepts:**

*   **Feature:** An individual measurable property or characteristic of a phenomenon being observed. In this case, the sepal and petal measurements.
*   **Target Variable (Label):** The variable we want to predict. In this case, the Iris species.
*   **Classification:** A machine learning task where the goal is to assign data points to predefined categories (classes).

---

### 2. Loading the Iris Dataset in Python

*   **Libraries:** We'll use `scikit-learn` (sklearn) and `pandas` for loading and manipulating the dataset.

    ```python
    # Import necessary libraries
    import pandas as pd
    from sklearn.datasets import load_iris
    ```

*   **Loading using `sklearn.datasets.load_iris`:**  This method loads the Iris dataset as a NumPy array-like object.
    ```python
    # Load the Iris dataset
    iris = load_iris()

    # Access data, target, feature_names, and DESCR
    data = iris.data
    target = iris.target
    feature_names = iris.feature_names
    #description = iris.DESCR #Optional, gives you description of dataset
    ```

*   **Loading into a Pandas DataFrame (recommended for better manipulation):**  This creates a tabular structure for easy data exploration.
    ```python
    # Create a Pandas DataFrame
    df = pd.DataFrame(data, columns=feature_names)
    df['target'] = target
    df['species'] = pd.Categorical.from_codes(iris.target, iris.target_names) #create species column using names from data

    print(df.head())  # Display the first few rows
    ```

**Example:**

```python
import pandas as pd
from sklearn.datasets import load_iris

iris = load_iris()
df = pd.DataFrame(iris.data, columns=iris.feature_names)
df['target'] = iris.target
df['species'] = pd.Categorical.from_codes(iris.target, iris.target_names)


print(df.head())

```

**Output:**

```
   sepal length (cm)  sepal width (cm)  petal length (cm)  petal width (cm)  target species
0                5.1             3.5              1.4             0.2       0  setosa
1                4.9             3.0              1.4             0.2       0  setosa
2                4.7             3.2              1.3             0.2       0  setosa
3                4.6             3.1              1.5             0.2       0  setosa
4                5.0             3.6              1.4             0.2       0  setosa
```

---

### 3. Data Exploration

*   **Descriptive Statistics:** Use Pandas methods to understand the distribution of features.

    ```python
    print(df.describe()) # Summary statistics for numerical features
    print(df.info())     # Data types and non-null counts
    print(df['species'].value_counts())  # Distribution of the target variable
    ```

*   **Visualization:** Use libraries like `matplotlib` or `seaborn` to visualize the data.
    ```python
    import matplotlib.pyplot as plt
    import seaborn as sns

    # Histograms
    df.hist(figsize=(10, 8))
    plt.show()

    # Scatter plots
    sns.pairplot(df, hue='species')
    plt.show()

    #Box plots
    sns.boxplot(x='species', y='sepal length (cm)', data=df)
    plt.show()
    ```

**Key Concepts:**

*   **Descriptive Statistics:** Summarizing data using measures like mean, median, standard deviation, min, max, etc.
*   **Histogram:** A graphical representation of the distribution of numerical data.
*   **Scatter Plot:**  A plot that displays the relationship between two variables.
*   **Pair Plot:** A matrix of scatter plots showing the relationships between all pairs of variables in a dataset.
*   **Box Plot:** A standardized way of displaying the distribution of data based on a five number summary (“minimum”, first quartile (Q1), median, third quartile (Q3), and “maximum”). It can tell you about your outliers and what their values are. It can also tell you if your data is symmetrical, how tightly your data is grouped, and if and how your data is skewed.

---

### 4. Data Preprocessing

*   **Missing Values:**  Check for missing values and handle them appropriately.  The Iris dataset is typically clean, so this step may not be necessary, but it's good practice.

    ```python
    print(df.isnull().sum())  # Check for missing values
    ```

    If missing values exist:
        *   **Imputation:** Replace missing values with a specific value (e.g., mean, median, mode).

            ```python
            # Example: Impute with the mean (if applicable and reasonable)
            #df['column_with_missing'].fillna(df['column_with_missing'].mean(), inplace=True)
            ```

        *   **Removal:**  Remove rows with missing values.  Use sparingly.

            ```python
            #df.dropna(inplace=True)  # Remove rows with any missing values
            ```

*   **Scaling/Normalization:** Scale numerical features to a similar range. This is important for algorithms that are sensitive to feature scaling (e.g., Support Vector Machines, Neural Networks).

    *   **StandardScaler (Standardization):**  Scales data to have a mean of 0 and a standard deviation of 1.
        ```python
        from sklearn.preprocessing import StandardScaler

        scaler = StandardScaler()
        df[['sepal length (cm)', 'sepal width (cm)', 'petal length (cm)', 'petal width (cm)']] = scaler.fit_transform(df[['sepal length (cm)', 'sepal width (cm)', 'petal length (cm)', 'petal width (cm)']])
        print(df.head())
        ```

    *   **MinMaxScaler (Normalization):**  Scales data to a range between 0 and 1.
        ```python
        from sklearn.preprocessing import MinMaxScaler

        scaler = MinMaxScaler()
        df[['sepal length (cm)', 'sepal width (cm)', 'petal length (cm)', 'petal width (cm)']] = scaler.fit_transform(df[['sepal length (cm)', 'sepal width (cm)', 'petal length (cm)', 'petal width (cm)']])
        print(df.head())
        ```

**Key Concepts:**

*   **Missing Values:** Data points with incomplete or unknown information.
*   **Imputation:** The process of replacing missing values with estimated values.
*   **Scaling:** Transforming numerical data to a specific range (e.g., 0 to 1).
*   **Normalization:** A scaling technique that scales values between 0 and 1.
*   **Standardization:** A scaling technique that transforms values to have a mean of 0 and a standard deviation of 1.

---

### 5. Splitting the Dataset

*   **Purpose:**  Divide the dataset into two subsets:
    *   **Training Set:** Used to train the machine learning model.
    *   **Testing Set:** Used to evaluate the performance of the trained model on unseen data.

*   **Method:** Use `train_test_split` from `scikit-learn`.
    ```python
    from sklearn.model_selection import train_test_split

    # Separate features (X) and target (y)
    X = df[['sepal length (cm)', 'sepal width (cm)', 'petal length (cm)', 'petal width (cm)']]
    y = df['target']

    # Split the data into training and testing sets
    X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.3, random_state=42) # 70% training, 30% testing, random_state for reproducibility

    print("X_train shape:", X_train.shape)
    print("X_test shape:", X_test.shape)
    print("y_train shape:", y_train.shape)
    print("y_test shape:", y_test.shape)
    ```

**Key Concepts:**

*   **Training Set:** The portion of the data used to train the machine learning model.
*   **Testing Set:** The portion of the data used to evaluate the performance of the trained model.
*   **test_size:**  The proportion of the dataset to include in the test split (e.g., 0.3 means 30% for testing).
*   **random_state:**  A seed value for the random number generator. Setting this ensures reproducibility of the split.

---

### Complete Example Code:

```python
import pandas as pd
from sklearn.datasets import load_iris
from sklearn.model_selection import train_test_split
from sklearn.preprocessing import StandardScaler
import matplotlib.pyplot as plt
import seaborn as sns

# 1. Load the Iris dataset
iris = load_iris()
df = pd.DataFrame(iris.data, columns=iris.feature_names)
df['target'] = iris.target
df['species'] = pd.Categorical.from_codes(iris.target, iris.target_names)

# 2. Data Exploration
print("Dataframe Head:")
print(df.head())
print("\nDescriptive Statistics:")
print(df.describe())
print("\nSpecies Distribution:")
print(df['species'].value_counts())

# Visualization (Optional, but highly recommended)
sns.pairplot(df, hue='species')
plt.show()

# 3. Data Preprocessing (Scaling)
scaler = StandardScaler()
X = df[['sepal length (cm)', 'sepal width (cm)', 'petal length (cm)', 'petal width (cm)']]
X_scaled = scaler.fit_transform(X)  # Scale features, avoiding scaling the target

# Convert scaled array back to a DataFrame for easier handling
X_scaled_df = pd.DataFrame(X_scaled, columns=X.columns)

#Reassign X to scaled dataframe
X = X_scaled_df

y = df['target']

# 4. Split the dataset
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.3, random_state=42)

print("\nX_train shape:", X_train.shape)
print("X_test shape:", X_test.shape)
print("y_train shape:", y_train.shape)
print("y_test shape:", y_test.shape)
```

---

### Practice Questions/Exercises:

1.  **Load the Iris dataset and print the first 10 rows.** (Answer: Already covered in the example code)
2.  **Calculate and print the mean and standard deviation of 'sepal length (cm)'.** (Answer below)
3.  **Create a scatter plot of 'sepal length (cm)' vs. 'sepal width (cm)', colored by the 'species'.** (Answer: Already covered in the example code, but try to do it yourself.)
4.  **Split the dataset into 80% training and 20% testing sets with `random_state=123`.** (Answer: Change the `test_size` and `random_state` parameters in `train_test_split`).
5.  **Check if there are any null values in the dataframe.** (Answer: Included in the example code - `df.isnull().sum()`)

**Answers to Practice Questions:**

**Question 2:**

```python
import pandas as pd
from sklearn.datasets import load_iris

iris = load_iris()
df = pd.DataFrame(iris.data, columns=iris.feature_names)

sepal_length_mean = df['sepal length (cm)'].mean()
sepal_length_std = df['sepal length (cm)'].std()

print(f"Mean sepal length: {sepal_length_mean}")
print(f"Standard deviation of sepal length: {sepal_length_std}")
```

---

### Important Points to Remember:

*   Always understand your data before applying any machine learning algorithms.
*   Data preprocessing is a crucial step for improving model performance.
*   Choose appropriate scaling techniques based on your data and the chosen algorithm.
*   Ensure proper splitting of the dataset to avoid overfitting.
*   Set `random_state` for reproducibility.

This comprehensive guide provides a solid foundation for loading, exploring, and preprocessing the Iris dataset, a fundamental step for many machine learning tasks involving this dataset. Remember to experiment and practice to solidify your understanding!
