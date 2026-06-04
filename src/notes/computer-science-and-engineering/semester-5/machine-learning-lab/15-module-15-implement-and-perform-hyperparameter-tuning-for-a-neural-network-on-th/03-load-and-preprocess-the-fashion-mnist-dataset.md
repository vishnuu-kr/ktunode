---
title: "Load and preprocess the Fashion MNIST dataset."
subject: "MACHINE LEARNING LAB"
module: "Module 15: Implement and perform hyperparameter tuning for a neural network on the Fashion MNIST dataset. Experiment with different learning rates, batch sizes, and epochs, and discuss the impact on model performance."
branch: "Computer Science and Engineering"
semester: 5
topicId: "684162770fc9aa1fdbc8b991"
status: "completed"
scrapedAt: "2026-05-20T16:47:56.760Z"
---
## MACHINE LEARNING LAB - Module 15: Load and Preprocess Fashion MNIST Dataset

**Topic:** Loading and Preprocessing the Fashion MNIST Dataset

**Description:** This module focuses on implementing and performing hyperparameter tuning for a neural network on the Fashion MNIST dataset.  This section covers the initial step: loading and preprocessing the data. We'll explore techniques to prepare the data for optimal model training.

**Learning Outcomes:**

*   Understand the Fashion MNIST dataset and its characteristics.
*   Load the Fashion MNIST dataset using appropriate libraries (e.g., TensorFlow/Keras).
*   Normalize pixel values to a suitable range (e.g., 0-1).
*   Split the dataset into training, validation, and testing sets.
*   One-hot encode the labels.

### 1. Understanding the Fashion MNIST Dataset

*   **Definition:** Fashion MNIST is a dataset of 60,000 28x28 grayscale images of 10 fashion categories, along with a test set of 10,000 images. It's intended as a direct drop-in replacement for the classic MNIST dataset (handwritten digits), but more challenging.

*   **Key Characteristics:**
    *   **Image Size:** 28x28 pixels.
    *   **Grayscale:** Each pixel has a value between 0 and 255, representing its intensity.
    *   **Number of Classes:** 10
    *   **Dataset Split:** 60,000 training images and 10,000 testing images.

*   **Classes:**
    *   0: T-shirt/top
    *   1: Trouser
    *   2: Pullover
    *   3: Dress
    *   4: Coat
    *   5: Sandal
    *   6: Shirt
    *   7: Sneaker
    *   8: Bag
    *   9: Ankle boot

*   **Why Fashion MNIST?**  MNIST (handwritten digits) has become too easy for many machine learning algorithms. Fashion MNIST presents a slightly more complex classification problem, providing a more relevant benchmark for modern image classification tasks.

### 2. Loading the Fashion MNIST Dataset

*   **Using TensorFlow/Keras:** TensorFlow and Keras provide built-in functions to load the Fashion MNIST dataset directly.

*   **Code Example (Python with TensorFlow/Keras):**

    ```python
    import tensorflow as tf
    from tensorflow import keras

    # Load the Fashion MNIST dataset
    (train_images, train_labels), (test_images, test_labels) = keras.datasets.fashion_mnist.load_data()

    # Print the shape of the training and testing data
    print("Training images shape:", train_images.shape)  # Output: (60000, 28, 28)
    print("Training labels shape:", train_labels.shape)  # Output: (60000,)
    print("Testing images shape:", test_images.shape)    # Output: (10000, 28, 28)
    print("Testing labels shape:", test_labels.shape)    # Output: (10000,)
    ```

*   **Explanation:**
    *   `keras.datasets.fashion_mnist.load_data()`:  This function downloads the Fashion MNIST dataset (if it's not already present on your system) and returns it as two tuples: `(train_images, train_labels)` and `(test_images, test_labels)`.
    *   `train_images`: NumPy array containing the training images.  Each image is a 28x28 array of pixel values (0-255).
    *   `train_labels`: NumPy array containing the corresponding labels for the training images (0-9).
    *   `test_images`: NumPy array containing the testing images.
    *   `test_labels`: NumPy array containing the corresponding labels for the testing images.

### 3. Normalizing Pixel Values

*   **Why Normalization?**  Neural networks generally perform better when the input data is scaled to a smaller range, typically between 0 and 1. This helps prevent gradient explosion/vanishing issues and can speed up training.

*   **Normalization Technique:** Divide each pixel value by the maximum possible value (255).

*   **Code Example:**

    ```python
    # Normalize pixel values to be between 0 and 1
    train_images = train_images.astype('float32') / 255.0
    test_images = test_images.astype('float32') / 255.0

    print("Max pixel value after normalization (training):", train_images.max()) # Output: 1.0
    print("Min pixel value after normalization (training):", train_images.min()) # Output: 0.0

    ```

*   **Explanation:**
    *   `train_images.astype('float32')`: Convert the data type to `float32` to ensure accurate division.
    *   `/ 255.0`: Divide each pixel value by 255.0 to scale the values between 0 and 1.

### 4. Splitting into Training, Validation, and Testing Sets

*   **Importance of a Validation Set:** A validation set is crucial for hyperparameter tuning. It allows you to evaluate the performance of your model on data that it hasn't seen during training without using the test set (which should only be used for final evaluation).

*   **Typical Split:**  A common split is 60% training, 20% validation, and 20% testing (though this can be adjusted based on the size of the dataset).  Since Fashion MNIST already has a separate testing set, we only need to split the training set into training and validation sets.

*   **Code Example:**

    ```python
    # Create a validation set by splitting the training data
    from sklearn.model_selection import train_test_split

    train_images, val_images, train_labels, val_labels = train_test_split(
        train_images, train_labels, test_size=0.2, random_state=42 #random_state for reproducibility
    )

    print("Training images shape:", train_images.shape)   # Output: (48000, 28, 28)
    print("Validation images shape:", val_images.shape) # Output: (12000, 28, 28)
    print("Training labels shape:", train_labels.shape)   # Output: (48000,)
    print("Validation labels shape:", val_labels.shape) # Output: (12000,)
    ```

*   **Explanation:**
    *   `train_test_split`:  This function from `sklearn.model_selection` splits the data into training and validation sets.
    *   `test_size=0.2`:  Specifies that 20% of the original training data should be used for the validation set.
    *   `random_state=42`:  Sets a random seed for reproducibility. Using the same `random_state` will ensure that you get the same split each time you run the code.

### 5. One-Hot Encoding the Labels

*   **Why One-Hot Encoding?** Neural networks typically use a softmax output layer for multi-class classification.  One-hot encoding transforms the class labels into a binary matrix format, which is suitable for the softmax function and categorical cross-entropy loss (a common loss function for multi-class classification).

*   **How One-Hot Encoding Works:** Each label is represented as a vector where all elements are 0 except for the element corresponding to the class index, which is 1.  For example, if you have 10 classes, the label 2 would be encoded as `[0, 0, 1, 0, 0, 0, 0, 0, 0, 0]`.

*   **Code Example:**

    ```python
    from tensorflow.keras.utils import to_categorical

    # One-hot encode the labels
    num_classes = 10
    train_labels = to_categorical(train_labels, num_classes)
    val_labels = to_categorical(val_labels, num_classes)
    test_labels = to_categorical(test_labels, num_classes)

    print("Shape of training labels after one-hot encoding:", train_labels.shape) # Output: (48000, 10)
    print("Example of one-hot encoded label:", train_labels[0]) # Example: [0. 0. 0. 0. 0. 0. 1. 0. 0. 0.] (might be different due to random split)
    ```

*   **Explanation:**
    *   `to_categorical`:  This function from `tensorflow.keras.utils` performs one-hot encoding.
    *   `num_classes`:  Specifies the number of classes (10 in this case).

### Complete Code Example (Putting it all together):

```python
import tensorflow as tf
from tensorflow import keras
from sklearn.model_selection import train_test_split
from tensorflow.keras.utils import to_categorical

# 1. Load the Fashion MNIST dataset
(train_images, train_labels), (test_images, test_labels) = keras.datasets.fashion_mnist.load_data()

# 2. Normalize pixel values to be between 0 and 1
train_images = train_images.astype('float32') / 255.0
test_images = test_images.astype('float32') / 255.0

# 3. Create a validation set by splitting the training data
train_images, val_images, train_labels, val_labels = train_test_split(
    train_images, train_labels, test_size=0.2, random_state=42
)

# 4. One-hot encode the labels
num_classes = 10
train_labels = to_categorical(train_labels, num_classes)
val_labels = to_categorical(val_labels, num_classes)
test_labels = to_categorical(test_labels, num_classes)

# Print shapes to confirm preprocessing
print("Training images shape:", train_images.shape)
print("Validation images shape:", val_images.shape)
print("Testing images shape:", test_images.shape)
print("Training labels shape:", train_labels.shape)
print("Validation labels shape:", val_labels.shape)
print("Testing labels shape:", test_labels.shape)

```

### Important Points to Remember:

*   **Data Types:**  Ensure that your image data is in a floating-point format (e.g., `float32`) before normalization.
*   **Consistency:** Apply the same preprocessing steps to the training, validation, and testing sets. This ensures that the model sees data in a similar format during both training and evaluation.
*   **Reproducibility:** Use `random_state` in `train_test_split` to ensure consistent splits for reproducibility.
*   **Purpose of Validation Set:** The validation set is *only* for evaluating model performance during training and for hyperparameter tuning.  Do *not* use it for training the model.
*   **Test Set Integrity:** The test set should *only* be used once, at the very end of the process, to estimate the final performance of your trained and tuned model on unseen data.
*   **Reshaping:** In some cases, you might need to reshape the image data depending on the input requirements of your neural network architecture (e.g., flattening the 28x28 images into a single 784-dimensional vector).  This is often done before feeding the data into fully connected layers.  This might be necessary for simpler models (e.g. a basic multi-layer perceptron), but convolutional neural networks typically accept 2D image data as input.

### Practice Questions / Exercises:

1.  **What is the purpose of the Fashion MNIST dataset?**
    *   Answer:  It serves as a more challenging alternative to the original MNIST dataset for benchmarking image classification algorithms.

2.  **Why is normalization important when working with neural networks and image data?**
    *   Answer: Normalization helps prevent gradient explosion/vanishing problems, speeds up training, and improves model performance by scaling the pixel values to a smaller range (typically 0-1).

3.  **Explain the difference between a training set, a validation set, and a testing set.**
    *   Answer:
        *   **Training set:** Used to train the neural network model.
        *   **Validation set:** Used to evaluate the model's performance during training and for hyperparameter tuning. It helps prevent overfitting.
        *   **Testing set:** Used to evaluate the final performance of the trained and tuned model on unseen data.  It provides an unbiased estimate of the model's generalization ability.

4.  **What does one-hot encoding do to the labels?  Give an example.**
    *   Answer: One-hot encoding transforms categorical labels into a binary matrix format.  For example, if you have 10 classes and a label of 3, the one-hot encoded representation would be `[0, 0, 0, 1, 0, 0, 0, 0, 0, 0]`.

5.  **Given the code `train_images = train_images / 255.0`, what is the purpose of this line of code?**
    *   Answer: This line of code normalizes the pixel values of the training images by dividing each pixel value by 255.0.  This scales the pixel values to the range of 0 to 1.

6.  **Write a short code snippet to load the Fashion MNIST dataset using TensorFlow/Keras.**

    ```python
    import tensorflow as tf
    from tensorflow import keras

    (train_images, train_labels), (test_images, test_labels) = keras.datasets.fashion_mnist.load_data()

    print("Training images shape:", train_images.shape)
    print("Training labels shape:", train_labels.shape)
    ```

7. **After loading the data, you notice the pixel values are integers between 0 and 255.  Write Python code to normalize these values to floats between 0 and 1.**
```python
train_images = train_images.astype('float32') / 255.0
test_images = test_images.astype('float32') / 255.0
```
This comprehensive set of notes should provide a strong foundation for loading and preprocessing the Fashion MNIST dataset in preparation for training a neural network. Remember to practice and experiment with the code to solidify your understanding. Good luck!
