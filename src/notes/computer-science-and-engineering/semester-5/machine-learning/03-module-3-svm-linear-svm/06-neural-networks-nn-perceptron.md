---
title: "Neural Networks (NN)  - Perceptron"
subject: "MACHINE LEARNING"
module: "Module 3: SVM – Linear SVM"
branch: "Computer Science and Engineering"
semester: 5
topicId: "684162760fc9aa1fdbc8b5c9"
status: "completed"
scrapedAt: "2026-05-20T16:46:44.176Z"
---
# MACHINE LEARNING - Module 3: SVM – Linear SVM - Neural Networks (NN) - Perceptron

## Learning Outcomes:

*   Understand the basic concept of a Perceptron.
*   Describe the components of a Perceptron (input, weights, bias, activation function, output).
*   Explain the Perceptron learning rule and its goal.
*   Implement a Perceptron to solve a simple classification problem.
*   Understand the limitations of a Perceptron.

## 1. Introduction to Perceptrons

*   **Definition:** The Perceptron is one of the oldest and simplest artificial neural network algorithms.  It's a linear classifier, meaning it attempts to separate data points into different classes using a linear decision boundary.
*   **Historical Context:** Conceived by Frank Rosenblatt in 1957, the Perceptron laid the foundation for more complex neural networks.
*   **Purpose:** To learn a linear decision boundary that can classify input data into one of two categories (binary classification).  It's a supervised learning algorithm.

## 2. Components of a Perceptron

*   **Input (x):**
    *   Represents the features of the data. These are numerical values.
    *   Represented as a vector: `x = [x1, x2, ..., xn]` where *n* is the number of features.
    *   **Example:** If classifying emails as spam or not spam, features could include word counts of specific words ("Viagra", "free"), presence of capital letters, etc.

*   **Weights (w):**
    *   Represent the importance of each input feature.
    *   Each input feature has a corresponding weight.
    *   Represented as a vector: `w = [w1, w2, ..., wn]` where *n* is the number of features.
    *   Higher weights indicate a greater influence of that feature on the final decision.
    *   Weights are learned during the training process.

*   **Bias (b):**
    *   A constant value added to the weighted sum of inputs.
    *   Allows the Perceptron to shift the decision boundary.
    *   Important for learning patterns when the data doesn't pass through the origin.
    *   Treat it as a weight associated with a constant input of 1.
    *   Ensures the model doesn't always predict one class when all inputs are zero.

*   **Weighted Sum:**
    *   The core calculation of the Perceptron.
    *   Calculated as: `z = w1*x1 + w2*x2 + ... + wn*xn + b`  or in vector notation: `z = w · x + b`

*   **Activation Function (f(z)):**
    *   Applies a non-linear transformation to the weighted sum (z).
    *   Determines the output of the Perceptron based on the weighted sum.
    *   The most common activation function for Perceptrons is the **step function (also called the Heaviside function)**:

        ```
        f(z) = 1  if z >= 0
        f(z) = 0  if z < 0
        ```

        *   Other activation functions could be used (e.g., sigmoid), but step functions are typical for basic Perceptrons.

*   **Output (y):**
    *   The final prediction of the Perceptron.
    *   Typically binary: 0 or 1, -1 or 1, representing the two classes.
    *   Determined by the activation function.

    **Summary Diagram:**

    ```
    Input (x) -->  Multiply by Weights (w) --> Sum (∑) --> Add Bias (b) --> Activation Function (f(z)) --> Output (y)
    ```

## 3. Perceptron Learning Rule

*   **Goal:** To find the optimal weights and bias that correctly classify the training data.

*   **Process:**
    1.  **Initialization:** Initialize weights (w) and bias (b) to random values or zero.
    2.  **Iteration:** For each training example (x, target_y):
        *   **Prediction:** Calculate the Perceptron's output (y_hat) for the input x:
            *   `z = w · x + b`
            *   `y_hat = f(z)`  (using the activation function)
        *   **Weight Update:**  If the prediction (y_hat) is incorrect (i.e., `y_hat != target_y`), update the weights and bias:

            *   `w = w + learning_rate * (target_y - y_hat) * x`
            *   `b = b + learning_rate * (target_y - y_hat)`

            Where:
                *   `learning_rate`: A hyperparameter that controls the step size of the weight updates (typically a small value between 0 and 1, e.g., 0.1). A larger learning rate can lead to faster convergence but might overshoot the optimal solution. A smaller learning rate leads to slower convergence but might find a more accurate solution.
                *   `target_y`: The true label (0 or 1) of the training example.
                *   `y_hat`: The Perceptron's predicted label.

    3.  **Repeat:** Repeat step 2 for a fixed number of epochs or until a stopping criterion is met (e.g., a certain level of accuracy on the training data).

*   **Explanation of the Weight Update:**
    *   The term `(target_y - y_hat)` represents the error.
    *   If `target_y` is 1 and `y_hat` is 0 (false negative), the weights are increased proportionally to the input values.  This encourages the Perceptron to predict 1 for similar inputs in the future.
    *   If `target_y` is 0 and `y_hat` is 1 (false positive), the weights are decreased proportionally to the input values.  This encourages the Perceptron to predict 0 for similar inputs in the future.
    *   The multiplication by `x` means that the features that contributed most to the incorrect prediction will have their corresponding weights adjusted more significantly.

## 4. Implementation Example (Python)

```python
import numpy as np

class Perceptron:
    def __init__(self, learning_rate=0.1, n_iters=100):
        self.lr = learning_rate
        self.n_iters = n_iters
        self.weights = None
        self.bias = 0  # Initialize bias to zero

    def fit(self, X, y):
        n_samples, n_features = X.shape

        # Initialize weights
        self.weights = np.zeros(n_features)
        self.bias = 0

        # Adjust y labels to -1 and 1 for convenience
        y_ = np.array([1 if i > 0 else -1 for i in y])

        # Perceptron learning algorithm
        for _ in range(self.n_iters):
            for idx, x_i in enumerate(X):
                linear_output = np.dot(x_i, self.weights) + self.bias
                y_predicted = 1 if linear_output >= 0 else -1

                update = self.lr * (y_[idx] - y_predicted)

                self.weights += update * x_i
                self.bias += update

    def predict(self, X):
        linear_output = np.dot(X, self.weights) + self.bias
        y_predicted = np.array([1 if i >= 0 else -1 for i in linear_output])
        return y_predicted

# Example Usage:
if __name__ == "__main__":
    from sklearn.model_selection import train_test_split
    from sklearn import datasets
    import matplotlib.pyplot as plt

    def accuracy(y_true, y_pred):
        accuracy = np.sum(y_true == y_pred) / len(y_true)
        return accuracy

    bc = datasets.load_breast_cancer()
    X, y = bc.data, bc.target

    X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=123)

    p = Perceptron(learning_rate=0.01, n_iters=1000)
    p.fit(X_train, y_train)
    predictions = p.predict(X_test)

    print("Perceptron classification accuracy", accuracy(y_test, predictions))

    # Visualization (only works well for 2-dimensional data)
    # (Omitted for this example to keep it concise. Requires selecting two features from X)
```

**Explanation of the Code:**

*   **`Perceptron` Class:**
    *   `__init__`: Initializes the learning rate, number of iterations, weights (initialized to zeros), and bias (initialized to zero).
    *   `fit(X, y)`: Implements the Perceptron learning rule.  It iterates through the training data and updates the weights and bias based on prediction errors. It transforms y labels to -1 and 1 for easier calculations.
    *   `predict(X)`: Takes input data and returns predictions based on the learned weights and bias.

*   **Example Usage:**
    *   Loads the breast cancer dataset from `sklearn.datasets`.
    *   Splits the data into training and testing sets.
    *   Creates a `Perceptron` object and trains it on the training data using `fit`.
    *   Makes predictions on the test data using `predict`.
    *   Calculates and prints the accuracy of the Perceptron.
    *   **Note:** Visualization is omitted as it only works effectively with 2-dimensional data. To visualize with the breast cancer dataset, you would need to select only two features from `X`.

## 5. Limitations of the Perceptron

*   **Linear Separability:**  Perceptrons can only learn linearly separable data. This means that the data points from different classes must be separable by a straight line (in 2D), a plane (in 3D), or a hyperplane (in higher dimensions).
*   **Non-Linear Data:** If the data is not linearly separable, the Perceptron will not converge to a solution.  This is a major limitation.
*   **XOR Problem:**  A classic example of a non-linearly separable problem is the XOR (exclusive OR) problem. A single Perceptron cannot solve the XOR problem.
*   **Sensitivity to Feature Scaling:** Perceptron performance can be affected by the scaling of the input features.  It's often beneficial to scale the features before training.
*   **No Probabilistic Output:**  The Perceptron provides a hard classification decision (0 or 1), not a probability.
*   **Overfitting:**  While less prone than more complex models, Perceptrons can still overfit if the training data is small or noisy, especially with a high learning rate.

## 6. Important Points to Remember

*   The Perceptron is a simple linear classifier.
*   It learns weights and a bias to separate data into two classes.
*   The learning rule adjusts the weights based on prediction errors.
*   The Perceptron is limited to linearly separable data.
*   It's a foundational algorithm in the history of neural networks.

## 7. Practice Questions and Exercises

**Question 1:** What is the purpose of the activation function in a Perceptron?

**Answer:** The activation function introduces non-linearity into the Perceptron, allowing it to make decisions based on the weighted sum of inputs. It determines the final output of the Perceptron. In the case of the classical Perceptron, it is a step function that outputs 0 or 1 based on whether the weighted sum is below or above zero.

**Question 2:** Explain the Perceptron learning rule in your own words.

**Answer:** The Perceptron learning rule is an iterative process that adjusts the weights and bias of the Perceptron to minimize prediction errors. For each training example, the Perceptron makes a prediction. If the prediction is incorrect, the weights and bias are updated proportionally to the error and the input values, encouraging the Perceptron to make a correct prediction for that example in the future.  The learning rate controls the size of these updates.

**Question 3:**  Why can a single Perceptron not solve the XOR problem?

**Answer:** The XOR problem is not linearly separable. There is no straight line (or hyperplane in higher dimensions) that can perfectly separate the data points into the two XOR classes. Since the Perceptron is a linear classifier, it cannot learn a decision boundary that can solve the XOR problem.

**Question 4:**  What happens if the learning rate is set too high?  What happens if it's set too low?

**Answer:**
*   **Too High:** A learning rate that is too high can cause the learning process to become unstable. The weights might oscillate wildly, and the Perceptron might never converge to a good solution.  It might overshoot the optimal weights.
*   **Too Low:** A learning rate that is too low will result in very slow learning. The Perceptron will take a very long time to converge, and it might get stuck in a local minimum.

**Question 5:** Implement a Perceptron to classify the following data points (using pen and paper or code):

*   Data Points: `X = [[0, 0], [0, 1], [1, 0], [1, 1]]`
*   Labels: `y = [0, 0, 0, 1]` (This represents an AND gate)
*   Initial weights: `w = [0, 0]`
*   Initial bias: `b = 0`
*   Learning rate: `0.1`
*   Activation function: Step function (0 if z < 0, 1 if z >= 0)
*   Run for 1 epoch (one pass through the data).

**Solution (Illustrative - first few steps, requires multiple iterations to converge):**

*   **Iteration 1: x = [0, 0], target_y = 0**
    *   `z = (0 * 0) + (0 * 0) + 0 = 0`
    *   `y_hat = 1` (since z >= 0)
    *   `Error = target_y - y_hat = 0 - 1 = -1`
    *   `w = w + (0.1 * -1 * [0, 0]) = [0, 0]`
    *   `b = b + (0.1 * -1) = -0.1`
*   **Iteration 2: x = [0, 1], target_y = 0**
    *   `z = (0 * 0) + (0 * 1) - 0.1 = -0.1`
    *   `y_hat = 0` (since z < 0)
    *   `Error = target_y - y_hat = 0 - 0 = 0`
    *   `w = w + (0.1 * 0 * [0, 1]) = [0, 0]`
    *   `b = b + (0.1 * 0) = -0.1`
*   **Iteration 3: x = [1, 0], target_y = 0**
    *   `z = (0 * 1) + (0 * 0) - 0.1 = -0.1`
    *   `y_hat = 0` (since z < 0)
    *   `Error = target_y - y_hat = 0 - 0 = 0`
    *   `w = w + (0.1 * 0 * [1, 0]) = [0, 0]`
    *   `b = b + (0.1 * 0) = -0.1`
*   **Iteration 4: x = [1, 1], target_y = 1**
    *   `z = (0 * 1) + (0 * 1) - 0.1 = -0.1`
    *   `y_hat = 0` (since z < 0)
    *   `Error = target_y - y_hat = 1 - 0 = 1`
    *   `w = w + (0.1 * 1 * [1, 1]) = [0.1, 0.1]`
    *   `b = b + (0.1 * 1) = 0`

(Continue iterating multiple epochs to find appropriate weights and bias)

This solution is illustrative, and you would need to continue iterating for multiple epochs for the Perceptron to converge to the correct solution for the AND gate.  The final weights and bias should be such that the Perceptron outputs 1 only when both inputs are 1.
