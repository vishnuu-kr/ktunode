---
title: "Evaluate the model performance using metrics such as Mean Squared Error (MSE) and R-squared."
subject: "MACHINE LEARNING LAB"
module: "Module 1: Implement linear regression with one variable on the California Housing dataset to predict housing prices based on a single feature (e.g., the average number of rooms per dwelling)."
branch: "Computer Science and Engineering"
semester: 5
topicId: "684162770fc9aa1fdbc8b931"
status: "completed"
scrapedAt: "2026-05-20T16:46:57.040Z"
---
## MACHINE LEARNING LAB - Module 1: Linear Regression with One Variable - Model Evaluation

**Topic:** Evaluate the model performance using metrics such as Mean Squared Error (MSE) and R-squared.

**Learning Outcomes:**

*   Understand the concepts of Mean Squared Error (MSE) and R-squared as model evaluation metrics.
*   Calculate MSE and R-squared for a linear regression model.
*   Interpret MSE and R-squared values in the context of model performance.
*   Apply these evaluation metrics to assess the performance of a linear regression model trained on the California Housing dataset.
*   Understand the limitations of MSE and R-squared and when other metrics might be more appropriate.

---

### 1. Key Concepts and Definitions

*   **Linear Regression:** A linear approach for modeling the relationship between a scalar response (or dependent variable) and one or more explanatory variables (or independent variables).  In this case, we're using *simple linear regression* as we only have one independent variable.

*   **California Housing Dataset:** A dataset containing information about housing prices in California, along with various features like median income, average number of rooms, etc.  Available from scikit-learn (`sklearn.datasets`).

*   **Mean Squared Error (MSE):**  The average of the squares of the errors (the difference between the predicted values and the actual values).  A lower MSE indicates a better fit.

    *   **Formula:**  MSE = (1/n) * Σ (yᵢ - ŷᵢ)²
        *   Where:
            *   n = number of data points
            *   yᵢ = actual value for the i-th data point
            *   ŷᵢ = predicted value for the i-th data point

*   **R-squared (Coefficient of Determination):** Represents the proportion of the variance in the dependent variable (housing prices) that is predictable from the independent variable (e.g., average number of rooms).  Ranges from 0 to 1 (or 0% to 100%).  A higher R-squared indicates a better fit, meaning the model explains a larger proportion of the variance.

    *   **Formula:** R² = 1 - (SSres / SStot)
        *   Where:
            *   SSres (Residual Sum of Squares) = Σ (yᵢ - ŷᵢ)²  (same as n * MSE)
            *   SStot (Total Sum of Squares) = Σ (yᵢ - ȳ)²
            *   ȳ = average of the actual values (yᵢ)

*   **Residuals:** The difference between the actual value (yᵢ) and the predicted value (ŷᵢ).  (yᵢ - ŷᵢ)

### 2. Calculation of MSE and R-squared

**A. Manually (Illustrative Example):**

Let's say you have the following data:

| Actual Price (y) | Predicted Price (ŷ) |
|-------------------|-----------------------|
| 10                | 12                    |
| 15                | 13                    |
| 20                | 18                    |
| 25                | 23                    |

1.  **Calculate the Squared Errors:**
    *   (10 - 12)² = 4
    *   (15 - 13)² = 4
    *   (20 - 18)² = 4
    *   (25 - 23)² = 4

2.  **Calculate the Mean Squared Error (MSE):**
    *   MSE = (4 + 4 + 4 + 4) / 4 = 4

3.  **Calculate the Total Sum of Squares (SStot):**
    *   First, find the mean of the actual values (ȳ): (10 + 15 + 20 + 25) / 4 = 17.5
    *   (10 - 17.5)² = 56.25
    *   (15 - 17.5)² = 6.25
    *   (20 - 17.5)² = 6.25
    *   (25 - 17.5)² = 56.25
    *   SStot = 56.25 + 6.25 + 6.25 + 56.25 = 125

4.  **Calculate the Residual Sum of Squares (SSres):**
    *   SSres = Σ (yᵢ - ŷᵢ)² = 4 + 4 + 4 + 4 = 16  (same as n * MSE)

5.  **Calculate R-squared:**
    *   R² = 1 - (SSres / SStot) = 1 - (16 / 125) = 1 - 0.128 = 0.872

**B. Using Python and Scikit-learn:**

```python
import numpy as np
from sklearn.linear_model import LinearRegression
from sklearn.metrics import mean_squared_error, r2_score
from sklearn.model_selection import train_test_split
from sklearn.datasets import fetch_california_housing

# 1. Load the California Housing dataset
housing = fetch_california_housing()
X = housing.data  # Features
y = housing.target  # Target variable (housing prices)

# 2. Use only one feature (e.g., average number of rooms - feature at index 5)
X = X[:, [5]]  # Select the 6th column (index 5)

# 3. Split data into training and testing sets
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)

# 4. Create and train the Linear Regression model
model = LinearRegression()
model.fit(X_train, y_train)

# 5. Make predictions on the test set
y_pred = model.predict(X_test)

# 6. Calculate MSE and R-squared
mse = mean_squared_error(y_test, y_pred)
r2 = r2_score(y_test, y_pred)

# 7. Print the results
print("Mean Squared Error (MSE):", mse)
print("R-squared (R²):", r2)

# Optional: Print model coefficients
print("Coefficient:", model.coef_) # Slope of the regression line
print("Intercept:", model.intercept_) # Y-intercept of the regression line
```

### 3. Interpretation of MSE and R-squared

*   **MSE:**  The MSE represents the average squared difference between the predicted and actual housing prices. A lower MSE indicates that the model's predictions are, on average, closer to the actual prices. However, the MSE is in the squared units of the target variable (housing prices), making it difficult to interpret directly in terms of dollars or the original scale. Consider taking the square root (RMSE - Root Mean Squared Error) for easier interpretation. A typical MSE value depends on the scale of the target variable.
*   **R-squared:**  The R-squared value represents the proportion of variance in housing prices that is explained by the average number of rooms. For example, an R-squared of 0.5 means that 50% of the variability in housing prices is explained by the model using the average number of rooms as the predictor. R-squared provides a sense of how well the independent variable explains the variance in the dependent variable. An R-squared close to 1 indicates a good fit, while an R-squared close to 0 indicates a poor fit. It's important to note that a high R-squared doesn't necessarily mean the model is good for *prediction* on unseen data, especially if the model is overfit.

### 4. Applying Evaluation Metrics to the California Housing Dataset

The Python code above demonstrates how to load the California Housing dataset, train a linear regression model using the average number of rooms as the single feature, and then evaluate the model using MSE and R-squared.  The output will provide you with concrete values for these metrics, which you can then interpret as described above.  Experiment with different features (e.g., median income, median age) and observe how the evaluation metrics change.

### 5. Limitations of MSE and R-squared

*   **MSE:** Sensitive to outliers. A single outlier can significantly inflate the MSE, making the model seem worse than it actually is.  Also, it doesn't give a good sense of the *type* of error.

*   **R-squared:** Can be misleading if not interpreted carefully.

    *   **Doesn't indicate causality:** Just because a high proportion of the variance is explained doesn't mean that the independent variable *causes* the dependent variable to change.
    *   **Can increase artificially with more features (even irrelevant ones):** R-squared will always increase or stay the same when you add more variables to the model, even if those variables are not truly predictive. Adjusted R-squared addresses this issue by penalizing the inclusion of irrelevant variables. Since we are using simple linear regression here (only one feature), this isn't as big of a concern.
    *   **Doesn't tell you if the model is adequate:** A high R-squared doesn't necessarily mean the model is well-specified (e.g., it might miss important non-linear relationships).

*   **When Other Metrics Might Be More Appropriate:**

    *   **Outliers:** When dealing with datasets containing outliers, consider using robust regression techniques or metrics that are less sensitive to outliers, such as Mean Absolute Error (MAE).
    *   **Specific Business Goals:**  If the goal is to minimize a specific type of error (e.g., underestimation), other metrics like precision and recall might be more relevant.
    *   **Classification Problems:** MSE and R-squared are *not* appropriate for classification problems. Use metrics like accuracy, precision, recall, F1-score, and AUC-ROC instead.

### 6. Important Points to Remember

*   MSE and R-squared are just two of many possible evaluation metrics. Choose the metrics that are most relevant to the specific problem and the business goals.
*   Always interpret the evaluation metrics in context.  What is considered a "good" MSE or R-squared value depends on the specific dataset and the application.
*   Don't rely solely on evaluation metrics.  It's important to also visualize the data, examine the residuals, and consider other factors like the model's interpretability and generalizability.
*   The R-squared is more meaningful when you compare it against another comparable R-squared where the models use the *same* dependent variable. It's not useful to compare R-squared between models that predict different things.
*   Always split your data into training and testing sets to get a realistic estimate of the model's performance on unseen data.

---

### Practice Questions/Exercises

1.  **Question:** What does an MSE of 0 indicate?

    **Answer:** An MSE of 0 indicates a perfect fit. The model's predictions exactly match the actual values.
2.  **Question:** An R-squared value is calculated as -0.2. Is this possible? If not, why?

    **Answer:**  While mathematically possible, an R-squared of -0.2 is not expected and suggests a poorly fitted model.  R-squared is defined as 1 - (SSres / SStot). A negative value indicates that SSres (the residual sum of squares) is *larger* than SStot (the total sum of squares).  This means the model fits the data *worse* than simply predicting the mean of the target variable.  It often indicates a serious problem with the model or data.
3.  **Question:** How does the number of data points affect the interpretation of R-squared?

    **Answer:** With a small number of data points, R-squared can be artificially inflated, even if the model doesn't generalize well to new data. This is because the model can essentially "memorize" the training data. With a large number of data points, the R-squared is more reliable and provides a better estimate of the model's true performance.
4.  **Exercise:**  Load the California Housing dataset and try using different features (e.g., median income, house age) as the independent variable in your linear regression model. Calculate and compare the MSE and R-squared for each model. Which feature seems to be the best predictor of housing prices based on these metrics?  How do the coefficients and intercepts change?

5.  **Exercise:** Modify the provided Python code to calculate and print the Root Mean Squared Error (RMSE).  RMSE is the square root of the MSE.

    ```python
    import numpy as np
    from sklearn.linear_model import LinearRegression
    from sklearn.metrics import mean_squared_error, r2_score
    from sklearn.model_selection import train_test_split
    from sklearn.datasets import fetch_california_housing

    # 1. Load the California Housing dataset
    housing = fetch_california_housing()
    X = housing.data
    y = housing.target

    # 2. Use only one feature (e.g., average number of rooms)
    X = X[:, [5]]

    # 3. Split data into training and testing sets
    X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)

    # 4. Create and train the Linear Regression model
    model = LinearRegression()
    model.fit(X_train, y_train)

    # 5. Make predictions on the test set
    y_pred = model.predict(X_test)

    # 6. Calculate MSE and R-squared
    mse = mean_squared_error(y_test, y_pred)
    r2 = r2_score(y_test, y_pred)

    # 7. Calculate RMSE
    rmse = np.sqrt(mse) # <-- Add this line

    # 8. Print the results
    print("Mean Squared Error (MSE):", mse)
    print("Root Mean Squared Error (RMSE):", rmse) # <-- Add this line
    print("R-squared (R²):", r2)

    print("Coefficient:", model.coef_)
    print("Intercept:", model.intercept_)
    ```

By understanding these concepts and working through the exercises, you will develop a solid foundation for evaluating the performance of linear regression models. Remember to consider the limitations of the metrics and choose the right tools for the task at hand.
