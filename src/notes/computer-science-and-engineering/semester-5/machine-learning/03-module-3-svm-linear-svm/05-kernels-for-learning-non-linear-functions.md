---
title: "Kernels for learning non-linear functions"
subject: "MACHINE LEARNING"
module: "Module 3: SVM – Linear SVM"
branch: "Computer Science and Engineering"
semester: 5
topicId: "684162760fc9aa1fdbc8b5c8"
status: "completed"
scrapedAt: "2026-05-20T16:46:43.442Z"
---
## MACHINE LEARNING - Module 3: SVM – Linear SVM - Topic: Kernels for Learning Non-Linear Functions

**Learning Outcomes:**

*   Understand the limitations of linear SVMs in handling non-linear data.
*   Explain the concept of feature mappings and kernel functions.
*   Describe different types of kernel functions (Polynomial, Radial Basis Function (RBF), Sigmoid).
*   Understand the role of kernel parameters and their impact on model performance.
*   Apply kernel functions in SVM implementations to solve non-linear classification problems.

**1. Limitations of Linear SVMs:**

*   **Linear Separability:** Linear SVMs work effectively when the data is linearly separable. This means a straight line (in 2D) or a hyperplane (in higher dimensions) can perfectly divide the data into different classes.
*   **Non-Linear Data:**  When data points are intertwined or have complex relationships, a linear hyperplane cannot effectively separate them.  Linear SVMs fail in such scenarios.  Examples include concentric circles, interwoven spirals, or data with complex polynomial relationships.
*   **Illustration:** Imagine trying to separate two classes of data where one class forms a circle inside the other.  No straight line can achieve this separation.

**2. The Concept of Feature Mappings and Kernel Functions:**

*   **Feature Mapping (Φ):**
    *   The core idea is to transform the original input data into a higher-dimensional feature space where it *becomes* linearly separable.  This transformation is done using a mapping function, denoted by Φ (Phi).
    *   **Example:** Consider data points in 2D (x1, x2) that are not linearly separable. A feature mapping could transform them into a 3D space using:  Φ(x1, x2) = (x1, x2, x1² + x2²).  In this new space, the data might become linearly separable by a plane.
    *   The SVM then learns a linear hyperplane in this higher-dimensional feature space.
*   **Computational Cost:** Directly computing Φ(x) and then performing dot products in the high-dimensional space can be computationally expensive, especially for large datasets and complex mappings.  This is where kernel functions come in.
*   **Kernel Function (K):**
    *   A kernel function provides a way to compute the dot product between two data points in the high-dimensional feature space **without explicitly calculating the feature mapping Φ**.
    *   **Definition:** K(x, y) = Φ(x) · Φ(y), where x and y are input data points, Φ(x) and Φ(y) are their corresponding mapped features, and · represents the dot product.
    *   **Kernel Trick:** The use of kernel functions to implicitly perform computations in a high-dimensional feature space is known as the "kernel trick." It avoids the explicit computation of Φ, saving significant computational resources.
    *   **Benefits:**
        *   **Efficiency:**  Kernels allow working with potentially infinite-dimensional feature spaces without the computational burden.
        *   **Flexibility:**  Kernels provide a way to define complex similarity measures between data points.
*   **Positive Definite Kernels:** For a function to be a valid kernel, it must satisfy Mercer's theorem, which states that the kernel matrix (a matrix where the element at position (i, j) is K(xi, xj)) must be positive semi-definite. This ensures that the kernel corresponds to a valid dot product in some feature space.

**3. Types of Kernel Functions:**

*   **Polynomial Kernel:**
    *   **Formula:** K(x, y) = (x · y + c)^d
    *   **Parameters:**
        *   `d` (degree): Controls the degree of the polynomial. Higher degrees allow for more complex decision boundaries but can lead to overfitting.
        *   `c` (constant):  A constant term that influences the model's bias.
    *   **Feature Mapping:**  The polynomial kernel implicitly maps data to a feature space containing all possible products of the original features up to the degree `d`.
    *   **Example:** K(x, y) = (x · y + 1)²  with d=2 and c=1.
    *   **Use Cases:**  Suitable for problems where the relationship between data points is polynomial in nature.
*   **Radial Basis Function (RBF) Kernel (Gaussian Kernel):**
    *   **Formula:** K(x, y) = exp(-||x - y||² / (2 * σ²)) = exp(-γ * ||x - y||²)  where γ = 1 / (2 * σ²)
    *   **Parameters:**
        *   `σ` (sigma, or standard deviation): Controls the width of the Gaussian function. Smaller σ values result in narrower kernels, leading to more complex decision boundaries.  Larger σ values lead to wider kernels and smoother decision boundaries.  Often expressed as `gamma (γ) = 1 / (2 * σ²)`.
        *   `γ` (gamma): Inverse of kernel width. Larger γ means each data point has more influence, leading to tighter fits.
    *   **Feature Mapping:**  The RBF kernel implicitly maps data to an infinite-dimensional feature space.
    *   **Example:** K(x, y) = exp(-||x - y||² / 2) with σ = 1.
    *   **Use Cases:**  A very popular and versatile kernel.  Often the first choice for non-linear SVM problems because of its flexibility and ability to model complex relationships. It can handle a wide range of data distributions.
*   **Sigmoid Kernel (Hyperbolic Tangent Kernel):**
    *   **Formula:** K(x, y) = tanh(α * (x · y) + c)
    *   **Parameters:**
        *   `α` (alpha): Slope parameter.
        *   `c` (constant): Intercept parameter.
    *   **Connection to Neural Networks:**  The sigmoid kernel resembles a single-layer perceptron (neural network).
    *   **Use Cases:**  Less commonly used compared to polynomial and RBF kernels.  Sometimes used in specific applications where the underlying data structure is known to resemble a neural network.

**4. Role of Kernel Parameters and Their Impact:**

*   **Parameter Tuning:**  The parameters of kernel functions (e.g., `d` for Polynomial, `γ` for RBF, `α` and `c` for Sigmoid) significantly influence the performance of the SVM.  Selecting appropriate parameters is crucial for achieving good generalization performance.
*   **Overfitting and Underfitting:**
    *   **Small σ (large γ) in RBF:**  Can lead to overfitting.  The model becomes too sensitive to individual data points, creating a highly complex decision boundary that may not generalize well to unseen data.
    *   **Large σ (small γ) in RBF:**  Can lead to underfitting. The model becomes too smooth and may not capture the underlying patterns in the data.
    *   **High degree `d` in Polynomial:**  Can lead to overfitting, especially with limited data.
*   **Cross-Validation:**  Techniques like k-fold cross-validation are used to systematically evaluate the performance of the SVM with different kernel parameters and select the optimal parameter values.
*   **Grid Search and Random Search:** These are common methods to automate the process of finding the best hyperparameter combination.  Grid search exhaustively tries all combinations within a defined range, while random search randomly samples parameter values.

**5. Applying Kernel Functions in SVM Implementations:**

*   **Libraries:**  Most machine learning libraries (e.g., scikit-learn in Python) provide implementations of SVMs with various kernel options.
*   **Example (Python with scikit-learn):**

```python
from sklearn import svm
from sklearn.model_selection import train_test_split
from sklearn.metrics import accuracy_score
import numpy as np

# Sample non-linear data (example: XOR)
X = np.array([[0, 0], [0, 1], [1, 0], [1, 1]])
y = np.array([0, 1, 1, 0])

# Split data into training and testing sets
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.3, random_state=42)

# 1. Linear Kernel
linear_svm = svm.SVC(kernel='linear')
linear_svm.fit(X_train, y_train)
y_pred_linear = linear_svm.predict(X_test)
print("Linear Kernel Accuracy:", accuracy_score(y_test, y_pred_linear))

# 2. RBF Kernel
rbf_svm = svm.SVC(kernel='rbf', gamma=0.7)  # Experiment with different gamma values
rbf_svm.fit(X_train, y_train)
y_pred_rbf = rbf_svm.predict(X_test)
print("RBF Kernel Accuracy:", accuracy_score(y_test, y_pred_rbf))

# 3. Polynomial Kernel
poly_svm = svm.SVC(kernel='poly', degree=3) # Experiment with different degree values
poly_svm.fit(X_train, y_train)
y_pred_poly = poly_svm.predict(X_test)
print("Polynomial Kernel Accuracy:", accuracy_score(y_test, y_pred_poly))

# 4. Sigmoid Kernel
sigmoid_svm = svm.SVC(kernel='sigmoid', gamma='scale', coef0=0.0)  #experiment with different gamma and coef0 values
sigmoid_svm.fit(X_train, y_train)
y_pred_sigmoid = sigmoid_svm.predict(X_test)
print("Sigmoid Kernel Accuracy:", accuracy_score(y_test, y_pred_sigmoid))
```

*   **Code Explanation:**
    *   The code demonstrates how to create and train SVM models with different kernels using scikit-learn.
    *   `svm.SVC(kernel='...')` specifies the kernel function to be used.  Possible values are `'linear'`, `'rbf'`, `'poly'`, and `'sigmoid'`.
    *   Kernel-specific parameters (e.g., `gamma` for RBF, `degree` for Polynomial) can be passed as arguments to the `svm.SVC` constructor.
    *   The example uses the XOR dataset, which is not linearly separable, to highlight the effectiveness of non-linear kernels.
    *   `gamma = 'scale'` in sigmoid svm uses 1 / (n_features * X.var()) as value of gamma.
*   **Model Training and Prediction:** The code trains each SVM model on the training data (`X_train`, `y_train`) and then predicts the labels for the test data (`X_test`).
*   **Accuracy Evaluation:**  The accuracy score is calculated to evaluate the performance of each model on the test data.

**6. Important Points to Remember:**

*   **Kernel Selection:**  Choosing the right kernel is crucial for the success of an SVM.  RBF is often a good starting point due to its versatility. Experiment and compare different kernels based on the nature of your data.
*   **Parameter Tuning is Key:**  Kernel parameters have a significant impact on model performance. Use cross-validation to find optimal values.
*   **Computational Cost:**  Be aware of the computational cost associated with different kernels, especially for large datasets. RBF kernels can be more computationally expensive than linear kernels.
*   **Data Preprocessing:**  Scaling your data (e.g., using StandardScaler or MinMaxScaler) is often essential before training an SVM with a non-linear kernel, as these kernels are sensitive to the scale of the input features.
*   **Interpretability:** SVMs with non-linear kernels are less interpretable than linear SVMs because the decision boundary is defined in a high-dimensional feature space.

**Practice Questions/Exercises:**

1.  **Explain the "kernel trick" in the context of SVMs. Why is it important?**

    *   **Answer:**  The kernel trick allows SVMs to implicitly compute dot products in a high-dimensional feature space (defined by a feature mapping Φ) without explicitly calculating the feature mapping itself.  This significantly reduces computational cost, especially for complex feature mappings and large datasets, making it possible to work with potentially infinite-dimensional feature spaces.

2.  **Describe the RBF kernel function and explain the role of the gamma (γ) parameter.**

    *   **Answer:** The RBF kernel is defined as K(x, y) = exp(-γ * ||x - y||²), where ||x - y||² is the squared Euclidean distance between data points x and y, and γ is a parameter controlling the width of the Gaussian function. A larger γ value makes the kernel narrower, causing the model to be more sensitive to individual data points and potentially leading to overfitting. A smaller γ value makes the kernel wider, leading to a smoother decision boundary and potentially underfitting.

3.  **You are training an SVM on a dataset with a complex non-linear relationship between the features and the target variable. You've tried a linear kernel, but the performance is poor. Which kernel(s) would you consider using next, and why?**

    *   **Answer:**  I would consider using the RBF (Radial Basis Function) kernel and the Polynomial kernel.
        *   **RBF Kernel:**  It's a good first choice for non-linear problems due to its ability to map data into an infinite-dimensional feature space and model complex relationships.  It's generally a versatile kernel.
        *   **Polynomial Kernel:**  If there's reason to believe that the relationship between the features is polynomial in nature, the polynomial kernel would be suitable.

4.  **What are the potential drawbacks of using a very high-degree polynomial kernel?**

    *   **Answer:**  Using a very high-degree polynomial kernel can lead to:
        *   **Overfitting:** The model becomes too complex and fits the training data too closely, resulting in poor generalization to unseen data.
        *   **Computational Cost:**  The computational cost of training and evaluating the SVM increases significantly with the degree of the polynomial.

5.  **You are using an RBF kernel in your SVM and observe that your model is overfitting the training data. What adjustments could you make to the gamma (γ) parameter to address this issue?**

    *   **Answer:**  To address overfitting with an RBF kernel, you should *decrease* the gamma (γ) value. This will widen the Gaussian function, making the decision boundary smoother and less sensitive to individual data points, thus reducing overfitting.  Alternatively, increase the regularization parameter `C` in the SVC constructor.

6. **Explain what is meant by a positive definite kernel.**

*   **Answer:** A positive definite kernel (also called a positive semi-definite kernel) is a kernel function where the kernel matrix K formed by evaluating the kernel on all pairs of points in the dataset is a positive semi-definite matrix. This means that all eigenvalues of the kernel matrix are non-negative. This property is crucial because Mercer's theorem states that a kernel is a valid dot product in some (possibly infinite-dimensional) feature space if and only if it is positive semi-definite.

These notes provide a comprehensive overview of kernels for learning non-linear functions within the context of SVMs. They cover the limitations of linear SVMs, the concepts of feature mappings and kernel functions, different types of kernels, the role of kernel parameters, practical implementations, and key considerations. The practice questions and exercises reinforce the understanding of the material. Remember to experiment with different kernels and parameter settings to find the best solution for your specific machine learning problem.
