---
title: "Implement and compare hierarchical (agglomerative) and partitional (K-means) clustering algorithms on the Mall Customers dataset. Discuss the strengths and weaknesses of each method based on clustering results and evaluation metrics."
subject: "MACHINE LEARNING LAB"
module: "Module 16: Implement and compare hierarchical (agglomerative) and partitional (K"
branch: "Computer Science and Engineering"
semester: 5
topicId: "684162770fc9aa1fdbc8b996"
status: "completed"
scrapedAt: "2026-05-20T16:47:59.637Z"
---
## MACHINE LEARNING LAB: Module 16 - Clustering Algorithms

**Topic: Implement and compare hierarchical (agglomerative) and partitional (K-means) clustering algorithms on the Mall Customers dataset. Discuss the strengths and weaknesses of each method based on clustering results and evaluation metrics.**

**Learning Outcomes:**

*   Understand the concepts of clustering, hierarchical (agglomerative) clustering, and partitional (K-means) clustering.
*   Implement hierarchical (agglomerative) and K-means clustering algorithms in Python using libraries like scikit-learn.
*   Apply these algorithms to the Mall Customers dataset.
*   Evaluate the performance of both algorithms using appropriate evaluation metrics (e.g., Silhouette Score, Davies-Bouldin Index).
*   Compare and contrast the strengths and weaknesses of hierarchical and K-means clustering based on the results and evaluation metrics.
*   Interpret the clustering results and draw meaningful insights.

---

### 1. Introduction to Clustering

*   **Definition:** Clustering is an unsupervised learning technique that aims to group similar data points together into clusters.
*   **Goal:** To maximize similarity within clusters and minimize similarity between clusters.
*   **Types of Clustering:**
    *   **Partitional Clustering:** Divides data into non-overlapping clusters. (e.g., K-means)
    *   **Hierarchical Clustering:** Creates a hierarchy of clusters, allowing for different levels of granularity. (e.g., Agglomerative Clustering)
    *   **Density-Based Clustering:**  Identifies clusters as dense regions separated by sparser regions. (e.g., DBSCAN - Beyond the scope of this module but worth noting)

---

### 2. K-means Clustering (Partitional Clustering)

*   **Concept:**  K-means aims to partition *n* observations into *k* clusters, where each observation belongs to the cluster with the nearest mean (cluster center or centroid).
*   **Algorithm:**

    1.  **Initialization:** Randomly choose *k* initial centroids.
    2.  **Assignment:** Assign each data point to the nearest centroid based on a distance metric (e.g., Euclidean distance).
    3.  **Update:** Recalculate the centroids of each cluster as the mean of all data points assigned to that cluster.
    4.  **Iteration:** Repeat steps 2 and 3 until convergence (centroids no longer change significantly or a maximum number of iterations is reached).
*   **Key Considerations:**

    *   **Choosing K (Number of Clusters):**  Determining the optimal number of clusters is crucial. Techniques include:
        *   **Elbow Method:** Plot the within-cluster sum of squares (WCSS) for different values of *k*.  Look for an "elbow" point where the decrease in WCSS starts to diminish.
        *   **Silhouette Score:**  Calculates the mean silhouette coefficient for different values of *k*. Higher silhouette scores indicate better-defined clusters.
    *   **Distance Metric:** Euclidean distance is commonly used, but other metrics (e.g., Manhattan distance, cosine similarity) may be appropriate depending on the data.
    *   **Initialization Sensitivity:** K-means can be sensitive to the initial random selection of centroids. Running the algorithm multiple times with different random initializations can help mitigate this.  Libraries like scikit-learn have a `n_init` parameter to handle this.
*   **Advantages:**
    *   Simple and easy to understand.
    *   Relatively efficient for large datasets.
*   **Disadvantages:**
    *   Sensitive to initial centroid selection.
    *   Assumes clusters are spherical and equally sized.
    *   Requires specifying the number of clusters *k* beforehand.
    *   May not perform well with non-convex or irregularly shaped clusters.

**Example (Python using scikit-learn):**

```python
from sklearn.cluster import KMeans
from sklearn.preprocessing import StandardScaler
import pandas as pd
import matplotlib.pyplot as plt

# Load the Mall Customers dataset (replace with your actual file path)
data = pd.read_csv("Mall_Customers.csv")

# Select features for clustering (e.g., Annual Income and Spending Score)
X = data[['Annual Income (k$)', 'Spending Score (1-100)']]

# Scale the data (important for K-means)
scaler = StandardScaler()
X_scaled = scaler.fit_transform(X)

# Elbow Method to find optimal K
wcss = []
for i in range(1, 11):
    kmeans = KMeans(n_clusters=i, init='k-means++', max_iter=300, n_init=10, random_state=0)
    kmeans.fit(X_scaled)
    wcss.append(kmeans.inertia_)

plt.plot(range(1, 11), wcss)
plt.title('Elbow Method')
plt.xlabel('Number of clusters')
plt.ylabel('WCSS')
plt.show()

# Perform K-means clustering with the chosen K (e.g., K=5 based on the elbow method)
kmeans = KMeans(n_clusters=5, init='k-means++', max_iter=300, n_init=10, random_state=0)
y_kmeans = kmeans.fit_predict(X_scaled)

# Add cluster labels to the original dataframe
data['Cluster'] = y_kmeans

# Visualize the clusters
plt.scatter(X_scaled[y_kmeans == 0, 0], X_scaled[y_kmeans == 0, 1], s = 100, c = 'red', label = 'Cluster 1')
plt.scatter(X_scaled[y_kmeans == 1, 0], X_scaled[y_kmeans == 1, 1], s = 100, c = 'blue', label = 'Cluster 2')
plt.scatter(X_scaled[y_kmeans == 2, 0], X_scaled[y_kmeans == 2, 1], s = 100, c = 'green', label = 'Cluster 3')
plt.scatter(X_scaled[y_kmeans == 3, 0], X_scaled[y_kmeans == 3, 1], s = 100, c = 'cyan', label = 'Cluster 4')
plt.scatter(X_scaled[y_kmeans == 4, 0], X_scaled[y_kmeans == 4, 1], s = 100, c = 'magenta', label = 'Cluster 5')
plt.scatter(kmeans.cluster_centers_[:, 0], kmeans.cluster_centers_[:, 1], s = 300, c = 'yellow', label = 'Centroids')
plt.title('Clusters of customers')
plt.xlabel('Annual Income (Scaled)')
plt.ylabel('Spending Score (Scaled)')
plt.legend()
plt.show()


# Evaluate the clustering using Silhouette Score
from sklearn.metrics import silhouette_score
silhouette_avg = silhouette_score(X_scaled, y_kmeans)
print(f"The average silhouette_score is : {silhouette_avg}")
```

---

### 3. Agglomerative Clustering (Hierarchical Clustering)

*   **Concept:**  A bottom-up approach where each data point starts as its own cluster, and then iteratively merges the closest clusters until a single cluster or a desired number of clusters is achieved.
*   **Algorithm:**

    1.  **Initialization:**  Treat each data point as a single cluster.
    2.  **Iteration:**  Find the two closest clusters and merge them into a single cluster.
    3.  **Repeat:** Repeat step 2 until all data points belong to a single cluster, or a specified number of clusters is reached.
*   **Key Considerations:**

    *   **Linkage Criterion:** Defines how the distance between clusters is calculated. Common methods include:
        *   **Single Linkage:**  Minimum distance between any two points in the clusters.
        *   **Complete Linkage:** Maximum distance between any two points in the clusters.
        *   **Average Linkage:** Average distance between all pairs of points in the clusters.
        *   **Ward Linkage:** Minimizes the variance of the clusters being merged.  This is generally a good default.
    *   **Distance Metric:**  Similar to K-means, choose an appropriate distance metric (e.g., Euclidean distance, Manhattan distance, cosine similarity).
    *   **Dendrogram:** A tree-like diagram that visualizes the hierarchical clustering process.  The height of the branches represents the distance between clusters. Cutting the dendrogram at a certain level determines the number of clusters.
*   **Advantages:**
    *   No need to specify the number of clusters *k* beforehand.  The dendrogram allows for exploration at different levels of granularity.
    *   Can reveal the hierarchical relationships between data points.
    *   Less sensitive to initial conditions compared to K-means.
*   **Disadvantages:**
    *   Computationally expensive for large datasets (O(n^3) in the worst case for some linkages).
    *   Can be sensitive to noise and outliers.
    *   Difficult to correct misclassifications once they are made.

**Example (Python using scikit-learn):**

```python
from sklearn.cluster import AgglomerativeClustering
from sklearn.preprocessing import StandardScaler
import pandas as pd
import matplotlib.pyplot as plt
from scipy.cluster.hierarchy import dendrogram, linkage
import numpy as np

# Load the Mall Customers dataset (replace with your actual file path)
data = pd.read_csv("Mall_Customers.csv")

# Select features for clustering (e.g., Annual Income and Spending Score)
X = data[['Annual Income (k$)', 'Spending Score (1-100)']]

# Scale the data (important for distance-based algorithms)
scaler = StandardScaler()
X_scaled = scaler.fit_transform(X)


# Create a dendrogram to determine the number of clusters
linked = linkage(X_scaled, 'ward')  # Use 'ward' linkage
plt.figure(figsize=(10, 7))
dendrogram(linked,
            orientation='top',
            distance_sort='ascending',
            show_leaf_counts=True)
plt.title("Dendrogram")
plt.xlabel("Sample Index or (Cluster Size)")
plt.ylabel("Distance")
plt.show()

# Perform Agglomerative Clustering (e.g., with 5 clusters based on dendrogram)
cluster = AgglomerativeClustering(n_clusters=5, affinity='euclidean', linkage='ward')
y_hc = cluster.fit_predict(X_scaled)

# Add cluster labels to the original dataframe
data['Cluster_Hierarchical'] = y_hc

# Visualize the clusters
plt.figure(figsize=(10, 7))
plt.scatter(X_scaled[:,0], X_scaled[:,1], c=cluster.labels_, cmap='rainbow')
plt.title('Agglomerative Clustering')
plt.xlabel('Annual Income (Scaled)')
plt.ylabel('Spending Score (Scaled)')
plt.show()

# Evaluate the clustering using Silhouette Score
from sklearn.metrics import silhouette_score
silhouette_avg = silhouette_score(X_scaled, y_hc)
print(f"The average silhouette_score is : {silhouette_avg}")
```

---

### 4. Comparing K-means and Agglomerative Clustering

| Feature          | K-means                                       | Agglomerative Clustering                            |
|-------------------|---------------------------------------------|---------------------------------------------------|
| Approach         | Partitional                                  | Hierarchical                                        |
| Number of Clusters | Must be specified beforehand                  | Can be determined from the dendrogram                 |
| Cluster Shape      | Assumes spherical, equally sized clusters    | Can handle more complex shapes                       |
| Scalability      | Relatively efficient for large datasets     | Computationally expensive for large datasets       |
| Sensitivity to Init | Sensitive to initial centroid selection     | Less sensitive to initial conditions                |
| Interpretability | Easy to understand and interpret            | Dendrogram provides hierarchical insights             |
| Outlier Handling  | Outliers can significantly affect centroids | Can be sensitive to outliers, especially with single linkage |

---

### 5. Evaluation Metrics

*   **Silhouette Score:**
    *   Measures how well each data point fits within its cluster compared to other clusters.
    *   Ranges from -1 to +1.
    *   Values close to +1 indicate good clustering, values close to 0 indicate overlapping clusters, and values close to -1 indicate that data points may have been assigned to the wrong cluster.
*   **Davies-Bouldin Index:**
    *   Measures the average similarity ratio of each cluster with its most similar cluster.
    *   Lower values indicate better clustering.
*   **Within-Cluster Sum of Squares (WCSS) / Inertia (used in Elbow Method):**
    *   The sum of squared distances of samples to their closest cluster center.
    *   Lower WCSS indicates more compact clusters.

**Important:** The choice of evaluation metric depends on the specific dataset and the goals of the clustering analysis.

---

### 6. Applying to the Mall Customers Dataset

*   **Dataset Overview:** The Mall Customers dataset typically contains information about customers, such as their CustomerID, Gender, Age, Annual Income, and Spending Score.
*   **Feature Selection:**  Choose relevant features for clustering (e.g., Annual Income, Spending Score).  Consider the domain and what relationships you're trying to uncover.
*   **Data Preprocessing:** Scale the data using `StandardScaler` or `MinMaxScaler` before applying clustering algorithms, as distance-based algorithms are sensitive to feature scaling.
*   **Clustering:** Apply K-means and Agglomerative Clustering.  Experiment with different values of *k* for K-means and different linkage methods for Agglomerative Clustering.  Use the Elbow method and dendrograms to help choose the number of clusters.
*   **Evaluation:** Evaluate the performance of each algorithm using appropriate metrics (Silhouette Score, Davies-Bouldin Index).
*   **Interpretation:** Analyze the resulting clusters and draw meaningful insights about the customer segments. For example:
    *   Cluster 1: High Income, High Spending Score (Target Customers)
    *   Cluster 2: Low Income, Low Spending Score (Needs Improvement)
    *   Cluster 3: Medium Income, Medium Spending Score (Average Customers)
    *   Cluster 4: High Income, Low Spending Score (Potential Savers)
    *   Cluster 5: Low Income, High Spending Score (Budget Spenders)

---

### 7. Practice Questions/Exercises

1.  **What is the difference between partitional and hierarchical clustering?**

    *   **Answer:** Partitional clustering divides data into non-overlapping clusters in a single step, while hierarchical clustering builds a hierarchy of clusters.
2.  **How does the Elbow method help in K-means clustering?**

    *   **Answer:** The Elbow method helps determine the optimal number of clusters (k) by plotting WCSS and identifying the "elbow" point where the decrease in WCSS diminishes.
3.  **Explain the purpose of the linkage criterion in Agglomerative Clustering.**

    *   **Answer:** The linkage criterion defines how the distance between clusters is calculated, influencing the merging process and the resulting cluster structure.
4.  **Why is feature scaling important before applying K-means or Agglomerative Clustering?**

    *   **Answer:** K-means and Agglomerative clustering use distance measures.  Features with larger scales will dominate the distance calculations, potentially leading to biased results. Scaling ensures all features contribute equally.
5.  **What are the advantages and disadvantages of using the Silhouette Score to evaluate clustering results?**

    *   **Answer:**
        *   **Advantages:** Easy to interpret, provides a measure of cluster separation and cohesion.
        *   **Disadvantages:** Can be misleading for non-convex clusters, sensitive to the density of clusters.
6.  **Using the Mall Customer dataset, consider you found two clusters, based on "Annual Income" and "Spending Score". Describe two distinct marketing strategies for each customer segment.**

    * **Answer**: (This requires domain knowledge and interpretation of clustering results, the answer depends on the observed clusters from running the code):
       *   **Example (assuming clusters are formed around high/low income and high/low spending):**
           * **High Income, High Spending:** Implement a loyalty program with exclusive benefits, personalized recommendations for luxury items, and invite them to VIP events.
           * **Low Income, Low Spending:** Offer promotions on affordable products, educational content on budgeting and value, and focus on building brand loyalty through community engagement.

---

### 8. Important Points to Remember

*   Clustering is an unsupervised learning technique, meaning there are no ground truth labels to guide the process.
*   The choice of clustering algorithm and its parameters depends on the characteristics of the dataset and the desired outcome.
*   Data preprocessing (especially feature scaling) is crucial for distance-based clustering algorithms.
*   Evaluation metrics provide insights into the quality of the clustering, but visual inspection and domain knowledge are essential for interpreting the results.
*   Experimentation and iteration are key to finding the best clustering solution for a given problem.
*   Always interpret the clusters and derive actionable insights based on the context of the data.
