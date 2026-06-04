---
title: "Hebb network"
subject: "SOFT COMPUTING"
module: "Module 1: Introduction to Soft Computing."
branch: "Computer Science and Engineering"
semester: 4
topicId: "684162760fc9aa1fdbc8b1d7"
status: "completed"
scrapedAt: "2026-05-20T16:16:16.285Z"
---
# SOFT COMPUTING - Module 1: Introduction to Soft Computing - Hebb Network

## Learning Outcomes:

By the end of this topic, you should be able to:

*   Understand the basic principles of the Hebb learning rule.
*   Explain the architecture of a Hebb network.
*   Apply the Hebb learning rule to train a simple Hebb network.
*   Recognize the limitations of the Hebb network.
*   Differentiate between bipolar and binary inputs and targets.
*   Understand the concept of unsupervised learning as it applies to the Hebb network.

## 1. Key Concepts and Definitions

*   **Soft Computing:** A collection of computational techniques that aim to model and mimic human-like reasoning and decision-making. It embraces imprecision, uncertainty, and partial truth to achieve robustness, adaptability, and low solution cost.

*   **Neural Network:** A computational model inspired by the structure and function of biological neural networks.  It consists of interconnected nodes (neurons) that process and transmit information.

*   **Hebb Network:** The simplest type of neural network. It is a single-layer, feedforward network based on Hebb's learning rule, used for pattern association. It's a supervised and unsupervised learning algorithm, most commonly used for unsupervised learning.

*   **Hebb's Learning Rule:** A learning rule which states that "neurons that fire together, wire together." In other words, the connection strength (weight) between two neurons increases if both neurons are active simultaneously.  This rule forms the basis for learning in the Hebb network.

*   **Weight (w):** Represents the strength of the connection between two neurons.  The weight value determines the influence of the input on the output.

*   **Input (x):** The data provided to the network for processing. In a Hebb network, inputs can be binary (0, 1) or bipolar (-1, 1).

*   **Target (t):** The desired output for a given input pattern in supervised learning.  Similar to inputs, targets can be binary or bipolar.  In unsupervised learning, the target is often the input pattern itself.

*   **Activation Function:** A function that determines the output of a neuron based on its input. In the simplest Hebb network, a linear activation function is used: `y = w * x`.

*   **Pattern Association:** The ability of a neural network to learn the association between input patterns and corresponding output patterns.

*   **Supervised Learning:** A type of machine learning where the network is trained using labeled data (input-target pairs).

*   **Unsupervised Learning:** A type of machine learning where the network is trained using unlabeled data (only inputs). The network learns to identify patterns and relationships in the data without explicit guidance. Hebb networks are commonly used in unsupervised learning as they attempt to extract patterns from unlabeled data.

*   **Binary Input/Target:** Represents information using only two values: 0 and 1.

*   **Bipolar Input/Target:** Represents information using two values: -1 and 1. Bipolar representation is often preferred in Hebb networks because it can improve the network's ability to learn and differentiate between patterns.  A zero input provides no information.

## 2. Architecture of a Hebb Network

*   **Single-Layer Feedforward Network:** The Hebb network consists of a single layer of neurons. Information flows in one direction, from the input layer to the output layer.

*   **Interconnected Nodes:** Each input node is connected to each output node by a weighted connection.

*   **No Hidden Layers:** The Hebb network does not have any hidden layers.

*   **Structure:**
    *   `x1, x2, ..., xn` : Inputs
    *   `y1, y2, ..., ym` : Outputs
    *   `wij` : Weight connecting input `xi` to output `yj`

## 3. The Hebb Learning Rule

The Hebb learning rule modifies the connection weights between neurons based on the correlation between their activities.  The general formula for updating the weight `wij` between input `xi` and output `yj` is:

`Δwij = η * xi * tj`

where:

*   `Δwij` is the change in weight.
*   `η` (eta) is the learning rate (usually set to 1 for simplicity in basic Hebb networks).
*   `xi` is the input from neuron `i`.
*   `tj` is the target (desired output) for neuron `j` (or the input `xj` in unsupervised mode).

The updated weight is calculated as:

`wij(new) = wij(old) + Δwij`

In practice, with η=1, the formula simplifies to:

`wij(new) = wij(old) + xi * tj`

**Initialization:**

*   Weights are usually initialized to zero. `wij = 0`

**Important Note:** In unsupervised learning scenarios with Hebb networks, the target is often replaced with the input (`tj = xj`).  This allows the network to learn to associate patterns with themselves, effectively clustering similar inputs.  The updated weight formula then becomes:

`wij(new) = wij(old) + xi * xj`

## 4. Applying the Hebb Learning Rule - Example

Let's consider a simple Hebb network with two inputs (x1, x2) and one output (y).  We will use bipolar representation. We want to train the network to learn the following input-target pair:

*   Input (x1, x2) = (1, -1)
*   Target (t) = (-1)

**Steps:**

1.  **Initialize Weights:** `w1 = 0`, `w2 = 0`

2.  **Apply Hebb's Rule:**

    *   `Δw1 = x1 * t = 1 * (-1) = -1`
    *   `Δw2 = x2 * t = -1 * (-1) = 1`

3.  **Update Weights:**

    *   `w1(new) = w1(old) + Δw1 = 0 + (-1) = -1`
    *   `w2(new) = w2(old) + Δw2 = 0 + 1 = 1`

After training on this single input-target pair, the weights of the Hebb network are `w1 = -1` and `w2 = 1`.

**Testing the Network:**

If we input the same pattern (1, -1) into the trained network, the output will be:

`y = w1 * x1 + w2 * x2 = (-1 * 1) + (1 * -1) = -1 - 1 = -2`

Since the activation function in this case is simply the sum of the weighted inputs, the output is -2. To obtain a binary or bipolar output, we would need to apply a threshold function. If we applied a threshold of 0, then any value less than 0 outputs -1. Any value greater than or equal to 0, outputs 1. With this threshold, the output would be -1, which matches our target.

## 5. Limitations of the Hebb Network

*   **Linear Separability:** The Hebb network can only learn linearly separable patterns. It cannot handle complex, non-linear relationships between inputs and outputs.

*   **Instability:**  Weights can grow unbounded if inputs are consistently active.  This can lead to instability and saturation of the network. Weight decay or normalization techniques are often used to mitigate this.

*   **Order Dependency:** The order in which training patterns are presented can affect the final weights.

*   **Spurious States:** The network may generate incorrect outputs for input patterns it has not been trained on.

*   **Limited Capacity:**  The network has a limited capacity to store patterns, especially if they are highly correlated.

*   **No Forgetting Mechanism:**  The network tends to remember all patterns it has been trained on, even if they are no longer relevant. There is no inherent forgetting mechanism.

## 6. Binary vs. Bipolar Representation

| Feature          | Binary (0, 1) | Bipolar (-1, 1) |
|-------------------|----------------|-----------------|
| Representation   | 0 and 1        | -1 and 1       |
| Symmetry         | Asymmetric     | Symmetric      |
| Performance      | Can be lower   | Often better   |
| Zero Input       | Indicates absence | Represents a distinct state |

**Advantages of Bipolar Representation:**

*   **Improved Learning:** Bipolar representation often leads to better learning in Hebb networks, especially for pattern association tasks.
*   **Symmetry:**  The symmetric nature of bipolar values can help the network to better differentiate between positive and negative correlations.

## 7. Unsupervised Learning with Hebb Networks

Hebb networks are often used for unsupervised learning tasks like auto-association and pattern recognition.

*   **Auto-Association:** The network learns to associate an input pattern with itself. This can be useful for reconstructing noisy or incomplete patterns. In this case, the *target* `tj` is replaced with the *input* `xj` in the learning rule.

*   **Pattern Recognition:** The network learns to identify clusters or groups of similar input patterns.

**Example of Unsupervised Learning:**

Suppose we want a Hebb Network to learn the following patterns:
* Pattern 1: (1,1,1)
* Pattern 2: (1,-1,1)

Since we are performing unsupervised learning, each vector serves as both input and target. Let's examine what happens to our weights as we train on the first pattern:

1. Initialize Weights: w11 = w12 = w13 = w21 = w22 = w23 = w31 = w32 = w33 = 0

2. Apply Hebb's Rule using Pattern 1:
   * For the weight connecting input x1 to output y1: Δw11 = x1 * x1 = 1 * 1 = 1
   * w11(new) = 0 + 1 = 1
   * For the weight connecting input x1 to output y2: Δw12 = x1 * x2 = 1 * 1 = 1
   * w12(new) = 0 + 1 = 1
   * For the weight connecting input x1 to output y3: Δw13 = x1 * x3 = 1 * 1 = 1
   * w13(new) = 0 + 1 = 1

   * Following the same approach for all other weights results in the following update:
   * Δw21 = x2 * x1 = 1, w21 = 1
   * Δw22 = x2 * x2 = 1, w22 = 1
   * Δw23 = x2 * x3 = 1, w23 = 1
   * Δw31 = x3 * x1 = 1, w31 = 1
   * Δw32 = x3 * x2 = 1, w32 = 1
   * Δw33 = x3 * x3 = 1, w33 = 1

  All weights now have a value of 1.  Repeating the process with pattern 2 will change some of the weights.

## 8. Important Points to Remember

*   Hebb networks are simple and easy to implement.
*   They are based on the principle of "neurons that fire together, wire together."
*   They are limited to learning linearly separable patterns.
*   Bipolar representation is often preferred over binary representation.
*   Hebb networks can be used for both supervised and unsupervised learning.
*   Weight decay or normalization techniques are often needed to prevent unbounded weight growth.

## 9. Practice Questions and Exercises

**Question 1:**

Explain Hebb's learning rule in your own words.

**Answer:** Hebb's learning rule states that the connection (weight) between two neurons strengthens when both neurons are active at the same time. In simpler terms, if two neurons "fire together," their connection "wires together" or becomes stronger.

**Question 2:**

What are the limitations of the Hebb network?

**Answer:** The limitations of the Hebb network include:

*   Linear separability: it can only learn linearly separable patterns.
*   Instability: weights can grow unbounded.
*   Order dependency: the order of training patterns can affect the final weights.
*   Spurious states: it may produce incorrect outputs for untrained patterns.
*   Limited capacity: it can store a limited number of patterns.
*   No forgetting mechanism.

**Question 3:**

Why is bipolar representation often preferred over binary representation in Hebb networks?

**Answer:** Bipolar representation (using -1 and 1) is often preferred because it provides symmetry, can improve learning, and allows the network to better differentiate between positive and negative correlations. A zero value in the binary representation provides no information.

**Question 4:**

A Hebb network has two inputs (x1, x2) and one output (y).  The initial weights are w1 = 0 and w2 = 0.  The network is trained with the input (x1 = -1, x2 = 1) and the target (t = 1).  What are the updated weights after one iteration of training using the Hebb rule?

**Answer:**

*   Δw1 = x1 * t = -1 * 1 = -1
*   Δw2 = x2 * t = 1 * 1 = 1
*   w1(new) = w1(old) + Δw1 = 0 + (-1) = -1
*   w2(new) = w2(old) + Δw2 = 0 + 1 = 1

Therefore, the updated weights are w1 = -1 and w2 = 1.

**Question 5:**

Explain how a Hebb network can be used for unsupervised learning. Give an example of a specific unsupervised learning task it can be applied to.

**Answer:** In unsupervised learning, a Hebb network learns patterns from unlabeled data. It does this by modifying the weights based on the correlation between inputs. The target output is often replaced by the input itself (auto-association).  For example, it can be used for pattern recognition by learning to identify clusters of similar input patterns. Auto-association, where the network learns to associate an input with itself, is another example.

**Exercise 1:**

Design a Hebb network with 3 inputs and 1 output. You want the network to learn to associate the input pattern (1, 0, 1) with the output 1. Assuming initial weights are zero, calculate the weights after one iteration of training using:

*   Binary representation
*   Bipolar representation

Explain the difference in the resulting weight values.

**Exercise 2:**

Research and describe a real-world application where Hebbian learning principles are used (e.g., in robotics or neuroscience).
