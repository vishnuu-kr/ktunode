---
title: "Training MLPs with Backpropagation"
subject: "DEEP LEARNING"
module: "Module 1: Neural Network: Introduction to neural networks "
branch: "Electrical and Electronics Engineering"
semester: 7
topicId: "68a200872b85456187f369d8"
status: "completed"
scrapedAt: "2026-05-23T16:33:29.580Z"
---
# Deep Learning: Neural Networks - Module 1: Introduction to Neural Networks

## Topic: Training MLPs with Backpropagation

This module focuses on understanding the fundamental process of training Multi-Layer Perceptrons (MLPs) using the backpropagation algorithm. This is a crucial step in making neural networks learn from data.

---

### Learning Outcomes Covered:

*   **Understanding the core mechanics of backpropagation:** How errors are propagated backward through the network to adjust weights.
*   **Grasping the role of the loss function and gradient descent:** How these components guide the learning process.
*   **Familiarity with the mathematical underpinnings of backpropagation:** Chain rule and partial derivatives.
*   **Appreciating the iterative nature of training:** How networks improve over epochs.

---

### Course Outcomes Alignment:

*   **CO1: Illustrate the basic concepts of neural networks and its practical issues (Knowledge Level: K2)**
    *   Backpropagation is the cornerstone of training MLPs, a basic neural network architecture. Understanding it allows us to illustrate how these networks learn and identify potential issues like vanishing gradients (though we won't delve deeply into that here, it's a natural extension).
*   **CO2: Outline the standard regularization and optimization techniques for deep neural network (Knowledge Level: K2)**
    *   Backpropagation is the foundation for many optimization techniques. By understanding how gradients are computed and used, we can better appreciate techniques like Stochastic Gradient Descent (SGD) and its variants (Adam, RMSprop), which are covered in later modules.

---

### 1. Introduction to Multi-Layer Perceptrons (MLPs)

Before diving into backpropagation, let's briefly recap MLPs.

*   **Definition:** An MLP is a type of feedforward artificial neural network with at least three layers: an input layer, one or more hidden layers, and an output layer.
*   **Structure:**
    *   **Input Layer:** Receives the raw input features.
    *   **Hidden Layers:** Perform intermediate computations. Each neuron in a hidden layer is connected to all neurons in the previous layer and all neurons in the next layer.
    *   **Output Layer:** Produces the final output of the network.
*   **Activation Function:** Each neuron (except input neurons) applies a non-linear activation function to its weighted sum of inputs. Common examples include Sigmoid, ReLU, and Tanh.
*   **Weights and Biases:** The connections between neurons have associated weights, and each neuron (except input neurons) has a bias. These are the parameters the network learns.

**Key Concept:** The goal of training an MLP is to find the optimal values for weights and biases that minimize the difference between the network's predictions and the actual target values.

---

### 2. The Need for a Training Algorithm

*   **Learning from Data:** Neural networks learn by adjusting their internal parameters (weights and biases) based on the training data.
*   **Error Minimization:** The training process aims to minimize an "error" or "loss" that quantifies how poorly the network is performing.
*   **Gradient Descent:** A fundamental optimization algorithm used to find the minimum of a function. It works by iteratively moving in the direction of the steepest descent (negative gradient).

**Reference:** *Neural Networks and Deep Learning* by Charu C. Aggarwal (Springer, 2018) discusses gradient-based learning as a core principle for training neural networks.

---

### 3. The Loss Function

The loss function quantifies the discrepancy between the network's predicted output ($\hat{y}$) and the true target output ($y$).

*   **Purpose:** To provide a single numerical measure of the network's error for a given input.
*   **Common Loss Functions for Regression:**
    *   **Mean Squared Error (MSE):** $L = \frac{1}{N} \sum_{i=1}^{N} (y_i - \hat{y}_i)^2$
        *   *Description:* Calculates the average of the squared differences between true and predicted values.
*   **Common Loss Functions for Classification:**
    *   **Cross-Entropy Loss:** $L = -\sum_{i=1}^{C} y_i \log(\hat{y}_i)$ (for a single sample, where $C$ is the number of classes)
        *   *Description:* Measures the difference between two probability distributions. Commonly used for multi-class classification.

**Example (MSE):**
Suppose for a single data point, the true value is $y=5$ and the network predicts $\hat{y}=4.5$.
The MSE for this point is $(5 - 4.5)^2 = (0.5)^2 = 0.25$.

**Important Point:** The choice of loss function depends on the type of problem (regression vs. classification).

---

### 4. Gradient Descent

Gradient descent is the engine that drives learning in neural networks.

*   **Core Idea:** To minimize the loss function, we need to adjust the weights and biases in the direction that *reduces* the loss. This direction is given by the negative gradient of the loss function with respect to the parameters.
*   **Update Rule:**
    $w_{new} = w_{old} - \alpha \frac{\partial L}{\partial w}$
    $b_{new} = b_{old} - \alpha \frac{\partial L}{\partial b}$
    *   $w$: weight
    *   $b$: bias
    *   $L$: loss function
    *   $\frac{\partial L}{\partial w}$: gradient of the loss with respect to the weight
    *   $\frac{\partial L}{\partial b}$: gradient of the loss with respect to the bias
    *   $\alpha$: learning rate (a hyperparameter controlling the step size)

**Key Concept:** The learning rate ($\alpha$) is crucial.
*   Too high: May overshoot the minimum.
*   Too low: Training can be very slow.

---

### 5. Backpropagation: The Algorithm

Backpropagation is an efficient algorithm for computing the gradients of the loss function with respect to all weights and biases in the network. It's based on the **chain rule** from calculus.

**Analogy:** Imagine a complex machinery. If you want to know how a small adjustment at the very end affects a component at the beginning, you trace back the influence step-by-step. Backpropagation does this for error.

#### 5.1. Forward Pass

This is the standard process of passing input through the network to get an output.

1.  **Input Layer:** The input features are fed into the input layer.
2.  **Hidden Layers:** For each neuron in a hidden layer:
    *   Calculate the weighted sum of inputs from the previous layer plus the bias: $z = \sum w_i x_i + b$
    *   Apply the activation function: $a = f(z)$
3.  **Output Layer:** Repeat step 2 for the output layer neurons to get the final prediction $\hat{y}$.

#### 5.2. Backward Pass (The Core of Backpropagation)

This is where the "magic" happens – calculating gradients.

1.  **Calculate Output Layer Error:**
    *   Compute the derivative of the loss function with respect to the output of the network ($\frac{\partial L}{\partial \hat{y}}$).
    *   For each output neuron, calculate the gradient of the loss with respect to its pre-activation output $z$: $\delta_{output} = \frac{\partial L}{\partial \hat{y}} \times f'(z_{output})$
        *   $f'(z_{output})$ is the derivative of the activation function at the output neuron's pre-activation value.

2.  **Propagate Error to Hidden Layers:**
    *   For each neuron in the *last hidden layer*:
        *   The error contribution $\delta_{hidden}$ is calculated by summing the weighted errors from the next layer (the output layer).
        *   $\delta_{hidden} = \left(\sum_{j} w_{hidden \to output, j} \delta_{output, j}\right) \times f'(z_{hidden})$
            *   $w_{hidden \to output, j}$ is the weight connecting the current hidden neuron to the $j$-th output neuron.
            *   $\delta_{output, j}$ is the error term for the $j$-th output neuron.
            *   $f'(z_{hidden})$ is the derivative of the activation function at the hidden neuron's pre-activation value.

3.  **Calculate Gradients for Weights and Biases:**
    *   **For weights connecting layer $L-1$ to layer $L$:**
        $\frac{\partial L}{\partial w_{i,j}^{(L)}} = \delta_j^{(L)} \cdot a_i^{(L-1)}$
        *   $w_{i,j}^{(L)}$: weight connecting the $i$-th neuron in layer $L-1$ to the $j$-th neuron in layer $L$.
        *   $\delta_j^{(L)}$: error term for the $j$-th neuron in layer $L$.
        *   $a_i^{(L-1)}$: activation of the $i$-th neuron in layer $L-1$.
    *   **For biases of layer $L$:**
        $\frac{\partial L}{\partial b_j^{(L)}} = \delta_j^{(L)}$

**Reference:** *Fundamentals of Deep Learning* by Nikhil Buduma and Nicholas Locascio (O'Reilly Media, 2017) provides a clear exposition of the backpropagation algorithm and its mathematical derivation. Michael Nielsen's online book (http://neuralnetworksanddeeplearning.com/) also offers an excellent, step-by-step explanation.

**Example (Simplified MLP with Sigmoid activation and MSE loss):**

Let's consider a tiny MLP:
*   Input layer: 1 neuron ($x_1$)
*   Hidden layer: 1 neuron ($h_1$) with activation $a_{h1} = \sigma(z_{h1})$
*   Output layer: 1 neuron ($o_1$) with activation $\hat{y}_1 = \sigma(z_{o1})$

Parameters: $w_{1,1}$ (input to hidden), $b_1$ (hidden bias), $w_{h1,1}$ (hidden to output), $b_{o1}$ (output bias).

Loss Function (MSE for single output): $L = \frac{1}{2}(y_1 - \hat{y}_1)^2$ (using 1/2 for convenience in differentiation)
Activation Function: Sigmoid $\sigma(z) = \frac{1}{1+e^{-z}}$, derivative $\sigma'(z) = \sigma(z)(1-\sigma(z))$

**Forward Pass:**
1.  $z_{h1} = w_{1,1} x_1 + b_1$
2.  $a_{h1} = \sigma(z_{h1})$
3.  $z_{o1} = w_{h1,1} a_{h1} + b_{o1}$
4.  $\hat{y}_1 = \sigma(z_{o1})$

**Backward Pass:**

1.  **Output Layer Error ($\delta_{o1}$):**
    *   $\frac{\partial L}{\partial \hat{y}_1} = \frac{\partial}{\partial \hat{y}_1} \frac{1}{2}(y_1 - \hat{y}_1)^2 = -(y_1 - \hat{y}_1) = \hat{y}_1 - y_1$
    *   $\frac{\partial L}{\partial z_{o1}} = \frac{\partial L}{\partial \hat{y}_1} \frac{\partial \hat{y}_1}{\partial z_{o1}} = (\hat{y}_1 - y_1) \sigma'(z_{o1})$
    *   So, $\delta_{o1} = (\hat{y}_1 - y_1) \sigma'(z_{o1})$

2.  **Gradients for Output Layer:**
    *   $\frac{\partial L}{\partial w_{h1,1}} = \delta_{o1} \cdot a_{h1}$
    *   $\frac{\partial L}{\partial b_{o1}} = \delta_{o1}$

3.  **Propagate Error to Hidden Layer:**
    *   The error term for the hidden neuron $\delta_{h1}$ depends on the error of the output neuron it connects to. Since there's only one output neuron, the sum is just that single term.
    *   $\frac{\partial L}{\partial z_{h1}} = \frac{\partial L}{\partial \hat{y}_1} \frac{\partial \hat{y}_1}{\partial z_{o1}} \frac{\partial z_{o1}}{\partial a_{h1}} \frac{\partial a_{h1}}{\partial z_{h1}}$
    *   $\frac{\partial L}{\partial z_{h1}} = \underbrace{\frac{\partial L}{\partial \hat{y}_1} \frac{\partial \hat{y}_1}{\partial z_{o1}}}_{\delta_{o1}} \cdot w_{h1,1} \cdot \sigma'(z_{h1})$
    *   So, $\delta_{h1} = (\delta_{o1} \cdot w_{h1,1}) \sigma'(z_{h1})$

4.  **Gradients for Hidden Layer:**
    *   $\frac{\partial L}{\partial w_{1,1}} = \delta_{h1} \cdot x_1$
    *   $\frac{\partial L}{\partial b_1} = \delta_{h1}$

**Important Point:** For deeper networks, this process is repeated for each hidden layer, propagating the error backward from layer to layer.

---

### 6. Training an MLP with Backpropagation: The Iterative Process

The training process involves repeatedly applying the forward pass, calculating the loss, and then using backpropagation to update the weights and biases.

1.  **Initialization:** Initialize weights and biases with small random values.
2.  **Forward Pass:** Feed a data sample (or a batch of samples) through the network to get a prediction.
3.  **Loss Calculation:** Compute the loss between the prediction and the true target.
4.  **Backward Pass (Backpropagation):** Compute the gradients of the loss with respect to all weights and biases.
5.  **Weight Update:** Update weights and biases using gradient descent (or its variants) with the calculated gradients and a learning rate.
6.  **Repeat:** Repeat steps 2-5 for all data samples in the training set. One pass through the entire training set is called an **epoch**.
7.  **Iteration:** Continue training for multiple epochs until the model converges (e.g., the loss stops decreasing significantly, or validation performance plateaus).

**Key Concepts:**
*   **Epoch:** A full pass through the entire training dataset.
*   **Batch:** A subset of the training dataset used in one iteration of weight updates.
*   **Stochastic Gradient Descent (SGD):** Updates weights after processing each individual training sample. Can be noisy but often faster.
*   **Mini-Batch Gradient Descent:** Updates weights after processing a small batch of training samples. A good compromise between SGD and Batch Gradient Descent.

**Reference:** *Deep Learning* by Goodfellow, Bengio, and Courville (MIT Press, 2016) provides an in-depth treatment of optimization algorithms like SGD, which are directly enabled by backpropagation.

---

### 7. Practical Considerations and Issues

While backpropagation is powerful, there are practical challenges.

*   **Vanishing/Exploding Gradients:** In very deep networks, gradients can become extremely small (vanishing) or extremely large (exploding) during backpropagation, hindering learning. This can be addressed by:
    *   Using activation functions like ReLU (Rectified Linear Unit).
    *   Weight initialization strategies (e.g., Xavier/Glorot, He initialization).
    *   Batch Normalization (covered in later modules).
*   **Learning Rate Tuning:** Finding an appropriate learning rate is critical for successful training.
*   **Local Minima:** Gradient descent can get stuck in local minima of the loss function, especially in non-convex optimization landscapes. However, for very large networks, it's often found that most local minima are close enough to global minima in practice.
*   **Overfitting:** The model learns the training data too well and fails to generalize to unseen data. Regularization techniques (L1, L2, dropout) are used to combat this.

**Reference:** Satish Kumar's *Neural Networks: A Classroom Approach* and Yegnanarayana's *Artificial Neural Networks* often discuss these practical issues encountered during the training of neural networks.

---

### 8. Practice Questions

**Question 1:** What is the primary role of the backpropagation algorithm in training a neural network?
    a) To perform feature extraction.
    b) To compute the forward pass of the network.
    c) To efficiently calculate the gradients of the loss function with respect to the network's parameters.
    d) To select the optimal learning rate.

**Question 2:** The update rule for a weight $w$ in gradient descent is $w_{new} = w_{old} - \alpha \frac{\partial L}{\partial w}$. What does $\frac{\partial L}{\partial w}$ represent?
    a) The change in loss if the weight is slightly increased.
    b) The average loss across the dataset.
    c) The number of neurons in the layer.
    d) The activation of the previous neuron.

**Question 3:** Which calculus rule is fundamental to the operation of backpropagation?
    a) Product Rule
    b) Quotient Rule
    c) Chain Rule
    d) Mean Value Theorem

**Question 4:** Explain the difference between a forward pass and a backward pass in the context of neural network training.

---

### Answers to Practice Questions

**Answer 1:**
c) To efficiently calculate the gradients of the loss function with respect to the network's parameters.

**Answer 2:**
a) The change in loss if the weight is slightly increased. (More precisely, it's the rate of change of the loss with respect to the weight).

**Answer 3:**
c) Chain Rule

**Answer 4:**
*   **Forward Pass:** The input data is processed through the network, layer by layer, applying weights, biases, and activation functions to produce an output prediction.
*   **Backward Pass (Backpropagation):** After calculating the loss from the output, the errors are propagated backward from the output layer to the input layer. This process uses the chain rule to compute how much each weight and bias contributed to the overall error, effectively calculating the gradients of the loss function with respect to each parameter.

---

### Important Points to Remember:

*   Backpropagation is an algorithm for **gradient computation**.
*   It relies heavily on the **chain rule** of calculus.
*   The goal is to **minimize a loss function** using **gradient descent**.
*   Training is an **iterative process** of forward pass, loss calculation, backpropagation, and weight updates.
*   The **learning rate** is a critical hyperparameter.
*   Understanding backpropagation is foundational for understanding more advanced deep learning techniques.

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=mc979OhitAg) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=M0mx8S05v60) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=APPIZ2S8YmY) |
