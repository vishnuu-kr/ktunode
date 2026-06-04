---
title: "Non-Parametric Methods - k-Nearest neighbors, Parzen windows   (Text 2, 
Chapter 4)"
subject: "PATTERN RECOGNITION"
module: "Module 1: Introduction to Pattern Recognition "
branch: "Computer Science and Engineering"
semester: 4
topicId: "684162750fc9aa1fdbc8b0b9"
status: "completed"
scrapedAt: "2026-05-20T16:15:09.620Z"
---
# PATTERN RECOGNITION - Module 1: Introduction to Pattern Recognition - Non-Parametric Methods

**Topic:** Non-Parametric Methods - k-Nearest Neighbors (k-NN), Parzen Windows (Text 2, Chapter 4)

**Learning Outcomes:**

*   Understand the concept of non-parametric methods in pattern recognition.
*   Explain the k-Nearest Neighbors algorithm for classification and regression.
*   Describe the Parzen window method for density estimation.
*   Compare and contrast k-NN and Parzen window methods.
*   Identify the strengths and weaknesses of non-parametric methods.
*   Apply k-NN and Parzen window methods to practical problems.
*   Understand the influence of parameter selection on performance.

## 1. Introduction to Non-Parametric Methods

*   **Definition:** Non-parametric methods make no assumptions about the underlying data distribution.  Instead of estimating parameters of a pre-defined distribution (like Gaussian), they directly estimate the probability density function (PDF) or classify data based on the training data itself.
*   **Contrast with Parametric Methods:** Parametric methods assume a specific distribution (e.g., Gaussian, exponential) and estimate its parameters (e.g., mean, variance) from the training data.  If the assumption is wrong, performance degrades significantly.
*   **Key Idea:** Rely on the training data to make decisions. The more data, generally, the better the approximation.
*   **Advantages:**
    *   No assumptions about the data distribution.
    *   Can model complex and multimodal distributions.
*   **Disadvantages:**
    *   Computationally more expensive, especially during testing/classification.  Requires storing and processing the entire training dataset.
    *   Performance is highly dependent on the amount and quality of training data.
    *   Can be sensitive to noisy data.

## 2. k-Nearest Neighbors (k-NN) Algorithm

*   **Concept:** Classifies a new data point based on the majority class of its `k` nearest neighbors in the training data.
*   **Algorithm:**
    1.  **Store the training data:**  Keep all training samples `(x_i, y_i)`, where `x_i` is the feature vector and `y_i` is the class label.
    2.  **Distance Calculation:**  For a new data point `x` to be classified, calculate the distance between `x` and every point in the training data. Common distance metrics include:
        *   **Euclidean distance:**  `d(x, x_i) = sqrt(sum((x_j - x_ij)^2))` for all features `j`.
        *   **Manhattan distance:** `d(x, x_i) = sum(|x_j - x_ij|)`
        *   **Minkowski distance:** `d(x, x_i) = (sum(|x_j - x_ij|^p))^(1/p)` (Euclidean distance is a special case where p=2, and Manhattan distance where p=1).
    3.  **Find Nearest Neighbors:** Select the `k` training data points with the smallest distances to `x`.
    4.  **Classification/Regression:**
        *   **Classification:** Assign `x` to the class that is most frequent among its `k` nearest neighbors.
        *   **Regression:** Predict the value of `x` by averaging the values of its `k` nearest neighbors.
*   **Parameter `k`:**
    *   **Small `k`:**  Sensitive to noise and outliers. Can lead to overfitting. High variance.
    *   **Large `k`:**  Smoother decision boundaries.  Can lead to underfitting (if k is too large, it might always predict the majority class). High bias.
    *   **Choosing `k`:** Often done using cross-validation.  Try different values of `k` and evaluate the performance on a validation set.  Odd values of `k` are often preferred in binary classification to avoid ties.
*   **Weighted k-NN:** Instead of giving equal weight to each neighbor, assign weights based on the distance to the query point. Closer neighbors have higher weights. For example, `weight = 1 / distance`.
*   **Advantages:**
    *   Simple to implement and understand.
    *   No training phase (lazy learner).
    *   Effective for datasets with complex decision boundaries.
*   **Disadvantages:**
    *   Computationally expensive during testing.  Needs to calculate distances to all training points.
    *   Requires storing all training data.
    *   Sensitive to irrelevant features. Feature scaling is crucial.
    *   Can be slow for large datasets.
*   **Example:**
    Imagine classifying whether a fruit is an apple or an orange based on its color (red/orange) and size (small/large). You have a training set with labeled apples and oranges. For a new fruit, you find its `k` nearest neighbors in the training set based on color and size. If the majority of its neighbors are apples, you classify the new fruit as an apple.

**Practice Question 1:** Explain how the choice of `k` affects the bias and variance of the k-NN classifier.

**Answer:** A small `k` leads to low bias and high variance (overfitting, sensitive to noise), while a large `k` leads to high bias and low variance (underfitting, overly smooth decision boundary).

**Practice Question 2:** What are the advantages and disadvantages of using weighted k-NN compared to standard k-NN?

**Answer:**  Advantages of weighted k-NN: Gives more influence to closer neighbors, can improve accuracy, especially when distances vary significantly. Disadvantages: Adds computational complexity, requires careful selection of the weighting function.

## 3. Parzen Window Method

*   **Concept:** A non-parametric method for estimating the probability density function (PDF) of a random variable. It places a "window" (kernel) around each data point and sums these windows to approximate the overall density.
*   **Formula:**
    `p(x) = (1/n) * sum_{i=1 to n} [ (1/h^d) * φ((x - x_i)/h) ]`

    Where:
    *   `p(x)` is the estimated probability density at point `x`.
    *   `n` is the number of data points.
    *   `h` is the window width (bandwidth).
    *   `d` is the dimensionality of the data.
    *   `φ(u)` is the kernel function (Parzen window).
    *   `x_i` are the training data points.

*   **Explanation:**
    *   The formula calculates the average of the kernel functions centered at each data point `x_i`.
    *   The kernel function `φ(u)` determines the shape and contribution of each data point to the density estimate.
    *   The window width `h` controls the smoothness of the density estimate.
*   **Kernel Functions (Parzen Windows):** Common choices include:
    *   **Gaussian kernel:** `φ(u) = (1 / (sqrt(2π))^d) * exp(-||u||^2 / 2)`
    *   **Uniform kernel:**  `φ(u) = 1` if `||u|| <= 1/2`, and `0` otherwise. This defines a hypercube.
    *   **Epanechnikov kernel:** `φ(u) = (3/4)(1 - ||u||^2)` if `||u|| <= 1`, and `0` otherwise (for d=1).
*   **Window Width `h` (Bandwidth):**
    *   **Small `h`:**  Produces a spiky, highly variable density estimate. Can lead to overfitting.
    *   **Large `h`:**  Produces a smooth, less accurate density estimate. Can lead to underfitting.
    *   **Choosing `h`:**  Similar to `k` in k-NN, cross-validation is often used to find the optimal value. Techniques like Silverman's rule of thumb or plug-in methods can also be used for initial estimation.
*   **Advantages:**
    *   Simple to implement.
    *   Can estimate complex and multimodal distributions.
*   **Disadvantages:**
    *   Computationally expensive.  Requires evaluating the kernel function for each data point in the training set.
    *   Requires storing all training data.
    *   Sensitive to the choice of kernel function and window width.
    *   The curse of dimensionality – the amount of data needed to accurately estimate the density grows exponentially with the number of dimensions.
*   **Example:**
    Imagine you want to estimate the distribution of exam scores in a class. You have the scores of all students. Using the Parzen window method with a Gaussian kernel, you place a Gaussian "bump" around each student's score.  The sum of all these Gaussian bumps approximates the overall distribution of exam scores. A small bandwidth will result in a distribution with a bump for each score while a large bandwidth will smooth this into a curve showing a likely range of scores.

**Practice Question 3:** How does the choice of the kernel function affect the shape of the estimated probability density function?

**Answer:** The kernel function determines the shape of the individual "bumps" centered at each data point. Different kernels (Gaussian, Uniform, Epanechnikov) will produce different shapes, affecting the overall smoothness and accuracy of the density estimate.  A Gaussian kernel will create smoother estimates than a Uniform kernel.

**Practice Question 4:** What are the computational challenges associated with the Parzen window method, especially for large datasets?

**Answer:** The computational challenge lies in evaluating the kernel function for each data point in the training set for every point at which you want to estimate the density. This leads to a computational complexity of O(n*m), where n is the number of training data points and m is the number of points where you want to estimate the density. For large datasets, this can be prohibitively expensive.

## 4. Comparison of k-NN and Parzen Windows

| Feature           | k-Nearest Neighbors                               | Parzen Windows                                    |
| ----------------- | ------------------------------------------------- | ------------------------------------------------- |
| **Goal**          | Classification/Regression                          | Density Estimation                               |
| **Parameter**     | `k` (number of neighbors)                          | `h` (bandwidth), Kernel function                  |
| **Output**        | Class label or predicted value                      | Estimated probability density                    |
| **Use Cases**     | Supervised learning (classification, regression)  | Density estimation, anomaly detection, clustering |
| **Computational Cost** | Primarily during testing/classification             | Primarily during density estimation             |
| **Memory Requirements**| Requires storing all training data                | Requires storing all training data                |
| **Assumptions**   | None about data distribution                       | None about data distribution                       |

## 5. Strengths and Weaknesses of Non-Parametric Methods

**Strengths:**

*   **Flexibility:** Can model complex and arbitrary data distributions.
*   **No assumptions:** Do not require prior knowledge or assumptions about the data distribution.
*   **Adaptability:**  Can adapt to changes in the underlying data distribution.

**Weaknesses:**

*   **Computational cost:** Can be computationally expensive, especially for large datasets.
*   **Memory requirements:** Requires storing the entire training dataset.
*   **Sensitivity to parameter selection:** Performance is highly dependent on the choice of parameters (`k` in k-NN, `h` and kernel in Parzen windows).
*   **Curse of dimensionality:** Performance can degrade significantly in high-dimensional spaces.
*   **Can be sensitive to noisy data**: Requires careful data cleaning and preprocessing.

## 6. Applying k-NN and Parzen Windows to Practical Problems

*   **k-NN:**
    *   **Image classification:** Classify images based on the similarity to neighboring images in a feature space.
    *   **Recommendation systems:** Recommend items to users based on the items liked by similar users.
    *   **Medical diagnosis:**  Diagnose diseases based on the symptoms of similar patients.
*   **Parzen Windows:**
    *   **Anomaly detection:** Identify unusual data points by estimating the probability density and flagging points with low density.
    *   **Clustering:**  Identify clusters of data points by finding regions of high density.
    *   **Probability Density Estimation:** Crucial for Bayesian inference, generative models and other advanced statistical techniques.

## 7. Important Points to Remember

*   Non-parametric methods are powerful tools for pattern recognition when the underlying data distribution is unknown or complex.
*   Careful selection of parameters (`k` for k-NN, `h` and kernel for Parzen windows) is crucial for achieving good performance. Use techniques like cross-validation.
*   Non-parametric methods can be computationally expensive and require significant memory resources.
*   Feature scaling and data cleaning are essential preprocessing steps for non-parametric methods.
*   Consider the curse of dimensionality when applying non-parametric methods to high-dimensional data. Feature selection or dimensionality reduction techniques may be necessary.
