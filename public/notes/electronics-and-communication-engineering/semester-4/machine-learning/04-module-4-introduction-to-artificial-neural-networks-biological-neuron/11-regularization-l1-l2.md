---
title: "Regularization- L1, L2"
subject: "MACHINE LEARNING"
module: "Module 4: Introduction to Artificial Neural Networks: Biological Neuron"
branch: "Electronics and Communication Engineering"
semester: 4
topicId: "68a5c45eb09ce205780fe63f"
status: "completed"
scrapedAt: "2026-05-23T17:50:31.080Z"
---
# Machine Learning: Module 4 - Introduction to Artificial Neural Networks: Biological Neuron

## Topic: Regularization - L1, L2

This module introduces the fundamental concepts of Artificial Neural Networks (ANNs) by drawing parallels to biological neurons. Within this context, we explore crucial techniques for improving the generalization performance of models, specifically focusing on **Regularization**, with a deep dive into **L1 and L2 regularization**.

---

### 1. Understanding Overfitting and the Need for Regularization

**Learning Outcome Alignment:** CO1 (Analyze and apply supervised and unsupervised machine learning techniques), CO2 (Develop, train, and optimize regression and classification models).

**Key Concepts:**

*   **Model Complexity:** Refers to the capacity of a model to learn complex patterns in the data. Highly complex models can have many parameters or intricate functional forms.
*   **Underfitting:** A model is underfitting when it fails to capture the underlying trends in the training data, leading to high bias and poor performance on both training and test sets.
*   **Overfitting:** A model is overfitting when it learns the training data too well, including its noise and specific idiosyncrasies. This results in excellent performance on the training set but poor generalization to unseen data (test set). The model has high variance.
*   **Generalization:** The ability of a machine learning model to perform well on new, unseen data.
*   **Bias-Variance Trade-off:** A fundamental concept in model building. Bias refers to the error introduced by approximating a real-world problem, which may be complex, by a much simpler model. Variance refers to the error introduced by the model's sensitivity to small fluctuations in the training set. A model with high bias is too simple, while a model with high variance is too complex. Regularization aims to balance this trade-off.

**Why Regularization is Crucial:**

*   **Prevents Overfitting:** The primary goal of regularization is to reduce overfitting, allowing models to generalize better to new data.
*   **Reduces Model Complexity:** Regularization techniques penalize overly complex models by discouraging large weights.
*   **Improves Robustness:** Regularized models are often more robust to noise in the data.

**Textbook/Reference Insights:**

*   **Hands-on Machine Learning with Scikit-Learn, Keras, and TensorFlow (Geron):** Chapter 1 discusses the bias-variance trade-off and overfitting as common challenges in machine learning. Chapter 11 dives into ANNs and introduces regularization techniques like L1 and L2 as essential for deep learning.
*   **Introduction to Machine Learning with Python (Müller & Guido):** Chapter 5 (Model Evaluation and Improvement) touches upon regularization in the context of linear models and its impact on generalization.
*   **Pattern Recognition and Machine Learning (Bishop):** Chapter 3 discusses model assessment and the importance of avoiding overfitting, setting the stage for regularization.

**Example:**

Imagine training a polynomial regression model. If you use a very high-degree polynomial, it might perfectly fit all the training data points. However, if you plot this high-degree polynomial, you'll see it can have wild oscillations between data points. This is overfitting. A regularized model would penalize the large coefficients associated with the higher-degree terms, resulting in a smoother curve that generalizes better.

---

### 2. Regularization in the Context of Neural Networks

**Learning Outcome Alignment:** CO1 (Analyze and apply supervised and unsupervised machine learning techniques), CO2 (Develop, train, and optimize regression and classification models).

**Key Concepts:**

*   **Weights ($w$):** The parameters in a neural network that determine the strength of the connection between neurons. Large weights can indicate that a neuron is overly sensitive to its input, potentially leading to overfitting.
*   **Bias ($b$):** Another type of parameter in a neural network, representing an intercept term. While regularization often focuses on weights, bias terms can also contribute to model complexity.
*   **Cost Function (Loss Function):** A function that measures the error of the model's predictions. Regularization adds a penalty term to the standard cost function.

**How Regularization Works in ANNs:**

Regularization modifies the cost function by adding a penalty term that is proportional to the magnitude of the model's weights. The goal is to minimize this new, regularized cost function.

Original Cost Function (e.g., Mean Squared Error):
$J(\mathbf{w}, b) = \frac{1}{m} \sum_{i=1}^m (y^{(i)} - \hat{y}^{(i)})^2$

Regularized Cost Function:
$J_{reg}(\mathbf{w}, b) = J(\mathbf{w}, b) + \lambda \cdot \text{Penalty}(\mathbf{w})$

Here, $\lambda$ (lambda) is the **regularization hyperparameter**. It controls the strength of the penalty. A higher $\lambda$ means a stronger penalty on large weights, leading to a simpler model.

**Textbook/Reference Insights:**

*   **Hands-on Machine Learning with Scikit-Learn, Keras, and TensorFlow (Geron):** Chapter 11 extensively covers regularization techniques like L1, L2, and Dropout for ANNs. It explains how Keras/TensorFlow implement these.
*   **Learning Deep Learning (Ekman):** Chapter 7 discusses overfitting and introduces regularization methods, including L1 and L2, as key strategies for building robust deep learning models.
*   **CS229 Lecture Notes (Andrew Ng & Tengyu Ma):** Section 10.2 on regularization explains the concept and provides derivations for L1 and L2 regularization, highlighting their effect on the optimization process.

---

### 3. L2 Regularization (Ridge Regularization)

**Learning Outcome Alignment:** CO1, CO2.

**Key Concepts:**

*   **L2 Penalty:** Adds a penalty term to the cost function that is proportional to the *sum of the squares of the weights*.
*   **Weight Decay:** L2 regularization is often referred to as "weight decay" because during the gradient descent optimization process, the update rule effectively shrinks the weights towards zero by a small amount in each step, independent of the gradient.

**L2 Penalty Term:**
$\text{Penalty}_{L2}(\mathbf{w}) = \sum_{i=1}^n w_i^2 = ||\mathbf{w}||_2^2$

**Regularized Cost Function (L2):**
$J_{L2}(\mathbf{w}, b) = J(\mathbf{w}, b) + \lambda \sum_{i=1}^n w_i^2$

**Effect of L2 Regularization:**

*   **Shrinks Weights:** L2 regularization encourages weights to be small, but it rarely drives them exactly to zero.
*   **Sparsity:** It does not promote sparsity (i.e., setting many weights to exactly zero).
*   **Handles Multicollinearity:** In linear models, L2 regularization is effective at handling multicollinearity (high correlation between predictor variables).
*   **Smoother Models:** Leads to models with smaller weights, resulting in smoother decision boundaries and reduced variance.

**Textbook/Reference Insights:**

*   **Hands-on Machine Learning with Scikit-Learn, Keras, and TensorFlow (Geron):** Chapter 11 explains L2 regularization for ANNs and shows its implementation using `kernel_regularizer=regularizers.l2(0.01)` in Keras.
*   **Introduction to Machine Learning with Python (Müller & Guido):** Chapter 5 discusses Ridge Regression (L2 regularization for linear models) and its benefits.
*   **Pattern Recognition and Machine Learning (Bishop):** Section 3.4 discusses regularization in the context of polynomial curve fitting and introduces L2 regularization.

**Example:**

Consider two features contributing to a prediction. If one feature has a very large weight and another has a small weight, L2 regularization will try to reduce both. However, it's more likely to reduce the larger weight significantly more than the smaller one, pushing them towards a more balanced, smaller magnitude.

**Practice Question:**

If a model is overfitting and has very large weight values, which regularization technique would you consider first, and why?

**Answer:** L2 regularization would be a good first choice. It penalizes large weights by squaring them, which has a more pronounced effect on larger weights, encouraging them to become smaller without necessarily eliminating them. This helps reduce the model's sensitivity to individual features and thus reduces variance.

---

### 4. L1 Regularization (Lasso Regularization)

**Learning Outcome Alignment:** CO1, CO2.

**Key Concepts:**

*   **L1 Penalty:** Adds a penalty term to the cost function that is proportional to the *sum of the absolute values of the weights*.
*   **Sparsity:** L1 regularization is known for promoting sparsity in the model by driving the weights of less important features exactly to zero.

**L1 Penalty Term:**
$\text{Penalty}_{L1}(\mathbf{w}) = \sum_{i=1}^n |w_i| = ||\mathbf{w}||_1$

**Regularized Cost Function (L1):**
$J_{L1}(\mathbf{w}, b) = J(\mathbf{w}, b) + \lambda \sum_{i=1}^n |w_i|$

**Effect of L1 Regularization:**

*   **Feature Selection:** By driving weights to zero, L1 regularization effectively performs automatic feature selection, identifying and retaining only the most important features.
*   **Sparsity:** Creates sparse models where many weights are exactly zero.
*   **Feature Importance:** Features with non-zero weights are considered important by the model.
*   **Can be Non-Differentiable:** The absolute value function is not differentiable at zero, which can sometimes require specialized optimization algorithms (though most deep learning frameworks handle this).

**Textbook/Reference Insights:**

*   **Hands-on Machine Learning with Scikit-Learn, Keras, and TensorFlow (Geron):** Chapter 11 discusses L1 regularization and its use for feature selection in ANNs.
*   **Introduction to Machine Learning with Python (Müller & Guido):** Chapter 5 covers Lasso Regression (L1 regularization for linear models) and its capability for feature selection.
*   **Pattern Recognition and Machine Learning (Bishop):** Discusses sparsity-inducing priors in Section 3.4.1, which are conceptually related to L1 regularization.

**Example:**

Consider a scenario with 100 features, but only 10 of them are truly predictive. If you train a model with L1 regularization, it's highly probable that the weights for the 90 non-predictive features will be driven to exactly zero, effectively selecting the 10 important features.

**Practice Question:**

What is the primary advantage of L1 regularization over L2 regularization in scenarios with a large number of features?

**Answer:** The primary advantage of L1 regularization is its ability to perform automatic feature selection by driving the weights of irrelevant features to exactly zero. This results in a sparser model, making it more interpretable and computationally efficient, especially when dealing with high-dimensional datasets. L2 regularization shrinks weights but rarely sets them to zero.

---

### 5. Comparing L1 and L2 Regularization

**Learning Outcome Alignment:** CO1, CO2.

| Feature           | L1 Regularization (Lasso)                                    | L2 Regularization (Ridge)                                      |
| :---------------- | :----------------------------------------------------------- | :------------------------------------------------------------- |
| **Penalty Term**  | Sum of absolute values of weights ($||w||_1$)               | Sum of squared values of weights ($||w||_2^2$)                 |
| **Effect on Weights** | Shrinks weights, drives some to **exactly zero**           | Shrinks weights towards zero, but rarely to **exactly zero**   |
| **Sparsity**      | **Promotes sparsity** (feature selection)                    | Does not promote sparsity                                      |
| **Sparsity Nature** | Leads to sparse solutions                                    | Leads to dense solutions (all weights non-zero)                |
| **Feature Selection** | **Automatic feature selection**                              | No inherent feature selection                                  |
| **Interpretability** | High, as irrelevant features are removed                     | Moderate, as all features contribute to some extent            |
| **Computational Cost** | Can be higher due to non-differentiability at zero        | Generally lower, easier to optimize                          |
| **Geometric Interpretation** | Leads to solutions at the corners of diamonds (due to $|w|$), which are the axes (where some weights are zero). | Leads to solutions on the surface of spheres (due to $w^2$), generally not on the axes. |
| **Use Cases**     | Datasets with many irrelevant features, need for simpler models | General overfitting prevention, when all features might be useful |

**Textbook/Reference Insights:**

*   **Machine learning for absolute beginners (Theobald):** Chapter 9 discusses regularization as a technique to prevent overfitting, and often contrasts L1 and L2 implicitly by describing their effects.
*   **Pattern Recognition and Machine Learning (Bishop):** The geometric interpretation of L1 and L2 regularization is often illustrated to explain why L1 leads to sparsity.

**Important Point to Remember:** The choice between L1 and L2 regularization often depends on the specific problem and dataset. If feature selection is a priority or if you suspect many features are irrelevant, L1 might be preferred. If the goal is simply to reduce the magnitude of weights and prevent overfitting in a more general way, L2 is often a good default. It's also common to use a combination of both (Elastic Net).

---

### 6. Elastic Net Regularization

**Learning Outcome Alignment:** CO1, CO2.

**Key Concepts:**

*   **Combination of L1 and L2:** Elastic Net is a regularization technique that combines both L1 and L2 penalties.
*   **Hyperparameters:** It introduces two hyperparameters: $\lambda$ (overall strength) and $l1\_ratio$ (or $\alpha$), which determines the mix of L1 and L2.
    *   $l1\_ratio = 1$: Equivalent to L1 regularization.
    *   $l1\_ratio = 0$: Equivalent to L2 regularization.
    *   $0 < l1\_ratio < 1$: A combination of both.

**Elastic Net Penalty Term:**
$\text{Penalty}_{ElasticNet}(\mathbf{w}) = \rho ||\mathbf{w}||_1 + (1-\rho) \frac{1}{2} ||\mathbf{w}||_2^2$
(where $\rho$ is the mixing parameter, similar to $l1\_ratio$)

**Regularized Cost Function (Elastic Net):**
$J_{ElasticNet}(\mathbf{w}, b) = J(\mathbf{w}, b) + \lambda \left( \rho \sum_{i=1}^n |w_i| + (1-\rho) \sum_{i=1}^n w_i^2 \right)$

**Benefits of Elastic Net:**

*   **Combines Strengths:** Benefits from the feature selection of L1 and the stability and grouping effect of L2.
*   **Handles Multicollinearity Better than Pure L1:** When features are highly correlated, L1 can arbitrarily pick one and zero out the others. Elastic Net, due to the L2 component, tends to select or zero out correlated features together.

**Textbook/Reference Insights:**

*   **Hands-on Machine Learning with Scikit-Learn, Keras, and TensorFlow (Geron):** Chapter 11 might mention Elastic Net as an extension of L1/L2.
*   **Introduction to Machine Learning with Python (Müller & Guido):** Chapter 5 discusses Elastic Net as a practical compromise.

**Practice Question:**

When would you choose Elastic Net over pure L1 or L2 regularization?

**Answer:** You would choose Elastic Net when you want the benefits of both L1 (feature selection and sparsity) and L2 (stability, handling correlated features). If you have a dataset with many features and suspect some are irrelevant (suggesting L1), but also believe that features might be correlated and you want to keep them together (suggesting L2's grouping effect), Elastic Net provides a good balance.

---

### 7. Other Regularization Techniques (Brief Mention)

**Learning Outcome Alignment:** CO1, CO2.

While this topic focuses on L1 and L2, it's important to be aware of other common regularization methods used in ANNs:

*   **Dropout:** Randomly deactivates a fraction of neurons during training. This prevents neurons from becoming too co-dependent and forces the network to learn more robust representations. (Geron, Ekman)
*   **Early Stopping:** Monitors the model's performance on a validation set during training and stops training when performance on the validation set starts to degrade, even if training loss is still decreasing. (Geron)
*   **Data Augmentation:** Artificially increases the size and diversity of the training dataset by applying various transformations (e.g., rotations, flips, crops for images). This exposes the model to more variations and improves generalization. (Geron, Ekman)
*   **Batch Normalization:** Normalizes the inputs to layers, which can help stabilize training and allow for higher learning rates, indirectly acting as a regularizer. (Geron, Ekman)

---

### 8. Key Takeaways and Summary

**Learning Outcome Alignment:** CO1, CO2.

*   **Overfitting is a major challenge:** Models that perform too well on training data often fail to generalize.
*   **Regularization combats overfitting:** It achieves this by adding a penalty to the cost function that discourages complex models, typically by penalizing large weights.
*   **L1 Regularization (Lasso):**
    *   Uses the sum of absolute values of weights.
    *   Promotes sparsity and performs automatic feature selection.
    *   Drives some weights to exactly zero.
*   **L2 Regularization (Ridge):**
    *   Uses the sum of squared values of weights.
    *   Shrinks weights towards zero but rarely makes them exactly zero.
    *   Leads to smoother models.
*   **Elastic Net:** Combines L1 and L2, offering a balance between feature selection and weight shrinkage.
*   **Hyperparameter Tuning ($\lambda$):** The strength of regularization is controlled by a hyperparameter that needs to be tuned (e.g., using cross-validation) to find the optimal balance between bias and variance.

**Important Point to Remember:** Regularization is not a one-size-fits-all solution. The effectiveness of L1, L2, or Elastic Net depends on the dataset, the model architecture, and the specific problem being addressed. Experimentation and hyperparameter tuning are crucial.

---

### 9. Further Practice Questions

1.  **Scenario:** You are building a model to predict housing prices. You have 100 features, including features like "number of bedrooms," "square footage," "distance to city center," and many less relevant features like "color of the front door" or "number of windows on the south side." Your initial model is overfitting.
    *   Which regularization technique would you consider and why?
    *   How would you tune the regularization parameter?

2.  **Concept:** Explain the geometric interpretation of L1 and L2 regularization in the context of finding optimal weights. Why does L1 lead to sparsity?

3.  **Implementation:** In Keras, how would you apply L2 regularization with a strength of 0.001 to the kernel (weights) of a `Dense` layer?

**Answers:**

1.  **Scenario Answer:**
    *   **Technique:** Given the presence of many less relevant features and the overfitting issue, **L1 regularization (Lasso)** would be a strong candidate. Its ability to perform feature selection by driving the weights of irrelevant features to zero would help create a simpler, more interpretable model and reduce overfitting.
    *   **Tuning:** The regularization parameter ($\lambda$) would need to be tuned using techniques like **cross-validation**. You would try several values of $\lambda$ (e.g., 0.001, 0.01, 0.1, 1.0), train the model for each $\lambda$, and evaluate its performance on a validation set. The $\lambda$ that yields the best performance on the validation set (e.g., lowest validation error) would be chosen.

2.  **Concept Answer:**
    *   **Geometric Interpretation:** Imagine the unregularized cost function as contours of a bowl (e.g., ellipses for quadratic cost). The regularization term adds a constraint region.
        *   **L2 Regularization:** The constraint is $w_1^2 + w_2^2 \le C$ (for two weights), which represents a circle. The optimal solution is where the cost function contours first touch the constraint region. Due to the smooth circular boundary, the solution is unlikely to fall exactly on an axis where one weight is zero.
        *   **L1 Regularization:** The constraint is $|w_1| + |w_2| \le C$, which represents a diamond (or square rotated by 45 degrees). The "corners" of this diamond lie on the axes. When the cost function contours touch this diamond, they are highly likely to intersect at one of these corners, where one or more weights are zero.
    *   **Why L1 leads to sparsity:** The sharp corners of the L1 constraint region (the diamond shape) are points where some weights are zero. The optimization process is more likely to find a minimum at these "corner" points, effectively setting the weights of less important features to zero, thus achieving sparsity.

3.  **Implementation Answer:**
    In Keras, you would use the `kernel_regularizer` argument when defining the `Dense` layer:

    ```python
    from tensorflow.keras import layers, regularizers

    model.add(layers.Dense(
        units=64,
        activation='relu',
        kernel_regularizer=regularizers.l2(0.001) # Apply L2 regularization
    ))

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=33vbFFFn04k) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=M0mx8S05v60) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=APPIZ2S8YmY) |
