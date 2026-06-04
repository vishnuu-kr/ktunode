---
title: "Implement linear regression with one variable on the California Housing dataset to predict housing prices based on a single feature (e.g., the average number of rooms per dwelling)."
subject: "MACHINE LEARNING LAB"
module: "Module 1: Implement linear regression with one variable on the California Housing dataset to predict housing prices based on a single feature (e.g., the average number of rooms per dwelling)."
branch: "Computer Science and Engineering"
semester: 5
topicId: "684162770fc9aa1fdbc8b92d"
status: "completed"
scrapedAt: "2026-05-20T16:46:54.164Z"
---
# MACHINE LEARNING LAB - Module 1: Linear Regression with One Variable on California Housing Dataset

**Topic:** Implement linear regression with one variable on the California Housing dataset to predict housing prices based on a single feature (e.g., the average number of rooms per dwelling).

**Description:** Implementing a simple linear regression model to predict housing prices using a single feature from the California Housing dataset.

**Learning Outcomes:**

*   Understand the concept of linear regression with one variable.
*   Load and preprocess the California Housing dataset using appropriate libraries (e.g., Scikit-learn).
*   Select a single feature from the dataset as the independent variable (e.g., average number of rooms).
*   Implement the linear regression algorithm using NumPy or a machine learning library (e.g., Scikit-learn).
*   Train the model using the selected feature and corresponding housing prices.
*   Evaluate the model's performance using appropriate metrics (e.g., Mean Squared Error, R-squared).
*   Visualize the regression line and data points.
*   Interpret the model's coefficients (slope and intercept).

## 1. Understanding Linear Regression with One Variable (Simple Linear Regression)

*   **Definition:** Simple linear regression aims to model the relationship between a single independent variable (feature) and a dependent variable (target variable) by fitting a linear equation to the observed data.

*   **Equation:**  The linear equation is represented as:

    `y = mx + b`

    Where:

    *   `y` is the predicted value of the dependent variable (target). In our case, this is the house price.
    *   `x` is the value of the independent variable (feature).  In our case, this could be the average number of rooms.
    *   `m` is the slope of the line, representing the change in `y` for a unit change in `x`.  Also known as the coefficient.
    *   `b` is the y-intercept, representing the value of `y` when `x` is zero.  Also known as the bias.

*   **Goal:** The goal of linear regression is to find the best values for `m` and `b` that minimize the difference between the predicted values (`y`) and the actual values of the target variable.  This difference is often measured using a cost function.

*   **Cost Function:**  The most common cost function is the Mean Squared Error (MSE):

    `MSE = (1/n) * Σ(yᵢ - ŷᵢ)²`

    Where:

    *   `n` is the number of data points.
    *   `yᵢ` is the actual value of the target variable for the i-th data point.
    *   `ŷᵢ` is the predicted value of the target variable for the i-th data point.

*   **Minimizing the Cost Function:**  Techniques like Ordinary Least Squares (OLS) or Gradient Descent are used to find the values of `m` and `b` that minimize the MSE.

## 2. Loading and Preprocessing the California Housing Dataset

*   **Dataset Source:**  The California Housing dataset is often available through libraries like Scikit-learn.

*   **Loading with Scikit-learn:**

    ```python
    from sklearn.datasets import fetch_california_housing
    import pandas as pd

    # Load the dataset
    housing = fetch_california_housing(as_frame=True)
    df = housing.frame  #dataframe version is better for visualization

    # Print information about the dataset
    print(housing.DESCR)  # Print description
    print(df.head()) # Show the first few rows
    print(df.info())  # Check data types and missing values
    ```

*   **Data Exploration:**

    *   `housing.DESCR`: Provides a description of the dataset, including the features and target variable.
    *   `df.head()`: Displays the first few rows of the dataset to get a glimpse of the data.
    *   `df.info()`: Shows information about the data types of each column and the number of non-null values, which is crucial for identifying potential data cleaning needs.
    *   `df.describe()`: Provides descriptive statistics such as mean, standard deviation, minimum, maximum, and quartiles for each numerical feature. This helps understand the data distribution.
    *   `df.isnull().sum()`:  Checks for missing values in each column.  Address missing values with imputation or removal. In this case, the dataset is clean and does not contain null values

*   **Preprocessing:**

    *   **Feature Scaling (Optional but Recommended):**  Scaling features can improve the performance of gradient descent.  Common methods include:
        *   **StandardScaler:** Standardizes features by removing the mean and scaling to unit variance.
        *   **MinMaxScaler:** Scales features to a specific range (e.g., 0 to 1).

        ```python
        from sklearn.preprocessing import StandardScaler

        scaler = StandardScaler()
        # Assuming 'MedInc' is the feature and 'MedHouseVal' is the target, scale the feature
        df['MedInc'] = scaler.fit_transform(df[['MedInc']])  # Fit and transform
        ```

*   **Splitting into Training and Testing Sets:**  Divide the dataset into training and testing sets to evaluate the model's performance on unseen data.

    ```python
    from sklearn.model_selection import train_test_split

    X = df[['MedInc']]  # Feature (independent variable)
    y = df['MedHouseVal']  # Target (dependent variable)

    X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)  # 80% train, 20% test, reproducible split
    ```

## 3. Selecting a Single Feature

*   **Feature Selection Rationale:** Choosing a feature that has a strong correlation with the target variable (housing prices) is essential for effective linear regression.  Inspect the feature correlations to inform your choice.

*   **Example: Average Number of Rooms (Rooms):**

    ```python
    X = df[['AveRooms']]  # Average number of rooms
    y = df['MedHouseVal']  # Median house value (target variable)

    X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)
    ```

    Other features to consider include 'MedInc', 'HouseAge', 'AveBedrms'.

## 4. Implementing Linear Regression

**A. Using NumPy (Implementing from Scratch - for Understanding):**

```python
import numpy as np

class LinearRegression:
    def __init__(self):
        self.m = None  # Slope
        self.b = None  # Intercept

    def fit(self, X, y, learning_rate=0.01, n_iterations=1000):
        """
        Fits the linear regression model to the training data using gradient descent.

        Args:
            X (numpy array): Input features (independent variable).
            y (numpy array): Target variable (dependent variable).
            learning_rate (float): The step size for gradient descent.
            n_iterations (int): The number of iterations to perform gradient descent.
        """
        n_samples = X.shape[0]
        self.m = 0  # Initialize slope
        self.b = 0  # Initialize intercept

        # Gradient Descent
        for _ in range(n_iterations):
            # Calculate predictions
            y_predicted = self.m * X.flatten() + self.b # flatten to handle 2D arrays

            # Calculate gradients
            dm = (1/n_samples) * np.sum((y_predicted - y) * X.flatten()) # flatten to handle 2D arrays
            db = (1/n_samples) * np.sum(y_predicted - y)

            # Update parameters
            self.m -= learning_rate * dm
            self.b -= learning_rate * db

    def predict(self, X):
        """
        Predicts the target variable for the given input features.

        Args:
            X (numpy array): Input features (independent variable).

        Returns:
            numpy array: Predicted target variable values.
        """
        return self.m * X.flatten() + self.b # flatten to handle 2D arrays

# Usage
X_train_np = X_train.to_numpy()
y_train_np = y_train.to_numpy()
X_test_np = X_test.to_numpy()

model = LinearRegression()
model.fit(X_train_np, y_train_np) #training needs numpy arrays
y_pred = model.predict(X_test_np) #prediction needs numpy arrays

print(f"Slope (m): {model.m}")
print(f"Intercept (b): {model.b}")
```

**B. Using Scikit-learn (Recommended for Practical Use):**

```python
from sklearn.linear_model import LinearRegression

# Create a linear regression model
model = LinearRegression()

# Train the model
model.fit(X_train, y_train)

# Make predictions on the test set
y_pred = model.predict(X_test)

# Print coefficients
print(f"Slope (m): {model.coef_[0]}") #Accessing the single coefficient
print(f"Intercept (b): {model.intercept_}")
```

## 5. Evaluating the Model's Performance

*   **Metrics:**

    *   **Mean Squared Error (MSE):** Measures the average squared difference between predicted and actual values.  Lower MSE indicates better performance.
    *   **R-squared (Coefficient of Determination):** Represents the proportion of variance in the dependent variable that is predictable from the independent variable(s).  Values range from 0 to 1, with higher values indicating a better fit.

*   **Calculating Metrics:**

    ```python
    from sklearn.metrics import mean_squared_error, r2_score

    # Calculate MSE
    mse = mean_squared_error(y_test, y_pred)

    # Calculate R-squared
    r2 = r2_score(y_test, y_pred)

    print(f"Mean Squared Error: {mse}")
    print(f"R-squared: {r2}")
    ```

*   **Interpretation:**

    *   **MSE:** A low MSE indicates that the model's predictions are close to the actual values.  However, the absolute value of MSE is hard to interpret without context.
    *   **R-squared:** An R-squared of 0.70 means that 70% of the variance in housing prices is explained by the average number of rooms (or whatever feature you chose).  A higher R-squared is generally desirable.

## 6. Visualizing the Regression Line and Data Points

*   **Plotting with Matplotlib:**

    ```python
    import matplotlib.pyplot as plt

    plt.scatter(X_test, y_test, color='blue', label='Actual Data')
    plt.plot(X_test, y_pred, color='red', linewidth=2, label='Regression Line')
    plt.xlabel('Average Number of Rooms')
    plt.ylabel('Median House Value')
    plt.title('Linear Regression')
    plt.legend()
    plt.show()
    ```

*   **Interpretation:**  The plot visually shows how well the regression line fits the data points.  Ideally, the line should closely follow the trend of the data.

## 7. Interpreting the Model's Coefficients (Slope and Intercept)

*   **Slope (m):**  Represents the change in the median house value for each unit increase in the average number of rooms.  For example, if `m = 100000`, it means that, on average, the house price increases by $100,000 for each additional room.

*   **Intercept (b):**  Represents the predicted median house value when the average number of rooms is zero.  This value may not have a practical interpretation in all cases. For example, it's impossible for a house to have 0 rooms, so consider it just an offset needed for the linear equation to give correct results.

*   **Example:**

    ```
    Slope (m): 45000.50
    Intercept (b): 30000
    ```

    Interpretation:  For each additional room, the house price is predicted to increase by $45,000.  The base price (when there are zero rooms) is $30,000.

## Important Points to Remember

*   Linear regression assumes a linear relationship between the independent and dependent variables.  Always check for linearity before applying linear regression. If the relationship is non-linear, consider using polynomial regression or other non-linear models.
*   Feature scaling can improve the performance of gradient descent.
*   Splitting the data into training and testing sets is crucial for evaluating the model's generalization ability.
*   Choose appropriate evaluation metrics based on the problem.
*   Always interpret the coefficients in the context of the problem.
*   Simple Linear regression may not be the best model if there are multiple factors contributing to housing prices.
*   Outliers can significantly affect the performance of linear regression.  Consider handling outliers appropriately.
*   Always explore and understand the data before building the model.

## Practice Questions/Exercises

**Question 1:**  Why is it important to split the dataset into training and testing sets?

**Answer:** Splitting the dataset allows us to evaluate the model's performance on unseen data. This helps us assess how well the model generalizes to new data and avoid overfitting (memorizing the training data).

**Question 2:** What does the Mean Squared Error (MSE) measure?

**Answer:** MSE measures the average squared difference between the predicted and actual values.  It quantifies the overall error of the model.  Lower MSE indicates better performance.

**Question 3:** How do you interpret the slope coefficient in a linear regression model?

**Answer:** The slope coefficient represents the change in the dependent variable (target) for each unit increase in the independent variable (feature). It tells you how much the target variable is expected to change for every one-unit increase in the feature.

**Question 4:** Write Python code (using Scikit-learn) to load the California housing dataset, select 'MedInc' as the independent variable, and 'MedHouseVal' as the dependent variable, and split the data into training and testing sets (80/20 split with random state 42).

**Answer:**

```python
from sklearn.datasets import fetch_california_housing
from sklearn.model_selection import train_test_split
import pandas as pd

# Load the dataset
housing = fetch_california_housing(as_frame=True)
df = housing.frame

# Select independent and dependent variables
X = df[['MedInc']]  # Independent variable: Median Income
y = df['MedHouseVal']  # Dependent variable: Median House Value

# Split data into training and testing sets
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)

print(f"X_train shape: {X_train.shape}")
print(f"X_test shape: {X_test.shape}")
print(f"y_train shape: {y_train.shape}")
print(f"y_test shape: {y_test.shape}")
```

**Question 5:** You built a linear regression model to predict house prices using the average number of rooms. The slope is calculated to be 50,000 and the intercept is 20,000. If a house has 6 rooms, what is the predicted house price based on the model?

**Answer:**

Predicted house price = (Slope * Average number of rooms) + Intercept
Predicted house price = (50,000 * 6) + 20,000
Predicted house price = 300,000 + 20,000
Predicted house price = 320,000

Therefore, the predicted house price is $320,000.
