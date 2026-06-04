---
title: "Regional Optimization: Superlocal Value Numbering"
subject: "COMPILER DESIGN"
module: "Module 4: Code generation: Code Shape "
branch: "Computer Science and Engineering"
semester: 6
topicId: "684162770fc9aa1fdbc8ba6c"
status: "completed"
scrapedAt: "2026-05-20T16:51:31.070Z"
---
## COMPILER DESIGN: Module 4 - Code Generation: Code Shape

### Topic: Regional Optimization: Superlocal Value Numbering

**Learning Outcomes:**

*   Understand the concept of regional optimization.
*   Define and explain Superlocal Value Numbering (SVN).
*   Apply SVN to basic blocks to identify common subexpressions and redundancies.
*   Explain the advantages and disadvantages of SVN.
*   Compare SVN with other value numbering techniques (e.g., Local Value Numbering).

**1. Regional Optimization: Introduction**

*   **Definition:** Regional optimization refers to compiler optimizations that consider larger scopes of code than basic blocks, but smaller scopes than entire functions or the whole program. This is often a trade-off between the aggressive nature of global optimization and the simplicity of local optimization.

*   **Motivation:** Basic block optimizations, such as Local Value Numbering (LVN), are effective but limited.  Analyzing only within basic blocks misses opportunities that span across multiple basic blocks within a region. Global optimizations are very powerful, but computationally expensive. Regional optimizations try to strike a balance between the two.

*   **Example Regions:**  Regions can be extended basic blocks, frequently executed code sequences (e.g., inner loops), or other code segments based on control flow analysis.

**2. Superlocal Value Numbering (SVN): Definition and Concepts**

*   **Definition:** Superlocal Value Numbering (SVN) is a regional optimization technique that extends Local Value Numbering (LVN) to handle multiple basic blocks within a defined region. It aims to identify and eliminate redundant computations that span across these blocks.

*   **Key Concepts:**

    *   **Extended Basic Block:** SVN typically operates on extended basic blocks. An extended basic block is a sequence of basic blocks `B1, B2, ..., Bn` such that `B1` is the entry block of the sequence, and each `Bi` (i > 1) has a unique predecessor `Bi-1`, and `Bi-1` has only one successor `Bi`.  Effectively, it's a straight-line code path that's slightly longer than a basic block.

    *   **Value Number (VN):** A unique integer assigned to a value computed within the region.  Expressions that compute the same value will have the same value number.

    *   **Value Table:** A data structure (e.g., a hash table or a tree) used to store the mapping between expressions and their assigned value numbers.

    *   **Name Table:**  A data structure (e.g., a hash table or a tree) used to store the mapping between variable names and their corresponding value numbers.  This is necessary to track the value of variables across different statements.

    *   **Normalization:**  Ensuring that expressions are represented in a canonical form to facilitate comparison and detection of redundancy (e.g., converting `a + b` to `b + a` if `b` comes before `a` lexicographically, or converting `x * 1` to `x`).

*   **SVN Algorithm (High-Level):**

    1.  **Region Selection:** Define the region on which SVN will be performed (e.g., extended basic block).
    2.  **Initialization:** Initialize the Value Table and Name Table.  Typically, the tables are empty to begin with.  Consider initializing with constants and initial values.
    3.  **Traversal:** Traverse the basic blocks within the region in execution order.
    4.  **Processing Statements:** For each statement in the block:
        *   **Normalize:** Normalize the expression on the right-hand side of the assignment.
        *   **Lookup:** Look up the normalized expression in the Value Table.
        *   **Hit:** If the expression is found (hit), the statement is redundant. Replace the right-hand side of the assignment with a temporary variable that holds the already computed value. Update the Name Table to associate the left-hand side variable with the corresponding value number.
        *   **Miss:** If the expression is not found (miss), assign a new unique value number to the expression. Add the expression and its value number to the Value Table. Update the Name Table to associate the left-hand side variable with this new value number.
    5.  **Code Transformation:**  After processing all statements, replace redundant expressions with temporary variables that hold the previously computed values. Insert assignment statements to initialize these temporary variables as needed.

**3. Applying SVN: Example**

Consider the following code sequence:

```
Block 1:
a = x + y
b = a + z

Block 2:
c = x + y
d = b + z

```

Let's apply SVN:

1.  **Initialization:** Value Table = {}, Name Table = {}

2.  **Block 1:**
    *   `a = x + y`: `x + y` is not in Value Table. VN(x + y) = 1. Value Table = {`x + y`: 1}, Name Table = {`a`: 1}
    *   `b = a + z`: `a + z` is not in Value Table. VN(a + z) = 2. Value Table = {`x + y`: 1, `a + z`: 2}, Name Table = {`a`: 1, `b`: 2}

3.  **Block 2:**
    *   `c = x + y`: `x + y` is in Value Table (VN = 1). Replace `x + y` with a temporary variable, say `t1`. We need to insert `t1 = x + y` *before* `a = x + y` (or use 'a' in place of 't1', if 'a' isn't live later). Name Table = {`a`: 1, `b`: 2, `c`: 1}
    *   `d = b + z`: `b + z` is not in Value Table but 'b' has VN 2 which corresponds to 'a+z'.  Replace with temporary variable `t2`. We need to insert `t2 = a + z` before `b = a + z`. Since 'a' and 'b' are live between blocks, this optimization may be unsafe or not beneficial. Name Table = {`a`: 1, `b`: 2, `c`: 1, `d`: 3(new VN)} and Value Table =  {`x + y`: 1, `a + z`: 2, `b+z`: 3}.  An alternative would be to rename b+z to a+z which still requires knowledge of a and b's values.

4.  **Transformed Code (Potential):**

```
t1 = x + y       // Inserted to provide the value
a = t1            //Replace x+y with t1
b = a + z
c = t1            // Replace x+y with t1
d = b + z
```

**Important Note:** This transformation assumes that `x` and `y` are not redefined between the two blocks. This is a critical assumption for the validity of SVN.  The *live range* of x and y must also be considered.

**4. Advantages and Disadvantages of SVN**

*   **Advantages:**
    *   **Improved Optimization:** Can identify and eliminate redundant computations that span across basic blocks, which Local Value Numbering cannot.
    *   **Simplicity:** Relatively simple to implement compared to global optimization techniques.
    *   **Efficiency:**  Faster than global optimization because the scope is limited to the region.

*   **Disadvantages:**
    *   **Limited Scope:**  The scope of optimization is limited to the chosen region. May miss opportunities that occur outside the region.
    *   **Data Flow Analysis Requirement:**  Requires some form of data flow analysis (e.g., reaching definitions, live variable analysis) to ensure the validity of the transformations. This analysis is crucial to ensure that the values of variables are not redefined between the point of the first computation and the point where the redundant computation is replaced.
    *   **Complexity increases with region size:**  As the size of the region increases, the complexity of SVN increases.

**5. Comparison with Local Value Numbering (LVN)**

| Feature          | Local Value Numbering (LVN) | Superlocal Value Numbering (SVN) |
|-------------------|------------------------------|-----------------------------------|
| Scope             | Basic Block                  | Extended Basic Block/Region    |
| Redundancy Elim.  | Within a basic block         | Across multiple basic blocks in region |
| Complexity       | Simpler                      | More Complex                     |
| Data Flow Analysis| Less Required                | More Required                    |
| Optimization Pot. | Lower                       | Higher                           |

**6. Important Points to Remember**

*   SVN relies on the assumption that variable values are not redefined between the points where the redundant computations occur.
*   Data flow analysis is essential for ensuring the correctness of SVN transformations.
*   The choice of the region significantly affects the effectiveness of SVN.
*   SVN is a trade-off between the simplicity of LVN and the power of global optimization.

**7. Practice Questions/Exercises**

1.  **Consider the following code sequence. Apply SVN and show the resulting code after optimization:**

```
Block 1:
a = x + y
b = a * z

Block 2:
c = x + y
d = b * z
```

2.  **What are the benefits of using Superlocal Value Numbering over Local Value Numbering?**

3.  **What are the challenges of implementing Superlocal Value Numbering compared to Local Value Numbering?**

4.  **Under what circumstances would Superlocal Value Numbering *not* be effective?**

5.  **Explain the role of the Value Table and Name Table in Superlocal Value Numbering.**

**Answers to Practice Questions:**

1.  **Answer:**

    *   **Initialization:** Value Table = {}, Name Table = {}

    *   **Block 1:**
        *   `a = x + y`:  `x + y` not in Value Table. VN(x + y) = 1. Value Table = {`x + y`: 1}, Name Table = {`a`: 1}
        *   `b = a * z`:  `a * z` not in Value Table. VN(a * z) = 2. Value Table = {`x + y`: 1, `a * z`: 2}, Name Table = {`a`: 1, `b`: 2}

    *   **Block 2:**
        *   `c = x + y`: `x + y` in Value Table (VN = 1).  Replace `x + y` with `a`. Name Table = {`a`: 1, `b`: 2, `c`: 1}
        *   `d = b * z`: `b * z` not in Value Table. VN(b*z) =3. Value Table = {`x + y`: 1, `a * z`: 2, `b*z`: 3}, Name Table = {`a`: 1, `b`: 2, `c`: 1, `d`: 3}

    *   **Transformed Code:**

    ```
    Block 1:
    a = x + y
    b = a * z

    Block 2:
    c = a
    d = b * z
    ```

2.  **Answer:** SVN can eliminate redundant computations that span across basic blocks, while LVN is limited to redundancy within a single basic block.  This leads to potentially better optimization.

3.  **Answer:** The main challenges are:
    *   Maintaining the Value Table and Name Table across multiple basic blocks.
    *   Ensuring the validity of the transformations by performing data flow analysis.
    *   Managing temporary variables that hold previously computed values.

4.  **Answer:** SVN would not be effective when:
    *   The region being analyzed contains frequent redefinitions of variables used in computations.
    *   The cost of data flow analysis outweighs the benefits of redundancy elimination.
    *   The code is already highly optimized by previous passes.
    *   Regions are poorly chosen (e.g., code that is never or rarely executed).

5.  **Answer:**
    *   **Value Table:** Stores the mapping between normalized expressions and their assigned value numbers.  It is used to quickly identify redundant computations.
    *   **Name Table:** Stores the mapping between variable names and their corresponding value numbers. This is used to track the value of variables across different statements and basic blocks.  It allows SVN to identify opportunities to replace variables with others that have the same value number.
