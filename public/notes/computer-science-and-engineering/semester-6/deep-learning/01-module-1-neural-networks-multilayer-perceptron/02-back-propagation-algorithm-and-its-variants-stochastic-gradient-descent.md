---
title: "Back-propagation algorithm and its variants Stochastic gradient descent"
subject: "DEEP LEARNING"
module: "Module 1: Neural Networks Multilayer Perceptron"
branch: "Computer Science and Engineering"
semester: 6
topicId: "684162770fc9aa1fdbc8bb28"
status: "completed"
scrapedAt: "2026-05-20T16:52:13.325Z"
---
## DEEP LEARNING: Module 1 - Neural Networks Multilayer Perceptron

### Topic: Back-propagation Algorithm and its Variants: Stochastic Gradient Descent

**Learning Outcomes:**

*   Understand the back-propagation algorithm and its purpose.
*   Explain the steps involved in the back-propagation algorithm.
*   Describe the concept of gradient descent and its role in training neural networks.
*   Explain stochastic gradient descent (SGD) and its advantages and disadvantages compared to batch gradient descent.
*   Discuss different variants of SGD and their impact on training.
*   Apply back-propagation and SGD to train a simple neural network.

---

**1. Introduction to Back-propagation Algorithm**

*   **Definition:** Back-propagation (backward propagation of errors) is a supervised learning algorithm used to train artificial neural networks. It calculates the gradient of the loss function with respect to the network's weights and biases. This gradient is then used to update the weights and biases in order to minimize the loss.

*   **Purpose:** To efficiently calculate the gradients needed to adjust the weights and biases in a neural network during training, allowing the network to learn from data.

*   **Key Idea:**  The algorithm propagates the error signal backward through the network, layer by layer, to compute the contribution of each weight and bias to the overall error. This allows for efficient gradient calculation, which is then used in optimization algorithms like gradient descent.

**2. Steps Involved in the Back-propagation Algorithm**

The back-propagation algorithm generally involves the following steps:

*   **2.1 Forward Pass:**
    *   Input data is fed forward through the network.
    *   Each layer computes its output based on its inputs, weights, biases, and activation function.
    *   The output of the final layer is the network's prediction.

*   **2.2 Loss Function Calculation:**
    *   The loss function quantifies the difference between the network's prediction and the actual target value. Common loss functions include:
        *   **Mean Squared Error (MSE):**  Good for regression tasks.  `MSE = (1/n) * Σ(y_true - y_predicted)^2`
        *   **Cross-Entropy Loss:** Good for classification tasks. `CrossEntropy = -Σ(y_true * log(y_predicted))`

*   **2.3 Backward Pass (Error Propagation):**
    *   The gradient of the loss function with respect to the output of the last layer is calculated.
    *   This gradient is then propagated backward through the network, layer by layer.
    *   At each layer, the gradient of the loss function with respect to the layer's weights, biases, and inputs is calculated using the chain rule of calculus.
    *   The chain rule allows the gradient to be expressed as a product of gradients from subsequent layers.

    *   **Example using Chain Rule:** Let's say we have Loss (L), Output (O), and Weight (W). We want to calculate dL/dW.
        *   `dL/dW = (dL/dO) * (dO/dW)`
        *   `dL/dO` - how the loss changes with respect to the output.
        *   `dO/dW` - how the output changes with respect to the weight.

*   **2.4 Weight and Bias Updates:**
    *   The weights and biases of the network are updated based on the calculated gradients using an optimization algorithm like gradient descent.
    *   The update rule is typically:
        *   `Weight = Weight - LearningRate * Gradient_of_Weight`
        *   `Bias = Bias - LearningRate * Gradient_of_Bias`

        *   **Learning Rate:**  A hyperparameter that controls the size of the steps taken during optimization. A small learning rate can lead to slow convergence, while a large learning rate can cause the optimization to overshoot the minimum and diverge.

*   **2.5 Repeat:** The forward pass, loss calculation, backward pass, and weight/bias updates are repeated for each training example (or batch of examples) until the network converges to a satisfactory solution.

**3. Gradient Descent**

*   **Definition:** Gradient descent is an iterative optimization algorithm used to find the minimum of a function. In the context of neural networks, the function is the loss function, and the goal is to find the weights and biases that minimize the loss.

*   **Mechanism:** Gradient descent iteratively adjusts the parameters (weights and biases) of the network in the direction of the negative gradient of the loss function. The negative gradient indicates the direction of steepest descent, so moving in this direction will decrease the loss.

*   **Analogy:** Imagine you are standing on a hill and want to reach the bottom. Gradient descent is like taking steps in the direction that slopes downward most steeply at your current location.

*   **Types:**
    *   **Batch Gradient Descent:**  Calculates the gradient using the *entire* training dataset in each iteration.
        *   **Advantages:** Provides a more stable estimate of the gradient.
        *   **Disadvantages:** Can be computationally expensive for large datasets.

**4. Stochastic Gradient Descent (SGD)**

*   **Definition:**  SGD is a variant of gradient descent that updates the weights and biases after *each individual* training example.

*   **Mechanism:** Instead of using the entire dataset to calculate the gradient, SGD uses a single randomly selected data point.  This introduces noise into the gradient estimation but allows for much faster updates.

*   **Advantages:**
    *   **Faster convergence:** Because updates are made more frequently.
    *   **Less computationally expensive:**  Per iteration compared to batch gradient descent.
    *   **Escapes local minima:**  The noise introduced can help the algorithm jump out of local minima.

*   **Disadvantages:**
    *   **Noisy updates:** Can lead to oscillations during training.
    *   **Requires careful tuning of the learning rate:**  To avoid overshooting or slow convergence.

*   **Mini-Batch Gradient Descent:**  A compromise between batch gradient descent and SGD.  It updates the weights and biases after processing a small batch of training examples (e.g., 32, 64, 128).  This is often the preferred method in practice.

**5. Variants of Stochastic Gradient Descent**

Several variants of SGD have been developed to address its limitations and improve its performance.  These variants typically use momentum, adaptive learning rates, or both.

*   **5.1 Momentum:**
    *   **Idea:**  Adds a fraction of the previous update vector to the current update vector.  This helps the algorithm to accelerate in the direction of consistent gradient descent and dampen oscillations.
    *   **Mechanism:**  The update rule becomes:
        *   `velocity = momentum * previous_velocity - learning_rate * gradient`
        *   `Weight = Weight + velocity`
    *   **Advantage:**  Helps to navigate ravines (elongated areas of slow progress) and escape local minima more effectively.

*   **5.2 AdaGrad (Adaptive Gradient Algorithm):**
    *   **Idea:** Adapts the learning rate for each parameter based on the historical gradients. Parameters that receive frequent updates have their learning rates decreased, while parameters that receive infrequent updates have their learning rates increased.
    *   **Mechanism:** Accumulates the squared gradients for each parameter and uses this accumulation to scale the learning rate.
    *   **Advantage:**  Suitable for sparse data, where different parameters have different frequencies of updates.
    *   **Disadvantage:**  Can lead to a rapidly decreasing learning rate, eventually stalling the training.

*   **5.3 RMSProp (Root Mean Square Propagation):**
    *   **Idea:**  Similar to AdaGrad but addresses its rapidly decreasing learning rate problem by using a decaying average of squared gradients.
    *   **Mechanism:**  Uses an exponentially decaying average of past squared gradients.
    *   **Advantage:**  More robust than AdaGrad and often performs well in practice.

*   **5.4 Adam (Adaptive Moment Estimation):**
    *   **Idea:**  Combines the ideas of momentum and adaptive learning rates. It uses both a moving average of the gradients and a moving average of the squared gradients to adapt the learning rate for each parameter.
    *   **Mechanism:**  Keeps track of both a first-order moment (mean) and a second-order moment (variance) of the gradients.
    *   **Advantage:**  Generally considered to be a robust and effective optimization algorithm and is often the default choice in deep learning.

**6. Applying Back-propagation and SGD: A Simple Example**

Let's consider a simple neural network with one input layer, one hidden layer (with 2 neurons), and one output layer (with 1 neuron). We'll use SGD to train this network.

*   **Network Architecture:**
    *   Input Layer: 1 neuron (x)
    *   Hidden Layer: 2 neurons (h1, h2), sigmoid activation
    *   Output Layer: 1 neuron (o), sigmoid activation
*   **Data:**  A single training example: input = 0.5, target = 0.8
*   **Initialization:**  Initialize weights and biases randomly.  For example:
    *   w11 = 0.2, w12 = -0.3, b1 = 0.1  (Input to Hidden)
    *   w21 = 0.4, w22 = 0.5, b2 = -0.2 (Hidden to Output)
*   **Learning Rate:**  0.1
*   **Steps:**

    1.  **Forward Pass:**
        *   h1 = sigmoid(x\*w11 + b1) = sigmoid(0.5\*0.2 + 0.1) = sigmoid(0.2) = 0.5498
        *   h2 = sigmoid(x\*w12 + b1) = sigmoid(0.5\*-0.3 + 0.1) = sigmoid(-0.05) = 0.4875
        *   o = sigmoid(h1\*w21 + h2\*w22 + b2) = sigmoid(0.5498\*0.4 + 0.4875\*0.5 - 0.2) = sigmoid(0.2137) = 0.5532

    2.  **Loss Calculation (MSE):**
        *   Loss = (target - o)^2 = (0.8 - 0.5532)^2 = 0.061

    3.  **Backward Pass:**  (This is the most complex part, requiring calculus and chain rule application. We will provide only a sketch of the computations for brevity.)
        *   Calculate dLoss/do
        *   Calculate do/dw21, do/dw22, do/db2
        *   Calculate dLoss/dh1, dLoss/dh2
        *   Calculate dh1/dw11, dh1/dw12, dh1/db1
        *   Calculate dh2/dw11, dh2/dw12, dh2/db1
        *   Apply chain rule to find dLoss/dw11, dLoss/dw12, dLoss/db1, dLoss/dw21, dLoss/dw22, dLoss/db2.

    4.  **Weight and Bias Updates (SGD):**
        *   w11 = w11 - learning_rate \* dLoss/dw11
        *   w12 = w12 - learning_rate \* dLoss/dw12
        *   b1 = b1 - learning_rate \* dLoss/db1
        *   w21 = w21 - learning_rate \* dLoss/dw21
        *   w22 = w22 - learning_rate \* dLoss/dw22
        *   b2 = b2 - learning_rate \* dLoss/db2

    5.  **Repeat:**  Repeat steps 1-4 for many epochs (iterations) over the training data to reduce the loss.

**Note:** Manually calculating these gradients is tedious. Deep learning frameworks (TensorFlow, PyTorch) handle this automatically.

**7. Practice Questions/Exercises**

1.  **Explain the purpose of the back-propagation algorithm in neural networks.**

    *   **Answer:** Back-propagation is used to calculate the gradient of the loss function with respect to the weights and biases of the network. This gradient is used to update the weights and biases in order to minimize the loss and improve the network's performance.

2.  **What is the difference between batch gradient descent and stochastic gradient descent?**

    *   **Answer:** Batch gradient descent calculates the gradient using the entire training dataset, while stochastic gradient descent updates the weights after each individual training example. SGD is faster but can be noisier than batch gradient descent.

3.  **Explain the concept of momentum in the context of SGD.**

    *   **Answer:** Momentum adds a fraction of the previous update vector to the current update vector. This helps the algorithm to accelerate in the direction of consistent gradient descent and dampen oscillations, allowing it to navigate ravines and escape local minima more effectively.

4.  **What are the advantages and disadvantages of using a large learning rate in SGD?**

    *   **Answer:** A large learning rate can lead to faster convergence, but it can also cause the optimization to overshoot the minimum and diverge.

5.  **Explain why mini-batch gradient descent is often preferred over batch gradient descent and SGD.**

    *   **Answer:** Mini-batch gradient descent provides a good balance between the stability of batch gradient descent and the speed of SGD. It updates the weights after processing a small batch of examples, which reduces the noise in the gradient estimation and allows for faster convergence than batch gradient descent.

6. **Code Question:** Using a library like NumPy, write a function to perform a single forward pass in a simple neural network with one input, one hidden layer (2 neurons, sigmoid activation), and one output neuron (sigmoid activation).

```python
import numpy as np

def sigmoid(x):
    return 1 / (1 + np.exp(-x))

def forward_pass(x, w11, w12, b1, w21, w22, b2):
    """
    Performs a single forward pass.

    Args:
        x: Input value (float).
        w11, w12: Weights from input to hidden layer neurons 1 and 2.
        b1: Bias for hidden layer.
        w21, w22: Weights from hidden layer neurons 1 and 2 to output.
        b2: Bias for output layer.

    Returns:
        The output of the neural network.
    """
    h1 = sigmoid(x * w11 + b1)
    h2 = sigmoid(x * w12 + b1)
    o = sigmoid(h1 * w21 + h2 * w22 + b2)
    return o

# Example usage:
x = 0.5
w11 = 0.2
w12 = -0.3
b1 = 0.1
w21 = 0.4
w22 = 0.5
b2 = -0.2

output = forward_pass(x, w11, w12, b1, w21, w22, b2)
print(f"Output: {output}") # Expected output will be similar to our manual example, approx. 0.5532
```

**8. Important Points to Remember**

*   Back-propagation is the foundation of training deep neural networks.
*   Understanding the chain rule is crucial for understanding how gradients are calculated in back-propagation.
*   SGD and its variants are widely used optimization algorithms in deep learning.
*   Choosing the right optimization algorithm and tuning its hyperparameters (e.g., learning rate, momentum) can significantly impact the training process.
*   Deep learning frameworks automate the gradient calculation and weight update process, making it easier to train complex neural networks.
