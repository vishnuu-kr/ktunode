---
title: "Train and evaluate each network."
subject: "MACHINE LEARNING LAB"
module: "Module 14: Implement and compare the performance of a neural network using different activation functions (Sigmoid, ReLU, Tanh) on the MNIST dataset. Analyze how each activation function affects the training process and classification accuracy."
branch: "Computer Science and Engineering"
semester: 5
topicId: "684162770fc9aa1fdbc8b98c"
status: "completed"
scrapedAt: "2026-05-20T16:47:53.926Z"
---
## MACHINE LEARNING LAB - Module 14: Train and Evaluate Networks with Different Activation Functions on MNIST

**Topic:** Train and evaluate each network. (Focus on training and evaluating neural networks using Sigmoid, ReLU, and Tanh activation functions on the MNIST dataset)

**Learning Outcomes:**

*   Understand the importance of training and evaluation procedures in machine learning.
*   Implement training loops with forward and backward propagation.
*   Evaluate model performance using appropriate metrics (e.g., accuracy, loss).
*   Compare the training and evaluation results of neural networks with Sigmoid, ReLU, and Tanh activation functions on the MNIST dataset.
*   Analyze the impact of different activation functions on training speed, convergence, and classification accuracy.

### 1. Key Concepts and Definitions

*   **Training Set:** A dataset used to train the neural network model. The model learns patterns from this data.
*   **Validation Set:** A dataset used to monitor the model's performance during training. It helps detect overfitting. We typically **do not** update the model's weights based on validation set performance directly, rather we use it to decide things like early stopping or hyperparameter tuning.
*   **Test Set:** A dataset used to evaluate the final performance of the trained model.  It should be representative of real-world data the model will encounter.  The model has *never* seen this data before.
*   **Epoch:** One complete pass through the entire training dataset during training.
*   **Batch Size:** The number of training examples used in one iteration of the training loop.
*   **Iteration:** One update of the model's parameters based on a batch of data.
*   **Forward Propagation:** The process of feeding input data through the neural network to obtain predictions.
*   **Backward Propagation (Backpropagation):** The process of calculating the gradients of the loss function with respect to the model's parameters and updating the parameters to minimize the loss.
*   **Loss Function:** A function that quantifies the difference between the model's predictions and the true labels.  Common examples include:
    *   **Cross-Entropy Loss:** Used for classification tasks. Measures the dissimilarity between predicted probability distributions and true labels.
    *   **Mean Squared Error (MSE):** Used for regression tasks. Measures the average squared difference between predicted and actual values.
*   **Optimizer:** An algorithm used to update the model's parameters during training.  Examples:
    *   **Stochastic Gradient Descent (SGD):** A simple optimizer that updates parameters based on the gradient of the loss function computed on a single data point (or a small batch).
    *   **Adam:** An adaptive optimization algorithm that combines the advantages of both AdaGrad and RMSProp. It typically converges faster and requires less hyperparameter tuning than SGD.
*   **Learning Rate:** A hyperparameter that controls the step size during parameter updates. A smaller learning rate leads to slower but potentially more stable convergence, while a larger learning rate can lead to faster convergence but may overshoot the optimal solution.
*   **Activation Function:** A function that introduces non-linearity into the neural network, allowing it to learn complex patterns.
    *   **Sigmoid:**  `σ(x) = 1 / (1 + exp(-x))` - Outputs values between 0 and 1.  Suffers from vanishing gradients, especially for large positive or negative inputs.
    *   **ReLU (Rectified Linear Unit):** `ReLU(x) = max(0, x)` - Outputs the input directly if it's positive, otherwise outputs 0.  Faster to compute than Sigmoid and Tanh, and helps alleviate the vanishing gradient problem.  Can suffer from the "dying ReLU" problem where a neuron gets stuck outputting 0.
    *   **Tanh (Hyperbolic Tangent):** `tanh(x) = (exp(x) - exp(-x)) / (exp(x) + exp(-x))` - Outputs values between -1 and 1. Similar to Sigmoid but centered around 0, which can sometimes lead to faster convergence. Still susceptible to vanishing gradients, though less so than Sigmoid.
*   **Vanishing Gradients:** A problem where gradients become very small during backpropagation, especially in deep networks. This can prevent the lower layers of the network from learning effectively.
*   **Exploding Gradients:** A problem where gradients become very large during backpropagation, leading to unstable training.
*   **Overfitting:** A phenomenon where the model learns the training data too well, resulting in poor performance on unseen data.  Indicated by a large gap between training accuracy and validation accuracy.
*   **Underfitting:** A phenomenon where the model is not complex enough to learn the underlying patterns in the data, resulting in poor performance on both the training and test data.
*   **Regularization:** Techniques used to prevent overfitting, such as L1 or L2 regularization.

### 2. Training and Evaluation Procedures

**A. Data Preparation (MNIST Dataset):**

1.  **Loading the Data:** Load the MNIST dataset using libraries like TensorFlow/Keras or PyTorch.  This dataset consists of handwritten digits (0-9).

    ```python
    import tensorflow as tf
    from tensorflow import keras

    (x_train, y_train), (x_test, y_test) = keras.datasets.mnist.load_data()

    # Alternatively using PyTorch
    # import torch
    # from torchvision import datasets, transforms
    #
    # transform = transforms.Compose([transforms.ToTensor(), transforms.Normalize((0.1307,), (0.3081,))])
    # train_dataset = datasets.MNIST('./data', train=True, download=True, transform=transform)
    # test_dataset = datasets.MNIST('./data', train=False, download=True, transform=transform)
    ```

2.  **Preprocessing:**
    *   **Normalization:** Scale the pixel values to a range between 0 and 1 (e.g., by dividing by 255). This helps improve training stability and speed.
    *   **Reshaping:** Flatten the 28x28 images into a 784-dimensional vector, if required by the model architecture.
    *   **One-Hot Encoding:** Convert the labels (0-9) into one-hot encoded vectors.  For example, the digit 3 would become `[0, 0, 0, 1, 0, 0, 0, 0, 0, 0]`. This is necessary for categorical cross-entropy loss.

    ```python
    # Keras example:
    x_train = x_train.astype('float32') / 255.0
    x_test = x_test.astype('float32') / 255.0

    x_train = x_train.reshape((60000, 784)) # Flatten the images
    x_test = x_test.reshape((10000, 784))

    y_train = keras.utils.to_categorical(y_train, num_classes=10)
    y_test = keras.utils.to_categorical(y_test, num_classes=10)
    ```

3.  **Splitting into Training and Validation Sets:**  Split the training data into training and validation sets.  The validation set is used to monitor performance during training and prevent overfitting.  A common split is 80/20 for training/validation.

    ```python
    #Keras does this implicitly through the validation_split argument in model.fit(), or can be done manually using sklearn.model_selection.train_test_split.

    from sklearn.model_selection import train_test_split

    x_train, x_val, y_train, y_val = train_test_split(x_train, y_train, test_size=0.2, random_state=42)  # Example with sklearn
    ```

**B. Model Definition:**

1.  **Define the Neural Network Architecture:**  Create a neural network model with one or more hidden layers. The output layer should have 10 neurons (one for each digit) and use a softmax activation function for multi-class classification. Choose appropriate activation functions (Sigmoid, ReLU, Tanh) for the hidden layers.

    ```python
    # Keras Example

    def create_model(activation='relu'):
        model = keras.Sequential([
            keras.layers.Dense(128, activation=activation, input_shape=(784,)), # Input layer
            keras.layers.Dense(64, activation=activation), # Hidden layer
            keras.layers.Dense(10, activation='softmax') # Output layer
        ])
        return model

    # Create models with different activation functions
    model_sigmoid = create_model(activation='sigmoid')
    model_relu = create_model(activation='relu')
    model_tanh = create_model(activation='tanh')
    ```

2.  **Compile the Model:**  Configure the learning process by specifying the optimizer, loss function, and evaluation metrics.

    ```python
    # Compile the models
    optimizer = tf.keras.optimizers.Adam()  # Or SGD, etc.

    model_sigmoid.compile(optimizer=optimizer,
                          loss='categorical_crossentropy', # Cross-entropy for multi-class
                          metrics=['accuracy'])

    model_relu.compile(optimizer=optimizer,
                       loss='categorical_crossentropy',
                       metrics=['accuracy'])

    model_tanh.compile(optimizer=optimizer,
                       loss='categorical_crossentropy',
                       metrics=['accuracy'])
    ```

**C. Training the Model:**

1.  **Set Hyperparameters:**  Define the batch size, number of epochs, and learning rate.
2.  **Training Loop:**
    *   Iterate over the training data in batches.
    *   Perform forward propagation to calculate the predicted outputs.
    *   Calculate the loss function.
    *   Perform backward propagation to calculate the gradients of the loss function with respect to the model's parameters.
    *   Update the model's parameters using the optimizer.
    *   Evaluate the model on the validation set after each epoch (or a certain number of iterations) to monitor performance and prevent overfitting.
3.  **Early Stopping:** Implement early stopping to halt the training process if the validation loss stops improving for a certain number of epochs. This can prevent overfitting.

    ```python
    # Training the models

    epochs = 10
    batch_size = 32

    history_sigmoid = model_sigmoid.fit(x_train, y_train, epochs=epochs, batch_size=batch_size, validation_data=(x_val, y_val), verbose=1)
    history_relu = model_relu.fit(x_train, y_train, epochs=epochs, batch_size=batch_size, validation_data=(x_val, y_val), verbose=1)
    history_tanh = model_tanh.fit(x_train, y_train, epochs=epochs, batch_size=batch_size, validation_data=(x_val, y_val), verbose=1)

    # Example of Early Stopping in Keras
    # from tensorflow.keras.callbacks import EarlyStopping
    # early_stopping = EarlyStopping(monitor='val_loss', patience=3, restore_best_weights=True)  # Stop if val_loss doesn't improve for 3 epochs
    # history_relu = model_relu.fit(x_train, y_train, epochs=epochs, batch_size=batch_size, validation_data=(x_val, y_val), callbacks=[early_stopping], verbose=1)
    ```

**D. Evaluating the Model:**

1.  **Evaluate on the Test Set:**  After training, evaluate the model on the test set to assess its generalization performance.
2.  **Calculate Evaluation Metrics:**  Calculate metrics such as accuracy, precision, recall, and F1-score to assess the model's performance.  Accuracy is often the primary metric for MNIST.

    ```python
    # Evaluating the models
    loss_sigmoid, accuracy_sigmoid = model_sigmoid.evaluate(x_test, y_test, verbose=0)
    print(f'Sigmoid: Loss = {loss_sigmoid:.4f}, Accuracy = {accuracy_sigmoid:.4f}')

    loss_relu, accuracy_relu = model_relu.evaluate(x_test, y_test, verbose=0)
    print(f'ReLU: Loss = {loss_relu:.4f}, Accuracy = {accuracy_relu:.4f}')

    loss_tanh, accuracy_tanh = model_tanh.evaluate(x_test, y_test, verbose=0)
    print(f'Tanh: Loss = {loss_tanh:.4f}, Accuracy = {accuracy_tanh:.4f}')

    # Optional:  Print a classification report for more detailed analysis
    # from sklearn.metrics import classification_report
    # y_pred = model_relu.predict(x_test)
    # y_pred_classes = np.argmax(y_pred, axis=1)
    # y_true_classes = np.argmax(y_test, axis=1)
    # print(classification_report(y_true_classes, y_pred_classes))
    ```

**E. Analyzing the Results:**

1.  **Compare Training and Evaluation Metrics:**  Compare the training and validation loss/accuracy curves for the different activation functions.
2.  **Analyze Training Speed and Convergence:**  Compare the number of epochs required for each activation function to converge. ReLU typically converges faster.
3.  **Analyze Classification Accuracy:** Compare the test accuracy of the models trained with different activation functions.  ReLU often achieves the best accuracy on MNIST.
4.  **Consider Vanishing/Exploding Gradients:** If the Sigmoid or Tanh networks fail to train properly, consider if the vanishing gradients problem is occurring. This often results in very slow or no learning.

    ```python
    # Plotting training history (example)
    import matplotlib.pyplot as plt

    plt.figure(figsize=(12, 4))

    plt.subplot(1, 2, 1)
    plt.plot(history_sigmoid.history['loss'], label='Sigmoid Train Loss')
    plt.plot(history_sigmoid.history['val_loss'], label='Sigmoid Val Loss')
    plt.plot(history_relu.history['loss'], label='ReLU Train Loss')
    plt.plot(history_relu.history['val_loss'], label='ReLU Val Loss')
    plt.plot(history_tanh.history['loss'], label='Tanh Train Loss')
    plt.plot(history_tanh.history['val_loss'], label='Tanh Val Loss')
    plt.title('Loss Comparison')
    plt.xlabel('Epoch')
    plt.ylabel('Loss')
    plt.legend()

    plt.subplot(1, 2, 2)
    plt.plot(history_sigmoid.history['accuracy'], label='Sigmoid Train Accuracy')
    plt.plot(history_sigmoid.history['val_accuracy'], label='Sigmoid Val Accuracy')
    plt.plot(history_relu.history['accuracy'], label='ReLU Train Accuracy')
    plt.plot(history_relu.history['val_accuracy'], label='ReLU Val Accuracy')
    plt.plot(history_tanh.history['accuracy'], label='Tanh Train Accuracy')
    plt.plot(history_tanh.history['val_accuracy'], label='Tanh Val Accuracy')
    plt.title('Accuracy Comparison')
    plt.xlabel('Epoch')
    plt.ylabel('Accuracy')
    plt.legend()

    plt.tight_layout()
    plt.show()
    ```

### 3. Examples and Code Snippets

The code snippets above demonstrate the implementation of training and evaluation procedures using TensorFlow/Keras. The concepts are similar when using PyTorch.

*   **Example Architecture:**  A simple feedforward neural network with two hidden layers. The first layer has 128 neurons, the second has 64 neurons.
*   **Example Optimizer:** Adam optimizer with a learning rate of 0.001. You can experiment with different learning rates (e.g., 0.01, 0.0001) to see how they affect the training process.
*   **Example Loss Function:** Categorical cross-entropy loss for multi-class classification.
*   **Example Evaluation Metric:** Accuracy.

### 4. Practice Questions/Exercises

1.  **Question:** Explain the difference between training, validation, and test sets. Why are they important?
    *   **Answer:**  *Training set* is for learning parameters. *Validation set* is for hyperparameter tuning and early stopping (preventing overfitting). *Test set* is for evaluating final performance on unseen data. They're crucial for ensuring good generalization.

2.  **Question:** What are the advantages and disadvantages of Sigmoid, ReLU, and Tanh activation functions?
    *   **Answer:** *Sigmoid*: Output between 0 and 1, but prone to vanishing gradients. *ReLU*: Fast computation, mitigates vanishing gradients, but can suffer from dying ReLU. *Tanh*: Output between -1 and 1, centered around 0, but also susceptible to vanishing gradients.

3.  **Question:** How does the choice of activation function affect the training process?
    *   **Answer:** Different activation functions impact training speed, convergence, and accuracy. ReLU often leads to faster convergence than Sigmoid or Tanh.

4.  **Exercise:** Implement a neural network with three hidden layers using ReLU activation on the MNIST dataset. Experiment with different learning rates and batch sizes and observe their effects on the training process.
    ```python
    #Modified create_model function
    def create_model_relu(num_hidden_layers=3, units=128, activation='relu'):
      model = keras.Sequential()
      model.add(keras.layers.Dense(units, activation=activation, input_shape=(784,)))
      for _ in range(num_hidden_layers-1): #Subtract one because we already added the input layer
        model.add(keras.layers.Dense(units, activation=activation))
      model.add(keras.layers.Dense(10, activation='softmax'))
      return model

    #Example usage
    model_relu_3_layers = create_model_relu(num_hidden_layers=3, units=128, activation='relu')
    model_relu_3_layers.compile(optimizer=keras.optimizers.Adam(learning_rate=0.001),
                          loss='categorical_crossentropy',
                          metrics=['accuracy'])
    history_relu_3_layers = model_relu_3_layers.fit(x_train, y_train, epochs=10, batch_size=32, validation_data=(x_val, y_val))
    ```

5.  **Exercise:** Compare the performance of ReLU and Tanh on MNIST when using a very deep neural network (e.g., 10 hidden layers). Observe if the vanishing gradient problem affects Tanh more significantly.  Consider using a smaller learning rate for Tanh in this scenario.

### 5. Important Points to Remember

*   Data preprocessing is crucial for training performance.
*   The choice of activation function, optimizer, and learning rate can significantly impact the training process and the final accuracy of the model.
*   Monitoring the validation set performance during training is essential for preventing overfitting.
*   Early stopping is a useful technique for preventing overfitting and saving training time.
*   Experiment with different hyperparameters to optimize the performance of the model.
*   ReLU is a popular choice for hidden layer activations due to its faster training speed and ability to mitigate vanishing gradients.  However, it's essential to be aware of the potential "dying ReLU" problem.
*   Sigmoid and Tanh can still be useful in certain situations, but they often require careful tuning and may not be suitable for very deep networks due to the vanishing gradient problem.
