---
title: "Activation functions, Sigmoid Relu , Softmax"
subject: "DEEP LEARNING TECHNIQUES"
module: "Module 2: Loss functions"
branch: "Electronics and Communication Engineering"
semester: 7
topicId: "68a5c461b09ce205780ff2d1"
status: "completed"
scrapedAt: "2026-05-23T18:06:05.226Z"
---
# DEEP LEARNING TECHNIQUES - Module 2: Loss Functions

## Topic: Activation Functions, Sigmoid, ReLU, Softmax

---

### 1. Introduction to Activation Functions

**Learning Outcome:**
*   **LO1:** Understand the role and necessity of activation functions in neural networks. (Aligns with CO1: Analyze and differentiate between various neural network components - K3)

**Key Concepts & Definitions:**

*   **Activation Function:** A function applied to the output of a neuron (or layer) in a neural network. It introduces non-linearity into the model, allowing it to learn complex patterns and relationships in data. Without activation functions, a neural network would simply be a series of linear transformations, capable of modeling only linear relationships.
*   **Neuron:** The basic building block of a neural network. It receives inputs, multiplies them by weights, adds a bias, and then applies an activation function to produce an output.
*   **Non-linearity:** The ability of a model to capture relationships that are not straight lines or planes. Activation functions are the primary mechanism for introducing non-linearity in neural networks.

**Why are Activation Functions Necessary?**

*   **Introducing Non-linearity:** As mentioned, this is the primary reason. Real-world data is rarely linearly separable. Activation functions allow neural networks to approximate complex, non-linear decision boundaries.
*   **Enabling Deeper Networks:** By introducing non-linearity at each layer, activation functions allow for the creation of deep neural networks that can learn hierarchical representations of data.
*   **Controlling Neuron Output:** Some activation functions help to bound the output of neurons, which can be beneficial for stabilizing training and preventing exploding gradients.

**Textbook References:**

*   **Learning Deep Learning by Magnus Ekman:** Chapter 3 likely discusses the fundamental building blocks, including neurons and activation functions.
*   **Neural Networks for Deep Learning by Michael Nielsen:** Chapter 1 provides an excellent intuitive introduction to how neurons and activation functions work.

---

### 2. The Sigmoid Activation Function

**Learning Outcomes:**
*   **LO2:** Explain the mathematical formulation and properties of the Sigmoid function.
*   **LO3:** Discuss the advantages and disadvantages of using the Sigmoid function. (Aligns with CO1: Analyze and differentiate between various neural network components - K3)

**Key Concepts & Definitions:**

*   **Sigmoid Function (Logistic Function):** A mathematical function defined as:
    $$ \sigma(x) = \frac{1}{1 + e^{-x}} $$
*   **Properties:**
    *   **Output Range:** The output of the Sigmoid function is always between 0 and 1 ($0 < \sigma(x) < 1$).
    *   **Smoothness:** The function is smooth and continuous, which is good for gradient-based optimization.
    *   **Monotonic:** It is monotonically increasing.
    *   **Differentiable:** It is differentiable everywhere, allowing for gradient descent.
    *   **Derivative:** The derivative of the Sigmoid function is $\sigma'(x) = \sigma(x)(1 - \sigma(x))$. This is a useful property as the derivative can be calculated directly from the output of the Sigmoid function itself.

**Applications:**

*   **Binary Classification:** Historically, Sigmoid was widely used in the output layer of neural networks for binary classification problems because its output can be interpreted as a probability. A value close to 1 indicates a high probability of belonging to the positive class, and a value close to 0 indicates a high probability of belonging to the negative class.
*   **Hidden Layers (Historically):** It was also used in hidden layers, but this is less common now due to its limitations.

**Advantages:**

*   **Smooth Gradient:** Provides a smooth gradient, which aids in optimization.
*   **Output Interpretation:** Output values between 0 and 1 can be interpreted as probabilities.

**Disadvantages:**

*   **Vanishing Gradients:** For very large positive or very large negative inputs, the gradient of the Sigmoid function becomes very close to zero. This can lead to the "vanishing gradient problem," where gradients in deeper layers become extremely small, hindering effective learning.
*   **Not Zero-Centered:** The output is always positive, meaning the gradients passed back to weights will always have the same sign. This can lead to inefficient weight updates in the early stages of training (zig-zagging updates).
*   **Computationally Expensive:** The exponential operation ($e^{-x}$) can be computationally more expensive than simpler operations.

**Textbook References:**

*   **Hands-on Machine Learning with Scikit-Learn, Keras, and TensorFlow by Aurelien Geron:** Chapter 10 often covers neural network layers and activation functions, including Sigmoid.
*   **Deep Learning by Ian Goodfellow et al.:** Chapter 6 is likely to discuss common activation functions and their properties in detail.

**Example:**

Consider a single neuron with input $x=2$.
$\sigma(2) = \frac{1}{1 + e^{-2}} \approx \frac{1}{1 + 0.135} \approx \frac{1}{1.135} \approx 0.88$

If the input is $x=10$:
$\sigma(10) = \frac{1}{1 + e^{-10}} \approx \frac{1}{1 + 0.000045} \approx 0.99995$ (close to 1, gradient near zero)

If the input is $x=-10$:
$\sigma(-10) = \frac{1}{1 + e^{10}} \approx \frac{1}{1 + 22026} \approx 0.000045$ (close to 0, gradient near zero)

---

### 3. The ReLU (Rectified Linear Unit) Activation Function

**Learning Outcomes:**
*   **LO4:** Describe the ReLU function and its variations (Leaky ReLU, ELU).
*   **LO5:** Analyze the benefits and drawbacks of ReLU for deep learning models. (Aligns with CO1: Analyze and differentiate between various neural network components - K3)

**Key Concepts & Definitions:**

*   **ReLU Function:** A piecewise linear function defined as:
    $$ \text{ReLU}(x) = \max(0, x) $$
*   **Properties:**
    *   **Output Range:** The output is either 0 or positive ($0 \le \text{ReLU}(x)$).
    *   **Simplicity:** Computationally very efficient, involving only a simple thresholding operation.
    *   **Non-saturation (for positive inputs):** For positive inputs, the gradient is constant (1). This helps alleviate the vanishing gradient problem for the positive side.
    *   **Sparse Activation:** For negative inputs, the output is 0, effectively "turning off" the neuron. This can lead to sparser activations, which can be computationally efficient and might help with regularization.

**Variations of ReLU:**

*   **Leaky ReLU:** Addresses the "dying ReLU" problem (where neurons can get stuck in a zero-gradient state for negative inputs) by introducing a small, non-zero slope for negative inputs.
    $$ \text{Leaky ReLU}(x) = \max(\alpha x, x) $$
    where $\alpha$ is a small constant (e.g., 0.01).
*   **Parametric ReLU (PReLU):** Similar to Leaky ReLU, but $\alpha$ is a learnable parameter.
    $$ \text{PReLU}(x) = \max(\alpha x, x) $$
    where $\alpha$ is learned during training.
*   **Exponential Linear Unit (ELU):** Aims to combine the benefits of ReLU with a smoother transition for negative inputs, helping to push the mean of activations closer to zero.
    $$ \text{ELU}(x) = \begin{cases} x & \text{if } x > 0 \\ \alpha(e^x - 1) & \text{if } x \le 0 \end{cases} $$
    where $\alpha$ is a hyperparameter (often set to 1). ELU is smoother than ReLU and Leaky ReLU for negative inputs.

**Advantages of ReLU:**

*   **Mitigates Vanishing Gradients:** The constant gradient of 1 for positive inputs significantly reduces the vanishing gradient problem compared to Sigmoid and Tanh.
*   **Computational Efficiency:** Simple and fast to compute.
*   **Sparsity:** Can lead to sparser network activations, potentially improving efficiency and reducing overfitting.

**Disadvantages of ReLU:**

*   **Dying ReLU Problem:** If a neuron's input is always negative, it will always output 0, and its gradient will also be 0. This neuron effectively "dies" and stops learning. This can happen if the learning rate is too high.
*   **Not Zero-Centered:** Like Sigmoid, ReLU outputs are not zero-centered.
*   **Potential for Overfitting (with PReLU):** While PReLU can improve performance, the learnable parameter $\alpha$ can potentially increase the risk of overfitting if not regularized properly.

**Textbook References:**

*   **Hands-on Machine Learning with Scikit-Learn, Keras, and TensorFlow by Aurelien Geron:** Likely covers ReLU and its variants in the context of building modern neural networks.
*   **Dive Deep into Machine Learning by Zhang, Zhang, and Semola:** This resource is known for its practical explanations and would likely have a good section on ReLU.

**Example:**

*   $\text{ReLU}(5) = \max(0, 5) = 5$
*   $\text{ReLU}(-3) = \max(0, -3) = 0$

For Leaky ReLU with $\alpha = 0.01$:
*   $\text{Leaky ReLU}(5) = \max(0.01 \times 5, 5) = \max(0.05, 5) = 5$
*   $\text{Leaky ReLU}(-3) = \max(0.01 \times -3, -3) = \max(-0.03, -3) = -0.03$

---

### 4. The Softmax Activation Function

**Learning Outcomes:**
*   **LO6:** Explain the purpose and mathematical definition of the Softmax function.
*   **LO7:** Illustrate how Softmax is used in multi-class classification problems. (Aligns with CO1: Analyze and differentiate between various neural network components - K3, CO3: Apply and Integrate Sequence and Generative Models - K3)

**Key Concepts & Definitions:**

*   **Softmax Function:** A function that converts a vector of real numbers into a probability distribution. For a vector of $K$ real values, $z = [z_1, z_2, ..., z_K]$, the Softmax function outputs a vector of $K$ probabilities $p = [p_1, p_2, ..., p_K]$ where each $p_i$ is in the range [0, 1] and the sum of all $p_i$ is 1.
    $$ \text{Softmax}(z)_i = \frac{e^{z_i}}{\sum_{j=1}^{K} e^{z_j}} \quad \text{for } i = 1, ..., K $$
*   **Properties:**
    *   **Probability Distribution:** Outputs probabilities that sum to 1, making them suitable for representing class probabilities.
    *   **Differentiable:** Differentiable, allowing for gradient-based optimization.
    *   **Amplifies Differences:** The exponential term amplifies differences between input values. Larger inputs get proportionally larger probabilities.

**Applications:**

*   **Multi-class Classification:** Softmax is almost exclusively used in the output layer of neural networks for multi-class classification tasks. It converts the raw output scores (logits) from the last fully connected layer into probabilities for each class. The class with the highest probability is then predicted.

**How it Works in Multi-class Classification:**

1.  **Logits:** The output layer of a neural network for multi-class classification typically produces raw scores (logits) for each class. For example, if you have 3 classes, you'll get a vector of 3 scores.
2.  **Softmax Transformation:** These scores are then passed through the Softmax function.
3.  **Probability Distribution:** The Softmax function converts these scores into a probability distribution over the classes.
4.  **Prediction:** The class with the highest probability is the network's prediction.

**Textbook References:**

*   **Deep Learning with Python by Francois Chollet:** Chollet's book is excellent for practical deep learning implementations and would undoubtedly cover Softmax in its chapters on neural network architectures and classification.
*   **Neural Networks and Deep Learning: A Textbook by Charu C. Aggarwal:** Aggarwal's book provides a more theoretical underpinning and would likely detail the mathematical properties of Softmax.

**Example:**

Suppose a neural network outputs the following logits for a 3-class classification problem: $z = [2.0, 1.0, 0.1]$.

Applying the Softmax function:

*   $e^{z_1} = e^{2.0} \approx 7.389$
*   $e^{z_2} = e^{1.0} \approx 2.718$
*   $e^{z_3} = e^{0.1} \approx 1.105$

Sum of exponentials: $7.389 + 2.718 + 1.105 \approx 11.212$

Softmax probabilities:
*   $p_1 = \frac{7.389}{11.212} \approx 0.659$
*   $p_2 = \frac{2.718}{11.212} \approx 0.242$
*   $p_3 = \frac{1.105}{11.212} \approx 0.099$

The output probability distribution is approximately $[0.659, 0.242, 0.099]$. The network predicts Class 1 as it has the highest probability.

---

### 5. Connecting Activation Functions to Loss Functions (Module Context)

**Learning Outcomes:**
*   **LO8:** Understand how the choice of activation function, particularly in the output layer, interacts with the chosen loss function. (Aligns with CO1: Analyze and differentiate between various neural network components - K3, CO2: Develop and implement strategies for training neural networks - K4)

**Key Concepts & Definitions:**

*   **Loss Function:** A function that quantifies the error between the predicted output of a model and the true target values. The goal of training is to minimize this loss.
*   **Cross-Entropy Loss:** A commonly used loss function for classification tasks, especially when the output layer uses Softmax or Sigmoid. It measures the difference between two probability distributions.
    *   **Categorical Cross-Entropy:** Used for multi-class classification with Softmax output.
    *   **Binary Cross-Entropy:** Used for binary classification with Sigmoid output.

**Interaction:**

*   **Sigmoid + Binary Cross-Entropy:** This is a standard pairing for binary classification. The Sigmoid's output (0-1 probability) directly aligns with the input expected by binary cross-entropy.
*   **Softmax + Categorical Cross-Entropy:** This is the standard pairing for multi-class classification. Softmax provides the probability distribution over classes, and categorical cross-entropy measures how well this distribution matches the true one-hot encoded label.

**Important Point:** Using an activation function that outputs probabilities (like Sigmoid or Softmax) with a loss function that expects probabilities (like cross-entropy) is crucial for effective training in classification tasks. Using incompatible pairs can lead to unstable training or incorrect results. For example, using Softmax with Mean Squared Error for classification is generally not recommended as it doesn't leverage the probabilistic nature of Softmax.

**Textbook References:**

*   **Learning Deep Learning by Magnus Ekman:** Likely discusses the relationship between output layer activations and loss functions in its sections on training and optimization.
*   **Hands-on Machine Learning with Scikit-Learn, Keras, and TensorFlow by Aurelien Geron:** Will cover these combinations extensively in practical examples.

---

### 6. Practice Questions & Answers

**Question 1:**
Which activation function is known to suffer from the "dying ReLU" problem, and why?

**Answer 1:**
The **ReLU** activation function suffers from the "dying ReLU" problem. This occurs because for any negative input, the ReLU function outputs zero, and its gradient is also zero. If a neuron's weights are updated such that its input always remains negative, the neuron will never activate again and will stop learning.

---

**Question 2:**
You are building a model to classify images into 10 categories. Which activation function would you typically use in the output layer, and why?

**Answer 2:**
For a 10-class classification problem, you would typically use the **Softmax** activation function in the output layer. This is because Softmax converts the raw output scores (logits) from the neural network into a probability distribution over the 10 classes, ensuring that the probabilities sum to 1. This probability distribution is ideal for use with a loss function like categorical cross-entropy, which is standard for multi-class classification.

---

**Question 3:**
What is the primary advantage of using ReLU over Sigmoid in hidden layers of deep neural networks?

**Answer 3:**
The primary advantage of ReLU over Sigmoid in hidden layers is its ability to **mitigate the vanishing gradient problem**. For positive inputs, ReLU has a constant gradient of 1, which allows gradients to flow more effectively through deeper layers during backpropagation, enabling faster and more stable learning. Sigmoid, on the other hand, saturates for large positive or negative inputs, resulting in near-zero gradients that can hinder learning in deep networks.

---

**Question 4:**
Consider the Softmax function applied to the vector $z = [3, 1, 0.5]$. Calculate the approximate probability for the first element.

**Answer 4:**
*   $e^{3} \approx 20.086$
*   $e^{1} \approx 2.718$
*   $e^{0.5} \approx 1.649$

Sum of exponentials: $20.086 + 2.718 + 1.649 \approx 24.453$

Probability for the first element: $\frac{20.086}{24.453} \approx 0.821$

---

### 7. Important Points to Remember

*   **Non-linearity is Key:** Activation functions are essential for enabling neural networks to learn complex, non-linear patterns in data.
*   **Sigmoid's Demise in Hidden Layers:** While historically important, Sigmoid is rarely used in hidden layers today due to the vanishing gradient problem and non-zero-centered outputs. It's still relevant for binary classification output layers.
*   **ReLU's Dominance:** ReLU and its variants (Leaky ReLU, ELU) are the most popular choices for hidden layers due to their computational efficiency and ability to alleviate vanishing gradients. Be mindful of the "dying ReLU" issue.
*   **Softmax for Multi-class:** Softmax is the go-to activation for the output layer in multi-class classification problems, providing a well-calibrated probability distribution.
*   **Matching Activation to Loss:** The choice of activation function in the output layer should align with the expected input of the loss function (e.g., Sigmoid with Binary Cross-Entropy, Softmax with Categorical Cross-Entropy).

---

### 8. Alignment with Course Outcomes

*   **CO1 (K3 - Analyze and differentiate):** This entire topic directly addresses CO1 by explaining the purpose, mathematical formulations, advantages, and disadvantages of different activation functions (Sigmoid, ReLU, Softmax), allowing for their differentiation and analysis as core neural network components.
*   **CO2 (K4 - Develop and implement strategies):** Understanding these activation functions is fundamental to developing strategies for training neural networks. Knowing how they affect gradient flow (e.g., vanishing gradients with Sigmoid, dying ReLUs) informs hyperparameter tuning and architectural choices. The connection to loss functions further supports strategy development.
*   **CO3 (K3 - Apply and Integrate):** Softmax, in particular, is a critical component for applying neural networks to multi-class classification problems, which is a common application of sequence and generative models (though this module focuses on the classification aspect of the output layer).

---

This set of notes covers the fundamental activation functions discussed in the topic, explains their properties, applications, and limitations, and connects them to the broader context of deep learning model training.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=gI-qXk7XojA) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=F_4HkL5r4n0) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=APPIZ2S8YmY) |
