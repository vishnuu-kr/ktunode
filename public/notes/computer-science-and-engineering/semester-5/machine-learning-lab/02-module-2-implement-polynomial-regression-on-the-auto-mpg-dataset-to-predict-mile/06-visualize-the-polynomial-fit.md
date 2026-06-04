---
title: "Visualize the polynomial fit."
subject: "MACHINE LEARNING LAB"
module: "Module 2: Implement polynomial regression on the Auto MPG dataset to predict miles per gallon (MPG) based on engine displacement. Compare polynomial regression results with linear regression."
branch: "Computer Science and Engineering"
semester: 5
topicId: "684162770fc9aa1fdbc8b939"
status: "completed"
scrapedAt: "2026-05-20T16:47:02.160Z"
---
# MACHINE LEARNING LAB - Module 2: Visualizing Polynomial Regression Fit

**Topic:** Visualize the polynomial fit.

**Description:** Implementing polynomial regression on the Auto MPG dataset to predict miles per gallon (MPG) based on engine displacement and comparing the results with linear regression. This section focuses on visualizing the polynomial fit.

**Learning Outcomes:**

*   Understand the importance of visualizing regression models.
*   Learn how to plot the polynomial regression fit against the data.
*   Compare and contrast visualizations of linear and polynomial regression fits.
*   Interpret the visualization to assess the quality of the model.

## 1. Importance of Visualizing Regression Models

*   **Model Understanding:** Visualizations offer a clear and intuitive understanding of how the regression model fits the data.  Numbers and metrics alone can be abstract, while plots provide a concrete representation.

*   **Model Evaluation:** Visual inspection helps assess the model's accuracy and identify potential issues like underfitting, overfitting, or non-linear relationships that are poorly captured.

*   **Communication:** Visualizations are excellent for communicating model insights to non-technical audiences. A well-designed plot can convey the model's performance more effectively than a table of statistics.

*   **Error Detection:** Visuals can help to detect outliers or influential data points that disproportionately affect the model fit.

*   **Variable Relationships:**  Visualization of regression models involving multiple variables (e.g., scatter plots matrix) is critical to understanding the relationships of each variable in relation to the others, and the target variable.

## 2. Plotting the Polynomial Regression Fit

Here's how to plot the polynomial regression fit against the data, using Python and libraries like Matplotlib and Scikit-learn.

**Steps:**

1.  **Load and Prepare Data:** Load the Auto MPG dataset (or any suitable dataset) and select the 'displacement' feature (independent variable) and 'mpg' feature (dependent variable).  Reshape the data, especially the independent variable, into a format suitable for Scikit-learn.

    ```python
    import pandas as pd
    import numpy as np
    import matplotlib.pyplot as plt
    from sklearn.linear_model import LinearRegression
    from sklearn.preprocessing import PolynomialFeatures
    from sklearn.model_selection import train_test_split
    from sklearn.metrics import mean_squared_error, r2_score

    # Load the dataset (replace 'auto_mpg.csv' with the actual path)
    try:
        df = pd.read_csv('auto_mpg.csv') # Try loading the original dataset
    except FileNotFoundError:
        print("auto_mpg.csv not found. Using a built-in dataset for demonstration.")
        # Example using a dummy dataframe
        data = {'mpg': [18, 15, 18, 16, 17, 15, 14, 22, 18, 25],
                'displacement': [307, 350, 318, 304, 302, 429, 454, 318, 318, 225]}
        df = pd.DataFrame(data)

    X = df['displacement'].values.reshape(-1, 1) # Independent variable
    y = df['mpg'].values # Dependent variable
    ```

2.  **Create and Train the Polynomial Regression Model:**
    *   Use `PolynomialFeatures` to transform the data into polynomial features. Specify the degree of the polynomial.
    *   Create a `LinearRegression` model.
    *   Train the model using the transformed data.

    ```python
    # Split data into training and testing sets
    X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42) #added training and test sets

    degree = 2  # Choose the degree of the polynomial
    poly = PolynomialFeatures(degree=degree)
    X_poly = poly.fit_transform(X_train) #fit transform training data
    poly_test = poly.transform(X_test) # transform test data with the SAME poly object

    model = LinearRegression()
    model.fit(X_poly, y_train) # Fit with TRAINING data
    ```

3.  **Make Predictions:** Predict MPG values using the trained polynomial regression model.

    ```python
    y_pred = model.predict(poly_test) #use test data
    ```

4.  **Plot the Results:**
    *   Create a scatter plot of the original data (displacement vs. mpg).
    *   Create a range of x-values (displacement) for plotting the regression line.  Sort these x-values for a smoother curve.
    *   Transform the x-values into polynomial features using the same `PolynomialFeatures` object.
    *   Predict the corresponding y-values (mpg) using the trained model.
    *   Plot the predicted y-values against the x-values.

    ```python
    # Generate x values for plotting the regression line
    X_plot = np.linspace(X.min(), X.max(), 100).reshape(-1, 1)
    X_plot_poly = poly.transform(poly.fit_transform(X_plot)) #fit transform based on data distribution

    y_plot = model.predict(X_plot_poly)
    y_lin = LinearRegression().fit(X_train,y_train).predict(X_plot) #generate linear regression with training data
    # Plotting
    plt.figure(figsize=(10, 6))
    plt.scatter(X_test, y_test, label='Actual Data', alpha=0.5) # scatter plot of test data
    plt.plot(X_plot, y_plot, color='red', label=f'Polynomial Regression (Degree {degree})')
    plt.plot(X_plot, y_lin, color='green', label=f'Linear Regression ')
    plt.xlabel('Engine Displacement')
    plt.ylabel('MPG')
    plt.title('Polynomial Regression Fit')
    plt.legend()
    plt.grid(True)
    plt.show()

    # Print Model Performance
    print("Model Performance:")
    print(f"Mean squared error: {mean_squared_error(y_test, y_pred):.2f}")
    print(f"Coefficient of determination (R^2): {r2_score(y_test, y_pred):.2f}")
    ```

## 3. Comparing Linear and Polynomial Regression Visualizations

*   **Linear Regression:** The linear regression fit is a straight line. It represents a linear relationship between the independent and dependent variables. If the data exhibits a non-linear trend, the linear regression fit will be a poor approximation.

*   **Polynomial Regression:** The polynomial regression fit is a curve.  The degree of the polynomial determines the complexity of the curve.  Higher degree polynomials can fit more complex relationships but are more prone to overfitting.

**Visual Comparison:** By plotting both the linear and polynomial regression fits on the same graph, you can visually assess which model better captures the underlying relationship between the variables. Look for whether the curve follows the general trend of the data more closely than a straight line.

## 4. Interpreting the Visualization

*   **Underfitting:** If the model doesn't capture the underlying trend of the data, it's underfitting. Both linear and low-degree polynomial models can suffer from underfitting if the true relationship is more complex.  The visualization will show the regression line/curve far from the data points.

*   **Overfitting:** If the model fits the training data too closely, it may not generalize well to new data. High-degree polynomial models are prone to overfitting.  The visualization will show a very wiggly curve that closely follows the training data, but likely won't generalize to new data.

*   **Good Fit:** A good fit is achieved when the model captures the general trend of the data without overfitting to noise. The visualization will show the regression line/curve reasonably close to most data points, with a smooth curve that doesn't oscillate wildly.

*   **Outliers:** Visually inspect the plot for outliers (data points that are far from the regression line/curve). Outliers can heavily influence the regression model.

*   **Data Density:**  Consider data density across the displacement axis. Regions with more data may give more accurate results. Less dense regions may give inaccurate and overfit results, especially with higher degree polynomials.

## 5. Practice Questions/Exercises

1.  **Change the Polynomial Degree:** Modify the code to experiment with different polynomial degrees (e.g., 1, 3, 5). Observe how the visualization changes and discuss the effects of different degrees on the model fit. What degrees lead to underfitting? Overfitting?
    *Answer:* A degree of 1 results in linear regression (underfitting if the data has a curve). High degrees (e.g., 5 or higher) can cause overfitting, with the curve becoming too flexible and fitting the noise in the data rather than the underlying trend.  A degree of 2 or 3 is often a good starting point for exploring the data, depending on the nature of the data.

2.  **Use a Different Dataset:** Apply the same process to a different dataset with a potentially non-linear relationship between variables.
    *Answer:* Datasets such as housing prices vs. square footage, or sales vs. advertising spend, might exhibit non-linear relationships.

3.  **Evaluate Model Performance:** Calculate metrics like Mean Squared Error (MSE) and R-squared for both the linear and polynomial regression models. How do these metrics correlate with the visualizations?
    *Answer:* Lower MSE and higher R-squared values generally indicate a better fit.  However, with higher-degree polynomials, the R-squared may increase due to overfitting, even though the model's generalization performance on new data might be poor.

4.  **Split the data into Training and Testing sets.** Implement the `train_test_split` function from `sklearn.model_selection` to create seperate training and testing datasets. Use the training dataset to fit the `LinearRegression()` and `PolynomialFeatures()` models. Evaluate the `mean_squared_error()` and `r2_score()` using the test dataset to evaluate the model's performance.

## 6. Important Points to Remember

*   Visualization is crucial for understanding and evaluating regression models.
*   Polynomial regression can capture non-linear relationships but is prone to overfitting.
*   The degree of the polynomial is a key parameter to tune.
*   Visual comparison of linear and polynomial regression fits provides valuable insights.
*   Always consider the trade-off between model complexity and generalization performance.
*   Inspect the plots for outliers and influential data points.
*   Metrics like MSE and R-squared should be used in conjunction with visualizations for comprehensive model evaluation.
*   Always fit the polynomial and linear regression models with training data and evaluate the models using test data, otherwise there is a high chance of overfitting and model performance will be innaccurate.
