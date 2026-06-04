---
title: "Load and preprocess the Fashion MNIST dataset."
subject: "MACHINE LEARNING LAB"
module: "Module 12: Implement and compare the performance of SVM classifiers with linear, polynomial, and RBF kernels on the Fashion MNIST dataset. Analyze the advantages and disadvantages of each kernel type."
branch: "Computer Science and Engineering"
semester: 5
topicId: "684162770fc9aa1fdbc8b97c"
status: "completed"
scrapedAt: "2026-05-20T16:47:43.662Z"
---
# MACHINE LEARNING LAB - Module 12: SVM Kernels on Fashion MNIST - Load and Preprocess Data

## Topic: Load and Preprocess the Fashion MNIST dataset.

**Learning Outcomes:**

*   Understand the Fashion MNIST dataset and its characteristics.
*   Load the Fashion MNIST dataset using appropriate libraries.
*   Preprocess the data for SVM training, including scaling and splitting into training and testing sets.
*   Visualize examples from the dataset to understand its contents.

### 1. Understanding the Fashion MNIST Dataset

*   **Definition:** Fashion MNIST is a dataset of Zalando's article images—consisting of a training set of 60,000 examples and a test set of 10,000 examples. Each example is a 28x28 grayscale image, associated with a label from 10 classes.  It serves as a direct drop-in replacement for the original MNIST dataset for benchmarking machine learning algorithms.

*   **Purpose:** Created as a more challenging and realistic alternative to the traditional MNIST dataset of handwritten digits.

*   **Classes:** The Fashion MNIST dataset contains the following 10 classes:

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

*   **Characteristics:**

    *   Images are grayscale.
    *   Resolution is 28x28 pixels (784 features).
    *   Each pixel value ranges from 0 to 255.

### 2. Loading the Fashion MNIST Dataset

*   **Libraries:** Common libraries used to load Fashion MNIST:

    *   **TensorFlow/Keras:**  `keras.datasets.fashion_mnist` is a convenient way to access the dataset.
    *   **torchvision (PyTorch):**  `torchvision.datasets.FashionMNIST`  for PyTorch users.

*   **Example (TensorFlow/Keras):**

    ```python
    import tensorflow as tf

    # Load the Fashion MNIST dataset
    (train_images, train_labels), (test_images, test_labels) = tf.keras.datasets.fashion_mnist.load_data()

    print("Shape of training images:", train_images.shape) # (60000, 28, 28)
    print("Shape of training labels:", train_labels.shape) # (60000,)
    print("Shape of test images:", test_images.shape)     # (10000, 28, 28)
    print("Shape of test labels:", test_labels.shape)      # (10000,)
    ```

*   **Example (PyTorch):**

    ```python
    import torch
    import torchvision
    import torchvision.transforms as transforms

    # Define a transform to normalize the data
    transform = transforms.Compose([transforms.ToTensor(),
                                     transforms.Normalize((0.5,), (0.5,))])

    # Load the Fashion MNIST dataset
    trainset = torchvision.datasets.FashionMNIST(root='./data', train=True,
                                            download=True, transform=transform)
    trainloader = torch.utils.data.DataLoader(trainset, batch_size=4,
                                              shuffle=True, num_workers=2)

    testset = torchvision.datasets.FashionMNIST(root='./data', train=False,
                                           download=True, transform=transform)
    testloader = torch.utils.data.DataLoader(testset, batch_size=4,
                                             shuffle=False, num_workers=2)

    print("Number of training samples:", len(trainset)) # 60000
    print("Number of test samples:", len(testset))      # 10000
    ```

    **Key Points for PyTorch:**
    *   `transforms.ToTensor()`: Converts the images to PyTorch tensors.
    *   `transforms.Normalize()`: Normalizes the pixel values.  This is *crucial* for SVM performance.  (mean, std) for each channel.  FashionMNIST is grayscale, so only one mean and std.

### 3. Preprocessing the Data

*   **Reshaping:** SVM algorithms often require the input to be a 2D array (samples x features). Reshape the images from a 3D array (samples x height x width) to a 2D array (samples x (height * width)).

    ```python
    # TensorFlow/Keras
    num_pixels = train_images.shape[1] * train_images.shape[2] # 28 * 28 = 784
    train_images = train_images.reshape(train_images.shape[0], num_pixels).astype('float32')
    test_images = test_images.reshape(test_images.shape[0], num_pixels).astype('float32')
    print("Shape of reshaped training images:", train_images.shape)  # (60000, 784)
    print("Shape of reshaped test images:", test_images.shape)      # (10000, 784)

    # PyTorch - already handled by ToTensor transformation
    ```

*   **Scaling:**  SVMs are sensitive to the scale of the input features. Scaling the pixel values to a range of 0 to 1 is essential for optimal performance.

    *   **Min-Max Scaling:** Divide pixel values by 255 (the maximum pixel value).

    ```python
    # TensorFlow/Keras
    train_images = train_images / 255
    test_images = test_images / 255
    print("Pixel value range after scaling:", train_images.min(), train_images.max()) # 0.0 1.0

    #PyTorch - Handled by the transforms.Normalize() operation
    ```

*   **Splitting (If necessary):** While Fashion MNIST already provides training and test sets, you might want to create a validation set from the training data.  This allows you to tune hyperparameters *without* touching the final test set.

    ```python
    # TensorFlow/Keras - Using sklearn.model_selection.train_test_split
    from sklearn.model_selection import train_test_split

    X_train, X_val, y_train, y_val = train_test_split(train_images, train_labels, test_size=0.2, random_state=42) # 80% train, 20% validation

    print("Shape of training images (split):", X_train.shape)   # (48000, 784)
    print("Shape of validation images:", X_val.shape)      # (12000, 784)

    # PyTorch - Can be done using torch.utils.data.SubsetRandomSampler
    ```

*   **Encoding Labels (if needed):**  SVMs often work best with numeric labels that start from 0 and are contiguous. The Fashion MNIST labels are already in this format, so no encoding is usually required. However, if you were using a different dataset with string labels, you might need to use `LabelEncoder` from `sklearn.preprocessing`.

### 4. Visualizing Examples

*   **Purpose:**  Verify that the data has been loaded and preprocessed correctly.  It also helps you get a feel for the nature of the dataset.

*   **Example (TensorFlow/Keras):**

    ```python
    import matplotlib.pyplot as plt

    class_names = ['T-shirt/top', 'Trouser', 'Pullover', 'Dress', 'Coat',
                   'Sandal', 'Shirt', 'Sneaker', 'Bag', 'Ankle boot']

    plt.figure(figsize=(10,10))
    for i in range(25):
        plt.subplot(5,5,i+1)
        plt.xticks([])
        plt.yticks([])
        plt.grid(False)
        plt.imshow(train_images[i].reshape((28,28)), cmap=plt.cm.binary)
        plt.xlabel(class_names[train_labels[i]])
    plt.show()
    ```

*   **Example (PyTorch):**

    ```python
    import matplotlib.pyplot as plt
    import numpy as np

    # Function to show an image
    def imshow(img):
        img = img / 2 + 0.5     # unnormalize
        npimg = img.numpy()
        plt.imshow(np.transpose(npimg, (1, 2, 0)))
        plt.show()

    # Get some random training images
    dataiter = iter(trainloader)
    images, labels = dataiter.next()

    # Show images
    imshow(torchvision.utils.make_grid(images))
    # Print labels
    print(' '.join('%5s' % class_names[labels[j]] for j in range(4)))
    ```

### Important Points to Remember:

*   **Scaling is Crucial:** SVMs are sensitive to feature scaling. Always scale your data to [0, 1] or use standardization techniques before training.
*   **Reshaping:** Ensure your data is in the correct format (samples x features) required by the SVM implementation you are using.
*   **Data Split:**  Use a validation set to tune hyperparameters properly.
*   **Visualization:** Always visualize your data to ensure it is loaded and preprocessed correctly.
*   **Memory Considerations:**  Fashion MNIST is relatively small, but for larger datasets, consider using techniques like mini-batch gradient descent (especially with PyTorch DataLoaders) to avoid memory issues.

### Practice Questions/Exercises:

1.  **Question:** What is the purpose of the Fashion MNIST dataset?
    *   **Answer:**  To serve as a more challenging and realistic alternative to the traditional MNIST dataset of handwritten digits for benchmarking machine learning algorithms.

2.  **Question:** Why is it important to scale the pixel values of the Fashion MNIST images before training an SVM?
    *   **Answer:** SVMs are sensitive to the scale of input features. Scaling helps prevent features with larger values from dominating the learning process and improves the model's performance and convergence.

3.  **Question:**  Write the code to load Fashion MNIST using TensorFlow/Keras and print the shape of the training and testing images.
    *   **Answer:**
        ```python
        import tensorflow as tf

        (train_images, train_labels), (test_images, test_labels) = tf.keras.datasets.fashion_mnist.load_data()

        print("Shape of training images:", train_images.shape)
        print("Shape of test images:", test_images.shape)
        ```

4.  **Question:**  Explain why the pixel values of the Fashion MNIST images are often divided by 255 during preprocessing.
    *   **Answer:** This performs Min-Max scaling, normalizing the pixel values to a range between 0 and 1.  This helps the SVM algorithm perform better.

5.  **Question:** Modify the visualization code (TensorFlow/Keras example) to display images from the *test* set instead of the training set.
    *   **Answer:**
        ```python
        import matplotlib.pyplot as plt

        class_names = ['T-shirt/top', 'Trouser', 'Pullover', 'Dress', 'Coat',
                       'Sandal', 'Shirt', 'Sneaker', 'Bag', 'Ankle boot']

        plt.figure(figsize=(10,10))
        for i in range(25):
            plt.subplot(5,5,i+1)
            plt.xticks([])
            plt.yticks([])
            plt.grid(False)
            plt.imshow(test_images[i].reshape((28,28)), cmap=plt.cm.binary) # Changed to test_images
            plt.xlabel(class_names[test_labels[i]]) # Changed to test_labels
        plt.show()
        ```

This comprehensive set of notes covers the loading and preprocessing of the Fashion MNIST dataset, providing a solid foundation for implementing and comparing SVM classifiers with different kernels in the subsequent stages of Module 12.  Remember to pay close attention to scaling, data reshaping, and proper data splitting for optimal results.
