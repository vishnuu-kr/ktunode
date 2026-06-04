---
title: "Multidimensional scaling"
subject: "MACHINE LEARNING FOR ENGINEERS"
module: "Module 4: Unsupervised Learning"
branch: "Computer Science and Engineering"
semester: 6
topicId: "684162780fc9aa1fdbc8bf5d"
status: "completed"
scrapedAt: "2026-05-20T16:55:11.188Z"
---
# MACHINE LEARNING FOR ENGINEERS - Module 4: Unsupervised Learning

## Topic: Multidimensional Scaling (MDS)

### 1. Introduction to Multidimensional Scaling

Multidimensional Scaling (MDS) is a **dimensionality reduction technique** used to visualize the **similarity or dissimilarity** between a set of objects. It aims to represent these objects as points in a low-dimensional space (typically 2D or 3D) such that the distances between these points in the low-dimensional space reflect the original dissimilarities as closely as possible.

**Key Concepts:**

*   **Objects/Items:** The entities for which we want to visualize relationships. These can be anything from countries, products, documents, genes, etc.
*   **Dissimilarity/Distance:** A measure of how different two objects are. This is usually represented by a **dissimilarity matrix**.
*   **Low-dimensional Space:** The target space (e.g., 2D plane, 3D space) where we want to embed the objects.
*   **Stress Function:** A measure of how well the distances in the low-dimensional embedding match the original dissimilarities. The goal of MDS is to minimize this stress function.

**When to use MDS?**

*   When you have a set of objects and know their pairwise dissimilarities, but not the underlying features.
*   To visualize complex datasets where direct interpretation of raw data is difficult.
*   To discover underlying structure or groupings within the data.

### 2. Types of Multidimensional Scaling

There are two main types of MDS:

#### 2.1. Classical MDS (also known as Metric MDS)

*   **Assumption:** Assumes that the input dissimilarities are **metric**, meaning they satisfy the triangle inequality and are on a ratio scale (e.g., Euclidean distance).
*   **Goal:** To find a configuration of points in a low-dimensional space such that the **Euclidean distances** between these points are as close as possible to the original dissimilarities.
*   **How it works:**
    1.  Starts with a **dissimilarity matrix** $D$, where $D_{ij}$ is the dissimilarity between object $i$ and object $j$.
    2.  **Square the dissimilarities:** $D^2$.
    3.  **Double centering:** This is a crucial step that transforms the squared dissimilarities into a Gram matrix (a matrix of inner products). The double-centered matrix, denoted by $B$, is calculated as:
        $B = - \frac{1}{2} (I - \frac{1}{n}\mathbf{1}\mathbf{1}^T) D^2 (I - \frac{1}{n}\mathbf{1}\mathbf{1}^T)$
        where:
        *   $I$ is the identity matrix.
        *   $\mathbf{1}$ is a vector of ones.
        *   $n$ is the number of objects.
        *   The term $(I - \frac{1}{n}\mathbf{1}\mathbf{1}^T)$ is the centering matrix.
    4.  **Eigen-decomposition:** Perform an eigen-decomposition of the Gram matrix $B$.
        $B = V \Lambda V^T$
        where $\Lambda$ is a diagonal matrix of eigenvalues and $V$ is the matrix of corresponding eigenvectors.
    5.  **Projection:** Select the top $k$ eigenvalues (where $k$ is the desired dimensionality) and their corresponding eigenvectors. The coordinates of the objects in the $k$-dimensional space are given by:
        $X = V_k \Lambda_k^{1/2}$
        where $V_k$ contains the first $k$ eigenvectors and $\Lambda_k$ contains the first $k$ eigenvalues.

*   **Example:** Imagine you have a matrix of distances between cities. Classical MDS would try to place these cities on a 2D map such that the straight-line distances on the map are as close as possible to the driving distances between the cities.

#### 2.2. Non-metric MDS

*   **Assumption:** Assumes that the input dissimilarities are **ordinal**, meaning only the rank order of dissimilarities matters, not their precise values.
*   **Goal:** To find a configuration of points in a low-dimensional space such that the **rank order** of the distances between these points is as close as possible to the rank order of the original dissimilarities.
*   **How it works:**
    1.  Starts with a dissimilarity matrix $D$.
    2.  **Monotonic Regression:** It finds a transformation of the original dissimilarities ($d_{ij}$) into **"fitted dissimilarities"** ($\hat{d}_{ij}$) such that the order of $\hat{d}_{ij}$ best preserves the order of $d_{ij}$.
    3.  **Stress Minimization:** It then tries to find the low-dimensional configuration $X$ such that the Euclidean distances between points in $X$ are as close as possible to these fitted dissimilarities $\hat{d}_{ij}$. This is an iterative optimization process that minimizes a stress function.
*   **Stress Function (e.g., Kruskal's Stress-1):**
    $Stress = \sqrt{\frac{\sum_{i<j} (\hat{d}_{ij} - d'_{ij})^2}{\sum_{i<j} (d'_{ij})^2}}$
    where $d'_{ij}$ are the distances in the low-dimensional embedding.

*   **Example:** Imagine people ranking their preference for different ice cream flavors. Non-metric MDS can be used to create a perceptual map showing how these flavors are related based on their rankings, even if we don't know the exact "dissimilarity" between flavors.

### 3. The Dissimilarity Matrix

The input to MDS is typically a **dissimilarity matrix** (also known as a distance matrix).

*   **Properties of a Dissimilarity Matrix:**
    *   **Square:** It's an $n \times n$ matrix for $n$ objects.
    *   **Symmetric:** $D_{ij} = D_{ji}$ (dissimilarity between A and B is the same as B and A).
    *   **Zero Diagonal:** $D_{ii} = 0$ (dissimilarity of an object with itself is zero).
    *   **Non-negative:** $D_{ij} \ge 0$.
    *   **Metric (for Classical MDS):** Satisfies the triangle inequality: $D_{ij} \le D_{ik} + D_{kj}$ for all $i, j, k$.

*   **Sources of Dissimilarity:**
    *   **Direct Measurement:** Euclidean distance, Manhattan distance, Cosine similarity (converted to dissimilarity).
    *   **Calculated from Features:** If you have features for each object, you can calculate pairwise distances.
    *   **Subjective Judgments:** Rankings, similarity ratings from surveys.

### 4. The Stress Function

The **stress function** quantifies the discrepancy between the dissimilarities in the original space and the distances in the embedded low-dimensional space. The goal of MDS is to find a configuration of points that **minimizes** this stress.

*   **Common Stress Functions:**
    *   **Kruskal's Stress-1:**
        $Stress = \sqrt{\frac{\sum_{i<j} (d'_{ij} - \hat{d}_{ij})^2}{\sum_{i<j} (d'_{ij})^2}}$
        where $d'_{ij}$ are the distances in the low-dimensional space and $\hat{d}_{ij}$ are the fitted dissimilarities (derived from original dissimilarities). This is commonly used in non-metric MDS.
    *   **Sammon's Stress:**
        $Stress = \frac{1}{\sum_{i<j} w_{ij} d_{ij}} \sqrt{\sum_{i<j} w_{ij} \frac{(d_{ij} - d'_{ij})^2}{d_{ij}}}$
        where $w_{ij}$ are weights.
    *   **Torgerson's Stress (for Classical MDS):** Related to the sum of squared differences between the squared dissimilarities and the squared distances. Minimizing this is equivalent to finding the best Euclidean approximation.

*   **Interpreting Stress Values:**
    *   Lower stress values indicate a better fit.
    *   **General Guidelines (for Kruskal's Stress-1):**
        *   < 0.05: Excellent fit
        *   0.05 - 0.10: Good fit
        *   0.10 - 0.20: Fair fit
        *   > 0.20: Poor fit

### 5. Applications of Multidimensional Scaling

MDS is a versatile technique used in various fields:

*   **Psychology:** Perceptual mapping of stimuli (e.g., colors, sounds, brands). Understanding how people perceive relationships between different items.
*   **Marketing:** Analyzing brand perception, market segmentation, product positioning.
*   **Social Sciences:** Visualizing social networks, political affiliations, or cultural similarities.
*   **Bioinformatics:** Analyzing gene expression data, protein similarity.
*   **Information Retrieval:** Visualizing document similarity for search results.
*   **Ecology:** Visualizing species distributions based on environmental factors.

**Example Scenario: Analyzing Car Preferences**

Suppose you surveyed people and asked them to rate the similarity of different car models (e.g., on a scale of 1 to 7, where 1 is very dissimilar and 7 is very similar). You would convert these similarity ratings into dissimilarity ratings (e.g., Dis_ij = 8 - Sim_ij).

Then, you would use MDS to:

1.  **Input:** Create a dissimilarity matrix from the survey responses.
2.  **Process:** Apply classical or non-metric MDS to reduce the relationships to a 2D space.
3.  **Output:** A 2D plot where each car model is a point. Cars that are perceived as similar by people will be closer together on the plot, while dissimilar cars will be further apart. This plot can reveal underlying dimensions of perception, such as "luxury vs. economy" or "sporty vs. practical."

### 6. Practice Questions and Exercises

**Question 1:**
What is the primary goal of Multidimensional Scaling?

**Answer 1:**
The primary goal of MDS is to represent a set of objects in a low-dimensional space (typically 2D or 3D) such that the distances between the points in this low-dimensional space closely reflect the original pairwise dissimilarities or similarities between the objects. It's essentially about visualizing relationships based on dissimilarity information.

**Question 2:**
What is the difference between Classical MDS and Non-metric MDS?

**Answer 2:**
*   **Classical MDS (Metric MDS):** Assumes that the input dissimilarities are **metric** (quantifiable and satisfy the triangle inequality). It aims to preserve the **actual distances** between objects.
*   **Non-metric MDS:** Assumes that the input dissimilarities are **ordinal** (only their rank order matters). It aims to preserve the **rank order** of dissimilarities.

**Question 3:**
Explain the role of the "dissimilarity matrix" in MDS.

**Answer 3:**
The dissimilarity matrix is the fundamental input to MDS. It's an $n \times n$ square matrix where each element $D_{ij}$ represents the measure of dissimilarity (or distance, or inverse of similarity) between object $i$ and object $j$. MDS uses this matrix to understand the relationships between all pairs of objects and to create a low-dimensional representation that preserves these relationships.

**Question 4:**
What is a "stress function" in the context of MDS, and what does a lower stress value indicate?

**Answer 4:**
A stress function is a measure used in MDS to quantify the error or discrepancy between the distances in the low-dimensional embedding and the original dissimilarities. A lower stress value indicates a better fit of the low-dimensional representation to the original data, meaning the distances in the embedding more accurately represent the original dissimilarities.

**Question 5 (Conceptual):**
Imagine you are trying to visualize the relationships between different cities based on their flight times. Would you likely use Classical MDS or Non-metric MDS, and why?

**Answer 5:**
You would likely use **Classical MDS**. Flight times are generally considered **metric** data. They are quantifiable, non-negative, and typically satisfy the triangle inequality (the flight time between city A and city C is usually less than or equal to the sum of flight times from A to B and B to C). Classical MDS is designed to work with such metric dissimilarities and aims to preserve the actual flight times as much as possible in the 2D map.

### 7. Important Points to Remember

*   **MDS is for visualizing relationships based on dissimilarity/similarity.**
*   **Input is a dissimilarity matrix.**
*   **Classical MDS works with metric dissimilarities and aims to preserve distances.**
*   **Non-metric MDS works with ordinal dissimilarities and aims to preserve rank order.**
*   **The stress function measures the goodness of fit; lower stress is better.**
*   **MDS can reveal hidden structures and groupings in data.**
*   **The axes in an MDS plot do not have inherent meaning like in PCA; they represent dimensions of perceived dissimilarity.**
*   **Interpretation relies on the proximity of points.**

---
