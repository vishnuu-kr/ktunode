---
title: "Evaluation of expressions"
subject: "ADVANCED DATABASE SYSTEMS"
module: "Module 1: Query Processing and Optimization "
branch: "Computer Science and Engineering"
semester: 6
topicId: "684162770fc9aa1fdbc8bbcc"
status: "completed"
scrapedAt: "2026-05-20T16:50:08.217Z"
---
# ADVANCED DATABASE SYSTEMS: Module 1 - Query Processing and Optimization
## Topic: Evaluation of Expressions

**Learning Outcomes:**

*   Understand the basic principles of query processing.
*   Learn different evaluation strategies for relational algebra expressions.
*   Analyze the cost of different evaluation strategies.
*   Explore the concept of materialization vs. pipelining.
*   Apply techniques to optimize query evaluation.

---

**1. Query Processing Basics**

*   **Definition:** Query processing is the sequence of actions taken to transform a high-level query in a declarative query language (e.g., SQL) into a low-level execution plan that the database management system (DBMS) can understand and execute.
*   **Steps in Query Processing:**
    *   **Parsing and Translation:** SQL query is parsed and translated into a relational algebra expression.
    *   **Optimization:**  The relational algebra expression is transformed into an equivalent expression that is more efficient to evaluate. This involves choosing the best execution plan.
    *   **Evaluation:**  The execution plan is run, and the result is produced.
*   **Importance:** Efficient query processing is crucial for database performance as it directly affects the time taken to retrieve data.

**2. Relational Algebra Expressions**

*   **Definition:** Relational algebra is a procedural query language that defines a set of operations (e.g., select, project, join, union, intersection, difference) that operate on relations (tables).
*   **Basic Relational Algebra Operations:**
    *   **Selection (σ):**  Selects tuples from a relation that satisfy a given predicate.
        *   Example: `σ age > 30 (Employees)` selects all employees older than 30.
    *   **Projection (π):** Selects specific attributes (columns) from a relation.
        *   Example: `π name, salary (Employees)` projects the name and salary attributes.
    *   **Union (∪):** Combines tuples from two relations (must be union compatible - same attributes and datatypes).
        *   Example: `Customers ∪ Suppliers`
    *   **Intersection (∩):**  Returns tuples that are present in both relations (must be union compatible).
        *   Example: `Customers ∩ Suppliers`
    *   **Difference (-):** Returns tuples that are present in the first relation but not in the second (must be union compatible).
        *   Example: `Customers - Suppliers`
    *   **Cartesian Product (×):**  Combines each tuple from the first relation with each tuple from the second relation.
        *   Example: `Customers × Orders`
    *   **Join (⋈):** Combines tuples from two relations based on a specified condition.
        *   **Theta Join (⋈<sub>θ</sub>):** Joins tuples that satisfy a specified condition θ.
            *   Example: `Employees ⋈<sub>Employees.dept_id = Departments.dept_id</sub> Departments`
        *   **Equijoin:**  A theta join where the condition θ involves only equality comparisons.
        *   **Natural Join (⋈):** An equijoin on all attributes with the same name in both relations, with duplicate attribute names removed from the result.
*   **Example of a Relational Algebra Expression:**
    `π name (σ dept_id = 'CS' (Employees ⋈ Departments))`
    *   This expression finds the names of all employees in the Computer Science (CS) department.  It first joins the `Employees` and `Departments` tables based on the `dept_id`, then selects tuples where the `dept_id` is 'CS', and finally projects the `name` attribute.

**3. Evaluation Strategies**

*   **Materialization:**
    *   **Definition:** Evaluate each operation in the relational algebra expression and store the results in a temporary relation (a materialized view).  The subsequent operations then operate on these materialized results.
    *   **Process:**
        1.  Evaluate the innermost operation and store the result in a temporary relation.
        2.  Evaluate the next operation using the temporary relation(s) and store the result in another temporary relation.
        3.  Repeat until the final result is obtained.
    *   **Advantages:**
        *   Simple to implement.
        *   Can be efficient if a temporary relation is used multiple times.
    *   **Disadvantages:**
        *   Can be inefficient due to writing intermediate results to disk (I/O overhead).
        *   Requires significant disk space for storing temporary relations.
*   **Pipelining:**
    *   **Definition:** Pass the results of one operation directly to the next operation without materializing the intermediate results.  Data flows through a "pipeline" of operators.
    *   **Types of Pipelining:**
        *   **Demand-Driven Pipelining (Lazy Evaluation):** The system requests tuples from the next operator only when it needs them. The operator produces tuples only when requested.
        *   **Producer-Driven Pipelining (Eager Evaluation):**  The operator produces tuples as quickly as possible and pushes them to the next operator.
    *   **Advantages:**
        *   Reduces I/O overhead by avoiding writing intermediate results to disk.
        *   Can be more efficient than materialization for queries with complex join operations.
    *   **Disadvantages:**
        *   More complex to implement.
        *   May not be suitable for all types of operations (e.g., sorting or aggregation).  These operations often require seeing all the input before producing any output.

**4. Cost Estimation**

*   **Importance:**  Cost estimation is crucial for query optimization, as it allows the DBMS to choose the most efficient evaluation plan.
*   **Cost Factors:**
    *   **Disk I/O:** The number of disk blocks that need to be read or written. This is often the dominant cost factor.
    *   **CPU Cost:**  The time spent processing data in memory.
    *   **Network Cost:** The cost of transferring data across a network (relevant in distributed databases).
*   **Estimating Selectivity:**
    *   Selectivity refers to the fraction of tuples in a relation that satisfy a given condition.
    *   Estimating selectivity is crucial for estimating the size of intermediate results.
    *   Techniques for estimating selectivity:
        *   **Uniform Data Assumption:** Assumes that data is uniformly distributed across all possible values.  (Often a poor assumption in real-world data).
        *   **Statistical Summaries (Histograms):**  Maintains histograms of attribute values to provide more accurate selectivity estimates.
*   **Cost Functions:**
    *   Cost functions are used to estimate the cost of different relational algebra operations based on factors such as relation size, selectivity, and available indexes.
    *   Example:  The cost of a selection operation could be estimated as:
        *   `Cost(σ<sub>condition</sub>(R)) = b(R) * selectivity(condition)`
            *   Where `b(R)` is the number of blocks occupied by relation `R`, and `selectivity(condition)` is the selectivity of the condition.
*   **Join Cost Estimation:**  Join cost is highly dependent on the join algorithm used (e.g., nested loop join, sort-merge join, hash join) and the availability of indexes.

**5. Query Optimization Techniques**

*   **Algebraic Transformations:**
    *   Apply rules of relational algebra to transform a query into an equivalent but more efficient form.
    *   Examples:
        *   **Selection Pushdown:** Move selection operations down the query tree, applying them as early as possible. This reduces the size of intermediate results.
        *   **Projection Pushdown:** Move projection operations down the query tree to reduce the number of attributes being processed.
        *   **Join Ordering:**  Determine the optimal order in which to perform join operations. This can significantly impact performance.  Joining smaller relations first can reduce the size of intermediate results.
*   **Index Usage:**
    *   Utilize indexes to speed up selection and join operations.
    *   Indexes provide a direct way to locate tuples that satisfy a given condition, avoiding the need to scan the entire relation.
    *   Choosing the right indexes is crucial for query performance.
*   **Choice of Algorithms:**
    *   Select the most efficient algorithm for each operation based on factors such as relation size, available memory, and the presence of indexes.
    *   Examples:
        *   **Nested Loop Join:** Simple to implement, but inefficient for large relations.
        *   **Sort-Merge Join:** Requires sorting the input relations, but can be efficient for large relations.
        *   **Hash Join:** Uses a hash table to speed up the join operation.

**6. Materialization vs. Pipelining: A Deeper Dive**

| Feature         | Materialization                       | Pipelining                           |
|-----------------|--------------------------------------|--------------------------------------|
| I/O Overhead    | High (writes intermediate results)     | Low (avoids writing intermediate results)|
| Memory Usage    | Lower (operates on smaller, materialized results) | Higher (operators must hold data in memory) |
| Complexity      | Simpler to implement                | More complex to implement           |
| Suitability     | Suitable for queries with repeated subexpressions | Suitable for queries with complex joins |
| Example Queries | Queries using results multiple times.  | Queries where results can flow directly.  |

**7. Important Points to Remember**

*   Query processing is the heart of database performance.
*   Relational algebra provides a formal foundation for query optimization.
*   Understanding the cost of different evaluation strategies is essential for choosing the optimal execution plan.
*   Materialization and pipelining are two fundamental approaches to query evaluation, each with its own strengths and weaknesses.
*   Query optimization techniques, such as algebraic transformations and index usage, can significantly improve query performance.

---

**Practice Questions/Exercises:**

**1.  Consider the following relational schema:**

*   `Customers(custID, name, city)`
*   `Orders(orderID, custID, orderDate, amount)`

**a) Write a relational algebra expression to find the names of all customers who have placed an order with an amount greater than $1000.**

**b) Describe two different evaluation strategies for evaluating this expression.  Discuss the advantages and disadvantages of each strategy in this context.**

**c) How could you optimize this query using algebraic transformations?**

**2.  Explain the difference between demand-driven pipelining and producer-driven pipelining.  Give an example of a situation where each type of pipelining would be more appropriate.**

**3.  Suppose you have two relations, `R` and `S`, with 10,000 and 5,000 tuples respectively.  `R` occupies 100 blocks on disk, and `S` occupies 50 blocks on disk.  Estimate the cost (in terms of disk I/O) of performing a nested loop join of `R` and `S`, assuming that `R` is the outer relation. Then estimate the cost if `S` is the outer relation.**

**4.  What are histograms, and how are they used in query optimization?**

**Answers:**

**1. a)**

```relational-algebra
π name (Customers ⋈ (σ amount > 1000 (Orders)))
```

**1. b)**

*   **Strategy 1: Materialization:**
    1.  Evaluate `σ amount > 1000 (Orders)` and store the result in a temporary relation `T1`.
    2.  Evaluate `Customers ⋈ T1` and store the result in a temporary relation `T2`.
    3.  Evaluate `π name (T2)`.

    *   **Advantages:** Simple to implement.
    *   **Disadvantages:** Requires writing `T1` and `T2` to disk, which can be I/O intensive.
*   **Strategy 2: Pipelining:**
    1.  As `π name` requests tuples, the join `Customers ⋈ (σ amount > 1000 (Orders))` provides them.
    2.  The join pulls tuples from `Customers` and filters tuples from `Orders` where `amount > 1000` *on demand*.
    *   **Advantages:** Avoids writing intermediate results to disk.
    *   **Disadvantages:** More complex to implement, but likely more efficient in this case.

**1. c)**

*   **Selection Pushdown:** Not applicable here, as the selection is already as close to the `Orders` table as possible.  The join is necessary to combine the `Customers` and `Orders` relations.

**2.**

*   **Demand-Driven Pipelining (Lazy Evaluation):** The consumer operator requests tuples from the producer operator only when it needs them. The producer produces tuples only when requested. This is suitable when not all output from the producer is needed. Example:  A query with a `LIMIT` clause. The sorting operation only needs to produce a limited number of results.
*   **Producer-Driven Pipelining (Eager Evaluation):** The producer operator produces tuples as quickly as possible and pushes them to the next operator, regardless of whether the consumer needs them immediately.  This is suitable when the producer can efficiently generate tuples and the consumer is likely to consume all or most of them.  Example:  A filter operation that needs to pass most of the tuples to the next operation.

**3.**

*   **R as outer relation:** Cost = `b(R) + b(R) * b(S) = 100 + 100 * 50 = 5100` I/Os
*   **S as outer relation:** Cost = `b(S) + b(S) * b(R) = 50 + 50 * 100 = 5050` I/Os

In this case, choosing `S` as the outer relation would be slightly more efficient.

**4.**

Histograms are statistical summaries of the distribution of values for an attribute in a relation. They divide the range of values into buckets and store the frequency of values falling into each bucket.

They are used in query optimization to:

*   Estimate the selectivity of selection predicates. By knowing the distribution of values, the optimizer can more accurately estimate how many tuples will satisfy a given condition.
*   Improve join cost estimation. The optimizer can use histograms to estimate the size of the join result and choose the most efficient join algorithm.

---
These notes should give you a solid foundation for understanding the evaluation of expressions in advanced database systems. Remember to review your textbook and lecture notes to supplement this information. Good luck!
