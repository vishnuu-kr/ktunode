---
title: "Discretization and concept hierarchy generation"
subject: "DATA MINING"
module: "Module 2: Data Preprocessing "
branch: "Computer Science and Engineering"
semester: 5
topicId: "684162770fc9aa1fdbc8b8a4"
status: "completed"
scrapedAt: "2026-05-20T16:45:03.772Z"
---
## DATA MINING: Module 2 - Data Preprocessing: Discretization and Concept Hierarchy Generation

**Learning Outcomes:**

*   Understand the need for discretization in data mining.
*   Explain different techniques for discretization (binning, histogram analysis, entropy-based discretization, natural partitioning).
*   Learn about concept hierarchy generation for both numerical and categorical data.
*   Understand the benefits and limitations of different concept hierarchy generation methods.
*   Apply discretization and concept hierarchy generation techniques to prepare data for data mining tasks.

---

**1. Introduction to Discretization**

*   **Definition:** Discretization is the process of transforming continuous numerical attributes into discrete (categorical) attributes. It is a form of data reduction.
*   **Why Discretize?**
    *   **Simplifies Data:** Makes data easier to understand and interpret.
    *   **Reduces Noise:** Can mitigate the impact of noise in the data.
    *   **Improves Performance:** Some data mining algorithms perform better with discrete attributes (e.g., some decision tree algorithms).
    *   **Facilitates Concept Hierarchy Generation:** Discretization can be a precursor to creating concept hierarchies.
    *   **Privacy Preservation:** Grouping continuous values into broader categories can help protect individual privacy.

**2. Discretization Techniques**

*   **2.1 Binning**

    *   **Definition:** A top-down approach.  It involves dividing the range of the continuous attribute into intervals (bins).
    *   **Types of Binning:**
        *   **Equal-Width Binning (Equal-Interval Binning):** Divides the range of the attribute into *N* intervals of equal width.
            *   *Width* = ( *max* - *min* ) / *N*
            *   **Advantage:** Simple to implement.
            *   **Disadvantage:** Can be sensitive to outliers, leading to skewed distributions and poorly populated bins.

        *   **Equal-Frequency Binning (Equal-Depth Binning):** Divides the range of the attribute into *N* intervals, each containing approximately the same number of data instances.
            *   **Advantage:** Handles outliers better than equal-width binning.
            *   **Disadvantage:**  Bin widths can vary widely. It might break natural data patterns.

    *   **Smoothing by Bin Means/Medians/Boundaries:**  After binning, smooth the values within each bin.
        *   **Bin Means:** Replace each value in the bin with the average value of the bin.
        *   **Bin Medians:** Replace each value in the bin with the median value of the bin.
        *   **Bin Boundaries:** Replace each value in the bin with the closest bin boundary value.

    *   **Example:**

        *   **Data:** `[4, 8, 15, 21, 21, 24, 25, 28, 34]`
        *   **Equal-Width Binning (N=3):**
            *   Width = (34 - 4) / 3 = 10
            *   Bin 1: [4, 8, 15]
            *   Bin 2: [21, 21, 24, 25]
            *   Bin 3: [28, 34]

        *   **Equal-Frequency Binning (N=3):**
            *   Bin 1: [4, 8, 15]
            *   Bin 2: [21, 21, 24]
            *   Bin 3: [25, 28, 34]

*   **2.2 Histogram Analysis**

    *   **Definition:**  Uses histograms to discretize the attribute.
    *   **Process:** Divide the attribute range into bins (buckets) and count the number of values falling into each bin.
    *   **Types:** Based on bin width determination (e.g., equal-width, equal-frequency, or variable width based on data distribution).
    *   **Advantage:** Can provide a visual representation of the data distribution.
    *   **Disadvantage:**  The shape of the resulting discretization depends on the number of bins and binning method.

*   **2.3 Entropy-Based Discretization**

    *   **Definition:** A top-down, supervised method that uses information gain (entropy) to determine the best split points.
    *   **Process:**
        1.  Start with the entire range of the attribute.
        2.  Iteratively find the value that maximizes information gain when used as a split point.
        3.  Recursively apply the same process to the resulting intervals until a stopping criterion is met (e.g., minimum entropy or a predefined number of intervals).
    *   **Entropy:** A measure of impurity or disorder in a set of data. Lower entropy means higher homogeneity.
    *   **Information Gain:** The reduction in entropy achieved by splitting the data on a particular attribute.
    *   **Advantage:**  Tends to create intervals that are more homogeneous with respect to the class label (in supervised learning).
    *   **Disadvantage:** Can be computationally expensive.

*   **2.4 Natural Partitioning**

    *   **Definition:** A top-down approach based on the "3-4-5" rule.
    *   **Process:**
        1.  Divide the range into intervals based on powers of 10.
        2.  Divide each interval into 3, 4, or 5 sub-intervals of equal width.
        3.  The rule attempts to distribute data more evenly.
    *   **Example:**
        *   Range: 0 - 999
        *   Intervals: 0-99, 100-199, 200-299,..., 900-999
        *   Each interval is further divided into 10 subintervals each of length 10.

**3. Concept Hierarchy Generation**

*   **Definition:** A concept hierarchy organizes attribute values into a hierarchical structure, where higher levels represent more general concepts and lower levels represent more specific concepts.
*   **Purpose:**  Provides different levels of abstraction for data analysis.  Enables users to view data from different perspectives. Facilitates roll-up and drill-down operations in data warehousing.
*   **Types:**

    *   **3.1 Concept Hierarchy Generation for Numerical Data:**

        *   **Binning:** Discretize the numerical attribute and treat each bin as a category at a lower level. Then create higher levels by grouping the bins.
        *   **Histogram Analysis:**  Similar to binning, use histogram bins as the base level categories.
        *   **Clustering:** Group similar values into clusters. Each cluster represents a higher-level concept.
        *   **Automated Methods (e.g., Data Cube based):**  Utilize data cube aggregation to automatically create hierarchies based on statistical measures.  Can be computationally intensive.

    *   **3.2 Concept Hierarchy Generation for Categorical Data:**

        *   **Specification of Partial Ordering:** Manually define the relationships between attribute values.  For example:
            *   `Country` -> `Continent`
            *   `Street` -> `City` -> `State` -> `Country`
        *   **Using Schema Definitions:** Utilize schema information from databases to infer relationships.  For example, knowing that a `Product` table has a foreign key relationship to a `Category` table can be used to create a hierarchy: `Product` -> `Category`.
        *   **Set Grouping:** Group related values based on semantic similarity or expert knowledge.
            *   Example: `{"jeans", "shorts", "skirts"} -> "bottoms"`

**4. Benefits and Limitations of Different Methods**

| Method                       | Benefits                                                       | Limitations                                                                  |
| ---------------------------- | ------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| Equal-Width Binning          | Simple, easy to implement                                    | Sensitive to outliers, uneven data distribution may result in empty bins       |
| Equal-Frequency Binning      | Handles outliers better than equal-width binning               | Bin widths can vary widely, can break natural data patterns                 |
| Histogram Analysis           | Provides a visual representation of data distribution           | Depends on the number of bins and the binning method chosen                 |
| Entropy-Based Discretization | Creates homogeneous intervals with respect to class labels     | Computationally expensive, prone to overfitting                               |
| Natural Partitioning         | Aims for even distribution of data                                | May not always align with semantically meaningful groupings                |
| Manual Hierarchy Definition  | Allows for expert knowledge and control                       | Can be time-consuming and subjective                                       |
| Schema-Based Hierarchy       | Leverages existing database structure                          | May not capture all relevant relationships                                    |
| Set Grouping Hierarchy       | Allows for semantic grouping                               | Requires domain knowledge and can be difficult to automate                   |

**5. Applying Discretization and Concept Hierarchy Generation**

*   **Example Scenario:** Customer age is a continuous variable.
    *   **Discretization:** Use equal-width binning to create age groups: "Young", "Middle-Aged", "Senior".
    *   **Concept Hierarchy:**
        *   Level 1 (Specific): Customer Age (e.g., 25, 38, 62)
        *   Level 2 (Discretized): Age Groups (e.g., "Young", "Middle-Aged", "Senior")
        *   Level 3 (General): "Adult", "Dependent" (grouping "Young" and "Middle-Aged" into "Adult")

*   **Use Cases:**
    *   **Market Basket Analysis:**  Analyzing purchase patterns based on age groups instead of specific ages.
    *   **Customer Segmentation:**  Identifying customer segments based on demographic attributes like age and income groups.
    *   **Risk Assessment:**  Predicting loan defaults based on risk factors discretized into risk categories.

**6. Practice Questions/Exercises**

1.  **Data:** `[2, 5, 8, 11, 15, 18, 22, 25, 28, 31, 34]`
    *   Apply equal-width binning with N=3. Show the resulting bins.
    *   Apply equal-frequency binning with N=3. Show the resulting bins.
    *   Smooth the equal-width bins using bin means.

    **Answer:**

    *   **Equal-Width (N=3):**
        *   Width = (34 - 2) / 3 = 10.67
        *   Bin 1: `[2, 5, 8, 11]`
        *   Bin 2: `[15, 18, 22]`
        *   Bin 3: `[25, 28, 31, 34]`
    *   **Equal-Frequency (N=3):**
        *   Bin 1: `[2, 5, 8, 11]`
        *   Bin 2: `[15, 18, 22, 25]`
        *   Bin 3: `[28, 31, 34]`
    *   **Equal-Width with Bin Means:**
        *   Bin 1: `[6.5, 6.5, 6.5, 6.5]` (Mean = (2+5+8+11)/4 = 6.5)
        *   Bin 2: `[18.33, 18.33, 18.33]` (Mean = (15+18+22)/3 = 18.33)
        *   Bin 3: `[29.5, 29.5, 29.5, 29.5]` (Mean = (25+28+31+34)/4 = 29.5)

2.  Explain the difference between equal-width and equal-frequency binning. What are the advantages and disadvantages of each?

    **Answer:**  (See explanation above in section 2.1)

3.  Give an example of a concept hierarchy for a categorical attribute "Education Level".

    **Answer:**

    *   Level 1 (Specific): "High School", "Bachelor's Degree", "Master's Degree", "Doctorate"
    *   Level 2 (General): "Undergraduate", "Graduate"  (Grouping "High School" and "Bachelor's Degree" into "Undergraduate" and "Master's Degree" and "Doctorate" into "Graduate")
    *   Level 3 (More General): "Educated", "Not Educated"

4.  What are the advantages and disadvantages of using Entropy-Based Discretization?

    **Answer:** (See explanation above in section 2.3)

**7. Important Points to Remember**

*   The choice of discretization technique depends on the data distribution, the goals of the data mining task, and the algorithm being used.
*   Discretization can lead to information loss. It's a trade-off between simplicity and accuracy.
*   Concept hierarchies provide different levels of abstraction for data analysis, facilitating roll-up and drill-down operations.
*   Understanding the underlying data and the domain is crucial for effective concept hierarchy generation.
*   Supervised discretization methods (like Entropy-Based Discretization) require class labels and are useful when the goal is to improve classification accuracy.  Unsupervised methods are useful when class labels are not available.
