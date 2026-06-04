---
title: "Training  RNN, back propagation through time."
subject: "DEEP LEARNING"
module: "Module 3: Sequence models, Recurrent Neural Networks (RNN): cell structure and architecture"
branch: "Electronics and Communication Engineering"
semester: 7
topicId: "68a5c461b09ce205780ff148"
status: "completed"
scrapedAt: "2026-05-23T18:05:52.095Z"
---
# DEEP LEARNING: Module 3 - Sequence Models, Recurrent Neural Networks (RNN): Training and Backpropagation Through Time

## 1. Introduction to RNN Training

Recurrent Neural Networks (RNNs) are designed to process sequential data, meaning data where the order of elements is important. Training an RNN involves adjusting its weights and biases to minimize a loss function, similar to other neural networks. However, the recurrent nature of RNNs introduces a unique challenge: how to backpropagate errors through time.

**Key Concepts:**

*   **Sequential Data:** Data where the order matters (e.g., text, time series, speech).
*   **Recurrence:** The output of a hidden state at a given time step is influenced by the hidden state from the previous time step. This creates a "memory" mechanism.
*   **Loss Function:** A measure of how well the RNN is performing on the task. Common loss functions include Mean Squared Error (MSE) for regression and Cross-Entropy for classification.
*   **Optimization Algorithm:** Algorithms like Stochastic Gradient Descent (SGD) and its variants (Adam, RMSprop) are used to update the model's parameters based on the calculated gradients.

**Alignment with Course Outcomes:**

*   **CO1: Explain the basic concepts of neural networks (K2):** Understanding how RNNs are trained builds upon the fundamental concepts of neural network training (forward pass, loss calculation, gradient descent).
*   **CO3: Solve real-world problems using RNN (K2):** Effective training is crucial for applying RNNs to practical problems like language modeling, sentiment analysis, and time-series forecasting.

## 2. The Challenge of Training RNNs: Backpropagation Through Time (BPTT)

The core difficulty in training RNNs lies in how to compute gradients for weights that are used multiple times across different time steps. A standard backpropagation algorithm designed for feedforward networks wouldn't directly apply. This is where Backpropagation Through Time (BPTT) comes in.

**Key Concepts:**

*   **Unrolling the RNN:** To apply backpropagation, we conceptualize the RNN as being "unrolled" into a deep feedforward network, where each time step is a separate layer. This unrolled network has the same weights and biases shared across all time steps.
*   **Dependencies:** The gradient at a given time step depends not only on the error at that time step but also on the activations and gradients from previous time steps due to the recurrent connections.
*   **Shared Weights:** The crucial aspect of BPTT is that gradients are computed and summed up across all time steps for the shared weights.

**Textbook Reference:**

*   **Goodfellow, Bengio, and Courville (2016), "Deep Learning" (Chapter 10: Sequence Modeling):** This foundational text provides a detailed explanation of RNNs and BPTT, including the mathematical formulation.
*   **Ekman (2022), "Learning Deep Learning" (Chapter on Recurrent Neural Networks):** Ekman likely offers a more accessible explanation of BPTT, potentially with visual aids.
*   **Geron (2019), "Hands-on Machine Learning with Scikit-Learn, Keras, and TensorFlow" (Chapter on Recurrent Neural Networks):** Geron will focus on the practical implementation aspects, showing how libraries handle BPTT.

## 3. The BPTT Algorithm Explained

BPTT is essentially an application of the chain rule of calculus to the unrolled RNN. Here's a step-by-step breakdown:

**3.1. The Forward Pass:**

1.  **Input:** Feed the sequence of inputs $x^{(1)}, x^{(2)}, ..., x^{(T)}$ into the RNN, one at a time.
2.  **Hidden State Calculation:** At each time step $t$, the hidden state $h^{(t)}$ is computed using the current input $x^{(t)}$ and the previous hidden state $h^{(t-1)}$:
    $h^{(t)} = f(W_{hh}h^{(t-1)} + W_{xh}x^{(t)} + b_h)$
    where:
    *   $h^{(t)}$ is the hidden state at time step $t$.
    *   $h^{(t-1)}$ is the hidden state at the previous time step.
    *   $x^{(t)}$ is the input at time step $t$.
    *   $W_{hh}$ are the weights for the recurrent connection from the previous hidden state.
    *   $W_{xh}$ are the weights for the connection from the input.
    *   $b_h$ is the bias for the hidden state.
    *   $f$ is the activation function (e.g., tanh, ReLU).
3.  **Output Calculation:** At each time step $t$, an output $y^{(t)}$ (or a prediction $\hat{y}^{(t)}$) is computed based on the current hidden state $h^{(t)}$:
    $\hat{y}^{(t)} = g(W_{hy}h^{(t)} + b_y)$
    where:
    *   $\hat{y}^{(t)}$ is the predicted output at time step $t$.
    *   $W_{hy}$ are the weights for the connection from the hidden state to the output.
    *   $b_y$ is the bias for the output.
    *   $g$ is the output activation function (e.g., softmax for classification, linear for regression).
4.  **Loss Calculation:** For each time step $t$, a loss $L^{(t)}$ is computed between the predicted output $\hat{y}^{(t)}$ and the true target $y^{(t)}$. The total loss for the sequence is the sum of losses over all time steps:
    $L = \sum_{t=1}^{T} L^{(t)}$

**3.2. The Backward Pass (BPTT):**

The goal is to compute the gradients of the total loss $L$ with respect to all the trainable parameters ($W_{hh}, W_{xh}, W_{hy}, b_h, b_y$). This is done by applying the chain rule backward through the unrolled network.

1.  **Gradient at the Last Time Step:** Start by computing the gradients at the last time step $T$ for parameters that are only involved at $T$ (like $W_{hy}$ and $b_y$ if they were only used at $T$, but in RNNs they are often used at all steps).
    *   $\frac{\partial L}{\partial W_{hy}} = \sum_{t=1}^{T} \frac{\partial L^{(t)}}{\partial \hat{y}^{(t)}} \frac{\partial \hat{y}^{(t)}}{\partial W_{hy}}$
    *   $\frac{\partial L}{\partial b_y} = \sum_{t=1}^{T} \frac{\partial L^{(t)}}{\partial \hat{y}^{(t)}} \frac{\partial \hat{y}^{(t)}}{\partial b_y}$

2.  **Gradient Propagation Through Hidden States:** The key is to propagate gradients backward through the hidden states. For the weights shared across time steps:
    *   **Gradient with respect to $W_{xh}$:** The gradient of the total loss $L$ with respect to $W_{xh}$ is the sum of gradients from each time step where $W_{xh}$ is used.
        $\frac{\partial L}{\partial W_{xh}} = \sum_{t=1}^{T} \frac{\partial L^{(t)}}{\partial h^{(t)}} \frac{\partial h^{(t)}}{\partial W_{xh}}$
        The term $\frac{\partial L^{(t)}}{\partial h^{(t)}}$ is the gradient of the loss at time step $t$ with respect to the hidden state at time step $t$. This itself requires backpropagation from the output layer at time $t$ and potentially from the next hidden state if the loss depends on future states (though typically it doesn't).
    *   **Gradient with respect to $W_{hh}$:** Similarly, the gradient for $W_{hh}$ is the sum of contributions from each time step.
        $\frac{\partial L}{\partial W_{hh}} = \sum_{t=1}^{T} \frac{\partial L^{(t)}}{\partial h^{(t)}} \frac{\partial h^{(t)}}{\partial W_{hh}}$
    *   **Gradient with respect to $W_{hy}$ and $b_y$:** As mentioned, these are also summed up across all time steps.

3.  **Calculating $\frac{\partial L^{(t)}}{\partial h^{(t)}}$:** This is where the "through time" part is most evident. The gradient of the total loss with respect to the hidden state at time $t$, $\frac{\partial L}{\partial h^{(t)}}$, is not just from the loss at time $t$ but also from the loss at future time steps that depend on $h^{(t)}$ through the recurrent connections.
    $\frac{\partial L}{\partial h^{(t)}} = \frac{\partial L^{(t)}}{\partial h^{(t)}} + \frac{\partial L}{\partial h^{(t+1)}} \frac{\partial h^{(t+1)}}{\partial h^{(t)}}$
    This recursive definition shows how the gradient "flows back" from later time steps to earlier ones.

    Let's break down $\frac{\partial L^{(t)}}{\partial h^{(t)}}$ further. It consists of two parts:
    *   **Gradient from the output at time $t$:** $\frac{\partial L^{(t)}}{\partial \hat{y}^{(t)}} \frac{\partial \hat{y}^{(t)}}{\partial h^{(t)}}$
    *   **Gradient from the next hidden state's influence on future losses:** $\frac{\partial L}{\partial h^{(t+1)}} \frac{\partial h^{(t+1)}}{\partial h^{(t)}}$

    The term $\frac{\partial h^{(t+1)}}{\partial h^{(t)}}$ is the Jacobian of the hidden state transition:
    $\frac{\partial h^{(t+1)}}{\partial h^{(t)}} = W_{hh} \odot f'(W_{hh}h^{(t)} + W_{xh}x^{(t+1)} + b_h)$
    where $\odot$ denotes the element-wise product (Hadamard product) if $f'$ is element-wise. If $f$ is a vector-valued function like tanh, then it's the Jacobian matrix.

**Visualizing BPTT:**

Imagine the unrolled RNN as a very deep neural network. BPTT proceeds layer by layer (time step by time step) from the end to the beginning, computing gradients for each connection.

**Important Point to Remember:**

*   The core idea of BPTT is to treat the RNN as a single, very deep feedforward network for the purpose of gradient calculation, but then to aggregate the gradients for the shared weights across all time steps.

## 4. Truncated BPTT

A significant challenge with standard BPTT is that for very long sequences, the unrolled network can become extremely deep. This can lead to:

*   **Vanishing Gradients:** Gradients can become very small as they propagate through many layers, making it difficult to learn long-term dependencies.
*   **Exploding Gradients:** Conversely, gradients can become very large, leading to unstable training.
*   **High Computational Cost:** Storing activations for all time steps for backpropagation can be memory-intensive and computationally expensive.

To address these issues, a variation called **Truncated Backpropagation Through Time (TBPTT)** is commonly used.

**Key Concepts:**

*   **Segmentation:** The training sequence is divided into smaller chunks or segments.
*   **Limited Backpropagation:** BPTT is applied only within each segment, and the hidden state is passed from the end of one segment to the beginning of the next.

**How TBPTT Works:**

1.  The entire sequence is divided into segments of length $k$.
2.  For each segment, the forward pass is performed.
3.  The backward pass (BPTT) is performed only for this segment of length $k$.
4.  The hidden state at the end of the segment is stored and used as the initial hidden state for the next segment.

**Advantages of TBPTT:**

*   **Reduced Computational Cost:** Less memory is required to store activations.
*   **Mitigates Vanishing/Exploding Gradients:** By limiting the depth of backpropagation, the risk of severe gradient issues is reduced.

**Disadvantages of TBPTT:**

*   **Limited Long-Term Dependencies:** The ability to learn dependencies beyond the segment length $k$ is compromised.

**Textbook Reference:**

*   **Geron (2019), "Hands-on Machine Learning with Scikit-Learn, Keras, and TensorFlow":** Geron will likely provide practical examples of implementing TBPTT in Keras/TensorFlow, explaining how to manage the state between segments.
*   **Ekman (2022), "Learning Deep Learning":** Ekman might discuss TBPTT as a practical solution to the limitations of standard BPTT.

**Important Point to Remember:**

*   TBPTT is a trade-off between computational efficiency and the ability to learn very long-term dependencies. The choice of segment length $k$ is a hyperparameter that needs to be tuned.

## 5. Dealing with Vanishing and Exploding Gradients

Vanishing and exploding gradients are inherent problems when training deep neural networks, and they are particularly pronounced in simple RNNs trained with BPTT on long sequences.

**5.1. Vanishing Gradients:**

*   **Cause:** Repeated multiplication of small numbers (gradients of activation functions like sigmoid or tanh when inputs are far from zero) during backpropagation through many time steps.
*   **Effect:** The gradients for early time steps become close to zero, preventing the network from learning long-term dependencies. The weights associated with these early steps are barely updated.
*   **Analogy:** Imagine trying to whisper a message through a long line of people; the message gets weaker and weaker.

**5.2. Exploding Gradients:**

*   **Cause:** Repeated multiplication of large numbers (gradients of activation functions when inputs are large, or large weight values).
*   **Effect:** Gradients become extremely large, causing massive updates to the weights, leading to unstable training and the model diverging.
*   **Analogy:** Shouting a message through a line of people; the message becomes distorted and amplified uncontrollably.

**5.3. Solutions:**

Several techniques have been developed to combat these gradient problems:

*   **Gradient Clipping:**
    *   **Concept:** If the norm of the gradient vector exceeds a certain threshold, the gradient vector is scaled down to match the threshold. This prevents gradients from becoming too large.
    *   **How it works:** Calculate the global norm of the gradients for all parameters. If the norm is greater than a predefined `max_grad_norm`, scale all gradients by `max_grad_norm / global_norm`.
    *   **Benefit:** Primarily addresses exploding gradients.
    *   **Reference:** Geron's book is a good source for practical implementations of gradient clipping.

*   **Better Activation Functions:**
    *   **ReLU (Rectified Linear Unit):** For positive inputs, the gradient is 1. This helps alleviate vanishing gradients compared to sigmoid or tanh, especially for positive values. However, it can still suffer from "dying ReLUs" where neurons get stuck with zero gradients.
    *   **Leaky ReLU, PReLU:** Variants of ReLU that address the dying ReLU problem by having a small non-zero slope for negative inputs.

*   **Weight Initialization:**
    *   **Concept:** Carefully initializing the weights can help keep the variance of activations and gradients more stable at the beginning of training.
    *   **Techniques:** Xavier/Glorot initialization, He initialization are common choices. For RNNs, specific initialization strategies might be employed for the recurrent weights.

*   **Advanced RNN Architectures (Beyond Simple RNNs):** This is arguably the most impactful solution for learning long-term dependencies.
    *   **Long Short-Term Memory (LSTM) Networks:** LSTMs introduce "gates" (input, forget, output gates) and a "cell state" that allows them to selectively remember or forget information over long periods. This is a major breakthrough for overcoming vanishing gradients and learning long-term dependencies.
    *   **Gated Recurrent Units (GRUs):** GRUs are a simplified version of LSTMs with fewer gates (reset and update gates) and no separate cell state. They offer comparable performance to LSTMs in many tasks while being computationally more efficient.
    *   **Reference:** All textbooks (Ekman, Geron, Goodfellow, etc.) will extensively cover LSTMs and GRUs as solutions to the limitations of simple RNNs.

**Important Points to Remember:**

*   Vanishing gradients hinder learning long-term dependencies.
*   Exploding gradients destabilize training.
*   Gradient clipping is a direct intervention for exploding gradients.
*   LSTMs and GRUs are architectural solutions that inherently address vanishing gradients by providing better mechanisms for information flow through time.

## 6. Practical Implementation Considerations

When implementing RNN training, several practical aspects are important:

*   **Batching:** Training data is typically processed in mini-batches. For sequential data, this means creating batches of sequences. Padding might be required to ensure sequences within a batch have the same length.
*   **State Management:** When using TBPTT or processing sequences one by one, correctly managing the hidden state between batches or segments is crucial.
*   **Hyperparameter Tuning:** Learning rate, batch size, segment length (for TBPTT), gradient clipping threshold, and optimizer choice are all important hyperparameters that need tuning.
*   **Regularization:** Techniques like dropout can be applied to RNNs, but care must be taken regarding its application to prevent disrupting the temporal flow of information (e.g., applying dropout only to the non-recurrent connections).

**Textbook Reference:**

*   **Geron (2019), "Hands-on Machine Learning with Scikit-Learn, Keras, and TensorFlow":** Geron's book is invaluable for practical implementation details, showing how to set up and train RNNs in Keras, including handling batching and state.
*   **Foster (2022), "Generative Deep Learning":** If the context involves generative tasks with RNNs, Foster's book would provide specific implementation examples for those scenarios.

## 7. Practice Questions

**Question 1:** Briefly explain the core idea behind Backpropagation Through Time (BPTT) for training RNNs.

**Answer:** BPTT involves unrolling the RNN into a deep feedforward network where each time step is a separate layer. Gradients are then computed using the standard backpropagation algorithm, and these gradients are summed up across all time steps for the shared weights.

**Question 2:** What are the main challenges associated with training simple RNNs on long sequences, and what are the consequences of these challenges?

**Answer:** The main challenges are vanishing gradients and exploding gradients.
*   **Vanishing gradients:** Leads to difficulty in learning long-term dependencies as gradients for early time steps become too small.
*   **Exploding gradients:** Leads to unstable training and model divergence as gradients become excessively large.

**Question 3:** How does Truncated Backpropagation Through Time (TBPTT) differ from standard BPTT, and what is its primary advantage and disadvantage?

**Answer:** TBPTT divides long sequences into smaller segments and performs BPTT only within each segment. Its primary advantage is reduced computational cost and mitigation of gradient issues. Its main disadvantage is the inability to learn dependencies that span beyond the segment length.

**Question 4:** Name at least two techniques used to mitigate vanishing or exploding gradients in RNNs.

**Answer:**
1.  Gradient Clipping
2.  Using advanced architectures like LSTMs or GRUs
3.  Using ReLU activation functions (with caveats)
4.  Proper weight initialization

**Question 5:** (Conceptual/Slightly Advanced) Consider an RNN with a hidden state of size 10 and input of size 5 at each time step. If the activation function is tanh, and you are computing the gradient of the loss with respect to the recurrent weight matrix $W_{hh}$ (which has dimensions $10 \times 10$), describe how the gradient for a specific element $W_{hh}[i, j]$ would be calculated across two time steps ($t-1$ and $t$).

**Answer:**
The gradient for $W_{hh}[i, j]$ at time step $t$ would involve:
*   The gradient of the loss at time $t$ with respect to the output at $t$, propagated back to $h^{(t)}$.
*   The gradient of the loss at time $t$ with respect to $h^{(t)}$.
*   The gradient of the loss at time $t$ with respect to $h^{(t-1)}$, which then affects the gradient of $h^{(t)}$ through the recurrent connection.

Specifically, $\frac{\partial L^{(t)}}{\partial W_{hh}[i, j]}$ would depend on $\frac{\partial L^{(t)}}{\partial h^{(t)}}$ and the activation of the $j$-th neuron in $h^{(t-1)}$. Furthermore, $\frac{\partial L}{\partial h^{(t-1)}}$ would be influenced by $\frac{\partial L}{\partial h^{(t)}}$ via the term $\frac{\partial L}{\partial h^{(t)}} \frac{\partial h^{(t)}}{\partial h^{(t-1)}}$. The gradient for $W_{hh}[i, j]$ would be the sum of its contributions at each time step:

$\frac{\partial L}{\partial W_{hh}[i, j]} = \sum_{t=1}^{T} \frac{\partial L^{(t)}}{\partial h^{(t)}} \frac{\partial h^{(t)}}{\partial W_{hh}[i, j]}$

where $\frac{\partial h^{(t)}}{\partial W_{hh}[i, j]} = \frac{\partial h^{(t)}}{\partial (W_{hh}h^{(t-1)} + b_h)} \frac{\partial (W_{hh}h^{(t-1)} + b_h)}{\partial W_{hh}[i, j]}$.
This involves the derivative of the activation function at $h^{(t)}$ and the value of $h^{(t-1)}_j$. The gradient computation "through time" means that $\frac{\partial L^{(t)}}{\partial h^{(t)}}$ itself depends on $\frac{\partial L^{(t+1)}}{\partial h^{(t+1)}}$, and so on, back to the beginning.

## 8. Key Points to Remember

*   **BPTT is the standard algorithm for training RNNs**, involving unrolling and applying the chain rule.
*   **Shared weights across time steps** are the defining characteristic that BPTT addresses.
*   **Vanishing and exploding gradients** are significant problems for simple RNNs on long sequences.
*   **TBPTT** is a practical compromise to manage computational costs and gradient issues by segmenting sequences.
*   **LSTMs and GRUs** are advanced RNN architectures that inherently mitigate vanishing gradients and are crucial for learning long-term dependencies.
*   **Gradient clipping** is a direct method to prevent exploding gradients.
*   **Careful state management** is vital when processing sequences in batches or with TBPTT.

This comprehensive set of notes covers the training of RNNs, the mechanics of BPTT, the challenges and solutions related to gradients, and practical considerations, aligning with the learning outcomes and course objectives.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=mc979OhitAg) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=M0mx8S05v60) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=8XG7U5yN668) |
