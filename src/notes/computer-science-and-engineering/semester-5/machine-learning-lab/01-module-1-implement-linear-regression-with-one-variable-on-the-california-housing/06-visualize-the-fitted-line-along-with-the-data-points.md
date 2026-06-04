---
title: "Visualize the fitted line along with the data points."
subject: "MACHINE LEARNING LAB"
module: "Module 1: Implement linear regression with one variable on the California Housing dataset to predict housing prices based on a single feature (e.g., the average number of rooms per dwelling)."
branch: "Computer Science and Engineering"
semester: 5
topicId: "684162770fc9aa1fdbc8b932"
status: "completed"
scrapedAt: "2026-05-20T16:46:57.754Z"
---
# MACHINE LEARNING LAB - Module 1: Linear Regression Visualization

## Topic: Visualizing the Fitted Line in Linear Regression with One Variable

### Learning Outcomes:

*   Understand the purpose of visualizing the fitted line in linear regression.
*   Learn how to plot the data points and the fitted line using Python libraries like Matplotlib.
*   Interpret the visualization to assess the fit of the linear regression model.
*   Gain practical experience in implementing and visualizing linear regression.

### 1. Key Concepts and Definitions:

*   **Linear Regression:** A supervised learning algorithm that aims to model the relationship between a dependent variable (target) and one or more independent variables (features) by fitting a linear equation to the observed data.  In this case, we're dealing with **simple linear regression**, which involves only one independent variable.

*   **Dependent Variable (Target):** The variable we are trying to predict (e.g., housing prices).  Often denoted as *y*.

*   **Independent Variable (Feature):** The variable we are using to predict the dependent variable (e.g., average number of rooms). Often denoted as *x*.

*   **Fitted Line (Regression Line):** The line that represents the predicted relationship between the independent and dependent variables based on the linear regression model. The equation of the line is generally represented as:  *y = mx + b*, where:
    *   *y* is the predicted value of the dependent variable.
    *   *x* is the value of the independent variable.
    *   *m* is the slope of the line (also called the coefficient).  It represents the change in *y* for a unit change in *x*.
    *   *b* is the y-intercept (also called the bias or constant). It is the value of *y* when *x* is 0.

*   **Data Points:** The actual observed values of the independent and dependent variables. Represented as (x, y) pairs.

*   **Residuals:** The difference between the actual data points and the predicted values on the fitted line. They represent the error in the model's prediction.

*   **California Housing Dataset:**  A dataset containing information about housing in California, often used for machine learning examples.  We'll be using a feature from this dataset (e.g., average number of rooms) to predict the target variable (housing prices).

### 2. Purpose of Visualization:

Visualizing the fitted line along with the data points serves several important purposes:

*   **Understanding the Relationship:** It helps us visually understand the relationship between the independent and dependent variables. Is it linear, or does it seem like another type of relationship might be more appropriate?
*   **Assessing Model Fit:** It allows us to visually assess how well the fitted line represents the data. Are the data points clustered closely around the line, or are they scattered far away?  A closer fit generally indicates a better model.
*   **Identifying Outliers:** It helps us identify outliers (data points that are far from the general trend). Outliers can significantly impact the linear regression model and may need to be investigated and handled appropriately.
*   **Communicating Results:**  Visualizations are a powerful way to communicate the results of our analysis to others who may not be familiar with the underlying mathematical details.

### 3. Implementation using Python and Matplotlib:

Here's a Python example using scikit-learn and Matplotlib to implement and visualize linear regression on the California Housing dataset:

```python
import numpy as np
import pandas as pd
import matplotlib.pyplot as plt
from sklearn.linear_model import LinearRegression
from sklearn.model_selection import train_test_split
from sklearn.datasets import fetch_california_housing

# 1. Load the California Housing dataset
california = fetch_california_housing()
data = pd.DataFrame(california.data, columns=california.feature_names)
data['MedHouseVal'] = california.target  # Add the target variable to the DataFrame

# 2. Choose the independent variable (feature) and dependent variable (target)
X = data[['AveRooms']]  # Average number of rooms
y = data['MedHouseVal']  # Median house value

# 3. Split the data into training and testing sets (optional but recommended)
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)


# 4. Create a Linear Regression model
model = LinearRegression()

# 5. Train the model using the training data
model.fit(X_train, y_train)

# 6. Make predictions on the entire dataset for plotting
y_pred = model.predict(X)

# 7. Extract the slope (m) and intercept (b)
m = model.coef_[0]
b = model.intercept_

# 8. Visualize the fitted line along with the data points
plt.figure(figsize=(10, 6))
plt.scatter(X, y, label='Data Points')  # Plot the data points
plt.plot(X, y_pred, color='red', linewidth=2, label=f'Fitted Line (y = {m:.2f}x + {b:.2f})')  # Plot the fitted line

plt.xlabel('Average Number of Rooms')
plt.ylabel('Median House Value')
plt.title('Linear Regression: Housing Price vs. Average Rooms')
plt.legend()
plt.grid(True)
plt.show()


# Print the coefficients:
print(f"Slope (m): {m}")
print(f"Intercept (b): {b}")
```

**Explanation of the Code:**

1.  **Import Libraries:** Imports necessary libraries like `numpy`, `pandas`, `matplotlib.pyplot`, `sklearn.linear_model`, `sklearn.model_selection`, and `sklearn.datasets`.
2.  **Load the Dataset:** Loads the California Housing dataset using `fetch_california_housing()` from scikit-learn. Creates a Pandas DataFrame for easier data manipulation.
3.  **Choose Variables:**  Selects the `AveRooms` (average number of rooms) as the independent variable (X) and `MedHouseVal` (median house value) as the dependent variable (y).
4.  **Split Data (Optional):** Splits the data into training and testing sets using `train_test_split()`. This is good practice to evaluate the model's performance on unseen data, but not strictly necessary for the visualization itself.
5.  **Create and Train Model:** Creates a `LinearRegression` object and trains it using the `fit()` method with the training data.
6.  **Make Predictions:**  Predicts the `MedHouseVal` for all data points in `X` using the trained model's `predict()` method.  This allows us to plot the predicted line across the entire range of `AveRooms`.
7.  **Extract Coefficients:**  Gets the slope (m) and intercept (b) from the trained model using `model.coef_[0]` and `model.intercept_`, respectively.
8.  **Visualize the Results:**
    *   Creates a scatter plot of the original data points using `plt.scatter()`.
    *   Plots the fitted line using `plt.plot()`, with the x-values from `X` and the predicted y-values (`y_pred`).  The equation of the line is included in the label for clarity.
    *   Sets labels for the axes and the title of the plot using `plt.xlabel()`, `plt.ylabel()`, and `plt.title()`.
    *   Adds a legend to the plot using `plt.legend()`.
    *   Adds a grid to the plot using `plt.grid(True)` to help with visualization.
    *   Displays the plot using `plt.show()`.
9.  **Print Coefficients:** Prints the calculated slope and intercept.

### 4. Interpreting the Visualization:

*   **Scatter Plot:** The scatter plot shows the relationship between the average number of rooms and the median house value in the original dataset.  Each dot represents a house.
*   **Fitted Line:** The red line represents the linear regression model's prediction of housing prices based on the average number of rooms.
*   **Good Fit?**  Visually assess how well the line fits the data points. If the points are clustered closely around the line, it suggests a good fit.  If the points are scattered far away, it suggests a weaker fit. Look for patterns in the residuals.
*   **Slope:** The slope (m) tells you how much the median house value is expected to increase for each additional room on average.  A positive slope indicates a positive correlation (as rooms increase, price increases).
*   **Intercept:** The intercept (b) tells you the predicted median house value when the average number of rooms is zero. This may or may not be meaningful in the context of the problem.

### 5. Important Points to Remember:

*   **Correlation vs. Causation:** Linear regression can only show a correlation between variables, not causation. Just because the number of rooms is correlated with housing price doesn't mean that adding rooms *causes* the price to increase. Other factors are likely involved.
*   **Linearity Assumption:** Linear regression assumes a linear relationship between the variables. If the relationship is clearly non-linear, linear regression might not be the best model.  Consider transformations or other models.
*   **Outliers:** Outliers can significantly affect the fitted line.  It's important to identify and handle outliers appropriately (e.g., by removing them or using robust regression techniques).
*   **Scaling Features:** Scaling features (e.g., using StandardScaler) can sometimes improve the performance of linear regression, especially when using techniques like gradient descent for optimization.
*   **Model Evaluation:** Visualizing the fitted line is only one step in model evaluation. It's important to also use quantitative metrics like R-squared, Mean Squared Error (MSE), etc., to assess the model's performance more rigorously.

### 6. Practice Questions and Exercises:

**Question 1:**

What does the slope of the fitted line in linear regression represent?

**Answer:**

The slope represents the change in the dependent variable (y) for a one-unit increase in the independent variable (x). In the context of the housing dataset, it represents the expected change in median house value for each additional room.

**Question 2:**

How can you visually assess the fit of a linear regression model by plotting the fitted line and data points?

**Answer:**

By observing how closely the data points cluster around the fitted line. A closer clustering indicates a better fit. Also, look for systematic deviations or patterns in the spread of data points around the line which can indicate violation of regression assumptions.

**Question 3:**

What are some advantages of visualizing the fitted line in linear regression?

**Answer:**

Advantages include:
*   Visual understanding of the relationship between variables.
*   Easy assessment of model fit.
*   Identification of outliers.
*   Effective communication of results.

**Exercise 1:**

Modify the code above to use a different feature from the California Housing dataset (e.g., `MedInc` - median income) as the independent variable.  Run the code and interpret the resulting visualization.  How does the relationship between median income and house value appear compared to the relationship between average rooms and house value?

**Exercise 2:**

Add code to calculate and print the R-squared value of the linear regression model on both the training and testing datasets. How does this metric relate to your visual assessment of the fit?

**Exercise 3:**

Experiment with different training and testing splits. How does changing the `random_state` parameter in `train_test_split` affect the appearance of the fitted line and the R-squared value?
