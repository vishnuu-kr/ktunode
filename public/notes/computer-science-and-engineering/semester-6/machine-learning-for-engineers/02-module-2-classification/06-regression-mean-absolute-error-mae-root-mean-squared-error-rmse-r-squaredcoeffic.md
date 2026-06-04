---
title: "Regression - Mean Absolute Error (MAE), Root Mean Squared Error (RMSE), R Squared/Coefficient of Determination."
subject: "MACHINE LEARNING FOR ENGINEERS"
module: "Module 2: Classification  "
branch: "Computer Science and Engineering"
semester: 6
topicId: "684162780fc9aa1fdbc8bf51"
status: "completed"
scrapedAt: "2026-05-20T16:55:04.026Z"
---
# Machine Learning for Engineers - Module 2: Classification (Focus on Regression Metrics)

This module introduces fundamental concepts in machine learning classification. While the topic title mentions "Classification," this particular section delves into **regression evaluation metrics**, which are crucial for understanding how well a regression model predicts continuous values. These metrics are often used to evaluate models in various engineering applications where prediction is key.

---

## 1. Introduction to Regression Evaluation

Regression is a supervised learning task where the goal is to predict a continuous output variable (the target) based on one or more input features. Just like in classification, where we evaluate the accuracy of predicted labels, in regression, we need to measure the **goodness of fit** of our predicted continuous values against the actual observed values.

**Key Concept:** **Error** in regression refers to the difference between the actual value of the target variable and the value predicted by the regression model.

We use various **regression metrics** to quantify this error. These metrics help us understand how close our model's predictions are to the real data.

---

## 2. Mean Absolute Error (MAE)

The Mean Absolute Error (MAE) is one of the simplest and most intuitive regression evaluation metrics. It measures the average magnitude of the errors in a set of predictions, without considering their direction.

### Key Concepts and Definitions

*   **Absolute Error:** The absolute difference between the actual value ($y_i$) and the predicted value ($\hat{y}_i$) for a single data point $i$.
    *   Formula: $|y_i - \hat{y}_i|$

*   **Mean Absolute Error (MAE):** The average of all the absolute errors across all data points in the dataset.
    *   Formula: $MAE = \frac{1}{n} \sum_{i=1}^{n} |y_i - \hat{y}_i|$
        *   Where:
            *   $n$ is the number of data points.
            *   $y_i$ is the actual value of the target variable for the $i$-th data point.
            *   $\hat{y}_i$ is the predicted value of the target variable for the $i$-th data point.

### How it Works

MAE calculates the difference between each actual value and its predicted value, takes the absolute value of these differences (so negative errors don't cancel out positive errors), and then averages these absolute differences.

### Interpretation

*   **Lower MAE is better:** A lower MAE indicates that the model's predictions are closer to the actual values on average.
*   **Units:** MAE has the same units as the target variable. For example, if you are predicting house prices in dollars, the MAE will also be in dollars.
*   **Robustness to Outliers:** MAE is generally more robust to outliers than RMSE because it doesn't square the errors. A large error contributes linearly to the MAE, rather than quadratically.

### Example

Let's say we have the following actual and predicted values for house prices (in thousands of dollars):

| House | Actual Price ($y_i$) | Predicted Price ($\hat{y}_i$) | Absolute Error ($|y_i - \hat{y}_i|$) |
| :---- | :------------------- | :---------------------------- | :--------------------------------- |
| 1     | 300                  | 310                           | $|300 - 310| = 10$                  |
| 2     | 450                  | 440                           | $|450 - 440| = 10$                  |
| 3     | 200                  | 250                           | $|200 - 250| = 50$                  |
| 4     | 600                  | 580                           | $|600 - 580| = 20$                  |

**Calculation of MAE:**

$MAE = \frac{10 + 10 + 50 + 20}{4} = \frac{90}{4} = 22.5$

So, the Mean Absolute Error is $22.5$ thousand dollars. This means that, on average, our model's predictions are off by $22,500$.

---

## 3. Root Mean Squared Error (RMSE)

The Root Mean Squared Error (RMSE) is another widely used metric for evaluating regression models. It quantifies the average magnitude of the errors, but it penalizes larger errors more heavily than MAE due to the squaring operation.

### Key Concepts and Definitions

*   **Squared Error:** The square of the difference between the actual value ($y_i$) and the predicted value ($\hat{y}_i$) for a single data point $i$.
    *   Formula: $(y_i - \hat{y}_i)^2$

*   **Mean Squared Error (MSE):** The average of all the squared errors across all data points.
    *   Formula: $MSE = \frac{1}{n} \sum_{i=1}^{n} (y_i - \hat{y}_i)^2$

*   **Root Mean Squared Error (RMSE):** The square root of the Mean Squared Error.
    *   Formula: $RMSE = \sqrt{\frac{1}{n} \sum_{i=1}^{n} (y_i - \hat{y}_i)^2}$

### How it Works

RMSE first calculates the difference between each actual value and its predicted value, squares these differences, averages the squared differences (MSE), and then takes the square root of the result.

### Interpretation

*   **Lower RMSE is better:** A lower RMSE indicates a better fit of the model to the data.
*   **Units:** RMSE has the same units as the target variable, just like MAE.
*   **Sensitivity to Outliers:** RMSE is more sensitive to outliers than MAE. A single large error will have a much larger impact on RMSE than on MAE because the errors are squared. This can be beneficial if you want your model to be heavily penalized for making large mistakes.

### Example

Using the same house price data as before:

| House | Actual Price ($y_i$) | Predicted Price ($\hat{y}_i$) | Error ($y_i - \hat{y}_i$) | Squared Error ($(y_i - \hat{y}_i)^2$) |
| :---- | :------------------- | :---------------------------- | :------------------------ | :------------------------------------ |
| 1     | 300                  | 310                           | -10                       | $(-10)^2 = 100$                       |
| 2     | 450                  | 440                           | 10                        | $(10)^2 = 100$                        |
| 3     | 200                  | 250                           | -50                       | $(-50)^2 = 2500$                      |
| 4     | 600                  | 580                           | 20                        | $(20)^2 = 400$                        |

**Calculation of MSE:**

$MSE = \frac{100 + 100 + 2500 + 400}{4} = \frac{3100}{4} = 775$

**Calculation of RMSE:**

$RMSE = \sqrt{775} \approx 27.84$

So, the Root Mean Squared Error is approximately $27.84$ thousand dollars. Notice how the RMSE ($27.84$) is higher than the MAE ($22.5$), primarily due to the large error of $-50$ being squared.

---

## 4. R-squared (Coefficient of Determination)

R-squared, also known as the Coefficient of Determination, is a statistical measure that represents the proportion of the variance in the dependent variable that is predictable from the independent variable(s). It indicates how well the regression predictions approximate the real data.

### Key Concepts and Definitions

*   **Total Sum of Squares (SST):** The total variation in the dependent variable around its mean. It measures the variance in the actual values.
    *   Formula: $SST = \sum_{i=1}^{n} (y_i - \bar{y})^2$
        *   Where $\bar{y}$ is the mean of the actual values.

*   **Residual Sum of Squares (SSR) / Sum of Squared Errors (SSE):** The sum of the squared differences between the actual values and the predicted values. This represents the unexplained variation by the model.
    *   Formula: $SSE = \sum_{i=1}^{n} (y_i - \hat{y}_i)^2$
        *   *(Note: This is the numerator of the MSE formula)*

*   **R-squared ($R^2$):** The proportion of the variance in the dependent variable that is predictable from the independent variable(s).
    *   Formula: $R^2 = 1 - \frac{SSE}{SST}$
    *   Alternative Formula: $R^2 = \frac{SST - SSE}{SST}$

### How it Works

R-squared compares the model's performance to a baseline model that simply predicts the mean of the target variable.

*   If $SSE$ is close to zero (meaning the model's predictions are very close to the actual values), then $R^2$ will be close to 1.
*   If $SSE$ is close to $SST$ (meaning the model is no better than predicting the mean), then $R^2$ will be close to 0.
*   $R^2$ can even be negative if the model is worse than predicting the mean (though this is rare with well-trained models).

### Interpretation

*   **$R^2$ ranges from 0 to 1 (typically):**
    *   **$R^2 = 1$:** The model explains all the variability in the dependent variable. This is the ideal scenario, but rarely achieved in practice.
    *   **$R^2 = 0$:** The model explains none of the variability in the dependent variable. The model is no better than simply predicting the mean of the target variable.
    *   **$0 < R^2 < 1$:** The model explains a certain percentage of the variability. For example, an $R^2$ of $0.75$ means the model explains $75\%$ of the variance in the target variable.

*   **Higher $R^2$ is generally better:** A higher R-squared value indicates that the model's predictions are a better fit to the observed data.

*   **Context is Key:** What constitutes a "good" R-squared value depends heavily on the domain. In some fields, $R^2$ values above $0.5$ might be considered excellent, while in others, much higher values are expected.

*   **Limitations:**
    *   **Does not indicate causation:** A high $R^2$ does not mean the independent variables *cause* the changes in the dependent variable.
    *   **Increases with more predictors:** Adding more independent variables to a model will always increase or keep $R^2$ the same, even if those variables are not truly significant. This is why the **Adjusted R-squared** metric exists, which penalizes the addition of non-significant predictors.

### Example

Using the same house price data:

| House | Actual Price ($y_i$) | Predicted Price ($\hat{y}_i$) | Error ($y_i - \hat{y}_i$) | Squared Error ($(y_i - \hat{y}_i)^2$) |
| :---- | :------------------- | :---------------------------- | :------------------------ | :------------------------------------ |
| 1     | 300                  | 310                           | -10                       | 100                                   |
| 2     | 450                  | 440                           | 10                        | 100                                   |
| 3     | 200                  | 250                           | -50                       | 2500                                  |
| 4     | 600                  | 580                           | 20                        | 400                                   |

**1. Calculate the Mean of Actual Prices ($\bar{y}$):**

$\bar{y} = \frac{300 + 450 + 200 + 600}{4} = \frac{1550}{4} = 387.5$

**2. Calculate Total Sum of Squares (SST):**

*   $(y_1 - \bar{y})^2 = (300 - 387.5)^2 = (-87.5)^2 = 7656.25$
*   $(y_2 - \bar{y})^2 = (450 - 387.5)^2 = (62.5)^2 = 3906.25$
*   $(y_3 - \bar{y})^2 = (200 - 387.5)^2 = (-187.5)^2 = 35156.25$
*   $(y_4 - \bar{y})^2 = (600 - 387.5)^2 = (212.5)^2 = 45156.25$

$SST = 7656.25 + 3906.25 + 35156.25 + 45156.25 = 91875$

**3. Calculate Residual Sum of Squares (SSE):**

From the previous RMSE example, we found $SSE = 3100$.

**4. Calculate R-squared ($R^2$):**

$R^2 = 1 - \frac{SSE}{SST} = 1 - \frac{3100}{91875} = 1 - 0.03374 \approx 0.96626$

So, the R-squared value is approximately $0.966$. This indicates that about $96.6\%$ of the variance in house prices can be explained by the model. This is a very high $R^2$, suggesting a good fit for this small dataset.

---

## 5. Comparison of Metrics and When to Use Them

| Metric | What it measures                       | Units          | Sensitivity to Outliers | Interpretation                                    | Best for                                                                |
| :----- | :------------------------------------- | :------------- | :---------------------- | :------------------------------------------------ | :---------------------------------------------------------------------- |
| **MAE** | Average absolute difference            | Same as target | Low                     | Average error magnitude. Robust.                  | Understanding average error, when outliers are not disproportionately penalized. |
| **RMSE**| Square root of average squared diff. | Same as target | High                    | Average error magnitude, penalizes large errors. | When large errors are more concerning. Common default metric.           |
| **R-squared** | Proportion of variance explained | 0 to 1         | Indirectly              | Model's ability to explain data variance.         | Assessing overall model fit, comparing models with different scales.    |

**Key Considerations:**

*   **Outlier Treatment:** If your data has significant outliers and you want to downplay their impact on your evaluation, MAE might be preferred. If you want to heavily penalize large errors, RMSE is a better choice.
*   **Interpretability:** MAE is often easier to interpret intuitively because it represents the average absolute error.
*   **Model Comparison:** R-squared is excellent for comparing models of different scales or when you want to understand the proportion of variance explained.
*   **Engineering Context:** In engineering, the choice of metric often depends on the specific application and what kind of error is most costly or critical to minimize. For instance, in controlling a delicate process, large deviations (captured more by RMSE) might be unacceptable. In demand forecasting, a consistent average error (captured by MAE) might be more important.

---

## 6. Practice Questions

**Question 1:**
You are building a model to predict the temperature in a city. Your model predicts the following temperatures: [20, 22, 25, 23]. The actual temperatures were: [21, 23, 24, 22].
Calculate the Mean Absolute Error (MAE) for this model.

**Question 2:**
Using the same data as Question 1: [Actual: 21, 23, 24, 22], [Predicted: 20, 22, 25, 23].
Calculate the Root Mean Squared Error (RMSE) for this model.

**Question 3:**
Consider a model with an $R^2$ of 0.85. What does this value imply about the model's performance?
a) The model explains 15% of the variance in the target variable.
b) The model explains 85% of the variance in the target variable.
c) The model's predictions are, on average, 85% accurate.
d) The model is perfect.

**Question 4:**
Which metric is more sensitive to outliers and why?
a) MAE, because it averages absolute errors.
b) RMSE, because it squares the errors before averaging.
c) R-squared, because it compares model performance to the mean.
d) All metrics are equally sensitive to outliers.

**Question 5:**
You are evaluating two models:
*   Model A has MAE = 5 and RMSE = 8.
*   Model B has MAE = 6 and RMSE = 7.

Which model would you choose and why, considering you want to minimize large errors?

---

## 7. Answers to Practice Questions

**Answer 1:**
*   Errors:
    *   $|21 - 20| = 1$
    *   $|23 - 22| = 1$
    *   $|24 - 25| = 1$
    *   $|22 - 23| = 1$
*   MAE = $\frac{1 + 1 + 1 + 1}{4} = \frac{4}{4} = 1$.
    The MAE is 1 degree.

**Answer 2:**
*   Errors: $(21-20)=1$, $(23-22)=1$, $(24-25)=-1$, $(22-23)=-1$.
*   Squared Errors: $1^2=1$, $1^2=1$, $(-1)^2=1$, $(-1)^2=1$.
*   MSE = $\frac{1 + 1 + 1 + 1}{4} = \frac{4}{4} = 1$.
*   RMSE = $\sqrt{1} = 1$.
    The RMSE is 1 degree.
    *(In this specific case, MAE and RMSE are the same because all errors are of the same magnitude.)*

**Answer 3:**
The correct answer is **b) The model explains 85% of the variance in the target variable.**
$R^2$ directly represents the proportion of variance explained.

**Answer 4:**
The correct answer is **b) RMSE, because it squares the errors before averaging.**
Squaring large errors magnifies their contribution to the overall error metric, making RMSE more sensitive to outliers than MAE.

**Answer 5:**
You would choose **Model B**.
Here's why:
*   **MAE:** Model A (5) is better than Model B (6) in terms of average absolute error.
*   **RMSE:** Model B (7) is better than Model A (8) in terms of root mean squared error.

Since the question specifies wanting to "minimize large errors," the metric that penalizes large errors more is RMSE. Model B has a lower RMSE, indicating it handles large errors more effectively than Model A, even though its average absolute error is slightly higher.

---

## 8. Important Points to Remember

*   **MAE vs. RMSE:** Both measure the average error. RMSE penalizes larger errors more significantly due to squaring.
*   **R-squared:** Indicates the proportion of variance in the target variable that the model can explain. A higher R-squared is generally better.
*   **Units:** MAE and RMSE have the same units as the target variable, making them directly interpretable.
*   **Outliers:** Choose your metric carefully based on how you want to treat outliers in your evaluation.
*   **Context Matters:** The "best" metric depends on the specific engineering problem and what kind of prediction errors are most critical.
*   **Adjusted R-squared:** Consider Adjusted R-squared when you have multiple predictors to avoid overfitting.

---
This concludes the notes for regression evaluation metrics. Understanding these metrics is crucial for assessing the performance of your regression models in various engineering applications.
