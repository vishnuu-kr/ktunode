---
title: "Training CNNs:-Initialization   Back-propagation"
subject: "DEEP LEARNING TECHNIQUES"
module: "Module 2: Loss functions"
branch: "Electronics and Communication Engineering"
semester: 7
topicId: "68a5c461b09ce205780ff2d2"
status: "completed"
scrapedAt: "2026-05-23T18:06:05.993Z"
---
# DEEP LEARNING TECHNIQUES: Module 2: Loss Functions

## Topic: Training CNNs: Initialization & Back-propagation

This module delves into two critical aspects of training Convolutional Neural Networks (CNNs): **Initialization** and **Back-propagation**. Effective initialization sets the stage for successful training by preventing vanishing or exploding gradients, while back-propagation is the fundamental algorithm that allows neural networks to learn from data.

---

### 1. Initialization Strategies for CNNs

**Learning Outcomes Covered:**
*   Analyze and differentiate between various neural network components. (CO1)
*   Develop and implement strategies for training neural networks. (CO2)

**Key Concepts and Definitions:**

*   **Initialization:** The process of setting the initial values of the weights and biases in a neural network before training begins. The choice of initialization strategy can significantly impact convergence speed, stability, and the final performance of the model.
*   **Vanishing Gradients:** A phenomenon where gradients become extremely small during back-propagation, especially in deep networks. This prevents earlier layers from learning effectively.
*   **Exploding Gradients:** The opposite of vanishing gradients, where gradients become extremely large, leading to unstable training and preventing convergence.

**Why is Initialization Important?**

*   **Breaking Symmetry:** If all weights are initialized to the same value, all neurons in a layer will compute the same gradient and update in the same way, effectively making them redundant. Random initialization breaks this symmetry.
*   **Gradient Stability:** Poor initialization can lead to vanishing or exploding gradients, hindering the learning process.
*   **Faster Convergence:** A good initialization can help the model converge to a good solution much faster.

**Common Initialization Strategies:**

1.  **Zero Initialization:**
    *   **Description:** All weights and biases are initialized to zero.
    *   **Why it's problematic:** This leads to symmetry issues. All neurons in a layer will learn the same features, making the network essentially a single neuron per layer.
    *   **Example:** If all weights are zero, the output of a convolutional layer will be zero, and the gradients for all weights will be the same.

2.  **Random Initialization (Small Random Values):**
    *   **Description:** Weights are initialized with small random values drawn from a distribution (e.g., Gaussian or uniform).
    *   **Problem:** For very deep networks, even small random values can lead to vanishing or exploding gradients. If the variance of weights is too high, the outputs can grow exponentially with depth (exploding). If too low, they can shrink exponentially (vanishing).
    *   **Example:** `W ~ N(0, 0.01)` (Gaussian with mean 0, standard deviation 0.01).

3.  **Xavier/Glorot Initialization:**
    *   **Description:** Aims to keep the variance of the activations and gradients roughly the same across layers. It considers the number of input and output neurons for a layer.
    *   **Formulas:**
        *   For layers with `n_in` inputs and `n_out` outputs:
            *   **Uniform distribution:** $W \sim U[-\sqrt{\frac{6}{n_{in} + n_{out}}}, \sqrt{\frac{6}{n_{in} + n_{out}}}]$
            *   **Normal distribution:** $W \sim N(0, \sigma^2)$ where $\sigma^2 = \frac{2}{n_{in} + n_{out}}$
    *   **Applicability:** Works well for activation functions like sigmoid and tanh, which are used in older networks.
    *   **Reference:** Ekman, Chapter 3.1.2 (Weight initialization) mentions Glorot and Bengio's work.

4.  **He Initialization (Kaiming Initialization):**
    *   **Description:** Specifically designed for ReLU (Rectified Linear Unit) activation functions and their variants (Leaky ReLU, PReLU). ReLU sets negative values to zero, which can halve the variance of activations if not accounted for.
    *   **Formulas:**
        *   For layers with `n_in` inputs:
            *   **Uniform distribution:** $W \sim U[-\sqrt{\frac{6}{n_{in}}}, \sqrt{\frac{6}{n_{in}}}]$ (when using Xavier's logic with only input size)
            *   **Normal distribution:** $W \sim N(0, \sigma^2)$ where $\sigma^2 = \frac{2}{n_{in}}$
    *   **Applicability:** Preferred for modern CNNs using ReLU and its variants.
    *   **Reference:** Geron, Chapter 11 (Deep Convolutional Networks) discusses He initialization as a common practice.

**Initialization for CNN Specifics:**

*   **Convolutional Layers:** The "fan-in" (number of inputs) is determined by the kernel size, number of input channels, and the number of filters.
    *   For a convolutional layer with kernel size `k x k`, `C_in` input channels, and `C_out` filters, the "fan-in" for each weight is `k * k * C_in`.
    *   Xavier/He initialization formulas are adapted to use this fan-in. For He initialization, the variance is typically $\sigma^2 = \frac{2}{k^2 \cdot C_{in}}$.
*   **Biases:** Usually initialized to zero.

**Important Points to Remember:**

*   **Xavier/Glorot:** Suitable for Tanh/Sigmoid.
*   **He/Kaiming:** Suitable for ReLU and its variants.
*   The choice of initialization can significantly affect training stability and speed.
*   Modern CNNs predominantly use He initialization due to the widespread use of ReLU.

---

### 2. Back-propagation in CNNs

**Learning Outcomes Covered:**
*   Analyze and differentiate between various neural network components. (CO1)
*   Develop and implement strategies for training neural networks. (CO2)

**Key Concepts and Definitions:**

*   **Back-propagation:** An algorithm used to efficiently compute the gradients of the loss function with respect to the weights and biases of a neural network. It works by applying the chain rule of calculus backwards through the network.
*   **Gradient Descent:** An optimization algorithm that iteratively updates the model's weights and biases in the direction opposite to the gradient of the loss function, aiming to minimize the loss.
*   **Chain Rule:** A fundamental calculus rule stating that the derivative of a composite function is the product of the derivatives of its constituent functions.
*   **Loss Function:** A function that quantifies the error between the model's predictions and the actual target values.
*   **Activations:** The output of a neuron after applying an activation function.
*   **Weights and Biases:** The parameters of the neural network that are learned during training.

**The Back-propagation Process (General Neural Networks):**

1.  **Forward Pass:**
    *   Input data is passed through the network layer by layer.
    *   At each layer, a linear transformation (weighted sum + bias) is applied, followed by an activation function.
    *   The final output is the network's prediction.
    *   The loss function is computed using the prediction and the true labels.

2.  **Backward Pass (Back-propagation):**
    *   The gradient of the loss function with respect to the output layer's activations is computed.
    *   Using the chain rule, this gradient is propagated backward through each layer.
    *   For each layer, we compute:
        *   The gradient of the loss with respect to the layer's weights.
        *   The gradient of the loss with respect to the layer's biases.
        *   The gradient of the loss with respect to the layer's input (which is needed for the previous layer).

3.  **Weight Update:**
    *   The computed gradients are used by an optimization algorithm (like Gradient Descent) to update the weights and biases.
    *   `weight = weight - learning_rate * gradient_of_loss_wrt_weight`

**Back-propagation in CNNs - Key Differences and Considerations:**

CNNs introduce unique operations (convolution, pooling, etc.) that require specific adaptations for back-propagation.

1.  **Convolutional Layers:**
    *   **Forward Pass:** A filter (kernel) slides over the input feature map, performing element-wise multiplication and summation.
    *   **Backward Pass (Gradient of Loss w.r.t. Weights):** The gradient of the loss with respect to the kernel weights is computed by correlating the input feature map with the gradient of the loss in the output feature map. This is essentially a convolution operation.
        *   Think of it as: `dL/dW = Correlation(Input, dL/dOutput)` where `dL/dOutput` is the gradient signal coming from the next layer.
    *   **Backward Pass (Gradient of Loss w.r.t. Biases):** The gradient of the loss with respect to a bias term is simply the sum of the gradients of the loss with respect to all outputs that were affected by that bias. In practice, this is the sum of `dL/dOutput` over the spatial dimensions of the output feature map.
    *   **Backward Pass (Gradient of Loss w.r.t. Input):** The gradient of the loss with respect to the input feature map is computed by convolving the gradient signal from the output feature map with a "flipped" version of the kernel. This is often referred to as a "full convolution" operation.
        *   Think of it as: `dL/dInput = Convolution(dL/dOutput, Flipped(Kernel))`
    *   **Reference:** Geron, Chapter 14 (Convolutional Neural Networks) provides a detailed explanation of the gradients for convolutional layers.

2.  **Pooling Layers (e.g., Max Pooling):**
    *   **Forward Pass:** Selects the maximum value within a pooling window.
    *   **Backward Pass:** The gradient signal from the output is routed *only* to the neuron that produced the maximum value in the pooling window during the forward pass. All other neurons in the window receive a gradient of zero.
    *   **Example (Max Pooling):**
        *   Input feature map slice: `[[1, 2], [3, 4]]`
        *   Max value: `4` at position (1,1) (0-indexed)
        *   If the gradient coming from the output corresponding to this slice is `0.5`, then:
            *   The gradient passed back to the neuron that outputted `4` will be `0.5`.
            *   The gradients passed back to the neurons that outputted `1`, `2`, and `3` will be `0`.
    *   **Reference:** Ekman, Chapter 3.2.1 (Pooling) explains how back-propagation works for pooling.

3.  **Activation Functions (e.g., ReLU):**
    *   **Forward Pass:** Apply the activation function element-wise.
    *   **Backward Pass:** The gradient is computed by multiplying the incoming gradient by the derivative of the activation function.
        *   For ReLU: `d(ReLU(x))/dx = 1` if `x > 0`, `0` if `x <= 0`.
        *   So, if a neuron's input was `x` and the incoming gradient is `dL/da`, the gradient passed back is `dL/da * (1 if x > 0 else 0)`. This is the "straight-through estimator" for ReLU.
    *   **Reference:** Nielsen, Chapter 6 (Applying deep learning networks) discusses the back-propagation for different activation functions.

**Putting it Together (Gradient Update):**

Once all the gradients (`dL/dW`, `dL/dB`) for each layer are computed, they are used to update the parameters:

*   `W_new = W_old - learning_rate * dL/dW`
*   `B_new = B_old - learning_rate * dL/dB`

**Reference:**
*   **Nielsen's website (Chapter 3):** Provides an excellent and intuitive step-by-step explanation of back-propagation for simple neural networks, which forms the foundation.
*   **Deep Learning by Goodfellow, Bengio, Courville (Chapter 6):** Offers a more rigorous mathematical treatment of back-propagation and its theoretical underpinnings.

**Important Points to Remember:**

*   Back-propagation is the core learning algorithm, enabled by the chain rule.
*   For CNNs, back-propagation requires careful handling of convolutions and pooling operations.
*   The gradients for convolutional weights are computed using a correlation with the input, and gradients w.r.t. inputs involve a convolution with a flipped kernel.
*   Max pooling back-propagation routes gradients only to the maximum element.
*   The derivative of the activation function is applied element-wise during back-propagation.

---

### Practice Questions

**Question 1 (Initialization):**
Which of the following initialization techniques is generally preferred for CNNs that use the ReLU activation function?
a) Zero Initialization
b) Xavier/Glorot Initialization
c) He/Kaiming Initialization
d) Random Initialization with a small standard deviation

**Question 2 (Back-propagation - Convolution):**
When back-propagating through a convolutional layer, how are the gradients with respect to the layer's weights typically computed?
a) By element-wise multiplication of the input and the output gradient.
b) By correlating the input feature map with the gradient of the loss in the output feature map.
c) By convolving the input feature map with the gradient of the loss in the output feature map.
d) By summing the gradients of the loss over the spatial dimensions of the output.

**Question 3 (Back-propagation - Pooling):**
In Max Pooling, if a gradient value of `0.7` is received from the subsequent layer for a pooling region, and the maximum value in that region was `15` at a specific location, what gradient is passed back to the neuron that produced `15`?
a) `0`
b) `0.7`
c) `15`
d) `15 * 0.7`

**Question 4 (Course Outcome Alignment):**
Explain how understanding initialization strategies (CO2) and the mechanics of back-propagation (CO1, CO2) are essential for effectively training CNNs.

---

### Answers

**Answer 1:**
c) He/Kaiming Initialization. He initialization is specifically designed to address the variance reduction caused by ReLU activations, making it ideal for modern CNNs.

**Answer 2:**
b) By correlating the input feature map with the gradient of the loss in the output feature map. This correlation operation effectively computes the gradient of the loss with respect to the convolutional kernel weights.

**Answer 3:**
b) `0.7`. During the backward pass of Max Pooling, the gradient is passed exclusively to the neuron that yielded the maximum value in the pooling window during the forward pass.

**Answer 4:**
*   **Initialization (CO2):** Effective initialization strategies (like He initialization) are crucial for training CNNs because they help prevent vanishing or exploding gradients. This ensures that gradients can propagate effectively through the many layers of a CNN, allowing all parameters to be updated. Without proper initialization, the network might fail to learn or converge very slowly, rendering the training process ineffective. This directly aligns with developing and implementing strategies for training neural networks.
*   **Back-propagation (CO1, CO2):** Back-propagation is the fundamental algorithm that enables learning in CNNs. Understanding its mechanics (how gradients are calculated for convolutional layers, pooling layers, and activation functions) is essential for differentiating between neural network components (CO1) and for implementing and debugging the training process (CO2). It allows us to analyze how each parameter contributes to the overall loss and how to adjust them for better performance.

---
**Important Points to Remember (Summary):**

*   **Initialization:** Prevents symmetry and gradient issues. Use **He** for ReLU, **Xavier** for Sigmoid/Tanh. Variance matters!
*   **Back-propagation:** Chain rule applied backwards. For CNNs:
    *   **Conv Gradients:** Correlation for weights, convolution with flipped kernel for inputs.
    *   **Pooling Gradients:** Route to the max element only.
    *   **Activation Gradients:** Multiply by derivative of activation function.
*   These are the bedrock for making CNNs learn from data.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=mc979OhitAg) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=F_4HkL5r4n0) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=p6Q9_e7_L1w) |
