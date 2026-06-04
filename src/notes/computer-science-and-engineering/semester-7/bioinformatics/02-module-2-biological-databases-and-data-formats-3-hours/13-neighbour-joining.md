---
title: "Neighbour joining"
subject: "BIOINFORMATICS"
module: "Module 2: Biological Databases and Data Formats (3 hours)"
branch: "Computer Science and Engineering"
semester: 7
topicId: "684162780fc9aa1fdbc8c16e"
status: "completed"
scrapedAt: "2026-05-20T17:01:09.123Z"
---
# BIOINFORMATICS - Module 2: Biological Databases and Data Formats

## Topic: Neighbour Joining (3 hours)

### Learning Outcomes:

*   **Understand the fundamental principles of phylogenetic tree construction.**
*   **Explain the Neighbour-Joining (NJ) method and its underlying algorithm.**
*   **Discuss the advantages and disadvantages of Neighbour-Joining compared to other tree-building methods.**
*   **Apply Neighbour-Joining to construct phylogenetic trees from distance matrices.**

---

### 1. Introduction to Phylogenetic Tree Construction

*   **Definition:** A phylogenetic tree (or evolutionary tree) is a branching diagram that illustrates the evolutionary relationships among various biological species or other entities based upon similarities and differences in their physical or genetic characteristics.
*   **Purpose:**
    *   To understand the evolutionary history of life.
    *   To infer relationships between genes, proteins, and organisms.
    *   To identify conserved regions and functional elements.
    *   To classify organisms and study evolutionary processes (e.g., speciation, adaptation).
*   **Inputs for Tree Construction:**
    *   **Character-based methods:** Use aligned sequences (DNA, RNA, protein) and model the evolutionary changes of characters (nucleotides or amino acids). Examples: Maximum Parsimony, Maximum Likelihood, Bayesian Inference.
    *   **Distance-based methods:** Use a pairwise distance matrix that quantifies the evolutionary distance between each pair of taxa. Neighbour Joining is a prominent example.

---

### 2. Distance-Based Phylogeny: The Concept of Distance Matrices

*   **Definition:** A distance matrix is a square matrix where each cell $(i, j)$ represents the evolutionary distance between taxon $i$ and taxon $j$.
*   **Calculating Distances:** Distances are typically calculated from aligned sequences. Common distance measures include:
    *   **Hamming distance:** The number of positions at which the corresponding characters are different.
    *   **Jukes-Cantor distance:** Accounts for multiple substitutions at the same site, assuming equal rates of substitution for all nucleotide types and equal probabilities of change between them.
    *   **Kimura 2-parameter distance:** Accounts for the difference between transitions (purine-purine or pyrimidine-pyrimidine) and transversions (purine-pyrimidine or vice-versa).
    *   **More complex models:** Consider varying substitution rates between different nucleotide/amino acid pairs.

*   **Example of a Distance Matrix:**
    Consider three aligned sequences:

    | Taxon | Seq 1 | Seq 2 | Seq 3 |
    | :---- | :---- | :---- | :---- |
    | A     | ATGC  | ATGC  | ATGC  |
    | B     | ATGC  | ATCC  | ATGC  |
    | C     | ATCC  | ATCC  | ATGC  |

    Let's calculate simple Hamming distances:
    *   d(A, B) = 1 (one mismatch at position 3)
    *   d(A, C) = 1 (one mismatch at position 3)
    *   d(B, C) = 1 (one mismatch at position 2)

    Distance Matrix:

    ```
        A  B  C
      A 0  1  1
      B 1  0  1
      C 1  1  0
    ```

    *(Note: For real-world phylogenetics, more sophisticated distance measures are used.)*

---

### 3. Neighbour Joining (NJ) Method: Algorithm and Principles

*   **Overview:** Neighbour Joining is a widely used **distance-based** method for constructing phylogenetic trees. It's an **agglomerative clustering algorithm** that starts with a star-like tree and iteratively joins nodes to minimize the total branch length.
*   **Key Principle:** NJ aims to minimize the sum of branch lengths in the resulting tree while ensuring that the distances represented in the tree are as close as possible to the original distance matrix. It achieves this by iteratively identifying pairs of "neighbours" (taxa or internal nodes) that are closest to each other and joining them.
*   **The "Neighbourhood" Concept:** In the context of NJ, "neighbours" are taxa or internal nodes that are connected by a single branch in the current tree topology.

---

### 3.1 The Neighbour Joining Algorithm Steps

The algorithm iteratively reduces the number of nodes until only three nodes remain, at which point the final tree is formed.

**Initial State:** All taxa are considered as separate nodes, and the initial tree is a "star phylogeny" where each taxon is connected to a central hypothetical ancestral node.

**Iteration:** In each step, the algorithm identifies a pair of nodes (taxa or internal nodes) to be joined. The criterion for joining is based on minimizing a "corrected distance" that accounts for the path lengths to other nodes.

**Step 1: Calculate the Sum of Distances for Each Taxon**

For each taxon $i$, calculate $r_i$, the sum of distances from taxon $i$ to all other taxa $j$:
$r_i = \sum_{j \neq i} d_{ij}$

**Step 2: Calculate the Total Sum of Distances**
$S = \frac{1}{2} \sum_{i} r_i = \sum_{i < j} d_{ij}$

**Step 3: Calculate the Corrected Distance (or Net Distance) $u_{ij}$**

For each pair of taxa $(i, j)$, calculate $u_{ij}$ using the formula:
$u_{ij} = d_{ij} - \frac{r_i + r_j}{N-2}$

Where:
*   $d_{ij}$ is the original distance between taxon $i$ and taxon $j$.
*   $r_i$ and $r_j$ are the sums of distances from taxon $i$ and taxon $j$ to all other taxa, respectively.
*   $N$ is the current number of taxa (or nodes) in the tree.

**Step 4: Identify the Pair $(i, j)$ with the Minimum Corrected Distance $u_{ij}$**

The pair $(i, j)$ with the smallest $u_{ij}$ value is the pair that will be joined to form a new internal node.

**Step 5: Create a New Internal Node and Calculate Branch Lengths**

*   A new internal node, let's call it $k$, is created.
*   Nodes $i$ and $j$ are now connected to node $k$.
*   The branch lengths from $i$ to $k$ ($L_{ik}$) and from $j$ to $k$ ($L_{jk}$) are calculated as:
    $L_{ik} = \frac{1}{2} d_{ij} + \frac{1}{2} \frac{r_i - r_j}{N-2}$
    $L_{jk} = \frac{1}{2} d_{ij} + \frac{1}{2} \frac{r_j - r_i}{N-2}$

    **Note:** $L_{ik} + L_{jk} = d_{ij}$

**Step 6: Update the Distance Matrix**

*   The new internal node $k$ replaces taxa $i$ and $j$.
*   For any other taxon $m$ (where $m \neq i$ and $m \neq j$), the distance from $m$ to the new node $k$ ($d_{mk}$) is calculated as:
    $d_{mk} = \frac{1}{2} (d_{mi} + d_{mj} - d_{ij})$

*   The number of taxa $N$ is decremented by 1.

**Step 7: Repeat**

Repeat Steps 1-6 until only three nodes remain. At this point, the final three nodes and their connecting branches can be unambiguously determined to form the last internal node and complete the tree.

---

### 3.2 Example Walkthrough of Neighbour Joining

Let's use our simple distance matrix from earlier with 3 taxa (A, B, C):

Distance Matrix ($D^{(0)}$):

```
    A  B  C
  A 0  1  1
  B 1  0  1
  C 1  1  0
```

**Iteration 1:**

*   **Current Number of Taxa (N) = 3**

*   **Step 1: Calculate $r_i$**
    *   $r_A = d_{AB} + d_{AC} = 1 + 1 = 2$
    *   $r_B = d_{BA} + d_{BC} = 1 + 1 = 2$
    *   $r_C = d_{CA} + d_{CB} = 1 + 1 = 2$

*   **Step 2: Calculate Total Sum of Distances ($S$)**
    *   $S = \frac{1}{2} (r_A + r_B + r_C) = \frac{1}{2} (2 + 2 + 2) = 3$
    *(Alternatively, $S = d_{AB} + d_{AC} + d_{BC} = 1 + 1 + 1 = 3$)*

*   **Step 3: Calculate Corrected Distances $u_{ij}$**
    *   $N-2 = 3-2 = 1$
    *   $u_{AB} = d_{AB} - \frac{r_A + r_B}{N-2} = 1 - \frac{2 + 2}{1} = 1 - 4 = -3$
    *   $u_{AC} = d_{AC} - \frac{r_A + r_C}{N-2} = 1 - \frac{2 + 2}{1} = 1 - 4 = -3$
    *   $u_{BC} = d_{BC} - \frac{r_B + r_C}{N-2} = 1 - \frac{2 + 2}{1} = 1 - 4 = -3$

*   **Step 4: Identify Minimum $u_{ij}$**
    All $u_{ij}$ values are -3, which is the minimum. Let's arbitrarily choose to join A and B.

*   **Step 5: Create New Node and Calculate Branch Lengths**
    *   New internal node $k$ (let's call it $AB$).
    *   Connect A to $AB$ and B to $AB$.
    *   $L_{A, AB} = \frac{1}{2} d_{AB} + \frac{1}{2} \frac{r_A - r_B}{N-2} = \frac{1}{2}(1) + \frac{1}{2} \frac{2 - 2}{1} = 0.5 + 0 = 0.5$
    *   $L_{B, AB} = \frac{1}{2} d_{AB} + \frac{1}{2} \frac{r_B - r_A}{N-2} = \frac{1}{2}(1) + \frac{1}{2} \frac{2 - 2}{1} = 0.5 + 0 = 0.5$
    *   *(Check: $L_{A, AB} + L_{B, AB} = 0.5 + 0.5 = 1 = d_{AB}$)*

*   **Step 6: Update Distance Matrix**
    *   Replace A and B with node $AB$. Now we have nodes $AB$ and $C$.
    *   $N$ becomes 2.
    *   Calculate $d_{AB, C}$:
        $d_{AB, C} = \frac{1}{2} (d_{AC} + d_{BC} - d_{AB}) = \frac{1}{2} (1 + 1 - 1) = \frac{1}{2} (1) = 0.5$

**Final Step (N=2):**

*   We are left with two "nodes": $AB$ and $C$. These must be connected to a single final internal node.
*   The distance between them is $d_{AB, C} = 0.5$.
*   Let the final internal node be $R$.
*   Branch length from $AB$ to $R$ ($L_{AB, R}$) = $d_{AB, C} / 2 = 0.5 / 2 = 0.25$
*   Branch length from $C$ to $R$ ($L_{C, R}$) = $d_{AB, C} / 2 = 0.5 / 2 = 0.25$

**Resulting Tree:**

```
       R (0.25)
      / \
(0.25)C   AB (0.5)
          /  \
   (0.5)A    B(0.5)
```

This is a valid representation of the relationships, where A and B are more closely related to each other than either is to C. The branch lengths reflect the evolutionary distances.

---

### 4. Advantages and Disadvantages of Neighbour Joining

**Advantages:**

*   **Fast and Computationally Efficient:** NJ is significantly faster than character-based methods like Maximum Likelihood or Bayesian Inference, making it suitable for large datasets. Its time complexity is typically $O(N^3)$ or $O(N^2)$ depending on implementation, where N is the number of taxa.
*   **Produces Unrooted Trees:** NJ naturally produces unrooted trees, which are often preferred when the position of the root (common ancestor) is unknown or not of primary interest.
*   **Works well with large datasets:** Due to its speed, it's a popular choice for analyzing large numbers of sequences.
*   **Can produce relatively accurate trees:** Despite being a heuristic method, NJ often yields trees that are close to the "true" tree, especially when the evolutionary distances are accurate and the data is not too divergent.
*   **Handles variations in evolutionary rates:** The method implicitly corrects for differences in evolutionary rates among lineages to some extent by considering the "net" distances.

**Disadvantages:**

*   **Relies on accurate distance estimates:** The quality of the resulting tree is highly dependent on the accuracy of the input distance matrix. If the distances are poorly estimated (e.g., due to saturation of mutations or strong rate heterogeneity), the NJ tree can be misleading.
*   **Heuristic method:** NJ is not guaranteed to find the optimal tree (the tree that best fits the data according to the distance metric). There might be other tree topologies that better explain the distances.
*   **Assumes molecular clock indirectly:** While it doesn't strictly assume a molecular clock (constant rate of evolution across all lineages), the calculation of branch lengths implicitly assumes that distances correlate with evolutionary time. However, it's more robust to rate variations than methods that strictly enforce a molecular clock.
*   **Does not directly use sequence data:** It operates on pre-computed distances, losing some of the detailed information present in the original sequences that character-based methods can exploit.

---

### 5. Comparison with Other Tree-Building Methods

*   **Maximum Parsimony (MP):**
    *   **Method:** Seeks the tree that requires the fewest evolutionary changes (mutations) to explain the observed character states.
    *   **Input:** Aligned sequences.
    *   **Pros:** Intuitive, doesn't require an explicit evolutionary model.
    *   **Cons:** Can be computationally intensive, susceptible to "long-branch attraction" (where rapidly evolving lineages are falsely grouped together).
    *   **NJ vs. MP:** NJ is faster. MP directly uses characters, NJ uses distances derived from characters.

*   **Maximum Likelihood (ML):**
    *   **Method:** Seeks the tree that maximizes the probability of observing the given sequence data, given a specific evolutionary model.
    *   **Input:** Aligned sequences and an evolutionary model.
    *   **Pros:** Statistically rigorous, generally considered the most accurate method when an appropriate model is used.
    *   **Cons:** Computationally very intensive, requires selecting a suitable evolutionary model.
    *   **NJ vs. ML:** ML is much slower but generally more accurate. NJ is a good approximation when ML is too computationally demanding.

*   **Bayesian Inference:**
    *   **Method:** Computes the posterior probability of different trees and evolutionary parameters, given the data and a model.
    *   **Input:** Aligned sequences and an evolutionary model.
    *   **Pros:** Provides probability estimates for trees, can handle complex models, generally as accurate as ML.
    *   **Cons:** Computationally intensive, requires Markov Chain Monte Carlo (MCMC) sampling.
    *   **NJ vs. Bayesian:** Similar pros/cons to ML vs. NJ. Bayesian gives more information (posterior probabilities).

---

### 6. Applications of Neighbour Joining

*   **Initial survey of relationships in large datasets:** Quickly identifying potential groupings and relationships.
*   **Building phylogenetic trees for bacterial or viral populations:** Where speed is essential.
*   **As a starting point for more complex analyses:** For instance, using an NJ tree to guide searches for more optimal trees with ML or Bayesian methods.
*   **Visualizing evolutionary relationships:** Creating accessible and understandable evolutionary trees.

---

### 7. Key Points to Remember

*   **Neighbour Joining is a distance-based method.** It requires a distance matrix as input.
*   **It's a greedy, agglomerative clustering algorithm.** It iteratively joins the closest "neighbours."
*   **The core of the algorithm is the correction of distances** to account for the position of internal nodes and differences in branch lengths.
*   **NJ is fast and efficient**, making it suitable for large datasets.
*   **It produces unrooted trees.**
*   **Accuracy depends heavily on the quality of the distance matrix.**
*   **It's a heuristic method** and does not guarantee the optimal tree.
*   **Commonly used software for NJ:** PHYLIP, MEGA, FastTree.

---

### 8. Practice Questions and Answers

**Question 1:**
What type of input data does the Neighbour Joining method require?
a) Aligned DNA sequences
b) A distance matrix
c) A character matrix
d) Evolutionary models

**Answer 1:**
b) A distance matrix

---

**Question 2:**
Which of the following is a primary advantage of the Neighbour Joining method compared to Maximum Likelihood?
a) Higher accuracy
b) Better handling of complex evolutionary models
c) Faster computational speed
d) Produces rooted trees

**Answer 2:**
c) Faster computational speed

---

**Question 3:**
When calculating the corrected distance $u_{ij}$ in the Neighbour Joining algorithm, what factor does it attempt to account for that the simple distance $d_{ij}$ does not?
a) The number of sites in the alignment
b) The total sum of all distances
c) The path lengths from $i$ and $j$ to all other nodes
d) The evolutionary model used

**Answer 3:**
c) The path lengths from $i$ and $j$ to all other nodes

---

**Question 4 (Conceptual):**
Imagine you have a distance matrix derived from highly divergent sequences where many sites have saturated mutations (multiple changes have occurred at the same position). Would Neighbour Joining likely produce a reliable phylogenetic tree? Briefly explain why or why not.

**Answer 4:**
No, Neighbour Joining would likely NOT produce a reliable tree. The accuracy of NJ relies on the distance matrix accurately reflecting the true evolutionary divergence. When mutations saturate, the calculated distances do not reflect the actual number of evolutionary changes, leading to misleading estimates of relatedness. Rapidly evolving lineages might appear closer than they are, a phenomenon known as long-branch attraction, which can also affect distance-based methods.

---

**Question 5 (Calculation - Simplified):**
Given the following small distance matrix for taxa A, B, C, and D:

```
    A  B  C  D
  A 0  2  5  6
  B 2  0  4  5
  C 5  4  0  3
  D 6  5  3  0
```

Perform the first step of the Neighbour Joining algorithm. Calculate $r_i$ for each taxon and the total sum of distances $S$.

**Answer 5:**
*   **Calculate $r_i$:**
    *   $r_A = d_{AB} + d_{AC} + d_{AD} = 2 + 5 + 6 = 13$
    *   $r_B = d_{BA} + d_{BC} + d_{BD} = 2 + 4 + 5 = 11$
    *   $r_C = d_{CA} + d_{CB} + d_{CD} = 5 + 4 + 3 = 12$
    *   $r_D = d_{DA} + d_{DB} + d_{DC} = 6 + 5 + 3 = 14$

*   **Calculate Total Sum of Distances ($S$):**
    *   $S = \frac{1}{2} (r_A + r_B + r_C + r_D) = \frac{1}{2} (13 + 11 + 12 + 14) = \frac{1}{2} (50) = 25$
    *(Alternatively, sum all unique distances: $2+5+6+4+5+3 = 25$)*
