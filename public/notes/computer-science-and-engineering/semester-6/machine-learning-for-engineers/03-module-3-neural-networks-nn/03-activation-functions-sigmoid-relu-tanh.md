---
title: "Activation functions (Sigmoid, ReLU, Tanh)"
subject: "MACHINE LEARNING FOR ENGINEERS"
module: "Module 3: Neural Networks (NN) "
branch: "Computer Science and Engineering"
semester: 6
topicId: "684162780fc9aa1fdbc8bf55"
status: "completed"
scrapedAt: "2026-05-20T16:55:06.160Z"
---
# MACHINE LEARNING FOR ENGINEERS - Module 3: Neural Networks (NN)

## Topic: Activation Functions (Sigmoid, ReLU, Tanh)

### 1. Introduction to Activation Functions

Activation functions are crucial components of neural networks. They introduce **non-linearity** into the output of a neuron. Without activation functions, a neural network would simply be a series of linear transformations, effectively reducing it to a single linear model, regardless of the number of layers. This non-linearity allows neural networks to learn complex patterns and relationships in data that linear models cannot.

**Key Concept:** Non-linearity

**Purpose:**
*   Introduce non-linear relationships between inputs and outputs.
*   Enable neural networks to approximate complex functions.
*   Control the output range of neurons.

### 2. Common Activation Functions

We will explore three widely used activation functions: Sigmoid, ReLU, and Tanh.

---

#### 2.1. Sigmoid (Logistic) Function

The Sigmoid function, also known as the logistic function, squashes the input values into a range between 0 and 1.

**Mathematical Formula:**

$$
\sigma(x) = \frac{1}{1 + e^{-x}}
$$

**Key Characteristics:**
*   **Output Range:** (0, 1) - This makes it suitable for output layers in binary classification problems, where the output can be interpreted as a probability.
*   **Smoothness:** It's a smooth, continuous function, which is beneficial for gradient-based optimization algorithms.
*   **Gradient:** The gradient is non-zero for all inputs, but it's very small for large positive or negative inputs (saturation).

**Shape:** An "S"-shaped curve.

**Example:**
If a neuron receives an input value of `x = 2.0`, the Sigmoid function calculates:
$$
\sigma(2.0) = \frac{1}{1 + e^{-2.0}} \approx \frac{1}{1 + 0.1353} \approx 0.8808
$$

**Visual Representation (Conceptual):**

```
      ^ output (0 to 1)
      |
      |      ******
      |     **    **
      |    **      **
      |   **        **
      |  **
 -----|-------------------> input (x)
      |
```

**Pros:**
*   Outputs probabilities (0 to 1), useful for binary classification.
*   Smooth gradient.

**Cons:**
*   **Vanishing Gradients:** For very large or very small input values, the gradient becomes close to zero. This can slow down or halt the learning process during backpropagation, especially in deep networks.
*   **Not Zero-Centered:** The output is always positive, which can lead to issues in weight updates during backpropagation (e.g., zig-zagging).
*   **Computationally Expensive:** The exponential function can be computationally more intensive than other activation functions.

**Use Cases:**
*   Output layer of binary classification networks.
*   Historically used in hidden layers, but less common now due to vanishing gradient problems.

---

#### 2.2. ReLU (Rectified Linear Unit) Function

ReLU is currently the most popular activation function for hidden layers in deep learning models. It's computationally efficient and helps alleviate the vanishing gradient problem.

**Mathematical Formula:**

$$
\text{ReLU}(x) = \max(0, x)
$$

**Key Characteristics:**
*   **Output Range:** \[0, ∞)
*   **Simplicity:** Very simple to compute.
*   **Non-Linearity:** It introduces non-linearity by thresholding negative inputs to zero.
*   **Gradient:**
    *   For `x > 0`, the gradient is 1.
    *   For `x < 0`, the gradient is 0.
    *   At `x = 0`, the gradient is undefined, but practically it's often treated as 0 or 1.

**Shape:** A "hinge" or "cliff" shape.

**Example:**
*   If `x = 3.0`, `ReLU(3.0) = max(0, 3.0) = 3.0`.
*   If `x = -2.0`, `ReLU(-2.0) = max(0, -2.0) = 0.0`.

**Visual Representation (Conceptual):**

```
      ^ output
      |
      |      /
      |     /
      |    /
 -----|---/----------------> input (x)
      |  /
      | /
      |/
```

**Pros:**
*   **Alleviates Vanishing Gradients:** For positive inputs, the gradient is constant (1), allowing gradients to flow more freely through the network.
*   **Computationally Efficient:** Simple thresholding is much faster than exponentiation.
*   **Sparsity:** Can lead to sparse activations, where some neurons are "inactive" (outputting 0), which can be computationally beneficial and sometimes helpful for feature learning.

**Cons:**
*   **Dying ReLU Problem:** If a neuron's input is always negative, it will always output 0, and its gradient will also be 0. This neuron becomes "dead" and stops learning.
*   **Not Zero-Centered:** Similar to Sigmoid, its outputs are not zero-centered.

**Use Cases:**
*   Most commonly used in hidden layers of deep neural networks for tasks like image recognition, natural language processing, etc.

---

#### 2.3. Tanh (Hyperbolic Tangent) Function

Tanh is another popular activation function that is similar to Sigmoid but squashes values into a range between -1 and 1.

**Mathematical Formula:**

$$
\tanh(x) = \frac{e^x - e^{-x}}{e^x + e^{-x}}
$$

**Key Characteristics:**
*   **Output Range:** (-1, 1)
*   **Zero-Centered:** The output is centered around zero, which is generally preferred over non-zero-centered activations for better performance during training.
*   **Smoothness:** It's a smooth, continuous function.
*   **Gradient:** Similar to Sigmoid, it suffers from vanishing gradients for large positive or negative inputs, but its gradient is steeper than Sigmoid around zero.

**Shape:** An "S"-shaped curve, similar to Sigmoid, but centered at (0,0).

**Example:**
If a neuron receives an input value of `x = 1.0`, the Tanh function calculates:
$$
\tanh(1.0) = \frac{e^{1.0} - e^{-1.0}}{e^{1.0} + e^{-1.0}} \approx \frac{2.7183 - 0.3679}{2.7183 + 0.3679} \approx \frac{2.3504}{3.0862} \approx 0.7616
$$

**Visual Representation (Conceptual):**

```
      ^ output (-1 to 1)
      |       ******
      |     **    **
      |    **      **
    --|---**--------**----- > input (x)
      |  **        **
      | **          **
      |**
      v
```

**Pros:**
*   **Zero-Centered Output:** The output range is symmetric around zero, which can lead to faster convergence during training compared to Sigmoid.
*   **Smooth gradient.**

**Cons:**
*   **Vanishing Gradients:** Similar to Sigmoid, it can suffer from vanishing gradients for large inputs.
*   **Computationally Expensive:** Like Sigmoid, it involves exponential calculations.

**Use Cases:**
*   Often used in hidden layers, especially in recurrent neural networks (RNNs) and for tasks where a bipolar output range is beneficial.
*   Can be preferred over Sigmoid in hidden layers due to its zero-centered property.

---

### 3. Choosing the Right Activation Function

The choice of activation function depends on the specific problem and the layer in the neural network.

*   **Hidden Layers:**
    *   **ReLU** is the most common and generally recommended starting point due to its efficiency and ability to mitigate vanishing gradients.
    *   If the "Dying ReLU" problem becomes an issue, consider variations like **Leaky ReLU** or **Parametric ReLU (PReLU)**.
    *   **Tanh** can be a good alternative if zero-centered outputs are important, especially in certain architectures like RNNs.
*   **Output Layer:**
    *   For **binary classification**, the **Sigmoid** function is ideal as it outputs a probability between 0 and 1.
    *   For **multi-class classification**, the **Softmax** function (which is a generalization of Sigmoid) is used to output a probability distribution over multiple classes.
    *   For **regression** tasks, typically **no activation function** or a **linear activation function** (where the output is simply the input) is used to allow the network to predict any real value.

### 4. Practice Questions & Exercises

**Question 1:**
What is the primary role of activation functions in a neural network?
a) To perform matrix multiplication.
b) To introduce non-linearity into the model.
c) To calculate the loss function.
d) To update the weights during backpropagation.

**Question 2:**
Which activation function outputs values between 0 and 1?
a) ReLU
b) Tanh
c) Sigmoid
d) Linear

**Question 3:**
What is a major drawback of the Sigmoid activation function, particularly in deep neural networks?
a) It is computationally expensive.
b) It can lead to vanishing gradients.
c) It does not introduce non-linearity.
d) Its output range is unbounded.

**Question 4:**
Consider a neuron with an input value of `x = -5`. What would be the output of the ReLU activation function?
a) -5
b) 0
c) 5
d) 0.0067

**Question 5:**
Why is Tanh often preferred over Sigmoid in hidden layers?
a) Because it has a steeper gradient.
b) Because its output is zero-centered.
c) Because it is computationally faster.
d) Because it doesn't suffer from vanishing gradients.

**Question 6:**
Match the activation function with its typical use case:
    1. Sigmoid       A. Hidden layers in deep networks
    2. ReLU          B. Output layer for binary classification
    3. Tanh          C. Hidden layers where zero-centered output is beneficial

**Question 7 (Conceptual):**
Imagine you are building a neural network for image recognition. You have a deep network (many layers). Which activation function would you primarily choose for your hidden layers and why? What potential problem might you need to be aware of with this choice?

---

### 5. Answers to Practice Questions

**Answer 1:**
b) To introduce non-linearity into the model.

**Answer 2:**
c) Sigmoid

**Answer 3:**
b) It can lead to vanishing gradients.

**Answer 4:**
b) 0
(Because `ReLU(x) = max(0, x)`, so `ReLU(-5) = max(0, -5) = 0`)

**Answer 5:**
b) Because its output is zero-centered.

**Answer 6:**
1. Sigmoid - B. Output layer for binary classification
2. ReLU - A. Hidden layers in deep networks
3. Tanh - C. Hidden layers where zero-centered output is beneficial

**Answer 7:**
You would primarily choose **ReLU** for your hidden layers.
**Reasoning:** ReLU is computationally efficient and helps mitigate the vanishing gradient problem, which is critical in deep networks to allow gradients to propagate effectively during training.
**Potential Problem:** The "Dying ReLU" problem. If a neuron consistently receives negative inputs, its gradient will be zero, and it will stop learning. To address this, you might consider using variations like Leaky ReLU if you encounter this issue.

---

### 6. Important Points to Remember

*   **Non-linearity is Key:** Activation functions are essential for neural networks to learn complex, non-linear relationships.
*   **Sigmoid:** Useful for binary classification output (0 to 1), but suffers from vanishing gradients.
*   **ReLU:** The default choice for hidden layers due to efficiency and avoiding vanishing gradients, but can suffer from the "Dying ReLU" problem.
*   **Tanh:** A good alternative to Sigmoid in hidden layers due to its zero-centered output, but also suffers from vanishing gradients.
*   **Output Layer Choice:** Depends on the task (Sigmoid for binary classification, Softmax for multi-class classification, Linear for regression).
*   **Vanishing Gradients:** A common problem where gradients become very small during backpropagation, hindering learning in deep networks.
*   **Dying ReLU:** A problem where ReLU neurons become inactive and stop learning if their inputs are always negative.
