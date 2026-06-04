---
title: "Eigen faces"
subject: "COMPUTER VISION"
module: "Module 4: Object recognition"
branch: "Electrical and Electronics Engineering"
semester: 7
topicId: "68a200872b85456187f36a4c"
status: "completed"
scrapedAt: "2026-05-23T16:33:13.058Z"
---
# Computer Vision: Module 4 - Object Recognition: Eigenfaces

## Introduction to Eigenfaces

Eigenfaces, also known as face space, is a dimensionality reduction technique used for facial recognition. It leverages the power of Principal Component Analysis (PCA) to represent a set of facial images in a lower-dimensional space. This approach was pioneered by Matthew Turk and Alex Pentland in their 1991 paper, "Eigenfaces for Recognition."

**Key Concept:** Representing complex data (images) using a smaller set of basis vectors (eigenfaces).

**Learning Outcome Addressed:**
*   Understanding the fundamental principles of dimensionality reduction for object recognition.

**Course Outcomes Alignment:**
*   **CO5 (K4):** Analyse a given scene using appropriate computer vision algorithms to detect/recognize objects. Eigenfaces is a classic algorithm for object (specifically face) recognition.

---

## 1. Principal Component Analysis (PCA) for Dimensionality Reduction

Eigenfaces heavily relies on PCA. Understanding PCA is crucial.

**Key Concept:** PCA is a statistical method that transforms a dataset into a new coordinate system where the greatest variance by any projection of the data will be on the first coordinate (called the first principal component), the second greatest variance on the second coordinate, and so on.

**Steps in PCA:**

1.  **Data Preparation:**
    *   Gather a dataset of images (e.g., faces).
    *   Resize all images to a uniform size (e.g., 100x100 pixels).
    *   Convert each image into a 1D vector by concatenating its pixels. If an image is $W \times H$, it becomes a vector of length $N = W \times H$.

2.  **Mean Calculation:**
    *   Calculate the average face vector (mean face) across all training images.
    *   Subtract the mean face from each training image vector. This centers the data.

3.  **Covariance Matrix Calculation:**
    *   Compute the covariance matrix $C$ of the mean-subtracted image vectors.
    *   If your training set has $M$ images, each represented by a vector $\mathbf{x}_i$ of dimension $N$, and $\mathbf{\bar{x}}$ is the mean vector, then the covariance matrix $C$ is $N \times N$:
        $C = \frac{1}{M} \sum_{i=1}^{M} (\mathbf{x}_i - \mathbf{\bar{x}})(\mathbf{x}_i - \mathbf{\bar{x}})^T$
    *   **Important Note:** For image data, $N$ (number of pixels) is often much larger than $M$ (number of images). Computing $C$ directly can be computationally prohibitive.

4.  **Singular Value Decomposition (SVD) or Eigenvalue Decomposition:**
    *   **If $N \ll M$:** Compute the eigenvalue decomposition of $C$. The eigenvectors of $C$ are the principal components.
    *   **If $N \gg M$:** Compute the covariance matrix $C' = \frac{1}{M} \sum_{i=1}^{M} (\mathbf{x}_i - \mathbf{\bar{x}})^T (\mathbf{x}_i - \mathbf{\bar{x}})$, which is $M \times M$. Find the eigenvectors ($\mathbf{v}_j$) and eigenvalues ($\lambda_j$) of $C'$.
        $C' \mathbf{v}_j = \lambda_j \mathbf{v}_j$
    *   The principal components (eigenvectors of $C$) can then be found by:
        $\mathbf{u}_j = \frac{1}{\sqrt{\lambda_j}} (\mathbf{x}_j - \mathbf{\bar{x}}) \mathbf{v}_j$
    *   This is often more computationally feasible.

5.  **Selecting Principal Components:**
    *   Sort the eigenvectors (principal components) in descending order of their corresponding eigenvalues.
    *   Select the top $k$ eigenvectors, where $k$ is much smaller than $N$. These $k$ eigenvectors form the lower-dimensional subspace (the "face space"). These are the **eigenfaces**.

**Textbook Reference:**
*   **Davies (2012), Chapter 7: Feature Extraction:** Discusses PCA and other dimensionality reduction techniques.
*   **Szeliski (2011), Chapter 4: Feature Detection and Matching:** Touches upon PCA in the context of feature extraction and dimensionality reduction.

**Highlight:** The eigenvectors with the largest eigenvalues capture the most variance in the data, which corresponds to the most significant features that distinguish the images.

---

## 2. Eigenfaces Construction

Eigenfaces are the principal components derived from a training set of facial images.

**Key Concept:** Eigenfaces are the eigenvectors of the covariance matrix of a set of facial images. They represent the "directions of greatest variance" in the face data, effectively capturing the essential features that define a face.

**Steps for Eigenfaces:**

1.  **Dataset Acquisition:** Collect a large and diverse set of facial images. This is crucial for building a robust face space.
2.  **Preprocessing:**
    *   **Alignment:** Ensure faces are roughly aligned (e.g., eyes at the same horizontal level). This is critical for meaningful results.
    *   **Normalization:** Normalize lighting conditions if possible (e.g., histogram equalization).
    *   **Resizing:** Resize all images to a consistent resolution (e.g., $W \times H$).
    *   **Vectorization:** Convert each $W \times H$ image into a $1 \times (W \times H)$ vector. Let $N = W \times H$.
3.  **Mean Face Calculation:**
    *   Calculate the average of all training image vectors. This results in the "mean face."
    *   Subtract the mean face from each training image vector.
4.  **Covariance Matrix or $A^T A$ Computation:**
    *   Let $\mathbf{X}$ be the matrix where each column is a mean-subtracted training image vector. $X$ is $N \times M$, where $M$ is the number of training images.
    *   The covariance matrix is $C = \frac{1}{M-1} X X^T$. This is an $N \times N$ matrix.
    *   **Efficient Computation (using $A^T A$):** If $N \gg M$, we compute $A = X^T$ (an $M \times N$ matrix). Then $A A^T = X^T X$ (an $M \times M$ matrix).
        *   Find eigenvectors $\mathbf{v}_i$ and eigenvalues $\lambda_i$ of $A A^T$: $A A^T \mathbf{v}_i = \lambda_i \mathbf{v}_i$.
        *   The eigenvectors $\mathbf{u}_i$ of $X X^T$ (the principal components/eigenfaces) can be found by: $\mathbf{u}_i = X \mathbf{v}_i$.
        *   The eigenvalues of $X X^T$ are the same as $A A^T$.
5.  **Eigenfaces Selection:**
    *   Sort the eigenvalues in descending order.
    *   Select the top $k$ eigenvectors (eigenfaces) that correspond to the largest eigenvalues. These $k$ eigenfaces form the basis of the face space.

**Example:**
Imagine you have 100 images, each of size 100x100 pixels (N=10000).
Directly calculating the 10000x10000 covariance matrix is infeasible.
Instead, you form a 100x10000 matrix X. Compute X^T X (10000x100), find its eigenvectors, and then multiply by X to get the 10000-dimensional eigenvectors (eigenfaces).

**Textbook Reference:**
*   **Szeliski (2011), Chapter 4.3.1: Principal Component Analysis:** Provides a good overview of PCA and its application.
*   **Davies (2012), Chapter 7.4: Principal Component Analysis:** Detailed explanation of PCA, including the computational aspects relevant to image processing.

**Highlight:** The number of eigenfaces to keep ($k$) is a trade-off. Too few and you lose too much information; too many and you don't get significant dimensionality reduction. Often, the top $k$ eigenfaces are chosen to represent a certain percentage of the total variance.

---

## 3. Face Representation in Face Space

Once the eigenfaces are computed, any new face image can be projected into this space.

**Key Concept:** A face image can be approximated as a linear combination of the eigenfaces, plus the mean face.

**Steps for Face Representation:**

1.  **Projecting a New Image:**
    *   Take a new face image, preprocess it (align, resize, vectorize) to get a vector $\mathbf{y}$.
    *   Subtract the mean face: $\mathbf{y}_{mean\_subtracted} = \mathbf{y} - \mathbf{\bar{x}}$.
    *   Project this mean-subtracted vector onto each of the $k$ selected eigenfaces ($\mathbf{u}_i$):
        $w_i = \mathbf{u}_i^T (\mathbf{y} - \mathbf{\bar{x}})$ for $i = 1, \dots, k$.
2.  **Feature Vector:** The projection weights ($w_1, w_2, \dots, w_k$) form a $k$-dimensional feature vector for the new face. This vector captures the essential characteristics of the face in the lower-dimensional face space.
3.  **Reconstruction (Optional):** A face can be approximately reconstructed from its feature vector using the mean face and eigenfaces:
    $\mathbf{y}_{reconstructed} = \mathbf{\bar{x}} + \sum_{i=1}^{k} w_i \mathbf{u}_i$.

**Example:**
If you have 100 eigenfaces, a new face can be represented by 100 weights, instead of 100x100=10000 pixel values.

**Textbook Reference:**
*   **Davies (2012), Chapter 7.4.3: PCA for face recognition:** Explicitly discusses how projected faces are represented by coefficients.
*   **Forsyth & Ponce (2002), Chapter 19: Recognition:** Briefly touches upon dimensionality reduction techniques like PCA for recognition.

**Highlight:** The weights ($w_i$) are compact representations of the faces. Faces that are similar in appearance will have similar weight vectors.

---

## 4. Face Recognition using Eigenfaces

Recognition involves comparing the feature vector of an unknown face with those of known faces.

**Key Concept:** Match an unknown face to a known face in the database by finding the closest representation in the face space.

**Steps for Recognition:**

1.  **Training Phase:**
    *   Build the face space by computing the mean face and eigenfaces from a training set of known individuals.
    *   For each known individual's training images, compute their corresponding $k$-dimensional feature vectors (weight vectors). Store these feature vectors and the identity of the person.
2.  **Recognition Phase:**
    *   **Input Unknown Face:** Take an unknown face image.
    *   **Preprocess:** Align, resize, vectorize, and subtract the mean face, just like the training images.
    *   **Project:** Compute the $k$-dimensional feature vector ($\mathbf{w}_{unknown}$) for the unknown face by projecting it onto the eigenfaces.
    *   **Matching:** Compare $\mathbf{w}_{unknown}$ with the stored feature vectors of known individuals. Common distance metrics include:
        *   **Euclidean Distance:** $d(\mathbf{w}_{unknown}, \mathbf{w}_{known}) = \sqrt{\sum_{i=1}^{k} (w_{unknown,i} - w_{known,i})^2}$.
        *   **Manhattan Distance:** $d(\mathbf{w}_{unknown}, \mathbf{w}_{known}) = \sum_{i=1}^{k} |w_{unknown,i} - w_{known,i}|$.
    *   **Identification:** The unknown face is identified as belonging to the person whose stored feature vector is closest to $\mathbf{w}_{unknown}$ based on the chosen distance metric.
    *   **Verification (Optional):** A threshold can be set. If the minimum distance is below the threshold, the face is identified with a known person. Otherwise, it's considered an unknown person.

**Example:**
*   **Training:** You have 10 images of Person A and 10 images of Person B. You compute 50 eigenfaces. For each image of A, you get a 50-dimensional vector. You average these 10 vectors for Person A to get a representative feature vector for A. Do the same for B.
*   **Recognition:** A new face comes in. You compute its 50-dimensional feature vector. You calculate the distance between this new vector and Person A's representative vector, and then with Person B's. Whichever distance is smaller, that's the predicted identity.

**Textbook Reference:**
*   **Davies (2012), Chapter 7.4.3: PCA for face recognition:** Excellent resource detailing the matching process.
*   **Szeliski (2011), Chapter 4.3.1: Principal Component Analysis:** Mentions its use in recognition and classification.

**Highlight:** The accuracy of eigenfaces depends heavily on the quality and diversity of the training data and the preprocessing steps (especially face alignment).

---

## 5. Advantages and Disadvantages of Eigenfaces

**Advantages:**

*   **Dimensionality Reduction:** Significantly reduces the amount of data needed to represent a face, making recognition faster and more efficient.
*   **Simplicity:** Relatively easy to understand and implement.
*   **Global Features:** Captures global facial features effectively.
*   **Computational Efficiency:** Once the face space is built, recognition is very fast.

**Disadvantages:**

*   **Sensitivity to Lighting:** Highly sensitive to variations in lighting conditions. Poor lighting can significantly alter the projection weights.
*   **Sensitivity to Pose and Expression:** Performance degrades significantly with changes in head pose and facial expressions.
*   **Sensitivity to Scale:** Requires accurate face scaling.
*   **Alignment Requirement:** Relies heavily on accurate face alignment. Misalignment leads to poor performance.
*   **Lack of Local Features:** Eigenfaces capture global patterns and might miss crucial local details that differentiate faces.
*   **Training Data Dependence:** Performance is heavily dependent on the training dataset's diversity and quality.
*   **Not Robust to Occlusion:** Partial occlusion (e.g., sunglasses, beard) can lead to poor results.

**Textbook Reference:**
*   **General discussions on recognition techniques in Davies (2012), Szeliski (2011), and Forsyth & Ponce (2002)** often compare different methods, highlighting the strengths and weaknesses of approaches like eigenfaces.

**Highlight:** While historically significant, eigenfaces are often superseded by more robust methods for real-world applications due to their sensitivity to variations.

---

## 6. Relation to Course Outcomes and Other Techniques

**Course Outcomes Addressed:**

*   **CO1 (K2):** While not directly about filtering, PCA can be seen as a form of transformation/filtering of image data into a new feature space.
*   **CO2 (K3):** Morphological and boundary operators are for shape analysis. Eigenfaces are for overall facial structure and appearance.
*   **CO3 (K3):** Edge and corner detection locate specific points. Eigenfaces capture holistic face patterns.
*   **CO4 (K3):** Optical flow is for motion detection, unrelated to static object recognition.
*   **CO5 (K4):** Eigenfaces is a prime example of an algorithm used for object (face) recognition and can be implemented in practical applications.

**Relation to Other CV Techniques:**

*   **Fisherfaces:** An extension of Eigenfaces that uses LDA (Linear Discriminant Analysis) to maximize class separability and minimize intra-class variance, making it more robust to lighting variations.
*   **Local Binary Patterns (LBPs):** A texture descriptor that is more robust to lighting changes and captures local features.
*   **Haar Cascades:** Used for face detection, a prerequisite for face recognition.
*   **Deep Learning (CNNs):** Modern approaches using Convolutional Neural Networks (CNNs) have largely surpassed eigenfaces in accuracy and robustness by learning hierarchical features automatically. (Reference: Goodfellow, Bengio, Courville, 2016)

**Textbook Reference:**
*   **Goodfellow, Bengio, and Courville (2016), Chapter 9: Convolutional Networks:** Provides context on how deep learning approaches differ and excel.
*   **Prince (2012), Chapter 12: Dimensionality Reduction:** Discusses various dimensionality reduction techniques beyond PCA.

**Highlight:** Eigenfaces paved the way for many subsequent facial recognition methods. Understanding it provides a strong foundation for appreciating more advanced techniques.

---

## Practice Questions and Exercises

**Question 1 (Conceptual):**
What is the primary goal of using Eigenfaces in object recognition, and what mathematical technique enables this?

**Answer:** The primary goal is to reduce the dimensionality of facial image data for efficient representation and recognition. The mathematical technique used is Principal Component Analysis (PCA).

---

**Question 2 (Conceptual):**
Explain why computing the covariance matrix directly from high-resolution images can be computationally challenging. How is this typically addressed in Eigenface algorithms?

**Answer:** High-resolution images (e.g., 100x100 pixels) result in a large number of dimensions (10,000). A covariance matrix for this data would be 10,000x10,000, which is computationally expensive and memory-intensive to compute and store. This is typically addressed by using Singular Value Decomposition (SVD) or by computing the eigenvectors of the smaller $M \times M$ matrix ($A^T A$, where $M$ is the number of images) instead of the $N \times N$ matrix ($X X^T$).

---

**Question 3 (Application):**
Imagine you have a dataset of 50 grayscale images of faces, each 64x64 pixels. You compute the mean face and then project a new, unknown face image onto the first 20 principal components (eigenfaces).
a) What is the dimension of each image vector before PCA?
b) What is the dimension of the feature vector representing the unknown face after projection onto the eigenfaces?
c) If you wanted to reconstruct the unknown face from its projected representation, what components would you need?

**Answer:**
a) Dimension of each image vector: $64 \times 64 = 4096$ pixels.
b) Dimension of the feature vector: 20 (since it's projected onto the first 20 eigenfaces).
c) To reconstruct the face, you would need:
    *   The mean face vector.
    *   The 20 eigenfaces (principal components).
    *   The 20 projection weights (feature vector) of the unknown face.

---

**Question 4 (Critical Thinking):**
List at least two situations where Eigenfaces would likely perform poorly compared to more modern facial recognition techniques. Briefly explain why.

**Answer:**
1.  **Varying Lighting Conditions:** Eigenfaces are very sensitive to lighting. A bright light source from one side can drastically change the pixel values and thus the projection weights, leading to misidentification. Modern methods like those using deep learning are often trained to be invariant to lighting changes.
2.  **Significant Pose Changes (e.g., profile views):** Eigenfaces are trained on frontal or near-frontal faces. A person looking sideways (profile view) will have a very different appearance that the existing eigenfaces might not capture well, leading to poor recognition. Deep learning models can learn to handle a wider range of poses.

---

**Exercise (Implementation Hint):**
Using a library like OpenCV or scikit-learn in Python, try to:
1.  Load a dataset of face images (e.g., the ORL dataset).
2.  Preprocess them (resize, convert to grayscale, vectorize).
3.  Compute the mean face.
4.  Calculate the principal components (eigenfaces) using PCA.
5.  Project a few images onto the first 10 eigenfaces.
6.  Attempt to reconstruct one of the images from its projected representation and visualize the result.

---

## Key Points to Remember

*   **Eigenfaces are eigenvectors of the covariance matrix of face images.**
*   **PCA is the core technique for dimensionality reduction.**
*   **The mean face is crucial for centering the data.**
*   **Faces are represented by a small set of weights after projection onto eigenfaces.**
*   **Recognition is achieved by comparing feature vectors using a distance metric.**
*   **Eigenfaces are sensitive to lighting, pose, and scale.**
*   **Preprocessing (especially alignment) is critical for good performance.**
*   **Modern methods (like Deep Learning) generally outperform Eigenfaces in robustness and accuracy.**

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=gI-qXk7XojA) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=F_4HkL5r4n0) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=p6Q9_e7_L1w) |
