---
title: "Experiment with different hyperparameters (learning rate, batch size, epochs)."
subject: "MACHINE LEARNING LAB"
module: "Module 15: Implement and perform hyperparameter tuning for a neural network on the Fashion MNIST dataset. Experiment with different learning rates, batch sizes, and epochs, and discuss the impact on model performance."
branch: "Computer Science and Engineering"
semester: 5
topicId: "684162770fc9aa1fdbc8b992"
status: "completed"
scrapedAt: "2026-05-20T16:47:57.520Z"
---
# MACHINE LEARNING LAB - Module 15: Hyperparameter Tuning for Neural Networks on Fashion MNIST

## Topic: Experimenting with Learning Rate, Batch Size, and Epochs

**Description:** This module focuses on implementing and performing hyperparameter tuning for a neural network model trained on the Fashion MNIST dataset. We will specifically experiment with different learning rates, batch sizes, and the number of epochs to understand their impact on model performance.

**Learning Outcomes:**

*   Understand the concepts of learning rate, batch size, and epochs in neural network training.
*   Implement a neural network model for the Fashion MNIST dataset.
*   Experimentally tune the learning rate, batch size, and epochs.
*   Analyze and discuss the impact of these hyperparameters on model performance (accuracy, loss, and training time).
*   Identify optimal hyperparameter configurations for the Fashion MNIST dataset using empirical results.

---

## 1. Key Concepts and Definitions

*   **Neural Network:** A computational model inspired by the structure and function of biological neural networks. It consists of interconnected nodes (neurons) organized in layers (input, hidden, and output layers).

*   **Fashion MNIST Dataset:** A dataset of 60,000 training images and 10,000 test images of Zalando fashion articles. Each image is a 28x28 grayscale image, associated with a label from 10 classes (e.g., T-shirt/top, Trouser, Pullover, Dress, Coat, Sandal, Shirt, Sneaker, Bag, Ankle boot).  It's often used as a drop-in replacement for the MNIST dataset to benchmark machine learning algorithms.

*   **Hyperparameters:** Parameters that are set before the learning process begins. They are not learned by the model during training but instead control the training process itself. Examples include learning rate, batch size, number of epochs, number of layers, and number of neurons per layer.

*   **Learning Rate:** A hyperparameter that controls the step size during gradient descent. It determines how much the weights of the network are adjusted in response to the estimated error each time the model weights are updated.  A high learning rate might lead to overshooting the optimal solution, while a low learning rate might result in slow convergence or getting stuck in local minima.

*   **Batch Size:** The number of training examples used in one iteration of the training process.  The gradients are calculated based on this batch of data, and then the model's weights are updated.  Small batch sizes lead to noisy updates, while large batch sizes can lead to slower updates and might require more memory.

*   **Epoch:** One complete pass through the entire training dataset. Multiple epochs are typically needed for the model to learn the patterns in the data effectively.

*   **Gradient Descent:** An optimization algorithm used to minimize the loss function of a neural network. It iteratively adjusts the model's parameters (weights and biases) in the direction of the steepest descent of the loss function.

*   **Loss Function:** A function that quantifies the difference between the predicted output of the model and the true target values.  The goal of training is to minimize this loss function.  Common loss functions for classification include categorical cross-entropy.

*   **Accuracy:** A metric used to evaluate the performance of a classification model. It represents the proportion of correctly classified instances.

*   **Overfitting:** A phenomenon where the model learns the training data too well and performs poorly on unseen data. This happens when the model is too complex or trained for too long.

*   **Underfitting:** A phenomenon where the model fails to learn the underlying patterns in the training data and performs poorly on both training and unseen data.  This happens when the model is too simple or not trained for long enough.

*   **Validation Set:** A portion of the dataset that is used to evaluate the model's performance during training. This helps in monitoring overfitting and allows for early stopping (stopping the training when the validation loss starts to increase).

---

## 2. Implementing a Neural Network for Fashion MNIST

This section outlines the typical steps involved in implementing a neural network for Fashion MNIST using a library like TensorFlow/Keras or PyTorch.

**Steps:**

1.  **Data Loading and Preprocessing:**
    *   Load the Fashion MNIST dataset using `tensorflow.keras.datasets.fashion_mnist.load_data()` or a similar function in PyTorch.
    *   Split the data into training and testing sets.
    *   Normalize the pixel values to be between 0 and 1 (e.g., divide by 255).
    *   Reshape the images into a suitable format (e.g., flatten the 28x28 images into a 784-dimensional vector).
    *   One-hot encode the labels (convert the categorical labels into a binary matrix).

    ```python
    import tensorflow as tf
    from tensorflow import keras

    # Load the dataset
    (x_train, y_train), (x_test, y_test) = keras.datasets.fashion_mnist.load_data()

    # Preprocessing
    x_train = x_train.astype('float32') / 255.0
    x_test = x_test.astype('float32') / 255.0

    # Flatten the images
    x_train = x_train.reshape((60000, 784))
    x_test = x_test.reshape((10000, 784))

    # One-hot encode the labels
    y_train = keras.utils.to_categorical(y_train, num_classes=10)
    y_test = keras.utils.to_categorical(y_test, num_classes=10)
    ```

2.  **Model Definition:**
    *   Define the architecture of the neural network. A simple example is a multi-layer perceptron (MLP) with one or more hidden layers.
    *   Specify the activation functions for each layer (e.g., ReLU for hidden layers, softmax for the output layer).
    *   Specify the optimizer (e.g., Adam, SGD).
    *   Specify the loss function (e.g., categorical cross-entropy).
    *   Specify the metrics to evaluate (e.g., accuracy).

    ```python
    # Model Definition
    model = keras.Sequential([
        keras.layers.Dense(128, activation='relu', input_shape=(784,)),
        keras.layers.Dense(10, activation='softmax')
    ])

    # Compile the model
    model.compile(optimizer='adam',
                  loss='categorical_crossentropy',
                  metrics=['accuracy'])
    ```

3.  **Model Training:**
    *   Train the model using the training data.
    *   Specify the batch size and number of epochs.
    *   Use a validation set to monitor the model's performance during training.

    ```python
    # Model Training
    history = model.fit(x_train, y_train,
                        batch_size=32,
                        epochs=10,
                        validation_split=0.2) # using 20% of training data for validation
    ```

4.  **Model Evaluation:**
    *   Evaluate the model on the test data to assess its generalization performance.

    ```python
    # Model Evaluation
    loss, accuracy = model.evaluate(x_test, y_test, verbose=0)
    print('Test accuracy:', accuracy)
    ```

---

## 3. Experimenting with Hyperparameters

This section focuses on experimenting with the learning rate, batch size, and number of epochs and observing their impact on model performance.

### 3.1 Learning Rate

*   **Experiment:** Train the model with different learning rates (e.g., 0.1, 0.01, 0.001, 0.0001). Keep batch size and epochs constant.

*   **Expected Impact:**
    *   **High Learning Rate (e.g., 0.1):** Can lead to overshooting the optimal solution, resulting in instability and poor convergence.  The loss may oscillate or even increase.
    *   **Moderate Learning Rate (e.g., 0.01):**  Typically provides a good balance between convergence speed and stability.
    *   **Low Learning Rate (e.g., 0.001, 0.0001):** Can lead to slow convergence.  The model might take a very long time to learn, but it is more likely to converge to a good solution.  May also avoid overshooting.

*   **Example Code Snippet (Illustrative - Requires modification to integrate into complete model training):**

    ```python
    learning_rates = [0.1, 0.01, 0.001, 0.0001]
    batch_size = 32
    epochs = 10

    for lr in learning_rates:
        print(f"Training with learning rate: {lr}")
        model = keras.Sequential([
            keras.layers.Dense(128, activation='relu', input_shape=(784,)),
            keras.layers.Dense(10, activation='softmax')
        ])

        optimizer = keras.optimizers.Adam(learning_rate=lr) # set learning rate in optimizer
        model.compile(optimizer=optimizer,
                      loss='categorical_crossentropy',
                      metrics=['accuracy'])

        history = model.fit(x_train, y_train,
                            batch_size=batch_size,
                            epochs=epochs,
                            validation_split=0.2,
                            verbose=0)  # Reduce verbosity

        loss, accuracy = model.evaluate(x_test, y_test, verbose=0)
        print(f"Learning Rate: {lr}, Test accuracy: {accuracy}")


        # Plot training history (optional, but highly recommended for analysis)
        import matplotlib.pyplot as plt
        plt.plot(history.history['accuracy'])
        plt.plot(history.history['val_accuracy'])
        plt.title(f'Model accuracy (LR={lr})')
        plt.ylabel('Accuracy')
        plt.xlabel('Epoch')
        plt.legend(['Train', 'Validation'], loc='upper left')
        plt.show()


    ```

*   **Analysis:** Plot the training and validation accuracy/loss curves for each learning rate. Compare the final test accuracy. Determine the learning rate that achieves the best balance between convergence speed and accuracy.

### 3.2 Batch Size

*   **Experiment:** Train the model with different batch sizes (e.g., 32, 64, 128, 256).  Keep the learning rate and epochs constant.

*   **Expected Impact:**
    *   **Small Batch Size (e.g., 32):** Provides more frequent updates, which can lead to faster initial convergence and the ability to escape local minima. However, the updates are noisier, leading to fluctuations in the loss and potentially slower overall convergence. Can also lead to better generalization.
    *   **Large Batch Size (e.g., 256):** Provides more stable updates, leading to smoother convergence. However, it may require more memory and might get stuck in local minima.  Generalization performance might be worse.  Training can be faster per epoch.

*   **Example Code Snippet (Illustrative - Requires modification to integrate into complete model training):**

    ```python
    batch_sizes = [32, 64, 128, 256]
    learning_rate = 0.001
    epochs = 10

    for bs in batch_sizes:
        print(f"Training with batch size: {bs}")
        model = keras.Sequential([
            keras.layers.Dense(128, activation='relu', input_shape=(784,)),
            keras.layers.Dense(10, activation='softmax')
        ])

        optimizer = keras.optimizers.Adam(learning_rate=learning_rate)
        model.compile(optimizer=optimizer,
                      loss='categorical_crossentropy',
                      metrics=['accuracy'])

        history = model.fit(x_train, y_train,
                            batch_size=bs,
                            epochs=epochs,
                            validation_split=0.2,
                            verbose=0)

        loss, accuracy = model.evaluate(x_test, y_test, verbose=0)
        print(f"Batch Size: {bs}, Test accuracy: {accuracy}")

        # Plot training history (optional, but highly recommended for analysis)
        import matplotlib.pyplot as plt
        plt.plot(history.history['accuracy'])
        plt.plot(history.history['val_accuracy'])
        plt.title(f'Model accuracy (Batch Size={bs})')
        plt.ylabel('Accuracy')
        plt.xlabel('Epoch')
        plt.legend(['Train', 'Validation'], loc='upper left')
        plt.show()
    ```

*   **Analysis:** Plot the training and validation accuracy/loss curves for each batch size. Compare the final test accuracy and training time. Determine the batch size that achieves the best trade-off between performance and training time.

### 3.3 Epochs

*   **Experiment:** Train the model with different numbers of epochs (e.g., 5, 10, 20, 50). Keep the learning rate and batch size constant.

*   **Expected Impact:**
    *   **Too Few Epochs (e.g., 5):** The model might not have enough time to learn the underlying patterns in the data, leading to underfitting.
    *   **Optimal Number of Epochs (e.g., 20):** The model learns the patterns in the data well without overfitting.  Performance on the validation set will generally improve until a certain point.
    *   **Too Many Epochs (e.g., 50):** The model might start to memorize the training data, leading to overfitting.  The validation loss will typically start to increase while the training loss continues to decrease.

*   **Example Code Snippet (Illustrative - Requires modification to integrate into complete model training):**

    ```python
    epochs_list = [5, 10, 20, 50]
    learning_rate = 0.001
    batch_size = 32

    for epochs in epochs_list:
        print(f"Training with epochs: {epochs}")
        model = keras.Sequential([
            keras.layers.Dense(128, activation='relu', input_shape=(784,)),
            keras.layers.Dense(10, activation='softmax')
        ])
        optimizer = keras.optimizers.Adam(learning_rate=learning_rate)
        model.compile(optimizer=optimizer,
                      loss='categorical_crossentropy',
                      metrics=['accuracy'])

        history = model.fit(x_train, y_train,
                            batch_size=batch_size,
                            epochs=epochs,
                            validation_split=0.2,
                            verbose=0)

        loss, accuracy = model.evaluate(x_test, y_test, verbose=0)
        print(f"Epochs: {epochs}, Test accuracy: {accuracy}")

        # Plot training history (optional, but highly recommended for analysis)
        import matplotlib.pyplot as plt
        plt.plot(history.history['accuracy'])
        plt.plot(history.history['val_accuracy'])
        plt.title(f'Model accuracy (Epochs={epochs})')
        plt.ylabel('Accuracy')
        plt.xlabel('Epoch')
        plt.legend(['Train', 'Validation'], loc='upper left')
        plt.show()
    ```

*   **Analysis:** Plot the training and validation accuracy/loss curves for each number of epochs.  Look for the "elbow" in the validation loss curve, which often indicates the optimal number of epochs (or when to apply early stopping).

---

## 4. Impact on Model Performance

The choice of hyperparameters significantly impacts the model's performance in terms of:

*   **Accuracy:**  Higher accuracy indicates better classification performance.
*   **Loss:** Lower loss indicates better model fitting.
*   **Training Time:** The time required to train the model.
*   **Generalization:** The ability of the model to perform well on unseen data (test data).  Overfitting reduces generalization.
*   **Convergence Speed:** How quickly the model reaches a stable solution.
*   **Stability:** How consistently the model converges to a good solution across different training runs.

**General Guidelines:**

*   A good learning rate ensures that the model learns quickly and effectively without overshooting the optimal solution.
*   A suitable batch size provides a balance between the stability of the updates and the speed of convergence.
*   An appropriate number of epochs ensures that the model learns the patterns in the data well without overfitting.

---

## 5. Identifying Optimal Hyperparameter Configurations

*   **Grid Search:**  Evaluate all combinations of hyperparameters within a specified range.  This is computationally expensive but guarantees finding the best combination within the grid.

*   **Random Search:** Randomly sample hyperparameter combinations from a specified range. This is often more efficient than grid search, especially when some hyperparameters are more important than others.

*   **Bayesian Optimization:** Uses a probabilistic model to guide the search for optimal hyperparameters. It intelligently explores the hyperparameter space based on past results, making it more efficient than grid search and random search.

*   **Manual Tuning:**  Manually experiment with different hyperparameter combinations based on experience and intuition.  This can be effective, especially when combined with visualization of the training process.

**Example (Conceptual Grid Search):**

```python
# Conceptual example - in practice, use GridSearchCV or similar library functions for efficiency.
learning_rates = [0.01, 0.001]
batch_sizes = [32, 64]
epochs_list = [10, 20]

best_accuracy = 0
best_params = {}

for lr in learning_rates:
    for bs in batch_sizes:
        for epochs in epochs_list:
            print(f"Training with LR={lr}, BS={bs}, Epochs={epochs}")
            model = keras.Sequential([
                keras.layers.Dense(128, activation='relu', input_shape=(784,)),
                keras.layers.Dense(10, activation='softmax')
            ])
            optimizer = keras.optimizers.Adam(learning_rate=lr)
            model.compile(optimizer=optimizer,
                          loss='categorical_crossentropy',
                          metrics=['accuracy'])

            history = model.fit(x_train, y_train,
                                batch_size=bs,
                                epochs=epochs,
                                validation_split=0.2,
                                verbose=0)

            loss, accuracy = model.evaluate(x_test, y_test, verbose=0)
            print(f"Test accuracy: {accuracy}")

            if accuracy > best_accuracy:
                best_accuracy = accuracy
                best_params = {'learning_rate': lr, 'batch_size': bs, 'epochs': epochs}

print(f"Best accuracy: {best_accuracy}")
print(f"Best parameters: {best_params}")
```

---

## 6. Practice Questions/Exercises

1.  **Define hyperparameters and provide examples of them in the context of neural networks.**

    *Answer:* Hyperparameters are parameters set before the training process, controlling aspects like learning rate, batch size, and number of epochs.

2.  **Explain the impact of a very high learning rate on the training process.**

    *Answer:* A high learning rate can cause the training process to overshoot the optimal solution, leading to instability, oscillation, and potentially divergence (increasing loss).

3.  **What are the trade-offs between using a small batch size and a large batch size?**

    *Answer:* Small batch sizes provide frequent, noisy updates, potentially escaping local minima and improving generalization, but can lead to slower overall convergence. Large batch sizes offer stable updates and faster training per epoch but may require more memory and risk getting stuck in local minima, potentially reducing generalization.

4.  **Explain the concepts of underfitting and overfitting in the context of neural network training, and how the number of epochs relates to these phenomena.**

    *Answer:* Underfitting occurs when the model fails to learn the underlying patterns in the data (insufficient training). Overfitting occurs when the model learns the training data too well, memorizing it, and performing poorly on unseen data. Too few epochs can cause underfitting, while too many epochs can cause overfitting.

5.  **You observe that your model's training accuracy is very high (close to 100%), but the validation accuracy is significantly lower. What is likely happening, and what could you do to address it?**

    *Answer:* This indicates overfitting. Solutions include: reducing the number of epochs (early stopping), increasing regularization (e.g., L1/L2 regularization), adding dropout layers, or increasing the amount of training data.

6.  **Describe the role of a validation set in hyperparameter tuning.**

    *Answer:* The validation set is used to evaluate the model's performance during training. It allows us to monitor overfitting and choose hyperparameters that generalize well to unseen data, rather than just memorizing the training set.  It's key to avoiding overfitting.

---

## 7. Important Points to Remember

*   Hyperparameter tuning is an iterative process. It often requires experimentation and analysis to find the optimal configuration.
*   There is no one-size-fits-all solution for hyperparameter tuning. The optimal values depend on the dataset, the model architecture, and the specific task.
*   Always use a validation set to monitor the model's performance during training and prevent overfitting.
*   Visualizing the training process (e.g., plotting accuracy/loss curves) can provide valuable insights into the model's behavior and help in identifying potential issues.
*   Be aware of the computational cost of hyperparameter tuning.  Techniques like random search and Bayesian optimization can be more efficient than grid search.
*   Document your experiments and results to keep track of what works and what doesn't.
*   Start with a reasonable range of hyperparameter values and refine your search based on the initial results.  Logarithmic scales are often useful for learning rate searches.
*   Don't just optimize for accuracy; consider other factors like training time, model complexity, and interpretability.
