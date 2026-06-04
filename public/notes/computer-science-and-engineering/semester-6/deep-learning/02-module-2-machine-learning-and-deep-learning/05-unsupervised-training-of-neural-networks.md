---
title: "Unsupervised Training of Neural Networks"
subject: "DEEP LEARNING"
module: "Module 2: Machine Learning and Deep learning"
branch: "Computer Science and Engineering"
semester: 6
topicId: "684162770fc9aa1fdbc8bb30"
status: "completed"
scrapedAt: "2026-05-20T16:52:18.289Z"
---
# DEEP LEARNING: Module 2 - Machine Learning and Deep Learning

## Topic: Unsupervised Training of Neural Networks

**Description:** This topic explores the principles and techniques behind training neural networks without labeled data.

**Learning Outcomes:**

*   Understand the concept of unsupervised learning and its applications.
*   Explain the differences between supervised, unsupervised, and semi-supervised learning.
*   Describe and implement autoencoders for dimensionality reduction and feature learning.
*   Explain and apply techniques like Restricted Boltzmann Machines (RBMs) for unsupervised feature extraction.
*   Describe the use of Generative Adversarial Networks (GANs) for unsupervised learning and data generation.
*   Evaluate the performance of unsupervised learning models.

---

### 1. Introduction to Unsupervised Learning

*   **Definition:** Unsupervised learning is a type of machine learning algorithm used to draw inferences from *unlabeled* data.  Unlike supervised learning, where the algorithm learns from labeled input data, unsupervised learning identifies patterns, structures, and relationships in the data without any prior knowledge of the correct output.
*   **Key Characteristics:**
    *   **Unlabeled Data:** The training data consists of input features without corresponding output labels.
    *   **Pattern Discovery:** The goal is to discover hidden patterns, structures, and relationships within the data.
    *   **Data Exploration:** Often used for exploratory data analysis, finding clusters, and reducing dimensionality.
*   **Applications:**
    *   **Clustering:** Grouping similar data points together (e.g., customer segmentation).
    *   **Dimensionality Reduction:** Reducing the number of features while preserving essential information (e.g., image compression).
    *   **Anomaly Detection:** Identifying unusual or outlier data points (e.g., fraud detection).
    *   **Association Rule Mining:** Discovering relationships between different variables (e.g., market basket analysis).
    *   **Generative Modeling:** Learning the underlying data distribution to generate new, similar data (e.g., creating realistic images).

### 2. Supervised vs. Unsupervised vs. Semi-Supervised Learning

| Feature          | Supervised Learning                               | Unsupervised Learning                                  | Semi-Supervised Learning                                      |
|-------------------|---------------------------------------------------|-----------------------------------------------------|---------------------------------------------------------------|
| **Data Type**    | Labeled data (input features + target labels)     | Unlabeled data (input features only)                | Mix of labeled and unlabeled data                               |
| **Goal**         | Predict output labels for new input data           | Discover patterns and structures in the data         | Improve prediction accuracy using both labeled and unlabeled data |
| **Examples**       | Classification, Regression                         | Clustering, Dimensionality Reduction, Anomaly Detection | Training with small labeled dataset and large unlabeled dataset |
| **Algorithms**    | Linear Regression, Logistic Regression, SVM, Decision Trees, Random Forests, Neural Networks (CNNs, RNNs) | K-Means, Hierarchical Clustering, PCA, Autoencoders, RBMs, GANs | Self-Training, Co-Training, Label Propagation                 |

**Example:**

*   **Supervised:** Training a model to predict whether an email is spam or not spam, based on labeled data of spam and non-spam emails.
*   **Unsupervised:** Grouping customers into different segments based on their purchasing behavior, without knowing what each segment represents.
*   **Semi-Supervised:** Training a model to classify images using a small set of labeled images and a large set of unlabeled images.

### 3. Autoencoders

*   **Definition:** An autoencoder is a type of neural network trained to reconstruct its own input. It consists of two main parts: an *encoder* that compresses the input into a lower-dimensional representation (latent space), and a *decoder* that reconstructs the original input from this compressed representation.
*   **Architecture:**
    *   **Encoder:** Maps the input data to a lower-dimensional latent representation.
    *   **Latent Space:** The compressed representation of the input data. This is the bottleneck of the network.
    *   **Decoder:** Reconstructs the original input from the latent representation.
*   **Training:** The autoencoder is trained to minimize the reconstruction error (the difference between the original input and the reconstructed output).  Common loss functions include Mean Squared Error (MSE) and Binary Cross-Entropy.
*   **Uses:**
    *   **Dimensionality Reduction:** The latent space representation can be used as a lower-dimensional representation of the data.
    *   **Feature Learning:** The encoder learns meaningful features from the input data.
    *   **Anomaly Detection:** Autoencoders can be trained on normal data.  Data that deviates significantly from the normal patterns will have high reconstruction error, indicating an anomaly.
    *   **Denoising:**  Denoising autoencoders are trained to reconstruct clean data from noisy data.
*   **Types of Autoencoders:**
    *   **Vanilla Autoencoder:** Basic autoencoder with a single encoder and decoder layer.
    *   **Sparse Autoencoder:**  Adds a sparsity penalty to the latent representation, forcing the network to learn more efficient features.
    *   **Convolutional Autoencoder:**  Uses convolutional layers, suitable for image data.
    *   **Variational Autoencoder (VAE):** Produces a probabilistic latent space, allowing for data generation.

**Example:**

Imagine you have a dataset of images.  You can train an autoencoder to compress each image into a smaller representation (the latent space).  If you then decode this smaller representation, you should get an image that is very similar to the original. This allows for efficient storage or transmission of image data. Also, the latent space representation can be used as a new, reduced feature set for other machine learning tasks.

**Practice Question:**

1.  **Describe the architecture and training process of a vanilla autoencoder.**
    *   **Answer:** A vanilla autoencoder has an encoder that compresses the input into a lower-dimensional latent space, and a decoder that reconstructs the input from this latent space. It's trained by minimizing the reconstruction error between the original input and the reconstructed output, typically using MSE or Binary Cross-Entropy as the loss function.

### 4. Restricted Boltzmann Machines (RBMs)

*   **Definition:** A Restricted Boltzmann Machine (RBM) is a generative stochastic neural network that can learn a probability distribution over its set of inputs. It is a two-layer network with a visible layer (input layer) and a hidden layer. The connections are undirected and symmetric between the visible and hidden layers, but there are no connections within a layer (hence, "restricted").
*   **Architecture:**
    *   **Visible Layer (v):** Represents the input data.
    *   **Hidden Layer (h):**  Learns features from the input data.
    *   **Weights (W):** Connect the visible and hidden layers.
    *   **Biases (a, b):**  Associated with the visible and hidden units, respectively.
*   **Energy-Based Model:** RBMs are energy-based models, meaning they define a probability distribution through an energy function.  Lower energy states are more probable.
*   **Training (Contrastive Divergence):** The RBM is trained using an algorithm called Contrastive Divergence (CD).
    1.  **Forward Pass:**  Given a visible vector `v`, compute the probabilities of the hidden units being activated (i.e., set to 1).
    2.  **Sampling Hidden Units:**  Sample the states of the hidden units based on their probabilities.
    3.  **Backward Pass (Reconstruction):**  Given the sampled hidden vector `h`, reconstruct the visible layer by computing the probabilities of the visible units being activated.
    4.  **Sampling Visible Units:** Sample the states of the visible units based on their probabilities.
    5.  **Update Weights and Biases:**  Adjust the weights and biases to reduce the difference between the original input and the reconstructed input.
*   **Uses:**
    *   **Feature Extraction:** The hidden layer learns features from the input data.
    *   **Dimensionality Reduction:**  The hidden layer can be used as a lower-dimensional representation.
    *   **Collaborative Filtering:**  Used in recommender systems.
    *   **Deep Belief Networks (DBNs):** RBMs can be stacked to form Deep Belief Networks.

**Example:**

Imagine you want to learn the features of images of digits. You can feed each image into the visible layer of an RBM. After training, the hidden layer will contain learned features that represent parts of digits (e.g., edges, curves). These learned features can then be used for other tasks, like classifying the digits.

**Practice Question:**

1.  **Explain the concept of Contrastive Divergence and its role in training RBMs.**
    *   **Answer:** Contrastive Divergence is an iterative algorithm used to approximate the gradient of the log-likelihood function for training RBMs. It involves performing a forward pass (computing probabilities of hidden units given visible units), sampling hidden units, performing a backward pass (reconstructing visible units from sampled hidden units), sampling visible units, and then updating the weights and biases based on the difference between the original input and the reconstructed input. This process aims to minimize the difference between the model distribution and the data distribution.

### 5. Generative Adversarial Networks (GANs)

*   **Definition:** Generative Adversarial Networks (GANs) are a framework for training generative models. They consist of two neural networks: a *generator* and a *discriminator*, which are trained in an adversarial manner.
*   **Architecture:**
    *   **Generator (G):**  Takes random noise as input and generates synthetic data samples. Its goal is to create data that looks as realistic as possible.
    *   **Discriminator (D):** Takes both real data samples and generated data samples as input and tries to distinguish between them. Its goal is to correctly classify which samples are real and which are fake.
*   **Adversarial Training:**  The generator and discriminator are trained simultaneously.
    *   The generator tries to fool the discriminator by generating increasingly realistic data.
    *   The discriminator tries to improve its ability to distinguish between real and fake data.
    *   This adversarial process continues until the generator is able to produce data that is indistinguishable from real data.
*   **Loss Functions:**
    *   **Discriminator Loss:**  Binary cross-entropy loss, aiming to maximize the probability of correctly classifying real and fake samples.
    *   **Generator Loss:**  Binary cross-entropy loss, aiming to minimize the probability of the discriminator correctly classifying generated samples as fake (i.e., fooling the discriminator).
*   **Uses:**
    *   **Image Generation:** Creating realistic images from random noise.
    *   **Image Super-Resolution:** Enhancing the resolution of low-resolution images.
    *   **Image-to-Image Translation:** Converting images from one domain to another (e.g., turning sketches into realistic photos).
    *   **Text-to-Image Generation:** Creating images from textual descriptions.
    *   **Data Augmentation:** Generating synthetic data to augment existing datasets.

**Example:**

Imagine you want to create realistic images of cats. You train a GAN where the generator takes random noise and tries to generate cat images, and the discriminator tries to distinguish between real cat images and the generated images. As the training progresses, the generator becomes better at creating realistic cat images that fool the discriminator.

**Practice Question:**

1.  **Describe the roles of the generator and discriminator in a GAN and how they are trained.**
    *   **Answer:** In a GAN, the generator's role is to create synthetic data from random noise that resembles real data, while the discriminator's role is to distinguish between real data and the data generated by the generator. They are trained adversarially: the generator tries to fool the discriminator, and the discriminator tries to correctly identify real and fake data. The training process involves updating the parameters of both networks iteratively, with the generator aiming to minimize the discriminator's accuracy on generated samples and the discriminator aiming to maximize its accuracy on both real and generated samples.

### 6. Evaluating Unsupervised Learning Models

Evaluating unsupervised learning models can be tricky since there are no ground truth labels to compare against. Common evaluation metrics depend on the specific task:

*   **Clustering:**
    *   **Silhouette Score:** Measures how well each sample fits within its cluster compared to other clusters. Ranges from -1 to 1; higher scores indicate better clustering.
    *   **Davies-Bouldin Index:** Measures the average similarity between each cluster and its most similar cluster. Lower values indicate better clustering.
    *   **Calinski-Harabasz Index:** Measures the ratio of between-cluster variance to within-cluster variance. Higher values indicate better clustering.
*   **Dimensionality Reduction (Autoencoders):**
    *   **Reconstruction Error (MSE, Binary Cross-Entropy):** Measures the difference between the original input and the reconstructed output. Lower values indicate better reconstruction.
    *   **Visualization:**  Projecting the reduced-dimensional data onto a 2D or 3D space for visual inspection.
*   **Generative Models (GANs):**
    *   **Inception Score (IS):** Measures the quality and diversity of generated images.  Higher values are better.  Relies on a pre-trained Inception network.
    *   **Fréchet Inception Distance (FID):** Measures the distance between the feature distributions of real and generated images. Lower values are better.  Also relies on a pre-trained Inception network.
    *   **Human Evaluation:**  Having human evaluators rate the quality and realism of generated samples.

**Example:**

If you're using k-means to cluster customers, you can use the Silhouette score to evaluate how well-separated the clusters are.  A high Silhouette score indicates that customers within each cluster are very similar to each other and different from customers in other clusters.  For autoencoders, the reconstruction error (MSE) would indicate how well the decoder can reconstruct the original input after it's been compressed by the encoder.

**Practice Question:**

1.  **Explain why evaluating unsupervised learning models is challenging and describe two metrics that can be used to evaluate the performance of a clustering algorithm.**
    *   **Answer:** Evaluating unsupervised learning models is challenging because there are no ground truth labels available to compare against. Two metrics for evaluating clustering algorithms are the Silhouette Score and the Davies-Bouldin Index. The Silhouette Score measures how well each sample fits within its assigned cluster compared to other clusters, with higher scores indicating better clustering. The Davies-Bouldin Index measures the average similarity between each cluster and its most similar cluster, with lower values indicating better clustering.

---

**Important Points to Remember:**

*   Unsupervised learning is about discovering patterns in unlabeled data.
*   Autoencoders, RBMs, and GANs are powerful techniques for unsupervised feature learning and data generation.
*   The choice of unsupervised learning algorithm depends on the specific task and the characteristics of the data.
*   Evaluating unsupervised learning models requires careful consideration of appropriate metrics.
