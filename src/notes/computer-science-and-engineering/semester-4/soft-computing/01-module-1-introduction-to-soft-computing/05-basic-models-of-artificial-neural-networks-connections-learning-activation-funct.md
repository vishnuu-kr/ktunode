---
title: "Basic models of artificial neural networks – Connections, Learning, Activation Functions."
subject: "SOFT COMPUTING"
module: "Module 1: Introduction to Soft Computing."
branch: "Computer Science and Engineering"
semester: 4
topicId: "684162760fc9aa1fdbc8b1d5"
status: "completed"
scrapedAt: "2026-05-20T16:16:14.854Z"
---
# SOFT COMPUTING - Module 1: Introduction to Soft Computing
## Topic: Basic Models of Artificial Neural Networks – Connections, Learning, Activation Functions

**Learning Outcomes:**

*   Understand the fundamental structure of artificial neural networks.
*   Explain different types of connections within a neural network.
*   Describe various learning paradigms used for training neural networks.
*   Identify and explain the purpose of common activation functions.
*   Apply basic mathematical concepts to understand neuron behavior.

---

## 1. Introduction to Artificial Neural Networks (ANNs)

*   **Definition:** Artificial Neural Networks (ANNs) are computational models inspired by the structure and function of biological neural networks (the brain). They are used to approximate functions that can depend on a large number of inputs and are generally unknown.
*   **Purpose:** ANNs are primarily used for pattern recognition, classification, regression, prediction, and data mining.
*   **Key Components:**
    *   **Neurons (Nodes):** The basic processing units of the network. They receive inputs, process them, and produce an output.
    *   **Connections (Weights):** Links between neurons, each with an associated weight representing the strength of the connection.
    *   **Activation Function:** A function applied to the weighted sum of inputs to determine the neuron's output.
    *   **Architecture:** The overall structure of the network, including the arrangement of neurons and connections.

## 2. Connections in Artificial Neural Networks

*   **Definition:**  Connections (also called edges or synapses) define how neurons are linked together. The strength of a connection is represented by its weight.
*   **Types of Connections:**
    *   **Feedforward:** Information flows in one direction, from input layer to output layer, without loops or cycles.  This is typical of Multi-Layer Perceptrons (MLPs).
        *   *Example:* In a simple feedforward network, layer *i* receives input only from layer *i-1*.
    *   **Feedback (Recurrent):** Connections form loops, allowing information to flow in both directions. These networks have memory and are suitable for processing sequential data.
        *   *Example:* Recurrent Neural Networks (RNNs) and Hopfield networks. A neuron's output can influence its own future input.
    *   **Lateral:**  Connections exist between neurons within the same layer.
        *   *Example:*  Self-Organizing Maps (SOMs) use lateral inhibition to promote competition among neurons.
*   **Connection Weights (Synaptic Weights):**
    *   Represent the strength or importance of a connection.
    *   Positive weights represent excitatory connections (increasing the activation of the receiving neuron).
    *   Negative weights represent inhibitory connections (decreasing the activation of the receiving neuron).
    *   Weights are the parameters that are adjusted during the learning process.

## 3. Learning Paradigms in Artificial Neural Networks

*   **Definition:**  Learning (or training) is the process of adjusting the connection weights of a neural network to improve its performance on a specific task.
*   **Types of Learning Paradigms:**
    *   **Supervised Learning:** The network is trained with labeled data (input-output pairs). The network learns to map inputs to the corresponding outputs.
        *   *Example:* Training a network to classify images of cats and dogs using labeled images.
        *   *Algorithms:* Backpropagation, Support Vector Machines (SVMs), Decision Trees (sometimes applicable).
        *   *Process:*
            1.  Present the input to the network.
            2.  Compare the network's output with the desired output (target).
            3.  Calculate the error.
            4.  Adjust the weights to reduce the error using a learning algorithm (e.g., gradient descent).
    *   **Unsupervised Learning:** The network is trained with unlabeled data.  The network learns to discover patterns, clusters, and relationships within the data.
        *   *Example:* Clustering customers into different segments based on their purchasing behavior.
        *   *Algorithms:* K-means clustering, Self-Organizing Maps (SOMs), Principal Component Analysis (PCA) (can be used for unsupervised learning).
        *   *Process:*
            1.  Present the input to the network.
            2.  The network automatically organizes the data based on its internal structure.
            3.  No external target is provided.
    *   **Reinforcement Learning:**  The network learns to make decisions in an environment to maximize a reward signal. The network receives feedback in the form of rewards or penalties.
        *   *Example:* Training a robot to navigate a maze by rewarding it for moving closer to the goal and penalizing it for collisions.
        *   *Algorithms:* Q-learning, Deep Q-Networks (DQN), Policy Gradients.
        *   *Process:*
            1.  The agent (network) takes an action in the environment.
            2.  The agent receives a reward or penalty based on the action.
            3.  The agent updates its internal policy (weights) to maximize future rewards.

## 4. Activation Functions

*   **Definition:** An activation function determines the output of a neuron based on its input. It introduces non-linearity into the network, allowing it to learn complex patterns.
*   **Purpose:** Without activation functions, neural networks would simply be linear regression models, unable to solve non-linear problems.
*   **Common Activation Functions:**
    *   **Sigmoid (Logistic):**
        *   *Formula:*  `f(x) = 1 / (1 + exp(-x))`
        *   *Output Range:* (0, 1)
        *   *Use Cases:*  Binary classification problems (probability output).  Historically used in many early ANNs, but less common now in deep learning due to vanishing gradient problem.
        *   *Pros:*  Output is easily interpretable as a probability.
        *   *Cons:*  Vanishing gradient problem, slow learning, not zero-centered.
    *   **Tanh (Hyperbolic Tangent):**
        *   *Formula:* `f(x) = (exp(x) - exp(-x)) / (exp(x) + exp(-x))`
        *   *Output Range:* (-1, 1)
        *   *Use Cases:*  Similar to sigmoid, but often preferred as it's zero-centered, which can help with faster convergence.
        *   *Pros:* Zero-centered, which can lead to faster learning than sigmoid.
        *   *Cons:*  Vanishing gradient problem.
    *   **ReLU (Rectified Linear Unit):**
        *   *Formula:*  `f(x) = max(0, x)`
        *   *Output Range:* [0, ∞)
        *   *Use Cases:* Most common activation function in deep learning.
        *   *Pros:*  Simple, computationally efficient, alleviates vanishing gradient problem for positive inputs.
        *   *Cons:*  "Dying ReLU" problem (neurons can become inactive if their weights are not properly initialized).
    *   **Leaky ReLU:**
        *   *Formula:*  `f(x) = x if x > 0 else alpha * x` (where alpha is a small constant, e.g., 0.01)
        *   *Output Range:*  (-∞, ∞)
        *   *Use Cases:*  Addresses the "dying ReLU" problem.
        *   *Pros:*  Avoids the dying ReLU problem, can learn faster than ReLU in some cases.
        *   *Cons:*  Slightly more complex than ReLU.
    *   **Softmax:**
        *   *Formula:*  `f(x_i) = exp(x_i) / sum(exp(x_j) for all j)` (where x is a vector of inputs)
        *   *Output Range:*  (0, 1), and the sum of all outputs is 1.
        *   *Use Cases:*  Multi-class classification problems (outputs represent probabilities for each class).
        *   *Pros:*  Provides a probability distribution over multiple classes.
        *   *Cons:*  Sensitive to input scaling.
    *   **Linear (Identity):**
        *   *Formula:* `f(x) = x`
        *   *Output Range:* (-∞, ∞)
        *   *Use Cases:* Regression problems, output layers when you want a direct linear output. Also used in the input layer.
        *   *Pros:* Simple and straightforward.
        *   *Cons:* Does not introduce non-linearity.

## 5. Mathematical Representation of a Neuron

*   A neuron receives *n* inputs: *x1, x2, ..., xn*.
*   Each input has an associated weight: *w1, w2, ..., wn*.
*   The weighted sum of inputs is calculated: *z = (w1 * x1) + (w2 * x2) + ... + (wn * xn) + b*, where *b* is the bias.
*   The activation function *f* is applied to the weighted sum: *a = f(z)*.  *a* is the output of the neuron.
*   **Bias:** A bias term allows the neuron to activate even when all inputs are zero.  It's like a constant offset.

**Example:**

Let's say a neuron has two inputs: *x1 = 0.5* and *x2 = 0.8*. The corresponding weights are *w1 = 0.3* and *w2 = -0.4*. The bias is *b = 0.1*.  We will use ReLU as the activation function.

1.  **Weighted Sum:** *z = (0.3 * 0.5) + (-0.4 * 0.8) + 0.1 = 0.15 - 0.32 + 0.1 = -0.07*
2.  **Activation:** *a = ReLU(z) = ReLU(-0.07) = max(0, -0.07) = 0*

Therefore, the output of the neuron is 0.

## 6. Important Points to Remember

*   ANNs are powerful tools for solving complex problems, but they require careful design and training.
*   The choice of architecture, learning paradigm, and activation functions depends on the specific application.
*   Understanding the underlying mathematical principles is crucial for effectively working with ANNs.
*   Overfitting (when the network learns the training data too well and performs poorly on unseen data) is a common challenge that needs to be addressed with techniques like regularization and cross-validation.

## 7. Practice Questions/Exercises

**Q1:** What are the main components of an Artificial Neural Network?

**Answer:** Neurons (Nodes), Connections (Weights), Activation Functions, and Architecture.

**Q2:** Explain the difference between supervised and unsupervised learning.

**Answer:** Supervised learning uses labeled data to train the network to map inputs to outputs, while unsupervised learning uses unlabeled data to discover patterns in the data.

**Q3:** What is the purpose of an activation function in a neural network?

**Answer:** An activation function introduces non-linearity into the network, allowing it to learn complex patterns. Without activation functions, the network would simply be a linear model.

**Q4:** What are the advantages and disadvantages of the ReLU activation function?

**Answer:**
*   *Advantages:* Simple, computationally efficient, alleviates the vanishing gradient problem for positive inputs.
*   *Disadvantages:* "Dying ReLU" problem.

**Q5:** A neuron has inputs x1 = 0.7, x2 = 0.2 and weights w1 = 0.5, w2 = -0.3.  The bias is b = -0.1.  What is the output of the neuron if it uses a sigmoid activation function? (Show your work).

**Answer:**
1.  **Weighted Sum:** z = (0.5 * 0.7) + (-0.3 * 0.2) - 0.1 = 0.35 - 0.06 - 0.1 = 0.19
2.  **Sigmoid Activation:** a = 1 / (1 + exp(-0.19)) ≈ 1 / (1 + 0.827) ≈ 1 / 1.827 ≈ 0.547

Therefore, the output of the neuron is approximately 0.547.

**Q6:** Explain the term "vanishing gradient problem". Which activation functions are most susceptible to it?

**Answer:** The vanishing gradient problem occurs during training (especially in deep networks) when the gradients (derivatives used to update weights) become very small as they are backpropagated through the network.  This makes it difficult for earlier layers to learn. Sigmoid and Tanh activation functions are most susceptible to this problem because their derivatives saturate to zero when the input is very large or very small.

**Q7:** What type of connections are used in Recurrent Neural Networks (RNNs)?

**Answer:** Feedback (recurrent) connections.
