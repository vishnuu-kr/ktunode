---
title: "Logistic regression"
subject: "INTRODUCTION TO ARTIFICIAL INTELLIGENCE AND DATA 
SCIENCE"
module: "Module 1: Introduction to AI and Machine Learning : Basics of Machine Learning"
branch: "Electronics and Communication Engineering"
semester: 3
topicId: "68a5c45db09ce205780fe33d"
status: "completed"
scrapedAt: "2026-05-23T17:45:36.896Z"
---
# Module 1: Introduction to AI and Machine Learning - Basics of Machine Learning

## Topic: Logistic Regression

---

### 1. Introduction to Logistic Regression

Logistic Regression is a fundamental **supervised learning algorithm** used for **binary classification** problems. Despite its name, it's not a regression algorithm in the sense of predicting continuous values, but rather a classification algorithm that estimates the probability of an instance belonging to a particular class.

**Key Concepts:**

*   **Classification:** The task of assigning an instance to one of several predefined categories or classes.
*   **Binary Classification:** A classification task where there are only two possible output classes (e.g., Yes/No, Spam/Not Spam, Malignant/Benign).
*   **Supervised Learning:** A type of machine learning where the algorithm learns from a labeled dataset, meaning each data point has a known output or target.

**Why not Linear Regression for Classification?**

Linear regression models predict continuous values. If we tried to use linear regression for binary classification by assigning 0 and 1 to classes, the predictions could fall outside the [0, 1] range, which is not meaningful for probabilities. Additionally, the assumptions of linear regression (like normally distributed errors) are violated in classification tasks.

**Core Idea:**

Logistic Regression models the probability of the dependent variable belonging to a particular class using a **logistic function** (also known as the sigmoid function).

---

### 2. The Sigmoid Function

The sigmoid function is a mathematical function that maps any real-valued number to a value between 0 and 1. This makes it ideal for representing probabilities.

**Mathematical Formulation:**

The sigmoid function, denoted by $\sigma(z)$, is defined as:

$$ \sigma(z) = \frac{1}{1 + e^{-z}} $$

where:
*   $e$ is the base of the natural logarithm (approximately 2.71828).
*   $z$ is the input to the function.

**Properties of the Sigmoid Function:**

*   **Output Range:** The output of $\sigma(z)$ is always between 0 and 1.
*   **Monotonically Increasing:** As $z$ increases, $\sigma(z)$ also increases.
*   **"S" Shape:** The graph of the sigmoid function resembles an "S".
*   **Centering:** At $z=0$, $\sigma(0) = 0.5$.

**Visual Representation:**

Imagine a graph where the x-axis represents $z$ and the y-axis represents $\sigma(z)$. The curve starts near 0 for very negative $z$, rises steeply around $z=0$, and approaches 1 for very positive $z$.

---

### 3. Model Formulation

Logistic Regression uses a linear combination of input features, which is then passed through the sigmoid function to estimate the probability of the positive class.

**Mathematical Formulation:**

For a dataset with $n$ features $x_1, x_2, ..., x_n$ and corresponding weights (coefficients) $w_1, w_2, ..., w_n$, and an intercept term $b$:

1.  **Linear Combination (Logit):**
    $$ z = w_0 + w_1x_1 + w_2x_2 + ... + w_nx_n = \mathbf{w}^T\mathbf{x} + b $$
    where $\mathbf{w} = [w_1, w_2, ..., w_n]^T$ and $\mathbf{x} = [x_1, x_2, ..., x_n]^T$. If we include the intercept $b$ as $w_0$ and add a bias term $x_0=1$ to the feature vector, the equation becomes $z = \mathbf{w}^T\mathbf{x}$.

2.  **Probability Estimation:**
    The probability of the instance belonging to the positive class (let's say class 1) is given by:
    $$ P(y=1|\mathbf{x}) = \sigma(z) = \frac{1}{1 + e^{-(\mathbf{w}^T\mathbf{x} + b)}} $$

3.  **Probability of Negative Class:**
    The probability of the instance belonging to the negative class (class 0) is:
    $$ P(y=0|\mathbf{x}) = 1 - P(y=1|\mathbf{x}) = 1 - \sigma(z) = \frac{e^{-(\mathbf{w}^T\mathbf{x} + b)}}{1 + e^{-(\mathbf{w}^T\mathbf{x} + b)}} $$

**Decision Boundary:**

The decision boundary is the line or surface where the probability of belonging to either class is 0.5. This occurs when $z = 0$, i.e., $\mathbf{w}^T\mathbf{x} + b = 0$. This is a linear boundary in the feature space.

---

### 4. Cost Function (Loss Function)

To train the model, we need a way to measure how well our predicted probabilities match the actual class labels. For logistic regression, we use the **log loss** or **binary cross-entropy** cost function.

**Key Concept:**

*   **Cost Function:** A function that quantifies the error of the model's predictions compared to the actual target values. The goal of training is to minimize this cost function.

**Mathematical Formulation:**

For a single training example $(\mathbf{x}^{(i)}, y^{(i)})$, where $y^{(i)}$ is the true label (0 or 1):

*   If $y^{(i)} = 1$, the cost is $-\log(P(y=1|\mathbf{x}^{(i)}))$. We want $P(y=1|\mathbf{x}^{(i)})$ to be close to 1, so $-\log(1) = 0$.
*   If $y^{(i)} = 0$, the cost is $-\log(1 - P(y=1|\mathbf{x}^{(i)}))$. We want $P(y=1|\mathbf{x}^{(i)})$ to be close to 0, so $1 - P(y=1|\mathbf{x}^{(i)})$ is close to 1, and $-\log(1) = 0$.

The cost for a single example can be written concisely as:

$$ J(\mathbf{w}, b) = -\left[ y^{(i)}\log(P(y=1|\mathbf{x}^{(i)})) + (1 - y^{(i)})\log(1 - P(y=1|\mathbf{x}^{(i)})) \right] $$

For the entire training dataset of $m$ examples, the total cost function is the average of the individual costs:

$$ J(\mathbf{w}, b) = -\frac{1}{m} \sum_{i=1}^{m} \left[ y^{(i)}\log(\sigma(\mathbf{w}^T\mathbf{x}^{(i)} + b)) + (1 - y^{(i)})\log(1 - \sigma(\mathbf{w}^T\mathbf{x}^{(i)} + b)) \right] $$

**Important Point:** This cost function is **convex**, which guarantees that gradient descent (or other optimization algorithms) will find the global minimum.

**Referencing:** This cost function is a standard choice for binary classification and is discussed in detail in machine learning textbooks like Géron's "Hands-on Machine Learning" and Deisenroth, Faisal, and Ong's "Mathematics for Machine Learning."

---

### 5. Training the Model: Gradient Descent

The goal is to find the optimal values for the weights $\mathbf{w}$ and the intercept $b$ that minimize the cost function $J(\mathbf{w}, b)$. **Gradient Descent** is a common optimization algorithm used for this purpose.

**Key Concept:**

*   **Gradient Descent:** An iterative optimization algorithm that moves in the direction of the steepest descent of the cost function. The steps are determined by the gradient of the cost function with respect to the parameters.

**Mathematical Formulation (Update Rules):**

The gradients of the cost function with respect to $w_j$ and $b$ are calculated. The update rules are:

$$ w_j := w_j - \alpha \frac{\partial J}{\partial w_j} $$
$$ b := b - \alpha \frac{\partial J}{\partial b} $$

where $\alpha$ is the **learning rate**, a hyperparameter that controls the step size.

The partial derivatives are:

$$ \frac{\partial J}{\partial w_j} = \frac{1}{m} \sum_{i=1}^{m} (\sigma(\mathbf{w}^T\mathbf{x}^{(i)} + b) - y^{(i)}) x_j^{(i)} $$
$$ \frac{\partial J}{\partial b} = \frac{1}{m} \sum_{i=1}^{m} (\sigma(\mathbf{w}^T\mathbf{x}^{(i)} + b) - y^{(i)}) $$

Notice that the term $(\sigma(\mathbf{w}^T\mathbf{x}^{(i)} + b) - y^{(i)})$ represents the error in prediction for the $i$-th example.

**Algorithm Steps:**

1.  Initialize weights $\mathbf{w}$ and bias $b$ (e.g., to zeros or small random values).
2.  Iteratively update $\mathbf{w}$ and $b$ using the gradient descent update rules until convergence (e.g., the cost function stops decreasing significantly).

**Referencing:** Gradient descent is a core optimization technique discussed in most machine learning and optimization textbooks, including "Mathematics for Machine Learning" and "Hands-on Machine Learning."

---

### 6. Making Predictions

Once the model is trained (i.e., optimal $\mathbf{w}$ and $b$ are found), we can use it to make predictions on new, unseen data.

**Steps:**

1.  Given a new input feature vector $\mathbf{x}_{new}$.
2.  Calculate the linear combination: $z_{new} = \mathbf{w}^T\mathbf{x}_{new} + b$.
3.  Pass $z_{new}$ through the sigmoid function to get the predicted probability of the positive class: $P(y=1|\mathbf{x}_{new}) = \sigma(z_{new})$.
4.  **Classification:** To assign a class label, we use a **threshold**. Typically, a threshold of 0.5 is used:
    *   If $P(y=1|\mathbf{x}_{new}) \ge 0.5$, predict class 1.
    *   If $P(y=1|\mathbf{x}_{new}) < 0.5$, predict class 0.

**Example:**

Suppose a trained logistic regression model has weights $\mathbf{w} = [2.0, 1.5]$ and bias $b = -3.0$. For a new data point $\mathbf{x}_{new} = [1.0, 2.0]$:

1.  $z_{new} = (2.0 \times 1.0) + (1.5 \times 2.0) + (-3.0) = 2.0 + 3.0 - 3.0 = 2.0$
2.  $P(y=1|\mathbf{x}_{new}) = \sigma(2.0) = \frac{1}{1 + e^{-2.0}} \approx \frac{1}{1 + 0.135} \approx \frac{1}{1.135} \approx 0.881$
3.  Since $0.881 \ge 0.5$, we predict class 1.

---

### 7. Evaluation Metrics

After training, we need to evaluate the performance of the logistic regression model. Common metrics for classification include:

*   **Accuracy:** The proportion of correctly classified instances.
    $$ \text{Accuracy} = \frac{\text{Number of Correct Predictions}}{\text{Total Number of Predictions}} $$
    *   **Caveat:** Can be misleading for imbalanced datasets.

*   **Confusion Matrix:** A table that summarizes the performance of a classification algorithm. It shows True Positives (TP), True Negatives (TN), False Positives (FP), and False Negatives (FN).
    *   TP: Correctly predicted positive class.
    *   TN: Correctly predicted negative class.
    *   FP: Incorrectly predicted positive class (Type I error).
    *   FN: Incorrectly predicted negative class (Type II error).

*   **Precision:** The proportion of predicted positive instances that were actually positive.
    $$ \text{Precision} = \frac{TP}{TP + FP} $$
    *   Measures the accuracy of positive predictions.

*   **Recall (Sensitivity):** The proportion of actual positive instances that were correctly identified.
    $$ \text{Recall} = \frac{TP}{TP + FN} $$
    *   Measures the ability of the model to find all positive instances.

*   **F1-Score:** The harmonic mean of Precision and Recall, providing a balance between the two.
    $$ \text{F1-Score} = 2 \times \frac{\text{Precision} \times \text{Recall}}{\text{Precision} + \text{Recall}} $$

*   **AUC-ROC Curve:**
    *   **ROC Curve (Receiver Operating Characteristic):** A plot of the True Positive Rate (Recall) against the False Positive Rate (FPR = FP / (FP + TN)) at various threshold settings.
    *   **AUC (Area Under the Curve):** The area under the ROC curve. A higher AUC indicates better performance, with 1.0 being a perfect classifier and 0.5 being a random classifier. AUC is useful for evaluating performance across different thresholds.

**Referencing:** These evaluation metrics are standard in statistics and machine learning and are covered in books like "Fundamentals of Mathematical Statistics" and "Statistics For Data Science."

---

### 8. Advantages and Disadvantages

**Advantages:**

*   **Simplicity and Interpretability:** Easy to understand, implement, and interpret the coefficients (weights) which indicate the influence of each feature on the outcome.
*   **Efficiency:** Relatively fast to train and predict, especially for large datasets.
*   **Probabilistic Output:** Provides probability estimates, which can be useful for decision-making.
*   **Good Baseline:** Often serves as a strong baseline model for classification tasks.
*   **Handles Non-Linearity (with feature engineering):** While the decision boundary is linear, you can introduce non-linear decision boundaries by adding polynomial features or interaction terms.

**Disadvantages:**

*   **Assumes Linearity:** Assumes a linear relationship between the features and the log-odds of the outcome. Cannot model complex non-linear relationships directly.
*   **Sensitive to Outliers:** Like linear regression, it can be sensitive to outliers.
*   **Assumes Independence:** Assumes independence of features, which might not always hold true.
*   **Can struggle with Imbalanced Datasets:** Accuracy can be misleading. Other metrics like Precision, Recall, F1-score, and AUC are more informative.

---

### 9. Relation to Course Outcomes

*   **CO1 (Apply ML algorithms):** Logistic regression is a core supervised learning algorithm for classification, directly aligning with this outcome.
*   **CO2 (Advanced Math Concepts):** The use of sigmoid function, linear combinations, and gradient descent involves fundamental mathematical concepts like calculus and linear algebra.
*   **CO3 (Analyze and Interpret Data):** Logistic regression helps in understanding the relationship between features and a binary outcome, contributing to data interpretation. Evaluation metrics also fall under this.
*   **CO4 (Integrate Stats & ML):** Logistic regression is a blend of statistical modeling (probability estimation) and machine learning (learning parameters via optimization).

---

### 10. Examples

*   **Spam Detection:** Classifying an email as "spam" or "not spam" based on features like keywords, sender reputation, etc.
*   **Medical Diagnosis:** Predicting whether a patient has a disease (e.g., diabetes, heart disease) based on medical test results and patient history.
*   **Customer Churn Prediction:** Predicting whether a customer will "churn" (stop using a service) or "stay."
*   **Credit Scoring:** Predicting whether a loan applicant will "default" or "not default."

---

### 11. Practice Questions & Exercises

**Question 1:**

What is the primary purpose of the sigmoid function in logistic regression?

**(a)** To predict a continuous value.
**(b)** To map any real-valued input to a probability between 0 and 1.
**(c)** To define the decision boundary.
**(d)** To calculate the gradient.

**Answer:** (b) To map any real-valued input to a probability between 0 and 1.

**Question 2:**

If a logistic regression model predicts a probability of 0.7 for a customer churning, and the threshold for predicting churn is 0.5, what is the predicted outcome?

**(a)** The customer will not churn.
**(b)** The customer will churn.
**(c)** Cannot be determined.
**(d)** The model is incorrect.

**Answer:** (b) The customer will churn.

**Question 3:**

True or False: Logistic regression can be used for multi-class classification directly without modifications.

**Answer:** False. Logistic regression is primarily for binary classification. For multi-class classification, extensions like One-vs-Rest (OvR) or multinomial logistic regression are used.

**Question 4 (Conceptual/Calculation):**

Consider a logistic regression model with a single feature $x$ and the following parameters: $w = 2.0$, $b = -1.0$.
What is the predicted probability of the positive class for $x=1.0$?

**Answer:**
1.  Calculate $z = w \cdot x + b = 2.0 \cdot 1.0 + (-1.0) = 2.0 - 1.0 = 1.0$.
2.  Calculate the probability using the sigmoid function: $P(y=1|x) = \sigma(z) = \frac{1}{1 + e^{-1.0}} \approx \frac{1}{1 + 0.368} \approx \frac{1}{1.368} \approx 0.731$.
    So, the predicted probability is approximately 0.731.

**Question 5 (Conceptual):**

If your logistic regression model has a very high recall but a low precision, what does this imply about its performance?

**Answer:**
*   **High Recall:** The model is good at identifying most of the actual positive cases (few False Negatives).
*   **Low Precision:** A significant proportion of the instances predicted as positive were actually negative (many False Positives).
    This means the model is "over-predicting" the positive class. It's sensitive to finding all positive cases but sacrifices accuracy in its positive predictions.

---

### 12. Important Points to Remember

*   **Binary Classification:** Logistic regression is designed for problems with two output classes.
*   **Probabilistic Output:** It models the probability of the positive class, not the class label directly.
*   **Sigmoid Function:** Crucial for mapping the linear output to probabilities between 0 and 1.
*   **Linear Decision Boundary:** The decision boundary is always linear in the feature space.
*   **Log Loss / Binary Cross-Entropy:** The standard cost function for training.
*   **Gradient Descent:** The typical optimization algorithm used to find model parameters.
*   **Thresholding:** A threshold (often 0.5) is applied to the predicted probabilities to make a final class prediction.
*   **Evaluation:** Use metrics like accuracy, precision, recall, F1-score, and AUC-ROC, especially for imbalanced datasets.

---

This concludes the notes on Logistic Regression. Remember to practice implementing this algorithm using libraries like Scikit-learn and to interpret its results in the context of your data.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=mc979OhitAg) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=F_4HkL5r4n0) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=p6Q9_e7_L1w) |
