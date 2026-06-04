---
title: "Implement logistic regression with MLE."
subject: "MACHINE LEARNING LAB"
module: "Module 4: Estimate the parameters of a logistic regression model using MLE and MAP on the Breast Cancer Wisconsin dataset. Compare the results and discuss the effects of regularization."
branch: "Computer Science and Engineering"
semester: 5
topicId: "684162770fc9aa1fdbc8b945"
status: "completed"
scrapedAt: "2026-05-20T16:47:09.357Z"
---
# MACHINE LEARNING LAB - Module 4: Logistic Regression with MLE

**Topic:** Implement logistic regression with Maximum Likelihood Estimation (MLE) on the Breast Cancer Wisconsin dataset.

**Description:** This section focuses on implementing logistic regression and estimating its parameters using the Maximum Likelihood Estimation (MLE) method. We will apply this to the Breast Cancer Wisconsin dataset, laying the groundwork for comparing it with Maximum A Posteriori (MAP) estimation later and analyzing the effects of regularization.

**Learning Outcomes:**

*   Understand the concept of Logistic Regression and its application to binary classification.
*   Grasp the principles of Maximum Likelihood Estimation (MLE).
*   Implement logistic regression using MLE.
*   Apply MLE to the Breast Cancer Wisconsin dataset for parameter estimation.
*   Evaluate the performance of the logistic regression model.

## 1. Introduction to Logistic Regression

*   **Definition:** Logistic Regression is a statistical model that uses a logistic function to model the probability of a binary outcome (0 or 1, yes or no, malignant or benign).  Despite the name, it is a *classification* algorithm, not a regression algorithm.
*   **Use Case:**  Commonly used for predicting the probability of an event occurring, such as disease diagnosis, spam detection, and credit risk assessment.
*   **Key Equation:**
    *   Probability of an event (Y=1) given features X:  `P(Y=1 | X) = sigmoid(Z)`
    *   Where `Z = β₀ + β₁X₁ + β₂X₂ + ... + βₚXₚ` (linear combination of features and coefficients)
    *   `sigmoid(Z) = 1 / (1 + exp(-Z))`  The sigmoid function transforms the linear combination into a probability between 0 and 1.
*   **Interpretation:** The output of the logistic regression model is the probability of the target variable being 1, given the input features. We typically set a threshold (e.g., 0.5) to classify the instance as 1 or 0 based on this probability.  If the probability is greater than the threshold, we predict Y=1, otherwise Y=0.

**Example:**

Imagine predicting whether a patient has breast cancer (Y=1) or not (Y=0) based on features like tumor size (X₁), cell nucleus uniformity (X₂), etc. Logistic regression would estimate the probability of having cancer given these features.

## 2. Maximum Likelihood Estimation (MLE)

*   **Definition:** MLE is a method for estimating the parameters of a statistical model. It finds the parameter values that maximize the *likelihood function*. The likelihood function represents the probability of observing the given data, assuming a particular set of parameter values.  In simpler terms, MLE tries to find the parameter values that make the observed data most probable.

*   **Principle:** Given a set of data and a statistical model, MLE aims to find the values of the model's parameters that maximize the likelihood of observing the data.

*   **Likelihood Function:** The likelihood function, denoted as L(θ; X), expresses the probability of observing the data X given the parameters θ.  For logistic regression, we need to define the likelihood function based on the sigmoid function.

*   **Log-Likelihood:**  Often, we maximize the *log-likelihood* instead of the likelihood directly. This is because:
    *   The logarithm is a monotonic function, so maximizing the log-likelihood is equivalent to maximizing the likelihood.
    *   The log-likelihood is often easier to work with mathematically, especially when dealing with products of probabilities.  Taking the log converts products into sums.
    *   It helps prevent underflow issues when dealing with very small probabilities.

*   **MLE Steps for Logistic Regression:**
    1.  **Define the Likelihood Function:**  Based on the sigmoid function and the training data. For a binary outcome, the likelihood is a product of Bernoulli probabilities:

        `L(β; X) = ∏ [P(Yᵢ=1 | Xᵢ)]^Yᵢ * [1 - P(Yᵢ=1 | Xᵢ)]^(1 - Yᵢ)`

        where:
            * β represents the vector of coefficients (β₀, β₁, β₂, ..., βₚ)
            * X is the dataset (features)
            * Y is the target variable (0 or 1)
            * i iterates through each sample in the dataset.

    2.  **Take the Log-Likelihood:**  Apply the logarithm to simplify the calculations.

        `log L(β; X) = ∑ [Yᵢ * log(P(Yᵢ=1 | Xᵢ)) + (1 - Yᵢ) * log(1 - P(Yᵢ=1 | Xᵢ))]`

    3.  **Maximize the Log-Likelihood:**  Find the parameter values (β) that maximize the log-likelihood function.  This is typically done using numerical optimization techniques such as:
        *   **Gradient Descent:**  An iterative optimization algorithm that adjusts the parameters in the opposite direction of the gradient of the log-likelihood function.  We repeatedly update the parameters using the following formula: `β = β - α * ∇J(β)`  where:
            *   `α` is the learning rate (step size)
            *   `∇J(β)` is the gradient of the negative log-likelihood (or cost function `J(β)`) with respect to β.  (We usually minimize the negative log-likelihood).
        *   **Newton-Raphson Method:**  A more advanced optimization algorithm that uses the second derivative (Hessian matrix) to find the optimal parameters. It often converges faster than Gradient Descent but is computationally more expensive.

*   **Important Points:**
    *   MLE estimates are often unbiased and consistent, especially with large datasets.
    *   MLE can be prone to overfitting, especially when the number of features is high relative to the number of samples.

## 3. Implementing Logistic Regression with MLE

Here's a Python example demonstrating how to implement Logistic Regression with MLE using Gradient Descent.  We'll use the `numpy` library for numerical computations and `sklearn` for data loading and splitting.

```python
import numpy as np
from sklearn.model_selection import train_test_split
from sklearn.datasets import load_breast_cancer
from sklearn.preprocessing import StandardScaler

# Load the Breast Cancer Wisconsin dataset
data = load_breast_cancer()
X = data.data
y = data.target

# Split the data into training and testing sets
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)

# Feature scaling (important for Gradient Descent)
scaler = StandardScaler()
X_train = scaler.fit_transform(X_train)
X_test = scaler.transform(X_test)


# Add a bias (intercept) term to the feature matrix
X_train = np.concatenate((np.ones((X_train.shape[0], 1)), X_train), axis=1)
X_test = np.concatenate((np.ones((X_test.shape[0], 1)), X_test), axis=1)


def sigmoid(z):
  """Sigmoid function."""
  return 1 / (1 + np.exp(-z))


def cost_function(X, y, beta):
  """
  Cost (negative log-likelihood) function for logistic regression.
  """
  m = len(y)
  h = sigmoid(X @ beta)  # X @ beta is matrix multiplication
  cost = (-1/m) * np.sum(y * np.log(h) + (1 - y) * np.log(1 - h))
  return cost


def gradient_descent(X, y, beta, learning_rate, num_iterations):
  """
  Gradient descent optimization for logistic regression.
  """
  m = len(y)
  cost_history = []

  for i in range(num_iterations):
    h = sigmoid(X @ beta)
    gradient = (1/m) * X.T @ (h - y)
    beta = beta - learning_rate * gradient
    cost = cost_function(X, y, beta)
    cost_history.append(cost)

    if i % 100 == 0:
      print(f"Iteration {i}, Cost: {cost}")

  return beta, cost_history



def predict(X, beta, threshold=0.5):
  """Predict labels using the learned parameters."""
  probabilities = sigmoid(X @ beta)
  return (probabilities >= threshold).astype(int)  # Convert boolean to 0/1


# Initialize parameters
num_features = X_train.shape[1]
beta = np.zeros(num_features)  # Initialize coefficients to 0

# Set hyperparameters
learning_rate = 0.01
num_iterations = 1000

# Run gradient descent
trained_beta, cost_history = gradient_descent(X_train, y_train, beta, learning_rate, num_iterations)

print("Trained Beta (Coefficients):", trained_beta)


# Make predictions on the test set
y_pred = predict(X_test, trained_beta)

# Evaluate the model
from sklearn.metrics import accuracy_score, classification_report

accuracy = accuracy_score(y_test, y_pred)
print(f"Accuracy: {accuracy}")

print("Classification Report:")
print(classification_report(y_test, y_pred))
```

**Explanation of the Code:**

1.  **Data Loading and Preprocessing:**
    *   Loads the Breast Cancer Wisconsin dataset using `sklearn.datasets.load_breast_cancer()`.
    *   Splits the data into training and testing sets using `train_test_split()`.  A good practice is to use an 80/20 split (80% for training, 20% for testing).
    *   Scales the features using `StandardScaler()`.  This is crucial for gradient descent to converge effectively. Features with different scales can cause oscillations and slow down convergence.
    *   Adds a bias (intercept) term (a column of ones) to the feature matrix `X_train` and `X_test`.  This allows the model to have a constant offset.

2.  **Sigmoid Function:**
    *   Implements the sigmoid function, which squashes the input values into a range between 0 and 1.

3.  **Cost Function (Negative Log-Likelihood):**
    *   Calculates the cost function (negative log-likelihood) for logistic regression.  Minimizing the negative log-likelihood is equivalent to maximizing the likelihood.  This function measures the error between the predicted probabilities and the actual labels.

4.  **Gradient Descent:**
    *   Implements the gradient descent algorithm to find the optimal parameters (β) that minimize the cost function.
    *   Iteratively updates the parameters based on the gradient of the cost function.
    *   The `learning_rate` controls the step size in each iteration. A smaller learning rate may lead to slower convergence but can prevent overshooting the optimal values. A larger learning rate may converge faster but can also lead to oscillations or divergence.
    *   It keeps track of the cost at each iteration in `cost_history` to monitor convergence.
    *   Prints the cost every 100 iterations to track the progress of the optimization.

5.  **Predict Function:**
    *   Predicts the labels for the test set based on the learned parameters and a threshold.  The default threshold is 0.5.

6.  **Evaluation:**
    *   Calculates the accuracy of the model on the test set using `accuracy_score()`.
    *   Prints a classification report using `classification_report()`, which includes precision, recall, F1-score, and support for each class.

**Key Considerations for Implementation:**

*   **Feature Scaling:**  Scaling your features is *essential* for logistic regression with gradient descent.  Use `StandardScaler` or `MinMaxScaler` from `sklearn.preprocessing`.
*   **Learning Rate:** The learning rate is a crucial hyperparameter. Experiment with different values to find a rate that allows the algorithm to converge quickly without oscillating or diverging.  Common values are 0.1, 0.01, 0.001, etc.
*   **Number of Iterations:**  Set a reasonable number of iterations for gradient descent to converge. You can monitor the cost function to see if it's still decreasing significantly.
*   **Initialization of Parameters:**  Initializing the parameters (beta) to zeros is a common practice. However, other initialization methods might be beneficial in some cases.
*   **Bias Term:** Don't forget to add the bias term (intercept) to the feature matrix.
*   **Regularization:** While this section focuses on MLE without regularization, be aware that regularization techniques (L1, L2) are often used to prevent overfitting and improve generalization performance.  We'll explore them in later modules.

## 4. Applying MLE to the Breast Cancer Wisconsin Dataset

The Python code above demonstrates the application of MLE to the Breast Cancer Wisconsin dataset.  The steps involved are:

1.  **Data Preparation:** Loading, splitting, and scaling the data.
2.  **Model Definition:** Defining the sigmoid function, cost function, and gradient descent algorithm.
3.  **Parameter Estimation:**  Using gradient descent to find the optimal parameters that maximize the likelihood of the data.
4.  **Prediction:**  Using the learned parameters to make predictions on the test set.
5.  **Evaluation:**  Evaluating the performance of the model using metrics such as accuracy and classification report.

## 5. Evaluating the Performance of the Logistic Regression Model

*   **Accuracy:**  The overall percentage of correctly classified instances.  `Accuracy = (True Positives + True Negatives) / Total Instances`
*   **Precision:**  The proportion of correctly predicted positive instances out of all instances predicted as positive. `Precision = True Positives / (True Positives + False Positives)`
*   **Recall (Sensitivity):**  The proportion of correctly predicted positive instances out of all actual positive instances. `Recall = True Positives / (True Positives + False Negatives)`
*   **F1-score:**  The harmonic mean of precision and recall. It provides a balanced measure of the model's performance. `F1-score = 2 * (Precision * Recall) / (Precision + Recall)`
*   **Classification Report:** A comprehensive report that includes precision, recall, F1-score, and support for each class.  It also includes overall accuracy.
*   **Confusion Matrix:**  A table that summarizes the classification results, showing the counts of true positives, true negatives, false positives, and false negatives.

**Interpreting the Results:**

*   A high accuracy indicates that the model is performing well overall.
*   High precision indicates that the model is making few false positive errors.
*   High recall indicates that the model is making few false negative errors.
*   The choice of which metric is most important depends on the specific application and the relative costs of false positives and false negatives.  For example, in medical diagnosis, recall is often more important than precision because it's more critical to correctly identify all patients with the disease (even if it means some healthy patients are incorrectly classified as having the disease).

## Practice Questions and Exercises

1.  **What is the sigmoid function and why is it used in logistic regression?**

    *   **Answer:** The sigmoid function is a mathematical function that maps any real-valued number to a value between 0 and 1.  It's used in logistic regression to model the probability of the target variable being 1, given the input features. It ensures that the output of the model is a probability.

2.  **Explain the principle of Maximum Likelihood Estimation (MLE).**

    *   **Answer:** MLE is a method for estimating the parameters of a statistical model. It finds the parameter values that maximize the likelihood of observing the given data, assuming a particular set of parameter values.  It aims to find the parameter values that make the observed data most probable.

3.  **Why do we use the log-likelihood instead of the likelihood directly in MLE?**

    *   **Answer:** We use the log-likelihood because the logarithm is a monotonic function, so maximizing the log-likelihood is equivalent to maximizing the likelihood.  Also, the log-likelihood is often easier to work with mathematically (converts products into sums) and helps prevent underflow issues.

4.  **What is gradient descent and how is it used in logistic regression?**

    *   **Answer:** Gradient descent is an iterative optimization algorithm that is used to find the parameters (coefficients) of the logistic regression model that minimize the cost function (negative log-likelihood). It repeatedly updates the parameters in the opposite direction of the gradient of the cost function.

5.  **Why is feature scaling important for logistic regression with gradient descent?**

    *   **Answer:** Feature scaling is important because features with different scales can cause gradient descent to converge slowly or even diverge. Scaling the features ensures that all features contribute equally to the optimization process.

6.  **Modify the Python code to experiment with different learning rates and numbers of iterations.  How do these parameters affect the performance of the model?**

    *   **Answer:** By changing the learning rate, you'll observe changes in the cost function's convergence speed and stability. Smaller learning rates may take longer to converge but are less prone to overshooting.  Larger learning rates can converge faster but may oscillate or diverge. The number of iterations affects how long the gradient descent algorithm runs. Insufficient iterations may prevent convergence, while excessive iterations may lead to overfitting (though less of a concern with MLE alone compared to more complex models). Record the accuracy and observe how changes affect performance.

7.  **What are some limitations of using MLE for logistic regression?**

    *   **Answer:** MLE can be prone to overfitting, especially when the number of features is high relative to the number of samples.  It also doesn't incorporate any prior knowledge or beliefs about the parameters.  It assumes that all values of the parameters are equally likely before observing the data.  This is where MAP (Maximum A Posteriori) estimation comes in, which incorporates prior knowledge.

## Important Points to Remember

*   Logistic Regression is a classification algorithm.
*   MLE estimates the parameters of a model by maximizing the likelihood of the observed data.
*   Gradient Descent is a common optimization algorithm used to find the optimal parameters in MLE for logistic regression.
*   Feature scaling is crucial for the efficient convergence of gradient descent.
*   Evaluate the model's performance using appropriate metrics such as accuracy, precision, recall, and F1-score.
*   Be aware of the limitations of MLE, such as the potential for overfitting.
