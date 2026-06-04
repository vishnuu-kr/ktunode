---
title: "methods for change point analysis"
subject: "APPLIED HYDROLOGY AND CLIMATOLOGY"
module: "Module 3: Statistical methods in hydro"
branch: "Civil Engineering"
semester: 5
topicId: "689f15cd56b5e963ba810f08"
status: "completed"
scrapedAt: "2026-05-20T18:47:32.557Z"
---
# APPLIED HYDROLOGY AND CLIMATOLOGY

## Module 3: Statistical Methods in Hydro

### Topic: Methods for Change Point Analysis

---

### Learning Outcomes

By the end of this topic, you should be able to:

*   Understand the concept of change point analysis in hydrological and climatological time series.
*   Identify different types of changes that can occur in time series data.
*   Explain the underlying principles of common change point detection methods.
*   Apply and interpret results from various statistical tests used for change point analysis.
*   Recognize the limitations and assumptions of different methods.
*   Discuss the application of change point analysis in hydrological and climatological studies.

---

### 1. Introduction to Change Point Analysis

**Key Concept:** A change point in a time series is a point in time at which the statistical properties of the series change. These properties can include the mean, variance, trend, autocorrelation, or distribution of the data.

**Why is it important in Hydrology and Climatology?**

*   **Understanding Climate Change Impacts:** Detecting shifts in temperature, precipitation, streamflow, or extreme events due to anthropogenic climate change.
*   **Identifying Anthropogenic Influences:** Detecting the impact of human activities like deforestation, urbanization, dam construction, or irrigation on water resources.
*   **Assessing Hydrological Regime Shifts:** Identifying changes in flood frequency, drought duration, or baseflow due to natural variability or external forcing.
*   **Model Calibration and Validation:** Ensuring that hydrological models are calibrated to appropriate periods and that changes in data quality are identified.
*   **Forecasting and Prediction:** Understanding past changes is crucial for improving future predictions.

**Types of Changes:**

*   **Mean Shift:** A sudden jump or drop in the average value of the time series.
    *   *Example:* A sudden increase in river discharge after a major dam failure or a significant shift in average monthly temperature.
*   **Variance Shift:** A change in the variability or spread of the data around its mean.
    *   *Example:* An increase in the variability of daily rainfall after a change in land use that affects local convection patterns.
*   **Trend Change:** A modification in the rate of increase or decrease of the time series.
    *   *Example:* A flattening of the rising trend in global mean temperature or an acceleration of sea-level rise.
*   **Autocorrelation Change:** A shift in the dependence of a data point on its past values.
    *   *Example:* A change in the persistence of streamflow, where previous flows have a stronger or weaker influence on future flows.
*   **Distributional Change:** A change in the underlying probability distribution of the data.
    *   *Example:* A shift from a normal distribution of daily rainfall to a more skewed distribution, indicating a change in the nature of rainfall events.
*   **Regime Shift:** A more general term referring to a significant and persistent change in the state of a system, often encompassing multiple statistical properties.

---

### 2. Methods for Change Point Detection

Change point detection methods can broadly be categorized into two main approaches:

**A. Offline (Retrospective) Methods:** These methods analyze the entire historical time series to identify change points that have already occurred.

**B. Online (Real-time) Methods:** These methods analyze data as it arrives and aim to detect changes as soon as they happen. This is more relevant for monitoring and early warning systems. For this module, we will focus primarily on offline methods.

#### 2.1. Parametric Methods

These methods assume a specific statistical model for the time series and test for changes in the parameters of that model.

**2.1.1. Likelihood Ratio Tests (LRTs)**

**Principle:** Compare the likelihood of the data under a model with a change point to the likelihood of the data under a model without a change point.

**Hypotheses:**
*   $H_0$: No change point exists.
*   $H_1$: A change point exists at time $k$.

**Procedure:**
1.  Assume the time series $X_1, \dots, X_n$ follows a certain distribution (e.g., Normal).
2.  Divide the series into two segments at a potential change point $k$.
3.  Calculate the likelihood of the data assuming a model with parameters $\theta_0$ for the first segment ($X_1, \dots, X_k$) and parameters $\theta_1$ for the second segment ($X_{k+1}, \dots, X_n$).
4.  Calculate the likelihood of the data assuming a single model with parameters $\theta$ for the entire series.
5.  The Likelihood Ratio Statistic (LRS) is calculated as:
    $LRS = -2 \log \left( \frac{L(\theta \mid X_1, \dots, X_n)}{L(\theta_0, \theta_1 \mid X_1, \dots, X_k, X_{k+1}, \dots, X_n)} \right)$
6.  The critical value for LRS can be derived from chi-squared distribution for simple cases or through simulation.

**Specific LRTs:**

*   **CUSUM (Cumulative Sum) Test (Page's Test):**
    *   **Principle:** Based on the cumulative sums of deviations from a target mean. A change in mean is indicated by a significant deviation in the CUSUM.
    *   **Procedure:**
        1.  Calculate the sample mean ($\bar{x}$) of the entire series.
        2.  Calculate the cumulative sums of deviations from the mean: $S_k = \sum_{i=1}^k (x_i - \bar{x})$.
        3.  The CUSUM statistic is $C_k = \max(0, C_{k-1} + x_k - \bar{x})$.
        4.  A change point is detected if $C_k$ exceeds a pre-determined threshold.
    *   **Advantages:** Sensitive to small, persistent shifts in the mean.
    *   **Disadvantages:** Less effective for detecting changes in variance or multiple change points.
    *   *Example:* Monitoring monthly average river discharge for a sudden shift in flow regime after a new water abstraction scheme.

*   **Pettitt Test:**
    *   **Principle:** A non-parametric test that identifies a single change point in the mean of a time series. It is based on the difference between the sum of the first $k$ observations and the sum of the remaining $n-k$ observations.
    *   **Procedure:**
        1.  Calculate the statistic $U_k = \sum_{i=1}^k x_i - \frac{k}{n-k} \sum_{i=k+1}^n x_i$.
        2.  The test statistic is $S_k = |U_k|$.
        3.  The change point is estimated at the $k$ that maximizes $S_k$.
        4.  Significance is determined by comparing the maximum $S_k$ to critical values derived from simulations.
    *   **Advantages:** Does not assume a specific distribution (non-parametric). Good for detecting a single mean shift.
    *   **Disadvantages:** Less powerful for detecting multiple change points or changes in variance.
    *   *Example:* Detecting a change in annual average rainfall in a region.

*   **SNHT (Single-Nearest-Neighbor Homogeneity Test) / Buys-Ballot Test:**
    *   **Principle:** Compares the mean of observations up to time $t$ with the mean of observations after time $t$. It involves calculating differences between smoothed values and a reference series.
    *   **Procedure:**
        1.  Divide the series into two parts at a potential change point $t$.
        2.  Calculate the mean of the first part ($\bar{x}_{1..t}$) and the mean of the second part ($\bar{x}_{t+1..n}$).
        3.  A simple version calculates the difference $\bar{x}_{1..t} - \bar{x}_{t+1..n}$.
        4.  A more robust version involves comparing smoothed versions of the two segments.
    *   **Advantages:** Relatively straightforward to understand and implement.
    *   **Disadvantages:** Sensitive to the choice of smoothing window.
    *   *Example:* Checking for a homogeneous period in historical temperature records from a weather station.

#### 2.1.2. Regression-Based Methods

**Principle:** Fit a regression model to the time series and test for changes in the regression coefficients or the overall fit at potential change points.

*   **Chow Test:**
    *   **Principle:** Used to test for structural breaks in a regression model. It compares the sum of squared residuals from a regression fitted to the entire data with the sum of squared residuals from regressions fitted to segments before and after a potential break point.
    *   **Procedure:**
        1.  Fit a regression model to the entire series ($y_t = \beta_0 + \beta_1 x_t + \epsilon_t$).
        2.  Assume a potential break point at time $k$. Fit two separate regressions: one for $y_1, \dots, y_k$ and another for $y_{k+1}, \dots, y_n$.
        3.  Calculate the Sum of Squared Residuals (SSR) for each case.
        4.  The Chow test statistic is derived from the ratio of SSRs, often related to the F-statistic.
    *   **Advantages:** Can be applied to any regression model.
    *   **Disadvantages:** Requires pre-specifying the break point or testing all possible break points. Sensitive to the distribution of residuals.
    *   *Example:* Testing if the relationship between rainfall and streamflow has changed after a significant land-use alteration.

#### 2.1.3. Bayesian Change Point Analysis

**Principle:** Incorporates prior beliefs about the probability of change points and their locations, and updates these beliefs with the observed data. It provides a posterior probability distribution for the number and location of change points.

**Advantages:**
*   Provides a full probability distribution for the number and location of change points, allowing for more nuanced interpretation.
*   Can handle complex models and multiple change points more effectively.
*   Can incorporate prior knowledge.

**Disadvantages:**
*   Computationally more intensive, often requiring Markov Chain Monte Carlo (MCMC) methods.
*   Requires specifying prior distributions.

---

#### 2.2. Non-Parametric Methods

These methods make fewer assumptions about the underlying data distribution.

**2.2.1. Rank-Based Methods**

**Principle:** Utilize the ranks of the data rather than the raw values, making them less sensitive to outliers and distributional assumptions.

*   **Mann-Kendall Trend Test with Sequential Application:**
    *   **Principle:** While the Mann-Kendall test itself detects trends, applying it sequentially on cumulative data or differences can reveal changes in the trend.
    *   **Procedure:** One common approach is to use the Mann-Kendall test on cumulative sums of differences between observations and a reference value.
    *   **Advantages:** Robust to outliers and non-normal data.
    *   **Disadvantages:** Can be less powerful than parametric methods when assumptions are met.

**2.2.2. Kernel-Based Methods (e.g., Kernel Density Estimation)**

**Principle:** Estimate the probability density function of the data before and after a potential change point. A significant difference in the estimated densities suggests a change.

*   **Kernel Density Estimation (KDE):**
    *   **Procedure:**
        1.  Divide the series into two segments.
        2.  Estimate the probability density function (PDF) for each segment using KDE.
        3.  Compare the estimated PDFs using a divergence measure (e.g., Kullback-Leibler divergence, Jensen-Shannon divergence).
        4.  Significance is assessed through permutation tests or asymptotic distributions.
    *   **Advantages:** Can detect changes in any aspect of the distribution, not just mean or variance.
    *   **Disadvantages:** Choice of kernel and bandwidth can influence results. Computationally intensive for large datasets.

---

#### 2.3. Methods for Multiple Change Points

When multiple change points are suspected, dedicated algorithms are used.

*   **Binary Segmentation:**
    *   **Principle:** Iteratively splits the time series into segments by finding the most significant single change point, then applying the same procedure to the segments before and after the detected change point.
    *   **Procedure:**
        1.  Find the most significant change point in the entire series.
        2.  Split the series into two parts at this change point.
        3.  Repeat step 1 for each of the new segments.
        4.  Continue until no more significant change points are detected.
    *   **Advantages:** Relatively simple and can detect multiple change points.
    *   **Disadvantages:** Can be sensitive to the order in which change points are detected. A poor first detection can lead to subsequent errors.

*   **Segmental Regression (Piecewise Regression):**
    *   **Principle:** Fits a series of regression models to consecutive segments of the time series, with the breakpoints between segments being estimated.
    *   **Advantages:** Can detect changes in trends and relationships within segments.
    *   **Disadvantages:** Can be complex to implement and requires specifying the number of segments or change points.

*   **Dynamic Programming Algorithms (e.g., PELT - Pruned Exact Linear Time):**
    *   **Principle:** An efficient algorithm for finding the optimal number and location of change points by minimizing a cost function (e.g., sum of squared errors plus a penalty for each change point).
    *   **Advantages:** Finds the globally optimal set of change points according to the chosen criterion. More robust than binary segmentation for multiple change points.
    *   **Disadvantages:** Requires careful selection of the cost function and penalty parameter.

---

### 3. Important Considerations and Assumptions

*   **Stationarity:** Most change point detection methods assume that within each segment (between change points), the data is stationary or exhibits a simpler form of non-stationarity (e.g., a constant mean or trend).
*   **Independence:** Many methods assume independence of observations within segments, which might not hold true for autocorrelated hydrological data. ARIMA models or pre-whitening techniques might be needed.
*   **Distributional Assumptions:** Parametric methods rely on assumptions about the data distribution (e.g., normality). Non-parametric methods are generally more robust to violations of these assumptions.
*   **Type of Change:** The chosen method should be appropriate for the type of change expected (mean shift, variance shift, trend change, etc.).
*   **Number of Change Points:** Some methods are designed for a single change point, while others can detect multiple change points.
*   **Data Length:** Shorter time series can make change point detection more challenging and less reliable.
*   **Data Quality:** Outliers, missing values, and measurement errors can significantly affect the results. Pre-processing is often necessary.
*   **Statistical Significance:** It is crucial to assess the statistical significance of detected change points to distinguish real changes from random fluctuations. This often involves hypothesis testing and controlling the false discovery rate.

---

### 4. Applications in Hydrology and Climatology

*   **Climate Change Studies:**
    *   Detecting shifts in global or regional temperature, precipitation, or extreme weather event frequencies.
    *   Analyzing changes in the timing of seasonal events (e.g., onset of monsoon, date of ice breakup).
*   **Water Resources Management:**
    *   Identifying changes in streamflow regimes due to climate change, land-use change, or water abstraction.
    *   Assessing the impact of droughts and floods.
    *   Evaluating the effectiveness of water management interventions.
*   **Hydrological Modeling:**
    *   Determining if a hydrological model's performance has degraded over time, indicating a need for recalibration or model revision.
    *   Identifying periods for which data is consistent for model calibration.
*   **Extreme Events Analysis:**
    *   Detecting changes in the frequency or intensity of floods, droughts, heatwaves, or heavy rainfall events.

---

### 5. Practice Questions and Exercises

**Question 1:**
Describe the difference between a mean shift and a variance shift in a hydrological time series. Provide a brief example for each.

**Answer:**
*   **Mean Shift:** A sudden, lasting change in the average value of the time series. *Example:* A significant increase in average annual streamflow after a large dam is built upstream.
*   **Variance Shift:** A change in the variability or spread of the data around its mean. *Example:* An increase in the year-to-year variability of monthly rainfall after a significant deforestation event, leading to more erratic precipitation patterns.

**Question 2:**
What is the underlying principle of the Likelihood Ratio Test (LRT) for change point detection?

**Answer:**
The LRT compares the likelihood of the observed data under two competing models: one model assuming no change point and another model assuming a change point exists at a specific time. The test statistic is based on the ratio of these likelihoods, and a large value indicates evidence against the null hypothesis of no change.

**Question 3:**
Explain the core idea behind the CUSUM test.

**Answer:**
The CUSUM test monitors the cumulative sum of deviations of the data from a reference value (often the mean). A sustained deviation in one direction will cause the cumulative sum to increase or decrease systematically. A change point is detected when the cumulative sum crosses a pre-defined threshold, indicating a persistent shift in the mean.

**Question 4:**
When might you choose a non-parametric method over a parametric method for change point analysis?

**Answer:**
You might choose a non-parametric method when:
*   The underlying distribution of the data is unknown or cannot be assumed (e.g., not normally distributed).
*   The data contains outliers that could unduly influence parametric tests.
*   You are interested in detecting changes in ranks or general distributional shifts, not just specific parameter changes.

**Question 5:**
Imagine you have a time series of annual average temperature for a region and you suspect a change point due to climate change. Which type of change are you most likely looking for, and what method might you initially consider applying?

**Answer:**
You are most likely looking for a **change in the mean** (e.g., a step increase in average temperature) or a **change in the trend** (e.g., an acceleration of warming).
You might initially consider methods like the **Pettitt Test** (for a single mean shift, non-parametric) or **CUSUM** (if you suspect a sustained mean shift). If you suspect a change in the rate of warming, regression-based methods or sequential Mann-Kendall tests might be more appropriate.

**Exercise 1 (Conceptual):**
A time series of daily streamflow data shows a gradual but consistent increase in the average flow over the last 20 years.
a) What type of change is this?
b) Which of the following methods might be most suitable for detecting this change? (i) CUSUM test, (ii) Pettitt Test, (iii) Chow Test, (iv) All of the above. Explain your reasoning.

**Answer:**
a) This is primarily a **trend change**, although it could also be viewed as a series of small mean shifts over time.
b) **(iv) All of the above** could potentially be used, but with different strengths:
    *   **(i) CUSUM test:** Would be sensitive to the gradual accumulation of positive deviations, potentially detecting an overall shift.
    *   **(ii) Pettitt Test:** Primarily designed for a single mean shift, it might detect a point where the trend becomes significantly different, but might not pinpoint the gradual nature well.
    *   **(iii) Chow Test:** If a specific year is hypothesized as the start of this gradual increase, the Chow test could be used to compare segments before and after that year. However, to detect the *onset* of the gradual trend, testing many potential breakpoints would be necessary.

For a gradual trend change, methods that specifically focus on trends (like sequential Mann-Kendall or regression with time as a predictor) or methods that can detect multiple, smaller shifts over time are often more appropriate than those designed for a single, abrupt jump.

---

### 6. Important Points to Remember

*   **Purpose:** Change point analysis aims to identify *when* and *how* the statistical properties of a time series change.
*   **Context is Key:** Always relate the detected changes back to the physical processes and potential causes in hydrology and climatology.
*   **Method Choice Matters:** The selection of an appropriate method depends on the type of change expected, the data's characteristics, and the assumptions you are willing to make.
*   **Validation:** Always validate your findings. Use multiple methods if possible and check for consistency with external information.
*   **Significance Testing:** Never rely solely on observing a change; always assess its statistical significance.
*   **Multiple Change Points:** Be aware that time series can have multiple change points, and choose methods capable of detecting them if suspected.
*   **Data Pre-processing:** Clean your data and consider its properties (e.g., autocorrelation) before applying change point methods.

---
