---
title: "Design and implement an MLP with varying architectures (different hidden layers and neurons)."
subject: "MACHINE LEARNING LAB"
module: "Module 13: Implement and train a Multilayer Feed"
branch: "Computer Science and Engineering"
semester: 5
topicId: "684162770fc9aa1fdbc8b984"
status: "completed"
scrapedAt: "2026-05-20T16:47:48.807Z"
---
# MACHINE LEARNING LAB - Module 13: Implement and Train a Multilayer Feedforward Network (MLP)
## Topic: Design and Implement an MLP with Varying Architectures

### Learning Outcomes:

*   Understand the architecture of a Multilayer Perceptron (MLP).
*   Design MLPs with different hidden layers and neuron counts.
*   Implement MLPs using a machine learning library (e.g., TensorFlow, Keras, PyTorch).
*   Train and evaluate the performance of different MLP architectures on a given dataset.
*   Analyze the impact of architectural choices (number of layers, neurons) on model performance.
*   Implement regularization techniques to prevent overfitting.

### 1. Key Concepts and Definitions:

*   **Multilayer Perceptron (MLP):** A type of feedforward artificial neural network composed of multiple layers of nodes (neurons). It has at least three layers: an input layer, one or more hidden layers, and an output layer.

*   **Feedforward Network:** A neural network where data flows in one direction, from the input layer, through the hidden layers, to the output layer.  There are no loops or cycles.

*   **Neuron (Node):** The basic unit of a neural network. It receives inputs, applies a weighted sum and an activation function, and produces an output.

*   **Layer:** A collection of neurons that operate in parallel.

    *   **Input Layer:** Receives the input features of the dataset. The number of neurons corresponds to the number of features.
    *   **Hidden Layer:** Layers between the input and output layers. They extract complex features from the input data. MLPs can have multiple hidden layers.
    *   **Output Layer:** Produces the final prediction or classification.  The number of neurons depends on the task (e.g., one neuron for binary classification, multiple neurons for multi-class classification or regression).

*   **Weights:** Numerical values that represent the strength of the connections between neurons. They are adjusted during the training process.

*   **Bias:** A constant value added to the weighted sum of inputs in a neuron.  It allows the neuron to activate even when all inputs are zero.

*   **Activation Function:** A function applied to the weighted sum of inputs in a neuron to introduce non-linearity. Common activation functions include:

    *   **Sigmoid:**  Outputs a value between 0 and 1. (Used in earlier MLPs, less common now due to vanishing gradients)
    *   **ReLU (Rectified Linear Unit):** Outputs the input if it's positive, otherwise outputs 0.  (Popular choice for hidden layers)
    *   **Tanh (Hyperbolic Tangent):** Outputs a value between -1 and 1.
    *   **Softmax:**  Outputs a probability distribution over multiple classes. (Commonly used in the output layer for multi-class classification)

*   **Forward Propagation:** The process of passing input data through the network to obtain a prediction.

*   **Backpropagation:** The process of calculating the gradients (derivatives) of the loss function with respect to the weights and biases, and using these gradients to update the weights and biases.

*   **Loss Function (Cost Function):** A function that measures the difference between the predicted output and the actual output.  Common loss functions include:

    *   **Mean Squared Error (MSE):** Used for regression tasks.
    *   **Binary Cross-Entropy:** Used for binary classification tasks.
    *   **Categorical Cross-Entropy:** Used for multi-class classification tasks.

*   **Optimizer:** An algorithm used to update the weights and biases during training to minimize the loss function. Common optimizers include:

    *   **Gradient Descent:** Basic optimization algorithm.
    *   **Stochastic Gradient Descent (SGD):**  Updates weights using a single data point or a small batch.
    *   **Adam:** Adaptive Moment Estimation - a popular and efficient optimizer.
    *   **RMSprop:** Root Mean Square Propagation - another adaptive learning rate optimization algorithm.

*   **Epoch:** One complete pass through the entire training dataset during training.

*   **Batch Size:** The number of training examples used in one iteration of training.

*   **Learning Rate:** A parameter that controls the step size taken during weight updates.

*   **Overfitting:**  A situation where the model learns the training data too well and performs poorly on unseen data.

*   **Regularization:** Techniques used to prevent overfitting, such as:

    *   **L1 Regularization (Lasso):** Adds the absolute value of the weights to the loss function.
    *   **L2 Regularization (Ridge):** Adds the squared value of the weights to the loss function.
    *   **Dropout:** Randomly deactivates neurons during training.

*   **Vanishing Gradients:**  A problem where the gradients become very small during backpropagation, making it difficult for the network to learn.  More common with deep networks and certain activation functions (e.g., Sigmoid).

### 2. Designing MLPs with Different Architectures:

The architecture of an MLP refers to the number of layers and the number of neurons in each layer. Key considerations:

*   **Number of Hidden Layers:**
    *   One hidden layer is often sufficient for many problems.
    *   More hidden layers can allow the network to learn more complex patterns, but can also lead to overfitting and vanishing gradients.
    *   Rule of Thumb: Start with one or two hidden layers and experiment.

*   **Number of Neurons per Layer:**
    *   The number of neurons in each hidden layer is a hyperparameter to tune.
    *   A common approach is to start with a number of neurons similar to the number of input features and then experiment with different values.
    *   Decreasing the number of neurons in later layers can act as a bottleneck, forcing the network to learn more compressed representations of the data.
    *   Too few neurons can limit the model's ability to learn complex patterns. Too many neurons can lead to overfitting.

*   **Output Layer:**
    *   The number of neurons in the output layer should match the desired output:
        *   Regression: One neuron.
        *   Binary Classification: One neuron (with a sigmoid activation).
        *   Multi-class Classification: One neuron per class (with a softmax activation).

**Example Architectures:**

*   **Architecture 1:** Input Layer (10 neurons) -> Hidden Layer 1 (5 neurons, ReLU) -> Output Layer (1 neuron, Sigmoid)
*   **Architecture 2:** Input Layer (10 neurons) -> Hidden Layer 1 (8 neurons, ReLU) -> Hidden Layer 2 (4 neurons, ReLU) -> Output Layer (1 neuron, Sigmoid)
*   **Architecture 3:** Input Layer (10 neurons) -> Hidden Layer 1 (100 neurons, ReLU) -> Output Layer (3 neurons, Softmax)

### 3. Implementing MLPs using a Machine Learning Library (Keras Example):

```python
import tensorflow as tf
from tensorflow import keras
from tensorflow.keras import layers

# Example dataset (replace with your actual data)
import numpy as np
X_train = np.random.rand(100, 10)  # 100 samples, 10 features
y_train = np.random.randint(0, 2, 100) # Binary classification (0 or 1)

X_test = np.random.rand(50, 10)  # 50 samples, 10 features
y_test = np.random.randint(0, 2, 50) # Binary classification (0 or 1)

# Architecture 1:
model1 = keras.Sequential([
    layers.Dense(5, activation='relu', input_shape=(10,)),  # Hidden layer with 5 neurons
    layers.Dense(1, activation='sigmoid') # Output layer with 1 neuron
])

# Architecture 2:
model2 = keras.Sequential([
    layers.Dense(8, activation='relu', input_shape=(10,)),  # Hidden layer 1
    layers.Dense(4, activation='relu'),  # Hidden layer 2
    layers.Dense(1, activation='sigmoid')  # Output layer
])

# Architecture 3:
model3 = keras.Sequential([
    layers.Dense(100, activation='relu', input_shape=(10,)),
    layers.Dense(3, activation='softmax')  # Output layer for multi-class classification
])

# Compile the model
model1.compile(optimizer='adam',
              loss='binary_crossentropy',  # Use 'categorical_crossentropy' for multi-class
              metrics=['accuracy'])

model2.compile(optimizer='adam',
              loss='binary_crossentropy',
              metrics=['accuracy'])

# For model 3, assuming multi-class classification:
model3.compile(optimizer='adam',
              loss='sparse_categorical_crossentropy', #y needs to be integer encoded
              metrics=['accuracy'])


# Train the model (using model1 as an example)
model1.fit(X_train, y_train, epochs=10, batch_size=32, verbose=0)

# Evaluate the model
loss, accuracy = model1.evaluate(X_test, y_test, verbose=0)
print(f"Model 1 - Loss: {loss}, Accuracy: {accuracy}")

```

**Explanation:**

*   **`keras.Sequential`:** Creates a sequential model (layers are added in order).
*   **`layers.Dense`:**  Represents a fully connected layer.
    *   `units`:  Number of neurons in the layer.
    *   `activation`: The activation function.
    *   `input_shape`:  Specifies the shape of the input data for the first layer (e.g., `(10,)` for 10 input features).
*   **`model.compile`:** Configures the model for training.
    *   `optimizer`: Specifies the optimization algorithm.
    *   `loss`:  Specifies the loss function.
    *   `metrics`: Specifies the metrics to evaluate during training.
*   **`model.fit`:** Trains the model.
    *   `X_train`: Training data.
    *   `y_train`: Training labels.
    *   `epochs`: Number of epochs.
    *   `batch_size`: Batch size.
    *   `verbose`:  Controls the level of output during training (0 = silent).
*   **`model.evaluate`:** Evaluates the trained model on the test data.

**Important:**  Replace the example data with your actual dataset.  Adjust the loss function and output layer activation based on the task (classification or regression) and the number of output classes.

### 4. Training and Evaluating Different MLP Architectures:

*   **Train each architecture:**  Use the `model.fit()` method.
*   **Evaluate performance:** Use the `model.evaluate()` method to calculate metrics like accuracy (for classification) or MSE (for regression).
*   **Experiment with different hyperparameters:** Learning rate, batch size, number of epochs, optimizer.
*   **Use cross-validation:** To get a more reliable estimate of the model's performance.  Libraries like scikit-learn provide tools for cross-validation.
*   **Visualization:** Plot training and validation loss/accuracy curves to monitor for overfitting.

### 5. Analyzing the Impact of Architectural Choices:

*   **Overfitting:** If the model performs well on the training data but poorly on the test data, it's likely overfitting. Try:
    *   Reducing the number of layers or neurons.
    *   Using regularization techniques.
    *   Increasing the amount of training data.
*   **Underfitting:** If the model performs poorly on both the training and test data, it's likely underfitting. Try:
    *   Increasing the number of layers or neurons.
    *   Training for more epochs.
    *   Using a more complex model.
*   **Computational Cost:** More complex architectures (more layers and neurons) require more computational resources and training time.

### 6. Implementing Regularization Techniques:

**L1 and L2 Regularization (using Keras):**

```python
from tensorflow.keras import regularizers

model_l2 = keras.Sequential([
    layers.Dense(64, activation='relu', kernel_regularizer=regularizers.l2(0.01), input_shape=(10,)),  # L2 regularization
    layers.Dense(1, activation='sigmoid')
])

model_l1 = keras.Sequential([
    layers.Dense(64, activation='relu', kernel_regularizer=regularizers.l1(0.01), input_shape=(10,)),  # L1 regularization
    layers.Dense(1, activation='sigmoid')
])

# Compile and train as before
```

**Dropout (using Keras):**

```python
model_dropout = keras.Sequential([
    layers.Dense(64, activation='relu', input_shape=(10,)),
    layers.Dropout(0.5),  # Dropout layer with a dropout rate of 0.5
    layers.Dense(1, activation='sigmoid')
])

# Compile and train as before
```

**Explanation:**

*   **`kernel_regularizer`:**  Applies L1 or L2 regularization to the weights of the layer.  The value (e.g., 0.01) is the regularization strength (lambda).
*   **`layers.Dropout`:**  Randomly sets a fraction of the inputs to 0 during training. The dropout rate (e.g., 0.5) is the probability of dropping a neuron.

### 7. Important Points to Remember:

*   **Data Preprocessing:**  Normalize or standardize your data before feeding it into the MLP.  This can significantly improve training performance.  Common methods include `StandardScaler` and `MinMaxScaler` from scikit-learn.
*   **Hyperparameter Tuning:** Experiment with different hyperparameters (learning rate, batch size, number of layers, neurons, regularization strength, etc.) to find the optimal configuration for your dataset.  Tools like GridSearchCV or RandomizedSearchCV in scikit-learn can automate this process.
*   **Validation Set:**  Always use a validation set (separate from the training and test sets) to monitor the model's performance during training and to tune hyperparameters.
*   **Early Stopping:**  Stop training when the performance on the validation set starts to decrease to prevent overfitting. Keras has an `EarlyStopping` callback.
*   **Activation Function Choice:** ReLU is generally a good choice for hidden layers. Softmax is common for the output layer in multi-class classification.
*   **Monitoring Training:** Plot the training and validation loss and accuracy curves to monitor the training process and identify potential problems like overfitting or underfitting.
*   **Experimentation:**  MLP design is often an iterative process.  Experiment with different architectures and hyperparameters to find the best solution for your problem.

### Practice Questions/Exercises:

1.  **Question:** What is the purpose of an activation function in a neuron?
    *   **Answer:** To introduce non-linearity, allowing the network to learn complex patterns.

2.  **Question:** What are three common activation functions?
    *   **Answer:** ReLU, Sigmoid, Tanh, Softmax

3.  **Question:** What is the purpose of backpropagation?
    *   **Answer:** To calculate the gradients of the loss function with respect to the weights and biases, and use these gradients to update the weights and biases to minimize the loss.

4.  **Question:** How can you prevent overfitting in an MLP?
    *   **Answer:** Use regularization techniques (L1, L2, Dropout), reduce the complexity of the model (fewer layers, neurons), use more training data, use early stopping.

5.  **Question:** Explain the difference between L1 and L2 regularization.
    *   **Answer:** L1 regularization adds the absolute value of the weights to the loss function, while L2 regularization adds the squared value of the weights to the loss function. L1 can lead to sparse weights (some weights become zero), while L2 tends to shrink weights towards zero.

6.  **Exercise:** Implement and train two MLPs with different architectures on the MNIST dataset (handwritten digit recognition). Compare their performance. Use a validation set to monitor for overfitting.
    *   **Guidance:**  The MNIST dataset is available in Keras (`keras.datasets.mnist`).  Create two models:
        *   Model 1: Input -> Dense(128, ReLU) -> Dense(10, Softmax)
        *   Model 2: Input -> Dense(64, ReLU) -> Dense(32, ReLU) -> Dense(10, Softmax)
        *   Remember to flatten the input images (28x28) into a 1D vector (784 elements).
        *   Experiment with different learning rates and batch sizes.
        *   Use `sparse_categorical_crossentropy` as the loss function.
        *   Evaluate the accuracy on the test set.
        *   Analyze the training and validation loss curves.  Did either model overfit?  How could you prevent it?

7.  **Exercise:** Implement dropout regularization in one of the MLPs from the previous exercise and compare its performance with the unregularized model.

These notes provide a comprehensive overview of designing and implementing MLPs with varying architectures. Remember to experiment and adapt these techniques to your specific problem and dataset. Good luck!
