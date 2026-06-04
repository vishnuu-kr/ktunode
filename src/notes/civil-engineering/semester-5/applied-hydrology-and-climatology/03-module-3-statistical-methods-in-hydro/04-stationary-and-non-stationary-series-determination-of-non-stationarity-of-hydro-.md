---
title: "stationary and non-stationary series- determination of non-stationarity of hydro-climatic series (no problems)"
subject: "APPLIED HYDROLOGY AND CLIMATOLOGY"
module: "Module 3: Statistical methods in hydro"
branch: "Civil Engineering"
semester: 5
topicId: "689f15cd56b5e963ba810f0a"
status: "completed"
scrapedAt: "2026-05-20T18:47:33.945Z"
---
# APPLIED HYDROLOGY AND CLIMATOLOGY: Module 3 - Statistical Methods in Hydro

## Topic: Stationary and Non-Stationary Series - Determination of Non-Stationarity in Hydro-Climatic Series

This module delves into the fundamental concept of stationarity in time series analysis, a critical aspect of understanding and modeling hydro-climatic phenomena. We will explore what stationarity means, why it's important, and how to identify when a hydro-climatic series deviates from this assumption.

---

### 1. Introduction to Time Series Analysis in Hydrology and Climatology

Hydro-climatic data (e.g., rainfall, streamflow, temperature) are collected over time, forming time series. Analyzing these series is crucial for:

*   **Understanding past behavior:** Identifying patterns, trends, and anomalies.
*   **Predicting future behavior:** Forecasting future values for design, management, and planning.
*   **Assessing impacts:** Evaluating the effects of climate change, land-use change, or water management interventions.

---

### 2. Understanding Stationarity

**Key Concept:** Stationarity is a property of a time series where its statistical characteristics (mean, variance, autocorrelation) do not change over time.

**Definition:** A time series $X_t$ is considered **stationary** if its probability distribution function is invariant with respect to time shifts. This implies that:

*   **The mean is constant:** $E[X_t] = \mu$ for all $t$.
*   **The variance is constant:** $Var(X_t) = E[(X_t - \mu)^2] = \sigma^2$ for all $t$.
*   **The autocovariance depends only on the time lag:** $Cov(X_t, X_{t+k}) = \gamma_k$ for all $t$ and any lag $k$.

**Types of Stationarity:**

*   **Strict Stationarity:** The entire joint probability distribution of any set of observations is invariant with respect to time shifts. This is a very strong condition and rarely met in practice.
*   **Weak Stationarity (or Covariance Stationarity):** This is the more practical and commonly used definition. It requires that the first two moments (mean and variance) and the autocovariance structure are constant over time. For most hydrological applications, weak stationarity is sufficient.

---

### 3. Why is Stationarity Important in Hydro-Climatic Analysis?

Many classical statistical methods used in hydrology and climatology are based on the assumption of stationarity. These include:

*   **Parameter estimation:** Estimating means, variances, and correlation coefficients assumes these values are representative of the entire series.
*   **Forecasting models:** Models like ARIMA (Autoregressive Integrated Moving Average) explicitly assume stationarity (or can be made stationary through differencing).
*   **Frequency analysis:** Estimating extreme values (e.g., flood quantiles) relies on the assumption that the underlying data generation process remains consistent.
*   **Hypothesis testing:** Statistical tests for trends, seasonality, etc., often assume stationary residuals.

**If a series is non-stationary, applying stationary-based methods can lead to:**

*   **Misleading conclusions:** Incorrectly identifying trends or patterns.
*   **Inaccurate predictions:** Forecasts that do not reflect future behavior.
*   **Poor design decisions:** Infrastructure designed based on outdated statistical properties may be inadequate.

---

### 4. Non-Stationarity in Hydro-Climatic Series

**Definition:** A time series is **non-stationary** if one or more of its statistical characteristics (mean, variance, autocorrelation structure) change over time.

**Common Sources of Non-Stationarity in Hydro-Climatic Data:**

*   **Trends:**
    *   **Secular trends:** Long-term increases or decreases in mean values (e.g., global warming leading to increasing temperatures).
    *   **Trends in variance:** Changes in the variability of data (e.g., increased rainfall intensity variability).
*   **Seasonality:** Cyclical patterns that repeat at fixed intervals (e.g., daily, weekly, monthly, annual cycles). While often handled separately, if the seasonal amplitude or timing changes, it can represent non-stationarity.
*   **Structural Breaks (Regime Shifts):** Abrupt changes in the statistical properties of the series, often due to events like:
    *   Dam construction or operation changes.
    *   Land-use changes (deforestation, urbanization).
    *   Major climate shifts or climate change impacts.
    *   Changes in measurement techniques or data recording.
*   **Changing variance (Heteroscedasticity):** The spread of the data changes over time.
*   **Changing autocorrelation structure:** The dependence between observations at different lags changes.

---

### 5. Determination of Non-Stationarity in Hydro-Climatic Series

Identifying non-stationarity is a critical first step in time series analysis. Several methods, both visual and statistical, can be employed.

#### 5.1. Visual Inspection

**Methods:**

*   **Time Series Plots:** Plotting the data against time is the most basic and often revealing method. Look for:
    *   **Upward or downward slopes:** Indicating a trend.
    *   **Increasing or decreasing spread:** Indicating changing variance.
    *   **Apparent shifts in level:** Suggesting structural breaks.
    *   **Consistent seasonal patterns:** If these patterns change in amplitude or phase, it suggests non-stationarity.

*   **Rolling Statistics Plots:** Plotting the moving average and moving variance can highlight changes in the mean and variance over time.
    *   **Moving Average:** If the moving average plot shows a clear trend, the series is likely non-stationary in its mean.
    *   **Moving Variance:** If the moving variance plot shows a trend, the series is likely non-stationary in its variance.

*   **Seasonal Subseries Plots:** Plotting data for each season (e.g., Januarys, Februarys, etc.) against the year can reveal changes in seasonality.

*   **Box Plots by Year/Period:** Grouping data by year or distinct time periods and creating box plots can reveal changes in median, quartiles, and outliers, indicating shifts in the distribution.

**Example:** Plotting annual average temperature over several decades. If the plot shows a consistent upward trend, this indicates non-stationarity in the mean.

#### 5.2. Statistical Tests

These tests provide a more objective assessment of non-stationarity.

**A. Tests for Trend (Non-Stationarity in the Mean)**

These tests aim to detect a systematic upward or downward movement in the data.

*   **Mann-Kendall Trend Test:**
    *   **Description:** A non-parametric test that assesses whether there is a monotonic upward or downward trend in the time series. It compares the sign of differences between all pairs of data points.
    *   **Hypotheses:**
        *   $H_0$: No trend (the series is stationary in the mean).
        *   $H_1$: A trend exists (the series is non-stationary in the mean).
    *   **Pros:** Robust to outliers, does not assume normality.
    *   **Cons:** Primarily detects monotonic trends, less sensitive to non-monotonic trends.

*   **Linear Regression Trend Test:**
    *   **Description:** Fits a linear regression model where the time variable ($t$) is the independent variable and the hydro-climatic variable ($X_t$) is the dependent variable ($X_t = \beta_0 + \beta_1 t + \epsilon_t$). The test then checks the significance of the slope coefficient ($\beta_1$).
    *   **Hypotheses:**
        *   $H_0$: $\beta_1 = 0$ (no linear trend).
        *   $H_1$: $\beta_1 \neq 0$ (a linear trend exists).
    *   **Pros:** Simple to implement and interpret.
    *   **Cons:** Assumes linearity and often requires residuals to be stationary and normally distributed for valid inference. Can be sensitive to outliers.

*   **Student's t-test (for comparing means of two periods):**
    *   **Description:** If you suspect a change at a specific point in time (e.g., after a specific event), you can split the series into two periods and compare their means using a t-test.
    *   **Hypotheses:**
        *   $H_0$: $\mu_1 = \mu_2$ (means of the two periods are equal).
        *   $H_1$: $\mu_1 \neq \mu_2$ (means are different).
    *   **Pros:** Straightforward for detecting specific point changes.
    *   **Cons:** Requires a priori knowledge of a potential change point. Assumes normality and equal variances (or uses Welch's t-test if variances are unequal).

**B. Tests for Structural Breaks (Discontinuities)**

These tests are designed to detect abrupt shifts in the mean, variance, or other parameters.

*   **Chow Test:**
    *   **Description:** A classical test used to detect structural breaks in a time series, typically in regression models. It compares the sum of squared residuals from a regression model fitted to the entire series with the sum of squared residuals from separate regressions fitted to sub-periods, based on a suspected break point.
    *   **Hypotheses:**
        *   $H_0$: No structural break at the specified point.
        *   $H_1$: A structural break occurs at the specified point.
    *   **Pros:** Directly tests for breaks at a specific, hypothesized point.
    *   **Cons:** Requires prior knowledge of the break point. Sensitive to assumptions of the underlying regression model.

*   **CUSUM (Cumulative Sum) Test:**
    *   **Description:** Based on the cumulative sum of deviations of the data from its mean (or from a regression line). If the series is stationary, the CUSUM plot should fluctuate around zero. A persistent upward or downward movement in the CUSUM plot indicates a trend or break.
    *   **Hypotheses:**
        *   $H_0$: No structural break.
        *   $H_1$: A structural break exists.
    *   **Pros:** Can detect breaks that are not easily identified by visual inspection or specific point tests.

*   **Pettitt Test:**
    *   **Description:** A non-parametric test for detecting a single change point in a time series. It is similar in spirit to the Mann-Kendall test but focuses on identifying the specific point in time where the change occurred.
    *   **Hypotheses:**
        *   $H_0$: No change point.
        *   $H_1$: A change point exists.
    *   **Pros:** Non-parametric and specifically designed to locate a single change point.

*   **Bayesian Change Point Detection:**
    *   **Description:** Uses Bayesian methods to estimate the probability of a change point occurring at each time step, allowing for the detection of multiple or gradual changes.

**C. Tests for Changing Variance (Heteroscedasticity)**

These tests examine if the variability of the series changes over time.

*   **ARCH/GARCH Models (Autoregressive Conditional Heteroskedasticity / Generalized ARCH):**
    *   **Description:** While primarily modeling techniques, the specification and testing of these models inherently involve identifying and quantifying changing variance. If an ARCH or GARCH model significantly improves the fit compared to a simple model with constant variance, it indicates heteroscedasticity and thus non-stationarity in variance.
    *   **Pros:** Powerful for modeling and forecasting volatility.
    *   **Cons:** Can be complex to implement and interpret.

*   **White Test:**
    *   **Description:** A general test for heteroscedasticity in regression models, checking if the variance of the error term is related to the independent variables. When applied to time series residuals, it can detect changes in variance.

*   **Levene Test / Bartlett's Test:**
    *   **Description:** Typically used to compare variances of multiple groups. By grouping data into different time periods, these tests can assess if variances differ significantly across these periods.
    *   **Pros:** Relatively simple to understand and apply for group comparisons.
    *   **Cons:** Assumes normality for Bartlett's test; Levene's is more robust. Requires pre-defined groups.

**D. Tests for Stationarity in Autocorrelation Structure**

*   **Ljung-Box Test:**
    *   **Description:** A test for the presence of serial correlation in a time series. It tests whether a group of autocorrelations (up to a certain lag) are significantly different from zero.
    *   **Hypotheses:**
        *   $H_0$: The autocorrelations up to lag $m$ are all zero (the series is white noise, or stationary with no significant autocorrelation).
        *   $H_1$: At least one autocorrelation up to lag $m$ is non-zero.
    *   **Application:** If the Ljung-Box test is rejected, it implies significant autocorrelation, which is a characteristic of stationary series. However, if the autocorrelation structure *changes* over time, this test alone might not capture it effectively.

*   **Autocorrelation Function (ACF) and Partial Autocorrelation Function (PACF) Plots over time:**
    *   **Description:** Similar to rolling statistics, plotting ACF/PACF on segments of the data can reveal if the dependence structure is changing. For example, if the autocorrelation decays faster in later periods than in earlier periods, the structure is changing.

---

### 6. Important Points to Remember

*   **Stationarity is an Assumption, Not a Guarantee:** Most hydro-climatic series are inherently non-stationary due to climate change, land-use change, and natural variability.
*   **Multiple Forms of Non-Stationarity:** A series can be non-stationary in its mean, variance, or autocorrelation structure, or a combination thereof.
*   **Visual Inspection is Crucial:** Always start by plotting your data. Visual cues are invaluable for identifying potential issues.
*   **No Single Perfect Test:** Different tests are sensitive to different types of non-stationarity. A combination of tests is often recommended.
*   **Context Matters:** Understanding the physical processes influencing the hydro-climatic variable is essential for interpreting statistical findings about non-stationarity.
*   **Dealing with Non-Stationarity:** Once identified, non-stationarity needs to be addressed. This might involve:
    *   **Transformation:** Applying functions like logarithms or Box-Cox transformations to stabilize variance.
    *   **Differencing:** Taking the difference between consecutive observations to remove trends or seasonality.
    *   **Modeling:** Using models specifically designed for non-stationary data (e.g., ARIMA models with seasonal components, state-space models, time-varying parameter models).
    *   **Segmenting:** Analyzing data in segments where stationarity can be assumed within each segment.

---

### 7. Practice Questions

**Question 1:**
A hydro-climatologist is analyzing a 50-year time series of annual average rainfall for a region. Upon plotting the data, they observe a general upward trend in rainfall over the decades. Which type of statistical property is most likely changing in this series?
a) Autocorrelation
b) Variance
c) Mean
d) Seasonality

**Question 2:**
Which of the following statistical tests is primarily used to detect monotonic trends in a time series?
a) Ljung-Box Test
b) Mann-Kendall Test
c) White Test
d) Chow Test

**Question 3:**
If the moving variance of a river flow time series consistently increases over the period of record, the series is considered non-stationary in its:
a) Mean
b) Autocorrelation structure
c) Variance
d) Seasonality

**Question 4:**
A dam was constructed in 1985, and the streamflow downstream of the dam shows a significantly different pattern before and after this date. What type of non-stationarity is most likely present?
a) Secular trend
b) Seasonality
c) Structural break
d) Changing autocorrelation

**Question 5:**
Briefly explain why identifying non-stationarity is a crucial first step in analyzing hydro-climatic time series.

---

### 8. Answers to Practice Questions

**Answer 1:**
c) Mean. An upward trend in rainfall over decades directly indicates a change in the average value of the series over time.

**Answer 2:**
b) Mann-Kendall Test. The Mann-Kendall test is specifically designed to detect monotonic trends, making it suitable for assessing changes in the mean.

**Answer 3:**
c) Variance. An increasing moving variance directly signifies that the spread or variability of the river flow data is changing over time.

**Answer 4:**
c) Structural break. The construction of a dam is a significant event that can cause an abrupt change in the hydrological regime, leading to a structural break in the streamflow time series.

**Answer 5:**
Identifying non-stationarity is crucial because many classical statistical methods and hydrological models rely on the assumption of stationarity. Applying these methods to non-stationary data can lead to inaccurate parameter estimates, unreliable forecasts, and flawed conclusions about the underlying processes. Understanding non-stationarity allows for the selection of appropriate analytical techniques, data transformations, or modeling approaches that can properly account for changing statistical properties, leading to more robust and reliable results in hydro-climatic analysis and management.
