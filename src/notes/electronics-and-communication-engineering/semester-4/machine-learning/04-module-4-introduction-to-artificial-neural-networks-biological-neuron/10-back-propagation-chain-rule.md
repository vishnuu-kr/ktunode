---
title: "Back propagation- Chain rule"
subject: "MACHINE LEARNING"
module: "Module 4: Introduction to Artificial Neural Networks: Biological Neuron"
branch: "Electronics and Communication Engineering"
semester: 4
topicId: "68a5c45eb09ce205780fe63e"
status: "completed"
scrapedAt: "2026-05-23T17:50:30.361Z"
---
# Machine Learning: Module 4 - Introduction to Artificial Neural Networks: Biological Neuron

## Topic: Backpropagation - The Chain Rule

---

### 1. Learning Outcomes Addressed:

This topic directly supports the following learning outcomes:

*   **Understanding the fundamental mechanisms of artificial neural networks:** Specifically, how errors are propagated and used to update model parameters.
*   **Applying optimization techniques to neural networks:** Backpropagation is the cornerstone of training most neural networks.
*   **Analyzing the behavior of neural networks:** Understanding backpropagation helps in debugging and interpreting network performance.

---

### 2. Key Concepts and Definitions:

#### 2.1. The Goal of Neural Network Training:

The primary objective when training a neural network is to **minimize a loss function** (also known as a cost function or error function). This function quantifies how well the network's predictions match the actual target values. Common loss functions include:

*   **Mean Squared Error (MSE)** for regression problems.
*   **Cross-Entropy Loss** for classification problems.

#### 2.2. Gradient Descent: The Optimization Engine

To minimize the loss function, we use an optimization algorithm called **Gradient Descent**. Gradient Descent iteratively adjusts the network's **weights (W)** and **biases (b)** in the direction that reduces the loss.

The update rule for a parameter $\theta$ (which could be a weight or bias) is:

$\theta_{new} = \theta_{old} - \eta \frac{\partial L}{\partial \theta}$

Where:
*   $\theta$ represents a parameter (weight or bias).
*   $L$ is the loss function.
*   $\frac{\partial L}{\partial \theta}$ is the **gradient** of the loss function with respect to that parameter. This tells us how much the loss changes for a small change in the parameter.
*   $\eta$ (eta) is the **learning rate**, a hyperparameter that controls the step size of the update.

#### 2.3. The Challenge: Calculating Gradients in Deep Networks

For simple models, calculating gradients can be straightforward. However, in a neural network, the loss function is a complex, composite function of the network's parameters (weights and biases) that are layered across multiple processing units.

Consider a simple feedforward neural network:

*   **Input Layer:** Receives the data.
*   **Hidden Layer(s):** Perform non-linear transformations.
*   **Output Layer:** Produces the final prediction.

The loss is computed based on the output layer's prediction, which in turn depends on the hidden layers, and so on, all the way back to the input layer and the parameters within each layer. This nested structure is where the **Chain Rule** becomes indispensable.

#### 2.4. The Chain Rule: The Foundation of Backpropagation

**The Chain Rule** is a fundamental concept in differential calculus that allows us to compute the derivative of a composite function.

**Definition:** If $y$ is a function of $u$, and $u$ is a function of $x$, then the derivative of $y$ with respect to $x$ is given by:

$\frac{dy}{dx} = \frac{dy}{du} \cdot \frac{du}{dx}$

**Generalization to Multiple Variables:** If $y$ is a function of $u_1, u_2, ..., u_n$, and each $u_i$ is a function of $x$, then the derivative of $y$ with respect to $x$ is:

$\frac{dy}{dx} = \frac{\partial y}{\partial u_1} \frac{du_1}{dx} + \frac{\partial y}{\partial u_2} \frac{du_2}{dx} + ... + \frac{\partial y}{\partial u_n} \frac{du_n}{dx}$

**In the context of neural networks:** We want to compute $\frac{\partial L}{\partial W}$ and $\frac{\partial L}{\partial b}$ for every weight $W$ and bias $b$ in the network. Since $L$ depends on the output, which depends on the activations of the previous layer, which depend on the weights and biases of that layer, and so on, we have a chain of dependencies.

#### 2.5. Backpropagation: Applying the Chain Rule

**Backpropagation** is an algorithm that leverages the Chain Rule to efficiently compute the gradients of the loss function with respect to all weights and biases in a neural network. It works by:

1.  **Forward Pass:** The input data is fed through the network, layer by layer, to produce an output prediction. The intermediate values (activations) at each layer are stored.
2.  **Loss Calculation:** The loss function is computed by comparing the network's prediction with the actual target.
3.  **Backward Pass (Backpropagation):**
    *   The gradient of the loss with respect to the output layer's activations is calculated.
    *   Using the Chain Rule, this gradient is propagated backward through the network, layer by layer.
    *   At each layer, the gradients of the loss with respect to the layer's weights and biases are computed, based on the gradients received from the next layer and the layer's activations from the forward pass.
    *   This process continues until the gradients for all parameters in the network are computed.
4.  **Parameter Update:** The computed gradients are used to update the weights and biases using Gradient Descent.

---

### 3. How Backpropagation Works (Illustrative Example - Simple Neural Network)

Let's consider a very simple neural network with:

*   One input neuron ($x$)
*   One hidden neuron ($h$)
*   One output neuron ($y_{pred}$)

And a single neuron model:

$z = Wx + b$
$a = \sigma(z)$ (where $\sigma$ is an activation function like sigmoid)
$y_{pred} = a$ (for simplicity, no further layer)

Assume a loss function, e.g., squared error: $L = \frac{1}{2}(y_{true} - y_{pred})^2$

We want to find $\frac{\partial L}{\partial W}$ and $\frac{\partial L}{\partial b}$.

**Forward Pass:**
1.  $z = Wx + b$
2.  $a = \sigma(z)$
3.  $y_{pred} = a$
4.  $L = \frac{1}{2}(y_{true} - y_{pred})^2$

**Backward Pass (Applying Chain Rule):**

1.  **Gradient of Loss w.r.t. $y_{pred}$:**
    $\frac{\partial L}{\partial y_{pred}} = \frac{\partial}{\partial y_{pred}} \left( \frac{1}{2}(y_{true} - y_{pred})^2 \right) = -(y_{true} - y_{pred}) = y_{pred} - y_{true}$

2.  **Gradient of Loss w.r.t. activation $a$:**
    Since $y_{pred} = a$, $\frac{\partial L}{\partial a} = \frac{\partial L}{\partial y_{pred}} = y_{pred} - y_{true}$

3.  **Gradient of Loss w.r.t. $z$:**
    Here we need the derivative of the activation function, $\sigma'(z)$.
    Using the Chain Rule:
    $\frac{\partial L}{\partial z} = \frac{\partial L}{\partial a} \cdot \frac{\partial a}{\partial z}$
    $\frac{\partial L}{\partial z} = (y_{pred} - y_{true}) \cdot \sigma'(z)$

4.  **Gradient of Loss w.r.t. $W$:**
    Using the Chain Rule:
    $\frac{\partial L}{\partial W} = \frac{\partial L}{\partial z} \cdot \frac{\partial z}{\partial W}$
    Since $z = Wx + b$, $\frac{\partial z}{\partial W} = x$.
    So, $\frac{\partial L}{\partial W} = \frac{\partial L}{\partial z} \cdot x$
    $\frac{\partial L}{\partial W} = (y_{pred} - y_{true}) \cdot \sigma'(z) \cdot x$

5.  **Gradient of Loss w.r.t. $b$:**
    Using the Chain Rule:
    $\frac{\partial L}{\partial b} = \frac{\partial L}{\partial z} \cdot \frac{\partial z}{\partial b}$
    Since $z = Wx + b$, $\frac{\partial z}{\partial b} = 1$.
    So, $\frac{\partial L}{\partial b} = \frac{\partial L}{\partial z} \cdot 1$
    $\frac{\partial L}{\partial b} = (y_{pred} - y_{true}) \cdot \sigma'(z)$

**Parameter Update:**
$W_{new} = W_{old} - \eta \cdot \frac{\partial L}{\partial W}$
$b_{new} = b_{old} - \eta \cdot \frac{\partial L}{\partial b}$

This simple example demonstrates how the chain rule is applied layer by layer, starting from the loss function and propagating the error gradient backward.

**Reference:** This process is conceptually explained in Aurelien Geron's "Hands-On Machine Learning with Scikit-Learn, Keras, and TensorFlow" (Chapter 10) and Magnus Ekman's "Learning Deep Learning" (Chapter 2 & 3).

---

### 4. Backpropagation in Multi-Layer Networks

In a network with multiple layers, the process becomes iterative. For a layer $l$:

*   The gradient of the loss with respect to the output of layer $l$ is denoted as $\frac{\partial L}{\partial a^{(l)}}$.
*   This gradient is computed from the gradients of the next layer $l+1$: $\frac{\partial L}{\partial a^{(l)}} = \frac{\partial L}{\partial z^{(l+1)}} \cdot \frac{\partial z^{(l+1)}}{\partial a^{(l)}}$.
*   The derivative $\frac{\partial z^{(l+1)}}{\partial a^{(l)}}$ depends on the weights connecting layer $l$ to layer $l+1$. Specifically, if layer $l+1$ receives input $a^{(l)}$ via weights $W^{(l+1)}$, then $z^{(l+1)} = W^{(l+1)}a^{(l)} + b^{(l+1)}$, and $\frac{\partial z^{(l+1)}}{\partial a^{(l)}} = (W^{(l+1)})^T$.
*   Once $\frac{\partial L}{\partial a^{(l)}}$ is computed, the gradient with respect to the pre-activation $z^{(l)}$ is: $\frac{\partial L}{\partial z^{(l)}} = \frac{\partial L}{\partial a^{(l)}} \cdot \sigma'(z^{(l)})$.
*   Finally, the gradients with respect to the weights and biases of layer $l$ are computed:
    *   $\frac{\partial L}{\partial W^{(l)}} = \frac{\partial L}{\partial z^{(l)}} \cdot \frac{\partial z^{(l)}}{\partial W^{(l)}} = \frac{\partial L}{\partial z^{(l)}} \cdot (a^{(l-1)})^T$ (where $a^{(0)}$ is the input)
    *   $\frac{\partial L}{\partial b^{(l)}} = \frac{\partial L}{\partial z^{(l)}} \cdot \frac{\partial z^{(l)}}{\partial b^{(l)}} = \frac{\partial L}{\partial z^{(l)}}$

This process is continued for each layer, moving backward from the output layer to the input layer.

**Key Idea:** The gradient at a particular neuron is the product of the gradient flowing into it from the subsequent layer and the derivative of the neuron's activation function.

**Reference:** Andrew Ng's CS229 lecture notes provide a detailed mathematical derivation of backpropagation, which is highly recommended for a deeper understanding. "Pattern Recognition and Machine Learning" by Bishop also covers the mathematical underpinnings.

---

### 5. Backpropagation and Course Outcomes:

*   **CO1 (Analyze and apply supervised and unsupervised ML techniques):** Backpropagation is the core algorithm for training supervised learning models like neural networks. Understanding it is crucial for applying these techniques effectively. (Knowledge Level: K4 - Analyzing implies understanding the "how and why")
*   **CO2 (Develop, train, and optimize regression and classification models):** Backpropagation is the mechanism by which regression and classification models (when implemented as neural networks) are trained and optimized. (Knowledge Level: K3 - Applying and training directly involves backpropagation)

---

### 6. Important Points to Remember:

*   **Chain Rule is Fundamental:** Backpropagation is simply an efficient application of the Chain Rule for computing gradients in neural networks.
*   **Error Propagation:** The algorithm propagates the error signal backward from the output layer to the input layer.
*   **Gradient Calculation:** The goal is to calculate $\frac{\partial L}{\partial W}$ and $\frac{\partial L}{\partial b}$ for all parameters.
*   **Learning Rate:** The learning rate ($\eta$) is crucial for controlling the convergence of gradient descent.
*   **Activation Function Derivative:** The derivative of the activation function at each neuron is a key component in calculating the backpropagated gradient.
*   **Efficiency:** Backpropagation is significantly more efficient than numerically approximating gradients.
*   **Implementation:** In practice, deep learning frameworks (like TensorFlow and PyTorch) automatically implement backpropagation using automatic differentiation.

---

### 7. Practice Questions & Exercises:

**Question 1:**
Consider a single neuron with a sigmoid activation function $\sigma(z) = \frac{1}{1+e^{-z}}$ and a squared error loss $L = \frac{1}{2}(y_{true} - y_{pred})^2$. If $y_{pred} = \sigma(Wx + b)$, and at a specific step $x=2$, $W=1$, $b=0.5$, $y_{true}=1$, and $\sigma'(z)|_{z=z_0} = 0.24$, calculate the gradients $\frac{\partial L}{\partial W}$ and $\frac{\partial L}{\partial b}$.

**Answer 1:**

First, calculate $z$:
$z = Wx + b = (1)(2) + 0.5 = 2.5$

Next, calculate $y_{pred}$:
$y_{pred} = \sigma(2.5)$. We don't strictly need the value of $y_{pred}$ itself for the gradients, but let's assume it's computed.

Now, let's compute the gradients using the formulas derived:
$\frac{\partial L}{\partial y_{pred}} = y_{pred} - y_{true}$

We are given $\sigma'(z)|_{z=2.5} = 0.24$. This means $\frac{\partial a}{\partial z}|_{z=2.5} = 0.24$.

$\frac{\partial L}{\partial z} = \frac{\partial L}{\partial y_{pred}} \cdot \frac{\partial y_{pred}}{\partial z} = \frac{\partial L}{\partial y_{pred}} \cdot \sigma'(z)$

$\frac{\partial L}{\partial W} = \frac{\partial L}{\partial z} \cdot \frac{\partial z}{\partial W} = \frac{\partial L}{\partial z} \cdot x$
$\frac{\partial L}{\partial b} = \frac{\partial L}{\partial z} \cdot \frac{\partial z}{\partial b} = \frac{\partial L}{\partial z} \cdot 1$

Let's work backward from the given derivative:
$\frac{\partial L}{\partial z} = (y_{pred} - y_{true}) \cdot \sigma'(z)$

We are given $\sigma'(z)|_{z=2.5} = 0.24$.
The error term $\frac{\partial L}{\partial y_{pred}} = y_{pred} - y_{true}$. Let's assume $y_{pred}$ was calculated as $\sigma(2.5) \approx 0.924$.
So, $\frac{\partial L}{\partial y_{pred}} \approx 0.924 - 1 = -0.076$.

Then, $\frac{\partial L}{\partial z} = (-0.076) \cdot (0.24) \approx -0.01824$.

Now, calculate the parameter gradients:
$\frac{\partial L}{\partial W} = \frac{\partial L}{\partial z} \cdot x = (-0.01824) \cdot (2) \approx -0.03648$
$\frac{\partial L}{\partial b} = \frac{\partial L}{\partial z} = -0.01824$

**Question 2:**
Explain why the Chain Rule is essential for training deep neural networks, in your own words.

**Answer 2:**
The Chain Rule is essential for training deep neural networks because these networks are made up of many layers, and each layer's output depends on the previous layer's output, which in turn depends on the weights and biases of that layer. The loss function at the end of the network is a complex, nested function of all these parameters. To adjust the weights and biases to minimize the loss, we need to know how a small change in each parameter affects the final loss. The Chain Rule provides a systematic way to break down this complex dependency into a series of simpler derivatives, allowing us to calculate these crucial gradients layer by layer, working backward from the output. Without it, calculating these gradients would be computationally intractable or impossible.

**Question 3 (Conceptual):**
If you were to implement backpropagation from scratch, what are the key components you would need to calculate for each layer?

**Answer 3:**
For each layer during backpropagation, you would need to calculate:
1.  **The gradient of the loss with respect to the layer's output activations ($\frac{\partial L}{\partial a^{(l)}}$):** This is typically derived from the gradient calculated for the *next* layer (or the loss directly for the output layer).
2.  **The gradient of the loss with respect to the layer's pre-activation values ($\frac{\partial L}{\partial z^{(l)}}$):** This is calculated by multiplying the gradient from step 1 by the derivative of the layer's activation function at that neuron ($\sigma'(z^{(l)})$).
3.  **The gradient of the loss with respect to the layer's weights ($\frac{\partial L}{\partial W^{(l)}}$):** This is calculated by multiplying the gradient from step 2 by the transpose of the activations from the *previous* layer ($(a^{(l-1)})^T$).
4.  **The gradient of the loss with respect to the layer's biases ($\frac{\partial L}{\partial b^{(l)}}$):** This is simply equal to the gradient from step 2 (since $\frac{\partial z}{\partial b} = 1$).

These calculated gradients are then used to update the parameters, and the gradient $\frac{\partial L}{\partial z^{(l)}}$ is passed backward to the preceding layer.

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=33vbFFFn04k) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=Q-tL8_628gE) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=APPIZ2S8YmY) |


### 8. Further Reading/References:

*   **Hands-On Machine Learning with Scikit-Learn, Keras, and TensorFlow (2nd Edition) by Aurélien Géron:** Chapters 10 and 11 provide excellent practical explanations and code examples of neural networks and backpropagation.
*   **Learning Deep Learning by Magnus Ekman:** Chapters 2 and 3 offer a clear mathematical foundation for backpropagation.
*   **CS229 Lecture Notes by Andrew Ng and Tengyu Ma:** For a rigorous mathematical treatment of backpropagation, these notes are invaluable.
*   **Pattern Recognition and Machine Learning by C.M. Bishop:** Provides a theoretical grounding in neural networks and gradient-based learning.

This topic is fundamental to understanding how neural networks learn. By mastering the Chain Rule and its application in backpropagation, you unlock the ability to train complex models for a wide range of machine learning tasks.