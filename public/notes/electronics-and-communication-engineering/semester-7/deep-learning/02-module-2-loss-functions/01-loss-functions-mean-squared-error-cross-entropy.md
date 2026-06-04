---
title: "Loss functions-Mean Squared Error, Cross Entropy"
subject: "DEEP LEARNING"
module: "Module 2: Loss functions"
branch: "Electronics and Communication Engineering"
semester: 7
topicId: "68a5c461b09ce205780ff13d"
status: "completed"
scrapedAt: "2026-05-23T18:05:44.119Z"
---
# DEEP LEARNING - Module 2: Loss Functions

## Topic: Loss Functions - Mean Squared Error, Cross-Entropy

### Introduction to Loss Functions

In supervised learning, the goal of a neural network is to learn a mapping from input features to output predictions. During the training process, we need a way to quantify how "wrong" our network's predictions are compared to the actual target values. This is where **loss functions** (also known as cost functions or objective functions) come into play.

**Definition:** A loss function is a mathematical function that measures the discrepancy between the predicted output of a model and the true target value. The objective of training a neural network is to minimize this loss.

**Key Concepts:**

*   **Training:** The process of adjusting the model's parameters (weights and biases) to reduce the loss.
*   **Optimization:** Algorithms like Gradient Descent are used to find the parameter values that minimize the loss function.
*   **Gradient:** The derivative of the loss function with respect to the model's parameters. This tells us the direction and magnitude of the steepest increase in loss. By moving in the opposite direction of the gradient, we can decrease the loss.

**Textbook References:**

*   **Magnus Ekman, "Learning Deep Learning"**: Likely introduces loss functions as a fundamental component for guiding the learning process and evaluating model performance.
*   **Aurelien Geron, "Hands-on Machine Learning with Scikit-Learn, Keras and TensorFlow"**: Will provide practical implementations and explanations of various loss functions commonly used in deep learning.
*   **Michael Nielsen, "Neural Networks and Deep Learning"**: Will delve into the mathematical underpinnings of how loss functions guide the error backpropagation process.

### 1. Mean Squared Error (MSE)

**Use Case:** Primarily used for **regression problems**, where the model predicts a continuous numerical value.

**Definition:** Mean Squared Error measures the average of the squared differences between the predicted values and the actual values. Squaring the errors ensures that all errors are positive and penalizes larger errors more heavily.

**Formula:**

$MSE = \frac{1}{N} \sum_{i=1}^{N} (y_i - \hat{y}_i)^2$

Where:
*   $N$ is the number of samples.
*   $y_i$ is the actual target value for sample $i$.
*   $\hat{y}_i$ is the predicted value for sample $i$.

**How it works:**

1.  **Calculate the difference:** For each sample, find the difference between the actual value ($y_i$) and the predicted value ($\hat{y}_i$).
2.  **Square the difference:** Square this difference to make it positive and to penalize larger errors more.
3.  **Average the squared differences:** Sum up all the squared differences and divide by the total number of samples ($N$).

**Example:**

Imagine a regression task where you're predicting house prices.

*   **Actual Price:** \$300,000
*   **Predicted Price:** \$320,000

The error is \$320,000 - \$300,000 = \$20,000.
The squared error is (\$20,000)^2 = 400,000,000.

If you have multiple predictions, you would average these squared errors.

**Gradient of MSE:**

For a single sample, the gradient of MSE with respect to the predicted value $\hat{y}$ is:

$\frac{\partial MSE}{\partial \hat{y}} = \frac{\partial}{\partial \hat{y}} \frac{1}{2} (y - \hat{y})^2 = -(y - \hat{y}) = \hat{y} - y$

*(Note: Often, a factor of 1/2 is included in the MSE formula to simplify the gradient calculation, making it $(y - \hat{y})^2 / 2$. The derivative then becomes $-(y-\hat{y})$.)*

This gradient tells us how much the MSE changes as the prediction $\hat{y}$ changes. During backpropagation, this gradient is used to update the weights of the network.

**Advantages of MSE:**

*   **Smooth and differentiable:** Makes it suitable for gradient-based optimization methods.
*   **Penalizes large errors:** The squaring term means that outliers or significant prediction errors contribute more to the loss.

**Disadvantages of MSE:**

*   **Sensitive to outliers:** A few data points with very large errors can disproportionately influence the loss and the training process, potentially leading to a model that performs poorly on the majority of the data.
*   **Not ideal for classification:** MSE assumes a continuous output and can lead to issues when applied to classification tasks, especially with activation functions like sigmoid or softmax which are designed for probabilities.

**Learning Outcome Alignment:**

*   **CO1 (Knowledge Level K2):** Explains the basic concepts of neural networks by understanding how loss functions are used to guide training. MSE is a fundamental concept here.

### 2. Cross-Entropy Loss

**Use Case:** Primarily used for **classification problems**, especially when the output layer uses a **sigmoid** (for binary classification) or **softmax** (for multi-class classification) activation function.

**Definition:** Cross-entropy loss measures the difference between two probability distributions: the true distribution (where the correct class has a probability of 1 and others have 0) and the predicted distribution of probabilities. It quantifies how "far apart" these two distributions are.

**Key Concepts:**

*   **Probability Distribution:** A function that assigns probabilities to each possible outcome.
*   **True Distribution (Ground Truth):** For a classification task, this is a one-hot encoded vector where the correct class has a probability of 1 and all other classes have a probability of 0.
*   **Predicted Distribution:** The output of the neural network's final layer (after activation) representing the model's estimated probabilities for each class.
*   **Information Theory:** Cross-entropy originates from information theory and measures the average number of bits needed to identify an event drawn from a particular probability distribution when using a code that is optimized for a different distribution.

**Types of Cross-Entropy:**

#### a) Binary Cross-Entropy (BCE)

**Use Case:** Binary classification problems (e.g., spam detection, disease prediction). The output layer typically has a single neuron with a sigmoid activation function, predicting the probability of the positive class.

**Formula:**

$BCE = -\frac{1}{N} \sum_{i=1}^{N} [y_i \log(\hat{y}_i) + (1 - y_i) \log(1 - \hat{y}_i)]$

Where:
*   $N$ is the number of samples.
*   $y_i$ is the true label for sample $i$ (0 or 1).
*   $\hat{y}_i$ is the predicted probability of the positive class for sample $i$ (between 0 and 1).

**How it works:**

*   If the true label ($y_i$) is 1: The loss becomes $-\log(\hat{y}_i)$. To minimize this, $\hat{y}_i$ needs to be close to 1.
*   If the true label ($y_i$) is 0: The loss becomes $-\log(1 - \hat{y}_i)$. To minimize this, $(1 - \hat{y}_i)$ needs to be close to 1, meaning $\hat{y}_i$ needs to be close to 0.

**Example:**

Predicting if an email is spam (1) or not spam (0).

*   **Sample 1:**
    *   True label ($y$): 1 (Spam)
    *   Predicted probability ($\hat{y}$): 0.9 (90% chance of spam)
    *   Loss contribution: $-1 * \log(0.9) \approx -(-0.105) = 0.105$

*   **Sample 2:**
    *   True label ($y$): 0 (Not Spam)
    *   Predicted probability ($\hat{y}$): 0.2 (20% chance of spam)
    *   Loss contribution: $-(1 - 0) * \log(1 - 0.2) = -1 * \log(0.8) \approx -(-0.223) = 0.223$

**Gradient of BCE:**

For a single sample, the gradient of BCE with respect to the predicted probability $\hat{y}$ is:

$\frac{\partial BCE}{\partial \hat{y}} = -\frac{y}{\hat{y}} + \frac{1 - y}{1 - \hat{y}}$

This gradient is crucial for backpropagation, adjusting weights to make predictions closer to the true labels.

**Textbook References:**

*   **Aurelien Geron, "Hands-on Machine Learning..."**: Provides extensive practical examples of implementing BCE with Keras/TensorFlow for binary classification.
*   **Michael Nielsen, "Neural Networks and Deep Learning"**: Explains the mathematical derivation and connection to logistic regression, a model that uses BCE.

#### b) Categorical Cross-Entropy

**Use Case:** Multi-class classification problems (e.g., image classification into categories like cat, dog, bird). The output layer typically has multiple neurons (one for each class) with a softmax activation function, producing a probability distribution over all classes.

**Formula:**

$Categorical \ Cross-Entropy = -\frac{1}{N} \sum_{i=1}^{N} \sum_{c=1}^{C} y_{i,c} \log(\hat{y}_{i,c})$

Where:
*   $N$ is the number of samples.
*   $C$ is the number of classes.
*   $y_{i,c}$ is the true label for sample $i$ and class $c$ (1 if sample $i$ belongs to class $c$, 0 otherwise - one-hot encoding).
*   $\hat{y}_{i,c}$ is the predicted probability of sample $i$ belonging to class $c$.

**How it works:**

For each sample, the loss is calculated by summing the $-\log(\hat{y}_{i,c})$ terms only for the correct class (where $y_{i,c}=1$). This means that only the predicted probability for the *true class* contributes to the loss. To minimize the loss, the predicted probability for the true class must be as close to 1 as possible.

**Example:**

Classifying images into three categories: Cat (0), Dog (1), Bird (2).

*   **Sample 1:**
    *   True label: Dog (index 1). One-hot encoded: [0, 1, 0]
    *   Predicted probabilities (after softmax): [0.1, 0.7, 0.2]
    *   Loss contribution for Sample 1:
        $$-(0 * \log(0.1) + 1 * \log(0.7) + 0 * \log(0.2))$$
        $$= -1 * \log(0.7)$$
        $$\approx -(-0.357) = 0.357$$

**Gradient of Categorical Cross-Entropy:**

For a single sample and a specific class $c$, the gradient with respect to the predicted probability $\hat{y}_c$ is:

$\frac{\partial CE}{\partial \hat{y}_c} = -\frac{y_c}{\hat{y}_c}$

Where $y_c$ is the true probability for class $c$ (0 or 1). When the network's output is directly used to calculate the gradient, this simplifies to $(\hat{y}_c - y_c)$ after considering the softmax derivative. This is very similar to the gradient of MSE, but applied to probability distributions.

**Textbook References:**

*   **Aurelien Geron, "Hands-on Machine Learning..."**: Demonstrates multi-class classification using categorical cross-entropy and softmax.
*   **Magnus Ekman, "Learning Deep Learning"**: Likely covers the theoretical aspects of cross-entropy for classification and its relationship with maximum likelihood estimation.

**Advantages of Cross-Entropy:**

*   **Well-suited for classification:** Works harmoniously with sigmoid and softmax activation functions.
*   **Strong gradients:** When predictions are far from the target (e.g., predicting 0.1 when the target is 1), the $-\log(\hat{y})$ term becomes very large, providing strong gradients that quickly adjust the weights. This is often referred to as the "saturation" problem being beneficial for cross-entropy.
*   **More interpretable:** Directly relates to the difference between probability distributions.

**Disadvantages of Cross-Entropy:**

*   **Can be sensitive to mislabeled data:** If the ground truth labels are incorrect, the model will try to fit to these incorrect labels, leading to poor performance.
*   **Numerical stability:** $\log(0)$ is undefined, so implementations often clip predicted probabilities to avoid zero.

**Learning Outcome Alignment:**

*   **CO1 (Knowledge Level K2):** Explains the basic concepts of neural networks by understanding how loss functions are used to guide training. Cross-entropy is crucial for classification tasks.
*   **CO2 (Knowledge Level K2):** Solving real-world problems using CNNs often involves classification, so understanding cross-entropy is vital for CNN applications.
*   **CO3 (Knowledge Level K2):** Similarly, RNNs are often used for sequence classification, requiring knowledge of cross-entropy.

### Important Points to Remember

*   **Choice of Loss Function Matters:** The loss function should be chosen based on the type of problem you are solving (regression vs. classification) and the nature of your output (continuous values vs. probability distributions).
*   **MSE for Regression, Cross-Entropy for Classification:** This is a general rule of thumb.
*   **Differentiability is Key:** Loss functions must be differentiable to enable gradient-based optimization.
*   **Gradients Guide Learning:** The gradients of the loss function with respect to the network's parameters tell us how to adjust those parameters to reduce the error.
*   **Outliers:** Be mindful of how outliers can affect the loss function. MSE is more sensitive to outliers than cross-entropy.
*   **Numerical Stability:** For cross-entropy, ensure that predicted probabilities do not become exactly 0 or 1 to avoid $\log(0)$ issues. Keras/TensorFlow typically handle this internally with clipping.

### Practice Questions & Exercises

**Question 1 (Conceptual):**
What is the primary difference in the types of problems for which Mean Squared Error and Cross-Entropy loss functions are typically used?

**Answer 1:**
Mean Squared Error (MSE) is primarily used for **regression problems** where the output is a continuous numerical value. Cross-Entropy loss is primarily used for **classification problems**, especially when the model outputs probabilities.

---

**Question 2 (Calculation - MSE):**
Suppose you have a regression problem with the following actual and predicted values for three data points:

| Data Point | Actual Value ($y$) | Predicted Value ($\hat{y}$) |
| :--------- | :----------------- | :-------------------------- |
| 1          | 10                 | 12                          |
| 2          | 5                  | 6                           |
| 3          | 8                  | 11                          |

Calculate the Mean Squared Error (MSE) for these predictions.

**Answer 2:**

1.  **Calculate Squared Errors:**
    *   Data Point 1: $(10 - 12)^2 = (-2)^2 = 4$
    *   Data Point 2: $(5 - 6)^2 = (-1)^2 = 1$
    *   Data Point 3: $(8 - 11)^2 = (-3)^2 = 9$

2.  **Calculate MSE:**
    $MSE = \frac{4 + 1 + 9}{3} = \frac{14}{3} \approx 4.67$

---

**Question 3 (Conceptual - Cross-Entropy):**
In a binary classification task, if the true label is 1 and the model predicts a probability of 0.05 for the positive class, how does the Binary Cross-Entropy loss penalize this prediction? Would the loss be high or low?

**Answer 3:**
The Binary Cross-Entropy loss for this case would be $-1 * \log(0.05)$. Since $\log(0.05)$ is a negative number (approximately -2.996), the loss becomes approximately $-(-2.996) = 2.996$. This is a **high** loss. The $-\log(\hat{y})$ term, when $\hat{y}$ is small and the true label is 1, results in a large positive loss, indicating a significant error.

---

**Question 4 (Conceptual - Categorical Cross-Entropy):**
Consider a 3-class classification problem (Cat, Dog, Bird).
*   True label: Dog (class 1)
*   Predicted probabilities (after softmax): [0.1, 0.7, 0.2]

If the true label was actually Bird (class 2), how would the Categorical Cross-Entropy loss change? Would it increase or decrease?

**Answer 4:**

*   **Original Calculation (True Label: Dog, class 1):**
    Loss = $-(0 * \log(0.1) + 1 * \log(0.7) + 0 * \log(0.2)) = -\log(0.7) \approx 0.357$

*   **Hypothetical Calculation (If True Label was Bird, class 2):**
    Loss = $-(0 * \log(0.1) + 0 * \log(0.7) + 1 * \log(0.2)) = -\log(0.2) \approx 1.609$

The loss would **increase** from approximately 0.357 to 1.609. This is because the model's highest predicted probability (0.7) was for Dog (class 1), which was the correct label in the original scenario. If the true label were Bird (class 2), the model would have assigned a low probability (0.2) to the correct class, resulting in a higher loss.

---

**Question 5 (Implementation Hint):**
In Keras, what is the common name for the loss function that implements binary cross-entropy?

**Answer 5:**
`binary_crossentropy`

---

**Question 6 (Implementation Hint):**
In Keras, what is the common name for the loss function that implements categorical cross-entropy for multi-class classification with one-hot encoded labels?

**Answer 6:**
`categorical_crossentropy`

*(Note: If labels are integers (e.g., 0, 1, 2), you would use `sparse_categorical_crossentropy`)*

---

This concludes the notes for Loss Functions - Mean Squared Error and Cross-Entropy. Remember to practice implementing these in your deep learning projects!

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=33vbFFFn04k) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=F_4HkL5r4n0) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=8XG7U5yN668) |
