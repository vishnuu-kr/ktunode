---
title: "Activation functions - Sigmoid, Tanh, ReLU, Softmax"
subject: "DEEP LEARNING"
module: "Module 1: Neural Network: Introduction to neural networks "
branch: "Electrical and Electronics Engineering"
semester: 7
topicId: "68a200872b85456187f369d5"
status: "completed"
scrapedAt: "2026-05-23T16:33:25.837Z"
---
# Deep Learning: Module 1 - Neural Networks: Introduction to Neural Networks

## Topic: Activation Functions: Sigmoid, Tanh, ReLU, Softmax

### 1. Introduction to Activation Functions

*   **What are Activation Functions?**
    *   Activation functions are mathematical functions applied to the output of a neuron (or a layer of neurons) in a neural network.
    *   They introduce non-linearity into the network, allowing it to learn complex patterns and relationships in data that linear models cannot capture.
    *   Without activation functions, a neural network would essentially be a series of linear transformations, regardless of the number of layers, and would behave like a single-layer linear model.

*   **Why are they necessary?**
    *   **Introducing Non-linearity:** Most real-world data is non-linear. Activation functions enable neural networks to model these complex, non-linear relationships.
    *   **Decision Making:** They help neurons "decide" whether to activate (fire) or not, based on the weighted sum of inputs.
    *   **Gradient Propagation:** They play a crucial role in the backpropagation algorithm by providing gradients, which are used to update the weights of the network.

*   **Key Properties of Activation Functions:**
    *   **Non-linearity:** Essential for learning complex patterns.
    *   **Differentiability:** Required for gradient-based optimization (backpropagation).
    *   **Range:** The output range can influence the network's behavior and stability.
    *   **Monotonicity:** Some functions are monotonic (always increasing or decreasing), which can simplify optimization.
    *   **Computational Efficiency:** For large networks, computationally efficient activation functions are preferred.

---

### 2. Sigmoid Activation Function

*   **Definition:** The sigmoid (or logistic) function is a mathematical function that converts any real-valued number into a value between 0 and 1.
    *   Formula: $\sigma(x) = \frac{1}{1 + e^{-x}}$

*   **Graphical Representation:** It has an "S" shaped curve.
    *   As $x \to \infty$, $\sigma(x) \to 1$.
    *   As $x \to -\infty$, $\sigma(x) \to 0$.
    *   At $x = 0$, $\sigma(0) = 0.5$.

*   **Use Cases:**
    *   Historically popular in the hidden layers of neural networks.
    *   **Primarily used in the output layer for binary classification problems.** This is because its output range (0 to 1) can be interpreted as a probability. For example, a sigmoid output of 0.8 can represent an 80% probability of belonging to the positive class.

*   **Advantages:**
    *   Outputs values between 0 and 1, making it suitable for probability estimation.
    *   Smooth gradient, preventing abrupt jumps in output.

*   **Disadvantages:**
    *   **Vanishing Gradients:** For very large positive or negative inputs, the gradient of the sigmoid function is close to zero. This can lead to vanishing gradients during backpropagation, hindering learning in deep networks, especially in earlier layers. (Refer to Goodfellow, Bengio, Courville, Chapter 6).
    *   **Not Zero-Centered:** The output is always positive (0 to 1). This can lead to issues during gradient updates, as gradients for weights connected to a neuron will have the same sign, causing zig-zagging during optimization.
    *   **Computationally Expensive:** The exponential function ($e^{-x}$) can be computationally more intensive than other activation functions.

*   **Example (Binary Classification):**
    *   Imagine a neural network classifying emails as spam or not spam.
    *   The output layer neuron with a sigmoid activation would take the weighted sum of inputs and output a value between 0 and 1.
    *   If the output is 0.9, it suggests a high probability of the email being spam.

*   **Learning Outcome Alignment:**
    *   CO1: Illustrate the basic concepts of neural networks and its practical issues (Knowledge Level: K2) - *Understanding the role and limitations of sigmoid.*

*   **Important Point to Remember:** Avoid sigmoid in hidden layers of deep networks due to the vanishing gradient problem. It's best suited for the output layer of binary classification tasks.

---

### 3. Tanh Activation Function (Hyperbolic Tangent)

*   **Definition:** The tanh function is similar to the sigmoid function but squashes values into a range between -1 and 1.
    *   Formula: $\tanh(x) = \frac{e^x - e^{-x}}{e^x + e^{-x}}$
    *   Relationship with Sigmoid: $\tanh(x) = 2 \sigma(2x) - 1$.

*   **Graphical Representation:** Also an "S" shaped curve, but it is zero-centered.
    *   As $x \to \infty$, $\tanh(x) \to 1$.
    *   As $x \to -\infty$, $\tanh(x) \to -1$.
    *   At $x = 0$, $\tanh(0) = 0$.

*   **Use Cases:**
    *   Often preferred over sigmoid for hidden layers in feedforward neural networks.
    *   Common in recurrent neural networks (RNNs) and their variants (like LSTMs and GRUs) for gating mechanisms.

*   **Advantages:**
    *   **Zero-Centered Output:** This helps mitigate the "zig-zagging" issue seen with sigmoid by allowing gradients to have positive and negative values, potentially leading to faster convergence.
    *   Steeper gradient around zero compared to sigmoid, which can help with learning.

*   **Disadvantages:**
    *   **Vanishing Gradients:** Like sigmoid, tanh also suffers from the vanishing gradient problem for very large positive or negative inputs, although it's less severe than sigmoid in the range [-1, 1]. (Refer to Aggarwal, Chapter 3).
    *   **Computationally Expensive:** Still involves exponential functions.

*   **Example (Hidden Layer):**
    *   In a deep neural network, the output of a hidden layer neuron might be passed through a tanh function to ensure the activations are centered around zero, aiding the learning process.

*   **Learning Outcome Alignment:**
    *   CO1: Illustrate the basic concepts of neural networks and its practical issues (Knowledge Level: K2) - *Understanding the benefits of zero-centered outputs over sigmoid.*

*   **Important Point to Remember:** Tanh is generally better than sigmoid for hidden layers due to its zero-centered output, but still susceptible to vanishing gradients.

---

### 4. ReLU Activation Function (Rectified Linear Unit)

*   **Definition:** ReLU is currently the most widely used activation function in deep neural networks. It's a simple piecewise linear function.
    *   Formula: $f(x) = \max(0, x)$

*   **Graphical Representation:**
    *   For $x > 0$, $f(x) = x$ (linear).
    *   For $x \le 0$, $f(x) = 0$ (constant).

*   **Use Cases:**
    *   Dominant choice for hidden layers in most deep learning architectures, including Convolutional Neural Networks (CNNs) and Feedforward Neural Networks.

*   **Advantages:**
    *   **Computational Efficiency:** It's very fast to compute (a simple threshold operation).
    *   **Mitigates Vanishing Gradients (for positive inputs):** For positive inputs, the gradient is 1, preventing vanishing gradients and allowing deeper networks to train effectively. (Refer to Buduma & Locascio, Chapter 4).
    *   **Sparsity:** Since neurons with negative inputs output 0, ReLU can lead to sparse representations, where only a subset of neurons are active at any given time. This can be computationally efficient and may help in feature learning.

*   **Disadvantages:**
    *   **Dying ReLU Problem:** If a neuron receives an input that is always negative, it will always output 0. The gradient for such a neuron will also be 0, meaning its weights will never be updated during backpropagation. The neuron effectively "dies" and stops contributing to the network.
    *   **Not Zero-Centered:** Similar to sigmoid, the output is always non-negative.

*   **Example (Hidden Layer):**
    *   A neuron in a CNN processing an image receives a weighted sum of pixel values. If this sum is negative, the ReLU activation outputs 0. If it's positive, the activation is equal to the sum, preserving the information.

*   **Learning Outcome Alignment:**
    *   CO1: Illustrate the basic concepts of neural networks and its practical issues (Knowledge Level: K2) - *Understanding the effectiveness and limitations of ReLU.*

*   **Important Point to Remember:** ReLU is a great choice for hidden layers due to its efficiency and ability to combat vanishing gradients. Be mindful of the "dying ReLU" problem and consider variants like Leaky ReLU or ELU if it becomes an issue.

---

### 5. Softmax Activation Function

*   **Definition:** Softmax is a generalization of the sigmoid function used for multi-class classification problems. It takes a vector of arbitrary real-valued scores and transforms it into a probability distribution over multiple classes.
    *   Formula: For a vector $\mathbf{z} = [z_1, z_2, \dots, z_K]$ of scores for $K$ classes, the softmax probability for class $i$ is:
        $P(y=i|\mathbf{z}) = \text{Softmax}(z_i) = \frac{e^{z_i}}{\sum_{j=1}^{K} e^{z_j}}$
    *   The output is a vector where each element represents the probability of belonging to a specific class, and the sum of all elements is 1.

*   **Graphical Representation:** Not typically visualized as a single "S" curve, but rather as a transformation of a vector of scores into a probability vector.

*   **Use Cases:**
    *   **Exclusively used in the output layer for multi-class classification problems.**

*   **Advantages:**
    *   **Outputs a Probability Distribution:** The output values are between 0 and 1 and sum to 1, making them interpretable as probabilities for mutually exclusive classes.
    *   **Handles Multiple Classes:** Designed to work with more than two classes.

*   **Disadvantages:**
    *   **Computationally More Expensive:** Involves exponentiation and a sum over all classes.
    *   **Not typically used in hidden layers.** Its purpose is specifically for the output of multi-class classification.
    *   **Numerical Stability:** Can be prone to overflow/underflow if input scores are very large or very small. A common trick is to subtract the maximum score from all scores before applying the exponential function, as this doesn't change the final probabilities.

*   **Example (Multi-class Classification):**
    *   Consider a neural network classifying handwritten digits (0-9).
    *   The output layer would have 10 neurons, each corresponding to a digit.
    *   The softmax function would take the raw scores from these 10 neurons and output a vector of 10 probabilities, e.g., `[0.05, 0.1, 0.75, 0.02, ..., 0.03]`. This indicates a 75% probability that the digit is '2'.

*   **Learning Outcome Alignment:**
    *   CO1: Illustrate the basic concepts of neural networks and its practical issues (Knowledge Level: K2) - *Understanding the specialized role of softmax for multi-class outputs.*

*   **Important Point to Remember:** Softmax is the go-to activation for the output layer in multi-class classification tasks, providing a clean probability distribution.

---

### 6. Comparison and Summary of Activation Functions

| Feature              | Sigmoid                         | Tanh                            | ReLU                             | Softmax                           |
| :------------------- | :------------------------------ | :------------------------------ | :------------------------------- | :-------------------------------- |
| **Formula**          | $1 / (1 + e^{-x})$              | $\tanh(x)$                      | $\max(0, x)$                     | $e^{z_i} / \sum e^{z_j}$           |
| **Output Range**     | (0, 1)                          | (-1, 1)                         | [0, $\infty$)                    | (0, 1) [for each output, sums to 1] |
| **Zero-Centered**    | No                              | Yes                             | No                               | Yes (distribution)                |
| **Gradient Issue**   | Vanishing Gradients             | Vanishing Gradients             | Dying ReLU                       | Generally stable, but depends on inputs |
| **Computational Cost**| Moderate                        | Moderate                        | Very Low                         | Moderate                          |
| **Primary Use**      | Output layer (Binary Class.)    | Hidden layers                   | Hidden layers                    | Output layer (Multi-class Class.) |
| **Non-linearity**    | Yes                             | Yes                             | Yes                              | Yes                               |

*   **Reference:** Aggarwal, Chapter 3 discusses various activation functions and their properties in detail. Goodfellow, Bengio, Courville, Chapter 6 also covers activation functions and their impact on learning.

---

### 7. Practice Questions and Answers

**Question 1:**
Which activation function is most suitable for the output layer of a binary classification problem, and why?

**Answer 1:**
The **Sigmoid** activation function is most suitable for the output layer of a binary classification problem. This is because its output range is (0, 1), which can be directly interpreted as the probability of belonging to the positive class.

**Question 2:**
What is the primary advantage of using the Tanh activation function over the Sigmoid function in hidden layers?

**Answer 2:**
The primary advantage of Tanh over Sigmoid in hidden layers is its **zero-centered output**. This helps in achieving faster convergence during training because the gradients for weights connected to a neuron can be positive or negative, leading to less zig-zagging in the optimization process.

**Question 3:**
Describe the "Dying ReLU" problem.

**Answer 3:**
The "Dying ReLU" problem occurs when a ReLU neuron receives an input that is always negative. In this case, the neuron's output will always be 0, and importantly, the **gradient for this neuron will also be 0**. This means that during backpropagation, the weights connected to this neuron will never be updated, effectively rendering the neuron "dead" and unable to contribute to learning.

**Question 4:**
For a problem with 5 distinct classes, which activation function would you typically use in the output layer? What would be the expected output for a correct prediction of class 3?

**Answer 4:**
For a problem with 5 distinct classes, the **Softmax** activation function would typically be used in the output layer.
If the correct prediction is for class 3, the expected output would be a vector of 5 probabilities, where the probability for class 3 is the highest (ideally close to 1), and the probabilities for the other 4 classes are low (summing up to the remaining probability). For example, an output might look like: `[0.05, 0.03, 0.85, 0.04, 0.03]`.

**Question 5:**
Which activation function is known for its computational efficiency and for mitigating the vanishing gradient problem in hidden layers?

**Answer 5:**
The **ReLU** (Rectified Linear Unit) activation function is known for its computational efficiency (simple max operation) and for mitigating the vanishing gradient problem, particularly for positive inputs where the gradient is 1.

---

### 8. Alignment with Course Outcomes

*   **CO1: Illustrate the basic concepts of neural networks and its practical issues (Knowledge Level: K2)**
    *   This entire topic directly addresses CO1 by introducing fundamental building blocks of neural networks (neurons) and the crucial role of activation functions. The discussion of their advantages and disadvantages (e.g., vanishing gradients, dying ReLUs) highlights practical issues encountered in building and training neural networks. Understanding these functions is key to illustrating how neural networks operate.

---

### 9. Key Takeaways

*   **Activation functions are essential for non-linearity in neural networks.**
*   **Sigmoid:** Good for binary classification output layer, but suffers from vanishing gradients in hidden layers.
*   **Tanh:** Zero-centered, better than Sigmoid for hidden layers, but still has vanishing gradients.
*   **ReLU:** Computationally efficient, helps with vanishing gradients, but can suffer from the "dying ReLU" problem. It's the most common choice for hidden layers.
*   **Softmax:** Used for multi-class classification output layers, producing a probability distribution over classes.
*   The choice of activation function depends on the specific layer and the type of problem being solved.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=mc979OhitAg) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=M0mx8S05v60) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=p6Q9_e7_L1w) |
