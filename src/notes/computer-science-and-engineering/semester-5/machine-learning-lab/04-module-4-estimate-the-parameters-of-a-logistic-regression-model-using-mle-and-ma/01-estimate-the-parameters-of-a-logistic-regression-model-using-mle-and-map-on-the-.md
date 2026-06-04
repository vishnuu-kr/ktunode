---
title: "Estimate the parameters of a logistic regression model using MLE and MAP on the Breast Cancer Wisconsin dataset. Compare the results and discuss the effects of regularization."
subject: "MACHINE LEARNING LAB"
module: "Module 4: Estimate the parameters of a logistic regression model using MLE and MAP on the Breast Cancer Wisconsin dataset. Compare the results and discuss the effects of regularization."
branch: "Computer Science and Engineering"
semester: 5
topicId: "684162770fc9aa1fdbc8b942"
status: "completed"
scrapedAt: "2026-05-20T16:47:07.197Z"
---
## Machine Learning Lab - Module 4: Logistic Regression with MLE and MAP

**Topic:** Estimate the parameters of a logistic regression model using MLE and MAP on the Breast Cancer Wisconsin dataset. Compare the results and discuss the effects of regularization.

**Learning Outcomes:**

*   Understand the concept of logistic regression and its application.
*   Apply Maximum Likelihood Estimation (MLE) to estimate logistic regression parameters.
*   Apply Maximum a Posteriori (MAP) estimation to estimate logistic regression parameters.
*   Implement logistic regression with MLE and MAP using the Breast Cancer Wisconsin dataset.
*   Compare the results obtained from MLE and MAP estimation.
*   Understand the concept of regularization and its impact on logistic regression.
*   Analyze the effects of different regularization techniques (L1 and L2) on model performance.
*   Evaluate the performance of the models using appropriate metrics.

---

### 1. Introduction to Logistic Regression

*   **Definition:** Logistic regression is a statistical method used for binary classification problems. It predicts the probability of an instance belonging to a particular class. Unlike linear regression, the output is a probability value between 0 and 1.

*   **Key Concepts:**
    *   **Sigmoid Function:**  The core of logistic regression is the sigmoid function (also known as the logistic function), which maps any real-valued number to a value between 0 and 1.  Formula:  `σ(z) = 1 / (1 + exp(-z))`  where `z` is the linear combination of input features (z = w<sup>T</sup>x + b).
    *   **Decision Boundary:**  The threshold value used to classify instances into one of the two classes (typically 0.5).  If the predicted probability is greater than or equal to the threshold, the instance is classified as class 1; otherwise, it's classified as class 0.
    *   **Linear Combination:** `z = w<sup>T</sup>x + b` where `w` is the vector of weights/coefficients, `x` is the input feature vector, and `b` is the bias/intercept.

*   **Mathematical Formulation:**
    *   **Probability of Belonging to Class 1:**  `P(y=1 | x; w, b) = σ(w<sup>T</sup>x + b)`
    *   **Probability of Belonging to Class 0:**  `P(y=0 | x; w, b) = 1 - σ(w<sup>T</sup>x + b)`

*   **Example:** Predicting whether a patient has breast cancer (1) or not (0) based on features like tumor size, texture, and smoothness.

### 2. Maximum Likelihood Estimation (MLE)

*   **Definition:** MLE is a method for estimating the parameters of a statistical model.  It finds the parameter values that maximize the likelihood of observing the given data.  In the context of logistic regression, it finds the weights (w) and bias (b) that best explain the observed binary outcomes.

*   **Likelihood Function:** The likelihood function represents the probability of observing the data given the parameters.  For logistic regression, we can write it as:

    `L(w, b) = ∏ [σ(w<sup>T</sup>x<sub>i</sub> + b)]<sup>y<sub>i</sub></sup> * [1 - σ(w<sup>T</sup>x<sub>i</sub> + b)]<sup>(1-y<sub>i</sub>)</sup>`

    where:
    *   `i` indexes the data points
    *   `x<sub>i</sub>` is the feature vector for the i-th data point
    *   `y<sub>i</sub>` is the true label (0 or 1) for the i-th data point

*   **Log-Likelihood:**  To simplify calculations and avoid numerical underflow, we often work with the log-likelihood function:

    `log L(w, b) = Σ [y<sub>i</sub> * log(σ(w<sup>T</sup>x<sub>i</sub> + b)) + (1 - y<sub>i</sub>) * log(1 - σ(w<sup>T</sup>x<sub>i</sub> + b))]`

*   **Maximizing the Log-Likelihood:** MLE aims to find the values of `w` and `b` that maximize the log-likelihood function. This is typically done using iterative optimization algorithms such as gradient descent or Newton-Raphson.

*   **Example (Conceptual):** Imagine you have several coins and want to estimate the probability of getting heads. MLE would involve flipping the coins multiple times and then estimating the probability of heads as the number of heads observed divided by the total number of flips.

### 3. Maximum a Posteriori (MAP) Estimation

*   **Definition:** MAP estimation is a Bayesian method that estimates the parameters of a statistical model by maximizing the posterior probability distribution.  It combines the likelihood of the data with a prior belief about the parameters.

*   **Posterior Probability:** The posterior probability `P(w, b | X, Y)` is proportional to the product of the likelihood and the prior:

    `P(w, b | X, Y) ∝ L(w, b) * P(w, b)`

    where:
    *   `X` is the input data (feature matrix)
    *   `Y` is the target variable (labels)
    *   `P(w, b)` is the prior probability distribution of the parameters `w` and `b`.

*   **Prior Distribution:**  The prior distribution reflects our prior knowledge or belief about the parameters before observing the data.  Common choices for the prior include:
    *   **Gaussian Prior (L2 Regularization):** `P(w, b) ∝ exp(-||w||<sup>2</sup> / (2 * σ<sup>2</sup>))`
    *   **Laplace Prior (L1 Regularization):** `P(w, b) ∝ exp(-||w||<sub>1</sub> / λ)`
        where `||w||<sup>2</sup>` is the L2 norm (Euclidean norm) of `w`, `||w||<sub>1</sub>` is the L1 norm (sum of absolute values) of `w`, `σ` is the standard deviation (controls the strength of L2 regularization), and `λ` is the regularization parameter (controls the strength of L1 regularization).

*   **Maximizing the Posterior:** MAP estimation involves finding the values of `w` and `b` that maximize the posterior probability. This is equivalent to maximizing the product of the likelihood and the prior (or, equivalently, maximizing the sum of the log-likelihood and the log-prior).

*   **Relationship to MLE:**  If a uniform (non-informative) prior is used, MAP estimation reduces to MLE.

*   **Example (Conceptual):**  Suppose you are estimating the probability of a coin landing heads. You have a prior belief that the coin is likely fair (close to 0.5 probability of heads). If you then flip the coin 10 times and get 8 heads, MAP would adjust your estimate towards the prior belief (fairness), while MLE would simply estimate the probability as 0.8.

### 4. Regularization

*   **Definition:** Regularization is a technique used to prevent overfitting in machine learning models. It adds a penalty term to the loss function (the function being minimized during training) to discourage overly complex models.  In the context of logistic regression, this penalty is often added to the log-likelihood or negative log-likelihood.

*   **Types of Regularization:**
    *   **L1 Regularization (Lasso):**  Adds a penalty proportional to the *absolute value* of the weights.  It tends to produce sparse models by driving some weights to exactly zero, effectively performing feature selection.

        *   Modified Loss Function (MAP with Laplace Prior): `Loss = -log L(w, b) + λ * ||w||<sub>1</sub>`
    *   **L2 Regularization (Ridge):** Adds a penalty proportional to the *square* of the weights.  It shrinks the weights towards zero but rarely sets them to zero.

        *   Modified Loss Function (MAP with Gaussian Prior): `Loss = -log L(w, b) + (1 / (2 * σ<sup>2</sup>)) * ||w||<sup>2</sup>`  often rewritten as `Loss = -log L(w, b) + λ * ||w||<sup>2</sup>` where λ = 1/(2*σ<sup>2</sup>)

*   **Effects of Regularization:**
    *   **Reduces Overfitting:** By penalizing large weights, regularization prevents the model from fitting the noise in the training data.
    *   **Improves Generalization:**  Regularized models tend to perform better on unseen data (test data).
    *   **Feature Selection (L1):**  L1 regularization can be used to identify and select the most important features by setting the weights of irrelevant features to zero.
    *   **Weight Shrinkage (L2):** L2 regularization shrinks the weights towards zero, making the model less sensitive to individual features.

*   **Regularization Parameter (λ):**  Controls the strength of the regularization.  A higher value of λ imposes a stronger penalty on the weights, leading to more regularization.  The optimal value of λ is typically determined using cross-validation.

### 5. Applying Logistic Regression with MLE and MAP to the Breast Cancer Wisconsin Dataset

*   **Dataset Overview:** The Breast Cancer Wisconsin dataset is a widely used dataset for binary classification, containing features computed from digitized images of fine needle aspirates (FNAs) of a breast mass.  The goal is to classify whether a mass is benign (non-cancerous) or malignant (cancerous).

*   **Steps:**

    1.  **Data Loading and Preprocessing:**
        *   Load the dataset using libraries like `scikit-learn` (`sklearn.datasets.load_breast_cancer`).
        *   Split the data into training and testing sets.
        *   Scale the features using standardization (e.g., `sklearn.preprocessing.StandardScaler`) to ensure that all features have a similar range of values.  This is important for gradient descent to converge effectively, and for regularization to treat all features equally.

    2.  **MLE Implementation:**
        *   Define the sigmoid function.
        *   Define the log-likelihood function.
        *   Use an optimization algorithm (e.g., gradient descent using `scipy.optimize.minimize`) to find the values of `w` and `b` that maximize the log-likelihood function.  The optimization algorithm will require the *negative* log-likelihood function since `scipy.optimize.minimize` is a *minimization* routine.
        *   Predict the class labels for the test set using the learned parameters.

    3.  **MAP Implementation:**
        *   Define the log-prior function (e.g., based on a Gaussian prior for L2 regularization or a Laplace prior for L1 regularization).
        *   Define the posterior probability function (log-likelihood + log-prior).
        *   Use an optimization algorithm (e.g., gradient descent using `scipy.optimize.minimize`) to find the values of `w` and `b` that maximize the posterior probability. Again, use the *negative* of the function to be maximized for `scipy.optimize.minimize`.
        *   Predict the class labels for the test set using the learned parameters.

    4.  **Regularization Implementation:**
        *   Implement L1 and L2 regularization in the MAP estimation process by adding the corresponding prior term to the posterior probability function.
        *   Experiment with different values of the regularization parameter (λ) using cross-validation to find the optimal value.

    5.  **Evaluation:**
        *   Evaluate the performance of the models using appropriate metrics such as:
            *   **Accuracy:**  (TP + TN) / (TP + TN + FP + FN)
            *   **Precision:** TP / (TP + FP)
            *   **Recall:** TP / (TP + FN)
            *   **F1-score:** 2 * (Precision * Recall) / (Precision + Recall)
            *   **AUC-ROC:**  Area Under the Receiver Operating Characteristic curve.  Measures the ability of the model to distinguish between the two classes.
        *   Compare the performance of the MLE and MAP models with and without regularization.

*   **Code Example (Conceptual - using scikit-learn for brevity):**

    ```python
    import numpy as np
    from sklearn.datasets import load_breast_cancer
    from sklearn.model_selection import train_test_split, cross_val_score
    from sklearn.preprocessing import StandardScaler
    from sklearn.linear_model import LogisticRegression
    from sklearn.metrics import accuracy_score, classification_report

    # Load the dataset
    cancer = load_breast_cancer()
    X, y = cancer.data, cancer.target

    # Split into training and testing sets
    X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.3, random_state=42)

    # Scale the features
    scaler = StandardScaler()
    X_train = scaler.fit_transform(X_train)
    X_test = scaler.transform(X_test)

    # Logistic Regression with L2 regularization (using scikit-learn's built-in)
    # This implicitly performs MAP estimation with a Gaussian prior
    model_l2 = LogisticRegression(penalty='l2', C=1.0, solver='liblinear') # C is the inverse of lambda
    model_l2.fit(X_train, y_train)
    y_pred_l2 = model_l2.predict(X_test)
    accuracy_l2 = accuracy_score(y_test, y_pred_l2)
    print(f"Accuracy with L2 regularization: {accuracy_l2}")
    print(classification_report(y_test, y_pred_l2))


    # Logistic Regression with L1 regularization
    model_l1 = LogisticRegression(penalty='l1', C=0.1, solver='liblinear')  # C is the inverse of lambda
    model_l1.fit(X_train, y_train)
    y_pred_l1 = model_l1.predict(X_test)
    accuracy_l1 = accuracy_score(y_test, y_pred_l1)
    print(f"Accuracy with L1 regularization: {accuracy_l1}")
    print(classification_report(y_test, y_pred_l1))

    # Cross-validation to find the optimal C (inverse of lambda) for L2
    l2_model = LogisticRegression(penalty='l2', solver='liblinear')
    scores = cross_val_score(l2_model, X_train, y_train, cv=5, scoring='accuracy')
    print(f"Cross-validation scores (L2): {scores}")
    print(f"Mean cross-validation score (L2): {scores.mean()}")
    ```

    **Note:** This example uses `scikit-learn`'s `LogisticRegression` which already implements L1 and L2 regularization.  For a more explicit implementation of MLE and MAP with gradient descent, you would need to write your own code to define the sigmoid function, log-likelihood function, log-prior function, and the gradient descent algorithm.  The core of the lab is to understand the underlying concepts.

### 6. Comparing MLE and MAP

*   **MLE:**
    *   Provides point estimates of the parameters that maximize the likelihood of the data.
    *   Simple to implement.
    *   Prone to overfitting, especially with limited data.
    *   Does not incorporate prior knowledge about the parameters.

*   **MAP:**
    *   Provides point estimates of the parameters that maximize the posterior probability, combining likelihood and prior information.
    *   Less prone to overfitting than MLE, especially when informative priors are used.
    *   Incorporates prior knowledge about the parameters.
    *   Requires selecting an appropriate prior distribution.
    *   Can be more computationally expensive than MLE.

*   **Comparison on the Breast Cancer Wisconsin Dataset:**  Expect MAP (with appropriate regularization) to potentially perform slightly better than MLE, especially with smaller training sets. This is because the regularization imposed by MAP helps to prevent overfitting.  However, with larger training sets, the difference might be negligible.

### 7. Effects of Regularization: Discussion

*   **Overfitting:** Regularization is crucial for preventing overfitting. Without regularization, the model might learn the training data too well, including the noise, leading to poor performance on unseen data.

*   **Model Complexity:**  Regularization reduces the complexity of the model by shrinking the weights.  This leads to simpler models that are less likely to overfit.

*   **Feature Selection (L1):**  L1 regularization can be used to identify the most important features. By setting the weights of irrelevant features to zero, it effectively performs feature selection. This can lead to more interpretable models.

*   **Choosing the Regularization Parameter (λ):**  The optimal value of λ depends on the dataset and the model.  It is typically determined using cross-validation. A larger λ value results in stronger regularization. If λ is too large, the model will be overly simplified and might underfit. If λ is too small, the model will be prone to overfitting.

*   **Interpretability:**  L1 regularization can improve the interpretability of the model by identifying the most important features.  However, the resulting model might be slightly less accurate than a model with L2 regularization.

### 8. Important Points to Remember

*   Logistic regression is a linear classifier that uses the sigmoid function to predict probabilities.
*   MLE estimates the parameters that maximize the likelihood of the data.
*   MAP estimates the parameters that maximize the posterior probability, combining likelihood and prior.
*   Regularization (L1 and L2) is used to prevent overfitting.
*   L1 regularization performs feature selection by setting some weights to zero.
*   L2 regularization shrinks the weights towards zero.
*   The regularization parameter (λ) controls the strength of the regularization.
*   Cross-validation is used to find the optimal value of λ.
*   Feature scaling is important for gradient descent and regularization.
*   Evaluate model performance using appropriate metrics such as accuracy, precision, recall, F1-score, and AUC-ROC.

### Practice Questions/Exercises:

1.  **Derive the gradient of the log-likelihood function for logistic regression.** (Answer: The derivation involves applying the chain rule and differentiating the log-likelihood function with respect to the weights `w` and bias `b`.  The result will involve the difference between the predicted probability and the actual label.)
2.  **Explain the difference between MLE and MAP estimation in the context of logistic regression. Give a real-world example to illustrate this difference.** (Answer: MLE finds the parameters that maximize the likelihood of the data. MAP finds the parameters that maximize the posterior probability, which incorporates both the likelihood and a prior belief about the parameters. Example: See coin flipping example in section 3 above.)
3.  **What are the advantages and disadvantages of using L1 and L2 regularization in logistic regression? When would you prefer one over the other?** (Answer: L1 performs feature selection, leads to sparse models and is good if you suspect many features are irrelevant. L2 shrinks weights towards zero, is less prone to overfitting, and generally performs better than L1 when all features are potentially relevant.)
4.  **Implement logistic regression with L2 regularization on the Breast Cancer Wisconsin dataset using `scikit-learn`. Experiment with different values of the regularization parameter (C) and evaluate the performance of the model using cross-validation.** (Answer: See code example in section 5 above. Remember that C is the *inverse* of the regularization parameter lambda.)
5.  **Suppose you have a logistic regression model trained on a dataset with 100 features. After applying L1 regularization, 20 of the features have weights equal to zero. What does this imply?** (Answer: This implies that the L1 regularization has effectively selected the remaining 80 features as the most important ones, and that the model is likely to perform similarly well (or even better) with only these 80 features compared to using all 100 features without regularization.)
