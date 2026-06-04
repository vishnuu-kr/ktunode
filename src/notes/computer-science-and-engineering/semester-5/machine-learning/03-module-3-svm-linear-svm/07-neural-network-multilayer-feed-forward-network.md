---
title: "Neural Network - Multilayer feed-forward network"
subject: "MACHINE LEARNING"
module: "Module 3: SVM – Linear SVM"
branch: "Computer Science and Engineering"
semester: 5
topicId: "684162760fc9aa1fdbc8b5ca"
status: "completed"
scrapedAt: "2026-05-20T16:46:44.895Z"
---
## MACHINE LEARNING: Module 3 - SVM – Linear SVM: Neural Network - Multilayer Feed-Forward Network

**Learning Outcomes:**

*   Understand the architecture of a multilayer feed-forward neural network.
*   Explain the role of activation functions in neural networks.
*   Describe the forward propagation process.
*   Explain the concept of backpropagation and gradient descent for training neural networks.
*   Identify and address common issues like overfitting in neural networks.
*   Implement a simple multilayer feed-forward neural network (conceptually or with pseudo-code).

### 1. Introduction to Multilayer Feed-Forward Networks

*   **Definition:** A multilayer feed-forward network (MLFFN), also known as a multilayer perceptron (MLP), is a type of artificial neural network composed of multiple layers of interconnected nodes (neurons), where information flows in one direction – from input to output.  It contains at least one *hidden layer* between the input and output layers, allowing it to learn complex non-linear relationships in data.

*   **Key Concepts:**

    *   **Layers:**
        *   **Input Layer:** Receives the raw input data.  The number of neurons in this layer corresponds to the number of features in the input data.
        *   **Hidden Layer(s):**  Perform non-linear transformations on the input data.  MLFFNs can have multiple hidden layers. The number of hidden layers and neurons within each layer are hyperparameters that need to be tuned.  Each neuron receives weighted inputs from the previous layer, applies an activation function, and passes the result to the next layer.
        *   **Output Layer:** Produces the final output of the network. The number of neurons in this layer depends on the type of prediction being made (e.g., binary classification, multi-class classification, regression).

    *   **Neurons (Nodes):**  The basic processing unit of a neural network.  Each neuron performs the following steps:
        1.  **Weighted Sum:**  Calculates the weighted sum of its inputs:  `z = Σ(wi * xi) + b` where `wi` are the weights, `xi` are the inputs, and `b` is the bias.
        2.  **Activation Function:** Applies an activation function to the weighted sum to introduce non-linearity: `a = activation(z)`.  The output `a` is then passed to the next layer.

    *   **Weights (w):** Represent the strength of the connection between two neurons.  These are adjusted during training to learn the relationships in the data.

    *   **Bias (b):**  A constant value added to the weighted sum.  It allows the neuron to be activated even when all inputs are zero.

### 2. Activation Functions

*   **Definition:** An activation function is a mathematical function that determines the output of a neuron. It introduces non-linearity, which is crucial for neural networks to learn complex patterns.

*   **Common Activation Functions:**

    *   **Sigmoid:**
        *   Formula:  `σ(z) = 1 / (1 + e^(-z))`
        *   Output Range: (0, 1)
        *   Use Case:  Historically used in output layers for binary classification to output probabilities.
        *   Limitations: Suffers from the vanishing gradient problem, especially in deep networks. Saturated neurons can kill the gradient. Not zero-centered.

    *   **Tanh (Hyperbolic Tangent):**
        *   Formula:  `tanh(z) = (e^(z) - e^(-z)) / (e^(z) + e^(-z))`
        *   Output Range: (-1, 1)
        *   Use Case:  Often preferred over sigmoid in hidden layers.
        *   Advantages:  Zero-centered, which can lead to faster convergence.
        *   Limitations:  Also suffers from the vanishing gradient problem.

    *   **ReLU (Rectified Linear Unit):**
        *   Formula: `ReLU(z) = max(0, z)`
        *   Output Range: [0, ∞)
        *   Use Case:  Very popular in hidden layers due to its simplicity and efficiency.
        *   Advantages:  Reduces the vanishing gradient problem (for positive inputs).  Computationally efficient.
        *   Limitations:  The "dying ReLU" problem – neurons can become inactive if their weighted sum is always negative.

    *   **Leaky ReLU:**
        *   Formula: `LeakyReLU(z) = z if z > 0 else alpha * z` (where alpha is a small constant, e.g., 0.01)
        *   Output Range: (-∞, ∞)
        *   Use Case:  Addresses the "dying ReLU" problem.
        *   Advantages:  Prevents neurons from becoming completely inactive.

    *   **Softmax:**
        *   Formula: `Softmax(zi) = e^(zi) / Σ(e^(zj))` for all `j`
        *   Output Range: (0, 1) and sums to 1.
        *   Use Case:  Used in the output layer for multi-class classification problems.  Outputs a probability distribution over the classes.

*   **Important Note:**  The choice of activation function depends on the specific problem and network architecture.  ReLU and its variants are often preferred in hidden layers, while Sigmoid/Softmax are often used for the output layers depending on the task.

### 3. Forward Propagation

*   **Definition:** The process of passing input data through the network, layer by layer, to produce an output prediction.

*   **Steps:**

    1.  **Input Layer:**  The input data is fed into the input layer.

    2.  **Hidden Layers:**
        *   For each neuron in a hidden layer:
            *   Calculate the weighted sum of the outputs from the previous layer.
            *   Add the bias.
            *   Apply the activation function.
            *   The output of this neuron becomes the input for the next layer.

    3.  **Output Layer:**
        *   For each neuron in the output layer:
            *   Calculate the weighted sum of the outputs from the previous layer.
            *   Add the bias.
            *   Apply the activation function.
            *   The output of this neuron is the network's prediction.

*   **Example (Simplified):**

    *   Input: `x = [0.5, 0.8]`
    *   Hidden Layer (1 neuron):
        *   Weights: `w = [0.2, 0.9]`
        *   Bias: `b = 0.1`
        *   Weighted sum: `z = (0.5 * 0.2) + (0.8 * 0.9) + 0.1 = 0.92`
        *   Activation (ReLU): `a = max(0, 0.92) = 0.92`
    *   Output Layer (1 neuron):
        *   Weight: `w = 0.7`
        *   Bias: `b = 0.3`
        *   Weighted sum: `z = (0.92 * 0.7) + 0.3 = 0.944`
        *   Activation (Sigmoid): `a = 1 / (1 + e^(-0.944)) = 0.72`
    *   Output: `0.72`

### 4. Backpropagation and Gradient Descent

*   **Definition:** Backpropagation is an algorithm used to calculate the gradients of the loss function with respect to the weights and biases in the neural network. Gradient descent is an optimization algorithm used to update the weights and biases to minimize the loss function.

*   **Key Concepts:**

    *   **Loss Function:**  A function that measures the difference between the network's predictions and the actual target values. Common examples include:
        *   **Mean Squared Error (MSE):** Used for regression problems.
        *   **Cross-Entropy Loss:** Used for classification problems.

    *   **Gradient:**  The derivative of the loss function with respect to a specific weight or bias. It indicates the direction of the steepest increase in the loss.

    *   **Gradient Descent:**  An iterative optimization algorithm that updates the weights and biases in the opposite direction of the gradient, with the goal of finding the minimum of the loss function. The update rule is:

        *   `w = w - learning_rate * ∂Loss/∂w`
        *   `b = b - learning_rate * ∂Loss/∂b`

        where `learning_rate` is a hyperparameter that controls the step size.

*   **Backpropagation Algorithm (Simplified Steps):**

    1.  **Forward Pass:**  Perform forward propagation to obtain the network's predictions.
    2.  **Calculate Loss:**  Calculate the loss function based on the predictions and the actual target values.
    3.  **Backward Pass (Error Propagation):**
        *   Calculate the gradient of the loss function with respect to the output layer's activations.
        *   Propagate the gradient back through the network, layer by layer, calculating the gradients with respect to the weights, biases, and activations of each layer. This involves using the chain rule of calculus.
    4.  **Update Weights and Biases:**  Use gradient descent to update the weights and biases of each layer based on the calculated gradients.

*   **Important Notes:**

    *   Backpropagation relies on the chain rule to compute gradients through the network.
    *   The learning rate is a crucial hyperparameter. Too small a learning rate can lead to slow convergence, while too large a learning rate can cause the optimization process to diverge.
    *   Variants of gradient descent exist, such as stochastic gradient descent (SGD) and mini-batch gradient descent, which can improve training speed and reduce the risk of getting stuck in local minima.

### 5. Overfitting and Regularization

*   **Definition of Overfitting:** Overfitting occurs when a neural network learns the training data too well, including the noise and random fluctuations. This results in poor generalization performance on unseen data.

*   **Signs of Overfitting:**

    *   High accuracy on the training data but low accuracy on the validation/test data.
    *   The model has learned complex patterns that are specific to the training data and do not generalize to new data.

*   **Techniques to Address Overfitting (Regularization):**

    *   **L1 Regularization (Lasso):** Adds a penalty term to the loss function that is proportional to the absolute value of the weights:  `Loss + λ * Σ|w|`.  This encourages sparsity in the weights (i.e., many weights become zero).

    *   **L2 Regularization (Ridge):** Adds a penalty term to the loss function that is proportional to the square of the weights:  `Loss + λ * Σw^2`.  This encourages smaller weights.

    *   **Dropout:** Randomly "drops out" (sets to zero) a proportion of the neurons during training.  This prevents neurons from co-adapting and makes the network more robust.

    *   **Early Stopping:** Monitors the performance of the network on a validation set during training and stops training when the performance starts to degrade.

    *   **Data Augmentation:** Increases the size of the training data by creating new data points from existing data points through transformations such as rotations, flips, and translations.

    *   **Batch Normalization:** Normalizes the activations of each layer during training. This can improve training speed and reduce the risk of overfitting.

### 6. Implementing a Simple Multilayer Feed-Forward Network (Pseudo-code)

```python
# Assume input data X and target labels y are available

# 1. Initialize weights and biases randomly
#    - For each layer (including hidden layers), initialize weights W and biases b

# 2. Define forward propagation function
def forward_propagation(X, weights, biases, activation_functions):
  """
  Performs forward propagation through the network.

  Args:
    X: Input data (features).
    weights: A list of weight matrices for each layer.
    biases: A list of bias vectors for each layer.
    activation_functions: A list of activation functions for each layer (excluding input layer).

  Returns:
    activations: A list of activations for each layer, including the input layer.
  """
  activations = [X]  # Store activations of each layer, starting with the input
  for i in range(len(weights)):
    # Calculate weighted sum
    z = np.dot(activations[-1], weights[i]) + biases[i]

    # Apply activation function
    a = activation_functions[i](z)
    activations.append(a)

  return activations


# 3. Define backpropagation function
def backpropagation(activations, weights, biases, y, loss_function, learning_rate, activation_derivatives):
  """
  Performs backpropagation to calculate gradients and update weights and biases.

  Args:
    activations: A list of activations for each layer (output of forward_propagation).
    weights: A list of weight matrices for each layer.
    biases: A list of bias vectors for each layer.
    y: Target labels.
    loss_function: The loss function to minimize.
    learning_rate: The learning rate.
    activation_derivatives:  List of derivative functions of the activation functions.

  Returns:
    updated_weights: A list of updated weight matrices.
    updated_biases: A list of updated bias vectors.
  """
  # Calculate the gradient of the loss function with respect to the output layer's activations
  delta = loss_function.derivative(activations[-1], y)  # Assume loss_function has a derivative method

  updated_weights = weights[:]  # Create copies to avoid modifying original weights in-place
  updated_biases = biases[:]

  # Iterate backwards through the layers (excluding input layer)
  for i in reversed(range(len(weights))):
    # Gradient of the loss with respect to the weighted sum z
    delta = delta * activation_derivatives[i](activations[i+1]) # i+1 because activations includes input layer, weights does not

    # Gradient of the loss with respect to the weights
    dw = np.dot(activations[i].T, delta)

    # Gradient of the loss with respect to the biases
    db = np.sum(delta, axis=0, keepdims=True)

    # Update weights and biases
    updated_weights[i] = weights[i] - learning_rate * dw
    updated_biases[i] = biases[i] - learning_rate * db

    # Calculate the gradient of the loss with respect to the activations of the previous layer
    delta = np.dot(delta, weights[i].T)

  return updated_weights, updated_biases

# 4. Training Loop
num_epochs = 100
learning_rate = 0.01

# Define activation functions and their derivatives
#  Example activation functions (replace with your chosen functions and derivatives)
def sigmoid(x):
  return 1 / (1 + np.exp(-x))
def sigmoid_derivative(x):
  return sigmoid(x) * (1 - sigmoid(x))

def relu(x):
  return np.maximum(0, x)
def relu_derivative(x):
  return (x > 0).astype(int)

activation_functions = [relu, sigmoid]  # Example: ReLU for hidden layer, Sigmoid for output layer
activation_derivatives = [relu_derivative, sigmoid_derivative]


# Example Loss function
def mean_squared_error(y_predicted, y_true):
    return np.mean((y_predicted - y_true)**2)

def mse_derivative(y_predicted, y_true):
    return 2 * (y_predicted - y_true) / y_true.size  # Corrected for batch size


class LossFunction():
    def __init__(self, loss, derivative):
        self.loss = loss
        self.derivative = derivative

mse = LossFunction(mean_squared_error, mse_derivative)

for epoch in range(num_epochs):
  # Forward propagation
  activations = forward_propagation(X, weights, biases, activation_functions)

  # Backpropagation
  weights, biases = backpropagation(activations, weights, biases, y, mse, learning_rate, activation_derivatives)  #Replace 'mse' with appropriate loss function object

  # Calculate loss (for monitoring training progress)
  loss = mse.loss(activations[-1], y) # Call the defined loss

  print(f"Epoch: {epoch}, Loss: {loss}")

# 5. Use trained weights and biases to make predictions on new data
```

### 7. Practice Questions/Exercises

1.  **Question:** Explain the purpose of activation functions in neural networks. Why are they necessary?
    *   **Answer:** Activation functions introduce non-linearity into the network. Without non-linearity, the network would simply be a linear regression model, unable to learn complex patterns. They allow the network to approximate any continuous function.

2.  **Question:** What is the vanishing gradient problem, and which activation functions are particularly susceptible to it?
    *   **Answer:** The vanishing gradient problem occurs when the gradients become very small during backpropagation, making it difficult for the earlier layers to learn. Sigmoid and tanh are prone to this problem because their derivatives can saturate to near-zero values.

3.  **Question:**  Describe how dropout regularization works and how it helps prevent overfitting.
    *   **Answer:** Dropout randomly deactivates a proportion of neurons during each training iteration.  This forces the network to learn more robust features that are not dependent on specific neurons, preventing co-adaptation and reducing overfitting.

4.  **Question:**  How does L2 regularization work to prevent overfitting? Explain in detail.
    *   **Answer:** L2 regularization adds a penalty term to the loss function that's proportional to the sum of squared weights. This encourages the network to have smaller weights overall. Smaller weights lead to simpler models that are less likely to overfit the training data's noise and outliers, resulting in better generalization to unseen data. The penalty term discourages the network from relying too heavily on any single feature or weight, promoting a more balanced representation.

5.  **Question:**  Given an input layer with 3 features, a hidden layer with 4 neurons, and an output layer with 2 neurons, how many weights and biases are there in the network?
    *   **Answer:**
        *   Weights between input and hidden layer: 3 * 4 = 12
        *   Biases in the hidden layer: 4
        *   Weights between hidden and output layer: 4 * 2 = 8
        *   Biases in the output layer: 2
        *   Total weights: 12 + 8 = 20
        *   Total biases: 4 + 2 = 6

### 8. Important Points to Remember

*   MLFFNs are powerful models capable of learning complex non-linear relationships.
*   Activation functions are crucial for introducing non-linearity.
*   Backpropagation and gradient descent are used to train the network by adjusting weights and biases.
*   Overfitting is a common problem, and regularization techniques are essential to improve generalization performance.
*   Hyperparameter tuning (e.g., learning rate, number of layers, number of neurons) is critical for achieving good results.
*   Consider the computational cost and the potential for vanishing gradients when designing deep networks.
