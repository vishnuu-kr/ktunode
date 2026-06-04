---
title: "Train and evaluate the network."
subject: "MACHINE LEARNING LAB"
module: "Module 13: Implement and train a Multilayer Feed"
branch: "Computer Science and Engineering"
semester: 5
topicId: "684162770fc9aa1fdbc8b985"
status: "completed"
scrapedAt: "2026-05-20T16:47:49.524Z"
---
# MACHINE LEARNING LAB - Module 13: Train and Evaluate a Multilayer Feedforward Network

## Topic: Train and Evaluate the Network

**Learning Outcomes:**

*   Understand the key concepts of training and evaluating a Multilayer Perceptron (MLP).
*   Implement training algorithms for MLPs, specifically focusing on backpropagation.
*   Evaluate the performance of a trained MLP using appropriate metrics.
*   Apply techniques for hyperparameter tuning and model optimization.
*   Recognize and address common issues like overfitting and underfitting.

### 1. Training a Multilayer Perceptron (MLP)

**1.1 Key Concepts:**

*   **Forward Propagation:** The process of passing the input through the network, layer by layer, until the output is computed.  Each layer applies a weight matrix, adds a bias vector, and applies an activation function.
*   **Loss Function:** A function that measures the difference between the network's predicted output and the actual target values. Common loss functions include:
    *   **Mean Squared Error (MSE):** Used for regression tasks.  Calculates the average squared difference between predicted and actual values.  `MSE = (1/n) * Σ(y_true - y_predicted)^2`
    *   **Cross-Entropy Loss (Log Loss):** Used for classification tasks.  Measures the difference between two probability distributions.  For binary classification: `CrossEntropy = -[y * log(p) + (1-y) * log(1-p)]`, where `y` is the true label and `p` is the predicted probability.
*   **Backpropagation:** An algorithm used to calculate the gradient of the loss function with respect to each weight and bias in the network. This gradient information is then used to update the weights and biases to minimize the loss.
*   **Gradient Descent:** An optimization algorithm used to update the weights and biases of the network in the direction that minimizes the loss function.
    *   **Learning Rate:** A hyperparameter that controls the step size taken during gradient descent.  A smaller learning rate can lead to slower convergence but may avoid overshooting the minimum.  A larger learning rate can lead to faster convergence but may overshoot and result in oscillations.
*   **Epoch:** One complete pass through the entire training dataset.
*   **Batch Size:** The number of training examples used in one iteration of gradient descent.
*   **Mini-batch Gradient Descent:**  Dividing the training data into smaller batches and updating the weights after each batch.  This is generally faster and more stable than using the entire dataset at once (batch gradient descent) or updating after each example (stochastic gradient descent).
*   **Weight Initialization:** The process of setting the initial values of the weights in the network. Good weight initialization is crucial for preventing vanishing or exploding gradients. Common methods include:
    *   **Random Initialization:** Assigning random values from a uniform or normal distribution.
    *   **Xavier/Glorot Initialization:**  Scales the random weights based on the number of input and output neurons to a layer.  `Variance = 1 / n_in`
    *   **He Initialization:** Similar to Xavier initialization but designed for ReLU activation functions. `Variance = 2 / n_in`
*   **Activation Functions:** Non-linear functions applied to the output of each layer.  They introduce non-linearity, allowing the network to learn complex patterns.  Examples:
    *   **Sigmoid:** Outputs values between 0 and 1.  `f(x) = 1 / (1 + e^-x)`
    *   **ReLU (Rectified Linear Unit):** Outputs the input directly if it's positive; otherwise, outputs zero.  `f(x) = max(0, x)`
    *   **Tanh (Hyperbolic Tangent):** Outputs values between -1 and 1.  `f(x) = (e^x - e^-x) / (e^x + e^-x)`

**1.2 Implementing Backpropagation:**

1.  **Forward Pass:** Compute the output of the network for a given input.
2.  **Calculate the Loss:** Compute the difference between the predicted output and the true target value using the chosen loss function.
3.  **Backward Pass (Backpropagation):**
    *   Calculate the gradient of the loss function with respect to the output of the last layer.
    *   Propagate the gradient backward through the network, layer by layer, using the chain rule of calculus.
    *   Calculate the gradient of the loss function with respect to each weight and bias in the network.
4.  **Update Weights and Biases:** Update the weights and biases using an optimization algorithm like gradient descent.  `weight = weight - learning_rate * gradient_weight`.

**Example (Conceptual - simplified):**

Imagine a simple network with one hidden layer.

*   Input: `x`
*   Weights between input and hidden layer: `W1`
*   Bias for hidden layer: `b1`
*   Activation function: ReLU
*   Hidden layer output: `h = ReLU(x * W1 + b1)`
*   Weights between hidden layer and output layer: `W2`
*   Bias for output layer: `b2`
*   Output: `y_predicted = h * W2 + b2`
*   True label: `y_true`
*   Loss: `MSE = (y_true - y_predicted)^2`

Backpropagation would involve:

1.  Calculating `d(MSE)/d(y_predicted)`
2.  Calculating `d(y_predicted)/dW2` and `d(y_predicted)/db2`
3.  Calculating `d(h)/dW1` and `d(h)/db1`  (this also involves the derivative of the ReLU function)
4.  Updating `W1`, `b1`, `W2`, and `b2` using the calculated gradients.

### 2. Evaluating a Trained MLP

**2.1 Key Concepts:**

*   **Training Set:** The data used to train the network.
*   **Validation Set:** The data used to tune hyperparameters and monitor performance during training. This helps prevent overfitting.
*   **Test Set:** The data used to evaluate the final performance of the trained network *after* hyperparameter tuning.  The test set should *not* be used during training or validation.
*   **Overfitting:** The network learns the training data too well, including the noise, and performs poorly on unseen data.
*   **Underfitting:** The network is not complex enough to learn the underlying patterns in the data, resulting in poor performance on both the training and test sets.
*   **Evaluation Metrics:** Measures used to assess the performance of the network. The appropriate metric depends on the type of task:
    *   **Accuracy:** The percentage of correctly classified instances (for classification).  `Accuracy = (Number of correct predictions) / (Total number of predictions)`
    *   **Precision:** The proportion of correctly predicted positive instances out of all instances predicted as positive (for classification).  `Precision = TP / (TP + FP)`
    *   **Recall:** The proportion of correctly predicted positive instances out of all actual positive instances (for classification). `Recall = TP / (TP + FN)`
    *   **F1-Score:** The harmonic mean of precision and recall (for classification). `F1-Score = 2 * (Precision * Recall) / (Precision + Recall)`
    *   **Area Under the ROC Curve (AUC-ROC):** A measure of the classifier's ability to distinguish between positive and negative classes (for classification).
    *   **R-squared (Coefficient of Determination):** A measure of how well the model fits the data (for regression). It represents the proportion of variance in the dependent variable that can be predicted from the independent variables.
    *   **Mean Absolute Error (MAE):** The average absolute difference between predicted and actual values (for regression). `MAE = (1/n) * Σ|y_true - y_predicted|`

**2.2 Evaluation Process:**

1.  **Split the Data:** Divide the data into training, validation, and test sets (e.g., 70% training, 15% validation, 15% test).
2.  **Train the Network:** Train the network on the training set.
3.  **Validate the Network:** Evaluate the network on the validation set during training to monitor performance and tune hyperparameters. Use metrics relevant to your task (accuracy, precision, recall, MSE, MAE, etc.).
4.  **Tune Hyperparameters:** Adjust hyperparameters (learning rate, number of layers, number of neurons per layer, regularization strength, etc.) based on the validation set performance. This is often done iteratively.
5.  **Test the Network:** Once the hyperparameters are tuned, evaluate the final performance of the network on the test set. This provides an unbiased estimate of the network's generalization ability.

### 3. Hyperparameter Tuning and Model Optimization

**3.1 Techniques:**

*   **Grid Search:** Systematically try all possible combinations of hyperparameters within a defined range.
*   **Random Search:** Randomly sample hyperparameters from a defined range. Often more efficient than grid search, especially when some hyperparameters are more important than others.
*   **Bayesian Optimization:** Uses a probabilistic model to guide the search for the best hyperparameters.  It balances exploration (trying new values) and exploitation (focusing on values that have performed well in the past).
*   **Regularization:** Techniques to prevent overfitting by adding a penalty to the loss function based on the complexity of the model.
    *   **L1 Regularization (Lasso):** Adds a penalty proportional to the absolute value of the weights.  Encourages sparsity (setting some weights to zero).
    *   **L2 Regularization (Ridge):** Adds a penalty proportional to the square of the weights. Prevents weights from becoming too large.
    *   **Dropout:** Randomly deactivates some neurons during training.  Forces the network to learn more robust features.
*   **Early Stopping:** Monitor the performance of the network on the validation set during training and stop training when the performance starts to degrade (indicating overfitting).
*   **Data Augmentation:** Increase the size and diversity of the training data by applying transformations to existing data (e.g., rotating, scaling, cropping images).

**3.2 Considerations:**

*   **Computational Cost:** Hyperparameter tuning can be computationally expensive, especially for large networks and datasets.
*   **Validation Set Size:**  A larger validation set provides a more reliable estimate of performance but reduces the amount of data available for training.
*   **Bias-Variance Tradeoff:**  Finding the right balance between bias (underfitting) and variance (overfitting).

### 4. Common Issues and Solutions

| Issue        | Symptoms                                     | Possible Solutions                                                                                                                                                                                            |
|--------------|----------------------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Overfitting  | High accuracy on the training set, low accuracy on the validation/test sets. | Increase the size of the training data, use regularization techniques (L1, L2, dropout), early stopping, reduce the complexity of the network (fewer layers, fewer neurons). |
| Underfitting | Low accuracy on both the training and test sets.  | Increase the complexity of the network (more layers, more neurons), train for longer, use a more powerful optimization algorithm, reduce regularization.                                                |
| Vanishing Gradients | Weights in earlier layers are not updated effectively. | Use ReLU activation functions, use proper weight initialization (Xavier/Glorot, He), use batch normalization, use gradient clipping.                                                       |
| Exploding Gradients | Weights become very large, leading to instability during training. | Use gradient clipping, reduce the learning rate, use weight regularization.                                                                                                 |

### 5. Practice Questions/Exercises

**Question 1:** Explain the purpose of the validation set and how it helps prevent overfitting.

**Answer:** The validation set is a subset of the data used to monitor the performance of the model during training, *but it is not used to update the model's weights directly*. By evaluating the model's performance on the validation set, we can track whether the model is generalizing well to unseen data or if it is starting to overfit the training data. If the validation performance starts to degrade while the training performance continues to improve, it indicates that the model is overfitting, and we can use techniques like early stopping or regularization to mitigate this.

**Question 2:** What are three common evaluation metrics used for classification problems and how are they calculated?

**Answer:**

*   **Accuracy:** (Number of correct predictions) / (Total number of predictions)
*   **Precision:** TP / (TP + FP), where TP is true positives and FP is false positives.
*   **Recall:** TP / (TP + FN), where TP is true positives and FN is false negatives.

**Question 3:**  Describe the difference between L1 and L2 regularization and how they help prevent overfitting.

**Answer:** Both L1 and L2 regularization add a penalty term to the loss function to discourage large weights, which can lead to overfitting.

*   **L1 Regularization (Lasso):** Adds a penalty proportional to the *absolute value* of the weights. This encourages sparsity, meaning it can drive some weights to exactly zero, effectively removing those features from the model.
*   **L2 Regularization (Ridge):** Adds a penalty proportional to the *square* of the weights. This penalizes large weights more heavily than small weights, but it doesn't typically drive weights to zero.  It tends to shrink all weights towards zero.

**Question 4:**  You observe that your MLP has high training accuracy but very low test accuracy. What is this problem called, and what are three techniques you could use to address it?

**Answer:** This is called **overfitting**.  Possible techniques to address it include:

1.  **Regularization (L1, L2, Dropout):** Penalize complex models and prevent them from memorizing the training data.
2.  **Data Augmentation:** Increase the size and diversity of the training data.
3.  **Early Stopping:** Stop training when the performance on the validation set starts to degrade.

**Question 5:** What is the role of Activation Functions in a Multilayer Perceptron? And give an example of when you may choose one Activation function over the other.

**Answer:** Activation functions introduce non-linearity to the model, enabling it to learn complex relationships in the data. Without activation functions, a multi-layered perceptron would simply be a linear regression, regardless of the number of layers.

ReLU is usually chosen over Sigmoid when you need to train very deep networks, since Sigmoid suffers from the vanishing gradients problem, meaning gradients diminish as they propagate back to earlier layers, slowing down or halting the training process. ReLU avoids this issue because its gradient is constant for positive inputs, ensuring a stronger and more consistent gradient flow. On the other hand, when we need to output a probability between 0 and 1, Sigmoid could be the choice.

### 6. Important Points to Remember

*   **Data Preparation is Crucial:**  Properly preprocessed data (e.g., scaling, normalization) can significantly improve the performance of your MLP.
*   **Hyperparameter Tuning is Essential:**  Finding the right hyperparameters is critical for achieving good performance. Experiment with different values and techniques.
*   **Monitor Training Progress:**  Track the training and validation loss curves to identify potential issues like overfitting or underfitting.
*   **Choose Appropriate Evaluation Metrics:**  Select metrics that are relevant to your task and provide a meaningful assessment of performance.
*   **Don't Over-Optimize on the Test Set:**  The test set should only be used *once* at the very end of the process to evaluate the final performance of your model.  Repeatedly evaluating and adjusting the model based on the test set will lead to an overly optimistic and unrealistic estimate of its generalization ability.
