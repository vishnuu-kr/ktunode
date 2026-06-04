---
title: "Supervised Learning - Basics of supervised learning, Linear classifiers: 
perceptron, logistic regression, Support vector machines (SVM)  (Text 1, 
Chapter 4)"
subject: "PATTERN RECOGNITION"
module: "Module 3: Supervised Learning "
branch: "Computer Science and Engineering"
semester: 4
topicId: "684162750fc9aa1fdbc8b0be"
status: "completed"
scrapedAt: "2026-05-20T16:15:11.817Z"
---
# PATTERN RECOGNITION - MODULE 3: SUPERVISED LEARNING
## Topic: Supervised Learning - Basics & Linear Classifiers (Perceptron, Logistic Regression, SVM) (Chapter 4, Text 1)

**Learning Outcomes:**

*   Understand the fundamental concepts of supervised learning.
*   Describe the working principles of linear classifiers.
*   Explain the Perceptron algorithm, including its strengths and weaknesses.
*   Explain the concept of Logistic Regression and its application as a classifier.
*   Describe the principles of Support Vector Machines (SVM) and their advantages.
*   Compare and contrast the different linear classifiers discussed.
*   Apply linear classifiers to simple classification problems.

---

**1. Basics of Supervised Learning**

*   **Definition:** Supervised learning is a type of machine learning where an algorithm learns a function that maps an input to an output based on example input-output pairs.  The algorithm receives labeled data, meaning the training data includes both the input features and the correct output (or target) for each example.

*   **Key Concepts:**
    *   **Training Data:** A set of labeled examples used to train the model.  Each example consists of:
        *   **Input Features (x):**  Attributes describing the instance.  Represented as a vector.  Example: `x = [height, weight, age]` for a person.
        *   **Target/Label (y):** The desired output or class for the input.  In classification, `y` is a categorical label (e.g., "cat", "dog").  In regression, `y` is a continuous value (e.g., price, temperature).
    *   **Hypothesis (h):** The function learned by the algorithm.  It attempts to predict the target `y` for a given input `x`. `h(x) ≈ y`
    *   **Loss Function (L):**  Measures the difference between the predicted output `h(x)` and the true target `y`.  The goal is to minimize the loss.  Examples: Mean Squared Error (MSE) for regression, Cross-Entropy loss for classification.
    *   **Model Parameters (θ):**  The adjustable parameters of the hypothesis function that are learned during training.  The algorithm aims to find the optimal values of `θ` that minimize the loss function.
    *   **Generalization:** The ability of the learned model to accurately predict the output for unseen data (data not used during training).  A good model generalizes well.
    *   **Overfitting:**  When a model learns the training data too well, including the noise.  This results in poor generalization to unseen data.
    *   **Underfitting:**  When a model is too simple to capture the underlying patterns in the data.  This results in poor performance on both training and unseen data.

*   **Types of Supervised Learning:**
    *   **Classification:**  Predicting a categorical label (e.g., spam/not spam, cat/dog/bird).
    *   **Regression:** Predicting a continuous value (e.g., house price, temperature).

*   **General Supervised Learning Process:**
    1.  **Data Collection:** Gather labeled training data.
    2.  **Data Preprocessing:** Clean, transform, and prepare the data (e.g., handle missing values, feature scaling).
    3.  **Model Selection:** Choose an appropriate supervised learning algorithm (e.g., Perceptron, Logistic Regression, SVM).
    4.  **Training:** Train the model using the training data to learn the model parameters.  This involves minimizing the loss function.
    5.  **Validation/Hyperparameter Tuning:** Use a validation set to tune hyperparameters (parameters that control the learning process itself) to improve generalization performance.  Techniques like cross-validation are often used.
    6.  **Testing:** Evaluate the model's performance on a separate test set to estimate its generalization ability on unseen data.
    7.  **Deployment:** Deploy the trained model to make predictions on new, unseen data.

*   **Example:**  Predicting whether an email is spam or not spam.
    *   **Input Features (x):**  Words in the email, sender address, subject line, etc.
    *   **Target/Label (y):**  "Spam" or "Not Spam".
    *   **Algorithm:**  Could be Logistic Regression, SVM, etc.

---

**2. Linear Classifiers**

*   **Definition:**  A linear classifier is a classification model that makes its predictions based on a linear combination of the input features. The decision boundary is a hyperplane (a line in 2D, a plane in 3D, etc.).

*   **General Form:**  The hypothesis function for a linear classifier can be represented as: `h(x) = w^T x + b`, where:
    *   `x` is the input feature vector.
    *   `w` is the weight vector (also called the coefficient vector).
    *   `b` is the bias (also called the intercept).
    *   `w^T` denotes the transpose of the weight vector.

*   **Decision Rule:**  The classifier makes a prediction based on the sign of `h(x)`:
    *   If `h(x) >= 0`, predict class +1.
    *   If `h(x) < 0`, predict class -1.

*   **Geometric Interpretation:**  The equation `w^T x + b = 0` defines the decision boundary (a hyperplane).  The weight vector `w` is orthogonal (perpendicular) to the decision boundary. The bias `b` determines the offset of the decision boundary from the origin.

*   **Advantages of Linear Classifiers:**
    *   Simple to understand and implement.
    *   Computationally efficient, especially for large datasets.
    *   Can be effective when the data is linearly separable or approximately linearly separable.

*   **Disadvantages of Linear Classifiers:**
    *   Limited in their ability to model complex, non-linear relationships.
    *   May perform poorly if the data is not linearly separable.

*   **Types of Linear Classifiers (covered in detail below):**
    *   Perceptron
    *   Logistic Regression
    *   Support Vector Machines (SVM)

---

**3. Perceptron**

*   **Definition:** The Perceptron is a simple linear classifier that learns a decision boundary by iteratively updating its weights based on misclassified training examples.  It's a single-layer neural network.

*   **Algorithm:**
    1.  **Initialization:** Initialize the weight vector `w` and bias `b` (often to small random values or zero).
    2.  **Iteration:** Repeat the following steps for a specified number of epochs (or until convergence):
        *   For each training example `(x_i, y_i)`:
            *   Calculate the prediction: `y_hat = sign(w^T x_i + b)`.  `sign(z)` is 1 if `z >= 0`, and -1 if `z < 0`.
            *   **Update Rule:** If the prediction `y_hat` is incorrect (i.e., `y_hat != y_i`):
                *   `w = w + η * y_i * x_i`
                *   `b = b + η * y_i`
                where `η` (eta) is the learning rate (a small positive constant).

*   **Learning Rate (η):**  Controls the size of the weight updates.  A smaller learning rate leads to slower convergence but may avoid overshooting the optimal solution.

*   **Strengths of the Perceptron:**
    *   Simple and easy to implement.
    *   Guaranteed to converge if the data is linearly separable.
    *   Fast training.

*   **Weaknesses of the Perceptron:**
    *   Only works for linearly separable data. If the data is not linearly separable, the algorithm will not converge and will oscillate.
    *   Sensitive to the order of training examples.
    *   Does not provide probabilistic outputs (only hard classifications).

*   **Example:** Consider the following training data in 2D:

    | x1 | x2 | y |
    |---|---|---|
    | 1 | 1 | 1 |
    | 2 | 2 | 1 |
    | 3 | 1 | -1 |
    | 1 | 3 | -1 |

    Let's initialize `w = [0, 0]` and `b = 0`, and `η = 0.1`.  We will iterate through the training data. Let's say the first example is (1,1,1).
    `y_hat = sign(0*1 + 0*1 + 0) = sign(0) = 1`.  Since `y_hat = y = 1`, no update is needed.

    Let's say the second example is (2,2,1).
    `y_hat = sign(0*2 + 0*2 + 0) = sign(0) = 1`.  Since `y_hat = y = 1`, no update is needed.

    Let's say the third example is (3,1,-1).
    `y_hat = sign(0*3 + 0*1 + 0) = sign(0) = 1`.  Since `y_hat != y`, we need to update:
    `w = [0, 0] + 0.1 * (-1) * [3, 1] = [-0.3, -0.1]`
    `b = 0 + 0.1 * (-1) = -0.1`

    We continue this process until convergence.  (Note: This data *is* linearly separable, so the Perceptron *will* converge.)

*   **Important Point:**  The Perceptron learning rule aims to move the decision boundary closer to correctly classifying the misclassified example.

---

**4. Logistic Regression**

*   **Definition:**  Logistic Regression is a linear classifier that models the probability of a data point belonging to a particular class using the sigmoid function (also known as the logistic function).  Despite its name, it's used for *classification*, not regression.

*   **Sigmoid Function:** `σ(z) = 1 / (1 + exp(-z))`.  It maps any real number `z` to a value between 0 and 1.  The output can be interpreted as the probability of belonging to class 1.

*   **Hypothesis Function:** `h(x) = σ(w^T x + b)`.  This gives the probability that the input `x` belongs to class 1.

*   **Decision Rule:**
    *   If `h(x) >= 0.5`, predict class 1.
    *   If `h(x) < 0.5`, predict class 0.

*   **Loss Function:**  Cross-Entropy Loss (also known as Log Loss).  This loss function is specifically designed for probabilistic predictions.  For a single example:
    *   `L(y, h(x)) = -[y * log(h(x)) + (1 - y) * log(1 - h(x))]`
    where `y` is the true label (0 or 1) and `h(x)` is the predicted probability.

*   **Training:**  The goal is to find the optimal values of `w` and `b` that minimize the cross-entropy loss.  This is typically done using gradient descent or other optimization algorithms.

*   **Gradient Descent:** An iterative optimization algorithm that updates the parameters in the direction of the negative gradient of the loss function.  The update rules are:
    *   `w = w - η * ∂L/∂w`
    *   `b = b - η * ∂L/∂b`
    where `η` is the learning rate.

*   **Strengths of Logistic Regression:**
    *   Simple and easy to interpret.
    *   Provides probabilistic outputs (probabilities of belonging to each class).
    *   Efficient to train.
    *   Well-suited for binary classification problems.
    *   Can be extended to multi-class classification using techniques like One-vs-Rest (OvR) or Multinomial Logistic Regression.

*   **Weaknesses of Logistic Regression:**
    *   Assumes a linear relationship between the features and the log-odds of the outcome.
    *   Can perform poorly if the data is not linearly separable.
    *   Sensitive to multicollinearity (high correlation between features).

*   **Example:** Predicting whether a customer will click on an ad based on their demographics and browsing history.
    *   **Input Features (x):** Age, gender, location, pages visited, time spent on website, etc.
    *   **Target/Label (y):** 1 (clicked) or 0 (did not click).
    *   **Logistic Regression Model:** Learns the probability of clicking based on the features.

*   **Important Points:**
    *   The sigmoid function squashes the output to the range [0, 1], allowing interpretation as a probability.
    *   Cross-entropy loss penalizes incorrect probabilistic predictions more heavily than incorrect hard classifications.

---

**5. Support Vector Machines (SVM)**

*   **Definition:** Support Vector Machines (SVMs) are powerful linear classifiers that aim to find the optimal hyperplane that maximizes the margin between the classes.  The "margin" is the distance between the hyperplane and the closest data points from each class (called support vectors).

*   **Key Concepts:**
    *   **Hyperplane:** The decision boundary that separates the classes.  In 2D, it's a line; in 3D, it's a plane, and so on.
    *   **Margin:** The distance between the hyperplane and the closest data points (support vectors) from each class.
    *   **Support Vectors:** The data points that lie closest to the hyperplane and influence its position.  Only the support vectors are needed to define the decision boundary.
    *   **Optimal Hyperplane:** The hyperplane that maximizes the margin.  Maximizing the margin helps to improve generalization performance.

*   **Mathematical Formulation:**  The goal of SVM is to find `w` and `b` that minimize `||w||^2` (the norm of the weight vector), subject to the constraint that all data points are correctly classified and lie outside the margin:

    `y_i(w^T x_i + b) >= 1  for all i`

    where `y_i` is the label (+1 or -1) and `x_i` is the input feature vector for the i-th data point.  The value 1 represents the margin boundary.

*   **Hard Margin SVM:**  Assumes that the data is perfectly linearly separable and aims to find a hyperplane that perfectly separates the classes with the largest margin.  This can be problematic if the data is noisy or has outliers.

*   **Soft Margin SVM:**  Allows for some misclassification in the training data to improve robustness to noise and outliers.  It introduces a penalty for misclassified points using a regularization parameter `C`.  The optimization problem becomes:

    Minimize: `||w||^2 + C * Σ ξ_i`

    Subject to: `y_i(w^T x_i + b) >= 1 - ξ_i  for all i` and `ξ_i >= 0 for all i`

    where `ξ_i` are slack variables that represent the amount of misclassification for the i-th data point.

    *   **C (Regularization Parameter):**  Controls the trade-off between maximizing the margin and minimizing the classification error.
        *   **Large C:**  Penalizes misclassifications heavily, leading to a smaller margin and potentially overfitting.
        *   **Small C:**  Allows more misclassifications, leading to a larger margin and potentially underfitting.

*   **Kernel Trick:**  SVMs can be extended to handle non-linearly separable data using the "kernel trick."  This involves mapping the input data into a higher-dimensional feature space where it becomes linearly separable. Common kernel functions include:
    *   **Linear Kernel:**  `K(x_i, x_j) = x_i^T x_j`  (equivalent to a linear SVM)
    *   **Polynomial Kernel:** `K(x_i, x_j) = (x_i^T x_j + c)^d` (where `c` is a constant and `d` is the degree of the polynomial)
    *   **Radial Basis Function (RBF) Kernel:** `K(x_i, x_j) = exp(-γ ||x_i - x_j||^2)` (where `γ` is a parameter controlling the width of the kernel)

*   **Strengths of SVM:**
    *   Effective in high dimensional spaces.
    *   Relatively memory efficient because it uses a subset of training points (support vectors) in the decision function.
    *   Versatile: different Kernel functions can be specified for the decision function.
    *   Robust to outliers (with soft margin SVM).

*   **Weaknesses of SVM:**
    *   Prone to overfitting if the number of features is much greater than the number of samples.
    *   Kernel choice can significantly impact performance.
    *   Can be computationally expensive, especially for large datasets.
    *   Difficult to interpret (especially with non-linear kernels).

*   **Example:** Classifying images of cats and dogs.
    *   **Input Features (x):** Pixel values of the image.
    *   **Target/Label (y):** "Cat" or "Dog".
    *   **SVM Model:**  Can use a linear kernel if the features are preprocessed using a technique like Histogram of Oriented Gradients (HOG), or a non-linear kernel like RBF for more complex image representations.

*   **Important Points:**
    *   SVM aims to maximize the margin, leading to better generalization.
    *   The kernel trick allows SVM to handle non-linearly separable data by mapping it to a higher-dimensional space.
    *   The choice of the kernel and the regularization parameter `C` are crucial for SVM performance.

---

**6. Comparison of Linear Classifiers**

| Feature              | Perceptron                                  | Logistic Regression                         | Support Vector Machine (SVM)                        |
|-----------------------|---------------------------------------------|---------------------------------------------|----------------------------------------------------|
| **Decision Boundary** | Linear                                      | Linear                                      | Linear (can be non-linear with kernels)             |
| **Output**           | Hard classification (+1 or -1)               | Probability (between 0 and 1)               | Hard classification (+1 or -1)                     |
| **Loss Function**      | Perceptron Loss (misclassification count)     | Cross-Entropy Loss (Log Loss)                 | Hinge Loss + Regularization                          |
| **Optimization**       | Iterative weight updates based on misclassifications | Gradient Descent (or other optimization methods) | Quadratic Programming (or other optimization methods)|
| **Linear Separability**| Requires linearly separable data          | Works best with linearly separable data       | Can handle non-linearly separable data with kernels|
| **Margin**             | No concept of margin                        | No concept of margin                        | Maximizes the margin                                 |
| **Robustness**         | Sensitive to outliers and noisy data        | More robust than Perceptron                  | Robust to outliers with soft margin                 |
| **Interpretation**     | Simple to interpret                        | Relatively easy to interpret (coefficients)  | Difficult to interpret (especially with kernels)   |
| **Complexity**         | Simple                                      | Medium                                        | More complex, especially with kernels               |

---

**7. Practice Questions/Exercises**

1.  **Question:** Explain the difference between overfitting and underfitting in the context of supervised learning.  How can you detect and mitigate these problems?
    *   **Answer:**
        *   **Overfitting:** The model learns the training data too well, including the noise. It performs well on the training data but poorly on unseen data.  Detected by a large difference between training and testing accuracy/loss. Mitigated by:
            *   Increasing the amount of training data.
            *   Using a simpler model.
            *   Regularization techniques (e.g., L1 or L2 regularization).
            *   Dropout (for neural networks).
            *   Early stopping (stop training when performance on a validation set starts to decrease).
        *   **Underfitting:**  The model is too simple to capture the underlying patterns in the data. It performs poorly on both training and unseen data. Detected by poor performance on both training and testing data. Mitigated by:
            *   Using a more complex model.
            *   Adding more features to the input.
            *   Reducing regularization.

2.  **Question:** Describe the update rule for the Perceptron algorithm. Explain why it works.
    *   **Answer:** The update rule is: `w = w + η * y_i * x_i` and `b = b + η * y_i`. This rule adjusts the weight vector `w` and bias `b` in the direction that moves the decision boundary closer to correctly classifying the misclassified example `(x_i, y_i)`. If `y_i` is +1 and the prediction is -1 (misclassified), the weight vector is updated by adding `η * x_i`, which rotates the decision boundary in a direction that makes the dot product `w^T x_i` more positive, increasing the likelihood of correct classification.  Similarly, if `y_i` is -1 and the prediction is +1, the weight vector is updated by subtracting `η * x_i`, which rotates the decision boundary in the opposite direction. The learning rate `η` controls the step size of the update.

3.  **Question:** What is the role of the sigmoid function in Logistic Regression?
    *   **Answer:** The sigmoid function maps any real number to a value between 0 and 1. In Logistic Regression, it's used to transform the linear combination of input features (`w^T x + b`) into a probability score, representing the likelihood of belonging to the positive class. This allows Logistic Regression to provide probabilistic outputs instead of just hard classifications.

4.  **Question:** Explain the concept of the margin in SVM and why it's important.
    *   **Answer:** The margin in SVM is the distance between the decision boundary (hyperplane) and the closest data points from each class (support vectors). SVM aims to maximize this margin. A larger margin generally leads to better generalization performance because it creates a wider "buffer zone" around the decision boundary, making the classifier less sensitive to small variations in the data and reducing the risk of overfitting.

5.  **Question:**  What is the purpose of the regularization parameter C in soft-margin SVM?  How does it affect the model?
     *   **Answer:** The regularization parameter `C` in soft-margin SVM controls the trade-off between maximizing the margin and minimizing the number of misclassifications. A larger `C` penalizes misclassifications more heavily, resulting in a smaller margin and potentially overfitting.  A smaller `C` allows more misclassifications, leading to a larger margin and potentially underfitting. It helps to find a balance between fitting the training data well and generalizing to unseen data.

6.  **Question:** Consider the data: `X = [[1, 2], [2, 1], [3, 3], [4, 4]]` and `y = [0, 0, 1, 1]`. Implement a Perceptron model (you can use libraries or write from scratch) and determine if the model converges after a number of iterations. What are the final weights? (This question requires coding skills, a pen-and-paper approach could also be used to step through a few iterations of the Perceptron algorithm).

    * **Answer:**  (A possible solution using Python and scikit-learn)

    ```python
    import numpy as np
    from sklearn.linear_model import Perceptron

    X = np.array([[1, 2], [2, 1], [3, 3], [4, 4]])
    y = np.array([0, 0, 1, 1])

    # Initialize the Perceptron model
    perceptron = Perceptron(max_iter=1000, tol=1e-3, random_state=0)

    # Train the model
    perceptron.fit(X, y)

    # Print the final weights and bias
    print("Weights:", perceptron.coef_)
    print("Bias:", perceptron.intercept_)

    # Predict on the training data
    predictions = perceptron.predict(X)
    print("Predictions:", predictions)

    # Check if the model converged
    print("Number of iterations until convergence:", perceptron.n_iter_)
    ```

    This code will train a Perceptron on the given data and print the final weights, bias, predictions, and the number of iterations it took to converge. Because the data is linearly separable, the Perceptron *will* converge, provided the `max_iter` parameter is sufficiently high. The final weights will define the separating line. The exact values might vary slightly due to the initialization, but the Perceptron should correctly classify all points in this example.

---

**8. Important Points to Remember:**

*   Supervised learning requires labeled training data.
*   Linear classifiers make predictions based on a linear combination of input features.
*   The Perceptron is a simple linear classifier that is guaranteed to converge if the data is linearly separable.
*   Logistic Regression provides probabilistic outputs using the sigmoid function and is trained to minimize cross-entropy loss.
*   SVM aims to find the optimal hyperplane that maximizes the margin between classes.  The kernel trick allows SVM to handle non-linearly separable data.
*   Regularization is important to prevent overfitting, especially in SVM.
*   The choice of the classifier depends on the specific problem and the characteristics of the data.

This detailed study guide should provide a strong foundation for understanding the basics of supervised learning and linear classifiers. Good luck with your studies!
