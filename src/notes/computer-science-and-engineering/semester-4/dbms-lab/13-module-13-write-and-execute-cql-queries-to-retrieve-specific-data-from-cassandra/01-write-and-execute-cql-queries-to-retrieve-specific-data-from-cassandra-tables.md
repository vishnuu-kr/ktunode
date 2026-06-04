---
title: "Write and execute CQL queries to retrieve specific data from Cassandra tables"
subject: "DBMS LAB"
module: "Module 13: Write and execute CQL queries to retrieve specific data from Cassandra tables"
branch: "Computer Science and Engineering"
semester: 4
topicId: "684162760fc9aa1fdbc8b4fa"
status: "completed"
scrapedAt: "2026-05-20T16:12:17.350Z"
---
# DBMS Lab - Module 13: Retrieving Specific Data from Cassandra Tables with CQL

## Introduction

This module focuses on writing and executing CQL (Cassandra Query Language) queries to retrieve specific data from Cassandra tables.  Cassandra is a NoSQL, distributed database designed for handling large amounts of data across many commodity servers, providing high availability with no single point of failure. CQL is the primary language used to interact with Cassandra. Mastering CQL is crucial for effectively querying and manipulating data within a Cassandra database.

## Learning Outcomes

Upon completion of this module, you will be able to:

*   Understand the basic syntax of CQL `SELECT` statements.
*   Retrieve all columns from a table.
*   Retrieve specific columns from a table.
*   Use the `WHERE` clause to filter data based on conditions.
*   Understand the concept of primary keys and their role in querying.
*   Use comparison operators (`=`, `>`, `<`, `>=`, `<=`, `IN`) in `WHERE` clauses.
*   Use the `ALLOW FILTERING` clause (and understand its implications).
*   Apply `LIMIT` to restrict the number of results.
*   Understand data types in Cassandra and how they affect querying.
*   Utilize CQL functions to manipulate data during retrieval.

## 1. Basic Syntax of CQL `SELECT` Statements

The `SELECT` statement is the cornerstone of data retrieval in CQL. Its basic structure is:

```cql
SELECT column1, column2, ... FROM keyspace_name.table_name WHERE condition;
```

*   **`SELECT`**:  Keyword indicating a data retrieval operation.
*   **`column1, column2, ...`**: List of columns to retrieve. Use `*` to select all columns.
*   **`FROM`**:  Specifies the keyspace and table from which to retrieve data.
*   **`keyspace_name.table_name`**:  Identifies the specific table within a keyspace.
*   **`WHERE condition`**:  (Optional)  Filters the data based on a specified condition.
*   **`;`**:  Terminates the CQL statement.

## 2. Retrieving All Columns from a Table

To retrieve all columns from a table, use the asterisk (`*`) in the `SELECT` statement.

```cql
SELECT * FROM mykeyspace.users;
```

This query will return all columns and rows from the `users` table in the `mykeyspace` keyspace.

## 3. Retrieving Specific Columns from a Table

To retrieve only specific columns, list them in the `SELECT` statement.

```cql
SELECT user_id, first_name, last_name FROM mykeyspace.users;
```

This query will return only the `user_id`, `first_name`, and `last_name` columns from the `users` table.

## 4. Using the `WHERE` Clause to Filter Data

The `WHERE` clause filters the data based on specified conditions. It is crucial for retrieving only the data you need.  Cassandra prioritizes filtering based on the primary key.

```cql
SELECT * FROM mykeyspace.users WHERE user_id = '123e4567-e89b-12d3-a456-426614174000';
```

This query will return the row from the `users` table where the `user_id` is equal to `'123e4567-e89b-12d3-a456-426614174000'`.

## 5. Primary Keys and Querying

Understanding primary keys is fundamental to querying Cassandra.  A primary key uniquely identifies a row within a table. It consists of:

*   **Partition Key:** Determines which node(s) in the cluster will store the data. Rows with the same partition key are stored on the same node. This is the *most important* part for efficient queries.
*   **Clustering Columns (optional):**  Define the order in which data is stored *within* a partition.

**Importance for Querying:**

*   **Efficiency:** Cassandra is optimized for querying based on the partition key.  Without providing the partition key in the `WHERE` clause, Cassandra must scan the entire cluster, which is highly inefficient.
*   **Mandatory Requirement:** You *must* provide the partition key (or keys) in the `WHERE` clause for efficient and predictable queries.

**Example:**

```cql
CREATE TABLE mykeyspace.orders (
    order_id UUID,
    customer_id UUID,
    order_date timestamp,
    total_amount DECIMAL,
    PRIMARY KEY ((customer_id), order_date, order_id)  -- Compound primary key
);
```

In this example:

*   `customer_id` is the partition key.
*   `order_date` and `order_id` are clustering columns.

To retrieve orders for a specific customer, you *must* provide the `customer_id` in the `WHERE` clause:

```cql
SELECT * FROM mykeyspace.orders WHERE customer_id = 'some_customer_id';  -- Efficient!
```

You can also filter by clustering columns, but you *must* provide the partition key first:

```cql
SELECT * FROM mykeyspace.orders WHERE customer_id = 'some_customer_id' AND order_date = '2023-10-27'; --Efficient
```

Incorrect (inefficient or will throw error if `ALLOW FILTERING` not used):

```cql
SELECT * FROM mykeyspace.orders WHERE order_date = '2023-10-27'; -- Inefficient.  Needs ALLOW FILTERING.  Not recommended.
```

## 6. Comparison Operators in `WHERE` Clauses

The `WHERE` clause supports various comparison operators:

*   **`=`**:  Equal to
*   **`>`**:  Greater than
*   **`<`**:  Less than
*   **`>=`**: Greater than or equal to
*   **`<=`**: Less than or equal to
*   **`IN`**:  Matches any value in a specified list.

**Examples:**

```cql
SELECT * FROM mykeyspace.users WHERE age > 25;
SELECT * FROM mykeyspace.products WHERE price < 100.00;
SELECT * FROM mykeyspace.users WHERE city IN ('New York', 'Los Angeles', 'Chicago');
SELECT * FROM mykeyspace.products WHERE product_id >= 'a1b2c3d4-e5f6-7890-1234-567890abcdef';
```

**Important Note:**  Using range queries (`>`, `<`, `>=`, `<=`) on *clustering columns* is generally efficient *after* specifying the partition key.  Attempting to use them without specifying the partition key will require `ALLOW FILTERING`, which is inefficient.

## 7. `ALLOW FILTERING` Clause

The `ALLOW FILTERING` clause tells Cassandra to execute a query even if it's not efficient (i.e., doesn't use the primary key effectively). It forces Cassandra to scan all nodes and filter the results.

**Use with Extreme Caution:**

*   **Performance Impact:**  `ALLOW FILTERING` can severely degrade performance, especially on large datasets. It should only be used for ad-hoc queries or when there's no other way to achieve the desired result.
*   **Resource Intensive:** Consumes significant resources on the Cassandra cluster.
*   **Consider Alternatives:**  Before using `ALLOW FILTERING`, consider:
    *   Redesigning your data model.
    *   Creating secondary indexes (but be mindful of their impact).

**Example:**

```cql
SELECT * FROM mykeyspace.users WHERE city = 'London' ALLOW FILTERING;
```

This query will return all users from London, but it will be *very* slow if the `city` is not part of the primary key or a secondary index.

**Best Practice:**  Avoid `ALLOW FILTERING` whenever possible.  Focus on designing your data model to support efficient querying based on the primary key.

## 8. `LIMIT` Clause

The `LIMIT` clause restricts the number of rows returned by a query.

```cql
SELECT * FROM mykeyspace.users LIMIT 10;
```

This query will return at most 10 rows from the `users` table.

**Use Cases:**

*   Pagination:  Retrieve data in smaller chunks.
*   Sampling:  Get a representative subset of the data.
*   Testing:  Limit the data processed during development.

## 9. Data Types in Cassandra and Querying

Cassandra supports various data types, including:

*   `ascii`
*   `bigint`
*   `blob`
*   `boolean`
*   `date`
*   `decimal`
*   `double`
*   `float`
*   `inet`
*   `int`
*   `list<type>`
*   `map<type1, type2>`
*   `set<type>`
*   `smallint`
*   `text` (UTF-8 encoded string)
*   `time`
*   `timestamp`
*   `timeuuid`
*   `tinyint`
*   `tuple<type1, type2, ...>`
*   `uuid`
*   `varchar` (UTF-8 encoded string)
*   `varint`

**Impact on Querying:**

*   **Data Type Matching:**  Ensure that the data type in the `WHERE` clause matches the data type of the column.
*   **String Literals:** Enclose string literals in single quotes (e.g., `'value'`).
*   **Numeric Literals:**  Use appropriate numeric literals for numeric data types (e.g., `123`, `3.14`).
*   **UUIDs:** Represent UUIDs using their standard string representation (e.g., `'123e4567-e89b-12d3-a456-426614174000'`).
*   **Dates and Timestamps:** Use appropriate formats for dates and timestamps (e.g., `'2023-10-27'`, `'2023-10-27 10:00:00+0000'`).  Understand the configured timestamp format of your cluster.

**Example:**

If `age` is an `int` column:

```cql
SELECT * FROM mykeyspace.users WHERE age = 30;  -- Correct
SELECT * FROM mykeyspace.users WHERE age = '30'; -- Incorrect (type mismatch)
```

If `user_id` is a `UUID` column:

```cql
SELECT * FROM mykeyspace.users WHERE user_id = 'f5a250a8-2419-4d57-9f8b-1f404e67c3a2'; -- Correct
```

## 10. CQL Functions for Data Manipulation

CQL provides functions to manipulate data during retrieval. Some common functions include:

*   **`toDate(timestamp)`:** Converts a timestamp to a date.
*   **`toUnixTimestamp(timestamp)`:** Converts a timestamp to a Unix timestamp (milliseconds since the epoch).
*   **`now()`:** Returns the current timestamp.
*   **`token(partition_key)`:**  Returns the token value for the partition key.  Useful for advanced data distribution strategies.
*   **String functions:** `substring()`, `length()`, `lower()`, `upper()`
*   **Mathematical functions:** `abs()`, `round()`, `ceil()`, `floor()`

**Examples:**

```cql
SELECT user_id, toDate(registration_date) AS registration_day FROM mykeyspace.users;
SELECT order_id, total_amount, round(total_amount) AS rounded_amount FROM mykeyspace.orders;
SELECT product_name, length(product_name) AS name_length FROM mykeyspace.products;
```

## Practice Questions/Exercises

**Scenario:** You have a table named `products` in a keyspace named `ecommerce` with the following schema:

```cql
CREATE TABLE ecommerce.products (
    product_id UUID PRIMARY KEY,
    product_name text,
    category text,
    price decimal,
    stock_quantity int
);
```

1.  **Retrieve the `product_name` and `price` of all products.**
2.  **Retrieve all products in the `Electronics` category.**
3.  **Retrieve all products with a `price` greater than 500.**
4.  **Retrieve the top 5 most expensive products.**
5.  **Retrieve the `product_name` and `stock_quantity` of all products where the `stock_quantity` is less than 10. (Consider the efficiency of this query)**

**Answers:**

1.  ```cql
    SELECT product_name, price FROM ecommerce.products;
    ```

2.  ```cql
    SELECT * FROM ecommerce.products WHERE category = 'Electronics' ALLOW FILTERING;  -- Inefficient! Consider adding category to primary key or create a secondary index.
    ```

3.  ```cql
    SELECT * FROM ecommerce.products WHERE price > 500 ALLOW FILTERING; -- Inefficient!  Consider adding price to the primary key or creating a secondary index
    ```

4.  ```cql
    SELECT * FROM ecommerce.products ORDER BY price DESC LIMIT 5 ALLOW FILTERING; -- Inefficient! ORDER BY is not efficient in Cassandra without proper indexing.
    ```

5.  ```cql
    SELECT product_name, stock_quantity FROM ecommerce.products WHERE stock_quantity < 10 ALLOW FILTERING; -- Inefficient! Consider creating an index on stock_quantity
    ```

**Important Notes on Efficiency:**  The queries for questions 2, 3, 4 and 5 are *inefficient* and require `ALLOW FILTERING`.  In a real-world scenario, you would need to redesign your data model or create appropriate secondary indexes to support these queries efficiently.  For example, you could create a secondary index on the `category` column to efficiently query products in a specific category.

## Important Points to Remember

*   **Primary Key is Key:**  Always design your tables with querying in mind and ensure your primary key supports the types of queries you need to perform efficiently.
*   **Avoid `ALLOW FILTERING`:**  Use it only as a last resort and understand its performance implications.
*   **Data Type Matching:**  Ensure that data types in the `WHERE` clause match the column data types.
*   **Index Appropriately:**  Consider secondary indexes for columns that are frequently used in `WHERE` clauses but are not part of the primary key.  Be mindful of the overhead of maintaining indexes.
*   **`LIMIT` for Pagination:** Use `LIMIT` to retrieve data in manageable chunks.
*   **Understand Data Distribution:** Be aware of how data is distributed across the Cassandra cluster based on the partition key. This will affect the performance of your queries.

By understanding these concepts and best practices, you can effectively retrieve specific data from Cassandra tables using CQL, ensuring efficient and performant database operations.
