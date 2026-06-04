---
title: "Multidimensional scaling"
subject: "MACHINE LEARNING"
module: "Module 4: Unsupervised Learning"
branch: "Computer Science and Engineering"
semester: 5
topicId: "684162760fc9aa1fdbc8b5d4"
status: "completed"
scrapedAt: "2026-05-20T16:46:51.310Z"
---
## MACHINE LEARNING - Module 4: Unsupervised Learning - Multidimensional Scaling (MDS)

**Introduction:**

Multidimensional scaling (MDS) is a technique used to visualize the similarity or dissimilarity between data points. It aims to represent data in a lower-dimensional space (typically 2D or 3D) while preserving the pairwise distances as accurately as possible. Unlike supervised learning methods, MDS doesn't require labeled data.  It's particularly useful for exploratory data analysis and visualizing complex relationships.

**Learning Outcomes:**

*   Understand the core concept of Multidimensional Scaling (MDS).
*   Distinguish between Metric and Non-Metric MDS.
*   Explain the stress function and its role in MDS.
*   Implement MDS using Python (specifically scikit-learn).
*   Interpret MDS plots and draw conclusions from the visualized data.
*   Recognize the limitations of MDS.

**1. Core Concept of Multidimensional Scaling (MDS):**

*   **Definition:** MDS is a dimensionality reduction technique that aims to embed data points into a lower-dimensional space (e.g., 2D or 3D) such that the distances between the points in the low-dimensional space reflect the dissimilarities (or similarities) between the points in the original high-dimensional space.

*   **Input:** MDS takes a dissimilarity (or similarity) matrix as input. This matrix represents the pairwise distances or relationships between all pairs of data points.

*   **Output:** MDS provides a set of coordinates for each data point in the lower-dimensional space.  These coordinates can then be plotted to visualize the relationships between the data points.

*   **Goal:** To minimize the "stress" between the original dissimilarities and the distances in the lower-dimensional space.  The stress function measures how well the lower-dimensional configuration represents the original dissimilarities.

*   **Use Cases:**
    *   Visualizing relationships between products based on customer reviews.
    *   Mapping countries based on economic or social indicators.
    *   Creating cognitive maps based on subjective ratings of landmarks.
    *   Analyzing genetic relationships between species.

**2. Metric vs. Non-Metric MDS:**

*   **Metric MDS:**

    *   Assumes that the input dissimilarities are ratio or interval scaled, meaning they have a meaningful magnitude.  We can perform mathematical operations (addition, multiplication, etc.) on them.
    *   Aims to preserve the *exact* distance values between data points in the lower-dimensional space.
    *   Suitable when you have precise distance measurements or similarities that can be treated as distances.
    *   Employs algorithms that directly minimize the difference between the input distances and the distances in the embedding space.
    *   Example: Using the actual physical distances between cities to create a 2D map.

*   **Non-Metric MDS:**

    *   Only assumes that the order (rank) of the dissimilarities is meaningful, not their actual values. Dissimilarities can be ordinal or ranked.
    *   Aims to preserve the *rank order* of the dissimilarities in the lower-dimensional space. In other words, if object A is more dissimilar to object B than to object C, this relationship should be maintained in the lower-dimensional representation.
    *   Suitable when you have subjective ratings or preferences that are difficult to quantify precisely.
    *   Transforms the dissimilarities into monotonic values (using monotonic regression) before calculating the low-dimensional representation.  Monotonic regression ensures that the transformed dissimilarities preserve their rank order.
    *   Example: Creating a map of restaurants based on customer ratings of "likeness," where the specific rating values don't matter as much as the ranking.

*   **Key Differences Summarized:**

    | Feature           | Metric MDS                               | Non-Metric MDS                            |
    | ------------------ | ------------------------------------------ | ------------------------------------------ |
    | Dissimilarity Scale | Ratio or Interval                        | Ordinal                                     |
    | Preservation Goal | Exact Distance Values                     | Rank Order of Dissimilarities              |
    | Transformation    | None                                     | Monotonic Regression                      |
    | Data Type         | Precise measurements, physical distances  | Subjective ratings, preferences           |

**3. Stress Function:**

*   **Definition:** The stress function is a measure of how well the lower-dimensional configuration represents the original dissimilarities. It quantifies the discrepancy between the original dissimilarities and the distances in the reduced space.

*   **Purpose:** MDS algorithms aim to find a configuration of points in the low-dimensional space that minimizes the stress function.  A lower stress value indicates a better fit.

*   **Formula (Simplified):**  Different variations exist, but a common one for Metric MDS is:

    `Stress = sqrt( sum((d_ij - d_ij_hat)^2) / sum(d_ij^2) )`

    where:
        *   `d_ij` is the original dissimilarity between points i and j.
        *   `d_ij_hat` is the Euclidean distance between points i and j in the lower-dimensional space.

*   **Interpretation:**

    *   Stress values range from 0 to 1 (or sometimes 0 to 100%).
    *   A stress of 0 indicates a perfect fit (the distances in the low-dimensional space perfectly match the original dissimilarities).
    *   Higher stress values indicate a poorer fit.
    *   There are guidelines for interpreting stress values, but they are somewhat subjective:

        *   Stress < 0.05: Excellent fit
        *   0.05 < Stress < 0.1: Good fit
        *   0.1 < Stress < 0.2: Fair fit
        *   Stress > 0.2: Poor fit

*   **Stress for Non-Metric MDS:** In Non-Metric MDS, the `d_ij` values in the formula above are replaced by the *transformed* (monotonically regressed) values that best preserve the rank order of the original dissimilarities.

**4. Implementing MDS using Python (scikit-learn):**

```python
import numpy as np
from sklearn import manifold
from sklearn.metrics import euclidean_distances
import matplotlib.pyplot as plt

# Sample Data:  Dissimilarity matrix (replace with your actual data)
# In a real-world scenario, this could be calculated from feature vectors.
# Here, we create a small synthetic example for demonstration.
data = np.array([
    [0, 3, 4, 5, 6],
    [3, 0, 2, 4, 5],
    [4, 2, 0, 3, 4],
    [5, 4, 3, 0, 2],
    [6, 5, 4, 2, 0]
])


# Metric MDS
mds = manifold.MDS(n_components=2, dissimilarity="precomputed", random_state=42)  # dissimilarity="precomputed" is crucial
results = mds.fit(data)
coords = results.embedding_

# Plotting Metric MDS
plt.figure(figsize=(8, 6))
plt.scatter(coords[:, 0], coords[:, 1], marker='o')
for i in range(len(data)):
    plt.annotate(str(i+1), xy=(coords[i, 0], coords[i, 1]), xytext=(coords[i, 0]+0.02, coords[i, 1]+0.02))
plt.title("Metric MDS")
plt.xlabel("Dimension 1")
plt.ylabel("Dimension 2")
plt.show()

# Non-Metric MDS
nmds = manifold.MDS(n_components=2, metric=False, dissimilarity="precomputed", random_state=42)
nresults = nmds.fit(data)
ncoords = nresults.embedding_

# Plotting Non-Metric MDS
plt.figure(figsize=(8, 6))
plt.scatter(ncoords[:, 0], ncoords[:, 1], marker='o')
for i in range(len(data)):
    plt.annotate(str(i+1), xy=(ncoords[i, 0], ncoords[i, 1]), xytext=(ncoords[i, 0]+0.02, ncoords[i, 1]+0.02))
plt.title("Non-Metric MDS")
plt.xlabel("Dimension 1")
plt.ylabel("Dimension 2")
plt.show()
```

*   **Explanation:**

    *   `sklearn.manifold.MDS`:  The MDS class in scikit-learn.
    *   `n_components`:  The number of dimensions in the lower-dimensional space (e.g., 2 for a 2D plot).
    *   `metric=True` (default):  Performs Metric MDS.  `metric=False` performs Non-Metric MDS.
    *   `dissimilarity="precomputed"`: Specifies that the input is a dissimilarity matrix.  If you provide feature vectors directly, you can calculate the dissimilarity matrix using `sklearn.metrics.euclidean_distances` or other distance metrics.
    *   `random_state`:  Used for reproducibility.  MDS algorithms often involve random initialization.
    *   `fit(data)`:  Performs the MDS embedding.
    *   `embedding_`:  An attribute of the fitted MDS object that contains the coordinates of the data points in the lower-dimensional space.
    *   The plotting code creates a scatter plot of the embedded data points.

**Important Notes:**

* **Precomputed Dissimilarity:** Ensure that the `dissimilarity="precomputed"` parameter is set when you are feeding a dissimilarity matrix directly to the `fit()` method.  If you have the original data (feature vectors), you will need to calculate the dissimilarity matrix first, for example, using `euclidean_distances(X)`.
* **Euclidean Distance:**  By default, scikit-learn assumes Euclidean distance.  You might need to specify a different distance metric using libraries like `scipy.spatial.distance` if your data requires it.

**5. Interpreting MDS Plots:**

*   **Proximity:**  Points that are close together in the MDS plot are more similar than points that are far apart.

*   **Clusters:**  Groups of points that cluster together may represent distinct categories or groups within the data.

*   **Relationships:**  The spatial arrangement of points can reveal underlying relationships between them. For example, points that lie along a line might be related in a specific way.

*   **Axis Interpretation:**  Interpreting the axes of the MDS plot can be challenging.  They do not necessarily correspond to specific features in the original data.  You might need to examine the data and consider the context of the problem to assign meaningful labels to the axes.  Often, the dimensions are simply referred to as Dimension 1, Dimension 2, etc.

*   **Stress Evaluation:**  Always consider the stress value when interpreting an MDS plot. A high stress value indicates that the plot may not accurately represent the relationships between the data points.

**Example:**

Imagine you have customer reviews for several brands of coffee.  You calculate a dissimilarity matrix based on the co-occurrence of terms in the reviews (e.g., two brands are dissimilar if their reviews use very different words).  An MDS plot of this dissimilarity matrix might reveal clusters of coffee brands that are perceived similarly by customers.

**6. Limitations of MDS:**

*   **Computational Complexity:**  MDS can be computationally expensive, especially for large datasets. The computational complexity is often at least quadratic, and for some algorithms can be cubic, to the number of data points.

*   **Stress Minimization:** The MDS algorithm aims to find a local minimum of the stress function.  This means that it might not always find the best possible configuration of points.  Different random initializations can lead to different results.  Try running MDS multiple times with different `random_state` values.

*   **Interpretability:**  Interpreting the axes of the MDS plot can be challenging. The dimensions might not have a clear or intuitive meaning.

*   **Global Structure:**  MDS is better at preserving the local structure (relationships between nearby points) than the global structure (relationships between distant points).

*   **Choice of Dissimilarity Metric:** The choice of dissimilarity metric can significantly affect the results of MDS. You need to select a metric that is appropriate for your data and the type of relationships you want to visualize.

*   **Curse of Dimensionality:** While MDS *reduces* dimensions for visualization, the initial computation of the dissimilarity matrix from high-dimensional data can still suffer from the curse of dimensionality (distances become less meaningful in high-dimensional spaces).  Dimensionality reduction techniques like PCA might be helpful as a preprocessing step before MDS in such cases.

**Important Points to Remember:**

*   MDS visualizes similarity/dissimilarity.
*   Metric MDS preserves distances, Non-Metric MDS preserves ranks.
*   The Stress function measures the goodness of fit.
*   The choice of metric vs. non-metric MDS depends on the nature of your data.
*   Interpret MDS plots with caution and consider the stress value.
*   MDS may struggle with very large datasets due to computational complexity.

**Practice Questions/Exercises with Answers:**

1.  **Question:** What is the primary goal of Multidimensional Scaling (MDS)?

    **Answer:** The primary goal of MDS is to represent the relationships (similarities or dissimilarities) between data points in a lower-dimensional space, typically 2D or 3D, so they can be visualized and understood.

2.  **Question:** What is the key difference between Metric and Non-Metric MDS?

    **Answer:** Metric MDS attempts to preserve the exact distance values between data points, while Non-Metric MDS attempts to preserve the rank order of the dissimilarities.

3.  **Question:** What does a high stress value indicate in MDS?

    **Answer:** A high stress value indicates that the lower-dimensional representation is a poor fit for the original dissimilarities.  The MDS plot may not accurately reflect the true relationships between the data points.

4.  **Question:**  You have customer satisfaction ratings (on a scale of 1 to 5) for several products. Would you use Metric or Non-Metric MDS to visualize the relationships between the products based on these ratings?  Why?

    **Answer:** Non-Metric MDS would be more appropriate.  Customer satisfaction ratings are typically ordinal data. The exact numerical difference between ratings (e.g., a rating of 4 vs. a rating of 5) may not be as meaningful as the fact that one product is rated higher than another.  Non-Metric MDS focuses on preserving the rank order of the ratings, which is more relevant in this scenario.

5.  **Question:** How do you provide a precomputed dissimilarity matrix as input to scikit-learn's MDS implementation?

    **Answer:** You must set the `dissimilarity` parameter to `"precomputed"` when creating the `manifold.MDS` object.  For example: `mds = manifold.MDS(n_components=2, dissimilarity="precomputed", ...)`

6.  **Question:** Why should you run MDS multiple times with different random states?

    **Answer:** MDS algorithms often rely on iterative optimization methods that can converge to different local minima depending on the initial starting configuration. By running the algorithm multiple times with different random states, you can increase the likelihood of finding a better solution (a lower stress value) and assess the stability of the resulting embedding.  If the embeddings are very different across runs, it suggests that the solution is unstable or the data is not well-suited for MDS.

These notes provide a comprehensive overview of Multidimensional Scaling. Remember to experiment with the code and explore different datasets to solidify your understanding. Good luck!
