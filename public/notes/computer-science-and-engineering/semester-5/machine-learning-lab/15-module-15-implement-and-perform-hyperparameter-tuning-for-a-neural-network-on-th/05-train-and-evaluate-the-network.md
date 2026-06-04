---
title: "Train and evaluate the network."
subject: "MACHINE LEARNING LAB"
module: "Module 15: Implement and perform hyperparameter tuning for a neural network on the Fashion MNIST dataset. Experiment with different learning rates, batch sizes, and epochs, and discuss the impact on model performance."
branch: "Computer Science and Engineering"
semester: 5
topicId: "684162770fc9aa1fdbc8b993"
status: "completed"
scrapedAt: "2026-05-20T16:47:58.220Z"
---
# MACHINE LEARNING LAB: Module 15 - Hyperparameter Tuning for Neural Networks on Fashion MNIST - Train and Evaluate the Network

**Subject:** MACHINE LEARNING LAB
**Module:** Module 15: Implement and perform hyperparameter tuning for a neural network on the Fashion MNIST dataset. Experiment with different learning rates, batch sizes, and epochs, and discuss the impact on model performance.
**Topic:** Train and evaluate the network.
**Description:** Train and evaluate the network. from Module 15: Implement and perform hyperparameter tuning for a neural network on the Fashion MNIST dataset. Experiment with different learning rates, batch sizes, and epochs, and discuss the impact on model performance.

**Learning Outcomes:**

*   Understand the process of training a neural network on the Fashion MNIST dataset.
*   Understand how to evaluate a trained neural network model.
*   Interpret the evaluation metrics (accuracy, loss) to assess model performance.
*   Recognize the impact of hyperparameters (learning rate, batch size, epochs) on model training and evaluation.

## 1. Key Concepts and Definitions

*   **Neural Network:** A computational model inspired by the structure and function of biological neural networks. It consists of interconnected nodes (neurons) organized in layers.

*   **Fashion MNIST Dataset:** A dataset consisting of 60,000 training images and 10,000 test images of grayscale fashion products (e.g., T-shirts, trousers, dresses). Each image is 28x28 pixels.

*   **Training:** The process of adjusting the weights and biases of a neural network based on training data to learn the underlying patterns and relationships.

*   **Evaluation:** The process of assessing the performance of a trained neural network on a separate dataset (test data) to estimate its generalization ability.

*   **Hyperparameters:** Parameters that are set *before* the training process begins and control the learning process itself. Examples include:
    *   **Learning Rate:** A scalar value that determines the step size taken during the weight updates in the optimization algorithm.
    *   **Batch Size:** The number of training samples used in one iteration of the training process.
    *   **Epochs:** The number of complete passes through the entire training dataset.

*   **Loss Function:** A function that quantifies the difference between the predicted output of the neural network and the actual target values. The goal of training is to minimize this loss.  Examples include:
    *   **Categorical Crossentropy:**  Commonly used for multi-class classification problems (like Fashion MNIST).

*   **Optimizer:** An algorithm that updates the weights and biases of the neural network to minimize the loss function. Examples include:
    *   **Adam:** Adaptive Moment Estimation.  A popular and often effective optimizer.
    *   **SGD:** Stochastic Gradient Descent.  A basic optimizer that can be effective with proper tuning.

*   **Accuracy:** A metric that measures the percentage of correctly classified samples. Often used for classification problems.

*   **Overfitting:**  A phenomenon where a model learns the training data too well, resulting in poor performance on unseen data.  The model has memorized the training data and is not generalizing.

*   **Underfitting:** A phenomenon where a model is not complex enough to capture the underlying patterns in the data, resulting in poor performance on both the training and test data.

*   **Validation Set:** A subset of the training data that is held out during training to monitor the model's performance and detect overfitting.  Hyperparameter tuning is often done based on performance on the validation set.

## 2. Training a Neural Network on Fashion MNIST

The following steps are generally involved in training a neural network:

1.  **Data Preparation:**
    *   Load the Fashion MNIST dataset.
    *   Preprocess the data (e.g., normalize pixel values to be between 0 and 1).
    *   Split the data into training and testing sets (and potentially a validation set).
    *   One-hot encode the labels if using categorical crossentropy loss.

2.  **Model Definition:**
    *   Define the architecture of the neural network (e.g., number of layers, number of neurons per layer, activation functions).
    *   Typical architecture for Fashion MNIST includes:
        *   Input layer (784 nodes - one for each pixel in the 28x28 image)
        *   One or more hidden layers (number of nodes is a hyperparameter)
        *   Output layer (10 nodes - one for each class: T-shirt/top, Trouser, Pullover, Dress, Coat, Sandal, Shirt, Sneaker, Bag, Ankle boot)
        *   Activation functions like ReLU (Rectified Linear Unit) for hidden layers and Softmax for the output layer (for multi-class classification).

3.  **Model Compilation:**
    *   Choose a loss function (e.g., categorical crossentropy).
    *   Choose an optimizer (e.g., Adam, SGD).
    *   Specify the evaluation metrics (e.g., accuracy).

    ```python
    import tensorflow as tf
    from tensorflow.keras import layers, models
    from tensorflow.keras.datasets import fashion_mnist
    from tensorflow.keras.utils import to_categorical

    # 1. Data Preparation
    (train_images, train_labels), (test_images, test_labels) = fashion_mnist.load_data()

    # Normalize pixel values to be between 0 and 1
    train_images = train_images.astype('float32') / 255.0
    test_images = test_images.astype('float32') / 255.0

    # Reshape images to have a single channel (grayscale)
    train_images = train_images.reshape((60000, 28 * 28))
    test_images = test_images.reshape((10000, 28 * 28))


    # One-hot encode the labels
    train_labels = to_categorical(train_labels)
    test_labels = to_categorical(test_labels)

    # 2. Model Definition
    model = models.Sequential([
        layers.Dense(128, activation='relu', input_shape=(28 * 28,)), # Input layer requires input_shape
        layers.Dense(10, activation='softmax') # Output layer with softmax activation
    ])

    # 3. Model Compilation
    model.compile(optimizer='adam',
                  loss='categorical_crossentropy',
                  metrics=['accuracy'])

    model.summary() # Print a summary of the model architecture
    ```

4.  **Model Training:**
    *   Train the model using the `fit()` method, providing the training data, labels, batch size, and number of epochs.
    *   Optionally, use a validation set to monitor performance during training and prevent overfitting.

    ```python
    # 4. Model Training
    history = model.fit(train_images, train_labels, epochs=10, batch_size=32, validation_split=0.2) #validation_split for validation data
    ```

    *   **Important:**  The `history` object returned by `model.fit()` contains information about the training process, including the loss and accuracy at each epoch for both the training and validation sets.  This is crucial for analyzing the impact of hyperparameters.

## 3. Evaluating the Network

After training, the model needs to be evaluated to assess its performance on unseen data.

1.  **Evaluation on Test Data:**
    *   Use the `evaluate()` method, providing the test data and labels.
    *   The `evaluate()` method returns the loss and metrics (e.g., accuracy) calculated on the test data.

    ```python
    # Evaluate the model on the test data
    test_loss, test_accuracy = model.evaluate(test_images, test_labels)
    print('Test accuracy:', test_accuracy)
    print('Test loss:', test_loss)
    ```

2.  **Interpreting Evaluation Metrics:**
    *   **Accuracy:**  Indicates the percentage of correctly classified samples. A higher accuracy indicates better performance.
    *   **Loss:**  Indicates the difference between the predicted and actual values. A lower loss indicates better performance.
    *   **Important:** Compare the training accuracy/loss with the validation/test accuracy/loss. A significant difference indicates potential overfitting.

3.  **Making Predictions:**
    *   Use the `predict()` method to generate predictions for new, unseen data.
    *   The `predict()` method returns the probability distribution over the classes.
    *   To get the predicted class, use `np.argmax()` to find the class with the highest probability.

    ```python
    import numpy as np

    # Make predictions on the test data
    predictions = model.predict(test_images)

    # Get the predicted classes
    predicted_classes = np.argmax(predictions, axis=1)

    # Get the true classes (decode one-hot encoded labels)
    true_classes = np.argmax(test_labels, axis=1)

    # Example: Print the predicted and true classes for the first 10 images
    for i in range(10):
        print(f"Image {i+1}: Predicted = {predicted_classes[i]}, True = {true_classes[i]}")

    # You can further analyze the predictions, e.g., by creating a confusion matrix.
    ```

## 4. Impact of Hyperparameters

*   **Learning Rate:**
    *   **High Learning Rate:**  Can lead to instability in training, causing the loss to fluctuate or even increase.  The model may overshoot the optimal weights.
    *   **Low Learning Rate:**  Can lead to slow training and the model may get stuck in a local minimum.  It takes many iterations to converge.
    *   **Optimal Learning Rate:**  Allows the model to converge quickly and accurately. Experiment with different values (e.g., 0.1, 0.01, 0.001, 0.0001).

*   **Batch Size:**
    *   **Large Batch Size:**  Leads to faster training but may result in poorer generalization (overfitting) because the gradient updates are more averaged and less noisy. May also require more memory.
    *   **Small Batch Size:**  Leads to slower training but may result in better generalization because the gradient updates are more noisy and help the model escape local minima.
    *   **Optimal Batch Size:**  Depends on the dataset and model. Experiment with different values (e.g., 32, 64, 128, 256).

*   **Epochs:**
    *   **Too Few Epochs:**  The model may not have enough time to learn the underlying patterns in the data (underfitting).
    *   **Too Many Epochs:**  The model may start to overfit the training data, resulting in poor performance on the test data.
    *   **Optimal Number of Epochs:**  Can be determined by monitoring the performance on the validation set and stopping training when the validation loss starts to increase (early stopping).

```python
# Example of changing hyperparameters

# Original model (from previous examples)
model_original = models.Sequential([
    layers.Dense(128, activation='relu', input_shape=(28 * 28,)),
    layers.Dense(10, activation='softmax')
])

model_original.compile(optimizer='adam', loss='categorical_crossentropy', metrics=['accuracy'])
history_original = model_original.fit(train_images, train_labels, epochs=10, batch_size=32, validation_split=0.2, verbose=0)


# Modified model with different hyperparameters
model_modified = models.Sequential([
    layers.Dense(128, activation='relu', input_shape=(28 * 28,)),
    layers.Dense(10, activation='softmax')
])

#SGD Optimizer with different learning rate
sgd_optimizer = tf.keras.optimizers.SGD(learning_rate=0.01)

model_modified.compile(optimizer=sgd_optimizer, loss='categorical_crossentropy', metrics=['accuracy']) #SGD optimizer

history_modified = model_modified.fit(train_images, train_labels, epochs=20, batch_size=64, validation_split=0.2, verbose=0)


#Example: Plot Training history
import matplotlib.pyplot as plt

plt.figure(figsize=(12, 6))

plt.subplot(1, 2, 1)
plt.plot(history_original.history['accuracy'], label='Original Training Accuracy')
plt.plot(history_original.history['val_accuracy'], label='Original Validation Accuracy')
plt.plot(history_modified.history['accuracy'], label='Modified Training Accuracy')
plt.plot(history_modified.history['val_accuracy'], label='Modified Validation Accuracy')
plt.title('Accuracy Comparison')
plt.xlabel('Epoch')
plt.ylabel('Accuracy')
plt.legend()

plt.subplot(1, 2, 2)
plt.plot(history_original.history['loss'], label='Original Training Loss')
plt.plot(history_original.history['val_loss'], label='Original Validation Loss')
plt.plot(history_modified.history['loss'], label='Modified Training Loss')
plt.plot(history_modified.history['val_loss'], label='Modified Validation Loss')
plt.title('Loss Comparison')
plt.xlabel('Epoch')
plt.ylabel('Loss')
plt.legend()

plt.tight_layout()
plt.show()
```

*   **Important:**  Use visualizations (e.g., plots of training and validation loss/accuracy over epochs) to analyze the impact of hyperparameters.  Pay close attention to overfitting/underfitting.  Tools like TensorBoard can be very helpful for visualizing training progress.

## 5. Practice Questions and Exercises

1.  **Question:** What is the purpose of the validation set during training?
    *   **Answer:** To monitor the model's performance on unseen data and detect overfitting. It's used to make decisions about when to stop training or to tune hyperparameters.

2.  **Question:** What happens if you set the learning rate too high?
    *   **Answer:** The training process may become unstable, causing the loss to fluctuate or increase. The model may overshoot the optimal weights.

3.  **Exercise:** Train a neural network on the Fashion MNIST dataset with different batch sizes (e.g., 32, 64, 128). Compare the training time and the test accuracy for each batch size.

    ```python
    # Code for the Exercise
    batch_sizes = [32, 64, 128]
    results = {}

    for batch_size in batch_sizes:
        print(f"Training with batch size: {batch_size}")
        model = models.Sequential([
            layers.Dense(128, activation='relu', input_shape=(28 * 28,)),
            layers.Dense(10, activation='softmax')
        ])
        model.compile(optimizer='adam', loss='categorical_crossentropy', metrics=['accuracy'])

        import time # to measure training time
        start_time = time.time()

        history = model.fit(train_images, train_labels, epochs=5, batch_size=batch_size, validation_split=0.2, verbose=0) # Reduced epochs for faster execution

        end_time = time.time()
        training_time = end_time - start_time

        test_loss, test_accuracy = model.evaluate(test_images, test_labels, verbose=0)

        results[batch_size] = {
            "training_time": training_time,
            "test_accuracy": test_accuracy,
            "test_loss": test_loss
        }

    # Print Results
    for batch_size, metrics in results.items():
        print(f"Batch Size: {batch_size}")
        print(f"  Training Time: {metrics['training_time']:.2f} seconds")
        print(f"  Test Accuracy: {metrics['test_accuracy']:.4f}")
        print(f"  Test Loss: {metrics['test_loss']:.4f}")

    # Add plot if time permits

    ```

4.  **Exercise:** Modify the neural network architecture (e.g., add more layers, change the number of neurons per layer) and observe the impact on model performance.

5.  **Exercise:** Implement early stopping to prevent overfitting. (Hint: Use `tf.keras.callbacks.EarlyStopping`)

    ```python
    #Early Stopping Implementation
    from tensorflow.keras.callbacks import EarlyStopping

    # Define early stopping criteria
    early_stopping = EarlyStopping(monitor='val_loss', patience=3, restore_best_weights=True)  # Patience=3 means stop after 3 epochs of no improvement in val_loss

    model = models.Sequential([
        layers.Dense(128, activation='relu', input_shape=(28 * 28,)),
        layers.Dense(10, activation='softmax')
    ])
    model.compile(optimizer='adam', loss='categorical_crossentropy', metrics=['accuracy'])

    history = model.fit(train_images, train_labels, epochs=20, batch_size=32, validation_split=0.2, callbacks=[early_stopping], verbose=0)

    test_loss, test_accuracy = model.evaluate(test_images, test_labels)
    print('Test accuracy:', test_accuracy)
    print('Test loss:', test_loss)

    ```

## 6. Important Points to Remember

*   Hyperparameter tuning is an iterative process.
*   Use a validation set to monitor performance and prevent overfitting.
*   Visualize the training process (e.g., plots of loss and accuracy over epochs).
*   Consider using techniques like cross-validation for more robust hyperparameter tuning.
*   Early stopping is a valuable technique to prevent overfitting.
*   There is no single "best" set of hyperparameters. The optimal values depend on the dataset and model architecture.
*   Always evaluate your model on a separate test set to get an unbiased estimate of its performance.

This comprehensive guide should provide a solid foundation for training and evaluating neural networks on the Fashion MNIST dataset, and understanding the impact of hyperparameter tuning. Remember to experiment and practice to gain a deeper understanding of these concepts.
