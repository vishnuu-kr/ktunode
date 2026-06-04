---
title: "Compare the performance and parameter estimates with MLE and MAP."
subject: "MACHINE LEARNING LAB"
module: "Module 4: Estimate the parameters of a logistic regression model using MLE and MAP on the Breast Cancer Wisconsin dataset. Compare the results and discuss the effects of regularization."
branch: "Computer Science and Engineering"
semester: 5
topicId: "684162770fc9aa1fdbc8b947"
status: "completed"
scrapedAt: "2026-05-20T16:47:10.816Z"
---
# MACHINE LEARNING LAB - Module 4: Logistic Regression with MLE and MAP

## Topic: Comparing Performance and Parameter Estimates with MLE and MAP

**Description:** This module focuses on estimating parameters for a logistic regression model using Maximum Likelihood Estimation (MLE) and Maximum A Posteriori (MAP) estimation on the Breast Cancer Wisconsin dataset. We will compare the resulting parameter estimates and model performance, and discuss the impact of regularization introduced through the MAP approach.

**Learning Outcomes:**

*   Understand the principles of Maximum Likelihood Estimation (MLE) and Maximum A Posteriori (MAP) estimation.
*   Implement logistic regression using MLE and MAP.
*   Apply MLE and MAP to the Breast Cancer Wisconsin dataset.
*   Compare the parameter estimates obtained from MLE and MAP.
*   Evaluate the performance of logistic regression models trained with MLE and MAP.
*   Understand and analyze the effects of regularization in MAP estimation.
*   Discuss the trade-offs between model complexity and generalization performance.

---

## 1. Key Concepts and Definitions

*   **Logistic Regression:** A linear model for binary classification problems. It uses the sigmoid function to map a linear combination of features to a probability between 0 and 1.

    *   Equation:  `P(Y=1 | X) = sigmoid(w^T * X + b)`  where:
        *   `Y` is the binary outcome (0 or 1)
        *   `X` is the vector of features
        *   `w` is the vector of weights (parameters)
        *   `b` is the bias (intercept)
        *   `sigmoid(z) = 1 / (1 + exp(-z))`

*   **Breast Cancer Wisconsin Dataset:** A dataset containing features of cell nuclei from breast mass biopsies, used to predict whether a tumor is benign or malignant.

*   **Maximum Likelihood Estimation (MLE):** A method for estimating the parameters of a statistical model by maximizing the likelihood function. The likelihood function represents the probability of observing the given data, given the model parameters.

    *   Goal: Find the parameter values that make the observed data most probable.
    *   Formally: `argmax_w P(Data | w)`
    *   For logistic regression, the likelihood function is the product of the probabilities of each observation, given the model parameters:  `L(w) = ∏ P(yi | xi, w)`
    *   We usually maximize the log-likelihood instead, which is mathematically equivalent and often easier to work with.

*   **Maximum A Posteriori (MAP) Estimation:**  A method for estimating the parameters of a statistical model by maximizing the posterior probability distribution.  The posterior distribution represents the probability of the model parameters, given the observed data and a prior belief about the parameters.

    *   Goal: Find the parameter values that are most probable *given the data and our prior beliefs*.
    *   Formally: `argmax_w P(w | Data) ∝ P(Data | w) * P(w)`  (by Bayes' theorem)
        *   `P(Data | w)` is the likelihood (same as in MLE)
        *   `P(w)` is the prior distribution over the parameters
    *   MAP introduces regularization by penalizing certain parameter values based on the prior.

*   **Regularization:**  A technique used to prevent overfitting by adding a penalty term to the loss function. This penalty discourages the model from assigning large weights to individual features.

    *   **L1 Regularization (Lasso):** Adds a penalty proportional to the absolute value of the weights:  `λ * ||w||_1`
    *   **L2 Regularization (Ridge):** Adds a penalty proportional to the square of the weights:  `λ * ||w||_2^2`
    *   In MAP, the choice of prior distribution `P(w)` implicitly determines the type of regularization.  A Gaussian prior corresponds to L2 regularization.  A Laplacian prior corresponds to L1 regularization.
    *   `λ` (lambda) is the regularization parameter.  A higher `λ` means stronger regularization.

*   **Overfitting:**  A phenomenon where a model learns the training data too well, including noise and irrelevant patterns. Overfit models typically perform poorly on unseen data.

*   **Generalization:**  The ability of a model to perform well on unseen data.

*   **Performance Metrics:**  Measures used to evaluate the performance of a classification model.  Common metrics include:

    *   **Accuracy:** The proportion of correctly classified instances.
    *   **Precision:** The proportion of true positives among all predicted positives.
    *   **Recall:** The proportion of true positives that were correctly predicted.
    *   **F1-score:** The harmonic mean of precision and recall.
    *   **AUC (Area Under the ROC Curve):** A measure of the model's ability to discriminate between classes.

---

## 2. Implementing Logistic Regression with MLE and MAP

This section outlines the steps involved in implementing logistic regression using MLE and MAP.

**2.1 MLE Implementation:**

1.  **Define the Likelihood Function (or Log-Likelihood):**

    ```python
    import numpy as np

    def sigmoid(z):
      return 1 / (1 + np.exp(-z))

    def log_likelihood(X, y, w, b):
      """
      Calculates the log-likelihood for logistic regression.
      """
      z = np.dot(X, w) + b
      probabilities = sigmoid(z)
      log_likelihood = np.sum(y * np.log(probabilities) + (1 - y) * np.log(1 - probabilities))
      return log_likelihood
    ```

2.  **Optimize the Log-Likelihood:** Use gradient descent or another optimization algorithm to find the values of `w` and `b` that maximize the log-likelihood.

    ```python
    def gradient_descent(X, y, w, b, learning_rate, num_iterations):
      """
      Performs gradient descent to maximize the log-likelihood.
      """
      n = len(y)
      for i in range(num_iterations):
        z = np.dot(X, w) + b
        probabilities = sigmoid(z)
        gradient_w = np.dot(X.T, (probabilities - y)) / n
        gradient_b = np.sum(probabilities - y) / n
        w = w - learning_rate * gradient_w
        b = b - learning_rate * gradient_b
      return w, b
    ```

**2.2 MAP Implementation:**

1.  **Define the Posterior Distribution:**  This requires specifying a prior distribution `P(w)`.  A common choice is a Gaussian prior, which leads to L2 regularization.

    ```python
    def gaussian_prior(w, sigma_squared):
        """
        Calculates the log probability of the parameters under a Gaussian prior.
        """
        return -0.5 * np.sum(w**2) / sigma_squared
    ```

2.  **Define the Log-Posterior:**  The log-posterior is the log-likelihood plus the log-prior.

    ```python
    def log_posterior(X, y, w, b, sigma_squared):
        """
        Calculates the log-posterior for logistic regression with a Gaussian prior.
        """
        log_likelihood_val = log_likelihood(X, y, w, b)
        log_prior_val = gaussian_prior(w, sigma_squared)
        return log_likelihood_val + log_prior_val
    ```

3.  **Optimize the Log-Posterior:** Use gradient descent or another optimization algorithm to find the values of `w` and `b` that maximize the log-posterior.  The gradient descent update rule will now include a term related to the prior.

    ```python
    def gradient_descent_map(X, y, w, b, learning_rate, num_iterations, sigma_squared):
      """
      Performs gradient descent to maximize the log-posterior with a Gaussian prior.
      """
      n = len(y)
      for i in range(num_iterations):
        z = np.dot(X, w) + b
        probabilities = sigmoid(z)
        gradient_w = np.dot(X.T, (probabilities - y)) / n - w / sigma_squared # Added prior gradient
        gradient_b = np.sum(probabilities - y) / n
        w = w - learning_rate * gradient_w
        b = b - learning_rate * gradient_b
      return w, b
    ```

**2.3 Data Preparation (Breast Cancer Wisconsin Dataset):**

1.  **Load the Dataset:** Use libraries like scikit-learn to load the Breast Cancer Wisconsin dataset.
2.  **Preprocess the Data:** Standardize or normalize the features to improve model performance.
3.  **Split the Data:** Divide the dataset into training and testing sets.

**2.4 Training and Evaluation:**

1.  **Train Models:** Train logistic regression models using MLE and MAP on the training set.
2.  **Evaluate Performance:** Evaluate the trained models on the testing set using appropriate performance metrics (accuracy, precision, recall, F1-score, AUC).

---

## 3. Applying MLE and MAP to the Breast Cancer Wisconsin Dataset

This section provides a conceptual outline and code snippets for applying the techniques to the specific dataset.  You will need to install relevant libraries.

```python
import numpy as np
from sklearn.datasets import load_breast_cancer
from sklearn.model_selection import train_test_split
from sklearn.preprocessing import StandardScaler
from sklearn.metrics import accuracy_score, roc_auc_score

# 1. Load the Dataset
cancer = load_breast_cancer()
X, y = cancer.data, cancer.target

# 2. Preprocess the Data
scaler = StandardScaler()
X = scaler.fit_transform(X)

# 3. Split the Data
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)

# 4. Initialize Parameters
w_mle = np.zeros(X_train.shape[1])
b_mle = 0
w_map = np.zeros(X_train.shape[1])
b_map = 0

# 5. Set Hyperparameters
learning_rate = 0.01
num_iterations = 1000
sigma_squared = 1.0 # Variance for the Gaussian prior in MAP

# 6. Train Models
w_mle, b_mle = gradient_descent(X_train, y_train, w_mle, b_mle, learning_rate, num_iterations)
w_map, b_map = gradient_descent_map(X_train, y_train, w_map, b_map, learning_rate, num_iterations, sigma_squared)

# 7. Make Predictions
def predict(X, w, b):
  z = np.dot(X, w) + b
  probabilities = sigmoid(z)
  return (probabilities >= 0.5).astype(int)

y_pred_mle = predict(X_test, w_mle, b_mle)
y_pred_map = predict(X_test, w_map, b_map)

# 8. Evaluate Performance
accuracy_mle = accuracy_score(y_test, y_pred_mle)
auc_mle = roc_auc_score(y_test, sigmoid(np.dot(X_test, w_mle) + b_mle))

accuracy_map = accuracy_score(y_test, y_pred_map)
auc_map = roc_auc_score(y_test, sigmoid(np.dot(X_test, w_map) + b_map))

print("MLE Accuracy:", accuracy_mle)
print("MLE AUC:", auc_mle)
print("MAP Accuracy:", accuracy_map)
print("MAP AUC:", auc_map)
```

**Explanation:**

*   The code loads the Breast Cancer Wisconsin dataset.
*   It preprocesses the data by scaling features.
*   It splits the data into training and testing sets.
*   It initializes the weights and bias to zero.
*   It sets hyperparameters like learning rate, number of iterations, and the variance of the Gaussian prior for MAP.  Experiment with these!
*   It trains the logistic regression models using MLE and MAP via gradient descent (using functions defined previously).
*   It makes predictions on the testing set.
*   It evaluates the performance of the models using accuracy and AUC.

---

## 4. Comparing Parameter Estimates and Performance

*   **Parameter Estimates:** Compare the values of `w` (weights) and `b` (bias) obtained from MLE and MAP.  You'll likely see that the MAP estimates have smaller magnitudes (closer to zero) due to the regularization effect of the prior.  The stronger the regularization (smaller `sigma_squared` -> larger implied regularization parameter λ), the more the weights will be shrunk towards zero.
*   **Performance:** Compare the performance metrics (accuracy, precision, recall, F1-score, AUC) of the models on the testing set.
    *   In general, MAP is expected to perform better than MLE, especially when the dataset is small or the number of features is large, because it helps prevent overfitting. However, this is not always guaranteed. If the prior is poorly chosen, it can actually hurt performance.
    *   If the dataset is very large and the model is not overfitting, MLE and MAP may produce very similar results.

**Expected Observations:**

*   **Weights:** MAP weights will likely be smaller in magnitude than MLE weights.
*   **Performance:** MAP may achieve slightly better or comparable generalization performance (on the test set) compared to MLE, particularly if the dataset is prone to overfitting.

---

## 5. Effects of Regularization

*   **Impact on Weights:** Regularization shrinks the magnitude of the weights, which makes the model simpler and less prone to overfitting.  Larger values of `λ` (stronger regularization) lead to smaller weights.
*   **Bias-Variance Trade-off:** Regularization introduces a bias towards simpler models (weights closer to zero). This can reduce the variance of the model (sensitivity to small changes in the training data), but it may also increase the bias (systematic error).  The optimal level of regularization strikes a balance between bias and variance.
*   **Choosing the Regularization Parameter (λ or `sigma_squared`):** The choice of regularization parameter is crucial. It is often tuned using techniques like cross-validation.  You should experiment with different values of `sigma_squared` in the MAP implementation to see how it affects the weights and performance. Lower values of `sigma_squared` correspond to stronger regularization.
*   **Visualizing Regularization:**  You can plot the magnitudes of the weights for different values of `λ` to visualize the effect of regularization.

**Experimenting with Regularization:**

*   Vary the `sigma_squared` parameter in the MAP implementation.
*   Observe how the magnitudes of the weights change.
*   Evaluate the performance of the model on the testing set for different values of `sigma_squared`.
*   Plot the test set accuracy/AUC as a function of `sigma_squared`. This helps you find the optimal value.

---

## 6. Important Points to Remember

*   MLE aims to find the parameters that best explain the observed data without any prior assumptions.
*   MAP incorporates prior beliefs about the parameters into the estimation process, effectively introducing regularization.
*   Regularization helps prevent overfitting, especially when the dataset is small or the number of features is large.
*   The choice of prior distribution in MAP determines the type of regularization (e.g., Gaussian prior for L2 regularization).
*   The regularization parameter controls the strength of the regularization.
*   Model complexity and generalization performance involve a trade-off.  Regularization helps find a good balance.
*   Cross-validation is a crucial technique for choosing the optimal regularization parameter.

---

## 7. Practice Questions/Exercises

1.  **Explain the difference between MLE and MAP estimation in your own words.**
    *   *Answer:* MLE finds parameters that maximize the probability of the observed data, while MAP finds parameters that maximize the probability of the parameters given the data, incorporating prior beliefs about the parameters. MAP can be seen as MLE with regularization.

2.  **What is regularization, and why is it important in machine learning?**
    *   *Answer:* Regularization is a technique used to prevent overfitting by adding a penalty term to the loss function. It helps to simplify the model and improve its ability to generalize to unseen data.

3.  **How does the choice of prior distribution in MAP estimation affect the type of regularization?**
    *   *Answer:* A Gaussian prior corresponds to L2 regularization (Ridge Regression), while a Laplacian prior corresponds to L1 regularization (Lasso Regression).

4.  **What are the advantages and disadvantages of using MAP estimation compared to MLE estimation?**
    *   *Answer:*
        *   Advantages: Can prevent overfitting, incorporates prior knowledge, often leads to better generalization performance.
        *   Disadvantages: Requires specifying a prior distribution (which can be subjective), can introduce bias if the prior is not well-chosen, computationally more expensive than MLE (sometimes).

5.  **How would you choose the optimal value for the regularization parameter in MAP estimation?**
    *   *Answer:* Use techniques like cross-validation.  Evaluate the performance of the model on a validation set for different values of the regularization parameter and choose the value that gives the best performance.

6.  **Modify the code provided to use an L1 prior instead of an L2 prior for MAP estimation.  You will need to implement the Laplacian prior and its gradient.**
    *   *Answer: (Conceptual, implementation details are beyond the scope of a text-based answer but would involve changing the `gaussian_prior` and the gradient update in `gradient_descent_map`.)
        *   Replace the `gaussian_prior` function with a `laplacian_prior` function.  The log of the Laplacian prior is proportional to `-λ * ||w||_1`.
        *   Modify the `gradient_descent_map` function to include the gradient of the Laplacian prior, which involves taking the sign of each weight. Be careful to handle the case where w_i = 0 to avoid division by zero. Use subgradients. The update would look something like:
          ```python
          gradient_w = np.dot(X.T, (probabilities - y)) / n - lambda_reg * np.sign(w)
          ```
          Where `lambda_reg` is the regularization strength (related to the parameter of the Laplacian distribution).

7. **Explain the bias-variance tradeoff and how regularization helps in managing it.**
    * Answer: The bias-variance tradeoff refers to the balance between a model's tendency to underfit (high bias) and overfit (high variance). High bias models make strong assumptions about the data and may miss important patterns. High variance models are very sensitive to the training data and may not generalize well to new data. Regularization helps manage this tradeoff by reducing the model's complexity, which can decrease variance while potentially increasing bias. The goal is to find a sweet spot where the model is neither too simple nor too complex, leading to good generalization performance.

By working through these exercises, you'll solidify your understanding of MLE, MAP, and regularization. Remember to experiment with different parameter values and datasets to gain practical experience.
