---
title: "Implement polynomial regression of varying degrees."
subject: "MACHINE LEARNING LAB"
module: "Module 2: Implement polynomial regression on the Auto MPG dataset to predict miles per gallon (MPG) based on engine displacement. Compare polynomial regression results with linear regression."
branch: "Computer Science and Engineering"
semester: 5
topicId: "684162770fc9aa1fdbc8b937"
status: "completed"
scrapedAt: "2026-05-20T16:47:00.681Z"
---
# MACHINE LEARNING LAB - Module 2: Polynomial Regression

## Topic: Implement Polynomial Regression of Varying Degrees

**Objective:** To implement polynomial regression on the Auto MPG dataset to predict miles per gallon (MPG) based on engine displacement, and compare the results with linear regression, exploring varying degrees of polynomial features.

**Learning Outcomes:**

*   Understand the concept of polynomial regression and its advantages over linear regression.
*   Learn how to create polynomial features from existing features using Python libraries (e.g., scikit-learn).
*   Implement polynomial regression models of varying degrees using scikit-learn.
*   Evaluate the performance of polynomial regression models using appropriate metrics (e.g., Mean Squared Error, R-squared).
*   Compare the performance of polynomial regression models with linear regression.
*   Identify and understand the concepts of underfitting and overfitting in the context of polynomial regression.
*   Learn how to visualize polynomial regression models and data.

---

### 1. Introduction to Polynomial Regression

*   **Definition:** Polynomial regression is a form of regression analysis in which the relationship between the independent variable (predictor) `x` and the dependent variable (response) `y` is modeled as an *n*th degree polynomial.

    *   Linear Regression:  y = b0 + b1*x
    *   Polynomial Regression (degree 2): y = b0 + b1*x + b2*x^2
    *   Polynomial Regression (degree n): y = b0 + b1*x + b2*x^2 + ... + bn*x^n

*   **Key Concept:** It allows for modeling non-linear relationships between variables, unlike linear regression which assumes a linear relationship.

*   **Advantages over Linear Regression:**
    *   Can capture non-linear relationships.
    *   Provides a better fit to the data in cases where the relationship is curved.

*   **Disadvantages:**
    *   Can lead to overfitting if the degree of the polynomial is too high.
    *   May be more computationally expensive than linear regression.
    *   Highly sensitive to outliers, particularly with higher degrees.

### 2. Creating Polynomial Features

*   **Why Polynomial Features?**  We transform our original features into polynomial features to enable polynomial regression.  For example, if we have a single feature `x`, we can create `x^2`, `x^3`, etc., as new features.

*   **Using Scikit-learn's `PolynomialFeatures`:**

    ```python
    from sklearn.preprocessing import PolynomialFeatures
    import numpy as np

    # Sample data
    X = np.array([[1], [2], [3], [4], [5]])

    # Create polynomial features of degree 2
    poly = PolynomialFeatures(degree=2)
    X_poly = poly.fit_transform(X)

    print("Original Features (X):\n", X)
    print("\nPolynomial Features (X_poly):\n", X_poly)
    ```

    *   **Explanation:**
        *   `PolynomialFeatures(degree=2)`: Creates a transformer that generates polynomial features up to degree 2.
        *   `fit_transform(X)`: Fits the transformer to the data `X` and then transforms `X` into its polynomial representation. The output includes the bias term (constant 1), the original feature, and the squared feature.  For instance, if `X` is `[[x1],[x2]]`, the output will be `[[1, x1, x1^2],[1, x2, x2^2]]`

*   **Different Degrees:**  Experimenting with different degrees is crucial. Too low a degree (e.g., degree 1, which is just linear regression) might underfit the data.  Too high a degree might overfit.

### 3. Implementing Polynomial Regression

*   **Steps:**
    1.  **Load and Prepare Data:** Load the Auto MPG dataset (you can use pandas).  Extract the 'displacement' column as the independent variable (X) and the 'mpg' column as the dependent variable (y).
    2.  **Create Polynomial Features:** Use `PolynomialFeatures` to create polynomial features from the 'displacement' column.
    3.  **Split Data:** Split the data into training and testing sets using `train_test_split` from scikit-learn.
    4.  **Create and Train the Model:**  Create a linear regression model (using `LinearRegression` from scikit-learn) and train it on the *polynomial features* of the training data.  Crucially, you're using *linear* regression, but on polynomial *features*.
    5.  **Make Predictions:**  Use the trained model to make predictions on the polynomial features of the testing data.
    6.  **Evaluate the Model:**  Calculate metrics like Mean Squared Error (MSE) and R-squared (R2) to evaluate the performance of the model.
    7.  **Repeat:** Repeat steps 2-6 for different polynomial degrees.
    8.  **Compare:** Compare the performance metrics for different degrees.

*   **Example Code Snippet:**

    ```python
    import pandas as pd
    import numpy as np
    from sklearn.model_selection import train_test_split
    from sklearn.linear_model import LinearRegression
    from sklearn.preprocessing import PolynomialFeatures
    from sklearn.metrics import mean_squared_error, r2_score
    import matplotlib.pyplot as plt

    # Load the Auto MPG dataset (replace with your actual path)
    try:
        df = pd.read_csv("auto-mpg.csv") #Assuming your data is comma separated
    except FileNotFoundError:
        print("Error: auto-mpg.csv not found.  Please place the file in the correct directory or update the path.")
        exit()
    except pd.errors.ParserError:
        print("Error: Could not parse auto-mpg.csv. Ensure it is a valid CSV file.")
        exit()


    # Prepare the data
    X = df[['displacement']].values  # Ensure X is a 2D array
    y = df['mpg'].values

    # Split into training and testing sets
    X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)

    # Iterate through different polynomial degrees
    degrees = [1, 2, 3, 4, 5]
    for degree in degrees:
        # Create polynomial features
        poly = PolynomialFeatures(degree=degree)
        X_train_poly = poly.fit_transform(X_train)
        X_test_poly = poly.transform(X_test) # Use transform, NOT fit_transform on test data

        # Create and train the linear regression model
        model = LinearRegression()
        model.fit(X_train_poly, y_train)

        # Make predictions
        y_pred = model.predict(X_test_poly)

        # Evaluate the model
        mse = mean_squared_error(y_test, y_pred)
        r2 = r2_score(y_test, y_pred)

        print(f"Degree {degree}:")
        print(f"  Mean Squared Error: {mse:.2f}")
        print(f"  R-squared: {r2:.2f}")

        # Plot the results (optional, but highly recommended)
        plt.figure()
        plt.scatter(X_test, y_test, label="Actual Data")

        # Generate x values for plotting the regression line
        X_plot = np.linspace(X.min(), X.max(), 100).reshape(-1, 1) #Crucially reshape to a column vector
        X_plot_poly = poly.transform(X_plot)
        y_plot = model.predict(X_plot_poly)

        plt.plot(X_plot, y_plot, color='red', label=f"Polynomial Regression (Degree {degree})")
        plt.xlabel("Displacement")
        plt.ylabel("MPG")
        plt.title(f"Polynomial Regression (Degree {degree}) vs. Actual Data")
        plt.legend()
        plt.show()
    ```

*   **Important Notes:**
    *   Always use `transform()` on the test data and any data you want to make predictions on *after* you've fitted the `PolynomialFeatures` object on the *training data*.  Do *not* use `fit_transform()` on the test data.  This prevents data leakage.  You're applying the same transformation learned from the training data to the test data.
    *   Reshape your input data (`X`) to be a 2D array using `X.reshape(-1, 1)` if it's a 1D array. scikit-learn expects a 2D array.
    *   Use `np.linspace` to generate evenly spaced values for plotting the regression line.

### 4. Evaluating Model Performance

*   **Metrics:**
    *   **Mean Squared Error (MSE):** Measures the average squared difference between predicted and actual values. Lower MSE indicates better performance.
    *   **R-squared (R2):** Measures the proportion of variance in the dependent variable that can be predicted from the independent variable(s).  Ranges from 0 to 1; a higher R2 indicates a better fit.

*   **Interpretation:**
    *   Compare the MSE and R2 values for different degrees.
    *   Observe how the metrics change as the degree increases.  Initially, increasing the degree might improve the metrics, but at some point, the model might overfit, leading to worse performance on the test set.

### 5. Comparing with Linear Regression

*   **Implementation:** Implement a linear regression model on the original data (without polynomial features).  Train it and evaluate its performance using MSE and R2.

*   **Comparison:**
    *   Compare the MSE and R2 values of the linear regression model with those of the polynomial regression models.
    *   Determine which model provides a better fit to the data based on the evaluation metrics.  Consider the trade-off between model complexity and performance.

### 6. Underfitting and Overfitting

*   **Underfitting:** Occurs when the model is too simple to capture the underlying patterns in the data.  In the context of polynomial regression, this might happen when the degree of the polynomial is too low (e.g., using a linear model when the relationship is actually quadratic).  High bias, low variance.  High training error, high test error.

*   **Overfitting:** Occurs when the model is too complex and learns the noise in the training data, resulting in poor generalization to new data. In polynomial regression, this might happen when the degree of the polynomial is too high. Low bias, high variance. Low training error, high test error.

*   **Identifying Underfitting and Overfitting:**
    *   **Visual Inspection:** Plot the regression line for different degrees.  An underfit model will not follow the data closely.  An overfit model will follow the data too closely, including the noise.
    *   **Performance Metrics:** Compare the performance on the training and testing sets.
        *   Underfitting: High error on both training and testing sets.
        *   Overfitting: Low error on the training set, but high error on the testing set.

*   **Addressing Underfitting and Overfitting:**
    *   **Underfitting:** Increase the model complexity (e.g., increase the degree of the polynomial).
    *   **Overfitting:** Reduce the model complexity (e.g., decrease the degree of the polynomial), use regularization techniques (L1 or L2 regularization – not covered in this basic exercise, but important to know), or increase the amount of training data.

### 7. Visualization

*   **Plotting the Regression Line:**  Plot the original data points along with the regression line for each degree.  This helps visualize how well the model fits the data.

*   **Example Code (included in the implementation example above):**

    ```python
    # (Inside the loop for different degrees)
    plt.figure()
    plt.scatter(X_test, y_test, label="Actual Data")

    # Generate x values for plotting the regression line
    X_plot = np.linspace(X.min(), X.max(), 100).reshape(-1, 1) #Crucially reshape to a column vector
    X_plot_poly = poly.transform(X_plot)
    y_plot = model.predict(X_plot_poly)

    plt.plot(X_plot, y_plot, color='red', label=f"Polynomial Regression (Degree {degree})")
    plt.xlabel("Displacement")
    plt.ylabel("MPG")
    plt.title(f"Polynomial Regression (Degree {degree}) vs. Actual Data")
    plt.legend()
    plt.show()
    ```

*   **Interpretation:**  Observe how the shape of the regression line changes with different degrees.  Look for the degree that provides a good balance between fitting the data and avoiding overfitting.

---

### Practice Questions/Exercises:

1.  **Data Splitting:**  Why is it important to split the data into training and testing sets *before* creating polynomial features?  What happens if you create polynomial features on the *entire* dataset and *then* split?

    *   **Answer:**  Splitting before creating polynomial features prevents *data leakage*. If you create polynomial features on the entire dataset, information from the testing set will influence the transformation learned from the training set, leading to an overly optimistic evaluation of the model's performance.  This essentially invalidates the test as a measure of unseen data performance.

2.  **Feature Scaling:** Would scaling the input feature (displacement) improve the performance of polynomial regression? Why or why not?

    *   **Answer:** Yes, scaling the input feature (displacement) can improve the performance of polynomial regression, particularly for higher degrees. Large differences in the scale of the features can cause the learning algorithm to be dominated by features with larger values. Scaling ensures that all features contribute equally to the model and can prevent numerical instability in higher-degree polynomial features.  Common scaling methods include StandardScaler and MinMaxScaler.

3.  **Model Complexity:** How does the number of features change as you increase the degree of the polynomial?  What are the implications for model complexity and potential for overfitting?

    *   **Answer:** As the degree of the polynomial increases, the number of features increases dramatically. For a single input feature `x` and degree `n`, you will have features `x^1`, `x^2`, ..., `x^n`. More generally, with *k* input features and degree *n*, the number of features will be (n+k)! / (n!k!).  A higher number of features increases the model's complexity, making it more prone to overfitting, especially if the number of data points is relatively small.

4.  **Experiment:** Modify the provided code to use a different random state for `train_test_split`.  How does this affect the MSE and R2 values for different degrees?  Why?

    *   **Answer:** Changing the random state in `train_test_split` will result in a different split of the data into training and testing sets. This can affect the MSE and R2 values because the model is being trained and evaluated on different subsets of the data. The magnitude of the change will depend on the characteristics of the dataset.  A robust model should ideally perform consistently well across different random splits. This is the principle behind cross-validation.

5.  **Implement Regularization:** (Advanced)  Research L1 and L2 regularization and implement them in your polynomial regression models. How do they affect the model's performance and complexity?  When might you use L1 vs. L2?

    *   **Answer:** (This requires understanding beyond the basic scope of this lab but is a good extension). L1 and L2 regularization add penalty terms to the loss function, discouraging large coefficients. L1 regularization can lead to feature selection (coefficients driven to zero), while L2 shrinks coefficients towards zero. L1 might be preferred when feature selection is desired. L2 is generally more robust. Implementing regularization typically reduces overfitting and improves generalization. You can achieve this using `Ridge` (L2) or `Lasso` (L1) regression from scikit-learn.

---

### Important Points to Remember:

*   Polynomial regression is useful for modeling non-linear relationships.
*   The degree of the polynomial is a crucial hyperparameter.
*   Avoid overfitting by carefully choosing the degree and/or using regularization techniques.
*   Proper data splitting is essential to prevent data leakage and obtain realistic performance estimates.
*   Always visualize your data and regression models to gain insights into the model's behavior.
*   Scaling features can improve performance, especially with higher-degree polynomials.
*   Test data is only for *final* evaluation. *Never* use test data during the model training process, including feature transformation parameter selection.
