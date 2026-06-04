---
title: "Linear regression with multiple variables - solution using gradient descent algorithm and matrix method."
subject: "MACHINE LEARNING FOR ENGINEERS"
module: "Module 1: Introduction to ML"
branch: "Computer Science and Engineering"
semester: 6
topicId: "684162780fc9aa1fdbc8bf4a"
status: "completed"
scrapedAt: "2026-05-20T16:54:59.706Z"
---
# Machine Learning for Engineers - Module 1: Introduction to ML

## Topic: Linear Regression with Multiple Variables - Solution using Gradient Descent and Matrix Methods

---

### 1. Introduction to Linear Regression with Multiple Variables

#### 1.1 What is Linear Regression?

*   **Definition:** Linear regression is a supervised learning algorithm used to predict a continuous target variable (dependent variable) based on one or more input features (independent variables).
*   **Goal:** To find a linear relationship between the input features and the output variable.

#### 1.2 Single Variable vs. Multiple Variables

*   **Single Variable Linear Regression:**
    *   Equation: $y = \theta_0 + \theta_1x$
    *   Predicts $y$ using a single feature $x$.
    *   Visualized as a line in 2D.
*   **Multiple Variable Linear Regression (Multivariate Linear Regression):**
    *   Equation: $y = \theta_0 + \theta_1x_1 + \theta_2x_2 + ... + \theta_nx_n$
    *   Predicts $y$ using multiple features ($x_1, x_2, ..., x_n$).
    *   Visualized as a hyperplane in higher dimensions.

#### 1.3 Hypothesis Function for Multiple Variables

*   **Notation:**
    *   $y^{(i)}$: The actual value of the target variable for the $i$-th training example.
    *   $x^{(i)}$: A vector of features for the $i$-th training example. $x^{(i)} = [x_1^{(i)}, x_2^{(i)}, ..., x_n^{(i)}]$
    *   $\theta$: A vector of model parameters (weights or coefficients). $\theta = [\theta_0, \theta_1, ..., \theta_n]$
    *   $x_0^{(i)} = 1$: We introduce a placeholder feature $x_0$ for the intercept term $\theta_0$. This allows us to use matrix notation more conveniently.
*   **Augmented Feature Vector:** $x^{(i)} = [x_0^{(i)}, x_1^{(i)}, ..., x_n^{(i)}]$
*   **Hypothesis Function (h):**
    *   $h_\theta(x^{(i)}) = \theta_0 + \theta_1x_1^{(i)} + \theta_2x_2^{(i)} + ... + \theta_nx_n^{(i)}$
    *   In vector form: $h_\theta(x^{(i)}) = \theta^T x^{(i)}$

#### 1.4 Cost Function (Mean Squared Error - MSE)

*   **Definition:** The cost function quantifies how well our hypothesis function predicts the actual values. For linear regression, we typically use Mean Squared Error (MSE).
*   **Formula:**
    $J(\theta) = \frac{1}{2m} \sum_{i=1}^{m} (h_\theta(x^{(i)}) - y^{(i)})^2$
    *   $m$: The number of training examples.
    *   The $\frac{1}{2}$ is a scaling factor to simplify the derivative calculation.
*   **Goal of Training:** To find the optimal values of $\theta$ that minimize the cost function $J(\theta)$.

---

### 2. Solution using Gradient Descent Algorithm

#### 2.1 What is Gradient Descent?

*   **Definition:** Gradient descent is an iterative optimization algorithm used to find the minimum of a function. It works by repeatedly taking steps in the direction of the steepest descent (the negative gradient).
*   **Analogy:** Imagine standing on a mountain and wanting to reach the lowest point. You would take steps downhill, always moving in the steepest downward direction.

#### 2.2 The Gradient Descent Update Rule

*   **General Update Rule:**
    $\theta_j := \theta_j - \alpha \frac{\partial}{\partial \theta_j} J(\theta)$
    *   $\theta_j$: The parameter we are updating.
    *   $\alpha$: The learning rate (a hyperparameter that controls the step size).
    *   $\frac{\partial}{\partial \theta_j} J(\theta)$: The partial derivative of the cost function with respect to $\theta_j$. This tells us the direction of the steepest ascent.

#### 2.3 Calculating the Partial Derivatives

*   We need to compute the partial derivative of $J(\theta)$ with respect to each $\theta_j$.
    $J(\theta) = \frac{1}{2m} \sum_{i=1}^{m} (\theta^T x^{(i)} - y^{(i)})^2$

*   **For $\theta_0$ (intercept):**
    $\frac{\partial}{\partial \theta_0} J(\theta) = \frac{1}{m} \sum_{i=1}^{m} (h_\theta(x^{(i)}) - y^{(i)}) \cdot \frac{\partial}{\partial \theta_0}( \theta_0 + \theta_1x_1^{(i)} + ... + \theta_nx_n^{(i)})$
    $\frac{\partial}{\partial \theta_0} J(\theta) = \frac{1}{m} \sum_{i=1}^{m} (h_\theta(x^{(i)}) - y^{(i)}) \cdot 1$
    $\frac{\partial}{\partial \theta_0} J(\theta) = \frac{1}{m} \sum_{i=1}^{m} (h_\theta(x^{(i)}) - y^{(i)})$

*   **For $\theta_j$ (where $j > 0$):**
    $\frac{\partial}{\partial \theta_j} J(\theta) = \frac{1}{m} \sum_{i=1}^{m} (h_\theta(x^{(i)}) - y^{(i)}) \cdot \frac{\partial}{\partial \theta_j}( \theta_0 + \theta_1x_1^{(i)} + ... + \theta_nx_n^{(i)})$
    $\frac{\partial}{\partial \theta_j} J(\theta) = \frac{1}{m} \sum_{i=1}^{m} (h_\theta(x^{(i)}) - y^{(i)}) \cdot x_j^{(i)}$

#### 2.4 Gradient Descent Algorithm Steps

1.  **Initialization:** Initialize the parameters $\theta$ with small random values or zeros.
2.  **Iteration:** Repeat the following until convergence (or for a fixed number of iterations):
    *   **Compute Predictions:** For each training example $i$, calculate the predicted value: $h_\theta(x^{(i)}) = \theta^T x^{(i)}$.
    *   **Compute Errors:** Calculate the difference between the predicted and actual values: $error^{(i)} = h_\theta(x^{(i)}) - y^{(i)}$.
    *   **Compute Gradients:** For each parameter $\theta_j$:
        *   $\frac{\partial}{\partial \theta_j} J(\theta) = \frac{1}{m} \sum_{i=1}^{m} error^{(i)} \cdot x_j^{(i)}$
    *   **Update Parameters:** For each parameter $\theta_j$:
        $\theta_j := \theta_j - \alpha \cdot \frac{1}{m} \sum_{i=1}^{m} (h_\theta(x^{(i)}) - y^{(i)}) x_j^{(i)}$
        *(Note: This is the simultaneous update rule. If updating one by one, the gradients would be calculated using the current values of theta, which can lead to slower convergence.)*

#### 2.5 Choosing the Learning Rate ($\alpha$)

*   **Too small $\alpha$:** Convergence will be very slow.
*   **Too large $\alpha$:** The algorithm might overshoot the minimum and fail to converge, or even diverge.
*   **How to choose:** Experiment with different values (e.g., 0.001, 0.01, 0.1, 1) and observe the cost function over iterations. Pick a value that leads to a steady decrease in cost.

#### 2.6 Convergence

*   Gradient descent is considered converged when the change in the cost function between iterations is very small, or when the magnitude of the gradient is close to zero.

#### **Example: Predicting House Prices**

*   Features: $x_1$ (square footage), $x_2$ (number of bedrooms)
*   Target: $y$ (price)
*   Hypothesis: $h_\theta(x) = \theta_0 + \theta_1x_1 + \theta_2x_2$
*   Cost Function: $J(\theta) = \frac{1}{2m} \sum_{i=1}^{m} (\theta_0 + \theta_1x_1^{(i)} + \theta_2x_2^{(i)} - y^{(i)})^2$

*   **Update Rules:**
    *   $\theta_0 := \theta_0 - \alpha \frac{1}{m} \sum_{i=1}^{m} (h_\theta(x^{(i)}) - y^{(i)})$
    *   $\theta_1 := \theta_1 - \alpha \frac{1}{m} \sum_{i=1}^{m} (h_\theta(x^{(i)}) - y^{(i)}) x_1^{(i)}$
    *   $\theta_2 := \theta_2 - \alpha \frac{1}{m} \sum_{i=1}^{m} (h_\theta(x^{(i)}) - y^{(i)}) x_2^{(i)}$

---

### 3. Solution using Matrix Method (Normal Equation)

#### 3.1 Introduction to Matrix Notation

*   We can represent the entire dataset and parameters in matrix form, which simplifies computations and derivations.
*   **Design Matrix (X):**
    $X = \begin{bmatrix}
    1 & x_1^{(1)} & x_2^{(1)} & \dots & x_n^{(1)} \\
    1 & x_1^{(2)} & x_2^{(2)} & \dots & x_n^{(2)} \\
    \vdots & \vdots & \vdots & \ddots & \vdots \\
    1 & x_1^{(m)} & x_2^{(m)} & \dots & x_n^{(m)}
    \end{bmatrix}$
    *   Dimensions: $(m \times (n+1))$ where $m$ is the number of examples and $n$ is the number of features.
*   **Target Vector (y):**
    $y = \begin{bmatrix}
    y^{(1)} \\
    y^{(2)} \\
    \vdots \\
    y^{(m)}
    \end{bmatrix}$
    *   Dimensions: $(m \times 1)$
*   **Parameter Vector ($\theta$):**
    $\theta = \begin{bmatrix}
    \theta_0 \\
    \theta_1 \\
    \vdots \\
    \theta_n
    \end{bmatrix}$
    *   Dimensions: $((n+1) \times 1)$

#### 3.2 Matrix Form of Hypothesis

*   The hypothesis function for all training examples can be expressed as a matrix multiplication:
    $h_\theta(X) = X\theta$
    *   $h_\theta(X)$ is an $(m \times 1)$ vector of predictions.

#### 3.3 Matrix Form of Cost Function

*   The cost function can also be written in matrix form:
    $J(\theta) = \frac{1}{2m} (X\theta - y)^T (X\theta - y)$
    *   $(X\theta - y)$ is the error vector (dimensions $m \times 1$).
    *   $(X\theta - y)^T$ is the transpose of the error vector (dimensions $1 \times m$).
    *   The product $(X\theta - y)^T (X\theta - y)$ results in a scalar value (dot product of the error vector with itself, which is the sum of squared errors).

#### 3.4 The Normal Equation

*   **Concept:** The Normal Equation is a closed-form solution that directly calculates the optimal $\theta$ that minimizes the cost function. It finds $\theta$ where the gradient of the cost function is zero.
*   **Derivation (without detailed calculus):**
    *   To find the minimum of $J(\theta)$, we set its gradient with respect to $\theta$ to zero.
    *   $\nabla_\theta J(\theta) = \frac{1}{m} X^T (X\theta - y) = 0$
    *   $X^T (X\theta - y) = 0$
    *   $X^T X\theta - X^T y = 0$
    *   $X^T X\theta = X^T y$
    *   $\theta = (X^T X)^{-1} X^T y$

*   **The Normal Equation Formula:**
    $\theta = (X^T X)^{-1} X^T y$

#### 3.5 Steps for the Normal Equation

1.  **Construct Matrices:** Create the design matrix $X$ (add a column of 1s for the intercept) and the target vector $y$.
2.  **Compute $X^T X$:** Calculate the transpose of $X$ and multiply it by $X$.
3.  **Compute Inverse:** Calculate the inverse of $(X^T X)$.
4.  **Compute $X^T y$:** Calculate the transpose of $X$ and multiply it by $y$.
5.  **Calculate $\theta$:** Multiply $(X^T X)^{-1}$ by $(X^T y)$.

#### 3.6 Advantages and Disadvantages of Normal Equation

*   **Advantages:**
    *   **No Learning Rate:** Does not require tuning a learning rate parameter.
    *   **Direct Solution:** Provides the optimal solution in one go.
    *   **No Iterations:** No need for iterative updates.

*   **Disadvantages:**
    *   **Computational Cost:** Computing the inverse of $(X^T X)$ can be computationally expensive, especially for a large number of features. The complexity is typically $O(n^3)$ where $n$ is the number of features.
    *   **Matrix Invertibility:** $(X^T X)$ might not be invertible if features are redundant (multicollinearity) or if the number of features is greater than the number of training examples. Techniques like regularization can address this.

#### **Example: Predicting House Prices (Matrix Method)**

*   Dataset:
    | $x_1$ (sq ft) | $x_2$ (bedrooms) | $y$ (price) |
    | :------------ | :--------------- | :---------- |
    | 1500          | 3                | 300000      |
    | 2000          | 4                | 400000      |
    | 1200          | 2                | 250000      |

*   **Matrices:**
    $X = \begin{bmatrix}
    1 & 1500 & 3 \\
    1 & 2000 & 4 \\
    1 & 1200 & 2
    \end{bmatrix}$,
    $y = \begin{bmatrix}
    300000 \\
    400000 \\
    250000
    \end{bmatrix}$

*   **Calculations:**
    1.  $X^T = \begin{bmatrix} 1 & 1 & 1 \\ 1500 & 2000 & 1200 \\ 3 & 4 & 2 \end{bmatrix}$
    2.  $X^T X = \begin{bmatrix} 1 & 1 & 1 \\ 1500 & 2000 & 1200 \\ 3 & 4 & 2 \end{bmatrix} \begin{bmatrix} 1 & 1500 & 3 \\ 1 & 2000 & 4 \\ 1 & 1200 & 2 \end{bmatrix} = \begin{bmatrix} 3 & 4700 & 9 \\ 4700 & 9.25 \times 10^6 & 15.8 \times 10^3 \\ 9 & 15.8 \times 10^3 & 29 \end{bmatrix}$
    3.  $X^T y = \begin{bmatrix} 1 & 1 & 1 \\ 1500 & 2000 & 1200 \\ 3 & 4 & 2 \end{bmatrix} \begin{bmatrix} 300000 \\ 400000 \\ 250000 \end{bmatrix} = \begin{bmatrix} 950000 \\ 1.35 \times 10^9 \\ 4.1 \times 10^6 \end{bmatrix}$
    4.  Calculate $(X^T X)^{-1}$ (using a calculator or software).
    5.  $\theta = (X^T X)^{-1} X^T y$

---

### 4. Comparing Gradient Descent and Normal Equation

| Feature           | Gradient Descent                                   | Normal Equation                                  |
| :---------------- | :------------------------------------------------- | :----------------------------------------------- |
| **Approach**      | Iterative optimization                             | Closed-form analytical solution                  |
| **Parameters**    | Requires tuning learning rate ($\alpha$)           | No learning rate required                        |
| **Computational Cost** | $O(n \cdot m \cdot k)$ where $k$ is iterations | $O(n^3)$ for matrix inversion (if $n$ is large) |
| **When to Use**   | Many features ($n$ large), requires regularization | Few features ($n$ small), matrix is invertible   |
| **Convergence**   | Can converge to local/global minimum               | Directly computes global minimum                 |
| **Feature Scaling** | Recommended for faster convergence                 | Not strictly necessary but can improve stability |

---

### 5. Practice Questions

**Question 1:**
For a dataset with $m=100$ training examples and $n=5$ features, if you were to use Gradient Descent, what would be the time complexity of one iteration?

**Question 2:**
Suppose you have a dataset with $m=50$ training examples and $n=1000$ features. Which method (Gradient Descent or Normal Equation) would you likely prefer and why?

**Question 3:**
Consider the linear regression hypothesis $h_\theta(x) = \theta_0 + \theta_1x_1 + \theta_2x_2$. If the cost function is $J(\theta) = \frac{1}{2m} \sum_{i=1}^{m} (h_\theta(x^{(i)}) - y^{(i)})^2$, write down the update rule for $\theta_1$ in the context of Gradient Descent.

**Question 4:**
Given the matrices $X$ and $y$, what is the mathematical formula to compute the optimal parameters $\theta$ using the matrix method?

**Question 5:**
What is the main disadvantage of the Normal Equation when dealing with a dataset that has a very large number of features?

---

### 6. Answers to Practice Questions

**Answer 1:**
The time complexity of one iteration of Gradient Descent with $m$ examples and $n$ features is approximately $O(n \cdot m)$. This is because we perform calculations involving the feature vectors ($x_j^{(i)}$) for each of the $m$ examples, and there are $n+1$ parameters to update.

**Answer 2:**
For a dataset with $m=50$ and $n=1000$, Gradient Descent would likely be preferred. The Normal Equation's primary bottleneck is the matrix inversion of $X^T X$, which has a complexity of $O(n^3)$. With $n=1000$, $n^3$ is prohibitively large ($10^9$). Gradient Descent, even with many iterations, will generally be more efficient in such cases.

**Answer 3:**
The update rule for $\theta_1$ in Gradient Descent is:
$\theta_1 := \theta_1 - \alpha \frac{\partial}{\partial \theta_1} J(\theta)$
$\theta_1 := \theta_1 - \alpha \frac{1}{m} \sum_{i=1}^{m} (h_\theta(x^{(i)}) - y^{(i)}) x_1^{(i)}$

**Answer 4:**
The mathematical formula to compute the optimal parameters $\theta$ using the matrix method (Normal Equation) is:
$\theta = (X^T X)^{-1} X^T y$

**Answer 5:**
The main disadvantage of the Normal Equation with a very large number of features is the computational cost of calculating the matrix inverse $(X^T X)^{-1}$, which is approximately $O(n^3)$. This operation becomes extremely slow and memory-intensive as $n$ increases.

---

### Important Points to Remember

*   **Feature Scaling:** For Gradient Descent, feature scaling (e.g., normalization or standardization) is crucial for faster convergence and can prevent gradients from becoming too large or too small.
*   **Learning Rate ($\alpha$):** Choosing an appropriate learning rate is critical for Gradient Descent. Too small leads to slow convergence; too large can cause divergence.
*   **Normal Equation Invertibility:** The Normal Equation relies on $(X^T X)$ being invertible. If features are linearly dependent (multicollinearity), or if $n > m$, the matrix might be singular, and the inverse cannot be computed.
*   **Computational Trade-offs:** Gradient Descent is generally preferred when the number of features is very large, while the Normal Equation is efficient for a small number of features.
*   **Vectorization:** Using matrix operations for both Gradient Descent (especially in its vectorized implementation) and the Normal Equation makes computations more efficient and code cleaner.
*   **Bias Term ($\theta_0$):** Always remember to include the bias term by adding a column of 1s to your feature matrix $X$ for both methods.
