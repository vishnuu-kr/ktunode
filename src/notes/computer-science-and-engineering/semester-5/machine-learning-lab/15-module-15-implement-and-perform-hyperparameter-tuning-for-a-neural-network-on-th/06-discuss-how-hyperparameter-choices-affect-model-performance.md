---
title: "Discuss how hyperparameter choices affect model performance."
subject: "MACHINE LEARNING LAB"
module: "Module 15: Implement and perform hyperparameter tuning for a neural network on the Fashion MNIST dataset. Experiment with different learning rates, batch sizes, and epochs, and discuss the impact on model performance."
branch: "Computer Science and Engineering"
semester: 5
topicId: "684162770fc9aa1fdbc8b994"
status: "completed"
scrapedAt: "2026-05-20T16:47:58.931Z"
---
# MACHINE LEARNING LAB - Module 15: Hyperparameter Tuning for Neural Networks on Fashion MNIST

**Topic:** Discuss how hyperparameter choices affect model performance.

**Description:** Implement and perform hyperparameter tuning for a neural network on the Fashion MNIST dataset. Experiment with different learning rates, batch sizes, and epochs, and discuss the impact on model performance.

**Learning Outcomes:**

*   Understand the concept of hyperparameters and their role in neural network training.
*   Identify and tune key hyperparameters for a neural network, specifically learning rate, batch size, and epochs.
*   Implement a neural network using a framework like TensorFlow/Keras for the Fashion MNIST dataset.
*   Experiment with different hyperparameter combinations and observe their impact on model performance (accuracy, loss, training time).
*   Analyze and discuss the effects of hyperparameter choices on model convergence, overfitting, and underfitting.
*   Apply techniques for hyperparameter optimization (e.g., grid search, random search).

## 1. Key Concepts and Definitions

*   **Hyperparameters:** These are parameters that are set *before* the learning process begins. They control the behavior of the training algorithm, not the model itself. They are *not* learned from the data. Examples include learning rate, batch size, number of epochs, number of layers, activation functions, and regularization parameters.
*   **Parameters (Weights and Biases):** These are the values that a neural network *learns* during training. They represent the strength and connection weights between neurons.
*   **Model Architecture:**  The overall structure of the neural network (e.g., number of layers, types of layers, number of neurons per layer). While technically a design choice, it heavily influences the effect of hyperparameters.
*   **Fashion MNIST Dataset:** A dataset of 60,000 training images and 10,000 testing images of fashion articles (e.g., T-shirts, trousers, dresses).  Each image is 28x28 pixels and is associated with one of 10 classes.
*   **Learning Rate:**  Determines the step size at which the model's weights are updated during training based on the gradient of the loss function.  A high learning rate might overshoot the optimal solution, while a low learning rate might lead to slow convergence or getting stuck in local minima.
*   **Batch Size:** The number of training samples used in one iteration (forward and backward pass) of the training algorithm. Larger batch sizes can provide a more stable estimate of the gradient but require more memory. Smaller batch sizes can introduce more noise but may escape local minima.
*   **Epochs:** The number of complete passes through the entire training dataset during training.  More epochs can lead to better model performance but also increase the risk of overfitting.
*   **Loss Function:** A function that quantifies the difference between the model's predictions and the actual target values.  The goal of training is to minimize the loss function.
*   **Optimizer:**  An algorithm used to update the model's weights during training to minimize the loss function. Examples include Stochastic Gradient Descent (SGD), Adam, and RMSprop.  The optimizer's hyperparameters (like learning rate) also need tuning.
*   **Overfitting:**  When a model learns the training data too well, including the noise, and performs poorly on unseen data.
*   **Underfitting:**  When a model is too simple to capture the underlying patterns in the data and performs poorly on both the training and test data.
*   **Validation Set:** A subset of the training data that is *not* used for training but is used to evaluate the model's performance during training and help detect overfitting.
*   **Hyperparameter Optimization:** The process of finding the optimal combination of hyperparameters that maximizes the model's performance on a validation set. Common techniques include:
    *   **Grid Search:** Exhaustively tries all possible combinations of hyperparameters within a defined range.
    *   **Random Search:** Randomly samples hyperparameter combinations from a specified distribution.
    *   **Bayesian Optimization:** Uses a probabilistic model to guide the search for optimal hyperparameters, balancing exploration and exploitation.

## 2. Implementing a Neural Network for Fashion MNIST

We'll use TensorFlow/Keras for implementation (Python).  This is a typical baseline model that you would then tune.

```python
import tensorflow as tf
from tensorflow import keras
import numpy as np
import matplotlib.pyplot as plt

# Load the Fashion MNIST dataset
fashion_mnist = keras.datasets.fashion_mnist
(train_images, train_labels), (test_images, test_labels) = fashion_mnist.load_data()

# Preprocess the data
train_images = train_images / 255.0
test_images = test_images / 255.0

# Define the model (Baseline - Needs Hyperparameter Tuning)
def create_model():
    model = keras.Sequential([
        keras.layers.Flatten(input_shape=(28, 28)),  # Flatten the 28x28 images
        keras.layers.Dense(128, activation='relu'),  # Fully connected layer with ReLU activation
        keras.layers.Dense(10, activation='softmax') # Output layer with softmax for 10 classes
    ])

    model.compile(optimizer='adam',  # Default Adam optimizer
                  loss='sparse_categorical_crossentropy', # Standard loss function for multi-class classification
                  metrics=['accuracy']) # Track accuracy during training
    return model


#Example usage:
model = create_model()
model.summary() #Prints model architecture

#Train the model (BEFORE TUNING - just to see a baseline)
model.fit(train_images, train_labels, epochs=10, batch_size=32)
```

**Explanation:**

*   **Loading the Dataset:**  Loads the Fashion MNIST dataset from Keras.
*   **Preprocessing:**  Normalizes the pixel values to be between 0 and 1 by dividing by 255.0. This is crucial for stable training.
*   **Model Definition:**  Creates a simple feedforward neural network with:
    *   `Flatten`: Converts the 28x28 images into a 784-dimensional vector.
    *   `Dense (128, relu)`: A fully connected layer with 128 neurons and ReLU activation. ReLU helps with non-linearity.
    *   `Dense (10, softmax)`: An output layer with 10 neurons (one for each class) and softmax activation. Softmax provides probability distribution over the classes.
*   **Model Compilation:** Configures the model for training:
    *   `optimizer='adam'`:  Specifies the Adam optimizer.
    *   `loss='sparse_categorical_crossentropy'`:  Specifies the loss function for multi-class classification (where labels are integers).
    *   `metrics=['accuracy']`: Specifies the metric to track during training.

## 3. Hyperparameter Tuning: Learning Rate, Batch Size, and Epochs

Now, let's experiment with different hyperparameter combinations and observe their impact.

### 3.1 Learning Rate

The learning rate controls how much the weights are adjusted during each update.

*   **High Learning Rate (e.g., 0.1):** Can lead to oscillations around the minimum of the loss function and may even cause divergence.  Training might be very fast initially but stalls quickly.
*   **Low Learning Rate (e.g., 0.00001):** Can lead to slow convergence, potentially getting stuck in local minima, and requiring many more epochs to reach a good solution.

```python
def train_model_with_lr(learning_rate):
    model = create_model() #Create a new model each time to start fresh

    optimizer = keras.optimizers.Adam(learning_rate=learning_rate) #Set up optimizer

    model.compile(optimizer=optimizer,
                  loss='sparse_categorical_crossentropy',
                  metrics=['accuracy'])

    history = model.fit(train_images, train_labels, epochs=10, batch_size=32, validation_split=0.2, verbose=0) #Added validation split

    #evaluate the model on test data
    test_loss, test_acc = model.evaluate(test_images, test_labels, verbose=0)
    print(f"Learning Rate: {learning_rate}, Test accuracy: {test_acc}")

    #Plot training history
    plt.plot(history.history['accuracy'], label = f'Training Accuracy (LR={learning_rate})')
    plt.plot(history.history['val_accuracy'], label = f'Validation Accuracy (LR={learning_rate})')
    return test_acc

#Experiment with different learning rates
learning_rates = [0.1, 0.01, 0.001, 0.0001]
accuracies = []
plt.figure(figsize=(12,6))
for lr in learning_rates:
  acc = train_model_with_lr(lr)
  accuracies.append(acc)

plt.xlabel('Epoch')
plt.ylabel('Accuracy')
plt.title('Effect of Learning Rate on Accuracy')
plt.legend()
plt.grid(True)
plt.show()
```

**Observations:**

*   **High Learning Rate (0.1):** You might see the loss oscillate significantly or even increase.  Accuracy on both training and validation sets could be lower.
*   **Moderate Learning Rate (0.01 or 0.001):** Usually a good starting point.  Training progresses smoothly, and accuracy improves consistently.
*   **Low Learning Rate (0.0001):** Training might be very slow, but eventually, you might reach a comparable accuracy with enough epochs.

**Impact:** A well-chosen learning rate is critical for fast and stable convergence. It determines how quickly the model learns.

### 3.2 Batch Size

The batch size determines how many training examples are used in each iteration of the training process.

*   **Large Batch Size (e.g., 256, 512):**
    *   **Pros:** More stable gradients, faster training per epoch (fewer iterations). Can exploit parallelization better.
    *   **Cons:**  May lead to getting stuck in sharp local minima, slower overall convergence (fewer updates), requires more memory.  May generalize less well (less noise to help escape minima).
*   **Small Batch Size (e.g., 16, 32):**
    *   **Pros:**  More noisy gradients, which can help escape local minima. May generalize better (regularization effect).
    *   **Cons:**  Noisier training, slower training per epoch (more iterations), can be less efficient in terms of hardware utilization.

```python
def train_model_with_bs(batch_size):
    model = create_model()

    model.compile(optimizer='adam',
                  loss='sparse_categorical_crossentropy',
                  metrics=['accuracy'])

    history = model.fit(train_images, train_labels, epochs=10, batch_size=batch_size, validation_split=0.2, verbose=0)
    test_loss, test_acc = model.evaluate(test_images, test_labels, verbose=0)
    print(f"Batch Size: {batch_size}, Test accuracy: {test_acc}")

    #Plot training history
    plt.plot(history.history['accuracy'], label = f'Training Accuracy (BS={batch_size})')
    plt.plot(history.history['val_accuracy'], label = f'Validation Accuracy (BS={batch_size})')
    return test_acc

#Experiment with different batch sizes
batch_sizes = [16, 32, 64, 128, 256]
accuracies = []
plt.figure(figsize=(12,6))
for bs in batch_sizes:
    acc = train_model_with_bs(bs)
    accuracies.append(acc)

plt.xlabel('Epoch')
plt.ylabel('Accuracy')
plt.title('Effect of Batch Size on Accuracy')
plt.legend()
plt.grid(True)
plt.show()

```

**Observations:**

*   Small batch sizes might show more fluctuations in the loss and accuracy curves.
*   Large batch sizes might have smoother curves but could potentially underperform smaller batch sizes if the learning rate isn't tuned accordingly.

**Impact:**  Batch size affects the stability of the training process and the speed of convergence.

### 3.3 Epochs

The number of epochs determines how many times the entire training dataset is iterated through.

*   **Too Few Epochs:** The model may not have enough time to learn the underlying patterns in the data, resulting in underfitting.
*   **Too Many Epochs:** The model may start to memorize the training data, including the noise, leading to overfitting.

```python
def train_model_with_epochs(epochs):
    model = create_model()

    model.compile(optimizer='adam',
                  loss='sparse_categorical_crossentropy',
                  metrics=['accuracy'])

    history = model.fit(train_images, train_labels, epochs=epochs, batch_size=32, validation_split=0.2, verbose=0)
    test_loss, test_acc = model.evaluate(test_images, test_labels, verbose=0)
    print(f"Epochs: {epochs}, Test accuracy: {test_acc}")

    #Plot training history
    plt.plot(history.history['accuracy'], label = f'Training Accuracy (Epochs={epochs})')
    plt.plot(history.history['val_accuracy'], label = f'Validation Accuracy (Epochs={epochs})')
    return test_acc

#Experiment with different epochs
epochs_list = [5, 10, 20, 30, 40]
accuracies = []
plt.figure(figsize=(12,6))
for epochs in epochs_list:
    acc = train_model_with_epochs(epochs)
    accuracies.append(acc)


plt.xlabel('Epoch')
plt.ylabel('Accuracy')
plt.title('Effect of Number of Epochs on Accuracy')
plt.legend()
plt.grid(True)
plt.show()
```

**Observations:**

*   Initially, both training and validation accuracy increase.
*   After a certain point, the validation accuracy might plateau or even decrease while the training accuracy continues to increase.  This is a sign of overfitting.  Consider using techniques like early stopping.

**Impact:** The number of epochs needs to be carefully chosen to balance between underfitting and overfitting. Monitor the validation loss/accuracy to determine the optimal number of epochs.

## 4. Analyzing Hyperparameter Effects

*   **Convergence:** Hyperparameter choices directly influence how quickly and effectively the model converges to a good solution. Incorrect settings can lead to slow convergence, oscillations, or divergence.
*   **Overfitting:** A high learning rate, large number of epochs, or small batch size can contribute to overfitting, especially if the model is complex.
*   **Underfitting:** A low learning rate, small number of epochs, or a very simple model can lead to underfitting.
*   **Generalization:** The ultimate goal is to build a model that generalizes well to unseen data. Hyperparameter tuning is crucial for finding the right balance between fitting the training data and avoiding overfitting, thereby improving generalization performance.

## 5. Hyperparameter Optimization Techniques

While manual tuning is useful for understanding the impact of different hyperparameters, it's often inefficient for finding the optimal combination.  Techniques like Grid Search, Random Search, and Bayesian Optimization can automate this process.

**Example: Grid Search (Conceptual)**

```python
#Conceptual - Example using Scikit-Learn's GridSearchCV
#This is a simplified example and would need to be adapted for TensorFlow/Keras

# from sklearn.model_selection import GridSearchCV
# from sklearn.neural_network import MLPClassifier #Example using scikit learn's implementation

# # Define the parameter grid
# param_grid = {
#     'learning_rate_init': [0.001, 0.01, 0.1],
#     'batch_size': [32, 64, 128],
#     'max_iter': [10, 20]  # Equivalent to epochs
# }

# # Create a model
# mlp = MLPClassifier(hidden_layer_sizes=(128,), activation='relu', solver='adam', random_state=42)

# # Perform Grid Search
# grid_search = GridSearchCV(mlp, param_grid, cv=3, scoring='accuracy', verbose=1) #cv is cross validation
# grid_search.fit(train_images.reshape(train_images.shape[0], -1), train_labels) #Reshape for scikit-learn's MLPClassifier

# # Print the best parameters
# print("Best parameters:", grid_search.best_params_)

# #Evaluate the best model
# print("Best score:", grid_search.best_score_)
```

**Important Considerations for Hyperparameter Optimization:**

*   **Computational Cost:** Hyperparameter optimization can be computationally expensive, especially with grid search or complex models.
*   **Validation Set:** A validation set is essential for evaluating the performance of different hyperparameter combinations without contaminating the test set.  Consider k-fold cross-validation for a more robust estimate of performance.
*   **Search Space:** Defining a reasonable search space for hyperparameters is crucial for efficient optimization. Focus on the hyperparameters that are most likely to impact performance.
*   **Early Stopping:** Implement early stopping to prevent overfitting and reduce training time.

## 6. Practice Questions and Exercises

1.  **Define hyperparameters and parameters. Give examples of each in the context of a neural network.**

    *   **Answer:** Hyperparameters are settings chosen *before* training (e.g., learning rate, batch size). Parameters are learned *during* training (weights and biases).

2.  **Explain the potential consequences of using a very high learning rate during training.**

    *   **Answer:** Oscillations around the minimum, divergence, unstable training, inability to converge.

3.  **How does batch size affect the training process? Describe the trade-offs between large and small batch sizes.**

    *   **Answer:**  Large batch size: Stable gradients, faster training *per epoch*, may get stuck in sharp local minima.  Small batch size: Noisier gradients, slower training *per epoch*, may escape local minima, better regularization.

4.  **What is the purpose of a validation set in hyperparameter tuning?**

    *   **Answer:** To evaluate the model's performance on unseen data during training, allowing you to identify and prevent overfitting and to select the best hyperparameter settings.

5.  **Describe the signs of overfitting during neural network training.  How can you mitigate overfitting?**

    *   **Answer:** Training accuracy increases while validation accuracy plateaus or decreases. Mitigation: Early stopping, regularization techniques (L1/L2 regularization, dropout), data augmentation, using a simpler model.

6.  **Explain the difference between grid search and random search for hyperparameter optimization. What are the advantages and disadvantages of each?**

    *   **Answer:** Grid search exhaustively tries all combinations within a specified range. Random search randomly samples combinations. Grid search is guaranteed to find the best combination *within the grid*, but can be very slow for high-dimensional hyperparameter spaces. Random search can be faster but may not find the absolute best combination.

7. **Code Exercise:** Modify the provided Fashion MNIST code to:

   *   a) Implement early stopping.
   *   b) Experiment with different activation functions (e.g., sigmoid, tanh) in the hidden layer and discuss their impact on performance.

## 7. Important Points to Remember

*   Hyperparameter tuning is an iterative process.  Experiment, observe, and adjust.
*   There is no one-size-fits-all answer. The optimal hyperparameters depend on the specific dataset, model architecture, and training environment.
*   Visualizing training curves (loss and accuracy) is crucial for understanding how the model is learning and identifying potential problems like overfitting.
*   Start with a reasonable baseline model and tune hyperparameters one at a time or in small groups to understand their individual effects.
*   Consider using automated hyperparameter optimization techniques for more efficient exploration of the hyperparameter space.
*   Regularization and data augmentation can significantly improve the model's generalization performance.
