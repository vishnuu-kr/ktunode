---
title: "Query Decomposition"
subject: "ADVANCED DATABASE SYSTEMS"
module: "Module 2: Distributed Databases  "
branch: "Computer Science and Engineering"
semester: 6
topicId: "684162770fc9aa1fdbc8bbdd"
status: "completed"
scrapedAt: "2026-05-20T16:50:19.771Z"
---
# ADVANCED DATABASE SYSTEMS - Module 2: Distributed Databases - Query Decomposition

## Introduction

This module delves into the process of Query Decomposition within the context of Distributed Databases. Query Decomposition transforms a high-level query into a form that can be executed efficiently across multiple distributed database sites. It involves various steps, from analyzing the query to simplifying it and restructuring it for optimal execution.

## Learning Outcomes

By the end of this topic, you will be able to:

1.  **Explain the need for query decomposition in distributed databases.**
2.  **Describe the different phases involved in query decomposition.**
3.  **Apply query simplification techniques, including constant elimination and predicate moving.**
4.  **Understand and apply query restructuring techniques, specifically query flattening.**
5.  **Analyze and optimize distributed query execution plans.**

## 1. Need for Query Decomposition in Distributed Databases

*   **Definition of Distributed Database:** A distributed database is a database system in which the data is stored on multiple physical sites.  These sites are interconnected by a communication network.

*   **Complexity of Distributed Queries:** Queries in distributed databases are inherently more complex than in centralized databases due to factors like:
    *   **Data Fragmentation:** Data is often fragmented (horizontally, vertically, or mixed) across different sites.
    *   **Data Replication:** Some data might be replicated at multiple sites for availability and performance.
    *   **Network Communication Costs:** Moving data between sites incurs significant costs.
    *   **Heterogeneity:** The databases at different sites may have different schemas, data models, or even different database management systems (DBMSs).

*   **Need for Query Decomposition:**  Decomposition is crucial to:
    *   **Translate High-Level Queries:** Convert a user-submitted SQL query into a sequence of operations suitable for execution in a distributed environment. The SQL query doesn’t know the fragmentation schema.
    *   **Optimize Query Execution:**  Find the most efficient way to execute the query across the network, minimizing data transfer and processing costs.
    *   **Address Fragmentation and Replication:**  Take into account how data is fragmented and/or replicated to access the necessary data segments from the correct sites.
    *   **Reduce Data Transfer:**  Minimize the amount of data that needs to be transferred across the network. This is the primary goal of query optimization in distributed systems.
    *   **Enable Parallelism:**  Break down the query into subqueries that can be executed in parallel at different sites.

*   **Without Decomposition:**  A naive approach of transferring all relevant data to a single site and processing the query there would be highly inefficient and impractical for large datasets.

**Example:**

Imagine a query that joins customer data stored in New York with order data stored in London. Without query decomposition, the entire customer table from New York might need to be transferred to London, or vice versa, for the join operation. Query decomposition would aim to minimize this data transfer by perhaps sending only the relevant customer IDs to London.

## 2. Phases of Query Decomposition

Query decomposition typically involves the following phases:

*   **2.1 Analysis:**
    *   **Purpose:**  To validate the query syntax and semantics.
    *   **Actions:**
        *   Check for syntax errors.
        *   Verify that the tables and attributes referenced in the query exist in the global schema.
        *   Resolve aliases and view definitions.
        *   Replace views with their underlying queries (view resolution).
    *   **Output:** An internal representation of the query (e.g., a query tree).

*   **2.2 Normalization/Simplification:**
    *   **Purpose:** To simplify the query by removing redundant or unnecessary operations.
    *   **Actions:**
        *   **Constant Elimination:** Replace variables with their known constant values.
        *   **Predicate Moving:**  Move restrictive predicates (WHERE clause conditions) as early as possible in the query execution plan. This reduces the amount of data that needs to be processed in subsequent steps.
        *   **Eliminate Redundant Predicates:** Remove duplicate or logically equivalent predicates.
        *   **Eliminate Empty Joins/Unnecessary Tables:** If a table is joined but its attributes are never used in the SELECT list or WHERE clause, remove the table.
    *   **Output:** A simplified query equivalent to the original but more efficient to process.

*   **2.3 Restructuring/Query Rewriting/Optimization:**
    *   **Purpose:**  To transform the query into an equivalent but more efficient form.
    *   **Actions:**
        *   **Query Flattening:** Combine nested queries into a single query using techniques like unnesting. This can improve performance by allowing the optimizer to consider more execution plans.
        *   **Join Ordering:** Determine the optimal order in which to execute joins. This is crucial for minimizing intermediate result sizes and data transfer costs.  (This often leverages semijoin optimization in distributed systems)
        *   **Fragmentation Handling:** Determine which fragments of data need to be accessed based on the query predicates and fragmentation schema.
        *   **Data Localization:** Transforms the global query into a fragment query for execution at multiple sites.  This involves replacing global names with the names of fragments at each site.
    *   **Output:** A restructured query ready for distributed execution planning.

*   **2.4 Allocation (not always considered part of decomposition):**
    *   **Purpose:**  To decide where to execute the different parts of the query.
    *   **Actions:**
        *   Consider data fragmentation, replication, and site processing capabilities.
        *   Choose the optimal sites for executing joins, selections, and other operations.
    *   **Output:** An annotated query indicating where each operation should be performed.  This becomes part of the *execution plan*.

## 3. Query Simplification Techniques

*   **3.1 Constant Elimination:**
    *   **Definition:** Replacing variables in the query with their corresponding constant values.
    *   **Example:**
        *   Original Query: `SELECT * FROM Employees WHERE salary = :salary_variable AND department = 'Sales';`
        *   If `:salary_variable` is known to be 50000, the simplified query becomes:  `SELECT * FROM Employees WHERE salary = 50000 AND department = 'Sales';`

*   **3.2 Predicate Moving:**
    *   **Definition:** Moving selective predicates as early as possible in the query execution plan. A selective predicate is one that significantly reduces the size of the intermediate result.
    *   **Example:**
        *   Original Query: `SELECT e.name, o.order_id FROM Employees e JOIN Orders o ON e.employee_id = o.employee_id WHERE o.order_date > '2023-01-01' AND e.department = 'Sales';`
        *   Simplified Query (Predicate Moving): `SELECT e.name, o.order_id FROM Employees e JOIN Orders o ON e.employee_id = o.employee_id WHERE e.department = 'Sales' AND o.order_date > '2023-01-01';`  While logically equivalent, evaluating `e.department = 'Sales'` first *may* reduce the number of rows to join, assuming fewer employees are in the Sales department than the overall number of orders. If `department = 'Sales'` is highly selective, this can result in significant performance gains.
    *   **Important Note:**  The order of predicates might affect performance. The more selective predicates should be applied earlier.

*   **3.3 Eliminating Redundant Predicates:**
    *   **Definition:** Removing conditions that are logically implied by other conditions or are always true/false.
    *   **Example:**
        *   Original Query: `SELECT * FROM Employees WHERE salary > 50000 AND salary > 40000;`
        *   Simplified Query: `SELECT * FROM Employees WHERE salary > 50000;` (salary > 40000 is redundant)

## 4. Query Restructuring Techniques: Query Flattening

*   **4.1 Definition:** Transforming a nested query into a single, equivalent query, usually involving joins.  This allows the query optimizer to consider a wider range of execution plans, including plans that might be more efficient.
*   **4.2 Common Scenarios for Flattening:**
    *   **Subqueries in WHERE clause:** Especially uncorrelated subqueries.
    *   **Subqueries in SELECT clause (less common for flattening).**
*   **4.3 Example: Unnesting a Subquery in the WHERE clause (Uncorrelated Subquery)**
    *   **Original Query (Nested):**

    ```sql
    SELECT *
    FROM Orders
    WHERE customer_id IN (SELECT customer_id FROM Customers WHERE city = 'New York');
    ```

    *   **Flattened Query (Using JOIN):**

    ```sql
    SELECT o.*
    FROM Orders o
    JOIN Customers c ON o.customer_id = c.customer_id
    WHERE c.city = 'New York';
    ```

    *   **Explanation:** The flattened query avoids the nested subquery by joining the `Orders` and `Customers` tables. The `WHERE` clause now filters based on the `city` attribute of the `Customers` table.  This allows the query optimizer to consider various join strategies (e.g., hash join, merge join) which might be more efficient than repeatedly executing the subquery for each row in the `Orders` table.

*   **4.4 Considerations:**
    *   **Potential for Cartesian Product:** Flattening can sometimes lead to a Cartesian product if not done carefully (especially with correlated subqueries). This can severely degrade performance.
    *   **Semantic Equivalence:**  Ensure the flattened query is logically equivalent to the original nested query.
    *   **Data Fragmentation Awareness:** When restructuring queries, especially when flattening, it’s crucial to consider how tables are fragmented across sites.  The best flattening approach may depend on the data's location.

## 5. Analyzing and Optimizing Distributed Query Execution Plans

*   **5.1 Execution Plan:** A detailed sequence of operations (e.g., selections, joins, projections, data transfers) that will be performed to execute a query.  In a distributed setting, the execution plan specifies *where* each operation will be performed.

*   **5.2 Cost-Based Optimization:**  A common approach to choosing the best execution plan. It involves estimating the cost of different plans and selecting the plan with the lowest estimated cost.
    *   **Cost Factors:**
        *   **Data Transfer Costs:**  The dominant cost factor in distributed databases.  Minimize the amount of data transferred between sites.
        *   **Processing Costs:** CPU usage, disk I/O, etc.  These are usually less significant than data transfer costs.
        *   **Communication Costs:**  Overhead of sending messages between sites.

*   **5.3 Optimization Techniques:**
    *   **Semijoin Optimization:**  A technique to reduce data transfer costs by sending only the joining attributes from one site to another before performing the join.  It's very common in distributed databases.
    *   **Bloom Filters:** Using Bloom filters to filter data before sending it across the network.
    *   **Data Shipping vs. Query Shipping:**
        *   **Data Shipping:**  Transferring the data to the site where the query will be executed.
        *   **Query Shipping:**  Sending the query to the site where the data is located.  Choose the approach that minimizes data transfer.
    *   **Parallelism:**  Executing subqueries in parallel at different sites to reduce overall execution time.

*   **5.4 Example: Distributed Join Optimization (using Semijoin)**
    *   Assume we want to join `Orders` table (located at Site A) with `Customers` table (located at Site B) on `customer_id`.
    *   **Naive Approach (Data Shipping):** Ship the entire `Customers` table to Site A and perform the join.
    *   **Semijoin Optimization:**
        1.  Project `customer_id` from the `Orders` table at Site A:  `π customer_id (Orders)`
        2.  Send this projected `customer_id` set to Site B.
        3.  At Site B, select only the `Customers` rows where `customer_id` is in the received set.
        4.  Send these filtered `Customers` rows back to Site A.
        5.  Perform the final join at Site A.
    *   **Benefits:** This reduces the amount of data transferred from Site B to Site A, especially if the `customer_id` values in the `Orders` table represent only a small subset of all customers.

## 6. Important Points to Remember

*   Query decomposition is a critical process for efficient query processing in distributed database systems.
*   Minimizing data transfer is the primary goal of distributed query optimization.
*   Understand the phases of query decomposition and the techniques used in each phase.
*   Query flattening can improve performance but must be done carefully to avoid Cartesian products and maintain semantic equivalence.
*   Cost-based optimization is used to select the best execution plan based on estimated costs.
*   Semijoin optimization and other techniques are used to reduce data transfer costs.

## Practice Questions and Exercises

**Question 1:** Explain the difference between constant elimination and predicate moving in query simplification. Provide an example of each.

**Answer:**

*   **Constant Elimination:** Replaces variables with their known constant values.
    *   Example: `WHERE age = :age_variable` becomes `WHERE age = 30` if `:age_variable` is 30.
*   **Predicate Moving:** Moves selective predicates earlier in the query execution plan.
    *   Example: Moving `WHERE order_date > '2023-01-01'` before a join if it reduces the number of rows to be joined.

**Question 2:**  Given the following SQL query, flatten it using a JOIN.

```sql
SELECT employee_id, employee_name
FROM Employees
WHERE department_id IN (SELECT department_id FROM Departments WHERE location = 'New York');
```

**Answer:**

```sql
SELECT e.employee_id, e.employee_name
FROM Employees e
JOIN Departments d ON e.department_id = d.department_id
WHERE d.location = 'New York';
```

**Question 3:** What are the key cost factors to consider when optimizing a distributed query execution plan?

**Answer:**

*   Data Transfer Costs: Dominant cost factor.
*   Processing Costs: CPU usage, disk I/O.
*   Communication Costs: Message overhead.

**Question 4:**  Explain the concept of semijoin optimization and why it's useful in distributed databases.

**Answer:**

Semijoin optimization reduces data transfer costs by only sending the joining attributes from one site to another before performing the join. This is useful because it filters the data on the receiving site before sending the entire table back to the original site for the final join, which is especially helpful in distributed databases to minimize network traffic.

**Question 5:**  What is the difference between Data Shipping and Query Shipping? When would you prefer one over the other?

**Answer:**

* **Data Shipping:** Involves moving the data to the site where the query is executed. This is preferable when the amount of data to be transferred is relatively small compared to the complexity of the query.
* **Query Shipping:** Involves sending the query to the site where the data resides. This is preferable when the data is large and the query can be efficiently executed at the data's location, minimizing the amount of data that needs to be transferred.

These notes cover the key aspects of query decomposition in distributed databases, providing a solid foundation for understanding and applying these concepts. Remember to study these concepts and practice with examples to solidify your understanding. Good luck!
