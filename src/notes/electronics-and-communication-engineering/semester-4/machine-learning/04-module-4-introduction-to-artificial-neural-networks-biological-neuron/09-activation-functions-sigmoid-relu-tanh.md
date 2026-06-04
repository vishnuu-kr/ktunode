---
title: "Activation Functions-Sigmoid, ReLU, tanh"
subject: "MACHINE LEARNING"
module: "Module 4: Introduction to Artificial Neural Networks: Biological Neuron"
branch: "Electronics and Communication Engineering"
semester: 4
topicId: "68a5c45eb09ce205780fe63d"
status: "completed"
scrapedAt: "2026-05-23T17:50:29.653Z"
---
# MACHINE LEARNING: Module 4 - Introduction to Artificial Neural Networks: Biological Neuron

## Topic: Activation Functions - Sigmoid, ReLU, Tanh

### Learning Outcomes:

Upon successful completion of this topic, you will be able to:

*   **Understand the role of activation functions in artificial neural networks.**
*   **Differentiate between various common activation functions like Sigmoid, ReLU, and Tanh.**
*   **Explain the mathematical formulation and properties of Sigmoid, ReLU, and Tanh.**
*   **Identify the advantages and disadvantages of each activation function.**
*   **Choose appropriate activation functions for different layers and tasks in neural network design.**
*   **Analyze the impact of activation functions on the learning process and model performance.**

### Course Outcomes Alignment:

This topic directly supports:

*   **CO1 (K4):** Understanding the internal workings of neural networks, including activation functions, is crucial for analyzing and applying machine learning techniques to solve data-driven problems.
*   **CO2 (K3):** The choice of activation function significantly impacts the ability to develop, train, and optimize regression and classification models.
*   **CO3 (K3) & CO4 (K3):** While primarily focused on feedforward networks, the principles of activation functions are foundational for understanding more complex network architectures.

---

### 1. Introduction to Activation Functions

In the context of Artificial Neural Networks (ANNs), the **activation function** is a crucial component of each neuron. It determines the output of a neuron given its input and a bias. Essentially, it introduces **non-linearity** into the network, which is vital for learning complex patterns in data. Without non-linear activation functions, a neural network would simply be a linear model, regardless of the number of layers, and would be unable to solve problems like image recognition or natural language processing.

#### Key Concepts:

*   **Neuron Model:** A simplified model of a biological neuron. It receives inputs, multiplies them by weights, adds a bias, and then passes the result through an activation function.
*   **Linearity vs. Non-linearity:**
    *   **Linear functions:** Simply scale and shift the input (e.g., $y = mx + c$). Stacking linear functions results in another linear function.
    *   **Non-linear functions:** Introduce curves and bends, allowing ANNs to model complex relationships.
*   **Activation Function's Role:** To decide whether a neuron should be "activated" or not, and to what extent. It transforms the weighted sum of inputs and bias into an output signal.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=33vbFFFn04k) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=M0mx8S05v60) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=8XG7U5yN668) |


#### Textbook Reference:

*   **Hands-on Machine learning with Scikit-Learn, Keras and TensorFlow (Aurelien Geron):** Geron emphasizes that activation functions are applied to the weighted sum of inputs plus bias. He states, "Without a nonlinear activation function, the neural network would simply be a linear classifier" (Chapter 10).
*   **Machine learning for absolute beginners (Oliver Theobald):** Theobald explains that activation functions act like a "switch" that controls the output of a neuron, making the network capable of learning complex patterns.

---

### 2. Common Activation Functions

We will explore three fundamental activation functions: Sigmoid, ReLU, and Tanh.

#### 2.1. Sigmoid Function (Logistic Function)

The Sigmoid function, also known as the logistic function, is one of the earliest and most popular activation functions.

**Mathematical Formulation:**

The Sigmoid function is defined as:

$$ \sigma(x) = \frac{1}{1 + e^{-x}} $$

where:
*   $x$ is the input to the neuron (weighted sum of inputs + bias).
*   $e$ is the base of the natural logarithm (approximately 2.71828).

**Properties:**

*   **Output Range:** The output of the Sigmoid function is always between 0 and 1 (i.e., $(0, 1)$). This makes it suitable for output layers where probabilities are required (e.g., binary classification).
*   **Smoothness:** It is a smooth, continuous function, which is beneficial for gradient-based optimization.
*   **Monotonic:** It is a monotonically increasing function.
*   **Derivative:** The derivative of the Sigmoid function is $\sigma'(x) = \sigma(x)(1 - \sigma(x))$. This property is useful in backpropagation.

**Visual Representation:**

[Imagine a smooth S-shaped curve that starts near 0 for very negative inputs, rises through the point (0, 0.5), and approaches 1 for very positive inputs.]

**Advantages:**

*   **Smooth Gradient:** Helps in gradient descent optimization.
*   **Output Interpretation:** Output can be interpreted as a probability, useful for binary classification.

**Disadvantages:**

*   **Vanishing Gradient Problem:** For very large positive or very large negative inputs, the gradient of the Sigmoid function becomes very close to zero. This can lead to very small updates during backpropagation, causing neurons to stop learning (especially in deep networks). This phenomenon is known as the **vanishing gradient problem**.
*   **Not Zero-Centered:** The output is not centered around zero. This can lead to zig-zagging gradient updates during training, slowing down convergence.
*   **Computationally Expensive:** The exponential function can be computationally more intensive compared to other activation functions.

**Example Use Case:**

*   Often used in the output layer of binary classification networks.
*   Historically used in hidden layers, but less common now due to the vanishing gradient problem.

#### 2.2. Hyperbolic Tangent (Tanh) Function

The Tanh function is another popular activation function that is similar to the Sigmoid function but with a key difference in its output range.

**Mathematical Formulation:**

The Tanh function is defined as:

$$ \tanh(x) = \frac{e^x - e^{-x}}{e^x + e^{-x}} $$

Alternatively, it can be expressed in terms of the Sigmoid function:

$$ \tanh(x) = 2 \sigma(2x) - 1 $$

where:
*   $x$ is the input to the neuron.

**Properties:**

*   **Output Range:** The output of the Tanh function ranges from -1 to 1 (i.e., $(-1, 1)$).
*   **Zero-Centered:** The output is centered around zero. This is a significant advantage over the Sigmoid function, as it helps to alleviate the zig-zagging gradient updates and potentially leads to faster convergence.
*   **Smoothness:** It is a smooth, continuous, and monotonic function.
*   **Derivative:** The derivative of the Tanh function is $\tanh'(x) = 1 - \tanh^2(x)$.

**Visual Representation:**

[Imagine a smooth S-shaped curve that starts near -1 for very negative inputs, rises through the point (0, 0), and approaches 1 for very positive inputs.]

**Advantages:**

*   **Zero-Centered Output:** Generally leads to faster convergence compared to Sigmoid because the gradients are less biased in one direction.
*   **Steeper Gradient around Zero:** The gradient is steeper around zero compared to Sigmoid, which can help in faster learning for inputs close to zero.

**Disadvantages:**

*   **Vanishing Gradient Problem:** Similar to Sigmoid, Tanh also suffers from the vanishing gradient problem for very large positive or negative inputs, albeit to a lesser extent than Sigmoid because its gradient is steeper around zero.
*   **Computationally Expensive:** Still involves exponential functions.

**Example Use Case:**

*   Commonly used in hidden layers of neural networks.
*   Well-suited for recurrent neural networks (RNNs) and LSTMs.

#### 2.3. Rectified Linear Unit (ReLU) Function

The ReLU function has become the default activation function for many deep learning applications due to its simplicity and effectiveness.

**Mathematical Formulation:**

The ReLU function is defined as:

$$ \text{ReLU}(x) = \max(0, x) $$

where:
*   $x$ is the input to the neuron.

**Properties:**

*   **Output Range:** The output is 0 for negative inputs and equal to the input for positive inputs (i.e., $[0, \infty)$).
*   **Sparsity:** For negative inputs, the output is 0, meaning the neuron is effectively "off." This can lead to sparse activation, which can be computationally efficient and may help prevent overfitting.
*   **Computational Efficiency:** It is very simple and computationally inexpensive to compute (just a comparison and potential assignment).
*   **Non-Linearity:** It is non-linear due to the "kink" at $x=0$.
*   **Derivative:** The derivative is 1 for $x > 0$ and 0 for $x < 0$. The derivative at $x=0$ is undefined, but typically it's assigned a value of 0 or 1 in practice (e.g., $\text{ReLU}'(x) = \begin{cases} 1 & \text{if } x > 0 \\ 0 & \text{if } x \leq 0 \end{cases}$).

**Visual Representation:**

[Imagine a graph that is a horizontal line at y=0 for negative x-values, and then a straight line with a slope of 1 passing through the origin for positive x-values.]

**Advantages:**

*   **Mitigates Vanishing Gradient:** For positive inputs, the gradient is a constant 1, which helps to avoid the vanishing gradient problem in these regions.
*   **Computational Efficiency:** Very fast to compute.
*   **Sparsity:** Can lead to sparse activations, potentially making the network more efficient and robust.

**Disadvantages:**

*   **Dying ReLU Problem:** If a neuron's input is consistently negative (e.g., due to large negative weights or biases), it will always output 0. Consequently, its gradient will also be 0, and the neuron will never be updated again. This is known as the **dying ReLU problem**.
*   **Not Zero-Centered:** Similar to Sigmoid, its outputs are not zero-centered.

**Example Use Case:**

*   Most common activation function for hidden layers in deep neural networks, including Convolutional Neural Networks (CNNs) and Feedforward Neural Networks.

#### Textbook and Reference Book Insights:

*   **Hands-on Machine learning with Scikit-Learn, Keras and TensorFlow (Aurelien Geron):** Geron strongly advocates for ReLU in hidden layers, stating, "ReLU is a very simple and efficient activation function... it avoids the vanishing gradients problem." He also mentions the "dying ReLU" problem and suggests variants like Leaky ReLU.
*   **Learning Deep Learning (Magnus Ekman):** Ekman discusses activation functions as essential for introducing non-linearity. He highlights ReLU's advantages in computational speed and avoiding vanishing gradients but also notes the dying ReLU issue.
*   **"Pattern Recognition and Machine Learning" (C. M. Bishop):** While Bishop's work predates the widespread adoption of ReLU, his foundational explanations of neural networks and the need for non-linearities are crucial. He discusses sigmoidal activation functions extensively.
*   **CS229 Lecture Notes (Andrew Ng):** Ng's notes often cover Sigmoid and Tanh for their historical significance and mathematical properties, and then introduce ReLU as a more practical and efficient alternative for deep learning.

---

### 3. Choosing the Right Activation Function

The choice of activation function can significantly impact a neural network's performance and training speed.

**General Guidelines:**

*   **Hidden Layers:**
    *   **ReLU** is generally the first choice due to its efficiency and ability to mitigate vanishing gradients.
    *   If you encounter the **dying ReLU problem**, consider **Leaky ReLU**, **Parametric ReLU (PReLU)**, or **Exponential Linear Unit (ELU)**.
    *   **Tanh** can be a good alternative, especially if zero-centered outputs are desired, but ReLU often performs better in deeper networks.
*   **Output Layer:**
    *   For **binary classification**, use the **Sigmoid** function to output probabilities between 0 and 1.
    *   For **multi-class classification**, use the **Softmax** function (which is a generalization of Sigmoid for multiple classes) to output a probability distribution over the classes.
    *   For **regression tasks** where the output can be any real number, it's common to use **no activation function** (i.e., a linear activation function) in the output layer.

#### Important Points to Remember:

*   **Non-linearity is Key:** Always include non-linear activation functions in hidden layers to enable the network to learn complex patterns.
*   **Vanishing Gradients:** Be aware of the vanishing gradient problem with Sigmoid and Tanh in deep networks.
*   **Dying ReLUs:** Watch out for the dying ReLU problem and consider alternatives if it occurs.
*   **Output Layer Choice:** The activation function in the output layer depends on the specific task (classification vs. regression).

---

### 4. Practice Questions & Exercises

**Question 1:**
What is the primary role of an activation function in a neural network?
a) To scale the input features.
b) To introduce non-linearity.
c) To select the most important features.
d) To bias the output towards a specific class.

**Question 2:**
Which of the following activation functions has an output range of $(-1, 1)$ and is zero-centered?
a) Sigmoid
b) ReLU
c) Tanh
d) Linear

**Question 3:**
The "dying ReLU" problem occurs when:
a) The ReLU output is always 1.
b) The ReLU output is always 0 and the neuron stops learning.
c) The ReLU output is always negative.
d) The ReLU gradient becomes very small for large positive inputs.

**Question 4:**
For a binary classification problem, which activation function is typically used in the output layer?
a) ReLU
b) Tanh
c) Sigmoid
d) Softmax

**Question 5:**
Explain why the vanishing gradient problem is a concern for Sigmoid and Tanh functions in deep neural networks.

---

### Answers to Practice Questions

**Answer 1:**
**b) To introduce non-linearity.**
*   Explanation: Activation functions allow neural networks to learn complex, non-linear relationships in the data. Without them, the network would just be a linear model.

**Answer 2:**
**c) Tanh**
*   Explanation: Tanh squashes inputs into the range $(-1, 1)$ and its output is centered around zero, unlike Sigmoid which outputs $(0, 1)$ and ReLU which outputs $[0, \infty)$.

**Answer 3:**
**b) The ReLU output is always 0 and the neuron stops learning.**
*   Explanation: If a ReLU neuron receives only negative inputs, its output is 0. The gradient for $x \le 0$ is also 0. This means the weights and biases of that neuron will not be updated during backpropagation, effectively rendering it inactive or "dead."

**Answer 4:**
**c) Sigmoid**
*   Explanation: The Sigmoid function's output range of $(0, 1)$ can be interpreted as a probability, making it ideal for predicting the likelihood of a positive class in binary classification. Softmax is used for multi-class classification.

**Answer 5:**
The vanishing gradient problem is a concern because for very large positive or very large negative input values ($|x| \gg 0$), the derivative of the Sigmoid and Tanh functions approaches zero. During backpropagation, gradients are multiplied across layers. If these gradients are consistently very small, they can shrink exponentially as they are backpropagated to earlier layers. This means that the weights in the initial layers of a deep network are updated very slowly, or not at all, hindering the learning process. ReLU mitigates this for positive inputs by having a constant gradient of 1, but still faces issues for negative inputs.

---