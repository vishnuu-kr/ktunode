---
title: "Perform basic CRUD (Create, Read, Update, Delete) operations on a Cassandra table."
subject: "DBMS LAB"
module: "Module 12: Perform basic CRUD (Create, Read, Update, Delete) operations on a Cassandra table."
branch: "Computer Science and Engineering"
semester: 4
topicId: "684162760fc9aa1fdbc8b4f8"
status: "completed"
scrapedAt: "2026-05-20T16:12:16.635Z"
---
# DBMS Lab - Module 12: Cassandra CRUD Operations

**Topic:** Perform basic CRUD (Create, Read, Update, Delete) operations on a Cassandra table.

**Description:** This module covers the fundamental CRUD (Create, Read, Update, Delete) operations performed on tables within a Cassandra database. Understanding these operations is crucial for interacting with and managing data in a Cassandra environment.

**Learning Outcomes:**

*   Understand the basic principles of CRUD operations.
*   Learn how to create a table in Cassandra using CQL (Cassandra Query Language).
*   Learn how to insert data into a Cassandra table using CQL.
*   Learn how to read data from a Cassandra table using CQL.
*   Learn how to update data in a Cassandra table using CQL.
*   Learn how to delete data from a Cassandra table using CQL.
*   Understand the importance of primary keys and consistency levels in CRUD operations.

## 1. Introduction to CRUD Operations

*   **CRUD** stands for **Create, Read, Update, and Delete**. These are the four basic operations that can be performed on data stored in a database.
*   CRUD operations are fundamental to data management in any database system, including Cassandra.
*   **Cassandra Query Language (CQL):** CQL is the query language used to interact with Cassandra. It is similar to SQL but has some key differences due to Cassandra's distributed nature and NoSQL characteristics.

## 2. Key Concepts and Definitions

*   **Keyspace:** A container for related column families (tables) in Cassandra. It's like a database in relational databases.
*   **Table (Column Family):** A collection of related data organized into rows and columns. Similar to a table in relational databases, but with a different underlying storage model.
*   **Column:** A single attribute of a row in a table.
*   **Row:** A single record in a table, identified by a primary key.
*   **Primary Key:** Uniquely identifies a row in a table.  It consists of one or more columns.
    *   **Partition Key:** The part of the primary key that determines which node in the cluster will store the data. Rows with the same partition key are stored on the same node.
    *   **Clustering Columns:**  The part of the primary key that sorts the data within a partition. Clustering columns determine the order in which data is stored on disk within a partition.
*   **Consistency Level:**  Determines how many nodes must acknowledge a write or read operation before it is considered successful. Higher consistency levels provide stronger guarantees of data consistency but can come at the cost of performance. Common consistency levels include `ONE`, `QUORUM`, `ALL`.

## 3. Creating a Cassandra Table (CREATE)

*   The `CREATE TABLE` statement is used to define a new table in Cassandra.
*   You must specify the table name, column names, data types, and primary key.
*   Data types in Cassandra include `text`, `int`, `bigint`, `float`, `double`, `boolean`, `uuid`, `timestamp`, and more.

**Syntax:**

```cql
CREATE TABLE keyspace_name.table_name (
    column1_name data_type,
    column2_name data_type,
    ...
    PRIMARY KEY ((partition_key_column(s)), clustering_column(s))
);
```

**Example:**

```cql
CREATE KEYSPACE IF NOT EXISTS mykeyspace WITH REPLICATION = {
    'class' : 'SimpleStrategy',
    'replication_factor' : 1
};

USE mykeyspace;

CREATE TABLE IF NOT EXISTS users (
    user_id UUID,
    first_name text,
    last_name text,
    email text,
    age int,
    PRIMARY KEY (user_id)
);
```

**Explanation:**

*   `CREATE KEYSPACE IF NOT EXISTS mykeyspace ...`: Creates a keyspace named `mykeyspace` if it doesn't already exist. `SimpleStrategy` with a replication factor of 1 is used for simplicity in a single-node setup.  In a production environment, `NetworkTopologyStrategy` is preferred.
*   `USE mykeyspace;`: Sets the active keyspace to `mykeyspace`.
*   `CREATE TABLE IF NOT EXISTS users ...`: Creates a table named `users` if it doesn't already exist.
*   `user_id UUID`: Defines a column named `user_id` with a UUID data type. This is a good choice for a primary key because it's guaranteed to be unique.
*   `PRIMARY KEY (user_id)`:  Sets `user_id` as the primary key (and the partition key in this case).  This means each `user_id` must be unique.

**Example with Composite Primary Key (Partition Key and Clustering Column):**

```cql
CREATE TABLE IF NOT EXISTS sensor_data (
    sensor_id UUID,
    timestamp timestamp,
    temperature float,
    humidity float,
    PRIMARY KEY ((sensor_id), timestamp)
);
```

**Explanation:**

*   `PRIMARY KEY ((sensor_id), timestamp)`:  `sensor_id` is the partition key and `timestamp` is the clustering column. Data is partitioned by `sensor_id` and then ordered within each partition by `timestamp`.  This allows for efficient querying of sensor data for a specific sensor within a specific time range.

## 4. Inserting Data (CREATE - INSERT)

*   The `INSERT` statement is used to add new rows to a Cassandra table.

**Syntax:**

```cql
INSERT INTO keyspace_name.table_name (column1_name, column2_name, ...) VALUES (value1, value2, ...);
```

**Example:**

```cql
INSERT INTO users (user_id, first_name, last_name, email, age)
VALUES (UUID(), 'John', 'Doe', 'john.doe@example.com', 30);

INSERT INTO users (user_id, first_name, last_name, email, age)
VALUES (UUID(), 'Jane', 'Smith', 'jane.smith@example.com', 25);
```

**Explanation:**

*   `INSERT INTO users ...`: Specifies the table to insert data into.
*   `(user_id, first_name, ...)`: Lists the columns to insert values into.
*   `VALUES (UUID(), 'John', ...)`: Provides the corresponding values for each column.  `UUID()` generates a new unique UUID for the `user_id`.

**Inserting into `sensor_data` table:**

```cql
INSERT INTO sensor_data (sensor_id, timestamp, temperature, humidity)
VALUES (UUID(), toTimestamp(now()), 25.5, 60.2);

INSERT INTO sensor_data (sensor_id, timestamp, temperature, humidity)
VALUES (UUID(), toTimestamp(now()), 26.1, 61.5);
```

**Explanation:**

*   `toTimestamp(now())`:  Converts the current time to a timestamp value suitable for the `timestamp` column.

## 5. Reading Data (READ - SELECT)

*   The `SELECT` statement is used to retrieve data from a Cassandra table.

**Syntax:**

```cql
SELECT column1_name, column2_name, ... FROM keyspace_name.table_name WHERE condition;
```

**Example:**

```cql
SELECT * FROM users;  -- Selects all columns from all rows

SELECT first_name, last_name FROM users WHERE age > 27;

SELECT * FROM users WHERE user_id = e9c7e154-67b2-4c21-8388-39994980b48a; -- Replace with an actual UUID
```

**Explanation:**

*   `SELECT * FROM users`: Retrieves all columns for all rows in the `users` table.  Use cautiously in production, as it can retrieve large amounts of data.
*   `SELECT first_name, last_name FROM users WHERE age > 27`: Retrieves only the `first_name` and `last_name` columns for rows where the `age` is greater than 27.
*   `SELECT * FROM users WHERE user_id = ...`: Retrieves the row where the `user_id` matches the specified UUID.  This is an efficient query because `user_id` is the primary key.  **Important:**  You MUST use the actual UUID value, not just the placeholder.

**Querying `sensor_data` table:**

```cql
SELECT * FROM sensor_data WHERE sensor_id = 54e72280-9876-4567-89ab-cdef01234567 AND timestamp > '2023-10-27 00:00:00+0000'; --Replace with valid UUID
```

**Explanation:**

*   This query retrieves all sensor data for a specific `sensor_id` where the `timestamp` is greater than a certain date.  Since `sensor_id` is the partition key, Cassandra can efficiently locate the data for that sensor. The timestamp allows filtering within that partition.

## 6. Updating Data (UPDATE)

*   The `UPDATE` statement is used to modify existing rows in a Cassandra table.
*   You must specify the primary key of the row to update and the columns to update with their new values.

**Syntax:**

```cql
UPDATE keyspace_name.table_name SET column1_name = value1, column2_name = value2, ... WHERE primary_key_column = primary_key_value;
```

**Example:**

```cql
UPDATE users SET email = 'john.newemail@example.com', age = 31 WHERE user_id = e9c7e154-67b2-4c21-8388-39994980b48a;  -- Replace with actual UUID
```

**Explanation:**

*   `UPDATE users SET ... WHERE user_id = ...`: Updates the `email` and `age` columns for the row where the `user_id` matches the specified UUID.  **Important:**  You MUST use the actual UUID value, not just the placeholder.

**Updating `sensor_data` table:**

```cql
-- You generally wouldn't update the partition key or clustering columns.
-- This example shows updating other columns based on the existing partition and clustering key values.
UPDATE sensor_data SET temperature = 27.0, humidity = 62.0 WHERE sensor_id = 54e72280-9876-4567-89ab-cdef01234567 AND timestamp = '2023-10-27 10:30:00+0000'; --Replace with a valid sensor_id and timestamp
```

**Important Considerations for Updates:**

*   **Where Clause:**  The `WHERE` clause MUST include all components of the primary key (partition key and clustering columns, if any) to uniquely identify the row to be updated.
*   **Idempotency:**  Cassandra favors idempotent operations.  An idempotent operation is one that can be executed multiple times without changing the final result. For example, setting `age = 31` is idempotent. Incrementing `age` (`age = age + 1`) is NOT idempotent because the final value depends on how many times the operation is performed. Non-idempotent operations can lead to inconsistencies, especially in distributed environments.

## 7. Deleting Data (DELETE)

*   The `DELETE` statement is used to remove rows from a Cassandra table.
*   You must specify the primary key of the row to delete.

**Syntax:**

```cql
DELETE FROM keyspace_name.table_name WHERE primary_key_column = primary_key_value;
```

**Example:**

```cql
DELETE FROM users WHERE user_id = e9c7e154-67b2-4c21-8388-39994980b48a;  -- Replace with actual UUID
```

**Explanation:**

*   `DELETE FROM users WHERE user_id = ...`: Deletes the row where the `user_id` matches the specified UUID. **Important:**  You MUST use the actual UUID value, not just the placeholder.

**Deleting from `sensor_data` table:**

```cql
DELETE FROM sensor_data WHERE sensor_id = 54e72280-9876-4567-89ab-cdef01234567 AND timestamp = '2023-10-27 10:30:00+0000'; --Replace with a valid sensor_id and timestamp
```

**Deleting specific columns (Tombstones):**

You can also delete the value of a specific column without deleting the entire row.  This creates a "tombstone," which is a marker indicating that the column has been deleted.  Tombstones are used to ensure that deleted data is properly propagated across the cluster.

```cql
DELETE email FROM users WHERE user_id = e9c7e154-67b2-4c21-8388-39994980b48a; --Replace with a valid UUID
```

**Important Considerations for Deletes:**

*   **Where Clause:** The `WHERE` clause MUST include all components of the primary key (partition key and clustering columns, if any) to uniquely identify the row to be deleted.
*   **Tombstones:**  Deleting data in Cassandra doesn't immediately remove it from disk. Tombstones are created to mark the data as deleted.  Compaction processes later remove the data.  Excessive tombstone creation can impact performance.

## 8. Consistency Levels

*   Consistency levels determine the number of nodes that must acknowledge a write or read operation before it is considered successful.
*   Higher consistency levels provide stronger guarantees of data consistency but can come at the cost of performance.
*   You can specify the consistency level for each operation using the `CONSISTENCY` clause.

**Common Consistency Levels:**

*   `ONE`:  The operation must be acknowledged by at least one node. Fastest, but least consistent.
*   `QUORUM`: The operation must be acknowledged by a quorum (majority) of nodes.  A good balance between consistency and performance.
*   `ALL`: The operation must be acknowledged by all nodes.  Strongest consistency, but slowest.

**Example:**

```cql
SELECT * FROM users WHERE user_id = e9c7e154-67b2-4c21-8388-39994980b48a  CONSISTENCY QUORUM;
```

**Explanation:**

*   This `SELECT` query requires a `QUORUM` of nodes to acknowledge the read operation before returning the data.

**Important Considerations for Consistency Levels:**

*   Choose the appropriate consistency level based on your application's requirements.  If data consistency is critical, use a higher consistency level. If performance is more important, use a lower consistency level.
*   Consider the replication factor of your keyspace when choosing a consistency level.

## 9. Practice Questions/Exercises

**Question 1:**

Write CQL statements to:

1.  Create a keyspace named `library`.
2.  Create a table named `books` in the `library` keyspace with the following columns:
    *   `book_id` (UUID, Primary Key)
    *   `title` (text)
    *   `author` (text)
    *   `publication_year` (int)
3.  Insert three books into the `books` table.
4.  Select all books published after the year 2000.
5.  Update the author of a specific book.
6.  Delete a book from the `books` table.

**Answer 1:**

```cql
-- 1. Create a keyspace
CREATE KEYSPACE IF NOT EXISTS library WITH REPLICATION = {
    'class' : 'SimpleStrategy',
    'replication_factor' : 1
};

-- 2. Create a table
USE library;

CREATE TABLE IF NOT EXISTS books (
    book_id UUID,
    title text,
    author text,
    publication_year int,
    PRIMARY KEY (book_id)
);

-- 3. Insert data
INSERT INTO books (book_id, title, author, publication_year)
VALUES (UUID(), 'The Lord of the Rings', 'J.R.R. Tolkien', 1954);

INSERT INTO books (book_id, title, author, publication_year)
VALUES (UUID(), 'Pride and Prejudice', 'Jane Austen', 1813);

INSERT INTO books (book_id, title, author, publication_year)
VALUES (UUID(), 'The Hitchhiker''s Guide to the Galaxy', 'Douglas Adams', 1979);

INSERT INTO books (book_id, title, author, publication_year)
VALUES (UUID(), 'The Da Vinci Code', 'Dan Brown', 2003);


-- 4. Select books published after 2000
SELECT * FROM books WHERE publication_year > 2000;

-- 5. Update the author of a book (replace book_id with a valid UUID)
UPDATE books SET author = 'New Author' WHERE book_id = 8c98f0e9-0c45-4a35-a454-6b6512e64ffb;

-- 6. Delete a book (replace book_id with a valid UUID)
DELETE FROM books WHERE book_id = 8c98f0e9-0c45-4a35-a454-6b6512e64ffb;
```

**Question 2:**

Explain the purpose of the partition key and clustering columns in a Cassandra table.  Give an example of a table schema and explain how the partition key and clustering columns would be used in queries.

**Answer 2:**

*   **Partition Key:**  Determines which node in the Cassandra cluster will store the data.  Rows with the same partition key are stored together on the same node.  This is crucial for efficient reads, especially when querying for data based on the partition key.
*   **Clustering Columns:**  Sorts the data within a partition. They determine the order in which data is stored on disk within a partition.  This allows for efficient range queries within a partition.

**Example Table Schema:**

```cql
CREATE TABLE IF NOT EXISTS website_events (
    user_id UUID,
    event_time timestamp,
    event_type text,
    page_url text,
    PRIMARY KEY ((user_id), event_time)
);
```

*   **Partition Key:** `user_id`
*   **Clustering Column:** `event_time`

**Explanation:**

1.  All events for a given `user_id` will be stored on the same node (partitioned by `user_id`).
2.  Within each user's partition, the events will be sorted by `event_time` (clustering column).

**Example Queries:**

*   `SELECT * FROM website_events WHERE user_id = a1b2c3d4-e5f6-7890-1234-567890abcdef;`  This query efficiently retrieves all events for a specific user because all events for that user are stored on the same node.

*   `SELECT * FROM website_events WHERE user_id = a1b2c3d4-e5f6-7890-1234-567890abcdef AND event_time > '2023-10-26 00:00:00+0000' AND event_time < '2023-10-27 00:00:00+0000';` This query retrieves events for a specific user within a specific time range. Because the data is clustered by `event_time`, Cassandra can efficiently scan the data within the user's partition to retrieve the events within the specified time range.

**Question 3:**

What are tombstones in Cassandra, and why are they important? What can be the impact of excessive tombstone creation?

**Answer 3:**

*   **Tombstones:** Tombstones are markers that Cassandra uses to indicate that data has been deleted. Instead of immediately removing data from disk, Cassandra creates a tombstone to mark the deleted data.

*   **Importance:** Tombstones are crucial for ensuring data consistency across the distributed Cassandra cluster. When a deletion occurs, the tombstone is propagated to other nodes in the cluster to indicate that the data should be considered deleted.

*   **Impact of Excessive Tombstone Creation:**

    *   **Performance Degradation:** Tombstones consume storage space and require additional processing during read operations. Cassandra has to check for and filter out tombstones during queries. An excessive number of tombstones can significantly slow down read performance.
    *   **Increased Compaction Overhead:**  Compaction processes are responsible for removing tombstones and merging data files.  Excessive tombstone creation can lead to more frequent and time-consuming compaction operations.
    *   **Increased Storage Usage:**  Tombstones themselves consume storage space.
    *   **Revival of Deleted Data (if not managed correctly):** If tombstones are not properly managed and cleaned up through compaction, there's a risk that deleted data could reappear if a node is unavailable during the deletion and then comes back online.

## 10. Important Points to Remember

*   **Data Modeling:**  Cassandra data modeling is query-driven.  Design your tables based on the queries you need to perform.  Think about how you will be accessing the data.
*   **Primary Key Design:**  The primary key is crucial for performance.  Carefully consider the partition key and clustering columns.
*   **Immutability:** Cassandra favors immutable data.  Avoid frequent updates to existing data. If possible, design your data model to accommodate new data without modifying existing data.
*   **Consistency Levels:** Choose the appropriate consistency level based on your application's requirements.
*   **Tombstone Management:** Be aware of tombstone creation and management.  Avoid excessive deletions and monitor tombstone statistics.
*   **Understanding Cassandra Architecture:**  Understanding the distributed nature of Cassandra is essential for effective data modeling and query optimization.
