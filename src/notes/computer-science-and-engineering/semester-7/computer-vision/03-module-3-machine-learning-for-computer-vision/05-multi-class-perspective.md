---
title: "Multi-Class Perspective."
subject: "COMPUTER VISION"
module: "Module 3: Machine Learning for  Computer Vision :"
branch: "Computer Science and Engineering"
semester: 7
topicId: "684162790fc9aa1fdbc8c3ae"
status: "completed"
scrapedAt: "2026-05-20T17:03:15.185Z"
---
# Computer Vision: Module 3 - Machine Learning for Computer Vision: Multi-Class Perspective

---

## Learning Outcomes:

Upon successful completion of this topic, you will be able to:

*   Understand the fundamental differences between binary and multi-class classification problems in computer vision.
*   Identify and explain common algorithms suitable for multi-class classification tasks.
*   Discuss and apply strategies for adapting binary classifiers to multi-class scenarios.
*   Explain and implement evaluation metrics specific to multi-class classification.
*   Understand and address challenges associated with multi-class classification in computer vision.

---

## 1. Introduction to Multi-Class Classification in Computer Vision

### 1.1 Binary vs. Multi-Class Classification

*   **Binary Classification:**
    *   **Definition:** A classification task where the goal is to categorize an input into one of two possible classes (e.g., "cat" or "not cat," "spam" or "not spam").
    *   **Output:** Typically a single probability score indicating the likelihood of belonging to the positive class.
    *   **Examples in Computer Vision:**
        *   **Object Detection (Simple):** Is there a car in the image? (Yes/No)
        *   **Image Quality Assessment:** Is this image blurry? (Yes/No)
        *   **Medical Imaging:** Does this scan show a tumor? (Yes/No)

*   **Multi-Class Classification:**
    *   **Definition:** A classification task where the goal is to categorize an input into one of *three or more* mutually exclusive classes.
    *   **Output:** Typically a probability distribution over all possible classes, indicating the likelihood of belonging to each class. The class with the highest probability is usually chosen as the prediction.
    *   **Examples in Computer Vision:**
        *   **Image Classification:** What object is in this image? (e.g., "cat," "dog," "car," "chair")
        *   **Digit Recognition (MNIST):** What digit is represented? (0, 1, 2, ..., 9)
        *   **Scene Recognition:** What kind of scene is this? (e.g., "beach," "forest," "city street")
        *   **Facial Expression Recognition:** What emotion is this face displaying? (e.g., "happy," "sad," "angry," "neutral")

### 1.2 Key Concepts

*   **Mutually Exclusive Classes:** In multi-class classification, an instance can only belong to *one* class. For example, an image cannot be both a "cat" and a "dog" simultaneously.
*   **Class Labels:** Each data point is assigned a discrete label corresponding to its true class.
*   **Feature Vector:** The input data (e.g., pixel values, extracted features) is represented as a vector of numbers.
*   **Decision Boundary:** In a feature space, the regions that separate different classes.

---

## 2. Algorithms for Multi-Class Classification

Several machine learning algorithms are inherently designed for multi-class problems, while others require adaptation.

### 2.1 Algorithms Inherently Designed for Multi-Class

*   **Softmax Regression (Multinomial Logistic Regression):**
    *   **Concept:** An extension of logistic regression for multi-class problems. It models the probability of an instance belonging to each class using the softmax function.
    *   **Softmax Function:**
        $$ P(y=k | \mathbf{x}; \mathbf{W}, b) = \frac{e^{\mathbf{w}_k^T \mathbf{x} + b_k}}{\sum_{j=1}^{C} e^{\mathbf{w}_j^T \mathbf{x} + b_j}} $$
        where:
        *   $P(y=k | \mathbf{x})$ is the probability of the input $\mathbf{x}$ belonging to class $k$.
        *   $C$ is the number of classes.
        *   $\mathbf{w}_k$ is the weight vector for class $k$.
        *   $b_k$ is the bias term for class $k$.
    *   **Training:** Typically trained using cross-entropy loss.
    *   **Example:** Used as the final layer in many deep neural networks for image classification.

*   **Support Vector Machines (SVMs) with Multi-Class Strategies:**
    *   While standard SVMs are binary, they can be extended to multi-class. (See section 3.1 for strategies).

*   **Decision Trees and Ensemble Methods (Random Forests, Gradient Boosting):**
    *   **Concept:** These algorithms naturally handle multi-class classification by recursively partitioning the feature space. At each split, they aim to create subsets of data that are purer with respect to the class labels.
    *   **Decision Trees:** Create a tree-like structure where internal nodes represent tests on features, branches represent outcomes of the tests, and leaf nodes represent class labels.
    *   **Random Forests:** An ensemble of decision trees. Each tree is trained on a random subset of the data and features. The final prediction is made by majority voting (for classification).
    *   **Gradient Boosting Machines (e.g., XGBoost, LightGBM):** Build models sequentially, where each new model tries to correct the errors of the previous ones. They can be adapted for multi-class problems.
    *   **Example:** Random Forests are very effective for tasks like classifying different types of cells in microscopy images or identifying agricultural crop types from satellite imagery.

*   **K-Nearest Neighbors (KNN):**
    *   **Concept:** Classifies a new data point based on the majority class of its $K$ nearest neighbors in the feature space.
    *   **Multi-Class Application:** Simply counts the occurrences of each class among the $K$ neighbors and assigns the most frequent class.
    *   **Example:** Identifying the type of handwriting from a set of handwritten digits.

*   **Naive Bayes (Multinomial Naive Bayes):**
    *   **Concept:** A probabilistic classifier based on Bayes' theorem with a strong (naive) assumption of independence between features.
    *   **Multinomial Naive Bayes:** Suitable for discrete features, often used with text data or count-based features.
    *   **Example:** Classifying images based on bag-of-words representations of local image features.

### 2.2 Deep Learning Architectures

Deep learning models, particularly Convolutional Neural Networks (CNNs), are state-of-the-art for many computer vision tasks, including multi-class classification.

*   **Convolutional Neural Networks (CNNs):**
    *   **Architecture:** Typically consists of convolutional layers (for feature extraction), pooling layers (for dimensionality reduction and robustness), and fully connected layers.
    *   **Output Layer:** For multi-class classification, the final fully connected layer usually has $C$ nodes (where $C$ is the number of classes), and a **softmax activation function** is applied to produce a probability distribution over the classes.
    *   **Loss Function:** **Categorical Cross-Entropy** is commonly used to train CNNs for multi-class classification.
    *   **Examples:**
        *   **ImageNet Classification:** Classifying images into 1000 categories.
        *   **Object Recognition:** Identifying different types of vehicles, animals, furniture, etc.
        *   **Facial Recognition:** Classifying individuals based on their facial features.

---

## 3. Strategies for Adapting Binary Classifiers to Multi-Class

When algorithms are inherently binary, strategies are employed to extend them to handle multiple classes.

### 3.1 One-vs-Rest (OvR) / One-vs-All (OvA)

*   **Concept:** This strategy trains $C$ independent binary classifiers, where $C$ is the number of classes.
    *   Classifier $i$ is trained to distinguish class $i$ from *all other classes* combined.
    *   For a given input, all $C$ classifiers are run. The class whose classifier outputs the highest confidence (or probability) is selected as the prediction.
*   **Implementation:**
    *   For class $i$: Train a binary classifier to predict "class $i$" (positive) vs. "not class $i$" (negative).
    *   The decision function $f_i(\mathbf{x})$ for each classifier $i$ is used.
    *   The final prediction is $\arg\max_i f_i(\mathbf{x})$.
*   **Pros:**
    *   Simple to implement and understand.
    *   Can use any existing binary classification algorithm.
*   **Cons:**
    *   Can lead to imbalanced training sets for some classifiers (e.g., if one class is very rare, the "rest" group will be very large).
    *   The decisions of the classifiers are independent, which might not always be optimal.
*   **Example:** Training three binary SVMs for classes "cat," "dog," and "bird."
    *   SVM1: "cat" vs. "dog" and "bird"
    *   SVM2: "dog" vs. "cat" and "bird"
    *   SVM3: "bird" vs. "cat" and "dog"
    *   An image is classified as "dog" if SVM2 gives the highest confidence.

### 3.2 One-vs-One (OvO)

*   **Concept:** This strategy trains a binary classifier for every possible *pair* of classes.
    *   For $C$ classes, there are $\binom{C}{2} = \frac{C(C-1)}{2}$ unique pairs.
    *   For a given input, all $\binom{C}{2}$ classifiers are run. The class that wins the most pairwise comparisons is selected. This is often implemented using a "voting" scheme.
*   **Implementation:**
    *   For each pair of classes $(i, j)$: Train a binary classifier that distinguishes between class $i$ and class $j$.
    *   For a new input $\mathbf{x}$, each binary classifier $C_{ij}$ predicts either class $i$ or class $j$.
    *   The final prediction is the class that is predicted by the majority of the binary classifiers.
*   **Pros:**
    *   Often produces better accuracy than OvR, especially for algorithms like SVMs.
    *   Training datasets for each binary classifier are more balanced (equal number of samples from the two classes).
*   **Cons:**
    *   Requires training many more classifiers, which can be computationally expensive and memory-intensive if $C$ is large.
    *   Can be susceptible to ties in voting, requiring a tie-breaking mechanism.
*   **Example:** For classes "cat," "dog," and "bird":
    *   SVM12: "cat" vs. "dog"
    *   SVM13: "cat" vs. "bird"
    *   SVM23: "dog" vs. "bird"
    *   If SVM12 says "cat," SVM13 says "cat," and SVM23 says "dog," then "cat" wins with 2 votes.

---

## 4. Evaluation Metrics for Multi-Class Classification

Evaluating multi-class models requires metrics that can summarize performance across all classes.

### 4.1 Accuracy

*   **Definition:** The proportion of correctly classified instances out of the total number of instances.
    $$ \text{Accuracy} = \frac{\text{Number of Correct Predictions}}{\text{Total Number of Predictions}} $$
*   **Pros:** Simple to understand and interpret.
*   **Cons:** Can be misleading for imbalanced datasets, as a model that always predicts the majority class can achieve high accuracy.

### 4.2 Confusion Matrix

*   **Concept:** A table that summarizes the performance of a classification model by showing the counts of true positive, true negative, false positive, and false negative predictions for each class.
*   **Structure:**
    |                | Predicted Class 0 | Predicted Class 1 | ... | Predicted Class C-1 |
    | :------------- | :---------------- | :---------------- | :-- | :------------------ |
    | **Actual Class 0** | TP$_0$            | FP$_{1 \to 0}$    | ... | FP$_{C-1 \to 0}$    |
    | **Actual Class 1** | FP$_{0 \to 1}$    | TP$_1$            | ... | FP$_{C-1 \to 1}$    |
    | **...**        | ...               | ...               | ... | ...                 |
    | **Actual Class C-1** | FP$_{0 \to C-1}$  | FP$_{1 \to C-1}$  | ... | TP$_{C-1}$          |

    *   **TP$_i$ (True Positive for class $i$):** Instances of class $i$ correctly predicted as class $i$.
    *   **FP$_{j \to i}$ (False Positive for class $i$ due to misclassifying class $j$):** Instances of class $j$ incorrectly predicted as class $i$.
    *   **FN$_{i \to j}$ (False Negative for class $i$ due to misclassifying as class $j$):** Instances of class $i$ incorrectly predicted as class $j$. (This is equivalent to FP$_{j \to i}$).
*   **Pros:** Provides a detailed breakdown of where the model is making mistakes.
*   **Cons:** Can be large and difficult to interpret for a very large number of classes.

### 4.3 Precision, Recall, and F1-Score (Class-wise)

These metrics can be calculated for each class individually and then averaged.

*   **Precision (for class $i$):** The proportion of instances predicted as class $i$ that are actually class $i$.
    $$ \text{Precision}_i = \frac{\text{TP}_i}{\text{TP}_i + \text{FP}_{j \to i} \text{ for all } j \neq i} = \frac{\text{TP}_i}{\text{Number of predictions for class } i} $$
    *   **Focus:** How accurate are the predictions of class $i$?

*   **Recall (Sensitivity or True Positive Rate for class $i$):** The proportion of actual instances of class $i$ that were correctly predicted as class $i$.
    $$ \text{Recall}_i = \frac{\text{TP}_i}{\text{TP}_i + \text{FN}_{i \to j} \text{ for all } j \neq i} = \frac{\text{TP}_i}{\text{Number of actual instances of class } i} $$
    *   **Focus:** How well does the model find all instances of class $i$?

*   **F1-Score (for class $i$):** The harmonic mean of Precision and Recall for class $i$.
    $$ \text{F1-Score}_i = 2 \times \frac{\text{Precision}_i \times \text{Recall}_i}{\text{Precision}_i + \text{Recall}_i} $$
    *   **Focus:** A balance between Precision and Recall.

### 4.4 Averaging Precision, Recall, and F1-Score

To get a single score for the entire model, these class-wise metrics are averaged.

*   **Macro-Averaging:**
    *   **Concept:** Calculate the metric (Precision, Recall, or F1-Score) for each class independently, and then take the *unweighted* average.
    *   **Effect:** Treats all classes equally, regardless of their support (number of instances). Sensitive to performance on minority classes.
    *   $$ \text{Macro-Precision} = \frac{1}{C} \sum_{i=1}^{C} \text{Precision}_i $$
    *   $$ \text{Macro-Recall} = \frac{1}{C} \sum_{i=1}^{C} \text{Recall}_i $$
    *   $$ \text{Macro-F1} = \frac{1}{C} \sum_{i=1}^{C} \text{F1-Score}_i $$

*   **Micro-Averaging:**
    *   **Concept:** Aggregate the contributions of all classes to compute the average metric. This is done by summing up the True Positives, False Positives, and False Negatives across all classes.
    *   **Effect:** Gives equal weight to each *instance*, regardless of its class. Effectively calculates the metrics on the global confusion matrix.
    *   $$ \text{Micro-Precision} = \frac{\sum \text{TP}_i}{\sum \text{TP}_i + \sum \text{FP}_{j \to i}} = \frac{\text{Total Correct Predictions}}{\text{Total Predictions}} = \text{Accuracy} $$
    *   $$ \text{Micro-Recall} = \frac{\sum \text{TP}_i}{\sum \text{TP}_i + \sum \text{FN}_{i \to j}} = \frac{\text{Total Correct Predictions}}{\text{Total Actual Instances}} = \text{Accuracy} $$
    *   $$ \text{Micro-F1} = \text{Micro-Precision} = \text{Micro-Recall} = \text{Accuracy} $$

*   **Weighted-Averaging:**
    *   **Concept:** Calculate the metric for each class independently, then take the average, weighted by the number of true instances for each class (support).
    *   **Effect:** Accounts for class imbalance. Performance on larger classes has a greater impact on the average.
    *   $$ \text{Weighted-Precision} = \sum_{i=1}^{C} \frac{\text{Support}_i}{\text{Total Samples}} \times \text{Precision}_i $$
    *   $$ \text{Weighted-Recall} = \sum_{i=1}^{C} \frac{\text{Support}_i}{\text{Total Samples}} \times \text{Recall}_i $$
    *   $$ \text{Weighted-F1} = \sum_{i=1}^{C} \frac{\text{Support}_i}{\text{Total Samples}} \times \text{F1-Score}_i $$

### 4.5 Classification Report

*   **Concept:** A convenient way to display precision, recall, F1-score, and support for each class, often including macro and weighted averages.

---

## 5. Challenges in Multi-Class Classification

*   **Class Imbalance:**
    *   **Problem:** Some classes have significantly more training examples than others.
    *   **Impact:** Models can become biased towards the majority classes, leading to poor performance on minority classes.
    *   **Solutions:**
        *   **Resampling techniques:** Oversampling minority classes (e.g., SMOTE) or undersampling majority classes.
        *   **Weighted loss functions:** Assigning higher weights to errors on minority classes during training.
        *   **Algorithm choice:** Some algorithms are more robust to imbalance than others.

*   **High Dimensionality:**
    *   **Problem:** Images often have a very large number of features (pixels).
    *   **Impact:** Can lead to the "curse of dimensionality," making it harder for algorithms to find meaningful patterns.
    *   **Solutions:**
        *   **Feature extraction:** Using techniques like PCA or deep learning (CNNs) to reduce dimensionality and learn salient features.
        *   **Regularization:** Techniques like L1 or L2 regularization in linear models or neural networks to prevent overfitting.

*   **Inter-Class Similarity:**
    *   **Problem:** Some classes might be visually very similar (e.g., different breeds of dogs, different types of chairs).
    *   **Impact:** Makes it difficult for the model to distinguish between these classes.
    *   **Solutions:**
        *   **More sophisticated feature representations:** Deep learning models excel at learning discriminative features.
        *   **Data augmentation:** Creating more variations of the data for similar classes.
        *   **Hierarchical classification:** Grouping similar classes together at higher levels.

*   **Computational Cost:**
    *   **Problem:** Training and inference can be computationally expensive, especially with a large number of classes or complex models.
    *   **Impact:** Limits the practical deployment of models.
    *   **Solutions:**
        *   **Efficient algorithms and architectures:** Using optimized deep learning models, faster convergence techniques.
        *   **Hardware acceleration:** GPUs, TPUs.
        *   **Model optimization:** Quantization, pruning, knowledge distillation.

*   **Label Noise:**
    *   **Problem:** Errors in the ground truth labels.
    *   **Impact:** Can degrade model performance and lead to learning incorrect patterns.
    *   **Solutions:**
        *   **Robust loss functions:** Designed to be less sensitive to outliers.
        *   **Data cleaning and verification:** Manual inspection or automated methods.

---

## 6. Practice Questions & Exercises

**Question 1:** You are building a system to classify images of fruits. You have three classes: "Apple," "Banana," and "Orange."
a) Is this a binary or multi-class classification problem?
b) If you were to use SVMs with the OvR strategy, how many binary classifiers would you need to train? Describe the classes each classifier would distinguish.
c) If you were to use SVMs with the OvO strategy, how many binary classifiers would you need to train? Describe the classes each classifier would distinguish.

**Question 2:** Consider a multi-class classification model trained to distinguish between digits 0-9. Suppose the model makes the following predictions for 10 test images:
*   Actual: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
*   Predicted: [0, 1, 0, 3, 4, 5, 9, 7, 8, 9]

Construct the confusion matrix for this scenario.

**Question 3:** Using the confusion matrix from Question 2:
a) Calculate the Precision, Recall, and F1-Score for class 0.
b) Calculate the Precision, Recall, and F1-Score for class 9.
c) Calculate the Macro-Average Precision, Recall, and F1-Score.
d) Calculate the Weighted-Average Precision, Recall, and F1-Score.
e) What is the overall accuracy of the model?

**Question 4:** Why is accuracy often insufficient as a sole evaluation metric for multi-class classification problems, especially when dealing with imbalanced datasets?

---

## Answers to Practice Questions

**Answer 1:**
a) This is a **multi-class classification** problem because there are more than two possible classes (Apple, Banana, Orange).

b) With the **OvR** strategy, you would need to train **3** binary classifiers:
    *   **Classifier 1 (Apple vs. Not Apple):** Distinguishes "Apple" from "Banana" and "Orange" combined.
    *   **Classifier 2 (Banana vs. Not Banana):** Distinguishes "Banana" from "Apple" and "Orange" combined.
    *   **Classifier 3 (Orange vs. Not Orange):** Distinguishes "Orange" from "Apple" and "Banana" combined.

c) With the **OvO** strategy, you would need to train $\binom{3}{2} = \frac{3 \times (3-1)}{2} = 3$ binary classifiers:
    *   **Classifier 1 (Apple vs. Banana):** Distinguishes "Apple" from "Banana."
    *   **Classifier 2 (Apple vs. Orange):** Distinguishes "Apple" from "Orange."
    *   **Classifier 3 (Banana vs. Orange):** Distinguishes "Banana" from "Orange."

**Answer 2:**

Let's analyze the predictions:
*   Class 0: Actual 0 (Correct), Predicted 0 (Correct) -> TP$_0$ = 1
*   Class 1: Actual 1 (Correct), Predicted 1 (Correct) -> TP$_1$ = 1
*   Class 2: Actual 2 (Incorrect), Predicted 0 -> FP$_{0 \to 2}$ = 0, FN$_{2 \to 0}$ = 1
*   Class 3: Actual 3 (Correct), Predicted 3 (Correct) -> TP$_3$ = 1
*   Class 4: Actual 4 (Correct), Predicted 4 (Correct) -> TP$_4$ = 1
*   Class 5: Actual 5 (Correct), Predicted 5 (Correct) -> TP$_5$ = 1
*   Class 6: Actual 6 (Incorrect), Predicted 9 -> FN$_{6 \to 9}$ = 1
*   Class 7: Actual 7 (Correct), Predicted 7 (Correct) -> TP$_7$ = 1
*   Class 8: Actual 8 (Correct), Predicted 8 (Correct) -> TP$_8$ = 1
*   Class 9: Actual 9 (Incorrect), Predicted 9 (Correct) -> TP$_9$ = 1 (but actual 6 was misclassified as 9, so FP$_{9 \to 6}$ = 0, FN$_{6 \to 9}$ = 1, and also one actual 9 was correctly predicted as 9)

Let's be more precise and create the matrix directly.
Total samples = 10. Classes are 0 through 9.

| Actual/Predicted | 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | Total Actual |
| :--------------- | :-: | :-: | :-: | :-: | :-: | :-: | :-: | :-: | :-: | :-: | :-----------: |
| **0**            | 1 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 1            |
| **1**            | 0 | 1 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 1            |
| **2**            | 1 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 1            |
| **3**            | 0 | 0 | 0 | 1 | 0 | 0 | 0 | 0 | 0 | 0 | 1            |
| **4**            | 0 | 0 | 0 | 0 | 1 | 0 | 0 | 0 | 0 | 0 | 1            |
| **5**            | 0 | 0 | 0 | 0 | 0 | 1 | 0 | 0 | 0 | 0 | 1            |
| **6**            | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 1 | 1            |
| **7**            | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 1 | 0 | 0 | 1            |
| **8**            | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 1 | 0 | 1            |
| **9**            | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 1 | 1            |
| **Total Predicted**| 2 | 1 | 0 | 1 | 1 | 1 | 0 | 1 | 1 | 2 | **10**       |

**Confusion Matrix:**
(Diagonal elements are True Positives for each class)
*   TP$_0$=1, FP$_{0 \to 2}$=1 (Actual 2 predicted as 0)
*   TP$_1$=1
*   TP$_2$=0, FN$_{2 \to 0}$=1 (Actual 2 predicted as 0)
*   TP$_3$=1
*   TP$_4$=1
*   TP$_5$=1
*   TP$_6$=0, FN$_{6 \to 9}$=1 (Actual 6 predicted as 9)
*   TP$_7$=1
*   TP$_8$=1
*   TP$_9$=1, FP$_{9 \to 6}$=0 (Actual 6 predicted as 9 means no FP for 9 from 6)
    Let's clarify the FP notation: FP$_{j \to i}$ means an instance of class `j` was predicted as class `i`.
    *   Actual 2 predicted as 0 -> FP$_{2 \to 0}$ = 1
    *   Actual 6 predicted as 9 -> FP$_{6 \to 9}$ = 1
    *   Total predicted for class 0 = 2 (1 TP$_0$, 1 FP$_{2 \to 0}$)
    *   Total predicted for class 9 = 2 (1 TP$_9$, 1 FP$_{6 \to 9}$)

A more standard confusion matrix where rows are Actual and columns are Predicted:

| Actual \ Predicted | 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 |
| :--------------- | :-: | :-: | :-: | :-: | :-: | :-: | :-: | :-: | :-: | :-: |
| **0**            | 1 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| **1**            | 0 | 1 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| **2**            | 1 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| **3**            | 0 | 0 | 0 | 1 | 0 | 0 | 0 | 0 | 0 | 0 |
| **4**            | 0 | 0 | 0 | 0 | 1 | 0 | 0 | 0 | 0 | 0 |
| **5**            | 0 | 0 | 0 | 0 | 0 | 1 | 0 | 0 | 0 | 0 |
| **6**            | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 1 |
| **7**            | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 1 | 0 | 0 |
| **8**            | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 1 | 0 |
| **9**            | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 1 |

**Answer 3:**

From the confusion matrix:
*   TP$_0$=1, FP$_{2 \to 0}$=1 (actual 2 predicted as 0)
*   TP$_1$=1
*   TP$_2$=0, FN$_{2 \to 0}$=1
*   TP$_3$=1
*   TP$_4$=1
*   TP$_5$=1
*   TP$_6$=0, FN$_{6 \to 9}$=1 (actual 6 predicted as 9)
*   TP$_7$=1
*   TP$_8$=1
*   TP$_9$=1, FN$_{9 \to 6}$ is not applicable here based on the data provided. The data shows Actual 6 predicted as 9.

Let's recalculate based on the "Total Actual" and "Total Predicted" from the first matrix.
*   **Class 0:** TP$_0$=1, Total Predicted for 0 = 2 (1 correct, 1 incorrect from class 2). Total Actual 0 = 1.
*   **Class 1:** TP$_1$=1, Total Predicted for 1 = 1. Total Actual 1 = 1.
*   **Class 2:** TP$_2$=0, Total Predicted for 2 = 0. Total Actual 2 = 1 (misclassified as 0).
*   **Class 3:** TP$_3$=1, Total Predicted for 3 = 1. Total Actual 3 = 1.
*   **Class 4:** TP$_4$=1, Total Predicted for 4 = 1. Total Actual 4 = 1.
*   **Class 5:** TP$_5$=1, Total Predicted for 5 = 1. Total Actual 5 = 1.
*   **Class 6:** TP$_6$=0, Total Predicted for 6 = 0. Total Actual 6 = 1 (misclassified as 9).
*   **Class 7:** TP$_7$=1, Total Predicted for 7 = 1. Total Actual 7 = 1.
*   **Class 8:** TP$_8$=1, Total Predicted for 8 = 1. Total Actual 8 = 1.
*   **Class 9:** TP$_9$=1, Total Predicted for 9 = 2 (1 correct, 1 incorrect from class 6). Total Actual 9 = 1.

a) **Class 0:**
    *   TP$_0$ = 1
    *   FP$_{2 \to 0}$ = 1 (Actual 2 predicted as 0)
    *   Total Predicted for class 0 = 2 (1 TP$_0$ + 1 FP$_{2 \to 0}$)
    *   Total Actual class 0 = 1
    *   Precision$_0 = \frac{TP_0}{\text{Total Predicted for 0}} = \frac{1}{2} = 0.5$
    *   Recall$_0 = \frac{TP_0}{\text{Total Actual 0}} = \frac{1}{1} = 1.0$
    *   F1-Score$_0 = 2 \times \frac{0.5 \times 1.0}{0.5 + 1.0} = 2 \times \frac{0.5}{1.5} = 2 \times \frac{1}{3} = \frac{2}{3} \approx 0.67$

b) **Class 9:**
    *   TP$_9$ = 1
    *   FP$_{6 \to 9}$ = 1 (Actual 6 predicted as 9)
    *   Total Predicted for class 9 = 2 (1 TP$_9$ + 1 FP$_{6 \to 9}$)
    *   Total Actual class 9 = 1
    *   Precision$_9 = \frac{TP_9}{\text{Total Predicted for 9}} = \frac{1}{2} = 0.5$
    *   Recall$_9 = \frac{TP_9}{\text{Total Actual 9}} = \frac{1}{1} = 1.0$
    *   F1-Score$_9 = 2 \times \frac{0.5 \times 1.0}{0.5 + 1.0} = 2 \times \frac{0.5}{1.5} = 2 \times \frac{1}{3} = \frac{2}{3} \approx 0.67$

c) **Macro-Averaging:**
    We need to calculate for all classes.
    *   P$_0$=0.5, R$_0$=1.0, F1$_0$=0.67
    *   P$_1$=1.0, R$_1$=1.0, F1$_1$=1.0
    *   P$_2$=0/0 (undefined, treat as 0 or handle as per library), R$_2$=0/1=0, F1$_2$=0
    *   P$_3$=1.0, R$_3$=1.0, F1$_3$=1.0
    *   P$_4$=1.0, R$_4$=1.0, F1$_4$=1.0
    *   P$_5$=1.0, R$_5$=1.0, F1$_5$=1.0
    *   P$_6$=0/0 (undefined, treat as 0), R$_6$=0/1=0, F1$_6$=0
    *   P$_7$=1.0, R$_7$=1.0, F1$_7$=1.0
    *   P$_8$=1.0, R$_8$=1.0, F1$_8$=1.0
    *   P$_9$=0.5, R$_9$=1.0, F1$_9$=0.67

    Sum of Precisions = 0.5 + 1.0 + 0 + 1.0 + 1.0 + 1.0 + 0 + 1.0 + 1.0 + 0.5 = 7.0
    **Macro-Precision = 7.0 / 10 = 0.7**

    Sum of Recalls = 1.0 + 1.0 + 0 + 1.0 + 1.0 + 1.0 + 0 + 1.0 + 1.0 + 1.0 = 9.0
    **Macro-Recall = 9.0 / 10 = 0.9**

    Sum of F1-Scores = 0.67 + 1.0 + 0 + 1.0 + 1.0 + 1.0 + 0 + 1.0 + 1.0 + 0.67 = 8.34
    **Macro-F1 = 8.34 / 10 = 0.834**

d) **Weighted-Averaging:** (Support for each class is 1)
    *   Support$_0$=1, Support$_1$=1, ..., Support$_9$=1. Total Samples = 10.
    *   Since all supports are equal, Weighted-Average will be the same as Macro-Average in this case.
    *   **Weighted-Precision = (1/10)*7.0 = 0.7**
    *   **Weighted-Recall = (1/10)*9.0 = 0.9**
    *   **Weighted-F1 = (1/10)*8.34 = 0.834**

e) **Overall Accuracy:**
    *   Number of Correct Predictions = TP$_0$ + TP$_1$ + TP$_3$ + TP$_4$ + TP$_5$ + TP$_7$ + TP$_8$ + TP$_9$ = 1 + 1 + 1 + 1 + 1 + 1 + 1 + 1 = 8
    *   Total Number of Predictions = 10
    *   **Accuracy = 8 / 10 = 0.8**

**Answer 4:**
Accuracy measures the overall correctness but doesn't reveal how the model performs on individual classes. In cases of **class imbalance**, where one class has many more samples than others, a model can achieve high accuracy by simply predicting the majority class for most instances. This would lead to poor performance on the minority classes, which might be the classes of most interest (e.g., detecting rare diseases). Metrics like precision, recall, F1-score (especially macro- or weighted-averaged), and the confusion matrix provide a more detailed and nuanced understanding of the model's performance across all classes, highlighting any bias or weaknesses related to specific classes.

---

## Important Points to Remember:

*   **Distinction is Key:** Understand the difference between predicting one of two outcomes (binary) versus one of many (multi-class).
*   **Softmax is Common:** Softmax regression and softmax activation in neural networks are fundamental for multi-class probability outputs.
*   **OvR vs. OvO:** Be aware of the two main strategies for adapting binary classifiers, their pros, and cons.
*   **Metrics Matter:** Accuracy alone is often not enough. Use confusion matrices, precision, recall, F1-scores, and their averages to thoroughly evaluate multi-class models.
*   **Class Imbalance is a Major Hurdle:** Always consider and address class imbalance for robust multi-class classification.
*   **Deep Learning Dominance:** CNNs with softmax output layers are the current state-of-the-art for complex multi-class vision tasks.

---
