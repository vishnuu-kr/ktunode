---
title: "Load and preprocess the MNIST dataset."
subject: "MACHINE LEARNING LAB"
module: "Module 14: Implement and compare the performance of a neural network using different activation functions (Sigmoid, ReLU, Tanh) on the MNIST dataset. Analyze how each activation function affects the training process and classification accuracy."
branch: "Computer Science and Engineering"
semester: 5
topicId: "684162770fc9aa1fdbc8b98a"
status: "completed"
scrapedAt: "2026-05-20T16:47:52.509Z"
---
# MACHINE LEARNING LAB - Module 14: MNIST Dataset Loading and Preprocessing

**Topic:** Load and preprocess the MNIST dataset.

**Description:**  This module focuses on implementing and comparing neural networks with different activation functions on the MNIST dataset. This topic covers the initial step of loading and preparing the MNIST dataset for this purpose.

**Learning Outcomes:**

*   Understand the structure and format of the MNIST dataset.
*   Learn how to load the MNIST dataset using common Python libraries.
*   Implement preprocessing steps such as normalization to improve model performance.
*   Understand the importance of splitting the dataset into training, validation, and testing sets.

## 1. Understanding the MNIST Dataset

*   **Definition:** MNIST (Modified National Institute of Standards and Technology database) is a widely used dataset of handwritten digits. It is often used as a benchmark for machine learning classification algorithms, particularly neural networks.

*   **Structure:**
    *   Consists of 70,000 grayscale images of handwritten digits (0-9).
    *   Each image is 28x28 pixels.
    *   60,000 images are used for training.
    *   10,000 images are used for testing.

*   **Data Format:** The pixel values range from 0 to 255, representing the grayscale intensity.  The dataset typically comes with labels indicating the digit represented by each image.

*   **Key Concepts:**
    *   **Grayscale Image:** An image containing only shades of gray, ranging from black (0) to white (255).
    *   **Pixel:** The smallest addressable element in an image.
    *   **Label:** A numerical or categorical value representing the class or category the data point belongs to (e.g., the digit represented by the image).

## 2. Loading the MNIST Dataset using Python

Several Python libraries can be used to load the MNIST dataset. The most common are:

*   **Keras:**  Keras provides a built-in function to load the MNIST dataset directly.
*   **TensorFlow:** If you are using TensorFlow, Keras is usually the preferred method.
*   **Scikit-learn:** Scikit-learn also offers a way to download and load the MNIST dataset.
*   **torchvision (PyTorch):** PyTorch's `torchvision` library offers convenient functions for loading many standard datasets, including MNIST.

### 2.1 Loading MNIST with Keras/TensorFlow

```python
import tensorflow as tf  # Import TensorFlow

# Load the MNIST dataset
(x_train, y_train), (x_test, y_test) = tf.keras.datasets.mnist.load_data()

# Print the shapes of the loaded data
print("x_train shape:", x_train.shape)  # (60000, 28, 28)
print("y_train shape:", y_train.shape)  # (60000,)
print("x_test shape:", x_test.shape)    # (10000, 28, 28)
print("y_test shape:", y_test.shape)    # (10000,)

# Example of displaying a digit
import matplotlib.pyplot as plt
plt.imshow(x_train[0], cmap='gray') #Displays first number in training set
plt.title(f"Label: {y_train[0]}")
plt.show()
```

*   **Explanation:**
    *   `tf.keras.datasets.mnist.load_data()`:  This function downloads the MNIST dataset if it's not already present and returns it as two tuples: training data (images and labels) and testing data (images and labels).
    *   `x_train`:  NumPy array containing the training images (60,000 images, each 28x28 pixels).
    *   `y_train`:  NumPy array containing the training labels (60,000 labels, each representing the digit).
    *   `x_test`:  NumPy array containing the testing images (10,000 images, each 28x28 pixels).
    *   `y_test`:  NumPy array containing the testing labels (10,000 labels, each representing the digit).
    *   `plt.imshow()`:  Displays a grayscale image using Matplotlib.

### 2.2 Loading MNIST with Scikit-learn (Requires Downloading from OpenML)

```python
from sklearn.datasets import fetch_openml
import matplotlib.pyplot as plt

# Fetch the MNIST dataset from OpenML
mnist = fetch_openml('mnist_784', version=1, as_frame=False)

# Split the data into features (X) and labels (y)
X, y = mnist["data"], mnist["target"]

# Convert labels to integers
y = y.astype(int)

# Reshape the data to 28x28 images
X = X.reshape(-1, 28, 28)  # Reshape to (number_of_samples, height, width)

# Split data into training and testing sets
X_train, X_test, y_train, y_test = X[:60000], X[60000:], y[:60000], y[60000:]

# Print the shapes of the loaded data
print("X_train shape:", X_train.shape)  # (60000, 28, 28)
print("y_train shape:", y_train.shape)  # (60000,)
print("X_test shape:", X_test.shape)    # (10000, 28, 28)
print("y_test shape:", y_test.shape)    # (10000,)

# Example of displaying a digit
plt.imshow(X_train[0], cmap='gray')
plt.title(f"Label: {y_train[0]}")
plt.show()
```

*   **Explanation:**
    *   `fetch_openml('mnist_784', version=1, as_frame=False)`: Downloads the MNIST dataset from OpenML.  `mnist_784` specifies the dataset, `version=1` specifies the version, and `as_frame=False` ensures the data is returned as NumPy arrays instead of a Pandas DataFrame.
    *   `X, y = mnist["data"], mnist["target"]`: Separates the data into features (pixel values) and labels (digit values).
    *   `X = X.reshape(-1, 28, 28)`: Reshapes the data to the correct image dimensions of 28x28 pixels.
    *   `X[:60000], X[60000:], y[:60000], y[60000:]`: splits into training and testing sets

### 2.3 Loading MNIST with PyTorch

```python
import torch
import torchvision
import torchvision.transforms as transforms

# Define a transform to normalize the data
transform = transforms.Compose([transforms.ToTensor(),
                                transforms.Normalize((0.5,), (0.5,))])  # Mean and Std for MNIST

# Download and load the training dataset
trainset = torchvision.datasets.MNIST(root='./data', train=True,
                                        download=True, transform=transform)
trainloader = torch.utils.data.DataLoader(trainset, batch_size=4,
                                          shuffle=True, num_workers=2)

# Download and load the testing dataset
testset = torchvision.datasets.MNIST(root='./data', train=False,
                                       download=True, transform=transform)
testloader = torch.utils.data.DataLoader(testset, batch_size=4,
                                         shuffle=False, num_workers=2)

# Print the shapes of the loaded data (accessing first batch)
dataiter = iter(trainloader)
images, labels = next(dataiter)
print('Shape of training images:', images.shape) # torch.Size([4, 1, 28, 28])
print('Shape of training labels:', labels.shape) # torch.Size([4])

#Example of displaying a digit
import matplotlib.pyplot as plt
import numpy as np
def imshow(img):
    img = img / 2 + 0.5     # unnormalize
    npimg = img.numpy()
    plt.imshow(np.transpose(npimg, (1, 2, 0)))
    plt.show()

# show images
imshow(torchvision.utils.make_grid(images))
# print labels
print(' '.join(f'{labels[j]}' for j in range(4)))
```

*   **Explanation:**
    *   `torchvision.datasets.MNIST()`:  Downloads the MNIST dataset and applies the specified transformations.
    *   `transform=transforms.Compose([transforms.ToTensor(), transforms.Normalize((0.5,), (0.5,))])`:  Defines a sequence of transformations to be applied to the images.  `ToTensor()` converts the images to PyTorch tensors. `transforms.Normalize((0.5,), (0.5,))` normalizes the pixel values (see Normalization section below).
    *   `torch.utils.data.DataLoader()`:  Creates a data loader object, which efficiently loads the data in batches for training.
    *   Images have a channel dimension (1 for grayscale), so shape is (Batch Size, Channels, Height, Width)

## 3. Data Preprocessing

Preprocessing is crucial for improving the performance of neural networks. Common preprocessing steps for MNIST include:

*   **Reshaping:** Converting the 2D image (28x28) into a 1D vector (784).  This is needed if using a fully connected network directly on the raw pixel data. (Not always necessary, CNNs take 2D images).
*   **Normalization:** Scaling the pixel values to a range between 0 and 1 or -1 and 1.

### 3.1 Reshaping (Flattening)

```python
# Keras/TensorFlow Example
#Reshape x_train and x_test to have a shape of (num_samples, 784)
x_train = x_train.reshape(60000, 784).astype('float32')
x_test = x_test.reshape(10000, 784).astype('float32')
print("Reshaped x_train shape:", x_train.shape)
```

*   **Explanation:**
    *   `x_train.reshape(60000, 784)`: Reshapes the training data from (60000, 28, 28) to (60000, 784).  Each image is now a vector of 784 pixel values.

### 3.2 Normalization

*   **Definition:** Scaling the pixel values to a specific range.

*   **Methods:**
    *   **Scaling to [0, 1]:** Divide each pixel value by 255 (the maximum pixel value).

        ```python
        # Keras/TensorFlow Example
        x_train = x_train / 255
        x_test = x_test / 255
        ```

    *   **Scaling to [-1, 1]:** Normalize to have a mean of 0 and a standard deviation of 1.  Often uses the formula:  `(x - mean) / std`  For MNIST, an approximate normalization can be achieved by: `(x / 255) * 2 - 1`
        ```python
        # PyTorch Example (See above in PyTorch loading example - transforms.Normalize((0.5,), (0.5,)))
        # Keras/TensorFlow Example
        #Approximate normalization to [-1, 1]
        x_train = (x_train / 255) * 2 - 1
        x_test = (x_test / 255) * 2 - 1
        ```

*   **Importance:** Normalization helps the neural network converge faster and improves stability during training. It prevents features with larger values from dominating the learning process.

### 3.3 One-Hot Encoding Labels

*   **Definition:** Converting categorical labels (e.g., digits 0-9) into a binary matrix representation.

*   **Example:**
    *   Instead of representing the digit '3' as `3`, it is represented as a vector `[0, 0, 0, 1, 0, 0, 0, 0, 0, 0]`.  The index corresponding to the digit is set to 1, while all other indices are set to 0.

*   **Implementation:**

    ```python
    # Keras/TensorFlow Example
    from tensorflow.keras.utils import to_categorical

    # Convert labels to one-hot encoding
    num_classes = 10 # Number of possible classes, i.e digits 0-9
    y_train = to_categorical(y_train, num_classes)
    y_test = to_categorical(y_test, num_classes)

    print("y_train shape:", y_train.shape)
    ```

*   **Importance:** One-hot encoding is often required when using categorical cross-entropy loss, which is commonly used for multi-class classification problems.

## 4. Splitting Data into Training, Validation, and Testing Sets

*   **Training Set:** Used to train the neural network model.

*   **Validation Set:** Used to evaluate the model's performance during training and to tune hyperparameters (e.g., learning rate, number of layers).  Helps prevent overfitting.

*   **Testing Set:** Used to evaluate the final performance of the trained model on unseen data.  Provides an unbiased estimate of the model's generalization ability.

*   **Implementation (Keras/TensorFlow Example - Building upon previous steps):**

    ```python
    # Keras example with validation split
    # We're not explicitly creating a separate validation set here. Keras handles it in the model.fit function

    #Alternatively, using sklearn to create the validation set
    from sklearn.model_selection import train_test_split

    X = x_train  #Note: after flattening and normalizing
    Y = y_train  #Note: after one-hot encoding

    X_train, X_val, Y_train, Y_val = train_test_split(X, Y, test_size=0.2, random_state=42)  #80% training, 20% validation

    print("X_train shape:", X_train.shape)
    print("X_val shape:", X_val.shape)
    print("Y_train shape:", Y_train.shape)
    print("Y_val shape:", Y_val.shape)

    #After this split, you have:
    # X_train, Y_train: Data to train your model.
    # X_val, Y_val: Data to validate and tune your model (e.g., during training using callbacks).
    # x_test, y_test: Data to evaluate the final performance of your model (after training and tuning).
    ```

## 5. Important Points to Remember

*   **Data Integrity:** Ensure the MNIST dataset is loaded correctly and completely.
*   **Normalization:** Always normalize pixel values to improve model performance.
*   **One-Hot Encoding:** Use one-hot encoding for labels when using categorical cross-entropy loss.
*   **Validation Set:** Use a validation set to prevent overfitting and tune hyperparameters.
*   **Testing Set:**  The test set *should only be used at the very end* to evaluate the *final* model. Avoid using it to make decisions during training or hyperparameter tuning.
*   **Data Types:** Ensure your data has the correct data type (e.g., `float32` for pixel values) to avoid errors during training.

## 6. Practice Questions and Exercises

1.  **Question:** What is the shape of the `x_train` array after loading the MNIST dataset with Keras, and what does this shape represent?
    *   **Answer:** The shape is typically `(60000, 28, 28)`. This represents 60,000 training images, each with a height of 28 pixels and a width of 28 pixels.

2.  **Exercise:** Write code to load the MNIST dataset using Scikit-learn and print the first 10 labels of the training set.

    ```python
    from sklearn.datasets import fetch_openml

    # Fetch the MNIST dataset
    mnist = fetch_openml('mnist_784', version=1, as_frame=False)
    X, y = mnist["data"], mnist["target"]
    y = y.astype(int)

    # Print the first 10 labels
    print(y[:10])
    ```

3.  **Question:** Why is normalization an important preprocessing step for the MNIST dataset?
    *   **Answer:** Normalization helps the neural network converge faster, improves stability during training, and prevents features with larger values from dominating the learning process.  It scales the pixel values to a smaller range (e.g., 0-1 or -1-1).

4.  **Exercise:** Write code to normalize the pixel values of the `x_train` array to the range [0, 1].  Assume you are using Keras/TensorFlow.

    ```python
    import tensorflow as tf

    (x_train, y_train), (x_test, y_test) = tf.keras.datasets.mnist.load_data()

    # Normalize pixel values to [0, 1]
    x_train = x_train.astype('float32') / 255.0

    print("Max pixel value:", x_train.max())  # Should be 1.0
    print("Min pixel value:", x_train.min()) # Should be 0.0
    ```

5.  **Question:** What is the purpose of one-hot encoding the labels?
    *   **Answer:** One-hot encoding converts categorical labels into a binary matrix representation, which is required by many loss functions (e.g., categorical cross-entropy) used in multi-class classification problems.

6.  **Exercise:** Write code to split the training data into training and validation sets using `train_test_split` from scikit-learn. Use an 80/20 split.

    ```python
    from sklearn.model_selection import train_test_split
    import tensorflow as tf # For loading MNIST

    (x_train, y_train), (x_test, y_test) = tf.keras.datasets.mnist.load_data()

    # Flatten and Normalize x_train and x_test
    x_train = x_train.reshape(60000, 784).astype('float32') / 255.0
    x_test = x_test.reshape(10000, 784).astype('float32') / 255.0

    #One Hot Encode y_train and y_test
    from tensorflow.keras.utils import to_categorical
    num_classes = 10
    y_train = to_categorical(y_train, num_classes)
    y_test = to_categorical(y_test, num_classes)


    # Split the training data into training and validation sets
    X_train, X_val, Y_train, Y_val = train_test_split(x_train, y_train, test_size=0.2, random_state=42)

    print("X_train shape:", X_train.shape)
    print("X_val shape:", X_val.shape)
    print("Y_train shape:", Y_train.shape)
    print("Y_val shape:", Y_val.shape)
    ```

These notes and exercises cover the essential steps for loading and preprocessing the MNIST dataset, setting you up for building and comparing neural networks with different activation functions in the subsequent parts of Module 14.
