---
title: "Implement and compare the performance of a neural network using different activation functions (Sigmoid, ReLU, Tanh) on the MNIST dataset. Analyze how each activation function affects the training process and classification accuracy."
subject: "MACHINE LEARNING LAB"
module: "Module 14: Implement and compare the performance of a neural network using different activation functions (Sigmoid, ReLU, Tanh) on the MNIST dataset. Analyze how each activation function affects the training process and classification accuracy."
branch: "Computer Science and Engineering"
semester: 5
topicId: "684162770fc9aa1fdbc8b988"
status: "completed"
scrapedAt: "2026-05-20T16:47:51.084Z"
---
# Machine Learning Lab - Module 14: Activation Functions and MNIST

**Topic:** Implement and compare the performance of a neural network using different activation functions (Sigmoid, ReLU, Tanh) on the MNIST dataset. Analyze how each activation function affects the training process and classification accuracy.

**Learning Outcomes:**

*   Understand the purpose of activation functions in neural networks.
*   Describe the characteristics of Sigmoid, ReLU, and Tanh activation functions.
*   Implement a neural network using each of these activation functions.
*   Train and evaluate the performance of each network on the MNIST dataset.
*   Compare the training speed, convergence rate, and classification accuracy of the different activation functions.
*   Explain the advantages and disadvantages of each activation function in the context of the MNIST dataset.
*   Identify potential issues like vanishing gradients and how they relate to activation functions.

## 1. Introduction to Activation Functions

*   **Definition:** Activation functions introduce non-linearity into the output of a neuron, enabling neural networks to learn complex patterns. Without activation functions, a neural network would simply be a linear regression model, regardless of its depth.
*   **Purpose:**
    *   Introduce non-linearity.
    *   Map the output of a neuron to a desired range (e.g., 0 to 1 for Sigmoid).
    *   Determine whether a neuron should be activated ("fired").
*   **Importance:** Essential for neural networks to approximate any complex function (Universal Approximation Theorem).

## 2. Types of Activation Functions: Sigmoid, ReLU, and Tanh

### 2.1 Sigmoid Activation Function

*   **Equation:**  σ(x) = 1 / (1 + exp(-x))
*   **Output Range:** (0, 1)
*   **Shape:** S-shaped curve.
*   **Advantages:**
    *   Output is easy to interpret as a probability.
    *   Output is bounded, which can stabilize training in some cases.
*   **Disadvantages:**
    *   **Vanishing Gradients:**  For very large or very small input values, the gradient approaches zero, which hinders learning. This is especially problematic in deep networks.
    *   **Not Zero-Centered:** The output is not centered around zero, which can slow down learning.
    *   **Computational Cost:** Relatively more expensive to compute than ReLU due to the exponential function.

### 2.2 ReLU (Rectified Linear Unit) Activation Function

*   **Equation:** f(x) = max(0, x)
*   **Output Range:** [0, ∞)
*   **Shape:** Linear for positive inputs, zero for negative inputs.
*   **Advantages:**
    *   **Simple and Efficient:** Computationally inexpensive.
    *   **Mitigates Vanishing Gradients:**  For positive inputs, the gradient is always 1, which helps to alleviate the vanishing gradient problem in some layers.
*   **Disadvantages:**
    *   **Dying ReLU Problem:**  If a neuron's input is consistently negative, it will never activate, and its weights will never be updated.  This effectively "kills" the neuron.
    *   **Not Zero-Centered:**  Similar to Sigmoid, this can slow down learning.
    *   **Unbounded Output:** The output can grow indefinitely, which can sometimes lead to instability.

### 2.3 Tanh (Hyperbolic Tangent) Activation Function

*   **Equation:** tanh(x) = (exp(x) - exp(-x)) / (exp(x) + exp(-x))
*   **Output Range:** (-1, 1)
*   **Shape:** S-shaped curve, similar to Sigmoid but centered at 0.
*   **Advantages:**
    *   **Zero-Centered:**  This helps to improve learning speed compared to Sigmoid.
*   **Disadvantages:**
    *   **Vanishing Gradients:**  Still suffers from the vanishing gradient problem, though often less severe than Sigmoid.
    *   **Computational Cost:**  More expensive than ReLU.

## 3. Implementing Neural Networks with Different Activation Functions on MNIST

### 3.1 MNIST Dataset

*   **Description:** A dataset of handwritten digits (0-9) containing 60,000 training images and 10,000 testing images.
*   **Format:** Each image is 28x28 pixels, represented as grayscale values (0-255).
*   **Task:** Classify each image into its correct digit label.

### 3.2 Steps for Implementation (using Python and libraries like TensorFlow/Keras or PyTorch):

1.  **Load the MNIST dataset:**  Use libraries like `tensorflow.keras.datasets.mnist` or `torchvision.datasets.MNIST`.
2.  **Preprocess the data:**
    *   **Reshape:** Flatten the 28x28 images into a 784-dimensional vector.
    *   **Normalize:** Scale the pixel values to a range between 0 and 1 by dividing by 255.
    *   **One-hot encode labels:** Convert the integer labels (0-9) into one-hot encoded vectors (e.g., 5 becomes [0, 0, 0, 0, 0, 1, 0, 0, 0, 0]).
3.  **Define the neural network architecture:** Create a multi-layer perceptron (MLP) with:
    *   An input layer (784 neurons).
    *   One or more hidden layers (e.g., 128 neurons each).
    *   An output layer (10 neurons, one for each digit).
4.  **Implement the network using each of the activation functions:**
    *   **Network 1: Sigmoid:**  Use Sigmoid activation in the hidden layers and a Softmax activation in the output layer (for multi-class classification).
    *   **Network 2: ReLU:** Use ReLU activation in the hidden layers and Softmax in the output layer.
    *   **Network 3: Tanh:** Use Tanh activation in the hidden layers and Softmax in the output layer.
5.  **Compile the model:**
    *   Specify the loss function (e.g., categorical cross-entropy).
    *   Choose an optimizer (e.g., Adam, SGD).
    *   Define evaluation metrics (e.g., accuracy).
6.  **Train the model:**
    *   Feed the training data to the model in batches.
    *   Specify the number of epochs (iterations over the entire dataset).
    *   Monitor the training progress (loss and accuracy).
7.  **Evaluate the model:**
    *   Use the test dataset to evaluate the performance of the trained model.
    *   Calculate the classification accuracy.

### 3.3 Example Code Snippet (Keras/TensorFlow):

```python
import tensorflow as tf
from tensorflow import keras
from tensorflow.keras import layers

# Load and preprocess the data (as described in step 2 above)
(x_train, y_train), (x_test, y_test) = keras.datasets.mnist.load_data()
x_train = x_train.reshape(60000, 784).astype('float32') / 255
x_test = x_test.reshape(10000, 784).astype('float32') / 255
y_train = keras.utils.to_categorical(y_train, num_classes=10)
y_test = keras.utils.to_categorical(y_test, num_classes=10)


def create_model(activation_function):
    model = keras.Sequential([
        layers.Dense(128, activation=activation_function, input_shape=(784,)),
        layers.Dense(10, activation='softmax') # Softmax for multi-class classification
    ])
    model.compile(optimizer='adam',
                  loss='categorical_crossentropy',
                  metrics=['accuracy'])
    return model


# Create models with different activation functions
model_sigmoid = create_model('sigmoid')
model_relu = create_model('relu')
model_tanh = create_model('tanh')

# Train the models
history_sigmoid = model_sigmoid.fit(x_train, y_train, epochs=10, batch_size=32, verbose=0) # Suppress verbose output for brevity
history_relu = model_relu.fit(x_train, y_train, epochs=10, batch_size=32, verbose=0)
history_tanh = model_tanh.fit(x_train, y_train, epochs=10, batch_size=32, verbose=0)

# Evaluate the models
loss_sigmoid, accuracy_sigmoid = model_sigmoid.evaluate(x_test, y_test, verbose=0)
loss_relu, accuracy_relu = model_relu.evaluate(x_test, y_test, verbose=0)
loss_tanh, accuracy_tanh = model_tanh.evaluate(x_test, y_test, verbose=0)

print("Sigmoid Accuracy: ", accuracy_sigmoid)
print("ReLU Accuracy: ", accuracy_relu)
print("Tanh Accuracy: ", accuracy_tanh)


# You can further analyze the training history (history_*) to compare training speed and convergence.

```

**Explanation:**

*   The code defines a function `create_model` that takes the activation function as an argument and creates a simple neural network with one hidden layer.
*   The code then creates three models, one for each activation function (Sigmoid, ReLU, and Tanh).
*   The models are trained and evaluated, and the accuracy is printed.
*   This is a simplified example. You can experiment with different architectures, optimizers, and hyperparameters to improve performance.
*   The `verbose=0` arguments are included in `fit` and `evaluate` to suppress excessive output during running for demonstration purposes. Remove or change to `verbose=1` for detailed logging during model training.

## 4. Comparing Performance and Analyzing Results

*   **Training Speed:**  ReLU generally trains faster than Sigmoid and Tanh, especially in deeper networks.  Tanh is often faster than Sigmoid because of its zero-centered output.
*   **Convergence Rate:** ReLU often converges faster initially, but may sometimes struggle to reach the same level of accuracy as Tanh if the Dying ReLU problem is prevalent.
*   **Classification Accuracy:** ReLU often achieves the best classification accuracy on MNIST, but the specific performance can vary depending on the network architecture and hyperparameters.  Tanh can also perform well, and sometimes better than ReLU, depending on the learning rate and network depth.  Sigmoid typically performs the worst.
*   **Vanishing Gradients:** If you observe slow training or poor performance with Sigmoid, it's likely due to vanishing gradients.  This can be diagnosed by looking at the gradients during training (difficult to do in this simplified example, but possible with more logging).

## 5. Advantages and Disadvantages in the Context of MNIST

| Activation Function | Advantages                                                                                                | Disadvantages                                                                                                 | Performance on MNIST                                                                                                                                                                                                                                 |
| ------------------- | --------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Sigmoid             | Output is easy to interpret as a probability.                                                        | Vanishing gradients, not zero-centered, computationally expensive.                                              | Typically the lowest accuracy.  Vanishing gradients hinder learning, especially in deeper networks.  Slowest training speed.                                                                                                                               |
| ReLU                | Computationally efficient, mitigates vanishing gradients (for positive inputs).                       | Dying ReLU problem, not zero-centered, unbounded output.                                                    | Often achieves the best accuracy on MNIST, but performance can be sensitive to learning rate.  Fastest training speed. Can be susceptible to dying ReLU units depending on architecture, regularization, and parameter initialization.                  |
| Tanh                | Zero-centered output, which can speed up learning compared to Sigmoid.                                  | Vanishing gradients (though often less severe than Sigmoid), computationally more expensive than ReLU.        | Good performance, often better than Sigmoid and sometimes better than ReLU (depending on hyperparameters).  Training speed is typically slower than ReLU but faster than Sigmoid.  Less prone to dying units compared to ReLU with proper initialization. |

## 6. Important Points to Remember

*   **No one-size-fits-all:** The best activation function depends on the specific problem, dataset, and network architecture.
*   **Experimentation:** It's crucial to experiment with different activation functions and hyperparameters to find the best configuration for your task.
*   **Considerations for Deep Networks:** In deep networks, the vanishing gradient problem becomes more pronounced, making ReLU and its variants (e.g., Leaky ReLU, ELU) more attractive than Sigmoid or Tanh.
*   **Modern Alternatives:**  Activation functions like Leaky ReLU, Parametric ReLU (PReLU), ELU, and Swish often outperform the traditional Sigmoid, ReLU, and Tanh in many applications. These address some of the limitations of the original activation functions.

## 7. Practice Questions/Exercises

1.  **Explain the vanishing gradient problem and how it affects the training of neural networks using Sigmoid and Tanh activation functions.**

    *Answer:* The vanishing gradient problem occurs when the gradients during backpropagation become very small, especially in deep networks.  This happens because the derivatives of Sigmoid and Tanh are close to zero for large or small input values. As a result, the weights in earlier layers are updated very slowly, hindering learning.

2.  **What is the "Dying ReLU" problem?  How can it be mitigated?**

    *Answer:* The Dying ReLU problem occurs when a ReLU neuron's input is consistently negative.  The neuron's output becomes zero, and its weights are never updated.  Mitigation strategies include:
        *   Using a smaller learning rate.
        *   Using variants of ReLU like Leaky ReLU or ELU, which have a small non-zero slope for negative inputs.
        *   Using proper weight initialization techniques (e.g., He initialization).

3.  **Implement a neural network with ReLU activation on the MNIST dataset. Train the network and observe the training progress. How does the training speed compare to using Sigmoid?**

    *Answer:* (Refer to the code example above.  You should observe that ReLU generally trains significantly faster than Sigmoid.)

4.  **How does the zero-centered nature of the Tanh activation function potentially improve training compared to Sigmoid?**

    *Answer:* The zero-centered output of Tanh helps to center the data passed to the next layer. This can lead to faster convergence because the gradients are more likely to have consistent signs, which helps the optimization process move in a more direct path towards the optimal solution. Sigmoid's positive-only output can lead to zig-zagging gradients and slower convergence.

5. **Experiment with different optimizers (Adam, SGD) when training your MNIST models. Does the choice of optimizer impact the relative performance of the different activation functions (Sigmoid, ReLU, Tanh)?**

   *Answer:* Yes.  SGD may perform poorly with ReLU due to its non-zero centered nature, potentially leading to slow or unstable learning. Adam often adapts better to different activation functions due to its adaptive learning rate. Changing the optimizer can alter the training dynamics and the final accuracy achieved by each activation function, so it's important to tune the optimizer's parameters (learning rate, momentum, etc.) for each activation function.

## 8. Further Exploration

*   **Leaky ReLU, ELU, and other ReLU variants:** Research and implement these activation functions and compare their performance to the basic ReLU.
*   **Weight Initialization:** Investigate different weight initialization techniques (e.g., He initialization, Xavier initialization) and how they can affect the performance of different activation functions.
*   **Batch Normalization:** Explore how batch normalization can interact with activation functions to improve training stability and performance.
