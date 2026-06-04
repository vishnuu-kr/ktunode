---
title: "Dissimilarity and Similarity measures."
subject: "DATA ANALYTICS"
module: "Module 1: Introduction to Data Analytics:"
branch: "Computer Science and Engineering"
semester: 5
topicId: "684162770fc9aa1fdbc8b708"
status: "completed"
scrapedAt: "2026-05-20T16:43:44.455Z"
---
# DATA ANALYTICS: Module 1 - Dissimilarity and Similarity Measures

## Introduction

This module introduces fundamental concepts of data analytics, focusing on the core idea of quantifying how alike or different data objects are. Understanding dissimilarity and similarity measures is crucial for various data analysis tasks such as clustering, classification, anomaly detection, and recommendation systems.

**Learning Outcomes:**

*   Understand the concepts of similarity and dissimilarity.
*   Learn different types of similarity and dissimilarity measures for various data types.
*   Apply appropriate similarity and dissimilarity measures to different datasets.
*   Evaluate the suitability of different measures for specific data analysis tasks.

## 1. Key Concepts and Definitions

*   **Data Object/Instance/Tuple:** A collection of attributes that represent a single entity in a dataset.  Examples: A customer, a transaction, a document.
*   **Attribute/Feature/Variable:** A characteristic or property of a data object.  Examples: Age, income, product purchased, word frequency.
*   **Similarity:** A numerical measure of the degree to which two data objects are alike. High similarity implies objects are more alike.
*   **Dissimilarity (Distance):** A numerical measure of the degree to which two data objects are different. High dissimilarity implies objects are less alike.
*   **Proximity:** A general term referring to either similarity or dissimilarity.
*   **Scaling:** Transforming data to a common range, often to prevent attributes with large values from dominating the distance calculations.

## 2. Data Types and Corresponding Measures

The choice of similarity/dissimilarity measure depends on the data type of the attributes. We can categorize attributes as:

*   **Nominal (Categorical):** Represents categories, colors, or names. Examples: Hair color (black, brown, blond), marital status (married, single, divorced).
*   **Ordinal:** Represents a ranking or ordered sequence. Examples: Grades (A, B, C), satisfaction levels (very satisfied, satisfied, neutral, dissatisfied, very dissatisfied).
*   **Interval:** Represents values with equal intervals between them, but no true zero point. Examples: Temperature in Celsius or Fahrenheit.
*   **Ratio:** Represents values with equal intervals and a true zero point. Examples: Temperature in Kelvin, age, height, weight, monetary quantities.

### 2.1. Dissimilarity Measures

#### 2.1.1.  Nominal Data

*   **Simple Matching:**  Counts the number of matching attributes and divides by the total number of attributes.
    *   `d(i, j) = (number of mismatches) / (total number of attributes)`
    *   Example:
        *   Object i: (A, B, C, D)
        *   Object j: (A, B, E, F)
        *   Number of mismatches = 2 (C and E, D and F)
        *   Total number of attributes = 4
        *   d(i, j) = 2/4 = 0.5
*   **Using Binary Attributes (Consider presence/absence):**
    *   Treat nominal attributes as binary (1 or 0 for presence/absence of a particular category).
    *   Can then use distance measures for binary data (see below).

#### 2.1.2.  Binary Data

Binary attributes have only two states: 0 and 1.  Important distinction:

*   **Symmetric:** Both states are equally important (e.g., gender).
*   **Asymmetric:** One state is more important (e.g., presence of a disease).

*   **Simple Matching Coefficient (SMC):** Used for symmetric binary attributes.
    *   `SMC = (Number of matching attribute values) / (Total number of attributes)`
    *   `SMC = (a + d) / (a + b + c + d)` where:
        *   a = number of attributes where both objects have 1
        *   b = number of attributes where object i has 1 and object j has 0
        *   c = number of attributes where object i has 0 and object j has 1
        *   d = number of attributes where both objects have 0

*   **Jaccard Index:** Used for asymmetric binary attributes.  Ignores the number of negative matches (where both objects have 0).
    *   `Jaccard Index = (Number of positive matches) / (Total number of attributes - Number of negative matches)`
    *   `Jaccard Index = a / (a + b + c)`
    *   Jaccard Distance = 1 - Jaccard Index.

    *Example:*

    *Object i:  (1, 0, 0, 1, 0)*
    *Object j:  (1, 0, 1, 0, 0)*

    *   a = 1 (first attribute)
    *   b = 1 (fourth attribute in i, but not j)
    *   c = 1 (third attribute in j, but not i)
    *   d = 2 (second and fifth attributes)

    *SMC = (1 + 2) / (1 + 1 + 1 + 2) = 3/5 = 0.6*
    *Jaccard Index = 1 / (1 + 1 + 1) = 1/3 = 0.333*
    *Jaccard Distance = 1 - 0.333 = 0.667*

#### 2.1.3.  Numeric Data (Interval and Ratio Scaled)

*   **Minkowski Distance:** A generalized distance function.
    *   `d(i, j) = (Σ |x<sub>ik</sub> - x<sub>jk</sub>|<sup>p</sup>)<sup>1/p</sup>`  where:
        *   x<sub>ik</sub> is the value of the k<sup>th</sup> attribute for object i
        *   x<sub>jk</sub> is the value of the k<sup>th</sup> attribute for object j
        *   p is a parameter.

    *   **Special Cases of Minkowski Distance:**
        *   **p = 1:** Manhattan Distance (L1 norm):  Sum of absolute differences.
            *   `d(i, j) = Σ |x<sub>ik</sub> - x<sub>jk</sub>|`
        *   **p = 2:** Euclidean Distance (L2 norm):  Straight line distance.
            *   `d(i, j) = √(Σ (x<sub>ik</sub> - x<sub>jk</sub>)<sup>2</sup>)`
        *   **p = ∞:**  Supremum Distance (Lmax norm):  Maximum absolute difference.
            *   `d(i, j) = max<sub>k</sub> |x<sub>ik</sub> - x<sub>jk</sub>|`

    *Example:*

    *Object i: (2, 3)*
    *Object j: (5, 7)*

    *   Manhattan Distance: |2 - 5| + |3 - 7| = 3 + 4 = 7
    *   Euclidean Distance: √((2 - 5)<sup>2</sup> + (3 - 7)<sup>2</sup>) = √(9 + 16) = √25 = 5
    *   Supremum Distance: max(|2 - 5|, |3 - 7|) = max(3, 4) = 4

*   **Standardization/Normalization:** It's crucial to standardize or normalize numeric attributes before calculating distances if they have different scales.  This prevents attributes with larger values from dominating the distance calculation.  Common techniques include:
    *   **Z-score standardization:**  `x' = (x - μ) / σ`, where μ is the mean and σ is the standard deviation.
    *   **Min-Max Normalization:** `x' = (x - min) / (max - min)`

#### 2.1.4.  Ordinal Data

*   **Approach 1: Treat as numeric:** Map ordinal values to ranks (e.g., A=4, B=3, C=2, D=1) and use distance measures for numeric data. However, this assumes equal intervals between ranks, which may not be true.
*   **Approach 2: Replace each value by its rank:**
    *   Map the i-th value of the f-th attribute to
    ```
    r_{if} \in \{1, ..., M_f \}
    ```
    where $M_f$ is the number of possible states for the f-th attribute.
    * Normalize the rank by scaling into the interval [0, 1] using
    ```
    z_{if} = \frac{r_{if} - 1}{M_f - 1}
    ```
    * Proceed as with interval-scaled attributes.

### 2.2. Similarity Measures

Similarity measures are typically used for numeric data, but can be adapted for other data types.

#### 2.2.1. Numeric Data

*   **Cosine Similarity:** Measures the angle between two vectors.  Used when the magnitude of the vectors is not as important as the direction.
    *   `cos(i, j) = (i · j) / (||i|| * ||j||)`
    *   Where `i · j` is the dot product of vectors i and j, and `||i||` is the magnitude (Euclidean norm) of vector i.
    *   Values range from -1 (completely dissimilar) to 1 (completely similar). 0 indicates orthogonality (no similarity).

    *Example:*

    *Object i: (2, 3)*
    *Object j: (5, 7)*

    *   i · j = (2 * 5) + (3 * 7) = 10 + 21 = 31
    *   ||i|| = √(2<sup>2</sup> + 3<sup>2</sup>) = √13
    *   ||j|| = √(5<sup>2</sup> + 7<sup>2</sup>) = √74
    *   cos(i, j) = 31 / (√13 * √74) ≈ 0.979

*   **Pearson Correlation:** Measures the linear relationship between two variables.  Removes the effect of different means.
    *   `ρ(i, j) = cov(i, j) / (σ<sub>i</sub> * σ<sub>j</sub>)`
    *   Where `cov(i, j)` is the covariance between i and j, and σ<sub>i</sub> is the standard deviation of i.
    *   Values range from -1 (perfect negative correlation) to 1 (perfect positive correlation). 0 indicates no linear correlation.

#### 2.2.2. Binary Data

*   As previously described for Jaccard index. Jaccard index *is* a similarity measure.

## 3. Applying and Evaluating Measures

*   **Consider the data type:** Choose the measure appropriate for the attribute types in your dataset.
*   **Data scaling:** Standardize or normalize numeric data if attributes have different scales.
*   **Domain knowledge:**  Understand the context of your data and choose measures that reflect meaningful relationships.
*   **Experiment and evaluate:** Try different measures and evaluate the results based on the specific data analysis task.  Metrics such as silhouette score (for clustering) or accuracy/precision/recall (for classification) can be used.

## 4. Important Points to Remember

*   Similarity and dissimilarity are relative concepts. What is considered similar or dissimilar depends on the context and the chosen measure.
*   There is no single "best" measure. The optimal choice depends on the specific data and the analysis goals.
*   Data preprocessing (cleaning, transformation, scaling) is crucial for obtaining meaningful results.
*   Understand the properties of each measure (e.g., sensitivity to outliers, computational complexity).
*   Consider using libraries like scikit-learn in Python, which provide implementations of various distance metrics.

## 5. Practice Questions/Exercises

**Question 1:**  Consider two documents represented as bags of words:

*   Document 1: "The cat sat on the mat."
*   Document 2: "The dog sat on the rug."

Calculate the Jaccard similarity between these two documents (treating words as binary attributes).

**Answer 1:**

1.  Represent the documents as sets of words:
    *   Document 1: {the, cat, sat, on, mat}
    *   Document 2: {the, dog, sat, on, rug}
2.  Calculate the intersection and union of the sets:
    *   Intersection: {the, sat, on} (3 words)
    *   Union: {the, cat, sat, on, mat, dog, rug} (7 words)
3.  Calculate the Jaccard index:
    *   Jaccard Index = |Intersection| / |Union| = 3/7 ≈ 0.43

**Question 2:** Calculate the Euclidean distance between the following data points:

*   Point A: (1, 2, 3)
*   Point B: (4, 5, 6)

**Answer 2:**

Euclidean Distance = √((1-4)<sup>2</sup> + (2-5)<sup>2</sup> + (3-6)<sup>2</sup>) = √((-3)<sup>2</sup> + (-3)<sup>2</sup> + (-3)<sup>2</sup>) = √(9 + 9 + 9) = √27 ≈ 5.20

**Question 3:** What are the key differences between Euclidean distance and Cosine similarity? When would you prefer one over the other?

**Answer 3:**

*   **Euclidean Distance:** Measures the magnitude of the difference between two points. Sensitive to the absolute values of the attributes.
*   **Cosine Similarity:** Measures the angle between two vectors. Insensitive to the magnitude of the vectors.  Focuses on the direction.

Use **Euclidean distance** when the magnitude of the attribute values is important (e.g., comparing the prices of two products).

Use **Cosine similarity** when the direction of the vectors is more important than the magnitude (e.g., comparing the topics of two documents based on word frequencies).

**Question 4:** Consider two objects with the following attributes (Hair Color, Eye Color, Gender):

*   Object 1: (Black, Brown, Male)
*   Object 2: (Blond, Blue, Female)

Calculate the dissimilarity using the simple matching method.

**Answer 4:**

Number of mismatches = 3 (all attributes are different)
Total number of attributes = 3
Dissimilarity = 3/3 = 1

**Question 5:** You are building a recommendation system for movies. You have user profiles represented by the movies they've watched (1 if watched, 0 if not).  Which similarity measure would be most appropriate to compare two users' movie preferences? Explain your reasoning.

**Answer 5:**

The **Jaccard index** is likely the most appropriate. This is because the presence (watched) of a movie is more significant than its absence (not watched) in determining similarity. Jaccard ignores the number of movies *not* watched by both users, focusing on the proportion of movies they *both* watched out of all the movies *either* user watched. Cosine similarity could also be used since it normalizes for the number of watched movies. Simple Matching Coefficient would be less suitable because it gives equal weight to movies not watched by either user, which doesn't contribute meaningfully to the similarity of their preferences.
