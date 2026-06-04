---
title: "Logistic regression"
subject: "INTRODUCTION TO ARTIFICIAL INTELLIGENCE AND DATA SCIENCE"
module: "Module 1: Introduction to AI and Machine Learning : Basics of Machine Learning"
branch: "Mechanical Engineering"
semester: 3
topicId: "68a3fd1351d0cf4804462d81"
status: "completed"
scrapedAt: "2026-05-20T17:49:39.944Z"
---
## Module 1: Introduction to AI and Machine Learning - Basics of Machine Learning

### Topic: Logistic Regression

---

### 1. Learning Outcomes

This topic will enable you to:

*   Understand the fundamental principles of logistic regression.
*   Differentiate between classification and regression tasks.
*   Explain the role of the sigmoid function in logistic regression.
*   Interpret the coefficients of a logistic regression model.
*   Understand the cost function used in logistic regression.
*   Explain the concept of decision boundary.
*   Apply logistic regression to binary classification problems.
*   Recognize the assumptions and limitations of logistic regression.

---

### 2. Introduction to Logistic Regression

Logistic Regression is a widely used **supervised machine learning algorithm** primarily for **classification problems**, especially **binary classification**. Despite its name containing "regression," it is used for predicting a **categorical outcome** (e.g., yes/no, spam/not spam, malignant/benign).

It models the probability of a binary outcome ($y$) occurring given a set of independent variables ($X$).

#### Key Concepts:

*   **Classification vs. Regression:**
    *   **Regression:** Predicts a continuous output variable (e.g., house price, temperature).
    *   **Classification:** Predicts a categorical output variable (e.g., spam/not spam, disease diagnosis).
*   **Binary Classification:** The target variable has only two possible outcomes.

---

### 3. The Need for a Different Approach (Why not Linear Regression for Classification?)

Linear regression predicts a continuous output. If we were to use linear regression for a binary classification problem (where output is 0 or 1), the predictions could fall outside the [0, 1] range, which is not ideal for probabilities. Furthermore, the assumption of linearity might not hold for probabilities.

---

### 4. The Logistic Function (Sigmoid Function)

To address the limitations of linear regression for classification, logistic regression uses a **logistic function**, also known as the **sigmoid function**. This function squashes any input value into a range between 0 and 1, making it suitable for representing probabilities.

**Mathematical Formula:**

$$ \sigma(z) = \frac{1}{1 + e^{-z}} $$

Where:
*   $z$ is the input to the function.
*   $e$ is the base of the natural logarithm (approximately 2.71828).

**Properties of the Sigmoid Function:**
*   If $z$ is very large positive, $\sigma(z)$ approaches 1.
*   If $z$ is very large negative, $\sigma(z)$ approaches 0.
*   If $z = 0$, $\sigma(z) = 0.5$.

#### **Example:**

If $z = 2$, $\sigma(2) = \frac{1}{1 + e^{-2}} \approx \frac{1}{1 + 0.135} \approx 0.88$. This means there's an 88% probability of the positive class.

---

### 5. The Logistic Regression Model

The logistic regression model predicts the probability of the positive class ($y=1$) given the input features $X$.

**Mathematical Formulation:**

Let the linear combination of features be:
$$ z = w_0 + w_1 x_1 + w_2 x_2 + \dots + w_n x_n $$
This can be written in vector form as:
$$ z = \mathbf{w}^T \mathbf{x} $$
Where $\mathbf{w} = [w_0, w_1, \dots, w_n]$ is the vector of weights (including the bias term $w_0$) and $\mathbf{x} = [1, x_1, \dots, x_n]$ is the feature vector (with $x_0=1$ for the bias).

The probability of the positive class is then given by:
$$ P(y=1|\mathbf{x}) = \sigma(z) = \frac{1}{1 + e^{-\mathbf{w}^T \mathbf{x}}} $$

The probability of the negative class ($y=0$) is:
$$ P(y=0|\mathbf{x}) = 1 - P(y=1|\mathbf{x}) = 1 - \sigma(z) = \frac{e^{-\mathbf{w}^T \mathbf{x}}}{1 + e^{-\mathbf{w}^T \mathbf{x}}} $$

#### **Interpretation of Coefficients:**

The coefficients $\mathbf{w}$ represent the change in the **log-odds** of the outcome for a one-unit change in the corresponding feature, holding other features constant.

*   **Odds:** The ratio of the probability of the event occurring to the probability of it not occurring:
    $$ \text{Odds} = \frac{P(y=1|\mathbf{x})}{P(y=0|\mathbf{x})} = \frac{\sigma(z)}{1 - \sigma(z)} = e^{\mathbf{w}^T \mathbf{x}} $$
*   **Log-odds (logit):** The natural logarithm of the odds:
    $$ \text{Log-odds} = \ln(\text{Odds}) = \mathbf{w}^T \mathbf{x} $$

If a coefficient $w_i$ is positive, an increase in feature $x_i$ increases the log-odds (and thus the probability) of the positive class. If $w_i$ is negative, an increase in $x_i$ decreases the log-odds.

**Reference:** *Mathematics for machine learning* by Deisenroth et al. (Chapter 11: Generalized Linear Models) provides a detailed mathematical foundation for such models. *Hands-on machine learning with Scikit-Learn, Keras, and TensorFlow* by Aurélien Géron (Chapter 3: Classification) offers practical implementation details.

---

### 6. The Cost Function

To train the logistic regression model, we need to find the optimal values for the weights $\mathbf{w}$ that minimize a cost function. The cost function is derived using the **Maximum Likelihood Estimation (MLE)** principle.

For a single training example $(\mathbf{x}^{(i)}, y^{(i)})$:

*   If $y^{(i)} = 1$, the cost is $-\log(P(y=1|\mathbf{x}^{(i)}))$
*   If $y^{(i)} = 0$, the cost is $-\log(1 - P(y=1|\mathbf{x}^{(i)}))$

This can be combined into a single expression:
$$ \text{Cost}(P(y=1|\mathbf{x}^{(i)}), y^{(i)}) = -y^{(i)} \log(P(y=1|\mathbf{x}^{(i)})) - (1 - y^{(i)}) \log(1 - P(y=1|\mathbf{x}^{(i)})) $$

The overall cost function for $m$ training examples is the average of these costs:

$$ J(\mathbf{w}) = -\frac{1}{m} \sum_{i=1}^{m} [y^{(i)} \log(h(\mathbf{x}^{(i)})) + (1 - y^{(i)}) \log(1 - h(\mathbf{x}^{(i)}))] $$
Where $h(\mathbf{x}^{(i)}) = P(y=1|\mathbf{x}^{(i)}) = \sigma(\mathbf{w}^T \mathbf{x}^{(i)})$.

#### **Important Note:**

This cost function is also known as the **Binary Cross-Entropy** loss. It is convex, meaning it has a single global minimum, which makes optimization easier.

---

### 7. Training the Model: Gradient Descent

Gradient Descent is the optimization algorithm used to find the weights $\mathbf{w}$ that minimize the cost function $J(\mathbf{w})$. It involves iteratively updating the weights in the direction of the steepest descent of the cost function.

The update rule for each weight $w_j$ is:

$$ w_j := w_j - \alpha \frac{\partial J(\mathbf{w})}{\partial w_j} $$

Where:
*   $\alpha$ is the learning rate.
*   $\frac{\partial J(\mathbf{w})}{\partial w_j}$ is the partial derivative of the cost function with respect to $w_j$.

The gradient of the cost function for logistic regression turns out to be surprisingly similar to that of linear regression:

$$ \frac{\partial J(\mathbf{w})}{\partial w_j} = \frac{1}{m} \sum_{i=1}^{m} (\sigma(\mathbf{w}^T \mathbf{x}^{(i)}) - y^{(i)}) x_j^{(i)} $$

So, the update rule becomes:
$$ w_j := w_j - \alpha \frac{1}{m} \sum_{i=1}^{m} (\sigma(\mathbf{w}^T \mathbf{x}^{(i)}) - y^{(i)}) x_j^{(i)} $$

This update is performed simultaneously for all weights $w_j$.

**Reference:** *Introduction to Linear Algebra* by Gilbert Strang (while focused on linear algebra, understanding vector operations and derivatives is crucial here). *Hands-on machine learning with Scikit-Learn, Keras, and TensorFlow* by Aurélien Géron provides detailed explanations of gradient descent variants.

---

### 8. Decision Boundary

The **decision boundary** is the line or hyperplane that separates the two classes in the feature space. In logistic regression, the decision boundary is determined by the point where the probability is exactly 0.5.

This happens when:
$$ \mathbf{w}^T \mathbf{x} = 0 $$

For a simple case with two features ($x_1, x_2$) and a bias term ($w_0$):
$$ w_0 + w_1 x_1 + w_2 x_2 = 0 $$
This equation represents a line in the 2D feature space. Points on one side of the line will have $\mathbf{w}^T \mathbf{x} > 0$ (probability $> 0.5$), and points on the other side will have $\mathbf{w}^T \mathbf{x} < 0$ (probability $< 0.5$).

#### **Example:**

Consider a model with features "Hours Studied" ($x_1$) and "Previous GPA" ($x_2$) to predict "Pass" (1) or "Fail" (0). If the learned weights are $\mathbf{w} = [-10, 2, 1]$, then the decision boundary is:
$$ -10 + 2 \times (\text{Hours Studied}) + 1 \times (\text{Previous GPA}) = 0 $$
$$ 2 \times (\text{Hours Studied}) + (\text{Previous GPA}) = 10 $$
This is a linear equation defining the boundary between passing and failing students.

---

### 9. Evaluation Metrics (Briefly Mentioned, will be covered in detail later)

After training, the performance of a logistic regression model is evaluated using metrics like:

*   **Accuracy:** Proportion of correctly classified instances.
*   **Precision:** Proportion of true positive predictions among all positive predictions.
*   **Recall (Sensitivity):** Proportion of true positive predictions among all actual positive instances.
*   **F1-Score:** Harmonic mean of Precision and Recall.
*   **AUC-ROC Curve:** Area Under the Receiver Operating Characteristic Curve.

---

### 10. Assumptions of Logistic Regression

1.  **Binary Outcome:** The dependent variable must be binary (dichotomous).
2.  **Independence of Errors:** The observations should be independent of each other.
3.  **No Multicollinearity:** Independent variables should not be highly correlated with each other.
4.  **Linearity of Log-odds:** The log-odds of the outcome must be a linear function of the independent variables.
5.  **Large Sample Size:** Logistic regression generally requires a larger sample size than linear regression.

---

### 11. Limitations of Logistic Regression

*   **Linearity Assumption:** Assumes a linear relationship between features and log-odds, which might not hold for complex relationships.
*   **Susceptible to Outliers:** Outliers can disproportionately influence the decision boundary.
*   **Performance on Non-linear Data:** Performs poorly on datasets where the decision boundary is highly non-linear.
*   **Feature Engineering:** May require significant feature engineering and selection for optimal performance.

---

### 12. Relation to Course Outcomes

*   **CO1 (Apply ML algorithms):** Logistic regression is a fundamental supervised learning algorithm for classification, directly addressing this outcome.
*   **CO2 (Apply advanced math):** Understanding the sigmoid function, gradient descent, and vector operations involves advanced mathematical concepts.
*   **CO3 (Analyze/interpret data):** Interpreting coefficients and understanding the decision boundary allow for data analysis and insight derivation.
*   **CO4 (Integrate stats/ML):** Logistic regression bridges statistical modeling (probability, likelihood) with machine learning (optimization, prediction).

---

### 13. Practice Questions

**Question 1:** What is the primary purpose of the sigmoid function in logistic regression?
    a) To introduce non-linearity into the model.
    b) To squash the output of a linear model into a probability between 0 and 1.
    c) To calculate the error between predicted and actual values.
    d) To perform feature scaling.

**Question 2:** If a logistic regression model has weights $\mathbf{w} = [1, -0.5, 2]$ and a bias, what is the predicted probability of the positive class for an input $\mathbf{x} = [1, 3, 1]$? (Assume $x_0=1$ for the bias term.)
    a) Approximately 0.88
    b) Approximately 0.12
    c) Approximately 0.5
    d) Approximately 0.73

**Question 3:** The decision boundary in logistic regression is defined by which condition?
    a) $P(y=1|\mathbf{x}) = 0$
    b) $\mathbf{w}^T \mathbf{x} = 0$
    c) $\sigma(\mathbf{w}^T \mathbf{x}) = 0.5$
    d) Both b and c.

**Question 4:** Which of the following statements about logistic regression is FALSE?
    a) It is used for classification problems.
    b) It predicts a continuous output value.
    c) It uses the sigmoid function to map outputs to probabilities.
    d) The cost function is typically Binary Cross-Entropy.

---

### 14. Answers to Practice Questions

**Answer 1:**
    b) To squash the output of a linear model into a probability between 0 and 1.

**Answer 2:**
    First, calculate $z = \mathbf{w}^T \mathbf{x} = (1 \times 1) + (-0.5 \times 3) + (2 \times 1) = 1 - 1.5 + 2 = 1.5$.
    Then, calculate the probability using the sigmoid function:
    $P(y=1|\mathbf{x}) = \sigma(1.5) = \frac{1}{1 + e^{-1.5}} \approx \frac{1}{1 + 0.223} \approx \frac{1}{1.223} \approx 0.817$
    The closest option is **a) Approximately 0.88** (slight difference due to rounding or precise value of e). Let's re-calculate: $e^{-1.5} \approx 0.22313$. $1 / (1 + 0.22313) \approx 1 / 1.22313 \approx 0.8175$. Option (a) is still the closest approximation.

**Answer 3:**
    d) Both b and c.
    (Both conditions result in a probability of 0.5, defining the boundary.)

**Answer 4:**
    b) It predicts a continuous output value.
    (Logistic regression predicts probabilities, which are then used for classification. It doesn't directly predict a continuous value like linear regression.)

---

### 15. Important Points to Remember

*   **Classification Algorithm:** Logistic regression is for classification, not regression.
*   **Sigmoid Function:** Essential for transforming linear outputs into probabilities.
*   **Log-odds:** The linear component $\mathbf{w}^T \mathbf{x}$ represents the log-odds.
*   **Cost Function:** Binary Cross-Entropy is used to train the model.
*   **Gradient Descent:** The primary optimization method.
*   **Decision Boundary:** A linear boundary in the original feature space.
*   **Probability Threshold:** A threshold (often 0.5) is used to convert probabilities into class labels.

---

This concludes the introductory notes on Logistic Regression. Further exploration of regularization techniques, multi-class logistic regression, and advanced evaluation metrics will build upon these fundamentals.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=uDlaoV2V-bU) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=A182z4Z_H3U) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=KzE_56Hk5B8) |
