---
title: "SQL"
subject: "WEB PROGRAMMING"
module: "Module 4: SPA – Basics"
branch: "Computer Science and Engineering"
semester: 7
topicId: "684162780fc9aa1fdbc8c0ed"
status: "completed"
scrapedAt: "2026-05-20T17:13:19.697Z"
---
# WEB PROGRAMMING - Module 4: SPA – Basics - SQL

## Introduction to SQL (Structured Query Language)

SQL is the standard language for managing and manipulating relational databases. It's used to communicate with a database, retrieve data, insert new data, update existing data, and delete data. In the context of Single Page Applications (SPAs), SQL is often used to interact with the backend database, which stores the application's data.

---

### **Learning Outcome 1: Understand the fundamental purpose of SQL in web programming and its role in data management.**

**Key Concepts:**

*   **Relational Database:** A type of database that stores data in tables (relations). Each table consists of rows (records or tuples) and columns (attributes or fields). Relationships between tables are established using primary and foreign keys.
*   **Database Management System (DBMS):** Software that allows users to create, maintain, and control access to databases. Examples include MySQL, PostgreSQL, SQLite, SQL Server, Oracle.
*   **SQL's Role in Web Programming:**
    *   **Data Storage:** SPAs often require persistent storage for user data, application state, configuration settings, etc. Relational databases powered by SQL are a common choice for this.
    *   **Data Retrieval:** When a user interacts with an SPA, the frontend often needs to fetch data from the backend. SQL queries are used to retrieve this specific data.
    *   **Data Manipulation:** User actions in an SPA might lead to creating new data, updating existing records, or deleting data from the database. SQL commands handle these operations.
    *   **Backend Communication:** The backend of an SPA (e.g., built with Node.js, Python/Django, Ruby on Rails) uses SQL to interact with the database. The frontend might communicate with the backend via APIs, which in turn execute SQL queries.

**Example:**

Imagine a blog SPA. The backend would likely use SQL to store blog posts, comments, and user information in different tables. When a user requests to view a blog post, the backend would execute an SQL query to retrieve the post's content, title, and author from the `posts` table.

---

### **Learning Outcome 2: Identify and explain the common SQL data types and their usage.**

**Key Concepts:**

SQL defines various data types to specify the kind of data that can be stored in a column. The exact names and availability might vary slightly between different DBMS, but the core concepts are consistent.

**Common SQL Data Types:**

*   **Numeric Types:**
    *   `INT` or `INTEGER`: Stores whole numbers (e.g., 10, -5, 0).
    *   `DECIMAL(p, s)` or `NUMERIC(p, s)`: Stores exact decimal values. `p` is the precision (total number of digits) and `s` is the scale (number of digits after the decimal point). (e.g., `DECIMAL(10, 2)` for currency).
    *   `FLOAT` or `REAL`: Stores approximate floating-point numbers.
    *   `DOUBLE PRECISION`: Stores approximate floating-point numbers with higher precision than `FLOAT`.

*   **String Types:**
    *   `VARCHAR(n)`: Stores variable-length character strings, up to a maximum of `n` characters. (e.g., `VARCHAR(255)` for names, emails).
    *   `CHAR(n)`: Stores fixed-length character strings, padded with spaces if the string is shorter than `n`.
    *   `TEXT`: Stores long strings of text, often without a fixed maximum length or with a very large one.

*   **Date and Time Types:**
    *   `DATE`: Stores a date (year, month, day).
    *   `TIME`: Stores a time (hour, minute, second).
    *   `DATETIME` or `TIMESTAMP`: Stores a date and time combined. `TIMESTAMP` often includes timezone information and may automatically update on record modification.

*   **Boolean Type:**
    *   `BOOLEAN` or `BOOL`: Stores true or false values.

*   **Other Types:**
    *   `BLOB`: Binary Large Object, for storing binary data like images or files.
    *   `NULL`: Represents a missing or unknown value.

**Important Points:**

*   Choosing the correct data type is crucial for data integrity, performance, and storage efficiency.
*   `VARCHAR` is generally preferred over `CHAR` for strings that vary in length to save space.
*   Use `DECIMAL` for financial calculations to avoid rounding errors.

**Example:**

When creating a `users` table, you might define columns like:

*   `user_id` INT PRIMARY KEY
*   `username` VARCHAR(50) NOT NULL
*   `email` VARCHAR(100) UNIQUE
*   `registration_date` DATE
*   `is_active` BOOLEAN

---

### **Learning Outcome 3: Explain the core SQL commands: CREATE, INSERT, SELECT, UPDATE, and DELETE.**

**Key Concepts:**

These are the fundamental Data Manipulation Language (DML) and Data Definition Language (DDL) commands in SQL.

**1. CREATE (DDL)**

*   **Purpose:** To create new database objects, most commonly tables.
*   **Syntax:**
    ```sql
    CREATE TABLE table_name (
        column1 datatype constraints,
        column2 datatype constraints,
        column3 datatype constraints,
        ...
    );
    ```
*   **`constraints`** can include:
    *   `PRIMARY KEY`: Uniquely identifies each row in a table.
    *   `FOREIGN KEY`: Links a column to the primary key of another table, establishing a relationship.
    *   `NOT NULL`: Ensures that a column cannot have a NULL value.
    *   `UNIQUE`: Ensures that all values in a column are unique.
    *   `DEFAULT value`: Sets a default value for a column if no value is specified.

**Example:** Creating a `products` table.

```sql
CREATE TABLE products (
    product_id INT PRIMARY KEY AUTO_INCREMENT, -- AUTO_INCREMENT is often used for primary keys to automatically generate unique IDs
    product_name VARCHAR(100) NOT NULL,
    price DECIMAL(10, 2) NOT NULL,
    stock_quantity INT DEFAULT 0
);
```

**2. INSERT (DML)**

*   **Purpose:** To add new records (rows) into a table.
*   **Syntax:**
    ```sql
    -- Inserting values for all columns (order matters)
    INSERT INTO table_name (column1, column2, column3, ...)
    VALUES (value1, value2, value3, ...);

    -- Inserting values for specific columns (order matters)
    INSERT INTO table_name (column1, column3)
    VALUES (value1, value3);

    -- Inserting multiple rows at once
    INSERT INTO table_name (column1, column2)
    VALUES
        (value1a, value2a),
        (value1b, value2b);
    ```

**Example:** Inserting data into the `products` table.

```sql
INSERT INTO products (product_name, price, stock_quantity)
VALUES ('Laptop', 1200.50, 50);

INSERT INTO products (product_name, price)
VALUES ('Keyboard', 75.00); -- stock_quantity will use the default value of 0
```

**3. SELECT (DML)**

*   **Purpose:** To retrieve data from one or more tables. This is the most frequently used SQL command.
*   **Syntax:**
    ```sql
    SELECT column1, column2, ...
    FROM table_name
    WHERE condition; -- Optional: Filters rows based on a condition
    ```
*   **`SELECT *`**: Selects all columns from the table.
*   **`WHERE` clause:** Used to specify criteria for selecting rows. Operators like `=`, `!=`, `>`, `<`, `>=`, `<=`, `LIKE`, `IN`, `BETWEEN`, `AND`, `OR`, `NOT` are used.

**Example:** Retrieving data from the `products` table.

```sql
-- Select all products
SELECT * FROM products;

-- Select product name and price for products with price > 100
SELECT product_name, price
FROM products
WHERE price > 100;

-- Select products whose names start with 'L'
SELECT product_name
FROM products
WHERE product_name LIKE 'L%';
```

**4. UPDATE (DML)**

*   **Purpose:** To modify existing records in a table.
*   **Syntax:**
    ```sql
    UPDATE table_name
    SET column1 = new_value1, column2 = new_value2, ...
    WHERE condition; -- IMPORTANT: Without a WHERE clause, ALL rows will be updated!
    ```

**Example:** Updating product information.

```sql
-- Update the price of the 'Laptop'
UPDATE products
SET price = 1150.00
WHERE product_name = 'Laptop';

-- Increase the stock quantity of 'Keyboard' by 10
UPDATE products
SET stock_quantity = stock_quantity + 10
WHERE product_name = 'Keyboard';
```

**5. DELETE (DML)**

*   **Purpose:** To remove existing records from a table.
*   **Syntax:**
    ```sql
    DELETE FROM table_name
    WHERE condition; -- IMPORTANT: Without a WHERE clause, ALL rows will be deleted!
    ```

**Example:** Deleting a product.

```sql
-- Delete the product named 'Keyboard'
DELETE FROM products
WHERE product_name = 'Keyboard';
```

---

### **Learning Outcome 4: Understand the concept of tables, columns, rows, and primary keys in a relational database context.**

**Key Concepts:**

This reinforces the foundational structure of relational databases.

*   **Table (Relation):** A collection of related data organized in rows and columns. It represents a specific entity or concept (e.g., `users`, `products`, `orders`).
    *   **Analogy:** A spreadsheet.

*   **Column (Attribute/Field):** Represents a specific characteristic or property of the entity. Each column has a name and a data type.
    *   **Analogy:** A column header in a spreadsheet.

*   **Row (Record/Tuple):** Represents a single instance or entry of the entity. It contains a set of values for each column.
    *   **Analogy:** A single row in a spreadsheet.

*   **Primary Key:**
    *   **Definition:** One or more columns that uniquely identify each row in a table.
    *   **Characteristics:**
        *   **Uniqueness:** Each value in the primary key column(s) must be unique.
        *   **Non-nullability:** The primary key column(s) cannot contain NULL values.
    *   **Purpose:**
        *   **Unique Identification:** Allows us to refer to a specific record unambiguously.
        *   **Data Integrity:** Prevents duplicate records.
        *   **Relationships:** Used as the target for foreign keys in other tables.
    *   **Types:**
        *   **Single-column primary key:** Consists of just one column.
        *   **Composite primary key:** Consists of two or more columns, where the combination of values uniquely identifies a row.
    *   **Example:** In a `users` table, `user_id` would typically be the primary key. In an `order_items` table, a composite primary key might be `(order_id, product_id)` if each product can only appear once in a specific order.

**Example Scenario:**

Consider a `customers` table:

| `customer_id` (PK) | `first_name` | `last_name` | `email`             | `city`    |
| :----------------- | :----------- | :---------- | :------------------ | :-------- |
| 1                  | John         | Doe         | john.doe@example.com| New York  |
| 2                  | Jane         | Smith       | jane.s@example.com  | London    |
| 3                  | Peter        | Jones       | p.jones@example.com | New York  |

*   **Table:** `customers`
*   **Columns:** `customer_id`, `first_name`, `last_name`, `email`, `city`
*   **Rows:** Three rows, each representing a customer.
*   **Primary Key:** `customer_id` (uniquely identifies each customer).

---

### **Learning Outcome 5: Write basic SQL queries to perform common data operations like filtering, sorting, and joining (introduction).**

**Key Concepts:**

Expanding on the `SELECT` statement with clauses for more sophisticated data retrieval.

**1. Filtering with `WHERE` (already covered, but reinforcing)**

*   **Purpose:** To select rows that meet specific criteria.
*   **Operators:** `=`, `!=`, `>`, `<`, `>=`, `<=`, `LIKE` (pattern matching), `IN` (checks if a value is in a list), `BETWEEN` (checks if a value is within a range).
*   **Logical Operators:** `AND`, `OR`, `NOT` to combine multiple conditions.

**Example:**

```sql
-- Find customers from 'New York' or 'London'
SELECT *
FROM customers
WHERE city IN ('New York', 'London');

-- Find customers with names starting with 'J' and living in 'New York'
SELECT *
FROM customers
WHERE first_name LIKE 'J%' AND city = 'New York';
```

**2. Sorting with `ORDER BY`**

*   **Purpose:** To sort the result set in ascending (`ASC`) or descending (`DESC`) order based on one or more columns.
*   **Syntax:**
    ```sql
    SELECT column1, column2, ...
    FROM table_name
    WHERE condition
    ORDER BY column_to_sort_by [ASC | DESC], another_column [ASC | DESC];
    ```
*   `ASC` is the default if not specified.

**Example:**

```sql
-- Select all products, sorted by price in descending order
SELECT product_name, price
FROM products
ORDER BY price DESC;

-- Select customers, sorted by last name, then by first name (both ascending)
SELECT first_name, last_name
FROM customers
ORDER BY last_name ASC, first_name ASC;
```

**3. Joining Tables (Introduction to `JOIN`)**

*   **Purpose:** To combine rows from two or more tables based on a related column between them. This is crucial for retrieving data that spans across multiple entities.
*   **Most Common Type: `INNER JOIN`**
    *   **Purpose:** Returns only the rows where there is a match in both tables.
    *   **Syntax:**
        ```sql
        SELECT columns
        FROM table1
        INNER JOIN table2
        ON table1.column_name = table2.column_name;
        ```
    *   The `ON` clause specifies the condition for joining. Typically, this is a match between a primary key in one table and a foreign key in another.

**Example Scenario:**

Let's imagine an `orders` table and a `customers` table, where `orders.customer_id` is a foreign key referencing `customers.customer_id`.

**`customers` table:**

| `customer_id` (PK) | `first_name` | `last_name` |
| :----------------- | :----------- | :---------- |
| 1                  | John         | Doe         |
| 2                  | Jane         | Smith       |

**`orders` table:**

| `order_id` (PK) | `customer_id` (FK) | `order_date` |
| :-------------- | :----------------- | :----------- |
| 101             | 1                  | 2023-10-26   |
| 102             | 1                  | 2023-10-27   |
| 103             | 2                  | 2023-10-26   |

**Query to get customer names and their order dates:**

```sql
SELECT
    c.first_name,
    c.last_name,
    o.order_date
FROM
    customers AS c  -- 'c' is an alias for the customers table
INNER JOIN
    orders AS o     -- 'o' is an alias for the orders table
ON
    c.customer_id = o.customer_id;
```

**Result:**

| `first_name` | `last_name` | `order_date` |
| :----------- | :---------- | :----------- |
| John         | Doe         | 2023-10-26   |
| John         | Doe         | 2023-10-27   |
| Jane         | Smith       | 2023-10-26   |

---

### **Important Points to Remember**

*   **Case Insensitivity (for keywords):** SQL keywords (like `SELECT`, `FROM`, `WHERE`) are generally case-insensitive, but it's good practice to use uppercase for clarity. Table and column names might be case-sensitive depending on the database system and its configuration.
*   **Statements End with a Semicolon (;):** While not always strictly required by all systems, it's a best practice to terminate SQL statements with a semicolon.
*   **The `WHERE` Clause is Crucial:** Always be mindful of the `WHERE` clause when performing `UPDATE` and `DELETE` operations. Forgetting it can lead to unintended data loss or modification.
*   **Data Types Matter:** Select appropriate data types for your columns to ensure data integrity and efficient storage.
*   **Aliases (AS):** Use aliases for table and column names to make your queries shorter, more readable, and to avoid ambiguity, especially when joining tables.
*   **SQL Injection:** In web programming, be aware of SQL injection vulnerabilities. Never directly embed user input into SQL queries. Use parameterized queries or prepared statements provided by your backend programming language's database driver.

---

### **Practice Questions/Exercises**

Let's assume you have the following two tables:

**`users` Table:**

| `user_id` (PK) | `username` | `email`                 | `join_date` |
| :------------- | :--------- | :---------------------- | :---------- |
| 1              | alice      | alice@example.com       | 2023-01-15  |
| 2              | bob        | bob@example.com         | 2023-03-20  |
| 3              | charlie    | charlie@example.com     | 2023-01-15  |
| 4              | david      | david@another.com       | 2023-07-01  |

**`posts` Table:**

| `post_id` (PK) | `user_id` (FK) | `title`            | `content`           | `post_date` |
| :------------- | :------------- | :----------------- | :------------------ | :---------- |
| 101            | 1              | My First Post      | Content of post 1   | 2023-01-20  |
| 102            | 2              | Another Article    | Content of post 2   | 2023-03-25  |
| 103            | 1              | Tech Talk          | Content of post 3   | 2023-02-10  |
| 104            | 3              | Thoughts on SPA    | Content of post 4   | 2023-02-15  |

---

**Questions:**

1.  **CREATE TABLE:** Write a SQL statement to create the `users` table with the following columns:
    *   `user_id` (INT, Primary Key, Auto-increment)
    *   `username` (VARCHAR(50), NOT NULL, UNIQUE)
    *   `email` (VARCHAR(100), NOT NULL)
    *   `join_date` (DATE)

2.  **INSERT:** Write SQL statements to insert the following two users into the `users` table:
    *   User: username='eve', email='eve@example.com', join_date='2023-09-01'
    *   User: username='frank', email='frank@test.com', join_date='2023-10-01'

3.  **SELECT:** Write a SQL query to retrieve the `username` and `email` of all users who joined in January 2023.

4.  **SELECT (Sorting):** Write a SQL query to retrieve all posts, ordered by `post_date` in descending order.

5.  **UPDATE:** Write a SQL query to change the email of the user with `username` 'bob' to 'bob.updated@example.com'.

6.  **DELETE:** Write a SQL query to delete the post with `post_id` 102.

7.  **JOIN:** Write a SQL query to retrieve the `username` and the `title` of all posts.

8.  **JOIN with WHERE:** Write a SQL query to retrieve the `username` and the `title` of all posts written by users whose username starts with 'a'.

---

**Answers:**

1.  ```sql
    CREATE TABLE users (
        user_id INT PRIMARY KEY AUTO_INCREMENT,
        username VARCHAR(50) NOT NULL UNIQUE,
        email VARCHAR(100) NOT NULL,
        join_date DATE
    );
    ```

2.  ```sql
    INSERT INTO users (username, email, join_date)
    VALUES ('eve', 'eve@example.com', '2023-09-01');

    INSERT INTO users (username, email, join_date)
    VALUES ('frank', 'frank@test.com', '2023-10-01');
    ```

3.  ```sql
    SELECT username, email
    FROM users
    WHERE join_date BETWEEN '2023-01-01' AND '2023-01-31';
    -- Alternatively, using string functions if the DB supports them well:
    -- WHERE SUBSTRING(join_date, 1, 7) = '2023-01';
    ```

4.  ```sql
    SELECT *
    FROM posts
    ORDER BY post_date DESC;
    ```

5.  ```sql
    UPDATE users
    SET email = 'bob.updated@example.com'
    WHERE username = 'bob';
    ```

6.  ```sql
    DELETE FROM posts
    WHERE post_id = 102;
    ```

7.  ```sql
    SELECT
        u.username,
        p.title
    FROM
        users AS u
    INNER JOIN
        posts AS p
    ON
        u.user_id = p.user_id;
    ```

8.  ```sql
    SELECT
        u.username,
        p.title
    FROM
        users AS u
    INNER JOIN
        posts AS p
    ON
        u.user_id = p.user_id
    WHERE
        u.username LIKE 'a%';
    ```

---

This concludes the study notes for SQL basics in Module 4. Remember to practice these commands and concepts to solidify your understanding.
