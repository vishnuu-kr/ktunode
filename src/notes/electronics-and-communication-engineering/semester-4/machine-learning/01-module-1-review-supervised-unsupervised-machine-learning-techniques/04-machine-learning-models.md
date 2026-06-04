---
title: "Machine Learning models"
subject: "MACHINE LEARNING"
module: "Module 1: Review: supervised, unsupervised machine learning techniques"
branch: "Electronics and Communication Engineering"
semester: 4
topicId: "68a5c45eb09ce205780fe61c"
status: "completed"
scrapedAt: "2026-05-23T17:50:08.636Z"
---
# MACHINE LEARNING: Module 1: Review - Supervised, Unsupervised Machine Learning Techniques

## Topic: Machine Learning Models

### Introduction

Machine learning models are algorithms that learn patterns from data without being explicitly programmed. They form the core of any machine learning system, enabling predictions, classifications, and data insights. This module provides a foundational review of the two primary paradigms: Supervised Learning and Unsupervised Learning, focusing on the models used within each.

**Key Concept:** A **model** in machine learning is a mathematical representation of a system that learns from data to make predictions or decisions. It is essentially a function that maps input features to output predictions.

---

## 1. Supervised Machine Learning Models

Supervised learning involves training a model on a labeled dataset, where each data point has a corresponding correct output or "label." The goal is to learn a mapping function from inputs to outputs, allowing the model to predict outputs for new, unseen data.

### 1.1 Types of Supervised Learning Problems

*   **Regression:** Predicting a continuous numerical output.
    *   **Example:** Predicting house prices, stock prices, temperature.
*   **Classification:** Predicting a discrete categorical output.
    *   **Example:** Identifying spam emails, classifying images of cats and dogs, diagnosing diseases.

### 1.2 Key Supervised Learning Models

#### 1.2.1 Linear Models

These models assume a linear relationship between input features and the output.

*   **Linear Regression (for Regression tasks):**
    *   **Concept:** Fits a linear equation (e.g., $y = \theta_0 + \theta_1x_1 + \theta_2x_2 + ... + \theta_nx_n$) to the data. The model learns the coefficients ($\theta$) that best describe the relationship.
    *   **Example:** Predicting house price ($y$) based on square footage ($x_1$) and number of bedrooms ($x_2$).
    *   **Textbook Reference:** *Hands-on Machine Learning with Scikit-Learn, Keras, and TensorFlow* (Geron, Chapter 4) covers Linear Regression in detail, including its mathematical formulation and implementation.
    *   **Important Point:** Assumes linearity and can be sensitive to outliers.

*   **Logistic Regression (for Classification tasks):**
    *   **Concept:** Despite its name, Logistic Regression is a classification algorithm. It uses a sigmoid function to predict the probability of a data point belonging to a particular class. The output is then thresholded to make a class prediction.
    *   **Example:** Predicting whether an email is spam (1) or not spam (0) based on word frequency.
    *   **Textbook Reference:** *Hands-on Machine Learning* (Geron, Chapter 3) and *Introduction to Machine Learning with Python* (Müller & Guido, Chapter 2) explain Logistic Regression for binary and multi-class classification.
    *   **Important Point:** Outputs probabilities, making it useful for understanding confidence.

*   **Support Vector Machines (SVM) (for Classification and Regression):**
    *   **Concept:** Finds an optimal hyperplane that best separates data points of different classes with the largest margin. For non-linearly separable data, it uses kernel tricks (e.g., Radial Basis Function - RBF kernel) to map data into a higher-dimensional space.
    *   **Example:** Image classification, text categorization.
    *   **Textbook Reference:** *Hands-on Machine Learning* (Geron, Chapter 7) provides a thorough treatment of SVMs, including kernels. *Machine Learning for Absolute Beginners* (Theobald, Chapter 8) offers a simplified explanation.
    *   **Important Point:** Effective in high-dimensional spaces and when the number of dimensions is greater than the number of samples. Can be computationally expensive for large datasets.

#### 1.2.2 Tree-Based Models

These models partition the feature space into a hierarchy of decision rules.

*   **Decision Trees (for Classification and Regression):**
    *   **Concept:** A tree-like structure where each internal node represents a test on an attribute, each branch represents an outcome of the test, and each leaf node represents a class label (in classification) or a continuous value (in regression).
    *   **Example:** Deciding whether to approve a loan based on income, credit score, and loan amount.
    *   **Textbook Reference:** *Hands-on Machine Learning* (Geron, Chapter 6) and *Introduction to Machine Learning with Python* (Müller & Guido, Chapter 6) thoroughly explain Decision Trees, including their splitting criteria (Gini impurity, entropy).
    *   **Important Point:** Prone to overfitting, can be unstable (small changes in data can lead to different trees).

*   **Ensemble Methods (combining multiple models):**
    *   **Random Forests (for Classification and Regression):**
        *   **Concept:** An ensemble of multiple decision trees, where each tree is trained on a random subset of the data and a random subset of features. Predictions are made by aggregating the results of individual trees (e.g., majority vote for classification, average for regression).
        *   **Example:** Medical diagnosis, fraud detection.
        *   **Textbook Reference:** *Hands-on Machine Learning* (Geron, Chapter 7) discusses Random Forests as a powerful ensemble technique.
        *   **Important Point:** Reduces overfitting and improves generalization compared to single decision trees.

    *   **Gradient Boosting Machines (e.g., Gradient Boosting, XGBoost, LightGBM) (for Classification and Regression):**
        *   **Concept:** Builds models sequentially, with each new model correcting the errors of the previous ones. It fits new models to the residual errors made by the ensemble so far.
        *   **Example:** Winning Kaggle competitions, predicting customer churn.
        *   **Textbook Reference:** *Hands-on Machine Learning* (Geron, Chapter 7) introduces Gradient Boosting. XGBoost and LightGBM are popular implementations often used in practice.
        *   **Important Point:** Often achieve state-of-the-art performance but can be more complex to tune and prone to overfitting if not regularized properly.

#### 1.2.3 K-Nearest Neighbors (KNN)

*   **Concept:** A non-parametric, instance-based learning algorithm. For classification, it classifies a new data point based on the majority class of its 'k' nearest neighbors in the training data. For regression, it predicts the average value of its 'k' nearest neighbors.
*   **Example:** Recommender systems (e.g., suggesting similar products), image recognition.
*   **Textbook Reference:** *Introduction to Machine Learning with Python* (Müller & Guido, Chapter 5) explains KNN and its parameter 'k'. *Machine Learning for Absolute Beginners* (Theobald, Chapter 7) also covers KNN.
*   **Important Point:** Simple to implement but can be computationally expensive during prediction, especially with large datasets. Sensitive to the choice of 'k' and feature scaling.

#### 1.2.4 Naive Bayes

*   **Concept:** A probabilistic classifier based on Bayes' Theorem with a "naive" assumption of independence between features. It calculates the probability of a data point belonging to each class and selects the class with the highest probability.
*   **Example:** Text classification (e.g., spam filtering), sentiment analysis.
*   **Textbook Reference:** *Introduction to Machine Learning with Python* (Müller & Guido, Chapter 3) covers Naive Bayes algorithms, including Gaussian Naive Bayes, Multinomial Naive Bayes, and Bernoulli Naive Bayes.
*   **Important Point:** Works well with high-dimensional data and is computationally efficient. The independence assumption is often violated in real-world data, but it can still perform well.

#### 1.2.5 Neural Networks (Deep Learning)

*   **Concept:** Models inspired by the structure and function of the human brain. They consist of interconnected nodes (neurons) organized in layers. Deep learning models have multiple hidden layers, allowing them to learn complex hierarchical representations of data.
    *   **Perceptron:** The simplest form of a neural network, a single neuron that can perform linear classification.
    *   **Multi-Layer Perceptron (MLP):** A network with one or more hidden layers, capable of learning non-linear relationships.
    *   **Convolutional Neural Networks (CNNs):** Primarily used for image data, leveraging convolutional layers to detect spatial hierarchies of features.
    *   **Recurrent Neural Networks (RNNs) / Long Short-Term Memory (LSTM):** Designed for sequential data like text and time series, capable of processing sequences and remembering past information.
*   **Example:** Image recognition, natural language processing, speech recognition.
*   **Textbook Reference:** *Learning Deep Learning* (Ekman) is dedicated to this topic. *Hands-on Machine Learning* (Geron, Part II) extensively covers neural networks and deep learning using TensorFlow and Keras.
*   **Important Point:** Can achieve state-of-the-art results but require large amounts of data and significant computational resources for training.

---

## 2. Unsupervised Machine Learning Models

Unsupervised learning involves training a model on an unlabeled dataset. The goal is to find patterns, structures, or relationships within the data itself, without explicit guidance on the desired output.

### 2.1 Types of Unsupervised Learning Problems

*   **Clustering:** Grouping similar data points together.
    *   **Example:** Customer segmentation, anomaly detection, image segmentation.
*   **Dimensionality Reduction:** Reducing the number of features while preserving essential information.
    *   **Example:** Data visualization, noise reduction, feature extraction for supervised learning.
*   **Association Rule Mining:** Discovering relationships between items in large datasets.
    *   **Example:** Market basket analysis (e.g., "customers who buy bread also buy milk").

### 2.2 Key Unsupervised Learning Models

#### 2.2.1 Clustering Algorithms

*   **K-Means Clustering:**
    *   **Concept:** An iterative algorithm that partitions data into 'k' distinct clusters. It assigns each data point to the cluster whose mean (centroid) is nearest, and then recalculates the centroids based on the assigned points.
    *   **Example:** Grouping customers based on purchasing behavior.
    *   **Textbook Reference:** *Introduction to Machine Learning with Python* (Müller & Guido, Chapter 8) and *Hands-on Machine Learning* (Geron, Chapter 9) detail K-Means and its variants.
    *   **Important Point:** Requires specifying the number of clusters ('k') beforehand. Sensitive to initial centroid placement and feature scaling.

*   **Hierarchical Clustering:**
    *   **Concept:** Builds a hierarchy of clusters. It can be agglomerative (bottom-up, starting with individual data points as clusters and merging them) or divisive (top-down, starting with one cluster and splitting it). The result is often represented as a dendrogram.
    *   **Example:** Biological classification, document analysis.
    *   **Textbook Reference:** *Introduction to Machine Learning with Python* (Müller & Guido, Chapter 8) covers hierarchical clustering, including linkage criteria and dendrograms.
    *   **Important Point:** Doesn't require specifying 'k' upfront, but can be computationally intensive for large datasets.

*   **DBSCAN (Density-Based Spatial Clustering of Applications with Noise):**
    *   **Concept:** Groups together points that are closely packed together (points with many nearby neighbors), marking as outliers points that lie alone in low-density regions.
    *   **Example:** Geospatial data analysis, identifying clusters in noisy datasets.
    *   **Textbook Reference:** *Hands-on Machine Learning* (Geron, Chapter 9) explains DBSCAN and its parameters (epsilon, min_samples).
    *   **Important Point:** Can find arbitrarily shaped clusters and is robust to noise.

#### 2.2.2 Dimensionality Reduction Techniques

*   **Principal Component Analysis (PCA):**
    *   **Concept:** A linear dimensionality reduction technique that identifies the directions (principal components) in the data that capture the most variance. It projects the data onto a lower-dimensional subspace defined by these principal components.
    *   **Example:** Image compression, noise filtering, visualizing high-dimensional data.
    *   **Textbook Reference:** *Hands-on Machine Learning* (Geron, Chapter 8) and *Introduction to Machine Learning with Python* (Müller & Guido, Chapter 11) thoroughly explain PCA, its mathematical basis, and applications.
    *   **Important Point:** Assumes linear relationships and is sensitive to feature scaling.

*   **t-Distributed Stochastic Neighbor Embedding (t-SNE):**
    *   **Concept:** A non-linear dimensionality reduction technique primarily used for visualization. It maps high-dimensional data into a low-dimensional space (typically 2D or 3D) while trying to preserve local structure, meaning that similar data points in high dimensions are mapped to points close to each other in low dimensions.
    *   **Example:** Visualizing high-dimensional datasets like image embeddings or document representations.
    *   **Textbook Reference:** *Hands-on Machine Learning* (Geron, Chapter 8) provides an overview of t-SNE, emphasizing its visualization capabilities.
    *   **Important Point:** Excellent for visualization but can be computationally expensive and the output can vary between runs. Not suitable for general-purpose dimensionality reduction for other tasks.

#### 2.2.3 Association Rule Mining

*   **Apriori Algorithm:**
    *   **Concept:** A classic algorithm for mining frequent itemsets and generating association rules. It uses a breadth-first search approach and prunes infrequent itemsets to improve efficiency.
    *   **Example:** Identifying products frequently purchased together in a supermarket.
    *   **Textbook Reference:** While not as extensively covered in general ML textbooks like Geron or Müller/Guido as other topics, it's a core concept in data mining. You can find detailed explanations in data mining textbooks or specialized resources.
    *   **Important Point:** Can be computationally intensive for very large datasets with many transactions.

---

## 3. Important Points to Remember

*   **Model Selection:** The choice of model depends heavily on the problem type (regression vs. classification), the nature of the data (linear vs. non-linear relationships, dimensionality), the amount of data available, and the computational resources.
*   **Feature Engineering & Preprocessing:** Most models perform better when features are well-engineered and preprocessed (e.g., scaling for distance-based algorithms like KNN and SVMs, handling missing values).
*   **Evaluation Metrics:** Different models require different evaluation metrics. For regression, common metrics include Mean Squared Error (MSE) and R-squared. For classification, accuracy, precision, recall, F1-score, and AUC are used.
*   **Overfitting vs. Underfitting:** A key challenge is finding a model that generalizes well to unseen data. Overfitting occurs when a model learns the training data too well, including its noise, leading to poor performance on new data. Underfitting occurs when a model is too simple to capture the underlying patterns.
*   **Hyperparameter Tuning:** Most models have hyperparameters that are not learned from the data but are set before training (e.g., 'k' in KNN, 'C' in SVM, learning rate in neural networks). Tuning these hyperparameters is crucial for optimal performance.
*   **No Free Lunch Theorem:** No single machine learning algorithm is best for all problems. The effectiveness of an algorithm depends on the characteristics of the data.

---

## 4. Practice Questions and Exercises

**Question 1 (CO1, K4):**
You are given a dataset of customer demographics and purchase history, and you want to identify distinct groups of customers for targeted marketing. Which primary type of machine learning would you use, and what are two common models suitable for this task?

**Question 2 (CO2, K3):**
A bank wants to predict whether a loan applicant will default on their loan. Is this a regression or classification problem? Name one algorithm that can be used to solve this problem and briefly explain how it works.

**Question 3 (CO3, K3):**
You have a large dataset of unlabeled images of animals and want to group similar images together. Which unsupervised learning technique would be most appropriate, and what are the key parameters you might need to consider for one of the algorithms (e.g., K-Means)?

**Question 4 (CO4, K3):**
What is the primary goal of dimensionality reduction, and name one linear and one non-linear technique used for this purpose. Briefly describe the core idea behind one of them.

**Question 5 (CO1, K4):**
Consider the "No Free Lunch" theorem in machine learning. What does it imply about the process of selecting a machine learning model for a specific problem?

---

## 5. Answers to Practice Questions

**Answer 1:**
The primary type of machine learning would be **Unsupervised Learning**, specifically **Clustering**.
Two common models suitable for this task are:
1.  **K-Means Clustering:** Groups customers into 'k' predefined clusters based on similarity in their demographics and purchase history.
2.  **Hierarchical Clustering:** Creates a tree-like structure of clusters, allowing for exploration of customer groups at different levels of granularity.

**Answer 2:**
This is a **classification** problem, as the output is a discrete category: "default" or "not default."
One algorithm that can be used is **Logistic Regression**. It works by modeling the probability of the applicant defaulting using a sigmoid function applied to a linear combination of their features. This probability is then thresholded to make a binary prediction.

**Answer 3:**
The most appropriate unsupervised learning technique is **Clustering**.
For **K-Means Clustering**, key parameters to consider include:
*   **'k' (number of clusters):** You need to decide how many groups of animal images you want to form. This can be determined through experimentation or using methods like the elbow method.
*   **Initial Centroid Placement:** The initial positions of cluster centroids can affect the final clustering result. Algorithms often use random initialization or specific seeding strategies.
*   **Distance Metric:** The choice of distance metric (e.g., Euclidean distance) to measure similarity between image features.

**Answer 4:**
The primary goal of dimensionality reduction is to **reduce the number of features (variables) in a dataset while retaining as much of the important information or variance as possible.** This helps to simplify models, reduce overfitting, improve computational efficiency, and aid in data visualization.
*   **Linear Technique:** **Principal Component Analysis (PCA)**.
*   **Non-linear Technique:** **t-Distributed Stochastic Neighbor Embedding (t-SNE)**.

**Brief Description of PCA:** PCA identifies new variables, called principal components, which are linear combinations of the original features. These components are orthogonal (uncorrelated) and ordered by the amount of variance they explain in the data. By keeping only the top principal components, you reduce dimensionality while preserving the most significant variations.

**Answer 5:**
The "No Free Lunch" theorem implies that there is **no universally best machine learning algorithm** that performs optimally for all possible datasets and problems. Therefore, when selecting a model:
*   It is crucial to **understand the characteristics of your data** (e.g., linearity, presence of noise, data size).
*   It often involves **experimenting with multiple algorithms** and comparing their performance on the specific task using appropriate evaluation metrics.
*   **Domain knowledge** can guide the selection process towards algorithms that are theoretically or empirically known to work well for similar problems.

---
This comprehensive review covers the fundamental supervised and unsupervised machine learning models, their applications, and key considerations, aligning with the course outcomes and providing a strong foundation for further learning in Machine Learning.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=33vbFFFn04k) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=M0mx8S05v60) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=APPIZ2S8YmY) |
