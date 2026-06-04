---
title: "Introduction to python for ML - essential python libraries and ML functions (NumPy, pandas, Matplotlib, SciKit-Learn)"
subject: "INTRODUCTION TO MACHINE LEARNING"
module: "Module 3: Introduction to python for ML "
branch: "Electrical and Electronics Engineering"
semester: 5
topicId: "68a200862b85456187f36435"
status: "completed"
scrapedAt: "2026-05-23T16:22:26.146Z"
---
# Introduction to Machine Learning - Module 3: Introduction to Python for ML

## Topic: Essential Python Libraries and ML Functions (NumPy, pandas, Matplotlib, SciKit-Learn)

### 1. Learning Outcomes Covered:

This module directly addresses the following learning outcomes:

*   **CO3: Apply essential Python libraries (NumPy, Pandas, Matplotlib) to clean, pre-process, and visualize data sets, preparing data for machine learning applications.** (Knowledge Level: K3)
*   **CO4: Implement machine learning algorithms (such as linear regression, logistic regression, k-Nearest Neighbours, Decision Trees, SVM, Random Forest, Gradient Boosting, and clustering) in Python and evaluate their performance using relevant metrics.** (Knowledge Level: K3)

While this module focuses on the tools, the ability to use these libraries effectively is foundational for understanding and implementing the concepts covered in CO1 and CO2.

### 2. Introduction to Python for Machine Learning

Python has become the de facto language for Machine Learning and Data Science due to its clear syntax, extensive libraries, and strong community support. This module introduces you to the fundamental libraries that power most ML workflows in Python.

### 3. Essential Python Libraries for ML

#### 3.1. NumPy (Numerical Python)

NumPy is the cornerstone for numerical computation in Python. It provides support for large, multi-dimensional arrays and matrices, along with a collection of high-level mathematical functions to operate on these arrays efficiently.

**Key Concepts and Definitions:**

*   **ndarray:** The fundamental data structure in NumPy. It's a grid of values, all of the same type, indexed by a tuple of non-negative integers.
    *   **Rank:** The number of dimensions of an ndarray.
    *   **Shape:** A tuple of integers indicating the size of the ndarray in each dimension.
    *   **dtype:** The data type of elements in the ndarray.
*   **Vectorization:** Performing operations on entire arrays at once, rather than iterating over elements, leading to significant performance gains.

**Core Functions and Operations:**

*   **Array Creation:**
    *   `np.array([1, 2, 3])`: Creates a 1D array.
    *   `np.array([[1, 2], [3, 4]])`: Creates a 2D array (matrix).
    *   `np.zeros((2, 3))`: Creates an array of zeros.
    *   `np.ones((3, 2))`: Creates an array of ones.
    *   `np.arange(10)`: Creates an array with values from 0 to 9.
    *   `np.linspace(0, 1, 5)`: Creates an array with 5 evenly spaced values between 0 and 1.
*   **Array Attributes:**
    *   `arr.shape`: Returns the shape of the array.
    *   `arr.ndim`: Returns the number of dimensions.
    *   `arr.dtype`: Returns the data type.
    *   `arr.size`: Returns the total number of elements.
*   **Indexing and Slicing:**
    *   `arr[0]`: Accesses the first element.
    *   `arr[0, 1]`: Accesses the element at the first row, second column.
    *   `arr[:, 1]`: Selects all rows for the second column.
    *   `arr[1, :]`: Selects all columns for the second row.
    *   Boolean indexing: `arr[arr > 5]` selects elements greater than 5.
*   **Mathematical Operations:**
    *   Element-wise addition, subtraction, multiplication, division: `arr1 + arr2`, `arr1 - arr2`, `arr1 * arr2`, `arr1 / arr2`.
    *   Matrix multiplication: `np.dot(arr1, arr2)` or `arr1 @ arr2`.
    *   Universal functions (ufuncs): `np.sqrt()`, `np.exp()`, `np.sin()`, `np.log()`.
*   **Broadcasting:** A powerful mechanism that allows NumPy to perform operations on arrays of different shapes.

**Example (from Python Data Science Handbook):**

```python
import numpy as np

# Create a 1D array
a = np.array([0, 1, 2, 3, 4, 5])
print(f"Array a: {a}")

# Access elements
print(f"Element at index 2: {a[2]}")
print(f"Elements from index 2 to 5: {a[2:5]}")

# Create a 2D array
b = np.array([[1, 2, 3], [4, 5, 6]])
print(f"\nArray b:\n{b}")

# Array attributes
print(f"Shape of b: {b.shape}")
print(f"Number of dimensions in b: {b.ndim}")

# Broadcasting example
x = np.array([1, 2, 3])
y = 10
print(f"\nBroadcasting x + y: {x + y}")
```

**Referenced Textbooks:**

*   **Python Data Science Handbook:** Provides extensive coverage of NumPy for data manipulation and numerical operations. (Chapter 2)
*   **Mathematics for Machine Learning:** While not directly focused on Python implementation, it lays the mathematical groundwork for why NumPy's operations are crucial (e.g., matrix algebra for linear models).

**Important Points to Remember:**

*   NumPy arrays are homogeneous (all elements have the same `dtype`).
*   Operations on NumPy arrays are generally much faster than equivalent operations on Python lists due to vectorization.
*   Broadcasting is a key concept for efficient array operations with different shapes.

#### 3.2. Pandas

Pandas is built on top of NumPy and provides high-performance, easy-to-use data structures and data analysis tools. It's essential for data cleaning, manipulation, and exploration.

**Key Concepts and Definitions:**

*   **Series:** A one-dimensional labeled array capable of holding any data type. It's like a column in a spreadsheet or a dictionary.
*   **DataFrame:** A two-dimensional labeled data structure with columns of potentially different types. It's like a spreadsheet or a SQL table. It has an index (row labels) and columns (column labels).

**Core Functions and Operations:**

*   **DataFrame Creation:**
    *   `pd.DataFrame({'col1': [1, 2], 'col2': [3, 4]})`: From a dictionary.
    *   `pd.read_csv('file.csv')`: From a CSV file.
    *   `pd.read_excel('file.xlsx')`: From an Excel file.
*   **Data Inspection:**
    *   `df.head()`: Displays the first 5 rows.
    *   `df.tail()`: Displays the last 5 rows.
    *   `df.info()`: Provides a concise summary of the DataFrame, including index dtype and columns, non-null values, and memory usage.
    *   `df.describe()`: Generates descriptive statistics (count, mean, std, min, max, quartiles) of numerical columns.
    *   `df.columns`: Returns a list of column names.
    *   `df.index`: Returns the DataFrame index.
*   **Data Selection and Indexing:**
    *   `df['column_name']`: Selects a single column (returns a Series).
    *   `df[['col1', 'col2']]`: Selects multiple columns (returns a DataFrame).
    *   `df.loc[row_label]`: Selects rows by label.
    *   `df.iloc[row_index]`: Selects rows by integer position.
    *   `df.loc[row_label, 'column_name']`: Selects a specific element by label.
    *   `df.iloc[row_index, col_index]`: Selects a specific element by integer position.
*   **Data Cleaning and Manipulation:**
    *   **Handling Missing Values:**
        *   `df.isnull()`: Returns a boolean DataFrame indicating missing values.
        *   `df.dropna()`: Removes rows or columns with missing values.
        *   `df.fillna(value)`: Fills missing values with a specified value.
    *   **Filtering Data:**
        *   `df[df['column_name'] > value]`: Filters rows based on a condition.
    *   **Sorting Data:**
        *   `df.sort_values(by='column_name')`: Sorts by a column.
    *   **Grouping Data:**
        *   `df.groupby('column_name')`: Groups data by unique values in a column.
        *   `df.groupby('column_name')['another_column'].mean()`: Calculates the mean of 'another_column' for each group.
    *   **Applying Functions:**
        *   `df['column_name'].apply(function)`: Applies a function to each element in a column.
*   **Concatenation and Merging:**
    *   `pd.concat([df1, df2])`: Concatenates DataFrames vertically or horizontally.
    *   `pd.merge(df1, df2, on='key_column')`: Merges DataFrames based on common columns.

**Example (from Python Data Science Handbook):**

```python
import pandas as pd
import numpy as np

# Create a DataFrame from a dictionary
data = {
    'Name': ['Alice', 'Bob', 'Charlie', 'David', 'Eve'],
    'Age': [25, 30, 22, 35, 28],
    'City': ['New York', 'Los Angeles', 'Chicago', 'Houston', 'Phoenix'],
    'Salary': [70000, 80000, 65000, 90000, np.nan] # Missing salary for Eve
}
df = pd.DataFrame(data)

print("Original DataFrame:")
print(df)

print("\nFirst 3 rows:")
print(df.head(3))

print("\nDataFrame info:")
df.info()

print("\nDescriptive statistics:")
print(df.describe())

print("\nSelecting 'Name' and 'Age' columns:")
print(df[['Name', 'Age']])

print("\nFiltering for Age > 25:")
print(df[df['Age'] > 25])

print("\nHandling missing Salary by filling with the mean:")
df['Salary'].fillna(df['Salary'].mean(), inplace=True)
print(df)

print("\nGrouping by City and calculating average Age:")
print(df.groupby('City')['Age'].mean())
```

**Referenced Textbooks:**

*   **Python Data Science Handbook:** Offers comprehensive guidance on using Pandas for data manipulation, cleaning, and analysis. (Chapter 3)
*   **Introduction to Machine Learning with Python:** Uses Pandas extensively for data loading, preprocessing, and feature engineering.
*   **Python Machine Learning:** Demonstrates Pandas for creating and managing datasets for ML tasks.

**Important Points to Remember:**

*   Pandas DataFrames are incredibly flexible for handling tabular data.
*   Mastering `loc` and `iloc` for data selection is crucial.
*   Efficiently handling missing data is a key step in the ML pipeline.

#### 3.3. Matplotlib

Matplotlib is a powerful and widely used plotting library in Python. It allows you to create static, animated, and interactive visualizations. Visualization is critical for understanding data patterns, model performance, and presenting results.

**Key Concepts and Definitions:**

*   **Figure:** The top-level container for all plot elements.
*   **Axes:** The actual plotting area where data is displayed. A figure can contain multiple axes.
*   **Plotting Functions:** Functions like `plot()`, `scatter()`, `hist()`, `bar()`, `xlabel()`, `ylabel()`, `title()`, `legend()`.

**Core Functions and Operations:**

*   **Basic Plotting:**
    *   `plt.plot(x, y)`: Creates a line plot.
    *   `plt.scatter(x, y)`: Creates a scatter plot.
    *   `plt.hist(data, bins)`: Creates a histogram.
    *   `plt.bar(x, height)`: Creates a bar chart.
*   **Customization:**
    *   `plt.xlabel()`, `plt.ylabel()`: Set axis labels.
    *   `plt.title()`: Set the plot title.
    *   `plt.legend()`: Display a legend for multiple plots.
    *   `plt.grid(True)`: Add a grid to the plot.
    *   `plt.figure(figsize=(width, height))`: Set the figure size.
    *   `plt.subplot(rows, cols, index)`: Create multiple subplots within a figure.
*   **Saving Plots:**
    *   `plt.savefig('plot.png')`: Saves the plot to a file.

**Example (from Python Data Science Handbook):**

```python
import matplotlib.pyplot as plt
import numpy as np

# Data for plotting
x = np.linspace(0, 10, 100)
y_sin = np.sin(x)
y_cos = np.cos(x)

# Create a figure and axes
fig, ax = plt.subplots(figsize=(8, 5))

# Plotting
ax.plot(x, y_sin, label='Sine Wave', color='blue', linestyle='-')
ax.plot(x, y_cos, label='Cosine Wave', color='red', linestyle='--')

# Customization
ax.set_xlabel('X-axis')
ax.set_ylabel('Y-axis')
ax.set_title('Sine and Cosine Waves')
ax.legend()
ax.grid(True)

# Show the plot
plt.show()

# Save the plot
# plt.savefig('sine_cosine_plot.png')

# Subplot example
plt.figure(figsize=(10, 4))

plt.subplot(1, 2, 1) # 1 row, 2 columns, 1st plot
plt.hist(np.random.randn(1000), bins=30, color='skyblue')
plt.title('Histogram')
plt.xlabel('Value')
plt.ylabel('Frequency')

plt.subplot(1, 2, 2) # 1 row, 2 columns, 2nd plot
plt.scatter(x, y_sin, color='green', s=10) # s is marker size
plt.title('Scatter Plot')
plt.xlabel('X')
plt.ylabel('Sine(X)')

plt.tight_layout() # Adjust layout to prevent overlapping
plt.show()
```

**Referenced Textbooks:**

*   **Python Data Science Handbook:** Offers a thorough introduction to Matplotlib for data visualization. (Chapter 4)
*   **Introduction to Machine Learning with Python:** Utilizes Matplotlib extensively for visualizing data distributions, model predictions, and performance metrics.
*   **Python Machine Learning:** Shows how to use Matplotlib to visualize datasets and model results.

**Important Points to Remember:**

*   Visualization is key for understanding your data and model performance.
*   Learn to customize plots for clarity and impact.
*   Matplotlib offers a flexible API for creating a wide variety of plots.

#### 3.4. SciKit-Learn (Scikit-learn)

Scikit-learn is arguably the most important library for practical machine learning in Python. It provides simple and efficient tools for data analysis and machine learning, built upon NumPy, SciPy, and Matplotlib.

**Key Concepts and Definitions:**

*   **Estimator API:** The core API for ML models in scikit-learn. Every estimator has:
    *   `fit(X, y)`: Trains the model on data `X` and target `y`.
    *   `predict(X)`: Predicts the target values for new data `X`.
    *   `transform(X)`: Transforms data `X` (used in preprocessing and dimensionality reduction).
    *   `score(X, y)`: Returns the mean accuracy on the given test data and labels (for classification).
*   **Data Preprocessing:** Modules like `sklearn.preprocessing` offer tools for scaling, encoding, and imputing data.
*   **Model Selection:** Modules like `sklearn.model_selection` provide tools for splitting data, cross-validation, and hyperparameter tuning.
*   **Metrics:** Modules like `sklearn.metrics` offer functions to evaluate model performance.

**Core ML Functions and Algorithms (Examples):**

Scikit-learn implements a wide range of ML algorithms. Here are some key examples:

*   **Supervised Learning:**
    *   **Regression:**
        *   `LinearRegression`: `from sklearn.linear_model import LinearRegression`
        *   `Ridge`, `Lasso`: Regularized linear models.
    *   **Classification:**
        *   `LogisticRegression`: `from sklearn.linear_model import LogisticRegression`
        *   `KNeighborsClassifier`: K-Nearest Neighbors. `from sklearn.neighbors import KNeighborsClassifier`
        *   `SVC`: Support Vector Machines. `from sklearn.svm import SVC`
        *   `DecisionTreeClassifier`: Decision Trees. `from sklearn.tree import DecisionTreeClassifier`
        *   `RandomForestClassifier`: Ensemble of Decision Trees. `from sklearn.ensemble import RandomForestClassifier`
        *   `GradientBoostingClassifier`: Gradient Boosting. `from sklearn.ensemble import GradientBoostingClassifier`
*   **Unsupervised Learning:**
    *   **Clustering:**
        *   `KMeans`: K-Means clustering. `from sklearn.cluster import KMeans`
        *   `DBSCAN`: Density-Based Spatial Clustering of Applications with Noise.
    *   **Dimensionality Reduction:**
        *   `PCA`: Principal Component Analysis. `from sklearn.decomposition import PCA`
        *   `TSNE`: t-Distributed Stochastic Neighbor Embedding.

**Workflow Example (from Introduction to Machine Learning with Python):**

```python
# 1. Import necessary libraries
from sklearn.model_selection import train_test_split
from sklearn.preprocessing import StandardScaler
from sklearn.linear_model import LogisticRegression
from sklearn.metrics import accuracy_score, classification_report
import pandas as pd
import numpy as np

# --- Sample Data Creation (for demonstration) ---
# In a real scenario, you would load data using pandas
data = {
    'feature1': np.random.rand(100) * 10,
    'feature2': np.random.rand(100) * 5,
    'target': np.random.randint(0, 2, 100) # Binary target variable
}
df = pd.DataFrame(data)

X = df[['feature1', 'feature2']]
y = df['target']
# ------------------------------------------------

# 2. Split Data into Training and Testing Sets
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.3, random_state=42)
print(f"Training set size: {X_train.shape[0]}")
print(f"Testing set size: {X_test.shape[0]}")

# 3. Preprocess Data (e.g., Scaling)
scaler = StandardScaler()
X_train_scaled = scaler.fit_transform(X_train) # Fit on training and transform
X_test_scaled = scaler.transform(X_test)      # Transform testing set

# 4. Initialize and Train the Model
model = LogisticRegression()
model.fit(X_train_scaled, y_train)

# 5. Make Predictions
y_pred = model.predict(X_test_scaled)

# 6. Evaluate the Model
accuracy = accuracy_score(y_test, y_pred)
print(f"\nModel Accuracy: {accuracy:.2f}")

print("\nClassification Report:")
print(classification_report(y_test, y_pred))

# --- Example of another model: K-Nearest Neighbors ---
from sklearn.neighbors import KNeighborsClassifier
knn_model = KNeighborsClassifier(n_neighbors=5)
knn_model.fit(X_train_scaled, y_train)
y_pred_knn = knn_model.predict(X_test_scaled)
print(f"\nKNN Model Accuracy: {accuracy_score(y_test, y_pred_knn):.2f}")
```

**Referenced Textbooks:**

*   **Introduction to Machine Learning with Python:** This book is entirely dedicated to using scikit-learn for ML tasks. (Chapters 1-9 cover many of the core functionalities)
*   **Hands-On Machine Learning with Scikit-Learn, Keras, and TensorFlow:** A comprehensive guide that heavily features scikit-learn for traditional ML algorithms. (Chapters 1-7 focus on scikit-learn)
*   **Python Machine Learning:** Provides practical examples of implementing various ML algorithms using scikit-learn.

**Important Points to Remember:**

*   Scikit-learn provides a consistent API for most algorithms.
*   The `fit`/`predict`/`transform` pattern is fundamental.
*   Always split your data into training and testing sets to evaluate performance on unseen data.
*   Preprocessing (like scaling) is often crucial for many algorithms.
*   Scikit-learn offers tools for hyperparameter tuning and cross-validation for robust model evaluation.

### 4. Practice Questions and Exercises

**Question 1 (NumPy):**
Create a NumPy array of shape (3, 4) with random integers between 10 and 50. Then, extract the second row and all elements from the third column.

**Answer 1:**
```python
import numpy as np

# Create array
random_array = np.random.randint(10, 50, size=(3, 4))
print("Random Array:\n", random_array)

# Extract second row (index 1)
second_row = random_array[1, :]
print("\nSecond Row:\n", second_row)

# Extract third column (index 2)
third_column = random_array[:, 2]
print("\nThird Column:\n", third_column)
```

**Question 2 (Pandas):**
Given the following dictionary:
```python
data = {'Product': ['A', 'B', 'C', 'A', 'B', 'C'],
        'Sales': [100, 150, 120, 110, 160, 130],
        'Region': ['North', 'South', 'East', 'West', 'North', 'South']}
```
Create a Pandas DataFrame. Calculate the total sales for each product and find the average sales per region.

**Answer 2:**
```python
import pandas as pd

data = {'Product': ['A', 'B', 'C', 'A', 'B', 'C'],
        'Sales': [100, 150, 120, 110, 160, 130],
        'Region': ['North', 'South', 'East', 'West', 'North', 'South']}

df = pd.DataFrame(data)

# Total sales per product
total_sales_per_product = df.groupby('Product')['Sales'].sum()
print("Total Sales per Product:\n", total_sales_per_product)

# Average sales per region
avg_sales_per_region = df.groupby('Region')['Sales'].mean()
print("\nAverage Sales per Region:\n", avg_sales_per_region)
```

**Question 3 (Matplotlib):**
Create a scatter plot showing the relationship between 'Sales' and 'Product' (assuming 'Product' is treated numerically for visualization purposes, e.g., A=1, B=2, C=3). Label the axes and add a title.

**Answer 3:**
```python
import matplotlib.pyplot as plt
import pandas as pd
import numpy as np # For mapping

data = {'Product': ['A', 'B', 'C', 'A', 'B', 'C'],
        'Sales': [100, 150, 120, 110, 160, 130],
        'Region': ['North', 'South', 'East', 'West', 'North', 'South']}

df = pd.DataFrame(data)

# Map products to numerical values for plotting
product_mapping = {'A': 1, 'B': 2, 'C': 3}
df['Product_Num'] = df['Product'].map(product_mapping)

plt.figure(figsize=(8, 5))
plt.scatter(df['Product_Num'], df['Sales'], color='purple')
plt.xlabel('Product (1=A, 2=B, 3=C)')
plt.ylabel('Sales')
plt.title('Sales vs. Product')
plt.grid(True)
plt.show()
```

**Question 4 (SciKit-Learn):**
Using the DataFrame created in Question 2, assume 'Sales' is your target variable and 'Product_Num' (created in Question 3) is a feature.
1.  Split the data into training and testing sets (70% train, 30% test).
2.  Train a `LinearRegression` model on the training data.
3.  Make predictions on the test data.
4.  Evaluate the model using Mean Squared Error (MSE).

**Answer 4:**
```python
from sklearn.model_selection import train_test_split
from sklearn.linear_model import LinearRegression
from sklearn.metrics import mean_squared_error
import pandas as pd
import numpy as np

data = {'Product': ['A', 'B', 'C', 'A', 'B', 'C'],
        'Sales': [100, 150, 120, 110, 160, 130],
        'Region': ['North', 'South', 'East', 'West', 'North', 'South']}

df = pd.DataFrame(data)
product_mapping = {'A': 1, 'B': 2, 'C': 3}
df['Product_Num'] = df['Product'].map(product_mapping)

X = df[['Product_Num']] # Features (must be 2D)
y = df['Sales']         # Target

# 1. Split data
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.3, random_state=42)

# 2. Train Linear Regression model
model = LinearRegression()
model.fit(X_train, y_train)

# 3. Make predictions
y_pred = model.predict(X_test)

# 4. Evaluate using MSE
mse = mean_squared_error(y_test, y_pred)
print(f"Mean Squared Error (MSE): {mse:.2f}")

# Optional: Print coefficients
print(f"Coefficient (slope): {model.coef_[0]:.2f}")
print(f"Intercept: {model.intercept_:.2f}")
```

### 5. Summary and Key Takeaways

*   **NumPy** is essential for efficient numerical operations, especially with arrays and matrices, forming the backbone of many scientific computations.
*   **Pandas** is your go-to for data manipulation, cleaning, and analysis, providing powerful data structures like Series and DataFrames.
*   **Matplotlib** is crucial for visualizing your data and model results, enabling you to understand patterns and communicate insights effectively.
*   **SciKit-Learn** is the workhorse for implementing machine learning algorithms, offering a consistent API for a vast array of models, preprocessing tools, and evaluation metrics.

Mastering these libraries is a fundamental step in becoming proficient in machine learning with Python, directly supporting your ability to clean, preprocess, visualize, and implement ML models.
