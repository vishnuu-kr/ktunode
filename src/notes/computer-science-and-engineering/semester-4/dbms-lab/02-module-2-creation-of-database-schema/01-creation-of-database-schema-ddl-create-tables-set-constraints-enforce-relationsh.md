---
title: "Creation of database schema - DDL (create tables, set constraints, enforce relationships, create indices, delete and modify tables)."
subject: "DBMS LAB"
module: "Module 2: Creation of database schema "
branch: "Computer Science and Engineering"
semester: 4
topicId: "684162760fc9aa1fdbc8b4e1"
status: "completed"
scrapedAt: "2026-05-20T16:12:06.947Z"
---
# DBMS Lab: Module 2 - Creation of Database Schema (DDL)

## Introduction

This module focuses on creating database schemas using Data Definition Language (DDL). We'll cover defining tables, setting constraints, enforcing relationships between tables, creating indices for efficient data retrieval, and modifying or deleting existing tables.

## Learning Outcomes

Upon completion of this module, you will be able to:

*   Create tables with appropriate data types and attributes.
*   Implement various constraints to enforce data integrity.
*   Establish relationships between tables using foreign keys.
*   Create indices to optimize query performance.
*   Modify and delete tables using DDL commands.

## 1. Key Concepts and Definitions

*   **Data Definition Language (DDL):** A set of SQL commands used to define the database schema, including creating, altering, and deleting database objects like tables, views, and indices.

*   **Schema:** The overall structure of a database, including the tables, attributes, relationships, and constraints.

*   **Table:** A collection of related data organized in rows and columns.  Each column represents an attribute, and each row represents a record or tuple.

*   **Attribute (Column):** A characteristic or property of an entity (represented by a column in a table).

*   **Data Type:** Specifies the type of data that can be stored in an attribute (e.g., INTEGER, VARCHAR, DATE).

*   **Constraint:** A rule that enforces data integrity and consistency in a database. Examples include primary key constraints, foreign key constraints, and check constraints.

*   **Primary Key:** A unique identifier for each record in a table. It cannot be NULL and must be unique.

*   **Foreign Key:** An attribute (or set of attributes) in one table that references the primary key of another table. It establishes a relationship between the two tables.

*   **Index:** A data structure that improves the speed of data retrieval operations on a table. It's like an index in a book, allowing you to quickly locate specific information.

## 2. Creating Tables (CREATE TABLE)

The `CREATE TABLE` statement is used to define a new table in the database.

**Syntax:**

```sql
CREATE TABLE table_name (
    column1 datatype constraint,
    column2 datatype constraint,
    ...
    columnN datatype constraint,
    [CONSTRAINT constraint_name constraint_type (column(s))]
);
```

**Explanation:**

*   `table_name`: The name of the table you want to create.
*   `column1, column2, ...`: The names of the columns in the table.
*   `datatype`: The data type of the column (e.g., `INT`, `VARCHAR`, `DATE`).
*   `constraint`: Constraints applied to the column (e.g., `PRIMARY KEY`, `NOT NULL`, `UNIQUE`).
*   `CONSTRAINT constraint_name constraint_type (column(s))`: Defines named constraints. Using named constraints helps in altering or deleting them later.

**Common Data Types:**

*   `INT` (or `INTEGER`): Integer numbers.
*   `VARCHAR(size)`: Variable-length character strings (up to `size` characters).
*   `CHAR(size)`: Fixed-length character strings.
*   `DATE`: Dates (YYYY-MM-DD).
*   `DATETIME`: Date and time.
*   `DECIMAL(precision, scale)`: Decimal numbers with a specified precision and scale.
*   `BOOLEAN`: True or False values.

**Example:**

```sql
CREATE TABLE Employees (
    EmployeeID INT PRIMARY KEY,
    FirstName VARCHAR(50) NOT NULL,
    LastName VARCHAR(50) NOT NULL,
    HireDate DATE,
    Salary DECIMAL(10, 2)
);
```

## 3. Setting Constraints

Constraints are rules that enforce data integrity.

**Types of Constraints:**

*   **`NOT NULL`:** Ensures that a column cannot contain a NULL value.

*   **`UNIQUE`:** Ensures that all values in a column are unique.

*   **`PRIMARY KEY`:** Uniquely identifies each record in a table. It must be `UNIQUE` and `NOT NULL`.  A table can have only one primary key.

*   **`FOREIGN KEY`:** Establishes a link between tables.  It references the primary key of another table.

*   **`CHECK`:** Enforces a specific condition on the values that can be stored in a column.

*   **`DEFAULT`:** Specifies a default value for a column if no value is provided during insertion.

**Examples:**

*   **`NOT NULL`:**

```sql
CREATE TABLE Products (
    ProductID INT PRIMARY KEY,
    ProductName VARCHAR(100) NOT NULL
);
```

*   **`UNIQUE`:**

```sql
CREATE TABLE Customers (
    CustomerID INT PRIMARY KEY,
    Email VARCHAR(100) UNIQUE
);
```

*   **`PRIMARY KEY`:** (See example under Creating Tables above)

*   **`FOREIGN KEY`:**

```sql
CREATE TABLE Orders (
    OrderID INT PRIMARY KEY,
    CustomerID INT,
    OrderDate DATE,
    FOREIGN KEY (CustomerID) REFERENCES Customers(CustomerID)
);
```

*   **`CHECK`:**

```sql
CREATE TABLE Employees (
    EmployeeID INT PRIMARY KEY,
    Salary DECIMAL(10, 2) CHECK (Salary > 0)
);
```

*   **`DEFAULT`:**

```sql
CREATE TABLE Products (
    ProductID INT PRIMARY KEY,
    Price DECIMAL(10, 2) DEFAULT 0.00
);
```

**Important Points:**

*   Constraints can be defined at the column level (within the column definition) or at the table level (using the `CONSTRAINT` keyword).
*   Named constraints are useful for managing and modifying constraints later on.
*   Choose appropriate data types and sizes for your columns to optimize storage and performance.

## 4. Enforcing Relationships (Foreign Keys)

Foreign keys are used to establish relationships between tables.  They enforce referential integrity, ensuring that related data remains consistent.

**Example:**

Let's say we have two tables: `Customers` and `Orders`.  Each order belongs to a specific customer.  We can use a foreign key in the `Orders` table to reference the `Customers` table.

```sql
CREATE TABLE Customers (
    CustomerID INT PRIMARY KEY,
    FirstName VARCHAR(50),
    LastName VARCHAR(50)
);

CREATE TABLE Orders (
    OrderID INT PRIMARY KEY,
    CustomerID INT,
    OrderDate DATE,
    FOREIGN KEY (CustomerID) REFERENCES Customers(CustomerID)
);
```

In this example, the `CustomerID` column in the `Orders` table is a foreign key that references the `CustomerID` column in the `Customers` table.  This ensures that:

*   You cannot insert an order with a `CustomerID` that does not exist in the `Customers` table.
*   If a customer is deleted from the `Customers` table, the database will either prevent the deletion (if there are associated orders in the `Orders` table) or cascade the deletion (if the `ON DELETE CASCADE` option is used).  Similar behavior applies to updates.

**Foreign Key Options:**

*   **`ON DELETE CASCADE`:** If a row in the parent table (the table referenced by the foreign key) is deleted, all corresponding rows in the child table (the table containing the foreign key) are also deleted.

*   **`ON UPDATE CASCADE`:** If the primary key value in the parent table is updated, the corresponding foreign key values in the child table are also updated.

*   **`ON DELETE SET NULL`:** If a row in the parent table is deleted, the corresponding foreign key values in the child table are set to NULL.  The foreign key column must allow NULL values for this to work.

*   **`ON UPDATE SET NULL`:** If the primary key value in the parent table is updated, the corresponding foreign key values in the child table are set to NULL. The foreign key column must allow NULL values for this to work.

*   **`ON DELETE NO ACTION` (or `ON DELETE RESTRICT`)**: This is often the default behavior.  If a row in the parent table is deleted, and there are corresponding rows in the child table, the deletion is prevented.

**Example using `ON DELETE CASCADE`:**

```sql
CREATE TABLE Orders (
    OrderID INT PRIMARY KEY,
    CustomerID INT,
    OrderDate DATE,
    FOREIGN KEY (CustomerID) REFERENCES Customers(CustomerID) ON DELETE CASCADE
);
```

In this case, if a customer is deleted from the `Customers` table, all of their orders in the `Orders` table will also be automatically deleted.

## 5. Creating Indices (CREATE INDEX)

Indices are used to speed up data retrieval.  They create a separate data structure that allows the database to quickly locate rows that match a specific condition in a `WHERE` clause.

**Syntax:**

```sql
CREATE INDEX index_name
ON table_name (column1, column2, ...);
```

**Explanation:**

*   `index_name`: The name of the index.
*   `table_name`: The name of the table for which you want to create the index.
*   `column1, column2, ...`: The columns that you want to include in the index.

**Example:**

```sql
CREATE INDEX idx_LastName
ON Employees (LastName);
```

This creates an index named `idx_LastName` on the `LastName` column of the `Employees` table.  When you execute a query that filters by `LastName`, the database can use this index to quickly find the matching rows.

**Considerations:**

*   Indices improve read performance but can slow down write performance (inserts, updates, and deletes), as the index needs to be updated whenever the data in the table changes.
*   Create indices on columns that are frequently used in `WHERE` clauses, `JOIN` conditions, and `ORDER BY` clauses.
*   Avoid creating too many indices, as they can consume significant storage space and degrade write performance.
*   Unique indices enforce uniqueness on the indexed column(s).  You can create a unique index using the `UNIQUE` keyword:  `CREATE UNIQUE INDEX index_name ON table_name (column1, column2, ...);`

## 6. Modifying Tables (ALTER TABLE)

The `ALTER TABLE` statement is used to modify the structure of an existing table.

**Common Uses:**

*   **Adding a new column:**

```sql
ALTER TABLE Employees
ADD COLUMN Department VARCHAR(50);
```

*   **Deleting a column:**

```sql
ALTER TABLE Employees
DROP COLUMN Department;
```

*   **Modifying a column's data type:**

```sql
ALTER TABLE Employees
ALTER COLUMN Salary DECIMAL(12, 2); -- Syntax might vary depending on the DBMS
```

*   **Adding a constraint:**

```sql
ALTER TABLE Orders
ADD CONSTRAINT FK_CustomerID FOREIGN KEY (CustomerID) REFERENCES Customers(CustomerID);
```

*   **Dropping a constraint:**

```sql
ALTER TABLE Orders
DROP CONSTRAINT FK_CustomerID;
```

**Important Notes:**

*   The specific syntax for `ALTER TABLE` operations may vary slightly depending on the DBMS you are using (e.g., MySQL, PostgreSQL, SQL Server).
*   Modifying a table can be a time-consuming operation, especially for large tables.
*   Be careful when dropping columns or constraints, as this can potentially lead to data loss or broken relationships.

## 7. Deleting Tables (DROP TABLE)

The `DROP TABLE` statement is used to delete an existing table.

**Syntax:**

```sql
DROP TABLE table_name;
```

**Example:**

```sql
DROP TABLE Employees;
```

**Important Notes:**

*   Deleting a table permanently removes the table and all of its data.
*   Be very careful when using `DROP TABLE`, as this operation cannot be easily undone.
*   You may need to drop any foreign key constraints referencing the table before you can drop the table itself.
*   Ensure you have proper backups before deleting any table.

## 8. Practice Questions/Exercises

**Question 1:**

Create a database schema for a library system with the following tables:

*   `Books`: Stores information about books (BookID, Title, Author, ISBN, PublicationYear).
*   `Members`: Stores information about library members (MemberID, FirstName, LastName, Address, Phone).
*   `Loans`: Stores information about book loans (LoanID, BookID, MemberID, LoanDate, ReturnDate).

Implement appropriate constraints, including primary keys, foreign keys, and `NOT NULL` constraints.

**Answer:**

```sql
CREATE TABLE Books (
    BookID INT PRIMARY KEY,
    Title VARCHAR(255) NOT NULL,
    Author VARCHAR(255) NOT NULL,
    ISBN VARCHAR(20) UNIQUE NOT NULL,
    PublicationYear INT
);

CREATE TABLE Members (
    MemberID INT PRIMARY KEY,
    FirstName VARCHAR(255) NOT NULL,
    LastName VARCHAR(255) NOT NULL,
    Address VARCHAR(255),
    Phone VARCHAR(20)
);

CREATE TABLE Loans (
    LoanID INT PRIMARY KEY,
    BookID INT NOT NULL,
    MemberID INT NOT NULL,
    LoanDate DATE NOT NULL,
    ReturnDate DATE,
    FOREIGN KEY (BookID) REFERENCES Books(BookID),
    FOREIGN KEY (MemberID) REFERENCES Members(MemberID)
);
```

**Question 2:**

Add a `Genre` column to the `Books` table.

**Answer:**

```sql
ALTER TABLE Books
ADD COLUMN Genre VARCHAR(50);
```

**Question 3:**

Create an index on the `LastName` column of the `Members` table.

**Answer:**

```sql
CREATE INDEX idx_MemberLastName
ON Members (LastName);
```

**Question 4:**

Remove the `Phone` column from the `Members` table.

**Answer:**

```sql
ALTER TABLE Members
DROP COLUMN Phone;
```

**Question 5:**

Implement a check constraint on the `PublicationYear` column of the `Books` table to ensure that the year is greater than 1900.

**Answer:**

```sql
ALTER TABLE Books
ADD CONSTRAINT CK_PublicationYear CHECK (PublicationYear > 1900);
```

**Question 6:**

Add the `ON DELETE CASCADE` clause to the foreign key relationship between the `Loans` table and `Books` table.

**Answer:**

First drop existing constraint:

```sql
ALTER TABLE Loans
DROP CONSTRAINT Loans_ibfk_1; --  The constraint name may vary

```

Then, recreate constraint with cascade:

```sql
ALTER TABLE Loans
ADD CONSTRAINT FK_BookID FOREIGN KEY (BookID) REFERENCES Books(BookID) ON DELETE CASCADE;

```

Remember that `Loans_ibfk_1` is a possible automatically generated constraint name, and the name might be different on your database system. You can query the database metadata (system tables) to find out the constraint names, using system catalog views, for example.

## 9. Important Points to Remember

*   DDL is crucial for defining the database structure.
*   Constraints enforce data integrity and consistency.
*   Foreign keys establish relationships between tables.
*   Indices improve query performance but can impact write performance.
*   Use `ALTER TABLE` carefully, as modifications can be complex.
*   `DROP TABLE` permanently removes tables and their data. **Always back up your data before dropping a table!**
*   The specific syntax for DDL commands may vary slightly depending on the DBMS you are using.  Consult the documentation for your specific DBMS.
*   Understand the trade-offs between read and write performance when deciding whether to create indices.
*   Proper schema design is essential for building efficient and reliable database applications.
