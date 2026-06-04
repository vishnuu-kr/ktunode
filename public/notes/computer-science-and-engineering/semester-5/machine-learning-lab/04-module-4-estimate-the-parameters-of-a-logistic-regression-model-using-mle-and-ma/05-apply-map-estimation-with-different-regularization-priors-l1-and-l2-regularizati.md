---
title: "Apply MAP estimation with different regularization priors (L1 and L2 regularization)."
subject: "MACHINE LEARNING LAB"
module: "Module 4: Estimate the parameters of a logistic regression model using MLE and MAP on the Breast Cancer Wisconsin dataset. Compare the results and discuss the effects of regularization."
branch: "Computer Science and Engineering"
semester: 5
topicId: "684162770fc9aa1fdbc8b946"
status: "completed"
scrapedAt: "2026-05-20T16:47:10.089Z"
---
# MACHINE LEARNING LAB - Module 4: Logistic Regression with MLE, MAP, and Regularization

## Topic: Apply MAP estimation with different regularization priors (L1 and L2 regularization) on the Breast Cancer Wisconsin dataset.

### Learning Outcomes:

*   Understand the concept of Maximum A Posteriori (MAP) estimation.
*   Apply MAP estimation to logistic regression.
*   Implement L1 (Lasso) and L2 (Ridge) regularization for logistic regression.
*   Compare the effects of L1 and L2 regularization on model parameters and performance.
*   Analyze the impact of regularization strength on model complexity and generalization.

---

### 1. Introduction: MLE vs. MAP

*   **Maximum Likelihood Estimation (MLE):**  Finds the parameters (θ) that maximize the likelihood function, i.e., the probability of observing the data given the parameters:

    ```
    θ_MLE = argmax P(Data | θ)
    ```

    *   **Key idea:** Assumes all values of θ are equally likely *a priori*.
    *   **Limitation:** Can be prone to overfitting, especially with high-dimensional data or limited samples, leading to extreme parameter values.

*   **Maximum A Posteriori (MAP) Estimation:** Finds the parameters (θ) that maximize the *posterior* distribution, i.e., the probability of the parameters given the data:

    ```
    θ_MAP = argmax P(θ | Data)
    ```

    *   **Key idea:** Incorporates a *prior* belief about the parameters, represented by *P(θ)*.
    *   **Benefit:** Helps to regularize the model and prevent overfitting by shrinking parameter values towards zero or some other pre-defined value.

*   **Bayes' Theorem:**  The foundation for MAP estimation:

    ```
    P(θ | Data) = [P(Data | θ) * P(θ)] / P(Data)
    ```

    *   *P(θ | Data)*:  Posterior probability of the parameters given the data.
    *   *P(Data | θ)*:  Likelihood of the data given the parameters (same as in MLE).
    *   *P(θ)*:  Prior probability of the parameters. This is the crucial difference between MLE and MAP.
    *   *P(Data)*:  Evidence or marginal likelihood (normalization constant).  We usually ignore this during MAP estimation since we are only interested in finding the argmax.

*   **In practice, we often work with the log posterior:**

    ```
    log P(θ | Data) ∝ log P(Data | θ) + log P(θ)
    ```
    This is easier to optimize.

---

### 2. Applying MAP Estimation to Logistic Regression

*   **Logistic Regression:** Models the probability of a binary outcome (y = 0 or 1) using a sigmoid function:

    ```
    P(y = 1 | x, θ) = sigmoid(θᵀx) = 1 / (1 + exp(-θᵀx))
    ```

    Where:
    *   `x` is the feature vector.
    *   `θ` is the parameter vector (weights and bias).
    *   `sigmoid(z) = 1 / (1 + exp(-z))`

*   **Likelihood Function for Logistic Regression (assuming independent data points):**

    ```
    P(Data | θ) = ∏ [P(yᵢ = 1 | xᵢ, θ) ^ yᵢ  * P(yᵢ = 0 | xᵢ, θ) ^ (1 - yᵢ)]
    ```
    where the product is taken over all data points `i`.

*   **Log-Likelihood Function:**

    ```
    log P(Data | θ) = ∑ [yᵢ * log(sigmoid(θᵀxᵢ)) + (1 - yᵢ) * log(1 - sigmoid(θᵀxᵢ))]
    ```

*   **MAP Estimation Objective:**  To find the θ that maximizes the log posterior, which is the log-likelihood plus the log-prior:

    ```
    θ_MAP = argmax [log P(Data | θ) + log P(θ)]
    ```

---

### 3. Regularization Priors (L1 and L2)

*   The choice of prior distribution *P(θ)* determines the type of regularization.

*   **L2 Regularization (Ridge Regression):**

    *   Prior: Assumes θ follows a Gaussian (Normal) distribution centered at 0:
        ```
        P(θ) ∝ exp(-λ/2 * ||θ||₂²)
        ```
        where `||θ||₂²` is the L2 norm squared (sum of squared parameter values), and `λ` is the regularization strength (higher λ = stronger regularization).

    *   Log-Prior:
        ```
        log P(θ) ∝ -λ/2 * ||θ||₂² = -λ/2 * ∑ θᵢ²
        ```

    *   MAP Objective (with L2 Regularization):

        ```
        θ_MAP = argmax {∑ [yᵢ * log(sigmoid(θᵀxᵢ)) + (1 - yᵢ) * log(1 - sigmoid(θᵀxᵢ))]  - λ/2 * ∑ θᵢ² }
        ```
        This is equivalent to minimizing the negative log-posterior:

        ```
        θ_MAP = argmin {-∑ [yᵢ * log(sigmoid(θᵀxᵢ)) + (1 - yᵢ) * log(1 - sigmoid(θᵀxᵢ))] + λ/2 * ∑ θᵢ² }
        ```

    *   Effect:  Shrinks all parameter values towards zero, but typically doesn't force any to be exactly zero. Helps to reduce the impact of less important features and prevent overfitting.

*   **L1 Regularization (Lasso Regression):**

    *   Prior: Assumes θ follows a Laplacian distribution centered at 0:

        ```
        P(θ) ∝ exp(-λ * ||θ||₁)
        ```
        where `||θ||₁` is the L1 norm (sum of absolute parameter values), and `λ` is the regularization strength.

    *   Log-Prior:

        ```
        log P(θ) ∝ -λ * ||θ||₁ = -λ * ∑ |θᵢ|
        ```

    *   MAP Objective (with L1 Regularization):

        ```
        θ_MAP = argmax {∑ [yᵢ * log(sigmoid(θᵀxᵢ)) + (1 - yᵢ) * log(1 - sigmoid(θᵀxᵢ))]  - λ * ∑ |θᵢ| }
        ```
        Or minimizing the negative log-posterior:

        ```
        θ_MAP = argmin {-∑ [yᵢ * log(sigmoid(θᵀxᵢ)) + (1 - yᵢ) * log(1 - sigmoid(θᵀxᵢ))] + λ * ∑ |θᵢ| }
        ```

    *   Effect:  Shrinks parameter values towards zero *and* can force some parameters to be *exactly* zero.  This performs feature selection by effectively removing less important features from the model.  Leads to sparser models.

*   **Comparison:**

    | Feature          | L1 (Lasso)                                         | L2 (Ridge)                                      |
    |-------------------|----------------------------------------------------|-------------------------------------------------|
    | Prior            | Laplacian                                           | Gaussian                                         |
    | Effect           | Feature selection (sparse models)                  | Shrinks all parameters (no feature selection) |
    | Parameter Values | Can force parameters to zero                        | Parameters approach zero but rarely reach it      |
    | Optimization     | Non-differentiable (requires specialized solvers) | Differentiable (can use gradient descent)       |
    | Use Case         | When feature selection is desired or many features are irrelevant | When all features are potentially relevant but need regularization |

---

### 4. Implementing Logistic Regression with L1 and L2 Regularization using Breast Cancer Wisconsin Dataset

This section outlines the steps you'd take in your lab.

1.  **Load the Dataset:**  Use libraries like `scikit-learn` (`sklearn.datasets.load_breast_cancer`) to load the Breast Cancer Wisconsin dataset.
2.  **Data Preprocessing:**
    *   Split the data into training and testing sets (`sklearn.model_selection.train_test_split`).
    *   Scale the features (e.g., using `sklearn.preprocessing.StandardScaler`) to ensure they have zero mean and unit variance.  This is crucial for regularization, as it prevents features with larger scales from dominating the regularization penalty.
3.  **Implement Logistic Regression with Regularization:**
    *   Use `sklearn.linear_model.LogisticRegression`.
    *   Set `penalty` to `'l1'` for L1 regularization (Lasso) and `'l2'` for L2 regularization (Ridge).
    *   The `C` parameter in `LogisticRegression` controls the inverse of regularization strength.  `C = 1/λ`. Smaller `C` means stronger regularization (larger λ).  Experiment with different values of `C`.
    *   Use `solver='liblinear'` for L1 regularization, as it supports this penalty.  For L2, `'lbfgs'` is a good default. `solver='saga'` supports both L1 and L2 with elastic-net, and can often be a good choice for both, especially with larger datasets.

    ```python
    from sklearn.linear_model import LogisticRegression
    from sklearn.model_selection import train_test_split
    from sklearn.preprocessing import StandardScaler
    from sklearn.datasets import load_breast_cancer
    import numpy as np

    # Load the data
    cancer = load_breast_cancer()
    X, y = cancer.data, cancer.target

    # Split into training and testing sets
    X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.3, random_state=42)

    # Scale the data
    scaler = StandardScaler()
    X_train = scaler.fit_transform(X_train)
    X_test = scaler.transform(X_test)


    # L2 Regularization (Ridge)
    logreg_l2 = LogisticRegression(penalty='l2', C=1.0, solver='lbfgs', max_iter=1000) # C=1/lambda
    logreg_l2.fit(X_train, y_train)
    accuracy_l2 = logreg_l2.score(X_test, y_test)
    print(f"L2 Regularization Accuracy: {accuracy_l2}")

    # L1 Regularization (Lasso)
    logreg_l1 = LogisticRegression(penalty='l1', C=1.0, solver='liblinear') # C=1/lambda
    logreg_l1.fit(X_train, y_train)
    accuracy_l1 = logreg_l1.score(X_test, y_test)
    print(f"L1 Regularization Accuracy: {accuracy_l1}")


    # Example of varying regularization strength (C)
    C_values = [0.001, 0.01, 0.1, 1, 10, 100]
    for C in C_values:
        logreg = LogisticRegression(penalty='l2', C=C, solver='lbfgs', max_iter=1000)
        logreg.fit(X_train, y_train)
        accuracy = logreg.score(X_test, y_test)
        print(f"L2 Regularization Accuracy with C={C}: {accuracy}")


    # Examine the coefficients
    print("\nL2 Coefficients:")
    print(logreg_l2.coef_) # Print the coefficients (weights)
    print("\nL1 Coefficients:")
    print(logreg_l1.coef_)
    ```

4.  **Evaluate Performance:**  Calculate accuracy, precision, recall, F1-score, and AUC-ROC on the test set.  Compare the performance of models with L1, L2, and no regularization (set `penalty='none'` or omit the `penalty` argument, depending on the library).
5.  **Analyze the Coefficients:** Examine the values of the learned coefficients (the `coef_` attribute of the `LogisticRegression` object). Observe how L1 regularization sets some coefficients to zero.
6.  **Experiment with Regularization Strength (λ or C):**  Vary the value of `λ` (or equivalently, `C = 1/λ`) and observe the changes in model performance and coefficient values. Plot the performance metrics as a function of `λ`.

---

### 5. Discussion and Effects of Regularization

*   **Overfitting and Underfitting:**
    *   **Overfitting:** Occurs when the model learns the training data too well, including noise.  Results in high training accuracy but poor generalization to new data (low test accuracy). High complexity, extreme parameter values.
    *   **Underfitting:** Occurs when the model is too simple to capture the underlying patterns in the data. Results in low training and test accuracy. Low complexity, parameters not capturing enough information.
*   **Regularization as a Solution:**
    *   Regularization helps to prevent overfitting by adding a penalty term to the loss function, discouraging large parameter values.
    *   By controlling the complexity of the model, regularization improves its ability to generalize to unseen data.
*   **Effects of L1 Regularization:**
    *   Feature Selection:  Sets some coefficients to zero, effectively removing irrelevant features.
    *   Sparsity:  Produces a sparse model with fewer non-zero coefficients.
    *   Interpretability:  A sparser model is often easier to interpret.
*   **Effects of L2 Regularization:**
    *   Coefficient Shrinkage:  Shrinks all coefficients towards zero, but doesn't typically force any to be exactly zero.
    *   Reduces Variance:  Reduces the variance of the parameter estimates, leading to more stable and reliable predictions.
*   **Choosing Regularization Strength (λ or C):**
    *   The optimal value of λ (or C) depends on the specific dataset and model.
    *   Use techniques like cross-validation (e.g., `sklearn.model_selection.cross_val_score` or `sklearn.model_selection.GridSearchCV`) to find the best value of λ.
    *   Visualize the performance metrics (e.g., accuracy, F1-score) as a function of λ to identify the optimal range.

---

### 6. Important Points to Remember

*   MAP estimation incorporates prior knowledge about the parameters.
*   L1 regularization performs feature selection by setting some coefficients to zero.
*   L2 regularization shrinks all coefficients towards zero.
*   Regularization strength (λ or C) controls the trade-off between model complexity and generalization performance.
*   Data scaling is crucial before applying regularization.
*   Use cross-validation to find the optimal regularization strength.

---

### 7. Practice Questions/Exercises

**Question 1:** Explain the difference between MLE and MAP estimation.  Why might MAP be preferred over MLE in some cases?

**Answer:** MLE finds the parameter values that maximize the likelihood of observing the data, without any prior assumptions about the parameters. MAP, on the other hand, finds the parameter values that maximize the *posterior* probability, which incorporates both the likelihood of the data and a prior belief about the parameter values. MAP is preferred over MLE when we have some prior knowledge or belief about the parameters, or when we want to prevent overfitting, especially with limited data.

**Question 2:** What is the effect of increasing the regularization strength (λ) in L1 regularization?

**Answer:** Increasing the regularization strength (λ) in L1 regularization will lead to:

*   More coefficients being set to zero.
*   A sparser model with fewer active features.
*   Potentially simpler and more interpretable model.
*   Increased bias, but potentially reduced variance.
*   Requires larger C values in `LogisticRegression`

**Question 3:**  Explain the difference between the L1 and L2 norms. How do these norms relate to L1 and L2 regularization?

**Answer:**

*   **L1 Norm:**  The L1 norm of a vector is the sum of the absolute values of its elements. Mathematically, `||x||₁ = ∑ |xᵢ|`. L1 regularization adds a penalty proportional to the L1 norm of the parameter vector to the loss function.  This promotes sparsity, causing some parameters to become exactly zero.

*   **L2 Norm:** The L2 norm of a vector is the square root of the sum of the squares of its elements (Euclidean distance). Mathematically, `||x||₂ = √(∑ xᵢ²)`.  In L2 regularization, we typically use the L2 norm *squared*, `||x||₂² = ∑ xᵢ²`, to simplify calculations. L2 regularization adds a penalty proportional to the L2 norm *squared* of the parameter vector to the loss function. This shrinks parameter values towards zero without forcing them to be exactly zero.

In essence, L1 encourages sparsity by penalizing large absolute values and potentially setting them to zero.  L2 discourages extreme values by penalizing large squares, resulting in smaller, more evenly distributed weights.

**Question 4:**  You observe that your logistic regression model is overfitting on the Breast Cancer Wisconsin dataset.  What steps could you take, using the techniques discussed in this module, to address this?

**Answer:**

1.  **Apply Regularization:** Implement L1 or L2 regularization. Start with L2 if you want to shrink all coefficients or L1 if you suspect some features are irrelevant and want to perform feature selection.
2.  **Tune Regularization Strength:** Use cross-validation (e.g., k-fold cross-validation) to find the optimal regularization strength (λ or C).  Experiment with a range of values for λ and evaluate the performance of the model on each fold of the cross-validation. Choose the λ that gives the best average performance across all folds.
3.  **Data Scaling:** Ensure that the features are properly scaled (e.g., using `StandardScaler`). This is important because regularization is sensitive to the scale of the features.

**Question 5:** How can you determine if L1 regularization successfully performed feature selection?

**Answer:** After training a logistic regression model with L1 regularization, examine the learned coefficients (`coef_` attribute).  If any of the coefficients are exactly zero, it indicates that L1 regularization has effectively removed the corresponding features from the model. The more coefficients that are zero, the more features have been selected out.  You can also compare the performance of the model with and without the features removed by L1 regularization.

---
