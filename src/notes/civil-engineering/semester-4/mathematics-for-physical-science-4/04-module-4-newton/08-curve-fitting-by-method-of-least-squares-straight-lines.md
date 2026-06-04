---
title: "Curve Fitting by Method of Least Squares - Straight lines"
subject: "MATHEMATICS FOR PHYSICAL SCIENCE –  4"
module: "Module 4: Newton"
branch: "Civil Engineering"
semester: 4
topicId: "689f15cb56b5e963ba810942"
status: "completed"
scrapedAt: "2026-05-20T18:46:16.809Z"
---
# MATHEMATICS FOR PHYSICAL SCIENCE – 4

## Module 4: Newton

### Topic: Curve Fitting by Method of Least Squares - Straight Lines

---

This module focuses on the fundamental concept of **curve fitting**, specifically using the **Method of Least Squares** to find the best-fitting **straight line** to a set of data points. This is a crucial technique in physical sciences for analyzing experimental data, identifying trends, and making predictions.

---

### Learning Outcomes

By the end of this topic, you should be able to:

1.  **Understand the concept of curve fitting:** Explain why fitting a curve to data is necessary and what it aims to achieve.
2.  **Define the Method of Least Squares:** Understand the underlying principle of minimizing the sum of squared differences between observed and predicted values.
3.  **Derive the equations for the best-fitting straight line (linear regression):** Apply calculus to find the coefficients of the straight line that minimize the sum of squared errors.
4.  **Calculate the coefficients of the best-fitting straight line:** Apply the derived formulas to given data points.
5.  **Interpret the meaning of the coefficients in the context of physical science:** Understand what the slope and y-intercept represent in relation to the experimental data.
6.  **Assess the goodness of fit (qualitatively):** Understand how to visually and conceptually evaluate how well the fitted line represents the data.

---

### 1. Understanding the Concept of Curve Fitting

#### 1.1 Why Fit a Curve to Data?

*   **Identifying Trends and Relationships:** Experimental data often exhibits a pattern or relationship between variables. Curve fitting helps to visualize and quantify this relationship.
*   **Summarizing Data:** A fitted curve provides a concise representation of a larger dataset, highlighting the underlying trend.
*   **Making Predictions:** Once a relationship is established, the fitted curve can be used to predict values for unknown inputs.
*   **Smoothing Noisy Data:** Experimental measurements often contain random errors or "noise." Curve fitting can help to smooth out these variations and reveal the true underlying signal.
*   **Validating Theories:** In physical sciences, curve fitting is used to test hypotheses and theories by comparing theoretical predictions with experimental observations. If the data fits a predicted mathematical form, it supports the theory.

#### 1.2 What is Curve Fitting?

Curve fitting is the process of constructing a mathematical function (the "curve") that best represents a set of data points. The "best fit" is determined by a specific criterion, and the Method of Least Squares is a widely used and statistically sound criterion.

---

### 2. Defining the Method of Least Squares

#### 2.1 The Problem: Data and a Model

We have a set of $n$ data points $(x_i, y_i)$ for $i = 1, 2, \dots, n$. We hypothesize that there's a linear relationship between $x$ and $y$, given by the equation of a straight line:

$y = mx + c$

where:
*   $y$ is the dependent variable.
*   $x$ is the independent variable.
*   $m$ is the slope of the line.
*   $c$ is the y-intercept.

Our goal is to find the values of $m$ and $c$ that make this line "fit" the data points as closely as possible.

#### 2.2 The Criterion: Minimizing Squared Errors

The Method of Least Squares states that the "best-fitting" line is the one that minimizes the **sum of the squares of the vertical distances** between the observed data points and the points on the line. These vertical distances are called **residuals** or **errors**.

For each data point $(x_i, y_i)$:
*   The observed value is $y_i$.
*   The predicted value from the line is $\hat{y}_i = mx_i + c$.
*   The residual (error) is $e_i = y_i - \hat{y}_i = y_i - (mx_i + c)$.

The sum of squared errors, often denoted by $S$ or $\chi^2$ (chi-squared), is:

$S = \sum_{i=1}^{n} e_i^2 = \sum_{i=1}^{n} (y_i - (mx_i + c))^2$

The Method of Least Squares aims to find the values of $m$ and $c$ that minimize this sum $S$.

#### 2.3 Why Square the Errors?

*   **Avoids Cancellation:** If we simply summed the errors, positive and negative errors could cancel each other out, leading to a small sum even for a poor fit. Squaring makes all errors positive.
*   **Penalizes Larger Errors More:** Squaring gives more weight to larger deviations, ensuring that the line doesn't stray too far from any individual data point.
*   **Mathematical Tractability:** Squaring leads to a sum of squares, which is a differentiable function, allowing us to use calculus to find the minimum.

---

### 3. Deriving the Equations for the Best-Fitting Straight Line

To find the values of $m$ and $c$ that minimize $S$, we use calculus. We need to find the partial derivatives of $S$ with respect to $m$ and $c$, set them to zero, and solve the resulting system of equations.

#### 3.1 Minimizing with Respect to $c$

First, let's find the partial derivative of $S$ with respect to $c$:

$\frac{\partial S}{\partial c} = \frac{\partial}{\partial c} \sum_{i=1}^{n} (y_i - mx_i - c)^2$

Using the chain rule:
$\frac{\partial S}{\partial c} = \sum_{i=1}^{n} 2(y_i - mx_i - c) \cdot (-1)$
$\frac{\partial S}{\partial c} = -2 \sum_{i=1}^{n} (y_i - mx_i - c)$

Set the derivative to zero to find the minimum:
$-2 \sum_{i=1}^{n} (y_i - mx_i - c) = 0$
$\sum_{i=1}^{n} (y_i - mx_i - c) = 0$

Distribute the summation:
$\sum_{i=1}^{n} y_i - \sum_{i=1}^{n} mx_i - \sum_{i=1}^{n} c = 0$
$\sum y_i - m \sum x_i - nc = 0$

Rearrange to solve for $c$:
$nc = \sum y_i - m \sum x_i$
$c = \frac{\sum y_i - m \sum x_i}{n}$
$c = \frac{\sum y_i}{n} - m \frac{\sum x_i}{n}$

This gives us the formula for the y-intercept in terms of the means of $y$ and $x$:
$c = \bar{y} - m\bar{x}$
where $\bar{y} = \frac{\sum y_i}{n}$ and $\bar{x} = \frac{\sum x_i}{n}$ are the mean values of $y$ and $x$, respectively.

**Important Point:** The best-fitting line always passes through the point $(\bar{x}, \bar{y})$, the mean of the data.

#### 3.2 Minimizing with Respect to $m$

Next, let's find the partial derivative of $S$ with respect to $m$:

$\frac{\partial S}{\partial m} = \frac{\partial}{\partial m} \sum_{i=1}^{n} (y_i - mx_i - c)^2$

Using the chain rule:
$\frac{\partial S}{\partial m} = \sum_{i=1}^{n} 2(y_i - mx_i - c) \cdot (-x_i)$
$\frac{\partial S}{\partial m} = -2 \sum_{i=1}^{n} x_i(y_i - mx_i - c)$

Set the derivative to zero:
$-2 \sum_{i=1}^{n} x_i(y_i - mx_i - c) = 0$
$\sum_{i=1}^{n} x_i(y_i - mx_i - c) = 0$

Distribute:
$\sum (x_i y_i - mx_i^2 - cx_i) = 0$
$\sum x_i y_i - m \sum x_i^2 - c \sum x_i = 0$

Now, substitute the expression for $c = \bar{y} - m\bar{x}$ into this equation:
$\sum x_i y_i - m \sum x_i^2 - (\bar{y} - m\bar{x}) \sum x_i = 0$

Distribute $(\bar{y} - m\bar{x})$:
$\sum x_i y_i - m \sum x_i^2 - \bar{y} \sum x_i + m\bar{x} \sum x_i = 0$

Group terms with $m$:
$m(\bar{x} \sum x_i - \sum x_i^2) = \bar{y} \sum x_i - \sum x_i y_i$

Now, let's work with $\bar{x} = \frac{\sum x_i}{n}$ and $\bar{y} = \frac{\sum y_i}{n}$:
$m \left(\frac{\sum x_i}{n} \sum x_i - \sum x_i^2 \right) = \frac{\sum y_i}{n} \sum x_i - \sum x_i y_i$

Multiply by $n$ to clear the denominators:
$m \left( (\sum x_i)^2 - n \sum x_i^2 \right) = (\sum y_i)(\sum x_i) - n \sum x_i y_i$

Rearrange to solve for $m$:
$m = \frac{(\sum y_i)(\sum x_i) - n \sum x_i y_i}{(\sum x_i)^2 - n \sum x_i^2}$

This formula is correct but often expressed in a more convenient form using variations. Let's rearrange the terms to get the standard formula:

From $\sum x_i y_i - m \sum x_i^2 - c \sum x_i = 0$:
Substitute $c = \bar{y} - m\bar{x}$:
$\sum x_i y_i - m \sum x_i^2 - (\bar{y} - m\bar{x}) \sum x_i = 0$
$\sum x_i y_i - m \sum x_i^2 - \bar{y} \sum x_i + m\bar{x} \sum x_i = 0$
$m \left( \bar{x} \sum x_i - \sum x_i^2 \right) = \bar{y} \sum x_i - \sum x_i y_i$

It's more standard to use the covariance and variance definitions. Let's rewrite the equation:
$\sum x_i y_i - m \sum x_i^2 - \frac{\sum y_i}{n} \sum x_i + m \frac{\sum x_i}{n} \sum x_i = 0$
$\sum x_i y_i - m \sum x_i^2 - \frac{(\sum y_i)(\sum x_i)}{n} + m \frac{(\sum x_i)^2}{n} = 0$

Multiply by $n$:
$n \sum x_i y_i - n m \sum x_i^2 - (\sum y_i)(\sum x_i) + m (\sum x_i)^2 = 0$
$m [ (\sum x_i)^2 - n \sum x_i^2 ] = (\sum y_i)(\sum x_i) - n \sum x_i y_i$

This leads to the same formula for $m$. A more common form uses the sums of squares and cross-products:

Recall the equations derived from setting partial derivatives to zero:
1.  $\sum y_i - m \sum x_i - nc = 0 \implies \sum y_i = m \sum x_i + nc$
2.  $\sum x_i y_i - m \sum x_i^2 - c \sum x_i = 0 \implies \sum x_i y_i = m \sum x_i^2 + c \sum x_i$

This is a system of two linear equations for $m$ and $c$:
$nc + (\sum x_i) m = \sum y_i$
$(\sum x_i) c + (\sum x_i^2) m = \sum x_i y_i$

Solving this system (e.g., using Cramer's rule or substitution) will yield the formulas for $m$ and $c$.
Alternatively, recall $c = \bar{y} - m\bar{x}$:
$\sum x_i y_i = m \sum x_i^2 + (\bar{y} - m\bar{x}) \sum x_i$
$\sum x_i y_i = m \sum x_i^2 + \bar{y} \sum x_i - m\bar{x} \sum x_i$
$m(\sum x_i^2 - \bar{x} \sum x_i) = \sum x_i y_i - \bar{y} \sum x_i$

Substitute $\bar{x} = \frac{\sum x_i}{n}$:
$m\left(\sum x_i^2 - \frac{(\sum x_i)^2}{n}\right) = \sum x_i y_i - \frac{(\sum y_i)(\sum x_i)}{n}$

Multiply by $n$:
$m(n\sum x_i^2 - (\sum x_i)^2) = n\sum x_i y_i - (\sum y_i)(\sum x_i)$

**The Standard Formulas:**

The coefficients for the best-fitting straight line $y = mx + c$ are given by:

**Slope ($m$):**
$$m = \frac{n \sum (x_i y_i) - (\sum x_i)(\sum y_i)}{n \sum (x_i^2) - (\sum x_i)^2}$$

**Y-intercept ($c$):**
$$c = \bar{y} - m\bar{x}$$
where $\bar{x} = \frac{\sum x_i}{n}$ and $\bar{y} = \frac{\sum y_i}{n}$.

---

### 4. Calculating the Coefficients of the Best-Fitting Straight Line

To apply these formulas, we need to calculate the following sums from the given data points $(x_i, y_i)$:

*   $n$: The number of data points.
*   $\sum x_i$: The sum of the x-values.
*   $\sum y_i$: The sum of the y-values.
*   $\sum x_i^2$: The sum of the squares of the x-values.
*   $\sum x_i y_i$: The sum of the products of the corresponding x and y values.

Once these sums are calculated, we can plug them into the formulas for $m$ and $c$.

#### 4.1 Example Calculation

**Problem:** Find the best-fitting straight line for the following data points:
(1, 2), (2, 4), (3, 5), (4, 4), (5, 5)

**Solution:**

First, create a table to organize the calculations:

| $x_i$ | $y_i$ | $x_i^2$ | $x_i y_i$ |
| :---- | :---- | :------ | :-------- |
| 1     | 2     | 1       | 2         |
| 2     | 4     | 4       | 8         |
| 3     | 5     | 9       | 15        |
| 4     | 4     | 16      | 16        |
| 5     | 5     | 25      | 25        |
| **Sum** | **$\sum x_i = 15$** | **$\sum y_i = 20$** | **$\sum x_i^2 = 55$** | **$\sum x_i y_i = 66$** |

Now, we have:
*   $n = 5$
*   $\sum x_i = 15$
*   $\sum y_i = 20$
*   $\sum x_i^2 = 55$
*   $\sum x_i y_i = 66$

Calculate the means:
*   $\bar{x} = \frac{\sum x_i}{n} = \frac{15}{5} = 3$
*   $\bar{y} = \frac{\sum y_i}{n} = \frac{20}{5} = 4$

Calculate the slope ($m$):
$$m = \frac{n \sum (x_i y_i) - (\sum x_i)(\sum y_i)}{n \sum (x_i^2) - (\sum x_i)^2}$$
$$m = \frac{5(66) - (15)(20)}{5(55) - (15)^2}$$
$$m = \frac{330 - 300}{275 - 225}$$
$$m = \frac{30}{50}$$
$$m = 0.6$$

Calculate the y-intercept ($c$):
$$c = \bar{y} - m\bar{x}$$
$$c = 4 - (0.6)(3)$$
$$c = 4 - 1.8$$
$$c = 2.2$$

The best-fitting straight line is:
$y = 0.6x + 2.2$

---

### 5. Interpreting the Meaning of the Coefficients

#### 5.1 The Slope ($m$)

*   **Rate of Change:** The slope $m$ represents the average rate of change of the dependent variable ($y$) with respect to the independent variable ($x$).
*   **Physical Meaning:** In physical science contexts, the slope can represent various physical quantities:
    *   **Velocity:** If $y$ is position and $x$ is time, the slope is velocity.
    *   **Acceleration:** If $y$ is velocity and $x$ is time, the slope is acceleration.
    *   **Resistance:** If $y$ is voltage and $x$ is current (Ohm's Law, $V=IR$), the slope is resistance.
    *   **Spring Constant:** If $y$ is force and $x$ is displacement (Hooke's Law, $F=kx$), the slope is the spring constant.
*   **Direction and Steepness:** A positive slope indicates that $y$ increases as $x$ increases. A negative slope indicates that $y$ decreases as $x$ increases. The magnitude of the slope indicates how steep the relationship is.

#### 5.2 The Y-intercept ($c$)

*   **Initial Value:** The y-intercept $c$ represents the value of the dependent variable ($y$) when the independent variable ($x$) is zero.
*   **Physical Meaning:** The y-intercept often has a specific physical meaning depending on the experiment:
    *   **Initial Position:** If $x$ is time, the y-intercept might be the initial position of an object at $t=0$.
    *   **Zero-Point Reading:** In measurements, it could be the reading of an instrument when the true value is zero (e.g., a scale offset).
    *   **Baseline Value:** It could represent a baseline or background measurement.
*   **Extrapolation Caution:** It's important to be cautious when interpreting the y-intercept if the data does not extend to $x=0$. Extrapolating beyond the range of the data can lead to inaccurate conclusions.

#### 5.3 Example Interpretation

Using the previous example ($y = 0.6x + 2.2$):
*   **Slope ($m=0.6$):** For every unit increase in $x$, the value of $y$ is expected to increase by 0.6 units on average.
*   **Y-intercept ($c=2.2$):** When $x=0$, the predicted value of $y$ is 2.2. If this were a physics experiment where $x$ represented time and $y$ represented position, it would mean the object started at a position of 2.2 units at time $t=0$.

---

### 6. Assessing the Goodness of Fit (Qualitatively)

While a full quantitative assessment (like the correlation coefficient $R^2$) is beyond the scope of just calculating the line, it's important to understand how well the line represents the data.

#### 6.1 Visual Inspection

*   **Plot the Data:** Always plot your original data points on a graph.
*   **Plot the Fitted Line:** Overlay the calculated best-fitting line on the same graph.
*   **Observe Deviations:** Examine how closely the points cluster around the line.
    *   If the points are scattered randomly around the line, it suggests a good linear fit.
    *   If there's a clear pattern in the deviations (e.g., the points form a curve, or they are all above/below the line for a certain range of $x$), it indicates that a straight line might not be the appropriate model for the data.

#### 6.2 Residual Plots (Conceptual)

*   **What are Residuals?** Residuals ($e_i = y_i - (mx_i + c)$) are the vertical distances between the data points and the fitted line.
*   **Ideal Residual Plot:** If the line is a good fit, the residuals should be randomly scattered around zero, with no discernible pattern.
*   **Patterns Indicate Problems:**
    *   **Curved pattern:** Suggests a non-linear relationship.
    *   **"Fan" or "V" shape:** Suggests that the variance of the errors changes with $x$ (heteroscedasticity).
    *   **Systematic trend:** Indicates that the model is biased.

#### 6.3 Physical Plausibility

*   **Are the values of $m$ and $c$ physically reasonable?** Do they align with expectations based on the underlying physical principles?
*   **Does the relationship make sense?** For instance, if you're measuring the extension of a spring under increasing load, you'd expect a positive slope.

**Important Note:** The Method of Least Squares finds the *best straight line*. If the underlying relationship is truly non-linear, this method will still find the straight line that is *closest* to the data, but it won't perfectly represent the data.

---

### Practice Questions

**Instructions:** For each question, calculate the values needed and then determine the equation of the best-fitting straight line using the Method of Least Squares.

**Question 1:**
Given the following data points $(x_i, y_i)$:
(1, 3), (2, 5), (3, 7), (4, 9)

**Question 2:**
A scientist collects the following data for a reaction rate ($y$, in mol/s) at different temperatures ($x$, in °C):
(10, 2.5), (20, 4.0), (30, 5.5), (40, 7.0), (50, 8.5)

**Question 3:**
Consider the following experimental measurements:
(0.5, 1.2), (1.0, 2.5), (1.5, 3.8), (2.0, 5.0), (2.5, 6.2)

---

### Answers to Practice Questions

**Question 1:**
Data: (1, 3), (2, 5), (3, 7), (4, 9)

| $x_i$ | $y_i$ | $x_i^2$ | $x_i y_i$ |
| :---- | :---- | :------ | :-------- |
| 1     | 3     | 1       | 3         |
| 2     | 5     | 4       | 10        |
| 3     | 7     | 9       | 21        |
| 4     | 9     | 16      | 36        |
| **Sum** | **$\sum x_i = 10$** | **$\sum y_i = 24$** | **$\sum x_i^2 = 30$** | **$\sum x_i y_i = 70$** |

*   $n = 4$
*   $\sum x_i = 10$
*   $\sum y_i = 24$
*   $\sum x_i^2 = 30$
*   $\sum x_i y_i = 70$

**Calculate means:**
*   $\bar{x} = \frac{10}{4} = 2.5$
*   $\bar{y} = \frac{24}{4} = 6$

**Calculate slope ($m$):**
$$m = \frac{4(70) - (10)(24)}{4(30) - (10)^2} = \frac{280 - 240}{120 - 100} = \frac{40}{20} = 2$$

**Calculate y-intercept ($c$):**
$$c = \bar{y} - m\bar{x} = 6 - (2)(2.5) = 6 - 5 = 1$$

**Best-fitting line:** $y = 2x + 1$

---

**Question 2:**
Data: (10, 2.5), (20, 4.0), (30, 5.5), (40, 7.0), (50, 8.5)

| $x_i$ | $y_i$ | $x_i^2$ | $x_i y_i$ |
| :---- | :---- | :------ | :-------- |
| 10    | 2.5   | 100     | 25        |
| 20    | 4.0   | 400     | 80        |
| 30    | 5.5   | 900     | 165       |
| 40    | 7.0   | 1600    | 280       |
| 50    | 8.5   | 2500    | 425       |
| **Sum** | **$\sum x_i = 150$** | **$\sum y_i = 27.5$** | **$\sum x_i^2 = 5500$** | **$\sum x_i y_i = 975$** |

*   $n = 5$
*   $\sum x_i = 150$
*   $\sum y_i = 27.5$
*   $\sum x_i^2 = 5500$
*   $\sum x_i y_i = 975$

**Calculate means:**
*   $\bar{x} = \frac{150}{5} = 30$
*   $\bar{y} = \frac{27.5}{5} = 5.5$

**Calculate slope ($m$):**
$$m = \frac{5(975) - (150)(27.5)}{5(5500) - (150)^2} = \frac{4875 - 4125}{27500 - 22500} = \frac{750}{5000} = 0.15$$

**Calculate y-intercept ($c$):**
$$c = \bar{y} - m\bar{x} = 5.5 - (0.15)(30) = 5.5 - 4.5 = 1$$

**Best-fitting line:** $y = 0.15x + 1$
**Interpretation:** For every 1°C increase in temperature, the reaction rate increases by 0.15 mol/s. At 0°C, the predicted reaction rate is 1 mol/s (though this might be an extrapolation beyond experimental conditions).

---

**Question 3:**
Data: (0.5, 1.2), (1.0, 2.5), (1.5, 3.8), (2.0, 5.0), (2.5, 6.2)

| $x_i$ | $y_i$ | $x_i^2$ | $x_i y_i$ |
| :---- | :---- | :------ | :-------- |
| 0.5   | 1.2   | 0.25    | 0.6       |
| 1.0   | 2.5   | 1.00    | 2.5       |
| 1.5   | 3.8   | 2.25    | 5.7       |
| 2.0   | 5.0   | 4.00    | 10.0      |
| 2.5   | 6.2   | 6.25    | 15.5      |
| **Sum** | **$\sum x_i = 7.5$** | **$\sum y_i = 18.7$** | **$\sum x_i^2 = 13.75$** | **$\sum x_i y_i = 34.3$** |

*   $n = 5$
*   $\sum x_i = 7.5$
*   $\sum y_i = 18.7$
*   $\sum x_i^2 = 13.75$
*   $\sum x_i y_i = 34.3$

**Calculate means:**
*   $\bar{x} = \frac{7.5}{5} = 1.5$
*   $\bar{y} = \frac{18.7}{5} = 3.74$

**Calculate slope ($m$):**
$$m = \frac{5(34.3) - (7.5)(18.7)}{5(13.75) - (7.5)^2} = \frac{171.5 - 140.25}{68.75 - 56.25} = \frac{31.25}{12.5} = 2.5$$

**Calculate y-intercept ($c$):**
$$c = \bar{y} - m\bar{x} = 3.74 - (2.5)(1.5) = 3.74 - 3.75 = -0.01$$

**Best-fitting line:** $y = 2.5x - 0.01$
**Interpretation:** For every unit increase in $x$, $y$ increases by 2.5 units. At $x=0$, the predicted $y$ is -0.01, which is very close to zero. This suggests a strong linear relationship passing very near the origin.

---

### Important Points to Remember

*   **Purpose of Curve Fitting:** To find a mathematical model that best describes the relationship between variables in data.
*   **Method of Least Squares:** Minimizes the sum of the squared vertical distances (residuals) between data points and the fitted curve.
*   **Best-Fitting Straight Line:** Assumes a linear relationship $y = mx + c$.
*   **Key Formulas:**
    *   $m = \frac{n \sum (x_i y_i) - (\sum x_i)(\sum y_i)}{n \sum (x_i^2) - (\sum x_i)^2}$
    *   $c = \bar{y} - m\bar{x}$
*   **The Mean Point:** The best-fitting line always passes through $(\bar{x}, \bar{y})$.
*   **Interpretation of Coefficients:**
    *   $m$: Rate of change.
    *   $c$: Value of $y$ when $x=0$ (initial/baseline value).
*   **Visual Inspection:** Crucial for assessing the quality of the fit. Look for random scatter of points around the line.
*   **Extrapolation:** Be cautious when interpreting the y-intercept or using the line to predict values outside the range of the original data.

---
