---
title: "Implement the K-Nearest Neighbors (KNN) algorithm for image classification using the Fashion MNIST dataset. Experiment with different values of K and analyze their impact on model performance."
subject: "MACHINE LEARNING LAB"
module: "Module 8: Implement the K"
branch: "Computer Science and Engineering"
semester: 5
topicId: "684162770fc9aa1fdbc8b95e"
status: "completed"
scrapedAt: "2026-05-20T16:47:24.595Z"
---
# MACHINE LEARNING LAB - Module 8: Implement the K-Nearest Neighbors (KNN) Algorithm for Image Classification

## Topic: Implementing KNN for Fashion MNIST

### Learning Outcomes:

*   Understand the K-Nearest Neighbors (KNN) algorithm and its application to image classification.
*   Learn how to load and preprocess the Fashion MNIST dataset.
*   Implement the KNN algorithm from scratch or using libraries like scikit-learn.
*   Experiment with different values of K and observe their impact on classification accuracy.
*   Evaluate the performance of the KNN classifier using appropriate metrics.
*   Analyze the trade-offs associated with different values of K.
*   Understand the computational complexity of KNN.

---

### 1. Key Concepts and Definitions

*   **K-Nearest Neighbors (KNN):** A supervised machine learning algorithm used for classification and regression.  It is a non-parametric, instance-based learning algorithm, which means it doesn't make assumptions about the underlying data distribution and stores the training data to make predictions.

*   **Fashion MNIST Dataset:** A dataset of 70,000 grayscale images of 10 fashion categories, with 60,000 images for training and 10,000 images for testing.  It serves as a direct drop-in replacement for the original MNIST dataset for benchmarking machine learning algorithms.

*   **Image Classification:**  The process of assigning a label to an image based on its content.

*   **Distance Metric:** A function that quantifies the similarity or dissimilarity between two data points. Common distance metrics include:
    *   **Euclidean Distance:** The straight-line distance between two points.  Formula: `sqrt(sum((x_i - y_i)^2))`
    *   **Manhattan Distance:** The sum of the absolute differences between the coordinates of two points. Formula: `sum(|x_i - y_i|)`
    *   **Minkowski Distance:** A generalization of both Euclidean and Manhattan distances.
*   **K:** The number of nearest neighbors considered when making a prediction.  A crucial hyperparameter in the KNN algorithm.
*   **Majority Voting:** The process of assigning the class label that appears most frequently among the K nearest neighbors.
*   **Hyperparameter:**  A parameter whose value is set prior to the learning process. `K` is a key hyperparameter in KNN.
*   **Model Evaluation:** The process of assessing the performance of a machine learning model on unseen data using metrics like accuracy, precision, recall, and F1-score.
*   **Accuracy:** The ratio of correctly classified instances to the total number of instances.
*   **Overfitting:**  A situation where a model learns the training data too well, resulting in poor generalization to unseen data (often occurs with low K values).
*   **Underfitting:**  A situation where a model is too simple to capture the underlying patterns in the data, resulting in poor performance on both training and testing data (often occurs with high K values).
*   **Preprocessing:** Steps taken to transform raw data into a format suitable for machine learning algorithms. For images, this often involves scaling pixel values.
*   **Dimensionality Reduction (Optional):** Techniques like Principal Component Analysis (PCA) can be used to reduce the number of features (dimensions) in the dataset to improve performance and reduce computational cost.

---

### 2. Loading and Preprocessing the Fashion MNIST Dataset

**Steps:**

1.  **Import Libraries:** Import necessary libraries like NumPy, scikit-learn, and Matplotlib.

    ```python
    import numpy as np
    import matplotlib.pyplot as plt
    from sklearn.datasets import fetch_openml
    from sklearn.model_selection import train_test_split
    from sklearn.neighbors import KNeighborsClassifier
    from sklearn.metrics import accuracy_score
    ```

2.  **Load the Dataset:**  Use `fetch_openml` from `sklearn.datasets` to download the Fashion MNIST dataset.

    ```python
    fashion_mnist = fetch_openml(name='Fashion-MNIST', version=1, as_frame=False)
    X, y = fashion_mnist["data"], fashion_mnist["target"]
    ```

3.  **Inspect the Data:** Check the shape of the data to understand the dimensions of the feature matrix (X) and the target vector (y).

    ```python
    print("Shape of X:", X.shape) # (70000, 784) - 70000 images, 784 pixels each (28x28)
    print("Shape of y:", y.shape) # (70000,) - 70000 labels
    ```

4.  **Visualize Samples:** Display a few sample images from the dataset to get a visual understanding.

    ```python
    def plot_image(image):
        plt.imshow(image.reshape(28, 28), cmap = "gray")
        plt.axis("off")
        plt.show()

    plot_image(X[0])  # Show the first image
    print("Label:", y[0])
    ```

5.  **Split into Training and Testing Sets:** Divide the dataset into training and testing sets using `train_test_split`.  A common split is 80/20 or 70/30.

    ```python
    X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)  # 80% training, 20% testing
    ```

6.  **Scale Pixel Values (Preprocessing):** Scale the pixel values to a range between 0 and 1. This helps improve the performance of KNN and prevents features with larger values from dominating the distance calculations.

    ```python
    X_train = X_train / 255.0
    X_test = X_test / 255.0
    ```

---

### 3. Implementing the KNN Algorithm

**Option 1: Using scikit-learn**

This is the easiest and recommended approach.

```python
from sklearn.neighbors import KNeighborsClassifier

# Create a KNN classifier with a specific value of K (e.g., K=5)
k = 5
knn_classifier = KNeighborsClassifier(n_neighbors=k)

# Train the classifier using the training data
knn_classifier.fit(X_train, y_train)

# Make predictions on the test data
y_pred = knn_classifier.predict(X_test)

# Evaluate the performance
accuracy = accuracy_score(y_test, y_pred)
print(f"Accuracy with K={k}: {accuracy}")
```

**Option 2: Implementing from Scratch (Illustrative - computationally expensive for large datasets)**

This is for educational purposes to understand the underlying mechanics of KNN.  It's not practical for large datasets due to its computational cost.

```python
import numpy as np
from collections import Counter

def euclidean_distance(x1, x2):
  return np.sqrt(np.sum((x1 - x2)**2))

def predict(X_train, y_train, x_test, k):
  distances = [euclidean_distance(x_test, x) for x in X_train]
  k_indices = np.argsort(distances)[:k]
  k_nearest_labels = [y_train[i] for i in k_indices]
  # Find the most common class label
  most_common = Counter(k_nearest_labels).most_common(1)
  return most_common[0][0]

def knn(X_train, y_train, X_test, k):
  predictions = [predict(X_train, y_train, x, k) for x in X_test]
  return np.array(predictions)

# Example Usage (Highly simplified - using a very small subset for demonstration):
# Be VERY careful running this on the full dataset.  It will take a VERY long time.
# Consider using a smaller subset of X_train and X_test if you want to try this.

# Let's take 1000 from train and 100 from test
X_train_subset = X_train[:1000]
y_train_subset = y_train[:1000]
X_test_subset = X_test[:100]
y_test_subset = y_test[:100]


k = 5 # Example
y_pred_scratch = knn(X_train_subset, y_train_subset, X_test_subset, k)

accuracy_scratch = np.sum(y_pred_scratch == y_test_subset) / len(y_test_subset)
print(f"Accuracy with K={k} (From Scratch): {accuracy_scratch}")
```

**Explanation of Scratch Implementation:**

1.  **`euclidean_distance(x1, x2)`:** Calculates the Euclidean distance between two data points.
2.  **`predict(X_train, y_train, x_test, k)`:** For a single test data point, finds the K nearest neighbors in the training data based on Euclidean distance, retrieves their labels, and returns the most frequent label (majority voting).
3.  **`knn(X_train, y_train, X_test, k)`:**  Applies the `predict` function to each test data point to generate predictions for the entire test set.

**Important Considerations for the Scratch Implementation:**

*   **Computational Complexity:**  The KNN algorithm has a high computational cost, especially during prediction.  For each test sample, it needs to calculate the distance to *all* training samples.  This makes the scratch implementation very slow for the full Fashion MNIST dataset.
*   **Memory Usage:** Storing the entire training dataset in memory can be a significant memory burden for large datasets.
*   **Optimization:** Techniques like KD-trees or ball trees can be used to speed up the nearest neighbor search, but implementing these from scratch is beyond the scope of a basic lab exercise.
*   **Never run the "from scratch" algorithm on the entire Fashion MNIST dataset. It will take hours to finish. Subset your training and test data significantly!**

---

### 4. Experimenting with Different Values of K and Analyzing Impact

**Steps:**

1.  **Choose a Range of K Values:** Select a range of K values to experiment with (e.g., 1, 3, 5, 7, 9, 11, 13, 15).  It's often useful to try both small and larger values of K.

2.  **Train and Evaluate for Each K:** For each K value, train a KNN classifier using the training data, make predictions on the test data, and calculate the accuracy.

3.  **Store the Results:** Store the K values and their corresponding accuracies in a list or dictionary.

4.  **Visualize the Results:** Plot the accuracy as a function of K to visualize the impact of different K values on model performance.

```python
from sklearn.neighbors import KNeighborsClassifier
from sklearn.metrics import accuracy_score
import matplotlib.pyplot as plt

k_values = [1, 3, 5, 7, 9, 11, 13, 15]
accuracies = []

for k in k_values:
    knn_classifier = KNeighborsClassifier(n_neighbors=k)
    knn_classifier.fit(X_train, y_train)
    y_pred = knn_classifier.predict(X_test)
    accuracy = accuracy_score(y_test, y_pred)
    accuracies.append(accuracy)
    print(f"Accuracy with K={k}: {accuracy}")

# Plotting the results
plt.plot(k_values, accuracies, marker='o')
plt.xlabel("K Value")
plt.ylabel("Accuracy")
plt.title("Accuracy vs. K Value")
plt.grid(True)
plt.show()
```

**Analysis:**

*   **Small K (e.g., K=1 or K=3):**
    *   **Advantages:** Can capture complex relationships in the data.
    *   **Disadvantages:**  Sensitive to noise and outliers in the training data, leading to overfitting.  May result in high variance (small changes in the training data can significantly affect the model).
*   **Large K (e.g., K=11 or K=15):**
    *   **Advantages:** More robust to noise and outliers.  Reduces the impact of individual noisy data points.  Leads to lower variance.
    *   **Disadvantages:** Can over-smooth the decision boundary, potentially missing important local patterns.  May lead to underfitting, especially if the data is complex.
*   **Optimal K:** The optimal value of K depends on the specific dataset and the trade-off between bias and variance.  The plot of accuracy vs. K helps identify the value of K that achieves the best balance.  Often, a value in the middle range performs well.  Cross-validation is a more robust way to find the optimal K.

---

### 5. Evaluating Performance

**Metrics:**

*   **Accuracy:**  The most common metric.  Calculated as `(TP + TN) / (TP + TN + FP + FN)`, where TP = True Positives, TN = True Negatives, FP = False Positives, FN = False Negatives.

*   **Confusion Matrix:** A table that visualizes the performance of a classification model by showing the counts of true positives, true negatives, false positives, and false negatives for each class. Useful for understanding which classes are being misclassified.

*   **Precision, Recall, and F1-Score:**  Particularly useful when dealing with imbalanced datasets (where some classes have significantly more samples than others).
    *   **Precision:** The proportion of correctly predicted positive instances out of all instances predicted as positive.  `TP / (TP + FP)`
    *   **Recall:** The proportion of correctly predicted positive instances out of all actual positive instances. `TP / (TP + FN)`
    *   **F1-Score:** The harmonic mean of precision and recall.  A balanced measure of performance. `2 * (Precision * Recall) / (Precision + Recall)`

**Example using scikit-learn:**

```python
from sklearn.metrics import accuracy_score, classification_report, confusion_matrix

# ... (Train and predict as before) ...

# Calculate accuracy
accuracy = accuracy_score(y_test, y_pred)
print(f"Accuracy: {accuracy}")

# Print classification report (precision, recall, F1-score)
print(classification_report(y_test, y_pred))

# Print confusion matrix
cm = confusion_matrix(y_test, y_pred)
print("Confusion Matrix:\n", cm)
```

**Interpreting the Confusion Matrix:**

The confusion matrix is a square matrix where:

*   Rows represent the actual classes.
*   Columns represent the predicted classes.
*   The diagonal elements represent the number of correctly classified instances for each class.
*   Off-diagonal elements represent misclassifications.

By examining the confusion matrix, you can identify which classes are frequently confused with each other. For example, you might find that "Shirt" is often misclassified as "T-shirt," indicating that the model struggles to distinguish between these two categories.

---

### 6. Trade-offs Associated with Different Values of K

*   **Bias-Variance Trade-off:**
    *   **Low K:** Low bias, high variance (overfitting). The model is very flexible and can fit the training data well, but it may not generalize well to unseen data.
    *   **High K:** High bias, low variance (underfitting). The model is less flexible and may not be able to capture the underlying patterns in the data.
*   **Computational Cost:** The computational cost of KNN increases with the size of the training dataset and the value of K.  Higher K values can slightly reduce the prediction time (since the impact of a single neighbor is reduced), but the primary factor is the size of the training data.
*   **Memory Usage:** KNN requires storing the entire training dataset in memory. This can be a significant constraint for very large datasets.

---

### 7. Computational Complexity of KNN

*   **Training Complexity:**  KNN is a lazy learner, meaning that it doesn't perform any explicit training.  The training complexity is therefore O(1) - constant time to store the training data.

*   **Prediction Complexity:** The prediction complexity is O(N * D), where N is the number of training samples and D is the number of dimensions (features).  For each test sample, the algorithm calculates the distance to all N training samples to find the K nearest neighbors.  This is the main computational bottleneck of KNN. Sorting the distances to get the K-nearest neighbors is usually O(N log N) but, since distance calculation is the dominating factor, overall complexity stays at O(N*D).

*   **Space Complexity:** O(N * D), as the algorithm needs to store the entire training dataset.

---

### Practice Questions/Exercises

1.  **Dataset Scaling:** Why is it important to scale the pixel values in the Fashion MNIST dataset before applying KNN?  What happens if you don't scale the data?

    **Answer:** Scaling is crucial to prevent features with larger values (pixel values in this case) from dominating the distance calculations. If you don't scale, features with larger values will have a disproportionate influence on the distance metric, potentially leading to poor performance.

2.  **Choosing K:** How do you choose an appropriate value for K in the KNN algorithm? What are some methods you can use?

    **Answer:**  You can choose K by experimentation.  Try different values of K and evaluate the model's performance on a validation set. Plotting accuracy vs. K is a good starting point.  Cross-validation (e.g., k-fold cross-validation) is a more robust method for selecting K, as it provides a more reliable estimate of the model's generalization performance.

3.  **Overfitting/Underfitting:** Explain how overfitting and underfitting can occur in KNN and how they relate to the value of K.

    **Answer:**  With a small K, the model is more sensitive to noise and outliers, leading to overfitting. With a large K, the model becomes too simple and may not be able to capture the underlying patterns in the data, leading to underfitting.

4.  **Distance Metrics:**  What are some different distance metrics that can be used in KNN, and when might you choose one over another?

    **Answer:** Common distance metrics include Euclidean distance, Manhattan distance, and Minkowski distance. Euclidean distance is the most common choice. Manhattan distance is suitable when the dimensions are not directly comparable or when dealing with high-dimensional data. Minkowski distance is a generalization that allows you to tune the distance metric based on the value of 'p' (p=2 for Euclidean, p=1 for Manhattan).

5.  **Optimizing KNN:** What are some techniques you can use to improve the performance of KNN, especially for large datasets?

    **Answer:**
    *   **Dimensionality Reduction (PCA):** Reduce the number of features to speed up distance calculations.
    *   **Nearest Neighbor Search Algorithms (KD-trees, Ball Trees):**  These algorithms can significantly speed up the search for the nearest neighbors.  Scikit-learn's `KNeighborsClassifier` uses these internally.
    *   **Data Sampling:**  For extremely large datasets, consider using a smaller subset of the training data for experimentation.  Be cautious about introducing bias.

6. **Write the code to find the best K using a validation set.**

```python
from sklearn.model_selection import train_test_split

X_train_full, X_val, y_train_full, y_val = train_test_split(X_train, y_train, test_size=0.2, random_state=42)  # split original train in train and validation
k_values = [1, 3, 5, 7, 9, 11, 13, 15]
accuracies = []
best_k = 1
best_accuracy = 0
for k in k_values:
    knn_classifier = KNeighborsClassifier(n_neighbors=k)
    knn_classifier.fit(X_train_full, y_train_full)
    y_pred = knn_classifier.predict(X_val)
    accuracy = accuracy_score(y_val, y_pred)
    accuracies.append(accuracy)
    print(f"Accuracy with K={k}: {accuracy}")
    if accuracy > best_accuracy:
      best_accuracy = accuracy
      best_k = k

print(f"Best K: {best_k} with accuracy: {best_accuracy}")
```

---

### Important Points to Remember

*   KNN is a simple but powerful algorithm.
*   Choosing the right value of K is crucial for achieving good performance.
*   Data preprocessing (scaling) is essential.
*   KNN can be computationally expensive for large datasets.
*   Consider the bias-variance trade-off when selecting K.
*   Use appropriate evaluation metrics to assess the model's performance.
*   Be aware of the computational complexity and memory requirements of KNN.
*   For large datasets consider libraries that implement approximate nearest neighbor searches.
