---
title: "Implement and train a Multilayer Feed-Forward Network (MLP) on the Wine Quality dataset. Experiment with different numbers of hidden layers and neurons, and discuss how these choices affect the network’s performance."
subject: "MACHINE LEARNING LAB"
module: "Module 13: Implement and train a Multilayer Feed"
branch: "Computer Science and Engineering"
semester: 5
topicId: "684162770fc9aa1fdbc8b981"
status: "completed"
scrapedAt: "2026-05-20T16:47:46.635Z"
---
## MACHINE LEARNING LAB: Module 13 - Multilayer Feed-Forward Network (MLP) on Wine Quality Dataset

**Topic:** Implement and train a Multilayer Feed-Forward Network (MLP) on the Wine Quality dataset. Experiment with different numbers of hidden layers and neurons, and discuss how these choices affect the network’s performance.

**Description:** This module focuses on building and training an MLP to predict wine quality, exploring the impact of network architecture on performance.

**Learning Outcomes:**

*   Understand the architecture and workings of a Multilayer Perceptron (MLP).
*   Implement an MLP using a machine learning library (e.g., scikit-learn).
*   Load, preprocess, and prepare the Wine Quality dataset for training.
*   Train and evaluate an MLP model on the Wine Quality dataset.
*   Experiment with different numbers of hidden layers and neurons.
*   Analyze the impact of network architecture on model performance (accuracy, precision, recall, F1-score).
*   Identify potential issues like overfitting and underfitting.
*   Understand and apply techniques to mitigate overfitting (e.g., regularization).

---

### 1. Introduction to Multilayer Perceptrons (MLPs)

*   **Definition:** A Multilayer Perceptron (MLP) is a class of feedforward artificial neural network. It consists of at least three layers of nodes: an input layer, one or more hidden layers, and an output layer.

*   **Architecture:**
    *   **Input Layer:** Receives the input features. The number of neurons in this layer corresponds to the number of features in the dataset.
    *   **Hidden Layers:**  Perform non-linear transformations on the input data.  Each layer consists of a set of neurons, each connected to all neurons in the previous layer (fully connected).
    *   **Output Layer:** Produces the final predictions. The number of neurons in this layer depends on the task (e.g., a single neuron for regression, multiple neurons for multi-class classification).

*   **Working Mechanism:**
    1.  **Forward Propagation:** Input data is fed forward through the network. Each neuron calculates a weighted sum of its inputs, adds a bias term, and applies an activation function.  The output of each neuron becomes the input to the next layer.
    2.  **Activation Function:** Introduces non-linearity. Common activation functions include:
        *   **Sigmoid:**  Outputs values between 0 and 1.  (Mathematically:  `1 / (1 + exp(-x))`)
        *   **ReLU (Rectified Linear Unit):** Outputs the input directly if it is positive, otherwise, it outputs zero. (Mathematically: `max(0, x)`)
        *   **Tanh (Hyperbolic Tangent):** Outputs values between -1 and 1. (Mathematically: `(exp(x) - exp(-x)) / (exp(x) + exp(-x))`)
    3.  **Loss Function:** Measures the difference between the network's predictions and the actual target values. Examples:
        *   **Mean Squared Error (MSE):** For regression tasks.
        *   **Cross-Entropy Loss:** For classification tasks.
    4.  **Backpropagation:** Calculates the gradients of the loss function with respect to the network's weights and biases. These gradients indicate how much each weight and bias contributes to the error.
    5.  **Optimization:** Updates the weights and biases based on the calculated gradients using an optimization algorithm (e.g., Gradient Descent, Adam, SGD). The goal is to minimize the loss function.

*   **Key Concepts:**
    *   **Weights:** Adjustable parameters that determine the strength of the connection between neurons.
    *   **Biases:**  Adjustable parameters that shift the activation function.
    *   **Learning Rate:** A hyperparameter that controls the step size during weight updates.
    *   **Epoch:** One complete pass through the entire training dataset.
    *   **Batch Size:** The number of training examples used in one iteration of the optimization algorithm.

---

### 2. Implementing an MLP with scikit-learn

*   **`sklearn.neural_network.MLPClassifier`:**  For classification tasks.
*   **`sklearn.neural_network.MLPRegressor`:**  For regression tasks.

*   **Example Code (Classification):**

```python
from sklearn.neural_network import MLPClassifier
from sklearn.model_selection import train_test_split
from sklearn.metrics import accuracy_score
from sklearn.preprocessing import StandardScaler
import pandas as pd

# 1. Load the data (replace 'winequality-red.csv' with your data path)
data = pd.read_csv('winequality-red.csv', sep=';')

# 2. Data Preprocessing (Example: Define "good" vs "bad" wine based on quality)
data['quality'] = data['quality'].apply(lambda x: 1 if x >= 6 else 0) # Binary classification: 1 = good, 0 = bad
X = data.drop('quality', axis=1)
y = data['quality']

# 3. Split the data into training and testing sets
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)

# 4. Feature Scaling (Important for MLP performance)
scaler = StandardScaler()
X_train = scaler.fit_transform(X_train)
X_test = scaler.transform(X_test)

# 5. Create an MLPClassifier
mlp = MLPClassifier(hidden_layer_sizes=(100, 50),  # Two hidden layers, 100 and 50 neurons respectively
                    activation='relu',
                    solver='adam',
                    random_state=42,
                    max_iter=300) # Adjust max_iter as needed

# 6. Train the model
mlp.fit(X_train, y_train)

# 7. Make predictions
y_pred = mlp.predict(X_test)

# 8. Evaluate the model
accuracy = accuracy_score(y_test, y_pred)
print(f"Accuracy: {accuracy}")

# 9. Further Evaluation (Precision, Recall, F1-score)
from sklearn.metrics import classification_report
print(classification_report(y_test, y_pred))
```

*   **Explanation:**
    *   **`hidden_layer_sizes`:**  A tuple specifying the number of neurons in each hidden layer.  For example, `(100, 50)` creates two hidden layers with 100 and 50 neurons, respectively.  An empty tuple `()` creates a single-layer perceptron (no hidden layers).
    *   **`activation`:** The activation function to use.  Common options are 'relu', 'tanh', and 'logistic' (sigmoid).
    *   **`solver`:** The optimization algorithm to use. Options include 'adam', 'lbfgs', and 'sgd'. 'adam' is generally a good choice.
    *   **`random_state`:**  For reproducibility.
    *   **`max_iter`:** The maximum number of iterations for the optimization algorithm.  Increase this if the solver is not converging (you'll often see a warning).
    *   **`scaler`:**  StandardScaler is used for feature scaling.  This is crucial for MLP performance.  Other scalers include MinMaxScaler and RobustScaler.

---

### 3. Loading, Preprocessing, and Preparing the Wine Quality Dataset

*   **Dataset Source:** The Wine Quality dataset is often available from the UCI Machine Learning Repository or can be readily found online in CSV format.
*   **Features:**
    *   Fixed acidity
    *   Volatile acidity
    *   Citric acid
    *   Residual sugar
    *   Chlorides
    *   Free sulfur dioxide
    *   Total sulfur dioxide
    *   Density
    *   pH
    *   Sulphates
    *   Alcohol
*   **Target Variable:**  "quality" (typically ranges from 0 to 10).

*   **Preprocessing Steps:**

    1.  **Load the data:** Use `pandas.read_csv()` to load the dataset. Specify the separator (`;` in this case).
    2.  **Data Cleaning:** Handle missing values (if any). Check for and remove duplicate rows.
    3.  **Feature Scaling:**  Scale the features using `StandardScaler` or `MinMaxScaler`. This is very important for MLP performance, as features with larger ranges can dominate the learning process.
    4.  **Data Splitting:** Split the data into training and testing sets using `train_test_split`. A common split is 80% for training and 20% for testing.
    5.  **Target Variable Transformation (if needed):**  The "quality" variable is typically ordinal (an ordered categorical variable).
        *   **Classification:**  Convert the quality score to a binary or multi-class label.  For example, you could classify wines as "good" (quality >= 6) or "bad" (quality < 6). Or you could create a multi-class classification problem with different quality ranges (e.g., low, medium, high).
        *   **Regression:**  Leave the quality score as a continuous variable if you want to predict the exact quality score (but be aware of the limited scale).  Regression might not be appropriate due to the relatively small scale of the output feature.

---

### 4. Training and Evaluating the MLP Model

*   **Training:** Use the `fit()` method of the `MLPClassifier` or `MLPRegressor` to train the model on the training data.
*   **Evaluation:**  Use the trained model to make predictions on the test data using the `predict()` method.
*   **Evaluation Metrics:**
    *   **Classification:**
        *   **Accuracy:** The proportion of correctly classified instances.
        *   **Precision:** The proportion of correctly predicted positive instances out of all instances predicted as positive.  (TP / (TP + FP))
        *   **Recall:** The proportion of correctly predicted positive instances out of all actual positive instances. (TP / (TP + FN))
        *   **F1-score:** The harmonic mean of precision and recall. A balanced measure. (2 * (Precision * Recall) / (Precision + Recall))
        *   **Confusion Matrix:** A table showing the counts of true positives, true negatives, false positives, and false negatives.
    *   **Regression:**
        *   **Mean Squared Error (MSE):** The average squared difference between the predicted and actual values.
        *   **Root Mean Squared Error (RMSE):** The square root of the MSE.
        *   **R-squared (Coefficient of Determination):** The proportion of variance in the dependent variable that is predictable from the independent variables.  Ranges from 0 to 1, with higher values indicating a better fit.

*   **Code Example (Evaluation):** (Continuing from the previous code example)

```python
from sklearn.metrics import accuracy_score, precision_score, recall_score, f1_score, confusion_matrix

# Make predictions
y_pred = mlp.predict(X_test)

# Calculate evaluation metrics
accuracy = accuracy_score(y_test, y_pred)
precision = precision_score(y_test, y_pred) #For binary classification. Use average='weighted' for multiclass
recall = recall_score(y_test, y_pred)     #For binary classification. Use average='weighted' for multiclass
f1 = f1_score(y_test, y_pred)           #For binary classification. Use average='weighted' for multiclass
confusion = confusion_matrix(y_test, y_pred)

print(f"Accuracy: {accuracy}")
print(f"Precision: {precision}")
print(f"Recall: {recall}")
print(f"F1-score: {f1}")
print(f"Confusion Matrix:\n{confusion}")
```

---

### 5. Experimenting with Network Architecture

*   **Number of Hidden Layers:**
    *   **More layers:** Can potentially learn more complex patterns in the data, but also increases the risk of overfitting and requires more training time.
    *   **Fewer layers:** Might not be able to capture complex relationships, leading to underfitting.
    *   **Rule of Thumb:** Start with a small number of layers (e.g., 1 or 2) and increase the number of layers if necessary.  There isn't a universally optimal number of layers - it depends on the complexity of the data.

*   **Number of Neurons per Layer:**
    *   **More neurons:** Increases the model's capacity to learn complex patterns, but also increases the risk of overfitting.
    *   **Fewer neurons:** May lead to underfitting.
    *   **Rule of Thumb:** Experiment with different numbers of neurons.  A common approach is to start with a number of neurons roughly equal to the number of input features.

*   **Example Experiments:**

    1.  **Vary the number of hidden layers:**  Train models with 0, 1, 2, and 3 hidden layers, keeping the number of neurons per layer constant.
    2.  **Vary the number of neurons per layer:** Train models with different numbers of neurons in each layer (e.g., 10, 50, 100, 200), keeping the number of hidden layers constant.
    3.  **Try different combinations:** Experiment with different combinations of hidden layers and neurons per layer.

*   **Code Modification Example:**

```python
# Experiment with different hidden layer sizes
hidden_layer_sizes_list = [(50,), (100,), (100, 50), (100, 50, 25)] #Different architectures

for hidden_layer_sizes in hidden_layer_sizes_list:
    mlp = MLPClassifier(hidden_layer_sizes=hidden_layer_sizes, activation='relu', solver='adam', random_state=42, max_iter=300)
    mlp.fit(X_train, y_train)
    y_pred = mlp.predict(X_test)
    accuracy = accuracy_score(y_test, y_pred)
    print(f"Hidden Layer Sizes: {hidden_layer_sizes}, Accuracy: {accuracy}")
```

---

### 6. Analyzing the Impact of Network Architecture

*   **Overfitting:** Occurs when the model learns the training data too well, including the noise. The model performs well on the training data but poorly on the test data.
    *   **Symptoms:** High accuracy on the training set but low accuracy on the test set.  Large difference between training and validation performance.
    *   **Causes:** Complex models (many layers, many neurons), insufficient training data, training for too many epochs.
    *   **Mitigation Techniques:**
        *   **Regularization (L1, L2):** Adds a penalty to the loss function based on the magnitude of the weights, discouraging large weights.  Use the `alpha` parameter in `MLPClassifier` and `MLPRegressor` to control the strength of the regularization.
        *   **Dropout:** Randomly drops out neurons during training, preventing the network from relying too heavily on specific neurons. (not directly available in sklearn's MLP, but libraries like TensorFlow or PyTorch provide it).
        *   **Early Stopping:** Monitor the performance on a validation set and stop training when the performance starts to degrade.  (`early_stopping=True` in `MLPClassifier` and `MLPRegressor`).
        *   **Data Augmentation:** Increase the size of the training dataset by creating modified versions of existing data points (e.g., by adding noise). (May not be applicable to all datasets).
        *   **Simplify the Model:** Reduce the number of layers or neurons.

*   **Underfitting:** Occurs when the model is too simple to capture the underlying patterns in the data. The model performs poorly on both the training and test data.
    *   **Symptoms:** Low accuracy on both the training and test sets.
    *   **Causes:** Simple models (few layers, few neurons), insufficient training data.
    *   **Mitigation Techniques:**
        *   **Increase Model Complexity:** Add more layers or neurons.
        *   **Feature Engineering:** Create new features that capture more relevant information from the data.
        *   **Train for Longer:** Increase the number of epochs.

*   **Interpreting Results:**

    *   **Accuracy vs. Complexity:** Plot the accuracy (or other evaluation metrics) against the number of hidden layers or neurons. Look for the point where adding more complexity no longer improves performance significantly and may even lead to overfitting.
    *   **Training vs. Testing Performance:** Compare the performance on the training and testing sets. A large gap between the two indicates overfitting.
    *   **Precision, Recall, F1-score:** Consider these metrics in addition to accuracy, especially when dealing with imbalanced datasets (where one class has significantly more instances than the other).

---

### 7. Important Points to Remember

*   **Feature Scaling is Crucial:**  MLPs are sensitive to the scale of the input features. Always scale your data before training.
*   **Experiment with Hyperparameters:**  The number of hidden layers, the number of neurons per layer, the activation function, the solver, the learning rate, and the regularization strength are all important hyperparameters that can significantly affect the model's performance. Experiment with different values to find the optimal configuration.
*   **Monitor Training and Validation Performance:** Use a validation set to monitor the model's performance during training and detect overfitting.
*   **Avoid Overfitting:** Use regularization techniques, early stopping, and data augmentation to prevent overfitting.
*   **Start Simple:** Start with a simple model (few layers, few neurons) and gradually increase the complexity if necessary.
*   **Understand the Data:** Thoroughly understand the dataset and the problem you are trying to solve. This will help you make informed decisions about the model architecture and hyperparameters.

---

### Practice Questions/Exercises

1.  **Data Loading & Preprocessing:** Load the Wine Quality dataset (red or white).  How would you handle missing values if they were present? Provide code.
    *   **Answer:**
        ```python
        import pandas as pd

        # Load the dataset
        data = pd.read_csv('winequality-red.csv', sep=';')

        # Check for missing values
        print(data.isnull().sum())

        # Handling missing values (if any - using median imputation as an example)
        for column in data.columns:
            if data[column].isnull().any(): # Check if a column has any NaN values
                median_value = data[column].median()
                data[column].fillna(median_value, inplace=True)

        print(data.isnull().sum()) # Confirm no more missing values
        ```

2.  **Binary Classification:** Convert the wine quality score to a binary classification problem (good/bad). Write the code to create a new column 'quality_binary' where wines with quality >= 6 are classified as 'good' (1) and others as 'bad' (0).
    *   **Answer:**
        ```python
        import pandas as pd

        data = pd.read_csv('winequality-red.csv', sep=';') # Load data

        # Create a binary quality column
        data['quality_binary'] = data['quality'].apply(lambda x: 1 if x >= 6 else 0)

        print(data[['quality', 'quality_binary']].head())
        ```

3.  **Data Splitting & Scaling:** Split the Wine Quality dataset into training and testing sets (80/20 split). Scale the features using StandardScaler. Provide the code.
    *   **Answer:**
        ```python
        from sklearn.model_selection import train_test_split
        from sklearn.preprocessing import StandardScaler
        import pandas as pd

        data = pd.read_csv('winequality-red.csv', sep=';')
        data['quality_binary'] = data['quality'].apply(lambda x: 1 if x >= 6 else 0)

        X = data.drop(['quality', 'quality_binary'], axis=1) # drop both quality features
        y = data['quality_binary']

        # Split the data
        X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)

        # Scale the features
        scaler = StandardScaler()
        X_train = scaler.fit_transform(X_train)
        X_test = scaler.transform(X_test)

        print("Shape of X_train:", X_train.shape)
        print("Shape of X_test:", X_test.shape)
        ```

4.  **MLP Training & Evaluation:** Train an MLPClassifier with one hidden layer of 50 neurons on the Wine Quality dataset (after preprocessing). Evaluate the model using accuracy, precision, recall, and F1-score.
    *   **Answer:** (combining previous components)
        ```python
        from sklearn.neural_network import MLPClassifier
        from sklearn.model_selection import train_test_split
        from sklearn.preprocessing import StandardScaler
        from sklearn.metrics import accuracy_score, precision_score, recall_score, f1_score
        import pandas as pd

        # Load data
        data = pd.read_csv('winequality-red.csv', sep=';')
        data['quality_binary'] = data['quality'].apply(lambda x: 1 if x >= 6 else 0)

        # Prepare data
        X = data.drop(['quality', 'quality_binary'], axis=1)
        y = data['quality_binary']

        # Split data
        X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)

        # Scale data
        scaler = StandardScaler()
        X_train = scaler.fit_transform(X_train)
        X_test = scaler.transform(X_test)

        # Create and train the model
        mlp = MLPClassifier(hidden_layer_sizes=(50,), activation='relu', solver='adam', random_state=42, max_iter=300)
        mlp.fit(X_train, y_train)

        # Make predictions
        y_pred = mlp.predict(X_test)

        # Evaluate the model
        accuracy = accuracy_score(y_test, y_pred)
        precision = precision_score(y_test, y_pred)
        recall = recall_score(y_test, y_pred)
        f1 = f1_score(y_test, y_pred)

        print(f"Accuracy: {accuracy}")
        print(f"Precision: {precision}")
        print(f"Recall: {recall}")
        print(f"F1-score: {f1}")
        ```

5.  **Experimentation:** Train three different MLPClassifiers with the following hidden layer sizes: (100,), (50, 25), and (200, 100, 50).  Report the accuracy of each model on the test set. Which architecture performed best? Why might that be the case?
    *   **Answer:** (Similar structure to previous examples, but trains multiple models and compares accuracies.)  The best architecture is data dependent, but generally, more complex models are able to learn more intricate patterns, to a point.  Going beyond that point typically results in overfitting on the *training* set at the detriment to general performance on the *test* set.

6.  **Overfitting:**  Explain what overfitting is in the context of MLPs.  Describe two techniques you can use to mitigate overfitting when training an MLP.
    *   **Answer:** Overfitting occurs when the model learns the training data too well, including the noise, and performs poorly on unseen data. Two mitigation techniques are:
        *   **Regularization:** Adds a penalty to the loss function based on the magnitude of the weights. (L1/L2)
        *   **Early Stopping:** Monitor the performance on a validation set and stop training when the performance starts to degrade.

These notes provide a comprehensive foundation for implementing and training MLPs on the Wine Quality dataset. Remember to experiment, analyze your results, and adapt your approach based on the specific characteristics of your data and problem. Good luck!
