---
title: "Implement KNN for multi-class classification."
subject: "MACHINE LEARNING LAB"
module: "Module 8: Implement the K"
branch: "Computer Science and Engineering"
semester: 5
topicId: "684162770fc9aa1fdbc8b961"
status: "completed"
scrapedAt: "2026-05-20T16:47:26.833Z"
---
## MACHINE LEARNING LAB - Module 8: Implement the K - Implement KNN for Multi-Class Classification

**Learning Outcomes:**

*   Understand the concept of multi-class classification.
*   Explain how KNN can be adapted for multi-class classification.
*   Implement KNN for multi-class classification using Python and relevant libraries (e.g., scikit-learn).
*   Evaluate the performance of the KNN model in a multi-class classification setting.
*   Identify factors that can influence the performance of KNN in multi-class classification.

---

**1. Introduction to Multi-Class Classification**

*   **Definition:** Multi-class classification is a classification problem where the goal is to assign each input to one of three or more classes.  Unlike binary classification (which has only two classes), multi-class classification requires a different approach for both model training and evaluation.

*   **Examples:**
    *   **Image Classification:** Identifying different breeds of dogs in an image (e.g., Labrador, German Shepherd, Poodle).
    *   **Text Categorization:** Classifying news articles into categories like sports, politics, technology, or entertainment.
    *   **Handwritten Digit Recognition:** Identifying handwritten digits (0-9).
    *   **Object Detection:** Identifying the type of objects in the image(e.g., car, person, bike).

*   **Contrast with Binary Classification:**  Binary classification aims to predict one of two possible outcomes (e.g., spam/not spam, yes/no, positive/negative). Multi-class classification expands this to more than two possible outcomes.

*   **Important Considerations:**
    *   **Data Preparation:** Data must be appropriately labeled with one of the multiple classes.
    *   **Model Selection:** Some models are inherently multi-class (e.g., Naive Bayes, Decision Trees, KNN). Others need adaptation (e.g., Logistic Regression can be adapted using one-vs-rest or one-vs-one strategies).
    *   **Evaluation Metrics:** Accuracy alone may not be sufficient. Metrics like precision, recall, F1-score, and confusion matrix are crucial for evaluating multi-class classifiers.

**2. KNN for Multi-Class Classification**

*   **How KNN Works (Review):** K-Nearest Neighbors (KNN) is a non-parametric, instance-based learning algorithm. For a new data point, it finds the `k` closest data points in the training data (based on a distance metric like Euclidean distance) and predicts the class based on the majority class among those `k` neighbors.

*   **Adapting KNN to Multi-Class:**  KNN is naturally suited for multi-class classification.  The algorithm inherently handles multiple classes without requiring significant modifications.  The prediction is made by simply counting the number of neighbors belonging to each class, and the class with the most neighbors "wins."

*   **Algorithm Steps:**
    1.  **Choose the value of K:** Determine the number of nearest neighbors to consider.
    2.  **Calculate Distances:** Calculate the distance between the new data point and all data points in the training dataset using a chosen distance metric (e.g., Euclidean, Manhattan, Minkowski).
    3.  **Find Nearest Neighbors:** Identify the K nearest neighbors based on the calculated distances.
    4.  **Count Class Occurrences:** Count the occurrences of each class among the K nearest neighbors.
    5.  **Predict the Class:** Assign the new data point to the class with the highest count (i.e., the majority class) among the K nearest neighbors.  In case of a tie, tie-breaking strategies are used (e.g., randomly selecting a class among the tied classes or reducing the value of k until a clear winner emerges).

*   **Example:**  Imagine we have data points belonging to three classes: A, B, and C.  A new data point comes in, and we choose K = 5.  The 5 nearest neighbors are: A, A, B, C, A. The counts are A:3, B:1, C:1. KNN would predict the new data point belongs to class A.

**3. Implementation with Python (Scikit-learn)**

```python
from sklearn.datasets import load_iris
from sklearn.model_selection import train_test_split
from sklearn.neighbors import KNeighborsClassifier
from sklearn.metrics import accuracy_score, classification_report, confusion_matrix
import numpy as np

# 1. Load the Iris dataset (a classic multi-class dataset)
iris = load_iris()
X = iris.data  # Features
y = iris.target # Target variable (0, 1, 2 corresponding to 3 iris species)

# 2. Split the data into training and testing sets
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.3, random_state=42)

# 3. Create a KNN classifier
knn = KNeighborsClassifier(n_neighbors=5) # You can experiment with different values of K

# 4. Train the KNN classifier on the training data
knn.fit(X_train, y_train)

# 5. Make predictions on the testing data
y_pred = knn.predict(X_test)

# 6. Evaluate the performance
accuracy = accuracy_score(y_test, y_pred)
print(f"Accuracy: {accuracy}")

print("Classification Report:")
print(classification_report(y_test, y_pred))

print("Confusion Matrix:")
print(confusion_matrix(y_test, y_pred))


# Example: Predicting the class of a new data point
new_data_point = np.array([[5.1, 3.5, 1.4, 0.2]]) # Example feature values
prediction = knn.predict(new_data_point)
print(f"Prediction for new data point: {iris.target_names[prediction[0]]}") #Translate to species name

```

*   **Explanation:**
    *   **`load_iris()`:** Loads the Iris dataset, which has three classes of iris flowers.
    *   **`train_test_split()`:** Splits the data into training and testing sets (70% training, 30% testing in this example).
    *   **`KNeighborsClassifier(n_neighbors=5)`:** Creates a KNN classifier object with `k=5`.
    *   **`knn.fit(X_train, y_train)`:** Trains the classifier using the training data.
    *   **`knn.predict(X_test)`:** Makes predictions on the test data.
    *   **`accuracy_score()`:** Calculates the accuracy of the predictions.
    *   **`classification_report()`:** Provides a detailed classification report including precision, recall, F1-score for each class.
    *   **`confusion_matrix()`:** Creates a confusion matrix, which shows the counts of true positive, true negative, false positive, and false negative for each class.
    *   **`knn.predict(new_data_point)`**: This line shows how to use the trained KNN model to predict the class of a new, unseen data point.

**4. Evaluating the Performance of KNN in Multi-Class Classification**

*   **Key Metrics:**
    *   **Accuracy:** The overall proportion of correctly classified instances.  While useful, accuracy can be misleading when classes are imbalanced.
    *   **Precision:** For each class, precision measures the proportion of instances predicted as that class that were actually that class (True Positives / (True Positives + False Positives)).
    *   **Recall:** For each class, recall measures the proportion of actual instances of that class that were correctly predicted (True Positives / (True Positives + False Negatives)).
    *   **F1-Score:** The harmonic mean of precision and recall, providing a balanced measure of performance for each class (2 * (Precision * Recall) / (Precision + Recall)).
    *   **Confusion Matrix:** A table that summarizes the classification results by showing the counts of true positives, true negatives, false positives, and false negatives for each class.  This helps to identify which classes are being confused with each other.

*   **Example (Interpreting Classification Report):**

```
              precision    recall  f1-score   support

           0       1.00      1.00      1.00        14
           1       0.92      1.00      0.96        13
           2       1.00      0.91      0.95        18

    accuracy                           0.98        45
   macro avg       0.97      0.97      0.97        45
weighted avg       0.98      0.98      0.98        45
```

    *   **Interpretation:**
        *   Class 0: Perfect precision and recall. All instances of class 0 were correctly classified.
        *   Class 1: High precision (92%) and perfect recall (100%).  Some instances were incorrectly predicted as class 1.
        *   Class 2: Perfect precision (100%) and good recall (91%). Some instances of class 2 were misclassified as another class.
        *   Overall accuracy is 98%.
        *   Macro average is the average of the unweighted mean per label.
        *   Weighted average is the average of the support-weighted mean per label.

*   **When to use different metrics:**
    *   **Imbalanced Datasets:** When classes are imbalanced (i.e., some classes have significantly more instances than others), accuracy can be misleading. Precision, recall, and F1-score are more informative.
    *   **Specific Requirements:** If the cost of false positives or false negatives is different for different classes, focus on the precision or recall of those specific classes. For example, in medical diagnosis, minimizing false negatives (i.e., missing a disease) is often more important than minimizing false positives.

**5. Factors Influencing KNN Performance in Multi-Class Classification**

*   **Value of K:**
    *   **Small K:**  Sensitive to noise and outliers. Can lead to overfitting.
    *   **Large K:**  Can smooth out decision boundaries but may lead to underfitting, especially if the data is complex.  Can also be computationally expensive.
    *   **Choosing K:**  Use cross-validation or grid search to find the optimal value of K for your specific dataset.  A common rule of thumb is to start with an odd number for K to avoid ties in binary classification, but this is less important in multi-class problems.  Consider the square root of the number of data points as a starting point.

*   **Distance Metric:**
    *   **Euclidean Distance:**  The most common distance metric.
    *   **Manhattan Distance:** (L1 distance) Useful when features are not on the same scale.
    *   **Minkowski Distance:** A generalization of Euclidean and Manhattan distance.
    *   **Choosing a Metric:** Experiment with different distance metrics to see which works best for your dataset.  Consider the characteristics of your features (e.g., scale, correlation) when choosing a distance metric.

*   **Feature Scaling:**
    *   KNN is sensitive to the scale of features. Features with larger values will have a greater influence on the distance calculations.
    *   **Standardization:** Scale features to have zero mean and unit variance.
    *   **Normalization:** Scale features to a range between 0 and 1.
    *   **Applying Scaling:** Use `StandardScaler` or `MinMaxScaler` from `sklearn.preprocessing` to scale your features.
        ```python
        from sklearn.preprocessing import StandardScaler

        scaler = StandardScaler()
        X_train_scaled = scaler.fit_transform(X_train)
        X_test_scaled = scaler.transform(X_test) # Use transform, not fit_transform on test data!

        knn = KNeighborsClassifier(n_neighbors=5)
        knn.fit(X_train_scaled, y_train)
        y_pred = knn.predict(X_test_scaled)
        ```

*   **Curse of Dimensionality:**
    *   In high-dimensional spaces, the distance between data points tends to become more uniform, making it difficult for KNN to distinguish between neighbors.
    *   **Addressing the Curse of Dimensionality:**
        *   **Feature Selection:** Select the most relevant features.
        *   **Dimensionality Reduction:** Use techniques like PCA (Principal Component Analysis) to reduce the number of features while preserving important information.

*   **Data Quality and Quantity:**
    *   KNN requires a sufficient amount of high-quality, labeled data to perform well.
    *   **Addressing Data Issues:**
        *   **Data Cleaning:** Remove outliers and handle missing values.
        *   **Data Augmentation:** Generate synthetic data to increase the size of the dataset, particularly for under-represented classes.

*   **Class Imbalance:**
    *   If one or more classes have significantly fewer instances than others, KNN may be biased towards the majority class(es).
    *   **Addressing Class Imbalance:**
        *   **Resampling Techniques:**
            *   **Oversampling:** Increase the number of instances in the minority class(es) (e.g., using SMOTE - Synthetic Minority Oversampling Technique).
            *   **Undersampling:** Decrease the number of instances in the majority class(es).
        *   **Cost-Sensitive Learning:** Assign different weights to different classes during training to penalize misclassification of minority classes more heavily.

**6. Practice Questions/Exercises**

1.  **Question:** Explain the difference between binary classification and multi-class classification. Give examples of each.

    **Answer:** Binary classification involves predicting one of two possible outcomes (e.g., spam/not spam, cat/dog). Multi-class classification involves predicting one of three or more possible outcomes (e.g., classifying handwritten digits 0-9, classifying fruits as apple, banana, orange, etc.).

2.  **Question:** How does KNN adapt for multi-class classification?

    **Answer:** KNN naturally adapts to multi-class classification by finding the `k` nearest neighbors and predicting the class based on the majority class among those neighbors.

3.  **Question:** What are some important metrics to consider when evaluating the performance of a KNN model in a multi-class classification setting, and why is accuracy alone sometimes insufficient?

    **Answer:** Precision, recall, F1-score, and the confusion matrix are important metrics. Accuracy alone can be misleading if the classes are imbalanced. For example, if 90% of the data belongs to one class, a model that always predicts that class will have 90% accuracy, but it's not a useful model.

4.  **Question:** Why is feature scaling important for KNN?  What are two common feature scaling techniques?

    **Answer:** KNN relies on distance calculations, and features with larger scales can dominate the distance calculations, leading to biased results. Common feature scaling techniques are standardization (scaling to zero mean and unit variance) and normalization (scaling to a range between 0 and 1).

5.  **Question:**  What is the "curse of dimensionality," and how can it affect KNN performance?  What are some ways to mitigate it?

    **Answer:** The curse of dimensionality refers to the fact that in high-dimensional spaces, the distance between data points tends to become more uniform, making it difficult for KNN to distinguish between neighbors.  This can lead to decreased accuracy. Mitigating techniques include feature selection and dimensionality reduction (e.g., PCA).

6.  **Exercise:**  Using the code provided in section 3, experiment with different values of `k` (e.g., 1, 3, 7, 11, 15) and observe how the accuracy and classification report change.  Also, try different distance metrics (e.g., `metric='manhattan'`). What value of K and metric produces the best performance on the Iris dataset?
7. **Exercise:** Experiment with scaling the data before applying KNN (as shown in section 5). Does the accuracy improve?

**7. Important Points to Remember**

*   KNN is a simple but powerful algorithm that is well-suited for multi-class classification.
*   The choice of K, the distance metric, and feature scaling are crucial factors that can influence the performance of KNN.
*   Evaluate the performance of KNN using appropriate metrics, such as precision, recall, F1-score, and the confusion matrix, especially when dealing with imbalanced datasets.
*   Be aware of the curse of dimensionality and consider using feature selection or dimensionality reduction techniques when working with high-dimensional data.
*   Always split your data into training and testing sets to evaluate the generalization performance of your model. Use cross validation during model selection to fine-tune the hyperparameter K.

By understanding these concepts and practicing the implementation, you will be well-equipped to use KNN for multi-class classification problems.
