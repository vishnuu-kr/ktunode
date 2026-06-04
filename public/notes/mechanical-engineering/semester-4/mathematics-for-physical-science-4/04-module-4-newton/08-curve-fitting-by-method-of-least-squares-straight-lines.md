---
title: "Curve Fitting by Method of Least Squares - Straight lines"
subject: "MATHEMATICS FOR PHYSICAL SCIENCE – 4"
module: "Module 4: Newton"
branch: "Mechanical Engineering"
semester: 4
topicId: "68a3fd1351d0cf4804462ed8"
status: "completed"
scrapedAt: "2026-05-20T17:54:56.014Z"
---
# MATHEMATICS FOR PHYSICAL SCIENCE – 4: Module 4: Newton

## Topic: Curve Fitting by Method of Least Squares - Straight Lines

This module focuses on fitting a straight line to a set of data points using the Method of Least Squares. This is a fundamental technique in data analysis, especially in physical sciences, where relationships between variables are often approximated by linear models.

### 1. Learning Outcomes

Upon successful completion of this topic, you will be able to:

*   Understand the purpose of curve fitting in physical science applications.
*   Define the Method of Least Squares.
*   Derive the normal equations for fitting a straight line of the form $y = a + bx$ to a set of data points $(x_i, y_i)$.
*   Calculate the coefficients $a$ and $b$ of the best-fit straight line.
*   Apply the method of least squares to practical problems in physical sciences.
*   Interpret the meaning of the fitted straight line in the context of the data.

### 2. Introduction to Curve Fitting

In physical science, we often collect experimental data that relates two or more variables. It's rare for these data points to perfectly lie on a straight line or any other simple mathematical curve. Curve fitting is the process of finding a mathematical function (a curve) that best represents the relationship between these variables as observed in the data.

**Why curve fit?**

*   **Summarize data:** A fitted curve can provide a concise representation of the trend in the data.
*   **Identify relationships:** It helps in understanding the nature of the relationship between variables (e.g., linear, quadratic, exponential).
*   **Prediction/Interpolation:** Once a curve is fitted, it can be used to predict values for the dependent variable at unobserved values of the independent variable.
*   **Model building:** It forms the basis for developing mathematical models to describe physical phenomena.

### 3. Method of Least Squares

The Method of Least Squares is a widely used technique for finding the "best-fit" curve to a set of data. The core idea is to minimize the sum of the squares of the vertical distances between the observed data points and the points on the fitted curve.

Let's consider a set of $n$ data points $(x_1, y_1), (x_2, y_2), \dots, (x_n, y_n)$. We want to fit a straight line of the form:

$y = a + bx$

where $a$ is the y-intercept and $b$ is the slope.

For each data point $(x_i, y_i)$, the *residual* (or error) is the difference between the observed value $y_i$ and the value predicted by the line, $a + bx_i$.

Residual, $e_i = y_i - (a + bx_i)$

The Method of Least Squares aims to find the values of $a$ and $b$ that minimize the sum of the squares of these residuals, denoted by $S$.

$S(a, b) = \sum_{i=1}^{n} e_i^2 = \sum_{i=1}^{n} (y_i - a - bx_i)^2$

**Key Concept:** Minimizing the sum of squares of errors is a standard approach because it penalizes larger errors more significantly and avoids the problem of positive and negative errors canceling each other out. This concept is fundamental to many statistical estimation techniques, as discussed in Devore's "Probability and Statistics for Engineering and the Sciences."

### 4. Derivation of Normal Equations for a Straight Line

To find the values of $a$ and $b$ that minimize $S(a, b)$, we use calculus. We take the partial derivatives of $S$ with respect to $a$ and $b$, set them to zero, and solve the resulting system of equations. These are known as the **normal equations**.

1.  **Partial derivative with respect to $a$**:
    $\frac{\partial S}{\partial a} = \frac{\partial}{\partial a} \sum_{i=1}^{n} (y_i - a - bx_i)^2$
    $\frac{\partial S}{\partial a} = \sum_{i=1}^{n} 2(y_i - a - bx_i)(-1)$
    $\frac{\partial S}{\partial a} = -2 \sum_{i=1}^{n} (y_i - a - bx_i)$

    Setting $\frac{\partial S}{\partial a} = 0$:
    $\sum_{i=1}^{n} (y_i - a - bx_i) = 0$
    $\sum y_i - \sum a - \sum bx_i = 0$
    $\sum y_i - na - b \sum x_i = 0$

    This gives us the first normal equation:
    **Equation 1: $\sum y_i = na + b \sum x_i$**

2.  **Partial derivative with respect to $b$**:
    $\frac{\partial S}{\partial b} = \frac{\partial}{\partial b} \sum_{i=1}^{n} (y_i - a - bx_i)^2$
    $\frac{\partial S}{\partial b} = \sum_{i=1}^{n} 2(y_i - a - bx_i)(-x_i)$
    $\frac{\partial S}{\partial b} = -2 \sum_{i=1}^{n} x_i(y_i - a - bx_i)$

    Setting $\frac{\partial S}{\partial b} = 0$:
    $\sum_{i=1}^{n} x_i(y_i - a - bx_i) = 0$
    $\sum (x_i y_i - ax_i - bx_i^2) = 0$
    $\sum x_i y_i - a \sum x_i - b \sum x_i^2 = 0$

    This gives us the second normal equation:
    **Equation 2: $\sum x_i y_i = a \sum x_i + b \sum x_i^2$**

**System of Normal Equations:**

We now have a system of two linear equations with two unknowns ($a$ and $b$):

1.  $na + b \sum x_i = \sum y_i$
2.  $a \sum x_i + b \sum x_i^2 = \sum x_i y_i$

**Solving for $a$ and $b$**:

This system can be solved using various methods (e.g., substitution, Cramer's rule, matrix inversion). A common way to derive the explicit formulas for $a$ and $b$ is by algebraic manipulation:

From Equation 1, we can express $a$ in terms of $b$:
$na = \sum y_i - b \sum x_i$
$a = \frac{\sum y_i - b \sum x_i}{n} = \bar{y} - b\bar{x}$
where $\bar{y} = \frac{\sum y_i}{n}$ and $\bar{x} = \frac{\sum x_i}{n}$ are the means of $y$ and $x$ respectively.

Substitute this expression for $a$ into Equation 2:
$(\bar{y} - b\bar{x}) \sum x_i + b \sum x_i^2 = \sum x_i y_i$
$\bar{y} \sum x_i - b\bar{x} \sum x_i + b \sum x_i^2 = \sum x_i y_i$
$b (\sum x_i^2 - \bar{x} \sum x_i) = \sum x_i y_i - \bar{y} \sum x_i$

Now, substitute $\bar{x} = \frac{\sum x_i}{n}$ and $\bar{y} = \frac{\sum y_i}{n}$:
$b \left(\sum x_i^2 - \frac{\sum x_i}{n} \sum x_i\right) = \sum x_i y_i - \frac{\sum y_i}{n} \sum x_i$
$b \left(\sum x_i^2 - \frac{(\sum x_i)^2}{n}\right) = \sum x_i y_i - \frac{(\sum x_i)(\sum y_i)}{n}$

Multiply by $n$ to clear the denominators:
$b \left(n \sum x_i^2 - (\sum x_i)^2\right) = n \sum x_i y_i - (\sum x_i)(\sum y_i)$

Therefore, the formula for $b$ is:
$b = \frac{n \sum x_i y_i - (\sum x_i)(\sum y_i)}{n \sum x_i^2 - (\sum x_i)^2}$

And the formula for $a$ is:
$a = \bar{y} - b\bar{x} = \frac{\sum y_i}{n} - b \frac{\sum x_i}{n}$

**Alternative form for $b$ using covariance and variance:**

The numerator is related to the sample covariance between $X$ and $Y$, and the denominator is related to the sample variance of $X$.

Let $S_{xy} = \sum (x_i - \bar{x})(y_i - \bar{y}) = \sum x_i y_i - n\bar{x}\bar{y} = \sum x_i y_i - \frac{(\sum x_i)(\sum y_i)}{n}$
Let $S_{xx} = \sum (x_i - \bar{x})^2 = \sum x_i^2 - n\bar{x}^2 = \sum x_i^2 - \frac{(\sum x_i)^2}{n}$

Then, $b = \frac{S_{xy}}{S_{xx}}$.
This form is often convenient for calculation and understanding. It highlights that the slope $b$ is the ratio of the covariance of $x$ and $y$ to the variance of $x$. This is a core concept in statistical regression, as explored in Devore's text.

### 5. Procedure to Fit a Straight Line

Given a set of data points $(x_i, y_i)$:

1.  **Calculate necessary sums**:
    *   $n$ (number of data points)
    *   $\sum x_i$
    *   $\sum y_i$
    *   $\sum x_i^2$
    *   $\sum x_i y_i$

2.  **Calculate the means**:
    *   $\bar{x} = \frac{\sum x_i}{n}$
    *   $\bar{y} = \frac{\sum y_i}{n}$

3.  **Calculate the coefficients $a$ and $b$ using the formulas**:
    *   $b = \frac{n \sum x_i y_i - (\sum x_i)(\sum y_i)}{n \sum x_i^2 - (\sum x_i)^2}$
    *   $a = \bar{y} - b\bar{x}$

4.  **Write the equation of the best-fit line**: $y = a + bx$.

5.  **Interpret the results**: The fitted line represents the linear trend in the data. The intercept $a$ is the predicted value of $y$ when $x=0$, and the slope $b$ represents the average change in $y$ for a unit change in $x$.

**Important Point:** The Method of Least Squares for a straight line is also known as **Linear Regression**. The coefficients $a$ and $b$ are estimators of the true intercept and slope of the underlying linear relationship, assuming one exists.

### 6. Example: Fitting a Straight Line to Experimental Data

Suppose we have the following data from an experiment measuring the voltage ($V$) across a resistor as a function of current ($I$):

| Current ($I$, A) | Voltage ($V$, V) |
| :---------------- | :--------------- |
| 0.5               | 1.2              |
| 1.0               | 2.3              |
| 1.5               | 3.5              |
| 2.0               | 4.6              |
| 2.5               | 5.9              |

We want to fit a straight line $V = a + bI$ using the method of least squares.

**Step 1: Calculate sums**

$n = 5$

| $I_i$ | $V_i$ | $I_i^2$ | $I_i V_i$ |
| :---- | :---- | :------ | :-------- |
| 0.5   | 1.2   | 0.25    | 0.6       |
| 1.0   | 2.3   | 1.00    | 2.3       |
| 1.5   | 3.5   | 2.25    | 5.25      |
| 2.0   | 4.6   | 4.00    | 9.2       |
| 2.5   | 5.9   | 6.25    | 14.75     |
| **Sum** | **7.5** | **13.75** | **32.1**  |

$\sum I_i = 7.5$
$\sum V_i = 17.5$
$\sum I_i^2 = 13.75$
$\sum I_i V_i = 32.1$

**Step 2: Calculate means**

$\bar{I} = \frac{\sum I_i}{n} = \frac{7.5}{5} = 1.5$
$\bar{V} = \frac{\sum V_i}{n} = \frac{17.5}{5} = 3.5$

**Step 3: Calculate coefficients $a$ and $b$**

Using the formulas:
$b = \frac{n \sum I_i V_i - (\sum I_i)(\sum V_i)}{n \sum I_i^2 - (\sum I_i)^2}$
$b = \frac{5(32.1) - (7.5)(17.5)}{5(13.75) - (7.5)^2}$
$b = \frac{160.5 - 131.25}{68.75 - 56.25}$
$b = \frac{29.25}{12.5}$
$b = 2.34$

Now, calculate $a$:
$a = \bar{V} - b\bar{I}$
$a = 3.5 - (2.34)(1.5)$
$a = 3.5 - 3.51$
$a = -0.01$

**Step 4: Write the equation of the best-fit line**

The equation of the best-fit straight line is:
$V = -0.01 + 2.34I$

**Step 5: Interpretation**

The fitted line suggests that the voltage across the resistor is approximately linearly related to the current. The intercept of $-0.01$ V is very close to zero, which is expected for an ideal resistor (where $V=0$ when $I=0$). The slope of $2.34$ V/A is an estimate of the resistance of the resistor in ohms, according to Ohm's Law ($V=IR$). The calculated resistance is approximately $2.34 \Omega$.

### 7. Relation to Course Outcomes

*   **CO1 & CO2 (Random Variables):** While this topic doesn't directly deal with probability distributions of random variables, the concept of fitting a model to data is a precursor to statistical inference where data is often assumed to arise from some underlying probability distribution. Understanding how to find a best-fit line is a building block for more complex statistical modeling.
*   **CO3 (Parameter Estimation & Confidence Intervals):** The coefficients $a$ and $b$ calculated here are *estimates* of the true population parameters (if we consider the data as a sample). Further statistical analysis (beyond the scope of this specific topic but covered in general statistics) would involve calculating confidence intervals for these estimates and hypothesis testing about the true values of $a$ and $b$. Devore's textbook extensively covers these aspects.
*   **CO4 (Numerical Methods):** The derivation and solution of the normal equations involve fundamental algebraic manipulation. While not directly solving differential equations, the process of minimizing a function using calculus is a core numerical analysis technique. Sastry's "Introductory Methods of Numerical Analysis" would cover optimization techniques that, at a higher level, are related to finding minima of functions. Chapra and Canale's "Numerical Methods for Engineers" often includes regression analysis as an application of numerical techniques.

### 8. Practice Questions

1.  **Question:** A scientist collects the following data on the position ($x$) of a particle as a function of time ($t$):

    | Time ($t$, s) | Position ($x$, m) |
    | :------------ | :---------------- |
    | 1             | 2.1               |
    | 2             | 4.3               |
    | 3             | 6.5               |
    | 4             | 8.8               |
    | 5             | 11.0              |

    Fit a straight line of the form $x = a + bt$ to this data using the method of least squares. What are the values of $a$ and $b$?

    **Answer:**
    First, calculate the sums:
    $n=5$
    $\sum t_i = 1+2+3+4+5 = 15$
    $\sum x_i = 2.1+4.3+6.5+8.8+11.0 = 32.7$
    $\sum t_i^2 = 1^2+2^2+3^2+4^2+5^2 = 1+4+9+16+25 = 55$
    $\sum t_i x_i = (1)(2.1) + (2)(4.3) + (3)(6.5) + (4)(8.8) + (5)(11.0) = 2.1 + 8.6 + 19.5 + 35.2 + 55.0 = 120.4$

    Calculate the means:
    $\bar{t} = \frac{15}{5} = 3$
    $\bar{x} = \frac{32.7}{5} = 6.54$

    Calculate $b$:
    $b = \frac{n \sum t_i x_i - (\sum t_i)(\sum x_i)}{n \sum t_i^2 - (\sum t_i)^2}$
    $b = \frac{5(120.4) - (15)(32.7)}{5(55) - (15)^2}$
    $b = \frac{602 - 490.5}{275 - 225}$
    $b = \frac{111.5}{50}$
    $b = 2.23$

    Calculate $a$:
    $a = \bar{x} - b\bar{t}$
    $a = 6.54 - (2.23)(3)$
    $a = 6.54 - 6.69$
    $a = -0.15$

    The best-fit line is $x = -0.15 + 2.23t$.

2.  **Question:** The following data shows the amount of heat ($H$) absorbed by a substance at different temperatures ($T$):

    | Temperature ($T$, °C) | Heat Absorbed ($H$, kJ) |
    | :-------------------- | :---------------------- |
    | 20                    | 10                      |
    | 30                    | 15                      |
    | 40                    | 20                      |
    | 50                    | 26                      |
    | 60                    | 30                      |

    Fit a straight line $H = a + bT$ to this data. What is the estimated heat absorbed at 45°C?

    **Answer:**
    Calculate the sums:
    $n=5$
    $\sum T_i = 20+30+40+50+60 = 200$
    $\sum H_i = 10+15+20+26+30 = 101$
    $\sum T_i^2 = 20^2+30^2+40^2+50^2+60^2 = 400+900+1600+2500+3600 = 9000$
    $\sum T_i H_i = (20)(10)+(30)(15)+(40)(20)+(50)(26)+(60)(30) = 200+450+800+1300+1800 = 4550$

    Calculate the means:
    $\bar{T} = \frac{200}{5} = 40$
    $\bar{H} = \frac{101}{5} = 20.2$

    Calculate $b$:
    $b = \frac{n \sum T_i H_i - (\sum T_i)(\sum H_i)}{n \sum T_i^2 - (\sum T_i)^2}$
    $b = \frac{5(4550) - (200)(101)}{5(9000) - (200)^2}$
    $b = \frac{22750 - 20200}{45000 - 40000}$
    $b = \frac{2550}{5000}$
    $b = 0.51$

    Calculate $a$:
    $a = \bar{H} - b\bar{T}$
    $a = 20.2 - (0.51)(40)$
    $a = 20.2 - 20.4$
    $a = -0.2$

    The best-fit line is $H = -0.2 + 0.51T$.

    To estimate heat absorbed at 45°C:
    $H = -0.2 + 0.51(45)$
    $H = -0.2 + 22.95$
    $H = 22.75$ kJ.

### 9. Important Points to Remember

*   The Method of Least Squares minimizes the sum of squared vertical deviations from the data points to the fitted line.
*   The normal equations are derived by taking partial derivatives of the sum of squares function with respect to the unknown coefficients ($a$ and $b$) and setting them to zero.
*   The formulas for $a$ and $b$ depend on the sums of $x_i$, $y_i$, $x_i^2$, and $x_i y_i$.
*   The fitted line $y = a + bx$ provides an approximation of the linear relationship between $x$ and $y$ in the data.
*   The intercept ($a$) is the predicted value of $y$ when $x=0$, and the slope ($b$) is the average rate of change of $y$ with respect to $x$.
*   This method is a foundational concept in linear regression and statistical modeling.

---

**References for Further Study:**

*   **Devore J. L. (2016).** *Probability and Statistics for Engineering and the Sciences* (9th ed.). Cengage Learning. (Chapter 12 on Simple Linear Regression covers these topics in detail).
*   **Sastry S. S. (2012).** *Introductory Methods of Numerical Analysis* (5th ed.). PHI Learning Pvt Limited. (While focused on numerical methods, concepts of approximation and optimization are relevant).
*   **Chapra S. C., & Canale R. P. (2021).** *Numerical methods for Engineers* (8th ed.). McGraw Hill Education. (Likely includes regression as an application of numerical techniques).

This topic lays the groundwork for more advanced curve fitting techniques and statistical analysis of data encountered in physical sciences.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=XZo4xyJXC2k) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=Kb3K1Ui4454) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=IYdiKeQ9xME) |
