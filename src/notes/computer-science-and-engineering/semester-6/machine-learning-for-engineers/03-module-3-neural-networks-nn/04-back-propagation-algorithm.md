---
title: "Back propagation algorithm."
subject: "MACHINE LEARNING FOR ENGINEERS"
module: "Module 3: Neural Networks (NN) "
branch: "Computer Science and Engineering"
semester: 6
topicId: "684162780fc9aa1fdbc8bf56"
status: "completed"
scrapedAt: "2026-05-20T16:55:06.873Z"
---
# MACHINE LEARNING FOR ENGINEERS - Module 3: Neural Networks (NN)

## Topic: Backpropagation Algorithm

---

### **1. Introduction to Backpropagation**

*   **What is Backpropagation?**
    *   Backpropagation (short for "backward propagation of errors") is the **cornerstone algorithm for training artificial neural networks (ANNs)**.
    *   It's an iterative process that aims to **minimize the error** between the network's predicted output and the actual target output.
    *   It achieves this by **adjusting the weights and biases** of the network through **gradient descent**.

*   **Why is it crucial?**
    *   Neural networks learn by adjusting their internal parameters (weights and biases).
    *   Backpropagation provides a systematic and efficient way to determine **how much each parameter contributes to the overall error** and in **which direction** to adjust it to reduce that error.

*   **Core Idea:**
    *   **Forward Pass:** Input data is passed through the network from input layer to output layer, producing a prediction.
    *   **Calculate Error:** The difference between the prediction and the actual target is calculated using a loss function.
    *   **Backward Pass (Backpropagation):** The error is propagated backward through the network, layer by layer.
    *   **Gradient Calculation:** The algorithm calculates the gradient (slope) of the loss function with respect to each weight and bias. This gradient indicates the direction and magnitude of change needed to reduce the error.
    *   **Weight Update:** Weights and biases are updated using an optimization algorithm (typically gradient descent) to move towards the minimum of the loss function.

---

### **2. Key Concepts and Definitions**

*   **Neural Network Architecture:**
    *   **Neurons (Nodes):** Basic computational units.
    *   **Layers:**
        *   **Input Layer:** Receives the raw input data.
        *   **Hidden Layers:** Intermediate layers that perform computations.
        *   **Output Layer:** Produces the network's prediction.
    *   **Weights ($W_{ij}$):** Parameters that determine the strength of the connection between neurons.
    *   **Biases ($b_j$):** Additional parameters that shift the activation function.
    *   **Activation Function ($\sigma(z)$):** A non-linear function applied to the weighted sum of inputs plus bias, introducing non-linearity into the network. Common examples: Sigmoid, ReLU, Tanh.
    *   **Weighted Sum ($z_j$):** The sum of inputs multiplied by their corresponding weights, plus the bias: $z_j = \sum_i (W_{ij} \cdot a_i) + b_j$, where $a_i$ is the activation of the previous layer neuron.
    *   **Activation Output ($a_j$):** The output of a neuron after applying the activation function: $a_j = \sigma(z_j)$.

*   **Loss Function (Cost Function, $J$):**
    *   Measures the discrepancy between the network's predicted output ($\hat{y}$) and the true target output ($y$).
    *   **Examples:**
        *   **Mean Squared Error (MSE):** For regression problems. $J = \frac{1}{N} \sum_{i=1}^N (y_i - \hat{y}_i)^2$
        *   **Cross-Entropy Loss:** For classification problems. $J = -\frac{1}{N} \sum_{i=1}^N [y_i \log(\hat{y}_i) + (1-y_i) \log(1-\hat{y}_i)]$ (for binary classification)

*   **Gradient Descent:**
    *   An optimization algorithm used to find the minimum of a function.
    *   It iteratively moves in the direction of the **negative gradient** of the function.
    *   **Update Rule:** $W_{new} = W_{old} - \alpha \frac{\partial J}{\partial W_{old}}$, where $\alpha$ is the **learning rate**.

*   **Chain Rule of Calculus:**
    *   The mathematical foundation of backpropagation.
    *   It allows us to compute the derivative of a composite function by breaking it down into derivatives of its individual components.
    *   If $y = f(u)$ and $u = g(x)$, then $\frac{dy}{dx} = \frac{dy}{du} \cdot \frac{du}{dx}$.

*   **Error Signal (Delta, $\delta$):**
    *   A crucial term in backpropagation, representing the error contribution of a specific neuron.
    *   It's the derivative of the loss function with respect to the weighted sum ($z$) of a neuron: $\delta = \frac{\partial J}{\partial z}$.

---

### **3. The Backpropagation Algorithm: Step-by-Step**

Let's consider a simple feedforward neural network with one hidden layer.

**Network Structure:**
Input Layer ($L_1$) -> Hidden Layer ($L_2$) -> Output Layer ($L_3$)

**Notation:**
*   $x^{(l)}$: Input to layer $l$.
*   $W^{(l)}$: Weight matrix for layer $l$.
*   $b^{(l)}$: Bias vector for layer $l$.
*   $z^{(l)}$: Weighted sum before activation in layer $l$.
*   $a^{(l)}$: Activation output of layer $l$.
*   $y$: True target output.
*   $\hat{y}$: Predicted output.
*   $J$: Loss function.
*   $\sigma$: Activation function.
*   $\sigma'$: Derivative of the activation function.

---

**Step 1: Forward Pass**

1.  **Input Layer ($L_1$):** $a^{(1)} = x$ (input data)
2.  **Hidden Layer ($L_2$):**
    *   Weighted sum: $z^{(2)} = W^{(2)} a^{(1)} + b^{(2)}$
    *   Activation: $a^{(2)} = \sigma(z^{(2)})$
3.  **Output Layer ($L_3$):**
    *   Weighted sum: $z^{(3)} = W^{(3)} a^{(2)} + b^{(3)}$
    *   Activation (Prediction): $\hat{y} = a^{(3)} = \sigma(z^{(3)})$

**Step 2: Calculate the Loss**

*   Compute the error using the chosen loss function: $J = \text{Loss}(y, \hat{y})$.

**Step 3: Backward Pass (Propagate the Error)**

This is where we use the chain rule to calculate gradients.

1.  **Output Layer ($L_3$):**
    *   Calculate the error signal ($\delta^{(3)}$) for the output layer. This is the derivative of the loss function with respect to the weighted sum $z^{(3)}$.
        *   For MSE loss ($J = \frac{1}{2}(y - \hat{y})^2$):
            $\delta^{(3)} = \frac{\partial J}{\partial z^{(3)}} = \frac{\partial J}{\partial \hat{y}} \cdot \frac{\partial \hat{y}}{\partial z^{(3)}}$
            $\frac{\partial J}{\partial \hat{y}} = -(y - \hat{y})$
            $\frac{\partial \hat{y}}{\partial z^{(3)}} = \sigma'(z^{(3)})$ (derivative of activation function)
            Therefore, $\delta^{(3)} = -(y - \hat{y}) \odot \sigma'(z^{(3)})$ (element-wise product)
        *   For Cross-Entropy loss (for a single output neuron):
            $\delta^{(3)} = \frac{\partial J}{\partial z^{(3)}} = \hat{y} - y$

    *   Calculate the gradients for $W^{(3)}$ and $b^{(3)}$:
        *   $\frac{\partial J}{\partial W^{(3)}} = \delta^{(3)} (a^{(2)})^T$
        *   $\frac{\partial J}{\partial b^{(3)}} = \delta^{(3)}$

2.  **Hidden Layer ($L_2$):**
    *   Propagate the error signal from the output layer back to the hidden layer. The error signal for the hidden layer ($\delta^{(2)}$) is calculated based on the error signal from the next layer ($L_3$) and the weights connecting them.
        *   $\delta^{(2)} = \frac{\partial J}{\partial z^{(2)}} = \frac{\partial J}{\partial z^{(3)}} \cdot \frac{\partial z^{(3)}}{\partial a^{(2)}} \cdot \frac{\partial a^{(2)}}{\partial z^{(2)}}$
        *   $\frac{\partial J}{\partial z^{(3)}} = \delta^{(3)}$
        *   $\frac{\partial z^{(3)}}{\partial a^{(2)}} = (W^{(3)})^T$ (transposed weight matrix from the next layer)
        *   $\frac{\partial a^{(2)}}{\partial z^{(2)}} = \sigma'(z^{(2)})$
        *   Therefore, $\delta^{(2)} = ((W^{(3)})^T \delta^{(3)}) \odot \sigma'(z^{(2)})$

    *   Calculate the gradients for $W^{(2)}$ and $b^{(2)}$:
        *   $\frac{\partial J}{\partial W^{(2)}} = \delta^{(2)} (a^{(1)})^T$
        *   $\frac{\partial J}{\partial b^{(2)}} = \delta^{(2)}$

**Step 4: Update Weights and Biases**

*   Apply the gradient descent update rule for each parameter:
    *   $W^{(3)}_{new} = W^{(3)}_{old} - \alpha \frac{\partial J}{\partial W^{(3)}}$
    *   $b^{(3)}_{new} = b^{(3)}_{old} - \alpha \frac{\partial J}{\partial b^{(3)}}$
    *   $W^{(2)}_{new} = W^{(2)}_{old} - \alpha \frac{\partial J}{\partial W^{(2)}}$
    *   $b^{(2)}_{new} = b^{(2)}_{old} - \alpha \frac{\partial J}{\partial b^{(2)}}$

**Step 5: Repeat**

*   Repeat steps 1-4 for multiple training examples (or mini-batches) and for a specified number of epochs (iterations over the entire dataset) until the loss converges to an acceptable level.

---

### **4. Example: A Single Neuron in the Output Layer**

Let's assume a simple network with one input neuron, one hidden neuron, and one output neuron.

*   **Input:** $x = 0.5$
*   **Target:** $y = 1$
*   **Activation Function:** Sigmoid $\sigma(z) = \frac{1}{1 + e^{-z}}$
*   **Derivative of Sigmoid:** $\sigma'(z) = \sigma(z)(1 - \sigma(z))$
*   **Loss Function:** MSE $J = \frac{1}{2}(y - \hat{y})^2$

**Network Parameters:**
*   Weight from input to hidden: $W^{(2)}_{11} = 0.3$
*   Bias for hidden neuron: $b^{(2)}_1 = 0.1$
*   Weight from hidden to output: $W^{(3)}_{11} = 0.4$
*   Bias for output neuron: $b^{(3)}_1 = 0.2$
*   Learning Rate: $\alpha = 0.1$

**Forward Pass:**

1.  **Hidden Layer:**
    *   $z^{(2)}_1 = W^{(2)}_{11} x + b^{(2)}_1 = 0.3 \times 0.5 + 0.1 = 0.15 + 0.1 = 0.25$
    *   $a^{(2)}_1 = \sigma(0.25) = \frac{1}{1 + e^{-0.25}} \approx \frac{1}{1 + 0.7788} \approx 0.5623$

2.  **Output Layer:**
    *   $z^{(3)}_1 = W^{(3)}_{11} a^{(2)}_1 + b^{(3)}_1 = 0.4 \times 0.5623 + 0.2 = 0.2249 + 0.2 = 0.4249$
    *   $\hat{y} = a^{(3)}_1 = \sigma(0.4249) = \frac{1}{1 + e^{-0.4249}} \approx \frac{1}{1 + 0.6538} \approx 0.6057$

**Calculate Loss:**

*   $J = \frac{1}{2}(y - \hat{y})^2 = \frac{1}{2}(1 - 0.6057)^2 = \frac{1}{2}(0.3943)^2 \approx \frac{1}{2}(0.1555) \approx 0.07775$

**Backward Pass (Calculate Gradients for the Output Layer):**

1.  **Error Signal for Output Layer ($\delta^{(3)}_1$):**
    *   $\frac{\partial J}{\partial \hat{y}} = -(y - \hat{y}) = -(1 - 0.6057) = -0.3943$
    *   $\sigma'(z^{(3)}_1) = \sigma(0.4249)(1 - \sigma(0.4249)) \approx 0.6057 \times (1 - 0.6057) \approx 0.6057 \times 0.3943 \approx 0.2389$
    *   $\delta^{(3)}_1 = \frac{\partial J}{\partial \hat{y}} \cdot \sigma'(z^{(3)}_1) = -0.3943 \times 0.2389 \approx -0.09424$

2.  **Gradients for Output Layer Parameters:**
    *   $\frac{\partial J}{\partial W^{(3)}_{11}} = \delta^{(3)}_1 \times a^{(2)}_1 = -0.09424 \times 0.5623 \approx -0.05304$
    *   $\frac{\partial J}{\partial b^{(3)}_1} = \delta^{(3)}_1 = -0.09424$

**(Note: For a network with only one output neuron, the $\delta^{(2)}$ calculation would be simpler as there's only one weight connection to consider.)**

**Update Weights and Biases (Output Layer):**

*   $W^{(3)}_{11, new} = W^{(3)}_{11, old} - \alpha \frac{\partial J}{\partial W^{(3)}_{11}} = 0.4 - 0.1 \times (-0.05304) = 0.4 + 0.005304 = 0.405304$
*   $b^{(3)}_{1, new} = b^{(3)}_{1, old} - \alpha \frac{\partial J}{\partial b^{(3)}_{1}} = 0.2 - 0.1 \times (-0.09424) = 0.2 + 0.009424 = 0.209424$

*(The process would continue by backpropagating to the hidden layer to update $W^{(2)}$ and $b^{(2)}$ if there were more complex interactions, or if we were calculating the overall gradient for the entire loss function w.r.t. all parameters.)*

---

### **5. Handling Multiple Neurons and Layers**

*   **Vectorization:** Backpropagation is typically implemented using matrix operations (vectorization) for efficiency.
    *   Instead of processing one neuron at a time, calculations are done on entire layers.
    *   Weight matrices ($W^{(l)}$) and bias vectors ($b^{(l)}$) operate on activation vectors ($a^{(l-1)}$) to produce weighted sum vectors ($z^{(l)}$).
    *   Error signals ($\delta^{(l)}$) become vectors.
    *   Gradients become matrices.

*   **General Update Rule for $\delta^{(l)}$:**
    *   For the output layer ($L$): $\delta^{(L)} = (a^{(L)} - y) \odot \sigma'(z^{(L)})$ (for cross-entropy) or $\delta^{(L)} = (a^{(L)} - y) \odot \sigma'(z^{(L)})$ (for MSE, with slight adjustment for $\frac{1}{2}$ factor in loss).
    *   For hidden layers $l < L$: $\delta^{(l)} = ((W^{(l+1)})^T \delta^{(l+1)}) \odot \sigma'(z^{(l)})$

*   **General Gradient Calculation:**
    *   $\frac{\partial J}{\partial W^{(l)}} = \delta^{(l)} (a^{(l-1)})^T$
    *   $\frac{\partial J}{\partial b^{(l)}} = \delta^{(l)}$

---

### **6. Optimization Algorithms and Learning Rate**

*   **Learning Rate ($\alpha$):**
    *   **Crucial hyperparameter.**
    *   Controls the step size during gradient descent.
    *   **Too high:** May overshoot the minimum, leading to divergence.
    *   **Too low:** Slow convergence.
    *   **Strategies:**
        *   **Fixed Learning Rate:** Constant $\alpha$ throughout training.
        *   **Learning Rate Decay:** Gradually reducing $\alpha$ over epochs (e.g., $1/t$, exponential decay).
        *   **Adaptive Learning Rate Methods:** Adam, RMSprop, Adagrad adjust the learning rate per parameter based on past gradients.

*   **Stochastic Gradient Descent (SGD):** Updates weights after processing each training example.
*   **Mini-batch Gradient Descent:** Updates weights after processing a small batch of training examples. More stable than SGD and computationally efficient.
*   **Batch Gradient Descent:** Updates weights after processing the entire training dataset. Slow but provides the true gradient.

---

### **7. Activation Functions and their Derivatives**

Backpropagation relies heavily on the derivative of the activation function.

| Activation Function | Formula $\sigma(z)$         | Derivative $\sigma'(z)$        | Notes                                   |
| :------------------ | :-------------------------- | :----------------------------- | :-------------------------------------- |
| **Sigmoid**         | $\frac{1}{1+e^{-z}}$        | $\sigma(z)(1 - \sigma(z))$     | Prone to vanishing gradients.           |
| **Tanh (Hyperbolic Tangent)** | $\frac{e^z - e^{-z}}{e^z + e^{-z}}$ | $1 - \tanh^2(z)$              | Similar to sigmoid, zero-centered.      |
| **ReLU (Rectified Linear Unit)** | $\max(0, z)$                | $1 \text{ if } z > 0, 0 \text{ if } z \le 0$ | Avoids vanishing gradients for $z>0$. |

*   **Vanishing Gradient Problem:** For activation functions like Sigmoid and Tanh, their derivatives are small when the input is very large or very small. This causes the gradients to shrink as they propagate backward through many layers, making it difficult for earlier layers to learn. ReLU helps mitigate this.

---

### **8. Practice Questions and Exercises**

**Question 1:**
What is the primary goal of the backpropagation algorithm?

**Question 2:**
Which fundamental calculus rule is the basis for backpropagation?

**Question 3:**
Consider a single output neuron with MSE loss $J = \frac{1}{2}(y - \hat{y})^2$ and a Sigmoid activation function. If the error term for the output neuron is $\delta^{(L)} = -0.5$ and the derivative of the activation function at that neuron is $\sigma'(z^{(L)}) = 0.2$, what is the value of $\frac{\partial J}{\partial z^{(L)}}$?

**Question 4:**
If the error signal for a layer $l+1$ is $\delta^{(l+1)}$ and the transpose of the weight matrix connecting layer $l$ to $l+1$ is $(W^{(l+1)})^T$, and the derivative of the activation function for layer $l$ is $\sigma'(z^{(l)})$, write the formula for the error signal $\delta^{(l)}$ of a hidden layer $l$.

**Question 5:**
Explain the impact of a very high learning rate on the training of a neural network using backpropagation.

---

### **9. Answers to Practice Questions**

**Answer 1:**
The primary goal of the backpropagation algorithm is to **minimize the error** between the network's predicted output and the actual target output by **adjusting the network's weights and biases** through gradient descent.

**Answer 2:**
The fundamental calculus rule that is the basis for backpropagation is the **Chain Rule**.

**Answer 3:**
We know that $\delta^{(L)} = \frac{\partial J}{\partial z^{(L)}}$.
Given $\delta^{(L)} = -0.5$, the value of $\frac{\partial J}{\partial z^{(L)}}$ is **-0.5**.
*(Note: The provided derivative of the activation function, $\sigma'(z^{(L)}) = 0.2$, would be used to calculate the error term $\delta^{(L)}$ itself if we were given $\frac{\partial J}{\partial \hat{y}}$, i.e., $\delta^{(L)} = \frac{\partial J}{\partial \hat{y}} \cdot \sigma'(z^{(L)})$. In this question, $\delta^{(L)}$ is directly given as the quantity we need to find.)*

**Answer 4:**
The error signal $\delta^{(l)}$ for a hidden layer $l$ is calculated as:
$\delta^{(l)} = ((W^{(l+1)})^T \delta^{(l+1)}) \odot \sigma'(z^{(l)})$
where $\odot$ denotes element-wise multiplication.

**Answer 5:**
A very high learning rate can cause the training process to **overshoot the minimum of the loss function**. Instead of converging towards the optimal weights, the updates might jump back and forth across the minimum, or even diverge, leading to **unstable training** and preventing the network from learning effectively.

---

### **10. Important Points to Remember**

*   **Backpropagation is an iterative process:** It requires multiple passes through the data.
*   **Gradient Descent is the engine:** Backpropagation calculates the gradients needed for gradient descent.
*   **The Chain Rule is the math:** It enables the backward propagation of errors.
*   **Error signals ($\delta$) are key:** They quantify the error contribution of each neuron.
*   **Activation function derivatives are essential:** They are used in calculating error signals.
*   **Learning rate is a critical hyperparameter:** Its value significantly impacts convergence.
*   **Vectorization is vital for efficiency:** Implement backpropagation using matrix operations.
*   **Vanishing/Exploding Gradients:** Be aware of these issues, especially with deep networks, and consider using ReLU or other advanced activation functions and normalization techniques.
*   **Loss function choice matters:** Select a loss function appropriate for the task (regression vs. classification).
