---
title: "Artificial Neural Network"
subject: "INTRODUCTION TO ARTIFICIAL INTELLIGENCE AND DATA 
SCIENCE"
module: "Module 1: Introduction to AI and Machine Learning :  Basics of Machine Learning"
branch: "Electrical and Electronics Engineering"
semester: 3
topicId: "68a200842b85456187f35b8c"
status: "completed"
scrapedAt: "2026-05-23T16:13:58.798Z"
---
# Module 1: Introduction to AI and Machine Learning - Basics of Machine Learning

## Topic: Artificial Neural Networks (ANNs)

This module introduces Artificial Neural Networks (ANNs), a fundamental concept in Machine Learning. We will explore their structure, function, and how they are inspired by biological neural networks. This understanding is crucial for applying ML algorithms, including neural networks, to engineering applications (CO1).

### 1. What are Artificial Neural Networks (ANNs)?

ANNs are computational models inspired by the structure and function of biological neural networks (the brain). They are designed to learn from data by adjusting the connections between their constituent units, called "neurons" or "nodes."

**Key Concepts:**

*   **Inspiration:** Biological neurons receive signals through dendrites, process them in the cell body, and transmit signals through an axon to other neurons. ANNs mimic this by processing input signals and producing an output.
*   **Learning:** ANNs learn by identifying patterns and relationships in data. This learning process involves adjusting the weights of the connections between neurons.
*   **Applications:** ANNs are widely used in various fields, including image recognition, natural language processing, pattern recognition, and prediction tasks.

**Reference:**
*   *Hands-on machine learning with Scikit-Learn, Keras, and TensorFlow* by Aurélien Géron provides an excellent practical introduction to ANNs, particularly with TensorFlow and Keras.

### 2. The Structure of a Simple Artificial Neural Network

A basic ANN consists of layers of interconnected neurons.

**Key Components:**

*   **Input Layer:** Receives the raw input data. Each neuron in this layer typically represents a feature of the input.
*   **Hidden Layer(s):** Layers between the input and output layers. These layers perform intermediate computations and feature extraction. The number of hidden layers and neurons per layer can vary.
*   **Output Layer:** Produces the final output of the network. The number of neurons in this layer depends on the specific task (e.g., one neuron for regression, multiple neurons for multi-class classification).
*   **Neurons (Nodes):** The basic computational units. Each neuron receives inputs from other neurons (or the input layer), processes them, and passes an output to other neurons.
*   **Connections (Edges):** Represent the links between neurons. Each connection has an associated **weight**, which determines the strength and direction of the signal transmission.
*   **Weights (w):** These are the parameters that the network learns during training. They determine how much influence the input from one neuron has on the next.
*   **Bias (b):** An additional parameter associated with each neuron (except in the input layer). It acts like an intercept term in a linear equation, allowing the neuron to activate even if all inputs are zero.
*   **Activation Function:** A function applied to the weighted sum of inputs and the bias within a neuron. It introduces non-linearity into the network, allowing it to learn complex patterns.

**Mathematical Representation of a Single Neuron (Perceptron):**

For a single neuron, the process can be described as follows:

1.  **Weighted Sum:**
    $z = \sum_{i=1}^{n} w_i x_i + b$
    Where:
    *   $x_i$ are the inputs from the previous layer.
    *   $w_i$ are the corresponding weights.
    *   $b$ is the bias.
    *   $n$ is the number of inputs.

2.  **Activation:**
    $a = f(z)$
    Where:
    *   $f$ is the activation function.
    *   $a$ is the output of the neuron.

**Reference:**
*   *Introduction to Linear Algebra* by Gilbert Strang is fundamental for understanding the matrix operations involved in ANNs, especially in calculating weighted sums.

### 3. Types of Activation Functions

Activation functions are critical for introducing non-linearity, enabling ANNs to model complex relationships.

**Common Activation Functions:**

*   **Sigmoid (Logistic) Function:**
    $f(z) = \frac{1}{1 + e^{-z}}$
    *   **Output Range:** (0, 1)
    *   **Use Cases:** Historically used in hidden layers and for binary classification output layers.
    *   **Drawback:** Suffers from the "vanishing gradient" problem.

*   **Hyperbolic Tangent (Tanh) Function:**
    $f(z) = \frac{e^z - e^{-z}}{e^z + e^{-z}}$
    *   **Output Range:** (-1, 1)
    *   **Use Cases:** Similar to sigmoid but with zero-centered output, which can sometimes help with training.
    *   **Drawback:** Also suffers from vanishing gradients.

*   **Rectified Linear Unit (ReLU):**
    $f(z) = \max(0, z)$
    *   **Output Range:** [0, $\infty$)
    *   **Use Cases:** Most commonly used activation function in hidden layers due to its computational efficiency and mitigation of vanishing gradients.
    *   **Drawback:** Can suffer from "dying ReLU" problem (neurons get stuck in a state where they output zero and do not learn).

*   **Leaky ReLU:**
    $f(z) = \begin{cases} z & \text{if } z > 0 \\ \alpha z & \text{if } z \le 0 \end{cases}$
    Where $\alpha$ is a small positive constant (e.g., 0.01).
    *   **Use Cases:** An improvement over ReLU that addresses the dying ReLU problem.

**Reference:**
*   *Mathematics for machine learning* by Deisenroth, Faisal, and Ong provides the mathematical underpinnings of these functions and their properties.

### 4. How Neural Networks Learn: The Training Process

The goal of training is to find the optimal weights and biases that minimize the difference between the network's predictions and the actual target values.

**Key Concepts:**

*   **Supervised Learning:** ANNs are typically trained using supervised learning, where labeled data (input-output pairs) is provided.
*   **Loss Function (Cost Function):** A function that quantifies the error between the predicted output and the true output. Common loss functions include Mean Squared Error (MSE) for regression and Cross-Entropy for classification.
    *   **MSE Example:** $J(\theta) = \frac{1}{m} \sum_{i=1}^{m} (y^{(i)} - \hat{y}^{(i)})^2$, where $m$ is the number of samples, $y^{(i)}$ is the true value, and $\hat{y}^{(i)}$ is the predicted value.
*   **Optimization Algorithm:** Algorithms used to minimize the loss function. The most common is **Gradient Descent**.
*   **Gradient Descent:** An iterative optimization algorithm that moves in the direction of the steepest decrease in the loss function. It calculates the gradient (partial derivatives of the loss function with respect to each weight and bias) and updates the parameters:
    $w_{new} = w_{old} - \eta \frac{\partial J}{\partial w}$
    $b_{new} = b_{old} - \eta \frac{\partial J}{\partial b}$
    Where $\eta$ (eta) is the **learning rate**, a hyperparameter that controls the step size.

*   **Backpropagation:** The core algorithm for training ANNs. It efficiently computes the gradients of the loss function with respect to each weight and bias by applying the chain rule of calculus. It propagates the error backward from the output layer to the input layer.

**The Training Steps:**

1.  **Initialization:** Initialize weights and biases (often randomly).
2.  **Forward Pass:** Feed an input sample through the network to get a prediction.
3.  **Loss Calculation:** Compute the loss between the prediction and the actual target.
4.  **Backward Pass (Backpropagation):** Calculate the gradients of the loss with respect to all weights and biases.
5.  **Weight Update:** Update the weights and biases using the gradients and the learning rate (e.g., using Gradient Descent or its variants like Adam, RMSprop).
6.  **Iteration:** Repeat steps 2-5 for all training samples (or batches of samples) over multiple epochs (passes through the entire dataset).

**Reference:**
*   *Hands-on machine learning with Scikit-Learn, Keras, and TensorFlow* by Aurélien Géron provides practical implementation details for backpropagation and gradient descent using popular libraries.
*   *Fundamentals of mathematical statistics* by Gupta, S. C., and V. K. Kapoor is essential for understanding the statistical basis of loss functions and optimization.

### 5. Types of Neural Networks

While the basic structure is a feedforward network, various architectures exist for different tasks.

**Key Types:**

*   **Feedforward Neural Networks (FNNs) / Multi-Layer Perceptrons (MLPs):**
    *   Information flows in one direction, from input to output, without cycles.
    *   Consist of one or more hidden layers.
    *   Suitable for tabular data, classification, and regression.

*   **Convolutional Neural Networks (CNNs):**
    *   Designed for processing grid-like data, such as images.
    *   Use convolutional layers to automatically learn spatial hierarchies of features.
    *   Key operations: convolution, pooling.
    *   Excellent for image recognition, object detection.

*   **Recurrent Neural Networks (RNNs):**
    *   Designed for sequential data, like text or time series.
    *   Have feedback loops, allowing information from previous time steps to influence the current output.
    *   Can suffer from vanishing/exploding gradients for long sequences.
    *   Variants like **Long Short-Term Memory (LSTM)** and **Gated Recurrent Unit (GRU)** address these issues.
    *   Suitable for natural language processing, speech recognition.

**Reference:**
*   *Hands-on machine learning with Scikit-Learn, Keras, and TensorFlow* by Aurélien Géron extensively covers CNNs and RNNs.

### 6. Application of ANNs in Engineering (Connecting to CO1)

ANNs are powerful tools for solving complex engineering problems where traditional analytical methods might be difficult or impossible.

**Examples:**

*   **Predictive Maintenance:** Predicting equipment failure based on sensor data. ANNs can learn patterns from historical failure data to forecast future failures. (CO1)
*   **Structural Health Monitoring:** Analyzing sensor data from bridges or buildings to detect damage or anomalies. (CO1)
*   **Image Analysis for Quality Control:** Identifying defects in manufactured products from images. CNNs are particularly effective here. (CO1)
*   **Robotics:** Controlling robot movements, path planning, and object manipulation. (CO1)
*   **Signal Processing:** Filtering noise from sensor signals or classifying different types of signals. (CO1)
*   **Optimization:** Finding optimal parameters for complex systems.

**Connection to CO2 & CO3:**

*   **CO2 (Linear Algebra):** Understanding the matrix operations for weighted sums, forward/backward passes, and transformations is essential. Linear algebra concepts are the backbone of ANN computations.
*   **CO3 (Statistics):** Loss functions, optimization based on minimizing error, and evaluating model performance rely heavily on statistical concepts. Understanding data distributions and relationships helps in selecting appropriate network architectures and features.

### 7. Important Points to Remember

*   **Non-linearity:** Activation functions are crucial for ANNs to learn complex, non-linear relationships.
*   **Backpropagation:** The efficient way to compute gradients for training.
*   **Gradient Descent:** The primary method for optimizing weights and biases.
*   **Hyperparameters:** Learning rate, number of hidden layers, number of neurons per layer, and choice of activation function are critical hyperparameters that need careful tuning.
*   **Overfitting:** ANNs can easily overfit the training data, meaning they perform well on training data but poorly on unseen data. Techniques like regularization, dropout, and early stopping are used to combat this.
*   **Data Requirements:** ANNs often require large amounts of data to train effectively.

### Practice Questions

**Question 1:**
What is the primary purpose of an activation function in a neural network?
a) To compute the weighted sum of inputs.
b) To introduce non-linearity into the network.
c) To store the weights of the connections.
d) To calculate the bias term.

**Question 2:**
Which algorithm is commonly used to efficiently compute gradients in a neural network?
a) Gradient Descent
b) Backpropagation
c) Forward Propagation
d) Linear Regression

**Question 3:**
If an ANN has an input layer with 10 neurons and a hidden layer with 5 neurons, how many weights are needed to connect the input layer to the hidden layer?
a) 5
b) 10
c) 15
d) 50

**Question 4:**
Explain the "vanishing gradient" problem and how activation functions like ReLU help mitigate it.

**Question 5:**
Describe the role of the loss function in training a neural network.

---

### Answers to Practice Questions

**Answer 1:**
b) To introduce non-linearity into the network.
*   **Explanation:** Without non-linear activation functions, a neural network would simply be a series of linear transformations, equivalent to a single linear layer, and unable to learn complex patterns.

**Answer 2:**
b) Backpropagation
*   **Explanation:** Backpropagation is the algorithm that computes the gradient of the loss function with respect to each weight and bias by propagating the error signal backward through the network. Gradient descent then uses these gradients to update the parameters.

**Answer 3:**
d) 50
*   **Explanation:** Each neuron in the hidden layer receives input from every neuron in the input layer. Therefore, there are 10 (inputs) * 5 (hidden neurons) = 50 connections, each with a weight. Additionally, there would be 5 bias terms, one for each hidden neuron. The question specifically asks for the number of weights connecting the layers.

**Answer 4:**
The "vanishing gradient" problem occurs when gradients become very small during backpropagation, especially in deep networks. This can lead to very slow learning or complete stagnation of learning in early layers. Activation functions like the sigmoid and tanh functions have saturated regions where their gradients are close to zero. ReLU (Rectified Linear Unit) helps mitigate this because its gradient is 1 for positive inputs, preventing the gradient from shrinking as it passes through positive activations. However, ReLU can still suffer from the "dying ReLU" problem where neurons can become inactive for all inputs.

**Answer 5:**
The loss function quantifies the error between the neural network's predicted output and the actual target (ground truth) for a given input. During training, the goal is to minimize this loss function. The calculated loss guides the backpropagation algorithm to adjust the network's weights and biases in a direction that reduces the error, thereby improving the network's performance.

---
This concludes the introduction to Artificial Neural Networks. The subsequent modules will build upon these foundational concepts, exploring various aspects of machine learning and data science in greater detail.
