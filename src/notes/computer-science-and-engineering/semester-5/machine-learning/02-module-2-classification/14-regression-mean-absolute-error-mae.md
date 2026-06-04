---
title: "Regression - Mean Absolute Error (MAE)"
subject: "MACHINE LEARNING"
module: "Module 2: Classification  "
branch: "Computer Science and Engineering"
semester: 5
topicId: "684162760fc9aa1fdbc8b5c0"
status: "completed"
scrapedAt: "2026-05-20T16:46:38.457Z"
---
# MACHINE LEARNING - Module 2: Classification - Regression: Mean Absolute Error (MAE)

## Learning Outcomes:

*   Understand the concept of Mean Absolute Error (MAE) as a regression metric.
*   Learn how to calculate MAE.
*   Understand the advantages and disadvantages of using MAE.
*   Compare MAE with other regression metrics like Mean Squared Error (MSE) and Root Mean Squared Error (RMSE).
*   Interpret MAE values in the context of a specific problem.
*   Apply MAE to evaluate the performance of regression models.

## 1. Introduction to Mean Absolute Error (MAE)

*   **Definition:** Mean Absolute Error (MAE) is a measure of the average magnitude of errors in a set of predictions, without considering their direction. It's the average over the test sample of the absolute differences between prediction and actual observation, where all individual differences have equal weight.  It is a common metric used to evaluate the performance of regression models.

*   **Key Concept:** MAE provides a straightforward and easily interpretable metric for assessing the accuracy of a regression model's predictions.

## 2. Calculating Mean Absolute Error (MAE)

*   **Formula:**

    ```
    MAE = (1/n) * Σ |yi - ŷi|
    ```

    Where:

    *   `n` is the total number of data points (observations).
    *   `yi` is the actual (true) value of the i-th data point.
    *   `ŷi` is the predicted value of the i-th data point.
    *   `Σ` represents the summation over all data points (i = 1 to n).
    *   `|yi - ŷi|` represents the absolute value of the difference between the actual and predicted values for the i-th data point.  This is the *absolute error* for a single data point.

*   **Step-by-Step Calculation:**

    1.  **Calculate the error for each data point:**  Subtract the predicted value (`ŷi`) from the actual value (`yi`).
    2.  **Take the absolute value of each error:**  This ensures that all errors are positive, regardless of whether the prediction was too high or too low.
    3.  **Sum the absolute errors:** Add up all the absolute values calculated in the previous step.
    4.  **Divide by the number of data points:** Divide the sum of absolute errors by the total number of data points (`n`).  This gives the average absolute error.

*   **Example:**

    Suppose you have the following actual and predicted values:

    | Data Point | Actual Value (yi) | Predicted Value (ŷi) |
    |---|---|---|
    | 1 | 5 | 4 |
    | 2 | 8 | 9 |
    | 3 | 12 | 10 |
    | 4 | 15 | 16 |
    | 5 | 20 | 18 |

    1.  **Errors:**  (5-4) = 1, (8-9) = -1, (12-10) = 2, (15-16) = -1, (20-18) = 2
    2.  **Absolute Errors:** |1| = 1, |-1| = 1, |2| = 2, |-1| = 1, |2| = 2
    3.  **Sum of Absolute Errors:** 1 + 1 + 2 + 1 + 2 = 7
    4.  **MAE:** 7 / 5 = 1.4

    Therefore, the MAE for this set of predictions is 1.4.

## 3. Advantages and Disadvantages of MAE

*   **Advantages:**

    *   **Easy to Understand and Interpret:** MAE is very intuitive and easy to understand.  It represents the average magnitude of errors in the same units as the target variable.
    *   **Robust to Outliers:** MAE is less sensitive to outliers compared to metrics like MSE and RMSE. Because it uses the absolute value of the errors, it does not square the errors, so outliers have less of an impact on the overall score.
    *   **All Errors are Weighted Equally:** Every prediction error contributes equally to the final MAE score.

*   **Disadvantages:**

    *   **Not Differentiable at Zero:** The absolute value function is not differentiable at zero, which can be problematic for some optimization algorithms used in machine learning.  This makes it harder to find the optimal model parameters directly.
    *   **May Not Penalize Large Errors Enough:**  Because MAE treats all errors equally, it might not be suitable for applications where large errors are significantly more costly than small errors.  In such cases, metrics like MSE or RMSE, which penalize larger errors more heavily, might be more appropriate.

## 4. Comparison with Other Regression Metrics

*   **MAE vs. Mean Squared Error (MSE):**

    *   **MAE:** Average of absolute errors.
    *   **MSE:** Average of squared errors.

    *   **Sensitivity to Outliers:** MAE is more robust to outliers than MSE. MSE penalizes outliers much more heavily because it squares the errors.
    *   **Interpretability:** MAE is generally easier to interpret because it's in the same units as the target variable. The units for MSE are the square of the target variable's units.
    *   **Optimization:** MSE is differentiable everywhere, making it easier to optimize using gradient-based methods.

*   **MAE vs. Root Mean Squared Error (RMSE):**

    *   **MAE:** Average of absolute errors.
    *   **RMSE:** Square root of the average of squared errors.

    *   **Sensitivity to Outliers:** MAE is more robust to outliers than RMSE. RMSE is sensitive because of the squaring operation.
    *   **Interpretability:** Both MAE and RMSE are relatively easy to interpret, although RMSE is often seen as slightly less intuitive due to the square root.  RMSE is in the same units as the target variable.
    *   **Magnitude of Values:** RMSE will always be greater than or equal to MAE. The difference is larger when the variance in the individual errors is large.

    *   **Use Cases:**

        *   **MAE:** Preferred when outliers are present and you want a robust measure of average error.
        *   **MSE/RMSE:** Preferred when large errors are particularly undesirable and you want to penalize them more heavily.  Also, preferable for many optimization algorithms.

## 5. Interpreting MAE Values

*   **Units:** MAE is expressed in the same units as the target variable being predicted.  For example, if you're predicting house prices in dollars, the MAE will also be in dollars.

*   **Magnitude:** A lower MAE indicates a better model performance, meaning the model's predictions are closer to the actual values on average.

*   **Context:** The interpretation of the MAE value depends on the context of the problem. A MAE of $10,000 might be acceptable for predicting house prices, but completely unacceptable for predicting the temperature in a lab experiment.

*   **Example:** If you're predicting the number of ice cream cones sold per day, and your model has an MAE of 5, it means that, on average, your model's predictions are off by 5 ice cream cones per day.

## 6. Applying MAE to Evaluate Regression Models

*   **Process:**

    1.  **Train a Regression Model:** Train your regression model on a training dataset.
    2.  **Make Predictions:** Use the trained model to make predictions on a separate test dataset.
    3.  **Calculate MAE:** Calculate the MAE between the predicted values and the actual values in the test dataset.
    4.  **Interpret the MAE:** Use the MAE value to assess the performance of your model.  Compare it to other models, or to a baseline performance level.

*   **Example (Python using Scikit-learn):**

    ```python
    from sklearn.metrics import mean_absolute_error
    import numpy as np

    # Example actual and predicted values
    y_true = np.array([3, -0.5, 2, 7])
    y_predicted = np.array([2.5, 0.0, 2, 8])

    # Calculate MAE
    mae = mean_absolute_error(y_true, y_predicted)

    print(f"Mean Absolute Error (MAE): {mae}") # Output: Mean Absolute Error (MAE): 0.5
    ```

## 7. Practice Questions and Exercises

**Question 1:**

Calculate the MAE for the following actual and predicted values:

| Actual | Predicted |
|---|---|
| 10 | 12 |
| 15 | 14 |
| 20 | 18 |
| 25 | 26 |
| 30 | 29 |

**Answer:**

1.  **Errors:** -2, 1, 2, -1, 1
2.  **Absolute Errors:** 2, 1, 2, 1, 1
3.  **Sum of Absolute Errors:** 2 + 1 + 2 + 1 + 1 = 7
4.  **MAE:** 7 / 5 = 1.4

**Question 2:**

Explain in your own words why MAE is considered more robust to outliers than MSE.

**Answer:**

MAE calculates the average of the absolute differences between predicted and actual values.  Unlike MSE, it does not square these differences.  Squaring the errors in MSE gives disproportionately larger weight to the larger errors caused by outliers, making MSE highly sensitive to their presence.  Since MAE simply takes the absolute value, the impact of outliers is less pronounced, resulting in a more robust measure of average error.

**Question 3:**

You are building a model to predict the sales of a product. You have two models, Model A with an MAE of 10 units and Model B with an MAE of 15 units. Which model would you choose, assuming all other factors are equal? Why?

**Answer:**

I would choose Model A because it has a lower MAE (10 units) compared to Model B (15 units).  A lower MAE indicates that Model A's predictions are, on average, closer to the actual sales values.  Therefore, Model A is the better-performing model based on this metric.

**Question 4:**

What are the units of MAE if you are predicting the weight of a person in kilograms?

**Answer:**

The units of MAE would also be kilograms (kg).  MAE is always expressed in the same units as the target variable being predicted.

## 8. Important Points to Remember

*   MAE is a measure of the average magnitude of errors in a set of predictions.
*   It is easy to understand and interpret.
*   It is robust to outliers compared to MSE and RMSE.
*   It treats all errors equally.
*   The choice between MAE, MSE, and RMSE depends on the specific application and the relative importance of different types of errors.
*   Always consider the context when interpreting MAE values. A "good" MAE is relative to the scale of the problem.
