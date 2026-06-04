---
title: "Review: supervised, unsupervised machine learning techniques"
subject: "MACHINE LEARNING"
module: "Module 1: Review: supervised, unsupervised machine learning techniques"
branch: "Electronics and Communication Engineering"
semester: 4
topicId: "68a5c45eb09ce205780fe619"
status: "completed"
scrapedAt: "2026-05-23T17:50:06.503Z"
---
# Module 1: Review: Supervised and Unsupervised Machine Learning Techniques

## Introduction to Machine Learning

Machine Learning (ML) is a subfield of Artificial Intelligence (AI) that enables systems to learn from data without being explicitly programmed. It involves building algorithms that can identify patterns, make predictions, and improve their performance over time as they are exposed to more data.

**Key Concept:** The core idea of ML is to equip systems with the ability to learn from experience (data) and adapt their behavior.

**Reference:**
*   **"Machine Learning for Absolute Beginners" by Oliver Theobald:** This book provides a fundamental understanding of ML concepts, making it an excellent starting point for reviewing core ideas.

## Types of Machine Learning

Machine learning algorithms are broadly categorized into three main types:

1.  **Supervised Learning**
2.  **Unsupervised Learning**
3.  **Reinforcement Learning** (brief mention, as it aligns with CO4)

---

## 1. Supervised Learning

**Definition:** In supervised learning, the algorithm is trained on a **labeled dataset**. This means that for each input data point, there is a corresponding correct output or "label." The goal of the algorithm is to learn a mapping function from inputs to outputs, so that it can predict the output for new, unseen input data.

**Core Components:**
*   **Labeled Data:** The training data consists of pairs of (input features, output label).
*   **Learning a Mapping Function:** The algorithm aims to learn a function $f(X) \approx Y$, where $X$ is the input features and $Y$ is the output label.
*   **Prediction:** Once trained, the model can predict the output for new, unlabeled inputs.

**Key Concepts & Definitions:**
*   **Features (Attributes):** The input variables or characteristics of the data.
*   **Labels (Targets):** The output variable or the correct answer we want to predict.
*   **Training Set:** The portion of the dataset used to train the model.
*   **Test Set:** The portion of the dataset used to evaluate the performance of the trained model on unseen data.
*   **Validation Set:** An optional portion of the dataset used to tune hyperparameters and prevent overfitting during training.

**Types of Supervised Learning Tasks:**

### 1.1. Regression

**Definition:** Regression is a supervised learning task where the goal is to predict a **continuous numerical value**.

**Examples:**
*   Predicting house prices based on features like size, location, and number of rooms.
*   Forecasting stock prices.
*   Estimating a student's exam score based on study hours.

**Key Algorithms (Examples):**
*   **Linear Regression:** Models the relationship between a dependent variable and one or more independent variables by fitting a linear equation to the observed data.
*   **Polynomial Regression:** Extends linear regression to model non-linear relationships by using polynomial features.
*   **Decision Trees for Regression:** Splits data based on feature values to predict a continuous output.
*   **Support Vector Regression (SVR):** An extension of Support Vector Machines (SVMs) for regression tasks.

**Textbook Reference:**
*   **"Hands-on Machine Learning with Scikit-Learn, Keras, and TensorFlow" by Aurelien Geron (Chapter 2):** Provides a practical introduction to linear regression and other regression techniques with code examples.
*   **"Introduction to Machine Learning with Python" by Andreas C. Müller & Sarah Guido (Chapter 3):** Covers fundamental regression algorithms and their implementation.

**Course Outcome Alignment:**
*   **CO2: Develop, train, and optimize regression and classification models (Knowledge Level: K3)** - This section directly addresses the development and training of regression models.

---

### 1.2. Classification

**Definition:** Classification is a supervised learning task where the goal is to predict a **discrete categorical label**. The output is one of a predefined set of classes.

**Examples:**
*   Classifying emails as "spam" or "not spam."
*   Diagnosing a medical condition based on symptoms.
*   Recognizing handwritten digits (e.g., 0-9).
*   Sentiment analysis (e.g., positive, negative, neutral).

**Key Algorithms (Examples):**
*   **Logistic Regression:** Despite the name, it's a classification algorithm that uses a logistic function to predict the probability of a binary outcome.
*   **K-Nearest Neighbors (KNN):** Classifies a new data point based on the majority class of its k nearest neighbors in the feature space.
*   **Support Vector Machines (SVMs):** Finds the optimal hyperplane that best separates data points belonging to different classes.
*   **Decision Trees for Classification:** Splits data based on feature values to assign data points to specific classes.
*   **Random Forests:** An ensemble method that builds multiple decision trees and aggregates their predictions to improve accuracy and robustness.
*   **Naïve Bayes:** A probabilistic classifier based on Bayes' theorem with a strong (naïve) independence assumption between features.

**Textbook Reference:**
*   **"Hands-on Machine Learning with Scikit-Learn, Keras, and TensorFlow" by Aurelien Geron (Chapter 3):** Covers various classification algorithms like Logistic Regression, SVMs, and Random Forests with practical examples.
*   **"Introduction to Machine Learning with Python" by Andreas C. Müller & Sarah Guido (Chapter 4):** Explains classification algorithms and their use in real-world scenarios.

**Course Outcome Alignment:**
*   **CO2: Develop, train, and optimize regression and classification models (Knowledge Level: K3)** - This section directly addresses the development and training of classification models.
*   **CO1: Analyze and apply supervised and unsupervised machine learning techniques to solve various data-driven problems. (Knowledge Level: K4)** - Understanding classification is crucial for applying supervised learning to data-driven problems.

---

## 2. Unsupervised Learning

**Definition:** In unsupervised learning, the algorithm is trained on an **unlabeled dataset**. The goal is to find patterns, structures, or relationships within the data without any prior knowledge of the output.

**Core Components:**
*   **Unlabeled Data:** The training data consists only of input features.
*   **Discovering Patterns:** The algorithm aims to uncover hidden structures, groupings, or anomalies.
*   **No "Right Answer":** Unlike supervised learning, there isn't a predefined correct output to guide the learning process.

**Key Concepts & Definitions:**
*   **Clustering:** The task of grouping similar data points together into clusters.
*   **Dimensionality Reduction:** The task of reducing the number of features in the data while preserving as much information as possible.
*   **Association Rule Mining:** Discovering relationships between variables in large datasets (e.g., "people who buy bread also tend to buy milk").
*   **Anomaly Detection (Outlier Detection):** Identifying data points that deviate significantly from the norm.

**Types of Unsupervised Learning Tasks:**

### 2.1. Clustering

**Definition:** Clustering is an unsupervised learning task that aims to partition a dataset into a set of clusters, where data points within the same cluster are more similar to each other than to those in other clusters.

**Key Concepts:**
*   **Similarity/Proximity Measures:** How we quantify the closeness of data points. Common measures include:
    *   **Euclidean Distance:** The straight-line distance between two points.
    *   **Manhattan Distance (L1 Distance):** The sum of the absolute differences of their coordinates.
    *   **Cosine Similarity:** Measures the cosine of the angle between two non-zero vectors. Useful for text data or high-dimensional sparse data.
*   **Centroid:** The mean position of all points in a cluster.
*   **Silhouette Score:** A measure of how similar an object is to its own cluster compared to other clusters.
*   **Inertia (Within-cluster sum of squares):** The sum of squared distances of samples to their closest cluster center.

**Key Algorithms (Examples):**
*   **K-Means Clustering:** An iterative algorithm that partitions data into 'k' clusters by minimizing the within-cluster sum of squares. It assigns data points to the nearest centroid and then recalculates the centroids.
    *   **Pros:** Simple, efficient, scales well to large datasets.
    *   **Cons:** Requires specifying 'k' beforehand, sensitive to initial centroid placement, assumes spherical clusters.
*   **Hierarchical Clustering:** Builds a hierarchy of clusters. It can be either agglomerative (bottom-up) or divisive (top-down).
    *   **Agglomerative:** Starts with each data point as a cluster and merges the closest clusters iteratively.
    *   **Divisive:** Starts with all data points in one cluster and recursively splits clusters.
    *   **Dendrogram:** A tree-like diagram that shows the hierarchical relationships between clusters.
*   **DBSCAN (Density-Based Spatial Clustering of Applications with Noise):** Groups together points that are closely packed together, marking points that lie alone in low-density regions as outliers.
    *   **Pros:** Can find arbitrarily shaped clusters, robust to outliers.
    *   **Cons:** Sensitive to the `eps` (maximum distance between two samples for one to be considered as in the neighborhood of the other) and `min_samples` parameters.

**Textbook Reference:**
*   **"Hands-on Machine Learning with Scikit-Learn, Keras, and TensorFlow" by Aurelien Geron (Chapter 9):** Offers comprehensive coverage of K-Means, DBSCAN, and hierarchical clustering with practical examples.
*   **"Introduction to Machine Learning with Python" by Andreas C. Müller & Sarah Guido (Chapter 6):** Explains clustering algorithms and how to evaluate them.
*   **"Pattern Recognition" by Theodoridis and Koutroumbas:** Provides theoretical foundations for clustering techniques.

**Course Outcome Alignment:**
*   **CO3: Design and execute clustering techniques, and assess their effectiveness using various proximity measures. (Knowledge Level: K3)** - This section directly covers clustering techniques, execution, and assessment using proximity measures.
*   **CO1: Analyze and apply supervised and unsupervised machine learning techniques to solve various data-driven problems. (Knowledge Level: K4)** - Understanding clustering is key to applying unsupervised learning.
*   **CO4: Apply unsupervised learning techniques and understand reinforcement learning for complex problem-solving. (Knowledge Level: K3)** - This section directly addresses applying unsupervised learning techniques.

---

### 2.2. Dimensionality Reduction

**Definition:** Dimensionality reduction is an unsupervised learning task that aims to reduce the number of features (dimensions) in a dataset while retaining as much of the important information as possible. This is useful for:
*   **Visualization:** Reducing data to 2 or 3 dimensions for plotting.
*   **Reducing computational cost:** Faster training and inference.
*   **Overcoming the Curse of Dimensionality:** Improving model performance in high-dimensional spaces.
*   **Noise Reduction:** Removing redundant or irrelevant features.

**Key Concepts:**
*   **Feature Extraction:** Creating new, lower-dimensional features from the original ones.
*   **Feature Selection:** Selecting a subset of the original features.

**Key Algorithms (Examples):**
*   **Principal Component Analysis (PCA):** A linear dimensionality reduction technique that finds orthogonal axes (principal components) that capture the maximum variance in the data.
    *   **How it works:** Transforms the data into a new coordinate system, where the first principal component has the highest variance, the second has the second highest, and so on.
    *   **Use Case:** Reducing features for visualization or speeding up other algorithms.
*   **t-Distributed Stochastic Neighbor Embedding (t-SNE):** A non-linear dimensionality reduction technique primarily used for visualization. It maps high-dimensional data to a low-dimensional space (typically 2D or 3D) such that similar points are clustered together.
    *   **Use Case:** Visualizing complex datasets, like embeddings from neural networks.
*   **Linear Discriminant Analysis (LDA):** While often used in a supervised context for classification, it can also be used for dimensionality reduction by finding linear combinations of features that characterize or separate two or more classes.

**Textbook Reference:**
*   **"Hands-on Machine Learning with Scikit-Learn, Keras, and TensorFlow" by Aurelien Geron (Chapter 8):** Provides a detailed explanation and implementation of PCA.
*   **"Introduction to Machine Learning with Python" by Andreas C. Müller & Sarah Guido (Chapter 7):** Covers dimensionality reduction techniques, including PCA.
*   **"Pattern Recognition and Machine Learning" by C.M. Bishop (Chapter 12):** Offers a rigorous mathematical treatment of PCA.

**Course Outcome Alignment:**
*   **CO4: Apply unsupervised learning techniques and understand reinforcement learning for complex problem-solving. (Knowledge Level: K3)** - This section directly addresses applying unsupervised learning techniques like dimensionality reduction.
*   **CO1: Analyze and apply supervised and unsupervised machine learning techniques to solve various data-driven problems. (Knowledge Level: K4)** - Understanding dimensionality reduction is vital for effective application of ML.

---

## 3. Reinforcement Learning (Brief Mention)

**Definition:** Reinforcement learning (RL) is a type of machine learning where an agent learns to make decisions by performing actions in an environment to maximize a cumulative reward. The agent learns through trial and error, receiving feedback (rewards or penalties) for its actions.

**Key Concepts:**
*   **Agent:** The learner and decision-maker.
*   **Environment:** The external world the agent interacts with.
*   **State:** The current situation of the environment.
*   **Action:** A decision made by the agent.
*   **Reward:** Feedback from the environment indicating the desirability of an action.
*   **Policy:** The agent's strategy for choosing actions in different states.

**Examples:**
*   Training a robot to walk.
*   Playing games like Chess or Go.
*   Developing autonomous driving systems.

**Textbook Reference:**
*   **"Hands-on Machine Learning with Scikit-Learn, Keras, and TensorFlow" by Aurelien Geron (Part III):** While the module review focuses on supervised and unsupervised, Geron's book dedicates significant portions to Reinforcement Learning, providing context for CO4.
*   **"Artificial Intelligence: A Modern Approach" by Stuart Russell & Peter Norvig:** Offers a comprehensive overview of Reinforcement Learning within the broader AI landscape.

**Course Outcome Alignment:**
*   **CO4: Apply unsupervised learning techniques and understand reinforcement learning for complex problem-solving. (Knowledge Level: K3)** - This section provides the understanding required for RL.

---

## Important Points to Remember

*   **Data is Key:** The quality and quantity of your data significantly impact the performance of any ML model.
*   **Labeled vs. Unlabeled Data:** This is the fundamental distinction between supervised and unsupervised learning.
*   **Supervised Learning Goal:** Predict an output (continuous or categorical) based on input features.
*   **Unsupervised Learning Goal:** Find hidden patterns, structures, or relationships in data.
*   **Regression vs. Classification:** Both are supervised tasks, but differ in the nature of the output (continuous vs. categorical).
*   **Clustering Techniques:** K-Means, Hierarchical Clustering, DBSCAN are common methods for grouping data.
*   **Dimensionality Reduction:** PCA and t-SNE are widely used to simplify data.
*   **No Free Lunch Theorem:** No single ML algorithm is best for all problems. The choice depends on the data and the specific task.
*   **Evaluation Metrics:** Understanding how to evaluate your models is crucial (e.g., accuracy, precision, recall for classification; R-squared, MSE for regression; Silhouette score for clustering).

---

## Practice Questions & Exercises

**Instructions:** Attempt to answer these questions to test your understanding of the module's concepts.

---

### Question 1 (Supervised Learning - Classification)

Imagine you have a dataset of customer information (age, income, purchase history) and you want to predict whether a customer will click on an advertisement.

*   **a)** What type of machine learning task is this (supervised or unsupervised)?
*   **b)** Is this a regression or classification problem? Briefly explain why.
*   **c)** Name two common algorithms that could be used to solve this problem.

---

### Question 2 (Supervised Learning - Regression)

You are given historical weather data (temperature, humidity, wind speed) and want to predict the daily electricity consumption in a city.

*   **a)** What type of machine learning task is this (supervised or unsupervised)?
*   **b)** Is this a regression or classification problem? Briefly explain why.
*   **c)** Name two common algorithms that could be used to solve this problem.

---

### Question 3 (Unsupervised Learning - Clustering)

You have a dataset of news articles and want to group them into distinct topics (e.g., sports, politics, technology) without pre-defined labels.

*   **a)** What type of machine learning task is this (supervised or unsupervised)?
*   **b)** What is the primary goal of this task?
*   **c)** Name one algorithm you could use for this task and briefly describe its core idea.
*   **d)** What is a common proximity measure used in clustering?

---

### Question 4 (Unsupervised Learning - Dimensionality Reduction)

You have a dataset with 100 features, but suspect many are redundant or noisy. You want to reduce the number of features to 5 to speed up a subsequent supervised learning model and potentially improve its performance.

*   **a)** What type of machine learning task is this (supervised or unsupervised)?
*   **b)** What is the main objective of this task?
*   **c)** Name one common algorithm used for dimensionality reduction and briefly explain its purpose.

---

### Question 5 (Concepts)

Explain the difference between a "feature" and a "label" in the context of supervised learning.

---

## Answers to Practice Questions

---

### Answer 1

*   **a)** This is a **supervised learning** task because you have historical data with known outcomes (whether customers clicked or not), which can be used to train a model to predict future outcomes.
*   **b)** This is a **classification problem** because the outcome you are trying to predict is a discrete category: "click" or "not click."
*   **c)** Two common algorithms are:
    *   **Logistic Regression**
    *   **Support Vector Machines (SVM)**
    *   **Decision Trees**
    *   **Random Forests**

---

### Answer 2

*   **a)** This is a **supervised learning** task because you have historical weather data and corresponding electricity consumption values, which can be used to train a model.
*   **b)** This is a **regression problem** because the outcome you are trying to predict (electricity consumption) is a continuous numerical value.
*   **c)** Two common algorithms are:
    *   **Linear Regression**
    *   **Polynomial Regression**
    *   **Decision Trees for Regression**
    *   **Support Vector Regression (SVR)**

---

### Answer 3

*   **a)** This is an **unsupervised learning** task because you are working with unlabeled news articles and want to discover the inherent groupings (topics).
*   **b)** The primary goal is to **group similar news articles together into clusters** that represent distinct topics.
*   **c)** One algorithm is **K-Means Clustering**. Its core idea is to iteratively assign data points to the nearest cluster center (centroid) and then update the centroid's position based on the assigned points, aiming to minimize the distance within clusters.
*   **d)** A common proximity measure used in clustering is **Euclidean Distance**.

---

### Answer 4

*   **a)** This is an **unsupervised learning** task because you are processing data to find structure (a lower-dimensional representation) without relying on predefined labels for the reduction process itself.
*   **b)** The main objective is to **reduce the number of features (dimensions)** while preserving essential information, for purposes like visualization, efficiency, or noise reduction.
*   **c)** A common algorithm is **Principal Component Analysis (PCA)**. Its purpose is to transform the data into a new set of uncorrelated variables called principal components, ordered by the amount of variance they capture. The first few components often represent the most significant patterns in the data.

---

### Answer 5

In supervised learning:

*   **Features (or Attributes/Independent Variables):** These are the input variables or characteristics of the data that are used to make a prediction. For example, in predicting house prices, features might include square footage, number of bedrooms, and location.
*   **Label (or Target/Dependent Variable):** This is the output variable or the "correct answer" that the model aims to predict. In the house price prediction example, the label would be the actual price of the house. The model learns to associate the features with the correct label.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=gI-qXk7XojA) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=Q-tL8_628gE) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=8XG7U5yN668) |
