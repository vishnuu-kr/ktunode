---
title: "Tasks:"
subject: "MACHINE LEARNING LAB"
module: "Module 14: Implement and compare the performance of a neural network using different activation functions (Sigmoid, ReLU, Tanh) on the MNIST dataset. Analyze how each activation function affects the training process and classification accuracy."
branch: "Computer Science and Engineering"
semester: 5
topicId: "684162770fc9aa1fdbc8b989"
status: "completed"
scrapedAt: "2026-05-20T16:47:51.794Z"
---
# MACHINE LEARNING LAB - Module 14: Activation Functions and MNIST

## Topic: Implementing and Comparing Activation Functions on MNIST

### Description:

This module focuses on implementing and comparing the performance of neural networks using different activation functions (Sigmoid, ReLU, and Tanh) on the MNIST dataset.  We will analyze how each activation function impacts the training process (speed of convergence, vanishing gradient problem) and the resulting classification accuracy.

### Learning Outcomes:

*   Understand the concept and role of activation functions in neural networks.
*   Implement neural networks using Sigmoid, ReLU, and Tanh activation functions.
*   Train and evaluate neural networks on the MNIST dataset.
*   Compare the performance of different activation functions based on training time, validation accuracy, and potential issues like the vanishing gradient problem.
*   Explain the advantages and disadvantages of each activation function in the context of deep learning.
*   Develop practical skills in using a deep learning framework (e.g., TensorFlow, PyTorch) to build and train neural networks.

### 1. Key Concepts and Definitions

*   **Neural Network:** A computational model inspired by the structure and function of biological neural networks. It consists of interconnected nodes (neurons) organized in layers.
*   **Activation Function:** A mathematical function applied to the weighted sum of inputs in a neuron to determine its output.  It introduces non-linearity, enabling neural networks to learn complex patterns. Without activation functions, a neural network would simply be a linear regression model.
*   **MNIST Dataset:** A widely used dataset of handwritten digits (0-9). It consists of 60,000 training images and 10,000 test images. Each image is a 28x28 grayscale image.
*   **Forward Propagation:** The process of calculating the output of a neural network given an input, by passing data through the layers, applying activation functions, and calculating the final output.
*   **Backpropagation:** An algorithm used to train neural networks. It calculates the gradient of the loss function with respect to the network's weights and biases, allowing for adjustments to improve accuracy.
*   **Loss Function (Cost Function):** A function that measures the difference between the predicted output of a neural network and the actual target value. The goal of training is to minimize the loss function. Common loss functions for classification tasks include categorical cross-entropy.
*   **Optimizer:** An algorithm used to update the weights and biases of a neural network during training. Common optimizers include Stochastic Gradient Descent (SGD), Adam, and RMSprop.
*   **Epoch:** One complete pass through the entire training dataset during training.
*   **Batch Size:** The number of training examples used in one iteration of training.
*   **Learning Rate:** A parameter that controls the step size during optimization.  A higher learning rate can lead to faster convergence but may also cause the training to oscillate or diverge. A lower learning rate can lead to slower convergence but may result in a more accurate solution.
*   **Vanishing Gradient Problem:** A phenomenon in deep neural networks where the gradients become increasingly small as they are backpropagated through the layers. This can lead to slow or stalled training, especially in earlier layers. Sigmoid and Tanh activation functions are particularly prone to this problem.
*   **Exploding Gradient Problem:**  The opposite of the vanishing gradient problem, where the gradients become excessively large during training, leading to unstable training and potentially NaN values.
*   **Overfitting:**  A situation where a model learns the training data too well, including the noise, and performs poorly on unseen data.
*   **Underfitting:** A situation where a model is too simple to capture the underlying patterns in the training data and performs poorly on both the training and unseen data.
*   **Validation Set:**  A subset of the training data that is not used for training but is used to evaluate the model's performance during training. This helps to detect overfitting and tune hyperparameters.

### 2. Activation Functions: In-Depth

#### 2.1 Sigmoid Function

*   **Definition:** σ(x) = 1 / (1 + exp(-x))
*   **Output Range:** (0, 1)
*   **Advantages:**
    *   Outputs values between 0 and 1, making it suitable for output layers representing probabilities.
    *   Smooth gradient.
*   **Disadvantages:**
    *   **Vanishing Gradient Problem:** Gradients can become very small, especially for large positive or negative inputs, hindering learning in deeper layers.
    *   **Not Zero-Centered:** Outputs are not centered around zero, which can lead to slower convergence.
    *   **Computational Expense:** The exponential function is computationally expensive.

#### 2.2 ReLU (Rectified Linear Unit) Function

*   **Definition:** ReLU(x) = max(0, x)
*   **Output Range:** [0, ∞)
*   **Advantages:**
    *   **Computationally Efficient:** Simple to compute.
    *   **Reduces Vanishing Gradient Problem:** Linear for positive inputs, leading to larger gradients and faster learning.
*   **Disadvantages:**
    *   **Dying ReLU Problem:** Neurons can become inactive (output always 0) if they receive consistently negative inputs, preventing them from learning.
    *   **Not Zero-Centered:** Outputs are not centered around zero.

#### 2.3 Tanh (Hyperbolic Tangent) Function

*   **Definition:** tanh(x) = (exp(x) - exp(-x)) / (exp(x) + exp(-x))
*   **Output Range:** (-1, 1)
*   **Advantages:**
    *   **Zero-Centered:** Outputs are centered around zero, which can lead to faster convergence compared to Sigmoid.
*   **Disadvantages:**
    *   **Vanishing Gradient Problem:** Still susceptible to the vanishing gradient problem, although less so than Sigmoid.
    *   **Computational Expense:** The exponential function is computationally expensive.

**Summary Table:**

| Activation Function | Output Range | Advantages                       | Disadvantages                                     |
|---------------------|--------------|-----------------------------------|-------------------------------------------------|
| Sigmoid             | (0, 1)       | Probability Output               | Vanishing Gradient, Not Zero-Centered, Expensive |
| ReLU                | [0, ∞)       | Computationally Efficient, Reduces Vanishing Gradient | Dying ReLU, Not Zero-Centered                       |
| Tanh                | (-1, 1)      | Zero-Centered                      | Vanishing Gradient, Expensive                     |

### 3. Implementation on MNIST

This section outlines the steps involved in implementing neural networks with different activation functions on the MNIST dataset using a deep learning framework like TensorFlow/Keras or PyTorch.

**3.1 Data Preparation:**

1.  **Load the MNIST dataset:** Use the built-in dataset loaders in your chosen framework (e.g., `tf.keras.datasets.mnist.load_data()` in TensorFlow/Keras, or `torchvision.datasets.MNIST` in PyTorch).
2.  **Preprocess the data:**
    *   **Reshape:** Flatten the 28x28 images into a single vector of 784 elements.  This converts each image from a 2D array into a 1D array suitable as input for a fully connected neural network.
    *   **Normalize:** Scale the pixel values to be between 0 and 1 by dividing by 255 (the maximum pixel value). Normalization helps improve training stability and convergence speed.
3.  **Split the data:** Divide the dataset into training, validation, and test sets. A typical split is 60,000 for training, 10,000 for validation (a subset of the training data used during training to evaluate performance), and 10,000 for testing (used only after training to evaluate the final model).
4.  **One-Hot Encode Labels:** Convert the digit labels (0-9) into one-hot encoded vectors. For example, the digit '3' would be represented as `[0, 0, 0, 1, 0, 0, 0, 0, 0, 0]`.  This representation is commonly used for multi-class classification problems.

**3.2 Model Building:**

1.  **Define the model architecture:** Create a feedforward neural network with multiple layers.  A common architecture for MNIST is:
    *   Input layer: 784 neurons (corresponding to the flattened image size)
    *   Hidden layers:  Two or more hidden layers with a reasonable number of neurons (e.g., 128, 64).  The number of hidden layers and neurons per layer are hyperparameters that can be tuned.
    *   Output layer: 10 neurons (corresponding to the 10 digits), with a Softmax activation function to output probabilities for each digit.

2.  **Choose activation functions:** Create three separate models, each using one of the following activation functions for the hidden layers:
    *   Model 1: Sigmoid
    *   Model 2: ReLU
    *   Model 3: Tanh

3.  **Define the loss function and optimizer:** Use categorical cross-entropy as the loss function (suitable for multi-class classification) and an optimizer like Adam or SGD. Choose an appropriate learning rate (e.g., 0.001).

**Example (TensorFlow/Keras):**

```python
import tensorflow as tf

# Model with Sigmoid activation
model_sigmoid = tf.keras.models.Sequential([
  tf.keras.layers.Input(shape=(784,)), #Input layer
  tf.keras.layers.Dense(128, activation='sigmoid'), #Hidden layer 1
  tf.keras.layers.Dense(64, activation='sigmoid'),  #Hidden layer 2
  tf.keras.layers.Dense(10, activation='softmax') #Output layer
])

# Model with ReLU activation
model_relu = tf.keras.models.Sequential([
  tf.keras.layers.Input(shape=(784,)),
  tf.keras.layers.Dense(128, activation='relu'),
  tf.keras.layers.Dense(64, activation='relu'),
  tf.keras.layers.Dense(10, activation='softmax')
])

# Model with Tanh activation
model_tanh = tf.keras.models.Sequential([
  tf.keras.layers.Input(shape=(784,)),
  tf.keras.layers.Dense(128, activation='tanh'),
  tf.keras.layers.Dense(64, activation='tanh'),
  tf.keras.layers.Dense(10, activation='softmax')
])

# Compile the models
model_sigmoid.compile(optimizer='adam',
              loss='categorical_crossentropy',
              metrics=['accuracy'])

model_relu.compile(optimizer='adam',
              loss='categorical_crossentropy',
              metrics=['accuracy'])

model_tanh.compile(optimizer='adam',
              loss='categorical_crossentropy',
              metrics=['accuracy'])
```

**3.3 Training and Evaluation:**

1.  **Train the models:** Train each model using the training data and validate on the validation data. Monitor the training progress, including loss and accuracy on both the training and validation sets. Use a suitable number of epochs (e.g., 10-20 epochs) and batch size (e.g., 32, 64).

2.  **Evaluate the models:** After training, evaluate each model on the test set to obtain the final test accuracy.

**Example (TensorFlow/Keras):**

```python
# Train the models
history_sigmoid = model_sigmoid.fit(x_train, y_train, epochs=10, batch_size=32, validation_data=(x_val, y_val), verbose=0) #setting verbose to 0 will suppress all the training logs.
history_relu = model_relu.fit(x_train, y_train, epochs=10, batch_size=32, validation_data=(x_val, y_val), verbose=0)
history_tanh = model_tanh.fit(x_train, y_train, epochs=10, batch_size=32, validation_data=(x_val, y_val), verbose=0)

# Evaluate the models
loss_sigmoid, accuracy_sigmoid = model_sigmoid.evaluate(x_test, y_test, verbose=0)
loss_relu, accuracy_relu = model_relu.evaluate(x_test, y_test, verbose=0)
loss_tanh, accuracy_tanh = model_tanh.evaluate(x_test, y_test, verbose=0)

print(f"Sigmoid Accuracy: {accuracy_sigmoid}")
print(f"ReLU Accuracy: {accuracy_relu}")
print(f"Tanh Accuracy: {accuracy_tanh}")
```

**3.4 Comparison and Analysis:**

1.  **Compare the training curves:** Plot the training and validation loss and accuracy curves for each model.  Analyze the convergence speed and stability of each activation function.

2.  **Compare the final test accuracies:** Compare the final test accuracies of each model.

3.  **Analyze the results:** Discuss the performance differences between the activation functions.  Consider factors like the vanishing gradient problem, the dying ReLU problem, and the computational cost.

### 4. Analysis of Activation Function Effects

*   **Sigmoid:** Expect slower convergence due to the vanishing gradient problem. May achieve reasonable accuracy, but likely lower than ReLU or Tanh.  Good for the output layer when probabilities are required.
*   **ReLU:** Expect faster convergence and potentially higher accuracy compared to Sigmoid.  May encounter the dying ReLU problem if the learning rate is too high or if neurons are consistently receiving negative inputs.
*   **Tanh:**  Expect faster convergence than Sigmoid due to being zero-centered. Accuracy may be comparable to ReLU, but potentially slightly lower. More computationally expensive than ReLU.

**Expected Outcomes (Illustrative):**

*   **Training Time:** ReLU < Tanh < Sigmoid
*   **Accuracy:** ReLU > Tanh > Sigmoid (though the margin between ReLU and Tanh might be small)

**Note:**  Results can vary depending on the specific network architecture, hyperparameters, and dataset. It's important to experiment and tune the parameters to achieve optimal performance.

### 5. Advantages and Disadvantages in the Context of Deep Learning

| Activation Function | Advantages in Deep Learning                                        | Disadvantages in Deep Learning                                    |
|---------------------|---------------------------------------------------------------------|-----------------------------------------------------------------|
| Sigmoid             | Produces probabilities, suitable for binary classification outputs. | Vanishing Gradients (major issue), Not Zero-Centered, Expensive |
| ReLU                | Mitigates Vanishing Gradients, Computationally efficient.          | Dying ReLU, Not Zero-Centered                                  |
| Tanh                | Zero-Centered, Addresses some issues of Sigmoid.                  | Vanishing Gradients (less severe than Sigmoid), Expensive        |

### 6. Important Points to Remember

*   **Activation functions introduce non-linearity:** Without them, neural networks can only learn linear relationships.
*   **The choice of activation function matters:** It can significantly impact the training process and the final accuracy.
*   **ReLU is often a good starting point:** It is computationally efficient and helps mitigate the vanishing gradient problem.
*   **Experimentation is key:**  Try different activation functions and hyperparameter settings to find the best configuration for your specific problem.
*   **Consider the vanishing/exploding gradient problems:** Be aware of these potential issues, especially when working with deep networks. Techniques like batch normalization and careful weight initialization can help.
*   **Normalization is important:** Properly normalize your input data to improve training stability.

### 7. Practice Questions and Exercises

**Question 1:**

Explain the purpose of an activation function in a neural network.  Why is it necessary?

**Answer:**

Activation functions introduce non-linearity into the neural network, allowing it to learn complex relationships between inputs and outputs. Without activation functions, the neural network would simply be a linear model, unable to capture non-linear patterns in the data.

**Question 2:**

What is the vanishing gradient problem, and how does it affect training?  Which activation functions are more prone to it?

**Answer:**

The vanishing gradient problem occurs when the gradients become increasingly small as they are backpropagated through the layers of a deep neural network. This can cause the training process to slow down or stall, especially in earlier layers. Sigmoid and Tanh activation functions are more prone to the vanishing gradient problem because their gradients tend to be small for large positive or negative inputs.

**Question 3:**

What is the "dying ReLU" problem? How can it be mitigated?

**Answer:**

The "dying ReLU" problem occurs when a ReLU neuron becomes inactive and always outputs zero, effectively preventing it from learning. This happens when a neuron receives consistently negative inputs. It can be mitigated by using a smaller learning rate, using a variant of ReLU like Leaky ReLU or ELU, or using techniques like batch normalization.

**Question 4:**

Compare and contrast the Sigmoid and Tanh activation functions. What are their advantages and disadvantages?

**Answer:**

*   **Sigmoid:** Output range (0, 1). Advantages: Outputs probabilities. Disadvantages: Vanishing gradients, not zero-centered, computationally expensive.
*   **Tanh:** Output range (-1, 1). Advantages: Zero-centered, addresses some issues of sigmoid. Disadvantages: Vanishing gradients (less severe than Sigmoid), computationally expensive.

Both suffer from the vanishing gradient problem, although Tanh is less susceptible due to its zero-centered output. Sigmoid's output is useful when probabilities are needed (e.g., in the output layer for binary classification).

**Exercise:**

1.  Implement the code examples provided in this document using either TensorFlow/Keras or PyTorch.
2.  Experiment with different network architectures (number of layers, number of neurons per layer) and hyperparameters (learning rate, batch size) to see how they affect the performance of each activation function.
3.  Try using other activation functions like Leaky ReLU, ELU, or Swish and compare their performance to Sigmoid, ReLU, and Tanh.
4.  Visualize the activations of different layers in your neural network to gain a better understanding of how the activation functions are working.  You can plot histograms of the activations.
