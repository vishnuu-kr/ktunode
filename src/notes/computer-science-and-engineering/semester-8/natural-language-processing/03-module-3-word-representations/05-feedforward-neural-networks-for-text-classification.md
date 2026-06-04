---
title: "Feedforward Neural Networks for Text Classification"
subject: "NATURAL LANGUAGE PROCESSING"
module: "Module 3: Word representations"
branch: "Computer Science and Engineering"
semester: 8
topicId: "6841627a0fc9aa1fdbc8c9e8"
status: "completed"
scrapedAt: "2026-05-20T17:25:33.312Z"
---
# Natural Language Processing: Module 3 - Word Representations

## Topic: Feedforward Neural Networks for Text Classification

### Introduction

Feedforward Neural Networks (FNNs), also known as Multi-Layer Perceptrons (MLPs), are a fundamental type of artificial neural network. In the context of Natural Language Processing (NLP), they are widely used for various tasks, including text classification. This topic focuses on how FNNs can be effectively applied to categorize text documents or sentences into predefined classes.

---

### Learning Outcomes

By the end of this topic, you should be able to:

*   **Understand the architecture of a feedforward neural network for text classification.**
*   **Explain how word embeddings are used as input to feedforward neural networks.**
*   **Describe the role of hidden layers and activation functions in the classification process.**
*   **Understand the output layer and its activation function for text classification.**
*   **Explain the process of training a feedforward neural network for text classification, including loss functions and optimizers.**
*   **Discuss the advantages and disadvantages of using feedforward neural networks for text classification.**
*   **Recognize common applications of feedforward neural networks in text classification.**

---

### 1. Understanding the Architecture of a Feedforward Neural Network for Text Classification

A feedforward neural network for text classification typically consists of several layers: an input layer, one or more hidden layers, and an output layer. Information flows in one direction, from the input layer through the hidden layers to the output layer, without any cycles or loops.

#### Basic Structure:

*   **Input Layer:** Receives the numerical representation of the text.
*   **Hidden Layer(s):** Perform computations and extract features from the input. Each layer consists of multiple neurons.
*   **Output Layer:** Produces the final classification probabilities.

---

### 2. Explaining How Word Embeddings are Used as Input

Before feeding text into an FNN, words need to be converted into numerical representations that the network can process. **Word embeddings** are dense vector representations of words, where semantically similar words have similar vector representations.

#### Key Concepts:

*   **Word Embeddings:**
    *   Learned representations of words in a continuous vector space.
    *   Capture semantic and syntactic relationships between words.
    *   Examples: Word2Vec, GloVe, FastText.
*   **Embedding Matrix:** A lookup table where each row corresponds to a word in the vocabulary, and the columns represent the embedding dimensions.
*   **Input Representation:** For a given text (e.g., a sentence or document), we typically:
    1.  **Tokenize** the text into words.
    2.  Look up the embedding vector for each word in the embedding matrix.
    3.  **Aggregate** these word embeddings into a single fixed-size vector representing the entire text. Common aggregation methods include:
        *   **Averaging:** Summing all word vectors and dividing by the number of words.
        *   **Summing:** Simply summing all word vectors.
        *   **Concatenation (with padding):** If using fixed-size input, shorter sentences might be padded with zero vectors, and longer ones truncated. This is less common for simple FNNs and more relevant for sequential models.

#### Example: Sentiment Analysis of "This movie is great!"

1.  **Tokenization:** ["This", "movie", "is", "great", "!"]
2.  **Embedding Lookup:** Assume we have pre-trained embeddings for each word.
    *   `vector("This")`, `vector("movie")`, `vector("is")`, `vector("great")`, `vector("!")`
3.  **Aggregation (Averaging):**
    *   `Text_Vector = (vector("This") + vector("movie") + vector("is") + vector("great") + vector("!")) / 5`
    *   This `Text_Vector` (a single, fixed-size vector) becomes the input to the FNN.

---

### 3. Describing the Role of Hidden Layers and Activation Functions

Hidden layers are the core of the FNN, where feature extraction and complex pattern recognition occur.

#### Key Concepts:

*   **Neurons (Nodes):** Each neuron in a hidden layer receives input from the previous layer, performs a weighted sum of these inputs, adds a bias, and then applies an **activation function**.
*   **Weights and Biases:**
    *   **Weights (W):** Parameters that determine the strength of the connection between neurons.
    *   **Biases (b):** Parameters that allow the neuron to shift its activation function.
*   **Linear Transformation:** `z = W * x + b` (where `x` is the input vector, `W` is the weight matrix, and `b` is the bias vector).
*   **Activation Functions:** Non-linear functions applied to the output of the linear transformation. They introduce non-linearity into the model, allowing it to learn complex patterns.
    *   **Rectified Linear Unit (ReLU):**
        *   `f(z) = max(0, z)`
        *   **Pros:** Computationally efficient, helps mitigate vanishing gradients.
        *   **Cons:** "Dying ReLU" problem (neurons can become inactive).
    *   **Sigmoid (Logistic):**
        *   `f(z) = 1 / (1 + exp(-z))`
        *   **Pros:** Outputs values between 0 and 1, useful for probabilities in older models.
        *   **Cons:** Suffers from vanishing gradients for large positive or negative inputs.
    *   **Tanh (Hyperbolic Tangent):**
        *   `f(z) = (exp(z) - exp(-z)) / (exp(z) + exp(-z))`
        *   **Pros:** Outputs values between -1 and 1, centered around zero.
        *   **Cons:** Still susceptible to vanishing gradients.

#### How Hidden Layers Work:

Each hidden layer learns increasingly abstract features.
*   The first hidden layer might learn simple patterns (e.g., presence of certain words).
*   Subsequent hidden layers combine these patterns to detect more complex relationships relevant to the classification task.

---

### 4. Understanding the Output Layer and its Activation Function

The output layer produces the final prediction of the FNN. The structure and activation function of the output layer depend on the type of classification task.

#### Key Concepts:

*   **Number of Neurons:**
    *   **Binary Classification:** 1 neuron (predicts probability of belonging to the positive class).
    *   **Multi-class Classification:** `N` neurons, where `N` is the number of classes. Each neuron represents the probability of belonging to a specific class.
*   **Activation Functions:**
    *   **Binary Classification:**
        *   **Sigmoid:** `f(z) = 1 / (1 + exp(-z))`. The output is a probability between 0 and 1. A threshold (e.g., 0.5) is used to assign the class.
    *   **Multi-class Classification:**
        *   **Softmax:** `f(z_i) = exp(z_i) / sum(exp(z_j))` for all `j`.
            *   Ensures that the outputs are probabilities that sum up to 1 across all classes.
            *   The class with the highest probability is the predicted class.

#### Example: Sentiment Classification (Positive/Negative)

*   **Output Layer:** 1 neuron.
*   **Activation Function:** Sigmoid.
*   **Output:** A probability (e.g., 0.8) indicating the likelihood of the text being positive.

#### Example: Topic Classification (Sports/Politics/Technology)

*   **Output Layer:** 3 neurons (one for each class).
*   **Activation Function:** Softmax.
*   **Output:** A probability distribution (e.g., [0.1, 0.7, 0.2]) indicating the likelihood of the text belonging to Sports, Politics, and Technology, respectively.

---

### 5. Explaining the Process of Training a Feedforward Neural Network

Training involves adjusting the network's weights and biases to minimize the difference between its predictions and the actual labels.

#### Key Steps:

1.  **Initialization:** Weights and biases are initialized (often randomly).
2.  **Forward Pass:**
    *   Input text embeddings are fed into the network.
    *   Outputs are computed through the layers using the current weights and biases.
3.  **Loss Calculation:**
    *   A **loss function** quantifies the error between the predicted output and the true label.
    *   **Binary Cross-Entropy Loss (for binary classification):** Measures the difference between the predicted probability and the true label (0 or 1).
    *   **Categorical Cross-Entropy Loss (for multi-class classification):** Measures the difference between the predicted probability distribution and the true one-hot encoded label.
4.  **Backward Pass (Backpropagation):**
    *   The gradient of the loss function with respect to each weight and bias is computed.
    *   This process propagates the error backward through the network, layer by layer.
5.  **Weight Update:**
    *   An **optimizer** uses the computed gradients to update the weights and biases. The goal is to move the parameters in the direction that reduces the loss.
    *   **Optimizers:**
        *   **Stochastic Gradient Descent (SGD):** Updates weights based on the gradient of a single training example or a small batch.
        *   **Adam, RMSprop, Adagrad:** More advanced optimizers that adapt the learning rate for each parameter, often leading to faster convergence.
6.  **Epochs:** Steps 2-5 are repeated for multiple passes through the entire training dataset. Each pass is called an **epoch**.

#### **Important Note on Learning Rate:**

The **learning rate** is a hyperparameter that controls the step size during weight updates. A too-high learning rate can cause divergence, while a too-low learning rate can lead to slow convergence.

---

### 6. Discussing the Advantages and Disadvantages

#### Advantages:

*   **Simplicity:** Relatively straightforward architecture to understand and implement.
*   **Effectiveness for Structured Data:** Can perform well on text classification tasks when text is appropriately represented.
*   **Foundation for More Complex Models:** Understanding FNNs is crucial for grasping more advanced architectures like Convolutional Neural Networks (CNNs) and Recurrent Neural Networks (RNNs) used in NLP.
*   **Good Feature Extractors:** Hidden layers can learn meaningful features from the input embeddings.

#### Disadvantages:

*   **Ignores Word Order and Context:** Traditional FNNs that average word embeddings lose information about the sequential order of words and their specific contextual relationships. This can be a significant limitation for many NLP tasks.
*   **Fixed-Size Input Requirement:** When not averaging, FNNs typically require fixed-size inputs, which necessitates padding or truncation of text sequences, potentially losing information or introducing noise.
*   **Limited Contextual Understanding:** They struggle to capture long-range dependencies in text compared to sequential models.
*   **Scalability Issues:** For very large vocabularies and complex classification tasks, training can be computationally intensive.

---

### 7. Recognizing Common Applications

Feedforward Neural Networks are applied in various text classification scenarios:

*   **Sentiment Analysis:** Classifying text as positive, negative, or neutral.
*   **Spam Detection:** Identifying whether an email or message is spam.
*   **Topic Classification:** Assigning documents to predefined categories (e.g., sports, politics, technology).
*   **Intent Recognition:** Determining the user's intention behind a given query (e.g., booking a flight, asking a question).
*   **Fake News Detection:** Classifying articles as real or fake.

---

### Practice Questions and Exercises

**Question 1:** What is the primary role of word embeddings in a feedforward neural network for text classification?

**Question 2:** Explain the purpose of the Softmax activation function in the output layer for a multi-class text classification task.

**Question 3:** You are building a sentiment analysis model. If your text input is "The film was amazing!", and you are using GloVe embeddings, describe the typical steps to create the input vector for your FNN.

**Question 4:** What is the main limitation of using a simple averaged word embedding as input to an FNN for text classification, especially when compared to models that consider word order?

**Question 5:** Briefly describe the process of backpropagation in training a neural network.

---

### Answers to Practice Questions

**Answer 1:** Word embeddings convert words into dense numerical vectors that capture semantic relationships. These vectors serve as the input features to the feedforward neural network, allowing it to process and learn from textual data.

**Answer 2:** The Softmax activation function converts the raw output scores from the last layer into a probability distribution over all possible classes. This ensures that the predicted probabilities for each class are non-negative and sum up to 1, making them interpretable as the likelihood of the text belonging to each class.

**Answer 3:**
1.  **Tokenize:** "The film was amazing!" -> ["The", "film", "was", "amazing", "!"]
2.  **Lookup Embeddings:** Obtain the GloVe embedding vector for each token: `vector("The")`, `vector("film")`, `vector("was")`, `vector("amazing")`, `vector("!")`.
3.  **Aggregate:** Average all these embedding vectors to produce a single, fixed-size vector representing the entire sentence. This averaged vector will be the input to the FNN.

**Answer 4:** The main limitation is that averaging word embeddings **discards information about the order of words and their specific contextual relationships**. For instance, "not good" and "good not" would have very similar averaged embeddings, even though their meanings are opposite. Models that consider word order (like RNNs or CNNs with specific pooling strategies) can better capture these nuances.

**Answer 5:** Backpropagation is an algorithm used to train neural networks. It involves calculating the gradient of the loss function with respect to the network's weights and biases. This gradient indicates how much each parameter contributes to the error. These gradients are then used by an optimizer to update the parameters, gradually reducing the loss and improving the network's performance.

---

### Important Points to Remember:

*   **Word embeddings are crucial:** They transform text into a format understandable by neural networks.
*   **Aggregation methods matter:** Averaging is simple but can lose sequence information.
*   **Non-linearity is key:** Activation functions in hidden layers enable learning complex patterns.
*   **Output layer matches task:** Sigmoid for binary, Softmax for multi-class classification.
*   **Training involves:** Forward pass, loss calculation, backpropagation, and weight updates via optimizers.
*   **FNNs for text classification are a foundational concept**, but they have limitations in capturing sequential information.

---
