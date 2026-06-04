---
title: "Flood frequency studies -Gumbel’s method"
subject: "APPLIED HYDROLOGY AND CLIMATOLOGY"
module: "Module 4: Design flood and their Estimation "
branch: "Civil Engineering"
semester: 5
topicId: "689f15cd56b5e963ba810f0d"
status: "completed"
scrapedAt: "2026-05-20T18:47:35.333Z"
---
# APPLIED HYDROLOGY AND CLIMATOLOGY: Module 4 - Design Flood and Their Estimation

## Topic: Flood Frequency Studies - Gumbel's Method

---

### 1. Introduction to Flood Frequency Analysis

*   **Purpose:** Flood frequency analysis is a statistical method used to estimate the probability of occurrence of floods of a certain magnitude. It helps in designing hydraulic structures (dams, bridges, culverts) to withstand floods of a specified recurrence interval.
*   **Key Concept:** The analysis is based on the historical record of flood events. We assume that past flood behavior can be extrapolated to predict future flood probabilities.
*   **Recurrence Interval (T):** The average time interval between occurrences of a flood of a specific magnitude or greater. It is often expressed in years.
    *   **Formula:** $T = 1 / P$, where P is the probability of exceedance.
*   **Probability of Exceedance (P):** The chance that a flood of a certain magnitude or greater will occur in any given year.
*   **Design Flood:** The flood magnitude that a hydraulic structure is designed to accommodate. It is usually specified by its recurrence interval (e.g., a 100-year flood).

---

### 2. Extreme Value Type I Distribution (Gumbel's Distribution)

*   **Background:** Developed by Emil Gumbel, this is one of the most commonly used distributions in flood frequency analysis. It is suitable for analyzing extreme events.
*   **Key Concept:** Gumbel's distribution assumes that the extreme values (e.g., annual maximum floods) are independently and identically distributed according to a specific probability distribution.
*   **Probability Density Function (PDF):**
    $$ f(x) = \alpha e^{-\alpha(x-\mu)} e^{-e^{-\alpha(x-\mu)}} $$
    where:
    *   $x$ is the flood discharge.
    *   $\mu$ is the mode of the distribution.
    *   $\alpha$ is a scaling parameter.
*   **Cumulative Distribution Function (CDF):**
    $$ F(x) = e^{-e^{-\alpha(x-\mu)}} $$
*   **Relationship with Recurrence Interval:**
    The probability of a flood of magnitude $X_T$ being exceeded is $P(X > X_T) = 1/T$.
    Using the CDF, we can write $P(X \le X_T) = 1 - 1/T$.
    So, $F(X_T) = 1 - 1/T$.
    Substituting into the CDF: $1 - 1/T = e^{-e^{-\alpha(X_T - \mu)}}$.
    Taking the natural logarithm twice:
    $\ln(\ln(1/(1 - 1/T))) = -\alpha(X_T - \mu)$
    $\ln(\ln(T/(T-1))) = -\alpha(X_T - \mu)$
    This can be rearranged to express $X_T$ as a function of $T$.

---

### 3. Gumbel's Method for Flood Estimation

*   **Core Idea:** To fit Gumbel's distribution to the historical annual maximum flood data and then use the fitted distribution to estimate flood magnitudes for desired recurrence intervals.
*   **Steps:**

    1.  **Data Collection:** Obtain a record of annual maximum flood discharges for a specific gauging station over a number of years ($n$).
    2.  **Data Ordering:** Rank the observed annual maximum flood discharges in descending order ($x_1 \ge x_2 \ge ... \ge x_n$).
    3.  **Assigning Probabilities of Non-Exceedance:** Each ranked flood discharge is assigned a probability of non-exceedance using the Weibull plotting position formula:
        $$ P_i = \frac{m}{n+1} $$
        where:
        *   $P_i$ is the probability of non-exceedance for the $i$-th ranked flood.
        *   $m$ is the rank (1 for the highest flood, 2 for the second highest, etc.).
        *   $n$ is the total number of observations.
    4.  **Calculating Reduced Variate (y):** For each probability $P_i$, calculate the corresponding reduced variate $y_i$ using the Gumbel distribution's relationship:
        $$ y_i = -\ln(-\ln(P_i)) $$
        *   **Important Note:** The argument of the second logarithm, $-\ln(P_i)$, must be positive. Since $P_i$ is always less than 1 (and typically between 0 and 1), $-\ln(P_i)$ will be positive.
    5.  **Linear Regression:** Plot the observed flood discharges ($x_i$) against their corresponding reduced variates ($y_i$). According to Gumbel's theory, this relationship should be approximately linear.
        $$ x = \bar{x} + s_x \cdot y $$
        where:
        *   $x$ is the flood discharge.
        *   $\bar{x}$ is the mean of the observed annual maximum floods.
        *   $s_x$ is the standard deviation of the observed annual maximum floods.
        *   $y$ is the reduced variate.
        Alternatively, using the standard Gumbel parameters $\mu$ and $\alpha$:
        $x = \mu + \frac{1}{\alpha} y$
        The relationship is effectively $x_i = \mu + \frac{1}{\alpha} y_i$. By plotting $x_i$ vs $y_i$, we can estimate $\mu$ (the intercept) and $1/\alpha$ (the slope).
    6.  **Estimating Mean ($\bar{x}$) and Standard Deviation ($s_x$):**
        Calculate the mean and standard deviation of the historical flood data:
        $$ \bar{x} = \frac{1}{n} \sum_{i=1}^{n} x_i $$
        $$ s_x = \sqrt{\frac{1}{n-1} \sum_{i=1}^{n} (x_i - \bar{x})^2} $$
        (For larger $n$, $s_x$ can be approximated using $s_x \approx \sigma \cdot (\frac{\pi}{\sqrt{6}})$, where $\sigma$ is the standard deviation of the distribution).
        A more robust approach for estimating the parameters $\mu$ and $\alpha$ directly from the data is using Maximum Likelihood Estimation (MLE), but the method of moments (using $\bar{x}$ and $s_x$) is simpler and commonly used.
    7.  **Calculating Expected Reduced Variate ($y_T$):** For a desired recurrence interval $T$, calculate the corresponding expected reduced variate $y_T$:
        $$ y_T = -\ln(-\ln(1 - \frac{1}{T})) $$
        Alternatively, if using the plotting position for a return period $T_i = \frac{n+1}{m}$, then $y_{T_i} = -\ln(-\ln(\frac{m}{n+1}))$.
    8.  **Estimating Flood Discharge ($X_T$):** Use the fitted linear relationship to estimate the flood discharge for the desired recurrence interval $T$:
        $$ X_T = \bar{x} + K_T \cdot s_x $$
        where $K_T$ is the Gumbel frequency factor.
    9.  **Gumbel Frequency Factor ($K_T$):** This factor depends on the recurrence interval $T$ and the sample size $n$.
        $$ K_T = \frac{y_T - \bar{y}}{\bar{s}_y} $$
        Where $\bar{y}$ is the mean of the reduced variates ($y_i$) and $\bar{s}_y$ is the standard deviation of the reduced variates ($y_i$).
        For a large number of observations ($n \to \infty$), $\bar{y} \to 0.5772$ (Euler-Mascheroni constant) and $\bar{s}_y \to \frac{\pi}{\sqrt{6}} \approx 1.2825$. In this case, $K_T = \frac{y_T - 0.5772}{1.2825}$.
        For a finite sample size, the factor $K_T$ can be computed more precisely using tables or formulas that account for $n$. A common approximation for $K_T$ for large $n$ is:
        $$ K_T \approx \frac{-\ln(-\ln(1 - 1/T)) - 0.5772}{1.2825} $$
        **Note:** Many hydrologic texts provide tables of $K_T$ values for various $T$ and $n$.

---

### 4. Example Calculation: Gumbel's Method

**Problem:** The following are the annual maximum flood discharges (in $m^3/s$) recorded at a river station over the past 10 years: 120, 150, 90, 110, 135, 160, 85, 100, 125, 140. Estimate the 50-year flood.

**Solution:**

1.  **Data:** $n = 10$ years.
    Discharges ($m^3/s$): 120, 150, 90, 110, 135, 160, 85, 100, 125, 140.

2.  **Ranked Data (Descending Order):**
    | Rank (m) | Discharge ($x_i$, $m^3/s$) | Probability of Non-Exceedance ($P_i = m/(n+1)$) | Reduced Variate ($y_i = -\ln(-\ln(P_i))$) |
    | :------- | :------------------------- | :------------------------------------------------ | :------------------------------------------- |
    | 1        | 160                        | $1/(10+1) = 0.0909$                               | $-\ln(-\ln(0.0909)) = -\ln(2.398) = -0.875$  |
    | 2        | 150                        | $2/(10+1) = 0.1818$                               | $-\ln(-\ln(0.1818)) = -\ln(1.705) = -0.535$  |
    | 3        | 140                        | $3/(10+1) = 0.2727$                               | $-\ln(-\ln(0.2727)) = -\ln(1.300) = -0.263$  |
    | 4        | 135                        | $4/(10+1) = 0.3636$                               | $-\ln(-\ln(0.3636)) = -\ln(1.010) = -0.010$  |
    | 5        | 125                        | $5/(10+1) = 0.4545$                               | $-\ln(-\ln(0.4545)) = -\ln(0.794) = 0.231$  |
    | 6        | 120                        | $6/(10+1) = 0.5455$                               | $-\ln(-\ln(0.5455)) = -\ln(0.621) = 0.476$  |
    | 7        | 110                        | $7/(10+1) = 0.6364$                               | $-\ln(-\ln(0.6364)) = -\ln(0.479) = 0.735$  |
    | 8        | 100                        | $8/(10+1) = 0.7273$                               | $-\ln(-\ln(0.7273)) = -\ln(0.347) = 1.058$  |
    | 9        | 90                         | $9/(10+1) = 0.8182$                               | $-\ln(-\ln(0.8182)) = -\ln(0.242) = 1.420$  |
    | 10       | 85                         | $10/(10+1) = 0.9091$                              | $-\ln(-\ln(0.9091)) = -\ln(0.133) = 2.019$  |

3.  **Calculate Mean and Standard Deviation of $x_i$:**
    *   $\sum x_i = 160+150+140+135+125+120+110+100+90+85 = 1215$
    *   $\bar{x} = 1215 / 10 = 121.5 \, m^3/s$

    *   Calculate deviations from mean ($x_i - \bar{x}$):
        38.5, 28.5, 18.5, 13.5, 3.5, -1.5, -11.5, -21.5, -31.5, -36.5
    *   Calculate squared deviations ($(x_i - \bar{x})^2$):
        1482.25, 812.25, 342.25, 182.25, 12.25, 2.25, 132.25, 462.25, 992.25, 1332.25
    *   $\sum (x_i - \bar{x})^2 = 1482.25 + 812.25 + 342.25 + 182.25 + 12.25 + 2.25 + 132.25 + 462.25 + 992.25 + 1332.25 = 5752.5$
    *   $s_x = \sqrt{\frac{5752.5}{10-1}} = \sqrt{\frac{5752.5}{9}} = \sqrt{639.17} \approx 25.28 \, m^3/s$

4.  **Estimate Flood for 50-year Recurrence Interval (T = 50):**
    *   We need the Gumbel frequency factor $K_{50}$ for $n=10$.
    *   First, calculate $y_{50}$:
        $y_{50} = -\ln(-\ln(1 - 1/50)) = -\ln(-\ln(0.98)) = -\ln(0.0202) = -\ln(\frac{1}{49.5}) = 3.902$
    *   Now, calculate $K_{50}$ for $n=10$. A precise formula for $K_T$ as a function of $n$ and $T$ exists, or we can use tables. For $n=10$ and $T=50$, the value of $K_{50}$ is approximately **1.907**. (Note: Using the simplified large-n approximation would yield $K_{50} \approx \frac{3.902 - 0.5772}{1.2825} \approx 2.604$, which is significantly different due to the small sample size. It's important to use $K_T$ tables for small $n$).

    *   Using the formula $X_T = \bar{x} + K_T \cdot s_x$:
        $X_{50} = 121.5 + 1.907 \cdot 25.28$
        $X_{50} = 121.5 + 48.21$
        $X_{50} \approx 169.71 \, m^3/s$

**Answer:** The estimated 50-year flood is approximately $169.71 \, m^3/s$.

---

### 5. Practice Questions and Exercises

**Question 1:**
Given the following annual maximum flood discharges for a river gauging station over 8 years: 250, 310, 190, 280, 350, 220, 290, 330 ($m^3/s$).
a) Calculate the mean and standard deviation of the flood discharges.
b) Assign probabilities of non-exceedance and calculate the reduced variates for each flood event.
c) Estimate the 25-year flood using Gumbel's method. (Assume $K_{25}$ for $n=8$ is approximately 1.83).

**Question 2:**
Explain the concept of recurrence interval and its importance in flood frequency studies. How is it related to the probability of exceedance?

**Question 3:**
What are the main assumptions of Gumbel's method for flood frequency analysis?

---

### 6. Answers to Practice Questions

**Answer to Question 1:**
a) **Mean and Standard Deviation:**
   *   $n = 8$
   *   Discharges ($m^3/s$): 250, 310, 190, 280, 350, 220, 290, 330
   *   $\sum x_i = 250+310+190+280+350+220+290+330 = 2220$
   *   $\bar{x} = 2220 / 8 = 277.5 \, m^3/s$
   *   Deviations $(x_i - \bar{x})$: -27.5, 32.5, -87.5, 2.5, 72.5, -57.5, 12.5, 52.5
   *   Squared deviations $(x_i - \bar{x})^2$: 756.25, 1056.25, 7656.25, 6.25, 5256.25, 3306.25, 156.25, 2756.25
   *   $\sum (x_i - \bar{x})^2 = 20906.25$
   *   $s_x = \sqrt{\frac{20906.25}{8-1}} = \sqrt{\frac{20906.25}{7}} = \sqrt{2986.61} \approx 54.65 \, m^3/s$

b) **Probabilities of Non-Exceedance and Reduced Variates:**
   Ranked Data: 350, 330, 310, 290, 280, 250, 220, 190
   | Rank (m) | Discharge ($x_i$, $m^3/s$) | $P_i = m/(n+1)$ | $-\ln(P_i)$ | $y_i = -\ln(-\ln(P_i))$ |
   | :------- | :------------------------- | :-------------- | :---------- | :----------------------- |
   | 1        | 350                        | $1/9 = 0.1111$  | 2.197       | -0.787                   |
   | 2        | 330                        | $2/9 = 0.2222$  | 1.504       | -0.409                   |
   | 3        | 310                        | $3/9 = 0.3333$  | 1.098       | -0.095                   |
   | 4        | 290                        | $4/9 = 0.4444$  | 0.811       | 0.209                    |
   | 5        | 280                        | $5/9 = 0.5556$  | 0.588       | 0.530                    |
   | 6        | 250                        | $6/9 = 0.6667$  | 0.405       | 0.910                    |
   | 7        | 220                        | $7/9 = 0.7778$  | 0.252       | 1.377                    |
   | 8        | 190                        | $8/9 = 0.8889$  | 0.118       | 2.137                    |

c) **Estimate the 25-year Flood:**
   *   $T = 25$, $n=8$.
   *   Given $K_{25}$ for $n=8$ is approximately 1.83.
   *   $X_{25} = \bar{x} + K_{25} \cdot s_x$
   *   $X_{25} = 277.5 + 1.83 \cdot 54.65$
   *   $X_{25} = 277.5 + 100.01$
   *   $X_{25} \approx 377.51 \, m^3/s$

**Answer to Question 2:**
*   **Recurrence Interval (T):** The average time interval, in years, between occurrences of a flood of a certain magnitude or greater. For example, a 100-year flood has a 1 in 100 chance of being exceeded in any given year.
*   **Importance:** It's crucial for designing hydraulic structures to ensure they can safely handle anticipated flood events without failure. It provides a measure of risk for design decisions.
*   **Relationship with Probability of Exceedance (P):** They are inversely related: $T = 1/P$. The probability of exceedance is the chance that a flood of a specific magnitude will be equaled or exceeded in a given year.

**Answer to Question 3:**
The main assumptions of Gumbel's method are:
1.  **Independence:** The annual maximum flood events are independent of each other.
2.  **Identical Distribution:** All annual maximum flood events are drawn from the same probability distribution (Extreme Value Type I or Gumbel distribution).
3.  **Stationarity:** The underlying hydrological processes that generate floods are assumed to remain constant over time.
4.  **Extremal Behavior:** The distribution correctly models the behavior of extreme values.

---

### 7. Important Points to Remember

*   **Gumbel's method is based on fitting the Extreme Value Type I distribution.**
*   **Annual maximum flood series are typically used.**
*   **Weibull's plotting position ($m/(n+1)$) is commonly used for assigning probabilities.**
*   **The relationship between flood discharge ($x$) and reduced variate ($y$) is linear: $x = \bar{x} + K_T \cdot s_x$.**
*   **The frequency factor $K_T$ depends on the recurrence interval ($T$) and sample size ($n$). Use tables for accurate $K_T$ values, especially for small $n$.**
*   **The larger the recurrence interval ($T$), the larger the estimated flood discharge ($X_T$).**
*   **Flood frequency analysis is a statistical tool, and the estimates have associated uncertainties.**
*   **The assumption of stationarity is crucial but might be challenged by climate change, requiring adjustments in future analyses.**

---
