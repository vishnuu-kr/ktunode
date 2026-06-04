---
title: "Cassandra - Data Model, Key Space, Table Operations, CRUD Operations"
subject: "ADVANCED DATABASE SYSTEMS"
module: "Module 3: XML and Non Relational Databases "
branch: "Computer Science and Engineering"
semester: 6
topicId: "684162770fc9aa1fdbc8bbe9"
status: "completed"
scrapedAt: "2026-05-20T16:50:27.673Z"
---
# ADVANCED DATABASE SYSTEMS: Module 3 - XML and Non-Relational Databases

## Topic: Cassandra - Data Model, Key Space, Table Operations, CRUD Operations

**Learning Outcomes:**

*   Understand the Cassandra data model and its key components.
*   Define and configure a keyspace in Cassandra.
*   Perform table operations, including creation, alteration, and deletion.
*   Execute CRUD operations (Create, Read, Update, Delete) in Cassandra using CQL (Cassandra Query Language).
*   Understand the implications of Cassandra's architecture on data modeling and query performance.

### 1. Cassandra Data Model

*   **Key Concept:** Cassandra is a distributed NoSQL database designed for high availability and scalability.  It uses a wide-column store data model, meaning that data is organized into rows and columns within a table, but each row can have a different set of columns.

*   **Components of the Cassandra Data Model:**

    *   **Keyspace:**
        *   The outermost container for your data.  Analogous to a database in a relational database system.
        *   Defines replication strategy (how data is distributed across the cluster) and consistency level.
        *   Example: `CREATE KEYSPACE mykeyspace WITH REPLICATION = { 'class' : 'SimpleStrategy', 'replication_factor' : 3 };`  (Creates a keyspace with a replication factor of 3).  `SimpleStrategy` is suitable for single data center.
    *   **Table:**
        *   A collection of related data organized in rows and columns within a keyspace.  Similar to a table in a relational database.
        *   Each table must have a primary key.
        *   Example: `CREATE TABLE mykeyspace.users (user_id UUID PRIMARY KEY, name text, email text, age int);`
    *   **Row:**
        *   A collection of columns with related data identified by a primary key.
        *   Think of it as a single record in a table.
    *   **Column:**
        *   A tuple consisting of a name, a value, and a timestamp.  The timestamp indicates when the value was written.
        *   Columns are dynamically defined, meaning each row doesn't have to have the same set of columns.
    *   **Primary Key:**
        *   Uniquely identifies each row in a table.
        *   Composed of two parts:
            *   **Partition Key:** Determines which node in the cluster the data is stored on. Rows with the same partition key are stored on the same node. Crucial for write and read performance.  Consider query patterns when designing this.
            *   **Clustering Columns:**  Used to sort the data within a partition.  Can be used for range queries within a partition.
        *   Example: `CREATE TABLE mykeyspace.orders (order_id UUID, user_id UUID, order_date timestamp, total_amount decimal, PRIMARY KEY ((user_id), order_date));`  Here, `user_id` is the partition key, and `order_date` is the clustering column.
    *   **Data Types:** Cassandra supports various data types, including:
        *   `ascii`, `bigint`, `blob`, `boolean`, `counter`, `date`, `decimal`, `double`, `float`, `inet`, `int`, `list`, `map`, `set`, `smallint`, `text`, `time`, `timestamp`, `timeuuid`, `tinyint`, `uuid`, `varchar`, `varint`.

*   **Important Points:**

    *   Cassandra is schema-optional but best practice is to define the schema.
    *   Denormalization is common in Cassandra to optimize read performance.  You often duplicate data to avoid joins.
    *   Data modeling in Cassandra is driven by query patterns. Think about how you will query the data *before* designing the table structure.

### 2. Key Space

*   **Definition:** A keyspace is a container for your data, analogous to a database in a relational database system.  It defines replication strategies and other cluster-wide settings.

*   **Creating a Keyspace:**

    ```cql
    CREATE KEYSPACE mykeyspace WITH REPLICATION = {
      'class' : 'SimpleStrategy',
      'replication_factor' : 3
    };

    CREATE KEYSPACE mykeyspace2 WITH REPLICATION = {
      'class' : 'NetworkTopologyStrategy',
      'dc1' : 3,
      'dc2' : 2
    };
    ```

    *   `SimpleStrategy`: Suitable for single data center deployments. The `replication_factor` determines how many copies of the data are stored.
    *   `NetworkTopologyStrategy`: Suitable for multi-data center deployments.  You specify the replication factor for each data center.

*   **Using a Keyspace:**

    ```cql
    USE mykeyspace;
    ```

*   **Altering a Keyspace:**

    ```cql
    ALTER KEYSPACE mykeyspace WITH REPLICATION = {
      'class' : 'SimpleStrategy',
      'replication_factor' : 5
    };
    ```

*   **Deleting a Keyspace:**  **WARNING:  This will delete ALL data within the keyspace!**

    ```cql
    DROP KEYSPACE mykeyspace;
    ```

*   **Important Points:**

    *   The `replication_factor` determines the fault tolerance of your cluster.  Higher replication factors provide better availability, but also require more storage space.
    *   Choose the appropriate replication strategy based on your deployment environment (single or multiple data centers).

### 3. Table Operations

*   **Creating a Table:**

    ```cql
    CREATE TABLE users (
      user_id UUID PRIMARY KEY,
      name text,
      email text,
      age int
    );

    CREATE TABLE posts (
      user_id UUID,
      post_id UUID,
      post_date timestamp,
      content text,
      PRIMARY KEY (user_id, post_date)
    ) WITH CLUSTERING ORDER BY (post_date DESC);
    ```

    *   `PRIMARY KEY`: Defines the primary key for the table.  As mentioned previously, it consists of a partition key and optionally, clustering columns.
    *   `WITH CLUSTERING ORDER BY`: Specifies the order in which data is sorted within a partition based on the specified clustering column(s). `DESC` for descending, `ASC` for ascending (default).

*   **Altering a Table:**

    ```cql
    ALTER TABLE users ADD address text;
    ALTER TABLE users DROP age;
    ALTER TABLE users ALTER name TYPE varchar; // changing data type. Be careful about data compatibility.
    ```

    *   `ADD`: Adds a new column to the table.
    *   `DROP`: Removes a column from the table.
    *   `ALTER`: Modifies the data type of a column.

*   **Deleting a Table:**

    ```cql
    DROP TABLE users;
    ```

*   **Truncating a Table:**  (Deletes all data, but keeps the table structure)

    ```cql
    TRUNCATE users;
    ```

*   **Important Points:**

    *   `ALTER TABLE` operations can be expensive, especially on large tables.
    *   Consider using Lightweight Transactions (LWTs) for conditional updates (e.g., `IF EXISTS`, `IF column = value`) to avoid race conditions.
    *   Table design is crucial for query performance.  Think about your queries *before* creating tables.

### 4. CRUD Operations

*   **Create (Insert):**

    ```cql
    INSERT INTO users (user_id, name, email, age, address) VALUES (UUID(), 'John Doe', 'john.doe@example.com', 30, '123 Main St');
    ```

*   **Read (Select):**

    ```cql
    SELECT * FROM users WHERE user_id = UUID('some-uuid-value');

    SELECT name, email FROM users WHERE age > 25 ALLOW FILTERING; // ALLOW FILTERING should be avoided on large tables due to performance issues!  This is a sign of bad data modeling.
    ```

    *   Cassandra is optimized for querying by partition key.
    *   `ALLOW FILTERING` should be avoided unless absolutely necessary. It can lead to full table scans and poor performance. It ignores the partition key.

*   **Update:**

    ```cql
    UPDATE users SET email = 'john.new.email@example.com', age = 31 WHERE user_id = UUID('some-uuid-value');
    ```

*   **Delete:**

    ```cql
    DELETE FROM users WHERE user_id = UUID('some-uuid-value');

    DELETE email FROM users WHERE user_id = UUID('some-uuid-value'); // Deleting a specific column
    ```

*   **Important Points:**

    *   Cassandra performs eventual consistency. Data may not be immediately consistent across all nodes. You can configure consistency levels for read and write operations.
    *   `ConsistencyLevel` controls how many replicas must acknowledge a read or write operation before it is considered successful.
    *   Use `WHERE` clauses effectively to target specific rows based on the primary key.
    *   Avoid using `ALLOW FILTERING` if possible. Re-design your data model instead.

### 5. Practice Questions/Exercises:

1.  **Question:** Explain the difference between the partition key and clustering columns in Cassandra.  Why are they important?
    *   **Answer:**  The *partition key* determines which node in the cluster the data is stored on.  Rows with the same partition key are stored on the same node.  The *clustering columns* are used to sort the data within a partition. They are important because they influence data distribution, query performance, and the ability to perform range queries within a partition. Poor choice of primary key will likely lead to hot spots in the cluster.

2.  **Question:**  You need to store user profile data (user_id, name, email, city, country).  You want to be able to query users by country efficiently.  How would you design the table and keyspace in Cassandra? Include the CQL statements.
    *   **Answer:**

    ```cql
    CREATE KEYSPACE myprofiles WITH REPLICATION = {
        'class' : 'SimpleStrategy',
        'replication_factor' : 3
    };

    USE myprofiles;

    CREATE TABLE users_by_country (
        country text,
        user_id UUID,
        name text,
        email text,
        city text,
        PRIMARY KEY (country, user_id)
    );
    ```

    In this design, `country` is the partition key, so all users from the same country will be stored on the same node.  `user_id` is the clustering column.  This allows you to efficiently query users by country:

    ```cql
    SELECT * FROM users_by_country WHERE country = 'USA';
    ```

3.  **Question:**  What is the potential problem with using `ALLOW FILTERING` in a `SELECT` statement?  How can you avoid it?
    *   **Answer:** `ALLOW FILTERING` can lead to full table scans, which are inefficient and can severely impact query performance on large tables. You can avoid it by designing your data model around your query patterns. This often involves denormalization and creating tables that are specifically optimized for the queries you need to perform. Revisit the choice of partition key if `ALLOW FILTERING` is needed.

4.  **Question:** You have a table defined as: `CREATE TABLE events (event_id UUID PRIMARY KEY, event_name text, event_date timestamp);`. You want to query events by `event_date`.  Will this table design be efficient?  If not, how would you improve it?
    *   **Answer:** This table design is not efficient for querying events by `event_date`. The `event_id` is the only part of the primary key, so you can only efficiently query by `event_id`. To improve it, you should include `event_date` as a part of the primary key. A good approach is to make `event_date` a clustering column:

    ```cql
    CREATE TABLE events_by_date (
        event_date timestamp,
        event_id UUID,
        event_name text,
        PRIMARY KEY (event_date, event_id)
    ) WITH CLUSTERING ORDER BY (event_id ASC); // or DESC, depending on needs
    ```

    Now, you can efficiently query events by date: `SELECT * FROM events_by_date WHERE event_date = '2023-10-27';`

5. **Question:** Explain how you would update a record in cassandra. Please use an example CQL query.
    * **Answer:** To update a record in Cassandra, you use the UPDATE statement. This statement allows you to modify the values of columns in a row, identified by its primary key.

    For example, using the users table from the previous examples, the following query will update the email of a user with a specified user_id:

    ```cql
    UPDATE users SET email = 'newemail@example.com' WHERE user_id = UUID('550e8400-e29b-41d4-a716-446655440000');
    ```

### 6. Key Takeaways and Points to Remember:

*   **Data modeling is critical in Cassandra.** It should be driven by the expected query patterns.  Denormalization is common.
*   **Understanding the difference between the partition key and clustering columns is essential.**
*   **Avoid using `ALLOW FILTERING` whenever possible.**  It indicates a potential problem with your data model.
*   **Cassandra provides eventual consistency.**  Choose the appropriate consistency level for your application.
*   **Consider the implications of Cassandra's distributed architecture on performance and data consistency.**
*   **Cassandra is designed for high availability and scalability but requires careful planning and configuration.**
