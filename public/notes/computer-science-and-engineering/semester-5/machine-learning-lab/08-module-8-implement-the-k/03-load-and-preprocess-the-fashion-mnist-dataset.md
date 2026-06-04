---
title: "Load and preprocess the Fashion MNIST dataset."
subject: "MACHINE LEARNING LAB"
module: "Module 8: Implement the K"
branch: "Computer Science and Engineering"
semester: 5
topicId: "684162770fc9aa1fdbc8b960"
status: "completed"
scrapedAt: "2026-05-20T16:47:26.033Z"
---
# MACHINE LEARNING LAB - Module 8: Implement the K - Topic: Load and Preprocess Fashion MNIST Dataset

## Overview

This module focuses on implementing the K-Nearest Neighbors (KNN) algorithm, and this topic specifically covers loading and preprocessing the Fashion MNIST dataset. Fashion MNIST is a popular alternative to the traditional MNIST handwritten digits dataset, offering a more challenging and realistic image classification task. Correctly loading and preprocessing the data is crucial for the success of any machine learning model.

## Learning Outcomes

By the end of this topic, you should be able to:

*   **Understand the Fashion MNIST dataset:** Describe the structure, content, and purpose of the Fashion MNIST dataset.
*   **Load the Fashion MNIST dataset:** Load the dataset using appropriate Python libraries (e.g., TensorFlow/Keras, scikit-learn).
*   **Explore the dataset:** Visualize sample images and examine the data distribution.
*   **Preprocess the data:** Normalize pixel values, reshape data, and split into training and testing sets.
*   **Understand the importance of preprocessing:** Explain why preprocessing is a necessary step for machine learning models.

## Key Concepts and Definitions

*   **Fashion MNIST Dataset:** A dataset of 60,000 training images and 10,000 testing images of fashion articles from 10 categories. Each image is a 28x28 grayscale image.
*   **Pixel Value:** The intensity of a pixel in an image, typically ranging from 0 to 255 for grayscale images.
*   **Normalization:** Scaling numerical data to a standard range, often between 0 and 1. This helps to prevent features with larger values from dominating the model.
*   **Reshaping:** Changing the dimensions of an array. In image processing, this might involve converting a 28x28 image matrix into a 784-element vector.
*   **Training Set:** A portion of the dataset used to train the machine learning model.
*   **Testing Set:** A separate portion of the dataset used to evaluate the performance of the trained model on unseen data.
*   **Data Preprocessing:** The process of cleaning, transforming, and organizing raw data into a format suitable for machine learning models.
*   **One-Hot Encoding (Optional, for later modules):** A representation of categorical variables as binary vectors, where each vector represents a single category.  Not directly used in loading/preprocessing but often follows.

## 1. Understanding the Fashion MNIST Dataset

*   **Description:** Fashion MNIST contains grayscale images of 10 fashion categories:
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
*   **Structure:** The dataset is split into:
    *   **Training Set:** 60,000 images and corresponding labels.
    *   **Testing Set:** 10,000 images and corresponding labels.
*   **Image Format:** Each image is 28x28 pixels, represented as a NumPy array.
*   **Purpose:** To provide a more challenging alternative to MNIST for image classification tasks. It's less trivial than MNIST, encouraging the use of more sophisticated machine learning techniques.

## 2. Loading the Fashion MNIST Dataset

### 2.1 Using TensorFlow/Keras:

```python
import tensorflow as tf

# Load the Fashion MNIST dataset
(train_images, train_labels), (test_images, test_labels) = tf.keras.datasets.fashion_mnist.load_data()

print("Shape of training images:", train_images.shape)  # (60000, 28, 28)
print("Shape of training labels:", train_labels.shape)  # (60000,)
print("Shape of testing images:", test_images.shape)   # (10000, 28, 28)
print("Shape of testing labels:", test_labels.shape)    # (10000,)
```

**Explanation:**

*   `tf.keras.datasets.fashion_mnist.load_data()`: This function downloads and loads the Fashion MNIST dataset directly from Keras. It returns two tuples:
    *   `(train_images, train_labels)`: Training data and labels.
    *   `(test_images, test_labels)`: Testing data and labels.

### 2.2 Using Scikit-learn (less common for raw images, but conceptually similar):

While scikit-learn doesn't directly offer Fashion MNIST like Keras, you could manually download the data and load it using `numpy`.  Or, for similar datasets, you can use built-in datasets.

```python
#Example of loading a different dataset with sklearn
from sklearn.datasets import load_digits
digits = load_digits()

print("Shape of digits data:", digits.data.shape) # (1797, 64)  Each image is represented as a 64-element vector (8x8 pixels)
print("Shape of digits target:", digits.target.shape) # (1797,)  Labels for each image
```

**Important Note:**  For Fashion MNIST, Keras is the recommended approach as it handles the download and loading easily.

## 3. Exploring the Dataset

### 3.1 Visualizing Sample Images:

```python
import matplotlib.pyplot as plt

# Example of displaying the first 10 images
class_names = ['T-shirt/top', 'Trouser', 'Pullover', 'Dress', 'Coat',
               'Sandal', 'Shirt', 'Sneaker', 'Bag', 'Ankle boot']

plt.figure(figsize=(10,10))
for i in range(10):
    plt.subplot(5,5,i+1)
    plt.xticks([])
    plt.yticks([])
    plt.grid(False)
    plt.imshow(train_images[i], cmap=plt.cm.binary)
    plt.xlabel(class_names[train_labels[i]])
plt.show()
```

**Explanation:**

*   `matplotlib.pyplot`: A library for creating visualizations in Python.
*   The code iterates through the first 10 images in the training set and displays them with their corresponding labels.
*   `cmap=plt.cm.binary`: Specifies that the images should be displayed in grayscale.

### 3.2 Examining Data Distribution (Example):

```python
import numpy as np

# Count the occurrences of each label in the training set
unique_labels, counts = np.unique(train_labels, return_counts=True)

print("Distribution of training labels:")
for i in range(len(unique_labels)):
    print(f"Label {unique_labels[i]}: {counts[i]} samples")


#Plotting a histogram of the labels
plt.figure(figsize=(8,6))
plt.hist(train_labels, bins=np.arange(0,11)-0.5, edgecolor='black') #Center bins on the integers.
plt.xticks(range(10))
plt.xlabel("Label")
plt.ylabel("Count")
plt.title("Distribution of Fashion MNIST Training Labels")
plt.show()
```

**Explanation:**

*   `np.unique(train_labels, return_counts=True)`: This NumPy function finds the unique labels and their corresponding counts.
*   The code then prints the distribution of labels in the training set.  This helps to check for imbalanced datasets.
*   The `plt.hist` plot generates a histogram to visualize the distribution.

## 4. Preprocessing the Data

### 4.1 Normalizing Pixel Values:

```python
# Scale pixel values to the range of 0 to 1
train_images = train_images.astype('float32') / 255.0
test_images = test_images.astype('float32') / 255.0

print("Maximum pixel value after normalization:", train_images.max()) # Output: 1.0
print("Minimum pixel value after normalization:", train_images.min()) # Output: 0.0
```

**Explanation:**

*   The original pixel values range from 0 to 255. Dividing by 255.0 scales the values to the range of 0 to 1.
*   **Why normalize?**  Normalization improves the performance and stability of many machine learning algorithms, especially those that rely on distance calculations, like KNN.  It prevents features with larger scales from dominating the calculation.

### 4.2 Reshaping the Data (for some algorithms):

Depending on the chosen algorithm, you might need to reshape the 2D images into 1D vectors.  This is *typically* needed for KNN with libraries that expect features as vectors, or for certain neural network layers.

```python
# Reshape the images into vectors of 784 elements (28*28)

#This is not ALWAYS needed - KNN in scikit-learn will often automatically handle 2D input.
#However, it's good practice to understand reshaping.

num_pixels = train_images.shape[1] * train_images.shape[2] # 28 * 28 = 784

train_images_reshaped = train_images.reshape(train_images.shape[0], num_pixels)
test_images_reshaped = test_images.reshape(test_images.shape[0], num_pixels)


print("Shape of reshaped training images:", train_images_reshaped.shape) # (60000, 784)
print("Shape of reshaped testing images:", test_images_reshaped.shape)  # (10000, 784)
```

**Explanation:**

*   `reshape(train_images.shape[0], num_pixels)`: Reshapes each image from a 28x28 matrix into a 784-element vector. The `train_images.shape[0]` keeps the number of training samples the same.

### 4.3 Splitting into Training and Testing Sets:

This step has already been done in the Keras implementation:

```python
(train_images, train_labels), (test_images, test_labels) = tf.keras.datasets.fashion_mnist.load_data()
```

Keras provides pre-split training and testing sets.  If you loaded data manually, you'd use `train_test_split` from `sklearn.model_selection`.

```python
#Example if you had to split manually
# from sklearn.model_selection import train_test_split
# X_train, X_test, y_train, y_test = train_test_split(all_images, all_labels, test_size=0.2, random_state=42) # Example
```

## 5. Importance of Preprocessing

*   **Improved Model Performance:** Preprocessing techniques like normalization can significantly improve the accuracy and convergence speed of machine learning models.
*   **Data Consistency:** Preprocessing ensures that the data is in a consistent format, which is necessary for many algorithms.
*   **Handling Missing Values:** (Not relevant in Fashion MNIST, but generally important):  Preprocessing can involve imputing or removing missing values to prevent errors.
*   **Reducing Noise:** Filtering and smoothing techniques can reduce noise in the data, leading to more robust models.
*   **Algorithm Compatibility:** Some algorithms require specific data formats (e.g., normalization, feature scaling).

## Important Points to Remember

*   **Normalization is crucial:** Always normalize pixel values to a range between 0 and 1.
*   **Reshape data appropriately:**  Reshaping depends on the algorithm and library you are using. Check the documentation carefully.  Not always needed.
*   **Understand data distribution:**  Analyzing the distribution of labels can reveal potential biases or imbalances in the dataset.
*   **Visualize the data:**  Visualizing sample images helps to verify that the data has been loaded correctly.
*   **Split data carefully:**  A proper train/test split ensures that your model is evaluated on unseen data. Keras Fashion MNIST handles this automatically.
*   **Consistent preprocessing:** Make sure to apply the same preprocessing steps to both the training and testing sets.

## Practice Questions/Exercises

1.  **Load the Fashion MNIST dataset using TensorFlow/Keras.** (See section 2.1)
2.  **Print the shape of the training and testing images and labels.** (See section 2.1)
3.  **Display the first 5 images from the training set with their labels.** (See section 3.1)
4.  **Normalize the pixel values of the training and testing images.** (See section 4.1)
5.  **Why is normalization an important preprocessing step for Fashion MNIST?**

    *Answer:* Normalization ensures that all pixel values are within a consistent range (0-1), preventing features with larger scales from dominating the model.  It can improve model performance and convergence speed.

6.  **(Advanced)** Reshape the training and testing images into a 1D vector of length 784. (See section 4.2)
7.  **(Advanced)** Instead of dividing by 255, try standardizing the data using `sklearn.preprocessing.StandardScaler`. How does that affect the data?  When might that be more appropriate?

    *Answer:* Standardizing transforms the data to have zero mean and unit variance.  This might be more appropriate when the pixel values are not uniformly distributed or when you have outliers in the data. It's less commonly used for image pixel values as the range is well-defined.

8. **How would you check if the training data is balanced?**

    *Answer:* You would calculate the frequency of each class (label) in the training set and visualize the distribution using a histogram. If the classes have significantly different frequencies, the dataset is imbalanced. (See section 3.2 for an example.)

## Example Complete Code:

```python
import tensorflow as tf
import matplotlib.pyplot as plt
import numpy as np


# Load the Fashion MNIST dataset
(train_images, train_labels), (test_images, test_labels) = tf.keras.datasets.fashion_mnist.load_data()

print("Shape of training images:", train_images.shape)
print("Shape of training labels:", train_labels.shape)
print("Shape of testing images:", test_images.shape)
print("Shape of testing labels:", test_labels.shape)

# Example of displaying the first 10 images
class_names = ['T-shirt/top', 'Trouser', 'Pullover', 'Dress', 'Coat',
               'Sandal', 'Shirt', 'Sneaker', 'Bag', 'Ankle boot']

plt.figure(figsize=(10,10))
for i in range(10):
    plt.subplot(5,5,i+1)
    plt.xticks([])
    plt.yticks([])
    plt.grid(False)
    plt.imshow(train_images[i], cmap=plt.cm.binary)
    plt.xlabel(class_names[train_labels[i]])
plt.show()


# Scale pixel values to the range of 0 to 1
train_images = train_images.astype('float32') / 255.0
test_images = test_images.astype('float32') / 255.0

print("Maximum pixel value after normalization:", train_images.max())
print("Minimum pixel value after normalization:", train_images.min())

# Count the occurrences of each label in the training set
unique_labels, counts = np.unique(train_labels, return_counts=True)

print("Distribution of training labels:")
for i in range(len(unique_labels)):
    print(f"Label {unique_labels[i]}: {counts[i]} samples")


#Plotting a histogram of the labels
plt.figure(figsize=(8,6))
plt.hist(train_labels, bins=np.arange(0,11)-0.5, edgecolor='black') #Center bins on the integers.
plt.xticks(range(10))
plt.xlabel("Label")
plt.ylabel("Count")
plt.title("Distribution of Fashion MNIST Training Labels")
plt.show()


# Reshape the images into vectors of 784 elements (28*28)

num_pixels = train_images.shape[1] * train_images.shape[2] # 28 * 28 = 784

train_images_reshaped = train_images.reshape(train_images.shape[0], num_pixels)
test_images_reshaped = test_images.reshape(test_images.shape[0], num_pixels)


print("Shape of reshaped training images:", train_images_reshaped.shape)
print("Shape of reshaped testing images:", test_images_reshaped.shape)
