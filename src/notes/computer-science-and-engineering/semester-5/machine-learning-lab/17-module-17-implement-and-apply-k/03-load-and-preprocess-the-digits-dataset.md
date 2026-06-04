---
title: "Load and preprocess the Digits dataset."
subject: "MACHINE LEARNING LAB"
module: "Module 17: Implement and apply K"
branch: "Computer Science and Engineering"
semester: 5
topicId: "684162770fc9aa1fdbc8b99f"
status: "completed"
scrapedAt: "2026-05-20T16:48:05.487Z"
---
# MACHINE LEARNING LAB - Module 17: Implement and apply K - Topic: Load and preprocess the Digits dataset

**Introduction:**

This module focuses on loading and preprocessing the Digits dataset, a foundational step in applying the K-Nearest Neighbors (KNN) algorithm for image classification.  Understanding how to properly load and prepare data is crucial for achieving optimal model performance.

**Learning Outcomes:**

*   Understand the structure and characteristics of the Digits dataset.
*   Load the Digits dataset using scikit-learn.
*   Preprocess the data by scaling and normalizing pixel values.
*   Split the dataset into training and testing sets.
*   Visualize the dataset samples.

**1. Understanding the Digits Dataset**

*   **Definition:** The Digits dataset is a readily available dataset in scikit-learn (sklearn). It consists of 1,797 8x8 pixel images of handwritten digits (0 through 9).  Each pixel represents a grayscale value.

*   **Key Characteristics:**
    *   **Number of Classes:** 10 (digits 0-9)
    *   **Number of Samples:** 1,797
    *   **Image Size:** 8x8 pixels
    *   **Data Type:** Grayscale images represented as NumPy arrays.
    *   **Format:**  Available as both flattened feature vectors (64 features) and 8x8 image arrays.
    *   **Use Case:** Primarily used for introductory machine learning tasks, especially image classification.

*   **Why use the Digits dataset?**
    *   Small and manageable, making it ideal for experimentation and learning.
    *   Easy to load and use with scikit-learn.
    *   Provides a good balance of simplicity and complexity for illustrating machine learning concepts.
    *   Serves as a stepping stone to more complex image classification datasets like MNIST.

**2. Loading the Digits Dataset using Scikit-Learn**

*   **Key Concept:** Scikit-learn provides built-in functions to load common datasets, including the Digits dataset.

*   **Code Implementation:**

    ```python
    from sklearn.datasets import load_digits

    # Load the digits dataset
    digits = load_digits()

    # Access the data and target
    data = digits.data      # Feature data (8x8 pixels flattened to 64 features)
    target = digits.target  # Target labels (0-9)

    # Understanding the data shape
    print("Data shape:", data.shape)    # Output: (1797, 64)
    print("Target shape:", target.shape)  # Output: (1797,)
    print("Number of classes: ", len(digits.target_names)) # Output: 10 (0-9)

    # Access image data as 8x8 arrays
    images = digits.images  # Original 8x8 image data.

    # Display one sample:
    import matplotlib.pyplot as plt
    plt.imshow(images[0], cmap=plt.cm.gray_r, interpolation='nearest')
    plt.title(f"Label: {target[0]}")
    plt.show()
    ```

*   **Explanation:**
    *   `load_digits()`:  Loads the dataset from scikit-learn.
    *   `digits.data`: Contains the feature data, where each row represents a flattened 8x8 image (64 features).
    *   `digits.target`: Contains the corresponding target labels (the digit represented by each image).
    *   `digits.images`: Contains the original 8x8 image data, accessible as arrays.  This allows you to view the images directly.
    *   `plt.imshow()`:  Displays the image using matplotlib. The `cmap` argument specifies the color map (grayscale reversed). `interpolation` improves image appearance.

**3. Preprocessing the Data: Scaling and Normalization**

*   **Key Concept:**  Scaling and normalization are crucial preprocessing steps that help improve the performance and convergence of machine learning algorithms.

*   **Why Scale/Normalize?**
    *   **Feature Importance:** Features with larger values can dominate the distance calculations in algorithms like KNN, leading to biased results.
    *   **Convergence:**  Scaling can speed up the convergence of optimization algorithms used in other machine learning models (e.g., Gradient Descent).
    *   **Algorithm Sensitivity:** Some algorithms are sensitive to the scale of the input features.

*   **Common Scaling Techniques:**
    *   **MinMaxScaler:** Scales features to a range between 0 and 1.
    *   **StandardScaler:** Standardizes features by removing the mean and scaling to unit variance (mean = 0, standard deviation = 1).

*   **Code Implementation (MinMaxScaler):**

    ```python
    from sklearn.preprocessing import MinMaxScaler

    # Create a MinMaxScaler object
    scaler = MinMaxScaler()

    # Fit the scaler to the data and transform it
    scaled_data = scaler.fit_transform(data)

    # Now the data is scaled between 0 and 1
    print("Original data range (first 5 samples, first 5 features):\n", data[:5, :5])
    print("Scaled data range (first 5 samples, first 5 features):\n", scaled_data[:5, :5])

    ```

*   **Code Implementation (StandardScaler):**

    ```python
    from sklearn.preprocessing import StandardScaler

    # Create a StandardScaler object
    scaler = StandardScaler()

    # Fit the scaler to the data and transform it
    standardized_data = scaler.fit_transform(data)

    # Now the data is standardized
    print("Original data mean (first 5 features):\n", data[:, :5].mean(axis=0))
    print("Standardized data mean (first 5 features):\n", standardized_data[:, :5].mean(axis=0))
    ```

*   **Explanation:**
    *   `MinMaxScaler()` and `StandardScaler()`: Create scaler objects.
    *   `scaler.fit_transform(data)`:  First, the scaler *learns* the scaling parameters (min/max or mean/standard deviation) from the data during the `fit` step. Then, it applies the scaling transformation to the data in the `transform` step.  It's crucial to use `fit_transform` on the *training* data and only `transform` on the testing data to avoid data leakage.

**4. Splitting the Dataset into Training and Testing Sets**

*   **Key Concept:** Splitting the dataset into training and testing sets is essential for evaluating the performance of a machine learning model.

*   **Why Split?**
    *   **Training Data:** Used to train the machine learning model.
    *   **Testing Data:** Used to evaluate how well the model generalizes to unseen data.  This provides an unbiased estimate of the model's performance.

*   **Common Split Ratio:**  80% training data, 20% testing data (or 70/30).

*   **Code Implementation:**

    ```python
    from sklearn.model_selection import train_test_split

    # Split the data into training and testing sets
    X_train, X_test, y_train, y_test = train_test_split(scaled_data, target, test_size=0.2, random_state=42) # scaled_data is preprocessed data

    # Verify the shapes of the training and testing sets
    print("X_train shape:", X_train.shape)   # Output: (1437, 64)
    print("X_test shape:", X_test.shape)     # Output: (360, 64)
    print("y_train shape:", y_train.shape)   # Output: (1437,)
    print("y_test shape:", y_test.shape)     # Output: (360,)
    ```

*   **Explanation:**
    *   `train_test_split(data, target, test_size=0.2, random_state=42)`: Splits the data into training and testing sets.
        *   `data`: The feature data.
        *   `target`: The target labels.
        *   `test_size`: The proportion of data to use for testing (0.2 = 20%).
        *   `random_state`:  A random seed to ensure reproducibility. Using the same `random_state` value will result in the same split each time you run the code.  This is important for consistent experimentation.

**5. Visualizing Dataset Samples**

*   **Key Concept:**  Visualizing the data helps in understanding the characteristics of the dataset and can reveal potential issues or patterns.

*   **Code Implementation:**

    ```python
    import matplotlib.pyplot as plt

    # Display the first 10 digits
    fig, axes = plt.subplots(2, 5, figsize=(10, 5))  # Create a 2x5 grid of subplots
    axes = axes.ravel()  # Flatten the 2D array of axes into a 1D array

    for i in range(10):
        axes[i].imshow(images[i], cmap=plt.cm.gray_r, interpolation='nearest')
        axes[i].set_title(f"Label: {target[i]}")
        axes[i].axis('off') # Turn off axis labels

    plt.tight_layout() # Adjust subplots for better spacing
    plt.show()
    ```

*   **Explanation:**
    *   `plt.subplots(2, 5, figsize=(10, 5))`: Creates a figure with 2 rows and 5 columns of subplots, and sets the figure size.
    *   `axes.ravel()`:  Flattens the 2D array of axes into a 1D array, making it easier to iterate through them.
    *   The loop iterates through the first 10 images and displays them in the subplots, along with their labels.
    *   `plt.tight_layout()`: Prevents overlapping of subplots.
    *   `axes[i].axis('off')`:  Removes the axis ticks and labels for a cleaner visualization.

**Important Points to Remember:**

*   **Data Leakage:** Avoid fitting the scaler (e.g., MinMaxScaler or StandardScaler) on the entire dataset before splitting into training and testing sets.  This can lead to data leakage and an overly optimistic estimate of model performance. *Always fit on the training data and then transform both the training and testing data using the same fitted scaler.*
*   **Reproducibility:**  Use `random_state` when splitting the data to ensure consistent results across multiple runs.
*   **Scaling Choice:** Choose the appropriate scaling technique based on the characteristics of your data and the algorithm you are using. `MinMaxScaler` is useful when you want to scale the values between 0 and 1. `StandardScaler` is useful when you want to center the data around 0 and scale to unit variance.
*   **Understanding Data Shape:** Always check the shapes of your data arrays to ensure that the data is in the correct format.

**Practice Questions/Exercises:**

1.  **Loading:** Load the digits dataset and print the number of samples in each class (0-9).
    *   **Answer:**

        ```python
        from sklearn.datasets import load_digits
        import numpy as np

        digits = load_digits()
        unique_labels, counts = np.unique(digits.target, return_counts=True)
        for label, count in zip(unique_labels, counts):
            print(f"Class {label}: {count} samples")
        ```
2.  **Scaling:** Load the digits dataset and apply `StandardScaler` to the data.  Print the mean and standard deviation of the first feature *before* and *after* scaling.

    *   **Answer:**
        ```python
        from sklearn.datasets import load_digits
        from sklearn.preprocessing import StandardScaler
        import numpy as np

        digits = load_digits()
        data = digits.data

        # Before scaling
        print("Before Scaling:")
        print("Mean of first feature:", data[:, 0].mean())
        print("Standard deviation of first feature:", data[:, 0].std())

        # Scale the data
        scaler = StandardScaler()
        scaled_data = scaler.fit_transform(data)

        # After scaling
        print("\nAfter Scaling:")
        print("Mean of first feature:", scaled_data[:, 0].mean())  # Should be close to 0
        print("Standard deviation of first feature:", scaled_data[:, 0].std()) # Should be close to 1
        ```
3.  **Splitting and Scaling:** Load the digits dataset, split it into training (80%) and testing (20%) sets, and then apply `MinMaxScaler` to *both* the training and testing data.  Print the minimum and maximum values of the first feature in both the original data and the scaled training and testing sets.  (Remember to fit on the training data *only* before transforming!)

    *   **Answer:**

        ```python
        from sklearn.datasets import load_digits
        from sklearn.model_selection import train_test_split
        from sklearn.preprocessing import MinMaxScaler
        import numpy as np

        digits = load_digits()
        data = digits.data
        target = digits.target

        # Split into training and testing sets
        X_train, X_test, y_train, y_test = train_test_split(data, target, test_size=0.2, random_state=42)

        print("Original data min/max:")
        print(f"Train data min: {X_train[:,0].min()}, max: {X_train[:,0].max()}")
        print(f"Test data min: {X_test[:,0].min()}, max: {X_test[:,0].max()}")

        # Scale the data
        scaler = MinMaxScaler()
        X_train_scaled = scaler.fit_transform(X_train) # fit *only* on the training data
        X_test_scaled = scaler.transform(X_test)       # transform the test data using the fitted scaler

        # After scaling
        print("\nAfter Scaling:")
        print("Training Data Min/Max - First Feature:", X_train_scaled[:, 0].min(), X_train_scaled[:, 0].max())
        print("Testing Data Min/Max - First Feature:", X_test_scaled[:, 0].min(), X_test_scaled[:, 0].max())
        ```

These notes provide a comprehensive overview of loading and preprocessing the Digits dataset, covering the key concepts, code implementations, and important considerations.  By understanding these concepts, you will be well-equipped to apply the KNN algorithm and other machine learning models to this and other image classification datasets.
