---
title: "Activation functions, Sigmoid Relu , Softmax"
subject: "DEEP LEARNING"
module: "Module 2: Loss functions"
branch: "Electronics and Communication Engineering"
semester: 7
topicId: "68a5c461b09ce205780ff13e"
status: "completed"
scrapedAt: "2026-05-23T18:05:44.899Z"
---
# DEEP LEARNING: Module 2: Loss Functions - Activation Functions: Sigmoid, ReLU, Softmax

## Introduction

Welcome to Module 2 of our Deep Learning course! In this module, we delve into the crucial component of neural networks: **Loss Functions**. While loss functions quantify the error of our model, **activation functions** are the neurons' "decision-makers," introducing non-linearity and enabling neural networks to learn complex patterns. This topic specifically focuses on three widely used activation functions: Sigmoid, ReLU, and Softmax.

**Relates to Course Outcome:**
*   **CO1: Explain the basic concepts of neural networks (Knowledge Level: K2)** - Understanding activation functions is fundamental to understanding how neural networks process information and learn.

## 1. What are Activation Functions?

**Key Concept:** Activation functions are mathematical functions applied to the output of a neuron (or a layer of neurons) to introduce non-linearity into the neural network. Without non-linear activation functions, a neural network would simply be a series of linear transformations, essentially behaving like a single linear model, regardless of the number of layers.

**Definition:**
An activation function, denoted by $\sigma(z)$, takes the weighted sum of inputs to a neuron plus its bias ($z = w \cdot x + b$) and transforms it into an output that is then passed to the next layer.

$$ \text{Output} = \sigma(z) $$

**Why are they necessary?**
*   **Introduce Non-linearity:** Real-world data is rarely linearly separable. Activation functions allow neural networks to learn and model complex, non-linear relationships in data.
*   **Control Output Range:** Some activation functions constrain the output of a neuron to a specific range (e.g., 0 to 1, or -1 to 1), which can be useful for various purposes like probability estimation.
*   **Enable Gradient-Based Learning:** The derivatives of activation functions are crucial for backpropagation, allowing the network to adjust its weights and biases to minimize the loss function.

**Reference:**
*   **Nielsen (2019), Chapter 1: "Introduction":** Nielsen emphasizes that without non-linear activation functions, a multi-layer neural network would collapse into a single-layer network, unable to learn complex patterns.
*   **Goodfellow, Bengio, & Courville (2016), Chapter 6.3: "Activation Functions":** This foundational text thoroughly explains the role of activation functions in introducing non-linearity and their impact on the network's learning capabilities.

## 2. Sigmoid Activation Function

**Key Concept:** The Sigmoid function, also known as the logistic function, is a popular choice for its S-shaped curve that squashes any input value into a range between 0 and 1.

**Definition:**
The Sigmoid function is defined as:

$$ \sigma(z) = \frac{1}{1 + e^{-z}} $$

Where:
*   $z$ is the input to the neuron (weighted sum of inputs plus bias).
*   $e$ is the base of the natural logarithm.

**Characteristics:**
*   **Output Range:** [0, 1]. This makes it suitable for output layers in binary classification problems, where the output can be interpreted as a probability.
*   **Smooth Gradient:** The function is differentiable everywhere, providing a smooth gradient for backpropagation.
*   **"Squashing" Function:** It maps any real-valued input to the range (0, 1).
*   **Monotonic:** It is always increasing.

**Visual Representation:**
[Imagine an S-shaped curve where the x-axis is 'z' and the y-axis is $\sigma(z)$. The curve starts near 0 for very negative 'z', passes through 0.5 at z=0, and approaches 1 for very positive 'z'.]

**Examples:**
*   **Binary Classification:** In a binary classification task (e.g., predicting whether an email is spam or not), the output layer of a neural network often uses a Sigmoid activation function. The output of this neuron represents the probability of the input belonging to the positive class.
*   **Early Neural Networks:** Historically, Sigmoid was a dominant activation function in early neural network architectures.

**Pros:**
*   Smooth gradient.
*   Outputs probabilities (0 to 1).

**Cons (and why it's less common in hidden layers now):**
*   **Vanishing Gradients:** For very large positive or negative inputs, the gradient of the Sigmoid function becomes very close to zero. During backpropagation, these small gradients can be multiplied across many layers, leading to vanishing gradients, where the weights in earlier layers are updated very slowly or not at all. This is a significant problem in deep networks. (See **Geron (2019), Chapter 11: "Deep Convolutional Networks"** for discussion on vanishing gradients).
*   **Not Zero-Centered:** The outputs of the Sigmoid function are always positive (ranging from 0 to 1). This can lead to issues during gradient descent, as the gradients for weights will all have the same sign (positive or negative depending on the gradient of the activation function). This can result in zig-zagging during gradient updates, slowing down convergence.
*   **Computationally Expensive:** The exponential function ($e^{-z}$) can be computationally more intensive than simpler operations.

**Important Point to Remember:** Due to the vanishing gradient problem, Sigmoid is rarely used in hidden layers of deep neural networks anymore. It remains relevant for output layers in binary classification.

## 3. ReLU (Rectified Linear Unit) Activation Function

**Key Concept:** ReLU is a piecewise linear activation function that has become the de facto standard for hidden layers in many deep neural networks. It's computationally efficient and helps mitigate the vanishing gradient problem.

**Definition:**
The ReLU function is defined as:

$$ \text{ReLU}(z) = \max(0, z) $$

This means:
*   If $z > 0$, the output is $z$.
*   If $z \le 0$, the output is $0$.

**Characteristics:**
*   **Output Range:** [0, $\infty$). It's unbounded on the positive side.
*   **"Leaky" at Zero:** For inputs less than or equal to zero, the output is always zero, and the gradient is also zero.
*   **Computational Efficiency:** It only involves a simple comparison and a `max` operation, making it very fast.
*   **Solves Vanishing Gradients (partially):** For positive inputs, the gradient is a constant 1. This helps prevent gradients from vanishing in the positive range, allowing for faster learning.

**Visual Representation:**
[Imagine a graph where the x-axis is 'z' and the y-axis is ReLU(z). The graph is a horizontal line at y=0 for z <= 0, and then a straight line with a slope of 1 (y=z) for z > 0, starting from the origin.]

**Examples:**
*   **Image Recognition:** ReLU is widely used in Convolutional Neural Networks (CNNs) for tasks like image classification.
*   **Natural Language Processing (NLP):** It's also common in recurrent neural networks (RNNs) and feedforward networks for various NLP tasks.

**Pros:**
*   **Faster Training:** Addresses the vanishing gradient problem for positive inputs.
*   **Computational Efficiency:** Very fast to compute.
*   **Sparsity:** For inputs $\le 0$, the output is 0, which can lead to sparser representations in the network, potentially making it more efficient and robust.

**Cons:**
*   **Dying ReLU Problem:** If a neuron's input is always negative (e.g., due to a large negative bias or a large negative gradient from subsequent layers), it will always output 0. Consequently, the gradient for that neuron will also be 0, and its weights will never be updated again. The neuron effectively "dies" and stops contributing to the learning process. (See **Geron (2019), Chapter 11: "Deep Convolutional Networks"** for a detailed explanation of this issue).
*   **Not Zero-Centered:** Similar to Sigmoid, ReLU outputs are non-negative, which can still lead to some zig-zagging in gradient descent.

**Important Point to Remember:** ReLU is generally the preferred activation function for hidden layers due to its efficiency and ability to mitigate vanishing gradients. However, the "dying ReLU" problem needs to be managed, often by using variations like Leaky ReLU or by careful initialization and learning rate tuning.

## 4. Softmax Activation Function

**Key Concept:** Softmax is specifically designed for the output layer of a neural network when performing multi-class classification. It converts a vector of raw scores into a probability distribution over multiple classes.

**Definition:**
For a vector of $K$ scores, $z = [z_1, z_2, \dots, z_K]$, the Softmax function for the $i$-th element is defined as:

$$ \text{Softmax}(z)_i = \frac{e^{z_i}}{\sum_{j=1}^{K} e^{z_j}} $$

Where:
*   $z_i$ is the input score for class $i$.
*   $K$ is the total number of classes.
*   The denominator is the sum of the exponentiated scores for all classes, ensuring that the outputs sum to 1.

**Characteristics:**
*   **Output Range:** [0, 1] for each element, and the sum of all elements in the output vector is 1.
*   **Probability Distribution:** The output can be interpreted as the probability that the input belongs to each of the $K$ classes.
*   **Converts Scores to Probabilities:** It takes arbitrary real-valued scores and maps them to a probability distribution.
*   **Sensitive to Differences:** Even small differences in the input scores can lead to significantly different probability distributions, especially for larger scores. The highest score gets the largest probability.

**Visual Representation:**
Imagine a network predicting an image of an animal. The output layer might have three neurons, for "Cat," "Dog," and "Bird."
*   Input scores: `[2.0, 1.0, 0.1]` (e.g., from the last linear layer).
*   Softmax calculation:
    *   $e^{2.0} \approx 7.389$
    *   $e^{1.0} \approx 2.718$
    *   $e^{0.1} \approx 1.105$
    *   Sum of exponents: $7.389 + 2.718 + 1.105 \approx 11.212$
*   Probabilities:
    *   Cat: $7.389 / 11.212 \approx 0.659$ (65.9%)
    *   Dog: $2.718 / 11.212 \approx 0.242$ (24.2%)
    *   Bird: $1.105 / 11.212 \approx 0.098$ (9.8%)
*   Output vector: `[0.659, 0.242, 0.098]`. The probabilities sum to approximately 1.

**Examples:**
*   **Image Classification (Multi-Class):** Classifying images into categories like "Cat," "Dog," "Bird," etc.
*   **Sentiment Analysis (Multi-Class):** Classifying text into "positive," "negative," or "neutral."
*   **Sequence Generation:** In language models, Softmax is used to predict the probability of the next word in a sequence.

**Pros:**
*   Provides a probability distribution for multi-class classification.
*   Ensures outputs sum to 1, making them interpretable as probabilities.

**Cons:**
*   **Computationally Intensive:** The exponential function and the sum over all classes can be computationally demanding, especially with a large number of classes.
*   **Can Still Suffer from Vanishing Gradients:** If one score is significantly larger than others, the corresponding probability will be close to 1, and others close to 0. The gradient for the dominant class will be small, similar to Sigmoid.

**Important Point to Remember:** Softmax is exclusively used in the output layer for multi-class classification problems. It is almost always paired with the **Categorical Cross-Entropy loss function**.

## 5. Choosing the Right Activation Function

**Key Concept:** The choice of activation function depends heavily on the specific problem, the architecture of the neural network, and the desired output.

**Guidelines:**
*   **Hidden Layers:**
    *   **ReLU** is the most common and recommended starting point due to its efficiency and ability to prevent vanishing gradients.
    *   If you encounter the "dying ReLU" problem, consider **Leaky ReLU**, **Parametric ReLU (PReLU)**, or **Exponential Linear Unit (ELU)**. These are variations of ReLU that introduce a small slope for negative inputs, preventing neurons from becoming completely inactive.
    *   **Tanh (Hyperbolic Tangent)** is another option, similar to Sigmoid but outputs values between -1 and 1. It's zero-centered, which can be beneficial, but still suffers from vanishing gradients.
    *   **Sigmoid** is generally avoided in hidden layers of deep networks.
*   **Output Layer:**
    *   **Sigmoid:** For **binary classification** problems, where the output represents the probability of belonging to the positive class.
    *   **Softmax:** For **multi-class classification** problems, where the output represents the probability distribution across multiple classes.
    *   **Linear (No activation):** For **regression** problems, where the output is a continuous value and doesn't need to be constrained to a specific range.

**Reference:**
*   **Ekman (2022), Chapter 5: "Neural Network Architectures":** Ekman likely discusses the practical considerations and common choices for activation functions in different network contexts.
*   **Geron (2019), Chapter 4: "Neural Networks MLPs" and Chapter 11: "Deep Convolutional Networks":** Geron provides excellent practical advice and explanations on why certain activation functions are preferred for specific tasks.

## 6. Practice Questions and Answers

**Question 1:**
Which activation function is primarily used for the output layer in binary classification tasks and why?

**Answer 1:**
The **Sigmoid** activation function is primarily used for the output layer in binary classification tasks. This is because its output range is [0, 1], which can be directly interpreted as the probability of the input belonging to the positive class.

**Question 2:**
What is the main advantage of using ReLU over Sigmoid in hidden layers of deep neural networks?

**Answer 2:**
The main advantage of ReLU over Sigmoid in hidden layers is its ability to **mitigate the vanishing gradient problem**. For positive inputs, ReLU has a constant gradient of 1, allowing gradients to flow more effectively through deeper layers and enabling faster learning. Sigmoid, on the other hand, can have very small gradients for large positive or negative inputs, hindering learning.

**Question 3:**
Consider a neural network designed to classify images into one of five categories: "Cat," "Dog," "Bird," "Fish," and "Reptile." Which activation function should be used in the output layer? Explain your reasoning.

**Answer 3:**
For a multi-class classification task with five categories, the **Softmax** activation function should be used in the output layer. Softmax converts the raw scores from the preceding layer into a probability distribution over the five classes. Each output neuron will represent the probability of the input image belonging to one of the five categories, and these probabilities will sum up to 1.

**Question 4:**
Explain the "Dying ReLU" problem and suggest one way to address it.

**Answer 4:**
The "Dying ReLU" problem occurs when a ReLU neuron consistently receives negative input values. In such cases, the neuron outputs 0, and its gradient becomes 0 as well. This means the neuron's weights will never be updated through backpropagation, and it effectively becomes inactive or "dies."

One way to address this is by using a variation like **Leaky ReLU**. Leaky ReLU allows a small, non-zero gradient for negative inputs (e.g., $\text{LeakyReLU}(z) = \max(0.01, z)$), preventing neurons from becoming completely inactive.

**Question 5:**
Which activation function is typically chosen for regression tasks, and what is its characteristic?

**Answer 5:**
For regression tasks, a **Linear activation function** (or no activation function) is typically chosen for the output layer. Its characteristic is that it passes the input value directly to the output without any transformation or constraint on the output range. This allows the model to predict continuous values.

## 7. Key Points to Remember

*   **Non-linearity is Key:** Activation functions introduce non-linearity, allowing neural networks to learn complex patterns.
*   **Sigmoid:** Best for binary classification output layers (probability). Suffers from vanishing gradients and is not zero-centered.
*   **ReLU:** Default choice for hidden layers. Efficient, mitigates vanishing gradients for positive inputs. Be aware of the "dying ReLU" problem.
*   **Softmax:** Essential for multi-class classification output layers. Outputs a probability distribution that sums to 1.
*   **Choice Matters:** The selection of activation functions significantly impacts a network's performance and training stability.
*   **Output Layer Specialization:** Sigmoid and Softmax are typically reserved for output layers based on the problem type (binary vs. multi-class classification), while ReLU or its variants are preferred for hidden layers.

## Conclusion

Understanding activation functions is crucial for building effective neural networks. Sigmoid, ReLU, and Softmax are fundamental building blocks. By understanding their properties, strengths, and weaknesses, you can make informed decisions about which activation functions to use in different parts of your neural network architectures, leading to more robust and efficient models. This knowledge directly contributes to your ability to explain the basic concepts of neural networks (CO1).

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=mc979OhitAg) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=F_4HkL5r4n0) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=8XG7U5yN668) |
