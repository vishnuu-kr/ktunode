---
title: "back propagation"
subject: "DATA MINING"
module: "Module 3: Classification "
branch: "Computer Science and Engineering"
semester: 5
topicId: "684162770fc9aa1fdbc8b8ac"
status: "completed"
scrapedAt: "2026-05-20T16:45:08.776Z"
---
# Data Mining - Module 3: Classification - Back Propagation

## Introduction

This module delves into the back propagation algorithm, a fundamental technique used in training artificial neural networks for classification and other tasks. Back propagation is a supervised learning algorithm that refines the weights and biases of a neural network by iteratively adjusting them based on the error between the network's predicted output and the desired output.

## Learning Outcomes

Upon completion of this study guide, you should be able to:

*   Understand the basic architecture of a multi-layer perceptron (MLP) neural network.
*   Explain the forward pass and backward pass in back propagation.
*   Understand the concept of gradient descent and its role in back propagation.
*   Calculate the error at the output layer and hidden layers.
*   Update the weights and biases of the network using back propagation.
*   Identify and discuss the advantages and disadvantages of back propagation.
*   Apply back propagation to solve classification problems.

## 1. Key Concepts and Definitions

*   **Artificial Neural Network (ANN):** A computational model inspired by the structure and function of biological neural networks.
*   **Multi-Layer Perceptron (MLP):** A type of feedforward artificial neural network consisting of multiple layers of nodes (neurons). Typically, an MLP contains an input layer, one or more hidden layers, and an output layer.
*   **Neuron (Node):** The basic processing unit in a neural network. It receives inputs, applies a weight and bias, and passes the result through an activation function to produce an output.
*   **Weight:** A numerical value assigned to each connection between neurons, representing the strength of the connection.
*   **Bias:** A constant value added to the weighted sum of inputs to a neuron, allowing the neuron to activate even when all inputs are zero.
*   **Activation Function:** A function applied to the weighted sum of inputs (plus bias) to produce the output of a neuron. Common activation functions include sigmoid, ReLU (Rectified Linear Unit), and tanh (hyperbolic tangent).
*   **Forward Propagation:** The process of feeding input data through the neural network, layer by layer, to calculate the network's output.
*   **Backward Propagation (Back Propagation):** The process of calculating the error between the predicted output and the actual output and then propagating this error back through the network to adjust the weights and biases.
*   **Error Function (Loss Function):** A function that quantifies the difference between the predicted output and the actual output. Common error functions include mean squared error (MSE) and cross-entropy.
*   **Gradient Descent:** An optimization algorithm used to find the minimum of a function by iteratively moving in the direction of the steepest descent. In back propagation, gradient descent is used to update the weights and biases to minimize the error function.
*   **Learning Rate:** A parameter that controls the step size during gradient descent. A smaller learning rate leads to slower but potentially more accurate learning, while a larger learning rate can lead to faster learning but may overshoot the minimum.
*   **Epoch:** One complete pass of the entire training dataset through the neural network.
*   **Batch Size:** The number of training examples used in one iteration of gradient descent.
*   **Overfitting:** A situation where the neural network learns the training data too well and performs poorly on unseen data.
*   **Underfitting:** A situation where the neural network is not complex enough to learn the underlying patterns in the training data.

## 2. Multi-Layer Perceptron (MLP) Architecture

An MLP consists of:

*   **Input Layer:** Receives the input features. The number of neurons in the input layer corresponds to the number of input features.
*   **Hidden Layer(s):** Performs non-linear transformations on the input data. An MLP can have one or more hidden layers. The number of neurons in each hidden layer is a hyperparameter that needs to be tuned.
*   **Output Layer:** Produces the final output of the network. The number of neurons in the output layer depends on the type of task (e.g., for binary classification, there is typically one output neuron; for multi-class classification, there is typically one output neuron per class).

**Example:**

Consider an MLP for classifying images of handwritten digits (0-9).

*   **Input Layer:** 784 neurons (28x28 pixels)
*   **Hidden Layer 1:** 128 neurons
*   **Hidden Layer 2:** 64 neurons
*   **Output Layer:** 10 neurons (one for each digit)

## 3. Forward Propagation

1.  **Input:** The input data is fed into the input layer.

2.  **Weighted Sum:** Each neuron in the subsequent layer calculates a weighted sum of the outputs from the previous layer, adding the bias:

    `z = Σ (weight * input) + bias`

3.  **Activation Function:** The weighted sum `z` is then passed through an activation function `f` to produce the output of the neuron:

    `output = f(z)`

4.  **Repeat:** Steps 2 and 3 are repeated for each layer until the output layer is reached.

**Example:**

Let's say a neuron in the hidden layer has three inputs: 0.5, 0.8, and 0.2.  The corresponding weights are 0.4, -0.3, and 0.6, and the bias is 0.1.  Let's use the sigmoid activation function: `f(x) = 1 / (1 + exp(-x))`.

1.  **Weighted Sum:**  z = (0.5 * 0.4) + (0.8 * -0.3) + (0.2 * 0.6) + 0.1 = 0.2 - 0.24 + 0.12 + 0.1 = 0.18

2.  **Activation:** output = sigmoid(0.18) = 1 / (1 + exp(-0.18)) ≈ 0.5449

## 4. Backward Propagation

Backward propagation is the core of the training process. It calculates the error and updates the weights and biases to reduce the error.

1.  **Calculate Error at Output Layer:** The error at the output layer is calculated based on the chosen error function (e.g., Mean Squared Error).

    *   **MSE:** `Error = 0.5 * (predicted_output - actual_output)^2`

    *   The derivative of the error with respect to the output is needed:  `dError/dOutput = (predicted_output - actual_output)`

2.  **Calculate Error at Hidden Layers:** The error is propagated back through the network, layer by layer. The error at each hidden layer neuron is calculated based on the error at the next layer and the weights connecting the two layers.

    *   The derivative of the error with respect to the activation of a hidden neuron i in layer l: `dError/da_i^(l) =  Σ (dError/da_j^(l+1) * w_ij^(l+1) * f'(z_j^(l+1))` , where the sum is over all neurons j in layer l+1, w_ij^(l+1) is the weight from neuron i in layer l to neuron j in layer l+1, and f'(z_j^(l+1)) is the derivative of the activation function evaluated at the weighted sum z_j^(l+1) of neuron j.

3.  **Update Weights and Biases:** The weights and biases are updated using gradient descent. The amount of adjustment is proportional to the learning rate and the gradient of the error function with respect to the weight or bias.

    *   **Weight Update:** `new_weight = old_weight - learning_rate * (dError / dweight)`

    *   **Bias Update:** `new_bias = old_bias - learning_rate * (dError / dbias)`

**Detailed Explanation of Error Calculation and Weight/Bias Updates:**

Let's denote:

*   `l`: layer index (e.g., input layer = 0, first hidden layer = 1, ...)
*   `n`: neuron index within a layer
*   `w_n^(l)`: weight connecting neuron n in layer l to a neuron in layer l+1
*   `b_n^(l)`: bias of neuron n in layer l+1
*   `a_n^(l)`: activation (output) of neuron n in layer l
*   `z_n^(l)`: weighted sum of inputs plus bias for neuron n in layer l
*   `f(x)`: activation function
*   `f'(x)`: derivative of the activation function
*   `Error`: the error function

**Output Layer (Layer L):**

*   `delta_n^(L) = (dError/da_n^(L)) * f'(z_n^(L))` (This is the error signal for the neuron)
*   `dError/dw_n^(L-1) = a_n^(L-1) * delta_n^(L)` (Gradient of the error with respect to the weight)
*   `dError/db_n^(L-1) = delta_n^(L)` (Gradient of the error with respect to the bias)

**Hidden Layers (Layer l, where 0 < l < L):**

*   `delta_n^(l) = f'(z_n^(l)) * Σ (delta_j^(l+1) * w_j^(l)) `  (Sum over all neurons 'j' in the next layer l+1)
*   `dError/dw_n^(l-1) = a_n^(l-1) * delta_n^(l)`
*   `dError/db_n^(l-1) = delta_n^(l)`

**Updating Weights and Biases (for any layer l):**

*   `w_n^(l) = w_n^(l) - learning_rate * dError/dw_n^(l)`
*   `b_n^(l) = b_n^(l) - learning_rate * dError/db_n^(l)`

**Example (Simplified):**

Assume a simple neural network with one hidden layer.

*   Input: x = 0.5
*   Weight (input to hidden): w1 = 0.2
*   Bias (hidden): b1 = 0.1
*   Weight (hidden to output): w2 = 0.3
*   Bias (output): b2 = -0.1
*   Desired Output: y = 0.8
*   Learning Rate: η = 0.1
*   Activation Function: Sigmoid

1. **Forward Propagation:**
   * `z1 = (x * w1) + b1 = (0.5 * 0.2) + 0.1 = 0.2`
   * `a1 = sigmoid(z1) = 1 / (1 + exp(-0.2)) ≈ 0.5498`
   * `z2 = (a1 * w2) + b2 = (0.5498 * 0.3) - 0.1 = 0.06494`
   * `predicted_output = sigmoid(z2) = 1 / (1 + exp(-0.06494)) ≈ 0.5162`

2. **Backward Propagation:**

   * **Output Layer:**
     * `Error = 0.5 * (0.5162 - 0.8)^2 ≈ 0.0406`
     * `delta2 = (predicted_output - y) * sigmoid'(z2) ≈ (0.5162 - 0.8) * (0.5162 * (1 - 0.5162)) ≈ -0.0679`
     * `dError/dw2 = a1 * delta2 ≈ 0.5498 * -0.0679 ≈ -0.0373`
     * `dError/db2 = delta2 ≈ -0.0679`

   * **Hidden Layer:**
     * `delta1 = delta2 * w2 * sigmoid'(z1) ≈ -0.0679 * 0.3 * (0.5498 * (1 - 0.5498)) ≈ -0.00505`
     * `dError/dw1 = x * delta1 ≈ 0.5 * -0.00505 ≈ -0.00253`
     * `dError/db1 = delta1 ≈ -0.00505`

3. **Update Weights and Biases:**
   * `w1 = w1 - η * (dError/dw1) = 0.2 - 0.1 * (-0.00253) ≈ 0.20025`
   * `b1 = b1 - η * (dError/db1) = 0.1 - 0.1 * (-0.00505) ≈ 0.100505`
   * `w2 = w2 - η * (dError/dw2) = 0.3 - 0.1 * (-0.0373) ≈ 0.30373`
   * `b2 = b2 - η * (dError/db2) = -0.1 - 0.1 * (-0.0679) ≈ -0.09321`

After this single iteration, the weights and biases are slightly adjusted to reduce the error. This process is repeated many times with different training examples to train the network.

## 5. Advantages and Disadvantages of Back Propagation

**Advantages:**

*   **Simple Implementation:** Relatively easy to implement, especially with modern deep learning frameworks.
*   **General Purpose:** Can be applied to a wide range of classification and regression problems.
*   **Effective for Complex Problems:** Can learn complex, non-linear relationships in data.

**Disadvantages:**

*   **Slow Convergence:** Can be slow to converge, especially for large networks and datasets.
*   **Local Minima:** Susceptible to getting stuck in local minima, preventing the network from finding the global optimum.  Solutions include using momentum, different optimization algorithms (e.g., Adam, RMSprop), or careful initialization of weights.
*   **Vanishing/Exploding Gradients:** The gradients can become very small (vanishing) or very large (exploding) as they are propagated back through the network, making it difficult to train deep networks. ReLU activation function and batch normalization can help mitigate these issues.
*   **Requires Labeled Data:** A supervised learning algorithm, requiring labeled training data.
*   **Sensitive to Hyperparameter Tuning:** Performance is highly dependent on the choice of hyperparameters (e.g., learning rate, number of hidden layers, number of neurons per layer).

## 6. Applying Back Propagation to Classification Problems

1.  **Data Preparation:** Preprocess the data, including scaling and normalization.  Handle missing values and outliers appropriately.
2.  **Network Architecture:** Design the architecture of the neural network, including the number of layers and neurons per layer.  Choose an appropriate activation function (e.g., sigmoid for binary classification, softmax for multi-class classification).
3.  **Initialization:** Initialize the weights and biases randomly. Proper initialization can help avoid getting stuck in local minima. Techniques include Xavier/Glorot initialization and He initialization.
4.  **Training:** Train the network using back propagation. Iterate through the training data for multiple epochs. Monitor the error on a validation set to prevent overfitting.  Use techniques like dropout or regularization to further prevent overfitting.
5.  **Testing:** Evaluate the performance of the trained network on a test set to assess its generalization ability.
6.  **Deployment:** Deploy the trained network to make predictions on new, unseen data.

## 7. Important Points to Remember

*   Back propagation is a supervised learning algorithm.
*   The learning rate is a crucial hyperparameter.
*   Careful initialization of weights and biases is important.
*   Overfitting is a common problem that needs to be addressed.
*   Gradient descent is the optimization algorithm used to update weights and biases.
*   Understanding the derivatives of the activation and error functions is essential.
*   Back propagation is computationally intensive, especially for large networks.

## 8. Practice Questions/Exercises

**Question 1:**

Explain the difference between forward propagation and backward propagation in a neural network.

**Answer:**

Forward propagation is the process of feeding input data through the network to generate an output. It involves calculating weighted sums of inputs, adding biases, and applying activation functions layer by layer. Backward propagation, on the other hand, is the process of calculating the error between the predicted output and the desired output and then propagating this error back through the network to adjust the weights and biases in order to minimize the error.  Forward propagation *produces* a prediction, while back propagation *corrects* the network based on its error.

**Question 2:**

What is the role of the learning rate in back propagation?  What are the potential consequences of setting the learning rate too high or too low?

**Answer:**

The learning rate controls the step size during gradient descent. It determines how much the weights and biases are adjusted in each iteration.

*   **Too High:** If the learning rate is too high, the algorithm may overshoot the minimum and oscillate around it, leading to instability or failure to converge.
*   **Too Low:** If the learning rate is too low, the algorithm may converge very slowly, requiring a large number of iterations to reach the minimum.  It might also get stuck in a local minimum.

**Question 3:**

Explain the concept of gradient descent and how it is used in back propagation.

**Answer:**

Gradient descent is an optimization algorithm used to find the minimum of a function. In back propagation, the goal is to minimize the error function by adjusting the weights and biases of the neural network. Gradient descent works by iteratively moving in the direction of the steepest descent of the error function.  The gradient of the error function with respect to the weights and biases indicates the direction of the steepest increase in error. Therefore, we subtract a fraction (determined by the learning rate) of the gradient from the weights and biases to move towards a lower error.

**Question 4:**

Why is it important to use non-linear activation functions in neural networks? What would happen if we only used linear activation functions?

**Answer:**

Non-linear activation functions are crucial because they allow the neural network to learn complex, non-linear relationships in the data. If we only used linear activation functions, the entire neural network would essentially be a linear function, regardless of the number of layers. This is because a composition of linear functions is itself a linear function.  A linear model can only learn linear patterns, making it unable to solve many real-world problems that are inherently non-linear.

**Question 5:**

Describe two techniques to prevent overfitting when training a neural network using back propagation.

**Answer:**

Two techniques to prevent overfitting are:

1.  **Regularization:** Adding a penalty term to the error function that discourages large weights. Common types of regularization include L1 (Lasso) and L2 (Ridge) regularization.

2.  **Dropout:** Randomly dropping out (setting to zero) some neurons during training. This forces the network to learn more robust features that are not dependent on any particular neuron.  This prevents neurons from co-adapting too much to the training data.
3.  **Early Stopping:** Monitoring the performance of the network on a validation set during training. Stop training when the performance on the validation set starts to degrade (increase in error), even if the training error is still decreasing. This prevents the network from overfitting to the training data.

**Question 6:**

A neuron in a hidden layer has a weighted sum `z = 1.5`. The activation function is sigmoid. What is the output of the neuron? What is the derivative of the sigmoid function at z=1.5?

**Answer:**

1.  **Output of the neuron:**  output = sigmoid(1.5) = 1 / (1 + exp(-1.5)) ≈ 0.8176
2.  **Derivative of the Sigmoid Function:** The derivative of the sigmoid function f(z) = 1 / (1 + exp(-z)) is f'(z) = f(z) * (1 - f(z)).  Therefore, f'(1.5) = 0.8176 * (1 - 0.8176) ≈ 0.1492
