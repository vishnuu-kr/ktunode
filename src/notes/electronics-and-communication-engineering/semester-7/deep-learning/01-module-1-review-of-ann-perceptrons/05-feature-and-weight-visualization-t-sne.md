---
title: "Feature and weight visualization, t-SNE"
subject: "DEEP LEARNING"
module: "Module 1: Review of ANN: Perceptrons"
branch: "Electronics and Communication Engineering"
semester: 7
topicId: "68a5c461b09ce205780ff13b"
status: "completed"
scrapedAt: "2026-05-23T18:05:43.342Z"
---
# Deep Learning: Module 1 - Review of ANN: Perceptrons

## Topic: Feature and Weight Visualization, t-SNE

---

### 1. Introduction to Visualization in Neural Networks

**Goal:** To understand the internal workings of neural networks, especially in the context of Perceptrons and early neural network models. Visualization helps in debugging, understanding learned representations, and gaining insights into how the network makes decisions.

**Key Concepts:**

*   **Feature Visualization:** Understanding what the neurons in a neural network have learned to detect. This involves visualizing the inputs that maximally activate specific neurons.
*   **Weight Visualization:** Examining the weights connecting neurons. For simple models like Perceptrons, these weights directly relate to the decision boundary.
*   **Understanding Learned Representations:** Visualizing intermediate layer outputs to see how the network transforms raw data into more abstract representations.

**Relevance to Perceptrons:**

For a single Perceptron, the weights define a hyperplane (or a line in 2D) that separates the input space. Visualizing these weights allows us to see the learned decision boundary.

**Textbook References:**

*   **"Learning Deep Learning" by Magnus Ekman:** Likely covers the foundational aspects of understanding neural network internals, including visualization as a debugging and interpretability tool. (While specific page numbers aren't available without the book, the general theme of understanding network behavior would encompass this).
*   **"Hands-on Machine Learning with Scikit-Learn, Keras and TensorFlow" by Aurélien Géron:** This book is excellent for practical implementations. It often includes examples of visualizing weights or activations in simpler networks.

**Course Outcome Alignment:**

*   **CO1: Explain the basic concepts of neural networks (Knowledge Level: K2):** Understanding feature and weight visualization directly supports explaining how a neural network (even a simple Perceptron) processes information and learns to classify. It helps in grasping the concept of what the network "sees."

---

### 2. Visualizing Weights

**What are Weights?**

In a Perceptron, weights are scalar values associated with each input feature. They determine the importance of each feature in making a decision. The output of a Perceptron is typically a weighted sum of its inputs, passed through an activation function:

$ \text{output} = \text{activation}(\sum_{i=1}^{n} w_i x_i + b) $

Where:
*   $w_i$ is the weight for the $i$-th input feature.
*   $x_i$ is the $i$-th input feature.
*   $b$ is the bias term.

**How to Visualize Weights:**

*   **2D Input Space:** If the input features are 2D ($x_1, x_2$), the weights ($w_1, w_2$) define a line ($w_1 x_1 + w_2 x_2 + b = 0$). This line is the decision boundary. Visualizing the weights means plotting this line on the scatter plot of the input data.
*   **Higher Dimensional Input Space:** Visualizing weights directly becomes challenging beyond 2D. Techniques like PCA or t-SNE (discussed later) are used to reduce dimensionality for visualization. However, one can still inspect the magnitude of weights to understand feature importance. Larger absolute weights suggest a greater influence on the output.

**Example (2D Input):**

Imagine a Perceptron trained to classify points in a 2D plane.

*   **Input Data:** A set of (x, y) coordinates.
*   **Perceptron Weights:** $w_x, w_y$.
*   **Decision Boundary:** The line $w_x \cdot x + w_y \cdot y + b = 0$.
*   **Visualization:** Plot the data points. Then, plot the line defined by the Perceptron's weights. Points on one side of the line are classified as positive, and points on the other side are classified as negative.

**Important Point to Remember:**

The direction perpendicular to the decision boundary is given by the weight vector $w = [w_1, w_2, \dots, w_n]$. The magnitude of the weights influences the "strength" of the separation.

---

### 3. Visualizing Features (Activations)

**What are Features (Activations)?**

In a Perceptron, the "feature" learned is essentially the specific combination of input features that leads to a high activation of the neuron. In a single Perceptron, the activation is directly related to the weighted sum of inputs.

For more complex networks with multiple layers and neurons, each neuron in a layer learns to detect specific patterns or features in the output of the previous layer.

**How to Visualize Features:**

*   **Maximally Activating Inputs:** Find input samples that cause a particular neuron to have the highest activation value. This reveals what kind of input pattern the neuron is sensitive to.
*   **Synthesizing Features (for Deeper Networks):** For deeper layers, one can use optimization techniques (like gradient ascent) to generate an input image that maximally activates a neuron. This is more common in Convolutional Neural Networks (CNNs) but the principle applies to understanding learned representations.

**Example (Conceptual):**

Imagine a Perceptron classifying handwritten digits (0-9). If a neuron is trained to detect the digit '0', feeding it images of '0's would lead to high activation. Visualizing what makes this neuron "fire" would involve showing it images that look like '0'.

**Reference Book Connection:**

*   **"Neural Networks and Deep Learning" by Michael Nielsen:** Chapter 3 of Nielsen's online book is particularly relevant, as it discusses how to make neural networks learn. While it focuses on multi-layer networks, the underlying idea of neurons becoming sensitive to specific patterns is established. The concepts of gradient descent and how weights are adjusted to detect features are explained.

---

### 4. Challenges in High-Dimensional Data Visualization

**The Problem:**

Real-world datasets often have many features (high dimensionality). Visualizing data directly in more than 3 dimensions is impossible. This makes it hard to:

*   Understand the underlying structure of the data.
*   Identify clusters or separation patterns.
*   Debug models that operate on high-dimensional data.

**Why Standard Dimensionality Reduction (like PCA) Might Not Be Enough:**

*   **PCA (Principal Component Analysis):** Focuses on preserving the global variance of the data. It finds linear combinations of features that capture the most variance. However, PCA might not preserve local neighborhood structures, which are crucial for understanding how data points are clustered or separated by a classifier like a Perceptron.

**The Need for Non-Linear Dimensionality Reduction:**

To visualize complex, non-linear relationships and local structures in high-dimensional data, non-linear dimensionality reduction techniques are required.

---

### 5. t-Distributed Stochastic Neighbor Embedding (t-SNE)

**What is t-SNE?**

t-SNE is a powerful non-linear dimensionality reduction technique primarily used for visualizing high-dimensional data. It's particularly effective at revealing clusters and local structures in the data.

**Core Idea:**

t-SNE aims to map high-dimensional data points to a low-dimensional space (typically 2D or 3D) such that similar points in the high-dimensional space are close together in the low-dimensional space, and dissimilar points are far apart. It does this by converting high-dimensional Euclidean distances between data points into conditional probabilities that represent similarities.

**How it Works (Simplified):**

1.  **High-Dimensional Similarities:** For each pair of high-dimensional data points ($x_i, x_j$), t-SNE computes a probability $p_{ij}$ that represents their similarity. This is done using a Gaussian distribution centered at $x_i$. The variance of this Gaussian is adapted for each point such that the entropy of the distribution is constant.
    $ p_{ij} = \frac{\exp(-\|x_i - x_j\|^2 / 2\sigma_i^2)}{\sum_{k \neq i} \exp(-\|x_i - x_k\|^2 / 2\sigma_i^2)} $
    Here, $\sigma_i$ is the variance of the Gaussian centered at $x_i$, chosen to achieve a specific "perplexity" (related to the effective number of neighbors).

2.  **Low-Dimensional Similarities:** Similarly, t-SNE maps these points to a low-dimensional space ($y_i, y_j$) and calculates a similar probability $q_{ij}$ representing their similarity in the low-dimensional space. However, t-SNE uses a **Student's t-distribution with one degree of freedom** (which is equivalent to a Cauchy distribution) for this calculation. This heavy-tailed distribution helps to alleviate the "crowding problem" (where intermediate distances can be distorted).
    $ q_{ij} = \frac{(1 + \|y_i - y_j\|^2)^{-1}}{\sum_{k \neq i} (1 + \|y_i - y_k\|^2)^{-1}} $

3.  **Minimizing Divergence:** t-SNE then tries to minimize the difference between the high-dimensional probabilities ($p_{ij}$) and the low-dimensional probabilities ($q_{ij}$). This difference is measured using the **Kullback-Leibler (KL) divergence**:
    $ \text{KL}(P || Q) = \sum_{i \neq j} p_{ij} \log \frac{p_{ij}}{q_{ij}} $
    The low-dimensional embeddings ($y_i$) are optimized using gradient descent to minimize this KL divergence.

**Key Parameters in t-SNE:**

*   **Perplexity:** Roughly corresponds to the number of nearest neighbors considered for each point. Values typically range from 5 to 50. Higher perplexity means considering more neighbors.
*   **Learning Rate (eta):** Controls the step size during gradient descent.
*   **Number of Iterations:** The number of optimization steps.

**Strengths of t-SNE:**

*   Excellent for visualizing clusters and local structures.
*   Can reveal non-linear relationships.
*   Effective for exploring high-dimensional datasets.

**Weaknesses of t-SNE:**

*   **Stochasticity:** The output can vary slightly between runs due to the random initialization and optimization process.
*   **Interpretation of Distances:** The distances between clusters in the t-SNE plot are not necessarily meaningful. t-SNE primarily focuses on preserving local neighborhood structure.
*   **Computational Cost:** Can be computationally intensive for very large datasets.
*   **Does Not Preserve Global Structure:** While good at local structure, it doesn't necessarily preserve the global arrangement of clusters or the relative distances between distant points.
*   **Not for Dimensionality Reduction for Downstream Tasks:** t-SNE is primarily for visualization. It's not generally suitable for reducing dimensions before feeding data into another machine learning model because it's non-linear and not easily invertible.

**Textbook References:**

*   **"Hands-on Machine Learning with Scikit-Learn, Keras and TensorFlow" by Aurélien Géron:** Section 9.5 "Digit recognition" and later sections on dimensionality reduction will likely cover t-SNE as a visualization tool, providing practical Python code examples.
*   **"Dive deep into machine learning" by Astan Zhang and Zachary and Alexander Semola:** Might discuss t-SNE in the context of data exploration and visualization, potentially comparing it with PCA.

**Course Outcome Alignment:**

*   **CO1: Explain the basic concepts of neural networks (Knowledge Level: K2):** Understanding t-SNE helps in visualizing the output of intermediate layers or the final representations learned by a neural network, thereby aiding in explaining what features the network has learned. If we visualize the activations of hidden layers of a neural network using t-SNE, we can see if the network is learning to group similar inputs together.

---

### 6. Practical Applications and Examples

**Visualizing Perceptron Weights:**

*   **Scenario:** A Perceptron classifying 2D data points (e.g., points on a graph).
*   **Visualization:** Plot the data points. The Perceptron's weights ($w_1, w_2$) and bias ($b$) define a line $w_1 x_1 + w_2 x_2 + b = 0$. Plotting this line shows the decision boundary learned by the Perceptron.
*   **Insight:** We can see how well the Perceptron has separated the classes based on the orientation and position of the line.

**Visualizing Learned Representations with t-SNE:**

*   **Scenario:** Training a neural network (even a simple one, conceptually) on a dataset like MNIST (handwritten digits).
*   **Process:**
    1.  Train a neural network on the MNIST dataset.
    2.  Extract the output of a specific hidden layer for all the training samples. This output is a high-dimensional vector for each digit.
    3.  Apply t-SNE to these high-dimensional vectors to reduce them to 2D.
    4.  Plot the resulting 2D points, coloring each point according to its true digit label.
*   **Insight:** If the neural network has learned meaningful representations, t-SNE will show distinct clusters for each digit (0s together, 1s together, etc.). This demonstrates that the network is effectively separating the classes in its internal representations.

---

### 7. Practice Questions and Exercises

**Question 1 (Conceptual):**

What is the primary goal of feature and weight visualization in the context of neural networks, particularly for Perceptrons?

**Answer:**
The primary goal is to understand how the network processes information and makes decisions. For Perceptrons, visualizing weights helps us see the learned decision boundary, indicating how input features are combined to classify data. Visualizing features (activations) helps understand what patterns or characteristics of the input data activate specific neurons.

---

**Question 2 (t-SNE Understanding):**

Explain why t-SNE is often preferred over PCA for visualizing clusters in high-dimensional data.

**Answer:**
t-SNE is preferred because it's a non-linear dimensionality reduction technique that excels at preserving local neighborhood structures. While PCA focuses on preserving global variance using linear transformations, t-SNE converts high-dimensional similarities into probabilities and uses a heavy-tailed distribution in low dimensions to better separate clusters and reveal intricate local relationships that PCA might miss due to its linear nature.

---

**Question 3 (Practical Application - Perceptron):**

Suppose a Perceptron is trained to classify points in a 2D plane. Its learned weights are $w_1 = 2$ and $w_2 = -1$, and the bias is $b = -0.5$.
a) What is the equation of the decision boundary?
b) If a new point $(x, y) = (0.5, 0)$ is given, what would be the Perceptron's output (assuming a step activation function with threshold 0)?

**Answer:**

a) The equation of the decision boundary is $w_1 x_1 + w_2 x_2 + b = 0$.
Substituting the values: $2x - 1y - 0.5 = 0$.
This can be rewritten as $y = 2x - 0.5$. This is the line that separates the two classes.

b) The weighted sum is $2(0.5) + (-1)(0) + (-0.5) = 1 + 0 - 0.5 = 0.5$.
Assuming a step activation function with threshold 0:
If the weighted sum $> 0$, output is 1.
If the weighted sum $\leq 0$, output is 0.
Since $0.5 > 0$, the Perceptron's output would be 1.

---

**Question 4 (t-SNE Interpretation - Conceptual):**

You apply t-SNE to the activations of a hidden layer of a neural network trained on images of cats and dogs. The resulting 2D plot shows two distinct, well-separated clusters of points, with one cluster predominantly containing "cat" images and the other "dog" images. What does this visualization tell you about the neural network's learning process?

**Answer:**
This visualization indicates that the hidden layer has learned effective representations that separate cats and dogs. The t-SNE plot shows that the high-dimensional features extracted by the network allow for clear distinction between the two classes, suggesting the network is successfully learning discriminative features for classification. The well-separated clusters imply good clustering in the learned feature space.

---

### 8. Important Points to Remember

*   **Visualization is Key:** Don't treat neural networks as black boxes. Visualization helps in understanding, debugging, and improving them.
*   **Perceptron Decision Boundary:** For a Perceptron in 2D, the weights define a linear decision boundary. Visualizing this line is crucial.
*   **High Dimensionality Problem:** Direct visualization of data with many features is impossible.
*   **t-SNE:** A powerful non-linear technique for visualizing high-dimensional data by preserving local similarities.
*   **t-SNE Strengths:** Revealing clusters and local structures.
*   **t-SNE Weaknesses:** Not ideal for preserving global structure or for dimensionality reduction for downstream tasks. Distances between clusters in t-SNE plots are not directly interpretable.
*   **Perplexity:** A critical parameter for t-SNE that influences how many neighbors are considered.
*   **Connecting to CO1:** Visualizing weights and features directly helps explain the basic concepts of how a Perceptron learns and processes information, fulfilling CO1.

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=33vbFFFn04k) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=Q-tL8_628gE) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=8XG7U5yN668) |
