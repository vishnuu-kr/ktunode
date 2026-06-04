---
title: "Neural Network - Multilayer feed-forward network"
subject: "MACHINE LEARNING FOR ENGINEERS"
module: "Module 3: Neural Networks (NN) "
branch: "Computer Science and Engineering"
semester: 6
topicId: "684162780fc9aa1fdbc8bf54"
status: "completed"
scrapedAt: "2026-05-20T16:55:05.450Z"
---
# Machine Learning for Engineers - Module 3: Neural Networks (NN)

## Topic: Neural Network - Multilayer Feed-Forward Network

---

### 1. Introduction to Multilayer Feed-Forward Networks (MLFFNs)

*   **Definition:** A multilayer feed-forward network is a type of artificial neural network consisting of multiple layers of nodes (neurons) arranged in a feed-forward architecture. Information flows in only one direction, from input to output, without any loops or cycles.
*   **Key Characteristics:**
    *   **Layers:** Composed of an **input layer**, one or more **hidden layers**, and an **output layer**.
    *   **Feed-Forward:** Connections between neurons are unidirectional. An output from one layer becomes an input to the next layer.
    *   **Non-linearity:** The inclusion of hidden layers and non-linear activation functions allows MLFFNs to learn complex, non-linear relationships in data.
    *   **Universal Approximators:** With a sufficient number of hidden neurons and layers, MLFFNs can approximate any continuous function.

---

### 2. Structure of a Multilayer Feed-Forward Network

*   **Input Layer:**
    *   Receives the raw input data features.
    *   The number of neurons in the input layer is equal to the number of features in the dataset.
    *   No computation is performed in the input layer; it simply passes the data forward.

*   **Hidden Layers:**
    *   **Purpose:** To extract and learn complex, hierarchical representations of the input data. They are "hidden" because their outputs are not directly observed as network outputs.
    *   **Number of Hidden Layers:** Can be one or more. Networks with more than one hidden layer are often referred to as "deep neural networks."
    *   **Number of Neurons per Hidden Layer:** This is a hyperparameter that needs to be tuned. Too few neurons might lead to underfitting, while too many can lead to overfitting.
    *   **Connections:** Each neuron in a hidden layer is typically connected to *all* neurons in the previous layer and *all* neurons in the next layer (fully connected or dense layers).

*   **Output Layer:**
    *   Produces the final output of the network.
    *   The number of neurons in the output layer depends on the task:
        *   **Regression:** One neuron for a single continuous value.
        *   **Binary Classification:** One neuron with a sigmoid activation function (outputting a probability between 0 and 1).
        *   **Multi-class Classification:** `n` neurons, where `n` is the number of classes, typically with a softmax activation function (outputting a probability distribution over classes).

*   **Neurons (Nodes):**
    *   **Weighted Sum:** Each neuron receives inputs from the previous layer. These inputs are multiplied by corresponding **weights**. A **bias** term is then added to this weighted sum.
        *   **Formula:** $z = \sum_{i=1}^{N} w_i x_i + b$
            *   $x_i$: Input from neuron `i` in the previous layer.
            *   $w_i$: Weight of the connection from neuron `i`.
            *   $b$: Bias term.
            *   $N$: Number of neurons in the previous layer.
    *   **Activation Function:** The weighted sum `z` is passed through a non-linear **activation function** `g(z)` to produce the neuron's output.
        *   **Formula:** $a = g(z)$
        *   **Purpose of Activation Functions:** Introduce non-linearity, allowing the network to learn complex patterns that linear models cannot. Without them, the network would effectively be a series of linear transformations, equivalent to a single linear layer.

---

### 3. Key Concepts and Definitions

*   **Weights ($w$):** Parameters that determine the strength and direction of the connection between neurons. These are the primary parameters learned during training.
*   **Biases ($b$):** Parameters that allow the activation function to be shifted, providing additional flexibility in modeling.
*   **Activation Function ($g(z)$):** A non-linear function applied to the weighted sum of inputs to a neuron. Common examples include:
    *   **Sigmoid (Logistic):** $g(z) = \frac{1}{1 + e^{-z}}$
        *   Outputs values between 0 and 1.
        *   Historically used, but suffers from the "vanishing gradient" problem for large inputs.
        *   Good for binary classification output layers.
    *   **Tanh (Hyperbolic Tangent):** $g(z) = \frac{e^z - e^{-z}}{e^z + e^{-z}}$
        *   Outputs values between -1 and 1.
        *   Zero-centered, which can be beneficial for optimization. Still suffers from vanishing gradients.
    *   **ReLU (Rectified Linear Unit):** $g(z) = \max(0, z)$
        *   Outputs `z` if `z > 0`, and `0` otherwise.
        *   Very popular due to its computational efficiency and mitigation of the vanishing gradient problem for positive inputs.
        *   Can suffer from the "dying ReLU" problem (neurons getting stuck outputting 0).
    *   **Leaky ReLU:** $g(z) = \max(\alpha z, z)$, where $\alpha$ is a small constant (e.g., 0.01).
        *   Addresses the dying ReLU problem by allowing a small, non-zero gradient for negative inputs.
    *   **Softmax:** $g(z_k) = \frac{e^{z_k}}{\sum_{j=1}^{C} e^{z_j}}$ (for the output layer in multi-class classification)
        *   Outputs a probability distribution over `C` classes, where the sum of probabilities for all classes is 1.

*   **Forward Propagation:** The process of passing input data through the network, layer by layer, to compute the output.

*   **Loss Function (Cost Function):** Measures the difference between the network's predicted output and the actual target output. The goal of training is to minimize this function. Common loss functions include:
    *   **Mean Squared Error (MSE):** Used for regression tasks.
        *   $L = \frac{1}{m} \sum_{i=1}^{m} (y_i - \hat{y}_i)^2$
    *   **Cross-Entropy Loss:** Used for classification tasks.
        *   **Binary Cross-Entropy:** $L = -\frac{1}{m} \sum_{i=1}^{m} [y_i \log(\hat{y}_i) + (1 - y_i) \log(1 - \hat{y}_i)]$
        *   **Categorical Cross-Entropy:** $L = -\frac{1}{m} \sum_{i=1}^{m} \sum_{j=1}^{C} y_{ij} \log(\hat{y}_{ij})$

*   **Backpropagation:** An algorithm used to train neural networks. It computes the gradient of the loss function with respect to each weight and bias in the network by applying the chain rule of calculus. This gradient is then used by an optimization algorithm to update the parameters.

*   **Gradient Descent:** An iterative optimization algorithm that finds the minimum of a function by taking steps in the opposite direction of the gradient.
    *   **Learning Rate ($\alpha$):** Controls the step size during gradient descent.
    *   **Update Rule:** $w_{new} = w_{old} - \alpha \frac{\partial L}{\partial w}$

---

### 4. How MLFFNs Learn (Training Process)

1.  **Initialization:** Weights and biases are initialized (often randomly or using specific initialization schemes like Xavier/He initialization).
2.  **Forward Pass:** An input sample is fed into the network. The weighted sums and activation functions are computed for each neuron in each layer until the output layer produces a prediction ($\hat{y}$).
3.  **Loss Calculation:** The loss function is used to quantify the error between the prediction ($\hat{y}$) and the true target ($y$).
4.  **Backward Pass (Backpropagation):** The gradient of the loss with respect to each weight and bias is calculated using backpropagation. This involves the chain rule, starting from the output layer and moving backward through the hidden layers.
5.  **Parameter Update:** An optimization algorithm (e.g., Gradient Descent, Adam, RMSprop) uses the calculated gradients and a learning rate to update the weights and biases to reduce the loss.
    *   $W_{new} = W_{old} - \alpha \nabla_W L$
    *   $b_{new} = b_{old} - \alpha \nabla_b L$
6.  **Iteration:** Steps 2-5 are repeated for all training samples (or batches of samples) over multiple **epochs** (passes through the entire training dataset).

---

### 5. Example: A Simple MLFFN for Binary Classification

**Scenario:** Predict if a student will pass an exam based on hours studied and previous grade.

*   **Input Layer:** 2 neurons (Hours Studied, Previous Grade)
*   **Hidden Layer:** 3 neurons (using ReLU activation)
*   **Output Layer:** 1 neuron (using Sigmoid activation for probability of passing)

**Forward Pass Example:**

Let's consider one student:
*   Hours Studied ($x_1$) = 7
*   Previous Grade ($x_2$) = 85

**Hidden Layer Calculation:**
*   Neuron 1 (h1):
    *   $z_{h1} = (w_{11} \cdot x_1) + (w_{21} \cdot x_2) + b_{h1}$
    *   $a_{h1} = \text{ReLU}(z_{h1})$
*   Neuron 2 (h2):
    *   $z_{h2} = (w_{12} \cdot x_1) + (w_{22} \cdot x_2) + b_{h2}$
    *   $a_{h2} = \text{ReLU}(z_{h2})$
*   Neuron 3 (h3):
    *   $z_{h3} = (w_{13} \cdot x_1) + (w_{23} \cdot x_2) + b_{h3}$
    *   $a_{h3} = \text{ReLU}(z_{h3})$

*(Assume some initial weights and biases. For simplicity, let's assume we've already computed $a_{h1}, a_{h2}, a_{h3}$)*

**Output Layer Calculation:**
*   Neuron Output (o1):
    *   $z_{o1} = (w_{h1,o1} \cdot a_{h1}) + (w_{h2,o1} \cdot a_{h2}) + (w_{h3,o1} \cdot a_{h3}) + b_{o1}$
    *   $\hat{y} = \text{Sigmoid}(z_{o1}) = \frac{1}{1 + e^{-z_{o1}}}$

**Loss Calculation:**
*   If the student actually passed (True label $y=1$), and $\hat{y} = 0.8$, then Binary Cross-Entropy loss would be calculated.

**Backpropagation:**
*   The error at the output layer is calculated.
*   This error is propagated backward to the hidden layer. Gradients of the weights and biases are computed.

**Parameter Update:**
*   Weights and biases are adjusted using gradient descent to minimize the loss.

---

### 6. Important Points to Remember

*   **Non-linearity is Crucial:** Activation functions are essential for MLFFNs to learn anything beyond linear relationships.
*   **Number of Hidden Layers and Neurons:** These are hyperparameters that significantly impact performance. More layers/neurons don't always mean better performance; they can lead to overfitting.
*   **Backpropagation is the Engine:** It's the core algorithm for computing gradients needed for training.
*   **Loss Function Choice Matters:** The loss function should align with the problem type (regression vs. classification).
*   **Vanishing/Exploding Gradients:** Can be an issue with deep networks and certain activation functions (like sigmoid). ReLU and careful initialization help mitigate this.
*   **Overfitting:** MLFFNs, especially deep ones, are prone to overfitting. Techniques like regularization (L1, L2), dropout, and early stopping are used to combat this.
*   **Data Preprocessing:** Scaling input features (e.g., standardization or normalization) is generally recommended for better convergence.

---

### 7. Practice Questions and Exercises

**Question 1:**
What is the primary role of a hidden layer in a multilayer feed-forward network?
a) To directly output the final prediction.
b) To introduce non-linearity into the model.
c) To store the input data.
d) To calculate the loss function.

**Question 2:**
Which activation function is commonly used in the output layer for multi-class classification problems?
a) Sigmoid
b) Tanh
c) ReLU
d) Softmax

**Question 3:**
If a neural network has one input layer, one hidden layer, and one output layer, what type of network is it?
a) Perceptron
b) Multilayer Feed-Forward Network
c) Recurrent Neural Network
d) Convolutional Neural Network

**Question 4:**
Which algorithm is used to compute the gradients of the loss function with respect to the weights and biases in a neural network?
a) Forward Propagation
b) Gradient Descent
c) Backpropagation
d) Activation Function

**Question 5:**
Explain the "vanishing gradient" problem and how ReLU activation can help mitigate it.

---

### 8. Answers to Practice Questions

**Answer 1:**
b) To introduce non-linearity into the model.
*   **Explanation:** Hidden layers, along with activation functions, allow the network to learn complex, non-linear patterns in the data that a simple linear model could not capture.

**Answer 2:**
d) Softmax
*   **Explanation:** Softmax converts a vector of raw scores into a probability distribution, making it suitable for assigning probabilities to multiple classes.

**Answer 3:**
b) Multilayer Feed-Forward Network
*   **Explanation:** A network with at least one hidden layer and information flowing forward is classified as a multilayer feed-forward network.

**Answer 4:**
c) Backpropagation
*   **Explanation:** Backpropagation is the algorithm specifically designed to calculate these gradients efficiently by applying the chain rule.

**Answer 5:**
The **vanishing gradient** problem occurs when gradients become very small during backpropagation, especially in deep networks. This can cause the weights in earlier layers to update very slowly or not at all, hindering learning.

**ReLU (Rectified Linear Unit)** helps mitigate this because its gradient is 1 for positive inputs ($z > 0$) and 0 for negative inputs ($z \le 0$). When the input to a ReLU neuron is positive, the gradient is 1, preventing it from shrinking as it propagates backward. This "non-saturating" behavior for positive inputs helps gradients flow more effectively through deep networks, unlike sigmoid or tanh which saturate for large positive or negative inputs, resulting in near-zero gradients. However, ReLU can still suffer from the "dying ReLU" problem if neurons get stuck in the negative region where their gradient is always zero.
