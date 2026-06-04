---
title: "Logistic regression"
subject: "INTRODUCTION TO ARTIFICIAL INTELLIGENCE AND DATA 
SCIENCE"
module: "Module 1: Introduction to AI and Machine Learning :  Basics of Machine Learning"
branch: "Electrical and Electronics Engineering"
semester: 3
topicId: "68a200842b85456187f35b89"
status: "completed"
scrapedAt: "2026-05-23T16:13:56.659Z"
---
## Module 1: Introduction to AI and Machine Learning - Basics of Machine Learning

### Topic: Logistic Regression

---

### 1. Introduction to Logistic Regression

**1.1 What is Logistic Regression?**

*   Logistic Regression is a **statistical model** that is used for **classification tasks**, specifically for predicting the probability of a binary outcome (i.e., an outcome with two possible classes, like Yes/No, True/False, 0/1).
*   Despite its name, it is a **classification algorithm**, not a regression algorithm. While it uses a linear equation like linear regression, it transforms the output using a **sigmoid function** to produce probabilities.
*   It is a foundational algorithm in supervised learning, particularly for binary classification problems.

**1.2 Why Not Use Linear Regression for Classification?**

*   Linear regression outputs can range from $-\infty$ to $+\infty$. For classification, we need probabilities which are bounded between 0 and 1.
*   Linear regression assumes a linear relationship between features and the target variable. For classification, the relationship is often non-linear (e.g., a step-like change in probability).
*   Extrapolating linear regression beyond the range of the training data can lead to nonsensical predictions (probabilities outside 0-1).

**1.3 Key Concepts and Definitions**

*   **Binary Classification:** A task where the goal is to assign an input to one of two possible classes.
*   **Sigmoid Function (Logistic Function):** A mathematical function that maps any real-valued number to a value between 0 and 1. It has an "S" shape.
    *   Formula: $\sigma(z) = \frac{1}{1 + e^{-z}}$
    *   Where $z$ is the input.
    *   As $z \to \infty$, $\sigma(z) \to 1$.
    *   As $z \to -\infty$, $\sigma(z) \to 0$.
    *   As $z = 0$, $\sigma(z) = 0.5$.

    **Important Point:** The sigmoid function is crucial for transforming the linear combination of features into a probability.

*   **Logit Function (Log-Odds):** The inverse of the sigmoid function. It maps probabilities back to the real number line.
    *   Formula: $logit(p) = \log\left(\frac{p}{1-p}\right)$
    *   Where $p$ is the probability. $\frac{p}{1-p}$ is the odds, and its logarithm is the log-odds.
    *   The logit function is essentially the linear part of the logistic regression equation.

*   **Decision Boundary:** The line or surface that separates the different classes in the feature space. In logistic regression with two features, it's a straight line. For more features, it's a hyperplane.

**1.4 Mathematical Formulation**

Let:
*   $X = [x_1, x_2, ..., x_n]$ be the feature vector of an instance.
*   $w = [w_1, w_2, ..., w_n]$ be the weight vector.
*   $b$ be the bias term (intercept).

The linear combination of features is:
$z = w^T X + b = w_1x_1 + w_2x_2 + ... + w_nx_n + b$

The probability of the positive class (e.g., class 1) is then calculated using the sigmoid function:
$P(Y=1 | X) = \sigma(z) = \frac{1}{1 + e^{-(w^T X + b)}}$

The probability of the negative class (e.g., class 0) is:
$P(Y=0 | X) = 1 - P(Y=1 | X) = 1 - \frac{1}{1 + e^{-(w^T X + b)}} = \frac{e^{-(w^T X + b)}}{1 + e^{-(w^T X + b)}} = \frac{1}{1 + e^{w^T X + b}}$

**1.5 Learning the Weights (Training)**

The goal is to find the optimal weights ($w$) and bias ($b$) that best fit the training data. This is done by minimizing a **cost function**.

*   **Likelihood Function:** The probability of observing the training data given the model parameters. For logistic regression, it's the product of the probabilities of the observed labels.
*   **Log-Likelihood Function:** Taking the logarithm of the likelihood function. This is often easier to work with and computationally more stable.
*   **Cost Function (Log Loss / Binary Cross-Entropy):**
    *   For a single training instance $(X_i, y_i)$, where $y_i$ is the true label (0 or 1):
        $Cost(w, b) = -(y_i \log(P(Y=1|X_i)) + (1-y_i) \log(P(Y=0|X_i)))$
    *   For the entire training dataset of $m$ instances:
        $J(w, b) = \frac{1}{m} \sum_{i=1}^{m} [-(y_i \log(\hat{y}_i) + (1-y_i) \log(1-\hat{y}_i))]$
        where $\hat{y}_i = P(Y=1|X_i)$ is the predicted probability.

    **Important Point:** The log loss penalizes confident wrong predictions more heavily.

*   **Optimization Algorithms:**
    *   **Gradient Descent:** Iteratively updates weights and bias in the direction that minimizes the cost function.
        *   $w_j \leftarrow w_j - \alpha \frac{\partial J}{\partial w_j}$
        *   $b \leftarrow b - \alpha \frac{\partial J}{\partial b}$
        where $\alpha$ is the learning rate.
    *   Other optimization algorithms like Stochastic Gradient Descent (SGD), Adam, etc., are also used.

    **Reference:** Chapter 3 of "Hands-on Machine Learning with Scikit-Learn, Keras, and TensorFlow" by Aurélien Géron discusses gradient descent and optimization.

**1.6 Making Predictions**

Once the model is trained, for a new instance $X_{new}$:
1.  Calculate $z = w^T X_{new} + b$.
2.  Calculate the probability $\hat{y} = \sigma(z) = \frac{1}{1 + e^{-z}}$.
3.  **Classification:** If $\hat{y} \ge 0.5$, predict class 1. Otherwise, predict class 0.
    *   The decision boundary is where $\hat{y} = 0.5$, which means $z = 0$, or $w^T X + b = 0$.

---

### 2. Relation to Other Concepts

**2.1 Connection to Linear Algebra**

*   The core of logistic regression involves a **dot product** (linear combination) between the feature vector and the weight vector ($w^T X$). This is a fundamental operation in linear algebra.
*   Matrix operations are used to perform these calculations efficiently for multiple instances. If $X$ is an $m \times n$ matrix (m instances, n features) and $W$ is an $n \times 1$ matrix (weights), then $XW$ computes the linear combination for all instances simultaneously.
*   **Reference:** "Introduction to Linear Algebra" by Gilbert Strang would be relevant for understanding these vector and matrix operations.

**2.2 Connection to Statistics and Probability**

*   **Probability Theory:** Logistic regression models the conditional probability $P(Y=y|X)$.
*   **Maximum Likelihood Estimation (MLE):** The process of finding the model parameters (weights and bias) that maximize the likelihood of observing the training data is a core statistical concept.
*   **Statistical Inference:** Understanding the confidence in the estimated parameters and making predictions with associated probabilities.
*   **Reference:** "Fundamentals of Mathematical Statistics" by Gupta & Kapoor and "Probability and Statistics for Data Science" by Carlos Fernandez-Granda provide the foundational statistical and probability concepts.

**2.3 Connection to Machine Learning**

*   **Supervised Learning:** Logistic regression falls under supervised learning because it learns from labeled data (features and corresponding true outcomes).
*   **Classification Algorithm:** Its primary application is for classification tasks.
*   **Model Evaluation:** Metrics like accuracy, precision, recall, F1-score, and AUC are used to evaluate the performance of logistic regression models.
*   **Regularization:** Techniques like L1 and L2 regularization can be applied to logistic regression to prevent overfitting.

    **Reference:** "Introducing data science: big data, machine learning, and more, using Python tools" by Cielen et al. and "Data science: concepts and practice" by Kotu & Deshpande discuss these broader machine learning and data science principles.

---

### 3. Extending Logistic Regression

**3.1 Multi-Class Classification**

Logistic regression, in its basic form, is for binary classification. To handle multi-class problems (more than two classes):

*   **One-vs-Rest (OvR) / One-vs-All (OvA):**
    *   Train $k$ binary logistic regression classifiers, where $k$ is the number of classes.
    *   For the $i$-th classifier, consider class $i$ as the positive class and all other classes as the negative class.
    *   To predict for a new instance, run it through all $k$ classifiers and choose the class whose classifier outputs the highest probability.

*   **Softmax Regression (Multinomial Logistic Regression):**
    *   A generalization of logistic regression for multi-class problems.
    *   It predicts probabilities for all $k$ classes simultaneously.
    *   Uses the **softmax function** instead of the sigmoid function.
    *   For an instance $X$, the probability of class $j$ is:
        $P(Y=j | X) = \frac{e^{w_j^T X + b_j}}{\sum_{l=1}^{k} e^{w_l^T X + b_l}}$
    *   The cost function is the cross-entropy loss across all classes.

    **Reference:** Aurélien Géron's book also covers multi-class classification strategies.

**3.2 Regularization**

To prevent overfitting, especially with high-dimensional data, regularization techniques are applied:

*   **L1 Regularization (Lasso):** Adds a penalty proportional to the absolute value of the weights ($|w_j|$). It can drive some weights to exactly zero, performing feature selection.
    *   Cost function includes: $\lambda \sum_{j=1}^{n} |w_j|$
*   **L2 Regularization (Ridge):** Adds a penalty proportional to the square of the weights ($(w_j)^2$). It shrinks weights towards zero but rarely makes them exactly zero.
    *   Cost function includes: $\lambda \sum_{j=1}^{n} w_j^2$
*   $\lambda$ is the regularization hyperparameter that controls the strength of the penalty.

    **Important Point:** Regularization helps to create simpler models that generalize better to unseen data.

---

### 4. Practical Considerations and Applications

**4.1 Model Evaluation**

*   **Accuracy:** $\frac{TP + TN}{TP + TN + FP + FN}$ (Proportion of correctly classified instances)
*   **Precision:** $\frac{TP}{TP + FP}$ (Of all instances predicted as positive, how many were actually positive?)
*   **Recall (Sensitivity):** $\frac{TP}{TP + FN}$ (Of all actual positive instances, how many were correctly predicted as positive?)
*   **F1-Score:** $2 \times \frac{Precision \times Recall}{Precision + Recall}$ (Harmonic mean of precision and recall)
*   **Confusion Matrix:** A table summarizing the prediction results (True Positives, True Negatives, False Positives, False Negatives).
*   **ROC Curve (Receiver Operating Characteristic) and AUC (Area Under the Curve):** Plots the true positive rate against the false positive rate at various threshold settings. AUC provides a single measure of performance, with higher AUC indicating better performance.

    **Reference:** "Statistics For Data Science" by James D. Miller covers model evaluation metrics extensively.

**4.2 Use Cases/Examples**

*   **Spam Detection:** Classifying emails as spam or not spam.
*   **Medical Diagnosis:** Predicting the likelihood of a disease based on patient symptoms.
*   **Credit Scoring:** Predicting whether a loan applicant will default or not.
*   **Sentiment Analysis:** Classifying text as positive, negative, or neutral.
*   **Image Recognition (Simple cases):** Distinguishing between two types of objects.

    **Example:** Predicting whether a student will pass an exam (Pass/Fail) based on hours studied and previous exam scores.

    *   Features: Hours studied ($x_1$), Previous exam score ($x_2$).
    *   Target: Pass (1) or Fail (0).
    *   Model: $P(\text{Pass}=1) = \sigma(w_1x_1 + w_2x_2 + b)$
    *   If $P(\text{Pass}=1) \ge 0.5$, predict Pass, otherwise predict Fail.

**4.3 Strengths and Weaknesses**

*   **Strengths:**
    *   Simple, interpretable, and easy to implement.
    *   Outputs probabilities, which can be useful for decision-making.
    *   Efficient for linearly separable or nearly linearly separable data.
    *   Good baseline model for classification problems.
*   **Weaknesses:**
    *   Assumes a linear relationship between features and the log-odds of the outcome.
    *   Can perform poorly if the decision boundary is highly non-linear.
    *   Sensitive to outliers.
    *   May not capture complex interactions between features without explicit creation of interaction terms.

---

### 5. Learning Outcomes Covered

*   **CO1: Apply the concept of machine learning algorithms including neural networks and supervised/unsupervised learning techniques for engineering applications.**
    *   Logistic regression is a fundamental supervised learning algorithm for classification. Its application in areas like spam detection, medical diagnosis, or credit scoring demonstrates its use in engineering contexts.
*   **CO2: Apply advanced mathematical concepts such as matrix operations, singular values, and principal component analysis to analyze and solve engineering problems.**
    *   While not directly using singular values or PCA within logistic regression itself, the underlying linear algebra (dot products, vector operations) is essential for its implementation. Understanding matrix operations is key to efficient computation.
*   **CO3: Analyze and interpret data using statistical methods including descriptive statistics, correlation, and regression analysis to derive meaningful insights and make informed decisions.**
    *   Logistic regression is a form of regression analysis (predicting probabilities) and relies heavily on statistical concepts like probability, likelihood, and hypothesis testing for parameter estimation and interpretation.
*   **CO4: Integrate statistical approaches and machine learning techniques to ensure practically feasible solutions in engineering contexts.**
    *   Logistic regression exemplifies this by combining statistical modeling principles with computational learning techniques to build predictive models for real-world engineering problems.

---

### 6. Practice Questions

**Question 1:**
What is the primary purpose of the sigmoid function in logistic regression?
A) To scale the input features.
B) To transform the linear output into a probability between 0 and 1.
C) To introduce non-linearity into the model.
D) To compute the decision boundary.

**Question 2:**
Which cost function is typically used for training a logistic regression model?
A) Mean Squared Error (MSE)
B) Mean Absolute Error (MAE)
C) Log Loss (Binary Cross-Entropy)
D) Hinge Loss

**Question 3:**
If a logistic regression model outputs a probability of 0.75 for a particular instance belonging to class 1, and the threshold is set at 0.5, what will be the predicted class?
A) Class 0
B) Class 1
C) Cannot be determined without more information.
D) The instance is on the decision boundary.

**Question 4:**
Explain the difference between the One-vs-Rest (OvR) and Softmax approaches for multi-class classification using logistic regression.

**Question 5:**
Consider a logistic regression model with the equation:
$P(Y=1 | X) = \frac{1}{1 + e^{-(1.5x_1 - 0.8x_2 + 0.3)}}$
If $x_1 = 2$ and $x_2 = 3$, what is the predicted probability of class 1?

---

### 7. Answers to Practice Questions

**Answer 1:**
**B) To transform the linear output into a probability between 0 and 1.**
*   *Explanation:* The sigmoid function squashes the output of the linear combination of features into the range [0, 1], making it interpretable as a probability.

**Answer 2:**
**C) Log Loss (Binary Cross-Entropy)**
*   *Explanation:* Log loss is specifically designed for classification tasks and penalizes incorrect predictions based on their probability, making it suitable for logistic regression.

**Answer 3:**
**B) Class 1**
*   *Explanation:* Since the predicted probability (0.75) is greater than or equal to the decision threshold (0.5), the model predicts the positive class, which is Class 1.

**Answer 4:**
*   **One-vs-Rest (OvR):** For $k$ classes, $k$ independent binary classifiers are trained. Each classifier distinguishes one class from all the others combined. For a new data point, each classifier predicts a probability for its respective class. The class with the highest predicted probability is chosen.
*   **Softmax Regression:** This is a direct generalization for multi-class problems. It uses the softmax function to output probabilities for all $k$ classes simultaneously. The model learns a set of weights for each class, and the probabilities are normalized such that they sum up to 1 across all classes. The class with the highest probability is then chosen.

**Answer 5:**
First, calculate the linear combination $z$:
$z = 1.5x_1 - 0.8x_2 + 0.3$
$z = 1.5(2) - 0.8(3) + 0.3$
$z = 3.0 - 2.4 + 0.3$
$z = 0.9$

Now, apply the sigmoid function:
$P(Y=1 | X) = \frac{1}{1 + e^{-z}} = \frac{1}{1 + e^{-0.9}}$
$P(Y=1 | X) = \frac{1}{1 + 0.40657...}$ (Using a calculator for $e^{-0.9}$)
$P(Y=1 | X) = \frac{1}{1.40657...}$
$P(Y=1 | X) \approx 0.711$

The predicted probability of class 1 is approximately **0.711**.

---

### 8. Important Points to Remember

*   **Logistic regression is for classification, not regression**, despite its name.
*   The **sigmoid function** is key to transforming linear outputs into probabilities.
*   The **log loss (binary cross-entropy)** is the standard cost function for training.
*   The **decision boundary** is determined by where the probability is 0.5 (or the log-odds are 0).
*   It's effective for **linearly separable data** but struggles with highly non-linear decision boundaries.
*   **Regularization (L1, L2)** is crucial for handling overfitting in high-dimensional datasets.
*   **Evaluation metrics** like accuracy, precision, recall, F1-score, and AUC are essential for assessing model performance.
*   It can be extended to **multi-class problems** using OvR or Softmax regression.
