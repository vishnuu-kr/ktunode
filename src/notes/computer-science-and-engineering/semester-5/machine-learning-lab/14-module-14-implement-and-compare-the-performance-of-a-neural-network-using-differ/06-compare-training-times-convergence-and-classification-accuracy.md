---
title: "Compare training times, convergence, and classification accuracy."
subject: "MACHINE LEARNING LAB"
module: "Module 14: Implement and compare the performance of a neural network using different activation functions (Sigmoid, ReLU, Tanh) on the MNIST dataset. Analyze how each activation function affects the training process and classification accuracy."
branch: "Computer Science and Engineering"
semester: 5
topicId: "684162770fc9aa1fdbc8b98d"
status: "completed"
scrapedAt: "2026-05-20T16:47:54.625Z"
---
# Machine Learning Lab: Module 14 - Activation Functions & MNIST

## Overview

This module focuses on implementing and comparing the performance of a neural network using different activation functions (Sigmoid, ReLU, Tanh) on the MNIST dataset. We will analyze how each activation function affects the training process and classification accuracy, with a specific focus on comparing training times, convergence, and classification accuracy.

## Learning Outcomes

By the end of this module, you will be able to:

*   Implement a neural network using different activation functions (Sigmoid, ReLU, Tanh).
*   Train and evaluate these networks on the MNIST dataset.
*   Compare the training times of networks with different activation functions.
*   Analyze the convergence behavior of networks with different activation functions.
*   Compare the classification accuracy of networks with different activation functions.
*   Explain the advantages and disadvantages of each activation function.
*   Identify potential problems associated with each activation function (e.g., vanishing gradients).

## 1. Key Concepts and Definitions

### 1.1. Activation Functions

*   **Definition:** An activation function introduces non-linearity into the output of a neuron. Without non-linear activation functions, a neural network would simply be a linear regression model.

*   **Purpose:** They enable the network to learn complex patterns and relationships in data.

### 1.2. Sigmoid Activation Function

*   **Formula:** σ(x) = 1 / (1 + e^(-x))
*   **Range:** (0, 1)
*   **Properties:**
    *   Outputs values between 0 and 1, making it suitable for probabilistic outputs (e.g., binary classification).
    *   Historically popular, but less used in modern deep learning due to vanishing gradients.

*   **Disadvantages:**
    *   **Vanishing Gradients:** For very large or very small inputs, the gradient becomes close to zero, hindering learning in deeper layers.
    *   **Not Zero-Centered:** Outputs are not centered around zero, which can slow down learning.
    *   **Computationally Expensive:** Involving exponential calculations.

### 1.3. Tanh (Hyperbolic Tangent) Activation Function

*   **Formula:** tanh(x) = (e^x - e^(-x)) / (e^x + e^(-x))
*   **Range:** (-1, 1)
*   **Properties:**
    *   Outputs are zero-centered, which can speed up learning compared to sigmoid.
    *   Similar to sigmoid, it suffers from the vanishing gradient problem.

*   **Disadvantages:**
    *   **Vanishing Gradients:** Like Sigmoid, it has vanishing gradient problems when input gets very large or very small.
    *   **Computationally Expensive:** Involving exponential calculations.

### 1.4. ReLU (Rectified Linear Unit) Activation Function

*   **Formula:** ReLU(x) = max(0, x)
*   **Range:** [0, ∞)
*   **Properties:**
    *   Simple and computationally efficient.
    *   Helps mitigate the vanishing gradient problem in many scenarios.

*   **Advantages:**
    *   **Computationally efficient:** Easier to calculate compared to sigmoid and tanh.
    *   **Less likely to saturate:** It reduces the vanishing gradient problem compared to sigmoid and tanh.
    *   **Speeds up training:** Faster computation and reduced vanishing gradient issues generally leads to faster training.

*   **Disadvantages:**
    *   **Dying ReLU Problem:** Neurons can "die" if they output zero for all inputs, effectively becoming inactive and not contributing to learning. This can occur if a large gradient flows through a ReLU neuron, causing its weights to update such that it always outputs zero.

### 1.5. MNIST Dataset

*   **Description:** A widely used dataset of handwritten digits (0-9).
*   **Structure:** Contains 60,000 training images and 10,000 test images. Each image is 28x28 pixels.
*   **Use:** Commonly used as a benchmark for evaluating machine learning algorithms, especially neural networks.

### 1.6. Training Time

*   **Definition:** The amount of time required to train a neural network on a given dataset. Influenced by factors such as dataset size, network architecture, activation function, optimization algorithm, and hardware.

### 1.7. Convergence

*   **Definition:** The process of a neural network's loss function decreasing and stabilizing during training, indicating that the network is learning.
*   **Factors Affecting Convergence:** Learning rate, batch size, activation function, network architecture, and optimization algorithm.
*   **Poor Convergence:** Can be caused by high learning rates (overshooting the optimal solution), vanishing gradients, or a poorly designed network architecture.

### 1.8. Classification Accuracy

*   **Definition:** The percentage of correctly classified samples in a test dataset. A key metric for evaluating the performance of a classification model.

### 1.9. Vanishing Gradients

*   **Definition:** A phenomenon where gradients become extremely small during backpropagation, especially in deep networks. This prevents weights in earlier layers from being updated effectively, hindering learning.
*   **Cause:** Often caused by activation functions with gradients that saturate (e.g., sigmoid and tanh).

### 1.10. Optimization Algorithms

*   **Definition:** Algorithms used to update the weights of a neural network during training.
*   **Examples:** Stochastic Gradient Descent (SGD), Adam, RMSprop. Adam and RMSprop typically converge faster than SGD.

## 2. Implementation

This section outlines the steps to implement and compare neural networks with different activation functions on the MNIST dataset. We'll use Python with libraries like TensorFlow or PyTorch.

**2.1. Setup:**

1.  **Install Libraries:**
    ```bash
    pip install tensorflow numpy matplotlib
    ```
    (or install PyTorch: `pip install torch torchvision torchaudio`)

2.  **Import Libraries:**
    ```python
    import tensorflow as tf
    from tensorflow.keras.datasets import mnist
    from tensorflow.keras.models import Sequential
    from tensorflow.keras.layers import Dense, Flatten
    import matplotlib.pyplot as plt
    import time
    import numpy as np
    ```

**2.2. Load and Preprocess MNIST Data:**

```python
(x_train, y_train), (x_test, y_test) = mnist.load_data()

# Normalize pixel values to be between 0 and 1
x_train = x_train.astype('float32') / 255.0
x_test = x_test.astype('float32') / 255.0

# Convert labels to categorical one-hot encoding
y_train = tf.keras.utils.to_categorical(y_train, num_classes=10)
y_test = tf.keras.utils.to_categorical(y_test, num_classes=10)
```

**2.3. Define and Train Neural Networks with Different Activation Functions:**

```python
def create_model(activation='relu'):
    model = Sequential([
        Flatten(input_shape=(28, 28)), # Input layer
        Dense(128, activation=activation), # Hidden layer 1
        Dense(10, activation='softmax') # Output layer (softmax for multi-class classification)
    ])
    model.compile(optimizer='adam',
                  loss='categorical_crossentropy', # Loss Function
                  metrics=['accuracy'])        # Performance Metrics
    return model

# Define the activation functions to test
activations = ['sigmoid', 'relu', 'tanh']
results = {}

for activation in activations:
    print(f"Training model with {activation} activation function...")
    model = create_model(activation=activation)
    start_time = time.time()
    history = model.fit(x_train, y_train, epochs=10, batch_size=32, validation_split=0.1, verbose=0) #Reduced epochs for example
    end_time = time.time()
    training_time = end_time - start_time
    _, accuracy = model.evaluate(x_test, y_test, verbose=0)
    results[activation] = {'training_time': training_time, 'accuracy': accuracy, 'history': history}
    print(f"{activation} Training Time: {training_time:.2f} seconds, Accuracy: {accuracy:.4f}")

```

**2.4. Analyze and Compare Results:**

```python
# Plotting Training Loss
plt.figure(figsize=(12, 6))
for activation, result in results.items():
    plt.plot(result['history'].history['loss'], label=f'{activation} loss')
plt.title('Training Loss for Different Activation Functions')
plt.xlabel('Epoch')
plt.ylabel('Loss')
plt.legend()
plt.show()

# Plotting Training Accuracy
plt.figure(figsize=(12, 6))
for activation, result in results.items():
    plt.plot(result['history'].history['accuracy'], label=f'{activation} accuracy')
plt.title('Training Accuracy for Different Activation Functions')
plt.xlabel('Epoch')
plt.ylabel('Accuracy')
plt.legend()
plt.show()


# Compare training times and accuracies
print("\nComparison:")
for activation, result in results.items():
    print(f"{activation}: Training Time = {result['training_time']:.2f} seconds, Accuracy = {result['accuracy']:.4f}")

```

**2.5. Expected Output and Analysis**

The code trains three neural networks, each with a different activation function (Sigmoid, ReLU, and Tanh), on the MNIST dataset. It measures and compares the training time and the final classification accuracy achieved by each network. The performance metrics and the training history (loss and accuracy curves) are plotted to evaluate the effects of each activation function on training. The `verbose=0` argument in the `model.fit` function prevents printing the epoch-by-epoch training progress. The final comparison is printed.
Here's a summary of what the printed output and generated plots would typically indicate:

*   **Training Times**: ReLU is generally expected to train faster than Sigmoid and Tanh due to its computational efficiency and ability to mitigate the vanishing gradient problem.
*   **Classification Accuracy**: ReLU often outperforms Sigmoid and Tanh because it mitigates the vanishing gradient problem, which helps in learning more complex patterns. Tanh, with its zero-centered output, is typically better than Sigmoid but may still underperform compared to ReLU.
*   **Training Loss and Accuracy Plots**: The plots will show the convergence behavior. ReLU may exhibit a faster initial drop in loss and a quicker increase in accuracy. Sigmoid and Tanh may show slower convergence and potentially plateau at a higher loss and lower accuracy.

**Note:** These are general expectations, and the exact outcomes can vary based on the specific network architecture, hyperparameters (learning rate, batch size), and random initialization of weights.

## 3. Comparing Training Times, Convergence, and Classification Accuracy

### 3.1. Training Time

*   **General Trend:** ReLU tends to train faster than Tanh, and Tanh faster than Sigmoid.

*   **Reasoning:** ReLU has a simpler computation compared to the exponential functions in Sigmoid and Tanh.  Additionally, ReLU's ability to mitigate vanishing gradients helps networks converge faster.

*   **Example:**  If you run the above code, you might observe ReLU completing 10 epochs in significantly less time than Sigmoid, while Tanh is somewhere in between.

### 3.2. Convergence

*   **General Trend:** ReLU usually exhibits faster initial convergence. Sigmoid might struggle to converge, especially in deeper networks.

*   **Reasoning:** Vanishing gradients in Sigmoid and Tanh slow down learning, especially in earlier layers. ReLU's linear nature for positive inputs helps maintain gradients during backpropagation.

*   **Example:** By plotting the loss curves from the `history` object, you can visually see ReLU's loss decreasing more rapidly in the initial epochs compared to Sigmoid.

### 3.3. Classification Accuracy

*   **General Trend:** ReLU often achieves higher accuracy on MNIST compared to Sigmoid and Tanh. Tanh can sometimes perform slightly better than Sigmoid.

*   **Reasoning:** The ability of ReLU to mitigate vanishing gradients allows the network to learn more complex representations and generalize better to the test data.

*   **Example:**  After training, the evaluation on the test set should show ReLU with a higher accuracy score compared to the other activation functions.  A typical accuracy range might be ReLU > 95%, Tanh > 90%, Sigmoid > 85%. Actual results will vary on hyperparameter configurations.

## 4. Advantages and Disadvantages of Each Activation Function

| Activation Function | Advantages                                                     | Disadvantages                                                                        |
| :------------------ | :------------------------------------------------------------- | :----------------------------------------------------------------------------------- |
| Sigmoid             | Outputs values between 0 and 1 (useful for binary classification) | Vanishing gradients, not zero-centered, computationally expensive                   |
| Tanh                | Zero-centered output                                            | Vanishing gradients, computationally expensive                                       |
| ReLU                | Computationally efficient, mitigates vanishing gradients         | Dying ReLU problem (neurons can become inactive if always outputting zero) |

## 5. Potential Problems Associated with Each Activation Function

*   **Sigmoid & Tanh:**
    *   **Vanishing Gradients:** In deep networks, gradients can become extremely small, preventing earlier layers from learning effectively.
*   **ReLU:**
    *   **Dying ReLU Problem:** A ReLU neuron can become inactive if it always outputs zero. This happens when a large gradient update causes the neuron's weights to be in a region where the input is always negative.
    *   **Mitigation for Dying ReLU:**  Use variants like Leaky ReLU or ELU which allow a small, non-zero gradient when the input is negative.

## 6. Practice Questions and Exercises

**Q1:** Explain the vanishing gradient problem and how it affects the training of neural networks.  Which activation functions are most susceptible to this problem?

**Answer:** The vanishing gradient problem occurs when gradients become extremely small during backpropagation, especially in deep networks. This prevents weights in earlier layers from being updated effectively, hindering learning. Sigmoid and Tanh are most susceptible to this problem due to their saturating nature (gradients approach zero for large positive or negative inputs).

**Q2:** What is the "Dying ReLU" problem, and how can it be mitigated?

**Answer:**  The "Dying ReLU" problem occurs when a ReLU neuron becomes inactive because its input is always negative, resulting in an output of zero. This prevents the neuron from learning. It can be mitigated by using variants of ReLU, such as Leaky ReLU or ELU, which allow a small, non-zero gradient when the input is negative.

**Q3:**  Why might ReLU be preferred over Sigmoid or Tanh in many modern deep learning applications?

**Answer:** ReLU is often preferred because it is computationally efficient, and it helps mitigate the vanishing gradient problem. This generally leads to faster training and improved performance, especially in deep networks.

**Q4:** Implement a neural network with Leaky ReLU activation and compare its performance to the ReLU activation function on the MNIST dataset.

**Solution:**

```python
import tensorflow as tf
from tensorflow.keras.datasets import mnist
from tensorflow.keras.models import Sequential
from tensorflow.keras.layers import Dense, Flatten, LeakyReLU
import matplotlib.pyplot as plt
import time

# Load and preprocess MNIST data (same as before)
(x_train, y_train), (x_test, y_test) = mnist.load_data()
x_train = x_train.astype('float32') / 255.0
x_test = x_test.astype('float32') / 255.0
y_train = tf.keras.utils.to_categorical(y_train, num_classes=10)
y_test = tf.keras.utils.to_categorical(y_test, num_classes=10)


def create_model(activation_type='relu'):
    model = Sequential([
        Flatten(input_shape=(28, 28)),
        Dense(128),  # Remove activation from Dense layer
        LeakyReLU(alpha=0.1) if activation_type == 'leaky_relu' else tf.keras.layers.ReLU(),
        Dense(10, activation='softmax')
    ])
    model.compile(optimizer='adam',
                  loss='categorical_crossentropy',
                  metrics=['accuracy'])
    return model

# Train model with ReLU
model_relu = create_model(activation_type='relu')
start_time_relu = time.time()
history_relu = model_relu.fit(x_train, y_train, epochs=10, batch_size=32, validation_split=0.1, verbose=0)
end_time_relu = time.time()
training_time_relu = end_time_relu - start_time_relu
_, accuracy_relu = model_relu.evaluate(x_test, y_test, verbose=0)
print(f"ReLU Training Time: {training_time_relu:.2f} seconds, Accuracy: {accuracy_relu:.4f}")

# Train model with Leaky ReLU
model_leaky_relu = create_model(activation_type='leaky_relu')
start_time_leaky = time.time()
history_leaky = model_leaky_relu.fit(x_train, y_train, epochs=10, batch_size=32, validation_split=0.1, verbose=0)
end_time_leaky = time.time()
training_time_leaky = end_time_leaky - start_time_leaky
_, accuracy_leaky = model_leaky_relu.evaluate(x_test, y_test, verbose=0)
print(f"Leaky ReLU Training Time: {training_time_leaky:.2f} seconds, Accuracy: {accuracy_leaky:.4f}")



#Plotting
plt.figure(figsize=(12, 6))
plt.plot(history_relu.history['loss'], label='ReLU Loss')
plt.plot(history_leaky.history['loss'], label='Leaky ReLU Loss')
plt.title('Training Loss')
plt.xlabel('Epoch')
plt.ylabel('Loss')
plt.legend()
plt.show()

plt.figure(figsize=(12, 6))
plt.plot(history_relu.history['accuracy'], label='ReLU Accuracy')
plt.plot(history_leaky.history['accuracy'], label='Leaky ReLU Accuracy')
plt.title('Training Accuracy')
plt.xlabel('Epoch')
plt.ylabel('Accuracy')
plt.legend()
plt.show()

```

**Q5:** Explain why a zero-centered activation function like Tanh might lead to faster training compared to Sigmoid.

**Answer:**  A zero-centered activation function like Tanh helps to balance the gradients during backpropagation. When the inputs to a layer are always positive (as is the case with sigmoid), the gradients during backpropagation will also be predominantly positive or negative, leading to zigzagging updates of the weights. Zero-centered inputs, on the other hand, can lead to more direct and efficient weight updates, speeding up training.

## 7. Important Points to Remember

*   The choice of activation function can significantly impact the performance of a neural network.
*   ReLU is often a good starting point due to its computational efficiency and ability to mitigate the vanishing gradient problem.
*   Be aware of the potential problems associated with each activation function (vanishing gradients, dying ReLU) and consider using variants like Leaky ReLU or ELU to address these issues.
*   Experiment with different activation functions and hyperparameters to find the best configuration for your specific task and dataset.
*   Always monitor training time, convergence, and classification accuracy to evaluate the performance of your models.
*   While these notes use TensorFlow examples, the concepts and principles are applicable to other deep learning frameworks like PyTorch.  The implementation details may vary, but the underlying theory remains the same.
