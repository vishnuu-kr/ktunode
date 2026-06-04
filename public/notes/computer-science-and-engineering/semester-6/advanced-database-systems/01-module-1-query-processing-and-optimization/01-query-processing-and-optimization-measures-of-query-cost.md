---
title: "Query Processing and Optimization - Measures of query cost"
subject: "ADVANCED DATABASE SYSTEMS"
module: "Module 1: Query Processing and Optimization "
branch: "Computer Science and Engineering"
semester: 6
topicId: "684162770fc9aa1fdbc8bbc9"
status: "completed"
scrapedAt: "2026-05-20T16:50:05.998Z"
---
# ADVANCED DATABASE SYSTEMS: Module 1 - Query Processing and Optimization
## Topic: Query Processing and Optimization - Measures of Query Cost

**Learning Outcomes:**

*   Understand different measures of query cost.
*   Distinguish between cost models focusing on I/O, CPU, and network bandwidth.
*   Calculate the cost of different query processing operations using specific cost models.
*   Evaluate the strengths and weaknesses of different cost models.
*   Apply these cost models to compare the efficiency of alternative query plans.

### 1. Introduction to Query Cost

Query processing involves multiple steps: parsing, validation, optimization, and execution.  **Query optimization** aims to find the most efficient way to execute a given query.  The efficiency is measured by the **cost** of the query. Choosing the right cost measure is crucial for effective query optimization.

*   **Definition:** Query cost represents the resources consumed during the execution of a query. The goal of query optimization is to minimize this cost.
*   **Significance:** A poorly optimized query can lead to drastically longer execution times and higher resource consumption, impacting database performance and scalability.

### 2. Different Measures of Query Cost

Different aspects of query execution consume resources.  Therefore, various cost models focus on different resource types.

*   **I/O Cost:**
    *   **Definition:** The number of disk I/O operations required to execute the query. Disk access is generally the slowest operation in database systems.
    *   **Relevance:** Historically, I/O cost was the dominant factor. Even though memory has become cheaper, disk I/O remains a bottleneck, especially for large datasets.
    *   **Factors Influencing I/O Cost:** Number of blocks to read/write, buffering strategies, indexing.
*   **CPU Cost:**
    *   **Definition:** The amount of CPU time required to execute the query.
    *   **Relevance:**  With faster CPUs, CPU cost has become relatively less dominant than I/O, but can still be significant, especially for complex computations, string processing, or complex join operations.
    *   **Factors Influencing CPU Cost:** Number of instructions executed, complexity of algorithms, function calls.
*   **Network Communication Cost:**
    *   **Definition:**  The amount of data transferred over the network during query execution.
    *   **Relevance:** In distributed database systems or client-server architectures, network communication is a significant factor.  Minimizing data transfer is crucial for performance.
    *   **Factors Influencing Network Cost:** Size of data transferred, network bandwidth, number of messages exchanged.
*   **Other Costs:**
    *   Memory usage
    *   Energy consumption (increasingly relevant)

### 3. I/O Cost Model in Detail

The I/O cost model is frequently used due to the high latency of disk I/O.

*   **Assumptions:**
    *   Each read/write operation transfers one block of data.
    *   Consecutive accesses to the same block are accounted for.  Buffering can reduce subsequent I/O.
*   **Parameters:**
    *   `B`: Number of blocks in the file
    *   `T`: Number of tuples in the file
    *   `V(A, r)`: Number of distinct values for attribute `A` in relation `r`. This is important for estimating the size of intermediate results and the effectiveness of indexing.
    *   `b_r`: Blocking factor of relation `r` (number of tuples of relation `r` that fit in one block). This can be estimated as `T/B`.

*   **Cost Estimation for Common Operations:**
    *   **Scanning a Relation (Sequential Scan):**  Cost = `B` (read all blocks)
    *   **Scanning a Relation with a Selection (Without Index):**  Cost = `B` (still need to scan the entire relation)
    *   **Scanning a Relation with a Selection (Using an Index):**
        *   **Clustered Index:**  Cost is approximately `B * (number of tuples satisfying selection / T)`.  Assumes tuples satisfying the selection are clustered together on disk.
        *   **Unclustered Index:** In the worst case, Cost = `number of tuples satisfying the selection` (one I/O per tuple). In the best case, only `number of blocks containing tuples satisfying the selection`.  The actual cost lies between these two extremes.
    *   **Join Operations:**  Join cost estimation is more complex and depends on the join algorithm used (nested-loop join, sort-merge join, hash join).

### 4. CPU Cost Model in Detail

The CPU cost model focuses on the computational effort required to execute operations.

*   **Units:** CPU cost is often measured in terms of the number of instructions executed or the CPU time consumed.  These are generally system-dependent.
*   **Factors:**
    *   Complexity of the algorithms used (e.g., comparing two strings character by character is more CPU-intensive than comparing two integers).
    *   Function calls (overhead associated with calling functions).
    *   Sorting and hashing operations (generally CPU-intensive).
*   **Estimation:**  CPU cost estimation is often done empirically, by measuring the CPU time required for different operations under varying conditions.
*   **Example:** Consider a sorting operation. The CPU cost would depend on the sorting algorithm (e.g., quicksort, mergesort), the number of elements to be sorted, and the initial order of the elements.  Mergesort has a time complexity of O(n log n), reflecting its CPU cost grows proportionally to the size of the data multiplied by the logarithm of that size.

### 5. Network Communication Cost Model in Detail

The network communication cost model is essential for distributed databases.

*   **Units:** Cost is measured in terms of the amount of data transferred (e.g., number of bytes). Alternatively, it can be measured in terms of the number of messages exchanged.
*   **Factors:**
    *   Size of the data being transmitted.
    *   Network bandwidth (the rate at which data can be transferred).
    *   Network latency (the delay in transmitting a message).
    *   Communication protocols used.
*   **Strategies to Minimize Network Cost:**
    *   **Data Localization:**  Move computation to where the data resides, rather than moving the data to the computation.
    *   **Semijoin Reduction:**  Reduce the size of relations by sending only the joining attributes.
    *   **Data Compression:** Reduce the size of data before transmission.
*   **Example:**  Consider a join operation between two tables located on different database servers. The simplest approach might involve transferring one entire table to the other server.  A more efficient approach would be to use a semijoin: send only the joining attribute values from one table to the other, filter the second table based on those values, and then transfer only the matching tuples back.

### 6. Strengths and Weaknesses of Different Cost Models

| Cost Model          | Strengths                                                                                                                            | Weaknesses                                                                                                                                       |
| --------------------- | ------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- |
| I/O Cost             | Simple, relatively easy to estimate, and often the dominant cost factor.                                                             | Ignores CPU cost and network cost.  Assumes all I/O operations are equally costly (ignores sequential vs. random access differences).       |
| CPU Cost             | Captures the computational complexity of operations.  Important when operations are CPU-intensive (e.g., string processing).          | Difficult to estimate accurately.  Depends on the specific hardware and software configuration. Often dominated by I/O cost.              |
| Network Cost         | Crucial for distributed databases.  Focuses on minimizing data transfer.                                                               | Ignores I/O and CPU costs.  Assumes network bandwidth is constant.                                                                         |
| Comprehensive Models | Attempt to combine I/O, CPU, and network costs.                                                                                     | Complex to implement and calibrate. Requires accurate estimates for all components.  Hard to generalize across different database systems. |

**Important Point:**  No single cost model is universally perfect.  The best model depends on the specific application, the database system, and the underlying hardware. In practice, database systems often use a combination of cost models, with a focus on the most relevant factors.

### 7. Applying Cost Models to Compare Query Plans

Query optimizers generate multiple query plans for the same query.  Cost models are used to estimate the cost of each plan and select the plan with the lowest estimated cost.

**Example:**

Consider a query to join two tables, `Orders` and `Customers`, based on `CustomerID`.

*   **Plan 1: Nested-Loop Join**
    *   For each tuple in `Orders`, scan the entire `Customers` table to find matching tuples.
    *   I/O Cost = `B(Orders) + T(Orders) * B(Customers)`  (read `Orders` once, and `Customers` once for each tuple in `Orders`)

*   **Plan 2: Hash Join**
    *   Build a hash table on `Customers`.
    *   Probe the hash table with each tuple from `Orders`.
    *   I/O Cost = `B(Orders) + B(Customers)`  (read each relation once)

*   **Choosing the Best Plan:**

    If `T(Orders)` is large, `Plan 1` could be significantly more expensive than `Plan 2`. The query optimizer would choose `Plan 2` based on the cost estimates. However, if `B(Customers)` is very large and memory is limited, the hash table might not fit in memory, making `Plan 2` less efficient due to I/O spilling (writing portions of the hash table to disk).

**Important Point:**  Cost-based optimization relies on accurate statistics about the data (e.g., table sizes, number of distinct values).  Outdated or inaccurate statistics can lead to suboptimal plan selection.

### 8. Practice Questions/Exercises

**Question 1:**

You have two tables: `Employees` (10,000 tuples, 100 blocks) and `Departments` (100 tuples, 10 blocks). You want to join them on `DepartmentID`. Calculate the I/O cost of the following plans:

*   **Plan A: Nested-Loop Join (outer loop: Employees, inner loop: Departments)**
*   **Plan B: Nested-Loop Join (outer loop: Departments, inner loop: Employees)**

**Answer:**

*   **Plan A:** Cost = `B(Employees) + T(Employees) * B(Departments) = 100 + 10000 * 10 = 100,100 I/O operations`
*   **Plan B:** Cost = `B(Departments) + T(Departments) * B(Employees) = 10 + 100 * 100 = 10,010 I/O operations`

Plan B is significantly cheaper in terms of I/O cost.

**Question 2:**

Consider a selection query on a table `Students` with 1,000,000 tuples and 10,000 blocks. The selection condition is `GPA > 3.5`.  Approximately 10% of the students satisfy this condition.  Calculate the I/O cost in the following scenarios:

*   **Scenario 1: Sequential Scan**
*   **Scenario 2: Clustered Index on GPA**
*   **Scenario 3: Unclustered Index on GPA (worst case)**

**Answer:**

*   **Scenario 1:** Cost = `B(Students) = 10,000 I/O operations` (must read all blocks)
*   **Scenario 2:** Cost = `B(Students) * (fraction of tuples satisfying condition) = 10,000 * 0.1 = 1,000 I/O operations`
*   **Scenario 3:** Cost = `number of tuples satisfying condition = 1,000,000 * 0.1 = 100,000 I/O operations` (worst case - one I/O per tuple)

**Question 3:**

Why is network cost a significant concern in distributed databases?  Give two strategies for minimizing network cost.

**Answer:**

Network cost is significant because transferring data between nodes in a distributed database is often much slower than accessing local data. Network bandwidth is limited, and network latency can be high.

Two strategies for minimizing network cost are:

1.  **Data Localization:** Move the computation closer to the data to avoid transferring large amounts of data across the network.
2.  **Semijoin Reduction:** Reduce the size of the data transferred by sending only the necessary attributes (e.g., the joining attribute) between nodes.

### 9. Important Points to Remember

*   Query optimization is essential for database performance.
*   Different cost models exist, focusing on I/O, CPU, and network communication.
*   I/O cost is often the dominant factor, but CPU and network costs can be significant.
*   Cost models are used to estimate the cost of different query plans.
*   Accurate statistics are crucial for cost-based optimization.
*   The choice of the best cost model depends on the specific application and the database system architecture.
