---
title: "LDA"
subject: "COMPUTER VISION"
module: "Module 4: Object recognition"
branch: "Electrical and Electronics Engineering"
semester: 7
topicId: "68a200872b85456187f36a4a"
status: "completed"
scrapedAt: "2026-05-23T16:33:09.844Z"
---
# Computer Vision: Module 4 - Object Recognition

## Topic: Linear Discriminant Analysis (LDA)

This module delves into object recognition, a fundamental task in computer vision. Within this module, we will explore Linear Discriminant Analysis (LDA), a powerful supervised learning technique for dimensionality reduction and classification, particularly useful for finding linear combinations of features that best separate two or more classes of objects.

---

### Learning Outcomes Covered:

*   **Understanding LDA for Object Recognition:** How LDA can be applied to reduce the dimensionality of image features while preserving class separability, crucial for efficient object recognition.
*   **Feature Extraction using LDA:** Learning how LDA extracts discriminative features from object representations.
*   **Classification with LDA:** Understanding how LDA can be used as a classifier itself or as a preprocessing step for other classifiers.

---

### Course Outcomes Alignment:

*   **CO5: Analyse a given scene using appropriate computer vision algorithms to detect/recognize objects and to implement it in real time practical applications. (Knowledge Level: K4)**
    *   LDA directly contributes to object recognition by providing a robust method for feature extraction and classification, enabling the analysis and identification of objects within a scene. Understanding LDA allows for informed selection of algorithms for real-time applications.

---

### 1. Introduction to Linear Discriminant Analysis (LDA)

**Definition:** Linear Discriminant Analysis (LDA) is a dimensionality reduction technique and a classification algorithm. It seeks to find a linear combination of features that characterizes or separates two or more classes of objects or events. In essence, LDA aims to maximize the ratio of between-class variance to within-class variance.

**Key Concepts:**

*   **Supervised Learning:** LDA requires labeled data, meaning you need to know which class each data point belongs to.
*   **Dimensionality Reduction:** LDA reduces the number of features in a dataset while retaining as much class-discriminatory information as possible. This can lead to more efficient computation and potentially better model performance by removing noisy or irrelevant features.
*   **Classification:** LDA can be used directly for classification by finding decision boundaries in the reduced-dimensional space.
*   **Class Separability:** The primary goal of LDA is to find directions (discriminants) that best separate the classes.

**In the context of Object Recognition:**

*   **Feature Space:** Images are often represented by feature vectors (e.g., histograms of gradients, color histograms, or features from deep learning models). LDA operates on this feature space.
*   **Object Classes:** Different types of objects (e.g., cars, faces, pedestrians) form the different classes.
*   **Training Data:** A dataset of images with known object labels is used for training.

---

### 2. Mathematical Formulation of LDA

LDA aims to find a projection matrix **W** such that when data points **x** are projected onto the directions defined by **W**, the projected points for different classes are well-separated.

Let:
*   $C$ be the number of classes.
*   $x_i$ be a feature vector for the $i$-th data point.
*   $y_i$ be the class label for the $i$-th data point.
*   $N$ be the total number of data points.
*   $N_c$ be the number of data points in class $c$.
*   $\mu_c$ be the mean vector of class $c$.
*   $\mu$ be the mean vector of all data points.

**Key Matrices:**

1.  **Within-Class Scatter Matrix ($S_W$):**
    *   Measures the spread of data points within each class.
    *   It's the sum of the scatter matrices for each class.
    *   The scatter matrix for class $c$, $S_c$, is defined as: $S_c = \sum_{x_i \in \text{class } c} (x_i - \mu_c)(x_i - \mu_c)^T$
    *   $S_W = \sum_{c=1}^C S_c = \sum_{c=1}^C \sum_{x_i \in \text{class } c} (x_i - \mu_c)(x_i - \mu_c)^T$

2.  **Between-Class Scatter Matrix ($S_B$):**
    *   Measures the separation between the means of different classes.
    *   $S_B = \sum_{c=1}^C N_c (\mu_c - \mu)(\mu_c - \mu)^T$

**The Optimization Problem:**

LDA seeks to find the projection vectors **w** that maximize the ratio:

$$ J(\mathbf{w}) = \frac{\mathbf{w}^T S_B \mathbf{w}}{\mathbf{w}^T S_W \mathbf{w}} $$

This is equivalent to solving the generalized eigenvalue problem:

$$ S_B \mathbf{w} = \lambda S_W \mathbf{w} $$

The solutions **w** are the eigenvectors of $S_W^{-1} S_B$. The eigenvectors corresponding to the largest eigenvalues are the directions that maximize class separability.

**Dimensionality Reduction:**

*   The maximum number of discriminants (i.e., linearly independent projection vectors) is $C-1$, where $C$ is the number of classes.
*   If we want to reduce the dimensionality to $k$ dimensions (where $k \le C-1$), we select the $k$ eigenvectors of $S_W^{-1} S_B$ corresponding to the $k$ largest eigenvalues.
*   The projection matrix **W** will have these $k$ eigenvectors as its columns.
*   The new, lower-dimensional representation of a data point **x** is $\mathbf{z} = \mathbf{W}^T \mathbf{x}$.

---

### 3. LDA for Dimensionality Reduction in Object Recognition

**How it works:**

1.  **Feature Extraction:** First, extract a feature vector for each object instance in your dataset. For example, this could be a flattened vector of pixel values, a histogram of oriented gradients (HOG), or features extracted from a pre-trained deep learning model.
2.  **Calculate Scatter Matrices:** Compute the within-class scatter matrix ($S_W$) and the between-class scatter matrix ($S_B$) from these feature vectors.
3.  **Solve Eigenvalue Problem:** Find the eigenvectors and eigenvalues of $S_W^{-1} S_B$.
4.  **Select Discriminants:** Choose the $k$ eigenvectors corresponding to the largest eigenvalues. These define the directions of maximum class separability.
5.  **Project Data:** Project all the original feature vectors onto these $k$ discriminants. This results in a new, lower-dimensional feature representation for each object instance.

**Benefits:**

*   **Reduced Feature Space:** Significantly reduces the number of dimensions, making subsequent classification faster and less prone to the curse of dimensionality.
*   **Improved Discriminability:** Focuses on features that best distinguish between object classes, potentially leading to higher accuracy.
*   **Noise Reduction:** By discarding directions with low variance (small eigenvalues), LDA can filter out noise and irrelevant information.

**Example:**

Imagine you have images of cats and dogs, represented by HOG feature vectors.
*   **High-dimensional space:** Each HOG descriptor might have thousands of dimensions.
*   **LDA application:** You compute $S_W$ and $S_B$ for cat and dog feature vectors. You find that the top $k$ (e.g., $k=2$) eigenvectors of $S_W^{-1} S_B$ capture the most significant differences between cat and dog HOG descriptors.
*   **Low-dimensional space:** Projecting the HOG vectors onto these two discriminants reduces the feature space to 2 dimensions. In this 2D space, cat images will tend to cluster in one region, and dog images in another, making them easier to classify.

---

### 4. LDA as a Classifier

LDA can also be used directly as a classifier. After projecting the data into the lower-dimensional space, a new, unseen data point is classified based on its proximity to the class means in this projected space, or by using decision boundaries derived from the projected data.

**Classification Procedure:**

1.  **Train LDA:** Obtain the projection matrix **W** from the training data.
2.  **Project Test Data:** Project a new, unseen data point **x** onto the discriminants: $\mathbf{z} = \mathbf{W}^T \mathbf{x}$.
3.  **Classify:**
    *   **Nearest Class Mean:** Calculate the mean of each class in the projected space. Assign the new data point to the class whose projected mean is closest (e.g., using Euclidean distance).
    *   **Bayesian Classifier:** If the class conditional probabilities are modeled (e.g., as Gaussian distributions in the projected space), a Bayesian classifier can be used. For example, if we assume Gaussian distributions with shared covariance in the projected space, LDA results in linear decision boundaries.

**Reference from Textbooks:**

*   **Davies (2012):** Chapter 13, "Feature Extraction and Data Reduction," discusses techniques like Principal Component Analysis (PCA) and LDA as methods for reducing the dimensionality of image data. It emphasizes how these techniques can improve the efficiency and performance of subsequent recognition stages.
*   **Szeliski (2011):** Chapter 4, "Feature Detection and Matching," and Chapter 11, "Classification and Recognition," would likely cover classification methods. While not always explicitly detailing LDA, the principles of finding discriminative features and reducing dimensions for classification are core to these sections. LDA is a direct application of these principles for supervised recognition.
*   **Forsyth & Ponce (2002):** Their sections on statistical pattern recognition and classification would offer theoretical underpinnings. LDA is a classic statistical method for finding optimal linear decision boundaries.

---

### 5. Applications in Object Recognition

*   **Face Recognition:** LDA is widely used for face recognition. Faces can be represented by feature vectors, and LDA can find projections that best separate different individuals' faces while being robust to variations in lighting and pose. "Fisherfaces" is a well-known face recognition method that uses LDA.
*   **Object Detection Preprocessing:** Even when using more complex classifiers like Support Vector Machines (SVMs) or neural networks, LDA can be used as a preprocessing step to reduce the dimensionality of handcrafted features (like HOG, SIFT) or even features from early layers of deep networks, making the overall system more efficient.
*   **Character Recognition:** Similar to face recognition, LDA can be applied to recognize handwritten or printed characters by finding discriminative features.

---

### 6. Comparison with PCA (Principal Component Analysis)

While both PCA and LDA are dimensionality reduction techniques, they have different objectives:

| Feature            | Principal Component Analysis (PCA)                               | Linear Discriminant Analysis (LDA)                                    |
| :----------------- | :--------------------------------------------------------------- | :-------------------------------------------------------------------- |
| **Objective**      | Maximize variance (find directions of greatest data spread).     | Maximize class separability (find directions that best separate classes). |
| **Learning Type**  | Unsupervised (does not use class labels).                        | Supervised (requires class labels).                                   |
| **Focus**          | Data structure, noise reduction.                                 | Discriminative power, classification.                                 |
| **Output Directions** | Orthogonal directions (principal components).                   | Discriminant directions (not necessarily orthogonal).                 |
| **Number of Components** | Can be up to the number of features (or data points).          | At most $C-1$, where $C$ is the number of classes.                  |

**When to use which:**

*   **PCA:** Useful when you want to capture the most significant variations in your data, reduce noise, or when class labels are unavailable or not relevant to the primary goal of dimensionality reduction.
*   **LDA:** Preferred when the goal is to improve classification performance by finding features that best distinguish between known classes. It's generally more effective for classification tasks.

**Reference from Textbooks:**

*   **Davies (2012):** Chapter 13 explicitly contrasts PCA and LDA, highlighting their different objectives and applications. Davies explains that while PCA focuses on preserving variance, LDA focuses on preserving class separability.
*   **Szeliski (2011):** While Szeliski might discuss PCA more broadly, the underlying principles of feature transformation for recognition are shared. LDA is a discriminative counterpart to PCA's descriptive nature.

---

### 7. Practical Considerations and Limitations

*   **The "Curse of Dimensionality" in Scatter Matrices:** If the number of features is much larger than the number of samples, $S_W$ might be singular or ill-conditioned, making the inversion $S_W^{-1}$ problematic.
    *   **Solutions:**
        *   **Subsampling:** Use a subset of features.
        *   **Dimensionality Reduction first (e.g., PCA):** Apply PCA before LDA to reduce the feature space to a manageable size.
        *   **Regularization:** Add a small identity matrix to $S_W$ ($S_W + \epsilon I$) to make it invertible.
*   **Number of Samples vs. Number of Classes:** LDA requires sufficient data per class. If the number of samples per class is small, especially less than the number of features, LDA can perform poorly. The $C-1$ limit on discriminants also means LDA is not suitable for very high-dimensional reduction if there are many classes.
*   **Linearity Assumption:** LDA finds *linear* combinations of features. If the class boundaries are highly non-linear, LDA might not perform optimally. In such cases, non-linear dimensionality reduction techniques or kernel methods might be more appropriate.
*   **Sensitivity to Outliers:** Like many statistical methods, LDA can be sensitive to outliers, which can disproportionately affect the mean vectors and scatter matrices.

---

### 8. Practice Questions and Exercises

**Question 1:** What is the primary objective of Linear Discriminant Analysis (LDA) in the context of object recognition?
    *   A) To maximize the variance of the data.
    *   B) To minimize the number of features.
    *   C) To maximize the separability between different object classes.
    *   D) To find the principal components of the image data.

**Answer:** C) To maximize the separability between different object classes.

**Question 2:** LDA is a **supervised** learning technique because:
    *   A) It does not require any labeled data.
    *   B) It uses class labels to compute the within-class and between-class scatter matrices.
    *   C) It finds the directions of maximum data variance.
    *   D) It can be applied to any dataset, regardless of its structure.

**Answer:** B) It uses class labels to compute the within-class and between-class scatter matrices.

**Question 3:** What is the maximum number of linear discriminants that can be obtained using LDA for a dataset with $C$ classes?
    *   A) $C$
    *   B) $N$ (total number of samples)
    *   C) $C-1$
    *   D) The number of features

**Answer:** C) $C-1$

**Question 4:** Consider a scenario where you have 100 images of cats and 100 images of dogs. You extract HOG features for each image, resulting in a 500-dimensional feature vector. You want to reduce the dimensionality for faster classification.
    *   a) Would you prefer PCA or LDA for this task, and why?
    *   b) What is the maximum number of dimensions LDA can reduce the data to for this binary classification problem?

**Answer:**
    *   a) You would prefer LDA because the goal is object recognition (classifying cats vs. dogs), and LDA is designed to maximize class separability. PCA would focus on general data variance, not specifically on separating cats from dogs.
    *   b) For $C=2$ classes (cats and dogs), the maximum number of linear discriminants is $C-1 = 2-1 = 1$. So, LDA can reduce the data to at most 1 dimension.

**Question 5 (Conceptual):** You are building a system to recognize different types of fruits (apples, bananas, oranges). You have extracted color histograms for each fruit image. If you use LDA for dimensionality reduction before classification, what characteristic of the color histograms will LDA try to emphasize?

**Answer:** LDA will try to find linear combinations of the color histogram bins that best differentiate between the color profiles of apples, bananas, and oranges. It will focus on the variations in color distribution that are most discriminative for each fruit type, while downplaying variations that are common to all fruits or are simply noise.

---

### 9. Important Points to Remember

*   **LDA is supervised:** It requires labeled data.
*   **Goal:** Maximize between-class variance while minimizing within-class variance.
*   **Dimensionality Reduction:** Reduces features to at most $C-1$ dimensions.
*   **Key Matrices:** Within-Class Scatter ($S_W$) and Between-Class Scatter ($S_B$).
*   **Solution:** Eigenvectors of $S_W^{-1} S_B$.
*   **Contrast with PCA:** PCA is unsupervised and maximizes variance; LDA is supervised and maximizes class separability.
*   **Limitations:** Assumes linearity, can be sensitive to small sample sizes relative to dimensionality, and requires sufficient data per class.
*   **Applications:** Face recognition (Fisherfaces), general object recognition, character recognition.

---

This concludes the study notes for Linear Discriminant Analysis (LDA) within Module 4: Object Recognition. Remember to refer back to the textbooks for more in-depth mathematical derivations and examples. Good luck with your studies!

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=gI-qXk7XojA) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=Q-tL8_628gE) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=p6Q9_e7_L1w) |
