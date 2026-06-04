---
title: "Deep Neural Network"
subject: "INTRODUCTION TO ARTIFICIAL INTELLIGENCE AND DATA 
SCIENCE"
module: "Module 1: Introduction to AI and Machine Learning :  Basics of Machine Learning"
branch: "Electrical and Electronics Engineering"
semester: 3
topicId: "68a200842b85456187f35b90"
status: "completed"
scrapedAt: "2026-05-23T16:14:01.868Z"
---
# Module 1: Introduction to AI and Machine Learning - Basics of Machine Learning

## Topic: Deep Neural Networks (DNNs)

### Learning Outcomes:

*   **Understand the fundamental structure and components of a Deep Neural Network.**
*   **Differentiate between shallow and deep neural networks.**
*   **Explain the role of activation functions in DNNs.**
*   **Describe the process of forward propagation and backpropagation in training a DNN.**
*   **Identify key hyperparameters that influence the performance of DNNs.**
*   **Recognize common applications of DNNs in various fields.**

### 1. Introduction to Deep Neural Networks (DNNs)

Deep Neural Networks (DNNs), also known as Multi-Layer Perceptrons (MLPs) when referring to their feedforward structure, are a class of artificial neural networks characterized by **multiple hidden layers** between the input and output layers. This depth allows them to learn hierarchical representations of data, capturing increasingly complex features.

#### Key Concepts:

*   **Artificial Neural Network (ANN):** A computational model inspired by the structure and function of biological neural networks. It consists of interconnected nodes (neurons) organized in layers.
*   **Neuron (Node/Perceptron):** The basic unit of an ANN. It receives input signals, processes them, and produces an output signal.
*   **Weights ($\mathbf{w}$):** Parameters associated with the connections between neurons, determining the strength of the signal passed between them.
*   **Bias ($\mathbf{b}$):** An additional parameter associated with each neuron, allowing it to shift the activation function.
*   **Activation Function ($\mathbf{f}$):** A non-linear function applied to the weighted sum of inputs and bias of a neuron, introducing non-linearity and enabling the network to learn complex patterns.
*   **Layers:** Neurons are organized into layers:
    *   **Input Layer:** Receives the raw input data.
    *   **Hidden Layers:** Intermediate layers that perform computations and extract features. DNNs have one or more hidden layers.
    *   **Output Layer:** Produces the final output of the network.

#### Shallow vs. Deep Neural Networks:

| Feature           | Shallow Neural Network (e.g., Single-Layer Perceptron, MLP with one hidden layer) | Deep Neural Network (Multiple hidden layers) |
| :---------------- | :-------------------------------------------------------------------------------- | :------------------------------------------- |
| **Hidden Layers** | One                                                                               | Two or more                                  |
| **Complexity**    | Learns simpler patterns                                                           | Learns hierarchical and complex features     |
| **Feature Learning** | Relies more on hand-crafted features                                              | Learns features automatically from data      |
| **Representation Power** | Limited                                                                           | High                                         |
| **Examples**      | Simple linear separation, basic pattern recognition                             | Image recognition, natural language processing, speech recognition |
