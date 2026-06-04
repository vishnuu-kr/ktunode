---
title: "Feature and weight visualization, t-SNE"
subject: "DEEP LEARNING TECHNIQUES"
module: "Module 1: Review of ANN: Perceptrons"
branch: "Electronics and Communication Engineering"
semester: 7
topicId: "68a5c461b09ce205780ff2ce"
status: "completed"
scrapedAt: "2026-05-23T18:06:03.683Z"
---
# Deep Learning Techniques: Module 1: Review of ANN: Perceptrons

## Topic: Feature and Weight Visualization, t-SNE

### Learning Outcomes:
*   Understand the importance of visualizing features and weights in neural networks.
*   Explore techniques for visualizing the learned representations within a neural network.
*   Learn about t-Distributed Stochastic Neighbor Embedding (t-SNE) and its application in visualizing high-dimensional data.
*   Gain insights into how visualization aids in understanding model behavior and debugging.

---

### 1. Introduction to Visualization in Neural Networks

Visualizing neural networks is crucial for several reasons:

*   **Understanding Learned Representations:** It helps us see what the network has learned about the data, revealing patterns and structures that might not be obvious otherwise.
*   **Debugging and Model Analysis:** Visualizations can highlight issues like vanishing/exploding gradients, overfitting, or incorrect feature learning, facilitating debugging.
*   **Gaining Intuition:** Visualizing weights and activations provides an intuitive understanding of how the network processes information.
*   **Communicating Results:** Clear visualizations can effectively communicate the inner workings and performance of a neural network to others.

---

### 2. Feature Visualization

Feature visualization aims to understand what aspects of the input data a particular neuron or layer is sensitive to. It answers the question: "What kind of input maximizes the activation of this unit?"

#### 2.1. Activation Maximization

This technique involves finding an input image (or other data) that maximally activates a specific neuron or a set of neurons.

*   **Process:**
    1.  Initialize a random input (e.g., an image).
    2.  Feed this input through the network.
    3.  Calculate the activation of the target neuron(s).
    4.  Use gradient ascent to iteratively update the input, aiming to increase the target activation.
    5.  Regularization techniques (e.g., L2 regularization, total variation) are often applied to the input to produce more visually interpretable results.

*   **Example:** Visualizing the activation of a neuron in an early layer of a Convolutional Neural Network (CNN) trained on image data might reveal that it responds strongly to edges, corners, or specific textures. A neuron in a later layer might respond to more complex features like eyes, ears, or entire objects.

*   **Textbook Reference:**
    *   **"Learning Deep Learning" by Magnus Ekman:** Chapter 5, "Visualizing Neural Network Activations and Weights," discusses techniques for understanding what a network has learned, including visualizing the features learned by different layers.
    *   **"Deep Learning" by Goodfellow, Bengio, and Courville:** Chapter 14, "Visualizing and Understanding Convolutional Networks," provides a detailed overview of feature visualization methods for CNNs, including activation maximization.

#### 2.2. Saliency Maps / Gradient-based Visualization

Saliency maps highlight which parts of the input were most influential in determining the network's output for a given input.

*   **Process:**
    1.  Feed a specific input through the network.
    2.  Calculate the gradient of the output score (e.g., the score for the predicted class) with respect to the input pixels.
    3.  The magnitude of these gradients indicates the "saliency" of each input pixel. Higher gradient magnitudes suggest that small changes in those pixels would significantly alter the output score.

*   **Types of Saliency Maps:**
    *   **Vanilla Gradients:** Directly compute $\nabla_x \text{OutputScore}$.
    *   **Gradient * Input:** Multiply the gradient by the input value.
    *   **Integrated Gradients:** A more robust method that considers the path from a baseline input (e.g., black image) to the actual input.

*   **Example:** For an image classifier, a saliency map can highlight the regions of an image that the network focused on to make its prediction. For instance, if the network predicts "cat," the saliency map might highlight the cat's face or body.

*   **Textbook Reference:**
    *   **"Hands-on Machine Learning with Scikit-Learn, Keras, and TensorFlow" by Aurélien Géron:** While not directly a visualization chapter, understanding gradients is fundamental to this technique, as covered in chapters related to backpropagation and gradient descent.
    *   **"Dive Deep into Machine Learning" by Zhang, Lipton, Li, and Smola:** Chapter 10, "Deep Learning," discusses techniques for interpreting models, including gradient-based attribution methods.

---

### 3. Weight Visualization

Weight visualization aims to understand what the learned weights represent. This is particularly relevant for:

*   **Perceptrons/Fully Connected Layers:** Visualizing the weight vector associated with a neuron can reveal what input features it is sensitive to.
*   **Convolutional Layers:** The filters (kernels) in CNNs are the weights. Visualizing these filters can show what patterns (edges, textures, etc.) the network is learning to detect.

#### 3.1. Visualizing Weights in Fully Connected Layers

*   **Process:** For a neuron in a fully connected layer, its weights form a vector. If the input features are interpretable (e.g., pixels in an image), this weight vector can be reshaped into a structure similar to the input (e.g., an image).

*   **Example:** If a first-layer perceptron is connected to flattened image pixels, its weight vector can be reshaped into an image. Neurons in early layers often learn to detect simple patterns like edges or color blobs.

*   **Limitations:** This becomes less intuitive for layers deeper in the network where the input features are already abstract representations.

#### 3.2. Visualizing Filters/Kernels in Convolutional Layers

This is a cornerstone of understanding CNNs.

*   **Process:** The filters (kernels) are small matrices that are convolved across the input. These filters are the weights learned by the convolutional layer. They can be directly visualized as images.

*   **Example:**
    *   **First Layer CNNs:** Filters often resemble edge detectors (e.g., Gabor filters), color blobs, or simple texture patterns.
    *   **Deeper Layer CNNs:** Filters can become more complex, responding to combinations of simpler features, specific object parts (e.g., an eye, a wheel), or even entire object categories.

*   **Textbook Reference:**
    *   **"Learning Deep Learning" by Magnus Ekman:** Chapter 5 directly addresses visualizing weights in both fully connected and convolutional layers.
    *   **"Deep Learning" by Goodfellow, Bengio, and Courville:** Chapter 14 provides excellent examples and explanations of visualizing CNN filters.
    *   **"Neural Networks for Deep Learning" by Michael Nielsen:** While this book focuses on the fundamentals, understanding how weights are updated during training is key to appreciating what they represent.

---

### 4. Visualizing Learned Representations in High-Dimensional Space: t-SNE

As neural networks learn, they transform input data into higher-level, more abstract representations in their hidden layers. These representations exist in high-dimensional space, making them difficult to visualize directly. **t-Distributed Stochastic Neighbor Embedding (t-SNE)** is a powerful dimensionality reduction technique specifically designed for visualizing high-dimensional datasets.

#### 4.1. What is t-SNE?

t-SNE is a non-linear dimensionality reduction technique that aims to preserve the local structure of the data. It maps high-dimensional data points to a low-dimensional space (typically 2D or 3D) such that similar data points are clustered together, and dissimilar data points are far apart.

*   **Key Idea:** It models the similarity between high-dimensional data points as conditional probabilities and tries to find a low-dimensional embedding that has similar probabilities.

#### 4.2. How t-SNE Works (High-Level Overview)

1.  **High-Dimensional Similarities:** For each pair of high-dimensional data points $x_i$ and $x_j$, t-SNE computes a similarity score $p_{j|i}$ based on their Euclidean distance. Points closer to $x_i$ have a higher probability of being selected as its neighbor.
    $$p_{j|i} = \frac{\exp(-\|x_i - x_j\|^2 / 2\sigma_i^2)}{\sum_{k \neq i} \exp(-\|x_i - x_k\|^2 / 2\sigma_i^2)}$$
    A Gaussian distribution is centered on $x_i$, and $p_{j|i}$ is the probability that $x_j$ would be picked as a neighbor if neighbors were picked in proportion to their probability density under this Gaussian. The variance $\sigma_i$ is found for each point $x_i$ such that the perplexity (a measure related to the number of effective neighbors) is met.

2.  **Low-Dimensional Similarities:** For each pair of corresponding low-dimensional points $y_i$ and $y_j$, t-SNE computes a similar score $q_{ij}$, but uses a **Student's t-distribution** with one degree of freedom (Cauchy distribution). This heavy-tailed distribution allows points that are far apart in the high-dimensional space to be modeled by a very small probability in the low-dimensional space, preventing overcrowding.
    $$q_{ij} = \frac{(1 + \|y_i - y_j\|^2)^{-1}}{\sum_{k \neq l} (1 + \|y_k - y_l\|^2)^{-1}}$$

3.  **Minimizing Divergence:** t-SNE aims to minimize the difference (Kullback-Leibler divergence) between the high-dimensional probabilities ($P$) and the low-dimensional probabilities ($Q$). This is done using gradient descent.
    $$C = \text{KL}(P || Q) = \sum_{i \neq j} p_{ij} \log \frac{p_{ij}}{q_{ij}}$$
    where $p_{ij} = \frac{p_{j|i} + p_{i|j}}{2N}$ is the joint probability in the high-dimensional space.

#### 4.3. Applications of t-SNE in Deep Learning

*   **Visualizing Hidden Layer Activations:** Extract the feature vectors from a hidden layer for a dataset and then use t-SNE to visualize these vectors in 2D. This can reveal how the network clusters different classes or data points.
    *   **Example:** If you feed images of different digits (0-9) into a network and extract the activations from a penultimate layer, t-SNE can be used to plot these activations. Ideally, you would see distinct clusters for each digit.
*   **Visualizing Embeddings:** t-SNE is widely used to visualize word embeddings (like Word2Vec, GloVe) or image embeddings learned by autoencoders or Siamese networks.

*   **Textbook Reference:**
    *   **"Hands-on Machine Learning with Scikit-Learn, Keras, and TensorFlow" by Aurélien Géron:** While not a dedicated t-SNE chapter, Géron often provides practical examples of dimensionality reduction techniques for visualization, and t-SNE is a common choice in such contexts (e.g., visualizing MNIST or Fashion-MNIST datasets).
    *   **"Dive Deep into Machine Learning" by Zhang, Lipton, Li, and Smola:** Chapter 10, "Deep Learning," in its interpretation section, might touch upon visualization techniques like t-SNE for understanding learned representations.

#### 4.4. Important Considerations for t-SNE

*   **Computational Cost:** t-SNE can be computationally expensive, especially for large datasets.
*   **Non-deterministic:** The results can vary slightly with each run due to the random initialization and the optimization process.
*   **Local Minima:** It can get stuck in local minima, so running it multiple times with different random seeds is advisable.
*   **Hyperparameter Tuning:** The `perplexity` hyperparameter is crucial. It should be roughly between 5 and 50, and typically set to a value less than the number of data points.
*   **Interpretation:**
    *   **Cluster Sizes and Distances:** The size and distance of clusters in a t-SNE plot are not directly interpretable. t-SNE primarily preserves local neighborhoods. Large distances between clusters don't necessarily mean they are very different, and small distances don't necessarily mean they are very similar in the original high-dimensional space.
    *   **Focus on Local Structure:** The most reliable information comes from the relative positions of points within clusters and the formation of distinct clusters.
    *   **Global Structure:** t-SNE is generally not good at preserving global structure.
*   **Alternatives:** UMAP is a more recent and often faster alternative that can sometimes preserve global structure better.

---

### 5. Connecting Visualization to Course Outcomes

*   **CO1: Analyze and differentiate between various neural network components.**
    *   **Feature Visualization:** Helps analyze what different neurons and layers "look for" in the input.
    *   **Weight Visualization:** Shows what the weights (parameters) of different components (filters, connections) represent.
    *   **t-SNE:** Visualizes the output of components (activations from layers) in a reduced dimensional space, allowing for analysis of how different components transform the data.

*   **CO2: Develop and implement strategies for training neural networks.**
    *   Visualizations are essential for diagnosing training issues. If feature visualizations show random noise or if t-SNE plots show no separation, it might indicate problems with the training process (e.g., learning rate, architecture, initialization).

*   **CO3: Apply and Integrate Sequence and Generative Models.**
    *   While this topic is more focused on ANNs and CNNs, the principles of visualizing learned representations apply to RNNs, LSTMs, and Transformers as well. Visualizing attention weights in Transformers or hidden states in RNNs can provide insights into their sequential processing.

*   **CO4: Evaluate the effectiveness of transformer models, including BERT and GPT, and assess the impact of transfer learning techniques.**
    *   For transfer learning, visualizing the representations learned by pre-trained models (e.g., through t-SNE) can show how well they generalize and capture semantic relationships, especially when adapting them to new tasks. Visualizing attention mechanisms in Transformers is crucial for understanding their behavior.

---

### 6. Key Points to Remember

*   **Visualization is key to understanding neural networks.** It bridges the gap between abstract mathematical operations and interpretable insights.
*   **Feature visualization** (activation maximization, saliency maps) shows what a network *responds to*.
*   **Weight visualization** shows what the learned *parameters* represent.
*   **t-SNE** is a powerful tool for visualizing high-dimensional data, including learned representations from neural networks.
*   **Interpret t-SNE plots carefully:** Focus on local structure and cluster formation, not absolute distances or cluster sizes.
*   Visualizations are essential for **debugging and improving model performance**.

---

### 7. Practice Questions and Exercises

**Question 1:**
Describe the difference between feature visualization and weight visualization. Provide an example of each.

**Answer 1:**
*   **Feature Visualization:** Aims to understand what kind of input data maximally activates a particular neuron or layer. For example, using activation maximization to find an image that makes a specific CNN neuron fire strongly, revealing it might be sensitive to cat ears.
*   **Weight Visualization:** Aims to understand what the learned parameters (weights) of a network represent. For example, visualizing the filters of a convolutional layer in a CNN, where early filters might represent edges and later filters might represent more complex patterns or object parts.

**Question 2:**
You've trained a CNN on images of dogs and cats. You extract the feature vectors from the last hidden layer for 100 dog images and 100 cat images. You then apply t-SNE to these 200 feature vectors and obtain a 2D plot. What would you expect to see in an ideal scenario, and what would the plot tell you about the network's learning?

**Answer 2:**
In an ideal scenario, the t-SNE plot would show two distinct clusters of points, with one cluster predominantly containing the embeddings of dog images and the other containing the embeddings of cat images. This would indicate that the network's learned representations in the last hidden layer have successfully captured the discriminative features between dogs and cats, allowing for clear separation of the classes.

**Question 3:**
What are the main limitations of t-SNE when interpreting visualization plots? How can you mitigate these limitations?

**Answer 3:**
Main limitations of t-SNE:
1.  **Non-deterministic:** Results can vary between runs.
2.  **Local Minima:** Can get stuck in suboptimal configurations.
3.  **Cluster Distances and Sizes are not meaningful:** t-SNE preserves local neighborhoods but not necessarily global distances or the relative sizes of clusters.
4.  **Computational Cost:** Can be slow for large datasets.

Mitigation strategies:
1.  **Run multiple times:** Use different random seeds to see if the overall structure is consistent.
2.  **Tune perplexity:** Experiment with different perplexity values.
3.  **Focus on local structure:** Interpret the relative positions of points within clusters and the formation of clusters themselves.
4.  **Consider alternatives:** Use UMAP for potentially faster processing and better global structure preservation.

**Exercise 1 (Conceptual):**
Imagine a perceptron in the first layer of a neural network trained on handwritten digits. If its weight vector is reshaped into a 28x28 image (assuming input images are 28x28 pixels), what kind of visual patterns might you expect to see in this weight image if the perceptron is learning to recognize the digit '0'?

**Exercise 1 Answer (Conceptual):**
You might expect to see a pattern that resembles the shape of a '0', perhaps with higher weights in the circular outer boundary and lower weights in the center. This would indicate that the perceptron is amplifying input signals that correspond to the pixels forming the shape of a '0'.

---
This concludes the study notes for Feature and Weight Visualization, and t-SNE. Remember to consult the provided textbooks for deeper dives into specific techniques and examples.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=mc979OhitAg) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=M0mx8S05v60) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=8XG7U5yN668) |
