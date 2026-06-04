---
title: "Hyper parameters"
subject: "MACHINE LEARNING"
module: "Module 1: Review: supervised, unsupervised machine learning techniques"
branch: "Electronics and Communication Engineering"
semester: 4
topicId: "68a5c45eb09ce205780fe61d"
status: "completed"
scrapedAt: "2026-05-23T17:50:09.344Z"
---
# Machine Learning: Module 1 Review - Hyperparameters

## 1. Introduction to Hyperparameters

This module provides a foundational understanding of hyperparameters within the context of supervised and unsupervised machine learning techniques. Hyperparameters are crucial for controlling the learning process and the overall behavior of a machine learning model.

### 1.1. What are Hyperparameters?

*   **Definition:** Hyperparameters are external configuration variables that are set *before* the training process begins. They are not learned from the data during training, unlike model parameters (e.g., weights and biases in neural networks).
*   **Purpose:** They define the model's architecture, training algorithm, and the learning process itself. Choosing appropriate hyperparameters is essential for achieving optimal model performance and avoiding issues like overfitting or underfitting.
*   **Distinction from Model Parameters:**
    *   **Model Parameters:** Learned from the data during training (e.g., the weights in a linear regression model, the connection weights in a neural network).
    *   **Hyperparameters:** Set by the machine learning practitioner before training.

### 1.2. Why are Hyperparameters Important?

*   **Model Performance:** Hyperparameters directly influence how well a model generalizes to unseen data.
*   **Training Speed & Efficiency:** Some hyperparameters can affect how quickly a model converges during training.
*   **Model Complexity:** Hyperparameters often control the complexity of the model. Too complex a model can lead to overfitting, while too simple a model can lead to underfitting.

## 2. Hyperparameters in Supervised Learning

Supervised learning algorithms aim to learn a mapping from input features to output labels. Hyperparameters play a critical role in shaping this mapping.

### 2.1. Common Supervised Learning Hyperparameters

Let's explore hyperparameters for some common supervised learning algorithms:

#### 2.1.1. Linear Regression / Logistic Regression

While basic linear/logistic regression models have few hyperparameters, extensions introduce them.

*   **Regularization Strength (e.g., `alpha` in Ridge/Lasso, `C` in SVM):**
    *   **Concept:** Controls the penalty applied to the magnitude of model coefficients to prevent overfitting.
    *   **Effect:** Higher regularization leads to simpler models with smaller coefficients, potentially causing underfitting if too high. Lower regularization allows for more complex models, risking overfitting.
    *   **Example (Scikit-learn):** `Ridge(alpha=1.0)`, `LogisticRegression(C=1.0)`
    *   **Reference:** *Hands-on Machine Learning* (Geron), Chapter 1 discusses regularization.

#### 2.1.2. k-Nearest Neighbors (k-NN)

*   **Number of Neighbors (`n_neighbors` or `k`):**
    *   **Concept:** The number of nearest data points to consider when making a prediction.
    *   **Effect:**
        *   **Small `k`:** The model is more sensitive to noise and can lead to overfitting (high variance).
        *   **Large `k`:** The model becomes smoother and less sensitive to noise, potentially leading to underfitting (high bias).
    *   **Example (Scikit-learn):** `KNeighborsClassifier(n_neighbors=5)`
    *   **Reference:** *Introduction to Machine Learning with Python* (Müller & Guido), Chapter 4 covers k-NN.

*   **Distance Metric (`metric`):**
    *   **Concept:** The way distance is calculated between data points (e.g., Euclidean, Manhattan).
    *   **Effect:** Different metrics can influence which neighbors are considered "nearest," especially in high-dimensional spaces or with features of vastly different scales.
    *   **Example (Scikit-learn):** `KNeighborsClassifier(metric='euclidean')`

*   **Weighting (`weights`):**
    *   **Concept:** How the influence of neighbors is weighted. Options include `uniform` (all neighbors have equal weight) or `distance` (neighbors closer to the test point have more weight).
    *   **Effect:** `distance` weighting can give more importance to closer neighbors, which might be beneficial.
    *   **Example (Scikit-learn):** `KNeighborsClassifier(weights='distance')`

#### 2.1.3. Decision Trees

*   **Maximum Depth (`max_depth`):**
    *   **Concept:** The maximum number of levels in the tree.
    *   **Effect:**
        *   **Shallow depth:** Simpler model, prone to underfitting.
        *   **Deep depth:** More complex model, prone to overfitting.
    *   **Example (Scikit-learn):** `DecisionTreeClassifier(max_depth=3)`

*   **Minimum Samples Split (`min_samples_split`):**
    *   **Concept:** The minimum number of samples required to split an internal node.
    *   **Effect:** Higher values prevent splitting nodes that don't have many samples, leading to simpler trees and potentially avoiding overfitting.
    *   **Example (Scikit-learn):** `DecisionTreeClassifier(min_samples_split=10)`

*   **Minimum Samples Leaf (`min_samples_leaf`):**
    *   **Concept:** The minimum number of samples required to be at a leaf node.
    *   **Effect:** Similar to `min_samples_split`, a higher value enforces simpler trees.
    *   **Example (Scikit-learn):** `DecisionTreeClassifier(min_samples_leaf=5)`

*   **Maximum Features (`max_features`):**
    *   **Concept:** The number of features to consider when looking for the best split.
    *   **Effect:** Limits the complexity of each split, promoting diversity in ensemble methods like Random Forests.
    *   **Example (Scikit-learn):** `DecisionTreeClassifier(max_features=None)` (consider all features) or `DecisionTreeClassifier(max_features='sqrt')`

#### 2.1.4. Support Vector Machines (SVM)

*   **C (Regularization Parameter):**
    *   **Concept:** Similar to regularization in linear models, it controls the trade-off between achieving a low training error and a low testing error.
    *   **Effect:**
        *   **Small `C`:** More regularization, wider margin, potentially more misclassifications on training data, but better generalization.
        *   **Large `C`:** Less regularization, narrower margin, fewer misclassifications on training data, but higher risk of overfitting.
    *   **Example (Scikit-learn):** `SVC(C=1.0)`

*   **Kernel (`kernel`):**
    *   **Concept:** Specifies the similarity function used to map data to a higher-dimensional space where linear separation might be possible. Common kernels include 'linear', 'poly' (polynomial), 'rbf' (Radial Basis Function), and 'sigmoid'.
    *   **Effect:** The choice of kernel dramatically affects the model's decision boundary.
    *   **Example (Scikit-learn):** `SVC(kernel='rbf')`

*   **Gamma (`gamma`):**
    *   **Concept:** A hyperparameter for 'rbf', 'poly', and 'sigmoid' kernels. It defines how far the influence of a single training example reaches.
    *   **Effect:**
        *   **Small `gamma`:** A large radius of influence, leading to smoother decision boundaries (can cause underfitting).
        *   **Large `gamma`:** A small radius of influence, meaning only points close to the decision boundary matter (can cause overfitting).
    *   **Example (Scikit-learn):** `SVC(kernel='rbf', gamma=0.1)`

*   **Degree (`degree`):**
    *   **Concept:** A hyperparameter for the 'poly' kernel. It specifies the degree of the polynomial.
    *   **Effect:** Higher degrees allow for more complex decision boundaries.
    *   **Example (Scikit-learn):** `SVC(kernel='poly', degree=3)`

#### 2.1.5. Neural Networks

Neural networks have a vast array of hyperparameters that control their architecture and training process.

*   **Number of Layers:**
    *   **Concept:** The depth of the network.
    *   **Effect:** Deeper networks can learn more complex hierarchical features but are harder to train and prone to overfitting.

*   **Number of Neurons per Layer:**
    *   **Concept:** The width of each layer.
    *   **Effect:** Wider layers can capture more information but increase computational cost and the risk of overfitting.

*   **Activation Function:**
    *   **Concept:** Non-linear functions applied to the output of neurons (e.g., ReLU, Sigmoid, Tanh).
    *   **Effect:** Introduces non-linearity, enabling the network to learn complex patterns. ReLU is common for hidden layers, while Sigmoid/Softmax are often used for output layers in classification.

*   **Learning Rate (`lr`):**
    *   **Concept:** Controls the step size taken during gradient descent optimization.
    *   **Effect:**
        *   **Too high:** Can overshoot the minimum, causing divergence or unstable training.
        *   **Too low:** Can lead to very slow convergence or getting stuck in local minima.
    *   **Example (TensorFlow/Keras):** `Adam(learning_rate=0.001)`
    *   **Reference:** *Learning Deep Learning* (Ekman), Chapter 4 discusses optimizers and learning rates.

*   **Batch Size:**
    *   **Concept:** The number of training examples used in one iteration of gradient descent.
    *   **Effect:**
        *   **Small batch size:** Noisier gradients, potentially slower but can escape local minima.
        *   **Large batch size:** Smoother gradients, faster convergence per epoch, but can get stuck in sharp minima and requires more memory.

*   **Number of Epochs:**
    *   **Concept:** One complete pass through the entire training dataset.
    *   **Effect:** More epochs can lead to better learning but also increase the risk of overfitting. Early stopping is often used to mitigate this.

*   **Optimizer (e.g., SGD, Adam, RMSprop):**
    *   **Concept:** The algorithm used to update model weights based on gradients.
    *   **Effect:** Different optimizers have different convergence properties and sensitivity to hyperparameters.

*   **Regularization Techniques (e.g., Dropout, L1/L2 regularization):**
    *   **Dropout Rate:** The probability of randomly dropping neurons during training to prevent co-adaptation.
    *   **L1/L2 Penalty:** Adds a penalty term to the loss function based on the magnitude of weights.

## 3. Hyperparameters in Unsupervised Learning

Unsupervised learning algorithms aim to discover patterns and structures in data without explicit labels. Hyperparameters here guide the discovery process.

### 3.1. Common Unsupervised Learning Hyperparameters

#### 3.1.1. Clustering (e.g., K-Means)

*   **Number of Clusters (`n_clusters` or `k`):**
    *   **Concept:** The number of clusters to form. This is a direct input to K-Means.
    *   **Effect:** Determining the "correct" number of clusters is often a key challenge. Too few clusters can merge distinct groups, while too many can split natural groups.
    *   **Example (Scikit-learn):** `KMeans(n_clusters=3)`
    *   **Reference:** *Introduction to Machine Learning with Python* (Müller & Guido), Chapter 9 covers clustering. *Machine Learning for Absolute Beginners* (Theobald) also provides a good introduction to clustering.

*   **Initialization (`init`):**
    *   **Concept:** How the initial cluster centroids are chosen. Common methods include 'random' and 'k-means++'.
    *   **Effect:** 'k-means++' generally leads to better results by selecting initial centroids that are spread out.
    *   **Example (Scikit-learn):** `KMeans(init='k-means++')`

*   **Number of Iterations (`max_iter`):**
    *   **Concept:** The maximum number of iterations for the KMeans algorithm to converge.
    *   **Effect:** Ensures the algorithm terminates even if convergence is slow.
    *   **Example (Scikit-learn):** `KMeans(max_iter=300)`

*   **Tolerance (`tol`):**
    *   **Concept:** The tolerance for the change in the mean of the cluster centers to declare convergence.
    *   **Effect:** A smaller tolerance means the algorithm will run longer until centroids are very stable.
    *   **Example (Scikit-learn):** `KMeans(tol=1e-4)`

#### 3.1.2. Dimensionality Reduction (e.g., PCA)

*   **Number of Components (`n_components`):**
    *   **Concept:** The number of dimensions to reduce the data to.
    *   **Effect:** Controls the trade-off between dimensionality reduction and information loss. Choosing `n_components` too small can lose significant variance.
    *   **Example (Scikit-learn):** `PCA(n_components=2)`
    *   **Reference:** *Hands-on Machine Learning* (Geron), Chapter 8 discusses dimensionality reduction.

*   **Variance Explained (`n_components` as a float):**
    *   **Concept:** When `n_components` is a float between 0 and 1, it specifies the percentage of variance that should be retained.
    *   **Effect:** Automatically determines the number of components needed to explain the desired amount of variance.
    *   **Example (Scikit-learn):** `PCA(n_components=0.95)`

#### 3.1.3. Anomaly Detection (e.g., Isolation Forest)

*   **Number of Estimators (`n_estimators`):**
    *   **Concept:** The number of isolation trees in the forest.
    *   **Effect:** More trees generally lead to better accuracy but increase computation time.
    *   **Example (Scikit-learn):** `IsolationForest(n_estimators=100)`

*   **Maximum Samples (`max_samples`):**
    *   **Concept:** The number of samples to draw to train each isolation tree.
    *   **Effect:** Controls the size of the subsamples used for training individual trees, impacting performance and generalization.
    *   **Example (Scikit-learn):** `IsolationForest(max_samples=256)`

*   **Maximum Features (`max_features`):**
    *   **Concept:** The number of features to draw to train each isolation tree.
    *   **Effect:** Similar to `max_samples`, influences the structure and learning of individual trees.
    *   **Example (Scikit-learn):** `IsolationForest(max_features=1.0)` (use all features)

## 4. Hyperparameter Tuning (Optimization)

Since hyperparameters are not learned, they need to be optimized through a separate process.

### 4.1. The Need for Hyperparameter Tuning

*   **No Closed-Form Solution:** There's no analytical formula to find the best hyperparameters.
*   **Empirical Process:** It's an empirical process of trying different combinations and evaluating performance.
*   **Avoiding Data Leakage:** Crucially, hyperparameters must be tuned on a separate validation set to prevent overfitting to the test set.

### 4.2. Common Hyperparameter Tuning Strategies

#### 4.2.1. Manual Search

*   **Concept:** The practitioner manually selects hyperparameter values based on intuition, experience, and trial-and-error.
*   **Pros:** Can be effective if the practitioner has strong domain knowledge.
*   **Cons:** Time-consuming, inefficient, and highly dependent on expertise.

#### 4.2.2. Grid Search

*   **Concept:** Define a grid of hyperparameter values. The algorithm exhaustively tries every possible combination of these values.
*   **Process:**
    1.  Define a dictionary of hyperparameter names and lists of values to try.
    2.  Use a cross-validation strategy (e.g., k-fold cross-validation) to evaluate each combination.
    3.  Select the combination that yields the best average performance across the folds.
*   **Example (Scikit-learn):** `GridSearchCV`
*   **Reference:** *Hands-on Machine Learning* (Geron), Chapter 2 discusses Grid Search.

#### 4.2.3. Random Search

*   **Concept:** Instead of trying all combinations, randomly sample a fixed number of hyperparameter combinations from specified distributions.
*   **Process:**
    1.  Define distributions (e.g., uniform, log-uniform) for each hyperparameter.
    2.  Sample a specified number of parameter settings.
    3.  Evaluate each sampled setting using cross-validation.
*   **Pros:** Often more efficient than Grid Search, especially when some hyperparameters are more important than others. It's more likely to find good values for important parameters.
*   **Cons:** Still relies on chance.
*   **Example (Scikit-learn):** `RandomizedSearchCV`

#### 4.2.4. Bayesian Optimization

*   **Concept:** A more intelligent search strategy that uses previous results to guide the selection of the next hyperparameter combination to evaluate. It builds a probabilistic model of the objective function (e.g., accuracy vs. hyperparameters) and uses an acquisition function to decide which point to sample next.
*   **Pros:** Often more efficient than Grid or Random Search, especially for expensive-to-evaluate models or high-dimensional hyperparameter spaces.
*   **Cons:** More complex to implement and understand.

### 4.3. Cross-Validation for Hyperparameter Tuning

*   **Concept:** To get a reliable estimate of a model's performance for a given set of hyperparameters, cross-validation is essential.
*   **Process:** The training data is split into *k* folds. The model is trained *k* times, each time using a different fold as a validation set and the remaining *k-1* folds for training. The average performance across the *k* folds is used as the evaluation metric.
*   **Importance:** Prevents evaluating hyperparameters on the same data they were trained on, which would lead to overly optimistic results and overfitting.
*   **Reference:** *Introduction to Machine Learning with Python* (Müller & Guido) extensively covers cross-validation.

## 5. Key Concepts and Definitions Summary

*   **Hyperparameter:** External configuration variable set before training.
*   **Model Parameter:** Learned from data during training.
*   **Overfitting:** Model performs well on training data but poorly on unseen data.
*   **Underfitting:** Model performs poorly on both training and unseen data.
*   **Regularization:** Techniques to prevent overfitting by penalizing model complexity.
*   **Grid Search:** Exhaustive search over a predefined grid of hyperparameter values.
*   **Random Search:** Randomly samples hyperparameter values from distributions.
*   **Cross-Validation:** Technique to evaluate model performance and tune hyperparameters without overfitting to the test set.

## 6. Important Points to Remember

*   **Hyperparameters vs. Parameters:** Always distinguish between them.
*   **Tuning is Essential:** Don't skip hyperparameter tuning; it's critical for model performance.
*   **Use Validation Data:** Never tune hyperparameters on the test set. Use a validation set or cross-validation.
*   **Trade-offs:** Many hyperparameters involve trade-offs between bias and variance, or model complexity and generalization.
*   **Domain Knowledge:** Can inform initial hyperparameter choices.
*   **Systematic Approach:** Use systematic methods like Grid Search or Random Search for efficient tuning.

## 7. Practice Questions

**Question 1:**
What is the primary difference between a hyperparameter and a model parameter?

**Answer:**
A hyperparameter is an external configuration variable set *before* the training process, while a model parameter is learned *during* the training process from the data.

**Question 2:**
If you are using a Decision Tree and notice that your model is performing poorly on both the training and test sets, which hyperparameter is likely the culprit and how would you adjust it?

**Answer:**
This scenario suggests **underfitting**. For a Decision Tree, hyperparameters that control complexity are key. Likely culprits include:
*   **`max_depth`:** If it's too small, the tree might be too simple. Increase `max_depth`.
*   **`min_samples_split`:** If it's too high, nodes may not split when they should. Decrease `min_samples_split`.
*   **`min_samples_leaf`:** If it's too high, leaves might be too broad. Decrease `min_samples_leaf`.
Adjusting these to allow for a more complex tree would likely improve performance.

**Question 3:**
You are using SVM with an RBF kernel. You observe that your model is highly accurate on the training data but generalizes poorly to new data. Which hyperparameters are most likely causing this **overfitting**, and how would you adjust them?

**Answer:**
This indicates **overfitting**. For an SVM with an RBF kernel, the key hyperparameters contributing to overfitting are:
*   **`C` (Regularization Parameter):** A high `C` value allows the SVM to fit the training data very closely, leading to overfitting. Decrease `C`.
*   **`gamma`:** A high `gamma` value means the RBF kernel has a small influence radius, making the decision boundary very wiggly and sensitive to individual training points, causing overfitting. Decrease `gamma`.

**Question 4:**
Explain why Random Search can be more efficient than Grid Search for hyperparameter tuning.

**Answer:**
Random Search is often more efficient because it samples hyperparameter combinations randomly. In high-dimensional hyperparameter spaces, it's common for only a few hyperparameters to significantly impact performance. Grid Search spends a lot of time evaluating combinations where less important hyperparameters are varied without much benefit. Random Search, by sampling more widely, has a higher probability of finding good values for the most important hyperparameters within a fixed number of evaluations.

**Question 5:**
What is the role of cross-validation in hyperparameter tuning?

**Answer:**
Cross-validation is crucial for hyperparameter tuning to obtain a reliable estimate of a model's performance on unseen data *without* using the final test set. It involves splitting the training data into multiple folds, training the model on a subset of these folds, and validating it on the remaining fold. This process is repeated, and the average performance across all folds provides a more robust evaluation of a given hyperparameter setting, preventing overfitting to a single validation split and thus avoiding data leakage from the test set.

## 8. Alignment with Course Outcomes

*   **CO1: Analyze and apply supervised and unsupervised machine learning techniques to solve various data-driven problems.**
    *   This module directly addresses the "apply" aspect by explaining the hyperparameters within these techniques (e.g., k-NN, SVM, K-Means, PCA). Understanding hyperparameters is fundamental to applying these techniques effectively. The practice questions encourage analysis of their impact.
*   **CO2: Develop, train, and optimize regression and classification models.**
    *   The detailed discussion of hyperparameters for models like Logistic Regression, SVM, and Decision Trees, along with the explanation of hyperparameter tuning strategies (Grid Search, Random Search), directly supports the "optimize" aspect of this outcome.
*   **CO3: Design and execute clustering techniques, and assess their effectiveness using various proximity measures.**
    *   The section on K-Means hyperparameters (`n_clusters`, `init`, etc.) is directly relevant. While proximity measures are not the focus here, understanding how to tune the clustering algorithm (e.g., choosing `n_clusters`) is a prerequisite for assessing effectiveness.
*   **CO4: Apply unsupervised learning techniques and understand reinforcement learning for complex problem-solving.**
    *   This module covers hyperparameters for unsupervised techniques like PCA and K-Means, contributing to the "apply unsupervised learning techniques" part. Reinforcement learning is outside the scope of this specific topic but the general principles of hyperparameter importance apply broadly.

This comprehensive overview of hyperparameters equips learners with the knowledge to effectively control and optimize machine learning models in both supervised and unsupervised settings.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=mc979OhitAg) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=F_4HkL5r4n0) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=APPIZ2S8YmY) |
