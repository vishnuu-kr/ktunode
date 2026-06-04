---
title: "Implement neural networks using Sigmoid, ReLU, and Tanh activation functions."
subject: "MACHINE LEARNING LAB"
module: "Module 14: Implement and compare the performance of a neural network using different activation functions (Sigmoid, ReLU, Tanh) on the MNIST dataset. Analyze how each activation function affects the training process and classification accuracy."
branch: "Computer Science and Engineering"
semester: 5
topicId: "684162770fc9aa1fdbc8b98b"
status: "completed"
scrapedAt: "2026-05-20T16:47:53.218Z"
---
# MACHINE LEARNING LAB - Module 14: Activation Functions in Neural Networks (MNIST)

## Topic: Implementing Neural Networks with Sigmoid, ReLU, and Tanh Activation Functions

**Description:** This module focuses on implementing and comparing neural networks using different activation functions – Sigmoid, ReLU, and Tanh – on the MNIST dataset.  We will analyze how each activation function affects the training process and classification accuracy.

**Learning Outcomes:**

*   Understand the purpose and characteristics of Sigmoid, ReLU, and Tanh activation functions.
*   Implement neural networks with Sigmoid, ReLU, and Tanh activation functions using a suitable library (e.g., TensorFlow, PyTorch).
*   Train these networks on the MNIST dataset.
*   Compare the performance (accuracy, training time, convergence speed) of the networks using different activation functions.
*   Analyze the effects of each activation function on the training process, including issues like vanishing gradients.

---

## 1. Key Concepts and Definitions

*   **Neural Network:** A computational model inspired by the structure and function of biological neural networks. It consists of interconnected nodes (neurons) organized in layers.

*   **MNIST Dataset:** A widely used dataset of handwritten digits (0-9). It contains 60,000 training images and 10,000 testing images.  Each image is a 28x28 grayscale image.

*   **Activation Function:** A function applied to the weighted sum of inputs in a neuron. It introduces non-linearity into the network, allowing it to learn complex patterns.  Without non-linear activation functions, the neural network would just be a linear regression model, no matter how many layers we add.

*   **Feedforward Neural Network (FFNN):** A type of neural network where information flows in one direction, from the input layer to the output layer, without cycles or loops. This is the typical architecture we'll use for this module.

*   **Forward Propagation:** The process of calculating the output of the network by passing inputs through the layers, applying weights, biases, and activation functions.

*   **Backward Propagation (Backpropagation):** An algorithm used to train neural networks.  It calculates the gradient of the loss function with respect to the network's weights and biases, allowing for weight adjustments to minimize the loss.

*   **Loss Function (Cost Function):** A function that measures the difference between the network's predicted output and the actual target values.  Common loss functions for classification problems include cross-entropy loss.

*   **Optimizer:** An algorithm used to update the weights and biases of the neural network during training. Examples include Stochastic Gradient Descent (SGD), Adam, and RMSprop.

*   **Epoch:** One complete pass through the entire training dataset during training.

*   **Batch Size:** The number of training examples used in one iteration of updating the network's weights.

*   **Learning Rate:** A parameter that controls the step size during weight updates.  A smaller learning rate leads to slower but potentially more accurate learning; a larger learning rate can lead to faster learning but might overshoot the optimal solution.

*   **Vanishing Gradient Problem:** A common issue in deep neural networks where the gradients become very small during backpropagation, especially in layers closer to the input. This can slow down or prevent learning in those layers. This problem is prevalent with Sigmoid and Tanh, especially in deep networks.

*   **Exploding Gradient Problem:** The opposite of vanishing gradients, where the gradients become extremely large during backpropagation.  This can lead to unstable training and divergence.

---

## 2. Activation Functions: Sigmoid, ReLU, and Tanh

### 2.1 Sigmoid Activation Function

*   **Formula:**  σ(x) = 1 / (1 + exp(-x))
*   **Range:** (0, 1)
*   **Characteristics:**
    *   Outputs a value between 0 and 1, which can be interpreted as a probability.
    *   Smooth and differentiable.
*   **Advantages:**
    *   Easy to interpret outputs as probabilities.
*   **Disadvantages:**
    *   **Vanishing Gradients:**  Gradients can become very small in regions where the input is very large or very small, leading to slow learning or stagnation, particularly in deep networks.
    *   **Not Zero-Centered:**  Outputs are not centered around zero, which can lead to slower convergence.
    *   **Computationally Expensive:** The exponential calculation can be computationally expensive.

### 2.2 ReLU (Rectified Linear Unit) Activation Function

*   **Formula:** ReLU(x) = max(0, x)
*   **Range:** [0, ∞)
*   **Characteristics:**
    *   Outputs 0 for negative inputs and the input value itself for positive inputs.
    *   Simple and computationally efficient.
*   **Advantages:**
    *   **Computationally Efficient:**  Simple calculation.
    *   **Alleviates Vanishing Gradient Problem:**  Linear for positive inputs, providing a strong gradient.
    *   **Faster Convergence:** Generally converges faster than Sigmoid and Tanh.
*   **Disadvantages:**
    *   **Dying ReLU Problem:**  Neurons can "die" if they are always in the negative region, as they will never activate and their weights will not be updated.  This happens when a neuron's weights are updated in such a way that the neuron's input is always negative.
    *   **Not Zero-Centered:** Similar to Sigmoid.

### 2.3 Tanh (Hyperbolic Tangent) Activation Function

*   **Formula:** tanh(x) = (exp(x) - exp(-x)) / (exp(x) + exp(-x))
*   **Range:** (-1, 1)
*   **Characteristics:**
    *   Outputs a value between -1 and 1.
    *   Smooth and differentiable.
*   **Advantages:**
    *   **Zero-Centered:** Outputs are centered around zero, which can lead to faster convergence than Sigmoid.
*   **Disadvantages:**
    *   **Vanishing Gradients:**  Similar to Sigmoid, suffers from vanishing gradients, especially in deep networks.
    *   **Computationally Expensive:** The exponential calculation can be computationally expensive.

---

## 3. Implementation (Illustrative Example using Python and TensorFlow/Keras)

This is a simplified example and might need adjustments based on your specific environment and requirements.  This example provides a starting point for your experiments.

```python
import tensorflow as tf
from tensorflow.keras.datasets import mnist
from tensorflow.keras.models import Sequential
from tensorflow.keras.layers import Dense, Flatten
from tensorflow.keras.optimizers import Adam

# 1. Load and Preprocess the MNIST Dataset
(x_train, y_train), (x_test, y_test) = mnist.load_data()

# Normalize pixel values to be between 0 and 1
x_train = x_train.astype('float32') / 255.0
x_test = x_test.astype('float32') / 255.0

# Convert labels to one-hot encoding
y_train = tf.keras.utils.to_categorical(y_train, num_classes=10)
y_test = tf.keras.utils.to_categorical(y_test, num_classes=10)

# 2. Define a Function to Create a Neural Network with a Specific Activation Function
def create_model(activation_function):
    model = Sequential([
        Flatten(input_shape=(28, 28)),  # Flatten the 28x28 images into a 784-dimensional vector
        Dense(128, activation=activation_function),  # Hidden layer with 128 neurons
        Dense(10, activation='softmax')  # Output layer with 10 neurons (for 10 digits) and softmax activation
    ])
    return model

# 3. Train and Evaluate Models with Different Activation Functions

activation_functions = ['sigmoid', 'relu', 'tanh']
results = {}

for activation in activation_functions:
    print(f"Training model with {activation} activation...")

    # Create the model
    model = create_model(activation)

    # Compile the model
    model.compile(optimizer=Adam(), loss='categorical_crossentropy', metrics=['accuracy'])

    # Train the model
    history = model.fit(x_train, y_train, epochs=10, batch_size=32, validation_split=0.2, verbose=0) # Reduced epochs for demonstration

    # Evaluate the model
    loss, accuracy = model.evaluate(x_test, y_test, verbose=0)
    print(f"{activation} Accuracy: {accuracy}")

    results[activation] = {'accuracy': accuracy, 'history': history}


# 4. Compare the Results (e.g., Plot Accuracy Curves)

import matplotlib.pyplot as plt

plt.figure(figsize=(12, 6))
for activation, result in results.items():
    plt.plot(result['history'].history['accuracy'], label=f'{activation} Training Accuracy')
    plt.plot(result['history'].history['val_accuracy'], label=f'{activation} Validation Accuracy') # Added validation accuracy
plt.title('Training and Validation Accuracy Comparison')
plt.xlabel('Epoch')
plt.ylabel('Accuracy')
plt.legend()
plt.grid(True)
plt.show()


plt.figure(figsize=(12, 6))
for activation, result in results.items():
    plt.plot(result['history'].history['loss'], label=f'{activation} Training Loss')
    plt.plot(result['history'].history['val_loss'], label=f'{activation} Validation Loss') # Added validation loss
plt.title('Training and Validation Loss Comparison')
plt.xlabel('Epoch')
plt.ylabel('Loss')
plt.legend()
plt.grid(True)
plt.show()
```

**Explanation:**

1.  **Load and Preprocess Data:** Loads the MNIST dataset, normalizes pixel values to the range \[0, 1], and converts the labels to a one-hot encoded format. Normalizing the data helps the model to train faster and more effectively. One-hot encoding converts the numerical labels into vectors, making them suitable for categorical crossentropy loss.

2.  **`create_model()` Function:**  This function defines a neural network with a specified activation function. It creates a simple feedforward neural network with an input layer that flattens the image, a hidden layer with 128 neurons, and an output layer with 10 neurons (one for each digit). The output layer uses the 'softmax' activation function to produce probability distributions across the classes.

3.  **Training and Evaluation Loop:** Iterates through the specified activation functions, creates a model with each one, compiles the model, trains it on the training data, evaluates its performance on the test data, and stores the results.

4.  **Results Comparison:**  Uses Matplotlib to plot the training accuracy and validation accuracy for each activation function, allowing for a visual comparison of their performance. A similar plot for the loss function is also created.

**Key Considerations:**

*   **Network Architecture:**  The example uses a simple architecture.  Experiment with different numbers of layers and neurons per layer to see how they affect performance.
*   **Hyperparameter Tuning:** Experiment with different learning rates, batch sizes, and optimizers to improve performance.
*   **Regularization:** Consider adding regularization techniques like dropout or L1/L2 regularization to prevent overfitting.
*   **Epochs:** The number of epochs (complete passes through the dataset) needs to be sufficient for the model to learn effectively.  Too few epochs can lead to underfitting, while too many can lead to overfitting.
*   **Validation Set:** Use a validation set during training to monitor the model's performance on unseen data and detect overfitting.  This is done in the example by `validation_split=0.2`.
*   **Hardware:** Training deep neural networks can be computationally expensive. Consider using a GPU to accelerate training.

---

## 4. Analysis

After running the code above, you should observe the following trends:

*   **ReLU:**  Generally converges faster and achieves higher accuracy than Sigmoid and Tanh.  However, pay attention to the possibility of "dying ReLU" neurons, which can reduce performance.
*   **Sigmoid:**  Typically converges slower and achieves lower accuracy compared to ReLU and Tanh due to the vanishing gradient problem.
*   **Tanh:**  May converge faster than Sigmoid due to being zero-centered but still suffers from vanishing gradients, especially in deeper networks.  Accuracy may be comparable to or slightly better than Sigmoid.

**Analyzing the plots:**

*   The training accuracy and loss plots will show how well the model learns the training data.  Look for smooth curves that indicate stable learning.
*   The validation accuracy and loss plots will show how well the model generalizes to unseen data.  A large gap between training and validation accuracy can indicate overfitting.
*   Compare the curves for different activation functions to see which ones converge faster, achieve higher accuracy, and generalize better.

---

## 5. Practice Questions/Exercises

1.  **Question:** Explain the vanishing gradient problem and how ReLU helps to mitigate it.
    *   **Answer:** The vanishing gradient problem occurs when gradients become very small during backpropagation, especially in deep networks. This hinders learning in earlier layers. ReLU mitigates this because its derivative is 1 for positive inputs, providing a strong gradient signal.

2.  **Question:** What are the advantages and disadvantages of using the Tanh activation function compared to the Sigmoid activation function?
    *   **Answer:** Advantages: Tanh is zero-centered, which can lead to faster convergence. Disadvantages: Tanh still suffers from vanishing gradients, and the exponential calculation can be computationally expensive.

3.  **Question:** Implement a neural network with ReLU activation functions and add a dropout layer after each hidden layer. How does this affect the training process and performance?
    *   **Answer:** Dropout randomly deactivates neurons during training, which helps to prevent overfitting.  The training accuracy might be lower due to the dropped out neurons, but the validation accuracy should improve, indicating better generalization.

4.  **Question:** Modify the code to use a different optimizer (e.g., SGD, RMSprop) and compare the training process and accuracy with the Adam optimizer.
    *   **Answer:**  The optimizer affects how the weights and biases are updated during training.  SGD may be slower but can escape local minima. RMSprop adapts the learning rate for each parameter, often leading to faster convergence. Adam combines the advantages of both.

5.  **Question:** Explore different learning rates for each activation function. How does the learning rate affect the training process and final accuracy?
    *   **Answer:**  A small learning rate can lead to slow convergence, while a large learning rate can cause the training to diverge. Finding an optimal learning rate is crucial for each activation function to achieve good performance.

---

## 6. Important Points to Remember

*   Activation functions are crucial for introducing non-linearity into neural networks, enabling them to learn complex patterns.
*   Sigmoid and Tanh suffer from vanishing gradients, particularly in deep networks.
*   ReLU is computationally efficient and mitigates the vanishing gradient problem but can suffer from the "dying ReLU" problem.
*   The choice of activation function can significantly impact the training process and the final accuracy of the neural network.
*   Experimentation with different activation functions, network architectures, and hyperparameters is key to achieving optimal performance for a given task.
*   Monitor the training process (training and validation accuracy/loss) to identify potential problems like overfitting or slow convergence.

By understanding these concepts and practicing the implementation, you'll gain valuable experience in building and training neural networks for various machine-learning tasks.  Good luck!
