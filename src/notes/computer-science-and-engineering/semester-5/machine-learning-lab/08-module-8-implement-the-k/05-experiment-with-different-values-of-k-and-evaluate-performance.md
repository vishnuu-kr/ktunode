---
title: "Experiment with different values of K and evaluate performance."
subject: "MACHINE LEARNING LAB"
module: "Module 8: Implement the K"
branch: "Computer Science and Engineering"
semester: 5
topicId: "684162770fc9aa1fdbc8b962"
status: "completed"
scrapedAt: "2026-05-20T16:47:27.560Z"
---
# MACHINE LEARNING LAB - Module 8: Implement the K - Experimenting with Different Values of K and Evaluating Performance

## Introduction

This module focuses on experimenting with different values of K in the K-Nearest Neighbors (KNN) algorithm and evaluating the resulting performance. Choosing the right value for K is crucial for the performance of KNN. A small value of K might lead to overfitting, while a large value might result in underfitting. Therefore, this module will cover the importance of K, how to choose it, and how to evaluate the model's performance for different K values.

## Learning Outcomes

By the end of this module, you will be able to:

*   Understand the impact of different K values on KNN performance.
*   Implement KNN with varying K values.
*   Evaluate the performance of KNN using metrics like accuracy, precision, recall, and F1-score.
*   Select an optimal K value using techniques like cross-validation.
*   Identify potential issues like overfitting and underfitting in relation to K.

## Key Concepts and Definitions

*   **K-Nearest Neighbors (KNN):** A non-parametric, supervised learning algorithm used for classification and regression.  It predicts the class (classification) or value (regression) of a new data point based on the majority class or average value of its K nearest neighbors in the training data.

*   **K Value:** Represents the number of neighbors considered when classifying or predicting the value of a new data point.  It is a hyperparameter that needs to be tuned for optimal performance.

*   **Distance Metric:**  A function used to calculate the distance between data points. Common distance metrics include:
    *   **Euclidean Distance:** The straight-line distance between two points.  Calculated as `sqrt(sum((x_i - y_i)^2))`
    *   **Manhattan Distance:** The sum of the absolute differences of their Cartesian coordinates. Calculated as `sum(|x_i - y_i|)`
    *   **Minkowski Distance:** A generalized metric that includes Euclidean and Manhattan distances as special cases.
    *   **Cosine Similarity:**  Measures the cosine of the angle between two vectors. Used when the magnitude of the vectors is not as important as their direction.

*   **Overfitting:**  When a model learns the training data too well, including noise and outliers, resulting in poor performance on unseen data (test data).  A small K value can lead to overfitting in KNN.

*   **Underfitting:**  When a model is too simple to capture the underlying patterns in the data, resulting in poor performance on both training and test data.  A large K value can lead to underfitting in KNN.

*   **Cross-Validation:** A technique used to estimate the performance of a model on unseen data by partitioning the data into multiple folds, training the model on some folds, and evaluating it on the remaining fold. This process is repeated multiple times with different folds used for evaluation.

*   **Hyperparameter Tuning:**  The process of finding the optimal values for hyperparameters of a model.  In KNN, K is a key hyperparameter that needs to be tuned.

*   **Accuracy:**  The proportion of correctly classified instances out of the total instances. `(True Positives + True Negatives) / (Total Instances)`

*   **Precision:** The proportion of correctly predicted positive instances out of all instances predicted as positive. `True Positives / (True Positives + False Positives)`

*   **Recall:** The proportion of correctly predicted positive instances out of all actual positive instances. `True Positives / (True Positives + False Negatives)`

*   **F1-Score:** The harmonic mean of precision and recall, providing a balanced measure of the model's performance. `2 * (Precision * Recall) / (Precision + Recall)`

## Impact of Different K Values

*   **Small K (e.g., K=1, 3):**
    *   **Pros:** Can capture complex decision boundaries and potentially perform well on the training data.
    *   **Cons:** Highly susceptible to noise and outliers, leading to overfitting.  High variance – the model's performance can vary significantly with small changes in the training data.
    *   **Example:** Consider a classification problem with noisy data. A K=1 classifier will be highly influenced by these noisy points, potentially misclassifying new data points near the noise.

*   **Large K (e.g., K=10, 20, 50):**
    *   **Pros:** Less sensitive to noise and outliers, resulting in a more stable model. Lower variance.
    *   **Cons:**  Can smooth out important decision boundaries, leading to underfitting.  Might not be able to capture the nuances of the data.
    *   **Example:** In a dataset with distinct classes, a very large K might average out the influence of the true neighbors with points from other classes, resulting in misclassification.

*   **Optimal K:** The value of K that balances the trade-off between overfitting and underfitting, resulting in the best performance on unseen data.  This is typically determined through experimentation and cross-validation.

## Implementing KNN with Varying K Values

This section provides a conceptual outline of the implementation. You can use libraries like scikit-learn in Python to easily implement KNN.

1.  **Import Libraries:** Import necessary libraries such as `scikit-learn` for KNN, data preprocessing, model evaluation, and `matplotlib` for visualization.

    ```python
    import numpy as np
    from sklearn.model_selection import train_test_split, cross_val_score, KFold
    from sklearn.neighbors import KNeighborsClassifier
    from sklearn.preprocessing import StandardScaler
    from sklearn.metrics import accuracy_score, precision_score, recall_score, f1_score
    import matplotlib.pyplot as plt
    import pandas as pd
    ```

2.  **Load and Preprocess Data:** Load your dataset and perform any necessary preprocessing steps such as:
    *   **Handling Missing Values:** Impute or remove missing values.
    *   **Feature Scaling:** Scale the features using `StandardScaler` or `MinMaxScaler` to ensure that features with different scales do not disproportionately influence the distance calculations.

    ```python
    # Example using a sample dataset (replace with your actual data loading)
    # Assuming your data is in a pandas DataFrame called 'df'
    df = pd.read_csv('your_dataset.csv')
    X = df.drop('target_variable', axis=1)  # Features
    y = df['target_variable']  # Target variable

    # Split the data into training and testing sets
    X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.3, random_state=42)

    # Scale the data
    scaler = StandardScaler()
    X_train_scaled = scaler.fit_transform(X_train)
    X_test_scaled = scaler.transform(X_test)

    ```

3.  **Train and Evaluate KNN for Different K Values:** Iterate through a range of K values, train a KNN model for each value, and evaluate its performance on the test set.

    ```python
    k_values = range(1, 31)  # Experiment with K values from 1 to 30
    accuracy_scores = []
    precision_scores = []
    recall_scores = []
    f1_scores = []

    for k in k_values:
        knn = KNeighborsClassifier(n_neighbors=k)
        knn.fit(X_train_scaled, y_train)
        y_pred = knn.predict(X_test_scaled)

        accuracy = accuracy_score(y_test, y_pred)
        precision = precision_score(y_test, y_pred, average='weighted')  # Use 'weighted' for multi-class
        recall = recall_score(y_test, y_pred, average='weighted')  # Use 'weighted' for multi-class
        f1 = f1_score(y_test, y_pred, average='weighted')  # Use 'weighted' for multi-class

        accuracy_scores.append(accuracy)
        precision_scores.append(precision)
        recall_scores.append(recall)
        f1_scores.append(f1)

        print(f"K={k}, Accuracy: {accuracy}, Precision: {precision}, Recall: {recall}, F1-Score: {f1}")

    ```

4.  **Visualize the Results:** Plot the performance metrics (accuracy, precision, recall, F1-score) against the K values to identify the optimal K.

    ```python
    plt.figure(figsize=(10, 6))
    plt.plot(k_values, accuracy_scores, marker='o', label='Accuracy')
    plt.plot(k_values, precision_scores, marker='o', label='Precision')
    plt.plot(k_values, recall_scores, marker='o', label='Recall')
    plt.plot(k_values, f1_scores, marker='o', label='F1-Score')

    plt.xlabel('K Value')
    plt.ylabel('Performance Metric')
    plt.title('KNN Performance vs. K Value')
    plt.legend()
    plt.grid(True)
    plt.show()
    ```

## Evaluating Performance

*   **Metrics:** Use appropriate metrics (Accuracy, Precision, Recall, F1-score) to evaluate the performance of the KNN model for different K values. The choice of metrics depends on the specific problem and the relative importance of different types of errors (false positives vs. false negatives). For imbalanced datasets, accuracy can be misleading, and precision, recall, and F1-score are more informative.

*   **Cross-Validation:**  Use cross-validation (e.g., k-fold cross-validation) to obtain a more robust estimate of the model's performance.  Cross-validation helps to avoid overfitting by evaluating the model on multiple different splits of the data.

    ```python
    # Example using cross-validation to find the best K
    k_values = range(1, 31)
    cv_scores = []

    for k in k_values:
        knn = KNeighborsClassifier(n_neighbors=k)
        scores = cross_val_score(knn, X_train_scaled, y_train, cv=10, scoring='accuracy') # 10-fold cross-validation
        cv_scores.append(scores.mean())
        print(f"K={k}, Cross-Validation Accuracy: {scores.mean()}")

    # Plot cross-validation scores
    plt.figure(figsize=(10, 6))
    plt.plot(k_values, cv_scores, marker='o')
    plt.xlabel('K Value')
    plt.ylabel('Cross-Validation Accuracy')
    plt.title('Cross-Validation Accuracy vs. K Value')
    plt.grid(True)
    plt.show()

    # Find the optimal K
    optimal_k = k_values[np.argmax(cv_scores)]
    print(f"Optimal K: {optimal_k}")
    ```

## Selecting an Optimal K Value

*   **Elbow Method (for visualization):** Plot the performance metric (e.g., accuracy) against K.  Look for an "elbow" in the plot, where the performance starts to plateau. This can indicate a good value for K. However, the elbow method isn't always clear-cut.

*   **Cross-Validation (for robust selection):** Perform cross-validation for different K values and select the K that yields the highest average cross-validation score.  This provides a more reliable estimate of the model's performance than simply evaluating on a single train/test split.

*   **Domain Knowledge:** Consider any domain-specific knowledge that might influence the choice of K.  For example, if you know that the data is very noisy, you might want to choose a larger K to reduce the impact of noise.

## Potential Issues and Mitigation Strategies

*   **Overfitting (Small K):**
    *   **Mitigation:** Increase the value of K. Use cross-validation to select a K that generalizes well to unseen data. Regularization techniques are not directly applicable to KNN.

*   **Underfitting (Large K):**
    *   **Mitigation:** Decrease the value of K. Consider using a different algorithm if KNN is consistently underfitting, as it might indicate that KNN is not suitable for the data.

*   **Computational Cost:** KNN can be computationally expensive, especially for large datasets, as it requires calculating the distance between each new data point and all points in the training data.
    *   **Mitigation:** Use techniques like KD-trees or ball trees to speed up the nearest neighbor search.  Consider using a smaller subset of the training data or using a different algorithm that is more scalable.

*   **Curse of Dimensionality:** KNN's performance can degrade in high-dimensional spaces because the distance between data points becomes less meaningful.
    *   **Mitigation:** Perform dimensionality reduction techniques such as Principal Component Analysis (PCA) or feature selection to reduce the number of features.

## Practice Questions and Exercises

1.  **Explain the difference between overfitting and underfitting in the context of KNN.**

    *Answer:* Overfitting occurs when the KNN model learns the training data too well, including noise, typically happening with small K values. Underfitting happens when the model is too simple to capture the underlying patterns, often occurring with large K values.*

2.  **How does the choice of distance metric affect the performance of KNN? Give examples.**

    *Answer:* The choice of distance metric influences how similarity between data points is measured. Euclidean distance is suitable for continuous data where the magnitude of the values matters. Manhattan distance is suitable for data with ordinal features or when the directions of the axes are significant. Cosine similarity is appropriate when the direction of the vectors is more important than their magnitude, such as in text analysis.*

3.  **Describe how you would use cross-validation to select the optimal value of K for a KNN classifier.**

    *Answer:* I would iterate through a range of K values. For each K, I would perform k-fold cross-validation, training the KNN model on a subset of the data and evaluating it on the remaining fold. I would then calculate the average performance metric (e.g., accuracy, F1-score) across all folds. The K value that yields the highest average performance would be considered the optimal K.*

4.  **What are some strategies to mitigate the computational cost of KNN for large datasets?**

    *Answer:* Strategies include using data structures like KD-trees or ball trees to speed up the nearest neighbor search, reducing the size of the training dataset by selecting a representative subset, or using dimensionality reduction techniques to reduce the number of features. Consider using approximate nearest neighbor algorithms.*

5.  **Implement KNN with k=3 and k=15 on the Iris dataset. Evaluate the performance using accuracy. Which K performs better and why might that be?**

    *Answer:*
    ```python
    from sklearn.datasets import load_iris
    from sklearn.model_selection import train_test_split
    from sklearn.neighbors import KNeighborsClassifier
    from sklearn.metrics import accuracy_score

    # Load the Iris dataset
    iris = load_iris()
    X, y = iris.data, iris.target

    # Split the data into training and testing sets
    X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.3, random_state=42)

    # KNN with k=3
    knn_3 = KNeighborsClassifier(n_neighbors=3)
    knn_3.fit(X_train, y_train)
    y_pred_3 = knn_3.predict(X_test)
    accuracy_3 = accuracy_score(y_test, y_pred_3)
    print(f"Accuracy with K=3: {accuracy_3}")

    # KNN with k=15
    knn_15 = KNeighborsClassifier(n_neighbors=15)
    knn_15.fit(X_train, y_train)
    y_pred_15 = knn_15.predict(X_test)
    accuracy_15 = accuracy_score(y_test, y_pred_15)
    print(f"Accuracy with K=15: {accuracy_15}")

    # Explanation:
    # The specific outcome will vary depending on the random split, but often K=3 performs slightly better due to the dataset's size and class separation.
    # K=15 might be too large and cause the model to over-smooth the boundaries and underfit.  A smaller K allows for more flexible decision boundaries.
    ```

## Important Points to Remember

*   The optimal K value is dataset-dependent and should be determined through experimentation.
*   Cross-validation is crucial for obtaining a robust estimate of model performance.
*   Feature scaling is generally recommended for KNN to ensure that all features contribute equally to the distance calculation.
*   Consider the trade-off between bias and variance when choosing K.  Small K values have low bias and high variance, while large K values have high bias and low variance.
*   Be aware of the computational cost of KNN, especially for large datasets.
*   For imbalanced datasets, use metrics like precision, recall, and F1-score, as accuracy can be misleading.
